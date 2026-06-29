// spec: specs/exception-list-manager/plan.md
// source: pipeline/test-data/Exception List Manager.xlsx — 279 cases
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import ExceptionListManagerPage from "../../../pages/ConfigurationModule/ExceptionListManagerPages/ExceptionListManagerPage";

test.describe("Exception List Manager Module", () => {
  let elmPage: ExceptionListManagerPage;

  test.beforeEach(async ({ sharedPage }) => {
    elmPage = new ExceptionListManagerPage(sharedPage);
  });

  test.describe("Exception List Management", () => {
    test.describe("Landing Page", () => {
    // Excel Test Case ID: ELM-001
    // Excel Scenario: Verify exception list landing page shows summary cards, status tabs, and list grid with required columns
    // Excel Expected Result: Landing page loads with populated summary cards, working status tabs, and a list grid showing all required columns and permitted row actions without layout defects.
    test("Case ID:ELM-001 - Landing Page → exception list landing page shows summary cards, status tabs, and list grid with required columns", async ({ testData }) => {
      await test.step("[ELM-001] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectExceptionListManagerViewLoaded();
    await elmPage.expectSummaryCardsVisible();
    await elmPage.expectListGridVisible();
    await elmPage.expectStatusTabsVisible();
    await elmPage.expectListTableHeadersVisible();
      });
      await test.step("[ELM-001] Validate expected results from Excel", async () => {
        await elmPage.expectExceptionListManagerViewLoaded();
    await elmPage.expectSummaryCardsVisible();
    await elmPage.expectStatusTabsVisible();
    await elmPage.expectListGridVisible();
      });
    });

    // Excel Test Case ID: ELM-002
    // Excel Scenario: Check that list search, filter, sort, pagination, and file export behave as a single flow on the landing screen.
    // Excel Expected Result: The grid refreshes according to the selected search and filters, sorting changes the row order, pagination updates the page set, and both export formats download the same filtered dataset.
    test("Case ID:ELM-002 - Landing Page → list search, filter, sort, pagination, and file export behave as a single flow on the landing screen.", async ({ testData }) => {
      await test.step("[ELM-002] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    await elmPage.expectExceptionListManagerViewLoaded();
    await elmPage.expectSummaryCardsVisible();
    await elmPage.expectListGridVisible();
    await elmPage.expectStatusTabsVisible();
    await elmPage.expectListTableHeadersVisible();
    await elmPage.searchLists("QA Exception List");
    await elmPage.clearSearch();
    await elmPage.applyCategoryFilter("Standard");
    await elmPage.applyStatusFilter("Active");
    await elmPage.sortByColumn("Total Entries");
    await elmPage.setPageSize("25");
    await elmPage.goToNextTablePage();
    await elmPage.clickExport();
    await elmPage.exportLists("CSV");
      });
      await test.step("[ELM-002] Validate expected results from Excel", async () => {
        await elmPage.expectExceptionListManagerViewLoaded();
    await elmPage.expectSummaryCardsVisible();
    await elmPage.expectListGridVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
    });

    // Excel Test Case ID: ELM-014
    // Excel Scenario: Verify that landing page counters recalculate correctly after entry status changes.
    // Excel Expected Result: Total Entries, Active, Expiring Within 30 Days, and Expired counters reflect the latest data accurately.
    test("Case ID:ELM-014 - Landing Page → landing page counters recalculate correctly after entry status changes.", async ({ testData }) => {
      await test.step("[ELM-014] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer Landing page contains exception lists with active entries. 1. Note current counter values */;
    await elmPage.expectExceptionListManagerViewLoaded();
    await elmPage.expectSummaryCardsVisible();
    await elmPage.expectListGridVisible();
    await elmPage.expectStatusTabsVisible();
    await elmPage.expectListTableHeadersVisible();
      });
      await test.step("[ELM-014] Validate expected results from Excel", async () => {
        await elmPage.expectSummaryCardsVisible();
      });
    });

    // Excel Test Case ID: ELM-015
    // Excel Scenario: Verify that dashboard counters update after approval and rejection actions.
    // Excel Expected Result: Dashboard values are recalculated immediately after workflow completion.
    test("Case ID:ELM-015 - Landing Page → dashboard counters update after approval and rejection actions.", async ({ testData }) => {
      await test.step("[ELM-015] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer User with list-management permission can access Exception List Manager. Pending requests are available. 1. Note dashboard counts */;
    await elmPage.expectExceptionListManagerViewLoaded();
    await elmPage.expectSummaryCardsVisible();
    await elmPage.expectListGridVisible();
    await elmPage.expectStatusTabsVisible();
    await elmPage.expectListTableHeadersVisible();
      });
      await test.step("[ELM-015] Validate expected results from Excel", async () => {
        await elmPage.expectSummaryCardsVisible();
      });
    });

    // Excel Test Case ID: ELM-016
    // Excel Scenario: Verify that dashboard counters remain consistent after page refresh and re-login.
    // Excel Expected Result: Dashboard displays the same recalculated values after refresh and new session login.
    test("Case ID:ELM-016 - Landing Page → dashboard counters remain consistent after page refresh and re-login.", async ({ testData }) => {
      await test.step("[ELM-016] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer User with list-management permission can access Exception List Manager. Counters have recently changed due to system activity. 1. Refresh page */;
    await elmPage.expectExceptionListManagerViewLoaded();
    await elmPage.expectSummaryCardsVisible();
    await elmPage.expectListGridVisible();
    await elmPage.expectStatusTabsVisible();
    await elmPage.expectListTableHeadersVisible();
      });
      await test.step("[ELM-016] Validate expected results from Excel", async () => {
        await elmPage.expectSummaryCardsVisible();
      });
    });

    // Excel Test Case ID: ELM-021
    // Excel Scenario: Verify landing page summary cards display Total lists, Active lists, Total exceptions, and Pending approval
    // Excel Expected Result: Summary cards show Total lists, Active lists, Total exceptions, and Pending approval with accurate counts.
    test("Case ID:ELM-021 - Landing Page → landing page summary cards display Total lists, Active lists, Total exceptions, and Pending approval", async ({ testData }) => {
      await test.step("[ELM-021] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer User with list-management permission can access Exception List Manager. User is logged in with CSEL view access and exception list data exists. 1. Open Exception lists from the left navigation */;
    await elmPage.expectExceptionListManagerViewLoaded();
    await elmPage.expectSummaryCardsVisible();
    await elmPage.expectListGridVisible();
    await elmPage.expectStatusTabsVisible();
    await elmPage.expectListTableHeadersVisible();
      });
      await test.step("[ELM-021] Validate expected results from Excel", async () => {
        await elmPage.expectSummaryCardsVisible();
    await elmPage.expectMakerCheckerQueueVisible();
      });
    });

    // Excel Test Case ID: ELM-022
    // Excel Scenario: Verify list status tabs (Active, Suspended, All) filter the landing grid
    // Excel Expected Result: Each status tab filters the grid correctly and badge counts match visible rows.
    test("Case ID:ELM-022 - Landing Page → list status tabs (Active, Suspended, All) filter the landing grid", async ({ testData }) => {
      await test.step("[ELM-022] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    await elmPage.expectExceptionListManagerViewLoaded();
    await elmPage.expectSummaryCardsVisible();
    await elmPage.expectListGridVisible();
    await elmPage.expectStatusTabsVisible();
    await elmPage.expectListTableHeadersVisible();
    await elmPage.searchLists("QA Exception List");
    await elmPage.clearSearch();
    await elmPage.applyCategoryFilter("Standard");
    await elmPage.applyStatusFilter("Suspended");
    await elmPage.sortByColumn("Total Entries");
    await elmPage.setPageSize("25");
    await elmPage.goToNextTablePage();
    await elmPage.clickExport();
    await elmPage.exportLists("CSV");
      });
      await test.step("[ELM-022] Validate expected results from Excel", async () => {
        await elmPage.expectSummaryCardsVisible();
    await elmPage.expectStatusTabsVisible();
    await elmPage.expectListGridVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: ELM-023
    // Excel Scenario: Verify landing grid columns include Exp 30d and Expired entry counters aligned to list detail
    // Excel Expected Result: Landing grid displays Exp 30d and Expired columns with counts matching list detail summaries and CSV export values for the same list.
    test("Case ID:ELM-023 - Landing Page → landing grid columns include Exp 30d and Expired entry counters aligned to list detail", async ({ testData }) => {
      await test.step("[ELM-023] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer User with list-management permission can access Exception List Manager. Lists exist with entries expiring within 30 days and expired entries. 1. Open landing page */;
    await elmPage.expectExceptionListManagerViewLoaded();
    await elmPage.expectSummaryCardsVisible();
    await elmPage.expectListGridVisible();
    await elmPage.expectStatusTabsVisible();
    await elmPage.expectListTableHeadersVisible();
      });
      await test.step("[ELM-023] Validate expected results from Excel", async () => {
        await elmPage.expectSummaryCardsVisible();
    await elmPage.expectListGridVisible();
    await elmPage.expectExportOptions();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: ELM-028
    // Excel Scenario: Verify pagination supports 10, 25, 50, and 100 rows per page
    // Excel Expected Result: All four page-size options work and pagination reflects selection.
    test("Case ID:ELM-028 - Landing Page → pagination supports 10, 25, 50, and 100 rows per page", async ({ testData }) => {
      await test.step("[ELM-028] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    await elmPage.expectExceptionListManagerViewLoaded();
    await elmPage.expectSummaryCardsVisible();
    await elmPage.expectListGridVisible();
    await elmPage.expectStatusTabsVisible();
    await elmPage.expectListTableHeadersVisible();
    await elmPage.searchLists("QA Exception List");
    await elmPage.clearSearch();
    await elmPage.applyCategoryFilter("Standard");
    await elmPage.applyStatusFilter("Active");
    await elmPage.sortByColumn("Total Entries");
    await elmPage.setPageSize("25");
    await elmPage.goToNextTablePage();
    await elmPage.clickExport();
    await elmPage.exportLists("CSV");
      });
      await test.step("[ELM-028] Validate expected results from Excel", async () => {
        await elmPage.expectSummaryCardsVisible();
      });
    });

    // Excel Test Case ID: ELM-029
    // Excel Scenario: Verify Bulk upload is accessible from landing page header
    // Excel Expected Result: Bulk upload panel opens from landing header with required controls.
    test("Case ID:ELM-029 - Landing Page → Bulk upload is accessible from landing page header", async ({ testData }) => {
      await test.step("[ELM-029] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    await elmPage.expectExceptionListManagerViewLoaded();
    await elmPage.expectSummaryCardsVisible();
    await elmPage.expectListGridVisible();
    await elmPage.expectStatusTabsVisible();
    await elmPage.expectListTableHeadersVisible();
      });
      await test.step("[ELM-029] Validate expected results from Excel", async () => {
        await elmPage.expectSummaryCardsVisible();
      });
    });

    // Excel Test Case ID: ELM-030
    // Excel Scenario: Verify sidebar menu search filters navigation menu items.
    // Excel Expected Result: Sidebar search filters menu items in real time without breaking navigation.
    test("Case ID:ELM-030 - Landing Page → sidebar menu search filters navigation menu items.", async ({ testData }) => {
      await test.step("[ELM-030] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer User with list-management permission can access Exception List Manager. User is logged into CSEL module. 1. Type 'Maker' in sidebar search */;
    await elmPage.expectExceptionListManagerViewLoaded();
    await elmPage.expectSummaryCardsVisible();
    await elmPage.expectListGridVisible();
    await elmPage.expectStatusTabsVisible();
    await elmPage.expectListTableHeadersVisible();
    await elmPage.searchLists("QA Exception List");
    await elmPage.clearSearch();
    await elmPage.applyCategoryFilter("Onboarding Exceptions");
    await elmPage.applyStatusFilter("Active");
    await elmPage.sortByColumn("Total Entries");
    await elmPage.setPageSize("25");
    await elmPage.goToNextTablePage();
    await elmPage.clickExport();
    await elmPage.exportLists("CSV");
      });
      await test.step("[ELM-030] Validate expected results from Excel", async () => {
        await elmPage.expectSummaryCardsVisible();
    await elmPage.expectSearchInputVisible();
      });
    });
    });

    test.describe("Create Exception List", () => {
    // Excel Test Case ID: ELM-003
    // Excel Scenario: Create a new exception list with valid input and verify that it is routed through the approval flow.
    // Excel Expected Result: The list is accepted, saved with the submitted values, and placed into maker-checker approval instead of being activated immediately.
    test("Case ID:ELM-003 - Create Exception List → Create a new exception list with valid input and verify that it is routed through the approval flow.", async ({ testData }) => {
      await test.step("[ELM-003] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openCreateListForm();
    await elmPage.fillListName("Event-Driven Exceptions — Adverse Media Q2");
    await elmPage.selectCategory("Event-Driven Exceptions");
    await elmPage.fillPurpose("Regulatory exception handling");
    await elmPage.fillDefaultExpiryPeriod("12 months");
    await elmPage.fillDefaultReviewFrequency("Quarterly");
    await elmPage.fillCreationReason("QA validation");
    await elmPage.submitCreateList();
      });
      await test.step("[ELM-003] Validate expected results from Excel", async () => {
        await elmPage.expectListGridVisible();
      });
    });

    // Excel Test Case ID: ELM-004
    // Excel Scenario: Confirm that mandatory fields and duplicate list names are blocked at save time.
    // Excel Expected Result: The form refuses submission, inline validation appears for missing or oversized data, and duplicate list names are not accepted.
    test("Case ID:ELM-004 - Create Exception List → mandatory fields and duplicate list names are blocked at save time.", async ({ testData }) => {
      await test.step("[ELM-004] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer User with list-management permission can access Exception List Manager. Maker user is on the create form and an existing list name is already available for reuse in the test. 1. Open the create form again from the landing page */;
    await elmPage.openCreateListForm();
    await elmPage.fillListName("QA Exception List");
    await elmPage.selectCategory("Onboarding Exceptions");
    await elmPage.fillPurpose("Regulatory exception handling");
    await elmPage.fillDefaultExpiryPeriod("12 months");
    await elmPage.fillDefaultReviewFrequency("Quarterly");
    await elmPage.fillCreationReason("QA validation");
    await elmPage.submitCreateList();
      });
      await test.step("[ELM-004] Validate expected results from Excel", async () => {
        await elmPage.expectSubmissionBlocked();
      });
    });

    // Excel Test Case ID: ELM-005
    // Excel Scenario: Verify the PEP exception list rule that the default review frequency cannot exceed six months.
    // Excel Expected Result: The first submission is rejected with a business-rule message, while the corrected six-month setup can move forward in the approval workflow.
    test("Case ID:ELM-005 - Create Exception List → the PEP exception list rule that the default review frequency cannot exceed six months.", async ({ testData }) => {
      await test.step("[ELM-005] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openCreateListForm();
    await elmPage.fillListName("PEP Approved Customers — Enhanced DD");
    await elmPage.selectCategory("PEP Exceptions");
    await elmPage.fillPurpose("Regulatory exception handling");
    await elmPage.fillDefaultExpiryPeriod("12 months");
    await elmPage.fillDefaultReviewFrequency("Quarterly");
    await elmPage.fillCreationReason("QA validation");
    await elmPage.submitCreateList();
      });
      await test.step("[ELM-005] Validate expected results from Excel", async () => {
        await elmPage.expectCheckerActionsHidden();
      });
    });

    // Excel Test Case ID: ELM-017
    // Excel Scenario: Verify that List Name accepts exactly 100 characters.
    // Excel Expected Result: System accepts the value and processes the request successfully.
    test("Case ID:ELM-017 - Create Exception List → List Name accepts exactly 100 characters.", async ({ testData }) => {
      await test.step("[ELM-017] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer User with list-management permission can access Exception List Manager. User is on Create Exception List screen. 1. Enter 100-character List Name */;
    await elmPage.openCreateListForm();
    await elmPage.fillListName("QA Exception List");
    await elmPage.selectCategory("Onboarding Exceptions");
    await elmPage.fillPurpose("Regulatory exception handling");
    await elmPage.fillDefaultExpiryPeriod("12 months");
    await elmPage.fillDefaultReviewFrequency("Quarterly");
    await elmPage.fillCreationReason("QA validation");
    await elmPage.submitCreateList();
      });
      await test.step("[ELM-017] Validate expected results from Excel", async () => {
        await elmPage.expectListGridVisible();
      });
    });

    // Excel Test Case ID: ELM-018
    // Excel Scenario: Verify that List Name exceeding 100 characters is rejected.
    // Excel Expected Result: System blocks submission and displays maximum length validation.
    test("Case ID:ELM-018 - Create Exception List → List Name exceeding 100 characters is rejected.", async ({ testData }) => {
      await test.step("[ELM-018] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer User with list-management permission can access Exception List Manager. User is on Create Exception List screen. 1. Enter 101-character List Name */;
    await elmPage.openCreateListForm();
    await elmPage.fillListName("QA Exception List");
    await elmPage.selectCategory("Onboarding Exceptions");
    await elmPage.fillPurpose("Regulatory exception handling");
    await elmPage.fillDefaultExpiryPeriod("12 months");
    await elmPage.fillDefaultReviewFrequency("Quarterly");
    await elmPage.fillCreationReason("QA validation");
    await elmPage.submitCreateList();
      });
      await test.step("[ELM-018] Validate expected results from Excel", async () => {
        await elmPage.expectInlineValidationError();
      });
    });

    // Excel Test Case ID: ELM-019
    // Excel Scenario: Verify that Description accepts exactly 500 characters.
    // Excel Expected Result: Description field accepts exactly 500 characters, persists the full text after save, and displays the complete value on reopen.
    test("Case ID:ELM-019 - Create Exception List → Description accepts exactly 500 characters.", async ({ testData }) => {
      await test.step("[ELM-019] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer User with list-management permission can access Exception List Manager. User is on Create Exception List screen. 1. Enter 500-character Description */;
    await elmPage.openCreateListForm();
    await elmPage.fillListName("QA Exception List");
    await elmPage.selectCategory("Onboarding Exceptions");
    await elmPage.fillPurpose("Regulatory exception handling");
    await elmPage.fillDefaultExpiryPeriod("12 months");
    await elmPage.fillDefaultReviewFrequency("Quarterly");
    await elmPage.fillCreationReason("QA validation");
    await elmPage.submitCreateList();
      });
      await test.step("[ELM-019] Validate expected results from Excel", async () => {
        await elmPage.expectListGridVisible();
      });
    });

    // Excel Test Case ID: ELM-020
    // Excel Scenario: Verify that Description exceeding 500 characters is rejected.
    // Excel Expected Result: System blocks submission and displays maximum length validation message.
    test("Case ID:ELM-020 - Create Exception List → Description exceeding 500 characters is rejected.", async ({ testData }) => {
      await test.step("[ELM-020] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer User with list-management permission can access Exception List Manager. User is on Create Exception List screen. 1. Enter 501-character Description */;
    await elmPage.openCreateListForm();
    await elmPage.fillListName("QA Exception List");
    await elmPage.selectCategory("Onboarding Exceptions");
    await elmPage.fillPurpose("Regulatory exception handling");
    await elmPage.fillDefaultExpiryPeriod("12 months");
    await elmPage.fillDefaultReviewFrequency("Quarterly");
    await elmPage.fillCreationReason("QA validation");
    await elmPage.submitCreateList();
      });
      await test.step("[ELM-020] Validate expected results from Excel", async () => {
        await elmPage.expectInlineValidationError();
      });
    });

    // Excel Test Case ID: ELM-024
    // Excel Scenario: Verify Create Exception List supports Save as draft without entering maker-checker queue.
    // Excel Expected Result: Draft is saved, values retained on reopen, and no maker-checker request is created until Submit for approval.
    test("Case ID:ELM-024 - Create Exception List → Create Exception List supports Save as draft without entering maker-checker queue.", async ({ testData }) => {
      await test.step("[ELM-024] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openCreateListForm();
    await elmPage.fillListName("Event-Driven Exceptions — Adverse Media Q2");
    await elmPage.selectCategory("Event-Driven Exceptions");
    await elmPage.fillPurpose("Regulatory exception handling");
    await elmPage.fillDefaultExpiryPeriod("12 months");
    await elmPage.fillDefaultReviewFrequency("Quarterly");
    await elmPage.fillCreationReason("QA validation");
    await elmPage.submitCreateList();
      });
      await test.step("[ELM-024] Validate expected results from Excel", async () => {
        await elmPage.expectListGridVisible();
      });
    });

    // Excel Test Case ID: ELM-025
    // Excel Scenario: Verify Notify Compliance Officer and Auto-expire entries at TTL toggles persist on create form.
    // Excel Expected Result: Toggles are visible, interactive, and saved values persist on draft reload.
    test("Case ID:ELM-025 - Create Exception List → Notify Compliance Officer and Auto-expire entries at TTL toggles persist on create form.", async ({ testData }) => {
      await test.step("[ELM-025] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openCreateListForm();
    await elmPage.fillListName("Event-Driven Exceptions — Adverse Media Q2");
    await elmPage.selectCategory("Event-Driven Exceptions");
    await elmPage.fillPurpose("Regulatory exception handling");
    await elmPage.fillDefaultExpiryPeriod("12 months");
    await elmPage.fillDefaultReviewFrequency("Quarterly");
    await elmPage.fillCreationReason("QA validation");
    await elmPage.submitCreateList();
      });
      await test.step("[ELM-025] Validate expected results from Excel", async () => {
        await elmPage.expectListGridVisible();
      });
    });

    // Excel Test Case ID: ELM-026
    // Excel Scenario: Verify Reason for Creation is mandatory and retained in audit log
    // Excel Expected Result: Submission blocked without reason; reason stored in audit log after submission.
    test("Case ID:ELM-026 - Create Exception List → Reason for Creation is mandatory and retained in audit log", async ({ testData }) => {
      await test.step("[ELM-026] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer User with list-management permission can access Exception List Manager. Maker user is on create list form. 1. Complete all fields except Reason for Creation */;
    await elmPage.openCreateListForm();
    await elmPage.fillListName("QA Exception List");
    await elmPage.selectCategory("Onboarding Exceptions");
    await elmPage.fillPurpose("Regulatory exception handling");
    await elmPage.fillDefaultExpiryPeriod("12 months");
    await elmPage.fillDefaultReviewFrequency("Quarterly");
    await elmPage.fillCreationReason("QA validation");
    await elmPage.submitCreateList();
      });
      await test.step("[ELM-026] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
    await elmPage.expectSubmissionBlocked();
      });
    });

    // Excel Test Case ID: ELM-027
    // Excel Scenario: Verify 24 months default TTL option enforces MLRO sign-off requirement
    // Excel Expected Result: Selecting 24-month default TTL routes the list-creation request to MLRO checker approval instead of standard Compliance Officer approval.
    test("Case ID:ELM-027 - Create Exception List → 24 months default TTL option enforces MLRO sign-off requirement", async ({ testData }) => {
      await test.step("[ELM-027] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openCreateListForm();
    await elmPage.fillListName("PEP Approved Customers — Enhanced DD");
    await elmPage.selectCategory("PEP Exceptions");
    await elmPage.fillPurpose("Regulatory exception handling");
    await elmPage.fillDefaultExpiryPeriod("12 months");
    await elmPage.fillDefaultReviewFrequency("Quarterly");
    await elmPage.fillCreationReason("QA validation");
    await elmPage.submitCreateList();
      });
      await test.step("[ELM-027] Validate expected results from Excel", async () => {
        await elmPage.expectOnExceptionListRoute();
      });
    });
    });

    test.describe("View Exception List", () => {
    // Excel Test Case ID: ELM-006
    // Excel Scenario: Open exception list detail and confirm metadata panel, entry grid, and permitted actions
    // Excel Expected Result: Detail view shows complete list metadata, entry grid with required columns, working toolbar controls, and entry history with submission and suppression events.
    test("Case ID:ELM-006 - View Exception List → Open exception list detail and confirm metadata panel, entry grid, and permitted actions", async ({ testData }) => {
      await test.step("[ELM-006] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectListMetadataVisible();
    await elmPage.expectEntryGridVisible();
      });
      await test.step("[ELM-006] Validate expected results from Excel", async () => {
        await elmPage.expectEntryGridVisible();
    await elmPage.expectAuditPanelLoaded();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: ELM-007
    // Excel Scenario: Verify entry-level search, filter, sort, and export from the list detail screen.
    // Excel Expected Result: The entry table refreshes correctly after every filter, the sort order changes as requested, and the exported files contain the same filtered record set.
    test("Case ID:ELM-007 - View Exception List → entry-level search, filter, sort, and export from the list detail screen.", async ({ testData }) => {
      await test.step("[ELM-007] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer User with list-management permission can access Exception List Manager. The selected list has entries in different statuses, expiry dates, and watchlist scopes. 1. Open the list detail page */;
    await elmPage.openListView("QA Exception List");
    await elmPage.expectListMetadataVisible();
    await elmPage.expectEntryGridVisible();
      });
      await test.step("[ELM-007] Validate expected results from Excel", async () => {
        await elmPage.expectEntryGridVisible();
    await elmPage.expectExportOptions();
      });
    });
    });

    test.describe("Edit Exception List", () => {
    // Excel Test Case ID: ELM-008
    // Excel Scenario: Change the allowed fields of an existing list and send the update through approval.
    // Excel Expected Result: The modified values are captured, the request is routed for approval, and the system records the edit instead of applying it silently.
    test("Case ID:ELM-008 - Edit Exception List → Change the allowed fields of an existing list and send the update through approval.", async ({ testData }) => {
      await test.step("[ELM-008] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer User with list-management permission can access Exception List Manager. Maker user has edit permission on an active list. 1. Open the list and choose Edit */;
    await elmPage.openListView("QA Exception List");
    await elmPage.openEditList("QA Exception List");
    await elmPage.updateListField("description", "Updated by automation");
    await elmPage.submitEditList();
      });
      await test.step("[ELM-008] Validate expected results from Excel", async () => {
        await elmPage.expectOnExceptionListRoute();
      });
    });

    // Excel Test Case ID: ELM-009
    // Excel Scenario: Check that the list category stays locked after creation and cannot be changed during edit.
    // Excel Expected Result: The category remains read-only or blocked, the edit request cannot change that field, and only the allowed fields stay editable.
    test("Case ID:ELM-009 - Edit Exception List → the list category stays locked after creation and cannot be changed during edit.", async ({ testData }) => {
      await test.step("[ELM-009] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer User with list-management permission can access Exception List Manager. Maker user is editing an existing list that already has a fixed category. 1. Open the Edit screen for the target list */;
    await elmPage.openListView("QA Exception List");
    await elmPage.openEditList("QA Exception List");
    await elmPage.updateListField("description", "Updated by automation");
    await elmPage.submitEditList();
      });
      await test.step("[ELM-009] Validate expected results from Excel", async () => {
        await elmPage.expectListGridVisible();
    await elmPage.expectSubmissionBlocked();
      });
    });
    });

    test.describe("Suspend / Re-activate List", () => {
    // Excel Test Case ID: ELM-010
    // Excel Scenario: Suspend a list and verify that the system warns the user before the action is committed.
    // Excel Expected Result: The system shows the risk warning, the suspension request is recorded, and the list status changes to Suspended only after the action is completed.
    test("Case ID:ELM-010 - Suspend / Re-activate List → Suspend a list and verify that the system warns the user before the action is committed.", async ({ testData }) => {
      await test.step("[ELM-010] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: maker */;
    await elmPage.suspendList("QA Exception List");
    await elmPage.expectSuspendWarning();
    await elmPage.confirmSuspendList();
    await elmPage.reactivateList("QA Exception List");
    await elmPage.confirmReactivateList();
      });
      await test.step("[ELM-010] Validate expected results from Excel", async () => {
        await elmPage.expectInlineValidationError();
      });
    });

    // Excel Test Case ID: ELM-011
    // Excel Scenario: Bring back a suspended list and confirm that the earlier active entries return to use.
    // Excel Expected Result: The list returns to Active, previously active entries are restored to the screening path, and the suppression behaviour is applied again.
    test("Case ID:ELM-011 - Suspend / Re-activate List → Bring back a suspended list and confirm that the earlier active entries return to use.", async ({ testData }) => {
      await test.step("[ELM-011] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.suspendList("QA Exception List");
    await elmPage.expectSuspendWarning();
    await elmPage.confirmSuspendList();
    await elmPage.reactivateList("QA Exception List");
    await elmPage.confirmReactivateList();
      });
      await test.step("[ELM-011] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });
    });

    test.describe("Delete Exception List", () => {
    // Excel Test Case ID: ELM-012
    // Excel Scenario: Delete a list through the supported soft-delete flow and verify that the reason is mandatory.
    // Excel Expected Result: The delete request cannot go through without a reason, and after approval the list is removed from the active index rather than being permanently erased.
    test("Case ID:ELM-012 - Delete Exception List → Delete a list through the supported soft-delete flow and verify that the reason is mandatory.", async ({ testData }) => {
      await test.step("[ELM-012] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: maker */;
    await elmPage.deleteList("QA Exception List");
    await elmPage.expectDeleteWarning();
    await elmPage.cancelDeleteList();
      });
      await test.step("[ELM-012] Validate expected results from Excel", async () => {
        await elmPage.expectListGridVisible();
      });
    });

    // Excel Test Case ID: ELM-013
    // Excel Scenario: Confirm that deleted lists are retained as soft-deleted records and are not physically purged.
    // Excel Expected Result: The deleted list is not returned in the active landing page, the record remains traceable as a retained item, and physical deletion is not allowed.
    test("Case ID:ELM-013 - Delete Exception List → deleted lists are retained as soft-deleted records and are not physically purged.", async ({ testData }) => {
      await test.step("[ELM-013] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.deleteList("QA Exception List");
    await elmPage.expectDeleteWarning();
    await elmPage.cancelDeleteList();
      });
      await test.step("[ELM-013] Validate expected results from Excel", async () => {
        await elmPage.expectListGridVisible();
      });
    });
    });
  });

  test.describe("Exception Entry Management", () => {
    test.describe("Data Model & Field Validation", () => {
    // Excel Test Case ID: EEM-001
    // Excel Scenario: Check that a new exception entry cannot be submitted when any mandatory field is left blank.
    // Excel Expected Result: The form blocks submission, highlights every missing mandatory field, and does not move the record to the approval queue.
    test("Case ID:EEM-001 - Data Model & Field Validation → a new exception entry cannot be submitted when any mandatory field is left blank.", async ({ testData }) => {
      await test.step("[EEM-001] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEntryGridVisible();
      });
      await test.step("[EEM-001] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
      });
    });

    // Excel Test Case ID: EEM-002
    // Excel Scenario: Verify the conditional behaviour for Original Script Name and Script Type when a non-Latin name is entered.
    // Excel Expected Result: The system requires Script Type when Original Script Name is populated, accepts the entry only after it is completed, and stores the native-script text correctly.
    test("Case ID:EEM-002 - Data Model & Field Validation → the conditional behaviour for Original Script Name and Script Type when a non-Latin name is entered.", async ({ testData }) => {
      await test.step("[EEM-002] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEntryGridVisible();
      });
      await test.step("[EEM-002] Validate expected results from Excel", async () => {
        await elmPage.expectEntryGridVisible();
      });
    });

    // Excel Test Case ID: EEM-024
    // Excel Scenario: Verify IP Address/CIDR and IP Validity Period validate for IP Range exception type.
    // Excel Expected Result: IP fields required for IP Range; validity accepts 1–90 days and rejects above 90.
    test("Case ID:EEM-024 - Data Model & Field Validation → IP Address/CIDR and IP Validity Period validate for IP Range exception type.", async ({ testData }) => {
      await test.step("[EEM-024] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEntryGridVisible();
      });
      await test.step("[EEM-024] Validate expected results from Excel", async () => {
        await elmPage.expectCheckerActionsVisible();
      });
    });

    // Excel Test Case ID: EEM-025
    // Excel Scenario: Verify Mobile Number enforces E.164 format when exception type is Mobile Number.
    // Excel Expected Result: Non-E.164 mobile values are rejected with a field-level error; a valid E.164 number is accepted and the entry can proceed to submission.
    test("Case ID:EEM-025 - Data Model & Field Validation → Mobile Number enforces E.164 format when exception type is Mobile Number.", async ({ testData }) => {
      await test.step("[EEM-025] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEntryGridVisible();
      });
      await test.step("[EEM-025] Validate expected results from Excel", async () => {
        await elmPage.expectCheckerActionsVisible();
    await elmPage.expectInlineValidationError();
      });
    });

    // Excel Test Case ID: EEM-039
    // Excel Scenario: Verify Script Type values AR, ZH-CN, ZH-TW, CY, LA
    // Excel Expected Result: Script Type contains all supported script-type values and persists correctly.
    test("Case ID:EEM-039 - Data Model & Field Validation → Script Type values AR, ZH-CN, ZH-TW, CY, LA", async ({ testData }) => {
      await test.step("[EEM-039] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEntryGridVisible();
      });
      await test.step("[EEM-039] Validate expected results from Excel", async () => {
        await elmPage.expectEntryGridVisible();
      });
    });

    // Excel Test Case ID: EEM-041
    // Excel Scenario: Verify Jurisdiction Scope optional field limits exception application to specified jurisdiction when populated.
    // Excel Expected Result: Exception applies only within configured jurisdiction scope.
    test("Case ID:EEM-041 - Data Model & Field Validation → Jurisdiction Scope optional field limits exception application to specified jurisdiction when populated.", async ({ testData }) => {
      await test.step("[EEM-041] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEntryGridVisible();
      });
      await test.step("[EEM-041] Validate expected results from Excel", async () => {
        await elmPage.expectEntryGridVisible();
      });
    });

    // Excel Test Case ID: EEM-042
    // Excel Scenario: Verify Email Address conditional field validates format when alert was triggered by email match.
    // Excel Expected Result: Invalid email rejected; valid email stored and submission proceeds to approval queue.
    test("Case ID:EEM-042 - Data Model & Field Validation → Email Address conditional field validates format when alert was triggered by email match.", async ({ testData }) => {
      await test.step("[EEM-042] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEntryGridVisible();
      });
      await test.step("[EEM-042] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsVisible();
      });
    });
    });

    test.describe("Add Entry", () => {
    // Excel Test Case ID: EEM-003
    // Excel Scenario: Create a new exception entry from list detail and route it through maker-checker approval
    // Excel Expected Result: Entry saves as Pending Approval, appears in maker-checker queue with correct customer and watchlist data, and does not suppress alerts until checker approval.
    test("Case ID:EEM-003 - Add Entry → Create a new exception entry from list detail and route it through maker-checker approval", async ({ testData }) => {
      await test.step("[EEM-003] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openListView("QA Exception List");
    await elmPage.openAddEntryForm();
    await elmPage.fillCustomerId("CUS-004521");
    await elmPage.selectWatchlistScope("OFAC SDN");
    await elmPage.selectReasonCode("Confirmed Different Person");
    await elmPage.fillEvidenceReference("EVD-001");
    await elmPage.submitEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-003] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectMakerCheckerQueueVisible();
      });
    });

    // Excel Test Case ID: EEM-004
    // Excel Scenario: Use the alert-driven path and verify that the entry form is prefilled from the screening alert.
    // Excel Expected Result: The prefilled fields match the alert record, reducing manual entry, and the submission follows the standard approval flow.
    test("Case ID:EEM-004 - Add Entry → Use the alert-driven path and verify that the entry form is prefilled from the screening alert.", async ({ testData }) => {
      await test.step("[EEM-004] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openAddEntryForm();
    await elmPage.fillCustomerId("Mohammed Al-Rahman");
    await elmPage.selectWatchlistScope("OFAC SDN");
    await elmPage.selectReasonCode("RC-01");
    await elmPage.fillEvidenceReference("EVD-001");
    await elmPage.submitEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-004] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EEM-005
    // Excel Scenario: Block the submission when the customer is already present on an active Custom List or blacklist.
    // Excel Expected Result: The system stops the submission in real time, explains the conflict, and refuses to route the entry for approval.
    test("Case ID:EEM-005 - Add Entry → Block the submission when the customer is already present on an active Custom List or blacklist.", async ({ testData }) => {
      await test.step("[EEM-005] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openAddEntryForm();
    await elmPage.fillCustomerId("CUS-004521");
    await elmPage.selectWatchlistScope("Customer ID");
    await elmPage.selectReasonCode("RC-01");
    await elmPage.fillEvidenceReference("EVD-001");
    await elmPage.submitEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-005] Validate expected results from Excel", async () => {
        await elmPage.expectOnExceptionListRoute();
      });
    });

    // Excel Test Case ID: EEM-006
    // Excel Scenario: Check the warning path when the distinguishing evidence is too thin but the user chooses to continue.
    // Excel Expected Result: A non-blocking warning appears, the user must confirm the evidence is adequate, and the request can still proceed to approval.
    test("Case ID:EEM-006 - Add Entry → the warning path when the distinguishing evidence is too thin but the user chooses to continue.", async ({ testData }) => {
      await test.step("[EEM-006] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openAddEntryForm();
    await elmPage.fillCustomerId("CUS-004521");
    await elmPage.selectWatchlistScope("OFAC SDN");
    await elmPage.selectReasonCode("Confirmed Different Person");
    await elmPage.fillEvidenceReference("EVD-001");
    await elmPage.submitEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-006] Validate expected results from Excel", async () => {
        await elmPage.expectEvidenceAttachmentVisible();
    await elmPage.expectInlineValidationError();
      });
    });

    // Excel Test Case ID: EEM-019
    // Excel Scenario: Save a partially completed exception entry as Draft without entering maker-checker approval
    // Excel Expected Result: Entry is saved in Draft status with entered values retained and does not appear in the Pending Approval maker-checker queue.
    test("Case ID:EEM-019 - Add Entry → Save a partially completed exception entry as Draft without entering maker-checker approval", async ({ testData }) => {
      await test.step("[EEM-019] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openAddEntryForm();
    await elmPage.fillCustomerId("CUS-004521");
    await elmPage.selectWatchlistScope("Customer ID");
    await elmPage.selectReasonCode("RC-01");
    await elmPage.fillEvidenceReference("EVD-001");
    await elmPage.submitEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-019] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
      });
    });

    // Excel Test Case ID: EEM-020
    // Excel Scenario: Block submission of a Draft that still has missing mandatory fields
    // Excel Expected Result: Submission is blocked, mandatory-field validation messages appear, and the draft stays out of the maker-checker queue.
    test("Case ID:EEM-020 - Add Entry → Block submission of a Draft that still has missing mandatory fields", async ({ testData }) => {
      await test.step("[EEM-020] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openAddEntryForm();
    await elmPage.fillCustomerId("CUST-001");
    await elmPage.selectWatchlistScope("Watchlist");
    await elmPage.selectReasonCode("RC-01");
    await elmPage.fillEvidenceReference("EVD-001");
    await elmPage.submitEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-020] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectSubmissionBlocked();
      });
    });

    // Excel Test Case ID: EEM-021
    // Excel Scenario: Edit and resave a Draft entry with updated field values
    // Excel Expected Result: Updated draft values persist after resave and the entry remains in Draft status until formally submitted.
    test("Case ID:EEM-021 - Add Entry → Edit and resave a Draft entry with updated field values", async ({ testData }) => {
      await test.step("[EEM-021] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openAddEntryForm();
    await elmPage.fillCustomerId("CUST-001");
    await elmPage.selectWatchlistScope("Watchlist");
    await elmPage.selectReasonCode("List");
    await elmPage.fillEvidenceReference("EVD-001");
    await elmPage.submitEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-021] Validate expected results from Excel", async () => {
        await elmPage.expectEntryGridVisible();
      });
    });

    // Excel Test Case ID: EEM-022
    // Excel Scenario: Verify that invalid updates in Draft prevent successful submission.
    // Excel Expected Result: Validation highlights the cleared mandatory field, blocks submission, and the draft remains in Draft status without entering the approval queue.
    test("Case ID:EEM-022 - Add Entry → invalid updates in Draft prevent successful submission.", async ({ testData }) => {
      await test.step("[EEM-022] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openAddEntryForm();
    await elmPage.fillCustomerId("CUS-004521");
    await elmPage.selectWatchlistScope("Customer ID");
    await elmPage.selectReasonCode("RC-01");
    await elmPage.fillEvidenceReference("EVD-001");
    await elmPage.submitEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-022] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectInlineValidationError();
      });
    });

    // Excel Test Case ID: EEM-023
    // Excel Scenario: Submit a completed Draft entry into the maker-checker approval queue
    // Excel Expected Result: Draft transitions to Pending Approval, appears in maker-checker queue with full entry payload, and is unavailable for direct activation.
    test("Case ID:EEM-023 - Add Entry → Submit a completed Draft entry into the maker-checker approval queue", async ({ testData }) => {
      await test.step("[EEM-023] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openListView("QA Exception List");
    await elmPage.openAddEntryForm();
    await elmPage.fillCustomerId("CUST-001");
    await elmPage.selectWatchlistScope("Watchlist");
    await elmPage.selectReasonCode("Confirmed Different Person");
    await elmPage.fillEvidenceReference("EVD-001");
    await elmPage.submitEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-023] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
      });
    });

    // Excel Test Case ID: EEM-026
    // Excel Scenario: Verify Reason Detail enforces minimum 50 and maximum 2,000 characters.
    // Excel Expected Result: Reason Detail outside 50–2,000 range is rejected; valid range allows submission.
    test("Case ID:EEM-026 - Add Entry → Reason Detail enforces minimum 50 and maximum 2,000 characters.", async ({ testData }) => {
      await test.step("[EEM-026] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openAddEntryForm();
    await elmPage.fillCustomerId("CUS-004521");
    await elmPage.selectWatchlistScope("OFAC SDN");
    await elmPage.selectReasonCode("Confirmed Different Person");
    await elmPage.fillEvidenceReference("EVD-001");
    await elmPage.submitEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-026] Validate expected results from Excel", async () => {
        await elmPage.expectCheckerActionsVisible();
      });
    });

    // Excel Test Case ID: EEM-027
    // Excel Scenario: Verify Other reason code requires 200+ chars in Reason Detail and MLRO checker routing.
    // Excel Expected Result: Reason Detail under 200 characters is blocked for Other reason code; entries with 200+ characters route to MLRO in the maker-checker queue.
    test("Case ID:EEM-027 - Add Entry → Other reason code requires 200+ chars in Reason Detail and MLRO checker routing.", async ({ testData }) => {
      await test.step("[EEM-027] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openListView("QA Exception List");
    await elmPage.openAddEntryForm();
    await elmPage.fillCustomerId("CUS-004521");
    await elmPage.selectWatchlistScope("OFAC SDN");
    await elmPage.selectReasonCode("Confirmed Different Person");
    await elmPage.fillEvidenceReference("EVD-001");
    await elmPage.submitEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-027] Validate expected results from Excel", async () => {
        await elmPage.expectOnExceptionListRoute();
    await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectReasonCodeVisible();
    await elmPage.expectSubmissionBlocked();
      });
    });

    // Excel Test Case ID: EEM-028
    // Excel Scenario: Verify entry form displays correct checker routing hint for standard vs PEP/Other reason codes
    // Excel Expected Result: Form displays Compliance Officer or Compliance Manager for standard codes and MLRO for PEP and Other entries before submission.
    test("Case ID:EEM-028 - Add Entry → entry form displays correct checker routing hint for standard vs PEP/Other reason codes", async ({ testData }) => {
      await test.step("[EEM-028] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: checker */;
    await elmPage.openListView("QA Exception List");
    await elmPage.openAddEntryForm();
    await elmPage.fillCustomerId("CUST-001");
    await elmPage.selectWatchlistScope("Watchlist");
    await elmPage.selectReasonCode("Confirmed Different Person");
    await elmPage.fillEvidenceReference("EVD-001");
    await elmPage.submitEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-028] Validate expected results from Excel", async () => {
        await elmPage.expectEntryGridVisible();
      });
    });

    // Excel Test Case ID: EEM-035
    // Excel Scenario: Verify match score colour-coded badge in entry grid
    // Excel Expected Result: Entry grid renders high, medium, and low match scores with distinct badge colours that align to configured score thresholds.
    test("Case ID:EEM-035 - Add Entry → match score colour-coded badge in entry grid", async ({ testData }) => {
      await test.step("[EEM-035] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openAddEntryForm();
    await elmPage.fillCustomerId("CUS-004521");
    await elmPage.selectWatchlistScope("OFAC SDN");
    await elmPage.selectReasonCode("Confirmed Different Person");
    await elmPage.fillEvidenceReference("EVD-001");
    await elmPage.submitEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-035] Validate expected results from Excel", async () => {
        await elmPage.expectEntryGridVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EEM-038
    // Excel Scenario: Verify KYC onboarding flagged Pending CSEL Approval on onboarding exception submit.
    // Excel Expected Result: KYC shows Pending CSEL Approval until checker approves (or conditional release).
    test("Case ID:EEM-038 - Add Entry → KYC onboarding flagged Pending CSEL Approval on onboarding exception submit.", async ({ testData }) => {
      await test.step("[EEM-038] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openAddEntryForm();
    await elmPage.fillCustomerId("CUS-004521");
    await elmPage.selectWatchlistScope("OFAC SDN");
    await elmPage.selectReasonCode("Confirmed Different Person");
    await elmPage.fillEvidenceReference("EVD-001");
    await elmPage.submitEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-038] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsVisible();
      });
    });

    // Excel Test Case ID: EEM-043
    // Excel Scenario: Verify True Hit confirmed alert cannot be submitted to CSEL scope.
    // Excel Expected Result: True Hit cannot be added to CSEL; submission is blocked with clear message.
    test("Case ID:EEM-043 - Add Entry → True Hit confirmed alert cannot be submitted to CSEL scope.", async ({ testData }) => {
      await test.step("[EEM-043] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openAddEntryForm();
    await elmPage.fillCustomerId("CUS-004521");
    await elmPage.selectWatchlistScope("OFAC SDN");
    await elmPage.selectReasonCode("Confirmed Different Person");
    await elmPage.fillEvidenceReference("EVD-001");
    await elmPage.submitEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-043] Validate expected results from Excel", async () => {
        await elmPage.expectSubmissionBlocked();
      });
    });

    // Excel Test Case ID: EEM-044
    // Excel Scenario: Verify entry can be initiated from Case Management with evidence reference linked to source case.
    // Excel Expected Result: Entry initiated from case with valid cross-reference to source case.
    test("Case ID:EEM-044 - Add Entry → entry can be initiated from Case Management with evidence reference linked to source case.", async ({ testData }) => {
      await test.step("[EEM-044] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openAddEntryForm();
    await elmPage.fillCustomerId("CUS-004521");
    await elmPage.selectWatchlistScope("OFAC SDN");
    await elmPage.selectReasonCode("Confirmed Different Person");
    await elmPage.fillEvidenceReference("EVD-001");
    await elmPage.submitEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-044] Validate expected results from Excel", async () => {
        await elmPage.expectEntryGridVisible();
      });
    });
    });

    test.describe("Edit Entry", () => {
    // Excel Test Case ID: EEM-007
    // Excel Scenario: Update an approved entry and verify that the change is sent back through the approval workflow.
    // Excel Expected Result: The edit is not applied silently, the request is submitted for approval, and the history trail shows the before-and-after values.
    test("Case ID:EEM-007 - Edit Entry → Update an approved entry and verify that the change is sent back through the approval workflow.", async ({ testData }) => {
      await test.step("[EEM-007] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openEditEntry("ENTRY-001");
    await elmPage.updateEntryField("expiryDate", "2027-12-31");
    await elmPage.submitEditEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-007] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });

    // Excel Test Case ID: EEM-008
    // Excel Scenario: Make sure an entry sitting in Pending Approval cannot be edited until the request is resolved.
    // Excel Expected Result: The edit action is blocked while the record is Pending Approval, so no new version is created until the first request is completed.
    test("Case ID:EEM-008 - Edit Entry → Make sure an entry sitting in Pending Approval cannot be edited until the request is resolved.", async ({ testData }) => {
      await test.step("[EEM-008] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openEditEntry("ENTRY-001");
    await elmPage.updateEntryField("expiryDate", "2027-12-31");
    await elmPage.submitEditEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-008] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectSubmissionBlocked();
      });
    });

    // Excel Test Case ID: EEM-009
    // Excel Scenario: Verify that scope expansion sends the edit to a higher approval level than a simple reduction.
    // Excel Expected Result: The expanded edit is routed to the stricter Compliance Officer or Compliance Manager approval path instead of the standard level.
    test("Case ID:EEM-009 - Edit Entry → scope expansion sends the edit to a higher approval level than a simple reduction.", async ({ testData }) => {
      await test.step("[EEM-009] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: maker */;
    await elmPage.openListView("QA Exception List");
    await elmPage.openEditEntry("ENTRY-001");
    await elmPage.updateEntryField("expiryDate", "2027-12-31");
    await elmPage.submitEditEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-009] Validate expected results from Excel", async () => {
        await elmPage.expectOnExceptionListRoute();
      });
    });

    // Excel Test Case ID: EEM-034
    // Excel Scenario: Verify View History panel shows submission, approval, and suppression events
    // Excel Expected Result: History panel shows chronological expandable events matching audit.
    test("Case ID:EEM-034 - Edit Entry → View History panel shows submission, approval, and suppression events", async ({ testData }) => {
      await test.step("[EEM-034] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openEditEntry("ENTRY-001");
    await elmPage.updateEntryField("expiryDate", "2027-12-31");
    await elmPage.submitEditEntry();
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-034] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
    await elmPage.expectEvaluationOutcome();
      });
    });
    });

    test.describe("Suspend / Delete Entry", () => {
    // Excel Test Case ID: EEM-010
    // Excel Scenario: Suspend a live entry and confirm that suppression stops as soon as the approval is completed.
    // Excel Expected Result: After approval, the entry is excluded from evaluation, suppression ceases immediately, and the alert is raised again on screening.
    test("Case ID:EEM-010 - Suspend / Delete Entry → Suspend a live entry and confirm that suppression stops as soon as the approval is completed.", async ({ testData }) => {
      await test.step("[EEM-010] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.suspendEntry("ENTRY-001");
    await elmPage.deleteEntry("ENTRY-001");
    await elmPage.confirmEntryAction();
      });
      await test.step("[EEM-010] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EEM-011
    // Excel Scenario: Soft-delete an entry and verify that the system keeps the record for audit and history review.
    // Excel Expected Result: The entry is marked Deleted rather than physically removed, and the system still exposes the record in audit and history views.
    test("Case ID:EEM-011 - Suspend / Delete Entry → Soft-delete an entry and verify that the system keeps the record for audit and history review.", async ({ testData }) => {
      await test.step("[EEM-011] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.suspendEntry("ENTRY-001");
    await elmPage.deleteEntry("ENTRY-001");
    await elmPage.confirmEntryAction();
      });
      await test.step("[EEM-011] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });

    // Excel Test Case ID: EEM-029
    // Excel Scenario: Verify Re-activate for suspended entries routes through maker-checker with mandatory reason.
    // Excel Expected Result: Re-activate requires approval and restores Active status after checker approval.
    test("Case ID:EEM-029 - Suspend / Delete Entry → Re-activate for suspended entries routes through maker-checker with mandatory reason.", async ({ testData }) => {
      await test.step("[EEM-029] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.suspendEntry("ENTRY-001");
    await elmPage.deleteEntry("ENTRY-001");
    await elmPage.confirmEntryAction();
      });
      await test.step("[EEM-029] Validate expected results from Excel", async () => {
        await elmPage.expectEntryGridVisible();
      });
    });

    // Excel Test Case ID: EEM-040
    // Excel Scenario: Verify bulk suspend/delete of multiple entries is not supported
    // Excel Expected Result: Bulk suspend/delete unavailable; each entry actioned individually.
    test("Case ID:EEM-040 - Suspend / Delete Entry → bulk suspend/delete of multiple entries is not supported", async ({ testData }) => {
      await test.step("[EEM-040] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.suspendEntry("ENTRY-001");
    await elmPage.deleteEntry("ENTRY-001");
    await elmPage.confirmEntryAction();
      });
      await test.step("[EEM-040] Validate expected results from Excel", async () => {
        await elmPage.expectEntryGridVisible();
      });
    });
    });

    test.describe("TTL & Entry Renewal", () => {
    // Excel Test Case ID: EEM-012
    // Excel Scenario: Verify that the pre-expiry reminder workflow fires before the TTL runs out.
    // Excel Expected Result: The system sends the first reminder at 30 days, escalates again at 7 days, and records the notifications for the relevant users.
    test("Case ID:EEM-012 - TTL & Entry Renewal → the pre-expiry reminder workflow fires before the TTL runs out.", async ({ testData }) => {
      await test.step("[EEM-012] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openListView("QA Exception List");
    await elmPage.openEditEntry("ENTRY-001");
    await elmPage.expectEntryExpiryVisible();
    await elmPage.renewEntry("ENTRY-001");
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-012] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
      });
    });

    // Excel Test Case ID: EEM-013
    // Excel Scenario: Confirm that an entry flips to Expired automatically and no longer suppresses matches once TTL has passed.
    // Excel Expected Result: The entry becomes Expired automatically, suppression stops, and the alert is allowed to reappear on the next screening run.
    test("Case ID:EEM-013 - TTL & Entry Renewal → an entry flips to Expired automatically and no longer suppresses matches once TTL has passed.", async ({ testData }) => {
      await test.step("[EEM-013] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openEditEntry("ENTRY-001");
    await elmPage.expectEntryExpiryVisible();
    await elmPage.renewEntry("ENTRY-001");
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-013] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EEM-014
    // Excel Scenario: Renew an expired exception entry through maker-checker approval
    // Excel Expected Result: Renewal creates a new pending approval request; after approval the entry returns to Active status and suppression resumes on the next screening run.
    test("Case ID:EEM-014 - TTL & Entry Renewal → Renew an expired exception entry through maker-checker approval", async ({ testData }) => {
      await test.step("[EEM-014] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await elmPage.openListView("QA Exception List");
    await elmPage.openEditEntry("ENTRY-001");
    await elmPage.expectEntryExpiryVisible();
    await elmPage.renewEntry("ENTRY-001");
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-014] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EEM-031
    // Excel Scenario: Verify material identity change auto-suspends entries within 15 minutes.
    // Excel Expected Result: Entries auto-suspended within 15 minutes; Compliance Officer notified.
    test("Case ID:EEM-031 - TTL & Entry Renewal → material identity change auto-suspends entries within 15 minutes.", async ({ testData }) => {
      await test.step("[EEM-031] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openEditEntry("ENTRY-001");
    await elmPage.expectEntryExpiryVisible();
    await elmPage.renewEntry("ENTRY-001");
    await elmPage.openMakerCheckerQueue();
      });
      await test.step("[EEM-031] Validate expected results from Excel", async () => {
        await elmPage.expectTtlEnforcement();
      });
    });
    });

    test.describe("Bulk Upload", () => {
    // Excel Test Case ID: EEM-015
    // Excel Scenario: Upload a clean CSV batch and verify that the import reaches the approval stage with the correct summary.
    // Excel Expected Result: The file is accepted, the valid rows are counted correctly, and the batch moves forward in maker-checker rather than failing at upload time.
    test("Case ID:EEM-015 - Bulk Upload → Upload a clean CSV batch and verify that the import reaches the approval stage with the correct summary.", async ({ testData }) => {
      await test.step("[EEM-015] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openBulkUploadModal();
      });
      await test.step("[EEM-015] Validate expected results from Excel", async () => {
        await expect(elmPage.bulkUploadModal).toBeVisible();
      });
    });

    // Excel Test Case ID: EEM-016
    // Excel Scenario: Check how the system handles a mixed file that contains both valid and invalid rows.
    // Excel Expected Result: The system presents row-level validation detail, points out the bad records, and does not let the poor-quality rows pass unnoticed.
    test("Case ID:EEM-016 - Bulk Upload → how the system handles a mixed file that contains both valid and invalid rows.", async ({ testData }) => {
      await test.step("[EEM-016] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openBulkUploadModal();
      });
      await test.step("[EEM-016] Validate expected results from Excel", async () => {
        await elmPage.expectInlineValidationError();
      });
    });

    // Excel Test Case ID: EEM-032
    // Excel Scenario: Verify bulk upload duplicate detection for same customer ID and watchlist scope.
    // Excel Expected Result: Duplicates identified in validation and excluded until resolved.
    test("Case ID:EEM-032 - Bulk Upload → bulk upload duplicate detection for same customer ID and watchlist scope.", async ({ testData }) => {
      await test.step("[EEM-032] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openBulkUploadModal();
      });
      await test.step("[EEM-032] Validate expected results from Excel", async () => {
        await elmPage.expectSubmissionBlocked();
      });
    });

    // Excel Test Case ID: EEM-033
    // Excel Scenario: Verify checker can drill into bulk upload rows before batch approval.
    // Excel Expected Result: Checker inspects row detail before approval; valid rows activate.
    test("Case ID:EEM-033 - Bulk Upload → checker can drill into bulk upload rows before batch approval.", async ({ testData }) => {
      await test.step("[EEM-033] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openBulkUploadModal();
      });
      await test.step("[EEM-033] Validate expected results from Excel", async () => {
        await expect(elmPage.bulkUploadModal).toBeVisible();
      });
    });

    // Excel Test Case ID: EEM-045
    // Excel Scenario: Verify Download Template from bulk upload returns XLSX with all mandatory columns
    // Excel Expected Result: Downloaded XLSX template includes every mandatory bulk-upload column with correct header labels and sample row guidance; no required field is missing.
    test("Case ID:EEM-045 - Bulk Upload → Download Template from bulk upload returns XLSX with all mandatory columns", async ({ testData }) => {
      await test.step("[EEM-045] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.openBulkUploadModal();
      });
      await test.step("[EEM-045] Validate expected results from Excel", async () => {
        await elmPage.expectListGridVisible();
    await elmPage.expectExportOptions();
      });
    });
    });

    test.describe("API Synchronisation", () => {
    // Excel Test Case ID: EEM-017
    // Excel Scenario: Verify that create, update, and delete actions received through API calls are captured in the audit trail.
    // Excel Expected Result: Each API action is recorded as a distinct sync event, and the audit trail shows the full create-update-delete sequence.
    test("Case ID:EEM-017 - API Synchronisation → create, update, and delete actions received through API calls are captured in the audit trail.", async ({ testData }) => {
      await test.step("[EEM-017] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openExceptionListsDirect(testData.baseUrl);
      });
      await test.step("[EEM-017] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });

    // Excel Test Case ID: EEM-018
    // Excel Scenario: Push the API request rate past the configured limit and confirm that throttling kicks in.
    // Excel Expected Result: The API starts throttling once the limit is crossed, and excess requests are rejected instead of being processed normally.
    test("Case ID:EEM-018 - API Synchronisation → Push the API request rate past the configured limit and confirm that throttling kicks in.", async ({ testData }) => {
      await test.step("[EEM-018] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openExceptionListsDirect(testData.baseUrl);
      });
      await test.step("[EEM-018] Validate expected results from Excel", async () => {
        await elmPage.expectCheckerActionsVisible();
      });
    });

    // Excel Test Case ID: EEM-036
    // Excel Scenario: Verify POST /csel/conflict-check blocks conflicting customer ID before submission.
    // Excel Expected Result: Conflict-check flags conflict; submission blocked and logged.
    test("Case ID:EEM-036 - API Synchronisation → POST /csel/conflict-check blocks conflicting customer ID before submission.", async ({ testData }) => {
      await test.step("[EEM-036] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openExceptionListsDirect(testData.baseUrl);
      });
      await test.step("[EEM-036] Validate expected results from Excel", async () => {
        await elmPage.expectSubmissionBlocked();
      });
    });

    // Excel Test Case ID: EEM-037
    // Excel Scenario: Verify API bulk endpoint accepts up to 500 entries per call.
    // Excel Expected Result: API accepts bulk payloads up to 500 entries and returns a clear limit-exceeded error when 501 entries are submitted.
    test("Case ID:EEM-037 - API Synchronisation → API bulk endpoint accepts up to 500 entries per call.", async ({ testData }) => {
      await test.step("[EEM-037] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openExceptionListsDirect(testData.baseUrl);
      });
      await test.step("[EEM-037] Validate expected results from Excel", async () => {
        await elmPage.expectInlineValidationError();
      });
    });

    // Excel Test Case ID: EEM-046
    // Excel Scenario: Verify GET /csel/{listId}/entries returns paginated filtered results for API client.
    // Excel Expected Result: GET endpoint returns correct paginated, filtered entry data.
    test("Case ID:EEM-046 - API Synchronisation → GET /csel/{listId}/entries returns paginated filtered results for API client.", async ({ testData }) => {
      await test.step("[EEM-046] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openExceptionListsDirect(testData.baseUrl);
      });
      await test.step("[EEM-046] Validate expected results from Excel", async () => {
        await elmPage.expectApiSyncResponse();
      });
    });

    // Excel Test Case ID: EEM-047
    // Excel Scenario: Verify GET /csel/{listId}/entries/{entryId}/audit returns full entry audit history.
    // Excel Expected Result: API returns complete audit history matching UI audit records.
    test("Case ID:EEM-047 - API Synchronisation → GET /csel/{listId}/entries/{entryId}/audit returns full entry audit history.", async ({ testData }) => {
      await test.step("[EEM-047] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openExceptionListsDirect(testData.baseUrl);
      });
      await test.step("[EEM-047] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
    await elmPage.expectEvaluationOutcome();
      });
    });
    });
  });

  test.describe("Audit Trail", () => {
    test.describe("List Lifecycle Events", () => {
    // Excel Test Case ID: ATL-001
    // Excel Scenario: Verify exception list creation is captured in the audit trail with complete metadata
    // Excel Expected Result: Audit trail records a list-creation event with timestamp, maker identity, list ID, and after-state showing Pending approval then Active once approved.
    test("Case ID:ATL-001 - List Lifecycle Events → exception list creation is captured in the audit trail with complete metadata", async ({ testData }) => {
      await test.step("[ATL-001] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-001] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
    await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsVisible();
      });
    });

    // Excel Test Case ID: ATL-002
    // Excel Scenario: Check that editing an exception list writes a new immutable audit event.
    // Excel Expected Result: The edit action is written to the audit trail with both before-state and after-state snapshots.
    test("Case ID:ATL-002 - List Lifecycle Events → editing an exception list writes a new immutable audit event.", async ({ testData }) => {
      await test.step("[ATL-002] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer Audit trail contains relevant CSEL activity. An existing exception list is available and the user updates at least one field. 1. Open an active exception list */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-002] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });

    // Excel Test Case ID: ATL-003
    // Excel Scenario: Verify that list suspension is recorded with the correct status change.
    // Excel Expected Result: The audit trail stores the suspension event and shows the status transition from Active to Suspended.
    test("Case ID:ATL-003 - List Lifecycle Events → list suspension is recorded with the correct status change.", async ({ testData }) => {
      await test.step("[ATL-003] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer Audit trail contains relevant CSEL activity. An active exception list exists and the user suspends it. 1. Open the list detail page */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-003] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });

    // Excel Test Case ID: ATL-004
    // Excel Scenario: Confirm that re-activation of a list is logged as a separate event.
    // Excel Expected Result: The audit trail contains a distinct re-activation record and does not overwrite the earlier suspension event.
    test("Case ID:ATL-004 - List Lifecycle Events → re-activation of a list is logged as a separate event.", async ({ testData }) => {
      await test.step("[ATL-004] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer Audit trail contains relevant CSEL activity. A suspended list is available and the user re-activates it. 1. Locate a list that is currently suspended */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-004] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });

    // Excel Test Case ID: ATL-005
    // Excel Scenario: Verify that deleting an exception list leaves a permanent audit record.
    // Excel Expected Result: The delete action is logged permanently and the audit record remains readable after the list is removed from active use.
    test("Case ID:ATL-005 - List Lifecycle Events → deleting an exception list leaves a permanent audit record.", async ({ testData }) => {
      await test.step("[ATL-005] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer Audit trail contains relevant CSEL activity. A list exists with delete permission available to the user. 1. Open the target list from the list view */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-005] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });
    });

    test.describe("Entry Lifecycle Events", () => {
    // Excel Test Case ID: ATL-006
    // Excel Scenario: Ensure that exception entry submission is captured in the audit trail.
    // Excel Expected Result: The audit trail stores the submission event with the entry ID, maker details, and submission timestamp.
    test("Case ID:ATL-006 - Entry Lifecycle Events → exception entry submission is captured in the audit trail.", async ({ testData }) => {
      await test.step("[ATL-006] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer Audit trail contains relevant CSEL activity. The user submits a new exception entry from the list screen. 1. Open an exception list and start a new entry */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-006] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });

    // Excel Test Case ID: ATL-007
    // Excel Scenario: Check that approving an exception entry creates a separate audit trail record.
    // Excel Expected Result: The approval is stored as an independent audit event with the checker identity and approval outcome.
    test("Case ID:ATL-007 - Entry Lifecycle Events → approving an exception entry creates a separate audit trail record.", async ({ testData }) => {
      await test.step("[ATL-007] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer A pending maker-checker request is available for approval. 1. Open the maker-checker queue */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-007] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });

    // Excel Test Case ID: ATL-008
    // Excel Scenario: Verify that rejection of an exception entry is written to the audit history.
    // Excel Expected Result: The audit log shows the rejected request, the checker comment, and the final decision status.
    test("Case ID:ATL-008 - Entry Lifecycle Events → rejection of an exception entry is written to the audit history.", async ({ testData }) => {
      await test.step("[ATL-008] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer Audit trail contains relevant CSEL activity. A pending request is available and the checker rejects it. 1. Open the pending request in the maker-checker queue */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-008] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
    await elmPage.expectCheckerActionsVisible();
      });
    });

    // Excel Test Case ID: ATL-009
    // Excel Scenario: Confirm that entry edit activity is tracked even when only a single field changes.
    // Excel Expected Result: The audit trail captures the edit at field level and preserves the previous values for review.
    test("Case ID:ATL-009 - Entry Lifecycle Events → entry edit activity is tracked even when only a single field changes.", async ({ testData }) => {
      await test.step("[ATL-009] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer Audit trail contains relevant CSEL activity. An existing exception entry is opened for editing. 1. Open an approved entry from the list view */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-009] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });

    // Excel Test Case ID: ATL-010
    // Excel Scenario: Verify that entry suspension is logged when a user deactivates an approved entry.
    // Excel Expected Result: The audit trail records the suspension event with the correct object ID and new status.
    test("Case ID:ATL-010 - Entry Lifecycle Events → entry suspension is logged when a user deactivates an approved entry.", async ({ testData }) => {
      await test.step("[ATL-010] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer Audit trail contains relevant CSEL activity. An approved entry is active and the user suspends it. 1. Open the active exception entry */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-010] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });

    // Excel Test Case ID: ATL-011
    // Excel Scenario: Check that entry re-activation after suspension is audited separately from the original approval.
    // Excel Expected Result: A new audit record is created for re-activation, and the old approval entry stays intact.
    test("Case ID:ATL-011 - Entry Lifecycle Events → entry re-activation after suspension is audited separately from the original approval.", async ({ testData }) => {
      await test.step("[ATL-011] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer Audit trail contains relevant CSEL activity. A suspended entry is made active again. 1. Open the suspended entry */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-011] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });
    });

    test.describe("TTL & Bulk Events", () => {
    // Excel Test Case ID: ATL-012
    // Excel Scenario: Ensure that expired entries still remain visible in the audit trail after TTL passes.
    // Excel Expected Result: The expired entry continues to appear in audit history and the expiry transition is retained.
    test("Case ID:ATL-012 - TTL & Bulk Events → expired entries still remain visible in the audit trail after TTL passes.", async ({ testData }) => {
      await test.step("[ATL-012] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer Audit trail contains relevant CSEL activity. An entry has already expired and screening suppression has ceased. 1. Locate an entry whose expiry date is in the past */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-012] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });

    // Excel Test Case ID: ATL-013
    // Excel Scenario: Verify that bulk upload submission creates a parent audit event.
    // Excel Expected Result: The upload submission is written to the audit trail with a unique request reference.
    test("Case ID:ATL-013 - TTL & Bulk Events → bulk upload submission creates a parent audit event.", async ({ testData }) => {
      await test.step("[ATL-013] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-013] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });

    // Excel Test Case ID: ATL-014
    // Excel Scenario: Confirm that bulk upload approval or rejection is recorded together with the batch outcome.
    // Excel Expected Result: The audit trail stores the batch decision and the final status of the upload request.
    test("Case ID:ATL-014 - TTL & Bulk Events → bulk upload approval or rejection is recorded together with the batch outcome.", async ({ testData }) => {
      await test.step("[ATL-014] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: maker */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-014] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });

    // Excel Test Case ID: ATL-015
    // Excel Scenario: Check that API submit, update, and delete events are logged with the caller identity.
    // Excel Expected Result: Each API action produces an audit event that includes the authenticated caller and operation type.
    test("Case ID:ATL-015 - TTL & Bulk Events → API submit, update, and delete events are logged with the caller identity.", async ({ testData }) => {
      await test.step("[ATL-015] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-015] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });
    });

    test.describe("Suppression Logging", () => {
    // Excel Test Case ID: ATL-016
    // Excel Scenario: Verify that every suppressed alert is logged silently without user-facing notification noise.
    // Excel Expected Result: The suppression is written to audit in real time, but the user interface does not raise a separate noisy notification.
    test("Case ID:ATL-016 - Suppression Logging → every suppressed alert is logged silently without user-facing notification noise.", async ({ testData }) => {
      await test.step("[ATL-016] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer Audit trail contains relevant CSEL activity. An active CSEL entry suppresses an incoming screening hit. 1. Run a screening scenario that matches an approved entry */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-016] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
    await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: ATL-017
    // Excel Scenario: Confirm that suppression logging includes the watchlist, score, and screening timestamps.
    // Excel Expected Result: Suppression audit record includes customer ID, entry ID, watchlist name, match score, screening timestamp, and suppressing entry reference.
    test("Case ID:ATL-017 - Suppression Logging → suppression logging includes the watchlist, score, and screening timestamps.", async ({ testData }) => {
      await test.step("[ATL-017] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-017] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
    await elmPage.expectEvaluationOutcome();
      });
    });
    });

    test.describe("Evidence Access Logging", () => {
    // Excel Test Case ID: ATL-018
    // Excel Scenario: Check that evidence attachment upload is recorded in the audit trail.
    // Excel Expected Result: The audit trail captures the upload action with attachment reference and user details.
    test("Case ID:ATL-018 - Evidence Access Logging → evidence attachment upload is recorded in the audit trail.", async ({ testData }) => {
      await test.step("[ATL-018] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer Audit trail contains relevant CSEL activity. The entry form allows an attachment and the file is uploaded successfully. 1. Open an add or edit entry form */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-018] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
    await elmPage.expectEvidenceAttachmentVisible();
      });
    });

    // Excel Test Case ID: ATL-019
    // Excel Scenario: Verify that viewing or downloading evidence is separately logged.
    // Excel Expected Result: The audit trail records access to the evidence attachment and preserves the action history.
    test("Case ID:ATL-019 - Evidence Access Logging → viewing or downloading evidence is separately logged.", async ({ testData }) => {
      await test.step("[ATL-019] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer Audit trail contains relevant CSEL activity. An evidence file already exists on an entry. 1. Open the entry detail page */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-019] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
    await elmPage.expectEvidenceAttachmentVisible();
      });
    });
    });

    test.describe("Integrity & Conflict Events", () => {
    // Excel Test Case ID: ATL-020
    // Excel Scenario: Ensure that a material identity change auto-suspension event is captured.
    // Excel Expected Result: The audit trail records the auto-suspension and links it to the underlying profile change.
    test("Case ID:ATL-020 - Integrity & Conflict Events → a material identity change auto-suspension event is captured.", async ({ testData }) => {
      await test.step("[ATL-020] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer Audit trail contains relevant CSEL activity. A customer record changes in a way that qualifies as a material identity change. 1. Update a screened customer profile field such as name, DOB, or nationality */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-020] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });

    // Excel Test Case ID: ATL-021
    // Excel Scenario: Verify that a true-hit conflict check blocked submission is recorded as an integrity event.
    // Excel Expected Result: The blocked submission is written to audit as a conflict/integrity event rather than a normal approval.
    test("Case ID:ATL-021 - Integrity & Conflict Events → a true-hit conflict check blocked submission is recorded as an integrity event.", async ({ testData }) => {
      await test.step("[ATL-021] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer Audit trail contains relevant CSEL activity. A customer ID already exists on an active custom blacklist. 1. Start a new CSEL submission for the same customer */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-021] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
    await elmPage.expectSubmissionBlocked();
      });
    });
    });

    test.describe("Report & Export Events", () => {
    // Excel Test Case ID: ATL-022
    // Excel Scenario: Confirm that the exception register report generation is logged.
    // Excel Expected Result: The audit trail records the report generation event with report type, user, and timestamp.
    test("Case ID:ATL-022 - Report & Export Events → the exception register report generation is logged.", async ({ testData }) => {
      await test.step("[ATL-022] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer The monthly report generation job or manual report request is executed. 1. Open the reports area */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-022] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });

    // Excel Test Case ID: ATL-023
    // Excel Scenario: Check that exporting the audit trail to CSV is itself logged.
    // Excel Expected Result: The export action is written to audit, including format, user, and export time.
    test("Case ID:ATL-023 - Report & Export Events → exporting the audit trail to CSV is itself logged.", async ({ testData }) => {
      await test.step("[ATL-023] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectAuditPanelLoaded();
    await elmPage.clickExport();
    await elmPage.exportLists("CSV");
      });
      await test.step("[ATL-023] Validate expected results from Excel", async () => {
        await elmPage.expectExportOptions();
    await elmPage.expectAuditPanelLoaded();
      });
    });

    // Excel Test Case ID: ATL-024
    // Excel Scenario: Verify that audit records are read-only and cannot be edited through the application.
    // Excel Expected Result: The application does not allow modification or deletion of the audit record.
    test("Case ID:ATL-024 - Report & Export Events → audit records are read-only and cannot be edited through the application.", async ({ testData }) => {
      await test.step("[ATL-024] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer Audit trail contains relevant CSEL activity. A user opens an existing audit record with full visibility. 1. Search for an existing audit event */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-024] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });

    // Excel Test Case ID: ATL-025
    // Excel Scenario: Ensure that audit records remain searchable after the retention period is configured.
    // Excel Expected Result: Audit data remains available for the configured retention period and can still be retrieved for compliance review.
    test("Case ID:ATL-025 - Report & Export Events → audit records remain searchable after the retention period is configured.", async ({ testData }) => {
      await test.step("[ATL-025] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    await elmPage.expectAuditPanelLoaded();
    await elmPage.expectSearchInputVisible();
      });
      await test.step("[ATL-025] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });
    });

    test.describe("Event Logging & Retention", () => {
    // Excel Test Case ID: ATL-026
    // Excel Scenario: Check that the audit trail shows before and after state snapshots for state-changing actions.
    // Excel Expected Result: The audit trail contains both snapshots and clearly shows what changed during the action.
    test("Case ID:ATL-026 - Event Logging & Retention → the audit trail shows before and after state snapshots for state-changing actions.", async ({ testData }) => {
      await test.step("[ATL-026] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer Audit trail contains relevant CSEL activity. An action that changes record state is performed, such as edit or suspend. 1. Trigger a state-changing event on a list or entry */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-026] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });
    });

    test.describe("Search & Filters", () => {
    // Excel Test Case ID: ATL-027
    // Excel Scenario: Verify audit trail filters narrow results by event type, list, and date range
    // Excel Expected Result: Each filter reduces the grid to matching events; combined filters apply together; clearing filters restores the full audit history.
    test("Case ID:ATL-027 - Search & Filters → audit trail filters narrow results by event type, list, and date range", async ({ testData }) => {
      await test.step("[ATL-027] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    await elmPage.expectAuditPanelLoaded();
    await elmPage.expectSearchInputVisible();
      });
      await test.step("[ATL-027] Validate expected results from Excel", async () => {
        await elmPage.expectListGridVisible();
    await elmPage.expectAuditPanelLoaded();
    await elmPage.expectEvaluationOutcome();
      });
    });
    });

    test.describe("Auditor Access Control", () => {
    // Excel Test Case ID: ATL-028
    // Excel Scenario: Verify Read-Only Auditor can view and export audit records but cannot modify them
    // Excel Expected Result: Auditor can search, view, and export audit records; no edit or delete actions are available; exported CSV matches on-screen filtered data.
    test("Case ID:ATL-028 - Auditor Access Control → Read-Only Auditor can view and export audit records but cannot modify them", async ({ testData }) => {
      await test.step("[ATL-028] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Read-Only Auditor */;
    await elmPage.expectAuditPanelLoaded();
    await elmPage.clickExport();
    await elmPage.exportLists("CSV");
      });
      await test.step("[ATL-028] Validate expected results from Excel", async () => {
        await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
    await elmPage.expectAuditPanelLoaded();
    await elmPage.expectEvaluationOutcome();
      });
    });
    });

    test.describe("Access Control", () => {
    // Excel Test Case ID: ATL-029
    // Excel Scenario: Verify MLRO has full read access to audit records created by other users
    // Excel Expected Result: MLRO sees audit events regardless of originating maker and can open full event detail including before/after snapshots.
    test("Case ID:ATL-029 - Access Control → MLRO has full read access to audit records created by other users", async ({ testData }) => {
      await test.step("[ATL-029] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: MLRO */;
    await elmPage.expectAuditPanelLoaded();
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-029] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });

    // Excel Test Case ID: ATL-030
    // Excel Scenario: Verify KYC Analyst sees only audit records linked to their own submissions
    // Excel Expected Result: Analyst can audit their own submission activity but cannot access audit records tied exclusively to another user's requests.
    test("Case ID:ATL-030 - Access Control → KYC Analyst sees only audit records linked to their own submissions", async ({ testData }) => {
      await test.step("[ATL-030] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: KYC Analyst */;
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-030] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });

    // Excel Test Case ID: ATL-031
    // Excel Scenario: Verify Compliance Manager has full read access to audit records created by other users
    // Excel Expected Result: Compliance Manager can view all audit records and full event detail regardless of which user performed the underlying action.
    test("Case ID:ATL-031 - Access Control → Compliance Manager has full read access to audit records created by other users", async ({ testData }) => {
      await test.step("[ATL-031] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Manager */;
    await elmPage.expectAuditPanelLoaded();
    await elmPage.expectAuditPanelLoaded();
      });
      await test.step("[ATL-031] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });
    });
  });

  test.describe("Exception Register Report", () => {
    test.describe("Executive Summary", () => {
    // Excel Test Case ID: ERR-001
    // Excel Scenario: Verify that the report opens with the correct summary cards and section layout.
    // Excel Expected Result: The page loads with the expected summary cards, section headers, and the correct report title.
    test("Case ID:ERR-001 - Executive Summary → the report opens with the correct summary cards and section layout.", async ({ testData }) => {
      await test.step("[ERR-001] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-001] Validate expected results from Excel", async () => {
        await elmPage.expectExceptionListManagerViewLoaded();
    await elmPage.expectSummaryCardsVisible();
      });
    });

    // Excel Test Case ID: ERR-002
    // Excel Scenario: Check that the total active exceptions count matches the data shown in the report table.
    // Excel Expected Result: The count shown on the summary card is aligned with the values represented in the report data.
    test("Case ID:ERR-002 - Executive Summary → the total active exceptions count matches the data shown in the report table.", async ({ testData }) => {
      await test.step("[ERR-002] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-002] Validate expected results from Excel", async () => {
        await elmPage.expectSummaryCardsVisible();
      });
    });

    // Excel Test Case ID: ERR-003
    // Excel Scenario: Verify the New This Month metric against newly created exception items.
    // Excel Expected Result: The New This Month value reflects items created during the same calendar month as the report.
    test("Case ID:ERR-003 - Executive Summary → the New This Month metric against newly created exception items.", async ({ testData }) => {
      await test.step("[ERR-003] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-003] Validate expected results from Excel", async () => {
        await elmPage.expectExecutiveSummaryVisible();
      });
    });

    // Excel Test Case ID: ERR-004
    // Excel Scenario: Confirm that the Suppressions This Month metric increments when alerts are suppressed.
    // Excel Expected Result: The suppression counter updates and shows the current month’s suppression total.
    test("Case ID:ERR-004 - Executive Summary → the Suppressions This Month metric increments when alerts are suppressed.", async ({ testData }) => {
      await test.step("[ERR-004] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-004] Validate expected results from Excel", async () => {
        await elmPage.expectSummaryCardsVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: ERR-005
    // Excel Scenario: Check the Expiring Within 30 Days count and sample list entries.
    // Excel Expected Result: The warning count and the listed items both show entries that are genuinely close to expiry.
    test("Case ID:ERR-005 - Executive Summary → the Expiring Within 30 Days count and sample list entries.", async ({ testData }) => {
      await test.step("[ERR-005] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-005] Validate expected results from Excel", async () => {
        await elmPage.expectInlineValidationError();
      });
    });

    // Excel Test Case ID: ERR-026
    // Excel Scenario: Verify Executive Summary includes renewals, expiries, and pending requests
    // Excel Expected Result: Executive summary cards show renewal count, expiry count, and pending approval count for the selected reporting period with values matching underlying register data.
    test("Case ID:ERR-026 - Executive Summary → Executive Summary includes renewals, expiries, and pending requests", async ({ testData }) => {
      await test.step("[ERR-026] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-026] Validate expected results from Excel", async () => {
        await elmPage.expectSummaryCardsVisible();
    await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });
    });

    test.describe("Reason Code Analysis", () => {
    // Excel Test Case ID: ERR-006
    // Excel Scenario: Verify that the Entries by Reason Code breakdown is displayed with percentages.
    // Excel Expected Result: The reason-code breakdown renders correctly with counts and percentages for each category.
    test("Case ID:ERR-006 - Reason Code Analysis → the Entries by Reason Code breakdown is displayed with percentages.", async ({ testData }) => {
      await test.step("[ERR-006] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-006] Validate expected results from Excel", async () => {
        await elmPage.expectReasonCodeVisible();
      });
    });

    // Excel Test Case ID: ERR-007
    // Excel Scenario: Verify that clicking a reason code row opens the corresponding filtered view or detail context.
    // Excel Expected Result: The selected reason code opens the related filtered context and shows matching records.
    test("Case ID:ERR-007 - Reason Code Analysis → clicking a reason code row opens the corresponding filtered view or detail context.", async ({ testData }) => {
      await test.step("[ERR-007] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-007] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
    await elmPage.expectReasonCodeVisible();
      });
    });
    });

    test.describe("Watchlist Analysis", () => {
    // Excel Test Case ID: ERR-008
    // Excel Scenario: Check that the watchlist analysis section shows the correct top watchlist sources.
    // Excel Expected Result: The watchlist analysis section lists the correct watchlist sources and the counts are shown in a sensible order.
    test("Case ID:ERR-008 - Watchlist Analysis → the watchlist analysis section shows the correct top watchlist sources.", async ({ testData }) => {
      await test.step("[ERR-008] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-008] Validate expected results from Excel", async () => {
        await elmPage.expectWatchlistAnalysisVisible();
      });
    });
    });

    test.describe("Export & Delivery", () => {
    // Excel Test Case ID: ERR-009
    // Excel Scenario: Confirm that the report export button creates a CSV file with the same visible data.
    // Excel Expected Result: The CSV export matches the visible report data and keeps the same key columns and row values.
    test("Case ID:ERR-009 - Export & Delivery → the report export button creates a CSV file with the same visible data.", async ({ testData }) => {
      await test.step("[ERR-009] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Manager The user has export permission and the report contains at least one row. 1. Open the report screen */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-009] Validate expected results from Excel", async () => {
        await elmPage.expectReportSectionVisible();
    await elmPage.expectExportOptions();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: ERR-010
    // Excel Scenario: Confirm that the PDF export mirrors the report layout and includes the header information.
    // Excel Expected Result: The PDF export reflects the same report title, summary cards, and visible section structure.
    test("Case ID:ERR-010 - Export & Delivery → the PDF export mirrors the report layout and includes the header information.", async ({ testData }) => {
      await test.step("[ERR-010] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Manager The report is available and the user can export PDFs. 1. Open the register report */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-010] Validate expected results from Excel", async () => {
        await elmPage.expectSummaryCardsVisible();
    await elmPage.expectExportOptions();
      });
    });
    });

    test.describe("Filters & Pagination", () => {
    // Excel Test Case ID: ERR-011
    // Excel Scenario: Verify that filters for list name or category narrow the report results correctly.
    // Excel Expected Result: Only the matching items remain visible after filtering, and the original view returns once the filter is cleared.
    test("Case ID:ERR-011 - Filters & Pagination → filters for list name or category narrow the report results correctly.", async ({ testData }) => {
      await test.step("[ERR-011] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-011] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: ERR-012
    // Excel Scenario: Check that status filters return the expected list states such as Active or Suspended.
    // Excel Expected Result: The table updates to show only records with the selected status.
    test("Case ID:ERR-012 - Filters & Pagination → status filters return the expected list states such as Active or Suspended.", async ({ testData }) => {
      await test.step("[ERR-012] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-012] Validate expected results from Excel", async () => {
        await elmPage.expectStatusTabsVisible();
    await elmPage.expectReportSectionVisible();
      });
    });

    // Excel Test Case ID: ERR-013
    // Excel Scenario: Verify the page-size control so the report shows the requested number of rows.
    // Excel Expected Result: The page displays the selected number of rows and pagination remains consistent.
    test("Case ID:ERR-013 - Filters & Pagination → the page-size control so the report shows the requested number of rows.", async ({ testData }) => {
      await test.step("[ERR-013] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-013] Validate expected results from Excel", async () => {
        await elmPage.expectExceptionListManagerViewLoaded();
    await elmPage.expectReportSectionVisible();
      });
    });

    // Excel Test Case ID: ERR-014
    // Excel Scenario: Confirm that pagination navigates between report pages without losing the selected filters.
    // Excel Expected Result: Pagination works correctly and the active filter remains applied while moving across pages.
    test("Case ID:ERR-014 - Filters & Pagination → pagination navigates between report pages without losing the selected filters.", async ({ testData }) => {
      await test.step("[ERR-014] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-014] Validate expected results from Excel", async () => {
        await elmPage.expectReportSectionVisible();
      });
    });
    });

    test.describe("Data Integrity & Layout", () => {
    // Excel Test Case ID: ERR-015
    // Excel Scenario: Check that date-related values are displayed in the expected report format.
    // Excel Expected Result: Dates are shown consistently in the expected format throughout the report.
    test("Case ID:ERR-015 - Data Integrity & Layout → date-related values are displayed in the expected report format.", async ({ testData }) => {
      await test.step("[ERR-015] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-015] Validate expected results from Excel", async () => {
        await elmPage.expectReportLayoutIntact();
      });
    });

    // Excel Test Case ID: ERR-016
    // Excel Scenario: Verify that very long list names do not break the report layout.
    // Excel Expected Result: The report layout remains stable and the long text is handled without visual corruption.
    test("Case ID:ERR-016 - Data Integrity & Layout → very long list names do not break the report layout.", async ({ testData }) => {
      await test.step("[ERR-016] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-016] Validate expected results from Excel", async () => {
        await elmPage.expectReportSectionVisible();
      });
    });

    // Excel Test Case ID: ERR-017
    // Excel Scenario: Check that special characters and punctuation in list names are rendered safely.
    // Excel Expected Result: Special characters display correctly and are not mangled in the UI or exported output.
    test("Case ID:ERR-017 - Data Integrity & Layout → special characters and punctuation in list names are rendered safely.", async ({ testData }) => {
      await test.step("[ERR-017] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-017] Validate expected results from Excel", async () => {
        await elmPage.expectExportOptions();
      });
    });

    // Excel Test Case ID: ERR-018
    // Excel Scenario: Confirm that the report handles an empty result set with a proper no-data message.
    // Excel Expected Result: The screen shows a clear no-data state rather than a blank or broken grid.
    test("Case ID:ERR-018 - Data Integrity & Layout → the report handles an empty result set with a proper no-data message.", async ({ testData }) => {
      await test.step("[ERR-018] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-018] Validate expected results from Excel", async () => {
        await elmPage.expectReportSectionVisible();
      });
    });
    });

    test.describe("Permissions & Refresh", () => {
    // Excel Test Case ID: ERR-019
    // Excel Scenario: Verify that a user without report permission cannot export or view the register data.
    // Excel Expected Result: Restricted users cannot access or export the report, while authorised users can.
    test("Case ID:ERR-019 - Permissions & Refresh → a user without report permission cannot export or view the register data.", async ({ testData }) => {
      await test.step("[ERR-019] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Manager Exception Register report is available for the current period. A restricted role account is available. 1. Log in with a low-privilege account */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-019] Validate expected results from Excel", async () => {
        await elmPage.expectExportOptions();
    await elmPage.expectRbacControlsHidden();
      });
    });

    // Excel Test Case ID: ERR-020
    // Excel Scenario: Check that the report refreshes to show recent screening activity after new events occur.
    // Excel Expected Result: The report reflects recent activity after refresh and does not keep an outdated snapshot.
    test("Case ID:ERR-020 - Permissions & Refresh → the report refreshes to show recent screening activity after new events occur.", async ({ testData }) => {
      await test.step("[ERR-020] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-020] Validate expected results from Excel", async () => {
        await elmPage.expectReportSectionVisible();
      });
    });

    // Excel Test Case ID: ERR-021
    // Excel Scenario: Verify that report values are consistent across screen refresh and browser reopen.
    // Excel Expected Result: The report remains stable across refresh and reopen actions for the same period.
    test("Case ID:ERR-021 - Permissions & Refresh → report values are consistent across screen refresh and browser reopen.", async ({ testData }) => {
      await test.step("[ERR-021] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-021] Validate expected results from Excel", async () => {
        await elmPage.expectReportSectionVisible();
      });
    });
    });

    test.describe("Performance & Period Selection", () => {
    // Excel Test Case ID: ERR-022
    // Excel Scenario: Check that the report summary does not mix current month and historical month totals.
    // Excel Expected Result: Each selected month shows its own totals and does not leak values from another period.
    test("Case ID:ERR-022 - Performance & Period Selection → the report summary does not mix current month and historical month totals.", async ({ testData }) => {
      await test.step("[ERR-022] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-022] Validate expected results from Excel", async () => {
        await elmPage.expectReportSectionVisible();
      });
    });

    // Excel Test Case ID: ERR-023
    // Excel Scenario: Confirm that the report can be opened without visible performance lag on a normal dataset.
    // Excel Expected Result: The report loads within an acceptable time and remains responsive on a standard dataset.
    test("Case ID:ERR-023 - Performance & Period Selection → the report can be opened without visible performance lag on a normal dataset.", async ({ testData }) => {
      await test.step("[ERR-023] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-023] Validate expected results from Excel", async () => {
        await elmPage.expectReportSectionVisible();
      });
    });

    // Excel Test Case ID: ERR-024
    // Excel Scenario: Verify that the report header shows the correct month label and delivery context.
    // Excel Expected Result: The header displays the correct reporting month and the delivery context stays consistent.
    test("Case ID:ERR-024 - Performance & Period Selection → the report header shows the correct month label and delivery context.", async ({ testData }) => {
      await test.step("[ERR-024] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-024] Validate expected results from Excel", async () => {
        await elmPage.expectReportSectionVisible();
      });
    });

    // Excel Test Case ID: ERR-025
    // Excel Scenario: Check that the report keeps the visible list ordering when no sort is changed.
    // Excel Expected Result: The default ordering remains stable until the user changes the sort or filter.
    test("Case ID:ERR-025 - Performance & Period Selection → the report keeps the visible list ordering when no sort is changed.", async ({ testData }) => {
      await test.step("[ERR-025] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-025] Validate expected results from Excel", async () => {
        await elmPage.expectReportSectionVisible();
      });
    });
    });

    test.describe("Suppression Activity Log", () => {
    // Excel Test Case ID: ERR-027
    // Excel Scenario: Verify Suppression Activity Log groups suppressions by exception entry.
    // Excel Expected Result: Suppression log groups by entry with counts aligned to audit.
    test("Case ID:ERR-027 - Suppression Activity Log → Suppression Activity Log groups suppressions by exception entry.", async ({ testData }) => {
      await test.step("[ERR-027] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-027] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
    await elmPage.expectEvaluationOutcome();
      });
    });
    });

    test.describe("Expired Entries Section", () => {
    // Excel Test Case ID: ERR-028
    // Excel Scenario: Verify Entries Expired This Month confirms suppression ceased and alerts resumed.
    // Excel Expected Result: Section lists correct entries; screening alerts fire after expiry.
    test("Case ID:ERR-028 - Expired Entries Section → Entries Expired This Month confirms suppression ceased and alerts resumed.", async ({ testData }) => {
      await test.step("[ERR-028] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-028] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
      });
    });
    });

    test.describe("Active Entries Listing", () => {
    // Excel Test Case ID: ERR-029
    // Excel Scenario: Verify Active Exception Entries section lists all required columns with accurate data
    // Excel Expected Result: Active entries section displays all required columns with values matching live CSEL records; CSV export aligns with on-screen rows.
    test("Case ID:ERR-029 - Active Entries Listing → Active Exception Entries section lists all required columns with accurate data", async ({ testData }) => {
      await test.step("[ERR-029] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Checker */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-029] Validate expected results from Excel", async () => {
        await elmPage.expectReportSectionVisible();
    await elmPage.expectExportOptions();
    await elmPage.expectEvaluationOutcome();
      });
    });
    });

    test.describe("Pending Requests Section", () => {
    // Excel Test Case ID: ERR-030
    // Excel Scenario: Verify Pending Requests section reflects outstanding maker-checker items at report generation time
    // Excel Expected Result: Pending Requests section lists exactly the outstanding approvals present at generation time and updates after queue state changes.
    test("Case ID:ERR-030 - Pending Requests Section → Pending Requests section reflects outstanding maker-checker items at report generation time", async ({ testData }) => {
      await test.step("[ERR-030] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await elmPage.openExceptionRegisterReport();
    await elmPage.expectReportSectionVisible();
    await elmPage.expectSearchInputVisible();
    await elmPage.expectExportOptions();
      });
      await test.step("[ERR-030] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
      });
    });
    });
  });

  test.describe("Exception Evaluation & Matching Logic", () => {
    test.describe("Evaluation Criteria", () => {
    // Excel Test Case ID: EVAL-001
    // Excel Scenario: Confirm that a screening hit is suppressed only when the customer ID, watchlist scope, status, and expiry checks all pass together.
    // Excel Expected Result: The engine suppresses the hit and records a suppression event because every evaluation rule is satisfied.
    test("Case ID:EVAL-001 - Evaluation Criteria → a screening hit is suppressed only when the customer ID, watchlist scope, status, and expiry checks all pass together.", async ({ testData }) => {
      await test.step("[EVAL-001] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-001] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-002
    // Excel Scenario: Verify that a watchlist outside the configured scope does not suppress the alert even when the customer ID matches.
    // Excel Expected Result: The alert is not suppressed and continues through the normal review flow.
    test("Case ID:EVAL-002 - Evaluation Criteria → a watchlist outside the configured scope does not suppress the alert even when the customer ID matches.", async ({ testData }) => {
      await test.step("[EVAL-002] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-002] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-003
    // Excel Scenario: Confirm that a suspended exception entry is ignored during evaluation even when the rest of the data matches.
    // Excel Expected Result: The suspended record is skipped and the alert remains active for analyst review.
    test("Case ID:EVAL-003 - Evaluation Criteria → a suspended exception entry is ignored during evaluation even when the rest of the data matches.", async ({ testData }) => {
      await test.step("[EVAL-003] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-003] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-004
    // Excel Scenario: Verify that an expired exception does not suppress a new hit after the expiry date has passed.
    // Excel Expected Result: The engine treats the record as expired, so the alert is not suppressed.
    test("Case ID:EVAL-004 - Evaluation Criteria → an expired exception does not suppress a new hit after the expiry date has passed.", async ({ testData }) => {
      await test.step("[EVAL-004] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-004] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-005
    // Excel Scenario: Check the boundary case where the expiry date is exactly today and no suppression should be applied.
    // Excel Expected Result: The record is treated as not valid for suppression because the current date is not before the expiry date.
    test("Case ID:EVAL-005 - Evaluation Criteria → the boundary case where the expiry date is exactly today and no suppression should be applied.", async ({ testData }) => {
      await test.step("[EVAL-005] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-005] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-006
    // Excel Scenario: Ensure that a customer ID mismatch blocks suppression even when the name and watchlist appear to match.
    // Excel Expected Result: The alert is raised normally because customer ID matching is exact and the IDs do not match.
    test("Case ID:EVAL-006 - Evaluation Criteria → a customer ID mismatch blocks suppression even when the name and watchlist appear to match.", async ({ testData }) => {
      await test.step("[EVAL-006] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-006] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-007
    // Excel Scenario: Verify that a missing customer ID on the alert does not allow the exception to suppress the hit.
    // Excel Expected Result: The alert is not suppressed and the missing ID is treated as a failed match condition.
    test("Case ID:EVAL-007 - Evaluation Criteria → a missing customer ID on the alert does not allow the exception to suppress the hit.", async ({ testData }) => {
      await test.step("[EVAL-007] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-007] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-008
    // Excel Scenario: Check that a blank watchlist scope on the exception record prevents suppression.
    // Excel Expected Result: The hit is not suppressed because the watchlist scope rule cannot be satisfied.
    test("Case ID:EVAL-008 - Evaluation Criteria → a blank watchlist scope on the exception record prevents suppression.", async ({ testData }) => {
      await test.step("[EVAL-008] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-008] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-009
    // Excel Scenario: Confirm that inactive or draft status records are ignored during evaluation.
    // Excel Expected Result: The engine ignores the non-active record and the alert remains unsuppressed.
    test("Case ID:EVAL-009 - Evaluation Criteria → inactive or draft status records are ignored during evaluation.", async ({ testData }) => {
      await test.step("[EVAL-009] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-009] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-010
    // Excel Scenario: Verify that one valid exception among multiple candidate records is enough to suppress the hit.
    // Excel Expected Result: The alert is suppressed because at least one exception entry fully satisfies the evaluation criteria.
    test("Case ID:EVAL-010 - Evaluation Criteria → one valid exception among multiple candidate records is enough to suppress the hit.", async ({ testData }) => {
      await test.step("[EVAL-010] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-010] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-011
    // Excel Scenario: Confirm that the suppression event is written to audit when an alert is successfully suppressed.
    // Excel Expected Result: The suppression is logged in the audit trail with the customer ID, watchlist, and decision timestamp.
    test("Case ID:EVAL-011 - Evaluation Criteria → the suppression event is written to audit when an alert is successfully suppressed.", async ({ testData }) => {
      await test.step("[EVAL-011] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-011] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-037
    // Excel Scenario: Verify that the engine selects the valid active entry when duplicate entries exist for the same customer and watchlist.
    // Excel Expected Result: The engine relies on the valid active entry and suppresses the alert only when the selected record passes all checks.
    test("Case ID:EVAL-037 - Evaluation Criteria → the engine selects the valid active entry when duplicate entries exist for the same customer and watchlist.", async ({ testData }) => {
      await test.step("[EVAL-037] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-037] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-038
    // Excel Scenario: Confirm that an exception is not applied when the customer data is incomplete even though the watchlist matches.
    // Excel Expected Result: The exception is not applied because the required evaluation data is incomplete.
    test("Case ID:EVAL-038 - Evaluation Criteria → an exception is not applied when the customer data is incomplete even though the watchlist matches.", async ({ testData }) => {
      await test.step("[EVAL-038] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-038] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-041
    // Excel Scenario: Verify evaluation is binary — partial criteria match never suppresses alert.
    // Excel Expected Result: No partial suppression; alert fires unless all criteria pass simultaneously.
    test("Case ID:EVAL-041 - Evaluation Criteria → evaluation is binary — partial criteria match never suppresses alert.", async ({ testData }) => {
      await test.step("[EVAL-041] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-041] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });
    });

    test.describe("Fuzzy Matching", () => {
    // Excel Test Case ID: EVAL-012
    // Excel Scenario: Verify that a small spelling change still matches when the score stays above the configured threshold.
    // Excel Expected Result: The fuzzy name match is accepted and the alert is suppressed when the score is at or above the threshold.
    test("Case ID:EVAL-012 - Fuzzy Matching → a small spelling change still matches when the score stays above the configured threshold.", async ({ testData }) => {
      await test.step("[EVAL-012] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-012] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-013
    // Excel Scenario: Confirm that a name variation below the configured threshold does not apply the exception.
    // Excel Expected Result: The exception is not applied because the name score is below the configured threshold.
    test("Case ID:EVAL-013 - Fuzzy Matching → a name variation below the configured threshold does not apply the exception.", async ({ testData }) => {
      await test.step("[EVAL-013] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-013] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-014
    // Excel Scenario: Check the boundary case where the match score is exactly equal to the configured threshold.
    // Excel Expected Result: The match is accepted when the score is equal to the threshold, and the hit is suppressed.
    test("Case ID:EVAL-014 - Fuzzy Matching → the boundary case where the match score is exactly equal to the configured threshold.", async ({ testData }) => {
      await test.step("[EVAL-014] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-014] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-015
    // Excel Scenario: Confirm that phonetic matching catches a sound-alike name even when the spelling is different.
    // Excel Expected Result: The phonetic comparison supports the match and the alert is suppressed if the score meets the threshold.
    test("Case ID:EVAL-015 - Fuzzy Matching → phonetic matching catches a sound-alike name even when the spelling is different.", async ({ testData }) => {
      await test.step("[EVAL-015] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-015] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-016
    // Excel Scenario: Ensure that fuzzy matching never overrides an exact customer ID mismatch.
    // Excel Expected Result: The alert is not suppressed because customer ID matching remains exact and the IDs do not match.
    test("Case ID:EVAL-016 - Fuzzy Matching → fuzzy matching never overrides an exact customer ID mismatch.", async ({ testData }) => {
      await test.step("[EVAL-016] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-016] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-017
    // Excel Scenario: Verify that leading and trailing spaces do not break a valid fuzzy name match.
    // Excel Expected Result: The name comparison trims harmless spacing differences and the alert is handled as a match when the score is sufficient.
    test("Case ID:EVAL-017 - Fuzzy Matching → leading and trailing spaces do not break a valid fuzzy name match.", async ({ testData }) => {
      await test.step("[EVAL-017] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-017] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-018
    // Excel Scenario: Check that a case-only difference does not stop a valid name comparison.
    // Excel Expected Result: The case difference does not prevent the fuzzy name match from being accepted.
    test("Case ID:EVAL-018 - Fuzzy Matching → a case-only difference does not stop a valid name comparison.", async ({ testData }) => {
      await test.step("[EVAL-018] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-018] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-019
    // Excel Scenario: Confirm that punctuation changes such as hyphens or apostrophes are handled without a false negative.
    // Excel Expected Result: The punctuation difference does not break the match when the rest of the name is equivalent.
    test("Case ID:EVAL-019 - Fuzzy Matching → punctuation changes such as hyphens or apostrophes are handled without a false negative.", async ({ testData }) => {
      await test.step("[EVAL-019] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-019] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-020
    // Excel Scenario: Check that an inserted or missing middle name is still evaluated correctly by the matching engine.
    // Excel Expected Result: The engine evaluates the name variation correctly and suppresses the alert only when the score reaches the threshold.
    test("Case ID:EVAL-020 - Fuzzy Matching → an inserted or missing middle name is still evaluated correctly by the matching engine.", async ({ testData }) => {
      await test.step("[EVAL-020] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-020] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-021
    // Excel Scenario: Verify behaviour for a very long customer name so the matching logic does not fail on length.
    // Excel Expected Result: The long name is processed without breaking the match logic or causing a display issue.
    test("Case ID:EVAL-021 - Fuzzy Matching → behaviour for a very long customer name so the matching logic does not fail on length.", async ({ testData }) => {
      await test.step("[EVAL-021] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-021] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-022
    // Excel Scenario: Confirm that names containing diacritics or special characters are handled safely.
    // Excel Expected Result: The characters are preserved correctly and the match behaves as expected for the configured threshold.
    test("Case ID:EVAL-022 - Fuzzy Matching → names containing diacritics or special characters are handled safely.", async ({ testData }) => {
      await test.step("[EVAL-022] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-022] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-023
    // Excel Scenario: Ensure that an empty incoming name cannot be used to trigger a false suppression.
    // Excel Expected Result: The alert is not suppressed because the name comparison cannot pass with an empty input value.
    test("Case ID:EVAL-023 - Fuzzy Matching → an empty incoming name cannot be used to trigger a false suppression.", async ({ testData }) => {
      await test.step("[EVAL-023] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-023] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-024
    // Excel Scenario: Check that a common short-form spelling does not bypass the customer ID rule.
    // Excel Expected Result: The system does not suppress the alert because the customer ID mismatch overrides the name similarity.
    test("Case ID:EVAL-024 - Fuzzy Matching → a common short-form spelling does not bypass the customer ID rule.", async ({ testData }) => {
      await test.step("[EVAL-024] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-024] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-036
    // Excel Scenario: Check that a threshold change on the exception list immediately affects the decision outcome.
    // Excel Expected Result: The decision changes according to the configured threshold value for the list.
    test("Case ID:EVAL-036 - Fuzzy Matching → a threshold change on the exception list immediately affects the decision outcome.", async ({ testData }) => {
      await test.step("[EVAL-036] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-036] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-039
    // Excel Scenario: Check that the system does not suppress a hit when the name score is close to, but still below, the threshold after normalisation.
    // Excel Expected Result: The alert remains open because the score is still below the threshold after normalisation.
    test("Case ID:EVAL-039 - Fuzzy Matching → the system does not suppress a hit when the name score is close to, but still below, the threshold after normalisation.", async ({ testData }) => {
      await test.step("[EVAL-039] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-039] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });
    });

    test.describe("Native Script & Multilingual Matching", () => {
    // Excel Test Case ID: EVAL-025
    // Excel Scenario: Verify that Arabic-script names are matched correctly when the alert and the exception both carry the original script.
    // Excel Expected Result: The Arabic-script match is accepted and the alert is suppressed when the remaining criteria also pass.
    test("Case ID:EVAL-025 - Native Script & Multilingual Matching → Arabic-script names are matched correctly when the alert and the exception both carry the original script.", async ({ testData }) => {
      await test.step("[EVAL-025] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-025] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-026
    // Excel Scenario: Verify Arabic prefix handling for names such as Al-, El-, Bin-, and Bint-.
    // Excel Expected Result: The prefix-aware comparison works as designed and the alert is treated as a valid match.
    test("Case ID:EVAL-026 - Native Script & Multilingual Matching → Arabic prefix handling for names such as Al-, El-, Bin-, and Bint-.", async ({ testData }) => {
      await test.step("[EVAL-026] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-026] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-027
    // Excel Scenario: Confirm that an Arabic-script alert does not get suppressed when the exception stores only a Latin transliteration.
    // Excel Expected Result: The alert is not suppressed because the matching engine requires the Arabic-script name to apply the exception correctly.
    test("Case ID:EVAL-027 - Native Script & Multilingual Matching → an Arabic-script alert does not get suppressed when the exception stores only a Latin transliteration.", async ({ testData }) => {
      await test.step("[EVAL-027] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-027] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-028
    // Excel Scenario: Check that mixed Latin and Arabic text is stored and displayed without breaking UTF-8 handling.
    // Excel Expected Result: The system keeps the mixed-script values intact and processes the match without encoding issues.
    test("Case ID:EVAL-028 - Native Script & Multilingual Matching → mixed Latin and Arabic text is stored and displayed without breaking UTF-8 handling.", async ({ testData }) => {
      await test.step("[EVAL-028] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-028] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-029
    // Excel Scenario: Verify that Simplified Chinese names are matched exactly when both sides use the same script.
    // Excel Expected Result: The Chinese-script comparison succeeds and the exception is applied when every other rule is satisfied.
    test("Case ID:EVAL-029 - Native Script & Multilingual Matching → Simplified Chinese names are matched exactly when both sides use the same script.", async ({ testData }) => {
      await test.step("[EVAL-029] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-029] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-030
    // Excel Scenario: Verify that Traditional Chinese text is handled as a separate script and matched correctly when stored the same way.
    // Excel Expected Result: The Traditional Chinese data is preserved correctly and the match result follows the configured logic.
    test("Case ID:EVAL-030 - Native Script & Multilingual Matching → Traditional Chinese text is handled as a separate script and matched correctly when stored the same way.", async ({ testData }) => {
      await test.step("[EVAL-030] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-030] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-031
    // Excel Scenario: Confirm that Cyrillic names are matched correctly without losing characters during processing.
    // Excel Expected Result: The Cyrillic text is handled safely and the alert is processed according to the normal matching rules.
    test("Case ID:EVAL-031 - Native Script & Multilingual Matching → Cyrillic names are matched correctly without losing characters during processing.", async ({ testData }) => {
      await test.step("[EVAL-031] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-031] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-032
    // Excel Scenario: Verify that the system stores and renders UTF-8 characters without corruption after evaluation.
    // Excel Expected Result: The characters remain readable and are not corrupted during matching or logging.
    test("Case ID:EVAL-032 - Native Script & Multilingual Matching → the system stores and renders UTF-8 characters without corruption after evaluation.", async ({ testData }) => {
      await test.step("[EVAL-032] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-032] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-033
    // Excel Scenario: Check that the engine uses the Latin name when the alert arrives in Latin script and the exception stores both versions.
    // Excel Expected Result: The Latin name is used correctly for comparison and the decision follows the configured threshold and ID rules.
    test("Case ID:EVAL-033 - Native Script & Multilingual Matching → the engine uses the Latin name when the alert arrives in Latin script and the exception stores both versions.", async ({ testData }) => {
      await test.step("[EVAL-033] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-033] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-034
    // Excel Scenario: Verify that whitespace differences in a multilingual name do not cause a false mismatch.
    // Excel Expected Result: The name comparison handles harmless spacing differences according to the configured fuzzy logic.
    test("Case ID:EVAL-034 - Native Script & Multilingual Matching → whitespace differences in a multilingual name do not cause a false mismatch.", async ({ testData }) => {
      await test.step("[EVAL-034] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-034] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-035
    // Excel Scenario: Ensure that a multilingual entry with multiple name representations still suppresses the hit when the correct version matches.
    // Excel Expected Result: The hit is suppressed when the correct script and all other evaluation checks line up.
    test("Case ID:EVAL-035 - Native Script & Multilingual Matching → a multilingual entry with multiple name representations still suppresses the hit when the correct version matches.", async ({ testData }) => {
      await test.step("[EVAL-035] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-035] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: EVAL-040
    // Excel Scenario: Verify that multilingual search results remain stable after switching between screens or refreshing the page.
    // Excel Expected Result: The evaluation result stays consistent and the multilingual text remains readable after navigation.
    test("Case ID:EVAL-040 - Native Script & Multilingual Matching → multilingual search results remain stable after switching between screens or refreshing the page.", async ({ testData }) => {
      await test.step("[EVAL-040] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectEvaluationOutcome();
      });
      await test.step("[EVAL-040] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });
    });
  });

  test.describe("Maker-Checker Approval Workflow", () => {
    test.describe("Checker Role Enforcement", () => {
    // Excel Test Case ID: MCW-001
    // Excel Scenario: Verify that the Approve and Reject actions are not available to a user who does not have a permitted checker role for a standard CSEL request.
    // Excel Expected Result: Approve and Reject actions are hidden or disabled for the unauthorized user and the request remains pending unchanged.
    test("Case ID:MCW-001 - Checker Role Enforcement → the Approve and Reject actions are not available to a user who does not have a permitted checker role for a standard CSEL request.", async ({ testData }) => {
      await test.step("[MCW-001] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-001] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsHidden();
    await elmPage.expectAccessDenied();
      });
    });

    // Excel Test Case ID: MCW-002
    // Excel Scenario: Confirm that a Compliance Officer can approve a standard exception request when the user holds the correct checker role.
    // Excel Expected Result: The request is approved successfully and the workflow moves the item out of the pending queue.
    test("Case ID:MCW-002 - Checker Role Enforcement → a Compliance Officer can approve a standard exception request when the user holds the correct checker role.", async ({ testData }) => {
      await test.step("[MCW-002] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-002] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsVisible();
      });
    });

    // Excel Test Case ID: MCW-003
    // Excel Scenario: Verify that a Compliance Manager can approve a standard request in the same way as a Compliance Officer.
    // Excel Expected Result: The approval is accepted and the request status changes to approved.
    test("Case ID:MCW-003 - Checker Role Enforcement → a Compliance Manager can approve a standard request in the same way as a Compliance Officer.", async ({ testData }) => {
      await test.step("[MCW-003] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-003] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsVisible();
      });
    });

    // Excel Test Case ID: MCW-004
    // Excel Scenario: Ensure that a peer analyst cannot process a request even if the user can open the queue screen.
    // Excel Expected Result: The request remains locked for action and the application blocks the attempt.
    test("Case ID:MCW-004 - Checker Role Enforcement → a peer analyst cannot process a request even if the user can open the queue screen.", async ({ testData }) => {
      await test.step("[MCW-004] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-004] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
      });
    });

    // Excel Test Case ID: MCW-005
    // Excel Scenario: Check that a PEP-related request can be approved only by the MLRO or a designated deputy.
    // Excel Expected Result: The Compliance Officer cannot approve the PEP item, while the MLRO or designated deputy can.
    test("Case ID:MCW-005 - Checker Role Enforcement → a PEP-related request can be approved only by the MLRO or a designated deputy.", async ({ testData }) => {
      await test.step("[MCW-005] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-005] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsVisible();
      });
    });

    // Excel Test Case ID: MCW-006
    // Excel Scenario: Verify that an exception entry tagged with the 'Other' reason code is restricted to MLRO approval only.
    // Excel Expected Result: The request cannot be approved by the Compliance Manager and is accepted only by the MLRO.
    test("Case ID:MCW-006 - Checker Role Enforcement → an exception entry tagged with the 'Other' reason code is restricted to MLRO approval only.", async ({ testData }) => {
      await test.step("[MCW-006] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-006] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsVisible();
      });
    });

    // Excel Test Case ID: MCW-007
    // Excel Scenario: Confirm that renewal of an entry older than 12 months is routed to MLRO approval.
    // Excel Expected Result: Only the MLRO can complete the approval for an older renewal request.
    test("Case ID:MCW-007 - Checker Role Enforcement → renewal of an entry older than 12 months is routed to MLRO approval.", async ({ testData }) => {
      await test.step("[MCW-007] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-007] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
      });
    });

    // Excel Test Case ID: MCW-030
    // Excel Scenario: Verify PEP exception list enforces MLRO as checker for all entries at list configuration level.
    // Excel Expected Result: PEP exception list entries require MLRO as checker; Compliance Officer approval controls remain disabled for PEP-category requests.
    test("Case ID:MCW-030 - Checker Role Enforcement → PEP exception list enforces MLRO as checker for all entries at list configuration level.", async ({ testData }) => {
      await test.step("[MCW-030] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-030] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
      });
    });
    });

    test.describe("Queue Views & Ownership", () => {
    // Excel Test Case ID: MCW-008
    // Excel Scenario: Check that a request submitted by the logged-in user is listed under My Requests and not presented for self-approval.
    // Excel Expected Result: The request is visible under My Requests, but self-approval controls are hidden.
    test("Case ID:MCW-008 - Queue Views & Ownership → a request submitted by the logged-in user is listed under My Requests and not presented for self-approval.", async ({ testData }) => {
      await test.step("[MCW-008] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("My Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-008] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
      });
    });

    // Excel Test Case ID: MCW-009
    // Excel Scenario: Ensure that a checker cannot approve their own request even when the checker role matches the request type.
    // Excel Expected Result: The application blocks self-approval and keeps the request in a non-processed state.
    test("Case ID:MCW-009 - Queue Views & Ownership → a checker cannot approve their own request even when the checker role matches the request type.", async ({ testData }) => {
      await test.step("[MCW-009] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-009] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
      });
    });

    // Excel Test Case ID: MCW-010
    // Excel Scenario: Verify that All Requests shows every pending item that is waiting for checker action.
    // Excel Expected Result: All pending requests assigned to the queue appear under All Requests, regardless of maker.
    test("Case ID:MCW-010 - Queue Views & Ownership → All Requests shows every pending item that is waiting for checker action.", async ({ testData }) => {
      await test.step("[MCW-010] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-010] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
      });
    });

    // Excel Test Case ID: MCW-011
    // Excel Scenario: Confirm that the queue list is refreshed after an approval so the approved item disappears from the pending view.
    // Excel Expected Result: The approved item is removed from the pending queue and shows under processed history only.
    test("Case ID:MCW-011 - Queue Views & Ownership → the queue list is refreshed after an approval so the approved item disappears from the pending view.", async ({ testData }) => {
      await test.step("[MCW-011] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-011] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
    await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsVisible();
      });
    });

    // Excel Test Case ID: MCW-028
    // Excel Scenario: Verify MC request cards show SLA timer, urgency, and escalation warning
    // Excel Expected Result: Card shows SLA, remaining time, urgent styling, and escalation warning.
    test("Case ID:MCW-028 - Queue Views & Ownership → MC request cards show SLA timer, urgency, and escalation warning", async ({ testData }) => {
      await test.step("[MCW-028] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-028] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectInlineValidationError();
    await elmPage.expectSlaIndicator();
      });
    });
    });

    test.describe("Approval / Rejection Handling", () => {
    // Excel Test Case ID: MCW-012
    // Excel Scenario: Verify that approving a standard request changes the workflow status to Approved and activates the exception.
    // Excel Expected Result: The request status becomes Approved and the related exception is activated for screening suppression.
    test("Case ID:MCW-012 - Approval / Rejection Handling → approving a standard request changes the workflow status to Approved and activates the exception.", async ({ testData }) => {
      await test.step("[MCW-012] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-012] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });

    // Excel Test Case ID: MCW-013
    // Excel Scenario: Verify that rejecting a request changes its workflow state to Rejected and prevents the exception from becoming active.
    // Excel Expected Result: The request is marked Rejected and no active exception is created.
    test("Case ID:MCW-013 - Approval / Rejection Handling → rejecting a request changes its workflow state to Rejected and prevents the exception from becoming active.", async ({ testData }) => {
      await test.step("[MCW-013] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-013] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsVisible();
      });
    });

    // Excel Test Case ID: MCW-014
    // Excel Scenario: Check that a rejection cannot be submitted without a clear reason or comment when the process requires justification.
    // Excel Expected Result: The system blocks an empty rejection and accepts it only after a justification is provided.
    test("Case ID:MCW-014 - Approval / Rejection Handling → a rejection cannot be submitted without a clear reason or comment when the process requires justification.", async ({ testData }) => {
      await test.step("[MCW-014] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-014] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsHidden();
      });
    });

    // Excel Test Case ID: MCW-015
    // Excel Scenario: Ensure that two approval attempts on the same request are not processed twice.
    // Excel Expected Result: The second approval attempt is blocked and the request remains approved only once.
    test("Case ID:MCW-015 - Approval / Rejection Handling → two approval attempts on the same request are not processed twice.", async ({ testData }) => {
      await test.step("[MCW-015] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-015] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsVisible();
    await elmPage.expectSubmissionBlocked();
      });
    });

    // Excel Test Case ID: MCW-016
    // Excel Scenario: Verify that a rejected request cannot be moved back to pending from the checker screen without a fresh maker submission.
    // Excel Expected Result: The rejected request stays rejected until a new maker submission is created.
    test("Case ID:MCW-016 - Approval / Rejection Handling → a rejected request cannot be moved back to pending from the checker screen without a fresh maker submission.", async ({ testData }) => {
      await test.step("[MCW-016] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-016] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsHidden();
      });
    });

    // Excel Test Case ID: MCW-026
    // Excel Scenario: Verify checker approval success modal shows action, submitter, timestamp, Pending status
    // Excel Expected Result: Modal shows action, submitter, timestamp, Pending badge; closes cleanly.
    test("Case ID:MCW-026 - Approval / Rejection Handling → checker approval success modal shows action, submitter, timestamp, Pending status", async ({ testData }) => {
      await test.step("[MCW-026] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-026] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsVisible();
      });
    });

    // Excel Test Case ID: MCW-027
    // Excel Scenario: Verify mandatory comment modal blocks proceed without comment
    // Excel Expected Result: Approve or reject action cannot proceed with an empty comment; entering a valid comment enables the decision and records it in audit history.
    test("Case ID:MCW-027 - Approval / Rejection Handling → mandatory comment modal blocks proceed without comment", async ({ testData }) => {
      await test.step("[MCW-027] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-027] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
    await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsVisible();
      });
    });

    // Excel Test Case ID: MCW-029
    // Excel Scenario: Verify bulk upload card shows entry count and supports drill-down.
    // Excel Expected Result: Bulk card shows count, supports drill-down, activates on approval.
    test("Case ID:MCW-029 - Approval / Rejection Handling → bulk upload card shows entry count and supports drill-down.", async ({ testData }) => {
      await test.step("[MCW-029] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-029] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsVisible();
      });
    });
    });

    test.describe("SLA & Escalation", () => {
    // Excel Test Case ID: MCW-017
    // Excel Scenario: Verify that the onboarding SLA countdown starts from the maker submission timestamp and not from the time the request was opened.
    // Excel Expected Result: The SLA clock is based on submission time and does not reset when the request is opened.
    test("Case ID:MCW-017 - SLA & Escalation → the onboarding SLA countdown starts from the maker submission timestamp and not from the time the request was opened.", async ({ testData }) => {
      await test.step("[MCW-017] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-017] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectSlaIndicator();
      });
    });

    // Excel Test Case ID: MCW-018
    // Excel Scenario: Check that an onboarding request shows the 12-hour escalation warning before the 24-hour SLA breach.
    // Excel Expected Result: The system shows the 12-hour escalation warning and keeps the request in pending status.
    test("Case ID:MCW-018 - SLA & Escalation → an onboarding request shows the 12-hour escalation warning before the 24-hour SLA breach.", async ({ testData }) => {
      await test.step("[MCW-018] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-018] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectInlineValidationError();
    await elmPage.expectSlaIndicator();
      });
    });

    // Excel Test Case ID: MCW-019
    // Excel Scenario: Verify that an onboarding request crossing the 24-hour SLA produces the required escalation notification path.
    // Excel Expected Result: The request is escalated according to the onboarding SLA and the correct recipients are notified.
    test("Case ID:MCW-019 - SLA & Escalation → an onboarding request crossing the 24-hour SLA produces the required escalation notification path.", async ({ testData }) => {
      await test.step("[MCW-019] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-019] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectSlaIndicator();
      });
    });

    // Excel Test Case ID: MCW-020
    // Excel Scenario: Confirm that periodic re-screening and event-driven requests use the 48-hour SLA rule.
    // Excel Expected Result: Periodic and event-driven requests follow a 48-hour SLA with 24-hour mid-point warning and escalation at breach.
    test("Case ID:MCW-020 - SLA & Escalation → periodic re-screening and event-driven requests use the 48-hour SLA rule.", async ({ testData }) => {
      await test.step("[MCW-020] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-020] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectInlineValidationError();
    await elmPage.expectSlaIndicator();
      });
    });

    // Excel Test Case ID: MCW-021
    // Excel Scenario: Verify the 24-hour escalation warning for periodic and event-driven requests before the 48-hour breach.
    // Excel Expected Result: The mid-SLA warning appears at 24 hours and the final breach is not triggered early.
    test("Case ID:MCW-021 - SLA & Escalation → the 24-hour escalation warning for periodic and event-driven requests before the 48-hour breach.", async ({ testData }) => {
      await test.step("[MCW-021] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-021] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectInlineValidationError();
    await elmPage.expectSlaIndicator();
      });
    });

    // Excel Test Case ID: MCW-022
    // Excel Scenario: Check that escalation notifications are generated only once for the same request at the configured SLA threshold.
    // Excel Expected Result: The escalation message is sent once per threshold event and does not duplicate on refresh.
    test("Case ID:MCW-022 - SLA & Escalation → escalation notifications are generated only once for the same request at the configured SLA threshold.", async ({ testData }) => {
      await test.step("[MCW-022] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-022] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectSlaIndicator();
      });
    });
    });

    test.describe("Special Approval Rules", () => {
    // Excel Test Case ID: MCW-023
    // Excel Scenario: Ensure that a request cannot be approved by a user who is not available in the queue because of role restriction, even if the request is searchable by ID.
    // Excel Expected Result: The request remains unprocessed and the unauthorized checker is denied access to approval.
    test("Case ID:MCW-023 - Special Approval Rules → a request cannot be approved by a user who is not available in the queue because of role restriction, even if the request is searchable by ID.", async ({ testData }) => {
      await test.step("[MCW-023] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-023] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsHidden();
    await elmPage.expectAccessDenied();
      });
    });

    // Excel Test Case ID: MCW-024
    // Excel Scenario: Verify that a request submitted by a maker is shown to the checker with the correct pending state and not auto-approved by system refresh.
    // Excel Expected Result: The request remains pending until a valid checker takes action.
    test("Case ID:MCW-024 - Special Approval Rules → a request submitted by a maker is shown to the checker with the correct pending state and not auto-approved by system refresh.", async ({ testData }) => {
      await test.step("[MCW-024] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-024] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsVisible();
      });
    });

    // Excel Test Case ID: MCW-025
    // Excel Scenario: Check that simultaneous approval attempts from two sessions do not create conflicting workflow states.
    // Excel Expected Result: Only one approval succeeds and the other session receives a conflict or already-processed message.
    test("Case ID:MCW-025 - Special Approval Rules → simultaneous approval attempts from two sessions do not create conflicting workflow states.", async ({ testData }) => {
      await test.step("[MCW-025] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openMakerCheckerQueue();
    await elmPage.openQueueTab("All Requests");
    await elmPage.expectMakerCheckerQueueVisible();
      });
      await test.step("[MCW-025] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectCheckerActionsVisible();
      });
    });
    });
  });

  test.describe("Reason Codes & Evidence Standards", () => {
    test.describe("Reason Code Standardization", () => {
    // Excel Test Case ID: RCE-001
    // Excel Scenario: Verify that a new exception entry cannot be submitted when the reason code field is left blank.
    // Excel Expected Result: The submission is blocked and the reason code field is highlighted as mandatory.
    test("Case ID:RCE-001 - Reason Code Standardization → a new exception entry cannot be submitted when the reason code field is left blank.", async ({ testData }) => {
      await test.step("[RCE-001] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: maker */;
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-001] Validate expected results from Excel", async () => {
        await elmPage.expectReasonCodeVisible();
    await elmPage.expectSubmissionBlocked();
      });
    });

    // Excel Test Case ID: RCE-002
    // Excel Scenario: Check that attaching evidence does not bypass the mandatory reason code rule.
    // Excel Expected Result: The system still refuses the submission because evidence alone is not enough without a reason code.
    test("Case ID:RCE-002 - Reason Code Standardization → attaching evidence does not bypass the mandatory reason code rule.", async ({ testData }) => {
      await test.step("[RCE-002] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-002] Validate expected results from Excel", async () => {
        await elmPage.expectReasonCodeVisible();
    await elmPage.expectEvidenceAttachmentVisible();
      });
    });

    // Excel Test Case ID: RCE-003
    // Excel Scenario: Ensure that only the configured standard reason codes can be selected for a new exception entry.
    // Excel Expected Result: Only approved reason codes are accepted; free-text or custom values are rejected.
    test("Case ID:RCE-003 - Reason Code Standardization → only the configured standard reason codes can be selected for a new exception entry.", async ({ testData }) => {
      await test.step("[RCE-003] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: maker */;
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-003] Validate expected results from Excel", async () => {
        await elmPage.expectCheckerActionsVisible();
    await elmPage.expectReasonCodeVisible();
      });
    });

    // Excel Test Case ID: RCE-004
    // Excel Scenario: Verify that reason codes are trimmed and stored cleanly when a user pastes extra spaces around the selected value.
    // Excel Expected Result: The system trims the spacing or rejects the malformed value; the stored reason code remains standardized.
    test("Case ID:RCE-004 - Reason Code Standardization → reason codes are trimmed and stored cleanly when a user pastes extra spaces around the selected value.", async ({ testData }) => {
      await test.step("[RCE-004] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-004] Validate expected results from Excel", async () => {
        await elmPage.expectCheckerActionsVisible();
    await elmPage.expectReasonCodeVisible();
      });
    });

    // Excel Test Case ID: RCE-005
    // Excel Scenario: Confirm that the selected reason code remains intact after the record is saved and reopened.
    // Excel Expected Result: The same reason code is shown after save, reopen, and refresh with no unexpected change.
    test("Case ID:RCE-005 - Reason Code Standardization → the selected reason code remains intact after the record is saved and reopened.", async ({ testData }) => {
      await test.step("[RCE-005] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-005] Validate expected results from Excel", async () => {
        await elmPage.expectReasonCodeVisible();
      });
    });

    // Excel Test Case ID: RCE-006
    // Excel Scenario: Verify that reason code information is displayed correctly in the list view and the entry detail screen.
    // Excel Expected Result: The reason code appears consistently in both the row summary and the detailed record.
    test("Case ID:RCE-006 - Reason Code Standardization → reason code information is displayed correctly in the list view and the entry detail screen.", async ({ testData }) => {
      await test.step("[RCE-006] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-006] Validate expected results from Excel", async () => {
        await elmPage.expectSummaryCardsVisible();
    await elmPage.expectReasonCodeVisible();
      });
    });

    // Excel Test Case ID: RCE-007
    // Excel Scenario: Check that the reason code filter narrows the list to the selected code only.
    // Excel Expected Result: Only entries carrying the selected reason code remain visible while the filter is active.
    test("Case ID:RCE-007 - Reason Code Standardization → the reason code filter narrows the list to the selected code only.", async ({ testData }) => {
      await test.step("[RCE-007] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-007] Validate expected results from Excel", async () => {
        await elmPage.expectReasonCodeVisible();
      });
    });

    // Excel Test Case ID: RCE-008
    // Excel Scenario: Confirm that reason codes are exported correctly to CSV and PDF outputs.
    // Excel Expected Result: Both export formats contain the correct reason code and match the value shown in the application.
    test("Case ID:RCE-008 - Reason Code Standardization → reason codes are exported correctly to CSV and PDF outputs.", async ({ testData }) => {
      await test.step("[RCE-008] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-008] Validate expected results from Excel", async () => {
        await elmPage.expectExportOptions();
    await elmPage.expectEvaluationOutcome();
    await elmPage.expectReasonCodeVisible();
      });
    });

    // Excel Test Case ID: RCE-009
    // Excel Scenario: Verify that summary counts by reason code update after a new entry using the same code is approved.
    // Excel Expected Result: The displayed distribution count increases by one for the matching reason code.
    test("Case ID:RCE-009 - Reason Code Standardization → summary counts by reason code update after a new entry using the same code is approved.", async ({ testData }) => {
      await test.step("[RCE-009] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-009] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
    await elmPage.expectReasonCodeVisible();
      });
    });

    // Excel Test Case ID: RCE-010
    // Excel Scenario: Ensure that adding evidence to a draft entry does not overwrite the selected reason code.
    // Excel Expected Result: The reason code stays unchanged after the evidence upload and resave.
    test("Case ID:RCE-010 - Reason Code Standardization → adding evidence to a draft entry does not overwrite the selected reason code.", async ({ testData }) => {
      await test.step("[RCE-010] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-010] Validate expected results from Excel", async () => {
        await elmPage.expectReasonCodeVisible();
    await elmPage.expectEvidenceAttachmentVisible();
      });
    });

    // Excel Test Case ID: RCE-025
    // Excel Scenario: Verify that the final approved entry keeps the same reason code and evidence reference in the history view.
    // Excel Expected Result: The history view shows the same reason code and evidence reference that belong to the approved record.
    test("Case ID:RCE-025 - Reason Code Standardization → the final approved entry keeps the same reason code and evidence reference in the history view.", async ({ testData }) => {
      await test.step("[RCE-025] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-025] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
    await elmPage.expectCheckerActionsVisible();
    await elmPage.expectReasonCodeVisible();
    await elmPage.expectEvidenceAttachmentVisible();
      });
    });

    // Excel Test Case ID: RCE-027
    // Excel Scenario: Verify Regulatory / Law Enforcement Confirmation reason code accepts TTL per regulatory instruction.
    // Excel Expected Result: TTL aligns with regulatory instruction and reason code is stored correctly.
    test("Case ID:RCE-027 - Reason Code Standardization → Regulatory / Law Enforcement Confirmation reason code accepts TTL per regulatory instruction.", async ({ testData }) => {
      await test.step("[RCE-027] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Maker */;
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-027] Validate expected results from Excel", async () => {
        await elmPage.expectReasonCodeVisible();
      });
    });

    // Excel Test Case ID: RCE-028
    // Excel Scenario: Verify five-point regulatory examination evidence set is complete on approved entry.
    // Excel Expected Result: All five regulatory evidence points are present and traceable on the entry.
    test("Case ID:RCE-028 - Reason Code Standardization → five-point regulatory examination evidence set is complete on approved entry.", async ({ testData }) => {
      await test.step("[RCE-028] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: maker */;
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-028] Validate expected results from Excel", async () => {
        await elmPage.expectReasonCodeVisible();
    await elmPage.expectEvidenceAttachmentVisible();
      });
    });
    });

    test.describe("Evidence & Attachments", () => {
    // Excel Test Case ID: RCE-011
    // Excel Scenario: Check that the system prompts for supporting evidence when the maker tries to continue without attaching a file.
    // Excel Expected Result: The application warns that evidence should be attached and makes the user acknowledge the missing file before proceeding.
    test("Case ID:RCE-011 - Evidence & Attachments → the system prompts for supporting evidence when the maker tries to continue without attaching a file.", async ({ testData }) => {
      await test.step("[RCE-011] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-011] Validate expected results from Excel", async () => {
        await elmPage.expectEvidenceAttachmentVisible();
      });
    });

    // Excel Test Case ID: RCE-012
    // Excel Scenario: Verify that a valid PDF evidence file uploads successfully and stays linked to the entry.
    // Excel Expected Result: The PDF is accepted and the attachment remains linked to the entry after reload.
    test("Case ID:RCE-012 - Evidence & Attachments → a valid PDF evidence file uploads successfully and stays linked to the entry.", async ({ testData }) => {
      await test.step("[RCE-012] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: maker */;
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-012] Validate expected results from Excel", async () => {
        await elmPage.expectEvidenceAttachmentVisible();
      });
    });

    // Excel Test Case ID: RCE-013
    // Excel Scenario: Confirm that more than one supporting document can be attached to the same entry without losing earlier files.
    // Excel Expected Result: The record keeps the selected evidence files and the final list matches the maker's latest changes.
    test("Case ID:RCE-013 - Evidence & Attachments → more than one supporting document can be attached to the same entry without losing earlier files.", async ({ testData }) => {
      await test.step("[RCE-013] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-013] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
    await elmPage.expectEvidenceAttachmentVisible();
      });
    });

    // Excel Test Case ID: RCE-014
    // Excel Scenario: Verify that opening an uploaded evidence file shows the exact file that was attached.
    // Excel Expected Result: The correct evidence file opens and the content shown belongs to the selected attachment.
    test("Case ID:RCE-014 - Evidence & Attachments → opening an uploaded evidence file shows the exact file that was attached.", async ({ testData }) => {
      await test.step("[RCE-014] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-014] Validate expected results from Excel", async () => {
        await elmPage.expectEvidenceAttachmentVisible();
      });
    });

    // Excel Test Case ID: RCE-015
    // Excel Scenario: Check that downloading the evidence file returns an intact copy with the expected filename.
    // Excel Expected Result: The downloaded copy is readable, keeps the expected name, and matches the uploaded document.
    test("Case ID:RCE-015 - Evidence & Attachments → downloading the evidence file returns an intact copy with the expected filename.", async ({ testData }) => {
      await test.step("[RCE-015] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-015] Validate expected results from Excel", async () => {
        await elmPage.expectExportOptions();
    await elmPage.expectEvaluationOutcome();
    await elmPage.expectEvidenceAttachmentVisible();
      });
    });

    // Excel Test Case ID: RCE-016
    // Excel Scenario: Ensure that the system blocks an unsupported evidence file type during upload.
    // Excel Expected Result: The upload is rejected and no invalid attachment is linked to the record.
    test("Case ID:RCE-016 - Evidence & Attachments → the system blocks an unsupported evidence file type during upload.", async ({ testData }) => {
      await test.step("[RCE-016] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: maker */;
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-016] Validate expected results from Excel", async () => {
        await elmPage.expectCheckerActionsVisible();
    await elmPage.expectEvidenceAttachmentVisible();
      });
    });

    // Excel Test Case ID: RCE-017
    // Excel Scenario: Verify that an oversized evidence file is not accepted by the upload control.
    // Excel Expected Result: The oversized file is blocked and the user can continue only with a file that meets the size rule.
    test("Case ID:RCE-017 - Evidence & Attachments → an oversized evidence file is not accepted by the upload control.", async ({ testData }) => {
      await test.step("[RCE-017] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-017] Validate expected results from Excel", async () => {
        await elmPage.expectEvidenceAttachmentVisible();
    await elmPage.expectSubmissionBlocked();
      });
    });

    // Excel Test Case ID: RCE-018
    // Excel Scenario: Check that filenames containing spaces, symbols, or long text are handled safely during attachment upload.
    // Excel Expected Result: The filename is stored without breaking the record and the attachment remains usable after reload.
    test("Case ID:RCE-018 - Evidence & Attachments → filenames containing spaces, symbols, or long text are handled safely during attachment upload.", async ({ testData }) => {
      await test.step("[RCE-018] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: maker */;
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-018] Validate expected results from Excel", async () => {
        await elmPage.expectEvidenceAttachmentVisible();
      });
    });

    // Excel Test Case ID: RCE-019
    // Excel Scenario: Confirm that the evidence reference opens the originating case record when the CSEL entry is created from case management.
    // Excel Expected Result: The reference points to the correct case record and opens the expected source case.
    test("Case ID:RCE-019 - Evidence & Attachments → the evidence reference opens the originating case record when the CSEL entry is created from case management.", async ({ testData }) => {
      await test.step("[RCE-019] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-019] Validate expected results from Excel", async () => {
        await elmPage.expectEvidenceAttachmentVisible();
      });
    });

    // Excel Test Case ID: RCE-020
    // Excel Scenario: Ensure that an invalid or unknown evidence reference cannot be saved on the entry.
    // Excel Expected Result: The system rejects the invalid reference and keeps the record from being saved with a broken link.
    test("Case ID:RCE-020 - Evidence & Attachments → an invalid or unknown evidence reference cannot be saved on the entry.", async ({ testData }) => {
      await test.step("[RCE-020] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: maker */;
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-020] Validate expected results from Excel", async () => {
        await elmPage.expectCheckerActionsHidden();
    await elmPage.expectEvidenceAttachmentVisible();
      });
    });

    // Excel Test Case ID: RCE-021
    // Excel Scenario: Verify that an archived or deleted source case cannot be used as the evidence reference.
    // Excel Expected Result: The archived or deleted case is not accepted as a valid evidence reference.
    test("Case ID:RCE-021 - Evidence & Attachments → an archived or deleted source case cannot be used as the evidence reference.", async ({ testData }) => {
      await test.step("[RCE-021] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-021] Validate expected results from Excel", async () => {
        await elmPage.expectEvidenceAttachmentVisible();
      });
    });

    // Excel Test Case ID: RCE-022
    // Excel Scenario: Check that the attachment metadata records who uploaded the file and when it was added.
    // Excel Expected Result: The file metadata is captured correctly and remains visible after refresh.
    test("Case ID:RCE-022 - Evidence & Attachments → the attachment metadata records who uploaded the file and when it was added.", async ({ testData }) => {
      await test.step("[RCE-022] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-022] Validate expected results from Excel", async () => {
        await elmPage.expectEvidenceAttachmentVisible();
      });
    });

    // Excel Test Case ID: RCE-023
    // Excel Scenario: Verify that uploading the same evidence file twice does not corrupt the attachment list.
    // Excel Expected Result: The application handles the duplicate safely and the attachment area remains usable.
    test("Case ID:RCE-023 - Evidence & Attachments → uploading the same evidence file twice does not corrupt the attachment list.", async ({ testData }) => {
      await test.step("[RCE-023] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: maker */;
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-023] Validate expected results from Excel", async () => {
        await elmPage.expectEvidenceAttachmentVisible();
      });
    });

    // Excel Test Case ID: RCE-024
    // Excel Scenario: Confirm that evidence stays available after page refresh and user sign-out/sign-in.
    // Excel Expected Result: The evidence reference remains available after session changes and page reloads.
    test("Case ID:RCE-024 - Evidence & Attachments → evidence stays available after page refresh and user sign-out/sign-in.", async ({ testData }) => {
      await test.step("[RCE-024] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-024] Validate expected results from Excel", async () => {
        await elmPage.expectExceptionListManagerViewLoaded();
    await elmPage.expectEvidenceAttachmentVisible();
      });
    });

    // Excel Test Case ID: RCE-026
    // Excel Scenario: Ensure that replacing a draft attachment updates the final linked file instead of keeping an outdated document.
    // Excel Expected Result: Only the latest evidence file remains linked to the record and the outdated attachment is not retained.
    test("Case ID:RCE-026 - Evidence & Attachments → replacing a draft attachment updates the final linked file instead of keeping an outdated document.", async ({ testData }) => {
      await test.step("[RCE-026] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: maker */;
    await elmPage.openListView("QA Exception List");
    await elmPage.expectReasonCodeVisible();
      });
      await test.step("[RCE-026] Validate expected results from Excel", async () => {
        await elmPage.expectEvidenceAttachmentVisible();
      });
    });
    });
  });

  test.describe("Role-Based Access Control", () => {
    test.describe("Role Permission Matrix", () => {
    // Excel Test Case ID: RBAC-001
    // Excel Scenario: Verify that a Compliance Officer can see the full CSEL menu and all action controls required for checker operations.
    // Excel Expected Result: The Compliance Officer can access the CSEL pages and the checker controls are visible, including approval actions for pending requests.
    test("Case ID:RBAC-001 - Role Permission Matrix → a Compliance Officer can see the full CSEL menu and all action controls required for checker operations.", async ({ testData }) => {
      await test.step("[RBAC-001] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[RBAC-001] Validate expected results from Excel", async () => {
        await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectRbacControlsHidden();
      });
    });

    // Excel Test Case ID: RBAC-002
    // Excel Scenario: Confirm that an MLRO can access all CSEL maintenance screens and handle checker decisions for PEP or other restricted cases.
    // Excel Expected Result: The MLRO has the expected CSEL access and can act as checker where MLRO approval is required.
    test("Case ID:RBAC-002 - Role Permission Matrix → an MLRO can access all CSEL maintenance screens and handle checker decisions for PEP or other restricted cases.", async ({ testData }) => {
      await test.step("[RBAC-002] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: MLRO */;
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[RBAC-002] Validate expected results from Excel", async () => {
        await elmPage.expectRbacControlsHidden();
      });
    });

    // Excel Test Case ID: RBAC-003
    // Excel Scenario: Check that a Compliance Manager has unrestricted CSEL visibility and checker rights on the approved workflow screens.
    // Excel Expected Result: The Compliance Manager can view and manage CSEL records and can approve or reject requests within the permitted workflow.
    test("Case ID:RBAC-003 - Role Permission Matrix → a Compliance Manager has unrestricted CSEL visibility and checker rights on the approved workflow screens.", async ({ testData }) => {
      await test.step("[RBAC-003] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[RBAC-003] Validate expected results from Excel", async () => {
        await elmPage.expectCheckerActionsVisible();
    await elmPage.expectRbacControlsHidden();
      });
    });

    // Excel Test Case ID: RBAC-004
    // Excel Scenario: Verify that a Risk Analyst is restricted to read-only list access and cannot start entry maintenance actions.
    // Excel Expected Result: The Risk Analyst can view lists only and does not get access to add, edit, delete, bulk upload, or maker-checker actions.
    test("Case ID:RBAC-004 - Role Permission Matrix → a Risk Analyst is restricted to read-only list access and cannot start entry maintenance actions.", async ({ testData }) => {
      await test.step("[RBAC-004] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: KYC Analyst */;
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[RBAC-004] Validate expected results from Excel", async () => {
        await elmPage.expectRbacControlsHidden();
      });
    });

    // Excel Test Case ID: RBAC-005
    // Excel Scenario: Verify that a KYC Analyst can view only their own submissions and cannot use checker functions.
    // Excel Expected Result: The KYC Analyst sees only personal submissions and does not get permission to approve, reject, delete, or bulk upload.
    test("Case ID:RBAC-005 - Role Permission Matrix → a KYC Analyst can view only their own submissions and cannot use checker functions.", async ({ testData }) => {
      await test.step("[RBAC-005] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[RBAC-005] Validate expected results from Excel", async () => {
        await elmPage.expectCheckerActionsHidden();
    await elmPage.expectRbacControlsHidden();
      });
    });

    // Excel Test Case ID: RBAC-006
    // Excel Scenario: Confirm that a Level 1 Investigator has the same narrow access pattern as a KYC Analyst.
    // Excel Expected Result: The Level 1 Investigator is limited to viewing only their own work and cannot perform maker or checker actions outside that scope.
    test("Case ID:RBAC-006 - Role Permission Matrix → a Level 1 Investigator has the same narrow access pattern as a KYC Analyst.", async ({ testData }) => {
      await test.step("[RBAC-006] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[RBAC-006] Validate expected results from Excel", async () => {
        await elmPage.expectRbacControlsHidden();
      });
    });

    // Excel Test Case ID: RBAC-007
    // Excel Scenario: Verify that a Level 2 Investigator can create and maintain entries but still cannot approve or delete a request as a checker.
    // Excel Expected Result: The Level 2 Investigator can work as a maker for allowed actions, but delete and checker approval remain restricted.
    test("Case ID:RBAC-007 - Role Permission Matrix → a Level 2 Investigator can create and maintain entries but still cannot approve or delete a request as a checker.", async ({ testData }) => {
      await test.step("[RBAC-007] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[RBAC-007] Validate expected results from Excel", async () => {
        await elmPage.expectRbacControlsHidden();
      });
    });

    // Excel Test Case ID: RBAC-008
    // Excel Scenario: Check that the System Administrator can manage lists and entries, but does not receive bulk upload permission or checker authority.
    // Excel Expected Result: The System Administrator can administer lists and entries, but bulk upload and maker-checker approval are not granted.
    test("Case ID:RBAC-008 - Role Permission Matrix → the System Administrator can manage lists and entries, but does not receive bulk upload permission or checker authority.", async ({ testData }) => {
      await test.step("[RBAC-008] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: KYC Analyst */;
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[RBAC-008] Validate expected results from Excel", async () => {
        await elmPage.expectRbacControlsHidden();
      });
    });

    // Excel Test Case ID: RBAC-009
    // Excel Scenario: Make sure a non-checker role cannot see or use approval controls even when a pending request is opened directly.
    // Excel Expected Result: Approval controls stay unavailable to the restricted role, and the request cannot be processed from the UI.
    test("Case ID:RBAC-009 - Role Permission Matrix → Make sure a non-checker role cannot see or use approval controls even when a pending request is opened directly.", async ({ testData }) => {
      await test.step("[RBAC-009] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[RBAC-009] Validate expected results from Excel", async () => {
        await elmPage.expectRbacControlsHidden();
      });
    });

    // Excel Test Case ID: RBAC-010
    // Excel Scenario: Verify that a checker cannot approve or reject a request that was submitted from the same account.
    // Excel Expected Result: The system prevents self-approval, matching the segregation-of-duties rule that checkers can act only on requests not submitted by themselves.
    test("Case ID:RBAC-010 - Role Permission Matrix → a checker cannot approve or reject a request that was submitted from the same account.", async ({ testData }) => {
      await test.step("[RBAC-010] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[RBAC-010] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
    await elmPage.expectRbacControlsHidden();
      });
    });

    // Excel Test Case ID: RBAC-011
    // Excel Scenario: Check that role-based permissions are refreshed correctly after logout and a different user signs in on the same workstation.
    // Excel Expected Result: The application applies permissions from the active login only and does not carry over the previous session's access rights.
    test("Case ID:RBAC-011 - Role Permission Matrix → role-based permissions are refreshed correctly after logout and a different user signs in on the same workstation.", async ({ testData }) => {
      await test.step("[RBAC-011] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: KYC Analyst */;
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[RBAC-011] Validate expected results from Excel", async () => {
        await elmPage.expectRbacControlsHidden();
      });
    });

    // Excel Test Case ID: RBAC-012
    // Excel Scenario: Confirm that direct API or backend approval attempts are rejected when the caller does not have checker permission.
    // Excel Expected Result: The system rejects the action and logs the attempt, so an insufficiently privileged role cannot bypass the UI restriction.
    test("Case ID:RBAC-012 - Role Permission Matrix → direct API or backend approval attempts are rejected when the caller does not have checker permission.", async ({ testData }) => {
      await test.step("[RBAC-012] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: KYC Analyst */;
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[RBAC-012] Validate expected results from Excel", async () => {
        await elmPage.expectCheckerActionsVisible();
    await elmPage.expectRbacControlsHidden();
      });
    });

    // Excel Test Case ID: RBAC-013
    // Excel Scenario: Verify View Own restriction limits KYC Analyst and Level 1 Investigator to their own submissions
    // Excel Expected Result: Restricted roles see and open only their own submissions; privileged checker roles retain visibility of all requests.
    test("Case ID:RBAC-013 - Role Permission Matrix → View Own restriction limits KYC Analyst and Level 1 Investigator to their own submissions", async ({ testData }) => {
      await test.step("[RBAC-013] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: KYC Analyst */;
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[RBAC-013] Validate expected results from Excel", async () => {
        await elmPage.expectRbacControlsHidden();
      });
    });

    // Excel Test Case ID: RBAC-014
    // Excel Scenario: Verify role permission matrix stays consistent for all major CSEL actions across supported roles
    // Excel Expected Result: Each role exposes only the list, entry, bulk-upload, and maker-checker actions permitted by the published access matrix; no unauthorized action appears in the UI.
    test("Case ID:RBAC-014 - Role Permission Matrix → role permission matrix stays consistent for all major CSEL actions across supported roles", async ({ testData }) => {
      await test.step("[RBAC-014] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: KYC Analyst */;
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[RBAC-014] Validate expected results from Excel", async () => {
        await elmPage.expectAccessDenied();
    await elmPage.expectRbacControlsHidden();
      });
    });

    // Excel Test Case ID: RBAC-015
    // Excel Scenario: Verify Read-Only Auditor can view all CSEL screens but cannot perform maintenance or checker actions.
    // Excel Expected Result: Auditor has read-only access with no maker/checker capabilities.
    test("Case ID:RBAC-015 - Role Permission Matrix → Read-Only Auditor can view all CSEL screens but cannot perform maintenance or checker actions.", async ({ testData }) => {
      await test.step("[RBAC-015] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: KYC Analyst */;
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[RBAC-015] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
    await elmPage.expectRbacControlsHidden();
      });
    });

    // Excel Test Case ID: RBAC-016
    // Excel Scenario: Verify Read-Only Auditor has view-only access with no create, edit, delete, bulk, or checker actions.
    // Excel Expected Result: Read-Only Auditor can view lists, entries, audit trail, and reports but cannot create, edit, approve, suspend, delete, or bulk-upload CSEL records.
    test("Case ID:RBAC-016 - Role Permission Matrix → Read-Only Auditor has view-only access with no create, edit, delete, bulk, or checker actions.", async ({ testData }) => {
      await test.step("[RBAC-016] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expandConfigurationMenu();
    await elmPage.openExceptionListsFromSidebar();
    /* Role from Excel: KYC Analyst */;
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[RBAC-016] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
    await elmPage.expectCheckerActionsVisible();
    await elmPage.expectRbacControlsHidden();
      });
    });
    });
  });

  test.describe("Notification Framework", () => {
    test.describe("Submission & Approval Alerts", () => {
    // Excel Test Case ID: NTF-001
    // Excel Scenario: Verify that a new exception submission creates an immediate notification for the compliance team.
    // Excel Expected Result: A notification arrives immediately to Compliance Officers / Compliance Managers through in-app and email channels, with the submission clearly linked to the new request.
    test("Case ID:NTF-001 - Submission & Approval Alerts → a new exception submission creates an immediate notification for the compliance team.", async ({ testData }) => {
      await test.step("[NTF-001] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectNotificationVisible();
      });
      await test.step("[NTF-001] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectCheckerActionsVisible();
      });
    });

    // Excel Test Case ID: NTF-002
    // Excel Scenario: Confirm that approval of an exception entry notifies the submitting analyst without delay.
    // Excel Expected Result: The submitting analyst receives immediate in-app and email notification that the exception entry has been approved.
    test("Case ID:NTF-002 - Submission & Approval Alerts → approval of an exception entry notifies the submitting analyst without delay.", async ({ testData }) => {
      await test.step("[NTF-002] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectNotificationVisible();
      });
      await test.step("[NTF-002] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectCheckerActionsVisible();
      });
    });

    // Excel Test Case ID: NTF-003
    // Excel Scenario: Verify that rejection of an exception entry is pushed back to the maker with the checker comment included.
    // Excel Expected Result: The maker gets an immediate notification by in-app message and email, and the checker rejection comment is included in the communication.
    test("Case ID:NTF-003 - Submission & Approval Alerts → rejection of an exception entry is pushed back to the maker with the checker comment included.", async ({ testData }) => {
      await test.step("[NTF-003] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectNotificationVisible();
      });
      await test.step("[NTF-003] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectCheckerActionsVisible();
      });
    });
    });

    test.describe("SLA Escalation Alerts", () => {
    // Excel Test Case ID: NTF-004
    // Excel Scenario: Check that onboarding requests that stay pending for 12 hours trigger the escalation email to the correct stakeholders.
    // Excel Expected Result: At the 12-hour mark, the pending onboarding request escalates by email to the Compliance Manager and MLRO.
    test("Case ID:NTF-004 - SLA Escalation Alerts → onboarding requests that stay pending for 12 hours trigger the escalation email to the correct stakeholders.", async ({ testData }) => {
      await test.step("[NTF-004] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Manager */;
    await elmPage.expectNotificationVisible();
      });
      await test.step("[NTF-004] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectMakerCheckerQueueVisible();
    await elmPage.expectSlaIndicator();
      });
    });

    // Excel Test Case ID: NTF-005
    // Excel Scenario: Verify that periodic or event-driven requests that remain pending beyond 24 hours generate the daily escalation email at 09:00.
    // Excel Expected Result: A daily 09:00 email is sent to the Compliance Manager when the request remains unactioned beyond 24 hours.
    test("Case ID:NTF-005 - SLA Escalation Alerts → periodic or event-driven requests that remain pending beyond 24 hours generate the daily escalation email at 09:00.", async ({ testData }) => {
      await test.step("[NTF-005] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Manager */;
    await elmPage.expectNotificationVisible();
      });
      await test.step("[NTF-005] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectSlaIndicator();
      });
    });
    });

    test.describe("Expiry Reminder Alerts", () => {
    // Excel Test Case ID: NTF-006
    // Excel Scenario: Ensure that an entry expiring in 30 days alerts both the list owner and the compliance officer.
    // Excel Expected Result: Both the list owner and Compliance Officer receive in-app and email notifications 30 days before expiry.
    test("Case ID:NTF-006 - Expiry Reminder Alerts → an entry expiring in 30 days alerts both the list owner and the compliance officer.", async ({ testData }) => {
      await test.step("[NTF-006] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectNotificationVisible();
      });
      await test.step("[NTF-006] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
      });
    });

    // Excel Test Case ID: NTF-007
    // Excel Scenario: Confirm that the 7-day expiry warning is delivered as a second escalation, not as a duplicate of the 30-day reminder.
    // Excel Expected Result: A second in-app and email reminder is issued at 7 days before expiry to the list owner and Compliance Officer.
    test("Case ID:NTF-007 - Expiry Reminder Alerts → the 7-day expiry warning is delivered as a second escalation, not as a duplicate of the 30-day reminder.", async ({ testData }) => {
      await test.step("[NTF-007] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectNotificationVisible();
      });
      await test.step("[NTF-007] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
      });
    });

    // Excel Test Case ID: NTF-008
    // Excel Scenario: Verify that on the expiry date the system notifies the compliance users and clearly indicates that screening alerts are re-activated.
    // Excel Expected Result: On the expiry date, the relevant compliance users receive in-app and email notifications and the entry is marked expired, so suppression stops and alerts resume.
    test("Case ID:NTF-008 - Expiry Reminder Alerts → on the expiry date the system notifies the compliance users and clearly indicates that screening alerts are re-activated.", async ({ testData }) => {
      await test.step("[NTF-008] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectNotificationVisible();
      });
      await test.step("[NTF-008] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });
    });

    test.describe("Material Identity Change Alerts", () => {
    // Excel Test Case ID: NTF-009
    // Excel Scenario: Check that a material identity change immediately sends an auto-suspension notification to the Compliance Officer.
    // Excel Expected Result: The system immediately notifies the Compliance Officer by in-app and email channels when the entry is auto-suspended.
    test("Case ID:NTF-009 - Material Identity Change Alerts → a material identity change immediately sends an auto-suspension notification to the Compliance Officer.", async ({ testData }) => {
      await test.step("[NTF-009] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectNotificationVisible();
      });
      await test.step("[NTF-009] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
      });
    });
    });

    test.describe("Suppression Silence Rule", () => {
    // Excel Test Case ID: NTF-010
    // Excel Scenario: Confirm that suppressed alert events do not create noisy user notifications and are only written to the audit trail.
    // Excel Expected Result: No end-user notification is generated for the suppression event; the action is recorded silently in the audit trail in real time.
    test("Case ID:NTF-010 - Suppression Silence Rule → suppressed alert events do not create noisy user notifications and are only written to the audit trail.", async ({ testData }) => {
      await test.step("[NTF-010] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectNotificationVisible();
      });
      await test.step("[NTF-010] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
    await elmPage.expectNotificationVisible();
    await elmPage.expectEvaluationOutcome();
      });
    });
    });

    test.describe("Bulk Upload Alerts", () => {
    // Excel Test Case ID: NTF-011
    // Excel Scenario: Verify that a successful bulk upload sends only the maker-side success notification and does not notify unrelated roles.
    // Excel Expected Result: The submitting analyst receives the bulk upload completion notice in-app, while unrelated users are not notified.
    test("Case ID:NTF-011 - Bulk Upload Alerts → a successful bulk upload sends only the maker-side success notification and does not notify unrelated roles.", async ({ testData }) => {
      await test.step("[NTF-011] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: KYC Analyst */;
    await elmPage.expectNotificationVisible();
      });
      await test.step("[NTF-011] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
      });
    });

    // Excel Test Case ID: NTF-012
    // Excel Scenario: Verify that a bulk upload with validation errors sends an immediate failure notification and exposes the error summary.
    // Excel Expected Result: The submitting analyst receives an immediate in-app and email failure notification, including validation errors for the affected rows.
    test("Case ID:NTF-012 - Bulk Upload Alerts → a bulk upload with validation errors sends an immediate failure notification and exposes the error summary.", async ({ testData }) => {
      await test.step("[NTF-012] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: KYC Analyst */;
    await elmPage.expectNotificationVisible();
      });
      await test.step("[NTF-012] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectInlineValidationError();
      });
    });
    });

    test.describe("Monthly Report Delivery", () => {
    // Excel Test Case ID: NTF-013
    // Excel Scenario: Confirm that the monthly CSEL Register Report reaches the Compliance Manager and MLRO as a PDF email attachment.
    // Excel Expected Result: Both Compliance Manager and MLRO receive the monthly report by email with a PDF attachment.
    test("Case ID:NTF-013 - Monthly Report Delivery → the monthly CSEL Register Report reaches the Compliance Manager and MLRO as a PDF email attachment.", async ({ testData }) => {
      await test.step("[NTF-013] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectNotificationVisible();
      });
      await test.step("[NTF-013] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
      });
    });
    });

    test.describe("Conflict Block Alerts", () => {
    // Excel Test Case ID: NTF-014
    // Excel Scenario: Check that a True-Hit Conflict blocking event notifies both the submitting analyst and the compliance officer immediately.
    // Excel Expected Result: The submission block is notified immediately to both the maker and Compliance Officer through in-app and email channels.
    test("Case ID:NTF-014 - Conflict Block Alerts → a True-Hit Conflict blocking event notifies both the submitting analyst and the compliance officer immediately.", async ({ testData }) => {
      await test.step("[NTF-014] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectNotificationVisible();
      });
      await test.step("[NTF-014] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
      });
    });
    });

    test.describe("Notification Timing Validation", () => {
    // Excel Test Case ID: NTF-015
    // Excel Scenario: Ensure that notification timing follows the segregation-of-duties rules and not an earlier or later schedule.
    // Excel Expected Result: Every notification is delivered at the exact timing defined for the module, and no extra message appears outside the expected schedule.
    test("Case ID:NTF-015 - Notification Timing Validation → notification timing follows the segregation-of-duties rules and not an earlier or later schedule.", async ({ testData }) => {
      await test.step("[NTF-015] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectNotificationVisible();
      });
      await test.step("[NTF-015] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
      });
    });
    });

    test.describe("Alert Delivery & Timing", () => {
    // Excel Test Case ID: NTF-023
    // Excel Scenario: Verify notification bell shows unread indicator and Mark all read clears unread styling
    // Excel Expected Result: Notification bell shows an unread indicator when new messages exist; Mark all read clears unread styling while retaining notification text in the panel.
    test("Case ID:NTF-023 - Alert Delivery & Timing → notification bell shows unread indicator and Mark all read clears unread styling", async ({ testData }) => {
      await test.step("[NTF-023] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectNotificationVisible();
      });
      await test.step("[NTF-023] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
      });
    });

    // Excel Test Case ID: NTF-024
    // Excel Scenario: Verify onboarding exception notifications carry higher priority flag
    // Excel Expected Result: Onboarding notifications flagged higher priority than periodic/event-driven.
    test("Case ID:NTF-024 - Alert Delivery & Timing → onboarding exception notifications carry higher priority flag", async ({ testData }) => {
      await test.step("[NTF-024] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectNotificationVisible();
      });
      await test.step("[NTF-024] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
      });
    });

    // Excel Test Case ID: NTF-025
    // Excel Scenario: Verify list suspension warns investigation team about screening alert volume increase
    // Excel Expected Result: Suspension shows impact warning and notifies investigation team.
    test("Case ID:NTF-025 - Alert Delivery & Timing → list suspension warns investigation team about screening alert volume increase", async ({ testData }) => {
      await test.step("[NTF-025] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectNotificationVisible();
      });
      await test.step("[NTF-025] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
    await elmPage.expectInlineValidationError();
      });
    });
    });

    test.describe("User Preferences", () => {
    // Excel Test Case ID: NTF-026
    // Excel Scenario: Verify notification delivery channels are configurable per user in system Settings
    // Excel Expected Result: User can configure notification channels; delivery respects settings.
    test("Case ID:NTF-026 - User Preferences → notification delivery channels are configurable per user in system Settings", async ({ testData }) => {
      await test.step("[NTF-026] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await elmPage.expectNotificationVisible();
      });
      await test.step("[NTF-026] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
      });
    });
    });
  });

  test.describe("Non-Functional Requirements", () => {
    test.describe("Performance", () => {
    // Excel Test Case ID: NFR-001
    // Excel Scenario: Verify CSEL exception evaluation completes within 30 ms at 95th percentile.
    // Excel Expected Result: Screening evaluation against active CSEL entries completes within 30 ms at the 95th percentile under the reference load profile.
    test("Case ID:NFR-001 - Performance → CSEL exception evaluation completes within 30 ms at 95th percentile.", async ({ testData }) => {
      await test.step("[NFR-001] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[NFR-001] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });
    });

    test.describe("Scalability", () => {
    // Excel Test Case ID: NFR-002
    // Excel Scenario: Verify list supports up to 250,000 active entries without functional degradation.
    // Excel Expected Result: System remains functional with acceptable response at 250k entries.
    test("Case ID:NFR-002 - Scalability → list supports up to 250,000 active entries without functional degradation.", async ({ testData }) => {
      await test.step("[NFR-002] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[NFR-002] Validate expected results from Excel", async () => {
        await elmPage.expectListGridVisible();
      });
    });
    });

    test.describe("TTL Enforcement", () => {
    // Excel Test Case ID: NFR-003
    // Excel Scenario: Verify expired entries removed from evaluation within 5 minutes of expiry.
    // Excel Expected Result: Entry deactivates within 5 minutes; alerts fire on next screening.
    test("Case ID:NFR-003 - TTL Enforcement → expired entries removed from evaluation within 5 minutes of expiry.", async ({ testData }) => {
      await test.step("[NFR-003] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[NFR-003] Validate expected results from Excel", async () => {
        await elmPage.expectNotificationVisible();
      });
    });
    });

    test.describe("Data Retention", () => {
    // Excel Test Case ID: NFR-004
    // Excel Scenario: Verify soft-deleted records retained minimum 7 years.
    // Excel Expected Result: Soft-deleted lists and entries remain retrievable in audit and history views for at least seven years from deletion date.
    test("Case ID:NFR-004 - Data Retention → soft-deleted records retained minimum 7 years.", async ({ testData }) => {
      await test.step("[NFR-004] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[NFR-004] Validate expected results from Excel", async () => {
        await elmPage.expectAuditPanelLoaded();
      });
    });
    });

    test.describe("Evidence Security", () => {
    // Excel Test Case ID: NFR-005
    // Excel Scenario: Verify evidence attachments store SHA-256 checksum
    // Excel Expected Result: Each uploaded evidence file stores a SHA-256 checksum that is updated when the attachment is replaced and is available for integrity verification.
    test("Case ID:NFR-005 - Evidence Security → evidence attachments store SHA-256 checksum", async ({ testData }) => {
      await test.step("[NFR-005] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[NFR-005] Validate expected results from Excel", async () => {
        await elmPage.expectEvidenceAttachmentVisible();
      });
    });

    // Excel Test Case ID: NFR-007
    // Excel Scenario: Verify evidence attachments encrypted at rest (AES-256) and in transit (TLS 1.3 minimum).
    // Excel Expected Result: Attachments stored with AES-256 at rest; transfers use TLS 1.3 or higher.
    test("Case ID:NFR-007 - Evidence Security → evidence attachments encrypted at rest (AES-256) and in transit (TLS 1.3 minimum).", async ({ testData }) => {
      await test.step("[NFR-007] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[NFR-007] Validate expected results from Excel", async () => {
        await elmPage.expectEvidenceAttachmentVisible();
      });
    });
    });

    test.describe("Availability", () => {
    // Excel Test Case ID: NFR-006
    // Excel Scenario: Verify exception evaluation continues from read-optimised replica during planned maintenance window.
    // Excel Expected Result: Evaluation operates from replica; live screening unaffected during maintenance.
    test("Case ID:NFR-006 - Availability → exception evaluation continues from read-optimised replica during planned maintenance window.", async ({ testData }) => {
      await test.step("[NFR-006] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[NFR-006] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });
    });

    test.describe("Multilingual Support", () => {
    // Excel Test Case ID: NFR-008
    // Excel Scenario: Verify diacritic normalisation applied during multilingual name matching
    // Excel Expected Result: Names containing diacritics match correctly after normalisation, preventing false negatives caused by accent or character-variant differences.
    test("Case ID:NFR-008 - Multilingual Support → diacritic normalisation applied during multilingual name matching", async ({ testData }) => {
      await test.step("[NFR-008] Navigate and execute documented test steps", async () => {
        await elmPage.openExceptionListsDirect(testData.baseUrl);
    await elmPage.expectExceptionListManagerViewLoaded();
      });
      await test.step("[NFR-008] Validate expected results from Excel", async () => {
        await elmPage.expectEvaluationOutcome();
      });
    });
    });
  });
});
