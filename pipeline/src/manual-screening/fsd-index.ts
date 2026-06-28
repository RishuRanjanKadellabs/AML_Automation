import * as fs from "fs";
import * as path from "path";
import * as mammoth from "mammoth";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const MS_FSD_PATH = path.join(PROJECT_ROOT, "pipeline/test-data/Manual_Screening_FSD.docx");

export interface FsdSection {
  id: string;
  title: string;
  module: string;
  text: string;
}

let cachedSections: FsdSection[] | null = null;

export async function loadMsFsdSections(): Promise<FsdSection[]> {
  if (cachedSections) {
    return cachedSections;
  }

  if (!fs.existsSync(MS_FSD_PATH)) {
    cachedSections = [];
    return cachedSections;
  }

  const buffer = fs.readFileSync(MS_FSD_PATH);
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
        module: "Manual Screening",
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
