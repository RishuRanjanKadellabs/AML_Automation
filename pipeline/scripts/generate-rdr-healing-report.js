const fs = require("fs");
const path = require("path");

const beforeIds = fs
  .readFileSync(path.join(__dirname, "../test-data/rdr-healer-failed-ids-before-fix.txt"), "utf8")
  .trim()
  .split(/\n/)
  .filter(Boolean);

const detail = require("../../results/test-run-detail.json");
const afterMap = new Map();

for (const entry of detail.entries) {
  const id = entry.title.match(/RDR_\d+/)?.[0];
  if (!id || !beforeIds.includes(id)) continue;
  const prev = afterMap.get(id);
  if (!prev || entry.startedAt >= prev.startedAt) afterMap.set(id, entry);
}

const healed = [];
const stillFailed = [];

for (const id of beforeIds) {
  const entry = afterMap.get(id);
  if (entry?.status === "passed") healed.push(id);
  else stillFailed.push(id);
}

const report = {
  generatedAt: new Date().toISOString(),
  suite: "Reference Data Registry (376 tests)",
  beforeFix: {
    passed: 208,
    failed: 168,
    skipped: 0,
    total: 376,
  },
  afterRerunOfPreviouslyFailed: {
    healedCount: healed.length,
    stillFailedCount: stillFailed.length,
    healed,
    stillFailed,
  },
  rootCauseSummary: [
    {
      category: "navigation",
      description: "Master tab not selected when shell grid was already visible (e.g. Address/FX Rates stayed on Customer tab).",
      fix: "Always activate target master tab; verify slug-specific grid column hints after click.",
    },
    {
      category: "column mapping",
      description: "Excel column labels did not match live UI headers (From CCY, Last 4, Mobile Number, Ref ID, etc.).",
      fix: "Expanded fixtures/rdr-column-map.json using live grid header dump from all 27 RDR tabs.",
    },
    {
      category: "grid",
      description: "Column alias arrays treated as AND (all aliases required) instead of OR (first match).",
      fix: "expectColumnVisible / expectAllCellsNonEmpty / getColumnIndex now use first matching alias unless column name contains 'and'.",
    },
    {
      category: "locator",
      description: "Grid/table scoped to wrong DOM region; column headers not found in nested layouts.",
      fix: "Scoped dataTable and gridRows to .rdr-layout/.tcard; header lookup via isGridColumnPresent().",
    },
    {
      category: "wait",
      description: "waitForActiveMasterGrid card text assertion too strict for some master tabs.",
      fix: "Wait on visible dataTable only.",
    },
    {
      category: "assertion",
      description: "Detail-only fields (Last Review Date, risk flags) not in default grid columns.",
      fix: "Fallback to View modal body text when grid column absent.",
    },
    {
      category: "data",
      description: "Clear button did not reset search input value.",
      fix: "clearSearchAndFilters clears input, presses Enter, resets filter select.",
    },
  ],
  filesModified: [
    "tests/milestone1/pages/KYCModule/ReferenceDataRegistryPages/ReferenceDataRegistryPage.ts",
    "tests/objectrepositories/ReferenceDataRegistryLocators.ts",
    "fixtures/rdr-column-map.json",
    "pipeline/scripts/dump-rdr-headers.ts",
    "pipeline/test-data/rdr-healer-failed-ids-before-fix.txt",
  ],
  fixesApplied: [
    "Master tab navigation hardened with SLUG_GRID_HINTS verification",
    "Live UI column map reconciliation for all RDR master tabs",
    "OR-alias column resolution for mapped headers",
    "Grid-scoped locators and header normalization (camelCase/i18n keys)",
    "Detail view fallback for grid-hidden columns",
    "Clear search/filter stabilization",
    "Simplified grid load wait (dataTable visible)",
  ],
};

const outPath = path.join(__dirname, "../../results/rdr-healing-report.json");
fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report.afterRerunOfPreviouslyFailed, null, 2));
console.log("\nReport written to", outPath);
