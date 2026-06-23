import { buildAssertionsForRow } from "./assertions";
import {
  extractActionOnHit,
  extractDateRange,
  extractEntityName,
  extractExportFormat,
  extractFilterField,
  extractListName,
  extractMatchingMode,
  extractPurpose,
  extractReasonForCreation,
  extractResolution,
  extractSlaThreshold,
  extractTabName,
  extractTtl,
  extractUploadFile,
  extractUserRole,
  extractValue,
} from "./parser";
import type { ClmExcelRow } from "./types";

function stripSemicolons(line: string): string {
  return line.trim().replace(/;+$/g, "");
}

function finalizeActionLogic(body: string): string {
  const lines = body
    .split(/[;\n]+/)
    .map(stripSemicolons)
    .filter(Boolean);
  return lines.join(";\n    ");
}

function finalizeLogic(body: string, row: ClmExcelRow): string {
  const assertions = buildAssertionsForRow(row);
  const lines = body
    .split(/[;\n]+/)
    .map(stripSemicolons)
    .filter(Boolean);
  const assertionLines = assertions
    .split(/[;\n]+/)
    .map(stripSemicolons)
    .filter(Boolean);
  for (const a of assertionLines) {
    if (!lines.includes(a)) {
      lines.push(a);
    }
  }
  return lines.join(";\n    ");
}

function clmOpenSteps(row: ClmExcelRow, useSidebar = false): string[] {
  const role = extractUserRole(row);
  const lines = ["await clmPage.openCustomListManagerDirect(testData.baseUrl)"];
  if (useSidebar || /sidebar|configuration menu|left navigation/i.test(`${row.testSteps} ${row.taskDescription}`)) {
    lines.push("await clmPage.expandConfigurationMenu()");
    lines.push("await clmPage.openCustomListManagerFromSidebar()");
  }
  if (role) {
    // TODO: RBAC role switching mechanism — login fixture per role not yet wired; using default session
    lines.push(`// Role from Excel: ${role}`);
  }
  return lines;
}

function withClm(row: ClmExcelRow, extra: string[] = [], useSidebar = false): string {
  return finalizeActionLogic([...clmOpenSteps(row, useSidebar), ...extra].join(";\n    "));
}

function withClmTab(row: ClmExcelRow, tabName: string, extra: string[] = [], useSidebar = false): string {
  return withClm(row, [`await clmPage.openTab("${tabName}")`, ...extra], useSidebar);
}

function defaultListName(row: ClmExcelRow): string {
  return extractListName(row.testData, row.taskDescription) ?? "Internal Fraud List";
}

function defaultEntityName(row: ClmExcelRow): string {
  return extractEntityName(row.testData) ?? "Test Entity Alpha";
}

function taskBranch(row: ClmExcelRow, branches: Record<string, string[]>, fallback: string[]): string[] {
  const task = row.taskDescription.toLowerCase();
  for (const [key, actions] of Object.entries(branches)) {
    if (task.includes(key)) return actions;
  }
  return fallback;
}

function resolveNavigationAccess(row: ClmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const role = extractUserRole(row);
  const extra: string[] = [];

  if (task.includes("unauthorized") || task.includes("denied") || task.includes("no access")) {
  // TODO: Unauthorized access credentials — specify role/login fixture for denied user
    return finalizeActionLogic([
      `// Role from Excel: ${role ?? "Unauthorized User"}`,
      "await clmPage.mockUnauthorized()",
      "await clmPage.openCustomListManagerDirect(testData.baseUrl)",
      "await clmPage.expectAccessDenied()",
    ].join(";\n    "));
  }
  if (task.includes("sidebar") || task.includes("navigation") || task.includes("menu")) {
    return withClm(row, ["await clmPage.expectCustomListManagerViewLoaded()"], true);
  }
  if (task.includes("direct url") || task.includes("route") || task.includes("deep link")) {
    extra.push("await clmPage.expectOnCustomListManagerRoute()");
  } else if (task.includes("refresh") || task.includes("reload")) {
    extra.push("await clmPage.refreshPage()");
  } else {
    extra.push("await clmPage.expectCustomListManagerViewLoaded()");
  }
  return withClm(row, extra, /configuration menu/i.test(row.testSteps));
}

function resolveBreadcrumbTopBar(row: ClmExcelRow): string {
  const extra = taskBranch(row, {
    breadcrumb: ["await clmPage.expectBreadcrumbVisible()"],
    "top bar": ["await clmPage.expectTopBarVisible()"],
    title: ["await clmPage.expectPageTitleVisible()"],
    back: ["await clmPage.clickBreadcrumbBack()"],
    responsive: [`await clmPage.resizeViewport(${extractResolution(row.testData)?.width ?? 1024}, ${extractResolution(row.testData)?.height ?? 768})`],
  }, ["await clmPage.expectBreadcrumbVisible()", "await clmPage.expectTopBarVisible()"]);
  return withClm(row, extra);
}

function resolveDashboard(row: ClmExcelRow): string {
  const extra = taskBranch(row, {
    header: ["await clmPage.expectDashboardHeaderVisible()"],
    summary: ["await clmPage.expectDashboardSummaryVisible()"],
    counter: ["await clmPage.expectDashboardCountersVisible()"],
    widget: ["await clmPage.expectDashboardWidgetsVisible()"],
    empty: ["await clmPage.expectEmptyDashboardState()"],
  }, ["await clmPage.expectDashboardHeaderVisible()", "await clmPage.expectListGridVisible()"]);
  return withClm(row, extra);
}

function resolveSearchFilters(row: ClmExcelRow): string {
  const listName = defaultListName(row);
  const filter = extractFilterField(row.testData, row.taskDescription) ?? "Status";
  const extra = taskBranch(row, {
    exact: [`await clmPage.searchLists("${listName}")`, "await clmPage.expectSearchResults()"],
    partial: [`await clmPage.searchLists("${listName.slice(0, 6)}")`, "await clmPage.expectSearchResults()"],
    clear: [`await clmPage.searchLists("${listName}")`, "await clmPage.clearSearch()"],
    "no result": ['await clmPage.searchLists("zzznomatch999")', "await clmPage.expectEmptySearchResults()"],
    filter: [`await clmPage.applyFilter("${filter}", "Active")`, "await clmPage.expectFilteredResults()"],
    combine: [`await clmPage.searchLists("${listName}")`, `await clmPage.applyFilter("${filter}", "Active")`],
    case: [`await clmPage.searchLists("${listName.toUpperCase()}")`, "await clmPage.expectSearchResults()"],
  }, ["await clmPage.expectSearchInputVisible()", `await clmPage.searchLists("${listName}")`]);
  return withClm(row, extra);
}

function resolveGridDataPresentation(row: ClmExcelRow): string {
  const column = extractFilterField(row.testData, row.taskDescription) ?? "List Name";
  const extra = taskBranch(row, {
    column: ["await clmPage.expectTableHeadersVisible()"],
    sort: [`await clmPage.sortByColumn("${column}")`],
    row: ["await clmPage.expectTableRowsVisible()"],
    empty: ["await clmPage.expectEmptyTableState()"],
    status: ["await clmPage.expectStatusBadgeVisible()"],
    align: ["await clmPage.expectGridAlignment()"],
  }, ["await clmPage.expectListGridVisible()", "await clmPage.expectTableHeadersVisible()"]);
  return withClm(row, extra);
}

function resolveExportPagination(row: ClmExcelRow): string {
  const format = extractExportFormat(row.testData);
  const extra = taskBranch(row, {
    export: ["await clmPage.clickExport()", `await clmPage.exportLists("${format}")`],
    pagination: ["await clmPage.goToNextTablePage()", "await clmPage.expectPaginationVisible()"],
    "page size": ["await clmPage.changePageSize(25)"],
    download: ["await clmPage.clickExport()", "await clmPage.expectExportOptions()"],
  }, ["await clmPage.expectPaginationVisible()", "await clmPage.expectExportOptions()"]);
  return withClm(row, extra);
}

function resolveLandingActions(row: ClmExcelRow): string {
  const extra = taskBranch(row, {
    create: ["await clmPage.clickCreateList()"],
    import: ["await clmPage.clickBulkUpload()"],
    template: ["await clmPage.downloadTemplate()"],
    refresh: ["await clmPage.refreshGrid()"],
    audit: ["await clmPage.openAuditListing()"],
  }, ["await clmPage.expectLandingActionsVisible()"]);
  return withClm(row, extra);
}

function resolveCreateListForm(row: ClmExcelRow): string {
  const listName = defaultListName(row);
  const extra: string[] = ["await clmPage.openCreateListForm()"];

  const task = row.taskDescription.toLowerCase();
  if (task.includes("cancel") || task.includes("close")) {
    extra.push("await clmPage.cancelCreateList()");
  } else if (task.includes("required") || task.includes("mandatory") || task.includes("empty")) {
    extra.push("await clmPage.submitCreateList()");
    extra.push("await clmPage.expectInlineValidationError()");
  } else {
    extra.push(`await clmPage.fillListName("${listName}")`);
    if (task.includes("submit") || task.includes("save") || task.includes("create")) {
      extra.push("await clmPage.submitCreateList()");
    }
  }
  return withClm(row, extra);
}

function resolveListNameValidation(row: ClmExcelRow): string {
  const listName = defaultListName(row);
  const extra: string[] = ["await clmPage.openCreateListForm()"];
  const task = row.taskDescription.toLowerCase();

  if (task.includes("duplicate")) {
    extra.push(`await clmPage.fillListName("${listName}")`);
    extra.push("await clmPage.submitCreateList()");
    extra.push("await clmPage.expectInlineValidationError()");
  } else if (task.includes("special character") || task.includes("invalid")) {
    extra.push('await clmPage.fillListName("Invalid<>Name")');
    extra.push("await clmPage.submitCreateList()");
    extra.push("await clmPage.expectInlineValidationError()");
  } else if (task.includes("length") || task.includes("max")) {
    extra.push(`await clmPage.fillListName("${"x".repeat(256)}")`);
    extra.push("await clmPage.submitCreateList()");
  } else {
    extra.push(`await clmPage.fillListName("${listName}")`);
    extra.push("await clmPage.expectListNameValidationPassed()");
  }
  return withClm(row, extra);
}

function resolvePurposeConfiguration(row: ClmExcelRow): string {
  const purpose = extractPurpose(row.testData) ?? "Internal Fraud";
  const extra: string[] = [
    "await clmPage.openCreateListForm()",
    `await clmPage.selectPurpose("${purpose}")`,
  ];
  if (/required|mandatory/i.test(row.taskDescription)) {
    extra.push("await clmPage.submitCreateList()");
    extra.push("await clmPage.expectInlineValidationError()");
  }
  return withClm(row, extra);
}

function resolveActionOnHitConfiguration(row: ClmExcelRow): string {
  const action = extractActionOnHit(row.testData) ?? "Alert";
  const extra: string[] = [
    "await clmPage.openCreateListForm()",
    `await clmPage.configureActionOnHit("${action}")`,
  ];
  // TODO: Action-on-hit option catalog — confirm available values from live UI
  return withClm(row, extra);
}

function resolveTtlConfiguration(row: ClmExcelRow): string {
  const ttl = extractTtl(row.testData) ?? "90 days";
  const extra: string[] = [
    "await clmPage.openCreateListForm()",
    `await clmPage.configureTtl("${ttl}")`,
  ];
  if (/invalid|negative|zero/i.test(row.taskDescription)) {
    extra.push("await clmPage.submitCreateList()");
    extra.push("await clmPage.expectInlineValidationError()");
  }
  return withClm(row, extra);
}

function resolveMatchingConfiguration(row: ClmExcelRow): string {
  const mode = extractMatchingMode(row.testData) ?? "Exact";
  const extra: string[] = [
    "await clmPage.openCreateListForm()",
    `await clmPage.configureMatching("${mode}")`,
  ];
  // TODO: Matching mode matrix — fuzzy/partial thresholds not specified in Excel
  return withClm(row, extra);
}

function resolveReasonForCreation(row: ClmExcelRow): string {
  const reason = extractReasonForCreation(row.testData) ?? "Regulatory requirement";
  const extra: string[] = [
    "await clmPage.openCreateListForm()",
    `await clmPage.fillReasonForCreation("${reason}")`,
  ];
  if (/required|mandatory/i.test(row.taskDescription)) {
    extra.push("await clmPage.submitCreateList()");
    extra.push("await clmPage.expectInlineValidationError()");
  }
  return withClm(row, extra);
}

function resolveDraftManagement(row: ClmExcelRow): string {
  const listName = defaultListName(row);
  const extra: string[] = [];
  const task = row.taskDescription.toLowerCase();

  if (task.includes("save draft") || task.includes("draft")) {
    extra.push("await clmPage.openCreateListForm()");
    extra.push(`await clmPage.fillListName("${listName}")`);
    extra.push("await clmPage.saveDraft()");
  } else if (task.includes("resume") || task.includes("edit draft")) {
    extra.push('await clmPage.openTab("Draft")');
    extra.push(`await clmPage.openList("${listName}")`);
  } else if (task.includes("discard")) {
    extra.push('await clmPage.openTab("Draft")');
    extra.push("await clmPage.discardDraft()");
  } else {
    extra.push('await clmPage.openTab("Draft")');
    extra.push("await clmPage.expectDraftStateVisible()");
  }
  return withClm(row, extra);
}

function resolveSubmissionWorkflow(row: ClmExcelRow): string {
  const listName = defaultListName(row);
  const role = extractUserRole(row) ?? "Maker";
  const extra: string[] = [
    `// TODO: Submission workflow role — switch session to: ${role}`,
    "await clmPage.openCreateListForm()",
    `await clmPage.fillListName("${listName}")`,
  ];
  const task = row.taskDescription.toLowerCase();
  if (task.includes("submit")) {
    extra.push("await clmPage.submitCreateList()");
  } else if (task.includes("pending") || task.includes("queue")) {
    extra.push("await clmPage.submitCreateList()");
    extra.push("await clmPage.openAllRequests()");
  } else {
    extra.push("await clmPage.expectSubmissionWorkflowState()");
  }
  return withClm(row, extra);
}

function resolveEditList(row: ClmExcelRow): string {
  const listName = defaultListName(row);
  const extra: string[] = [`await clmPage.openEditList("${listName}")`];
  if (/save|update|submit/i.test(row.taskDescription)) {
    extra.push(`await clmPage.fillListName("${listName} Updated")`);
    extra.push("await clmPage.saveListChanges()");
  } else if (/cancel/i.test(row.taskDescription)) {
    extra.push("await clmPage.cancelListEdit()");
  }
  return withClm(row, extra);
}

function resolveEnableDisable(row: ClmExcelRow): string {
  const listName = defaultListName(row);
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = [];

  if (task.includes("disable")) {
    extra.push(`await clmPage.disableList("${listName}")`);
    if (task.includes("confirm")) {
      extra.push("await clmPage.confirmDisableList()");
    }
  } else if (task.includes("enable")) {
    extra.push(`await clmPage.enableList("${listName}")`);
  } else {
    extra.push(`await clmPage.toggleListStatus("${listName}")`);
  }
  return withClm(row, extra);
}

function resolveMetadataIntegrity(row: ClmExcelRow): string {
  const listName = defaultListName(row);
  return withClm(row, [
    `await clmPage.openList("${listName}")`,
    "await clmPage.expectMetadataIntegrity()",
    "await clmPage.expectMetadataFieldsReadOnly()",
  ]);
}

function resolveAddEntityForm(row: ClmExcelRow): string {
  const listName = defaultListName(row);
  const entity = defaultEntityName(row);
  const extra: string[] = [
    `await clmPage.openList("${listName}")`,
    "await clmPage.openAddEntityForm()",
  ];
  const task = row.taskDescription.toLowerCase();
  if (task.includes("cancel")) {
    extra.push("await clmPage.cancelAddEntity()");
  } else if (task.includes("required") || task.includes("mandatory")) {
    extra.push("await clmPage.submitEntity()");
    extra.push("await clmPage.expectInlineValidationError()");
  } else {
    extra.push(`await clmPage.fillEntityName("${entity}")`);
    if (task.includes("submit") || task.includes("save")) {
      extra.push("await clmPage.submitEntity()");
    }
  }
  return withClm(row, extra);
}

function resolveMinimumScreeningEligibility(row: ClmExcelRow): string {
  const extra: string[] = [
    "await clmPage.openAddEntityForm()",
    "await clmPage.configureMinimumScreeningEligibility()",
  ];
  // TODO: Minimum screening eligibility rules — field-level criteria not specified in Excel
  if (/block|prevent|ineligible/i.test(row.taskDescription)) {
    extra.push("await clmPage.submitEntity()");
    extra.push("await clmPage.expectSubmissionBlocked()");
  }
  return withClm(row, extra);
}

function resolveIdentityInformation(row: ClmExcelRow): string {
  const entity = defaultEntityName(row);
  const extra: string[] = [
    "await clmPage.openAddEntityForm()",
    `await clmPage.fillIdentityInformation("${entity}")`,
  ];
  if (/required|mandatory/i.test(row.taskDescription)) {
    extra.push("await clmPage.submitEntity()");
    extra.push("await clmPage.expectInlineValidationError()");
  }
  return withClm(row, extra);
}

function resolveIdentifierInformation(row: ClmExcelRow): string {
  const idValue = extractValue(row.testData, "Identifier") ?? "PASSPORT-12345";
  const extra: string[] = [
    "await clmPage.openAddEntityForm()",
    `await clmPage.fillIdentifierInformation("${idValue}")`,
  ];
  return withClm(row, extra);
}

function resolveDigitalIdentifiers(row: ClmExcelRow): string {
  const digitalId = extractValue(row.testData, "Digital Identifier") ?? "wallet@example.com";
  const extra: string[] = [
    "await clmPage.openAddEntityForm()",
    `await clmPage.fillDigitalIdentifiers("${digitalId}")`,
  ];
  return withClm(row, extra);
}

function resolveLocalization(row: ClmExcelRow): string {
  const locale = extractValue(row.testData, "Locale") ?? extractValue(row.testData, "Language") ?? "ar-SA";
  const extra: string[] = [
    "await clmPage.openAddEntityForm()",
    `await clmPage.configureLocalization("${locale}")`,
  ];
  // TODO: Localization script samples — multilingual entity name corpus not in Excel
  return withClm(row, extra);
}

function resolveRiskGovernance(row: ClmExcelRow): string {
  const risk = extractValue(row.testData, "Risk Level") ?? "High";
  const extra: string[] = [
    "await clmPage.openAddEntityForm()",
    `await clmPage.configureRiskGovernance("${risk}")`,
  ];
  return withClm(row, extra);
}

function resolveRealTimeAlertConfiguration(row: ClmExcelRow): string {
  const extra: string[] = [
    "await clmPage.openCreateListForm()",
    "await clmPage.configureRealTimeAlert()",
  ];
  // TODO: Real-time alert channel config — webhook/email settings not specified in Excel
  return withClm(row, extra);
}

function resolveEntitySubmissionWorkflow(row: ClmExcelRow): string {
  const entity = defaultEntityName(row);
  const role = extractUserRole(row) ?? "Maker";
  const extra: string[] = [
    `// TODO: Entity submission role — switch session to: ${role}`,
    "await clmPage.openAddEntityForm()",
    `await clmPage.fillEntityName("${entity}")`,
    "await clmPage.submitEntity()",
  ];
  if (/pending|queue/i.test(row.taskDescription)) {
    extra.push("await clmPage.openAllRequests()");
  }
  return withClm(row, extra);
}

function resolveEntityGrid(row: ClmExcelRow): string {
  const listName = defaultListName(row);
  const column = extractFilterField(row.testData) ?? "Entity Name";
  const extra: string[] = [
    `await clmPage.openList("${listName}")`,
    "await clmPage.expectEntityGridVisible()",
  ];
  if (/sort/i.test(row.taskDescription)) {
    extra.push(`await clmPage.sortEntityColumn("${column}")`);
  } else if (/filter/i.test(row.taskDescription)) {
    extra.push(`await clmPage.filterEntityGrid("${column}")`);
  }
  return withClm(row, extra);
}

function resolveViewEntity(row: ClmExcelRow): string {
  const entity = defaultEntityName(row);
  return withClm(row, [
    `await clmPage.viewEntity("${entity}")`,
    "await clmPage.expectEntityDetailsVisible()",
  ]);
}

function resolveEditEntity(row: ClmExcelRow): string {
  const entity = defaultEntityName(row);
  const extra: string[] = [`await clmPage.editEntity("${entity}")`];
  if (/save|update/i.test(row.taskDescription)) {
    extra.push(`await clmPage.fillEntityName("${entity} Updated")`);
    extra.push("await clmPage.saveEntityChanges()");
  }
  return withClm(row, extra);
}

function resolveEnableDisableEntity(row: ClmExcelRow): string {
  const entity = defaultEntityName(row);
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = [];
  if (task.includes("disable")) {
    extra.push(`await clmPage.disableEntity("${entity}")`);
    if (task.includes("confirm")) extra.push("await clmPage.confirmDisableEntity()");
  } else {
    extra.push(`await clmPage.enableEntity("${entity}")`);
  }
  return withClm(row, extra);
}

function resolveEntityMetadata(row: ClmExcelRow): string {
  const entity = defaultEntityName(row);
  return withClm(row, [
    `await clmPage.viewEntity("${entity}")`,
    "await clmPage.expectEntityMetadataVisible()",
  ]);
}

function resolveEntityHistory(row: ClmExcelRow): string {
  const entity = defaultEntityName(row);
  return withClm(row, [
    `await clmPage.viewEntity("${entity}")`,
    "await clmPage.openEntityHistory()",
    "await clmPage.expectEntityHistoryVisible()",
  ]);
}

function resolveTemplateDownload(row: ClmExcelRow): string {
  const listName = defaultListName(row);
  return withClm(row, [
    `await clmPage.openList("${listName}")`,
    "await clmPage.downloadTemplate()",
    "await clmPage.expectTemplateDownloadStarted()",
  ]);
}

function resolveUploadValidation(row: ClmExcelRow): string {
  const file = extractUploadFile(row.testData) ?? "entities-valid.csv";
  const listName = defaultListName(row);
  const extra: string[] = [
    `await clmPage.openList("${listName}")`,
    "await clmPage.openBulkUploadModal()",
    `await clmPage.uploadBulkFile("${file}")`,
  ];
  if (/error|invalid|reject/i.test(row.taskDescription)) {
    extra.push("await clmPage.expectUploadValidationError()");
  } else {
    extra.push("await clmPage.submitBulkUpload()");
  }
  // TODO: Upload fixture paths — place sample CSV files under pipeline/test-data/custom-list-manager/
  return withClm(row, extra);
}

function resolveFileFormatValidation(row: ClmExcelRow): string {
  const file = extractUploadFile(row.testData) ?? "entities-invalid.txt";
  return withClm(row, [
    "await clmPage.openBulkUploadModal()",
    `await clmPage.uploadBulkFile("${file}")`,
    "await clmPage.expectUploadValidationError()",
  ]);
}

function resolveMandatoryColumns(row: ClmExcelRow): string {
  const file = extractUploadFile(row.testData) ?? "entities-missing-columns.csv";
  return withClm(row, [
    "await clmPage.openBulkUploadModal()",
    `await clmPage.uploadBulkFile("${file}")`,
    "await clmPage.expectMandatoryColumnError()",
  ]);
}

function resolveDuplicateDetection(row: ClmExcelRow): string {
  const file = extractUploadFile(row.testData) ?? "entities-duplicates.csv";
  return withClm(row, [
    "await clmPage.openBulkUploadModal()",
    `await clmPage.uploadBulkFile("${file}")`,
    "await clmPage.expectDuplicateDetection()",
  ]);
}

function resolveValidationReport(row: ClmExcelRow): string {
  const file = extractUploadFile(row.testData) ?? "entities-mixed.csv";
  return withClm(row, [
    "await clmPage.openBulkUploadModal()",
    `await clmPage.uploadBulkFile("${file}")`,
    "await clmPage.submitBulkUpload()",
    "await clmPage.openValidationReport()",
    "await clmPage.expectValidationReportVisible()",
  ]);
}

function resolveAllRequests(row: ClmExcelRow): string {
  const tab = extractTabName(row.testData, row.taskDescription);
  return withClm(row, [
    "await clmPage.openAllRequests()",
    `await clmPage.openTab("${tab}")`,
    "await clmPage.expectRequestQueueVisible()",
  ]);
}

function resolveMyRequests(row: ClmExcelRow): string {
  const role = extractUserRole(row) ?? "Maker";
  return withClm(row, [
    `// TODO: My Requests ownership — verify requests for role: ${role}`,
    "await clmPage.openMyRequests()",
    "await clmPage.expectRequestQueueVisible()",
  ]);
}

function resolveRequestDetails(row: ClmExcelRow): string {
  const requestId = extractValue(row.testData, "Request ID") ?? "REQ-001";
  return withClm(row, [
    "await clmPage.openAllRequests()",
    `await clmPage.openRequestDetails("${requestId}")`,
    "await clmPage.expectRequestDetailsVisible()",
  ]);
}

function resolveApprovalWorkflow(row: ClmExcelRow): string {
  const role = extractUserRole(row) ?? "Checker";
  const requestId = extractValue(row.testData, "Request ID") ?? "REQ-001";
  const extra: string[] = [
    `// TODO: Checker role login — switch session to: ${role}`,
    "await clmPage.openAllRequests()",
    `await clmPage.openRequestDetails("${requestId}")`,
    "await clmPage.approveRequest()",
  ];
  if (/not available|hidden|maker/i.test(row.taskDescription)) {
    return withClm(row, ["await clmPage.expectRbacControlsHidden()"]);
  }
  return withClm(row, extra);
}

function resolveRejectionWorkflow(row: ClmExcelRow): string {
  const requestId = extractValue(row.testData, "Request ID") ?? "REQ-001";
  const reason = extractReasonForCreation(row.testData) ?? "Insufficient justification";
  return withClm(row, [
    "await clmPage.openAllRequests()",
    `await clmPage.openRequestDetails("${requestId}")`,
    `await clmPage.rejectRequest("${reason}")`,
    "await clmPage.expectRejectionWorkflowVisible()",
  ]);
}

function resolveSegregationOfDuties(row: ClmExcelRow): string {
  const role = extractUserRole(row) ?? "Maker";
  // TODO: Segregation of duties — same user cannot approve own request; needs dual-session setup
  return withClm(row, [
    `// Role from Excel: ${role}`,
    "await clmPage.openAllRequests()",
    "await clmPage.expectRbacControlsHidden()",
  ]);
}

function resolveSlaValidation(row: ClmExcelRow): string {
  const sla = extractSlaThreshold(row.testData) ?? "24 hours";
  return withClm(row, [
    "await clmPage.openAllRequests()",
    `// TODO: SLA threshold from Excel: ${sla}`,
    "await clmPage.expectSlaIndicator()",
  ]);
}

function resolveAuditListing(row: ClmExcelRow): string {
  const listName = defaultListName(row);
  return withClm(row, [
    `await clmPage.openList("${listName}")`,
    "await clmPage.openAuditListing()",
    "await clmPage.expectAuditListingVisible()",
  ]);
}

function resolveAuditSearch(row: ClmExcelRow): string {
  const term = extractValue(row.testData, "Search Term") ?? defaultEntityName(row);
  return withClm(row, [
    "await clmPage.openAuditListing()",
    `await clmPage.searchAudit("${term}")`,
    "await clmPage.expectAuditSearchResults()",
  ]);
}

function resolveAuditFilters(row: ClmExcelRow): string {
  const filter = extractFilterField(row.testData) ?? "Event Type";
  return withClm(row, [
    "await clmPage.openAuditListing()",
    `await clmPage.applyAuditFilters("${filter}", "Update")`,
    "await clmPage.expectFilteredAuditResults()",
  ]);
}

function resolveAuditDateRange(row: ClmExcelRow): string {
  const range = extractDateRange(row.testData) ?? { from: "2024-01-01", to: "2024-12-31" };
  return withClm(row, [
    "await clmPage.openAuditListing()",
    `await clmPage.setAuditDateRange("${range.from}", "${range.to}")`,
    "await clmPage.expectFilteredAuditResults()",
  ]);
}

function resolveEventDetails(row: ClmExcelRow): string {
  const eventId = extractValue(row.testData, "Event ID") ?? "EVT-001";
  return withClm(row, [
    "await clmPage.openAuditListing()",
    `await clmPage.openEventDetails("${eventId}")`,
    "await clmPage.expectEventDetailsVisible()",
  ]);
}

function resolveAuditExport(row: ClmExcelRow): string {
  const format = extractExportFormat(row.testData);
  return withClm(row, [
    "await clmPage.openAuditListing()",
    "await clmPage.exportAudit()",
    `await clmPage.exportAuditAs("${format}")`,
  ]);
}

function resolveAuditIntegrity(row: ClmExcelRow): string {
  // TODO: Audit integrity hash baseline — tamper-detection criteria not specified in Excel
  return withClm(row, [
    "await clmPage.openAuditListing()",
    "await clmPage.expectAuditIntegrity()",
  ]);
}

function resolveTtlDisplay(row: ClmExcelRow): string {
  const listName = defaultListName(row);
  return withClm(row, [
    `await clmPage.openList("${listName}")`,
    "await clmPage.expectTtlDisplay()",
  ]);
}

function resolveExpiry(row: ClmExcelRow): string {
  const listName = defaultListName(row);
  // TODO: Expiry simulation — requires seeded list with past TTL date
  return withClm(row, [
    `await clmPage.openList("${listName}")`,
    "await clmPage.expectExpiryStatusVisible()",
  ]);
}

function resolveExpiringSoon(row: ClmExcelRow): string {
  const listName = defaultListName(row);
  // TODO: Expiring-soon threshold — days-before-expiry not specified in Excel
  return withClm(row, [
    `await clmPage.openList("${listName}")`,
    "await clmPage.filterExpiringSoon()",
    "await clmPage.expectExpiryStatusVisible()",
  ]);
}

function resolveExpiredStatus(row: ClmExcelRow): string {
  const listName = defaultListName(row);
  // TODO: Expired status seed data — requires pre-seeded expired list/entity
  return withClm(row, [
    `await clmPage.openList("${listName}")`,
    'await clmPage.applyFilter("Status", "Expired")',
    "await clmPage.expectExpiredStatusVisible()",
  ]);
}

function resolveScreeningExclusion(row: ClmExcelRow): string {
  const listName = defaultListName(row);
  const entity = defaultEntityName(row);
  // TODO: Screening exclusion verification — requires live screening run or mock
  return withClm(row, [
    `await clmPage.openList("${listName}")`,
    `await clmPage.viewEntity("${entity}")`,
    "await clmPage.expectScreeningExclusionApplied()",
  ]);
}

function resolveFuzzyMatching(row: ClmExcelRow): string {
  const term = extractMatchingMode(row.testData) ?? extractEntityName(row.testData) ?? "Jon Smith";
  return withClm(row, [
    "// TODO: Fuzzy matching corpus — partial name variants not specified in Excel",
    `await clmPage.runFuzzyMatchingTest("${term}")`,
    "await clmPage.expectMatchingOutcome()",
  ]);
}

function resolveMultilingualMatching(row: ClmExcelRow): string {
  const term = extractValue(row.testData, "Native Name") ?? "محمد";
  return withClm(row, [
    "// TODO: Multilingual matching corpus — script variants not specified in Excel",
    `await clmPage.runMultilingualMatchingTest("${term}")`,
    "await clmPage.expectMatchingOutcome()",
  ]);
}

function resolveNameMatching(row: ClmExcelRow): string {
  const name = defaultEntityName(row);
  return withClm(row, [
    `await clmPage.runNameMatchingTest("${name}")`,
    "await clmPage.expectMatchingOutcome()",
  ]);
}

function resolveAliasMatching(row: ClmExcelRow): string {
  const alias = extractValue(row.testData, "Alias") ?? "Johnny Alpha";
  return withClm(row, [
    `await clmPage.runAliasMatchingTest("${alias}")`,
    "await clmPage.expectMatchingOutcome()",
  ]);
}

function resolveDigitalIdentifierMatching(row: ClmExcelRow): string {
  const digitalId = extractValue(row.testData, "Digital Identifier") ?? "wallet@example.com";
  return withClm(row, [
    `await clmPage.runDigitalIdentifierMatchingTest("${digitalId}")`,
    "await clmPage.expectMatchingOutcome()",
  ]);
}

function resolveActionOnHitBehaviour(row: ClmExcelRow): string {
  const action = extractActionOnHit(row.testData) ?? "Alert";
  const listName = defaultListName(row);
  return withClm(row, [
    `await clmPage.openList("${listName}")`,
    `// TODO: Action-on-hit behaviour — verify "${action}" outcome during screening`,
    "await clmPage.expectActionOnHitBehaviour()",
  ]);
}

function resolveAlertGeneration(row: ClmExcelRow): string {
  const listName = defaultListName(row);
  const entity = defaultEntityName(row);
  // TODO: Alert generation channel — notification delivery not verifiable without mock webhook/email
  return withClm(row, [
    `await clmPage.openList("${listName}")`,
    `await clmPage.triggerScreeningHit("${entity}")`,
    "await clmPage.expectAlertGeneration()",
  ]);
}

export function mapClmActionLogic(row: ClmExcelRow): string {
  const sm = row.subModule;

  switch (sm) {
    case "Custom List Manager - Navigation & Access":
      return resolveNavigationAccess(row);
    case "Custom List Manager - Breadcrumb & Top Bar":
      return resolveBreadcrumbTopBar(row);
    case "Custom List Manager - Dashboard":
      return resolveDashboard(row);
    case "Custom List Manager - Search & Filters":
      return resolveSearchFilters(row);
    case "Custom List Manager - Grid & Data Presentation":
      return resolveGridDataPresentation(row);
    case "Custom List Manager - Export & Pagination":
      return resolveExportPagination(row);
    case "Custom List Manager - Landing Actions":
      return resolveLandingActions(row);
    case "Custom List Manager - Create List Form":
      return resolveCreateListForm(row);
    case "Custom List Manager - List Name Validation":
      return resolveListNameValidation(row);
    case "Custom List Manager - Purpose Configuration":
      return resolvePurposeConfiguration(row);
    case "Custom List Manager - Action On Hit Configuration":
      return resolveActionOnHitConfiguration(row);
    case "Custom List Manager - TTL Configuration":
      return resolveTtlConfiguration(row);
    case "Custom List Manager - Matching Configuration":
      return resolveMatchingConfiguration(row);
    case "Custom List Manager - Reason For Creation":
      return resolveReasonForCreation(row);
    case "Custom List Manager - Draft Management":
      return resolveDraftManagement(row);
    case "Custom List Manager - Submission Workflow":
      return resolveSubmissionWorkflow(row);
    case "Custom List Manager - Edit List":
      return resolveEditList(row);
    case "Custom List Manager - Enable Disable":
      return resolveEnableDisable(row);
    case "Custom List Manager - Metadata Integrity":
      return resolveMetadataIntegrity(row);
    case "Custom List Manager - Add Entity Form":
      return resolveAddEntityForm(row);
    case "Custom List Manager - Minimum Screening Eligibility Rule":
      return resolveMinimumScreeningEligibility(row);
    case "Custom List Manager - Identity Information":
      return resolveIdentityInformation(row);
    case "Custom List Manager - Identifier Information":
      return resolveIdentifierInformation(row);
    case "Custom List Manager - Digital Identifiers":
      return resolveDigitalIdentifiers(row);
    case "Custom List Manager - Localization":
      return resolveLocalization(row);
    case "Custom List Manager - Risk & Governance":
      return resolveRiskGovernance(row);
    case "Custom List Manager - Real-Time Alert Configuration":
      return resolveRealTimeAlertConfiguration(row);
    case "Custom List Manager - Entity Submission Workflow":
      return resolveEntitySubmissionWorkflow(row);
    case "Custom List Manager - Entity Grid":
      return resolveEntityGrid(row);
    case "Custom List Manager - View Entity":
      return resolveViewEntity(row);
    case "Custom List Manager - Edit Entity":
      return resolveEditEntity(row);
    case "Custom List Manager - Enable Disable Entity":
      return resolveEnableDisableEntity(row);
    case "Custom List Manager - Entity Metadata":
      return resolveEntityMetadata(row);
    case "Custom List Manager - Entity History":
      return resolveEntityHistory(row);
    case "Custom List Manager - Template Download":
      return resolveTemplateDownload(row);
    case "Custom List Manager - Upload Validation":
      return resolveUploadValidation(row);
    case "Custom List Manager - File Format Validation":
      return resolveFileFormatValidation(row);
    case "Custom List Manager - Mandatory Columns":
      return resolveMandatoryColumns(row);
    case "Custom List Manager - Duplicate Detection":
      return resolveDuplicateDetection(row);
    case "Custom List Manager - Validation Report":
      return resolveValidationReport(row);
    case "Custom List Manager - All Requests":
      return resolveAllRequests(row);
    case "Custom List Manager - My Requests":
      return resolveMyRequests(row);
    case "Custom List Manager - Request Details":
      return resolveRequestDetails(row);
    case "Custom List Manager - Approval Workflow":
      return resolveApprovalWorkflow(row);
    case "Custom List Manager - Rejection Workflow":
      return resolveRejectionWorkflow(row);
    case "Custom List Manager - Segregation Of Duties":
      return resolveSegregationOfDuties(row);
    case "Custom List Manager - SLA Validation":
      return resolveSlaValidation(row);
    case "Custom List Manager - Audit Listing":
      return resolveAuditListing(row);
    case "Custom List Manager - Audit Search":
      return resolveAuditSearch(row);
    case "Custom List Manager - Audit Filters":
      return resolveAuditFilters(row);
    case "Custom List Manager - Audit Date Range":
      return resolveAuditDateRange(row);
    case "Custom List Manager - Event Details":
      return resolveEventDetails(row);
    case "Custom List Manager - Audit Export":
      return resolveAuditExport(row);
    case "Custom List Manager - Audit Integrity":
      return resolveAuditIntegrity(row);
    case "Custom List Manager - TTL Display":
      return resolveTtlDisplay(row);
    case "Custom List Manager - Expiry":
      return resolveExpiry(row);
    case "Custom List Manager - Expiring Soon":
      return resolveExpiringSoon(row);
    case "Custom List Manager - Expired Status":
      return resolveExpiredStatus(row);
    case "Custom List Manager - Screening Exclusion":
      return resolveScreeningExclusion(row);
    case "Custom List Manager - Fuzzy Matching":
      return resolveFuzzyMatching(row);
    case "Custom List Manager - Multilingual Matching":
      return resolveMultilingualMatching(row);
    case "Custom List Manager - Name Matching":
      return resolveNameMatching(row);
    case "Custom List Manager - Alias Matching":
      return resolveAliasMatching(row);
    case "Custom List Manager - Digital Identifier Matching":
      return resolveDigitalIdentifierMatching(row);
    case "Custom List Manager - Action On Hit Behaviour":
      return resolveActionOnHitBehaviour(row);
    case "Custom List Manager - Alert Generation":
      return resolveAlertGeneration(row);
    default:
      return finalizeActionLogic(
        "await clmPage.openCustomListManagerDirect(testData.baseUrl);\n    await clmPage.expectCustomListManagerViewLoaded()",
      );
  }
}

/** @deprecated Use mapClmActionLogic + buildAssertionsForRow for spec generation */
export function mapClmTestLogic(row: ClmExcelRow): string {
  return finalizeLogic(mapClmActionLogic(row), row);
}
