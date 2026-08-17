#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const XLSX = require("xlsx");

const ROOT = path.resolve(__dirname, "../..");

function arg(name, fallback = "") {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 && process.argv[index + 1] ? process.argv[index + 1] : fallback;
}

function absolute(filePath) {
  return path.isAbsolute(filePath) ? filePath : path.join(ROOT, filePath);
}

function relative(filePath) {
  return path.relative(ROOT, absolute(filePath)).replaceAll("\\", "/");
}

function readJson(filePath, fallback = null) {
  try {
    return JSON.parse(fs.readFileSync(absolute(filePath), "utf8"));
  } catch {
    return fallback;
  }
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function normalizeHeader(value) {
  return String(value || "").toLowerCase().replace(/[\s_-]/g, "");
}

function sameSet(left, right) {
  const a = unique(left).sort();
  const b = unique(right).sort();
  return a.length === b.length && a.every((value, index) => value === b[index]);
}

/** Default: one snapshot/ref may cover at most this many cases. Override via QA_MAX_CASES_PER_EVIDENCE_REF. */
function maxCasesPerEvidenceRef() {
  const raw = Number(process.env.QA_MAX_CASES_PER_EVIDENCE_REF || 3);
  return Number.isFinite(raw) && raw >= 1 ? Math.floor(raw) : 3;
}

/**
 * Detect bulk/representative live-UI evidence reuse.
 * Agents previously filled unique control text while attaching the same .yml snapshot to dozens of cases.
 */
function auditLiveUiEvidence(evidenceByCase, caseIds) {
  const maxReuse = maxCasesPerEvidenceRef();
  const refToCases = new Map();
  const refToModuleUrls = new Map();
  const casesWithEvidence = [];

  for (const id of caseIds) {
    const evidence = evidenceByCase[id];
    if (!evidence) continue;
    casesWithEvidence.push(id);
    const moduleUrl = String(evidence.moduleUrl || "").trim();
    for (const ref of unique(evidence.evidenceReferences || [])) {
      if (!refToCases.has(ref)) refToCases.set(ref, []);
      refToCases.get(ref).push(id);
      if (!refToModuleUrls.has(ref)) refToModuleUrls.set(ref, new Set());
      if (moduleUrl) refToModuleUrls.get(ref).add(moduleUrl);
    }
  }

  const reusedEvidenceReferences = [...refToCases.entries()]
    .filter(([, ids]) => ids.length > maxReuse)
    .map(([ref, ids]) => ({
      evidenceReference: ref,
      caseCount: ids.length,
      caseIds: ids.slice(0, 40),
      truncated: ids.length > 40,
    }))
    .sort((a, b) => b.caseCount - a.caseCount);

  const conflictingModuleUrlsByEvidence = [...refToModuleUrls.entries()]
    .filter(([, urls]) => urls.size > 1)
    .map(([ref, urls]) => ({
      evidenceReference: ref,
      moduleUrls: [...urls].sort(),
      caseCount: (refToCases.get(ref) || []).length,
    }));

  const uniqueEvidenceReferenceCount = refToCases.size;
  const maxReuseCount = Math.max(0, ...[...refToCases.values()].map((ids) => ids.length));
  const noBulkLiveUiEvidence =
    reusedEvidenceReferences.length === 0 && conflictingModuleUrlsByEvidence.length === 0;

  return {
    noBulkLiveUiEvidence,
    maxCasesPerEvidenceReference: maxReuse,
    uniqueEvidenceReferenceCount,
    maxReuseCount,
    reusedEvidenceReferences,
    conflictingModuleUrlsByEvidence,
    evidenceCaseCount: casesWithEvidence.length,
  };
}

function loadExcel(excelPath) {
  const workbook = XLSX.readFile(excelPath);
  const rows = workbook.SheetNames.flatMap((sheetName) =>
    XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: "" })
  );
  const headers = unique(rows.flatMap((row) => Object.keys(row)));
  const headerByName = Object.fromEntries(headers.map((header) => [normalizeHeader(header), header]));
  const idHeader = headerByName.testcaseid || headerByName.caseid || headerByName.id;
  const moduleHeader = headerByName.module;
  if (!idHeader) throw new Error("Excel has no Test Case ID column");
  return {
    ids: unique(rows.map((row) => String(row[idHeader] || "").trim())),
    modules: unique(rows.map((row) => String(row[moduleHeader] || "").trim())),
  };
}

function eligibleIds(excelIds) {
  const validation = readJson("results/qa-pipeline/validation/validation-report.json");
  if (!validation?.rows?.length) return excelIds;
  const allowed = new Set(["valid", "valid with warnings"]);
  return unique(
    validation.rows
      .filter((row) => allowed.has(String(row.validationStatus || row.status || "").toLowerCase()))
      .map((row) => String(row.testCaseId || "").trim())
  );
}

function specIds(specPaths) {
  const ids = [];
  for (const specPath of specPaths) {
    const source = fs.readFileSync(specPath, "utf8");
    for (const match of source.matchAll(/(?:Test\s+)?Case ID:\s*([A-Za-z0-9_-]+)/gi)) {
      ids.push(match[1]);
    }
  }
  return unique(ids);
}

function executionCounts(report) {
  const counts =
    report?.executionSummary ||
    report?.summary ||
    report?.finalCounts ||
    report?.finalSummary ||
    {};
  return {
    passed: Number(counts.passed || 0),
    failed: Number(counts.failed || 0),
    skipped: Number(counts.skipped || 0),
    blocked: Number(counts.blocked || 0),
    total: Number(counts.total || 0),
  };
}

const excelArg = arg("excel");
const specsArg = arg("specs");
const deltaArg = arg("delta");
if (!excelArg || !specsArg) {
  console.error(
    "Usage: npm run qa:verify-completion -- --excel <path.xlsx> --specs <a.spec.ts,b.spec.ts> [--delta <tc-delta-report.json>]"
  );
  process.exit(2);
}

const excelPath = absolute(excelArg);
const specPaths = specsArg.split(",").map((value) => absolute(value.trim())).filter(Boolean);
const deltaPath = deltaArg ? absolute(deltaArg) : "";
const missingInputs = [excelPath, ...specPaths].filter((filePath) => !fs.existsSync(filePath));
if (deltaPath && !fs.existsSync(deltaPath)) {
  missingInputs.push(deltaPath);
}
if (missingInputs.length) {
  console.error(`Missing input files:\n${missingInputs.join("\n")}`);
  process.exit(2);
}

const deltaReport = deltaPath ? readJson(deltaPath, null) : null;
const pipelineMode =
  deltaReport?.excelMode === "reconcile" || manifestPipelineMode() === "reconcile"
    ? "reconcile"
    : "create";

function manifestPipelineMode() {
  const earlyManifest = readJson("results/qa-pipeline/generation/generation-manifest.json", {});
  return String(earlyManifest.pipelineMode || "").toLowerCase();
}

const excel = loadExcel(excelPath);
const eligible = eligibleIds(excel.ids);
const implemented = specIds(specPaths);
const missingCaseIds = eligible.filter((id) => !implemented.includes(id));

const retiredCaseIds = unique(
  (deltaReport?.retire || []).map((entry) =>
    typeof entry === "string" ? entry : String(entry.testCaseId || "").trim()
  )
);
const deltaAddIds = unique(
  (deltaReport?.add || []).map((entry) =>
    typeof entry === "string" ? entry : String(entry.testCaseId || "").trim()
  )
);
const deltaUpdateIds = unique(
  (deltaReport?.update || []).map((entry) =>
    typeof entry === "string" ? entry : String(entry.testCaseId || "").trim()
  )
);
const deltaGenerateIds = unique([...deltaAddIds, ...deltaUpdateIds]);
const retiredStillInSpecs = retiredCaseIds.filter((id) => implemented.includes(id));
const deltaMissingFromSpecs =
  pipelineMode === "reconcile"
    ? deltaGenerateIds.filter((id) => eligible.includes(id) && !implemented.includes(id))
    : [];
const noRetiredCaseTests = retiredStillInSpecs.length === 0;
const deltaFullyApplied =
  pipelineMode !== "reconcile" ||
  (noRetiredCaseTests &&
    deltaMissingFromSpecs.length === 0 &&
    Boolean(deltaReport?.removalsApproved || retiredCaseIds.length === 0));

const manifestPath = arg(
  "manifest",
  arg("results-root", "")
    ? `${arg("results-root")}/generation/generation-manifest.json`
    : "results/qa-pipeline/generation/generation-manifest.json"
);
const manifest = readJson(manifestPath, {});
const batchPlanPath = arg(
  "batch-plan",
  "results/qa-pipeline/batches/batch-plan.json"
);
const batchPlan = readJson(batchPlanPath, {});
const aggregateExecutionPath =
  "results/qa-pipeline/execution/aggregate-execution-report.json";
const aggregateExecution = readJson(aggregateExecutionPath, {});
const eligibleUiCaseIds = unique(manifest.eligibleUiCaseIds || []);
const liveUiValidatedCaseIds = unique(manifest.liveUiValidatedCaseIds || []);
const liveUiMissingCaseIds = eligibleUiCaseIds.filter((id) => !liveUiValidatedCaseIds.includes(id));
const evidenceByCase = manifest.liveUiEvidenceByCase || {};
const blockedUiCaseIds = unique(manifest.blockedUiCaseIds || []);
const blockedUiReasons = manifest.blockedUiReasons || {};
const evidenceComplete = eligibleUiCaseIds.every((id) => {
  const evidence = evidenceByCase[id];
  return Boolean(
    evidence?.moduleUrl &&
      evidence?.evidenceReferences?.length &&
      evidence?.controlsOrActionsValidated?.length
  );
});
const liveUiCoveragePercent = eligibleUiCaseIds.length
  ? (liveUiValidatedCaseIds.filter((id) => eligibleUiCaseIds.includes(id)).length /
      eligibleUiCaseIds.length) *
    100
  : 0;
const liveUiEvidenceAudit = auditLiveUiEvidence(evidenceByCase, eligibleUiCaseIds);
const excelIdsCoveredByLiveOrBlocked = unique([...eligibleUiCaseIds, ...blockedUiCaseIds]);
const uiEligibilityUniverse =
  pipelineMode === "reconcile" && deltaGenerateIds.length
    ? deltaGenerateIds.filter((id) => eligible.includes(id))
    : eligible;
const excelEligibleMissingFromUiEligibility = uiEligibilityUniverse.filter(
  (id) => !excelIdsCoveredByLiveOrBlocked.includes(id)
);
const blockedWithoutReason = blockedUiCaseIds.filter((id) => {
  const reason = blockedUiReasons[id];
  return typeof reason !== "string" || reason.trim().length < 8;
});
const honestUiEligibility =
  excelEligibleMissingFromUiEligibility.length === 0 &&
  blockedWithoutReason.length === 0 &&
  eligibleUiCaseIds.every((id) => !blockedUiCaseIds.includes(id));

const smoke = spawnSync(
  process.execPath,
  [
    path.join(ROOT, "pipeline/scripts/detect-smoke-stub-specs.cjs"),
    "--excel",
    excelArg,
    "--specs",
    specsArg,
  ],
  { cwd: ROOT, encoding: "utf8" }
);
const smokeReportPath = "results/qa-pipeline/quality/smoke-stub-report.json";
const smokeReport = readJson(smokeReportPath, {});

const executionPath = "results/qa-pipeline/execution/execution-report.json";
const execution =
  aggregateExecution.batchCount === 6
    ? aggregateExecution
    : readJson(executionPath, {});
const counts = executionCounts(execution);
const executionEvidence = execution.evidence || {};
const batchEntries = Array.isArray(batchPlan.batches) ? batchPlan.batches : [];
const exactlySixBatches =
  batchPlan.batchCount === 6 && batchEntries.length === 6;
const batchRunAudit = batchEntries.map((batch) => {
  const reportPath =
    `results/qa-pipeline/execution/batch-${batch.index}/execution-report.json`;
  const report = readJson(reportPath, {});
  const reportCounts = executionCounts(report);
  const actualIds = unique(
    (report.caseResults || []).map((result) => result.testCaseId)
  );
  const expectedIds = unique(batch.caseIds || []);
  return {
    index: batch.index,
    expectedCaseCount: expectedIds.length,
    executedCaseCount: actualIds.length,
    reportPath,
    complete:
      expectedIds.length === 0 ||
      Boolean(report.executedAt) &&
        Number.isInteger(report.evidence?.playwrightExitCode) &&
        sameSet(expectedIds, actualIds) &&
        reportCounts.total >= expectedIds.length,
  };
});
const realPlaywrightBatchRunsComplete =
  exactlySixBatches && batchRunAudit.every((batch) => batch.complete);
const healerAudit = batchEntries.map((batch) => {
  const handoffPath =
    `results/qa-pipeline/healing/batch-${batch.index}/healing-handoff.json`;
  const healingPath =
    `results/qa-pipeline/healing/batch-${batch.index}/healing-report.json`;
  const handoff = readJson(handoffPath, null);
  const healing = readJson(healingPath, null);
  const required = Boolean(handoff?.input?.casesSelectedForHealing?.length);
  const invocationCount = Number(
    healing?.healerInvocationCount ?? (healing ? 1 : 0)
  );
  const provenanceValid =
    !required ||
    (typeof healing?.healerAgentId === "string" &&
      healing.healerAgentId.trim().length >= 8);
  return {
    index: batch.index,
    required,
    invocationCount,
    atMostOnce: invocationCount <= 1,
    completed: !required || (invocationCount === 1 && provenanceValid),
    provenanceValid,
    healingReportPath: healing ? healingPath : null,
  };
});
const healerInvokedAtMostOncePerBatch = healerAudit.every(
  (batch) => batch.atMostOnce
);
const batchHealingComplete = healerAudit.every((batch) => batch.completed);
const allSixBatchesComplete = Boolean(
  exactlySixBatches &&
    aggregateExecution.completedBatchCount === 6 &&
    aggregateExecution.status === "Complete"
);
const agentInvocationProvenance = Boolean(
  manifest.orchestratorAgentType === "qa-automation-pipeline" &&
    typeof manifest.orchestratorAgentId === "string" &&
    manifest.orchestratorAgentId.trim().length >= 8 &&
    manifest.generatorAgentType === "playwright-test-generator" &&
    typeof manifest.generatorAgentId === "string" &&
    manifest.generatorAgentId.trim().length >= 8
);
const finalExecutionFailureCount = Number(
  aggregateExecution.finalSummary?.failed || 0
);
const defectFiles = Array.isArray(aggregateExecution.defectFiles)
  ? aggregateExecution.defectFiles
  : [];
const defectFilesGeneratedForFailures =
  finalExecutionFailureCount === 0 ||
  (defectFiles.length > 0 &&
    defectFiles.every((filePath) => fs.existsSync(absolute(filePath))));
const noDefectFilesGeneratedForCleanRun =
  finalExecutionFailureCount > 0 || defectFiles.length === 0;

const resultsRootArg = arg("results-root", "");
const excelFidelityReportPath = arg(
  "excel-fidelity-report",
  resultsRootArg
    ? path.join(resultsRootArg, "final/batch-1-4-excel-fidelity-report.json")
    : "",
);
const excelFidelityFallbackPath = resultsRootArg
  ? path.join(resultsRootArg, "final/excel-fidelity-report.json")
  : "";
const excelFidelityReport = readJson(
  excelFidelityReportPath,
  readJson(excelFidelityFallbackPath, null),
);
const excelFidelityReportExists = Boolean(excelFidelityReport?.totals);
const passesExcelFidelityGate = excelFidelityReportExists
  ? Boolean(excelFidelityReport.totals.passesExcelGate)
  : true;
const excelCoveragePercent = excelFidelityReportExists
  ? excelFidelityReport.totals.avgOverallExcelPct
  : null;

const finalReportPath = "results/qa-pipeline/final/final-report.md";
const checks = {
  pipelineMode,
  allEligibleCasesInSpecs: missingCaseIds.length === 0 && eligible.length > 0,
  eligibleCaseCount: eligible.length,
  specCaseCount: implemented.length,
  missingCaseIds,
  deltaFullyApplied,
  noRetiredCaseTests,
  retiredCaseIds,
  retiredStillInSpecs,
  deltaGenerateIds,
  deltaMissingFromSpecs,
  oneSpecPerModule: specPaths.length <= excel.modules.length || excel.modules.length === 0,
  noPerTcSpecFiles: specPaths.every(
    (filePath) => !/(?:^|\/)(?:tc[-_]|[A-Z]{2,}[-_]TC[-_])\w+\.spec\.ts$/i.test(relative(filePath))
  ),
  loginBypassed: true,
  liveUiUsedForGeneration:
    (eligibleUiCaseIds.length > 0 && evidenceComplete) ||
    (pipelineMode === "reconcile" && deltaGenerateIds.length === 0),
  allEligibleUiCasesLiveValidated:
    ((eligibleUiCaseIds.length > 0 &&
      sameSet(eligibleUiCaseIds, liveUiValidatedCaseIds) &&
      liveUiMissingCaseIds.length === 0 &&
      evidenceComplete) ||
      (pipelineMode === "reconcile" &&
        deltaGenerateIds.length === 0 &&
        eligibleUiCaseIds.length === 0)),
  eligibleUiCaseCount: eligibleUiCaseIds.length,
  liveUiValidatedCaseCount: liveUiValidatedCaseIds.length,
  liveUiValidatedCaseIds,
  liveUiMissingCaseIds,
  liveUiCoveragePercent:
    eligibleUiCaseIds.length === 0 && pipelineMode === "reconcile"
      ? 100
      : liveUiCoveragePercent,
  noBulkLiveUiEvidence: liveUiEvidenceAudit.noBulkLiveUiEvidence,
  honestUiEligibility,
  blockedUiCaseIds,
  excelEligibleMissingFromUiEligibility,
  blockedWithoutReason,
  liveUiEvidenceAudit,
  exactlySixBatches,
  allSixBatchesComplete,
  realPlaywrightBatchRunsComplete,
  batchRunAudit,
  healerInvokedAtMostOncePerBatch,
  batchHealingComplete,
  healerAudit,
  finalCountsReportedToUser: fs.existsSync(absolute(finalReportPath)),
  didNotExitWhileGenerationInProgress: manifest.status === "Complete",
  agentInvocationProvenance,
  finalExecutionFailureCount,
  defectFiles,
  defectFilesGeneratedForFailures,
  noDefectFilesGeneratedForCleanRun,
  noSmokeStubSpecs: smoke.status === 0 && smokeReport?.summary?.passed === true,
  smokeStubCount: Number(smokeReport?.summary?.smokeStubCount ?? -1),
  smokeStubCaseIds: smokeReport.smokeStubCaseIds || [],
  smokeStubReportPath: smokeReportPath,
  excelFidelityReportExists,
  passesExcelFidelityGate,
  excelCoveragePercent,
  excelFidelityFailingCaseIds: excelFidelityReport?.failingCaseIds || [],
  excelFidelityReportPath: excelFidelityReportExists
    ? relative(excelFidelityReportPath)
    : null,
};

const hardChecks = [
  checks.allEligibleCasesInSpecs,
  checks.oneSpecPerModule,
  checks.noPerTcSpecFiles,
  checks.liveUiUsedForGeneration,
  checks.allEligibleUiCasesLiveValidated,
  checks.liveUiCoveragePercent === 100,
  checks.noBulkLiveUiEvidence,
  checks.honestUiEligibility,
  checks.exactlySixBatches,
  checks.allSixBatchesComplete,
  checks.realPlaywrightBatchRunsComplete,
  checks.healerInvokedAtMostOncePerBatch,
  checks.batchHealingComplete,
  checks.finalCountsReportedToUser,
  checks.didNotExitWhileGenerationInProgress,
  checks.agentInvocationProvenance,
  checks.defectFilesGeneratedForFailures,
  checks.noDefectFilesGeneratedForCleanRun,
  checks.noSmokeStubSpecs,
  !checks.excelFidelityReportExists || checks.passesExcelFidelityGate,
  pipelineMode !== "reconcile" || checks.deltaFullyApplied,
  pipelineMode !== "reconcile" || checks.noRetiredCaseTests,
];
const gateStatus = hardChecks.every(Boolean) ? "Passed" : "Incomplete";
const blockParts = [];
if (pipelineMode === "reconcile" && !checks.noRetiredCaseTests) {
  blockParts.push(
    `Retired TC IDs still present in specs: ${retiredStillInSpecs.slice(0, 20).join(", ")}`
  );
}
if (pipelineMode === "reconcile" && !checks.deltaFullyApplied) {
  blockParts.push(
    `Reconcile delta not fully applied; missing generate-scope IDs in specs: ` +
      `${deltaMissingFromSpecs.slice(0, 20).join(", ") || "(none)"}` +
      (deltaReport && !deltaReport.removalsApproved && retiredCaseIds.length
        ? "; removalsApproved=false"
        : "")
  );
}
if (!checks.exactlySixBatches || !checks.allSixBatchesComplete) {
  blockParts.push(
    `Six-batch workflow incomplete: ${aggregateExecution.completedBatchCount || 0}/6 batches complete.`
  );
}
if (!checks.realPlaywrightBatchRunsComplete) {
  blockParts.push(
    `Missing or mismatched batch execution evidence for batch(es): ` +
      batchRunAudit.filter((batch) => !batch.complete).map((batch) => batch.index).join(", ")
  );
}
if (!checks.healerInvokedAtMostOncePerBatch) {
  blockParts.push("A batch exceeded the permitted single healer invocation.");
}
if (!checks.batchHealingComplete) {
  blockParts.push(
    `Required batch healer evidence/provenance missing for batch(es): ` +
      healerAudit.filter((batch) => !batch.completed).map((batch) => batch.index).join(", ")
  );
}
if (!checks.defectFilesGeneratedForFailures) {
  blockParts.push(
    "Final post-heal execution has failed test cases but the required module defect workbook is missing."
  );
}
if (!checks.noDefectFilesGeneratedForCleanRun) {
  blockParts.push(
    "A clean final (post-heal) execution must not register a generated defect workbook."
  );
}
if (!checks.noBulkLiveUiEvidence) {
  blockParts.push(
    `Bulk/representative live-UI evidence: max reuse ${liveUiEvidenceAudit.maxReuseCount} ` +
      `(limit ${liveUiEvidenceAudit.maxCasesPerEvidenceReference}); ` +
      `${liveUiEvidenceAudit.reusedEvidenceReferences.length} overused ref(s), ` +
      `${liveUiEvidenceAudit.conflictingModuleUrlsByEvidence.length} ref(s) with conflicting moduleUrl.`
  );
}
if (!checks.honestUiEligibility) {
  blockParts.push(
    `UI eligibility not honest: ${excelEligibleMissingFromUiEligibility.length} Excel eligible ` +
      `ID(s) missing from eligibleUiCaseIds∪blockedUiCaseIds` +
      (blockedWithoutReason.length
        ? `; ${blockedWithoutReason.length} blocked ID(s) lack reasons`
        : "") +
      "."
  );
}
if (!checks.noSmokeStubSpecs) {
  blockParts.push("Smoke-stub specs detected; interactive Excel cases must execute real flow steps.");
}
if (checks.excelFidelityReportExists && !checks.passesExcelFidelityGate) {
  blockParts.push(
    `Excel fidelity gate failed (${checks.excelCoveragePercent}% avg overall); ` +
      `failing cases: ${(checks.excelFidelityFailingCaseIds || []).slice(0, 20).join(", ")}`,
  );
}
if (gateStatus !== "Passed" && !blockParts.length) {
  blockParts.push("Generation/execution gate incomplete; inspect false checks and missing case IDs.");
}
const gate = {
  resultsKey: manifest.resultsKey || `qa-${Date.now()}`,
  excelPath: relative(excelPath),
  pipelineMode,
  generatedAt: new Date().toISOString(),
  gateStatus,
  checks,
  finalCounts: counts,
  evidencePaths: {
    normalizedCases: "results/qa-pipeline/normalized/test-cases.json",
    moduleSpecs: specPaths.map(relative),
    liveUiGenerationEvidence: manifestPath,
    batchPlan: batchPlanPath,
    batchExecutionRollup: aggregateExecutionPath,
    defectFiles,
    tcDeltaReport: deltaPath ? relative(deltaPath) : null,
    postGenExecution: aggregateExecution.batchCount === 6
      ? aggregateExecutionPath
      : executionPath,
    playwrightRawLog: executionEvidence.logFile || "results/execution.log",
    smokeStubReport: smokeReportPath,
  },
  blockReason: gateStatus === "Passed" ? null : blockParts.join(" "),
};

const outputPath = absolute("results/qa-pipeline/final/pipeline-completion-gate.json");
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(gate, null, 2)}\n`);
console.log(JSON.stringify({ gateStatus, checks, output: relative(outputPath) }, null, 2));

(async () => {
  try {
    const { writeAgentRunReport } = require("./write-agent-run-docx.cjs");
    const docx = await writeAgentRunReport("qa-automation-pipeline", {}, {
      fromArtifacts: true,
      gatePath: relative(outputPath),
      excelPath: relative(excelPath),
    });
    console.log(`Agent run docx → ${docx.relativePath}`);
  } catch (error) {
    console.warn(`Agent run docx skipped: ${error.message}`);
  } finally {
    process.exit(gateStatus === "Passed" ? 0 : 1);
  }
})();
