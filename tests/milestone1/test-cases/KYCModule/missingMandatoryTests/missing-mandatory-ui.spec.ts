// spec: specs/missing-mandatory/plan.md
// source: pipeline/test-data/Missing Mandatory Test cases.xlsx — 257 UI cases
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import MissingMandatoryPage from "../../../pages/KYCModule/MissingMandatoryPages/MissingMandatoryPage";

test.describe("Missing Mandatory Data Template - UI", () => {
  let mmPage: MissingMandatoryPage;

  test.beforeEach(async ({ sharedPage }) => {
    mmPage = new MissingMandatoryPage(sharedPage);
  });

  test("Case ID:MM-TC-001 - Missing Mandatory Data Template → App Shell", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.refreshPage();
    await mmPage.expectAppShellVisible();
    await mmPage.expectTemplateListPopulated();
    await expect(mmPage.fieldRows.first()).toBeVisible();
    await mmPage.expectOnTemplateRoute();
    await mmPage.expectTemplateListRefreshed();
    await mmPage.expectRefreshPreservesTemplateDetail('Simplified KYC');
  });

  test("Case ID:MM-TC-002 - App Shell → Top Bar", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.refreshPage();
    await mmPage.expectTopBarPersistentAcrossViews(testData.baseUrl);
  });

  test("Case ID:MM-TC-003 - Sidebar Navigation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.expectAppShellVisible();
    await mmPage.expectOnTemplateRoute();
  });

  test("Case ID:MM-TC-004 - Sidebar → Route Navigation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.expectSidebarRouteNavigationIntegrity(testData.baseUrl);
  });

  test("Case ID:MM-TC-005 - Sidebar → State Persistence", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.searchGapReport('KYC');
    await mmPage.openMissingMandatoryDataTemplateFromSidebar();
    await mmPage.expectSelectedTemplatePersisted('Standard KYC — Individual');
    await mmPage.openKycGapReportFromSidebar();
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-006 - Top Bar → Create Template Button", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.expectCreateTemplateButtonVisibilityAcrossViews(testData.baseUrl);
  });

  test("Case ID:MM-TC-007 - Template List Panel", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.refreshPage();
    await mmPage.expectTemplateListRefreshed();
  });

  test("Case ID:MM-TC-008 - Template List Panel → Count Badge", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openCreateTemplateView();
    await mmPage.fillField(mmPage.createTemplateNameInput, "Auto Count Badge Template", "Template name");
    await mmPage.clickCreateSubmit();
    await mmPage.returnToTemplateListView();
    await mmPage.refreshPage();
    await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
    await mmPage.expectTemplateCountMatchesCards();
  });

  test("Case ID:MM-TC-009 - Template Cards", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.expectTemplateModuleLoaded();
    await mmPage.expectTemplateListPopulated();
  });

  test("Case ID:MM-TC-010 - Initial Access Control (RBAC)", async ({ testData }) => {
    await mmPage.mockUnauthorized();
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.expectAccessDenied();
  });

  test("Case ID:MM-TC-011 - Template Cards → Selection", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.refreshPage();
    await mmPage.expectSaveChangesSucceeded();
    await mmPage.expectSingleActiveTemplateCard();
    await mmPage.expectTemplateListRefreshed();
    await mmPage.expectRefreshPreservesTemplateDetail('Standard KYC — Corporate');
  });

  test("Case ID:MM-TC-012 - Template Cards → Active State", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectSaveChangesSucceeded();
    await mmPage.expectAddFieldValidationError();
    await mmPage.expectSingleActiveTemplateCard();
  });

  test("Case ID:MM-TC-013 - Template Detail Header", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateListRefreshed();
    await mmPage.expectRefreshPreservesTemplateDetail('Simplified KYC');
  });

  test("Case ID:MM-TC-014 - Template Detail Header → Add Field Button", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectAddFieldButtonWorkflow();
  });

  test("Case ID:MM-TC-015 - Template Detail Header → Save Changes", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.modifyFirstEditableRequirement();
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectSaveChangesSucceeded();
  });

  test("Case ID:MM-TC-016 - Tab Visibility → Individual Template", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
<<<<<<< HEAD
    await mmPage.openTab('Individual CIP');
=======
>>>>>>> master
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-017 - Tab Visibility → Corporate Template", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
<<<<<<< HEAD
    await mmPage.expectDefaultTabForCorporate();
=======
>>>>>>> master
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-018 - Tab Behavior → Default Tab Selection", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
<<<<<<< HEAD
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('Individual CIP');
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.expectTemplateModuleLoaded();
=======
    await mmPage.expectDefaultTabSelectionWorkflow();
>>>>>>> master
  });

  test("Case ID:MM-TC-019 - Template Search", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.searchTemplates('Existing');
    await mmPage.expectTemplateModuleLoaded();
    await mmPage.expectTemplateListPopulated();
  });

  test("Case ID:MM-TC-020 - Template Search → State Retention", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.searchTemplates('Template');
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectSaveChangesSucceeded();
  });

  test("Case ID:MM-TC-021 - Refresh → Template Data Sync", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.refreshPage();
    await mmPage.expectTemplateListRefreshed();
    await mmPage.expectRefreshPreservesTemplateDetail('Simplified KYC');
  });

  test("Case ID:MM-TC-022 - Refresh → State Integrity", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.refreshPage();
    await mmPage.expectSaveChangesSucceeded();
    await mmPage.expectOnTemplateRoute();
    await mmPage.expectTemplateListRefreshed();
    await mmPage.expectRefreshPreservesTemplateDetail('Simplified KYC');
  });

  test("Case ID:MM-TC-023 - Stale Data Handling", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-024 - Session Control → Session Expiry", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectLockedFieldEditRestriction();
  });

  test("Case ID:MM-TC-025 - Session Control → Mid-Edit Expiry", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.modifyFirstEditableRequirement();
    await mmPage.mockUnauthorized();
    await mmPage.clickAndWait(mmPage.saveChangesButton, 'Save Changes after session expiry');
    await mmPage.expectAccessDenied();
  });

  test("Case ID:MM-TC-026 - Add Field → Modal Launch", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openAddFieldDialog();
    await mmPage.expectAddFieldDialogControlsVisible();
    await mmPage.cancelButton.click();
    await mmPage.reopenAddFieldDialog();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-027 - Add Field → Mandatory Input Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openAddFieldDialog();
    await mmPage.clickDialogSubmit();
    await mmPage.expectAddFieldValidationError();
  });

  test("Case ID:MM-TC-028 - Add Field → Valid Field Creation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openAddFieldDialog();
    await mmPage.createValidCustomField('Risk Country Declaration');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.refreshPage();
    await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
    await mmPage.expectCustomFieldVisibleByName('Risk Country Declaration');
  });

  test("Case ID:MM-TC-029 - Add Field → Duplicate Field Prevention", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openAddFieldDialog();
    await mmPage.attemptDuplicateFieldCreation('Existing field name');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectSaveChangesSucceeded();
    await mmPage.expectAddFieldValidationError();
  });

  test("Case ID:MM-TC-030 - Add Field → Invalid Section Mapping", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
<<<<<<< HEAD
    await mmPage.openAddFieldDialog();
    await mmPage.saveChangesAndExpectSuccess();
=======
    await mmPage.attemptInvalidSectionMapping();
>>>>>>> master
    await mmPage.expectAddFieldValidationError();
  });

  test("Case ID:MM-TC-031 - Add Field → Special Character Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectAddFieldValidationError();
  });

  test("Case ID:MM-TC-032 - Add Field → Max Length Boundary", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectAddFieldValidationError();
  });

  test("Case ID:MM-TC-033 - Field Configuration → Requirement Type", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
<<<<<<< HEAD
=======
    await mmPage.openAddFieldDialog();
>>>>>>> master
    await mmPage.createValidCustomField('Requirement Type Field');
    await mmPage.modifyFirstEditableRequirement();
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.refreshPage();
    await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
<<<<<<< HEAD
    await expect(mmPage.requirementDropdowns.first()).toBeVisible();
    await mmPage.expectSaveChangesSucceeded();
=======
    await mmPage.expectFirstEditableRequirementPersisted();
>>>>>>> master
  });

  test("Case ID:MM-TC-034 - Field Configuration → Immediate UI Sync", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.modifyFirstEditableRequirement();
    await mmPage.expectTemplateCountMatchesCards();
    await expect(mmPage.requirementDropdowns.first()).toBeVisible();
  });

  test("Case ID:MM-TC-035 - Field Configuration → Persistence After Save", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.modifyFirstEditableRequirement();
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.refreshPage();
    await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
    await mmPage.expectFirstEditableRequirementPersisted();
<<<<<<< HEAD
    await mmPage.expectSaveChangesSucceeded();
    await mmPage.expectTemplateListRefreshed();
=======
>>>>>>> master
  });

  test("Case ID:MM-TC-036 - Locked Fields → Edit Restriction", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('Individual CIP');
    await mmPage.attemptLockedFieldEdit();
    await mmPage.expectLockedFieldEditRestriction();
  });

  test("Case ID:MM-TC-037 - Locked Fields → Checkbox Restriction", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('Individual CIP');
    await mmPage.attemptLockedFieldEdit();
    await mmPage.expectLockedFieldEditRestriction();
  });

  test("Case ID:MM-TC-038 - Locked Fields → Dropdown Restriction", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('Individual CIP');
    await mmPage.attemptLockedFieldEdit();
    await mmPage.expectLockedFieldEditRestriction();
  });

  test("Case ID:MM-TC-039 - Requirement Dropdown → Allowed Values", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await expect(mmPage.requirementDropdowns.first()).toBeVisible();
  });

  test("Case ID:MM-TC-040 - Requirement Dropdown → Conditional Normalization", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await expect(mmPage.requirementDropdowns.first()).toBeVisible();
  });

  test("Case ID:MM-TC-041 - Field Inclusion → Checkbox State", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.refreshPage();
    await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
    await mmPage.expectFirstEditableRequirementPersisted();
    await mmPage.expectEditableFieldCheckboxesEnabled();
    await mmPage.expectTemplateListRefreshed();
  });

  test("Case ID:MM-TC-042 - Field Inclusion → Disabled State Persistence", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.searchGapReport('KYC');
    await mmPage.openMissingMandatoryDataTemplateFromSidebar();
    await mmPage.expectSelectedTemplatePersisted('Standard KYC — Individual');
    await mmPage.openKycGapReportFromSidebar();
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-043 - Field Configuration → Unsaved State Warning", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
<<<<<<< HEAD
    await mmPage.updateFieldRequirementByTestDataFragment('Unsaved changes');
    await mmPage.expectTemplateModuleLoaded();
=======
    await mmPage.modifyFirstEditableRequirement();
    await mmPage.expectUnsavedNavigationWarning();
>>>>>>> master
  });

  test("Case ID:MM-TC-044 - Field Configuration → Cancel Without Save", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.refreshPage();
    await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
    await mmPage.expectFirstEditableRequirementPersisted();
    await mmPage.expectSaveChangesSucceeded();
  });

  test("Case ID:MM-TC-045 - Field Configuration → Audit Integrity", async ({ testData }) => {
<<<<<<< HEAD
    await mmPage.mockSaveChangesFailure();
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.updateFieldRequirementByTestDataFragment('Field update action');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectTemplateModuleLoaded();
=======
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.modifyFirstEditableRequirement();
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectSaveChangesSucceeded();
>>>>>>> master
  });

  test("Case ID:MM-TC-046 - Individual Template → Default Load", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-047 - Individual CIP → Identity Documents Group", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('Individual CIP');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
    await expect(mmPage.requirementDropdowns.first()).toBeVisible();
  });

  test("Case ID:MM-TC-048 - Individual CIP → Personal Details Group", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('Individual CIP');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
    await expect(mmPage.requirementDropdowns.first()).toBeVisible();
  });

  test("Case ID:MM-TC-049 - Individual CIP → Address Proof Group", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('Individual CIP');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
    await expect(mmPage.requirementDropdowns.first()).toBeVisible();
  });

  test("Case ID:MM-TC-050 - Individual CIP → Contact Information Group", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('Individual CIP');
    await mmPage.expectFieldEditableByTestDataFragment('Phone');
    await mmPage.expectFieldEditableByTestDataFragment('Email');
    await mmPage.expectFieldEditableByTestDataFragment('Alternate Contact');
  });

  test("Case ID:MM-TC-051 - Individual CIP → Financial Profile Group", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('Individual CIP');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
    await expect(mmPage.requirementDropdowns.first()).toBeVisible();
  });

  test("Case ID:MM-TC-052 - Individual CIP → Mandatory Locked Fields", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('Individual CIP');
    await mmPage.attemptLockedFieldEdit();
    await mmPage.expectLockedFieldEditRestriction();
  });

  test("Case ID:MM-TC-053 - Individual CIP → Editable Mandatory Fields", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('Individual CIP');
    await mmPage.openFieldByTestDataFragment('Email Address');
    await mmPage.updateFieldRequirementByTestDataFragment('Email Address');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectFieldEditableByTestDataFragment('Email Address');
    await mmPage.expectSaveChangesSucceeded();
  });

  test("Case ID:MM-TC-054 - Individual CIP → Optional Field Handling", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('Individual CIP');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectFieldEditableByTestDataFragment('Passport');
    await mmPage.expectFieldEditableByTestDataFragment('Voter ID');
  });

  test("Case ID:MM-TC-055 - Individual CIP → Field Count Integrity", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('Individual CIP');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-056 - CDD Fields → Section Load", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('CDD Fields');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-057 - CDD Fields → Mandatory AML Fields", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('CDD Fields');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
    await expect(mmPage.requirementDropdowns.first()).toBeVisible();
  });

  test("Case ID:MM-TC-058 - CDD Fields → Conditional-to-Optional Normalization", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('CDD Fields');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-059 - CDD Fields → Shared Applicability", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('CDD Fields');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-060 - CDD Fields → Field Tag Integrity", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('CDD Fields');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-061 - EDD Fields → Section Load", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('EDD Fields');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-062 - EDD Fields → Mandatory EDD Controls", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('EDD Fields');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
    await expect(mmPage.requirementDropdowns.first()).toBeVisible();
  });

  test("Case ID:MM-TC-063 - EDD Fields → Conditional Normalization", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('EDD Fields');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-064 - EDD Fields → Template-Specific Extra Fields", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('EDD Fields');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-065 - EDD Fields → PEP Workflow Alignment", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('EDD Fields');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-066 - Technical IDs → Tab Visibility", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
<<<<<<< HEAD
    await mmPage.openTab('Individual CIP');
=======
>>>>>>> master
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-067 - Technical IDs → Locked System Fields", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('Technical IDs');
    await mmPage.expectLockedFieldEditRestriction();
  });

  test("Case ID:MM-TC-068 - Technical IDs → No Requirement Dropdown", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('Technical IDs');
<<<<<<< HEAD
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
    await expect(mmPage.requirementDropdowns.first()).toBeVisible();
=======
    await mmPage.expectTechnicalIdsNoRequirementDropdowns();
>>>>>>> master
  });

  test("Case ID:MM-TC-069 - Technical IDs → System Badge Integrity", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('Technical IDs');
    await mmPage.expectTemplateCountMatchesCards();
  });

  test("Case ID:MM-TC-070 - Technical IDs → Field Count Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('Technical IDs');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-071 - Corporate Template → Default Load", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-072 - Corporate CIP → Tab Visibility", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
<<<<<<< HEAD
    await mmPage.expectDefaultTabForCorporate();
=======
>>>>>>> master
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-073 - Corporate CIP → Entity Identification Group", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('Corporate CIP');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-074 - Corporate CIP → Mandatory Locked Entity Fields", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('Corporate CIP');
    await mmPage.expectLockedFieldEditRestriction();
<<<<<<< HEAD
    await mmPage.expectFieldEditableByTestDataFragment('Certificate of Incorporation');
    await mmPage.expectFieldEditableByTestDataFragment('Tax Registration');
=======
>>>>>>> master
  });

  test("Case ID:MM-TC-075 - Corporate CIP → Ownership & Control Group", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('Corporate CIP');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-076 - Corporate CIP → UBO Declaration Field", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('Corporate CIP');
    await mmPage.expectLockedFieldEditRestriction();
  });

  test("Case ID:MM-TC-077 - Corporate CIP → Editable Mandatory Corporate Fields", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('Corporate CIP');
<<<<<<< HEAD
    await mmPage.openFieldByTestDataFragment('Ownership Structure Chart');
    await mmPage.openFieldByTestDataFragment('Audited Statements');
=======
>>>>>>> master
    await mmPage.updateFieldRequirementByTestDataFragment('Ownership Structure Chart');
    await mmPage.updateFieldRequirementByTestDataFragment('Audited Statements');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.refreshPage();
    await mmPage.reopenTemplateContextAfterRefresh('Standard KYC — Corporate', 'Corporate CIP');
    await mmPage.expectFieldRequirementPersistedByTestDataFragment('Ownership Structure Chart');
    await mmPage.expectFieldRequirementPersistedByTestDataFragment('Audited Statements');
<<<<<<< HEAD
    await mmPage.expectFieldEditableByTestDataFragment('Ownership Structure Chart');
    await mmPage.expectFieldEditableByTestDataFragment('Audited Statements');
    await mmPage.expectSaveChangesSucceeded();
=======
>>>>>>> master
  });

  test("Case ID:MM-TC-078 - Corporate CIP → Conditional-to-Optional Normalization", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('Corporate CIP');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-079 - Corporate CIP → Financial Standing Group", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('Corporate CIP');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-080 - Corporate CIP → Field Count Integrity", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('Corporate CIP');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-081 - Corporate CDD → Shared AML Controls", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('Corporate CDD');
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('CDD');
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-082 - Corporate CDD → Entity Risk Data Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('CDD Fields');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-083 - Corporate CDD → Tag Integrity", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('CDD Fields');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-084 - Corporate EDD → Section Load", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('EDD Fields');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-085 - Corporate EDD → Mandatory EDD Controls", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('EDD Fields');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
    await expect(mmPage.requirementDropdowns.first()).toBeVisible();
  });

  test("Case ID:MM-TC-086 - Corporate EDD → Site/Premises Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('EDD Fields');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
    await expect(mmPage.requirementDropdowns.first()).toBeVisible();
  });

  test("Case ID:MM-TC-087 - Corporate EDD → Trust/Foundation High-Risk Fields", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('EDD Fields');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-088 - Corporate EDD → PEP / High-Risk Alignment", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('EDD Fields');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-089 - Corporate Technical IDs → Tab Visibility", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
<<<<<<< HEAD
    await mmPage.expectDefaultTabForCorporate();
=======
>>>>>>> master
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-090 - Corporate Technical IDs → Immutable System Fields", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('Technical IDs');
<<<<<<< HEAD
    await mmPage.expectLockedFieldEditRestriction();
    await mmPage.expectFieldEditableByTestDataFragment('CIF ID');
    await mmPage.expectFieldEditableByTestDataFragment('Risk Score');
    await mmPage.expectFieldEditableByTestDataFragment('KYC Status');
=======
    await mmPage.expectCorporateTechnicalIdsImmutable();
>>>>>>> master
  });

  test("Case ID:MM-TC-091 - Corporate Technical IDs → System-Owned State", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('Technical IDs');
<<<<<<< HEAD
    await mmPage.expectFieldEditableByTestDataFragment('System fields');
    await mmPage.expectTemplateCountMatchesCards();
=======
    await mmPage.expectCorporateTechnicalIdsImmutable();
>>>>>>> master
  });

  test("Case ID:MM-TC-092 - Corporate Technical IDs → Field Count Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('Technical IDs');
    await expect(mmPage.tabButtons.first()).toBeVisible();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-093 - Corporate Template → Cross-Template Isolation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-094 - Corporate Template → Entity Metadata Sync", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-095 - Corporate Template → Entity Workflow Integrity", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.expectAppShellVisible();
  });

  test("Case ID:MM-TC-096 - Create New Template → Launch Flow", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
<<<<<<< HEAD
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openCreateTemplateView();
    await mmPage.expectAppShellVisible();
    await mmPage.expectOnTemplateRoute();
=======
    await mmPage.openCreateTemplateView();
    await mmPage.expectCreateTemplateLaunchScreen();
>>>>>>> master
  });

  test("Case ID:MM-TC-097 - Create New Template → Mandatory Input Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openAddFieldDialog();
    await mmPage.clickDialogSubmit();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-098 - Create New Template → Valid Template Creation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectTemplateModuleLoaded();
    await mmPage.expectTemplateListPopulated();
  });

  test("Case ID:MM-TC-099 - Create New Template → Duplicate Name Restriction", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectSaveChangesSucceeded();
    await mmPage.expectAddFieldValidationError();
  });

  test("Case ID:MM-TC-100 - Create New Template → Customer Type Mapping", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-101 - Create New Template → KYC Level Mapping", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectSaveChangesSucceeded();
    await mmPage.expectTemplateCountMatchesCards();
  });

  test("Case ID:MM-TC-102 - Create New Template → Invalid Metadata Handling", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-103 - Create New Template → Cancel Flow", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
<<<<<<< HEAD
    await mmPage.cancelButton.click();
    await mmPage.expectSaveChangesSucceeded();
=======
    await mmPage.openCreateTemplateView();
    await mmPage.fillField(mmPage.createTemplateNameInput, "Canceled Template", "Template name");
    await mmPage.cancelCreateTemplateFlow();
    await mmPage.expectCreateTemplateCanceled();
>>>>>>> master
  });

  test("Case ID:MM-TC-104 - Create New Template → Refresh Persistence", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openCreateTemplateView();
    await mmPage.refreshPage();
    await mmPage.expectSaveChangesSucceeded();
    await mmPage.expectTemplateListRefreshed();
  });

  test("Case ID:MM-TC-105 - Clone Flow → Launch Clone Action", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.clickCloneButton();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-106 - Clone Flow → Exact Field Copy", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.clickCloneButton();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-107 - Clone Flow → Score Configuration Copy", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.clickCloneButton();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-108 - Clone Flow → Version Reset", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.clickCloneButton();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-109 - Clone Flow → Ownership Independence", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.clickCloneButton();
<<<<<<< HEAD
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectTemplateModuleLoaded();
=======
    await mmPage.modifyFirstEditableRequirement();
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectCloneOwnershipIndependence();
>>>>>>> master
  });

  test("Case ID:MM-TC-110 - Clone Flow → Duplicate Clone Naming Restriction", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.clickCloneButton();
    await mmPage.expectAddFieldValidationError();
  });

  test("Case ID:MM-TC-111 - Versioning → Increment on Save", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.modifyFirstEditableRequirement();
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-112 - Versioning → Historical Integrity", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectLockedFieldEditRestriction();
  });

  test("Case ID:MM-TC-113 - Versioning → Header/List Sync", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectTemplateModuleLoaded();
    await mmPage.expectTemplateListPopulated();
  });

  test("Case ID:MM-TC-114 - Save Changes → Valid Persistence", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
<<<<<<< HEAD
    await mmPage.updateFieldRequirementByTestDataFragment('Valid config update');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.refreshPage();
    await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
    await mmPage.expectFieldRequirementPersistedByTestDataFragment('Valid config update');
    await mmPage.expectSaveChangesSucceeded();
    await mmPage.expectTemplateListRefreshed();
=======
    await mmPage.modifyFirstEditableRequirement();
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.refreshPage();
    await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
    await mmPage.expectFirstEditableRequirementPersisted();
    await mmPage.expectSaveChangesSucceeded();
>>>>>>> master
  });

  test("Case ID:MM-TC-115 - Save Changes → Validation Failure", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectSaveChangesSucceeded();
    await mmPage.expectLockedFieldEditRestriction();
  });

  test("Case ID:MM-TC-116 - Save Changes → Double Click Prevention", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectSaveChangesSucceeded();
    await mmPage.expectAddFieldValidationError();
  });

  test("Case ID:MM-TC-117 - Dirty State → Unsaved Navigation Warning", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
<<<<<<< HEAD
    await mmPage.updateFieldRequirementByTestDataFragment('Unsaved changes');
    await mmPage.expectTemplateModuleLoaded();
=======
    await mmPage.modifyFirstEditableRequirement();
    await mmPage.expectUnsavedNavigationWarning();
>>>>>>> master
  });

  test("Case ID:MM-TC-118 - Dirty State → Discard Unsaved Changes", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
<<<<<<< HEAD
    await mmPage.expectSaveChangesSucceeded();
=======
    await mmPage.modifyFirstEditableRequirement();
    await mmPage.expectUnsavedNavigationWarning();
>>>>>>> master
  });

  test("Case ID:MM-TC-119 - Concurrency → Parallel Edit Conflict", async ({ testData }) => {
    await mmPage.mockSaveChangesFailure();
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-120 - Concurrency → Stale Save Prevention", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-121 - KYC Gap Score Configuration → Tab Availability", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
<<<<<<< HEAD
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
=======
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('KYC Gap Score');
>>>>>>> master
    await mmPage.expectScoreTabLoaded();
  });

  test("Case ID:MM-TC-122 - KYC Gap Score Configuration → Category Box Rendering", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.expectExactRiskLabelMapping();
  });

  test("Case ID:MM-TC-124 - Score Range → Low Range Default Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.expectScoreTabLoaded();
  });

  test("Case ID:MM-TC-125 - Score Range → Medium Range Default Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.expectScoreTabLoaded();
  });

  test("Case ID:MM-TC-126 - Score Range → High Range Default Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.expectScoreTabLoaded();
  });

  test("Case ID:MM-TC-127 - Score Range → Critical Range Default Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.expectScoreTabLoaded();
  });

  test("Case ID:MM-TC-128 - Score Range → Overlap Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.configureOverlappingScoreRangesFromTestData('Low: 0–30 / Medium: 25–50');
    await mmPage.expectScoreRangeSaveBlocked();
  });

  test("Case ID:MM-TC-129 - Score Range → Full Coverage Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.configureOverlappingScoreRangesFromTestData('Low: 0–20 / Medium: 30–50');
    await mmPage.expectScoreRangeSaveBlocked();
  });

  test("Case ID:MM-TC-130 - Score Range → Min-Max Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.searchTemplates('High:');
    await mmPage.expectScoreRangeSaveBlocked();
  });

  test("Case ID:MM-TC-131 - Score Range → Duplicate Range Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
<<<<<<< HEAD
    await mmPage.attemptDuplicateFieldCreation('Repeated score interval');
=======
    await mmPage.configureOverlappingScoreRangesFromTestData('Repeated score interval');
>>>>>>> master
    await mmPage.expectScoreRangeSaveBlocked();
  });

  test("Case ID:MM-TC-132 - Score Range → Zero Boundary Handling", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.expectScoreTabLoaded();
  });

  test("Case ID:MM-TC-133 - Score Range → Maximum Boundary Handling", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.expectScoreTabLoaded();
  });

  test("Case ID:MM-TC-134 - Score Range → Out-of-Range Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.searchTemplates('-0.0000660066');
    await mmPage.expectScoreRangeSaveBlocked();
  });

  test("Case ID:MM-TC-135 - Score Range → Decimal/Non-Integer Handling", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.expectScoreRangeSaveBlocked();
  });

  test("Case ID:MM-TC-136 - KYC Gap Score → Save Ranges Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.expectScoreRangeSaveBlocked();
    await mmPage.expectScoreTabLoaded();
  });

  test("Case ID:MM-TC-137 - KYC Gap Score → Invalid Save Handling", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectSaveChangesSucceeded();
    await mmPage.expectScoreTabLoaded();
  });

  test("Case ID:MM-TC-138 - KYC Gap Score → Immediate UI Sync", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.expectSaveChangesSucceeded();
    await mmPage.expectScoreTabLoaded();
  });

  test("Case ID:MM-TC-139 - KYC Gap Score → Refresh Persistence", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
<<<<<<< HEAD
    await mmPage.refreshPage();
    await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC', 'KYC Gap Score');
    await mmPage.expectFieldRequirementPersistedByTestDataFragment('Updated score config');
    await mmPage.expectSaveChangesSucceeded();
    await mmPage.expectTemplateListRefreshed();
    await mmPage.expectScoreTabLoaded();
=======
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.captureScoreRangeSnapshot();
    await mmPage.refreshPage();
    await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC', 'KYC Gap Score');
    await mmPage.expectScoreConfigPersistedAfterRefresh();
>>>>>>> master
  });

  test("Case ID:MM-TC-140 - KYC Gap Score → Template Isolation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectScoreTabLoaded();
  });

  test("Case ID:MM-TC-141 - Score Calculation Trigger → Field Requirement Update", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectScoreRecalculationAfterTemplateUpdate(testData.baseUrl);
  });

  test("Case ID:MM-TC-142 - Score Calculation Trigger → Field Inclusion Change", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectScoreRecalculationAfterTemplateUpdate(testData.baseUrl);
  });

  test("Case ID:MM-TC-143 - Score Calculation Trigger → Template Clone Consistency", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.clickCloneButton();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-144 - Score Mapping → Exact Risk Label Mapping", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.expectExactRiskLabelMapping();
  });

  test("Case ID:MM-TC-145 - Score Mapping → Boundary Edge Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.expectExactRiskLabelMapping();
  });

  test("Case ID:MM-TC-146 - KYC Gap Report → View Load", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportFromSidebar();
    await mmPage.expectGapReportTableVisible();
    await mmPage.expectAppShellVisible();
  });

  test("Case ID:MM-TC-147 - KYC Gap Report → KPI Card Rendering", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-148 - KYC Gap Report → Total Records Accuracy", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-149 - KYC Gap Report → Table Load", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-150 - KYC Gap Report → Empty State", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectGapReportEmptyState();
  });

  test("Case ID:MM-TC-151 - KYC Gap Report → Search Exact Match", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.searchTemplates('CIF');
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-152 - KYC Gap Report → Partial Search", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.searchTemplates('Partial');
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-153 - KYC Gap Report → Invalid Search", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.searchTemplates('Unknown');
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-154 - KYC Gap Report → Customer Type Filter", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-155 - KYC Gap Report → Template Filter", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-156 - KYC Gap Report → Priority Filter", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-157 - KYC Gap Report → Score Range Filter", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.expectScoreTabLoaded();
  });

  test("Case ID:MM-TC-158 - KYC Gap Report → Combined Filters", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-159 - KYC Gap Report → Clear Filters", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-160 - KYC Gap Report → Filter Persistence", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectGapReportSyncedWithTemplate();
    await mmPage.expectGapReportPaginationVisible();
  });

  test("Case ID:MM-TC-161 - KYC Gap Report → Sort by Score", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-162 - KYC Gap Report → Sort by Priority", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-163 - KYC Gap Report → Pagination Next/Previous", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectAddFieldValidationError();
    await mmPage.expectGapReportPaginationVisible();
  });

  test("Case ID:MM-TC-164 - KYC Gap Report → Page Size Handling", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-165 - KYC Gap Report → Row Detail Modal", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-166 - KYC Gap Report → Missing Fields Breakdown", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
<<<<<<< HEAD
    await mmPage.expectGapReportTableVisible();
=======
    await mmPage.openFirstGapReportDetail();
    await mmPage.expectMissingFieldsBreakdownInModal();
>>>>>>> master
  });

  test("Case ID:MM-TC-167 - KYC Gap Report → Score Breakdown", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.openFirstGapReportDetail();
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-168 - KYC Gap Report → Refresh Data Sync", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.refreshPage();
<<<<<<< HEAD
    await mmPage.expectTemplateListRefreshed();
    await mmPage.expectRefreshPreservesTemplateDetail('Simplified KYC');
=======
>>>>>>> master
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-169 - KYC Gap Report → State Persistence", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.searchGapReport('KYC');
    await mmPage.openMissingMandatoryDataTemplateFromSidebar();
    await mmPage.expectSelectedTemplatePersisted('Standard KYC — Individual');
    await mmPage.openKycGapReportFromSidebar();
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-170 - KYC Gap Report → Template-to-Report Sync", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
<<<<<<< HEAD
    await mmPage.updateFieldRequirementByTestDataFragment('Updated AML template');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectGapReportTableVisible();
=======
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.modifyFirstEditableRequirement();
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectGapReportSyncedWithTemplate();
>>>>>>> master
  });

  test("Case ID:MM-TC-171 - Score Calculation Engine → Default Calculation Load", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
<<<<<<< HEAD
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectNullPartialDataScoreHandling();
=======
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.openFirstGapReportDetail();
    await mmPage.expectScoreEngineDefaultLoad();
>>>>>>> master
  });

  test("Case ID:MM-TC-172 - Missing Fields Logic → Mandatory Weight", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-173 - Missing Fields Logic → Optional Weight", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-174 - Score Calculation → Mixed Weight Aggregation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-175 - Score Calculation → Zero Missing Fields", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-176 - Score Calculation → Maximum Score Handling", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-177 - Missing Fields Logic → Locked Field Inclusion", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openTab('Individual CIP');
    await mmPage.attemptLockedFieldEdit();
    await mmPage.expectLockedFieldEditRestriction();
  });

  test("Case ID:MM-TC-178 - Missing Fields Logic → Excluded Field Handling", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-179 - Score Calculation → Field Requirement Change Impact", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectScoreRecalculationAfterTemplateUpdate(testData.baseUrl);
  });

  test("Case ID:MM-TC-180 - Score Calculation → Deleted/Removed Field Impact", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectScoreRecalculationAfterTemplateUpdate(testData.baseUrl);
  });

  test("Case ID:MM-TC-181 - Score Calculation → Template-Specific Mapping", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-182 - Cross-template Isolation → No Score Leakage", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-183 - Score Calculation → Individual vs Corporate Mapping", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-184 - Missing Fields Breakdown → Accurate Field Mapping", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
<<<<<<< HEAD
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectTemplateModuleLoaded();
    await mmPage.expectTemplateListPopulated();
=======
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.openFirstGapReportDetail();
    await mmPage.expectMissingFieldsBreakdownInModal();
>>>>>>> master
  });

  test("Case ID:MM-TC-185 - Missing Fields Breakdown → No False Positive", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
<<<<<<< HEAD
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
=======
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.openFirstGapReportDetail();
    await mmPage.expectMissingFieldsBreakdownInModal();
>>>>>>> master
  });

  test("Case ID:MM-TC-186 - Missing Fields Breakdown → No Duplicate Counting", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
<<<<<<< HEAD
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectAddFieldValidationError();
=======
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.openFirstGapReportDetail();
    await mmPage.expectMissingFieldsBreakdownInModal();
>>>>>>> master
  });

  test("Case ID:MM-TC-187 - Score Calculation → Shared CDD/EDD Field Handling", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('CDD Fields');
    await mmPage.expectSharedAmlFieldIntegrity();
  });

  test("Case ID:MM-TC-188 - Score Calculation → Risk Category Mapping", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-189 - Score Calculation → Boundary Score Precision", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-190 - Score Calculation → Recalculation After Template Update", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.modifyFirstEditableRequirement();
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectScoreRecalculationAfterTemplateUpdate(testData.baseUrl);
  });

  test("Case ID:MM-TC-191 - Score Calculation → Refresh Synchronization", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.modifyFirstEditableRequirement();
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.refreshPage();
    await mmPage.expectGapReportSyncedWithTemplate();
  });

  test("Case ID:MM-TC-192 - Score Calculation → Null/Partial Data Handling", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectNullPartialDataScoreHandling();
  });

  test("Case ID:MM-TC-193 - Score Calculation → Orphan Template Handling", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-194 - Score Calculation → Audit Consistency", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectSaveChangesSucceeded();
  });

  test("Case ID:MM-TC-195 - Score Calculation → End-to-End AML Integrity", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.updateFieldRequirementByTestDataFragment('Full AML scoring workflow');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectEndToEndAmlScoreIntegrity(testData.baseUrl);
  });

  test("Case ID:MM-TC-196 - RBAC → View Access (Authorized Role)", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-197 - RBAC → View Restriction (Unauthorized Role)", async ({ testData }) => {
    await mmPage.mockUnauthorized();
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.expectAccessDenied();
    await mmPage.expectOnTemplateRoute();
  });

  test("Case ID:MM-TC-198 - RBAC → Create Template Permission", async ({ testData }) => {
    await mmPage.mockUnauthorized();
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openCreateTemplateView();
    await mmPage.expectAccessDenied();
<<<<<<< HEAD
    await mmPage.expectSaveChangesSucceeded();
=======
>>>>>>> master
  });

  test("Case ID:MM-TC-199 - RBAC → Edit Template Permission", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-200 - RBAC → Save Changes Permission", async ({ testData }) => {
    await mmPage.mockUnauthorized();
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
<<<<<<< HEAD
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectAccessDenied();
    await mmPage.expectScoreRecalculationAfterTemplateUpdate(testData.baseUrl);
=======
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.modifyFirstEditableRequirement();
    await mmPage.clickAndWait(mmPage.saveChangesButton, 'Save Changes as restricted user');
    await mmPage.expectAccessDenied();
>>>>>>> master
  });

  test("Case ID:MM-TC-201 - RBAC → Clone Permission", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.clickCloneButton();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-202 - RBAC → KYC Gap Report Access", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-203 - RBAC → Hidden Action Controls", async ({ testData }) => {
    await mmPage.mockUnauthorized();
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.expectAccessDenied();
  });

  test("Case ID:MM-TC-204 - RBAC → Direct URL Restriction", async ({ testData }) => {
    await mmPage.mockUnauthorized();
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.expectAccessDenied();
  });

  test("Case ID:MM-TC-206 - RBAC → Cross-Module Isolation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-207 - Session → Idle Timeout Handling", async ({ testData }) => {
    await mmPage.mockUnauthorized();
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.expectAccessDenied();
  });

  test("Case ID:MM-TC-208 - Session → Mid-Edit Save Restriction", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectSaveChangesSucceeded();
  });

  test("Case ID:MM-TC-209 - Session → Re-Authentication Recovery", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.mockUnauthorized();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-210 - Session → Unsaved State on Timeout", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
<<<<<<< HEAD
    await mmPage.expectSaveChangesSucceeded();
=======
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.modifyFirstEditableRequirement();
    await mmPage.expectUnsavedNavigationWarning();
>>>>>>> master
  });

  test("Case ID:MM-TC-211 - Security → Concurrent Session Token Validation", async ({ testData }) => {
    await mmPage.mockSaveChangesFailure();
    await mmPage.mockUnauthorized();
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.expectAccessDenied();
  });

  test("Case ID:MM-TC-212 - Security → Browser Back Access After Logout", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.mockUnauthorized();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-213 - Security → Refresh After Logout", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.mockUnauthorized();
    await mmPage.refreshPage();
    await mmPage.expectAccessDenied();
  });

  test("Case ID:MM-TC-214 - Security → Multi-Role Permission Switch", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-215 - Security → Audit-Safe Access Integrity", async ({ testData }) => {
<<<<<<< HEAD
    await mmPage.mockSaveChangesFailure();
=======
>>>>>>> master
    await mmPage.mockUnauthorized();
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.expectAccessDenied();
  });

  test("Case ID:MM-TC-241 - Cross-Module Consistency → Customer 360 Template Mapping", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectCompletedKycSync(testData.baseUrl);
  });

  test("Case ID:MM-TC-242 - Cross-Module Consistency → KYC Gap Report Sync", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectGapReportTableVisible();
    await mmPage.expectGapReportSyncedWithTemplate();
  });

  test("Case ID:MM-TC-243 - Cross-Module Consistency → Individual/Corporate Isolation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.expectScoreRecalculationAfterTemplateUpdate(testData.baseUrl);
    await mmPage.expectIndividualCorporateIsolation();
  });

  test("Case ID:MM-TC-244 - Cross-Module Consistency → Shared AML Field Integrity", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-245 - Cross-Module Consistency → Score Sync Across Consumers", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectScoreRecalculationAfterTemplateUpdate(testData.baseUrl);
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-246 - Customer 360 Dependency → Missing Field Breakdown", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectCompletedKycSync(testData.baseUrl);
  });

  test("Case ID:MM-TC-247 - Customer 360 Dependency → Completed KYC Sync", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectCompletedKycSync(testData.baseUrl);
  });

  test("Case ID:MM-TC-248 - Customer 360 Dependency → Risk Category Sync", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectScoreRecalculationAfterTemplateUpdate(testData.baseUrl);
    await mmPage.expectCompletedKycSync(testData.baseUrl);
  });

  test("Case ID:MM-TC-249 - End-to-End AML Workflow → Create Template to Report", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
<<<<<<< HEAD
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openCreateTemplateView();
    await mmPage.openAddFieldDialog();
    await mmPage.configureOverlappingScoreRangesFromTestData('New AML template + customer');
=======
    await mmPage.openCreateTemplateView();
    await mmPage.fillField(mmPage.createTemplateNameInput, "E2E AML Template", "Template name");
    await mmPage.clickCreateSubmit();
    await mmPage.openAddFieldDialog();
    await mmPage.createValidCustomField('E2E AML Field');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.saveChangesAndExpectSuccess();
>>>>>>> master
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectGapReportSyncedWithTemplate();
  });

  test("Case ID:MM-TC-250 - End-to-End AML Workflow → Clone to Independent Reporting", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.clickCloneButton();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-251 - End-to-End AML Workflow → Template Update Recalculation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.modifyFirstEditableRequirement();
    await mmPage.expectScoreRecalculationAfterTemplateUpdate(testData.baseUrl);
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-252 - End-to-End AML Workflow → Corporate Entity Flow", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.expectCorporateEntityWorkflow(testData.baseUrl);
  });

  test("Case ID:MM-TC-253 - End-to-End AML Workflow → Individual Customer Flow", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.expectIndividualCustomerWorkflow();
  });

  test("Case ID:MM-TC-254 - Regression → App Shell Stability", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.expectAppShellVisible();
  });

  test("Case ID:MM-TC-255 - Regression → Sidebar / Top Bar Integrity", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectAppShellVisible();
  });

  test("Case ID:MM-TC-256 - Regression → Template CRUD Integrity", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.clickCloneButton();
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-257 - Regression → KYC Gap Score Stability", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.expectScoreTabLoaded();
  });

  test("Case ID:MM-TC-258 - Regression → KYC Gap Report Stability", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
<<<<<<< HEAD
    await mmPage.selectTemplateByExactName('Simplified KYC');
=======
    await mmPage.openKycGapReportDirect(testData.baseUrl);
>>>>>>> master
    await mmPage.expectGapReportTableVisible();
  });

  test("Case ID:MM-TC-259 - Regression → RBAC & Security Integrity", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-260 - Business Integrity → AML Audit Traceability", async ({ testData }) => {
<<<<<<< HEAD
    await mmPage.mockSaveChangesFailure();
=======
>>>>>>> master
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-261 - Business Integrity → Data Consistency Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-262 - Business Integrity → Final End-to-End Enterprise Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-263 - Add Custom Field → Modal Launch", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openAddFieldDialog();
    await mmPage.expectAddCustomFieldModalControlsVisible();
  });

  test("Case ID:MM-TC-264 - Add Custom Field → Modal Control Rendering", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openAddFieldDialog();
    await mmPage.expectAddCustomFieldModalControlsVisible();
  });

  test("Case ID:MM-TC-265 - Add Custom Field → Mandatory Field Name", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openAddFieldDialog();
    await mmPage.expectAddFieldValidationError();
  });

  test("Case ID:MM-TC-266 - Add Custom Field → Mandatory Section Mapping", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-267 - Add Custom Field → Description Handling", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openAddFieldDialog();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-268 - Add Custom Field → Valid UI Field Creation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openAddFieldDialog();
    await mmPage.createValidCustomField();
    await mmPage.expectSaveChangesSucceeded();
    await expect(mmPage.fieldRows.first()).toBeVisible();
  });

  test("Case ID:MM-TC-269 - Add Custom Field → Duplicate Name Same Template", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectAddFieldValidationError();
  });

  test("Case ID:MM-TC-270 - Add Custom Field → Cross-Section Duplicate Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectAddFieldValidationError();
  });

  test("Case ID:MM-TC-271 - Add Custom Field → Invalid Character Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectAddFieldValidationError();
  });

  test("Case ID:MM-TC-272 - Add Custom Field → Length Boundary Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.expectAddFieldValidationError();
  });

  test("Case ID:MM-TC-273 - Add Custom Field → Section Placement Accuracy", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openAddFieldDialog();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-274 - Add Custom Field → Individual Template Mapping", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Individual');
    await mmPage.openAddFieldDialog();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-275 - Add Custom Field → Corporate Template Mapping", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
    await mmPage.openAddFieldDialog();
    await mmPage.expectTemplateModuleLoaded();
  });

  test("Case ID:MM-TC-276 - Add Custom Field → Weightage Dropdown Rendering", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openAddFieldDialog();
    await mmPage.expectAddFieldWeightageDropdown();
  });

  test("Case ID:MM-TC-277 - Add Custom Field → Weightage Persistence", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.createCustomFieldWithWeightage('Weightage Test Field', '1');
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.refreshPage();
    await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
    await mmPage.expectCustomFieldWeightagePersisted('Weightage Test Field', '1');
  });

  test("Case ID:MM-TC-278 - Add Custom Field → Cancel Flow", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
<<<<<<< HEAD
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openAddFieldDialog();
    await mmPage.cancelButton.click();
=======
    await mmPage.openCreateTemplateView();
    await mmPage.fillField(mmPage.createTemplateNameInput, "Canceled Template", "Template name");
    await mmPage.cancelCreateTemplateFlow();
>>>>>>> master
    await expect(mmPage.addFieldButton).toBeVisible();
  });

  test("Case ID:MM-TC-279 - Add Custom Field → Close Icon Flow", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openAddFieldDialog();
    await mmPage.cancelButton.click();
    await mmPage.closeDialogButton.click();
    await expect(mmPage.addFieldButton).toBeVisible();
  });

  test("Case ID:MM-TC-284 - KYC Gap Score → Score Direction Logic", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.expectExactRiskLabelMapping();
  });

  test("Case ID:MM-TC-285 - KYC Gap Score → Zero Score Compliance Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.expectScoreTabLoaded();
  });

  test("Case ID:MM-TC-286 - Save Range Validation → Error Modal Explanation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.expectScoreRangeSaveBlocked();
  });

  test("Case ID:MM-TC-287 - KYC Gap Score → Tip Bar Guidance Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await expect(mmPage.tipBar).toBeVisible();
  });

  test("Case ID:MM-TC-288 - Score Mapping → High Missing Weight to Critical Validation", async ({ testData }) => {
    await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
    await mmPage.selectTemplateByExactName('Simplified KYC');
    await mmPage.openTab('KYC Gap Score');
    await mmPage.modifyFirstEditableRequirement();
    await mmPage.saveChangesAndExpectSuccess();
    await mmPage.openKycGapReportDirect(testData.baseUrl);
    await mmPage.expectExactRiskLabelMapping();
  });
});
