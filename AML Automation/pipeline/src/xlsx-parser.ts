import * as fs from "fs";
import * as path from "path";
import * as XLSX from "xlsx";
import type { TestCase } from "./config";
import type { ParseDiagnostics, ParseResult } from "./parse-types";
import { emptyDiagnostics, printParseSummary } from "./parse-types";
import {
  cleanSteps,
  extractGroupName,
  extractPrerequisites,
  isGroupRow,
  normalizeCell,
  sanitizeId,
  splitMultilineField,
} from "./parse-utils";

type ColumnKey = "id" | "title" | "suite" | "prerequisites" | "steps" | "expected";

interface ColumnMap {
  id: number;
  title: number;
  suite: number;
  prerequisites: number;
  steps: number;
  expected: number;
}

const HEADER_ALIASES: Record<ColumnKey, RegExp[]> = {
  id: [/^test\s*case\s*id$/i, /^tc\s*id$/i, /^id$/i, /^#$/i, /^test\s*case\s*no\.?$/i, /^case\s*id$/i],
  title: [
    /^test\s*case$/i,
    /^scenario$/i,
    /^title$/i,
    /^description$/i,
    /^test\s*case\s*name$/i,
    /^test\s*case\s*title$/i,
    /^summary$/i,
  ],
  suite: [/^suite$/i, /^module$/i, /^test\s*group$/i, /^group$/i, /^feature$/i, /^area$/i, /^component$/i],
  prerequisites: [/^pre-?requisites?$/i, /^pre-?conditions?$/i, /^precondition$/i, /^given$/i],
  steps: [/^test\s*steps?$/i, /^steps?$/i, /^procedure$/i, /^actions?$/i, /^test\s*procedure$/i],
  expected: [
    /^expected\s*results?$/i,
    /^expected$/i,
    /^results?$/i,
    /^verification$/i,
    /^expected\s*outcome$/i,
  ],
};

export async function parseXlsx(filePath: string): Promise<ParseResult> {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Input file not found: ${filePath}`);
  }

  const ext = path.extname(filePath).toLowerCase();
  if (![".xlsx", ".xls", ".xlsm"].includes(ext)) {
    throw new Error(`Unsupported Excel format: ${ext}. Use .xlsx, .xls, or .xlsm`);
  }

  const workbook = XLSX.readFile(filePath, { cellDates: false, cellNF: false, cellText: false });
  const diagnostics = emptyDiagnostics();
  const testCases: TestCase[] = [];

  for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) continue;

    const matrix = XLSX.utils.sheet_to_json<unknown[]>(sheet, {
      header: 1,
      defval: "",
      blankrows: false,
    }) as unknown[][];

    if (matrix.length === 0) continue;

    const sheetCases = parseSheet(matrix, sheetName, diagnostics);
    testCases.push(...sheetCases);
  }

  diagnostics.parsedCount = testCases.length;
  printParseSummary("xlsx-parser", diagnostics);

  return { testCases, diagnostics };
}

function parseSheet(rows: unknown[][], sheetName: string, diagnostics: ParseDiagnostics): TestCase[] {
  diagnostics.totalTableRows += rows.length;
  if (rows.length === 0) return [];

  const headerRowIndex = findHeaderRowIndex(rows);
  const headerCells = rowToStrings(rows[headerRowIndex]);
  const columnMap = mapColumns(headerCells);

  const dataStartIndex = columnMap ? headerRowIndex + 1 : 0;
  const effectiveMap = columnMap ?? defaultColumnMap(headerCells.length);

  if (!columnMap) {
    diagnostics.warnings.push({
      rowIndex: headerRowIndex,
      reason: `No recognized headers on sheet "${sheetName}" — using default column order (ID, Suite, Title, Steps, Expected)`,
      rawContent: headerCells.join(" | ").substring(0, 200),
    });
  }

  const testCases: TestCase[] = [];
  let currentSuite = sheetName.trim() || "General";

  for (let i = dataStartIndex; i < rows.length; i++) {
    const cells = rowToStrings(rows[i]);
    if (cells.every((cell) => !cell)) continue;

    if (isGroupRow(cells)) {
      currentSuite = extractGroupName(cells.find(Boolean) || "") || currentSuite;
      continue;
    }

    const id = cellAt(cells, effectiveMap.id);
    const suite = cellAt(cells, effectiveMap.suite) || currentSuite;
    const title = cellAt(cells, effectiveMap.title);
    const prerequisitesText = cellAt(cells, effectiveMap.prerequisites);
    const stepsText = cellAt(cells, effectiveMap.steps);
    const expectedText = cellAt(cells, effectiveMap.expected);
    const rawText = cells.filter(Boolean).join(" | ");

    if (!id && !title && !stepsText && !expectedText) {
      diagnostics.warnings.push({
        rowIndex: i + 1,
        reason: "Empty data row skipped",
        rawContent: "",
      });
      continue;
    }

    const effectiveId = id || `TC-row-${i + 1}`;
    const stepsFromCell = splitMultilineField(stepsText);
    const prerequisites = prerequisitesText
      ? splitMultilineField(prerequisitesText)
      : extractPrerequisites(stepsFromCell);
    const steps = cleanSteps(
      stepsFromCell.filter((step) => !/^given\b/i.test(step.trim())),
    );
    const expectedResults = splitMultilineField(expectedText);

    if (!title && steps.length === 0 && !expectedResults.length) {
      diagnostics.warnings.push({
        rowIndex: i + 1,
        reason: "Row has ID but no title, steps, or expected results — skipped",
        rawContent: rawText.substring(0, 200),
      });
      continue;
    }

    if (!id) {
      diagnostics.warnings.push({
        rowIndex: i + 1,
        reason: `Missing test case ID — using fallback "${effectiveId}"`,
        rawContent: rawText.substring(0, 200),
      });
    }

    if (suite && suite !== currentSuite && cellAt(cells, effectiveMap.suite)) {
      currentSuite = suite;
    }

    testCases.push({
      id: sanitizeId(effectiveId),
      title: title || `Test Case ${effectiveId}`,
      suite: currentSuite,
      prerequisites,
      steps,
      expectedResults,
      rawText,
    });
  }

  return testCases;
}

function findHeaderRowIndex(rows: unknown[][]): number {
  for (let i = 0; i < Math.min(rows.length, 10); i++) {
    const cells = rowToStrings(rows[i]);
    if (mapColumns(cells)) return i;
  }
  return 0;
}

function mapColumns(headers: string[]): ColumnMap | null {
  const normalized = headers.map((h) => normalizeCell(h).toLowerCase());
  const found: Partial<ColumnMap> = {};

  for (const [key, patterns] of Object.entries(HEADER_ALIASES) as [ColumnKey, RegExp[]][]) {
    const index = normalized.findIndex((header) => patterns.some((pattern) => pattern.test(header)));
    if (index >= 0) found[key] = index;
  }

  const hasIdentity = found.id !== undefined || found.title !== undefined;
  const hasContent = found.steps !== undefined || found.expected !== undefined;
  if (!hasIdentity || !hasContent) return null;

  return {
    id: found.id ?? -1,
    title: found.title ?? -1,
    suite: found.suite ?? -1,
    prerequisites: found.prerequisites ?? -1,
    steps: found.steps ?? -1,
    expected: found.expected ?? -1,
  };
}

function defaultColumnMap(columnCount: number): ColumnMap {
  if (columnCount >= 5) {
    return { id: 0, suite: 1, title: 2, prerequisites: -1, steps: 3, expected: 4 };
  }
  if (columnCount === 4) {
    return { id: 0, title: 1, suite: -1, prerequisites: -1, steps: 2, expected: 3 };
  }
  if (columnCount === 3) {
    return { id: 0, title: 1, suite: -1, prerequisites: -1, steps: 2, expected: -1 };
  }
  return { id: 0, title: 1, suite: -1, prerequisites: -1, steps: 2, expected: 3 };
}

function rowToStrings(row: unknown[]): string[] {
  return row.map((cell) => normalizeCell(cell));
}

function cellAt(cells: string[], index: number): string {
  if (index < 0 || index >= cells.length) return "";
  return cells[index] ?? "";
}
