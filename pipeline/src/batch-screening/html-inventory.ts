import * as fs from "fs";
import * as path from "path";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const BS_HTML_PATH = path.join(
  PROJECT_ROOT,
  "pipeline/test-data/clari5-Batch-screening_updated.html",
);
export const HTML_INVENTORY_PATH = path.join(PROJECT_ROOT, "specs/batch-screening/html-inventory.json");

export interface HtmlControl {
  id: string;
  label: string;
  type: "tab" | "button" | "panel" | "screen" | "filter" | "table" | "field" | "modal" | "pagination";
  screen?: string;
  tableHeaders?: string[];
}

export interface HtmlInventory {
  generatedAt: string;
  source: string;
  screens: HtmlControl[];
  tabs: HtmlControl[];
  filters: HtmlControl[];
  buttons: HtmlControl[];
  tables: HtmlControl[];
  modals: HtmlControl[];
  gaps: HtmlControl[];
}

function stripTags(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function extractScreens(html: string): HtmlControl[] {
  const screens: HtmlControl[] = [];
  const re = /<div id="(screen-[^"]+)" class="screen/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    const id = m[1];
    const labelMap: Record<string, string> = {
      "screen-landing": "Match Results Landing",
      "screen-p1": "Screening Results Page",
      "screen-review": "Match Review Workspace",
    };
    screens.push({ id, label: labelMap[id] ?? id, type: "screen" });
  }
  return screens;
}

function extractTabs(html: string): HtmlControl[] {
  const tabs: HtmlControl[] = [];
  const labels = ["Match Results", "Manual Screening", "Watchlists"];
  for (const label of labels) {
    if (html.includes(label)) {
      tabs.push({
        id: label.toLowerCase().replace(/\W+/g, "-"),
        label,
        type: "tab",
        screen: "screen-landing",
      });
    }
  }
  const reviewTabs = ["AI Summary", "Match Details", "View Summary"];
  for (const label of reviewTabs) {
    if (html.includes(label)) {
      tabs.push({
        id: `review-${label.toLowerCase().replace(/\W+/g, "-")}`,
        label,
        type: "tab",
        screen: "screen-review",
      });
    }
  }
  return tabs;
}

function extractFilters(html: string): HtmlControl[] {
  const filterDefs = [
    { id: "fc-date", label: "Date Range" },
    { id: "fc-branch", label: "Branch" },
    { id: "fc-custid", label: "Customer ID" },
    { id: "fc-acct", label: "Account No." },
    { id: "fc-scrtype", label: "Screening Type" },
    { id: "fc-listname", label: "List Name" },
  ];
  return filterDefs
    .filter((f) => html.includes(`id="${f.id}"`))
    .map((f) => ({ ...f, type: "filter" as const, screen: "screen-landing" }));
}

function extractButtons(html: string): HtmlControl[] {
  const labels = [
    "Export Report",
    "Clear Filters",
    "Confirm Match",
    "False Positive",
    "Move to Case",
    "Move to Whitelist",
    "Move to Exception List",
    "View Details",
    "Actions",
  ];
  const buttons: HtmlControl[] = [];
  for (const label of labels) {
    if (html.includes(label)) {
      buttons.push({
        id: label.toLowerCase().replace(/\W+/g, "-"),
        label,
        type: "button",
      });
    }
  }
  return buttons;
}

function extractTableHeaders(html: string): HtmlControl[] {
  const tables: HtmlControl[] = [];
  const re = /<thead><tr>([\s\S]*?)<\/tr><\/thead>/gi;
  let m: RegExpExecArray | null;
  let idx = 0;
  while ((m = re.exec(html)) !== null) {
    const headers = [...m[1].matchAll(/<th[^>]*>([\s\S]*?)<\/th>/gi)].map((h) => stripTags(h[1]));
    if (headers.length > 0) {
      tables.push({
        id: `table-${idx++}`,
        label: headers.slice(0, 4).join(" / "),
        type: "table",
        tableHeaders: headers,
      });
    }
  }
  return tables;
}

function extractModals(html: string): HtmlControl[] {
  const modals: HtmlControl[] = [];
  if (/openCommentModal|comment-modal|Comment/i.test(html)) {
    modals.push({ id: "comment-modal", label: "Comment Modal", type: "modal" });
  }
  if (/pagination|pg-btn/i.test(html)) {
    modals.push({ id: "pagination", label: "Pagination Controls", type: "pagination" });
  }
  return modals;
}

function extractKnownGaps(html: string, filters: HtmlControl[], buttons: HtmlControl[]): HtmlControl[] {
  const gaps: HtmlControl[] = [];
  const gapLabels = [
    "Bulk Row Selection",
    "Export File Download Validation",
    "Audit History Panel",
    "Empty Results State",
    "Manual Stop Screening Tab",
    "Performance Load Indicator",
    "Network Error Banner",
  ];
  for (const label of gapLabels) {
    const covered =
      (label.includes("Export") && buttons.some((b) => b.label === "Export Report")) ||
      (label.includes("Empty") && html.includes("No records")) ||
      (label.includes("Audit") && /audit|trail/i.test(html)) ||
      (label.includes("Bulk") && html.includes("Bulk")) ||
      (label.includes("Manual") && html.includes("Manual Screening"));
    gaps.push({
      id: label.toLowerCase().replace(/\W+/g, "-"),
      label,
      type: "field",
    });
    if (!covered) {
      gaps[gaps.length - 1].screen = "gap";
    }
  }
  if (filters.length > 0) {
    gaps.push({ id: "all-filters-combined", label: "Combined Filter Application", type: "filter" });
  }
  return gaps;
}

export function buildHtmlInventory(htmlPath = BS_HTML_PATH): HtmlInventory {
  const html = fs.readFileSync(htmlPath, "utf-8");
  const screens = extractScreens(html);
  const tabs = extractTabs(html);
  const filters = extractFilters(html);
  const buttons = extractButtons(html);
  const tables = extractTableHeaders(html);
  const modals = extractModals(html);
  const gaps = extractKnownGaps(html, filters, buttons);

  return {
    generatedAt: new Date().toISOString(),
    source: htmlPath,
    screens,
    tabs,
    filters,
    buttons,
    tables,
    modals,
    gaps,
  };
}

export function writeHtmlInventory(): HtmlInventory {
  const inventory = buildHtmlInventory();
  fs.mkdirSync(path.dirname(HTML_INVENTORY_PATH), { recursive: true });
  fs.writeFileSync(HTML_INVENTORY_PATH, JSON.stringify(inventory, null, 2), "utf-8");
  return inventory;
}

export function screenForSubModule(subModule: string): string | null {
  const sm = subModule.toLowerCase();
  if (sm.includes("scr-01") || sm.includes("screening results")) return "screen-p1";
  if (sm.includes("match details") || sm.includes("ai summary") || sm.includes("view summary")) {
    return "screen-review";
  }
  return "screen-landing";
}
