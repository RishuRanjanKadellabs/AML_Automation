import type { IwcExcelRow } from "./types";
import { buildGapMatrix } from "./gap-analysis";
import { buildAssertionsForRow, escapeScenarioComment } from "./assertions";
import { mapIwcTestLogic } from "./test-logic";

function escapeComment(value: string): string {
  return value.replace(/\*\//g, "* /").replace(/\n/g, " ").trim();
}

function parseNumberedSteps(testSteps: string): string[] {
  if (!testSteps.trim()) return [];
  const numbered = testSteps.match(/\d+\.\s[^]+?(?=\d+\.\s|$)/g);
  if (numbered?.length) {
    return numbered.map((s) => s.replace(/^\d+\.\s*/, "").trim()).filter(Boolean);
  }
  return testSteps
    .split(/\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function splitExpectedBullets(expectedResult: string): string[] {
  if (!expectedResult.trim()) return [];
  return expectedResult
    .split(/(?:\d+\.\s+|;\s+|\n+)/)
    .map((s) => s.trim())
    .filter((s) => s.length > 3);
}

function indentBlock(lines: string[], spaces: number): string {
  const pad = " ".repeat(spaces);
  return lines.map((l) => `${pad}${l}`).join("\n");
}

function parseActionLines(actions: string): string[] {
  return actions
    .split(/\n|;/)
    .map((l) => l.trim())
    .filter(Boolean);
}

function isSetupLine(line: string): boolean {
  return (
    /openIgnoreWordsConfigurationDirect/.test(line)
    || /expandConfigurationMenu/.test(line)
    || /openIgnoreWordsConfigurationFromSidebar/.test(line)
    || /^\/\/ Role from Excel:/.test(line)
    || /^\/\/ TODO:/.test(line)
    || /^\/\* Role from Excel:/.test(line)
    || /resizeViewport/.test(line)
    || /mockUnauthorized/.test(line)
  );
}

function mapExcelStepsToExecuteActions(row: IwcExcelRow): string[] {
  const actions: string[] = [];
  for (const step of parseNumberedSteps(row.testSteps)) {
    const s = step.toLowerCase();
    if (/observe.*breadcrumb|read.*breadcrumb|breadcrumb/.test(s)) {
      actions.push("await iwcPage.expectBreadcrumbVisible()");
    } else if (/observe.*toolbar|review.*toolbar|toolbar/.test(s)) {
      actions.push("await iwcPage.expectToolbarVisible()");
    } else if (/observe.*tab|tab counter|status tab/.test(s)) {
      actions.push("await iwcPage.expectTabsVisible()");
    } else if (/search|filter/.test(s) && !/search box|sidebar search/.test(s)) {
      actions.push('await iwcPage.searchIgnoreWords("trading")');
    } else if (/refresh|reload/.test(s)) {
      actions.push("await iwcPage.refreshPage()");
    } else if (/sort/.test(s)) {
      actions.push('await iwcPage.sortByColumn("Ignore Word")');
    } else if (/export/.test(s)) {
      actions.push("await iwcPage.clickExport()");
    } else if (/add category|category modal/.test(s)) {
      actions.push("await iwcPage.openAddCategoryModal()");
    } else if (/add ignore word/.test(s)) {
      actions.push("await iwcPage.openAddIgnoreWordPanel()");
    } else if (/bulk upload/.test(s)) {
      actions.push("await iwcPage.openBulkUploadModal()");
    } else if (/category controls/.test(s)) {
      actions.push("await iwcPage.openCategoryControlsModal()");
    } else if (/inactive tab|drafted tab|active tab|switch.*tab/.test(s)) {
      const tab = /inactive/.test(s) ? "Inactive" : /drafted/.test(s) ? "Drafted" : "Active";
      actions.push(`await iwcPage.openTab("${tab}")`);
    }
  }
  return [...new Set(actions)];
}

function normalizeAssertionLine(line: string): string {
  return line.trim().replace(/;+$/g, "");
}

function splitIwcPhases(row: IwcExcelRow): { setup: string[]; execute: string[] } {
  const allLines = parseActionLines(mapIwcTestLogic(row));
  const setup: string[] = [];
  const execute: string[] = [];

  for (const line of allLines) {
    if (isSetupLine(line)) {
      setup.push(line);
    } else {
      execute.push(line);
    }
  }

  if (!setup.some((l) => l.includes("openIgnoreWordsConfigurationDirect"))) {
    setup.unshift("await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl)");
  }

  if (execute.length === 0) {
    execute.push(...mapExcelStepsToExecuteActions(row));
  }

  if (row.preconditions.trim()) {
    setup.push(`// Preconditions: ${escapeComment(row.preconditions)}`);
  }

  return { setup, execute };
}

function dedupeValidateAssertions(execute: string[], assertions: string): string {
  const executed = new Set(execute.map(normalizeAssertionLine));
  return assertions
    .split(/\n\s*/)
    .map(normalizeAssertionLine)
    .filter(Boolean)
    .filter((line) => !executed.has(line))
    .join(";\n    ");
}

function buildGapTodoComment(row: IwcExcelRow): string | null {
  const gap = buildGapMatrix([row])[0];
  if (!gap?.missingInformation) return null;
  return `// TODO: ${gap.missingInformation}`;
}

export function buildTraceabilityComments(row: IwcExcelRow): string {
  const numbered = parseNumberedSteps(row.testSteps);
  const expectedBullets = splitExpectedBullets(row.expectedResult);
  const feature = row.subModule.trim() || "Core";

  return [
    `// Excel Test Case ID: ${row.id}`,
    `// Excel Scenario: ${escapeComment(feature)} → ${escapeComment(row.taskDescription)}`,
    `// Steps (${numbered.length}): ${escapeComment(numbered.slice(0, 3).join(" → "))}${numbered.length > 3 ? " …" : ""}`,
    `// Expected: ${escapeComment(expectedBullets[0] ?? row.expectedResult)}`,
  ].join("\n    ");
}

export function buildInstrumentedTestBody(row: IwcExcelRow): string {
  const traceability = buildTraceabilityComments(row);
  const todo = buildGapTodoComment(row);
  const { setup, execute } = splitIwcPhases(row);
  const assertions = dedupeValidateAssertions(execute, buildAssertionsForRow(row));
  const feature = row.subModule.trim() || "Core";
  const scenario = escapeScenarioComment(row.taskDescription);

  const setupBlock = setup.length
    ? `await test.step("Navigate / setup", async () => {
${indentBlock(setup.map((l) => (l.endsWith(";") || l.startsWith("//") || l.startsWith("/*") ? l : `${l};`)), 6)}
      });`
    : "";

  const executeLines = execute.length > 0 ? execute : ["await iwcPage.expectIgnoreWordsConfigurationViewLoaded()"];

  const executeBlock = `await test.step("Execute Excel test steps", async () => {
${indentBlock(executeLines.map((l) => (l.startsWith("//") || l.startsWith("/*") ? l : `${l};`)), 6)}
      });`;

  const assertionLines = assertions
    .split(/\n\s*/)
    .map((l) => (l.endsWith(";") ? l : `${l};`))
    .filter((l) => l.trim() && l.trim() !== ";");

  const validateBlock = assertionLines.length
    ? `await test.step("Validate expected results", async () => {
${indentBlock(assertionLines, 6)}
      });`
    : "";

  const todoLine = todo ? `\n    ${todo}` : "";

  return `${traceability}${todoLine}
    console.log("[${row.id}] ${escapeComment(feature)} → ${scenario}");
    ${setupBlock}

    ${executeBlock}

    ${validateBlock}`;
}
