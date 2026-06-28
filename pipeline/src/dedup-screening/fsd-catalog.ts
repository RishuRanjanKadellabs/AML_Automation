import * as fs from "fs";
import * as path from "path";
import { loadDdsFsdSections, type FsdSection } from "./fsd-index";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const FSD_CATALOG_PATH = path.join(PROJECT_ROOT, "specs/dedup-screening/fsd-catalog.json");

export interface FsdRequirementBullet {
  text: string;
  category: "field" | "rule" | "validation" | "navigation" | "export" | "general";
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
  if (/export|excel|csv|pdf|print|download/i.test(t)) return "export";
  if (/navigate|breadcrumb|sidebar|menu|route|click|module position/i.test(t)) return "navigation";
  if (/must|shall|should not|required|mandatory|validate|verify|ensure/i.test(t)) return "validation";
  if (/field|display|render|show|label|column|header|filter|dropdown|input|tag|modal/i.test(t)) return "field";
  if (/rule|match|duplicate|group|score|mask|pagination|loader|generating/i.test(t)) return "rule";
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
    /\b(Customer ID|Match Parameter|Group ID|Match Score|Passport No|Date of Birth|National ID|Driving License|Mobile Number|Email Address|Contact Number|Corporate Registration Number|Tax ID|PAN|IMEI|IMSI|IP \/ Mac Address|Generate Report|Clear Filters|Compare|Export|Breadcrumb|De-Duplication Screening)\b/g,
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
    .filter((b) => b.category === "rule" || b.category === "validation" || b.category === "export")
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
  const sections = await loadDdsFsdSections();
  return sections
    .filter((s) => {
      const parts = s.id.split(".");
      return parts.length >= 2 && !["1.1", "1.2", "1.3"].includes(s.id);
    })
    .map(sectionToCatalogEntry);
}

export async function writeFsdCatalog(): Promise<FsdCatalogEntry[]> {
  const catalog = await buildFsdCatalog();
  fs.mkdirSync(path.dirname(FSD_CATALOG_PATH), { recursive: true });
  fs.writeFileSync(
    FSD_CATALOG_PATH,
    JSON.stringify({ generatedAt: new Date().toISOString(), source: "pipeline/test-data/Dedup_Screening_FSD_v1.0.docx", entries: catalog }, null, 2),
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
