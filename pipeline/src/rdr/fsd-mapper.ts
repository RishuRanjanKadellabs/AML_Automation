import type { RdrExcelRow, FsdMappingEntry } from "./types";
import { loadRdrFsdSections, type FsdSection } from "./fsd-index";

export type { FsdMappingEntry } from "./types";

const MASTER_TO_FSD: Record<string, { id: string; title: string }> = {
  "Customer Master": { id: "5.1", title: "Customer Master" },
  "Customer Address": { id: "5.2", title: "Customer Address (CUST_ADDRESS)" },
  "Customer Documents": { id: "5.3", title: "Customer Documents (CUST_DOCUMENT)" },
  "Risk Assessment": { id: "5.4", title: "Risk Assessment (RISK_ASSESSMENT)" },
  "Account Master": { id: "5.5", title: "Account Master" },
  "Customer-Account Relationship": { id: "5.5", title: "Account Master" },
  "Loan Account": { id: "5.5", title: "Account Master" },
  "EOD Balance": { id: "5.5", title: "Account Master" },
  "Card Master": { id: "6.1", title: "Card Master" },
  "Mobile Banking": { id: "6.2", title: "Mobile Banking" },
  "ATM Master": { id: "6.3", title: "ATM Master" },
  Instruments: { id: "6.4", title: "Instruments (INSTRUMENT_MASTER)" },
  "Transaction Device": { id: "6.5", title: "Transaction Device (TXN_DEVICE)" },
  "Beneficial Owner": { id: "7.1", title: "Beneficial Owner (BENEFICIAL_OWNER)" },
  "Related Parties Network": { id: "7.2", title: "Related Parties Network" },
  "Non-Customer Master": { id: "7.3", title: "Non-Customer Master" },
  "Customer Type Master": { id: "9.1", title: "Customer Type Master" },
  "Product Master": { id: "9.2", title: "Product Master" },
  "Branch Master": { id: "9.3", title: "Branch Master" },
  "Channel Master": { id: "9.4", title: "Channel Master" },
  "Transaction Type Master": { id: "9.5", title: "Transaction Type Master" },
  "Currency Master": { id: "9.6", title: "Currency Master" },
  "FX Rates Master": { id: "9.7", title: "FX Rates Master" },
  "Industry Code Master": { id: "9.8", title: "Industry Code Master" },
  "Reference Master": { id: "9.9", title: "Reference Master (Generic)" },
  "Country Master": { id: "10.5", title: "High-Risk Country Prioritisation & Display" },
  "Employee Master": { id: "8", title: "Employee Master" },
};

const TASK_FSD_OVERRIDES: Array<{ pattern: RegExp; id: string; title: string }> = [
  { pattern: /csv export|export.*csv/i, id: "11.1", title: "Export Formats" },
  { pattern: /excel export|export.*excel/i, id: "11.1", title: "Export Formats" },
  { pattern: /export button|export functionality/i, id: "11.1", title: "Export Formats" },
  { pattern: /view button|detail modal|record detail|detail screen/i, id: "4.3", title: "Detail Modal" },
  { pattern: /filter|filtered results/i, id: "4.5", title: "Filter Bars" },
  { pattern: /search|clear search|search box/i, id: "4.1", title: "Toolbar" },
  { pattern: /column selector|columns picker|hide.*column|show.*column/i, id: "4.4", title: "Column Selector Dropdown" },
  { pattern: /pagination|page size|records per page/i, id: "4.2", title: "Data Grid" },
  { pattern: /kpi|synced|cbs refresh|last sync/i, id: "11.3", title: "CBS Refresh" },
  { pattern: /toast|notification/i, id: "4.7", title: "Toast Notifications" },
  { pattern: /sidebar|topbar|breadcrumb|app shell|top navigation bar/i, id: "3.1", title: "Top Navigation Bar (Topbar)" },
  { pattern: /performance|uptime|response time|sla/i, id: "12", title: "Non-Functional Requirements" },
  { pattern: /goaml/i, id: "11.4", title: "goAML Integration" },
];

function findSection(sections: FsdSection[], id: string): FsdSection | undefined {
  return sections.find((s) => s.id === id || s.id.startsWith(`${id}.`));
}

export function mapRowToFsd(row: RdrExcelRow, sections: FsdSection[]): FsdMappingEntry {
  const masterRef = MASTER_TO_FSD[row.masterName];
  const blob = `${row.taskDescription} ${row.testSteps} ${row.expectedResult}`.toLowerCase();
  const taskOverride = TASK_FSD_OVERRIDES.find((t) => t.pattern.test(blob));
  const chosen = taskOverride ?? masterRef ?? null;

  if (!chosen) {
    return {
      testCaseId: row.id,
      excelSubModule: row.subModule,
      excelTask: row.taskDescription,
      fsdSectionId: "",
      fsdSectionTitle: "",
      fsdModule: "",
      alignmentStatus: "unmapped",
      notes: `No FSD section mapped for master "${row.masterName}"`,
    };
  }

  const section = findSection(sections, chosen.id);
  let notes = "";
  if (taskOverride && masterRef && taskOverride.id !== masterRef.id) {
    notes = `Task keyword maps to FSD ${taskOverride.id}; master "${row.masterName}" maps to ${masterRef.id}. Task keyword used for cross-cutting UI behavior.`;
  }
  if (!section) {
    return {
      testCaseId: row.id,
      excelSubModule: row.subModule,
      excelTask: row.taskDescription,
      fsdSectionId: chosen.id,
      fsdSectionTitle: chosen.title,
      fsdModule: "Reference Data Registry",
      alignmentStatus: "partial",
      notes: notes || `FSD section ${chosen.id} assigned; verify in Reference Data Registry_FSD_v1.0.docx`,
    };
  }

  return {
    testCaseId: row.id,
    excelSubModule: row.subModule,
    excelTask: row.taskDescription,
    fsdSectionId: section.id,
    fsdSectionTitle: section.title,
    fsdModule: section.module,
    alignmentStatus: "aligned",
    notes,
  };
}

export async function buildFsdMappings(rows: RdrExcelRow[]): Promise<FsdMappingEntry[]> {
  const sections = await loadRdrFsdSections();
  return rows.map((row) => mapRowToFsd(row, sections));
}

export function formatFsdReference(mapping: FsdMappingEntry): string {
  if (!mapping.fsdSectionId) {
    return "FSD: unmapped";
  }
  return `FSD §${mapping.fsdSectionId} — ${mapping.fsdSectionTitle}`;
}
