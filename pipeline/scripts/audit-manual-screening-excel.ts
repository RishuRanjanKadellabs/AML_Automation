import * as XLSX from "xlsx";
import * as path from "path";

const wb = XLSX.readFile(path.join(process.cwd(), "pipeline/test-data/Manual Screening Test Cases.xlsx"));
const rows = XLSX.utils.sheet_to_json<Record<string, string>>(wb.Sheets[wb.SheetNames[0]], { defval: "" });

let currentModule = "";
let currentSubModule = "";
let currentTcGroup = "";

const automatable: Array<Record<string, string>> = [];
const tcMsHeaders: string[] = [];

for (const r of rows) {
  const mod = String(r.Module || "").trim();
  const sub = String(r["Sub Module"] || "").trim();
  const id = String(r["Test Case ID"] || "").trim();
  const desc = String(r["Test Discription"] || r["Task Description"] || "").trim();
  const steps = String(r["Test Steps"] || "").trim();
  const expected = String(r["Expected Result"] || "").trim();

  if (mod) currentModule = mod;
  if (sub) currentSubModule = sub;

  if (/^TC-MS-\d+$/i.test(id)) {
    currentTcGroup = id;
    tcMsHeaders.push(id);
    continue;
  }

  if (/^MS-/i.test(id)) {
    automatable.push({
      id,
      module: mod || currentModule,
      subModule: sub || currentSubModule,
      taskDescription: desc,
      testSteps: steps,
      expectedResult: expected,
      source: "MS-ID",
    });
    continue;
  }

  // Row without MS ID but has test content (child of TC-MS group or module section)
  if ((desc || steps || expected) && !id.match(/^(Layout|TOP BAR|Tab Navigation|Entity Type|Individual Form|Bulk|Watchlist|Screening|AI)/i)) {
    const syntheticId = currentTcGroup
      ? `${currentTcGroup}-${String(automatable.filter((a) => a.id.startsWith(currentTcGroup)).length + 1).padStart(2, "0")}`
      : "";
    if (steps || expected) {
      automatable.push({
        id: syntheticId || `ROW-${automatable.length + 1}`,
        module: mod || currentModule,
        subModule: sub || currentSubModule,
        taskDescription: desc,
        testSteps: steps,
        expectedResult: expected,
        source: syntheticId ? "TC-MS-child" : "orphan-row",
        parentGroup: currentTcGroup,
      });
    }
  }
}

const bySource = new Map<string, number>();
automatable.forEach((a) => bySource.set(a.source, (bySource.get(a.source) || 0) + 1));

console.log("TC-MS group headers:", tcMsHeaders.length, "range", tcMsHeaders[0], "-", tcMsHeaders[tcMsHeaders.length - 1]);
console.log("Automatable breakdown:", Object.fromEntries(bySource));
console.log("Total automatable:", automatable.length);

const orphans = automatable.filter((a) => a.source === "orphan-row");
console.log("Orphan rows with steps (no MS/TC id):", orphans.length);
orphans.slice(0, 5).forEach((o) => console.log(o));

const tcChildren = automatable.filter((a) => a.source === "TC-MS-child");
console.log("TC-MS child rows:", tcChildren.length);
tcChildren.slice(0, 5).forEach((o) => console.log(o));

// Count rows with steps+expected regardless of ID
const withSteps = rows.filter((r) => {
  const steps = String(r["Test Steps"] || "").trim();
  const er = String(r["Expected Result"] || "").trim();
  const desc = String(r["Test Discription"] || r["Task Description"] || "").trim();
  return (steps || er) && desc;
});
console.log("\nRows with description AND (steps or expected):", withSteps.length);
