import type { AutomationFeasibilityEntry, IwcExcelRow } from "./types";
import { subModuleSlug } from "./parser";

function inferTags(row: IwcExcelRow): string[] {
  const tags = [subModuleSlug(row.subModule), row.priority.toLowerCase()];
  const text = `${row.taskDescription} ${row.acceptanceCriteria} ${row.testData}`.toLowerCase();

  if (/unauthorized|rbac|permission|access denied|security|viewer|maker|checker|admin/i.test(text)) {
    tags.push("rbac", "security");
  } else if (/export|download|csv|excel/i.test(text)) {
    tags.push("export");
  } else if (/accessibility|keyboard|focus|screen reader/i.test(text)) {
    tags.push("accessibility");
  } else if (/performance|slow|latency|load time/i.test(text)) {
    tags.push("performance");
  } else if (/browser|chrome|edge|firefox/i.test(text)) {
    tags.push("browser-compat");
  } else if (/session|logout|timeout|cache/i.test(text)) {
    tags.push("session");
  } else if (/api|endpoint|integration|data model/i.test(text)) {
    tags.push("api");
  } else if (/screening engine|evaluation|narrative tester/i.test(text)) {
    tags.push("screening-engine");
  } else if (/error|failure|500|negative/i.test(text)) {
    tags.push("error-handling");
  } else if (/bulk upload|csv|xlsx/i.test(text)) {
    tags.push("bulk-upload");
  } else if (/maker-checker|approve|reject|checker approval/i.test(text)) {
    tags.push("maker-checker");
  } else if (/notification|toast/i.test(text)) {
    tags.push("notifications");
  } else if (/word history|audit/i.test(text)) {
    tags.push("word-history");
  } else {
    tags.push("functional");
  }

  return [...new Set(tags)];
}

function inferAutomationLayer(row: IwcExcelRow): { layer: string; reason: string; candidate: "Yes" | "No" } {
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

  if (/uat scenario|user acceptance/i.test(text)) {
    return {
      layer: "UI + Manual",
      reason: "UAT scenarios may require business stakeholder sign-off beyond automated checks",
      candidate: "Yes",
    };
  }

  return {
    layer: /api\/v1|screening engine|data model/i.test(text) ? "API + UI" : "UI",
    reason: "Ignore Words Configuration UI automation via Playwright page object",
    candidate: "Yes",
  };
}

export function buildAutomationFeasibilityMatrix(rows: IwcExcelRow[]): AutomationFeasibilityEntry[] {
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
