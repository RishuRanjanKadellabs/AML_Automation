import * as fs from "fs";
import * as path from "path";
import { loadBsFsdSections, type FsdSection } from "./fsd-index";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const FSD_CATALOG_PATH = path.join(PROJECT_ROOT, "specs/batch-screening/fsd-catalog.json");

export interface FsdRequirementBullet {
  text: string;
  category: "field" | "rule" | "validation" | "navigation" | "audit" | "general";
}

export interface FsdCatalogEntry {
  id: string;
  title: string;
  module: string;
  summary: string;
  bullets: FsdRequirementBullet[];
  businessRules: string[];
  fieldNames: string[];
}

function categorizeBullet(text: string): FsdRequirementBullet["category"] {
  const t = text.toLowerCase();
  if (/audit|log|trail|timestamp|user id/i.test(t)) return "audit";
  if (/navigate|tab|link|breadcrumb|route|click|sidebar/i.test(t)) return "navigation";
  if (/must|shall|should not|required|mandatory|validate|verify|ensure/i.test(t)) return "validation";
  if (/field|display|render|show|label|badge|column|header|filter/i.test(t)) return "field";
  if (/rule|threshold|score|risk|screen|pep|sanction|disposition|whitelist|exception/i.test(t)) return "rule";
  return "general";
}

function extractBullets(text: string): FsdRequirementBullet[] {
  const parts = text
    .split(/(?:\.\s+(?=[A-Z])|;\s+|(?:\n+)|(?:\s+-\s+)|(?:\s+•\s+))/)
    .map((s) => s.trim().replace(/\.$/, ""))
    .filter((s) => s.length > 12);

  const seen = new Set<string>();
  const bullets: FsdRequirementBullet[] = [];
  for (const part of parts) {
    const key = part.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    bullets.push({ text: part, category: categorizeBullet(part) });
  }
  return bullets.slice(0, 40);
}

function extractFieldNames(text: string): string[] {
  const fields = new Set<string>();
  const patterns = [
    /\b(Customer ID|Account Number|Match Score|Watchlist|Branch|Date Range|Screening Type|List Name|Disposition|False Positive|Confirm Match)\b/g,
  ];
  for (const re of patterns) {
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      if (m[1]) fields.add(m[1].trim());
    }
  }
  return [...fields];
}

function extractBusinessRules(bullets: FsdRequirementBullet[]): string[] {
  return bullets
    .filter((b) => b.category === "rule" || b.category === "validation")
    .map((b) => b.text)
    .slice(0, 15);
}

function sectionToCatalogEntry(section: FsdSection): FsdCatalogEntry {
  const bullets = extractBullets(section.text);
  return {
    id: section.id,
    title: section.title,
    module: section.module,
    summary: section.text.slice(0, 500),
    bullets,
    businessRules: extractBusinessRules(bullets),
    fieldNames: extractFieldNames(section.text),
  };
}

export async function buildFsdCatalog(): Promise<FsdCatalogEntry[]> {
  const sections = await loadBsFsdSections();
  return sections.map(sectionToCatalogEntry);
}

export async function writeFsdCatalog(): Promise<FsdCatalogEntry[]> {
  const catalog = await buildFsdCatalog();
  fs.mkdirSync(path.dirname(FSD_CATALOG_PATH), { recursive: true });
  fs.writeFileSync(
    FSD_CATALOG_PATH,
    JSON.stringify({ generatedAt: new Date().toISOString(), entries: catalog }, null, 2),
    "utf-8",
  );
  return catalog;
}

export function getCatalogEntry(catalog: FsdCatalogEntry[], sectionId: string): FsdCatalogEntry | undefined {
  return (
    catalog.find((e) => e.id === sectionId) ??
    catalog.find((e) => sectionId.startsWith(`${e.id}.`)) ??
    catalog.find((e) => e.id.startsWith(sectionId.split(".").slice(0, 2).join(".")))
  );
}
