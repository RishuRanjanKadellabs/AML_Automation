#!/usr/bin/env node
/**
 * Reconcile Milestone1 NFR Test Cases.xlsx:
 * 1. Assign unique Test Case IDs to duplicate FSD rows + fix mismatched task text
 * 2. Add optional Platform UI complex-search / export cases where UI supports them
 *
 * Usage: node pipeline/scripts/reconcile-m1-nfr-test-cases.cjs
 */
const fs = require("fs");
const path = require("path");
const { ROOT, relative } = require("./qa-pipeline-utils.cjs");
const {
  sanitizeCellText,
  preconditions,
  testDataForModule,
} = require("./nfr-excel-text-utils.cjs");
const { readWorkbook, writeWorkbook } = require("./nfr-excel-workbook-io.cjs");
const { nextNfrTestCaseId, isNfrTestCaseId } = require("./nfr-test-case-id.cjs");

const WORKBOOK_PATH = path.join(
  ROOT,
  "pipeline/test-data/Milestone1/Test Cases/NFR Test Cases.xlsx",
);
const PLATFORM_SOURCE = "AML_NFR_Spec_v1_0_13Mar2026.docx";
const GENERATED_AT = new Date().toISOString();

/** First row keeps original ID; duplicates get newId + optional task/expected overrides */
const DUPLICATE_RESOLUTIONS = [
  {
    originalId: "TC-MS-282",
    module: "Manual Screening",
    rows: [
      { keep: true },
      {
        task: "Verify single-record screening response completes within P95 2 seconds for standard watchlist profiles on the Screening Results page.",
        expected:
          "Screening results for a standard watchlist profile are returned within 2 seconds (P95 single-user smoke).",
      },
      {
        task: "Verify bulk screening job initiation is acknowledged within acceptable time after file upload confirmation.",
        expected:
          "Bulk screening job acknowledgement appears within 3 seconds of upload confirmation (single-user smoke).",
      },
      {
        task: "Verify bulk screening file upload confirmation completes within platform upload response target.",
        expected: "Upload confirmation is shown within 3 seconds (single-user smoke).",
      },
      {
        task: "Verify results page load time after screening completion meets the platform UI target.",
        expected:
          "Results page is ready within 1.5 seconds from screening completion (single-user smoke).",
      },
      {
        task: "Verify screening completion to results-ready time on the Screening Results page.",
        expected:
          "Results view is ready within 1.5 seconds after screening completes (single-user smoke).",
      },
      {
        task: "Verify AI summary generation begins and loading state appears within acceptable time after screening completes.",
        expected:
          "AI summary loading indicator appears within 5 seconds of screening completion (async flow).",
      },
      {
        task: "Verify AI summary content becomes available within acceptable async generation time.",
        expected:
          "AI summary completes or shows progress within 5 seconds (single-user smoke; async with loading state).",
      },
    ],
  },
  {
    originalId: "TC-MS-355",
    module: "Manual Screening",
    rows: [
      { keep: true },
      {
        task: "Verify client-side filter response on the results table completes within 300 milliseconds.",
        expected: "Filtered results update within 0.3 seconds for client-side filtering (single-user smoke).",
      },
      {
        category: "Security",
        subModule: "NFR - Security",
        automable: "Yes - UI (Playwright)",
        task: "Verify screening request payloads do not expose watchlist configuration secrets in the browser network request.",
        steps:
          "1. Open Manual Screening and submit a screening request.\n2. Capture the browser network request payload.\n3. Confirm no watchlist configuration secrets appear in the client-visible request body or headers.",
        expected:
          "Client request payload does not contain watchlist configuration secrets or internal rule credentials.",
      },
    ],
  },
  {
    originalId: "TC-MS-198",
    module: "Manual Screening",
    rows: [
      { keep: true },
      {
        task: "Verify entity toggle, tabs, and watchlist card selections provide immediate visual feedback within 100 milliseconds.",
        expected:
          "Selected toggle, tab, or watchlist card shows visual feedback within 0.1 seconds of user action.",
      },
    ],
  },
  {
    originalId: "TC-MS-025",
    module: "Manual Screening",
    rows: [
      { keep: true },
      {
        task: "Verify screening actions are recorded in the audit trail with user ID, timestamp, entity data, and result summary.",
        expected:
          "Audit trail entry is created for the screening action with user ID, timestamp, entity details, and result reference.",
      },
    ],
  },
  {
    originalId: "RDR_351",
    module: "Reference Data Registry",
    rows: [
      { keep: true },
      {
        category: "Compliance",
        subModule: "NFR - Compliance",
        task: "Verify country risk data reflects the latest FATF plenary statement within five business days of publication.",
        steps:
          "1. Open Reference Data Registry Country Master.\n2. Compare displayed FATF-related risk flags against the approved reference date in test data.\n3. Confirm data freshness meets the compliance window.",
        expected:
          "Country risk data is updated within 5 business days of the latest FATF plenary statement (per compliance NFR).",
      },
    ],
  },
];

/** Optional gap-fill platform cases (Figma/UI evidence: export or multi-filter exists) */
const GAP_FILL_PLATFORM = [
  {
    module: "Customer 360 View",
    prefix: "C360",
    cases: [
      {
        task: "Verify multi-criteria search or filter on Customer 360 Audit tab completes within platform complex search target.",
        steps:
          "1. Open Customer 360 View for the customer in test data.\n2. Open the Audit tab.\n3. Apply two or more filters (date range and action type).\n4. Measure time until filtered audit rows update.",
        expected: "Filtered audit results appear within 1.5 seconds (single-user smoke).",
      },
    ],
  },
  {
    module: "Dedup Screening",
    prefix: "DDS",
    cases: [
      {
        task: "Verify multi-filter duplicate search on De-Dup Screening completes within platform complex search target.",
        steps:
          "1. Open De-Dup Screening.\n2. Apply multiple filters (for example match score and source).\n3. Measure time until duplicate groups refresh.",
        expected: "Filtered duplicate groups appear within 1.5 seconds (single-user smoke).",
      },
    ],
  },
  {
    module: "Custom List Manager",
    prefix: "CLM",
    cases: [
      {
        task: "Verify multi-filter list search on Custom List Manager completes within platform complex search target.",
        steps:
          "1. Open Custom List Manager listing.\n2. Apply status tab plus search text (or two filters).\n3. Measure time until list results update.",
        expected: "Filtered list results appear within 1.5 seconds (single-user smoke).",
      },
      {
        task: "Verify export from Custom List Manager completes within platform export time target.",
        steps:
          "1. Open Custom List Manager listing.\n2. Trigger Export CSV or Export PDF.\n3. Measure time until download starts or export completes.",
        expected: "Export completes or download starts within 5 seconds (single-user smoke).",
      },
    ],
  },
  {
    module: "Exception List Manager",
    prefix: "ELM",
    cases: [
      {
        task: "Verify multi-filter search on Exception List Manager completes within platform complex search target.",
        steps:
          "1. Open Exception List Manager.\n2. Select a status tab and enter search text.\n3. Measure time until grid results update.",
        expected: "Filtered exception rows appear within 1.5 seconds (single-user smoke).",
      },
      {
        task: "Verify export from Exception List Manager completes within platform export time target.",
        steps:
          "1. Open Exception List Manager listing.\n2. Trigger Export CSV or Export PDF.\n3. Measure time until download starts.",
        expected: "Export completes or download starts within 5 seconds (single-user smoke).",
      },
    ],
  },
  {
    module: "Ignore Words Configuration",
    prefix: "IWC",
    cases: [
      {
        task: "Verify category plus search filter on Ignore Words Configuration completes within platform complex search target.",
        steps:
          "1. Open Ignore Words listing.\n2. Select category filter and enter search phrase.\n3. Measure time until table rows update.",
        expected: "Filtered ignore-word rows appear within 1.5 seconds (single-user smoke).",
      },
      {
        task: "Verify CSV export from Ignore Words Configuration completes within platform export time target.",
        steps:
          "1. Open Ignore Words listing.\n2. Click Export.\n3. Measure time until CSV download starts.",
        expected: "Export file download starts within 5 seconds (single-user smoke).",
      },
    ],
  },
  {
    module: "Keyword Manager",
    prefix: "KM",
    cases: [
      {
        task: "Verify category plus phrase search on Keyword Manager completes within platform complex search target.",
        steps:
          "1. Open Keyword Manager listing.\n2. Apply category filter and search by phrase.\n3. Measure time until keyword table updates.",
        expected: "Filtered keyword rows appear within 1.5 seconds (single-user smoke).",
      },
      {
        task: "Verify CSV export from Keyword Manager completes within platform export time target.",
        steps:
          "1. Open Keyword Manager listing.\n2. Trigger Export.\n3. Measure time until CSV download starts.",
        expected: "Export download starts within 5 seconds (single-user smoke).",
      },
    ],
  },
  {
    module: "Reference Data Registry",
    prefix: "RDR",
    cases: [
      {
        task: "Verify multi-column filter on Country Master grid completes within platform complex search target.",
        steps:
          "1. Open Country Master in Reference Data Registry.\n2. Apply region and risk level filters together.\n3. Measure time until grid rows update.",
        expected: "Filtered master data rows appear within 1.5 seconds (single-user smoke).",
      },
      {
        task: "Verify CSV or Excel export from Country Master completes within platform export time target.",
        steps:
          "1. Open Country Master grid.\n2. Trigger CSV or Excel export.\n3. Measure time until download starts.",
        expected: "Export download starts within 5 seconds (single-user smoke).",
      },
    ],
  },
  {
    module: "Screening Configuration",
    prefix: "SC",
    cases: [
      {
        task: "Verify tab plus search filter on Screening Configuration listing completes within platform complex search target.",
        steps:
          "1. Open Screening Configuration listing.\n2. Select Enabled or Disabled tab and enter search text.\n3. Measure time until profile table updates.",
        expected: "Filtered configuration rows appear within 1.5 seconds (single-user smoke).",
      },
    ],
  },
];

function acceptanceCriteria() {
  return "Test passes when all steps are completed and the expected results are met.";
}

function platformRow(module, prefix, spec, testCaseId) {
  const role =
    module.includes("Configuration") || ["Keyword Manager", "Screening Configuration", "Ignore Words Configuration"].includes(module)
      ? "Configuration Manager"
      : "Compliance Officer";
  const isExport = /export/i.test(spec.task);
  return {
    "Test Case ID": testCaseId,
    Module: module,
    "Sub Module": isExport ? "NFR - Print / Export" : "NFR - Performance",
    "NFR Category": isExport ? "Print / Export" : "Performance",
    "FSD Requirement": isExport
      ? "§6.4 — UI-triggered export P95 < 5000ms (single-user smoke)"
      : "§6.4 — Complex filtered search P95 < 1500ms (single-user smoke)",
    "Task Description": spec.task,
    "Acceptance Criteria": acceptanceCriteria(),
    Preconditions: preconditions(module, role),
    "Test Steps": spec.steps,
    "Test Data": testDataForModule(module, role),
    Priority: "Medium",
    "Expected Result": spec.expected,
    Status: "Draft",
    "Source Excel File": "Generated — Platform UI NFR (gap-fill)",
    "Source FSD": PLATFORM_SOURCE,
    Automable: "Yes - SLA smoke (single-user timing in Playwright)",
    "Mapped Existing IDs": "",
    Notes:
      "Platform UI UI-T2 gap-fill; NFR layer UI (Playwright). Load/stress with 1000+ simultaneous users requires k6/JMeter — not Playwright.",
  };
}

function resolveDuplicates(allRows) {
  const idChanges = [];
  const byId = new Map();

  for (const row of allRows) {
    const id = row["Test Case ID"];
    if (!byId.has(id)) byId.set(id, []);
    byId.get(id).push(row);
  }

  for (const plan of DUPLICATE_RESOLUTIONS) {
    const group = allRows.filter((r) => r["Test Case ID"] === plan.originalId && r.Module === plan.module);
    if (group.length !== plan.rows.length) {
      console.warn(
        `Warning: expected ${plan.rows.length} rows for ${plan.originalId}, found ${group.length} — skipping group`,
      );
      continue;
    }

    for (let i = 0; i < plan.rows.length; i++) {
      const row = group[i];
      const spec = plan.rows[i];
      if (spec.keep) continue;

      const oldId = row["Test Case ID"];
      const newId = nextNfrTestCaseId(allRows);
      row["Test Case ID"] = newId;
      idChanges.push({ oldId, newId, module: plan.module });

      if (spec.task) row["Task Description"] = spec.task;
      if (spec.expected) row["Expected Result"] = spec.expected;
      if (spec.steps) row["Test Steps"] = spec.steps;
      if (spec.category) row["NFR Category"] = spec.category;
      if (spec.subModule) row["Sub Module"] = spec.subModule;
      if (spec.automable) row.Automable = spec.automable;
      row.Notes = sanitizeCellText(
        `${row.Notes || ""} Reconciled from duplicate ${oldId} on ${GENERATED_AT}.`.trim(),
      );
    }
  }

  return idChanges;
}

function updateFsdMatrix(matrixRows, idChanges) {
  for (const change of idChanges) {
    for (const row of matrixRows) {
      if (row["Test Case ID"] === change.oldId && row.Module === change.module) {
        // Only re-id rows that still duplicate - matrix has 1:1 with requirements
        // Find matrix rows with same old ID - need smarter match
      }
    }
  }
  // Rebuild matrix IDs from all NFR cases FSD rows by matching module + FSD requirement text
  return matrixRows;
}

function syncFsdCoverageMatrix(allRows, matrixRows) {
  const fsdRows = allRows.filter((r) => r["Source FSD"] !== PLATFORM_SOURCE);
  const key = (r) => `${r.Module}|||${r["FSD Requirement"]}`;
  const byKey = new Map(fsdRows.map((r) => [key(r), r["Test Case ID"]]));

  for (const row of matrixRows) {
    const k = `${row.Module}|||${row["FSD Requirement"]}`;
    if (byKey.has(k)) row["Test Case ID"] = byKey.get(k);
  }
  return matrixRows;
}

function rebuildPlatformIndex(allRows) {
  return allRows
    .filter((r) => r["Source FSD"] === PLATFORM_SOURCE)
    .map((r) => ({
      Module: r.Module,
      "Test Case ID": r["Test Case ID"],
      Tier: /multi-filter|multi-criteria|category plus|tab plus|Export from|CSV export/i.test(r["Task Description"])
        ? "UI-T2"
        : (r.Notes || "").includes("UI-T2")
          ? "UI-T2"
          : "UI-T1",
      "NFR Category": r["NFR Category"],
      Automable: r.Automable,
      "Task Description": r["Task Description"],
    }));
}

function updateSummary(summaryRows, allRows) {
  for (const summary of summaryRows) {
    const mod = summary.Module;
    const modRows = allRows.filter((r) => r.Module === mod);
    const fsdCount = modRows.filter((r) => r["Source FSD"] !== PLATFORM_SOURCE).length;
    const platformCount = modRows.filter((r) => r["Source FSD"] === PLATFORM_SOURCE).length;
    summary["FSD NFR Cases"] = fsdCount;
    summary["Platform UI NFR Cases"] = platformCount;
    summary["Total UI NFR Cases in Workbook"] = modRows.length;
    summary["Total NFR Cases in Workbook"] = modRows.length;
  }
  return summaryRows;
}

async function main() {
  if (!fs.existsSync(WORKBOOK_PATH)) throw new Error(`Missing workbook: ${WORKBOOK_PATH}`);

  const stamp = GENERATED_AT.replace(/[:.]/g, "-").slice(0, 19);
  const backupPath = `${WORKBOOK_PATH}.bak-reconcile-${stamp}`;
  fs.copyFileSync(WORKBOOK_PATH, backupPath);

  const { sheetNames, sheets } = readWorkbook(WORKBOOK_PATH);
  let allRows = sheets["All NFR Cases"].rows;

  const idChanges = resolveDuplicates(allRows);

  const existingIds = new Set(allRows.map((r) => r["Test Case ID"]));
  const knownPlatformTasks = new Set(
    allRows
      .filter((r) => r["Source FSD"] === PLATFORM_SOURCE)
      .map((r) => `${r.Module}|||${r["Task Description"]}`),
  );
  const addedGap = [];
  for (const group of GAP_FILL_PLATFORM) {
    for (const spec of group.cases) {
      const taskKey = `${group.module}|||${spec.task}`;
      if (knownPlatformTasks.has(taskKey)) continue;
      const newId = nextNfrTestCaseId(allRows);
      const row = platformRow(group.module, group.prefix, spec, newId);
      allRows.push(row);
      existingIds.add(newId);
      knownPlatformTasks.add(taskKey);
      addedGap.push(newId);
    }
  }

  sheets["All NFR Cases"].rows = allRows.map((row) => {
    const out = {};
    for (const [k, v] of Object.entries(row)) {
      out[k] = typeof v === "string" ? sanitizeCellText(v) : v;
    }
    return out;
  });

  if (sheets["FSD Coverage Matrix"]) {
    sheets["FSD Coverage Matrix"].rows = syncFsdCoverageMatrix(
      allRows,
      sheets["FSD Coverage Matrix"].rows,
    );
  }

  sheets["Platform UI NFR Index"] = {
    headers: ["Module", "Test Case ID", "Tier", "NFR Category", "Automable", "Task Description"],
    rows: rebuildPlatformIndex(allRows),
  };

  sheets.Summary.rows = updateSummary(sheets.Summary.rows, allRows);

  const readme = sheets.Readme.rows[0] || {};
  readme.LastReconciledAt = GENERATED_AT;
  readme.LastReconcileNote =
    `Deduped ${idChanges.length} FSD ID reassignments; added ${addedGap.length} platform gap-fill cases (complex search / export). All IDs use TC_NFR_XXX.`;
  readme["Test Case ID convention"] = "TC_NFR_XXX (sequential, e.g. TC_NFR_001)";
  sheets.Readme.rows = [readme];

  await writeWorkbook(WORKBOOK_PATH, sheetNames, sheets);

  const reportPath = path.join(ROOT, "results/nfr-platform-ui/m1-nfr-reconcile-report.json");
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(
    reportPath,
    JSON.stringify(
      {
        generatedAt: GENERATED_AT,
        backup: relative(backupPath),
        idChanges,
        addedGapFillIds: addedGap,
        totalRows: allRows.length,
        duplicateIdsRemaining: [
          ...new Set(
            allRows
              .map((r) => r["Test Case ID"])
              .filter((id, i, a) => a.indexOf(id) !== i),
          ),
        ],
      },
      null,
      2,
    ),
  );

  console.log(`Backup: ${relative(backupPath)}`);
  console.log(`ID reassignments: ${idChanges.length}`);
  idChanges.forEach((c) => console.log(`  ${c.oldId} → ${c.newId} (${c.module})`));
  console.log(`Gap-fill platform cases added: ${addedGap.length}`);
  addedGap.forEach((id) => console.log(`  ${id}`));
  console.log(`Total rows: ${allRows.length}`);
  console.log(`Report: ${relative(reportPath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
