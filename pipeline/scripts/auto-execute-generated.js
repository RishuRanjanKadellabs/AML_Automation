#!/usr/bin/env node
/**
 * Execute exactly the generated specs listed by the current manifest or --specs.
 */
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const {
  absolute,
  arg,
  escapeRegex,
  manifestSpecPaths,
  readJson,
  relative,
  unique,
  writeJson,
} = require("./qa-pipeline-utils.cjs");
const { moduleFromSpecPath } = require("./generate-module-defects.js");

function runPlaywright(specPaths, caseIds = []) {
  return new Promise((resolve, reject) => {
    const args = [
      "playwright",
      "test",
      ...specPaths,
      "--project=milestone2-chromium",
      "--reporter=json",
    ];
    if (caseIds.length) {
      args.push(
        "--grep",
        `Test Case ID:(?:${caseIds.map(escapeRegex).join("|")})(?:\\b|\\s|-)`
      );
    }
    // Default headless for QA pipeline post-generation runs so browsers do not
    // pop up during scripting. Override with PW_HEADLESS=0 for a visible run.
    const headless =
      process.env.PW_HEADLESS === "0" || process.env.HEADLESS === "false"
        ? "0"
        : "1";
    const processHandle = spawn("npx", args, {
      cwd: path.resolve(__dirname, "../.."),
      stdio: ["ignore", "pipe", "pipe"],
      env: {
        ...process.env,
        PW_HEADLESS: headless,
        HEADLESS: headless === "1" ? "true" : "false",
        PW_SCREENSHOT: "only-on-failure",
      },
    });
    let stdout = "";
    let stderr = "";
    processHandle.stdout.on("data", (data) => {
      stdout += data.toString();
    });
    processHandle.stderr.on("data", (data) => {
      stderr += data.toString();
    });
    processHandle.on("close", (exitCode) => resolve({ exitCode, stdout, stderr }));
    processHandle.on("error", reject);
  });
}

function finalResult(test) {
  const results = test.results || [];
  return results[results.length - 1] || {};
}

function parsePlaywrightResults(jsonOutput) {
  let report;
  try {
    report = JSON.parse(jsonOutput);
  } catch {
    const firstBrace = jsonOutput.indexOf("{");
    const lastBrace = jsonOutput.lastIndexOf("}");
    if (firstBrace < 0 || lastBrace <= firstBrace) throw new Error("Playwright JSON report not found");
    report = JSON.parse(jsonOutput.slice(firstBrace, lastBrace + 1));
  }
  const summary = {
    passed: 0,
    failed: 0,
    skipped: 0,
    blocked: 0,
    timedOut: 0,
    interrupted: 0,
    total: 0,
  };
  const failedIds = [];
  const caseResults = [];
  function visit(suites, parentFile = "") {
    for (const suite of suites || []) {
      const suiteFile = suite.file || parentFile;
      for (const spec of suite.specs || []) {
        const specPath = spec.file || suiteFile;
        for (const test of spec.tests || []) {
          const result = finalResult(test);
          const status = result.status || test.status || "failed";
          const idMatch = String(spec.title || "").match(
            /(?:Test\s+)?Case ID:\s*([A-Za-z0-9_-]+)/i
          );
          summary.total += 1;
          if (status === "passed" || status === "expected") summary.passed += 1;
          else if (status === "skipped") summary.skipped += 1;
          else if (status === "timedOut") {
            summary.timedOut += 1;
            summary.failed += 1;
          } else if (status === "interrupted") {
            summary.interrupted += 1;
            summary.blocked += 1;
          } else summary.failed += 1;
          if (!["passed", "expected", "skipped"].includes(status)) {
            if (idMatch) failedIds.push(idMatch[1]);
          }
          if (idMatch) {
            caseResults.push({
              testCaseId: idMatch[1],
              title: spec.title,
              status,
              duration: result.duration || 0,
              error: result.error?.message || null,
              specPath,
              module: moduleFromSpecPath(specPath),
              screenshotPaths: (result.attachments || [])
                .filter((attachment) => attachment.contentType?.startsWith("image/"))
                .map((attachment) => attachment.path)
                .filter(Boolean),
            });
          }
        }
      }
      visit(suite.suites, suiteFile);
    }
  }
  visit(report.suites);
  return { report, summary, failedIds: unique(failedIds), caseResults };
}

function requestedSpecs(manifest, specsArgument) {
  const paths = specsArgument
    ? specsArgument.split(",").map((value) => value.trim()).filter(Boolean)
    : manifestSpecPaths(manifest);
  return unique(paths);
}

function caseIdsInSpecs(specs) {
  const ids = [];
  for (const specPath of specs) {
    const source = fs.readFileSync(absolute(specPath), "utf8");
    for (const match of source.matchAll(
      /(?:Test\s+)?Case ID:\s*([A-Za-z0-9_-]+)/gi
    )) {
      ids.push(match[1]);
    }
  }
  return unique(ids);
}

async function main() {
  const manifestPath = arg("manifest", "results/qa-pipeline/generation/generation-manifest.json");
  const batchPlanPath = arg("batch-plan");
  const batchIndex = Number.parseInt(arg("batch-index", "0"), 10) || null;
  const phase = arg("phase", batchIndex ? "pre-heal" : "post-generation");
  const outputPath = arg(
    "out",
    batchIndex
      ? `results/qa-pipeline/execution/batch-${batchIndex}/execution-report.json`
      : "results/qa-pipeline/execution/execution-report.json"
  );
  const rawLogPath = arg(
    "log",
    batchIndex
      ? `results/qa-pipeline/execution/batch-${batchIndex}/playwright.json`
      : "results/qa-pipeline/execution/playwright-post-gen.json"
  );
  try {
    const manifest = readJson(manifestPath);
    let caseIds = unique(
      arg("case-ids")
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean)
    );
    if (batchIndex && !caseIds.length) {
      if (!batchPlanPath) throw new Error("--batch-plan is required with --batch-index");
      const batchPlan = readJson(batchPlanPath);
      const batch = (batchPlan.batches || []).find(
        (candidate) => Number(candidate.index) === batchIndex
      );
      if (!batch) throw new Error(`Batch ${batchIndex} not found`);
      caseIds = unique(batch.caseIds || []);
      if (!caseIds.length) throw new Error(`Batch ${batchIndex} has no case IDs`);
    }
    const specs = requestedSpecs(manifest, arg("specs"));
    if (!specs.length) throw new Error("Generation manifest contains no spec paths");
    const missingSpecs = specs.filter((specPath) => !fs.existsSync(absolute(specPath)));
    if (missingSpecs.length) {
      throw new Error(`Generated specs are missing: ${missingSpecs.join(", ")}`);
    }
    if (caseIds.length) {
      const implementedIds = new Set(caseIdsInSpecs(specs));
      const missingCaseIds = caseIds.filter((id) => !implementedIds.has(id));
      if (missingCaseIds.length) {
        throw new Error(
          `Batch ${batchIndex} generation incomplete; missing IDs: ${missingCaseIds.join(", ")}`
        );
      }
      console.log(
        `Batch ${batchIndex} generated: ${caseIds.length}/${caseIds.length}`
      );
    }
    console.log(
      `Executing ${specs.length} generated module spec(s) once` +
        `${batchIndex ? ` for batch ${batchIndex} (${caseIds.length} cases)` : ""}:`
    );
    specs.forEach((specPath) => console.log(`  ${specPath}`));
    const run = await runPlaywright(specs, caseIds);
    fs.mkdirSync(path.dirname(absolute(rawLogPath)), { recursive: true });
    fs.writeFileSync(absolute(rawLogPath), run.stdout || "");

    let parsed = null;
    let parseError = null;
    try {
      parsed = parsePlaywrightResults(run.stdout);
    } catch (error) {
      parseError = error.message;
    }
    const summary = parsed?.summary || {
      passed: 0,
      failed: 0,
      skipped: 0,
      blocked: manifest.eligibleCaseIds?.length || 0,
      timedOut: 0,
      interrupted: 0,
      total: manifest.eligibleCaseIds?.length || 0,
    };
    const report = {
      stage: batchIndex ? "batchExecution" : "postGenRun",
      phase,
      status: parsed ? "Executed" : "Blocked",
      executedAt: new Date().toISOString(),
      batchIndex,
      batchCount: batchIndex ? 6 : null,
      expectedCaseIds: caseIds,
      sourceExcel: manifest.sourceExcel || null,
      generationManifest: relative(manifestPath),
      specsExecuted: specs,
      executionSummary: summary,
      failedIds: parsed?.failedIds || [],
      caseResults: parsed?.caseResults || [],
      classifications: parsed?.failedIds?.map((testCaseId) => ({
        testCaseId,
        classification: "unclassified",
        reason: "Classify before the batch healer; only automation defects are eligible",
      })) || [],
      evidence: {
        playwrightExitCode: run.exitCode,
        logFile: relative(rawLogPath),
        stderr: run.stderr,
        parseError,
      },
    };
    writeJson(outputPath, report);
    console.log(
      `Execution: Passed ${summary.passed} / Failed ${summary.failed} / Blocked ${summary.blocked} / Total ${summary.total}`
    );
    if (summary.failed || summary.blocked) {
      console.log(
        batchIndex
          ? "Failures must be classified before the one permitted batch healer cycle."
          : "Failures are preserved for review."
      );
    }
    return report;
  } catch (error) {
    console.error(`Auto-execution failed: ${error.message}`);
    process.exitCode = 1;
    return null;
  }
}

if (require.main === module) main();
module.exports = { main, parsePlaywrightResults };
