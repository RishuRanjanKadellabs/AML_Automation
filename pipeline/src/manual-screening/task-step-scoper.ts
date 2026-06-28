import type { MsExcelRow } from "./types";

export function extractCoreTask(taskDescription: string): string {
  let base = taskDescription.trim();
  for (let i = 0; i < 3; i++) {
    base = base
      .replace(/^Verify\s+(that\s+)?/i, "")
      .replace(/^Check\s+that\s+/i, "")
      .trim();
  }
  const firstSentence = (base.split(/[.!?]/)[0] ?? base).trim();
  const onIdx = firstSentence.search(/\s+on\s+(the\s+)?Manual\s+Screening/i);
  let core = onIdx > 8 ? firstSentence.slice(0, onIdx) : firstSentence;
  const words = core.split(/\s+/).filter(Boolean);
  if (words.length > 18) {
    core = words.slice(0, 18).join(" ");
  }
  return core.replace(/,\s*$/, "").replace(/\.\s*$/, "").trim();
}

export function taskContext(row: MsExcelRow): string {
  return `${row.module} ${row.subModule} ${extractCoreTask(row.taskDescription)}`.toLowerCase();
}

function fullContext(row: MsExcelRow): string {
  return `${taskContext(row)} ${row.expectedResult} ${row.acceptanceCriteria}`.toLowerCase();
}

export function isLogoutCase(row: MsExcelRow): boolean {
  return /log\s?out|sign\s?out|session end|re-?login|previous session/i.test(fullContext(row));
}

export function isBulkCase(row: MsExcelRow): boolean {
  return /bulk upload|bulk screening|file upload|csv|xls|template download/i.test(fullContext(row));
}

export function isResultsCase(row: MsExcelRow): boolean {
  return /screening results|results table|results page|view last results|ai summary|subject card|metric|export report|filter results|potential matches|view details/i.test(
    fullContext(row),
  );
}

export function isEntityFormCase(row: MsExcelRow): boolean {
  return /individual form|non-individual|vessel form|entity type|entity toggle|registered name|vessel name|joint account/i.test(
    fullContext(row),
  );
}

export function isWatchlistCase(row: MsExcelRow): boolean {
  return /watchlist|screening configuration|purpose/i.test(fullContext(row));
}

export function isValidationCase(row: MsExcelRow): boolean {
  return /mandatory|required|validation|invalid|error message|reject|empty|missing|oversized|special char|unicode/i.test(
    fullContext(row),
  );
}

export function isLayoutCase(row: MsExcelRow): boolean {
  return /top bar|sidebar|breadcrumb|layout|navigation menu|tab navigation|responsive|accessibility|sticky/i.test(
    fullContext(row),
  );
}

export function isNegativeCase(row: MsExcelRow): boolean {
  return /invalid|empty|missing|reject|error|failure|blocked|not navigate|without navigating|oversized|pdf|duplicate/i.test(
    fullContext(row),
  );
}

export function inferEntity(row: MsExcelRow): "Individual" | "Non-Individual" | "Vessel" {
  const ctx = `${row.taskDescription} ${row.subModule}`.toLowerCase();
  if (/vessel|imo|flag state|call sign/i.test(ctx)) return "Vessel";
  if (/non-individual|non-individuals|registered name|registration number|corporate|director|trustee/i.test(ctx)) {
    return "Non-Individual";
  }
  return "Individual";
}

export function isEntityToggleCase(row: MsExcelRow): boolean {
  return /entity type toggle/i.test(row.module);
}

function buildEntityToggleSteps(row: MsExcelRow): string[] {
  const sub = row.subModule.toLowerCase();
  const task = extractCoreTask(row.taskDescription).toLowerCase();
  const ctx = `${sub} ${task}`;
  const steps: string[] = ["Open the Manual Screening page."];

  if (/toggle rendering|all entity type|all toggle|options are displayed/i.test(ctx)) {
    steps.push("Locate the Individual, Non-Individual, and Vessel entity toggle buttons above the screening form.");
    steps.push("Confirm all three entity type labels are visible in the segmented toggle control.");
    steps.push("Confirm each toggle option is readable and appears as a selectable button.");
    return steps;
  }

  if (/default active|selected by default|individual is active/i.test(ctx)) {
    steps.push("Review the entity toggle on initial page load without clicking any option.");
    steps.push("Confirm Individual is highlighted as the active selection.");
    steps.push("Confirm Non-Individual and Vessel appear in the inactive state.");
    return steps;
  }

  if (/default form visibility|individual form is visible|visible by default/i.test(ctx)) {
    steps.push("Confirm Individual is selected by default in the entity toggle.");
    steps.push("Review the form section displayed below the toggle.");
    steps.push("Confirm Individual form fields are visible on the page.");
    steps.push("Confirm Non-Individual and Vessel form sections are not displayed.");
    return steps;
  }

  if (/initial hidden|hidden on initial|not displayed on initial/i.test(ctx)) {
    if (/vessel/i.test(task)) {
      steps.push("Confirm Individual is the active entity type on initial page load.");
      steps.push("Review the form area below the entity toggle.");
      steps.push("Confirm the Vessel form section is not displayed.");
      steps.push("Confirm only the Individual form fields are visible.");
      return steps;
    }
    steps.push("Confirm Individual is the active entity type on initial page load.");
    steps.push("Review the form area below the entity toggle.");
    steps.push("Confirm the Non-Individual form section is not displayed.");
    steps.push("Confirm only the Individual form fields are visible.");
    return steps;
  }

  if (/active state switching|clicking non-individual|clicking vessel|clicking individual|switches the active state|restores the active state/i.test(ctx)) {
    if (/non-individual/i.test(task)) {
      steps.push("Click the Non-Individual entity type option in the toggle.");
      steps.push("Confirm Non-Individual becomes highlighted as the active selection.");
      steps.push("Confirm Individual and Vessel options return to the inactive state.");
      steps.push("Confirm the active underline or accent styling moves to Non-Individual.");
      return steps;
    }
    if (/vessel/i.test(task)) {
      steps.push("Click the Vessel entity type option in the toggle.");
      steps.push("Confirm Vessel becomes highlighted as the active selection.");
      steps.push("Confirm Individual and Non-Individual options return to the inactive state.");
      steps.push("Confirm the active underline or accent styling moves to Vessel.");
      return steps;
    }
    steps.push("Select Non-Individual or Vessel, then click Individual again.");
    steps.push("Confirm Individual becomes highlighted as the active selection.");
    steps.push("Confirm the Individual form section is displayed below the toggle.");
    steps.push("Confirm previously active entity options appear in the inactive state.");
    return steps;
  }

  if (/form visibility management|only the selected entity form|hides the individual form|hides the previous form|switching from/i.test(ctx)) {
    if (/individual to non-individual|from individual to non/i.test(task)) {
      steps.push("Confirm Individual is selected and the Individual form is visible.");
      steps.push("Click the Non-Individual entity type option.");
      steps.push("Confirm the Individual form is hidden.");
      steps.push("Confirm the Non-Individual form is displayed.");
      return steps;
    }
    if (/non-individuals to vessel|non-individual to vessel|from non-individual/i.test(task)) {
      steps.push("Click Non-Individual and confirm the Non-Individual form is visible.");
      steps.push("Click the Vessel entity type option.");
      steps.push("Confirm the Non-Individual form is hidden.");
      steps.push("Confirm the Vessel form is displayed.");
      return steps;
    }
    steps.push("Click the Non-Individual entity type option.");
    steps.push("Confirm only the Non-Individual form is visible.");
    steps.push("Click the Vessel entity type option.");
    steps.push("Confirm only the Vessel form is visible and other entity forms are hidden.");
    return steps;
  }

  if (/form mapping|form displays when/i.test(ctx)) {
    const entity = inferEntity(row);
    steps.push(`Click the ${entity} entity type option in the toggle.`);
    steps.push(`Confirm ${entity} becomes the active selection in the toggle control.`);
    steps.push(`Confirm the ${entity} form section is displayed below the toggle.`);
    steps.push("Confirm form fields for other entity types are not displayed.");
    return steps;
  }

  if (/inactive button styling|neutral styling/i.test(ctx)) {
    steps.push("Review the entity toggle with Individual selected by default.");
    steps.push("Confirm Non-Individual and Vessel options use neutral inactive styling.");
    steps.push("Click Non-Individual and confirm Individual and Vessel remain in inactive styling.");
    steps.push("Confirm inactive buttons do not use the active accent background.");
    return steps;
  }

  if (/active button styling|accent background|white text/i.test(ctx)) {
    steps.push("Review the entity toggle on initial page load.");
    steps.push("Confirm the selected Individual option uses the active accent background.");
    steps.push("Confirm the active toggle label uses contrasting white or light text.");
    steps.push("Click another entity type and confirm the new selection receives active styling.");
    return steps;
  }

  if (/response performance|updates content immediately|immediately/i.test(ctx)) {
    steps.push("Click the Non-Individual entity type option.");
    steps.push("Confirm the form content switches immediately without a long delay.");
    steps.push("Click the Vessel entity type option.");
    steps.push("Confirm the Vessel form appears right away with visible active-state feedback.");
    return steps;
  }

  if (/watchlist state persistence|preserves selected watchlist|does not reset watchlist/i.test(ctx)) {
    steps.push("Select a watchlist profile card in the Screening Configuration section.");
    steps.push("Click a different entity type option in the toggle.");
    steps.push("Confirm the previously selected watchlist card remains selected.");
    steps.push("Switch entity type again and confirm the watchlist selection is still preserved.");
    return steps;
  }

  if (/form state persistence|does not clear already entered|entered form data/i.test(ctx)) {
    steps.push("Enter sample values in visible Individual form fields from test data.");
    steps.push("Click the Non-Individual entity type option.");
    steps.push("Click Individual again to return to the Individual form.");
    steps.push("Confirm the previously entered Individual field values are still present.");
    return steps;
  }

  if (/responsive behavior|browser resize/i.test(ctx)) {
    steps.push("Resize the browser window to a narrower width.");
    steps.push("Confirm the entity toggle remains visible and clickable.");
    steps.push("Click each entity type option after resize.");
    steps.push("Confirm the correct form section appears for each selected entity type.");
    return steps;
  }

  if (/rapid interaction|rapid switching/i.test(ctx)) {
    steps.push("Quickly click Individual, Non-Individual, and Vessel several times in succession.");
    steps.push("Stop on the last selected entity type.");
    steps.push("Confirm the toggle highlights the final selected option.");
    steps.push("Confirm the form section matches the last selected entity type.");
    return steps;
  }

  steps.push("Locate the Individual, Non-Individual, and Vessel entity toggle buttons.");
  steps.push("Interact with the toggle control as required for this scenario.");
  steps.push("Confirm the entity toggle behaves as described in the expected result.");
  return steps;
}

function moduleEntity(row: MsExcelRow): "Individual" | "Non-Individual" | "Vessel" {
  if (/vessel form/i.test(row.module)) return "Vessel";
  if (/non-individual form/i.test(row.module)) return "Non-Individual";
  return "Individual";
}

export function isFormModuleCase(row: MsExcelRow): boolean {
  return /^(Individual Form|Non-Individual Form|Vessel Form)$/i.test(row.module.trim());
}

export function isWatchlistModuleCase(row: MsExcelRow): boolean {
  return /watchlist configuration/i.test(row.module);
}

export function isLicenseBannerCase(row: MsExcelRow): boolean {
  return /license warning banner/i.test(row.module);
}

function openFormContextSteps(row: MsExcelRow): string[] {
  const entity = moduleEntity(row);
  const steps = ["Open the Manual Screening page."];
  if (entity !== "Individual") {
    steps.push(`Select the ${entity} entity type in the toggle.`);
  }
  return steps;
}

function buildFormModuleSteps(row: MsExcelRow): string[] {
  const entity = moduleEntity(row);
  const sub = row.subModule.toLowerCase();
  const task = extractCoreTask(row.taskDescription).toLowerCase();
  const ctx = `${sub} ${task}`;
  const steps = openFormContextSteps(row);

  if (/form visibility|hidden by default|not displayed on initial/i.test(ctx)) {
    return [
      "Open the Manual Screening page.",
      "Review the form area while Individual is selected by default.",
      `Confirm the ${entity} form section is not displayed on initial load.`,
      "Confirm only the Individual form fields are visible.",
    ];
  }

  if (/entity switching|appears when|displayed when|switched on/i.test(ctx)) {
    if (steps.length === 1) {
      steps.push(`Click the ${entity} entity type in the toggle.`);
    }
    steps.push(`Confirm the ${entity} form section becomes visible below the toggle.`);
    steps.push(`Confirm ${entity}-specific field labels are displayed in the form.`);
    steps.push("Confirm the previously visible Individual form is hidden.");
    return steps;
  }

  if (/basic information|section is displayed/i.test(ctx)) {
    steps.push(`Locate the Basic Information section in the ${entity} form.`);
    steps.push("Confirm the section heading and field labels are visible.");
    steps.push(`Confirm expected ${entity} identification fields are displayed.`);
    return steps;
  }

  if (/section title styling|capitalization|title styling/i.test(ctx)) {
    steps.push(`Locate the Basic Information section title in the ${entity} form.`);
    steps.push("Confirm the section title text and capitalization match the design standard.");
    steps.push("Confirm the title styling is consistent with other form section headers.");
    return steps;
  }

  if (/field rendering|fields are rendered|input fields/i.test(ctx)) {
    steps.push(`Review the input fields in the ${entity} form section.`);
    steps.push("Confirm text boxes, dropdowns, and date fields render with visible labels.");
    steps.push("Confirm each field is editable and aligned within the form layout.");
    return steps;
  }

  if (/grid layout|two-column|column layout/i.test(ctx)) {
    steps.push(`Review the field layout in the ${entity} form section.`);
    steps.push("Confirm related fields are arranged in the expected grid columns.");
    steps.push("Confirm spacing between fields remains consistent across the section.");
    return steps;
  }

  if (/full-width field|full width/i.test(ctx)) {
    steps.push(`Locate full-width fields in the ${entity} form such as address or registered name.`);
    steps.push("Confirm the field spans the full available form width.");
    steps.push("Confirm the full-width field label and input remain aligned.");
    return steps;
  }

  if (/mandatory field|required indicator|asterisk/i.test(ctx)) {
    steps.push(`Review mandatory field labels in the ${entity} form.`);
    steps.push("Confirm required fields show a visible asterisk or required marker.");
    steps.push("Confirm optional fields do not show the mandatory indicator.");
    return steps;
  }

  if (/text input validation|invalid text|special char|sql|xss/i.test(ctx)) {
    steps.push("Enter invalid or special-character text from test data in a form text field.");
    steps.push("Move focus away from the field or attempt to continue.");
    steps.push("Confirm a validation message appears for the invalid input.");
    steps.push("Confirm the invalid value is rejected or flagged before screening starts.");
    return steps;
  }

  if (/date picker|date field|calendar/i.test(ctx)) {
    steps.push("Click a date field in the active form section.");
    steps.push("Confirm the date picker control opens.");
    steps.push("Select a valid date from test data and confirm it appears in the field.");
    return steps;
  }

  if (/date format validation|invalid date|future date|past date/i.test(ctx)) {
    steps.push("Enter an invalid or out-of-range date from test data in the date field.");
    steps.push("Move focus away from the field or attempt to continue.");
    steps.push("Confirm a validation message explains the date format or range issue.");
    return steps;
  }

  if (/country dropdown|dropdown consistency|dropdown options|nationality dropdown/i.test(ctx)) {
    steps.push("Open a country or nationality dropdown in the active form section.");
    steps.push("Review the available options in the dropdown list.");
    steps.push("Select a valid country from test data and confirm it remains selected.");
    return steps;
  }

  if (/identifier validation|registration number|imo number|call sign/i.test(ctx)) {
    steps.push("Enter an invalid identifier value from test data in the relevant field.");
    steps.push("Move focus away from the field or attempt to continue.");
    steps.push("Confirm a validation message appears for the invalid identifier.");
    return steps;
  }

  if (/single-select|one option|only one selection/i.test(ctx)) {
    steps.push("Open the dropdown field referenced in the test objective.");
    steps.push("Select one option from test data.");
    steps.push("Confirm only one value remains selected in the dropdown.");
    return steps;
  }

  if (/joint account/i.test(ctx)) {
    steps.push("Scroll to the Joint Account Holder section below Basic Information.");
    steps.push("Enter joint holder details from test data.");
    steps.push("Confirm the joint holder fields accept and retain the entered values.");
    return steps;
  }

  if (/purpose dropdown/i.test(ctx)) {
    steps.push("Open the Purpose dropdown in the Screening Configuration section.");
    steps.push("Review the available screening purpose options.");
    steps.push("Select a purpose from test data and confirm it remains selected.");
    return steps;
  }

  if (/shared form layout|consistent layout/i.test(ctx)) {
    steps.push(`Compare the ${entity} form layout with the Individual form structure.`);
    steps.push("Confirm shared sections use the same spacing, labels, and field alignment.");
    steps.push("Confirm entity-specific fields appear in the expected locations.");
    return steps;
  }

  steps.push(`Review the ${row.subModule} area in the ${entity} form.`);
  steps.push("Perform the action described in the test objective using test data where needed.");
  steps.push("Confirm the form control behaves as described in the expected result.");
  return steps;
}

function buildWatchlistModuleSteps(row: MsExcelRow): string[] {
  const sub = row.subModule.toLowerCase();
  const task = extractCoreTask(row.taskDescription).toLowerCase();
  const ctx = `${sub} ${task}`;
  const steps = ["Open the Manual Screening page.", "Scroll to the Screening Configuration section."];

  if (/grid rendering|card grid|watchlist configuration card grid/i.test(ctx)) {
    steps.push("Locate the watchlist profile card grid below the Purpose field.");
    steps.push("Confirm watchlist cards are displayed in a grid layout.");
    return steps;
  }

  if (/card count|exactly 6|six watchlist/i.test(ctx)) {
    steps.push("Count the watchlist profile cards displayed in the grid.");
    steps.push("Confirm exactly six watchlist cards are visible.");
    steps.push("Confirm each card shows a title and category label.");
    return steps;
  }

  if (/grid layout structure|layout structure/i.test(ctx)) {
    steps.push("Review the arrangement of watchlist cards in the grid.");
    steps.push("Confirm cards are evenly spaced and aligned in rows.");
    steps.push("Confirm the grid remains readable without overlapping card content.");
    return steps;
  }

  if (/card content display|card title|card description/i.test(ctx)) {
    steps.push("Review the title and description text on each watchlist card.");
    steps.push("Confirm each card shows a profile name and supporting category tag.");
    steps.push("Confirm card content is fully visible within the card boundary.");
    return steps;
  }

  if (/onboarding|continuous monitoring|high-risk|singapore|mas regulatory|uae compliance/i.test(ctx)) {
    const label = row.subModule.replace(/ Card$/i, "");
    steps.push(`Locate the ${label} watchlist card in the grid.`);
    steps.push("Confirm the card title and category tag match the expected profile.");
    steps.push("Click the card and confirm it enters the selected state.");
    return steps;
  }

  if (/single-select|one card|only one watchlist|deselect/i.test(ctx)) {
    steps.push("Click one watchlist profile card.");
    steps.push("Click a second watchlist card.");
    steps.push("Confirm only the most recently selected card remains active.");
    steps.push("Confirm the previous card returns to the unselected state.");
    return steps;
  }

  if (/selected state|checkmark|highlighted border|selected card/i.test(ctx)) {
    steps.push("Click a watchlist profile card.");
    steps.push("Confirm the selected card shows a checkmark or highlighted border.");
    steps.push("Confirm non-selected cards remain in the default state.");
    return steps;
  }

  if (/category tag|tag styling|border styling|default border|hover|disabled/i.test(ctx)) {
    steps.push("Review the default styling of watchlist cards in the grid.");
    steps.push("Hover over or select a card as required by the test objective.");
    steps.push("Confirm the card styling matches the expected default, hover, or selected state.");
    return steps;
  }

  if (/purpose field interaction|purpose.*watchlist|watchlist.*purpose/i.test(ctx)) {
    steps.push("Select a Purpose from the dropdown.");
    steps.push("Select a watchlist profile card.");
    steps.push("Confirm both selections remain visible in the Screening Configuration section.");
    return steps;
  }

  steps.push(`Review the ${row.subModule} area in the watchlist configuration grid.`);
  steps.push("Perform the action described in the test objective.");
  steps.push("Confirm the watchlist cards behave as described in the expected result.");
  return steps;
}

function buildLicenseBannerSteps(row: MsExcelRow): string[] {
  const sub = row.subModule.toLowerCase();
  const task = extractCoreTask(row.taskDescription).toLowerCase();
  const ctx = `${sub} ${task}`;
  const steps = ["Open the Manual Screening page."];

  if (/individual form banner/i.test(ctx)) {
    steps.push("Confirm Individual is selected in the entity toggle.");
    steps.push("Locate the license warning banner in the Individual form section.");
    steps.push("Confirm the banner message and warning icon are visible.");
    return steps;
  }

  if (/non-individual form banner/i.test(ctx)) {
    steps.push("Select the Non-Individual entity type in the toggle.");
    steps.push("Locate the license warning banner in the Non-Individual form section.");
    steps.push("Confirm the banner message and warning icon are visible.");
    return steps;
  }

  if (/vessel form banner/i.test(ctx)) {
    steps.push("Select the Vessel entity type in the toggle.");
    steps.push("Locate the license warning banner in the Vessel form section.");
    steps.push("Confirm the banner message and warning icon are visible.");
    return steps;
  }

  if (/bulk upload banner/i.test(ctx)) {
    steps.push("Click the Bulk Upload tab.");
    steps.push("Locate the license warning banner in the bulk upload section.");
    steps.push("Confirm the banner message and warning icon are visible.");
    return steps;
  }

  if (/banner text|warning message|license message/i.test(ctx)) {
    steps.push("Locate the license warning banner on the active screen.");
    steps.push("Read the banner text displayed to the user.");
    steps.push("Confirm the message clearly communicates the license limitation or warning.");
    return steps;
  }

  if (/warning icon|icon display/i.test(ctx)) {
    steps.push("Locate the license warning banner on the active screen.");
    steps.push("Confirm a warning icon is displayed beside the banner text.");
    steps.push("Confirm the icon remains visible with the banner message.");
    return steps;
  }

  if (/banner styling|background color|border styling/i.test(ctx)) {
    steps.push("Locate the license warning banner on the active screen.");
    steps.push("Review the banner background, border, and text styling.");
    steps.push("Confirm the warning styling matches the expected alert appearance.");
    return steps;
  }

  if (/entity switch|tab switch|persistence|remains visible/i.test(ctx)) {
    if (/tab switch/i.test(ctx)) {
      steps.push("Confirm the license warning banner is visible on the Manual Screening tab.");
      steps.push("Click the Bulk Upload tab.");
      steps.push("Confirm the banner remains visible or reappears as expected on the Bulk Upload tab.");
      return steps;
    }
    steps.push("Confirm the license warning banner is visible for the current entity or tab.");
    steps.push("Switch entity type or tab as described in the test objective.");
    steps.push("Confirm the banner remains visible after the switch.");
    return steps;
  }

  if (/non-dismissible|cannot dismiss|close button/i.test(ctx)) {
    steps.push("Locate the license warning banner on the active screen.");
    steps.push("Attempt to dismiss or close the banner if a control is available.");
    steps.push("Confirm the banner remains visible and cannot be permanently dismissed.");
    return steps;
  }

  if (/standard resolution|cross-section|viewport/i.test(ctx)) {
    steps.push("Review the license warning banner at the standard test viewport size.");
    steps.push("Navigate to the screen area referenced in the test objective.");
    steps.push("Confirm the banner remains visible and readable across the tested section.");
    return steps;
  }

  steps.push(`Review the ${row.subModule} scenario for the license warning banner.`);
  steps.push("Perform the action described in the test objective.");
  steps.push("Confirm the banner behaves as described in the expected result.");
  return steps;
}

export function buildFocusedExcelSteps(row: MsExcelRow): string[] {
  const task = extractCoreTask(row.taskDescription).toLowerCase();
  const steps: string[] = [];

  if (isEntityToggleCase(row)) {
    return buildEntityToggleSteps(row);
  }

  if (isWatchlistModuleCase(row)) {
    return buildWatchlistModuleSteps(row);
  }

  if (isLicenseBannerCase(row)) {
    return buildLicenseBannerSteps(row);
  }

  if (isFormModuleCase(row)) {
    return buildFormModuleSteps(row);
  }

  if (isLayoutCase(row) && !isEntityFormCase(row) && !isBulkCase(row) && !isResultsCase(row)) {
    steps.push("Open the Manual Screening page.");
    if (/sidebar|navigation menu|menu item/i.test(task)) {
      steps.push("Review the left sidebar navigation groups and Sanctions Screening menu items.");
      steps.push("Confirm Manual Screening is highlighted as the active module in the sidebar.");
      return steps;
    }
    if (/breadcrumb/i.test(task)) {
      steps.push("Locate the breadcrumb trail below the page title.");
      steps.push("Confirm the breadcrumb shows Sanction Screening followed by Manual Screening.");
      return steps;
    }
    if (/top bar|page title|view last results/i.test(task)) {
      steps.push("Review the page title and top action buttons in the header bar.");
      if (/view last results/i.test(task)) {
        steps.push("Click View Last Results and confirm the Screening Results page opens.");
      }
      return steps;
    }
    if (/tab navigation|manual screening tab|bulk upload tab/i.test(task)) {
      steps.push("Confirm the Manual Screening tab is active on first load.");
      steps.push("Click the Bulk Upload tab and confirm the bulk upload panel is displayed.");
      steps.push("Click the Manual Screening tab and confirm the screening form returns.");
      return steps;
    }
    if (/entity type|entity toggle/i.test(task)) {
      steps.push("Locate the Individual, Non-Individual, and Vessel entity toggle buttons.");
      steps.push("Click each entity option and confirm the matching form section is displayed.");
      return steps;
    }
    steps.push("Review the visible page header, navigation, and main content area.");
    return steps;
  }

  if (isBulkCase(row)) {
    steps.push("Open the Manual Screening page.");
    steps.push("Click the Bulk Upload tab.");
    if (/template|download/i.test(task)) {
      steps.push("Locate the Download Template button below the upload zone.");
      steps.push("Confirm template guidance text is shown next to the button.");
      return steps;
    }
    if (/invalid|pdf|reject|format/i.test(task)) {
      steps.push("Click the upload zone and select an unsupported file type from test data.");
      steps.push("Confirm the file is rejected or an error message is displayed.");
      return steps;
    }
    if (/oversized|25\s*mb|size/i.test(task)) {
      steps.push("Attempt to upload a file larger than the maximum allowed size from test data.");
      steps.push("Confirm an error message explains the file size limit.");
      return steps;
    }
    if (/watchlist/i.test(task)) {
      steps.push("Select a watchlist profile card for the bulk screening.");
      steps.push("Confirm only one watchlist card remains selected.");
      return steps;
    }
    steps.push("Upload a valid CSV or Excel file from test data using the upload zone.");
    steps.push("Select a watchlist profile card for the bulk screening.");
    steps.push("Click Start Bulk Screening and confirm the Screening Results page opens.");
    return steps;
  }

  if (isResultsCase(row)) {
    if (/view last results/i.test(task) && !/start screening/i.test(task)) {
      steps.push("Open the Manual Screening page.");
      steps.push("Click View Last Results in the top bar.");
    } else {
      steps.push("Open the Manual Screening page.");
      steps.push("Complete a screening using valid test data and open Screening Results.");
    }
    if (/ai summary|genai/i.test(task)) {
      steps.push("Locate the AI Summary panel on the Screening Results page.");
      steps.push("Confirm the summary text references match counts and screening context.");
      return steps;
    }
    if (/export/i.test(task)) {
      steps.push("Click Export Report on the Screening Results page.");
      steps.push("Confirm a download starts or a success message is displayed.");
      return steps;
    }
    if (/filter|search|category/i.test(task)) {
      steps.push("Enter a filter keyword from test data in the results filter field.");
      steps.push("Select a category from the category dropdown if applicable.");
      steps.push("Confirm the results table updates to show matching rows only.");
      return steps;
    }
    if (/empty|zero|no match/i.test(task)) {
      steps.push("Run a screening that returns no matches using test data.");
      steps.push("Confirm the results table shows an empty state or zero matches message.");
      return steps;
    }
    if (/column|table header|sort|pagination/i.test(task)) {
      steps.push("Review the results table headers and row content.");
      steps.push("Confirm expected columns such as Name, Highest Score, Category, and Status are visible.");
      return steps;
    }
    if (/new screening/i.test(task)) {
      steps.push("Click + New Screening on the Screening Results page.");
      steps.push("Confirm the Manual Screening form page opens.");
      return steps;
    }
    steps.push("Review the subject summary card, match statistics, and results table.");
    steps.push("Confirm match rows display scores, categories, and status values.");
    return steps;
  }

  if (
    (isEntityFormCase(row) && !isFormModuleCase(row) && !isWatchlistModuleCase(row) && !isLicenseBannerCase(row))
    || (/form actions|validation/i.test(row.module) && (isValidationCase(row) || isNegativeCase(row) || /reset|start screening|submit/i.test(task)))
  ) {
    const entity = inferEntity(row);
    steps.push("Open the Manual Screening page.");
    if (entity !== "Individual") {
      steps.push(`Select the ${entity} entity type.`);
    }
    if (/reset/i.test(task)) {
      steps.push("Enter sample values in required fields from test data.");
      steps.push("Click Reset Form.");
      steps.push("Confirm all entered field values are cleared.");
      return steps;
    }
    if (isValidationCase(row) || isNegativeCase(row)) {
      if (/mandatory|required|missing|blank/i.test(task)) {
        steps.push("Leave required fields empty.");
        steps.push("Select a watchlist profile card.");
        steps.push("Click Start Screening.");
        steps.push("Confirm validation messages appear for missing required fields.");
        return steps;
      }
      if (/invalid|special char|sql|xss/i.test(task)) {
        steps.push("Enter invalid or special-character values from test data in the relevant fields.");
        steps.push("Click Start Screening or move focus away from the field.");
        steps.push("Confirm the system shows a validation or error message.");
        return steps;
      }
      steps.push("Enter the invalid or incomplete values described in test data.");
      steps.push("Attempt to start screening.");
      steps.push("Confirm the request is blocked and an appropriate message is shown.");
      return steps;
    }
    if (/watchlist|purpose|screening configuration/i.test(task) && !/start screening/i.test(task)) {
      steps.push("Open the Screening Configuration section.");
      if (/purpose/i.test(task)) {
        steps.push("Open the Purpose dropdown and review the available screening purposes.");
      }
      steps.push("Select a watchlist profile card.");
      steps.push("Confirm the selected card shows a checkmark and highlighted border.");
      return steps;
    }
    if (/joint account/i.test(task)) {
      steps.push("Scroll to the Joint Account Holder section below Basic Information.");
      steps.push("Enter joint holder details from test data.");
      steps.push("Confirm the joint holder fields accept and retain the entered values.");
      return steps;
    }
    steps.push(`Enter valid ${entity} screening details from test data.`);
    steps.push("Select a Purpose from the Screening Configuration section.");
    steps.push("Select a watchlist profile card.");
    if (/not navigate|blocked|without opening results/i.test(fullContext(row))) {
      steps.push("Click Start Screening.");
      steps.push("Confirm the user remains on the form page and results do not open.");
      return steps;
    }
    steps.push("Click Start Screening.");
    steps.push("Confirm the Screening Results page opens with match data.");
    return steps;
  }

  steps.push("Open the Manual Screening page.");
  steps.push(`Locate the ${row.subModule || row.module} section on the Manual Screening screen.`);
  steps.push(`Perform the action required to validate ${extractCoreTask(row.taskDescription).toLowerCase()}.`);
  return steps;
}
