import * as path from "path";
import * as fs from "fs";
import * as dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "..", "..", ".env") });

export interface PipelineConfig {
  inputFiles: string[];
  outputDir: string;
  baseUrl: string;
  env: string;
  projectRoot: string;
  dryRun: boolean;
  seedFile: string;
  generateSpecs: boolean;
}

export interface TestCase {
  id: string;
  title: string;
  suite: string;
  prerequisites: string[];
  steps: string[];
  expectedResults: string[];
  rawText: string;
}

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
const SUPPORTED_EXTENSIONS = [".xlsx", ".xls", ".xlsm", ".docx"];

export function isSupportedTestCaseFile(filePath: string): boolean {
  return SUPPORTED_EXTENSIONS.includes(path.extname(filePath).toLowerCase());
}

export function parseArgs(argv: string[]): PipelineConfig {
  const args = argv.slice(2);
  const flags: Record<string, string> = {};
  const inputFlags: string[] = [];
  const positional: string[] = [];

  const BOOLEAN_FLAGS = new Set(["dry-run", "no-specs"]);
  const MULTI_FLAGS = new Set(["input"]);

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("--")) {
      const key = args[i].replace(/^--/, "");
      if (BOOLEAN_FLAGS.has(key)) {
        flags[key] = "true";
      } else if (MULTI_FLAGS.has(key)) {
        const value = args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : "";
        if (value) {
          inputFlags.push(value);
          i++;
        }
      } else {
        const value = args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : "true";
        flags[key] = value;
        if (value !== "true") i++;
      }
    } else {
      positional.push(args[i]);
    }
  }

  let inputPaths: string[] = [...inputFlags];

  if (inputPaths.length === 0 && positional.length > 0) {
    inputPaths = positional.filter((p) => isSupportedTestCaseFile(p));
    if (inputPaths.length === 0) {
      inputPaths = [positional.join(" ")];
    }
  }

  if (inputPaths.length === 0) {
    const defaultDir = path.join(PROJECT_ROOT, "pipeline", "test-cases");
    if (fs.existsSync(defaultDir)) {
      inputPaths = findDefaultInputFiles(defaultDir);
    }
  }

  if (inputPaths.length === 0 && process.env.PIPELINE_INPUT) {
    inputPaths = process.env.PIPELINE_INPUT.split(",").map((p) => p.trim()).filter(Boolean);
  }

  if (inputPaths.length === 0) {
    printUsageAndExit();
  }

  const resolvedInputs = inputPaths.map((p) =>
    path.isAbsolute(p) ? p : path.resolve(process.cwd(), p),
  );

  for (const input of resolvedInputs) {
    if (!isSupportedTestCaseFile(input)) {
      console.error(`Error: unsupported file format "${path.extname(input)}".`);
      console.error("Supported formats: .xlsx, .xls, .xlsm, .docx");
      process.exit(1);
    }
  }

  const outputDir = flags["output"]
    ? path.isAbsolute(flags["output"])
      ? flags["output"]
      : path.resolve(process.cwd(), flags["output"])
    : path.join(PROJECT_ROOT, "specs", "generated");

  return {
    inputFiles: resolvedInputs,
    outputDir,
    baseUrl: flags["base-url"] || process.env.BASE_URL || "",
    env: flags["env"] || process.env.ENV || "dev",
    projectRoot: PROJECT_ROOT,
    dryRun: flags["dry-run"] === "true",
    seedFile: flags["seed"] || "tests/seed.spec.ts",
    generateSpecs: flags["no-specs"] !== "true",
  };
}

function findDefaultInputFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir);
  return entries
    .filter((name) => isSupportedTestCaseFile(name) && !name.startsWith("~$"))
    .sort()
    .map((name) => path.join(dir, name));
}

function printUsageAndExit(): never {
  console.error("Error: at least one test case file is required (.xlsx or .docx).");
  console.error("");
  console.error("Usage:");
  console.error('  npm run pipeline:parse -- --input "pipeline/test-cases/aml-tests.xlsx"');
  console.error('  npm run pipeline:parse -- "pipeline/test-cases/aml-tests.xlsx"');
  console.error('  npm run pipeline:from-excel -- "pipeline/test-cases/aml-tests.xlsx"');
  console.error("");
  console.error("  Place .xlsx files in pipeline/test-cases/ and run without --input to auto-detect.");
  console.error("");
  console.error("  Or set PIPELINE_INPUT env var (comma-separated for multiple):");
  console.error('    PIPELINE_INPUT="tests.xlsx" npm run pipeline:parse');
  console.error("");
  console.error("Options:");
  console.error("  --input <file>     Test case file (.xlsx, .xls, .xlsm, .docx) — repeatable");
  console.error("  --output <dir>     Output directory for plan files (default: specs/generated)");
  console.error("  --seed <file>      Seed spec file for Playwright MCP (default: tests/seed.spec.ts)");
  console.error("  --env <name>       Target environment name (default: from ENV var or 'dev')");
  console.error("  --base-url <url>   Target base URL (default: from BASE_URL var)");
  console.error("  --dry-run          Parse only — don't write any files");
  console.error("  --no-specs         Write plan only — skip Playwright .spec.ts generation");
  process.exit(1);
}
