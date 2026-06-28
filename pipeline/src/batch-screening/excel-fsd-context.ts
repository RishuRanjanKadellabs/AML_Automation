import * as fs from "fs";
import { FSD_CATALOG_PATH, getCatalogEntry, type FsdCatalogEntry } from "./fsd-catalog";
import { mapRowToFsd } from "./fsd-mapper";
import type { BsExcelRow } from "./types";

let catalog: FsdCatalogEntry[] = [];

export function initExcelFsdContext(): void {
  if (!fs.existsSync(FSD_CATALOG_PATH)) {
    catalog = [];
    return;
  }
  const raw = JSON.parse(fs.readFileSync(FSD_CATALOG_PATH, "utf8")) as { entries?: FsdCatalogEntry[] };
  catalog = raw.entries ?? [];
}

export function getFsdEntryForRow(row: BsExcelRow): FsdCatalogEntry | undefined {
  if (catalog.length === 0) {
    initExcelFsdContext();
  }
  const mapping = mapRowToFsd(row, []);
  return getCatalogEntry(catalog, mapping.fsdSectionId);
}
