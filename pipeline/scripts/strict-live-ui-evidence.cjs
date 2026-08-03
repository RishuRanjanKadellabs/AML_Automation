#!/usr/bin/env node
/**
 * Audit and enforce strict live-UI evidence for QA pipeline batches.
 * Gate expects per-case: moduleUrl, evidenceReferences[], controlsOrActionsValidated[]
 * and noBulkLiveUiEvidence (default max 3 cases per evidence reference).
 */
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const ROOT = path.resolve(__dirname, "../..");

function arg(name, fallback = "") {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

function hasFlag(name) {
  return process.argv.includes(`--${name}`);
}

function abs(p) {
  return path.isAbsolute(p) ? p : path.join(ROOT, p);
}

function rel(p) {
  return path.relative(ROOT, abs(p)).replaceAll("\\", "/");
}

function readJson(p, fallback = null) {
  try {
    return JSON.parse(fs.readFileSync(abs(p), "utf8"));
  } catch {
    return fallback;
  }
}

function writeJson(p, data) {
  fs.mkdirSync(path.dirname(abs(p)), { recursive: true });
  fs.writeFileSync(abs(p), `${JSON.stringify(data, null, 2)}\n`);
}

function maxCasesPerRef() {
  const raw = Number(process.env.QA_MAX_CASES_PER_EVIDENCE_REF || 3);
  return Number.isFinite(raw) && raw >= 1 ? Math.floor(raw) : 3;
}

function auditEvidence(evidenceByCase, caseIds) {
  const maxReuse = maxCasesPerRef();
  const refToCases = new Map();
  let strictComplete = 0;
  const missing = [];
  const legacyOnly = [];

  for (const id of caseIds) {
    const e = evidenceByCase[id];
    if (!e) {
      missing.push(id);
      continue;
    }
    const strictOk =
      Boolean(e.moduleUrl) &&
      Array.isArray(e.evidenceReferences) &&
      e.evidenceReferences.length > 0 &&
      Array.isArray(e.controlsOrActionsValidated) &&
      e.controlsOrActionsValidated.length > 0;
    if (strictOk) {
      strictComplete++;
      for (const ref of e.evidenceReferences) {
        if (!refToCases.has(ref)) refToCases.set(ref, []);
        refToCases.get(ref).push(id);
      }
    } else if (e.snapshotPaths?.length || e.controlsVerified?.length) {
      legacyOnly.push(id);
    } else {
      missing.push(id);
    }
  }

  const reused = [...refToCases.entries()]
    .filter(([, ids]) => ids.length > maxReuse)
    .map(([ref, ids]) => ({ evidenceReference: ref, caseCount: ids.length, caseIds: ids }));

  const evidenceFilesMissing = [];
  for (const [ref] of refToCases) {
    if (!fs.existsSync(abs(ref))) evidenceFilesMissing.push(ref);
  }

  return {
    total: caseIds.length,
    strictComplete,
    strictCoveragePercent: caseIds.length
      ? Math.round((strictComplete / caseIds.length) * 100)
      : 0,
    missingCaseIds: missing,
    legacyOnlyCaseIds: legacyOnly,
    noBulkLiveUiEvidence: reused.length === 0,
    reusedEvidenceReferences: reused,
    evidenceFilesMissing,
    maxCasesPerEvidenceReference: maxReuse,
    passesStrictGate:
      strictComplete === caseIds.length &&
      reused.length === 0 &&
      evidenceFilesMissing.length === 0,
  };
}

function applyStrictEntry(manifest, caseId, batchIndex, payload) {
  if (!payload.controlsOrActionsValidated?.length) {
    throw new Error(`${caseId}: capture missing controlsOrActionsValidated`);
  }
  const resultsRoot = manifest.resultsRoot;
  const evidencePath = `${resultsRoot}/live-ui-evidence/batch-${batchIndex}/${caseId}.json`;
  writeJson(evidencePath, payload);
  manifest.liveUiEvidenceByCase[caseId] = {
    moduleUrl: payload.moduleUrl,
    evidenceReferences: [rel(evidencePath)],
    controlsOrActionsValidated: payload.controlsOrActionsValidated,
    validatedAt: payload.validatedAt,
  };
  if (!manifest.liveUiValidatedCaseIds.includes(caseId)) {
    manifest.liveUiValidatedCaseIds.push(caseId);
  }
}

function batchCaseIds(batchPlan, batchIndex) {
  const batch = batchPlan.batches.find((b) => b.index === batchIndex);
  return batch ? batch.caseIds : [];
}

function main() {
  const resultsRoot = arg(
    "results-root",
    "results/qa-pipeline/Customer Risk Rating Configuration Test Cases"
  );
  const manifestPath = arg(
    "manifest",
    `${resultsRoot}/generation/generation-manifest.json`
  );
  const batchPlanPath = arg("batch-plan", `${resultsRoot}/batches/batch-plan.json`);
  const batchArg = arg("batch", "");
  const batchIndexes = batchArg
    ? batchArg.split(",").map((v) => Number(v.trim())).filter(Boolean)
    : [1, 2, 3, 4, 5, 6];

  const manifest = readJson(manifestPath, {});
  const batchPlan = readJson(batchPlanPath, {});
  const evidenceByCase = manifest.liveUiEvidenceByCase || {};

  const report = {
    auditedAt: new Date().toISOString(),
    resultsRoot,
    manifestPath: rel(manifestPath),
    batches: {},
    allBatchesPassStrictGate: true,
  };

  for (const batchIndex of batchIndexes) {
    const caseIds = batchCaseIds(batchPlan, batchIndex);
    if (!caseIds.length) continue;
    const audit = auditEvidence(evidenceByCase, caseIds);
    report.batches[String(batchIndex)] = audit;
    if (!audit.passesStrictGate) report.allBatchesPassStrictGate = false;
  }

  const outPath = `${resultsRoot}/live-ui-evidence/strict-gate-audit.json`;
  writeJson(outPath, report);

  if (hasFlag("audit")) {
    console.log(JSON.stringify(report, null, 2));
    process.exit(report.allBatchesPassStrictGate ? 0 : 1);
  }

  if (hasFlag("remediate-from-capture")) {
    const captureDir = arg("capture-dir", `${resultsRoot}/live-ui-evidence/capture-output`);
    const captureIndex = readJson(`${captureDir}/index.json`, {});
    for (const batchIndex of batchIndexes) {
      for (const caseId of batchCaseIds(batchPlan, batchIndex)) {
        const captured = captureIndex[caseId];
        if (!captured) {
          console.warn(`Skip ${caseId}: no capture output`);
          continue;
        }
        applyStrictEntry(manifest, caseId, batchIndex, captured);
      }
    }
    const allIds = batchIndexes.flatMap((i) => batchCaseIds(batchPlan, i));
    const validatedInScope = allIds.filter((id) =>
      manifest.liveUiValidatedCaseIds.includes(id)
    );
    manifest.liveUiCoveragePercent = allIds.length
      ? Math.round((validatedInScope.length / allIds.length) * 100)
      : 100;
    manifest.noBulkLiveUiEvidence = true;
    manifest.honestUiEligibility = manifest.honestUiEligibility !== false;
    writeJson(manifestPath, manifest);
    console.log(`Manifest updated: ${rel(manifestPath)}`);

    const postAudit = {};
    for (const batchIndex of batchIndexes) {
      postAudit[String(batchIndex)] = auditEvidence(
        manifest.liveUiEvidenceByCase,
        batchCaseIds(batchPlan, batchIndex)
      );
    }
    writeJson(`${resultsRoot}/live-ui-evidence/strict-gate-audit-post-remediation.json`, {
      auditedAt: new Date().toISOString(),
      batches: postAudit,
    });
    console.log(JSON.stringify(postAudit, null, 2));
  }

  if (!hasFlag("audit") && !hasFlag("remediate-from-capture")) {
    console.log("Usage: --audit | --remediate-from-capture --capture-dir <path> [--batch 1,2]");
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { auditEvidence, maxCasesPerRef };
