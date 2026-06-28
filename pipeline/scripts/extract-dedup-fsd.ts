import * as fs from "fs";
import * as path from "path";
import mammoth from "mammoth";

const fsdPath = path.join(process.cwd(), "pipeline/test-data/Dedup_Screening_FSD_v1.0.docx");
const outPath = path.join(process.cwd(), "specs/dedup-screening/fsd-sections-raw.txt");

async function main(): Promise<void> {
  const buffer = fs.readFileSync(fsdPath);
  const result = await mammoth.extractRawText({ buffer });
  const text = result.value;
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, text);

  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  console.log("Length:", text.length);
  console.log("Written:", outPath);
  for (const line of lines) {
    if (/^\d+(?:\.\d+)+\s+\S/.test(line)) {
      console.log(line.slice(0, 150));
    }
  }
}

main().catch(console.error);
