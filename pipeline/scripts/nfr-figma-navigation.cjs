/**
 * Figma-derived sidebar / breadcrumb navigation for Milestone1 NFR modules.
 * Labels sourced from pipeline/test-data/Milestone1/Figma/*.html
 */
const path = require("path");
const fs = require("fs");
const { ROOT } = require("./qa-pipeline-utils.cjs");
const { sanitizeCellText } = require("./nfr-excel-text-utils.cjs");

const FIGMA_DIR = path.join(ROOT, "pipeline/test-data/Milestone1/Figma");

/** @type {Record<string, { figma: string, breadcrumb: string, landing: string, navSteps: string[] }>} */
const MODULE_FIGMA_NAV = {
  "Batch Screening": {
    figma: "clari5-Batch-screening_updated.html",
    breadcrumb: "Sanctions Screening › Match Results",
    landing: "Match Results grid on the Sanctions Screening page",
    navSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar, expand Sanction Screening if collapsed.",
      "Click Batch Screening.",
      "On the Sanctions Screening top bar, select the Match Results tab.",
      "Confirm the Match Results page title and primary grid are visible.",
    ],
  },
  "Manual Screening": {
    figma: "Manual_screening_v2.html",
    breadcrumb: "Sanction Screening › Manual Screening",
    landing: "Manual Screening form",
    navSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar under Sanction Screening, click Manual Screening.",
      "Confirm the page title Manual Screening and breadcrumb Sanction Screening › Manual Screening are visible.",
    ],
  },
  "Dedup Screening": {
    figma: "dedup-screening.html",
    breadcrumb: "Sanction Screening › De-dup Screening",
    landing: "De-Duplication Screening page with Search Filters",
    navSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar under Sanction Screening, click De-dup Screening.",
      "Confirm breadcrumb Sanction Screening › De-dup Screening and the De-Duplication Screening page title are visible.",
    ],
  },
  "Customer 360 View": {
    figma: "customer360_v6.html",
    breadcrumb: "KYC | Customer 360° View",
    landing: "Customer 360° View shell with header strip and tab bar",
    navSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar or top navigation, open KYC.",
      "Click Customer 360° View.",
      "Confirm breadcrumb KYC | Customer 360° View is visible.",
    ],
  },
  "KYC Gap Report": {
    figma: "missing_mandatory_v7.html",
    breadcrumb: "Missing Mandatory › KYC Gap Report",
    landing: "KYC Gap Report listing page",
    navSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar, expand Missing Mandatory if collapsed.",
      "Click KYC Gap Report.",
      "Confirm the KYC Gap Report listing page is displayed.",
    ],
  },
  "Missing Mandatory": {
    figma: "missing_mandatory_v7.html",
    breadcrumb: "Missing Mandatory › Missing Mandatory Data Template",
    landing: "Missing Mandatory Data Template listing page",
    navSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar, expand Missing Mandatory if collapsed.",
      "Click Missing Mandatory Data Template.",
      "Confirm the Missing Mandatory Data Template page is displayed.",
    ],
  },
  "Reference Data Registry": {
    figma: "clari5-reference-data-register-v6.html",
    breadcrumb: "Reference Data Register › Reference Masters",
    landing: "Reference Data Register master listing page",
    navSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar, expand Reference Data Register if collapsed.",
      "Click Reference Masters.",
      "Confirm breadcrumb Reference Data Register / Reference Masters is visible.",
    ],
  },
  "Keyword Manager": {
    figma: "keyword_manager_v4.html",
    breadcrumb: "Configuration › Keyword Manager",
    landing: "Keyword Manager listing page",
    navSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar, expand Configuration if collapsed.",
      "Click Keyword Manager.",
      "Confirm the Keyword Manager listing page and primary keyword grid are visible.",
    ],
  },
  "Screening Configuration": {
    figma: "sanctions_screening_config_FINAL.html",
    breadcrumb: "Configuration › Sanctions Screening Configuration",
    landing: "Sanctions Screening Configuration listing page",
    navSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar, expand Configuration if collapsed.",
      "Click Sanctions Screening Configuration.",
      "Confirm the Sanctions Screening Configuration listing page is displayed.",
    ],
  },
  "Custom List Manager": {
    figma: "clari5_custom_list_manager_3.html",
    breadcrumb: "Sanction Screening › Custom lists",
    landing: "Custom lists listing page",
    navSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar under Sanction Screening, click Custom List Management.",
      "Confirm the Custom lists page title and list grid are visible.",
    ],
  },
  "Exception List Manager": {
    figma: "Exception_List_Manager_v3.html",
    breadcrumb: "Sanction Screening › Exception lists",
    landing: "Exception lists listing page",
    navSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar under Sanction Screening, click Exception List Management.",
      "Confirm the Exception lists page title and list grid are visible.",
    ],
  },
  "Ignore Words Configuration": {
    figma: "ignore_words_v3.html",
    breadcrumb: "Configuration › Ignore Words Configuration",
    landing: "Ignore Words Configuration listing page",
    navSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar, expand Configuration if collapsed.",
      "Click Ignore Words Configuration.",
      "Confirm the Ignore Words listing page is displayed.",
    ],
  },
  "Sanction MIS Reports": {
    figma: "sanctions-MIS_Landing_Page_Updated_2_1.html",
    breadcrumb: "Sanction Screening › Sanction MIS Reports",
    landing: "Sanction MIS Reports landing page",
    navSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar under Sanction Screening, click Sanction MIS Reports.",
      "Confirm the Sanction MIS Reports landing page is displayed.",
    ],
  },
};

const NAV_ONLY_PATTERNS = [
  /^open the aml application home page/i,
  /^open the .+ (page|module|landing page|landing view)\.?$/i,
  /^open .+ from the (main )?menu/i,
  /^open .+ in the application under test/i,
  /^navigate to the/i,
  /^navigate directly to/i,
  /^go to the .+ page/i,
  /^in the left sidebar/i,
  /^expand .+ if collapsed/i,
  /^click .+ in the (left )?sidebar/i,
  /^on the .+ top bar/i,
  /^confirm the .+ (page|breadcrumb|grid|listing)/i,
  /^confirm breadcrumb/i,
  /^start timer when selecting menu path/i,
  /^open .+ listing page\.?$/i,
  /^open a fresh browser/i,
  /^clear cache if cold start/i,
  /^open customer 360 page\.?$/i,
  /^measure load duration\.?$/i,
  /^open customer 360 view from the kyc module/i,
  /^navigate using keyboard only/i,
];

const PLACEHOLDER_PATTERNS = [
  /perform the action described/i,
  /execute the workflow that exercises/i,
  /validate the requirement:/i,
  /^verify the expected outcome on the active/i,
  /^on .+, perform the action described in the task using the test data provided\.?$/i,
];

function parseNumberedSteps(text) {
  const raw = sanitizeCellText(text || "");
  if (!raw) return [];

  const lines = raw.split("\n").map((l) => l.trim()).filter(Boolean);
  const steps = [];

  for (const line of lines) {
    const match = line.match(/^(\d+)\.\s*(.+)$/);
    if (match) {
      steps.push({ text: match[2].trim() });
    } else if (steps.length) {
      steps[steps.length - 1].text += ` ${line}`;
    } else {
      steps.push({ text: line });
    }
  }
  return steps;
}

function isNavigationOnlyStep(text) {
  const t = String(text || "").trim();
  if (!t) return true;
  return NAV_ONLY_PATTERNS.some((re) => re.test(t));
}

function isPlaceholderStep(text) {
  return PLACEHOLDER_PATTERNS.some((re) => re.test(String(text || "")));
}

function isTimingNavCase(row) {
  const blob = `${row["Task Description"] || ""} ${row["Test Steps"] || ""}`;
  return /start timer when selecting menu path|module navigation time target|navigation to .+ completes within/i.test(
    blob,
  );
}

function buildTimingNavSteps(module) {
  const nav = MODULE_FIGMA_NAV[module];
  if (!nav) return [];
  const menuPath = nav.breadcrumb.includes("›")
    ? nav.breadcrumb.split("›").map((s) => s.trim()).join(" > ")
    : nav.breadcrumb.replace("|", ">").trim();

  return [
    "Open the AML application home page (user already logged in per preconditions).",
    `Start timer when selecting menu path: ${menuPath}.`,
    `Open ${nav.landing}.`,
    "Stop timer when the module ready indicator is visible (main grid, form shell, or landing content).",
  ];
}

function buildContextNavSteps(row) {
  const module = row.Module;
  const task = String(row["Task Description"] || "");
  const steps = String(row["Test Steps"] || "");
  const blob = `${task} ${steps}`;
  const extra = [];

  if (module === "Customer 360 View") {
    if (/Customer ID|profile for|Arjun Mehta|open the customer/i.test(blob)) {
      extra.push(
        "Search for or select the customer from test data (Customer ID 3159176 — Arjun Mehta) and open the Customer 360 profile.",
      );
    }
    if (/audit tab/i.test(blob)) extra.push("Open the Audit tab on the Customer 360 profile.");
    if (/screening tab/i.test(blob)) extra.push("Open the Screening tab on the Customer 360 profile.");
  }

  if (module === "Reference Data Registry" && /country master|country risk|FATF/i.test(blob)) {
    extra.push("Open the Country Master grid under Reference Masters.");
  }

  if (module === "Manual Screening" && /results|screening results|after screening/i.test(blob)) {
    extra.push(
      "Complete a screening run using test data and wait for the Screening Results page to open.",
    );
  }

  if (module === "Batch Screening" && /batch upload|upload flow|forward screening|reverse screening/i.test(blob)) {
    extra.push("From Match Results, open the Batch Screening upload or job flow.");
  }

  if (
    (module === "Custom List Manager" || module === "Exception List Manager") &&
    /export|csv|pdf/i.test(blob)
  ) {
    extra.push("On the listing page, locate the Export CSV or Export PDF action.");
  }

  if (/complex search|multi-filter|category plus|tab plus|two or more filters/i.test(blob)) {
    extra.push("Apply the filters or search criteria described in the task on the listing grid.");
  }

  return extra;
}

function buildCategoryWorkflowStep(row) {
  const task = String(row["Task Description"] || "");
  const module = row.Module;

  if (/unsupported characters|edge case/i.test(task)) {
    return "Enter unsupported or special characters in the search or filter fields on the active page and submit the action.";
  }
  if (/availability|uptime|business hours/i.test(task)) {
    return "Verify module availability during business hours using the monitoring or health indicator for the module.";
  }

  if (/keyboard|accessibility|usability|tab order|keyboard-navigable/i.test(task)) {
    return "Use Tab, Shift+Tab, Enter, and Escape to navigate critical controls on the page without using the mouse.";
  }
  if (/internationalisation|utf-8|locale|character encoding/i.test(task)) {
    return "Enter UTF-8 or locale-specific characters and verify displayed dates and text render correctly for the configured locale.";
  }
  if (/data freshness|latest available data|computed on page load/i.test(task)) {
    return "Open the relevant customer or listing view and verify displayed scores or values reflect the latest available data on page load.";
  }
  if (/data integrity|validated before save|invalid configurations are rejected/i.test(task)) {
    return "Enter invalid configuration or field values, attempt save, and verify the application rejects the input with a clear error message.";
  }
  if (/security|unauthorized|rbac|mask|pii/i.test(task)) {
    return "Attempt the restricted or sensitive-data action described in the task using the role from test data.";
  }
  if (/export|print|csv|pdf/i.test(task)) {
    return "Trigger the export or print action on the active page and verify the download or output starts within the expected time.";
  }
  if (/search|filter|grid|complex/i.test(task)) {
    return "Apply the search or filter criteria from test data on the primary grid and verify results update.";
  }
  if (/performance|load|response|render|within.*second/i.test(task)) {
    return "Perform the timed action on the active page and measure elapsed time against the SLA in the expected result.";
  }
  if (/audit|audit trail|logged/i.test(task)) {
    return "Perform the state-changing action, then open the audit trail or Audit tab and verify the entry is recorded.";
  }

  return `On ${module}, complete the workflow described in the task using the test data provided.`;
}

function normalizeLegacyActionStep(text, row) {
  let step = String(text || "").trim();
  step = step.replace(/^2b\.\s*/i, "");

  if (/^execute the workflow that exercises/i.test(step)) {
    return buildCategoryWorkflowStep(row);
  }
  if (/^validate the requirement:/i.test(step)) {
    const req = step.replace(/^validate the requirement:\s*/i, "").trim();
    return req ? `Verify ${req}` : buildCategoryWorkflowStep(row);
  }
  if (/^capture evidence/i.test(step)) {
    return "Capture screenshot, timing, or log evidence and compare against the expected result.";
  }

  return step;
}

function dedupeSimilarSteps(steps) {
  const out = [];
  for (const step of steps) {
    const lower = step.toLowerCase();
    const existingIdx = out.findIndex((existing) => {
      const el = existing.toLowerCase();
      if (el === lower) return true;
      if (
        /search for or select the customer|open the customer 360 profile|customer id 3159176|arjun mehta/i.test(el) &&
        /search for or select the customer|open the customer 360 profile|customer id 3159176|arjun mehta/i.test(lower)
      ) {
        return true;
      }
      return (
        (el.includes(lower) && lower.length > 20) ||
        (lower.includes(el) && el.length > 20)
      );
    });
    if (existingIdx < 0) {
      out.push(step);
    } else if (step.length > out[existingIdx].length) {
      out[existingIdx] = step;
    }
  }
  return out;
}

function derivePlaceholderReplacement(row) {
  return buildCategoryWorkflowStep(row);
}

function extractActionSteps(row) {
  const parsed = parseNumberedSteps(row["Test Steps"]);
  const hadPlaceholder = parsed.some((s) => isPlaceholderStep(s.text));

  const actions = parsed
    .map((s) => normalizeLegacyActionStep(s.text, row))
    .map((text) => text.trim())
    .filter((text) => text && !isNavigationOnlyStep(text) && !isPlaceholderStep(text));

  if (hadPlaceholder) {
    const replacement = derivePlaceholderReplacement(row);
    if (!actions.some((a) => a.toLowerCase() === replacement.toLowerCase())) {
      actions.unshift(replacement);
    }
  }

  return dedupeSimilarSteps(actions);
}

function renumberSteps(stepTexts) {
  return stepTexts
    .map((text, index) => `${index + 1}. ${text.trim()}`)
    .join("\n");
}

function buildEnrichedTestSteps(row) {
  const module = row.Module;
  const nav = MODULE_FIGMA_NAV[module];
  if (!nav) return row["Test Steps"];

  let navBlock;
  if (isTimingNavCase(row)) {
    navBlock = buildTimingNavSteps(module);
  } else {
    const actionStepsPreview = extractActionSteps(row);
    const contextExtra = buildContextNavSteps(row).filter(
      (extra) =>
        !actionStepsPreview.some((action) => {
          const a = action.toLowerCase();
          const e = extra.toLowerCase();
          return a.includes(e.slice(0, 28)) || e.includes(a.slice(0, 28));
        }),
    );
    navBlock = [...nav.navSteps, ...contextExtra];
  }

  const actionSteps = extractActionSteps(row);
  const merged = dedupeSimilarSteps([...navBlock]);

  for (const action of actionSteps) {
    const normalized = action.toLowerCase();
    if (merged.some((existing) => existing.toLowerCase() === normalized)) continue;
    merged.push(action);
  }

  return renumberSteps(merged);
}

function hasFigmaNavSource(module) {
  return Boolean(MODULE_FIGMA_NAV[module]);
}

function listModulesWithFigmaNav() {
  return Object.keys(MODULE_FIGMA_NAV);
}

function verifyFigmaFilesExist() {
  const missing = [];
  for (const [module, cfg] of Object.entries(MODULE_FIGMA_NAV)) {
    const abs = path.join(FIGMA_DIR, cfg.figma);
    if (!fs.existsSync(abs)) missing.push({ module, figma: cfg.figma });
  }
  return missing;
}

module.exports = {
  MODULE_FIGMA_NAV,
  FIGMA_DIR,
  parseNumberedSteps,
  buildEnrichedTestSteps,
  buildTimingNavSteps,
  extractActionSteps,
  hasFigmaNavSource,
  listModulesWithFigmaNav,
  verifyFigmaFilesExist,
  buildCategoryWorkflowStep,
  dedupeSimilarSteps,
  normalizeLegacyActionStep,
  isNavigationOnlyStep,
  isPlaceholderStep,
};
