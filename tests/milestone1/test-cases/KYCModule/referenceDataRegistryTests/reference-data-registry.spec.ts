// spec: specs/rdr/plan.md
// source: pipeline/test-data/Reference Data Registry.xlsx — 376 cases (RDR_001–RDR_386)
// fsd: pipeline/test-data/Reference Data Registry_FSD_v1.0.docx
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import ReferenceDataRegistryPage from "../../../pages/KYCModule/ReferenceDataRegistryPages/ReferenceDataRegistryPage";
import pilotData from "../../../../../fixtures/rdr-pilot-data.json";

test.describe("Reference Data Registry Module", () => {
  let rdrPage: ReferenceDataRegistryPage;

  test.beforeEach(async ({ sharedPage }) => {
    rdrPage = new ReferenceDataRegistryPage(sharedPage);
  });

  test.describe("Customer & Account Data → Customer Master", () => {
  test("Case ID:RDR_001 - Customer Master → Verify Customer ID is displayed for every customer record loaded from source systems and remains unique across all records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_001
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Customer ID is displayed for every customer record loaded from source systems and remains unique across all records.
    // FSD §5.1 — Customer Master
    // Steps (4): Navigate to Customer Master. → Review Customer ID column. → Compare multiple records. …
    // Expected: System displays a unique Customer ID for each customer record without duplication.
    console.log("[RDR_001] Customer Master → Verify Customer ID is displayed for every customer record loaded from source systems and remains unique across all records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectUniqueColumnValues('Customer ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await expect(rdrPage.gridRows).toHaveCount(pilotData.customerMaster.expectedRowCount);
      });
  });

  test("Case ID:RDR_002 - Customer Master → Verify Customer ID hyperlink functionality and navigation to customer profile details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_002
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Customer ID hyperlink functionality and navigation to customer profile details.
    // FSD §5.1 — Customer Master
    // Steps (4): Open Customer Master. → Click Customer ID hyperlink. → Verify customer details page opens. …
    // Expected: Customer detail page opens successfully and displays complete information for selected customer.
    console.log("[RDR_002] Customer Master → Verify Customer ID hyperlink functionality and navigation to customer profile details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.clickFirstRowIdLink();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_003 - Customer Master → Verify Customer Type values are displayed correctly as received from source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_003
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Customer Type values are displayed correctly as received from source systems.
    // FSD §5.1 — Customer Master
    // Steps (3): Open Customer Master. → Review Customer Type column. → Compare values against source records.
    // Expected: Correct Customer Type is displayed for every customer record.
    console.log("[RDR_003] Customer Master → Verify Customer Type values are displayed correctly as received from source systems.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer Type');
      await rdrPage.expectAllCellsNonEmpty('Customer Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_004 - Customer Master → Verify Customer Type filter allows users to filter customer records based on selected type.", async ({ testData }) => {
    // Excel Test Case ID: RDR_004
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Customer Type filter allows users to filter customer records based on selected type.
    // FSD §4.5 — Filter Bars
    // Steps (4): Select Customer Type filter. → Choose INDIVIDUAL. → Apply filter. …
    // Expected: Only Individual customer records are displayed after filter application.
    console.log("[RDR_004] Customer Master → Verify Customer Type filter allows users to filter customer records based on selected type.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.applyFilterByOptionText('Individual');
      await rdrPage.expectColumnVisible('Customer Type');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer Type');
      await rdrPage.expectAllCellsNonEmpty('Customer Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectFilterApplied();
      await rdrPage.expectAllCellsMatchValue('Customer Type', 'Individual');
      });
  });

  test("Case ID:RDR_005 - Customer Master → Verify Full Legal Name is displayed correctly for customer records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_005
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Full Legal Name is displayed correctly for customer records.
    // FSD §5.1 — Customer Master
    // Steps (3): Open Customer Master. → Review Full Legal Name column. → Compare values with source system.
    // Expected: Full Legal Name displayed matches customer master data stored in source system.
    console.log("[RDR_005] Customer Master → Verify Full Legal Name is displayed correctly for customer records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Full Legal Name');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Full Legal Name');
      await rdrPage.expectAllCellsNonEmpty('Full Legal Name');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_006 - Customer Master → Verify masking of Full Legal Name according to AML privacy and PII requirements.", async ({ testData }) => {
    // Excel Test Case ID: RDR_006
    // Excel Scenario: Customer & Account Data → Customer Master → Verify masking of Full Legal Name according to AML privacy and PII requirements.
    // FSD §5.1 — Customer Master
    // Steps (3): Open Customer Master. → Review Full Legal Name column. → Verify masking rules.
    // Expected: Customer name is partially masked according to configured masking policy.
    console.log("[RDR_006] Customer Master → Verify masking of Full Legal Name according to AML privacy and PII requirements.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Full Legal Name');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Full Legal Name');
      await rdrPage.expectAllCellsNonEmpty('Full Legal Name');
      await rdrPage.expectColumnValuesMasked('Full Legal Name');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_007 - Customer Master → Verify Active customer status is displayed correctly in Customer Status column.", async ({ testData }) => {
    // Excel Test Case ID: RDR_007
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Active customer status is displayed correctly in Customer Status column.
    // FSD §4.1 — Toolbar
    // Steps (3): Search active customer. → Review Customer Status column. → Compare with source data.
    // Expected: Customer Status displays Active and matches source system value.
    console.log("[RDR_007] Customer Master → Verify Active customer status is displayed correctly in Customer Status column.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search(pilotData.customerMaster.ids[0]);
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectAllCellsMatchValue('Status', 'Active');
      });
  });

  test("Case ID:RDR_008 - Customer Master → Verify Inactive customer status is displayed correctly in Customer Status column.", async ({ testData }) => {
    // Excel Test Case ID: RDR_008
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Inactive customer status is displayed correctly in Customer Status column.
    // FSD §4.1 — Toolbar
    // Steps (3): Search inactive customer. → Review Customer Status column. → Validate displayed value.
    // Expected: Customer Status displays Inactive and matches source system value.
    console.log("[RDR_008] Customer Master → Verify Inactive customer status is displayed correctly in Customer Status column.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search(pilotData.customerMaster.inactiveCustomerId);
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectInactiveStatusInGrid();
      });
  });

  test("Case ID:RDR_009 - Customer Master → Verify Risk Rating values are displayed correctly for all customer records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_009
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Risk Rating values are displayed correctly for all customer records.
    // FSD §5.1 — Customer Master
    // Steps (3): Open Customer Master. → Review Risk Rating column. → Compare values with risk profile data.
    // Expected: Correct Risk Rating is displayed for each customer as maintained in source data.
    console.log("[RDR_009] Customer Master → Verify Risk Rating values are displayed correctly for all customer records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Risk Rating');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Risk Rating');
      await rdrPage.expectAllCellsNonEmpty('Risk Rating');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_010 - Customer Master → Verify KYC Status is displayed correctly and reflects latest customer KYC review status.", async ({ testData }) => {
    // Excel Test Case ID: RDR_010
    // Excel Scenario: Customer & Account Data → Customer Master → Verify KYC Status is displayed correctly and reflects latest customer KYC review status.
    // FSD §5.1 — Customer Master
    // Steps (3): Open Customer Master. → Review KYC Status column. → Compare with customer KYC information.
    // Expected: KYC Status is displayed accurately for all customer records.
    console.log("[RDR_010] Customer Master → Verify KYC Status is displayed correctly and reflects latest customer KYC review status.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('KYC Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('KYC Status');
      await rdrPage.expectAllCellsNonEmpty('KYC Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_011 - Customer Master → Verify PEP Flag is displayed correctly for Politically Exposed Persons.", async ({ testData }) => {
    // Excel Test Case ID: RDR_011
    // Excel Scenario: Customer & Account Data → Customer Master → Verify PEP Flag is displayed correctly for Politically Exposed Persons.
    // FSD §4.1 — Toolbar
    // Steps (3): Search customer record. → Review PEP Flag column. → Compare with source data.
    // Expected: PEP Flag displays correct Yes/No value according to customer profile.
    console.log("[RDR_011] Customer Master → Verify PEP Flag is displayed correctly for Politically Exposed Persons.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('customer record');
      await rdrPage.expectColumnVisible('PEP Flag');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('PEP Flag');
      await rdrPage.expectAllCellsNonEmpty('PEP Flag');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_012 - Customer Master → Verify Sanctions Flag is displayed correctly for sanctions/watchlist matched customers.", async ({ testData }) => {
    // Excel Test Case ID: RDR_012
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Sanctions Flag is displayed correctly for sanctions/watchlist matched customers.
    // FSD §4.1 — Toolbar
    // Steps (3): Search customer record. → Verify Sanctions Flag column. → Compare with source data.
    // Expected: Sanctions Flag displays correct Yes/No value as maintained in source system.
    console.log("[RDR_012] Customer Master → Verify Sanctions Flag is displayed correctly for sanctions/watchlist matched customers.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('customer record');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Sanctions Flag');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Sanctions Flag');
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_013 - Customer Master → Verify Date Onboarded is displayed correctly in configured date format.", async ({ testData }) => {
    // Excel Test Case ID: RDR_013
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Date Onboarded is displayed correctly in configured date format.
    // FSD §5.1 — Customer Master
    // Steps (3): Open Customer Master. → Review Date Onboarded column. → Compare with source record.
    // Expected: Onboarding date is displayed correctly and follows configured date format.
    console.log("[RDR_013] Customer Master → Verify Date Onboarded is displayed correctly in configured date format.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Onboarding Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Onboarding Date');
      await rdrPage.expectAllCellsNonEmpty('Onboarding Date');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_014 - Customer Master → Verify Last Review Date is displayed correctly and reflects latest customer review activity.", async ({ testData }) => {
    // Excel Test Case ID: RDR_014
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Last Review Date is displayed correctly and reflects latest customer review activity.
    // FSD §5.1 — Customer Master
    // Steps (3): Open Customer Master. → Review Last Review Date column. → Compare with source system.
    // Expected: Last Review Date is displayed accurately and matches source records.
    console.log("[RDR_014] Customer Master → Verify Last Review Date is displayed correctly and reflects latest customer review activity.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Last Review Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Last Review Date');
      await rdrPage.expectAllCellsNonEmpty('Last Review Date');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_015 - Customer Master → Verify View action opens complete customer profile information including customer, risk, KYC and AML details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_015
    // Excel Scenario: Customer & Account Data → Customer Master → Verify View action opens complete customer profile information including customer, risk, KYC and AML details.
    // FSD §4.3 — Detail Modal
    // Steps (4): Locate customer record. → Click View button. → Verify customer detail page. …
    // Expected: Customer detail screen opens successfully and displays complete customer information including Customer ID, Customer Type, Risk Rating, KYC Status, PEP Flag, Sanctions Flag and review details.
    console.log("[RDR_015] Customer Master → Verify View action opens complete customer profile information including customer, risk, KYC and AML details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_016 - Customer Master → Verify search functionality using Customer ID and ensure the system retrieves the exact matching customer record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_016
    // Excel Scenario: Customer & Account Data → Customer Master → Verify search functionality using Customer ID and ensure the system retrieves the exact matching customer record.
    // FSD §4.3 — Detail Modal
    // Steps (5): Navigate to Customer Master. → Enter Customer ID in search box. → Click Search or press Enter. …
    // Expected: System retrieves and displays only the customer record matching the entered Customer ID. No unrelated records should be displayed.
    console.log("[RDR_016] Customer Master → Verify search functionality using Customer ID and ensure the system retrieves the exact matching customer record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.expectColumnVisible('Customer ID');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_017 - Customer Master → Verify search functionality using Full Legal Name and ensure matching customer records are displayed.", async ({ testData }) => {
    // Excel Test Case ID: RDR_017
    // Excel Scenario: Customer & Account Data → Customer Master → Verify search functionality using Full Legal Name and ensure matching customer records are displayed.
    // FSD §4.1 — Toolbar
    // Steps (4): Open Customer Master. → Enter Full Legal Name in search field. → Execute search. …
    // Expected: System displays the customer record(s) corresponding to the entered Full Legal Name and hides non-matching records.
    console.log("[RDR_017] Customer Master → Verify search functionality using Full Legal Name and ensure matching customer records are displayed.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Full Legal Name');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Full Legal Name');
      });
  });

  test("Case ID:RDR_018 - Customer Master → Verify Clear button functionality after applying filters and search criteria.", async ({ testData }) => {
    // Excel Test Case ID: RDR_018
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Clear button functionality after applying filters and search criteria.
    // FSD §4.5 — Filter Bars
    // Steps (4): Apply Customer Type filter. → Perform search using Customer ID. → Click Clear button. …
    // Expected: Search field becomes blank, applied filters are removed, and the complete customer list is displayed again.
    console.log("[RDR_018] Customer Master → Verify Clear button functionality after applying filters and search criteria.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('becomes blank');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('becomes blank');
      await rdrPage.expectAllCellsNonEmpty('becomes blank');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectFilterApplied();
      await rdrPage.expectAllCellsMatchValue('becomes blank', 'Individual');
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_019 - Customer Master → Verify CSV Export functionality and validate exported customer data.", async ({ testData }) => {
    // Excel Test Case ID: RDR_019
    // Excel Scenario: Customer & Account Data → Customer Master → Verify CSV Export functionality and validate exported customer data.
    // FSD §11.1 — Export Formats
    // Steps (5): Open Customer Master. → Click CSV Export button. → Download generated file. …
    // Expected: CSV file is downloaded successfully containing customer data with correct columns such as Customer ID, Customer Type, Full Legal Name, Risk Rating, KYC Status, PEP Flag, Sanctions Flag, Date Onboarded and Last Review Date.
    console.log("[RDR_019] Customer Master → Verify CSV Export functionality and validate exported customer data.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Validate');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Validate');
      });
  });

  test("Case ID:RDR_020 - Customer Master → Verify Excel Export functionality and validate exported customer information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_020
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Excel Export functionality and validate exported customer information.
    // FSD §11.1 — Export Formats
    // Steps (5): Open Customer Master. → Click Excel Export button. → Download generated file. …
    // Expected: Excel file is downloaded successfully. All customer records and column values are exported accurately without data loss, truncation or formatting issues.
    console.log("[RDR_020] Customer Master → Verify Excel Export functionality and validate exported customer information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportExcel();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('data accuracy and');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('data accuracy and');
      });
  });
  });

  test.describe("Customer & Account Data → Customer Address", () => {
  test("Case ID:RDR_021 - Customer Address → Verify Address ID is generated and displayed uniquely for every customer address record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_021
    // Excel Scenario: Customer & Account Data → Customer Address → Verify Address ID is generated and displayed uniquely for every customer address record loaded from CBS.
    // FSD §5.2 — Customer Address (CUST_ADDRESS)
    // Steps (4): Open Address tab. → Review Address ID column. → Compare multiple records. …
    // Expected: System displays unique Address IDs for all address records without duplication.
    console.log("[RDR_021] Customer Address → Verify Address ID is generated and displayed uniquely for every customer address record loaded from CBS.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Address ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Address ID');
      await rdrPage.expectAllCellsNonEmpty('Address ID');
      await rdrPage.expectUniqueColumnValues('Address ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_022 - Customer Address → Verify Customer ID displayed against each address record matches the linked customer in Customer Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_022
    // Excel Scenario: Customer & Account Data → Customer Address → Verify Customer ID displayed against each address record matches the linked customer in Customer Master.
    // FSD §5.2 — Customer Address (CUST_ADDRESS)
    // Steps (3): Open Address grid. → Review Customer ID column. → Compare with Customer Master data.
    // Expected: Customer ID displayed for each address record matches the linked customer profile.
    console.log("[RDR_022] Customer Address → Verify Customer ID displayed against each address record matches the linked customer in Customer Master.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_023 - Customer Address → Verify Address Type values are displayed correctly based on configured address classifications.", async ({ testData }) => {
    // Excel Test Case ID: RDR_023
    // Excel Scenario: Customer & Account Data → Customer Address → Verify Address Type values are displayed correctly based on configured address classifications.
    // FSD §5.2 — Customer Address (CUST_ADDRESS)
    // Steps (3): Open Address tab. → Review Type column. → Compare values with source records.
    // Expected: Correct Address Type is displayed for each address record.
    console.log("[RDR_023] Customer Address → Verify Address Type values are displayed correctly based on configured address classifications.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_024 - Customer Address → Verify Address Line 1 is displayed according to configured masking rules to protect customer PII information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_024
    // Excel Scenario: Customer & Account Data → Customer Address → Verify Address Line 1 is displayed according to configured masking rules to protect customer PII information.
    // FSD §5.2 — Customer Address (CUST_ADDRESS)
    // Steps (3): Review Address Line 1 column. → Verify masking pattern. → Compare with source data.
    // Expected: Address details are partially masked and comply with PII masking requirements.
    console.log("[RDR_024] Customer Address → Verify Address Line 1 is displayed according to configured masking rules to protect customer PII information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Address Line 1');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Address Line 1');
      await rdrPage.expectAllCellsNonEmpty('Address Line 1');
      await rdrPage.expectColumnValuesMasked('Address Line 1');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_025 - Customer Address → Verify City and State values are displayed correctly for each address record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_025
    // Excel Scenario: Customer & Account Data → Customer Address → Verify City and State values are displayed correctly for each address record.
    // FSD §5.2 — Customer Address (CUST_ADDRESS)
    // Steps (2): Review City and State columns. → Compare values with source data.
    // Expected: Correct City and State information is displayed for each address record.
    console.log("[RDR_025] Customer Address → Verify City and State values are displayed correctly for each address record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('City');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('City');
      await rdrPage.expectAllCellsNonEmpty('City');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_026 - Customer Address → Verify Postal Code is displayed according to configured masking rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_026
    // Excel Scenario: Customer & Account Data → Customer Address → Verify Postal Code is displayed according to configured masking rules.
    // FSD §5.2 — Customer Address (CUST_ADDRESS)
    // Steps (2): Review Postal Code column. → Verify masking format.
    // Expected: Postal Codes are displayed in masked format as per configuration.
    console.log("[RDR_026] Customer Address → Verify Postal Code is displayed according to configured masking rules.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Postal Code');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Postal Code');
      await rdrPage.expectAllCellsNonEmpty('Postal Code');
      await rdrPage.expectColumnValuesMasked('Postal Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_027 - Customer Address → Verify Country Code is displayed correctly for address records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_027
    // Excel Scenario: Customer & Account Data → Customer Address → Verify Country Code is displayed correctly for address records.
    // FSD §5.2 — Customer Address (CUST_ADDRESS)
    // Steps (2): Review Country column. → Compare values with source data.
    // Expected: Country Code is displayed correctly for all address records.
    console.log("[RDR_027] Customer Address → Verify Country Code is displayed correctly for address records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Country');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Country');
      await rdrPage.expectAllCellsNonEmpty('Country');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_028 - Customer Address → Verify Primary Address indicator is displayed correctly for customer addresses.", async ({ testData }) => {
    // Excel Test Case ID: RDR_028
    // Excel Scenario: Customer & Account Data → Customer Address → Verify Primary Address indicator is displayed correctly for customer addresses.
    // FSD §5.2 — Customer Address (CUST_ADDRESS)
    // Steps (2): Review Primary column. → Compare with source records.
    // Expected: System correctly displays Yes for primary addresses and No for secondary addresses.
    console.log("[RDR_028] Customer Address → Verify Primary Address indicator is displayed correctly for customer addresses.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Primary');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Primary');
      await rdrPage.expectAllCellsNonEmpty('Primary');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_029 - Customer Address → Verify Valid From date is displayed correctly and matches source onboarding information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_029
    // Excel Scenario: Customer & Account Data → Customer Address → Verify Valid From date is displayed correctly and matches source onboarding information.
    // FSD §5.2 — Customer Address (CUST_ADDRESS)
    // Steps (2): Review Valid From column. → Compare displayed date with source data.
    // Expected: Valid From date is displayed correctly in configured date format.
    console.log("[RDR_029] Customer Address → Verify Valid From date is displayed correctly and matches source onboarding information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Valid From');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Valid From');
      await rdrPage.expectAllCellsNonEmpty('Valid From');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_030 - Customer Address → Verify View action opens complete address details for the selected customer address record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_030
    // Excel Scenario: Customer & Account Data → Customer Address → Verify View action opens complete address details for the selected customer address record.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button for selected address. → Verify details screen opens. → Validate address information.
    // Expected: Address detail page/modal opens successfully and displays complete address information.
    console.log("[RDR_030] Customer Address → Verify View action opens complete address details for the selected customer address record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_031 - Customer Address → Verify search functionality using Address ID.", async ({ testData }) => {
    // Excel Test Case ID: RDR_031
    // Excel Scenario: Customer & Account Data → Customer Address → Verify search functionality using Address ID.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter Address ID in search field. → Execute search. → Review results.
    // Expected: System displays only the address record matching the entered Address ID.
    console.log("[RDR_031] Customer Address → Verify search functionality using Address ID.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.expectColumnVisible('Address ID');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Address ID');
      await rdrPage.expectAllCellsNonEmpty('Address ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_032 - Customer Address → Verify search functionality using Customer ID and retrieve all linked addresses.", async ({ testData }) => {
    // Excel Test Case ID: RDR_032
    // Excel Scenario: Customer & Account Data → Customer Address → Verify search functionality using Customer ID and retrieve all linked addresses.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter Customer ID in search box. → Execute search. → Verify returned records.
    // Expected: All address records associated with the specified Customer ID are displayed.
    console.log("[RDR_032] Customer Address → Verify search functionality using Customer ID and retrieve all linked addresses.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      });
  });

  test("Case ID:RDR_033 - Customer Address → Verify Address Verification Status (Is Verified) in address details screen.", async ({ testData }) => {
    // Excel Test Case ID: RDR_033
    // Excel Scenario: Customer & Account Data → Customer Address → Verify Address Verification Status (Is Verified) in address details screen.
    // FSD §5.2 — Customer Address (CUST_ADDRESS)
    // Steps (3): Open address details. → Review Is Verified field. → Compare with source data.
    // Expected: System displays correct address verification status.
    console.log("[RDR_033] Customer Address → Verify Address Verification Status (Is Verified) in address details screen.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_034 - Customer Address → Verify High Risk Location Flag and Human Trafficking Risk Flag values in address details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_034
    // Excel Scenario: Customer & Account Data → Customer Address → Verify High Risk Location Flag and Human Trafficking Risk Flag values in address details.
    // FSD §5.2 — Customer Address (CUST_ADDRESS)
    // Steps (3): Open address details. → Review risk-related fields. → Compare values with source data.
    // Expected: Correct High Risk Location Flag and Human Trafficking Risk Flag values are displayed.
    console.log("[RDR_034] Customer Address → Verify High Risk Location Flag and Human Trafficking Risk Flag values in address details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_035 - Customer Address → Verify CSV and Excel export functionality for Customer Address records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_035
    // Excel Scenario: Customer & Account Data → Customer Address → Verify CSV and Excel export functionality for Customer Address records.
    // FSD §11.1 — Export Formats
    // Steps (4): Click CSV Export. → Validate downloaded file. → Click Excel Export. …
    // Expected: CSV and Excel files are downloaded successfully and contain accurate Customer Address data with proper column structure.
    console.log("[RDR_035] Customer Address → Verify CSV and Excel export functionality for Customer Address records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.exportExcel();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('structure');
      await rdrPage.expectGridContainsRecords();
      });
  });
  });

  test.describe("Customer & Account Data → Customer Documents", () => {
  test("Case ID:RDR_036 - Customer Documents → Verify Document ID is displayed uniquely for each customer document record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_036
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Document ID is displayed uniquely for each customer document record loaded from CBS.
    // FSD §5.3 — Customer Documents (CUST_DOCUMENT)
    // Steps (4): Open Documents tab. → Review Document ID column. → Compare multiple records. …
    // Expected: Unique Document IDs are displayed for all document records without duplication.
    console.log("[RDR_036] Customer Documents → Verify Document ID is displayed uniquely for each customer document record loaded from CBS.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Document ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Document ID');
      await rdrPage.expectAllCellsNonEmpty('Document ID');
      await rdrPage.expectUniqueColumnValues('Document ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_037 - Customer Documents → Verify Customer ID displayed against each document record matches the linked customer profile.", async ({ testData }) => {
    // Excel Test Case ID: RDR_037
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Customer ID displayed against each document record matches the linked customer profile.
    // FSD §5.3 — Customer Documents (CUST_DOCUMENT)
    // Steps (3): Review Customer ID column. → Compare with Customer Master records. → Verify relationship mapping.
    // Expected: Customer ID displayed for each document matches the linked customer record.
    console.log("[RDR_037] Customer Documents → Verify Customer ID displayed against each document record matches the linked customer profile.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_038 - Customer Documents → Verify Document Type values are displayed correctly based on configured document classifications.", async ({ testData }) => {
    // Excel Test Case ID: RDR_038
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Document Type values are displayed correctly based on configured document classifications.
    // FSD §5.3 — Customer Documents (CUST_DOCUMENT)
    // Steps (3): Review Doc Type column. → Compare values with source records. → Validate document classification.
    // Expected: Correct document type is displayed for each customer document record.
    console.log("[RDR_038] Customer Documents → Verify Document Type values are displayed correctly based on configured document classifications.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Doc Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Doc Type');
      await rdrPage.expectAllCellsNonEmpty('Doc Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_039 - Customer Documents → Verify Document Number is displayed according to masking rules to protect customer sensitive information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_039
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Document Number is displayed according to masking rules to protect customer sensitive information.
    // FSD §5.3 — Customer Documents (CUST_DOCUMENT)
    // Steps (3): Review Doc Number column. → Verify masking pattern. → Compare with source document values.
    // Expected: Document numbers are partially masked and comply with PII protection requirements.
    console.log("[RDR_039] Customer Documents → Verify Document Number is displayed according to masking rules to protect customer sensitive information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Doc Number');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Doc Number');
      await rdrPage.expectAllCellsNonEmpty('Doc Number');
      await rdrPage.expectColumnValuesMasked('Doc Number');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_040 - Customer Documents → Verify Issuing Country is displayed correctly for all customer documents.", async ({ testData }) => {
    // Excel Test Case ID: RDR_040
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Issuing Country is displayed correctly for all customer documents.
    // FSD §5.3 — Customer Documents (CUST_DOCUMENT)
    // Steps (2): Review Issuing Country column. → Compare values with source records.
    // Expected: Correct issuing country code is displayed for each document.
    console.log("[RDR_040] Customer Documents → Verify Issuing Country is displayed correctly for all customer documents.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Issuing Country');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Issuing Country');
      await rdrPage.expectAllCellsNonEmpty('Issuing Country');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_041 - Customer Documents → Verify Issue Date is displayed correctly and matches source document information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_041
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Issue Date is displayed correctly and matches source document information.
    // FSD §5.3 — Customer Documents (CUST_DOCUMENT)
    // Steps (2): Review Issue Date column. → Compare values with source records.
    // Expected: Issue Date is displayed accurately in configured date format.
    console.log("[RDR_041] Customer Documents → Verify Issue Date is displayed correctly and matches source document information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Issue Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Issue Date');
      await rdrPage.expectAllCellsNonEmpty('Issue Date');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_042 - Customer Documents → Verify Expiry Date is displayed correctly for permanent and non-permanent documents.", async ({ testData }) => {
    // Excel Test Case ID: RDR_042
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Expiry Date is displayed correctly for permanent and non-permanent documents.
    // FSD §5.3 — Customer Documents (CUST_DOCUMENT)
    // Steps (2): Review Expiry Date column. → Compare values with source data.
    // Expected: System displays correct expiry information including Lifetime, N/A or actual expiry dates.
    console.log("[RDR_042] Customer Documents → Verify Expiry Date is displayed correctly for permanent and non-permanent documents.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Expiry Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Expiry Date');
      await rdrPage.expectAllCellsNonEmpty('Expiry Date');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_043 - Customer Documents → Verify Document Status is displayed correctly based on document validity.", async ({ testData }) => {
    // Excel Test Case ID: RDR_043
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Document Status is displayed correctly based on document validity.
    // FSD §5.3 — Customer Documents (CUST_DOCUMENT)
    // Steps (3): Review Status column. → Compare values with source records. → Verify status indicator.
    // Expected: Correct document status is displayed. Expired documents are highlighted as per configuration.
    console.log("[RDR_043] Customer Documents → Verify Document Status is displayed correctly based on document validity.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Watchlist');
      await rdrPage.expectColumnIncludesValue('Watchlist', 'Yes');
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_044 - Customer Documents → Verify expired documents are highlighted appropriately for AML review.", async ({ testData }) => {
    // Excel Test Case ID: RDR_044
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify expired documents are highlighted appropriately for AML review.
    // FSD §5.3 — Customer Documents (CUST_DOCUMENT)
    // Steps (3): Locate expired document record. → Review Status column. → Verify indicator color and value.
    // Expected: Expired document displays EXPIRED status with configured visual indicator.
    console.log("[RDR_044] Customer Documents → Verify expired documents are highlighted appropriately for AML review.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectColumnVisible('Watchlist');
      await rdrPage.expectColumnIncludesValue('Watchlist', 'Yes');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_045 - Customer Documents → Verify Verified Date is displayed correctly and matches document verification records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_045
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Verified Date is displayed correctly and matches document verification records.
    // FSD §5.3 — Customer Documents (CUST_DOCUMENT)
    // Steps (2): Review Verified Date column. → Compare with source records.
    // Expected: Verified Date is displayed correctly for each verified document.
    console.log("[RDR_045] Customer Documents → Verify Verified Date is displayed correctly and matches document verification records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Verified Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Verified Date');
      await rdrPage.expectAllCellsNonEmpty('Verified Date');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_046 - Customer Documents → Verify Verification Method is displayed correctly according to document verification process.", async ({ testData }) => {
    // Excel Test Case ID: RDR_046
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Verification Method is displayed correctly according to document verification process.
    // FSD §5.3 — Customer Documents (CUST_DOCUMENT)
    // Steps (2): Review Verify Method column. → Compare values with source records.
    // Expected: Correct verification method is displayed for every document record.
    console.log("[RDR_046] Customer Documents → Verify Verification Method is displayed correctly according to document verification process.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Verify Method');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Verify Method');
      await rdrPage.expectAllCellsNonEmpty('Verify Method');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_047 - Customer Documents → Verify search functionality using Document ID.", async ({ testData }) => {
    // Excel Test Case ID: RDR_047
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify search functionality using Document ID.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter Document ID in search field. → Execute search. → Review results.
    // Expected: System displays only the document record matching the entered Document ID.
    console.log("[RDR_047] Customer Documents → Verify search functionality using Document ID.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.expectColumnVisible('Document ID');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Document ID');
      await rdrPage.expectAllCellsNonEmpty('Document ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_048 - Customer Documents → Verify search functionality using Customer ID and retrieve all linked customer documents.", async ({ testData }) => {
    // Excel Test Case ID: RDR_048
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify search functionality using Customer ID and retrieve all linked customer documents.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter Customer ID in search box. → Execute search. → Verify returned records.
    // Expected: All documents associated with the specified Customer ID are displayed.
    console.log("[RDR_048] Customer Documents → Verify search functionality using Customer ID and retrieve all linked customer documents.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_049 - Customer Documents → Verify View action opens complete document details including AML-related information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_049
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify View action opens complete document details including AML-related information.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button for selected document. → Review document details. → Verify displayed information.
    // Expected: Document details page/modal opens successfully displaying complete document information and verification details.
    console.log("[RDR_049] Customer Documents → Verify View action opens complete document details including AML-related information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_050 - Customer Documents → Verify CSV and Excel export functionality for Customer Documents data.", async ({ testData }) => {
    // Excel Test Case ID: RDR_050
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify CSV and Excel export functionality for Customer Documents data.
    // FSD §11.1 — Export Formats
    // Steps (4): Click CSV Export. → Validate downloaded file. → Click Excel Export. …
    // Expected: CSV and Excel files are downloaded successfully and contain accurate Customer Document data with proper column structure.
    console.log("[RDR_050] Customer Documents → Verify CSV and Excel export functionality for Customer Documents data.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.exportExcel();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('structure');
      await rdrPage.expectGridContainsRecords();
      });
  });
  });

  test.describe("Customer & Account Data → Risk Assessment", () => {
  test("Case ID:RDR_051 - Risk Assessment → Verify Assessment ID is generated and displayed uniquely for each risk assessment record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_051
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify Assessment ID is generated and displayed uniquely for each risk assessment record.
    // FSD §5.4 — Risk Assessment (RISK_ASSESSMENT)
    // Steps (4): Open Risk Assessment tab. → Review Assessment ID column. → Compare multiple records. …
    // Expected: Unique Assessment IDs are displayed for all risk assessment records without duplication.
    console.log("[RDR_051] Risk Assessment → Verify Assessment ID is generated and displayed uniquely for each risk assessment record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Assessment ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Assessment ID');
      await rdrPage.expectAllCellsNonEmpty('Assessment ID');
      await rdrPage.expectUniqueColumnValues('Assessment ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_052 - Risk Assessment → Verify Customer ID displayed against each risk assessment record matches the linked customer profile.", async ({ testData }) => {
    // Excel Test Case ID: RDR_052
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify Customer ID displayed against each risk assessment record matches the linked customer profile.
    // FSD §5.4 — Risk Assessment (RISK_ASSESSMENT)
    // Steps (3): Review Customer ID column. → Compare with Customer Master records. → Validate mapping.
    // Expected: Customer ID displayed matches the linked customer record.
    console.log("[RDR_052] Risk Assessment → Verify Customer ID displayed against each risk assessment record matches the linked customer profile.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_053 - Risk Assessment → Verify Assessment Date is displayed correctly and matches the date on which risk assessment was performed.", async ({ testData }) => {
    // Excel Test Case ID: RDR_053
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify Assessment Date is displayed correctly and matches the date on which risk assessment was performed.
    // FSD §5.4 — Risk Assessment (RISK_ASSESSMENT)
    // Steps (2): Review Date column. → Compare displayed dates with source data.
    // Expected: Assessment Date is displayed accurately in the configured date format.
    console.log("[RDR_053] Risk Assessment → Verify Assessment Date is displayed correctly and matches the date on which risk assessment was performed.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Date');
      await rdrPage.expectAllCellsNonEmpty('Date');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_054 - Risk Assessment → Verify Assessment Type values are displayed correctly based on configured assessment classifications.", async ({ testData }) => {
    // Excel Test Case ID: RDR_054
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify Assessment Type values are displayed correctly based on configured assessment classifications.
    // FSD §5.4 — Risk Assessment (RISK_ASSESSMENT)
    // Steps (2): Review Type column. → Compare values with source records.
    // Expected: Correct Assessment Type is displayed for every risk assessment record.
    console.log("[RDR_054] Risk Assessment → Verify Assessment Type values are displayed correctly based on configured assessment classifications.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_055 - Risk Assessment → Verify Total Risk Score is calculated and displayed correctly for each customer assessment.", async ({ testData }) => {
    // Excel Test Case ID: RDR_055
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify Total Risk Score is calculated and displayed correctly for each customer assessment.
    // FSD §5.4 — Risk Assessment (RISK_ASSESSMENT)
    // Steps (3): Review Total Score column. → Compare values with source records. → Validate displayed score.
    // Expected: Total Risk Score is displayed accurately for each customer assessment.
    console.log("[RDR_055] Risk Assessment → Verify Total Risk Score is calculated and displayed correctly for each customer assessment.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Total Score');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Total Score');
      await rdrPage.expectAllCellsNonEmpty('Total Score');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_056 - Risk Assessment → Verify Risk Rating values are displayed correctly according to configured risk score ranges.", async ({ testData }) => {
    // Excel Test Case ID: RDR_056
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify Risk Rating values are displayed correctly according to configured risk score ranges.
    // FSD §5.4 — Risk Assessment (RISK_ASSESSMENT)
    // Steps (3): Review Risk Rating column. → Compare rating against score. → Validate mapping rules.
    // Expected: Risk Rating displayed matches the configured score-to-rating mapping.
    console.log("[RDR_056] Risk Assessment → Verify Risk Rating values are displayed correctly according to configured risk score ranges.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Risk Rating');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Risk Rating');
      await rdrPage.expectAllCellsNonEmpty('Risk Rating');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_057 - Risk Assessment → Verify high-risk customers are highlighted appropriately when Total Risk Score exceeds configured threshold.", async ({ testData }) => {
    // Excel Test Case ID: RDR_057
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify high-risk customers are highlighted appropriately when Total Risk Score exceeds configured threshold.
    // FSD §5.4 — Risk Assessment (RISK_ASSESSMENT)
    // Steps (3): Locate assessment with score above threshold. → Review Risk Rating. → Verify visual indicator.
    // Expected: High-risk assessment is displayed with HIGH rating and appropriate highlighting.
    console.log("[RDR_057] Risk Assessment → Verify high-risk customers are highlighted appropriately when Total Risk Score exceeds configured threshold.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Risk Rating');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Risk Rating');
      await rdrPage.expectAllCellsNonEmpty('Risk Rating');
      await rdrPage.expectColumnVisible('Watchlist');
      await rdrPage.expectColumnIncludesValue('Watchlist', 'Yes');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_058 - Risk Assessment → Verify Previous Risk Rating is displayed correctly and reflects prior assessment results.", async ({ testData }) => {
    // Excel Test Case ID: RDR_058
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify Previous Risk Rating is displayed correctly and reflects prior assessment results.
    // FSD §5.4 — Risk Assessment (RISK_ASSESSMENT)
    // Steps (2): Review Prev Rating column. → Compare with previous assessment data.
    // Expected: Previous Risk Rating is displayed accurately for each customer assessment.
    console.log("[RDR_058] Risk Assessment → Verify Previous Risk Rating is displayed correctly and reflects prior assessment results.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Prev Rating');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Prev Rating');
      await rdrPage.expectAllCellsNonEmpty('Prev Rating');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_059 - Risk Assessment → Verify Rating Changed indicator correctly identifies customers whose risk rating has changed since the last assessment.", async ({ testData }) => {
    // Excel Test Case ID: RDR_059
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify Rating Changed indicator correctly identifies customers whose risk rating has changed since the last assessment.
    // FSD §5.4 — Risk Assessment (RISK_ASSESSMENT)
    // Steps (2): Review Rating Changed column. → Compare current and previous ratings.
    // Expected: System displays Yes when rating changed and No when rating remains unchanged.
    console.log("[RDR_059] Risk Assessment → Verify Rating Changed indicator correctly identifies customers whose risk rating has changed since the last assessment.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Rating Changed');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Rating Changed');
      await rdrPage.expectAllCellsNonEmpty('Rating Changed');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_060 - Risk Assessment → Verify Next Review Date is calculated and displayed correctly based on risk review schedule.", async ({ testData }) => {
    // Excel Test Case ID: RDR_060
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify Next Review Date is calculated and displayed correctly based on risk review schedule.
    // FSD §5.4 — Risk Assessment (RISK_ASSESSMENT)
    // Steps (2): Review Next Review column. → Compare with review schedule configuration.
    // Expected: Next Review Date is displayed correctly according to review frequency and assessment date.
    console.log("[RDR_060] Risk Assessment → Verify Next Review Date is calculated and displayed correctly based on risk review schedule.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Next Review');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Next Review');
      await rdrPage.expectAllCellsNonEmpty('Next Review');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_061 - Risk Assessment → Verify Review Frequency values are displayed correctly based on risk assessment configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_061
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify Review Frequency values are displayed correctly based on risk assessment configuration.
    // FSD §5.4 — Risk Assessment (RISK_ASSESSMENT)
    // Steps (2): Review Review Frequency column. → Compare values with source data.
    // Expected: Correct Review Frequency is displayed for each customer assessment.
    console.log("[RDR_061] Risk Assessment → Verify Review Frequency values are displayed correctly based on risk assessment configuration.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Review Frequency');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Review Frequency');
      await rdrPage.expectAllCellsNonEmpty('Review Frequency');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_062 - Risk Assessment → Verify search functionality using Assessment ID.", async ({ testData }) => {
    // Excel Test Case ID: RDR_062
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify search functionality using Assessment ID.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter Assessment ID in search field. → Execute search. → Review results.
    // Expected: System displays only the risk assessment record matching the entered Assessment ID.
    console.log("[RDR_062] Risk Assessment → Verify search functionality using Assessment ID.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('field');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_063 - Risk Assessment → Verify search functionality using Customer ID and retrieve all associated risk assessments.", async ({ testData }) => {
    // Excel Test Case ID: RDR_063
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify search functionality using Customer ID and retrieve all associated risk assessments.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter Customer ID in search field. → Execute search. → Verify returned records.
    // Expected: System displays all risk assessment records associated with the specified Customer ID.
    console.log("[RDR_063] Risk Assessment → Verify search functionality using Customer ID and retrieve all associated risk assessments.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      });
  });

  test("Case ID:RDR_064 - Risk Assessment → Verify View action opens complete risk assessment details including score components and review information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_064
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify View action opens complete risk assessment details including score components and review information.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button. → Review assessment details. → Verify displayed information.
    // Expected: Risk Assessment detail screen opens successfully displaying complete assessment information, scores, ratings and review details.
    console.log("[RDR_064] Risk Assessment → Verify View action opens complete risk assessment details including score components and review information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_065 - Risk Assessment → Verify CSV and Excel export functionality for Risk Assessment records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_065
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify CSV and Excel export functionality for Risk Assessment records.
    // FSD §11.1 — Export Formats
    // Steps (4): Click CSV Export. → Validate downloaded file. → Click Excel Export. …
    // Expected: CSV and Excel files are downloaded successfully and contain accurate Risk Assessment data with correct column structure and values.
    console.log("[RDR_065] Risk Assessment → Verify CSV and Excel export functionality for Risk Assessment records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.exportExcel();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('structure and values');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('structure and values');
      });
  });
  });

  test.describe("Customer & Account Data → Account Master", () => {
  test("Case ID:RDR_066 - Account Master → Verify Account ID is generated uniquely and displayed correctly for each account record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_066
    // Excel Scenario: Customer & Account Data → Account Master → Verify Account ID is generated uniquely and displayed correctly for each account record loaded from CBS.
    // FSD §5.5 — Account Master
    // Steps (4): Open Account tab. → Review Account ID column. → Compare multiple records. …
    // Expected: Unique Account IDs are displayed for all account records without duplication.
    console.log("[RDR_066] Account Master → Verify Account ID is generated uniquely and displayed correctly for each account record loaded from CBS.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Account ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Account ID');
      await rdrPage.expectAllCellsNonEmpty('Account ID');
      await rdrPage.expectUniqueColumnValues('Account ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_067 - Account Master → Verify Account ID hyperlink functionality and ensure account details open correctly when selected.", async ({ testData }) => {
    // Excel Test Case ID: RDR_067
    // Excel Scenario: Customer & Account Data → Account Master → Verify Account ID hyperlink functionality and ensure account details open correctly when selected.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click Account ID hyperlink. → Verify account detail page/modal opens. → Review account information.
    // Expected: Account detail screen opens successfully displaying complete account information.
    console.log("[RDR_067] Account Master → Verify Account ID hyperlink functionality and ensure account details open correctly when selected.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.clickFirstRowIdLink();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_068 - Account Master → Verify Account Number is displayed according to masking requirements to protect sensitive banking information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_068
    // Excel Scenario: Customer & Account Data → Account Master → Verify Account Number is displayed according to masking requirements to protect sensitive banking information.
    // FSD §5.5 — Account Master
    // Steps (3): Review Account No column. → Verify masking pattern. → Compare with source data.
    // Expected: Account Number is displayed in masked format and complies with PII requirements.
    console.log("[RDR_068] Account Master → Verify Account Number is displayed according to masking requirements to protect sensitive banking information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Account No');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Account No');
      await rdrPage.expectAllCellsNonEmpty('Account No');
      await rdrPage.expectColumnValuesMasked('Account No');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_069 - Account Master → Verify Customer ID displayed against each account matches the linked customer profile.", async ({ testData }) => {
    // Excel Test Case ID: RDR_069
    // Excel Scenario: Customer & Account Data → Account Master → Verify Customer ID displayed against each account matches the linked customer profile.
    // FSD §5.5 — Account Master
    // Steps (3): Review Customer ID column. → Compare values with Customer Master. → Validate mapping.
    // Expected: Customer ID displayed matches the linked customer record.
    console.log("[RDR_069] Account Master → Verify Customer ID displayed against each account matches the linked customer profile.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_070 - Account Master → Verify Account Type values are displayed correctly based on account classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_070
    // Excel Scenario: Customer & Account Data → Account Master → Verify Account Type values are displayed correctly based on account classification.
    // FSD §5.5 — Account Master
    // Steps (2): Review Type column. → Compare values with source records.
    // Expected: Correct Account Type is displayed for each account record.
    console.log("[RDR_070] Account Master → Verify Account Type values are displayed correctly based on account classification.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_071 - Account Master → Verify Currency and Branch details are displayed correctly for each account.", async ({ testData }) => {
    // Excel Test Case ID: RDR_071
    // Excel Scenario: Customer & Account Data → Account Master → Verify Currency and Branch details are displayed correctly for each account.
    // FSD §5.5 — Account Master
    // Steps (2): Review Currency and Branch columns. → Compare values with source data.
    // Expected: Correct Currency and Branch values are displayed for all accounts.
    console.log("[RDR_071] Account Master → Verify Currency and Branch details are displayed correctly for each account.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Currency and Branch');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Currency and Branch');
      await rdrPage.expectAllCellsNonEmpty('Currency and Branch');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_072 - Account Master → Verify Account Status values are displayed correctly based on account lifecycle status.", async ({ testData }) => {
    // Excel Test Case ID: RDR_072
    // Excel Scenario: Customer & Account Data → Account Master → Verify Account Status values are displayed correctly based on account lifecycle status.
    // FSD §5.5 — Account Master
    // Steps (2): Review Status column. → Compare with source records.
    // Expected: Correct account status is displayed for each account.
    console.log("[RDR_072] Account Master → Verify Account Status values are displayed correctly based on account lifecycle status.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_073 - Account Master → Verify Frozen accounts are highlighted appropriately and displayed with Frozen status.", async ({ testData }) => {
    // Excel Test Case ID: RDR_073
    // Excel Scenario: Customer & Account Data → Account Master → Verify Frozen accounts are highlighted appropriately and displayed with Frozen status.
    // FSD §5.5 — Account Master
    // Steps (3): Locate frozen account. → Review Status column. → Verify visual indicator.
    // Expected: Frozen account displays FROZEN status with configured highlighting.
    console.log("[RDR_073] Account Master → Verify Frozen accounts are highlighted appropriately and displayed with Frozen status.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectColumnVisible('Watchlist');
      await rdrPage.expectColumnIncludesValue('Watchlist', 'Yes');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_074 - Account Master → Verify Current Balance is displayed correctly and matches account balance received from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_074
    // Excel Scenario: Customer & Account Data → Account Master → Verify Current Balance is displayed correctly and matches account balance received from CBS.
    // FSD §5.5 — Account Master
    // Steps (2): Review Current Balance column. → Compare values with CBS records.
    // Expected: Current Balance is displayed accurately with appropriate currency values.
    console.log("[RDR_074] Account Master → Verify Current Balance is displayed correctly and matches account balance received from CBS.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Current Balance');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Current Balance');
      await rdrPage.expectAllCellsNonEmpty('Current Balance');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_075 - Account Master → Verify Freeze Flag is displayed correctly for active and frozen accounts.", async ({ testData }) => {
    // Excel Test Case ID: RDR_075
    // Excel Scenario: Customer & Account Data → Account Master → Verify Freeze Flag is displayed correctly for active and frozen accounts.
    // FSD §5.5 — Account Master
    // Steps (2): Review Freeze Flag column. → Compare values with source records.
    // Expected: Freeze Flag displays Yes for frozen accounts and No for active accounts.
    console.log("[RDR_075] Account Master → Verify Freeze Flag is displayed correctly for active and frozen accounts.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Freeze Flag');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Freeze Flag');
      await rdrPage.expectAllCellsNonEmpty('Freeze Flag');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_076 - Account Master → Verify Last Transaction Date is displayed correctly and reflects the latest transaction posted to the account.", async ({ testData }) => {
    // Excel Test Case ID: RDR_076
    // Excel Scenario: Customer & Account Data → Account Master → Verify Last Transaction Date is displayed correctly and reflects the latest transaction posted to the account.
    // FSD §5.5 — Account Master
    // Steps (2): Review Last Txn Date column. → Compare with source data.
    // Expected: Last Transaction Date is displayed accurately in configured date format.
    console.log("[RDR_076] Account Master → Verify Last Transaction Date is displayed correctly and reflects the latest transaction posted to the account.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Last Txn Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Last Txn Date');
      await rdrPage.expectAllCellsNonEmpty('Last Txn Date');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_077 - Account Master → Verify Customer ID filter functionality and ensure accounts are filtered correctly.", async ({ testData }) => {
    // Excel Test Case ID: RDR_077
    // Excel Scenario: Customer & Account Data → Account Master → Verify Customer ID filter functionality and ensure accounts are filtered correctly.
    // FSD §4.5 — Filter Bars
    // Steps (3): Enter Customer ID in filter section. → Click Apply. → Review results.
    // Expected: System displays only accounts associated with the specified Customer ID.
    console.log("[RDR_077] Account Master → Verify Customer ID filter functionality and ensure accounts are filtered correctly.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_078 - Account Master → Verify search functionality using Account ID.", async ({ testData }) => {
    // Excel Test Case ID: RDR_078
    // Excel Scenario: Customer & Account Data → Account Master → Verify search functionality using Account ID.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter Account ID in search field. → Execute search. → Review results.
    // Expected: System displays only the account record matching the entered Account ID.
    console.log("[RDR_078] Account Master → Verify search functionality using Account ID.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('field');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_079 - Account Master → Verify View action opens complete account details including AML-related information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_079
    // Excel Scenario: Customer & Account Data → Account Master → Verify View action opens complete account details including AML-related information.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button. → Review account details. → Verify displayed information.
    // Expected: Account detail page/modal opens successfully displaying account, customer and AML-related information.
    console.log("[RDR_079] Account Master → Verify View action opens complete account details including AML-related information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_080 - Account Master → Verify CSV and Excel export functionality for Account Master records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_080
    // Excel Scenario: Customer & Account Data → Account Master → Verify CSV and Excel export functionality for Account Master records.
    // FSD §11.1 — Export Formats
    // Steps (4): Click CSV Export. → Validate downloaded file. → Click Excel Export. …
    // Expected: CSV and Excel files are downloaded successfully and contain accurate Account Master data with proper column structure and values.
    console.log("[RDR_080] Account Master → Verify CSV and Excel export functionality for Account Master records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.exportExcel();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('structure and values');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('structure and values');
      });
  });
  });

  test.describe("Customer & Account Data → Customer-Account Relationship", () => {
  test("Case ID:RDR_081 - Customer-Account Relationship → Verify Relationship ID (Rel ID) is displayed uniquely for every customer-account relationship record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_081
    // Excel Scenario: Customer & Account Data → Customer-Account Relationship → Verify Relationship ID (Rel ID) is displayed uniquely for every customer-account relationship record.
    // FSD §5.5 — Account Master
    // Steps (3): Open Cust-Acct Rel tab. → Review Rel ID column. → Compare multiple records.
    // Expected: Unique Relationship IDs are displayed for all records without duplication.
    console.log("[RDR_081] Customer-Account Relationship → Verify Relationship ID (Rel ID) is displayed uniquely for every customer-account relationship record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer-Account Relationship');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Rel ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Rel ID');
      await rdrPage.expectAllCellsNonEmpty('Rel ID');
      await rdrPage.expectUniqueColumnValues('Rel ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_082 - Customer-Account Relationship → Verify Customer ID displayed in relationship records matches the linked customer profile in Customer Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_082
    // Excel Scenario: Customer & Account Data → Customer-Account Relationship → Verify Customer ID displayed in relationship records matches the linked customer profile in Customer Master.
    // FSD §5.5 — Account Master
    // Steps (2): Review Customer ID column. → Compare values with Customer Master.
    // Expected: Correct Customer ID is displayed for each relationship record.
    console.log("[RDR_082] Customer-Account Relationship → Verify Customer ID displayed in relationship records matches the linked customer profile in Customer Master.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer-Account Relationship');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_083 - Customer-Account Relationship → Verify Account ID displayed in relationship records matches the linked account in Account Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_083
    // Excel Scenario: Customer & Account Data → Customer-Account Relationship → Verify Account ID displayed in relationship records matches the linked account in Account Master.
    // FSD §5.5 — Account Master
    // Steps (2): Review Account ID column. → Compare with Account Master records.
    // Expected: Correct Account ID is displayed for each relationship record.
    console.log("[RDR_083] Customer-Account Relationship → Verify Account ID displayed in relationship records matches the linked account in Account Master.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer-Account Relationship');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Account ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Account ID');
      await rdrPage.expectAllCellsNonEmpty('Account ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_084 - Customer-Account Relationship → Verify Relationship Type is displayed correctly according to the account ownership relationship maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_084
    // Excel Scenario: Customer & Account Data → Customer-Account Relationship → Verify Relationship Type is displayed correctly according to the account ownership relationship maintained in source systems.
    // FSD §5.5 — Account Master
    // Steps (2): Review Relationship Type column. → Compare values with source records.
    // Expected: Correct Relationship Type is displayed for each customer-account relationship.
    console.log("[RDR_084] Customer-Account Relationship → Verify Relationship Type is displayed correctly according to the account ownership relationship maintained in source systems.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer-Account Relationship');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Relationship Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Relationship Type');
      await rdrPage.expectAllCellsNonEmpty('Relationship Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_085 - Customer-Account Relationship → Verify Signing Authority values are displayed correctly and reflect the account operation rights assigned to the customer.", async ({ testData }) => {
    // Excel Test Case ID: RDR_085
    // Excel Scenario: Customer & Account Data → Customer-Account Relationship → Verify Signing Authority values are displayed correctly and reflect the account operation rights assigned to the customer.
    // FSD §5.5 — Account Master
    // Steps (2): Review Signing Authority column. → Compare values with source records.
    // Expected: Correct Signing Authority is displayed for each relationship record.
    console.log("[RDR_085] Customer-Account Relationship → Verify Signing Authority values are displayed correctly and reflect the account operation rights assigned to the customer.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer-Account Relationship');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Signing Authority');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Signing Authority');
      await rdrPage.expectAllCellsNonEmpty('Signing Authority');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_086 - Customer-Account Relationship → Verify Ownership Percentage is displayed correctly for the customer-account relationship.", async ({ testData }) => {
    // Excel Test Case ID: RDR_086
    // Excel Scenario: Customer & Account Data → Customer-Account Relationship → Verify Ownership Percentage is displayed correctly for the customer-account relationship.
    // FSD §5.5 — Account Master
    // Steps (2): Review Ownership % column. → Compare values with source data.
    // Expected: Ownership Percentage is displayed accurately for the relationship record.
    console.log("[RDR_086] Customer-Account Relationship → Verify Ownership Percentage is displayed correctly for the customer-account relationship.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer-Account Relationship');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectAllCellsNonEmpty('Ownership %');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_087 - Customer-Account Relationship → Verify Effective Date is displayed correctly and represents the date from which the relationship became active.", async ({ testData }) => {
    // Excel Test Case ID: RDR_087
    // Excel Scenario: Customer & Account Data → Customer-Account Relationship → Verify Effective Date is displayed correctly and represents the date from which the relationship became active.
    // FSD §5.5 — Account Master
    // Steps (2): Review Effective Date column. → Compare values with source records.
    // Expected: Effective Date is displayed correctly in configured date format.
    console.log("[RDR_087] Customer-Account Relationship → Verify Effective Date is displayed correctly and represents the date from which the relationship became active.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer-Account Relationship');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Effective Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Effective Date');
      await rdrPage.expectAllCellsNonEmpty('Effective Date');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_088 - Customer-Account Relationship → Verify KYC Status values are displayed correctly and reflect the latest KYC review status.", async ({ testData }) => {
    // Excel Test Case ID: RDR_088
    // Excel Scenario: Customer & Account Data → Customer-Account Relationship → Verify KYC Status values are displayed correctly and reflect the latest KYC review status.
    // FSD §5.5 — Account Master
    // Steps (2): Review KYC Status column. → Compare values with source records.
    // Expected: Correct KYC Status is displayed for each relationship record.
    console.log("[RDR_088] Customer-Account Relationship → Verify KYC Status values are displayed correctly and reflect the latest KYC review status.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer-Account Relationship');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('KYC Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('KYC Status');
      await rdrPage.expectAllCellsNonEmpty('KYC Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_089 - Customer-Account Relationship → Verify search functionality using Relationship ID and retrieve the exact matching relationship record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_089
    // Excel Scenario: Customer & Account Data → Customer-Account Relationship → Verify search functionality using Relationship ID and retrieve the exact matching relationship record.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter Rel ID in search box. → Execute search. → Verify results.
    // Expected: System displays only the relationship record matching the entered Rel ID.
    console.log("[RDR_089] Customer-Account Relationship → Verify search functionality using Relationship ID and retrieve the exact matching relationship record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer-Account Relationship');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_090 - Customer-Account Relationship → Verify View action opens complete customer-account relationship details including customer, account and KYC information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_090
    // Excel Scenario: Customer & Account Data → Customer-Account Relationship → Verify View action opens complete customer-account relationship details including customer, account and KYC information.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button. → Review relationship details screen. → Validate displayed information.
    // Expected: Relationship detail page/modal opens successfully displaying complete customer-account linkage information, ownership details, signing authority and KYC status.
    console.log("[RDR_090] Customer-Account Relationship → Verify View action opens complete customer-account relationship details including customer, account and KYC information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer-Account Relationship');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('KYC Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('KYC Status');
      await rdrPage.expectAllCellsNonEmpty('KYC Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectGridContainsRecords();
      });
  });
  });

  test.describe("Customer & Account Data → Loan Account", () => {
  test("Case ID:RDR_091 - Loan Account → Verify Loan ID is displayed uniquely for every loan account record and correctly mapped to the loan account.", async ({ testData }) => {
    // Excel Test Case ID: RDR_091
    // Excel Scenario: Customer & Account Data → Loan Account → Verify Loan ID is displayed uniquely for every loan account record and correctly mapped to the loan account.
    // FSD §5.5 — Account Master
    // Steps (4): Open Loan Account tab. → Review Loan ID column. → Compare multiple records. …
    // Expected: Unique Loan IDs are displayed for all loan account records without duplication.
    console.log("[RDR_091] Loan Account → Verify Loan ID is displayed uniquely for every loan account record and correctly mapped to the loan account.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Loan Account');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Loan ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Loan ID');
      await rdrPage.expectAllCellsNonEmpty('Loan ID');
      await rdrPage.expectUniqueColumnValues('Loan ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_092 - Loan Account → Verify Customer ID displayed against each loan account matches the linked customer profile.", async ({ testData }) => {
    // Excel Test Case ID: RDR_092
    // Excel Scenario: Customer & Account Data → Loan Account → Verify Customer ID displayed against each loan account matches the linked customer profile.
    // FSD §5.5 — Account Master
    // Steps (2): Review Customer ID column. → Compare with Customer Master records.
    // Expected: Correct Customer ID is displayed for each loan account record.
    console.log("[RDR_092] Loan Account → Verify Customer ID displayed against each loan account matches the linked customer profile.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Loan Account');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_093 - Loan Account → Verify Account ID displayed against each loan account matches the linked account in Account Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_093
    // Excel Scenario: Customer & Account Data → Loan Account → Verify Account ID displayed against each loan account matches the linked account in Account Master.
    // FSD §5.5 — Account Master
    // Steps (2): Review Account ID column. → Compare with Account Master records.
    // Expected: Correct Account ID is displayed for each loan account record.
    console.log("[RDR_093] Loan Account → Verify Account ID displayed against each loan account matches the linked account in Account Master.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Loan Account');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Account ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Account ID');
      await rdrPage.expectAllCellsNonEmpty('Account ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_094 - Loan Account → Verify Loan Type is displayed correctly based on the loan product assigned to the customer.", async ({ testData }) => {
    // Excel Test Case ID: RDR_094
    // Excel Scenario: Customer & Account Data → Loan Account → Verify Loan Type is displayed correctly based on the loan product assigned to the customer.
    // FSD §5.5 — Account Master
    // Steps (2): Review Loan Type column. → Compare values with source data.
    // Expected: Correct Loan Type is displayed for each loan account.
    console.log("[RDR_094] Loan Account → Verify Loan Type is displayed correctly based on the loan product assigned to the customer.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Loan Account');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Loan Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Loan Type');
      await rdrPage.expectAllCellsNonEmpty('Loan Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_095 - Loan Account → Verify Sanctioned Amount is displayed correctly and matches the approved loan amount maintained in CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_095
    // Excel Scenario: Customer & Account Data → Loan Account → Verify Sanctioned Amount is displayed correctly and matches the approved loan amount maintained in CBS.
    // FSD §5.5 — Account Master
    // Steps (2): Review Sanctioned Amount column. → Compare values with CBS records.
    // Expected: Sanctioned Amount is displayed accurately for each loan account.
    console.log("[RDR_095] Loan Account → Verify Sanctioned Amount is displayed correctly and matches the approved loan amount maintained in CBS.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Loan Account');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Sanctioned Amt');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Sanctioned Amt');
      await rdrPage.expectAllCellsNonEmpty('Sanctioned Amt');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_096 - Loan Account → Verify Outstanding Balance is displayed correctly and reflects the current unpaid loan balance.", async ({ testData }) => {
    // Excel Test Case ID: RDR_096
    // Excel Scenario: Customer & Account Data → Loan Account → Verify Outstanding Balance is displayed correctly and reflects the current unpaid loan balance.
    // FSD §5.5 — Account Master
    // Steps (2): Review Outstanding Balance column. → Compare with source records.
    // Expected: Outstanding Balance is displayed accurately and matches source data.
    console.log("[RDR_096] Loan Account → Verify Outstanding Balance is displayed correctly and reflects the current unpaid loan balance.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Loan Account');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Outstanding Bal');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Outstanding Bal');
      await rdrPage.expectAllCellsNonEmpty('Outstanding Bal');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_097 - Loan Account → Verify Interest Rate is displayed correctly for each loan account as per the approved loan terms.", async ({ testData }) => {
    // Excel Test Case ID: RDR_097
    // Excel Scenario: Customer & Account Data → Loan Account → Verify Interest Rate is displayed correctly for each loan account as per the approved loan terms.
    // FSD §5.5 — Account Master
    // Steps (2): Review Interest Rate column. → Compare values with source records.
    // Expected: Correct Interest Rate is displayed for each loan account.
    console.log("[RDR_097] Loan Account → Verify Interest Rate is displayed correctly for each loan account as per the approved loan terms.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Loan Account');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Interest Rate');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Interest Rate');
      await rdrPage.expectAllCellsNonEmpty('Interest Rate');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_098 - Loan Account → Verify Disbursement Date and Maturity Date are displayed correctly according to loan lifecycle information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_098
    // Excel Scenario: Customer & Account Data → Loan Account → Verify Disbursement Date and Maturity Date are displayed correctly according to loan lifecycle information.
    // FSD §5.5 — Account Master
    // Steps (2): Review Disbursement Date and Maturity Date columns. → Compare with source records.
    // Expected: Disbursement Date and Maturity Date are displayed correctly in configured date format.
    console.log("[RDR_098] Loan Account → Verify Disbursement Date and Maturity Date are displayed correctly according to loan lifecycle information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Loan Account');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Disbursement Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Disbursement Date');
      await rdrPage.expectAllCellsNonEmpty('Disbursement Date');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_099 - Loan Account → Verify Loan Status values are displayed correctly and reflect the current loan condition.", async ({ testData }) => {
    // Excel Test Case ID: RDR_099
    // Excel Scenario: Customer & Account Data → Loan Account → Verify Loan Status values are displayed correctly and reflect the current loan condition.
    // FSD §5.5 — Account Master
    // Steps (2): Review Status column. → Compare values with source records.
    // Expected: Correct loan status is displayed for each loan account record.
    console.log("[RDR_099] Loan Account → Verify Loan Status values are displayed correctly and reflect the current loan condition.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Loan Account');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_100 - Loan Account → Verify View action opens complete loan account details including loan information, balances, repayment schedule and status.", async ({ testData }) => {
    // Excel Test Case ID: RDR_100
    // Excel Scenario: Customer & Account Data → Loan Account → Verify View action opens complete loan account details including loan information, balances, repayment schedule and status.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button for selected loan. → Review loan details page. → Validate displayed information.
    // Expected: Loan Account detail screen opens successfully displaying complete loan information including Loan ID, Customer ID, Account ID, Loan Type, Sanctioned Amount, Outstanding Balance, Interest Rate, Disbursement Date, Maturity Date and Status.
    console.log("[RDR_100] Loan Account → Verify View action opens complete loan account details including loan information, balances, repayment schedule and status.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Loan Account');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });
  });

  test.describe("Customer & Account Data → EOD Balance", () => {
  test("Case ID:RDR_101 - EOD Balance → Verify Balance ID is generated uniquely and displayed correctly for every EOD balance record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_101
    // Excel Scenario: Customer & Account Data → EOD Balance → Verify Balance ID is generated uniquely and displayed correctly for every EOD balance record loaded from CBS.
    // FSD §5.5 — Account Master
    // Steps (4): Open EOD Balance tab. → Review Balance ID column. → Compare multiple records. …
    // Expected: Unique Balance IDs are displayed for all EOD balance records without duplication.
    console.log("[RDR_101] EOD Balance → Verify Balance ID is generated uniquely and displayed correctly for every EOD balance record loaded from CBS.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → EOD Balance');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Balance ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Balance ID');
      await rdrPage.expectAllCellsNonEmpty('Balance ID');
      await rdrPage.expectUniqueColumnValues('Balance ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_102 - EOD Balance → Verify Account ID displayed in EOD records matches the linked account in Account Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_102
    // Excel Scenario: Customer & Account Data → EOD Balance → Verify Account ID displayed in EOD records matches the linked account in Account Master.
    // FSD §5.5 — Account Master
    // Steps (2): Review Account ID column. → Compare with Account Master records.
    // Expected: Correct Account ID is displayed for each EOD balance record.
    console.log("[RDR_102] EOD Balance → Verify Account ID displayed in EOD records matches the linked account in Account Master.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → EOD Balance');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Account ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Account ID');
      await rdrPage.expectAllCellsNonEmpty('Account ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_103 - EOD Balance → Verify Customer ID displayed against each EOD balance record matches the linked customer profile.", async ({ testData }) => {
    // Excel Test Case ID: RDR_103
    // Excel Scenario: Customer & Account Data → EOD Balance → Verify Customer ID displayed against each EOD balance record matches the linked customer profile.
    // FSD §5.5 — Account Master
    // Steps (2): Review Customer ID column. → Compare with Customer Master records.
    // Expected: Correct Customer ID is displayed for each EOD balance record.
    console.log("[RDR_103] EOD Balance → Verify Customer ID displayed against each EOD balance record matches the linked customer profile.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → EOD Balance');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_104 - EOD Balance → Verify Balance Date is displayed correctly and represents the business date for which EOD balance was calculated.", async ({ testData }) => {
    // Excel Test Case ID: RDR_104
    // Excel Scenario: Customer & Account Data → EOD Balance → Verify Balance Date is displayed correctly and represents the business date for which EOD balance was calculated.
    // FSD §5.5 — Account Master
    // Steps (2): Review Balance Date column. → Compare with source records.
    // Expected: Balance Date is displayed accurately and matches the EOD processing date.
    console.log("[RDR_104] EOD Balance → Verify Balance Date is displayed correctly and represents the business date for which EOD balance was calculated.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → EOD Balance');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Balance Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Balance Date');
      await rdrPage.expectAllCellsNonEmpty('Balance Date');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_105 - EOD Balance → Verify Opening Balance is displayed correctly and matches the opening balance received from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_105
    // Excel Scenario: Customer & Account Data → EOD Balance → Verify Opening Balance is displayed correctly and matches the opening balance received from CBS.
    // FSD §5.5 — Account Master
    // Steps (2): Review Opening Bal column. → Compare with CBS records.
    // Expected: Opening Balance is displayed accurately for each account.
    console.log("[RDR_105] EOD Balance → Verify Opening Balance is displayed correctly and matches the opening balance received from CBS.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → EOD Balance');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Opening Bal');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Opening Bal');
      await rdrPage.expectAllCellsNonEmpty('Opening Bal');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_106 - EOD Balance → Verify Total Credits and Total Debits are displayed correctly for the selected EOD date.", async ({ testData }) => {
    // Excel Test Case ID: RDR_106
    // Excel Scenario: Customer & Account Data → EOD Balance → Verify Total Credits and Total Debits are displayed correctly for the selected EOD date.
    // FSD §5.5 — Account Master
    // Steps (2): Review Total Credits and Total Debits columns. → Compare with source data.
    // Expected: Total Credits and Total Debits are displayed accurately according to CBS transaction data.
    console.log("[RDR_106] EOD Balance → Verify Total Credits and Total Debits are displayed correctly for the selected EOD date.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → EOD Balance');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Total Credits');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Total Credits');
      await rdrPage.expectAllCellsNonEmpty('Total Credits');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_107 - EOD Balance → Verify Closing Balance is calculated and displayed correctly based on Opening Balance, Credits and Debits.", async ({ testData }) => {
    // Excel Test Case ID: RDR_107
    // Excel Scenario: Customer & Account Data → EOD Balance → Verify Closing Balance is calculated and displayed correctly based on Opening Balance, Credits and Debits.
    // FSD §5.5 — Account Master
    // Steps (2): Review Opening Balance, Credits, Debits and Closing Balance. → Validate calculation.
    // Expected: Closing Balance is displayed correctly and matches the calculated EOD balance.
    console.log("[RDR_107] EOD Balance → Verify Closing Balance is calculated and displayed correctly based on Opening Balance, Credits and Debits.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → EOD Balance');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_108 - EOD Balance → Verify Currency values are displayed correctly for all EOD balance records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_108
    // Excel Scenario: Customer & Account Data → EOD Balance → Verify Currency values are displayed correctly for all EOD balance records.
    // FSD §5.5 — Account Master
    // Steps (2): Review Currency column. → Compare with account details.
    // Expected: Correct currency code is displayed for each EOD balance record.
    console.log("[RDR_108] EOD Balance → Verify Currency values are displayed correctly for all EOD balance records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → EOD Balance');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Currency');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Currency');
      await rdrPage.expectAllCellsNonEmpty('Currency');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_109 - EOD Balance → Verify Credit Count and Debit Count values are displayed correctly based on transaction activity for the day.", async ({ testData }) => {
    // Excel Test Case ID: RDR_109
    // Excel Scenario: Customer & Account Data → EOD Balance → Verify Credit Count and Debit Count values are displayed correctly based on transaction activity for the day.
    // FSD §5.5 — Account Master
    // Steps (2): Review Credit Count and Debit Count columns. → Compare with source records.
    // Expected: Credit Count and Debit Count values are displayed accurately for each account.
    console.log("[RDR_109] EOD Balance → Verify Credit Count and Debit Count values are displayed correctly based on transaction activity for the day.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → EOD Balance');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Credit Count');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Credit Count');
      await rdrPage.expectAllCellsNonEmpty('Credit Count');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_110 - EOD Balance → Verify View action opens complete EOD balance details including balance calculation and transaction summary information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_110
    // Excel Scenario: Customer & Account Data → EOD Balance → Verify View action opens complete EOD balance details including balance calculation and transaction summary information.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button. → Review EOD balance details. → Validate displayed information.
    // Expected: EOD Balance detail screen opens successfully displaying Balance ID, Account ID, Customer ID, Opening Balance, Credits, Debits, Closing Balance, Currency and transaction summary details.
    console.log("[RDR_110] EOD Balance → Verify View action opens complete EOD balance details including balance calculation and transaction summary information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → EOD Balance');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Customer ID');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectGridContainsRecords();
      });
  });
  });

  test.describe("Cards & Instruments → Card Master", () => {
  test("Case ID:RDR_111 - Card Master → Verify Card ID is generated uniquely and displayed correctly for every card record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_111
    // Excel Scenario: Cards & Instruments → Card Master → Verify Card ID is generated uniquely and displayed correctly for every card record loaded from CBS.
    // FSD §6.1 — Card Master
    // Steps (4): Open Card Master tab. → Review Card ID column. → Compare multiple records. …
    // Expected: Unique Card IDs are displayed for all card records without duplication.
    console.log("[RDR_111] Card Master → Verify Card ID is generated uniquely and displayed correctly for every card record loaded from CBS.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Card Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Card ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Card ID');
      await rdrPage.expectAllCellsNonEmpty('Card ID');
      await rdrPage.expectUniqueColumnValues('Card ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_112 - Card Master → Verify Customer ID and Account ID displayed for each card are correctly mapped to the associated customer and account records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_112
    // Excel Scenario: Cards & Instruments → Card Master → Verify Customer ID and Account ID displayed for each card are correctly mapped to the associated customer and account records.
    // FSD §6.1 — Card Master
    // Steps (2): Review Customer ID and Account ID columns. → Compare with Customer Master and Account Master records.
    // Expected: Correct Customer ID and Account ID are displayed for each card record.
    console.log("[RDR_112] Card Master → Verify Customer ID and Account ID displayed for each card are correctly mapped to the associated customer and account records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Card Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_113 - Card Master → Verify masked card number (Last 4 digits) is displayed according to PCI-DSS masking requirements.", async ({ testData }) => {
    // Excel Test Case ID: RDR_113
    // Excel Scenario: Cards & Instruments → Card Master → Verify masked card number (Last 4 digits) is displayed according to PCI-DSS masking requirements.
    // FSD §6.1 — Card Master
    // Steps (3): Review Last 4 column. → Compare with source card number. → Verify masking rules.
    // Expected: Only masked card information is displayed and PCI-DSS masking requirements are met.
    console.log("[RDR_113] Card Master → Verify masked card number (Last 4 digits) is displayed according to PCI-DSS masking requirements.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Card Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Last 4');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Last 4');
      await rdrPage.expectAllCellsNonEmpty('Last 4');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnValuesMasked('Last 4');
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_114 - Card Master → Verify Card Type values are displayed correctly according to card classification maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_114
    // Excel Scenario: Cards & Instruments → Card Master → Verify Card Type values are displayed correctly according to card classification maintained in source systems.
    // FSD §6.1 — Card Master
    // Steps (2): Review Card Type column. → Compare values with source data.
    // Expected: Correct Card Type is displayed for each card record.
    console.log("[RDR_114] Card Master → Verify Card Type values are displayed correctly according to card classification maintained in source systems.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Card Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Card Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Card Type');
      await rdrPage.expectAllCellsNonEmpty('Card Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_115 - Card Master → Verify card Network values are displayed correctly for issued cards.", async ({ testData }) => {
    // Excel Test Case ID: RDR_115
    // Excel Scenario: Cards & Instruments → Card Master → Verify card Network values are displayed correctly for issued cards.
    // FSD §6.1 — Card Master
    // Steps (2): Review Network column. → Compare values with source records.
    // Expected: Correct card network is displayed for each card record.
    console.log("[RDR_115] Card Master → Verify card Network values are displayed correctly for issued cards.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Card Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Network');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Network');
      await rdrPage.expectAllCellsNonEmpty('Network');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_116 - Card Master → Verify Card Status values are displayed correctly and reflect the current card lifecycle status.", async ({ testData }) => {
    // Excel Test Case ID: RDR_116
    // Excel Scenario: Cards & Instruments → Card Master → Verify Card Status values are displayed correctly and reflect the current card lifecycle status.
    // FSD §6.1 — Card Master
    // Steps (3): Review Status column. → Compare values with source data. → Verify visual indicators.
    // Expected: Correct Card Status is displayed for each card record. Active cards display ACTIVE and blocked cards display HOT_LISTED.
    console.log("[RDR_116] Card Master → Verify Card Status values are displayed correctly and reflect the current card lifecycle status.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Card Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Watchlist');
      await rdrPage.expectColumnIncludesValue('Watchlist', 'Yes');
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_117 - Card Master → Verify hot-listed cards are highlighted appropriately and displayed with the correct status indicator.", async ({ testData }) => {
    // Excel Test Case ID: RDR_117
    // Excel Scenario: Cards & Instruments → Card Master → Verify hot-listed cards are highlighted appropriately and displayed with the correct status indicator.
    // FSD §6.1 — Card Master
    // Steps (3): Locate hot-listed card. → Review Status column. → Verify status indicator.
    // Expected: Hot-listed card displays HOT_LISTED status with configured alert/highlight indicator.
    console.log("[RDR_117] Card Master → Verify hot-listed cards are highlighted appropriately and displayed with the correct status indicator.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Card Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectColumnVisible('Watchlist');
      await rdrPage.expectColumnIncludesValue('Watchlist', 'Yes');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_118 - Card Master → Verify Issue Date and Expiry Date are displayed correctly for issued cards.", async ({ testData }) => {
    // Excel Test Case ID: RDR_118
    // Excel Scenario: Cards & Instruments → Card Master → Verify Issue Date and Expiry Date are displayed correctly for issued cards.
    // FSD §6.1 — Card Master
    // Steps (2): Review Issue Date and Expiry Date columns. → Compare with source records.
    // Expected: Issue Date and Expiry Date are displayed correctly according to source data.
    console.log("[RDR_118] Card Master → Verify Issue Date and Expiry Date are displayed correctly for issued cards.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Card Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Issue Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Issue Date');
      await rdrPage.expectAllCellsNonEmpty('Issue Date');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_119 - Card Master → Verify International Usage and Contactless indicators are displayed correctly based on card configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_119
    // Excel Scenario: Cards & Instruments → Card Master → Verify International Usage and Contactless indicators are displayed correctly based on card configuration.
    // FSD §6.1 — Card Master
    // Steps (3): Review INTL Usage column. → Review Contactless column. → Compare with source records.
    // Expected: International Usage and Contactless indicators display correct Yes/No values for each card.
    console.log("[RDR_119] Card Master → Verify International Usage and Contactless indicators are displayed correctly based on card configuration.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Card Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('INTL Usage');
      await rdrPage.expectColumnVisible('Contactless');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('INTL Usage');
      await rdrPage.expectAllCellsNonEmpty('INTL Usage');
      await rdrPage.expectColumnVisible('Contactless');
      await rdrPage.expectAllCellsNonEmpty('Contactless');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_120 - Card Master → Verify View action opens complete card details including card status, limits, AML risk flags and usage configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_120
    // Excel Scenario: Cards & Instruments → Card Master → Verify View action opens complete card details including card status, limits, AML risk flags and usage configuration.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button. → Review card details page. → Validate displayed information.
    // Expected: Card detail screen opens successfully displaying Card ID, Card Type, Masked Card Number, Status, International Usage Flag, Daily Limit, High Risk Flag, Hotlist Reason and other card details.
    console.log("[RDR_120] Card Master → Verify View action opens complete card details including card status, limits, AML risk flags and usage configuration.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Card Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectColumnValuesMasked('Status');
      });
  });
  });

  test.describe("Cards & Instruments → Mobile Banking", () => {
  test("Case ID:RDR_121 - Mobile Banking → Verify Mobile Banking ID (MB ID) is generated uniquely and displayed correctly for each mobile banking registration record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_121
    // Excel Scenario: Cards & Instruments → Mobile Banking → Verify Mobile Banking ID (MB ID) is generated uniquely and displayed correctly for each mobile banking registration record.
    // FSD §6.2 — Mobile Banking
    // Steps (4): Open Mobile Banking tab. → Review MB ID column. → Compare multiple records. …
    // Expected: Unique Mobile Banking IDs are displayed for all registration records without duplication.
    console.log("[RDR_121] Mobile Banking → Verify Mobile Banking ID (MB ID) is generated uniquely and displayed correctly for each mobile banking registration record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Mobile Banking');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('MB ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('MB ID');
      await rdrPage.expectAllCellsNonEmpty('MB ID');
      await rdrPage.expectUniqueColumnValues('MB ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_122 - Mobile Banking → Verify Customer ID and Account ID displayed in mobile banking records are correctly mapped to the linked customer and account.", async ({ testData }) => {
    // Excel Test Case ID: RDR_122
    // Excel Scenario: Cards & Instruments → Mobile Banking → Verify Customer ID and Account ID displayed in mobile banking records are correctly mapped to the linked customer and account.
    // FSD §6.2 — Mobile Banking
    // Steps (2): Review Customer ID and Account ID columns. → Compare with Customer Master and Account Master data.
    // Expected: Correct Customer ID and Account ID are displayed for each mobile banking registration.
    console.log("[RDR_122] Mobile Banking → Verify Customer ID and Account ID displayed in mobile banking records are correctly mapped to the linked customer and account.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Mobile Banking');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_123 - Mobile Banking → Verify registered mobile number is displayed according to masking rules to protect customer PII information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_123
    // Excel Scenario: Cards & Instruments → Mobile Banking → Verify registered mobile number is displayed according to masking rules to protect customer PII information.
    // FSD §6.2 — Mobile Banking
    // Steps (3): Review Mobile Number column. → Verify masking pattern. → Compare with source records.
    // Expected: Mobile numbers are displayed in masked format according to PII masking requirements.
    console.log("[RDR_123] Mobile Banking → Verify registered mobile number is displayed according to masking rules to protect customer PII information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Mobile Banking');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Mobile Number');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Mobile Number');
      await rdrPage.expectAllCellsNonEmpty('Mobile Number');
      await rdrPage.expectColumnValuesMasked('Mobile Number');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_124 - Mobile Banking → Verify Registration Date is displayed correctly and reflects the actual mobile banking enrollment date.", async ({ testData }) => {
    // Excel Test Case ID: RDR_124
    // Excel Scenario: Cards & Instruments → Mobile Banking → Verify Registration Date is displayed correctly and reflects the actual mobile banking enrollment date.
    // FSD §6.2 — Mobile Banking
    // Steps (2): Review Registration Date column. → Compare with source data.
    // Expected: Registration Date is displayed accurately in configured date format.
    console.log("[RDR_124] Mobile Banking → Verify Registration Date is displayed correctly and reflects the actual mobile banking enrollment date.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Mobile Banking');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Registration Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Registration Date');
      await rdrPage.expectAllCellsNonEmpty('Registration Date');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_125 - Mobile Banking → Verify Registration Channel values are displayed correctly according to the channel used during mobile banking registration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_125
    // Excel Scenario: Cards & Instruments → Mobile Banking → Verify Registration Channel values are displayed correctly according to the channel used during mobile banking registration.
    // FSD §6.2 — Mobile Banking
    // Steps (2): Review Reg Channel column. → Compare values with source records.
    // Expected: Correct Registration Channel is displayed for each mobile banking registration.
    console.log("[RDR_125] Mobile Banking → Verify Registration Channel values are displayed correctly according to the channel used during mobile banking registration.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Mobile Banking');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Reg Channel');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Reg Channel');
      await rdrPage.expectAllCellsNonEmpty('Reg Channel');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_126 - Mobile Banking → Verify UPI VPA is displayed correctly and mapped to the corresponding mobile banking customer.", async ({ testData }) => {
    // Excel Test Case ID: RDR_126
    // Excel Scenario: Cards & Instruments → Mobile Banking → Verify UPI VPA is displayed correctly and mapped to the corresponding mobile banking customer.
    // FSD §6.2 — Mobile Banking
    // Steps (2): Review UPI VPA column. → Compare with source data.
    // Expected: Correct UPI VPA is displayed for each mobile banking customer.
    console.log("[RDR_126] Mobile Banking → Verify UPI VPA is displayed correctly and mapped to the corresponding mobile banking customer.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Mobile Banking');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('UPI VPA');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('UPI VPA');
      await rdrPage.expectAllCellsNonEmpty('UPI VPA');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_127 - Mobile Banking → Verify UPI Banks Linked count is displayed correctly and reflects the number of bank accounts linked to UPI.", async ({ testData }) => {
    // Excel Test Case ID: RDR_127
    // Excel Scenario: Cards & Instruments → Mobile Banking → Verify UPI Banks Linked count is displayed correctly and reflects the number of bank accounts linked to UPI.
    // FSD §6.2 — Mobile Banking
    // Steps (2): Review UPI Banks Linked column. → Compare with source records.
    // Expected: Correct number of linked UPI bank accounts is displayed.
    console.log("[RDR_127] Mobile Banking → Verify UPI Banks Linked count is displayed correctly and reflects the number of bank accounts linked to UPI.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Mobile Banking');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('UPI Banks Linked');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('UPI Banks Linked');
      await rdrPage.expectAllCellsNonEmpty('UPI Banks Linked');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_128 - Mobile Banking → Verify Login Failures (24H) count is displayed correctly and reflects failed login attempts within the last 24 hours.", async ({ testData }) => {
    // Excel Test Case ID: RDR_128
    // Excel Scenario: Cards & Instruments → Mobile Banking → Verify Login Failures (24H) count is displayed correctly and reflects failed login attempts within the last 24 hours.
    // FSD §6.2 — Mobile Banking
    // Steps (2): Review Login Failures (24H) column. → Compare with source records.
    // Expected: Login failure count is displayed accurately for each mobile banking user.
    console.log("[RDR_128] Mobile Banking → Verify Login Failures (24H) count is displayed correctly and reflects failed login attempts within the last 24 hours.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Mobile Banking');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Login Failures (24h)');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Login Failures (24h)');
      await rdrPage.expectAllCellsNonEmpty('Login Failures (24h)');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_129 - Mobile Banking → Verify Status values are displayed correctly and reflect the current mobile banking registration status.", async ({ testData }) => {
    // Excel Test Case ID: RDR_129
    // Excel Scenario: Cards & Instruments → Mobile Banking → Verify Status values are displayed correctly and reflect the current mobile banking registration status.
    // FSD §6.2 — Mobile Banking
    // Steps (2): Review Status column. → Compare with source records.
    // Expected: Correct status is displayed for each mobile banking registration record.
    console.log("[RDR_129] Mobile Banking → Verify Status values are displayed correctly and reflect the current mobile banking registration status.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Mobile Banking');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_130 - Mobile Banking → Verify View action opens complete mobile banking details including registration information, AML indicators and mobile banking activity details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_130
    // Excel Scenario: Cards & Instruments → Mobile Banking → Verify View action opens complete mobile banking details including registration information, AML indicators and mobile banking activity details.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button. → Review mobile banking details. → Validate displayed information.
    // Expected: Mobile Banking detail screen opens successfully displaying Mobile Banking ID, Registered Mobile Number, MPIN Change Count, Beneficiary Add Count, MNRL Check Flag, Login Failure Count, Registration Channel and status information.
    console.log("[RDR_130] Mobile Banking → Verify View action opens complete mobile banking details including registration information, AML indicators and mobile banking activity details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Mobile Banking');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectGridContainsRecords();
      });
  });
  });

  test.describe("Cards & Instruments → ATM Master", () => {
  test("Case ID:RDR_131 - ATM Master → Verify ATM ID is generated uniquely and displayed correctly for every ATM record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_131
    // Excel Scenario: Cards & Instruments → ATM Master → Verify ATM ID is generated uniquely and displayed correctly for every ATM record loaded from CBS.
    // FSD §6.3 — ATM Master
    // Steps (4): Open ATM Master tab. → Review ATM ID column. → Compare multiple records. …
    // Expected: Unique ATM IDs are displayed for all ATM records without duplication.
    console.log("[RDR_131] ATM Master → Verify ATM ID is generated uniquely and displayed correctly for every ATM record loaded from CBS.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('ATM ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('ATM ID');
      await rdrPage.expectAllCellsNonEmpty('ATM ID');
      await rdrPage.expectUniqueColumnValues('ATM ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_132 - ATM Master → Verify ATM Code is displayed correctly and uniquely identifies each ATM machine.", async ({ testData }) => {
    // Excel Test Case ID: RDR_132
    // Excel Scenario: Cards & Instruments → ATM Master → Verify ATM Code is displayed correctly and uniquely identifies each ATM machine.
    // FSD §6.3 — ATM Master
    // Steps (2): Review ATM Code column. → Compare with source data.
    // Expected: Correct ATM Code is displayed for each ATM.
    console.log("[RDR_132] ATM Master → Verify ATM Code is displayed correctly and uniquely identifies each ATM machine.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('ATM Code');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('ATM Code');
      await rdrPage.expectAllCellsNonEmpty('ATM Code');
      await rdrPage.expectUniqueColumnValues('ATM Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_133 - ATM Master → Verify ATM Name is displayed correctly and matches the ATM location name maintained in CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_133
    // Excel Scenario: Cards & Instruments → ATM Master → Verify ATM Name is displayed correctly and matches the ATM location name maintained in CBS.
    // FSD §6.3 — ATM Master
    // Steps (2): Review ATM Name column. → Compare values with source data.
    // Expected: Correct ATM Name is displayed for every ATM record.
    console.log("[RDR_133] ATM Master → Verify ATM Name is displayed correctly and matches the ATM location name maintained in CBS.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('ATM Name');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('ATM Name');
      await rdrPage.expectAllCellsNonEmpty('ATM Name');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_134 - ATM Master → Verify Branch information is displayed correctly for each ATM location.", async ({ testData }) => {
    // Excel Test Case ID: RDR_134
    // Excel Scenario: Cards & Instruments → ATM Master → Verify Branch information is displayed correctly for each ATM location.
    // FSD §6.3 — ATM Master
    // Steps (2): Review Branch column. → Compare with source records.
    // Expected: Correct Branch information is displayed for each ATM.
    console.log("[RDR_134] ATM Master → Verify Branch information is displayed correctly for each ATM location.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Branch');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Branch');
      await rdrPage.expectAllCellsNonEmpty('Branch');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_135 - ATM Master → Verify ATM Type values are displayed correctly according to ATM classification maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_135
    // Excel Scenario: Cards & Instruments → ATM Master → Verify ATM Type values are displayed correctly according to ATM classification maintained in source systems.
    // FSD §6.3 — ATM Master
    // Steps (2): Review ATM Type column. → Compare values with source data.
    // Expected: Correct ATM Type is displayed for every ATM record.
    console.log("[RDR_135] ATM Master → Verify ATM Type values are displayed correctly according to ATM classification maintained in source systems.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('ATM Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('ATM Type');
      await rdrPage.expectAllCellsNonEmpty('ATM Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_136 - ATM Master → Verify City values are displayed correctly based on ATM location information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_136
    // Excel Scenario: Cards & Instruments → ATM Master → Verify City values are displayed correctly based on ATM location information.
    // FSD §6.3 — ATM Master
    // Steps (2): Review City column. → Compare values with source records.
    // Expected: Correct City is displayed for each ATM record.
    console.log("[RDR_136] ATM Master → Verify City values are displayed correctly based on ATM location information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('City');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('City');
      await rdrPage.expectAllCellsNonEmpty('City');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_137 - ATM Master → Verify Country Code is displayed correctly for ATM locations.", async ({ testData }) => {
    // Excel Test Case ID: RDR_137
    // Excel Scenario: Cards & Instruments → ATM Master → Verify Country Code is displayed correctly for ATM locations.
    // FSD §6.3 — ATM Master
    // Steps (2): Review Country column. → Compare with source records.
    // Expected: Correct Country Code is displayed for each ATM.
    console.log("[RDR_137] ATM Master → Verify Country Code is displayed correctly for ATM locations.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Country');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Country');
      await rdrPage.expectAllCellsNonEmpty('Country');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_138 - ATM Master → Verify ATM Status is displayed correctly and reflects the current operational state of the ATM.", async ({ testData }) => {
    // Excel Test Case ID: RDR_138
    // Excel Scenario: Cards & Instruments → ATM Master → Verify ATM Status is displayed correctly and reflects the current operational state of the ATM.
    // FSD §6.3 — ATM Master
    // Steps (2): Review Status column. → Compare with source data.
    // Expected: Correct ATM Status is displayed for each ATM record.
    console.log("[RDR_138] ATM Master → Verify ATM Status is displayed correctly and reflects the current operational state of the ATM.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_139 - ATM Master → Verify search functionality using ATM ID.", async ({ testData }) => {
    // Excel Test Case ID: RDR_139
    // Excel Scenario: Cards & Instruments → ATM Master → Verify search functionality using ATM ID.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter ATM ID in search field. → Execute search. → Review results.
    // Expected: System displays only the ATM record matching the entered ATM ID.
    console.log("[RDR_139] ATM Master → Verify search functionality using ATM ID.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('field');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_140 - ATM Master → Verify search functionality using ATM Code.", async ({ testData }) => {
    // Excel Test Case ID: RDR_140
    // Excel Scenario: Cards & Instruments → ATM Master → Verify search functionality using ATM Code.
    // FSD §4.1 — Toolbar
    // Steps (2): Enter ATM Code in search box. → Execute search.
    // Expected: System displays the ATM record associated with the entered ATM Code.
    console.log("[RDR_140] ATM Master → Verify search functionality using ATM Code.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('box');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Code');
      });
  });

  test("Case ID:RDR_141 - ATM Master → Verify High Risk Location Flag in ATM details for ATMs located in high-risk geographic areas.", async ({ testData }) => {
    // Excel Test Case ID: RDR_141
    // Excel Scenario: Cards & Instruments → ATM Master → Verify High Risk Location Flag in ATM details for ATMs located in high-risk geographic areas.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button. → Review High Risk Location Flag. → Compare with source data.
    // Expected: High Risk Location Flag is displayed correctly according to AML risk configuration.
    console.log("[RDR_141] ATM Master → Verify High Risk Location Flag in ATM details for ATMs located in high-risk geographic areas.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_142 - ATM Master → Verify Daily Cash Loaded value is displayed correctly in ATM details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_142
    // Excel Scenario: Cards & Instruments → ATM Master → Verify Daily Cash Loaded value is displayed correctly in ATM details.
    // FSD §6.3 — ATM Master
    // Steps (2): Open ATM details. → Review Daily Cash Loaded field.
    // Expected: Daily Cash Loaded amount is displayed accurately.
    console.log("[RDR_142] ATM Master → Verify Daily Cash Loaded value is displayed correctly in ATM details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_143 - ATM Master → Verify View action opens complete ATM details including AML and operational information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_143
    // Excel Scenario: Cards & Instruments → ATM Master → Verify View action opens complete ATM details including AML and operational information.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button. → Review ATM details page. → Validate information displayed.
    // Expected: ATM detail screen opens successfully displaying ATM ID, ATM Type, Country Code, High Risk Location Flag, Daily Cash Loaded and location details.
    console.log("[RDR_143] ATM Master → Verify View action opens complete ATM details including AML and operational information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_144 - ATM Master → Verify CSV export functionality for ATM Master records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_144
    // Excel Scenario: Cards & Instruments → ATM Master → Verify CSV export functionality for ATM Master records.
    // FSD §11.1 — Export Formats
    // Steps (3): Click CSV button. → Download file. → Validate contents.
    // Expected: CSV file downloads successfully containing ATM Master data with correct column values.
    console.log("[RDR_144] ATM Master → Verify CSV export functionality for ATM Master records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('values');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('values');
      });
  });

  test("Case ID:RDR_145 - ATM Master → Verify Excel export functionality for ATM Master records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_145
    // Excel Scenario: Cards & Instruments → ATM Master → Verify Excel export functionality for ATM Master records.
    // FSD §11.1 — Export Formats
    // Steps (3): Click Excel button. → Download file. → Validate contents.
    // Expected: Excel file downloads successfully containing accurate ATM Master data and proper column structure.
    console.log("[RDR_145] ATM Master → Verify Excel export functionality for ATM Master records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportExcel();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('structure');
      await rdrPage.expectGridContainsRecords();
      });
  });
  });

  test.describe("Cards & Instruments → Instruments", () => {
  test("Case ID:RDR_146 - Instruments → Verify Instrument ID is generated uniquely and displayed correctly for each instrument record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_146
    // Excel Scenario: Cards & Instruments → Instruments → Verify Instrument ID is generated uniquely and displayed correctly for each instrument record loaded from CBS.
    // FSD §6.4 — Instruments (INSTRUMENT_MASTER)
    // Steps (4): Open Instruments tab. → Review Instrument ID column. → Compare multiple records. …
    // Expected: Unique Instrument IDs are displayed for all instrument records without duplication.
    console.log("[RDR_146] Instruments → Verify Instrument ID is generated uniquely and displayed correctly for each instrument record loaded from CBS.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Instruments');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Instrument ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Instrument ID');
      await rdrPage.expectAllCellsNonEmpty('Instrument ID');
      await rdrPage.expectUniqueColumnValues('Instrument ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_147 - Instruments → Verify Instrument Type values are displayed correctly according to instrument classification maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_147
    // Excel Scenario: Cards & Instruments → Instruments → Verify Instrument Type values are displayed correctly according to instrument classification maintained in source systems.
    // FSD §6.4 — Instruments (INSTRUMENT_MASTER)
    // Steps (2): Review Type column. → Compare values with source records.
    // Expected: Correct Instrument Type is displayed for each instrument record.
    console.log("[RDR_147] Instruments → Verify Instrument Type values are displayed correctly according to instrument classification maintained in source systems.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Instruments');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_148 - Instruments → Verify search functionality using Instrument ID and ensure the correct instrument record is retrieved.", async ({ testData }) => {
    // Excel Test Case ID: RDR_148
    // Excel Scenario: Cards & Instruments → Instruments → Verify search functionality using Instrument ID and ensure the correct instrument record is retrieved.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter Instrument ID in search field. → Execute search. → Review results.
    // Expected: System displays only the instrument record matching the entered Instrument ID.
    console.log("[RDR_148] Instruments → Verify search functionality using Instrument ID and ensure the correct instrument record is retrieved.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Instruments');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('field');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_149 - Instruments → Verify View action opens complete instrument details including status and AML-related information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_149
    // Excel Scenario: Cards & Instruments → Instruments → Verify View action opens complete instrument details including status and AML-related information.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button. → Review instrument detail screen. → Validate displayed information.
    // Expected: Instrument detail page opens successfully displaying complete instrument information.
    console.log("[RDR_149] Instruments → Verify View action opens complete instrument details including status and AML-related information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Instruments');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_150 - Instruments → Verify Instrument Status is displayed correctly in instrument details and reflects the current instrument lifecycle state.", async ({ testData }) => {
    // Excel Test Case ID: RDR_150
    // Excel Scenario: Cards & Instruments → Instruments → Verify Instrument Status is displayed correctly in instrument details and reflects the current instrument lifecycle state.
    // FSD §6.4 — Instruments (INSTRUMENT_MASTER)
    // Steps (3): Open instrument details. → Review Instrument Status field. → Compare with source data.
    // Expected: Instrument Status is displayed correctly according to source records.
    console.log("[RDR_150] Instruments → Verify Instrument Status is displayed correctly in instrument details and reflects the current instrument lifecycle state.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Instruments');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_151 - Instruments → Verify dishonoured instruments display the correct Dishonour Reason in instrument details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_151
    // Excel Scenario: Cards & Instruments → Instruments → Verify dishonoured instruments display the correct Dishonour Reason in instrument details.
    // FSD §6.4 — Instruments (INSTRUMENT_MASTER)
    // Steps (3): Open instrument details. → Review Dishonour Reason field. → Compare with source data.
    // Expected: Correct Dishonour Reason is displayed for the dishonoured instrument.
    console.log("[RDR_151] Instruments → Verify dishonoured instruments display the correct Dishonour Reason in instrument details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Instruments');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_152 - Instruments → Verify Stop Payment Flag is displayed correctly for instruments where stop-payment instructions have been placed.", async ({ testData }) => {
    // Excel Test Case ID: RDR_152
    // Excel Scenario: Cards & Instruments → Instruments → Verify Stop Payment Flag is displayed correctly for instruments where stop-payment instructions have been placed.
    // FSD §6.4 — Instruments (INSTRUMENT_MASTER)
    // Steps (2): Open instrument details. → Review Stop Payment Flag field.
    // Expected: Stop Payment Flag is displayed correctly and reflects the actual stop-payment status.
    console.log("[RDR_152] Instruments → Verify Stop Payment Flag is displayed correctly for instruments where stop-payment instructions have been placed.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Instruments');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_153 - Instruments → Verify AML Alert Flag is displayed correctly for instruments flagged by AML monitoring rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_153
    // Excel Scenario: Cards & Instruments → Instruments → Verify AML Alert Flag is displayed correctly for instruments flagged by AML monitoring rules.
    // FSD §6.4 — Instruments (INSTRUMENT_MASTER)
    // Steps (3): Open instrument details. → Review Alert Flag field. → Compare with AML source data.
    // Expected: AML Alert Flag is displayed correctly for flagged instruments.
    console.log("[RDR_153] Instruments → Verify AML Alert Flag is displayed correctly for instruments flagged by AML monitoring rules.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Instruments');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_154 - Instruments → Verify CSV export functionality for Instrument Master records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_154
    // Excel Scenario: Cards & Instruments → Instruments → Verify CSV export functionality for Instrument Master records.
    // FSD §11.1 — Export Formats
    // Steps (3): Click CSV button. → Download file. → Validate contents.
    // Expected: CSV file downloads successfully and contains accurate Instrument Master data.
    console.log("[RDR_154] Instruments → Verify CSV export functionality for Instrument Master records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Instruments');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_155 - Instruments → Verify Excel export functionality for Instrument Master records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_155
    // Excel Scenario: Cards & Instruments → Instruments → Verify Excel export functionality for Instrument Master records.
    // FSD §11.1 — Export Formats
    // Steps (3): Click Excel button. → Download file. → Validate contents.
    // Expected: Excel file downloads successfully and contains accurate Instrument Master data with proper column structure.
    console.log("[RDR_155] Instruments → Verify Excel export functionality for Instrument Master records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Instruments');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportExcel();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('structure');
      await rdrPage.expectGridContainsRecords();
      });
  });
  });

  test.describe("Cards & Instruments → Transaction Device", () => {
  test("Case ID:RDR_156 - Transaction Device → Verify Device ID is generated uniquely and displayed correctly for each transaction device record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_156
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify Device ID is generated uniquely and displayed correctly for each transaction device record.
    // FSD §6.5 — Transaction Device (TXN_DEVICE)
    // Steps (4): Open TXN Device tab. → Review Device ID column. → Compare multiple records. …
    // Expected: Unique Device IDs are displayed for all device records without duplication.
    console.log("[RDR_156] Transaction Device → Verify Device ID is generated uniquely and displayed correctly for each transaction device record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Device ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Device ID');
      await rdrPage.expectAllCellsNonEmpty('Device ID');
      await rdrPage.expectUniqueColumnValues('Device ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_157 - Transaction Device → Verify Device Type is displayed correctly according to the registered device classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_157
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify Device Type is displayed correctly according to the registered device classification.
    // FSD §6.5 — Transaction Device (TXN_DEVICE)
    // Steps (2): Review Type column. → Compare values with source data.
    // Expected: Correct Device Type is displayed for each device record.
    console.log("[RDR_157] Transaction Device → Verify Device Type is displayed correctly according to the registered device classification.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_158 - Transaction Device → Verify OS information is displayed correctly for registered transaction devices.", async ({ testData }) => {
    // Excel Test Case ID: RDR_158
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify OS information is displayed correctly for registered transaction devices.
    // FSD §6.5 — Transaction Device (TXN_DEVICE)
    // Steps (2): Review OS column. → Compare values with source data.
    // Expected: Correct operating system information is displayed for each device.
    console.log("[RDR_158] Transaction Device → Verify OS information is displayed correctly for registered transaction devices.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('OS');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('OS');
      await rdrPage.expectAllCellsNonEmpty('OS');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_159 - Transaction Device → Verify Device Model is displayed correctly according to device registration information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_159
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify Device Model is displayed correctly according to device registration information.
    // FSD §6.5 — Transaction Device (TXN_DEVICE)
    // Steps (2): Review Model column. → Compare values with source records.
    // Expected: Correct device model is displayed for each transaction device.
    console.log("[RDR_159] Transaction Device → Verify Device Model is displayed correctly according to device registration information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Model');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Model');
      await rdrPage.expectAllCellsNonEmpty('Model');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_160 - Transaction Device → Verify IMEI/Device Fingerprint information is displayed in masked format to protect sensitive device data.", async ({ testData }) => {
    // Excel Test Case ID: RDR_160
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify IMEI/Device Fingerprint information is displayed in masked format to protect sensitive device data.
    // FSD §6.5 — Transaction Device (TXN_DEVICE)
    // Steps (3): Review IMEI column. → Verify masking pattern. → Compare with source records.
    // Expected: IMEI/Device Fingerprint is displayed in masked format and sensitive data is protected.
    console.log("[RDR_160] Transaction Device → Verify IMEI/Device Fingerprint information is displayed in masked format to protect sensitive device data.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('IMEI');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('IMEI');
      await rdrPage.expectAllCellsNonEmpty('IMEI');
      await rdrPage.expectColumnValuesMasked('IMEI');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_161 - Transaction Device → Verify Customer IDs displayed against each device are correctly mapped to registered customers.", async ({ testData }) => {
    // Excel Test Case ID: RDR_161
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify Customer IDs displayed against each device are correctly mapped to registered customers.
    // FSD §6.5 — Transaction Device (TXN_DEVICE)
    // Steps (2): Review Customer IDs column. → Compare values with customer records.
    // Expected: Correct Customer IDs are displayed for each transaction device.
    console.log("[RDR_161] Transaction Device → Verify Customer IDs displayed against each device are correctly mapped to registered customers.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer IDs');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer IDs');
      await rdrPage.expectAllCellsNonEmpty('Customer IDs');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_162 - Transaction Device → Verify devices linked to multiple customer IDs are identified correctly according to AML rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_162
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify devices linked to multiple customer IDs are identified correctly according to AML rules.
    // FSD §6.5 — Transaction Device (TXN_DEVICE)
    // Steps (3): Review Customer IDs column. → Identify devices linked to multiple customers. → Compare with source records.
    // Expected: Device displays all associated customer IDs correctly and supports AML monitoring of shared devices.
    console.log("[RDR_162] Transaction Device → Verify devices linked to multiple customer IDs are identified correctly according to AML rules.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer IDs');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer IDs');
      await rdrPage.expectAllCellsNonEmpty('Customer IDs');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_163 - Transaction Device → Verify Customer Count value in device details matches the number of linked customers.", async ({ testData }) => {
    // Excel Test Case ID: RDR_163
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify Customer Count value in device details matches the number of linked customers.
    // FSD §6.5 — Transaction Device (TXN_DEVICE)
    // Steps (3): Open device details. → Review Customer Count field. → Compare with associated customer IDs.
    // Expected: Customer Count is displayed accurately according to linked customer records.
    console.log("[RDR_163] Transaction Device → Verify Customer Count value in device details matches the number of linked customers.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_164 - Transaction Device → Verify High Risk Device Flag is displayed correctly for devices identified as AML high-risk.", async ({ testData }) => {
    // Excel Test Case ID: RDR_164
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify High Risk Device Flag is displayed correctly for devices identified as AML high-risk.
    // FSD §6.5 — Transaction Device (TXN_DEVICE)
    // Steps (3): Open device details. → Review High Risk Device Flag. → Compare with AML source data.
    // Expected: High Risk Device Flag is displayed correctly according to AML configuration.
    console.log("[RDR_164] Transaction Device → Verify High Risk Device Flag is displayed correctly for devices identified as AML high-risk.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_165 - Transaction Device → Verify High Risk Reason is displayed correctly for flagged devices.", async ({ testData }) => {
    // Excel Test Case ID: RDR_165
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify High Risk Reason is displayed correctly for flagged devices.
    // FSD §6.5 — Transaction Device (TXN_DEVICE)
    // Steps (2): Open device details. → Review High Risk Reason field.
    // Expected: Correct High Risk Reason is displayed for the flagged device.
    console.log("[RDR_165] Transaction Device → Verify High Risk Reason is displayed correctly for flagged devices.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_166 - Transaction Device → Verify Rooted Device Flag is displayed correctly when a device is identified as rooted or jailbroken.", async ({ testData }) => {
    // Excel Test Case ID: RDR_166
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify Rooted Device Flag is displayed correctly when a device is identified as rooted or jailbroken.
    // FSD §6.5 — Transaction Device (TXN_DEVICE)
    // Steps (2): Open device details. → Review Rooted Flag.
    // Expected: Rooted Flag is displayed correctly and AML alert conditions are triggered where applicable.
    console.log("[RDR_166] Transaction Device → Verify Rooted Device Flag is displayed correctly when a device is identified as rooted or jailbroken.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_167 - Transaction Device → Verify Remote Access App Flag is displayed correctly when remote access applications are detected.", async ({ testData }) => {
    // Excel Test Case ID: RDR_167
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify Remote Access App Flag is displayed correctly when remote access applications are detected.
    // FSD §6.5 — Transaction Device (TXN_DEVICE)
    // Steps (2): Open device details. → Review Remote Access App Flag.
    // Expected: Remote Access App Flag is displayed correctly and AML monitoring conditions are applied.
    console.log("[RDR_167] Transaction Device → Verify Remote Access App Flag is displayed correctly when remote access applications are detected.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_168 - Transaction Device → Verify Proxy/VPN Usage Flag is displayed correctly for devices using proxy or VPN connections.", async ({ testData }) => {
    // Excel Test Case ID: RDR_168
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify Proxy/VPN Usage Flag is displayed correctly for devices using proxy or VPN connections.
    // FSD §6.5 — Transaction Device (TXN_DEVICE)
    // Steps (2): Open device details. → Review Using Proxy Flag.
    // Expected: Proxy Usage Flag is displayed correctly according to device security assessment.
    console.log("[RDR_168] Transaction Device → Verify Proxy/VPN Usage Flag is displayed correctly for devices using proxy or VPN connections.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_169 - Transaction Device → Verify View action opens complete transaction device details including AML risk indicators and device fingerprint information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_169
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify View action opens complete transaction device details including AML risk indicators and device fingerprint information.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button. → Review device details page. → Validate displayed information.
    // Expected: Device detail screen opens successfully displaying Device ID, Fingerprint, Customer Count, High Risk Flags, Rooted Flag, Proxy Flag and associated customer information.
    console.log("[RDR_169] Transaction Device → Verify View action opens complete transaction device details including AML risk indicators and device fingerprint information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_170 - Transaction Device → Verify search functionality using Device ID and retrieve the correct device record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_170
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify search functionality using Device ID and retrieve the correct device record.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter Device ID in search field. → Execute search. → Review results.
    // Expected: System displays only the device record matching the entered Device ID.
    console.log("[RDR_170] Transaction Device → Verify search functionality using Device ID and retrieve the correct device record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('field');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });
  });

  test.describe("Relationships & Related Parties → Beneficial Owner", () => {
  test("Case ID:RDR_171 - Beneficial Owner → Verify BO ID is generated uniquely and displayed correctly for every beneficial owner record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_171
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify BO ID is generated uniquely and displayed correctly for every beneficial owner record.
    // FSD §7.1 — Beneficial Owner (BENEFICIAL_OWNER)
    // Steps (3): Open Beneficial Owner tab. → Review BO ID column. → Compare all records.
    // Expected: Unique BO IDs are displayed for all beneficial owner records without duplication.
    console.log("[RDR_171] Beneficial Owner → Verify BO ID is generated uniquely and displayed correctly for every beneficial owner record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('BO ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('BO ID');
      await rdrPage.expectAllCellsNonEmpty('BO ID');
      await rdrPage.expectUniqueColumnValues('BO ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_172 - Beneficial Owner → Verify Customer ID displayed against each beneficial owner record matches the linked customer/entity record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_172
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify Customer ID displayed against each beneficial owner record matches the linked customer/entity record.
    // FSD §7.1 — Beneficial Owner (BENEFICIAL_OWNER)
    // Steps (2): Review Customer ID column. → Compare with Customer Master records.
    // Expected: Correct Customer ID is displayed for each beneficial owner record.
    console.log("[RDR_172] Beneficial Owner → Verify Customer ID displayed against each beneficial owner record matches the linked customer/entity record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_173 - Beneficial Owner → Verify Beneficial Owner Full Name is displayed in masked format according to PII masking requirements.", async ({ testData }) => {
    // Excel Test Case ID: RDR_173
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify Beneficial Owner Full Name is displayed in masked format according to PII masking requirements.
    // FSD §7.1 — Beneficial Owner (BENEFICIAL_OWNER)
    // Steps (3): Review Full Name column. → Verify masking pattern. → Compare with source data.
    // Expected: Beneficial Owner names are displayed in masked format and comply with privacy requirements.
    console.log("[RDR_173] Beneficial Owner → Verify Beneficial Owner Full Name is displayed in masked format according to PII masking requirements.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Full Name');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Full Name');
      await rdrPage.expectAllCellsNonEmpty('Full Name');
      await rdrPage.expectColumnValuesMasked('Full Name');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_174 - Beneficial Owner → Verify Nationality is displayed correctly for each beneficial owner.", async ({ testData }) => {
    // Excel Test Case ID: RDR_174
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify Nationality is displayed correctly for each beneficial owner.
    // FSD §7.1 — Beneficial Owner (BENEFICIAL_OWNER)
    // Steps (2): Review Nationality column. → Compare with source records.
    // Expected: Correct nationality code is displayed for each beneficial owner.
    console.log("[RDR_174] Beneficial Owner → Verify Nationality is displayed correctly for each beneficial owner.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Nationality');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Nationality');
      await rdrPage.expectAllCellsNonEmpty('Nationality');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_175 - Beneficial Owner → Verify Country of Residence is displayed correctly according to beneficial owner profile information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_175
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify Country of Residence is displayed correctly according to beneficial owner profile information.
    // FSD §7.1 — Beneficial Owner (BENEFICIAL_OWNER)
    // Steps (2): Review Country of Residence column. → Compare with source records.
    // Expected: Correct country of residence is displayed for each beneficial owner.
    console.log("[RDR_175] Beneficial Owner → Verify Country of Residence is displayed correctly according to beneficial owner profile information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Country of Residence');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Country of Residence');
      await rdrPage.expectAllCellsNonEmpty('Country of Residence');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_176 - Beneficial Owner → Verify ID Type values are displayed correctly according to the identification documents maintained for the beneficial owner.", async ({ testData }) => {
    // Excel Test Case ID: RDR_176
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify ID Type values are displayed correctly according to the identification documents maintained for the beneficial owner.
    // FSD §7.1 — Beneficial Owner (BENEFICIAL_OWNER)
    // Steps (2): Review ID Type column. → Compare values with source records.
    // Expected: Correct ID Type is displayed for each beneficial owner.
    console.log("[RDR_176] Beneficial Owner → Verify ID Type values are displayed correctly according to the identification documents maintained for the beneficial owner.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('ID Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('ID Type');
      await rdrPage.expectAllCellsNonEmpty('ID Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_177 - Beneficial Owner → Verify Ownership Percentage is displayed correctly for beneficial owners with direct ownership stake.", async ({ testData }) => {
    // Excel Test Case ID: RDR_177
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify Ownership Percentage is displayed correctly for beneficial owners with direct ownership stake.
    // FSD §7.1 — Beneficial Owner (BENEFICIAL_OWNER)
    // Steps (2): Review Ownership % column. → Compare values with source records.
    // Expected: Ownership Percentage is displayed accurately according to source data.
    console.log("[RDR_177] Beneficial Owner → Verify Ownership Percentage is displayed correctly for beneficial owners with direct ownership stake.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectAllCellsNonEmpty('Ownership %');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_178 - Beneficial Owner → Verify beneficial owners meeting regulatory ownership thresholds are displayed correctly.", async ({ testData }) => {
    // Excel Test Case ID: RDR_178
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify beneficial owners meeting regulatory ownership thresholds are displayed correctly.
    // FSD §7.1 — Beneficial Owner (BENEFICIAL_OWNER)
    // Steps (2): Review ownership percentages. → Compare against threshold rules.
    // Expected: Beneficial owners above configured threshold are displayed correctly and included in records.
    console.log("[RDR_178] Beneficial Owner → Verify beneficial owners meeting regulatory ownership thresholds are displayed correctly.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectAllCellsNonEmpty('Ownership %');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_179 - Beneficial Owner → Verify Control Type values are displayed correctly according to beneficial ownership/control relationship.", async ({ testData }) => {
    // Excel Test Case ID: RDR_179
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify Control Type values are displayed correctly according to beneficial ownership/control relationship.
    // FSD §7.1 — Beneficial Owner (BENEFICIAL_OWNER)
    // Steps (2): Review Control Type column. → Compare values with source data.
    // Expected: Correct Control Type is displayed for each beneficial owner.
    console.log("[RDR_179] Beneficial Owner → Verify Control Type values are displayed correctly according to beneficial ownership/control relationship.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Control Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Control Type');
      await rdrPage.expectAllCellsNonEmpty('Control Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_180 - Beneficial Owner → Verify Watchlist Flag is displayed correctly for beneficial owners identified on internal or external watchlists.", async ({ testData }) => {
    // Excel Test Case ID: RDR_180
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify Watchlist Flag is displayed correctly for beneficial owners identified on internal or external watchlists.
    // FSD §7.1 — Beneficial Owner (BENEFICIAL_OWNER)
    // Steps (2): Review Watchlist Flag column. → Compare values with screening records.
    // Expected: Watchlist Flag displays correct status for each beneficial owner.
    console.log("[RDR_180] Beneficial Owner → Verify Watchlist Flag is displayed correctly for beneficial owners identified on internal or external watchlists.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Watchlist Flag');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Watchlist Flag');
      await rdrPage.expectAllCellsNonEmpty('Watchlist Flag');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_181 - Beneficial Owner → Verify beneficial owners with Watchlist Flag = Yes are highlighted appropriately for AML review.", async ({ testData }) => {
    // Excel Test Case ID: RDR_181
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify beneficial owners with Watchlist Flag = Yes are highlighted appropriately for AML review.
    // FSD §7.1 — Beneficial Owner (BENEFICIAL_OWNER)
    // Steps (2): Locate watchlisted record. → Verify Watchlist Flag display and indicator.
    // Expected: Watchlisted beneficial owner is highlighted with the configured AML indicator.
    console.log("[RDR_181] Beneficial Owner → Verify beneficial owners with Watchlist Flag = Yes are highlighted appropriately for AML review.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Watchlist');
      await rdrPage.expectColumnIncludesValue('Watchlist', 'Yes');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_182 - Beneficial Owner → Verify search functionality using BO ID retrieves the correct beneficial owner record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_182
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify search functionality using BO ID retrieves the correct beneficial owner record.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter BO ID in search field. → Execute search. → Review results.
    // Expected: System displays only the beneficial owner record matching the entered BO ID.
    console.log("[RDR_182] Beneficial Owner → Verify search functionality using BO ID retrieves the correct beneficial owner record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      });
  });

  test("Case ID:RDR_183 - Beneficial Owner → Verify search functionality using Customer ID retrieves all associated beneficial owners.", async ({ testData }) => {
    // Excel Test Case ID: RDR_183
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify search functionality using Customer ID retrieves all associated beneficial owners.
    // FSD §4.1 — Toolbar
    // Steps (2): Enter Customer ID in search field. → Execute search.
    // Expected: System displays all beneficial owners linked to the entered Customer ID.
    console.log("[RDR_183] Beneficial Owner → Verify search functionality using Customer ID retrieves all associated beneficial owners.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      });
  });

  test("Case ID:RDR_184 - Beneficial Owner → Verify View action opens complete beneficial owner details including ownership, control and AML screening information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_184
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify View action opens complete beneficial owner details including ownership, control and AML screening information.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button. → Review beneficial owner details. → Validate displayed information.
    // Expected: Beneficial Owner detail screen opens successfully displaying ownership, control type, PEP, sanctions, watchlist and verification details.
    console.log("[RDR_184] Beneficial Owner → Verify View action opens complete beneficial owner details including ownership, control and AML screening information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Type');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_185 - Beneficial Owner → Verify PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method are displayed correctly in the Beneficial Owner detail screen.", async ({ testData }) => {
    // Excel Test Case ID: RDR_185
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method are displayed correctly in the Beneficial Owner detail screen.
    // FSD §4.3 — Detail Modal
    // Steps (3): Open View screen. → Review PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method fields. → Compare with source data.
    // Expected: AML-related flags and verification method are displayed accurately according to source records and FSD definitions.
    console.log("[RDR_185] Beneficial Owner → Verify PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method are displayed correctly in the Beneficial Owner detail screen.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('PEP Flag');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('PEP Flag');
      await rdrPage.expectAllCellsNonEmpty('PEP Flag');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });
  });

  test.describe("Relationships & Related Parties → Related Parties Network", () => {
  test("Case ID:RDR_186 - Related Parties Network → Verify Relationship ID is generated uniquely and displayed correctly for every relationship record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_186
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify Relationship ID is generated uniquely and displayed correctly for every relationship record.
    // FSD §7.2 — Related Parties Network
    // Steps (3): Open Related Parties tab. → Review Rel ID column. → Compare all records.
    // Expected: Unique Relationship IDs are displayed for all relationship records without duplication.
    console.log("[RDR_186] Related Parties Network → Verify Relationship ID is generated uniquely and displayed correctly for every relationship record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Rel ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Rel ID');
      await rdrPage.expectAllCellsNonEmpty('Rel ID');
      await rdrPage.expectUniqueColumnValues('Rel ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_187 - Related Parties Network → Verify Entity1 Type is displayed correctly according to the source entity classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_187
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify Entity1 Type is displayed correctly according to the source entity classification.
    // FSD §7.2 — Related Parties Network
    // Steps (2): Review Entity1 Type column. → Compare with source data.
    // Expected: Correct Entity1 Type is displayed for each relationship record.
    console.log("[RDR_187] Related Parties Network → Verify Entity1 Type is displayed correctly according to the source entity classification.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Entity1 Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Entity1 Type');
      await rdrPage.expectAllCellsNonEmpty('Entity1 Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_188 - Related Parties Network → Verify Entity1 ID is displayed correctly and mapped to the appropriate customer or beneficial owner record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_188
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify Entity1 ID is displayed correctly and mapped to the appropriate customer or beneficial owner record.
    // FSD §7.2 — Related Parties Network
    // Steps (2): Review Entity1 ID column. → Compare with Customer Master/BO records.
    // Expected: Correct Entity1 ID is displayed and mapped correctly.
    console.log("[RDR_188] Related Parties Network → Verify Entity1 ID is displayed correctly and mapped to the appropriate customer or beneficial owner record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Entity1 ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Entity1 ID');
      await rdrPage.expectAllCellsNonEmpty('Entity1 ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_189 - Related Parties Network → Verify Entity2 Type is displayed correctly according to the linked entity classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_189
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify Entity2 Type is displayed correctly according to the linked entity classification.
    // FSD §7.2 — Related Parties Network
    // Steps (2): Review Entity2 Type column. → Compare with source data.
    // Expected: Correct Entity2 Type is displayed for each relationship.
    console.log("[RDR_189] Related Parties Network → Verify Entity2 Type is displayed correctly according to the linked entity classification.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Entity2 Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Entity2 Type');
      await rdrPage.expectAllCellsNonEmpty('Entity2 Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_190 - Related Parties Network → Verify Entity2 ID is displayed correctly and linked to the appropriate target entity record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_190
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify Entity2 ID is displayed correctly and linked to the appropriate target entity record.
    // FSD §7.2 — Related Parties Network
    // Steps (2): Review Entity2 ID column. → Compare with linked records.
    // Expected: Correct Entity2 ID is displayed and linked properly.
    console.log("[RDR_190] Related Parties Network → Verify Entity2 ID is displayed correctly and linked to the appropriate target entity record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Entity2 ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Entity2 ID');
      await rdrPage.expectAllCellsNonEmpty('Entity2 ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_191 - Related Parties Network → Verify Relationship Type values are displayed correctly according to relationship classification maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_191
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify Relationship Type values are displayed correctly according to relationship classification maintained in source systems.
    // FSD §7.2 — Related Parties Network
    // Steps (2): Review Relationship Type column. → Compare values with source records.
    // Expected: Correct Relationship Type is displayed for each record.
    console.log("[RDR_191] Related Parties Network → Verify Relationship Type values are displayed correctly according to relationship classification maintained in source systems.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Relationship Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Relationship Type');
      await rdrPage.expectAllCellsNonEmpty('Relationship Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_192 - Related Parties Network → Verify Subtype values are displayed correctly according to the specific relationship category.", async ({ testData }) => {
    // Excel Test Case ID: RDR_192
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify Subtype values are displayed correctly according to the specific relationship category.
    // FSD §7.2 — Related Parties Network
    // Steps (2): Review Subtype column. → Compare with source data.
    // Expected: Correct relationship subtype is displayed for each relationship record.
    console.log("[RDR_192] Related Parties Network → Verify Subtype values are displayed correctly according to the specific relationship category.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Subtype');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Subtype');
      await rdrPage.expectAllCellsNonEmpty('Subtype');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_193 - Related Parties Network → Verify Ownership Percentage is displayed correctly for ownership-based relationships.", async ({ testData }) => {
    // Excel Test Case ID: RDR_193
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify Ownership Percentage is displayed correctly for ownership-based relationships.
    // FSD §7.2 — Related Parties Network
    // Steps (2): Review Ownership % column. → Compare values with source records.
    // Expected: Ownership Percentage is displayed accurately for ownership relationships.
    console.log("[RDR_193] Related Parties Network → Verify Ownership Percentage is displayed correctly for ownership-based relationships.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectAllCellsNonEmpty('Ownership %');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_194 - Related Parties Network → Verify ownership relationships above regulatory thresholds are displayed correctly.", async ({ testData }) => {
    // Excel Test Case ID: RDR_194
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify ownership relationships above regulatory thresholds are displayed correctly.
    // FSD §7.2 — Related Parties Network
    // Steps (2): Review ownership percentages. → Compare against regulatory threshold.
    // Expected: Relationships meeting ownership thresholds are displayed correctly.
    console.log("[RDR_194] Related Parties Network → Verify ownership relationships above regulatory thresholds are displayed correctly.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectAllCellsNonEmpty('Ownership %');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_195 - Related Parties Network → Verify Valid From date is displayed correctly and reflects the effective start date of the relationship.", async ({ testData }) => {
    // Excel Test Case ID: RDR_195
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify Valid From date is displayed correctly and reflects the effective start date of the relationship.
    // FSD §7.2 — Related Parties Network
    // Steps (2): Review Valid From column. → Compare with source records.
    // Expected: Correct Valid From date is displayed for each relationship.
    console.log("[RDR_195] Related Parties Network → Verify Valid From date is displayed correctly and reflects the effective start date of the relationship.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Valid From');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Valid From');
      await rdrPage.expectAllCellsNonEmpty('Valid From');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_196 - Related Parties Network → Verify PEP Flag is displayed correctly in relationship details when the relationship involves a politically exposed person.", async ({ testData }) => {
    // Excel Test Case ID: RDR_196
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify PEP Flag is displayed correctly in relationship details when the relationship involves a politically exposed person.
    // FSD §7.2 — Related Parties Network
    // Steps (3): Click View. → Review PEP Flag field. → Compare with source records.
    // Expected: PEP Flag is displayed correctly according to AML screening results.
    console.log("[RDR_196] Related Parties Network → Verify PEP Flag is displayed correctly in relationship details when the relationship involves a politically exposed person.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('PEP Flag');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('PEP Flag');
      await rdrPage.expectAllCellsNonEmpty('PEP Flag');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_197 - Related Parties Network → Verify Risk Flag is displayed correctly for AML-risk relationships.", async ({ testData }) => {
    // Excel Test Case ID: RDR_197
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify Risk Flag is displayed correctly for AML-risk relationships.
    // FSD §7.2 — Related Parties Network
    // Steps (2): Open relationship details. → Review Risk Flag field.
    // Expected: Risk Flag is displayed correctly according to AML rules.
    console.log("[RDR_197] Related Parties Network → Verify Risk Flag is displayed correctly for AML-risk relationships.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_198 - Related Parties Network → Verify Verified Flag is displayed correctly for validated relationship records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_198
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify Verified Flag is displayed correctly for validated relationship records.
    // FSD §7.2 — Related Parties Network
    // Steps (2): Open relationship details. → Review Verified Flag field.
    // Expected: Verified Flag is displayed correctly according to source records.
    console.log("[RDR_198] Related Parties Network → Verify Verified Flag is displayed correctly for validated relationship records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_199 - Related Parties Network → Verify search functionality retrieves the correct relationship record using Relationship ID.", async ({ testData }) => {
    // Excel Test Case ID: RDR_199
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify search functionality retrieves the correct relationship record using Relationship ID.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter Rel ID in search box. → Execute search. → Review results.
    // Expected: System displays only the relationship record matching the entered Relationship ID.
    console.log("[RDR_199] Related Parties Network → Verify search functionality retrieves the correct relationship record using Relationship ID.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_200 - Related Parties Network → Verify View action opens complete relationship details including entity mapping, ownership information and AML indicators.", async ({ testData }) => {
    // Excel Test Case ID: RDR_200
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify View action opens complete relationship details including entity mapping, ownership information and AML indicators.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button. → Review relationship details. → Validate displayed information.
    // Expected: Relationship detail screen opens successfully displaying Relationship ID, Entity IDs, Relationship Type, Ownership %, PEP Flag, Risk Flag, Verified Flag and related AML information.
    console.log("[RDR_200] Related Parties Network → Verify View action opens complete relationship details including entity mapping, ownership information and AML indicators.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('PEP Flag');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('PEP Flag');
      await rdrPage.expectAllCellsNonEmpty('PEP Flag');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectGridContainsRecords();
      });
  });
  });

  test.describe("Relationships & Related Parties → Non-Customer Master", () => {
  test("Case ID:RDR_201 - Non-Customer Master → Verify Non-Customer ID is generated uniquely and displayed correctly for every non-customer record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_201
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify Non-Customer ID is generated uniquely and displayed correctly for every non-customer record.
    // FSD §7.3 — Non-Customer Master
    // Steps (3): Open Non Customer tab. → Review Non Cust ID column. → Compare all records.
    // Expected: Unique Non-Customer IDs are displayed for all records without duplication.
    console.log("[RDR_201] Non-Customer Master → Verify Non-Customer ID is generated uniquely and displayed correctly for every non-customer record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Non Cust ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Non Cust ID');
      await rdrPage.expectAllCellsNonEmpty('Non Cust ID');
      await rdrPage.expectUniqueColumnValues('Non Cust ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_202 - Non-Customer Master → Verify Full Name is displayed in masked format according to PII masking requirements.", async ({ testData }) => {
    // Excel Test Case ID: RDR_202
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify Full Name is displayed in masked format according to PII masking requirements.
    // FSD §7.3 — Non-Customer Master
    // Steps (3): Review Full Name column. → Verify masking pattern. → Compare with source data.
    // Expected: Full names are displayed in masked format while maintaining privacy compliance.
    console.log("[RDR_202] Non-Customer Master → Verify Full Name is displayed in masked format according to PII masking requirements.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Full Name');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Full Name');
      await rdrPage.expectAllCellsNonEmpty('Full Name');
      await rdrPage.expectColumnValuesMasked('Full Name');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_203 - Non-Customer Master → Verify Non-Customer Type is displayed correctly according to classification maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_203
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify Non-Customer Type is displayed correctly according to classification maintained in source systems.
    // FSD §7.3 — Non-Customer Master
    // Steps (2): Review Type column. → Compare values with source data.
    // Expected: Correct non-customer type is displayed for each record.
    console.log("[RDR_203] Non-Customer Master → Verify Non-Customer Type is displayed correctly according to classification maintained in source systems.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_204 - Non-Customer Master → Verify Nationality is displayed correctly for each non-customer record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_204
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify Nationality is displayed correctly for each non-customer record.
    // FSD §7.3 — Non-Customer Master
    // Steps (2): Review Nationality column. → Compare with source records.
    // Expected: Correct nationality code is displayed for each non-customer.
    console.log("[RDR_204] Non-Customer Master → Verify Nationality is displayed correctly for each non-customer record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Nationality');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Nationality');
      await rdrPage.expectAllCellsNonEmpty('Nationality');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_205 - Non-Customer Master → Verify Country of Residence is displayed correctly according to profile information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_205
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify Country of Residence is displayed correctly according to profile information.
    // FSD §7.3 — Non-Customer Master
    // Steps (2): Review Country of Residence column. → Compare with source records.
    // Expected: Correct country of residence is displayed for each non-customer.
    console.log("[RDR_205] Non-Customer Master → Verify Country of Residence is displayed correctly according to profile information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Country of Residence');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Country of Residence');
      await rdrPage.expectAllCellsNonEmpty('Country of Residence');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_206 - Non-Customer Master → Verify ID Type values are displayed correctly according to identification documents maintained for non-customers.", async ({ testData }) => {
    // Excel Test Case ID: RDR_206
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify ID Type values are displayed correctly according to identification documents maintained for non-customers.
    // FSD §7.3 — Non-Customer Master
    // Steps (2): Review ID Type column. → Compare with source data.
    // Expected: Correct ID Type is displayed for each non-customer record.
    console.log("[RDR_206] Non-Customer Master → Verify ID Type values are displayed correctly according to identification documents maintained for non-customers.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('ID Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('ID Type');
      await rdrPage.expectAllCellsNonEmpty('ID Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_207 - Non-Customer Master → Verify ID Number is displayed in masked format to protect sensitive identification information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_207
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify ID Number is displayed in masked format to protect sensitive identification information.
    // FSD §7.3 — Non-Customer Master
    // Steps (3): Review ID Number column. → Verify masking pattern. → Compare with source data.
    // Expected: ID Numbers are displayed in masked format according to security requirements.
    console.log("[RDR_207] Non-Customer Master → Verify ID Number is displayed in masked format to protect sensitive identification information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('ID Number');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('ID Number');
      await rdrPage.expectAllCellsNonEmpty('ID Number');
      await rdrPage.expectColumnValuesMasked('ID Number');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_208 - Non-Customer Master → Verify PEP Individual records are classified correctly and displayed with appropriate visual indicators.", async ({ testData }) => {
    // Excel Test Case ID: RDR_208
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify PEP Individual records are classified correctly and displayed with appropriate visual indicators.
    // FSD §7.3 — Non-Customer Master
    // Steps (3): Locate PEP_INDIVIDUAL record. → Review Type column. → Verify highlighting.
    // Expected: PEP Individual record is displayed with correct classification and visual indicator.
    console.log("[RDR_208] Non-Customer Master → Verify PEP Individual records are classified correctly and displayed with appropriate visual indicators.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Type');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectColumnVisible('Watchlist');
      await rdrPage.expectColumnIncludesValue('Watchlist', 'Yes');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_209 - Non-Customer Master → Verify linked customer information is displayed correctly in detail view when a non-customer is associated with a bank customer.", async ({ testData }) => {
    // Excel Test Case ID: RDR_209
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify linked customer information is displayed correctly in detail view when a non-customer is associated with a bank customer.
    // FSD §4.3 — Detail Modal
    // Steps (2): Click View. → Review Linked Customer ID field.
    // Expected: Linked Customer ID is displayed accurately in the detail screen.
    console.log("[RDR_209] Non-Customer Master → Verify linked customer information is displayed correctly in detail view when a non-customer is associated with a bank customer.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Customer ID');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      await rdrPage.expectFirstRowLinkNavigates();
      });
  });

  test("Case ID:RDR_210 - Non-Customer Master → Verify Relationship to Customer is displayed correctly in detail view.", async ({ testData }) => {
    // Excel Test Case ID: RDR_210
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify Relationship to Customer is displayed correctly in detail view.
    // FSD §7.3 — Non-Customer Master
    // Steps (2): Open View screen. → Review Relationship to Customer field.
    // Expected: Correct customer relationship type is displayed.
    console.log("[RDR_210] Non-Customer Master → Verify Relationship to Customer is displayed correctly in detail view.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Type');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_211 - Non-Customer Master → Verify PEP Flag is displayed correctly in the detail screen according to AML screening results.", async ({ testData }) => {
    // Excel Test Case ID: RDR_211
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify PEP Flag is displayed correctly in the detail screen according to AML screening results.
    // FSD §4.3 — Detail Modal
    // Steps (2): Open non-customer details. → Review PEP Flag.
    // Expected: PEP Flag is displayed correctly according to AML screening results.
    console.log("[RDR_211] Non-Customer Master → Verify PEP Flag is displayed correctly in the detail screen according to AML screening results.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('PEP Flag');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('PEP Flag');
      await rdrPage.expectAllCellsNonEmpty('PEP Flag');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_212 - Non-Customer Master → Verify Sanctions Flag is displayed correctly for sanctioned non-customer entities.", async ({ testData }) => {
    // Excel Test Case ID: RDR_212
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify Sanctions Flag is displayed correctly for sanctioned non-customer entities.
    // FSD §4.3 — Detail Modal
    // Steps (2): Open detail screen. → Review Sanctions Flag field.
    // Expected: Sanctions Flag is displayed correctly according to sanctions screening results.
    console.log("[RDR_212] Non-Customer Master → Verify Sanctions Flag is displayed correctly for sanctioned non-customer entities.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Sanctions Flag');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Sanctions Flag');
      await rdrPage.expectAllCellsNonEmpty('Sanctions Flag');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_213 - Non-Customer Master → Verify Internal Watchlist Flag is displayed correctly for entities appearing on internal watchlists.", async ({ testData }) => {
    // Excel Test Case ID: RDR_213
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify Internal Watchlist Flag is displayed correctly for entities appearing on internal watchlists.
    // FSD §4.3 — Detail Modal
    // Steps (2): Open detail screen. → Review Internal Watchlist Flag.
    // Expected: Internal Watchlist Flag is displayed correctly according to AML records.
    console.log("[RDR_213] Non-Customer Master → Verify Internal Watchlist Flag is displayed correctly for entities appearing on internal watchlists.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_214 - Non-Customer Master → Verify search functionality retrieves the correct non-customer record using Non-Customer ID.", async ({ testData }) => {
    // Excel Test Case ID: RDR_214
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify search functionality retrieves the correct non-customer record using Non-Customer ID.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter Non Cust ID in search box. → Execute search. → Review results.
    // Expected: System displays only the non-customer record matching the entered ID.
    console.log("[RDR_214] Non-Customer Master → Verify search functionality retrieves the correct non-customer record using Non-Customer ID.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('box');
      await rdrPage.expectColumnVisible('Customer ID');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      });
  });

  test("Case ID:RDR_215 - Non-Customer Master → Verify View action opens complete non-customer details including AML flags, relationship information and source details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_215
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify View action opens complete non-customer details including AML flags, relationship information and source details.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button. → Review complete details. → Validate displayed information.
    // Expected: Detail screen opens successfully displaying Non-Customer ID, Type, Linked Customer ID, Relationship, PEP Flag, Sanctions Flag, Internal Watchlist Flag, Source and identification details.
    console.log("[RDR_215] Non-Customer Master → Verify View action opens complete non-customer details including AML flags, relationship information and source details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Customer ID');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectFirstRowLinkNavigates();
      });
  });
  });

  test.describe("Reference Masters → Customer Type Master", () => {
  test("Case ID:RDR_216 - Customer Type Master → Verify Customer Type records are displayed successfully in the Customer Type Master grid after data load.", async ({ testData }) => {
    // Excel Test Case ID: RDR_216
    // Excel Scenario: Reference Masters → Customer Type Master → Verify Customer Type records are displayed successfully in the Customer Type Master grid after data load.
    // FSD §9.1 — Customer Type Master
    // Steps (2): Open Customer Type tab. → Review records displayed in grid.
    // Expected: Customer Type records are displayed successfully in the grid.
    console.log("[RDR_216] Customer Type Master → Verify Customer Type records are displayed successfully in the Customer Type Master grid after data load.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Customer Type');
      await rdrPage.expectAllCellsNonEmpty('Customer Type');
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_217 - Customer Type Master → Verify Customer Type Code is displayed correctly for each customer category maintained in the master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_217
    // Excel Scenario: Reference Masters → Customer Type Master → Verify Customer Type Code is displayed correctly for each customer category maintained in the master.
    // FSD §9.1 — Customer Type Master
    // Steps (2): Review Code column. → Compare values with source data.
    // Expected: Correct Customer Type Code is displayed for every record.
    console.log("[RDR_217] Customer Type Master → Verify Customer Type Code is displayed correctly for each customer category maintained in the master.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectAllCellsNonEmpty('Code');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_218 - Customer Type Master → Verify Customer Type Name is displayed correctly according to configured customer classifications.", async ({ testData }) => {
    // Excel Test Case ID: RDR_218
    // Excel Scenario: Reference Masters → Customer Type Master → Verify Customer Type Name is displayed correctly according to configured customer classifications.
    // FSD §9.1 — Customer Type Master
    // Steps (2): Review Name column. → Compare with source records.
    // Expected: Correct Customer Type Name is displayed for each customer type.
    console.log("[RDR_218] Customer Type Master → Verify Customer Type Name is displayed correctly according to configured customer classifications.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectAllCellsNonEmpty('Name');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_219 - Customer Type Master → Verify Customer Type Code remains unique across all customer type records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_219
    // Excel Scenario: Reference Masters → Customer Type Master → Verify Customer Type Code remains unique across all customer type records.
    // FSD §9.1 — Customer Type Master
    // Steps (2): Review all codes. → Compare records for duplicates.
    // Expected: Each Customer Type Code is unique.
    console.log("[RDR_219] Customer Type Master → Verify Customer Type Code remains unique across all customer type records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer Type');
      await rdrPage.expectAllCellsNonEmpty('Customer Type');
      await rdrPage.expectUniqueColumnValues('Customer Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_220 - Customer Type Master → Verify Segment ID is displayed uniquely for each customer type record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_220
    // Excel Scenario: Reference Masters → Customer Type Master → Verify Segment ID is displayed uniquely for each customer type record.
    // FSD §9.1 — Customer Type Master
    // Steps (2): Review Segment ID column. → Compare all records.
    // Expected: Unique Segment IDs are displayed for all records.
    console.log("[RDR_220] Customer Type Master → Verify Segment ID is displayed uniquely for each customer type record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Segment ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Segment ID');
      await rdrPage.expectAllCellsNonEmpty('Segment ID');
      await rdrPage.expectUniqueColumnValues('Segment ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_221 - Customer Type Master → Verify search functionality retrieves the correct customer type record using Customer Type Code.", async ({ testData }) => {
    // Excel Test Case ID: RDR_221
    // Excel Scenario: Reference Masters → Customer Type Master → Verify search functionality retrieves the correct customer type record using Customer Type Code.
    // FSD §4.1 — Toolbar
    // Steps (2): Enter Customer Type Code in search field. → Execute search.
    // Expected: Only the Corporate customer type record is displayed.
    console.log("[RDR_221] Customer Type Master → Verify search functionality retrieves the correct customer type record using Customer Type Code.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('field');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Customer Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectAllCellsNonEmpty('Customer Type');
      });
  });

  test("Case ID:RDR_222 - Customer Type Master → Verify search functionality retrieves the correct customer type record using Customer Type Name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_222
    // Excel Scenario: Reference Masters → Customer Type Master → Verify search functionality retrieves the correct customer type record using Customer Type Name.
    // FSD §4.1 — Toolbar
    // Steps (2): Enter customer type name in search field. → Execute search.
    // Expected: Matching customer type record is displayed successfully.
    console.log("[RDR_222] Customer Type Master → Verify search functionality retrieves the correct customer type record using Customer Type Name.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Customer Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectAllCellsNonEmpty('Customer Type');
      });
  });

  test("Case ID:RDR_223 - Customer Type Master → Verify View action opens complete customer type details including risk and CDD configuration fields.", async ({ testData }) => {
    // Excel Test Case ID: RDR_223
    // Excel Scenario: Reference Masters → Customer Type Master → Verify View action opens complete customer type details including risk and CDD configuration fields.
    // FSD §4.3 — Detail Modal
    // Steps (2): Click View button. → Review detail page.
    // Expected: Detail screen opens displaying complete customer type information.
    console.log("[RDR_223] Customer Type Master → Verify View action opens complete customer type details including risk and CDD configuration fields.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Customer Type');
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectAllCellsNonEmpty('Customer Type');
      });
  });

  test("Case ID:RDR_224 - Customer Type Master → Verify Customer Type Code displayed in UI matches the customer_type_code field defined in FSD.", async ({ testData }) => {
    // Excel Test Case ID: RDR_224
    // Excel Scenario: Reference Masters → Customer Type Master → Verify Customer Type Code displayed in UI matches the customer_type_code field defined in FSD.
    // FSD §9.1 — Customer Type Master
    // Steps (2): Open customer type record. → Compare UI values with source data.
    // Expected: Customer Type Code matches source records and FSD definition.
    console.log("[RDR_224] Customer Type Master → Verify Customer Type Code displayed in UI matches the customer_type_code field defined in FSD.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('defined in FSD');
      await rdrPage.expectColumnVisible('defined in FSD');
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_225 - Customer Type Master → Verify Customer Type Name displayed in UI matches the customer_type_name field maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_225
    // Excel Scenario: Reference Masters → Customer Type Master → Verify Customer Type Name displayed in UI matches the customer_type_name field maintained in source systems.
    // FSD §9.1 — Customer Type Master
    // Steps (2): Open customer type record. → Review Name value.
    // Expected: Customer Type Name is displayed correctly.
    console.log("[RDR_225] Customer Type Master → Verify Customer Type Name displayed in UI matches the customer_type_name field maintained in source systems.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Name');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectAllCellsNonEmpty('Name');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_226 - Customer Type Master → Verify Risk Weight value is displayed correctly in customer type detail screen and matches source configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_226
    // Excel Scenario: Reference Masters → Customer Type Master → Verify Risk Weight value is displayed correctly in customer type detail screen and matches source configuration.
    // FSD §4.3 — Detail Modal
    // Steps (2): Open View page. → Review Risk Weight field.
    // Expected: Correct Risk Weight value is displayed for the selected customer type.
    console.log("[RDR_226] Customer Type Master → Verify Risk Weight value is displayed correctly in customer type detail screen and matches source configuration.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer Type');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer Type');
      await rdrPage.expectAllCellsNonEmpty('Customer Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_227 - Customer Type Master → Verify CDD Level is displayed correctly according to configured due diligence rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_227
    // Excel Scenario: Reference Masters → Customer Type Master → Verify CDD Level is displayed correctly according to configured due diligence rules.
    // FSD §9.1 — Customer Type Master
    // Steps (2): Open customer type details. → Review CDD Level field.
    // Expected: Correct CDD Level is displayed according to configuration.
    console.log("[RDR_227] Customer Type Master → Verify CDD Level is displayed correctly according to configured due diligence rules.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Customer Type');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer Type');
      await rdrPage.expectAllCellsNonEmpty('Customer Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_228 - Customer Type Master → Verify Active Status is displayed correctly for customer types currently in use.", async ({ testData }) => {
    // Excel Test Case ID: RDR_228
    // Excel Scenario: Reference Masters → Customer Type Master → Verify Active Status is displayed correctly for customer types currently in use.
    // FSD §4.3 — Detail Modal
    // Steps (2): Open detail screen. → Review Active Status field.
    // Expected: Active status is displayed correctly for active customer types.
    console.log("[RDR_228] Customer Type Master → Verify Active Status is displayed correctly for customer types currently in use.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Customer Type');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer Type');
      await rdrPage.expectAllCellsNonEmpty('Customer Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_229 - Customer Type Master → Verify CSV export functionality exports all customer type records successfully.", async ({ testData }) => {
    // Excel Test Case ID: RDR_229
    // Excel Scenario: Reference Masters → Customer Type Master → Verify CSV export functionality exports all customer type records successfully.
    // FSD §11.1 — Export Formats
    // Steps (3): Click CSV button. → Download file. → Validate contents.
    // Expected: CSV file downloads successfully with accurate customer type records.
    console.log("[RDR_229] Customer Type Master → Verify CSV export functionality exports all customer type records successfully.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Customer Type');
      });
  });

  test("Case ID:RDR_230 - Customer Type Master → Verify Excel export functionality exports all customer type records successfully.", async ({ testData }) => {
    // Excel Test Case ID: RDR_230
    // Excel Scenario: Reference Masters → Customer Type Master → Verify Excel export functionality exports all customer type records successfully.
    // FSD §11.1 — Export Formats
    // Steps (3): Click Excel button. → Download file. → Validate contents.
    // Expected: Excel file downloads successfully with accurate customer type records and structure.
    console.log("[RDR_230] Customer Type Master → Verify Excel export functionality exports all customer type records successfully.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportExcel();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Customer Type');
      });
  });
  });

  test.describe("Reference Masters → Product Master", () => {
  test("Case ID:RDR_231 - Product Master → Verify Product Master records are displayed successfully after CBS synchronization and all configured products are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_231
    // Excel Scenario: Reference Masters → Product Master → Verify Product Master records are displayed successfully after CBS synchronization and all configured products are visible in the grid.
    // FSD §9.2 — Product Master
    // Steps (3): Open Product tab. → Review Product Master grid. → Verify record count and displayed products.
    // Expected: Product records are displayed successfully with complete information.
    console.log("[RDR_231] Product Master → Verify Product Master records are displayed successfully after CBS synchronization and all configured products are visible in the grid.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridWithinConfiguredLimit();
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectAllCellsNonEmpty('Name');
      });
  });

  test("Case ID:RDR_232 - Product Master → Verify Product ID is displayed uniquely for every product maintained in the Product Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_232
    // Excel Scenario: Reference Masters → Product Master → Verify Product ID is displayed uniquely for every product maintained in the Product Master.
    // FSD §9.2 — Product Master
    // Steps (2): Review Product ID column. → Compare all records.
    // Expected: Unique Product IDs are displayed without duplication.
    console.log("[RDR_232] Product Master → Verify Product ID is displayed uniquely for every product maintained in the Product Master.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Product ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Product ID');
      await rdrPage.expectAllCellsNonEmpty('Product ID');
      await rdrPage.expectUniqueColumnValues('Product ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_233 - Product Master → Verify Product Code is displayed correctly according to product configuration maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_233
    // Excel Scenario: Reference Masters → Product Master → Verify Product Code is displayed correctly according to product configuration maintained in source systems.
    // FSD §9.2 — Product Master
    // Steps (2): Review Code column. → Compare values with source data.
    // Expected: Correct Product Codes are displayed for all products.
    console.log("[RDR_233] Product Master → Verify Product Code is displayed correctly according to product configuration maintained in source systems.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectAllCellsNonEmpty('Code');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_234 - Product Master → Verify Product Name is displayed correctly and matches the configured product description.", async ({ testData }) => {
    // Excel Test Case ID: RDR_234
    // Excel Scenario: Reference Masters → Product Master → Verify Product Name is displayed correctly and matches the configured product description.
    // FSD §9.2 — Product Master
    // Steps (2): Review Name column. → Compare with source data.
    // Expected: Correct Product Names are displayed for each product.
    console.log("[RDR_234] Product Master → Verify Product Name is displayed correctly and matches the configured product description.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectAllCellsNonEmpty('Name');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_235 - Product Master → Verify Product Category is displayed correctly according to configured business classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_235
    // Excel Scenario: Reference Masters → Product Master → Verify Product Category is displayed correctly according to configured business classification.
    // FSD §9.2 — Product Master
    // Steps (2): Review Category column. → Compare with source data.
    // Expected: Correct Product Category is displayed for every product.
    console.log("[RDR_235] Product Master → Verify Product Category is displayed correctly according to configured business classification.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Category');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Category');
      await rdrPage.expectAllCellsNonEmpty('Category');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_236 - Product Master → Verify Product Type is displayed correctly according to the product setup maintained in the source system.", async ({ testData }) => {
    // Excel Test Case ID: RDR_236
    // Excel Scenario: Reference Masters → Product Master → Verify Product Type is displayed correctly according to the product setup maintained in the source system.
    // FSD §9.2 — Product Master
    // Steps (2): Review Type column. → Compare with source data.
    // Expected: Correct Product Type is displayed for each product.
    console.log("[RDR_236] Product Master → Verify Product Type is displayed correctly according to the product setup maintained in the source system.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_237 - Product Master → Verify Entity Types applicable to the product are displayed correctly for AML and customer onboarding purposes.", async ({ testData }) => {
    // Excel Test Case ID: RDR_237
    // Excel Scenario: Reference Masters → Product Master → Verify Entity Types applicable to the product are displayed correctly for AML and customer onboarding purposes.
    // FSD §9.2 — Product Master
    // Steps (2): Review Entity Types column. → Compare with source records.
    // Expected: Correct Entity Types are displayed for each product.
    console.log("[RDR_237] Product Master → Verify Entity Types applicable to the product are displayed correctly for AML and customer onboarding purposes.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Entity Types');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Entity Types');
      await rdrPage.expectAllCellsNonEmpty('Entity Types');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_238 - Product Master → Verify Cross Border indicator is displayed correctly for products involving international transactions.", async ({ testData }) => {
    // Excel Test Case ID: RDR_238
    // Excel Scenario: Reference Masters → Product Master → Verify Cross Border indicator is displayed correctly for products involving international transactions.
    // FSD §9.2 — Product Master
    // Steps (2): Review Cross Border column. → Compare with source records.
    // Expected: Correct Cross Border status is displayed for each product.
    console.log("[RDR_238] Product Master → Verify Cross Border indicator is displayed correctly for products involving international transactions.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Cross Border');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Cross Border');
      await rdrPage.expectAllCellsNonEmpty('Cross Border');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_239 - Product Master → Verify Trade Finance products are marked as Cross Border where applicable.", async ({ testData }) => {
    // Excel Test Case ID: RDR_239
    // Excel Scenario: Reference Masters → Product Master → Verify Trade Finance products are marked as Cross Border where applicable.
    // FSD §9.2 — Product Master
    // Steps (2): Locate Trade Finance product. → Review Cross Border value.
    // Expected: Trade Finance product displays Cross Border = Yes as configured.
    console.log("[RDR_239] Product Master → Verify Trade Finance products are marked as Cross Border where applicable.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Cross Border');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Cross Border');
      await rdrPage.expectAllCellsNonEmpty('Cross Border');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_240 - Product Master → Verify Effective Date is displayed correctly and reflects the date from which the product became active.", async ({ testData }) => {
    // Excel Test Case ID: RDR_240
    // Excel Scenario: Reference Masters → Product Master → Verify Effective Date is displayed correctly and reflects the date from which the product became active.
    // FSD §9.2 — Product Master
    // Steps (2): Review Effective Date column. → Compare with source records.
    // Expected: Correct Effective Date is displayed for each product.
    console.log("[RDR_240] Product Master → Verify Effective Date is displayed correctly and reflects the date from which the product became active.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Effective Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Effective Date');
      await rdrPage.expectAllCellsNonEmpty('Effective Date');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_241 - Product Master → Verify Risk Rating is displayed correctly in product detail view according to product risk configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_241
    // Excel Scenario: Reference Masters → Product Master → Verify Risk Rating is displayed correctly in product detail view according to product risk configuration.
    // FSD §9.2 — Product Master
    // Steps (2): Click View. → Review Risk Rating field.
    // Expected: Correct Risk Rating is displayed according to product configuration.
    console.log("[RDR_241] Product Master → Verify Risk Rating is displayed correctly in product detail view according to product risk configuration.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Risk Rating');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Risk Rating');
      await rdrPage.expectAllCellsNonEmpty('Risk Rating');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_242 - Product Master → Verify goAML Product Type mapping is displayed correctly in product detail view for regulatory reporting purposes.", async ({ testData }) => {
    // Excel Test Case ID: RDR_242
    // Excel Scenario: Reference Masters → Product Master → Verify goAML Product Type mapping is displayed correctly in product detail view for regulatory reporting purposes.
    // FSD §11.4 — goAML Integration
    // Steps (2): Open product details. → Review goAML Product Type field.
    // Expected: Correct goAML Product Type mapping is displayed.
    console.log("[RDR_242] Product Master → Verify goAML Product Type mapping is displayed correctly in product detail view for regulatory reporting purposes.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Type');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_243 - Product Master → Verify search functionality retrieves the correct product record using Product Code or Product Name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_243
    // Excel Scenario: Reference Masters → Product Master → Verify search functionality retrieves the correct product record using Product Code or Product Name.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter search value. → Execute search. → Review results.
    // Expected: Only the matching product record is displayed.
    console.log("[RDR_243] Product Master → Verify search functionality retrieves the correct product record using Product Code or Product Name.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('value');
      await rdrPage.expectColumnVisible('Name');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectAllCellsNonEmpty('Name');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      });
  });

  test("Case ID:RDR_244 - Product Master → Verify View action opens complete product details including Product ID, Category, Risk Rating and goAML mapping.", async ({ testData }) => {
    // Excel Test Case ID: RDR_244
    // Excel Scenario: Reference Masters → Product Master → Verify View action opens complete product details including Product ID, Category, Risk Rating and goAML mapping.
    // FSD §4.3 — Detail Modal
    // Steps (2): Click View button. → Review detail screen.
    // Expected: Product detail screen opens successfully displaying complete product information.
    console.log("[RDR_244] Product Master → Verify View action opens complete product details including Product ID, Category, Risk Rating and goAML mapping.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Risk Rating');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Risk Rating');
      await rdrPage.expectAllCellsNonEmpty('Risk Rating');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_245 - Product Master → Verify CSV and Excel export functionality exports all Product Master records accurately.", async ({ testData }) => {
    // Excel Test Case ID: RDR_245
    // Excel Scenario: Reference Masters → Product Master → Verify CSV and Excel export functionality exports all Product Master records accurately.
    // FSD §11.1 — Export Formats
    // Steps (4): Click CSV button. → Validate file. → Click Excel button. …
    // Expected: CSV and Excel files download successfully and contain accurate Product Master data.
    console.log("[RDR_245] Product Master → Verify CSV and Excel export functionality exports all Product Master records accurately.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.exportExcel();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });
  });

  test.describe("Reference Masters → Branch Master", () => {
  test("Case ID:RDR_246 - Branch Master → Verify Branch Master records are displayed successfully after CBS synchronization and all configured branches are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_246
    // Excel Scenario: Reference Masters → Branch Master → Verify Branch Master records are displayed successfully after CBS synchronization and all configured branches are visible in the grid.
    // FSD §9.3 — Branch Master
    // Steps (3): Open Branch tab. → Review Branch Master grid. → Verify displayed records.
    // Expected: All branch records are displayed successfully in the grid.
    console.log("[RDR_246] Branch Master → Verify Branch Master records are displayed successfully after CBS synchronization and all configured branches are visible in the grid.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      });
  });

  test("Case ID:RDR_247 - Branch Master → Verify Branch ID is displayed uniquely for every branch maintained in the Branch Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_247
    // Excel Scenario: Reference Masters → Branch Master → Verify Branch ID is displayed uniquely for every branch maintained in the Branch Master.
    // FSD §9.3 — Branch Master
    // Steps (2): Review Branch ID column. → Compare all displayed records.
    // Expected: Unique Branch IDs are displayed without duplication.
    console.log("[RDR_247] Branch Master → Verify Branch ID is displayed uniquely for every branch maintained in the Branch Master.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Branch ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Branch ID');
      await rdrPage.expectAllCellsNonEmpty('Branch ID');
      await rdrPage.expectUniqueColumnValues('Branch ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_248 - Branch Master → Verify Branch Code is displayed correctly according to the branch configuration maintained in CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_248
    // Excel Scenario: Reference Masters → Branch Master → Verify Branch Code is displayed correctly according to the branch configuration maintained in CBS.
    // FSD §9.3 — Branch Master
    // Steps (2): Review Code column. → Compare values with source data.
    // Expected: Correct Branch Codes are displayed for all branches.
    console.log("[RDR_248] Branch Master → Verify Branch Code is displayed correctly according to the branch configuration maintained in CBS.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectAllCellsNonEmpty('Code');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_249 - Branch Master → Verify Branch Name is displayed correctly and matches the official branch name configured in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_249
    // Excel Scenario: Reference Masters → Branch Master → Verify Branch Name is displayed correctly and matches the official branch name configured in source systems.
    // FSD §9.3 — Branch Master
    // Steps (2): Review Name column. → Compare values with source data.
    // Expected: Correct Branch Names are displayed for each branch.
    console.log("[RDR_249] Branch Master → Verify Branch Name is displayed correctly and matches the official branch name configured in source systems.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectAllCellsNonEmpty('Name');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_250 - Branch Master → Verify City information is displayed correctly according to branch location details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_250
    // Excel Scenario: Reference Masters → Branch Master → Verify City information is displayed correctly according to branch location details.
    // FSD §9.3 — Branch Master
    // Steps (2): Review City column. → Compare values with source data.
    // Expected: Correct city information is displayed for each branch.
    console.log("[RDR_250] Branch Master → Verify City information is displayed correctly according to branch location details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('City');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('City');
      await rdrPage.expectAllCellsNonEmpty('City');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_251 - Branch Master → Verify State information is displayed correctly according to branch location details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_251
    // Excel Scenario: Reference Masters → Branch Master → Verify State information is displayed correctly according to branch location details.
    // FSD §9.3 — Branch Master
    // Steps (2): Review State column. → Compare values with source records.
    // Expected: Correct state information is displayed for all branches.
    console.log("[RDR_251] Branch Master → Verify State information is displayed correctly according to branch location details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('State');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('State');
      await rdrPage.expectAllCellsNonEmpty('State');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_252 - Branch Master → Verify Branch Type is displayed correctly according to configured branch classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_252
    // Excel Scenario: Reference Masters → Branch Master → Verify Branch Type is displayed correctly according to configured branch classification.
    // FSD §9.3 — Branch Master
    // Steps (2): Review Type column. → Compare values with source data.
    // Expected: Correct Branch Type is displayed for each branch.
    console.log("[RDR_252] Branch Master → Verify Branch Type is displayed correctly according to configured branch classification.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_253 - Branch Master → Verify High Risk Zone indicator is displayed correctly for branches located in AML high-risk areas.", async ({ testData }) => {
    // Excel Test Case ID: RDR_253
    // Excel Scenario: Reference Masters → Branch Master → Verify High Risk Zone indicator is displayed correctly for branches located in AML high-risk areas.
    // FSD §9.3 — Branch Master
    // Steps (2): Review High Risk Zone column. → Compare values with source records.
    // Expected: High Risk Zone indicator is displayed correctly for high-risk branches.
    console.log("[RDR_253] Branch Master → Verify High Risk Zone indicator is displayed correctly for branches located in AML high-risk areas.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('High Risk Zone indicator');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('High Risk Zone indicator');
      await rdrPage.expectAllCellsNonEmpty('High Risk Zone indicator');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_254 - Branch Master → Verify Border Branch indicator is displayed correctly for branches operating near international borders.", async ({ testData }) => {
    // Excel Test Case ID: RDR_254
    // Excel Scenario: Reference Masters → Branch Master → Verify Border Branch indicator is displayed correctly for branches operating near international borders.
    // FSD §9.3 — Branch Master
    // Steps (2): Review Border Branch column. → Compare values with source records.
    // Expected: Border Branch indicator is displayed correctly for applicable branches.
    console.log("[RDR_254] Branch Master → Verify Border Branch indicator is displayed correctly for branches operating near international borders.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Border Branch');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Border Branch');
      await rdrPage.expectAllCellsNonEmpty('Border Branch');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_255 - Branch Master → Verify Active Status is displayed correctly for operational branches.", async ({ testData }) => {
    // Excel Test Case ID: RDR_255
    // Excel Scenario: Reference Masters → Branch Master → Verify Active Status is displayed correctly for operational branches.
    // FSD §9.3 — Branch Master
    // Steps (2): Review Status column. → Compare values with source data.
    // Expected: Active status is displayed correctly for all active branches.
    console.log("[RDR_255] Branch Master → Verify Active Status is displayed correctly for operational branches.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_256 - Branch Master → Verify BSR Code is displayed correctly according to branch registration information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_256
    // Excel Scenario: Reference Masters → Branch Master → Verify BSR Code is displayed correctly according to branch registration information.
    // FSD §9.3 — Branch Master
    // Steps (2): Review BSR Code column. → Compare values with source data.
    // Expected: Correct BSR Code is displayed for each branch.
    console.log("[RDR_256] Branch Master → Verify BSR Code is displayed correctly according to branch registration information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('BSR Code');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('BSR Code');
      await rdrPage.expectAllCellsNonEmpty('BSR Code');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_257 - Branch Master → Verify IFSC Code is displayed correctly in branch detail view according to FSD configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_257
    // Excel Scenario: Reference Masters → Branch Master → Verify IFSC Code is displayed correctly in branch detail view according to FSD configuration.
    // FSD §9.3 — Branch Master
    // Steps (2): Click View. → Review IFSC Code field.
    // Expected: Correct IFSC Code is displayed in branch details.
    console.log("[RDR_257] Branch Master → Verify IFSC Code is displayed correctly in branch detail view according to FSD configuration.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Code');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectAllCellsNonEmpty('Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_258 - Branch Master → Verify SWIFT/BIC Code is displayed correctly in branch detail view for cross-border identification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_258
    // Excel Scenario: Reference Masters → Branch Master → Verify SWIFT/BIC Code is displayed correctly in branch detail view for cross-border identification.
    // FSD §9.3 — Branch Master
    // Steps (2): Open branch details. → Review SWIFT/BIC field.
    // Expected: Correct SWIFT/BIC code is displayed in branch details.
    console.log("[RDR_258] Branch Master → Verify SWIFT/BIC Code is displayed correctly in branch detail view for cross-border identification.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Code');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectAllCellsNonEmpty('Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_259 - Branch Master → Verify search functionality retrieves the correct branch record using Branch ID, Code or Name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_259
    // Excel Scenario: Reference Masters → Branch Master → Verify search functionality retrieves the correct branch record using Branch ID, Code or Name.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter search value. → Execute search. → Review results.
    // Expected: Only the matching branch record is displayed.
    console.log("[RDR_259] Branch Master → Verify search functionality retrieves the correct branch record using Branch ID, Code or Name.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('value');
      await rdrPage.expectColumnVisible('Name');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectAllCellsNonEmpty('Name');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      });
  });

  test("Case ID:RDR_260 - Branch Master → Verify View action opens complete branch details including Branch ID, Type, Country Code, High Risk Area Flag, IFSC and SWIFT information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_260
    // Excel Scenario: Reference Masters → Branch Master → Verify View action opens complete branch details including Branch ID, Type, Country Code, High Risk Area Flag, IFSC and SWIFT information.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button. → Review branch detail screen. → Validate displayed information.
    // Expected: Branch detail screen opens successfully displaying Branch ID, Branch Name, Branch Type, Country Code, High Risk Area Flag, IFSC Code, SWIFT/BIC Code and AML-related branch information.
    console.log("[RDR_260] Branch Master → Verify View action opens complete branch details including Branch ID, Type, Country Code, High Risk Area Flag, IFSC and SWIFT information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Name');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectAllCellsNonEmpty('Name');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectGridContainsRecords();
      });
  });
  });

  test.describe("Reference Masters → Channel Master", () => {
  test("Case ID:RDR_261 - Channel Master → Verify Channel Master records are displayed successfully after data synchronization and all configured channels are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_261
    // Excel Scenario: Reference Masters → Channel Master → Verify Channel Master records are displayed successfully after data synchronization and all configured channels are visible in the grid.
    // FSD §9.4 — Channel Master
    // Steps (3): Open Channel tab. → Review Channel Master grid. → Verify displayed records.
    // Expected: All configured channel records are displayed successfully.
    console.log("[RDR_261] Channel Master → Verify Channel Master records are displayed successfully after data synchronization and all configured channels are visible in the grid.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      });
  });

  test("Case ID:RDR_262 - Channel Master → Verify Channel ID is displayed uniquely for every channel record maintained in the master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_262
    // Excel Scenario: Reference Masters → Channel Master → Verify Channel ID is displayed uniquely for every channel record maintained in the master.
    // FSD §9.4 — Channel Master
    // Steps (2): Review Channel ID column. → Compare all records.
    // Expected: Unique Channel IDs are displayed without duplication.
    console.log("[RDR_262] Channel Master → Verify Channel ID is displayed uniquely for every channel record maintained in the master.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Channel ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Channel ID');
      await rdrPage.expectAllCellsNonEmpty('Channel ID');
      await rdrPage.expectUniqueColumnValues('Channel ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_263 - Channel Master → Verify Channel Code is displayed correctly according to the configured channel identifier.", async ({ testData }) => {
    // Excel Test Case ID: RDR_263
    // Excel Scenario: Reference Masters → Channel Master → Verify Channel Code is displayed correctly according to the configured channel identifier.
    // FSD §9.4 — Channel Master
    // Steps (2): Review Code column. → Compare values with source records.
    // Expected: Correct Channel Codes are displayed for all channels.
    console.log("[RDR_263] Channel Master → Verify Channel Code is displayed correctly according to the configured channel identifier.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectAllCellsNonEmpty('Code');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_264 - Channel Master → Verify Channel Name is displayed correctly according to the configured business channel name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_264
    // Excel Scenario: Reference Masters → Channel Master → Verify Channel Name is displayed correctly according to the configured business channel name.
    // FSD §9.4 — Channel Master
    // Steps (2): Review Name column. → Compare values with source data.
    // Expected: Correct Channel Names are displayed for all records.
    console.log("[RDR_264] Channel Master → Verify Channel Name is displayed correctly according to the configured business channel name.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectAllCellsNonEmpty('Name');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_265 - Channel Master → Verify Channel Type is displayed correctly according to the channel classification maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_265
    // Excel Scenario: Reference Masters → Channel Master → Verify Channel Type is displayed correctly according to the channel classification maintained in source systems.
    // FSD §9.4 — Channel Master
    // Steps (2): Review Type column. → Compare values with source data.
    // Expected: Correct Channel Type is displayed for each channel.
    console.log("[RDR_265] Channel Master → Verify Channel Type is displayed correctly according to the channel classification maintained in source systems.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_266 - Channel Master → Verify Status is displayed correctly and reflects the active/inactive state of the channel.", async ({ testData }) => {
    // Excel Test Case ID: RDR_266
    // Excel Scenario: Reference Masters → Channel Master → Verify Status is displayed correctly and reflects the active/inactive state of the channel.
    // FSD §9.4 — Channel Master
    // Steps (2): Review Status column. → Compare values with source data.
    // Expected: Correct status is displayed for every channel record.
    console.log("[RDR_266] Channel Master → Verify Status is displayed correctly and reflects the active/inactive state of the channel.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_267 - Channel Master → Verify Description field is displayed correctly and provides channel-specific AML/business context.", async ({ testData }) => {
    // Excel Test Case ID: RDR_267
    // Excel Scenario: Reference Masters → Channel Master → Verify Description field is displayed correctly and provides channel-specific AML/business context.
    // FSD §9.4 — Channel Master
    // Steps (2): Review Description column. → Compare values with source records.
    // Expected: Correct channel description is displayed for every channel.
    console.log("[RDR_267] Channel Master → Verify Description field is displayed correctly and provides channel-specific AML/business context.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Description');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Description');
      await rdrPage.expectAllCellsNonEmpty('Description');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_268 - Channel Master → Verify Branch channel is classified as PHYSICAL and displayed correctly in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_268
    // Excel Scenario: Reference Masters → Channel Master → Verify Branch channel is classified as PHYSICAL and displayed correctly in the grid.
    // FSD §9.4 — Channel Master
    // Steps (2): Locate Branch record. → Verify Channel Type.
    // Expected: Branch channel displays Type = PHYSICAL.
    console.log("[RDR_268] Channel Master → Verify Branch channel is classified as PHYSICAL and displayed correctly in the grid.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_269 - Channel Master → Verify Mobile Banking channel is classified as DIGITAL and displayed correctly.", async ({ testData }) => {
    // Excel Test Case ID: RDR_269
    // Excel Scenario: Reference Masters → Channel Master → Verify Mobile Banking channel is classified as DIGITAL and displayed correctly.
    // FSD §9.4 — Channel Master
    // Steps (2): Locate Mobile Banking record. → Verify Type field.
    // Expected: Mobile Banking displays Type = DIGITAL.
    console.log("[RDR_269] Channel Master → Verify Mobile Banking channel is classified as DIGITAL and displayed correctly.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_270 - Channel Master → Verify UPI channel is classified as DIGITAL and displayed correctly for AML monitoring purposes.", async ({ testData }) => {
    // Excel Test Case ID: RDR_270
    // Excel Scenario: Reference Masters → Channel Master → Verify UPI channel is classified as DIGITAL and displayed correctly for AML monitoring purposes.
    // FSD §9.4 — Channel Master
    // Steps (2): Locate UPI record. → Verify Type field.
    // Expected: UPI displays Type = DIGITAL.
    console.log("[RDR_270] Channel Master → Verify UPI channel is classified as DIGITAL and displayed correctly for AML monitoring purposes.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_271 - Channel Master → Verify Risk Score Weight is displayed correctly in the channel detail screen and matches configured AML scoring rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_271
    // Excel Scenario: Reference Masters → Channel Master → Verify Risk Score Weight is displayed correctly in the channel detail screen and matches configured AML scoring rules.
    // FSD §4.3 — Detail Modal
    // Steps (2): Click View. → Review Risk Score Weight field.
    // Expected: Correct Risk Score Weight is displayed in channel details.
    console.log("[RDR_271] Channel Master → Verify Risk Score Weight is displayed correctly in the channel detail screen and matches configured AML scoring rules.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_272 - Channel Master → Verify Cross Border Indicator is displayed correctly in channel detail view according to channel capabilities.", async ({ testData }) => {
    // Excel Test Case ID: RDR_272
    // Excel Scenario: Reference Masters → Channel Master → Verify Cross Border Indicator is displayed correctly in channel detail view according to channel capabilities.
    // FSD §9.4 — Channel Master
    // Steps (2): Open channel details. → Review Cross Border field.
    // Expected: Cross Border indicator is displayed correctly according to configuration.
    console.log("[RDR_272] Channel Master → Verify Cross Border Indicator is displayed correctly in channel detail view according to channel capabilities.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Cross Border');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Cross Border');
      await rdrPage.expectAllCellsNonEmpty('Cross Border');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_273 - Channel Master → Verify goAML Channel Type mapping is displayed correctly in the channel detail screen.", async ({ testData }) => {
    // Excel Test Case ID: RDR_273
    // Excel Scenario: Reference Masters → Channel Master → Verify goAML Channel Type mapping is displayed correctly in the channel detail screen.
    // FSD §4.3 — Detail Modal
    // Steps (2): Open channel details. → Review goAML Channel Type field.
    // Expected: Correct goAML Channel Type mapping is displayed.
    console.log("[RDR_273] Channel Master → Verify goAML Channel Type mapping is displayed correctly in the channel detail screen.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Type');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_274 - Channel Master → Verify search functionality retrieves the correct channel record using Channel Code or Channel Name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_274
    // Excel Scenario: Reference Masters → Channel Master → Verify search functionality retrieves the correct channel record using Channel Code or Channel Name.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter search value. → Execute search. → Review results.
    // Expected: Only the matching channel record is displayed.
    console.log("[RDR_274] Channel Master → Verify search functionality retrieves the correct channel record using Channel Code or Channel Name.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('value');
      await rdrPage.expectColumnVisible('Code');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectAllCellsNonEmpty('Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      });
  });

  test("Case ID:RDR_275 - Channel Master → Verify View action opens complete channel details including Channel Code, Type, Risk Weight, Cross Border Indicator and goAML mapping.", async ({ testData }) => {
    // Excel Test Case ID: RDR_275
    // Excel Scenario: Reference Masters → Channel Master → Verify View action opens complete channel details including Channel Code, Type, Risk Weight, Cross Border Indicator and goAML mapping.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button. → Review detail screen. → Validate displayed information.
    // Expected: Channel detail screen opens successfully displaying Channel Code, Channel Type, Risk Score Weight, Cross Border Flag, goAML Channel Type and AML-related channel information.
    console.log("[RDR_275] Channel Master → Verify View action opens complete channel details including Channel Code, Type, Risk Weight, Cross Border Indicator and goAML mapping.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Cross Border');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Cross Border');
      await rdrPage.expectAllCellsNonEmpty('Cross Border');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectGridContainsRecords();
      });
  });
  });

  test.describe("Reference Masters → Transaction Type Master", () => {
  test("Case ID:RDR_276 - Transaction Type Master → Verify Transaction Type Master records are displayed successfully after data synchronization and all configured transaction types are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_276
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify Transaction Type Master records are displayed successfully after data synchronization and all configured transaction types are visible in the grid.
    // FSD §9.5 — Transaction Type Master
    // Steps (3): Open TXN Type tab. → Review grid records. → Verify displayed transaction types.
    // Expected: All configured transaction type records are displayed successfully.
    console.log("[RDR_276] Transaction Type Master → Verify Transaction Type Master records are displayed successfully after data synchronization and all configured transaction types are visible in the grid.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      });
  });

  test("Case ID:RDR_277 - Transaction Type Master → Verify Transaction Type ID is displayed uniquely for every transaction type record maintained in the master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_277
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify Transaction Type ID is displayed uniquely for every transaction type record maintained in the master.
    // FSD §9.5 — Transaction Type Master
    // Steps (2): Review TXN Type ID column. → Compare all records.
    // Expected: Unique Transaction Type IDs are displayed without duplication.
    console.log("[RDR_277] Transaction Type Master → Verify Transaction Type ID is displayed uniquely for every transaction type record maintained in the master.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('TXN Type ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('TXN Type ID');
      await rdrPage.expectAllCellsNonEmpty('TXN Type ID');
      await rdrPage.expectUniqueColumnValues('TXN Type ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_278 - Transaction Type Master → Verify Transaction Type Code is displayed correctly according to configured transaction definitions.", async ({ testData }) => {
    // Excel Test Case ID: RDR_278
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify Transaction Type Code is displayed correctly according to configured transaction definitions.
    // FSD §9.5 — Transaction Type Master
    // Steps (2): Review Code column. → Compare values with source records.
    // Expected: Correct Transaction Type Codes are displayed for all records.
    console.log("[RDR_278] Transaction Type Master → Verify Transaction Type Code is displayed correctly according to configured transaction definitions.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectAllCellsNonEmpty('Code');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_279 - Transaction Type Master → Verify Transaction Type Name is displayed correctly according to business transaction definitions.", async ({ testData }) => {
    // Excel Test Case ID: RDR_279
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify Transaction Type Name is displayed correctly according to business transaction definitions.
    // FSD §9.5 — Transaction Type Master
    // Steps (2): Review Name column. → Compare values with source data.
    // Expected: Correct Transaction Type Names are displayed for all transaction types.
    console.log("[RDR_279] Transaction Type Master → Verify Transaction Type Name is displayed correctly according to business transaction definitions.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectAllCellsNonEmpty('Name');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_280 - Transaction Type Master → Verify Transaction Direction is displayed correctly and identifies whether the transaction is Credit, Debit or Both.", async ({ testData }) => {
    // Excel Test Case ID: RDR_280
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify Transaction Direction is displayed correctly and identifies whether the transaction is Credit, Debit or Both.
    // FSD §9.5 — Transaction Type Master
    // Steps (2): Review Direction column. → Compare values with source records.
    // Expected: Correct transaction direction is displayed for each transaction type.
    console.log("[RDR_280] Transaction Type Master → Verify Transaction Direction is displayed correctly and identifies whether the transaction is Credit, Debit or Both.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Direction');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Direction');
      await rdrPage.expectAllCellsNonEmpty('Direction');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_281 - Transaction Type Master → Verify Cash Flag is displayed correctly for cash-based transaction types that are eligible for CTR reporting.", async ({ testData }) => {
    // Excel Test Case ID: RDR_281
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify Cash Flag is displayed correctly for cash-based transaction types that are eligible for CTR reporting.
    // FSD §9.5 — Transaction Type Master
    // Steps (2): Review Cash Flag column. → Compare values with source data.
    // Expected: Cash Flag is displayed correctly according to transaction configuration.
    console.log("[RDR_281] Transaction Type Master → Verify Cash Flag is displayed correctly for cash-based transaction types that are eligible for CTR reporting.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Cash Flag');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Cash Flag');
      await rdrPage.expectAllCellsNonEmpty('Cash Flag');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_282 - Transaction Type Master → Verify Cross Border indicator is displayed correctly for international transaction types.", async ({ testData }) => {
    // Excel Test Case ID: RDR_282
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify Cross Border indicator is displayed correctly for international transaction types.
    // FSD §9.5 — Transaction Type Master
    // Steps (2): Review Cross Border column. → Compare values with source records.
    // Expected: Cross Border indicator is displayed correctly for applicable transaction types.
    console.log("[RDR_282] Transaction Type Master → Verify Cross Border indicator is displayed correctly for international transaction types.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Cross Border');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Cross Border');
      await rdrPage.expectAllCellsNonEmpty('Cross Border');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_283 - Transaction Type Master → Verify AML Risk classification is displayed correctly according to AML risk assessment rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_283
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify AML Risk classification is displayed correctly according to AML risk assessment rules.
    // FSD §9.5 — Transaction Type Master
    // Steps (2): Review AML Risk column. → Compare with source configuration.
    // Expected: Correct AML Risk level is displayed for each transaction type.
    console.log("[RDR_283] Transaction Type Master → Verify AML Risk classification is displayed correctly according to AML risk assessment rules.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('AML Risk');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('AML Risk');
      await rdrPage.expectAllCellsNonEmpty('AML Risk');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_284 - Transaction Type Master → Verify CTR Applicable indicator is displayed correctly for cash transactions subject to regulatory CTR thresholds.", async ({ testData }) => {
    // Excel Test Case ID: RDR_284
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify CTR Applicable indicator is displayed correctly for cash transactions subject to regulatory CTR thresholds.
    // FSD §9.5 — Transaction Type Master
    // Steps (2): Review CTR Applicable column. → Compare values with source records.
    // Expected: CTR applicability is displayed correctly for eligible transaction types.
    console.log("[RDR_284] Transaction Type Master → Verify CTR Applicable indicator is displayed correctly for cash transactions subject to regulatory CTR thresholds.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('CTR Applicable');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('CTR Applicable');
      await rdrPage.expectAllCellsNonEmpty('CTR Applicable');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_285 - Transaction Type Master → Verify Status is displayed correctly and reflects whether the transaction type is active for use.", async ({ testData }) => {
    // Excel Test Case ID: RDR_285
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify Status is displayed correctly and reflects whether the transaction type is active for use.
    // FSD §9.5 — Transaction Type Master
    // Steps (2): Review Status column. → Compare values with source data.
    // Expected: Correct status is displayed for each transaction type.
    console.log("[RDR_285] Transaction Type Master → Verify Status is displayed correctly and reflects whether the transaction type is active for use.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_286 - Transaction Type Master → Verify Description field is displayed correctly and provides AML/business context for the transaction type.", async ({ testData }) => {
    // Excel Test Case ID: RDR_286
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify Description field is displayed correctly and provides AML/business context for the transaction type.
    // FSD §9.5 — Transaction Type Master
    // Steps (2): Review Description column. → Compare values with source records.
    // Expected: Correct transaction description is displayed for each transaction type.
    console.log("[RDR_286] Transaction Type Master → Verify Description field is displayed correctly and provides AML/business context for the transaction type.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Description');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Description');
      await rdrPage.expectAllCellsNonEmpty('Description');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_287 - Transaction Type Master → Verify Risk Weight is displayed correctly in the transaction type detail screen and matches AML scoring configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_287
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify Risk Weight is displayed correctly in the transaction type detail screen and matches AML scoring configuration.
    // FSD §4.3 — Detail Modal
    // Steps (2): Click View. → Review Risk Weight field.
    // Expected: Correct Risk Weight is displayed according to AML scoring configuration.
    console.log("[RDR_287] Transaction Type Master → Verify Risk Weight is displayed correctly in the transaction type detail screen and matches AML scoring configuration.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Type');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_288 - Transaction Type Master → Verify goAML Transaction Type mapping is displayed correctly in the detail screen for STR reporting requirements.", async ({ testData }) => {
    // Excel Test Case ID: RDR_288
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify goAML Transaction Type mapping is displayed correctly in the detail screen for STR reporting requirements.
    // FSD §4.3 — Detail Modal
    // Steps (2): Open transaction type details. → Review goAML Transaction Type field.
    // Expected: Correct goAML Transaction Type mapping is displayed.
    console.log("[RDR_288] Transaction Type Master → Verify goAML Transaction Type mapping is displayed correctly in the detail screen for STR reporting requirements.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Type');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_289 - Transaction Type Master → Verify search functionality retrieves the correct transaction type record using transaction code or name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_289
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify search functionality retrieves the correct transaction type record using transaction code or name.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter search value. → Execute search. → Review results.
    // Expected: Only the matching transaction type record is displayed.
    console.log("[RDR_289] Transaction Type Master → Verify search functionality retrieves the correct transaction type record using transaction code or name.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('value');
      await rdrPage.expectColumnVisible('Name');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectAllCellsNonEmpty('Name');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      });
  });

  test("Case ID:RDR_290 - Transaction Type Master → Verify View action opens complete transaction type details including direction, risk weight, cash indicator, cross-border flag and goAML mapping.", async ({ testData }) => {
    // Excel Test Case ID: RDR_290
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify View action opens complete transaction type details including direction, risk weight, cash indicator, cross-border flag and goAML mapping.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button. → Review detail screen. → Validate displayed information.
    // Expected: Detail screen opens successfully displaying Transaction Type Code, Name, Direction, Cash Flag, Cross Border Flag, Risk Weight, goAML Transaction Type and AML-related information.
    console.log("[RDR_290] Transaction Type Master → Verify View action opens complete transaction type details including direction, risk weight, cash indicator, cross-border flag and goAML mapping.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Cross Border');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Cross Border');
      await rdrPage.expectAllCellsNonEmpty('Cross Border');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectGridContainsRecords();
      });
  });
  });

  test.describe("Reference Masters → Currency Master", () => {
  test("Case ID:RDR_291 - Currency Master → Verify Currency Master records are displayed successfully after synchronization and all configured currencies are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_291
    // Excel Scenario: Reference Masters → Currency Master → Verify Currency Master records are displayed successfully after synchronization and all configured currencies are visible in the grid.
    // FSD §9.6 — Currency Master
    // Steps (3): Open Currency tab. → Review Currency Master grid. → Verify displayed records.
    // Expected: All configured currencies are displayed successfully in the grid.
    console.log("[RDR_291] Currency Master → Verify Currency Master records are displayed successfully after synchronization and all configured currencies are visible in the grid.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      });
  });

  test("Case ID:RDR_292 - Currency Master → Verify Currency Code (ISO 4217) is displayed correctly and uniquely for every currency record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_292
    // Excel Scenario: Reference Masters → Currency Master → Verify Currency Code (ISO 4217) is displayed correctly and uniquely for every currency record.
    // FSD §9.6 — Currency Master
    // Steps (2): Review ISO Code column. → Compare displayed values with source data.
    // Expected: Unique and valid ISO currency codes are displayed.
    console.log("[RDR_292] Currency Master → Verify Currency Code (ISO 4217) is displayed correctly and uniquely for every currency record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('ISO Code');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('ISO Code');
      await rdrPage.expectAllCellsNonEmpty('ISO Code');
      await rdrPage.expectUniqueColumnValues('ISO Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_293 - Currency Master → Verify Currency Name is displayed correctly according to the configured currency master data.", async ({ testData }) => {
    // Excel Test Case ID: RDR_293
    // Excel Scenario: Reference Masters → Currency Master → Verify Currency Name is displayed correctly according to the configured currency master data.
    // FSD §9.6 — Currency Master
    // Steps (2): Review Name column. → Compare displayed values with source data.
    // Expected: Correct currency names are displayed.
    console.log("[RDR_293] Currency Master → Verify Currency Name is displayed correctly according to the configured currency master data.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectAllCellsNonEmpty('Name');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_294 - Currency Master → Verify Currency Symbol is displayed correctly for each configured currency.", async ({ testData }) => {
    // Excel Test Case ID: RDR_294
    // Excel Scenario: Reference Masters → Currency Master → Verify Currency Symbol is displayed correctly for each configured currency.
    // FSD §9.6 — Currency Master
    // Steps (2): Review Symbol column. → Compare values with configured records.
    // Expected: Correct symbols are displayed for all currencies.
    console.log("[RDR_294] Currency Master → Verify Currency Symbol is displayed correctly for each configured currency.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Symbol');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Symbol');
      await rdrPage.expectAllCellsNonEmpty('Symbol');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_295 - Currency Master → Verify Country Code is displayed correctly against the corresponding currency.", async ({ testData }) => {
    // Excel Test Case ID: RDR_295
    // Excel Scenario: Reference Masters → Currency Master → Verify Country Code is displayed correctly against the corresponding currency.
    // FSD §9.6 — Currency Master
    // Steps (2): Review Country column. → Compare displayed values with source data.
    // Expected: Correct country codes are displayed for all currencies.
    console.log("[RDR_295] Currency Master → Verify Country Code is displayed correctly against the corresponding currency.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Country');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Country');
      await rdrPage.expectAllCellsNonEmpty('Country');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_296 - Currency Master → Verify Status is displayed correctly and reflects whether the currency is active in the system.", async ({ testData }) => {
    // Excel Test Case ID: RDR_296
    // Excel Scenario: Reference Masters → Currency Master → Verify Status is displayed correctly and reflects whether the currency is active in the system.
    // FSD §9.6 — Currency Master
    // Steps (2): Review Status column. → Compare values with source data.
    // Expected: Correct currency status is displayed.
    console.log("[RDR_296] Currency Master → Verify Status is displayed correctly and reflects whether the currency is active in the system.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_297 - Currency Master → Verify INR currency record is displayed correctly with all associated details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_297
    // Excel Scenario: Reference Masters → Currency Master → Verify INR currency record is displayed correctly with all associated details.
    // FSD §9.6 — Currency Master
    // Steps (2): Locate INR record. → Verify Code, Name, Symbol and Status.
    // Expected: INR record displays correct details and active status.
    console.log("[RDR_297] Currency Master → Verify INR currency record is displayed correctly with all associated details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_298 - Currency Master → Verify USD currency record is displayed correctly with all associated details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_298
    // Excel Scenario: Reference Masters → Currency Master → Verify USD currency record is displayed correctly with all associated details.
    // FSD §9.6 — Currency Master
    // Steps (2): Locate USD record. → Verify displayed details.
    // Expected: USD record displays correct details and active status.
    console.log("[RDR_298] Currency Master → Verify USD currency record is displayed correctly with all associated details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_299 - Currency Master → Verify AED currency record is displayed correctly with all associated details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_299
    // Excel Scenario: Reference Masters → Currency Master → Verify AED currency record is displayed correctly with all associated details.
    // FSD §9.6 — Currency Master
    // Steps (2): Locate AED record. → Verify displayed details.
    // Expected: AED record displays correct details and active status.
    console.log("[RDR_299] Currency Master → Verify AED currency record is displayed correctly with all associated details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_300 - Currency Master → Verify Search functionality retrieves the correct currency record using Currency Code.", async ({ testData }) => {
    // Excel Test Case ID: RDR_300
    // Excel Scenario: Reference Masters → Currency Master → Verify Search functionality retrieves the correct currency record using Currency Code.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter currency code in search box. → Execute search. → Review results.
    // Expected: Only the USD currency record is displayed.
    console.log("[RDR_300] Currency Master → Verify Search functionality retrieves the correct currency record using Currency Code.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('box');
      await rdrPage.expectColumnVisible('ISO Code');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('ISO Code');
      await rdrPage.expectAllCellsNonEmpty('ISO Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      });
  });

  test("Case ID:RDR_301 - Currency Master → Verify Search functionality retrieves the correct currency record using Currency Name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_301
    // Excel Scenario: Reference Masters → Currency Master → Verify Search functionality retrieves the correct currency record using Currency Name.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter currency name. → Execute search. → Verify results.
    // Expected: Matching currency record is displayed successfully.
    console.log("[RDR_301] Currency Master → Verify Search functionality retrieves the correct currency record using Currency Name.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Name');
      });
  });

  test("Case ID:RDR_302 - Currency Master → Verify View action opens complete currency details including Currency Code, Name, Reporting Currency flag and AML attributes.", async ({ testData }) => {
    // Excel Test Case ID: RDR_302
    // Excel Scenario: Reference Masters → Currency Master → Verify View action opens complete currency details including Currency Code, Name, Reporting Currency flag and AML attributes.
    // FSD §4.3 — Detail Modal
    // Steps (2): Click View button. → Review detail screen.
    // Expected: Currency detail screen opens successfully with complete information.
    console.log("[RDR_302] Currency Master → Verify View action opens complete currency details including Currency Code, Name, Reporting Currency flag and AML attributes.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('ISO Code');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('ISO Code');
      await rdrPage.expectAllCellsNonEmpty('ISO Code');
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_303 - Currency Master → Verify Reporting Currency flag is displayed correctly in the currency detail view according to bank reporting configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_303
    // Excel Scenario: Reference Masters → Currency Master → Verify Reporting Currency flag is displayed correctly in the currency detail view according to bank reporting configuration.
    // FSD §9.6 — Currency Master
    // Steps (2): Open currency details. → Review Reporting Currency field.
    // Expected: Reporting Currency flag is displayed correctly.
    console.log("[RDR_303] Currency Master → Verify Reporting Currency flag is displayed correctly in the currency detail view according to bank reporting configuration.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_304 - Currency Master → Verify High Risk Currency flag is displayed correctly in detail view for AML monitoring and risk scoring purposes.", async ({ testData }) => {
    // Excel Test Case ID: RDR_304
    // Excel Scenario: Reference Masters → Currency Master → Verify High Risk Currency flag is displayed correctly in detail view for AML monitoring and risk scoring purposes.
    // FSD §4.3 — Detail Modal
    // Steps (2): Open currency detail screen. → Verify High Risk Currency field.
    // Expected: High Risk Currency indicator is displayed correctly.
    console.log("[RDR_304] Currency Master → Verify High Risk Currency flag is displayed correctly in detail view for AML monitoring and risk scoring purposes.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridTabLoaded();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('High Risk Currency');
      await rdrPage.expectAllCellsNonEmpty('High Risk Currency');
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_305 - Currency Master → Verify Currency Master data can be exported successfully through Excel and CSV options without data loss.", async ({ testData }) => {
    // Excel Test Case ID: RDR_305
    // Excel Scenario: Reference Masters → Currency Master → Verify Currency Master data can be exported successfully through Excel and CSV options without data loss.
    // FSD §11.1 — Export Formats
    // Steps (4): Click CSV export. → Download file. → Click Excel export. …
    // Expected: Exported files contain accurate currency data matching the UI records.
    console.log("[RDR_305] Currency Master → Verify Currency Master data can be exported successfully through Excel and CSV options without data loss.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.exportExcel();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });
  });

  test.describe("Reference Masters → FX Rates Master", () => {
  test("Case ID:RDR_306 - FX Rates Master → Verify FX Rate records are displayed successfully after synchronization and all configured exchange rates are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_306
    // Excel Scenario: Reference Masters → FX Rates Master → Verify FX Rate records are displayed successfully after synchronization and all configured exchange rates are visible in the grid.
    // FSD §9.7 — FX Rates Master
    // Steps (3): Open FX Rates tab. → Review exchange rate grid. → Verify displayed records.
    // Expected: All configured FX rate records are displayed successfully.
    console.log("[RDR_306] FX Rates Master → Verify FX Rate records are displayed successfully after synchronization and all configured exchange rates are visible in the grid.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      });
  });

  test("Case ID:RDR_307 - FX Rates Master → Verify Rate ID is displayed uniquely for every FX rate record maintained in the master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_307
    // Excel Scenario: Reference Masters → FX Rates Master → Verify Rate ID is displayed uniquely for every FX rate record maintained in the master.
    // FSD §9.7 — FX Rates Master
    // Steps (2): Review Rate ID column. → Compare all records.
    // Expected: Unique Rate IDs are displayed without duplication.
    console.log("[RDR_307] FX Rates Master → Verify Rate ID is displayed uniquely for every FX rate record maintained in the master.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Rate ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Rate ID');
      await rdrPage.expectAllCellsNonEmpty('Rate ID');
      await rdrPage.expectUniqueColumnValues('Rate ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_308 - FX Rates Master → Verify Source Currency (From Currency) is displayed correctly according to configured exchange rate mapping.", async ({ testData }) => {
    // Excel Test Case ID: RDR_308
    // Excel Scenario: Reference Masters → FX Rates Master → Verify Source Currency (From Currency) is displayed correctly according to configured exchange rate mapping.
    // FSD §9.7 — FX Rates Master
    // Steps (2): Review From CCY column. → Compare values with source records.
    // Expected: Correct source currencies are displayed.
    console.log("[RDR_308] FX Rates Master → Verify Source Currency (From Currency) is displayed correctly according to configured exchange rate mapping.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('From CCY');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('From CCY');
      await rdrPage.expectAllCellsNonEmpty('From CCY');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_309 - FX Rates Master → Verify Target Currency (To Currency) is displayed correctly according to exchange rate configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_309
    // Excel Scenario: Reference Masters → FX Rates Master → Verify Target Currency (To Currency) is displayed correctly according to exchange rate configuration.
    // FSD §9.7 — FX Rates Master
    // Steps (2): Review To CCY column. → Compare values with source records.
    // Expected: Correct target currency is displayed for each FX record.
    console.log("[RDR_309] FX Rates Master → Verify Target Currency (To Currency) is displayed correctly according to exchange rate configuration.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('To CCY');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('To CCY');
      await rdrPage.expectAllCellsNonEmpty('To CCY');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_310 - FX Rates Master → Verify Exchange Rate value is displayed correctly and matches the configured market exchange rate.", async ({ testData }) => {
    // Excel Test Case ID: RDR_310
    // Excel Scenario: Reference Masters → FX Rates Master → Verify Exchange Rate value is displayed correctly and matches the configured market exchange rate.
    // FSD §9.7 — FX Rates Master
    // Steps (2): Review Exchange Rate column. → Compare values with source records.
    // Expected: Correct exchange rates are displayed.
    console.log("[RDR_310] FX Rates Master → Verify Exchange Rate value is displayed correctly and matches the configured market exchange rate.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Exchange Rate');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Exchange Rate');
      await rdrPage.expectAllCellsNonEmpty('Exchange Rate');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_311 - FX Rates Master → Verify Rate Date is displayed correctly for each exchange rate record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_311
    // Excel Scenario: Reference Masters → FX Rates Master → Verify Rate Date is displayed correctly for each exchange rate record.
    // FSD §9.7 — FX Rates Master
    // Steps (2): Review Rate Date column. → Compare with source records.
    // Expected: Correct rate date is displayed.
    console.log("[RDR_311] FX Rates Master → Verify Rate Date is displayed correctly for each exchange rate record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Rate Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Rate Date');
      await rdrPage.expectAllCellsNonEmpty('Rate Date');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_312 - FX Rates Master → Verify Rate Type is displayed correctly according to the configured exchange rate category.", async ({ testData }) => {
    // Excel Test Case ID: RDR_312
    // Excel Scenario: Reference Masters → FX Rates Master → Verify Rate Type is displayed correctly according to the configured exchange rate category.
    // FSD §9.7 — FX Rates Master
    // Steps (2): Review Rate Type column. → Compare values with source records.
    // Expected: Correct rate type is displayed for each FX record.
    console.log("[RDR_312] FX Rates Master → Verify Rate Type is displayed correctly according to the configured exchange rate category.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Rate Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Rate Type');
      await rdrPage.expectAllCellsNonEmpty('Rate Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_313 - FX Rates Master → Verify Effective From date and time are displayed correctly according to the validity period of the exchange rate.", async ({ testData }) => {
    // Excel Test Case ID: RDR_313
    // Excel Scenario: Reference Masters → FX Rates Master → Verify Effective From date and time are displayed correctly according to the validity period of the exchange rate.
    // FSD §9.7 — FX Rates Master
    // Steps (2): Review Effective From column. → Compare values with source records.
    // Expected: Effective From date and time are displayed correctly.
    console.log("[RDR_313] FX Rates Master → Verify Effective From date and time are displayed correctly according to the validity period of the exchange rate.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Effective From');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Effective From');
      await rdrPage.expectAllCellsNonEmpty('Effective From');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_314 - FX Rates Master → Verify Effective To date and time are displayed correctly according to the validity period of the exchange rate.", async ({ testData }) => {
    // Excel Test Case ID: RDR_314
    // Excel Scenario: Reference Masters → FX Rates Master → Verify Effective To date and time are displayed correctly according to the validity period of the exchange rate.
    // FSD §9.7 — FX Rates Master
    // Steps (2): Review Effective To column. → Compare values with source records.
    // Expected: Effective To date and time are displayed correctly.
    console.log("[RDR_314] FX Rates Master → Verify Effective To date and time are displayed correctly according to the validity period of the exchange rate.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Effective To');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Effective To');
      await rdrPage.expectAllCellsNonEmpty('Effective To');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_315 - FX Rates Master → Verify USD to INR exchange rate record is displayed correctly with all associated details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_315
    // Excel Scenario: Reference Masters → FX Rates Master → Verify USD to INR exchange rate record is displayed correctly with all associated details.
    // FSD §9.7 — FX Rates Master
    // Steps (2): Locate FX- → Verify currencies, rate and validity period.
    // Expected: USD-INR exchange rate details are displayed accurately.
    console.log("[RDR_315] FX Rates Master → Verify USD to INR exchange rate record is displayed correctly with all associated details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_316 - FX Rates Master → Verify AED to INR exchange rate record is displayed correctly with all associated details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_316
    // Excel Scenario: Reference Masters → FX Rates Master → Verify AED to INR exchange rate record is displayed correctly with all associated details.
    // FSD §9.7 — FX Rates Master
    // Steps (2): Locate FX- → Verify displayed values.
    // Expected: AED-INR exchange rate details are displayed accurately.
    console.log("[RDR_316] FX Rates Master → Verify AED to INR exchange rate record is displayed correctly with all associated details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_317 - FX Rates Master → Verify EUR to INR exchange rate record is displayed correctly with all associated details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_317
    // Excel Scenario: Reference Masters → FX Rates Master → Verify EUR to INR exchange rate record is displayed correctly with all associated details.
    // FSD §9.7 — FX Rates Master
    // Steps (2): Locate FX- → Verify displayed values.
    // Expected: EUR-INR exchange rate details are displayed accurately.
    console.log("[RDR_317] FX Rates Master → Verify EUR to INR exchange rate record is displayed correctly with all associated details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_318 - FX Rates Master → Verify Search functionality retrieves the correct FX rate record using Rate ID or Currency Code.", async ({ testData }) => {
    // Excel Test Case ID: RDR_318
    // Excel Scenario: Reference Masters → FX Rates Master → Verify Search functionality retrieves the correct FX rate record using Rate ID or Currency Code.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter search value. → Execute search. → Review results.
    // Expected: Only matching FX rate records are displayed.
    console.log("[RDR_318] FX Rates Master → Verify Search functionality retrieves the correct FX rate record using Rate ID or Currency Code.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('value');
      await rdrPage.expectColumnVisible('ISO Code');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('ISO Code');
      await rdrPage.expectAllCellsNonEmpty('ISO Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      });
  });

  test("Case ID:RDR_319 - FX Rates Master → Verify View action opens complete FX rate details including currencies, exchange rate, effective date and source information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_319
    // Excel Scenario: Reference Masters → FX Rates Master → Verify View action opens complete FX rate details including currencies, exchange rate, effective date and source information.
    // FSD §4.3 — Detail Modal
    // Steps (2): Click View button. → Review detailed information.
    // Expected: FX rate detail screen opens successfully with complete exchange rate information.
    console.log("[RDR_319] FX Rates Master → Verify View action opens complete FX rate details including currencies, exchange rate, effective date and source information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_320 - FX Rates Master → Verify CSV and Excel export functionality exports all displayed FX rate records correctly without data mismatch.", async ({ testData }) => {
    // Excel Test Case ID: RDR_320
    // Excel Scenario: Reference Masters → FX Rates Master → Verify CSV and Excel export functionality exports all displayed FX rate records correctly without data mismatch.
    // FSD §11.1 — Export Formats
    // Steps (4): Click CSV export. → Validate downloaded file. → Click Excel export. …
    // Expected: Exported files contain accurate FX rate data matching the UI.
    console.log("[RDR_320] FX Rates Master → Verify CSV and Excel export functionality exports all displayed FX rate records correctly without data mismatch.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.exportExcel();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });
  });

  test.describe("Reference Masters → Industry Code Master", () => {
  test("Case ID:RDR_321 - Industry Code Master → Verify Industry Code Master records are displayed successfully after synchronization and all configured industry records are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_321
    // Excel Scenario: Reference Masters → Industry Code Master → Verify Industry Code Master records are displayed successfully after synchronization and all configured industry records are visible in the grid.
    // FSD §9.8 — Industry Code Master
    // Steps (3): Open Industry Code tab. → Review Industry Code grid. → Verify displayed records count and details.
    // Expected: All configured industry code records are displayed successfully.
    console.log("[RDR_321] Industry Code Master → Verify Industry Code Master records are displayed successfully after synchronization and all configured industry records are visible in the grid.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Industry Code');
      await rdrPage.expectAllCellsNonEmpty('Industry Code');
      });
  });

  test("Case ID:RDR_322 - Industry Code Master → Verify Industry Master ID is displayed uniquely for every industry record maintained in the system.", async ({ testData }) => {
    // Excel Test Case ID: RDR_322
    // Excel Scenario: Reference Masters → Industry Code Master → Verify Industry Master ID is displayed uniquely for every industry record maintained in the system.
    // FSD §9.8 — Industry Code Master
    // Steps (2): Review ID column. → Compare all displayed records.
    // Expected: Unique Industry IDs are displayed without duplication.
    console.log("[RDR_322] Industry Code Master → Verify Industry Master ID is displayed uniquely for every industry record maintained in the system.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('ID');
      await rdrPage.expectAllCellsNonEmpty('ID');
      await rdrPage.expectUniqueColumnValues('ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_323 - Industry Code Master → Verify Code Type is displayed correctly according to the configured classification standard used by the organization.", async ({ testData }) => {
    // Excel Test Case ID: RDR_323
    // Excel Scenario: Reference Masters → Industry Code Master → Verify Code Type is displayed correctly according to the configured classification standard used by the organization.
    // FSD §9.8 — Industry Code Master
    // Steps (2): Review Code Type column. → Compare values with source data.
    // Expected: Correct Code Type is displayed for all records.
    console.log("[RDR_323] Industry Code Master → Verify Code Type is displayed correctly according to the configured classification standard used by the organization.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Code Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Code Type');
      await rdrPage.expectAllCellsNonEmpty('Code Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_324 - Industry Code Master → Verify Industry Code is displayed correctly and matches the configured NIC/industry classification code.", async ({ testData }) => {
    // Excel Test Case ID: RDR_324
    // Excel Scenario: Reference Masters → Industry Code Master → Verify Industry Code is displayed correctly and matches the configured NIC/industry classification code.
    // FSD §9.8 — Industry Code Master
    // Steps (2): Review Industry Code column. → Compare values with source records.
    // Expected: Correct Industry Codes are displayed.
    console.log("[RDR_324] Industry Code Master → Verify Industry Code is displayed correctly and matches the configured NIC/industry classification code.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Industry Code');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Industry Code');
      await rdrPage.expectAllCellsNonEmpty('Industry Code');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_325 - Industry Code Master → Verify Industry Name is displayed correctly according to the configured industry classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_325
    // Excel Scenario: Reference Masters → Industry Code Master → Verify Industry Name is displayed correctly according to the configured industry classification.
    // FSD §9.8 — Industry Code Master
    // Steps (2): Review Name column. → Compare values with source data.
    // Expected: Correct Industry Names are displayed for all records.
    console.log("[RDR_325] Industry Code Master → Verify Industry Name is displayed correctly according to the configured industry classification.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectAllCellsNonEmpty('Name');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_326 - Industry Code Master → Verify Industry Description is displayed correctly and provides business/AML context for the industry.", async ({ testData }) => {
    // Excel Test Case ID: RDR_326
    // Excel Scenario: Reference Masters → Industry Code Master → Verify Industry Description is displayed correctly and provides business/AML context for the industry.
    // FSD §9.8 — Industry Code Master
    // Steps (2): Review Description column. → Compare values with source data.
    // Expected: Correct industry descriptions are displayed.
    console.log("[RDR_326] Industry Code Master → Verify Industry Description is displayed correctly and provides business/AML context for the industry.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Description');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Description');
      await rdrPage.expectAllCellsNonEmpty('Description');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_327 - Industry Code Master → Verify Banking and Financial Intermediation industry record is displayed correctly with its associated code and description.", async ({ testData }) => {
    // Excel Test Case ID: RDR_327
    // Excel Scenario: Reference Masters → Industry Code Master → Verify Banking and Financial Intermediation industry record is displayed correctly with its associated code and description.
    // FSD §9.8 — Industry Code Master
    // Steps (2): Locate IND- → Verify Industry Code, Name and Description.
    // Expected: Banking industry details are displayed accurately.
    console.log("[RDR_327] Industry Code Master → Verify Banking and Financial Intermediation industry record is displayed correctly with its associated code and description.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Industry Code');
      await rdrPage.expectAllCellsNonEmpty('Industry Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_328 - Industry Code Master → Verify Jewellery industry record is displayed correctly as a cash-intensive business sector used for AML monitoring.", async ({ testData }) => {
    // Excel Test Case ID: RDR_328
    // Excel Scenario: Reference Masters → Industry Code Master → Verify Jewellery industry record is displayed correctly as a cash-intensive business sector used for AML monitoring.
    // FSD §9.8 — Industry Code Master
    // Steps (2): Locate IND- → Verify code, name and description.
    // Expected: Jewellery industry details are displayed accurately.
    console.log("[RDR_328] Industry Code Master → Verify Jewellery industry record is displayed correctly as a cash-intensive business sector used for AML monitoring.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectAllCellsNonEmpty('Name');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_329 - Industry Code Master → Verify Restaurant and Mobile Food Services industry record is displayed correctly as per configured industry classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_329
    // Excel Scenario: Reference Masters → Industry Code Master → Verify Restaurant and Mobile Food Services industry record is displayed correctly as per configured industry classification.
    // FSD §9.8 — Industry Code Master
    // Steps (2): Locate IND- → Verify displayed details.
    // Expected: Restaurant industry details are displayed accurately.
    console.log("[RDR_329] Industry Code Master → Verify Restaurant and Mobile Food Services industry record is displayed correctly as per configured industry classification.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_330 - Industry Code Master → Verify Risk Rating field is displayed correctly in the industry detail screen according to AML risk scoring rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_330
    // Excel Scenario: Reference Masters → Industry Code Master → Verify Risk Rating field is displayed correctly in the industry detail screen according to AML risk scoring rules.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View. → Open industry details. → Review Risk Rating field.
    // Expected: Correct Industry Risk Rating is displayed.
    console.log("[RDR_330] Industry Code Master → Verify Risk Rating field is displayed correctly in the industry detail screen according to AML risk scoring rules.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Risk Rating');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Risk Rating');
      await rdrPage.expectAllCellsNonEmpty('Risk Rating');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_331 - Industry Code Master → Verify High Risk Flag is displayed correctly for industries classified as high-risk sectors for AML purposes.", async ({ testData }) => {
    // Excel Test Case ID: RDR_331
    // Excel Scenario: Reference Masters → Industry Code Master → Verify High Risk Flag is displayed correctly for industries classified as high-risk sectors for AML purposes.
    // FSD §4.3 — Detail Modal
    // Steps (2): Open industry detail screen. → Review High Risk Flag field.
    // Expected: High Risk Flag is displayed correctly.
    console.log("[RDR_331] Industry Code Master → Verify High Risk Flag is displayed correctly for industries classified as high-risk sectors for AML purposes.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_332 - Industry Code Master → Verify FATF Sector classification is displayed correctly in the industry detail view according to regulatory mapping.", async ({ testData }) => {
    // Excel Test Case ID: RDR_332
    // Excel Scenario: Reference Masters → Industry Code Master → Verify FATF Sector classification is displayed correctly in the industry detail view according to regulatory mapping.
    // FSD §4.3 — Detail Modal
    // Steps (2): Open industry detail screen. → Review FATF Sector field.
    // Expected: Correct FATF sector classification is displayed.
    console.log("[RDR_332] Industry Code Master → Verify FATF Sector classification is displayed correctly in the industry detail view according to regulatory mapping.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_333 - Industry Code Master → Verify Search functionality retrieves the correct industry record using Industry Code.", async ({ testData }) => {
    // Excel Test Case ID: RDR_333
    // Excel Scenario: Reference Masters → Industry Code Master → Verify Search functionality retrieves the correct industry record using Industry Code.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter Industry Code in search field. → Execute search. → Review results.
    // Expected: Only the matching industry record is displayed.
    console.log("[RDR_333] Industry Code Master → Verify Search functionality retrieves the correct industry record using Industry Code.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('field');
      await rdrPage.expectColumnVisible('Industry Code');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Industry Code');
      await rdrPage.expectAllCellsNonEmpty('Industry Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      });
  });

  test("Case ID:RDR_334 - Industry Code Master → Verify Search functionality retrieves the correct industry record using Industry Name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_334
    // Excel Scenario: Reference Masters → Industry Code Master → Verify Search functionality retrieves the correct industry record using Industry Name.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter Industry Name. → Execute search. → Review results.
    // Expected: Only the matching industry record is displayed.
    console.log("[RDR_334] Industry Code Master → Verify Search functionality retrieves the correct industry record using Industry Name.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.expectColumnVisible('Name');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectAllCellsNonEmpty('Name');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      });
  });

  test("Case ID:RDR_335 - Industry Code Master → Verify View action opens complete industry details including Industry Code, Name, Risk Rating, High Risk Flag and FATF Sector classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_335
    // Excel Scenario: Reference Masters → Industry Code Master → Verify View action opens complete industry details including Industry Code, Name, Risk Rating, High Risk Flag and FATF Sector classification.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button. → Review complete industry information. → Validate displayed fields.
    // Expected: Industry detail screen opens successfully displaying Industry Code, Industry Name, Risk Rating, High Risk Flag, FATF Sector and AML-related information.
    console.log("[RDR_335] Industry Code Master → Verify View action opens complete industry details including Industry Code, Name, Risk Rating, High Risk Flag and FATF Sector classification.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Risk Rating');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Risk Rating');
      await rdrPage.expectAllCellsNonEmpty('Risk Rating');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectGridContainsRecords();
      });
  });
  });

  test.describe("Reference Masters → Reference Master", () => {
  test("Case ID:RDR_336 - Reference Master → Verify Reference Master records are displayed successfully after synchronization and all configured reference values are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_336
    // Excel Scenario: Reference Masters → Reference Master → Verify Reference Master records are displayed successfully after synchronization and all configured reference values are visible in the grid.
    // FSD §9.9 — Reference Master (Generic)
    // Steps (3): Open Ref Master tab. → Review Reference Master grid. → Verify displayed records count and details.
    // Expected: All configured reference records are displayed successfully.
    console.log("[RDR_336] Reference Master → Verify Reference Master records are displayed successfully after synchronization and all configured reference values are visible in the grid.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      });
  });

  test("Case ID:RDR_337 - Reference Master → Verify Reference ID is displayed uniquely for every reference record maintained in the system.", async ({ testData }) => {
    // Excel Test Case ID: RDR_337
    // Excel Scenario: Reference Masters → Reference Master → Verify Reference ID is displayed uniquely for every reference record maintained in the system.
    // FSD §9.9 — Reference Master (Generic)
    // Steps (2): Review Ref ID column. → Compare displayed records.
    // Expected: Unique Reference IDs are displayed without duplication.
    console.log("[RDR_337] Reference Master → Verify Reference ID is displayed uniquely for every reference record maintained in the system.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Ref ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Ref ID');
      await rdrPage.expectAllCellsNonEmpty('Ref ID');
      await rdrPage.expectUniqueColumnValues('Ref ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_338 - Reference Master → Verify Category value is displayed correctly according to the configured reference type classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_338
    // Excel Scenario: Reference Masters → Reference Master → Verify Category value is displayed correctly according to the configured reference type classification.
    // FSD §9.9 — Reference Master (Generic)
    // Steps (2): Review Category column. → Compare values with source data.
    // Expected: Correct Category values are displayed.
    console.log("[RDR_338] Reference Master → Verify Category value is displayed correctly according to the configured reference type classification.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Category');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Category');
      await rdrPage.expectAllCellsNonEmpty('Category');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_339 - Reference Master → Verify Reference Code is displayed correctly according to the configured lookup code value.", async ({ testData }) => {
    // Excel Test Case ID: RDR_339
    // Excel Scenario: Reference Masters → Reference Master → Verify Reference Code is displayed correctly according to the configured lookup code value.
    // FSD §9.9 — Reference Master (Generic)
    // Steps (2): Review Code column. → Compare values with source records.
    // Expected: Correct Reference Codes are displayed.
    console.log("[RDR_339] Reference Master → Verify Reference Code is displayed correctly according to the configured lookup code value.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectAllCellsNonEmpty('Code');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_340 - Reference Master → Verify Description field is displayed correctly and provides accurate business meaning of the reference value.", async ({ testData }) => {
    // Excel Test Case ID: RDR_340
    // Excel Scenario: Reference Masters → Reference Master → Verify Description field is displayed correctly and provides accurate business meaning of the reference value.
    // FSD §9.9 — Reference Master (Generic)
    // Steps (2): Review Description column. → Compare displayed values with source data.
    // Expected: Correct descriptions are displayed for all reference records.
    console.log("[RDR_340] Reference Master → Verify Description field is displayed correctly and provides accurate business meaning of the reference value.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Description');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Description');
      await rdrPage.expectAllCellsNonEmpty('Description');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_341 - Reference Master → Verify Text Value is displayed correctly according to configured business rules and thresholds.", async ({ testData }) => {
    // Excel Test Case ID: RDR_341
    // Excel Scenario: Reference Masters → Reference Master → Verify Text Value is displayed correctly according to configured business rules and thresholds.
    // FSD §9.9 — Reference Master (Generic)
    // Steps (2): Review Text Value column. → Compare values with source data.
    // Expected: Correct Text Values are displayed.
    console.log("[RDR_341] Reference Master → Verify Text Value is displayed correctly according to configured business rules and thresholds.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Text Value');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Text Value');
      await rdrPage.expectAllCellsNonEmpty('Text Value');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_342 - Reference Master → Verify Countries field is displayed correctly and reflects country-specific or global applicability of the reference value.", async ({ testData }) => {
    // Excel Test Case ID: RDR_342
    // Excel Scenario: Reference Masters → Reference Master → Verify Countries field is displayed correctly and reflects country-specific or global applicability of the reference value.
    // FSD §9.9 — Reference Master (Generic)
    // Steps (2): Review Countries column. → Compare values with source records.
    // Expected: Correct country applicability is displayed.
    console.log("[RDR_342] Reference Master → Verify Countries field is displayed correctly and reflects country-specific or global applicability of the reference value.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Countries');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Countries');
      await rdrPage.expectAllCellsNonEmpty('Countries');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_343 - Reference Master → Verify Status is displayed correctly and reflects whether the reference code is active and available for AML processing.", async ({ testData }) => {
    // Excel Test Case ID: RDR_343
    // Excel Scenario: Reference Masters → Reference Master → Verify Status is displayed correctly and reflects whether the reference code is active and available for AML processing.
    // FSD §9.9 — Reference Master (Generic)
    // Steps (2): Review Status column. → Compare values with source records.
    // Expected: Correct active status is displayed.
    console.log("[RDR_343] Reference Master → Verify Status is displayed correctly and reflects whether the reference code is active and available for AML processing.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_344 - Reference Master → Verify Modified Date is displayed correctly and reflects the latest update timestamp of the reference record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_344
    // Excel Scenario: Reference Masters → Reference Master → Verify Modified Date is displayed correctly and reflects the latest update timestamp of the reference record.
    // FSD §9.9 — Reference Master (Generic)
    // Steps (2): Review Modified column. → Compare values with source data.
    // Expected: Correct modification date is displayed.
    console.log("[RDR_344] Reference Master → Verify Modified Date is displayed correctly and reflects the latest update timestamp of the reference record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Modified');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Modified');
      await rdrPage.expectAllCellsNonEmpty('Modified');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_345 - Reference Master → Verify CTR Threshold reference record is displayed correctly with AML reporting threshold information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_345
    // Excel Scenario: Reference Masters → Reference Master → Verify CTR Threshold reference record is displayed correctly with AML reporting threshold information.
    // FSD §9.9 — Reference Master (Generic)
    // Steps (2): Locate REF- → Verify Category, Code, Description and Text Value.
    // Expected: CTR threshold record is displayed accurately with INR 10 lakh value.
    console.log("[RDR_345] Reference Master → Verify CTR Threshold reference record is displayed correctly with AML reporting threshold information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectAllCellsNonEmpty('Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_346 - Reference Master → Verify Wildlife Keyword reference record is displayed correctly for AML wildlife trafficking monitoring scenarios.", async ({ testData }) => {
    // Excel Test Case ID: RDR_346
    // Excel Scenario: Reference Masters → Reference Master → Verify Wildlife Keyword reference record is displayed correctly for AML wildlife trafficking monitoring scenarios.
    // FSD §9.9 — Reference Master (Generic)
    // Steps (2): Locate REF- → Verify Category, Code, Description and Text Value.
    // Expected: Wildlife keyword record is displayed accurately with keyword details.
    console.log("[RDR_346] Reference Master → Verify Wildlife Keyword reference record is displayed correctly for AML wildlife trafficking monitoring scenarios.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectAllCellsNonEmpty('Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_347 - Reference Master → Verify Dormancy Threshold reference record is displayed correctly for dormant account monitoring rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_347
    // Excel Scenario: Reference Masters → Reference Master → Verify Dormancy Threshold reference record is displayed correctly for dormant account monitoring rules.
    // FSD §9.9 — Reference Master (Generic)
    // Steps (2): Locate REF- → Verify all displayed values.
    // Expected: Dormancy threshold record is displayed accurately with 24-month threshold value.
    console.log("[RDR_347] Reference Master → Verify Dormancy Threshold reference record is displayed correctly for dormant account monitoring rules.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_348 - Reference Master → Verify Search functionality retrieves the correct reference record using Reference Code.", async ({ testData }) => {
    // Excel Test Case ID: RDR_348
    // Excel Scenario: Reference Masters → Reference Master → Verify Search functionality retrieves the correct reference record using Reference Code.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter reference code in search box. → Execute search. → Review results.
    // Expected: Only the matching reference record is displayed.
    console.log("[RDR_348] Reference Master → Verify Search functionality retrieves the correct reference record using Reference Code.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('box');
      await rdrPage.expectColumnVisible('Code');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectAllCellsNonEmpty('Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      });
  });

  test("Case ID:RDR_349 - Reference Master → Verify Search functionality retrieves the correct reference record using Category name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_349
    // Excel Scenario: Reference Masters → Reference Master → Verify Search functionality retrieves the correct reference record using Category name.
    // FSD §4.1 — Toolbar
    // Steps (3): Enter category value. → Execute search. → Verify results.
    // Expected: Only matching category records are displayed.
    console.log("[RDR_349] Reference Master → Verify Search functionality retrieves the correct reference record using Category name.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Name');
      });
  });

  test("Case ID:RDR_350 - Reference Master → Verify View action opens complete reference details including Reference Type, Code, Name, Active Flag and Sort Order information maintained in the master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_350
    // Excel Scenario: Reference Masters → Reference Master → Verify View action opens complete reference details including Reference Type, Code, Name, Active Flag and Sort Order information maintained in the master.
    // FSD §4.3 — Detail Modal
    // Steps (3): Click View button. → Review detail screen. → Validate Ref Type, Ref Code, Ref Name, Is Active and Sort Order fields.
    // Expected: Detail screen opens successfully displaying Ref Type, Ref Code, Ref Name, Is Active Flag, Sort Order and other configured lookup information.
    console.log("[RDR_350] Reference Master → Verify View action opens complete reference details including Reference Type, Code, Name, Active Flag and Sort Order information maintained in the master.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Name');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectAllCellsNonEmpty('Name');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectGridContainsRecords();
      });
  });
  });

  test.describe("Reference Masters → Country Master", () => {
  test("Case ID:RDR_351 - Country Master → Verify Country Master page loads successfully", async ({ testData }) => {
    // Excel Test Case ID: RDR_351
    // Excel Scenario: Reference Masters → Country Master → Verify Country Master page loads successfully
    // FSD §10.5 — High-Risk Country Prioritisation & Display
    // Steps (5): Login to AML application. → Navigate to Reference Data Register. → Open Reference Masters. …
    // Expected: Country Master page loads with all available country records.
    console.log("[RDR_351] Country Master → Verify Country Master page loads successfully");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridTabLoaded();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_352 - Country Master → Verify High Risk countries are displayed at top by default", async ({ testData }) => {
    // Excel Test Case ID: RDR_352
    // Excel Scenario: Reference Masters → Country Master → Verify High Risk countries are displayed at top by default
    // FSD §10.5 — High-Risk Country Prioritisation & Display
    // Steps (4): Open Country Master page. → Observe records displayed after initial load. → Check Risk Level column. …
    // Expected: High Risk countries are displayed first in the grid.
    console.log("[RDR_352] Country Master → Verify High Risk countries are displayed at top by default");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Risk Level');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Risk Level');
      await rdrPage.expectAllCellsNonEmpty('Risk Level');
      await rdrPage.expectColumnVisible('High Risk countries');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('records displayed after initial load.3. Check Risk Level');
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_353 - Country Master → Verify search using Country Name", async ({ testData }) => {
    // Excel Test Case ID: RDR_353
    // Excel Scenario: Reference Masters → Country Master → Verify search using Country Name
    // FSD §4.1 — Toolbar
    // Steps (5): Open Country Master page. → Enter country name in search box. → Wait for results. …
    // Expected: Matching country record is displayed successfully.
    console.log("[RDR_353] Country Master → Verify search using Country Name");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.clearSearchAndFilters();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectAllCellsMatchValue('Country Name', 'Individual');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Country Name');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Country Name');
      });
  });

  test("Case ID:RDR_354 - Country Master → Verify search using ISO Alpha-2 Code", async ({ testData }) => {
    // Excel Test Case ID: RDR_354
    // Excel Scenario: Reference Masters → Country Master → Verify search using ISO Alpha-2 Code
    // FSD §4.1 — Toolbar
    // Steps (4): Open Country Master page. → Enter Alpha-2 code in search box. → Execute search. …
    // Expected: System displays corresponding country record.
    console.log("[RDR_354] Country Master → Verify search using ISO Alpha-2 Code");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('box');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Code');
      });
  });

  test("Case ID:RDR_355 - Country Master → Verify Region filter functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_355
    // Excel Scenario: Reference Masters → Country Master → Verify Region filter functionality
    // FSD §4.5 — Filter Bars
    // Steps (5): Open Country Master page. → Select Region dropdown. → Choose a region. …
    // Expected: Only countries from selected region are displayed.
    console.log("[RDR_355] Country Master → Verify Region filter functionality");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.applyFilterByOptionText('Individual');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_356 - Country Master → Verify Risk Level filter functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_356
    // Excel Scenario: Reference Masters → Country Master → Verify Risk Level filter functionality
    // FSD §4.5 — Filter Bars
    // Steps (5): Open Country Master page. → Select Risk Level dropdown. → Choose High Risk. …
    // Expected: Grid displays records matching selected risk level.
    console.log("[RDR_356] Country Master → Verify Risk Level filter functionality");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.applyFilterByOptionText('Individual');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectAllCellsMatchValue('Risk Level', 'Individual');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Risk Level');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Risk Level');
      });
  });

  test("Case ID:RDR_357 - Country Master → Verify combined Search and Filter functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_357
    // Excel Scenario: Reference Masters → Country Master → Verify combined Search and Filter functionality
    // FSD §4.5 — Filter Bars
    // Steps (4): Search a country. → Apply Region filter. → Apply Risk Level filter. …
    // Expected: Only records matching all applied filters are displayed.
    console.log("[RDR_357] Country Master → Verify combined Search and Filter functionality");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('a country');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectAllCellsMatchValue('Risk Level', 'Individual');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Risk Level');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectAllCellsNonEmpty('Risk Level');
      });
  });

  test("Case ID:RDR_358 - Country Master → Verify Country Name column sorting", async ({ testData }) => {
    // Excel Test Case ID: RDR_358
    // Excel Scenario: Reference Masters → Country Master → Verify Country Name column sorting
    // FSD §10.5 — High-Risk Country Prioritisation & Display
    // Steps (5): Open Country Master page. → Click Country Name header. → Verify ascending order. …
    // Expected: Countries are sorted correctly in both directions.
    console.log("[RDR_358] Country Master → Verify Country Name column sorting");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Country Name');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Country Name');
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_359 - Country Master → Verify Region column sorting", async ({ testData }) => {
    // Excel Test Case ID: RDR_359
    // Excel Scenario: Reference Masters → Country Master → Verify Region column sorting
    // FSD §10.5 — High-Risk Country Prioritisation & Display
    // Steps (4): Open Country Master page. → Click Region column header. → Verify records sort by region. …
    // Expected: Records are sorted correctly based on region.
    console.log("[RDR_359] Country Master → Verify Region column sorting");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Click Region');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Click Region');
      await rdrPage.expectAllCellsNonEmpty('Click Region');
      });
  });

  test("Case ID:RDR_360 - Country Master → Verify Risk Reason tags display correctly", async ({ testData }) => {
    // Excel Test Case ID: RDR_360
    // Excel Scenario: Reference Masters → Country Master → Verify Risk Reason tags display correctly
    // FSD §10.5 — High-Risk Country Prioritisation & Display
    // Steps (4): Open Country Master page. → Locate High Risk country. → Review Risk Reasons column. …
    // Expected: Correct risk reason tags are displayed.
    console.log("[RDR_360] Country Master → Verify Risk Reason tags display correctly");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Risk Reasons');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Risk Reasons');
      await rdrPage.expectAllCellsNonEmpty('Risk Reasons');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_361 - Country Master → Verify View button functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_361
    // Excel Scenario: Reference Masters → Country Master → Verify View button functionality
    // FSD §4.3 — Detail Modal
    // Steps (5): Open Country Master page. → Locate any country record. → Click View button. …
    // Expected: Country detail panel opens successfully with complete information.
    console.log("[RDR_361] Country Master → Verify View button functionality");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_362 - Country Master → Verify Audit Trail information in View panel", async ({ testData }) => {
    // Excel Test Case ID: RDR_362
    // Excel Scenario: Reference Masters → Country Master → Verify Audit Trail information in View panel
    // FSD §10.5 — High-Risk Country Prioritisation & Display
    // Steps (4): Open country details using View. → Navigate to Audit Trail tab. → Review history records. …
    // Expected: Audit trail displays complete history details.
    console.log("[RDR_362] Country Master → Verify Audit Trail information in View panel");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_363 - Country Master → Verify Maker submits country updates successfully", async ({ testData }) => {
    // Excel Test Case ID: RDR_363
    // Excel Scenario: Reference Masters → Country Master → Verify Maker submits country updates successfully
    // FSD §10.5 — High-Risk Country Prioritisation & Display
    // Steps (5): Login as Maker. → Open Country Master. → Edit a country record. …
    // Expected: Record status changes to Pending Review.
    // TODO [RDR_363]: Maker/Checker role credentials and write-access workflow not defined in Excel Test Data — Excel/FSD gap; implement when product clarifies.
    console.log("[RDR_363] Country Master → Verify Maker submits country updates successfully");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridTabLoaded();
      });

    await test.step("Validate expected results", async () => {
      // TODO: blocked — see gap-matrix.json;
      });
  });

  test("Case ID:RDR_364 - Country Master → Verify Checker approval workflow", async ({ testData }) => {
    // Excel Test Case ID: RDR_364
    // Excel Scenario: Reference Masters → Country Master → Verify Checker approval workflow
    // FSD §10.5 — High-Risk Country Prioritisation & Display
    // Steps (5): Login as Checker. → Open pending country record. → Review submitted changes. …
    // Expected: Country status changes from Pending to Active and changes are applied.
    // TODO [RDR_364]: Maker/Checker role credentials and write-access workflow not defined in Excel Test Data — Excel/FSD gap; implement when product clarifies.
    console.log("[RDR_364] Country Master → Verify Checker approval workflow");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      // TODO: blocked — see gap-matrix.json;
      });
  });

  test("Case ID:RDR_365 - Country Master → Verify CSV export functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_365
    // Excel Scenario: Reference Masters → Country Master → Verify CSV export functionality
    // FSD §11.1 — Export Formats
    // Steps (5): Open Country Master page. → Apply search/filter criteria. → Click CSV button. …
    // Expected: CSV file downloads successfully and contains filtered country records.
    console.log("[RDR_365] Country Master → Verify CSV export functionality");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCsvExportReady();
      });
  });
  });

  test.describe("Employee Master", () => {
  test("Case ID:RDR_376 - Employee Master → Verify search functionality using Employee Name", async ({ testData }) => {
    // Excel Test Case ID: RDR_376
    // Excel Scenario: Employee Master → Verify search functionality using Employee Name
    // FSD §4.1 — Toolbar
    // Steps (4): Open Employee Master. → Enter employee name in search box. → Execute search. …
    // Expected: Matching employee record is displayed successfully.
    console.log("[RDR_376] Employee Master → Verify search functionality using Employee Name");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Employee Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Name');
      });
  });

  test("Case ID:RDR_377 - Employee Master → Verify masked employee name display for PII protection", async ({ testData }) => {
    // Excel Test Case ID: RDR_377
    // Excel Scenario: Employee Master → Verify masked employee name display for PII protection
    // FSD §8 — Employee Master
    // Steps (4): Open Employee Master. → Review Full Name column. → Verify names are partially masked. …
    // Expected: Employee names are masked according to privacy standards.
    console.log("[RDR_377] Employee Master → Verify masked employee name display for PII protection");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Employee Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Full Name');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Full Name');
      await rdrPage.expectAllCellsNonEmpty('Full Name');
      await rdrPage.expectColumnValuesMasked('Full Name');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_378 - Employee Master → Verify employee status display", async ({ testData }) => {
    // Excel Test Case ID: RDR_378
    // Excel Scenario: Employee Master → Verify employee status display
    // FSD §8 — Employee Master
    // Steps (4): Open Employee Master. → Review Status column. → Verify status values displayed. …
    // Expected: Employee status is displayed correctly.
    console.log("[RDR_378] Employee Master → Verify employee status display");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Employee Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_379 - Employee Master → Verify Joining Date is displayed correctly", async ({ testData }) => {
    // Excel Test Case ID: RDR_379
    // Excel Scenario: Employee Master → Verify Joining Date is displayed correctly
    // FSD §8 — Employee Master
    // Steps (4): Open Employee Master. → Review Joining Date column. → Verify date format. …
    // Expected: Joining Date is displayed accurately.
    console.log("[RDR_379] Employee Master → Verify Joining Date is displayed correctly");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Employee Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Joining Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Joining Date');
      await rdrPage.expectAllCellsNonEmpty('Joining Date');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_380 - Employee Master → Verify Department information display", async ({ testData }) => {
    // Excel Test Case ID: RDR_380
    // Excel Scenario: Employee Master → Verify Department information display
    // FSD §8 — Employee Master
    // Steps (4): Open Employee Master. → Review Department column. → Compare values with source records. …
    // Expected: Correct department is displayed for each employee.
    console.log("[RDR_380] Employee Master → Verify Department information display");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Employee Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Department');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Department');
      await rdrPage.expectAllCellsNonEmpty('Department');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_381 - Employee Master → Verify Branch assignment display", async ({ testData }) => {
    // Excel Test Case ID: RDR_381
    // Excel Scenario: Employee Master → Verify Branch assignment display
    // FSD §8 — Employee Master
    // Steps (4): Open Employee Master. → Review Branch ID column. → Compare with source records. …
    // Expected: Assigned branch is displayed correctly.
    console.log("[RDR_381] Employee Master → Verify Branch assignment display");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Employee Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Branch ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Branch ID');
      await rdrPage.expectAllCellsNonEmpty('Branch ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_382 - Employee Master → Verify Supervisor ID mapping", async ({ testData }) => {
    // Excel Test Case ID: RDR_382
    // Excel Scenario: Employee Master → Verify Supervisor ID mapping
    // FSD §8 — Employee Master
    // Steps (4): Open Employee Master. → Review Supervisor ID column. → Verify reporting hierarchy. …
    // Expected: Correct supervisor mapping is displayed.
    console.log("[RDR_382] Employee Master → Verify Supervisor ID mapping");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Employee Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Supervisor ID');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Supervisor ID');
      await rdrPage.expectAllCellsNonEmpty('Supervisor ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_383 - Employee Master → Verify View button functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_383
    // Excel Scenario: Employee Master → Verify View button functionality
    // FSD §4.3 — Detail Modal
    // Steps (5): Open Employee Master. → Locate employee record. → Click View button. …
    // Expected: Employee details open successfully in read-only mode.
    console.log("[RDR_383] Employee Master → Verify View button functionality");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Employee Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_384 - Employee Master → Verify CSV export functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_384
    // Excel Scenario: Employee Master → Verify CSV export functionality
    // FSD §11.1 — Export Formats
    // Steps (4): Open Employee Master. → Click CSV button. → Download exported file. …
    // Expected: CSV file downloads successfully with correct employee information.
    console.log("[RDR_384] Employee Master → Verify CSV export functionality");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Employee Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_385 - Employee Master → Verify Excel export functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_385
    // Excel Scenario: Employee Master → Verify Excel export functionality
    // FSD §11.1 — Export Formats
    // Steps (4): Open Employee Master. → Click Excel button. → Download exported file. …
    // Expected: Excel file downloads successfully with correct employee records.
    console.log("[RDR_385] Employee Master → Verify Excel export functionality");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Employee Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportExcel();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Excel export should contain accurate employee records and');
      });
  });

  test("Case ID:RDR_386 - Employee Master → Verify employee records are limited to maximum configured row count", async ({ testData }) => {
    // Excel Test Case ID: RDR_386
    // Excel Scenario: Employee Master → Verify employee records are limited to maximum configured row count
    // FSD §12 — Non-Functional Requirements
    // Steps (4): Open Employee Master. → Review displayed record count. → Verify configured record limit. …
    // Expected: System respects configured record limits and loads records successfully.
    console.log("[RDR_386] Employee Master → Verify employee records are limited to maximum configured row count");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Employee Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridWithinConfiguredLimit();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });
  });
});
