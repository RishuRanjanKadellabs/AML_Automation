import * as fs from "fs";
import * as path from "path";
import { loadRdrRows } from "./parser";
import { masterTabOrder } from "./tab-mapping";
import type { RdrExcelRow, RdrManifestEntry, RdrTodoEntry } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "specs/rdr");

export function writePlanArtifacts(rows: RdrExcelRow[]): { rowCount: number; outputDir: string } {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUTPUT_DIR, "test-cases.json"), JSON.stringify(rows, null, 2), "utf-8");
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "plan.md"),
    `# Reference Data Registry — Test Plan\n\nGenerated from \`pipeline/test-data/Reference Data Registry.xlsx\` — ${rows.length} cases.\n`,
    "utf-8",
  );
  return { rowCount: rows.length, outputDir: OUTPUT_DIR };
}

export function buildManifest(rows: RdrExcelRow[], todos: RdrTodoEntry[]): RdrManifestEntry[] {
  const todoIds = new Set(todos.map((t) => t.testCaseId));
  return rows.map((r) => ({
    id: r.id,
    masterTab: r.masterTab,
    priority: r.priority,
    taskDescription: r.taskDescription,
    specFile: "tests/milestone1/test-cases/KYCModule/referenceDataRegistryTests/reference-data-registry.spec.ts",
    automationStatus: todoIds.has(r.id) ? "Blocked" : "Automated",
    missingInformation: todos.find((t) => t.testCaseId === r.id)?.missingInformation ?? "",
  }));
}

export function writeReconciliationReport(
  rows: RdrExcelRow[],
  todos: RdrTodoEntry[],
): void {
  const manifest = buildManifest(rows, todos);
  const automated = manifest.filter((m) => m.automationStatus === "Automated").length;
  const blocked = manifest.filter((m) => m.automationStatus === "Blocked").length;

  const report = {
    generatedAt: new Date().toISOString(),
    excelFile: "pipeline/test-data/Reference Data Registry.xlsx",
    sheet: "Sheet1",
    totalExcelTestCases: rows.length,
    totalAutomatedTestCases: automated,
    totalFullyAutomated: automated,
    totalBlocked: blocked,
    blockedReasons: todos,
    assumptionsIntroduced: false,
    coverageSummary: manifest,
  };

  fs.writeFileSync(path.join(OUTPUT_DIR, "reconciliation-report.json"), JSON.stringify(report, null, 2), "utf-8");
  fs.writeFileSync(path.join(OUTPUT_DIR, "todo-list.json"), JSON.stringify(todos, null, 2), "utf-8");
  fs.writeFileSync(path.join(OUTPUT_DIR, "manifest.json"), JSON.stringify(manifest, null, 2), "utf-8");
}

export function getTabGroups(rows: RdrExcelRow[]): Map<string, RdrExcelRow[]> {
  const byTab = new Map<string, RdrExcelRow[]>();
  for (const tab of masterTabOrder()) {
    byTab.set(tab, []);
  }
  for (const row of rows) {
    const list = byTab.get(row.masterTab) ?? [];
    list.push(row);
    byTab.set(row.masterTab, list);
  }
  return byTab;
}
