import * as fs from "fs";
import * as path from "path";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const KGR_HTML_PATH = path.join(PROJECT_ROOT, "pipeline/test-data/customer360_v6.html");
export const HTML_INVENTORY_PATH = path.join(PROJECT_ROOT, "specs/kyc-gap-report/html-inventory.json");

export interface HtmlControl {
  id: string;
  label: string;
  type: "button" | "filter" | "column" | "kpi" | "modal" | "pagination" | "field" | "badge" | "panel";
  section?: string;
}

export interface HtmlInventory {
  generatedAt: string;
  source: string;
  pageTitle: string;
  pageSubtitle: string;
  route: string;
  buttons: HtmlControl[];
  filters: HtmlControl[];
  kpiCards: HtmlControl[];
  gridColumns: HtmlControl[];
  modalFields: HtmlControl[];
  paginationControls: HtmlControl[];
  gaps: HtmlControl[];
}

const LANDING_GRID_COLUMNS = [
  "Customer",
  "Customer ID",
  "Type",
  "Branch",
  "Branch Code",
  "Template Applied",
  "KYC Gap Score",
  "Priority",
  "Actions",
];

const LANDING_FILTERS = [
  "Search",
  "Branch",
  "Customer Type",
  "Template",
  "Priority",
  "Gap Score Min",
  "Gap Score Max",
  "Clear Filters",
];

const KPI_CARDS = [
  "Total Customers (CBS)",
  "Customers with Gaps",
  "Critical Priority",
  "High Priority",
  "Medium Priority",
  "Low Priority",
];

const MODAL_FIELDS = [
  "Customer Name",
  "CIF ID",
  "Branch Name",
  "Branch Code",
  "Template Applied",
  "Missing Fields List",
  "Gap Type Badge",
  "Score Summary",
];

const PAGE_BUTTONS = ["Export", "Refresh", "View"];

const PAGINATION = ["Items per page", "Previous", "Next", "Page indicator", "Item range"];

function stripTags(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function extractC360GapPanel(html: string): string {
  const start = html.indexOf("panel-kycgap");
  if (start < 0) return "";
  const end = html.indexOf("/panel-kycgap", start);
  return end > start ? html.slice(start, end) : html.slice(start, start + 8000);
}

export function buildHtmlInventory(): HtmlInventory {
  const html = fs.existsSync(KGR_HTML_PATH) ? fs.readFileSync(KGR_HTML_PATH, "utf-8") : "";
  const panel = extractC360GapPanel(html);

  const buttons: HtmlControl[] = PAGE_BUTTONS.map((label) => ({
    id: label.toLowerCase().replace(/\s+/g, "-"),
    label,
    type: "button",
    section: "landing",
  }));

  const filters: HtmlControl[] = LANDING_FILTERS.map((label) => ({
    id: label.toLowerCase().replace(/\s+/g, "-"),
    label,
    type: "filter",
    section: "landing",
  }));

  const kpiCards: HtmlControl[] = KPI_CARDS.map((label) => ({
    id: label.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    label,
    type: "kpi",
    section: "landing",
  }));

  const gridColumns: HtmlControl[] = LANDING_GRID_COLUMNS.map((label) => ({
    id: label.toLowerCase().replace(/\s+/g, "-"),
    label,
    type: "column",
    section: "grid",
  }));

  const modalFields: HtmlControl[] = MODAL_FIELDS.map((label) => ({
    id: label.toLowerCase().replace(/\s+/g, "-"),
    label,
    type: "field",
    section: "modal",
  }));

  if (panel.includes("Missing Fields Detail")) {
    modalFields.push({ id: "missing-fields-detail", label: "Missing Fields Detail (C360 tab)", type: "field", section: "c360-tab" });
  }

  const paginationControls: HtmlControl[] = PAGINATION.map((label) => ({
    id: label.toLowerCase().replace(/\s+/g, "-"),
    label,
    type: "pagination",
    section: "landing",
  }));

  const gaps: HtmlControl[] = [
    { id: "refresh-btn", label: "Refresh button", type: "button", section: "landing" },
    { id: "breadcrumb", label: "Breadcrumb navigation", type: "panel", section: "landing" },
    { id: "type-badge-color", label: "Type colour-coded badge", type: "badge", section: "grid" },
    { id: "score-color-label", label: "Score colour-coded risk label", type: "badge", section: "grid" },
    { id: "no-edit-btn", label: "Edit button absence", type: "button", section: "grid" },
    { id: "no-bulk-notify", label: "Bulk Notify absence", type: "button", section: "landing" },
    { id: "no-missing-fields-col", label: "Missing Fields column absence", type: "column", section: "grid" },
    { id: "no-gap-type-col", label: "Gap Type column absence", type: "column", section: "grid" },
    { id: "item-range", label: "Item range A-B of N", type: "pagination", section: "landing" },
    { id: "keyboard-nav", label: "Keyboard navigation", type: "panel", section: "accessibility" },
    { id: "aria-roles", label: "ARIA roles", type: "panel", section: "accessibility" },
    { id: "load-performance", label: "Page load performance", type: "panel", section: "performance" },
  ];

  return {
    generatedAt: new Date().toISOString(),
    source: "KYC Gap Report live UI + KycGapReportLocators + FSD §4",
    pageTitle: "KYC Gap Report",
    pageSubtitle: "Missing or expired KYC fields — CBS & DMS import vs. template requirements",
    route: "/kyc/kyc-gap-report",
    buttons,
    filters,
    kpiCards,
    gridColumns,
    modalFields,
    paginationControls,
    gaps,
  };
}

export function writeHtmlInventory(): HtmlInventory {
  const inventory = buildHtmlInventory();
  fs.mkdirSync(path.dirname(HTML_INVENTORY_PATH), { recursive: true });
  fs.writeFileSync(HTML_INVENTORY_PATH, JSON.stringify(inventory, null, 2), "utf-8");
  return inventory;
}

export function submoduleForControl(control: HtmlControl): string {
  if (control.section === "modal") return "KYC Gap Report - Gap Detail Modal";
  if (control.section === "grid") return "KYC Gap Report - Report Grid";
  if (control.type === "kpi") return "KYC Gap Report - KPI Cards";
  if (control.type === "filter") return "KYC Gap Report - Search & Filters";
  if (control.type === "pagination") return "KYC Gap Report - Pagination";
  if (control.section === "accessibility" || control.section === "performance") {
    return "KYC Gap Report - Security & Audit";
  }
  return "KYC Gap Report";
}
