import fs from "fs";

const spec = fs.readFileSync(
  "tests/milestone1/test-cases/ScreeningModule/manualScreeningTests/manual-screening.spec.ts",
  "utf8",
);
const data = JSON.parse(fs.readFileSync("results/test-run-detail.json", "utf8"));
const failedIds = new Set(data.entries.filter((e) => e.status === "failed").map((e) => e.testId));

const re = /test\("Case ID:(TC-MS-\d+)[\s\S]*?\}\);/g;
let m;
const badClickIds = [];
const badWatchIds = [];

while ((m = re.exec(spec))) {
  const id = m[1];
  const body = m[0];
  if (!failedIds.has(id)) continue;
  const hasEnsure = body.includes("ensureMatchResultsAvailable");
  const hasClickAfter =
    hasEnsure && /ensureMatchResultsAvailable\([\s\S]*clickScreenButton/.test(body);
  const hasWatchOnResults =
    /(expectResultsPageLoaded|expectAiSummaryPanelVisible|expectResultsTableVisible)[\s\S]{0,400}expectWatchlistGridVisible/.test(
      body,
    );
  if (hasClickAfter) badClickIds.push(id);
  if (hasWatchOnResults) badWatchIds.push(id);
}

console.log(
  JSON.stringify(
    {
      badClickAfterEnsure: badClickIds.length,
      badWatchlistOnResults: badWatchIds.length,
      badClickIds,
      badWatchIds,
    },
    null,
    2,
  ),
);
