import * as fs from "fs";
import * as path from "path";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const HTML_V2_PATH = path.join(PROJECT_ROOT, "pipeline/test-data/Manual_screening_v2.html");
const HTML_V1_PATH = path.join(PROJECT_ROOT, "pipeline/test-data/Manual_screening.html");

export interface MsScreen {
  id: string;
  label: string;
  controls: string[];
}

export interface MsHtmlInventory {
  screens: MsScreen[];
  entityTypes: string[];
  watchlists: string[];
  purposes: string[];
  resultsColumns: string[];
  tabs: string[];
  matchReviewTabs: string[];
  flows: string[];
}

function readHtml(): string {
  if (fs.existsSync(HTML_V2_PATH)) {
    return fs.readFileSync(HTML_V2_PATH, "utf8");
  }
  return fs.existsSync(HTML_V1_PATH) ? fs.readFileSync(HTML_V1_PATH, "utf8") : "";
}

export function buildMsHtmlInventory(): MsHtmlInventory {
  const html = readHtml();

  const watchlists: string[] = [];
  const wlMatch = html.match(/const WATCHLISTS = \[([\s\S]*?)\];/);
  if (wlMatch) {
    for (const m of wlMatch[1].matchAll(/title:\s*'([^']+)'/g)) {
      watchlists.push(m[1]);
    }
  }

  const purposes: string[] = [];
  for (const m of html.matchAll(/<option[^>]*>([^<]+)<\/option>/g)) {
    const t = m[1].trim();
    if (/Screening|Clearance|Due Diligence|Review/.test(t) && t !== "Select purpose") {
      purposes.push(t);
    }
  }

  const controlsFromHtml = (pattern: RegExp): string[] => {
    const found = new Set<string>();
    const globalPattern = pattern.global ? pattern : new RegExp(pattern.source, `${pattern.flags}g`);
    for (const m of html.matchAll(globalPattern)) {
      found.add(m[1].trim());
    }
    return [...found];
  };

  const resultsColumns = [
    "Name",
    "Cust ID",
    "Number of Matched List",
    "Highest Match Score",
    "List Name With Highest Match Score",
    "Category",
    "Type",
    "Match Date",
    "Status",
  ];

  return {
    screens: [
      {
        id: "page-manual",
        label: "Manual Screening Form",
        controls: [
          "Manual Screening tab",
          "Bulk Upload tab",
          "Individual",
          "Non-Individuals",
          "Vessel",
          "Reset Form",
          "Start Screening",
          "View Last Results",
        ],
      },
      {
        id: "page-bulk",
        label: "Bulk Upload",
        controls: ["Upload zone", "Download Template", "Start Bulk Screening", "Watchlist cards"],
      },
      {
        id: "page-results",
        label: "Screening Results",
        controls: [
          "Back to Manual Screening",
          "Export Report",
          "New Screening",
          "Subject summary bar",
          "AI Screening Summary",
          "Stats row",
          "Filter Results",
          "Results table",
          "3 LISTS link",
          "Row action menu",
        ],
      },
      {
        id: "page-match-review",
        label: "Match Review",
        controls: [
          "Back to Screening Results",
          "Report",
          "False Positive",
          "Confirm Match",
          "AI Summary tab",
          "Match Details tab",
          "View Summary tab",
          "View Full Profile",
          "Escalate Case",
          "Comment modal",
        ],
      },
      {
        id: "page-bulk-results",
        label: "Bulk Screening Results",
        controls: ["Match Results tab", "Watchlists tab", "Bulk Upload tab", "Bulk Match Review"],
      },
    ],
    entityTypes: ["Individual", "Non-Individuals", "Vessel"],
    watchlists: [...new Set(watchlists)],
    purposes: [...new Set(purposes)],
    resultsColumns,
    tabs: ["Manual Screening", "Bulk Upload"],
    matchReviewTabs: controlsFromHtml(/switchRevTab\('([^']+)'\)/).map((tab) =>
      tab === "ai" ? "AI Summary" : tab === "match" ? "Match Details" : "View Summary",
    ),
    flows: [
      "Start Screening → Screening Results",
      "Screening Results → Match Review",
      "Match Review → Screening Results",
      "New Screening → Manual Screening Form",
      "View Last Results → Screening Results",
      "Start Bulk Screening → Bulk Results",
    ],
  };
}

export const MS_HTML_PATH = fs.existsSync(HTML_V2_PATH) ? HTML_V2_PATH : HTML_V1_PATH;

export function writeMsHtmlInventory(): MsHtmlInventory {
  const inventory = buildMsHtmlInventory();
  const outDir = path.join(PROJECT_ROOT, "specs/manual-screening");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "html-inventory.json"), JSON.stringify(inventory, null, 2));
  return inventory;
}
