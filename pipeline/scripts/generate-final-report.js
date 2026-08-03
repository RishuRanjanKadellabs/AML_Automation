#!/usr/bin/env node
/**
 * Generate module-agnostic final JSON/Markdown reports from pipeline artifacts.
 */
const fs = require("fs");
const path = require("path");
const {
  absolute,
  arg,
  executionSummary,
  manifestSpecPaths,
  normalizedCases,
  readJson,
  relative,
  unique,
  writeJson,
} = require("./qa-pipeline-utils.cjs");

function optionalJson(filePath) {
  return filePath && fs.existsSync(absolute(filePath)) ? readJson(filePath) : null;
}

function testIdsInSpec(specPath) {
  if (!fs.existsSync(absolute(specPath))) return [];
  const source = fs.readFileSync(absolute(specPath), "utf8");
  return unique(
    [...source.matchAll(/(?:Test\s+)?Case ID:\s*([A-Za-z0-9_-]+)/gi)].map(
      (match) => match[1]
    )
  );
}

function specByCaseId(specPaths) {
  const map = new Map();
  for (const specPath of specPaths) {
    for (const testCaseId of testIdsInSpec(specPath)) map.set(testCaseId, specPath);
  }
  return map;
}

function requirementId(testCase, coverage) {
  const direct = testCase.requirementReference || testCase.requirementId;
  if (direct) return direct;
  const rows = coverage?.rows || coverage?.mappings || [];
  const mapping = rows.find((row) =>
    (row.testCaseIds || []).includes(testCase.testCaseId)
  );
  return mapping?.requirementId || null;
}

function main() {
  const validationPath = arg("validation", "results/qa-pipeline/validation/validation-report.json");
  const normalizedPath = arg("normalized", "results/qa-pipeline/normalized/test-cases.json");
  const manifestPath = arg("manifest", "results/qa-pipeline/generation/generation-manifest.json");
  const executionPath = arg(
    "execution",
    "results/qa-pipeline/execution/aggregate-execution-report.json"
  );
  const coveragePath = arg("coverage");
  const outputPath = arg("out", "results/qa-pipeline/final/final-report.json");
  const markdownPath = arg("markdown", "results/qa-pipeline/final/final-report.md");
  try {
    const validation = readJson(validationPath);
    const normalized = readJson(normalizedPath);
    const manifest = readJson(manifestPath);
    const execution = optionalJson(executionPath);
    const coverage = optionalJson(coveragePath);
    const cases = normalizedCases(normalized);
    const specPaths = manifestSpecPaths(manifest);
    const caseToSpec = specByCaseId(specPaths);
    const batchSummaries = execution?.batches || [];
    const batchCaseResults = batchSummaries.flatMap((batch) => {
      const postPath = batch.artifacts?.postHealExecution;
      const prePath = batch.artifacts?.preHealExecution;
      return optionalJson(postPath)?.caseResults || optionalJson(prePath)?.caseResults || [];
    });
    const resultById = new Map(
      [...(execution?.caseResults || []), ...batchCaseResults].map((result) => [
        result.testCaseId,
        result,
      ])
    );
    const liveEvidence = manifest.liveUiEvidenceByCase || {};
    const matrix = cases.map((testCase) => {
      const validationRow = (validation.rows || []).find(
        (row) => row.testCaseId === testCase.testCaseId
      );
      const result = resultById.get(testCase.testCaseId);
      return {
        excelFile: normalized.sourceExcel || validation.filePath || manifest.sourceExcel || null,
        worksheet: testCase.source?.worksheetName || validation.worksheetName || null,
        excelRowNumber: validationRow?.excelRowNumber || testCase.source?.excelRowNumber || null,
        testCaseId: testCase.testCaseId,
        requirementId: requirementId(testCase, coverage),
        module: testCase.functionalArea || testCase.module || "Unknown Module",
        title: testCase.title,
        validationStatus: validationRow?.validationStatus || "Unknown",
        automationFeasibility: testCase.automationFeasibility?.rating || "Unknown",
        liveUiGenerationEvidence: liveEvidence[testCase.testCaseId] || null,
        generatedSpec: caseToSpec.get(testCase.testCaseId) || null,
        executionStatus: result?.status || (execution ? "not-reported" : "not-executed"),
        finalStatus: result?.status || (execution ? "Unknown" : "Blocked"),
      };
    });
    const moduleCounts = Object.fromEntries(
      (normalized.moduleBreakdown || []).map((entry) => [entry.module, entry.count])
    );
    if (!Object.keys(moduleCounts).length) {
      for (const testCase of cases) {
        const module = testCase.functionalArea || testCase.module || "Unknown Module";
        moduleCounts[module] = (moduleCounts[module] || 0) + 1;
      }
    }
    const counts = executionSummary(execution);
    const eligibleUiCount = (manifest.eligibleUiCaseIds || []).length;
    const liveValidatedCount = (manifest.liveUiValidatedCaseIds || []).length;
    const report = {
      meta: {
        pipelineVersion: "2.0",
        generatedAt: new Date().toISOString(),
        sourceExcel: normalized.sourceExcel || validation.filePath || manifest.sourceExcel || null,
        agent: "qa-automation-pipeline",
      },
      validationSummary: {
        totalRows: validation.totalRows || (validation.rows || []).length,
        ...(validation.validationSummary || {}),
      },
      normalizationSummary: {
        totalNormalizedCases: cases.length,
        byModule: moduleCounts,
        automationFeasibility: normalized.automationFeasibilitySummary || {},
      },
      generationSummary: {
        specFiles: specPaths,
        generatedCaseCount: (manifest.generatedCaseIds || []).length,
        eligibleCaseCount: (manifest.eligibleCaseIds || []).length,
        eligibleUiCaseCount: eligibleUiCount,
        liveUiValidatedCaseCount: liveValidatedCount,
        liveUiCoveragePercent: Number(manifest.liveUiCoveragePercent || 0),
        status: manifest.status || "Unknown",
      },
      executionSummary: counts,
      batchSummaries,
      remainingFailures: execution?.classifications || [],
      traceability: {
        excelToScriptToResult: matrix,
        requirementCoverage:
          coverage?.coveragePct ?? coverage?.overallCoveragePercent ?? null,
        totalMappings: matrix.length,
      },
      artifacts: {
        validation: relative(validationPath),
        normalization: relative(normalizedPath),
        generationManifest: relative(manifestPath),
        generationSpecs: specPaths,
        execution: execution ? relative(executionPath) : null,
        defectFiles: execution?.defectFiles || [],
        coverage: coverage ? relative(coveragePath) : null,
        locatorsRoot: "tests/milestone2/objectrepositories/",
        pagesRoot: "tests/milestone2/pages/",
      },
      healing: {
        automatic: true,
        policy: "At most one healer invocation and one changed-case verification run per batch",
        batchesWithHealing: batchSummaries.filter((batch) => batch.healerInvoked).length,
      },
    };
    writeJson(outputPath, report);
    const moduleLines = Object.entries(moduleCounts)
      .map(([module, count]) => `- **${module}:** ${count}`)
      .join("\n");
    const specLines = specPaths.length
      ? specPaths.map((specPath) => `- \`${specPath}\``).join("\n")
      : "- None";
    const defectLines = report.artifacts.defectFiles.length
      ? report.artifacts.defectFiles
          .map((filePath) => `- \`${filePath}\``)
          .join("\n")
      : "- None (no remaining failures after heal / final execution)";
    const markdown = `# QA Automation Pipeline — Final Report

**Source:** ${report.meta.sourceExcel || "Unknown"}  
**Generated:** ${report.meta.generatedAt}  
**Normalized cases:** ${cases.length}

## Modules
${moduleLines || "- None"}

## Generation
- **Generated cases:** ${report.generationSummary.generatedCaseCount}/${report.generationSummary.eligibleCaseCount}
- **Live UI:** ${liveValidatedCount}/${eligibleUiCount} (${report.generationSummary.liveUiCoveragePercent}%)
- **Status:** ${report.generationSummary.status}

## Execution
- **Passed:** ${counts.passed}
- **Failed:** ${counts.failed}
- **Skipped:** ${counts.skipped}
- **Blocked:** ${counts.blocked}
- **Total:** ${counts.total}

## Batches
${batchSummaries.length
  ? batchSummaries
      .map(
        (batch) =>
          `- **Batch ${batch.index}:** generated ${batch.generatedCount ?? "unknown"}/${batch.expectedCaseCount}; ` +
          `pre-heal P${batch.preHealCounts?.passed || 0}/F${batch.preHealCounts?.failed || 0}/B${batch.preHealCounts?.blocked || 0}; ` +
          `final P${batch.finalCounts?.passed || 0}/F${batch.finalCounts?.failed || 0}/B${batch.finalCounts?.blocked || 0}`
      )
      .join("\n")
  : "- Batch rollup unavailable"}

## Generated specs
${specLines}

## Defect workbooks
${defectLines}

## Healing
Automatic for classified automation failures only, at most once per batch.

## Traceability
Excel row → Test Case ID → Module → Live-UI evidence → Generated spec → Execution result
`;
    fs.mkdirSync(path.dirname(absolute(markdownPath)), { recursive: true });
    fs.writeFileSync(absolute(markdownPath), markdown);
    console.log(`Final report written for ${Object.keys(moduleCounts).length} module(s):`);
    console.log(`  ${outputPath}`);
    console.log(`  ${markdownPath}`);
    return report;
  } catch (error) {
    console.error(`Final report failed: ${error.message}`);
    process.exitCode = 1;
    return null;
  }
}

if (require.main === module) main();
module.exports = { main };
