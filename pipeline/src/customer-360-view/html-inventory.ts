import * as fs from "fs";
import * as path from "path";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const C360_HTML_PATH = path.join(PROJECT_ROOT, "pipeline/test-data/customer360_v6.html");
export const HTML_INVENTORY_PATH = path.join(PROJECT_ROOT, "specs/customer-360-view/html-inventory.json");

export interface HtmlControl {
  id: string;
  label: string;
  type: "tab" | "button" | "panel" | "card" | "table" | "kpi" | "field" | "link" | "chart" | "toggle";
  panel?: string;
  tableHeaders?: string[];
}

export interface HtmlInventory {
  generatedAt: string;
  source: string;
  tabs: HtmlControl[];
  panels: HtmlControl[];
  cards: HtmlControl[];
  buttons: HtmlControl[];
  kpiTiles: HtmlControl[];
  tables: HtmlControl[];
  gaps: HtmlControl[];
}

function stripTags(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function extractIds(html: string, pattern: RegExp): string[] {
  const ids: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = pattern.exec(html)) !== null) {
    if (m[1]) ids.push(m[1]);
  }
  return ids;
}

function extractTabLabels(html: string): HtmlControl[] {
  const re = /switchTab\('([^']+)'[^>]*>[\s\S]*?<\/span>\s*([^<]+)</gi;
  const tabs: HtmlControl[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    tabs.push({
      id: m[1],
      label: m[2].trim(),
      type: "tab",
      panel: `panel-${m[1] === "kyccdd" ? "kyccdd" : m[1] === "regrep" ? "regrep" : m[1]}`,
    });
  }
  return tabs;
}

function extractCardHeads(html: string): HtmlControl[] {
  const cards: HtmlControl[] = [];
  const re = /<div class="card-head"[^>]*>([\s\S]*?)<\/div>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    const label = stripTags(m[1]).replace(/\s*Preview\s*$/i, "").trim();
    if (label.length > 2 && label.length < 80) {
      const idMatch = m[0].match(/id="([^"]+)"/);
      cards.push({
        id: idMatch?.[1] ?? label.toLowerCase().replace(/\W+/g, "-"),
        label,
        type: "card",
      });
    }
  }
  return cards;
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
        label: headers.join(" / "),
        type: "table",
        tableHeaders: headers,
      });
    }
  }
  return tables;
}

function extractKpiTiles(html: string): HtmlControl[] {
  const kpis: HtmlControl[] = [];
  const labels = [
    { id: "ovRiskVal", label: "Risk Profile KPI" },
    { id: "ovKycVal", label: "KYC Status KPI" },
    { id: "ovAlertsVal", label: "Active Alerts KPI" },
    { id: "ovAccountsVal", label: "Total Accounts KPI" },
    { id: "ovRegVal", label: "Regulatory Reports KPI" },
    { id: "ovGapScore", label: "KYC Gap Score KPI" },
  ];
  for (const k of labels) {
    if (html.includes(`id="${k.id}"`)) {
      kpis.push({ id: k.id, label: k.label, type: "kpi", panel: "panel-overview" });
    }
  }
  return kpis;
}

function extractButtons(html: string): HtmlControl[] {
  const buttons: HtmlControl[] = [];
  const patterns = [
    { id: "btnIndividual", label: "Individual customer type", type: "button" as const },
    { id: "btnNonIndividual", label: "Non-Individual customer type", type: "button" as const },
  ];
  for (const p of patterns) {
    if (html.includes(`id="${p.id}"`)) buttons.push(p);
  }
  const btnRe = /<button[^>]*>([\s\S]*?)<\/button>/gi;
  let m: RegExpExecArray | null;
  let idx = 0;
  while ((m = btnRe.exec(html)) !== null) {
    const label = stripTags(m[0]).slice(0, 60);
    const idMatch = m[0].match(/id="([^"]+)"/);
    if (label && !buttons.some((b) => b.label === label)) {
      buttons.push({
        id: idMatch?.[1] ?? `btn-${idx++}`,
        label,
        type: "button",
      });
    }
  }
  return buttons;
}

function extractPanels(html: string): HtmlControl[] {
  const re = /<div class="panel[^"]*" id="(panel-[^"]+)"/gi;
  const panels: HtmlControl[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    panels.push({
      id: m[1],
      label: m[1].replace("panel-", "").replace(/-/g, " "),
      type: "panel",
    });
  }
  return panels;
}

/** Controls present in HTML that often lack dedicated Excel coverage */
function extractKnownGaps(html: string, cards: HtmlControl[]): HtmlControl[] {
  const gaps: HtmlControl[] = [];
  const gapLabels = [
    "Personal Details",
    "Employment & Segment",
    "Onboarding & KYC",
    "Contact Addresses",
    "Recent Activity",
    "Regulatory Status",
    "Filing Calendar",
    "LEA Requests",
    "MoA/AoA Update",
    "GSTIN Certificate",
    "Board Resolution",
    "Graphical Link Analysis",
    "Watchlist Matches",
    "Power of Attorney",
    "CDD / EDD Triggers",
    "Risk Rating History",
  ];
  for (const label of gapLabels) {
    const found = cards.some((c) => c.label.includes(label.split(" ")[0]));
    const inHtml = html.includes(label) || html.includes(label.replace("&", "&amp;"));
    if (inHtml && !found) {
      gaps.push({ id: label.toLowerCase().replace(/\W+/g, "-"), label, type: "card" });
    } else if (inHtml) {
      gaps.push({ id: label.toLowerCase().replace(/\W+/g, "-"), label, type: "card" });
    }
  }
  return gaps;
}

export function buildHtmlInventory(htmlPath = C360_HTML_PATH): HtmlInventory {
  const html = fs.readFileSync(htmlPath, "utf-8");
  const tabs = extractTabLabels(html);
  const panels = extractPanels(html);
  const cards = extractCardHeads(html);
  const buttons = extractButtons(html);
  const kpiTiles = extractKpiTiles(html);
  const tables = extractTableHeaders(html);
  const gaps = extractKnownGaps(html, cards);

  return {
    generatedAt: new Date().toISOString(),
    source: htmlPath,
    tabs,
    panels,
    cards,
    buttons,
    kpiTiles,
    tables,
    gaps,
  };
}

export function writeHtmlInventory(): HtmlInventory {
  const inventory = buildHtmlInventory();
  fs.mkdirSync(path.dirname(HTML_INVENTORY_PATH), { recursive: true });
  fs.writeFileSync(HTML_INVENTORY_PATH, JSON.stringify(inventory, null, 2), "utf-8");
  return inventory;
}

export function panelForSubModule(subModule: string): string | null {
  const map: Record<string, string> = {
    "Overview Tab": "panel-overview",
    "Risk Visualization": "panel-overview",
    "Relationships Tab": "panel-relationships",
    "Screening Tab": "panel-screening",
    "Risk Tab": "panel-risk",
    "KYC/CDD Tab": "panel-kyccdd",
    "Accounts Tab": "panel-accounts",
    "Transactions Tab": "panel-transactions",
    "Alerts Tab": "panel-alerts",
    "Regulatory Reports Tab": "panel-regrep",
    "KYC Gap Report Tab": "panel-kycgap",
    "Audit Tab": "panel-audit",
  };
  return map[subModule] ?? null;
}
