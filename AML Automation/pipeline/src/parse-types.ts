import type { TestCase } from "./config";

export interface ParseWarning {
  rowIndex: number;
  reason: string;
  rawContent: string;
}

export interface ParseDiagnostics {
  totalTableRows: number;
  parsedCount: number;
  warnings: ParseWarning[];
}

export interface ParseResult {
  testCases: TestCase[];
  diagnostics: ParseDiagnostics;
}

export function emptyDiagnostics(): ParseDiagnostics {
  return { totalTableRows: 0, parsedCount: 0, warnings: [] };
}

export function printParseSummary(parserName: string, d: ParseDiagnostics): void {
  console.log(`[${parserName}] Parse Summary:`);
  console.log(`  Total table rows examined: ${d.totalTableRows}`);
  console.log(`  Test cases extracted:      ${d.parsedCount}`);
  console.log(`  Warnings:                  ${d.warnings.length}`);
  for (const w of d.warnings) {
    console.log(`    [WARNING] Row ${w.rowIndex}: ${w.reason}`);
  }
}
