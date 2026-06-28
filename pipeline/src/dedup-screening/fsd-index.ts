import * as fs from "fs";
import * as path from "path";
import mammoth from "mammoth";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const DDS_FSD_PATH = path.join(
  PROJECT_ROOT,
  "pipeline/test-data/Dedup_Screening_FSD_v1.0.docx",
);

export interface FsdSection {
  id: string;
  title: string;
  module: string;
  text: string;
}

let cachedSections: FsdSection[] | null = null;

export async function loadDdsFsdSections(): Promise<FsdSection[]> {
  if (cachedSections) {
    return cachedSections;
  }

  if (!fs.existsSync(DDS_FSD_PATH)) {
    cachedSections = [];
    return cachedSections;
  }

  const buffer = fs.readFileSync(DDS_FSD_PATH);
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
      current = {
        id: match[1],
        title: match[2].trim(),
        module: "De-Duplication Screening",
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
  return cachedSections;
}
