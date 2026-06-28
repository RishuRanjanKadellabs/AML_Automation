import { parseNumberedSteps } from "./excel-intent";
import { mapRowToFsd, getCatalogEntry, type FsdCatalogEntry } from "./fsd-catalog";
import { type HtmlInventory, getMasterTab } from "./html-inventory";
import { formatTestData, resolveRdrContext } from "./rdr-test-data";
import type { EnhancedRdrRow, GapTestCaseSpec, RdrExcelRow } from "./types";
import type { FsdSection } from "./fsd-index";

function rowContext(row: Pick<RdrExcelRow, "subModule" | "masterName" | "taskDescription" | "testSteps" | "acceptanceCriteria" | "expectedResult" | "testData">): string {
  return `${row.subModule} ${row.masterName} ${row.taskDescription} ${row.testSteps} ${row.acceptanceCriteria} ${row.expectedResult} ${row.testData}`.toLowerCase();
}

function normalizeStep(step: string): string {
  const clean = step.replace(/\s+/g, " ").trim();
  if (!clean) return clean;
  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

function dedupeSteps(steps: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of steps) {
    const step = normalizeStep(raw);
    const key = step.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    if (!key || seen.has(key) || key.length < 10) continue;
    seen.add(key);
    out.push(step);
  }
  return out;
}

function numberSteps(steps: string[]): string {
  return steps.map((s, i) => `${i + 1}. ${s}`).join("\n");
}

function trimToRange(steps: string[], min = 10, max = 20): string[] {
  const out = steps.slice(0, max);
  while (out.length < min && out.length > 0) {
    out.push("Verify no UI break or console error is observed during the scenario.");
  }
  return out.slice(0, max);
}

function containsAny(text: string, patterns: string[]): boolean {
  return patterns.some((p) => text.includes(p));
}

function buildStandardPreamble(row: RdrExcelRow, inventory: HtmlInventory): string[] {
  const masterTab = getMasterTab(row.masterName, inventory);
  const shellLabel = inventory.shellGroups.find((g) => g.key === masterTab?.shellGroupKey)?.sidebarLabel ?? row.shellGroup;
  const targetMaster = masterTab?.masterLabel ?? row.masterName;
  return [
    "Open the KYC module from primary navigation and select Reference Data Register.",
    `Open shell group "${shellLabel}" from the Reference Data Register sidebar.`,
    `Select master tab "${targetMaster}" and wait for grid content to load.`,
    "Verify page header, breadcrumb, toolbar actions, and grid container are visible.",
    "Verify sync label is displayed and reflects the latest CBS sync status.",
  ];
}

function stepForKeyword(keyword: string, row: RdrExcelRow): string[] {
  const master = row.masterName;
  switch (keyword) {
    case "search":
      return [
        "Enter a valid search value and verify matching records are displayed.",
        "Enter a non-matching search value and verify empty state messaging is shown.",
      ];
    case "filter":
      return [
        "Apply branch or type filter and verify only matching records remain in grid.",
        "Clear filters and verify the full dataset is restored.",
      ];
    case "export":
      return [
        "Click CSV export and verify export action completes for current filtered dataset.",
        "Click Excel export and verify downloaded file headers match on-screen columns.",
      ];
    case "modal":
      return [
        "Click View action on a row and verify detail modal opens with row metadata.",
        "Verify detail modal fields match selected record and close modal successfully.",
      ];
    case "sort":
      return [
        "Sort by a numeric or textual column in ascending order and verify row order.",
        "Sort the same column in descending order and verify reverse ordering.",
      ];
    case "hyperlink":
      return [
        "Click primary hyperlink in grid and verify navigation opens the expected detail route.",
      ];
    case "column":
      return [
        "Open column selector and toggle one optional column off and on.",
        "Verify grid reflects selected column visibility without data corruption.",
      ];
    case "refresh":
      return [
        "Click Refresh CBS and wait for operation completion feedback.",
        "Verify success toast and updated sync timestamp are displayed.",
      ];
    case "kpi":
      return [
        "Verify KPI cards are visible and counts are consistent with the filtered grid dataset.",
      ];
    case "pii":
      return [
        "Verify PII fields are masked for restricted role and readable for authorized role only.",
      ];
    case "pep":
      return [
        "Verify PEP indicators are shown where applicable and align with source status.",
      ];
    case "sanctions":
      return [
        "Verify sanctions flags are displayed accurately for matched records.",
      ];
    case "risk":
      return [
        "Verify risk level values and labels are displayed consistently in grid and details.",
      ];
    case "empty":
      return [
        "Apply criteria with no matching records and verify empty state text is user-friendly.",
      ];
    case "security":
      return [
        "Attempt access with unauthorized role and verify access is denied without exposing data.",
      ];
    case "pagination":
      return [
        "Change page size and verify displayed row count does not exceed selected size.",
        "Scroll pagination controls and navigate to next page, then verify row continuity.",
      ];
    case "toast":
      return [
        "Trigger a user action that emits toast feedback and verify message clarity and type.",
      ];
    default:
      return [`Verify ${master} behavior aligns with approved workflow and UI rules.`];
  }
}

function buildScenarioSteps(row: RdrExcelRow, inventory: HtmlInventory, fsd: FsdCatalogEntry | undefined): string[] {
  const ctx = rowContext(row);
  const originalSteps = parseNumberedSteps(row.testSteps).filter((step) => step.length > 5);
  const preserved = originalSteps
    .filter((step) => !/login|log in|sign in|open kyc|open reference data register/i.test(step))
    .map(normalizeStep);

  const keywordMap: Array<{ key: string; patterns: string[] }> = [
    { key: "search", patterns: ["search"] },
    { key: "filter", patterns: ["filter"] },
    { key: "export", patterns: ["export", "csv", "excel"] },
    { key: "modal", patterns: ["modal", "view action", "detail"] },
    { key: "sort", patterns: ["sort"] },
    { key: "hyperlink", patterns: ["hyperlink", "link", "navigate"] },
    { key: "column", patterns: ["column selector", "column picker", "toggle column"] },
    { key: "refresh", patterns: ["refresh cbs", "refresh"] },
    { key: "kpi", patterns: ["kpi", "score card"] },
    { key: "pii", patterns: ["pii", "mask", "masked"] },
    { key: "pep", patterns: ["pep"] },
    { key: "sanctions", patterns: ["sanction"] },
    { key: "risk", patterns: ["risk"] },
    { key: "empty", patterns: ["empty state", "no records", "no result"] },
    { key: "security", patterns: ["security", "unauthorized", "access denied"] },
    { key: "pagination", patterns: ["pagination", "page size", "scroll"] },
    { key: "toast", patterns: ["toast", "notification"] },
  ];

  const generated: string[] = [];
  for (const entry of keywordMap) {
    if (containsAny(ctx, entry.patterns)) {
      generated.push(...stepForKeyword(entry.key, row));
    }
  }

  if (generated.length === 0) {
    generated.push(`Review ${row.masterName} grid fields and verify displayed values are populated.`);
    generated.push("Compare selected row values with source snapshot and verify consistency.");
  }

  if (inventory.commonControls.stickyHeader.present) {
    generated.push("Scroll through grid rows and verify sticky header remains visible.");
  }

  if (fsd?.businessRules.length) {
    generated.push(`Validate one key rule from requirement context: ${fsd.businessRules[0]}.`);
  }

  return trimToRange(dedupeSteps([...preserved, ...generated]), 4, 14);
}

function buildPreconditions(row: RdrExcelRow): string {
  const context = resolveRdrContext({
    masterName: row.masterName,
    shellGroup: row.shellGroup,
    subModule: row.subModule,
    taskDescription: row.taskDescription,
    testSteps: row.testSteps,
    testData: row.testData,
  });
  return [
    `1. ${context.role} has access to Reference Data Register ${context.masterName}.`,
    "2. Test environment is online with CBS sync service and master data available.",
  ].join("\n");
}

function enrichTestData(row: RdrExcelRow): string {
  const context = resolveRdrContext({
    masterName: row.masterName,
    shellGroup: row.shellGroup,
    subModule: row.subModule,
    taskDescription: row.taskDescription,
    testSteps: row.testSteps,
    testData: row.testData,
  });
  const generatedKey =
    /^(user\s+role|role|master|shell group|customer id|customer name|customer type|employee id|employee code|department|branch|card id|linked customer id|card last\s*4|card type|card network|beneficial owner id|ownership\s*%?|control type|search\s*\(|invalid search term|page sizes|default page size|masked name|risk rating|kyc status|status|cbs sync|customerid|customername|synclabel|searchpartial|searchexact|searchnomatch|defaultpagesize|employeeid|employeecode|employeenamemasked|cardid|cardlast4|cardtype)\b/i;
  const inherited = row.testData
    .split(/;|\n/)
    .map((part) => part.trim())
    .filter(Boolean)
    .filter((part) => !generatedKey.test(part));
  const base = formatTestData(context);
  return inherited.length ? `${base}; ${inherited.join("; ")}` : base;
}

function primaryOutcome(row: RdrExcelRow): string {
  const task = row.taskDescription.replace(/^verify\s+/i, "").trim();
  return `${task.charAt(0).toUpperCase()}${task.slice(1)} succeeds for ${row.masterName}.`;
}

function bulletsFromSteps(steps: string[], max = 3): string[] {
  return steps
    .slice(0, max)
    .map((step) => step.replace(/^\d+\.\s*/, "").replace(/\.$/, ""))
    .map((s) => `- ${s}.`);
}

function buildExpectedResult(row: RdrExcelRow, mergedSteps: string[]): string {
  const functional = bulletsFromSteps(mergedSteps.filter((s) => /search|filter|sort|export|refresh|hyperlink|pagination|scroll/i.test(s)), 3);
  const business = bulletsFromSteps(mergedSteps.filter((s) => /risk|pep|sanction|pii|mask|score|classification/i.test(s)), 2);
  const data = bulletsFromSteps(mergedSteps.filter((s) => /dataset|row|record|source|field|value|count/i.test(s)), 2);
  const navigation = bulletsFromSteps(mergedSteps.filter((s) => /navigation|tab|shell|open|return|active/i.test(s)), 2);
  const audit = bulletsFromSteps(mergedSteps.filter((s) => /audit|security|unauthorized|log/i.test(s)), 2);

  return [
    "Functional Validation:",
    ...(functional.length ? functional : ["- Search, filter, sort, and export controls operate as expected."]),
    "",
    "Business Validation:",
    ...(business.length ? business : ["- Business indicators align with configured master data rules."]),
    "",
    "Data Validation:",
    ...(data.length ? data : ["- Displayed data is consistent with source records and selected filters."]),
    "",
    "Navigation Validation:",
    ...(navigation.length ? navigation : ["- Reference Data Register navigation remains stable through the scenario."]),
    "",
    "Audit Validation:",
    ...(audit.length ? audit : ["- User actions respect role permissions and traceability expectations."]),
    "",
    "System Behaviour:",
    `- ${primaryOutcome(row)}`,
    "- Application remains stable with no unexpected error behavior.",
  ].join("\n");
}

function buildAcceptanceCriteria(row: RdrExcelRow, fsdSectionTitle: string): string {
  const clean = row.acceptanceCriteria.trim();
  const base = clean.length > 25 ? clean : `All ${row.masterName} checks must pass for the defined scenario.`;
  return `${base}\nRequirement reference: ${fsdSectionTitle}.`;
}

export function expandRow(
  row: RdrExcelRow,
  sections: FsdSection[],
  catalog: FsdCatalogEntry[],
  inventory: HtmlInventory,
): EnhancedRdrRow {
  const mapping = mapRowToFsd(row, sections);
  const fsd = getCatalogEntry(catalog, mapping.fsdSectionId);
  const preamble = buildStandardPreamble(row, inventory);
  const scenario = buildScenarioSteps(row, inventory, fsd);
  const finalSteps = trimToRange(dedupeSteps([...preamble, ...scenario]), 10, 20);

  return {
    ...row,
    preconditions: buildPreconditions(row),
    testData: enrichTestData(row),
    testSteps: numberSteps(finalSteps),
    expectedResult: buildExpectedResult(row, finalSteps),
    acceptanceCriteria: buildAcceptanceCriteria(row, mapping.fsdSectionTitle || row.masterName),
    fsdSectionId: mapping.fsdSectionId || "4.1",
    fsdSectionTitle: mapping.fsdSectionTitle || row.masterName,
    isNew: false,
  };
}

export function expandGapRow(
  gap: GapTestCaseSpec & { id: string },
  sections: FsdSection[],
  catalog: FsdCatalogEntry[],
  inventory: HtmlInventory,
): EnhancedRdrRow {
  const base: RdrExcelRow = {
    id: gap.id,
    module: "Reference Data Register",
    subModule: gap.subModule,
    shellGroup: gap.subModule.split("→")[0]?.trim() ?? "Customer",
    masterName: gap.masterName,
    taskDescription: gap.taskDescription,
    acceptanceCriteria: "",
    preconditions: "",
    testSteps: `Verify ${gap.uiControlLabel} on ${gap.masterName}.`,
    testData: gap.testData,
    priority: gap.priority,
    expectedResult: `${gap.uiControlLabel} behaves correctly on ${gap.masterName}.`,
  };

  const expanded = expandRow(base, sections, catalog, inventory);
  const extra = [
    `Validate control "${gap.uiControlLabel}" as per Reference Data Register design rules.`,
    `Confirm ${gap.masterName} scenario remains stable after interacting with "${gap.uiControlLabel}".`,
  ];
  const steps = trimToRange(dedupeSteps([...parseNumberedSteps(expanded.testSteps), ...extra]), 12, 20);

  return {
    ...expanded,
    testSteps: numberSteps(steps),
    expectedResult: buildExpectedResult(base, steps),
    fsdSectionId: gap.fsdSectionId,
    isNew: true,
  };
}

export function countSteps(testSteps: string): number {
  return (testSteps.match(/^\d+\./gm) || []).length;
}
