import { writeTraceabilityArtifacts, verifySourceArtifactsExist } from "../src/dedup-screening/traceability-reconciler";

async function main(): Promise<void> {
  const missing = verifySourceArtifactsExist();
  if (missing.length > 0) {
    console.error("Missing source artifacts:");
    for (const m of missing) {
      console.error(" -", m);
    }
    process.exit(1);
  }

  const report = await writeTraceabilityArtifacts();

  console.log(JSON.stringify({
    overallTraceability: report.overallTraceability,
    excelToSpec: {
      excel: report.excelToSpec.excelCount,
      spec: report.excelToSpec.specCount,
      aligned: report.excelToSpec.aligned,
      unmappedStepTodos: report.excelToSpec.unmappedStepTodos,
    },
    fsdCoverage: {
      sections: `${report.fsdCoverage.sectionsWithExcelCoverage}/${report.fsdCoverage.totalSections}`,
      excelMappings: report.fsdCoverage.excelMappings,
      uncoveredSections: report.fsdCoverage.uncoveredSections.length,
    },
    htmlCoverage: {
      controls: `${report.htmlCoverage.controlsWithExcelCoverage}/${report.htmlCoverage.totalControls}`,
      uncoveredControls: report.htmlCoverage.uncoveredControls.length,
    },
    gaps: report.gaps,
    artifacts: [
      "specs/dedup-screening/traceability-report.json",
      "specs/dedup-screening/fsd-reconciliation.json",
      "specs/dedup-screening/html-reconciliation.json",
      "specs/dedup-screening/fsd-catalog.json",
      "specs/dedup-screening/html-inventory.json",
      "specs/dedup-screening/TODO.md",
    ],
  }, null, 2));

  if (report.overallTraceability !== "full") {
    process.exit(1);
  }

  console.log("\nOK: Full traceability across FSD, HTML, Excel, and spec.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
