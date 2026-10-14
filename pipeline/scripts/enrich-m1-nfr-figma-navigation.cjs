#!/usr/bin/env node
/**
 * Enrich Milestone1 NFR Test Cases.xlsx Test Steps with Figma sidebar navigation.
 *
 * Usage: node pipeline/scripts/enrich-m1-nfr-figma-navigation.cjs
 */
const fs = require("fs");
const path = require("path");
const { ROOT, relative } = require("./qa-pipeline-utils.cjs");
const { sanitizeCellText } = require("./nfr-excel-text-utils.cjs");
const { readWorkbook, writeWorkbook } = require("./nfr-excel-workbook-io.cjs");
const {
  buildEnrichedTestSteps,
  hasFigmaNavSource,
  verifyFigmaFilesExist,
  isNavigationOnlyStep,
  isPlaceholderStep,
  parseNumberedSteps,
} = require("./nfr-figma-navigation.cjs");

const WORKBOOK_PATH = path.join(
  ROOT,
  "pipeline/test-data/Milestone1/Test Cases/NFR Test Cases.xlsx",
);
const GENERATED_AT = new Date().toISOString();

function stepsQualityBefore(steps) {
  const parsed = parseNumberedSteps(steps);
  const texts = parsed.map((s) => s.text);
  const hasMenu =
    texts.some((t) => /left sidebar|menu path:|expand .+ if collapsed|Sanction Screening|Configuration if collapsed|open KYC/i.test(t)) ||
    texts.some((t) => /Customer 360° View|De-dup Screening|Reference Data Register/i.test(t));
  const weakOpenOnly =
    texts.length > 0 &&
    isNavigationOnlyStep(texts[0]) &&
    !hasMenu &&
    texts.filter((t) => !isNavigationOnlyStep(t)).length > 0;
  const placeholders = texts.filter((t) => isPlaceholderStep(t)).length;
  return { hasMenu, weakOpenOnly, placeholders };
}

async function main() {
  if (!fs.existsSync(WORKBOOK_PATH)) {
    throw new Error(`Workbook not found: ${WORKBOOK_PATH}`);
  }

  const missingFigma = verifyFigmaFilesExist();
  if (missingFigma.length) {
    console.warn("Warning: missing Figma files:", missingFigma);
  }

  const stamp = GENERATED_AT.replace(/[:.]/g, "-").slice(0, 19);
  const backupPath = `${WORKBOOK_PATH}.bak-figma-nav-${stamp}`;
  fs.copyFileSync(WORKBOOK_PATH, backupPath);

  const { sheetNames, sheets } = readWorkbook(WORKBOOK_PATH);
  const rows = sheets["All NFR Cases"].rows;

  let updated = 0;
  let skipped = 0;
  let weakBefore = 0;
  let weakAfter = 0;
  let placeholdersBefore = 0;
  let placeholdersAfter = 0;
  const samples = [];

  sheets["All NFR Cases"].rows = rows.map((row) => {
    const out = { ...row };
    for (const [k, v] of Object.entries(out)) {
      if (typeof v === "string") out[k] = sanitizeCellText(v);
    }

    if (!hasFigmaNavSource(out.Module)) {
      skipped++;
      return out;
    }

    const before = stepsQualityBefore(out["Test Steps"]);
    if (before.weakOpenOnly) weakBefore++;
    placeholdersBefore += before.placeholders;

    const enriched = buildEnrichedTestSteps(out);
    if (enriched !== out["Test Steps"]) {
      if (samples.length < 3 && before.weakOpenOnly) {
        samples.push({
          id: out["Test Case ID"],
          module: out.Module,
          before: out["Test Steps"].split("\n").slice(0, 4).join("\n"),
          after: enriched.split("\n").slice(0, 6).join("\n"),
        });
      }
      out["Test Steps"] = enriched;
      updated++;
    }

    const after = stepsQualityBefore(out["Test Steps"]);
    if (after.weakOpenOnly) weakAfter++;
    placeholdersAfter += after.placeholders;

    return out;
  });

  const readme = sheets.Readme?.rows?.[0] || {};
  readme.LastFigmaNavigationEnrichedAt = GENERATED_AT;
  readme["Test Steps navigation source"] =
    "Milestone1 Figma HTML sidebar labels and breadcrumbs (pipeline/test-data/Milestone1/Figma/)";
  sheets.Readme.rows = [readme];

  await writeWorkbook(WORKBOOK_PATH, sheetNames, sheets);

  const reportPath = path.join(ROOT, "results/nfr-platform-ui/m1-figma-navigation-enrichment.json");
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(
    reportPath,
    JSON.stringify(
      {
        generatedAt: GENERATED_AT,
        backup: relative(backupPath),
        totalRows: rows.length,
        updated,
        skipped,
        weakOpenOnlyBefore: weakBefore,
        weakOpenOnlyAfter: weakAfter,
        placeholdersBefore,
        placeholdersAfter,
        samples,
      },
      null,
      2,
    ),
  );

  console.log(`Backup: ${relative(backupPath)}`);
  console.log(`Rows updated: ${updated} / ${rows.length} (${skipped} skipped — no Figma nav map)`);
  console.log(`Weak open-only (no sidebar nav): ${weakBefore} → ${weakAfter}`);
  console.log(`Placeholder steps: ${placeholdersBefore} → ${placeholdersAfter}`);
  console.log(`Report: ${relative(reportPath)}`);
  console.log(`Updated: ${relative(WORKBOOK_PATH)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
