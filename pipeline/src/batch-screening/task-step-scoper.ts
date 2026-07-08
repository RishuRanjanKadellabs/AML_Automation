import type { BsExcelRow } from "./types";
import type { HtmlNavigationMap } from "./html-navigation";

export function extractCoreTask(taskDescription: string): string {
  let base = taskDescription
    .replace(/^Verify\s+/i, "")
    .replace(/^Check that\s+/i, "")
    .trim();

  base = base.replace(
    /\.\s*Test (the Actions menu and Comment Modal|using the filters or search field|the Export Report button|the Match Review tabs|with the role from test data)\.?.*$/i,
    "",
  );
  const onTheIdx = base.search(/\s+on the\s+/i);
  if (onTheIdx > 8) {
    base = base.slice(0, onTheIdx);
  }
  return base.replace(/,\s*$/, "").replace(/\.\s*$/, "").trim();
}

export function taskContext(row: BsExcelRow): string {
  return `${row.subModule} ${extractCoreTask(row.taskDescription)}`.toLowerCase();
}

function fullContext(row: BsExcelRow): string {
  return `${taskContext(row)} ${row.expectedResult}`.toLowerCase();
}

export function isRbacOrSecurityRow(row: BsExcelRow): boolean {
  return /rbac|security|unauthorized|access denied|restricted role|direct url/i.test(fullContext(row));
}

export function isRbacUnauthorizedRow(row: BsExcelRow): boolean {
  if (!row.subModule.toLowerCase().includes("rbac")) {
    return false;
  }
  const task = row.taskDescription.toLowerCase();
  if (/unauthorized|cannot access|restricted role|access denied|not authorized|limited access/i.test(task)) {
    return true;
  }
  if (/authorized analyst|authorized user|can view match|can access batch/i.test(task)) {
    return false;
  }
  return /unauthorized|cannot access|restricted role/i.test(fullContext(row));
}

export function isCommentModalTask(row: BsExcelRow): boolean {
  return /comment modal|mandatory comment|keyboard focus|confirm action|blank comment|cancel.*comment|whitespace|oversized comment|special char.*comment|sql injection.*comment/i.test(
    fullContext(row),
  );
}

export function isAuditTask(row: BsExcelRow): boolean {
  const task = extractCoreTask(row.taskDescription).toLowerCase();
  if (/export report button visibility|export report functionality|download report|export report is visible|access export report/i.test(task)) {
    return false;
  }
  return /audit trail|audit history|audit log|activity history|duplicate entr|recorded in the audit|action is recorded/i.test(
    fullContext(row),
  );
}

export function isPureExportTask(row: BsExcelRow): boolean {
  return isExportTask(row) && !isAuditTask(row);
}

export function isActionTask(row: BsExcelRow): boolean {
  const t = taskContext(row);
  return /false positive|confirm match|move to case|move to whitelist|move to exception|under review|comment modal|actions menu/i.test(t);
}

export function isBulkUiTask(row: BsExcelRow): boolean {
  return /bulk row selection|bulk action toolbar/i.test(taskContext(row));
}

export function isBulkDispositionTask(row: BsExcelRow): boolean {
  return /bulk|multiple selected|selected records/i.test(taskContext(row)) && !isBulkUiTask(row);
}

export function isBulkTask(row: BsExcelRow): boolean {
  return isBulkUiTask(row) || isBulkDispositionTask(row);
}

export function isUnauthorizedDirectAccessRow(row: BsExcelRow): boolean {
  const blob = `${row.subModule} ${row.taskDescription} ${row.expectedResult}`.toLowerCase();
  return /unauthorized.*(?:direct|url|cannot access)|cannot access.*direct|restricted.*direct url/i.test(blob);
}

export function isFilterOrSearchTask(row: BsExcelRow): boolean {
  const t = taskContext(row);
  return row.subModule.toLowerCase().includes("filters")
    || row.subModule.toLowerCase().includes("search")
    || /filter|search|clear filter/i.test(t);
}

export function isLandingOrShellTask(row: BsExcelRow): boolean {
  const t = taskContext(row);
  return /landing page|loads successfully|page header|total match count|navigation tab|column displays|empty-state|pagination controls|default action status|highest match score|list name with highest|match type|match category|match date|actions dropdown visibility/i.test(t);
}

export function isExportTask(row: BsExcelRow): boolean {
  return /export|download report|audit trail|report generation/i.test(taskContext(row));
}

export function isReviewTabTask(row: BsExcelRow): boolean {
  return /ai summary|match details|view summary|match review/i.test(taskContext(row));
}

export function filterChipNameFromTask(row: BsExcelRow): string | null {
  const t = taskContext(row);
  if (/account number|account no/i.test(t)) return "Account No.";
  if (/customer id/i.test(t)) return "Customer ID";
  if (/branch filter|branch applies/i.test(t)) return "Branch";
  if (/date range filter|date range applies/i.test(t)) return "Date Range";
  if (/screening type/i.test(t)) return "Screening Type";
  if (/list name filter/i.test(t)) return "List Name";
  if (/date range/i.test(t) && isFilterOrSearchTask(row)) return "Date Range";
  return null;
}

export function actionNameFromTask(row: BsExcelRow): string | null {
  const t = taskContext(row);
  if (/false positive/i.test(t)) return "False Positive";
  if (/confirm match/i.test(t)) return "Confirm Match";
  if (/move to case/i.test(t)) return "Move to Case";
  if (/whitelist/i.test(t)) return "Move to Whitelist";
  if (/exception/i.test(t)) return "Move to Exception List";
  if (/under review/i.test(t)) return "Under Review";
  return null;
}

export function buildFocusedExcelSteps(row: BsExcelRow, _navMap: HtmlNavigationMap): string[] {
  const task = extractCoreTask(row.taskDescription);
  const t = task.toLowerCase();
  const steps: string[] = [];

  if (isRbacOrSecurityRow(row)) {
    steps.push("Open Sanctions Screening using the role from test data.");
    if (/direct url|url directly/i.test(t)) {
      steps.push("Open the Batch Screening URL directly.");
      return steps;
    }
    steps.push("Go to the Match Results page.");
    if (/unauthorized|cannot access|access denied|restricted/i.test(t)) {
      return steps;
    }
    if (/export.*unauthorized|without permission to export/i.test(t)) {
      steps.push("Verify Export Report is hidden or disabled for the unauthorized role.");
      return steps;
    }
    steps.push("Attempt the restricted action and verify access is blocked.");
    return steps;
  }

  if (/api|backend/i.test(row.subModule.toLowerCase())) {
    steps.push("Go to the Match Results page and wait for the page to load.");
    if (/failure|error|timeout|500/i.test(t)) {
      steps.push("Trigger the screening data request and verify the UI handles the error gracefully.");
    } else {
      steps.push("Verify Match Results grid loads with screening data from the API.");
    }
    return steps;
  }

  if (/performance|load time|sla|response threshold/i.test(t)) {
    steps.push("Open Sanctions Screening from the main menu.");
    steps.push("Go to the Match Results page and wait for the page to load.");
    steps.push("Measure time until the Match Results grid is fully rendered.");
    return steps;
  }

  steps.push("Open Sanctions Screening from the main menu.");
  steps.push("Go to the Match Results page and wait for the page to load.");

  if (isLandingOrShellTask(row)) {
    steps.push("Check that the filter bar and results grid are visible.");
    if (/navigation tab/i.test(t)) {
      steps.push("Verify top navigation tabs Match Results, Watchlists, and Screening are visible.");
    }
    if (/watchlists/i.test(t)) {
      steps.push("Click the Watchlists top navigation tab and verify the tab becomes active.");
    }
    if (/export report.*visibility/i.test(t) && !/restrict|unauthorized/i.test(t)) {
      steps.push("Click the Export Report button in the Match Results header bar.");
    }
    if (/pagination/i.test(t)) {
      steps.push("Click the pagination next control and verify the page index updates.");
    }
    if (/sort/i.test(t)) {
      steps.push("Click a sortable column header and verify the grid reorders.");
    }
    if (/empty-state|no screening records/i.test(t)) {
      steps.push("Apply criteria that return zero records and verify the empty-state message.");
    }
    return steps;
  }

  if (isFilterOrSearchTask(row)) {
    const chip = filterChipNameFromTask(row);
    if (/clear filter/i.test(t)) {
      steps.push("Apply a filter or search from test data.");
      steps.push("Click Clear Filters and verify all filter chips reset to All.");
      return steps;
    }
    if (/search/i.test(t)) {
      steps.push("Enter the search keyword from test data in the search field.");
      steps.push("Verify only matching records appear in the grid.");
      return steps;
    }
    if (chip) {
      steps.push(`Click the ${chip} filter chip to open its filter panel.`);
      steps.push(`Enter or select a ${chip} value from test data and click Apply.`);
      steps.push(`Verify the ${chip} chip displays the applied value and the grid refreshes.`);
      return steps;
    }
    if (/multiple filters/i.test(t)) {
      for (const c of ["Branch", "Customer ID"]) {
        steps.push(`Click the ${c} filter chip, apply a value from test data, and click Apply.`);
      }
      steps.push("Verify only records matching all applied filters are shown.");
      return steps;
    }
    if (/date range preset|preset dropdown/i.test(t)) {
      steps.push("Click the Date Range Preset dropdown in the page header and select Last Year.");
      return steps;
    }
  }

  if (isExportTask(row)) {
    if (/audit|history/i.test(t)) {
      steps.push("Complete an action on a screening record.");
      steps.push("Verify audit or activity history records the user, timestamp, and comment.");
      return steps;
    }
    steps.push("Click the Export Report button in the Match Results header bar.");
    steps.push("Verify a file download starts or a success message is shown.");
    return steps;
  }

  if (isActionTask(row)) {
    steps.push("Open a screening record from the Match Results grid.");
    const action = actionNameFromTask(row);
    steps.push("Click the Actions dropdown on the screening result row.");
    if (action) {
      steps.push(`Select ${action} from the Actions menu.`);
    }
    if (/mandatory|blank|empty comment/i.test(t)) {
      steps.push("Click Confirm Action without entering a comment and verify validation is shown.");
    } else if (/cancel/i.test(t)) {
      steps.push("Click Cancel on the Comment Modal and verify it closes without changing status.");
    } else {
      steps.push("Enter the action comment from test data and click Confirm Action.");
    }
    steps.push("Verify the record status updates after confirmation.");
    return steps;
  }

  if (isReviewTabTask(row)) {
    steps.push("Open a screening record and navigate to Match Review.");
    if (/ai summary/i.test(t)) {
      steps.push("Click the AI Summary tab and verify the screening summary content loads.");
    } else if (/match details/i.test(t)) {
      steps.push("Click the Match Details tab and verify watchlist hit details are shown.");
    } else if (/view summary/i.test(t)) {
      steps.push("Click the View Summary tab and verify the scorecard content loads.");
    } else {
      steps.push("Switch between Match Review tabs and verify each panel loads.");
    }
    return steps;
  }

  if (/bulk|selected records/i.test(t)) {
    steps.push("Select multiple records using row checkboxes.");
    steps.push("Apply the bulk action from test data and confirm with a comment.");
    steps.push("Verify all selected records update with the chosen action.");
    return steps;
  }

  steps.push("Perform the action described in the test objective.");
  steps.push("Verify the expected outcome on the active Batch Screening page.");
  return steps.slice(0, 8);
}

export function stepMatchesTask(step: string, row: BsExcelRow): boolean {
  const sl = step.toLowerCase();
  const t = taskContext(row);

  if (isLandingOrShellTask(row)) {
    if (/filter chip|export report|actions dropdown|comment modal|match review|screening results page heading|false positive|confirm match/i.test(sl)) {
      return false;
    }
    if (/watchlists/i.test(sl)) return /navigation tab|watchlists/i.test(t);
    if (/date range preset/i.test(sl)) return /date range preset|period/i.test(t);
    if (/export report/i.test(sl)) return /export/i.test(t);
    return /sanctions screening|match results|filter bar|pagination|sortable|column|grid|visible|verify top navigation/i.test(sl);
  }

  if (isFilterOrSearchTask(row)) {
    const chip = filterChipNameFromTask(row);
    if (/filter chip/i.test(sl) && chip) {
      return sl.includes(chip.toLowerCase()) || sl.includes(chip.replace(/\./g, "").toLowerCase());
    }
    if (/search/i.test(sl)) return /search/i.test(t);
    if (/clear filter/i.test(sl)) return /clear filter/i.test(t);
    if (/export|watchlists|comment modal|actions dropdown|match review/i.test(sl)) return false;
    return /sanctions screening|match results|filter|search|grid/i.test(sl);
  }

  if (isExportTask(row)) {
    return /export|audit|match results|sanctions screening/i.test(sl) && !/filter chip|watchlists tab/i.test(sl);
  }

  if (isActionTask(row)) {
    const action = actionNameFromTask(row);
    if (/select .+ from the actions menu/i.test(sl) && action) {
      return sl.includes(action.toLowerCase());
    }
    if (/open a screening|customer name|actions dropdown|comment modal|confirm action|enter action comment/i.test(sl)) {
      return true;
    }
    if (/filter chip|export report|watchlists|pagination next/i.test(sl)) return false;
    return /screening record|match results|actions/i.test(sl);
  }

  if (isRbacOrSecurityRow(row)) {
    return /role|match results|sanctions|unauthorized|direct|restricted|export report is hidden/i.test(sl);
  }

  return true;
}
