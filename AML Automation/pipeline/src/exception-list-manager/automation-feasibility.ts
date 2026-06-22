import type { AutomationFeasibilityEntry, ElmExcelRow } from "./types";
import { moduleSlug, subModuleSlug } from "./parser";

function inferTags(row: ElmExcelRow): string[] {
  const tags = [moduleSlug(row.module), subModuleSlug(row.subModule), row.priority.toLowerCase() || "unspecified"];
  const text = `${row.taskDescription} ${row.testData} ${row.module} ${row.subModule}`.toLowerCase();

  if (/unauthorized|rbac|permission|access denied|security|viewer|maker|checker|mlro/i.test(text)) {
    tags.push("rbac", "security");
  } else if (/export|download|csv|pdf|excel/i.test(text)) {
    tags.push("export");
  } else if (/accessibility|keyboard|focus|screen reader/i.test(text)) {
    tags.push("accessibility");
  } else if (/performance|slow|latency|load time|scalability/i.test(text)) {
    tags.push("performance");
  } else if (/browser|chrome|edge|firefox/i.test(text)) {
    tags.push("browser-compat");
  } else if (/api|endpoint|synchronisation|sync/i.test(text)) {
    tags.push("api");
  } else if (/audit|trail|immutable/i.test(text)) {
    tags.push("audit-trail");
  } else if (/fuzzy|multilingual|native script|evaluation|suppression/i.test(text)) {
    tags.push("evaluation-engine");
  } else if (/notification|alert|email|reminder/i.test(text)) {
    tags.push("notifications");
  } else if (/maker-checker|approve|reject|sla|escalation/i.test(text)) {
    tags.push("maker-checker");
  } else if (/bulk upload|batch/i.test(text)) {
    tags.push("bulk-upload");
  } else if (/reason code|evidence|attachment/i.test(text)) {
    tags.push("reason-evidence");
  } else if (/report|register|executive summary/i.test(text)) {
    tags.push("reporting");
  } else if (/error|failure|negative|blocked/i.test(text)) {
    tags.push("error-handling");
  } else {
    tags.push("functional");
  }

  return [...new Set(tags.filter(Boolean))];
}

function inferAutomationLayer(row: ElmExcelRow): { layer: string; reason: string; candidate: "Yes" | "No" } {
  const text = `${row.taskDescription} ${row.subModule} ${row.module} ${row.testData}`.toLowerCase();

  if (/screen reader|wcag audit/i.test(text)) {
    return {
      layer: "UI + Manual",
      reason: "Accessibility conformance may require assistive technology review",
      candidate: "Yes",
    };
  }

  if (/session timeout.*30 minutes|wait.*hours|simulate.*expiry.*days/i.test(text)) {
    return {
      layer: "Manual",
      reason: "Long-running TTL or session scenarios require time simulation beyond milestone1 scope",
      candidate: "No",
    };
  }

  if (/api client|csel requests|endpoint/i.test(text)) {
    return {
      layer: "API + UI",
      reason: "Exception List Manager API contract tests via Playwright route interception",
      candidate: "Yes",
    };
  }

  if (/fuzzy|multilingual|screening engine|suppression logic/i.test(text)) {
    return {
      layer: "API + UI",
      reason: "Evaluation and matching logic requires screening service or seeded corpus",
      candidate: "Yes",
    };
  }

  return {
    layer: "UI",
    reason: "Exception List Manager UI automation via Playwright page object",
    candidate: "Yes",
  };
}

export function buildAutomationFeasibilityMatrix(rows: ElmExcelRow[]): AutomationFeasibilityEntry[] {
  return rows.map((row) => {
    const { layer, reason, candidate } = inferAutomationLayer(row);
    return {
      testCaseId: row.id,
      automationLayer: layer,
      automationCandidate: candidate,
      reason,
      tags: inferTags(row),
    };
  });
}
