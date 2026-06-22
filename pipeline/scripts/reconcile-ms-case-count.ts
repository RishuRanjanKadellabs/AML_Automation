import * as XLSX from "xlsx";
import * as path from "path";
import { isManualScreeningCaseId, loadMsRows } from "../src/manual-screening/parser";

const excelPath = path.join(process.cwd(), "pipeline/test-data/Manual Screening Test Cases.xlsx");
const wb = XLSX.readFile(excelPath);
const sheetName = wb.SheetNames[0];
const rows = XLSX.utils.sheet_to_json<Record<string, string>>(wb.Sheets[sheetName], { defval: "" });

function cell(r: Record<string, string>, key: string): string {
  return String(r[key] ?? "").trim();
}

function hasContent(r: Record<string, string>): boolean {
  const desc = cell(r, "Test Discription") || cell(r, "Task Description");
  const steps = cell(r, "Test Steps");
  const er = cell(r, "Expected Result");
  return Boolean(desc && (steps || er));
}

function hasStepsOrExpected(r: Record<string, string>): boolean {
  return Boolean(cell(r, "Test Steps") || cell(r, "Expected Result"));
}

// Method A: rows with description + (steps or expected) — current parser rule
const methodA = rows.filter(hasContent);

// Method B: any row with recognized ID + (steps or expected)
const methodB = rows.filter((r) => {
  const id = cell(r, "Test Case ID");
  return isManualScreeningCaseId(id) && hasStepsOrExpected(r);
});

// Method C: TC-MS parent headers + TC-MS step children + standalone MS/TC_MS cases
let currentTcGroup = "";
const methodC: Array<{ id: string; source: string }> = [];
for (const r of rows) {
  const id = cell(r, "Test Case ID");
  const desc = cell(r, "Test Discription") || cell(r, "Task Description");
  const steps = cell(r, "Test Steps");
  const er = cell(r, "Expected Result");

  if (/^TC-MS-\d+$/i.test(id)) {
    currentTcGroup = id;
    if (desc && (steps || er)) {
      methodC.push({ id, source: "TC-MS-header-with-content" });
    } else if (steps || er) {
      methodC.push({ id, source: "TC-MS-header-steps-only" });
    }
    continue;
  }

  if (isManualScreeningCaseId(id) && desc && (steps || er)) {
    methodC.push({ id, source: "standalone-id" });
    currentTcGroup = "";
    continue;
  }

  if (currentTcGroup && (steps || er) && !/^TC-MS-\d+$/i.test(id)) {
    const childIndex = methodC.filter((x) => x.id.startsWith(`${currentTcGroup}-`)).length + 1;
    methodC.push({ id: `${currentTcGroup}-${String(childIndex).padStart(2, "0")}`, source: "TC-MS-child-step" });
  }
}

// Method D: all rows with Test Case ID that looks like a test (not section headers)
const sectionHeaderPattern = /^(Layout|TOP BAR|Tab Navigation|Entity Type|Individual Form|Bulk|Watchlist|Screening|AI)/i;
const methodD = rows.filter((r) => {
  const id = cell(r, "Test Case ID");
  if (!id || sectionHeaderPattern.test(id)) {
    return false;
  }
  return hasStepsOrExpected(r) || hasContent(r);
});

// IDs in spec vs excel
const parsed = loadMsRows();
const parsedIds = new Set(parsed.map((r) => r.id));

const excelRecognizedIds = new Set<string>();
for (const r of rows) {
  const id = cell(r, "Test Case ID");
  if (isManualScreeningCaseId(id) && hasContent(r)) {
    excelRecognizedIds.add(id);
  }
}

const missingFromParser = [...excelRecognizedIds].filter((id) => !parsedIds.has(id));
const extraInParser = [...parsedIds].filter((id) => !excelRecognizedIds.has(id));

// Find rows that could explain 541
const withIdAndSteps = rows.filter((r) => cell(r, "Test Case ID") && hasStepsOrExpected(r));
const uniqueIdsWithSteps = new Set(withIdAndSteps.map((r) => cell(r, "Test Case ID")));

// TC-MS: count parent + each child as separate case (user may count this way)
const tcMsParents = rows.filter((r) => /^TC-MS-\d+$/i.test(cell(r, "Test Case ID")));
let tcMsChildCount = 0;
currentTcGroup = "";
for (const r of rows) {
  const id = cell(r, "Test Case ID");
  if (/^TC-MS-\d+$/i.test(id)) {
    currentTcGroup = id;
    continue;
  }
  if (currentTcGroup && hasStepsOrExpected(r) && !isManualScreeningCaseId(id)) {
    tcMsChildCount++;
  }
}

console.log(JSON.stringify({
  sheetName,
  totalExcelRows: rows.length,
  sheets: wb.SheetNames,
  currentParserCount: parsed.length,
  methods: {
    A_descAndStepsOrExpected: methodA.length,
    B_recognizedIdAndSteps: methodB.length,
    C_tcMsExpanded: methodC.length,
    D_idWithStepsOrContent: methodD.length,
    withIdAndSteps: withIdAndSteps.length,
    uniqueIdsWithSteps: uniqueIdsWithSteps.size,
  },
  breakdown: {
    msId: methodA.filter((r) => /^MS-/i.test(cell(r, "Test Case ID"))).length,
    tcMsHeader: methodA.filter((r) => /^TC-MS-\d+$/i.test(cell(r, "Test Case ID"))).length,
    tcMsUnderscore: methodA.filter((r) => /^TC_MS/i.test(cell(r, "Test Case ID"))).length,
    tcMsParents: tcMsParents.length,
    tcMsChildSteps: tcMsChildCount,
    standalonePlusTcMsChildren: methodA.length + tcMsChildCount,
    standalonePlusTcMsParentsAndChildren: methodA.length + tcMsChildCount,
  },
  reconcile541: {
    hypothesis500plus41children: methodA.length + 41,
    hypothesis395plus25plus80plus41: 395 + 25 + 80 + 41,
    methodC_total: methodC.length,
    methodA_plus_tcMsChildren: methodA.length + tcMsChildCount,
    methodA_plus_tcMsParents: methodA.length + tcMsParents.length,
  },
  missingFromParser,
  extraInParser,
  sampleMethodCFirst10: methodC.slice(0, 10),
  sampleMethodCLast5: methodC.slice(-5),
}, null, 2));
