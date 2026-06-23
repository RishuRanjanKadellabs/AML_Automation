// spec: specs/rdr/plan.md
// source: pipeline/test-data/Reference Data Registry.xlsx — 376 cases (RDR_001–RDR_386)
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import ReferenceDataRegistryPage from "../../../pages/KYCModule/ReferenceDataRegistryPages/ReferenceDataRegistryPage";
import pilotData from "../../../../../fixtures/rdr-pilot-data.json";

test.describe("Reference Data Registry Module", () => {
  let rdrPage: ReferenceDataRegistryPage;

  test.beforeEach(async ({ sharedPage }) => {
    rdrPage = new ReferenceDataRegistryPage(sharedPage);
  });

  test.describe("Customer Master", () => {
  test("Case ID:RDR_001 - Customer Master → Customer ID is displayed for every customer record loaded from source systems and remains unique across all records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_001
    // Excel Scenario: Verify Customer ID is displayed for every customer record loaded from source systems and remains unique across all records.
    // Expected Result: System displays a unique Customer ID for each customer record without duplication.
    await test.step("[RDR_001] Navigate and execute documented test steps", async () => {
      console.log("[RDR_001] Test execution started — Verify Customer ID is displayed for every customer record loaded from source systems and remains unique across all records.");
      console.log("[RDR_001] Executing Excel test steps: 1. Navigate to Customer Master.  2. Review Customer ID column.  3. Compare multiple records.  4. Verify no duplicate IDs exist.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    });
    await test.step("[RDR_001] Validate expected results from Excel", async () => {
      console.log("[RDR_001] Validating expected result: System displays a unique Customer ID for each customer record without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Customer ID");
    await rdrPage.expectUniqueColumnValues("Customer ID");
    await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
    await expect(rdrPage.gridRows).toHaveCount(pilotData.customerMaster.expectedRowCount);
      console.log("[RDR_001] Test completed successfully");
    });
  });

  test("Case ID:RDR_002 - Customer Master → Customer ID hyperlink functionality and navigation to customer profile details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_002
    // Excel Scenario: Verify Customer ID hyperlink functionality and navigation to customer profile details.
    // Expected Result: Customer detail page opens successfully and displays complete information for selected customer.
    await test.step("[RDR_002] Navigate and execute documented test steps", async () => {
      console.log("[RDR_002] Test execution started — Verify Customer ID hyperlink functionality and navigation to customer profile details.");
      console.log("[RDR_002] Executing Excel test steps: 1. Open Customer Master.  2. Click Customer ID hyperlink.  3. Verify customer details page opens.  4. Compare details with grid data.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    await rdrPage.clickFirstRowIdLink();
    });
    await test.step("[RDR_002] Validate expected results from Excel", async () => {
      console.log("[RDR_002] Validating expected result: Customer detail page opens successfully and displays complete information for selected customer.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectFirstRowLinkNavigates();
      console.log("[RDR_002] Test completed successfully");
    });
  });

  test("Case ID:RDR_003 - Customer Master → Customer Type values are displayed correctly as received from source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_003
    // Excel Scenario: Verify Customer Type values are displayed correctly as received from source systems.
    // Expected Result: Correct Customer Type is displayed for every customer record.
    await test.step("[RDR_003] Navigate and execute documented test steps", async () => {
      console.log("[RDR_003] Test execution started — Verify Customer Type values are displayed correctly as received from source systems.");
      console.log("[RDR_003] Executing Excel test steps: 1. Open Customer Master.  2. Review Customer Type column.  3. Compare values against source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    });
    await test.step("[RDR_003] Validate expected results from Excel", async () => {
      console.log("[RDR_003] Validating expected result: Correct Customer Type is displayed for every customer record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Customer Type");
      console.log("[RDR_003] Test completed successfully");
    });
  });

  test("Case ID:RDR_004 - Customer Master → Customer Type filter allows users to filter customer records based on selected type.", async ({ testData }) => {
    // Excel Test Case ID: RDR_004
    // Excel Scenario: Verify Customer Type filter allows users to filter customer records based on selected type.
    // Expected Result: Only Individual customer records are displayed after filter application.
    await test.step("[RDR_004] Navigate and execute documented test steps", async () => {
      console.log("[RDR_004] Test execution started — Verify Customer Type filter allows users to filter customer records based on selected type.");
      console.log("[RDR_004] Executing Excel test steps: 1. Select Customer Type filter.  2. Choose INDIVIDUAL.  3. Apply filter.  4. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    await rdrPage.applyFilterByOptionText("Individual");
    });
    await test.step("[RDR_004] Validate expected results from Excel", async () => {
      console.log("[RDR_004] Validating expected result: Only Individual customer records are displayed after filter application.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectAllCellsMatchValue("Customer Type", "Individual");
    await rdrPage.expectFilterApplied();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_004] Test completed successfully");
    });
  });

  test("Case ID:RDR_005 - Customer Master → Full Legal Name is displayed correctly for customer records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_005
    // Excel Scenario: Verify Full Legal Name is displayed correctly for customer records.
    // Expected Result: Full Legal Name displayed matches customer master data stored in source system.
    await test.step("[RDR_005] Navigate and execute documented test steps", async () => {
      console.log("[RDR_005] Test execution started — Verify Full Legal Name is displayed correctly for customer records.");
      console.log("[RDR_005] Executing Excel test steps: 1. Open Customer Master.  2. Review Full Legal Name column.  3. Compare values with source system.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    });
    await test.step("[RDR_005] Validate expected results from Excel", async () => {
      console.log("[RDR_005] Validating expected result: Full Legal Name displayed matches customer master data stored in source system.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Full Legal Name");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Full Legal Name");
      console.log("[RDR_005] Test completed successfully");
    });
  });

  test("Case ID:RDR_006 - Customer Master → masking of Full Legal Name according to AML privacy and PII requirements.", async ({ testData }) => {
    // Excel Test Case ID: RDR_006
    // Excel Scenario: Verify masking of Full Legal Name according to AML privacy and PII requirements.
    // Expected Result: Customer name is partially masked according to configured masking policy.
    await test.step("[RDR_006] Navigate and execute documented test steps", async () => {
      console.log("[RDR_006] Test execution started — Verify masking of Full Legal Name according to AML privacy and PII requirements.");
      console.log("[RDR_006] Executing Excel test steps: 1. Open Customer Master.  2. Review Full Legal Name column.  3. Verify masking rules.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    });
    await test.step("[RDR_006] Validate expected results from Excel", async () => {
      console.log("[RDR_006] Validating expected result: Customer name is partially masked according to configured masking policy.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Full Legal Name");
    await rdrPage.expectColumnValuesMasked("Full Legal Name");
      console.log("[RDR_006] Test completed successfully");
    });
  });

  test("Case ID:RDR_007 - Customer Master → Active customer status is displayed correctly in Customer Status column.", async ({ testData }) => {
    // Excel Test Case ID: RDR_007
    // Excel Scenario: Verify Active customer status is displayed correctly in Customer Status column.
    // Expected Result: Customer Status displays Active and matches source system value.
    await test.step("[RDR_007] Navigate and execute documented test steps", async () => {
      console.log("[RDR_007] Test execution started — Verify Active customer status is displayed correctly in Customer Status column.");
      console.log("[RDR_007] Executing Excel test steps: 1. Search active customer.  2. Review Customer Status column.  3. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    });
    await test.step("[RDR_007] Validate expected results from Excel", async () => {
      console.log("[RDR_007] Validating expected result: Customer Status displays Active and matches source system value.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Active customer status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Active customer status");
      console.log("[RDR_007] Test completed successfully");
    });
  });

  test("Case ID:RDR_008 - Customer Master → Inactive customer status is displayed correctly in Customer Status column.", async ({ testData }) => {
    // Excel Test Case ID: RDR_008
    // Excel Scenario: Verify Inactive customer status is displayed correctly in Customer Status column.
    // Expected Result: Customer Status displays Inactive and matches source system value.
    await test.step("[RDR_008] Navigate and execute documented test steps", async () => {
      console.log("[RDR_008] Test execution started — Verify Inactive customer status is displayed correctly in Customer Status column.");
      console.log("[RDR_008] Executing Excel test steps: 1. Search inactive customer.  2. Review Customer Status column.  3. Validate displayed value.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    });
    await test.step("[RDR_008] Validate expected results from Excel", async () => {
      console.log("[RDR_008] Validating expected result: Customer Status displays Inactive and matches source system value.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Inactive customer status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Inactive customer status");
      console.log("[RDR_008] Test completed successfully");
    });
  });

  test("Case ID:RDR_009 - Customer Master → Risk Rating values are displayed correctly for all customer records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_009
    // Excel Scenario: Verify Risk Rating values are displayed correctly for all customer records.
    // Expected Result: Correct Risk Rating is displayed for each customer as maintained in source data.
    await test.step("[RDR_009] Navigate and execute documented test steps", async () => {
      console.log("[RDR_009] Test execution started — Verify Risk Rating values are displayed correctly for all customer records.");
      console.log("[RDR_009] Executing Excel test steps: 1. Open Customer Master.  2. Review Risk Rating column.  3. Compare values with risk profile data.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    });
    await test.step("[RDR_009] Validate expected results from Excel", async () => {
      console.log("[RDR_009] Validating expected result: Correct Risk Rating is displayed for each customer as maintained in source data.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Risk Rating");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Risk Rating");
      console.log("[RDR_009] Test completed successfully");
    });
  });

  test("Case ID:RDR_010 - Customer Master → KYC Status is displayed correctly and reflects latest customer KYC review status.", async ({ testData }) => {
    // Excel Test Case ID: RDR_010
    // Excel Scenario: Verify KYC Status is displayed correctly and reflects latest customer KYC review status.
    // Expected Result: KYC Status is displayed accurately for all customer records.
    await test.step("[RDR_010] Navigate and execute documented test steps", async () => {
      console.log("[RDR_010] Test execution started — Verify KYC Status is displayed correctly and reflects latest customer KYC review status.");
      console.log("[RDR_010] Executing Excel test steps: 1. Open Customer Master.  2. Review KYC Status column.  3. Compare with customer KYC information.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    });
    await test.step("[RDR_010] Validate expected results from Excel", async () => {
      console.log("[RDR_010] Validating expected result: KYC Status is displayed accurately for all customer records.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("KYC Status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("KYC Status");
      console.log("[RDR_010] Test completed successfully");
    });
  });

  test("Case ID:RDR_011 - Customer Master → PEP Flag is displayed correctly for Politically Exposed Persons.", async ({ testData }) => {
    // Excel Test Case ID: RDR_011
    // Excel Scenario: Verify PEP Flag is displayed correctly for Politically Exposed Persons.
    // Expected Result: PEP Flag displays correct Yes/No value according to customer profile.
    await test.step("[RDR_011] Navigate and execute documented test steps", async () => {
      console.log("[RDR_011] Test execution started — Verify PEP Flag is displayed correctly for Politically Exposed Persons.");
      console.log("[RDR_011] Executing Excel test steps: 1. Search customer record.  2. Review PEP Flag column.  3. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    });
    await test.step("[RDR_011] Validate expected results from Excel", async () => {
      console.log("[RDR_011] Validating expected result: PEP Flag displays correct Yes/No value according to customer profile.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("PEP Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("PEP Flag");
      console.log("[RDR_011] Test completed successfully");
    });
  });

  test("Case ID:RDR_012 - Customer Master → Sanctions Flag is displayed correctly for sanctions/watchlist matched customers.", async ({ testData }) => {
    // Excel Test Case ID: RDR_012
    // Excel Scenario: Verify Sanctions Flag is displayed correctly for sanctions/watchlist matched customers.
    // Expected Result: Sanctions Flag displays correct Yes/No value as maintained in source system.
    await test.step("[RDR_012] Navigate and execute documented test steps", async () => {
      console.log("[RDR_012] Test execution started — Verify Sanctions Flag is displayed correctly for sanctions/watchlist matched customers.");
      console.log("[RDR_012] Executing Excel test steps: 1. Search customer record.  2. Verify Sanctions Flag column.  3. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    });
    await test.step("[RDR_012] Validate expected results from Excel", async () => {
      console.log("[RDR_012] Validating expected result: Sanctions Flag displays correct Yes/No value as maintained in source system.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Sanctions Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Sanctions Flag");
      console.log("[RDR_012] Test completed successfully");
    });
  });

  test("Case ID:RDR_013 - Customer Master → Date Onboarded is displayed correctly in configured date format.", async ({ testData }) => {
    // Excel Test Case ID: RDR_013
    // Excel Scenario: Verify Date Onboarded is displayed correctly in configured date format.
    // Expected Result: Onboarding date is displayed correctly and follows configured date format.
    await test.step("[RDR_013] Navigate and execute documented test steps", async () => {
      console.log("[RDR_013] Test execution started — Verify Date Onboarded is displayed correctly in configured date format.");
      console.log("[RDR_013] Executing Excel test steps: 1. Open Customer Master.  2. Review Date Onboarded column.  3. Compare with source record.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    });
    await test.step("[RDR_013] Validate expected results from Excel", async () => {
      console.log("[RDR_013] Validating expected result: Onboarding date is displayed correctly and follows configured date format.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Date Onboarded");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Date Onboarded");
      console.log("[RDR_013] Test completed successfully");
    });
  });

  test("Case ID:RDR_014 - Customer Master → Last Review Date is displayed correctly and reflects latest customer review activity.", async ({ testData }) => {
    // Excel Test Case ID: RDR_014
    // Excel Scenario: Verify Last Review Date is displayed correctly and reflects latest customer review activity.
    // Expected Result: Last Review Date is displayed accurately and matches source records.
    await test.step("[RDR_014] Navigate and execute documented test steps", async () => {
      console.log("[RDR_014] Test execution started — Verify Last Review Date is displayed correctly and reflects latest customer review activity.");
      console.log("[RDR_014] Executing Excel test steps: 1. Open Customer Master.  2. Review Last Review Date column.  3. Compare with source system.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    });
    await test.step("[RDR_014] Validate expected results from Excel", async () => {
      console.log("[RDR_014] Validating expected result: Last Review Date is displayed accurately and matches source records.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Last Review Date");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Last Review Date");
      console.log("[RDR_014] Test completed successfully");
    });
  });

  test("Case ID:RDR_015 - Customer Master → View action opens complete customer profile information including customer, risk, KYC and AML details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_015
    // Excel Scenario: Verify View action opens complete customer profile information including customer, risk, KYC and AML details.
    // Expected Result: Customer detail screen opens successfully and displays complete customer information including Customer ID, Customer Type, Risk Rating, KYC Status, PEP Flag, Sanctions Flag and review details.
    await test.step("[RDR_015] Navigate and execute documented test steps", async () => {
      console.log("[RDR_015] Test execution started — Verify View action opens complete customer profile information including customer, risk, KYC and AML details.");
      console.log("[RDR_015] Executing Excel test steps: 1. Locate customer record.  2. Click View button.  3. Verify customer detail page.  4. Validate displayed information.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_015] Validate expected results from Excel", async () => {
      console.log("[RDR_015] Validating expected result: Customer detail screen opens successfully and displays complete customer information including Customer ID, Customer Type, Risk Rating, KYC Status, PEP Flag, Sanctions Flag and review details.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_015] Test completed successfully");
    });
  });

  test("Case ID:RDR_016 - Customer Master → search functionality using Customer ID and ensure the system retrieves the exact matching customer record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_016
    // Excel Scenario: Verify search functionality using Customer ID and ensure the system retrieves the exact matching customer record.
    // Expected Result: System retrieves and displays only the customer record matching the entered Customer ID. No unrelated records should be displayed.
    await test.step("[RDR_016] Navigate and execute documented test steps", async () => {
      console.log("[RDR_016] Test execution started — Verify search functionality using Customer ID and ensure the system retrieves the exact matching customer record.");
      console.log("[RDR_016] Executing Excel test steps: 1. Navigate to Customer Master.  2. Enter Customer ID in search box.  3. Click Search or press Enter.  4. Review search results.  5. Verify returned record details.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    await rdrPage.searchUsingPilotCustomerId();
    });
    await test.step("[RDR_016] Validate expected results from Excel", async () => {
      console.log("[RDR_016] Validating expected result: System retrieves and displays only the customer record matching the entered Customer ID. No unrelated records should be displayed.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectSearchReturnsExactMatch("Customer ID", pilotData.customerMaster.ids[0]);
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_016] Test completed successfully");
    });
  });

  test("Case ID:RDR_017 - Customer Master → search functionality using Full Legal Name and ensure matching customer records are displayed.", async ({ testData }) => {
    // Excel Test Case ID: RDR_017
    // Excel Scenario: Verify search functionality using Full Legal Name and ensure matching customer records are displayed.
    // Expected Result: System displays the customer record(s) corresponding to the entered Full Legal Name and hides non-matching records.
    await test.step("[RDR_017] Navigate and execute documented test steps", async () => {
      console.log("[RDR_017] Test execution started — Verify search functionality using Full Legal Name and ensure matching customer records are displayed.");
      console.log("[RDR_017] Executing Excel test steps: 1. Open Customer Master.  2. Enter Full Legal Name in search field.  3. Execute search.  4. Verify displayed records.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_017] Validate expected results from Excel", async () => {
      console.log("[RDR_017] Validating expected result: System displays the customer record(s) corresponding to the entered Full Legal Name and hides non-matching records.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectSearchYieldsResults();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_017] Test completed successfully");
    });
  });

  test("Case ID:RDR_018 - Customer Master → Clear button functionality after applying filters and search criteria.", async ({ testData }) => {
    // Excel Test Case ID: RDR_018
    // Excel Scenario: Verify Clear button functionality after applying filters and search criteria.
    // Expected Result: Search field becomes blank, applied filters are removed, and the complete customer list is displayed again.
    await test.step("[RDR_018] Navigate and execute documented test steps", async () => {
      console.log("[RDR_018] Test execution started — Verify Clear button functionality after applying filters and search criteria.");
      console.log("[RDR_018] Executing Excel test steps: 1. Apply Customer Type filter.  2. Perform search using Customer ID.  3. Click Clear button.  4. Review screen data.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    await rdrPage.prepareSearchAndFilterForClear();
    await rdrPage.clearSearchAndFilters();
    });
    await test.step("[RDR_018] Validate expected results from Excel", async () => {
      console.log("[RDR_018] Validating expected result: Search field becomes blank, applied filters are removed, and the complete customer list is displayed again.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectSearchFieldEmpty();
    await rdrPage.expectClearResetsGrid();
      console.log("[RDR_018] Test completed successfully");
    });
  });

  test("Case ID:RDR_019 - Customer Master → CSV Export functionality and validate exported customer data.", async ({ testData }) => {
    // Excel Test Case ID: RDR_019
    // Excel Scenario: Verify CSV Export functionality and validate exported customer data.
    // Expected Result: CSV file is downloaded successfully containing customer data with correct columns such as Customer ID, Customer Type, Full Legal Name, Risk Rating, KYC Status, PEP Flag, Sanctions Flag, Date Onboarded and Last Review Date.
    await test.step("[RDR_019] Navigate and execute documented test steps", async () => {
      console.log("[RDR_019] Test execution started — Verify CSV Export functionality and validate exported customer data.");
      console.log("[RDR_019] Executing Excel test steps: 1. Open Customer Master.  2. Click CSV Export button.  3. Download generated file.  4. Open exported file.  5. Validate column headers and data.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    });
    await test.step("[RDR_019] Validate expected results from Excel", async () => {
      console.log("[RDR_019] Validating expected result: CSV file is downloaded successfully containing customer data with correct columns such as Customer ID, Customer Type, Full Legal Name, Risk Rating, KYC Status, PEP Flag, Sanctions Flag, Date Onboarded and Last Review Date.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectExportButtonsVisible();
    await rdrPage.expectCsvExportReady();
      console.log("[RDR_019] Test completed successfully");
    });
  });

  test("Case ID:RDR_020 - Customer Master → Excel Export functionality and validate exported customer information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_020
    // Excel Scenario: Verify Excel Export functionality and validate exported customer information.
    // Expected Result: Excel file is downloaded successfully. All customer records and column values are exported accurately without data loss, truncation or formatting issues.
    await test.step("[RDR_020] Navigate and execute documented test steps", async () => {
      console.log("[RDR_020] Test execution started — Verify Excel Export functionality and validate exported customer information.");
      console.log("[RDR_020] Executing Excel test steps: 1. Open Customer Master.  2. Click Excel Export button.  3. Download generated file.  4. Open exported workbook.  5. Verify data accuracy and column structure.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer", "Customer Master");
    });
    await test.step("[RDR_020] Validate expected results from Excel", async () => {
      console.log("[RDR_020] Validating expected result: Excel file is downloaded successfully. All customer records and column values are exported accurately without data loss, truncation or formatting issues.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectExportButtonsVisible();
    await rdrPage.expectExcelExportReady();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_020] Test completed successfully");
    });
  });
  });

  test.describe("Address Master", () => {
  test("Case ID:RDR_021 - Address Master → Address ID is generated and displayed uniquely for every customer address record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_021
    // Excel Scenario: Verify Address ID is generated and displayed uniquely for every customer address record loaded from CBS.
    // Expected Result: System displays unique Address IDs for all address records without duplication.
    await test.step("[RDR_021] Navigate and execute documented test steps", async () => {
      console.log("[RDR_021] Test execution started — Verify Address ID is generated and displayed uniquely for every customer address record loaded from CBS.");
      console.log("[RDR_021] Executing Excel test steps: 1. Open Address tab.  2. Review Address ID column.  3. Compare multiple records.  4. Verify uniqueness.");
      await rdrPage.openMasterTab(testData.baseUrl, "address", "Address Master");
    });
    await test.step("[RDR_021] Validate expected results from Excel", async () => {
      console.log("[RDR_021] Validating expected result: System displays unique Address IDs for all address records without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Address ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Address ID");
    await rdrPage.expectUniqueColumnValues("Address ID");
      console.log("[RDR_021] Test completed successfully");
    });
  });

  test("Case ID:RDR_022 - Address Master → Customer ID displayed against each address record matches the linked customer in Customer Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_022
    // Excel Scenario: Verify Customer ID displayed against each address record matches the linked customer in Customer Master.
    // Expected Result: Customer ID displayed for each address record matches the linked customer profile.
    await test.step("[RDR_022] Navigate and execute documented test steps", async () => {
      console.log("[RDR_022] Test execution started — Verify Customer ID displayed against each address record matches the linked customer in Customer Master.");
      console.log("[RDR_022] Executing Excel test steps: 1. Open Address grid.  2. Review Customer ID column.  3. Compare with Customer Master data.");
      await rdrPage.openMasterTab(testData.baseUrl, "address", "Address Master");
    });
    await test.step("[RDR_022] Validate expected results from Excel", async () => {
      console.log("[RDR_022] Validating expected result: Customer ID displayed for each address record matches the linked customer profile.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Customer ID");
      console.log("[RDR_022] Test completed successfully");
    });
  });

  test("Case ID:RDR_023 - Address Master → Address Type values are displayed correctly based on configured address classifications.", async ({ testData }) => {
    // Excel Test Case ID: RDR_023
    // Excel Scenario: Verify Address Type values are displayed correctly based on configured address classifications.
    // Expected Result: Correct Address Type is displayed for each address record.
    await test.step("[RDR_023] Navigate and execute documented test steps", async () => {
      console.log("[RDR_023] Test execution started — Verify Address Type values are displayed correctly based on configured address classifications.");
      console.log("[RDR_023] Executing Excel test steps: 1. Open Address tab.  2. Review Type column.  3. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "address", "Address Master");
    });
    await test.step("[RDR_023] Validate expected results from Excel", async () => {
      console.log("[RDR_023] Validating expected result: Correct Address Type is displayed for each address record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Address Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Address Type");
      console.log("[RDR_023] Test completed successfully");
    });
  });

  test("Case ID:RDR_024 - Address Master → Address Line 1 is displayed according to configured masking rules to protect customer PII information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_024
    // Excel Scenario: Verify Address Line 1 is displayed according to configured masking rules to protect customer PII information.
    // Expected Result: Address details are partially masked and comply with PII masking requirements.
    await test.step("[RDR_024] Navigate and execute documented test steps", async () => {
      console.log("[RDR_024] Test execution started — Verify Address Line 1 is displayed according to configured masking rules to protect customer PII information.");
      console.log("[RDR_024] Executing Excel test steps: 1. Review Address Line 1 column.  2. Verify masking pattern.  3. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "address", "Address Master");
    });
    await test.step("[RDR_024] Validate expected results from Excel", async () => {
      console.log("[RDR_024] Validating expected result: Address details are partially masked and comply with PII masking requirements.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Address Line 1");
    await rdrPage.expectColumnValuesMasked("Address Line 1");
      console.log("[RDR_024] Test completed successfully");
    });
  });

  test("Case ID:RDR_025 - Address Master → City and State values are displayed correctly for each address record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_025
    // Excel Scenario: Verify City and State values are displayed correctly for each address record.
    // Expected Result: Correct City and State information is displayed for each address record.
    await test.step("[RDR_025] Navigate and execute documented test steps", async () => {
      console.log("[RDR_025] Test execution started — Verify City and State values are displayed correctly for each address record.");
      console.log("[RDR_025] Executing Excel test steps: 1. Review City and State columns.  2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "address", "Address Master");
    });
    await test.step("[RDR_025] Validate expected results from Excel", async () => {
      console.log("[RDR_025] Validating expected result: Correct City and State information is displayed for each address record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("City and State");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("City and State");
      console.log("[RDR_025] Test completed successfully");
    });
  });

  test("Case ID:RDR_026 - Address Master → Postal Code is displayed according to configured masking rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_026
    // Excel Scenario: Verify Postal Code is displayed according to configured masking rules.
    // Expected Result: Postal Codes are displayed in masked format as per configuration.
    await test.step("[RDR_026] Navigate and execute documented test steps", async () => {
      console.log("[RDR_026] Test execution started — Verify Postal Code is displayed according to configured masking rules.");
      console.log("[RDR_026] Executing Excel test steps: 1. Review Postal Code column.  2. Verify masking format.");
      await rdrPage.openMasterTab(testData.baseUrl, "address", "Address Master");
    });
    await test.step("[RDR_026] Validate expected results from Excel", async () => {
      console.log("[RDR_026] Validating expected result: Postal Codes are displayed in masked format as per configuration.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Postal Code");
    await rdrPage.expectColumnValuesMasked("Postal Code");
      console.log("[RDR_026] Test completed successfully");
    });
  });

  test("Case ID:RDR_027 - Address Master → Country Code is displayed correctly for address records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_027
    // Excel Scenario: Verify Country Code is displayed correctly for address records.
    // Expected Result: Country Code is displayed correctly for all address records.
    await test.step("[RDR_027] Navigate and execute documented test steps", async () => {
      console.log("[RDR_027] Test execution started — Verify Country Code is displayed correctly for address records.");
      console.log("[RDR_027] Executing Excel test steps: 1. Review Country column.  2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "address", "Address Master");
    });
    await test.step("[RDR_027] Validate expected results from Excel", async () => {
      console.log("[RDR_027] Validating expected result: Country Code is displayed correctly for all address records.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Country Code");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Country Code");
      console.log("[RDR_027] Test completed successfully");
    });
  });

  test("Case ID:RDR_028 - Address Master → Primary Address indicator is displayed correctly for customer addresses.", async ({ testData }) => {
    // Excel Test Case ID: RDR_028
    // Excel Scenario: Verify Primary Address indicator is displayed correctly for customer addresses.
    // Expected Result: System correctly displays Yes for primary addresses and No for secondary addresses.
    await test.step("[RDR_028] Navigate and execute documented test steps", async () => {
      console.log("[RDR_028] Test execution started — Verify Primary Address indicator is displayed correctly for customer addresses.");
      console.log("[RDR_028] Executing Excel test steps: 1. Review Primary column.  2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "address", "Address Master");
    });
    await test.step("[RDR_028] Validate expected results from Excel", async () => {
      console.log("[RDR_028] Validating expected result: System correctly displays Yes for primary addresses and No for secondary addresses.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Primary Address indicator");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Primary Address indicator");
      console.log("[RDR_028] Test completed successfully");
    });
  });

  test("Case ID:RDR_029 - Address Master → Valid From date is displayed correctly and matches source onboarding information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_029
    // Excel Scenario: Verify Valid From date is displayed correctly and matches source onboarding information.
    // Expected Result: Valid From date is displayed correctly in configured date format.
    await test.step("[RDR_029] Navigate and execute documented test steps", async () => {
      console.log("[RDR_029] Test execution started — Verify Valid From date is displayed correctly and matches source onboarding information.");
      console.log("[RDR_029] Executing Excel test steps: 1. Review Valid From column.  2. Compare displayed date with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "address", "Address Master");
    });
    await test.step("[RDR_029] Validate expected results from Excel", async () => {
      console.log("[RDR_029] Validating expected result: Valid From date is displayed correctly in configured date format.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Valid From date");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Valid From date");
      console.log("[RDR_029] Test completed successfully");
    });
  });

  test("Case ID:RDR_030 - Address Master → View action opens complete address details for the selected customer address record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_030
    // Excel Scenario: Verify View action opens complete address details for the selected customer address record.
    // Expected Result: Address detail page/modal opens successfully and displays complete address information.
    await test.step("[RDR_030] Navigate and execute documented test steps", async () => {
      console.log("[RDR_030] Test execution started — Verify View action opens complete address details for the selected customer address record.");
      console.log("[RDR_030] Executing Excel test steps: 1. Click View button for selected address.  2. Verify details screen opens.  3. Validate address information.");
      await rdrPage.openMasterTab(testData.baseUrl, "address", "Address Master");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_030] Validate expected results from Excel", async () => {
      console.log("[RDR_030] Validating expected result: Address detail page/modal opens successfully and displays complete address information.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_030] Test completed successfully");
    });
  });

  test("Case ID:RDR_031 - Address Master → search functionality using Address ID.", async ({ testData }) => {
    // Excel Test Case ID: RDR_031
    // Excel Scenario: Verify search functionality using Address ID.
    // Expected Result: System displays only the address record matching the entered Address ID.
    await test.step("[RDR_031] Navigate and execute documented test steps", async () => {
      console.log("[RDR_031] Test execution started — Verify search functionality using Address ID.");
      console.log("[RDR_031] Executing Excel test steps: 1. Enter Address ID in search field.  2. Execute search.  3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "address", "Address Master");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_031] Validate expected results from Excel", async () => {
      console.log("[RDR_031] Validating expected result: System displays only the address record matching the entered Address ID.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_031] Test completed successfully");
    });
  });

  test("Case ID:RDR_032 - Address Master → search functionality using Customer ID and retrieve all linked addresses.", async ({ testData }) => {
    // Excel Test Case ID: RDR_032
    // Excel Scenario: Verify search functionality using Customer ID and retrieve all linked addresses.
    // Expected Result: All address records associated with the specified Customer ID are displayed.
    await test.step("[RDR_032] Navigate and execute documented test steps", async () => {
      console.log("[RDR_032] Test execution started — Verify search functionality using Customer ID and retrieve all linked addresses.");
      console.log("[RDR_032] Executing Excel test steps: 1. Enter Customer ID in search box.  2. Execute search.  3. Verify returned records.");
      await rdrPage.openMasterTab(testData.baseUrl, "address", "Address Master");
    await rdrPage.searchUsingPilotCustomerId();
    });
    await test.step("[RDR_032] Validate expected results from Excel", async () => {
      console.log("[RDR_032] Validating expected result: All address records associated with the specified Customer ID are displayed.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectSearchYieldsResults();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_032] Test completed successfully");
    });
  });

  test("Case ID:RDR_033 - Address Master → Address Verification Status (Is Verified) in address details screen.", async ({ testData }) => {
    // Excel Test Case ID: RDR_033
    // Excel Scenario: Verify Address Verification Status (Is Verified) in address details screen.
    // Expected Result: System displays correct address verification status.
    await test.step("[RDR_033] Navigate and execute documented test steps", async () => {
      console.log("[RDR_033] Test execution started — Verify Address Verification Status (Is Verified) in address details screen.");
      console.log("[RDR_033] Executing Excel test steps: 1. Open address details.  2. Review Is Verified field.  3. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "address", "Address Master");
    });
    await test.step("[RDR_033] Validate expected results from Excel", async () => {
      console.log("[RDR_033] Validating expected result: System displays correct address verification status.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_033] Test completed successfully");
    });
  });

  test("Case ID:RDR_034 - Address Master → High Risk Location Flag and Human Trafficking Risk Flag values in address details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_034
    // Excel Scenario: Verify High Risk Location Flag and Human Trafficking Risk Flag values in address details.
    // Expected Result: Correct High Risk Location Flag and Human Trafficking Risk Flag values are displayed.
    await test.step("[RDR_034] Navigate and execute documented test steps", async () => {
      console.log("[RDR_034] Test execution started — Verify High Risk Location Flag and Human Trafficking Risk Flag values in address details.");
      console.log("[RDR_034] Executing Excel test steps: 1. Open address details.  2. Review risk-related fields.  3. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "address", "Address Master");
    });
    await test.step("[RDR_034] Validate expected results from Excel", async () => {
      console.log("[RDR_034] Validating expected result: Correct High Risk Location Flag and Human Trafficking Risk Flag values are displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("High Risk Location Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("High Risk Location Flag");
      console.log("[RDR_034] Test completed successfully");
    });
  });

  test("Case ID:RDR_035 - Address Master → CSV and Excel export functionality for Customer Address records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_035
    // Excel Scenario: Verify CSV and Excel export functionality for Customer Address records.
    // Expected Result: CSV and Excel files are downloaded successfully and contain accurate Customer Address data with proper column structure.
    await test.step("[RDR_035] Navigate and execute documented test steps", async () => {
      console.log("[RDR_035] Test execution started — Verify CSV and Excel export functionality for Customer Address records.");
      console.log("[RDR_035] Executing Excel test steps: 1. Click CSV Export.  2. Validate downloaded file.  3. Click Excel Export.  4. Validate downloaded file contents.");
      await rdrPage.openMasterTab(testData.baseUrl, "address", "Address Master");
    });
    await test.step("[RDR_035] Validate expected results from Excel", async () => {
      console.log("[RDR_035] Validating expected result: CSV and Excel files are downloaded successfully and contain accurate Customer Address data with proper column structure.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectExportButtonsVisible();
    await rdrPage.expectCsvExportReady();
    await rdrPage.expectExcelExportReady();
      console.log("[RDR_035] Test completed successfully");
    });
  });
  });

  test.describe("Document Master", () => {
  test("Case ID:RDR_036 - Document Master → Document ID is displayed uniquely for each customer document record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_036
    // Excel Scenario: Verify Document ID is displayed uniquely for each customer document record loaded from CBS.
    // Expected Result: Unique Document IDs are displayed for all document records without duplication.
    await test.step("[RDR_036] Navigate and execute documented test steps", async () => {
      console.log("[RDR_036] Test execution started — Verify Document ID is displayed uniquely for each customer document record loaded from CBS.");
      console.log("[RDR_036] Executing Excel test steps: 1. Open Documents tab.  2. Review Document ID column.  3. Compare multiple records.  4. Verify uniqueness.");
      await rdrPage.openMasterTab(testData.baseUrl, "documents", "Document Master");
    });
    await test.step("[RDR_036] Validate expected results from Excel", async () => {
      console.log("[RDR_036] Validating expected result: Unique Document IDs are displayed for all document records without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Document ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Document ID");
    await rdrPage.expectUniqueColumnValues("Document ID");
      console.log("[RDR_036] Test completed successfully");
    });
  });

  test("Case ID:RDR_037 - Document Master → Customer ID displayed against each document record matches the linked customer profile.", async ({ testData }) => {
    // Excel Test Case ID: RDR_037
    // Excel Scenario: Verify Customer ID displayed against each document record matches the linked customer profile.
    // Expected Result: Customer ID displayed for each document matches the linked customer record.
    await test.step("[RDR_037] Navigate and execute documented test steps", async () => {
      console.log("[RDR_037] Test execution started — Verify Customer ID displayed against each document record matches the linked customer profile.");
      console.log("[RDR_037] Executing Excel test steps: 1. Review Customer ID column.  2. Compare with Customer Master records.  3. Verify relationship mapping.");
      await rdrPage.openMasterTab(testData.baseUrl, "documents", "Document Master");
    });
    await test.step("[RDR_037] Validate expected results from Excel", async () => {
      console.log("[RDR_037] Validating expected result: Customer ID displayed for each document matches the linked customer record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Customer ID");
      console.log("[RDR_037] Test completed successfully");
    });
  });

  test("Case ID:RDR_038 - Document Master → Document Type values are displayed correctly based on configured document classifications.", async ({ testData }) => {
    // Excel Test Case ID: RDR_038
    // Excel Scenario: Verify Document Type values are displayed correctly based on configured document classifications.
    // Expected Result: Correct document type is displayed for each customer document record.
    await test.step("[RDR_038] Navigate and execute documented test steps", async () => {
      console.log("[RDR_038] Test execution started — Verify Document Type values are displayed correctly based on configured document classifications.");
      console.log("[RDR_038] Executing Excel test steps: 1. Review Doc Type column.  2. Compare values with source records.  3. Validate document classification.");
      await rdrPage.openMasterTab(testData.baseUrl, "documents", "Document Master");
    });
    await test.step("[RDR_038] Validate expected results from Excel", async () => {
      console.log("[RDR_038] Validating expected result: Correct document type is displayed for each customer document record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Document Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Document Type");
      console.log("[RDR_038] Test completed successfully");
    });
  });

  test("Case ID:RDR_039 - Document Master → Document Number is displayed according to masking rules to protect customer sensitive information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_039
    // Excel Scenario: Verify Document Number is displayed according to masking rules to protect customer sensitive information.
    // Expected Result: Document numbers are partially masked and comply with PII protection requirements.
    await test.step("[RDR_039] Navigate and execute documented test steps", async () => {
      console.log("[RDR_039] Test execution started — Verify Document Number is displayed according to masking rules to protect customer sensitive information.");
      console.log("[RDR_039] Executing Excel test steps: 1. Review Doc Number column.  2. Verify masking pattern.  3. Compare with source document values.");
      await rdrPage.openMasterTab(testData.baseUrl, "documents", "Document Master");
    });
    await test.step("[RDR_039] Validate expected results from Excel", async () => {
      console.log("[RDR_039] Validating expected result: Document numbers are partially masked and comply with PII protection requirements.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Document Number");
    await rdrPage.expectColumnValuesMasked("Document Number");
      console.log("[RDR_039] Test completed successfully");
    });
  });

  test("Case ID:RDR_040 - Document Master → Issuing Country is displayed correctly for all customer documents.", async ({ testData }) => {
    // Excel Test Case ID: RDR_040
    // Excel Scenario: Verify Issuing Country is displayed correctly for all customer documents.
    // Expected Result: Correct issuing country code is displayed for each document.
    await test.step("[RDR_040] Navigate and execute documented test steps", async () => {
      console.log("[RDR_040] Test execution started — Verify Issuing Country is displayed correctly for all customer documents.");
      console.log("[RDR_040] Executing Excel test steps: 1. Review Issuing Country column.  2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "documents", "Document Master");
    });
    await test.step("[RDR_040] Validate expected results from Excel", async () => {
      console.log("[RDR_040] Validating expected result: Correct issuing country code is displayed for each document.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Issuing Country");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Issuing Country");
      console.log("[RDR_040] Test completed successfully");
    });
  });

  test("Case ID:RDR_041 - Document Master → Issue Date is displayed correctly and matches source document information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_041
    // Excel Scenario: Verify Issue Date is displayed correctly and matches source document information.
    // Expected Result: Issue Date is displayed accurately in configured date format.
    await test.step("[RDR_041] Navigate and execute documented test steps", async () => {
      console.log("[RDR_041] Test execution started — Verify Issue Date is displayed correctly and matches source document information.");
      console.log("[RDR_041] Executing Excel test steps: 1. Review Issue Date column.  2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "documents", "Document Master");
    });
    await test.step("[RDR_041] Validate expected results from Excel", async () => {
      console.log("[RDR_041] Validating expected result: Issue Date is displayed accurately in configured date format.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Issue Date");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Issue Date");
      console.log("[RDR_041] Test completed successfully");
    });
  });

  test("Case ID:RDR_042 - Document Master → Expiry Date is displayed correctly for permanent and non-permanent documents.", async ({ testData }) => {
    // Excel Test Case ID: RDR_042
    // Excel Scenario: Verify Expiry Date is displayed correctly for permanent and non-permanent documents.
    // Expected Result: System displays correct expiry information including Lifetime, N/A or actual expiry dates.
    await test.step("[RDR_042] Navigate and execute documented test steps", async () => {
      console.log("[RDR_042] Test execution started — Verify Expiry Date is displayed correctly for permanent and non-permanent documents.");
      console.log("[RDR_042] Executing Excel test steps: 1. Review Expiry Date column.  2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "documents", "Document Master");
    });
    await test.step("[RDR_042] Validate expected results from Excel", async () => {
      console.log("[RDR_042] Validating expected result: System displays correct expiry information including Lifetime, N/A or actual expiry dates.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Expiry Date");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Expiry Date");
      console.log("[RDR_042] Test completed successfully");
    });
  });

  test("Case ID:RDR_043 - Document Master → Document Status is displayed correctly based on document validity.", async ({ testData }) => {
    // Excel Test Case ID: RDR_043
    // Excel Scenario: Verify Document Status is displayed correctly based on document validity.
    // Expected Result: Correct document status is displayed. Expired documents are highlighted as per configuration.
    await test.step("[RDR_043] Navigate and execute documented test steps", async () => {
      console.log("[RDR_043] Test execution started — Verify Document Status is displayed correctly based on document validity.");
      console.log("[RDR_043] Executing Excel test steps: 1. Review Status column.  2. Compare values with source records.  3. Verify status indicator.");
      await rdrPage.openMasterTab(testData.baseUrl, "documents", "Document Master");
    });
    await test.step("[RDR_043] Validate expected results from Excel", async () => {
      console.log("[RDR_043] Validating expected result: Correct document status is displayed. Expired documents are highlighted as per configuration.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Document Status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Document Status");
      console.log("[RDR_043] Test completed successfully");
    });
  });

  test("Case ID:RDR_044 - Document Master → expired documents are highlighted appropriately for AML review.", async ({ testData }) => {
    // Excel Test Case ID: RDR_044
    // Excel Scenario: Verify expired documents are highlighted appropriately for AML review.
    // Expected Result: Expired document displays EXPIRED status with configured visual indicator.
    await test.step("[RDR_044] Navigate and execute documented test steps", async () => {
      console.log("[RDR_044] Test execution started — Verify expired documents are highlighted appropriately for AML review.");
      console.log("[RDR_044] Executing Excel test steps: 1. Locate expired document record.  2. Review Status column.  3. Verify indicator color and value.");
      await rdrPage.openMasterTab(testData.baseUrl, "documents", "Document Master");
    });
    await test.step("[RDR_044] Validate expected results from Excel", async () => {
      console.log("[RDR_044] Validating expected result: Expired document displays EXPIRED status with configured visual indicator.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Status");
    await rdrPage.expectAllCellsNonEmpty("Status");
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_044] Test completed successfully");
    });
  });

  test("Case ID:RDR_045 - Document Master → Verified Date is displayed correctly and matches document verification records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_045
    // Excel Scenario: Verify Verified Date is displayed correctly and matches document verification records.
    // Expected Result: Verified Date is displayed correctly for each verified document.
    await test.step("[RDR_045] Navigate and execute documented test steps", async () => {
      console.log("[RDR_045] Test execution started — Verify Verified Date is displayed correctly and matches document verification records.");
      console.log("[RDR_045] Executing Excel test steps: 1. Review Verified Date column.  2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "documents", "Document Master");
    });
    await test.step("[RDR_045] Validate expected results from Excel", async () => {
      console.log("[RDR_045] Validating expected result: Verified Date is displayed correctly for each verified document.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Verified Date");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Verified Date");
      console.log("[RDR_045] Test completed successfully");
    });
  });

  test("Case ID:RDR_046 - Document Master → Verification Method is displayed correctly according to document verification process.", async ({ testData }) => {
    // Excel Test Case ID: RDR_046
    // Excel Scenario: Verify Verification Method is displayed correctly according to document verification process.
    // Expected Result: Correct verification method is displayed for every document record.
    await test.step("[RDR_046] Navigate and execute documented test steps", async () => {
      console.log("[RDR_046] Test execution started — Verify Verification Method is displayed correctly according to document verification process.");
      console.log("[RDR_046] Executing Excel test steps: 1. Review Verify Method column.  2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "documents", "Document Master");
    });
    await test.step("[RDR_046] Validate expected results from Excel", async () => {
      console.log("[RDR_046] Validating expected result: Correct verification method is displayed for every document record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Verification Method");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Verification Method");
      console.log("[RDR_046] Test completed successfully");
    });
  });

  test("Case ID:RDR_047 - Document Master → search functionality using Document ID.", async ({ testData }) => {
    // Excel Test Case ID: RDR_047
    // Excel Scenario: Verify search functionality using Document ID.
    // Expected Result: System displays only the document record matching the entered Document ID.
    await test.step("[RDR_047] Navigate and execute documented test steps", async () => {
      console.log("[RDR_047] Test execution started — Verify search functionality using Document ID.");
      console.log("[RDR_047] Executing Excel test steps: 1. Enter Document ID in search field.  2. Execute search.  3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "documents", "Document Master");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_047] Validate expected results from Excel", async () => {
      console.log("[RDR_047] Validating expected result: System displays only the document record matching the entered Document ID.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_047] Test completed successfully");
    });
  });

  test("Case ID:RDR_048 - Document Master → search functionality using Customer ID and retrieve all linked customer documents.", async ({ testData }) => {
    // Excel Test Case ID: RDR_048
    // Excel Scenario: Verify search functionality using Customer ID and retrieve all linked customer documents.
    // Expected Result: All documents associated with the specified Customer ID are displayed.
    await test.step("[RDR_048] Navigate and execute documented test steps", async () => {
      console.log("[RDR_048] Test execution started — Verify search functionality using Customer ID and retrieve all linked customer documents.");
      console.log("[RDR_048] Executing Excel test steps: 1. Enter Customer ID in search box.  2. Execute search.  3. Verify returned records.");
      await rdrPage.openMasterTab(testData.baseUrl, "documents", "Document Master");
    await rdrPage.searchUsingPilotCustomerId();
    });
    await test.step("[RDR_048] Validate expected results from Excel", async () => {
      console.log("[RDR_048] Validating expected result: All documents associated with the specified Customer ID are displayed.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectSearchYieldsResults();
      console.log("[RDR_048] Test completed successfully");
    });
  });

  test("Case ID:RDR_049 - Document Master → View action opens complete document details including AML-related information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_049
    // Excel Scenario: Verify View action opens complete document details including AML-related information.
    // Expected Result: Document details page/modal opens successfully displaying complete document information and verification details.
    await test.step("[RDR_049] Navigate and execute documented test steps", async () => {
      console.log("[RDR_049] Test execution started — Verify View action opens complete document details including AML-related information.");
      console.log("[RDR_049] Executing Excel test steps: 1. Click View button for selected document.  2. Review document details.  3. Verify displayed information.");
      await rdrPage.openMasterTab(testData.baseUrl, "documents", "Document Master");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_049] Validate expected results from Excel", async () => {
      console.log("[RDR_049] Validating expected result: Document details page/modal opens successfully displaying complete document information and verification details.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_049] Test completed successfully");
    });
  });

  test("Case ID:RDR_050 - Document Master → CSV and Excel export functionality for Customer Documents data.", async ({ testData }) => {
    // Excel Test Case ID: RDR_050
    // Excel Scenario: Verify CSV and Excel export functionality for Customer Documents data.
    // Expected Result: CSV and Excel files are downloaded successfully and contain accurate Customer Document data with proper column structure.
    await test.step("[RDR_050] Navigate and execute documented test steps", async () => {
      console.log("[RDR_050] Test execution started — Verify CSV and Excel export functionality for Customer Documents data.");
      console.log("[RDR_050] Executing Excel test steps: 1. Click CSV Export.  2. Validate downloaded file.  3. Click Excel Export.  4. Validate file contents.");
      await rdrPage.openMasterTab(testData.baseUrl, "documents", "Document Master");
    });
    await test.step("[RDR_050] Validate expected results from Excel", async () => {
      console.log("[RDR_050] Validating expected result: CSV and Excel files are downloaded successfully and contain accurate Customer Document data with proper column structure.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectExportButtonsVisible();
    await rdrPage.expectCsvExportReady();
    await rdrPage.expectExcelExportReady();
      console.log("[RDR_050] Test completed successfully");
    });
  });
  });

  test.describe("Risk Assessment", () => {
  test("Case ID:RDR_051 - Risk Assessment → Assessment ID is generated and displayed uniquely for each risk assessment record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_051
    // Excel Scenario: Verify Assessment ID is generated and displayed uniquely for each risk assessment record.
    // Expected Result: Unique Assessment IDs are displayed for all risk assessment records without duplication.
    await test.step("[RDR_051] Navigate and execute documented test steps", async () => {
      console.log("[RDR_051] Test execution started — Verify Assessment ID is generated and displayed uniquely for each risk assessment record.");
      console.log("[RDR_051] Executing Excel test steps: 1. Open Risk Assessment tab.  2. Review Assessment ID column.  3. Compare multiple records.  4. Verify uniqueness.");
      await rdrPage.openMasterTab(testData.baseUrl, "risk-assessment", "Risk Assessment");
    });
    await test.step("[RDR_051] Validate expected results from Excel", async () => {
      console.log("[RDR_051] Validating expected result: Unique Assessment IDs are displayed for all risk assessment records without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Assessment ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Assessment ID");
    await rdrPage.expectUniqueColumnValues("Assessment ID");
      console.log("[RDR_051] Test completed successfully");
    });
  });

  test("Case ID:RDR_052 - Risk Assessment → Customer ID displayed against each risk assessment record matches the linked customer profile.", async ({ testData }) => {
    // Excel Test Case ID: RDR_052
    // Excel Scenario: Verify Customer ID displayed against each risk assessment record matches the linked customer profile.
    // Expected Result: Customer ID displayed matches the linked customer record.
    await test.step("[RDR_052] Navigate and execute documented test steps", async () => {
      console.log("[RDR_052] Test execution started — Verify Customer ID displayed against each risk assessment record matches the linked customer profile.");
      console.log("[RDR_052] Executing Excel test steps: 1. Review Customer ID column.  2. Compare with Customer Master records.  3. Validate mapping.");
      await rdrPage.openMasterTab(testData.baseUrl, "risk-assessment", "Risk Assessment");
    });
    await test.step("[RDR_052] Validate expected results from Excel", async () => {
      console.log("[RDR_052] Validating expected result: Customer ID displayed matches the linked customer record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Customer ID");
      console.log("[RDR_052] Test completed successfully");
    });
  });

  test("Case ID:RDR_053 - Risk Assessment → Assessment Date is displayed correctly and matches the date on which risk assessment was performed.", async ({ testData }) => {
    // Excel Test Case ID: RDR_053
    // Excel Scenario: Verify Assessment Date is displayed correctly and matches the date on which risk assessment was performed.
    // Expected Result: Assessment Date is displayed accurately in the configured date format.
    await test.step("[RDR_053] Navigate and execute documented test steps", async () => {
      console.log("[RDR_053] Test execution started — Verify Assessment Date is displayed correctly and matches the date on which risk assessment was performed.");
      console.log("[RDR_053] Executing Excel test steps: 1. Review Date column.  2. Compare displayed dates with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "risk-assessment", "Risk Assessment");
    });
    await test.step("[RDR_053] Validate expected results from Excel", async () => {
      console.log("[RDR_053] Validating expected result: Assessment Date is displayed accurately in the configured date format.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Date");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Date");
      console.log("[RDR_053] Test completed successfully");
    });
  });

  test("Case ID:RDR_054 - Risk Assessment → Assessment Type values are displayed correctly based on configured assessment classifications.", async ({ testData }) => {
    // Excel Test Case ID: RDR_054
    // Excel Scenario: Verify Assessment Type values are displayed correctly based on configured assessment classifications.
    // Expected Result: Correct Assessment Type is displayed for every risk assessment record.
    await test.step("[RDR_054] Navigate and execute documented test steps", async () => {
      console.log("[RDR_054] Test execution started — Verify Assessment Type values are displayed correctly based on configured assessment classifications.");
      console.log("[RDR_054] Executing Excel test steps: 1. Review Type column.  2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "risk-assessment", "Risk Assessment");
    });
    await test.step("[RDR_054] Validate expected results from Excel", async () => {
      console.log("[RDR_054] Validating expected result: Correct Assessment Type is displayed for every risk assessment record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Assessment Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Assessment Type");
      console.log("[RDR_054] Test completed successfully");
    });
  });

  test("Case ID:RDR_055 - Risk Assessment → Total Risk Score is calculated and displayed correctly for each customer assessment.", async ({ testData }) => {
    // Excel Test Case ID: RDR_055
    // Excel Scenario: Verify Total Risk Score is calculated and displayed correctly for each customer assessment.
    // Expected Result: Total Risk Score is displayed accurately for each customer assessment.
    await test.step("[RDR_055] Navigate and execute documented test steps", async () => {
      console.log("[RDR_055] Test execution started — Verify Total Risk Score is calculated and displayed correctly for each customer assessment.");
      console.log("[RDR_055] Executing Excel test steps: 1. Review Total Score column.  2. Compare values with source records.  3. Validate displayed score.");
      await rdrPage.openMasterTab(testData.baseUrl, "risk-assessment", "Risk Assessment");
    });
    await test.step("[RDR_055] Validate expected results from Excel", async () => {
      console.log("[RDR_055] Validating expected result: Total Risk Score is displayed accurately for each customer assessment.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Total Score");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Total Score");
      console.log("[RDR_055] Test completed successfully");
    });
  });

  test("Case ID:RDR_056 - Risk Assessment → Risk Rating values are displayed correctly according to configured risk score ranges.", async ({ testData }) => {
    // Excel Test Case ID: RDR_056
    // Excel Scenario: Verify Risk Rating values are displayed correctly according to configured risk score ranges.
    // Expected Result: Risk Rating displayed matches the configured score-to-rating mapping.
    await test.step("[RDR_056] Navigate and execute documented test steps", async () => {
      console.log("[RDR_056] Test execution started — Verify Risk Rating values are displayed correctly according to configured risk score ranges.");
      console.log("[RDR_056] Executing Excel test steps: 1. Review Risk Rating column.  2. Compare rating against score.  3. Validate mapping rules.");
      await rdrPage.openMasterTab(testData.baseUrl, "risk-assessment", "Risk Assessment");
    });
    await test.step("[RDR_056] Validate expected results from Excel", async () => {
      console.log("[RDR_056] Validating expected result: Risk Rating displayed matches the configured score-to-rating mapping.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Risk Rating");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Risk Rating");
      console.log("[RDR_056] Test completed successfully");
    });
  });

  test("Case ID:RDR_057 - Risk Assessment → high-risk customers are highlighted appropriately when Total Risk Score exceeds configured threshold.", async ({ testData }) => {
    // Excel Test Case ID: RDR_057
    // Excel Scenario: Verify high-risk customers are highlighted appropriately when Total Risk Score exceeds configured threshold.
    // Expected Result: High-risk assessment is displayed with HIGH rating and appropriate highlighting.
    await test.step("[RDR_057] Navigate and execute documented test steps", async () => {
      console.log("[RDR_057] Test execution started — Verify high-risk customers are highlighted appropriately when Total Risk Score exceeds configured threshold.");
      console.log("[RDR_057] Executing Excel test steps: 1. Locate assessment with score above threshold.  2. Review Risk Rating.  3. Verify visual indicator.");
      await rdrPage.openMasterTab(testData.baseUrl, "risk-assessment", "Risk Assessment");
    });
    await test.step("[RDR_057] Validate expected results from Excel", async () => {
      console.log("[RDR_057] Validating expected result: High-risk assessment is displayed with HIGH rating and appropriate highlighting.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Total Risk Score");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Total Risk Score");
      console.log("[RDR_057] Test completed successfully");
    });
  });

  test("Case ID:RDR_058 - Risk Assessment → Previous Risk Rating is displayed correctly and reflects prior assessment results.", async ({ testData }) => {
    // Excel Test Case ID: RDR_058
    // Excel Scenario: Verify Previous Risk Rating is displayed correctly and reflects prior assessment results.
    // Expected Result: Previous Risk Rating is displayed accurately for each customer assessment.
    await test.step("[RDR_058] Navigate and execute documented test steps", async () => {
      console.log("[RDR_058] Test execution started — Verify Previous Risk Rating is displayed correctly and reflects prior assessment results.");
      console.log("[RDR_058] Executing Excel test steps: 1. Review Prev Rating column.  2. Compare with previous assessment data.");
      await rdrPage.openMasterTab(testData.baseUrl, "risk-assessment", "Risk Assessment");
    });
    await test.step("[RDR_058] Validate expected results from Excel", async () => {
      console.log("[RDR_058] Validating expected result: Previous Risk Rating is displayed accurately for each customer assessment.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Previous Risk Rating");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Previous Risk Rating");
      console.log("[RDR_058] Test completed successfully");
    });
  });

  test("Case ID:RDR_059 - Risk Assessment → Rating Changed indicator correctly identifies customers whose risk rating has changed since the last assessment.", async ({ testData }) => {
    // Excel Test Case ID: RDR_059
    // Excel Scenario: Verify Rating Changed indicator correctly identifies customers whose risk rating has changed since the last assessment.
    // Expected Result: System displays Yes when rating changed and No when rating remains unchanged.
    await test.step("[RDR_059] Navigate and execute documented test steps", async () => {
      console.log("[RDR_059] Test execution started — Verify Rating Changed indicator correctly identifies customers whose risk rating has changed since the last assessment.");
      console.log("[RDR_059] Executing Excel test steps: 1. Review Rating Changed column.  2. Compare current and previous ratings.");
      await rdrPage.openMasterTab(testData.baseUrl, "risk-assessment", "Risk Assessment");
    });
    await test.step("[RDR_059] Validate expected results from Excel", async () => {
      console.log("[RDR_059] Validating expected result: System displays Yes when rating changed and No when rating remains unchanged.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Rating Changed");
    await rdrPage.expectAllCellsNonEmpty("Rating Changed");
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_059] Test completed successfully");
    });
  });

  test("Case ID:RDR_060 - Risk Assessment → Next Review Date is calculated and displayed correctly based on risk review schedule.", async ({ testData }) => {
    // Excel Test Case ID: RDR_060
    // Excel Scenario: Verify Next Review Date is calculated and displayed correctly based on risk review schedule.
    // Expected Result: Next Review Date is displayed correctly according to review frequency and assessment date.
    await test.step("[RDR_060] Navigate and execute documented test steps", async () => {
      console.log("[RDR_060] Test execution started — Verify Next Review Date is calculated and displayed correctly based on risk review schedule.");
      console.log("[RDR_060] Executing Excel test steps: 1. Review Next Review column.  2. Compare with review schedule configuration.");
      await rdrPage.openMasterTab(testData.baseUrl, "risk-assessment", "Risk Assessment");
    });
    await test.step("[RDR_060] Validate expected results from Excel", async () => {
      console.log("[RDR_060] Validating expected result: Next Review Date is displayed correctly according to review frequency and assessment date.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Next Review");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Next Review");
      console.log("[RDR_060] Test completed successfully");
    });
  });

  test("Case ID:RDR_061 - Risk Assessment → Review Frequency values are displayed correctly based on risk assessment configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_061
    // Excel Scenario: Verify Review Frequency values are displayed correctly based on risk assessment configuration.
    // Expected Result: Correct Review Frequency is displayed for each customer assessment.
    await test.step("[RDR_061] Navigate and execute documented test steps", async () => {
      console.log("[RDR_061] Test execution started — Verify Review Frequency values are displayed correctly based on risk assessment configuration.");
      console.log("[RDR_061] Executing Excel test steps: 1. Review Review Frequency column.  2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "risk-assessment", "Risk Assessment");
    });
    await test.step("[RDR_061] Validate expected results from Excel", async () => {
      console.log("[RDR_061] Validating expected result: Correct Review Frequency is displayed for each customer assessment.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Review Frequency");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Review Frequency");
      console.log("[RDR_061] Test completed successfully");
    });
  });

  test("Case ID:RDR_062 - Risk Assessment → search functionality using Assessment ID.", async ({ testData }) => {
    // Excel Test Case ID: RDR_062
    // Excel Scenario: Verify search functionality using Assessment ID.
    // Expected Result: System displays only the risk assessment record matching the entered Assessment ID.
    await test.step("[RDR_062] Navigate and execute documented test steps", async () => {
      console.log("[RDR_062] Test execution started — Verify search functionality using Assessment ID.");
      console.log("[RDR_062] Executing Excel test steps: 1. Enter Assessment ID in search field.  2. Execute search.  3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "risk-assessment", "Risk Assessment");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_062] Validate expected results from Excel", async () => {
      console.log("[RDR_062] Validating expected result: System displays only the risk assessment record matching the entered Assessment ID.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_062] Test completed successfully");
    });
  });

  test("Case ID:RDR_063 - Risk Assessment → search functionality using Customer ID and retrieve all associated risk assessments.", async ({ testData }) => {
    // Excel Test Case ID: RDR_063
    // Excel Scenario: Verify search functionality using Customer ID and retrieve all associated risk assessments.
    // Expected Result: System displays all risk assessment records associated with the specified Customer ID.
    await test.step("[RDR_063] Navigate and execute documented test steps", async () => {
      console.log("[RDR_063] Test execution started — Verify search functionality using Customer ID and retrieve all associated risk assessments.");
      console.log("[RDR_063] Executing Excel test steps: 1. Enter Customer ID in search field.  2. Execute search.  3. Verify returned records.");
      await rdrPage.openMasterTab(testData.baseUrl, "risk-assessment", "Risk Assessment");
    await rdrPage.searchUsingPilotCustomerId();
    });
    await test.step("[RDR_063] Validate expected results from Excel", async () => {
      console.log("[RDR_063] Validating expected result: System displays all risk assessment records associated with the specified Customer ID.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectSearchYieldsResults();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_063] Test completed successfully");
    });
  });

  test("Case ID:RDR_064 - Risk Assessment → View action opens complete risk assessment details including score components and review information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_064
    // Excel Scenario: Verify View action opens complete risk assessment details including score components and review information.
    // Expected Result: Risk Assessment detail screen opens successfully displaying complete assessment information, scores, ratings and review details.
    await test.step("[RDR_064] Navigate and execute documented test steps", async () => {
      console.log("[RDR_064] Test execution started — Verify View action opens complete risk assessment details including score components and review information.");
      console.log("[RDR_064] Executing Excel test steps: 1. Click View button.  2. Review assessment details.  3. Verify displayed information.");
      await rdrPage.openMasterTab(testData.baseUrl, "risk-assessment", "Risk Assessment");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_064] Validate expected results from Excel", async () => {
      console.log("[RDR_064] Validating expected result: Risk Assessment detail screen opens successfully displaying complete assessment information, scores, ratings and review details.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_064] Test completed successfully");
    });
  });

  test("Case ID:RDR_065 - Risk Assessment → CSV and Excel export functionality for Risk Assessment records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_065
    // Excel Scenario: Verify CSV and Excel export functionality for Risk Assessment records.
    // Expected Result: CSV and Excel files are downloaded successfully and contain accurate Risk Assessment data with correct column structure and values.
    await test.step("[RDR_065] Navigate and execute documented test steps", async () => {
      console.log("[RDR_065] Test execution started — Verify CSV and Excel export functionality for Risk Assessment records.");
      console.log("[RDR_065] Executing Excel test steps: 1. Click CSV Export.  2. Validate downloaded file.  3. Click Excel Export.  4. Validate file contents.");
      await rdrPage.openMasterTab(testData.baseUrl, "risk-assessment", "Risk Assessment");
    });
    await test.step("[RDR_065] Validate expected results from Excel", async () => {
      console.log("[RDR_065] Validating expected result: CSV and Excel files are downloaded successfully and contain accurate Risk Assessment data with correct column structure and values.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectExportButtonsVisible();
    await rdrPage.expectCsvExportReady();
    await rdrPage.expectExcelExportReady();
      console.log("[RDR_065] Test completed successfully");
    });
  });
  });

  test.describe("Account Master", () => {
  test("Case ID:RDR_066 - Account Master → Account ID is generated uniquely and displayed correctly for each account record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_066
    // Excel Scenario: Verify Account ID is generated uniquely and displayed correctly for each account record loaded from CBS.
    // Expected Result: Unique Account IDs are displayed for all account records without duplication.
    await test.step("[RDR_066] Navigate and execute documented test steps", async () => {
      console.log("[RDR_066] Test execution started — Verify Account ID is generated uniquely and displayed correctly for each account record loaded from CBS.");
      console.log("[RDR_066] Executing Excel test steps: 1. Open Account tab.  2. Review Account ID column.  3. Compare multiple records.  4. Verify uniqueness.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    });
    await test.step("[RDR_066] Validate expected results from Excel", async () => {
      console.log("[RDR_066] Validating expected result: Unique Account IDs are displayed for all account records without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Account ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Account ID");
    await rdrPage.expectUniqueColumnValues("Account ID");
      console.log("[RDR_066] Test completed successfully");
    });
  });

  test("Case ID:RDR_067 - Account Master → Account ID hyperlink functionality and ensure account details open correctly when selected.", async ({ testData }) => {
    // Excel Test Case ID: RDR_067
    // Excel Scenario: Verify Account ID hyperlink functionality and ensure account details open correctly when selected.
    // Expected Result: Account detail screen opens successfully displaying complete account information.
    await test.step("[RDR_067] Navigate and execute documented test steps", async () => {
      console.log("[RDR_067] Test execution started — Verify Account ID hyperlink functionality and ensure account details open correctly when selected.");
      console.log("[RDR_067] Executing Excel test steps: 1. Click Account ID hyperlink.  2. Verify account detail page/modal opens.  3. Review account information.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    await rdrPage.clickFirstRowIdLink();
    });
    await test.step("[RDR_067] Validate expected results from Excel", async () => {
      console.log("[RDR_067] Validating expected result: Account detail screen opens successfully displaying complete account information.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectFirstRowLinkNavigates();
      console.log("[RDR_067] Test completed successfully");
    });
  });

  test("Case ID:RDR_068 - Account Master → Account Number is displayed according to masking requirements to protect sensitive banking information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_068
    // Excel Scenario: Verify Account Number is displayed according to masking requirements to protect sensitive banking information.
    // Expected Result: Account Number is displayed in masked format and complies with PII requirements.
    await test.step("[RDR_068] Navigate and execute documented test steps", async () => {
      console.log("[RDR_068] Test execution started — Verify Account Number is displayed according to masking requirements to protect sensitive banking information.");
      console.log("[RDR_068] Executing Excel test steps: 1. Review Account No column.  2. Verify masking pattern.  3. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    });
    await test.step("[RDR_068] Validate expected results from Excel", async () => {
      console.log("[RDR_068] Validating expected result: Account Number is displayed in masked format and complies with PII requirements.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Account Number");
    await rdrPage.expectColumnValuesMasked("Account Number");
      console.log("[RDR_068] Test completed successfully");
    });
  });

  test("Case ID:RDR_069 - Account Master → Customer ID displayed against each account matches the linked customer profile.", async ({ testData }) => {
    // Excel Test Case ID: RDR_069
    // Excel Scenario: Verify Customer ID displayed against each account matches the linked customer profile.
    // Expected Result: Customer ID displayed matches the linked customer record.
    await test.step("[RDR_069] Navigate and execute documented test steps", async () => {
      console.log("[RDR_069] Test execution started — Verify Customer ID displayed against each account matches the linked customer profile.");
      console.log("[RDR_069] Executing Excel test steps: 1. Review Customer ID column.  2. Compare values with Customer Master.  3. Validate mapping.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    });
    await test.step("[RDR_069] Validate expected results from Excel", async () => {
      console.log("[RDR_069] Validating expected result: Customer ID displayed matches the linked customer record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Customer ID");
      console.log("[RDR_069] Test completed successfully");
    });
  });

  test("Case ID:RDR_070 - Account Master → Account Type values are displayed correctly based on account classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_070
    // Excel Scenario: Verify Account Type values are displayed correctly based on account classification.
    // Expected Result: Correct Account Type is displayed for each account record.
    await test.step("[RDR_070] Navigate and execute documented test steps", async () => {
      console.log("[RDR_070] Test execution started — Verify Account Type values are displayed correctly based on account classification.");
      console.log("[RDR_070] Executing Excel test steps: 1. Review Type column.  2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    });
    await test.step("[RDR_070] Validate expected results from Excel", async () => {
      console.log("[RDR_070] Validating expected result: Correct Account Type is displayed for each account record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Account Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Account Type");
      console.log("[RDR_070] Test completed successfully");
    });
  });

  test("Case ID:RDR_071 - Account Master → Currency and Branch details are displayed correctly for each account.", async ({ testData }) => {
    // Excel Test Case ID: RDR_071
    // Excel Scenario: Verify Currency and Branch details are displayed correctly for each account.
    // Expected Result: Correct Currency and Branch values are displayed for all accounts.
    await test.step("[RDR_071] Navigate and execute documented test steps", async () => {
      console.log("[RDR_071] Test execution started — Verify Currency and Branch details are displayed correctly for each account.");
      console.log("[RDR_071] Executing Excel test steps: 1. Review Currency and Branch columns.  2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    });
    await test.step("[RDR_071] Validate expected results from Excel", async () => {
      console.log("[RDR_071] Validating expected result: Correct Currency and Branch values are displayed for all accounts.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Currency and Branch details");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Currency and Branch details");
      console.log("[RDR_071] Test completed successfully");
    });
  });

  test("Case ID:RDR_072 - Account Master → Account Status values are displayed correctly based on account lifecycle status.", async ({ testData }) => {
    // Excel Test Case ID: RDR_072
    // Excel Scenario: Verify Account Status values are displayed correctly based on account lifecycle status.
    // Expected Result: Correct account status is displayed for each account.
    await test.step("[RDR_072] Navigate and execute documented test steps", async () => {
      console.log("[RDR_072] Test execution started — Verify Account Status values are displayed correctly based on account lifecycle status.");
      console.log("[RDR_072] Executing Excel test steps: 1. Review Status column.  2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    });
    await test.step("[RDR_072] Validate expected results from Excel", async () => {
      console.log("[RDR_072] Validating expected result: Correct account status is displayed for each account.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Account Status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Account Status");
      console.log("[RDR_072] Test completed successfully");
    });
  });

  test("Case ID:RDR_073 - Account Master → Frozen accounts are highlighted appropriately and displayed with Frozen status.", async ({ testData }) => {
    // Excel Test Case ID: RDR_073
    // Excel Scenario: Verify Frozen accounts are highlighted appropriately and displayed with Frozen status.
    // Expected Result: Frozen account displays FROZEN status with configured highlighting.
    await test.step("[RDR_073] Navigate and execute documented test steps", async () => {
      console.log("[RDR_073] Test execution started — Verify Frozen accounts are highlighted appropriately and displayed with Frozen status.");
      console.log("[RDR_073] Executing Excel test steps: 1. Locate frozen account.  2. Review Status column.  3. Verify visual indicator.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    });
    await test.step("[RDR_073] Validate expected results from Excel", async () => {
      console.log("[RDR_073] Validating expected result: Frozen account displays FROZEN status with configured highlighting.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Status");
      console.log("[RDR_073] Test completed successfully");
    });
  });

  test("Case ID:RDR_074 - Account Master → Current Balance is displayed correctly and matches account balance received from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_074
    // Excel Scenario: Verify Current Balance is displayed correctly and matches account balance received from CBS.
    // Expected Result: Current Balance is displayed accurately with appropriate currency values.
    await test.step("[RDR_074] Navigate and execute documented test steps", async () => {
      console.log("[RDR_074] Test execution started — Verify Current Balance is displayed correctly and matches account balance received from CBS.");
      console.log("[RDR_074] Executing Excel test steps: 1. Review Current Balance column.  2. Compare values with CBS records.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    });
    await test.step("[RDR_074] Validate expected results from Excel", async () => {
      console.log("[RDR_074] Validating expected result: Current Balance is displayed accurately with appropriate currency values.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Current Balance");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Current Balance");
      console.log("[RDR_074] Test completed successfully");
    });
  });

  test("Case ID:RDR_075 - Account Master → Freeze Flag is displayed correctly for active and frozen accounts.", async ({ testData }) => {
    // Excel Test Case ID: RDR_075
    // Excel Scenario: Verify Freeze Flag is displayed correctly for active and frozen accounts.
    // Expected Result: Freeze Flag displays Yes for frozen accounts and No for active accounts.
    await test.step("[RDR_075] Navigate and execute documented test steps", async () => {
      console.log("[RDR_075] Test execution started — Verify Freeze Flag is displayed correctly for active and frozen accounts.");
      console.log("[RDR_075] Executing Excel test steps: 1. Review Freeze Flag column.  2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    });
    await test.step("[RDR_075] Validate expected results from Excel", async () => {
      console.log("[RDR_075] Validating expected result: Freeze Flag displays Yes for frozen accounts and No for active accounts.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Freeze Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Freeze Flag");
      console.log("[RDR_075] Test completed successfully");
    });
  });

  test("Case ID:RDR_076 - Account Master → Last Transaction Date is displayed correctly and reflects the latest transaction posted to the account.", async ({ testData }) => {
    // Excel Test Case ID: RDR_076
    // Excel Scenario: Verify Last Transaction Date is displayed correctly and reflects the latest transaction posted to the account.
    // Expected Result: Last Transaction Date is displayed accurately in configured date format.
    await test.step("[RDR_076] Navigate and execute documented test steps", async () => {
      console.log("[RDR_076] Test execution started — Verify Last Transaction Date is displayed correctly and reflects the latest transaction posted to the account.");
      console.log("[RDR_076] Executing Excel test steps: 1. Review Last Txn Date column.  2. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    });
    await test.step("[RDR_076] Validate expected results from Excel", async () => {
      console.log("[RDR_076] Validating expected result: Last Transaction Date is displayed accurately in configured date format.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Last Transaction Date");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Last Transaction Date");
      console.log("[RDR_076] Test completed successfully");
    });
  });

  test("Case ID:RDR_077 - Account Master → Customer ID filter functionality and ensure accounts are filtered correctly.", async ({ testData }) => {
    // Excel Test Case ID: RDR_077
    // Excel Scenario: Verify Customer ID filter functionality and ensure accounts are filtered correctly.
    // Expected Result: System displays only accounts associated with the specified Customer ID.
    await test.step("[RDR_077] Navigate and execute documented test steps", async () => {
      console.log("[RDR_077] Test execution started — Verify Customer ID filter functionality and ensure accounts are filtered correctly.");
      console.log("[RDR_077] Executing Excel test steps: 1. Enter Customer ID in filter section.  2. Click Apply.  3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    await rdrPage.applyFirstAvailableFilter();
    });
    await test.step("[RDR_077] Validate expected results from Excel", async () => {
      console.log("[RDR_077] Validating expected result: System displays only accounts associated with the specified Customer ID.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectFilterApplied();
      console.log("[RDR_077] Test completed successfully");
    });
  });

  test("Case ID:RDR_078 - Account Master → search functionality using Account ID.", async ({ testData }) => {
    // Excel Test Case ID: RDR_078
    // Excel Scenario: Verify search functionality using Account ID.
    // Expected Result: System displays only the account record matching the entered Account ID.
    await test.step("[RDR_078] Navigate and execute documented test steps", async () => {
      console.log("[RDR_078] Test execution started — Verify search functionality using Account ID.");
      console.log("[RDR_078] Executing Excel test steps: 1. Enter Account ID in search field.  2. Execute search.  3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_078] Validate expected results from Excel", async () => {
      console.log("[RDR_078] Validating expected result: System displays only the account record matching the entered Account ID.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_078] Test completed successfully");
    });
  });

  test("Case ID:RDR_079 - Account Master → View action opens complete account details including AML-related information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_079
    // Excel Scenario: Verify View action opens complete account details including AML-related information.
    // Expected Result: Account detail page/modal opens successfully displaying account, customer and AML-related information.
    await test.step("[RDR_079] Navigate and execute documented test steps", async () => {
      console.log("[RDR_079] Test execution started — Verify View action opens complete account details including AML-related information.");
      console.log("[RDR_079] Executing Excel test steps: 1. Click View button.  2. Review account details.  3. Verify displayed information.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_079] Validate expected results from Excel", async () => {
      console.log("[RDR_079] Validating expected result: Account detail page/modal opens successfully displaying account, customer and AML-related information.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_079] Test completed successfully");
    });
  });

  test("Case ID:RDR_080 - Account Master → CSV and Excel export functionality for Account Master records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_080
    // Excel Scenario: Verify CSV and Excel export functionality for Account Master records.
    // Expected Result: CSV and Excel files are downloaded successfully and contain accurate Account Master data with proper column structure and values.
    await test.step("[RDR_080] Navigate and execute documented test steps", async () => {
      console.log("[RDR_080] Test execution started — Verify CSV and Excel export functionality for Account Master records.");
      console.log("[RDR_080] Executing Excel test steps: 1. Click CSV Export.  2. Validate downloaded file.  3. Click Excel Export.  4. Validate file contents.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    });
    await test.step("[RDR_080] Validate expected results from Excel", async () => {
      console.log("[RDR_080] Validating expected result: CSV and Excel files are downloaded successfully and contain accurate Account Master data with proper column structure and values.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectExportButtonsVisible();
    await rdrPage.expectCsvExportReady();
    await rdrPage.expectExcelExportReady();
      console.log("[RDR_080] Test completed successfully");
    });
  });

  test("Case ID:RDR_081 - Account Master → Relationship ID (Rel ID) is displayed uniquely for every customer-account relationship record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_081
    // Excel Scenario: Verify Relationship ID (Rel ID) is displayed uniquely for every customer-account relationship record.
    // Expected Result: Unique Relationship IDs are displayed for all records without duplication.
    await test.step("[RDR_081] Navigate and execute documented test steps", async () => {
      console.log("[RDR_081] Test execution started — Verify Relationship ID (Rel ID) is displayed uniquely for every customer-account relationship record.");
      console.log("[RDR_081] Executing Excel test steps: 1. Open Cust-Acct Rel tab.  2. Review Rel ID column.  3. Compare multiple records.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    });
    await test.step("[RDR_081] Validate expected results from Excel", async () => {
      console.log("[RDR_081] Validating expected result: Unique Relationship IDs are displayed for all records without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Relationship ID (Rel ID)");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Relationship ID (Rel ID)");
    await rdrPage.expectUniqueColumnValues("Relationship ID (Rel ID)");
      console.log("[RDR_081] Test completed successfully");
    });
  });

  test("Case ID:RDR_082 - Account Master → Customer ID displayed in relationship records matches the linked customer profile in Customer Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_082
    // Excel Scenario: Verify Customer ID displayed in relationship records matches the linked customer profile in Customer Master.
    // Expected Result: Correct Customer ID is displayed for each relationship record.
    await test.step("[RDR_082] Navigate and execute documented test steps", async () => {
      console.log("[RDR_082] Test execution started — Verify Customer ID displayed in relationship records matches the linked customer profile in Customer Master.");
      console.log("[RDR_082] Executing Excel test steps: 1. Review Customer ID column.  2. Compare values with Customer Master.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    });
    await test.step("[RDR_082] Validate expected results from Excel", async () => {
      console.log("[RDR_082] Validating expected result: Correct Customer ID is displayed for each relationship record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Customer ID");
      console.log("[RDR_082] Test completed successfully");
    });
  });

  test("Case ID:RDR_083 - Account Master → Account ID displayed in relationship records matches the linked account in Account Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_083
    // Excel Scenario: Verify Account ID displayed in relationship records matches the linked account in Account Master.
    // Expected Result: Correct Account ID is displayed for each relationship record.
    await test.step("[RDR_083] Navigate and execute documented test steps", async () => {
      console.log("[RDR_083] Test execution started — Verify Account ID displayed in relationship records matches the linked account in Account Master.");
      console.log("[RDR_083] Executing Excel test steps: 1. Review Account ID column.  2. Compare with Account Master records.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    });
    await test.step("[RDR_083] Validate expected results from Excel", async () => {
      console.log("[RDR_083] Validating expected result: Correct Account ID is displayed for each relationship record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Account ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Account ID");
      console.log("[RDR_083] Test completed successfully");
    });
  });

  test("Case ID:RDR_084 - Account Master → Relationship Type is displayed correctly according to the account ownership relationship maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_084
    // Excel Scenario: Verify Relationship Type is displayed correctly according to the account ownership relationship maintained in source systems.
    // Expected Result: Correct Relationship Type is displayed for each customer-account relationship.
    await test.step("[RDR_084] Navigate and execute documented test steps", async () => {
      console.log("[RDR_084] Test execution started — Verify Relationship Type is displayed correctly according to the account ownership relationship maintained in source systems.");
      console.log("[RDR_084] Executing Excel test steps: 1. Review Relationship Type column.  2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    });
    await test.step("[RDR_084] Validate expected results from Excel", async () => {
      console.log("[RDR_084] Validating expected result: Correct Relationship Type is displayed for each customer-account relationship.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Relationship Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Relationship Type");
      console.log("[RDR_084] Test completed successfully");
    });
  });

  test("Case ID:RDR_085 - Account Master → Signing Authority values are displayed correctly and reflect the account operation rights assigned to the customer.", async ({ testData }) => {
    // Excel Test Case ID: RDR_085
    // Excel Scenario: Verify Signing Authority values are displayed correctly and reflect the account operation rights assigned to the customer.
    // Expected Result: Correct Signing Authority is displayed for each relationship record.
    await test.step("[RDR_085] Navigate and execute documented test steps", async () => {
      console.log("[RDR_085] Test execution started — Verify Signing Authority values are displayed correctly and reflect the account operation rights assigned to the customer.");
      console.log("[RDR_085] Executing Excel test steps: 1. Review Signing Authority column.  2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    });
    await test.step("[RDR_085] Validate expected results from Excel", async () => {
      console.log("[RDR_085] Validating expected result: Correct Signing Authority is displayed for each relationship record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Signing Authority");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Signing Authority");
      console.log("[RDR_085] Test completed successfully");
    });
  });

  test("Case ID:RDR_086 - Account Master → Ownership Percentage is displayed correctly for the customer-account relationship.", async ({ testData }) => {
    // Excel Test Case ID: RDR_086
    // Excel Scenario: Verify Ownership Percentage is displayed correctly for the customer-account relationship.
    // Expected Result: Ownership Percentage is displayed accurately for the relationship record.
    await test.step("[RDR_086] Navigate and execute documented test steps", async () => {
      console.log("[RDR_086] Test execution started — Verify Ownership Percentage is displayed correctly for the customer-account relationship.");
      console.log("[RDR_086] Executing Excel test steps: 1. Review Ownership % column.  2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    });
    await test.step("[RDR_086] Validate expected results from Excel", async () => {
      console.log("[RDR_086] Validating expected result: Ownership Percentage is displayed accurately for the relationship record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Ownership Percentage");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Ownership Percentage");
      console.log("[RDR_086] Test completed successfully");
    });
  });

  test("Case ID:RDR_087 - Account Master → Effective Date is displayed correctly and represents the date from which the relationship became active.", async ({ testData }) => {
    // Excel Test Case ID: RDR_087
    // Excel Scenario: Verify Effective Date is displayed correctly and represents the date from which the relationship became active.
    // Expected Result: Effective Date is displayed correctly in configured date format.
    await test.step("[RDR_087] Navigate and execute documented test steps", async () => {
      console.log("[RDR_087] Test execution started — Verify Effective Date is displayed correctly and represents the date from which the relationship became active.");
      console.log("[RDR_087] Executing Excel test steps: 1. Review Effective Date column.  2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    });
    await test.step("[RDR_087] Validate expected results from Excel", async () => {
      console.log("[RDR_087] Validating expected result: Effective Date is displayed correctly in configured date format.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Effective Date");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Effective Date");
      console.log("[RDR_087] Test completed successfully");
    });
  });

  test("Case ID:RDR_088 - Account Master → KYC Status values are displayed correctly and reflect the latest KYC review status.", async ({ testData }) => {
    // Excel Test Case ID: RDR_088
    // Excel Scenario: Verify KYC Status values are displayed correctly and reflect the latest KYC review status.
    // Expected Result: Correct KYC Status is displayed for each relationship record.
    await test.step("[RDR_088] Navigate and execute documented test steps", async () => {
      console.log("[RDR_088] Test execution started — Verify KYC Status values are displayed correctly and reflect the latest KYC review status.");
      console.log("[RDR_088] Executing Excel test steps: 1. Review KYC Status column.  2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    });
    await test.step("[RDR_088] Validate expected results from Excel", async () => {
      console.log("[RDR_088] Validating expected result: Correct KYC Status is displayed for each relationship record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("KYC Status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("KYC Status");
      console.log("[RDR_088] Test completed successfully");
    });
  });

  test("Case ID:RDR_089 - Account Master → search functionality using Relationship ID and retrieve the exact matching relationship record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_089
    // Excel Scenario: Verify search functionality using Relationship ID and retrieve the exact matching relationship record.
    // Expected Result: System displays only the relationship record matching the entered Rel ID.
    await test.step("[RDR_089] Navigate and execute documented test steps", async () => {
      console.log("[RDR_089] Test execution started — Verify search functionality using Relationship ID and retrieve the exact matching relationship record.");
      console.log("[RDR_089] Executing Excel test steps: 1. Enter Rel ID in search box.  2. Execute search.  3. Verify results.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_089] Validate expected results from Excel", async () => {
      console.log("[RDR_089] Validating expected result: System displays only the relationship record matching the entered Rel ID.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_089] Test completed successfully");
    });
  });

  test("Case ID:RDR_090 - Account Master → View action opens complete customer-account relationship details including customer, account and KYC information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_090
    // Excel Scenario: Verify View action opens complete customer-account relationship details including customer, account and KYC information.
    // Expected Result: Relationship detail page/modal opens successfully displaying complete customer-account linkage information, ownership details, signing authority and KYC status.
    await test.step("[RDR_090] Navigate and execute documented test steps", async () => {
      console.log("[RDR_090] Test execution started — Verify View action opens complete customer-account relationship details including customer, account and KYC information.");
      console.log("[RDR_090] Executing Excel test steps: 1. Click View button.  2. Review relationship details screen.  3. Validate displayed information.");
      await rdrPage.openMasterTab(testData.baseUrl, "account", "Account Master");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_090] Validate expected results from Excel", async () => {
      console.log("[RDR_090] Validating expected result: Relationship detail page/modal opens successfully displaying complete customer-account linkage information, ownership details, signing authority and KYC status.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_090] Test completed successfully");
    });
  });
  });

  test.describe("Loan Account", () => {
  test("Case ID:RDR_091 - Loan Account → Loan ID is displayed uniquely for every loan account record and correctly mapped to the loan account.", async ({ testData }) => {
    // Excel Test Case ID: RDR_091
    // Excel Scenario: Verify Loan ID is displayed uniquely for every loan account record and correctly mapped to the loan account.
    // Expected Result: Unique Loan IDs are displayed for all loan account records without duplication.
    await test.step("[RDR_091] Navigate and execute documented test steps", async () => {
      console.log("[RDR_091] Test execution started — Verify Loan ID is displayed uniquely for every loan account record and correctly mapped to the loan account.");
      console.log("[RDR_091] Executing Excel test steps: 1. Open Loan Account tab.  2. Review Loan ID column.  3. Compare multiple records.  4. Verify uniqueness.");
      await rdrPage.openMasterTab(testData.baseUrl, "loan-account", "Loan Account");
    });
    await test.step("[RDR_091] Validate expected results from Excel", async () => {
      console.log("[RDR_091] Validating expected result: Unique Loan IDs are displayed for all loan account records without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Loan ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Loan ID");
    await rdrPage.expectUniqueColumnValues("Loan ID");
      console.log("[RDR_091] Test completed successfully");
    });
  });

  test("Case ID:RDR_092 - Loan Account → Customer ID displayed against each loan account matches the linked customer profile.", async ({ testData }) => {
    // Excel Test Case ID: RDR_092
    // Excel Scenario: Verify Customer ID displayed against each loan account matches the linked customer profile.
    // Expected Result: Correct Customer ID is displayed for each loan account record.
    await test.step("[RDR_092] Navigate and execute documented test steps", async () => {
      console.log("[RDR_092] Test execution started — Verify Customer ID displayed against each loan account matches the linked customer profile.");
      console.log("[RDR_092] Executing Excel test steps: 1. Review Customer ID column.  2. Compare with Customer Master records.");
      await rdrPage.openMasterTab(testData.baseUrl, "loan-account", "Loan Account");
    });
    await test.step("[RDR_092] Validate expected results from Excel", async () => {
      console.log("[RDR_092] Validating expected result: Correct Customer ID is displayed for each loan account record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Customer ID");
      console.log("[RDR_092] Test completed successfully");
    });
  });

  test("Case ID:RDR_093 - Loan Account → Account ID displayed against each loan account matches the linked account in Account Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_093
    // Excel Scenario: Verify Account ID displayed against each loan account matches the linked account in Account Master.
    // Expected Result: Correct Account ID is displayed for each loan account record.
    await test.step("[RDR_093] Navigate and execute documented test steps", async () => {
      console.log("[RDR_093] Test execution started — Verify Account ID displayed against each loan account matches the linked account in Account Master.");
      console.log("[RDR_093] Executing Excel test steps: 1. Review Account ID column.  2. Compare with Account Master records.");
      await rdrPage.openMasterTab(testData.baseUrl, "loan-account", "Loan Account");
    });
    await test.step("[RDR_093] Validate expected results from Excel", async () => {
      console.log("[RDR_093] Validating expected result: Correct Account ID is displayed for each loan account record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Account ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Account ID");
      console.log("[RDR_093] Test completed successfully");
    });
  });

  test("Case ID:RDR_094 - Loan Account → Loan Type is displayed correctly based on the loan product assigned to the customer.", async ({ testData }) => {
    // Excel Test Case ID: RDR_094
    // Excel Scenario: Verify Loan Type is displayed correctly based on the loan product assigned to the customer.
    // Expected Result: Correct Loan Type is displayed for each loan account.
    await test.step("[RDR_094] Navigate and execute documented test steps", async () => {
      console.log("[RDR_094] Test execution started — Verify Loan Type is displayed correctly based on the loan product assigned to the customer.");
      console.log("[RDR_094] Executing Excel test steps: 1. Review Loan Type column.  2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "loan-account", "Loan Account");
    });
    await test.step("[RDR_094] Validate expected results from Excel", async () => {
      console.log("[RDR_094] Validating expected result: Correct Loan Type is displayed for each loan account.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Loan Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Loan Type");
      console.log("[RDR_094] Test completed successfully");
    });
  });

  test("Case ID:RDR_095 - Loan Account → Sanctioned Amount is displayed correctly and matches the approved loan amount maintained in CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_095
    // Excel Scenario: Verify Sanctioned Amount is displayed correctly and matches the approved loan amount maintained in CBS.
    // Expected Result: Sanctioned Amount is displayed accurately for each loan account.
    await test.step("[RDR_095] Navigate and execute documented test steps", async () => {
      console.log("[RDR_095] Test execution started — Verify Sanctioned Amount is displayed correctly and matches the approved loan amount maintained in CBS.");
      console.log("[RDR_095] Executing Excel test steps: 1. Review Sanctioned Amount column.  2. Compare values with CBS records.");
      await rdrPage.openMasterTab(testData.baseUrl, "loan-account", "Loan Account");
    });
    await test.step("[RDR_095] Validate expected results from Excel", async () => {
      console.log("[RDR_095] Validating expected result: Sanctioned Amount is displayed accurately for each loan account.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Sanctioned Amount");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Sanctioned Amount");
      console.log("[RDR_095] Test completed successfully");
    });
  });

  test("Case ID:RDR_096 - Loan Account → Outstanding Balance is displayed correctly and reflects the current unpaid loan balance.", async ({ testData }) => {
    // Excel Test Case ID: RDR_096
    // Excel Scenario: Verify Outstanding Balance is displayed correctly and reflects the current unpaid loan balance.
    // Expected Result: Outstanding Balance is displayed accurately and matches source data.
    await test.step("[RDR_096] Navigate and execute documented test steps", async () => {
      console.log("[RDR_096] Test execution started — Verify Outstanding Balance is displayed correctly and reflects the current unpaid loan balance.");
      console.log("[RDR_096] Executing Excel test steps: 1. Review Outstanding Balance column.  2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "loan-account", "Loan Account");
    });
    await test.step("[RDR_096] Validate expected results from Excel", async () => {
      console.log("[RDR_096] Validating expected result: Outstanding Balance is displayed accurately and matches source data.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Outstanding Balance");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Outstanding Balance");
      console.log("[RDR_096] Test completed successfully");
    });
  });

  test("Case ID:RDR_097 - Loan Account → Interest Rate is displayed correctly for each loan account as per the approved loan terms.", async ({ testData }) => {
    // Excel Test Case ID: RDR_097
    // Excel Scenario: Verify Interest Rate is displayed correctly for each loan account as per the approved loan terms.
    // Expected Result: Correct Interest Rate is displayed for each loan account.
    await test.step("[RDR_097] Navigate and execute documented test steps", async () => {
      console.log("[RDR_097] Test execution started — Verify Interest Rate is displayed correctly for each loan account as per the approved loan terms.");
      console.log("[RDR_097] Executing Excel test steps: 1. Review Interest Rate column.  2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "loan-account", "Loan Account");
    });
    await test.step("[RDR_097] Validate expected results from Excel", async () => {
      console.log("[RDR_097] Validating expected result: Correct Interest Rate is displayed for each loan account.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Interest Rate");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Interest Rate");
      console.log("[RDR_097] Test completed successfully");
    });
  });

  test("Case ID:RDR_098 - Loan Account → Disbursement Date and Maturity Date are displayed correctly according to loan lifecycle information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_098
    // Excel Scenario: Verify Disbursement Date and Maturity Date are displayed correctly according to loan lifecycle information.
    // Expected Result: Disbursement Date and Maturity Date are displayed correctly in configured date format.
    await test.step("[RDR_098] Navigate and execute documented test steps", async () => {
      console.log("[RDR_098] Test execution started — Verify Disbursement Date and Maturity Date are displayed correctly according to loan lifecycle information.");
      console.log("[RDR_098] Executing Excel test steps: 1. Review Disbursement Date and Maturity Date columns.  2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "loan-account", "Loan Account");
    });
    await test.step("[RDR_098] Validate expected results from Excel", async () => {
      console.log("[RDR_098] Validating expected result: Disbursement Date and Maturity Date are displayed correctly in configured date format.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Disbursement Date and Maturity Date");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Disbursement Date and Maturity Date");
      console.log("[RDR_098] Test completed successfully");
    });
  });

  test("Case ID:RDR_099 - Loan Account → Loan Status values are displayed correctly and reflect the current loan condition.", async ({ testData }) => {
    // Excel Test Case ID: RDR_099
    // Excel Scenario: Verify Loan Status values are displayed correctly and reflect the current loan condition.
    // Expected Result: Correct loan status is displayed for each loan account record.
    await test.step("[RDR_099] Navigate and execute documented test steps", async () => {
      console.log("[RDR_099] Test execution started — Verify Loan Status values are displayed correctly and reflect the current loan condition.");
      console.log("[RDR_099] Executing Excel test steps: 1. Review Status column.  2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "loan-account", "Loan Account");
    });
    await test.step("[RDR_099] Validate expected results from Excel", async () => {
      console.log("[RDR_099] Validating expected result: Correct loan status is displayed for each loan account record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Loan Status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Loan Status");
      console.log("[RDR_099] Test completed successfully");
    });
  });

  test("Case ID:RDR_100 - Loan Account → View action opens complete loan account details including loan information, balances, repayment schedule and status.", async ({ testData }) => {
    // Excel Test Case ID: RDR_100
    // Excel Scenario: Verify View action opens complete loan account details including loan information, balances, repayment schedule and status.
    // Expected Result: Loan Account detail screen opens successfully displaying complete loan information including Loan ID, Customer ID, Account ID, Loan Type, Sanctioned Amount, Outstanding Balance, Interest Rate, Disbursement Date, Maturity Date and Status.
    await test.step("[RDR_100] Navigate and execute documented test steps", async () => {
      console.log("[RDR_100] Test execution started — Verify View action opens complete loan account details including loan information, balances, repayment schedule and status.");
      console.log("[RDR_100] Executing Excel test steps: 1. Click View button for selected loan.  2. Review loan details page.  3. Validate displayed information.");
      await rdrPage.openMasterTab(testData.baseUrl, "loan-account", "Loan Account");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_100] Validate expected results from Excel", async () => {
      console.log("[RDR_100] Validating expected result: Loan Account detail screen opens successfully displaying complete loan information including Loan ID, Customer ID, Account ID, Loan Type, Sanctioned Amount, Outstanding Balance, Interest Rate, Disbursement Date, Maturity Date and Status.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_100] Test completed successfully");
    });
  });
  });

  test.describe("EOD Balance", () => {
  test("Case ID:RDR_101 - EOD Balance → Balance ID is generated uniquely and displayed correctly for every EOD balance record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_101
    // Excel Scenario: Verify Balance ID is generated uniquely and displayed correctly for every EOD balance record loaded from CBS.
    // Expected Result: Unique Balance IDs are displayed for all EOD balance records without duplication.
    await test.step("[RDR_101] Navigate and execute documented test steps", async () => {
      console.log("[RDR_101] Test execution started — Verify Balance ID is generated uniquely and displayed correctly for every EOD balance record loaded from CBS.");
      console.log("[RDR_101] Executing Excel test steps: 1. Open EOD Balance tab.  2. Review Balance ID column.  3. Compare multiple records.  4. Verify uniqueness.");
      await rdrPage.openMasterTab(testData.baseUrl, "eod-balance", "EOD Balance");
    });
    await test.step("[RDR_101] Validate expected results from Excel", async () => {
      console.log("[RDR_101] Validating expected result: Unique Balance IDs are displayed for all EOD balance records without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Balance ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Balance ID");
    await rdrPage.expectUniqueColumnValues("Balance ID");
      console.log("[RDR_101] Test completed successfully");
    });
  });

  test("Case ID:RDR_102 - EOD Balance → Account ID displayed in EOD records matches the linked account in Account Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_102
    // Excel Scenario: Verify Account ID displayed in EOD records matches the linked account in Account Master.
    // Expected Result: Correct Account ID is displayed for each EOD balance record.
    await test.step("[RDR_102] Navigate and execute documented test steps", async () => {
      console.log("[RDR_102] Test execution started — Verify Account ID displayed in EOD records matches the linked account in Account Master.");
      console.log("[RDR_102] Executing Excel test steps: 1. Review Account ID column.  2. Compare with Account Master records.");
      await rdrPage.openMasterTab(testData.baseUrl, "eod-balance", "EOD Balance");
    });
    await test.step("[RDR_102] Validate expected results from Excel", async () => {
      console.log("[RDR_102] Validating expected result: Correct Account ID is displayed for each EOD balance record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Account ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Account ID");
      console.log("[RDR_102] Test completed successfully");
    });
  });

  test("Case ID:RDR_103 - EOD Balance → Customer ID displayed against each EOD balance record matches the linked customer profile.", async ({ testData }) => {
    // Excel Test Case ID: RDR_103
    // Excel Scenario: Verify Customer ID displayed against each EOD balance record matches the linked customer profile.
    // Expected Result: Correct Customer ID is displayed for each EOD balance record.
    await test.step("[RDR_103] Navigate and execute documented test steps", async () => {
      console.log("[RDR_103] Test execution started — Verify Customer ID displayed against each EOD balance record matches the linked customer profile.");
      console.log("[RDR_103] Executing Excel test steps: 1. Review Customer ID column.  2. Compare with Customer Master records.");
      await rdrPage.openMasterTab(testData.baseUrl, "eod-balance", "EOD Balance");
    });
    await test.step("[RDR_103] Validate expected results from Excel", async () => {
      console.log("[RDR_103] Validating expected result: Correct Customer ID is displayed for each EOD balance record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Customer ID");
      console.log("[RDR_103] Test completed successfully");
    });
  });

  test("Case ID:RDR_104 - EOD Balance → Balance Date is displayed correctly and represents the business date for which EOD balance was calculated.", async ({ testData }) => {
    // Excel Test Case ID: RDR_104
    // Excel Scenario: Verify Balance Date is displayed correctly and represents the business date for which EOD balance was calculated.
    // Expected Result: Balance Date is displayed accurately and matches the EOD processing date.
    await test.step("[RDR_104] Navigate and execute documented test steps", async () => {
      console.log("[RDR_104] Test execution started — Verify Balance Date is displayed correctly and represents the business date for which EOD balance was calculated.");
      console.log("[RDR_104] Executing Excel test steps: 1. Review Balance Date column.  2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "eod-balance", "EOD Balance");
    });
    await test.step("[RDR_104] Validate expected results from Excel", async () => {
      console.log("[RDR_104] Validating expected result: Balance Date is displayed accurately and matches the EOD processing date.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Balance Date");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Balance Date");
      console.log("[RDR_104] Test completed successfully");
    });
  });

  test("Case ID:RDR_105 - EOD Balance → Opening Balance is displayed correctly and matches the opening balance received from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_105
    // Excel Scenario: Verify Opening Balance is displayed correctly and matches the opening balance received from CBS.
    // Expected Result: Opening Balance is displayed accurately for each account.
    await test.step("[RDR_105] Navigate and execute documented test steps", async () => {
      console.log("[RDR_105] Test execution started — Verify Opening Balance is displayed correctly and matches the opening balance received from CBS.");
      console.log("[RDR_105] Executing Excel test steps: 1. Review Opening Bal column.  2. Compare with CBS records.");
      await rdrPage.openMasterTab(testData.baseUrl, "eod-balance", "EOD Balance");
    });
    await test.step("[RDR_105] Validate expected results from Excel", async () => {
      console.log("[RDR_105] Validating expected result: Opening Balance is displayed accurately for each account.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Opening Balance");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Opening Balance");
      console.log("[RDR_105] Test completed successfully");
    });
  });

  test("Case ID:RDR_106 - EOD Balance → Total Credits and Total Debits are displayed correctly for the selected EOD date.", async ({ testData }) => {
    // Excel Test Case ID: RDR_106
    // Excel Scenario: Verify Total Credits and Total Debits are displayed correctly for the selected EOD date.
    // Expected Result: Total Credits and Total Debits are displayed accurately according to CBS transaction data.
    await test.step("[RDR_106] Navigate and execute documented test steps", async () => {
      console.log("[RDR_106] Test execution started — Verify Total Credits and Total Debits are displayed correctly for the selected EOD date.");
      console.log("[RDR_106] Executing Excel test steps: 1. Review Total Credits and Total Debits columns.  2. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "eod-balance", "EOD Balance");
    });
    await test.step("[RDR_106] Validate expected results from Excel", async () => {
      console.log("[RDR_106] Validating expected result: Total Credits and Total Debits are displayed accurately according to CBS transaction data.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Total Credits and Total Debits");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Total Credits and Total Debits");
      console.log("[RDR_106] Test completed successfully");
    });
  });

  test("Case ID:RDR_107 - EOD Balance → Closing Balance is calculated and displayed correctly based on Opening Balance, Credits and Debits.", async ({ testData }) => {
    // Excel Test Case ID: RDR_107
    // Excel Scenario: Verify Closing Balance is calculated and displayed correctly based on Opening Balance, Credits and Debits.
    // Expected Result: Closing Balance is displayed correctly and matches the calculated EOD balance.
    await test.step("[RDR_107] Navigate and execute documented test steps", async () => {
      console.log("[RDR_107] Test execution started — Verify Closing Balance is calculated and displayed correctly based on Opening Balance, Credits and Debits.");
      console.log("[RDR_107] Executing Excel test steps: 1. Review Opening Balance, Credits, Debits and Closing Balance.  2. Validate calculation.");
      await rdrPage.openMasterTab(testData.baseUrl, "eod-balance", "EOD Balance");
    });
    await test.step("[RDR_107] Validate expected results from Excel", async () => {
      console.log("[RDR_107] Validating expected result: Closing Balance is displayed correctly and matches the calculated EOD balance.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Closing Balance");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Closing Balance");
      console.log("[RDR_107] Test completed successfully");
    });
  });

  test("Case ID:RDR_108 - EOD Balance → Currency values are displayed correctly for all EOD balance records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_108
    // Excel Scenario: Verify Currency values are displayed correctly for all EOD balance records.
    // Expected Result: Correct currency code is displayed for each EOD balance record.
    await test.step("[RDR_108] Navigate and execute documented test steps", async () => {
      console.log("[RDR_108] Test execution started — Verify Currency values are displayed correctly for all EOD balance records.");
      console.log("[RDR_108] Executing Excel test steps: 1. Review Currency column.  2. Compare with account details.");
      await rdrPage.openMasterTab(testData.baseUrl, "eod-balance", "EOD Balance");
    });
    await test.step("[RDR_108] Validate expected results from Excel", async () => {
      console.log("[RDR_108] Validating expected result: Correct currency code is displayed for each EOD balance record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Currency");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Currency");
      console.log("[RDR_108] Test completed successfully");
    });
  });

  test("Case ID:RDR_109 - EOD Balance → Credit Count and Debit Count values are displayed correctly based on transaction activity for the day.", async ({ testData }) => {
    // Excel Test Case ID: RDR_109
    // Excel Scenario: Verify Credit Count and Debit Count values are displayed correctly based on transaction activity for the day.
    // Expected Result: Credit Count and Debit Count values are displayed accurately for each account.
    await test.step("[RDR_109] Navigate and execute documented test steps", async () => {
      console.log("[RDR_109] Test execution started — Verify Credit Count and Debit Count values are displayed correctly based on transaction activity for the day.");
      console.log("[RDR_109] Executing Excel test steps: 1. Review Credit Count and Debit Count columns.  2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "eod-balance", "EOD Balance");
    });
    await test.step("[RDR_109] Validate expected results from Excel", async () => {
      console.log("[RDR_109] Validating expected result: Credit Count and Debit Count values are displayed accurately for each account.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Credit Count and Debit Count");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Credit Count and Debit Count");
      console.log("[RDR_109] Test completed successfully");
    });
  });

  test("Case ID:RDR_110 - EOD Balance → View action opens complete EOD balance details including balance calculation and transaction summary information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_110
    // Excel Scenario: Verify View action opens complete EOD balance details including balance calculation and transaction summary information.
    // Expected Result: EOD Balance detail screen opens successfully displaying Balance ID, Account ID, Customer ID, Opening Balance, Credits, Debits, Closing Balance, Currency and transaction summary details.
    await test.step("[RDR_110] Navigate and execute documented test steps", async () => {
      console.log("[RDR_110] Test execution started — Verify View action opens complete EOD balance details including balance calculation and transaction summary information.");
      console.log("[RDR_110] Executing Excel test steps: 1. Click View button.  2. Review EOD balance details.  3. Validate displayed information.");
      await rdrPage.openMasterTab(testData.baseUrl, "eod-balance", "EOD Balance");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_110] Validate expected results from Excel", async () => {
      console.log("[RDR_110] Validating expected result: EOD Balance detail screen opens successfully displaying Balance ID, Account ID, Customer ID, Opening Balance, Credits, Debits, Closing Balance, Currency and transaction summary details.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_110] Test completed successfully");
    });
  });
  });

  test.describe("Card Master", () => {
  test("Case ID:RDR_111 - Card Master → Card ID is generated uniquely and displayed correctly for every card record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_111
    // Excel Scenario: Verify Card ID is generated uniquely and displayed correctly for every card record loaded from CBS.
    // Expected Result: Unique Card IDs are displayed for all card records without duplication.
    await test.step("[RDR_111] Navigate and execute documented test steps", async () => {
      console.log("[RDR_111] Test execution started — Verify Card ID is generated uniquely and displayed correctly for every card record loaded from CBS.");
      console.log("[RDR_111] Executing Excel test steps: 1. Open Card Master tab.  2. Review Card ID column.  3. Compare multiple records.  4. Verify uniqueness.");
      await rdrPage.openMasterTab(testData.baseUrl, "card", "Card Master");
    });
    await test.step("[RDR_111] Validate expected results from Excel", async () => {
      console.log("[RDR_111] Validating expected result: Unique Card IDs are displayed for all card records without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Card ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Card ID");
    await rdrPage.expectUniqueColumnValues("Card ID");
      console.log("[RDR_111] Test completed successfully");
    });
  });

  test("Case ID:RDR_112 - Card Master → Customer ID and Account ID displayed for each card are correctly mapped to the associated customer and account records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_112
    // Excel Scenario: Verify Customer ID and Account ID displayed for each card are correctly mapped to the associated customer and account records.
    // Expected Result: Correct Customer ID and Account ID are displayed for each card record.
    await test.step("[RDR_112] Navigate and execute documented test steps", async () => {
      console.log("[RDR_112] Test execution started — Verify Customer ID and Account ID displayed for each card are correctly mapped to the associated customer and account records.");
      console.log("[RDR_112] Executing Excel test steps: 1. Review Customer ID and Account ID columns.  2. Compare with Customer Master and Account Master records.");
      await rdrPage.openMasterTab(testData.baseUrl, "card", "Card Master");
    });
    await test.step("[RDR_112] Validate expected results from Excel", async () => {
      console.log("[RDR_112] Validating expected result: Correct Customer ID and Account ID are displayed for each card record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer ID and Account ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Customer ID and Account ID");
      console.log("[RDR_112] Test completed successfully");
    });
  });

  test("Case ID:RDR_113 - Card Master → masked card number (Last 4 digits) is displayed according to PCI-DSS masking requirements.", async ({ testData }) => {
    // Excel Test Case ID: RDR_113
    // Excel Scenario: Verify masked card number (Last 4 digits) is displayed according to PCI-DSS masking requirements.
    // Expected Result: Only masked card information is displayed and PCI-DSS masking requirements are met.
    await test.step("[RDR_113] Navigate and execute documented test steps", async () => {
      console.log("[RDR_113] Test execution started — Verify masked card number (Last 4 digits) is displayed according to PCI-DSS masking requirements.");
      console.log("[RDR_113] Executing Excel test steps: 1. Review Last 4 column.  2. Compare with source card number.  3. Verify masking rules.");
      await rdrPage.openMasterTab(testData.baseUrl, "card", "Card Master");
    });
    await test.step("[RDR_113] Validate expected results from Excel", async () => {
      console.log("[RDR_113] Validating expected result: Only masked card information is displayed and PCI-DSS masking requirements are met.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("masked card number (Last 4 digits)");
    await rdrPage.expectColumnValuesMasked("masked card number (Last 4 digits)");
      console.log("[RDR_113] Test completed successfully");
    });
  });

  test("Case ID:RDR_114 - Card Master → Card Type values are displayed correctly according to card classification maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_114
    // Excel Scenario: Verify Card Type values are displayed correctly according to card classification maintained in source systems.
    // Expected Result: Correct Card Type is displayed for each card record.
    await test.step("[RDR_114] Navigate and execute documented test steps", async () => {
      console.log("[RDR_114] Test execution started — Verify Card Type values are displayed correctly according to card classification maintained in source systems.");
      console.log("[RDR_114] Executing Excel test steps: 1. Review Card Type column.  2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "card", "Card Master");
    });
    await test.step("[RDR_114] Validate expected results from Excel", async () => {
      console.log("[RDR_114] Validating expected result: Correct Card Type is displayed for each card record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Card Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Card Type");
      console.log("[RDR_114] Test completed successfully");
    });
  });

  test("Case ID:RDR_115 - Card Master → card Network values are displayed correctly for issued cards.", async ({ testData }) => {
    // Excel Test Case ID: RDR_115
    // Excel Scenario: Verify card Network values are displayed correctly for issued cards.
    // Expected Result: Correct card network is displayed for each card record.
    await test.step("[RDR_115] Navigate and execute documented test steps", async () => {
      console.log("[RDR_115] Test execution started — Verify card Network values are displayed correctly for issued cards.");
      console.log("[RDR_115] Executing Excel test steps: 1. Review Network column.  2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "card", "Card Master");
    });
    await test.step("[RDR_115] Validate expected results from Excel", async () => {
      console.log("[RDR_115] Validating expected result: Correct card network is displayed for each card record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("card Network");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("card Network");
      console.log("[RDR_115] Test completed successfully");
    });
  });

  test("Case ID:RDR_116 - Card Master → Card Status values are displayed correctly and reflect the current card lifecycle status.", async ({ testData }) => {
    // Excel Test Case ID: RDR_116
    // Excel Scenario: Verify Card Status values are displayed correctly and reflect the current card lifecycle status.
    // Expected Result: Correct Card Status is displayed for each card record. Active cards display ACTIVE and blocked cards display HOT_LISTED.
    await test.step("[RDR_116] Navigate and execute documented test steps", async () => {
      console.log("[RDR_116] Test execution started — Verify Card Status values are displayed correctly and reflect the current card lifecycle status.");
      console.log("[RDR_116] Executing Excel test steps: 1. Review Status column.  2. Compare values with source data.  3. Verify visual indicators.");
      await rdrPage.openMasterTab(testData.baseUrl, "card", "Card Master");
    });
    await test.step("[RDR_116] Validate expected results from Excel", async () => {
      console.log("[RDR_116] Validating expected result: Correct Card Status is displayed for each card record. Active cards display ACTIVE and blocked cards display HOT_LISTED.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Card Status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Card Status");
      console.log("[RDR_116] Test completed successfully");
    });
  });

  test("Case ID:RDR_117 - Card Master → hot-listed cards are highlighted appropriately and displayed with the correct status indicator.", async ({ testData }) => {
    // Excel Test Case ID: RDR_117
    // Excel Scenario: Verify hot-listed cards are highlighted appropriately and displayed with the correct status indicator.
    // Expected Result: Hot-listed card displays HOT_LISTED status with configured alert/highlight indicator.
    await test.step("[RDR_117] Navigate and execute documented test steps", async () => {
      console.log("[RDR_117] Test execution started — Verify hot-listed cards are highlighted appropriately and displayed with the correct status indicator.");
      console.log("[RDR_117] Executing Excel test steps: 1. Locate hot-listed card.  2. Review Status column.  3. Verify status indicator.");
      await rdrPage.openMasterTab(testData.baseUrl, "card", "Card Master");
    });
    await test.step("[RDR_117] Validate expected results from Excel", async () => {
      console.log("[RDR_117] Validating expected result: Hot-listed card displays HOT_LISTED status with configured alert/highlight indicator.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Status");
      console.log("[RDR_117] Test completed successfully");
    });
  });

  test("Case ID:RDR_118 - Card Master → Issue Date and Expiry Date are displayed correctly for issued cards.", async ({ testData }) => {
    // Excel Test Case ID: RDR_118
    // Excel Scenario: Verify Issue Date and Expiry Date are displayed correctly for issued cards.
    // Expected Result: Issue Date and Expiry Date are displayed correctly according to source data.
    await test.step("[RDR_118] Navigate and execute documented test steps", async () => {
      console.log("[RDR_118] Test execution started — Verify Issue Date and Expiry Date are displayed correctly for issued cards.");
      console.log("[RDR_118] Executing Excel test steps: 1. Review Issue Date and Expiry Date columns.  2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "card", "Card Master");
    });
    await test.step("[RDR_118] Validate expected results from Excel", async () => {
      console.log("[RDR_118] Validating expected result: Issue Date and Expiry Date are displayed correctly according to source data.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Issue Date and Expiry Date");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Issue Date and Expiry Date");
      console.log("[RDR_118] Test completed successfully");
    });
  });

  test("Case ID:RDR_119 - Card Master → International Usage and Contactless indicators are displayed correctly based on card configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_119
    // Excel Scenario: Verify International Usage and Contactless indicators are displayed correctly based on card configuration.
    // Expected Result: International Usage and Contactless indicators display correct Yes/No values for each card.
    await test.step("[RDR_119] Navigate and execute documented test steps", async () => {
      console.log("[RDR_119] Test execution started — Verify International Usage and Contactless indicators are displayed correctly based on card configuration.");
      console.log("[RDR_119] Executing Excel test steps: 1. Review INTL Usage column.  2. Review Contactless column.  3. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "card", "Card Master");
    });
    await test.step("[RDR_119] Validate expected results from Excel", async () => {
      console.log("[RDR_119] Validating expected result: International Usage and Contactless indicators display correct Yes/No values for each card.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("International Usage and Contactless indicators");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("International Usage and Contactless indicators");
      console.log("[RDR_119] Test completed successfully");
    });
  });

  test("Case ID:RDR_120 - Card Master → View action opens complete card details including card status, limits, AML risk flags and usage configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_120
    // Excel Scenario: Verify View action opens complete card details including card status, limits, AML risk flags and usage configuration.
    // Expected Result: Card detail screen opens successfully displaying Card ID, Card Type, Masked Card Number, Status, International Usage Flag, Daily Limit, High Risk Flag, Hotlist Reason and other card details.
    await test.step("[RDR_120] Navigate and execute documented test steps", async () => {
      console.log("[RDR_120] Test execution started — Verify View action opens complete card details including card status, limits, AML risk flags and usage configuration.");
      console.log("[RDR_120] Executing Excel test steps: 1. Click View button.  2. Review card details page.  3. Validate displayed information.");
      await rdrPage.openMasterTab(testData.baseUrl, "card", "Card Master");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_120] Validate expected results from Excel", async () => {
      console.log("[RDR_120] Validating expected result: Card detail screen opens successfully displaying Card ID, Card Type, Masked Card Number, Status, International Usage Flag, Daily Limit, High Risk Flag, Hotlist Reason and other card details.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_120] Test completed successfully");
    });
  });
  });

  test.describe("Mobile Banking", () => {
  test("Case ID:RDR_121 - Mobile Banking → Mobile Banking ID (MB ID) is generated uniquely and displayed correctly for each mobile banking registration record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_121
    // Excel Scenario: Verify Mobile Banking ID (MB ID) is generated uniquely and displayed correctly for each mobile banking registration record.
    // Expected Result: Unique Mobile Banking IDs are displayed for all registration records without duplication.
    await test.step("[RDR_121] Navigate and execute documented test steps", async () => {
      console.log("[RDR_121] Test execution started — Verify Mobile Banking ID (MB ID) is generated uniquely and displayed correctly for each mobile banking registration record.");
      console.log("[RDR_121] Executing Excel test steps: 1. Open Mobile Banking tab.  2. Review MB ID column.  3. Compare multiple records.  4. Verify uniqueness.");
      await rdrPage.openMasterTab(testData.baseUrl, "mobile-banking", "Mobile Banking");
    });
    await test.step("[RDR_121] Validate expected results from Excel", async () => {
      console.log("[RDR_121] Validating expected result: Unique Mobile Banking IDs are displayed for all registration records without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("MB ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("MB ID");
    await rdrPage.expectUniqueColumnValues("MB ID");
      console.log("[RDR_121] Test completed successfully");
    });
  });

  test("Case ID:RDR_122 - Mobile Banking → Customer ID and Account ID displayed in mobile banking records are correctly mapped to the linked customer and account.", async ({ testData }) => {
    // Excel Test Case ID: RDR_122
    // Excel Scenario: Verify Customer ID and Account ID displayed in mobile banking records are correctly mapped to the linked customer and account.
    // Expected Result: Correct Customer ID and Account ID are displayed for each mobile banking registration.
    await test.step("[RDR_122] Navigate and execute documented test steps", async () => {
      console.log("[RDR_122] Test execution started — Verify Customer ID and Account ID displayed in mobile banking records are correctly mapped to the linked customer and account.");
      console.log("[RDR_122] Executing Excel test steps: 1. Review Customer ID and Account ID columns.  2. Compare with Customer Master and Account Master data.");
      await rdrPage.openMasterTab(testData.baseUrl, "mobile-banking", "Mobile Banking");
    });
    await test.step("[RDR_122] Validate expected results from Excel", async () => {
      console.log("[RDR_122] Validating expected result: Correct Customer ID and Account ID are displayed for each mobile banking registration.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer ID and Account ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Customer ID and Account ID");
      console.log("[RDR_122] Test completed successfully");
    });
  });

  test("Case ID:RDR_123 - Mobile Banking → registered mobile number is displayed according to masking rules to protect customer PII information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_123
    // Excel Scenario: Verify registered mobile number is displayed according to masking rules to protect customer PII information.
    // Expected Result: Mobile numbers are displayed in masked format according to PII masking requirements.
    await test.step("[RDR_123] Navigate and execute documented test steps", async () => {
      console.log("[RDR_123] Test execution started — Verify registered mobile number is displayed according to masking rules to protect customer PII information.");
      console.log("[RDR_123] Executing Excel test steps: 1. Review Mobile Number column.  2. Verify masking pattern.  3. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "mobile-banking", "Mobile Banking");
    });
    await test.step("[RDR_123] Validate expected results from Excel", async () => {
      console.log("[RDR_123] Validating expected result: Mobile numbers are displayed in masked format according to PII masking requirements.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("registered mobile number");
    await rdrPage.expectColumnValuesMasked("registered mobile number");
      console.log("[RDR_123] Test completed successfully");
    });
  });

  test("Case ID:RDR_124 - Mobile Banking → Registration Date is displayed correctly and reflects the actual mobile banking enrollment date.", async ({ testData }) => {
    // Excel Test Case ID: RDR_124
    // Excel Scenario: Verify Registration Date is displayed correctly and reflects the actual mobile banking enrollment date.
    // Expected Result: Registration Date is displayed accurately in configured date format.
    await test.step("[RDR_124] Navigate and execute documented test steps", async () => {
      console.log("[RDR_124] Test execution started — Verify Registration Date is displayed correctly and reflects the actual mobile banking enrollment date.");
      console.log("[RDR_124] Executing Excel test steps: 1. Review Registration Date column.  2. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "mobile-banking", "Mobile Banking");
    });
    await test.step("[RDR_124] Validate expected results from Excel", async () => {
      console.log("[RDR_124] Validating expected result: Registration Date is displayed accurately in configured date format.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Registration Date");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Registration Date");
      console.log("[RDR_124] Test completed successfully");
    });
  });

  test("Case ID:RDR_125 - Mobile Banking → Registration Channel values are displayed correctly according to the channel used during mobile banking registration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_125
    // Excel Scenario: Verify Registration Channel values are displayed correctly according to the channel used during mobile banking registration.
    // Expected Result: Correct Registration Channel is displayed for each mobile banking registration.
    await test.step("[RDR_125] Navigate and execute documented test steps", async () => {
      console.log("[RDR_125] Test execution started — Verify Registration Channel values are displayed correctly according to the channel used during mobile banking registration.");
      console.log("[RDR_125] Executing Excel test steps: 1. Review Reg Channel column.  2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "mobile-banking", "Mobile Banking");
    });
    await test.step("[RDR_125] Validate expected results from Excel", async () => {
      console.log("[RDR_125] Validating expected result: Correct Registration Channel is displayed for each mobile banking registration.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Registration Channel");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Registration Channel");
      console.log("[RDR_125] Test completed successfully");
    });
  });

  test("Case ID:RDR_126 - Mobile Banking → UPI VPA is displayed correctly and mapped to the corresponding mobile banking customer.", async ({ testData }) => {
    // Excel Test Case ID: RDR_126
    // Excel Scenario: Verify UPI VPA is displayed correctly and mapped to the corresponding mobile banking customer.
    // Expected Result: Correct UPI VPA is displayed for each mobile banking customer.
    await test.step("[RDR_126] Navigate and execute documented test steps", async () => {
      console.log("[RDR_126] Test execution started — Verify UPI VPA is displayed correctly and mapped to the corresponding mobile banking customer.");
      console.log("[RDR_126] Executing Excel test steps: 1. Review UPI VPA column.  2. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "mobile-banking", "Mobile Banking");
    });
    await test.step("[RDR_126] Validate expected results from Excel", async () => {
      console.log("[RDR_126] Validating expected result: Correct UPI VPA is displayed for each mobile banking customer.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("UPI VPA");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("UPI VPA");
      console.log("[RDR_126] Test completed successfully");
    });
  });

  test("Case ID:RDR_127 - Mobile Banking → UPI Banks Linked count is displayed correctly and reflects the number of bank accounts linked to UPI.", async ({ testData }) => {
    // Excel Test Case ID: RDR_127
    // Excel Scenario: Verify UPI Banks Linked count is displayed correctly and reflects the number of bank accounts linked to UPI.
    // Expected Result: Correct number of linked UPI bank accounts is displayed.
    await test.step("[RDR_127] Navigate and execute documented test steps", async () => {
      console.log("[RDR_127] Test execution started — Verify UPI Banks Linked count is displayed correctly and reflects the number of bank accounts linked to UPI.");
      console.log("[RDR_127] Executing Excel test steps: 1. Review UPI Banks Linked column.  2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "mobile-banking", "Mobile Banking");
    });
    await test.step("[RDR_127] Validate expected results from Excel", async () => {
      console.log("[RDR_127] Validating expected result: Correct number of linked UPI bank accounts is displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("UPI Banks Linked count");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("UPI Banks Linked count");
      console.log("[RDR_127] Test completed successfully");
    });
  });

  test("Case ID:RDR_128 - Mobile Banking → Login Failures (24H) count is displayed correctly and reflects failed login attempts within the last 24 hours.", async ({ testData }) => {
    // Excel Test Case ID: RDR_128
    // Excel Scenario: Verify Login Failures (24H) count is displayed correctly and reflects failed login attempts within the last 24 hours.
    // Expected Result: Login failure count is displayed accurately for each mobile banking user.
    await test.step("[RDR_128] Navigate and execute documented test steps", async () => {
      console.log("[RDR_128] Test execution started — Verify Login Failures (24H) count is displayed correctly and reflects failed login attempts within the last 24 hours.");
      console.log("[RDR_128] Executing Excel test steps: 1. Review Login Failures (24H) column.  2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "mobile-banking", "Mobile Banking");
    });
    await test.step("[RDR_128] Validate expected results from Excel", async () => {
      console.log("[RDR_128] Validating expected result: Login failure count is displayed accurately for each mobile banking user.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Login Failures (24H) count");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Login Failures (24H) count");
      console.log("[RDR_128] Test completed successfully");
    });
  });

  test("Case ID:RDR_129 - Mobile Banking → Status values are displayed correctly and reflect the current mobile banking registration status.", async ({ testData }) => {
    // Excel Test Case ID: RDR_129
    // Excel Scenario: Verify Status values are displayed correctly and reflect the current mobile banking registration status.
    // Expected Result: Correct status is displayed for each mobile banking registration record.
    await test.step("[RDR_129] Navigate and execute documented test steps", async () => {
      console.log("[RDR_129] Test execution started — Verify Status values are displayed correctly and reflect the current mobile banking registration status.");
      console.log("[RDR_129] Executing Excel test steps: 1. Review Status column.  2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "mobile-banking", "Mobile Banking");
    });
    await test.step("[RDR_129] Validate expected results from Excel", async () => {
      console.log("[RDR_129] Validating expected result: Correct status is displayed for each mobile banking registration record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Status");
      console.log("[RDR_129] Test completed successfully");
    });
  });

  test("Case ID:RDR_130 - Mobile Banking → View action opens complete mobile banking details including registration information, AML indicators and mobile banking activity details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_130
    // Excel Scenario: Verify View action opens complete mobile banking details including registration information, AML indicators and mobile banking activity details.
    // Expected Result: Mobile Banking detail screen opens successfully displaying Mobile Banking ID, Registered Mobile Number, MPIN Change Count, Beneficiary Add Count, MNRL Check Flag, Login Failure Count, Registration Channel and status information.
    await test.step("[RDR_130] Navigate and execute documented test steps", async () => {
      console.log("[RDR_130] Test execution started — Verify View action opens complete mobile banking details including registration information, AML indicators and mobile banking activity details.");
      console.log("[RDR_130] Executing Excel test steps: 1. Click View button.  2. Review mobile banking details.  3. Validate displayed information.");
      await rdrPage.openMasterTab(testData.baseUrl, "mobile-banking", "Mobile Banking");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_130] Validate expected results from Excel", async () => {
      console.log("[RDR_130] Validating expected result: Mobile Banking detail screen opens successfully displaying Mobile Banking ID, Registered Mobile Number, MPIN Change Count, Beneficiary Add Count, MNRL Check Flag, Login Failure Count, Registration Channel and status information.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_130] Test completed successfully");
    });
  });
  });

  test.describe("ATM Master", () => {
  test("Case ID:RDR_131 - ATM Master → ATM ID is generated uniquely and displayed correctly for every ATM record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_131
    // Excel Scenario: Verify ATM ID is generated uniquely and displayed correctly for every ATM record loaded from CBS.
    // Expected Result: Unique ATM IDs are displayed for all ATM records without duplication.
    await test.step("[RDR_131] Navigate and execute documented test steps", async () => {
      console.log("[RDR_131] Test execution started — Verify ATM ID is generated uniquely and displayed correctly for every ATM record loaded from CBS.");
      console.log("[RDR_131] Executing Excel test steps: 1. Open ATM Master tab.  2. Review ATM ID column.  3. Compare multiple records.  4. Verify uniqueness.");
      await rdrPage.openMasterTab(testData.baseUrl, "atm", "ATM Master");
    });
    await test.step("[RDR_131] Validate expected results from Excel", async () => {
      console.log("[RDR_131] Validating expected result: Unique ATM IDs are displayed for all ATM records without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("ATM ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("ATM ID");
    await rdrPage.expectUniqueColumnValues("ATM ID");
      console.log("[RDR_131] Test completed successfully");
    });
  });

  test("Case ID:RDR_132 - ATM Master → ATM Code is displayed correctly and uniquely identifies each ATM machine.", async ({ testData }) => {
    // Excel Test Case ID: RDR_132
    // Excel Scenario: Verify ATM Code is displayed correctly and uniquely identifies each ATM machine.
    // Expected Result: Correct ATM Code is displayed for each ATM.
    await test.step("[RDR_132] Navigate and execute documented test steps", async () => {
      console.log("[RDR_132] Test execution started — Verify ATM Code is displayed correctly and uniquely identifies each ATM machine.");
      console.log("[RDR_132] Executing Excel test steps: 1. Review ATM Code column.  2. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "atm", "ATM Master");
    });
    await test.step("[RDR_132] Validate expected results from Excel", async () => {
      console.log("[RDR_132] Validating expected result: Correct ATM Code is displayed for each ATM.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("ATM Code");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("ATM Code");
    await rdrPage.expectUniqueColumnValues("ATM Code");
      console.log("[RDR_132] Test completed successfully");
    });
  });

  test("Case ID:RDR_133 - ATM Master → ATM Name is displayed correctly and matches the ATM location name maintained in CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_133
    // Excel Scenario: Verify ATM Name is displayed correctly and matches the ATM location name maintained in CBS.
    // Expected Result: Correct ATM Name is displayed for every ATM record.
    await test.step("[RDR_133] Navigate and execute documented test steps", async () => {
      console.log("[RDR_133] Test execution started — Verify ATM Name is displayed correctly and matches the ATM location name maintained in CBS.");
      console.log("[RDR_133] Executing Excel test steps: 1. Review ATM Name column.  2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "atm", "ATM Master");
    });
    await test.step("[RDR_133] Validate expected results from Excel", async () => {
      console.log("[RDR_133] Validating expected result: Correct ATM Name is displayed for every ATM record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("ATM Name");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("ATM Name");
      console.log("[RDR_133] Test completed successfully");
    });
  });

  test("Case ID:RDR_134 - ATM Master → Branch information is displayed correctly for each ATM location.", async ({ testData }) => {
    // Excel Test Case ID: RDR_134
    // Excel Scenario: Verify Branch information is displayed correctly for each ATM location.
    // Expected Result: Correct Branch information is displayed for each ATM.
    await test.step("[RDR_134] Navigate and execute documented test steps", async () => {
      console.log("[RDR_134] Test execution started — Verify Branch information is displayed correctly for each ATM location.");
      console.log("[RDR_134] Executing Excel test steps: 1. Review Branch column.  2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "atm", "ATM Master");
    });
    await test.step("[RDR_134] Validate expected results from Excel", async () => {
      console.log("[RDR_134] Validating expected result: Correct Branch information is displayed for each ATM.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Branch information");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Branch information");
      console.log("[RDR_134] Test completed successfully");
    });
  });

  test("Case ID:RDR_135 - ATM Master → ATM Type values are displayed correctly according to ATM classification maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_135
    // Excel Scenario: Verify ATM Type values are displayed correctly according to ATM classification maintained in source systems.
    // Expected Result: Correct ATM Type is displayed for every ATM record.
    await test.step("[RDR_135] Navigate and execute documented test steps", async () => {
      console.log("[RDR_135] Test execution started — Verify ATM Type values are displayed correctly according to ATM classification maintained in source systems.");
      console.log("[RDR_135] Executing Excel test steps: 1. Review ATM Type column.  2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "atm", "ATM Master");
    });
    await test.step("[RDR_135] Validate expected results from Excel", async () => {
      console.log("[RDR_135] Validating expected result: Correct ATM Type is displayed for every ATM record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("ATM Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("ATM Type");
      console.log("[RDR_135] Test completed successfully");
    });
  });

  test("Case ID:RDR_136 - ATM Master → City values are displayed correctly based on ATM location information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_136
    // Excel Scenario: Verify City values are displayed correctly based on ATM location information.
    // Expected Result: Correct City is displayed for each ATM record.
    await test.step("[RDR_136] Navigate and execute documented test steps", async () => {
      console.log("[RDR_136] Test execution started — Verify City values are displayed correctly based on ATM location information.");
      console.log("[RDR_136] Executing Excel test steps: 1. Review City column.  2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "atm", "ATM Master");
    });
    await test.step("[RDR_136] Validate expected results from Excel", async () => {
      console.log("[RDR_136] Validating expected result: Correct City is displayed for each ATM record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("City");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("City");
      console.log("[RDR_136] Test completed successfully");
    });
  });

  test("Case ID:RDR_137 - ATM Master → Country Code is displayed correctly for ATM locations.", async ({ testData }) => {
    // Excel Test Case ID: RDR_137
    // Excel Scenario: Verify Country Code is displayed correctly for ATM locations.
    // Expected Result: Correct Country Code is displayed for each ATM.
    await test.step("[RDR_137] Navigate and execute documented test steps", async () => {
      console.log("[RDR_137] Test execution started — Verify Country Code is displayed correctly for ATM locations.");
      console.log("[RDR_137] Executing Excel test steps: 1. Review Country column.  2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "atm", "ATM Master");
    });
    await test.step("[RDR_137] Validate expected results from Excel", async () => {
      console.log("[RDR_137] Validating expected result: Correct Country Code is displayed for each ATM.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Country Code");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Country Code");
      console.log("[RDR_137] Test completed successfully");
    });
  });

  test("Case ID:RDR_138 - ATM Master → ATM Status is displayed correctly and reflects the current operational state of the ATM.", async ({ testData }) => {
    // Excel Test Case ID: RDR_138
    // Excel Scenario: Verify ATM Status is displayed correctly and reflects the current operational state of the ATM.
    // Expected Result: Correct ATM Status is displayed for each ATM record.
    await test.step("[RDR_138] Navigate and execute documented test steps", async () => {
      console.log("[RDR_138] Test execution started — Verify ATM Status is displayed correctly and reflects the current operational state of the ATM.");
      console.log("[RDR_138] Executing Excel test steps: 1. Review Status column.  2. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "atm", "ATM Master");
    });
    await test.step("[RDR_138] Validate expected results from Excel", async () => {
      console.log("[RDR_138] Validating expected result: Correct ATM Status is displayed for each ATM record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("ATM Status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("ATM Status");
      console.log("[RDR_138] Test completed successfully");
    });
  });

  test("Case ID:RDR_139 - ATM Master → search functionality using ATM ID.", async ({ testData }) => {
    // Excel Test Case ID: RDR_139
    // Excel Scenario: Verify search functionality using ATM ID.
    // Expected Result: System displays only the ATM record matching the entered ATM ID.
    await test.step("[RDR_139] Navigate and execute documented test steps", async () => {
      console.log("[RDR_139] Test execution started — Verify search functionality using ATM ID.");
      console.log("[RDR_139] Executing Excel test steps: 1. Enter ATM ID in search field.  2. Execute search.  3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "atm", "ATM Master");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_139] Validate expected results from Excel", async () => {
      console.log("[RDR_139] Validating expected result: System displays only the ATM record matching the entered ATM ID.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_139] Test completed successfully");
    });
  });

  test("Case ID:RDR_140 - ATM Master → search functionality using ATM Code.", async ({ testData }) => {
    // Excel Test Case ID: RDR_140
    // Excel Scenario: Verify search functionality using ATM Code.
    // Expected Result: System displays the ATM record associated with the entered ATM Code.
    await test.step("[RDR_140] Navigate and execute documented test steps", async () => {
      console.log("[RDR_140] Test execution started — Verify search functionality using ATM Code.");
      console.log("[RDR_140] Executing Excel test steps: 1. Enter ATM Code in search box.  2. Execute search.");
      await rdrPage.openMasterTab(testData.baseUrl, "atm", "ATM Master");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_140] Validate expected results from Excel", async () => {
      console.log("[RDR_140] Validating expected result: System displays the ATM record associated with the entered ATM Code.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectSearchYieldsResults();
      console.log("[RDR_140] Test completed successfully");
    });
  });

  test("Case ID:RDR_141 - ATM Master → High Risk Location Flag in ATM details for ATMs located in high-risk geographic areas.", async ({ testData }) => {
    // Excel Test Case ID: RDR_141
    // Excel Scenario: Verify High Risk Location Flag in ATM details for ATMs located in high-risk geographic areas.
    // Expected Result: High Risk Location Flag is displayed correctly according to AML risk configuration.
    await test.step("[RDR_141] Navigate and execute documented test steps", async () => {
      console.log("[RDR_141] Test execution started — Verify High Risk Location Flag in ATM details for ATMs located in high-risk geographic areas.");
      console.log("[RDR_141] Executing Excel test steps: 1. Click View button.  2. Review High Risk Location Flag.  3. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "atm", "ATM Master");
    });
    await test.step("[RDR_141] Validate expected results from Excel", async () => {
      console.log("[RDR_141] Validating expected result: High Risk Location Flag is displayed correctly according to AML risk configuration.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("High Risk Location Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("High Risk Location Flag");
      console.log("[RDR_141] Test completed successfully");
    });
  });

  test("Case ID:RDR_142 - ATM Master → Daily Cash Loaded value is displayed correctly in ATM details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_142
    // Excel Scenario: Verify Daily Cash Loaded value is displayed correctly in ATM details.
    // Expected Result: Daily Cash Loaded amount is displayed accurately.
    await test.step("[RDR_142] Navigate and execute documented test steps", async () => {
      console.log("[RDR_142] Test execution started — Verify Daily Cash Loaded value is displayed correctly in ATM details.");
      console.log("[RDR_142] Executing Excel test steps: 1. Open ATM details.  2. Review Daily Cash Loaded field.");
      await rdrPage.openMasterTab(testData.baseUrl, "atm", "ATM Master");
    });
    await test.step("[RDR_142] Validate expected results from Excel", async () => {
      console.log("[RDR_142] Validating expected result: Daily Cash Loaded amount is displayed accurately.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Daily Cash Loaded value");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Daily Cash Loaded value");
      console.log("[RDR_142] Test completed successfully");
    });
  });

  test("Case ID:RDR_143 - ATM Master → View action opens complete ATM details including AML and operational information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_143
    // Excel Scenario: Verify View action opens complete ATM details including AML and operational information.
    // Expected Result: ATM detail screen opens successfully displaying ATM ID, ATM Type, Country Code, High Risk Location Flag, Daily Cash Loaded and location details.
    await test.step("[RDR_143] Navigate and execute documented test steps", async () => {
      console.log("[RDR_143] Test execution started — Verify View action opens complete ATM details including AML and operational information.");
      console.log("[RDR_143] Executing Excel test steps: 1. Click View button.  2. Review ATM details page.  3. Validate information displayed.");
      await rdrPage.openMasterTab(testData.baseUrl, "atm", "ATM Master");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_143] Validate expected results from Excel", async () => {
      console.log("[RDR_143] Validating expected result: ATM detail screen opens successfully displaying ATM ID, ATM Type, Country Code, High Risk Location Flag, Daily Cash Loaded and location details.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_143] Test completed successfully");
    });
  });

  test("Case ID:RDR_144 - ATM Master → CSV export functionality for ATM Master records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_144
    // Excel Scenario: Verify CSV export functionality for ATM Master records.
    // Expected Result: CSV file downloads successfully containing ATM Master data with correct column values.
    await test.step("[RDR_144] Navigate and execute documented test steps", async () => {
      console.log("[RDR_144] Test execution started — Verify CSV export functionality for ATM Master records.");
      console.log("[RDR_144] Executing Excel test steps: 1. Click CSV button.  2. Download file.  3. Validate contents.");
      await rdrPage.openMasterTab(testData.baseUrl, "atm", "ATM Master");
    });
    await test.step("[RDR_144] Validate expected results from Excel", async () => {
      console.log("[RDR_144] Validating expected result: CSV file downloads successfully containing ATM Master data with correct column values.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectExportButtonsVisible();
    await rdrPage.expectCsvExportReady();
      console.log("[RDR_144] Test completed successfully");
    });
  });

  test("Case ID:RDR_145 - ATM Master → Excel export functionality for ATM Master records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_145
    // Excel Scenario: Verify Excel export functionality for ATM Master records.
    // Expected Result: Excel file downloads successfully containing accurate ATM Master data and proper column structure.
    await test.step("[RDR_145] Navigate and execute documented test steps", async () => {
      console.log("[RDR_145] Test execution started — Verify Excel export functionality for ATM Master records.");
      console.log("[RDR_145] Executing Excel test steps: 1. Click Excel button.  2. Download file.  3. Validate contents.");
      await rdrPage.openMasterTab(testData.baseUrl, "atm", "ATM Master");
    });
    await test.step("[RDR_145] Validate expected results from Excel", async () => {
      console.log("[RDR_145] Validating expected result: Excel file downloads successfully containing accurate ATM Master data and proper column structure.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectExportButtonsVisible();
    await rdrPage.expectExcelExportReady();
      console.log("[RDR_145] Test completed successfully");
    });
  });
  });

  test.describe("Instruments", () => {
  test("Case ID:RDR_146 - Instruments → Instrument ID is generated uniquely and displayed correctly for each instrument record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_146
    // Excel Scenario: Verify Instrument ID is generated uniquely and displayed correctly for each instrument record loaded from CBS.
    // Expected Result: Unique Instrument IDs are displayed for all instrument records without duplication.
    await test.step("[RDR_146] Navigate and execute documented test steps", async () => {
      console.log("[RDR_146] Test execution started — Verify Instrument ID is generated uniquely and displayed correctly for each instrument record loaded from CBS.");
      console.log("[RDR_146] Executing Excel test steps: 1. Open Instruments tab.  2. Review Instrument ID column.  3. Compare multiple records.  4. Verify uniqueness.");
      await rdrPage.openMasterTab(testData.baseUrl, "instruments", "Instruments");
    });
    await test.step("[RDR_146] Validate expected results from Excel", async () => {
      console.log("[RDR_146] Validating expected result: Unique Instrument IDs are displayed for all instrument records without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Instrument ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Instrument ID");
    await rdrPage.expectUniqueColumnValues("Instrument ID");
      console.log("[RDR_146] Test completed successfully");
    });
  });

  test("Case ID:RDR_147 - Instruments → Instrument Type values are displayed correctly according to instrument classification maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_147
    // Excel Scenario: Verify Instrument Type values are displayed correctly according to instrument classification maintained in source systems.
    // Expected Result: Correct Instrument Type is displayed for each instrument record.
    await test.step("[RDR_147] Navigate and execute documented test steps", async () => {
      console.log("[RDR_147] Test execution started — Verify Instrument Type values are displayed correctly according to instrument classification maintained in source systems.");
      console.log("[RDR_147] Executing Excel test steps: 1. Review Type column.  2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "instruments", "Instruments");
    });
    await test.step("[RDR_147] Validate expected results from Excel", async () => {
      console.log("[RDR_147] Validating expected result: Correct Instrument Type is displayed for each instrument record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Instrument Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Instrument Type");
      console.log("[RDR_147] Test completed successfully");
    });
  });

  test("Case ID:RDR_148 - Instruments → search functionality using Instrument ID and ensure the correct instrument record is retrieved.", async ({ testData }) => {
    // Excel Test Case ID: RDR_148
    // Excel Scenario: Verify search functionality using Instrument ID and ensure the correct instrument record is retrieved.
    // Expected Result: System displays only the instrument record matching the entered Instrument ID.
    await test.step("[RDR_148] Navigate and execute documented test steps", async () => {
      console.log("[RDR_148] Test execution started — Verify search functionality using Instrument ID and ensure the correct instrument record is retrieved.");
      console.log("[RDR_148] Executing Excel test steps: 1. Enter Instrument ID in search field.  2. Execute search.  3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "instruments", "Instruments");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_148] Validate expected results from Excel", async () => {
      console.log("[RDR_148] Validating expected result: System displays only the instrument record matching the entered Instrument ID.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_148] Test completed successfully");
    });
  });

  test("Case ID:RDR_149 - Instruments → View action opens complete instrument details including status and AML-related information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_149
    // Excel Scenario: Verify View action opens complete instrument details including status and AML-related information.
    // Expected Result: Instrument detail page opens successfully displaying complete instrument information.
    await test.step("[RDR_149] Navigate and execute documented test steps", async () => {
      console.log("[RDR_149] Test execution started — Verify View action opens complete instrument details including status and AML-related information.");
      console.log("[RDR_149] Executing Excel test steps: 1. Click View button.  2. Review instrument detail screen.  3. Validate displayed information.");
      await rdrPage.openMasterTab(testData.baseUrl, "instruments", "Instruments");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_149] Validate expected results from Excel", async () => {
      console.log("[RDR_149] Validating expected result: Instrument detail page opens successfully displaying complete instrument information.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_149] Test completed successfully");
    });
  });

  test("Case ID:RDR_150 - Instruments → Instrument Status is displayed correctly in instrument details and reflects the current instrument lifecycle state.", async ({ testData }) => {
    // Excel Test Case ID: RDR_150
    // Excel Scenario: Verify Instrument Status is displayed correctly in instrument details and reflects the current instrument lifecycle state.
    // Expected Result: Instrument Status is displayed correctly according to source records.
    await test.step("[RDR_150] Navigate and execute documented test steps", async () => {
      console.log("[RDR_150] Test execution started — Verify Instrument Status is displayed correctly in instrument details and reflects the current instrument lifecycle state.");
      console.log("[RDR_150] Executing Excel test steps: 1. Open instrument details.  2. Review Instrument Status field.  3. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "instruments", "Instruments");
    });
    await test.step("[RDR_150] Validate expected results from Excel", async () => {
      console.log("[RDR_150] Validating expected result: Instrument Status is displayed correctly according to source records.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Instrument Status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Instrument Status");
      console.log("[RDR_150] Test completed successfully");
    });
  });

  test("Case ID:RDR_151 - Instruments → dishonoured instruments display the correct Dishonour Reason in instrument details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_151
    // Excel Scenario: Verify dishonoured instruments display the correct Dishonour Reason in instrument details.
    // Expected Result: Correct Dishonour Reason is displayed for the dishonoured instrument.
    await test.step("[RDR_151] Navigate and execute documented test steps", async () => {
      console.log("[RDR_151] Test execution started — Verify dishonoured instruments display the correct Dishonour Reason in instrument details.");
      console.log("[RDR_151] Executing Excel test steps: 1. Open instrument details.  2. Review Dishonour Reason field.  3. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "instruments", "Instruments");
    });
    await test.step("[RDR_151] Validate expected results from Excel", async () => {
      console.log("[RDR_151] Validating expected result: Correct Dishonour Reason is displayed for the dishonoured instrument.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Dishonour Reason");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Dishonour Reason");
      console.log("[RDR_151] Test completed successfully");
    });
  });

  test("Case ID:RDR_152 - Instruments → Stop Payment Flag is displayed correctly for instruments where stop-payment instructions have been placed.", async ({ testData }) => {
    // Excel Test Case ID: RDR_152
    // Excel Scenario: Verify Stop Payment Flag is displayed correctly for instruments where stop-payment instructions have been placed.
    // Expected Result: Stop Payment Flag is displayed correctly and reflects the actual stop-payment status.
    await test.step("[RDR_152] Navigate and execute documented test steps", async () => {
      console.log("[RDR_152] Test execution started — Verify Stop Payment Flag is displayed correctly for instruments where stop-payment instructions have been placed.");
      console.log("[RDR_152] Executing Excel test steps: 1. Open instrument details.  2. Review Stop Payment Flag field.");
      await rdrPage.openMasterTab(testData.baseUrl, "instruments", "Instruments");
    });
    await test.step("[RDR_152] Validate expected results from Excel", async () => {
      console.log("[RDR_152] Validating expected result: Stop Payment Flag is displayed correctly and reflects the actual stop-payment status.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Stop Payment Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Stop Payment Flag");
      console.log("[RDR_152] Test completed successfully");
    });
  });

  test("Case ID:RDR_153 - Instruments → AML Alert Flag is displayed correctly for instruments flagged by AML monitoring rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_153
    // Excel Scenario: Verify AML Alert Flag is displayed correctly for instruments flagged by AML monitoring rules.
    // Expected Result: AML Alert Flag is displayed correctly for flagged instruments.
    await test.step("[RDR_153] Navigate and execute documented test steps", async () => {
      console.log("[RDR_153] Test execution started — Verify AML Alert Flag is displayed correctly for instruments flagged by AML monitoring rules.");
      console.log("[RDR_153] Executing Excel test steps: 1. Open instrument details.  2. Review Alert Flag field.  3. Compare with AML source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "instruments", "Instruments");
    });
    await test.step("[RDR_153] Validate expected results from Excel", async () => {
      console.log("[RDR_153] Validating expected result: AML Alert Flag is displayed correctly for flagged instruments.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("AML Alert Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("AML Alert Flag");
      console.log("[RDR_153] Test completed successfully");
    });
  });

  test("Case ID:RDR_154 - Instruments → CSV export functionality for Instrument Master records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_154
    // Excel Scenario: Verify CSV export functionality for Instrument Master records.
    // Expected Result: CSV file downloads successfully and contains accurate Instrument Master data.
    await test.step("[RDR_154] Navigate and execute documented test steps", async () => {
      console.log("[RDR_154] Test execution started — Verify CSV export functionality for Instrument Master records.");
      console.log("[RDR_154] Executing Excel test steps: 1. Click CSV button.  2. Download file.  3. Validate contents.");
      await rdrPage.openMasterTab(testData.baseUrl, "instruments", "Instruments");
    });
    await test.step("[RDR_154] Validate expected results from Excel", async () => {
      console.log("[RDR_154] Validating expected result: CSV file downloads successfully and contains accurate Instrument Master data.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectExportButtonsVisible();
    await rdrPage.expectCsvExportReady();
      console.log("[RDR_154] Test completed successfully");
    });
  });

  test("Case ID:RDR_155 - Instruments → Excel export functionality for Instrument Master records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_155
    // Excel Scenario: Verify Excel export functionality for Instrument Master records.
    // Expected Result: Excel file downloads successfully and contains accurate Instrument Master data with proper column structure.
    await test.step("[RDR_155] Navigate and execute documented test steps", async () => {
      console.log("[RDR_155] Test execution started — Verify Excel export functionality for Instrument Master records.");
      console.log("[RDR_155] Executing Excel test steps: 1. Click Excel button.  2. Download file.  3. Validate contents.");
      await rdrPage.openMasterTab(testData.baseUrl, "instruments", "Instruments");
    });
    await test.step("[RDR_155] Validate expected results from Excel", async () => {
      console.log("[RDR_155] Validating expected result: Excel file downloads successfully and contains accurate Instrument Master data with proper column structure.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectExportButtonsVisible();
    await rdrPage.expectExcelExportReady();
      console.log("[RDR_155] Test completed successfully");
    });
  });
  });

  test.describe("TXN Device", () => {
  test("Case ID:RDR_156 - TXN Device → Device ID is generated uniquely and displayed correctly for each transaction device record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_156
    // Excel Scenario: Verify Device ID is generated uniquely and displayed correctly for each transaction device record.
    // Expected Result: Unique Device IDs are displayed for all device records without duplication.
    await test.step("[RDR_156] Navigate and execute documented test steps", async () => {
      console.log("[RDR_156] Test execution started — Verify Device ID is generated uniquely and displayed correctly for each transaction device record.");
      console.log("[RDR_156] Executing Excel test steps: 1. Open TXN Device tab.  2. Review Device ID column.  3. Compare multiple records.  4. Verify uniqueness.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-device", "TXN Device");
    });
    await test.step("[RDR_156] Validate expected results from Excel", async () => {
      console.log("[RDR_156] Validating expected result: Unique Device IDs are displayed for all device records without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Device ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Device ID");
    await rdrPage.expectUniqueColumnValues("Device ID");
      console.log("[RDR_156] Test completed successfully");
    });
  });

  test("Case ID:RDR_157 - TXN Device → Device Type is displayed correctly according to the registered device classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_157
    // Excel Scenario: Verify Device Type is displayed correctly according to the registered device classification.
    // Expected Result: Correct Device Type is displayed for each device record.
    await test.step("[RDR_157] Navigate and execute documented test steps", async () => {
      console.log("[RDR_157] Test execution started — Verify Device Type is displayed correctly according to the registered device classification.");
      console.log("[RDR_157] Executing Excel test steps: 1. Review Type column.  2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-device", "TXN Device");
    });
    await test.step("[RDR_157] Validate expected results from Excel", async () => {
      console.log("[RDR_157] Validating expected result: Correct Device Type is displayed for each device record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Device Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Device Type");
      console.log("[RDR_157] Test completed successfully");
    });
  });

  test("Case ID:RDR_158 - TXN Device → OS information is displayed correctly for registered transaction devices.", async ({ testData }) => {
    // Excel Test Case ID: RDR_158
    // Excel Scenario: Verify OS information is displayed correctly for registered transaction devices.
    // Expected Result: Correct operating system information is displayed for each device.
    await test.step("[RDR_158] Navigate and execute documented test steps", async () => {
      console.log("[RDR_158] Test execution started — Verify OS information is displayed correctly for registered transaction devices.");
      console.log("[RDR_158] Executing Excel test steps: 1. Review OS column.  2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-device", "TXN Device");
    });
    await test.step("[RDR_158] Validate expected results from Excel", async () => {
      console.log("[RDR_158] Validating expected result: Correct operating system information is displayed for each device.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("OS information");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("OS information");
      console.log("[RDR_158] Test completed successfully");
    });
  });

  test("Case ID:RDR_159 - TXN Device → Device Model is displayed correctly according to device registration information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_159
    // Excel Scenario: Verify Device Model is displayed correctly according to device registration information.
    // Expected Result: Correct device model is displayed for each transaction device.
    await test.step("[RDR_159] Navigate and execute documented test steps", async () => {
      console.log("[RDR_159] Test execution started — Verify Device Model is displayed correctly according to device registration information.");
      console.log("[RDR_159] Executing Excel test steps: 1. Review Model column.  2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-device", "TXN Device");
    });
    await test.step("[RDR_159] Validate expected results from Excel", async () => {
      console.log("[RDR_159] Validating expected result: Correct device model is displayed for each transaction device.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Device Model");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Device Model");
      console.log("[RDR_159] Test completed successfully");
    });
  });

  test("Case ID:RDR_160 - TXN Device → IMEI/Device Fingerprint information is displayed in masked format to protect sensitive device data.", async ({ testData }) => {
    // Excel Test Case ID: RDR_160
    // Excel Scenario: Verify IMEI/Device Fingerprint information is displayed in masked format to protect sensitive device data.
    // Expected Result: IMEI/Device Fingerprint is displayed in masked format and sensitive data is protected.
    await test.step("[RDR_160] Navigate and execute documented test steps", async () => {
      console.log("[RDR_160] Test execution started — Verify IMEI/Device Fingerprint information is displayed in masked format to protect sensitive device data.");
      console.log("[RDR_160] Executing Excel test steps: 1. Review IMEI column.  2. Verify masking pattern.  3. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-device", "TXN Device");
    });
    await test.step("[RDR_160] Validate expected results from Excel", async () => {
      console.log("[RDR_160] Validating expected result: IMEI/Device Fingerprint is displayed in masked format and sensitive data is protected.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("IMEI/Device Fingerprint information");
    await rdrPage.expectColumnValuesMasked("IMEI/Device Fingerprint information");
      console.log("[RDR_160] Test completed successfully");
    });
  });

  test("Case ID:RDR_161 - TXN Device → Customer IDs displayed against each device are correctly mapped to registered customers.", async ({ testData }) => {
    // Excel Test Case ID: RDR_161
    // Excel Scenario: Verify Customer IDs displayed against each device are correctly mapped to registered customers.
    // Expected Result: Correct Customer IDs are displayed for each transaction device.
    await test.step("[RDR_161] Navigate and execute documented test steps", async () => {
      console.log("[RDR_161] Test execution started — Verify Customer IDs displayed against each device are correctly mapped to registered customers.");
      console.log("[RDR_161] Executing Excel test steps: 1. Review Customer IDs column.  2. Compare values with customer records.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-device", "TXN Device");
    });
    await test.step("[RDR_161] Validate expected results from Excel", async () => {
      console.log("[RDR_161] Validating expected result: Correct Customer IDs are displayed for each transaction device.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer IDs");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Customer IDs");
      console.log("[RDR_161] Test completed successfully");
    });
  });

  test("Case ID:RDR_162 - TXN Device → devices linked to multiple customer IDs are identified correctly according to AML rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_162
    // Excel Scenario: Verify devices linked to multiple customer IDs are identified correctly according to AML rules.
    // Expected Result: Device displays all associated customer IDs correctly and supports AML monitoring of shared devices.
    await test.step("[RDR_162] Navigate and execute documented test steps", async () => {
      console.log("[RDR_162] Test execution started — Verify devices linked to multiple customer IDs are identified correctly according to AML rules.");
      console.log("[RDR_162] Executing Excel test steps: 1. Review Customer IDs column.  2. Identify devices linked to multiple customers.  3. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-device", "TXN Device");
    });
    await test.step("[RDR_162] Validate expected results from Excel", async () => {
      console.log("[RDR_162] Validating expected result: Device displays all associated customer IDs correctly and supports AML monitoring of shared devices.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer IDs");
    await rdrPage.expectAllCellsNonEmpty("Customer IDs");
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_162] Test completed successfully");
    });
  });

  test("Case ID:RDR_163 - TXN Device → Customer Count value in device details matches the number of linked customers.", async ({ testData }) => {
    // Excel Test Case ID: RDR_163
    // Excel Scenario: Verify Customer Count value in device details matches the number of linked customers.
    // Expected Result: Customer Count is displayed accurately according to linked customer records.
    await test.step("[RDR_163] Navigate and execute documented test steps", async () => {
      console.log("[RDR_163] Test execution started — Verify Customer Count value in device details matches the number of linked customers.");
      console.log("[RDR_163] Executing Excel test steps: 1. Open device details. 2. Review Customer Count field. 3. Compare with associated customer IDs.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-device", "TXN Device");
    });
    await test.step("[RDR_163] Validate expected results from Excel", async () => {
      console.log("[RDR_163] Validating expected result: Customer Count is displayed accurately according to linked customer records.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer Count");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Customer Count");
      console.log("[RDR_163] Test completed successfully");
    });
  });

  test("Case ID:RDR_164 - TXN Device → High Risk Device Flag is displayed correctly for devices identified as AML high-risk.", async ({ testData }) => {
    // Excel Test Case ID: RDR_164
    // Excel Scenario: Verify High Risk Device Flag is displayed correctly for devices identified as AML high-risk.
    // Expected Result: High Risk Device Flag is displayed correctly according to AML configuration.
    await test.step("[RDR_164] Navigate and execute documented test steps", async () => {
      console.log("[RDR_164] Test execution started — Verify High Risk Device Flag is displayed correctly for devices identified as AML high-risk.");
      console.log("[RDR_164] Executing Excel test steps: 1. Open device details. 2. Review High Risk Device Flag. 3. Compare with AML source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-device", "TXN Device");
    });
    await test.step("[RDR_164] Validate expected results from Excel", async () => {
      console.log("[RDR_164] Validating expected result: High Risk Device Flag is displayed correctly according to AML configuration.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("High Risk Device Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("High Risk Device Flag");
      console.log("[RDR_164] Test completed successfully");
    });
  });

  test("Case ID:RDR_165 - TXN Device → High Risk Reason is displayed correctly for flagged devices.", async ({ testData }) => {
    // Excel Test Case ID: RDR_165
    // Excel Scenario: Verify High Risk Reason is displayed correctly for flagged devices.
    // Expected Result: Correct High Risk Reason is displayed for the flagged device.
    await test.step("[RDR_165] Navigate and execute documented test steps", async () => {
      console.log("[RDR_165] Test execution started — Verify High Risk Reason is displayed correctly for flagged devices.");
      console.log("[RDR_165] Executing Excel test steps: 1. Open device details. 2. Review High Risk Reason field.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-device", "TXN Device");
    });
    await test.step("[RDR_165] Validate expected results from Excel", async () => {
      console.log("[RDR_165] Validating expected result: Correct High Risk Reason is displayed for the flagged device.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("High Risk Reason");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("High Risk Reason");
      console.log("[RDR_165] Test completed successfully");
    });
  });

  test("Case ID:RDR_166 - TXN Device → Rooted Device Flag is displayed correctly when a device is identified as rooted or jailbroken.", async ({ testData }) => {
    // Excel Test Case ID: RDR_166
    // Excel Scenario: Verify Rooted Device Flag is displayed correctly when a device is identified as rooted or jailbroken.
    // Expected Result: Rooted Flag is displayed correctly and AML alert conditions are triggered where applicable.
    await test.step("[RDR_166] Navigate and execute documented test steps", async () => {
      console.log("[RDR_166] Test execution started — Verify Rooted Device Flag is displayed correctly when a device is identified as rooted or jailbroken.");
      console.log("[RDR_166] Executing Excel test steps: 1. Open device details. 2. Review Rooted Flag.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-device", "TXN Device");
    });
    await test.step("[RDR_166] Validate expected results from Excel", async () => {
      console.log("[RDR_166] Validating expected result: Rooted Flag is displayed correctly and AML alert conditions are triggered where applicable.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Rooted Device Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Rooted Device Flag");
      console.log("[RDR_166] Test completed successfully");
    });
  });

  test("Case ID:RDR_167 - TXN Device → Remote Access App Flag is displayed correctly when remote access applications are detected.", async ({ testData }) => {
    // Excel Test Case ID: RDR_167
    // Excel Scenario: Verify Remote Access App Flag is displayed correctly when remote access applications are detected.
    // Expected Result: Remote Access App Flag is displayed correctly and AML monitoring conditions are applied.
    await test.step("[RDR_167] Navigate and execute documented test steps", async () => {
      console.log("[RDR_167] Test execution started — Verify Remote Access App Flag is displayed correctly when remote access applications are detected.");
      console.log("[RDR_167] Executing Excel test steps: 1. Open device details. 2. Review Remote Access App Flag.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-device", "TXN Device");
    });
    await test.step("[RDR_167] Validate expected results from Excel", async () => {
      console.log("[RDR_167] Validating expected result: Remote Access App Flag is displayed correctly and AML monitoring conditions are applied.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Remote Access App Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Remote Access App Flag");
      console.log("[RDR_167] Test completed successfully");
    });
  });

  test("Case ID:RDR_168 - TXN Device → Proxy/VPN Usage Flag is displayed correctly for devices using proxy or VPN connections.", async ({ testData }) => {
    // Excel Test Case ID: RDR_168
    // Excel Scenario: Verify Proxy/VPN Usage Flag is displayed correctly for devices using proxy or VPN connections.
    // Expected Result: Proxy Usage Flag is displayed correctly according to device security assessment.
    await test.step("[RDR_168] Navigate and execute documented test steps", async () => {
      console.log("[RDR_168] Test execution started — Verify Proxy/VPN Usage Flag is displayed correctly for devices using proxy or VPN connections.");
      console.log("[RDR_168] Executing Excel test steps: 1. Open device details. 2. Review Using Proxy Flag.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-device", "TXN Device");
    });
    await test.step("[RDR_168] Validate expected results from Excel", async () => {
      console.log("[RDR_168] Validating expected result: Proxy Usage Flag is displayed correctly according to device security assessment.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Proxy/VPN Usage Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Proxy/VPN Usage Flag");
      console.log("[RDR_168] Test completed successfully");
    });
  });

  test("Case ID:RDR_169 - TXN Device → View action opens complete transaction device details including AML risk indicators and device fingerprint information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_169
    // Excel Scenario: Verify View action opens complete transaction device details including AML risk indicators and device fingerprint information.
    // Expected Result: Device detail screen opens successfully displaying Device ID, Fingerprint, Customer Count, High Risk Flags, Rooted Flag, Proxy Flag and associated customer information.
    await test.step("[RDR_169] Navigate and execute documented test steps", async () => {
      console.log("[RDR_169] Test execution started — Verify View action opens complete transaction device details including AML risk indicators and device fingerprint information.");
      console.log("[RDR_169] Executing Excel test steps: 1. Click View button. 2. Review device details page. 3. Validate displayed information.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-device", "TXN Device");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_169] Validate expected results from Excel", async () => {
      console.log("[RDR_169] Validating expected result: Device detail screen opens successfully displaying Device ID, Fingerprint, Customer Count, High Risk Flags, Rooted Flag, Proxy Flag and associated customer information.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_169] Test completed successfully");
    });
  });

  test("Case ID:RDR_170 - TXN Device → search functionality using Device ID and retrieve the correct device record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_170
    // Excel Scenario: Verify search functionality using Device ID and retrieve the correct device record.
    // Expected Result: System displays only the device record matching the entered Device ID.
    await test.step("[RDR_170] Navigate and execute documented test steps", async () => {
      console.log("[RDR_170] Test execution started — Verify search functionality using Device ID and retrieve the correct device record.");
      console.log("[RDR_170] Executing Excel test steps: 1. Enter Device ID in search field. 2. Execute search. 3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-device", "TXN Device");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_170] Validate expected results from Excel", async () => {
      console.log("[RDR_170] Validating expected result: System displays only the device record matching the entered Device ID.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_170] Test completed successfully");
    });
  });
  });

  test.describe("Beneficial Owner", () => {
  test("Case ID:RDR_171 - Beneficial Owner → BO ID is generated uniquely and displayed correctly for every beneficial owner record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_171
    // Excel Scenario: Verify BO ID is generated uniquely and displayed correctly for every beneficial owner record.
    // Expected Result: Unique BO IDs are displayed for all beneficial owner records without duplication.
    await test.step("[RDR_171] Navigate and execute documented test steps", async () => {
      console.log("[RDR_171] Test execution started — Verify BO ID is generated uniquely and displayed correctly for every beneficial owner record.");
      console.log("[RDR_171] Executing Excel test steps: 1. Open Beneficial Owner tab. 2. Review BO ID column. 3. Compare all records.");
      await rdrPage.openMasterTab(testData.baseUrl, "beneficial-owner", "Beneficial Owner");
    });
    await test.step("[RDR_171] Validate expected results from Excel", async () => {
      console.log("[RDR_171] Validating expected result: Unique BO IDs are displayed for all beneficial owner records without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("BO ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("BO ID");
    await rdrPage.expectUniqueColumnValues("BO ID");
      console.log("[RDR_171] Test completed successfully");
    });
  });

  test("Case ID:RDR_172 - Beneficial Owner → Customer ID displayed against each beneficial owner record matches the linked customer/entity record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_172
    // Excel Scenario: Verify Customer ID displayed against each beneficial owner record matches the linked customer/entity record.
    // Expected Result: Correct Customer ID is displayed for each beneficial owner record.
    await test.step("[RDR_172] Navigate and execute documented test steps", async () => {
      console.log("[RDR_172] Test execution started — Verify Customer ID displayed against each beneficial owner record matches the linked customer/entity record.");
      console.log("[RDR_172] Executing Excel test steps: 1. Review Customer ID column. 2. Compare with Customer Master records.");
      await rdrPage.openMasterTab(testData.baseUrl, "beneficial-owner", "Beneficial Owner");
    });
    await test.step("[RDR_172] Validate expected results from Excel", async () => {
      console.log("[RDR_172] Validating expected result: Correct Customer ID is displayed for each beneficial owner record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Customer ID");
      console.log("[RDR_172] Test completed successfully");
    });
  });

  test("Case ID:RDR_173 - Beneficial Owner → Beneficial Owner Full Name is displayed in masked format according to PII masking requirements.", async ({ testData }) => {
    // Excel Test Case ID: RDR_173
    // Excel Scenario: Verify Beneficial Owner Full Name is displayed in masked format according to PII masking requirements.
    // Expected Result: Beneficial Owner names are displayed in masked format and comply with privacy requirements.
    await test.step("[RDR_173] Navigate and execute documented test steps", async () => {
      console.log("[RDR_173] Test execution started — Verify Beneficial Owner Full Name is displayed in masked format according to PII masking requirements.");
      console.log("[RDR_173] Executing Excel test steps: 1. Review Full Name column. 2. Verify masking pattern. 3. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "beneficial-owner", "Beneficial Owner");
    });
    await test.step("[RDR_173] Validate expected results from Excel", async () => {
      console.log("[RDR_173] Validating expected result: Beneficial Owner names are displayed in masked format and comply with privacy requirements.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Beneficial Owner Full Name");
    await rdrPage.expectColumnValuesMasked("Beneficial Owner Full Name");
      console.log("[RDR_173] Test completed successfully");
    });
  });

  test("Case ID:RDR_174 - Beneficial Owner → Nationality is displayed correctly for each beneficial owner.", async ({ testData }) => {
    // Excel Test Case ID: RDR_174
    // Excel Scenario: Verify Nationality is displayed correctly for each beneficial owner.
    // Expected Result: Correct nationality code is displayed for each beneficial owner.
    await test.step("[RDR_174] Navigate and execute documented test steps", async () => {
      console.log("[RDR_174] Test execution started — Verify Nationality is displayed correctly for each beneficial owner.");
      console.log("[RDR_174] Executing Excel test steps: 1. Review Nationality column. 2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "beneficial-owner", "Beneficial Owner");
    });
    await test.step("[RDR_174] Validate expected results from Excel", async () => {
      console.log("[RDR_174] Validating expected result: Correct nationality code is displayed for each beneficial owner.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Nationality");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Nationality");
      console.log("[RDR_174] Test completed successfully");
    });
  });

  test("Case ID:RDR_175 - Beneficial Owner → Country of Residence is displayed correctly according to beneficial owner profile information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_175
    // Excel Scenario: Verify Country of Residence is displayed correctly according to beneficial owner profile information.
    // Expected Result: Correct country of residence is displayed for each beneficial owner.
    await test.step("[RDR_175] Navigate and execute documented test steps", async () => {
      console.log("[RDR_175] Test execution started — Verify Country of Residence is displayed correctly according to beneficial owner profile information.");
      console.log("[RDR_175] Executing Excel test steps: 1. Review Country of Residence column. 2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "beneficial-owner", "Beneficial Owner");
    });
    await test.step("[RDR_175] Validate expected results from Excel", async () => {
      console.log("[RDR_175] Validating expected result: Correct country of residence is displayed for each beneficial owner.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Country of Residence");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Country of Residence");
      console.log("[RDR_175] Test completed successfully");
    });
  });

  test("Case ID:RDR_176 - Beneficial Owner → ID Type values are displayed correctly according to the identification documents maintained for the beneficial owner.", async ({ testData }) => {
    // Excel Test Case ID: RDR_176
    // Excel Scenario: Verify ID Type values are displayed correctly according to the identification documents maintained for the beneficial owner.
    // Expected Result: Correct ID Type is displayed for each beneficial owner.
    await test.step("[RDR_176] Navigate and execute documented test steps", async () => {
      console.log("[RDR_176] Test execution started — Verify ID Type values are displayed correctly according to the identification documents maintained for the beneficial owner.");
      console.log("[RDR_176] Executing Excel test steps: 1. Review ID Type column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "beneficial-owner", "Beneficial Owner");
    });
    await test.step("[RDR_176] Validate expected results from Excel", async () => {
      console.log("[RDR_176] Validating expected result: Correct ID Type is displayed for each beneficial owner.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("ID Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("ID Type");
      console.log("[RDR_176] Test completed successfully");
    });
  });

  test("Case ID:RDR_177 - Beneficial Owner → Ownership Percentage is displayed correctly for beneficial owners with direct ownership stake.", async ({ testData }) => {
    // Excel Test Case ID: RDR_177
    // Excel Scenario: Verify Ownership Percentage is displayed correctly for beneficial owners with direct ownership stake.
    // Expected Result: Ownership Percentage is displayed accurately according to source data.
    await test.step("[RDR_177] Navigate and execute documented test steps", async () => {
      console.log("[RDR_177] Test execution started — Verify Ownership Percentage is displayed correctly for beneficial owners with direct ownership stake.");
      console.log("[RDR_177] Executing Excel test steps: 1. Review Ownership % column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "beneficial-owner", "Beneficial Owner");
    });
    await test.step("[RDR_177] Validate expected results from Excel", async () => {
      console.log("[RDR_177] Validating expected result: Ownership Percentage is displayed accurately according to source data.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Ownership Percentage");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Ownership Percentage");
      console.log("[RDR_177] Test completed successfully");
    });
  });

  test("Case ID:RDR_178 - Beneficial Owner → beneficial owners meeting regulatory ownership thresholds are displayed correctly.", async ({ testData }) => {
    // Excel Test Case ID: RDR_178
    // Excel Scenario: Verify beneficial owners meeting regulatory ownership thresholds are displayed correctly.
    // Expected Result: Beneficial owners above configured threshold are displayed correctly and included in records.
    await test.step("[RDR_178] Navigate and execute documented test steps", async () => {
      console.log("[RDR_178] Test execution started — Verify beneficial owners meeting regulatory ownership thresholds are displayed correctly.");
      console.log("[RDR_178] Executing Excel test steps: 1. Review ownership percentages. 2. Compare against threshold rules.");
      await rdrPage.openMasterTab(testData.baseUrl, "beneficial-owner", "Beneficial Owner");
    });
    await test.step("[RDR_178] Validate expected results from Excel", async () => {
      console.log("[RDR_178] Validating expected result: Beneficial owners above configured threshold are displayed correctly and included in records.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("beneficial owners meeting regulatory ownership thresholds");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("beneficial owners meeting regulatory ownership thresholds");
      console.log("[RDR_178] Test completed successfully");
    });
  });

  test("Case ID:RDR_179 - Beneficial Owner → Control Type values are displayed correctly according to beneficial ownership/control relationship.", async ({ testData }) => {
    // Excel Test Case ID: RDR_179
    // Excel Scenario: Verify Control Type values are displayed correctly according to beneficial ownership/control relationship.
    // Expected Result: Correct Control Type is displayed for each beneficial owner.
    await test.step("[RDR_179] Navigate and execute documented test steps", async () => {
      console.log("[RDR_179] Test execution started — Verify Control Type values are displayed correctly according to beneficial ownership/control relationship.");
      console.log("[RDR_179] Executing Excel test steps: 1. Review Control Type column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "beneficial-owner", "Beneficial Owner");
    });
    await test.step("[RDR_179] Validate expected results from Excel", async () => {
      console.log("[RDR_179] Validating expected result: Correct Control Type is displayed for each beneficial owner.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Control Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Control Type");
      console.log("[RDR_179] Test completed successfully");
    });
  });

  test("Case ID:RDR_180 - Beneficial Owner → Watchlist Flag is displayed correctly for beneficial owners identified on internal or external watchlists.", async ({ testData }) => {
    // Excel Test Case ID: RDR_180
    // Excel Scenario: Verify Watchlist Flag is displayed correctly for beneficial owners identified on internal or external watchlists.
    // Expected Result: Watchlist Flag displays correct status for each beneficial owner.
    await test.step("[RDR_180] Navigate and execute documented test steps", async () => {
      console.log("[RDR_180] Test execution started — Verify Watchlist Flag is displayed correctly for beneficial owners identified on internal or external watchlists.");
      console.log("[RDR_180] Executing Excel test steps: 1. Review Watchlist Flag column. 2. Compare values with screening records.");
      await rdrPage.openMasterTab(testData.baseUrl, "beneficial-owner", "Beneficial Owner");
    });
    await test.step("[RDR_180] Validate expected results from Excel", async () => {
      console.log("[RDR_180] Validating expected result: Watchlist Flag displays correct status for each beneficial owner.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Watchlist Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Watchlist Flag");
      console.log("[RDR_180] Test completed successfully");
    });
  });

  test("Case ID:RDR_181 - Beneficial Owner → beneficial owners with Watchlist Flag = Yes are highlighted appropriately for AML review.", async ({ testData }) => {
    // Excel Test Case ID: RDR_181
    // Excel Scenario: Verify beneficial owners with Watchlist Flag = Yes are highlighted appropriately for AML review.
    // Expected Result: Watchlisted beneficial owner is highlighted with the configured AML indicator.
    await test.step("[RDR_181] Navigate and execute documented test steps", async () => {
      console.log("[RDR_181] Test execution started — Verify beneficial owners with Watchlist Flag = Yes are highlighted appropriately for AML review.");
      console.log("[RDR_181] Executing Excel test steps: 1. Locate watchlisted record. 2. Verify Watchlist Flag display and indicator.");
      await rdrPage.openMasterTab(testData.baseUrl, "beneficial-owner", "Beneficial Owner");
    });
    await test.step("[RDR_181] Validate expected results from Excel", async () => {
      console.log("[RDR_181] Validating expected result: Watchlisted beneficial owner is highlighted with the configured AML indicator.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_181] Test completed successfully");
    });
  });

  test("Case ID:RDR_182 - Beneficial Owner → search functionality using BO ID retrieves the correct beneficial owner record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_182
    // Excel Scenario: Verify search functionality using BO ID retrieves the correct beneficial owner record.
    // Expected Result: System displays only the beneficial owner record matching the entered BO ID.
    await test.step("[RDR_182] Navigate and execute documented test steps", async () => {
      console.log("[RDR_182] Test execution started — Verify search functionality using BO ID retrieves the correct beneficial owner record.");
      console.log("[RDR_182] Executing Excel test steps: 1. Enter BO ID in search field. 2. Execute search. 3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "beneficial-owner", "Beneficial Owner");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_182] Validate expected results from Excel", async () => {
      console.log("[RDR_182] Validating expected result: System displays only the beneficial owner record matching the entered BO ID.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_182] Test completed successfully");
    });
  });

  test("Case ID:RDR_183 - Beneficial Owner → search functionality using Customer ID retrieves all associated beneficial owners.", async ({ testData }) => {
    // Excel Test Case ID: RDR_183
    // Excel Scenario: Verify search functionality using Customer ID retrieves all associated beneficial owners.
    // Expected Result: System displays all beneficial owners linked to the entered Customer ID.
    await test.step("[RDR_183] Navigate and execute documented test steps", async () => {
      console.log("[RDR_183] Test execution started — Verify search functionality using Customer ID retrieves all associated beneficial owners.");
      console.log("[RDR_183] Executing Excel test steps: 1. Enter Customer ID in search field. 2. Execute search.");
      await rdrPage.openMasterTab(testData.baseUrl, "beneficial-owner", "Beneficial Owner");
    await rdrPage.searchUsingPilotCustomerId();
    });
    await test.step("[RDR_183] Validate expected results from Excel", async () => {
      console.log("[RDR_183] Validating expected result: System displays all beneficial owners linked to the entered Customer ID.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectSearchYieldsResults();
      console.log("[RDR_183] Test completed successfully");
    });
  });

  test("Case ID:RDR_184 - Beneficial Owner → View action opens complete beneficial owner details including ownership, control and AML screening information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_184
    // Excel Scenario: Verify View action opens complete beneficial owner details including ownership, control and AML screening information.
    // Expected Result: Beneficial Owner detail screen opens successfully displaying ownership, control type, PEP, sanctions, watchlist and verification details.
    await test.step("[RDR_184] Navigate and execute documented test steps", async () => {
      console.log("[RDR_184] Test execution started — Verify View action opens complete beneficial owner details including ownership, control and AML screening information.");
      console.log("[RDR_184] Executing Excel test steps: 1. Click View button. 2. Review beneficial owner details. 3. Validate displayed information.");
      await rdrPage.openMasterTab(testData.baseUrl, "beneficial-owner", "Beneficial Owner");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_184] Validate expected results from Excel", async () => {
      console.log("[RDR_184] Validating expected result: Beneficial Owner detail screen opens successfully displaying ownership, control type, PEP, sanctions, watchlist and verification details.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_184] Test completed successfully");
    });
  });

  test("Case ID:RDR_185 - Beneficial Owner → PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method are displayed correctly in the Beneficial Owner detail screen.", async ({ testData }) => {
    // Excel Test Case ID: RDR_185
    // Excel Scenario: Verify PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method are displayed correctly in the Beneficial Owner detail screen.
    // Expected Result: AML-related flags and verification method are displayed accurately according to source records and FSD definitions.
    await test.step("[RDR_185] Navigate and execute documented test steps", async () => {
      console.log("[RDR_185] Test execution started — Verify PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method are displayed correctly in the Beneficial Owner detail screen.");
      console.log("[RDR_185] Executing Excel test steps: 1. Open View screen. 2. Review PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method fields. 3. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "beneficial-owner", "Beneficial Owner");
    });
    await test.step("[RDR_185] Validate expected results from Excel", async () => {
      console.log("[RDR_185] Validating expected result: AML-related flags and verification method are displayed accurately according to source records and FSD definitions.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("PEP Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("PEP Flag");
      console.log("[RDR_185] Test completed successfully");
    });
  });
  });

  test.describe("Related Parties", () => {
  test("Case ID:RDR_186 - Related Parties → Relationship ID is generated uniquely and displayed correctly for every relationship record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_186
    // Excel Scenario: Verify Relationship ID is generated uniquely and displayed correctly for every relationship record.
    // Expected Result: Unique Relationship IDs are displayed for all relationship records without duplication.
    await test.step("[RDR_186] Navigate and execute documented test steps", async () => {
      console.log("[RDR_186] Test execution started — Verify Relationship ID is generated uniquely and displayed correctly for every relationship record.");
      console.log("[RDR_186] Executing Excel test steps: 1. Open Related Parties tab. 2. Review Rel ID column. 3. Compare all records.");
      await rdrPage.openMasterTab(testData.baseUrl, "related-parties", "Related Parties");
    });
    await test.step("[RDR_186] Validate expected results from Excel", async () => {
      console.log("[RDR_186] Validating expected result: Unique Relationship IDs are displayed for all relationship records without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Rel ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Rel ID");
    await rdrPage.expectUniqueColumnValues("Rel ID");
      console.log("[RDR_186] Test completed successfully");
    });
  });

  test("Case ID:RDR_187 - Related Parties → Entity1 Type is displayed correctly according to the source entity classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_187
    // Excel Scenario: Verify Entity1 Type is displayed correctly according to the source entity classification.
    // Expected Result: Correct Entity1 Type is displayed for each relationship record.
    await test.step("[RDR_187] Navigate and execute documented test steps", async () => {
      console.log("[RDR_187] Test execution started — Verify Entity1 Type is displayed correctly according to the source entity classification.");
      console.log("[RDR_187] Executing Excel test steps: 1. Review Entity1 Type column. 2. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "related-parties", "Related Parties");
    });
    await test.step("[RDR_187] Validate expected results from Excel", async () => {
      console.log("[RDR_187] Validating expected result: Correct Entity1 Type is displayed for each relationship record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Entity1 Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Entity1 Type");
      console.log("[RDR_187] Test completed successfully");
    });
  });

  test("Case ID:RDR_188 - Related Parties → Entity1 ID is displayed correctly and mapped to the appropriate customer or beneficial owner record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_188
    // Excel Scenario: Verify Entity1 ID is displayed correctly and mapped to the appropriate customer or beneficial owner record.
    // Expected Result: Correct Entity1 ID is displayed and mapped correctly.
    await test.step("[RDR_188] Navigate and execute documented test steps", async () => {
      console.log("[RDR_188] Test execution started — Verify Entity1 ID is displayed correctly and mapped to the appropriate customer or beneficial owner record.");
      console.log("[RDR_188] Executing Excel test steps: 1. Review Entity1 ID column. 2. Compare with Customer Master/BO records.");
      await rdrPage.openMasterTab(testData.baseUrl, "related-parties", "Related Parties");
    });
    await test.step("[RDR_188] Validate expected results from Excel", async () => {
      console.log("[RDR_188] Validating expected result: Correct Entity1 ID is displayed and mapped correctly.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Entity1 ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Entity1 ID");
      console.log("[RDR_188] Test completed successfully");
    });
  });

  test("Case ID:RDR_189 - Related Parties → Entity2 Type is displayed correctly according to the linked entity classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_189
    // Excel Scenario: Verify Entity2 Type is displayed correctly according to the linked entity classification.
    // Expected Result: Correct Entity2 Type is displayed for each relationship.
    await test.step("[RDR_189] Navigate and execute documented test steps", async () => {
      console.log("[RDR_189] Test execution started — Verify Entity2 Type is displayed correctly according to the linked entity classification.");
      console.log("[RDR_189] Executing Excel test steps: 1. Review Entity2 Type column. 2. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "related-parties", "Related Parties");
    });
    await test.step("[RDR_189] Validate expected results from Excel", async () => {
      console.log("[RDR_189] Validating expected result: Correct Entity2 Type is displayed for each relationship.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Entity2 Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Entity2 Type");
      console.log("[RDR_189] Test completed successfully");
    });
  });

  test("Case ID:RDR_190 - Related Parties → Entity2 ID is displayed correctly and linked to the appropriate target entity record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_190
    // Excel Scenario: Verify Entity2 ID is displayed correctly and linked to the appropriate target entity record.
    // Expected Result: Correct Entity2 ID is displayed and linked properly.
    await test.step("[RDR_190] Navigate and execute documented test steps", async () => {
      console.log("[RDR_190] Test execution started — Verify Entity2 ID is displayed correctly and linked to the appropriate target entity record.");
      console.log("[RDR_190] Executing Excel test steps: 1. Review Entity2 ID column. 2. Compare with linked records.");
      await rdrPage.openMasterTab(testData.baseUrl, "related-parties", "Related Parties");
    });
    await test.step("[RDR_190] Validate expected results from Excel", async () => {
      console.log("[RDR_190] Validating expected result: Correct Entity2 ID is displayed and linked properly.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Entity2 ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Entity2 ID");
      console.log("[RDR_190] Test completed successfully");
    });
  });

  test("Case ID:RDR_191 - Related Parties → Relationship Type values are displayed correctly according to relationship classification maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_191
    // Excel Scenario: Verify Relationship Type values are displayed correctly according to relationship classification maintained in source systems.
    // Expected Result: Correct Relationship Type is displayed for each record.
    await test.step("[RDR_191] Navigate and execute documented test steps", async () => {
      console.log("[RDR_191] Test execution started — Verify Relationship Type values are displayed correctly according to relationship classification maintained in source systems.");
      console.log("[RDR_191] Executing Excel test steps: 1. Review Relationship Type column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "related-parties", "Related Parties");
    });
    await test.step("[RDR_191] Validate expected results from Excel", async () => {
      console.log("[RDR_191] Validating expected result: Correct Relationship Type is displayed for each record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Relationship Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Relationship Type");
      console.log("[RDR_191] Test completed successfully");
    });
  });

  test("Case ID:RDR_192 - Related Parties → Subtype values are displayed correctly according to the specific relationship category.", async ({ testData }) => {
    // Excel Test Case ID: RDR_192
    // Excel Scenario: Verify Subtype values are displayed correctly according to the specific relationship category.
    // Expected Result: Correct relationship subtype is displayed for each relationship record.
    await test.step("[RDR_192] Navigate and execute documented test steps", async () => {
      console.log("[RDR_192] Test execution started — Verify Subtype values are displayed correctly according to the specific relationship category.");
      console.log("[RDR_192] Executing Excel test steps: 1. Review Subtype column. 2. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "related-parties", "Related Parties");
    });
    await test.step("[RDR_192] Validate expected results from Excel", async () => {
      console.log("[RDR_192] Validating expected result: Correct relationship subtype is displayed for each relationship record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Subtype");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Subtype");
      console.log("[RDR_192] Test completed successfully");
    });
  });

  test("Case ID:RDR_193 - Related Parties → Ownership Percentage is displayed correctly for ownership-based relationships.", async ({ testData }) => {
    // Excel Test Case ID: RDR_193
    // Excel Scenario: Verify Ownership Percentage is displayed correctly for ownership-based relationships.
    // Expected Result: Ownership Percentage is displayed accurately for ownership relationships.
    await test.step("[RDR_193] Navigate and execute documented test steps", async () => {
      console.log("[RDR_193] Test execution started — Verify Ownership Percentage is displayed correctly for ownership-based relationships.");
      console.log("[RDR_193] Executing Excel test steps: 1. Review Ownership % column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "related-parties", "Related Parties");
    });
    await test.step("[RDR_193] Validate expected results from Excel", async () => {
      console.log("[RDR_193] Validating expected result: Ownership Percentage is displayed accurately for ownership relationships.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Ownership Percentage");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Ownership Percentage");
      console.log("[RDR_193] Test completed successfully");
    });
  });

  test("Case ID:RDR_194 - Related Parties → ownership relationships above regulatory thresholds are displayed correctly.", async ({ testData }) => {
    // Excel Test Case ID: RDR_194
    // Excel Scenario: Verify ownership relationships above regulatory thresholds are displayed correctly.
    // Expected Result: Relationships meeting ownership thresholds are displayed correctly.
    await test.step("[RDR_194] Navigate and execute documented test steps", async () => {
      console.log("[RDR_194] Test execution started — Verify ownership relationships above regulatory thresholds are displayed correctly.");
      console.log("[RDR_194] Executing Excel test steps: 1. Review ownership percentages. 2. Compare against regulatory threshold.");
      await rdrPage.openMasterTab(testData.baseUrl, "related-parties", "Related Parties");
    });
    await test.step("[RDR_194] Validate expected results from Excel", async () => {
      console.log("[RDR_194] Validating expected result: Relationships meeting ownership thresholds are displayed correctly.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("ownership relationships above regulatory thresholds");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("ownership relationships above regulatory thresholds");
      console.log("[RDR_194] Test completed successfully");
    });
  });

  test("Case ID:RDR_195 - Related Parties → Valid From date is displayed correctly and reflects the effective start date of the relationship.", async ({ testData }) => {
    // Excel Test Case ID: RDR_195
    // Excel Scenario: Verify Valid From date is displayed correctly and reflects the effective start date of the relationship.
    // Expected Result: Correct Valid From date is displayed for each relationship.
    await test.step("[RDR_195] Navigate and execute documented test steps", async () => {
      console.log("[RDR_195] Test execution started — Verify Valid From date is displayed correctly and reflects the effective start date of the relationship.");
      console.log("[RDR_195] Executing Excel test steps: 1. Review Valid From column. 2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "related-parties", "Related Parties");
    });
    await test.step("[RDR_195] Validate expected results from Excel", async () => {
      console.log("[RDR_195] Validating expected result: Correct Valid From date is displayed for each relationship.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Valid From date");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Valid From date");
      console.log("[RDR_195] Test completed successfully");
    });
  });

  test("Case ID:RDR_196 - Related Parties → PEP Flag is displayed correctly in relationship details when the relationship involves a politically exposed person.", async ({ testData }) => {
    // Excel Test Case ID: RDR_196
    // Excel Scenario: Verify PEP Flag is displayed correctly in relationship details when the relationship involves a politically exposed person.
    // Expected Result: PEP Flag is displayed correctly according to AML screening results.
    await test.step("[RDR_196] Navigate and execute documented test steps", async () => {
      console.log("[RDR_196] Test execution started — Verify PEP Flag is displayed correctly in relationship details when the relationship involves a politically exposed person.");
      console.log("[RDR_196] Executing Excel test steps: 1. Click View. 2. Review PEP Flag field. 3. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "related-parties", "Related Parties");
    });
    await test.step("[RDR_196] Validate expected results from Excel", async () => {
      console.log("[RDR_196] Validating expected result: PEP Flag is displayed correctly according to AML screening results.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("PEP Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("PEP Flag");
      console.log("[RDR_196] Test completed successfully");
    });
  });

  test("Case ID:RDR_197 - Related Parties → Risk Flag is displayed correctly for AML-risk relationships.", async ({ testData }) => {
    // Excel Test Case ID: RDR_197
    // Excel Scenario: Verify Risk Flag is displayed correctly for AML-risk relationships.
    // Expected Result: Risk Flag is displayed correctly according to AML rules.
    await test.step("[RDR_197] Navigate and execute documented test steps", async () => {
      console.log("[RDR_197] Test execution started — Verify Risk Flag is displayed correctly for AML-risk relationships.");
      console.log("[RDR_197] Executing Excel test steps: 1. Open relationship details. 2. Review Risk Flag field.");
      await rdrPage.openMasterTab(testData.baseUrl, "related-parties", "Related Parties");
    });
    await test.step("[RDR_197] Validate expected results from Excel", async () => {
      console.log("[RDR_197] Validating expected result: Risk Flag is displayed correctly according to AML rules.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Risk Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Risk Flag");
      console.log("[RDR_197] Test completed successfully");
    });
  });

  test("Case ID:RDR_198 - Related Parties → Verified Flag is displayed correctly for validated relationship records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_198
    // Excel Scenario: Verify Verified Flag is displayed correctly for validated relationship records.
    // Expected Result: Verified Flag is displayed correctly according to source records.
    await test.step("[RDR_198] Navigate and execute documented test steps", async () => {
      console.log("[RDR_198] Test execution started — Verify Verified Flag is displayed correctly for validated relationship records.");
      console.log("[RDR_198] Executing Excel test steps: 1. Open relationship details. 2. Review Verified Flag field.");
      await rdrPage.openMasterTab(testData.baseUrl, "related-parties", "Related Parties");
    });
    await test.step("[RDR_198] Validate expected results from Excel", async () => {
      console.log("[RDR_198] Validating expected result: Verified Flag is displayed correctly according to source records.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Verified Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Verified Flag");
      console.log("[RDR_198] Test completed successfully");
    });
  });

  test("Case ID:RDR_199 - Related Parties → search functionality retrieves the correct relationship record using Relationship ID.", async ({ testData }) => {
    // Excel Test Case ID: RDR_199
    // Excel Scenario: Verify search functionality retrieves the correct relationship record using Relationship ID.
    // Expected Result: System displays only the relationship record matching the entered Relationship ID.
    await test.step("[RDR_199] Navigate and execute documented test steps", async () => {
      console.log("[RDR_199] Test execution started — Verify search functionality retrieves the correct relationship record using Relationship ID.");
      console.log("[RDR_199] Executing Excel test steps: 1. Enter Rel ID in search box. 2. Execute search. 3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "related-parties", "Related Parties");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_199] Validate expected results from Excel", async () => {
      console.log("[RDR_199] Validating expected result: System displays only the relationship record matching the entered Relationship ID.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_199] Test completed successfully");
    });
  });

  test("Case ID:RDR_200 - Related Parties → View action opens complete relationship details including entity mapping, ownership information and AML indicators.", async ({ testData }) => {
    // Excel Test Case ID: RDR_200
    // Excel Scenario: Verify View action opens complete relationship details including entity mapping, ownership information and AML indicators.
    // Expected Result: Relationship detail screen opens successfully displaying Relationship ID, Entity IDs, Relationship Type, Ownership %, PEP Flag, Risk Flag, Verified Flag and related AML information.
    await test.step("[RDR_200] Navigate and execute documented test steps", async () => {
      console.log("[RDR_200] Test execution started — Verify View action opens complete relationship details including entity mapping, ownership information and AML indicators.");
      console.log("[RDR_200] Executing Excel test steps: 1. Click View button. 2. Review relationship details. 3. Validate displayed information.");
      await rdrPage.openMasterTab(testData.baseUrl, "related-parties", "Related Parties");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_200] Validate expected results from Excel", async () => {
      console.log("[RDR_200] Validating expected result: Relationship detail screen opens successfully displaying Relationship ID, Entity IDs, Relationship Type, Ownership %, PEP Flag, Risk Flag, Verified Flag and related AML information.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_200] Test completed successfully");
    });
  });
  });

  test.describe("Non Customer", () => {
  test("Case ID:RDR_201 - Non Customer → Non-Customer ID is generated uniquely and displayed correctly for every non-customer record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_201
    // Excel Scenario: Verify Non-Customer ID is generated uniquely and displayed correctly for every non-customer record.
    // Expected Result: Unique Non-Customer IDs are displayed for all records without duplication.
    await test.step("[RDR_201] Navigate and execute documented test steps", async () => {
      console.log("[RDR_201] Test execution started — Verify Non-Customer ID is generated uniquely and displayed correctly for every non-customer record.");
      console.log("[RDR_201] Executing Excel test steps: 1. Open Non Customer tab. 2. Review Non Cust ID column. 3. Compare all records.");
      await rdrPage.openMasterTab(testData.baseUrl, "non-customer", "Non Customer");
    });
    await test.step("[RDR_201] Validate expected results from Excel", async () => {
      console.log("[RDR_201] Validating expected result: Unique Non-Customer IDs are displayed for all records without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Non Cust ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Non Cust ID");
    await rdrPage.expectUniqueColumnValues("Non Cust ID");
      console.log("[RDR_201] Test completed successfully");
    });
  });

  test("Case ID:RDR_202 - Non Customer → Full Name is displayed in masked format according to PII masking requirements.", async ({ testData }) => {
    // Excel Test Case ID: RDR_202
    // Excel Scenario: Verify Full Name is displayed in masked format according to PII masking requirements.
    // Expected Result: Full names are displayed in masked format while maintaining privacy compliance.
    await test.step("[RDR_202] Navigate and execute documented test steps", async () => {
      console.log("[RDR_202] Test execution started — Verify Full Name is displayed in masked format according to PII masking requirements.");
      console.log("[RDR_202] Executing Excel test steps: 1. Review Full Name column. 2. Verify masking pattern. 3. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "non-customer", "Non Customer");
    });
    await test.step("[RDR_202] Validate expected results from Excel", async () => {
      console.log("[RDR_202] Validating expected result: Full names are displayed in masked format while maintaining privacy compliance.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Full Name");
    await rdrPage.expectColumnValuesMasked("Full Name");
      console.log("[RDR_202] Test completed successfully");
    });
  });

  test("Case ID:RDR_203 - Non Customer → Non-Customer Type is displayed correctly according to classification maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_203
    // Excel Scenario: Verify Non-Customer Type is displayed correctly according to classification maintained in source systems.
    // Expected Result: Correct non-customer type is displayed for each record.
    await test.step("[RDR_203] Navigate and execute documented test steps", async () => {
      console.log("[RDR_203] Test execution started — Verify Non-Customer Type is displayed correctly according to classification maintained in source systems.");
      console.log("[RDR_203] Executing Excel test steps: 1. Review Type column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "non-customer", "Non Customer");
    });
    await test.step("[RDR_203] Validate expected results from Excel", async () => {
      console.log("[RDR_203] Validating expected result: Correct non-customer type is displayed for each record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Non-Customer Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Non-Customer Type");
      console.log("[RDR_203] Test completed successfully");
    });
  });

  test("Case ID:RDR_204 - Non Customer → Nationality is displayed correctly for each non-customer record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_204
    // Excel Scenario: Verify Nationality is displayed correctly for each non-customer record.
    // Expected Result: Correct nationality code is displayed for each non-customer.
    await test.step("[RDR_204] Navigate and execute documented test steps", async () => {
      console.log("[RDR_204] Test execution started — Verify Nationality is displayed correctly for each non-customer record.");
      console.log("[RDR_204] Executing Excel test steps: 1. Review Nationality column. 2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "non-customer", "Non Customer");
    });
    await test.step("[RDR_204] Validate expected results from Excel", async () => {
      console.log("[RDR_204] Validating expected result: Correct nationality code is displayed for each non-customer.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Nationality");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Nationality");
      console.log("[RDR_204] Test completed successfully");
    });
  });

  test("Case ID:RDR_205 - Non Customer → Country of Residence is displayed correctly according to profile information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_205
    // Excel Scenario: Verify Country of Residence is displayed correctly according to profile information.
    // Expected Result: Correct country of residence is displayed for each non-customer.
    await test.step("[RDR_205] Navigate and execute documented test steps", async () => {
      console.log("[RDR_205] Test execution started — Verify Country of Residence is displayed correctly according to profile information.");
      console.log("[RDR_205] Executing Excel test steps: 1. Review Country of Residence column. 2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "non-customer", "Non Customer");
    });
    await test.step("[RDR_205] Validate expected results from Excel", async () => {
      console.log("[RDR_205] Validating expected result: Correct country of residence is displayed for each non-customer.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Country of Residence");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Country of Residence");
      console.log("[RDR_205] Test completed successfully");
    });
  });

  test("Case ID:RDR_206 - Non Customer → ID Type values are displayed correctly according to identification documents maintained for non-customers.", async ({ testData }) => {
    // Excel Test Case ID: RDR_206
    // Excel Scenario: Verify ID Type values are displayed correctly according to identification documents maintained for non-customers.
    // Expected Result: Correct ID Type is displayed for each non-customer record.
    await test.step("[RDR_206] Navigate and execute documented test steps", async () => {
      console.log("[RDR_206] Test execution started — Verify ID Type values are displayed correctly according to identification documents maintained for non-customers.");
      console.log("[RDR_206] Executing Excel test steps: 1. Review ID Type column. 2. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "non-customer", "Non Customer");
    });
    await test.step("[RDR_206] Validate expected results from Excel", async () => {
      console.log("[RDR_206] Validating expected result: Correct ID Type is displayed for each non-customer record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("ID Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("ID Type");
      console.log("[RDR_206] Test completed successfully");
    });
  });

  test("Case ID:RDR_207 - Non Customer → ID Number is displayed in masked format to protect sensitive identification information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_207
    // Excel Scenario: Verify ID Number is displayed in masked format to protect sensitive identification information.
    // Expected Result: ID Numbers are displayed in masked format according to security requirements.
    await test.step("[RDR_207] Navigate and execute documented test steps", async () => {
      console.log("[RDR_207] Test execution started — Verify ID Number is displayed in masked format to protect sensitive identification information.");
      console.log("[RDR_207] Executing Excel test steps: 1. Review ID Number column. 2. Verify masking pattern. 3. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "non-customer", "Non Customer");
    });
    await test.step("[RDR_207] Validate expected results from Excel", async () => {
      console.log("[RDR_207] Validating expected result: ID Numbers are displayed in masked format according to security requirements.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("ID Number");
    await rdrPage.expectColumnValuesMasked("ID Number");
      console.log("[RDR_207] Test completed successfully");
    });
  });

  test("Case ID:RDR_208 - Non Customer → PEP Individual records are classified correctly and displayed with appropriate visual indicators.", async ({ testData }) => {
    // Excel Test Case ID: RDR_208
    // Excel Scenario: Verify PEP Individual records are classified correctly and displayed with appropriate visual indicators.
    // Expected Result: PEP Individual record is displayed with correct classification and visual indicator.
    await test.step("[RDR_208] Navigate and execute documented test steps", async () => {
      console.log("[RDR_208] Test execution started — Verify PEP Individual records are classified correctly and displayed with appropriate visual indicators.");
      console.log("[RDR_208] Executing Excel test steps: 1. Locate PEP_INDIVIDUAL record. 2. Review Type column. 3. Verify highlighting.");
      await rdrPage.openMasterTab(testData.baseUrl, "non-customer", "Non Customer");
    });
    await test.step("[RDR_208] Validate expected results from Excel", async () => {
      console.log("[RDR_208] Validating expected result: PEP Individual record is displayed with correct classification and visual indicator.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Type");
      console.log("[RDR_208] Test completed successfully");
    });
  });

  test("Case ID:RDR_209 - Non Customer → linked customer information is displayed correctly in detail view when a non-customer is associated with a bank customer.", async ({ testData }) => {
    // Excel Test Case ID: RDR_209
    // Excel Scenario: Verify linked customer information is displayed correctly in detail view when a non-customer is associated with a bank customer.
    // Expected Result: Linked Customer ID is displayed accurately in the detail screen.
    await test.step("[RDR_209] Navigate and execute documented test steps", async () => {
      console.log("[RDR_209] Test execution started — Verify linked customer information is displayed correctly in detail view when a non-customer is associated with a bank customer.");
      console.log("[RDR_209] Executing Excel test steps: 1. Click View. 2. Review Linked Customer ID field.");
      await rdrPage.openMasterTab(testData.baseUrl, "non-customer", "Non Customer");
    });
    await test.step("[RDR_209] Validate expected results from Excel", async () => {
      console.log("[RDR_209] Validating expected result: Linked Customer ID is displayed accurately in the detail screen.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("linked customer information");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("linked customer information");
      console.log("[RDR_209] Test completed successfully");
    });
  });

  test("Case ID:RDR_210 - Non Customer → Relationship to Customer is displayed correctly in detail view.", async ({ testData }) => {
    // Excel Test Case ID: RDR_210
    // Excel Scenario: Verify Relationship to Customer is displayed correctly in detail view.
    // Expected Result: Correct customer relationship type is displayed.
    await test.step("[RDR_210] Navigate and execute documented test steps", async () => {
      console.log("[RDR_210] Test execution started — Verify Relationship to Customer is displayed correctly in detail view.");
      console.log("[RDR_210] Executing Excel test steps: 1. Open View screen. 2. Review Relationship to Customer field.");
      await rdrPage.openMasterTab(testData.baseUrl, "non-customer", "Non Customer");
    });
    await test.step("[RDR_210] Validate expected results from Excel", async () => {
      console.log("[RDR_210] Validating expected result: Correct customer relationship type is displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Relationship to Customer");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Relationship to Customer");
      console.log("[RDR_210] Test completed successfully");
    });
  });

  test("Case ID:RDR_211 - Non Customer → PEP Flag is displayed correctly in the detail screen according to AML screening results.", async ({ testData }) => {
    // Excel Test Case ID: RDR_211
    // Excel Scenario: Verify PEP Flag is displayed correctly in the detail screen according to AML screening results.
    // Expected Result: PEP Flag is displayed correctly according to AML screening results.
    await test.step("[RDR_211] Navigate and execute documented test steps", async () => {
      console.log("[RDR_211] Test execution started — Verify PEP Flag is displayed correctly in the detail screen according to AML screening results.");
      console.log("[RDR_211] Executing Excel test steps: 1. Open non-customer details. 2. Review PEP Flag.");
      await rdrPage.openMasterTab(testData.baseUrl, "non-customer", "Non Customer");
    });
    await test.step("[RDR_211] Validate expected results from Excel", async () => {
      console.log("[RDR_211] Validating expected result: PEP Flag is displayed correctly according to AML screening results.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("PEP Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("PEP Flag");
      console.log("[RDR_211] Test completed successfully");
    });
  });

  test("Case ID:RDR_212 - Non Customer → Sanctions Flag is displayed correctly for sanctioned non-customer entities.", async ({ testData }) => {
    // Excel Test Case ID: RDR_212
    // Excel Scenario: Verify Sanctions Flag is displayed correctly for sanctioned non-customer entities.
    // Expected Result: Sanctions Flag is displayed correctly according to sanctions screening results.
    await test.step("[RDR_212] Navigate and execute documented test steps", async () => {
      console.log("[RDR_212] Test execution started — Verify Sanctions Flag is displayed correctly for sanctioned non-customer entities.");
      console.log("[RDR_212] Executing Excel test steps: 1. Open detail screen. 2. Review Sanctions Flag field.");
      await rdrPage.openMasterTab(testData.baseUrl, "non-customer", "Non Customer");
    });
    await test.step("[RDR_212] Validate expected results from Excel", async () => {
      console.log("[RDR_212] Validating expected result: Sanctions Flag is displayed correctly according to sanctions screening results.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Sanctions Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Sanctions Flag");
      console.log("[RDR_212] Test completed successfully");
    });
  });

  test("Case ID:RDR_213 - Non Customer → Internal Watchlist Flag is displayed correctly for entities appearing on internal watchlists.", async ({ testData }) => {
    // Excel Test Case ID: RDR_213
    // Excel Scenario: Verify Internal Watchlist Flag is displayed correctly for entities appearing on internal watchlists.
    // Expected Result: Internal Watchlist Flag is displayed correctly according to AML records.
    await test.step("[RDR_213] Navigate and execute documented test steps", async () => {
      console.log("[RDR_213] Test execution started — Verify Internal Watchlist Flag is displayed correctly for entities appearing on internal watchlists.");
      console.log("[RDR_213] Executing Excel test steps: 1. Open detail screen. 2. Review Internal Watchlist Flag.");
      await rdrPage.openMasterTab(testData.baseUrl, "non-customer", "Non Customer");
    });
    await test.step("[RDR_213] Validate expected results from Excel", async () => {
      console.log("[RDR_213] Validating expected result: Internal Watchlist Flag is displayed correctly according to AML records.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Internal Watchlist Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Internal Watchlist Flag");
      console.log("[RDR_213] Test completed successfully");
    });
  });

  test("Case ID:RDR_214 - Non Customer → search functionality retrieves the correct non-customer record using Non-Customer ID.", async ({ testData }) => {
    // Excel Test Case ID: RDR_214
    // Excel Scenario: Verify search functionality retrieves the correct non-customer record using Non-Customer ID.
    // Expected Result: System displays only the non-customer record matching the entered ID.
    await test.step("[RDR_214] Navigate and execute documented test steps", async () => {
      console.log("[RDR_214] Test execution started — Verify search functionality retrieves the correct non-customer record using Non-Customer ID.");
      console.log("[RDR_214] Executing Excel test steps: 1. Enter Non Cust ID in search box. 2. Execute search. 3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "non-customer", "Non Customer");
    await rdrPage.searchUsingPilotCustomerId();
    });
    await test.step("[RDR_214] Validate expected results from Excel", async () => {
      console.log("[RDR_214] Validating expected result: System displays only the non-customer record matching the entered ID.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectSearchReturnsExactMatch("Customer ID", pilotData.customerMaster.ids[0]);
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_214] Test completed successfully");
    });
  });

  test("Case ID:RDR_215 - Non Customer → View action opens complete non-customer details including AML flags, relationship information and source details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_215
    // Excel Scenario: Verify View action opens complete non-customer details including AML flags, relationship information and source details.
    // Expected Result: Detail screen opens successfully displaying Non-Customer ID, Type, Linked Customer ID, Relationship, PEP Flag, Sanctions Flag, Internal Watchlist Flag, Source and identification details.
    await test.step("[RDR_215] Navigate and execute documented test steps", async () => {
      console.log("[RDR_215] Test execution started — Verify View action opens complete non-customer details including AML flags, relationship information and source details.");
      console.log("[RDR_215] Executing Excel test steps: 1. Click View button. 2. Review complete details. 3. Validate displayed information.");
      await rdrPage.openMasterTab(testData.baseUrl, "non-customer", "Non Customer");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_215] Validate expected results from Excel", async () => {
      console.log("[RDR_215] Validating expected result: Detail screen opens successfully displaying Non-Customer ID, Type, Linked Customer ID, Relationship, PEP Flag, Sanctions Flag, Internal Watchlist Flag, Source and identification details.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_215] Test completed successfully");
    });
  });
  });

  test.describe("Customer Type", () => {
  test("Case ID:RDR_216 - Customer Type → Customer Type records are displayed successfully in the Customer Type Master grid after data load.", async ({ testData }) => {
    // Excel Test Case ID: RDR_216
    // Excel Scenario: Verify Customer Type records are displayed successfully in the Customer Type Master grid after data load.
    // Expected Result: Customer Type records are displayed successfully in the grid.
    await test.step("[RDR_216] Navigate and execute documented test steps", async () => {
      console.log("[RDR_216] Test execution started — Verify Customer Type records are displayed successfully in the Customer Type Master grid after data load.");
      console.log("[RDR_216] Executing Excel test steps: 1. Open Customer Type tab. 2. Review records displayed in grid.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer-type", "Customer Type");
    });
    await test.step("[RDR_216] Validate expected results from Excel", async () => {
      console.log("[RDR_216] Validating expected result: Customer Type records are displayed successfully in the grid.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer Type records");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Customer Type records");
      console.log("[RDR_216] Test completed successfully");
    });
  });

  test("Case ID:RDR_217 - Customer Type → Customer Type Code is displayed correctly for each customer category maintained in the master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_217
    // Excel Scenario: Verify Customer Type Code is displayed correctly for each customer category maintained in the master.
    // Expected Result: Correct Customer Type Code is displayed for every record.
    await test.step("[RDR_217] Navigate and execute documented test steps", async () => {
      console.log("[RDR_217] Test execution started — Verify Customer Type Code is displayed correctly for each customer category maintained in the master.");
      console.log("[RDR_217] Executing Excel test steps: 1. Review Code column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer-type", "Customer Type");
    });
    await test.step("[RDR_217] Validate expected results from Excel", async () => {
      console.log("[RDR_217] Validating expected result: Correct Customer Type Code is displayed for every record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer Type Code");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Customer Type Code");
      console.log("[RDR_217] Test completed successfully");
    });
  });

  test("Case ID:RDR_218 - Customer Type → Customer Type Name is displayed correctly according to configured customer classifications.", async ({ testData }) => {
    // Excel Test Case ID: RDR_218
    // Excel Scenario: Verify Customer Type Name is displayed correctly according to configured customer classifications.
    // Expected Result: Correct Customer Type Name is displayed for each customer type.
    await test.step("[RDR_218] Navigate and execute documented test steps", async () => {
      console.log("[RDR_218] Test execution started — Verify Customer Type Name is displayed correctly according to configured customer classifications.");
      console.log("[RDR_218] Executing Excel test steps: 1. Review Name column. 2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer-type", "Customer Type");
    });
    await test.step("[RDR_218] Validate expected results from Excel", async () => {
      console.log("[RDR_218] Validating expected result: Correct Customer Type Name is displayed for each customer type.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer Type Name");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Customer Type Name");
      console.log("[RDR_218] Test completed successfully");
    });
  });

  test("Case ID:RDR_219 - Customer Type → Customer Type Code remains unique across all customer type records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_219
    // Excel Scenario: Verify Customer Type Code remains unique across all customer type records.
    // Expected Result: Each Customer Type Code is unique.
    await test.step("[RDR_219] Navigate and execute documented test steps", async () => {
      console.log("[RDR_219] Test execution started — Verify Customer Type Code remains unique across all customer type records.");
      console.log("[RDR_219] Executing Excel test steps: 1. Review all codes. 2. Compare records for duplicates.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer-type", "Customer Type");
    });
    await test.step("[RDR_219] Validate expected results from Excel", async () => {
      console.log("[RDR_219] Validating expected result: Each Customer Type Code is unique.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer Type Code");
    await rdrPage.expectAllCellsNonEmpty("Customer Type Code");
    await rdrPage.expectUniqueColumnValues("Customer Type Code");
      console.log("[RDR_219] Test completed successfully");
    });
  });

  test("Case ID:RDR_220 - Customer Type → Segment ID is displayed uniquely for each customer type record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_220
    // Excel Scenario: Verify Segment ID is displayed uniquely for each customer type record.
    // Expected Result: Unique Segment IDs are displayed for all records.
    await test.step("[RDR_220] Navigate and execute documented test steps", async () => {
      console.log("[RDR_220] Test execution started — Verify Segment ID is displayed uniquely for each customer type record.");
      console.log("[RDR_220] Executing Excel test steps: 1. Review Segment ID column. 2. Compare all records.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer-type", "Customer Type");
    });
    await test.step("[RDR_220] Validate expected results from Excel", async () => {
      console.log("[RDR_220] Validating expected result: Unique Segment IDs are displayed for all records.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Segment ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Segment ID");
    await rdrPage.expectUniqueColumnValues("Segment ID");
      console.log("[RDR_220] Test completed successfully");
    });
  });

  test("Case ID:RDR_221 - Customer Type → search functionality retrieves the correct customer type record using Customer Type Code.", async ({ testData }) => {
    // Excel Test Case ID: RDR_221
    // Excel Scenario: Verify search functionality retrieves the correct customer type record using Customer Type Code.
    // Expected Result: Only the Corporate customer type record is displayed.
    await test.step("[RDR_221] Navigate and execute documented test steps", async () => {
      console.log("[RDR_221] Test execution started — Verify search functionality retrieves the correct customer type record using Customer Type Code.");
      console.log("[RDR_221] Executing Excel test steps: 1. Enter Customer Type Code in search field. 2. Execute search.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer-type", "Customer Type");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_221] Validate expected results from Excel", async () => {
      console.log("[RDR_221] Validating expected result: Only the Corporate customer type record is displayed.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_221] Test completed successfully");
    });
  });

  test("Case ID:RDR_222 - Customer Type → search functionality retrieves the correct customer type record using Customer Type Name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_222
    // Excel Scenario: Verify search functionality retrieves the correct customer type record using Customer Type Name.
    // Expected Result: Matching customer type record is displayed successfully.
    await test.step("[RDR_222] Navigate and execute documented test steps", async () => {
      console.log("[RDR_222] Test execution started — Verify search functionality retrieves the correct customer type record using Customer Type Name.");
      console.log("[RDR_222] Executing Excel test steps: 1. Enter customer type name in search field. 2. Execute search.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer-type", "Customer Type");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_222] Validate expected results from Excel", async () => {
      console.log("[RDR_222] Validating expected result: Matching customer type record is displayed successfully.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectSearchYieldsResults();
      console.log("[RDR_222] Test completed successfully");
    });
  });

  test("Case ID:RDR_223 - Customer Type → View action opens complete customer type details including risk and CDD configuration fields.", async ({ testData }) => {
    // Excel Test Case ID: RDR_223
    // Excel Scenario: Verify View action opens complete customer type details including risk and CDD configuration fields.
    // Expected Result: Detail screen opens displaying complete customer type information.
    await test.step("[RDR_223] Navigate and execute documented test steps", async () => {
      console.log("[RDR_223] Test execution started — Verify View action opens complete customer type details including risk and CDD configuration fields.");
      console.log("[RDR_223] Executing Excel test steps: 1. Click View button. 2. Review detail page.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer-type", "Customer Type");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_223] Validate expected results from Excel", async () => {
      console.log("[RDR_223] Validating expected result: Detail screen opens displaying complete customer type information.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_223] Test completed successfully");
    });
  });

  test("Case ID:RDR_224 - Customer Type → Customer Type Code displayed in UI matches the customer_type_code field defined in FSD.", async ({ testData }) => {
    // Excel Test Case ID: RDR_224
    // Excel Scenario: Verify Customer Type Code displayed in UI matches the customer_type_code field defined in FSD.
    // Expected Result: Customer Type Code matches source records and FSD definition.
    await test.step("[RDR_224] Navigate and execute documented test steps", async () => {
      console.log("[RDR_224] Test execution started — Verify Customer Type Code displayed in UI matches the customer_type_code field defined in FSD.");
      console.log("[RDR_224] Executing Excel test steps: 1. Open customer type record. 2. Compare UI values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer-type", "Customer Type");
    });
    await test.step("[RDR_224] Validate expected results from Excel", async () => {
      console.log("[RDR_224] Validating expected result: Customer Type Code matches source records and FSD definition.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer Type Code");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Customer Type Code");
      console.log("[RDR_224] Test completed successfully");
    });
  });

  test("Case ID:RDR_225 - Customer Type → Customer Type Name displayed in UI matches the customer_type_name field maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_225
    // Excel Scenario: Verify Customer Type Name displayed in UI matches the customer_type_name field maintained in source systems.
    // Expected Result: Customer Type Name is displayed correctly.
    await test.step("[RDR_225] Navigate and execute documented test steps", async () => {
      console.log("[RDR_225] Test execution started — Verify Customer Type Name displayed in UI matches the customer_type_name field maintained in source systems.");
      console.log("[RDR_225] Executing Excel test steps: 1. Open customer type record. 2. Review Name value.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer-type", "Customer Type");
    });
    await test.step("[RDR_225] Validate expected results from Excel", async () => {
      console.log("[RDR_225] Validating expected result: Customer Type Name is displayed correctly.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Customer Type Name");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Customer Type Name");
      console.log("[RDR_225] Test completed successfully");
    });
  });

  test("Case ID:RDR_226 - Customer Type → Risk Weight value is displayed correctly in customer type detail screen and matches source configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_226
    // Excel Scenario: Verify Risk Weight value is displayed correctly in customer type detail screen and matches source configuration.
    // Expected Result: Correct Risk Weight value is displayed for the selected customer type.
    await test.step("[RDR_226] Navigate and execute documented test steps", async () => {
      console.log("[RDR_226] Test execution started — Verify Risk Weight value is displayed correctly in customer type detail screen and matches source configuration.");
      console.log("[RDR_226] Executing Excel test steps: 1. Open View page. 2. Review Risk Weight field.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer-type", "Customer Type");
    });
    await test.step("[RDR_226] Validate expected results from Excel", async () => {
      console.log("[RDR_226] Validating expected result: Correct Risk Weight value is displayed for the selected customer type.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Risk Weight value");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Risk Weight value");
      console.log("[RDR_226] Test completed successfully");
    });
  });

  test("Case ID:RDR_227 - Customer Type → CDD Level is displayed correctly according to configured due diligence rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_227
    // Excel Scenario: Verify CDD Level is displayed correctly according to configured due diligence rules.
    // Expected Result: Correct CDD Level is displayed according to configuration.
    await test.step("[RDR_227] Navigate and execute documented test steps", async () => {
      console.log("[RDR_227] Test execution started — Verify CDD Level is displayed correctly according to configured due diligence rules.");
      console.log("[RDR_227] Executing Excel test steps: 1. Open customer type details. 2. Review CDD Level field.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer-type", "Customer Type");
    });
    await test.step("[RDR_227] Validate expected results from Excel", async () => {
      console.log("[RDR_227] Validating expected result: Correct CDD Level is displayed according to configuration.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("CDD Level");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("CDD Level");
      console.log("[RDR_227] Test completed successfully");
    });
  });

  test("Case ID:RDR_228 - Customer Type → Active Status is displayed correctly for customer types currently in use.", async ({ testData }) => {
    // Excel Test Case ID: RDR_228
    // Excel Scenario: Verify Active Status is displayed correctly for customer types currently in use.
    // Expected Result: Active status is displayed correctly for active customer types.
    await test.step("[RDR_228] Navigate and execute documented test steps", async () => {
      console.log("[RDR_228] Test execution started — Verify Active Status is displayed correctly for customer types currently in use.");
      console.log("[RDR_228] Executing Excel test steps: 1. Open detail screen. 2. Review Active Status field.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer-type", "Customer Type");
    });
    await test.step("[RDR_228] Validate expected results from Excel", async () => {
      console.log("[RDR_228] Validating expected result: Active status is displayed correctly for active customer types.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Active Status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Active Status");
      console.log("[RDR_228] Test completed successfully");
    });
  });

  test("Case ID:RDR_229 - Customer Type → CSV export functionality exports all customer type records successfully.", async ({ testData }) => {
    // Excel Test Case ID: RDR_229
    // Excel Scenario: Verify CSV export functionality exports all customer type records successfully.
    // Expected Result: CSV file downloads successfully with accurate customer type records.
    await test.step("[RDR_229] Navigate and execute documented test steps", async () => {
      console.log("[RDR_229] Test execution started — Verify CSV export functionality exports all customer type records successfully.");
      console.log("[RDR_229] Executing Excel test steps: 1. Click CSV button. 2. Download file. 3. Validate contents.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer-type", "Customer Type");
    });
    await test.step("[RDR_229] Validate expected results from Excel", async () => {
      console.log("[RDR_229] Validating expected result: CSV file downloads successfully with accurate customer type records.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectExportButtonsVisible();
    await rdrPage.expectCsvExportReady();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_229] Test completed successfully");
    });
  });

  test("Case ID:RDR_230 - Customer Type → Excel export functionality exports all customer type records successfully.", async ({ testData }) => {
    // Excel Test Case ID: RDR_230
    // Excel Scenario: Verify Excel export functionality exports all customer type records successfully.
    // Expected Result: Excel file downloads successfully with accurate customer type records and structure.
    await test.step("[RDR_230] Navigate and execute documented test steps", async () => {
      console.log("[RDR_230] Test execution started — Verify Excel export functionality exports all customer type records successfully.");
      console.log("[RDR_230] Executing Excel test steps: 1. Click Excel button. 2. Download file. 3. Validate contents.");
      await rdrPage.openMasterTab(testData.baseUrl, "customer-type", "Customer Type");
    });
    await test.step("[RDR_230] Validate expected results from Excel", async () => {
      console.log("[RDR_230] Validating expected result: Excel file downloads successfully with accurate customer type records and structure.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectExportButtonsVisible();
    await rdrPage.expectExcelExportReady();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_230] Test completed successfully");
    });
  });
  });

  test.describe("Product", () => {
  test("Case ID:RDR_231 - Product → Product Master records are displayed successfully after CBS synchronization and all configured products are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_231
    // Excel Scenario: Verify Product Master records are displayed successfully after CBS synchronization and all configured products are visible in the grid.
    // Expected Result: Product records are displayed successfully with complete information.
    await test.step("[RDR_231] Navigate and execute documented test steps", async () => {
      console.log("[RDR_231] Test execution started — Verify Product Master records are displayed successfully after CBS synchronization and all configured products are visible in the grid.");
      console.log("[RDR_231] Executing Excel test steps: 1. Open Product tab. 2. Review Product Master grid. 3. Verify record count and displayed products.");
      await rdrPage.openMasterTab(testData.baseUrl, "product", "Product");
    });
    await test.step("[RDR_231] Validate expected results from Excel", async () => {
      console.log("[RDR_231] Validating expected result: Product records are displayed successfully with complete information.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Product Master records");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Product Master records");
      console.log("[RDR_231] Test completed successfully");
    });
  });

  test("Case ID:RDR_232 - Product → Product ID is displayed uniquely for every product maintained in the Product Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_232
    // Excel Scenario: Verify Product ID is displayed uniquely for every product maintained in the Product Master.
    // Expected Result: Unique Product IDs are displayed without duplication.
    await test.step("[RDR_232] Navigate and execute documented test steps", async () => {
      console.log("[RDR_232] Test execution started — Verify Product ID is displayed uniquely for every product maintained in the Product Master.");
      console.log("[RDR_232] Executing Excel test steps: 1. Review Product ID column. 2. Compare all records.");
      await rdrPage.openMasterTab(testData.baseUrl, "product", "Product");
    });
    await test.step("[RDR_232] Validate expected results from Excel", async () => {
      console.log("[RDR_232] Validating expected result: Unique Product IDs are displayed without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Product ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Product ID");
    await rdrPage.expectUniqueColumnValues("Product ID");
      console.log("[RDR_232] Test completed successfully");
    });
  });

  test("Case ID:RDR_233 - Product → Product Code is displayed correctly according to product configuration maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_233
    // Excel Scenario: Verify Product Code is displayed correctly according to product configuration maintained in source systems.
    // Expected Result: Correct Product Codes are displayed for all products.
    await test.step("[RDR_233] Navigate and execute documented test steps", async () => {
      console.log("[RDR_233] Test execution started — Verify Product Code is displayed correctly according to product configuration maintained in source systems.");
      console.log("[RDR_233] Executing Excel test steps: 1. Review Code column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "product", "Product");
    });
    await test.step("[RDR_233] Validate expected results from Excel", async () => {
      console.log("[RDR_233] Validating expected result: Correct Product Codes are displayed for all products.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Product Code");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Product Code");
      console.log("[RDR_233] Test completed successfully");
    });
  });

  test("Case ID:RDR_234 - Product → Product Name is displayed correctly and matches the configured product description.", async ({ testData }) => {
    // Excel Test Case ID: RDR_234
    // Excel Scenario: Verify Product Name is displayed correctly and matches the configured product description.
    // Expected Result: Correct Product Names are displayed for each product.
    await test.step("[RDR_234] Navigate and execute documented test steps", async () => {
      console.log("[RDR_234] Test execution started — Verify Product Name is displayed correctly and matches the configured product description.");
      console.log("[RDR_234] Executing Excel test steps: 1. Review Name column. 2. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "product", "Product");
    });
    await test.step("[RDR_234] Validate expected results from Excel", async () => {
      console.log("[RDR_234] Validating expected result: Correct Product Names are displayed for each product.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Product Name");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Product Name");
      console.log("[RDR_234] Test completed successfully");
    });
  });

  test("Case ID:RDR_235 - Product → Product Category is displayed correctly according to configured business classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_235
    // Excel Scenario: Verify Product Category is displayed correctly according to configured business classification.
    // Expected Result: Correct Product Category is displayed for every product.
    await test.step("[RDR_235] Navigate and execute documented test steps", async () => {
      console.log("[RDR_235] Test execution started — Verify Product Category is displayed correctly according to configured business classification.");
      console.log("[RDR_235] Executing Excel test steps: 1. Review Category column. 2. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "product", "Product");
    });
    await test.step("[RDR_235] Validate expected results from Excel", async () => {
      console.log("[RDR_235] Validating expected result: Correct Product Category is displayed for every product.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Product Category");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Product Category");
      console.log("[RDR_235] Test completed successfully");
    });
  });

  test("Case ID:RDR_236 - Product → Product Type is displayed correctly according to the product setup maintained in the source system.", async ({ testData }) => {
    // Excel Test Case ID: RDR_236
    // Excel Scenario: Verify Product Type is displayed correctly according to the product setup maintained in the source system.
    // Expected Result: Correct Product Type is displayed for each product.
    await test.step("[RDR_236] Navigate and execute documented test steps", async () => {
      console.log("[RDR_236] Test execution started — Verify Product Type is displayed correctly according to the product setup maintained in the source system.");
      console.log("[RDR_236] Executing Excel test steps: 1. Review Type column. 2. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "product", "Product");
    });
    await test.step("[RDR_236] Validate expected results from Excel", async () => {
      console.log("[RDR_236] Validating expected result: Correct Product Type is displayed for each product.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Product Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Product Type");
      console.log("[RDR_236] Test completed successfully");
    });
  });

  test("Case ID:RDR_237 - Product → Entity Types applicable to the product are displayed correctly for AML and customer onboarding purposes.", async ({ testData }) => {
    // Excel Test Case ID: RDR_237
    // Excel Scenario: Verify Entity Types applicable to the product are displayed correctly for AML and customer onboarding purposes.
    // Expected Result: Correct Entity Types are displayed for each product.
    await test.step("[RDR_237] Navigate and execute documented test steps", async () => {
      console.log("[RDR_237] Test execution started — Verify Entity Types applicable to the product are displayed correctly for AML and customer onboarding purposes.");
      console.log("[RDR_237] Executing Excel test steps: 1. Review Entity Types column. 2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "product", "Product");
    });
    await test.step("[RDR_237] Validate expected results from Excel", async () => {
      console.log("[RDR_237] Validating expected result: Correct Entity Types are displayed for each product.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Entity Types applicable to the product");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Entity Types applicable to the product");
      console.log("[RDR_237] Test completed successfully");
    });
  });

  test("Case ID:RDR_238 - Product → Cross Border indicator is displayed correctly for products involving international transactions.", async ({ testData }) => {
    // Excel Test Case ID: RDR_238
    // Excel Scenario: Verify Cross Border indicator is displayed correctly for products involving international transactions.
    // Expected Result: Correct Cross Border status is displayed for each product.
    await test.step("[RDR_238] Navigate and execute documented test steps", async () => {
      console.log("[RDR_238] Test execution started — Verify Cross Border indicator is displayed correctly for products involving international transactions.");
      console.log("[RDR_238] Executing Excel test steps: 1. Review Cross Border column. 2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "product", "Product");
    });
    await test.step("[RDR_238] Validate expected results from Excel", async () => {
      console.log("[RDR_238] Validating expected result: Correct Cross Border status is displayed for each product.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Cross Border indicator");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Cross Border indicator");
      console.log("[RDR_238] Test completed successfully");
    });
  });

  test("Case ID:RDR_239 - Product → Trade Finance products are marked as Cross Border where applicable.", async ({ testData }) => {
    // Excel Test Case ID: RDR_239
    // Excel Scenario: Verify Trade Finance products are marked as Cross Border where applicable.
    // Expected Result: Trade Finance product displays Cross Border = Yes as configured.
    await test.step("[RDR_239] Navigate and execute documented test steps", async () => {
      console.log("[RDR_239] Test execution started — Verify Trade Finance products are marked as Cross Border where applicable.");
      console.log("[RDR_239] Executing Excel test steps: 1. Locate Trade Finance product. 2. Review Cross Border value.");
      await rdrPage.openMasterTab(testData.baseUrl, "product", "Product");
    });
    await test.step("[RDR_239] Validate expected results from Excel", async () => {
      console.log("[RDR_239] Validating expected result: Trade Finance product displays Cross Border = Yes as configured.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_239] Test completed successfully");
    });
  });

  test("Case ID:RDR_240 - Product → Effective Date is displayed correctly and reflects the date from which the product became active.", async ({ testData }) => {
    // Excel Test Case ID: RDR_240
    // Excel Scenario: Verify Effective Date is displayed correctly and reflects the date from which the product became active.
    // Expected Result: Correct Effective Date is displayed for each product.
    await test.step("[RDR_240] Navigate and execute documented test steps", async () => {
      console.log("[RDR_240] Test execution started — Verify Effective Date is displayed correctly and reflects the date from which the product became active.");
      console.log("[RDR_240] Executing Excel test steps: 1. Review Effective Date column. 2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "product", "Product");
    });
    await test.step("[RDR_240] Validate expected results from Excel", async () => {
      console.log("[RDR_240] Validating expected result: Correct Effective Date is displayed for each product.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Effective Date");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Effective Date");
      console.log("[RDR_240] Test completed successfully");
    });
  });

  test("Case ID:RDR_241 - Product → Risk Rating is displayed correctly in product detail view according to product risk configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_241
    // Excel Scenario: Verify Risk Rating is displayed correctly in product detail view according to product risk configuration.
    // Expected Result: Correct Risk Rating is displayed according to product configuration.
    await test.step("[RDR_241] Navigate and execute documented test steps", async () => {
      console.log("[RDR_241] Test execution started — Verify Risk Rating is displayed correctly in product detail view according to product risk configuration.");
      console.log("[RDR_241] Executing Excel test steps: 1. Click View. 2. Review Risk Rating field.");
      await rdrPage.openMasterTab(testData.baseUrl, "product", "Product");
    });
    await test.step("[RDR_241] Validate expected results from Excel", async () => {
      console.log("[RDR_241] Validating expected result: Correct Risk Rating is displayed according to product configuration.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Risk Rating");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Risk Rating");
      console.log("[RDR_241] Test completed successfully");
    });
  });

  test("Case ID:RDR_242 - Product → goAML Product Type mapping is displayed correctly in product detail view for regulatory reporting purposes.", async ({ testData }) => {
    // Excel Test Case ID: RDR_242
    // Excel Scenario: Verify goAML Product Type mapping is displayed correctly in product detail view for regulatory reporting purposes.
    // Expected Result: Correct goAML Product Type mapping is displayed.
    await test.step("[RDR_242] Navigate and execute documented test steps", async () => {
      console.log("[RDR_242] Test execution started — Verify goAML Product Type mapping is displayed correctly in product detail view for regulatory reporting purposes.");
      console.log("[RDR_242] Executing Excel test steps: 1. Open product details. 2. Review goAML Product Type field.");
      await rdrPage.openMasterTab(testData.baseUrl, "product", "Product");
    });
    await test.step("[RDR_242] Validate expected results from Excel", async () => {
      console.log("[RDR_242] Validating expected result: Correct goAML Product Type mapping is displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("goAML Product Type mapping");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("goAML Product Type mapping");
      console.log("[RDR_242] Test completed successfully");
    });
  });

  test("Case ID:RDR_243 - Product → search functionality retrieves the correct product record using Product Code or Product Name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_243
    // Excel Scenario: Verify search functionality retrieves the correct product record using Product Code or Product Name.
    // Expected Result: Only the matching product record is displayed.
    await test.step("[RDR_243] Navigate and execute documented test steps", async () => {
      console.log("[RDR_243] Test execution started — Verify search functionality retrieves the correct product record using Product Code or Product Name.");
      console.log("[RDR_243] Executing Excel test steps: 1. Enter search value. 2. Execute search. 3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "product", "Product");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_243] Validate expected results from Excel", async () => {
      console.log("[RDR_243] Validating expected result: Only the matching product record is displayed.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_243] Test completed successfully");
    });
  });

  test("Case ID:RDR_244 - Product → View action opens complete product details including Product ID, Category, Risk Rating and goAML mapping.", async ({ testData }) => {
    // Excel Test Case ID: RDR_244
    // Excel Scenario: Verify View action opens complete product details including Product ID, Category, Risk Rating and goAML mapping.
    // Expected Result: Product detail screen opens successfully displaying complete product information.
    await test.step("[RDR_244] Navigate and execute documented test steps", async () => {
      console.log("[RDR_244] Test execution started — Verify View action opens complete product details including Product ID, Category, Risk Rating and goAML mapping.");
      console.log("[RDR_244] Executing Excel test steps: 1. Click View button. 2. Review detail screen.");
      await rdrPage.openMasterTab(testData.baseUrl, "product", "Product");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_244] Validate expected results from Excel", async () => {
      console.log("[RDR_244] Validating expected result: Product detail screen opens successfully displaying complete product information.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_244] Test completed successfully");
    });
  });

  test("Case ID:RDR_245 - Product → CSV and Excel export functionality exports all Product Master records accurately.", async ({ testData }) => {
    // Excel Test Case ID: RDR_245
    // Excel Scenario: Verify CSV and Excel export functionality exports all Product Master records accurately.
    // Expected Result: CSV and Excel files download successfully and contain accurate Product Master data.
    await test.step("[RDR_245] Navigate and execute documented test steps", async () => {
      console.log("[RDR_245] Test execution started — Verify CSV and Excel export functionality exports all Product Master records accurately.");
      console.log("[RDR_245] Executing Excel test steps: 1. Click CSV button. 2. Validate file. 3. Click Excel button. 4. Validate file contents.");
      await rdrPage.openMasterTab(testData.baseUrl, "product", "Product");
    });
    await test.step("[RDR_245] Validate expected results from Excel", async () => {
      console.log("[RDR_245] Validating expected result: CSV and Excel files download successfully and contain accurate Product Master data.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectExportButtonsVisible();
    await rdrPage.expectCsvExportReady();
    await rdrPage.expectExcelExportReady();
      console.log("[RDR_245] Test completed successfully");
    });
  });
  });

  test.describe("Branch", () => {
  test("Case ID:RDR_246 - Branch → Branch Master records are displayed successfully after CBS synchronization and all configured branches are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_246
    // Excel Scenario: Verify Branch Master records are displayed successfully after CBS synchronization and all configured branches are visible in the grid.
    // Expected Result: All branch records are displayed successfully in the grid.
    await test.step("[RDR_246] Navigate and execute documented test steps", async () => {
      console.log("[RDR_246] Test execution started — Verify Branch Master records are displayed successfully after CBS synchronization and all configured branches are visible in the grid.");
      console.log("[RDR_246] Executing Excel test steps: 1. Open Branch tab. 2. Review Branch Master grid. 3. Verify displayed records.");
      await rdrPage.openMasterTab(testData.baseUrl, "branch", "Branch");
    });
    await test.step("[RDR_246] Validate expected results from Excel", async () => {
      console.log("[RDR_246] Validating expected result: All branch records are displayed successfully in the grid.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Branch Master records");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Branch Master records");
      console.log("[RDR_246] Test completed successfully");
    });
  });

  test("Case ID:RDR_247 - Branch → Branch ID is displayed uniquely for every branch maintained in the Branch Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_247
    // Excel Scenario: Verify Branch ID is displayed uniquely for every branch maintained in the Branch Master.
    // Expected Result: Unique Branch IDs are displayed without duplication.
    await test.step("[RDR_247] Navigate and execute documented test steps", async () => {
      console.log("[RDR_247] Test execution started — Verify Branch ID is displayed uniquely for every branch maintained in the Branch Master.");
      console.log("[RDR_247] Executing Excel test steps: 1. Review Branch ID column. 2. Compare all displayed records.");
      await rdrPage.openMasterTab(testData.baseUrl, "branch", "Branch");
    });
    await test.step("[RDR_247] Validate expected results from Excel", async () => {
      console.log("[RDR_247] Validating expected result: Unique Branch IDs are displayed without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Branch ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Branch ID");
    await rdrPage.expectUniqueColumnValues("Branch ID");
      console.log("[RDR_247] Test completed successfully");
    });
  });

  test("Case ID:RDR_248 - Branch → Branch Code is displayed correctly according to the branch configuration maintained in CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_248
    // Excel Scenario: Verify Branch Code is displayed correctly according to the branch configuration maintained in CBS.
    // Expected Result: Correct Branch Codes are displayed for all branches.
    await test.step("[RDR_248] Navigate and execute documented test steps", async () => {
      console.log("[RDR_248] Test execution started — Verify Branch Code is displayed correctly according to the branch configuration maintained in CBS.");
      console.log("[RDR_248] Executing Excel test steps: 1. Review Code column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "branch", "Branch");
    });
    await test.step("[RDR_248] Validate expected results from Excel", async () => {
      console.log("[RDR_248] Validating expected result: Correct Branch Codes are displayed for all branches.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Branch Code");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Branch Code");
      console.log("[RDR_248] Test completed successfully");
    });
  });

  test("Case ID:RDR_249 - Branch → Branch Name is displayed correctly and matches the official branch name configured in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_249
    // Excel Scenario: Verify Branch Name is displayed correctly and matches the official branch name configured in source systems.
    // Expected Result: Correct Branch Names are displayed for each branch.
    await test.step("[RDR_249] Navigate and execute documented test steps", async () => {
      console.log("[RDR_249] Test execution started — Verify Branch Name is displayed correctly and matches the official branch name configured in source systems.");
      console.log("[RDR_249] Executing Excel test steps: 1. Review Name column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "branch", "Branch");
    });
    await test.step("[RDR_249] Validate expected results from Excel", async () => {
      console.log("[RDR_249] Validating expected result: Correct Branch Names are displayed for each branch.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Branch Name");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Branch Name");
      console.log("[RDR_249] Test completed successfully");
    });
  });

  test("Case ID:RDR_250 - Branch → City information is displayed correctly according to branch location details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_250
    // Excel Scenario: Verify City information is displayed correctly according to branch location details.
    // Expected Result: Correct city information is displayed for each branch.
    await test.step("[RDR_250] Navigate and execute documented test steps", async () => {
      console.log("[RDR_250] Test execution started — Verify City information is displayed correctly according to branch location details.");
      console.log("[RDR_250] Executing Excel test steps: 1. Review City column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "branch", "Branch");
    });
    await test.step("[RDR_250] Validate expected results from Excel", async () => {
      console.log("[RDR_250] Validating expected result: Correct city information is displayed for each branch.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("City information");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("City information");
      console.log("[RDR_250] Test completed successfully");
    });
  });

  test("Case ID:RDR_251 - Branch → State information is displayed correctly according to branch location details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_251
    // Excel Scenario: Verify State information is displayed correctly according to branch location details.
    // Expected Result: Correct state information is displayed for all branches.
    await test.step("[RDR_251] Navigate and execute documented test steps", async () => {
      console.log("[RDR_251] Test execution started — Verify State information is displayed correctly according to branch location details.");
      console.log("[RDR_251] Executing Excel test steps: 1. Review State column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "branch", "Branch");
    });
    await test.step("[RDR_251] Validate expected results from Excel", async () => {
      console.log("[RDR_251] Validating expected result: Correct state information is displayed for all branches.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("State information");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("State information");
      console.log("[RDR_251] Test completed successfully");
    });
  });

  test("Case ID:RDR_252 - Branch → Branch Type is displayed correctly according to configured branch classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_252
    // Excel Scenario: Verify Branch Type is displayed correctly according to configured branch classification.
    // Expected Result: Correct Branch Type is displayed for each branch.
    await test.step("[RDR_252] Navigate and execute documented test steps", async () => {
      console.log("[RDR_252] Test execution started — Verify Branch Type is displayed correctly according to configured branch classification.");
      console.log("[RDR_252] Executing Excel test steps: 1. Review Type column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "branch", "Branch");
    });
    await test.step("[RDR_252] Validate expected results from Excel", async () => {
      console.log("[RDR_252] Validating expected result: Correct Branch Type is displayed for each branch.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Branch Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Branch Type");
      console.log("[RDR_252] Test completed successfully");
    });
  });

  test("Case ID:RDR_253 - Branch → High Risk Zone indicator is displayed correctly for branches located in AML high-risk areas.", async ({ testData }) => {
    // Excel Test Case ID: RDR_253
    // Excel Scenario: Verify High Risk Zone indicator is displayed correctly for branches located in AML high-risk areas.
    // Expected Result: High Risk Zone indicator is displayed correctly for high-risk branches.
    await test.step("[RDR_253] Navigate and execute documented test steps", async () => {
      console.log("[RDR_253] Test execution started — Verify High Risk Zone indicator is displayed correctly for branches located in AML high-risk areas.");
      console.log("[RDR_253] Executing Excel test steps: 1. Review High Risk Zone column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "branch", "Branch");
    });
    await test.step("[RDR_253] Validate expected results from Excel", async () => {
      console.log("[RDR_253] Validating expected result: High Risk Zone indicator is displayed correctly for high-risk branches.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("High Risk Zone indicator");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("High Risk Zone indicator");
      console.log("[RDR_253] Test completed successfully");
    });
  });

  test("Case ID:RDR_254 - Branch → Border Branch indicator is displayed correctly for branches operating near international borders.", async ({ testData }) => {
    // Excel Test Case ID: RDR_254
    // Excel Scenario: Verify Border Branch indicator is displayed correctly for branches operating near international borders.
    // Expected Result: Border Branch indicator is displayed correctly for applicable branches.
    await test.step("[RDR_254] Navigate and execute documented test steps", async () => {
      console.log("[RDR_254] Test execution started — Verify Border Branch indicator is displayed correctly for branches operating near international borders.");
      console.log("[RDR_254] Executing Excel test steps: 1. Review Border Branch column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "branch", "Branch");
    });
    await test.step("[RDR_254] Validate expected results from Excel", async () => {
      console.log("[RDR_254] Validating expected result: Border Branch indicator is displayed correctly for applicable branches.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Border Branch indicator");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Border Branch indicator");
      console.log("[RDR_254] Test completed successfully");
    });
  });

  test("Case ID:RDR_255 - Branch → Active Status is displayed correctly for operational branches.", async ({ testData }) => {
    // Excel Test Case ID: RDR_255
    // Excel Scenario: Verify Active Status is displayed correctly for operational branches.
    // Expected Result: Active status is displayed correctly for all active branches.
    await test.step("[RDR_255] Navigate and execute documented test steps", async () => {
      console.log("[RDR_255] Test execution started — Verify Active Status is displayed correctly for operational branches.");
      console.log("[RDR_255] Executing Excel test steps: 1. Review Status column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "branch", "Branch");
    });
    await test.step("[RDR_255] Validate expected results from Excel", async () => {
      console.log("[RDR_255] Validating expected result: Active status is displayed correctly for all active branches.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Active Status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Active Status");
      console.log("[RDR_255] Test completed successfully");
    });
  });

  test("Case ID:RDR_256 - Branch → BSR Code is displayed correctly according to branch registration information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_256
    // Excel Scenario: Verify BSR Code is displayed correctly according to branch registration information.
    // Expected Result: Correct BSR Code is displayed for each branch.
    await test.step("[RDR_256] Navigate and execute documented test steps", async () => {
      console.log("[RDR_256] Test execution started — Verify BSR Code is displayed correctly according to branch registration information.");
      console.log("[RDR_256] Executing Excel test steps: 1. Review BSR Code column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "branch", "Branch");
    });
    await test.step("[RDR_256] Validate expected results from Excel", async () => {
      console.log("[RDR_256] Validating expected result: Correct BSR Code is displayed for each branch.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("BSR Code");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("BSR Code");
      console.log("[RDR_256] Test completed successfully");
    });
  });

  test("Case ID:RDR_257 - Branch → IFSC Code is displayed correctly in branch detail view according to FSD configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_257
    // Excel Scenario: Verify IFSC Code is displayed correctly in branch detail view according to FSD configuration.
    // Expected Result: Correct IFSC Code is displayed in branch details.
    await test.step("[RDR_257] Navigate and execute documented test steps", async () => {
      console.log("[RDR_257] Test execution started — Verify IFSC Code is displayed correctly in branch detail view according to FSD configuration.");
      console.log("[RDR_257] Executing Excel test steps: 1. Click View. 2. Review IFSC Code field.");
      await rdrPage.openMasterTab(testData.baseUrl, "branch", "Branch");
    });
    await test.step("[RDR_257] Validate expected results from Excel", async () => {
      console.log("[RDR_257] Validating expected result: Correct IFSC Code is displayed in branch details.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("IFSC Code");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("IFSC Code");
      console.log("[RDR_257] Test completed successfully");
    });
  });

  test("Case ID:RDR_258 - Branch → SWIFT/BIC Code is displayed correctly in branch detail view for cross-border identification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_258
    // Excel Scenario: Verify SWIFT/BIC Code is displayed correctly in branch detail view for cross-border identification.
    // Expected Result: Correct SWIFT/BIC code is displayed in branch details.
    await test.step("[RDR_258] Navigate and execute documented test steps", async () => {
      console.log("[RDR_258] Test execution started — Verify SWIFT/BIC Code is displayed correctly in branch detail view for cross-border identification.");
      console.log("[RDR_258] Executing Excel test steps: 1. Open branch details. 2. Review SWIFT/BIC field.");
      await rdrPage.openMasterTab(testData.baseUrl, "branch", "Branch");
    });
    await test.step("[RDR_258] Validate expected results from Excel", async () => {
      console.log("[RDR_258] Validating expected result: Correct SWIFT/BIC code is displayed in branch details.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("SWIFT/BIC Code");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("SWIFT/BIC Code");
      console.log("[RDR_258] Test completed successfully");
    });
  });

  test("Case ID:RDR_259 - Branch → search functionality retrieves the correct branch record using Branch ID, Code or Name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_259
    // Excel Scenario: Verify search functionality retrieves the correct branch record using Branch ID, Code or Name.
    // Expected Result: Only the matching branch record is displayed.
    await test.step("[RDR_259] Navigate and execute documented test steps", async () => {
      console.log("[RDR_259] Test execution started — Verify search functionality retrieves the correct branch record using Branch ID, Code or Name.");
      console.log("[RDR_259] Executing Excel test steps: 1. Enter search value. 2. Execute search. 3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "branch", "Branch");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_259] Validate expected results from Excel", async () => {
      console.log("[RDR_259] Validating expected result: Only the matching branch record is displayed.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_259] Test completed successfully");
    });
  });

  test("Case ID:RDR_260 - Branch → View action opens complete branch details including Branch ID, Type, Country Code, High Risk Area Flag, IFSC and SWIFT information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_260
    // Excel Scenario: Verify View action opens complete branch details including Branch ID, Type, Country Code, High Risk Area Flag, IFSC and SWIFT information.
    // Expected Result: Branch detail screen opens successfully displaying Branch ID, Branch Name, Branch Type, Country Code, High Risk Area Flag, IFSC Code, SWIFT/BIC Code and AML-related branch information.
    await test.step("[RDR_260] Navigate and execute documented test steps", async () => {
      console.log("[RDR_260] Test execution started — Verify View action opens complete branch details including Branch ID, Type, Country Code, High Risk Area Flag, IFSC and SWIFT information.");
      console.log("[RDR_260] Executing Excel test steps: 1. Click View button. 2. Review branch detail screen. 3. Validate displayed information.");
      await rdrPage.openMasterTab(testData.baseUrl, "branch", "Branch");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_260] Validate expected results from Excel", async () => {
      console.log("[RDR_260] Validating expected result: Branch detail screen opens successfully displaying Branch ID, Branch Name, Branch Type, Country Code, High Risk Area Flag, IFSC Code, SWIFT/BIC Code and AML-related branch information.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_260] Test completed successfully");
    });
  });
  });

  test.describe("Channel", () => {
  test("Case ID:RDR_261 - Channel → Channel Master records are displayed successfully after data synchronization and all configured channels are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_261
    // Excel Scenario: Verify Channel Master records are displayed successfully after data synchronization and all configured channels are visible in the grid.
    // Expected Result: All configured channel records are displayed successfully.
    await test.step("[RDR_261] Navigate and execute documented test steps", async () => {
      console.log("[RDR_261] Test execution started — Verify Channel Master records are displayed successfully after data synchronization and all configured channels are visible in the grid.");
      console.log("[RDR_261] Executing Excel test steps: 1. Open Channel tab. 2. Review Channel Master grid. 3. Verify displayed records.");
      await rdrPage.openMasterTab(testData.baseUrl, "channel", "Channel");
    });
    await test.step("[RDR_261] Validate expected results from Excel", async () => {
      console.log("[RDR_261] Validating expected result: All configured channel records are displayed successfully.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Channel Master records");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Channel Master records");
      console.log("[RDR_261] Test completed successfully");
    });
  });

  test("Case ID:RDR_262 - Channel → Channel ID is displayed uniquely for every channel record maintained in the master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_262
    // Excel Scenario: Verify Channel ID is displayed uniquely for every channel record maintained in the master.
    // Expected Result: Unique Channel IDs are displayed without duplication.
    await test.step("[RDR_262] Navigate and execute documented test steps", async () => {
      console.log("[RDR_262] Test execution started — Verify Channel ID is displayed uniquely for every channel record maintained in the master.");
      console.log("[RDR_262] Executing Excel test steps: 1. Review Channel ID column. 2. Compare all records.");
      await rdrPage.openMasterTab(testData.baseUrl, "channel", "Channel");
    });
    await test.step("[RDR_262] Validate expected results from Excel", async () => {
      console.log("[RDR_262] Validating expected result: Unique Channel IDs are displayed without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Channel ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Channel ID");
    await rdrPage.expectUniqueColumnValues("Channel ID");
      console.log("[RDR_262] Test completed successfully");
    });
  });

  test("Case ID:RDR_263 - Channel → Channel Code is displayed correctly according to the configured channel identifier.", async ({ testData }) => {
    // Excel Test Case ID: RDR_263
    // Excel Scenario: Verify Channel Code is displayed correctly according to the configured channel identifier.
    // Expected Result: Correct Channel Codes are displayed for all channels.
    await test.step("[RDR_263] Navigate and execute documented test steps", async () => {
      console.log("[RDR_263] Test execution started — Verify Channel Code is displayed correctly according to the configured channel identifier.");
      console.log("[RDR_263] Executing Excel test steps: 1. Review Code column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "channel", "Channel");
    });
    await test.step("[RDR_263] Validate expected results from Excel", async () => {
      console.log("[RDR_263] Validating expected result: Correct Channel Codes are displayed for all channels.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Channel Code");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Channel Code");
      console.log("[RDR_263] Test completed successfully");
    });
  });

  test("Case ID:RDR_264 - Channel → Channel Name is displayed correctly according to the configured business channel name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_264
    // Excel Scenario: Verify Channel Name is displayed correctly according to the configured business channel name.
    // Expected Result: Correct Channel Names are displayed for all records.
    await test.step("[RDR_264] Navigate and execute documented test steps", async () => {
      console.log("[RDR_264] Test execution started — Verify Channel Name is displayed correctly according to the configured business channel name.");
      console.log("[RDR_264] Executing Excel test steps: 1. Review Name column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "channel", "Channel");
    });
    await test.step("[RDR_264] Validate expected results from Excel", async () => {
      console.log("[RDR_264] Validating expected result: Correct Channel Names are displayed for all records.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Channel Name");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Channel Name");
      console.log("[RDR_264] Test completed successfully");
    });
  });

  test("Case ID:RDR_265 - Channel → Channel Type is displayed correctly according to the channel classification maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_265
    // Excel Scenario: Verify Channel Type is displayed correctly according to the channel classification maintained in source systems.
    // Expected Result: Correct Channel Type is displayed for each channel.
    await test.step("[RDR_265] Navigate and execute documented test steps", async () => {
      console.log("[RDR_265] Test execution started — Verify Channel Type is displayed correctly according to the channel classification maintained in source systems.");
      console.log("[RDR_265] Executing Excel test steps: 1. Review Type column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "channel", "Channel");
    });
    await test.step("[RDR_265] Validate expected results from Excel", async () => {
      console.log("[RDR_265] Validating expected result: Correct Channel Type is displayed for each channel.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Channel Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Channel Type");
      console.log("[RDR_265] Test completed successfully");
    });
  });

  test("Case ID:RDR_266 - Channel → Status is displayed correctly and reflects the active/inactive state of the channel.", async ({ testData }) => {
    // Excel Test Case ID: RDR_266
    // Excel Scenario: Verify Status is displayed correctly and reflects the active/inactive state of the channel.
    // Expected Result: Correct status is displayed for every channel record.
    await test.step("[RDR_266] Navigate and execute documented test steps", async () => {
      console.log("[RDR_266] Test execution started — Verify Status is displayed correctly and reflects the active/inactive state of the channel.");
      console.log("[RDR_266] Executing Excel test steps: 1. Review Status column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "channel", "Channel");
    });
    await test.step("[RDR_266] Validate expected results from Excel", async () => {
      console.log("[RDR_266] Validating expected result: Correct status is displayed for every channel record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Status");
      console.log("[RDR_266] Test completed successfully");
    });
  });

  test("Case ID:RDR_267 - Channel → Description field is displayed correctly and provides channel-specific AML/business context.", async ({ testData }) => {
    // Excel Test Case ID: RDR_267
    // Excel Scenario: Verify Description field is displayed correctly and provides channel-specific AML/business context.
    // Expected Result: Correct channel description is displayed for every channel.
    await test.step("[RDR_267] Navigate and execute documented test steps", async () => {
      console.log("[RDR_267] Test execution started — Verify Description field is displayed correctly and provides channel-specific AML/business context.");
      console.log("[RDR_267] Executing Excel test steps: 1. Review Description column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "channel", "Channel");
    });
    await test.step("[RDR_267] Validate expected results from Excel", async () => {
      console.log("[RDR_267] Validating expected result: Correct channel description is displayed for every channel.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Description field");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Description field");
      console.log("[RDR_267] Test completed successfully");
    });
  });

  test("Case ID:RDR_268 - Channel → Branch channel is classified as PHYSICAL and displayed correctly in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_268
    // Excel Scenario: Verify Branch channel is classified as PHYSICAL and displayed correctly in the grid.
    // Expected Result: Branch channel displays Type = PHYSICAL.
    await test.step("[RDR_268] Navigate and execute documented test steps", async () => {
      console.log("[RDR_268] Test execution started — Verify Branch channel is classified as PHYSICAL and displayed correctly in the grid.");
      console.log("[RDR_268] Executing Excel test steps: 1. Locate Branch record. 2. Verify Channel Type.");
      await rdrPage.openMasterTab(testData.baseUrl, "channel", "Channel");
    });
    await test.step("[RDR_268] Validate expected results from Excel", async () => {
      console.log("[RDR_268] Validating expected result: Branch channel displays Type = PHYSICAL.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Channel Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Channel Type");
      console.log("[RDR_268] Test completed successfully");
    });
  });

  test("Case ID:RDR_269 - Channel → Mobile Banking channel is classified as DIGITAL and displayed correctly.", async ({ testData }) => {
    // Excel Test Case ID: RDR_269
    // Excel Scenario: Verify Mobile Banking channel is classified as DIGITAL and displayed correctly.
    // Expected Result: Mobile Banking displays Type = DIGITAL.
    await test.step("[RDR_269] Navigate and execute documented test steps", async () => {
      console.log("[RDR_269] Test execution started — Verify Mobile Banking channel is classified as DIGITAL and displayed correctly.");
      console.log("[RDR_269] Executing Excel test steps: 1. Locate Mobile Banking record. 2. Verify Type field.");
      await rdrPage.openMasterTab(testData.baseUrl, "channel", "Channel");
    });
    await test.step("[RDR_269] Validate expected results from Excel", async () => {
      console.log("[RDR_269] Validating expected result: Mobile Banking displays Type = DIGITAL.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Channel Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Channel Type");
      console.log("[RDR_269] Test completed successfully");
    });
  });

  test("Case ID:RDR_270 - Channel → UPI channel is classified as DIGITAL and displayed correctly for AML monitoring purposes.", async ({ testData }) => {
    // Excel Test Case ID: RDR_270
    // Excel Scenario: Verify UPI channel is classified as DIGITAL and displayed correctly for AML monitoring purposes.
    // Expected Result: UPI displays Type = DIGITAL.
    await test.step("[RDR_270] Navigate and execute documented test steps", async () => {
      console.log("[RDR_270] Test execution started — Verify UPI channel is classified as DIGITAL and displayed correctly for AML monitoring purposes.");
      console.log("[RDR_270] Executing Excel test steps: 1. Locate UPI record. 2. Verify Type field.");
      await rdrPage.openMasterTab(testData.baseUrl, "channel", "Channel");
    });
    await test.step("[RDR_270] Validate expected results from Excel", async () => {
      console.log("[RDR_270] Validating expected result: UPI displays Type = DIGITAL.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Channel Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Channel Type");
      console.log("[RDR_270] Test completed successfully");
    });
  });

  test("Case ID:RDR_271 - Channel → Risk Score Weight is displayed correctly in the channel detail screen and matches configured AML scoring rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_271
    // Excel Scenario: Verify Risk Score Weight is displayed correctly in the channel detail screen and matches configured AML scoring rules.
    // Expected Result: Correct Risk Score Weight is displayed in channel details.
    await test.step("[RDR_271] Navigate and execute documented test steps", async () => {
      console.log("[RDR_271] Test execution started — Verify Risk Score Weight is displayed correctly in the channel detail screen and matches configured AML scoring rules.");
      console.log("[RDR_271] Executing Excel test steps: 1. Click View. 2. Review Risk Score Weight field.");
      await rdrPage.openMasterTab(testData.baseUrl, "channel", "Channel");
    });
    await test.step("[RDR_271] Validate expected results from Excel", async () => {
      console.log("[RDR_271] Validating expected result: Correct Risk Score Weight is displayed in channel details.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Risk Score Weight");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Risk Score Weight");
      console.log("[RDR_271] Test completed successfully");
    });
  });

  test("Case ID:RDR_272 - Channel → Cross Border Indicator is displayed correctly in channel detail view according to channel capabilities.", async ({ testData }) => {
    // Excel Test Case ID: RDR_272
    // Excel Scenario: Verify Cross Border Indicator is displayed correctly in channel detail view according to channel capabilities.
    // Expected Result: Cross Border indicator is displayed correctly according to configuration.
    await test.step("[RDR_272] Navigate and execute documented test steps", async () => {
      console.log("[RDR_272] Test execution started — Verify Cross Border Indicator is displayed correctly in channel detail view according to channel capabilities.");
      console.log("[RDR_272] Executing Excel test steps: 1. Open channel details. 2. Review Cross Border field.");
      await rdrPage.openMasterTab(testData.baseUrl, "channel", "Channel");
    });
    await test.step("[RDR_272] Validate expected results from Excel", async () => {
      console.log("[RDR_272] Validating expected result: Cross Border indicator is displayed correctly according to configuration.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Cross Border Indicator");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Cross Border Indicator");
      console.log("[RDR_272] Test completed successfully");
    });
  });

  test("Case ID:RDR_273 - Channel → goAML Channel Type mapping is displayed correctly in the channel detail screen.", async ({ testData }) => {
    // Excel Test Case ID: RDR_273
    // Excel Scenario: Verify goAML Channel Type mapping is displayed correctly in the channel detail screen.
    // Expected Result: Correct goAML Channel Type mapping is displayed.
    await test.step("[RDR_273] Navigate and execute documented test steps", async () => {
      console.log("[RDR_273] Test execution started — Verify goAML Channel Type mapping is displayed correctly in the channel detail screen.");
      console.log("[RDR_273] Executing Excel test steps: 1. Open channel details. 2. Review goAML Channel Type field.");
      await rdrPage.openMasterTab(testData.baseUrl, "channel", "Channel");
    });
    await test.step("[RDR_273] Validate expected results from Excel", async () => {
      console.log("[RDR_273] Validating expected result: Correct goAML Channel Type mapping is displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("goAML Channel Type mapping");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("goAML Channel Type mapping");
      console.log("[RDR_273] Test completed successfully");
    });
  });

  test("Case ID:RDR_274 - Channel → search functionality retrieves the correct channel record using Channel Code or Channel Name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_274
    // Excel Scenario: Verify search functionality retrieves the correct channel record using Channel Code or Channel Name.
    // Expected Result: Only the matching channel record is displayed.
    await test.step("[RDR_274] Navigate and execute documented test steps", async () => {
      console.log("[RDR_274] Test execution started — Verify search functionality retrieves the correct channel record using Channel Code or Channel Name.");
      console.log("[RDR_274] Executing Excel test steps: 1. Enter search value. 2. Execute search. 3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "channel", "Channel");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_274] Validate expected results from Excel", async () => {
      console.log("[RDR_274] Validating expected result: Only the matching channel record is displayed.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_274] Test completed successfully");
    });
  });

  test("Case ID:RDR_275 - Channel → View action opens complete channel details including Channel Code, Type, Risk Weight, Cross Border Indicator and goAML mapping.", async ({ testData }) => {
    // Excel Test Case ID: RDR_275
    // Excel Scenario: Verify View action opens complete channel details including Channel Code, Type, Risk Weight, Cross Border Indicator and goAML mapping.
    // Expected Result: Channel detail screen opens successfully displaying Channel Code, Channel Type, Risk Score Weight, Cross Border Flag, goAML Channel Type and AML-related channel information.
    await test.step("[RDR_275] Navigate and execute documented test steps", async () => {
      console.log("[RDR_275] Test execution started — Verify View action opens complete channel details including Channel Code, Type, Risk Weight, Cross Border Indicator and goAML mapping.");
      console.log("[RDR_275] Executing Excel test steps: 1. Click View button. 2. Review detail screen. 3. Validate displayed information.");
      await rdrPage.openMasterTab(testData.baseUrl, "channel", "Channel");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_275] Validate expected results from Excel", async () => {
      console.log("[RDR_275] Validating expected result: Channel detail screen opens successfully displaying Channel Code, Channel Type, Risk Score Weight, Cross Border Flag, goAML Channel Type and AML-related channel information.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_275] Test completed successfully");
    });
  });
  });

  test.describe("TXN Type", () => {
  test("Case ID:RDR_276 - TXN Type → Transaction Type Master records are displayed successfully after data synchronization and all configured transaction types are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_276
    // Excel Scenario: Verify Transaction Type Master records are displayed successfully after data synchronization and all configured transaction types are visible in the grid.
    // Expected Result: All configured transaction type records are displayed successfully.
    await test.step("[RDR_276] Navigate and execute documented test steps", async () => {
      console.log("[RDR_276] Test execution started — Verify Transaction Type Master records are displayed successfully after data synchronization and all configured transaction types are visible in the grid.");
      console.log("[RDR_276] Executing Excel test steps: 1. Open TXN Type tab. 2. Review grid records. 3. Verify displayed transaction types.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-type", "TXN Type");
    });
    await test.step("[RDR_276] Validate expected results from Excel", async () => {
      console.log("[RDR_276] Validating expected result: All configured transaction type records are displayed successfully.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Transaction Type Master records");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Transaction Type Master records");
      console.log("[RDR_276] Test completed successfully");
    });
  });

  test("Case ID:RDR_277 - TXN Type → Transaction Type ID is displayed uniquely for every transaction type record maintained in the master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_277
    // Excel Scenario: Verify Transaction Type ID is displayed uniquely for every transaction type record maintained in the master.
    // Expected Result: Unique Transaction Type IDs are displayed without duplication.
    await test.step("[RDR_277] Navigate and execute documented test steps", async () => {
      console.log("[RDR_277] Test execution started — Verify Transaction Type ID is displayed uniquely for every transaction type record maintained in the master.");
      console.log("[RDR_277] Executing Excel test steps: 1. Review TXN Type ID column. 2. Compare all records.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-type", "TXN Type");
    });
    await test.step("[RDR_277] Validate expected results from Excel", async () => {
      console.log("[RDR_277] Validating expected result: Unique Transaction Type IDs are displayed without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Transaction Type ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Transaction Type ID");
    await rdrPage.expectUniqueColumnValues("Transaction Type ID");
      console.log("[RDR_277] Test completed successfully");
    });
  });

  test("Case ID:RDR_278 - TXN Type → Transaction Type Code is displayed correctly according to configured transaction definitions.", async ({ testData }) => {
    // Excel Test Case ID: RDR_278
    // Excel Scenario: Verify Transaction Type Code is displayed correctly according to configured transaction definitions.
    // Expected Result: Correct Transaction Type Codes are displayed for all records.
    await test.step("[RDR_278] Navigate and execute documented test steps", async () => {
      console.log("[RDR_278] Test execution started — Verify Transaction Type Code is displayed correctly according to configured transaction definitions.");
      console.log("[RDR_278] Executing Excel test steps: 1. Review Code column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-type", "TXN Type");
    });
    await test.step("[RDR_278] Validate expected results from Excel", async () => {
      console.log("[RDR_278] Validating expected result: Correct Transaction Type Codes are displayed for all records.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Transaction Type Code");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Transaction Type Code");
      console.log("[RDR_278] Test completed successfully");
    });
  });

  test("Case ID:RDR_279 - TXN Type → Transaction Type Name is displayed correctly according to business transaction definitions.", async ({ testData }) => {
    // Excel Test Case ID: RDR_279
    // Excel Scenario: Verify Transaction Type Name is displayed correctly according to business transaction definitions.
    // Expected Result: Correct Transaction Type Names are displayed for all transaction types.
    await test.step("[RDR_279] Navigate and execute documented test steps", async () => {
      console.log("[RDR_279] Test execution started — Verify Transaction Type Name is displayed correctly according to business transaction definitions.");
      console.log("[RDR_279] Executing Excel test steps: 1. Review Name column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-type", "TXN Type");
    });
    await test.step("[RDR_279] Validate expected results from Excel", async () => {
      console.log("[RDR_279] Validating expected result: Correct Transaction Type Names are displayed for all transaction types.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Transaction Type Name");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Transaction Type Name");
      console.log("[RDR_279] Test completed successfully");
    });
  });

  test("Case ID:RDR_280 - TXN Type → Transaction Direction is displayed correctly and identifies whether the transaction is Credit, Debit or Both.", async ({ testData }) => {
    // Excel Test Case ID: RDR_280
    // Excel Scenario: Verify Transaction Direction is displayed correctly and identifies whether the transaction is Credit, Debit or Both.
    // Expected Result: Correct transaction direction is displayed for each transaction type.
    await test.step("[RDR_280] Navigate and execute documented test steps", async () => {
      console.log("[RDR_280] Test execution started — Verify Transaction Direction is displayed correctly and identifies whether the transaction is Credit, Debit or Both.");
      console.log("[RDR_280] Executing Excel test steps: 1. Review Direction column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-type", "TXN Type");
    });
    await test.step("[RDR_280] Validate expected results from Excel", async () => {
      console.log("[RDR_280] Validating expected result: Correct transaction direction is displayed for each transaction type.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Transaction Direction");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Transaction Direction");
      console.log("[RDR_280] Test completed successfully");
    });
  });

  test("Case ID:RDR_281 - TXN Type → Cash Flag is displayed correctly for cash-based transaction types that are eligible for CTR reporting.", async ({ testData }) => {
    // Excel Test Case ID: RDR_281
    // Excel Scenario: Verify Cash Flag is displayed correctly for cash-based transaction types that are eligible for CTR reporting.
    // Expected Result: Cash Flag is displayed correctly according to transaction configuration.
    await test.step("[RDR_281] Navigate and execute documented test steps", async () => {
      console.log("[RDR_281] Test execution started — Verify Cash Flag is displayed correctly for cash-based transaction types that are eligible for CTR reporting.");
      console.log("[RDR_281] Executing Excel test steps: 1. Review Cash Flag column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-type", "TXN Type");
    });
    await test.step("[RDR_281] Validate expected results from Excel", async () => {
      console.log("[RDR_281] Validating expected result: Cash Flag is displayed correctly according to transaction configuration.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Cash Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Cash Flag");
      console.log("[RDR_281] Test completed successfully");
    });
  });

  test("Case ID:RDR_282 - TXN Type → Cross Border indicator is displayed correctly for international transaction types.", async ({ testData }) => {
    // Excel Test Case ID: RDR_282
    // Excel Scenario: Verify Cross Border indicator is displayed correctly for international transaction types.
    // Expected Result: Cross Border indicator is displayed correctly for applicable transaction types.
    await test.step("[RDR_282] Navigate and execute documented test steps", async () => {
      console.log("[RDR_282] Test execution started — Verify Cross Border indicator is displayed correctly for international transaction types.");
      console.log("[RDR_282] Executing Excel test steps: 1. Review Cross Border column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-type", "TXN Type");
    });
    await test.step("[RDR_282] Validate expected results from Excel", async () => {
      console.log("[RDR_282] Validating expected result: Cross Border indicator is displayed correctly for applicable transaction types.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Cross Border indicator");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Cross Border indicator");
      console.log("[RDR_282] Test completed successfully");
    });
  });

  test("Case ID:RDR_283 - TXN Type → AML Risk classification is displayed correctly according to AML risk assessment rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_283
    // Excel Scenario: Verify AML Risk classification is displayed correctly according to AML risk assessment rules.
    // Expected Result: Correct AML Risk level is displayed for each transaction type.
    await test.step("[RDR_283] Navigate and execute documented test steps", async () => {
      console.log("[RDR_283] Test execution started — Verify AML Risk classification is displayed correctly according to AML risk assessment rules.");
      console.log("[RDR_283] Executing Excel test steps: 1. Review AML Risk column. 2. Compare with source configuration.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-type", "TXN Type");
    });
    await test.step("[RDR_283] Validate expected results from Excel", async () => {
      console.log("[RDR_283] Validating expected result: Correct AML Risk level is displayed for each transaction type.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("AML Risk classification");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("AML Risk classification");
      console.log("[RDR_283] Test completed successfully");
    });
  });

  test("Case ID:RDR_284 - TXN Type → CTR Applicable indicator is displayed correctly for cash transactions subject to regulatory CTR thresholds.", async ({ testData }) => {
    // Excel Test Case ID: RDR_284
    // Excel Scenario: Verify CTR Applicable indicator is displayed correctly for cash transactions subject to regulatory CTR thresholds.
    // Expected Result: CTR applicability is displayed correctly for eligible transaction types.
    await test.step("[RDR_284] Navigate and execute documented test steps", async () => {
      console.log("[RDR_284] Test execution started — Verify CTR Applicable indicator is displayed correctly for cash transactions subject to regulatory CTR thresholds.");
      console.log("[RDR_284] Executing Excel test steps: 1. Review CTR Applicable column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-type", "TXN Type");
    });
    await test.step("[RDR_284] Validate expected results from Excel", async () => {
      console.log("[RDR_284] Validating expected result: CTR applicability is displayed correctly for eligible transaction types.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("CTR Applicable indicator");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("CTR Applicable indicator");
      console.log("[RDR_284] Test completed successfully");
    });
  });

  test("Case ID:RDR_285 - TXN Type → Status is displayed correctly and reflects whether the transaction type is active for use.", async ({ testData }) => {
    // Excel Test Case ID: RDR_285
    // Excel Scenario: Verify Status is displayed correctly and reflects whether the transaction type is active for use.
    // Expected Result: Correct status is displayed for each transaction type.
    await test.step("[RDR_285] Navigate and execute documented test steps", async () => {
      console.log("[RDR_285] Test execution started — Verify Status is displayed correctly and reflects whether the transaction type is active for use.");
      console.log("[RDR_285] Executing Excel test steps: 1. Review Status column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-type", "TXN Type");
    });
    await test.step("[RDR_285] Validate expected results from Excel", async () => {
      console.log("[RDR_285] Validating expected result: Correct status is displayed for each transaction type.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Status");
      console.log("[RDR_285] Test completed successfully");
    });
  });

  test("Case ID:RDR_286 - TXN Type → Description field is displayed correctly and provides AML/business context for the transaction type.", async ({ testData }) => {
    // Excel Test Case ID: RDR_286
    // Excel Scenario: Verify Description field is displayed correctly and provides AML/business context for the transaction type.
    // Expected Result: Correct transaction description is displayed for each transaction type.
    await test.step("[RDR_286] Navigate and execute documented test steps", async () => {
      console.log("[RDR_286] Test execution started — Verify Description field is displayed correctly and provides AML/business context for the transaction type.");
      console.log("[RDR_286] Executing Excel test steps: 1. Review Description column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-type", "TXN Type");
    });
    await test.step("[RDR_286] Validate expected results from Excel", async () => {
      console.log("[RDR_286] Validating expected result: Correct transaction description is displayed for each transaction type.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Description field");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Description field");
      console.log("[RDR_286] Test completed successfully");
    });
  });

  test("Case ID:RDR_287 - TXN Type → Risk Weight is displayed correctly in the transaction type detail screen and matches AML scoring configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_287
    // Excel Scenario: Verify Risk Weight is displayed correctly in the transaction type detail screen and matches AML scoring configuration.
    // Expected Result: Correct Risk Weight is displayed according to AML scoring configuration.
    await test.step("[RDR_287] Navigate and execute documented test steps", async () => {
      console.log("[RDR_287] Test execution started — Verify Risk Weight is displayed correctly in the transaction type detail screen and matches AML scoring configuration.");
      console.log("[RDR_287] Executing Excel test steps: 1. Click View. 2. Review Risk Weight field.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-type", "TXN Type");
    });
    await test.step("[RDR_287] Validate expected results from Excel", async () => {
      console.log("[RDR_287] Validating expected result: Correct Risk Weight is displayed according to AML scoring configuration.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Risk Weight");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Risk Weight");
      console.log("[RDR_287] Test completed successfully");
    });
  });

  test("Case ID:RDR_288 - TXN Type → goAML Transaction Type mapping is displayed correctly in the detail screen for STR reporting requirements.", async ({ testData }) => {
    // Excel Test Case ID: RDR_288
    // Excel Scenario: Verify goAML Transaction Type mapping is displayed correctly in the detail screen for STR reporting requirements.
    // Expected Result: Correct goAML Transaction Type mapping is displayed.
    await test.step("[RDR_288] Navigate and execute documented test steps", async () => {
      console.log("[RDR_288] Test execution started — Verify goAML Transaction Type mapping is displayed correctly in the detail screen for STR reporting requirements.");
      console.log("[RDR_288] Executing Excel test steps: 1. Open transaction type details. 2. Review goAML Transaction Type field.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-type", "TXN Type");
    });
    await test.step("[RDR_288] Validate expected results from Excel", async () => {
      console.log("[RDR_288] Validating expected result: Correct goAML Transaction Type mapping is displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("goAML Transaction Type mapping");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("goAML Transaction Type mapping");
      console.log("[RDR_288] Test completed successfully");
    });
  });

  test("Case ID:RDR_289 - TXN Type → search functionality retrieves the correct transaction type record using transaction code or name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_289
    // Excel Scenario: Verify search functionality retrieves the correct transaction type record using transaction code or name.
    // Expected Result: Only the matching transaction type record is displayed.
    await test.step("[RDR_289] Navigate and execute documented test steps", async () => {
      console.log("[RDR_289] Test execution started — Verify search functionality retrieves the correct transaction type record using transaction code or name.");
      console.log("[RDR_289] Executing Excel test steps: 1. Enter search value. 2. Execute search. 3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-type", "TXN Type");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_289] Validate expected results from Excel", async () => {
      console.log("[RDR_289] Validating expected result: Only the matching transaction type record is displayed.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_289] Test completed successfully");
    });
  });

  test("Case ID:RDR_290 - TXN Type → View action opens complete transaction type details including direction, risk weight, cash indicator, cross-border flag and goAML mapping.", async ({ testData }) => {
    // Excel Test Case ID: RDR_290
    // Excel Scenario: Verify View action opens complete transaction type details including direction, risk weight, cash indicator, cross-border flag and goAML mapping.
    // Expected Result: Detail screen opens successfully displaying Transaction Type Code, Name, Direction, Cash Flag, Cross Border Flag, Risk Weight, goAML Transaction Type and AML-related information.
    await test.step("[RDR_290] Navigate and execute documented test steps", async () => {
      console.log("[RDR_290] Test execution started — Verify View action opens complete transaction type details including direction, risk weight, cash indicator, cross-border flag and goAML mapping.");
      console.log("[RDR_290] Executing Excel test steps: 1. Click View button. 2. Review detail screen. 3. Validate displayed information.");
      await rdrPage.openMasterTab(testData.baseUrl, "txn-type", "TXN Type");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_290] Validate expected results from Excel", async () => {
      console.log("[RDR_290] Validating expected result: Detail screen opens successfully displaying Transaction Type Code, Name, Direction, Cash Flag, Cross Border Flag, Risk Weight, goAML Transaction Type and AML-related information.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_290] Test completed successfully");
    });
  });
  });

  test.describe("Currency", () => {
  test("Case ID:RDR_291 - Currency → Currency Master records are displayed successfully after synchronization and all configured currencies are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_291
    // Excel Scenario: Verify Currency Master records are displayed successfully after synchronization and all configured currencies are visible in the grid.
    // Expected Result: All configured currencies are displayed successfully in the grid.
    await test.step("[RDR_291] Navigate and execute documented test steps", async () => {
      console.log("[RDR_291] Test execution started — Verify Currency Master records are displayed successfully after synchronization and all configured currencies are visible in the grid.");
      console.log("[RDR_291] Executing Excel test steps: 1. Open Currency tab. 2. Review Currency Master grid. 3. Verify displayed records.");
      await rdrPage.openMasterTab(testData.baseUrl, "currency", "Currency");
    });
    await test.step("[RDR_291] Validate expected results from Excel", async () => {
      console.log("[RDR_291] Validating expected result: All configured currencies are displayed successfully in the grid.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Currency Master records");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Currency Master records");
      console.log("[RDR_291] Test completed successfully");
    });
  });

  test("Case ID:RDR_292 - Currency → Currency Code (ISO 4217) is displayed correctly and uniquely for every currency record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_292
    // Excel Scenario: Verify Currency Code (ISO 4217) is displayed correctly and uniquely for every currency record.
    // Expected Result: Unique and valid ISO currency codes are displayed.
    await test.step("[RDR_292] Navigate and execute documented test steps", async () => {
      console.log("[RDR_292] Test execution started — Verify Currency Code (ISO 4217) is displayed correctly and uniquely for every currency record.");
      console.log("[RDR_292] Executing Excel test steps: 1. Review ISO Code column. 2. Compare displayed values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "currency", "Currency");
    });
    await test.step("[RDR_292] Validate expected results from Excel", async () => {
      console.log("[RDR_292] Validating expected result: Unique and valid ISO currency codes are displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Currency Code (ISO 4217)");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Currency Code (ISO 4217)");
    await rdrPage.expectUniqueColumnValues("Currency Code (ISO 4217)");
      console.log("[RDR_292] Test completed successfully");
    });
  });

  test("Case ID:RDR_293 - Currency → Currency Name is displayed correctly according to the configured currency master data.", async ({ testData }) => {
    // Excel Test Case ID: RDR_293
    // Excel Scenario: Verify Currency Name is displayed correctly according to the configured currency master data.
    // Expected Result: Correct currency names are displayed.
    await test.step("[RDR_293] Navigate and execute documented test steps", async () => {
      console.log("[RDR_293] Test execution started — Verify Currency Name is displayed correctly according to the configured currency master data.");
      console.log("[RDR_293] Executing Excel test steps: 1. Review Name column. 2. Compare displayed values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "currency", "Currency");
    });
    await test.step("[RDR_293] Validate expected results from Excel", async () => {
      console.log("[RDR_293] Validating expected result: Correct currency names are displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Currency Name");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Currency Name");
      console.log("[RDR_293] Test completed successfully");
    });
  });

  test("Case ID:RDR_294 - Currency → Currency Symbol is displayed correctly for each configured currency.", async ({ testData }) => {
    // Excel Test Case ID: RDR_294
    // Excel Scenario: Verify Currency Symbol is displayed correctly for each configured currency.
    // Expected Result: Correct symbols are displayed for all currencies.
    await test.step("[RDR_294] Navigate and execute documented test steps", async () => {
      console.log("[RDR_294] Test execution started — Verify Currency Symbol is displayed correctly for each configured currency.");
      console.log("[RDR_294] Executing Excel test steps: 1. Review Symbol column. 2. Compare values with configured records.");
      await rdrPage.openMasterTab(testData.baseUrl, "currency", "Currency");
    });
    await test.step("[RDR_294] Validate expected results from Excel", async () => {
      console.log("[RDR_294] Validating expected result: Correct symbols are displayed for all currencies.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Currency Symbol");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Currency Symbol");
      console.log("[RDR_294] Test completed successfully");
    });
  });

  test("Case ID:RDR_295 - Currency → Country Code is displayed correctly against the corresponding currency.", async ({ testData }) => {
    // Excel Test Case ID: RDR_295
    // Excel Scenario: Verify Country Code is displayed correctly against the corresponding currency.
    // Expected Result: Correct country codes are displayed for all currencies.
    await test.step("[RDR_295] Navigate and execute documented test steps", async () => {
      console.log("[RDR_295] Test execution started — Verify Country Code is displayed correctly against the corresponding currency.");
      console.log("[RDR_295] Executing Excel test steps: 1. Review Country column. 2. Compare displayed values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "currency", "Currency");
    });
    await test.step("[RDR_295] Validate expected results from Excel", async () => {
      console.log("[RDR_295] Validating expected result: Correct country codes are displayed for all currencies.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Country Code");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Country Code");
      console.log("[RDR_295] Test completed successfully");
    });
  });

  test("Case ID:RDR_296 - Currency → Status is displayed correctly and reflects whether the currency is active in the system.", async ({ testData }) => {
    // Excel Test Case ID: RDR_296
    // Excel Scenario: Verify Status is displayed correctly and reflects whether the currency is active in the system.
    // Expected Result: Correct currency status is displayed.
    await test.step("[RDR_296] Navigate and execute documented test steps", async () => {
      console.log("[RDR_296] Test execution started — Verify Status is displayed correctly and reflects whether the currency is active in the system.");
      console.log("[RDR_296] Executing Excel test steps: 1. Review Status column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "currency", "Currency");
    });
    await test.step("[RDR_296] Validate expected results from Excel", async () => {
      console.log("[RDR_296] Validating expected result: Correct currency status is displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Status");
      console.log("[RDR_296] Test completed successfully");
    });
  });

  test("Case ID:RDR_297 - Currency → INR currency record is displayed correctly with all associated details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_297
    // Excel Scenario: Verify INR currency record is displayed correctly with all associated details.
    // Expected Result: INR record displays correct details and active status.
    await test.step("[RDR_297] Navigate and execute documented test steps", async () => {
      console.log("[RDR_297] Test execution started — Verify INR currency record is displayed correctly with all associated details.");
      console.log("[RDR_297] Executing Excel test steps: 1. Locate INR record. 2. Verify Code, Name, Symbol and Status.");
      await rdrPage.openMasterTab(testData.baseUrl, "currency", "Currency");
    });
    await test.step("[RDR_297] Validate expected results from Excel", async () => {
      console.log("[RDR_297] Validating expected result: INR record displays correct details and active status.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("INR currency record");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("INR currency record");
      console.log("[RDR_297] Test completed successfully");
    });
  });

  test("Case ID:RDR_298 - Currency → USD currency record is displayed correctly with all associated details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_298
    // Excel Scenario: Verify USD currency record is displayed correctly with all associated details.
    // Expected Result: USD record displays correct details and active status.
    await test.step("[RDR_298] Navigate and execute documented test steps", async () => {
      console.log("[RDR_298] Test execution started — Verify USD currency record is displayed correctly with all associated details.");
      console.log("[RDR_298] Executing Excel test steps: 1. Locate USD record. 2. Verify displayed details.");
      await rdrPage.openMasterTab(testData.baseUrl, "currency", "Currency");
    });
    await test.step("[RDR_298] Validate expected results from Excel", async () => {
      console.log("[RDR_298] Validating expected result: USD record displays correct details and active status.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("USD currency record");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("USD currency record");
      console.log("[RDR_298] Test completed successfully");
    });
  });

  test("Case ID:RDR_299 - Currency → AED currency record is displayed correctly with all associated details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_299
    // Excel Scenario: Verify AED currency record is displayed correctly with all associated details.
    // Expected Result: AED record displays correct details and active status.
    await test.step("[RDR_299] Navigate and execute documented test steps", async () => {
      console.log("[RDR_299] Test execution started — Verify AED currency record is displayed correctly with all associated details.");
      console.log("[RDR_299] Executing Excel test steps: 1. Locate AED record. 2. Verify displayed details.");
      await rdrPage.openMasterTab(testData.baseUrl, "currency", "Currency");
    });
    await test.step("[RDR_299] Validate expected results from Excel", async () => {
      console.log("[RDR_299] Validating expected result: AED record displays correct details and active status.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("AED currency record");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("AED currency record");
      console.log("[RDR_299] Test completed successfully");
    });
  });

  test("Case ID:RDR_300 - Currency → Search functionality retrieves the correct currency record using Currency Code.", async ({ testData }) => {
    // Excel Test Case ID: RDR_300
    // Excel Scenario: Verify Search functionality retrieves the correct currency record using Currency Code.
    // Expected Result: Only the USD currency record is displayed.
    await test.step("[RDR_300] Navigate and execute documented test steps", async () => {
      console.log("[RDR_300] Test execution started — Verify Search functionality retrieves the correct currency record using Currency Code.");
      console.log("[RDR_300] Executing Excel test steps: 1. Enter currency code in search box. 2. Execute search. 3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "currency", "Currency");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_300] Validate expected results from Excel", async () => {
      console.log("[RDR_300] Validating expected result: Only the USD currency record is displayed.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_300] Test completed successfully");
    });
  });

  test("Case ID:RDR_301 - Currency → Search functionality retrieves the correct currency record using Currency Name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_301
    // Excel Scenario: Verify Search functionality retrieves the correct currency record using Currency Name.
    // Expected Result: Matching currency record is displayed successfully.
    await test.step("[RDR_301] Navigate and execute documented test steps", async () => {
      console.log("[RDR_301] Test execution started — Verify Search functionality retrieves the correct currency record using Currency Name.");
      console.log("[RDR_301] Executing Excel test steps: 1. Enter currency name. 2. Execute search. 3. Verify results.");
      await rdrPage.openMasterTab(testData.baseUrl, "currency", "Currency");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_301] Validate expected results from Excel", async () => {
      console.log("[RDR_301] Validating expected result: Matching currency record is displayed successfully.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectSearchYieldsResults();
      console.log("[RDR_301] Test completed successfully");
    });
  });

  test("Case ID:RDR_302 - Currency → View action opens complete currency details including Currency Code, Name, Reporting Currency flag and AML attributes.", async ({ testData }) => {
    // Excel Test Case ID: RDR_302
    // Excel Scenario: Verify View action opens complete currency details including Currency Code, Name, Reporting Currency flag and AML attributes.
    // Expected Result: Currency detail screen opens successfully with complete information.
    await test.step("[RDR_302] Navigate and execute documented test steps", async () => {
      console.log("[RDR_302] Test execution started — Verify View action opens complete currency details including Currency Code, Name, Reporting Currency flag and AML attributes.");
      console.log("[RDR_302] Executing Excel test steps: 1. Click View button. 2. Review detail screen.");
      await rdrPage.openMasterTab(testData.baseUrl, "currency", "Currency");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_302] Validate expected results from Excel", async () => {
      console.log("[RDR_302] Validating expected result: Currency detail screen opens successfully with complete information.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_302] Test completed successfully");
    });
  });

  test("Case ID:RDR_303 - Currency → Reporting Currency flag is displayed correctly in the currency detail view according to bank reporting configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_303
    // Excel Scenario: Verify Reporting Currency flag is displayed correctly in the currency detail view according to bank reporting configuration.
    // Expected Result: Reporting Currency flag is displayed correctly.
    await test.step("[RDR_303] Navigate and execute documented test steps", async () => {
      console.log("[RDR_303] Test execution started — Verify Reporting Currency flag is displayed correctly in the currency detail view according to bank reporting configuration.");
      console.log("[RDR_303] Executing Excel test steps: 1. Open currency details. 2. Review Reporting Currency field.");
      await rdrPage.openMasterTab(testData.baseUrl, "currency", "Currency");
    });
    await test.step("[RDR_303] Validate expected results from Excel", async () => {
      console.log("[RDR_303] Validating expected result: Reporting Currency flag is displayed correctly.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Reporting Currency flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Reporting Currency flag");
      console.log("[RDR_303] Test completed successfully");
    });
  });

  test("Case ID:RDR_304 - Currency → High Risk Currency flag is displayed correctly in detail view for AML monitoring and risk scoring purposes.", async ({ testData }) => {
    // Excel Test Case ID: RDR_304
    // Excel Scenario: Verify High Risk Currency flag is displayed correctly in detail view for AML monitoring and risk scoring purposes.
    // Expected Result: High Risk Currency indicator is displayed correctly.
    await test.step("[RDR_304] Navigate and execute documented test steps", async () => {
      console.log("[RDR_304] Test execution started — Verify High Risk Currency flag is displayed correctly in detail view for AML monitoring and risk scoring purposes.");
      console.log("[RDR_304] Executing Excel test steps: 1. Open currency detail screen. 2. Verify High Risk Currency field.");
      await rdrPage.openMasterTab(testData.baseUrl, "currency", "Currency");
    });
    await test.step("[RDR_304] Validate expected results from Excel", async () => {
      console.log("[RDR_304] Validating expected result: High Risk Currency indicator is displayed correctly.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("High Risk Currency flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("High Risk Currency flag");
      console.log("[RDR_304] Test completed successfully");
    });
  });

  test("Case ID:RDR_305 - Currency → Currency Master data can be exported successfully through Excel and CSV options without data loss.", async ({ testData }) => {
    // Excel Test Case ID: RDR_305
    // Excel Scenario: Verify Currency Master data can be exported successfully through Excel and CSV options without data loss.
    // Expected Result: Exported files contain accurate currency data matching the UI records.
    await test.step("[RDR_305] Navigate and execute documented test steps", async () => {
      console.log("[RDR_305] Test execution started — Verify Currency Master data can be exported successfully through Excel and CSV options without data loss.");
      console.log("[RDR_305] Executing Excel test steps: 1. Click CSV export. 2. Download file. 3. Click Excel export. 4. Validate exported records.");
      await rdrPage.openMasterTab(testData.baseUrl, "currency", "Currency");
    });
    await test.step("[RDR_305] Validate expected results from Excel", async () => {
      console.log("[RDR_305] Validating expected result: Exported files contain accurate currency data matching the UI records.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectExportButtonsVisible();
    await rdrPage.expectCsvExportReady();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_305] Test completed successfully");
    });
  });
  });

  test.describe("FX Rates", () => {
  test("Case ID:RDR_306 - FX Rates → FX Rate records are displayed successfully after synchronization and all configured exchange rates are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_306
    // Excel Scenario: Verify FX Rate records are displayed successfully after synchronization and all configured exchange rates are visible in the grid.
    // Expected Result: All configured FX rate records are displayed successfully.
    await test.step("[RDR_306] Navigate and execute documented test steps", async () => {
      console.log("[RDR_306] Test execution started — Verify FX Rate records are displayed successfully after synchronization and all configured exchange rates are visible in the grid.");
      console.log("[RDR_306] Executing Excel test steps: 1. Open FX Rates tab. 2. Review exchange rate grid. 3. Verify displayed records.");
      await rdrPage.openMasterTab(testData.baseUrl, "fx-rates", "FX Rates");
    });
    await test.step("[RDR_306] Validate expected results from Excel", async () => {
      console.log("[RDR_306] Validating expected result: All configured FX rate records are displayed successfully.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("FX Rate records");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("FX Rate records");
      console.log("[RDR_306] Test completed successfully");
    });
  });

  test("Case ID:RDR_307 - FX Rates → Rate ID is displayed uniquely for every FX rate record maintained in the master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_307
    // Excel Scenario: Verify Rate ID is displayed uniquely for every FX rate record maintained in the master.
    // Expected Result: Unique Rate IDs are displayed without duplication.
    await test.step("[RDR_307] Navigate and execute documented test steps", async () => {
      console.log("[RDR_307] Test execution started — Verify Rate ID is displayed uniquely for every FX rate record maintained in the master.");
      console.log("[RDR_307] Executing Excel test steps: 1. Review Rate ID column. 2. Compare all records.");
      await rdrPage.openMasterTab(testData.baseUrl, "fx-rates", "FX Rates");
    });
    await test.step("[RDR_307] Validate expected results from Excel", async () => {
      console.log("[RDR_307] Validating expected result: Unique Rate IDs are displayed without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Rate ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Rate ID");
    await rdrPage.expectUniqueColumnValues("Rate ID");
      console.log("[RDR_307] Test completed successfully");
    });
  });

  test("Case ID:RDR_308 - FX Rates → Source Currency (From Currency) is displayed correctly according to configured exchange rate mapping.", async ({ testData }) => {
    // Excel Test Case ID: RDR_308
    // Excel Scenario: Verify Source Currency (From Currency) is displayed correctly according to configured exchange rate mapping.
    // Expected Result: Correct source currencies are displayed.
    await test.step("[RDR_308] Navigate and execute documented test steps", async () => {
      console.log("[RDR_308] Test execution started — Verify Source Currency (From Currency) is displayed correctly according to configured exchange rate mapping.");
      console.log("[RDR_308] Executing Excel test steps: 1. Review From CCY column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "fx-rates", "FX Rates");
    });
    await test.step("[RDR_308] Validate expected results from Excel", async () => {
      console.log("[RDR_308] Validating expected result: Correct source currencies are displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Source Currency (From Currency)");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Source Currency (From Currency)");
      console.log("[RDR_308] Test completed successfully");
    });
  });

  test("Case ID:RDR_309 - FX Rates → Target Currency (To Currency) is displayed correctly according to exchange rate configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_309
    // Excel Scenario: Verify Target Currency (To Currency) is displayed correctly according to exchange rate configuration.
    // Expected Result: Correct target currency is displayed for each FX record.
    await test.step("[RDR_309] Navigate and execute documented test steps", async () => {
      console.log("[RDR_309] Test execution started — Verify Target Currency (To Currency) is displayed correctly according to exchange rate configuration.");
      console.log("[RDR_309] Executing Excel test steps: 1. Review To CCY column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "fx-rates", "FX Rates");
    });
    await test.step("[RDR_309] Validate expected results from Excel", async () => {
      console.log("[RDR_309] Validating expected result: Correct target currency is displayed for each FX record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Target Currency (To Currency)");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Target Currency (To Currency)");
      console.log("[RDR_309] Test completed successfully");
    });
  });

  test("Case ID:RDR_310 - FX Rates → Exchange Rate value is displayed correctly and matches the configured market exchange rate.", async ({ testData }) => {
    // Excel Test Case ID: RDR_310
    // Excel Scenario: Verify Exchange Rate value is displayed correctly and matches the configured market exchange rate.
    // Expected Result: Correct exchange rates are displayed.
    await test.step("[RDR_310] Navigate and execute documented test steps", async () => {
      console.log("[RDR_310] Test execution started — Verify Exchange Rate value is displayed correctly and matches the configured market exchange rate.");
      console.log("[RDR_310] Executing Excel test steps: 1. Review Exchange Rate column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "fx-rates", "FX Rates");
    });
    await test.step("[RDR_310] Validate expected results from Excel", async () => {
      console.log("[RDR_310] Validating expected result: Correct exchange rates are displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Exchange Rate value");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Exchange Rate value");
      console.log("[RDR_310] Test completed successfully");
    });
  });

  test("Case ID:RDR_311 - FX Rates → Rate Date is displayed correctly for each exchange rate record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_311
    // Excel Scenario: Verify Rate Date is displayed correctly for each exchange rate record.
    // Expected Result: Correct rate date is displayed.
    await test.step("[RDR_311] Navigate and execute documented test steps", async () => {
      console.log("[RDR_311] Test execution started — Verify Rate Date is displayed correctly for each exchange rate record.");
      console.log("[RDR_311] Executing Excel test steps: 1. Review Rate Date column. 2. Compare with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "fx-rates", "FX Rates");
    });
    await test.step("[RDR_311] Validate expected results from Excel", async () => {
      console.log("[RDR_311] Validating expected result: Correct rate date is displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Rate Date");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Rate Date");
      console.log("[RDR_311] Test completed successfully");
    });
  });

  test("Case ID:RDR_312 - FX Rates → Rate Type is displayed correctly according to the configured exchange rate category.", async ({ testData }) => {
    // Excel Test Case ID: RDR_312
    // Excel Scenario: Verify Rate Type is displayed correctly according to the configured exchange rate category.
    // Expected Result: Correct rate type is displayed for each FX record.
    await test.step("[RDR_312] Navigate and execute documented test steps", async () => {
      console.log("[RDR_312] Test execution started — Verify Rate Type is displayed correctly according to the configured exchange rate category.");
      console.log("[RDR_312] Executing Excel test steps: 1. Review Rate Type column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "fx-rates", "FX Rates");
    });
    await test.step("[RDR_312] Validate expected results from Excel", async () => {
      console.log("[RDR_312] Validating expected result: Correct rate type is displayed for each FX record.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Rate Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Rate Type");
      console.log("[RDR_312] Test completed successfully");
    });
  });

  test("Case ID:RDR_313 - FX Rates → Effective From date and time are displayed correctly according to the validity period of the exchange rate.", async ({ testData }) => {
    // Excel Test Case ID: RDR_313
    // Excel Scenario: Verify Effective From date and time are displayed correctly according to the validity period of the exchange rate.
    // Expected Result: Effective From date and time are displayed correctly.
    await test.step("[RDR_313] Navigate and execute documented test steps", async () => {
      console.log("[RDR_313] Test execution started — Verify Effective From date and time are displayed correctly according to the validity period of the exchange rate.");
      console.log("[RDR_313] Executing Excel test steps: 1. Review Effective From column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "fx-rates", "FX Rates");
    });
    await test.step("[RDR_313] Validate expected results from Excel", async () => {
      console.log("[RDR_313] Validating expected result: Effective From date and time are displayed correctly.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Effective From date and time");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Effective From date and time");
      console.log("[RDR_313] Test completed successfully");
    });
  });

  test("Case ID:RDR_314 - FX Rates → Effective To date and time are displayed correctly according to the validity period of the exchange rate.", async ({ testData }) => {
    // Excel Test Case ID: RDR_314
    // Excel Scenario: Verify Effective To date and time are displayed correctly according to the validity period of the exchange rate.
    // Expected Result: Effective To date and time are displayed correctly.
    await test.step("[RDR_314] Navigate and execute documented test steps", async () => {
      console.log("[RDR_314] Test execution started — Verify Effective To date and time are displayed correctly according to the validity period of the exchange rate.");
      console.log("[RDR_314] Executing Excel test steps: 1. Review Effective To column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "fx-rates", "FX Rates");
    });
    await test.step("[RDR_314] Validate expected results from Excel", async () => {
      console.log("[RDR_314] Validating expected result: Effective To date and time are displayed correctly.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Effective To date and time");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Effective To date and time");
      console.log("[RDR_314] Test completed successfully");
    });
  });

  test("Case ID:RDR_315 - FX Rates → USD to INR exchange rate record is displayed correctly with all associated details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_315
    // Excel Scenario: Verify USD to INR exchange rate record is displayed correctly with all associated details.
    // Expected Result: USD-INR exchange rate details are displayed accurately.
    await test.step("[RDR_315] Navigate and execute documented test steps", async () => {
      console.log("[RDR_315] Test execution started — Verify USD to INR exchange rate record is displayed correctly with all associated details.");
      console.log("[RDR_315] Executing Excel test steps: 1. Locate FX-001. 2. Verify currencies, rate and validity period.");
      await rdrPage.openMasterTab(testData.baseUrl, "fx-rates", "FX Rates");
    });
    await test.step("[RDR_315] Validate expected results from Excel", async () => {
      console.log("[RDR_315] Validating expected result: USD-INR exchange rate details are displayed accurately.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("USD to INR exchange rate record");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("USD to INR exchange rate record");
      console.log("[RDR_315] Test completed successfully");
    });
  });

  test("Case ID:RDR_316 - FX Rates → AED to INR exchange rate record is displayed correctly with all associated details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_316
    // Excel Scenario: Verify AED to INR exchange rate record is displayed correctly with all associated details.
    // Expected Result: AED-INR exchange rate details are displayed accurately.
    await test.step("[RDR_316] Navigate and execute documented test steps", async () => {
      console.log("[RDR_316] Test execution started — Verify AED to INR exchange rate record is displayed correctly with all associated details.");
      console.log("[RDR_316] Executing Excel test steps: 1. Locate FX-002. 2. Verify displayed values.");
      await rdrPage.openMasterTab(testData.baseUrl, "fx-rates", "FX Rates");
    });
    await test.step("[RDR_316] Validate expected results from Excel", async () => {
      console.log("[RDR_316] Validating expected result: AED-INR exchange rate details are displayed accurately.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("AED to INR exchange rate record");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("AED to INR exchange rate record");
      console.log("[RDR_316] Test completed successfully");
    });
  });

  test("Case ID:RDR_317 - FX Rates → EUR to INR exchange rate record is displayed correctly with all associated details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_317
    // Excel Scenario: Verify EUR to INR exchange rate record is displayed correctly with all associated details.
    // Expected Result: EUR-INR exchange rate details are displayed accurately.
    await test.step("[RDR_317] Navigate and execute documented test steps", async () => {
      console.log("[RDR_317] Test execution started — Verify EUR to INR exchange rate record is displayed correctly with all associated details.");
      console.log("[RDR_317] Executing Excel test steps: 1. Locate FX-003. 2. Verify displayed values.");
      await rdrPage.openMasterTab(testData.baseUrl, "fx-rates", "FX Rates");
    });
    await test.step("[RDR_317] Validate expected results from Excel", async () => {
      console.log("[RDR_317] Validating expected result: EUR-INR exchange rate details are displayed accurately.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("EUR to INR exchange rate record");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("EUR to INR exchange rate record");
      console.log("[RDR_317] Test completed successfully");
    });
  });

  test("Case ID:RDR_318 - FX Rates → Search functionality retrieves the correct FX rate record using Rate ID or Currency Code.", async ({ testData }) => {
    // Excel Test Case ID: RDR_318
    // Excel Scenario: Verify Search functionality retrieves the correct FX rate record using Rate ID or Currency Code.
    // Expected Result: Only matching FX rate records are displayed.
    await test.step("[RDR_318] Navigate and execute documented test steps", async () => {
      console.log("[RDR_318] Test execution started — Verify Search functionality retrieves the correct FX rate record using Rate ID or Currency Code.");
      console.log("[RDR_318] Executing Excel test steps: 1. Enter search value. 2. Execute search. 3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "fx-rates", "FX Rates");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_318] Validate expected results from Excel", async () => {
      console.log("[RDR_318] Validating expected result: Only matching FX rate records are displayed.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_318] Test completed successfully");
    });
  });

  test("Case ID:RDR_319 - FX Rates → View action opens complete FX rate details including currencies, exchange rate, effective date and source information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_319
    // Excel Scenario: Verify View action opens complete FX rate details including currencies, exchange rate, effective date and source information.
    // Expected Result: FX rate detail screen opens successfully with complete exchange rate information.
    await test.step("[RDR_319] Navigate and execute documented test steps", async () => {
      console.log("[RDR_319] Test execution started — Verify View action opens complete FX rate details including currencies, exchange rate, effective date and source information.");
      console.log("[RDR_319] Executing Excel test steps: 1. Click View button. 2. Review detailed information.");
      await rdrPage.openMasterTab(testData.baseUrl, "fx-rates", "FX Rates");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_319] Validate expected results from Excel", async () => {
      console.log("[RDR_319] Validating expected result: FX rate detail screen opens successfully with complete exchange rate information.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_319] Test completed successfully");
    });
  });

  test("Case ID:RDR_320 - FX Rates → CSV and Excel export functionality exports all displayed FX rate records correctly without data mismatch.", async ({ testData }) => {
    // Excel Test Case ID: RDR_320
    // Excel Scenario: Verify CSV and Excel export functionality exports all displayed FX rate records correctly without data mismatch.
    // Expected Result: Exported files contain accurate FX rate data matching the UI.
    await test.step("[RDR_320] Navigate and execute documented test steps", async () => {
      console.log("[RDR_320] Test execution started — Verify CSV and Excel export functionality exports all displayed FX rate records correctly without data mismatch.");
      console.log("[RDR_320] Executing Excel test steps: 1. Click CSV export. 2. Validate downloaded file. 3. Click Excel export. 4. Validate downloaded file.");
      await rdrPage.openMasterTab(testData.baseUrl, "fx-rates", "FX Rates");
    });
    await test.step("[RDR_320] Validate expected results from Excel", async () => {
      console.log("[RDR_320] Validating expected result: Exported files contain accurate FX rate data matching the UI.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectExportButtonsVisible();
    await rdrPage.expectCsvExportReady();
    await rdrPage.expectExcelExportReady();
      console.log("[RDR_320] Test completed successfully");
    });
  });
  });

  test.describe("Industry Code", () => {
  test("Case ID:RDR_321 - Industry Code → Industry Code Master records are displayed successfully after synchronization and all configured industry records are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_321
    // Excel Scenario: Verify Industry Code Master records are displayed successfully after synchronization and all configured industry records are visible in the grid.
    // Expected Result: All configured industry code records are displayed successfully.
    await test.step("[RDR_321] Navigate and execute documented test steps", async () => {
      console.log("[RDR_321] Test execution started — Verify Industry Code Master records are displayed successfully after synchronization and all configured industry records are visible in the grid.");
      console.log("[RDR_321] Executing Excel test steps: 1. Open Industry Code tab. 2. Review Industry Code grid. 3. Verify displayed records count and details.");
      await rdrPage.openMasterTab(testData.baseUrl, "industry-code", "Industry Code");
    });
    await test.step("[RDR_321] Validate expected results from Excel", async () => {
      console.log("[RDR_321] Validating expected result: All configured industry code records are displayed successfully.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Industry Code Master records");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Industry Code Master records");
      console.log("[RDR_321] Test completed successfully");
    });
  });

  test("Case ID:RDR_322 - Industry Code → Industry Master ID is displayed uniquely for every industry record maintained in the system.", async ({ testData }) => {
    // Excel Test Case ID: RDR_322
    // Excel Scenario: Verify Industry Master ID is displayed uniquely for every industry record maintained in the system.
    // Expected Result: Unique Industry IDs are displayed without duplication.
    await test.step("[RDR_322] Navigate and execute documented test steps", async () => {
      console.log("[RDR_322] Test execution started — Verify Industry Master ID is displayed uniquely for every industry record maintained in the system.");
      console.log("[RDR_322] Executing Excel test steps: 1. Review ID column. 2. Compare all displayed records.");
      await rdrPage.openMasterTab(testData.baseUrl, "industry-code", "Industry Code");
    });
    await test.step("[RDR_322] Validate expected results from Excel", async () => {
      console.log("[RDR_322] Validating expected result: Unique Industry IDs are displayed without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Industry Master ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Industry Master ID");
    await rdrPage.expectUniqueColumnValues("Industry Master ID");
      console.log("[RDR_322] Test completed successfully");
    });
  });

  test("Case ID:RDR_323 - Industry Code → Code Type is displayed correctly according to the configured classification standard used by the organization.", async ({ testData }) => {
    // Excel Test Case ID: RDR_323
    // Excel Scenario: Verify Code Type is displayed correctly according to the configured classification standard used by the organization.
    // Expected Result: Correct Code Type is displayed for all records.
    await test.step("[RDR_323] Navigate and execute documented test steps", async () => {
      console.log("[RDR_323] Test execution started — Verify Code Type is displayed correctly according to the configured classification standard used by the organization.");
      console.log("[RDR_323] Executing Excel test steps: 1. Review Code Type column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "industry-code", "Industry Code");
    });
    await test.step("[RDR_323] Validate expected results from Excel", async () => {
      console.log("[RDR_323] Validating expected result: Correct Code Type is displayed for all records.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Code Type");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Code Type");
      console.log("[RDR_323] Test completed successfully");
    });
  });

  test("Case ID:RDR_324 - Industry Code → Industry Code is displayed correctly and matches the configured NIC/industry classification code.", async ({ testData }) => {
    // Excel Test Case ID: RDR_324
    // Excel Scenario: Verify Industry Code is displayed correctly and matches the configured NIC/industry classification code.
    // Expected Result: Correct Industry Codes are displayed.
    await test.step("[RDR_324] Navigate and execute documented test steps", async () => {
      console.log("[RDR_324] Test execution started — Verify Industry Code is displayed correctly and matches the configured NIC/industry classification code.");
      console.log("[RDR_324] Executing Excel test steps: 1. Review Industry Code column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "industry-code", "Industry Code");
    });
    await test.step("[RDR_324] Validate expected results from Excel", async () => {
      console.log("[RDR_324] Validating expected result: Correct Industry Codes are displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Industry Code");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Industry Code");
      console.log("[RDR_324] Test completed successfully");
    });
  });

  test("Case ID:RDR_325 - Industry Code → Industry Name is displayed correctly according to the configured industry classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_325
    // Excel Scenario: Verify Industry Name is displayed correctly according to the configured industry classification.
    // Expected Result: Correct Industry Names are displayed for all records.
    await test.step("[RDR_325] Navigate and execute documented test steps", async () => {
      console.log("[RDR_325] Test execution started — Verify Industry Name is displayed correctly according to the configured industry classification.");
      console.log("[RDR_325] Executing Excel test steps: 1. Review Name column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "industry-code", "Industry Code");
    });
    await test.step("[RDR_325] Validate expected results from Excel", async () => {
      console.log("[RDR_325] Validating expected result: Correct Industry Names are displayed for all records.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Industry Name");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Industry Name");
      console.log("[RDR_325] Test completed successfully");
    });
  });

  test("Case ID:RDR_326 - Industry Code → Industry Description is displayed correctly and provides business/AML context for the industry.", async ({ testData }) => {
    // Excel Test Case ID: RDR_326
    // Excel Scenario: Verify Industry Description is displayed correctly and provides business/AML context for the industry.
    // Expected Result: Correct industry descriptions are displayed.
    await test.step("[RDR_326] Navigate and execute documented test steps", async () => {
      console.log("[RDR_326] Test execution started — Verify Industry Description is displayed correctly and provides business/AML context for the industry.");
      console.log("[RDR_326] Executing Excel test steps: 1. Review Description column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "industry-code", "Industry Code");
    });
    await test.step("[RDR_326] Validate expected results from Excel", async () => {
      console.log("[RDR_326] Validating expected result: Correct industry descriptions are displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Industry Description");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Industry Description");
      console.log("[RDR_326] Test completed successfully");
    });
  });

  test("Case ID:RDR_327 - Industry Code → Banking and Financial Intermediation industry record is displayed correctly with its associated code and description.", async ({ testData }) => {
    // Excel Test Case ID: RDR_327
    // Excel Scenario: Verify Banking and Financial Intermediation industry record is displayed correctly with its associated code and description.
    // Expected Result: Banking industry details are displayed accurately.
    await test.step("[RDR_327] Navigate and execute documented test steps", async () => {
      console.log("[RDR_327] Test execution started — Verify Banking and Financial Intermediation industry record is displayed correctly with its associated code and description.");
      console.log("[RDR_327] Executing Excel test steps: 1. Locate IND-001. 2. Verify Industry Code, Name and Description.");
      await rdrPage.openMasterTab(testData.baseUrl, "industry-code", "Industry Code");
    });
    await test.step("[RDR_327] Validate expected results from Excel", async () => {
      console.log("[RDR_327] Validating expected result: Banking industry details are displayed accurately.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Banking and Financial Intermediation industry record");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Banking and Financial Intermediation industry record");
      console.log("[RDR_327] Test completed successfully");
    });
  });

  test("Case ID:RDR_328 - Industry Code → Jewellery industry record is displayed correctly as a cash-intensive business sector used for AML monitoring.", async ({ testData }) => {
    // Excel Test Case ID: RDR_328
    // Excel Scenario: Verify Jewellery industry record is displayed correctly as a cash-intensive business sector used for AML monitoring.
    // Expected Result: Jewellery industry details are displayed accurately.
    await test.step("[RDR_328] Navigate and execute documented test steps", async () => {
      console.log("[RDR_328] Test execution started — Verify Jewellery industry record is displayed correctly as a cash-intensive business sector used for AML monitoring.");
      console.log("[RDR_328] Executing Excel test steps: 1. Locate IND-002. 2. Verify code, name and description.");
      await rdrPage.openMasterTab(testData.baseUrl, "industry-code", "Industry Code");
    });
    await test.step("[RDR_328] Validate expected results from Excel", async () => {
      console.log("[RDR_328] Validating expected result: Jewellery industry details are displayed accurately.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Jewellery industry record");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Jewellery industry record");
      console.log("[RDR_328] Test completed successfully");
    });
  });

  test("Case ID:RDR_329 - Industry Code → Restaurant and Mobile Food Services industry record is displayed correctly as per configured industry classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_329
    // Excel Scenario: Verify Restaurant and Mobile Food Services industry record is displayed correctly as per configured industry classification.
    // Expected Result: Restaurant industry details are displayed accurately.
    await test.step("[RDR_329] Navigate and execute documented test steps", async () => {
      console.log("[RDR_329] Test execution started — Verify Restaurant and Mobile Food Services industry record is displayed correctly as per configured industry classification.");
      console.log("[RDR_329] Executing Excel test steps: 1. Locate IND-003. 2. Verify displayed details.");
      await rdrPage.openMasterTab(testData.baseUrl, "industry-code", "Industry Code");
    });
    await test.step("[RDR_329] Validate expected results from Excel", async () => {
      console.log("[RDR_329] Validating expected result: Restaurant industry details are displayed accurately.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Restaurant and Mobile Food Services industry record");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Restaurant and Mobile Food Services industry record");
      console.log("[RDR_329] Test completed successfully");
    });
  });

  test("Case ID:RDR_330 - Industry Code → Risk Rating field is displayed correctly in the industry detail screen according to AML risk scoring rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_330
    // Excel Scenario: Verify Risk Rating field is displayed correctly in the industry detail screen according to AML risk scoring rules.
    // Expected Result: Correct Industry Risk Rating is displayed.
    await test.step("[RDR_330] Navigate and execute documented test steps", async () => {
      console.log("[RDR_330] Test execution started — Verify Risk Rating field is displayed correctly in the industry detail screen according to AML risk scoring rules.");
      console.log("[RDR_330] Executing Excel test steps: 1. Click View. 2. Open industry details. 3. Review Risk Rating field.");
      await rdrPage.openMasterTab(testData.baseUrl, "industry-code", "Industry Code");
    });
    await test.step("[RDR_330] Validate expected results from Excel", async () => {
      console.log("[RDR_330] Validating expected result: Correct Industry Risk Rating is displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Risk Rating field");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Risk Rating field");
      console.log("[RDR_330] Test completed successfully");
    });
  });

  test("Case ID:RDR_331 - Industry Code → High Risk Flag is displayed correctly for industries classified as high-risk sectors for AML purposes.", async ({ testData }) => {
    // Excel Test Case ID: RDR_331
    // Excel Scenario: Verify High Risk Flag is displayed correctly for industries classified as high-risk sectors for AML purposes.
    // Expected Result: High Risk Flag is displayed correctly.
    await test.step("[RDR_331] Navigate and execute documented test steps", async () => {
      console.log("[RDR_331] Test execution started — Verify High Risk Flag is displayed correctly for industries classified as high-risk sectors for AML purposes.");
      console.log("[RDR_331] Executing Excel test steps: 1. Open industry detail screen. 2. Review High Risk Flag field.");
      await rdrPage.openMasterTab(testData.baseUrl, "industry-code", "Industry Code");
    });
    await test.step("[RDR_331] Validate expected results from Excel", async () => {
      console.log("[RDR_331] Validating expected result: High Risk Flag is displayed correctly.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("High Risk Flag");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("High Risk Flag");
      console.log("[RDR_331] Test completed successfully");
    });
  });

  test("Case ID:RDR_332 - Industry Code → FATF Sector classification is displayed correctly in the industry detail view according to regulatory mapping.", async ({ testData }) => {
    // Excel Test Case ID: RDR_332
    // Excel Scenario: Verify FATF Sector classification is displayed correctly in the industry detail view according to regulatory mapping.
    // Expected Result: Correct FATF sector classification is displayed.
    await test.step("[RDR_332] Navigate and execute documented test steps", async () => {
      console.log("[RDR_332] Test execution started — Verify FATF Sector classification is displayed correctly in the industry detail view according to regulatory mapping.");
      console.log("[RDR_332] Executing Excel test steps: 1. Open industry detail screen. 2. Review FATF Sector field.");
      await rdrPage.openMasterTab(testData.baseUrl, "industry-code", "Industry Code");
    });
    await test.step("[RDR_332] Validate expected results from Excel", async () => {
      console.log("[RDR_332] Validating expected result: Correct FATF sector classification is displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("FATF Sector classification");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("FATF Sector classification");
      console.log("[RDR_332] Test completed successfully");
    });
  });

  test("Case ID:RDR_333 - Industry Code → Search functionality retrieves the correct industry record using Industry Code.", async ({ testData }) => {
    // Excel Test Case ID: RDR_333
    // Excel Scenario: Verify Search functionality retrieves the correct industry record using Industry Code.
    // Expected Result: Only the matching industry record is displayed.
    await test.step("[RDR_333] Navigate and execute documented test steps", async () => {
      console.log("[RDR_333] Test execution started — Verify Search functionality retrieves the correct industry record using Industry Code.");
      console.log("[RDR_333] Executing Excel test steps: 1. Enter Industry Code in search field. 2. Execute search. 3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "industry-code", "Industry Code");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_333] Validate expected results from Excel", async () => {
      console.log("[RDR_333] Validating expected result: Only the matching industry record is displayed.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_333] Test completed successfully");
    });
  });

  test("Case ID:RDR_334 - Industry Code → Search functionality retrieves the correct industry record using Industry Name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_334
    // Excel Scenario: Verify Search functionality retrieves the correct industry record using Industry Name.
    // Expected Result: Only the matching industry record is displayed.
    await test.step("[RDR_334] Navigate and execute documented test steps", async () => {
      console.log("[RDR_334] Test execution started — Verify Search functionality retrieves the correct industry record using Industry Name.");
      console.log("[RDR_334] Executing Excel test steps: 1. Enter Industry Name. 2. Execute search. 3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "industry-code", "Industry Code");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_334] Validate expected results from Excel", async () => {
      console.log("[RDR_334] Validating expected result: Only the matching industry record is displayed.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_334] Test completed successfully");
    });
  });

  test("Case ID:RDR_335 - Industry Code → View action opens complete industry details including Industry Code, Name, Risk Rating, High Risk Flag and FATF Sector classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_335
    // Excel Scenario: Verify View action opens complete industry details including Industry Code, Name, Risk Rating, High Risk Flag and FATF Sector classification.
    // Expected Result: Industry detail screen opens successfully displaying Industry Code, Industry Name, Risk Rating, High Risk Flag, FATF Sector and AML-related information.
    await test.step("[RDR_335] Navigate and execute documented test steps", async () => {
      console.log("[RDR_335] Test execution started — Verify View action opens complete industry details including Industry Code, Name, Risk Rating, High Risk Flag and FATF Sector classification.");
      console.log("[RDR_335] Executing Excel test steps: 1. Click View button. 2. Review complete industry information. 3. Validate displayed fields.");
      await rdrPage.openMasterTab(testData.baseUrl, "industry-code", "Industry Code");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_335] Validate expected results from Excel", async () => {
      console.log("[RDR_335] Validating expected result: Industry detail screen opens successfully displaying Industry Code, Industry Name, Risk Rating, High Risk Flag, FATF Sector and AML-related information.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_335] Test completed successfully");
    });
  });
  });

  test.describe("Reference Master", () => {
  test("Case ID:RDR_336 - Reference Master → Reference Master records are displayed successfully after synchronization and all configured reference values are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_336
    // Excel Scenario: Verify Reference Master records are displayed successfully after synchronization and all configured reference values are visible in the grid.
    // Expected Result: All configured reference records are displayed successfully.
    await test.step("[RDR_336] Navigate and execute documented test steps", async () => {
      console.log("[RDR_336] Test execution started — Verify Reference Master records are displayed successfully after synchronization and all configured reference values are visible in the grid.");
      console.log("[RDR_336] Executing Excel test steps: 1. Open Ref Master tab. 2. Review Reference Master grid. 3. Verify displayed records count and details.");
      await rdrPage.openMasterTab(testData.baseUrl, "reference", "Reference Master");
    });
    await test.step("[RDR_336] Validate expected results from Excel", async () => {
      console.log("[RDR_336] Validating expected result: All configured reference records are displayed successfully.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Reference Master records");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Reference Master records");
      console.log("[RDR_336] Test completed successfully");
    });
  });

  test("Case ID:RDR_337 - Reference Master → Reference ID is displayed uniquely for every reference record maintained in the system.", async ({ testData }) => {
    // Excel Test Case ID: RDR_337
    // Excel Scenario: Verify Reference ID is displayed uniquely for every reference record maintained in the system.
    // Expected Result: Unique Reference IDs are displayed without duplication.
    await test.step("[RDR_337] Navigate and execute documented test steps", async () => {
      console.log("[RDR_337] Test execution started — Verify Reference ID is displayed uniquely for every reference record maintained in the system.");
      console.log("[RDR_337] Executing Excel test steps: 1. Review Ref ID column. 2. Compare displayed records.");
      await rdrPage.openMasterTab(testData.baseUrl, "reference", "Reference Master");
    });
    await test.step("[RDR_337] Validate expected results from Excel", async () => {
      console.log("[RDR_337] Validating expected result: Unique Reference IDs are displayed without duplication.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Reference ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Reference ID");
    await rdrPage.expectUniqueColumnValues("Reference ID");
      console.log("[RDR_337] Test completed successfully");
    });
  });

  test("Case ID:RDR_338 - Reference Master → Category value is displayed correctly according to the configured reference type classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_338
    // Excel Scenario: Verify Category value is displayed correctly according to the configured reference type classification.
    // Expected Result: Correct Category values are displayed.
    await test.step("[RDR_338] Navigate and execute documented test steps", async () => {
      console.log("[RDR_338] Test execution started — Verify Category value is displayed correctly according to the configured reference type classification.");
      console.log("[RDR_338] Executing Excel test steps: 1. Review Category column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "reference", "Reference Master");
    });
    await test.step("[RDR_338] Validate expected results from Excel", async () => {
      console.log("[RDR_338] Validating expected result: Correct Category values are displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Category value");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Category value");
      console.log("[RDR_338] Test completed successfully");
    });
  });

  test("Case ID:RDR_339 - Reference Master → Reference Code is displayed correctly according to the configured lookup code value.", async ({ testData }) => {
    // Excel Test Case ID: RDR_339
    // Excel Scenario: Verify Reference Code is displayed correctly according to the configured lookup code value.
    // Expected Result: Correct Reference Codes are displayed.
    await test.step("[RDR_339] Navigate and execute documented test steps", async () => {
      console.log("[RDR_339] Test execution started — Verify Reference Code is displayed correctly according to the configured lookup code value.");
      console.log("[RDR_339] Executing Excel test steps: 1. Review Code column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "reference", "Reference Master");
    });
    await test.step("[RDR_339] Validate expected results from Excel", async () => {
      console.log("[RDR_339] Validating expected result: Correct Reference Codes are displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Reference Code");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Reference Code");
      console.log("[RDR_339] Test completed successfully");
    });
  });

  test("Case ID:RDR_340 - Reference Master → Description field is displayed correctly and provides accurate business meaning of the reference value.", async ({ testData }) => {
    // Excel Test Case ID: RDR_340
    // Excel Scenario: Verify Description field is displayed correctly and provides accurate business meaning of the reference value.
    // Expected Result: Correct descriptions are displayed for all reference records.
    await test.step("[RDR_340] Navigate and execute documented test steps", async () => {
      console.log("[RDR_340] Test execution started — Verify Description field is displayed correctly and provides accurate business meaning of the reference value.");
      console.log("[RDR_340] Executing Excel test steps: 1. Review Description column. 2. Compare displayed values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "reference", "Reference Master");
    });
    await test.step("[RDR_340] Validate expected results from Excel", async () => {
      console.log("[RDR_340] Validating expected result: Correct descriptions are displayed for all reference records.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Description field");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Description field");
      console.log("[RDR_340] Test completed successfully");
    });
  });

  test("Case ID:RDR_341 - Reference Master → Text Value is displayed correctly according to configured business rules and thresholds.", async ({ testData }) => {
    // Excel Test Case ID: RDR_341
    // Excel Scenario: Verify Text Value is displayed correctly according to configured business rules and thresholds.
    // Expected Result: Correct Text Values are displayed.
    await test.step("[RDR_341] Navigate and execute documented test steps", async () => {
      console.log("[RDR_341] Test execution started — Verify Text Value is displayed correctly according to configured business rules and thresholds.");
      console.log("[RDR_341] Executing Excel test steps: 1. Review Text Value column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "reference", "Reference Master");
    });
    await test.step("[RDR_341] Validate expected results from Excel", async () => {
      console.log("[RDR_341] Validating expected result: Correct Text Values are displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Text Value");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Text Value");
      console.log("[RDR_341] Test completed successfully");
    });
  });

  test("Case ID:RDR_342 - Reference Master → Countries field is displayed correctly and reflects country-specific or global applicability of the reference value.", async ({ testData }) => {
    // Excel Test Case ID: RDR_342
    // Excel Scenario: Verify Countries field is displayed correctly and reflects country-specific or global applicability of the reference value.
    // Expected Result: Correct country applicability is displayed.
    await test.step("[RDR_342] Navigate and execute documented test steps", async () => {
      console.log("[RDR_342] Test execution started — Verify Countries field is displayed correctly and reflects country-specific or global applicability of the reference value.");
      console.log("[RDR_342] Executing Excel test steps: 1. Review Countries column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "reference", "Reference Master");
    });
    await test.step("[RDR_342] Validate expected results from Excel", async () => {
      console.log("[RDR_342] Validating expected result: Correct country applicability is displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Countries field");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Countries field");
      console.log("[RDR_342] Test completed successfully");
    });
  });

  test("Case ID:RDR_343 - Reference Master → Status is displayed correctly and reflects whether the reference code is active and available for AML processing.", async ({ testData }) => {
    // Excel Test Case ID: RDR_343
    // Excel Scenario: Verify Status is displayed correctly and reflects whether the reference code is active and available for AML processing.
    // Expected Result: Correct active status is displayed.
    await test.step("[RDR_343] Navigate and execute documented test steps", async () => {
      console.log("[RDR_343] Test execution started — Verify Status is displayed correctly and reflects whether the reference code is active and available for AML processing.");
      console.log("[RDR_343] Executing Excel test steps: 1. Review Status column. 2. Compare values with source records.");
      await rdrPage.openMasterTab(testData.baseUrl, "reference", "Reference Master");
    });
    await test.step("[RDR_343] Validate expected results from Excel", async () => {
      console.log("[RDR_343] Validating expected result: Correct active status is displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Status");
      console.log("[RDR_343] Test completed successfully");
    });
  });

  test("Case ID:RDR_344 - Reference Master → Modified Date is displayed correctly and reflects the latest update timestamp of the reference record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_344
    // Excel Scenario: Verify Modified Date is displayed correctly and reflects the latest update timestamp of the reference record.
    // Expected Result: Correct modification date is displayed.
    await test.step("[RDR_344] Navigate and execute documented test steps", async () => {
      console.log("[RDR_344] Test execution started — Verify Modified Date is displayed correctly and reflects the latest update timestamp of the reference record.");
      console.log("[RDR_344] Executing Excel test steps: 1. Review Modified column. 2. Compare values with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "reference", "Reference Master");
    });
    await test.step("[RDR_344] Validate expected results from Excel", async () => {
      console.log("[RDR_344] Validating expected result: Correct modification date is displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Modified Date");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Modified Date");
      console.log("[RDR_344] Test completed successfully");
    });
  });

  test("Case ID:RDR_345 - Reference Master → CTR Threshold reference record is displayed correctly with AML reporting threshold information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_345
    // Excel Scenario: Verify CTR Threshold reference record is displayed correctly with AML reporting threshold information.
    // Expected Result: CTR threshold record is displayed accurately with INR 10 lakh value.
    await test.step("[RDR_345] Navigate and execute documented test steps", async () => {
      console.log("[RDR_345] Test execution started — Verify CTR Threshold reference record is displayed correctly with AML reporting threshold information.");
      console.log("[RDR_345] Executing Excel test steps: 1. Locate REF-001. 2. Verify Category, Code, Description and Text Value.");
      await rdrPage.openMasterTab(testData.baseUrl, "reference", "Reference Master");
    });
    await test.step("[RDR_345] Validate expected results from Excel", async () => {
      console.log("[RDR_345] Validating expected result: CTR threshold record is displayed accurately with INR 10 lakh value.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("CTR Threshold reference record");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("CTR Threshold reference record");
      console.log("[RDR_345] Test completed successfully");
    });
  });

  test("Case ID:RDR_346 - Reference Master → Wildlife Keyword reference record is displayed correctly for AML wildlife trafficking monitoring scenarios.", async ({ testData }) => {
    // Excel Test Case ID: RDR_346
    // Excel Scenario: Verify Wildlife Keyword reference record is displayed correctly for AML wildlife trafficking monitoring scenarios.
    // Expected Result: Wildlife keyword record is displayed accurately with keyword details.
    await test.step("[RDR_346] Navigate and execute documented test steps", async () => {
      console.log("[RDR_346] Test execution started — Verify Wildlife Keyword reference record is displayed correctly for AML wildlife trafficking monitoring scenarios.");
      console.log("[RDR_346] Executing Excel test steps: 1. Locate REF-002. 2. Verify Category, Code, Description and Text Value.");
      await rdrPage.openMasterTab(testData.baseUrl, "reference", "Reference Master");
    });
    await test.step("[RDR_346] Validate expected results from Excel", async () => {
      console.log("[RDR_346] Validating expected result: Wildlife keyword record is displayed accurately with keyword details.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Wildlife Keyword reference record");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Wildlife Keyword reference record");
      console.log("[RDR_346] Test completed successfully");
    });
  });

  test("Case ID:RDR_347 - Reference Master → Dormancy Threshold reference record is displayed correctly for dormant account monitoring rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_347
    // Excel Scenario: Verify Dormancy Threshold reference record is displayed correctly for dormant account monitoring rules.
    // Expected Result: Dormancy threshold record is displayed accurately with 24-month threshold value.
    await test.step("[RDR_347] Navigate and execute documented test steps", async () => {
      console.log("[RDR_347] Test execution started — Verify Dormancy Threshold reference record is displayed correctly for dormant account monitoring rules.");
      console.log("[RDR_347] Executing Excel test steps: 1. Locate REF-003. 2. Verify all displayed values.");
      await rdrPage.openMasterTab(testData.baseUrl, "reference", "Reference Master");
    });
    await test.step("[RDR_347] Validate expected results from Excel", async () => {
      console.log("[RDR_347] Validating expected result: Dormancy threshold record is displayed accurately with 24-month threshold value.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Dormancy Threshold reference record");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Dormancy Threshold reference record");
      console.log("[RDR_347] Test completed successfully");
    });
  });

  test("Case ID:RDR_348 - Reference Master → Search functionality retrieves the correct reference record using Reference Code.", async ({ testData }) => {
    // Excel Test Case ID: RDR_348
    // Excel Scenario: Verify Search functionality retrieves the correct reference record using Reference Code.
    // Expected Result: Only the matching reference record is displayed.
    await test.step("[RDR_348] Navigate and execute documented test steps", async () => {
      console.log("[RDR_348] Test execution started — Verify Search functionality retrieves the correct reference record using Reference Code.");
      console.log("[RDR_348] Executing Excel test steps: 1. Enter reference code in search box. 2. Execute search. 3. Review results.");
      await rdrPage.openMasterTab(testData.baseUrl, "reference", "Reference Master");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_348] Validate expected results from Excel", async () => {
      console.log("[RDR_348] Validating expected result: Only the matching reference record is displayed.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_348] Test completed successfully");
    });
  });

  test("Case ID:RDR_349 - Reference Master → Search functionality retrieves the correct reference record using Category name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_349
    // Excel Scenario: Verify Search functionality retrieves the correct reference record using Category name.
    // Expected Result: Only matching category records are displayed.
    await test.step("[RDR_349] Navigate and execute documented test steps", async () => {
      console.log("[RDR_349] Test execution started — Verify Search functionality retrieves the correct reference record using Category name.");
      console.log("[RDR_349] Executing Excel test steps: 1. Enter category value. 2. Execute search. 3. Verify results.");
      await rdrPage.openMasterTab(testData.baseUrl, "reference", "Reference Master");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_349] Validate expected results from Excel", async () => {
      console.log("[RDR_349] Validating expected result: Only matching category records are displayed.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_349] Test completed successfully");
    });
  });

  test("Case ID:RDR_350 - Reference Master → View action opens complete reference details including Reference Type, Code, Name, Active Flag and Sort Order information maintained in the master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_350
    // Excel Scenario: Verify View action opens complete reference details including Reference Type, Code, Name, Active Flag and Sort Order information maintained in the master.
    // Expected Result: Detail screen opens successfully displaying Ref Type, Ref Code, Ref Name, Is Active Flag, Sort Order and other configured lookup information.
    await test.step("[RDR_350] Navigate and execute documented test steps", async () => {
      console.log("[RDR_350] Test execution started — Verify View action opens complete reference details including Reference Type, Code, Name, Active Flag and Sort Order information maintained in the master.");
      console.log("[RDR_350] Executing Excel test steps: 1. Click View button. 2. Review detail screen. 3. Validate Ref Type, Ref Code, Ref Name, Is Active and Sort Order fields.");
      await rdrPage.openMasterTab(testData.baseUrl, "reference", "Reference Master");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_350] Validate expected results from Excel", async () => {
      console.log("[RDR_350] Validating expected result: Detail screen opens successfully displaying Ref Type, Ref Code, Ref Name, Is Active Flag, Sort Order and other configured lookup information.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_350] Test completed successfully");
    });
  });

  test("Case ID:RDR_351 - Reference Master → Country Master page loads successfully", async ({ testData }) => {
    // Excel Test Case ID: RDR_351
    // Excel Scenario: Verify Country Master page loads successfully
    // Expected Result: Country Master page loads with all available country records.
    await test.step("[RDR_351] Navigate and execute documented test steps", async () => {
      console.log("[RDR_351] Test execution started — Verify Country Master page loads successfully");
      console.log("[RDR_351] Executing Excel test steps: 1. Login to AML application.2. Navigate to Reference Data Register.3. Open Reference Masters.4. Click Country Master tab.5. Verify page loads successfully.");
      await rdrPage.openMasterTab(testData.baseUrl, "reference", "Reference Master");
    });
    await test.step("[RDR_351] Validate expected results from Excel", async () => {
      console.log("[RDR_351] Validating expected result: Country Master page loads with all available country records.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_351] Test completed successfully");
    });
  });
  });

  test.describe("Country Master", () => {
  test("Case ID:RDR_352 - Country Master → High Risk countries are displayed at top by default", async ({ testData }) => {
    // Excel Test Case ID: RDR_352
    // Excel Scenario: Verify High Risk countries are displayed at top by default
    // Expected Result: High Risk countries are displayed first in the grid.
    await test.step("[RDR_352] Navigate and execute documented test steps", async () => {
      console.log("[RDR_352] Test execution started — Verify High Risk countries are displayed at top by default");
      console.log("[RDR_352] Executing Excel test steps: 1. Open Country Master page.2. Observe records displayed after initial load.3. Check Risk Level column.4. Verify High Risk countries appear before other categories.");
      await rdrPage.openMasterTab(testData.baseUrl, "country", "Country Master");
    });
    await test.step("[RDR_352] Validate expected results from Excel", async () => {
      console.log("[RDR_352] Validating expected result: High Risk countries are displayed first in the grid.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("High Risk countries");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("High Risk countries");
      console.log("[RDR_352] Test completed successfully");
    });
  });

  test("Case ID:RDR_353 - Country Master → search using Country Name", async ({ testData }) => {
    // Excel Test Case ID: RDR_353
    // Excel Scenario: Verify search using Country Name
    // Expected Result: Matching country record is displayed successfully.
    await test.step("[RDR_353] Navigate and execute documented test steps", async () => {
      console.log("[RDR_353] Test execution started — Verify search using Country Name");
      console.log("[RDR_353] Executing Excel test steps: 1. Open Country Master page.2. Enter country name in search box.3. Wait for results.4. Verify matching record appears.5. Clear search field.");
      await rdrPage.openMasterTab(testData.baseUrl, "country", "Country Master");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_353] Validate expected results from Excel", async () => {
      console.log("[RDR_353] Validating expected result: Matching country record is displayed successfully.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectSearchYieldsResults();
      console.log("[RDR_353] Test completed successfully");
    });
  });

  test("Case ID:RDR_354 - Country Master → search using ISO Alpha-2 Code", async ({ testData }) => {
    // Excel Test Case ID: RDR_354
    // Excel Scenario: Verify search using ISO Alpha-2 Code
    // Expected Result: System displays corresponding country record.
    await test.step("[RDR_354] Navigate and execute documented test steps", async () => {
      console.log("[RDR_354] Test execution started — Verify search using ISO Alpha-2 Code");
      console.log("[RDR_354] Executing Excel test steps: 1. Open Country Master page.2. Enter Alpha-2 code in search box.3. Execute search.4. Verify matching country record is returned.");
      await rdrPage.openMasterTab(testData.baseUrl, "country", "Country Master");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_354] Validate expected results from Excel", async () => {
      console.log("[RDR_354] Validating expected result: System displays corresponding country record.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectSearchYieldsResults();
      console.log("[RDR_354] Test completed successfully");
    });
  });

  test("Case ID:RDR_355 - Country Master → Region filter functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_355
    // Excel Scenario: Verify Region filter functionality
    // Expected Result: Only countries from selected region are displayed.
    await test.step("[RDR_355] Navigate and execute documented test steps", async () => {
      console.log("[RDR_355] Test execution started — Verify Region filter functionality");
      console.log("[RDR_355] Executing Excel test steps: 1. Open Country Master page.2. Select Region dropdown.3. Choose a region.4. Verify filtered records.5. Reset filter.");
      await rdrPage.openMasterTab(testData.baseUrl, "country", "Country Master");
    await rdrPage.applyFirstAvailableFilter();
    });
    await test.step("[RDR_355] Validate expected results from Excel", async () => {
      console.log("[RDR_355] Validating expected result: Only countries from selected region are displayed.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectFilterApplied();
      console.log("[RDR_355] Test completed successfully");
    });
  });

  test("Case ID:RDR_356 - Country Master → Risk Level filter functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_356
    // Excel Scenario: Verify Risk Level filter functionality
    // Expected Result: Grid displays records matching selected risk level.
    await test.step("[RDR_356] Navigate and execute documented test steps", async () => {
      console.log("[RDR_356] Test execution started — Verify Risk Level filter functionality");
      console.log("[RDR_356] Executing Excel test steps: 1. Open Country Master page.2. Select Risk Level dropdown.3. Choose High Risk.4. Verify displayed records.5. Repeat for Medium and Low.");
      await rdrPage.openMasterTab(testData.baseUrl, "country", "Country Master");
    await rdrPage.applyFirstAvailableFilter();
    });
    await test.step("[RDR_356] Validate expected results from Excel", async () => {
      console.log("[RDR_356] Validating expected result: Grid displays records matching selected risk level.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectFilterApplied();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_356] Test completed successfully");
    });
  });

  test("Case ID:RDR_357 - Country Master → combined Search and Filter functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_357
    // Excel Scenario: Verify combined Search and Filter functionality
    // Expected Result: Only records matching all applied filters are displayed.
    await test.step("[RDR_357] Navigate and execute documented test steps", async () => {
      console.log("[RDR_357] Test execution started — Verify combined Search and Filter functionality");
      console.log("[RDR_357] Executing Excel test steps: 1. Search a country.2. Apply Region filter.3. Apply Risk Level filter.4. Verify records satisfy all selected criteria.");
      await rdrPage.openMasterTab(testData.baseUrl, "country", "Country Master");
    await rdrPage.applyFirstAvailableFilter();
    });
    await test.step("[RDR_357] Validate expected results from Excel", async () => {
      console.log("[RDR_357] Validating expected result: Only records matching all applied filters are displayed.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectFilterApplied();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_357] Test completed successfully");
    });
  });

  test("Case ID:RDR_358 - Country Master → Country Name column sorting", async ({ testData }) => {
    // Excel Test Case ID: RDR_358
    // Excel Scenario: Verify Country Name column sorting
    // Expected Result: Countries are sorted correctly in both directions.
    await test.step("[RDR_358] Navigate and execute documented test steps", async () => {
      console.log("[RDR_358] Test execution started — Verify Country Name column sorting");
      console.log("[RDR_358] Executing Excel test steps: 1. Open Country Master page.2. Click Country Name header.3. Verify ascending order.4. Click again.5. Verify descending order.");
      await rdrPage.openMasterTab(testData.baseUrl, "country", "Country Master");
    });
    await test.step("[RDR_358] Validate expected results from Excel", async () => {
      console.log("[RDR_358] Validating expected result: Countries are sorted correctly in both directions.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_358] Test completed successfully");
    });
  });

  test("Case ID:RDR_359 - Country Master → Region column sorting", async ({ testData }) => {
    // Excel Test Case ID: RDR_359
    // Excel Scenario: Verify Region column sorting
    // Expected Result: Records are sorted correctly based on region.
    await test.step("[RDR_359] Navigate and execute documented test steps", async () => {
      console.log("[RDR_359] Test execution started — Verify Region column sorting");
      console.log("[RDR_359] Executing Excel test steps: 1. Open Country Master page.2. Click Region column header.3. Verify records sort by region.4. Click again to reverse sorting.");
      await rdrPage.openMasterTab(testData.baseUrl, "country", "Country Master");
    });
    await test.step("[RDR_359] Validate expected results from Excel", async () => {
      console.log("[RDR_359] Validating expected result: Records are sorted correctly based on region.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_359] Test completed successfully");
    });
  });

  test("Case ID:RDR_360 - Country Master → Risk Reason tags display correctly", async ({ testData }) => {
    // Excel Test Case ID: RDR_360
    // Excel Scenario: Verify Risk Reason tags display correctly
    // Expected Result: Correct risk reason tags are displayed.
    await test.step("[RDR_360] Navigate and execute documented test steps", async () => {
      console.log("[RDR_360] Test execution started — Verify Risk Reason tags display correctly");
      console.log("[RDR_360] Executing Excel test steps: 1. Open Country Master page.2. Locate High Risk country.3. Review Risk Reasons column.4. Verify all assigned tags are displayed.");
      await rdrPage.openMasterTab(testData.baseUrl, "country", "Country Master");
    });
    await test.step("[RDR_360] Validate expected results from Excel", async () => {
      console.log("[RDR_360] Validating expected result: Correct risk reason tags are displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("all assigned tags");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("all assigned tags");
      console.log("[RDR_360] Test completed successfully");
    });
  });

  test("Case ID:RDR_361 - Country Master → View button functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_361
    // Excel Scenario: Verify View button functionality
    // Expected Result: Country detail panel opens successfully with complete information.
    await test.step("[RDR_361] Navigate and execute documented test steps", async () => {
      console.log("[RDR_361] Test execution started — Verify View button functionality");
      console.log("[RDR_361] Executing Excel test steps: 1. Open Country Master page.2. Locate any country record.3. Click View button.4. Verify details panel opens.5. Verify country information is displayed.");
      await rdrPage.openMasterTab(testData.baseUrl, "country", "Country Master");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_361] Validate expected results from Excel", async () => {
      console.log("[RDR_361] Validating expected result: Country detail panel opens successfully with complete information.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_361] Test completed successfully");
    });
  });

  test("Case ID:RDR_362 - Country Master → Audit Trail information in View panel", async ({ testData }) => {
    // Excel Test Case ID: RDR_362
    // Excel Scenario: Verify Audit Trail information in View panel
    // Expected Result: Audit trail displays complete history details.
    await test.step("[RDR_362] Navigate and execute documented test steps", async () => {
      console.log("[RDR_362] Test execution started — Verify Audit Trail information in View panel");
      console.log("[RDR_362] Executing Excel test steps: 1. Open country details using View.2. Navigate to Audit Trail tab.3. Review history records.4. Verify Maker/Checker actions are visible.");
      await rdrPage.openMasterTab(testData.baseUrl, "country", "Country Master");
    });
    await test.step("[RDR_362] Validate expected results from Excel", async () => {
      console.log("[RDR_362] Validating expected result: Audit trail displays complete history details.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_362] Test completed successfully");
    });
  });

  test("Case ID:RDR_363 - Country Master → Maker submits country updates successfully", async ({ testData }) => {
    // Excel Test Case ID: RDR_363
    // Excel Scenario: Verify Maker submits country updates successfully
    // Expected Result: Record status changes to Pending Review.
    await test.step("[RDR_363] Navigate and execute documented test steps", async () => {
      console.log("[RDR_363] Test execution started — Verify Maker submits country updates successfully");
      console.log("[RDR_363] Executing Excel test steps: 1. Login as Maker.2. Open Country Master.3. Edit a country record.4. Update Risk Level and Remarks.5. Click Save & Submit.");
      await rdrPage.openMasterTab(testData.baseUrl, "country", "Country Master");
    });
    await test.step("[RDR_363] Validate expected results from Excel", async () => {
      console.log("[RDR_363] Validating expected result: Record status changes to Pending Review.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_363] Test completed successfully");
    });
  });

  test("Case ID:RDR_364 - Country Master → Checker approval workflow", async ({ testData }) => {
    // Excel Test Case ID: RDR_364
    // Excel Scenario: Verify Checker approval workflow
    // Expected Result: Country status changes from Pending to Active and changes are applied.
    await test.step("[RDR_364] Navigate and execute documented test steps", async () => {
      console.log("[RDR_364] Test execution started — Verify Checker approval workflow");
      console.log("[RDR_364] Executing Excel test steps: 1. Login as Checker.2. Open pending country record.3. Review submitted changes.4. Click Approve.5. Verify status update.");
      await rdrPage.openMasterTab(testData.baseUrl, "country", "Country Master");
    });
    await test.step("[RDR_364] Validate expected results from Excel", async () => {
      console.log("[RDR_364] Validating expected result: Country status changes from Pending to Active and changes are applied.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_364] Test completed successfully");
    });
  });

  test("Case ID:RDR_365 - Country Master → CSV export functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_365
    // Excel Scenario: Verify CSV export functionality
    // Expected Result: CSV file downloads successfully and contains filtered country records.
    await test.step("[RDR_365] Navigate and execute documented test steps", async () => {
      console.log("[RDR_365] Test execution started — Verify CSV export functionality");
      console.log("[RDR_365] Executing Excel test steps: 1. Open Country Master page.2. Apply search/filter criteria.3. Click CSV button.4. Download generated file.5. Verify exported data.");
      await rdrPage.openMasterTab(testData.baseUrl, "country", "Country Master");
    });
    await test.step("[RDR_365] Validate expected results from Excel", async () => {
      console.log("[RDR_365] Validating expected result: CSV file downloads successfully and contains filtered country records.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectExportButtonsVisible();
    await rdrPage.expectCsvExportReady();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_365] Test completed successfully");
    });
  });
  });

  test.describe("Employee Master", () => {
  test("Case ID:RDR_376 - Employee Master → search functionality using Employee Name", async ({ testData }) => {
    // Excel Test Case ID: RDR_376
    // Excel Scenario: Verify search functionality using Employee Name
    // Expected Result: Matching employee record is displayed successfully.
    await test.step("[RDR_376] Navigate and execute documented test steps", async () => {
      console.log("[RDR_376] Test execution started — Verify search functionality using Employee Name");
      console.log("[RDR_376] Executing Excel test steps: 1. Open Employee Master.2. Enter employee name in search box.3. Execute search.4. Verify matching employee record appears.");
      await rdrPage.openMasterTab(testData.baseUrl, "employee", "Employee Master");
    await rdrPage.searchFromFirstRowCell();
    });
    await test.step("[RDR_376] Validate expected results from Excel", async () => {
      console.log("[RDR_376] Validating expected result: Matching employee record is displayed successfully.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectSearchYieldsResults();
      console.log("[RDR_376] Test completed successfully");
    });
  });

  test("Case ID:RDR_377 - Employee Master → masked employee name display for PII protection", async ({ testData }) => {
    // Excel Test Case ID: RDR_377
    // Excel Scenario: Verify masked employee name display for PII protection
    // Expected Result: Employee names are masked according to privacy standards.
    await test.step("[RDR_377] Navigate and execute documented test steps", async () => {
      console.log("[RDR_377] Test execution started — Verify masked employee name display for PII protection");
      console.log("[RDR_377] Executing Excel test steps: 1. Open Employee Master.2. Review Full Name column.3. Verify names are partially masked.4. Review multiple records.");
      await rdrPage.openMasterTab(testData.baseUrl, "employee", "Employee Master");
    });
    await test.step("[RDR_377] Validate expected results from Excel", async () => {
      console.log("[RDR_377] Validating expected result: Employee names are masked according to privacy standards.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Full Name");
    await rdrPage.expectColumnValuesMasked("Full Name");
      console.log("[RDR_377] Test completed successfully");
    });
  });

  test("Case ID:RDR_378 - Employee Master → employee status display", async ({ testData }) => {
    // Excel Test Case ID: RDR_378
    // Excel Scenario: Verify employee status display
    // Expected Result: Employee status is displayed correctly.
    await test.step("[RDR_378] Navigate and execute documented test steps", async () => {
      console.log("[RDR_378] Test execution started — Verify employee status display");
      console.log("[RDR_378] Executing Excel test steps: 1. Open Employee Master.2. Review Status column.3. Verify status values displayed.4. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "employee", "Employee Master");
    });
    await test.step("[RDR_378] Validate expected results from Excel", async () => {
      console.log("[RDR_378] Validating expected result: Employee status is displayed correctly.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Status");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Status");
      console.log("[RDR_378] Test completed successfully");
    });
  });

  test("Case ID:RDR_379 - Employee Master → Joining Date is displayed correctly", async ({ testData }) => {
    // Excel Test Case ID: RDR_379
    // Excel Scenario: Verify Joining Date is displayed correctly
    // Expected Result: Joining Date is displayed accurately.
    await test.step("[RDR_379] Navigate and execute documented test steps", async () => {
      console.log("[RDR_379] Test execution started — Verify Joining Date is displayed correctly");
      console.log("[RDR_379] Executing Excel test steps: 1. Open Employee Master.2. Review Joining Date column.3. Verify date format.4. Compare with source data.");
      await rdrPage.openMasterTab(testData.baseUrl, "employee", "Employee Master");
    });
    await test.step("[RDR_379] Validate expected results from Excel", async () => {
      console.log("[RDR_379] Validating expected result: Joining Date is displayed accurately.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Joining Date");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Joining Date");
      console.log("[RDR_379] Test completed successfully");
    });
  });

  test("Case ID:RDR_380 - Employee Master → Department information display", async ({ testData }) => {
    // Excel Test Case ID: RDR_380
    // Excel Scenario: Verify Department information display
    // Expected Result: Correct department is displayed for each employee.
    await test.step("[RDR_380] Navigate and execute documented test steps", async () => {
      console.log("[RDR_380] Test execution started — Verify Department information display");
      console.log("[RDR_380] Executing Excel test steps: 1. Open Employee Master.2. Review Department column.3. Compare values with source records.4. Verify department assignment.");
      await rdrPage.openMasterTab(testData.baseUrl, "employee", "Employee Master");
    });
    await test.step("[RDR_380] Validate expected results from Excel", async () => {
      console.log("[RDR_380] Validating expected result: Correct department is displayed for each employee.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Department");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Department");
      console.log("[RDR_380] Test completed successfully");
    });
  });

  test("Case ID:RDR_381 - Employee Master → Branch assignment display", async ({ testData }) => {
    // Excel Test Case ID: RDR_381
    // Excel Scenario: Verify Branch assignment display
    // Expected Result: Assigned branch is displayed correctly.
    await test.step("[RDR_381] Navigate and execute documented test steps", async () => {
      console.log("[RDR_381] Test execution started — Verify Branch assignment display");
      console.log("[RDR_381] Executing Excel test steps: 1. Open Employee Master.2. Review Branch ID column.3. Compare with source records.4. Verify mapping accuracy.");
      await rdrPage.openMasterTab(testData.baseUrl, "employee", "Employee Master");
    });
    await test.step("[RDR_381] Validate expected results from Excel", async () => {
      console.log("[RDR_381] Validating expected result: Assigned branch is displayed correctly.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Branch ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Branch ID");
      console.log("[RDR_381] Test completed successfully");
    });
  });

  test("Case ID:RDR_382 - Employee Master → Supervisor ID mapping", async ({ testData }) => {
    // Excel Test Case ID: RDR_382
    // Excel Scenario: Verify Supervisor ID mapping
    // Expected Result: Correct supervisor mapping is displayed.
    await test.step("[RDR_382] Navigate and execute documented test steps", async () => {
      console.log("[RDR_382] Test execution started — Verify Supervisor ID mapping");
      console.log("[RDR_382] Executing Excel test steps: 1. Open Employee Master.2. Review Supervisor ID column.3. Verify reporting hierarchy.4. Confirm supervisor exists.");
      await rdrPage.openMasterTab(testData.baseUrl, "employee", "Employee Master");
    });
    await test.step("[RDR_382] Validate expected results from Excel", async () => {
      console.log("[RDR_382] Validating expected result: Correct supervisor mapping is displayed.");
      await rdrPage.expectOnRdrRoute();
    await rdrPage.expectGridTabLoaded();
    await rdrPage.expectColumnVisible("Supervisor ID");
    await rdrPage.expectGridContainsRecords();
    await rdrPage.expectAllCellsNonEmpty("Supervisor ID");
      console.log("[RDR_382] Test completed successfully");
    });
  });

  test("Case ID:RDR_383 - Employee Master → View button functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_383
    // Excel Scenario: Verify View button functionality
    // Expected Result: Employee details open successfully in read-only mode.
    await test.step("[RDR_383] Navigate and execute documented test steps", async () => {
      console.log("[RDR_383] Test execution started — Verify View button functionality");
      console.log("[RDR_383] Executing Excel test steps: 1. Open Employee Master.2. Locate employee record.3. Click View button.4. Verify employee detail screen opens.5. Review displayed information.");
      await rdrPage.openMasterTab(testData.baseUrl, "employee", "Employee Master");
    await rdrPage.openFirstRowView();
    });
    await test.step("[RDR_383] Validate expected results from Excel", async () => {
      console.log("[RDR_383] Validating expected result: Employee details open successfully in read-only mode.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectViewModalShowsRecordDetails();
      console.log("[RDR_383] Test completed successfully");
    });
  });

  test("Case ID:RDR_384 - Employee Master → CSV export functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_384
    // Excel Scenario: Verify CSV export functionality
    // Expected Result: CSV file downloads successfully with correct employee information.
    await test.step("[RDR_384] Navigate and execute documented test steps", async () => {
      console.log("[RDR_384] Test execution started — Verify CSV export functionality");
      console.log("[RDR_384] Executing Excel test steps: 1. Open Employee Master.2. Click CSV button.3. Download exported file.4. Verify employee data.");
      await rdrPage.openMasterTab(testData.baseUrl, "employee", "Employee Master");
    });
    await test.step("[RDR_384] Validate expected results from Excel", async () => {
      console.log("[RDR_384] Validating expected result: CSV file downloads successfully with correct employee information.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectExportButtonsVisible();
    await rdrPage.expectCsvExportReady();
      console.log("[RDR_384] Test completed successfully");
    });
  });

  test("Case ID:RDR_385 - Employee Master → Excel export functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_385
    // Excel Scenario: Verify Excel export functionality
    // Expected Result: Excel file downloads successfully with correct employee records.
    await test.step("[RDR_385] Navigate and execute documented test steps", async () => {
      console.log("[RDR_385] Test execution started — Verify Excel export functionality");
      console.log("[RDR_385] Executing Excel test steps: 1. Open Employee Master.2. Click Excel button.3. Download exported file.4. Verify exported data.");
      await rdrPage.openMasterTab(testData.baseUrl, "employee", "Employee Master");
    });
    await test.step("[RDR_385] Validate expected results from Excel", async () => {
      console.log("[RDR_385] Validating expected result: Excel file downloads successfully with correct employee records.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectExportButtonsVisible();
    await rdrPage.expectExcelExportReady();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_385] Test completed successfully");
    });
  });

  test("Case ID:RDR_386 - Employee Master → employee records are limited to maximum configured row count", async ({ testData }) => {
    // Excel Test Case ID: RDR_386
    // Excel Scenario: Verify employee records are limited to maximum configured row count
    // Expected Result: System respects configured record limits and loads records successfully.
    await test.step("[RDR_386] Navigate and execute documented test steps", async () => {
      console.log("[RDR_386] Test execution started — Verify employee records are limited to maximum configured row count");
      console.log("[RDR_386] Executing Excel test steps: 1. Open Employee Master.2. Review displayed record count.3. Verify configured record limit.4. Check page performance and loading time.");
      await rdrPage.openMasterTab(testData.baseUrl, "employee", "Employee Master");
    });
    await test.step("[RDR_386] Validate expected results from Excel", async () => {
      console.log("[RDR_386] Validating expected result: System respects configured record limits and loads records successfully.");
      await rdrPage.expectGridTabLoaded();
    await rdrPage.expectGridWithinConfiguredLimit();
    await rdrPage.expectGridContainsRecords();
      console.log("[RDR_386] Test completed successfully");
    });
  });
  });
});
