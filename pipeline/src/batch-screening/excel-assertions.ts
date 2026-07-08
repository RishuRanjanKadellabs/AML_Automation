import {
  isAuditTask,
  isCommentModalTask,
  isExportTask,
  isPureExportTask,
  isRbacUnauthorizedRow,
  taskContext,
} from "./task-step-scoper";
import type { BsExcelRow } from "./types";
import type { FsdCatalogEntry } from "./fsd-catalog";

export function expectedBullets(row: BsExcelRow): string[] {
  return row.expectedResult
    .split("\n")
    .map((l) => l.replace(/^[•\-]\s*/, "").trim())
    .filter((l) => l.length > 5);
}

function rowBlob(row: BsExcelRow): string {
  return `${row.subModule} ${row.taskDescription} ${row.expectedResult} ${row.testSteps}`.toLowerCase();
}

const POSITIVE_CONTENT_ASSERTIONS = [
  "expectMatchDetailsContentVisible",
  "expectAiSummaryContentVisible",
  "expectViewSummaryContentVisible",
  "expectScreeningResultsWorkspaceLoaded",
  "expectExportReportVisible",
  "expectExportDownloadStarted",
  "expectAuditTrailVisible",
  "expectActionOutcomeApplied",
];

function filterUnauthorizedAssertions(steps: string[]): string[] {
  return steps.filter((s) =>
    s.includes("expectAccessDenied")
    || s.includes("expectExportReportRestricted")
    || s.includes("expectApiFailureHandledGracefully"),
  );
}

function submoduleAssertion(row: BsExcelRow): string {
  if (isRbacUnauthorizedRow(row)) {
    return "await bsPage.expectAccessDenied()";
  }

  const sm = row.subModule.toLowerCase();
  if (sm.includes("screening results") || sm.includes("actions") || sm.includes("comment modal")) {
    if (isCommentModalTask(row)) {
      return "await bsPage.expectCommentModalVisible()";
    }
    return "await bsPage.expectScreeningResultsWorkspaceLoaded()";
  }
  if (sm.includes("match details") || sm.includes("ai summary")) {
    return "await bsPage.expectMatchDetailsContentVisible()";
  }
  if (sm.includes("view summary")) {
    return "await bsPage.expectViewSummaryContentVisible()";
  }
  if (sm.includes("export") || sm.includes("audit")) {
    if (isAuditTask(row)) {
      return "await bsPage.expectAuditTrailVisible()";
    }
    return "await bsPage.expectExportReportVisible()";
  }
  if (sm.includes("threshold") || sm.includes("scoring")) {
    return "await bsPage.expectHighestMatchScoreColumnVisible()";
  }
  if (sm.includes("filters") || sm.includes("search")) {
    return "await bsPage.expectFiltersVisible()";
  }
  if (sm.includes("api")) {
    return "await bsPage.expectMatchResultsPageLoaded()";
  }
  if (sm.includes("performance")) {
    return "await bsPage.expectPageLoadWithinSla(3000)";
  }
  if (sm.includes("integration") || sm.includes("sync")) {
    return "await bsPage.expectMatchResultsPageLoaded()";
  }
  if (sm.includes("rbac") && /export report|export functionality/i.test(taskContext(row))) {
    return "await bsPage.expectExportReportVisible()";
  }
  return "await bsPage.expectMatchResultsPageLoaded()";
}

export function assertionForBullet(bullet: string, row: BsExcelRow): string | null {
  const bl = bullet.toLowerCase();

  if (isRbacUnauthorizedRow(row)) {
    if (/access denied|cannot perform|unauthorized|blocked|deny unauthorized|unauthorized module access|cannot access|restricted/i.test(bl)) {
      return "await bsPage.expectAccessDenied()";
    }
    if (/export report is hidden|hidden or disabled|without permission to export/i.test(bl)) {
      return "await bsPage.expectExportReportRestricted()";
    }
    return null;
  }

  if (/match results page opens|heading, filters, data grid|landing page loads/i.test(bl)) {
    return "await bsPage.expectMatchResultsPageLoaded()";
  }
  if (/screening results|subject card|ai screening summary/i.test(bl)) {
    return "await bsPage.expectScreeningResultsWorkspaceLoaded()";
  }
  if (/move to case action|confirm match action|false positive action|under review action|status updates after confirmation/i.test(bl)) {
    return "await bsPage.expectActionOutcomeApplied()";
  }
  if (/action comment is saved|comment is saved with the user/i.test(bl)) {
    if (/mandatory comment modal should appear|before action execution/i.test(bl)) {
      return "await bsPage.expectCommentValidationVisible()";
    }
    return "await bsPage.expectCommentModalClosed()";
  }
  if (/only matching records|filtered rows match/i.test(bl)) {
    return "await bsPage.expectFiltersVisible()";
  }
  if (/export report downloads|downloads a file/i.test(bl)) {
    return "await bsPage.expectExportDownloadStarted()";
  }
  if (/export report|success message/i.test(bl)) {
    return "await bsPage.expectExportReportVisible()";
  }
  if (/empty-state|no records match|zero records|clear empty-state/i.test(bl)) {
    return "await bsPage.expectEmptyStateVisible()";
  }
  if (/ai summary|screening summary/i.test(bl)) {
    return "await bsPage.expectAiSummaryContentVisible()";
  }
  if (/match details|watchlist hit/i.test(bl)) {
    return "await bsPage.expectMatchDetailsContentVisible()";
  }
  if (/view summary|scorecard/i.test(bl)) {
    return "await bsPage.expectViewSummaryContentVisible()";
  }
  if (/comment modal|mandatory comment validation|keyboard focus|focus trap/i.test(bl)) {
    return "await bsPage.expectCommentModalVisible()";
  }
  if (/audit trail|audit history|recorded in the audit|action is recorded|duplicate entr/i.test(bl)) {
    return "await bsPage.expectAuditTrailVisible()";
  }
  if (/access denied|cannot perform|unauthorized|blocked|deny unauthorized|unauthorized module access/i.test(bl)) {
    return "await bsPage.expectAccessDenied()";
  }
  if (/api should return successful|successful response with correct/i.test(bl)) {
    return "await bsPage.expectMatchResultsPageLoaded()";
  }
  if (/successfully update all selected|bulk.*audit logging|all selected records/i.test(bl)) {
    return "await bsPage.expectActionOutcomeApplied()";
  }
  if (/error or validation message|safely reject|malicious input|clear error/i.test(bl)) {
    if (row.subModule.toLowerCase().includes("filters") || row.subModule.toLowerCase().includes("search")) {
      return "await bsPage.expectSearchHandledGracefully()";
    }
    return "await bsPage.expectCommentValidationVisible()";
  }
  if (/pagination|page index/i.test(bl)) {
    return "await bsPage.expectPaginationVisible()";
  }
  if (/remains after page refresh|after page refresh|remains correct after/i.test(bl)) {
    return "await bsPage.expectMatchResultsPageLoaded()";
  }
  if (/load within|time limit|sla|page or grid loads within/i.test(bl)) {
    return "await bsPage.expectPageLoadWithinSla(3000)";
  }
  if (/api failure|graceful|handled gracefully/i.test(bl)) {
    return "await bsPage.expectApiFailureHandledGracefully()";
  }
  if (/works as described|completes without errors|works correctly/i.test(bl)) {
    return submoduleAssertion(row);
  }
  if (/highest match score|color-coded|match score/i.test(bl)) {
    return "await bsPage.expectHighestMatchScoreColumnVisible()";
  }
  if (/bulk row selection|bulk action toolbar/i.test(bl)) {
    return "await bsPage.expectBatchControlsVisible()";
  }
  if (/bulk|selected records/i.test(bl)) {
    return "await bsPage.expectBatchControlsVisible()";
  }

  return submoduleAssertion(row);
}

export function assertionsFromFsdRules(rules: string[], row: BsExcelRow): string[] {
  const out: string[] = [];
  for (const rule of rules.slice(0, 2)) {
    const rl = rule.toLowerCase();
    if (isRbacUnauthorizedRow(row)) {
      if (/unauthorized|permission|role|access denied/i.test(rl)) {
        out.push("await bsPage.expectAccessDenied()");
      }
      continue;
    }
    if (/export|report/i.test(rl) && isExportTask(row)) {
      out.push("await bsPage.expectExportReportVisible()");
    } else if (/audit|trail|log/i.test(rl) && isAuditTask(row)) {
      out.push("await bsPage.expectAuditTrailVisible()");
    } else if (/comment|mandatory/i.test(rl) && isCommentModalTask(row)) {
      out.push("await bsPage.expectCommentModalVisible()");
    } else if (/unauthorized|permission|role/i.test(rl)) {
      out.push("await bsPage.expectMatchResultsPageShellLoaded()");
    } else if (/score|threshold/i.test(rl)) {
      out.push("await bsPage.expectHighestMatchScoreColumnVisible()");
    } else if (/pagination/i.test(rl)) {
      out.push("await bsPage.expectPaginationVisible()");
    } else {
      out.push(submoduleAssertion(row));
    }
  }
  return out;
}

export function buildAssertionsForRow(row: BsExcelRow, fsdEntry?: FsdCatalogEntry): string[] {
  const steps: string[] = [];
  const bullets = expectedBullets(row);

  for (const bullet of bullets) {
    const assertion = assertionForBullet(bullet, row);
    if (assertion && !steps.includes(assertion)) {
      steps.push(assertion);
    }
  }

  if (steps.length === 0 && fsdEntry?.businessRules.length) {
    for (const a of assertionsFromFsdRules(fsdEntry.businessRules, row)) {
      if (!steps.includes(a)) steps.push(a);
    }
  }

  if (steps.length === 0) {
    steps.push(submoduleAssertion(row));
  }

  if (isRbacUnauthorizedRow(row)) {
    const filtered = filterUnauthorizedAssertions(steps);
    steps.length = 0;
    for (const s of filtered) {
      steps.push(s);
    }
    if (!steps.some((s) => s.includes("expectAccessDenied"))) {
      steps.push("await bsPage.expectAccessDenied()");
    }
    return steps;
  }

  if (isPureExportTask(row)) {
    return steps.filter((s) => !s.includes("expectAuditTrailVisible"));
  }

  return steps;
}

export function hasAuditAssertion(steps: string[]): boolean {
  return steps.some((s) => s.includes("expectAuditTrailVisible"));
}

export function stripPositiveContentAssertions(steps: string[]): string[] {
  return steps.filter((s) => !POSITIVE_CONTENT_ASSERTIONS.some((token) => s.includes(token)));
}
