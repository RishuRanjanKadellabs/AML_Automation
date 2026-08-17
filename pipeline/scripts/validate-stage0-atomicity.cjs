#!/usr/bin/env node
/**
 * Mechanical Stage 0 atomicity gate — enforces one-primary-intent test cases.
 * Run after Excel write and before AwaitingReview / fsd:coverage-report pass.
 *
 * Usage:
 *   node pipeline/scripts/validate-stage0-atomicity.cjs --dir results/fsd-figma-pipeline/<resultsKey>
 *   node pipeline/scripts/validate-stage0-atomicity.cjs --results-key "<resultsKey>"
 */
const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");
const {
  ROOT,
  absolute,
  arg,
  readJson,
  relative,
  writeJson,
} = require("./qa-pipeline-utils.cjs");

const NEGATIVE_RE =
  /\b(invalid|error|reject|fail|denied|cannot|must not|should not|missing|empty|mandatory|required field|negative|duplicate|unauthorized|not allowed|warning message|validation message|blocked|shall not)\b/i;

const BOUNDARY_RE = /\b(boundary|limit|edge|maximum|minimum|max length|min length|exceed|overflow|within allowed range|must remain within|contiguous)\b/i;

const COMPOUND_AC_RE =
  /\b(and also|as well as)\b|;\s*\w|(?:^|\n)\s*[-•*]\s+.+(?:\n\s*[-•*]\s+.+)/i;

const PRIMARY_ACTION_RE =
  /\b(save|submit|create|add|update|delete|remove|search|apply|confirm|enable|disable|export|import|upload|download|calculate|assign|approve|reject|reset|clear|filter|sort|switch|navigate|click|select|enter|verify|validate)\b/gi;

const COLUMN_ALIASES = {
  testCaseId: ["Test Case ID", "TestCaseID", "TC ID", "ID"],
  taskDescription: ["Task Description", "Description", "Scenario"],
  acceptanceCriteria: ["Acceptance Criteria", "AC"],
  preconditions: ["Preconditions", "Pre-conditions"],
  testSteps: ["Test Steps", "Steps"],
  expectedResult: ["Expected Result", "Expected Results"],
};

function normalizeHeader(header) {
  return String(header || "")
    .trim()
    .toLowerCase()
    .replace(/[\s\-_]/g, "");
}

function findColumnMapping(headers) {
  const mapping = {};
  const normalized = {};
  headers.forEach((col) => {
    normalized[normalizeHeader(col)] = col;
  });
  Object.entries(COLUMN_ALIASES).forEach(([canonical, aliases]) => {
    for (const alias of aliases) {
      const key = normalizeHeader(alias);
      if (normalized[key]) {
        mapping[canonical] = normalized[key];
        break;
      }
    }
  });
  return mapping;
}

function cell(row, mapping, field) {
  const col = mapping[field];
  if (!col) return "";
  const val = row[col];
  return val != null ? String(val).trim() : "";
}

function resolveDir() {
  const dirArg = arg("dir", "");
  if (dirArg) return absolute(dirArg);
  const key = arg("results-key", "") || arg("resultsKey", "");
  if (!key) {
    throw new Error(
      "Usage: --results-key <key> OR --dir results/fsd-figma-pipeline/<key>",
    );
  }
  return absolute(path.join("results", "fsd-figma-pipeline", key));
}

function loadExcelRows(excelPath) {
  const abs = absolute(excelPath);
  if (!fs.existsSync(abs)) {
    throw new Error(`Excel not found: ${excelPath}`);
  }
  const wb = XLSX.readFile(abs);
  const sheetName = wb.SheetNames[0];
  const raw = XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);
  const headers = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], { header: 1 })[0] || [];
  const mapping = findColumnMapping(headers);
  return raw
    .map((row) => ({
      testCaseId: cell(row, mapping, "testCaseId"),
      taskDescription: cell(row, mapping, "taskDescription"),
      acceptanceCriteria: cell(row, mapping, "acceptanceCriteria"),
      preconditions: cell(row, mapping, "preconditions"),
      testSteps: cell(row, mapping, "testSteps"),
      expectedResult: cell(row, mapping, "expectedResult"),
      textBundle: [
        cell(row, mapping, "taskDescription"),
        cell(row, mapping, "acceptanceCriteria"),
        cell(row, mapping, "testSteps"),
        cell(row, mapping, "expectedResult"),
      ].join("\n"),
    }))
    .filter((r) => r.testCaseId);
}

function inferRequirementDesignType(req) {
  if (req.kind === "security") return "security";
  if (req.kind === "validation") return "negative";
  const text = String(req.text || "");
  if (NEGATIVE_RE.test(text)) return "negative";
  if (BOUNDARY_RE.test(text)) return "boundary";
  return "positive";
}

function countPrimaryActions(text) {
  const matches = String(text || "").match(PRIMARY_ACTION_RE);
  return matches ? matches.length : 0;
}

function isPossiblyBundled(row) {
  const steps = String(row.testSteps || "");
  const stepCount = (steps.match(/^\s*\d+\./gm) || []).length;
  const actions = countPrimaryActions(
    `${row.taskDescription}\n${row.acceptanceCriteria}\n${row.expectedResult}`,
  );
  if (stepCount > 10 && actions >= 4) return true;
  if (actions >= 5) return true;
  const acBullets = (String(row.acceptanceCriteria || "").match(/^\s*[-•*]\s/gm) || [])
    .length;
  if (acBullets >= 3) return true;
  return false;
}

function hasCompoundAcceptanceCriteria(ac) {
  const text = String(ac || "").trim();
  if (!text) return false;
  if (COMPOUND_AC_RE.test(text)) return true;
  const andParts = text.split(/\band\b/i);
  if (andParts.length >= 3) return true;
  if (andParts.length === 2 && andParts[0].length > 20 && andParts[1].length > 20) {
    return true;
  }
  return false;
}

function words(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2);
}

function overlapScore(a, b) {
  const wa = new Set(words(a));
  const wb = new Set(words(b));
  if (!wa.size || !wb.size) return 0;
  let hit = 0;
  for (const w of wa) if (wb.has(w)) hit += 1;
  return hit / Math.max(wa.size, wb.size);
}

function rowMatchesLabels(row, labels, threshold = 0.35) {
  const bundle = row.textBundle.toLowerCase();
  for (const label of labels) {
    if (!label) continue;
    if (bundle.includes(String(label).toLowerCase())) return true;
    if (overlapScore(row.textBundle, label) >= threshold) return true;
  }
  return false;
}

function discoverFineGrainSlots(htmlInventory) {
  if (!htmlInventory) return [];
  const slots = [];

  for (const composite of htmlInventory.compositeFlows || []) {
    const labels = [
      composite.flowName,
      ...(composite.chainSteps || []).map((s) => s.label),
    ].filter(Boolean);
    slots.push({
      slotId: composite.flowId,
      kind: "flow-happy-path",
      labels,
      message: `Add a dedicated positive happy-path TC for Figma flow: ${composite.flowName}`,
    });
  }

  for (const screen of htmlInventory.screens || []) {
    const isCategory =
      String(screen.screenId || "").startsWith("CAT-") ||
      (screen.navigation || []).length > 3;
    if (isCategory && screen.name) {
      slots.push({
        slotId: `UI-${screen.screenId || screen.name}`,
        kind: "ui-attribute",
        labels: [screen.name],
        message: `Add a dedicated UI TC verifying ${screen.name} display/behaviour`,
      });
    }
    for (const control of screen.controls || []) {
      const label = String(control.label || "").trim();
      if (!label) continue;
      if (control.kind === "button" && /\bsave\b/i.test(label)) {
        slots.push({
          slotId: `SAVE-${control.controlId || label}`,
          kind: "flow-save-happy-path",
          labels: [label, screen.name].filter(Boolean),
          message: `Add a dedicated positive save happy-path TC for "${label}"`,
          requiresPositive: true,
        });
      }
      if (control.kind === "tab") {
        slots.push({
          slotId: `TAB-${control.controlId || label}`,
          kind: "ui-tab",
          labels: [label],
          message: `Add a dedicated TC for sub-tab navigation: ${label}`,
        });
      }
    }
  }

  const dedup = new Map();
  for (const slot of slots) dedup.set(slot.slotId, slot);
  return [...dedup.values()];
}

function slotCovered(slot, excelRows, tcDesignById, useCases, ucByTcId) {
  for (const row of excelRows) {
    if (!rowMatchesLabels(row, slot.labels)) continue;
    if (slot.requiresPositive) {
      const dt =
        tcDesignById.get(row.testCaseId) ||
        ucByTcId.get(row.testCaseId)?.designType ||
        "positive";
      if (dt !== "positive") continue;
    }
    return true;
  }
  return false;
}

function buildUcByTcId(useCases) {
  const map = new Map();
  for (const uc of useCases) {
    for (const tcId of uc.testCaseIds || []) {
      map.set(tcId, uc);
    }
  }
  return map;
}

/**
 * @param {object} options
 * @param {string} options.dir - results/fsd-figma-pipeline/<resultsKey>
 * @param {boolean} [options.writeReport=true]
 */
function validateStage0Atomicity(options = {}) {
  const dir = options.dir ? absolute(options.dir) : resolveDir();
  const writeReport = options.writeReport !== false;

  const coverage = readJson(path.join(dir, "coverage-matrix.json"));
  const useCasesDoc = readJson(path.join(dir, "use-cases.json"));
  const fsdInventory = readJson(path.join(dir, "fsd-inventory.json"), true);
  const htmlInventory = readJson(path.join(dir, "html-inventory.json"), true);
  const excelPath = coverage.excelPath || options.excelPath;
  const excelRows = loadExcelRows(excelPath);
  const useCases = useCasesDoc.useCases || [];
  const ucByTcId = buildUcByTcId(useCases);

  const violations = [];
  const inScopeRequirements = coverage.inScopeRequirements ?? 0;
  const testCaseCount = excelRows.length;
  const fineGrainSlots = discoverFineGrainSlots(htmlInventory);
  const minimumFineGrainTcCount =
    inScopeRequirements + fineGrainSlots.length;

  // 1 — Each use case maps to exactly one requirement
  const multiReqUseCases = useCases.filter(
    (uc) => (uc.requirementIds || []).length > 1,
  );
  for (const uc of multiReqUseCases) {
    violations.push({
      code: "MULTI_REQUIREMENT_USE_CASE",
      severity: "error",
      useCaseId: uc.useCaseId,
      testCaseIds: uc.testCaseIds || [],
      requirementIds: uc.requirementIds || [],
      message:
        "Use case bundles multiple FSD requirements — split into one use case (and TC) per requirement",
    });
  }

  // 2 — Minimum TC count: at least one dedicated TC per in-scope requirement
  if (inScopeRequirements > 0 && testCaseCount < inScopeRequirements) {
    violations.push({
      code: "TC_COUNT_BELOW_REQUIREMENT_COUNT",
      severity: "error",
      testCaseCount,
      inScopeRequirements,
      message: `Workbook has ${testCaseCount} TC(s) but ${inScopeRequirements} in-scope requirement(s) — atomic design requires ≥1 TC per requirement`,
    });
  }

  // 2b — Fine-grain: TC count must exceed REQ floor when Figma flows/UI slots exist
  if (
    fineGrainSlots.length > 0 &&
    testCaseCount <= inScopeRequirements
  ) {
    violations.push({
      code: "TC_COUNT_AT_REQUIREMENT_FLOOR_ONLY",
      severity: "error",
      testCaseCount,
      inScopeRequirements,
      fineGrainSlotCount: fineGrainSlots.length,
      minimumFineGrainTcCount,
      message: `Workbook has ${testCaseCount} TC(s) (= requirement count) but Figma defines ${fineGrainSlots.length} additional flow/UI slots — fine-grain requires >${inScopeRequirements} TCs (target ≥${minimumFineGrainTcCount})`,
    });
  }

  if (
    fineGrainSlots.length > 0 &&
    testCaseCount < minimumFineGrainTcCount
  ) {
    violations.push({
      code: "TC_COUNT_BELOW_FINE_GRAIN_MINIMUM",
      severity: "error",
      testCaseCount,
      minimumFineGrainTcCount,
      fineGrainSlotCount: fineGrainSlots.length,
      message: `Fine-grain minimum is ${minimumFineGrainTcCount} TCs (requirements + flow/UI slots) — workbook has ${testCaseCount}`,
    });
  }

  // 3 — Design-type balance: negative/boundary-eligible requirements need matching TCs
  const allReqs = [];
  for (const section of fsdInventory?.sections || []) {
    for (const req of section.requirements || []) {
      allReqs.push({
        ...req,
        sectionId: section.sectionId,
        designType: inferRequirementDesignType(req),
      });
    }
  }
  const inScopeSet = new Set();
  const reqToTc = coverage.requirementToTestCases || {};
  Object.keys(reqToTc).forEach((id) => inScopeSet.add(id));
  if (!Object.keys(reqToTc).length) {
    for (const uc of useCases) {
      for (const rid of uc.requirementIds || []) {
        if (!reqToTc[rid]) reqToTc[rid] = [];
        for (const tcId of uc.testCaseIds || []) {
          if (!reqToTc[rid].includes(tcId)) reqToTc[rid].push(tcId);
        }
      }
    }
  }

  const negativeEligibleReqs = allReqs.filter(
    (r) => r.designType === "negative" || r.designType === "boundary",
  );
  const ucByDesign = { positive: 0, negative: 0, boundary: 0, exception: 0, security: 0 };
  for (const uc of useCases) {
    const dt = uc.designType || "positive";
    ucByDesign[dt] = (ucByDesign[dt] || 0) + 1;
  }
  const nonPositiveUcCount =
    (ucByDesign.negative || 0) +
    (ucByDesign.boundary || 0) +
    (ucByDesign.exception || 0) +
    (ucByDesign.security || 0);

  if (negativeEligibleReqs.length > 0 && nonPositiveUcCount === 0) {
    violations.push({
      code: "ALL_POSITIVE_USE_CASES",
      severity: "error",
      negativeEligibleRequirementCount: negativeEligibleReqs.length,
      message:
        "FSD contains validation/boundary rules but every use case is positive — add separate negative/boundary TCs",
    });
  }

  const tcDesignById = new Map();
  for (const uc of useCases) {
    for (const tcId of uc.testCaseIds || []) {
      tcDesignById.set(tcId, uc.designType || "positive");
    }
  }

  // 3b — Fine-grain slot coverage: each Figma flow / save / tab / category UI slot
  let uncoveredFineGrainSlots = 0;
  for (const slot of fineGrainSlots) {
    const covered = slotCovered(
      slot,
      excelRows,
      tcDesignById,
      useCases,
      ucByTcId,
    );
    if (!covered) {
      uncoveredFineGrainSlots += 1;
      violations.push({
        code: "MISSING_FINE_GRAIN_TC",
        severity: "error",
        slotId: slot.slotId,
        kind: slot.kind,
        message: slot.message,
      });
    }
  }

  for (const req of negativeEligibleReqs) {
    const tcIds = reqToTc[req.requirementId] || [];
    const hasMatchingType = tcIds.some((id) => {
      const dt = tcDesignById.get(id) || "positive";
      return dt === req.designType || dt === "negative" || dt === "boundary";
    });
    if (!hasMatchingType && tcIds.length <= 1) {
      violations.push({
        code: "MISSING_NEGATIVE_OR_BOUNDARY_TC",
        severity: "error",
        requirementId: req.requirementId,
        expectedDesignType: req.designType,
        matchedTestCaseIds: tcIds,
        message: `Requirement needs a dedicated ${req.designType} TC — only positive coverage found`,
      });
    }
  }

  // 4 — Excel row quality: bundled intents / compound AC
  for (const row of excelRows) {
    if (isPossiblyBundled(row)) {
      violations.push({
        code: "POSSIBLY_BUNDLED",
        severity: "warning",
        testCaseId: row.testCaseId,
        message: "Test case may bundle multiple independent intents",
      });
    }
    if (hasCompoundAcceptanceCriteria(row.acceptanceCriteria)) {
      violations.push({
        code: "COMPOUND_ACCEPTANCE_CRITERIA",
        severity: "error",
        testCaseId: row.testCaseId,
        message:
          "Acceptance Criteria asserts multiple independent behaviors — split into separate atomic TCs",
      });
    }
  }

  const errorViolations = violations.filter((v) => v.severity === "error");
  const warningViolations = violations.filter((v) => v.severity === "warning");

  const atomicityReady = errorViolations.length === 0;
  const fineGrainReady =
    uncoveredFineGrainSlots === 0 &&
    (fineGrainSlots.length === 0 || testCaseCount > inScopeRequirements);

  const report = {
    resultsKey: coverage.resultsKey || path.basename(dir),
    excelPath,
    validatedAt: new Date().toISOString(),
    atomicityReady,
    fineGrainReady,
    gateReady: atomicityReady && fineGrainReady,
    testCaseCount,
    inScopeRequirements,
    minimumFineGrainTcCount,
    fineGrainSlotCount: fineGrainSlots.length,
    uncoveredFineGrainSlotCount: uncoveredFineGrainSlots,
    useCaseCount: useCases.length,
    multiRequirementUseCaseCount: multiReqUseCases.length,
    designTypeCounts: ucByDesign,
    negativeEligibleRequirementCount: negativeEligibleReqs.length,
    errorCount: errorViolations.length,
    warningCount: warningViolations.length,
    violations,
    fineGrainSlots: fineGrainSlots.map((s) => ({
      slotId: s.slotId,
      kind: s.kind,
    })),
    rulesApplied: [
      "ONE_REQUIREMENT_PER_USE_CASE",
      "TC_COUNT_GTE_REQUIREMENT_COUNT",
      "TC_COUNT_ABOVE_REQUIREMENT_FLOOR_WHEN_FIGMA_FLOWS_EXIST",
      "TC_COUNT_GTE_FINE_GRAIN_MINIMUM",
      "FINE_GRAIN_FLOW_SAVE_TAB_UI_SLOTS_COVERED",
      "NEGATIVE_BOUNDARY_DESIGN_TYPES_REQUIRED",
      "NO_COMPOUND_ACCEPTANCE_CRITERIA",
      "NO_BUNDLED_MULTI_INTENT_ROWS",
    ],
  };

  if (writeReport) {
    const outPath = path.join(dir, "stage0-atomicity-report.json");
    writeJson(outPath, report);
  }

  return report;
}

function renderAtomicityMarkdown(report) {
  const lines = [];
  lines.push("### Atomicity + fine-grain gate (mandatory)");
  lines.push("");
  lines.push(
    `- **Gate ready:** **${report.gateReady ? "Yes" : "No"}** (atomicity + fine-grain)`,
  );
  lines.push(
    `- **Atomicity ready:** **${report.atomicityReady ? "Yes" : "No"}**`,
  );
  lines.push(
    `- **Fine-grain ready:** **${report.fineGrainReady ? "Yes" : "No"}**`,
  );
  lines.push(`- **Test cases:** ${report.testCaseCount}`);
  lines.push(`- **In-scope requirements:** ${report.inScopeRequirements}`);
  lines.push(
    `- **Fine-grain minimum TCs:** ${report.minimumFineGrainTcCount ?? "—"} (${report.fineGrainSlotCount ?? 0} flow/UI slots beyond requirements)`,
  );
  lines.push(
    `- **Uncovered fine-grain slots:** ${report.uncoveredFineGrainSlotCount ?? 0}`,
  );
  lines.push(
    `- **Multi-requirement use cases:** ${report.multiRequirementUseCaseCount}`,
  );
  lines.push(
    `- **Design types:** positive ${report.designTypeCounts.positive || 0}, negative ${report.designTypeCounts.negative || 0}, boundary ${report.designTypeCounts.boundary || 0}, exception ${report.designTypeCounts.exception || 0}, security ${report.designTypeCounts.security || 0}`,
  );
  lines.push(
    `- **Errors:** ${report.errorCount} | **Warnings:** ${report.warningCount}`,
  );
  lines.push("");

  const errors = (report.violations || []).filter((v) => v.severity === "error");
  if (errors.length) {
    lines.push("| Code | ID | Issue |");
    lines.push("|------|-----|-------|");
    for (const v of errors.slice(0, 25)) {
      const id = v.testCaseId || v.useCaseId || v.requirementId || "—";
      lines.push(`| ${v.code} | ${id} | ${v.message} |`);
    }
    if (errors.length > 25) {
      lines.push(`| … | … | +${errors.length - 25} more error(s) |`);
    }
    lines.push("");
    lines.push(
      "_Split bundled use cases / TCs and re-run `npm run fsd:validate-atomicity` before Approve Excel._",
    );
    lines.push("");
  }

  return `${lines.join("\n")}\n`;
}

function main() {
  try {
    const dir = resolveDir();
    const report = validateStage0Atomicity({ dir, writeReport: true });
    const md = renderAtomicityMarkdown(report);
    process.stdout.write(md);
    console.error(
      `Atomicity report → ${relative(path.join(dir, "stage0-atomicity-report.json"))}`,
    );
    if (!report.gateReady) {
      console.error(
        `Atomicity/fine-grain gate FAILED: ${report.errorCount} error(s) — set gate BlockedAtomicity; do not Approve Excel`,
      );
      process.exit(1);
    }
    console.error("Atomicity + fine-grain gate passed");
  } catch (error) {
    console.error(`Atomicity validation failed: ${error.message}`);
    process.exit(2);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  validateStage0Atomicity,
  renderAtomicityMarkdown,
};
