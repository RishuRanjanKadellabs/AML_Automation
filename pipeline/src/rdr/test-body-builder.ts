import type { RdrExcelRow, ExcelAlignedPhases, FsdMappingEntry } from "./types";
import { formatFsdReference } from "./fsd-mapper";
import { buildGapTodoComment, parseNumberedSteps } from "./excel-intent";

function escapeComment(value: string): string {
  return value.replace(/\*\//g, "* /").replace(/\n/g, " ").trim();
}

export function buildTraceabilityComments(row: RdrExcelRow, fsd: FsdMappingEntry): string {
  const numbered = parseNumberedSteps(row.testSteps);
  return [
    `// Excel Test Case ID: ${row.id}`,
    `// Excel Scenario: ${escapeComment(row.subModule)} → ${escapeComment(row.taskDescription)}`,
    `// ${formatFsdReference(fsd)}`,
    `// Steps (${numbered.length}): ${escapeComment(numbered.slice(0, 3).join(" → "))}${numbered.length > 3 ? " …" : ""}`,
    `// Expected: ${escapeComment(row.expectedResult)}`,
  ].join("\n    ");
}

function indentBlock(lines: string[], spaces: number): string {
  const pad = " ".repeat(spaces);
  return lines.map((l) => `${pad}${l}`).join("\n");
}

export function wrapPhasesInTestSteps(phases: ExcelAlignedPhases): string {
  const blocks: string[] = [];

  if (phases.preconditions.length > 0) {
    blocks.push(
      `await test.step("Preconditions", async () => {
${indentBlock(phases.preconditions.map((l) => `${l};`), 6)}
      });`,
    );
  }

  if (phases.setup.length > 0) {
    blocks.push(
      `await test.step("Navigate / setup", async () => {
${indentBlock(phases.setup.map((l) => `${l};`), 6)}
      });`,
    );
  }

  if (phases.steps.length > 0) {
    blocks.push(
      `await test.step("Execute Excel test steps", async () => {
${indentBlock(phases.steps.map((l) => `${l};`), 6)}
      });`,
    );
  }

  if (phases.assertions.length > 0) {
    blocks.push(
      `await test.step("Validate expected results", async () => {
${indentBlock(phases.assertions.map((l) => `${l};`), 6)}
      });`,
    );
  }

  return blocks.join("\n\n    ");
}

export function buildInstrumentedTestBody(
  row: RdrExcelRow,
  phases: ExcelAlignedPhases,
  fsd: FsdMappingEntry,
): string {
  const traceability = buildTraceabilityComments(row, fsd);
  const todo = buildGapTodoComment(row);
  const body = wrapPhasesInTestSteps(phases);
  const todoLine = todo ? `\n    ${todo}` : "";
  const logLabel = row.taskDescription || row.masterName;

  return `${traceability}${todoLine}
    console.log("[${row.id}] ${escapeComment(row.masterName)} → ${escapeComment(logLabel)}");
    ${body}`;
}
