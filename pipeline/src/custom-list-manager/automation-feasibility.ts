import type { AutomationFeasibilityEntry, ClmExcelRow } from "./types";
import { subModuleSlug } from "./parser";

function inferTags(row: ClmExcelRow): string[] {
  const tags = [subModuleSlug(row.subModule), row.priority.toLowerCase()];
  const text = `${row.taskDescription} ${row.acceptanceCriteria} ${row.testData}`.toLowerCase();

  if (/unauthorized|rbac|permission|access denied|security|viewer|maker|checker|segregation of duties/i.test(text)) {
    tags.push("rbac", "security");
  } else if (/export|download|csv|excel|audit export/i.test(text)) {
    tags.push("export");
  } else if (/accessibility|keyboard|focus|screen reader/i.test(text)) {
    tags.push("accessibility");
  } else if (/performance|slow|latency|load time/i.test(text)) {
    tags.push("performance");
  } else if (/browser|chrome|edge|firefox/i.test(text)) {
    tags.push("browser-compat");
  } else if (/session|logout|timeout|cache/i.test(text)) {
    tags.push("session");
  } else if (/api|endpoint|integration/i.test(text)) {
    tags.push("api");
  } else if (/screening|fuzzy|multilingual|matching|alias|digital identifier/i.test(text)) {
    tags.push("screening-matching");
  } else if (/error|failure|500|negative|validation/i.test(text)) {
    tags.push("error-handling");
  } else if (/bulk upload|template download|mandatory column/i.test(text)) {
    tags.push("bulk-upload");
  } else if (/maker-checker|approve|reject|workflow/i.test(text)) {
    tags.push("maker-checker");
  } else if (/audit|event details|integrity/i.test(text)) {
    tags.push("audit");
  } else if (/ttl|expir/i.test(text)) {
    tags.push("ttl");
  } else if (/alert|notification|real-time/i.test(text)) {
    tags.push("alerts");
  } else {
    tags.push("functional");
  }

  return [...new Set(tags)];
}

function inferAutomationLayer(row: ClmExcelRow): { layer: string; reason: string; candidate: "Yes" | "No" } {
  const text = `${row.taskDescription} ${row.subModule} ${row.testData}`.toLowerCase();

  if (/screen reader|wcag audit/i.test(text)) {
    return {
      layer: "UI + Manual",
      reason: "Accessibility conformance may require assistive technology review",
      candidate: "Yes",
    };
  }

  if (/session timeout.*30 minutes|cache clear.*browser/i.test(text)) {
    return {
      layer: "Manual",
      reason: "Long session timeout or full cache clear requires extended wait or specialized simulation",
      candidate: "No",
    };
  }

  return {
    layer: /api\/v1|screening engine|real-time alert/i.test(text) ? "API + UI" : "UI",
    reason: "Custom List Manager UI automation via Playwright page object",
    candidate: "Yes",
  };
}

export function buildAutomationFeasibilityMatrix(rows: ClmExcelRow[]): AutomationFeasibilityEntry[] {
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
