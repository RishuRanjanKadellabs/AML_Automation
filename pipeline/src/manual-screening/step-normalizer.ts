import type { MsExcelRow } from "./types";
import { extractCoreTask, taskContext } from "./task-step-scoper";

export const MIN_MS_STEPS = 4;
export const MAX_MS_STEPS = 8;

export function countSteps(testSteps: string): number {
  return parseStepLines(testSteps).length;
}

export function parseStepLines(testSteps: string): string[] {
  if (!testSteps.trim()) {
    return [];
  }

  const lines = testSteps.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const parsed: string[] = [];

  for (const line of lines) {
    const numbered = line.match(/^\d+\.\s*(.+)$/);
    if (numbered) {
      parsed.push(numbered[1].trim());
      continue;
    }
    if (parsed.length === 0) {
      parsed.push(line);
    } else {
      parsed[parsed.length - 1] = `${parsed[parsed.length - 1]} ${line}`.trim();
    }
  }

  return parsed.filter(Boolean);
}

function normalizeStepKey(step: string): string {
  return step.toLowerCase().replace(/\s+/g, " ").trim();
}

function isSimilarStep(a: string, b: string): boolean {
  return normalizeStepKey(a) === normalizeStepKey(b);
}

export function dedupeStepLines(steps: string[]): string[] {
  const unique: string[] = [];
  for (const step of steps) {
    const cleaned = step.trim();
    if (!cleaned || isGenericStep(cleaned)) {
      continue;
    }
    if (unique.some((existing) => isSimilarStep(existing, cleaned))) {
      continue;
    }
    unique.push(cleaned);
  }
  return unique;
}

export function formatNumberedStepLines(steps: string[]): string {
  return steps.map((step, index) => `${index + 1}. ${step}`).join("\n");
}

export function sanitizeNumberedSteps(testSteps: string): string {
  const deduped = dedupeStepLines(parseStepLines(testSteps));
  return formatNumberedStepLines(deduped.slice(0, MAX_MS_STEPS));
}

const GENERIC_STEP_PATTERNS = [
  /^review the visible labels, buttons, and section headers/i,
  /^confirm the control or section behaves as described/i,
  /^confirm no unexpected error message is displayed/i,
  /^confirm the outcome matches the expected result for this scenario/i,
  /^perform the action described in the test objective/i,
  /^verify the expected outcome on the active manual screening screen/i,
];

export function isGenericStep(step: string): boolean {
  return GENERIC_STEP_PATTERNS.some((p) => p.test(step.trim()));
}

function firstExpectedBullet(row: MsExcelRow): string {
  const line = row.expectedResult
    .split("\n")
    .map((l) => l.replace(/^[•\-]\s*/, "").trim())
    .find((l) => l.length > 12);
  return line ?? "";
}

function verificationCandidates(row: MsExcelRow): string[] {
  const task = extractCoreTask(row.taskDescription).toLowerCase();
  const ctx = taskContext(row);
  const sub = row.subModule.toLowerCase();
  const mod = row.module.toLowerCase();
  const out: string[] = [];

  if (/top bar|page title|header/i.test(ctx)) {
    out.push("Confirm the page title shows Manual Screening in the header bar.");
    out.push("Confirm View Last Results is visible in the top action area.");
  }
  if (/breadcrumb/i.test(ctx)) {
    out.push("Confirm Sanction Screening appears before Manual Screening in the breadcrumb trail.");
  }
  if (/sidebar|navigation menu|menu item/i.test(ctx)) {
    out.push("Confirm Batch Screening and other Sanctions Screening links are listed in the sidebar.");
  }
  if (/tab navigation|manual screening tab|bulk upload tab/i.test(ctx)) {
    out.push("Confirm the active tab underline and label match the visible panel content.");
  }
  if (/entity type|entity toggle|individual|non-individual|vessel/i.test(ctx)) {
    out.push("Confirm only the selected entity form fields are visible.");
  }
  if (/watchlist|screening configuration|purpose/i.test(ctx)) {
    out.push("Confirm the selected watchlist card shows a checkmark and highlighted border.");
    out.push("Confirm the Purpose field displays the chosen screening purpose.");
  }
  if (/joint account/i.test(ctx)) {
    out.push("Confirm joint holder values remain visible after entry.");
  }
  if (/bulk|upload|csv|xls|template/i.test(ctx)) {
    out.push("Confirm the upload zone shows the selected file name and ready status.");
    out.push("Confirm Start Bulk Screening is enabled after a valid file and watchlist are selected.");
  }
  if (/screening results|results table|view last results|ai summary|subject card|metric|stat/i.test(ctx)) {
    out.push("Confirm the subject summary card shows entity, profile, and purpose details.");
    out.push("Confirm the results table lists match rows with score and status columns.");
  }
  if (/export report/i.test(ctx)) {
    out.push("Confirm Export Report initiates download or shows a success confirmation.");
  }
  if (/filter|search|category/i.test(ctx)) {
    out.push("Confirm filtered rows match the entered search or category criteria.");
  }
  if (/reset form/i.test(ctx)) {
    out.push("Confirm mandatory field markers remain visible after the form is reset.");
  }
  if (/start screening|submit/i.test(ctx) && !/validation|invalid|mandatory|missing/i.test(ctx)) {
    out.push("Confirm Screening Results opens with match statistics and a populated results table.");
  }
  if (/validation|mandatory|required|missing|blank/i.test(ctx)) {
    out.push("Confirm validation messages identify each missing required field.");
    out.push("Confirm Start Screening does not open results while validation errors remain.");
  }
  if (/invalid|special char|sql|xss|reject|pdf|oversized|format/i.test(ctx)) {
    out.push("Confirm the error or validation message clearly describes why the input was rejected.");
  }
  if (/accessibility|keyboard|screen reader|aria|focus/i.test(ctx)) {
    out.push("Confirm the control can be reached and activated using keyboard navigation.");
  }
  if (/responsive|mobile|viewport|resize/i.test(ctx)) {
    out.push("Confirm the layout remains usable at the tested viewport width.");
  }
  if (/sticky|scroll/i.test(ctx)) {
    out.push("Confirm the described element remains visible while scrolling the page content.");
  }

  const expected = firstExpectedBullet(row);
  if (expected && out.length < 3) {
    out.push(`Confirm ${expected.charAt(0).toLowerCase()}${expected.slice(1).replace(/\.$/, "")}.`);
  }

  if (out.length === 0) {
    out.push(`Confirm ${sub || mod} behaves as described for this scenario.`);
  }

  return out;
}

export function normalizeStepList(row: MsExcelRow, steps: string[]): string[] {
  const unique = dedupeStepLines(steps);

  if (unique.length > MAX_MS_STEPS) {
    return unique.slice(0, MAX_MS_STEPS);
  }

  if (unique.length < MIN_MS_STEPS) {
    for (const candidate of verificationCandidates(row)) {
      if (unique.length >= MIN_MS_STEPS) break;
      const key = candidate.toLowerCase();
      if (!unique.some((u) => u.toLowerCase() === key)) {
        unique.push(candidate);
      }
    }
  }

  while (unique.length < MIN_MS_STEPS) {
    const fallback = `Confirm the ${row.subModule || row.module} requirement is met on the Manual Screening page.`;
    if (unique.some((u) => u.toLowerCase() === fallback.toLowerCase())) break;
    unique.push(fallback);
  }

  return unique.slice(0, MAX_MS_STEPS);
}
