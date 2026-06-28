import * as fs from "fs";
import * as path from "path";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const TEST_CASES_MD = path.join(PROJECT_ROOT, "specs/kyc-gap-report/test-cases.md");

export interface KgrBaselineEntry {
  taskDescription?: string;
  acceptanceCriteria: string;
  preconditions: string;
  testSteps: string;
  testData: string;
  expectedResult: string;
}

let cache: Map<string, KgrBaselineEntry> | null = null;

import { applyNavigationOverrides } from "./navigation-updates";

function fieldValue(block: string, field: string): string {
  const re = new RegExp(`\\| ${field} \\| ([^\\n|]+) \\|`);
  const match = block.match(re);
  return match?.[1]?.trim() ?? "";
}

export function loadKgrBaseline(): Map<string, KgrBaselineEntry> {
  if (cache) return cache;

  cache = new Map();
  if (!fs.existsSync(TEST_CASES_MD)) return cache;

  const md = fs.readFileSync(TEST_CASES_MD, "utf-8");
  for (const block of md.split(/^### KGR-/m).slice(1)) {
    const idMatch = block.match(/^(\d{3})/);
    if (!idMatch) continue;
    const id = `KGR-${idMatch[1]}`;
    const taskLine = block.match(/^(\d{3})\s+—\s+(.+)$/m);
    const entry: KgrBaselineEntry = {
      taskDescription: taskLine?.[2]?.trim() ?? "",
      acceptanceCriteria: fieldValue(block, "Acceptance Criteria"),
      preconditions: fieldValue(block, "Preconditions"),
      testSteps: fieldValue(block, "Steps"),
      testData: fieldValue(block, "Test Data"),
      expectedResult: fieldValue(block, "Expected Result"),
    };
    cache.set(id, applyNavigationOverrides(id, entry));
  }

  return cache;
}

export function getBaselineEntry(id: string): KgrBaselineEntry | undefined {
  return loadKgrBaseline().get(id);
}
