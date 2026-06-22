import type { AutomationFeasibilityEntry, MmExcelRow } from "./types";
import { featureGroup, isDatabaseRow, subModuleSlug } from "./parser";

const MANUAL_ONLY_IDS = new Set(["MM-TC-239", "MM-TC-287"]);

function inferTags(row: MmExcelRow): string[] {
  const tags = [subModuleSlug(row.subModule), row.priority.toLowerCase()];
  const text = `${row.taskDescription} ${row.acceptanceCriteria}`.toLowerCase();
  const fg = featureGroup(row.subModule).toLowerCase();

  if (/unauthorized|unauthenticated|rbac|permission|access denied/i.test(text)) {
    tags.push("rbac", "security");
  } else if (/audit|immutable/i.test(text)) {
    tags.push("audit", "compliance");
  } else if (/api|backend|database|db-origin/i.test(text) || fg.includes("api")) {
    tags.push("api", "backend");
  } else if (/score|weight|priority classification/i.test(text)) {
    tags.push("gap-score", "business-rule");
  } else if (/modal|dialog/i.test(text)) {
    tags.push("modal");
  } else if (/filter|search/i.test(text)) {
    tags.push("filter");
  } else if (/clone|create template/i.test(text)) {
    tags.push("template-crud");
  } else if (/end-to-end|cross-module/i.test(text)) {
    tags.push("e2e");
  } else {
    tags.push("functional");
  }

  return [...new Set(tags)];
}

function inferAutomationLayer(row: MmExcelRow): { layer: string; reason: string; candidate: "Yes" | "No" } {
  if (MANUAL_ONLY_IDS.has(row.id)) {
    return {
      layer: "Manual",
      reason: "Enterprise validation or audit sign-off requires manual review",
      candidate: "No",
    };
  }

  if (isDatabaseRow(row)) {
    return {
      layer: "API + Database",
      reason: "Backend/API validation via route mocking or service layer",
      candidate: "Yes",
    };
  }

  const fg = featureGroup(row.subModule);
  if (fg === "Score Calculation" || fg === "Missing Fields Logic") {
    return {
      layer: "API + Database",
      reason: "Score engine rules verifiable via API/DB fixtures",
      candidate: "Yes",
    };
  }

  return {
    layer: "UI",
    reason: "Visible DOM interaction on Missing Mandatory Data Template page",
    candidate: "Yes",
  };
}

export function buildAutomationFeasibility(row: MmExcelRow): AutomationFeasibilityEntry {
  const { layer, reason, candidate } = inferAutomationLayer(row);
  return {
    testCaseId: row.id,
    automationLayer: layer,
    automationCandidate: candidate,
    reason,
    tags: inferTags(row),
  };
}

export function buildAutomationFeasibilityMatrix(rows: MmExcelRow[]): AutomationFeasibilityEntry[] {
  return rows.map(buildAutomationFeasibility);
}
