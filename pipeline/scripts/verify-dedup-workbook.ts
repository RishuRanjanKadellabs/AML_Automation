import { loadDdsRows } from "../src/dedup-screening/parser";
import { countSteps } from "../src/dedup-screening/step-expander";

const rows = loadDdsRows();
const steps = rows.map((r) => countSteps(r.testSteps));
const subs = new Map<string, number>();
const pri = new Map<string, number>();
const dupDesc = new Map<string, string[]>();
const issues: string[] = [];

for (const r of rows) {
  subs.set(r.subModule, (subs.get(r.subModule) || 0) + 1);
  pri.set(r.priority || "(blank)", (pri.get(r.priority || "(blank)") || 0) + 1);
  const key = r.taskDescription.toLowerCase().trim();
  if (!dupDesc.has(key)) dupDesc.set(key, []);
  dupDesc.get(key)!.push(r.id);
  if (!r.taskDescription.trim()) issues.push(`${r.id}: missing description`);
  if (!r.testSteps.trim()) issues.push(`${r.id}: missing steps`);
  if (!r.expectedResult.trim()) issues.push(`${r.id}: missing expected result`);
  if (/login|logout|sign in|sign out/i.test(r.testSteps + r.preconditions)) {
    issues.push(`${r.id}: login/logout reference`);
  }
  if (/\b(FSD|Figma|HTML|prototype|mockup)\b/i.test(r.taskDescription + r.testSteps + r.expectedResult)) {
    issues.push(`${r.id}: banned reference`);
  }
}

const dupes = [...dupDesc.entries()].filter(([, ids]) => ids.length > 1);
const ids = rows.map((r) => r.id);
const expected = rows.map((_, i) => `DDS-TC-${String(i + 1).padStart(3, "0")}`);
const badIds = ids.filter((id, i) => id !== expected[i]);

console.log(
  JSON.stringify(
    {
      total: rows.length,
      uniqueIds: new Set(ids).size,
      sequentialIdsOk: badIds.length === 0,
      badIdCount: badIds.length,
      stepMin: Math.min(...steps),
      stepMax: Math.max(...steps),
      stepAvg: (steps.reduce((a, b) => a + b, 0) / steps.length).toFixed(1),
      stepDistribution: {
        4: steps.filter((s) => s === 4).length,
        5: steps.filter((s) => s === 5).length,
        6: steps.filter((s) => s === 6).length,
        7: steps.filter((s) => s === 7).length,
        8: steps.filter((s) => s === 8).length,
      },
      subModuleCount: subs.size,
      duplicateDescriptions: dupes.length,
      issues,
      priorities: Object.fromEntries(pri),
    },
    null,
    2,
  ),
);

console.log("\nSub-modules (top 10):");
[...subs.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10)
  .forEach(([k, v]) => console.log(v, k.replace("De-Dup Screening – ", "")));

if (dupes.length) {
  console.log("\nDuplicate descriptions:");
  dupes.slice(0, 8).forEach(([d, idList]) => console.log(idList.join(", "), "-", d.slice(0, 80)));
}
