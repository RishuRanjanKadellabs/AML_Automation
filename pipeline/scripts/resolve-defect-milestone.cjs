/**
 * Resolve defect milestone from Stage 0 artifacts (Test Cases + FSD + Figma)
 * under pipeline/test-data/Milestone{N}/.
 *
 * A milestone is eligible when all three folders exist and contain at least one
 * file (.xlsx / .docx / .html). Test Case IDs map to the milestone whose Excel
 * workbook contains that ID.
 */
const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");
const { ROOT, absolute } = require("./qa-pipeline-utils.cjs");

const MILESTONE_NUMBERS = [1, 2];

function cleanText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function parseMilestoneNumber(value) {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value === "number" && Number.isFinite(value)) return value;
  const match = String(value).match(/(?:^M|^milestone\s*)?(\d+)$/i);
  return match ? Number.parseInt(match[1], 10) : null;
}

function milestoneDataRoot(milestone) {
  return path.join(ROOT, "pipeline", "test-data", `Milestone${milestone}`);
}

function milestoneHasStage0Artifacts(milestone) {
  const base = milestoneDataRoot(milestone);
  const checks = [
    { dir: path.join(base, "Test Cases"), ext: /\.xlsx$/i },
    { dir: path.join(base, "FSD"), ext: /\.docx$/i },
    { dir: path.join(base, "Figma"), ext: /\.html?$/i },
  ];
  for (const { dir, ext } of checks) {
    if (!fs.existsSync(dir)) return false;
    const files = fs.readdirSync(dir).filter((name) => !name.startsWith("."));
    if (!files.some((name) => ext.test(name))) return false;
  }
  return true;
}

function loadTestCasesFromMilestoneExcel(milestone) {
  const map = new Map();
  const root = path.join(milestoneDataRoot(milestone), "Test Cases");
  if (!fs.existsSync(root)) return map;
  for (const fileName of fs.readdirSync(root)) {
    if (!fileName.endsWith(".xlsx")) continue;
    const workbookPath = path.join(root, fileName);
    try {
      const workbook = XLSX.readFile(workbookPath);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      if (!sheet) continue;
      for (const row of XLSX.utils.sheet_to_json(sheet, { defval: "" })) {
        const testCaseId = String(row["Test Case ID"] || row["TC ID"] || "").trim();
        if (!testCaseId) continue;
        map.set(testCaseId, {
          testCaseId,
          milestone,
          module: cleanText(row.Module || row.module || ""),
          priority: cleanText(row.Priority || row.priority || ""),
          severity: cleanText(row.Severity || row.severity || ""),
          workbook: fileName,
        });
      }
    } catch {
      /* skip unreadable workbook */
    }
  }
  return map;
}

let cachedIndex = null;

function buildTestCaseMilestoneIndex({ refresh = false } = {}) {
  if (cachedIndex && !refresh) return cachedIndex;

  const byTestCaseId = new Map();
  const conflicts = [];
  const eligibleMilestones = MILESTONE_NUMBERS.filter(milestoneHasStage0Artifacts);

  for (const milestone of MILESTONE_NUMBERS) {
    if (!milestoneHasStage0Artifacts(milestone)) continue;
    const perMilestone = loadTestCasesFromMilestoneExcel(milestone);
    for (const [testCaseId, entry] of perMilestone) {
      const existing = byTestCaseId.get(testCaseId);
      if (existing && existing.milestone !== milestone) {
        conflicts.push({
          testCaseId,
          milestones: [existing.milestone, milestone],
        });
        continue;
      }
      byTestCaseId.set(testCaseId, entry);
    }
  }

  cachedIndex = { byTestCaseId, conflicts, eligibleMilestones };
  return cachedIndex;
}

function milestoneFromSpecOrExecution({ specPath = "", execution = null } = {}) {
  const candidates = [
    execution?.milestone,
    execution?.sourceExcel,
    ...(execution?.specsExecuted || []),
    specPath,
  ];
  for (const candidate of candidates) {
    const parsed = parseMilestoneNumber(candidate);
    if (parsed) return parsed;
    const match = String(candidate || "").match(/(?:milestone|Milestone)(\d+)/i);
    if (match) return Number.parseInt(match[1], 10);
  }
  return null;
}

function resolveDefectMilestoneForCase({
  testCaseId = "",
  module = "",
  specPath = "",
  explicitMilestone = null,
  execution = null,
  index = null,
} = {}) {
  const explicit = parseMilestoneNumber(explicitMilestone);
  if (explicit) return explicit;

  const resolvedIndex = index || buildTestCaseMilestoneIndex();
  const { byTestCaseId, eligibleMilestones } = resolvedIndex;
  const id = cleanText(testCaseId);

  if (id && byTestCaseId.has(id)) {
    return byTestCaseId.get(id).milestone;
  }

  const moduleKey = cleanText(module).toLowerCase();
  if (moduleKey) {
    for (const entry of byTestCaseId.values()) {
      if (cleanText(entry.module).toLowerCase() === moduleKey) {
        return entry.milestone;
      }
    }
  }

  const fromPath = milestoneFromSpecOrExecution({ specPath, execution });
  if (fromPath && eligibleMilestones.includes(fromPath)) {
    return fromPath;
  }

  if (eligibleMilestones.length === 1) {
    return eligibleMilestones[0];
  }

  if (fromPath) return fromPath;
  return null;
}

function resolveDefectMilestoneFromExecution(execution, { explicitMilestone = null } = {}) {
  const explicit = parseMilestoneNumber(explicitMilestone);
  if (explicit) return explicit;

  const index = buildTestCaseMilestoneIndex();
  const results =
    execution?.testCases ||
    execution?.caseResults ||
    execution?.results?.testCases ||
    [];

  const counts = new Map();
  for (const result of results) {
    const testCaseId = String(result.testCaseId || result.id || "").trim();
    if (!testCaseId) continue;
    const milestone = resolveDefectMilestoneForCase({
      testCaseId,
      module: result.module,
      specPath: result.specPath,
      execution,
      index,
    });
    if (milestone) counts.set(milestone, (counts.get(milestone) || 0) + 1);
  }

  if (!counts.size) {
    return milestoneFromSpecOrExecution({ execution });
  }

  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
}

function excelMetaMapFromIndex(index = null) {
  const { byTestCaseId } = index || buildTestCaseMilestoneIndex();
  return byTestCaseId;
}

module.exports = {
  MILESTONE_NUMBERS,
  buildTestCaseMilestoneIndex,
  milestoneHasStage0Artifacts,
  resolveDefectMilestoneForCase,
  resolveDefectMilestoneFromExecution,
  excelMetaMapFromIndex,
  parseMilestoneNumber,
};
