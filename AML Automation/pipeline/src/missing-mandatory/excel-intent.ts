import { featureGroup } from "./parser";
import type { MmExcelRow } from "./types";

const OPEN = "await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl)";

export function escapeStr(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

export function parseNumberedSteps(testSteps: string): string[] {
  if (!testSteps.trim()) {
    return [];
  }
  return testSteps
    .split(/\s*(?=\d+\.\s)/)
    .map((s) => s.replace(/^\d+\.\s*/, "").trim())
    .filter(Boolean);
}

/** Split Excel Test Data into field/search fragments (e.g. "A / B" → ["A", "B"]). */
function normalizeFieldFragment(fragment: string): string {
  return fragment.replace(/\s*\([^)]*\)\s*/g, "").trim();
}

export function parseTestDataFragments(testData: string): string[] {
  const td = testData.trim();
  if (!td) {
    return [];
  }
  const nonFieldPatterns =
    /^(authorized|aml admin|aml user|restricted role|expired session|template rule update|db field weight|locked db field|valid user|admin user|admin role|db \+ ui same name|aml admin user|admin \/ editor|standard aml user|blank field|editable field|editable template config|editable template|new test template|template dataset|locked cip|field config|logged-out state|add field modal|configured weights)/i;
  if (nonFieldPatterns.test(td)) {
    return [];
  }
  if (/^\d+\s*\/\s*timeout/i.test(td) || /^500\b/i.test(td) || /custom field\s*=/i.test(td)) {
    return [];
  }
  if (/:\s*\d/.test(td) && (/\//.test(td) || /low:|medium:|high:|critical:/i.test(td))) {
    return [];
  }
  const parts = td.split(/\s*[/|;]\s*/).map((p) => normalizeFieldFragment(p.trim())).filter((p) => p.length > 1);
  if (parts.length > 0) {
    return parts.filter((p) => !/^(low|medium|high|critical):\s*\d/i.test(p));
  }
  if (/chart|statement|field|certificate|structure|passport|national id|fatca|duplicate/i.test(td)) {
    return [normalizeFieldFragment(td)];
  }
  return [];
}

function isAppShellTopBarRow(row: MmExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  return sm.includes("app shell") && sm.includes("top bar");
}

function isCreateTemplateButtonRow(row: MmExcelRow): boolean {
  return row.subModule.toLowerCase().includes("create template button");
}

function isSidebarRouteNavRow(row: MmExcelRow): boolean {
  return row.subModule.toLowerCase().includes("route navigation");
}

function isTemplateDetailAddFieldRow(row: MmExcelRow): boolean {
  return row.subModule.toLowerCase().includes("add field button");
}

function isTemplateDetailSaveRow(row: MmExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  return sm.includes("template detail header") && sm.includes("save changes");
}

function isCountBadgeRow(row: MmExcelRow): boolean {
  return row.subModule.toLowerCase().includes("count badge");
}

function isSidebarStatePersistenceRow(row: MmExcelRow): boolean {
  return row.subModule.toLowerCase().includes("state persistence");
}

function isSessionMidEditRow(row: MmExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  return sm.includes("mid-edit expiry") || (sm.includes("session control") && /let session expire|session expire/.test(row.testSteps.toLowerCase()));
}

function isLockedFieldRow(row: MmExcelRow): boolean {
  return row.subModule.toLowerCase().includes("locked field");
}

function isCrossTemplateCompareRow(row: MmExcelRow): boolean {
  return /compare with individual/i.test(row.testSteps);
}

function isGapReportViewLoadRow(row: MmExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  return sm.includes("gap report") && sm.includes("view load");
}

function isAddCustomFieldModalRow(row: MmExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  return sm.includes("add custom field") && /modal|control rendering/.test(sm);
}

function isValidCustomFieldCreationRow(row: MmExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  return sm.includes("valid field creation") || (/custom field\s*=/i.test(row.testData) && sm.includes("add field"));
}

function isAddCustomFieldWeightageRow(row: MmExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  return sm.includes("add custom field") && sm.includes("weightage");
}

function isAddCustomFieldCancelRow(row: MmExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  return sm.includes("add custom field") && /cancel|close icon/.test(sm);
}

function isFieldConfigRequirementTypeRow(row: MmExcelRow): boolean {
  return row.subModule.toLowerCase().includes("requirement type");
}

function isSecurityLogoutRefreshRow(row: MmExcelRow): boolean {
  return row.subModule.toLowerCase().includes("refresh after logout");
}

function isEmptyListApiRow(row: MmExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  return sm.includes("empty array") || sm.includes("null field metadata");
}

function isApiDetailFailureRow(row: MmExcelRow): boolean {
  return row.subModule.toLowerCase().includes("template detail load failure");
}

function isApiPartialListRow(row: MmExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  return sm.includes("partial payload") && sm.includes("list");
}

function isApiPartialDetailRow(row: MmExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  return sm.includes("partial payload") && sm.includes("detail");
}

function parseCustomFieldName(testData: string): string {
  const match = testData.match(/custom field\s*=\s*(.+)/i);
  return match?.[1]?.trim() ?? "Auto Test Field";
}

function isTopBarRow(row: MmExcelRow): boolean {
  return isAppShellTopBarRow(row);
}

function isScoreRangeRow(row: MmExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  const td = row.testData.toLowerCase();
  return /score range|save range/.test(sm) || /low:\s*\d|medium:\s*\d/.test(td);
}

function isAuthDeniedScenario(row: MmExcelRow): boolean {
  const blob = `${row.subModule} ${row.acceptanceCriteria} ${row.expectedResult} ${row.testSteps} ${row.testData}`.toLowerCase();
  if (/save blocked if|validation displayed|required inputs enforced|no unauthorized|not unauthorized|without unauthorized/.test(blob)) {
    return false;
  }
  return /unauthorized|access denied|expires|denial|restricted role|api denial|direct url access|session expire/.test(blob);
}

function isGapReportLoadFailure(row: MmExcelRow): boolean {
  return row.subModule.toLowerCase().includes("gap report load failure");
}

function isApiListFailure(row: MmExcelRow): boolean {
  return row.subModule.toLowerCase().includes("template list load failure");
}

function fgUsesSidebarGapReport(row: MmExcelRow): boolean {
  const fg = featureGroup(row.subModule);
  return fg === "Sidebar" || row.subModule.toLowerCase().includes("sidebar");
}

function needsTemplateSelection(row: MmExcelRow): boolean {
  const fg = featureGroup(row.subModule);
  const sm = row.subModule.toLowerCase();

  if (sm.includes("db-origin") && sm.includes("ui rendering")) {
    return false;
  }

  const skipGroups = new Set([
    "Missing Mandatory Data Template",
    "App Shell",
    "Sidebar",
    "Top Bar",
    "Template List Panel",
    "Template Cards",
    "Template Search",
    "Initial Access Control (RBAC)",
    "RBAC",
    "Refresh",
    "Session",
    "Session Control",
    "Security",
  ]);

  if (skipGroups.has(fg)) {
    return false;
  }
  if (fg === "KYC Gap Report" && !sm.includes("sync") && !sm.includes("cross-module")) {
    return false;
  }
  if (rowMatches(row, "template list load failure", "app shell", "aml shell")) {
    return false;
  }

  return true;
}

export function inferTemplateName(row: MmExcelRow): string {
  const sm = row.subModule.toLowerCase();
  if (/corporate/.test(sm) && !/isolation|individual\/corporate/.test(sm)) {
    return "Standard KYC — Corporate";
  }
  if (/individual/.test(sm) || /^cdd fields|^edd fields|^technical ids/.test(sm)) {
    return "Standard KYC — Individual";
  }
  const blob = `${row.subModule} ${row.testSteps} ${row.testData} ${row.preconditions}`.toLowerCase();
  if (/corporate/.test(blob) && !/compare with individual|cross-template|isolation/.test(blob)) {
    return "Standard KYC — Corporate";
  }
  if (/individual/.test(blob) && !/compare with individual/.test(blob)) {
    return "Standard KYC — Individual";
  }
  if (/simplified/.test(blob)) {
    return "Simplified KYC";
  }
  const fg = featureGroup(row.subModule);
  if (fg.includes("Corporate")) {
    return "Standard KYC — Corporate";
  }
  if (fg.includes("Individual") || fg === "CDD Fields" || fg === "EDD Fields" || fg === "Technical IDs") {
    return "Standard KYC — Individual";
  }
  return "Simplified KYC";
}

export function inferTabName(row: MmExcelRow): string | null {
  const sm = row.subModule.toLowerCase();
  if (sm.includes("corporate cip")) return "Corporate CIP";
  if (sm.includes("corporate cdd")) return "CDD Fields";
  if (sm.includes("corporate edd")) return "EDD Fields";
  if (sm.includes("corporate technical")) return "Technical IDs";
  if (sm.includes("individual cip") || (sm.includes("cip") && !sm.includes("corporate"))) return "Individual CIP";
  if (sm.includes("cdd")) return "CDD Fields";
  if (sm.includes("edd")) return "EDD Fields";
  if (sm.includes("technical id")) return "Technical IDs";
  if (sm.includes("cip")) return "Individual CIP";
  if (/gap score|score range|score mapping|save range/.test(sm)) return "KYC Gap Score";
  return null;
}

function pushUnique(steps: string[], step: string): void {
  if (step && !steps.includes(step)) {
    steps.push(step);
  }
}

function stepMatches(step: string, ...patterns: string[]): boolean {
  const s = step.toLowerCase();
  return patterns.some((p) => s.includes(p.toLowerCase()));
}

function rowMatches(row: MmExcelRow, ...patterns: string[]): boolean {
  const blob = `${row.subModule} ${row.taskDescription} ${row.testSteps} ${row.acceptanceCriteria} ${row.expectedResult}`.toLowerCase();
  return patterns.some((p) => blob.includes(p.toLowerCase()));
}

function dbFieldLabel(row: MmExcelRow): string {
  const fragments = parseTestDataFragments(row.testData);
  if (fragments.length > 0) {
    return fragments[0];
  }
  return row.testData.trim() || "National ID";
}

function searchKeyword(row: MmExcelRow): string {
  const td = row.testData.trim();
  if (/kyc|template|standard|simplified/i.test(td)) {
    const m = td.match(/(standard|simplified|kyc|corporate|individual)/i);
    if (m) return m[0];
  }
  if (td.length > 0 && td.length < 40) {
    return td.split(/\s+/)[0];
  }
  return "KYC";
}

/** API mocks and auth preconditions from Excel sub-module / steps. */
export function buildPreconditionActions(row: MmExcelRow): string[] {
  const steps: string[] = [];
  const sm = row.subModule.toLowerCase();
  const numbered = parseNumberedSteps(row.testSteps).join(" ").toLowerCase();

  if (rowMatches(row, "template list load failure", "slow api", "connection loss") || sm.includes("template list load failure")) {
    pushUnique(steps, "await mmPage.mockTemplateListFailure()");
  } else if (rowMatches(row, "template detail load failure") || (sm.includes("partial payload") && sm.includes("detail"))) {
    pushUnique(steps, "await mmPage.mockTemplateDetailFailure()");
  } else if (rowMatches(row, "save changes failure", "false success", "user-safe", "audit-safe", "concurrent", "conflict", "refresh during pending")) {
    pushUnique(steps, "await mmPage.mockSaveChangesFailure()");
  } else if (rowMatches(row, "create template failure")) {
    pushUnique(steps, "await mmPage.mockCreateTemplateFailure()");
  } else if (rowMatches(row, "clone template failure")) {
    pushUnique(steps, "await mmPage.mockCloneTemplateFailure()");
  } else if (rowMatches(row, "gap report load failure")) {
    pushUnique(steps, "await mmPage.mockGapReportLoadFailure()");
  } else if (rowMatches(row, "score config save failure")) {
    pushUnique(steps, "await mmPage.mockScoreConfigSaveFailure()");
  } else if (rowMatches(row, "partial payload") && sm.includes("list")) {
    pushUnique(steps, "await mmPage.mockPartialTemplateListPayload()");
  } else if (rowMatches(row, "null field", "empty array", "duplicate payload")) {
    pushUnique(steps, sm.includes("duplicate") ? "await mmPage.mockPartialTemplateListPayload()" : "await mmPage.mockEmptyTemplateList()");
  }

  if (isAuthDeniedScenario(row) && !isSessionMidEditRow(row)) {
    pushUnique(steps, "await mmPage.mockUnauthorized()");
  } else if (rowMatches(row, "api-level", "mockunauthorizedapi")) {
    pushUnique(steps, "await mmPage.mockUnauthorizedApi()");
  }

  return steps;
}

/** Navigation setup implied by sub-module before executing numbered steps. */
export function buildExcelSetupActions(row: MmExcelRow, preconditions: string[] = []): string[] {
  const steps: string[] = [];
  const sm = row.subModule.toLowerCase();
  const fg = featureGroup(row.subModule);

  pushUnique(steps, OPEN);

  if (isTopBarRow(row) || isCreateTemplateButtonRow(row) || isSidebarRouteNavRow(row) || isSidebarStatePersistenceRow(row)) {
    return steps;
  }

  if (isScoreRangeRow(row)) {
    pushUnique(steps, `await mmPage.selectTemplateByExactName('${escapeStr(inferTemplateName(row))}')`);
    pushUnique(steps, "await mmPage.openTab('KYC Gap Score')");
    return steps;
  }

  if (isLockedFieldRow(row)) {
    pushUnique(steps, "await mmPage.selectTemplateByExactName('Standard KYC — Individual')");
    pushUnique(steps, "await mmPage.openTab('Individual CIP')");
    return steps;
  }

  if (isSessionMidEditRow(row)) {
    pushUnique(steps, "await mmPage.selectTemplateByExactName('Simplified KYC')");
    return steps;
  }

  if ((fg === "Missing Mandatory Data Template" || fg === "App Shell") && /detail panel/i.test(row.acceptanceCriteria) && !isTopBarRow(row)) {
    pushUnique(steps, "await mmPage.selectTemplateByExactName('Simplified KYC')");
  }

  if (sm.includes("db-origin") && sm.includes("ui rendering")) {
    pushUnique(steps, "await mmPage.selectTemplateByExactName('Standard KYC — Individual')");
    return steps;
  }

  if (fg === "KYC Gap Report" && !isGapReportLoadFailure(row)) {
    const numbered = parseNumberedSteps(row.testSteps);
    const usesSidebar = numbered.some((s) => stepMatches(s, "sidebar", "open aml shell", "locate missing mandatory", "expand node", "navigate to kyc gap report", "open sidebar"));
    if (!usesSidebar && !isGapReportViewLoadRow(row)) {
      pushUnique(steps, "await mmPage.openKycGapReportDirect(testData.baseUrl)");
    }
    return steps;
  }

  if (isCrossTemplateCompareRow(row) || isApiPartialListRow(row) || isGapReportViewLoadRow(row) || isEmptyListApiRow(row)) {
    return steps;
  }

  if (isValidCustomFieldCreationRow(row) || isAddCustomFieldWeightageRow(row) || isAddCustomFieldCancelRow(row) || isFieldConfigRequirementTypeRow(row)) {
    return steps;
  }

  if (needsTemplateSelection(row) && !isGapReportLoadFailure(row) && !isApiDetailFailureRow(row) && !isApiPartialDetailRow(row) && !isEmptyListApiRow(row)) {
    pushUnique(steps, `await mmPage.selectTemplateByExactName('${escapeStr(inferTemplateName(row))}')`);
  }

  const tab = inferTabName(row);
  if (tab && needsTemplateSelection(row) && !sm.includes("tab visibility") && !sm.includes("default tab") && !isScoreRangeRow(row) && !isCrossTemplateCompareRow(row)) {
    pushUnique(steps, `await mmPage.openTab('${escapeStr(tab)}')`);
  }

  if (sm.includes("tab visibility") || sm.includes("default tab")) {
    if (/corporate/.test(sm)) {
      pushUnique(steps, "await mmPage.expectDefaultTabForCorporate()");
    } else if (needsTemplateSelection(row)) {
      pushUnique(steps, "await mmPage.openTab('Individual CIP')");
    }
  }

  return steps;
}

/** Map each Excel numbered step to concrete Playwright actions. */
export function buildExcelStepActions(row: MmExcelRow): string[] {
  const steps: string[] = [];
  const fragments = parseTestDataFragments(row.testData);
  const fieldFragment = fragments[0] ?? "";
  const numbered = parseNumberedSteps(row.testSteps);
  const sm = row.subModule.toLowerCase();

  if (isSidebarRouteNavRow(row) || isCreateTemplateButtonRow(row) || isTemplateDetailAddFieldRow(row)) {
    return steps;
  }

  if (isSidebarStatePersistenceRow(row)) {
    pushUnique(steps, "await mmPage.selectTemplateByExactName('Standard KYC — Individual')");
    pushUnique(steps, "await mmPage.openKycGapReportDirect(testData.baseUrl)");
    pushUnique(steps, "await mmPage.searchGapReport('KYC')");
    pushUnique(steps, "await mmPage.openMissingMandatoryDataTemplateFromSidebar()");
    pushUnique(steps, "await mmPage.expectSelectedTemplatePersisted('Standard KYC — Individual')");
    pushUnique(steps, "await mmPage.openKycGapReportFromSidebar()");
    return steps;
  }

  if (isSessionMidEditRow(row)) {
    pushUnique(steps, "await mmPage.modifyFirstEditableRequirement()");
    pushUnique(steps, "await mmPage.mockUnauthorized()");
    pushUnique(steps, "await mmPage.clickAndWait(mmPage.saveChangesButton, 'Save Changes after session expiry')");
    return steps;
  }

  if (isLockedFieldRow(row)) {
    pushUnique(steps, "await mmPage.attemptLockedFieldEdit()");
    return steps;
  }

  if (isCrossTemplateCompareRow(row)) {
    pushUnique(steps, "await mmPage.selectTemplateByExactName('Standard KYC — Corporate')");
    pushUnique(steps, "await mmPage.openTab('Corporate CDD')");
    pushUnique(steps, "await mmPage.selectTemplateByExactName('Standard KYC — Individual')");
    pushUnique(steps, "await mmPage.openTab('CDD')");
    return steps;
  }

  if (isGapReportViewLoadRow(row)) {
    pushUnique(steps, "await mmPage.openKycGapReportFromSidebar()");
    return steps;
  }

  if (isAddCustomFieldModalRow(row)) {
    pushUnique(steps, "await mmPage.selectTemplateByExactName('Simplified KYC')");
    pushUnique(steps, "await mmPage.openAddFieldDialog()");
    return steps;
  }

  if (isValidCustomFieldCreationRow(row)) {
    const fieldName = parseCustomFieldName(row.testData);
    pushUnique(steps, "await mmPage.selectTemplateByExactName('Simplified KYC')");
    pushUnique(steps, "await mmPage.openAddFieldDialog()");
    pushUnique(steps, `await mmPage.createValidCustomField('${escapeStr(fieldName)}')`);
    pushUnique(steps, "await mmPage.saveChangesAndExpectSuccess()");
    pushUnique(steps, "await mmPage.refreshPage()");
    pushUnique(steps, "await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC')");
    pushUnique(steps, `await mmPage.expectCustomFieldVisibleByName('${escapeStr(fieldName)}')`);
    return steps;
  }

  if (isAddCustomFieldWeightageRow(row)) {
    pushUnique(steps, "await mmPage.selectTemplateByExactName('Simplified KYC')");
    if (row.subModule.toLowerCase().includes("persistence")) {
      pushUnique(steps, "await mmPage.createCustomFieldWithWeightage('Weightage Test Field', '1')");
      pushUnique(steps, "await mmPage.saveChangesAndExpectSuccess()");
      pushUnique(steps, "await mmPage.refreshPage()");
      pushUnique(steps, "await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC')");
      pushUnique(steps, "await mmPage.expectCustomFieldWeightagePersisted('Weightage Test Field', '1')");
    } else {
      pushUnique(steps, "await mmPage.openAddFieldDialog()");
    }
    return steps;
  }

  if (isAddCustomFieldCancelRow(row)) {
    pushUnique(steps, "await mmPage.selectTemplateByExactName('Simplified KYC')");
    pushUnique(steps, "await mmPage.openAddFieldDialog()");
    pushUnique(steps, "await mmPage.cancelButton.click()");
    if (row.subModule.toLowerCase().includes("close icon")) {
      pushUnique(steps, "await mmPage.closeDialogButton.click()");
    }
    return steps;
  }

  if (isFieldConfigRequirementTypeRow(row)) {
    pushUnique(steps, "await mmPage.selectTemplateByExactName('Simplified KYC')");
    pushUnique(steps, "await mmPage.createValidCustomField('Requirement Type Field')");
    pushUnique(steps, "await mmPage.modifyFirstEditableRequirement()");
    pushUnique(steps, "await mmPage.saveChangesAndExpectSuccess()");
    pushUnique(steps, "await mmPage.refreshPage()");
    pushUnique(steps, "await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC')");
    pushUnique(steps, "await mmPage.modifyFirstEditableRequirement()");
    pushUnique(steps, "await mmPage.saveChangesAndExpectSuccess()");
    return steps;
  }

  if (isSecurityLogoutRefreshRow(row)) {
    pushUnique(steps, "await mmPage.mockUnauthorized()");
    pushUnique(steps, "await mmPage.refreshPage()");
    return steps;
  }

  if (isEmptyListApiRow(row)) {
    return steps;
  }

  if (isApiDetailFailureRow(row) || isApiPartialDetailRow(row)) {
    pushUnique(steps, "await mmPage.selectTemplateExpectingDetailFailure('Simplified KYC')");
    return steps;
  }

  for (const step of numbered) {
    const s = step.toLowerCase();

    if (stepMatches(s, "validate modal launch")) {
      pushUnique(steps, "await mmPage.expectAddFieldDialogControlsVisible()");
      continue;
    }

    if (stepMatches(s, "verify field input controls", "verify field input")) {
      pushUnique(steps, "await mmPage.expectAddFieldDialogControlsVisible()");
      continue;
    }

    if (stepMatches(s, "reopen modal")) {
      pushUnique(steps, "await mmPage.reopenAddFieldDialog()");
      continue;
    }

    if (isTopBarRow(row)) {
      if (stepMatches(s, "refresh")) {
        pushUnique(steps, "await mmPage.refreshPage()");
      }
      continue;
    }

    if (isCreateTemplateButtonRow(row)) {
      if (stepMatches(s, "open create template", "create template screen")) {
        pushUnique(steps, "await mmPage.openCreateTemplateView()");
      } else if (stepMatches(s, "open gap report", "gap report")) {
        pushUnique(steps, "await mmPage.openKycGapReportDirect(testData.baseUrl)");
      } else if (stepMatches(s, "refresh")) {
        pushUnique(steps, "await mmPage.refreshPage()");
      }
      continue;
    }

    if (isSidebarRouteNavRow(row)) {
      if (stepMatches(s, "click data template", "data template")) {
        pushUnique(steps, "await mmPage.openMissingMandatoryDataTemplateFromSidebar()");
      } else if (stepMatches(s, "open kyc gap report", "gap report")) {
        pushUnique(steps, "await mmPage.openKycGapReportFromSidebar()");
      } else if (stepMatches(s, "switch repeatedly")) {
        pushUnique(steps, "await mmPage.openKycGapReportFromSidebar()");
        pushUnique(steps, "await mmPage.openMissingMandatoryDataTemplateFromSidebar()");
      }
      continue;
    }

    if (isCountBadgeRow(row)) {
      if (stepMatches(s, "create new valid template", "create new template", "save template")) {
        pushUnique(steps, "await mmPage.openCreateTemplateView()");
        pushUnique(steps, 'await mmPage.fillField(mmPage.createTemplateNameInput, "Auto Count Badge Template", "Template name")');
        pushUnique(steps, "await mmPage.clickCreateSubmit()");
      } else if (stepMatches(s, "return to panel")) {
        pushUnique(steps, "await mmPage.returnToTemplateListView()");
      } else if (stepMatches(s, "refresh")) {
        pushUnique(steps, "await mmPage.refreshPage()");
      }
      continue;
    }

    if (
      stepMatches(s, "login", "navigate to kyc", "observe first-time", "validate aml shell", "check console", "open aml shell", "locate missing mandatory", "expand node", "open module", "open template module", "open template view", "open template panel", "open template list", "note current data", "note total count", "inspect multiple cards", "observe left panel", "observe detail panel", "stay idle", "rapidly switch", "inspect visible tabs", "inspect tabs", "validate individual group", "validate corporate group", "cross-check classification", "locate add field", "locate locked field", "open field config", "open template detail", "open editable template", "open template detail panel", "open template containing", "open db-created field", "open db-origin", "monitor api", "trigger backend", "verify api", "compare displayed", "cross-check metadata", "observe badge", "inspect options", "inspect legacy", "validate name", "validate kyc level", "validate customer type", "validate version", "validate top bar", "verify sidebar", "verify child routes", "verify remaining tabs", "verify hidden", "verify save success", "verify no unauthorized", "verify api denial", "validate route", "validate route integrity", "validate route persistence", "validate list", "validate detail", "validate header", "validate metadata", "validate label", "validate result", "validate filtered", "validate no-result", "validate latest list", "validate detail sync", "validate selection", "validate active tab", "validate active highlight", "validate first loaded tab", "validate tip", "observe validation", "observe detail panel", "observe badge", "note current data", "trigger action", "trigger save", "retry save", "reopen", "return to list", "return to panel", "return to template", "navigate tabs", "switch child", "switch template", "switch repeatedly", "collapse node", "expand again", "apply filters", "change pagination", "clear search", "select valid section", "select invalid", "enter special", "enter max", "retry with", "attempt edit", "attempt dropdown", "attempt requirement", "try checkbox", "try sidebar", "try updating", "view restriction", "hidden route", "validate top bar label", "validate updated label", "open template view", "open editable template", "open kyc gap score tab")
    ) {
      continue;
    }

    if (stepMatches(s, "configure overlapping", "create score gap", "configure score")) {
      pushUnique(steps, `await mmPage.configureOverlappingScoreRangesFromTestData('${escapeStr(row.testData)}')`);
      continue;
    }

    if (stepMatches(s, "click save ranges", "save ranges")) {
      if (isScoreRangeRow(row)) {
        pushUnique(steps, "await mmPage.expectScoreRangeSaveBlocked()");
      } else {
        pushUnique(steps, "await mmPage.saveChangesAndExpectSuccess()");
      }
      continue;
    }

    if (stepMatches(s, "open sidebar", "navigate to kyc gap report") && fgUsesSidebarGapReport(row)) {
      pushUnique(steps, "await mmPage.openKycGapReportFromSidebar()");
      continue;
    }

    if (stepMatches(s, "refresh", "revalidate")) {
      pushUnique(steps, "await mmPage.refreshPage()");
      continue;
    }

    if (stepMatches(s, "open individual template", "open individual")) {
      pushUnique(steps, "await mmPage.selectTemplateByExactName('Standard KYC — Individual')");
    } else if (stepMatches(s, "open corporate template", "open corporate")) {
      pushUnique(steps, "await mmPage.selectTemplateByExactName('Standard KYC — Corporate')");
    } else if (stepMatches(s, "select template", "select first card", "select second card", "select non-default", "click first template", "click another template", "open searched template", "reopen selected")) {
      pushUnique(steps, `await mmPage.selectTemplateByExactName('${escapeStr(inferTemplateName(row))}')`);
    } else if (stepMatches(s, "open editable mandatory field", "open editable corporate field", "open editable field", "open field", "open db-created field", "open db-origin", "open locked field", "open editable dropdown")) {
      const targets = fragments.length > 0 ? fragments : fieldFragment ? [fieldFragment] : [];
      for (const fragment of targets) {
        pushUnique(steps, `await mmPage.openFieldByTestDataFragment('${escapeStr(fragment)}')`);
      }
    } else if (stepMatches(s, "update requirement", "change requirement", "modify valid field", "modify template", "modify field config", "modify requirement", "change to optional", "set as mandatory", "update field config", "update config")) {
      const targets = fragments.length > 0 ? fragments : fieldFragment ? [fieldFragment] : [];
      if (targets.length > 0) {
        for (const fragment of targets) {
          pushUnique(steps, `await mmPage.updateFieldRequirementByTestDataFragment('${escapeStr(fragment)}')`);
        }
      } else {
        pushUnique(steps, "await mmPage.modifyFirstEditableRequirement()");
      }
    } else if (stepMatches(s, "click save", "save field", "save template", "save changes", "save.", "save config", "click save/create", "save/create")) {
      if (row.subModule.toLowerCase().includes("mandatory input validation") || rowMatches(row, "leave required fields blank", "validation displayed")) {
        pushUnique(steps, "await mmPage.clickDialogSubmit()");
      } else {
        pushUnique(steps, "await mmPage.saveChangesAndExpectSuccess()");
      }
    } else if (stepMatches(s, "open gap report", "open report", "navigate to gap report", "open kyc gap report", "reopen gap report")) {
      pushUnique(steps, "await mmPage.openKycGapReportDirect(testData.baseUrl)");
    } else if (stepMatches(s, "refresh", "reopen module", "reopen field", "reopen template", "refresh module", "refresh page", "refresh panel", "refresh and")) {
      pushUnique(steps, "await mmPage.refreshPage()");
    } else if (stepMatches(s, "click add field", "open add field", "add field")) {
      pushUnique(steps, "await mmPage.openAddFieldDialog()");
    } else if (stepMatches(s, "enter valid field", "create custom field", "save field")) {
      pushUnique(steps, "await mmPage.createValidCustomField()");
    } else if (stepMatches(s, "enter existing field", "duplicate", "same-name ui add", "attempt same-name")) {
      const dupName = fieldFragment || "National ID";
      pushUnique(steps, `await mmPage.attemptDuplicateFieldCreation('${escapeStr(dupName)}')`);
    } else if (stepMatches(s, "leave required fields blank", "leave required")) {
      pushUnique(steps, "await mmPage.openAddFieldDialog()");
      pushUnique(steps, "await mmPage.clickDialogSubmit()");
    } else if (stepMatches(s, "search template", "enter exact template", "enter partial", "enter invalid", "search")) {
      pushUnique(steps, `await mmPage.searchTemplates('${escapeStr(searchKeyword(row))}')`);
    } else if (stepMatches(s, "search gap", "enter exact", "enter invalid keyword", "non-existing")) {
      const kw = /invalid|non-existing|no-match/i.test(row.testData) ? "zzzz-no-match" : searchKeyword(row);
      pushUnique(steps, `await mmPage.searchGapReport('${escapeStr(kw)}')`);
    } else if (stepMatches(s, "open create template", "navigate to create", "create new valid template", "create template")) {
      pushUnique(steps, "await mmPage.openCreateTemplateView()");
    } else if (stepMatches(s, "clone")) {
      pushUnique(steps, "await mmPage.clickCloneButton()");
    } else if (stepMatches(s, "close modal", "cancel", "close icon")) {
      pushUnique(steps, "await mmPage.cancelButton.click()");
    } else if (stepMatches(s, "session expire", "idle", "expired", "logout", "re-auth", "authorization failure", "direct url")) {
      pushUnique(steps, "await mmPage.mockUnauthorized()");
      pushUnique(steps, OPEN);
    } else if (stepMatches(s, "click save changes") && rowMatches(row, "mid-edit", "unsaved", "session expire")) {
      pushUnique(steps, "await mmPage.clickAndWait(mmPage.saveChangesButton, 'Save Changes')");
    } else if (stepMatches(s, "open template containing db field")) {
      pushUnique(steps, "await mmPage.selectTemplateByExactName('Standard KYC — Individual')");
    } else if (stepMatches(s, "attempt requirement change", "try updating field")) {
      pushUnique(steps, "await mmPage.attemptLockedFieldEdit()");
    } else if (stepMatches(s, "open first gap", "view detail", "open detail")) {
      pushUnique(steps, "await mmPage.openFirstGapReportDetail()");
    } else if (stepMatches(s, "trigger recalculation", "trigger score")) {
      pushUnique(steps, "await mmPage.modifyFirstEditableRequirement()");
      pushUnique(steps, "await mmPage.saveChangesAndExpectSuccess()");
      pushUnique(steps, "await mmPage.openKycGapReportDirect(testData.baseUrl)");
    } else if (stepMatches(s, "refresh report")) {
      pushUnique(steps, "await mmPage.refreshPage()");
    } else if (stepMatches(s, "valid template creation", "fill template name")) {
      pushUnique(steps, "await mmPage.openCreateTemplateView()");
      pushUnique(steps, 'await mmPage.fillField(mmPage.createTemplateNameInput, "Auto Test Template", "Template name")');
      pushUnique(steps, "await mmPage.clickCreateSubmit()");
    }
  }

  if (rowMatches(row, "valid field creation", "valid ui field creation") && !steps.some((s) => s.includes("createValidCustomField"))) {
    pushUnique(steps, "await mmPage.createValidCustomField()");
  }

  if (rowMatches(row, "recalculation after template", "template update recalculation") || numbered.some((s) => stepMatches(s, "modify template") && numbered.some((s2) => stepMatches(s2, "open report")))) {
    if (!steps.some((s) => s.includes("modifyFirstEditable") || s.includes("updateFieldRequirement"))) {
      pushUnique(steps, "await mmPage.modifyFirstEditableRequirement()");
    }
    if (!steps.some((s) => s.includes("saveChangesAndExpectSuccess"))) {
      pushUnique(steps, "await mmPage.saveChangesAndExpectSuccess()");
    }
    if (numbered.some((s) => stepMatches(s, "open report"))) {
      pushUnique(steps, "await mmPage.openKycGapReportDirect(testData.baseUrl)");
    }
  }

  const blob = `${row.acceptanceCriteria} ${row.expectedResult}`.toLowerCase();
  const persistFragments = parseTestDataFragments(row.testData);
  const hasSaveStep = numbered.some((s) => stepMatches(s, "save", "save changes", "save field", "save template"));
  const expectsPostSavePersist =
    /config persists|persistence after|retained after|preserved after|recheck after refresh/.test(blob) ||
    numbered.some((s) => stepMatches(s, "refresh", "revalidate", "reopen template", "reopen field", "reopen module"));
  const editableFieldPersist = /^editable field$/i.test(row.testData.trim());
  if (hasSaveStep && expectsPostSavePersist && !isScoreRangeRow(row) && !isTemplateDetailSaveRow(row) && !isSessionMidEditRow(row) && !isLockedFieldRow(row) && !isValidCustomFieldCreationRow(row)) {
    pushUnique(steps, "await mmPage.refreshPage()");
    const template = inferTemplateName(row);
    const tab = inferTabName(row);
    if (tab) {
      pushUnique(steps, `await mmPage.reopenTemplateContextAfterRefresh('${escapeStr(template)}', '${escapeStr(tab)}')`);
    } else {
      pushUnique(steps, `await mmPage.reopenTemplateContextAfterRefresh('${escapeStr(template)}')`);
    }
    if (editableFieldPersist) {
      pushUnique(steps, "await mmPage.expectFirstEditableRequirementPersisted()");
    } else if (persistFragments.length > 0) {
      for (const fragment of persistFragments) {
        pushUnique(steps, `await mmPage.expectFieldRequirementPersistedByTestDataFragment('${escapeStr(fragment)}')`);
      }
    }
  }

  return steps;
}

/** Assertions derived strictly from Acceptance Criteria + Expected Result + sub-module. */
function buildSpecializedAssertions(row: MmExcelRow): string[] | null {
  const steps: string[] = [];
  const sm = row.subModule.toLowerCase();
  const ac = row.acceptanceCriteria.toLowerCase();
  const er = row.expectedResult.toLowerCase();
  const blob = `${ac} ${er} ${sm} ${row.taskDescription.toLowerCase()}`;
  const push = (s: string): void => pushUnique(steps, s);

  if (isApiListFailure(row)) {
    push("await mmPage.expectTemplateListApiFailureState()");
    push("await mmPage.expectAppShellVisible()");
    return steps;
  }
  if (sm.includes("template detail load failure") || isApiPartialDetailRow(row)) {
    push("await mmPage.expectTemplateDetailApiFailureState()");
    return steps;
  }
  if (isGapReportLoadFailure(row)) {
    push("await mmPage.expectGapReportApiFailureState()");
    return steps;
  }
  if (isTopBarRow(row)) {
    push("await mmPage.expectTopBarPersistentAcrossViews(testData.baseUrl)");
    return steps;
  }
  if (isCreateTemplateButtonRow(row)) {
    push("await mmPage.expectCreateTemplateButtonVisibilityAcrossViews(testData.baseUrl)");
    return steps;
  }
  if (isSidebarRouteNavRow(row)) {
    push("await mmPage.expectSidebarRouteNavigationIntegrity(testData.baseUrl)");
    return steps;
  }
  if (isSidebarStatePersistenceRow(row)) {
    push("await mmPage.expectGapReportTableVisible()");
    return steps;
  }
  if (isTemplateDetailAddFieldRow(row)) {
    push("await mmPage.expectAddFieldButtonWorkflow()");
    return steps;
  }
  if (isSessionMidEditRow(row)) {
    push("await mmPage.expectAccessDenied()");
    return steps;
  }
  if (isApiPartialListRow(row)) {
    push("await mmPage.expectApiFailureHandledGracefully()");
    return steps;
  }
  if (isGapReportViewLoadRow(row)) {
    push("await mmPage.expectGapReportTableVisible()");
    push("await mmPage.expectAppShellVisible()");
    return steps;
  }
  if (isAddCustomFieldModalRow(row)) {
    push("await mmPage.expectAddCustomFieldModalControlsVisible()");
    return steps;
  }
  if (isEmptyListApiRow(row)) {
    push("await mmPage.expectApiFailureHandledGracefully()");
    return steps;
  }
  if (isAddCustomFieldWeightageRow(row)) {
    if (row.subModule.toLowerCase().includes("persistence")) {
      push("await mmPage.expectCustomFieldWeightagePersisted('Weightage Test Field', '1')");
    } else {
      push("await mmPage.expectAddFieldWeightageDropdown()");
    }
    return steps;
  }
  if (isAddCustomFieldCancelRow(row)) {
    push("await expect(mmPage.addFieldButton).toBeVisible()");
    return steps;
  }
  if (isFieldConfigRequirementTypeRow(row)) {
    push("await expect(mmPage.requirementDropdowns.first()).toBeVisible()");
    push("await mmPage.expectSaveChangesSucceeded()");
    return steps;
  }
  if (isSecurityLogoutRefreshRow(row)) {
    push("await mmPage.expectAccessDenied()");
    return steps;
  }
  if (isValidCustomFieldCreationRow(row)) {
    push(`await mmPage.expectCustomFieldVisibleByName('${escapeStr(parseCustomFieldName(row.testData))}')`);
    return steps;
  }
  if (isCrossTemplateCompareRow(row)) {
    push("await expect(mmPage.fieldRows.first()).toBeVisible()");
    return steps;
  }
  if (isLockedFieldRow(row)) {
    push("await mmPage.expectLockedFieldEditRestriction()");
    return steps;
  }
  if (isTemplateDetailSaveRow(row)) {
    push("await mmPage.expectSaveChangesSucceeded()");
    return steps;
  }
  if (isCountBadgeRow(row)) {
    push("await mmPage.expectTemplateCountMatchesCards()");
    return steps;
  }
  if (isScoreRangeRow(row)) {
    if (/overlap|gap exists|blocked|reject/.test(blob)) {
      push("await mmPage.expectScoreRangeSaveBlocked()");
    } else {
      push("await mmPage.expectScoreTabLoaded()");
    }
    return steps;
  }

  return null;
}

export function buildExcelAssertionActions(row: MmExcelRow): string[] {
  const specialized = buildSpecializedAssertions(row);
  if (specialized) {
    return specialized;
  }

  const steps: string[] = [];
  const ac = row.acceptanceCriteria.toLowerCase();
  const er = row.expectedResult.toLowerCase();
  const sm = row.subModule.toLowerCase();
  const fg = featureGroup(row.subModule);
  const blob = `${ac} ${er} ${sm} ${row.taskDescription.toLowerCase()}`;
  const fragments = parseTestDataFragments(row.testData);
  const numbered = parseNumberedSteps(row.testSteps);
  const hasRefreshStep = numbered.some((s) => stepMatches(s, "refresh", "revalidate"));
  const push = (s: string): void => pushUnique(steps, s);

  if (isAuthDeniedScenario(row)) {
    push("await mmPage.expectAccessDenied()");
  }
  if (/immutable|edit blocked/.test(blob) && !/save blocked/.test(blob)) {
    push("await mmPage.expectLockedFieldEditRestriction()");
  }

  if (fg === "DB-Origin Field") {
    if (sm.includes("locked")) {
      push("await mmPage.expectLockedFieldEditRestriction()");
    } else if (sm.includes("ui rendering")) {
      push(`await mmPage.expectDbOriginFieldRendered('${escapeStr(dbFieldLabel(row))}')`);
    } else if (sm.includes("weightage")) {
      push("await mmPage.expectDbOriginFieldWeightage()");
    } else if (sm.includes("duplicate")) {
      push("await mmPage.expectAddFieldValidationError()");
    }
  }

  if (/template list load failure/.test(sm)) push("await mmPage.expectTemplateListApiFailureState()");
  else if (/template detail load failure/.test(sm)) push("await mmPage.expectTemplateDetailApiFailureState()");
  else if (/gap report load failure/.test(sm)) push("await mmPage.expectGapReportApiFailureState()");
  else if (
    fg === "API Handling" ||
    fg === "Retry Logic" ||
    fg === "Backend Reliability" ||
    fg === "Error Handling" ||
    fg === "Recovery" ||
    fg === "Backend Integrity" ||
    fg === "Reliability"
  ) {
    if (fg !== "DB-Origin Field") {
      push("await mmPage.expectApiFailureHandledGracefully()");
    }
  }

  if (/persist|persistence|config persists|retained|preserved|recalculat/.test(blob) && !isScoreRangeRow(row)) {
    if (sm.includes("refresh synchronization")) {
      push("await mmPage.expectGapReportSyncedWithTemplate()");
    } else if (/recalculat|score engine|template changes|template logic/.test(blob)) {
      push("await mmPage.expectScoreRecalculationAfterTemplateUpdate(testData.baseUrl)");
    } else if (/gap report|report/.test(blob) && !isTopBarRow(row)) {
      push("await mmPage.expectGapReportSyncedWithTemplate()");
    } else if (!/editable|mandatory|corporate/.test(blob)) {
      push("await mmPage.expectSaveChangesSucceeded()");
    }
  }

  if (/editable/.test(blob) && fragments.length > 0) {
    for (const f of fragments) {
      push(`await mmPage.expectFieldEditableByTestDataFragment('${escapeStr(f)}')`);
    }
  } else if (/editable/.test(blob)) {
    push("await mmPage.expectEditableFieldCheckboxesEnabled()");
  }

  if (/save allowed|save success/.test(blob)) {
    push("await mmPage.expectSaveChangesSucceeded()");
  }

  if (/duplicate/.test(blob)) {
    push("await mmPage.expectAddFieldValidationError()");
  }

  if (/count increment|count badge|badge/.test(blob)) {
    push("await mmPage.expectTemplateCountMatchesCards()");
  }
  if (/active state|active highlight|single.*card/.test(blob)) {
    push("await mmPage.expectSingleActiveTemplateCard()");
  }
  if (/top bar|sidebar|app shell|layout remains stable|no broken/.test(blob) && !isTopBarRow(row) && fg !== "Add Field") {
    push("await mmPage.expectAppShellVisible()");
  }
  if (fg === "Missing Mandatory Data Template" || (fg === "App Shell" && !isTopBarRow(row))) {
    if (/template list/.test(blob)) {
      push("await mmPage.expectTemplateListPopulated()");
    }
    if (/detail panel/.test(blob)) {
      push("await expect(mmPage.fieldRows.first()).toBeVisible()");
    }
  }
  if (/route/.test(blob) && !/api/.test(blob) && !isSidebarRouteNavRow(row)) {
    push("await mmPage.expectOnTemplateRoute()");
  }
  if ((hasRefreshStep || fg === "Refresh") && !/session|logout|expired/.test(blob)) {
    if (sm.includes("refresh synchronization") || (hasRefreshStep && sm.includes("score calculation"))) {
      push("await mmPage.expectGapReportSyncedWithTemplate()");
    } else {
      push("await mmPage.expectTemplateListRefreshed()");
      if (/detail|integrity|sync|selection|active tab/.test(blob)) {
        push(`await mmPage.expectRefreshPreservesTemplateDetail('${escapeStr(inferTemplateName(row))}')`);
      }
    }
  }

  if ((fg === "KYC Gap Report" || sm.includes("gap report")) && !isGapReportLoadFailure(row) && !isGapReportViewLoadRow(row)) {
    if (/empty/.test(blob)) push("await mmPage.expectGapReportEmptyState()");
    else if (/pagination/.test(blob)) push("await mmPage.expectGapReportPaginationVisible()");
    else push("await mmPage.expectGapReportTableVisible()");
  }

  if (/gap score|score range|score mapping|save range/.test(sm) && !sm.includes("calculation") && !isScoreRangeRow(row)) {
    if (/risk label|score mapping|critical/.test(blob)) push("await mmPage.expectExactRiskLabelMapping()");
    else if (/tip bar|guidance/.test(blob)) push("await expect(mmPage.tipBar).toBeVisible()");
    else push("await mmPage.expectScoreTabLoaded()");
  }

  if (fg === "Score Calculation" || fg === "Score Calculation Engine" || fg === "Missing Fields Logic") {
    if (/end-to-end|integrity|lifecycle/.test(blob)) push("await mmPage.expectEndToEndAmlScoreIntegrity(testData.baseUrl)");
    else if (/sync|synchronized/.test(blob) && !sm.includes("refresh synchronization")) {
      push("await mmPage.expectScoreSyncAcrossConsumers(testData.baseUrl)");
    } else if (/persist/.test(blob) && sm.includes("refresh synchronization")) {
      push("await mmPage.expectGapReportSyncedWithTemplate()");
    }
    else if (/null|partial/.test(blob)) push("await mmPage.expectNullPartialDataScoreHandling()");
    else if (/isolation|leakage/.test(blob)) push("await mmPage.expectIndividualCorporateIsolation()");
    else if (/shared/.test(blob)) push("await mmPage.expectSharedAmlFieldIntegrity()");
    else if (/recalculat/.test(blob) && !sm.includes("refresh synchronization")) {
      push("await mmPage.expectScoreRecalculationAfterTemplateUpdate(testData.baseUrl)");
    }
  }

  if (fg === "Add Field" || fg === "Add Custom Field") {
    if (/validation|reject|duplicate|invalid|boundary|max length|special character/.test(blob)) {
      push("await mmPage.expectAddFieldValidationError()");
    } else if (/weightage/.test(blob)) {
      push("await mmPage.expectAddFieldWeightageDropdown()");
    } else if (/modal launch|modal control|control rendering|required controls visible|close action works/.test(blob)) {
      if (!numbered.some((s) => stepMatches(s, "reopen modal"))) {
        push("await mmPage.expectAddFieldDialogControlsVisible()");
      }
    } else if (/cancel|close icon/.test(blob)) {
      push("await expect(mmPage.addFieldButton).toBeVisible()");
    } else if (/valid field|field created/.test(blob)) {
      push("await expect(mmPage.fieldRows.first()).toBeVisible()");
    }
  }

  if (fg === "Field Configuration" || fg === "Locked Fields" || fg === "Requirement Dropdown" || fg === "Save Changes") {
    if (/locked|immutable|edit blocked/.test(blob)) push("await mmPage.expectLockedFieldEditRestriction()");
    else if (/editable/.test(blob)) push("await mmPage.expectEditableFieldCheckboxesEnabled()");
    if (/requirement/.test(blob)) push("await expect(mmPage.requirementDropdowns.first()).toBeVisible()");
  }

  if (/corporate cip|individual cip|cdd|edd|technical/.test(sm) && steps.length === 0) {
    push("await expect(mmPage.tabButtons.first()).toBeVisible()");
    push("await expect(mmPage.fieldRows.first()).toBeVisible()");
    if (/requirement|dropdown|mandatory/.test(blob)) {
      push("await expect(mmPage.requirementDropdowns.first()).toBeVisible()");
    }
  }

  if (fg === "Cross-Module Consistency" || fg === "End-to-End AML Workflow" || fg === "Customer 360 Dependency") {
    if (/customer 360|completed kyc/.test(blob)) push("await mmPage.expectCompletedKycSync(testData.baseUrl)");
    else if (/gap report|report sync|create template to report/.test(blob)) push("await mmPage.expectGapReportSyncedWithTemplate()");
    else if (/corporate entity/.test(blob)) push("await mmPage.expectCorporateEntityWorkflow(testData.baseUrl)");
    else if (/individual customer/.test(blob)) push("await mmPage.expectIndividualCustomerWorkflow()");
    else if (/isolation/.test(blob)) push("await mmPage.expectIndividualCorporateIsolation()");
    else push("await mmPage.expectTemplateModuleLoaded()");
  }

  if (steps.length === 0) {
    push("await mmPage.expectTemplateModuleLoaded()");
    if (/list|template cards|populated/.test(blob)) {
      push("await mmPage.expectTemplateListPopulated()");
    }
  }

  return steps;
}

export function buildExcelAlignedLogic(row: MmExcelRow): string {
  const preconditions = buildPreconditionActions(row);
  const lines = [
    ...preconditions,
    ...buildExcelSetupActions(row, preconditions),
    ...buildExcelStepActions(row),
    ...buildExcelAssertionActions(row),
  ]
    .map((l) => l.trim().replace(/;+$/g, ""))
    .filter(Boolean);

  const deduped: string[] = [];
  for (const line of lines) {
    if (!deduped.includes(line)) {
      deduped.push(line);
    }
  }

  if (deduped.length === 0) {
    return `${OPEN};\n    await mmPage.expectTemplateModuleLoaded()`;
  }

  return deduped.join(";\n    ");
}
