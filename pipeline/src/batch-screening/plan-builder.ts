import * as fs from "fs";
import * as path from "path";
import { loadBsRows, describeLabel } from "./parser";
import type { BsExcelRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "specs/batch-screening");

export function writePlanArtifacts(rows: BsExcelRow[] = loadBsRows()): void {
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

  const subModules: Record<string, number> = {};
  rows.forEach((r) => {
    subModules[r.subModule] = (subModules[r.subModule] || 0) + 1;
  });

  const coverage = rows.map((row) => ({
    excelTestCaseId: row.id,
    generatedSpecFile: "tests/milestone1/test-cases/ScreeningModule/batchScreeningTests/batch-screening.spec.ts",
    automationStatus: "Generated",
    missingInformation: "",
  }));

  fs.writeFileSync(path.join(OUTPUT_DIR, "coverage-summary.json"), JSON.stringify(coverage, null, 2), "utf8");

  const plan = [
    "# Batch Screening Test Plan",
    "",
    `Source: \`pipeline/test-data/Batch Screening Test Cases.xlsx\``,
    `Total cases: **${rows.length}** (${rows[0]?.id} → ${rows[rows.length - 1]?.id})`,
    "",
    "## Sub Modules",
    "",
    ...Object.entries(subModules).map(([sm, count]) => `- ${sm}: ${count}`),
    "",
  ].join("\n");

  fs.writeFileSync(path.join(OUTPUT_DIR, "plan.md"), plan, "utf8");
  console.log(`Plan artifacts written to ${OUTPUT_DIR} (${rows.length} cases)`);
}

export function subModuleDescribeOrder(rows: BsExcelRow[]): string[] {
  const order: string[] = [];
  for (const row of rows) {
    const label = describeLabel(row.subModule);
    if (!order.includes(label)) {
      order.push(label);
    }
  }
  return order;
}
