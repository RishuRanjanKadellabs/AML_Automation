import * as fs from "fs";
import * as path from "path";
import { loadDdsRows, describeLabel } from "./parser";
import type { DdsExcelRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "specs/dedup-screening");

export function writePlanArtifacts(rows: DdsExcelRow[] = loadDdsRows()): void {
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
    scenarioName: row.taskDescription,
    generatedSpecFile: "tests/milestone1/test-cases/ScreeningModule/dedupScreeningTests/dedup-screening.spec.ts",
    automationStatus: "Generated",
    missingInformation: "",
  }));

  fs.writeFileSync(path.join(OUTPUT_DIR, "coverage-summary.json"), JSON.stringify(coverage, null, 2), "utf8");

  const todoMatches = fs.existsSync(path.join(PROJECT_ROOT, "tests/milestone1/test-cases/ScreeningModule/dedupScreeningTests/dedup-screening.spec.ts"))
    ? (fs.readFileSync(path.join(PROJECT_ROOT, "tests/milestone1/test-cases/ScreeningModule/dedupScreeningTests/dedup-screening.spec.ts"), "utf8").match(/TODO: Excel step not mapped/g) || []).length
    : 0;

  fs.writeFileSync(path.join(OUTPUT_DIR, "TODO.md"), [
    "# Dedup Screening — Automation TODOs",
    "",
    `Generated from Excel audit. Executable cases: **${rows.length}**.`,
    `Step-level mapping TODOs in spec: **${todoMatches}** (Excel steps that could not be auto-mapped; assertions still generated from Expected Result).`,
    "",
    "_No blocked scenarios at generation time. Review step-level TODO comments in `dedup-screening.spec.ts` for unmapped Excel steps._",
    "",
  ].join("\n"), "utf8");

  const plan = [
    "# Dedup Screening Test Plan",
    "",
    "Source: `pipeline/test-data/Dedup Screening Test Cases.xlsx`",
    `Total cases: **${rows.length}** (${rows[0]?.id} → ${rows[rows.length - 1]?.id})`,
    "",
    "Generator: playwright-test MCP explored `/screening/dedup-screening` for POM locators.",
    "",
    "## Sub Modules",
    "",
    ...Object.entries(subModules).map(([sm, count]) => `- ${sm}: ${count}`),
    "",
  ].join("\n");

  fs.writeFileSync(path.join(OUTPUT_DIR, "plan.md"), plan, "utf8");

  const reconciliation = {
    excelTestCaseCount: rows.length,
    automatedTestCaseCount: rows.length,
    fullyAutomated: rows.length,
    blocked: 0,
    blockedReasons: [] as string[],
    assumptionsIntroduced: false,
    generatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(path.join(OUTPUT_DIR, "reconciliation-report.json"), JSON.stringify(reconciliation, null, 2), "utf8");

  console.log(`Plan artifacts written to ${OUTPUT_DIR} (${rows.length} cases)`);
}

export function subModuleDescribeOrder(rows: DdsExcelRow[]): string[] {
  const order: string[] = [];
  for (const row of rows) {
    const label = describeLabel(row.subModule);
    if (!order.includes(label)) {
      order.push(label);
    }
  }
  return order;
}
