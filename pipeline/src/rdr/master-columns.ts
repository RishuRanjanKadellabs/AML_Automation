import * as fs from "fs";
import * as path from "path";
import type { RdrExcelRow } from "./types";

const INVENTORY_PATH = path.resolve(__dirname, "../../../specs/rdr/html-inventory.json");

interface MasterTab {
  masterLabel: string;
  label: string;
  gridColumns: string[];
  defaultColumns: string[];
}

interface HtmlInventory {
  masterTabs: MasterTab[];
}

let cachedInventory: HtmlInventory | null = null;

function loadInventory(): HtmlInventory {
  if (!cachedInventory) {
    cachedInventory = JSON.parse(fs.readFileSync(INVENTORY_PATH, "utf-8")) as HtmlInventory;
  }
  return cachedInventory;
}

function normalizeMasterKey(name: string): string {
  return name.replace(/\s+master$/i, "").replace(/\s+/g, " ").trim().toLowerCase();
}

export function getMasterGridColumns(masterName: string): string[] {
  const inventory = loadInventory();
  const key = normalizeMasterKey(masterName);
  const tab =
    inventory.masterTabs.find((t) => normalizeMasterKey(t.masterLabel) === key) ??
    inventory.masterTabs.find((t) => normalizeMasterKey(t.label) === key) ??
    inventory.masterTabs.find((t) => key.includes(normalizeMasterKey(t.label)));
  return tab?.gridColumns ?? tab?.defaultColumns ?? [];
}

export function isCustomerMasterRow(row: Pick<RdrExcelRow, "subModule" | "masterName">): boolean {
  return /customer master/i.test(`${row.subModule} ${row.masterName}`);
}

const GARBAGE_COLUMN_PATTERNS = [
  /master grid fields/i,
  /\bverify displayed\b/i,
  /\band verify\b/i,
  /\bgrid fields\b/i,
  /\brequirement context\b/i,
  /\bprimary navigation\b/i,
  /\bshell group\b/i,
  /\bmaster tab\b/i,
  /\bfunctional validation\b/i,
  /\bbusiness validation\b/i,
  /\bdata validation\b/i,
  /\bnavigation validation\b/i,
  /\baudit validation\b/i,
  /\bsystem behaviour\b/i,
];

export function isPlausibleColumnName(column: string): boolean {
  const trimmed = column.trim();
  if (!trimmed || trimmed.length > 48) return false;
  if (GARBAGE_COLUMN_PATTERNS.some((p) => p.test(trimmed))) return false;
  if (/\b(master|grid|sidebar|breadcrumb|toolbar|modal|panel|scenario|records)\b/i.test(trimmed) && trimmed.split(" ").length > 4) {
    return false;
  }
  return true;
}

function columnMatchesInventory(column: string, allowed: string[]): boolean {
  if (allowed.length === 0) return true;
  const normalized = column.trim().toLowerCase();
  return allowed.some(
    (c) =>
      c.toLowerCase() === normalized ||
      normalized.includes(c.toLowerCase()) ||
      c.toLowerCase().includes(normalized),
  );
}

export function resolveColumnForMaster(column: string | null, row: RdrExcelRow): string | null {
  if (!column || !isPlausibleColumnName(column)) return null;
  const allowed = getMasterGridColumns(row.masterName);
  if (allowed.length === 0) return column;
  if (columnMatchesInventory(column, allowed)) return column;

  // Map common aliases within this master (e.g. "Currency Code" -> "ISO Code")
  const blob = column.toLowerCase();
  for (const col of allowed) {
    const cl = col.toLowerCase();
    if (blob.includes(cl) || cl.includes(blob)) return col;
  }
  if (/currency code|iso 4217/i.test(blob) && allowed.includes("ISO Code")) return "ISO Code";
  if (/currency name/i.test(blob) && allowed.includes("Name")) return "Name";
  if (/currency symbol/i.test(blob) && allowed.includes("Symbol")) return "Symbol";
  if (/country code/i.test(blob) && allowed.includes("Country")) return "Country";
  if (/customer type code/i.test(blob) && allowed.includes("Code")) return "Code";
  if (/customer type name/i.test(blob) && allowed.includes("Name")) return "Name";
  if (/high risk currency/i.test(blob) && allowed.includes("High Risk Flag")) return "High Risk Flag";

  return null;
}

export function shouldAssertCustomerIds(row: RdrExcelRow): boolean {
  return isCustomerMasterRow(row);
}

export function shouldAssertWatchlist(row: RdrExcelRow): boolean {
  if (!isCustomerMasterRow(row)) return false;
  const allowed = getMasterGridColumns(row.masterName);
  return allowed.some((c) => /watchlist/i.test(c)) || /watchlist|sanctions flag|pep flag/i.test(row.taskDescription);
}
