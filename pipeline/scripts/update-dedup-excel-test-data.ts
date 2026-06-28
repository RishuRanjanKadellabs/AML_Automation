/**
 * Updates Dedup Screening Excel workbook:
 * - Customer IDs: CUST10001/CUST12345 → 8829103, UNIQUE999 → 3310882
 * - Match Score references → Match Parameters (UI has no score column)
 */
import * as fs from "fs";
import * as path from "path";
import * as XLSX from "xlsx";

const EXCEL_PATH = path.join(process.cwd(), "pipeline/test-data/Dedup Screening Test Cases.xlsx");

export const DEDUP_CUSTOMER_ID_DUPLICATES = "8829103";
export const DEDUP_CUSTOMER_ID_NO_MATCH = "3310882";

function replaceCustomerIds(text: string): string {
  return text
    .replace(/\bCUST-?10001\b/gi, DEDUP_CUSTOMER_ID_DUPLICATES)
    .replace(/\bCUST12345\b/gi, DEDUP_CUSTOMER_ID_DUPLICATES)
    .replace(/\bUNIQUE999\b/gi, DEDUP_CUSTOMER_ID_NO_MATCH);
}

function fixCorruptedDescriptions(text: string): string {
  return text.replace(
    /Verify that "Generating\. This confirms report processing/gi,
    "Verify that Generating... status message is displayed during report processing. This confirms report processing",
  );
}

function replaceMatchScoreText(text: string): string {
  let out = text;
  out = out.replace(/Match Score & AML Edge Cases/gi, "Duplicate Detection & AML Edge Cases");
  out = out.replace(/match score calculation/gi, "duplicate detection using match parameters");
  out = out.replace(/match score consistency between report grid and comparison popup/gi, "match parameters consistency between report grid and comparison popup");
  out = out.replace(/match score updates appropriately/gi, "duplicate grouping updates appropriately when additional matching parameters are introduced");
  out = out.replace(/match score display for/gi, "duplicate group display for");
  out = out.replace(/compare modal header displays Match Score/gi, "compare modal header displays matched parameters");
  out = out.replace(/match Score remains consistent between report and Compare modal/gi, "match parameters remain consistent between report and Compare modal");
  out = out.replace(/review match score values/gi, "review match parameter values");
  out = out.replace(/matched parameter and match score appear/gi, "matched parameters appear");
  out = out.replace(/\bMatch Scores\b/gi, "Match Parameters values");
  out = out.replace(/calculate scores consistently/gi, "return match parameters consistently");
  out = out.replace(/preserve score accuracy/gi, "preserve parameter accuracy");
  out = out.replace(/\bscore accuracy\b/gi, "parameter accuracy");
  out = out.replace(/\bMatch Score\b/g, "Match Parameters");
  out = out.replace(/\bmatch score\b/g, "match parameters");
  out = out.replace(/\bmatch Score\b/g, "match parameters");
  out = out.replace(/Confirm scores reflect the strength of the duplicate match/gi, "Confirm matched parameter values reflect the strength of the duplicate match");
  out = out.replace(/\bscores reflect\b/gi, "matched parameter values reflect");
  out = out.replace(/matching percentage/gi, "matched parameter coverage");
  out = out.replace(/recalculate scores based on selected criteria/gi, "recalculate match parameters based on selected criteria");
  out = out.replace(/recalculate scores/gi, "recalculate match parameters");
  return out;
}

function transformCell(value: unknown): unknown {
  if (typeof value !== "string") {
    return value;
  }
  let next = fixCorruptedDescriptions(replaceCustomerIds(value));
  if (/match scores?|match Score|scoring|score calculation|score display|score consistency|score updates|score remains|score accuracy|scores reflect|matching percentage|calculate scores|recalculate scores/i.test(next)) {
    next = replaceMatchScoreText(next);
  }
  return next;
}

function main(): void {
  if (!fs.existsSync(EXCEL_PATH)) {
    throw new Error(`Workbook not found: ${EXCEL_PATH}`);
  }

  const wb = XLSX.readFile(EXCEL_PATH);
  const sheetName = wb.SheetNames[0];
  const sheet = wb.Sheets[sheetName];
  const range = XLSX.utils.decode_range(sheet["!ref"] ?? "A1");
  let changedCells = 0;

  for (let r = range.s.r; r <= range.e.r; r += 1) {
    for (let c = range.s.c; c <= range.e.c; c += 1) {
      const addr = XLSX.utils.encode_cell({ r, c });
      const cell = sheet[addr];
      if (!cell || cell.v == null) {
        continue;
      }
      const original = String(cell.v);
      const transformed = String(transformCell(original));
      if (transformed !== original) {
        cell.v = transformed;
        cell.w = transformed;
        changedCells += 1;
      }
    }
  }

  XLSX.writeFile(wb, EXCEL_PATH);
  console.log(JSON.stringify({
    workbook: EXCEL_PATH,
    sheet: sheetName,
    changedCells,
    customerIds: { duplicates: DEDUP_CUSTOMER_ID_DUPLICATES, noMatch: DEDUP_CUSTOMER_ID_NO_MATCH },
  }, null, 2));
}

main();
