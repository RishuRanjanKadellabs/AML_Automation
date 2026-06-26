import type { MmExcelRow, ExcelAlignedPhases, FsdMappingEntry } from "./types";
import { formatFsdReference } from "./fsd-mapper";

function parseNumberedSteps(testSteps: string): string[] {
  if (!testSteps.trim()) {
    return [];
  }
  return testSteps
    .split(/\s*(?=\d+\.\s)/)
    .map((s) => s.replace(/^\d+\.\s*/, "").trim())
    .filter(Boolean);
}

function escapeComment(value: string): string {
  return value.replace(/\*\//g, "* /").replace(/\n/g, " ").trim();
}

function splitExpectedBullets(expectedResult: string): string[] {
  if (!expectedResult.trim()) {
    return [];
  }
  return expectedResult
    .split(/(?:\d+\.\s+|;\s+|\n+)/)
    .map((s) => s.trim())
    .filter((s) => s.length > 3);
}

function indentBlock(lines: string[], spaces: number): string {
  const pad = " ".repeat(spaces);
  return lines.map((l) => `${pad}${l}`).join("\n");
}

export function buildTraceabilityComments(row: MmExcelRow, fsd: FsdMappingEntry): string {
  const numbered = parseNumberedSteps(row.testSteps);
  const expectedBullets = splitExpectedBullets(row.expectedResult);

  return [
    `// Excel: ${row.id} | Feature: ${escapeComment(row.feature)} | Task: ${escapeComment(row.taskDescription)}`,
    `// ${formatFsdReference(fsd)}`,
    `// Steps (${numbered.length}): ${escapeComment(numbered.slice(0, 3).join(" → "))}${numbered.length > 3 ? " …" : ""}`,
    `// Expected: ${escapeComment(expectedBullets[0] ?? row.expectedResult)}`,
  ].join("\n    ");
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
  row: MmExcelRow,
  phases: ExcelAlignedPhases,
  fsd: FsdMappingEntry,
): string {
  const traceability = buildTraceabilityComments(row, fsd);
  const body = wrapPhasesInTestSteps(phases);

  return `${traceability}
    console.log("[${row.id}] ${escapeComment(row.feature)} → ${escapeComment(row.taskDescription)}");
    ${body}`;
}
