import { buildFocusedExcelSteps, extractCoreTask, isLogoutCase, taskContext } from "./task-step-scoper";
import { buildTestSteps, formatFinalTestSteps } from "./step-enricher";
import { formatMsTestData, MS_PRECONDITION } from "./ms-data";
import {
  countSteps,
  MAX_MS_STEPS,
  MIN_MS_STEPS,
} from "./step-normalizer";
import type { MsExcelRow, EnhancedMsRow } from "./types";
import type { MsHtmlInventory } from "./html-inventory";

const BANNED_OUTPUT =
  /\b(FSD|Functional Specification|HTML|Figma|design document|requirement document|as per documentation|prototype|mockup|specification document)\b/gi;

const LOGIN_LOGOUT_PATTERN =
  /login|log\s?in|sign\s?in|log\s?out|sign\s?out|launch the application|enter (?:valid )?credential|submit login|authenticat/i;

const BOILERPLATE_EXPECTED =
  /requirement is met and (?:the )?.+behaves according to the specification|behaves according to the specification/i;

export function sanitizeOutput(text: string): string {
  return text
    .replace(BANNED_OUTPUT, "")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function formatNumberedSteps(row: MsExcelRow, explicitSteps?: string[]): string {
  if (explicitSteps && explicitSteps.length > 0) {
    return formatFinalTestSteps(explicitSteps);
  }
  return formatFinalTestSteps(buildTestSteps(row));
}

function buildBusinessDescription(row: MsExcelRow): string {
  const core = extractCoreTask(row.taskDescription);
  const area = row.module || "Manual Screening";
  const sentence1 = `Verify that ${core.charAt(0).toLowerCase()}${core.slice(1)}.`;
  let sentence2 = `This confirms the ${area} area works correctly for compliance analysts.`;
  if (/mandatory|validation|invalid/i.test(taskContext(row))) {
    sentence2 = "This protects data quality before a screening request is submitted.";
  } else if (/results|export|filter/i.test(taskContext(row))) {
    sentence2 = "This helps analysts review matches and take timely action.";
  }
  let result = sanitizeOutput(`${sentence1} ${sentence2}`);
  if (wordCount(result) < 25) {
    result = sanitizeOutput(`${result} The page should remain stable with no unexpected errors.`);
  }
  return result;
}

function buildExpectedResults(row: MsExcelRow, steps: string[]): string {
  const existing = row.expectedResult
    .split("\n")
    .map((l) => l.replace(/^[•\-]\s*/, "").trim())
    .filter((l) => l.length > 10 && !BOILERPLATE_EXPECTED.test(l) && !/log(?:ged)? out|sign(?:ed)? out/i.test(l));

  const bullets: string[] = [];
  const ctx = taskContext(row);

  if (existing.length > 0) {
    for (const line of existing.slice(0, 3)) {
      const cleaned = sanitizeOutput(line);
      if (cleaned && !bullets.includes(cleaned)) bullets.push(cleaned);
    }
  }

  if (bullets.length === 0) {
    if (/validation|mandatory|required|invalid|reject|error/i.test(ctx)) {
      bullets.push("A clear validation or error message is displayed for the invalid or missing input.");
      bullets.push("The screening request does not proceed until the issue is corrected.");
    } else if (/reset/i.test(ctx)) {
      bullets.push("All form fields return to their default empty state.");
      bullets.push("Previously entered values are no longer shown.");
    } else if (/export/i.test(ctx)) {
      bullets.push("Export Report initiates a file download or shows a success confirmation.");
    } else if (/bulk|upload/i.test(ctx)) {
      bullets.push("The uploaded file name and ready status are displayed in the upload zone.");
      bullets.push("Start Bulk Screening opens the Screening Results page when inputs are valid.");
    } else if (/results|match|table|ai summary/i.test(ctx)) {
      bullets.push("Screening Results displays the subject summary, match statistics, and results table.");
      bullets.push("Result rows show expected columns such as score, category, and status.");
    } else if (/watchlist/i.test(ctx)) {
      bullets.push("Only one watchlist profile card is selected at a time.");
      bullets.push("The selected card shows a visible selected state.");
    } else if (/entity|toggle|individual|vessel|non-individual/i.test(ctx)) {
      bullets.push("The correct entity form is displayed for the selected entity type.");
      bullets.push("Fields for other entity types are hidden.");
    } else if (/tab/i.test(ctx)) {
      bullets.push("The selected tab becomes active and shows the correct panel content.");
    } else {
      bullets.push("The described control or section is visible and behaves as expected.");
      bullets.push("The Manual Screening page remains stable with no unexpected errors.");
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

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function buildPreconditions(row: MsExcelRow): string {
  const existing = sanitizeOutput(row.preconditions);
  if (existing && !/logged in and navigated/i.test(existing)) {
    return existing.replace(/logged in and navigated to[^.]*\.?/i, MS_PRECONDITION);
  }
  if (isLogoutCase(row)) {
    return "Test administrator can reset application session state before verifying the form.";
  }
  return MS_PRECONDITION;
}

function buildAcceptanceCriteria(row: MsExcelRow, expected: string): string {
  const firstBullet = expected.split("\n").map((l) => l.replace(/^[•\-]\s*/, "").trim()).find(Boolean);
  if (firstBullet) {
    return sanitizeOutput(firstBullet);
  }
  return sanitizeOutput(row.acceptanceCriteria || extractCoreTask(row.taskDescription));
}

export function expandRow(row: MsExcelRow, _inventory: MsHtmlInventory): EnhancedMsRow {
  let steps = buildFocusedExcelSteps(row);

  let taskDescription: string;
  if (isLogoutCase(row)) {
    steps = [
      "Open the Manual Screening page.",
      "Enter sample values in required Individual form fields from test data.",
      "Refresh the browser or start a new application session without saving the form.",
      "Open the Manual Screening page again.",
      "Confirm the Individual form is in a clean default state with no previous values.",
      "Confirm the entity type defaults to Individual and all fields are empty.",
    ];
    taskDescription =
      "Verify that a fresh Manual Screening session opens with an empty Individual form after prior in-progress entries were abandoned. This ensures analysts do not continue with stale data from an earlier session.";
  } else {
    taskDescription = buildBusinessDescription(row);
  }
  const testSteps = formatNumberedSteps(row, isLogoutCase(row) ? steps : undefined);
  const expectedResult = buildExpectedResults(row, steps);
  const testData = formatMsTestData(`${row.testData} ${taskContext(row)}`) || row.testData;
  const preconditions = buildPreconditions(row);

  return {
    ...row,
    taskDescription,
    acceptanceCriteria: buildAcceptanceCriteria(row, expectedResult),
    preconditions,
    testSteps,
    testData,
    expectedResult,
    isNew: false,
  };
}

export function expandGapRow(
  spec: { id: string; module: string; subModule: string; taskDescription: string; steps: string[]; expected: string[]; testData?: string },
  inventory: MsHtmlInventory,
): EnhancedMsRow {
  const row: MsExcelRow = {
    id: spec.id,
    module: spec.module,
    subModule: spec.subModule,
    taskDescription: spec.taskDescription,
    acceptanceCriteria: spec.expected[0] ?? "",
    preconditions: MS_PRECONDITION,
    testSteps: "",
    testData: spec.testData ?? "",
    priority: "Medium",
    expectedResult: "",
  };
  const expanded = expandRow(row, inventory);
  return {
    ...expanded,
    taskDescription: expanded.taskDescription.length >= 25 ? expanded.taskDescription : sanitizeOutput(spec.taskDescription),
    testSteps: formatNumberedSteps(row, spec.steps),
    expectedResult: spec.expected.map((e) => `• ${sanitizeOutput(e)}`).join("\n"),
    testData: spec.testData ?? expanded.testData,
    isNew: true,
  };
}

export function validateEnhancedRow(row: EnhancedMsRow): string[] {
  const errors: string[] = [];
  const stepCount = countSteps(row.testSteps);
  if (stepCount > MAX_MS_STEPS) errors.push(`${row.id}: ${stepCount} steps exceeds maximum of ${MAX_MS_STEPS}`);
  if (stepCount < MIN_MS_STEPS) errors.push(`${row.id}: ${stepCount} steps below minimum of ${MIN_MS_STEPS}`);
  if (BANNED_OUTPUT.test(row.testSteps) || BANNED_OUTPUT.test(row.expectedResult) || BANNED_OUTPUT.test(row.taskDescription)) {
    errors.push(`${row.id}: banned reference text`);
  }
  if (LOGIN_LOGOUT_PATTERN.test(row.testSteps)) {
    errors.push(`${row.id}: login/logout in steps`);
  }
  const wc = wordCount(row.taskDescription);
  if (wc < 25 || wc > 65) {
    errors.push(`${row.id}: description word count ${wc} outside 25-65 range`);
  }
  return errors;
}
