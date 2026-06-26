import * as fs from "fs";
import * as path from "path";
import * as mammoth from "mammoth";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const FSD_DOCX_PATH = path.join(
  PROJECT_ROOT,
  "pipeline/test-data/FSD_Missing_Mandatory_KYC_Gap_Report_v1.2.docx",
);

export interface FsdSection {
  id: string;
  title: string;
  module: "MM Template" | "KYC Gap Report" | "Data Model" | "General";
  text: string;
}

let cachedSections: FsdSection[] | null = null;

function detectModule(sectionId: string, title: string): FsdSection["module"] {
  const id = parseFloat(sectionId);
  if (id >= 5) return "Data Model";
  if (id >= 4) return "KYC Gap Report";
  if (id >= 3) return "MM Template";
  if (/gap report/i.test(title)) return "KYC Gap Report";
  return "General";
}

export async function loadFsdSections(): Promise<FsdSection[]> {
  if (cachedSections) {
    return cachedSections;
  }

  if (!fs.existsSync(FSD_DOCX_PATH)) {
    cachedSections = [];
    return cachedSections;
  }

  const buffer = fs.readFileSync(FSD_DOCX_PATH);
  const result = await mammoth.extractRawText({ buffer });
  const lines = result.value.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);

  const sections: FsdSection[] = [];
  let current: FsdSection | null = null;

  for (const line of lines) {
    const match = line.match(/^(\d+(?:\.\d+)+)\s+(.+)$/);
    if (match) {
      if (current) {
        sections.push(current);
      }
      const id = match[1];
      const title = match[2].trim();
      current = {
        id,
        title,
        module: detectModule(id, title),
        text: "",
      };
      continue;
    }

    if (current) {
      current.text += (current.text ? " " : "") + line;
    }
  }

  if (current) {
    sections.push(current);
  }

  cachedSections = sections;
  return sections;
}

export function getFsdSectionsSync(): FsdSection[] {
  return cachedSections ?? [];
}
