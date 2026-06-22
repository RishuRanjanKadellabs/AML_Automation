import * as fs from "fs";
import * as path from "path";
import { loadMsRows, describeLabel } from "./parser";
import type { MsExcelRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "specs/manual-screening");

export function writePlanArtifacts(rows: MsExcelRow[] = loadMsRows()): void {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const index = rows.map((row) => ({
    id: row.id,
    module: row.module,
    subModule: row.subModule,
    taskDescription: row.taskDescription,
    priority: row.priority,
    expectedResult: row.expectedResult,
  }));

  fs.writeFileSync(path.join(OUTPUT_DIR, "requirements-index.json"), JSON.stringify(index, null, 2), "utf8");

  const modules: Record<string, number> = {};
  rows.forEach((r) => {
    modules[r.module] = (modules[r.module] || 0) + 1;
  });

  const coverage = rows.map((row) => ({
    excelTestCaseId: row.id,
    scenarioName: row.taskDescription,
    generatedSpecFile: "tests/milestone1/test-cases/ScreeningModule/manualScreeningTests/manual-screening.spec.ts",
    automationStatus: "Generated",
    missingInformation: row.testSteps.includes("TODO") ? "See spec TODO comments" : "",
  }));

  fs.writeFileSync(path.join(OUTPUT_DIR, "coverage-summary.json"), JSON.stringify(coverage, null, 2), "utf8");

  const plan = [
    "# Manual Screening Test Plan",
    "",
    `Source: \`pipeline/test-data/Manual Screening Test Cases.xlsx\``,
    `Total cases: **${rows.length}** (${rows[0]?.id} → ${rows[rows.length - 1]?.id})`,
    "",
    "## Modules",
    "",
    ...Object.entries(modules).map(([m, count]) => `- ${m}: ${count}`),
    "",
  ].join("\n");

  fs.writeFileSync(path.join(OUTPUT_DIR, "plan.md"), plan, "utf8");
  console.log(`Plan artifacts written to ${OUTPUT_DIR} (${rows.length} cases)`);
}

export function subModuleDescribeOrder(rows: MsExcelRow[]): string[] {
  const order: string[] = [];
  for (const row of rows) {
    const label = describeLabel(row.module);
    if (!order.includes(label)) {
      order.push(label);
    }
  }
  return order;
}
