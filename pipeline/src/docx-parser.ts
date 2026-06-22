import * as fs from "fs";
import * as mammoth from "mammoth";
import type { TestCase } from "./config";

export interface ParseWarning {
  rowIndex: number;
  reason: string;
  rawContent: string;
}

export interface ParseDiagnostics {
  totalTableRows: number;
  parsedCount: number;
  warnings: ParseWarning[];
}

export interface ParseResult {
  testCases: TestCase[];
  diagnostics: ParseDiagnostics;
}

export async function parseDocx(filePath: string): Promise<ParseResult> {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Input file not found: ${filePath}`);
  }

  const buffer = fs.readFileSync(filePath);
  const htmlResult = await mammoth.convertToHtml({ buffer });
  const html = htmlResult.value;

  if (htmlResult.messages.length > 0) {
    const warnings = htmlResult.messages
      .filter((m) => m.type === "warning")
      .map((m) => m.message);
    if (warnings.length) {
      console.warn(`[docx-parser] mammoth warnings: ${warnings.length} (non-fatal)`);
    }
  }

  const diagnostics: ParseDiagnostics = {
    totalTableRows: 0,
    parsedCount: 0,
    warnings: [],
  };

  const testCaseTable = findTestCaseTable(html);
  if (testCaseTable) {
    console.log("[docx-parser] Detected Test Case Table format.");
    const cases = parseTestCaseTable(testCaseTable, diagnostics);
    if (cases.length > 0) {
      diagnostics.parsedCount = cases.length;
      printSummary(diagnostics);
      return { testCases: cases, diagnostics };
    }
  }

  const uacTable = findUacTable(html);
  if (uacTable) {
    console.log("[docx-parser] Detected UAC / Acceptance Criteria Table format.");
    const cases = parseUacTable(uacTable, diagnostics);
    if (cases.length > 0) {
      diagnostics.parsedCount = cases.length;
      printSummary(diagnostics);
      return { testCases: cases, diagnostics };
    }
  }

  console.log("[docx-parser] Falling back to plain-text extraction.");
  const textResult = await mammoth.extractRawText({ buffer });
  const plainCases = parseFromPlainText(textResult.value);
  if (plainCases.length > 0) {
    diagnostics.parsedCount = plainCases.length;
    printSummary(diagnostics);
    return { testCases: plainCases, diagnostics };
  }

  const rawText = textResult.value.trim();
  if (rawText.length > 0) {
    console.log("[docx-parser] Safety net: wrapping entire document as a single catch-all test case.");
    const lines = rawText.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    const title = lines[0].substring(0, 80) || "Catch-All Test Case";
    const catchAll: TestCase = {
      id: "TC-catchall-1",
      title,
      suite: "Unstructured",
      prerequisites: [],
      steps: lines.slice(1),
      expectedResults: [],
      rawText,
    };
    diagnostics.parsedCount = 1;
    diagnostics.warnings.push({
      rowIndex: 0,
      reason: "No structured test cases detected; entire document wrapped as catch-all",
      rawContent: rawText.substring(0, 200),
    });
    printSummary(diagnostics);
    return { testCases: [catchAll], diagnostics };
  }

  printSummary(diagnostics);
  return { testCases: [], diagnostics };
}

function printSummary(d: ParseDiagnostics): void {
  console.log(`[docx-parser] Parse Summary:`);
  console.log(`  Total table rows examined: ${d.totalTableRows}`);
  console.log(`  Test cases extracted:      ${d.parsedCount}`);
  console.log(`  Warnings:                  ${d.warnings.length}`);
  for (const w of d.warnings) {
    console.log(`    [WARNING] Row ${w.rowIndex}: ${w.reason}`);
  }
}

function findTestCaseTable(html: string): string | null {
  const tableRegex = /<table[^>]*>([\s\S]*?)<\/table>/gi;
  let match: RegExpExecArray | null;
  while ((match = tableRegex.exec(html)) !== null) {
    const tableHtml = match[0];
    const firstRowMatch = tableHtml.match(/<tr[^>]*>([\s\S]*?)<\/tr>/i);
    const headerText = firstRowMatch
      ? stripHtml(firstRowMatch[0]).toLowerCase()
      : stripHtml(tableHtml.substring(0, 600)).toLowerCase();

    const hasTestCaseHeader =
      headerText.includes("test case") ||
      /\btc\b/.test(headerText) ||
      headerText.includes("scenario");
    const hasResultHeader =
      headerText.includes("result") ||
      headerText.includes("expected") ||
      headerText.includes("steps");

    if (hasTestCaseHeader && hasResultHeader) {
      return tableHtml;
    }
  }

  tableRegex.lastIndex = 0;
  while ((match = tableRegex.exec(html)) !== null) {
    const tableHtml = match[0];
    const bodyText = stripHtml(tableHtml).substring(0, 2000);
    if (/\bTC[-_ ]?\d/i.test(bodyText) || /^\s*\d+\.\d+/m.test(bodyText)) {
      return tableHtml;
    }
  }

  return null;
}

function parseTestCaseTable(tableHtml: string, diagnostics: ParseDiagnostics): TestCase[] {
  const testCases: TestCase[] = [];
  const rows = extractRows(tableHtml);
  diagnostics.totalTableRows = rows.length;
  if (rows.length < 2) return [];

  let currentGroup = "General";

  for (let i = 1; i < rows.length; i++) {
    const cells = extractCells(rows[i]);

    if (isGroupRow(rows[i], cells)) {
      const groupText = stripHtml(cells[0] || "").trim();
      const cleaned = groupText
        .replace(/^test\s*group\s*:\s*/i, "")
        .replace(/\t/g, " ")
        .trim();
      if (cleaned) currentGroup = cleaned;
      continue;
    }

    const rawRowText = stripHtml(rows[i]).trim();

    if (cells.length < 2) {
      if (cells.length === 0 || !rawRowText) continue;
      diagnostics.warnings.push({
        rowIndex: i,
        reason: `Only ${cells.length} cell(s) found; included with available content`,
        rawContent: rawRowText.substring(0, 200),
      });
      const fallbackTitle = rawRowText.substring(0, 80) || `Unparsed Test Case [row ${i}]`;
      testCases.push({
        id: sanitizeId(`TC-row-${i}`),
        title: fallbackTitle,
        suite: currentGroup,
        prerequisites: [],
        steps: rawRowText.length > 80 ? [rawRowText] : [],
        expectedResults: [],
        rawText: rawRowText,
      });
      continue;
    }

    const tcId = stripHtml(cells[0]).trim();
    const testCaseHtml = cells[1] || "";
    const resultsHtml = cells[2] || "";
    const rawCellText = stripHtml(testCaseHtml).trim();

    if (!tcId) {
      diagnostics.warnings.push({
        rowIndex: i,
        reason: `Missing test case ID (included with fallback ID "TC-row-${i}")`,
        rawContent: rawCellText.substring(0, 200),
      });
    }

    const effectiveId = tcId || `TC-row-${i}`;

    if (!rawCellText && !stripHtml(resultsHtml).trim()) {
      diagnostics.warnings.push({
        rowIndex: i,
        reason: "All cells empty; skipping truly blank row",
        rawContent: "",
      });
      continue;
    }

    const title = extractCaseTitle(testCaseHtml);
    const steps = extractSteps(testCaseHtml);
    const expectedResults = extractExpectedResults(resultsHtml);

    if (!title && steps.length === 0) {
      const fallbackTitle = rawCellText.substring(0, 80) || `Unparsed Test Case [row ${i}]`;
      diagnostics.warnings.push({
        rowIndex: i,
        reason: `No title or steps found (included with raw text as fallback)`,
        rawContent: rawCellText.substring(0, 200),
      });
      testCases.push({
        id: sanitizeId(effectiveId),
        title: fallbackTitle,
        suite: currentGroup,
        prerequisites: [],
        steps: rawCellText ? [rawCellText] : [],
        expectedResults,
        rawText: rawCellText,
      });
      continue;
    }

    testCases.push({
      id: sanitizeId(effectiveId),
      title: title || `Test Case ${effectiveId}`,
      suite: currentGroup,
      prerequisites: extractPrerequisites(steps),
      steps: cleanSteps(steps),
      expectedResults,
      rawText: rawCellText,
    });
  }

  return testCases;
}

function extractCaseTitle(cellHtml: string): string {
  const strongMatch = cellHtml.match(/<(?:strong|b)[^>]*>([\s\S]*?)<\/(?:strong|b)>/i);
  if (strongMatch) {
    let title = stripHtml(strongMatch[1]).trim();
    title = title.replace(/^case\s*:\s*/i, "").trim();
    if (title.length > 3) return title;
  }
  const pMatch = cellHtml.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  if (pMatch) {
    let title = stripHtml(pMatch[1]).trim();
    title = title.replace(/^case\s*:\s*/i, "").trim();
    if (title.length > 3) return title;
  }
  return "";
}

function extractSteps(cellHtml: string): string[] {
  const steps: string[] = [];
  const parts = cellHtml.split(/(<ol[^>]*>[\s\S]*?<\/ol>|<p[^>]*>[\s\S]*?<\/p>)/gi);

  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;

    if (/<ol/i.test(trimmed)) {
      const items = extractAllListItems(trimmed);
      for (const item of items) {
        const cleaned = item.trim();
        if (cleaned && !isThenPlaceholder(cleaned)) {
          steps.push(cleaned);
        }
      }
    } else if (/<p/i.test(trimmed)) {
      const text = stripHtml(trimmed).trim();
      if (
        text &&
        !text.toLowerCase().startsWith("case :") &&
        !text.toLowerCase().startsWith("case:") &&
        text.length > 2
      ) {
        if (/<strong|<b/i.test(trimmed)) {
          steps.push(`[${text}]`);
        }
      }
    }
  }

  return steps;
}

function extractAllListItems(listHtml: string): string[] {
  const items: string[] = [];
  processListNode(listHtml, 0, items);
  return items;
}

function processListNode(html: string, depth: number, out: string[]): void {
  const liOpenRegex = /<li[^>]*>/gi;
  let liStart: RegExpExecArray | null;
  const liPositions: number[] = [];

  while ((liStart = liOpenRegex.exec(html)) !== null) {
    liPositions.push(liStart.index);
  }

  for (let i = 0; i < liPositions.length; i++) {
    const start = liPositions[i];
    const end = i + 1 < liPositions.length ? liPositions[i + 1] : html.length;
    const segment = html.substring(start, end);

    const content = segment.replace(/^<li[^>]*>/i, "");

    const nestedMatch = content.match(/<([ou]l)[^>]*>([\s\S]*)<\/\1>/i);

    let directText: string;
    if (nestedMatch) {
      directText = content.substring(0, nestedMatch.index!);
      const nestedHtml = nestedMatch[0];
      const cleaned = stripHtml(directText).trim();
      if (cleaned) {
        out.push(depth > 0 ? "  ".repeat(depth) + cleaned : cleaned);
      }
      processListNode(nestedHtml, depth + 1, out);
    } else {
      directText = content.replace(/<\/li>[\s\S]*/i, "");
      const cleaned = stripHtml(directText).trim();
      if (cleaned) {
        out.push(depth > 0 ? "  ".repeat(depth) + cleaned : cleaned);
      }
    }
  }
}

function extractExpectedResults(resultsHtml: string): string[] {
  const results: string[] = [];
  if (!resultsHtml.trim()) return results;

  const expectedSection = extractSectionBetween(resultsHtml, /expected/i, /actual/i);

  if (expectedSection) {
    const items = extractListItemsFlat(expectedSection);
    for (const item of items) {
      const cleaned = item.trim();
      if (cleaned) results.push(cleaned);
    }
  }

  if (results.length === 0) {
    const allItems = extractListItemsFlat(resultsHtml);
    for (const item of allItems) {
      const cleaned = item.trim();
      if (/^actual\s*result/i.test(cleaned)) continue;
      if (cleaned && !/remove entire|only add content/i.test(cleaned)) {
        results.push(cleaned);
      }
    }
  }

  if (results.length === 0) {
    const plainText = stripHtml(resultsHtml).trim();
    if (plainText) {
      const lines = plainText.split(/\n/).map((l) => l.trim()).filter(Boolean);
      for (const line of lines) {
        if (!/^actual\s*result/i.test(line)) {
          results.push(line);
        }
      }
    }
  }

  return results;
}

function extractSectionBetween(
  html: string,
  startPattern: RegExp,
  endPattern: RegExp,
): string | null {
  const lowerHtml = stripHtml(html).toLowerCase();
  const startIdx = lowerHtml.search(startPattern);
  if (startIdx === -1) return null;

  const parts = html.split(/<p[^>]*>\s*<strong>\s*Actual/i);
  if (parts.length >= 2) {
    const expectedPart = parts[0];
    const afterExpected = expectedPart.split(/<p[^>]*>\s*<strong>\s*Expected/i);
    if (afterExpected.length >= 2) {
      return afterExpected.slice(1).join("");
    }
  }

  return html.substring(0, html.search(/<p[^>]*>[\s\S]*?Actual/i) || html.length);
}

function extractPrerequisites(steps: string[]): string[] {
  const prereqs: string[] = [];
  for (const step of steps) {
    const cleaned = step.replace(/^\s+/, "");
    if (/^given\b/i.test(cleaned)) {
      prereqs.push(cleaned.replace(/^given\s+/i, "").trim());
    } else if (/^and\s+(user\s+group|the\s+user\s+group)/i.test(cleaned)) {
      prereqs.push(cleaned);
    }
  }
  return prereqs;
}

function cleanSteps(steps: string[]): string[] {
  return steps.filter((s) => {
    const cleaned = s.trim();
    return cleaned.length > 0 && !isThenPlaceholder(cleaned);
  });
}

function isThenPlaceholder(text: string): boolean {
  return /then\s*-?\s*add\s+expected\s+and\s+actual/i.test(text);
}

function isGroupRow(rowHtml: string, cells: string[]): boolean {
  if (/colspan/i.test(rowHtml) && cells.length <= 1) return true;
  if (cells.length === 1 && /test\s*group/i.test(stripHtml(cells[0]))) return true;
  return false;
}

function findUacTable(html: string): string | null {
  const tableRegex = /<table[^>]*>([\s\S]*?)<\/table>/gi;
  let match: RegExpExecArray | null;
  while ((match = tableRegex.exec(html)) !== null) {
    const tableHtml = match[0];
    const headerText = stripHtml(tableHtml.substring(0, 400)).toLowerCase();
    if (headerText.includes("uac") && headerText.includes("given")) {
      return tableHtml;
    }
  }
  return null;
}

function parseUacTable(tableHtml: string, diagnostics: ParseDiagnostics): TestCase[] {
  const testCases: TestCase[] = [];
  const rows = extractRows(tableHtml);
  diagnostics.totalTableRows += rows.length;
  let currentGroup = "General";

  for (let i = 1; i < rows.length; i++) {
    const cells = extractCells(rows[i]);

    if (isGroupRow(rows[i], cells)) {
      const groupText = stripHtml(cells[0] || "")
        .replace(/^\d+\.\s*/, "")
        .replace(/^group:\s*/i, "")
        .trim();
      if (groupText) currentGroup = groupText;
      continue;
    }

    const rawRowText = stripHtml(rows[i]).trim();

    if (cells.length < 2) {
      if (cells.length === 0 || !rawRowText) continue;
      diagnostics.warnings.push({
        rowIndex: i,
        reason: `UAC row has only ${cells.length} cell(s); included with available content`,
        rawContent: rawRowText.substring(0, 200),
      });
      testCases.push({
        id: sanitizeId(`UAC-row-${i}`),
        title: rawRowText.substring(0, 80) || `Unparsed UAC [row ${i}]`,
        suite: currentGroup,
        prerequisites: [],
        steps: rawRowText.length > 80 ? [rawRowText] : [],
        expectedResults: [],
        rawText: rawRowText,
      });
      continue;
    }

    const uacId = stripHtml(cells[0]).trim();
    const uacHtml = cells[1] || "";
    const uacText = stripHtml(uacHtml);

    if (!uacId) {
      diagnostics.warnings.push({
        rowIndex: i,
        reason: `Missing UAC ID (included with fallback ID "UAC-row-${i}")`,
        rawContent: uacText.substring(0, 200),
      });
    }

    const effectiveId = uacId || `UAC-row-${i}`;

    if (!uacText.trim()) {
      diagnostics.warnings.push({
        rowIndex: i,
        reason: "UAC content cell empty; included with ID-only fallback",
        rawContent: "",
      });
      testCases.push({
        id: sanitizeId(effectiveId),
        title: `UAC ${effectiveId}`,
        suite: currentGroup,
        prerequisites: [],
        steps: [],
        expectedResults: [],
        rawText: "",
      });
      continue;
    }

    const title = extractCaseTitle(uacHtml) || `UAC ${effectiveId}`;
    const { given, when, then: thenItems } = parseGivenWhenThen(uacText);

    testCases.push({
      id: sanitizeId(effectiveId),
      title,
      suite: currentGroup,
      prerequisites: given,
      steps: when,
      expectedResults: thenItems,
      rawText: uacText,
    });
  }

  return testCases;
}

function parseGivenWhenThen(text: string): {
  given: string[];
  when: string[];
  then: string[];
} {
  const given: string[] = [];
  const when: string[] = [];
  const thenItems: string[] = [];
  let currentSection: "given" | "when" | "then" = "given";

  const lines = text.split(/\n|(?=\bGiven\b)|(?=\bWhen\b)|(?=\bThen\b)/i);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (/^Given\b/i.test(trimmed)) {
      currentSection = "given";
      const rest = trimmed.replace(/^Given\s*/i, "").trim();
      if (rest) given.push(rest);
    } else if (/^When\b/i.test(trimmed)) {
      currentSection = "when";
      const rest = trimmed.replace(/^When\s*/i, "").trim();
      if (rest) when.push(rest);
    } else if (/^Then\b/i.test(trimmed)) {
      currentSection = "then";
      const rest = trimmed.replace(/^Then\s*/i, "").trim();
      if (rest) thenItems.push(rest);
    } else if (/^And\b/i.test(trimmed)) {
      const rest = trimmed.replace(/^And\s*/i, "").trim();
      if (!rest) continue;
      if (currentSection === "given") given.push(rest);
      else if (currentSection === "when") when.push(rest);
      else thenItems.push(rest);
    }
  }

  return { given, when, then: thenItems };
}

const HEADING_PATTERN =
  /^(test\s*case|tc[-_\s]?\d|scenario\s*[\d#]|feature\s*:|story\s*:|\d+[.)]\s*(test|verify|validate|check|scenario)|case\s*\d)/i;

const NUMBERED_LINE = /^\d+[.)]\s+\S/;

function parseFromPlainText(text: string): TestCase[] {
  const testCases: TestCase[] = [];
  const lines = text.split(/\r?\n/);
  let currentTest: Partial<TestCase> | null = null;
  let currentSection: "steps" | "expected" | "prereq" | "none" = "none";

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (HEADING_PATTERN.test(trimmed)) {
      if (currentTest?.title) {
        testCases.push(finalize(currentTest, "General"));
      }
      const { id, title } = parseHeading(trimmed, testCases.length + 1);
      currentTest = { id, title, steps: [], expectedResults: [], prerequisites: [] };
      currentSection = "none";
      continue;
    }

    if (/^(steps?|actions?)\s*:/i.test(trimmed)) {
      currentSection = "steps";
      continue;
    }
    if (/^(expected|verify|assert)\s*(results?)?\s*:/i.test(trimmed)) {
      currentSection = "expected";
      continue;
    }
    if (/^(prerequisites?|preconditions?|setup)\s*:/i.test(trimmed)) {
      currentSection = "prereq";
      continue;
    }

    if (currentTest && currentSection !== "none") {
      const cleaned = trimmed.replace(/^[\d]+[.)]\s*/, "").replace(/^[-•*]\s*/, "");
      if (!cleaned) continue;
      if (currentSection === "steps") (currentTest.steps ??= []).push(cleaned);
      else if (currentSection === "expected") (currentTest.expectedResults ??= []).push(cleaned);
      else (currentTest.prerequisites ??= []).push(cleaned);
    }
  }

  if (currentTest?.title) {
    testCases.push(finalize(currentTest, "General"));
  }

  if (testCases.length === 0) {
    const numberedLines = lines
      .map((l) => l.trim())
      .filter((l) => NUMBERED_LINE.test(l));
    if (numberedLines.length > 0) {
      const steps = numberedLines.map((l) => l.replace(/^\d+[.)]\s*/, "").trim());
      testCases.push({
        id: "TC-plaintext-1",
        title: steps[0].substring(0, 80) || "Plain Text Test Case",
        suite: "General",
        prerequisites: [],
        steps,
        expectedResults: [],
        rawText: numberedLines.join("\n"),
      });
    }
  }

  return testCases;
}

function extractRows(tableHtml: string): string[] {
  const rows: string[] = [];
  const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  let match: RegExpExecArray | null;
  while ((match = rowRegex.exec(tableHtml)) !== null) {
    rows.push(match[0]);
  }
  return rows;
}

function extractCells(rowHtml: string): string[] {
  const cells: string[] = [];
  const cellRegex = /<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi;
  let match: RegExpExecArray | null;
  while ((match = cellRegex.exec(rowHtml)) !== null) {
    cells.push(match[1]);
  }
  return cells;
}

function extractListItemsFlat(html: string): string[] {
  const items: string[] = [];
  const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  let match: RegExpExecArray | null;
  while ((match = liRegex.exec(html)) !== null) {
    const text = stripHtml(match[1]).trim();
    if (text) items.push(text);
  }
  return items;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function sanitizeId(id: string): string {
  return id.replace(/[^a-zA-Z0-9_.-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "TC-0";
}

function parseHeading(text: string, fallbackIdx: number): { id: string; title: string } {
  const match = text.match(/^(?:test\s*case\s*)?(?:#?\s*)?(\d+[-.\w]*)\s*[-:.)]\s*(.*)/i);
  if (match) {
    return {
      id: sanitizeId(`TC-${match[1]}`),
      title: match[2].trim() || `Test Case ${fallbackIdx}`,
    };
  }
  return { id: `TC-${fallbackIdx}`, title: text.trim() };
}

function finalize(partial: Partial<TestCase>, suite: string): TestCase {
  return {
    id: partial.id || `TC-${Date.now()}`,
    title: partial.title || "Untitled",
    suite,
    prerequisites: partial.prerequisites || [],
    steps: partial.steps || [],
    expectedResults: partial.expectedResults || [],
    rawText: partial.rawText || "",
  };
}
