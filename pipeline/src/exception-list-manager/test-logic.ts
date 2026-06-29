import {
  extractCategory,
  extractCustomerId,
  extractExportFormat,
  extractListName,
  extractReasonCode,
  extractScope,
  extractStatusFilter,
  extractTabName,
  extractUserRole,
} from "./parser";
import type { ElmExcelRow } from "./types";

function stripSemicolons(line: string): string {
  return line.trim().replace(/;+$/g, "");
}

function finalizeActionLogic(body: string): string {
  return body
    .split(/[;\n]+/)
    .map(stripSemicolons)
    .filter(Boolean)
    .join(";\n    ");
}

function elmOpenSteps(row: ElmExcelRow, useSidebar = false): string[] {
  const role = extractUserRole(row);
  const lines = ["await elmPage.openExceptionListsDirect(testData.baseUrl)"];
  if (useSidebar || /sidebar|configuration menu|left navigation/i.test(`${row.testSteps} ${row.taskDescription}`)) {
    lines.push("await elmPage.expandConfigurationMenu()");
    lines.push("await elmPage.openExceptionListsFromSidebar()");
  }
  if (role) {
    lines.push(`/* Role from Excel: ${role} */`);
  }
  return lines;
}

function withElm(row: ElmExcelRow, extra: string[] = [], useSidebar = false): string {
  return finalizeActionLogic([...elmOpenSteps(row, useSidebar), ...extra].join(";\n    "));
}

function defaultListName(row: ElmExcelRow): string {
  return extractListName(row.testData, row.taskDescription) ?? "QA Exception List";
}

function defaultCustomerId(row: ElmExcelRow): string {
  return extractCustomerId(row.testData) ?? "CUST-001";
}

function resolveListManagement(row: ElmExcelRow): string {
  const sm = row.subModule.toLowerCase();
  const task = row.taskDescription.toLowerCase();
  const listName = defaultListName(row);
  const category = extractCategory(row.testData, row.taskDescription) ?? "Standard";
  const extra: string[] = ["await elmPage.expectExceptionListManagerViewLoaded()"];

  if (sm.includes("landing")) {
    extra.push(
      "await elmPage.expectSummaryCardsVisible()",
      "await elmPage.expectListGridVisible()",
      "await elmPage.expectStatusTabsVisible()",
      "await elmPage.expectListTableHeadersVisible()",
    );
    if (/search|filter|sort|pagination|export/i.test(task)) {
      extra.push(
        `await elmPage.searchLists("${listName}")`,
        "await elmPage.clearSearch()",
        `await elmPage.applyCategoryFilter("${category}")`,
        `await elmPage.applyStatusFilter("${extractStatusFilter(row.testData, row.taskDescription) ?? "Active"}")`,
        'await elmPage.sortByColumn("Total Entries")',
        'await elmPage.setPageSize("25")',
        "await elmPage.goToNextTablePage()",
        "await elmPage.clickExport()",
        `await elmPage.exportLists("${extractExportFormat(row.testData)}")`,
      );
    }
    return withElm(row, extra, true);
  }

  if (sm.includes("create")) {
    return withElm(row, [
      "await elmPage.openCreateListForm()",
      `await elmPage.fillListName("${listName}")`,
      `await elmPage.selectCategory("${category}")`,
      'await elmPage.fillPurpose("Regulatory exception handling")',
      'await elmPage.fillDefaultExpiryPeriod("12 months")',
      'await elmPage.fillDefaultReviewFrequency("Quarterly")',
      'await elmPage.fillCreationReason("QA validation")',
      "await elmPage.submitCreateList()",
    ]);
  }

  if (sm.includes("view")) {
    return withElm(row, [`await elmPage.openListView("${listName}")`, "await elmPage.expectListMetadataVisible()", "await elmPage.expectEntryGridVisible()"]);
  }

  if (sm.includes("edit")) {
    return withElm(row, [
      `await elmPage.openListView("${listName}")`,
      `await elmPage.openEditList("${listName}")`,
      'await elmPage.updateListField("description", "Updated by automation")',
      "await elmPage.submitEditList()",
    ]);
  }

  if (sm.includes("suspend") || sm.includes("re-activate")) {
    return withElm(row, [
      `await elmPage.suspendList("${listName}")`,
      "await elmPage.expectSuspendWarning()",
      "await elmPage.confirmSuspendList()",
      `await elmPage.reactivateList("${listName}")`,
      "await elmPage.confirmReactivateList()",
    ]);
  }

  if (sm.includes("delete")) {
    return withElm(row, [
      `await elmPage.deleteList("${listName}")`,
      "await elmPage.expectDeleteWarning()",
      "await elmPage.cancelDeleteList()",
    ]);
  }

  return withElm(row, extra);
}

function resolveEntryManagement(row: ElmExcelRow): string {
  const sm = row.subModule.toLowerCase();
  const listName = defaultListName(row);
  const customerId = defaultCustomerId(row);
  const scope = extractScope(row.testData, row.taskDescription) ?? "Watchlist";
  const reasonCode = extractReasonCode(row.testData, row.taskDescription) ?? "RC-01";

  if (sm.includes("add entry")) {
    return withElm(row, [
      `await elmPage.openListView("${listName}")`,
      "await elmPage.openAddEntryForm()",
      `await elmPage.fillCustomerId("${customerId}")`,
      `await elmPage.selectWatchlistScope("${scope}")`,
      `await elmPage.selectReasonCode("${reasonCode}")`,
      'await elmPage.fillEvidenceReference("EVD-001")',
      "await elmPage.submitEntry()",
      "await elmPage.openMakerCheckerQueue()",
    ]);
  }

  if (sm.includes("edit entry")) {
    return withElm(row, [
      `await elmPage.openListView("${listName}")`,
      'await elmPage.openEditEntry("ENTRY-001")',
      'await elmPage.updateEntryField("expiryDate", "2027-12-31")',
      "await elmPage.submitEditEntry()",
      "await elmPage.openMakerCheckerQueue()",
    ]);
  }

  if (sm.includes("suspend") || sm.includes("delete entry")) {
    return withElm(row, [
      `await elmPage.openListView("${listName}")`,
      'await elmPage.suspendEntry("ENTRY-001")',
      'await elmPage.deleteEntry("ENTRY-001")',
      "await elmPage.confirmEntryAction()",
    ]);
  }

  if (sm.includes("ttl") || sm.includes("renewal")) {
    return withElm(row, [
      `await elmPage.openListView("${listName}")`,
      'await elmPage.openEditEntry("ENTRY-001")',
      "await elmPage.expectEntryExpiryVisible()",
      'await elmPage.renewEntry("ENTRY-001")',
      "await elmPage.openMakerCheckerQueue()",
    ]);
  }

  if (sm.includes("bulk upload")) {
    return withElm(row, [
      `await elmPage.openListView("${listName}")`,
      "await elmPage.openBulkUploadModal()",
    ]);
  }

  if (sm.includes("api")) {
    return withElm(row, ["await elmPage.openExceptionListsDirect(testData.baseUrl)"]);
  }

  return withElm(row, [`await elmPage.openListView("${listName}")`, "await elmPage.expectEntryGridVisible()"]);
}

function resolveAuditTrail(row: ElmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const extra = ["await elmPage.expectAuditPanelLoaded()"];

  if (/access control|read access|compliance manager/i.test(task)) {
    extra.push("await elmPage.expectAuditPanelLoaded()");
  }
  if (/search|filter/i.test(task)) {
    extra.push("await elmPage.expectSearchInputVisible()");
  }
  if (/export/i.test(task)) {
    extra.push("await elmPage.clickExport()", `await elmPage.exportLists("${extractExportFormat(row.testData)}")`);
  }

  return withElm(row, extra, true);
}

function resolveRegisterReport(row: ElmExcelRow): string {
  return withElm(row, [
    "await elmPage.openExceptionRegisterReport()",
    "await elmPage.expectReportSectionVisible()",
    "await elmPage.expectSearchInputVisible()",
    "await elmPage.expectExportOptions()",
  ]);
}

function resolveEvaluation(row: ElmExcelRow): string {
  return withElm(row, [
    `await elmPage.openListView("${defaultListName(row)}")`,
    "await elmPage.expectEvaluationOutcome()",
  ]);
}

function resolveMakerChecker(row: ElmExcelRow): string {
  const tab = extractTabName(row.testData, row.taskDescription);
  return withElm(row, [
    "await elmPage.openMakerCheckerQueue()",
    `await elmPage.openQueueTab("${tab}")`,
    "await elmPage.expectMakerCheckerQueueVisible()",
  ]);
}

function resolveReasonCodes(row: ElmExcelRow): string {
  return withElm(row, [
    `await elmPage.openListView("${defaultListName(row)}")`,
    "await elmPage.expectReasonCodeVisible()",
  ]);
}

function resolveRbac(row: ElmExcelRow): string {
  return withElm(row, ["await elmPage.expectExceptionListManagerViewLoaded()"], true);
}

function resolveNotifications(row: ElmExcelRow): string {
  return withElm(row, ["await elmPage.expectNotificationVisible()"]);
}

function resolveNfr(row: ElmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  if (/performance|load|response/i.test(task)) {
    return withElm(row, ["await elmPage.expectExceptionListManagerViewLoaded()", "await elmPage.expectLoadingIndicator()"]);
  }
  return withElm(row, ["await elmPage.expectExceptionListManagerViewLoaded()"]);
}

export function mapElmTestLogic(row: ElmExcelRow): string {
  const mod = row.module.toLowerCase();

  if (mod.includes("exception list management")) {
    return resolveListManagement(row);
  }
  if (mod.includes("exception entry management")) {
    return resolveEntryManagement(row);
  }
  if (mod.includes("audit trail")) {
    return resolveAuditTrail(row);
  }
  if (mod.includes("register report")) {
    return resolveRegisterReport(row);
  }
  if (mod.includes("evaluation") || mod.includes("matching")) {
    return resolveEvaluation(row);
  }
  if (mod.includes("maker-checker")) {
    return resolveMakerChecker(row);
  }
  if (mod.includes("reason code") || mod.includes("evidence")) {
    return resolveReasonCodes(row);
  }
  if (mod.includes("role-based") || mod.includes("rbac")) {
    return resolveRbac(row);
  }
  if (mod.includes("notification")) {
    return resolveNotifications(row);
  }
  if (mod.includes("non-functional")) {
    return resolveNfr(row);
  }

  return withElm(row, ["await elmPage.expectExceptionListManagerViewLoaded()"]);
}
