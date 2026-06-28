import type { MsExcelRow } from "./types";
import {
  buildFocusedExcelSteps,
  extractCoreTask,
  inferEntity,
  isBulkCase,
  isEntityToggleCase,
  isFormModuleCase,
  isLicenseBannerCase,
  isResultsCase,
  isWatchlistModuleCase,
} from "./task-step-scoper";
import { isMatchReviewCase } from "./workbook-reconciler";
import { MAX_MS_STEPS, MIN_MS_STEPS, dedupeStepLines } from "./step-normalizer";

export const TARGET_MS_STEPS = 6;

const BANNED_IN_STEPS =
  /\b(FSD|Functional Specification|HTML|Figma|design document|requirement document|prototype|mockup)\b/i;

const GENERIC_BASE_STEPS = [
  /^complete a screening using valid test data and open screening results\.?$/i,
  /^review the subject summary card, match statistics, and results table\.?$/i,
  /^confirm match rows display scores, categories, and status values\.?$/i,
  /^review the visible page header, navigation, and main content area\.?$/i,
  /^perform the action required to validate .+$/i,
  /^review the .+ area in the .+ form\.?$/i,
  /^perform the action described in the test objective using test data where needed\.?$/i,
  /^confirm the form control behaves as described in the expected result\.?$/i,
  /^review the .+ area and validate that .+$/i,
];

const LOGIN_LOGOUT_PATTERN =
  /\b(login page|log\s?in|sign\s?in|log\s?out|sign\s?out|enter credential|submit login)\b/i;

function cleanHumanText(text: string): string {
  return text
    .replace(BANNED_IN_STEPS, "")
    .replace(/#[\w-]+/g, (match) => match.replace("#", ""))
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeKey(step: string): string {
  return step.toLowerCase().replace(/\s+/g, " ").trim();
}

function endsWithPeriod(step: string): string {
  const trimmed = step.trim();
  return trimmed.endsWith(".") ? trimmed : `${trimmed}.`;
}

export function parseExpectedBullets(row: MsExcelRow): string[] {
  const bullets: string[] = [];
  const seen = new Set<string>();

  for (const line of row.expectedResult.split(/\r?\n/)) {
    const cleaned = cleanHumanText(line.replace(/^[•\-]\s*/, ""));
    if (cleaned.length < 12 || /behaves according to the specification/i.test(cleaned)) {
      continue;
    }
    const key = cleaned.toLowerCase();
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    bullets.push(cleaned);
  }

  return bullets;
}

export function toConfirmStep(bullet: string): string {
  let text = bullet.replace(/\.$/, "").trim();
  text = text
    .replace(/\bredirects to the login page\b/i, "redirects to re-authentication")
    .replace(/\blogin page\b/i, "re-authentication screen");
  if (/^confirm\s/i.test(text)) {
    return endsWithPeriod(text);
  }
  return endsWithPeriod(`Confirm ${text.charAt(0).toLowerCase()}${text.slice(1)}`);
}

function isGenericBaseStep(step: string): boolean {
  return GENERIC_BASE_STEPS.some((pattern) => pattern.test(step.trim()));
}

function stepMentionsTask(step: string, core: string): boolean {
  const words = core
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 4 && !/verify|that|the|area|manual|screening|page|with|when|after|before/.test(w));
  if (words.length === 0) {
    return false;
  }
  const haystack = step.toLowerCase();
  return words.filter((w) => haystack.includes(w)).length >= Math.min(2, words.length);
}

function isNearDuplicate(existing: string[], candidate: string): boolean {
  const candidateKey = normalizeKey(candidate);
  return existing.some((step) => {
    const existingKey = normalizeKey(step);
    if (existingKey === candidateKey) {
      return true;
    }
    if (existingKey.includes(candidateKey) || candidateKey.includes(existingKey)) {
      return true;
    }
    const words = candidateKey.split(" ").filter((word) => word.length > 3);
    const overlap = words.filter((word) => existingKey.includes(word)).length;
    if (overlap >= Math.min(6, words.length)) {
      return true;
    }
    if (/^confirm /i.test(existingKey) && /^confirm /i.test(candidateKey)) {
      const confirmOverlap = words.filter((word) => existingKey.includes(word)).length;
      return confirmOverlap >= Math.min(5, words.length);
    }
    return false;
  });
}

function toActionStep(row: MsExcelRow): string {
  const core = extractCoreTask(row.taskDescription);
  const sub = row.subModule || row.module;
  const desc = row.taskDescription.toLowerCase();
  const coreLower = core.toLowerCase();

  if (/view last results/i.test(desc)) {
    return "Click View Last Results in the top header bar.";
  }
  if (/bulk upload tab/i.test(desc)) {
    return "Click the Bulk Upload tab and review the bulk upload panel.";
  }
  if (/manual screening tab/i.test(desc)) {
    return "Click the Manual Screening tab and review the screening form panel.";
  }
  if (/reset form/i.test(desc)) {
    return "Click Reset Form after entering sample values in the active form fields.";
  }
  if (/start bulk screening/i.test(desc)) {
    return "Click Start Bulk Screening after selecting a valid file and watchlist profile.";
  }
  if (/start screening/i.test(desc)) {
    return "Click Start Screening after completing the required form and watchlist selections.";
  }
  if (/export report/i.test(desc)) {
    return "Click Export Report on the Screening Results page.";
  }
  if (/entity type|toggle|switch/i.test(desc)) {
    const entity = inferEntity(row);
    if (/individual/i.test(coreLower) && !/non-individual/i.test(coreLower)) {
      return "Click the Individual entity type option in the toggle control.";
    }
    if (/non-individual/i.test(coreLower)) {
      return "Click the Non-Individual entity type option in the toggle control.";
    }
    if (/vessel/i.test(coreLower)) {
      return "Click the Vessel entity type option in the toggle control.";
    }
    return `Click the ${entity} entity type option in the toggle control.`;
  }
  if (/click|button|tab|link|upload|download|filter|submit/i.test(desc)) {
    return `Perform the click or selection action required for ${sub}.`;
  }
  if (/enter|input|type|fill|leave|blank|empty|invalid|special char/i.test(desc)) {
    return `Enter or update the field values described in test data for ${sub}.`;
  }
  if (/resize|responsive|viewport|mobile/i.test(desc)) {
    return "Resize the browser window to the viewport width defined in test data.";
  }
  if (/scroll|sticky/i.test(desc)) {
    return `Scroll the Manual Screening page to bring the ${sub} area into view.`;
  }
  return `Review the ${sub} area and validate that ${coreLower}.`;
}

function buildNavigationSteps(row: MsExcelRow): string[] {
  const steps: string[] = [];
  const module = row.module.toLowerCase();
  const sub = row.subModule.toLowerCase();
  const task = extractCoreTask(row.taskDescription).toLowerCase();

  if (isMatchReviewCase(row)) {
    steps.push("Enter Name in English as william in the Individual form using test data.");
    steps.push("Select a Purpose and watchlist profile card, then click Start Screening.");
    steps.push("On Screening Results, open Match Review from the WILLIAM result row.");
    if (/match details/i.test(`${sub} ${task}`)) {
      steps.push("Click the Match Details tab on Match Review.");
    } else if (/view summary/i.test(`${sub} ${task}`)) {
      steps.push("Click the View Summary tab on Match Review.");
    } else if (/false positive|confirm match|escalate case/i.test(`${sub} ${task}`)) {
      steps.push("Use the False Positive, Confirm Match, or Escalate Case action as described in the test objective.");
    } else if (/back to results|back navigation/i.test(`${sub} ${task}`)) {
      steps.push("Click the back arrow in the Match Review header.");
    }
  } else if (/form actions|validation/i.test(module) && /start screening|successful form navigation|navigation after valid/i.test(`${sub} ${task}`)) {
    steps.push("Enter Name in English using test data in the Individual form.");
    steps.push("Select a Purpose and watchlist profile card in the Screening Configuration section.");
    steps.push("Click Start Screening.");
    steps.push("Confirm the Screening Results page opens.");
    steps.push("Confirm Primary Name in the subject summary reflects the entered form value.");
  } else if (/screening results/i.test(module) && /subject summary|primary name|form input|entered on the manual screening form/i.test(`${sub} ${task}`)) {
    steps.push("Enter Name in English as william in the Individual form.");
    steps.push("Select Purpose and watchlist profile card from test data.");
    steps.push("Click Start Screening and confirm Screening Results opens.");
    steps.push("Review the subject summary bar on Screening Results.");
  } else if (/results table/i.test(module) && /row action|action menu|under review|move to case/i.test(`${sub} ${task}`)) {
    steps.push("Open Screening Results for the WILLIAM screening result.");
    steps.push("Click the row action menu on the result row.");
  } else if (isBulkCase(row)) {
    steps.push("Click the Bulk Upload tab to open the bulk screening workspace.");
  } else if (isResultsCase(row)) {
    if (/view last results/i.test(task)) {
      steps.push("Click View Last Results in the top header bar.");
    } else {
      steps.push("Enter valid screening details in the Manual Screening form using test data.");
      steps.push("Select a Purpose and watchlist profile card in the Screening Configuration section.");
      steps.push("Click Start Screening and wait for the Screening Results page to open.");
    }
    if (sub) {
      steps.push(`Locate the ${row.subModule} section on the Screening Results page.`);
    }
  } else if (isEntityToggleCase(row)) {
    steps.push("Locate the Individual, Non-Individual, and Vessel entity toggle above the screening form.");
  } else if (isFormModuleCase(row)) {
    const entity = inferEntity(row);
    if (entity !== "Individual") {
      steps.push(`Select the ${entity} entity type in the toggle.`);
    }
    steps.push(`Scroll to the ${row.subModule} area within the ${entity} form.`);
  } else if (isWatchlistModuleCase(row)) {
    steps.push("Scroll to the Screening Configuration section below the entity form.");
    steps.push("Locate the watchlist profile card grid below the Purpose field.");
  } else if (isLicenseBannerCase(row)) {
    if (/bulk upload/i.test(sub)) {
      steps.push("Click the Bulk Upload tab.");
    } else if (/non-individual/i.test(sub)) {
      steps.push("Select the Non-Individual entity type in the toggle.");
    } else if (/vessel/i.test(sub)) {
      steps.push("Select the Vessel entity type in the toggle.");
    }
    steps.push(`Locate the license warning banner for the ${row.module.replace(/ License Warning Banner$/i, "")} area.`);
  } else if (/layout|top bar|tab navigation/i.test(module)) {
    if (/sidebar|navigation menu/i.test(`${sub} ${task}`)) {
      steps.push("Review the left sidebar navigation groups and Sanctions Screening menu items.");
    }
    if (/breadcrumb/i.test(`${sub} ${task}`)) {
      steps.push("Locate the breadcrumb trail below the page title.");
    }
    if (/top bar|page title|header/i.test(`${sub} ${task}`)) {
      steps.push("Review the page title and top action buttons in the header bar.");
    }
    if (/tab navigation|manual screening tab|bulk upload tab/i.test(`${sub} ${task}`)) {
      steps.push("Confirm the Manual Screening tab is active on first load.");
    }
  }

  return steps;
}

function addUniqueStep(steps: string[], step: string): boolean {
  const cleaned = cleanHumanText(step);
  if (!cleaned || cleaned.length < 8 || isGenericBaseStep(cleaned) || LOGIN_LOGOUT_PATTERN.test(cleaned)) {
    return false;
  }
  const formatted = endsWithPeriod(cleaned);
  if (isNearDuplicate(steps, formatted)) {
    return false;
  }
  steps.push(formatted);
  return true;
}

export function buildTestSteps(row: MsExcelRow): string[] {
  const steps: string[] = [];
  const core = extractCoreTask(row.taskDescription);
  const expectedBullets = parseExpectedBullets(row);
  const base = buildFocusedExcelSteps(row).filter((step) => !isGenericBaseStep(step));

  addUniqueStep(steps, "Open the Manual Screening page.");

  for (const nav of buildNavigationSteps(row)) {
    addUniqueStep(steps, nav);
  }

  for (const step of base) {
    if (/^open the manual screening page/i.test(step)) {
      continue;
    }
    addUniqueStep(steps, step);
  }

  const hasStartScreeningFlow = steps.some((step) => /click start screening/i.test(step));
  if (!hasStartScreeningFlow && !steps.some((step) => stepMentionsTask(step, core))) {
    addUniqueStep(steps, toActionStep(row));
  }

  for (const bullet of expectedBullets) {
    if (steps.length >= MAX_MS_STEPS) {
      break;
    }
    addUniqueStep(steps, toConfirmStep(bullet));
  }

  if (steps.length < MIN_MS_STEPS && row.acceptanceCriteria) {
    addUniqueStep(steps, toConfirmStep(cleanHumanText(row.acceptanceCriteria)));
  }

  while (steps.length < MIN_MS_STEPS) {
    const before = steps.length;
    addUniqueStep(
      steps,
      `Verify the ${row.subModule || row.module} behavior for test case ${row.id} matches the documented expected result.`,
    );
    if (steps.length === before) {
      break;
    }
  }

  while (steps.length < TARGET_MS_STEPS && steps.length < MAX_MS_STEPS) {
    const remaining = expectedBullets.find((bullet) => !isNearDuplicate(steps, toConfirmStep(bullet)));
    if (!remaining) {
      break;
    }
    addUniqueStep(steps, toConfirmStep(remaining));
  }

  return dedupeStepLines(steps).slice(0, MAX_MS_STEPS);
}

export function formatFinalTestSteps(steps: string[]): string {
  return steps.map((step, index) => `${index + 1}. ${step}`).join("\n");
}
