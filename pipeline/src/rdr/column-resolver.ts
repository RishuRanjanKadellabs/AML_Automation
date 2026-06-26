import * as fs from "fs";
import * as path from "path";
import type { RdrExcelRow } from "./types";

const columnMapPath = path.resolve(__dirname, "../../../fixtures/rdr-column-map.json");
const COLUMN_MAP: Record<string, string | string[]> = JSON.parse(fs.readFileSync(columnMapPath, "utf8"));

function uiColumnName(mapped: string | string[]): string {
  return Array.isArray(mapped) ? mapped[0] : mapped;
}

function lookupExcelColumn(label: string): string | null {
  const trimmed = label.trim();
  if (COLUMN_MAP[trimmed]) {
    return uiColumnName(COLUMN_MAP[trimmed]);
  }
  const lower = trimmed.toLowerCase();
  for (const [key, value] of Object.entries(COLUMN_MAP)) {
    if (key.toLowerCase() === lower) {
      return uiColumnName(value);
    }
  }
  return null;
}

export function resolveColumnFromText(text: string): string | null {
  if (!text.trim()) return null;

  const patterns = [
    /review\s+(.+?)\s+column/i,
    /review\s+(.+?)\s+value/i,
    /verify\s+(.+?)\s+column/i,
    /observe\s+(.+?)\s+column/i,
    /validate\s+(.+?)\s+column/i,
    /compare\s+(.+?)\s+column/i,
    /check\s+(.+?)\s+column/i,
    /(?:^|\s)([A-Za-z0-9 /()%\-]+?)\s+column/i,
    /column[:\s]+([A-Za-z0-9 /()%\-]+)/i,
    /field[:\s]+([A-Za-z0-9 /()%\-]+)/i,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match?.[1]) {
      const resolved = lookupExcelColumn(match[1].trim());
      if (resolved) return resolved;
      const raw = match[1].trim();
      if (raw.length > 1 && raw.length < 60) return raw;
    }
  }

  return lookupExcelColumn(text);
}

export function extractColumnName(row: RdrExcelRow): string | null {
  const sources = [
    row.testSteps,
    row.taskDescription,
    row.acceptanceCriteria,
    row.expectedResult,
    row.testData,
  ];

  for (const source of sources) {
    const col = resolveColumnFromText(source);
    if (col) return col;
  }

  const blob = sources.join(" ").toLowerCase();
  const fallbacks: Array<{ pattern: RegExp; name: string }> = [
    { pattern: /customer id/i, name: "Customer ID" },
    { pattern: /customer type/i, name: "Customer Type" },
    { pattern: /full legal name/i, name: "Full Legal Name" },
    { pattern: /pep flag/i, name: "PEP Flag" },
    { pattern: /sanctions flag/i, name: "Sanctions Flag" },
    { pattern: /kyc status/i, name: "KYC Status" },
    { pattern: /risk rating/i, name: "Risk Rating" },
    { pattern: /onboarding date|date onboarded/i, name: "Onboarding Date" },
    { pattern: /last review/i, name: "Last Review Date" },
    { pattern: /account no|account number/i, name: "Account No" },
    { pattern: /document id/i, name: "Document ID" },
    { pattern: /address id/i, name: "Address ID" },
    { pattern: /ownership %|ownership percentage/i, name: "Ownership %" },
    { pattern: /iso code|currency code/i, name: "ISO Code" },
    { pattern: /industry code/i, name: "Industry Code" },
    { pattern: /cross border/i, name: "Cross Border" },
    { pattern: /high risk currency/i, name: "High Risk Currency" },
    { pattern: /risk level/i, name: "Risk Level" },
    { pattern: /country name/i, name: "Country Name" },
    { pattern: /region column|^region\b/i, name: "Region" },
    { pattern: /product name|displayed products/i, name: "Name" },
    { pattern: /record count|displayed record/i, name: "Customer ID" },
    { pattern: /branch code/i, name: "Code" },
    { pattern: /product code/i, name: "Code" },
    { pattern: /channel code/i, name: "Code" },
    { pattern: /\bstatus\b/i, name: "Status" },
    { pattern: /\bname\b/i, name: "Name" },
    { pattern: /\btype\b/i, name: "Type" },
    { pattern: /\bcode\b/i, name: "Code" },
  ];

  for (const { pattern, name } of fallbacks) {
    if (pattern.test(blob)) return name;
  }

  return null;
}

export function extractSearchTermFromStep(step: string): string | null {
  const locate = step.match(/locate\s+([A-Z0-9-]+)/i);
  if (locate?.[1]) return locate[1];
  const searchVal = step.match(/search(?:\s+for|\s+value)?\s+['"]?([^'".\n]+)/i);
  if (searchVal?.[1]) return searchVal[1].trim();
  return null;
}
