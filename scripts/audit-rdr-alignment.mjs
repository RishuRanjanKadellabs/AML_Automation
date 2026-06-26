import fs from "fs";
import XLSX from "xlsx";
import mammoth from "mammoth";

const spec = fs.readFileSync(
  "tests/milestone1/test-cases/KYCModule/referenceDataRegistryTests/reference-data-registry.spec.ts",
  "utf8",
);
const fsd = JSON.parse(fs.readFileSync("specs/rdr/fsd-reconciliation.json", "utf8"));
const rows = XLSX.utils.sheet_to_json(
  XLSX.readFile("pipeline/test-data/Reference Data Registry.xlsx").Sheets["Sheet1"],
);

const blocks = spec.split('test("Case ID:RDR_').slice(1);
let noExecute = 0;
let genericOnly = 0;
let hasExecute = 0;

for (const b of blocks) {
  const exec = /Execute Excel test steps[\s\S]*?await rdrPage\./.test(b);
  if (exec) hasExecute++;
  else noExecute++;
  const generic =
    /expectGridTabLoaded/.test(b) &&
    /expectGridContainsRecords/.test(b) &&
    !/expectAllCells|expectUnique|expectFilter|expectCsv|expectExcel|expectSearch|expectView|expectMasked|expectPagination|toHaveCount|expectFirstRowLink|expectColumnVisible|expectColumnIncludes|expectGridWithinConfiguredLimit/.test(b);
  if (generic) genericOnly++;
}

const sourceCompare = rows.filter((r) =>
  /source system|CBS|compare with source|source record/i.test(JSON.stringify(r)),
).length;

const buf = fs.readFileSync("pipeline/test-data/Reference Data Registry_FSD_v1.0.docx");
const fsdText = await mammoth.extractRawText({ buffer: buf });
const fsdLines = fsdText.value.split(/\r?\n/).filter((l) => /^\d+(\.\d+)+\s/.test(l.trim()));
const fsdSectionIds = fsdLines.map((l) => l.trim().match(/^(\d+(?:\.\d+)*)/)?.[1]).filter(Boolean);

console.log(
  JSON.stringify(
    {
      excelCases: rows.length,
      generatedTests: blocks.length,
      testsWithExecuteSteps: hasExecute,
      testsWithoutExecuteSteps: noExecute,
      testsWithGenericAssertionsOnly: genericOnly,
      fsdDocxSectionHeadings: fsdSectionIds.length,
      fsdMappedAligned: fsd.summary.aligned,
      fsdMappedPartial: fsd.summary.partial,
      excelMentionsSourceCompare: sourceCompare,
      sampleFsdIds: fsdSectionIds.slice(0, 20),
    },
    null,
    2,
  ),
);
