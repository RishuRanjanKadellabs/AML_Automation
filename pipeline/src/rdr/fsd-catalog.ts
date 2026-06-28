import * as fs from "fs";
import * as path from "path";
import { loadRdrFsdSections, type FsdSection } from "./fsd-index";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const FSD_CATALOG_PATH = path.join(PROJECT_ROOT, "specs/rdr/fsd-catalog.json");

export interface FsdRequirementBullet {
  text: string;
  category: "field" | "rule" | "validation" | "navigation" | "audit" | "general";
}

export interface FsdCatalogEntry {
  id: string;
  title: string;
  summary: string;
  businessRules: string[];
  fieldNames: string[];
}

function categorizeBullet(text: string): FsdRequirementBullet["category"] {
  const t = text.toLowerCase();
  if (/audit|log|trail|timestamp|user id|verification history/i.test(t)) return "audit";
  if (/navigate|sidebar|breadcrumb|topbar|shell|tab|modal|click|route/i.test(t)) return "navigation";
  if (/must|shall|should not|required|mandatory|validate|verify|ensure|read-only|disabled/i.test(t)) {
    return "validation";
  }
  if (/field|display|render|show|label|badge|column|header|grid|filter|search|export/i.test(t)) {
    return "field";
  }
  if (/rule|cbs|sync|refresh|pagination|export|pep|sanction|risk|goaml|master/i.test(t)) return "rule";
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
    /\b(Customer(?:\s+ID)?|Account(?:\s+Number|\s+ID)?|Branch(?:\s+Code)?|Employee(?:\s+Code|\s+ID)?|Product(?:\s+Code|\s+ID)?|Currency(?:\s+Code)?|Country(?:\s+Code)?|PEP Flag|Sanctions Flag|Risk Rating|KYC Status|CIF|CBS|goAML)\b/g,
    /(?:column|field|filter|display|label)\s+["']?([A-Z][A-Za-z0-9 /&()_-]{2,40})["']?/gi,
    /\{k:'([^']+)',l:'([^']+)'\}/g,
  ];
  for (const re of patterns) {
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      const name = (m[2] ?? m[1])?.trim();
      if (name && !name.includes("_")) fields.add(name);
      else if (name) fields.add(name.replace(/_/g, " "));
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
    summary: section.text.slice(0, 500),
    businessRules: extractBusinessRules(bullets),
    fieldNames: extractFieldNames(section.text),
  };
}

export async function buildFsdCatalog(): Promise<FsdCatalogEntry[]> {
  const sections = await loadRdrFsdSections();
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

export { mapRowToFsd } from "./fsd-mapper";
