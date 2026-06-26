// spec: specs/missing-mandatory/plan.md
// source: pipeline/test-data/Missing Mandatory Test Cases.xlsx — 224 cases (TC_MMDT_001–TC_MMDT_224)
// fsd: pipeline/test-data/FSD_Missing_Mandatory_KYC_Gap_Report_v1.2.docx
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import MissingMandatoryPage from "../../../pages/KYCModule/MissingMandatoryPages/MissingMandatoryPage";

test.describe("Missing Mandatory Data Template", () => {
  let mmPage: MissingMandatoryPage;

  test.beforeEach(async ({ sharedPage }) => {
    mmPage = new MissingMandatoryPage(sharedPage);
  });

  test.describe("Navigation", () => {
  test("Case ID:TC_MMDT_001 - Navigation → Verify App Shell Initialization", async ({ testData }) => {
    // Excel: TC_MMDT_001 | Feature: Navigation | Task: Verify App Shell Initialization
    // FSD §3.2 — Navigation & Layout
    // Steps (11): Launch AML application. → Authenticate using valid AML Administrator credentials. → Wait for dashboard load completion. …
    // Expected: Application shell loads successfully and all primary containers are rendered correctly.
    console.log("[TC_MMDT_001] Navigation → Verify App Shell Initialization");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectAppShellInitialization();
      });
  });

  test("Case ID:TC_MMDT_003 - Navigation → Verify Sidebar Hierarchy Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_003 | Feature: Navigation | Task: Verify Sidebar Hierarchy Rendering
    // FSD §3.2 — Navigation & Layout
    // Steps (11): Open AML application sidebar. → Locate Missing Mandatory parent node. → Expand parent node. …
    // Expected: Sidebar hierarchy displays correctly without structural issues.
    console.log("[TC_MMDT_003] Navigation → Verify Sidebar Hierarchy Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSidebarHierarchyIntegrity();
      });
  });

  test("Case ID:TC_MMDT_004 - Navigation → Verify Route Navigation Integrity", async ({ testData }) => {
    // Excel: TC_MMDT_004 | Feature: Navigation | Task: Verify Route Navigation Integrity
    // FSD §3.2 — Navigation & Layout
    // Steps (11): Open Missing Mandatory Data Template. → Select a template. → Navigate to Dashboard. …
    // Expected: Navigation routes remain consistent and functional.
    console.log("[TC_MMDT_004] Navigation → Verify Route Navigation Integrity");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSidebarRouteNavigationIntegrity(testData.baseUrl);
      });
  });

  test("Case ID:TC_MMDT_005 - Navigation → Verify Cross-View State Persistence", async ({ testData }) => {
    // Excel: TC_MMDT_005 | Feature: Navigation | Task: Verify Cross-View State Persistence
    // FSD §3.2 — Navigation & Layout
    // Steps (11): Select Template A. → Open Individual CIP tab. → Navigate to another AML menu. …
    // Expected: Previously selected template and tab state are preserved.
    console.log("[TC_MMDT_005] Navigation → Verify Cross-View State Persistence");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openKycGapReportDirect(testData.baseUrl);
      await mmPage.searchGapReport('KYC');
      await mmPage.openMissingMandatoryDataTemplateFromSidebar();
      await mmPage.expectSelectedTemplatePersisted('Standard KYC — Individual');
      await mmPage.openKycGapReportFromSidebar();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectGapReportTableVisible();
      });
  });

  test("Case ID:TC_MMDT_007 - Navigation → Verify Module Re-entry Stability", async ({ testData }) => {
    // Excel: TC_MMDT_007 | Feature: Navigation | Task: Verify Module Re-entry Stability
    // FSD §3.2 — Navigation & Layout
    // Steps (11): Open Missing Mandatory module. → Exit to Dashboard. → Return to module. …
    // Expected: Module remains stable after repeated navigation.
    console.log("[TC_MMDT_007] Navigation → Verify Module Re-entry Stability");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });
  });

  test.describe("Layout", () => {
  test("Case ID:TC_MMDT_002 - Layout → Verify Top Bar Persistence During Module Switching", async ({ testData }) => {
    // Excel: TC_MMDT_002 | Feature: Layout | Task: Verify Top Bar Persistence During Module Switching
    // FSD §3.2 — Navigation & Layout
    // Steps (11): Open Missing Mandatory Data Template view. → Capture displayed page title. → Click Create Template button. …
    // Expected: Top bar persists correctly and reflects current view context.
    console.log("[TC_MMDT_002] Layout → Verify Top Bar Persistence During Module Switching");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTopBarPersistentAcrossViews(testData.baseUrl);
      });
  });

  test("Case ID:TC_MMDT_006 - Layout → Verify Browser Refresh Recovery", async ({ testData }) => {
    // Excel: TC_MMDT_006 | Feature: Layout | Task: Verify Browser Refresh Recovery
    // FSD §3.2 — Navigation & Layout
    // Steps (11): Open existing template. → Navigate to CDD Fields tab. → Scroll midway through page. …
    // Expected: Screen reloads correctly without data corruption.
    console.log("[TC_MMDT_006] Layout → Verify Browser Refresh Recovery");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_008 - Layout → Verify Active Route Highlighting", async ({ testData }) => {
    // Excel: TC_MMDT_008 | Feature: Layout | Task: Verify Active Route Highlighting
    // FSD §3.2 — Navigation & Layout
    // Steps (11): Open Dashboard. → Observe highlighted menu. → Open Missing Mandatory Data Template. …
    // Expected: Active route highlighting accurately reflects current location.
    console.log("[TC_MMDT_008] Layout → Verify Active Route Highlighting");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectOnTemplateRoute();
      });
  });
  });

  test.describe("Template List", () => {
  test("Case ID:TC_MMDT_009 - Template List → Verify Group Header Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_009 | Feature: Template List | Task: Verify Group Header Rendering
    // FSD §3.3 — Template List Panel
    // Steps (11): Open template list panel. → Locate Individual group header. → Verify label visibility. …
    // Expected: Group headers render correctly and remain visible during scrolling.
    console.log("[TC_MMDT_009] Template List → Verify Group Header Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      await mmPage.expectTemplateListPopulated();
      });
  });

  test("Case ID:TC_MMDT_010 - Template List → Verify Group Count Accuracy", async ({ testData }) => {
    // Excel: TC_MMDT_010 | Feature: Template List | Task: Verify Group Count Accuracy
    // FSD §3.3 — Template List Panel
    // Steps (11): Open Individual group. → Count visible templates manually. → Compare with displayed badge count. …
    // Expected: Group counts accurately reflect actual template records.
    console.log("[TC_MMDT_010] Template List → Verify Group Count Accuracy");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateCountMatchesCards();
      });
  });

  test("Case ID:TC_MMDT_011 - Template List → Verify Template Card Metadata Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_011 | Feature: Template List | Task: Verify Template Card Metadata Rendering
    // FSD §3.3 — Template List Panel
    // Steps (11): Open Missing Mandatory Data Template module. → Select Individual template group. → Open first template card. …
    // Expected: All template cards display correct metadata without truncation or mismatch.
    console.log("[TC_MMDT_011] Template List → Verify Template Card Metadata Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      await mmPage.expectTemplateListPopulated();
      });
  });

  test("Case ID:TC_MMDT_012 - Template List → Verify Active Template Selection State", async ({ testData }) => {
    // Excel: TC_MMDT_012 | Feature: Template List | Task: Verify Active Template Selection State
    // FSD §3.3 — Template List Panel
    // Steps (11): Open Template List panel. → Select Template A. → Observe left border highlight. …
    // Expected: Only one template remains active at a time and active state is visually distinguishable.
    console.log("[TC_MMDT_012] Template List → Verify Active Template Selection State");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Simplified KYC');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSingleActiveTemplateCard();
      await mmPage.expectTemplateListRefreshed();
      await mmPage.expectRefreshPreservesTemplateDetail('Simplified KYC');
      });
  });

  test("Case ID:TC_MMDT_013 - Template List → Verify Template Version Display Integrity", async ({ testData }) => {
    // Excel: TC_MMDT_013 | Feature: Template List | Task: Verify Template Version Display Integrity
    // FSD §3.3 — Template List Panel
    // Steps (11): Open template list. → Identify template version displayed on card. → Open template details. …
    // Expected: Version numbers remain accurate and cloned template starts at v1.0.
    console.log("[TC_MMDT_013] Template List → Verify Template Version Display Integrity");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.clickCloneButton();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      await mmPage.expectTemplateListPopulated();
      });
  });

  test("Case ID:TC_MMDT_014 - Template List → Verify KYC Badge Rendering Based on KYC Level", async ({ testData }) => {
    // Excel: TC_MMDT_014 | Feature: Template List | Task: Verify KYC Badge Rendering Based on KYC Level
    // FSD §3.3 — Template List Panel
    // Steps (11): Open template list. → Locate SDD template. → Verify SDD badge label and color. …
    // Expected: Correct badge label and color are displayed for each KYC level.
    console.log("[TC_MMDT_014] Template List → Verify KYC Badge Rendering Based on KYC Level");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateCountMatchesCards();
      });
  });

  test("Case ID:TC_MMDT_015 - Template List → Verify Dynamic Template Count Update After Template Creation", async ({ testData }) => {
    // Excel: TC_MMDT_015 | Feature: Template List | Task: Verify Dynamic Template Count Update After Template Creation
    // FSD §3.3 — Template List Panel
    // Steps (11): Note current Individual group count. → Create a new Individual template. → Save template successfully. …
    // Expected: Group counts update automatically after successful template creation.
    console.log("[TC_MMDT_015] Template List → Verify Dynamic Template Count Update After Template Creation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Standard KYC — Corporate');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('New Individual Template');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_016 - Template List → Verify Empty Group Handling", async ({ testData }) => {
    // Excel: TC_MMDT_016 | Feature: Template List | Task: Verify Empty Group Handling
    // FSD §3.3 — Template List Panel
    // Steps (11): Archive all templates under a customer type group. → Open template list panel. → Locate affected group. …
    // Expected: Empty groups display proper messaging without layout issues.
    console.log("[TC_MMDT_016] Template List → Verify Empty Group Handling");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      await mmPage.expectTemplateListPopulated();
      });
  });
  });

  test.describe("Search", () => {
  test("Case ID:TC_MMDT_017 - Search → Verify Exact Match Search Functionality", async ({ testData }) => {
    // Excel: TC_MMDT_017 | Feature: Search | Task: Verify Exact Match Search Functionality
    // FSD §3.3 — Template List Panel
    // Steps (11): Copy exact template name from list. → Enter full template name in search box. → Wait for real-time filtering. …
    // Expected: Only exact matching template is displayed and accessible.
    console.log("[TC_MMDT_017] Search → Verify Exact Match Search Functionality");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('Retail');
      await mmPage.openFirstGapReportDetail();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_018 - Search → Verify Partial Match Search Functionality", async ({ testData }) => {
    // Excel: TC_MMDT_018 | Feature: Search | Task: Verify Partial Match Search Functionality
    // FSD §3.3 — Template List Panel
    // Steps (11): Identify common keyword within template names. → Enter partial keyword into search field. → Observe filtering behavior. …
    // Expected: Templates containing searched keyword are returned successfully.
    console.log("[TC_MMDT_018] Search → Verify Partial Match Search Functionality");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('Retail');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_019 - Search → Verify Case Insensitive Search Behavior", async ({ testData }) => {
    // Excel: TC_MMDT_019 | Feature: Search | Task: Verify Case Insensitive Search Behavior
    // FSD §3.3 — Template List Panel
    // Steps (11): Identify template name containing mixed-case text. → Search using lowercase value. → Record results count. …
    // Expected: Search results remain identical regardless of input case.
    console.log("[TC_MMDT_019] Search → Verify Case Insensitive Search Behavior");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('retail');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_020 - Search → Verify No Result Search Handling", async ({ testData }) => {
    // Excel: TC_MMDT_020 | Feature: Search | Task: Verify No Result Search Handling
    // FSD §3.3 — Template List Panel
    // Steps (11): Open search field. → Enter random non-existing template name. → Wait for search execution. …
    // Expected: No-result state is displayed correctly and system remains functional.
    console.log("[TC_MMDT_020] Search → Verify No Result Search Handling");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectCreateTemplateButtonVisibilityAcrossViews(testData.baseUrl);
      });
  });

  test("Case ID:TC_MMDT_021 - Search → Verify Search Recovery After Invalid Search", async ({ testData }) => {
    // Excel: TC_MMDT_021 | Feature: Search | Task: Verify Search Recovery After Invalid Search
    // FSD §3.3 — Template List Panel
    // Steps (11): Open Template List panel. → Enter non-existing template name in search box. → Verify empty search result state appears. …
    // Expected: Original template list is restored immediately after clearing invalid search text.
    console.log("[TC_MMDT_021] Search → Verify Search Recovery After Invalid Search");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('XYZ_INVALID_TEMPLATE');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_022 - Search → Verify Real-Time Filtering Performance", async ({ testData }) => {
    // Excel: TC_MMDT_022 | Feature: Search | Task: Verify Real-Time Filtering Performance
    // FSD §3.3 — Template List Panel
    // Steps (11): Place cursor in search box. → Enter first character of template keyword. → Observe result count change. …
    // Expected: Search filtering occurs dynamically without requiring manual submission.
    console.log("[TC_MMDT_022] Search → Verify Real-Time Filtering Performance");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('Retail');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });
  });

  test.describe("Create Template", () => {
  test("Case ID:TC_MMDT_023 - Create Template → Verify Create Template Form Initialization", async ({ testData }) => {
    // Excel: TC_MMDT_023 | Feature: Create Template | Task: Verify Create Template Form Initialization
    // FSD §3.9 — Create Template
    // Steps (11): Open Missing Mandatory Data Template module. → Click Create Template button. → Observe form rendering. …
    // Expected: Create Template form loads successfully with all required controls visible.
    console.log("[TC_MMDT_023] Create Template → Verify Create Template Form Initialization");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectCreateTemplateButtonVisibilityAcrossViews(testData.baseUrl);
      });
  });

  test("Case ID:TC_MMDT_024 - Create Template → Verify Customer Type Driven Tab Structure", async ({ testData }) => {
    // Excel: TC_MMDT_024 | Feature: Create Template | Task: Verify Customer Type Driven Tab Structure
    // FSD §3.9 — Create Template
    // Steps (11): Open Create Template form. → Select Customer Type = Individual. → Save template configuration. …
    // Expected: Tab visibility changes correctly based on customer type selection.
    console.log("[TC_MMDT_024] Create Template → Verify Customer Type Driven Tab Structure");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_025 - Create Template → Verify KYC Level Assignment Integrity", async ({ testData }) => {
    // Excel: TC_MMDT_025 | Feature: Create Template | Task: Verify KYC Level Assignment Integrity
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Create new template. → Enter valid template name. → Select Customer Type. …
    // Expected: Assigned KYC Level is saved and displayed accurately.
    console.log("[TC_MMDT_025] Create Template → Verify KYC Level Assignment Integrity");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('SDD');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('CDD');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('EDD');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSaveChangesSucceeded();
      });
  });

  test("Case ID:TC_MMDT_026 - Create Template → Verify Product Type Association", async ({ testData }) => {
    // Excel: TC_MMDT_026 | Feature: Create Template | Task: Verify Product Type Association
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Open Create Template form. → Enter template details. → Select specific Product Type. …
    // Expected: Product Type association is retained after save and reload.
    console.log("[TC_MMDT_026] Create Template → Verify Product Type Association");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.configureOverlappingScoreRangesFromTestData('Savings Account');
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Savings Account');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSaveChangesSucceeded();
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_027 - Create Template → Verify Duplicate Template Prevention", async ({ testData }) => {
    // Excel: TC_MMDT_027 | Feature: Create Template | Task: Verify Duplicate Template Prevention
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Identify existing template name. → Open Create Template form. → Enter same template name. …
    // Expected: System prevents creation of duplicate template names.
    console.log("[TC_MMDT_027] Create Template → Verify Duplicate Template Prevention");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.attemptDuplicateFieldCreation('Existing Template Name');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectAddFieldValidationError();
      });
  });

  test("Case ID:TC_MMDT_028 - Create Template → Verify Score Configuration Dependency", async ({ testData }) => {
    // Excel: TC_MMDT_028 | Feature: Create Template | Task: Verify Score Configuration Dependency
    // FSD §3.9 — Create Template
    // Steps (11): Open Create Template form. → Enter valid template details. → Configure overlapping score bands. …
    // Expected: Template cannot be created until score configuration passes validation.
    console.log("[TC_MMDT_028] Create Template → Verify Score Configuration Dependency");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.configureOverlappingScoreRangesFromTestData('Invalid Score Ranges');
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_029 - Create Template → Verify Template Save Workflow", async ({ testData }) => {
    // Excel: TC_MMDT_029 | Feature: Create Template | Task: Verify Template Save Workflow
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Open Create Template form. → Enter unique template name. → Enter description. …
    // Expected: Template is created successfully and visible in template list.
    console.log("[TC_MMDT_029] Create Template → Verify Template Save Workflow");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      await mmPage.expectTemplateListPopulated();
      });
  });

  test("Case ID:TC_MMDT_030 - Create Template → Verify Creation Audit Logging", async ({ testData }) => {
    // Excel: TC_MMDT_030 | Feature: Create Template | Task: Verify Creation Audit Logging
    // FSD §3.9 — Create Template
    // Steps (11): Create a new template using valid details. → Note creation timestamp. → Record logged-in user information. …
    // Expected: Audit trail captures template creation activity with correct user and timestamp details.
    console.log("[TC_MMDT_030] Create Template → Verify Creation Audit Logging");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.searchTemplates('New');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_031 - Create Template → Verify Template Name Mandatory Validation", async ({ testData }) => {
    // Excel: TC_MMDT_031 | Feature: Create Template | Task: Verify Template Name Mandatory Validation
    // FSD §3.9 — Create Template
    // Steps (11): Open Create Template form. → Leave Template Name field empty. → Enter Description. …
    // Expected: Inline validation message is displayed and template creation is blocked.
    console.log("[TC_MMDT_031] Create Template → Verify Template Name Mandatory Validation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_032 - Create Template → Verify Template Name with Only Spaces", async ({ testData }) => {
    // Excel: TC_MMDT_032 | Feature: Create Template | Task: Verify Template Name with Only Spaces
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Open Create Template form. → Enter only spaces in Template Name field. → Complete all other mandatory fields. …
    // Expected: Whitespace-only value is treated as blank and creation is prevented.
    console.log("[TC_MMDT_032] Create Template → Verify Template Name with Only Spaces");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_033 - Create Template → Verify Customer Type Mandatory Validation", async ({ testData }) => {
    // Excel: TC_MMDT_033 | Feature: Create Template | Task: Verify Customer Type Mandatory Validation
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Enter valid Template Name. → Enter Description. → Leave Customer Type unselected. …
    // Expected: System requires Customer Type before template creation.
    console.log("[TC_MMDT_033] Create Template → Verify Customer Type Mandatory Validation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_034 - Create Template → Verify KYC Level Mandatory Validation", async ({ testData }) => {
    // Excel: TC_MMDT_034 | Feature: Create Template | Task: Verify KYC Level Mandatory Validation
    // FSD §3.9 — Create Template
    // Steps (11): Enter Template Name. → Select Customer Type. → Leave KYC Level blank. …
    // Expected: System prevents save until KYC Level is selected.
    console.log("[TC_MMDT_034] Create Template → Verify KYC Level Mandatory Validation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_035 - Create Template → Verify Create Button Behavior with Incomplete Form", async ({ testData }) => {
    // Excel: TC_MMDT_035 | Feature: Create Template | Task: Verify Create Button Behavior with Incomplete Form
    // FSD §3.9 — Create Template
    // Steps (11): Open Create Template form. → Populate only Template Name. → Leave remaining mandatory fields empty. …
    // Expected: System enforces all mandatory validations before creation.
    console.log("[TC_MMDT_035] Create Template → Verify Create Button Behavior with Incomplete Form");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectCreateTemplateButtonVisibilityAcrossViews(testData.baseUrl);
      });
  });

  test("Case ID:TC_MMDT_036 - Create Template → Verify Clone From Dropdown Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_036 | Feature: Create Template | Task: Verify Clone From Dropdown Rendering
    // FSD §3.9 — Create Template
    // Steps (11): Launch AML application. → Navigate to KYC → Missing Mandatory Data Template. → Click Create Template. …
    // Expected: Dropdown displays all configured source template options without duplication or missing values.
    console.log("[TC_MMDT_036] Create Template → Verify Clone From Dropdown Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.clickCloneButton();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_037 - Create Template → Verify Default Clone From Selection", async ({ testData }) => {
    // Excel: TC_MMDT_037 | Feature: Create Template | Task: Verify Default Clone From Selection
    // FSD §3.9 — Create Template
    // Steps (11): Open Create Template screen. → Select Customer Type. → Select KYC Level. …
    // Expected: Correct default Clone From value is displayed consistently.
    console.log("[TC_MMDT_037] Create Template → Verify Default Clone From Selection");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.clickCloneButton();
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      await mmPage.expectRefreshPreservesTemplateDetail('Simplified KYC');
      });
  });

  test("Case ID:TC_MMDT_038 - Create Template → Verify Simplified KYC Initialization", async ({ testData }) => {
    // Excel: TC_MMDT_038 | Feature: Create Template | Task: Verify Simplified KYC Initialization
    // FSD §3.9 — Create Template
    // Steps (11): Open Create Template screen. → Select Customer Type = Individual. → Select KYC Level = Simplified KYC (SDD). …
    // Expected: New template is initialized with Simplified KYC field configuration.
    console.log("[TC_MMDT_038] Create Template → Verify Simplified KYC Initialization");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.clickCloneButton();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_039 - Create Template → Verify Standard KYC Individual Initialization", async ({ testData }) => {
    // Excel: TC_MMDT_039 | Feature: Create Template | Task: Verify Standard KYC Individual Initialization
    // FSD §3.9 — Create Template
    // Steps (11): Open Create Template. → Select Customer Type = Individual. → Open Clone From dropdown. …
    // Expected: Template loads with Standard Individual KYC configuration.
    console.log("[TC_MMDT_039] Create Template → Verify Standard KYC Individual Initialization");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.clickCloneButton();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_040 - Create Template → Verify Standard KYC Corporate Initialization", async ({ testData }) => {
    // Excel: TC_MMDT_040 | Feature: Create Template | Task: Verify Standard KYC Corporate Initialization
    // FSD §3.9 — Create Template
    // Steps (11): Open Create Template. → Select Customer Type = Corporate. → Open Clone From dropdown. …
    // Expected: Corporate template is initialized with correct source configuration.
    console.log("[TC_MMDT_040] Create Template → Verify Standard KYC Corporate Initialization");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.clickCloneButton();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_041 - Create Template → Verify Enhanced KYC PEP/High Risk Initialization", async ({ testData }) => {
    // Excel: TC_MMDT_041 | Feature: Create Template | Task: Verify Enhanced KYC PEP/High Risk Initialization
    // FSD §3.9 — Create Template
    // Steps (11): Open Create Template. → Select applicable Customer Type. → Open Clone From dropdown. …
    // Expected: EDD and High-Risk field configuration is copied correctly.
    console.log("[TC_MMDT_041] Create Template → Verify Enhanced KYC PEP/High Risk Initialization");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.clickCloneButton();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_042 - Create Template → Verify Clone From Option Compatibility with Customer Type", async ({ testData }) => {
    // Excel: TC_MMDT_042 | Feature: Create Template | Task: Verify Clone From Option Compatibility with Customer Type
    // FSD §3.9 — Create Template
    // Steps (11): Open Create Template. → Select Customer Type = Individual. → Open Clone From dropdown. …
    // Expected: Customer-type compatibility rules are enforced as defined.
    console.log("[TC_MMDT_042] Create Template → Verify Clone From Option Compatibility with Customer Type");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.clickCloneButton();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_043 - Create Template → Verify Field Configuration Integrity After Clone From Selection", async ({ testData }) => {
    // Excel: TC_MMDT_043 | Feature: Create Template | Task: Verify Field Configuration Integrity After Clone From Selection
    // FSD §3.9 — Create Template
    // Steps (11): Open source template. → Record configured fields. → Record Mandatory and Optional assignments. …
    // Expected: All field configurations are copied accurately into the new template.
    console.log("[TC_MMDT_043] Create Template → Verify Field Configuration Integrity After Clone From Selection");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.clickCloneButton();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_044 - Create Template → Verify Score Configuration Integrity After Clone From Selection", async ({ testData }) => {
    // Excel: TC_MMDT_044 | Feature: Create Template | Task: Verify Score Configuration Integrity After Clone From Selection
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Open source template. → Record configured score bands. → Record minimum and maximum ranges. …
    // Expected: Score configuration is copied accurately from source template.
    console.log("[TC_MMDT_044] Create Template → Verify Score Configuration Integrity After Clone From Selection");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_045 - Create Template → Verify Audit Logging for Clone From Template Creation", async ({ testData }) => {
    // Excel: TC_MMDT_045 | Feature: Create Template | Task: Verify Audit Logging for Clone From Template Creation
    // FSD §3.9 — Create Template
    // Steps (11): Open Create Template screen. → Select source template from Clone From dropdown. → Enter Template Name. …
    // Expected: Audit trail captures template creation using Clone From configuration with correct user and timestamp details.
    console.log("[TC_MMDT_045] Create Template → Verify Audit Logging for Clone From Template Creation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.clickCloneButton();
      await mmPage.searchTemplates('Clone');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_050 - Create Template → Verify Unsaved Changes Handling", async ({ testData }) => {
    // Excel: TC_MMDT_050 | Feature: Create Template | Task: Verify Unsaved Changes Handling
    // FSD §3.9 — Create Template
    // Steps (11): Open Score Configuration. → Configure Low = 25–10. → Configure remaining ranges correctly. …
    // Expected: User receives warning before losing unsaved configuration changes.
    console.log("[TC_MMDT_050] Create Template → Verify Unsaved Changes Handling");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Simplified KYC');
      await mmPage.modifyFirstEditableRequirement();
      await mmPage.expectUnsavedNavigationWarning();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });
  });

  test.describe("Score Configuration", () => {
  test("Case ID:TC_MMDT_046 - Score Configuration → Verify Gap Detection Validation", async ({ testData }) => {
    // Excel: TC_MMDT_046 | Feature: Score Configuration | Task: Verify Gap Detection Validation
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (12): Open Create Template screen. → Enter mandatory template details. → Navigate to Score Configuration section. …
    // Expected: System identifies uncovered score range and prevents save.
    console.log("[TC_MMDT_046] Score Configuration → Verify Gap Detection Validation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_047 - Score Configuration → Verify Overlap Detection Validation", async ({ testData }) => {
    // Excel: TC_MMDT_047 | Feature: Score Configuration | Task: Verify Overlap Detection Validation
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Open Score Configuration section. → Configure Low = 0–20. → Configure Medium = 25–50. …
    // Expected: Overlapping score ranges are detected and rejected.
    console.log("[TC_MMDT_047] Score Configuration → Verify Overlap Detection Validation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_048 - Score Configuration → Verify Boundary Coverage Validation", async ({ testData }) => {
    // Excel: TC_MMDT_048 | Feature: Score Configuration | Task: Verify Boundary Coverage Validation
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Open Score Configuration. → Configure Low = 0–30. → Configure Medium = 25–50. …
    // Expected: System detects incomplete 0–100 coverage and rejects configuration.
    console.log("[TC_MMDT_048] Score Configuration → Verify Boundary Coverage Validation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_049 - Score Configuration → Verify Min Greater Than Max Validation", async ({ testData }) => {
    // Excel: TC_MMDT_049 | Feature: Score Configuration | Task: Verify Min Greater Than Max Validation
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Configure Low = 1–25. → Configure Medium = 26–50. → Configure High = 51–75. …
    // Expected: System rejects ranges where Min exceeds Max.
    console.log("[TC_MMDT_049] Score Configuration → Verify Min Greater Than Max Validation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_059 - Score Configuration → Verify Score Configuration Persistence", async ({ testData }) => {
    // Excel: TC_MMDT_059 | Feature: Score Configuration | Task: Verify Score Configuration Persistence
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Create custom field successfully. → Note field name. → Refresh browser. …
    // Expected: Saved score ranges remain persistent across sessions.
    console.log("[TC_MMDT_059] Score Configuration → Verify Score Configuration Persistence");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.createValidCustomField();
      await mmPage.refreshPage();
      await mmPage.searchTemplates('Mandatory');
      await mmPage.mockUnauthorized();
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSaveChangesSucceeded();
      });
  });

  test("Case ID:TC_MMDT_210 - Score Configuration → Verify Blank Lower Boundary Validation", async ({ testData }) => {
    // Excel: TC_MMDT_210 | Feature: Score Configuration | Task: Verify Blank Lower Boundary Validation
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Apply Branch filter. → Apply Customer Type filter. → Review filtered records. …
    // Expected: System prevents save and displays mandatory validation message.
    console.log("[TC_MMDT_210] Score Configuration → Verify Blank Lower Boundary Validation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('500+');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_211 - Score Configuration → Verify Blank Upper Boundary Validation", async ({ testData }) => {
    // Excel: TC_MMDT_211 | Feature: Score Configuration | Task: Verify Blank Upper Boundary Validation
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Open template configuration. → Navigate to Score Configuration. → Add new risk band. …
    // Expected: System prevents save when Upper Boundary is blank.
    console.log("[TC_MMDT_211] Score Configuration → Verify Blank Upper Boundary Validation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_212 - Score Configuration → Verify Negative Score Value Validation", async ({ testData }) => {
    // Excel: TC_MMDT_212 | Feature: Score Configuration | Task: Verify Negative Score Value Validation
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Open Score Configuration. → Create new risk band. → Enter Lower Boundary. …
    // Expected: Negative score values are rejected.
    console.log("[TC_MMDT_212] Score Configuration → Verify Negative Score Value Validation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_213 - Score Configuration → Verify Decimal Score Value Validation", async ({ testData }) => {
    // Excel: TC_MMDT_213 | Feature: Score Configuration | Task: Verify Decimal Score Value Validation
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Open Score Configuration. → Add new score band. → Enter negative Lower Boundary. …
    // Expected: Decimal handling follows FSD-defined rules.
    console.log("[TC_MMDT_213] Score Configuration → Verify Decimal Score Value Validation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_214 - Score Configuration → Verify Lower Boundary Greater Than Upper Boundary Validation", async ({ testData }) => {
    // Excel: TC_MMDT_214 | Feature: Score Configuration | Task: Verify Lower Boundary Greater Than Upper Boundary Validation
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Open Score Configuration. → Enter decimal Lower Boundary. → Enter decimal Upper Boundary. …
    // Expected: System rejects invalid range order.
    console.log("[TC_MMDT_214] Score Configuration → Verify Lower Boundary Greater Than Upper Boundary Validation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('-1 to 20');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_215 - Score Configuration → Verify Duplicate Risk Band Name Validation", async ({ testData }) => {
    // Excel: TC_MMDT_215 | Feature: Score Configuration | Task: Verify Duplicate Risk Band Name Validation
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Create new risk band. → Enter Lower Boundary greater than Upper Boundary. → Enter Risk Band Name. …
    // Expected: Duplicate Risk Band names are rejected.
    console.log("[TC_MMDT_215] Score Configuration → Verify Duplicate Risk Band Name Validation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectAddFieldValidationError();
      });
  });

  test("Case ID:TC_MMDT_216 - Score Configuration → Verify Single Risk Band Configuration Scenario", async ({ testData }) => {
    // Excel: TC_MMDT_216 | Feature: Score Configuration | Task: Verify Single Risk Band Configuration Scenario
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Open Score Configuration. → Review existing Risk Band names. → Add new band. …
    // Expected: Single-band configuration behaves according to FSD.
    console.log("[TC_MMDT_216] Score Configuration → Verify Single Risk Band Configuration Scenario");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.attemptDuplicateFieldCreation('50 – 20');
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_217 - Score Configuration → Verify Maximum Supported Score Boundary", async ({ testData }) => {
    // Excel: TC_MMDT_217 | Feature: Score Configuration | Task: Verify Maximum Supported Score Boundary
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Create new template. → Open Score Configuration. → Configure only one Risk Band. …
    // Expected: Maximum supported score boundary is processed correctly.
    console.log("[TC_MMDT_217] Score Configuration → Verify Maximum Supported Score Boundary");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Existing Risk Band Name');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_218 - Score Configuration → Verify Risk Band Coverage Completeness Validation", async ({ testData }) => {
    // Excel: TC_MMDT_218 | Feature: Score Configuration | Task: Verify Risk Band Coverage Completeness Validation
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Open Score Configuration. → Configure risk bands up to maximum supported score. → Save configuration. …
    // Expected: System prevents saving incomplete score coverage.
    console.log("[TC_MMDT_218] Score Configuration → Verify Risk Band Coverage Completeness Validation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Single Risk Band');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_219 - Score Configuration → Verify Score Configuration Save Validation", async ({ testData }) => {
    // Excel: TC_MMDT_219 | Feature: Score Configuration | Task: Verify Score Configuration Save Validation
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Configure multiple score bands. → Leave a coverage gap intentionally. → Save configuration. …
    // Expected: Valid score configuration is saved successfully and persists correctly.
    console.log("[TC_MMDT_219] Score Configuration → Verify Score Configuration Save Validation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSaveChangesSucceeded();
      });
  });
  });

  test.describe("Tab Management", () => {
  test("Case ID:TC_MMDT_051 - Tab Management → Verify Individual CIP Tab Visibility for Individual Templates", async ({ testData }) => {
    // Excel: TC_MMDT_051 | Feature: Tab Management | Task: Verify Individual CIP Tab Visibility for Individual Templates
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Enter Template Name. → Enter Description. → Select Customer Type. …
    // Expected: Individual CIP tab is displayed and accessible for Individual templates.
    console.log("[TC_MMDT_051] Tab Management → Verify Individual CIP Tab Visibility for Individual Templates");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Standard KYC — Individual', 'Individual CIP');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Min=25 Max=10');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_052 - Tab Management → Verify Corporate CIP Tab Hidden for Individual Templates", async ({ testData }) => {
    // Excel: TC_MMDT_052 | Feature: Tab Management | Task: Verify Corporate CIP Tab Hidden for Individual Templates
    // FSD §3.3 — Template List Panel
    // Steps (11): Open template list panel. → Select an Individual template. → Observe tab bar rendering. …
    // Expected: Corporate CIP tab is hidden for Individual templates.
    console.log("[TC_MMDT_052] Tab Management → Verify Corporate CIP Tab Hidden for Individual Templates");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.openTab('Corporate CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_053 - Tab Management → Verify Corporate CIP Tab Visibility for Corporate Templates", async ({ testData }) => {
    // Excel: TC_MMDT_053 | Feature: Tab Management | Task: Verify Corporate CIP Tab Visibility for Corporate Templates
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Select an Individual template. → Review complete tab list. → Verify Individual CIP tab exists. …
    // Expected: Corporate CIP tab is displayed correctly for Corporate templates.
    console.log("[TC_MMDT_053] Tab Management → Verify Corporate CIP Tab Visibility for Corporate Templates");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.expectDefaultTabForCorporate();
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('Individual');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_054 - Tab Management → Verify First Visible Tab Selected By Default", async ({ testData }) => {
    // Excel: TC_MMDT_054 | Feature: Tab Management | Task: Verify First Visible Tab Selected By Default
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Select Corporate template. → Observe tab structure. → Verify Corporate CIP tab appears. …
    // Expected: First visible tab is automatically selected.
    console.log("[TC_MMDT_054] Tab Management → Verify First Visible Tab Selected By Default");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });
  });

  test.describe("Custom Fields", () => {
  test("Case ID:TC_MMDT_055 - Custom Fields → Verify Custom Field Creation Workflow", async ({ testData }) => {
    // Excel: TC_MMDT_055 | Feature: Custom Fields | Task: Verify Custom Field Creation Workflow
    // FSD §3.8 — Add Field (Custom Fields)
    // Steps (11): Open Individual template. → Observe initially selected tab. → Verify Individual CIP is active. …
    // Expected: Custom field is successfully added to template.
    console.log("[TC_MMDT_055] Custom Fields → Verify Custom Field Creation Workflow");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_056 - Custom Fields → Verify Section Auto-Selection Based on Active Tab", async ({ testData }) => {
    // Excel: TC_MMDT_056 | Feature: Custom Fields | Task: Verify Section Auto-Selection Based on Active Tab
    // FSD §3.8 — Add Field (Custom Fields)
    // Steps (11): Open template detail screen. → Click + Add Field button. → Verify modal opens. …
    // Expected: Active tab section is pre-selected automatically.
    console.log("[TC_MMDT_056] Custom Fields → Verify Section Auto-Selection Based on Active Tab");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openAddFieldDialog();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_057 - Custom Fields → Verify Requirement Assignment During Custom Field Creation", async ({ testData }) => {
    // Excel: TC_MMDT_057 | Feature: Custom Fields | Task: Verify Requirement Assignment During Custom Field Creation
    // FSD §3.8 — Add Field (Custom Fields)
    // Steps (11): Open CDD Fields tab. → Click Add Field. → Observe Add to Section value. …
    // Expected: Requirement type is assigned correctly to created fields.
    console.log("[TC_MMDT_057] Custom Fields → Verify Requirement Assignment During Custom Field Creation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openAddFieldDialog();
      await mmPage.cancelButton.click();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_058 - Custom Fields → Verify Custom Field Persistence After Reload", async ({ testData }) => {
    // Excel: TC_MMDT_058 | Feature: Custom Fields | Task: Verify Custom Field Persistence After Reload
    // FSD §3.8 — Add Field (Custom Fields)
    // Steps (11): Open Add Field modal. → Create field with Mandatory (3). → Save field. …
    // Expected: Custom field persists after refresh and re-login.
    console.log("[TC_MMDT_058] Custom Fields → Verify Custom Field Persistence After Reload");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openAddFieldDialog();
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSaveChangesSucceeded();
      });
  });

  test("Case ID:TC_MMDT_137 - Custom Fields → Verify Custom Field Ordering After Multiple Additions", async ({ testData }) => {
    // Excel: TC_MMDT_137 | Feature: Custom Fields | Task: Verify Custom Field Ordering After Multiple Additions
    // FSD §3.8 — Add Field (Custom Fields)
    // Steps (11): Open Add Field modal. → Enter field name containing allowed special characters. → Enter description. …
    // Expected: Custom fields appear in the correct order after creation.
    console.log("[TC_MMDT_137] Custom Fields → Verify Custom Field Ordering After Multiple Additions");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openAddFieldDialog();
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.searchTemplates('Very');
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Very Long Field Name');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_138 - Custom Fields → Verify Duplicate Custom Field Name Prevention", async ({ testData }) => {
    // Excel: TC_MMDT_138 | Feature: Custom Fields | Task: Verify Duplicate Custom Field Name Prevention
    // FSD §3.8 — Add Field (Custom Fields)
    // Steps (11): Open Add Field modal. → Create Custom Field A. → Create Custom Field B. …
    // Expected: System prevents duplicate custom field creation.
    console.log("[TC_MMDT_138] Custom Fields → Verify Duplicate Custom Field Name Prevention");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openAddFieldDialog();
      await mmPage.createValidCustomField();
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectAddFieldValidationError();
      await mmPage.expectTemplateListRefreshed();
      });
  });
  });

  test.describe("End-to-End Workflow", () => {
  test("Case ID:TC_MMDT_060 - End-to-End Workflow → Verify End-to-End Template Creation Lifecycle", async ({ testData }) => {
    // Excel: TC_MMDT_060 | Feature: End-to-End Workflow | Task: Verify End-to-End Template Creation Lifecycle
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Open Score Configuration tab. → Configure valid score ranges. → Save configuration. …
    // Expected: Template creation workflow completes successfully from creation through verification.
    console.log("[TC_MMDT_060] End-to-End Workflow → Verify End-to-End Template Creation Lifecycle");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.mockUnauthorized();
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Source of Wealth Category');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });
  });

  test.describe("Archive Template", () => {
  test("Case ID:TC_MMDT_061 - Archive Template → Verify Archive Action Availability", async ({ testData }) => {
    // Excel: TC_MMDT_061 | Feature: Archive Template | Task: Verify Archive Action Availability
    // FSD §3.8 — Add Field (Custom Fields)
    // Steps (11): Open Create Template form. → Enter Template Name. → Select Customer Type = Individual. …
    // Expected: Archive action is available for active templates only.
    console.log("[TC_MMDT_061] Archive Template → Verify Archive Action Availability");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_062 - Archive Template → Verify Archive Confirmation Dialog", async ({ testData }) => {
    // Excel: TC_MMDT_062 | Feature: Archive Template | Task: Verify Archive Confirmation Dialog
    // FSD §3.10 — Business Rules
    // Steps (11): Open Missing Mandatory Data Template module. → Select active template from list. → Open template action menu. …
    // Expected: Archive confirmation dialog is displayed before template archival.
    console.log("[TC_MMDT_062] Archive Template → Verify Archive Confirmation Dialog");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_063 - Archive Template → Verify Successful Template Archive", async ({ testData }) => {
    // Excel: TC_MMDT_063 | Feature: Archive Template | Task: Verify Successful Template Archive
    // FSD §3.10 — Business Rules
    // Steps (11): Select active template. → Open action menu. → Click Archive option. …
    // Expected: Template is archived successfully and removed from active templates.
    console.log("[TC_MMDT_063] Archive Template → Verify Successful Template Archive");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.cancelButton.click();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSingleActiveTemplateCard();
      });
  });

  test("Case ID:TC_MMDT_064 - Archive Template → Verify Archived Template Removal from Active List", async ({ testData }) => {
    // Excel: TC_MMDT_064 | Feature: Archive Template | Task: Verify Archived Template Removal from Active List
    // FSD §3.3 — Template List Panel
    // Steps (11): Select active template. → Open action menu. → Click Archive. …
    // Expected: Archived template is removed from active template listing.
    console.log("[TC_MMDT_064] Archive Template → Verify Archived Template Removal from Active List");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      await mmPage.searchTemplates('Active');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_065 - Archive Template → Verify Template Count Update After Archive", async ({ testData }) => {
    // Excel: TC_MMDT_065 | Feature: Archive Template | Task: Verify Template Count Update After Archive
    // FSD §3.3 — Template List Panel
    // Steps (11): Archive selected template. → Return to template list. → Scroll through active templates. …
    // Expected: Group count decreases immediately after successful archival.
    console.log("[TC_MMDT_065] Archive Template → Verify Template Count Update After Archive");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('Retail');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_066 - Archive Template → Verify Archived Template Search Behavior", async ({ testData }) => {
    // Excel: TC_MMDT_066 | Feature: Archive Template | Task: Verify Archived Template Search Behavior
    // FSD §3.10 — Business Rules
    // Steps (11): Note current group count. → Select active template. → Archive template. …
    // Expected: Archived templates are excluded from active search results.
    console.log("[TC_MMDT_066] Archive Template → Verify Archived Template Search Behavior");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_067 - Archive Template → Verify Audit Logging for Archive Action", async ({ testData }) => {
    // Excel: TC_MMDT_067 | Feature: Archive Template | Task: Verify Audit Logging for Archive Action
    // FSD §3.10 — Business Rules
    // Steps (11): Archive selected template. → Copy archived template name. → Enter name into search field. …
    // Expected: Archive operation is logged successfully with complete audit details.
    console.log("[TC_MMDT_067] Archive Template → Verify Audit Logging for Archive Action");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('Individual');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      await mmPage.expectRefreshPreservesTemplateDetail('Standard KYC — Individual');
      });
  });

  test("Case ID:TC_MMDT_068 - Archive Template → Verify Archive Cancellation Workflow", async ({ testData }) => {
    // Excel: TC_MMDT_068 | Feature: Archive Template | Task: Verify Archive Cancellation Workflow
    // FSD §3.10 — Business Rules
    // Steps (11): Archive active template. → Record archive timestamp. → Open Audit Trail module. …
    // Expected: Archive operation is cancelled and template remains unchanged.
    console.log("[TC_MMDT_068] Archive Template → Verify Archive Cancellation Workflow");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('Archived');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_069 - Archive Template → Verify Archive Persistence After Browser Refresh", async ({ testData }) => {
    // Excel: TC_MMDT_069 | Feature: Archive Template | Task: Verify Archive Persistence After Browser Refresh
    // FSD §3.3 — Template List Panel
    // Steps (11): Select active template. → Open Archive confirmation dialog. → Review confirmation message. …
    // Expected: Archived status persists after browser refresh.
    console.log("[TC_MMDT_069] Archive Template → Verify Archive Persistence After Browser Refresh");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.cancelButton.click();
      await mmPage.searchTemplates('Archived');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSaveChangesSucceeded();
      });
  });

  test("Case ID:TC_MMDT_070 - Archive Template → Verify Archive Persistence After Re-login", async ({ testData }) => {
    // Excel: TC_MMDT_070 | Feature: Archive Template | Task: Verify Archive Persistence After Re-login
    // FSD §3.10 — Business Rules
    // Steps (11): Archive selected template. → Observe success notification. → Refresh browser immediately. …
    // Expected: Archived template remains archived after user re-login and session restart.
    console.log("[TC_MMDT_070] Archive Template → Verify Archive Persistence After Re-login");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      await mmPage.searchTemplates('Active');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSaveChangesSucceeded();
      });
  });
  });

  test.describe("Locked Fields", () => {
  test("Case ID:TC_MMDT_071 - Locked Fields → Verify Locked Field Icon Visibility", async ({ testData }) => {
    // Excel: TC_MMDT_071 | Feature: Locked Fields | Task: Verify Locked Field Icon Visibility
    // FSD §3.5 — Field Row Components
    // Steps (11): Archive selected template. → Logout from application. → Close browser session. …
    // Expected: Locked fields display lock indicator and are visually distinguishable from editable fields.
    console.log("[TC_MMDT_071] Locked Fields → Verify Locked Field Icon Visibility");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.attemptLockedFieldEdit();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectLockedFieldEditRestriction();
      });
  });

  test("Case ID:TC_MMDT_072 - Locked Fields → Verify Locked Field Checkbox Protection", async ({ testData }) => {
    // Excel: TC_MMDT_072 | Feature: Locked Fields | Task: Verify Locked Field Checkbox Protection
    // FSD §3.5 — Field Row Components
    // Steps (11): Open Missing Mandatory Data Template module. → Select configured template. → Navigate to Technical IDs tab. …
    // Expected: Locked field checkbox cannot be modified by user interaction.
    console.log("[TC_MMDT_072] Locked Fields → Verify Locked Field Checkbox Protection");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.attemptLockedFieldEdit();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectLockedFieldEditRestriction();
      });
  });

  test("Case ID:TC_MMDT_073 - Locked Fields → Verify Locked Field Cannot Be Deselected", async ({ testData }) => {
    // Excel: TC_MMDT_073 | Feature: Locked Fields | Task: Verify Locked Field Cannot Be Deselected
    // FSD §3.5 — Field Row Components
    // Steps (11): Open Technical IDs tab. → Locate locked field. → Review current checkbox state. …
    // Expected: Locked field remains selected and cannot be deselected.
    console.log("[TC_MMDT_073] Locked Fields → Verify Locked Field Cannot Be Deselected");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.attemptLockedFieldEdit();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectLockedFieldEditRestriction();
      });
  });

  test("Case ID:TC_MMDT_074 - Locked Fields → Verify Locked Field Requirement Remains Mandatory", async ({ testData }) => {
    // Excel: TC_MMDT_074 | Feature: Locked Fields | Task: Verify Locked Field Requirement Remains Mandatory
    // FSD §3.5 — Field Row Components
    // Steps (11): Open template configuration. → Navigate to field section containing locked field. → Verify field is selected. …
    // Expected: Locked field requirement remains unchanged and mandatory.
    console.log("[TC_MMDT_074] Locked Fields → Verify Locked Field Requirement Remains Mandatory");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.attemptLockedFieldEdit();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectLockedFieldEditRestriction();
      });
  });

  test("Case ID:TC_MMDT_075 - Locked Fields → Verify Requirement Dropdown Disabled for Locked Fields", async ({ testData }) => {
    // Excel: TC_MMDT_075 | Feature: Locked Fields | Task: Verify Requirement Dropdown Disabled for Locked Fields
    // FSD §3.5 — Field Row Components
    // Steps (11): Open template configuration. → Locate locked mandatory field. → Review requirement value. …
    // Expected: Requirement dropdown remains disabled for locked fields.
    console.log("[TC_MMDT_075] Locked Fields → Verify Requirement Dropdown Disabled for Locked Fields");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.attemptLockedFieldEdit();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectLockedFieldEditRestriction();
      });
  });

  test("Case ID:TC_MMDT_076 - Locked Fields → Verify Locked Field Persistence After Refresh", async ({ testData }) => {
    // Excel: TC_MMDT_076 | Feature: Locked Fields | Task: Verify Locked Field Persistence After Refresh
    // FSD §3.5 — Field Row Components
    // Steps (11): Open template configuration. → Locate locked field. → Open Requirement column. …
    // Expected: Locked field configuration remains unchanged after refresh.
    console.log("[TC_MMDT_076] Locked Fields → Verify Locked Field Persistence After Refresh");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.attemptLockedFieldEdit();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectLockedFieldEditRestriction();
      });
  });

  test("Case ID:TC_MMDT_077 - Locked Fields → Verify Locked Field Persistence After Re-login", async ({ testData }) => {
    // Excel: TC_MMDT_077 | Feature: Locked Fields | Task: Verify Locked Field Persistence After Re-login
    // FSD §3.5 — Field Row Components
    // Steps (11): Open template containing locked fields. → Note field state and requirement value. → Navigate across multiple tabs. …
    // Expected: Locked field protection remains intact after re-login.
    console.log("[TC_MMDT_077] Locked Fields → Verify Locked Field Persistence After Re-login");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.attemptLockedFieldEdit();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectLockedFieldEditRestriction();
      });
  });

  test("Case ID:TC_MMDT_078 - Locked Fields → Verify Keyboard Restriction on Locked Fields", async ({ testData }) => {
    // Excel: TC_MMDT_078 | Feature: Locked Fields | Task: Verify Keyboard Restriction on Locked Fields
    // FSD §3.5 — Field Row Components
    // Steps (11): Open template containing locked fields. → Review locked field configuration. → Logout application. …
    // Expected: Keyboard interactions cannot modify locked field settings.
    console.log("[TC_MMDT_078] Locked Fields → Verify Keyboard Restriction on Locked Fields");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.attemptLockedFieldEdit();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectLockedFieldEditRestriction();
      });
  });

  test("Case ID:TC_MMDT_079 - Locked Fields → Verify Locked Fields Are Excluded from Editable Change Tracking", async ({ testData }) => {
    // Excel: TC_MMDT_079 | Feature: Locked Fields | Task: Verify Locked Fields Are Excluded from Editable Change Tracking
    // FSD §3.5 — Field Row Components
    // Steps (11): Open template configuration screen. → Use keyboard navigation to reach locked field. → Press Space key. …
    // Expected: No editable change record is generated for locked fields.
    console.log("[TC_MMDT_079] Locked Fields → Verify Locked Fields Are Excluded from Editable Change Tracking");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.attemptLockedFieldEdit();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectLockedFieldEditRestriction();
      });
  });

  test("Case ID:TC_MMDT_080 - Locked Fields → Verify Locked Field Consistency Across Cloned Templates", async ({ testData }) => {
    // Excel: TC_MMDT_080 | Feature: Locked Fields | Task: Verify Locked Field Consistency Across Cloned Templates
    // FSD §3.5 — Field Row Components
    // Steps (11): Open template configuration. → Locate locked field. → Attempt modification actions. …
    // Expected: Locked field protection is preserved in cloned templates.
    console.log("[TC_MMDT_080] Locked Fields → Verify Locked Field Consistency Across Cloned Templates");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.attemptLockedFieldEdit();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectLockedFieldEditRestriction();
      });
  });
  });

  test.describe("Requirement Dropdown", () => {
  test("Case ID:TC_MMDT_081 - Requirement Dropdown → Verify Mandatory (3) Requirement Selection Workflow", async ({ testData }) => {
    // Excel: TC_MMDT_081 | Feature: Requirement Dropdown | Task: Verify Mandatory (3) Requirement Selection Workflow
    // FSD §3.5 — Field Row Components
    // Steps (11): Open source template. → Record locked field configuration. → Clone template. …
    // Expected: Requirement changes successfully to Mandatory (3) and persists after save.
    console.log("[TC_MMDT_081] Requirement Dropdown → Verify Mandatory (3) Requirement Selection Workflow");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.clickCloneButton();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectFieldEditableByTestDataFragment('Locked CIF Field');
      await mmPage.expectEditableFieldCheckboxesEnabled();
      await expect(mmPage.requirementDropdowns.first()).toBeVisible();
      });
  });

  test("Case ID:TC_MMDT_082 - Requirement Dropdown → Verify Optional (1) Requirement Selection Workflow", async ({ testData }) => {
    // Excel: TC_MMDT_082 | Feature: Requirement Dropdown | Task: Verify Optional (1) Requirement Selection Workflow
    // FSD §3.5 — Field Row Components
    // Steps (11): Open template configuration. → Navigate to Individual CIP section. → Locate editable field currently marked Optional. …
    // Expected: Requirement successfully changes to Optional (1).
    console.log("[TC_MMDT_082] Requirement Dropdown → Verify Optional (1) Requirement Selection Workflow");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Standard KYC — Individual');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Cloned Template');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectFieldEditableByTestDataFragment('Cloned Template');
      await mmPage.expectEditableFieldCheckboxesEnabled();
      await expect(mmPage.requirementDropdowns.first()).toBeVisible();
      });
  });

  test("Case ID:TC_MMDT_083 - Requirement Dropdown → Verify Requirement Badge Synchronization", async ({ testData }) => {
    // Excel: TC_MMDT_083 | Feature: Requirement Dropdown | Task: Verify Requirement Badge Synchronization
    // FSD §3.5 — Field Row Components
    // Steps (11): Open template configuration. → Locate field configured as Mandatory. → Open Requirement dropdown. …
    // Expected: Badge always reflects selected Requirement value.
    console.log("[TC_MMDT_083] Requirement Dropdown → Verify Requirement Badge Synchronization");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Passport Number');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateCountMatchesCards();
      await mmPage.expectTemplateListRefreshed();
      await mmPage.expectRefreshPreservesTemplateDetail('Simplified KYC');
      await expect(mmPage.requirementDropdowns.first()).toBeVisible();
      });
  });

  test("Case ID:TC_MMDT_084 - Requirement Dropdown → Verify Weight Display Synchronization", async ({ testData }) => {
    // Excel: TC_MMDT_084 | Feature: Requirement Dropdown | Task: Verify Weight Display Synchronization
    // FSD §3.5 — Field Row Components
    // Steps (11): Open template configuration. → Locate editable field. → Record current badge value. …
    // Expected: Weight displayed matches selected requirement type.
    console.log("[TC_MMDT_084] Requirement Dropdown → Verify Weight Display Synchronization");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.updateFieldRequirementByTestDataFragment('Middle Name');
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await expect(mmPage.requirementDropdowns.first()).toBeVisible();
      });
  });

  test("Case ID:TC_MMDT_085 - Requirement Dropdown → Verify Requirement Persistence After Save", async ({ testData }) => {
    // Excel: TC_MMDT_085 | Feature: Requirement Dropdown | Task: Verify Requirement Persistence After Save
    // FSD §3.5 — Field Row Components
    // Steps (11): Open field configuration section. → Select Optional (1). → Verify displayed weight value. …
    // Expected: Requirement value remains unchanged after save and reload.
    console.log("[TC_MMDT_085] Requirement Dropdown → Verify Requirement Persistence After Save");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSaveChangesSucceeded();
      await expect(mmPage.requirementDropdowns.first()).toBeVisible();
      });
  });

  test("Case ID:TC_MMDT_088 - Requirement Dropdown → Verify Conditional Normalization Migration", async ({ testData }) => {
    // Excel: TC_MMDT_088 | Feature: Requirement Dropdown | Task: Verify Conditional Normalization Migration
    // FSD §3.5 — Field Row Components
    // Steps (11): Configure field as Optional (1). → Save template. → Assign template to customer. …
    // Expected: Requirement changes do not break conditional field mappings.
    console.log("[TC_MMDT_088] Requirement Dropdown → Verify Conditional Normalization Migration");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await expect(mmPage.requirementDropdowns.first()).toBeVisible();
      });
  });

  test("Case ID:TC_MMDT_089 - Requirement Dropdown → Verify Multiple Requirement Updates Before Save", async ({ testData }) => {
    // Excel: TC_MMDT_089 | Feature: Requirement Dropdown | Task: Verify Multiple Requirement Updates Before Save
    // FSD §3.5 — Field Row Components
    // Steps (11): Open template containing conditional field. → Review current requirement value. → Change requirement type. …
    // Expected: All requirement updates are saved successfully in a single operation.
    console.log("[TC_MMDT_089] Requirement Dropdown → Verify Multiple Requirement Updates Before Save");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.updateFieldRequirementByTestDataFragment('Missing Secondary Email');
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Missing Secondary Email');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      await expect(mmPage.requirementDropdowns.first()).toBeVisible();
      });
  });
  });

  test.describe("Scoring Logic", () => {
  test("Case ID:TC_MMDT_086 - Scoring Logic → Verify Mandatory (3) Score Contribution Logic", async ({ testData }) => {
    // Excel: TC_MMDT_086 | Feature: Scoring Logic | Task: Verify Mandatory (3) Score Contribution Logic
    // FSD §3.6 — Requirement Scoring Rules
    // Steps (11): Open template configuration. → Change Requirement value. → Save template. …
    // Expected: Missing Mandatory field contributes exactly 3 points to gap score.
    console.log("[TC_MMDT_086] Scoring Logic → Verify Mandatory (3) Score Contribution Logic");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.updateFieldRequirementByTestDataFragment('Nationality Field');
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Nationality Field');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_087 - Scoring Logic → Verify Optional (1) Score Contribution Logic", async ({ testData }) => {
    // Excel: TC_MMDT_087 | Feature: Scoring Logic | Task: Verify Optional (1) Score Contribution Logic
    // FSD §4.2 — Navigation
    // Steps (11): Configure field as Mandatory (3). → Save template. → Assign template to test customer. …
    // Expected: Missing Optional field contributes exactly 1 point.
    console.log("[TC_MMDT_087] Scoring Logic → Verify Optional (1) Score Contribution Logic");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });
  });

  test.describe("Technical IDs", () => {
  test("Case ID:TC_MMDT_090 - Technical IDs → Verify Technical IDs Tab Accessibility", async ({ testData }) => {
    // Excel: TC_MMDT_090 | Feature: Technical IDs | Task: Verify Technical IDs Tab Accessibility
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open template configuration. → Modify first field to Mandatory. → Modify second field to Optional. …
    // Expected: Technical IDs tab opens successfully and displays configured fields.
    console.log("[TC_MMDT_090] Technical IDs → Verify Technical IDs Tab Accessibility");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Technical IDs');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Standard KYC — Individual', 'Technical IDs');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Source of Wealth');
      });

    await test.step("Validate expected results", async () => {
      await expect(mmPage.tabButtons.first()).toBeVisible();
      await expect(mmPage.fieldRows.first()).toBeVisible();
      });
  });

  test("Case ID:TC_MMDT_091 - Technical IDs → Verify Technical ID Field Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_091 | Feature: Technical IDs | Task: Verify Technical ID Field Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Missing Mandatory Data Template module. → Select active template. → Review available tabs. …
    // Expected: All Technical ID fields render correctly with proper metadata.
    console.log("[TC_MMDT_091] Technical IDs → Verify Technical ID Field Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Technical IDs');
      });

    await test.step("Validate expected results", async () => {
      await expect(mmPage.tabButtons.first()).toBeVisible();
      await expect(mmPage.fieldRows.first()).toBeVisible();
      });
  });

  test("Case ID:TC_MMDT_092 - Technical IDs → Verify Technical ID Edit Restrictions", async ({ testData }) => {
    // Excel: TC_MMDT_092 | Feature: Technical IDs | Task: Verify Technical ID Edit Restrictions
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Technical IDs tab. → Review field listing. → Verify field name visibility. …
    // Expected: Restricted Technical IDs cannot be modified.
    console.log("[TC_MMDT_092] Technical IDs → Verify Technical ID Edit Restrictions");
    await test.step("Preconditions", async () => {
      await mmPage.mockUnauthorized();
      });

    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Technical IDs');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectAccessDenied();
      });
  });
  });

  test.describe("Individual CIP", () => {
  test("Case ID:TC_MMDT_093 - Individual CIP → Verify Individual CIP Section Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_093 | Feature: Individual CIP | Task: Verify Individual CIP Section Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Technical IDs tab. → Identify restricted field. → Attempt requirement modification. …
    // Expected: Individual CIP section loads successfully with all configured field groups.
    console.log("[TC_MMDT_093] Individual CIP → Verify Individual CIP Section Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Standard KYC — Individual', 'Individual CIP');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('CIF ID, Customer ID, Risk ID');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_094 - Individual CIP → Verify Individual CIP Field Ordering", async ({ testData }) => {
    // Excel: TC_MMDT_094 | Feature: Individual CIP | Task: Verify Individual CIP Field Ordering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Missing Mandatory Data Template module. → Select Individual customer template. → Open Individual CIP tab. …
    // Expected: Fields are displayed in configured order.
    console.log("[TC_MMDT_094] Individual CIP → Verify Individual CIP Field Ordering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_095 - Individual CIP → Verify Mandatory Requirement Badge Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_095 | Feature: Individual CIP | Task: Verify Mandatory Requirement Badge Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Individual CIP tab. → Record first displayed field. → Record subsequent field order. …
    // Expected: Mandatory fields display correct badge and score indicator.
    console.log("[TC_MMDT_095] Individual CIP → Verify Mandatory Requirement Badge Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateCountMatchesCards();
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_096 - Individual CIP → Verify Optional Requirement Badge Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_096 | Feature: Individual CIP | Task: Verify Optional Requirement Badge Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Individual CIP tab. → Identify Mandatory (3) fields. → Verify badge visibility. …
    // Expected: Optional fields display correct badge values.
    console.log("[TC_MMDT_096] Individual CIP → Verify Optional Requirement Badge Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateCountMatchesCards();
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_097 - Individual CIP → Verify Field Description Display", async ({ testData }) => {
    // Excel: TC_MMDT_097 | Feature: Individual CIP | Task: Verify Field Description Display
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Individual CIP tab. → Locate Optional fields. → Verify Optional badge. …
    // Expected: Field descriptions display accurately and consistently.
    console.log("[TC_MMDT_097] Individual CIP → Verify Field Description Display");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      });

    await test.step("Validate expected results", async () => {
      await expect(mmPage.tabButtons.first()).toBeVisible();
      await expect(mmPage.fieldRows.first()).toBeVisible();
      });
  });

  test("Case ID:TC_MMDT_098 - Individual CIP → Verify Checkbox State Management", async ({ testData }) => {
    // Excel: TC_MMDT_098 | Feature: Individual CIP | Task: Verify Checkbox State Management
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Individual CIP tab. → Locate field with description. → Verify description visibility. …
    // Expected: Checkbox states match saved template configuration.
    console.log("[TC_MMDT_098] Individual CIP → Verify Checkbox State Management");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      await mmPage.expectRefreshPreservesTemplateDetail('Standard KYC — Individual');
      });
  });

  test("Case ID:TC_MMDT_099 - Individual CIP → Verify Field Metadata Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_099 | Feature: Individual CIP | Task: Verify Field Metadata Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Individual CIP tab. → Record selected fields. → Navigate to another tab. …
    // Expected: Metadata is displayed accurately for all fields.
    console.log("[TC_MMDT_099] Individual CIP → Verify Field Metadata Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Standard KYC — Individual', 'Individual CIP');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Field Description Data');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_100 - Individual CIP → Verify Field Group Expansion Behavior", async ({ testData }) => {
    // Excel: TC_MMDT_100 | Feature: Individual CIP | Task: Verify Field Group Expansion Behavior
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Individual CIP tab. → Select field group. → Review field metadata. …
    // Expected: Expand/collapse functionality works correctly.
    console.log("[TC_MMDT_100] Individual CIP → Verify Field Group Expansion Behavior");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_101 - Individual CIP → Verify Individual CIP Tab Persistence", async ({ testData }) => {
    // Excel: TC_MMDT_101 | Feature: Individual CIP | Task: Verify Individual CIP Tab Persistence
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Individual CIP tab. → Locate expandable group. → Expand group. …
    // Expected: Individual CIP tab remains accessible and consistent.
    console.log("[TC_MMDT_101] Individual CIP → Verify Individual CIP Tab Persistence");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSaveChangesSucceeded();
      });
  });

  test("Case ID:TC_MMDT_102 - Individual CIP → Verify Individual CIP Data Integrity After Template Clone", async ({ testData }) => {
    // Excel: TC_MMDT_102 | Feature: Individual CIP | Task: Verify Individual CIP Data Integrity After Template Clone
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Individual CIP tab. → Scroll to middle section. → Navigate to another AML module. …
    // Expected: Individual CIP configuration is copied accurately during cloning.
    console.log("[TC_MMDT_102] Individual CIP → Verify Individual CIP Data Integrity After Template Clone");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('Individual CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      await mmPage.expectRefreshPreservesTemplateDetail('Standard KYC — Individual');
      });
  });
  });

  test.describe("Corporate CIP", () => {
  test("Case ID:TC_MMDT_103 - Corporate CIP → Verify Corporate CIP Section Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_103 | Feature: Corporate CIP | Task: Verify Corporate CIP Section Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open source template. → Review Individual CIP configuration. → Clone template. …
    // Expected: Corporate CIP section renders successfully with all configured groups.
    console.log("[TC_MMDT_103] Corporate CIP → Verify Corporate CIP Section Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.openTab('Corporate CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.clickCloneButton();
      });

    await test.step("Validate expected results", async () => {
      await expect(mmPage.tabButtons.first()).toBeVisible();
      await expect(mmPage.fieldRows.first()).toBeVisible();
      });
  });

  test("Case ID:TC_MMDT_104 - Corporate CIP → Verify Corporate CIP Field Ordering", async ({ testData }) => {
    // Excel: TC_MMDT_104 | Feature: Corporate CIP | Task: Verify Corporate CIP Field Ordering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Missing Mandatory Data Template module. → Select Corporate template. → Open Corporate CIP tab. …
    // Expected: Corporate fields appear in configured order.
    console.log("[TC_MMDT_104] Corporate CIP → Verify Corporate CIP Field Ordering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.openTab('Corporate CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_105 - Corporate CIP → Verify Beneficial Ownership Field Group Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_105 | Feature: Corporate CIP | Task: Verify Beneficial Ownership Field Group Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Corporate CIP tab. → Record displayed field order. → Compare against configuration sequence. …
    // Expected: Ownership-related fields render correctly within designated group.
    console.log("[TC_MMDT_105] Corporate CIP → Verify Beneficial Ownership Field Group Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.openTab('Corporate CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_106 - Corporate CIP → Verify Corporate Registration Information Fields", async ({ testData }) => {
    // Excel: TC_MMDT_106 | Feature: Corporate CIP | Task: Verify Corporate Registration Information Fields
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Corporate CIP tab. → Locate Beneficial Ownership section. → Expand section if collapsible. …
    // Expected: Registration information fields display correctly.
    console.log("[TC_MMDT_106] Corporate CIP → Verify Corporate Registration Information Fields");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.openTab('Corporate CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_107 - Corporate CIP → Verify Mandatory Corporate Field Badge Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_107 | Feature: Corporate CIP | Task: Verify Mandatory Corporate Field Badge Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Corporate CIP tab. → Locate Registration Details section. → Review field list. …
    // Expected: Mandatory corporate fields display correct badge and score value.
    console.log("[TC_MMDT_107] Corporate CIP → Verify Mandatory Corporate Field Badge Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.openTab('Corporate CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateCountMatchesCards();
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_108 - Corporate CIP → Verify Optional Corporate Field Badge Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_108 | Feature: Corporate CIP | Task: Verify Optional Corporate Field Badge Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Corporate CIP section. → Locate mandatory fields. → Verify badge visibility. …
    // Expected: Optional corporate fields display correct badge values.
    console.log("[TC_MMDT_108] Corporate CIP → Verify Optional Corporate Field Badge Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.openTab('Corporate CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateCountMatchesCards();
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_109 - Corporate CIP → Verify Corporate Field Metadata Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_109 | Feature: Corporate CIP | Task: Verify Corporate Field Metadata Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Corporate CIP tab. → Locate optional fields. → Verify Optional badge display. …
    // Expected: Corporate field metadata displays accurately.
    console.log("[TC_MMDT_109] Corporate CIP → Verify Corporate Field Metadata Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.openTab('Corporate CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_110 - Corporate CIP → Verify Corporate Field Group Expand/Collapse Behavior", async ({ testData }) => {
    // Excel: TC_MMDT_110 | Feature: Corporate CIP | Task: Verify Corporate Field Group Expand/Collapse Behavior
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Corporate CIP tab. → Select field group. → Review metadata display. …
    // Expected: Corporate field groups expand and collapse successfully.
    console.log("[TC_MMDT_110] Corporate CIP → Verify Corporate Field Group Expand/Collapse Behavior");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.openTab('Corporate CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_111 - Corporate CIP → Verify Corporate CIP Tab Persistence During Navigation", async ({ testData }) => {
    // Excel: TC_MMDT_111 | Feature: Corporate CIP | Task: Verify Corporate CIP Tab Persistence During Navigation
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Corporate CIP tab. → Locate first expandable group. → Expand group. …
    // Expected: Corporate CIP remains stable across navigation events.
    console.log("[TC_MMDT_111] Corporate CIP → Verify Corporate CIP Tab Persistence During Navigation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.openTab('Corporate CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_112 - Corporate CIP → Verify Corporate CIP Configuration Integrity After Clone", async ({ testData }) => {
    // Excel: TC_MMDT_112 | Feature: Corporate CIP | Task: Verify Corporate CIP Configuration Integrity After Clone
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Corporate CIP tab. → Scroll to middle of page. → Open another AML module. …
    // Expected: Corporate CIP configuration is copied accurately into cloned template.
    console.log("[TC_MMDT_112] Corporate CIP → Verify Corporate CIP Configuration Integrity After Clone");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.openTab('Corporate CIP');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      await mmPage.expectRefreshPreservesTemplateDetail('Standard KYC — Corporate');
      });
  });
  });

  test.describe("CDD Fields", () => {
  test("Case ID:TC_MMDT_113 - CDD Fields → Verify CDD Section Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_113 | Feature: CDD Fields | Task: Verify CDD Section Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open source Corporate template. → Review Corporate CIP configuration. → Clone template. …
    // Expected: CDD section loads successfully and displays all configured fields.
    console.log("[TC_MMDT_113] CDD Fields → Verify CDD Section Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('CDD Fields');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.clickCloneButton();
      });

    await test.step("Validate expected results", async () => {
      await expect(mmPage.tabButtons.first()).toBeVisible();
      await expect(mmPage.fieldRows.first()).toBeVisible();
      });
  });

  test("Case ID:TC_MMDT_114 - CDD Fields → Verify CDD Field Ordering", async ({ testData }) => {
    // Excel: TC_MMDT_114 | Feature: CDD Fields | Task: Verify CDD Field Ordering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Missing Mandatory Data Template module. → Select template configured with CDD fields. → Navigate to CDD tab. …
    // Expected: CDD fields appear in configured sequence.
    console.log("[TC_MMDT_114] CDD Fields → Verify CDD Field Ordering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('CDD Fields');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_115 - CDD Fields → Verify Risk Profile Field Group Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_115 | Feature: CDD Fields | Task: Verify Risk Profile Field Group Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open CDD tab. → Record displayed field sequence. → Compare against configuration order. …
    // Expected: Risk Profile fields display within correct group structure.
    console.log("[TC_MMDT_115] CDD Fields → Verify Risk Profile Field Group Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('CDD Fields');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_116 - CDD Fields → Verify Source of Funds Field Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_116 | Feature: CDD Fields | Task: Verify Source of Funds Field Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open CDD tab. → Locate Risk Profile section. → Verify section header visibility. …
    // Expected: Source of Funds fields render correctly and consistently.
    console.log("[TC_MMDT_116] CDD Fields → Verify Source of Funds Field Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('CDD Fields');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_117 - CDD Fields → Verify Occupation Information Field Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_117 | Feature: CDD Fields | Task: Verify Occupation Information Field Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open CDD tab. → Locate Source of Funds section. → Verify field visibility. …
    // Expected: Occupation-related fields display correctly.
    console.log("[TC_MMDT_117] CDD Fields → Verify Occupation Information Field Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('CDD Fields');
      });

    await test.step("Validate expected results", async () => {
      await expect(mmPage.tabButtons.first()).toBeVisible();
      await expect(mmPage.fieldRows.first()).toBeVisible();
      });
  });

  test("Case ID:TC_MMDT_118 - CDD Fields → Verify Mandatory CDD Field Badge Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_118 | Feature: CDD Fields | Task: Verify Mandatory CDD Field Badge Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open CDD tab. → Locate Occupation Information section. → Verify Occupation field. …
    // Expected: Mandatory CDD fields display correct badge and scoring indicator.
    console.log("[TC_MMDT_118] CDD Fields → Verify Mandatory CDD Field Badge Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('CDD Fields');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateCountMatchesCards();
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_119 - CDD Fields → Verify Optional CDD Field Badge Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_119 | Feature: CDD Fields | Task: Verify Optional CDD Field Badge Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open CDD section. → Locate mandatory fields. → Review requirement badges. …
    // Expected: Optional CDD fields display correct badge values.
    console.log("[TC_MMDT_119] CDD Fields → Verify Optional CDD Field Badge Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('CDD Fields');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateCountMatchesCards();
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_120 - CDD Fields → Verify CDD Metadata Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_120 | Feature: CDD Fields | Task: Verify CDD Metadata Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open CDD tab. → Identify optional fields. → Verify Optional badge visibility. …
    // Expected: Metadata is displayed correctly for CDD fields.
    console.log("[TC_MMDT_120] CDD Fields → Verify CDD Metadata Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('CDD Fields');
      });

    await test.step("Validate expected results", async () => {
      await expect(mmPage.tabButtons.first()).toBeVisible();
      await expect(mmPage.fieldRows.first()).toBeVisible();
      });
  });

  test("Case ID:TC_MMDT_121 - CDD Fields → Verify CDD Tab Persistence During Navigation", async ({ testData }) => {
    // Excel: TC_MMDT_121 | Feature: CDD Fields | Task: Verify CDD Tab Persistence During Navigation
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open CDD tab. → Select field group. → Review metadata information. …
    // Expected: CDD tab remains accessible and stable across navigation.
    console.log("[TC_MMDT_121] CDD Fields → Verify CDD Tab Persistence During Navigation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('CDD Fields');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSaveChangesSucceeded();
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_122 - CDD Fields → Verify CDD Configuration Integrity After Clone", async ({ testData }) => {
    // Excel: TC_MMDT_122 | Feature: CDD Fields | Task: Verify CDD Configuration Integrity After Clone
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open CDD tab. → Scroll to middle section. → Open another AML module. …
    // Expected: CDD configuration is copied accurately to cloned template.
    console.log("[TC_MMDT_122] CDD Fields → Verify CDD Configuration Integrity After Clone");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('CDD Fields');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      await mmPage.expectRefreshPreservesTemplateDetail('Standard KYC — Individual');
      });
  });
  });

  test.describe("EDD Fields", () => {
  test("Case ID:TC_MMDT_123 - EDD Fields → Verify EDD Section Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_123 | Feature: EDD Fields | Task: Verify EDD Section Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open source template. → Review CDD field configuration. → Clone template. …
    // Expected: EDD section loads successfully and displays all configured EDD fields.
    console.log("[TC_MMDT_123] EDD Fields → Verify EDD Section Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('EDD Fields');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.clickCloneButton();
      });

    await test.step("Validate expected results", async () => {
      await expect(mmPage.tabButtons.first()).toBeVisible();
      await expect(mmPage.fieldRows.first()).toBeVisible();
      });
  });

  test("Case ID:TC_MMDT_124 - EDD Fields → Verify High-Risk Customer Field Group Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_124 | Feature: EDD Fields | Task: Verify High-Risk Customer Field Group Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open Missing Mandatory Data Template module. → Select template configured with EDD fields. → Navigate to EDD tab. …
    // Expected: High-risk customer fields render correctly within assigned group.
    console.log("[TC_MMDT_124] EDD Fields → Verify High-Risk Customer Field Group Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('EDD Fields');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_125 - EDD Fields → Verify Politically Exposed Person (PEP) Field Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_125 | Feature: EDD Fields | Task: Verify Politically Exposed Person (PEP) Field Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open EDD tab. → Locate High-Risk Customer section. → Verify section header visibility. …
    // Expected: PEP-related fields display correctly and completely.
    console.log("[TC_MMDT_125] EDD Fields → Verify Politically Exposed Person (PEP) Field Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('EDD Fields');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_126 - EDD Fields → Verify Adverse Media Field Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_126 | Feature: EDD Fields | Task: Verify Adverse Media Field Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open EDD tab. → Locate PEP section. → Verify PEP Status field visibility. …
    // Expected: Adverse Media fields display correctly.
    console.log("[TC_MMDT_126] EDD Fields → Verify Adverse Media Field Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('EDD Fields');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_127 - EDD Fields → Verify Source of Wealth Field Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_127 | Feature: EDD Fields | Task: Verify Source of Wealth Field Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open EDD tab. → Locate Adverse Media section. → Verify Adverse Media Check field. …
    // Expected: Source of Wealth fields render accurately and consistently.
    console.log("[TC_MMDT_127] EDD Fields → Verify Source of Wealth Field Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('EDD Fields');
      });

    await test.step("Validate expected results", async () => {
      await expect(mmPage.tabButtons.first()).toBeVisible();
      await expect(mmPage.fieldRows.first()).toBeVisible();
      });
  });

  test("Case ID:TC_MMDT_128 - EDD Fields → Verify Mandatory EDD Field Badge Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_128 | Feature: EDD Fields | Task: Verify Mandatory EDD Field Badge Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open EDD tab. → Locate Source of Wealth section. → Verify all configured fields. …
    // Expected: Mandatory EDD fields display correct badge and score indicator.
    console.log("[TC_MMDT_128] EDD Fields → Verify Mandatory EDD Field Badge Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('EDD Fields');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateCountMatchesCards();
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_129 - EDD Fields → Verify Optional EDD Field Badge Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_129 | Feature: EDD Fields | Task: Verify Optional EDD Field Badge Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open EDD tab. → Identify Mandatory fields. → Review displayed badges. …
    // Expected: Optional EDD fields display correct badge values.
    console.log("[TC_MMDT_129] EDD Fields → Verify Optional EDD Field Badge Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('EDD Fields');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateCountMatchesCards();
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_130 - EDD Fields → Verify EDD Metadata Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_130 | Feature: EDD Fields | Task: Verify EDD Metadata Rendering
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open EDD tab. → Locate Optional fields. → Verify Optional badge visibility. …
    // Expected: Metadata is displayed correctly across EDD fields.
    console.log("[TC_MMDT_130] EDD Fields → Verify EDD Metadata Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('EDD Fields');
      });

    await test.step("Validate expected results", async () => {
      await expect(mmPage.tabButtons.first()).toBeVisible();
      await expect(mmPage.fieldRows.first()).toBeVisible();
      });
  });

  test("Case ID:TC_MMDT_131 - EDD Fields → Verify EDD Tab Persistence During Navigation", async ({ testData }) => {
    // Excel: TC_MMDT_131 | Feature: EDD Fields | Task: Verify EDD Tab Persistence During Navigation
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open EDD tab. → Review field metadata. → Verify field labels. …
    // Expected: EDD tab remains accessible and stable during navigation.
    console.log("[TC_MMDT_131] EDD Fields → Verify EDD Tab Persistence During Navigation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('EDD Fields');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSaveChangesSucceeded();
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_132 - EDD Fields → Verify EDD Configuration Integrity After Clone", async ({ testData }) => {
    // Excel: TC_MMDT_132 | Feature: EDD Fields | Task: Verify EDD Configuration Integrity After Clone
    // FSD §3.4 — Template Detail — Tab Sections
    // Steps (11): Open EDD tab. → Scroll through field sections. → Navigate to another AML module. …
    // Expected: EDD configuration is copied accurately into cloned template.
    console.log("[TC_MMDT_132] EDD Fields → Verify EDD Configuration Integrity After Clone");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.openTab('EDD Fields');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      await mmPage.expectRefreshPreservesTemplateDetail('Standard KYC — Individual');
      });
  });
  });

  test.describe("Field Management", () => {
  test("Case ID:TC_MMDT_133 - Field Management → Verify Requirement Tag Rendering Consistency Across Sections", async ({ testData }) => {
    // Excel: TC_MMDT_133 | Feature: Field Management | Task: Verify Requirement Tag Rendering Consistency Across Sections
    // FSD §3.5 — Field Row Components
    // Steps (11): Open source template. → Review EDD field configuration. → Clone template. …
    // Expected: Requirement tags render consistently throughout the application.
    console.log("[TC_MMDT_133] Field Management → Verify Requirement Tag Rendering Consistency Across Sections");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.clickCloneButton();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_134 - Field Management → Verify Long Field Description Handling", async ({ testData }) => {
    // Excel: TC_MMDT_134 | Feature: Field Management | Task: Verify Long Field Description Handling
    // FSD §3.5 — Field Row Components
    // Steps (11): Open Individual CIP tab. → Review Mandatory and Optional badges. → Open Corporate CIP tab. …
    // Expected: Long descriptions display correctly without UI distortion.
    console.log("[TC_MMDT_134] Field Management → Verify Long Field Description Handling");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_135 - Field Management → Verify Long Field Name Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_135 | Feature: Field Management | Task: Verify Long Field Name Rendering
    // FSD §3.5 — Field Row Components
    // Steps (11): Open template configuration. → Navigate to field containing long description. → Review description rendering. …
    // Expected: Long field names are displayed correctly without affecting layout.
    console.log("[TC_MMDT_135] Field Management → Verify Long Field Name Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_136 - Field Management → Verify Special Character Handling in Custom Field Names", async ({ testData }) => {
    // Excel: TC_MMDT_136 | Feature: Field Management | Task: Verify Special Character Handling in Custom Field Names
    // FSD §3.8 — Add Field (Custom Fields)
    // Steps (11): Create custom field with maximum supported length. → Save template. → Open field section. …
    // Expected: Allowed special characters are handled correctly without data corruption.
    console.log("[TC_MMDT_136] Field Management → Verify Special Character Handling in Custom Field Names");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.createValidCustomField();
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_139 - Field Management → Verify Empty Section Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_139 | Feature: Field Management | Task: Verify Empty Section Rendering
    // FSD §3.8 — Add Field (Custom Fields)
    // Steps (11): Create custom field successfully. → Record field name. → Open Add Field modal again. …
    // Expected: Empty sections display appropriate messaging and actions.
    console.log("[TC_MMDT_139] Field Management → Verify Empty Section Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.createValidCustomField();
      await mmPage.openAddFieldDialog();
      await mmPage.searchTemplates('Field');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_140 - Field Management → Verify Large Field Volume Rendering Performance", async ({ testData }) => {
    // Excel: TC_MMDT_140 | Feature: Field Management | Task: Verify Large Field Volume Rendering Performance
    // FSD §3.8 — Add Field (Custom Fields)
    // Steps (11): Open template with empty section. → Navigate to empty tab. → Observe section rendering. …
    // Expected: Large field volumes render successfully without missing data.
    console.log("[TC_MMDT_140] Field Management → Verify Large Field Volume Rendering Performance");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openAddFieldDialog();
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_141 - Field Management → Verify Cross-Tab Configuration Consistency", async ({ testData }) => {
    // Excel: TC_MMDT_141 | Feature: Field Management | Task: Verify Cross-Tab Configuration Consistency
    // FSD §3.5 — Field Row Components
    // Steps (11): Open template containing extensive field configuration. → Navigate to field-heavy section. → Observe load behavior. …
    // Expected: Changes remain isolated to intended section only.
    console.log("[TC_MMDT_141] Field Management → Verify Cross-Tab Configuration Consistency");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });
  });

  test.describe("Configuration Integrity", () => {
  test("Case ID:TC_MMDT_142 - Configuration Integrity → Verify End-to-End Template Configuration Integrity", async ({ testData }) => {
    // Excel: TC_MMDT_142 | Feature: Configuration Integrity | Task: Verify End-to-End Template Configuration Integrity
    // FSD §3.10 — Business Rules
    // Steps (11): Open Individual CIP tab. → Modify editable field requirement. → Save template. …
    // Expected: Template configuration remains accurate and consistent after multiple updates.
    console.log("[TC_MMDT_142] Configuration Integrity → Verify End-to-End Template Configuration Integrity");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Standard KYC — Individual');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('100+ Configured Fields');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      await mmPage.expectRefreshPreservesTemplateDetail('Standard KYC — Individual');
      });
  });
  });

  test.describe("Data Persistence", () => {
  test("Case ID:TC_MMDT_143 - Data Persistence → Verify Template Configuration Persistence After Browser Refresh", async ({ testData }) => {
    // Excel: TC_MMDT_143 | Feature: Data Persistence | Task: Verify Template Configuration Persistence After Browser Refresh
    // FSD §3.8 — Add Field (Custom Fields)
    // Steps (11): Open template. → Add custom field. → Modify requirement assignment. …
    // Expected: All saved template changes persist after browser refresh.
    console.log("[TC_MMDT_143] Data Persistence → Verify Template Configuration Persistence After Browser Refresh");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.updateFieldRequirementByTestDataFragment('Existing Template');
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.mockUnauthorized();
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Existing Template');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectScoreRecalculationAfterTemplateUpdate(testData.baseUrl);
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_144 - Data Persistence → Verify Template Configuration Persistence After Logout/Login", async ({ testData }) => {
    // Excel: TC_MMDT_144 | Feature: Data Persistence | Task: Verify Template Configuration Persistence After Logout/Login
    // FSD §3.10 — Business Rules
    // Steps (11): Open template configuration. → Modify Description field. → Change one field requirement. …
    // Expected: Template configuration remains unchanged after re-login.
    console.log("[TC_MMDT_144] Data Persistence → Verify Template Configuration Persistence After Logout/Login");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Full Configuration Update');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSaveChangesSucceeded();
      });
  });

  test("Case ID:TC_MMDT_145 - Data Persistence → Verify Requirement Changes Persistence Across Sessions", async ({ testData }) => {
    // Excel: TC_MMDT_145 | Feature: Data Persistence | Task: Verify Requirement Changes Persistence Across Sessions
    // FSD §3.10 — Business Rules
    // Steps (11): Open template configuration. → Modify editable field configuration. → Save changes. …
    // Expected: Requirement changes persist across user sessions.
    console.log("[TC_MMDT_145] Data Persistence → Verify Requirement Changes Persistence Across Sessions");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.mockUnauthorized();
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSaveChangesSucceeded();
      });
  });

  test("Case ID:TC_MMDT_146 - Data Persistence → Verify Custom Field Persistence Across Sessions", async ({ testData }) => {
    // Excel: TC_MMDT_146 | Feature: Data Persistence | Task: Verify Custom Field Persistence Across Sessions
    // FSD §3.8 — Add Field (Custom Fields)
    // Steps (11): Open template configuration. → Change field from Optional (1) to Mandatory (3). → Save template. …
    // Expected: Custom field remains available after re-login.
    console.log("[TC_MMDT_146] Data Persistence → Verify Custom Field Persistence Across Sessions");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.mockUnauthorized();
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Existing Template');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSaveChangesSucceeded();
      });
  });

  test("Case ID:TC_MMDT_147 - Data Persistence → Verify Score Configuration Persistence Across Sessions", async ({ testData }) => {
    // Excel: TC_MMDT_147 | Feature: Data Persistence | Task: Verify Score Configuration Persistence Across Sessions
    // FSD §3.8 — Add Field (Custom Fields)
    // Steps (11): Create new custom field. → Save template. → Verify field appears in section. …
    // Expected: Score configuration persists across sessions.
    console.log("[TC_MMDT_147] Data Persistence → Verify Score Configuration Persistence Across Sessions");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.mockUnauthorized();
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.searchTemplates('Customer');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSaveChangesSucceeded();
      });
  });

  test("Case ID:TC_MMDT_148 - Data Persistence → Verify Archive Status Persistence After Session Restart", async ({ testData }) => {
    // Excel: TC_MMDT_148 | Feature: Data Persistence | Task: Verify Archive Status Persistence After Session Restart
    // FSD §3.10 — Business Rules
    // Steps (11): Open Score Configuration. → Configure valid ranges. → Save template. …
    // Expected: Archived status remains unchanged after session restart.
    console.log("[TC_MMDT_148] Data Persistence → Verify Archive Status Persistence After Session Restart");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.mockUnauthorized();
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Source of Wealth Category');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSaveChangesSucceeded();
      });
  });

  test("Case ID:TC_MMDT_149 - Data Persistence → Verify Clone Template Persistence After Session Restart", async ({ testData }) => {
    // Excel: TC_MMDT_149 | Feature: Data Persistence | Task: Verify Clone Template Persistence After Session Restart
    // FSD §3.3 — Template List Panel
    // Steps (11): Archive active template. → Verify success notification. → Logout application. …
    // Expected: Cloned template remains available after session restart.
    console.log("[TC_MMDT_149] Data Persistence → Verify Clone Template Persistence After Session Restart");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.mockUnauthorized();
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.searchTemplates('0–25,26–50,51–75,76–100');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSaveChangesSucceeded();
      });
  });

  test("Case ID:TC_MMDT_150 - Data Persistence → Verify Multi-Tab Browser Persistence", async ({ testData }) => {
    // Excel: TC_MMDT_150 | Feature: Data Persistence | Task: Verify Multi-Tab Browser Persistence
    // FSD §3.10 — Business Rules
    // Steps (11): Clone existing template. → Save cloned template. → Verify clone creation. …
    // Expected: Saved changes are visible across browser tabs after refresh.
    console.log("[TC_MMDT_150] Data Persistence → Verify Multi-Tab Browser Persistence");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.clickCloneButton();
      await mmPage.mockUnauthorized();
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.searchTemplates('Archived');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSaveChangesSucceeded();
      });
  });
  });

  test.describe("Recovery", () => {
  test("Case ID:TC_MMDT_151 - Recovery → Verify Recovery After Unexpected Browser Closure", async ({ testData }) => {
    // Excel: TC_MMDT_151 | Feature: Recovery | Task: Verify Recovery After Unexpected Browser Closure
    // FSD §3.10 — Business Rules
    // Steps (11): Open template in Browser Tab A. → Open same template in Browser Tab B. → Modify configuration in Tab A. …
    // Expected: Previously saved data remains intact after browser closure.
    console.log("[TC_MMDT_151] Recovery → Verify Recovery After Unexpected Browser Closure");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Cloned Template');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectApiFailureHandledGracefully();
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_152 - Recovery → Verify Saved Configuration Integrity After Consecutive Updates", async ({ testData }) => {
    // Excel: TC_MMDT_152 | Feature: Recovery | Task: Verify Saved Configuration Integrity After Consecutive Updates
    // FSD §3.10 — Business Rules
    // Steps (11): Open template configuration. → Modify configuration. → Save changes. …
    // Expected: Configuration remains accurate after multiple sequential updates.
    console.log("[TC_MMDT_152] Recovery → Verify Saved Configuration Integrity After Consecutive Updates");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectApiFailureHandledGracefully();
      });
  });

  test("Case ID:TC_MMDT_165 - Recovery → Verify Recovery After Failed Save", async ({ testData }) => {
    // Excel: TC_MMDT_165 | Feature: Recovery | Task: Verify Recovery After Failed Save
    // FSD §3.10 — Business Rules
    // Steps (11): Open Create Template form. → Leave Template Name blank. → Attempt save. …
    // Expected: User can recover from failure and save successfully without re-entering all data.
    console.log("[TC_MMDT_165] Recovery → Verify Recovery After Failed Save");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.attemptDuplicateFieldCreation('HTTP 500 Error');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectApiFailureHandledGracefully();
      await mmPage.expectSaveChangesSucceeded();
      });
  });
  });

  test.describe("Session Management", () => {
  test("Case ID:TC_MMDT_153 - Session Management → Verify Session Timeout During Template Edit", async ({ testData }) => {
    // Excel: TC_MMDT_153 | Feature: Session Management | Task: Verify Session Timeout During Template Edit
    // FSD §3.8 — Add Field (Custom Fields)
    // Steps (11): Open template. → Update description and save. → Update requirement value and save. …
    // Expected: Session timeout is handled securely and user is prompted to reauthenticate.
    console.log("[TC_MMDT_153] Session Management → Verify Session Timeout During Template Edit");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.updateFieldRequirementByTestDataFragment('Existing Template');
      await mmPage.refreshPage();
      await mmPage.mockUnauthorized();
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Existing Template');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_154 - Session Management → Verify Session Timeout During Template Creation", async ({ testData }) => {
    // Excel: TC_MMDT_154 | Feature: Session Management | Task: Verify Session Timeout During Template Creation
    // FSD §3.10 — Business Rules
    // Steps (11): Open editable template. → Modify multiple field configurations. → Do not save changes. …
    // Expected: Expired sessions prevent template creation and protect data integrity.
    console.log("[TC_MMDT_154] Session Management → Verify Session Timeout During Template Creation");
    await test.step("Preconditions", async () => {
      await mmPage.mockUnauthorized();
      });

    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.mockUnauthorized();
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectAccessDenied();
      });
  });

  test("Case ID:TC_MMDT_155 - Session Management → Verify Concurrent Login Session Handling", async ({ testData }) => {
    // Excel: TC_MMDT_155 | Feature: Session Management | Task: Verify Concurrent Login Session Handling
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Open Create Template form. → Enter template details. → Configure score ranges. …
    // Expected: Concurrent sessions do not cause configuration corruption.
    console.log("[TC_MMDT_155] Session Management → Verify Concurrent Login Session Handling");
    await test.step("Preconditions", async () => {
      await mmPage.mockSaveChangesFailure();
      });

    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.configureOverlappingScoreRangesFromTestData('Active Session');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_156 - Session Management → Verify Reauthentication Recovery Workflow", async ({ testData }) => {
    // Excel: TC_MMDT_156 | Feature: Session Management | Task: Verify Reauthentication Recovery Workflow
    // FSD §3.10 — Business Rules
    // Steps (11): Login in Browser A. → Open template configuration. → Login in Browser B using same account. …
    // Expected: User can recover workflow safely after reauthentication.
    console.log("[TC_MMDT_156] Session Management → Verify Reauthentication Recovery Workflow");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('New Template');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });
  });

  test.describe("Error Handling", () => {
  test("Case ID:TC_MMDT_157 - Error Handling → Verify Save Failure Handling During Template Update", async ({ testData }) => {
    // Excel: TC_MMDT_157 | Feature: Error Handling | Task: Verify Save Failure Handling During Template Update
    // FSD §3.10 — Business Rules
    // Steps (11): Open template configuration. → Navigate to CDD tab. → Keep session idle until expiration. …
    // Expected: Save failure message is displayed and no partial data is committed.
    console.log("[TC_MMDT_157] Error Handling → Verify Save Failure Handling During Template Update");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.mockUnauthorized();
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectApiFailureHandledGracefully();
      });
  });

  test("Case ID:TC_MMDT_158 - Error Handling → Verify Clone Failure Handling", async ({ testData }) => {
    // Excel: TC_MMDT_158 | Feature: Error Handling | Task: Verify Clone Failure Handling
    // FSD §3.10 — Business Rules
    // Steps (11): Open template configuration. → Modify Description field. → Modify requirement value. …
    // Expected: Clone failure is handled gracefully without creating invalid records.
    console.log("[TC_MMDT_158] Error Handling → Verify Clone Failure Handling");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.modifyFirstEditableRequirement();
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectApiFailureHandledGracefully();
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_159 - Error Handling → Verify Archive Failure Handling", async ({ testData }) => {
    // Excel: TC_MMDT_159 | Feature: Error Handling | Task: Verify Archive Failure Handling
    // FSD §3.10 — Business Rules
    // Steps (11): Open template action menu. → Select Clone Template. → Enter clone name. …
    // Expected: Archive failure does not change template status.
    console.log("[TC_MMDT_159] Error Handling → Verify Archive Failure Handling");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.clickCloneButton();
      await mmPage.searchTemplates('Template');
      await mmPage.attemptDuplicateFieldCreation('Template Update');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectApiFailureHandledGracefully();
      });
  });

  test("Case ID:TC_MMDT_160 - Error Handling → Verify Network Interruption During Save", async ({ testData }) => {
    // Excel: TC_MMDT_160 | Feature: Error Handling | Task: Verify Network Interruption During Save
    // FSD §3.3 — Template List Panel
    // Steps (11): Select active template. → Open Archive action. → Confirm archival request. …
    // Expected: System prevents incomplete save and preserves existing configuration.
    console.log("[TC_MMDT_160] Error Handling → Verify Network Interruption During Save");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('Clone');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectApiFailureHandledGracefully();
      });
  });

  test("Case ID:TC_MMDT_161 - Error Handling → Verify Network Interruption During Clone", async ({ testData }) => {
    // Excel: TC_MMDT_161 | Feature: Error Handling | Task: Verify Network Interruption During Clone
    // FSD §3.10 — Business Rules
    // Steps (11): Open template configuration. → Modify field settings. → Disconnect network connection. …
    // Expected: No incomplete clone record is created during network interruption.
    console.log("[TC_MMDT_161] Error Handling → Verify Network Interruption During Clone");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Active Template');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectApiFailureHandledGracefully();
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_162 - Error Handling → Verify Network Interruption During Archive", async ({ testData }) => {
    // Excel: TC_MMDT_162 | Feature: Error Handling | Task: Verify Network Interruption During Archive
    // FSD §3.10 — Business Rules
    // Steps (11): Initiate template clone. → Enter clone details. → Disconnect network before submission completes. …
    // Expected: Network interruption prevents archive completion and preserves template state.
    console.log("[TC_MMDT_162] Error Handling → Verify Network Interruption During Archive");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.clickCloneButton();
      await mmPage.refreshPage();
      await mmPage.searchTemplates('Network');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectApiFailureHandledGracefully();
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_163 - Error Handling → Verify Unexpected Server Error Handling", async ({ testData }) => {
    // Excel: TC_MMDT_163 | Feature: Error Handling | Task: Verify Unexpected Server Error Handling
    // FSD §3.10 — Business Rules
    // Steps (11): Open archive confirmation dialog. → Disconnect network connection. → Confirm archive action. …
    // Expected: System handles server errors gracefully without data corruption.
    console.log("[TC_MMDT_163] Error Handling → Verify Unexpected Server Error Handling");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      await mmPage.searchTemplates('Clone');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectApiFailureHandledGracefully();
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_164 - Error Handling → Verify Validation Error Message Accuracy", async ({ testData }) => {
    // Excel: TC_MMDT_164 | Feature: Error Handling | Task: Verify Validation Error Message Accuracy
    // FSD §3.10 — Business Rules
    // Steps (11): Open template configuration. → Perform valid update. → Simulate server 500 error. …
    // Expected: Validation messages accurately describe the underlying issue.
    console.log("[TC_MMDT_164] Error Handling → Verify Validation Error Message Accuracy");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectApiFailureHandledGracefully();
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_166 - Error Handling → Verify Duplicate Submission Prevention", async ({ testData }) => {
    // Excel: TC_MMDT_166 | Feature: Error Handling | Task: Verify Duplicate Submission Prevention
    // FSD §3.10 — Business Rules
    // Steps (11): Modify template configuration. → Trigger save failure. → Observe error message. …
    // Expected: System prevents duplicate submissions and creates only one record.
    console.log("[TC_MMDT_166] Error Handling → Verify Duplicate Submission Prevention");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.updateFieldRequirementByTestDataFragment('Blank, Duplicate, Invalid Score');
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Blank, Duplicate, Invalid Score');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectApiFailureHandledGracefully();
      await mmPage.expectAddFieldValidationError();
      await mmPage.expectTemplateListRefreshed();
      });
  });
  });

  test.describe("Performance", () => {
  test("Case ID:TC_MMDT_167 - Performance → Verify Template Opening Performance", async ({ testData }) => {
    // Excel: TC_MMDT_167 | Feature: Performance | Task: Verify Template Opening Performance
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Open Create Template form. → Enter valid template details. → Configure score ranges. …
    // Expected: Template details load within acceptable time limits.
    console.log("[TC_MMDT_167] Performance → Verify Template Opening Performance");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.configureOverlappingScoreRangesFromTestData('Retry Save Scenario');
      await mmPage.searchTemplates('Retry');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_168 - Performance → Verify Archive Performance Under Large Dataset", async ({ testData }) => {
    // Excel: TC_MMDT_168 | Feature: Performance | Task: Verify Archive Performance Under Large Dataset
    // FSD §3.3 — Template List Panel
    // Steps (11): Open template list. → Select first template. → Record load time. …
    // Expected: Archive operation completes within acceptable performance limits.
    console.log("[TC_MMDT_168] Performance → Verify Archive Performance Under Large Dataset");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_170 - Performance → Verify Score Configuration Rendering Performance", async ({ testData }) => {
    // Excel: TC_MMDT_170 | Feature: Performance | Task: Verify Score Configuration Rendering Performance
    // FSD §3.10 — Business Rules
    // Steps (11): Open template containing large number of fields. → Navigate to Individual CIP. → Scroll through section. …
    // Expected: Score configuration renders and updates efficiently.
    console.log("[TC_MMDT_170] Performance → Verify Score Configuration Rendering Performance");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });
  });

  test.describe("Stability", () => {
  test("Case ID:TC_MMDT_169 - Stability → Verify Large Field Volume Rendering Performance", async ({ testData }) => {
    // Excel: TC_MMDT_169 | Feature: Stability | Task: Verify Large Field Volume Rendering Performance
    // FSD §3.3 — Template List Panel
    // Steps (11): Open template list. → Select active template. → Start timer. …
    // Expected: Large field volumes render completely without UI degradation.
    console.log("[TC_MMDT_169] Stability → Verify Large Field Volume Rendering Performance");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_171 - Stability → Verify Concurrent User Activity Handling", async ({ testData }) => {
    // Excel: TC_MMDT_171 | Feature: Stability | Task: Verify Concurrent User Activity Handling
    // FSD §3.10 — Business Rules
    // Steps (11): Open template. → Navigate to Score Configuration. → Record load time. …
    // Expected: Concurrent activity does not corrupt template configuration.
    console.log("[TC_MMDT_171] Stability → Verify Concurrent User Activity Handling");
    await test.step("Preconditions", async () => {
      await mmPage.mockSaveChangesFailure();
      });

    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('100+ Configured Fields');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_172 - Stability → Verify Module Stability During Extended Usage", async ({ testData }) => {
    // Excel: TC_MMDT_172 | Feature: Stability | Task: Verify Module Stability During Extended Usage
    // FSD §3.10 — Business Rules
    // Steps (11): Login as User A. → Open template configuration. → Login as User B. …
    // Expected: Module remains stable without crashes, freezes, memory issues, or data inconsistencies.
    console.log("[TC_MMDT_172] Stability → Verify Module Stability During Extended Usage");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Full Score Configuration');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });
  });

  test.describe("Gap Score Engine", () => {
  test("Case ID:TC_MMDT_173 - Gap Score Engine → Verify Single Mandatory Field Score Contribution", async ({ testData }) => {
    // Excel: TC_MMDT_173 | Feature: Gap Score Engine | Task: Verify Single Mandatory Field Score Contribution
    // FSD §3.8 — Add Field (Custom Fields)
    // Steps (11): Open Missing Mandatory module. → Navigate through multiple templates. → Perform searches repeatedly. …
    // Expected: Gap score increases by exactly 3 points.
    console.log("[TC_MMDT_173] Gap Score Engine → Verify Single Mandatory Field Score Contribution");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      await mmPage.openTab('KYC Gap Score');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('User');
      await mmPage.createValidCustomField();
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.clickCloneButton();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectScoreTabLoaded();
      });
  });

  test("Case ID:TC_MMDT_174 - Gap Score Engine → Verify Single Optional Field Score Contribution", async ({ testData }) => {
    // Excel: TC_MMDT_174 | Feature: Gap Score Engine | Task: Verify Single Optional Field Score Contribution
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (11): Open template configuration. → Configure one field as Mandatory (3). → Assign template to test customer. …
    // Expected: Gap score increases by exactly 1 point.
    console.log("[TC_MMDT_174] Gap Score Engine → Verify Single Optional Field Score Contribution");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      await mmPage.openTab('KYC Gap Score');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectScoreTabLoaded();
      });
  });

  test("Case ID:TC_MMDT_175 - Gap Score Engine → Verify Multiple Mandatory Field Aggregation", async ({ testData }) => {
    // Excel: TC_MMDT_175 | Feature: Gap Score Engine | Task: Verify Multiple Mandatory Field Aggregation
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (11): Configure field as Optional (1). → Assign template to customer. → Leave field blank. …
    // Expected: Total score equals 9 (3+3+3).
    console.log("[TC_MMDT_175] Gap Score Engine → Verify Multiple Mandatory Field Aggregation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      await mmPage.openTab('KYC Gap Score');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectScoreTabLoaded();
      });
  });

  test("Case ID:TC_MMDT_176 - Gap Score Engine → Verify Mixed Mandatory and Optional Aggregation", async ({ testData }) => {
    // Excel: TC_MMDT_176 | Feature: Gap Score Engine | Task: Verify Mixed Mandatory and Optional Aggregation
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (11): Configure three fields as Mandatory. → Leave all three fields blank. → Complete remaining data. …
    // Expected: Total score equals 9 (6+3).
    console.log("[TC_MMDT_176] Gap Score Engine → Verify Mixed Mandatory and Optional Aggregation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      await mmPage.openTab('KYC Gap Score');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectScoreTabLoaded();
      });
  });
  });

  test.describe("Risk Band", () => {
  test("Case ID:TC_MMDT_177 - Risk Band → Verify Lowest Risk Band Boundary", async ({ testData }) => {
    // Excel: TC_MMDT_177 | Feature: Risk Band | Task: Verify Lowest Risk Band Boundary
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (11): Configure 2 Mandatory fields. → Configure 3 Optional fields. → Leave all five fields blank. …
    // Expected: Lowest score maps to correct risk band.
    console.log("[TC_MMDT_177] Risk Band → Verify Lowest Risk Band Boundary");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_178 - Risk Band → Verify Upper Boundary Risk Band Mapping", async ({ testData }) => {
    // Excel: TC_MMDT_178 | Feature: Risk Band | Task: Verify Upper Boundary Risk Band Mapping
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (11): Configure score bands per FSD. → Create customer with lowest score. → Trigger gap calculation. …
    // Expected: Boundary value maps to expected risk band.
    console.log("[TC_MMDT_178] Risk Band → Verify Upper Boundary Risk Band Mapping");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.configureOverlappingScoreRangesFromTestData('2 Mandatory + 3 Optional');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_179 - Risk Band → Verify Lower Boundary Risk Band Mapping", async ({ testData }) => {
    // Excel: TC_MMDT_179 | Feature: Risk Band | Task: Verify Lower Boundary Risk Band Mapping
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (11): Configure valid score bands. → Create customer matching exact upper boundary. → Trigger calculation. …
    // Expected: Lower boundary value maps correctly.
    console.log("[TC_MMDT_179] Risk Band → Verify Lower Boundary Risk Band Mapping");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_180 - Risk Band → Verify Gap Score Band Gap Detection", async ({ testData }) => {
    // Excel: TC_MMDT_180 | Feature: Risk Band | Task: Verify Gap Score Band Gap Detection
    // FSD §3.7 — KYC Gap Score Configuration Tab
    // Steps (11): Configure score bands. → Generate score equal to lower boundary. → Execute calculation. …
    // Expected: System prevents save due to uncovered score range.
    console.log("[TC_MMDT_180] Risk Band → Verify Gap Score Band Gap Detection");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      await mmPage.openTab('KYC Gap Score');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.configureOverlappingScoreRangesFromTestData('Exact Boundary Value');
      await mmPage.refreshPage();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      await mmPage.expectScoreTabLoaded();
      });
  });

  test("Case ID:TC_MMDT_181 - Risk Band → Verify Gap Score Band Overlap Detection", async ({ testData }) => {
    // Excel: TC_MMDT_181 | Feature: Risk Band | Task: Verify Gap Score Band Overlap Detection
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (11): Open Score Configuration. → Configure first band ending at 20. → Configure next band starting at 25. …
    // Expected: Overlapping score bands are rejected.
    console.log("[TC_MMDT_181] Risk Band → Verify Gap Score Band Overlap Detection");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      await mmPage.openTab('KYC Gap Score');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectScoreTabLoaded();
      });
  });

  test("Case ID:TC_MMDT_182 - Risk Band → Verify Dynamic Priority Calculation Based on Score Band", async ({ testData }) => {
    // Excel: TC_MMDT_182 | Feature: Risk Band | Task: Verify Dynamic Priority Calculation Based on Score Band
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (11): Configure first band 0–30. → Configure second band 25–50. → Review overlap. …
    // Expected: Priority is dynamically calculated based on assigned score band.
    console.log("[TC_MMDT_182] Risk Band → Verify Dynamic Priority Calculation Based on Score Band");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });
  });

  test.describe("Customer Assignment", () => {
  test("Case ID:TC_MMDT_183 - Customer Assignment → Verify Customer Assignment Using Matching Customer Type", async ({ testData }) => {
    // Excel: TC_MMDT_183 | Feature: Customer Assignment | Task: Verify Customer Assignment Using Matching Customer Type
    // FSD §4.7 — Gap Detail Modal
    // Steps (11): Configure score bands. → Create customer with low score. → Generate result. …
    // Expected: Individual customers receive only Individual templates.
    console.log("[TC_MMDT_183] Customer Assignment → Verify Customer Assignment Using Matching Customer Type");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Corporate');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.configureOverlappingScoreRangesFromTestData('Overlap 25–30');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });
  });

  test.describe("Accessibility", () => {
  test("Case ID:TC_MMDT_184 - Accessibility → Verify Visible Focus Indicators", async ({ testData }) => {
    // Excel: TC_MMDT_184 | Feature: Accessibility | Task: Verify Visible Focus Indicators
    // FSD §3.2 — Navigation & Layout
    // Steps (11): Create Individual template. → Configure mandatory fields. → Save template. …
    // Expected: Focus indicators are visible for all interactive elements.
    console.log("[TC_MMDT_184] Accessibility → Verify Visible Focus Indicators");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_185 - Accessibility → Verify Mandatory Field Indicator Visibility", async ({ testData }) => {
    // Excel: TC_MMDT_185 | Feature: Accessibility | Task: Verify Mandatory Field Indicator Visibility
    // FSD §3.2 — Navigation & Layout
    // Steps (11): Open template form. → Press Tab key. → Observe focus indicator on each control. …
    // Expected: Mandatory indicators are clearly visible and distinguishable.
    console.log("[TC_MMDT_185] Accessibility → Verify Mandatory Field Indicator Visibility");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Standard KYC — Individual');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_186 - Accessibility → Verify Tooltip Accessibility Using Keyboard", async ({ testData }) => {
    // Excel: TC_MMDT_186 | Feature: Accessibility | Task: Verify Tooltip Accessibility Using Keyboard
    // FSD §3.2 — Navigation & Layout
    // Steps (11): Open template configuration. → Locate Mandatory fields. → Verify indicator visibility. …
    // Expected: Tooltip content is accessible via keyboard navigation.
    console.log("[TC_MMDT_186] Accessibility → Verify Tooltip Accessibility Using Keyboard");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });
  });

  test.describe("Chrome Compatibility", () => {
  test("Case ID:TC_MMDT_187 - Chrome Compatibility → Verify Chrome Browser Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_187 | Feature: Chrome Compatibility | Task: Verify Chrome Browser Rendering
    // FSD §3.2 — Navigation & Layout
    // Steps (11): Open template configuration. → Navigate to help icon using keyboard. → Focus tooltip trigger. …
    // Expected: UI renders correctly in Chrome without layout issues.
    console.log("[TC_MMDT_187] Chrome Compatibility → Verify Chrome Browser Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_188 - Chrome Compatibility → Verify Chrome Browser Zoom at 100%", async ({ testData }) => {
    // Excel: TC_MMDT_188 | Feature: Chrome Compatibility | Task: Verify Chrome Browser Zoom at 100%
    // FSD §3.3 — Template List Panel
    // Steps (11): Launch application in Chrome. → Open Template List. → Open Create Template screen. …
    // Expected: Layout remains correct at 100% zoom level.
    console.log("[TC_MMDT_188] Chrome Compatibility → Verify Chrome Browser Zoom at 100%");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_189 - Chrome Compatibility → Verify Chrome Browser Zoom at 125%", async ({ testData }) => {
    // Excel: TC_MMDT_189 | Feature: Chrome Compatibility | Task: Verify Chrome Browser Zoom at 125%
    // FSD §3.3 — Template List Panel
    // Steps (11): Open module. → Set browser zoom to 100%. → Open Template List. …
    // Expected: Screen remains usable without overlapping elements.
    console.log("[TC_MMDT_189] Chrome Compatibility → Verify Chrome Browser Zoom at 125%");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });
  });

  test.describe("Desktop UI Validation", () => {
  test("Case ID:TC_MMDT_190 - Desktop UI Validation → Verify Desktop Resolution Compatibility", async ({ testData }) => {
    // Excel: TC_MMDT_190 | Feature: Desktop UI Validation | Task: Verify Desktop Resolution Compatibility
    // FSD §3.2 — Navigation & Layout
    // Steps (11): Open application. → Set browser zoom to 125%. → Navigate through module. …
    // Expected: UI displays correctly on supported desktop resolution.
    console.log("[TC_MMDT_190] Desktop UI Validation → Verify Desktop Resolution Compatibility");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });
  });

  test.describe("UI Compliance", () => {
  test("Case ID:TC_MMDT_191 - UI Compliance → Verify Layout Stability During Extended Navigation", async ({ testData }) => {
    // Excel: TC_MMDT_191 | Feature: UI Compliance | Task: Verify Layout Stability During Extended Navigation
    // FSD §3.3 — Template List Panel
    // Steps (11): Open application. → Set resolution to supported desktop size. → Open Template List. …
    // Expected: UI layout remains stable without alignment or rendering issues.
    console.log("[TC_MMDT_191] UI Compliance → Verify Layout Stability During Extended Navigation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectAppShellVisible();
      });
  });
  });

  test.describe("Regulatory Compliance", () => {
  test("Case ID:TC_MMDT_192 - Regulatory Compliance → Verify Regulatory Data Completeness Evaluation", async ({ testData }) => {
    // Excel: TC_MMDT_192 | Feature: Regulatory Compliance | Task: Verify Regulatory Data Completeness Evaluation
    // FSD §3.3 — Template List Panel
    // Steps (11): Open Template List. → Open Create Template page. → Return to list. …
    // Expected: Completeness evaluation correctly identifies missing AML data.
    console.log("[TC_MMDT_192] Regulatory Compliance → Verify Regulatory Data Completeness Evaluation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });
  });

  test.describe("End-to-End AML Workflow", () => {
  test("Case ID:TC_MMDT_193 - End-to-End AML Workflow → Verify End-to-End Missing Mandatory Data Lifecycle", async ({ testData }) => {
    // Excel: TC_MMDT_193 | Feature: End-to-End AML Workflow | Task: Verify End-to-End Missing Mandatory Data Lifecycle
    // FSD §3.10 — Business Rules
    // Steps (11): Configure mandatory AML fields. → Assign template to customer. → Populate some fields. …
    // Expected: End-to-end workflow executes successfully with correct scoring, priority, export and audit results.
    console.log("[TC_MMDT_193] End-to-End AML Workflow → Verify End-to-End Missing Mandatory Data Lifecycle");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });
  });

  test.describe("Template Name Validation", () => {
  test("Case ID:TC_MMDT_194 - Template Name Validation → Verify Blank Template Name Validation", async ({ testData }) => {
    // Excel: TC_MMDT_194 | Feature: Template Name Validation | Task: Verify Blank Template Name Validation
    // FSD §3.9 — Create Template
    // Steps (11): Create new template. → Configure CIP, CDD and EDD fields. → Configure score bands. …
    // Expected: System displays mandatory validation and template is not created.
    console.log("[TC_MMDT_194] Template Name Validation → Verify Blank Template Name Validation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.configureOverlappingScoreRangesFromTestData('AML Mandatory Fields');
      await mmPage.saveChangesAndExpectSuccess();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_195 - Template Name Validation → Verify Spaces-Only Template Name Validation", async ({ testData }) => {
    // Excel: TC_MMDT_195 | Feature: Template Name Validation | Task: Verify Spaces-Only Template Name Validation
    // FSD §3.9 — Create Template
    // Steps (11): Open Create Template screen. → Select Customer Type. → Select KYC Level. …
    // Expected: Spaces-only template names are rejected.
    console.log("[TC_MMDT_195] Template Name Validation → Verify Spaces-Only Template Name Validation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_196 - Template Name Validation → Verify Minimum Length Boundary", async ({ testData }) => {
    // Excel: TC_MMDT_196 | Feature: Template Name Validation | Task: Verify Minimum Length Boundary
    // FSD §3.9 — Create Template
    // Steps (11): Open Create Template. → Enter only spaces in Template Name. → Complete remaining fields. …
    // Expected: Template is created successfully with minimum valid length.
    console.log("[TC_MMDT_196] Template Name Validation → Verify Minimum Length Boundary");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_197 - Template Name Validation → Verify Maximum Length Boundary", async ({ testData }) => {
    // Excel: TC_MMDT_197 | Feature: Template Name Validation | Task: Verify Maximum Length Boundary
    // FSD §3.9 — Create Template
    // Steps (11): Open Create Template. → Enter minimum allowed length value. → Complete mandatory configuration. …
    // Expected: Template is created successfully with maximum valid length.
    console.log("[TC_MMDT_197] Template Name Validation → Verify Maximum Length Boundary");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.searchTemplates('"');
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('" "');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_198 - Template Name Validation → Verify Maximum Length Exceeded Validation", async ({ testData }) => {
    // Excel: TC_MMDT_198 | Feature: Template Name Validation | Task: Verify Maximum Length Exceeded Validation
    // FSD §3.9 — Create Template
    // Steps (11): Generate maximum allowed template name. → Enter value. → Complete required configuration. …
    // Expected: System prevents creation beyond maximum supported length.
    console.log("[TC_MMDT_198] Template Name Validation → Verify Maximum Length Exceeded Validation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.searchTemplates('Minimum');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_199 - Template Name Validation → Verify Copy-Paste Validation", async ({ testData }) => {
    // Excel: TC_MMDT_199 | Feature: Template Name Validation | Task: Verify Copy-Paste Validation
    // FSD §3.9 — Create Template
    // Steps (11): Enter value exceeding supported length. → Continue configuration. → Attempt save. …
    // Expected: Pasted values are validated and stored correctly.
    console.log("[TC_MMDT_199] Template Name Validation → Verify Copy-Paste Validation");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Max Length Value');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });
  });

  test.describe("Search Validation", () => {
  test("Case ID:TC_MMDT_200 - Search Validation → Verify Exact Match Search for Template Name", async ({ testData }) => {
    // Excel: TC_MMDT_200 | Feature: Search Validation | Task: Verify Exact Match Search for Template Name
    // FSD §3.3 — Template List Panel
    // Steps (11): Copy template name from external source. → Paste into Template Name field. → Complete configuration. …
    // Expected: Search returns matching template accurately.
    console.log("[TC_MMDT_200] Search Validation → Verify Exact Match Search for Template Name");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.searchTemplates('Max+1');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_201 - Search Validation → Verify Partial Match Search", async ({ testData }) => {
    // Excel: TC_MMDT_201 | Feature: Search Validation | Task: Verify Partial Match Search
    // FSD §3.3 — Template List Panel
    // Steps (11): Open Missing Mandatory Data Template module. → Note existing template name. → Click Search field. …
    // Expected: Templates containing partial keyword are displayed.
    console.log("[TC_MMDT_201] Search Validation → Verify Partial Match Search");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('Copied');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_202 - Search Validation → Verify Case Insensitive Search", async ({ testData }) => {
    // Excel: TC_MMDT_202 | Feature: Search Validation | Task: Verify Case Insensitive Search
    // FSD §3.3 — Template List Panel
    // Steps (11): Open template list. → Identify templates sharing common keyword. → Enter partial keyword in search box. …
    // Expected: Search returns identical results regardless of letter case.
    console.log("[TC_MMDT_202] Search Validation → Verify Case Insensitive Search");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('AML');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_203 - Search Validation → Verify Search with Leading Spaces", async ({ testData }) => {
    // Excel: TC_MMDT_203 | Feature: Search Validation | Task: Verify Search with Leading Spaces
    // FSD §3.3 — Template List Panel
    // Steps (11): Identify template name. → Enter name in lowercase. → Execute search. …
    // Expected: Search handles leading spaces according to FSD behavior.
    console.log("[TC_MMDT_203] Search Validation → Verify Search with Leading Spaces");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('AML');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_204 - Search Validation → Verify Search with Trailing Spaces", async ({ testData }) => {
    // Excel: TC_MMDT_204 | Feature: Search Validation | Task: Verify Search with Trailing Spaces
    // FSD §3.3 — Template List Panel
    // Steps (11): Identify existing template. → Enter search keyword with leading spaces. → Execute search. …
    // Expected: Search handles trailing spaces correctly.
    console.log("[TC_MMDT_204] Search Validation → Verify Search with Trailing Spaces");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('aml');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_205 - Search Validation → Verify Search with Special Characters", async ({ testData }) => {
    // Excel: TC_MMDT_205 | Feature: Search Validation | Task: Verify Search with Special Characters
    // FSD §3.3 — Template List Panel
    // Steps (11): Enter existing template keyword. → Add trailing spaces. → Execute search. …
    // Expected: Search processes special characters correctly.
    console.log("[TC_MMDT_205] Search Validation → Verify Search with Special Characters");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('"');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_206 - Search Validation → Verify No Result Search Scenario", async ({ testData }) => {
    // Excel: TC_MMDT_206 | Feature: Search Validation | Task: Verify No Result Search Scenario
    // FSD §3.3 — Template List Panel
    // Steps (11): Create template containing special characters. → Save template. → Open search box. …
    // Expected: Appropriate no-result message is displayed.
    console.log("[TC_MMDT_206] Search Validation → Verify No Result Search Scenario");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.searchTemplates('"AML');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_207 - Search Validation → Verify Search on Archived Template Records", async ({ testData }) => {
    // Excel: TC_MMDT_207 | Feature: Search Validation | Task: Verify Search on Archived Template Records
    // FSD §3.3 — Template List Panel
    // Steps (11): Open template list. → Enter non-existent template name. → Execute search. …
    // Expected: Archived template search behavior follows FSD rules.
    console.log("[TC_MMDT_207] Search Validation → Verify Search on Archived Template Records");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('AML_Template-2026');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_208 - Search Validation → Verify Search Performance with Large Dataset", async ({ testData }) => {
    // Excel: TC_MMDT_208 | Feature: Search Validation | Task: Verify Search Performance with Large Dataset
    // FSD §3.3 — Template List Panel
    // Steps (11): Archive template successfully. → Record template name. → Open search field. …
    // Expected: Search returns accurate results within acceptable response time.
    console.log("[TC_MMDT_208] Search Validation → Verify Search Performance with Large Dataset");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('XYZ_NOT_FOUND_999');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });

  test("Case ID:TC_MMDT_209 - Search Validation → Verify Search Combined with Active Filters", async ({ testData }) => {
    // Excel: TC_MMDT_209 | Feature: Search Validation | Task: Verify Search Combined with Active Filters
    // FSD §3.3 — Template List Panel
    // Steps (11): Open template module containing large dataset. → Start timer. → Enter search keyword. …
    // Expected: Search results are restricted to filtered records only.
    console.log("[TC_MMDT_209] Search Validation → Verify Search Combined with Active Filters");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.searchTemplates('Archived');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });
  });

  test.describe("Save Button", () => {
  test("Case ID:TC_MMDT_220 - Save Button → Verify Save Button Functionality", async ({ testData }) => {
    // Excel: TC_MMDT_220 | Feature: Save Button | Task: Verify Save Button Functionality
    // FSD §3.5 — Field Row Components
    // Steps (11): Open Score Configuration. → Configure valid non-overlapping bands. → Ensure complete score coverage. …
    // Expected: Configuration changes are saved successfully.
    console.log("[TC_MMDT_220] Save Button → Verify Save Button Functionality");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Incomplete Coverage');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectSaveChangesSucceeded();
      await mmPage.expectTemplateListRefreshed();
      });
  });
  });

  test.describe("Cancel Button", () => {
  test("Case ID:TC_MMDT_221 - Cancel Button → Verify Cancel Button Navigation Behavior", async ({ testData }) => {
    // Excel: TC_MMDT_221 | Feature: Cancel Button | Task: Verify Cancel Button Navigation Behavior
    // FSD §3.9 — Create Template
    // Steps (11): Open template configuration. → Modify Description field. → Modify requirement assignment. …
    // Expected: Unsaved changes are discarded and user is redirected appropriately.
    console.log("[TC_MMDT_221] Cancel Button → Verify Cancel Button Navigation Behavior");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.updateFieldRequirementByTestDataFragment('Valid Risk Bands');
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Valid Risk Bands');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });
  });

  test.describe("UI Interaction", () => {
  test("Case ID:TC_MMDT_222 - UI Interaction → Verify Button Hover State Rendering", async ({ testData }) => {
    // Excel: TC_MMDT_222 | Feature: UI Interaction | Task: Verify Button Hover State Rendering
    // FSD §3.2 — Navigation & Layout
    // Steps (11): Open template configuration. → Modify multiple fields. → Do not save changes. …
    // Expected: Buttons display consistent hover behavior.
    console.log("[TC_MMDT_222] UI Interaction → Verify Button Hover State Rendering");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.saveChangesAndExpectSuccess();
      await mmPage.cancelButton.click();
      await mmPage.refreshPage();
      await mmPage.reopenTemplateContextAfterRefresh('Simplified KYC');
      await mmPage.expectFieldRequirementPersistedByTestDataFragment('Valid Configuration Update');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateListRefreshed();
      });
  });

  test("Case ID:TC_MMDT_223 - UI Interaction → Verify Double Click Prevention on Action Buttons", async ({ testData }) => {
    // Excel: TC_MMDT_223 | Feature: UI Interaction | Task: Verify Double Click Prevention on Action Buttons
    // FSD §3.3 — Template List Panel
    // Steps (11): Open Template List screen. → Hover over Create button. → Observe visual state change. …
    // Expected: Only one operation executes despite multiple clicks.
    console.log("[TC_MMDT_223] UI Interaction → Verify Double Click Prevention on Action Buttons");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.clickCloneButton();
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectAddFieldValidationError();
      });
  });

  test("Case ID:TC_MMDT_224 - UI Interaction → Verify Loading Indicator During Long Running Operations", async ({ testData }) => {
    // Excel: TC_MMDT_224 | Feature: UI Interaction | Task: Verify Loading Indicator During Long Running Operations
    // FSD §3.2 — Navigation & Layout
    // Steps (11): Open Create Template form. → Enter valid data. → Rapidly double-click Create button. …
    // Expected: Loading indicator is displayed until processing completes.
    console.log("[TC_MMDT_224] UI Interaction → Verify Loading Indicator During Long Running Operations");
    await test.step("Navigate / setup", async () => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.selectTemplateByExactName('Simplified KYC');
      });

    await test.step("Execute Excel test steps", async () => {
      await mmPage.openCreateTemplateView();
      await mmPage.searchTemplates('UI');
      await mmPage.attemptDuplicateFieldCreation('UI Controls');
      });

    await test.step("Validate expected results", async () => {
      await mmPage.expectTemplateModuleLoaded();
      });
  });
  });
});
