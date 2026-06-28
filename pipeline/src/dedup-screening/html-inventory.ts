import * as fs from "fs";
import * as path from "path";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const DDS_HTML_PATH = path.join(PROJECT_ROOT, "pipeline/test-data/dedup-screening.html");
export const HTML_INVENTORY_PATH = path.join(PROJECT_ROOT, "specs/dedup-screening/html-inventory.json");

export interface HtmlControl {
  id: string;
  label: string;
  type: "navigation" | "header" | "filter" | "field" | "button" | "panel" | "table" | "modal" | "tab" | "export" | "pagination" | "status";
  fsdSectionId: string;
  keywords: string[];
  elementId?: string;
  tableHeaders?: string[];
}

export interface HtmlInventory {
  generatedAt: string;
  source: string;
  controls: HtmlControl[];
}

const CONTROL_DEFS: HtmlControl[] = [
  {
    id: "sidebar-dedup",
    label: "De-dup Screening Sidebar Item",
    type: "navigation",
    fsdSectionId: "2.2",
    keywords: ["sidebar", "navigation", "de-dup screening menu", "left navigation", "sanction screening"],
    elementId: "sidebar-item-dedup",
  },
  {
    id: "breadcrumb",
    label: "Breadcrumb Path",
    type: "navigation",
    fsdSectionId: "4.1",
    keywords: ["breadcrumb", "sanction screening > de-dup", "navigation hierarchy"],
  },
  {
    id: "page-title",
    label: "De-Duplication Screening Title",
    type: "header",
    fsdSectionId: "4.4",
    keywords: ["de-duplication screening", "page title", "page header"],
  },
  {
    id: "page-subtitle",
    label: "Page Subtitle",
    type: "header",
    fsdSectionId: "4.4",
    keywords: ["subtitle", "duplicate customer records", "kyc parameters"],
  },
  {
    id: "filter-card",
    label: "Search Filters Card",
    type: "panel",
    fsdSectionId: "5.1",
    keywords: ["search filters", "filter card"],
  },
  {
    id: "match-parameter-list",
    label: "Match Parameter List",
    type: "filter",
    fsdSectionId: "5.2",
    keywords: ["match parameter", "parameter list", "multiselect", "dropdown"],
    elementId: "mselect",
  },
  {
    id: "match-parameter-search",
    label: "Parameter Search Box",
    type: "field",
    fsdSectionId: "5.4",
    keywords: ["search parameter", "search term", "filter options", "inline search"],
    elementId: "msSearch",
  },
  {
    id: "select-all",
    label: "Select All Toggle",
    type: "button",
    fsdSectionId: "5.4",
    keywords: ["select all", "deselect all"],
    elementId: "selectAllChk",
  },
  {
    id: "parameter-tags",
    label: "Selected Parameter Tags",
    type: "field",
    fsdSectionId: "5.4",
    keywords: ["tag", "removable tag", "pill tag", "remove icon"],
    elementId: "msSelected",
  },
  {
    id: "customer-id",
    label: "Customer ID Input",
    type: "field",
    fsdSectionId: "5.2",
    keywords: ["customer id", "enter customer id"],
  },
  {
    id: "generate-report",
    label: "Generate Report Button",
    type: "button",
    fsdSectionId: "5.5",
    keywords: ["generate report", "generating", "loader"],
  },
  {
    id: "clear-filters",
    label: "Clear Filters Button",
    type: "button",
    fsdSectionId: "5.5",
    keywords: ["clear filters", "reset", "deselect all parameters"],
  },
  {
    id: "results-section",
    label: "Results Section",
    type: "panel",
    fsdSectionId: "6.1",
    keywords: ["results section", "de-duplication match report", "hidden before report"],
    elementId: "resultsSection",
  },
  {
    id: "status-bar",
    label: "Report Success Status Bar",
    type: "status",
    fsdSectionId: "6.2",
    keywords: ["report generated successfully", "status message", "success status"],
  },
  {
    id: "group-count-badge",
    label: "Group Count Badge",
    type: "status",
    fsdSectionId: "6.3",
    keywords: ["group count", "matching groups", "records badge"],
  },
  {
    id: "export-button",
    label: "Export Button",
    type: "export",
    fsdSectionId: "6.5",
    keywords: ["export", "export menu", "export to excel"],
    elementId: "exportWrapper",
  },
  {
    id: "export-excel",
    label: "Export to Excel",
    type: "export",
    fsdSectionId: "6.5",
    keywords: ["export to excel", "xlsx"],
  },
  {
    id: "export-csv",
    label: "Export to CSV",
    type: "export",
    fsdSectionId: "6.5",
    keywords: ["export to csv", "csv"],
  },
  {
    id: "export-pdf",
    label: "Export to PDF",
    type: "export",
    fsdSectionId: "6.5",
    keywords: ["export to pdf", "pdf"],
  },
  {
    id: "export-print",
    label: "Print Report",
    type: "export",
    fsdSectionId: "6.5",
    keywords: ["print report", "print preview", "browser print"],
  },
  {
    id: "results-table",
    label: "Duplicate Results Table",
    type: "table",
    fsdSectionId: "6.4",
    keywords: ["results grid", "results table", "duplicate records", "group id", "customer name", "match parameters"],
    tableHeaders: ["Group ID", "Customer ID", "Customer Name", "Match Parameters", "ID Number", "Compare"],
  },
  {
    id: "compare-button",
    label: "Compare Action Button",
    type: "button",
    fsdSectionId: "6.4",
    keywords: ["compare button", "compare modal", "open compare"],
  },
  {
    id: "pagination",
    label: "Pagination Controls",
    type: "pagination",
    fsdSectionId: "6.6",
    keywords: ["pagination", "next page", "previous page", "records per page"],
  },
  {
    id: "kyc-modal",
    label: "Customer KYC Comparison Modal",
    type: "modal",
    fsdSectionId: "7.1",
    keywords: ["compare modal", "kyc comparison modal", "customer kyc comparison"],
    elementId: "kycModal",
  },
  {
    id: "modal-header",
    label: "Compare Modal Header",
    type: "modal",
    fsdSectionId: "7.2",
    keywords: ["modal title", "modal subtitle", "match score", "matched via"],
    elementId: "modalTitle",
  },
  {
    id: "side-by-side-tab",
    label: "Side-by-Side Compare Tab",
    type: "tab",
    fsdSectionId: "7.3",
    keywords: ["side-by-side compare", "compare tab", "side by side"],
    elementId: "tabCompare",
  },
  {
    id: "matched-highlight",
    label: "Matched Field Highlighting",
    type: "modal",
    fsdSectionId: "7.4",
    keywords: ["highlighted", "matched field", "match notice banner"],
  },
  {
    id: "modal-close",
    label: "Modal Close Actions",
    type: "button",
    fsdSectionId: "7.1",
    keywords: ["close modal", "escape key", "overlay", "modal close"],
  },
  {
    id: "match-parameters-options",
    label: "All 11 Match Parameter Options",
    type: "filter",
    fsdSectionId: "5.3",
    keywords: [
      "date of birth",
      "national id",
      "passport",
      "driving license",
      "mobile number",
      "email address",
      "contact number",
      "corporate registration",
      "tax id",
      "pan",
      "imei",
      "imsi",
      "ip / mac",
    ],
    elementId: "msOptions",
  },
];

function htmlContainsControl(html: string, control: HtmlControl): boolean {
  if (control.elementId && html.includes(`id="${control.elementId}"`)) {
    return true;
  }
  for (const kw of control.keywords) {
    if (html.toLowerCase().includes(kw.toLowerCase())) {
      return true;
    }
  }
  if (control.tableHeaders?.some((h) => html.includes(h))) {
    return true;
  }
  return false;
}

export function buildHtmlInventory(htmlPath = DDS_HTML_PATH): HtmlInventory {
  const html = fs.readFileSync(htmlPath, "utf8");
  const controls = CONTROL_DEFS.filter((c) => htmlContainsControl(html, c));
  return {
    generatedAt: new Date().toISOString(),
    source: "pipeline/test-data/dedup-screening.html",
    controls,
  };
}

export function writeHtmlInventory(): HtmlInventory {
  const inventory = buildHtmlInventory();
  fs.mkdirSync(path.dirname(HTML_INVENTORY_PATH), { recursive: true });
  fs.writeFileSync(HTML_INVENTORY_PATH, JSON.stringify(inventory, null, 2), "utf-8");
  return inventory;
}

export function rowCoversHtmlControl(rowBlob: string, control: HtmlControl): boolean {
  const blob = rowBlob.toLowerCase();
  const label = control.label.toLowerCase();
  if (blob.includes(label)) return true;

  if (control.id === "export-csv" || control.id === "export-pdf") {
    if (/export format|select export|export to|export option|export menu|export panel/.test(blob)) {
      return true;
    }
  }

  const hits = control.keywords.filter((kw) => blob.includes(kw.toLowerCase()));
  return hits.length >= Math.min(2, control.keywords.length) || hits.some((h) => h.length > 10);
}
