#!/usr/bin/env node
/**
 * Consolidate Milestone 1 UI NFR tests into tests/milestone1/nfr/ui-nfr-tests.spec.ts
 * and remove them from module specs + legacy nfr/*.spec.ts files.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "../..");
const OUT = path.join(ROOT, "tests/milestone1/nfr/ui-nfr-tests.spec.ts");

const MODULE_SOURCES = [
  {
    module: "Batch Screening",
    pageVar: "bsPage",
    pageImport: '../pages/ScreeningModule/BatchScreeningPages/BatchScreeningPage',
    pageClass: "BatchScreeningPage",
    beforeEach: "    bsPage = new BatchScreeningPage(sharedPage);",
    files: [
      "tests/milestone1/nfr/batch-screening-nfr.spec.ts",
      "tests/milestone1/test-cases/ScreeningModule/batchScreeningTests/batch-screening.spec.ts",
    ],
  },
  {
    module: "Dedup Screening",
    pageVar: "ddsPage",
    pageImport: "../pages/ScreeningModule/DedupScreeningPages/DedupScreeningPage",
    pageClass: "DedupScreeningPage",
    beforeEach: "    ddsPage = new DedupScreeningPage(sharedPage);",
    files: ["tests/milestone1/nfr/dedup-screening-nfr.spec.ts"],
  },
  {
    module: "KYC Gap Report",
    pageVar: "gapPage",
    pageImport: "../pages/KYCModule/KYCGapReportPages/KycGapReportPage",
    pageClass: "KycGapReportPage",
    beforeEach: "    gapPage = new KycGapReportPage(sharedPage);",
    files: ["tests/milestone1/nfr/kyc-gap-report-nfr.spec.ts"],
  },
  {
    module: "Missing Mandatory",
    pageVar: "mmPage",
    pageImport: "../pages/KYCModule/MissingMandatoryPages/MissingMandatoryPage",
    pageClass: "MissingMandatoryPage",
    beforeEach: "    mmPage = new MissingMandatoryPage(sharedPage);",
    files: [
      "tests/milestone1/test-cases/KYCModule/missingMandatoryTests/missing-mandatory.spec.ts",
    ],
  },
  {
    module: "Reference Data Registry",
    pageVar: "rdrPage",
    pageImport: "../pages/KYCModule/ReferenceDataRegistryPages/ReferenceDataRegistryPage",
    pageClass: "ReferenceDataRegistryPage",
    beforeEach: [
      "    rdrPage = new ReferenceDataRegistryPage(sharedPage);",
      "    await rdrPage.closeDetailOverlayIfOpen();",
    ],
    files: [
      "tests/milestone1/test-cases/KYCModule/referenceDataRegistryTests/reference-data-registry.spec.ts",
    ],
  },
  {
    module: "Keyword Manager",
    pageVar: "kmPage",
    pageImport: "../pages/ConfigurationModule/KeywordManagerPages/KeywordManagerPage",
    pageClass: "KeywordManagerPage",
    beforeEach: "    kmPage = new KeywordManagerPage(sharedPage);",
    files: [
      "tests/milestone1/test-cases/ConfigurationModule/keywordManagerTests/keyword-manager.spec.ts",
    ],
  },
  {
    module: "Screening Configuration",
    pageVar: "scPage",
    pageImport: "../pages/ConfigurationModule/ScreeningConfigurationPages/ScreeningConfigurationPage",
    pageClass: "ScreeningConfigurationPage",
    beforeEach: "    scPage = new ScreeningConfigurationPage(sharedPage);",
    files: [
      "tests/milestone1/test-cases/ConfigurationModule/screeningConfigurationTests/screening-configuration.spec.ts",
    ],
  },
];

const NFR_BLOCK_RE =
  /\/\* eslint-disable playwright\/valid-title[^]*?test\.describe\("[^"]*NFR[^"]*"[^]*?\n  \}\);\n  \/\* eslint-enable playwright\/valid-title \*\//g;

const STANDALONE_TEST_RE =
  /test\("Test Case ID:TC_NFR_[^"]+"[\s\S]*?\n  \}\);/g;

function extractNfrTestsFromModuleSpec(content) {
  const blocks = content.match(NFR_BLOCK_RE) || [];
  const tests = [];
  for (const block of blocks) {
    const matches = block.match(STANDALONE_TEST_RE) || [];
    tests.push(...matches);
  }
  return tests;
}

function extractNfrTestsFromStandaloneSpec(content) {
  return content.match(STANDALONE_TEST_RE) || [];
}

function stripNfrFromModuleSpec(content) {
  return content.replace(NFR_BLOCK_RE, "").replace(/\n{3,}/g, "\n\n");
}

function sortTests(tests) {
  return [...tests].sort((a, b) => {
    const idA = a.match(/TC_NFR_(\d+)/)?.[1] ?? "0";
    const idB = b.match(/TC_NFR_(\d+)/)?.[1] ?? "0";
    return Number(idA) - Number(idB);
  });
}

function dedupeTests(tests) {
  const byId = new Map();
  for (const testBlock of tests) {
    const id = testBlock.match(/TC_NFR_\d+/)?.[0];
    if (id) byId.set(id, testBlock);
  }
  return sortTests([...byId.values()]);
}

const pageImports = new Map();
const sections = [];

for (const mod of MODULE_SOURCES) {
  pageImports.set(mod.pageClass, mod.pageImport);
  const collected = [];

  for (const rel of mod.files) {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) {
      console.warn(`Skip missing: ${rel}`);
      continue;
    }
    const content = fs.readFileSync(abs, "utf8");
    if (rel.includes("/nfr/")) {
      collected.push(...extractNfrTestsFromStandaloneSpec(content));
    } else {
      collected.push(...extractNfrTestsFromModuleSpec(content));
    }
  }

  const tests = dedupeTests(collected);
  if (!tests.length) {
    console.warn(`No NFR tests found for ${mod.module}`);
    continue;
  }

  const beforeEachLines = Array.isArray(mod.beforeEach)
    ? mod.beforeEach
    : [mod.beforeEach];

  sections.push({
    module: mod.module,
    pageVar: mod.pageVar,
    pageClass: mod.pageClass,
    beforeEachLines,
    tests,
  });
}

const importLines = [
  'import { test, expect } from "../../../fixtures/milestone1-shared-session";',
  ...[...pageImports.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(
      ([cls, imp]) => `import ${cls} from "${imp}";`,
    ),
];

let out = `/* eslint-disable playwright/valid-title -- QA fidelity requires the Test Case ID prefix. */
// source: pipeline/test-data/Milestone1/Test Cases/NFR Test Cases.xlsx
// consolidated UI NFR tests — one spec for all Milestone 1 UI NFR cases
${importLines.join("\n")}

test.describe("Milestone 1 UI NFR Tests", () => {
`;

for (const section of sections) {
  out += `  test.describe("${section.module}", () => {
    let ${section.pageVar}: ${section.pageClass};

    test.beforeEach(async ({ sharedPage }) => {
${section.beforeEachLines.join("\n")}
    });

`;
  for (const testBlock of section.tests) {
    const indented = testBlock
      .split("\n")
      .map((line) => (line.length ? `  ${line}` : line))
      .join("\n");
    out += `${indented}\n\n`;
  }
  out += `  });\n\n`;
}

out += `});\n`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, out, "utf8");
console.log(`Wrote ${OUT} (${sections.reduce((n, s) => n + s.tests.length, 0)} tests)`);

const moduleFilesToStrip = MODULE_SOURCES.flatMap((m) =>
  m.files.filter((f) => !f.includes("/nfr/")),
);

for (const rel of moduleFilesToStrip) {
  const abs = path.join(ROOT, rel);
  const original = fs.readFileSync(abs, "utf8");
  const stripped = stripNfrFromModuleSpec(original);
  if (stripped !== original) {
    fs.writeFileSync(abs, stripped, "utf8");
    console.log(`Stripped NFR block from ${rel}`);
  }
}

const legacyNfrFiles = [
  "tests/milestone1/nfr/batch-screening-nfr.spec.ts",
  "tests/milestone1/nfr/dedup-screening-nfr.spec.ts",
  "tests/milestone1/nfr/kyc-gap-report-nfr.spec.ts",
];

for (const rel of legacyNfrFiles) {
  const abs = path.join(ROOT, rel);
  if (fs.existsSync(abs)) {
    fs.unlinkSync(abs);
    console.log(`Deleted ${rel}`);
  }
}
