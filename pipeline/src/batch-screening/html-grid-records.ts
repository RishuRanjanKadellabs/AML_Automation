import * as fs from "fs";
import * as path from "path";
import { BS_HTML_PATH } from "./html-inventory";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const GRID_RECORDS_PATH = path.join(
  PROJECT_ROOT,
  "specs/batch-screening/grid-records.json",
);

export interface GridScreeningRecord {
  gridRow: number;
  customerName: string;
  customerId: string;
  matchedLists: number;
  score: number;
  listName: string;
  category: string;
  screeningType: string;
  matchDate: string;
  status: string;
}

function parseRowObject(line: string, gridRow: number): GridScreeningRecord | null {
  const name = line.match(/name:\s*'([^']*)'/)?.[1];
  const id = line.match(/id:\s*'([^']*)'/)?.[1];
  if (!name || !id) return null;

  const matched = parseInt(line.match(/matched:\s*([\d.]+)/)?.[1] ?? "0", 10);
  const score = parseFloat(line.match(/score:\s*([\d.]+)/)?.[1] ?? "0");
  const listName = line.match(/list:\s*'([^']*)'/)?.[1] ?? "";
  const category = line.match(/cat:\s*'([^']*)'/)?.[1] ?? "";
  const screeningType = line.match(/type:\s*'([^']*)'/)?.[1] ?? "";
  const matchDate = line.match(/date:\s*'([^']*)'/)?.[1] ?? "";
  const status = line.match(/status:\s*'([^']*)'/)?.[1] ?? "";

  return {
    gridRow,
    customerName: name,
    customerId: id,
    matchedLists: matched,
    score,
    listName,
    category,
    screeningType,
    matchDate,
    status,
  };
}

export function parseGridRecordsFromHtml(htmlPath = BS_HTML_PATH): GridScreeningRecord[] {
  const html = fs.readFileSync(htmlPath, "utf-8");
  const rowsMatch = html.match(/const ROWS\s*=\s*\[([\s\S]*?)\];/);
  if (!rowsMatch) {
    throw new Error("ROWS array not found in Batch Screening HTML.");
  }

  const records: GridScreeningRecord[] = [];
  const lines = rowsMatch[1].split("\n").filter((l) => l.trim().startsWith("{"));
  lines.forEach((line, index) => {
    const record = parseRowObject(line, index + 1);
    if (record) records.push(record);
  });

  return records;
}

let cachedRecords: GridScreeningRecord[] | null = null;

export function getAllGridRecords(): GridScreeningRecord[] {
  if (!cachedRecords) {
    cachedRecords = parseGridRecordsFromHtml();
  }
  return cachedRecords;
}

export function getGridRecords(limit = 5): GridScreeningRecord[] {
  return getAllGridRecords().slice(0, limit);
}

export function getRecordByRow(gridRow: number): GridScreeningRecord | undefined {
  return getAllGridRecords().find((r) => r.gridRow === gridRow);
}

export function findRecordByStatus(status: string): GridScreeningRecord | undefined {
  const normalized = status.toLowerCase();
  return getAllGridRecords().find((r) => r.status.toLowerCase() === normalized);
}

export function findRecordByScreeningType(screeningType: string): GridScreeningRecord | undefined {
  const normalized = screeningType.toLowerCase();
  return getAllGridRecords().find((r) => r.screeningType.toLowerCase() === normalized);
}

export function writeGridRecordsArtifact(): GridScreeningRecord[] {
  const records = parseGridRecordsFromHtml();
  cachedRecords = records;
  fs.mkdirSync(path.dirname(GRID_RECORDS_PATH), { recursive: true });
  fs.writeFileSync(
    GRID_RECORDS_PATH,
    JSON.stringify({ generatedAt: new Date().toISOString(), records }, null, 2),
    "utf-8",
  );
  return records;
}
