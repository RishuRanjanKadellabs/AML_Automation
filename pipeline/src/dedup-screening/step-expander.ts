import { DDS_PAGE_PRECONDITION, DDS_PRECONDITION } from "./dds-data";
import type { DdsHtmlInventory } from "./html-inventory";
import {
  clampSteps,
  countSteps,
  formatNumberedStepLines,
  MAX_DDS_STEPS,
  MIN_DDS_STEPS,
} from "./step-normalizer";
import { buildFocusedExcelSteps, extractCoreTask, resolveTestData, taskContext } from "./task-step-scoper";
import type { DdsExcelRow, EnhancedDdsRow, GapTestCaseSpec } from "./types";

const BANNED_OUTPUT =
  /\b(FSD|Functional Specification|HTML|Figma|design document|requirement document|as per documentation|prototype|mockup|specification document)\b/gi;

const LOGIN_PATTERN =
  /login|log\s?in|sign\s?in|log\s?out|sign\s?out|launch the application|enter credential|submit login|logged into aml|user logged into/i;

export function sanitizeOutput(text: string): string {
  return text
    .replace(BANNED_OUTPUT, "")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function buildBusinessDescription(row: DdsExcelRow): string {
  const core = extractCoreTask(row.taskDescription);
  const area = row.subModule.replace(/^De-Dup Screening\s*[–-]\s*/i, "").trim();
  const ctx = `${row.module} ${row.subModule} ${core}`.toLowerCase();

  let sentence1 = `Verify that ${core.charAt(0).toLowerCase()}${core.slice(1)}.`;
  let sentence2 = `This confirms ${area.toLowerCase()} works correctly for duplicate customer investigation.`;

  if (/validation|mandatory|invalid|reject|error/i.test(ctx)) {
    sentence2 = "This protects data quality before duplicate detection runs.";
  } else if (/export|mask|privacy/i.test(ctx)) {
    sentence2 = "This ensures exported duplicate reports meet compliance and privacy requirements.";
  } else if (/compare|modal|profile/i.test(ctx)) {
    sentence2 = "This helps analysts compare KYC details before merging or closing duplicate records.";
  } else if (/pagination|high volume|large/i.test(ctx)) {
    sentence2 = "This ensures duplicate investigations remain usable with large customer datasets.";
  } else if (/role based|unauthorized|access denied|restricted role|data visibility restriction/i.test(ctx)) {
    sentence2 = "This ensures only appropriate users can view or act on duplicate customer data.";
  } else if (/navigate|navigation|breadcrumb|sidebar|direct url|browser back|browser forward|page refresh/i.test(ctx)) {
    sentence2 = "This confirms analysts can reach the duplicate screening workspace quickly and reliably.";
  } else if (/end-to-end|investigation|workflow/i.test(ctx)) {
    sentence2 = "This validates the complete duplicate review path from search to export.";
  }

  let result = sanitizeOutput(`${sentence1} ${sentence2}`);
  if (wordCount(result) < 25) {
    result = sanitizeOutput(`${result} The De-Dup Screening page should remain stable with no unexpected errors.`);
  }
  if (wordCount(result) > 65) {
    const sentences = result.match(/[^.!?]+[.!?]+/g) ?? [result];
    result = sanitizeOutput(sentences.slice(0, 3).join(" "));
  }
  return result;
}

function buildExpectedResults(row: DdsExcelRow): string {
  const existing = row.expectedResult
    .split("\n")
    .map((l) => l.replace(/^[•\-]\s*/, "").trim())
    .filter((l) => l.length > 10 && !LOGIN_PATTERN.test(l));

  const bullets: string[] = [];
  const ctx = taskContext(row);

  for (const line of existing.slice(0, 3)) {
    const cleaned = sanitizeOutput(line);
    if (cleaned && !bullets.some((b) => b.toLowerCase() === cleaned.toLowerCase())) {
      bullets.push(cleaned);
    }
  }

  if (bullets.length === 0) {
    if (/validation|mandatory|required|invalid/i.test(ctx)) {
      bullets.push("A clear validation message is displayed for the invalid or missing input.");
      bullets.push("The duplicate report is not generated until the issue is corrected.");
    } else if (/clear filter/i.test(ctx)) {
      bullets.push("Match Parameter List and Customer ID fields are reset to empty.");
      bullets.push("The Results section is hidden until a new report is generated.");
    } else if (/export/i.test(ctx)) {
      bullets.push("The selected export format initiates a file download or success confirmation.");
      bullets.push("Exported content reflects the duplicate groups shown in the results grid.");
    } else if (/compare|modal/i.test(ctx)) {
      bullets.push("The Customer KYC Comparison modal opens with Side-by-Side Compare content.");
      bullets.push("Matched KYC fields are highlighted between the compared customer profiles.");
    } else if (/empty|no match|no duplicate/i.test(ctx)) {
      bullets.push("An empty results message indicates no duplicate records were found.");
      bullets.push("No duplicate group rows appear in the results table.");
    } else if (/pagination/i.test(ctx)) {
      bullets.push("Pagination controls display the current page range and total record count.");
      bullets.push("Navigating pages updates the duplicate records shown in the grid.");
    } else {
      bullets.push("The described control or section is visible and behaves as expected.");
      bullets.push("The De-Dup Screening workflow completes without unexpected errors.");
    }
  }

  if (row.acceptanceCriteria && bullets.length < 3) {
    const ac = sanitizeOutput(row.acceptanceCriteria);
    if (ac.length > 15 && !bullets.some((b) => b.toLowerCase() === ac.toLowerCase())) {
      bullets.push(ac);
    }
  }

  return bullets
    .slice(0, 4)
    .map((b) => `• ${b}`)
    .join("\n");
}

function buildPreconditions(row: DdsExcelRow): string {
  const ctx = taskContext(row);
  if (/navigate to de-dup|sidebar menu|direct url|browser back|authorized roles/i.test(ctx)) {
    return sanitizeOutput(DDS_PRECONDITION);
  }
  if (/unauthorized|restricted|denied|cannot access/i.test(ctx)) {
    return sanitizeOutput("Test user account with restricted role permissions is available.");
  }
  return sanitizeOutput(DDS_PAGE_PRECONDITION);
}

function buildAcceptanceCriteria(row: DdsExcelRow, expected: string): string {
  const first = expected.split("\n").map((l) => l.replace(/^[•\-]\s*/, "").trim()).find(Boolean);
  if (first) return sanitizeOutput(first);
  return sanitizeOutput(row.acceptanceCriteria || extractCoreTask(row.taskDescription));
}

function padSteps(steps: string[]): string[] {
  let result = clampSteps(steps.filter((s) => !LOGIN_PATTERN.test(s)));
  const fillers = [
    "Confirm the De-Dup Screening page remains stable with no unexpected errors",
    "Confirm the outcome matches the expected result for this scenario",
  ];
  let fillerIndex = 0;
  while (result.length < MIN_DDS_STEPS && fillerIndex < fillers.length) {
    const candidate = fillers[fillerIndex];
    fillerIndex += 1;
    if (!result.some((s) => s.toLowerCase() === candidate.toLowerCase())) {
      result.push(candidate);
    }
    result = clampSteps(result);
  }
  return result.slice(0, MAX_DDS_STEPS);
}

export function expandRow(row: DdsExcelRow, _inventory: DdsHtmlInventory): EnhancedDdsRow {
  const steps = padSteps(buildFocusedExcelSteps(row));
  const expectedResult = buildExpectedResults(row);
  const taskDescription = buildBusinessDescription(row);

  return {
    ...row,
    taskDescription,
    preconditions: buildPreconditions(row),
    acceptanceCriteria: buildAcceptanceCriteria(row, expectedResult),
    testSteps: formatNumberedStepLines(steps),
    testData: sanitizeOutput(resolveTestData(row)),
    expectedResult,
  };
}

export function expandGapRow(gap: GapTestCaseSpec & { id: string }, _inventory: DdsHtmlInventory): EnhancedDdsRow {
  const steps = padSteps(gap.steps);
  const expectedResult = gap.expected.map((e) => `• ${sanitizeOutput(e)}`).join("\n");

  return {
    id: gap.id,
    module: gap.module,
    subModule: gap.subModule,
    taskDescription: sanitizeOutput(gap.taskDescription),
    acceptanceCriteria: sanitizeOutput(gap.expected[0] ?? gap.taskDescription),
    preconditions: sanitizeOutput(DDS_PAGE_PRECONDITION),
    testSteps: formatNumberedStepLines(steps),
    testData: sanitizeOutput(gap.testData),
    priority: gap.priority,
    expectedResult,
    isNew: true,
  };
}

export function validateEnhancedRow(row: EnhancedDdsRow): string[] {
  const errors: string[] = [];
  const stepCount = countSteps(row.testSteps);
  const blob = `${row.taskDescription} ${row.testSteps} ${row.expectedResult} ${row.preconditions}`;

  if (stepCount < MIN_DDS_STEPS) {
    errors.push(`${row.id}: only ${stepCount} steps (min ${MIN_DDS_STEPS})`);
  }
  if (stepCount > MAX_DDS_STEPS) {
    errors.push(`${row.id}: ${stepCount} steps exceeds max ${MAX_DDS_STEPS}`);
  }
  if (BANNED_OUTPUT.test(blob)) {
    errors.push(`${row.id}: contains banned source reference`);
  }
  if (LOGIN_PATTERN.test(row.testSteps)) {
    errors.push(`${row.id}: contains login/logout step`);
  }
  if (wordCount(row.taskDescription) < 20) {
    errors.push(`${row.id}: task description too short`);
  }
  return errors;
}

export { countSteps };
