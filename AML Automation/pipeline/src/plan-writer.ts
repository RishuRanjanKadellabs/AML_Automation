import * as fs from "fs";
import * as path from "path";
import type { TestCase, PipelineConfig } from "./config";

export function writePlan(testCases: TestCase[], config: PipelineConfig): string[] {
  fs.mkdirSync(config.outputDir, { recursive: true });
  const promptsDir = path.join(config.outputDir, "prompts");
  fs.mkdirSync(promptsDir, { recursive: true });

  const writtenFiles: string[] = [];

  const planPath = path.join(config.outputDir, "plan.md");
  fs.writeFileSync(planPath, buildFullPlan(testCases, config), "utf-8");
  writtenFiles.push(planPath);

  for (const tc of testCases) {
    const promptPath = path.join(promptsDir, `${tc.id}.md`);
    fs.writeFileSync(promptPath, buildSinglePrompt(tc, config), "utf-8");
    writtenFiles.push(promptPath);
  }

  const manifestPath = path.join(config.outputDir, "manifest.json");
  fs.writeFileSync(manifestPath, buildManifest(testCases, config, writtenFiles), "utf-8");
  writtenFiles.push(manifestPath);

  return writtenFiles;
}

function buildFullPlan(testCases: TestCase[], config: PipelineConfig): string {
  const lines: string[] = [];
  lines.push(`# Test Plan — Generated from Document`);
  lines.push(``);
  if (config.inputFiles.length === 1) {
    lines.push(`> Source: \`${path.basename(config.inputFiles[0])}\``);
  } else {
    lines.push(`> Sources: ${config.inputFiles.map((f) => `\`${path.basename(f)}\``).join(", ")}`);
  }
  lines.push(`> Environment: ${config.env}`);
  if (config.baseUrl) lines.push(`> Base URL: ${config.baseUrl}`);
  lines.push(`> Generated: ${new Date().toISOString()}`);
  lines.push(``);

  const suiteGroups = groupBySuite(testCases);
  let suiteIndex = 0;

  for (const [suite, cases] of Object.entries(suiteGroups)) {
    suiteIndex++;
    lines.push(`### ${suiteIndex}. ${suite}`);
    lines.push(`**Seed:** \`${config.seedFile}\``);
    lines.push(``);

    cases.forEach((tc, caseIdx) => {
      lines.push(`#### ${suiteIndex}.${caseIdx + 1} ${tc.title}`);

      if (tc.prerequisites.length > 0) {
        lines.push(`**Prerequisites:**`);
        tc.prerequisites.forEach((p) => lines.push(`- ${p}`));
        lines.push(``);
      }

      lines.push(`**Steps:**`);
      tc.steps.forEach((step, i) => lines.push(`${i + 1}. ${step}`));
      lines.push(``);

      if (tc.expectedResults.length > 0) {
        lines.push(`**Expected:**`);
        tc.expectedResults.forEach((er) => lines.push(`- ${er}`));
        lines.push(``);
      }
    });
  }

  return lines.join("\n");
}

function buildSinglePrompt(tc: TestCase, config: PipelineConfig): string {
  const lines: string[] = [];

  lines.push(`<test-suite>${tc.suite}</test-suite>`);
  lines.push(`<test-name>${tc.title}</test-name>`);
  lines.push(`<test-id>${tc.id}</test-id>`);
  lines.push(`<seed-file>${config.seedFile}</seed-file>`);
  lines.push(`<body>`);

  if (tc.prerequisites.length > 0) {
    lines.push(`Prerequisites:`);
    tc.prerequisites.forEach((p) => lines.push(`- ${p}`));
    lines.push(``);
  }

  lines.push(`Steps:`);
  tc.steps.forEach((step, i) => lines.push(`${i + 1}. ${step}`));
  lines.push(``);

  if (tc.expectedResults.length > 0) {
    lines.push(`Expected Results:`);
    tc.expectedResults.forEach((er) => lines.push(`- ${er}`));
  }

  lines.push(`</body>`);

  return lines.join("\n");
}

function buildManifest(
  testCases: TestCase[],
  config: PipelineConfig,
  writtenFiles: string[],
): string {
  const manifest = {
    generatedAt: new Date().toISOString(),
    sourceDocuments: config.inputFiles.map((f) => path.basename(f)),
    environment: config.env,
    baseUrl: config.baseUrl || "(from fixture at runtime)",
    seedFile: config.seedFile,
    totalTestCases: testCases.length,
    planFile: "plan.md",
    files: writtenFiles.map((f) => path.relative(config.projectRoot, f)),
    testCases: testCases.map((tc) => ({
      id: tc.id,
      title: tc.title,
      suite: tc.suite,
      promptFile: `prompts/${tc.id}.md`,
      stepsCount: tc.steps.length,
      expectedResultsCount: tc.expectedResults.length,
    })),
  };

  return JSON.stringify(manifest, null, 2);
}

function groupBySuite(testCases: TestCase[]): Record<string, TestCase[]> {
  const groups: Record<string, TestCase[]> = {};
  for (const tc of testCases) {
    const suite = tc.suite;
    if (!groups[suite]) groups[suite] = [];
    groups[suite].push(tc);
  }
  return groups;
}
