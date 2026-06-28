import { writeSanctionMisReportsCatalog } from "../src/sanction-mis-reports/excel-writer";
import { SMR_EXCEL_PATH } from "../src/sanction-mis-reports/parser";

async function main(): Promise<void> {
  console.log(`Updating Sanction MIS Reports workbook:\n  ${SMR_EXCEL_PATH}\n`);

  const result = await writeSanctionMisReportsCatalog();

  console.log("Backup created:", result.backupPath);
  console.log(`Replaced ${result.previousCount} cases with ${result.writtenCount} optimized cases.`);
  console.log("Done.");
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
