import * as fs from "fs";
import * as path from "path";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const RDR_HTML_PATH = path.join(
  PROJECT_ROOT,
  "pipeline/test-data/clari5-reference-data-register-v6.html",
);
export const HTML_INVENTORY_PATH = path.join(PROJECT_ROOT, "specs/rdr/html-inventory.json");

export interface HtmlControlRef {
  id: string;
  label: string;
  present: boolean;
  elementId?: string;
  notes?: string;
}

export interface ShellGroup {
  key: string;
  label: string;
  sectionId: string;
  navGroupId: string;
  sidebarLabel: string;
  firstTab: string;
  description: string;
  masterTabIds: string[];
}

export interface MasterTab {
  id: string;
  label: string;
  buttonId: string;
  shellGroupKey: string;
  shellGroup: string;
  masterLabel: string;
  gridColumns: string[];
  defaultColumns: string[];
  hasKpis: boolean;
  hasFilterBar: boolean;
}

export interface HtmlInventory {
  generatedAt: string;
  source: string;
  shellGroups: ShellGroup[];
  masterTabs: MasterTab[];
  commonControls: {
    search: HtmlControlRef;
    filters: HtmlControlRef;
    exportCsv: HtmlControlRef;
    exportExcel: HtmlControlRef;
    refreshCbs: HtmlControlRef;
    columnSelector: HtmlControlRef;
    pagination: HtmlControlRef;
    viewAction: HtmlControlRef;
    detailModal: HtmlControlRef;
    breadcrumb: HtmlControlRef;
    kpiCards: HtmlControlRef;
    toast: HtmlControlRef;
    stickyHeader: HtmlControlRef;
  };
}

const COUNTRY_MASTER_COLUMNS = [
  "Country Name",
  "ISO Alpha-2",
  "ISO Alpha-3",
  "Region",
  "Risk Level",
  "Risk Reasons",
  "Status",
  "Actions",
];

const SHELL_GROUP_KEYS = ["customer", "instruments", "network", "reference", "employee"] as const;

function stripEmoji(text: string): string {
  return text.replace(/^[^\w]+/u, "").trim();
}

function extractMasterConfig(html: string): Map<
  string,
  { section: string; navGroup: string; firstTab: string; title: string; desc: string }
> {
  const config = new Map<
    string,
    { section: string; navGroup: string; firstTab: string; title: string; desc: string }
  >();
  const re =
    /(\w+):\s*\{\s*section:'([^']+)',\s*navGroup:'([^']+)',\s*firstTab:'([^']+)',\s*title:'([^']+)',\s*desc:'([^']+)'\s*\}/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    config.set(m[1], {
      section: m[2],
      navGroup: m[3],
      firstTab: m[4],
      title: m[5],
      desc: m[6],
    });
  }
  return config;
}

function extractSidebarLabels(html: string): Map<string, string> {
  const labels = new Map<string, string>();
  const re =
    /<div class="nav-c[^"]*" id="snc-(\w+)"[^>]*>[\s\S]*?<\/span>([^<]+)</gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    labels.set(m[1], m[2].replace(/&amp;/g, "&").trim());
  }
  return labels;
}

function extractMasterTabsFromNav(html: string): Array<{ id: string; label: string; buttonId: string; shellGroupKey: string }> {
  const tabs: Array<{ id: string; label: string; buttonId: string; shellGroupKey: string }> = [];
  const groupRe = /<div class="mnav-grp[^"]*" id="mnav-(\w+)">([\s\S]*?)<\/div>/gi;
  let groupMatch: RegExpExecArray | null;
  while ((groupMatch = groupRe.exec(html)) !== null) {
    const shellGroupKey = groupMatch[1];
    const groupHtml = groupMatch[2];
    const btnRe =
      /<button class="mnav-btn[^"]*"[^>]*id="([^"]+)"[^>]*onclick="showTab\('([^']+)'\)"[^>]*>([^<]+)</gi;
    let btnMatch: RegExpExecArray | null;
    while ((btnMatch = btnRe.exec(groupHtml)) !== null) {
      tabs.push({
        buttonId: btnMatch[1],
        id: btnMatch[2],
        label: stripEmoji(btnMatch[3]),
        shellGroupKey,
      });
    }
  }
  return tabs;
}

interface TableDef {
  label: string;
  defaultColumns: string[];
  gridColumns: string[];
  hasKpis: boolean;
  hasFilterBar: boolean;
}

function extractTableDefs(html: string): Map<string, TableDef> {
  const tables = new Map<string, TableDef>();
  const tablesStart = html.indexOf("const TABLES = {");
  const tablesEnd = html.indexOf("}; // end TABLES");
  if (tablesStart < 0 || tablesEnd < 0) return tables;

  const block = html.slice(tablesStart, tablesEnd);
  const tabRe = /\n(\w+):\s*\{/g;
  const tabIds: Array<{ id: string; start: number }> = [];
  let tabMatch: RegExpExecArray | null;
  while ((tabMatch = tabRe.exec(block)) !== null) {
    tabIds.push({ id: tabMatch[1], start: tabMatch.index });
  }

  for (let i = 0; i < tabIds.length; i++) {
    const { id, start } = tabIds[i];
    const end = i + 1 < tabIds.length ? tabIds[i + 1].start : block.length;
    const tabBlock = block.slice(start, end);

    if (tabBlock.includes("_customRender: true")) {
      tables.set(id, {
        label: tabBlock.match(/label:'([^']*)'/)?.[1] ?? id,
        defaultColumns: [],
        gridColumns: [...COUNTRY_MASTER_COLUMNS],
        hasKpis: false,
        hasFilterBar: tabBlock.includes("cm-filters") || html.includes("cm-filters"),
      });
      continue;
    }

    const label = tabBlock.match(/label:'([^']*)'/)?.[1] ?? id;
    const defaultKeys = [
      ...(tabBlock.match(/defaultCols:\[([^\]]*)\]/)?.[1]?.match(/'([^']+)'/g) ?? []).map((k) =>
        k.replace(/'/g, ""),
      ),
    ];
    const colEntries = [...tabBlock.matchAll(/\{k:'([^']+)',l:'([^']+)'\}/g)].map((m) => ({
      key: m[1],
      label: m[2],
    }));
    const keyToLabel = new Map(colEntries.map((c) => [c.key, c.label]));
    const defaultColumns = defaultKeys.map((k) => keyToLabel.get(k) ?? k);
    const gridColumns = colEntries.map((c) => c.label);

    tables.set(id, {
      label,
      defaultColumns,
      gridColumns,
      hasKpis: /kpis:\[/.test(tabBlock),
      hasFilterBar: /filterCIF:|filterCustType:|filter-bar/.test(tabBlock),
    });
  }

  return tables;
}

function buildCommonControls(html: string): HtmlInventory["commonControls"] {
  const hasColumnSelector = html.includes("colSelDropdown") || html.includes("openColSel(");
  const hasKpiStrip = html.includes("kpi-strip") || html.includes("kpis:[");
  const hasFilterBar =
    html.includes("filter-bar") || html.includes("cm-filters") || html.includes("filterCIF");
  const hasStickyHeader = html.includes("thead{position:sticky") || html.includes("position:sticky;top:0");

  return {
    search: {
      id: "search",
      label: "Search",
      present: html.includes("tab-search-input") || html.includes("tb-search-box"),
      elementId: "tab-search-input",
    },
    filters: {
      id: "filters",
      label: "Filters",
      present: hasFilterBar,
      notes: "Per-tab filter bars (CIF, customer type, country region/risk)",
    },
    exportCsv: {
      id: "export-csv",
      label: "Export CSV",
      present: html.includes("exportTab(") && html.includes("'csv'"),
    },
    exportExcel: {
      id: "export-excel",
      label: "Export Excel",
      present: html.includes("exportTab(") && html.includes("'xls'"),
    },
    refreshCbs: {
      id: "refresh-cbs",
      label: "Refresh CBS",
      present: html.includes("Refresh CBS"),
      notes: "Rendered disabled unless real-time CBS API integration is enabled",
    },
    columnSelector: {
      id: "column-selector",
      label: "Column Selector",
      present: hasColumnSelector,
      elementId: "colSelDropdown",
      notes: "Customer & Account Data masters only",
    },
    pagination: {
      id: "pagination",
      label: "Pagination",
      present: /pagination|page-size|records per page|items per page/i.test(html),
      notes: "Not present in v6 HTML — grids use scrollable tbl-wrap",
    },
    viewAction: {
      id: "view-action",
      label: "View Action",
      present: html.includes("openDetailModal(") || html.includes("cmOpenView("),
    },
    detailModal: {
      id: "detail-modal",
      label: "Detail Modal",
      present: html.includes('id="detailModal"') || html.includes("cm-view-panel"),
      elementId: "detailModal",
    },
    breadcrumb: {
      id: "breadcrumb",
      label: "Breadcrumb",
      present: html.includes("pg-crumb") || html.includes("pgBreadcrumb"),
      elementId: "pgBreadcrumb",
    },
    kpiCards: {
      id: "kpi-cards",
      label: "KPI Cards",
      present: hasKpiStrip,
      notes: "kpi-strip on Customer master tab",
    },
    toast: {
      id: "toast",
      label: "Toast",
      present: html.includes('id="toast"') && html.includes("function toast("),
      elementId: "toast",
    },
    stickyHeader: {
      id: "sticky-header",
      label: "Sticky Header",
      present: hasStickyHeader,
      notes: "Table thead sticky within scrollable grid",
    },
  };
}

export function buildHtmlInventory(htmlPath = RDR_HTML_PATH): HtmlInventory {
  const html = fs.readFileSync(htmlPath, "utf-8");
  const masterConfig = extractMasterConfig(html);
  const sidebarLabels = extractSidebarLabels(html);
  const navTabs = extractMasterTabsFromNav(html);
  const tableDefs = extractTableDefs(html);

  const shellGroups: ShellGroup[] = SHELL_GROUP_KEYS.map((key) => {
    const cfg = masterConfig.get(key);
    const masterTabIds = navTabs.filter((t) => t.shellGroupKey === key).map((t) => t.id);
    return {
      key,
      label: cfg?.title ?? key,
      sectionId: cfg?.section ?? `ms-${key}`,
      navGroupId: cfg?.navGroup ?? `mnav-${key}`,
      sidebarLabel: sidebarLabels.get(key) ?? cfg?.title ?? key,
      firstTab: cfg?.firstTab ?? masterTabIds[0] ?? "",
      description: cfg?.desc ?? "",
      masterTabIds,
    };
  });

  const masterTabs: MasterTab[] = navTabs.map((tab) => {
    const shellCfg = masterConfig.get(tab.shellGroupKey);
    const def = tableDefs.get(tab.id);
    return {
      id: tab.id,
      label: tab.label,
      buttonId: tab.buttonId,
      shellGroupKey: tab.shellGroupKey,
      shellGroup: shellCfg?.title ?? tab.shellGroupKey,
      masterLabel: def?.label ?? tab.label,
      gridColumns: def?.gridColumns ?? [],
      defaultColumns: def?.defaultColumns ?? [],
      hasKpis: def?.hasKpis ?? false,
      hasFilterBar: def?.hasFilterBar ?? false,
    };
  });

  return {
    generatedAt: new Date().toISOString(),
    source: htmlPath,
    shellGroups,
    masterTabs,
    commonControls: buildCommonControls(html),
  };
}

export function writeHtmlInventory(): HtmlInventory {
  const inventory = buildHtmlInventory();
  fs.mkdirSync(path.dirname(HTML_INVENTORY_PATH), { recursive: true });
  fs.writeFileSync(HTML_INVENTORY_PATH, JSON.stringify(inventory, null, 2), "utf-8");
  return inventory;
}

export function shellGroupForTab(tabId: string, inventory: HtmlInventory): ShellGroup | undefined {
  const tab = inventory.masterTabs.find((t) => t.id === tabId);
  if (!tab) return undefined;
  return inventory.shellGroups.find((g) => g.key === tab.shellGroupKey);
}

function normalizeLabel(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export function getMasterTab(masterName: string, inventory: HtmlInventory): MasterTab | undefined {
  const target = normalizeLabel(masterName).replace(/\bmaster\b/g, "").trim();
  return inventory.masterTabs.find((tab) => {
    const candidates = [tab.label, tab.masterLabel, tab.id];
    return candidates.some((candidate) => {
      const normalized = normalizeLabel(candidate).replace(/\bmaster\b/g, "").trim();
      return normalized === target || normalized.includes(target) || target.includes(normalized);
    });
  });
}
