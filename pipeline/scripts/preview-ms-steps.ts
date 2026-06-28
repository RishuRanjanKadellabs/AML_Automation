import { loadMsRows } from "../src/manual-screening/parser";
import { buildTestSteps } from "../src/manual-screening/step-enricher";
import { parseStepLines } from "../src/manual-screening/step-normalizer";

const rows = loadMsRows();
const dist = new Map<number, number>();

for (const row of rows) {
  const steps = buildTestSteps(row);
  dist.set(steps.length, (dist.get(steps.length) ?? 0) + 1);
}

console.log("New step distribution:", Object.fromEntries([...dist.entries()].sort((a, b) => a[0] - b[0])));

const groups = new Map<string, number>();
for (const row of rows) {
  const key = buildTestSteps(row).join("\n");
  groups.set(key, (groups.get(key) ?? 0) + 1);
}

console.log("Identical sets (3+ cases):", [...groups.values()].filter((n) => n > 2).length);

for (const id of ["MS-004-01", "MS-004-02", "MS-005-01", "MS-015-01", "MS-015-02"]) {
  const row = rows.find((r) => r.id === id);
  if (!row) continue;
  const steps = buildTestSteps(row);
  console.log(`\n${id} (${steps.length} steps)`);
  steps.forEach((step, index) => console.log(`${index + 1}. ${step}`));
}
