import type { AutomationFeasibilityEntry, C360ExcelRow } from "./types";
import { subModuleSlug } from "./parser";

const MANUAL_ONLY_IDS = new Set([
  "C360-TC-340",
  "C360-TC-341",
  "C360-TC-342",
  "C360-TC-343",
  "C360-TC-344",
  "C360-TC-345",
  "C360-TC-346",
  "C360-TC-347",
]);

function inferTags(row: C360ExcelRow): string[] {
  const tags = [subModuleSlug(row.subModule), row.priority.toLowerCase()];
  const text = `${row.taskDescription} ${row.acceptanceCriteria}`.toLowerCase();

  if (/unauthorized|rbac|permission|access denied|security/i.test(text)) {
    tags.push("rbac", "security");
  } else if (/export|download|csv/i.test(text)) {
    tags.push("export");
  } else if (/accessibility|keyboard|focus|screen reader/i.test(text)) {
    tags.push("accessibility");
  } else if (/performance|slow|latency/i.test(text)) {
    tags.push("performance");
  } else if (/browser|chrome|edge|firefox/i.test(text)) {
    tags.push("browser-compat");
  } else if (/session|logout|timeout/i.test(text)) {
    tags.push("session");
  } else if (/pii|mask|aadhaar|pan/i.test(text)) {
    tags.push("pii", "compliance");
  } else if (/error|failure|retry|500/i.test(text)) {
    tags.push("error-handling");
  } else if (/regression|workflow|e2e/i.test(text)) {
    tags.push("regression", "e2e");
  } else {
    tags.push("functional");
  }

  return [...new Set(tags)];
}

function inferAutomationLayer(row: C360ExcelRow): { layer: string; reason: string; candidate: "Yes" | "No" } {
  if (MANUAL_ONLY_IDS.has(row.id)) {
    return {
      layer: "Manual",
      reason: "Browser compatibility, session timeout, or performance SLA requires manual or specialized tooling",
      candidate: "No",
    };
  }

  const text = `${row.taskDescription} ${row.subModule}`.toLowerCase();
  if (/screen reader|wcag|color contrast/i.test(text)) {
    return {
      layer: "UI + Manual",
      reason: "Accessibility conformance may require assistive technology review",
      candidate: "Yes",
    };
  }

  return {
    layer: "UI",
    reason: "Customer 360 UI automation via Playwright page object",
    candidate: "Yes",
  };
}

export function buildAutomationFeasibilityMatrix(rows: C360ExcelRow[]): AutomationFeasibilityEntry[] {
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
