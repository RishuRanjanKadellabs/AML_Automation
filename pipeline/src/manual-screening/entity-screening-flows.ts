import type { MsExcelRow, GapTestCaseSpec } from "./types";
import type { MsHtmlInventory } from "./html-inventory";
import {
  INDIVIDUAL_FIELDS,
  NON_INDIVIDUAL_FIELDS,
  VESSEL_FIELDS,
} from "./ms-data";

function hasEntityFlowCoverage(rows: MsExcelRow[], entity: EntityKind): boolean {
  const moduleByEntity: Record<EntityKind, string> = {
    individual: "Individual Screening Flow",
    "non-individual": "Non-Individual Screening Flow",
    vessel: "Vessel Screening Flow",
  };
  const idPrefixByEntity: Record<EntityKind, string> = {
    individual: "MS-022",
    "non-individual": "MS-023",
    vessel: "MS-024",
  };
  const moduleName = moduleByEntity[entity].toLowerCase();
  const idPrefix = idPrefixByEntity[entity].toUpperCase();

  return rows.some(
    (row) =>
      row.module.toLowerCase() === moduleName
      || row.id.toUpperCase().startsWith(`${idPrefix}-`),
  );
}

type EntityKind = "individual" | "non-individual" | "vessel";

interface EntityProfile {
  kind: EntityKind;
  module: string;
  idPrefix: string;
  toggleLabel: string;
  primaryField: string;
  primaryValue: string;
  secondaryField: string;
  secondaryValue: string;
  purpose: string;
  watchlist: string;
  entityTypeLabel: string;
  summaryFieldLabel: string;
  matchReviewField: string;
  extraPurposeNote?: string;
}

const ENTITY_PROFILES: EntityProfile[] = [
  {
    kind: "individual",
    module: "Individual Screening Flow",
    idPrefix: "MS-022",
    toggleLabel: "Individual",
    primaryField: "Name in English",
    primaryValue: INDIVIDUAL_FIELDS.name,
    secondaryField: "ID Number",
    secondaryValue: INDIVIDUAL_FIELDS.id,
    purpose: INDIVIDUAL_FIELDS.purpose,
    watchlist: INDIVIDUAL_FIELDS.watchlist,
    entityTypeLabel: "individual",
    summaryFieldLabel: "Primary Name",
    matchReviewField: "Full Name",
  },
  {
    kind: "non-individual",
    module: "Non-Individual Screening Flow",
    idPrefix: "MS-023",
    toggleLabel: "Non-Individual",
    primaryField: "Registered Name (English)",
    primaryValue: NON_INDIVIDUAL_FIELDS.registeredName,
    secondaryField: "Registration Number",
    secondaryValue: NON_INDIVIDUAL_FIELDS.registrationNumber,
    purpose: NON_INDIVIDUAL_FIELDS.purpose,
    watchlist: NON_INDIVIDUAL_FIELDS.watchlist,
    entityTypeLabel: "non-individual",
    summaryFieldLabel: "Primary Name",
    matchReviewField: "Full Name",
  },
  {
    kind: "vessel",
    module: "Vessel Screening Flow",
    idPrefix: "MS-024",
    toggleLabel: "Vessel",
    primaryField: "Vessel Name",
    primaryValue: VESSEL_FIELDS.vesselName,
    secondaryField: "IMO Number",
    secondaryValue: VESSEL_FIELDS.imo,
    purpose: VESSEL_FIELDS.purpose,
    watchlist: VESSEL_FIELDS.watchlist,
    entityTypeLabel: "vessel",
    summaryFieldLabel: "Primary Name",
    matchReviewField: "Full Name",
    extraPurposeNote: "Port Clearance is available for vessel screening in the Purpose dropdown.",
  },
];

function buildEntityFlowSpecs(profile: EntityProfile): GapTestCaseSpec[] {
  const td = `${profile.primaryField}: ${profile.primaryValue}; ${profile.secondaryField}: ${profile.secondaryValue}; Purpose: ${profile.purpose}; Watchlist: ${profile.watchlist}`;

  return [
    {
      id: `${profile.idPrefix}-01`,
      module: profile.module,
      subModule: "Complete End-to-End Screening Flow",
      taskDescription:
        `Verify that a complete ${profile.toggleLabel} manual screening flow runs from form entry through Screening Results to Match Review. This confirms analysts can screen a ${profile.toggleLabel.toLowerCase()} subject and review hits using the v2 workflow.`,
      steps: [
        "Open the Manual Screening page.",
        `Select the ${profile.toggleLabel} entity type in the toggle.`,
        `Enter ${profile.primaryField} as ${profile.primaryValue}, ${profile.secondaryField} from test data, Purpose ${profile.purpose}, and ${profile.watchlist} watchlist profile card.`,
        "Click Start Screening.",
        "Confirm the Screening Results page opens.",
        `Confirm ${profile.summaryFieldLabel} in the subject summary reflects ${profile.primaryValue}.`,
        "Click the 3 LISTS link or View Details on the result row.",
        "Confirm Match Review opens and the screened subject details match the entered form values.",
      ],
      expected: [
        "Start Screening navigates to Screening Results for the selected entity type.",
        "Subject summary and Match Review reflect the entered screening data.",
      ],
      testData: td,
      reason: `v2 complete ${profile.kind} screening flow`,
    },
    {
      id: `${profile.idPrefix}-02`,
      module: profile.module,
      subModule: "Entity Form and Mandatory Fields",
      taskDescription:
        `Verify that the ${profile.toggleLabel} form displays mandatory fields and Screening Configuration controls when the entity type is selected. This ensures the correct form is ready before screening.`,
      steps: [
        "Open the Manual Screening page.",
        `Select the ${profile.toggleLabel} entity type in the toggle.`,
        `Confirm ${profile.primaryField} and ${profile.secondaryField} fields are visible with mandatory indicators.`,
        "Confirm Purpose dropdown and watchlist profile cards are visible in Screening Configuration.",
        "Confirm Reset Form and Start Screening buttons are visible below the form.",
      ],
      expected: [
        `The ${profile.toggleLabel} form section is displayed.`,
        "Mandatory field markers, Purpose, and watchlist cards are visible.",
      ],
      testData: td,
      reason: `v2 ${profile.kind} form visibility`,
    },
    {
      id: `${profile.idPrefix}-03`,
      module: profile.module,
      subModule: "Start Screening to Results Navigation",
      taskDescription:
        `Verify that Start Screening for a valid ${profile.toggleLabel} submission opens Screening Results with the results table and AI summary panel.`,
      steps: [
        "Open the Manual Screening page.",
        `Select the ${profile.toggleLabel} entity type.`,
        `Enter valid ${profile.toggleLabel} screening details from test data.`,
        `Select Purpose ${profile.purpose} and a watchlist profile card.`,
        "Click Start Screening.",
        "Confirm the Screening Results page opens.",
        "Confirm the AI Screening Summary panel and results table are displayed.",
      ],
      expected: [
        "Screening Results page opens after Start Screening.",
        "AI summary and results table are visible.",
      ],
      testData: td,
      reason: `v2 ${profile.kind} start screening navigation`,
    },
    {
      id: `${profile.idPrefix}-04`,
      module: profile.module,
      subModule: "Subject Summary From Form Entry",
      taskDescription:
        `Verify that Screening Results subject summary displays the ${profile.primaryField} and configuration values entered for ${profile.toggleLabel} screening.`,
      steps: [
        "Open the Manual Screening page.",
        `Select the ${profile.toggleLabel} entity type.`,
        `Enter ${profile.primaryField} as ${profile.primaryValue} from test data.`,
        `Select Purpose ${profile.purpose} and ${profile.watchlist} watchlist card.`,
        "Click Start Screening.",
        "Review the subject summary bar on Screening Results.",
        `Confirm ${profile.summaryFieldLabel}, Entity Type, Watchlist Profile, and Purpose match the form selections.`,
      ],
      expected: [
        `${profile.summaryFieldLabel} reflects the entered ${profile.primaryField}.`,
        "Entity type, watchlist, and purpose appear in the subject summary bar.",
      ],
      testData: td,
      reason: `v2 ${profile.kind} subject summary`,
    },
    {
      id: `${profile.idPrefix}-05`,
      module: profile.module,
      subModule: "Results Table Match Row",
      taskDescription:
        `Verify that Screening Results lists a match row for the screened ${profile.toggleLabel} subject with score, list name, and status columns.`,
      steps: [
        `Complete a valid ${profile.toggleLabel} screening using test data and open Screening Results.`,
        "Review the results table below the stats row.",
        "Confirm columns such as Name, Highest Match Score, List Name, Category, and Status are visible.",
        "Confirm at least one result row is displayed for the screened subject.",
      ],
      expected: [
        "Results table displays expected columns.",
        "A match row is shown for the screened subject.",
      ],
      testData: td,
      reason: `v2 ${profile.kind} results table`,
    },
    {
      id: `${profile.idPrefix}-06`,
      module: profile.module,
      subModule: "Results to Match Review Navigation",
      taskDescription:
        `Verify that the analyst can open Match Review from the ${profile.toggleLabel} screening result row on Screening Results.`,
      steps: [
        `Complete a valid ${profile.toggleLabel} screening and open Screening Results.`,
        "Click the 3 LISTS link or View Details action on the result row.",
        "Confirm the Match Review page opens.",
        "Confirm the page title shows Match Review and review tabs are visible.",
      ],
      expected: [
        "Result row action opens Match Review.",
        "Match Review header and tabs are displayed.",
      ],
      testData: td,
      reason: `v2 ${profile.kind} results to match review`,
    },
    {
      id: `${profile.idPrefix}-07`,
      module: profile.module,
      subModule: "Match Review Screened Subject Details",
      taskDescription:
        `Verify that Match Review Match Details shows the screened ${profile.toggleLabel} subject values entered on the form.`,
      steps: [
        `Complete a valid ${profile.toggleLabel} screening and open Match Review from Screening Results.`,
        "Click the Match Details tab.",
        "Review the Screened Subject panel.",
        `Confirm ${profile.matchReviewField} reflects the entered ${profile.primaryField.toLowerCase()} value from test data.`,
        "Confirm watchlist hit cards and attribute comparison rows are displayed.",
      ],
      expected: [
        "Match Details tab shows screened subject values from the form.",
        "Watchlist hit comparison data is visible.",
      ],
      testData: td,
      reason: `v2 ${profile.kind} match review subject details`,
    },
    {
      id: `${profile.idPrefix}-08`,
      module: profile.module,
      subModule: "Reset Form Clears Entity Fields",
      taskDescription:
        `Verify that Reset Form clears entered values on the ${profile.toggleLabel} form without changing the selected entity type.`,
      steps: [
        "Open the Manual Screening page.",
        `Select the ${profile.toggleLabel} entity type.`,
        `Enter sample values in ${profile.primaryField} and ${profile.secondaryField} from test data.`,
        "Click Reset Form.",
        `Confirm ${profile.primaryField} and ${profile.secondaryField} are cleared.`,
        `Confirm ${profile.toggleLabel} remains selected in the entity toggle.`,
      ],
      expected: [
        "Form fields return to empty default state after reset.",
        "Selected entity type remains unchanged.",
      ],
      testData: td,
      reason: `v2 ${profile.kind} reset form`,
    },
    {
      id: `${profile.idPrefix}-09`,
      module: profile.module,
      subModule: "Mandatory Validation Blocks Screening",
      taskDescription:
        `Verify that Start Screening is blocked when mandatory ${profile.toggleLabel} fields are missing and validation messages are shown.`,
      steps: [
        "Open the Manual Screening page.",
        `Select the ${profile.toggleLabel} entity type.`,
        `Leave ${profile.primaryField} empty.`,
        "Select a watchlist profile card.",
        "Click Start Screening.",
        "Confirm validation messages appear for missing mandatory fields.",
        "Confirm Screening Results does not open while validation errors remain.",
      ],
      expected: [
        "Validation messages identify missing mandatory fields.",
        "Screening does not proceed until required fields are completed.",
      ],
      testData: `Leave ${profile.primaryField} blank; Watchlist: ${profile.watchlist}`,
      reason: `v2 ${profile.kind} mandatory validation`,
    },
  ];
}

export function isWorkbookComplete(rows: MsExcelRow[]): boolean {
  return rows.length >= 440
    && hasEntityFlowCoverage(rows, "individual")
    && hasEntityFlowCoverage(rows, "non-individual")
    && hasEntityFlowCoverage(rows, "vessel");
}

export function buildEntityScreeningFlowCases(
  existingRows: MsExcelRow[],
  _inventory: MsHtmlInventory,
): GapTestCaseSpec[] {
  const specs: GapTestCaseSpec[] = [];

  for (const profile of ENTITY_PROFILES) {
    if (hasEntityFlowCoverage(existingRows, profile.kind)) {
      continue;
    }
    for (const spec of buildEntityFlowSpecs(profile)) {
      const duplicate = existingRows.some(
        (row) =>
          row.subModule.toLowerCase() === spec.subModule.toLowerCase()
          && row.module.toLowerCase() === spec.module.toLowerCase(),
      );
      if (!duplicate) {
        specs.push(spec);
      }
    }
  }

  return specs;
}

export function countEntityFlowSpecs(existingRows: MsExcelRow[]): {
  individual: number;
  nonIndividual: number;
  vessel: number;
  total: number;
} {
  const counts = {
    individual: hasEntityFlowCoverage(existingRows, "individual") ? 0 : 9,
    nonIndividual: hasEntityFlowCoverage(existingRows, "non-individual") ? 0 : 9,
    vessel: hasEntityFlowCoverage(existingRows, "vessel") ? 0 : 9,
    total: 0,
  };
  counts.total = counts.individual + counts.nonIndividual + counts.vessel;
  return counts;
}
