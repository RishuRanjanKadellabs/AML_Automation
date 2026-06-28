import * as XLSX from "xlsx";
import * as path from "path";

const excelPath = path.join(process.cwd(), "pipeline/test-data/Manual Screening Test Cases.xlsx");

function countSteps(s: string): number {
  return String(s)
    .split(/\r?\n/)
    .filter((l) => /^\d+\.\s/.test(l.trim())).length;
}

function parseStepLines(s: string): string[] {
  return String(s)
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => /^\d+\.\s/.test(l))
    .map((l) => l.replace(/^\d+\.\s*/, ""));
}

const wb = XLSX.readFile(excelPath);
const rows = XLSX.utils.sheet_to_json<Record<string, string>>(wb.Sheets[wb.SheetNames[0]], {
  defval: "",
  raw: false,
});

const byId = new Map<string, Array<{ rowNum: number; steps: number; text: string }>>();

rows.forEach((r, idx) => {
  const id = String(r["Test Case ID"] ?? "").trim();
  if (!id) return;
  if (!/^MS-/i.test(id) && !/^TC-MS-/i.test(id) && !/^TC_MS/i.test(id)) return;
  const stepsText = String(r["Test Steps"] ?? "");
  const entry = { rowNum: idx + 2, steps: countSteps(stepsText), text: stepsText.slice(0, 100) };
  const list = byId.get(id) ?? [];
  list.push(entry);
  byId.set(id, list);
});

const allCaseRows: Array<{ rowNum: number; id: string; steps: number; text: string }> = [];
rows.forEach((r, idx) => {
  const id = String(r["Test Case ID"] ?? "").trim();
  if (!/^MS-/i.test(id) && !/^TC-MS-/i.test(id) && !/^TC_MS/i.test(id)) return;
  const stepsText = String(r["Test Steps"] ?? "");
  allCaseRows.push({
    rowNum: idx + 2,
    id,
    steps: countSteps(stepsText),
    text: stepsText.slice(0, 120),
  });
});

const dist = new Map<number, number>();
for (const r of allCaseRows) {
  dist.set(r.steps, (dist.get(r.steps) ?? 0) + 1);
}

console.log("All case rows in sheet:", allCaseRows.length);
console.log("Step distribution:", Object.fromEntries([...dist.entries()].sort((a, b) => a[0] - b[0])));

const low = allCaseRows.filter((r) => r.steps < 4);
console.log("\nRows with <4 steps:", low.length);
low.forEach((r) => console.log(`  row ${r.rowNum} ${r.id}: ${r.steps} — ${r.text || "(empty)"}`));

const oneStep = allCaseRows.filter((r) => r.steps === 1);
console.log("\nRows with exactly 1 step:", oneStep.length);
oneStep.slice(0, 40).forEach((r) => console.log(`  row ${r.rowNum} ${r.id}: ${r.text}`));

const emptySteps = allCaseRows.filter((r) => r.steps === 0);
console.log("\nRows with 0 steps:", emptySteps.length);
emptySteps.slice(0, 20).forEach((r) => console.log(`  row ${r.rowNum} ${r.id}`));

const dupIds = [...byId.entries()].filter(([, list]) => list.length > 1);
console.log("\nDuplicate IDs:", dupIds.length);
dupIds.slice(0, 10).forEach(([id, list]) => {
  console.log(`  ${id}: ${list.map((e) => `row${e.rowNum}(${e.steps})`).join(", ")}`);
});

for (const id of ["MS-004-01", "MS-004-02", "MS-004-03"]) {
  console.log(`\n${id} occurrences:`);
  (byId.get(id) ?? []).forEach((e) => {
    console.log(`  row ${e.rowNum}, steps=${e.steps}`);
    console.log(`  ${e.text}`);
  });
}
