import * as fs from "fs";
import * as path from "path";
import { BS_HTML_PATH } from "./html-inventory";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const HTML_NAVIGATION_PATH = path.join(
  PROJECT_ROOT,
  "specs/batch-screening/html-navigation.json",
);

export interface NavLink {
  id: string;
  label: string;
  type: "tab" | "link" | "button" | "filter" | "dropdown" | "pagination" | "back" | "modal";
  screen: string;
  targetScreen?: string;
  actionMenu?: boolean;
}

export interface HtmlNavigationMap {
  generatedAt: string;
  screens: Array<{ id: string; title: string }>;
  links: NavLink[];
  actionMenuItems: string[];
  filterChips: string[];
  reviewTabs: string[];
  landingGridLinks: string[];
}

function extractOpenCommentModalActions(html: string): string[] {
  const actions = new Set<string>();
  const re = /openCommentModal\('([^']+)'/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    actions.add(m[1]);
  }
  return [...actions];
}

export function buildHtmlNavigationMap(htmlPath = BS_HTML_PATH): HtmlNavigationMap {
  const html = fs.readFileSync(htmlPath, "utf-8");

  const screens = [
    { id: "screen-landing", title: "Match Results" },
    { id: "screen-p1", title: "Screening Results" },
    { id: "screen-review", title: "Match Review" },
  ];

  const links: NavLink[] = [];

  // Top tabs on Match Results
  for (const label of ["Match Results", "Watchlists", "Screening"]) {
    links.push({ id: `tab-${label}`, label, type: "tab", screen: "screen-landing" });
  }

  // Header controls on Match Results
  links.push({ id: "date-dd-btn", label: "Date Range Preset Dropdown", type: "dropdown", screen: "screen-landing" });
  for (const preset of [
    "Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Week", "Last Week",
    "This Month", "Last Month", "This Quarter", "Last Quarter", "This Year", "Last Year", "Custom Range",
  ]) {
    links.push({ id: `date-${preset}`, label: `Date Preset: ${preset}`, type: "dropdown", screen: "screen-landing" });
  }
  links.push({ id: "export-landing", label: "Export Report", type: "button", screen: "screen-landing" });

  // Filter chips
  const filterChips = ["Date Range", "Branch", "Customer ID", "Account No.", "Screening Type", "List Name"];
  for (const chip of filterChips) {
    links.push({ id: `filter-${chip}`, label: `${chip} Filter Chip`, type: "filter", screen: "screen-landing" });
    links.push({ id: `apply-${chip}`, label: `Apply ${chip} Filter`, type: "button", screen: "screen-landing" });
  }
  links.push({ id: "clear-filters", label: "Clear Filters", type: "button", screen: "screen-landing" });

  // Landing grid links
  const landingGridLinks = ["Customer Name Link", "Number Of Matched List Chip", "Actions Dropdown"];
  for (const gl of landingGridLinks) {
    links.push({
      id: gl.toLowerCase().replace(/\W+/g, "-"),
      label: gl,
      type: "link",
      screen: "screen-landing",
      targetScreen: gl.includes("Name") || gl.includes("Matched") ? "screen-p1" : undefined,
      actionMenu: gl.includes("Actions"),
    });
  }

  links.push({ id: "pagination-prev", label: "Pagination Previous", type: "pagination", screen: "screen-landing" });
  links.push({ id: "pagination-next", label: "Pagination Next", type: "pagination", screen: "screen-landing" });

  // Screening Results page
  links.push({ id: "back-to-landing", label: "Back to Match Results", type: "back", screen: "screen-p1", targetScreen: "screen-landing" });
  links.push({ id: "export-p1", label: "Export Report", type: "button", screen: "screen-p1" });
  links.push({ id: "new-screening", label: "New Screening", type: "button", screen: "screen-p1" });
  links.push({ id: "filter-results", label: "Filter Results", type: "button", screen: "screen-p1" });
  links.push({
    id: "matched-list-link",
    label: "Number Of Matched List Chip",
    type: "link",
    screen: "screen-p1",
    targetScreen: "screen-review",
  });

  // Match Review
  links.push({ id: "back-to-p1", label: "Back to Screening Results", type: "back", screen: "screen-review", targetScreen: "screen-p1" });
  links.push({ id: "report-btn", label: "Report", type: "button", screen: "screen-review" });
  links.push({ id: "false-positive", label: "False Positive", type: "button", screen: "screen-review" });
  links.push({ id: "confirm-match", label: "Confirm Match", type: "button", screen: "screen-review" });

  const reviewTabs = ["AI Summary", "Match Details", "View Summary"];
  for (const tab of reviewTabs) {
    links.push({ id: `review-tab-${tab}`, label: tab, type: "tab", screen: "screen-review" });
  }

  links.push({ id: "view-full-profile", label: "View Full Profile", type: "button", screen: "screen-review" });
  links.push({ id: "escalate-case", label: "Escalate Case", type: "button", screen: "screen-review" });

  // Comment modal
  links.push({ id: "modal-cancel", label: "Cancel", type: "modal", screen: "all" });
  links.push({ id: "modal-confirm", label: "Confirm Action", type: "modal", screen: "all" });

  const actionMenuItems = extractOpenCommentModalActions(html);
  for (const action of actionMenuItems) {
    if (!links.some((l) => l.label === action)) {
      links.push({
        id: `action-${action.toLowerCase().replace(/\W+/g, "-")}`,
        label: action,
        type: "button",
        screen: "screen-landing",
        actionMenu: true,
      });
    }
  }

  return {
    generatedAt: new Date().toISOString(),
    screens,
    links,
    actionMenuItems,
    filterChips,
    reviewTabs,
    landingGridLinks,
  };
}

export function writeHtmlNavigationMap(): HtmlNavigationMap {
  const map = buildHtmlNavigationMap();
  fs.mkdirSync(path.dirname(HTML_NAVIGATION_PATH), { recursive: true });
  fs.writeFileSync(HTML_NAVIGATION_PATH, JSON.stringify(map, null, 2), "utf-8");
  return map;
}

export function linksForScreen(map: HtmlNavigationMap, screenId: string): NavLink[] {
  return map.links.filter((l) => l.screen === screenId || l.screen === "all");
}
