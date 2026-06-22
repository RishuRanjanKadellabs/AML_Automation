import type { AutomationFeasibilityEntry, KgrExcelRow } from "./types";
import { subModuleSlug } from "./parser";

const MANUAL_ONLY_IDS = new Set(["KGR-219", "KGR-241", "KGR-248", "KGR-249", "KGR-250"]);

function inferTags(row: KgrExcelRow): string[] {
  const tags = [subModuleSlug(row.subModule), row.priority.toLowerCase()];
  const text = `${row.taskDescription} ${row.acceptanceCriteria}`.toLowerCase();

  if (/unauthorized|unauthenticated|rbac|permission|access denied/i.test(text)) {
    tags.push("rbac", "security");
  } else if (/audit|immutable|archival/i.test(text)) {
    tags.push("audit", "compliance");
  } else if (/export|download/i.test(text)) {
    tags.push("export");
  } else if (/boundary|invalid|injection|negative|blank|whitespace/i.test(text)) {
    tags.push("boundary", "negative");
  } else if (/score|weight|priority classification|recalculation/i.test(text)) {
    tags.push("gap-score", "business-rule");
  } else if (/modal|detail|view button/i.test(text)) {
    tags.push("modal");
  } else if (/filter|search/i.test(text)) {
    tags.push("filter");
  } else if (/pagination|page size/i.test(text)) {
    tags.push("pagination");
  } else if (/kpi/i.test(text)) {
    tags.push("kpi");
  } else {
    tags.push("functional");
  }

  return [...new Set(tags)];
}

function inferAutomationLayer(row: KgrExcelRow): { layer: string; reason: string; candidate: "Yes" | "No" } {
  if (MANUAL_ONLY_IDS.has(row.id)) {
    return {
      layer: "Manual",
      reason: "Performance, audit immutability, or compliance sign-off requires manual validation",
      candidate: "No",
    };
  }

  const sm = row.subModule;
  const text = `${row.taskDescription} ${row.id}`.toLowerCase();

  if (sm.includes("Security & Audit") && parseInt(row.id.replace("KGR-", ""), 10) >= 231) {
    return {
      layer: "Database + Manual",
      reason: "Audit trail validation requires backend query; immutability may need DBA review",
      candidate: "Yes",
    };
  }

  if (sm.includes("Gap Score Calculation")) {
    return {
      layer: "API + Database",
      reason: "Score weight rules verifiable via API/DB without full UI dependency",
      candidate: "Yes",
    };
  }

  if (["KGR-124", "KGR-125", "KGR-170", "KGR-123"].includes(row.id)) {
    return {
      layer: "Service Layer",
      reason: "Template change → score recalc → report sync orchestration",
      candidate: "Yes",
    };
  }

  if (sm.includes("Export") && ["KGR-193", "KGR-203", "KGR-205"].includes(row.id)) {
    return {
      layer: "UI + API",
      reason: "Download event plus file parse/API export endpoint",
      candidate: "Yes",
    };
  }

  if (["KGR-029", "KGR-030", "KGR-092", "KGR-114", "KGR-115"].includes(row.id)) {
    return {
      layer: "UI + Database",
      reason: "KPI/grid count must reconcile with queryable source data",
      candidate: "Yes",
    };
  }

  if (/injection|sql|script/i.test(text)) {
    return {
      layer: "UI + Security",
      reason: "Injection attempt via UI inputs; assert no execution",
      candidate: "Yes",
    };
  }

  if (sm.includes("Boundary & Negative")) {
    return {
      layer: "UI",
      reason: "Filter/search boundary validation via visible UI controls",
      candidate: "Yes",
    };
  }

  return {
    layer: "UI",
    reason: "Visible DOM interaction on KYC Gap Report page",
    candidate: "Yes",
  };
}

export function buildAutomationFeasibility(row: KgrExcelRow): AutomationFeasibilityEntry {
  const { layer, reason, candidate } = inferAutomationLayer(row);
  return {
    testCaseId: row.id,
    automationLayer: layer,
    automationCandidate: candidate,
    reason,
    tags: inferTags(row),
  };
}

export function buildAutomationFeasibilityMatrix(rows: KgrExcelRow[]): AutomationFeasibilityEntry[] {
  return rows.map(buildAutomationFeasibility);
}
