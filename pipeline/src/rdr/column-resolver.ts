import * as fs from "fs";
import * as path from "path";
import type { RdrExcelRow } from "./types";
import {
  getMasterGridColumns,
  isCustomerMasterRow,
  isPlausibleColumnName,
  resolveColumnForMaster,
} from "./master-columns";

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
      if (isPlausibleColumnName(raw)) return raw;
    }
  }

  const mapped = lookupExcelColumn(text);
  return mapped && isPlausibleColumnName(mapped) ? mapped : null;
}

function extractRawColumnName(row: RdrExcelRow): string | null {
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
  const allowed = getMasterGridColumns(row.masterName);

  const fallbacks: Array<{ pattern: RegExp; name: string; customerOnly?: boolean }> = [
    { pattern: /customer id/i, name: "Customer ID", customerOnly: true },
    { pattern: /customer type/i, name: "Customer Type", customerOnly: true },
    { pattern: /full legal name/i, name: "Full Legal Name", customerOnly: true },
    { pattern: /pep flag/i, name: "PEP Flag", customerOnly: true },
    { pattern: /sanctions flag/i, name: "Sanctions Flag", customerOnly: true },
    { pattern: /kyc status/i, name: "KYC Status", customerOnly: true },
    { pattern: /risk rating/i, name: "Risk Rating", customerOnly: true },
    { pattern: /onboarding date|date onboarded/i, name: "Onboarding Date", customerOnly: true },
    { pattern: /last review/i, name: "Last Review Date", customerOnly: true },
    { pattern: /account no|account number/i, name: "Account No" },
    { pattern: /document id/i, name: "Document ID" },
    { pattern: /address id/i, name: "Address ID" },
    { pattern: /ownership %|ownership percentage/i, name: "Ownership %" },
    { pattern: /iso code|currency code/i, name: "ISO Code" },
    { pattern: /industry code/i, name: "Industry Code" },
    { pattern: /cross border/i, name: "Cross Border" },
    { pattern: /high risk currency/i, name: "High Risk Flag" },
    { pattern: /risk level/i, name: "Risk Level" },
    { pattern: /country name/i, name: "Country Name" },
    { pattern: /region column|^region\b/i, name: "Region" },
    { pattern: /product name|displayed products/i, name: "Name" },
    { pattern: /branch code/i, name: "Code" },
    { pattern: /product code/i, name: "Code" },
    { pattern: /channel code/i, name: "Code" },
    { pattern: /\bstatus\b/i, name: "Status" },
    { pattern: /\bname\b/i, name: "Name" },
    { pattern: /\btype\b/i, name: "Type" },
    { pattern: /\bcode\b/i, name: "Code" },
  ];

  for (const { pattern, name, customerOnly } of fallbacks) {
    if (customerOnly && !isCustomerMasterRow(row)) continue;
    if (pattern.test(blob)) {
      if (allowed.length === 0 || allowed.some((c) => c.toLowerCase() === name.toLowerCase())) {
        return name;
      }
      const alias = resolveColumnForMaster(name, row);
      if (alias) return alias;
    }
  }

  return null;
}

export function extractColumnName(row: RdrExcelRow): string | null {
  const raw = extractRawColumnName(row);
  return resolveColumnForMaster(raw, row);
}

export function extractSearchTermFromStep(step: string): string | null {
  const locate = step.match(/locate\s+([A-Z0-9][A-Z0-9-]+)/i);
  if (locate?.[1] && isConcreteSearchValue(locate[1])) return locate[1];

  const quoted = step.match(
    /search(?:es|ing)?(?:\s+for|\s+value|\s+using|\s+with)?\s+["']([^"']+)["']/i,
  );
  if (quoted?.[1] && isConcreteSearchValue(quoted[1])) return quoted[1].trim();

  const unquoted = step.match(
    /search(?:es|ing)?(?:\s+for|\s+value|\s+using|\s+with)?\s+([^.\n]+)/i,
  );
  if (unquoted?.[1]) {
    const candidate = unquoted[1].trim();
    if (isConcreteSearchValue(candidate)) return candidate;
  }
  return null;
}

const NARRATIVE_SEARCH_WORDS =
  /\b(and|or|then|verify|ensure|enter|displayed|shown|messaging|matching|records?|results?|value|valid|non-?matching|empty|state|system|user|the|that|with|for|using|is|are|be|should|expected|message)\b/i;

/**
 * Excel expected-result narratives frequently embed phrases like
 * "search value and verify matching records are displayed". Those are outcomes,
 * not literal search terms, so we only accept concrete tokens (IDs, codes, or a
 * short value of at most three words) as real search input.
 */
function isConcreteSearchValue(value: string): boolean {
  const v = value.trim();
  if (!v || v.length > 24) return false;
  if (NARRATIVE_SEARCH_WORDS.test(v)) {
    // Allow a single concrete identifier/code token even if it trips a stopword.
    return /^[A-Z0-9][A-Z0-9_-]*$/i.test(v) && v.split(/\s+/).length === 1;
  }
  return v.split(/\s+/).length <= 3;
}
