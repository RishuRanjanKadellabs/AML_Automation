import * as path from "path";
import * as fs from "fs";
import { execSync } from "child_process";
import * as dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "..", "..", ".env") });

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");

interface RunAllConfig {
  inputFile: string;
  headed: boolean;
  workers: number;
  maxBrowsers: number;
}

function parseArgs(): RunAllConfig {
  const args = process.argv.slice(2);
  let inputFile = "";
  let headed = false;
  let workers = 3;
  let maxBrowsers = 0;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--headed") {
      headed = true;
    } else if (arg === "--headless") {
      headed = false;
    } else if (arg === "--workers" && args[i + 1]) {
      workers = parseInt(args[i + 1], 10);
      i++;
    } else if (arg === "--max-browsers" && args[i + 1]) {
      maxBrowsers = parseInt(args[i + 1], 10);
      i++;
    } else if (!arg.startsWith("--")) {
      inputFile = arg;
    }
  }

  if (!inputFile) {
    console.error("\n  ERROR: No input test case file provided.");
    console.error("  Usage: npm run pipeline:full -- <path-to.xlsx> [--headed] [--workers N]\n");
    process.exit(1);
  }

  const ext = path.extname(inputFile).toLowerCase();
  if (![".xlsx", ".xls", ".xlsm", ".docx"].includes(ext)) {
    console.error(`\n  ERROR: Unsupported file format "${ext}". Use .xlsx or .docx\n`);
    process.exit(1);
  }

  const resolvedInput = path.isAbsolute(inputFile)
    ? inputFile
    : path.resolve(process.cwd(), inputFile);

  if (!fs.existsSync(resolvedInput)) {
    console.error(`\n  ERROR: File not found: ${resolvedInput}\n`);
    process.exit(1);
  }

  return { inputFile: resolvedInput, headed, workers, maxBrowsers };
}

function loadEnvironmentNames(): string[] {
  const configPath = path.join(PROJECT_ROOT, "tests", "fixtures", "environments.json");
  const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
  return Object.keys(config.environments);
}

function runStep(label: string, command: string): void {
  console.log(`\n${"═".repeat(60)}`);
  console.log(`  STEP: ${label}`);
  console.log(`${"═".repeat(60)}\n`);
  console.log(`  > ${command}\n`);

  execSync(command, {
    cwd: PROJECT_ROOT,
    stdio: "inherit",
    env: { ...process.env },
  });
}

async function main(): Promise<void> {
  const config = parseArgs();
  const envNames = loadEnvironmentNames();

  console.log("\n╔══════════════════════════════════════════════════════════╗");
  console.log("║     AML Full Pipeline — Parse + Execute + Report       ║");
  console.log("╚══════════════════════════════════════════════════════════╝\n");
  console.log(`  Input:         ${config.inputFile}`);
  console.log(`  Environments:  ${envNames.join(", ")} (${envNames.length} total)`);
  console.log(`  Mode:          ${config.headed ? "headed" : "headless"}`);
  console.log(`  Workers/env:   ${config.workers}`);
  if (config.maxBrowsers > 0) {
    console.log(`  Max browsers:  ${config.maxBrowsers}`);
  }

  const startTime = Date.now();

  // Step 1: Parse test case file (Excel or Word) and generate scripts
  runStep(
    "Parse test cases and generate Playwright scripts",
    `npx tsx pipeline/src/index.ts --input "${config.inputFile}"`,
  );

  // Step 2: Execute on all environments in parallel
  const envsList = envNames.join(",");
  const headedFlag = config.headed ? "--headed" : "--headless";
  const workersFlag = `--workers ${config.workers}`;
  const maxBrowsersFlag = config.maxBrowsers > 0 ? `--max-browsers ${config.maxBrowsers}` : "";

  runStep(
    `Execute on ${envNames.length} environments in parallel`,
    `npx tsx pipeline/src/executor.ts --envs "${envsList}" ${headedFlag} ${workersFlag} ${maxBrowsersFlag}`.trim(),
  );

  // Step 3: Generate Excel report
  runStep(
    "Generate Excel report",
    `npx tsx pipeline/src/excel-report.ts`,
  );

  // Step 4: Generate Allure report (multi-client with trends)
  runStep(
    "Generate Allure report (multi-client, with trends)",
    `npx tsx pipeline/src/allure-report.ts --no-open`,
  );

  const totalSeconds = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log("\n╔══════════════════════════════════════════════════════════╗");
  console.log("║                    PIPELINE COMPLETE                    ║");
  console.log("╚══════════════════════════════════════════════════════════╝\n");
  console.log(`  Total time:    ${totalSeconds}s`);
  console.log(`  Environments:  ${envNames.length}`);
  console.log(`  Excel report:  results/execution-report.xlsx`);
  console.log(`  Allure report: results/allure-report/index.html`);
  console.log(`  JSON reports:  results/<env>/execution-report.json\n`);
}

main().catch((err) => {
  console.error("\n[run-all] Fatal error:", err.message || err);
  process.exit(1);
});
