const fs = require("fs");
const path = require("path");

const detail = require("../../results/test-run-detail.json");
const spec = fs.readFileSync(
  path.join(__dirname, "../../tests/milestone1/test-cases/KYCModule/referenceDataRegistryTests/reference-data-registry.spec.ts"),
  "utf8",
);

const failedIds = new Set(
  detail.entries.filter((e) => e.status === "failed").map((e) => e.title.match(/RDR_\d+/)?.[0]),
);

const cols = new Set();
const methods = new Set();

for (const id of failedIds) {
  const idx = spec.indexOf(`Case ID:${id}`);
  if (idx < 0) continue;
  const chunk = spec.slice(idx, idx + 2500);
  for (const m of chunk.matchAll(/rdrPage\.(\w+)\(/g)) methods.add(m[1]);
  for (const m of chunk.matchAll(/expectColumnVisible\("([^"]+)"\)/g)) cols.add(m[1]);
}

console.log("Failed:", failedIds.size);
console.log("\nColumn names:");
console.log([...cols].sort().join("\n"));
console.log("\nMethods:", [...methods].sort().join(", "));
