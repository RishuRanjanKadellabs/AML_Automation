#!/usr/bin/env node
/**
 * Add Platform UI NFR test cases to Milestone1 NFR Test Cases.xlsx.
 * Keeps existing FSD-aligned rows; adds UI-T1/T2 from AML Platform NFR Spec.
 * API cases: placeholder sheet only (pending OpenAPI JSON).
 *
 * Usage: node pipeline/scripts/generate-m1-platform-ui-nfr-cases.cjs
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
const { nextNfrTestCaseId } = require("./nfr-test-case-id.cjs");
const { AUTH_AUTOMABLE } = require("./nfr-auth-automation-scope.cjs");

const WORKBOOK_PATH = path.join(
  ROOT,
  "pipeline/test-data/Milestone1/Test Cases/NFR Test Cases.xlsx",
);
const PLATFORM_SOURCE = "AML_NFR_Spec_v1_0_13Mar2026.docx";
const GENERATED_AT = new Date().toISOString();

const MODULES = {
  "Batch Screening": {
    prefix: "BS",
    menuPath: "Sanctions Screening",
    landing: "Match Results listing page",
    role: "Compliance Officer",
    hasGrid: true,
    hasSearch: true,
    hasComplexSearch: true,
    hasExport: true,
    hasForm: false,
    hasMasking: false,
    t2Screens: ["Batch upload flow", "Export and audit page"],
    fsdInScope: true,
  },
  "Manual Screening": {
    prefix: "MS",
    menuPath: "Sanctions Screening > Manual Screening",
    landing: "Manual Screening form and results area",
    role: "Compliance Officer",
    hasGrid: true,
    hasSearch: true,
    hasComplexSearch: true,
    hasExport: false,
    hasForm: true,
    hasMasking: false,
    t2Screens: ["Tab navigation area", "View Last Results panel"],
    fsdInScope: true,
  },
  "Dedup Screening": {
    prefix: "DDS",
    menuPath: "Sanctions Screening > De-Dup Screening",
    landing: "De-Dup Screening main view",
    role: "Compliance Officer",
    hasGrid: true,
    hasSearch: true,
    hasComplexSearch: false,
    hasExport: true,
    hasForm: false,
    hasMasking: true,
    t2Screens: ["Duplicate comparison popup", "Export report flow"],
    fsdInScope: true,
  },
  "Customer 360 View": {
    prefix: "C360",
    menuPath: "KYC > Customer 360° View",
    landing: "Customer 360 overview tab",
    role: "Compliance Officer",
    hasGrid: true,
    hasSearch: true,
    hasComplexSearch: false,
    hasExport: true,
    hasForm: false,
    hasMasking: true,
    t2Screens: ["Audit tab", "Screening tab"],
    fsdInScope: true,
  },
  "KYC Gap Report": {
    prefix: "KGR",
    menuPath: "KYC Gap Report",
    landing: "KYC Gap Report listing page",
    role: "Compliance Officer",
    hasGrid: true,
    hasSearch: true,
    hasComplexSearch: true,
    hasExport: true,
    hasForm: false,
    hasMasking: false,
    t2Screens: ["Filter panel", "Pagination controls"],
    fsdInScope: true,
  },
  "Missing Mandatory": {
    prefix: "MM",
    menuPath: "Missing Mandatory",
    landing: "Missing Mandatory main grid",
    role: "Compliance Officer",
    hasGrid: true,
    hasSearch: true,
    hasComplexSearch: true,
    hasExport: true,
    hasForm: true,
    hasMasking: false,
    t2Screens: ["Score configuration dependency screen", "Field configuration panel"],
    fsdInScope: true,
  },
  "Reference Data Registry": {
    prefix: "RDR",
    menuPath: "Reference Data Registry",
    landing: "Country Master listing page",
    role: "Compliance Officer",
    hasGrid: true,
    hasSearch: true,
    hasComplexSearch: false,
    hasExport: false,
    hasForm: true,
    hasMasking: true,
    t2Screens: ["Masked field detail view", "Master data edit form"],
    fsdInScope: true,
  },
  "Keyword Manager": {
    prefix: "KM",
    menuPath: "Configuration > Keyword Manager",
    landing: "Keyword Manager listing page",
    role: "Configuration Manager",
    hasGrid: true,
    hasSearch: true,
    hasComplexSearch: false,
    hasExport: false,
    hasForm: true,
    hasMasking: false,
    t2Screens: ["Add Keyword modal", "Category management panel"],
    fsdInScope: false,
  },
  "Screening Configuration": {
    prefix: "SC",
    menuPath: "Configuration > Screening Configuration",
    landing: "Screening type listing page",
    role: "Configuration Manager",
    hasGrid: true,
    hasSearch: true,
    hasComplexSearch: false,
    hasExport: false,
    hasForm: true,
    hasMasking: false,
    t2Screens: ["Rule configuration grid", "Save configuration flow"],
    fsdInScope: false,
  },
  "Custom List Manager": {
    prefix: "CLM",
    menuPath: "Configuration > Custom List Manager",
    landing: "Custom List Manager listing page",
    role: "Configuration Manager",
    hasGrid: true,
    hasSearch: true,
    hasComplexSearch: false,
    hasExport: false,
    hasForm: true,
    hasMasking: false,
    t2Screens: ["Create list flow", "List detail view"],
    fsdInScope: false,
  },
  "Exception List Manager": {
    prefix: "ELM",
    menuPath: "Configuration > Exception List Manager",
    landing: "Exception List Manager landing page",
    role: "Compliance Officer",
    hasGrid: true,
    hasSearch: true,
    hasComplexSearch: false,
    hasExport: false,
    hasForm: true,
    hasMasking: false,
    t2Screens: ["Add exception modal", "Exception detail view"],
    fsdInScope: false,
  },
  "Ignore Words Configuration": {
    prefix: "IWC",
    menuPath: "Configuration > Ignore Words Configuration",
    landing: "Ignore Words listing page",
    role: "Configuration Manager",
    hasGrid: true,
    hasSearch: true,
    hasComplexSearch: false,
    hasExport: false,
    hasForm: true,
    hasMasking: false,
    t2Screens: ["Add ignore word flow", "Word list filter panel"],
    fsdInScope: false,
  },
  "Sanction MIS Reports": {
    prefix: "SMIS",
    menuPath: "Sanctions Screening > Sanction MIS Reports",
    landing: "Sanction MIS Reports landing page",
    role: "Compliance Officer",
    hasGrid: true,
    hasSearch: false,
    hasComplexSearch: false,
    hasExport: true,
    hasForm: false,
    hasMasking: false,
    t2Screens: ["Run report flow", "Report export flow"],
    fsdInScope: false,
  },
};

function preconditionsBlock(module, role) {
  return preconditions(module, role);
}

function acceptanceCriteria() {
  return "Test passes when all steps are completed and the expected results are met.";
}

function buildPlatformTemplates(ctx) {
  const p = ctx.prefix;
  const m = ctx.moduleName;
  const templates = [];

  templates.push({
    key: "module_navigation",
    tier: "UI-T1",
    id: `${p}-PNFR-001`,
    category: "Performance",
    subModule: "NFR - Performance",
    platformRef: "§6.4 — Module navigation P95 < 800ms (single-user smoke)",
    automable: "Yes - SLA smoke (single-user timing in Playwright)",
    priority: "High",
    task: `Verify navigation to ${m} completes within platform module navigation time target`,
    steps: [
      "1. Open the AML application home page.",
      `2. Start timer when selecting menu path: ${ctx.menuPath}.`,
      `3. Open ${ctx.landing}.`,
      "4. Stop timer when the module ready indicator is visible (main grid, form shell, or landing content).",
    ].join("\n"),
    expected: `Navigation to ${m} completes within 0.8 seconds (single-user smoke). The landing view is visible and usable.`,
    dedupe: (rows) =>
      rows.some(
        (r) =>
          r["NFR Category"] === "Performance" &&
          /navigation|navigate to|menu/i.test(r["Task Description"]),
      ),
  });

  templates.push({
    key: "landing_load",
    tier: "UI-T1",
    id: `${p}-PNFR-002`,
    category: "Performance",
    subModule: "NFR - Performance",
    platformRef: "§6.4 — Initial module load / cold start P95 < 2.5s (single-user smoke)",
    automable: "Yes - SLA smoke (single-user timing in Playwright)",
    priority: "High",
    task: `Verify ${m} landing page is ready within platform initial load time target`,
    steps: [
      "1. Open a fresh browser context (or clear cache if cold start is not feasible in QA).",
      `2. Navigate directly to ${m} using ${ctx.menuPath}.`,
      `3. Start timer on navigation; stop when ${ctx.landing} is ready for use.`,
    ].join("\n"),
    expected: `${m} landing page is ready within 2.5 seconds (single-user smoke). Primary content is visible without error.`,
    dedupe: (rows) =>
      rows.some(
        (r) =>
          r["NFR Category"] === "Performance" &&
          /initial page load|landing page|page loads|page load completes/i.test(r["Task Description"]),
      ),
  });

  if (ctx.hasGrid) {
    templates.push({
      key: "grid_render",
      tier: "UI-T2",
      id: `${p}-PNFR-003`,
      category: "Performance",
      subModule: "NFR - Performance",
      platformRef: "§6.4 — Large table render P95 < 500ms (single-user smoke)",
      automable: "Yes - SLA smoke (single-user timing in Playwright)",
      priority: "Medium",
      task: `Verify primary data grid on ${m} renders within platform grid render target`,
      steps: [
        `1. Open ${m} landing page.`,
        "2. Ensure the primary grid or table is in view.",
        "3. Measure time from page ready to grid header and first rows visible.",
      ].join("\n"),
      expected: "Primary grid header and rows are visible within 0.5 seconds after the page is ready (single-user smoke).",
      dedupe: (rows) =>
        rows.some(
          (r) =>
            r["NFR Category"] === "Performance" &&
            /grid|table render|table loads|match results page loads/i.test(r["Task Description"]),
        ),
    });
  }

  if (ctx.hasForm) {
    templates.push({
      key: "form_fields_ready",
      tier: "UI-T2",
      id: `${p}-PNFR-004`,
      category: "Performance",
      subModule: "NFR - Performance",
      platformRef: "§6.4 — Critical fields render P95 < 1.2s (single-user smoke)",
      automable: "Yes - SLA smoke (single-user timing in Playwright)",
      priority: "Medium",
      task: `Verify critical form fields on ${m} are ready within platform field render target`,
      steps: [
        `1. Open ${m} and navigate to the primary create or edit form.`,
        "2. Measure time until required fields are visible and enabled.",
      ].join("\n"),
      expected: "Critical form fields are visible and enabled within 1.2 seconds (single-user smoke).",
      dedupe: (rows) =>
        rows.some(
          (r) =>
            r["NFR Category"] === "Performance" &&
            /form field|critical field|mandatory field/i.test(r["Task Description"]),
        ),
    });
  }

  if (ctx.hasSearch) {
    templates.push({
      key: "exact_search",
      tier: "UI-T2",
      id: `${p}-PNFR-005`,
      category: "Performance",
      subModule: "NFR - Performance",
      platformRef: "§6.4 — Exact search P95 < 300ms (single-user smoke)",
      automable: "Yes - SLA smoke (single-user timing in Playwright)",
      priority: "Medium",
      task: `Verify exact search on ${m} updates results within platform search time target`,
      steps: [
        `1. Open ${m} listing page.`,
        "2. Enter an exact search term in the primary search field.",
        "3. Measure time until results update.",
      ].join("\n"),
      expected: "Search results update within 0.3 seconds for an exact match search (single-user smoke).",
      dedupe: (rows) =>
        rows.some(
          (r) =>
            r["NFR Category"] === "Performance" &&
            /search|filter response|exact search/i.test(r["Task Description"]),
        ),
    });
  }

  if (ctx.hasComplexSearch) {
    templates.push({
      key: "complex_search",
      tier: "UI-T2",
      id: `${p}-PNFR-006`,
      category: "Performance",
      subModule: "NFR - Performance",
      platformRef: "§6.4 — Complex filtered search P95 < 1500ms (single-user smoke)",
      automable: "Yes - SLA smoke (single-user timing in Playwright)",
      priority: "Medium",
      task: `Verify multi-filter search on ${m} completes within platform complex search target`,
      steps: [
        `1. Open ${m} listing page.`,
        "2. Apply two or more filters (or advanced search criteria).",
        "3. Measure time until filtered results are displayed.",
      ].join("\n"),
      expected: "Filtered results appear within 1.5 seconds (single-user smoke).",
      dedupe: (rows) =>
        rows.some(
          (r) =>
            r["NFR Category"] === "Performance" &&
            /complex|multi-filter|multiple filter|advanced filter/i.test(r["Task Description"]),
        ),
    });
  }

  if (ctx.hasExport) {
    templates.push({
      key: "export_ui",
      tier: "UI-T2",
      id: `${p}-PNFR-007`,
      category: "Performance",
      subModule: "NFR - Print / Export",
      platformRef: "§6.4 — UI-triggered export P95 < 5000ms (single-user smoke)",
      automable: "Yes - SLA smoke (single-user timing in Playwright)",
      priority: "Medium",
      task: `Verify export from ${m} completes within platform export time target`,
      steps: [
        `1. Open ${m} and navigate to a screen with export action.`,
        "2. Trigger export (file download or export dialog completion).",
        "3. Measure time until export completes or download starts.",
      ].join("\n"),
      expected: "Export action completes or download starts within 5 seconds (single-user smoke).",
      dedupe: (rows) =>
        rows.some(
          (r) =>
            (r["NFR Category"] === "Print / Export" || r["NFR Category"] === "Audit") &&
            /export/i.test(r["Task Description"]),
        ),
    });
  }

  templates.push({
    key: "wcag_smoke",
    tier: "UI-T1",
    id: `${p}-PNFR-008`,
    category: "Accessibility",
    subModule: "NFR - Accessibility",
    platformRef: "§20 — WCAG 2.1 AA smoke (zero critical violations on landing + critical screens)",
    automable: "Yes - UI (Playwright)",
    priority: "High",
    task: `Verify ${m} landing page passes WCAG 2.1 AA accessibility smoke check`,
    steps: [
      `1. Open ${m} landing page.`,
      "2. Run automated accessibility scan on the landing view.",
      "3. Review critical violations only.",
    ].join("\n"),
    expected: "No critical WCAG 2.1 AA violations on the landing page (automated smoke scan).",
    dedupe: (rows) =>
      rows.some(
        (r) =>
          r["NFR Category"] === "Accessibility" &&
          /wcag|accessibility|keyboard|axe/i.test(r["Task Description"]),
      ),
  });

  templates.push({
    key: "keyboard_nav",
    tier: "UI-T2",
    id: `${p}-PNFR-009`,
    category: "Accessibility",
    subModule: "NFR - Accessibility",
    platformRef: "§20 — Keyboard access to critical controls",
    automable: "Yes - UI (Playwright)",
    priority: "Medium",
    task: `Verify keyboard navigation reaches critical controls on ${m}`,
    steps: [
      `1. Open ${m} landing page.`,
      "2. Use Tab and Shift+Tab to move focus through primary actions (search, grid, main buttons).",
      "3. Confirm focus order is logical and controls are operable.",
    ].join("\n"),
    expected: "Critical controls on the landing view are reachable and operable using keyboard only.",
    dedupe: (rows) =>
      rows.some(
        (r) =>
          r["NFR Category"] === "Accessibility" &&
          /keyboard navigation|keyboard-navig|tab navigation|keyboard accessibility/i.test(
            r["Task Description"],
          ),
      ),
  });

  templates.push({
    key: "browser_stability",
    tier: "UI-T1",
    id: `${p}-PNFR-010`,
    category: "Browser Compatibility",
    subModule: "NFR - Browser Compatibility",
    platformRef: "§6.4 / §20 — Browser back, forward, and refresh stability",
    automable: "Yes - UI (Playwright)",
    priority: "Medium",
    task: `Verify browser back, forward, and refresh work correctly on ${m}`,
    steps: [
      `1. Open ${m} and navigate to a secondary tab or detail view if available.`,
      "2. Use browser Back, then Forward.",
      "3. Refresh the page.",
      "4. Confirm the module reloads without broken layout or auth errors.",
    ].join("\n"),
    expected: "Back, forward, and refresh preserve a usable module state without errors or blank screens.",
    dedupe: (rows) =>
      rows.some(
        (r) =>
          r["NFR Category"] === "Browser Compatibility" &&
          /browser|back|forward|refresh|session/i.test(r["Task Description"]),
      ),
  });

  templates.push({
    key: "rbac_ui",
    tier: "UI-T2",
    id: `${p}-PNFR-011`,
    category: "Security",
    subModule: "NFR - Security",
    platformRef: "§6.3 — Role-based access control enforced in UI",
    automable: AUTH_AUTOMABLE,
    priority: "High",
    task: `Verify unauthorized role cannot perform restricted actions on ${m}`,
    steps: [
      `1. Log in as a user without permission for ${m} (or use read-only role if defined).`,
      `2. Attempt to open ${m} or perform a restricted action (create, edit, delete).`,
      "3. Observe UI behaviour.",
    ].join("\n"),
    expected: "Unauthorized users see access denied, hidden actions, or disabled controls — restricted actions cannot be completed.",
    dedupe: (rows) =>
      rows.some(
        (r) =>
          r["NFR Category"] === "Security" &&
          /unauthorized|without permission|role|rbac|cannot access|authenticated/i.test(
            r["Task Description"],
          ),
      ),
  });

  if (ctx.hasMasking) {
    templates.push({
      key: "pii_masking",
      tier: "UI-T2",
      id: `${p}-PNFR-012`,
      category: "Data Privacy",
      subModule: "NFR - Data Privacy",
      platformRef: "§6.3 — PII displayed in masked format in UI",
      automable: "Yes - UI (Playwright)",
      priority: "High",
      task: `Verify sensitive data is masked in ${m} grid or detail view`,
      steps: [
        `1. Open ${m} and locate records with sensitive fields (for example ID, account, or document numbers).`,
        "2. Inspect displayed values in grid and detail views.",
      ].join("\n"),
      expected: "Sensitive values appear masked (partially hidden) according to policy — full values are not shown in plain text.",
      dedupe: (rows) =>
        rows.some(
          (r) =>
            (r["NFR Category"] === "Data Privacy" ||
              r["NFR Category"] === "Security" ||
              r["NFR Category"] === "Data Integrity") &&
            /mask|masked|sensitive data|pii/i.test(r["Task Description"]),
        ),
    });
  }

  let t2Index = 13;
  for (const screen of ctx.t2Screens || []) {
    const idNum = String(t2Index++).padStart(3, "0");
    templates.push({
      key: `t2_screen_${screen}`,
      tier: "UI-T2",
      id: `${p}-PNFR-${idNum}`,
      category: "Performance",
      subModule: "NFR - Performance",
      platformRef: "§6.4 — Critical screen readiness (single-user smoke)",
      automable: "Yes - SLA smoke (single-user timing in Playwright)",
      priority: "Medium",
      task: `Verify ${screen} on ${m} is ready within acceptable UI response time`,
      steps: [
        `1. Open ${m} landing page.`,
        `2. Navigate to ${screen}.`,
        "3. Measure time until the screen is ready for user interaction.",
      ].join("\n"),
      expected: `${screen} is ready within 1.2 seconds (single-user smoke) or shows complete content without error.`,
      dedupe: () => false,
      t2Screen: screen,
    });
  }

  return templates;
}

function toRow(template, ctx) {
  const row = {
    "Test Case ID": template.id,
    Module: ctx.moduleName,
    "Sub Module": template.subModule,
    "NFR Category": template.category,
    "FSD Requirement": template.platformRef,
    "Task Description": template.task,
    "Acceptance Criteria": acceptanceCriteria(),
    Preconditions: preconditionsBlock(ctx.moduleName, ctx.role),
    "Test Steps": template.steps,
    "Test Data": testDataForModule(ctx.moduleName, ctx.role),
    Priority: template.priority,
    "Expected Result": template.expected,
    Status: "Draft",
    "Source Excel File": "Generated — Platform UI NFR",
    "Source FSD": PLATFORM_SOURCE,
    Automable: template.automable,
    "Mapped Existing IDs": "",
    Notes: `Platform UI ${template.tier}; NFR layer UI (Playwright). Load/stress with 1000+ simultaneous users requires k6/JMeter — not Playwright.`,
  };
  for (const key of Object.keys(row)) {
    if (typeof row[key] === "string") row[key] = sanitizeCellText(row[key]);
  }
  return row;
}

function backupWorkbook() {
  const stamp = GENERATED_AT.replace(/[:.]/g, "-").slice(0, 19);
  const backupPath = `${WORKBOOK_PATH}.bak-${stamp}`;
  fs.copyFileSync(WORKBOOK_PATH, backupPath);
  return backupPath;
}

function existingPlatformTaskKeys(rows) {
  return new Set(
    rows
      .filter((r) => r["Source FSD"] === PLATFORM_SOURCE)
      .map((r) => `${r.Module}|||${r["Task Description"]}`),
  );
}

async function main() {
  if (!fs.existsSync(WORKBOOK_PATH)) {
    throw new Error(`Workbook not found: ${WORKBOOK_PATH}`);
  }

  const backupPath = backupWorkbook();
  const { sheetNames, sheets } = readWorkbook(WORKBOOK_PATH);
  const existingRows = sheets["All NFR Cases"].rows;
  const knownPlatformTasks = existingPlatformTaskKeys(existingRows);

  const newRows = [];
  const addedByModule = {};
  const skippedByModule = {};

  for (const [moduleName, config] of Object.entries(MODULES)) {
    const moduleExisting = existingRows.filter((r) => r.Module === moduleName);
    const ctx = { moduleName, ...config };
    addedByModule[moduleName] = 0;
    skippedByModule[moduleName] = 0;

    for (const template of buildPlatformTemplates(ctx)) {
      const taskKey = `${moduleName}|||${template.task}`;
      if (knownPlatformTasks.has(taskKey)) {
        skippedByModule[moduleName]++;
        continue;
      }
      if (template.dedupe(moduleExisting)) {
        skippedByModule[moduleName]++;
        continue;
      }
      const row = toRow(template, ctx);
      row["Test Case ID"] = nextNfrTestCaseId([...existingRows, ...newRows]);
      newRows.push(row);
      moduleExisting.push(row);
      knownPlatformTasks.add(taskKey);
      addedByModule[moduleName]++;
    }
  }

  const allRows = [...existingRows, ...newRows].map((row) => {
    const out = {};
    for (const [k, v] of Object.entries(row)) {
      out[k] = typeof v === "string" ? sanitizeCellText(v) : v;
    }
    return out;
  });
  const summaryRows = sheets.Summary.rows;

  for (const summary of summaryRows) {
    const mod = summary.Module;
    const fsdCount = allRows.filter(
      (r) => r.Module === mod && r["Source FSD"] !== PLATFORM_SOURCE,
    ).length;
    const platformCount = allRows.filter(
      (r) => r.Module === mod && r["Source FSD"] === PLATFORM_SOURCE,
    ).length;
    summary["FSD NFR Cases"] = fsdCount;
    summary["Platform UI NFR Cases"] = platformCount;
    summary["Total UI NFR Cases in Workbook"] = fsdCount + platformCount;
    summary["Total NFR Cases in Workbook"] = fsdCount + platformCount;
    if (platformCount > 0 && !configFsdInScope(mod)) {
      summary["Platform UI NFR Coverage"] = "UI-T1 + UI-T2 platform checks added";
    }
  }

  function configFsdInScope(mod) {
    return MODULES[mod]?.fsdInScope;
  }

  const excludedRows = sheets["Excluded Modules"].rows;
  for (const row of excludedRows) {
    if (addedByModule[row.Module] > 0) {
      row.Action =
        "FSD NFR chapter absent — Platform UI NFR cases added from AML Platform NFR Spec (Playwright UI-T1/T2)";
    }
  }

  const readmeRow = XLSX.utils.sheet_to_json(wb.Sheets.Readme, { defval: "" })[0] || {};
  readmeRow.Title = "Milestone1 NFR Test Cases (FSD + Platform UI)";
  readmeRow.GeneratedAt = GENERATED_AT;
  readmeRow.Rule =
    "FSD-aligned cases retained from module FSD Non-Functional Requirements sections. Platform UI NFR cases added from AML_NFR_Spec for all Milestone 1 modules (UI-T1 landing + UI-T2 critical screens). API NFR cases pending OpenAPI JSON. Load/stress with high concurrency requires k6/JMeter — not Playwright.";
  readmeRow["Modules in scope (formal FSD NFR)"] =
    "Batch Screening, Customer 360 View, Dedup Screening, KYC Gap Report, Manual Screening, Missing Mandatory, Reference Data Registry";
  readmeRow["Modules excluded (no FSD NFR section)"] =
    "Custom List Manager, Exception List Manager, Ignore Words Configuration, Keyword Manager, Sanction MIS Reports, Screening Configuration — Platform UI NFR only until FSD NFR chapter exists";
  readmeRow["Platform UI NFR cases added"] = newRows.length;
  readmeRow["Total UI cases in workbook"] = allRows.length;
  readmeRow["Test Case ID convention"] = "TC_NFR_XXX (sequential, e.g. TC_NFR_001)";
  readmeRow.Note =
    "API NFR sheet is placeholder until OpenAPI/Swagger JSON is provided. Playwright covers UI and single-user timing smoke only.";

  const apiPendingRows = [
    {
      Status: "Pending",
      Note: "API NFR test cases will be generated when OpenAPI/Swagger JSON is provided.",
      "Planned tiers": "API-T1 contract & security; API-T2 single-client latency smoke; API-T3 FSD API bullets",
      "Load / stress": "High concurrency (e.g. 1000 simultaneous calls) — k6 or JMeter, not Playwright",
      "Source": PLATFORM_SOURCE,
    },
  ];

  const platformMatrixRows = allRows
    .filter((r) => r["Source FSD"] === PLATFORM_SOURCE)
    .map((r) => ({
    Module: r.Module,
    "Test Case ID": r["Test Case ID"],
    Tier: (r.Notes || "").includes("UI-T2") ? "UI-T2" : "UI-T1",
    "NFR Category": r["NFR Category"],
    Automable: r.Automable,
    "Task Description": r["Task Description"],
  }));

  sheets["All NFR Cases"].rows = allRows;
  sheets.Summary.rows = summaryRows;
  sheets.Readme.rows = [readmeRow];
  sheets["Excluded Modules"].rows = excludedRows;
  sheets["Platform UI NFR Index"] = {
    headers: ["Module", "Test Case ID", "Tier", "NFR Category", "Automable", "Task Description"],
    rows: platformMatrixRows,
  };
  sheets["API NFR Cases (Pending)"] = {
    headers: ["Status", "Note", "Planned tiers", "Load / stress", "Source"],
    rows: apiPendingRows,
  };

  let orderedNames = [...sheetNames];
  if (!orderedNames.includes("Platform UI NFR Index")) {
    const idx = orderedNames.indexOf("Excluded Modules");
    orderedNames.splice(idx >= 0 ? idx + 1 : orderedNames.length, 0, "Platform UI NFR Index");
  }
  if (!orderedNames.includes("API NFR Cases (Pending)")) {
    orderedNames.push("API NFR Cases (Pending)");
  }

  await writeWorkbook(WORKBOOK_PATH, orderedNames, sheets);

  const deltaPath = path.join(ROOT, "results/nfr-platform-ui/m1-platform-ui-nfr-delta.json");
  fs.mkdirSync(path.dirname(deltaPath), { recursive: true });
  fs.writeFileSync(
    deltaPath,
    JSON.stringify(
      {
        generatedAt: GENERATED_AT,
        workbook: relative(WORKBOOK_PATH),
        backup: relative(backupPath),
        addedCount: newRows.length,
        totalCount: allRows.length,
        addedByModule,
        skippedByModule,
        addedIds: newRows.map((r) => r["Test Case ID"]),
      },
      null,
      2,
    ),
  );

  console.log(`Backup: ${relative(backupPath)}`);
  console.log(`Added ${newRows.length} platform UI NFR cases (${allRows.length} total UI rows)`);
  console.log("By module:", JSON.stringify(addedByModule, null, 2));
  console.log(`Delta: ${relative(deltaPath)}`);
  console.log(`Updated: ${relative(WORKBOOK_PATH)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
