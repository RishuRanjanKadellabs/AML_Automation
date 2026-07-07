// spec: specs/rdr/plan.md
// source: pipeline/test-data/Reference Data Registry.xlsx — 383 cases (RDR_001–RDR_383)
// fsd: pipeline/test-data/Reference Data Registry_FSD_v1.0.docx
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import ReferenceDataRegistryPage from "../../../pages/KYCModule/ReferenceDataRegistryPages/ReferenceDataRegistryPage";
import pilotData from "../../../../../fixtures/rdr-pilot-data.json";

test.describe("Reference Data Registry Module", () => {
  let rdrPage: ReferenceDataRegistryPage;

  test.beforeEach(async ({ sharedPage }) => {
    rdrPage = new ReferenceDataRegistryPage(sharedPage);
    await rdrPage.closeDetailOverlayIfOpen();
  });

  test.describe("Customer & Account Data → Customer Master", () => {
  test("Case ID:RDR_001 - Customer Master → Verify Customer ID is displayed for every customer record loaded from source systems and remains unique across all records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_001
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Customer ID is displayed for every customer record loaded from source systems and remains unique across all records.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare multiple records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer ID is displayed for every customer record loaded from source systems and remains unique across all records. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_001] Customer Master → Verify Customer ID is displayed for every customer record loaded from source systems and remains unique across all records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectUniqueColumnValues('Customer ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      await expect.poll(async () => rdrPage.gridRows.count()).toBeGreaterThan(0);
      });
  });

  test("Case ID:RDR_002 - Customer Master → Verify Customer ID hyperlink functionality and navigation to customer profile details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_002
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Customer ID hyperlink functionality and navigation to customer profile details.
    // FSD §4.3 — Detail Modal
    // Steps (14): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click Customer ID hyperlink. - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer ID hyperlink functionality and navigation to customer profile details. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_002] Customer Master → Verify Customer ID hyperlink functionality and navigation to customer profile details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.clickFirstRowIdLink();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_003 - Customer Master → Verify Customer Type values are displayed correctly as received from source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_003
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Customer Type values are displayed correctly as received from source systems.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values against source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer Type values are displayed correctly as received from source systems. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
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
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_004 - Customer Master → Verify Customer Type filter allows users to filter customer records based on selected type.", async ({ testData }) => {
    // Excel Test Case ID: RDR_004
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Customer Type filter allows users to filter customer records based on selected type.
    // FSD §4.5 — Filter Bars
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Select Customer Type filter. - Apply filter. - Apply branch or type filter and verify only matching records remain in grid. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Apply branch or type filter and verify only matching records remain in grid. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer Type filter allows users to filter customer records based on selected type. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_004] Customer Master → Verify Customer Type filter allows users to filter customer records based on selected type.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.applyFilterByOptionText('Individual');
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.clearSearchAndFilters();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectAllCellsMatchValue('Customer ID', 'Individual');
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      });
  });

  test("Case ID:RDR_005 - Customer Master → Verify Full Legal Name is displayed correctly for customer records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_005
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Full Legal Name is displayed correctly for customer records.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source system. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Full Legal Name is displayed correctly for customer records. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
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
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_006 - Customer Master → Verify masking of Full Legal Name according to AML privacy and PII requirements.", async ({ testData }) => {
    // Excel Test Case ID: RDR_006
    // Excel Scenario: Customer & Account Data → Customer Master → Verify masking of Full Legal Name according to AML privacy and PII requirements.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify masking rules. - Verify PII fields are masked for restricted role and readable for authorized role only. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify PII fields are masked for restricted role and readable for authorized role only. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Masking of Full Legal Name according to AML privacy and PII requirements. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
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
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Search active customer. - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Active customer status is displayed correctly in Customer Status column. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_007] Customer Master → Verify Active customer status is displayed correctly in Customer Status column.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search(pilotData.customerMaster.ids[0]);
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectSearchYieldsNoResults();
      await rdrPage.expectAllCellsMatchValue('Status', 'Active');
      });
  });

  test("Case ID:RDR_008 - Customer Master → Verify Inactive customer status is displayed correctly in Customer Status column.", async ({ testData }) => {
    // Excel Test Case ID: RDR_008
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Inactive customer status is displayed correctly in Customer Status column.
    // FSD §4.1 — Toolbar
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Search inactive customer. - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Validate displayed value. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Inactive customer status is displayed correctly in Customer Status column. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_008] Customer Master → Verify Inactive customer status is displayed correctly in Customer Status column.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search(pilotData.customerMaster.inactiveCustomerId);
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsNoResults();
      await rdrPage.expectInactiveStatusInGrid();
      });
  });

  test("Case ID:RDR_009 - Customer Master → Verify Risk Rating values are displayed correctly for all customer records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_009
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Risk Rating values are displayed correctly for all customer records.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Review Risk Rating column. - Compare values with risk profile data. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with risk profile data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Risk Rating values are displayed correctly for all customer records. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Customer Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - KYC Status is displayed correctly and reflects latest customer KYC review status. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
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
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_011 - Customer Master → Verify PEP Flag is displayed correctly for Politically Exposed Persons.", async ({ testData }) => {
    // Excel Test Case ID: RDR_011
    // Excel Scenario: Customer & Account Data → Customer Master → Verify PEP Flag is displayed correctly for Politically Exposed Persons.
    // FSD §4.1 — Toolbar
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Search customer record. - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown. Business Validation: - Review PEP Flag column. - Verify PEP indicators are shown where applicable and align with source status. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Search customer record. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - PEP Flag is displayed correctly for Politically Exposed Persons. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_011] Customer Master → Verify PEP Flag is displayed correctly for Politically Exposed Persons.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchUsingPilotCustomerId();
      await rdrPage.expectColumnVisible('PEP Flag');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('PEP Flag');
      await rdrPage.expectAllCellsNonEmpty('PEP Flag');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectSearchYieldsNoResults();
      });
  });

  test("Case ID:RDR_012 - Customer Master → Verify Sanctions Flag is displayed correctly for sanctions/watchlist matched customers.", async ({ testData }) => {
    // Excel Test Case ID: RDR_012
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Sanctions Flag is displayed correctly for sanctions/watchlist matched customers.
    // FSD §4.1 — Toolbar
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Search customer record. - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown. Business Validation: - Verify Sanctions Flag column. - Verify sanctions flags are displayed accurately for matched records. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Search customer record. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Sanctions Flag is displayed correctly for sanctions/watchlist matched customers. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_012] Customer Master → Verify Sanctions Flag is displayed correctly for sanctions/watchlist matched customers.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchUsingPilotCustomerId();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Sanctions Flag');
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Sanctions Flag');
      await rdrPage.expectSearchYieldsNoResults();
      });
  });

  test("Case ID:RDR_013 - Customer Master → Verify Date Onboarded is displayed correctly in configured date format.", async ({ testData }) => {
    // Excel Test Case ID: RDR_013
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Date Onboarded is displayed correctly in configured date format.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source record. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Date Onboarded is displayed correctly in configured date format. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
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
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_014 - Customer Master → Verify Last Review Date is displayed correctly and reflects latest customer review activity.", async ({ testData }) => {
    // Excel Test Case ID: RDR_014
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Last Review Date is displayed correctly and reflects latest customer review activity.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source system. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Last Review Date is displayed correctly and reflects latest customer review activity. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_014] Customer Master → Verify Last Review Date is displayed correctly and reflects latest customer review activity.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Last Review Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Last Review Date');
      await rdrPage.expectAllCellsNonEmpty('Last Review Date');
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_015 - Customer Master → Verify View action opens complete customer profile information including customer, risk, KYC and AML details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_015
    // Excel Scenario: Customer & Account Data → Customer Master → Verify View action opens complete customer profile information including customer, risk, KYC and AML details.
    // FSD §4.3 — Detail Modal
    // Steps (15): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify PEP indicators are shown where applicable and align with source status. - Verify sanctions flags are displayed accurately for matched records. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Locate customer record. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete customer profile information including customer, risk, KYC and AML details. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_015] Customer Master → Verify View action opens complete customer profile information including customer, risk, KYC and AML details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_016 - Customer Master → Verify search functionality using Customer ID and ensure the system retrieves the exact matching customer record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_016
    // Excel Scenario: Customer & Account Data → Customer Master → Verify search functionality using Customer ID and ensure the system retrieves the exact matching customer record.
    // FSD §4.3 — Detail Modal
    // Steps (16): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter Customer ID in search box. - Click Search or press Enter. - Review search results. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify returned record details. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality using Customer ID and ensure the system retrieves the exact matching customer record. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_016] Customer Master → Verify search functionality using Customer ID and ensure the system retrieves the exact matching customer record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.searchNoMatchValue();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_017 - Customer Master → Verify search functionality using Full Legal Name and ensure matching customer records are displayed.", async ({ testData }) => {
    // Excel Test Case ID: RDR_017
    // Excel Scenario: Customer & Account Data → Customer Master → Verify search functionality using Full Legal Name and ensure matching customer records are displayed.
    // FSD §4.1 — Toolbar
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter Full Legal Name in search field. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter Full Legal Name in search field. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality using Full Legal Name and ensure matching customer records are displayed. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_017] Customer Master → Verify search functionality using Full Legal Name and ensure matching customer records are displayed.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      });
  });

  test("Case ID:RDR_018 - Customer Master → Verify Clear button functionality after applying filters and search criteria.", async ({ testData }) => {
    // Excel Test Case ID: RDR_018
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Clear button functionality after applying filters and search criteria.
    // FSD §4.5 — Filter Bars
    // Steps (14): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Apply Customer Type filter. - Perform search using Customer ID. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter a valid search value and verify matching records are displayed. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Clear button functionality after applying filters and search criteria. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_018] Customer Master → Verify Clear button functionality after applying filters and search criteria.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      await rdrPage.clearSearchAndFilters();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectAllCellsMatchValue('Customer ID', 'Individual');
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      });
  });

  test("Case ID:RDR_019 - Customer Master → Verify CSV Export functionality and validate exported customer data.", async ({ testData }) => {
    // Excel Test Case ID: RDR_019
    // Excel Scenario: Customer & Account Data → Customer Master → Verify CSV Export functionality and validate exported customer data.
    // FSD §11.1 — Export Formats
    // Steps (16): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click CSV Export button. - Open exported file. - Click CSV export and verify export action completes for current filtered dataset. Business Validation: - Verify PEP indicators are shown where applicable and align with source status. - Verify sanctions flags are displayed accurately for matched records. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click CSV export and verify export action completes for current filtered dataset. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - CSV Export functionality and validate exported customer data. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_019] Customer Master → Verify CSV Export functionality and validate exported customer data.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.expectColumnVisible('downloaded file headers match on-screen');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectAllCellsMatchValue('Validate', 'Individual');
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_020 - Customer Master → Verify Excel Export functionality and validate exported customer information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_020
    // Excel Scenario: Customer & Account Data → Customer Master → Verify Excel Export functionality and validate exported customer information.
    // FSD §11.1 — Export Formats
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click Excel Export button. - Open exported workbook. - Click CSV export and verify export action completes for current filtered dataset. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click CSV export and verify export action completes for current filtered dataset. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Excel Export functionality and validate exported customer information. succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_020] Customer Master → Verify Excel Export functionality and validate exported customer information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportExcel();
      await rdrPage.exportCsv();
      await rdrPage.expectColumnVisible('downloaded file headers match on-screen');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectAllCellsMatchValue('data accuracy and', 'Individual');
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectGridTabLoaded();
      });
  });
  });

  test.describe("Customer & Account Data → Customer Address", () => {
  test("Case ID:RDR_021 - Customer Address → Verify Address ID is generated and displayed uniquely for every customer address record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_021
    // Excel Scenario: Customer & Account Data → Customer Address → Verify Address ID is generated and displayed uniquely for every customer address record loaded from CBS.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare multiple records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Address ID is generated and displayed uniquely for every customer address record loaded from CBS. succeeds for Customer Address. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_021] Customer Address → Verify Address ID is generated and displayed uniquely for every customer address record loaded from CBS.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Address ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Address ID');
      await rdrPage.expectAllCellsNonEmpty('Address ID');
      });
  });

  test("Case ID:RDR_022 - Customer Address → Verify Customer ID displayed against each address record matches the linked customer in Customer Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_022
    // Excel Scenario: Customer & Account Data → Customer Address → Verify Customer ID displayed against each address record matches the linked customer in Customer Master.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Scroll through grid rows and verify sticky header remains visible. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer ID displayed against each address record matches the linked customer in Customer Master. succeeds for Customer Address. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_022] Customer Address → Verify Customer ID displayed against each address record matches the linked customer in Customer Master.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectFirstRowLinkNavigates();
      });
  });

  test("Case ID:RDR_023 - Customer Address → Verify Address Type values are displayed correctly based on configured address classifications.", async ({ testData }) => {
    // Excel Test Case ID: RDR_023
    // Excel Scenario: Customer & Account Data → Customer Address → Verify Address Type values are displayed correctly based on configured address classifications.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Address Type values are displayed correctly based on configured address classifications. succeeds for Customer Address. - Application remains stable with no unexpected error behavior.
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
    // FSD §4.3 — Detail Modal
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify masking pattern. - Verify PII fields are masked for restricted role and readable for authorized role only. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Address Line 1 is displayed according to configured masking rules to protect customer PII information. succeeds for Customer Address. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_024] Customer Address → Verify Address Line 1 is displayed according to configured masking rules to protect customer PII information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Address Line 1');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Address Line 1');
      await rdrPage.expectAllCellsNonEmpty('Address Line 1');
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_025 - Customer Address → Verify City and State values are displayed correctly for each address record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_025
    // Excel Scenario: Customer & Account Data → Customer Address → Verify City and State values are displayed correctly for each address record.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - City and State values are displayed correctly for each address record. succeeds for Customer Address. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_025] Customer Address → Verify City and State values are displayed correctly for each address record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('City');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('City');
      await rdrPage.expectAllCellsNonEmpty('City');
      });
  });

  test("Case ID:RDR_026 - Customer Address → Verify Postal Code is displayed according to configured masking rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_026
    // Excel Scenario: Customer & Account Data → Customer Address → Verify Postal Code is displayed according to configured masking rules.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify masking format. - Verify PII fields are masked for restricted role and readable for authorized role only. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify PII fields are masked for restricted role and readable for authorized role only. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Postal Code is displayed according to configured masking rules. succeeds for Customer Address. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_026] Customer Address → Verify Postal Code is displayed according to configured masking rules.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Postal Code');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Postal Code');
      await rdrPage.expectAllCellsNonEmpty('Postal Code');
      });
  });

  test("Case ID:RDR_027 - Customer Address → Verify Country Code is displayed correctly for address records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_027
    // Excel Scenario: Customer & Account Data → Customer Address → Verify Country Code is displayed correctly for address records.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Country column. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Country Code is displayed correctly for address records. succeeds for Customer Address. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Primary Address indicator is displayed correctly for customer addresses. succeeds for Customer Address. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_028] Customer Address → Verify Primary Address indicator is displayed correctly for customer addresses.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Primary');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Primary');
      await rdrPage.expectAllCellsNonEmpty('Primary');
      });
  });

  test("Case ID:RDR_029 - Customer Address → Verify Valid From date is displayed correctly and matches source onboarding information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_029
    // Excel Scenario: Customer & Account Data → Customer Address → Verify Valid From date is displayed correctly and matches source onboarding information.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare displayed date with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Valid From date is displayed correctly and matches source onboarding information. succeeds for Customer Address. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_029] Customer Address → Verify Valid From date is displayed correctly and matches source onboarding information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Valid From');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Valid From');
      await rdrPage.expectAllCellsNonEmpty('Valid From');
      });
  });

  test("Case ID:RDR_030 - Customer Address → Verify View action opens complete address details for the selected customer address record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_030
    // Excel Scenario: Customer & Account Data → Customer Address → Verify View action opens complete address details for the selected customer address record.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete address details for the selected customer address record. succeeds for Customer Address. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_030] Customer Address → Verify View action opens complete address details for the selected customer address record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_031 - Customer Address → Verify search functionality using Address ID.", async ({ testData }) => {
    // Excel Test Case ID: RDR_031
    // Excel Scenario: Customer & Account Data → Customer Address → Verify search functionality using Address ID.
    // FSD §4.1 — Toolbar
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter Address ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter Address ID in search field. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality using Address ID. succeeds for Customer Address. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_031] Customer Address → Verify search functionality using Address ID.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_032 - Customer Address → Verify search functionality using Customer ID and retrieve all linked addresses.", async ({ testData }) => {
    // Excel Test Case ID: RDR_032
    // Excel Scenario: Customer & Account Data → Customer Address → Verify search functionality using Customer ID and retrieve all linked addresses.
    // FSD §4.1 — Toolbar
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter Customer ID in search box. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify returned records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality using Customer ID and retrieve all linked addresses. succeeds for Customer Address. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_032] Customer Address → Verify search functionality using Customer ID and retrieve all linked addresses.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectAllCellsNonEmpty('Status');
      });
  });

  test("Case ID:RDR_033 - Customer Address → Verify Address Verification Status (Is Verified) in address details screen.", async ({ testData }) => {
    // Excel Test Case ID: RDR_033
    // Excel Scenario: Customer & Account Data → Customer Address → Verify Address Verification Status (Is Verified) in address details screen.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Is Verified field. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Address Verification Status (Is Verified) in address details screen. succeeds for Customer Address. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_033] Customer Address → Verify Address Verification Status (Is Verified) in address details screen.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_034 - Customer Address → Verify High Risk Location Flag and Human Trafficking Risk Flag values in address details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_034
    // Excel Scenario: Customer & Account Data → Customer Address → Verify High Risk Location Flag and Human Trafficking Risk Flag values in address details.
    // FSD §4.3 — Detail Modal
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Review risk-related fields. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review risk-related fields. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - High Risk Location Flag and Human Trafficking Risk Flag values in address details. succeeds for Customer Address. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_034] Customer Address → Verify High Risk Location Flag and Human Trafficking Risk Flag values in address details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_035 - Customer Address → Verify CSV and Excel export functionality for Customer Address records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_035
    // Excel Scenario: Customer & Account Data → Customer Address → Verify CSV and Excel export functionality for Customer Address records.
    // FSD §11.1 — Export Formats
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click CSV Export. - Click Excel Export. - Click CSV export and verify export action completes for current filtered dataset. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click CSV export and verify export action completes for current filtered dataset. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - CSV and Excel export functionality for Customer Address records. succeeds for Customer Address. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_035] Customer Address → Verify CSV and Excel export functionality for Customer Address records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Address');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.exportExcel();
      await rdrPage.expectColumnVisible('downloaded file headers match on-screen');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectExportButtonsVisible();
      });
  });
  });

  test.describe("Customer & Account Data → Customer Documents", () => {
  test("Case ID:RDR_036 - Customer Documents → Verify Document ID is displayed uniquely for each customer document record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_036
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Document ID is displayed uniquely for each customer document record loaded from CBS.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (15): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare multiple records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Document ID is displayed uniquely for each customer document record loaded from CBS. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_036] Customer Documents → Verify Document ID is displayed uniquely for each customer document record loaded from CBS.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Document ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectColumnVisible('Document ID');
      await rdrPage.expectAllCellsNonEmpty('Document ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_037 - Customer Documents → Verify Customer ID displayed against each document record matches the linked customer profile.", async ({ testData }) => {
    // Excel Test Case ID: RDR_037
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Customer ID displayed against each document record matches the linked customer profile.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with Customer Master records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer ID displayed against each document record matches the linked customer profile. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_037] Customer Documents → Verify Customer ID displayed against each document record matches the linked customer profile.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_038 - Customer Documents → Verify Document Type values are displayed correctly based on configured document classifications.", async ({ testData }) => {
    // Excel Test Case ID: RDR_038
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Document Type values are displayed correctly based on configured document classifications.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (14): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. Business Validation: - Validate document classification. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Document Type values are displayed correctly based on configured document classifications. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_038] Customer Documents → Verify Document Type values are displayed correctly based on configured document classifications.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Doc Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectColumnVisible('Doc Type');
      await rdrPage.expectAllCellsNonEmpty('Doc Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_039 - Customer Documents → Verify Document Number is displayed according to masking rules to protect customer sensitive information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_039
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Document Number is displayed according to masking rules to protect customer sensitive information.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. Business Validation: - Verify masking pattern. - Verify PII fields are masked for restricted role and readable for authorized role only. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source document values. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Document Number is displayed according to masking rules to protect customer sensitive information. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_039] Customer Documents → Verify Document Number is displayed according to masking rules to protect customer sensitive information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Doc Number');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectColumnVisible('Doc Number');
      await rdrPage.expectAllCellsNonEmpty('Doc Number');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_040 - Customer Documents → Verify Issuing Country is displayed correctly for all customer documents.", async ({ testData }) => {
    // Excel Test Case ID: RDR_040
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Issuing Country is displayed correctly for all customer documents.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Issuing Country column. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Issuing Country is displayed correctly for all customer documents. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_040] Customer Documents → Verify Issuing Country is displayed correctly for all customer documents.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Issuing Country');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectColumnVisible('Issuing Country');
      await rdrPage.expectAllCellsNonEmpty('Issuing Country');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_041 - Customer Documents → Verify Issue Date is displayed correctly and matches source document information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_041
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Issue Date is displayed correctly and matches source document information.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Issue Date is displayed correctly and matches source document information. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_041] Customer Documents → Verify Issue Date is displayed correctly and matches source document information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Issue Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectColumnVisible('Issue Date');
      await rdrPage.expectAllCellsNonEmpty('Issue Date');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_042 - Customer Documents → Verify Expiry Date is displayed correctly for permanent and non-permanent documents.", async ({ testData }) => {
    // Excel Test Case ID: RDR_042
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Expiry Date is displayed correctly for permanent and non-permanent documents.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Expiry Date is displayed correctly for permanent and non-permanent documents. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_042] Customer Documents → Verify Expiry Date is displayed correctly for permanent and non-permanent documents.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Expiry Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectColumnVisible('Expiry Date');
      await rdrPage.expectAllCellsNonEmpty('Expiry Date');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_043 - Customer Documents → Verify Document Status is displayed correctly based on document validity.", async ({ testData }) => {
    // Excel Test Case ID: RDR_043
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Document Status is displayed correctly based on document validity.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (14): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Document Status is displayed correctly based on document validity. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_043] Customer Documents → Verify Document Status is displayed correctly based on document validity.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_044 - Customer Documents → Verify expired documents are highlighted appropriately for AML review.", async ({ testData }) => {
    // Excel Test Case ID: RDR_044
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify expired documents are highlighted appropriately for AML review.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (14): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Locate expired document record. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Expired documents are highlighted appropriately for AML review. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_044] Customer Documents → Verify expired documents are highlighted appropriately for AML review.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_045 - Customer Documents → Verify Verified Date is displayed correctly and matches document verification records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_045
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Verified Date is displayed correctly and matches document verification records.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Verified Date is displayed correctly and matches document verification records. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_045] Customer Documents → Verify Verified Date is displayed correctly and matches document verification records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Verified Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
      await rdrPage.expectColumnVisible('Verified Date');
      await rdrPage.expectAllCellsNonEmpty('Verified Date');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_046 - Customer Documents → Verify Verification Method is displayed correctly according to document verification process.", async ({ testData }) => {
    // Excel Test Case ID: RDR_046
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify Verification Method is displayed correctly according to document verification process.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Verification Method is displayed correctly according to document verification process. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_046] Customer Documents → Verify Verification Method is displayed correctly according to document verification process.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Verify Method');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectExportButtonsVisible();
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
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter Document ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter Document ID in search field. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality using Document ID. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_047] Customer Documents → Verify search functionality using Document ID.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_048 - Customer Documents → Verify search functionality using Customer ID and retrieve all linked customer documents.", async ({ testData }) => {
    // Excel Test Case ID: RDR_048
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify search functionality using Customer ID and retrieve all linked customer documents.
    // FSD §4.1 — Toolbar
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter Customer ID in search box. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify returned records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality using Customer ID and retrieve all linked customer documents. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_048] Customer Documents → Verify search functionality using Customer ID and retrieve all linked customer documents.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectAllCellsNonEmpty('Status');
      });
  });

  test("Case ID:RDR_049 - Customer Documents → Verify View action opens complete document details including AML-related information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_049
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify View action opens complete document details including AML-related information.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete document details including AML-related information. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_049] Customer Documents → Verify View action opens complete document details including AML-related information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_050 - Customer Documents → Verify CSV and Excel export functionality for Customer Documents data.", async ({ testData }) => {
    // Excel Test Case ID: RDR_050
    // Excel Scenario: Customer & Account Data → Customer Documents → Verify CSV and Excel export functionality for Customer Documents data.
    // FSD §11.1 — Export Formats
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click CSV Export. - Click Excel Export. - Click CSV export and verify export action completes for current filtered dataset. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click CSV export and verify export action completes for current filtered dataset. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - CSV and Excel export functionality for Customer Documents data. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_050] Customer Documents → Verify CSV and Excel export functionality for Customer Documents data.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer Documents');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.exportExcel();
      await rdrPage.expectColumnVisible('downloaded file headers match on-screen');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectExportButtonsVisible();
      });
  });
  });

  test.describe("Customer & Account Data → Risk Assessment", () => {
  test("Case ID:RDR_051 - Risk Assessment → Verify Assessment ID is generated and displayed uniquely for each risk assessment record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_051
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify Assessment ID is generated and displayed uniquely for each risk assessment record.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "RISK_ASSESSMENT" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Open Risk Assessment tab. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare multiple records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Assessment ID is generated and displayed uniquely for each risk assessment record. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "RISK_ASSESSMENT" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with Customer Master records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer ID displayed against each risk assessment record matches the linked customer profile. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_052] Risk Assessment → Verify Customer ID displayed against each risk assessment record matches the linked customer profile.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_053 - Risk Assessment → Verify Assessment Date is displayed correctly and matches the date on which risk assessment was performed.", async ({ testData }) => {
    // Excel Test Case ID: RDR_053
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify Assessment Date is displayed correctly and matches the date on which risk assessment was performed.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "RISK_ASSESSMENT" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare displayed dates with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Assessment Date is displayed correctly and matches the date on which risk assessment was performed. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "RISK_ASSESSMENT" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Assessment Type values are displayed correctly based on configured assessment classifications. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "RISK_ASSESSMENT" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Review Total Score column. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Total Risk Score is calculated and displayed correctly for each customer assessment. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "RISK_ASSESSMENT" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Review Risk Rating column. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify risk level values and labels are displayed consistently in grid and details. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Risk Rating values are displayed correctly according to configured risk score ranges. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "RISK_ASSESSMENT" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Locate assessment with score above threshold. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify risk level values and labels are displayed consistently in grid and details. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - High-risk customers are highlighted appropriately when Total Risk Score exceeds configured threshold. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_057] Risk Assessment → Verify high-risk customers are highlighted appropriately when Total Risk Score exceeds configured threshold.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Type');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_058 - Risk Assessment → Verify Previous Risk Rating is displayed correctly and reflects prior assessment results.", async ({ testData }) => {
    // Excel Test Case ID: RDR_058
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify Previous Risk Rating is displayed correctly and reflects prior assessment results.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "RISK_ASSESSMENT" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify risk level values and labels are displayed consistently in grid and details. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Previous Risk Rating is displayed correctly and reflects prior assessment results. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "RISK_ASSESSMENT" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify risk level values and labels are displayed consistently in grid and details. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Rating Changed indicator correctly identifies customers whose risk rating has changed since the last assessment. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "RISK_ASSESSMENT" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify risk level values and labels are displayed consistently in grid and details. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Next Review Date is calculated and displayed correctly based on risk review schedule. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "RISK_ASSESSMENT" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Review Frequency values are displayed correctly based on risk assessment configuration. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior.
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
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "RISK_ASSESSMENT" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter Assessment ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter Assessment ID in search field. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality using Assessment ID. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_062] Risk Assessment → Verify search functionality using Assessment ID.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('field');
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_063 - Risk Assessment → Verify search functionality using Customer ID and retrieve all associated risk assessments.", async ({ testData }) => {
    // Excel Test Case ID: RDR_063
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify search functionality using Customer ID and retrieve all associated risk assessments.
    // FSD §4.1 — Toolbar
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "RISK_ASSESSMENT" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter Customer ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter Customer ID in search field. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality using Customer ID and retrieve all associated risk assessments. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_063] Risk Assessment → Verify search functionality using Customer ID and retrieve all associated risk assessments.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Type');
      });
  });

  test("Case ID:RDR_064 - Risk Assessment → Verify View action opens complete risk assessment details including score components and review information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_064
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify View action opens complete risk assessment details including score components and review information.
    // FSD §4.3 — Detail Modal
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "RISK_ASSESSMENT" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete risk assessment details including score components and review information. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_064] Risk Assessment → Verify View action opens complete risk assessment details including score components and review information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
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
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_065 - Risk Assessment → Verify CSV and Excel export functionality for Risk Assessment records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_065
    // Excel Scenario: Customer & Account Data → Risk Assessment → Verify CSV and Excel export functionality for Risk Assessment records.
    // FSD §11.1 — Export Formats
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "RISK_ASSESSMENT" and wait for grid content to load. …
    // Expected: Functional Validation: - Click CSV Export. - Click Excel Export. - Click CSV export and verify export action completes for current filtered dataset. Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click CSV export and verify export action completes for current filtered dataset. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - CSV and Excel export functionality for Risk Assessment records. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_065] Risk Assessment → Verify CSV and Excel export functionality for Risk Assessment records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Risk Assessment');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.exportExcel();
      await rdrPage.expectColumnVisible('downloaded file headers match on-screen');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectExportButtonsVisible();
      });
  });
  });

  test.describe("Customer & Account Data → Account Master", () => {
  test("Case ID:RDR_066 - Account Master → Verify Account ID is generated uniquely and displayed correctly for each account record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_066
    // Excel Scenario: Customer & Account Data → Account Master → Verify Account ID is generated uniquely and displayed correctly for each account record loaded from CBS.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Account ID is generated uniquely and displayed correctly for each account record loaded from CBS. succeeds for Account Master. - Application remains stable with no unexpected error behavior.
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
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click Account ID hyperlink. - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Account ID hyperlink functionality and ensure account details open correctly when selected. succeeds for Account Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_067] Account Master → Verify Account ID hyperlink functionality and ensure account details open correctly when selected.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.clickFirstRowIdLink();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_068 - Account Master → Verify Account Number is displayed according to masking requirements to protect sensitive banking information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_068
    // Excel Scenario: Customer & Account Data → Account Master → Verify Account Number is displayed according to masking requirements to protect sensitive banking information.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify masking pattern. - Verify PII fields are masked for restricted role and readable for authorized role only. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Account Number is displayed according to masking requirements to protect sensitive banking information. succeeds for Account Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer ID displayed against each account matches the linked customer profile. succeeds for Account Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_069] Account Master → Verify Customer ID displayed against each account matches the linked customer profile.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectFirstRowLinkNavigates();
      });
  });

  test("Case ID:RDR_070 - Account Master → Verify Account Type values are displayed correctly based on account classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_070
    // Excel Scenario: Customer & Account Data → Account Master → Verify Account Type values are displayed correctly based on account classification.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Account Type values are displayed correctly based on account classification. succeeds for Account Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Currency and Branch details are displayed correctly for each account. succeeds for Account Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_071] Account Master → Verify Currency and Branch details are displayed correctly for each account.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Currency and Branch');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Currency and Branch');
      await rdrPage.expectAllCellsNonEmpty('Currency and Branch');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_072 - Account Master → Verify Account Status values are displayed correctly based on account lifecycle status.", async ({ testData }) => {
    // Excel Test Case ID: RDR_072
    // Excel Scenario: Customer & Account Data → Account Master → Verify Account Status values are displayed correctly based on account lifecycle status.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Account Status values are displayed correctly based on account lifecycle status. succeeds for Account Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Frozen accounts are highlighted appropriately and displayed with Frozen status. succeeds for Account Master. - Application remains stable with no unexpected error behavior.
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
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_074 - Account Master → Verify Current Balance is displayed correctly and matches account balance received from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_074
    // Excel Scenario: Customer & Account Data → Account Master → Verify Current Balance is displayed correctly and matches account balance received from CBS.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Current Balance is displayed correctly and matches account balance received from CBS. succeeds for Account Master. - Application remains stable with no unexpected error behavior.
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
      });
  });

  test("Case ID:RDR_075 - Account Master → Verify Freeze Flag is displayed correctly for active and frozen accounts.", async ({ testData }) => {
    // Excel Test Case ID: RDR_075
    // Excel Scenario: Customer & Account Data → Account Master → Verify Freeze Flag is displayed correctly for active and frozen accounts.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Freeze Flag is displayed correctly for active and frozen accounts. succeeds for Account Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Last Transaction Date is displayed correctly and reflects the latest transaction posted to the account. succeeds for Account Master. - Application remains stable with no unexpected error behavior.
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
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter Customer ID in filter section. - Apply branch or type filter and verify only matching records remain in grid. - Clear filters and verify the full dataset is restored. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer ID filter functionality and ensure accounts are filtered correctly. succeeds for Account Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_077] Account Master → Verify Customer ID filter functionality and ensure accounts are filtered correctly.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.clearSearchAndFilters();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectAllCellsMatchValue('Status', 'Individual');
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectFirstRowLinkNavigates();
      });
  });

  test("Case ID:RDR_078 - Account Master → Verify search functionality using Account ID.", async ({ testData }) => {
    // Excel Test Case ID: RDR_078
    // Excel Scenario: Customer & Account Data → Account Master → Verify search functionality using Account ID.
    // FSD §4.1 — Toolbar
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter Account ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality using Account ID. succeeds for Account Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_078] Account Master → Verify search functionality using Account ID.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('field');
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_079 - Account Master → Verify View action opens complete account details including AML-related information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_079
    // Excel Scenario: Customer & Account Data → Account Master → Verify View action opens complete account details including AML-related information.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete account details including AML-related information. succeeds for Account Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_079] Account Master → Verify View action opens complete account details including AML-related information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_080 - Account Master → Verify CSV and Excel export functionality for Account Master records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_080
    // Excel Scenario: Customer & Account Data → Account Master → Verify CSV and Excel export functionality for Account Master records.
    // FSD §11.1 — Export Formats
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click CSV Export. - Click Excel Export. - Click CSV export and verify export action completes for current filtered dataset. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - CSV and Excel export functionality for Account Master records. succeeds for Account Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_080] Account Master → Verify CSV and Excel export functionality for Account Master records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Account Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.exportExcel();
      await rdrPage.expectColumnVisible('downloaded file headers match on-screen');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectExportButtonsVisible();
      });
  });
  });

  test.describe("Customer & Account Data → Customer-Account Relationship", () => {
  test("Case ID:RDR_081 - Customer-Account Relationship → Verify Relationship ID (Rel ID) is displayed uniquely for every customer-account relationship record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_081
    // Excel Scenario: Customer & Account Data → Customer-Account Relationship → Verify Relationship ID (Rel ID) is displayed uniquely for every customer-account relationship record.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare multiple records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Relationship ID (Rel ID) is displayed uniquely for every customer-account relationship record. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_081] Customer-Account Relationship → Verify Relationship ID (Rel ID) is displayed uniquely for every customer-account relationship record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer-Account Relationship');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Rel ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Rel ID');
      await rdrPage.expectAllCellsNonEmpty('Rel ID');
      });
  });

  test("Case ID:RDR_082 - Customer-Account Relationship → Verify Customer ID displayed in relationship records matches the linked customer profile in Customer Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_082
    // Excel Scenario: Customer & Account Data → Customer-Account Relationship → Verify Customer ID displayed in relationship records matches the linked customer profile in Customer Master.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with Customer Master. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer ID displayed in relationship records matches the linked customer profile in Customer Master. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_082] Customer-Account Relationship → Verify Customer ID displayed in relationship records matches the linked customer profile in Customer Master.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer-Account Relationship');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectFirstRowLinkNavigates();
      });
  });

  test("Case ID:RDR_083 - Customer-Account Relationship → Verify Account ID displayed in relationship records matches the linked account in Account Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_083
    // Excel Scenario: Customer & Account Data → Customer-Account Relationship → Verify Account ID displayed in relationship records matches the linked account in Account Master.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Account ID column. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Account ID displayed in relationship records matches the linked account in Account Master. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_083] Customer-Account Relationship → Verify Account ID displayed in relationship records matches the linked account in Account Master.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer-Account Relationship');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Account ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Account ID');
      await rdrPage.expectAllCellsNonEmpty('Account ID');
      await rdrPage.expectFirstRowLinkNavigates();
      });
  });

  test("Case ID:RDR_084 - Customer-Account Relationship → Verify Relationship Type is displayed correctly according to the account ownership relationship maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_084
    // Excel Scenario: Customer & Account Data → Customer-Account Relationship → Verify Relationship Type is displayed correctly according to the account ownership relationship maintained in source systems.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Relationship Type is displayed correctly according to the account ownership relationship maintained in source systems. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_084] Customer-Account Relationship → Verify Relationship Type is displayed correctly according to the account ownership relationship maintained in source systems.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer-Account Relationship');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Relationship Type');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Relationship Type');
      await rdrPage.expectAllCellsNonEmpty('Relationship Type');
      });
  });

  test("Case ID:RDR_085 - Customer-Account Relationship → Verify Signing Authority values are displayed correctly and reflect the account operation rights assigned to the customer.", async ({ testData }) => {
    // Excel Test Case ID: RDR_085
    // Excel Scenario: Customer & Account Data → Customer-Account Relationship → Verify Signing Authority values are displayed correctly and reflect the account operation rights assigned to the customer.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Signing Authority values are displayed correctly and reflect the account operation rights assigned to the customer. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_085] Customer-Account Relationship → Verify Signing Authority values are displayed correctly and reflect the account operation rights assigned to the customer.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer-Account Relationship');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Signing Authority');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Signing Authority');
      await rdrPage.expectAllCellsNonEmpty('Signing Authority');
      });
  });

  test("Case ID:RDR_086 - Customer-Account Relationship → Verify Ownership Percentage is displayed correctly for the customer-account relationship.", async ({ testData }) => {
    // Excel Test Case ID: RDR_086
    // Excel Scenario: Customer & Account Data → Customer-Account Relationship → Verify Ownership Percentage is displayed correctly for the customer-account relationship.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Ownership Percentage is displayed correctly for the customer-account relationship. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_086] Customer-Account Relationship → Verify Ownership Percentage is displayed correctly for the customer-account relationship.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer-Account Relationship');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectAllCellsNonEmpty('Ownership %');
      });
  });

  test("Case ID:RDR_087 - Customer-Account Relationship → Verify Effective Date is displayed correctly and represents the date from which the relationship became active.", async ({ testData }) => {
    // Excel Test Case ID: RDR_087
    // Excel Scenario: Customer & Account Data → Customer-Account Relationship → Verify Effective Date is displayed correctly and represents the date from which the relationship became active.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Effective Date is displayed correctly and represents the date from which the relationship became active. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_087] Customer-Account Relationship → Verify Effective Date is displayed correctly and represents the date from which the relationship became active.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer-Account Relationship');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Effective Date');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Effective Date');
      await rdrPage.expectAllCellsNonEmpty('Effective Date');
      });
  });

  test("Case ID:RDR_088 - Customer-Account Relationship → Verify KYC Status values are displayed correctly and reflect the latest KYC review status.", async ({ testData }) => {
    // Excel Test Case ID: RDR_088
    // Excel Scenario: Customer & Account Data → Customer-Account Relationship → Verify KYC Status values are displayed correctly and reflect the latest KYC review status.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - KYC Status values are displayed correctly and reflect the latest KYC review status. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior.
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
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter Rel ID in search box. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter a valid search value and verify matching records are displayed. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality using Relationship ID and retrieve the exact matching relationship record. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_089] Customer-Account Relationship → Verify search functionality using Relationship ID and retrieve the exact matching relationship record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer-Account Relationship');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Status');
      });
  });

  test("Case ID:RDR_090 - Customer-Account Relationship → Verify View action opens complete customer-account relationship details including customer, account and KYC information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_090
    // Excel Scenario: Customer & Account Data → Customer-Account Relationship → Verify View action opens complete customer-account relationship details including customer, account and KYC information.
    // FSD §4.3 — Detail Modal
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete customer-account relationship details including customer, account and KYC information. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_090] Customer-Account Relationship → Verify View action opens complete customer-account relationship details including customer, account and KYC information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Customer-Account Relationship');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectGridContainsRecords();
      });
  });
  });

  test.describe("Customer & Account Data → Loan Account", () => {
  test("Case ID:RDR_091 - Loan Account → Verify Loan ID is displayed uniquely for every loan account record and correctly mapped to the loan account.", async ({ testData }) => {
    // Excel Test Case ID: RDR_091
    // Excel Scenario: Customer & Account Data → Loan Account → Verify Loan ID is displayed uniquely for every loan account record and correctly mapped to the loan account.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Loan ID is displayed uniquely for every loan account record and correctly mapped to the loan account. succeeds for Loan Account. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer ID displayed against each loan account matches the linked customer profile. succeeds for Loan Account. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_092] Loan Account → Verify Customer ID displayed against each loan account matches the linked customer profile.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Loan Account');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_093 - Loan Account → Verify Account ID displayed against each loan account matches the linked account in Account Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_093
    // Excel Scenario: Customer & Account Data → Loan Account → Verify Account ID displayed against each loan account matches the linked account in Account Master.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Account ID displayed against each loan account matches the linked account in Account Master. succeeds for Loan Account. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_093] Loan Account → Verify Account ID displayed against each loan account matches the linked account in Account Master.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Loan Account');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Account ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Account ID');
      await rdrPage.expectAllCellsNonEmpty('Account ID');
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_094 - Loan Account → Verify Loan Type is displayed correctly based on the loan product assigned to the customer.", async ({ testData }) => {
    // Excel Test Case ID: RDR_094
    // Excel Scenario: Customer & Account Data → Loan Account → Verify Loan Type is displayed correctly based on the loan product assigned to the customer.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Loan Type is displayed correctly based on the loan product assigned to the customer. succeeds for Loan Account. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Review Sanctioned Amount column. - Verify sanctions flags are displayed accurately for matched records. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Sanctioned Amount is displayed correctly and matches the approved loan amount maintained in CBS. succeeds for Loan Account. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Outstanding Balance is displayed correctly and reflects the current unpaid loan balance. succeeds for Loan Account. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Interest Rate is displayed correctly for each loan account as per the approved loan terms. succeeds for Loan Account. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Disbursement Date and Maturity Date are displayed correctly according to loan lifecycle information. succeeds for Loan Account. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Loan Status values are displayed correctly and reflect the current loan condition. succeeds for Loan Account. - Application remains stable with no unexpected error behavior.
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
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify sanctions flags are displayed accurately for matched records. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete loan account details including loan information, balances, repayment schedule and status. succeeds for Loan Account. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_100] Loan Account → Verify View action opens complete loan account details including loan information, balances, repayment schedule and status.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → Loan Account');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });
  });

  test.describe("Customer & Account Data → EOD Balance", () => {
  test("Case ID:RDR_101 - EOD Balance → Verify Balance ID is generated uniquely and displayed correctly for every EOD balance record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_101
    // Excel Scenario: Customer & Account Data → EOD Balance → Verify Balance ID is generated uniquely and displayed correctly for every EOD balance record loaded from CBS.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Balance ID is generated uniquely and displayed correctly for every EOD balance record loaded from CBS. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Account ID displayed in EOD records matches the linked account in Account Master. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_102] EOD Balance → Verify Account ID displayed in EOD records matches the linked account in Account Master.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → EOD Balance');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Account ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Account ID');
      await rdrPage.expectAllCellsNonEmpty('Account ID');
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_103 - EOD Balance → Verify Customer ID displayed against each EOD balance record matches the linked customer profile.", async ({ testData }) => {
    // Excel Test Case ID: RDR_103
    // Excel Scenario: Customer & Account Data → EOD Balance → Verify Customer ID displayed against each EOD balance record matches the linked customer profile.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer ID displayed against each EOD balance record matches the linked customer profile. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_103] EOD Balance → Verify Customer ID displayed against each EOD balance record matches the linked customer profile.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → EOD Balance');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_104 - EOD Balance → Verify Balance Date is displayed correctly and represents the business date for which EOD balance was calculated.", async ({ testData }) => {
    // Excel Test Case ID: RDR_104
    // Excel Scenario: Customer & Account Data → EOD Balance → Verify Balance Date is displayed correctly and represents the business date for which EOD balance was calculated.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Balance Date is displayed correctly and represents the business date for which EOD balance was calculated. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Opening Balance is displayed correctly and matches the opening balance received from CBS. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Total Credits and Total Debits are displayed correctly for the selected EOD date. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Closing Balance is calculated and displayed correctly based on Opening Balance, Credits and Debits. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior.
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
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Currency values are displayed correctly for all EOD balance records. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_108] EOD Balance → Verify Currency values are displayed correctly for all EOD balance records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → EOD Balance');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Currency');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Currency');
      await rdrPage.expectAllCellsNonEmpty('Currency');
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_109 - EOD Balance → Verify Credit Count and Debit Count values are displayed correctly based on transaction activity for the day.", async ({ testData }) => {
    // Excel Test Case ID: RDR_109
    // Excel Scenario: Customer & Account Data → EOD Balance → Verify Credit Count and Debit Count values are displayed correctly based on transaction activity for the day.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Credit Count and Debit Count values are displayed correctly based on transaction activity for the day. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior.
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
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete EOD balance details including balance calculation and transaction summary information. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_110] EOD Balance → Verify View action opens complete EOD balance details including balance calculation and transaction summary information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer & Account Data → EOD Balance');
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
  });

  test.describe("Cards & Instruments → Card Master", () => {
  test("Case ID:RDR_111 - Card Master → Verify Card ID is generated uniquely and displayed correctly for every card record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_111
    // Excel Scenario: Cards & Instruments → Card Master → Verify Card ID is generated uniquely and displayed correctly for every card record loaded from CBS.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUST_ACCT_REL" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare multiple records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Card ID is generated uniquely and displayed correctly for every card record loaded from CBS. succeeds for Card Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUST_ACCT_REL" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Customer ID and Account ID columns. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer ID and Account ID displayed for each card are correctly mapped to the associated customer and account records. succeeds for Card Master. - Application remains stable with no unexpected error behavior.
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
      });
  });

  test("Case ID:RDR_113 - Card Master → Verify masked card number (Last 4 digits) is displayed according to PCI-DSS masking requirements.", async ({ testData }) => {
    // Excel Test Case ID: RDR_113
    // Excel Scenario: Cards & Instruments → Card Master → Verify masked card number (Last 4 digits) is displayed according to PCI-DSS masking requirements.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUST_ACCT_REL" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify masking rules. - Verify PII fields are masked for restricted role and readable for authorized role only. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source card number. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Masked card number (Last 4 digits) is displayed according to PCI-DSS masking requirements. succeeds for Card Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUST_ACCT_REL" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Card Type values are displayed correctly according to card classification maintained in source systems. succeeds for Card Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUST_ACCT_REL" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Card Network values are displayed correctly for issued cards. succeeds for Card Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUST_ACCT_REL" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Card Status values are displayed correctly and reflect the current card lifecycle status. succeeds for Card Master. - Application remains stable with no unexpected error behavior.
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
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_117 - Card Master → Verify hot-listed cards are highlighted appropriately and displayed with the correct status indicator.", async ({ testData }) => {
    // Excel Test Case ID: RDR_117
    // Excel Scenario: Cards & Instruments → Card Master → Verify hot-listed cards are highlighted appropriately and displayed with the correct status indicator.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUST_ACCT_REL" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Card Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Hot-listed cards are highlighted appropriately and displayed with the correct status indicator. succeeds for Card Master. - Application remains stable with no unexpected error behavior.
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
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_118 - Card Master → Verify Issue Date and Expiry Date are displayed correctly for issued cards.", async ({ testData }) => {
    // Excel Test Case ID: RDR_118
    // Excel Scenario: Cards & Instruments → Card Master → Verify Issue Date and Expiry Date are displayed correctly for issued cards.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUST_ACCT_REL" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Issue Date and Expiry Date are displayed correctly for issued cards. succeeds for Card Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUST_ACCT_REL" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - International Usage and Contactless indicators are displayed correctly based on card configuration. succeeds for Card Master. - Application remains stable with no unexpected error behavior.
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
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUST_ACCT_REL" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify PII fields are masked for restricted role and readable for authorized role only. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete card details including card status, limits, AML risk flags and usage configuration. succeeds for Card Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_120] Card Master → Verify View action opens complete card details including card status, limits, AML risk flags and usage configuration.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Card Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnValuesMasked('Status');
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });
  });

  test.describe("Cards & Instruments → Mobile Banking", () => {
  test("Case ID:RDR_121 - Mobile Banking → Verify Mobile Banking ID (MB ID) is generated uniquely and displayed correctly for each mobile banking registration record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_121
    // Excel Scenario: Cards & Instruments → Mobile Banking → Verify Mobile Banking ID (MB ID) is generated uniquely and displayed correctly for each mobile banking registration record.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "MOBILE_BANKING" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare multiple records. - Review Mobile Banking grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Mobile Banking ID (MB ID) is generated uniquely and displayed correctly for each mobile banking registration record. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "MOBILE_BANKING" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review Customer ID and Account ID columns. - Compare with Customer Master and Account Master data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer ID and Account ID displayed in mobile banking records are correctly mapped to the linked customer and account. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_122] Mobile Banking → Verify Customer ID and Account ID displayed in mobile banking records are correctly mapped to the linked customer and account.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Mobile Banking');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectFirstRowLinkNavigates();
      });
  });

  test("Case ID:RDR_123 - Mobile Banking → Verify registered mobile number is displayed according to masking rules to protect customer PII information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_123
    // Excel Scenario: Cards & Instruments → Mobile Banking → Verify registered mobile number is displayed according to masking rules to protect customer PII information.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "MOBILE_BANKING" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify masking pattern. - Verify PII fields are masked for restricted role and readable for authorized role only. Data Validation: - Compare with source records. - Verify PII fields are masked for restricted role and readable for authorized role only. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Registered mobile number is displayed according to masking rules to protect customer PII information. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "MOBILE_BANKING" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source data. - Review Mobile Banking grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Registration Date is displayed correctly and reflects the actual mobile banking enrollment date. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "MOBILE_BANKING" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review Mobile Banking grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Registration Channel values are displayed correctly according to the channel used during mobile banking registration. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "MOBILE_BANKING" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source data. - Review Mobile Banking grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - UPI VPA is displayed correctly and mapped to the corresponding mobile banking customer. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "MOBILE_BANKING" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source records. - Scroll through grid rows and verify sticky header remains visible. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - UPI Banks Linked count is displayed correctly and reflects the number of bank accounts linked to UPI. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_127] Mobile Banking → Verify UPI Banks Linked count is displayed correctly and reflects the number of bank accounts linked to UPI.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Mobile Banking');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('UPI Banks Linked');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('UPI Banks Linked');
      await rdrPage.expectAllCellsNonEmpty('UPI Banks Linked');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectFirstRowLinkNavigates();
      });
  });

  test("Case ID:RDR_128 - Mobile Banking → Verify Login Failures (24H) count is displayed correctly and reflects failed login attempts within the last 24 hours.", async ({ testData }) => {
    // Excel Test Case ID: RDR_128
    // Excel Scenario: Cards & Instruments → Mobile Banking → Verify Login Failures (24H) count is displayed correctly and reflects failed login attempts within the last 24 hours.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "MOBILE_BANKING" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source records. - Review Mobile Banking grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Login Failures (24H) count is displayed correctly and reflects failed login attempts within the last 24 hours. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_128] Mobile Banking → Verify Login Failures (24H) count is displayed correctly and reflects failed login attempts within the last 24 hours.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Mobile Banking');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_129 - Mobile Banking → Verify Status values are displayed correctly and reflect the current mobile banking registration status.", async ({ testData }) => {
    // Excel Test Case ID: RDR_129
    // Excel Scenario: Cards & Instruments → Mobile Banking → Verify Status values are displayed correctly and reflect the current mobile banking registration status.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "MOBILE_BANKING" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source records. - Review Mobile Banking grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Status values are displayed correctly and reflect the current mobile banking registration status. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior.
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
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "MOBILE_BANKING" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete mobile banking details including registration information, AML indicators and mobile banking activity details. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior.
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
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });
  });

  test.describe("Cards & Instruments → ATM Master", () => {
  test("Case ID:RDR_131 - ATM Master → Verify ATM ID is generated uniquely and displayed correctly for every ATM record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_131
    // Excel Scenario: Cards & Instruments → ATM Master → Verify ATM ID is generated uniquely and displayed correctly for every ATM record loaded from CBS.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "ATM_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare multiple records. - Review ATM Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - ATM ID is generated uniquely and displayed correctly for every ATM record loaded from CBS. succeeds for ATM Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "ATM_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source data. - Review ATM Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - ATM Code is displayed correctly and uniquely identifies each ATM machine. succeeds for ATM Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "ATM_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review ATM Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - ATM Name is displayed correctly and matches the ATM location name maintained in CBS. succeeds for ATM Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "ATM_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source records. - Review ATM Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Branch information is displayed correctly for each ATM location. succeeds for ATM Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "ATM_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review ATM Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - ATM Type values are displayed correctly according to ATM classification maintained in source systems. succeeds for ATM Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "ATM_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review ATM Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - City values are displayed correctly based on ATM location information. succeeds for ATM Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "ATM_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review Country column. - Compare with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Country Code is displayed correctly for ATM locations. succeeds for ATM Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "ATM_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source data. - Review ATM Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - ATM Status is displayed correctly and reflects the current operational state of the ATM. succeeds for ATM Master. - Application remains stable with no unexpected error behavior.
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
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "ATM_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter ATM ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Enter ATM ID in search field. - Enter a valid search value and verify matching records are displayed. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality using ATM ID. succeeds for ATM Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_139] ATM Master → Verify search functionality using ATM ID.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('field');
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_140 - ATM Master → Verify search functionality using ATM Code.", async ({ testData }) => {
    // Excel Test Case ID: RDR_140
    // Excel Scenario: Cards & Instruments → ATM Master → Verify search functionality using ATM Code.
    // FSD §4.1 — Toolbar
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "ATM_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter ATM Code in search box. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality using ATM Code. succeeds for ATM Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_140] ATM Master → Verify search functionality using ATM Code.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('box');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsNoResults();
      await rdrPage.expectAllCellsNonEmpty('Status');
      });
  });

  test("Case ID:RDR_141 - ATM Master → Verify High Risk Location Flag in ATM details for ATMs located in high-risk geographic areas.", async ({ testData }) => {
    // Excel Test Case ID: RDR_141
    // Excel Scenario: Cards & Instruments → ATM Master → Verify High Risk Location Flag in ATM details for ATMs located in high-risk geographic areas.
    // FSD §4.3 — Detail Modal
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "ATM_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Review High Risk Location Flag. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Compare with source data. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - High Risk Location Flag in ATM details for ATMs located in high-risk geographic areas. succeeds for ATM Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_141] ATM Master → Verify High Risk Location Flag in ATM details for ATMs located in high-risk geographic areas.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_142 - ATM Master → Verify Daily Cash Loaded value is displayed correctly in ATM details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_142
    // Excel Scenario: Cards & Instruments → ATM Master → Verify Daily Cash Loaded value is displayed correctly in ATM details.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "ATM_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review Daily Cash Loaded field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Daily Cash Loaded value is displayed correctly in ATM details. succeeds for ATM Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_142] ATM Master → Verify Daily Cash Loaded value is displayed correctly in ATM details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_143 - ATM Master → Verify View action opens complete ATM details including AML and operational information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_143
    // Excel Scenario: Cards & Instruments → ATM Master → Verify View action opens complete ATM details including AML and operational information.
    // FSD §4.3 — Detail Modal
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "ATM_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete ATM details including AML and operational information. succeeds for ATM Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_143] ATM Master → Verify View action opens complete ATM details including AML and operational information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_144 - ATM Master → Verify CSV export functionality for ATM Master records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_144
    // Excel Scenario: Cards & Instruments → ATM Master → Verify CSV export functionality for ATM Master records.
    // FSD §11.1 — Export Formats
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "ATM_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Click CSV export and verify export action completes for current filtered dataset. - Click Excel export and verify downloaded file headers match on-screen columns. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Click CSV export and verify export action completes for current filtered dataset. - Scroll through grid rows and verify sticky header remains visible. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - CSV export functionality for ATM Master records. succeeds for ATM Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_144] ATM Master → Verify CSV export functionality for ATM Master records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.expectColumnVisible('downloaded file headers match on-screen');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectExportButtonsVisible();
      });
  });

  test("Case ID:RDR_145 - ATM Master → Verify Excel export functionality for ATM Master records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_145
    // Excel Scenario: Cards & Instruments → ATM Master → Verify Excel export functionality for ATM Master records.
    // FSD §11.1 — Export Formats
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "ATM_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Click CSV export and verify export action completes for current filtered dataset. - Click Excel export and verify downloaded file headers match on-screen columns. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Click CSV export and verify export action completes for current filtered dataset. - Scroll through grid rows and verify sticky header remains visible. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Excel export functionality for ATM Master records. succeeds for ATM Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_145] ATM Master → Verify Excel export functionality for ATM Master records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → ATM Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportExcel();
      await rdrPage.exportCsv();
      await rdrPage.expectColumnVisible('downloaded file headers match on-screen');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectExportButtonsVisible();
      });
  });
  });

  test.describe("Cards & Instruments → Instruments", () => {
  test("Case ID:RDR_146 - Instruments → Verify Instrument ID is generated uniquely and displayed correctly for each instrument record loaded from CBS.", async ({ testData }) => {
    // Excel Test Case ID: RDR_146
    // Excel Scenario: Cards & Instruments → Instruments → Verify Instrument ID is generated uniquely and displayed correctly for each instrument record loaded from CBS.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare multiple records. - Review Instruments grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Instrument ID is generated uniquely and displayed correctly for each instrument record loaded from CBS. succeeds for Instruments. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review Instruments grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Instrument Type values are displayed correctly according to instrument classification maintained in source systems. succeeds for Instruments. - Application remains stable with no unexpected error behavior.
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
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter Instrument ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Enter Instrument ID in search field. - Enter a valid search value and verify matching records are displayed. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality using Instrument ID and ensure the correct instrument record is retrieved. succeeds for Instruments. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_148] Instruments → Verify search functionality using Instrument ID and ensure the correct instrument record is retrieved.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Instruments');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('field');
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_149 - Instruments → Verify View action opens complete instrument details including status and AML-related information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_149
    // Excel Scenario: Cards & Instruments → Instruments → Verify View action opens complete instrument details including status and AML-related information.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete instrument details including status and AML-related information. succeeds for Instruments. - Application remains stable with no unexpected error behavior.
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
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_150 - Instruments → Verify Instrument Status is displayed correctly in instrument details and reflects the current instrument lifecycle state.", async ({ testData }) => {
    // Excel Test Case ID: RDR_150
    // Excel Scenario: Cards & Instruments → Instruments → Verify Instrument Status is displayed correctly in instrument details and reflects the current instrument lifecycle state.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review Instrument Status field. - Compare with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Instrument Status is displayed correctly in instrument details and reflects the current instrument lifecycle state. succeeds for Instruments. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_150] Instruments → Verify Instrument Status is displayed correctly in instrument details and reflects the current instrument lifecycle state.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Instruments');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_151 - Instruments → Verify dishonoured instruments display the correct Dishonour Reason in instrument details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_151
    // Excel Scenario: Cards & Instruments → Instruments → Verify dishonoured instruments display the correct Dishonour Reason in instrument details.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review Dishonour Reason field. - Compare with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Dishonoured instruments display the correct Dishonour Reason in instrument details. succeeds for Instruments. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_151] Instruments → Verify dishonoured instruments display the correct Dishonour Reason in instrument details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Instruments');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_152 - Instruments → Verify Stop Payment Flag is displayed correctly for instruments where stop-payment instructions have been placed.", async ({ testData }) => {
    // Excel Test Case ID: RDR_152
    // Excel Scenario: Cards & Instruments → Instruments → Verify Stop Payment Flag is displayed correctly for instruments where stop-payment instructions have been placed.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review Stop Payment Flag field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Stop Payment Flag is displayed correctly for instruments where stop-payment instructions have been placed. succeeds for Instruments. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_152] Instruments → Verify Stop Payment Flag is displayed correctly for instruments where stop-payment instructions have been placed.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Instruments');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_153 - Instruments → Verify AML Alert Flag is displayed correctly for instruments flagged by AML monitoring rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_153
    // Excel Scenario: Cards & Instruments → Instruments → Verify AML Alert Flag is displayed correctly for instruments flagged by AML monitoring rules.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review Alert Flag field. - Compare with AML source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - AML Alert Flag is displayed correctly for instruments flagged by AML monitoring rules. succeeds for Instruments. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_153] Instruments → Verify AML Alert Flag is displayed correctly for instruments flagged by AML monitoring rules.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Instruments');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_154 - Instruments → Verify CSV export functionality for Instrument Master records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_154
    // Excel Scenario: Cards & Instruments → Instruments → Verify CSV export functionality for Instrument Master records.
    // FSD §11.1 — Export Formats
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Click CSV export and verify export action completes for current filtered dataset. - Click Excel export and verify downloaded file headers match on-screen columns. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Click CSV export and verify export action completes for current filtered dataset. - Scroll through grid rows and verify sticky header remains visible. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - CSV export functionality for Instrument Master records. succeeds for Instruments. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_154] Instruments → Verify CSV export functionality for Instrument Master records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Instruments');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.expectColumnVisible('downloaded file headers match on-screen');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectExportButtonsVisible();
      });
  });

  test("Case ID:RDR_155 - Instruments → Verify Excel export functionality for Instrument Master records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_155
    // Excel Scenario: Cards & Instruments → Instruments → Verify Excel export functionality for Instrument Master records.
    // FSD §11.1 — Export Formats
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Click CSV export and verify export action completes for current filtered dataset. - Click Excel export and verify downloaded file headers match on-screen columns. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Click CSV export and verify export action completes for current filtered dataset. - Scroll through grid rows and verify sticky header remains visible. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Excel export functionality for Instrument Master records. succeeds for Instruments. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_155] Instruments → Verify Excel export functionality for Instrument Master records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Instruments');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportExcel();
      await rdrPage.exportCsv();
      await rdrPage.expectColumnVisible('downloaded file headers match on-screen');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectExcelExportReady();
      await rdrPage.expectExportButtonsVisible();
      });
  });
  });

  test.describe("Cards & Instruments → Transaction Device", () => {
  test("Case ID:RDR_156 - Transaction Device → Verify Device ID is generated uniquely and displayed correctly for each transaction device record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_156
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify Device ID is generated uniquely and displayed correctly for each transaction device record.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "Transaction Device" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare multiple records. - Review Transaction Device grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Device ID is generated uniquely and displayed correctly for each transaction device record. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "Transaction Device" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Transaction Device grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Device Type is displayed correctly according to the registered device classification. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "Transaction Device" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Transaction Device grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - OS information is displayed correctly for registered transaction devices. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "Transaction Device" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review Transaction Device grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Device Model is displayed correctly according to device registration information. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "Transaction Device" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify masking pattern. - Verify PII fields are masked for restricted role and readable for authorized role only. Data Validation: - Compare with source records. - Verify PII fields are masked for restricted role and readable for authorized role only. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - Attempt access with unauthorized role and verify access is denied without exposing data. System Behaviour: - IMEI/Device Fingerprint information is displayed in masked format to protect sensitive device data. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "Transaction Device" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with customer records. - Review Transaction Device grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer IDs displayed against each device are correctly mapped to registered customers. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior.
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
      });
  });

  test("Case ID:RDR_162 - Transaction Device → Verify devices linked to multiple customer IDs are identified correctly according to AML rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_162
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify devices linked to multiple customer IDs are identified correctly according to AML rules.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "Transaction Device" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source records. - Scroll through grid rows and verify sticky header remains visible. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Devices linked to multiple customer IDs are identified correctly according to AML rules. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_162] Transaction Device → Verify devices linked to multiple customer IDs are identified correctly according to AML rules.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer IDs');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer IDs');
      await rdrPage.expectAllCellsNonEmpty('Customer IDs');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectFirstRowLinkNavigates();
      });
  });

  test("Case ID:RDR_163 - Transaction Device → Verify Customer Count value in device details matches the number of linked customers.", async ({ testData }) => {
    // Excel Test Case ID: RDR_163
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify Customer Count value in device details matches the number of linked customers.
    // FSD §4.3 — Detail Modal
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "Transaction Device" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review Customer Count field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer Count value in device details matches the number of linked customers. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_163] Transaction Device → Verify Customer Count value in device details matches the number of linked customers.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectFirstRowLinkNavigates();
      });
  });

  test("Case ID:RDR_164 - Transaction Device → Verify High Risk Device Flag is displayed correctly for devices identified as AML high-risk.", async ({ testData }) => {
    // Excel Test Case ID: RDR_164
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify High Risk Device Flag is displayed correctly for devices identified as AML high-risk.
    // FSD §4.3 — Detail Modal
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "Transaction Device" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Review High Risk Device Flag. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Compare with AML source data. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - High Risk Device Flag is displayed correctly for devices identified as AML high-risk. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_164] Transaction Device → Verify High Risk Device Flag is displayed correctly for devices identified as AML high-risk.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Risk Level');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Risk Level');
      await rdrPage.expectAllCellsNonEmpty('Risk Level');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_165 - Transaction Device → Verify High Risk Reason is displayed correctly for flagged devices.", async ({ testData }) => {
    // Excel Test Case ID: RDR_165
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify High Risk Reason is displayed correctly for flagged devices.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "Transaction Device" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Review High Risk Reason field. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Review High Risk Reason field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - High Risk Reason is displayed correctly for flagged devices. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_165] Transaction Device → Verify High Risk Reason is displayed correctly for flagged devices.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Risk Level');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Risk Level');
      await rdrPage.expectAllCellsNonEmpty('Risk Level');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_166 - Transaction Device → Verify Rooted Device Flag is displayed correctly when a device is identified as rooted or jailbroken.", async ({ testData }) => {
    // Excel Test Case ID: RDR_166
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify Rooted Device Flag is displayed correctly when a device is identified as rooted or jailbroken.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "Transaction Device" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Rooted Device Flag is displayed correctly when a device is identified as rooted or jailbroken. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_166] Transaction Device → Verify Rooted Device Flag is displayed correctly when a device is identified as rooted or jailbroken.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_167 - Transaction Device → Verify Remote Access App Flag is displayed correctly when remote access applications are detected.", async ({ testData }) => {
    // Excel Test Case ID: RDR_167
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify Remote Access App Flag is displayed correctly when remote access applications are detected.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "Transaction Device" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Remote Access App Flag is displayed correctly when remote access applications are detected. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_167] Transaction Device → Verify Remote Access App Flag is displayed correctly when remote access applications are detected.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_168 - Transaction Device → Verify Proxy/VPN Usage Flag is displayed correctly for devices using proxy or VPN connections.", async ({ testData }) => {
    // Excel Test Case ID: RDR_168
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify Proxy/VPN Usage Flag is displayed correctly for devices using proxy or VPN connections.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "Transaction Device" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - Attempt access with unauthorized role and verify access is denied without exposing data. System Behaviour: - Proxy/VPN Usage Flag is displayed correctly for devices using proxy or VPN connections. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_168] Transaction Device → Verify Proxy/VPN Usage Flag is displayed correctly for devices using proxy or VPN connections.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_169 - Transaction Device → Verify View action opens complete transaction device details including AML risk indicators and device fingerprint information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_169
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify View action opens complete transaction device details including AML risk indicators and device fingerprint information.
    // FSD §4.3 — Detail Modal
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "Transaction Device" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete transaction device details including AML risk indicators and device fingerprint information. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_169] Transaction Device → Verify View action opens complete transaction device details including AML risk indicators and device fingerprint information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Risk Level');
      await rdrPage.expectAllCellsNonEmpty('Risk Level');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_170 - Transaction Device → Verify search functionality using Device ID and retrieve the correct device record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_170
    // Excel Scenario: Cards & Instruments → Transaction Device → Verify search functionality using Device ID and retrieve the correct device record.
    // FSD §4.1 — Toolbar
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Cards & Instruments" from the Reference Data Register sidebar. → Select master tab "Transaction Device" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter Device ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Enter Device ID in search field. - Enter a valid search value and verify matching records are displayed. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality using Device ID and retrieve the correct device record. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_170] Transaction Device → Verify search functionality using Device ID and retrieve the correct device record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Cards & Instruments → Transaction Device');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('field');
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });
  });

  test.describe("Relationships & Related Parties → Beneficial Owner", () => {
  test("Case ID:RDR_171 - Beneficial Owner → Verify BO ID is generated uniquely and displayed correctly for every beneficial owner record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_171
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify BO ID is generated uniquely and displayed correctly for every beneficial owner record.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare all records. - Review Beneficial Owner grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - BO ID is generated uniquely and displayed correctly for every beneficial owner record. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with Customer Master records. - Scroll through grid rows and verify sticky header remains visible. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer ID displayed against each beneficial owner record matches the linked customer/entity record. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_172] Beneficial Owner → Verify Customer ID displayed against each beneficial owner record matches the linked customer/entity record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_173 - Beneficial Owner → Verify Beneficial Owner Full Name is displayed in masked format according to PII masking requirements.", async ({ testData }) => {
    // Excel Test Case ID: RDR_173
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify Beneficial Owner Full Name is displayed in masked format according to PII masking requirements.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify masking pattern. - Verify PII fields are masked for restricted role and readable for authorized role only. Data Validation: - Compare with source data. - Verify PII fields are masked for restricted role and readable for authorized role only. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Beneficial Owner Full Name is displayed in masked format according to PII masking requirements. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source records. - Review Beneficial Owner grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Nationality is displayed correctly for each beneficial owner. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review Country of Residence column. - Compare with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Country of Residence is displayed correctly according to beneficial owner profile information. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review Beneficial Owner grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - ID Type values are displayed correctly according to the identification documents maintained for the beneficial owner. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review Beneficial Owner grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Ownership Percentage is displayed correctly for beneficial owners with direct ownership stake. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review Beneficial Owner grid fields and verify displayed values are populated. - Compare selected row values with source snapshot and verify consistency. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Beneficial owners meeting regulatory ownership thresholds are displayed correctly. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Beneficial Owner grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Control Type values are displayed correctly according to beneficial ownership/control relationship. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with screening records. - Review Beneficial Owner grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Watchlist Flag is displayed correctly for beneficial owners identified on internal or external watchlists. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Locate watchlisted record. - Review Beneficial Owner grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Beneficial owners with Watchlist Flag = Yes are highlighted appropriately for AML review. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_181] Beneficial Owner → Verify beneficial owners with Watchlist Flag = Yes are highlighted appropriately for AML review.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectAllCellsNonEmpty('Ownership %');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_182 - Beneficial Owner → Verify search functionality using BO ID retrieves the correct beneficial owner record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_182
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify search functionality using BO ID retrieves the correct beneficial owner record.
    // FSD §4.1 — Toolbar
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter BO ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Enter BO ID in search field. - Enter a valid search value and verify matching records are displayed. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality using BO ID retrieves the correct beneficial owner record. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_182] Beneficial Owner → Verify search functionality using BO ID retrieves the correct beneficial owner record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectAllCellsNonEmpty('Ownership %');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_183 - Beneficial Owner → Verify search functionality using Customer ID retrieves all associated beneficial owners.", async ({ testData }) => {
    // Excel Test Case ID: RDR_183
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify search functionality using Customer ID retrieves all associated beneficial owners.
    // FSD §4.1 — Toolbar
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter Customer ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Enter Customer ID in search field. - Enter a valid search value and verify matching records are displayed. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality using Customer ID retrieves all associated beneficial owners. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_183] Beneficial Owner → Verify search functionality using Customer ID retrieves all associated beneficial owners.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectAllCellsNonEmpty('Ownership %');
      });
  });

  test("Case ID:RDR_184 - Beneficial Owner → Verify View action opens complete beneficial owner details including ownership, control and AML screening information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_184
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify View action opens complete beneficial owner details including ownership, control and AML screening information.
    // FSD §4.3 — Detail Modal
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify PEP indicators are shown where applicable and align with source status. - Verify sanctions flags are displayed accurately for matched records. Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete beneficial owner details including ownership, control and AML screening information. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_184] Beneficial Owner → Verify View action opens complete beneficial owner details including ownership, control and AML screening information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Ownership %');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectAllCellsNonEmpty('Ownership %');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_185 - Beneficial Owner → Verify PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method are displayed correctly in the Beneficial Owner detail screen.", async ({ testData }) => {
    // Excel Test Case ID: RDR_185
    // Excel Scenario: Relationships & Related Parties → Beneficial Owner → Verify PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method are displayed correctly in the Beneficial Owner detail screen.
    // FSD §4.3 — Detail Modal
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Review PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method fields. - Verify PEP indicators are shown where applicable and align with source status. Data Validation: - Review PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method fields. - Compare with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method are displayed correctly in the Beneficial Owner detail screen. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_185] Beneficial Owner → Verify PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method are displayed correctly in the Beneficial Owner detail screen.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Beneficial Owner');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectAllCellsNonEmpty('Ownership %');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });
  });

  test.describe("Relationships & Related Parties → Related Parties Network", () => {
  test("Case ID:RDR_186 - Related Parties Network → Verify Relationship ID is generated uniquely and displayed correctly for every relationship record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_186
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify Relationship ID is generated uniquely and displayed correctly for every relationship record.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "Related Parties" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare all records. - Review Related Parties Network grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Relationship ID is generated uniquely and displayed correctly for every relationship record. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "Related Parties" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source data. - Review Related Parties Network grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Entity1 Type is displayed correctly according to the source entity classification. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "Related Parties" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with Customer Master/BO records. - Review Related Parties Network grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Entity1 ID is displayed correctly and mapped to the appropriate customer or beneficial owner record. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "Related Parties" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source data. - Scroll through grid rows and verify sticky header remains visible. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Entity2 Type is displayed correctly according to the linked entity classification. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_189] Related Parties Network → Verify Entity2 Type is displayed correctly according to the linked entity classification.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Entity2 Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Entity2 Type');
      await rdrPage.expectAllCellsNonEmpty('Entity2 Type');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectFirstRowLinkNavigates();
      });
  });

  test("Case ID:RDR_190 - Related Parties Network → Verify Entity2 ID is displayed correctly and linked to the appropriate target entity record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_190
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify Entity2 ID is displayed correctly and linked to the appropriate target entity record.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "Related Parties" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with linked records. - Scroll through grid rows and verify sticky header remains visible. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Entity2 ID is displayed correctly and linked to the appropriate target entity record. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_190] Related Parties Network → Verify Entity2 ID is displayed correctly and linked to the appropriate target entity record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Entity2 ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Entity2 ID');
      await rdrPage.expectAllCellsNonEmpty('Entity2 ID');
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_191 - Related Parties Network → Verify Relationship Type values are displayed correctly according to relationship classification maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_191
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify Relationship Type values are displayed correctly according to relationship classification maintained in source systems.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "Related Parties" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review Related Parties Network grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Relationship Type values are displayed correctly according to relationship classification maintained in source systems. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "Related Parties" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source data. - Review Related Parties Network grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Subtype values are displayed correctly according to the specific relationship category. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "Related Parties" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review Related Parties Network grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Ownership Percentage is displayed correctly for ownership-based relationships. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "Related Parties" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review Related Parties Network grid fields and verify displayed values are populated. - Compare selected row values with source snapshot and verify consistency. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Ownership relationships above regulatory thresholds are displayed correctly. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "Related Parties" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source records. - Review Related Parties Network grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Valid From date is displayed correctly and reflects the effective start date of the relationship. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior.
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
    // FSD §4.3 — Detail Modal
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "Related Parties" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Review PEP Flag field. - Verify PEP indicators are shown where applicable and align with source status. Data Validation: - Review PEP Flag field. - Compare with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - PEP Flag is displayed correctly in relationship details when the relationship involves a politically exposed person. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_196] Related Parties Network → Verify PEP Flag is displayed correctly in relationship details when the relationship involves a politically exposed person.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectAllCellsNonEmpty('Ownership %');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_197 - Related Parties Network → Verify Risk Flag is displayed correctly for AML-risk relationships.", async ({ testData }) => {
    // Excel Test Case ID: RDR_197
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify Risk Flag is displayed correctly for AML-risk relationships.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "Related Parties" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Review Risk Flag field. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Review Risk Flag field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Risk Flag is displayed correctly for AML-risk relationships. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_197] Related Parties Network → Verify Risk Flag is displayed correctly for AML-risk relationships.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectAllCellsNonEmpty('Ownership %');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_198 - Related Parties Network → Verify Verified Flag is displayed correctly for validated relationship records.", async ({ testData }) => {
    // Excel Test Case ID: RDR_198
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify Verified Flag is displayed correctly for validated relationship records.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "Related Parties" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review Verified Flag field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Verified Flag is displayed correctly for validated relationship records. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_198] Related Parties Network → Verify Verified Flag is displayed correctly for validated relationship records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectAllCellsNonEmpty('Ownership %');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_199 - Related Parties Network → Verify search functionality retrieves the correct relationship record using Relationship ID.", async ({ testData }) => {
    // Excel Test Case ID: RDR_199
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify search functionality retrieves the correct relationship record using Relationship ID.
    // FSD §4.1 — Toolbar
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "Related Parties" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter Rel ID in search box. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality retrieves the correct relationship record using Relationship ID. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_199] Related Parties Network → Verify search functionality retrieves the correct relationship record using Relationship ID.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectAllCellsNonEmpty('Ownership %');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsNoResults();
      });
  });

  test("Case ID:RDR_200 - Related Parties Network → Verify View action opens complete relationship details including entity mapping, ownership information and AML indicators.", async ({ testData }) => {
    // Excel Test Case ID: RDR_200
    // Excel Scenario: Relationships & Related Parties → Related Parties Network → Verify View action opens complete relationship details including entity mapping, ownership information and AML indicators.
    // FSD §4.3 — Detail Modal
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Relationships & Parties" from the Reference Data Register sidebar. → Select master tab "Related Parties" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify PEP indicators are shown where applicable and align with source status. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete relationship details including entity mapping, ownership information and AML indicators. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_200] Related Parties Network → Verify View action opens complete relationship details including entity mapping, ownership information and AML indicators.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Related Parties Network');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Ownership %');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Ownership %');
      await rdrPage.expectAllCellsNonEmpty('Ownership %');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });
  });

  test.describe("Relationships & Related Parties → Non-Customer Master", () => {
  test("Case ID:RDR_201 - Non-Customer Master → Verify Non-Customer ID is generated uniquely and displayed correctly for every non-customer record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_201
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify Non-Customer ID is generated uniquely and displayed correctly for every non-customer record.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare all records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Non-Customer ID is generated uniquely and displayed correctly for every non-customer record. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_201] Non-Customer Master → Verify Non-Customer ID is generated uniquely and displayed correctly for every non-customer record.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Non Cust ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Non Cust ID');
      await rdrPage.expectAllCellsNonEmpty('Non Cust ID');
      });
  });

  test("Case ID:RDR_202 - Non-Customer Master → Verify Full Name is displayed in masked format according to PII masking requirements.", async ({ testData }) => {
    // Excel Test Case ID: RDR_202
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify Full Name is displayed in masked format according to PII masking requirements.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify masking pattern. - Verify PII fields are masked for restricted role and readable for authorized role only. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Full Name is displayed in masked format according to PII masking requirements. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_202] Non-Customer Master → Verify Full Name is displayed in masked format according to PII masking requirements.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Full Name');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Full Name');
      await rdrPage.expectAllCellsNonEmpty('Full Name');
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_203 - Non-Customer Master → Verify Non-Customer Type is displayed correctly according to classification maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_203
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify Non-Customer Type is displayed correctly according to classification maintained in source systems.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Non-Customer Type is displayed correctly according to classification maintained in source systems. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior.
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
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_204 - Non-Customer Master → Verify Nationality is displayed correctly for each non-customer record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_204
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify Nationality is displayed correctly for each non-customer record.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Nationality is displayed correctly for each non-customer record. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior.
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
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_205 - Non-Customer Master → Verify Country of Residence is displayed correctly according to profile information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_205
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify Country of Residence is displayed correctly according to profile information.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Country of Residence column. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Country of Residence is displayed correctly according to profile information. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior.
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
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_206 - Non-Customer Master → Verify ID Type values are displayed correctly according to identification documents maintained for non-customers.", async ({ testData }) => {
    // Excel Test Case ID: RDR_206
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify ID Type values are displayed correctly according to identification documents maintained for non-customers.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - ID Type values are displayed correctly according to identification documents maintained for non-customers. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior.
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
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_207 - Non-Customer Master → Verify ID Number is displayed in masked format to protect sensitive identification information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_207
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify ID Number is displayed in masked format to protect sensitive identification information.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify masking pattern. - Verify PII fields are masked for restricted role and readable for authorized role only. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - Attempt access with unauthorized role and verify access is denied without exposing data. System Behaviour: - ID Number is displayed in masked format to protect sensitive identification information. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior.
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
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_208 - Non-Customer Master → Verify PEP Individual records are classified correctly and displayed with appropriate visual indicators.", async ({ testData }) => {
    // Excel Test Case ID: RDR_208
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify PEP Individual records are classified correctly and displayed with appropriate visual indicators.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Locate PEP_INDIVIDUAL record. - Verify PEP indicators are shown where applicable and align with source status. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Locate PEP_INDIVIDUAL record. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - PEP Individual records are classified correctly and displayed with appropriate visual indicators. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior.
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
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_209 - Non-Customer Master → Verify linked customer information is displayed correctly in detail view when a non-customer is associated with a bank customer.", async ({ testData }) => {
    // Excel Test Case ID: RDR_209
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify linked customer information is displayed correctly in detail view when a non-customer is associated with a bank customer.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Linked Customer ID field. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Linked customer information is displayed correctly in detail view when a non-customer is associated with a bank customer. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_209] Non-Customer Master → Verify linked customer information is displayed correctly in detail view when a non-customer is associated with a bank customer.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_210 - Non-Customer Master → Verify Relationship to Customer is displayed correctly in detail view.", async ({ testData }) => {
    // Excel Test Case ID: RDR_210
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify Relationship to Customer is displayed correctly in detail view.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Relationship to Customer field. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Relationship to Customer is displayed correctly in detail view. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_210] Non-Customer Master → Verify Relationship to Customer is displayed correctly in detail view.");
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
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_211 - Non-Customer Master → Verify PEP Flag is displayed correctly in the detail screen according to AML screening results.", async ({ testData }) => {
    // Excel Test Case ID: RDR_211
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify PEP Flag is displayed correctly in the detail screen according to AML screening results.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Review PEP Flag. - Verify PEP indicators are shown where applicable and align with source status. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - PEP Flag is displayed correctly in the detail screen according to AML screening results. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_211] Non-Customer Master → Verify PEP Flag is displayed correctly in the detail screen according to AML screening results.");
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
      await rdrPage.expectColumnVisible('Watchlist');
      await rdrPage.expectColumnIncludesValue('Watchlist', 'Yes');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_212 - Non-Customer Master → Verify Sanctions Flag is displayed correctly for sanctioned non-customer entities.", async ({ testData }) => {
    // Excel Test Case ID: RDR_212
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify Sanctions Flag is displayed correctly for sanctioned non-customer entities.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Review Sanctions Flag field. - Verify sanctions flags are displayed accurately for matched records. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Sanctions Flag field. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Sanctions Flag is displayed correctly for sanctioned non-customer entities. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_212] Non-Customer Master → Verify Sanctions Flag is displayed correctly for sanctioned non-customer entities.");
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
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_213 - Non-Customer Master → Verify Internal Watchlist Flag is displayed correctly for entities appearing on internal watchlists.", async ({ testData }) => {
    // Excel Test Case ID: RDR_213
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify Internal Watchlist Flag is displayed correctly for entities appearing on internal watchlists.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Internal Watchlist Flag is displayed correctly for entities appearing on internal watchlists. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_213] Non-Customer Master → Verify Internal Watchlist Flag is displayed correctly for entities appearing on internal watchlists.");
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
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_214 - Non-Customer Master → Verify search functionality retrieves the correct non-customer record using Non-Customer ID.", async ({ testData }) => {
    // Excel Test Case ID: RDR_214
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify search functionality retrieves the correct non-customer record using Non-Customer ID.
    // FSD §4.1 — Toolbar
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter Non Cust ID in search box. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter a valid search value and verify matching records are displayed. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality retrieves the correct non-customer record using Non-Customer ID. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_214] Non-Customer Master → Verify search functionality retrieves the correct non-customer record using Non-Customer ID.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('box');
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_215 - Non-Customer Master → Verify View action opens complete non-customer details including AML flags, relationship information and source details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_215
    // Excel Scenario: Relationships & Related Parties → Non-Customer Master → Verify View action opens complete non-customer details including AML flags, relationship information and source details.
    // FSD §4.3 — Detail Modal
    // Steps (14): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify PEP indicators are shown where applicable and align with source status. - Verify sanctions flags are displayed accurately for matched records. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete non-customer details including AML flags, relationship information and source details. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_215] Non-Customer Master → Verify View action opens complete non-customer details including AML flags, relationship information and source details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Relationships & Related Parties → Non-Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });
  });

  test.describe("Reference Masters → Customer Type Master", () => {
  test("Case ID:RDR_216 - Customer Type Master → Verify Customer Type records are displayed successfully in the Customer Type Master grid after data load.", async ({ testData }) => {
    // Excel Test Case ID: RDR_216
    // Excel Scenario: Reference Masters → Customer Type Master → Verify Customer Type records are displayed successfully in the Customer Type Master grid after data load.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review records displayed in grid. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer Type records are displayed successfully in the Customer Type Master grid after data load. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_216] Customer Type Master → Verify Customer Type records are displayed successfully in the Customer Type Master grid after data load.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_217 - Customer Type Master → Verify Customer Type Code is displayed correctly for each customer category maintained in the master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_217
    // Excel Scenario: Reference Masters → Customer Type Master → Verify Customer Type Code is displayed correctly for each customer category maintained in the master.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer Type Code is displayed correctly for each customer category maintained in the master. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer Type Name is displayed correctly according to configured customer classifications. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare records for duplicates. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer Type Code remains unique across all customer type records. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_219] Customer Type Master → Verify Customer Type Code remains unique across all customer type records.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectUniqueColumnValues('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_220 - Customer Type Master → Verify Segment ID is displayed uniquely for each customer type record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_220
    // Excel Scenario: Reference Masters → Customer Type Master → Verify Segment ID is displayed uniquely for each customer type record.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare all records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Segment ID is displayed uniquely for each customer type record. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior.
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
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter Customer Type Code in search field. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter Customer Type Code in search field. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality retrieves the correct customer type record using Customer Type Code. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_221] Customer Type Master → Verify search functionality retrieves the correct customer type record using Customer Type Code.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('field');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Status');
      });
  });

  test("Case ID:RDR_222 - Customer Type Master → Verify search functionality retrieves the correct customer type record using Customer Type Name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_222
    // Excel Scenario: Reference Masters → Customer Type Master → Verify search functionality retrieves the correct customer type record using Customer Type Name.
    // FSD §4.1 — Toolbar
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter customer type name in search field. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter customer type name in search field. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality retrieves the correct customer type record using Customer Type Name. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_222] Customer Type Master → Verify search functionality retrieves the correct customer type record using Customer Type Name.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Status');
      });
  });

  test("Case ID:RDR_223 - Customer Type Master → Verify View action opens complete customer type details including risk and CDD configuration fields.", async ({ testData }) => {
    // Excel Test Case ID: RDR_223
    // Excel Scenario: Reference Masters → Customer Type Master → Verify View action opens complete customer type details including risk and CDD configuration fields.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete customer type details including risk and CDD configuration fields. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_223] Customer Type Master → Verify View action opens complete customer type details including risk and CDD configuration fields.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_224 - Customer Type Master → Verify Customer Type Code displayed in UI matches the customer_type_code field defined in FSD.", async ({ testData }) => {
    // Excel Test Case ID: RDR_224
    // Excel Scenario: Reference Masters → Customer Type Master → Verify Customer Type Code displayed in UI matches the customer_type_code field defined in FSD.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Open customer type record. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer Type Code displayed in UI matches the customer_type_code field defined in FSD. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_224] Customer Type Master → Verify Customer Type Code displayed in UI matches the customer_type_code field defined in FSD.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_225 - Customer Type Master → Verify Customer Type Name displayed in UI matches the customer_type_name field maintained in source systems.", async ({ testData }) => {
    // Excel Test Case ID: RDR_225
    // Excel Scenario: Reference Masters → Customer Type Master → Verify Customer Type Name displayed in UI matches the customer_type_name field maintained in source systems.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Open customer type record. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Customer Type Name displayed in UI matches the customer_type_name field maintained in source systems. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_225] Customer Type Master → Verify Customer Type Name displayed in UI matches the customer_type_name field maintained in source systems.");
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
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_226 - Customer Type Master → Verify Risk Weight value is displayed correctly in customer type detail screen and matches source configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_226
    // Excel Scenario: Reference Masters → Customer Type Master → Verify Risk Weight value is displayed correctly in customer type detail screen and matches source configuration.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Review Risk Weight field. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Risk Weight field. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Risk Weight value is displayed correctly in customer type detail screen and matches source configuration. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_226] Customer Type Master → Verify Risk Weight value is displayed correctly in customer type detail screen and matches source configuration.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_227 - Customer Type Master → Verify CDD Level is displayed correctly according to configured due diligence rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_227
    // Excel Scenario: Reference Masters → Customer Type Master → Verify CDD Level is displayed correctly according to configured due diligence rules.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review CDD Level field. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - CDD Level is displayed correctly according to configured due diligence rules. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_227] Customer Type Master → Verify CDD Level is displayed correctly according to configured due diligence rules.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_228 - Customer Type Master → Verify Active Status is displayed correctly for customer types currently in use.", async ({ testData }) => {
    // Excel Test Case ID: RDR_228
    // Excel Scenario: Reference Masters → Customer Type Master → Verify Active Status is displayed correctly for customer types currently in use.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Active Status field. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Active Status is displayed correctly for customer types currently in use. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_228] Customer Type Master → Verify Active Status is displayed correctly for customer types currently in use.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_229 - Customer Type Master → Verify CSV export functionality exports all customer type records successfully.", async ({ testData }) => {
    // Excel Test Case ID: RDR_229
    // Excel Scenario: Reference Masters → Customer Type Master → Verify CSV export functionality exports all customer type records successfully.
    // FSD §11.1 — Export Formats
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click CSV export and verify export action completes for current filtered dataset. - Click Excel export and verify downloaded file headers match on-screen columns. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click CSV export and verify export action completes for current filtered dataset. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - CSV export functionality exports all customer type records successfully. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_229] Customer Type Master → Verify CSV export functionality exports all customer type records successfully.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.expectColumnVisible('downloaded file headers match on-screen');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectExcelExportReady();
      });
  });

  test("Case ID:RDR_230 - Customer Type Master → Verify Excel export functionality exports all customer type records successfully.", async ({ testData }) => {
    // Excel Test Case ID: RDR_230
    // Excel Scenario: Reference Masters → Customer Type Master → Verify Excel export functionality exports all customer type records successfully.
    // FSD §11.1 — Export Formats
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click CSV export and verify export action completes for current filtered dataset. - Click Excel export and verify downloaded file headers match on-screen columns. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click CSV export and verify export action completes for current filtered dataset. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Excel export functionality exports all customer type records successfully. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_230] Customer Type Master → Verify Excel export functionality exports all customer type records successfully.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Customer Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportExcel();
      await rdrPage.exportCsv();
      await rdrPage.expectColumnVisible('downloaded file headers match on-screen');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectExcelExportReady();
      });
  });
  });

  test.describe("Reference Masters → Product Master", () => {
  test("Case ID:RDR_231 - Product Master → Verify Product Master records are displayed successfully after CBS synchronization and all configured products are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_231
    // Excel Scenario: Reference Masters → Product Master → Verify Product Master records are displayed successfully after CBS synchronization and all configured products are visible in the grid.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "PRODUCT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Verify record count and displayed products. - Review Product Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Product Master records are displayed successfully after CBS synchronization and all configured products are visible in the grid. succeeds for Product Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_231] Product Master → Verify Product Master records are displayed successfully after CBS synchronization and all configured products are visible in the grid.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectAllCellsNonEmpty('Name');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridWithinConfiguredLimit();
      });
  });

  test("Case ID:RDR_232 - Product Master → Verify Product ID is displayed uniquely for every product maintained in the Product Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_232
    // Excel Scenario: Reference Masters → Product Master → Verify Product ID is displayed uniquely for every product maintained in the Product Master.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "PRODUCT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare all records. - Review Product Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Product ID is displayed uniquely for every product maintained in the Product Master. succeeds for Product Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "PRODUCT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Product Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Product Code is displayed correctly according to product configuration maintained in source systems. succeeds for Product Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "PRODUCT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source data. - Review Product Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Product Name is displayed correctly and matches the configured product description. succeeds for Product Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "PRODUCT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source data. - Review Product Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Product Category is displayed correctly according to configured business classification. succeeds for Product Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "PRODUCT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source data. - Review Product Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Product Type is displayed correctly according to the product setup maintained in the source system. succeeds for Product Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "PRODUCT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source records. - Review Product Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Entity Types applicable to the product are displayed correctly for AML and customer onboarding purposes. succeeds for Product Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "PRODUCT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source records. - Review Product Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Cross Border indicator is displayed correctly for products involving international transactions. succeeds for Product Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "PRODUCT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review Cross Border value. - Review Product Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Trade Finance products are marked as Cross Border where applicable. succeeds for Product Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "PRODUCT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source records. - Review Product Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Effective Date is displayed correctly and reflects the date from which the product became active. succeeds for Product Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "PRODUCT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Review Risk Rating field. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Review Risk Rating field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Risk Rating is displayed correctly in product detail view according to product risk configuration. succeeds for Product Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_241] Product Master → Verify Risk Rating is displayed correctly in product detail view according to product risk configuration.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_242 - Product Master → Verify goAML Product Type mapping is displayed correctly in product detail view for regulatory reporting purposes.", async ({ testData }) => {
    // Excel Test Case ID: RDR_242
    // Excel Scenario: Reference Masters → Product Master → Verify goAML Product Type mapping is displayed correctly in product detail view for regulatory reporting purposes.
    // FSD §4.3 — Detail Modal
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "PRODUCT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review goAML Product Type field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - GoAML Product Type mapping is displayed correctly in product detail view for regulatory reporting purposes. succeeds for Product Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_242] Product Master → Verify goAML Product Type mapping is displayed correctly in product detail view for regulatory reporting purposes.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_243 - Product Master → Verify search functionality retrieves the correct product record using Product Code or Product Name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_243
    // Excel Scenario: Reference Masters → Product Master → Verify search functionality retrieves the correct product record using Product Code or Product Name.
    // FSD §4.1 — Toolbar
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "PRODUCT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter search value. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Enter search value. - Enter a valid search value and verify matching records are displayed. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality retrieves the correct product record using Product Code or Product Name. succeeds for Product Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_243] Product Master → Verify search functionality retrieves the correct product record using Product Code or Product Name.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('value');
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Name');
      await rdrPage.expectAllCellsNonEmpty('Name');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_244 - Product Master → Verify View action opens complete product details including Product ID, Category, Risk Rating and goAML mapping.", async ({ testData }) => {
    // Excel Test Case ID: RDR_244
    // Excel Scenario: Reference Masters → Product Master → Verify View action opens complete product details including Product ID, Category, Risk Rating and goAML mapping.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "PRODUCT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete product details including Product ID, Category, Risk Rating and goAML mapping. succeeds for Product Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_244] Product Master → Verify View action opens complete product details including Product ID, Category, Risk Rating and goAML mapping.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_245 - Product Master → Verify CSV and Excel export functionality exports all Product Master records accurately.", async ({ testData }) => {
    // Excel Test Case ID: RDR_245
    // Excel Scenario: Reference Masters → Product Master → Verify CSV and Excel export functionality exports all Product Master records accurately.
    // FSD §11.1 — Export Formats
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "PRODUCT Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click CSV export and verify export action completes for current filtered dataset. - Click Excel export and verify downloaded file headers match on-screen columns. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Click CSV export and verify export action completes for current filtered dataset. - Scroll through grid rows and verify sticky header remains visible. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - CSV and Excel export functionality exports all Product Master records accurately. succeeds for Product Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_245] Product Master → Verify CSV and Excel export functionality exports all Product Master records accurately.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Product Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.exportExcel();
      await rdrPage.expectColumnVisible('downloaded file headers match on-screen');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectExcelExportReady();
      });
  });
  });

  test.describe("Reference Masters → Branch Master", () => {
  test("Case ID:RDR_246 - Branch Master → Verify Branch Master records are displayed successfully after CBS synchronization and all configured branches are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_246
    // Excel Scenario: Reference Masters → Branch Master → Verify Branch Master records are displayed successfully after CBS synchronization and all configured branches are visible in the grid.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "BRANCH Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Verify displayed records. - Review Branch Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Branch Master records are displayed successfully after CBS synchronization and all configured branches are visible in the grid. succeeds for Branch Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_246] Branch Master → Verify Branch Master records are displayed successfully after CBS synchronization and all configured branches are visible in the grid.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
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

  test("Case ID:RDR_247 - Branch Master → Verify Branch ID is displayed uniquely for every branch maintained in the Branch Master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_247
    // Excel Scenario: Reference Masters → Branch Master → Verify Branch ID is displayed uniquely for every branch maintained in the Branch Master.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "BRANCH Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare all displayed records. - Review Branch Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Branch ID is displayed uniquely for every branch maintained in the Branch Master. succeeds for Branch Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "BRANCH Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Branch Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Branch Code is displayed correctly according to the branch configuration maintained in CBS. succeeds for Branch Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "BRANCH Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Branch Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Branch Name is displayed correctly and matches the official branch name configured in source systems. succeeds for Branch Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "BRANCH Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - City information is displayed correctly according to branch location details. succeeds for Branch Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_250] Branch Master → Verify City information is displayed correctly according to branch location details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('City');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('City');
      await rdrPage.expectAllCellsNonEmpty('City');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_251 - Branch Master → Verify State information is displayed correctly according to branch location details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_251
    // Excel Scenario: Reference Masters → Branch Master → Verify State information is displayed correctly according to branch location details.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "BRANCH Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - State information is displayed correctly according to branch location details. succeeds for Branch Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_251] Branch Master → Verify State information is displayed correctly according to branch location details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('State');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('State');
      await rdrPage.expectAllCellsNonEmpty('State');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_252 - Branch Master → Verify Branch Type is displayed correctly according to configured branch classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_252
    // Excel Scenario: Reference Masters → Branch Master → Verify Branch Type is displayed correctly according to configured branch classification.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "BRANCH Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Branch Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Branch Type is displayed correctly according to configured branch classification. succeeds for Branch Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "BRANCH Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Review High Risk Zone column. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Compare values with source records. - Verify risk level values and labels are displayed consistently in grid and details. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - High Risk Zone indicator is displayed correctly for branches located in AML high-risk areas. succeeds for Branch Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "BRANCH Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review Branch Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Border Branch indicator is displayed correctly for branches operating near international borders. succeeds for Branch Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "BRANCH Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Branch Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Active Status is displayed correctly for operational branches. succeeds for Branch Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "BRANCH Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Branch Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - BSR Code is displayed correctly according to branch registration information. succeeds for Branch Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "BRANCH Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review IFSC Code field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - IFSC Code is displayed correctly in branch detail view according to FSD configuration. succeeds for Branch Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_257] Branch Master → Verify IFSC Code is displayed correctly in branch detail view according to FSD configuration.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_258 - Branch Master → Verify SWIFT/BIC Code is displayed correctly in branch detail view for cross-border identification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_258
    // Excel Scenario: Reference Masters → Branch Master → Verify SWIFT/BIC Code is displayed correctly in branch detail view for cross-border identification.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "BRANCH Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review SWIFT/BIC field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - SWIFT/BIC Code is displayed correctly in branch detail view for cross-border identification. succeeds for Branch Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_258] Branch Master → Verify SWIFT/BIC Code is displayed correctly in branch detail view for cross-border identification.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_259 - Branch Master → Verify search functionality retrieves the correct branch record using Branch ID, Code or Name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_259
    // Excel Scenario: Reference Masters → Branch Master → Verify search functionality retrieves the correct branch record using Branch ID, Code or Name.
    // FSD §4.1 — Toolbar
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "BRANCH Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter search value. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Enter search value. - Enter a valid search value and verify matching records are displayed. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality retrieves the correct branch record using Branch ID, Code or Name. succeeds for Branch Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_259] Branch Master → Verify search functionality retrieves the correct branch record using Branch ID, Code or Name.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('value');
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_260 - Branch Master → Verify View action opens complete branch details including Branch ID, Type, Country Code, High Risk Area Flag, IFSC and SWIFT information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_260
    // Excel Scenario: Reference Masters → Branch Master → Verify View action opens complete branch details including Branch ID, Type, Country Code, High Risk Area Flag, IFSC and SWIFT information.
    // FSD §4.3 — Detail Modal
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "BRANCH Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete branch details including Branch ID, Type, Country Code, High Risk Area Flag, IFSC and SWIFT information. succeeds for Branch Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_260] Branch Master → Verify View action opens complete branch details including Branch ID, Type, Country Code, High Risk Area Flag, IFSC and SWIFT information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Branch Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });
  });

  test.describe("Reference Masters → Channel Master", () => {
  test("Case ID:RDR_261 - Channel Master → Verify Channel Master records are displayed successfully after data synchronization and all configured channels are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_261
    // Excel Scenario: Reference Masters → Channel Master → Verify Channel Master records are displayed successfully after data synchronization and all configured channels are visible in the grid.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CHANNEL Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Verify displayed records. - Review Channel Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Channel Master records are displayed successfully after data synchronization and all configured channels are visible in the grid. succeeds for Channel Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_261] Channel Master → Verify Channel Master records are displayed successfully after data synchronization and all configured channels are visible in the grid.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
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

  test("Case ID:RDR_262 - Channel Master → Verify Channel ID is displayed uniquely for every channel record maintained in the master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_262
    // Excel Scenario: Reference Masters → Channel Master → Verify Channel ID is displayed uniquely for every channel record maintained in the master.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CHANNEL Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare all records. - Review Channel Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Channel ID is displayed uniquely for every channel record maintained in the master. succeeds for Channel Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CHANNEL Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review Channel Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Channel Code is displayed correctly according to the configured channel identifier. succeeds for Channel Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CHANNEL Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Channel Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Channel Name is displayed correctly according to the configured business channel name. succeeds for Channel Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CHANNEL Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Channel Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Channel Type is displayed correctly according to the channel classification maintained in source systems. succeeds for Channel Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CHANNEL Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Channel Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Status is displayed correctly and reflects the active/inactive state of the channel. succeeds for Channel Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CHANNEL Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review Channel Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Description field is displayed correctly and provides channel-specific AML/business context. succeeds for Channel Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CHANNEL Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Locate Branch record. - Review Channel Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Branch channel is classified as PHYSICAL and displayed correctly in the grid. succeeds for Channel Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_268] Channel Master → Verify Branch channel is classified as PHYSICAL and displayed correctly in the grid.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
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

  test("Case ID:RDR_269 - Channel Master → Verify Mobile Banking channel is classified as DIGITAL and displayed correctly.", async ({ testData }) => {
    // Excel Test Case ID: RDR_269
    // Excel Scenario: Reference Masters → Channel Master → Verify Mobile Banking channel is classified as DIGITAL and displayed correctly.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CHANNEL Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Locate Mobile Banking record. - Verify Type field. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Mobile Banking channel is classified as DIGITAL and displayed correctly. succeeds for Channel Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_269] Channel Master → Verify Mobile Banking channel is classified as DIGITAL and displayed correctly.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
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

  test("Case ID:RDR_270 - Channel Master → Verify UPI channel is classified as DIGITAL and displayed correctly for AML monitoring purposes.", async ({ testData }) => {
    // Excel Test Case ID: RDR_270
    // Excel Scenario: Reference Masters → Channel Master → Verify UPI channel is classified as DIGITAL and displayed correctly for AML monitoring purposes.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CHANNEL Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Locate UPI record. - Verify Type field. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - UPI channel is classified as DIGITAL and displayed correctly for AML monitoring purposes. succeeds for Channel Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_270] Channel Master → Verify UPI channel is classified as DIGITAL and displayed correctly for AML monitoring purposes.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
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

  test("Case ID:RDR_271 - Channel Master → Verify Risk Score Weight is displayed correctly in the channel detail screen and matches configured AML scoring rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_271
    // Excel Scenario: Reference Masters → Channel Master → Verify Risk Score Weight is displayed correctly in the channel detail screen and matches configured AML scoring rules.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CHANNEL Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Review Risk Score Weight field. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Review Risk Score Weight field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Risk Score Weight is displayed correctly in the channel detail screen and matches configured AML scoring rules. succeeds for Channel Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_271] Channel Master → Verify Risk Score Weight is displayed correctly in the channel detail screen and matches configured AML scoring rules.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_272 - Channel Master → Verify Cross Border Indicator is displayed correctly in channel detail view according to channel capabilities.", async ({ testData }) => {
    // Excel Test Case ID: RDR_272
    // Excel Scenario: Reference Masters → Channel Master → Verify Cross Border Indicator is displayed correctly in channel detail view according to channel capabilities.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CHANNEL Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review Cross Border field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Cross Border Indicator is displayed correctly in channel detail view according to channel capabilities. succeeds for Channel Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_272] Channel Master → Verify Cross Border Indicator is displayed correctly in channel detail view according to channel capabilities.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Cross Border');
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Cross Border');
      await rdrPage.expectAllCellsNonEmpty('Cross Border');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_273 - Channel Master → Verify goAML Channel Type mapping is displayed correctly in the channel detail screen.", async ({ testData }) => {
    // Excel Test Case ID: RDR_273
    // Excel Scenario: Reference Masters → Channel Master → Verify goAML Channel Type mapping is displayed correctly in the channel detail screen.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CHANNEL Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review goAML Channel Type field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - GoAML Channel Type mapping is displayed correctly in the channel detail screen. succeeds for Channel Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_273] Channel Master → Verify goAML Channel Type mapping is displayed correctly in the channel detail screen.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_274 - Channel Master → Verify search functionality retrieves the correct channel record using Channel Code or Channel Name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_274
    // Excel Scenario: Reference Masters → Channel Master → Verify search functionality retrieves the correct channel record using Channel Code or Channel Name.
    // FSD §4.1 — Toolbar
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CHANNEL Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter search value. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Enter search value. - Enter a valid search value and verify matching records are displayed. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality retrieves the correct channel record using Channel Code or Channel Name. succeeds for Channel Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_274] Channel Master → Verify search functionality retrieves the correct channel record using Channel Code or Channel Name.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Channel Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('value');
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Code');
      await rdrPage.expectAllCellsNonEmpty('Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_275 - Channel Master → Verify View action opens complete channel details including Channel Code, Type, Risk Weight, Cross Border Indicator and goAML mapping.", async ({ testData }) => {
    // Excel Test Case ID: RDR_275
    // Excel Scenario: Reference Masters → Channel Master → Verify View action opens complete channel details including Channel Code, Type, Risk Weight, Cross Border Indicator and goAML mapping.
    // FSD §4.3 — Detail Modal
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CHANNEL Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete channel details including Channel Code, Type, Risk Weight, Cross Border Indicator and goAML mapping. succeeds for Channel Master. - Application remains stable with no unexpected error behavior.
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
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });
  });

  test.describe("Reference Masters → Transaction Type Master", () => {
  test("Case ID:RDR_276 - Transaction Type Master → Verify Transaction Type Master records are displayed successfully after data synchronization and all configured transaction types are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_276
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify Transaction Type Master records are displayed successfully after data synchronization and all configured transaction types are visible in the grid.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Transaction Type Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review grid records. - Review Transaction Type Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Transaction Type Master records are displayed successfully after data synchronization and all configured transaction types are visible in the grid. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_276] Transaction Type Master → Verify Transaction Type Master records are displayed successfully after data synchronization and all configured transaction types are visible in the grid.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
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

  test("Case ID:RDR_277 - Transaction Type Master → Verify Transaction Type ID is displayed uniquely for every transaction type record maintained in the master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_277
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify Transaction Type ID is displayed uniquely for every transaction type record maintained in the master.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Transaction Type Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare all records. - Review Transaction Type Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Transaction Type ID is displayed uniquely for every transaction type record maintained in the master. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Transaction Type Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review Transaction Type Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Transaction Type Code is displayed correctly according to configured transaction definitions. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Transaction Type Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Transaction Type Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Transaction Type Name is displayed correctly according to business transaction definitions. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Transaction Type Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review Transaction Type Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Transaction Direction is displayed correctly and identifies whether the transaction is Credit, Debit or Both. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Transaction Type Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Transaction Type Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Cash Flag is displayed correctly for cash-based transaction types that are eligible for CTR reporting. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Transaction Type Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review Transaction Type Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Cross Border indicator is displayed correctly for international transaction types. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Transaction Type Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Review AML Risk column. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Compare with source configuration. - Verify risk level values and labels are displayed consistently in grid and details. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - AML Risk classification is displayed correctly according to AML risk assessment rules. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Transaction Type Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review Transaction Type Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - CTR Applicable indicator is displayed correctly for cash transactions subject to regulatory CTR thresholds. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Transaction Type Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Transaction Type Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Status is displayed correctly and reflects whether the transaction type is active for use. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Transaction Type Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review Transaction Type Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Description field is displayed correctly and provides AML/business context for the transaction type. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior.
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
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Transaction Type Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Review Risk Weight field. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Review Risk Weight field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Risk Weight is displayed correctly in the transaction type detail screen and matches AML scoring configuration. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_287] Transaction Type Master → Verify Risk Weight is displayed correctly in the transaction type detail screen and matches AML scoring configuration.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Risk Level');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Risk Level');
      await rdrPage.expectAllCellsNonEmpty('Risk Level');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_288 - Transaction Type Master → Verify goAML Transaction Type mapping is displayed correctly in the detail screen for STR reporting requirements.", async ({ testData }) => {
    // Excel Test Case ID: RDR_288
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify goAML Transaction Type mapping is displayed correctly in the detail screen for STR reporting requirements.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Transaction Type Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review goAML Transaction Type field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - GoAML Transaction Type mapping is displayed correctly in the detail screen for STR reporting requirements. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_288] Transaction Type Master → Verify goAML Transaction Type mapping is displayed correctly in the detail screen for STR reporting requirements.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_289 - Transaction Type Master → Verify search functionality retrieves the correct transaction type record using transaction code or name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_289
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify search functionality retrieves the correct transaction type record using transaction code or name.
    // FSD §4.1 — Toolbar
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Transaction Type Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter search value. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Enter search value. - Enter a valid search value and verify matching records are displayed. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality retrieves the correct transaction type record using transaction code or name. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_289] Transaction Type Master → Verify search functionality retrieves the correct transaction type record using transaction code or name.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('value');
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_290 - Transaction Type Master → Verify View action opens complete transaction type details including direction, risk weight, cash indicator, cross-border flag and goAML mapping.", async ({ testData }) => {
    // Excel Test Case ID: RDR_290
    // Excel Scenario: Reference Masters → Transaction Type Master → Verify View action opens complete transaction type details including direction, risk weight, cash indicator, cross-border flag and goAML mapping.
    // FSD §4.3 — Detail Modal
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Transaction Type Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete transaction type details including direction, risk weight, cash indicator, cross-border flag and goAML mapping. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_290] Transaction Type Master → Verify View action opens complete transaction type details including direction, risk weight, cash indicator, cross-border flag and goAML mapping.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Transaction Type Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Risk Level');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Risk Level');
      await rdrPage.expectAllCellsNonEmpty('Risk Level');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });
  });

  test.describe("Reference Masters → Currency Master", () => {
  test("Case ID:RDR_291 - Currency Master → Verify Currency Master records are displayed successfully after synchronization and all configured currencies are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_291
    // Excel Scenario: Reference Masters → Currency Master → Verify Currency Master records are displayed successfully after synchronization and all configured currencies are visible in the grid.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Verify displayed records. - Review Currency Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Currency Master records are displayed successfully after synchronization and all configured currencies are visible in the grid. succeeds for Currency Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_291] Currency Master → Verify Currency Master records are displayed successfully after synchronization and all configured currencies are visible in the grid.");
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

  test("Case ID:RDR_292 - Currency Master → Verify Currency Code (ISO 4217) is displayed correctly and uniquely for every currency record.", async ({ testData }) => {
    // Excel Test Case ID: RDR_292
    // Excel Scenario: Reference Masters → Currency Master → Verify Currency Code (ISO 4217) is displayed correctly and uniquely for every currency record.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare displayed values with source data. - Review Currency Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Currency Code (ISO 4217) is displayed correctly and uniquely for every currency record. succeeds for Currency Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare displayed values with source data. - Review Currency Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Currency Name is displayed correctly according to the configured currency master data. succeeds for Currency Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with configured records. - Review Currency Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Currency Symbol is displayed correctly for each configured currency. succeeds for Currency Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review Country column. - Compare displayed values with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Country Code is displayed correctly against the corresponding currency. succeeds for Currency Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Currency Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Status is displayed correctly and reflects whether the currency is active in the system. succeeds for Currency Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Locate INR record. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - INR currency record is displayed correctly with all associated details. succeeds for Currency Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_297] Currency Master → Verify INR currency record is displayed correctly with all associated details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_298 - Currency Master → Verify USD currency record is displayed correctly with all associated details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_298
    // Excel Scenario: Reference Masters → Currency Master → Verify USD currency record is displayed correctly with all associated details.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Locate USD record. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - USD currency record is displayed correctly with all associated details. succeeds for Currency Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_298] Currency Master → Verify USD currency record is displayed correctly with all associated details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_299 - Currency Master → Verify AED currency record is displayed correctly with all associated details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_299
    // Excel Scenario: Reference Masters → Currency Master → Verify AED currency record is displayed correctly with all associated details.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Locate AED record. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - AED currency record is displayed correctly with all associated details. succeeds for Currency Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_299] Currency Master → Verify AED currency record is displayed correctly with all associated details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_300 - Currency Master → Verify Search functionality retrieves the correct currency record using Currency Code.", async ({ testData }) => {
    // Excel Test Case ID: RDR_300
    // Excel Scenario: Reference Masters → Currency Master → Verify Search functionality retrieves the correct currency record using Currency Code.
    // FSD §4.1 — Toolbar
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter currency code in search box. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality retrieves the correct currency record using Currency Code. succeeds for Currency Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_300] Currency Master → Verify Search functionality retrieves the correct currency record using Currency Code.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('box');
      await rdrPage.expectColumnVisible('ISO Code');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('ISO Code');
      await rdrPage.expectAllCellsNonEmpty('ISO Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsNoResults();
      });
  });

  test("Case ID:RDR_301 - Currency Master → Verify Search functionality retrieves the correct currency record using Currency Name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_301
    // Excel Scenario: Reference Masters → Currency Master → Verify Search functionality retrieves the correct currency record using Currency Name.
    // FSD §4.1 — Toolbar
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Execute search. - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality retrieves the correct currency record using Currency Name. succeeds for Currency Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_301] Currency Master → Verify Search functionality retrieves the correct currency record using Currency Name.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsNoResults();
      await rdrPage.expectAllCellsNonEmpty('Status');
      });
  });

  test("Case ID:RDR_302 - Currency Master → Verify View action opens complete currency details including Currency Code, Name, Reporting Currency flag and AML attributes.", async ({ testData }) => {
    // Excel Test Case ID: RDR_302
    // Excel Scenario: Reference Masters → Currency Master → Verify View action opens complete currency details including Currency Code, Name, Reporting Currency flag and AML attributes.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete currency details including Currency Code, Name, Reporting Currency flag and AML attributes. succeeds for Currency Master. - Application remains stable with no unexpected error behavior.
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
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_303 - Currency Master → Verify Reporting Currency flag is displayed correctly in the currency detail view according to bank reporting configuration.", async ({ testData }) => {
    // Excel Test Case ID: RDR_303
    // Excel Scenario: Reference Masters → Currency Master → Verify Reporting Currency flag is displayed correctly in the currency detail view according to bank reporting configuration.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review Reporting Currency field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Reporting Currency flag is displayed correctly in the currency detail view according to bank reporting configuration. succeeds for Currency Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_303] Currency Master → Verify Reporting Currency flag is displayed correctly in the currency detail view according to bank reporting configuration.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_304 - Currency Master → Verify High Risk Currency flag is displayed correctly in detail view for AML monitoring and risk scoring purposes.", async ({ testData }) => {
    // Excel Test Case ID: RDR_304
    // Excel Scenario: Reference Masters → Currency Master → Verify High Risk Currency flag is displayed correctly in detail view for AML monitoring and risk scoring purposes.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify High Risk Currency field. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Verify High Risk Currency field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - High Risk Currency flag is displayed correctly in detail view for AML monitoring and risk scoring purposes. succeeds for Currency Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_304] Currency Master → Verify High Risk Currency flag is displayed correctly in detail view for AML monitoring and risk scoring purposes.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('High Risk Flag');
      await rdrPage.expectAllCellsNonEmpty('High Risk Flag');
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_305 - Currency Master → Verify Currency Master data can be exported successfully through Excel and CSV options without data loss.", async ({ testData }) => {
    // Excel Test Case ID: RDR_305
    // Excel Scenario: Reference Masters → Currency Master → Verify Currency Master data can be exported successfully through Excel and CSV options without data loss.
    // FSD §11.1 — Export Formats
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click CSV export. - Click Excel export. - Validate exported records. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Validate exported records. - Click CSV export and verify export action completes for current filtered dataset. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Currency Master data can be exported successfully through Excel and CSV options without data loss. succeeds for Currency Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_305] Currency Master → Verify Currency Master data can be exported successfully through Excel and CSV options without data loss.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Currency Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.exportExcel();
      await rdrPage.expectColumnVisible('downloaded file headers match on-screen');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Verify displayed records. - Review FX Rates Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - FX Rate records are displayed successfully after synchronization and all configured exchange rates are visible in the grid. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_306] FX Rates Master → Verify FX Rate records are displayed successfully after synchronization and all configured exchange rates are visible in the grid.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
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

  test("Case ID:RDR_307 - FX Rates Master → Verify Rate ID is displayed uniquely for every FX rate record maintained in the master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_307
    // Excel Scenario: Reference Masters → FX Rates Master → Verify Rate ID is displayed uniquely for every FX rate record maintained in the master.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare all records. - Review FX Rates Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Rate ID is displayed uniquely for every FX rate record maintained in the master. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review FX Rates Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Source Currency (From Currency) is displayed correctly according to configured exchange rate mapping. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review FX Rates Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Target Currency (To Currency) is displayed correctly according to exchange rate configuration. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review FX Rates Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Exchange Rate value is displayed correctly and matches the configured market exchange rate. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source records. - Review FX Rates Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Rate Date is displayed correctly for each exchange rate record. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review FX Rates Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Rate Type is displayed correctly according to the configured exchange rate category. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review FX Rates Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Effective From date and time are displayed correctly according to the validity period of the exchange rate. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review FX Rates Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Effective To date and time are displayed correctly according to the validity period of the exchange rate. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - USD to INR exchange rate record is displayed correctly with all associated details. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_315] FX Rates Master → Verify USD to INR exchange rate record is displayed correctly with all associated details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_316 - FX Rates Master → Verify AED to INR exchange rate record is displayed correctly with all associated details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_316
    // Excel Scenario: Reference Masters → FX Rates Master → Verify AED to INR exchange rate record is displayed correctly with all associated details.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Verify displayed values. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - AED to INR exchange rate record is displayed correctly with all associated details. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_316] FX Rates Master → Verify AED to INR exchange rate record is displayed correctly with all associated details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_317 - FX Rates Master → Verify EUR to INR exchange rate record is displayed correctly with all associated details.", async ({ testData }) => {
    // Excel Test Case ID: RDR_317
    // Excel Scenario: Reference Masters → FX Rates Master → Verify EUR to INR exchange rate record is displayed correctly with all associated details.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Verify displayed values. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - EUR to INR exchange rate record is displayed correctly with all associated details. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_317] FX Rates Master → Verify EUR to INR exchange rate record is displayed correctly with all associated details.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_318 - FX Rates Master → Verify Search functionality retrieves the correct FX rate record using Rate ID or Currency Code.", async ({ testData }) => {
    // Excel Test Case ID: RDR_318
    // Excel Scenario: Reference Masters → FX Rates Master → Verify Search functionality retrieves the correct FX rate record using Rate ID or Currency Code.
    // FSD §4.1 — Toolbar
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter search value. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Enter search value. - Enter a valid search value and verify matching records are displayed. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality retrieves the correct FX rate record using Rate ID or Currency Code. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_318] FX Rates Master → Verify Search functionality retrieves the correct FX rate record using Rate ID or Currency Code.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('value');
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Type');
      await rdrPage.expectAllCellsNonEmpty('Type');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_319 - FX Rates Master → Verify View action opens complete FX rate details including currencies, exchange rate, effective date and source information.", async ({ testData }) => {
    // Excel Test Case ID: RDR_319
    // Excel Scenario: Reference Masters → FX Rates Master → Verify View action opens complete FX rate details including currencies, exchange rate, effective date and source information.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete FX rate details including currencies, exchange rate, effective date and source information. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_319] FX Rates Master → Verify View action opens complete FX rate details including currencies, exchange rate, effective date and source information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
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
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_320 - FX Rates Master → Verify CSV and Excel export functionality exports all displayed FX rate records correctly without data mismatch.", async ({ testData }) => {
    // Excel Test Case ID: RDR_320
    // Excel Scenario: Reference Masters → FX Rates Master → Verify CSV and Excel export functionality exports all displayed FX rate records correctly without data mismatch.
    // FSD §11.1 — Export Formats
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. …
    // Expected: Functional Validation: - Click CSV export. - Click Excel export. - Click CSV export and verify export action completes for current filtered dataset. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Click CSV export and verify export action completes for current filtered dataset. - Scroll through grid rows and verify sticky header remains visible. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - CSV and Excel export functionality exports all displayed FX rate records correctly without data mismatch. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_320] FX Rates Master → Verify CSV and Excel export functionality exports all displayed FX rate records correctly without data mismatch.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → FX Rates Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.exportExcel();
      await rdrPage.expectColumnVisible('downloaded file headers match on-screen');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
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
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "INDUSTRY_CODE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Verify displayed records count and details. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Industry Code Master records are displayed successfully after synchronization and all configured industry records are visible in the grid. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_321] Industry Code Master → Verify Industry Code Master records are displayed successfully after synchronization and all configured industry records are visible in the grid.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Industry Code');
      await rdrPage.expectAllCellsNonEmpty('Industry Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_322 - Industry Code Master → Verify Industry Master ID is displayed uniquely for every industry record maintained in the system.", async ({ testData }) => {
    // Excel Test Case ID: RDR_322
    // Excel Scenario: Reference Masters → Industry Code Master → Verify Industry Master ID is displayed uniquely for every industry record maintained in the system.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "INDUSTRY_CODE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare all displayed records. - Review Industry Code Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Industry Master ID is displayed uniquely for every industry record maintained in the system. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "INDUSTRY_CODE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Industry Code Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Code Type is displayed correctly according to the configured classification standard used by the organization. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "INDUSTRY_CODE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review Industry Code Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Industry Code is displayed correctly and matches the configured NIC/industry classification code. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "INDUSTRY_CODE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Industry Code Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Industry Name is displayed correctly according to the configured industry classification. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "INDUSTRY_CODE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Industry Code Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Industry Description is displayed correctly and provides business/AML context for the industry. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "INDUSTRY_CODE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Banking and Financial Intermediation industry record is displayed correctly with its associated code and description. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_327] Industry Code Master → Verify Banking and Financial Intermediation industry record is displayed correctly with its associated code and description.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Industry Code');
      await rdrPage.expectAllCellsNonEmpty('Industry Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_328 - Industry Code Master → Verify Jewellery industry record is displayed correctly as a cash-intensive business sector used for AML monitoring.", async ({ testData }) => {
    // Excel Test Case ID: RDR_328
    // Excel Scenario: Reference Masters → Industry Code Master → Verify Jewellery industry record is displayed correctly as a cash-intensive business sector used for AML monitoring.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "INDUSTRY_CODE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Jewellery industry record is displayed correctly as a cash-intensive business sector used for AML monitoring. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_328] Industry Code Master → Verify Jewellery industry record is displayed correctly as a cash-intensive business sector used for AML monitoring.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Industry Code');
      await rdrPage.expectAllCellsNonEmpty('Industry Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_329 - Industry Code Master → Verify Restaurant and Mobile Food Services industry record is displayed correctly as per configured industry classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_329
    // Excel Scenario: Reference Masters → Industry Code Master → Verify Restaurant and Mobile Food Services industry record is displayed correctly as per configured industry classification.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "INDUSTRY_CODE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Restaurant and Mobile Food Services industry record is displayed correctly as per configured industry classification. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_329] Industry Code Master → Verify Restaurant and Mobile Food Services industry record is displayed correctly as per configured industry classification.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Industry Code');
      await rdrPage.expectAllCellsNonEmpty('Industry Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_330 - Industry Code Master → Verify Risk Rating field is displayed correctly in the industry detail screen according to AML risk scoring rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_330
    // Excel Scenario: Reference Masters → Industry Code Master → Verify Risk Rating field is displayed correctly in the industry detail screen according to AML risk scoring rules.
    // FSD §4.3 — Detail Modal
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "INDUSTRY_CODE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Review Risk Rating field. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Review Risk Rating field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Risk Rating field is displayed correctly in the industry detail screen according to AML risk scoring rules. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_330] Industry Code Master → Verify Risk Rating field is displayed correctly in the industry detail screen according to AML risk scoring rules.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Industry Code');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Industry Code');
      await rdrPage.expectAllCellsNonEmpty('Industry Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_331 - Industry Code Master → Verify High Risk Flag is displayed correctly for industries classified as high-risk sectors for AML purposes.", async ({ testData }) => {
    // Excel Test Case ID: RDR_331
    // Excel Scenario: Reference Masters → Industry Code Master → Verify High Risk Flag is displayed correctly for industries classified as high-risk sectors for AML purposes.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "INDUSTRY_CODE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Review High Risk Flag field. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Review High Risk Flag field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - High Risk Flag is displayed correctly for industries classified as high-risk sectors for AML purposes. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_331] Industry Code Master → Verify High Risk Flag is displayed correctly for industries classified as high-risk sectors for AML purposes.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Industry Code');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Industry Code');
      await rdrPage.expectAllCellsNonEmpty('Industry Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_332 - Industry Code Master → Verify FATF Sector classification is displayed correctly in the industry detail view according to regulatory mapping.", async ({ testData }) => {
    // Excel Test Case ID: RDR_332
    // Excel Scenario: Reference Masters → Industry Code Master → Verify FATF Sector classification is displayed correctly in the industry detail view according to regulatory mapping.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "INDUSTRY_CODE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review FATF Sector field. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - FATF Sector classification is displayed correctly in the industry detail view according to regulatory mapping. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_332] Industry Code Master → Verify FATF Sector classification is displayed correctly in the industry detail view according to regulatory mapping.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Industry Code');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Industry Code');
      await rdrPage.expectAllCellsNonEmpty('Industry Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_333 - Industry Code Master → Verify Search functionality retrieves the correct industry record using Industry Code.", async ({ testData }) => {
    // Excel Test Case ID: RDR_333
    // Excel Scenario: Reference Masters → Industry Code Master → Verify Search functionality retrieves the correct industry record using Industry Code.
    // FSD §4.1 — Toolbar
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "INDUSTRY_CODE" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter Industry Code in search field. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Enter Industry Code in search field. - Enter a valid search value and verify matching records are displayed. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality retrieves the correct industry record using Industry Code. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_333] Industry Code Master → Verify Search functionality retrieves the correct industry record using Industry Code.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('field');
      await rdrPage.expectColumnVisible('Industry Code');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Industry Code');
      await rdrPage.expectAllCellsNonEmpty('Industry Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_334 - Industry Code Master → Verify Search functionality retrieves the correct industry record using Industry Name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_334
    // Excel Scenario: Reference Masters → Industry Code Master → Verify Search functionality retrieves the correct industry record using Industry Name.
    // FSD §4.1 — Toolbar
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "INDUSTRY_CODE" and wait for grid content to load. …
    // Expected: Functional Validation: - Execute search. - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality retrieves the correct industry record using Industry Name. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_334] Industry Code Master → Verify Search functionality retrieves the correct industry record using Industry Name.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.expectColumnVisible('Industry Code');
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Industry Code');
      await rdrPage.expectAllCellsNonEmpty('Industry Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsNoResults();
      });
  });

  test("Case ID:RDR_335 - Industry Code Master → Verify View action opens complete industry details including Industry Code, Name, Risk Rating, High Risk Flag and FATF Sector classification.", async ({ testData }) => {
    // Excel Test Case ID: RDR_335
    // Excel Scenario: Reference Masters → Industry Code Master → Verify View action opens complete industry details including Industry Code, Name, Risk Rating, High Risk Flag and FATF Sector classification.
    // FSD §4.3 — Detail Modal
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "INDUSTRY_CODE" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Validate displayed fields. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete industry details including Industry Code, Name, Risk Rating, High Risk Flag and FATF Sector classification. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_335] Industry Code Master → Verify View action opens complete industry details including Industry Code, Name, Risk Rating, High Risk Flag and FATF Sector classification.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Industry Code Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Industry Code');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Industry Code');
      await rdrPage.expectAllCellsNonEmpty('Industry Code');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });
  });

  test.describe("Reference Masters → Reference Master", () => {
  test("Case ID:RDR_336 - Reference Master → Verify Reference Master records are displayed successfully after synchronization and all configured reference values are visible in the grid.", async ({ testData }) => {
    // Excel Test Case ID: RDR_336
    // Excel Scenario: Reference Masters → Reference Master → Verify Reference Master records are displayed successfully after synchronization and all configured reference values are visible in the grid.
    // FSD §4.3 — Detail Modal
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "REFERENCE_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Verify displayed records count and details. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Reference Master records are displayed successfully after synchronization and all configured reference values are visible in the grid. succeeds for Reference Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_336] Reference Master → Verify Reference Master records are displayed successfully after synchronization and all configured reference values are visible in the grid.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_337 - Reference Master → Verify Reference ID is displayed uniquely for every reference record maintained in the system.", async ({ testData }) => {
    // Excel Test Case ID: RDR_337
    // Excel Scenario: Reference Masters → Reference Master → Verify Reference ID is displayed uniquely for every reference record maintained in the system.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "REFERENCE_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare displayed records. - Review Reference Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Reference ID is displayed uniquely for every reference record maintained in the system. succeeds for Reference Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "REFERENCE_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Reference Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Category value is displayed correctly according to the configured reference type classification. succeeds for Reference Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "REFERENCE_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review Reference Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Reference Code is displayed correctly according to the configured lookup code value. succeeds for Reference Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "REFERENCE_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare displayed values with source data. - Review Reference Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Description field is displayed correctly and provides accurate business meaning of the reference value. succeeds for Reference Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "REFERENCE_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review Text Value column. - Compare values with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Text Value is displayed correctly according to configured business rules and thresholds. succeeds for Reference Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "REFERENCE_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review Countries column. - Compare values with source records. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Countries field is displayed correctly and reflects country-specific or global applicability of the reference value. succeeds for Reference Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "REFERENCE_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review Reference Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Status is displayed correctly and reflects whether the reference code is active and available for AML processing. succeeds for Reference Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "REFERENCE_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source data. - Review Reference Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Modified Date is displayed correctly and reflects the latest update timestamp of the reference record. succeeds for Reference Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "REFERENCE_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Verify Category, Code, Description and Text Value. - Review Reference Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - CTR Threshold reference record is displayed correctly with AML reporting threshold information. succeeds for Reference Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_345] Reference Master → Verify CTR Threshold reference record is displayed correctly with AML reporting threshold information.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
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

  test("Case ID:RDR_346 - Reference Master → Verify Wildlife Keyword reference record is displayed correctly for AML wildlife trafficking monitoring scenarios.", async ({ testData }) => {
    // Excel Test Case ID: RDR_346
    // Excel Scenario: Reference Masters → Reference Master → Verify Wildlife Keyword reference record is displayed correctly for AML wildlife trafficking monitoring scenarios.
    // FSD §4.3 — Detail Modal
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "REFERENCE_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Verify Category, Code, Description and Text Value. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Wildlife Keyword reference record is displayed correctly for AML wildlife trafficking monitoring scenarios. succeeds for Reference Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_346] Reference Master → Verify Wildlife Keyword reference record is displayed correctly for AML wildlife trafficking monitoring scenarios.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_347 - Reference Master → Verify Dormancy Threshold reference record is displayed correctly for dormant account monitoring rules.", async ({ testData }) => {
    // Excel Test Case ID: RDR_347
    // Excel Scenario: Reference Masters → Reference Master → Verify Dormancy Threshold reference record is displayed correctly for dormant account monitoring rules.
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (10): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "REFERENCE_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Verify all displayed values. - Review Reference Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Dormancy Threshold reference record is displayed correctly for dormant account monitoring rules. succeeds for Reference Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_347] Reference Master → Verify Dormancy Threshold reference record is displayed correctly for dormant account monitoring rules.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
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

  test("Case ID:RDR_348 - Reference Master → Verify Search functionality retrieves the correct reference record using Reference Code.", async ({ testData }) => {
    // Excel Test Case ID: RDR_348
    // Excel Scenario: Reference Masters → Reference Master → Verify Search functionality retrieves the correct reference record using Reference Code.
    // FSD §4.1 — Toolbar
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "REFERENCE_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter reference code in search box. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality retrieves the correct reference record using Reference Code. succeeds for Reference Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_348] Reference Master → Verify Search functionality retrieves the correct reference record using Reference Code.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('box');
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsNoResults();
      });
  });

  test("Case ID:RDR_349 - Reference Master → Verify Search functionality retrieves the correct reference record using Category name.", async ({ testData }) => {
    // Excel Test Case ID: RDR_349
    // Excel Scenario: Reference Masters → Reference Master → Verify Search functionality retrieves the correct reference record using Category name.
    // FSD §4.1 — Toolbar
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "REFERENCE_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Execute search. - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Enter category value. - Enter a valid search value and verify matching records are displayed. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality retrieves the correct reference record using Category name. succeeds for Reference Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_349] Reference Master → Verify Search functionality retrieves the correct reference record using Category name.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsNoResults();
      await rdrPage.expectAllCellsNonEmpty('Status');
      });
  });

  test("Case ID:RDR_350 - Reference Master → Verify View action opens complete reference details including Reference Type, Code, Name, Active Flag and Sort Order information maintained in the master.", async ({ testData }) => {
    // Excel Test Case ID: RDR_350
    // Excel Scenario: Reference Masters → Reference Master → Verify View action opens complete reference details including Reference Type, Code, Name, Active Flag and Sort Order information maintained in the master.
    // FSD §4.3 — Detail Modal
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "REFERENCE_MASTER" and wait for grid content to load. …
    // Expected: Functional Validation: - Validate Ref Type, Ref Code, Ref Name, Is Active and Sort Order fields. - Sort by a numeric or textual column in ascending order and verify row order. - Sort the same column in descending order and verify reverse ordering. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Validate Ref Type, Ref Code, Ref Name, Is Active and Sort Order fields. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View action opens complete reference details including Reference Type, Code, Name, Active Flag and Sort Order information maintained in the master. succeeds for Reference Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_350] Reference Master → Verify View action opens complete reference details including Reference Type, Code, Name, Active Flag and Sort Order information maintained in the master.");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Reference Master');
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
  });

  test.describe("Reference Masters → Country Master", () => {
  test("Case ID:RDR_351 - Country Master → Verify Country Master page loads successfully", async ({ testData }) => {
    // Excel Test Case ID: RDR_351
    // Excel Scenario: Reference Masters → Country Master → Verify Country Master page loads successfully
    // FSD §4.5 — Filter Bars
    // Steps (16): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Country Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown. - Apply branch or type filter and verify only matching records remain in grid. Business Validation: - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name. Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Click Country Master tab. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Country Master page loads successfully succeeds for Country Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_351] Country Master → Verify Country Master page loads successfully");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      await rdrPage.clearSearchAndFilters();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectAllCellsMatchValue('Country Name', 'Individual');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Country Name');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectSearchYieldsNoResults();
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectAllCellsNonEmpty('Country Name');
      });
  });

  test("Case ID:RDR_352 - Country Master → Verify High Risk countries are displayed at top by default", async ({ testData }) => {
    // Excel Test Case ID: RDR_352
    // Excel Scenario: Reference Masters → Country Master → Verify High Risk countries are displayed at top by default
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Country Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name. Business Validation: - Check Risk Level column. - Verify High Risk countries appear before other categories. Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - High Risk countries are displayed at top by default succeeds for Country Master. - Application remains stable with no unexpected error behavior.
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
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_353 - Country Master → Verify search using Country Name", async ({ testData }) => {
    // Excel Test Case ID: RDR_353
    // Excel Scenario: Reference Masters → Country Master → Verify search using Country Name
    // FSD §4.1 — Toolbar
    // Steps (14): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Country Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter country name in search box. - Clear search field. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search using Country Name succeeds for Country Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_353] Country Master → Verify search using Country Name");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.clearSearchAndFilters();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectFilterApplied();
      await rdrPage.expectAllCellsMatchValue('Country Name', 'Individual');
      await rdrPage.expectColumnVisible('Country Name');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Country Name');
      });
  });

  test("Case ID:RDR_354 - Country Master → Verify search using ISO Alpha-2 Code", async ({ testData }) => {
    // Excel Test Case ID: RDR_354
    // Excel Scenario: Reference Masters → Country Master → Verify search using ISO Alpha-2 Code
    // FSD §4.3 — Detail Modal
    // Steps (15): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Country Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter Alpha-2 code in search box. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search using ISO Alpha-2 Code succeeds for Country Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_354] Country Master → Verify search using ISO Alpha-2 Code");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('box');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_355 - Country Master → Verify Region filter functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_355
    // Excel Scenario: Reference Masters → Country Master → Verify Region filter functionality
    // FSD §4.5 — Filter Bars
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Country Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Verify filtered records. - Reset filter. - Apply branch or type filter and verify only matching records remain in grid. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Region filter functionality succeeds for Country Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_355] Country Master → Verify Region filter functionality");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.applyFilterByOptionText('Individual');
      await rdrPage.clearSearchAndFilters();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectAllCellsMatchValue('Status', 'Individual');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      });
  });

  test("Case ID:RDR_356 - Country Master → Verify Risk Level filter functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_356
    // Excel Scenario: Reference Masters → Country Master → Verify Risk Level filter functionality
    // FSD §4.5 — Filter Bars
    // Steps (14): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Country Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Apply branch or type filter and verify only matching records remain in grid. - Clear filters and verify the full dataset is restored. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Select Risk Level dropdown. - Choose High Risk. Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Risk Level filter functionality succeeds for Country Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_356] Country Master → Verify Risk Level filter functionality");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.applyFilterByOptionText('Individual');
      await rdrPage.clearSearchAndFilters();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectAllCellsMatchValue('Risk Level', 'Individual');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Risk Level');
      await rdrPage.expectAllCellsNonEmpty('Risk Level');
      });
  });

  test("Case ID:RDR_357 - Country Master → Verify combined Search and Filter functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_357
    // Excel Scenario: Reference Masters → Country Master → Verify combined Search and Filter functionality
    // FSD §4.5 — Filter Bars
    // Steps (15): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Country Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Search a country. - Apply Region filter. - Apply Risk Level filter. Business Validation: - Apply Risk Level filter. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Search a country. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Combined Search and Filter functionality succeeds for Country Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_357] Country Master → Verify combined Search and Filter functionality");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.search('a country');
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      await rdrPage.clearSearchAndFilters();
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (14): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Country Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Sort by a numeric or textual column in ascending order and verify row order. - Sort the same column in descending order and verify reverse ordering. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name. Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Country Name column sorting succeeds for Country Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_358] Country Master → Verify Country Name column sorting");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_359 - Country Master → Verify Region column sorting", async ({ testData }) => {
    // Excel Test Case ID: RDR_359
    // Excel Scenario: Reference Masters → Country Master → Verify Region column sorting
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Country Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Verify records sort by region. - Click again to reverse sorting. - Sort by a numeric or textual column in ascending order and verify row order. Business Validation: - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name. Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Region column sorting succeeds for Country Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_359] Country Master → Verify Region column sorting");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Click Region');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Click Region');
      await rdrPage.expectAllCellsNonEmpty('Click Region');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });

  test("Case ID:RDR_360 - Country Master → Verify Risk Reason tags display correctly", async ({ testData }) => {
    // Excel Test Case ID: RDR_360
    // Excel Scenario: Reference Masters → Country Master → Verify Risk Reason tags display correctly
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Country Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name. Business Validation: - Locate High Risk country. - Review Risk Reasons column. Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Risk Reason tags display correctly succeeds for Country Master. - Application remains stable with no unexpected error behavior.
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
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Country Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View button functionality succeeds for Country Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_361] Country Master → Verify View button functionality");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_362 - Country Master → Verify Audit Trail information in View panel", async ({ testData }) => {
    // Excel Test Case ID: RDR_362
    // Excel Scenario: Reference Masters → Country Master → Verify Audit Trail information in View panel
    // FSD §4.3 — Detail Modal
    // Steps (14): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Country Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name. Business Validation: - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name. Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open country details using View. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - Navigate to Audit Trail tab. System Behaviour: - Audit Trail information in View panel succeeds for Country Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_362] Country Master → Verify Audit Trail information in View panel");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Country Name');
      await rdrPage.expectAllCellsNonEmpty('Country Name');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      await rdrPage.expectFirstRowLinkNavigates();
      });
  });

  test("Case ID:RDR_363 - Country Master → Verify Maker submits country updates successfully", async ({ testData }) => {
    // Excel Test Case ID: RDR_363
    // Excel Scenario: Reference Masters → Country Master → Verify Maker submits country updates successfully
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Country Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name. Business Validation: - Update Risk Level and Remarks. - Verify risk level values and labels are displayed consistently in grid and details. Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Maker submits country updates successfully succeeds for Country Master. - Application remains stable with no unexpected error behavior.
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
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Country Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name. Business Validation: - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name. Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open pending country record. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Checker approval workflow succeeds for Country Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_364] Country Master → Verify Checker approval workflow");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Country Name');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Country Name');
      await rdrPage.expectAllCellsNonEmpty('Country Name');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_365 - Country Master → Verify CSV export functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_365
    // Excel Scenario: Reference Masters → Country Master → Verify CSV export functionality
    // FSD §11.1 — Export Formats
    // Steps (17): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Reference Masters" from the Reference Data Register sidebar. → Select master tab "Country Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Apply search/filter criteria. - Verify exported data. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - CSV export functionality succeeds for Country Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_365] Country Master → Verify CSV export functionality");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Reference Masters → Country Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      await rdrPage.clearSearchAndFilters();
      await rdrPage.expectColumnVisible('downloaded file headers match on-screen');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectCsvExportReady();
      });
  });
  });

  test.describe("Employee Master", () => {
  test("Case ID:RDR_366 - Employee Master → Verify search functionality using Employee Name", async ({ testData }) => {
    // Excel Test Case ID: RDR_366
    // Excel Scenario: Employee Master → Verify search functionality using Employee Name
    // FSD §4.1 — Toolbar
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Employee" from the Reference Data Register sidebar. → Select master tab "EMPLOYEE Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Enter employee name in search box. - Execute search. - Enter a valid search value and verify matching records are displayed. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Verify matching employee record appears. - Enter a valid search value and verify matching records are displayed. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Search functionality using Employee Name succeeds for Employee Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_366] Employee Master → Verify search functionality using Employee Name");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Employee Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.searchFromFirstRowCell();
      await rdrPage.searchNoMatchValue();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Status');
      });
  });

  test("Case ID:RDR_367 - Employee Master → Verify masked employee name display for PII protection", async ({ testData }) => {
    // Excel Test Case ID: RDR_367
    // Excel Scenario: Employee Master → Verify masked employee name display for PII protection
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (11): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Employee" from the Reference Data Register sidebar. → Select master tab "EMPLOYEE Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Verify names are partially masked. - Verify PII fields are masked for restricted role and readable for authorized role only. Data Validation: - Review multiple records. - Verify PII fields are masked for restricted role and readable for authorized role only. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Masked employee name display for PII protection succeeds for Employee Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_367] Employee Master → Verify masked employee name display for PII protection");
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

  test("Case ID:RDR_368 - Employee Master → Verify employee status display", async ({ testData }) => {
    // Excel Test Case ID: RDR_368
    // Excel Scenario: Employee Master → Verify employee status display
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Employee" from the Reference Data Register sidebar. → Select master tab "EMPLOYEE Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Verify status values displayed. - Compare with source data. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Employee status display succeeds for Employee Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_368] Employee Master → Verify employee status display");
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

  test("Case ID:RDR_369 - Employee Master → Verify Joining Date is displayed correctly", async ({ testData }) => {
    // Excel Test Case ID: RDR_369
    // Excel Scenario: Employee Master → Verify Joining Date is displayed correctly
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Employee" from the Reference Data Register sidebar. → Select master tab "EMPLOYEE Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source data. - Review Employee Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Joining Date is displayed correctly succeeds for Employee Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_369] Employee Master → Verify Joining Date is displayed correctly");
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

  test("Case ID:RDR_370 - Employee Master → Verify Department information display", async ({ testData }) => {
    // Excel Test Case ID: RDR_370
    // Excel Scenario: Employee Master → Verify Department information display
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Employee" from the Reference Data Register sidebar. → Select master tab "EMPLOYEE Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare values with source records. - Review Employee Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Department information display succeeds for Employee Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_370] Employee Master → Verify Department information display");
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

  test("Case ID:RDR_371 - Employee Master → Verify Branch assignment display", async ({ testData }) => {
    // Excel Test Case ID: RDR_371
    // Excel Scenario: Employee Master → Verify Branch assignment display
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Employee" from the Reference Data Register sidebar. → Select master tab "EMPLOYEE Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Compare with source records. - Review Employee Master grid fields and verify displayed values are populated. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Branch assignment display succeeds for Employee Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_371] Employee Master → Verify Branch assignment display");
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

  test("Case ID:RDR_372 - Employee Master → Verify Supervisor ID mapping", async ({ testData }) => {
    // Excel Test Case ID: RDR_372
    // Excel Scenario: Employee Master → Verify Supervisor ID mapping
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Employee" from the Reference Data Register sidebar. → Select master tab "EMPLOYEE Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review Employee Master grid fields and verify displayed values are populated. - Compare selected row values with source snapshot and verify consistency. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Supervisor ID mapping succeeds for Employee Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_372] Employee Master → Verify Supervisor ID mapping");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Employee Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectColumnVisible('Supervisor ID');
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Supervisor ID');
      await rdrPage.expectAllCellsNonEmpty('Supervisor ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_373 - Employee Master → Verify View button functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_373
    // Excel Scenario: Employee Master → Verify View button functionality
    // FSD §4.3 — Detail Modal
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Employee" from the Reference Data Register sidebar. → Select master tab "EMPLOYEE Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Locate employee record. - Click View action on a row and verify detail modal opens with row metadata. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - View button functionality succeeds for Employee Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_373] Employee Master → Verify View button functionality");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Employee Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      await rdrPage.openFirstRowView();
      await rdrPage.expectColumnVisible('Status');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Status');
      await rdrPage.expectAllCellsNonEmpty('Status');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectViewModalShowsRecordDetails();
      });
  });

  test("Case ID:RDR_374 - Employee Master → Verify CSV export functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_374
    // Excel Scenario: Employee Master → Verify CSV export functionality
    // FSD §11.1 — Export Formats
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Employee" from the Reference Data Register sidebar. → Select master tab "EMPLOYEE Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Download exported file. - Click CSV export and verify export action completes for current filtered dataset. - Click Excel export and verify downloaded file headers match on-screen columns. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Click CSV export and verify export action completes for current filtered dataset. - Scroll through grid rows and verify sticky header remains visible. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - CSV export functionality succeeds for Employee Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_374] Employee Master → Verify CSV export functionality");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Employee Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportCsv();
      await rdrPage.expectColumnVisible('downloaded file headers match on-screen');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectExcelExportReady();
      });
  });

  test("Case ID:RDR_375 - Employee Master → Verify Excel export functionality", async ({ testData }) => {
    // Excel Test Case ID: RDR_375
    // Excel Scenario: Employee Master → Verify Excel export functionality
    // FSD §11.1 — Export Formats
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Employee" from the Reference Data Register sidebar. → Select master tab "EMPLOYEE Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Download exported file. - Verify exported data. - Click CSV export and verify export action completes for current filtered dataset. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Click CSV export and verify export action completes for current filtered dataset. - Scroll through grid rows and verify sticky header remains visible. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Excel export functionality succeeds for Employee Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_375] Employee Master → Verify Excel export functionality");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Employee Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.exportExcel();
      await rdrPage.exportCsv();
      await rdrPage.expectColumnVisible('downloaded file headers match on-screen');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCsvExportReady();
      await rdrPage.expectExcelExportReady();
      });
  });

  test("Case ID:RDR_376 - Employee Master → Verify employee records are limited to maximum configured row count", async ({ testData }) => {
    // Excel Test Case ID: RDR_376
    // Excel Scenario: Employee Master → Verify employee records are limited to maximum configured row count
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (13): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Employee" from the Reference Data Register sidebar. → Select master tab "EMPLOYEE Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Review displayed record count. - Verify configured record limit. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Employee records are limited to maximum configured row count succeeds for Employee Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_376] Employee Master → Verify employee records are limited to maximum configured row count");
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
      await rdrPage.expectGridWithinConfiguredLimit();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectGridTabLoaded();
      });
  });
  });

  test.describe("Customer → Customer Master", () => {
  test("Case ID:RDR_377 - Customer Master → Verify column selector shows and hides columns on Customer Master grid", async ({ testData }) => {
    // Excel Test Case ID: RDR_377
    // Excel Scenario: Customer → Customer Master → Verify column selector shows and hides columns on Customer Master grid
    // FSD §4.4 — Column Selector Dropdown
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Scroll through grid rows and verify sticky header remains visible. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Column selector shows and hides columns on Customer Master grid succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_377] Customer Master → Verify column selector shows and hides columns on Customer Master grid");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.applyFilterByOptionText('Individual');
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectColumnVisible('Verify');
      await rdrPage.expectAllCellsNonEmpty('Verify');
      await rdrPage.expectColumnVisible('grid reflects selected');
      await rdrPage.expectAllCellsNonEmpty('grid reflects selected');
      await rdrPage.expectColumnVisible('Selector');
      await rdrPage.expectAllCellsNonEmpty('Selector');
      });
  });

  test("Case ID:RDR_378 - Customer Master → Verify toast appears after refresh CBS action with latest sync status", async ({ testData }) => {
    // Excel Test Case ID: RDR_378
    // Excel Scenario: Customer → Customer Master → Verify toast appears after refresh CBS action with latest sync status
    // FSD §4.7 — Toast Notifications
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click Refresh CBS and wait for operation completion feedback. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Scroll through grid rows and verify sticky header remains visible. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Toast appears after refresh CBS action with latest sync status succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_378] Customer Master → Verify toast appears after refresh CBS action with latest sync status");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridTabLoaded();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_379 - Customer Master → Verify sticky header remains visible while scrolling through grid rows", async ({ testData }) => {
    // Excel Test Case ID: RDR_379
    // Excel Scenario: Customer → Customer Master → Verify sticky header remains visible while scrolling through grid rows
    // FSD §4.2 — Data Grid
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll pagination controls and navigate to next page, then verify row continuity. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Change page size and verify displayed row count does not exceed selected size. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Sticky header remains visible while scrolling through grid rows succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_379] Customer Master → Verify sticky header remains visible while scrolling through grid rows");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.applyFilterByOptionText('Individual');
      await rdrPage.goToNextTabPage();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectPaginationVisible();
      await rdrPage.expectGridContainsRecords();
      });
  });

  test("Case ID:RDR_380 - Customer Master → Verify KPI cards display and match customer master dataset counts", async ({ testData }) => {
    // Excel Test Case ID: RDR_380
    // Excel Scenario: Customer → Customer Master → Verify KPI cards display and match customer master dataset counts
    // FSD §4.5 — Filter Bars
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Verify KPI cards are visible and counts are consistent with the filtered grid dataset. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify KPI cards are visible and counts are consistent with the filtered grid dataset. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - KPI cards display and match customer master dataset counts succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_380] Customer Master → Verify KPI cards display and match customer master dataset counts");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.clickFirstRowIdLink();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectAllCellsMatchValue('Customer ID', 'Individual');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectFirstRowLinkNavigates();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_381 - Customer Master → Verify maximum 50k rows label is displayed for the customer dataset limit", async ({ testData }) => {
    // Excel Test Case ID: RDR_381
    // Excel Scenario: Customer → Customer Master → Verify maximum 50k rows label is displayed for the customer dataset limit
    // FSD §3.1 — Top Navigation Bar (Topbar)
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify 50k Rows Label on Customer Master. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Maximum 50k rows label is displayed for the customer dataset limit succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_381] Customer Master → Verify maximum 50k rows label is displayed for the customer dataset limit");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridContainsRecords();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      });
  });

  test("Case ID:RDR_382 - Customer Master → Verify responsive behavior on smaller viewport without clipping filter and grid controls", async ({ testData }) => {
    // Excel Test Case ID: RDR_382
    // Excel Scenario: Customer → Customer Master → Verify responsive behavior on smaller viewport without clipping filter and grid controls
    // FSD §4.5 — Filter Bars
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Apply branch or type filter and verify only matching records remain in grid. - Clear filters and verify the full dataset is restored. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Apply branch or type filter and verify only matching records remain in grid. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Responsive behavior on smaller viewport without clipping filter and grid controls succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_382] Customer Master → Verify responsive behavior on smaller viewport without clipping filter and grid controls");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.clearSearchAndFilters();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectFilterApplied();
      await rdrPage.expectAllCellsMatchValue('Customer ID', 'Individual');
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      await rdrPage.expectSearchYieldsResults();
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      });
  });

  test("Case ID:RDR_383 - Customer Master → Verify refresh CBS completes with success toast and updated sync timestamp", async ({ testData }) => {
    // Excel Test Case ID: RDR_383
    // Excel Scenario: Customer → Customer Master → Verify refresh CBS completes with success toast and updated sync timestamp
    // FSD §4.7 — Toast Notifications
    // Steps (12): Open the KYC module from primary navigation and select Reference Data Register. → Open shell group "Customer & Accounts" from the Reference Data Register sidebar. → Select master tab "CUSTOMER Master" and wait for grid content to load. …
    // Expected: Functional Validation: - Verify Refresh CBS Toast on Customer Master. - Click Refresh CBS and wait for operation completion feedback. - Scroll through grid rows and verify sticky header remains visible. Business Validation: - Business indicators align with configured master data rules. Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Scroll through grid rows and verify sticky header remains visible. Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. Audit Validation: - User actions respect role permissions and traceability expectations. System Behaviour: - Refresh CBS completes with success toast and updated sync timestamp succeeds for Customer Master. - Application remains stable with no unexpected error behavior.
    console.log("[RDR_383] Customer Master → Verify refresh CBS completes with success toast and updated sync timestamp");
    await test.step("Navigate / setup", async () => {
      await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, 'Customer → Customer Master');
      });

    await test.step("Execute Excel test steps", async () => {
      await rdrPage.expectGridTabLoaded();
      });

    await test.step("Validate expected results", async () => {
      await rdrPage.expectColumnVisible('Customer ID');
      await rdrPage.expectAllCellsNonEmpty('Customer ID');
      await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids);
      await rdrPage.expectGridTabLoaded();
      await rdrPage.expectGridContainsRecords();
      });
  });
  });
});
