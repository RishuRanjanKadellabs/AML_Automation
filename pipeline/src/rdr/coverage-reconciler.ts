import type { FsdCatalogEntry } from "./fsd-catalog";
import type { HtmlInventory } from "./html-inventory";
import type { GapTestCaseSpec, RdrExcelRow } from "./types";
import { resolveRdrContext, formatTestData } from "./rdr-test-data";

const GAP_SPECS: GapTestCaseSpec[] = [
  {
    subModule: "Customer → Customer Master",
    masterName: "Customer Master",
    taskDescription: "Verify column selector shows and hides columns on Customer Master grid",
    priority: "High",
    testData: "",
    uiControlLabel: "Column Selector",
    fsdSectionId: "4.4",
  },
  {
    subModule: "Customer → Customer Master",
    masterName: "Customer Master",
    taskDescription: "Verify toast appears after refresh CBS action with latest sync status",
    priority: "High",
    testData: "",
    uiControlLabel: "Toast",
    fsdSectionId: "4.7",
  },
  {
    subModule: "Customer → Customer Master",
    masterName: "Customer Master",
    taskDescription: "Verify sticky header remains visible while scrolling through grid rows",
    priority: "Medium",
    testData: "",
    uiControlLabel: "Sticky Header",
    fsdSectionId: "4.2",
  },
  {
    subModule: "Customer → Customer Master",
    masterName: "Customer Master",
    taskDescription: "Verify KPI cards display and match customer master dataset counts",
    priority: "High",
    testData: "",
    uiControlLabel: "KPI Cards",
    fsdSectionId: "11.3",
  },
  {
    subModule: "Customer → Customer Master",
    masterName: "Customer Master",
    taskDescription: "Verify maximum 50k rows label is displayed for the customer dataset limit",
    priority: "Medium",
    testData: "",
    uiControlLabel: "50k Rows Label",
    fsdSectionId: "4.2",
  },
  {
    subModule: "Customer → Customer Master",
    masterName: "Customer Master",
    taskDescription: "Verify PII masking on customer name and identifier fields for restricted role",
    priority: "High",
    testData: "",
    uiControlLabel: "PII Masking",
    fsdSectionId: "12",
  },
  {
    subModule: "Customer → Customer Master",
    masterName: "Customer Master",
    taskDescription: "Verify responsive behavior on smaller viewport without clipping filter and grid controls",
    priority: "Medium",
    testData: "",
    uiControlLabel: "Responsive Layout",
    fsdSectionId: "12",
  },
  {
    subModule: "Customer → Customer Master",
    masterName: "Customer Master",
    taskDescription: "Verify refresh CBS completes with success toast and updated sync timestamp",
    priority: "High",
    testData: "",
    uiControlLabel: "Refresh CBS Toast",
    fsdSectionId: "11.3",
  },
  {
    subModule: "Customer → Customer Master",
    masterName: "Customer Master",
    taskDescription: "Verify detail modal fields display customer metadata and risk attributes correctly",
    priority: "High",
    testData: "",
    uiControlLabel: "Detail Modal",
    fsdSectionId: "4.3",
  },
];

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function rowBlob(row: RdrExcelRow): string {
  return normalize(`${row.subModule} ${row.taskDescription} ${row.testSteps} ${row.expectedResult}`);
}

function isCovered(row: RdrExcelRow, spec: GapTestCaseSpec): boolean {
  const blob = rowBlob(row);
  const control = normalize(spec.uiControlLabel);
  if (blob.includes(control)) return true;

  const terms = normalize(spec.taskDescription).split(" ").filter((w) => w.length > 4);
  const matched = terms.filter((term) => blob.includes(term)).length;
  return matched >= Math.ceil(terms.length * 0.65);
}

function enrichGapTestData(spec: GapTestCaseSpec): string {
  const context = resolveRdrContext({
    masterName: spec.masterName,
    shellGroup: spec.subModule.split("→")[0]?.trim() ?? "Customer",
    subModule: spec.subModule,
    taskDescription: spec.taskDescription,
    testSteps: spec.uiControlLabel,
    testData: `Control: ${spec.uiControlLabel}`,
  });
  return formatTestData(context);
}

export function findCoverageGaps(
  baseline: RdrExcelRow[],
  _catalog: FsdCatalogEntry[],
  inventory: HtmlInventory,
): GapTestCaseSpec[] {
  const gapSpecs = GAP_SPECS.map((gap) => ({ ...gap, testData: enrichGapTestData(gap) }));
  const gaps = gapSpecs.filter((spec) => !baseline.some((row) => isCovered(row, spec)));

  if (inventory.commonControls.columnSelector.present) {
    return gaps;
  }

  return gaps.filter((g) => g.uiControlLabel !== "Column Selector");
}

export function assignGapIds(lastId: string, gaps: GapTestCaseSpec[]): Array<GapTestCaseSpec & { id: string }> {
  const parsed = lastId.match(/RDR_(\d+)/i);
  let next = parsed ? Number(parsed[1]) : 386;
  if (next < 386) next = 386;
  return gaps.map((gap) => {
    next += 1;
    return { ...gap, id: `RDR_${String(next).padStart(3, "0")}` };
  });
}
