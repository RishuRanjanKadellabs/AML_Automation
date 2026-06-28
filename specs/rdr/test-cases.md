# Reference Data Registry — Detailed Test Cases (383)

### RDR_001 — Verify Customer ID is displayed for every customer record loaded from source systems and remains unique across all records.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Navigate to Customer Master. 7. Review Customer ID column. 8. Compare multiple records. 9. Verify no duplicate IDs exist. 10. Click primary hyperlink in grid and verify navigation opens the expected detail route. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: The Customer Master is the primary entity registry for all bank customers (individuals, corporates, NGOs, government bodies, etc.). |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare multiple records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer ID is displayed for every customer record loaded from source systems and remains unique across all records. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Unique Customer ID should be displayed for each customer. Requirement reference: Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_002 — Verify Customer ID hyperlink functionality and navigation to customer profile details.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Customer Master. 7. Click Customer ID hyperlink. 8. Verify customer details page opens. 9. Compare details with grid data. 10. Click View action on a row and verify detail modal opens with row metadata. 11. Verify detail modal fields match selected record and close modal successfully. 12. Click primary hyperlink in grid and verify navigation opens the expected detail route. 13. Scroll through grid rows and verify sticky header remains visible. 14. Validate one key rule from requirement context: The Customer Master is the primary entity registry for all bank customers (individuals, corporates, NGOs, government bodies, etc.). |
| Expected Result | Functional Validation: - Click Customer ID hyperlink. - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer ID hyperlink functionality and navigation to customer profile details. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Clicking Customer ID should open corresponding customer details. Requirement reference: Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_003 — Verify Customer Type values are displayed correctly as received from source systems.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Customer Master. 7. Review Customer Type column. 8. Compare values against source records. 9. Review Customer Master grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: The Customer Master is the primary entity registry for all bank customers (individuals, corporates, NGOs, government bodies, etc.). |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values against source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer Type values are displayed correctly as received from source systems. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Customer Type should match source data. Requirement reference: Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_004 — Verify Customer Type filter allows users to filter customer records based on selected type.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Select Customer Type filter. 7. Choose INDIVIDUAL. 8. Apply filter. 9. Review results. 10. Apply branch or type filter and verify only matching records remain in grid. 11. Clear filters and verify the full dataset is restored. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Select Customer Type filter. - Apply filter. - Apply branch or type filter and verify only matching records remain in grid.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Apply branch or type filter and verify only matching records remain in grid.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer Type filter allows users to filter customer records based on selected type. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Filter should return only matching customer records. Requirement reference: Filter Bars. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_005 — Verify Full Legal Name is displayed correctly for customer records.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Customer Master. 7. Review Full Legal Name column. 8. Compare values with source system. 9. Review Customer Master grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: The Customer Master is the primary entity registry for all bank customers (individuals, corporates, NGOs, government bodies, etc.). |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source system.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Full Legal Name is displayed correctly for customer records. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Customer name should match source data. Requirement reference: Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_006 — Verify masking of Full Legal Name according to AML privacy and PII requirements.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Masked name: Rajesh K***r Sha***a |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Customer Master. 7. Review Full Legal Name column. 8. Verify masking rules. 9. Verify PII fields are masked for restricted role and readable for authorized role only. 10. Scroll through grid rows and verify sticky header remains visible. 11. Validate one key rule from requirement context: The Customer Master is the primary entity registry for all bank customers (individuals, corporates, NGOs, government bodies, etc.). |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify masking rules. - Verify PII fields are masked for restricted role and readable for authorized role only.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify PII fields are masked for restricted role and readable for authorized role only.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Masking of Full Legal Name according to AML privacy and PII requirements. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Sensitive customer information should be masked. Requirement reference: Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_007 — Verify Active customer status is displayed correctly in Customer Status column.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Search active customer. 7. Review Customer Status column. 8. Compare with source data. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Search active customer. - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Active customer status is displayed correctly in Customer Status column. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Active customers should display Active status. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_008 — Verify Inactive customer status is displayed correctly in Customer Status column.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Search inactive customer. 7. Review Customer Status column. 8. Validate displayed value. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Search inactive customer. - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Validate displayed value.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Inactive customer status is displayed correctly in Customer Status column. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Inactive customers should display Inactive status. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_009 — Verify Risk Rating values are displayed correctly for all customer records.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Customer Master. 7. Review Risk Rating column. 8. Compare values with risk profile data. 9. Verify risk level values and labels are displayed consistently in grid and details. 10. Scroll through grid rows and verify sticky header remains visible. 11. Validate one key rule from requirement context: The Customer Master is the primary entity registry for all bank customers (individuals, corporates, NGOs, government bodies, etc.). |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Review Risk Rating column. - Compare values with risk profile data.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with risk profile data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Risk Rating values are displayed correctly for all customer records. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Risk Rating should match customer risk assessment. Requirement reference: Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_010 — Verify KYC Status is displayed correctly and reflects latest customer KYC review status.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; KYC status: COMPLETE; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Customer Master. 7. Review KYC Status column. 8. Compare with customer KYC information. 9. Review Customer Master grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: The Customer Master is the primary entity registry for all bank customers (individuals, corporates, NGOs, government bodies, etc.). |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Customer Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - KYC Status is displayed correctly and reflects latest customer KYC review status. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | KYC Status should match source records. Requirement reference: Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_011 — Verify PEP Flag is displayed correctly for Politically Exposed Persons.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Search customer record. 7. Review PEP Flag column. 8. Compare with source data. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Verify PEP indicators are shown where applicable and align with source status. 12. Scroll through grid rows and verify sticky header remains visible. 13. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Search customer record. - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown.  Business Validation: - Review PEP Flag column. - Verify PEP indicators are shown where applicable and align with source status.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Search customer record.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - PEP Flag is displayed correctly for Politically Exposed Persons. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | PEP customers should be flagged appropriately. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_012 — Verify Sanctions Flag is displayed correctly for sanctions/watchlist matched customers.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Search customer record. 7. Verify Sanctions Flag column. 8. Compare with source data. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Verify sanctions flags are displayed accurately for matched records. 12. Scroll through grid rows and verify sticky header remains visible. 13. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Search customer record. - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown.  Business Validation: - Verify Sanctions Flag column. - Verify sanctions flags are displayed accurately for matched records.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Search customer record.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Sanctions Flag is displayed correctly for sanctions/watchlist matched customers. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Sanctions matched customers should be flagged. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_013 — Verify Date Onboarded is displayed correctly in configured date format.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Customer Master. 7. Review Date Onboarded column. 8. Compare with source record. 9. Review Customer Master grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: The Customer Master is the primary entity registry for all bank customers (individuals, corporates, NGOs, government bodies, etc.). |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source record.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Date Onboarded is displayed correctly in configured date format. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Date should match source system value and configured format. Requirement reference: Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_014 — Verify Last Review Date is displayed correctly and reflects latest customer review activity.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Customer Master. 7. Review Last Review Date column. 8. Compare with source system. 9. Review Customer Master grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: The Customer Master is the primary entity registry for all bank customers (individuals, corporates, NGOs, government bodies, etc.). |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source system.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Last Review Date is displayed correctly and reflects latest customer review activity. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Review date should match source data. Requirement reference: Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_015 — Verify View action opens complete customer profile information including customer, risk, KYC and AML details.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate customer record. 7. Click View button. 8. Verify customer detail page. 9. Validate displayed information. 10. Click View action on a row and verify detail modal opens with row metadata. 11. Verify detail modal fields match selected record and close modal successfully. 12. Verify PEP indicators are shown where applicable and align with source status. 13. Verify sanctions flags are displayed accurately for matched records. 14. Verify risk level values and labels are displayed consistently in grid and details. 15. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify PEP indicators are shown where applicable and align with source status. - Verify sanctions flags are displayed accurately for matched records.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Locate customer record.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete customer profile information including customer, risk, KYC and AML details. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View action should open detailed customer profile successfully. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_016 — Verify search functionality using Customer ID and ensure the system retrieves the exact matching customer record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Navigate to Customer Master. 7. Enter Customer ID in search box. 8. Click Search or press Enter. 9. Review search results. 10. Verify returned record details. 11. Enter a valid search value and verify matching records are displayed. 12. Enter a non-matching search value and verify empty state messaging is shown. 13. Click View action on a row and verify detail modal opens with row metadata. 14. Verify detail modal fields match selected record and close modal successfully. 15. Click primary hyperlink in grid and verify navigation opens the expected detail route. 16. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Enter Customer ID in search box. - Click Search or press Enter. - Review search results.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify returned record details.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality using Customer ID and ensure the system retrieves the exact matching customer record. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return the matching customer record based on Customer ID. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_017 — Verify search functionality using Full Legal Name and ensure matching customer records are displayed.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Customer Master. 7. Enter Full Legal Name in search field. 8. Execute search. 9. Verify displayed records. 10. Enter a valid search value and verify matching records are displayed. 11. Enter a non-matching search value and verify empty state messaging is shown. 12. Scroll through grid rows and verify sticky header remains visible. 13. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter Full Legal Name in search field. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter Full Legal Name in search field.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality using Full Legal Name and ensure matching customer records are displayed. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search results should match the entered customer name. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_018 — Verify Clear button functionality after applying filters and search criteria.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Apply Customer Type filter. 7. Perform search using Customer ID. 8. Click Clear button. 9. Review screen data. 10. Enter a valid search value and verify matching records are displayed. 11. Enter a non-matching search value and verify empty state messaging is shown. 12. Apply branch or type filter and verify only matching records remain in grid. 13. Clear filters and verify the full dataset is restored. 14. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Apply Customer Type filter. - Perform search using Customer ID. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter a valid search value and verify matching records are displayed.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Clear button functionality after applying filters and search criteria. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All applied filters and search values should be removed. Requirement reference: Filter Bars. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_019 — Verify CSV Export functionality and validate exported customer data.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Customer Master. 7. Click CSV Export button. 8. Download generated file. 9. Open exported file. 10. Validate column headers and data. 11. Click CSV export and verify export action completes for current filtered dataset. 12. Click Excel export and verify downloaded file headers match on-screen columns. 13. Verify PEP indicators are shown where applicable and align with source status. 14. Verify sanctions flags are displayed accurately for matched records. 15. Verify risk level values and labels are displayed consistently in grid and details. 16. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click CSV Export button. - Open exported file. - Click CSV export and verify export action completes for current filtered dataset.  Business Validation: - Verify PEP indicators are shown where applicable and align with source status. - Verify sanctions flags are displayed accurately for matched records.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click CSV export and verify export action completes for current filtered dataset.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - CSV Export functionality and validate exported customer data. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | CSV file should be generated successfully with correct customer records and columns. Requirement reference: Export Formats. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_020 — Verify Excel Export functionality and validate exported customer information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Customer Master. 7. Click Excel Export button. 8. Download generated file. 9. Open exported workbook. 10. Verify data accuracy and column structure. 11. Click CSV export and verify export action completes for current filtered dataset. 12. Click Excel export and verify downloaded file headers match on-screen columns. 13. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click Excel Export button. - Open exported workbook. - Click CSV export and verify export action completes for current filtered dataset.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click CSV export and verify export action completes for current filtered dataset.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Excel Export functionality and validate exported customer information. succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Excel file should be generated successfully with accurate customer information. Requirement reference: Export Formats. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Master |

### RDR_021 — Verify Address ID is generated and displayed uniquely for every customer address record loaded from CBS.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Address |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Address. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Address tab. 7. Review Address ID column. 8. Compare multiple records. 9. Verify uniqueness. 10. Review Customer Address grid fields and verify displayed values are populated. 11. Compare selected row values with source snapshot and verify consistency. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare multiple records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Address ID is generated and displayed uniquely for every customer address record loaded from CBS. succeeds for Customer Address. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Each address record should have a unique Address ID. Requirement reference: Customer Address (CUST_ADDRESS). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Address |

### RDR_022 — Verify Customer ID displayed against each address record matches the linked customer in Customer Master.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Address |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Address. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Address grid. 7. Review Customer ID column. 8. Compare with Customer Master data. 9. Click primary hyperlink in grid and verify navigation opens the expected detail route. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Scroll through grid rows and verify sticky header remains visible.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer ID displayed against each address record matches the linked customer in Customer Master. succeeds for Customer Address. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Customer ID should match source customer record. Requirement reference: Customer Address (CUST_ADDRESS). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Address |

### RDR_023 — Verify Address Type values are displayed correctly based on configured address classifications.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Address |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Address. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Address tab. 7. Review Type column. 8. Compare values with source records. 9. Review Customer Address grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Address Type values are displayed correctly based on configured address classifications. succeeds for Customer Address. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Address Type should match source data. Requirement reference: Customer Address (CUST_ADDRESS). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Address |

### RDR_024 — Verify Address Line 1 is displayed according to configured masking rules to protect customer PII information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Address |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Address. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Masked name: Rajesh K***r Sha***a |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Address Line 1 column. 7. Verify masking pattern. 8. Compare with source data. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Verify PII fields are masked for restricted role and readable for authorized role only. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify masking pattern. - Verify PII fields are masked for restricted role and readable for authorized role only.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Address Line 1 is displayed according to configured masking rules to protect customer PII information. succeeds for Customer Address. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Sensitive address information should be masked. Requirement reference: Customer Address (CUST_ADDRESS). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Address |

### RDR_025 — Verify City and State values are displayed correctly for each address record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Address |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Address. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review City and State columns. 7. Compare values with source data. 8. Review Customer Address grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - City and State values are displayed correctly for each address record. succeeds for Customer Address. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | City and State should match source records. Requirement reference: Customer Address (CUST_ADDRESS). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Address |

### RDR_026 — Verify Postal Code is displayed according to configured masking rules.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Address |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Address. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Masked name: Rajesh K***r Sha***a |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Postal Code column. 7. Verify masking format. 8. Verify PII fields are masked for restricted role and readable for authorized role only. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify masking format. - Verify PII fields are masked for restricted role and readable for authorized role only.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify PII fields are masked for restricted role and readable for authorized role only.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Postal Code is displayed according to configured masking rules. succeeds for Customer Address. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Postal Code should be masked where required. Requirement reference: Customer Address (CUST_ADDRESS). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Address |

### RDR_027 — Verify Country Code is displayed correctly for address records.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Address |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Address. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Country column. 7. Compare values with source data. 8. Review Customer Address grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Country column.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Country Code is displayed correctly for address records. succeeds for Customer Address. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Country Code should match source data. Requirement reference: Customer Address (CUST_ADDRESS). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Address |

### RDR_028 — Verify Primary Address indicator is displayed correctly for customer addresses.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Address |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Address. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Primary column. 7. Compare with source records. 8. Review Customer Address grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Primary Address indicator is displayed correctly for customer addresses. succeeds for Customer Address. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Primary address should be identified accurately. Requirement reference: Customer Address (CUST_ADDRESS). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Address |

### RDR_029 — Verify Valid From date is displayed correctly and matches source onboarding information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Address |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Address. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Valid From column. 7. Compare displayed date with source data. 8. Review Customer Address grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare displayed date with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Valid From date is displayed correctly and matches source onboarding information. succeeds for Customer Address. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Date should match source system records. Requirement reference: Customer Address (CUST_ADDRESS). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Address |

### RDR_030 — Verify View action opens complete address details for the selected customer address record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Address |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Address. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button for selected address. 7. Verify details screen opens. 8. Validate address information. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete address details for the selected customer address record. succeeds for Customer Address. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Address details screen should open successfully. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Address |

### RDR_031 — Verify search functionality using Address ID.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Address |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Address. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter Address ID in search field. 7. Execute search. 8. Review results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter Address ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter Address ID in search field.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality using Address ID. succeeds for Customer Address. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching address record. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Address |

### RDR_032 — Verify search functionality using Customer ID and retrieve all linked addresses.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Address |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Address. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter Customer ID in search box. 7. Execute search. 8. Verify returned records. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Click primary hyperlink in grid and verify navigation opens the expected detail route. 12. Scroll through grid rows and verify sticky header remains visible. 13. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter Customer ID in search box. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify returned records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality using Customer ID and retrieve all linked addresses. succeeds for Customer Address. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | System should display all addresses linked to customer. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Address |

### RDR_033 — Verify Address Verification Status (Is Verified) in address details screen.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Address |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Address. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open address details. 7. Review Is Verified field. 8. Compare with source data. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Is Verified field.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Address Verification Status (Is Verified) in address details screen. succeeds for Customer Address. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Verification status should match source records. Requirement reference: Customer Address (CUST_ADDRESS). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Address |

### RDR_034 — Verify High Risk Location Flag and Human Trafficking Risk Flag values in address details.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Address |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Address. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open address details. 7. Review risk-related fields. 8. Compare values with source data. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Verify risk level values and labels are displayed consistently in grid and details. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Review risk-related fields. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review risk-related fields.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - High Risk Location Flag and Human Trafficking Risk Flag values in address details. succeeds for Customer Address. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Risk indicators should match configured AML risk data. Requirement reference: Customer Address (CUST_ADDRESS). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Address |

### RDR_035 — Verify CSV and Excel export functionality for Customer Address records.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Address |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Address. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click CSV Export. 7. Validate downloaded file. 8. Click Excel Export. 9. Validate downloaded file contents. 10. Click CSV export and verify export action completes for current filtered dataset. 11. Click Excel export and verify downloaded file headers match on-screen columns. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click CSV Export. - Click Excel Export. - Click CSV export and verify export action completes for current filtered dataset.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click CSV export and verify export action completes for current filtered dataset.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - CSV and Excel export functionality for Customer Address records. succeeds for Customer Address. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Export files should download successfully with correct data. Requirement reference: Export Formats. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Address |

### RDR_036 — Verify Document ID is displayed uniquely for each customer document record loaded from CBS.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Documents |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Documents. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Documents tab. 7. Review Document ID column. 8. Compare multiple records. 9. Verify uniqueness. 10. Review Customer Documents grid fields and verify displayed values are populated. 11. Compare selected row values with source snapshot and verify consistency. 12. Scroll through grid rows and verify sticky header remains visible. 13. Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare multiple records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Document ID is displayed uniquely for each customer document record loaded from CBS. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Each document should have a unique Document ID. Requirement reference: Customer Documents (CUST_DOCUMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Documents |

### RDR_037 — Verify Customer ID displayed against each document record matches the linked customer profile.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Documents |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Documents. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Customer ID column. 7. Compare with Customer Master records. 8. Verify relationship mapping. 9. Click primary hyperlink in grid and verify navigation opens the expected detail route. 10. Scroll through grid rows and verify sticky header remains visible. 11. Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with Customer Master records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer ID displayed against each document record matches the linked customer profile. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Customer ID should match Customer Master data. Requirement reference: Customer Documents (CUST_DOCUMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Documents |

### RDR_038 — Verify Document Type values are displayed correctly based on configured document classifications.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Documents |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Documents. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Doc Type column. 7. Compare values with source records. 8. Validate document classification. 9. Review Customer Documents grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema.  Business Validation: - Validate document classification.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Document Type values are displayed correctly based on configured document classifications. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Document Type should match source data. Requirement reference: Customer Documents (CUST_DOCUMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Documents |

### RDR_039 — Verify Document Number is displayed according to masking rules to protect customer sensitive information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Documents |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Documents. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Masked name: Rajesh K***r Sha***a |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Doc Number column. 7. Verify masking pattern. 8. Compare with source document values. 9. Verify PII fields are masked for restricted role and readable for authorized role only. 10. Scroll through grid rows and verify sticky header remains visible. 11. Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema.  Business Validation: - Verify masking pattern. - Verify PII fields are masked for restricted role and readable for authorized role only.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source document values.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Document Number is displayed according to masking rules to protect customer sensitive information. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Sensitive document numbers should be masked. Requirement reference: Customer Documents (CUST_DOCUMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Documents |

### RDR_040 — Verify Issuing Country is displayed correctly for all customer documents.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Documents |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Documents. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Issuing Country column. 7. Compare values with source records. 8. Review Customer Documents grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. 11. Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Issuing Country column.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Issuing Country is displayed correctly for all customer documents. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Issuing Country should match source data. Requirement reference: Customer Documents (CUST_DOCUMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Documents |

### RDR_041 — Verify Issue Date is displayed correctly and matches source document information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Documents |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Documents. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Issue Date column. 7. Compare values with source records. 8. Review Customer Documents grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. 11. Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Issue Date is displayed correctly and matches source document information. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Issue Date should match source data. Requirement reference: Customer Documents (CUST_DOCUMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Documents |

### RDR_042 — Verify Expiry Date is displayed correctly for permanent and non-permanent documents.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Documents |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Documents. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Expiry Date column. 7. Compare values with source data. 8. Review Customer Documents grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. 11. Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Expiry Date is displayed correctly for permanent and non-permanent documents. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Expiry Date should match source records. Requirement reference: Customer Documents (CUST_DOCUMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Documents |

### RDR_043 — Verify Document Status is displayed correctly based on document validity.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Documents |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Documents. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Status column. 7. Compare values with source records. 8. Verify status indicator. 9. Review Customer Documents grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Document Status is displayed correctly based on document validity. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Status should match document lifecycle status. Requirement reference: Customer Documents (CUST_DOCUMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Documents |

### RDR_044 — Verify expired documents are highlighted appropriately for AML review.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Documents |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Documents. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate expired document record. 7. Review Status column. 8. Verify indicator color and value. 9. Review Customer Documents grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Locate expired document record.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Expired documents are highlighted appropriately for AML review. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Expired documents should be visually distinguishable. Requirement reference: Customer Documents (CUST_DOCUMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Documents |

### RDR_045 — Verify Verified Date is displayed correctly and matches document verification records.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Documents |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Documents. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Verified Date column. 7. Compare with source records. 8. Review Customer Documents grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. 11. Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Verified Date is displayed correctly and matches document verification records. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Verification date should match source data. Requirement reference: Customer Documents (CUST_DOCUMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Documents |

### RDR_046 — Verify Verification Method is displayed correctly according to document verification process.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Documents |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Documents. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Verify Method column. 7. Compare values with source records. 8. Review Customer Documents grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. 11. Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: "Lifetime" for permanent docs document_status ENUM No VALID, EXPIRED, PENDING_VERIFICATION, REVOKED EXPIRED shown in red badge verification_method ENUM Yes ORIGINAL_SEEN, E_KYC, OTP_VERIFIED, DOCUMENT, FIELD_VISIT goaml_identifier_type VARCHAR(30) Yes goAML v4.2 identifier type for STR export goaml_v42_id_verified BOOLEAN Yes Verified flag as required by goAML v4.2 schema.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Verification Method is displayed correctly according to document verification process. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Verification Method should match source data. Requirement reference: Customer Documents (CUST_DOCUMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Documents |

### RDR_047 — Verify search functionality using Document ID.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Documents |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Documents. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter Document ID in search field. 7. Execute search. 8. Review results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter Document ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter Document ID in search field.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality using Document ID. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching document record. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Documents |

### RDR_048 — Verify search functionality using Customer ID and retrieve all linked customer documents.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Documents |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Documents. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter Customer ID in search box. 7. Execute search. 8. Verify returned records. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Click primary hyperlink in grid and verify navigation opens the expected detail route. 12. Scroll through grid rows and verify sticky header remains visible. 13. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter Customer ID in search box. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify returned records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality using Customer ID and retrieve all linked customer documents. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | System should display all documents linked to customer. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Documents |

### RDR_049 — Verify View action opens complete document details including AML-related information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Documents |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Documents. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button for selected document. 7. Review document details. 8. Verify displayed information. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete document details including AML-related information. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open document details screen. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Documents |

### RDR_050 — Verify CSV and Excel export functionality for Customer Documents data.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer Documents |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Documents. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click CSV Export. 7. Validate downloaded file. 8. Click Excel Export. 9. Validate file contents. 10. Click CSV export and verify export action completes for current filtered dataset. 11. Click Excel export and verify downloaded file headers match on-screen columns. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click CSV Export. - Click Excel Export. - Click CSV export and verify export action completes for current filtered dataset.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click CSV export and verify export action completes for current filtered dataset.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - CSV and Excel export functionality for Customer Documents data. succeeds for Customer Documents. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Export files should download successfully with accurate document information. Requirement reference: Export Formats. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer Documents |

### RDR_051 — Verify Assessment ID is generated and displayed uniquely for each risk assessment record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Risk Assessment |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Risk Assessment. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "RISK_ASSESSMENT" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Risk Assessment tab. 7. Review Assessment ID column. 8. Compare multiple records. 9. Verify uniqueness. 10. Verify risk level values and labels are displayed consistently in grid and details. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Open Risk Assessment tab.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare multiple records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Assessment ID is generated and displayed uniquely for each risk assessment record. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Each assessment should have a unique Assessment ID. Requirement reference: Risk Assessment (RISK_ASSESSMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Risk Assessment |

### RDR_052 — Verify Customer ID displayed against each risk assessment record matches the linked customer profile.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Risk Assessment |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Risk Assessment. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "RISK_ASSESSMENT" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Customer ID column. 7. Compare with Customer Master records. 8. Validate mapping. 9. Click primary hyperlink in grid and verify navigation opens the expected detail route. 10. Verify risk level values and labels are displayed consistently in grid and details. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with Customer Master records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer ID displayed against each risk assessment record matches the linked customer profile. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Customer ID should match Customer Master data. Requirement reference: Risk Assessment (RISK_ASSESSMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Risk Assessment |

### RDR_053 — Verify Assessment Date is displayed correctly and matches the date on which risk assessment was performed.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Risk Assessment |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Risk Assessment. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "RISK_ASSESSMENT" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Date column. 7. Compare displayed dates with source data. 8. Verify risk level values and labels are displayed consistently in grid and details. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare displayed dates with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Assessment Date is displayed correctly and matches the date on which risk assessment was performed. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Assessment Date should match source records. Requirement reference: Risk Assessment (RISK_ASSESSMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Risk Assessment |

### RDR_054 — Verify Assessment Type values are displayed correctly based on configured assessment classifications.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Risk Assessment |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Risk Assessment. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "RISK_ASSESSMENT" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Type column. 7. Compare values with source records. 8. Verify risk level values and labels are displayed consistently in grid and details. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Assessment Type values are displayed correctly based on configured assessment classifications. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Assessment Type should match source data. Requirement reference: Risk Assessment (RISK_ASSESSMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Risk Assessment |

### RDR_055 — Verify Total Risk Score is calculated and displayed correctly for each customer assessment.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Risk Assessment |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Risk Assessment. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "RISK_ASSESSMENT" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Total Score column. 7. Compare values with source records. 8. Validate displayed score. 9. Verify risk level values and labels are displayed consistently in grid and details. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Review Total Score column.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Total Risk Score is calculated and displayed correctly for each customer assessment. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Total Risk Score should match risk engine output. Requirement reference: Risk Assessment (RISK_ASSESSMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Risk Assessment |

### RDR_056 — Verify Risk Rating values are displayed correctly according to configured risk score ranges.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Risk Assessment |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Risk Assessment. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "RISK_ASSESSMENT" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Risk Rating column. 7. Compare rating against score. 8. Validate mapping rules. 9. Verify risk level values and labels are displayed consistently in grid and details. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Review Risk Rating column.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify risk level values and labels are displayed consistently in grid and details.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Risk Rating values are displayed correctly according to configured risk score ranges. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Risk Rating should match calculated risk category. Requirement reference: Risk Assessment (RISK_ASSESSMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Risk Assessment |

### RDR_057 — Verify high-risk customers are highlighted appropriately when Total Risk Score exceeds configured threshold.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Risk Assessment |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Risk Assessment. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "RISK_ASSESSMENT" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate assessment with score above threshold. 7. Review Risk Rating. 8. Verify visual indicator. 9. Verify risk level values and labels are displayed consistently in grid and details. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Locate assessment with score above threshold.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify risk level values and labels are displayed consistently in grid and details.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - High-risk customers are highlighted appropriately when Total Risk Score exceeds configured threshold. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | High-risk customers should be visually identifiable. Requirement reference: Risk Assessment (RISK_ASSESSMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Risk Assessment |

### RDR_058 — Verify Previous Risk Rating is displayed correctly and reflects prior assessment results.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Risk Assessment |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Risk Assessment. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "RISK_ASSESSMENT" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Prev Rating column. 7. Compare with previous assessment data. 8. Verify risk level values and labels are displayed consistently in grid and details. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify risk level values and labels are displayed consistently in grid and details.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Previous Risk Rating is displayed correctly and reflects prior assessment results. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Previous Rating should match earlier assessment record. Requirement reference: Risk Assessment (RISK_ASSESSMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Risk Assessment |

### RDR_059 — Verify Rating Changed indicator correctly identifies customers whose risk rating has changed since the last assessment.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Risk Assessment |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Risk Assessment. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "RISK_ASSESSMENT" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Rating Changed column. 7. Compare current and previous ratings. 8. Verify risk level values and labels are displayed consistently in grid and details. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify risk level values and labels are displayed consistently in grid and details.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Rating Changed indicator correctly identifies customers whose risk rating has changed since the last assessment. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Indicator should reflect actual rating changes. Requirement reference: Risk Assessment (RISK_ASSESSMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Risk Assessment |

### RDR_060 — Verify Next Review Date is calculated and displayed correctly based on risk review schedule.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Risk Assessment |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Risk Assessment. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "RISK_ASSESSMENT" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Next Review column. 7. Compare with review schedule configuration. 8. Verify risk level values and labels are displayed consistently in grid and details. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify risk level values and labels are displayed consistently in grid and details.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Next Review Date is calculated and displayed correctly based on risk review schedule. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Next Review Date should match review frequency rules. Requirement reference: Risk Assessment (RISK_ASSESSMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Risk Assessment |

### RDR_061 — Verify Review Frequency values are displayed correctly based on risk assessment configuration.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Risk Assessment |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Risk Assessment. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "RISK_ASSESSMENT" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Review Frequency column. 7. Compare values with source data. 8. Verify risk level values and labels are displayed consistently in grid and details. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Review Frequency values are displayed correctly based on risk assessment configuration. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Review Frequency should match source records. Requirement reference: Risk Assessment (RISK_ASSESSMENT). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Risk Assessment |

### RDR_062 — Verify search functionality using Assessment ID.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Risk Assessment |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Risk Assessment. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "RISK_ASSESSMENT" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter Assessment ID in search field. 7. Execute search. 8. Review results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Verify risk level values and labels are displayed consistently in grid and details. 12. Scroll through grid rows and verify sticky header remains visible. 13. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter Assessment ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter Assessment ID in search field.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality using Assessment ID. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching assessment record. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Risk Assessment |

### RDR_063 — Verify search functionality using Customer ID and retrieve all associated risk assessments.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Risk Assessment |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Risk Assessment. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "RISK_ASSESSMENT" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter Customer ID in search field. 7. Execute search. 8. Verify returned records. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Verify risk level values and labels are displayed consistently in grid and details. 12. Scroll through grid rows and verify sticky header remains visible. 13. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter Customer ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter Customer ID in search field.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality using Customer ID and retrieve all associated risk assessments. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | System should display matching customer assessments. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Risk Assessment |

### RDR_064 — Verify View action opens complete risk assessment details including score components and review information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Risk Assessment |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Risk Assessment. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "RISK_ASSESSMENT" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review assessment details. 8. Verify displayed information. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Verify risk level values and labels are displayed consistently in grid and details. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete risk assessment details including score components and review information. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open detailed assessment information. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Risk Assessment |

### RDR_065 — Verify CSV and Excel export functionality for Risk Assessment records.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Risk Assessment |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Risk Assessment. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "RISK_ASSESSMENT" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click CSV Export. 7. Validate downloaded file. 8. Click Excel Export. 9. Validate file contents. 10. Click CSV export and verify export action completes for current filtered dataset. 11. Click Excel export and verify downloaded file headers match on-screen columns. 12. Verify risk level values and labels are displayed consistently in grid and details. 13. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click CSV Export. - Click Excel Export. - Click CSV export and verify export action completes for current filtered dataset.  Business Validation: - Select master tab "RISK_ASSESSMENT" and wait for grid content to load. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click CSV export and verify export action completes for current filtered dataset.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - CSV and Excel export functionality for Risk Assessment records. succeeds for Risk Assessment. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Export files should download successfully with correct assessment data. Requirement reference: Export Formats. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Risk Assessment |

### RDR_066 — Verify Account ID is generated uniquely and displayed correctly for each account record loaded from CBS.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Account Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Account Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Account tab. 7. Review Account ID column. 8. Compare multiple records. 9. Verify uniqueness. 10. Review Account Master grid fields and verify displayed values are populated. 11. Compare selected row values with source snapshot and verify consistency. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Account ID is generated uniquely and displayed correctly for each account record loaded from CBS. succeeds for Account Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Each account should have a unique Account ID. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Account Master |

### RDR_067 — Verify Account ID hyperlink functionality and ensure account details open correctly when selected.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Account Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Account Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click Account ID hyperlink. 7. Verify account detail page/modal opens. 8. Review account information. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Click primary hyperlink in grid and verify navigation opens the expected detail route. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click Account ID hyperlink. - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Account ID hyperlink functionality and ensure account details open correctly when selected. succeeds for Account Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Clicking Account ID should open account details. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Account Master |

### RDR_068 — Verify Account Number is displayed according to masking requirements to protect sensitive banking information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Account Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Account Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Masked name: Rajesh K***r Sha***a |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Account No column. 7. Verify masking pattern. 8. Compare with source data. 9. Verify PII fields are masked for restricted role and readable for authorized role only. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify masking pattern. - Verify PII fields are masked for restricted role and readable for authorized role only.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Account Number is displayed according to masking requirements to protect sensitive banking information. succeeds for Account Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Account Number should be masked except permitted digits. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Account Master |

### RDR_069 — Verify Customer ID displayed against each account matches the linked customer profile.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Account Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Account Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Customer ID column. 7. Compare values with Customer Master. 8. Validate mapping. 9. Click primary hyperlink in grid and verify navigation opens the expected detail route. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer ID displayed against each account matches the linked customer profile. succeeds for Account Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Customer ID should match Customer Master data. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Account Master |

### RDR_070 — Verify Account Type values are displayed correctly based on account classification.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Account Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Account Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Type column. 7. Compare values with source records. 8. Review Account Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Account Type values are displayed correctly based on account classification. succeeds for Account Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Account Type should match source data. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Account Master |

### RDR_071 — Verify Currency and Branch details are displayed correctly for each account.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Account Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Account Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Currency and Branch columns. 7. Compare values with source data. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Currency and Branch details are displayed correctly for each account. succeeds for Account Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Currency and Branch should match source records. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Account Master |

### RDR_072 — Verify Account Status values are displayed correctly based on account lifecycle status.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Account Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Account Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Status column. 7. Compare with source records. 8. Review Account Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Account Status values are displayed correctly based on account lifecycle status. succeeds for Account Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Account Status should match source data. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Account Master |

### RDR_073 — Verify Frozen accounts are highlighted appropriately and displayed with Frozen status.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Account Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Account Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate frozen account. 7. Review Status column. 8. Verify visual indicator. 9. Review Account Master grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Frozen accounts are highlighted appropriately and displayed with Frozen status. succeeds for Account Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Frozen accounts should be visually distinguishable. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Account Master |

### RDR_074 — Verify Current Balance is displayed correctly and matches account balance received from CBS.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Account Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Account Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Current Balance column. 7. Compare values with CBS records. 8. Review Account Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Current Balance is displayed correctly and matches account balance received from CBS. succeeds for Account Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Current Balance should match source system data. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Account Master |

### RDR_075 — Verify Freeze Flag is displayed correctly for active and frozen accounts.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Account Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Account Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Freeze Flag column. 7. Compare values with source records. 8. Review Account Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Freeze Flag is displayed correctly for active and frozen accounts. succeeds for Account Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Freeze Flag should match account freeze status. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Account Master |

### RDR_076 — Verify Last Transaction Date is displayed correctly and reflects the latest transaction posted to the account.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Account Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Account Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Last Txn Date column. 7. Compare with source data. 8. Review Account Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Last Transaction Date is displayed correctly and reflects the latest transaction posted to the account. succeeds for Account Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Last Transaction Date should match source records. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Account Master |

### RDR_077 — Verify Customer ID filter functionality and ensure accounts are filtered correctly.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Account Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Account Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter Customer ID in filter section. 7. Click Apply. 8. Review results. 9. Apply branch or type filter and verify only matching records remain in grid. 10. Clear filters and verify the full dataset is restored. 11. Click primary hyperlink in grid and verify navigation opens the expected detail route. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Enter Customer ID in filter section. - Apply branch or type filter and verify only matching records remain in grid. - Clear filters and verify the full dataset is restored.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer ID filter functionality and ensure accounts are filtered correctly. succeeds for Account Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Only accounts linked to entered Customer ID should be displayed. Requirement reference: Filter Bars. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Account Master |

### RDR_078 — Verify search functionality using Account ID.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Account Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Account Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter Account ID in search field. 7. Execute search. 8. Review results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter Account ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality using Account ID. succeeds for Account Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching account record. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Account Master |

### RDR_079 — Verify View action opens complete account details including AML-related information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Account Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Account Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review account details. 8. Verify displayed information. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete account details including AML-related information. succeeds for Account Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open account detail screen. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Account Master |

### RDR_080 — Verify CSV and Excel export functionality for Account Master records.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Account Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Account Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click CSV Export. 7. Validate downloaded file. 8. Click Excel Export. 9. Validate file contents. 10. Click CSV export and verify export action completes for current filtered dataset. 11. Click Excel export and verify downloaded file headers match on-screen columns. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click CSV Export. - Click Excel Export. - Click CSV export and verify export action completes for current filtered dataset.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - CSV and Excel export functionality for Account Master records. succeeds for Account Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Export files should download successfully with correct account data. Requirement reference: Export Formats. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Account Master |

### RDR_081 — Verify Relationship ID (Rel ID) is displayed uniquely for every customer-account relationship record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer-Account Relationship |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer-Account Relationship. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Cust-Acct Rel tab. 7. Review Rel ID column. 8. Compare multiple records. 9. Review Customer-Account Relationship grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare multiple records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Relationship ID (Rel ID) is displayed uniquely for every customer-account relationship record. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Each relationship record should have a unique Rel ID. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer-Account Relationship |

### RDR_082 — Verify Customer ID displayed in relationship records matches the linked customer profile in Customer Master.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer-Account Relationship |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer-Account Relationship. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Customer ID column. 7. Compare values with Customer Master. 8. Click primary hyperlink in grid and verify navigation opens the expected detail route. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with Customer Master.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer ID displayed in relationship records matches the linked customer profile in Customer Master. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Customer ID should match source customer data. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer-Account Relationship |

### RDR_083 — Verify Account ID displayed in relationship records matches the linked account in Account Master.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer-Account Relationship |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer-Account Relationship. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Account ID column. 7. Compare with Account Master records. 8. Click primary hyperlink in grid and verify navigation opens the expected detail route. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Account ID column.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Account ID displayed in relationship records matches the linked account in Account Master. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Account ID should match source account data. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer-Account Relationship |

### RDR_084 — Verify Relationship Type is displayed correctly according to the account ownership relationship maintained in source systems.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer-Account Relationship |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer-Account Relationship. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Relationship Type column. 7. Compare values with source records. 8. Review Customer-Account Relationship grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Relationship Type is displayed correctly according to the account ownership relationship maintained in source systems. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Relationship Type should match source data. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer-Account Relationship |

### RDR_085 — Verify Signing Authority values are displayed correctly and reflect the account operation rights assigned to the customer.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer-Account Relationship |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer-Account Relationship. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Signing Authority column. 7. Compare values with source records. 8. Review Customer-Account Relationship grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Signing Authority values are displayed correctly and reflect the account operation rights assigned to the customer. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Signing Authority should match source data. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer-Account Relationship |

### RDR_086 — Verify Ownership Percentage is displayed correctly for the customer-account relationship.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer-Account Relationship |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer-Account Relationship. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Ownership % column. 7. Compare values with source data. 8. Review Customer-Account Relationship grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Ownership Percentage is displayed correctly for the customer-account relationship. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Ownership percentage should match source records. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer-Account Relationship |

### RDR_087 — Verify Effective Date is displayed correctly and represents the date from which the relationship became active.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer-Account Relationship |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer-Account Relationship. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Effective Date column. 7. Compare values with source records. 8. Review Customer-Account Relationship grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Effective Date is displayed correctly and represents the date from which the relationship became active. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Effective Date should match source data. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer-Account Relationship |

### RDR_088 — Verify KYC Status values are displayed correctly and reflect the latest KYC review status.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer-Account Relationship |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer-Account Relationship. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; KYC status: COMPLETE; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review KYC Status column. 7. Compare values with source records. 8. Review Customer-Account Relationship grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - KYC Status values are displayed correctly and reflect the latest KYC review status. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | KYC Status should match source data. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer-Account Relationship |

### RDR_089 — Verify search functionality using Relationship ID and retrieve the exact matching relationship record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer-Account Relationship |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer-Account Relationship. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter Rel ID in search box. 7. Execute search. 8. Verify results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter Rel ID in search box. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter a valid search value and verify matching records are displayed.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality using Relationship ID and retrieve the exact matching relationship record. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return only the matching relationship record. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer-Account Relationship |

### RDR_090 — Verify View action opens complete customer-account relationship details including customer, account and KYC information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Customer-Account Relationship |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer-Account Relationship. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review relationship details screen. 8. Validate displayed information. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Click primary hyperlink in grid and verify navigation opens the expected detail route. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete customer-account relationship details including customer, account and KYC information. succeeds for Customer-Account Relationship. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open relationship details successfully. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Customer-Account Relationship |

### RDR_091 — Verify Loan ID is displayed uniquely for every loan account record and correctly mapped to the loan account.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Loan Account |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Loan Account. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Loan Account tab. 7. Review Loan ID column. 8. Compare multiple records. 9. Verify uniqueness. 10. Review Loan Account grid fields and verify displayed values are populated. 11. Compare selected row values with source snapshot and verify consistency. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Loan ID is displayed uniquely for every loan account record and correctly mapped to the loan account. succeeds for Loan Account. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Each loan record should have a unique Loan ID. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Loan Account |

### RDR_092 — Verify Customer ID displayed against each loan account matches the linked customer profile.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Loan Account |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Loan Account. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Customer ID column. 7. Compare with Customer Master records. 8. Click primary hyperlink in grid and verify navigation opens the expected detail route. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer ID displayed against each loan account matches the linked customer profile. succeeds for Loan Account. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Customer ID should match Customer Master data. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Loan Account |

### RDR_093 — Verify Account ID displayed against each loan account matches the linked account in Account Master.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Loan Account |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Loan Account. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Account ID column. 7. Compare with Account Master records. 8. Click primary hyperlink in grid and verify navigation opens the expected detail route. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Account ID displayed against each loan account matches the linked account in Account Master. succeeds for Loan Account. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Account ID should match Account Master data. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Loan Account |

### RDR_094 — Verify Loan Type is displayed correctly based on the loan product assigned to the customer.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Loan Account |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Loan Account. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Loan Type column. 7. Compare values with source data. 8. Review Loan Account grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Loan Type is displayed correctly based on the loan product assigned to the customer. succeeds for Loan Account. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Loan Type should match source records. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Loan Account |

### RDR_095 — Verify Sanctioned Amount is displayed correctly and matches the approved loan amount maintained in CBS.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Loan Account |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Loan Account. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Sanctioned Amount column. 7. Compare values with CBS records. 8. Verify sanctions flags are displayed accurately for matched records. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Review Sanctioned Amount column. - Verify sanctions flags are displayed accurately for matched records.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Sanctioned Amount is displayed correctly and matches the approved loan amount maintained in CBS. succeeds for Loan Account. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Sanctioned Amount should match source records. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Loan Account |

### RDR_096 — Verify Outstanding Balance is displayed correctly and reflects the current unpaid loan balance.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Loan Account |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Loan Account. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Outstanding Balance column. 7. Compare with source records. 8. Review Loan Account grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Outstanding Balance is displayed correctly and reflects the current unpaid loan balance. succeeds for Loan Account. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Outstanding Balance should match CBS loan balance. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Loan Account |

### RDR_097 — Verify Interest Rate is displayed correctly for each loan account as per the approved loan terms.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Loan Account |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Loan Account. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Interest Rate column. 7. Compare values with source records. 8. Review Loan Account grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Interest Rate is displayed correctly for each loan account as per the approved loan terms. succeeds for Loan Account. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Interest Rate should match source records. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Loan Account |

### RDR_098 — Verify Disbursement Date and Maturity Date are displayed correctly according to loan lifecycle information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Loan Account |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Loan Account. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Disbursement Date and Maturity Date columns. 7. Compare with source records. 8. Review Loan Account grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Disbursement Date and Maturity Date are displayed correctly according to loan lifecycle information. succeeds for Loan Account. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Dates should match source records. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Loan Account |

### RDR_099 — Verify Loan Status values are displayed correctly and reflect the current loan condition.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Loan Account |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Loan Account. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Status column. 7. Compare values with source records. 8. Review Loan Account grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Loan Status values are displayed correctly and reflect the current loan condition. succeeds for Loan Account. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Loan Status should match source data. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Loan Account |

### RDR_100 — Verify View action opens complete loan account details including loan information, balances, repayment schedule and status.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → Loan Account |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Loan Account. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button for selected loan. 7. Review loan details page. 8. Validate displayed information. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Verify sanctions flags are displayed accurately for matched records. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify sanctions flags are displayed accurately for matched records.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT Master" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete loan account details including loan information, balances, repayment schedule and status. succeeds for Loan Account. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open loan details successfully. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, Loan Account |

### RDR_101 — Verify Balance ID is generated uniquely and displayed correctly for every EOD balance record loaded from CBS.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → EOD Balance |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register EOD Balance. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open EOD Balance tab. 7. Review Balance ID column. 8. Compare multiple records. 9. Verify uniqueness. 10. Review EOD Balance grid fields and verify displayed values are populated. 11. Compare selected row values with source snapshot and verify consistency. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Balance ID is generated uniquely and displayed correctly for every EOD balance record loaded from CBS. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Each EOD balance record should have a unique Balance ID. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, EOD Balance |

### RDR_102 — Verify Account ID displayed in EOD records matches the linked account in Account Master.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → EOD Balance |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register EOD Balance. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Account ID column. 7. Compare with Account Master records. 8. Click primary hyperlink in grid and verify navigation opens the expected detail route. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Account ID displayed in EOD records matches the linked account in Account Master. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Account ID should match Account Master data. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, EOD Balance |

### RDR_103 — Verify Customer ID displayed against each EOD balance record matches the linked customer profile.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → EOD Balance |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register EOD Balance. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Customer ID column. 7. Compare with Customer Master records. 8. Click primary hyperlink in grid and verify navigation opens the expected detail route. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer ID displayed against each EOD balance record matches the linked customer profile. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Customer ID should match Customer Master data. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, EOD Balance |

### RDR_104 — Verify Balance Date is displayed correctly and represents the business date for which EOD balance was calculated.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → EOD Balance |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register EOD Balance. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Balance Date column. 7. Compare with source records. 8. Review EOD Balance grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Balance Date is displayed correctly and represents the business date for which EOD balance was calculated. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Balance Date should match CBS EOD processing date. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, EOD Balance |

### RDR_105 — Verify Opening Balance is displayed correctly and matches the opening balance received from CBS.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → EOD Balance |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register EOD Balance. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Opening Bal column. 7. Compare with CBS records. 8. Review EOD Balance grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Opening Balance is displayed correctly and matches the opening balance received from CBS. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Opening Balance should match source records. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, EOD Balance |

### RDR_106 — Verify Total Credits and Total Debits are displayed correctly for the selected EOD date.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → EOD Balance |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register EOD Balance. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Total Credits and Total Debits columns. 7. Compare with source data. 8. Review EOD Balance grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Total Credits and Total Debits are displayed correctly for the selected EOD date. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Credit and Debit amounts should match CBS transaction summary. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, EOD Balance |

### RDR_107 — Verify Closing Balance is calculated and displayed correctly based on Opening Balance, Credits and Debits.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → EOD Balance |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register EOD Balance. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Opening Balance, Credits, Debits and Closing Balance. 7. Validate calculation. 8. Review EOD Balance grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Closing Balance is calculated and displayed correctly based on Opening Balance, Credits and Debits. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Closing Balance should match CBS calculated balance. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, EOD Balance |

### RDR_108 — Verify Currency values are displayed correctly for all EOD balance records.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → EOD Balance |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register EOD Balance. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Currency column. 7. Compare with account details. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Currency values are displayed correctly for all EOD balance records. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Currency should match account currency. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, EOD Balance |

### RDR_109 — Verify Credit Count and Debit Count values are displayed correctly based on transaction activity for the day.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → EOD Balance |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register EOD Balance. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Credit Count and Debit Count columns. 7. Compare with source records. 8. Review EOD Balance grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Credit Count and Debit Count values are displayed correctly based on transaction activity for the day. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Transaction counts should match CBS transaction summary. Requirement reference: Account Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, EOD Balance |

### RDR_110 — Verify View action opens complete EOD balance details including balance calculation and transaction summary information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer & Account Data → EOD Balance |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register EOD Balance. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review EOD balance details. 8. Validate displayed information. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Select master tab "ACCOUNT_EOD_BAL" and wait for grid content to load.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete EOD balance details including balance calculation and transaction summary information. succeeds for EOD Balance. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open detailed EOD balance information. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer & Account Data, EOD Balance |

### RDR_111 — Verify Card ID is generated uniquely and displayed correctly for every card record loaded from CBS.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Card Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Card Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUST_ACCT_REL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Card Master tab. 7. Review Card ID column. 8. Compare multiple records. 9. Verify uniqueness. 10. Review Card Master grid fields and verify displayed values are populated. 11. Compare selected row values with source snapshot and verify consistency. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare multiple records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Card ID is generated uniquely and displayed correctly for every card record loaded from CBS. succeeds for Card Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Each card record should have a unique Card ID. Requirement reference: Card Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Card Master |

### RDR_112 — Verify Customer ID and Account ID displayed for each card are correctly mapped to the associated customer and account records.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Card Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Card Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUST_ACCT_REL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Customer ID and Account ID columns. 7. Compare with Customer Master and Account Master records. 8. Review Card Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Customer ID and Account ID columns.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer ID and Account ID displayed for each card are correctly mapped to the associated customer and account records. succeeds for Card Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Customer ID and Account ID should match source data. Requirement reference: Card Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Card Master |

### RDR_113 — Verify masked card number (Last 4 digits) is displayed according to PCI-DSS masking requirements.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Card Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Card Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; Masked name: Rajesh K***r Sha***a |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUST_ACCT_REL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Last 4 column. 7. Compare with source card number. 8. Verify masking rules. 9. Verify PII fields are masked for restricted role and readable for authorized role only. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify masking rules. - Verify PII fields are masked for restricted role and readable for authorized role only.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source card number.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Masked card number (Last 4 digits) is displayed according to PCI-DSS masking requirements. succeeds for Card Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Card number should be masked and display only permitted digits. Requirement reference: Card Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Card Master |

### RDR_114 — Verify Card Type values are displayed correctly according to card classification maintained in source systems.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Card Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Card Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUST_ACCT_REL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Card Type column. 7. Compare values with source data. 8. Review Card Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Card Type values are displayed correctly according to card classification maintained in source systems. succeeds for Card Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Card Type should match source records. Requirement reference: Card Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Card Master |

### RDR_115 — Verify card Network values are displayed correctly for issued cards.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Card Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Card Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUST_ACCT_REL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Network column. 7. Compare values with source records. 8. Review Card Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Card Network values are displayed correctly for issued cards. succeeds for Card Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Network should match source records. Requirement reference: Card Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Card Master |

### RDR_116 — Verify Card Status values are displayed correctly and reflect the current card lifecycle status.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Card Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Card Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUST_ACCT_REL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Status column. 7. Compare values with source data. 8. Verify visual indicators. 9. Review Card Master grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Card Status values are displayed correctly and reflect the current card lifecycle status. succeeds for Card Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Card Status should match source records. Requirement reference: Card Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Card Master |

### RDR_117 — Verify hot-listed cards are highlighted appropriately and displayed with the correct status indicator.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Card Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Card Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUST_ACCT_REL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate hot-listed card. 7. Review Status column. 8. Verify status indicator. 9. Review Card Master grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Card Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Hot-listed cards are highlighted appropriately and displayed with the correct status indicator. succeeds for Card Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Hot-listed cards should be visually distinguishable. Requirement reference: Card Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Card Master |

### RDR_118 — Verify Issue Date and Expiry Date are displayed correctly for issued cards.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Card Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Card Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUST_ACCT_REL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Issue Date and Expiry Date columns. 7. Compare with source records. 8. Review Card Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Issue Date and Expiry Date are displayed correctly for issued cards. succeeds for Card Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Dates should match source records. Requirement reference: Card Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Card Master |

### RDR_119 — Verify International Usage and Contactless indicators are displayed correctly based on card configuration.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Card Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Card Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUST_ACCT_REL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review INTL Usage column. 7. Review Contactless column. 8. Compare with source records. 9. Review Card Master grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - International Usage and Contactless indicators are displayed correctly based on card configuration. succeeds for Card Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Usage flags should match card settings. Requirement reference: Card Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Card Master |

### RDR_120 — Verify View action opens complete card details including card status, limits, AML risk flags and usage configuration.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Card Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Card Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; Risk rating: LOW; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUST_ACCT_REL" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review card details page. 8. Validate displayed information. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Verify PII fields are masked for restricted role and readable for authorized role only. 12. Verify risk level values and labels are displayed consistently in grid and details. 13. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify PII fields are masked for restricted role and readable for authorized role only. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete card details including card status, limits, AML risk flags and usage configuration. succeeds for Card Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open detailed card information. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Card Master |

### RDR_121 — Verify Mobile Banking ID (MB ID) is generated uniquely and displayed correctly for each mobile banking registration record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Mobile Banking |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Mobile Banking. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "MOBILE_BANKING" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Mobile Banking tab. 7. Review MB ID column. 8. Compare multiple records. 9. Verify uniqueness. 10. Review Mobile Banking grid fields and verify displayed values are populated. 11. Compare selected row values with source snapshot and verify consistency. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare multiple records. - Review Mobile Banking grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Mobile Banking ID (MB ID) is generated uniquely and displayed correctly for each mobile banking registration record. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Each registration should have a unique Mobile Banking ID. Requirement reference: Mobile Banking. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Mobile Banking |

### RDR_122 — Verify Customer ID and Account ID displayed in mobile banking records are correctly mapped to the linked customer and account.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Mobile Banking |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Mobile Banking. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "MOBILE_BANKING" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Customer ID and Account ID columns. 7. Compare with Customer Master and Account Master data. 8. Click primary hyperlink in grid and verify navigation opens the expected detail route. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review Customer ID and Account ID columns. - Compare with Customer Master and Account Master data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer ID and Account ID displayed in mobile banking records are correctly mapped to the linked customer and account. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Customer ID and Account ID should match source records. Requirement reference: Mobile Banking. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Mobile Banking |

### RDR_123 — Verify registered mobile number is displayed according to masking rules to protect customer PII information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Mobile Banking |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Mobile Banking. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; Masked name: Rajesh K***r Sha***a |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "MOBILE_BANKING" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Mobile Number column. 7. Verify masking pattern. 8. Compare with source records. 9. Verify PII fields are masked for restricted role and readable for authorized role only. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify masking pattern. - Verify PII fields are masked for restricted role and readable for authorized role only.  Data Validation: - Compare with source records. - Verify PII fields are masked for restricted role and readable for authorized role only.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Registered mobile number is displayed according to masking rules to protect customer PII information. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Mobile number should be masked. Requirement reference: Mobile Banking. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Mobile Banking |

### RDR_124 — Verify Registration Date is displayed correctly and reflects the actual mobile banking enrollment date.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Mobile Banking |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Mobile Banking. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "MOBILE_BANKING" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Registration Date column. 7. Compare with source data. 8. Review Mobile Banking grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source data. - Review Mobile Banking grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Registration Date is displayed correctly and reflects the actual mobile banking enrollment date. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Registration Date should match source records. Requirement reference: Mobile Banking. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Mobile Banking |

### RDR_125 — Verify Registration Channel values are displayed correctly according to the channel used during mobile banking registration.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Mobile Banking |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Mobile Banking. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "MOBILE_BANKING" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Reg Channel column. 7. Compare values with source records. 8. Review Mobile Banking grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review Mobile Banking grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Registration Channel values are displayed correctly according to the channel used during mobile banking registration. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Registration Channel should match source records. Requirement reference: Mobile Banking. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Mobile Banking |

### RDR_126 — Verify UPI VPA is displayed correctly and mapped to the corresponding mobile banking customer.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Mobile Banking |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Mobile Banking. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "MOBILE_BANKING" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review UPI VPA column. 7. Compare with source data. 8. Review Mobile Banking grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source data. - Review Mobile Banking grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - UPI VPA is displayed correctly and mapped to the corresponding mobile banking customer. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | UPI VPA should match source records. Requirement reference: Mobile Banking. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Mobile Banking |

### RDR_127 — Verify UPI Banks Linked count is displayed correctly and reflects the number of bank accounts linked to UPI.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Mobile Banking |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Mobile Banking. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "MOBILE_BANKING" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review UPI Banks Linked column. 7. Compare with source records. 8. Click primary hyperlink in grid and verify navigation opens the expected detail route. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source records. - Scroll through grid rows and verify sticky header remains visible.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - UPI Banks Linked count is displayed correctly and reflects the number of bank accounts linked to UPI. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Linked bank count should match source records. Requirement reference: Mobile Banking. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Mobile Banking |

### RDR_128 — Verify Login Failures (24H) count is displayed correctly and reflects failed login attempts within the last 24 hours.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Mobile Banking |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Mobile Banking. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "MOBILE_BANKING" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Compare with source records. 7. Review Mobile Banking grid fields and verify displayed values are populated. 8. Compare selected row values with source snapshot and verify consistency. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source records. - Review Mobile Banking grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Login Failures (24H) count is displayed correctly and reflects failed login attempts within the last 24 hours. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Login failure count should match source records. Requirement reference: Mobile Banking. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Mobile Banking |

### RDR_129 — Verify Status values are displayed correctly and reflect the current mobile banking registration status.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Mobile Banking |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Mobile Banking. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "MOBILE_BANKING" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Status column. 7. Compare with source records. 8. Review Mobile Banking grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source records. - Review Mobile Banking grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Status values are displayed correctly and reflect the current mobile banking registration status. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Status should match source records. Requirement reference: Mobile Banking. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Mobile Banking |

### RDR_130 — Verify View action opens complete mobile banking details including registration information, AML indicators and mobile banking activity details.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Mobile Banking |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Mobile Banking. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "MOBILE_BANKING" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review mobile banking details. 8. Validate displayed information. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete mobile banking details including registration information, AML indicators and mobile banking activity details. succeeds for Mobile Banking. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open detailed registration information. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Mobile Banking |

### RDR_131 — Verify ATM ID is generated uniquely and displayed correctly for every ATM record loaded from CBS.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → ATM Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register ATM Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "ATM_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open ATM Master tab. 7. Review ATM ID column. 8. Compare multiple records. 9. Verify uniqueness. 10. Review ATM Master grid fields and verify displayed values are populated. 11. Compare selected row values with source snapshot and verify consistency. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare multiple records. - Review ATM Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - ATM ID is generated uniquely and displayed correctly for every ATM record loaded from CBS. succeeds for ATM Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Each ATM should have a unique ATM ID. Requirement reference: ATM Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, ATM Master |

### RDR_132 — Verify ATM Code is displayed correctly and uniquely identifies each ATM machine.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → ATM Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register ATM Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "ATM_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review ATM Code column. 7. Compare with source data. 8. Review ATM Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source data. - Review ATM Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - ATM Code is displayed correctly and uniquely identifies each ATM machine. succeeds for ATM Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | ATM Code should match source records. Requirement reference: ATM Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, ATM Master |

### RDR_133 — Verify ATM Name is displayed correctly and matches the ATM location name maintained in CBS.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → ATM Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register ATM Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "ATM_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review ATM Name column. 7. Compare values with source data. 8. Review ATM Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review ATM Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - ATM Name is displayed correctly and matches the ATM location name maintained in CBS. succeeds for ATM Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | ATM Name should match source records. Requirement reference: ATM Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, ATM Master |

### RDR_134 — Verify Branch information is displayed correctly for each ATM location.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → ATM Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register ATM Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "ATM_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Branch column. 7. Compare with source records. 8. Review ATM Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source records. - Review ATM Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Branch information is displayed correctly for each ATM location. succeeds for ATM Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Branch should match source records. Requirement reference: ATM Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, ATM Master |

### RDR_135 — Verify ATM Type values are displayed correctly according to ATM classification maintained in source systems.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → ATM Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register ATM Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "ATM_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review ATM Type column. 7. Compare values with source data. 8. Review ATM Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review ATM Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - ATM Type values are displayed correctly according to ATM classification maintained in source systems. succeeds for ATM Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | ATM Type should match source records. Requirement reference: ATM Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, ATM Master |

### RDR_136 — Verify City values are displayed correctly based on ATM location information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → ATM Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register ATM Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "ATM_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review City column. 7. Compare values with source records. 8. Review ATM Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review ATM Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - City values are displayed correctly based on ATM location information. succeeds for ATM Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | City should match source records. Requirement reference: ATM Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, ATM Master |

### RDR_137 — Verify Country Code is displayed correctly for ATM locations.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → ATM Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register ATM Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "ATM_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Country column. 7. Compare with source records. 8. Review ATM Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review Country column. - Compare with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Country Code is displayed correctly for ATM locations. succeeds for ATM Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Country should match source records. Requirement reference: ATM Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, ATM Master |

### RDR_138 — Verify ATM Status is displayed correctly and reflects the current operational state of the ATM.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → ATM Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register ATM Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "ATM_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Status column. 7. Compare with source data. 8. Review ATM Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source data. - Review ATM Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - ATM Status is displayed correctly and reflects the current operational state of the ATM. succeeds for ATM Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Status should match source records. Requirement reference: ATM Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, ATM Master |

### RDR_139 — Verify search functionality using ATM ID.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → ATM Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register ATM Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "ATM_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter ATM ID in search field. 7. Execute search. 8. Review results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter ATM ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Enter ATM ID in search field. - Enter a valid search value and verify matching records are displayed.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality using ATM ID. succeeds for ATM Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching ATM record. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, ATM Master |

### RDR_140 — Verify search functionality using ATM Code.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → ATM Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register ATM Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "ATM_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter ATM Code in search box. 7. Execute search. 8. Enter a valid search value and verify matching records are displayed. 9. Enter a non-matching search value and verify empty state messaging is shown. 10. Scroll through grid rows and verify sticky header remains visible. 11. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter ATM Code in search box. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality using ATM Code. succeeds for ATM Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching ATM record. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, ATM Master |

### RDR_141 — Verify High Risk Location Flag in ATM details for ATMs located in high-risk geographic areas.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → ATM Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register ATM Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "ATM_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review High Risk Location Flag. 8. Compare with source data. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Verify risk level values and labels are displayed consistently in grid and details. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Review High Risk Location Flag. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Compare with source data. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - High Risk Location Flag in ATM details for ATMs located in high-risk geographic areas. succeeds for ATM Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Flag should match source risk data. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, ATM Master |

### RDR_142 — Verify Daily Cash Loaded value is displayed correctly in ATM details.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → ATM Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register ATM Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "ATM_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open ATM details. 7. Review Daily Cash Loaded field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review Daily Cash Loaded field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Daily Cash Loaded value is displayed correctly in ATM details. succeeds for ATM Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Cash loaded amount should match source records. Requirement reference: ATM Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, ATM Master |

### RDR_143 — Verify View action opens complete ATM details including AML and operational information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → ATM Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register ATM Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "ATM_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review ATM details page. 8. Validate information displayed. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Verify risk level values and labels are displayed consistently in grid and details. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete ATM details including AML and operational information. succeeds for ATM Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open ATM details successfully. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, ATM Master |

### RDR_144 — Verify CSV export functionality for ATM Master records.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → ATM Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register ATM Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "ATM_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click CSV button. 7. Download file. 8. Validate contents. 9. Click CSV export and verify export action completes for current filtered dataset. 10. Click Excel export and verify downloaded file headers match on-screen columns. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click CSV export and verify export action completes for current filtered dataset. - Click Excel export and verify downloaded file headers match on-screen columns. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Click CSV export and verify export action completes for current filtered dataset. - Scroll through grid rows and verify sticky header remains visible.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - CSV export functionality for ATM Master records. succeeds for ATM Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | CSV file should download successfully. Requirement reference: Export Formats. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, ATM Master |

### RDR_145 — Verify Excel export functionality for ATM Master records.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → ATM Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register ATM Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "ATM_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click Excel button. 7. Download file. 8. Validate contents. 9. Click CSV export and verify export action completes for current filtered dataset. 10. Click Excel export and verify downloaded file headers match on-screen columns. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click CSV export and verify export action completes for current filtered dataset. - Click Excel export and verify downloaded file headers match on-screen columns. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Click CSV export and verify export action completes for current filtered dataset. - Scroll through grid rows and verify sticky header remains visible.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Excel export functionality for ATM Master records. succeeds for ATM Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Excel file should download successfully. Requirement reference: Export Formats. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, ATM Master |

### RDR_146 — Verify Instrument ID is generated uniquely and displayed correctly for each instrument record loaded from CBS.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Instruments |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Instruments. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Instruments tab. 7. Review Instrument ID column. 8. Compare multiple records. 9. Verify uniqueness. 10. Review Instruments grid fields and verify displayed values are populated. 11. Compare selected row values with source snapshot and verify consistency. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare multiple records. - Review Instruments grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Instrument ID is generated uniquely and displayed correctly for each instrument record loaded from CBS. succeeds for Instruments. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Each instrument should have a unique Instrument ID. Requirement reference: Instruments (INSTRUMENT_MASTER). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Instruments |

### RDR_147 — Verify Instrument Type values are displayed correctly according to instrument classification maintained in source systems.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Instruments |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Instruments. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Type column. 7. Compare values with source records. 8. Review Instruments grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review Instruments grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Instrument Type values are displayed correctly according to instrument classification maintained in source systems. succeeds for Instruments. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Instrument Type should match source data. Requirement reference: Instruments (INSTRUMENT_MASTER). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Instruments |

### RDR_148 — Verify search functionality using Instrument ID and ensure the correct instrument record is retrieved.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Instruments |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Instruments. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter Instrument ID in search field. 7. Execute search. 8. Review results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter Instrument ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Enter Instrument ID in search field. - Enter a valid search value and verify matching records are displayed.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality using Instrument ID and ensure the correct instrument record is retrieved. succeeds for Instruments. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching instrument record. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Instruments |

### RDR_149 — Verify View action opens complete instrument details including status and AML-related information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Instruments |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Instruments. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review instrument detail screen. 8. Validate displayed information. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete instrument details including status and AML-related information. succeeds for Instruments. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open instrument details successfully. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Instruments |

### RDR_150 — Verify Instrument Status is displayed correctly in instrument details and reflects the current instrument lifecycle state.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Instruments |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Instruments. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open instrument details. 7. Review Instrument Status field. 8. Compare with source data. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review Instrument Status field. - Compare with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Instrument Status is displayed correctly in instrument details and reflects the current instrument lifecycle state. succeeds for Instruments. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Instrument Status should match source records. Requirement reference: Instruments (INSTRUMENT_MASTER). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Instruments |

### RDR_151 — Verify dishonoured instruments display the correct Dishonour Reason in instrument details.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Instruments |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Instruments. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open instrument details. 7. Review Dishonour Reason field. 8. Compare with source data. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review Dishonour Reason field. - Compare with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Dishonoured instruments display the correct Dishonour Reason in instrument details. succeeds for Instruments. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Dishonour Reason should match source records. Requirement reference: Instruments (INSTRUMENT_MASTER). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Instruments |

### RDR_152 — Verify Stop Payment Flag is displayed correctly for instruments where stop-payment instructions have been placed.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Instruments |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Instruments. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open instrument details. 7. Review Stop Payment Flag field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review Stop Payment Flag field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Stop Payment Flag is displayed correctly for instruments where stop-payment instructions have been placed. succeeds for Instruments. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Stop Payment Flag should match source records. Requirement reference: Instruments (INSTRUMENT_MASTER). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Instruments |

### RDR_153 — Verify AML Alert Flag is displayed correctly for instruments flagged by AML monitoring rules.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Instruments |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Instruments. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open instrument details. 7. Review Alert Flag field. 8. Compare with AML source data. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review Alert Flag field. - Compare with AML source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - AML Alert Flag is displayed correctly for instruments flagged by AML monitoring rules. succeeds for Instruments. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Alert Flag should match AML assessment results. Requirement reference: Instruments (INSTRUMENT_MASTER). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Instruments |

### RDR_154 — Verify CSV export functionality for Instrument Master records.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Instruments |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Instruments. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click CSV button. 7. Download file. 8. Validate contents. 9. Click CSV export and verify export action completes for current filtered dataset. 10. Click Excel export and verify downloaded file headers match on-screen columns. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click CSV export and verify export action completes for current filtered dataset. - Click Excel export and verify downloaded file headers match on-screen columns. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Click CSV export and verify export action completes for current filtered dataset. - Scroll through grid rows and verify sticky header remains visible.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - CSV export functionality for Instrument Master records. succeeds for Instruments. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | CSV file should download successfully. Requirement reference: Export Formats. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Instruments |

### RDR_155 — Verify Excel export functionality for Instrument Master records.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Instruments |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Instruments. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "INSTRUMENT_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click Excel button. 7. Download file. 8. Validate contents. 9. Click CSV export and verify export action completes for current filtered dataset. 10. Click Excel export and verify downloaded file headers match on-screen columns. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click CSV export and verify export action completes for current filtered dataset. - Click Excel export and verify downloaded file headers match on-screen columns. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Click CSV export and verify export action completes for current filtered dataset. - Scroll through grid rows and verify sticky header remains visible.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Excel export functionality for Instrument Master records. succeeds for Instruments. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Excel file should download successfully. Requirement reference: Export Formats. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Instruments |

### RDR_156 — Verify Device ID is generated uniquely and displayed correctly for each transaction device record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Transaction Device |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Device. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "Transaction Device" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open TXN Device tab. 7. Review Device ID column. 8. Compare multiple records. 9. Verify uniqueness. 10. Review Transaction Device grid fields and verify displayed values are populated. 11. Compare selected row values with source snapshot and verify consistency. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare multiple records. - Review Transaction Device grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Device ID is generated uniquely and displayed correctly for each transaction device record. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Each device should have a unique Device ID. Requirement reference: Transaction Device (TXN_DEVICE). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Transaction Device |

### RDR_157 — Verify Device Type is displayed correctly according to the registered device classification.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Transaction Device |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Device. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "Transaction Device" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Type column. 7. Compare values with source data. 8. Review Transaction Device grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Transaction Device grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Device Type is displayed correctly according to the registered device classification. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Device Type should match source records. Requirement reference: Transaction Device (TXN_DEVICE). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Transaction Device |

### RDR_158 — Verify OS information is displayed correctly for registered transaction devices.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Transaction Device |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Device. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "Transaction Device" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review OS column. 7. Compare values with source data. 8. Review Transaction Device grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Transaction Device grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - OS information is displayed correctly for registered transaction devices. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | OS should match source records. Requirement reference: Transaction Device (TXN_DEVICE). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Transaction Device |

### RDR_159 — Verify Device Model is displayed correctly according to device registration information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Transaction Device |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Device. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "Transaction Device" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Model column. 7. Compare values with source records. 8. Review Transaction Device grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review Transaction Device grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Device Model is displayed correctly according to device registration information. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Model should match source records. Requirement reference: Transaction Device (TXN_DEVICE). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Transaction Device |

### RDR_160 — Verify IMEI/Device Fingerprint information is displayed in masked format to protect sensitive device data.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Transaction Device |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Device. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; Masked name: Rajesh K***r Sha***a |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "Transaction Device" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review IMEI column. 7. Verify masking pattern. 8. Compare with source records. 9. Verify PII fields are masked for restricted role and readable for authorized role only. 10. Attempt access with unauthorized role and verify access is denied without exposing data. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify masking pattern. - Verify PII fields are masked for restricted role and readable for authorized role only.  Data Validation: - Compare with source records. - Verify PII fields are masked for restricted role and readable for authorized role only.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - Attempt access with unauthorized role and verify access is denied without exposing data.  System Behaviour: - IMEI/Device Fingerprint information is displayed in masked format to protect sensitive device data. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | IMEI should be masked according to security requirements. Requirement reference: Transaction Device (TXN_DEVICE). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Transaction Device |

### RDR_161 — Verify Customer IDs displayed against each device are correctly mapped to registered customers.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Transaction Device |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Device. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "Transaction Device" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Customer IDs column. 7. Compare values with customer records. 8. Review Transaction Device grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with customer records. - Review Transaction Device grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer IDs displayed against each device are correctly mapped to registered customers. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Customer IDs should match source records. Requirement reference: Transaction Device (TXN_DEVICE). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Transaction Device |

### RDR_162 — Verify devices linked to multiple customer IDs are identified correctly according to AML rules.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Transaction Device |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Device. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "Transaction Device" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Customer IDs column. 7. Identify devices linked to multiple customers. 8. Compare with source records. 9. Click primary hyperlink in grid and verify navigation opens the expected detail route. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source records. - Scroll through grid rows and verify sticky header remains visible.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Devices linked to multiple customer IDs are identified correctly according to AML rules. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Multi-customer device mapping should be displayed accurately. Requirement reference: Transaction Device (TXN_DEVICE). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Transaction Device |

### RDR_163 — Verify Customer Count value in device details matches the number of linked customers.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Transaction Device |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Device. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "Transaction Device" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open device details. 7. Review Customer Count field. 8. Compare with associated customer IDs. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Click primary hyperlink in grid and verify navigation opens the expected detail route. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review Customer Count field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer Count value in device details matches the number of linked customers. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Customer Count should match associated customer IDs. Requirement reference: Transaction Device (TXN_DEVICE). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Transaction Device |

### RDR_164 — Verify High Risk Device Flag is displayed correctly for devices identified as AML high-risk.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Transaction Device |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Device. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "Transaction Device" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open device details. 7. Review High Risk Device Flag. 8. Compare with AML source data. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Verify risk level values and labels are displayed consistently in grid and details. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Review High Risk Device Flag. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Compare with AML source data. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - High Risk Device Flag is displayed correctly for devices identified as AML high-risk. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Flag should match AML risk assessment. Requirement reference: Transaction Device (TXN_DEVICE). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Transaction Device |

### RDR_165 — Verify High Risk Reason is displayed correctly for flagged devices.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Transaction Device |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Device. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "Transaction Device" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open device details. 7. Review High Risk Reason field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Verify risk level values and labels are displayed consistently in grid and details. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Review High Risk Reason field. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Review High Risk Reason field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - High Risk Reason is displayed correctly for flagged devices. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | High Risk Reason should match AML rules. Requirement reference: Transaction Device (TXN_DEVICE). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Transaction Device |

### RDR_166 — Verify Rooted Device Flag is displayed correctly when a device is identified as rooted or jailbroken.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Transaction Device |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Device. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "Transaction Device" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open device details. 7. Review Rooted Flag. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Rooted Device Flag is displayed correctly when a device is identified as rooted or jailbroken. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Rooted Flag should match source records. Requirement reference: Transaction Device (TXN_DEVICE). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Transaction Device |

### RDR_167 — Verify Remote Access App Flag is displayed correctly when remote access applications are detected.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Transaction Device |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Device. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "Transaction Device" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open device details. 7. Review Remote Access App Flag. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Remote Access App Flag is displayed correctly when remote access applications are detected. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Remote Access Flag should match source records. Requirement reference: Transaction Device (TXN_DEVICE). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Transaction Device |

### RDR_168 — Verify Proxy/VPN Usage Flag is displayed correctly for devices using proxy or VPN connections.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Transaction Device |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Device. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "Transaction Device" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open device details. 7. Review Using Proxy Flag. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Attempt access with unauthorized role and verify access is denied without exposing data. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - Attempt access with unauthorized role and verify access is denied without exposing data.  System Behaviour: - Proxy/VPN Usage Flag is displayed correctly for devices using proxy or VPN connections. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Proxy Flag should match source records. Requirement reference: Transaction Device (TXN_DEVICE). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Transaction Device |

### RDR_169 — Verify View action opens complete transaction device details including AML risk indicators and device fingerprint information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Transaction Device |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Device. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "Transaction Device" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review device details page. 8. Validate displayed information. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Verify risk level values and labels are displayed consistently in grid and details. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete transaction device details including AML risk indicators and device fingerprint information. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open detailed device information. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Transaction Device |

### RDR_170 — Verify search functionality using Device ID and retrieve the correct device record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Cards & Instruments → Transaction Device |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Device. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Cards & Instruments" from the Reference Data Register sidebar. 3. Select master tab "Transaction Device" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter Device ID in search field. 7. Execute search. 8. Review results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter Device ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Enter Device ID in search field. - Enter a valid search value and verify matching records are displayed.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Cards & Instruments" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality using Device ID and retrieve the correct device record. succeeds for Transaction Device. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching device record. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Cards & Instruments, Transaction Device |

### RDR_171 — Verify BO ID is generated uniquely and displayed correctly for every beneficial owner record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Beneficial Owner |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Beneficial Owner. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Beneficial Owner tab. 7. Review BO ID column. 8. Compare all records. 9. Review Beneficial Owner grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare all records. - Review Beneficial Owner grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - BO ID is generated uniquely and displayed correctly for every beneficial owner record. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Each beneficial owner should have a unique BO ID. Requirement reference: Beneficial Owner (BENEFICIAL_OWNER). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Beneficial Owner |

### RDR_172 — Verify Customer ID displayed against each beneficial owner record matches the linked customer/entity record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Beneficial Owner |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Beneficial Owner. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Customer ID column. 7. Compare with Customer Master records. 8. Click primary hyperlink in grid and verify navigation opens the expected detail route. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with Customer Master records. - Scroll through grid rows and verify sticky header remains visible.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer ID displayed against each beneficial owner record matches the linked customer/entity record. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Customer ID should match source records. Requirement reference: Beneficial Owner (BENEFICIAL_OWNER). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Beneficial Owner |

### RDR_173 — Verify Beneficial Owner Full Name is displayed in masked format according to PII masking requirements.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Beneficial Owner |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Beneficial Owner. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER; Masked name: Anil Me***a |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Full Name column. 7. Verify masking pattern. 8. Compare with source data. 9. Verify PII fields are masked for restricted role and readable for authorized role only. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify masking pattern. - Verify PII fields are masked for restricted role and readable for authorized role only.  Data Validation: - Compare with source data. - Verify PII fields are masked for restricted role and readable for authorized role only.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Beneficial Owner Full Name is displayed in masked format according to PII masking requirements. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All Beneficial Owner checks must pass for the defined scenario. Requirement reference: Beneficial Owner (BENEFICIAL_OWNER). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Beneficial Owner |

### RDR_174 — Verify Nationality is displayed correctly for each beneficial owner.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Beneficial Owner |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Beneficial Owner. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Nationality column. 7. Compare with source records. 8. Review Beneficial Owner grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source records. - Review Beneficial Owner grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Nationality is displayed correctly for each beneficial owner. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Nationality should match source records. Requirement reference: Beneficial Owner (BENEFICIAL_OWNER). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Beneficial Owner |

### RDR_175 — Verify Country of Residence is displayed correctly according to beneficial owner profile information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Beneficial Owner |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Beneficial Owner. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Country of Residence column. 7. Compare with source records. 8. Review Beneficial Owner grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review Country of Residence column. - Compare with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Country of Residence is displayed correctly according to beneficial owner profile information. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Country of Residence should match source data. Requirement reference: Beneficial Owner (BENEFICIAL_OWNER). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Beneficial Owner |

### RDR_176 — Verify ID Type values are displayed correctly according to the identification documents maintained for the beneficial owner.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Beneficial Owner |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Beneficial Owner. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review ID Type column. 7. Compare values with source records. 8. Review Beneficial Owner grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review Beneficial Owner grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - ID Type values are displayed correctly according to the identification documents maintained for the beneficial owner. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | ID Type should match source records. Requirement reference: Beneficial Owner (BENEFICIAL_OWNER). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Beneficial Owner |

### RDR_177 — Verify Ownership Percentage is displayed correctly for beneficial owners with direct ownership stake.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Beneficial Owner |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Beneficial Owner. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Ownership % column. 7. Compare values with source records. 8. Review Beneficial Owner grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review Beneficial Owner grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Ownership Percentage is displayed correctly for beneficial owners with direct ownership stake. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Ownership % should match source records. Requirement reference: Beneficial Owner (BENEFICIAL_OWNER). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Beneficial Owner |

### RDR_178 — Verify beneficial owners meeting regulatory ownership thresholds are displayed correctly.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Beneficial Owner |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Beneficial Owner. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review ownership percentages. 7. Compare against threshold rules. 8. Review Beneficial Owner grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review Beneficial Owner grid fields and verify displayed values are populated. - Compare selected row values with source snapshot and verify consistency.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Beneficial owners meeting regulatory ownership thresholds are displayed correctly. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Ownership values should comply with configured thresholds. Requirement reference: Beneficial Owner (BENEFICIAL_OWNER). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Beneficial Owner |

### RDR_179 — Verify Control Type values are displayed correctly according to beneficial ownership/control relationship.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Beneficial Owner |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Beneficial Owner. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Control Type column. 7. Compare values with source data. 8. Review Beneficial Owner grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Beneficial Owner grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Control Type values are displayed correctly according to beneficial ownership/control relationship. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Control Type should match source records. Requirement reference: Beneficial Owner (BENEFICIAL_OWNER). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Beneficial Owner |

### RDR_180 — Verify Watchlist Flag is displayed correctly for beneficial owners identified on internal or external watchlists.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Beneficial Owner |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Beneficial Owner. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Watchlist Flag column. 7. Compare values with screening records. 8. Review Beneficial Owner grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with screening records. - Review Beneficial Owner grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Watchlist Flag is displayed correctly for beneficial owners identified on internal or external watchlists. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Watchlist Flag should match screening results. Requirement reference: Beneficial Owner (BENEFICIAL_OWNER). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Beneficial Owner |

### RDR_181 — Verify beneficial owners with Watchlist Flag = Yes are highlighted appropriately for AML review.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Beneficial Owner |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Beneficial Owner. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate watchlisted record. 7. Verify Watchlist Flag display and indicator. 8. Review Beneficial Owner grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Locate watchlisted record. - Review Beneficial Owner grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Beneficial owners with Watchlist Flag = Yes are highlighted appropriately for AML review. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Flagged records should be visually distinguishable. Requirement reference: Beneficial Owner (BENEFICIAL_OWNER). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Beneficial Owner |

### RDR_182 — Verify search functionality using BO ID retrieves the correct beneficial owner record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Beneficial Owner |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Beneficial Owner. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter BO ID in search field. 7. Execute search. 8. Review results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter BO ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Enter BO ID in search field. - Enter a valid search value and verify matching records are displayed.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality using BO ID retrieves the correct beneficial owner record. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching record only. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Beneficial Owner |

### RDR_183 — Verify search functionality using Customer ID retrieves all associated beneficial owners.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Beneficial Owner |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Beneficial Owner. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter Customer ID in search field. 7. Execute search. 8. Enter a valid search value and verify matching records are displayed. 9. Enter a non-matching search value and verify empty state messaging is shown. 10. Click primary hyperlink in grid and verify navigation opens the expected detail route. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter Customer ID in search field. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Enter Customer ID in search field. - Enter a valid search value and verify matching records are displayed.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality using Customer ID retrieves all associated beneficial owners. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | System should display linked beneficial owner records. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Beneficial Owner |

### RDR_184 — Verify View action opens complete beneficial owner details including ownership, control and AML screening information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Beneficial Owner |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Beneficial Owner. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review beneficial owner details. 8. Validate displayed information. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Verify PEP indicators are shown where applicable and align with source status. 12. Verify sanctions flags are displayed accurately for matched records. 13. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify PEP indicators are shown where applicable and align with source status. - Verify sanctions flags are displayed accurately for matched records.  Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete beneficial owner details including ownership, control and AML screening information. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open detailed record successfully. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Beneficial Owner |

### RDR_185 — Verify PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method are displayed correctly in the Beneficial Owner detail screen.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Beneficial Owner |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Beneficial Owner. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "BENEFICIAL_OWNER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open View screen. 7. Review PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method fields. 8. Compare with source data. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Verify PEP indicators are shown where applicable and align with source status. 12. Verify sanctions flags are displayed accurately for matched records. 13. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Review PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method fields. - Verify PEP indicators are shown where applicable and align with source status.  Data Validation: - Review PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method fields. - Compare with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method are displayed correctly in the Beneficial Owner detail screen. succeeds for Beneficial Owner. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | AML flags and verification information should match source records. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Beneficial Owner |

### RDR_186 — Verify Relationship ID is generated uniquely and displayed correctly for every relationship record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Related Parties Network |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Related Parties Network. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "Related Parties" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Related Parties tab. 7. Review Rel ID column. 8. Compare all records. 9. Review Related Parties Network grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare all records. - Review Related Parties Network grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Relationship ID is generated uniquely and displayed correctly for every relationship record. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Each relationship should have a unique Relationship ID. Requirement reference: Related Parties Network. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Related Parties Network |

### RDR_187 — Verify Entity1 Type is displayed correctly according to the source entity classification.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Related Parties Network |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Related Parties Network. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "Related Parties" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Entity1 Type column. 7. Compare with source data. 8. Review Related Parties Network grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source data. - Review Related Parties Network grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Entity1 Type is displayed correctly according to the source entity classification. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Entity1 Type should match source records. Requirement reference: Related Parties Network. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Related Parties Network |

### RDR_188 — Verify Entity1 ID is displayed correctly and mapped to the appropriate customer or beneficial owner record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Related Parties Network |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Related Parties Network. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "Related Parties" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Entity1 ID column. 7. Compare with Customer Master/BO records. 8. Review Related Parties Network grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with Customer Master/BO records. - Review Related Parties Network grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Entity1 ID is displayed correctly and mapped to the appropriate customer or beneficial owner record. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Entity1 ID should match source records. Requirement reference: Related Parties Network. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Related Parties Network |

### RDR_189 — Verify Entity2 Type is displayed correctly according to the linked entity classification.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Related Parties Network |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Related Parties Network. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "Related Parties" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Entity2 Type column. 7. Compare with source data. 8. Click primary hyperlink in grid and verify navigation opens the expected detail route. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source data. - Scroll through grid rows and verify sticky header remains visible.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Entity2 Type is displayed correctly according to the linked entity classification. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Entity2 Type should match source records. Requirement reference: Related Parties Network. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Related Parties Network |

### RDR_190 — Verify Entity2 ID is displayed correctly and linked to the appropriate target entity record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Related Parties Network |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Related Parties Network. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "Related Parties" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Entity2 ID column. 7. Compare with linked records. 8. Click primary hyperlink in grid and verify navigation opens the expected detail route. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with linked records. - Scroll through grid rows and verify sticky header remains visible.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Entity2 ID is displayed correctly and linked to the appropriate target entity record. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Entity2 ID should match source records. Requirement reference: Related Parties Network. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Related Parties Network |

### RDR_191 — Verify Relationship Type values are displayed correctly according to relationship classification maintained in source systems.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Related Parties Network |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Related Parties Network. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "Related Parties" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Relationship Type column. 7. Compare values with source records. 8. Review Related Parties Network grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review Related Parties Network grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Relationship Type values are displayed correctly according to relationship classification maintained in source systems. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Relationship Type should match source data. Requirement reference: Related Parties Network. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Related Parties Network |

### RDR_192 — Verify Subtype values are displayed correctly according to the specific relationship category.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Related Parties Network |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Related Parties Network. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "Related Parties" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Subtype column. 7. Compare with source data. 8. Review Related Parties Network grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source data. - Review Related Parties Network grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Subtype values are displayed correctly according to the specific relationship category. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Subtype should match source records. Requirement reference: Related Parties Network. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Related Parties Network |

### RDR_193 — Verify Ownership Percentage is displayed correctly for ownership-based relationships.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Related Parties Network |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Related Parties Network. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "Related Parties" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Ownership % column. 7. Compare values with source records. 8. Review Related Parties Network grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review Related Parties Network grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Ownership Percentage is displayed correctly for ownership-based relationships. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Ownership % should match source records. Requirement reference: Related Parties Network. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Related Parties Network |

### RDR_194 — Verify ownership relationships above regulatory thresholds are displayed correctly.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Related Parties Network |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Related Parties Network. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "Related Parties" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review ownership percentages. 7. Compare against regulatory threshold. 8. Review Related Parties Network grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review Related Parties Network grid fields and verify displayed values are populated. - Compare selected row values with source snapshot and verify consistency.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Ownership relationships above regulatory thresholds are displayed correctly. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Ownership values should comply with configured threshold rules. Requirement reference: Related Parties Network. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Related Parties Network |

### RDR_195 — Verify Valid From date is displayed correctly and reflects the effective start date of the relationship.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Related Parties Network |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Related Parties Network. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "Related Parties" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Valid From column. 7. Compare with source records. 8. Review Related Parties Network grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source records. - Review Related Parties Network grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Valid From date is displayed correctly and reflects the effective start date of the relationship. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Valid From should match source records. Requirement reference: Related Parties Network. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Related Parties Network |

### RDR_196 — Verify PEP Flag is displayed correctly in relationship details when the relationship involves a politically exposed person.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Related Parties Network |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Related Parties Network. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "Related Parties" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View. 7. Review PEP Flag field. 8. Compare with source records. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Verify PEP indicators are shown where applicable and align with source status. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Review PEP Flag field. - Verify PEP indicators are shown where applicable and align with source status.  Data Validation: - Review PEP Flag field. - Compare with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - PEP Flag is displayed correctly in relationship details when the relationship involves a politically exposed person. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | PEP Flag should match AML screening data. Requirement reference: Related Parties Network. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Related Parties Network |

### RDR_197 — Verify Risk Flag is displayed correctly for AML-risk relationships.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Related Parties Network |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Related Parties Network. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "Related Parties" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open relationship details. 7. Review Risk Flag field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Verify risk level values and labels are displayed consistently in grid and details. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Review Risk Flag field. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Review Risk Flag field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Risk Flag is displayed correctly for AML-risk relationships. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Risk Flag should match AML assessment. Requirement reference: Related Parties Network. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Related Parties Network |

### RDR_198 — Verify Verified Flag is displayed correctly for validated relationship records.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Related Parties Network |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Related Parties Network. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "Related Parties" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open relationship details. 7. Review Verified Flag field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review Verified Flag field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Verified Flag is displayed correctly for validated relationship records. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Verified Flag should match verification status. Requirement reference: Related Parties Network. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Related Parties Network |

### RDR_199 — Verify search functionality retrieves the correct relationship record using Relationship ID.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Related Parties Network |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Related Parties Network. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "Related Parties" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter Rel ID in search box. 7. Execute search. 8. Review results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter Rel ID in search box. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality retrieves the correct relationship record using Relationship ID. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching relationship record only. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Related Parties Network |

### RDR_200 — Verify View action opens complete relationship details including entity mapping, ownership information and AML indicators.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Related Parties Network |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Related Parties Network. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Relationships & Parties" from the Reference Data Register sidebar. 3. Select master tab "Related Parties" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review relationship details. 8. Validate displayed information. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Verify PEP indicators are shown where applicable and align with source status. 12. Verify risk level values and labels are displayed consistently in grid and details. 13. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify PEP indicators are shown where applicable and align with source status. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Relationships & Parties" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete relationship details including entity mapping, ownership information and AML indicators. succeeds for Related Parties Network. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open detailed relationship information. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Related Parties Network |

### RDR_201 — Verify Non-Customer ID is generated uniquely and displayed correctly for every non-customer record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Non-Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Non-Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Non Customer tab. 7. Review Non Cust ID column. 8. Compare all records. 9. Review Non-Customer Master grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare all records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Non-Customer ID is generated uniquely and displayed correctly for every non-customer record. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Each non-customer should have a unique ID. Requirement reference: Non-Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Non-Customer Master |

### RDR_202 — Verify Full Name is displayed in masked format according to PII masking requirements.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Non-Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Non-Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER; Masked name: Rajesh K***r Sha***a |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Full Name column. 7. Verify masking pattern. 8. Compare with source data. 9. Verify PII fields are masked for restricted role and readable for authorized role only. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify masking pattern. - Verify PII fields are masked for restricted role and readable for authorized role only.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Full Name is displayed in masked format according to PII masking requirements. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All Non-Customer Master checks must pass for the defined scenario. Requirement reference: Non-Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Non-Customer Master |

### RDR_203 — Verify Non-Customer Type is displayed correctly according to classification maintained in source systems.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Non-Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Non-Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Type column. 7. Compare values with source data. 8. Review Non-Customer Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Non-Customer Type is displayed correctly according to classification maintained in source systems. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Type should match source records. Requirement reference: Non-Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Non-Customer Master |

### RDR_204 — Verify Nationality is displayed correctly for each non-customer record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Non-Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Non-Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Nationality column. 7. Compare with source records. 8. Review Non-Customer Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Nationality is displayed correctly for each non-customer record. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Nationality should match source records. Requirement reference: Non-Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Non-Customer Master |

### RDR_205 — Verify Country of Residence is displayed correctly according to profile information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Non-Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Non-Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Country of Residence column. 7. Compare with source records. 8. Review Non-Customer Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Country of Residence column.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Country of Residence is displayed correctly according to profile information. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Country of Residence should match source records. Requirement reference: Non-Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Non-Customer Master |

### RDR_206 — Verify ID Type values are displayed correctly according to identification documents maintained for non-customers.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Non-Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Non-Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review ID Type column. 7. Compare with source data. 8. Review Non-Customer Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - ID Type values are displayed correctly according to identification documents maintained for non-customers. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | ID Type should match source records. Requirement reference: Non-Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Non-Customer Master |

### RDR_207 — Verify ID Number is displayed in masked format to protect sensitive identification information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Non-Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Non-Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER; Masked name: Rajesh K***r Sha***a |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review ID Number column. 7. Verify masking pattern. 8. Compare with source data. 9. Verify PII fields are masked for restricted role and readable for authorized role only. 10. Attempt access with unauthorized role and verify access is denied without exposing data. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify masking pattern. - Verify PII fields are masked for restricted role and readable for authorized role only.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - Attempt access with unauthorized role and verify access is denied without exposing data.  System Behaviour: - ID Number is displayed in masked format to protect sensitive identification information. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | ID Number should be masked. Requirement reference: Non-Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Non-Customer Master |

### RDR_208 — Verify PEP Individual records are classified correctly and displayed with appropriate visual indicators.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Non-Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Non-Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate PEP_INDIVIDUAL record. 7. Review Type column. 8. Verify highlighting. 9. Verify PEP indicators are shown where applicable and align with source status. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Locate PEP_INDIVIDUAL record. - Verify PEP indicators are shown where applicable and align with source status.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Locate PEP_INDIVIDUAL record.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - PEP Individual records are classified correctly and displayed with appropriate visual indicators. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | PEP records should be clearly identifiable. Requirement reference: Non-Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Non-Customer Master |

### RDR_209 — Verify linked customer information is displayed correctly in detail view when a non-customer is associated with a bank customer.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Non-Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Non-Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View. 7. Review Linked Customer ID field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Click primary hyperlink in grid and verify navigation opens the expected detail route. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Linked Customer ID field.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Linked customer information is displayed correctly in detail view when a non-customer is associated with a bank customer. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Linked Customer ID should match source records. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Non-Customer Master |

### RDR_210 — Verify Relationship to Customer is displayed correctly in detail view.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Non-Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Non-Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open View screen. 7. Review Relationship to Customer field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Relationship to Customer field.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Relationship to Customer is displayed correctly in detail view. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Relationship should match source records. Requirement reference: Non-Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Non-Customer Master |

### RDR_211 — Verify PEP Flag is displayed correctly in the detail screen according to AML screening results.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Non-Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Non-Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open non-customer details. 7. Review PEP Flag. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Verify PEP indicators are shown where applicable and align with source status. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Review PEP Flag. - Verify PEP indicators are shown where applicable and align with source status.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - PEP Flag is displayed correctly in the detail screen according to AML screening results. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | PEP Flag should match AML data. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Non-Customer Master |

### RDR_212 — Verify Sanctions Flag is displayed correctly for sanctioned non-customer entities.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Non-Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Non-Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open detail screen. 7. Review Sanctions Flag field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Verify sanctions flags are displayed accurately for matched records. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Review Sanctions Flag field. - Verify sanctions flags are displayed accurately for matched records.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Sanctions Flag field.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Sanctions Flag is displayed correctly for sanctioned non-customer entities. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Sanctions Flag should match watchlist screening results. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Non-Customer Master |

### RDR_213 — Verify Internal Watchlist Flag is displayed correctly for entities appearing on internal watchlists.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Non-Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Non-Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open detail screen. 7. Review Internal Watchlist Flag. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Internal Watchlist Flag is displayed correctly for entities appearing on internal watchlists. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Internal Watchlist Flag should match source records. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Non-Customer Master |

### RDR_214 — Verify search functionality retrieves the correct non-customer record using Non-Customer ID.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Non-Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Non-Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter Non Cust ID in search box. 7. Execute search. 8. Review results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter Non Cust ID in search box. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter a valid search value and verify matching records are displayed.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality retrieves the correct non-customer record using Non-Customer ID. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching record only. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Non-Customer Master |

### RDR_215 — Verify View action opens complete non-customer details including AML flags, relationship information and source details.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Relationships & Related Parties → Non-Customer Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Non-Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Beneficial Owner ID: BO-001; Linked Customer ID: CIF002045; Ownership %: 35%; Control Type: DIRECT_SHAREHOLDER |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review complete details. 8. Validate displayed information. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Click primary hyperlink in grid and verify navigation opens the expected detail route. 12. Verify PEP indicators are shown where applicable and align with source status. 13. Verify sanctions flags are displayed accurately for matched records. 14. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify PEP indicators are shown where applicable and align with source status. - Verify sanctions flags are displayed accurately for matched records.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete non-customer details including AML flags, relationship information and source details. succeeds for Non-Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open detailed record successfully. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Relationships & Related Parties, Non-Customer Master |

### RDR_216 — Verify Customer Type records are displayed successfully in the Customer Type Master grid after data load.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Customer Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Customer Type tab. 7. Review records displayed in grid. 8. Review Customer Type Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review records displayed in grid.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer Type records are displayed successfully in the Customer Type Master grid after data load. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All configured customer types should be displayed. Requirement reference: Customer Type Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Customer Type Master |

### RDR_217 — Verify Customer Type Code is displayed correctly for each customer category maintained in the master.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Customer Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Code column. 7. Compare values with source data. 8. Review Customer Type Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare values with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer Type Code is displayed correctly for each customer category maintained in the master. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Code should match source records. Requirement reference: Customer Type Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Customer Type Master |

### RDR_218 — Verify Customer Type Name is displayed correctly according to configured customer classifications.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Customer Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Name column. 7. Compare with source records. 8. Review Customer Type Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer Type Name is displayed correctly according to configured customer classifications. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Name should match source records. Requirement reference: Customer Type Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Customer Type Master |

### RDR_219 — Verify Customer Type Code remains unique across all customer type records.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Customer Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review all codes. 7. Compare records for duplicates. 8. Review Customer Type Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare records for duplicates.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer Type Code remains unique across all customer type records. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Duplicate codes should not exist. Requirement reference: Customer Type Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Customer Type Master |

### RDR_220 — Verify Segment ID is displayed uniquely for each customer type record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Customer Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Segment ID column. 7. Compare all records. 8. Review Customer Type Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Compare all records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Segment ID is displayed uniquely for each customer type record. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Segment IDs should be unique. Requirement reference: Customer Type Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Customer Type Master |

### RDR_221 — Verify search functionality retrieves the correct customer type record using Customer Type Code.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Customer Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter Customer Type Code in search field. 7. Execute search. 8. Enter a valid search value and verify matching records are displayed. 9. Enter a non-matching search value and verify empty state messaging is shown. 10. Scroll through grid rows and verify sticky header remains visible. 11. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter Customer Type Code in search field. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter Customer Type Code in search field.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality retrieves the correct customer type record using Customer Type Code. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching records only. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Customer Type Master |

### RDR_222 — Verify search functionality retrieves the correct customer type record using Customer Type Name.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Customer Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter customer type name in search field. 7. Execute search. 8. Enter a valid search value and verify matching records are displayed. 9. Enter a non-matching search value and verify empty state messaging is shown. 10. Scroll through grid rows and verify sticky header remains visible. 11. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter customer type name in search field. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Enter customer type name in search field.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality retrieves the correct customer type record using Customer Type Name. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching records only. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Customer Type Master |

### RDR_223 — Verify View action opens complete customer type details including risk and CDD configuration fields.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Customer Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review detail page. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Verify risk level values and labels are displayed consistently in grid and details. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete customer type details including risk and CDD configuration fields. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open detailed information successfully. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Customer Type Master |

### RDR_224 — Verify Customer Type Code displayed in UI matches the customer_type_code field defined in FSD.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Customer Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open customer type record. 7. Compare UI values with source data. 8. Review Customer Type Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Open customer type record.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer Type Code displayed in UI matches the customer_type_code field defined in FSD. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | UI value should match source field value. Requirement reference: Customer Type Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Customer Type Master |

### RDR_225 — Verify Customer Type Name displayed in UI matches the customer_type_name field maintained in source systems.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Customer Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open customer type record. 7. Review Name value. 8. Review Customer Type Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Open customer type record.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Customer Type Name displayed in UI matches the customer_type_name field maintained in source systems. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | UI value should match source field value. Requirement reference: Customer Type Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Customer Type Master |

### RDR_226 — Verify Risk Weight value is displayed correctly in customer type detail screen and matches source configuration.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Customer Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open View page. 7. Review Risk Weight field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Verify risk level values and labels are displayed consistently in grid and details. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Review Risk Weight field. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Risk Weight field.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Risk Weight value is displayed correctly in customer type detail screen and matches source configuration. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Risk Weight should match source records. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Customer Type Master |

### RDR_227 — Verify CDD Level is displayed correctly according to configured due diligence rules.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Customer Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open customer type details. 7. Review CDD Level field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review CDD Level field.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - CDD Level is displayed correctly according to configured due diligence rules. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | CDD Level should match source configuration. Requirement reference: Customer Type Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Customer Type Master |

### RDR_228 — Verify Active Status is displayed correctly for customer types currently in use.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Customer Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open detail screen. 7. Review Active Status field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Review Active Status field.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Active Status is displayed correctly for customer types currently in use. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Active status should match source records. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Customer Type Master |

### RDR_229 — Verify CSV export functionality exports all customer type records successfully.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Customer Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click CSV button. 7. Download file. 8. Validate contents. 9. Click CSV export and verify export action completes for current filtered dataset. 10. Click Excel export and verify downloaded file headers match on-screen columns. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click CSV export and verify export action completes for current filtered dataset. - Click Excel export and verify downloaded file headers match on-screen columns. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click CSV export and verify export action completes for current filtered dataset.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - CSV export functionality exports all customer type records successfully. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | CSV file should contain correct customer type data. Requirement reference: Export Formats. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Customer Type Master |

### RDR_230 — Verify Excel export functionality exports all customer type records successfully.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Customer Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click Excel button. 7. Download file. 8. Validate contents. 9. Click CSV export and verify export action completes for current filtered dataset. 10. Click Excel export and verify downloaded file headers match on-screen columns. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click CSV export and verify export action completes for current filtered dataset. - Click Excel export and verify downloaded file headers match on-screen columns. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Click CSV export and verify export action completes for current filtered dataset.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Excel export functionality exports all customer type records successfully. succeeds for Customer Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Excel file should contain correct customer type data. Requirement reference: Export Formats. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Customer Type Master |

### RDR_231 — Verify Product Master records are displayed successfully after CBS synchronization and all configured products are visible in the grid.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Product Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Product Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "PRODUCT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Product tab. 7. Review Product Master grid. 8. Verify record count and displayed products. 9. Review Product Master grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Verify record count and displayed products. - Review Product Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Product Master records are displayed successfully after CBS synchronization and all configured products are visible in the grid. succeeds for Product Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All available product records should be displayed. Requirement reference: Product Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Product Master |

### RDR_232 — Verify Product ID is displayed uniquely for every product maintained in the Product Master.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Product Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Product Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "PRODUCT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Product ID column. 7. Compare all records. 8. Review Product Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare all records. - Review Product Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Product ID is displayed uniquely for every product maintained in the Product Master. succeeds for Product Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Product IDs should be unique. Requirement reference: Product Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Product Master |

### RDR_233 — Verify Product Code is displayed correctly according to product configuration maintained in source systems.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Product Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Product Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "PRODUCT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Code column. 7. Compare values with source data. 8. Review Product Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Product Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Product Code is displayed correctly according to product configuration maintained in source systems. succeeds for Product Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Product Code should match source records. Requirement reference: Product Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Product Master |

### RDR_234 — Verify Product Name is displayed correctly and matches the configured product description.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Product Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Product Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "PRODUCT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Name column. 7. Compare with source data. 8. Review Product Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source data. - Review Product Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Product Name is displayed correctly and matches the configured product description. succeeds for Product Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Product Name should match source records. Requirement reference: Product Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Product Master |

### RDR_235 — Verify Product Category is displayed correctly according to configured business classification.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Product Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Product Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "PRODUCT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Category column. 7. Compare with source data. 8. Review Product Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source data. - Review Product Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Product Category is displayed correctly according to configured business classification. succeeds for Product Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Category should match source records. Requirement reference: Product Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Product Master |

### RDR_236 — Verify Product Type is displayed correctly according to the product setup maintained in the source system.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Product Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Product Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "PRODUCT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Type column. 7. Compare with source data. 8. Review Product Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source data. - Review Product Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Product Type is displayed correctly according to the product setup maintained in the source system. succeeds for Product Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Product Type should match source records. Requirement reference: Product Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Product Master |

### RDR_237 — Verify Entity Types applicable to the product are displayed correctly for AML and customer onboarding purposes.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Product Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Product Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "PRODUCT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Entity Types column. 7. Compare with source records. 8. Review Product Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source records. - Review Product Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Entity Types applicable to the product are displayed correctly for AML and customer onboarding purposes. succeeds for Product Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Entity Types should match source records. Requirement reference: Product Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Product Master |

### RDR_238 — Verify Cross Border indicator is displayed correctly for products involving international transactions.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Product Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Product Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "PRODUCT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Cross Border column. 7. Compare with source records. 8. Review Product Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source records. - Review Product Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Cross Border indicator is displayed correctly for products involving international transactions. succeeds for Product Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Cross Border value should match source configuration. Requirement reference: Product Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Product Master |

### RDR_239 — Verify Trade Finance products are marked as Cross Border where applicable.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Product Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Product Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "PRODUCT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate Trade Finance product. 7. Review Cross Border value. 8. Review Product Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review Cross Border value. - Review Product Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Trade Finance products are marked as Cross Border where applicable. succeeds for Product Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Trade Finance products should display correct indicator. Requirement reference: Product Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Product Master |

### RDR_240 — Verify Effective Date is displayed correctly and reflects the date from which the product became active.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Product Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Product Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "PRODUCT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Effective Date column. 7. Compare with source records. 8. Review Product Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source records. - Review Product Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Effective Date is displayed correctly and reflects the date from which the product became active. succeeds for Product Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Effective Date should match source records. Requirement reference: Product Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Product Master |

### RDR_241 — Verify Risk Rating is displayed correctly in product detail view according to product risk configuration.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Product Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Product Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "PRODUCT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View. 7. Review Risk Rating field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Verify risk level values and labels are displayed consistently in grid and details. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Review Risk Rating field. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Review Risk Rating field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Risk Rating is displayed correctly in product detail view according to product risk configuration. succeeds for Product Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Risk Rating should match source records. Requirement reference: Product Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Product Master |

### RDR_242 — Verify goAML Product Type mapping is displayed correctly in product detail view for regulatory reporting purposes.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Product Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Product Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "PRODUCT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open product details. 7. Review goAML Product Type field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. 11. Validate one key rule from requirement context: These mappings ensure that Suspicious Transaction Reports generated by the Clari5 STR module are compliant with the UNODC goAML v4.2 XML schema. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review goAML Product Type field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - GoAML Product Type mapping is displayed correctly in product detail view for regulatory reporting purposes. succeeds for Product Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | goAML Product Type should match source mapping. Requirement reference: goAML Integration. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Product Master |

### RDR_243 — Verify search functionality retrieves the correct product record using Product Code or Product Name.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Product Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Product Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "PRODUCT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter search value. 7. Execute search. 8. Review results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter search value. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Enter search value. - Enter a valid search value and verify matching records are displayed.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality retrieves the correct product record using Product Code or Product Name. succeeds for Product Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching records only. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Product Master |

### RDR_244 — Verify View action opens complete product details including Product ID, Category, Risk Rating and goAML mapping.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Product Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Product Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "PRODUCT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review detail screen. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Verify risk level values and labels are displayed consistently in grid and details. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete product details including Product ID, Category, Risk Rating and goAML mapping. succeeds for Product Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open detailed product information. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Product Master |

### RDR_245 — Verify CSV and Excel export functionality exports all Product Master records accurately.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Product Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Product Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "PRODUCT Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click CSV button. 7. Validate file. 8. Click Excel button. 9. Validate file contents. 10. Click CSV export and verify export action completes for current filtered dataset. 11. Click Excel export and verify downloaded file headers match on-screen columns. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click CSV export and verify export action completes for current filtered dataset. - Click Excel export and verify downloaded file headers match on-screen columns. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Click CSV export and verify export action completes for current filtered dataset. - Scroll through grid rows and verify sticky header remains visible.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - CSV and Excel export functionality exports all Product Master records accurately. succeeds for Product Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Export files should contain correct product information. Requirement reference: Export Formats. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Product Master |

### RDR_246 — Verify Branch Master records are displayed successfully after CBS synchronization and all configured branches are visible in the grid.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Branch Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Branch Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle); Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "BRANCH Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Branch tab. 7. Review Branch Master grid. 8. Verify displayed records. 9. Review Branch Master grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Verify displayed records. - Review Branch Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Branch Master records are displayed successfully after CBS synchronization and all configured branches are visible in the grid. succeeds for Branch Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All branch records should be displayed. Requirement reference: Branch Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Branch Master |

### RDR_247 — Verify Branch ID is displayed uniquely for every branch maintained in the Branch Master.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Branch Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Branch Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "BRANCH Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Branch ID column. 7. Compare all displayed records. 8. Review Branch Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare all displayed records. - Review Branch Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Branch ID is displayed uniquely for every branch maintained in the Branch Master. succeeds for Branch Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Branch IDs should be unique. Requirement reference: Branch Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Branch Master |

### RDR_248 — Verify Branch Code is displayed correctly according to the branch configuration maintained in CBS.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Branch Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Branch Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle); Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "BRANCH Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Code column. 7. Compare values with source data. 8. Review Branch Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Branch Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Branch Code is displayed correctly according to the branch configuration maintained in CBS. succeeds for Branch Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Branch Code should match source records. Requirement reference: Branch Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Branch Master |

### RDR_249 — Verify Branch Name is displayed correctly and matches the official branch name configured in source systems.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Branch Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Branch Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "BRANCH Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Name column. 7. Compare values with source data. 8. Review Branch Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Branch Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Branch Name is displayed correctly and matches the official branch name configured in source systems. succeeds for Branch Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Branch Name should match source records. Requirement reference: Branch Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Branch Master |

### RDR_250 — Verify City information is displayed correctly according to branch location details.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Branch Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Branch Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "BRANCH Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review City column. 7. Compare values with source data. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - City information is displayed correctly according to branch location details. succeeds for Branch Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | City should match source records. Requirement reference: Branch Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Branch Master |

### RDR_251 — Verify State information is displayed correctly according to branch location details.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Branch Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Branch Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "BRANCH Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review State column. 7. Compare values with source records. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - State information is displayed correctly according to branch location details. succeeds for Branch Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | State should match source records. Requirement reference: Branch Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Branch Master |

### RDR_252 — Verify Branch Type is displayed correctly according to configured branch classification.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Branch Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Branch Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "BRANCH Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Type column. 7. Compare values with source data. 8. Review Branch Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Branch Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Branch Type is displayed correctly according to configured branch classification. succeeds for Branch Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Branch Type should match source records. Requirement reference: Branch Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Branch Master |

### RDR_253 — Verify High Risk Zone indicator is displayed correctly for branches located in AML high-risk areas.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Branch Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Branch Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "BRANCH Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review High Risk Zone column. 7. Compare values with source records. 8. Verify risk level values and labels are displayed consistently in grid and details. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Review High Risk Zone column. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Compare values with source records. - Verify risk level values and labels are displayed consistently in grid and details.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - High Risk Zone indicator is displayed correctly for branches located in AML high-risk areas. succeeds for Branch Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | High Risk Zone value should match source records. Requirement reference: Branch Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Branch Master |

### RDR_254 — Verify Border Branch indicator is displayed correctly for branches operating near international borders.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Branch Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Branch Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "BRANCH Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Border Branch column. 7. Compare values with source records. 8. Review Branch Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review Branch Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Border Branch indicator is displayed correctly for branches operating near international borders. succeeds for Branch Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Border Branch value should match source records. Requirement reference: Branch Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Branch Master |

### RDR_255 — Verify Active Status is displayed correctly for operational branches.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Branch Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Branch Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "BRANCH Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Status column. 7. Compare values with source data. 8. Review Branch Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Branch Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Active Status is displayed correctly for operational branches. succeeds for Branch Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Status should match source records. Requirement reference: Branch Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Branch Master |

### RDR_256 — Verify BSR Code is displayed correctly according to branch registration information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Branch Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Branch Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "BRANCH Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review BSR Code column. 7. Compare values with source data. 8. Review Branch Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Branch Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - BSR Code is displayed correctly according to branch registration information. succeeds for Branch Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | BSR Code should match source records. Requirement reference: Branch Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Branch Master |

### RDR_257 — Verify IFSC Code is displayed correctly in branch detail view according to FSD configuration.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Branch Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Branch Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "BRANCH Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View. 7. Review IFSC Code field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review IFSC Code field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - IFSC Code is displayed correctly in branch detail view according to FSD configuration. succeeds for Branch Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | IFSC Code should match source records. Requirement reference: Branch Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Branch Master |

### RDR_258 — Verify SWIFT/BIC Code is displayed correctly in branch detail view for cross-border identification.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Branch Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Branch Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "BRANCH Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open branch details. 7. Review SWIFT/BIC field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review SWIFT/BIC field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - SWIFT/BIC Code is displayed correctly in branch detail view for cross-border identification. succeeds for Branch Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | SWIFT/BIC Code should match source records. Requirement reference: Branch Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Branch Master |

### RDR_259 — Verify search functionality retrieves the correct branch record using Branch ID, Code or Name.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Branch Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Branch Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "BRANCH Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter search value. 7. Execute search. 8. Review results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter search value. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Enter search value. - Enter a valid search value and verify matching records are displayed.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality retrieves the correct branch record using Branch ID, Code or Name. succeeds for Branch Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching records only. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Branch Master |

### RDR_260 — Verify View action opens complete branch details including Branch ID, Type, Country Code, High Risk Area Flag, IFSC and SWIFT information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Branch Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Branch Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "BRANCH Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review branch detail screen. 8. Validate displayed information. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Verify risk level values and labels are displayed consistently in grid and details. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete branch details including Branch ID, Type, Country Code, High Risk Area Flag, IFSC and SWIFT information. succeeds for Branch Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open branch details successfully. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Branch Master |

### RDR_261 — Verify Channel Master records are displayed successfully after data synchronization and all configured channels are visible in the grid.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Channel Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Channel Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CHANNEL Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Channel tab. 7. Review Channel Master grid. 8. Verify displayed records. 9. Review Channel Master grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Verify displayed records. - Review Channel Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Channel Master records are displayed successfully after data synchronization and all configured channels are visible in the grid. succeeds for Channel Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All channel records should be displayed. Requirement reference: Channel Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Channel Master |

### RDR_262 — Verify Channel ID is displayed uniquely for every channel record maintained in the master.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Channel Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Channel Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CHANNEL Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Channel ID column. 7. Compare all records. 8. Review Channel Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare all records. - Review Channel Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Channel ID is displayed uniquely for every channel record maintained in the master. succeeds for Channel Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Channel IDs should be unique. Requirement reference: Channel Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Channel Master |

### RDR_263 — Verify Channel Code is displayed correctly according to the configured channel identifier.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Channel Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Channel Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CHANNEL Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Code column. 7. Compare values with source records. 8. Review Channel Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review Channel Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Channel Code is displayed correctly according to the configured channel identifier. succeeds for Channel Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Channel Code should match source records. Requirement reference: Channel Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Channel Master |

### RDR_264 — Verify Channel Name is displayed correctly according to the configured business channel name.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Channel Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Channel Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CHANNEL Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Name column. 7. Compare values with source data. 8. Review Channel Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Channel Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Channel Name is displayed correctly according to the configured business channel name. succeeds for Channel Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Channel Name should match source records. Requirement reference: Channel Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Channel Master |

### RDR_265 — Verify Channel Type is displayed correctly according to the channel classification maintained in source systems.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Channel Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Channel Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CHANNEL Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Type column. 7. Compare values with source data. 8. Review Channel Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Channel Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Channel Type is displayed correctly according to the channel classification maintained in source systems. succeeds for Channel Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Channel Type should match source records. Requirement reference: Channel Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Channel Master |

### RDR_266 — Verify Status is displayed correctly and reflects the active/inactive state of the channel.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Channel Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Channel Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CHANNEL Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Status column. 7. Compare values with source data. 8. Review Channel Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Channel Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Status is displayed correctly and reflects the active/inactive state of the channel. succeeds for Channel Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Status should match source records. Requirement reference: Channel Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Channel Master |

### RDR_267 — Verify Description field is displayed correctly and provides channel-specific AML/business context.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Channel Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Channel Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CHANNEL Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Description column. 7. Compare values with source records. 8. Review Channel Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review Channel Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Description field is displayed correctly and provides channel-specific AML/business context. succeeds for Channel Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Description should match source records. Requirement reference: Channel Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Channel Master |

### RDR_268 — Verify Branch channel is classified as PHYSICAL and displayed correctly in the grid.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Channel Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Channel Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CHANNEL Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate Branch record. 7. Verify Channel Type. 8. Review Channel Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Locate Branch record. - Review Channel Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Branch channel is classified as PHYSICAL and displayed correctly in the grid. succeeds for Channel Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Branch channel should have Physical classification. Requirement reference: Channel Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Channel Master |

### RDR_269 — Verify Mobile Banking channel is classified as DIGITAL and displayed correctly.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Channel Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Channel Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CHANNEL Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate Mobile Banking record. 7. Verify Type field. 8. Review Channel Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Locate Mobile Banking record. - Verify Type field.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Mobile Banking channel is classified as DIGITAL and displayed correctly. succeeds for Channel Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Mobile Banking should have Digital classification. Requirement reference: Channel Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Channel Master |

### RDR_270 — Verify UPI channel is classified as DIGITAL and displayed correctly for AML monitoring purposes.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Channel Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Channel Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CHANNEL Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate UPI record. 7. Verify Type field. 8. Review Channel Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Locate UPI record. - Verify Type field.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - UPI channel is classified as DIGITAL and displayed correctly for AML monitoring purposes. succeeds for Channel Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | UPI should have Digital classification. Requirement reference: Channel Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Channel Master |

### RDR_271 — Verify Risk Score Weight is displayed correctly in the channel detail screen and matches configured AML scoring rules.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Channel Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Channel Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CHANNEL Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View. 7. Review Risk Score Weight field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Verify risk level values and labels are displayed consistently in grid and details. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Review Risk Score Weight field. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Review Risk Score Weight field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Risk Score Weight is displayed correctly in the channel detail screen and matches configured AML scoring rules. succeeds for Channel Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Risk Score Weight should match source configuration. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Channel Master |

### RDR_272 — Verify Cross Border Indicator is displayed correctly in channel detail view according to channel capabilities.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Channel Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Channel Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CHANNEL Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open channel details. 7. Review Cross Border field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review Cross Border field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Cross Border Indicator is displayed correctly in channel detail view according to channel capabilities. succeeds for Channel Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Cross Border flag should match source records. Requirement reference: Channel Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Channel Master |

### RDR_273 — Verify goAML Channel Type mapping is displayed correctly in the channel detail screen.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Channel Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Channel Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CHANNEL Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open channel details. 7. Review goAML Channel Type field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review goAML Channel Type field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - GoAML Channel Type mapping is displayed correctly in the channel detail screen. succeeds for Channel Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | goAML Channel Type should match source mapping. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Channel Master |

### RDR_274 — Verify search functionality retrieves the correct channel record using Channel Code or Channel Name.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Channel Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Channel Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CHANNEL Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter search value. 7. Execute search. 8. Review results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter search value. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Enter search value. - Enter a valid search value and verify matching records are displayed.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality retrieves the correct channel record using Channel Code or Channel Name. succeeds for Channel Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching records only. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Channel Master |

### RDR_275 — Verify View action opens complete channel details including Channel Code, Type, Risk Weight, Cross Border Indicator and goAML mapping.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Channel Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Channel Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CHANNEL Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review detail screen. 8. Validate displayed information. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Verify risk level values and labels are displayed consistently in grid and details. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete channel details including Channel Code, Type, Risk Weight, Cross Border Indicator and goAML mapping. succeeds for Channel Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open detailed channel information. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Channel Master |

### RDR_276 — Verify Transaction Type Master records are displayed successfully after data synchronization and all configured transaction types are visible in the grid.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Transaction Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Transaction Type Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open TXN Type tab. 7. Review grid records. 8. Verify displayed transaction types. 9. Review Transaction Type Master grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review grid records. - Review Transaction Type Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Transaction Type Master records are displayed successfully after data synchronization and all configured transaction types are visible in the grid. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All transaction type records should be displayed. Requirement reference: Transaction Type Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Transaction Type Master |

### RDR_277 — Verify Transaction Type ID is displayed uniquely for every transaction type record maintained in the master.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Transaction Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Transaction Type Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review TXN Type ID column. 7. Compare all records. 8. Review Transaction Type Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare all records. - Review Transaction Type Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Transaction Type ID is displayed uniquely for every transaction type record maintained in the master. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Transaction Type IDs should be unique. Requirement reference: Transaction Type Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Transaction Type Master |

### RDR_278 — Verify Transaction Type Code is displayed correctly according to configured transaction definitions.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Transaction Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Transaction Type Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Code column. 7. Compare values with source records. 8. Review Transaction Type Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review Transaction Type Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Transaction Type Code is displayed correctly according to configured transaction definitions. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Transaction Type Code should match source records. Requirement reference: Transaction Type Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Transaction Type Master |

### RDR_279 — Verify Transaction Type Name is displayed correctly according to business transaction definitions.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Transaction Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Transaction Type Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Name column. 7. Compare values with source data. 8. Review Transaction Type Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Transaction Type Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Transaction Type Name is displayed correctly according to business transaction definitions. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Transaction Type Name should match source records. Requirement reference: Transaction Type Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Transaction Type Master |

### RDR_280 — Verify Transaction Direction is displayed correctly and identifies whether the transaction is Credit, Debit or Both.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Transaction Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Transaction Type Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Direction column. 7. Compare values with source records. 8. Review Transaction Type Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review Transaction Type Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Transaction Direction is displayed correctly and identifies whether the transaction is Credit, Debit or Both. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Direction should match source configuration. Requirement reference: Transaction Type Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Transaction Type Master |

### RDR_281 — Verify Cash Flag is displayed correctly for cash-based transaction types that are eligible for CTR reporting.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Transaction Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Transaction Type Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Cash Flag column. 7. Compare values with source data. 8. Review Transaction Type Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Transaction Type Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Cash Flag is displayed correctly for cash-based transaction types that are eligible for CTR reporting. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Cash Flag should match source records. Requirement reference: Transaction Type Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Transaction Type Master |

### RDR_282 — Verify Cross Border indicator is displayed correctly for international transaction types.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Transaction Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Transaction Type Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Cross Border column. 7. Compare values with source records. 8. Review Transaction Type Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review Transaction Type Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Cross Border indicator is displayed correctly for international transaction types. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Cross Border value should match source records. Requirement reference: Transaction Type Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Transaction Type Master |

### RDR_283 — Verify AML Risk classification is displayed correctly according to AML risk assessment rules.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Transaction Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Transaction Type Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review AML Risk column. 7. Compare with source configuration. 8. Verify risk level values and labels are displayed consistently in grid and details. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Review AML Risk column. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Compare with source configuration. - Verify risk level values and labels are displayed consistently in grid and details.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - AML Risk classification is displayed correctly according to AML risk assessment rules. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | AML Risk should match configured risk level. Requirement reference: Transaction Type Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Transaction Type Master |

### RDR_284 — Verify CTR Applicable indicator is displayed correctly for cash transactions subject to regulatory CTR thresholds.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Transaction Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Transaction Type Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review CTR Applicable column. 7. Compare values with source records. 8. Review Transaction Type Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review Transaction Type Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - CTR Applicable indicator is displayed correctly for cash transactions subject to regulatory CTR thresholds. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | CTR Applicable value should match source rules. Requirement reference: Transaction Type Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Transaction Type Master |

### RDR_285 — Verify Status is displayed correctly and reflects whether the transaction type is active for use.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Transaction Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Transaction Type Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Status column. 7. Compare values with source data. 8. Review Transaction Type Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Transaction Type Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Status is displayed correctly and reflects whether the transaction type is active for use. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Status should match source records. Requirement reference: Transaction Type Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Transaction Type Master |

### RDR_286 — Verify Description field is displayed correctly and provides AML/business context for the transaction type.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Transaction Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Transaction Type Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Description column. 7. Compare values with source records. 8. Review Transaction Type Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review Transaction Type Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Description field is displayed correctly and provides AML/business context for the transaction type. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Description should match source records. Requirement reference: Transaction Type Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Transaction Type Master |

### RDR_287 — Verify Risk Weight is displayed correctly in the transaction type detail screen and matches AML scoring configuration.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Transaction Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Transaction Type Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View. 7. Review Risk Weight field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Verify risk level values and labels are displayed consistently in grid and details. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Review Risk Weight field. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Review Risk Weight field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Risk Weight is displayed correctly in the transaction type detail screen and matches AML scoring configuration. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Risk Weight should match source configuration. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Transaction Type Master |

### RDR_288 — Verify goAML Transaction Type mapping is displayed correctly in the detail screen for STR reporting requirements.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Transaction Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Transaction Type Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open transaction type details. 7. Review goAML Transaction Type field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review goAML Transaction Type field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - GoAML Transaction Type mapping is displayed correctly in the detail screen for STR reporting requirements. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | goAML Transaction Type should match configured mapping. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Transaction Type Master |

### RDR_289 — Verify search functionality retrieves the correct transaction type record using transaction code or name.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Transaction Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Transaction Type Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter search value. 7. Execute search. 8. Review results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter search value. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Enter search value. - Enter a valid search value and verify matching records are displayed.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality retrieves the correct transaction type record using transaction code or name. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching records only. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Transaction Type Master |

### RDR_290 — Verify View action opens complete transaction type details including direction, risk weight, cash indicator, cross-border flag and goAML mapping.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Transaction Type Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Transaction Type Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Transaction Type Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review detail screen. 8. Validate displayed information. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Verify risk level values and labels are displayed consistently in grid and details. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete transaction type details including direction, risk weight, cash indicator, cross-border flag and goAML mapping. succeeds for Transaction Type Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open detailed transaction information successfully. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Transaction Type Master |

### RDR_291 — Verify Currency Master records are displayed successfully after synchronization and all configured currencies are visible in the grid.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Currency Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Currency Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Currency tab. 7. Review Currency Master grid. 8. Verify displayed records. 9. Review Currency Master grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Verify displayed records. - Review Currency Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Currency Master records are displayed successfully after synchronization and all configured currencies are visible in the grid. succeeds for Currency Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All configured currency records should be displayed. Requirement reference: Currency Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Currency Master |

### RDR_292 — Verify Currency Code (ISO 4217) is displayed correctly and uniquely for every currency record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Currency Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Currency Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review ISO Code column. 7. Compare displayed values with source data. 8. Review Currency Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare displayed values with source data. - Review Currency Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Currency Code (ISO 4217) is displayed correctly and uniquely for every currency record. succeeds for Currency Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Currency Code should be unique and match source records. Requirement reference: Currency Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Currency Master |

### RDR_293 — Verify Currency Name is displayed correctly according to the configured currency master data.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Currency Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Currency Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Name column. 7. Compare displayed values with source data. 8. Review Currency Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare displayed values with source data. - Review Currency Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Currency Name is displayed correctly according to the configured currency master data. succeeds for Currency Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Currency Name should match source records. Requirement reference: Currency Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Currency Master |

### RDR_294 — Verify Currency Symbol is displayed correctly for each configured currency.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Currency Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Currency Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Symbol column. 7. Compare values with configured records. 8. Review Currency Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with configured records. - Review Currency Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Currency Symbol is displayed correctly for each configured currency. succeeds for Currency Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Currency Symbol should match source configuration. Requirement reference: Currency Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Currency Master |

### RDR_295 — Verify Country Code is displayed correctly against the corresponding currency.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Currency Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Currency Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Country column. 7. Compare displayed values with source data. 8. Review Currency Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review Country column. - Compare displayed values with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Country Code is displayed correctly against the corresponding currency. succeeds for Currency Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Country Code should match source records. Requirement reference: Currency Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Currency Master |

### RDR_296 — Verify Status is displayed correctly and reflects whether the currency is active in the system.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Currency Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Currency Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Status column. 7. Compare values with source data. 8. Review Currency Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Currency Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Status is displayed correctly and reflects whether the currency is active in the system. succeeds for Currency Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Status should match source records. Requirement reference: Currency Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Currency Master |

### RDR_297 — Verify INR currency record is displayed correctly with all associated details.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Currency Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Currency Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate INR record. 7. Verify Code, Name, Symbol and Status. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Locate INR record. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - INR currency record is displayed correctly with all associated details. succeeds for Currency Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | INR record should match configured values. Requirement reference: Currency Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Currency Master |

### RDR_298 — Verify USD currency record is displayed correctly with all associated details.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Currency Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Currency Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate USD record. 7. Verify displayed details. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Locate USD record. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - USD currency record is displayed correctly with all associated details. succeeds for Currency Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | USD record should match configured values. Requirement reference: Currency Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Currency Master |

### RDR_299 — Verify AED currency record is displayed correctly with all associated details.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Currency Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Currency Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate AED record. 7. Verify displayed details. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Locate AED record. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - AED currency record is displayed correctly with all associated details. succeeds for Currency Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | AED record should match configured values. Requirement reference: Currency Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Currency Master |

### RDR_300 — Verify Search functionality retrieves the correct currency record using Currency Code.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Currency Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Currency Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter currency code in search box. 7. Execute search. 8. Review results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter currency code in search box. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality retrieves the correct currency record using Currency Code. succeeds for Currency Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching record only. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Currency Master |

### RDR_301 — Verify Search functionality retrieves the correct currency record using Currency Name.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Currency Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Currency Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter currency name. 7. Execute search. 8. Verify results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Execute search. - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality retrieves the correct currency record using Currency Name. succeeds for Currency Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching record only. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Currency Master |

### RDR_302 — Verify View action opens complete currency details including Currency Code, Name, Reporting Currency flag and AML attributes.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Currency Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Currency Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review detail screen. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete currency details including Currency Code, Name, Reporting Currency flag and AML attributes. succeeds for Currency Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Currency details page should open successfully. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Currency Master |

### RDR_303 — Verify Reporting Currency flag is displayed correctly in the currency detail view according to bank reporting configuration.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Currency Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Currency Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open currency details. 7. Review Reporting Currency field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review Reporting Currency field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Reporting Currency flag is displayed correctly in the currency detail view according to bank reporting configuration. succeeds for Currency Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Reporting Currency flag should match source setup. Requirement reference: Currency Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Currency Master |

### RDR_304 — Verify High Risk Currency flag is displayed correctly in detail view for AML monitoring and risk scoring purposes.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Currency Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Currency Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open currency detail screen. 7. Verify High Risk Currency field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Verify risk level values and labels are displayed consistently in grid and details. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify High Risk Currency field. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Verify High Risk Currency field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - High Risk Currency flag is displayed correctly in detail view for AML monitoring and risk scoring purposes. succeeds for Currency Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | High Risk Currency flag should match source records. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Currency Master |

### RDR_305 — Verify Currency Master data can be exported successfully through Excel and CSV options without data loss.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Currency Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Currency Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click CSV export. 7. Download file. 8. Click Excel export. 9. Validate exported records. 10. Click CSV export and verify export action completes for current filtered dataset. 11. Click Excel export and verify downloaded file headers match on-screen columns. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click CSV export. - Click Excel export. - Validate exported records.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Validate exported records. - Click CSV export and verify export action completes for current filtered dataset.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Currency Master data can be exported successfully through Excel and CSV options without data loss. succeeds for Currency Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Export should contain all displayed currency records. Requirement reference: Export Formats. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Currency Master |

### RDR_306 — Verify FX Rate records are displayed successfully after synchronization and all configured exchange rates are visible in the grid.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → FX Rates Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register FX Rates Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open FX Rates tab. 7. Review exchange rate grid. 8. Verify displayed records. 9. Review FX Rates Master grid fields and verify displayed values are populated. 10. Compare selected row values with source snapshot and verify consistency. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Verify displayed records. - Review FX Rates Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - FX Rate records are displayed successfully after synchronization and all configured exchange rates are visible in the grid. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All FX rate records should be displayed. Requirement reference: FX Rates Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, FX Rates Master |

### RDR_307 — Verify Rate ID is displayed uniquely for every FX rate record maintained in the master.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → FX Rates Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register FX Rates Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Rate ID column. 7. Compare all records. 8. Review FX Rates Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare all records. - Review FX Rates Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Rate ID is displayed uniquely for every FX rate record maintained in the master. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Rate IDs should be unique. Requirement reference: FX Rates Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, FX Rates Master |

### RDR_308 — Verify Source Currency (From Currency) is displayed correctly according to configured exchange rate mapping.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → FX Rates Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register FX Rates Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review From CCY column. 7. Compare values with source records. 8. Review FX Rates Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review FX Rates Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Source Currency (From Currency) is displayed correctly according to configured exchange rate mapping. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | From Currency should match source records. Requirement reference: FX Rates Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, FX Rates Master |

### RDR_309 — Verify Target Currency (To Currency) is displayed correctly according to exchange rate configuration.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → FX Rates Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register FX Rates Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review To CCY column. 7. Compare values with source records. 8. Review FX Rates Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review FX Rates Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Target Currency (To Currency) is displayed correctly according to exchange rate configuration. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | To Currency should match source records. Requirement reference: FX Rates Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, FX Rates Master |

### RDR_310 — Verify Exchange Rate value is displayed correctly and matches the configured market exchange rate.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → FX Rates Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register FX Rates Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Exchange Rate column. 7. Compare values with source records. 8. Review FX Rates Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review FX Rates Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Exchange Rate value is displayed correctly and matches the configured market exchange rate. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Exchange Rate should match source records. Requirement reference: FX Rates Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, FX Rates Master |

### RDR_311 — Verify Rate Date is displayed correctly for each exchange rate record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → FX Rates Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register FX Rates Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Rate Date column. 7. Compare with source records. 8. Review FX Rates Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source records. - Review FX Rates Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Rate Date is displayed correctly for each exchange rate record. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Rate Date should match source records. Requirement reference: FX Rates Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, FX Rates Master |

### RDR_312 — Verify Rate Type is displayed correctly according to the configured exchange rate category.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → FX Rates Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register FX Rates Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Rate Type column. 7. Compare values with source records. 8. Review FX Rates Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review FX Rates Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Rate Type is displayed correctly according to the configured exchange rate category. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Rate Type should match source configuration. Requirement reference: FX Rates Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, FX Rates Master |

### RDR_313 — Verify Effective From date and time are displayed correctly according to the validity period of the exchange rate.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → FX Rates Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register FX Rates Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Effective From column. 7. Compare values with source records. 8. Review FX Rates Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review FX Rates Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Effective From date and time are displayed correctly according to the validity period of the exchange rate. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Effective From value should match source records. Requirement reference: FX Rates Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, FX Rates Master |

### RDR_314 — Verify Effective To date and time are displayed correctly according to the validity period of the exchange rate.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → FX Rates Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register FX Rates Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Effective To column. 7. Compare values with source records. 8. Review FX Rates Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review FX Rates Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Effective To date and time are displayed correctly according to the validity period of the exchange rate. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Effective To value should match source records. Requirement reference: FX Rates Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, FX Rates Master |

### RDR_315 — Verify USD to INR exchange rate record is displayed correctly with all associated details.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → FX Rates Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register FX Rates Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Verify currencies, rate and validity period. 7. Click View action on a row and verify detail modal opens with row metadata. 8. Verify detail modal fields match selected record and close modal successfully. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - USD to INR exchange rate record is displayed correctly with all associated details. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | USD-INR record should match source configuration. Requirement reference: FX Rates Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, FX Rates Master |

### RDR_316 — Verify AED to INR exchange rate record is displayed correctly with all associated details.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → FX Rates Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register FX Rates Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Verify displayed values. 7. Click View action on a row and verify detail modal opens with row metadata. 8. Verify detail modal fields match selected record and close modal successfully. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Verify displayed values. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - AED to INR exchange rate record is displayed correctly with all associated details. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | AED-INR record should match source configuration. Requirement reference: FX Rates Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, FX Rates Master |

### RDR_317 — Verify EUR to INR exchange rate record is displayed correctly with all associated details.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → FX Rates Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register FX Rates Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Verify displayed values. 7. Click View action on a row and verify detail modal opens with row metadata. 8. Verify detail modal fields match selected record and close modal successfully. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Verify displayed values. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - EUR to INR exchange rate record is displayed correctly with all associated details. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | EUR-INR record should match source configuration. Requirement reference: FX Rates Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, FX Rates Master |

### RDR_318 — Verify Search functionality retrieves the correct FX rate record using Rate ID or Currency Code.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → FX Rates Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register FX Rates Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter search value. 7. Execute search. 8. Review results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter search value. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Enter search value. - Enter a valid search value and verify matching records are displayed.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality retrieves the correct FX rate record using Rate ID or Currency Code. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching records only. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, FX Rates Master |

### RDR_319 — Verify View action opens complete FX rate details including currencies, exchange rate, effective date and source information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → FX Rates Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register FX Rates Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review detailed information. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete FX rate details including currencies, exchange rate, effective date and source information. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View should open FX detail screen successfully. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, FX Rates Master |

### RDR_320 — Verify CSV and Excel export functionality exports all displayed FX rate records correctly without data mismatch.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → FX Rates Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register FX Rates Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "CURRENCY_EXCH_RATE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click CSV export. 7. Validate downloaded file. 8. Click Excel export. 9. Click CSV export and verify export action completes for current filtered dataset. 10. Click Excel export and verify downloaded file headers match on-screen columns. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Click CSV export. - Click Excel export. - Click CSV export and verify export action completes for current filtered dataset.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Click CSV export and verify export action completes for current filtered dataset. - Scroll through grid rows and verify sticky header remains visible.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - CSV and Excel export functionality exports all displayed FX rate records correctly without data mismatch. succeeds for FX Rates Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Exported data should match UI records. Requirement reference: Export Formats. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, FX Rates Master |

### RDR_321 — Verify Industry Code Master records are displayed successfully after synchronization and all configured industry records are visible in the grid.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Industry Code Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Industry Code Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "INDUSTRY_CODE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Industry Code tab. 7. Review Industry Code grid. 8. Verify displayed records count and details. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Verify displayed records count and details. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Industry Code Master records are displayed successfully after synchronization and all configured industry records are visible in the grid. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All industry records should be displayed. Requirement reference: Industry Code Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Industry Code Master |

### RDR_322 — Verify Industry Master ID is displayed uniquely for every industry record maintained in the system.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Industry Code Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Industry Code Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "INDUSTRY_CODE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review ID column. 7. Compare all displayed records. 8. Review Industry Code Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare all displayed records. - Review Industry Code Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Industry Master ID is displayed uniquely for every industry record maintained in the system. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Industry IDs should be unique. Requirement reference: Industry Code Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Industry Code Master |

### RDR_323 — Verify Code Type is displayed correctly according to the configured classification standard used by the organization.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Industry Code Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Industry Code Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "INDUSTRY_CODE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Code Type column. 7. Compare values with source data. 8. Review Industry Code Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Industry Code Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Code Type is displayed correctly according to the configured classification standard used by the organization. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Code Type should match source records. Requirement reference: Industry Code Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Industry Code Master |

### RDR_324 — Verify Industry Code is displayed correctly and matches the configured NIC/industry classification code.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Industry Code Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Industry Code Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "INDUSTRY_CODE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Industry Code column. 7. Compare values with source records. 8. Review Industry Code Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review Industry Code Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Industry Code is displayed correctly and matches the configured NIC/industry classification code. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Industry Code should match source records. Requirement reference: Industry Code Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Industry Code Master |

### RDR_325 — Verify Industry Name is displayed correctly according to the configured industry classification.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Industry Code Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Industry Code Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "INDUSTRY_CODE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Name column. 7. Compare values with source data. 8. Review Industry Code Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Industry Code Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Industry Name is displayed correctly according to the configured industry classification. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Industry Name should match source records. Requirement reference: Industry Code Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Industry Code Master |

### RDR_326 — Verify Industry Description is displayed correctly and provides business/AML context for the industry.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Industry Code Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Industry Code Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "INDUSTRY_CODE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Description column. 7. Compare values with source data. 8. Review Industry Code Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Industry Code Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Industry Description is displayed correctly and provides business/AML context for the industry. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Description should match source records. Requirement reference: Industry Code Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Industry Code Master |

### RDR_327 — Verify Banking and Financial Intermediation industry record is displayed correctly with its associated code and description.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Industry Code Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Industry Code Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "INDUSTRY_CODE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate IND- 7. Verify Industry Code, Name and Description. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Banking and Financial Intermediation industry record is displayed correctly with its associated code and description. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Record should match configured values. Requirement reference: Industry Code Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Industry Code Master |

### RDR_328 — Verify Jewellery industry record is displayed correctly as a cash-intensive business sector used for AML monitoring.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Industry Code Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Industry Code Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "INDUSTRY_CODE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate IND- 7. Verify code, name and description. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Jewellery industry record is displayed correctly as a cash-intensive business sector used for AML monitoring. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Record should match source configuration. Requirement reference: Industry Code Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Industry Code Master |

### RDR_329 — Verify Restaurant and Mobile Food Services industry record is displayed correctly as per configured industry classification.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Industry Code Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Industry Code Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "INDUSTRY_CODE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate IND- 7. Verify displayed details. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Click View action on a row and verify detail modal opens with row metadata. - Verify detail modal fields match selected record and close modal successfully.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Restaurant and Mobile Food Services industry record is displayed correctly as per configured industry classification. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Record should match source configuration. Requirement reference: Industry Code Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Industry Code Master |

### RDR_330 — Verify Risk Rating field is displayed correctly in the industry detail screen according to AML risk scoring rules.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Industry Code Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Industry Code Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "INDUSTRY_CODE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View. 7. Open industry details. 8. Review Risk Rating field. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Verify risk level values and labels are displayed consistently in grid and details. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Review Risk Rating field. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Review Risk Rating field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Risk Rating field is displayed correctly in the industry detail screen according to AML risk scoring rules. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Risk Rating should match configured values. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Industry Code Master |

### RDR_331 — Verify High Risk Flag is displayed correctly for industries classified as high-risk sectors for AML purposes.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Industry Code Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Industry Code Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "INDUSTRY_CODE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open industry detail screen. 7. Review High Risk Flag field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Verify risk level values and labels are displayed consistently in grid and details. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Review High Risk Flag field. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Review High Risk Flag field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - High Risk Flag is displayed correctly for industries classified as high-risk sectors for AML purposes. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | High Risk Flag should match source configuration. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Industry Code Master |

### RDR_332 — Verify FATF Sector classification is displayed correctly in the industry detail view according to regulatory mapping.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Industry Code Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Industry Code Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "INDUSTRY_CODE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open industry detail screen. 7. Review FATF Sector field. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review FATF Sector field. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - FATF Sector classification is displayed correctly in the industry detail view according to regulatory mapping. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | FATF Sector should match source records. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Industry Code Master |

### RDR_333 — Verify Search functionality retrieves the correct industry record using Industry Code.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Industry Code Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Industry Code Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "INDUSTRY_CODE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter Industry Code in search field. 7. Execute search. 8. Review results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter Industry Code in search field. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Enter Industry Code in search field. - Enter a valid search value and verify matching records are displayed.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality retrieves the correct industry record using Industry Code. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching records only. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Industry Code Master |

### RDR_334 — Verify Search functionality retrieves the correct industry record using Industry Name.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Industry Code Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Industry Code Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "INDUSTRY_CODE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter Industry Name. 7. Execute search. 8. Review results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Execute search. - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality retrieves the correct industry record using Industry Name. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching records only. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Industry Code Master |

### RDR_335 — Verify View action opens complete industry details including Industry Code, Name, Risk Rating, High Risk Flag and FATF Sector classification.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Industry Code Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Industry Code Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "INDUSTRY_CODE" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review complete industry information. 8. Validate displayed fields. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Verify risk level values and labels are displayed consistently in grid and details. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Validate displayed fields. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete industry details including Industry Code, Name, Risk Rating, High Risk Flag and FATF Sector classification. succeeds for Industry Code Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View should open industry details successfully. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Industry Code Master |

### RDR_336 — Verify Reference Master records are displayed successfully after synchronization and all configured reference values are visible in the grid.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Reference Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Reference Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "REFERENCE_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Ref Master tab. 7. Review Reference Master grid. 8. Verify displayed records count and details. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Verify displayed records count and details. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Reference Master records are displayed successfully after synchronization and all configured reference values are visible in the grid. succeeds for Reference Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All reference records should be displayed. Requirement reference: Reference Master (Generic). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Reference Master |

### RDR_337 — Verify Reference ID is displayed uniquely for every reference record maintained in the system.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Reference Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Reference Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "REFERENCE_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Ref ID column. 7. Compare displayed records. 8. Review Reference Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare displayed records. - Review Reference Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Reference ID is displayed uniquely for every reference record maintained in the system. succeeds for Reference Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Reference IDs should be unique. Requirement reference: Reference Master (Generic). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Reference Master |

### RDR_338 — Verify Category value is displayed correctly according to the configured reference type classification.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Reference Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Reference Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "REFERENCE_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Category column. 7. Compare values with source data. 8. Review Reference Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Reference Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Category value is displayed correctly according to the configured reference type classification. succeeds for Reference Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Category should match source records. Requirement reference: Reference Master (Generic). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Reference Master |

### RDR_339 — Verify Reference Code is displayed correctly according to the configured lookup code value.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Reference Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Reference Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "REFERENCE_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Code column. 7. Compare values with source records. 8. Review Reference Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review Reference Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Reference Code is displayed correctly according to the configured lookup code value. succeeds for Reference Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Code should match source records. Requirement reference: Reference Master (Generic). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Reference Master |

### RDR_340 — Verify Description field is displayed correctly and provides accurate business meaning of the reference value.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Reference Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Reference Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "REFERENCE_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Description column. 7. Compare displayed values with source data. 8. Review Reference Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare displayed values with source data. - Review Reference Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Description field is displayed correctly and provides accurate business meaning of the reference value. succeeds for Reference Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Description should match source records. Requirement reference: Reference Master (Generic). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Reference Master |

### RDR_341 — Verify Text Value is displayed correctly according to configured business rules and thresholds.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Reference Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Reference Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "REFERENCE_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Text Value column. 7. Compare values with source data. 8. Review Reference Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review Text Value column. - Compare values with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Text Value is displayed correctly according to configured business rules and thresholds. succeeds for Reference Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Text Value should match source records. Requirement reference: Reference Master (Generic). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Reference Master |

### RDR_342 — Verify Countries field is displayed correctly and reflects country-specific or global applicability of the reference value.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Reference Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Reference Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "REFERENCE_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Countries column. 7. Compare values with source records. 8. Review Reference Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review Countries column. - Compare values with source records.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Countries field is displayed correctly and reflects country-specific or global applicability of the reference value. succeeds for Reference Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Countries value should match source records. Requirement reference: Reference Master (Generic). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Reference Master |

### RDR_343 — Verify Status is displayed correctly and reflects whether the reference code is active and available for AML processing.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Reference Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Reference Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "REFERENCE_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Status column. 7. Compare values with source records. 8. Review Reference Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review Reference Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Status is displayed correctly and reflects whether the reference code is active and available for AML processing. succeeds for Reference Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Status should match source records. Requirement reference: Reference Master (Generic). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Reference Master |

### RDR_344 — Verify Modified Date is displayed correctly and reflects the latest update timestamp of the reference record.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Reference Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Reference Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "REFERENCE_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Review Modified column. 7. Compare values with source data. 8. Review Reference Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source data. - Review Reference Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Modified Date is displayed correctly and reflects the latest update timestamp of the reference record. succeeds for Reference Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Modified date should match source records. Requirement reference: Reference Master (Generic). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Reference Master |

### RDR_345 — Verify CTR Threshold reference record is displayed correctly with AML reporting threshold information.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Reference Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Reference Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "REFERENCE_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate REF- 7. Verify Category, Code, Description and Text Value. 8. Review Reference Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Verify Category, Code, Description and Text Value. - Review Reference Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - CTR Threshold reference record is displayed correctly with AML reporting threshold information. succeeds for Reference Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Record should match configured values. Requirement reference: Reference Master (Generic). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Reference Master |

### RDR_346 — Verify Wildlife Keyword reference record is displayed correctly for AML wildlife trafficking monitoring scenarios.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Reference Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Reference Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "REFERENCE_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate REF- 7. Verify Category, Code, Description and Text Value. 8. Click View action on a row and verify detail modal opens with row metadata. 9. Verify detail modal fields match selected record and close modal successfully. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Verify Category, Code, Description and Text Value. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Wildlife Keyword reference record is displayed correctly for AML wildlife trafficking monitoring scenarios. succeeds for Reference Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Record should match configured values. Requirement reference: Reference Master (Generic). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Reference Master |

### RDR_347 — Verify Dormancy Threshold reference record is displayed correctly for dormant account monitoring rules.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Reference Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Reference Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "REFERENCE_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Locate REF- 7. Verify all displayed values. 8. Review Reference Master grid fields and verify displayed values are populated. 9. Compare selected row values with source snapshot and verify consistency. 10. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Verify all displayed values. - Review Reference Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Dormancy Threshold reference record is displayed correctly for dormant account monitoring rules. succeeds for Reference Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Record should match configured values. Requirement reference: Reference Master (Generic). |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Reference Master |

### RDR_348 — Verify Search functionality retrieves the correct reference record using Reference Code.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Reference Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Reference Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "REFERENCE_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter reference code in search box. 7. Execute search. 8. Review results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter reference code in search box. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality retrieves the correct reference record using Reference Code. succeeds for Reference Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching records only. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Reference Master |

### RDR_349 — Verify Search functionality retrieves the correct reference record using Category name.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Reference Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Reference Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "REFERENCE_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Enter category value. 7. Execute search. 8. Verify results. 9. Enter a valid search value and verify matching records are displayed. 10. Enter a non-matching search value and verify empty state messaging is shown. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Execute search. - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Enter category value. - Enter a valid search value and verify matching records are displayed.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality retrieves the correct reference record using Category name. succeeds for Reference Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching records only. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Reference Master |

### RDR_350 — Verify View action opens complete reference details including Reference Type, Code, Name, Active Flag and Sort Order information maintained in the master.

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Reference Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Reference Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "REFERENCE_MASTER" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Click View button. 7. Review detail screen. 8. Validate Ref Type, Ref Code, Ref Name, Is Active and Sort Order fields. 9. Click View action on a row and verify detail modal opens with row metadata. 10. Verify detail modal fields match selected record and close modal successfully. 11. Sort by a numeric or textual column in ascending order and verify row order. 12. Sort the same column in descending order and verify reverse ordering. 13. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Validate Ref Type, Ref Code, Ref Name, Is Active and Sort Order fields. - Sort by a numeric or textual column in ascending order and verify row order. - Sort the same column in descending order and verify reverse ordering.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Validate Ref Type, Ref Code, Ref Name, Is Active and Sort Order fields. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View action opens complete reference details including Reference Type, Code, Name, Active Flag and Sort Order information maintained in the master. succeeds for Reference Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View button should open detailed reference information successfully. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Reference Master |

### RDR_351 — Verify Country Master page loads successfully

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Country Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Country Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Country Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Navigate to Reference Data Register. 7. Open Reference Masters. 8. Click Country Master tab. 9. Verify page loads successfully. 10. Enter a valid search value and verify matching records are displayed. 11. Enter a non-matching search value and verify empty state messaging is shown. 12. Apply branch or type filter and verify only matching records remain in grid. 13. Clear filters and verify the full dataset is restored. 14. Click primary hyperlink in grid and verify navigation opens the expected detail route. 15. Scroll through grid rows and verify sticky header remains visible. 16. Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name. |
| Expected Result | Functional Validation: - Enter a valid search value and verify matching records are displayed. - Enter a non-matching search value and verify empty state messaging is shown. - Apply branch or type filter and verify only matching records remain in grid.  Business Validation: - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name.  Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Click Country Master tab.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Country Master page loads successfully succeeds for Country Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Country Master page should load successfully with country records, filters, search box and action buttons displayed. Requirement reference: High-Risk Country Prioritisation & Display. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Country Master |

### RDR_352 — Verify High Risk countries are displayed at top by default

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Country Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Country Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Country Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Country Master page. 7. Observe records displayed after initial load. 8. Check Risk Level column. 9. Verify High Risk countries appear before other categories. 10. Verify risk level values and labels are displayed consistently in grid and details. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name.  Business Validation: - Check Risk Level column. - Verify High Risk countries appear before other categories.  Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - High Risk countries are displayed at top by default succeeds for Country Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | High Risk countries should appear before Medium, Low and Unclassified countries. Requirement reference: High-Risk Country Prioritisation & Display. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Country Master |

### RDR_353 — Verify search using Country Name

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Country Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Country Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Country Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Country Master page. 7. Enter country name in search box. 8. Wait for results. 9. Verify matching record appears. 10. Clear search field. 11. Enter a valid search value and verify matching records are displayed. 12. Enter a non-matching search value and verify empty state messaging is shown. 13. Scroll through grid rows and verify sticky header remains visible. 14. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter country name in search box. - Clear search field. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search using Country Name succeeds for Country Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return matching country records based on entered country name. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Country Master |

### RDR_354 — Verify search using ISO Alpha-2 Code

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Country Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Country Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Country Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Country Master page. 7. Enter Alpha-2 code in search box. 8. Execute search. 9. Verify matching country record is returned. 10. Enter a valid search value and verify matching records are displayed. 11. Enter a non-matching search value and verify empty state messaging is shown. 12. Click View action on a row and verify detail modal opens with row metadata. 13. Verify detail modal fields match selected record and close modal successfully. 14. Scroll through grid rows and verify sticky header remains visible. 15. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter Alpha-2 code in search box. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search using ISO Alpha-2 Code succeeds for Country Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should support ISO Alpha-2 codes and return correct country details. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Country Master |

### RDR_355 — Verify Region filter functionality

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Country Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Country Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Country Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Country Master page. 7. Select Region dropdown. 8. Choose a region. 9. Verify filtered records. 10. Reset filter. 11. Apply branch or type filter and verify only matching records remain in grid. 12. Clear filters and verify the full dataset is restored. 13. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Verify filtered records. - Reset filter. - Apply branch or type filter and verify only matching records remain in grid.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Region filter functionality succeeds for Country Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | System should display only countries belonging to selected region. Requirement reference: Filter Bars. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Country Master |

### RDR_356 — Verify Risk Level filter functionality

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Country Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Country Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Country Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Country Master page. 7. Select Risk Level dropdown. 8. Choose High Risk. 9. Verify displayed records. 10. Repeat for Medium and Low. 11. Apply branch or type filter and verify only matching records remain in grid. 12. Clear filters and verify the full dataset is restored. 13. Verify risk level values and labels are displayed consistently in grid and details. 14. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Apply branch or type filter and verify only matching records remain in grid. - Clear filters and verify the full dataset is restored. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Select Risk Level dropdown. - Choose High Risk.  Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Risk Level filter functionality succeeds for Country Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | System should display only countries matching selected risk level. Requirement reference: Filter Bars. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Country Master |

### RDR_357 — Verify combined Search and Filter functionality

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Country Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Country Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999; Risk rating: LOW; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Country Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Search a country. 7. Apply Region filter. 8. Apply Risk Level filter. 9. Verify records satisfy all selected criteria. 10. Enter a valid search value and verify matching records are displayed. 11. Enter a non-matching search value and verify empty state messaging is shown. 12. Apply branch or type filter and verify only matching records remain in grid. 13. Clear filters and verify the full dataset is restored. 14. Verify risk level values and labels are displayed consistently in grid and details. 15. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Search a country. - Apply Region filter. - Apply Risk Level filter.  Business Validation: - Apply Risk Level filter. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Search a country.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Combined Search and Filter functionality succeeds for Country Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search, Region and Risk filters should work together and display matching records only. Requirement reference: Filter Bars. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Country Master |

### RDR_358 — Verify Country Name column sorting

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Country Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Country Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Country Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Country Master page. 7. Click Country Name header. 8. Verify ascending order. 9. Click again. 10. Verify descending order. 11. Sort by a numeric or textual column in ascending order and verify row order. 12. Sort the same column in descending order and verify reverse ordering. 13. Scroll through grid rows and verify sticky header remains visible. 14. Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name. |
| Expected Result | Functional Validation: - Sort by a numeric or textual column in ascending order and verify row order. - Sort the same column in descending order and verify reverse ordering. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name.  Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Country Name column sorting succeeds for Country Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | System should support ascending and descending sorting on Country Name column. Requirement reference: High-Risk Country Prioritisation & Display. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Country Master |

### RDR_359 — Verify Region column sorting

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Country Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Country Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Country Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Country Master page. 7. Click Region column header. 8. Verify records sort by region. 9. Click again to reverse sorting. 10. Sort by a numeric or textual column in ascending order and verify row order. 11. Sort the same column in descending order and verify reverse ordering. 12. Scroll through grid rows and verify sticky header remains visible. 13. Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name. |
| Expected Result | Functional Validation: - Verify records sort by region. - Click again to reverse sorting. - Sort by a numeric or textual column in ascending order and verify row order.  Business Validation: - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name.  Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Region column sorting succeeds for Country Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | System should sort records based on Region values. Requirement reference: High-Risk Country Prioritisation & Display. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Country Master |

### RDR_360 — Verify Risk Reason tags display correctly

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Country Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Country Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Country Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Country Master page. 7. Locate High Risk country. 8. Review Risk Reasons column. 9. Verify all assigned tags are displayed. 10. Verify risk level values and labels are displayed consistently in grid and details. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name.  Business Validation: - Locate High Risk country. - Review Risk Reasons column.  Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Risk Reason tags display correctly succeeds for Country Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All configured risk reason tags should be displayed for high-risk countries. Requirement reference: High-Risk Country Prioritisation & Display. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Country Master |

### RDR_361 — Verify View button functionality

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Country Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Country Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Country Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Country Master page. 7. Locate any country record. 8. Click View button. 9. Verify details panel opens. 10. Verify country information is displayed. 11. Click View action on a row and verify detail modal opens with row metadata. 12. Verify detail modal fields match selected record and close modal successfully. 13. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View button functionality succeeds for Country Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Clicking View should open country details in read-only mode. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Country Master |

### RDR_362 — Verify Audit Trail information in View panel

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Country Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Country Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Country Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open country details using View. 7. Navigate to Audit Trail tab. 8. Review history records. 9. Verify Maker/Checker actions are visible. 10. Click View action on a row and verify detail modal opens with row metadata. 11. Verify detail modal fields match selected record and close modal successfully. 12. Click primary hyperlink in grid and verify navigation opens the expected detail route. 13. Scroll through grid rows and verify sticky header remains visible. 14. Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name. |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name.  Business Validation: - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name.  Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open country details using View.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - Navigate to Audit Trail tab.  System Behaviour: - Audit Trail information in View panel succeeds for Country Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Audit Trail should display complete history of changes and approvals. Requirement reference: High-Risk Country Prioritisation & Display. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Country Master |

### RDR_363 — Verify Maker submits country updates successfully

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Country Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Country Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Risk rating: LOW |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Country Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Country Master. 7. Edit a country record. 8. Update Risk Level and Remarks. 9. Click Save & Submit. 10. Verify risk level values and labels are displayed consistently in grid and details. 11. Scroll through grid rows and verify sticky header remains visible. 12. Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name.  Business Validation: - Update Risk Level and Remarks. - Verify risk level values and labels are displayed consistently in grid and details.  Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Maker submits country updates successfully succeeds for Country Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Maker should be able to submit modifications for approval. Requirement reference: High-Risk Country Prioritisation & Display. |
| Automation Candidate | No |
| Automation Layer | ui |
| Tags | Reference Masters, Country Master |

### RDR_364 — Verify Checker approval workflow

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Country Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Country Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Country Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open pending country record. 7. Review submitted changes. 8. Click Approve. 9. Verify status update. 10. Review Country Master grid fields and verify displayed values are populated. 11. Compare selected row values with source snapshot and verify consistency. 12. Scroll through grid rows and verify sticky header remains visible. 13. Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible. - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name.  Business Validation: - Validate one key rule from requirement context: Within each risk tier, countries are sorted alphabetically by Country Name.  Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open pending country record.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Checker approval workflow succeeds for Country Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Checker should be able to review and approve pending records. Requirement reference: High-Risk Country Prioritisation & Display. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Country Master |

### RDR_365 — Verify CSV export functionality

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Reference Masters → Country Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Country Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Reference Masters" from the Reference Data Register sidebar. 3. Select master tab "Country Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Country Master page. 7. Apply search/filter criteria. 8. Click CSV button. 9. Download generated file. 10. Verify exported data. 11. Enter a valid search value and verify matching records are displayed. 12. Enter a non-matching search value and verify empty state messaging is shown. 13. Apply branch or type filter and verify only matching records remain in grid. 14. Clear filters and verify the full dataset is restored. 15. Click CSV export and verify export action completes for current filtered dataset. 16. Click Excel export and verify downloaded file headers match on-screen columns. 17. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Apply search/filter criteria. - Verify exported data. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Select master tab "Country Master" and wait for grid content to load. - Open Country Master page.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Reference Masters" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - CSV export functionality succeeds for Country Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | System should export displayed country records into CSV file successfully. Requirement reference: Export Formats. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Reference Masters, Country Master |

### RDR_366 — Verify search functionality using Employee Name

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Employee Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Employee Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Employee ID: EMP-001; Employee Code: BR-HO-0045; Department: Compliance; Branch: BRN-H0001; Search (partial): Rajesh; Search (exact): CIF001001; Invalid search term: zzzz-no-match-99999 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Employee" from the Reference Data Register sidebar. 3. Select master tab "EMPLOYEE Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Employee Master. 7. Enter employee name in search box. 8. Execute search. 9. Verify matching employee record appears. 10. Enter a valid search value and verify matching records are displayed. 11. Enter a non-matching search value and verify empty state messaging is shown. 12. Scroll through grid rows and verify sticky header remains visible. 13. Validate one key rule from requirement context: full data extracts require system administrator assistance. "🔄 Refresh CBS" button — disabled unless the bank has a real-time CBS API integration enabled. |
| Expected Result | Functional Validation: - Enter employee name in search box. - Execute search. - Enter a valid search value and verify matching records are displayed.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Verify matching employee record appears. - Enter a valid search value and verify matching records are displayed.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Search functionality using Employee Name succeeds for Employee Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Search should return employee records matching the entered name. Requirement reference: Toolbar. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Employee Master, Employee Master |

### RDR_367 — Verify masked employee name display for PII protection

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Employee Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Employee Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Employee ID: EMP-001; Employee Code: BR-HO-0045; Department: Compliance; Branch: BRN-H0001; Masked name: Priya Na*** |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Employee" from the Reference Data Register sidebar. 3. Select master tab "EMPLOYEE Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Employee Master. 7. Review Full Name column. 8. Verify names are partially masked. 9. Review multiple records. 10. Verify PII fields are masked for restricted role and readable for authorized role only. 11. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Verify names are partially masked. - Verify PII fields are masked for restricted role and readable for authorized role only.  Data Validation: - Review multiple records. - Verify PII fields are masked for restricted role and readable for authorized role only.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Masked employee name display for PII protection succeeds for Employee Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Employee names should be partially masked according to privacy requirements. Requirement reference: Employee Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Employee Master, Employee Master |

### RDR_368 — Verify employee status display

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Employee Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Employee Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Employee ID: EMP-001; Employee Code: BR-HO-0045; Department: Compliance; Branch: BRN-H0001; Status: ACTIVE |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Employee" from the Reference Data Register sidebar. 3. Select master tab "EMPLOYEE Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Employee Master. 7. Review Status column. 8. Verify status values displayed. 9. Compare with source data. 10. Review Employee Master grid fields and verify displayed values are populated. 11. Compare selected row values with source snapshot and verify consistency. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Verify status values displayed. - Compare with source data.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Employee status display succeeds for Employee Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Status field should display valid employee status values. Requirement reference: Employee Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Employee Master, Employee Master |

### RDR_369 — Verify Joining Date is displayed correctly

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Employee Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Employee Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Employee ID: EMP-001; Employee Code: BR-HO-0045; Department: Compliance; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Employee" from the Reference Data Register sidebar. 3. Select master tab "EMPLOYEE Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Employee Master. 7. Review Joining Date column. 8. Verify date format. 9. Compare with source data. 10. Review Employee Master grid fields and verify displayed values are populated. 11. Compare selected row values with source snapshot and verify consistency. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source data. - Review Employee Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Joining Date is displayed correctly succeeds for Employee Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Joining Date should be displayed in the configured format and match source records. Requirement reference: Employee Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Employee Master, Employee Master |

### RDR_370 — Verify Department information display

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Employee Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Employee Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Employee ID: EMP-001; Employee Code: BR-HO-0045; Department: Compliance; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Employee" from the Reference Data Register sidebar. 3. Select master tab "EMPLOYEE Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Employee Master. 7. Review Department column. 8. Compare values with source records. 9. Verify department assignment. 10. Review Employee Master grid fields and verify displayed values are populated. 11. Compare selected row values with source snapshot and verify consistency. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare values with source records. - Review Employee Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Department information display succeeds for Employee Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Department should match employee master records. Requirement reference: Employee Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Employee Master, Employee Master |

### RDR_371 — Verify Branch assignment display

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Employee Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Employee Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Employee ID: EMP-001; Employee Code: BR-HO-0045; Department: Compliance; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Employee" from the Reference Data Register sidebar. 3. Select master tab "EMPLOYEE Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Employee Master. 7. Review Branch ID column. 8. Compare with source records. 9. Verify mapping accuracy. 10. Review Employee Master grid fields and verify displayed values are populated. 11. Compare selected row values with source snapshot and verify consistency. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Compare with source records. - Review Employee Master grid fields and verify displayed values are populated.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Branch assignment display succeeds for Employee Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Branch ID should match the employee's assigned branch. Requirement reference: Employee Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Employee Master, Employee Master |

### RDR_372 — Verify Supervisor ID mapping

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Employee Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Employee Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Employee ID: EMP-001; Employee Code: BR-HO-0045; Department: Compliance; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Employee" from the Reference Data Register sidebar. 3. Select master tab "EMPLOYEE Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Employee Master. 7. Review Supervisor ID column. 8. Verify reporting hierarchy. 9. Confirm supervisor exists. 10. Review Employee Master grid fields and verify displayed values are populated. 11. Compare selected row values with source snapshot and verify consistency. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review Employee Master grid fields and verify displayed values are populated. - Compare selected row values with source snapshot and verify consistency.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Supervisor ID mapping succeeds for Employee Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Supervisor ID should correctly identify the employee's reporting manager. Requirement reference: Employee Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Employee Master, Employee Master |

### RDR_373 — Verify View button functionality

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Employee Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Employee Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Employee ID: EMP-001; Employee Code: BR-HO-0045; Department: Compliance; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Employee" from the Reference Data Register sidebar. 3. Select master tab "EMPLOYEE Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Employee Master. 7. Locate employee record. 8. Click View button. 9. Verify employee detail screen opens. 10. Review displayed information. 11. Click View action on a row and verify detail modal opens with row metadata. 12. Verify detail modal fields match selected record and close modal successfully. 13. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Locate employee record. - Click View action on a row and verify detail modal opens with row metadata.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - View button functionality succeeds for Employee Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | View action should open complete employee details in read-only mode. Requirement reference: Detail Modal. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Employee Master, Employee Master |

### RDR_374 — Verify CSV export functionality

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Employee Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Employee Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Employee ID: EMP-001; Employee Code: BR-HO-0045; Department: Compliance; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Employee" from the Reference Data Register sidebar. 3. Select master tab "EMPLOYEE Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Employee Master. 7. Click CSV button. 8. Download exported file. 9. Verify employee data. 10. Click CSV export and verify export action completes for current filtered dataset. 11. Click Excel export and verify downloaded file headers match on-screen columns. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Download exported file. - Click CSV export and verify export action completes for current filtered dataset. - Click Excel export and verify downloaded file headers match on-screen columns.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Click CSV export and verify export action completes for current filtered dataset. - Scroll through grid rows and verify sticky header remains visible.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - CSV export functionality succeeds for Employee Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | CSV file should contain all displayed employee records with correct data. Requirement reference: Export Formats. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Employee Master, Employee Master |

### RDR_375 — Verify Excel export functionality

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Employee Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Employee Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Employee ID: EMP-001; Employee Code: BR-HO-0045; Department: Compliance; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Employee" from the Reference Data Register sidebar. 3. Select master tab "EMPLOYEE Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Employee Master. 7. Click Excel button. 8. Download exported file. 9. Verify exported data. 10. Click CSV export and verify export action completes for current filtered dataset. 11. Click Excel export and verify downloaded file headers match on-screen columns. 12. Scroll through grid rows and verify sticky header remains visible. |
| Expected Result | Functional Validation: - Download exported file. - Verify exported data. - Click CSV export and verify export action completes for current filtered dataset.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Click CSV export and verify export action completes for current filtered dataset. - Scroll through grid rows and verify sticky header remains visible.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Excel export functionality succeeds for Employee Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | Excel export should contain accurate employee records and column structure. Requirement reference: Export Formats. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Employee Master, Employee Master |

### RDR_376 — Verify employee records are limited to maximum configured row count

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Employee Master |
| Priority | — |
| Preconditions | 1. AML Analyst has access to Reference Data Register Employee Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Employee ID: EMP-001; Employee Code: BR-HO-0045; Department: Compliance; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Employee" from the Reference Data Register sidebar. 3. Select master tab "EMPLOYEE Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Open Employee Master. 7. Review displayed record count. 8. Verify configured record limit. 9. Check page performance and loading time. 10. Review Employee Master grid fields and verify displayed values are populated. 11. Compare selected row values with source snapshot and verify consistency. 12. Scroll through grid rows and verify sticky header remains visible. 13. Validate one key rule from requirement context: NFR Category Requirement Performance Data grid must load within 2 seconds for up to 10,000 records. |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Review displayed record count. - Verify configured record limit.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Employee" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Employee records are limited to maximum configured row count succeeds for Employee Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | System should load records within configured limits without performance issues. Requirement reference: Non-Functional Requirements. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Employee Master, Employee Master |

### RDR_377 — Verify column selector shows and hides columns on Customer Master grid

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer → Customer Master |
| Priority | High |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Verify Column Selector on Customer Master. 7. Open column selector and toggle one optional column off and on. 8. Verify grid reflects selected column visibility without data corruption. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. 11. Validate control "Column Selector" as per Reference Data Register design rules. 12. Confirm Customer Master scenario remains stable after interacting with "Column Selector". |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Scroll through grid rows and verify sticky header remains visible.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Column selector shows and hides columns on Customer Master grid succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All Customer Master checks must pass for the defined scenario. Requirement reference: Column Selector Dropdown. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer, Customer Master |

### RDR_378 — Verify toast appears after refresh CBS action with latest sync status

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer → Customer Master |
| Priority | High |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Status: ACTIVE; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Verify Toast on Customer Master. 7. Click Refresh CBS and wait for operation completion feedback. 8. Verify success toast and updated sync timestamp are displayed. 9. Trigger a user action that emits toast feedback and verify message clarity and type. 10. Scroll through grid rows and verify sticky header remains visible. 11. Validate control "Toast" as per Reference Data Register design rules. 12. Confirm Customer Master scenario remains stable after interacting with "Toast". |
| Expected Result | Functional Validation: - Click Refresh CBS and wait for operation completion feedback. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Scroll through grid rows and verify sticky header remains visible.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Toast appears after refresh CBS action with latest sync status succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All Customer Master checks must pass for the defined scenario. Requirement reference: Toast Notifications. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer, Customer Master |

### RDR_379 — Verify sticky header remains visible while scrolling through grid rows

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer → Customer Master |
| Priority | Medium |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Verify Sticky Header on Customer Master. 7. Change page size and verify displayed row count does not exceed selected size. 8. Scroll pagination controls and navigate to next page, then verify row continuity. 9. Scroll through grid rows and verify sticky header remains visible. 10. Validate one key rule from requirement context: The Customer Master is the primary entity registry for all bank customers (individuals, corporates, NGOs, government bodies, etc.). 11. Validate control "Sticky Header" as per Reference Data Register design rules. 12. Confirm Customer Master scenario remains stable after interacting with "Sticky Header". |
| Expected Result | Functional Validation: - Scroll pagination controls and navigate to next page, then verify row continuity. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Change page size and verify displayed row count does not exceed selected size.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Sticky header remains visible while scrolling through grid rows succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All Customer Master checks must pass for the defined scenario. Requirement reference: Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer, Customer Master |

### RDR_380 — Verify KPI cards display and match customer master dataset counts

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer → Customer Master |
| Priority | High |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Card ID: CARD-001; Linked Customer ID: CIF001001; Card Last 4: 4521; Card Type: DEBIT; Card Network: VISA |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Verify KPI Cards on Customer Master. 7. Click primary hyperlink in grid and verify navigation opens the expected detail route. 8. Verify KPI cards are visible and counts are consistent with the filtered grid dataset. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. 11. Validate control "KPI Cards" as per Reference Data Register design rules. 12. Confirm Customer Master scenario remains stable after interacting with "KPI Cards". |
| Expected Result | Functional Validation: - Click primary hyperlink in grid and verify navigation opens the expected detail route. - Verify KPI cards are visible and counts are consistent with the filtered grid dataset. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify KPI cards are visible and counts are consistent with the filtered grid dataset.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - KPI cards display and match customer master dataset counts succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All Customer Master checks must pass for the defined scenario. Requirement reference: CBS Refresh. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer, Customer Master |

### RDR_381 — Verify maximum 50k rows label is displayed for the customer dataset limit

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer → Customer Master |
| Priority | Medium |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Verify 50k Rows Label on Customer Master. 7. Review Customer Master grid fields and verify displayed values are populated. 8. Compare selected row values with source snapshot and verify consistency. 9. Scroll through grid rows and verify sticky header remains visible. 10. Validate one key rule from requirement context: The Customer Master is the primary entity registry for all bank customers (individuals, corporates, NGOs, government bodies, etc.). 11. Validate control "50k Rows Label" as per Reference Data Register design rules. 12. Confirm Customer Master scenario remains stable after interacting with "50k Rows Label". |
| Expected Result | Functional Validation: - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Verify 50k Rows Label on Customer Master.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Maximum 50k rows label is displayed for the customer dataset limit succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All Customer Master checks must pass for the defined scenario. Requirement reference: Customer Master. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer, Customer Master |

### RDR_382 — Verify responsive behavior on smaller viewport without clipping filter and grid controls

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer → Customer Master |
| Priority | Medium |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; Branch: BRN-H0001 |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Verify Responsive Layout on Customer Master. 7. Apply branch or type filter and verify only matching records remain in grid. 8. Clear filters and verify the full dataset is restored. 9. Scroll through grid rows and verify sticky header remains visible. 10. Verify no UI break or console error is observed during the scenario. 11. Validate control "Responsive Layout" as per Reference Data Register design rules. 12. Confirm Customer Master scenario remains stable after interacting with "Responsive Layout". |
| Expected Result | Functional Validation: - Apply branch or type filter and verify only matching records remain in grid. - Clear filters and verify the full dataset is restored. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Apply branch or type filter and verify only matching records remain in grid.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Responsive behavior on smaller viewport without clipping filter and grid controls succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All Customer Master checks must pass for the defined scenario. Requirement reference: Filter Bars. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer, Customer Master |

### RDR_383 — Verify refresh CBS completes with success toast and updated sync timestamp

| Field | Value |
| --- | --- |
| Module | Reference Data Register |
| Submodule | Customer → Customer Master |
| Priority | High |
| Preconditions | 1. AML Analyst has access to Reference Data Register Customer Master. 2. Test environment is online with CBS sync service and master data available. |
| Test Data | User Role: AML Analyst; Customer ID: CIF001001; Customer Name: Rajesh Kumar; Customer Type: INDIVIDUAL; CBS sync: Synced: 05 May 2026 02:15 AM - CBS (Finacle) |
| Steps | 1. Open the KYC module from primary navigation and select Reference Data Register. 2. Open shell group "Customer & Accounts" from the Reference Data Register sidebar. 3. Select master tab "CUSTOMER Master" and wait for grid content to load. 4. Verify page header, breadcrumb, toolbar actions, and grid container are visible. 5. Verify sync label is displayed and reflects the latest CBS sync status. 6. Verify Refresh CBS Toast on Customer Master. 7. Click Refresh CBS and wait for operation completion feedback. 8. Verify success toast and updated sync timestamp are displayed. 9. Trigger a user action that emits toast feedback and verify message clarity and type. 10. Scroll through grid rows and verify sticky header remains visible. 11. Validate control "Refresh CBS Toast" as per Reference Data Register design rules. 12. Confirm Customer Master scenario remains stable after interacting with "Refresh CBS Toast". |
| Expected Result | Functional Validation: - Verify Refresh CBS Toast on Customer Master. - Click Refresh CBS and wait for operation completion feedback. - Scroll through grid rows and verify sticky header remains visible.  Business Validation: - Business indicators align with configured master data rules.  Data Validation: - Open shell group "Customer & Accounts" from the Reference Data Register sidebar. - Scroll through grid rows and verify sticky header remains visible.  Navigation Validation: - Open the KYC module from primary navigation and select Reference Data Register. - Open shell group "Customer & Accounts" from the Reference Data Register sidebar.  Audit Validation: - User actions respect role permissions and traceability expectations.  System Behaviour: - Refresh CBS completes with success toast and updated sync timestamp succeeds for Customer Master. - Application remains stable with no unexpected error behavior. |
| Acceptance Criteria | All Customer Master checks must pass for the defined scenario. Requirement reference: Toast Notifications. |
| Automation Candidate | Yes |
| Automation Layer | ui |
| Tags | Customer, Customer Master |
