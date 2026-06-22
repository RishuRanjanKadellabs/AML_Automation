# Customer 360 View — Detailed Test Cases (370)

### C360-TC-001 — Verify Customer 360 page loads successfully for a valid customer profile

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Page Framework |
| Priority | High |
| Preconditions | User should be logged into the AML application with access to Customer 360 module |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Login to AML application 2. Navigate to Dashboard 3. Open Customer 360 module 4. Search and open a valid customer profile |
| Expected Result | Customer 360 page should load successfully with all tabs, widgets, KPI cards, and customer information rendered correctly without layout issues or frontend errors |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, high, error-handling |

### C360-TC-002 — Verify default Overview tab selection on Customer 360 page

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Page Framework |
| Priority | Medium |
| Preconditions | User should have successfully opened Customer 360 page |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Customer 360 page for any customer 2. Observe selected tab state |
| Expected Result | Overview tab should be automatically selected and highlighted as active when Customer 360 page loads |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, medium, functional |

### C360-TC-003 — Verify Customer 360 page layout alignment and spacing

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Page Framework |
| Priority | Medium |
| Preconditions | User should be on Customer 360 page |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Customer 360 page 2. Review page header 3. Review widget alignment 4. Review tab alignment 5. Verify spacing between sections |
| Expected Result | All page elements should remain properly aligned with consistent spacing and without overlapping, clipping, or broken layout behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, medium, functional |

### C360-TC-004 — Verify sticky header behavior during vertical scrolling

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Page Framework |
| Priority | Medium |
| Preconditions | User should be on Customer 360 page with scrollable content |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Customer 360 page 2. Scroll vertically downward across multiple sections 3. Observe header behavior |
| Expected Result | Header strip should remain fixed/sticky and accessible throughout vertical scrolling |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, medium, functional |

### C360-TC-005 — Verify page responsiveness on medium screen resolution

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Page Framework |
| Priority | Medium |
| Preconditions | User should be on Customer 360 page |
| Test Data | Resolution: 1024x768 |
| Steps | 1. Open Customer 360 page 2. Resize browser to medium resolution (example: 1024x768) 3. Observe layout behavior |
| Expected Result | Page layout should adjust properly without overlap, clipping, horizontal distortion, or broken widgets |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, medium, functional |

### C360-TC-006 — Verify page responsiveness on smaller screen resolutions

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Page Framework |
| Priority | Medium |
| Preconditions | User should be on Customer 360 page |
| Test Data | Resolution: 768x720 |
| Steps | 1. Open Customer 360 page 2. Resize browser to smaller resolution 3. Verify visibility of widgets and tabs |
| Expected Result | UI components should remain visible, accessible, and properly aligned without content overlap or truncation issues |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, medium, functional |

### C360-TC-007 — Verify page loading skeleton or loader visibility during slow network response

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Page Framework |
| Priority | Medium |
| Preconditions | Browser throttling or slow network simulation should be enabled |
| Test Data | Network Profile: Slow 3G |
| Steps | 1. Enable slow network from browser developer tools 2. Open Customer 360 page 3. Observe initial page rendering state |
| Expected Result | Loading skeletons, placeholders, or loaders should appear until complete content is rendered successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, medium, performance |

### C360-TC-008 — Verify empty-state rendering when customer data is unavailable

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Page Framework |
| Priority | High |
| Preconditions | Customer record with no associated data should exist |
| Test Data | Customer ID: EMPTY001 |
| Steps | 1. Open Customer 360 page for customer with no configured data 2. Observe page rendering behavior |
| Expected Result | System should display a user-friendly no-data or empty-state message without breaking the page layout |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, high, functional |

### C360-TC-009 — Verify frontend console stability during page load

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Page Framework |
| Priority | Medium |
| Preconditions | User should have browser console access |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open browser developer console 2. Navigate to Customer 360 page 3. Monitor console logs during page load |
| Expected Result | No JavaScript errors, rendering failures, or unhandled exceptions should appear in browser console |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, medium, error-handling |

### C360-TC-010 — Verify customer full name rendering in header strip

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Header Strip |
| Priority | High |
| Preconditions | Customer profile should contain valid customer name |
| Test Data | Customer Name: John Anderson |
| Steps | 1. Open Customer 360 page 2. Observe customer header section |
| Expected Result | Customer full name should display correctly and remain visually aligned within the header section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | header-strip, high, functional |

### C360-TC-011 — Verify customer unique identifier rendering in header strip

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Header Strip |
| Priority | High |
| Preconditions | Customer should contain valid customer identifier |
| Test Data | CIF ID: CIF458712 |
| Steps | 1. Open Customer 360 page 2. Observe customer identifier field |
| Expected Result | Correct customer identifier should display without truncation or mismatch |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | header-strip, high, functional |

### C360-TC-012 — Verify PEP badge rendering for PEP-linked customer profiles

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Header Strip |
| Priority | High |
| Preconditions | A PEP-linked customer profile should exist |
| Test Data | Customer ID: PEP1001 |
| Steps | 1. Open Customer 360 page for PEP customer 2. Observe header strip |
| Expected Result | PEP badge should display correctly with expected styling and visibility |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | header-strip, high, functional |

### C360-TC-013 — Verify adverse media badge rendering in customer header

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Header Strip |
| Priority | High |
| Preconditions | Customer profile should contain adverse media match |
| Test Data | Customer ID: ADV1001 |
| Steps | 1. Open impacted customer profile 2. Observe customer header strip |
| Expected Result | Adverse Media badge should display correctly without UI distortion |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | header-strip, high, functional |

### C360-TC-014 — Verify risk score badge rendering in customer header

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Header Strip |
| Priority | High |
| Preconditions | Risk score should exist for customer profile |
| Test Data | Risk Score: 82 |
| Steps | 1. Open Customer 360 page 2. Observe risk score badge |
| Expected Result | Risk score value and corresponding color badge should display correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | header-strip, high, functional |

### C360-TC-015 — Verify active alert count rendering in header strip

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Header Strip |
| Priority | High |
| Preconditions | Customer should contain active alerts |
| Test Data | Active Alerts: 5 |
| Steps | 1. Open customer profile with active alerts 2. Observe alert count badge |
| Expected Result | Header strip should display correct active/open alert count without mismatch |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | header-strip, high, functional |

### C360-TC-016 — Verify STR/SAR indicator rendering in header strip

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Header Strip |
| Priority | High |
| Preconditions | Customer should have STR/SAR filing association |
| Test Data | STR ID: STR2026001 |
| Steps | 1. Open customer profile linked to STR/SAR 2. Observe header strip |
| Expected Result | STR/SAR badge should display correctly within customer summary section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | header-strip, high, functional |

### C360-TC-017 — Verify long customer name handling in header strip

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Header Strip |
| Priority | Medium |
| Preconditions | Long customer name should exist |
| Test Data | Customer Name: Alexander Jonathan Christopher Williamson |
| Steps | 1. Open customer profile with long full name 2. Observe customer name rendering |
| Expected Result | Long customer name should wrap or truncate gracefully without breaking header alignment |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | header-strip, medium, functional |

### C360-TC-018 — Verify tooltip visibility for truncated customer values

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Header Strip |
| Priority | Low |
| Preconditions | Truncated header field should exist |
| Test Data | Long Customer Name |
| Steps | 1. Hover mouse over truncated customer field 2. Observe tooltip behavior |
| Expected Result | Tooltip should display full field value correctly and remain readable |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | header-strip, low, functional |

### C360-TC-019 — Verify switching from Individual customer to Corporate customer without page reload

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Customer Type Switching |
| Priority | High |
| Preconditions | Both Individual and Corporate customer profiles should exist |
| Test Data | Individual Customer: IND1001 Corporate Customer: CORP2001 |
| Steps | 1. Open Individual customer profile 2. Click Corporate toggle 3. Observe page rendering |
| Expected Result | All widgets, tabs, KPI cards, and data sections should refresh correctly without requiring page reload |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | customer-type-switching, high, functional |

### C360-TC-020 — Verify switching from Corporate customer to Individual customer without page reload

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Customer Type Switching |
| Priority | High |
| Preconditions | Both customer types should exist |
| Test Data | Corporate Customer: CORP2001 Individual Customer: IND1001 |
| Steps | 1. Open Corporate customer profile 2. Click Individual toggle 3. Observe page rendering |
| Expected Result | Page should rerender successfully with Individual customer data replacing previous Corporate customer information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | customer-type-switching, high, functional |

### C360-TC-021 — Verify active tab persistence after customer type switching

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Customer Type Switching |
| Priority | High |
| Preconditions | User should be on non-default tab |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Customer 360 page 2. Navigate to Screening tab 3. Switch customer type |
| Expected Result | Currently selected tab should remain active after rerender without redirecting user back to Overview tab |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | customer-type-switching, high, functional |

### C360-TC-022 — Verify all widgets rerender successfully after customer type switching

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Customer Type Switching |
| Priority | High |
| Preconditions | Both customer types should contain different data sets |
| Test Data | Individual: IND1001 Corporate: CORP2001 |
| Steps | 1. Open Individual customer 2. Observe KPI values 3. Switch to Corporate customer 4. Compare rendered data |
| Expected Result | All widgets, charts, KPI values, badges, and tables should update correctly based on selected customer type |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | customer-type-switching, high, functional |

### C360-TC-023 — Verify stale data removal after customer type switching

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Customer Type Switching |
| Priority | High |
| Preconditions | Two customers with distinct data should exist |
| Test Data | Customer IDs: IND1001 and CORP2001 |
| Steps | 1. Open first customer profile 2. Observe displayed values 3. Switch customer type 4. Verify updated values |
| Expected Result | No stale values, badges, charts, or table records from previous customer should remain visible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | customer-type-switching, high, functional |

### C360-TC-024 — Verify rapid customer type switching stability

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Customer Type Switching |
| Priority | Medium |
| Preconditions | User should be on Customer 360 page |
| Test Data | Customer IDs: IND1001 and CORP2001 |
| Steps | 1. Rapidly switch between Individual and Corporate customer types multiple times 2. Observe UI behavior |
| Expected Result | Application should remain stable without UI flickering, broken widgets, or rendering inconsistencies |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | customer-type-switching, medium, functional |

### C360-TC-025 — Verify loading indicator during customer type rerender under slow network

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Customer Type Switching |
| Priority | Medium |
| Preconditions | Slow network simulation should be enabled |
| Test Data | Network Profile: Slow 3G |
| Steps | 1. Enable slow network profile 2. Switch customer type 3. Observe page behavior |
| Expected Result | Loading indicator or skeleton should display until updated customer data is fully rendered |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | customer-type-switching, medium, performance |

### C360-TC-026 — Verify successful loading of Overview tab widgets and KPI cards

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | High |
| Preconditions | User should be logged into AML application and Customer 360 page should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Login to AML application 2. Open Customer 360 page 3. Navigate to Overview tab |
| Expected Result | Overview tab should load successfully with all KPI cards, charts, widgets, and customer summary information rendered correctly without layout issues |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, high, functional |

### C360-TC-027 — Verify Risk Profile KPI card rendering in Overview tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | High |
| Preconditions | Customer should contain configured risk profile information |
| Test Data | Risk Score: 82 |
| Steps | 1. Open Customer 360 page 2. Navigate to Overview tab 3. Observe Risk Profile KPI card |
| Expected Result | Risk Profile KPI card should display correct risk score, label, and associated visual representation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, high, functional |

### C360-TC-028 — Verify KYC Status KPI card rendering in Overview tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | High |
| Preconditions | Customer should contain configured KYC status |
| Test Data | KYC Status: EDD |
| Steps | 1. Open Customer 360 page 2. Navigate to Overview tab 3. Observe KYC Status KPI card |
| Expected Result | KYC Status KPI card should display correct status such as CDD or EDD with expected badge styling |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, high, functional |

### C360-TC-029 — Verify Active Alerts KPI card rendering in Overview tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | High |
| Preconditions | Customer should contain active alerts |
| Test Data | Active Alerts: 5 |
| Steps | 1. Open Customer 360 page 2. Navigate to Overview tab 3. Observe Active Alerts KPI card |
| Expected Result | Overview KPI section should display accurate active/open alert count without mismatch |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, high, functional |

### C360-TC-030 — Verify Total Accounts KPI card rendering in Overview tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | Medium |
| Preconditions | Account information should exist for customer |
| Test Data | Total Accounts: 7 |
| Steps | 1. Open Customer 360 page 2. Navigate to Overview tab 3. Observe Total Accounts KPI card |
| Expected Result | Correct total account count should display within KPI card |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, medium, functional |

### C360-TC-031 — Verify Regulatory Reports KPI card rendering in Overview tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | Medium |
| Preconditions | Customer should contain regulatory filing records |
| Test Data | STR/SAR Records: 3 |
| Steps | 1. Open Customer 360 page 2. Navigate to Overview tab 3. Observe Regulatory Reports KPI card |
| Expected Result | Regulatory Reports KPI card should display correct filing count |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, medium, functional |

### C360-TC-032 — Verify KYC Gap Score KPI card rendering in Overview tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | High |
| Preconditions | KYC Gap Score should exist for customer |
| Test Data | KYC Gap Score: 28 |
| Steps | 1. Open Customer 360 page 2. Navigate to Overview tab 3. Observe KYC Gap Score KPI card |
| Expected Result | KYC Gap Score should display correctly with proper formatting and visual emphasis |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, high, functional |

### C360-TC-033 — Verify Overview KPI card alignment and spacing

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | Medium |
| Preconditions | User should be on Overview tab |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Navigate to Overview tab 2. Observe alignment of KPI cards and widgets |
| Expected Result | All KPI cards and widgets should remain properly aligned without overlap or inconsistent spacing |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, medium, functional |

### C360-TC-034 — Verify responsive rendering of KPI cards on medium screen resolution

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | Medium |
| Preconditions | User should be on Overview tab |
| Test Data | Resolution: 1024x768 |
| Steps | 1. Resize browser to medium resolution 2. Observe KPI card rendering |
| Expected Result | KPI cards should rearrange responsively without UI clipping or overlap |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, medium, functional |

### C360-TC-035 — Verify handling of large KPI values within Overview widgets

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | Medium |
| Preconditions | Customer should contain large KPI values |
| Test Data | Transactions: 9999999 |
| Steps | 1. Open customer with large KPI values 2. Observe KPI rendering |
| Expected Result | Large KPI values should remain readable and properly formatted without layout distortion |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, medium, functional |

### C360-TC-036 — Verify empty-state behavior for missing KPI data

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | Medium |
| Preconditions | Customer with incomplete KPI data should exist |
| Test Data | Customer ID: EMPTY001 |
| Steps | 1. Open Customer 360 page for incomplete customer profile 2. Observe KPI widgets |
| Expected Result | System should display placeholder values or meaningful empty-state indicators instead of broken UI |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, medium, functional |

### C360-TC-037 — Verify navigation from KYC Gap Score KPI card to KYC Gap Report tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | High |
| Preconditions | KYC Gap Score card should be visible |
| Test Data | KYC Gap Score: 28 |
| Steps | 1. Open Overview tab 2. Click KYC Gap Score KPI card |
| Expected Result | User should be redirected successfully to KYC Gap Report tab or section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, high, functional |

### C360-TC-038 — Verify successful rendering of Risk Donut Chart

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Visualization |
| Priority | High |
| Preconditions | Risk visualization data should exist |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Overview tab 2. Observe Risk Donut Chart |
| Expected Result | Risk Donut Chart should render correctly without distortion, overlap, or incomplete rendering |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-visualization, high, functional |

### C360-TC-039 — Verify color coding of Risk Donut Chart segments

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Visualization |
| Priority | Medium |
| Preconditions | Risk categories should exist |
| Test Data | Risk Categories: High/Medium/Low |
| Steps | 1. Open Overview tab 2. Observe chart segment colors |
| Expected Result | Each chart segment should display appropriate color coding based on configured risk category |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-visualization, medium, functional |

### C360-TC-040 — Verify tooltip behavior on Risk Donut Chart hover

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Visualization |
| Priority | Medium |
| Preconditions | Risk chart should be visible |
| Test Data | Risk Score: 82 |
| Steps | 1. Hover mouse over chart segments 2. Observe tooltip behavior |
| Expected Result | Tooltip should display relevant risk information correctly without clipping or delay |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-visualization, medium, functional |

### C360-TC-041 — Verify responsive rendering of Risk Donut Chart

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Visualization |
| Priority | Medium |
| Preconditions | User should be on Overview tab |
| Test Data | Resolution: 1024x768 |
| Steps | 1. Resize browser window 2. Observe chart rendering |
| Expected Result | Risk chart should resize correctly without clipping, distortion, or alignment issues |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-visualization, medium, functional |

### C360-TC-042 — Verify empty-state rendering when risk visualization data is unavailable

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Visualization |
| Priority | Medium |
| Preconditions | Customer with missing risk data should exist |
| Test Data | Customer ID: EMPTY001 |
| Steps | 1. Open Customer 360 page for customer with no risk data 2. Observe chart section |
| Expected Result | System should display no-data placeholder instead of broken chart rendering |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-visualization, medium, functional |

### C360-TC-043 — Verify Key Relationships widget rendering within Overview tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | High |
| Preconditions | Relationship data should exist |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Overview tab 2. Observe Key Relationships widget |
| Expected Result | Key Relationships widget should display related entities correctly without rendering issues |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, high, functional |

### C360-TC-044 — Verify relationship labels and linked entity names within Key Relationships widget

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | Medium |
| Preconditions | Linked relationships should exist |
| Test Data | Relationship Type: UBO |
| Steps | 1. Open Overview tab 2. Observe relationship labels and names |
| Expected Result | Linked entity names and relationship labels should display clearly and remain readable |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, medium, functional |

### C360-TC-045 — Verify handling of long relationship names within Overview widget

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | Medium |
| Preconditions | Long relationship names should exist |
| Test Data | Entity Name: International Financial Holdings Corporation |
| Steps | 1. Open customer with long relationship name 2. Observe relationship widget |
| Expected Result | Long relationship names should wrap or truncate gracefully without breaking layout |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, medium, functional |

### C360-TC-046 — Verify empty-state rendering for missing relationship data

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | Medium |
| Preconditions | Customer with no relationships should exist |
| Test Data | Customer ID: EMPTYREL001 |
| Steps | 1. Open customer with no relationship data 2. Observe relationship widget |
| Expected Result | User-friendly empty-state message should display within relationship widget |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, medium, functional |

### C360-TC-047 — Verify Screening Summary widget rendering within Overview tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | High |
| Preconditions | Screening information should exist |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Overview tab 2. Observe Screening Summary widget |
| Expected Result | Screening Summary widget should render correctly with all configured screening indicators |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, high, functional |

### C360-TC-048 — Verify sanctions match count rendering within Screening Summary widget

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | High |
| Preconditions | Sanctions match data should exist |
| Test Data | Sanctions Matches: 2 |
| Steps | 1. Open Overview tab 2. Observe sanctions section within Screening Summary |
| Expected Result | Correct sanctions match count should display within Screening Summary widget |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, high, functional |

### C360-TC-049 — Verify PEP indicator rendering within Screening Summary widget

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | High |
| Preconditions | PEP-linked customer should exist |
| Test Data | Customer ID: PEP1001 |
| Steps | 1. Open Overview tab 2. Observe PEP indicator |
| Expected Result | PEP indicator should display correctly with appropriate styling |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, high, functional |

### C360-TC-050 — Verify adverse media indicator rendering within Screening Summary widget

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | High |
| Preconditions | Customer with adverse media should exist |
| Test Data | Customer ID: ADV1001 |
| Steps | 1. Open Overview tab 2. Observe adverse media indicator |
| Expected Result | Adverse media indicator should display correctly without layout distortion |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, high, functional |

### C360-TC-051 — Verify transaction metrics rendering within Overview tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | Medium |
| Preconditions | Transaction data should exist |
| Test Data | Average Daily Transaction: 50000 |
| Steps | 1. Open Overview tab 2. Observe transaction metric widgets |
| Expected Result | All transaction metrics should render correctly with proper formatting |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, medium, functional |

### C360-TC-052 — Verify Cash vs Non-Cash ratio visualization rendering

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | Medium |
| Preconditions | Transaction ratio data should exist |
| Test Data | Cash Ratio: 60% |
| Steps | 1. Open Overview tab 2. Observe ratio visualization |
| Expected Result | Ratio visualization should render correctly without overlap or clipping |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, medium, functional |

### C360-TC-053 — Verify cross-border transaction indicator rendering

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | High |
| Preconditions | Cross-border transactions should exist |
| Test Data | Cross-border Transactions: Yes |
| Steps | 1. Open Overview tab 2. Observe transaction indicators |
| Expected Result | Cross-border indicator should display correctly with appropriate visual styling |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, high, functional |

### C360-TC-054 — Verify unusual transaction pattern indicator rendering

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | High |
| Preconditions | Unusual transaction patterns should exist |
| Test Data | Pattern Type: High Velocity Transfers |
| Steps | 1. Open Overview tab 2. Observe unusual transaction indicators |
| Expected Result | Unusual transaction pattern indicator should display correctly within Overview section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, high, functional |

### C360-TC-055 — Verify consistency of alert counts between Header Strip and Overview KPI widgets

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | High |
| Preconditions | Customer should contain active alerts |
| Test Data | Active Alerts: 5 |
| Steps | 1. Observe active alert count in Header Strip 2. Observe active alert count in Overview widget |
| Expected Result | Alert counts should remain synchronized and consistent across all displayed sections |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, high, functional |

### C360-TC-056 — Verify consistency of risk score across Header Strip and Overview widgets

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | High |
| Preconditions | Risk score should exist |
| Test Data | Risk Score: 82 |
| Steps | 1. Observe risk score in Header Strip 2. Observe risk score in Overview section |
| Expected Result | Risk score values should remain synchronized and consistent throughout Customer 360 page |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, high, functional |

### C360-TC-057 — Verify successful rerendering of Overview widgets after customer type switching

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | High |
| Preconditions | Both customer types should exist |
| Test Data | Individual: IND1001 Corporate: CORP2001 |
| Steps | 1. Open Individual customer 2. Observe Overview widgets 3. Switch to Corporate customer |
| Expected Result | All Overview widgets should refresh correctly using updated customer data without stale information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, high, functional |

### C360-TC-058 — Verify removal of stale Overview data after customer rerender

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | High |
| Preconditions | Two customers with different data should exist |
| Test Data | Customer IDs: IND1001 and CORP2001 |
| Steps | 1. Open first customer profile 2. Observe KPI values 3. Switch customer type |
| Expected Result | Old KPI values, charts, and indicators should not remain visible after rerender |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, high, functional |

### C360-TC-059 — Verify loading indicator visibility during Overview widget rendering under slow network

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | Medium |
| Preconditions | Slow network simulation should be enabled |
| Test Data | Network Profile: Slow 3G |
| Steps | 1. Enable slow network 2. Open Overview tab 3. Observe loading state |
| Expected Result | Loaders or skeletons should display until Overview widgets finish rendering |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, medium, performance |

### C360-TC-060 — Verify frontend console stability during Overview tab interactions

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Overview Tab |
| Priority | Medium |
| Preconditions | User should have browser console access |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open browser console 2. Navigate within Overview tab 3. Hover charts and widgets |
| Expected Result | No JavaScript errors, rendering failures, or unhandled exceptions should appear during Overview interactions |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | overview-tab, medium, error-handling |

### C360-TC-061 — Verify successful loading of Relationships tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Relationships Tab |
| Priority | High |
| Preconditions | User should be logged into AML application and Customer 360 page should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Login to AML application 2. Open Customer 360 page 3. Navigate to Relationships tab |
| Expected Result | Relationships tab should load successfully with all relationship widgets, linked entities, and labels rendered correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | relationships-tab, high, functional |

### C360-TC-062 — Verify rendering of linked relationship entities

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Relationships Tab |
| Priority | High |
| Preconditions | Linked relationship data should exist |
| Test Data | Relationship Types: UBO, Director, Beneficiary |
| Steps | 1. Open Relationships tab 2. Observe linked entities section |
| Expected Result | All configured linked entities should display correctly with associated relationship labels |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | relationships-tab, high, functional |

### C360-TC-063 — Verify relationship type label rendering

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Relationships Tab |
| Priority | Medium |
| Preconditions | Relationship data should exist |
| Test Data | Relationship Type: UBO |
| Steps | 1. Open Relationships tab 2. Observe relationship type labels |
| Expected Result | Correct relationship labels should display against corresponding linked entities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | relationships-tab, medium, functional |

### C360-TC-064 — Verify relationship count rendering

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Relationships Tab |
| Priority | Medium |
| Preconditions | Multiple linked entities should exist |
| Test Data | Linked Relationships Count: 5 |
| Steps | 1. Open Relationships tab 2. Observe relationship summary section |
| Expected Result | Relationship count should match total displayed linked entities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | relationships-tab, medium, functional |

### C360-TC-065 — Verify handling of long linked entity names

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Relationships Tab |
| Priority | Medium |
| Preconditions | Long linked entity names should exist |
| Test Data | Entity Name: International Global Investment Holdings LLC |
| Steps | 1. Open customer profile containing long linked entity names 2. Observe relationship rendering |
| Expected Result | Long linked entity names should wrap or truncate gracefully without breaking layout |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | relationships-tab, medium, functional |

### C360-TC-066 — Verify rendering of PEP-linked relationship banner

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Relationships Tab |
| Priority | High |
| Preconditions | PEP-linked relationship should exist |
| Test Data | Linked Entity: Minister Holdings Ltd |
| Steps | 1. Open Relationships tab 2. Observe PEP-linked entity section |
| Expected Result | PEP-linked relationship banner or badge should display correctly with proper styling |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | relationships-tab, high, functional |

### C360-TC-067 — Verify styling of PEP relationship badges

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Relationships Tab |
| Priority | Medium |
| Preconditions | PEP-linked relationship should exist |
| Test Data | Linked Entity: Minister Holdings Ltd |
| Steps | 1. Open Relationships tab 2. Observe PEP badge styling |
| Expected Result | PEP badges should display with correct color, label, and visual formatting |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | relationships-tab, medium, functional |

### C360-TC-068 — Verify expand functionality for relationship cards

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Relationships Tab |
| Priority | Medium |
| Preconditions | Expandable relationship cards should exist |
| Test Data | Relationship Type: Director |
| Steps | 1. Open Relationships tab 2. Click expand icon for relationship card |
| Expected Result | Relationship card should expand successfully and display additional information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | relationships-tab, medium, pii, compliance |

### C360-TC-069 — Verify collapse functionality for expanded relationship cards

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Relationships Tab |
| Priority | Medium |
| Preconditions | Expanded relationship card should exist |
| Test Data | Relationship Type: Director |
| Steps | 1. Expand relationship card 2. Click collapse icon |
| Expected Result | Expanded relationship card should collapse successfully without affecting surrounding UI |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | relationships-tab, medium, pii, compliance |

### C360-TC-070 — Verify multiple relationship card expansion handling

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Relationships Tab |
| Priority | Medium |
| Preconditions | Multiple expandable relationship cards should exist |
| Test Data | Relationship Count: 5 |
| Steps | 1. Expand multiple relationship cards sequentially 2. Observe UI behavior |
| Expected Result | UI should remain aligned and stable without overlap or rendering issues |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | relationships-tab, medium, pii, compliance |

### C360-TC-071 — Verify empty-state rendering when no relationships exist

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Relationships Tab |
| Priority | High |
| Preconditions | Customer without linked relationships should exist |
| Test Data | Customer ID: EMPTYREL001 |
| Steps | 1. Open customer profile with no linked relationships 2. Observe Relationships tab |
| Expected Result | User-friendly no-data message should display correctly within Relationships tab |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | relationships-tab, high, functional |

### C360-TC-072 — Verify responsive rendering of Relationships tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Relationships Tab |
| Priority | Medium |
| Preconditions | User should be on Relationships tab |
| Test Data | Resolution: 1024x768 |
| Steps | 1. Resize browser to medium resolution 2. Observe layout behavior |
| Expected Result | Relationship cards and linked entities should remain properly aligned without clipping or overlap |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | relationships-tab, medium, functional |

### C360-TC-073 — Verify rerendering of relationship data after customer type switching

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Relationships Tab |
| Priority | High |
| Preconditions | Both Individual and Corporate customer profiles should exist |
| Test Data | Individual: IND1001 Corporate: CORP2001 |
| Steps | 1. Open Individual customer profile 2. Observe linked entities 3. Switch customer type |
| Expected Result | Relationship data should rerender correctly using updated customer information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | relationships-tab, high, functional |

### C360-TC-074 — Verify removal of stale relationship data after rerender

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Relationships Tab |
| Priority | High |
| Preconditions | Two customers with different relationship sets should exist |
| Test Data | Customer IDs: IND1001 and CORP2001 |
| Steps | 1. Open first customer profile 2. Observe relationship entities 3. Switch customer type |
| Expected Result | Old linked entities and relationship labels should not remain visible after rerender |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | relationships-tab, high, functional |

### C360-TC-075 — Verify relationship tooltip visibility for truncated values

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Relationships Tab |
| Priority | Low |
| Preconditions | Truncated relationship values should exist |
| Test Data | Entity Name: International Global Investment Holdings LLC |
| Steps | 1. Hover mouse over truncated relationship text 2. Observe tooltip behavior |
| Expected Result | Tooltip should display complete relationship value correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | relationships-tab, low, functional |

### C360-TC-076 — Verify Graphical Link Analysis shortcut visibility

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Relationships Tab |
| Priority | Medium |
| Preconditions | Graphical analysis feature should be configured |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Relationships tab 2. Observe action shortcuts |
| Expected Result | Graphical Link Analysis shortcut should display correctly within Relationships section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | relationships-tab, medium, functional |

### C360-TC-077 — Verify navigation behavior of Graphical Link Analysis shortcut

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Relationships Tab |
| Priority | Medium |
| Preconditions | Graphical analysis shortcut should be visible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Relationships tab 2. Click Graphical Link Analysis shortcut |
| Expected Result | User should be redirected successfully to graphical relationship analysis view or modal |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | relationships-tab, medium, functional |

### C360-TC-078 — Verify frontend console stability during relationship interactions

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Relationships Tab |
| Priority | Medium |
| Preconditions | User should have browser console access |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open browser developer console 2. Expand and collapse relationship cards 3. Switch customer type |
| Expected Result | No JavaScript errors or rendering exceptions should appear during relationship interactions |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | relationships-tab, medium, error-handling |

### C360-TC-079 — Verify successful loading of Screening tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | High |
| Preconditions | User should be logged into AML application and Customer 360 page should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Login to AML application 2. Open Customer 360 page 3. Navigate to Screening tab |
| Expected Result | Screening tab should load successfully with all configured screening sections rendered correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, high, functional |

### C360-TC-080 — Verify sanctions screening section rendering

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | High |
| Preconditions | Sanctions screening data should exist |
| Test Data | Sanctions Match: OFAC List |
| Steps | 1. Open Screening tab 2. Observe sanctions section |
| Expected Result | Sanctions screening records should display correctly with associated information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, high, functional |

### C360-TC-081 — Verify sanctions match score visibility

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | High |
| Preconditions | Sanctions screening result should contain match score |
| Test Data | Match Score: 92% |
| Steps | 1. Open Screening tab 2. Observe sanctions match score |
| Expected Result | Correct sanctions match score should display against corresponding screening record |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, high, functional |

### C360-TC-082 — Verify sanctions list source visibility

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | High |
| Preconditions | List source information should exist |
| Test Data | List Source: OFAC |
| Steps | 1. Open Screening tab 2. Observe sanctions list source |
| Expected Result | List source should display correctly against corresponding sanctions record |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, high, functional |

### C360-TC-083 — Verify sanctions jurisdiction visibility

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | Medium |
| Preconditions | Jurisdiction information should exist |
| Test Data | Jurisdiction: United States |
| Steps | 1. Open Screening tab 2. Observe jurisdiction field |
| Expected Result | Jurisdiction value should display correctly for sanctions screening record |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, medium, functional |

### C360-TC-084 — Verify PEP screening section rendering

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | High |
| Preconditions | PEP screening data should exist |
| Test Data | PEP Match: Government Official |
| Steps | 1. Open Screening tab 2. Observe PEP screening section |
| Expected Result | PEP screening records should render correctly with associated details |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, high, functional |

### C360-TC-085 — Verify political role visibility within PEP screening

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | Medium |
| Preconditions | Political role information should exist |
| Test Data | Political Role: Minister of Finance |
| Steps | 1. Open Screening tab 2. Observe political role field |
| Expected Result | Political role should display correctly within PEP screening section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, medium, functional |

### C360-TC-086 — Verify relationship type visibility within PEP screening

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | Medium |
| Preconditions | Relationship type information should exist |
| Test Data | Relationship Type: Direct |
| Steps | 1. Open Screening tab 2. Observe relationship type field |
| Expected Result | Correct relationship type should display against PEP screening record |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, medium, functional |

### C360-TC-087 — Verify adverse media section rendering

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | High |
| Preconditions | Adverse media records should exist |
| Test Data | Adverse Media Match: Fraud Investigation |
| Steps | 1. Open Screening tab 2. Observe adverse media section |
| Expected Result | Adverse media records should display correctly with associated information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, high, functional |

### C360-TC-088 — Verify adverse media risk classification visibility

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | High |
| Preconditions | Adverse media classification should exist |
| Test Data | Risk Classification: High |
| Steps | 1. Open Screening tab 2. Observe risk classification field |
| Expected Result | Risk classification should display correctly against adverse media record |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, high, functional |

### C360-TC-089 — Verify adverse media match score visibility

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | Medium |
| Preconditions | Adverse media match score should exist |
| Test Data | Match Score: 88% |
| Steps | 1. Open Screening tab 2. Observe match score field |
| Expected Result | Correct match score should display for adverse media screening record |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, medium, functional |

### C360-TC-090 — Verify screening history section rendering

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | High |
| Preconditions | Screening history should exist |
| Test Data | Screening History Count: 4 |
| Steps | 1. Open Screening tab 2. Observe screening history section |
| Expected Result | Screening history records should display correctly with associated fields |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, high, functional |

### C360-TC-091 — Verify screening trigger type visibility

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | Medium |
| Preconditions | Trigger type information should exist |
| Test Data | Trigger Type: Manual |
| Steps | 1. Open Screening tab 2. Observe screening history |
| Expected Result | Correct trigger type should display against screening history record |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, medium, functional |

### C360-TC-092 — Verify screening status visibility

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | Medium |
| Preconditions | Screening status information should exist |
| Test Data | Status: Completed |
| Steps | 1. Open Screening tab 2. Observe screening history status |
| Expected Result | Correct screening status should display for each history record |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, medium, functional |

### C360-TC-093 — Verify screening Case ID visibility

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | Medium |
| Preconditions | Case ID should exist |
| Test Data | Case ID: CASE2026011 |
| Steps | 1. Open Screening tab 2. Observe screening history section |
| Expected Result | Case ID should display correctly against corresponding screening history record |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, medium, functional |

### C360-TC-094 — Verify screened list name visibility

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | Medium |
| Preconditions | Screened list information should exist |
| Test Data | Screened List: OFAC SDN |
| Steps | 1. Open Screening tab 2. Observe screened list field |
| Expected Result | Correct screening list name should display within screening history |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, medium, functional |

### C360-TC-095 — Verify Re-Screen button visibility within Screening tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | High |
| Preconditions | Screening tab should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Screening tab 2. Observe action buttons |
| Expected Result | Re-Screen button should display correctly and remain accessible to user |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, high, functional |

### C360-TC-096 — Verify Re-Screen button click behavior

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | High |
| Preconditions | Screening records should exist for customer |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Customer 360 page 2. Navigate to Screening tab 3. Click Re-Screen button |
| Expected Result | Re-Screen process should initiate successfully and screening section should begin refresh workflow |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, high, functional |

### C360-TC-097 — Verify loading indicator visibility during Re-Screen process

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | High |
| Preconditions | Re-Screen process should be triggered |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Screening tab 2. Click Re-Screen button 3. Observe UI behavior |
| Expected Result | Loader, spinner, or processing indicator should display until screening refresh completes |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, high, functional |

### C360-TC-098 — Verify disabled state of Re-Screen button during processing

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | High |
| Preconditions | Re-Screen process should be active |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Screening tab 2. Click Re-Screen button repeatedly |
| Expected Result | Re-Screen button should become disabled temporarily to prevent duplicate processing requests |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, high, functional |

### C360-TC-099 — Verify Auto-Refresh toggle visibility

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | Medium |
| Preconditions | Screening tab should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Screening tab 2. Observe screening controls |
| Expected Result | Auto-Refresh toggle should display correctly within screening controls section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, medium, functional |

### C360-TC-100 — Verify enabling Auto-Refresh toggle

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | Medium |
| Preconditions | Auto-Refresh toggle should be visible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Screening tab 2. Enable Auto-Refresh toggle |
| Expected Result | Auto-Refresh toggle should switch to enabled state with correct visual indication |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, medium, functional |

### C360-TC-101 — Verify disabling Auto-Refresh toggle

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | Medium |
| Preconditions | Auto-Refresh should already be enabled |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Screening tab 2. Disable Auto-Refresh toggle |
| Expected Result | Auto-Refresh toggle should switch back to disabled state successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, medium, functional |

### C360-TC-102 — Verify responsive rendering of Screening tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | Medium |
| Preconditions | User should be on Screening tab |
| Test Data | Resolution: 1024x768 |
| Steps | 1. Resize browser to medium resolution 2. Observe screening sections |
| Expected Result | All screening sections, tables, and controls should remain properly aligned without clipping or overlap |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, medium, functional |

### C360-TC-103 — Verify empty-state rendering when no screening data exists

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | High |
| Preconditions | Customer with no screening records should exist |
| Test Data | Customer ID: EMPTYSCR001 |
| Steps | 1. Open customer profile without screening records 2. Observe Screening tab |
| Expected Result | User-friendly no-data message should display correctly within Screening tab |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, high, functional |

### C360-TC-104 — Verify rerendering of Screening data after customer type switching

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | High |
| Preconditions | Both customer types should contain different screening records |
| Test Data | Individual: IND1001 Corporate: CORP2001 |
| Steps | 1. Open Individual customer 2. Observe screening records 3. Switch customer type |
| Expected Result | Screening sections should rerender correctly using updated customer-specific data |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, high, functional |

### C360-TC-105 — Verify removal of stale screening data after rerender

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | High |
| Preconditions | Two customers with different screening data should exist |
| Test Data | Customer IDs: IND1001 and CORP2001 |
| Steps | 1. Open first customer profile 2. Observe screening records 3. Switch customer type |
| Expected Result | Old screening records, scores, and indicators should not remain visible after rerender |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, high, functional |

### C360-TC-106 — Verify loading indicator visibility during Screening tab rendering under slow network

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | Medium |
| Preconditions | Slow network simulation should be enabled |
| Test Data | Network Profile: Slow 3G |
| Steps | 1. Enable slow network 2. Open Screening tab 3. Observe loading behavior |
| Expected Result | Loaders or skeleton placeholders should display until screening records finish rendering |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, medium, performance |

### C360-TC-107 — Verify tooltip visibility for truncated screening values

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | Low |
| Preconditions | Truncated screening values should exist |
| Test Data | Screening List Name: International Consolidated Sanctions Watchlist |
| Steps | 1. Hover mouse over truncated screening text 2. Observe tooltip behavior |
| Expected Result | Tooltip should display full screening value correctly without clipping |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, low, functional |

### C360-TC-108 — Verify frontend console stability during screening interactions

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Screening Tab |
| Priority | Medium |
| Preconditions | User should have browser console access |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open browser developer console 2. Perform Re-Screen operation 3. Toggle Auto-Refresh |
| Expected Result | No JavaScript errors, rendering failures, or unhandled exceptions should appear during screening interactions |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-tab, medium, error-handling |

### C360-TC-109 — Verify successful loading of Risk tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Tab |
| Priority | High |
| Preconditions | User should be logged into AML application and Customer 360 page should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Login to AML application 2. Open Customer 360 page 3. Navigate to Risk tab |
| Expected Result | Risk tab should load successfully with all configured risk information rendered correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-tab, high, functional |

### C360-TC-110 — Verify composite risk score rendering within Risk tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Tab |
| Priority | High |
| Preconditions | Composite risk score should exist |
| Test Data | Risk Score: 82 |
| Steps | 1. Open Risk tab 2. Observe composite risk score |
| Expected Result | Composite risk score should display correctly with proper formatting and visibility |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-tab, high, functional |

### C360-TC-111 — Verify risk score color coding within Risk tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Tab |
| Priority | High |
| Preconditions | Risk category should exist |
| Test Data | Risk Category: High |
| Steps | 1. Open Risk tab 2. Observe risk score badge |
| Expected Result | Risk score badge should display appropriate color corresponding to configured risk category |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-tab, high, functional |

### C360-TC-112 — Verify risk classification badge rendering

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Tab |
| Priority | Medium |
| Preconditions | Risk classification should exist |
| Test Data | Risk Classification: High |
| Steps | 1. Open Risk tab 2. Observe risk classification badge |
| Expected Result | Correct risk classification badge should display with expected styling |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-tab, medium, functional |

### C360-TC-113 — Verify rendering of Risk Gauge visualization

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Tab |
| Priority | High |
| Preconditions | Risk visualization data should exist |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Risk tab 2. Observe Risk Gauge visualization |
| Expected Result | Risk Gauge chart should render correctly with proper alignment and visual formatting |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-tab, high, functional |

### C360-TC-114 — Verify rendering of Risk Factor table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Tab |
| Priority | High |
| Preconditions | Risk factor data should exist |
| Test Data | Risk Factors: Transaction Risk, KYC Risk |
| Steps | 1. Open Risk tab 2. Observe Risk Factor table |
| Expected Result | Risk Factor table should display correctly with all configured rows and columns |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-tab, high, functional |

### C360-TC-115 — Verify visibility of risk factor names

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Tab |
| Priority | Medium |
| Preconditions | Risk factors should exist |
| Test Data | Risk Factor: Transaction Risk |
| Steps | 1. Open Risk tab 2. Observe risk factor names |
| Expected Result | All risk factor names should display correctly within Risk Factor table |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-tab, medium, functional |

### C360-TC-116 — Verify visibility of individual risk factor scores

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Tab |
| Priority | Medium |
| Preconditions | Risk factor scores should exist |
| Test Data | Factor Score: 35 |
| Steps | 1. Open Risk tab 2. Observe factor score column |
| Expected Result | Correct risk factor scores should display against corresponding risk factor rows |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-tab, medium, functional |

### C360-TC-117 — Verify visibility of individual risk factor weights

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Tab |
| Priority | Medium |
| Preconditions | Risk factor weights should exist |
| Test Data | Factor Weight: 40% |
| Steps | 1. Open Risk tab 2. Observe factor weight column |
| Expected Result | Risk factor weights should display correctly within Risk Factor table |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-tab, medium, functional |

### C360-TC-118 — Verify rendering of Risk Breakdown categories

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Tab |
| Priority | High |
| Preconditions | Risk breakdown data should exist |
| Test Data | Breakdown Categories: Transaction, KYC, Related Party |
| Steps | 1. Open Risk tab 2. Observe Risk Breakdown section |
| Expected Result | All configured Risk Breakdown categories should display correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-tab, high, functional |

### C360-TC-119 — Verify expand functionality of Risk Breakdown section

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Tab |
| Priority | Medium |
| Preconditions | Expandable breakdown section should exist |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Risk tab 2. Click expand icon within Risk Breakdown section |
| Expected Result | Risk Breakdown section should expand successfully and display detailed information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-tab, medium, pii, compliance |

### C360-TC-120 — Verify collapse functionality of expanded Risk Breakdown section

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Tab |
| Priority | Medium |
| Preconditions | Expanded Risk Breakdown section should exist |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Expand Risk Breakdown section 2. Click collapse icon |
| Expected Result | Risk Breakdown section should collapse successfully without affecting surrounding layout |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-tab, medium, pii, compliance |

### C360-TC-121 — Verify rendering of manual risk override banner

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Tab |
| Priority | High |
| Preconditions | Customer with manual override should exist |
| Test Data | Customer ID: OVERRIDE1001 |
| Steps | 1. Open Risk tab for overridden customer 2. Observe override section |
| Expected Result | Manual override banner should display correctly with proper visibility and styling |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-tab, high, functional |

### C360-TC-122 — Verify visibility of manual override reason

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Tab |
| Priority | Medium |
| Preconditions | Override reason should exist |
| Test Data | Override Reason: Enhanced Investigation |
| Steps | 1. Open Risk tab for overridden customer 2. Observe override details |
| Expected Result | Override reason should display correctly within override banner section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-tab, medium, functional |

### C360-TC-123 — Verify visibility of manual override timestamp

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Tab |
| Priority | Low |
| Preconditions | Override timestamp should exist |
| Test Data | Override Timestamp: 15-Apr-2026 |
| Steps | 1. Open Risk tab for overridden customer 2. Observe override timestamp |
| Expected Result | Correct override timestamp should display within override details section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-tab, low, functional |

### C360-TC-124 — Verify rendering of Risk History Timeline

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Tab |
| Priority | High |
| Preconditions | Risk history should exist |
| Test Data | Risk History Entries: 4 |
| Steps | 1. Open Risk tab 2. Observe Risk History Timeline |
| Expected Result | Risk History Timeline should render correctly with all configured entries |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-tab, high, functional |

### C360-TC-125 — Verify chronological ordering of Risk History Timeline

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Risk Tab |
| Priority | Medium |
| Preconditions | Multiple Risk History entries should exist |
| Test Data | History Dates: 01-Apr-2026 to 15-Apr-2026 |
| Steps | 1. Open Risk tab 2. Observe order of Risk History entries |
| Expected Result | Risk History entries should display in correct chronological sequence |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-tab, medium, functional |

### C360-TC-126 — Verify successful loading of KYC/CDD tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | High |
| Preconditions | User should be logged into AML application and Customer 360 page should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Login to AML application 2. Open Customer 360 page 3. Navigate to KYC/CDD tab |
| Expected Result | KYC/CDD tab should load successfully with all configured sections, widgets, and customer compliance information rendered correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, high, functional |

### C360-TC-127 — Verify visibility of customer KYC level within KYC/CDD tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | High |
| Preconditions | Customer should contain configured KYC classification |
| Test Data | KYC Level: EDD |
| Steps | 1. Open KYC/CDD tab 2. Observe KYC level section |
| Expected Result | KYC level should display correctly with proper badge formatting and visibility |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, high, functional |

### C360-TC-128 — Verify visibility of Last Review Date within KYC/CDD tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | Medium |
| Preconditions | Last review information should exist |
| Test Data | Last Review Date: 12-Apr-2026 |
| Steps | 1. Open KYC/CDD tab 2. Observe Last Review Date field |
| Expected Result | Last Review Date should display correctly within review summary section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, medium, functional |

### C360-TC-129 — Verify visibility of Next Review Date within KYC/CDD tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | Medium |
| Preconditions | Next review information should exist |
| Test Data | Next Review Date: 12-Oct-2026 |
| Steps | 1. Open KYC/CDD tab 2. Observe Next Review Date field |
| Expected Result | Next Review Date should display correctly within review summary section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, medium, functional |

### C360-TC-130 — Verify rendering of Submitted Documents section

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | High |
| Preconditions | Document records should exist |
| Test Data | Documents: PAN, Passport, Utility Bill |
| Steps | 1. Open KYC/CDD tab 2. Observe Submitted Documents section |
| Expected Result | All submitted documents should display correctly with associated document information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, high, functional |

### C360-TC-131 — Verify visibility of document verification status

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | High |
| Preconditions | Document verification statuses should exist |
| Test Data | Document Status: Verified |
| Steps | 1. Open KYC/CDD tab 2. Observe document verification status column |
| Expected Result | Document verification status such as Verified, Pending, or Expired should display correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, high, functional |

### C360-TC-132 — Verify styling of expired document indicators

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | Medium |
| Preconditions | Expired document should exist |
| Test Data | Document Status: Expired |
| Steps | 1. Open KYC/CDD tab 2. Observe expired document row |
| Expected Result | Expired document should display with appropriate warning styling or visual highlight |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, medium, functional |

### C360-TC-133 — Verify rendering of Source of Funds section

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | High |
| Preconditions | Financial profile data should exist |
| Test Data | Source of Funds: Salary Income |
| Steps | 1. Open KYC/CDD tab 2. Observe Source of Funds section |
| Expected Result | Source of Funds should display correctly within financial profile section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, high, functional |

### C360-TC-134 — Verify rendering of Source of Wealth section

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | High |
| Preconditions | Financial profile data should exist |
| Test Data | Source of Wealth: Investments |
| Steps | 1. Open KYC/CDD tab 2. Observe Source of Wealth section |
| Expected Result | Source of Wealth should display correctly within financial profile section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, high, functional |

### C360-TC-135 — Verify visibility of Tax Return documents within financial profile section

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | Medium |
| Preconditions | Tax Return documents should exist |
| Test Data | Document Type: Tax Return |
| Steps | 1. Open KYC/CDD tab 2. Observe financial document section |
| Expected Result | Tax Return documents should display correctly with associated document details |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, medium, functional |

### C360-TC-136 — Verify visibility of Bank Statement documents within financial profile section

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | Medium |
| Preconditions | Bank Statement documents should exist |
| Test Data | Document Type: Bank Statement |
| Steps | 1. Open KYC/CDD tab 2. Observe financial document section |
| Expected Result | Bank Statement documents should display correctly with associated document details |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, medium, functional |

### C360-TC-137 — Verify visibility of document submission dates

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | Low |
| Preconditions | Document submission dates should exist |
| Test Data | Submission Date: 10-Apr-2026 |
| Steps | 1. Open KYC/CDD tab 2. Observe submission date column |
| Expected Result | Document submission dates should display correctly against corresponding documents |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, low, functional |

### C360-TC-138 — Verify rendering of EDD-specific sections for EDD customers

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | High |
| Preconditions | EDD customer profile should exist |
| Test Data | Customer ID: EDD1001 |
| Steps | 1. Open EDD customer profile 2. Navigate to KYC/CDD tab |
| Expected Result | EDD-specific sections and enhanced due diligence information should display correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, high, functional |

### C360-TC-139 — Verify hiding of EDD-specific sections for non-EDD customers

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | High |
| Preconditions | Non-EDD customer profile should exist |
| Test Data | Customer ID: CDD1001 |
| Steps | 1. Open non-EDD customer profile 2. Navigate to KYC/CDD tab |
| Expected Result | EDD-specific fields and widgets should remain hidden for non-EDD customers |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, high, functional |

### C360-TC-140 — Verify rendering of KYC Change Log section

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | Medium |
| Preconditions | KYC Change Log should exist |
| Test Data | KYC Changes: Address Update |
| Steps | 1. Open KYC/CDD tab 2. Observe KYC Change Log section |
| Expected Result | KYC Change Log should display correctly with associated change entries |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, medium, functional |

### C360-TC-141 — Verify rendering of KYC Risk Evolution widget

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | Medium |
| Preconditions | KYC Risk Evolution data should exist |
| Test Data | Risk Evolution Entries: 4 |
| Steps | 1. Open KYC/CDD tab 2. Observe KYC Risk Evolution section |
| Expected Result | KYC Risk Evolution widget should render correctly without visual distortion |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, medium, functional |

### C360-TC-142 — Verify rendering of New Products section

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | Medium |
| Preconditions | New Products data should exist |
| Test Data | New Product: Investment Account |
| Steps | 1. Open KYC/CDD tab 2. Observe New Products section |
| Expected Result | New Products section should display correctly with associated product details |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, medium, functional |

### C360-TC-143 — Verify visibility of Start New Review button

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | Medium |
| Preconditions | KYC/CDD tab should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open KYC/CDD tab 2. Observe action buttons |
| Expected Result | Start New Review button should display correctly within review actions section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, medium, functional |

### C360-TC-144 — Verify click behavior of Start New Review button

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | Medium |
| Preconditions | Start New Review button should be visible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open KYC/CDD tab 2. Click Start New Review button |
| Expected Result | Review workflow, modal, or review initiation screen should open successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, medium, regression, e2e |

### C360-TC-145 — Verify handling of long document names within document tables

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | Low |
| Preconditions | Long document names should exist |
| Test Data | Document Name: International_Verification_Utility_Document_2026.pdf |
| Steps | 1. Open KYC/CDD tab 2. Observe long document names |
| Expected Result | Long document names should wrap or truncate gracefully without breaking table alignment |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, low, functional |

### C360-TC-146 — Verify tooltip visibility for truncated KYC values

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | Low |
| Preconditions | Truncated KYC values should exist |
| Test Data | Document Name: International_Verification_Utility_Document_2026.pdf |
| Steps | 1. Hover mouse over truncated KYC text 2. Observe tooltip behavior |
| Expected Result | Tooltip should display complete field value correctly without clipping |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, low, functional |

### C360-TC-147 — Verify empty-state rendering when no KYC data exists

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | High |
| Preconditions | Customer without KYC data should exist |
| Test Data | Customer ID: EMPTYKYC001 |
| Steps | 1. Open customer profile without KYC data 2. Observe KYC/CDD tab |
| Expected Result | User-friendly no-data message should display correctly within KYC/CDD tab |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, high, functional |

### C360-TC-148 — Verify responsive rendering of KYC/CDD tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | Medium |
| Preconditions | User should be on KYC/CDD tab |
| Test Data | Resolution: 1024x768 |
| Steps | 1. Resize browser to medium resolution 2. Observe UI layout |
| Expected Result | All KYC sections, tables, and widgets should remain properly aligned without clipping or overlap |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, medium, functional |

### C360-TC-149 — Verify rerendering of KYC/CDD data after customer type switching

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | High |
| Preconditions | Both customer types should contain different KYC data |
| Test Data | Individual: IND1001 Corporate: CORP2001 |
| Steps | 1. Open Individual customer 2. Observe KYC details 3. Switch customer type |
| Expected Result | KYC/CDD sections should rerender correctly using updated customer-specific information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, high, functional |

### C360-TC-150 — Verify removal of stale KYC/CDD data after rerender

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | High |
| Preconditions | Two customers with different KYC profiles should exist |
| Test Data | Customer IDs: IND1001 and CORP2001 |
| Steps | 1. Open first customer profile 2. Observe KYC details 3. Switch customer type |
| Expected Result | Old KYC records, statuses, and document information should not remain visible after rerender |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, high, functional |

### C360-TC-151 — Verify loading indicator visibility during KYC/CDD rendering under slow network

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | Medium |
| Preconditions | Slow network simulation should be enabled |
| Test Data | Network Profile: Slow 3G |
| Steps | 1. Enable slow network 2. Open KYC/CDD tab 3. Observe loading behavior |
| Expected Result | Loaders or skeleton placeholders should display until KYC/CDD information finishes rendering |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, medium, performance |

### C360-TC-152 — Verify frontend console stability during KYC/CDD interactions

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC/CDD Tab |
| Priority | Medium |
| Preconditions | User should have browser console access |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open browser developer console 2. Navigate within KYC/CDD tab 3. Open review workflow |
| Expected Result | No JavaScript errors, rendering failures, or unhandled exceptions should appear during KYC/CDD interactions |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-cdd-tab, medium, error-handling |

### C360-TC-153 — Verify successful loading of Accounts tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | High |
| Preconditions | User should be logged into AML application and Customer 360 page should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Login to AML application 2. Open Customer 360 page 3. Navigate to Accounts tab |
| Expected Result | Accounts tab should load successfully with all configured account records, summary sections, and controls rendered correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, high, functional |

### C360-TC-154 — Verify rendering of Account Summary section

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | High |
| Preconditions | Account data should exist |
| Test Data | Total Accounts: 7 |
| Steps | 1. Open Accounts tab 2. Observe Account Summary section |
| Expected Result | Account Summary section should display correctly with all configured account metrics and summaries |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, high, functional |

### C360-TC-155 — Verify visibility of account numbers within Accounts table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | High |
| Preconditions | Account records should exist |
| Test Data | Account Number: 458712369001 |
| Steps | 1. Open Accounts tab 2. Observe Account Number column |
| Expected Result | Account numbers should display correctly against corresponding account records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, high, functional |

### C360-TC-156 — Verify visibility of account type within Accounts table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | Medium |
| Preconditions | Account type information should exist |
| Test Data | Account Type: Savings |
| Steps | 1. Open Accounts tab 2. Observe Account Type column |
| Expected Result | Account types should display correctly against corresponding account records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, medium, functional |

### C360-TC-157 — Verify visibility of account status within Accounts table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | Medium |
| Preconditions | Account status information should exist |
| Test Data | Account Status: Active |
| Steps | 1. Open Accounts tab 2. Observe Account Status column |
| Expected Result | Account statuses should display correctly within Accounts table |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, medium, functional |

### C360-TC-158 — Verify visibility of account opening date within Accounts table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | Medium |
| Preconditions | Account opening dates should exist |
| Test Data | Opening Date: 15-Jan-2023 |
| Steps | 1. Open Accounts tab 2. Observe Opening Date column |
| Expected Result | Account opening dates should display correctly against corresponding account records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, medium, functional |

### C360-TC-159 — Verify visibility of Last Transaction Date within Accounts table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | Medium |
| Preconditions | Last transaction dates should exist |
| Test Data | Last Transaction Date: 10-Apr-2026 |
| Steps | 1. Open Accounts tab 2. Observe Last Transaction Date column |
| Expected Result | Last Transaction Date should display correctly within Accounts table |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, medium, functional |

### C360-TC-160 — Verify highlighting of dormant accounts

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | High |
| Preconditions | Dormant account should exist |
| Test Data | Account Status: Dormant |
| Steps | 1. Open Accounts tab 2. Observe dormant account row |
| Expected Result | Dormant account should display with appropriate warning styling or visual highlight |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, high, functional |

### C360-TC-161 — Verify visibility of Product Filter pills within Accounts tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | Medium |
| Preconditions | Product filters should be configured |
| Test Data | Product Filters: Savings, Current, Loan |
| Steps | 1. Open Accounts tab 2. Observe filter section |
| Expected Result | Product filter pills should display correctly within filter section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, medium, functional |

### C360-TC-162 — Verify Savings account filter behavior

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | High |
| Preconditions | Savings accounts should exist |
| Test Data | Account Type: Savings |
| Steps | 1. Open Accounts tab 2. Click Savings filter pill |
| Expected Result | Only Savings account records should display within Accounts table |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, high, functional |

### C360-TC-163 — Verify Current account filter behavior

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | High |
| Preconditions | Current accounts should exist |
| Test Data | Account Type: Current |
| Steps | 1. Open Accounts tab 2. Click Current filter pill |
| Expected Result | Only Current account records should display within Accounts table |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, high, functional |

### C360-TC-164 — Verify Investment account filter behavior

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | Medium |
| Preconditions | Investment accounts should exist |
| Test Data | Account Type: Investment |
| Steps | 1. Open Accounts tab 2. Click Investment filter pill |
| Expected Result | Only Investment account records should display within Accounts table |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, medium, functional |

### C360-TC-165 — Verify Loan account filter behavior

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | Medium |
| Preconditions | Loan accounts should exist |
| Test Data | Account Type: Loan |
| Steps | 1. Open Accounts tab 2. Click Loan filter pill |
| Expected Result | Only Loan account records should display within Accounts table |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, medium, functional |

### C360-TC-166 — Verify stability of rapid product filter switching

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | Medium |
| Preconditions | Multiple account types should exist |
| Test Data | Account Types: Savings, Current, Loan |
| Steps | 1. Open Accounts tab 2. Rapidly switch between multiple filters |
| Expected Result | UI should remain stable without stale rows, broken rendering, or layout issues |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, medium, functional |

### C360-TC-167 — Verify rendering of Product Holdings section

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | Medium |
| Preconditions | Product Holdings data should exist |
| Test Data | Product Holding: Investment Portfolio |
| Steps | 1. Open Accounts tab 2. Observe Product Holdings section |
| Expected Result | Product Holdings section should display correctly with associated product information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, medium, functional |

### C360-TC-168 — Verify rendering of Limits and Thresholds section

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | Medium |
| Preconditions | Threshold information should exist |
| Test Data | Daily Transaction Limit: 500000 |
| Steps | 1. Open Accounts tab 2. Observe Limits and Thresholds section |
| Expected Result | Limits and Thresholds section should display correctly with associated threshold values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, medium, functional |

### C360-TC-169 — Verify horizontal scrolling behavior within Accounts table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | Medium |
| Preconditions | Accounts table should contain multiple columns |
| Test Data | Resolution: 1024x768 |
| Steps | 1. Resize browser width 2. Scroll horizontally within Accounts table |
| Expected Result | Accounts table should scroll horizontally smoothly without UI distortion |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, medium, functional |

### C360-TC-170 — Verify handling of long account values within Accounts table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | Low |
| Preconditions | Long account values should exist |
| Test Data | Product Name: International High Value Investment Savings Account |
| Steps | 1. Open Accounts tab 2. Observe long account values |
| Expected Result | Long account values should wrap or truncate gracefully without breaking table alignment |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, low, functional |

### C360-TC-171 — Verify empty-state rendering when no account records exist

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | High |
| Preconditions | Customer without account records should exist |
| Test Data | Customer ID: EMPTYACC001 |
| Steps | 1. Open customer profile without accounts 2. Observe Accounts tab |
| Expected Result | User-friendly no-data message should display correctly within Accounts tab |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, high, functional |

### C360-TC-172 — Verify responsive rendering of Accounts tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | Medium |
| Preconditions | User should be on Accounts tab |
| Test Data | Resolution: 1024x768 |
| Steps | 1. Resize browser to medium resolution 2. Observe Accounts tab layout |
| Expected Result | All account tables, filters, and sections should remain properly aligned without clipping or overlap |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, medium, functional |

### C360-TC-173 — Verify rerendering of Accounts data after customer type switching

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | High |
| Preconditions | Both customer types should contain different account data |
| Test Data | Individual: IND1001 Corporate: CORP2001 |
| Steps | 1. Open Individual customer 2. Observe account records 3. Switch customer type |
| Expected Result | Accounts data should rerender correctly using updated customer-specific information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, high, functional |

### C360-TC-174 — Verify removal of stale Accounts data after rerender

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | High |
| Preconditions | Two customers with different account profiles should exist |
| Test Data | Customer IDs: IND1001 and CORP2001 |
| Steps | 1. Open first customer profile 2. Observe account records 3. Switch customer type |
| Expected Result | Old account records, statuses, and balances should not remain visible after rerender |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, high, functional |

### C360-TC-175 — Verify loading indicator visibility during Accounts rendering under slow network

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | Medium |
| Preconditions | Slow network simulation should be enabled |
| Test Data | Network Profile: Slow 3G |
| Steps | 1. Enable slow network 2. Open Accounts tab 3. Observe loading behavior |
| Expected Result | Loaders or skeleton placeholders should display until account records finish rendering |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, medium, performance |

### C360-TC-176 — Verify frontend console stability during Accounts tab interactions

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accounts Tab |
| Priority | Medium |
| Preconditions | User should have browser console access |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open browser developer console 2. Apply account filters 3. Scroll Accounts table |
| Expected Result | No JavaScript errors, rendering failures, or unhandled exceptions should appear during Accounts interactions |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accounts-tab, medium, error-handling |

### C360-TC-177 — Verify successful loading of Transactions tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | High |
| Preconditions | User should be logged into AML application and Customer 360 page should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Login to AML application 2. Open Customer 360 page 3. Navigate to Transactions tab |
| Expected Result | Transactions tab should load successfully with all transaction records and associated controls rendered correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, high, functional |

### C360-TC-178 — Verify rendering of Transactions table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | High |
| Preconditions | Transaction records should exist |
| Test Data | Transaction Count: 50 |
| Steps | 1. Open Transactions tab 2. Observe Transactions table |
| Expected Result | Transactions table should render correctly with all configured transaction rows and columns |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, high, functional |

### C360-TC-179 — Verify visibility of transaction dates within Transactions table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | Medium |
| Preconditions | Transaction dates should exist |
| Test Data | Transaction Date: 10-Apr-2026 |
| Steps | 1. Open Transactions tab 2. Observe Transaction Date column |
| Expected Result | Transaction dates should display correctly against corresponding transaction records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, medium, functional |

### C360-TC-180 — Verify visibility of debit transaction amounts

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | Medium |
| Preconditions | Debit transactions should exist |
| Test Data | Debit Amount: 25000 |
| Steps | 1. Open Transactions tab 2. Observe Debit Amount column |
| Expected Result | Debit transaction amounts should display correctly within transaction records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, medium, functional |

### C360-TC-181 — Verify visibility of credit transaction amounts

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | Medium |
| Preconditions | Credit transactions should exist |
| Test Data | Credit Amount: 40000 |
| Steps | 1. Open Transactions tab 2. Observe Credit Amount column |
| Expected Result | Credit transaction amounts should display correctly within transaction records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, medium, functional |

### C360-TC-182 — Verify visibility of transaction channel information

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | Medium |
| Preconditions | Transaction channel information should exist |
| Test Data | Transaction Channel: Online Banking |
| Steps | 1. Open Transactions tab 2. Observe Transaction Channel column |
| Expected Result | Transaction channel information should display correctly within Transactions table |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, medium, functional |

### C360-TC-183 — Verify visibility of Date Range filter within Transactions tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | Medium |
| Preconditions | Date Range filter should be configured |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Transactions tab 2. Observe filter section |
| Expected Result | Date Range filter should display correctly within Transactions tab filter section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, medium, functional |

### C360-TC-184 — Verify transaction filtering using Date Range filter

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | High |
| Preconditions | Transaction records across multiple dates should exist |
| Test Data | From Date: 01-Apr-2026 To Date: 15-Apr-2026 |
| Steps | 1. Open Transactions tab 2. Apply Date Range filter 3. Observe filtered transaction records |
| Expected Result | Only transactions belonging to selected date range should display within Transactions table |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, high, functional |

### C360-TC-185 — Verify highlighting of alert-linked transactions

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | High |
| Preconditions | Alert-linked transactions should exist |
| Test Data | Linked Alert ID: ALT2026001 |
| Steps | 1. Open Transactions tab 2. Observe highlighted transaction rows |
| Expected Result | Alert-linked transactions should display with appropriate highlight styling or visual indicator |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, high, functional |

### C360-TC-186 — Verify styling consistency of highlighted transactions

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | Medium |
| Preconditions | Multiple highlighted transactions should exist |
| Test Data | Linked Alert Count: 4 |
| Steps | 1. Open Transactions tab 2. Observe highlighted transaction styling |
| Expected Result | All highlighted transactions should display consistent colors, badges, or indicators |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, medium, functional |

### C360-TC-187 — Verify visibility of unusual transaction indicators

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | High |
| Preconditions | Unusual transactions should exist |
| Test Data | Pattern Type: High Velocity Transfers |
| Steps | 1. Open Transactions tab 2. Observe unusual transaction indicators |
| Expected Result | Unusual transaction indicators should display correctly with proper visibility and styling |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, high, functional |

### C360-TC-188 — Verify visibility of cross-border transaction indicators

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | Medium |
| Preconditions | Cross-border transactions should exist |
| Test Data | Country: UAE |
| Steps | 1. Open Transactions tab 2. Observe cross-border indicators |
| Expected Result | Cross-border transaction indicators should display correctly within Transactions table |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, medium, functional |

### C360-TC-189 — Verify visibility of Download Statement button

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | Medium |
| Preconditions | Statement download feature should be configured |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Transactions tab 2. Observe action controls |
| Expected Result | Download Statement button should display correctly within Transactions tab |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, medium, export |

### C360-TC-190 — Verify click behavior of Download Statement button

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | High |
| Preconditions | Download Statement button should be visible |
| Test Data | Statement Type: PDF |
| Steps | 1. Open Transactions tab 2. Click Download Statement button |
| Expected Result | Statement download workflow should initiate successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, high, export |

### C360-TC-191 — Verify disabled state of Download Statement button when statement is unavailable

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | Low |
| Preconditions | Statement data should be unavailable |
| Test Data | Customer ID: NOSTMT001 |
| Steps | 1. Open Transactions tab for customer without statements 2. Observe Download Statement button |
| Expected Result | Download Statement button should display disabled state appropriately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, low, export |

### C360-TC-192 — Verify horizontal scrolling behavior within Transactions table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | Medium |
| Preconditions | Transactions table should contain multiple columns |
| Test Data | Resolution: 1024x768 |
| Steps | 1. Resize browser width 2. Scroll horizontally within Transactions table |
| Expected Result | Transactions table should scroll horizontally smoothly without UI distortion |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, medium, functional |

### C360-TC-193 — Verify handling of long transaction descriptions within Transactions table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | Low |
| Preconditions | Long transaction descriptions should exist |
| Test Data | Transaction Description: International High Value Wire Transfer Settlement |
| Steps | 1. Open Transactions tab 2. Observe long transaction descriptions |
| Expected Result | Long transaction descriptions should wrap or truncate gracefully without breaking table alignment |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, low, functional |

### C360-TC-194 — Verify tooltip visibility for truncated transaction values

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | Low |
| Preconditions | Truncated transaction values should exist |
| Test Data | Transaction Description: International High Value Wire Transfer Settlement |
| Steps | 1. Hover mouse over truncated transaction text 2. Observe tooltip behavior |
| Expected Result | Tooltip should display complete transaction value correctly without clipping |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, low, functional |

### C360-TC-195 — Verify empty-state rendering when no transaction records exist

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | High |
| Preconditions | Customer without transactions should exist |
| Test Data | Customer ID: EMPTYTXN001 |
| Steps | 1. Open customer profile without transactions 2. Observe Transactions tab |
| Expected Result | User-friendly no-data message should display correctly within Transactions tab |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, high, functional |

### C360-TC-196 — Verify responsive rendering of Transactions tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | Medium |
| Preconditions | User should be on Transactions tab |
| Test Data | Resolution: 1024x768 |
| Steps | 1. Resize browser to medium resolution 2. Observe Transactions tab layout |
| Expected Result | All transaction tables, filters, and indicators should remain properly aligned without clipping or overlap |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, medium, functional |

### C360-TC-197 — Verify rerendering of Transactions data after customer type switching

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | High |
| Preconditions | Both customer types should contain different transaction data |
| Test Data | Individual: IND1001 Corporate: CORP2001 |
| Steps | 1. Open Individual customer 2. Observe transaction records 3. Switch customer type |
| Expected Result | Transactions data should rerender correctly using updated customer-specific information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, high, functional |

### C360-TC-198 — Verify removal of stale Transactions data after rerender

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | High |
| Preconditions | Two customers with different transaction profiles should exist |
| Test Data | Customer IDs: IND1001 and CORP2001 |
| Steps | 1. Open first customer profile 2. Observe transaction records 3. Switch customer type |
| Expected Result | Old transaction records, indicators, and filters should not remain visible after rerender |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, high, functional |

### C360-TC-199 — Verify loading indicator visibility during Transactions rendering under slow network

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | Medium |
| Preconditions | Slow network simulation should be enabled |
| Test Data | Network Profile: Slow 3G |
| Steps | 1. Enable slow network 2. Open Transactions tab 3. Observe loading behavior |
| Expected Result | Loaders or skeleton placeholders should display until transaction records finish rendering |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, medium, performance |

### C360-TC-200 — Verify frontend console stability during Transactions interactions

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Transactions Tab |
| Priority | Medium |
| Preconditions | User should have browser console access |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open browser developer console 2. Apply transaction filters 3. Download statement |
| Expected Result | No JavaScript errors, rendering failures, or unhandled exceptions should appear during Transactions interactions |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | transactions-tab, medium, error-handling |

### C360-TC-201 — Verify successful loading of Alerts tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | High |
| Preconditions | User should be logged into AML application and Customer 360 page should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Login to AML application 2. Open Customer 360 page 3. Navigate to Alerts tab |
| Expected Result | Alerts tab should load successfully with all configured alert records, widgets, and controls rendered correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, high, functional |

### C360-TC-202 — Verify rendering of Alerts Summary section

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | High |
| Preconditions | Alert records should exist |
| Test Data | Alert Count: 12 |
| Steps | 1. Open Alerts tab 2. Observe Alerts Summary section |
| Expected Result | Alerts Summary section should display correctly with all configured alert metrics |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, high, functional |

### C360-TC-203 — Verify visibility of Total Alerts count within Alerts Summary

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | Medium |
| Preconditions | Alert records should exist |
| Test Data | Total Alerts: 12 |
| Steps | 1. Open Alerts tab 2. Observe Total Alerts counter |
| Expected Result | Total Alerts count should display correctly within Alerts Summary section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, medium, functional |

### C360-TC-204 — Verify visibility of Active/Open Alerts count within Alerts Summary

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | High |
| Preconditions | Active alerts should exist |
| Test Data | Open Alerts: 5 |
| Steps | 1. Open Alerts tab 2. Observe Active Alerts counter |
| Expected Result | Active/Open Alerts count should display correctly within Alerts Summary section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, high, functional |

### C360-TC-205 — Verify visibility of Escalated Alerts count within Alerts Summary

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | Medium |
| Preconditions | Escalated alerts should exist |
| Test Data | Escalated Alerts: 2 |
| Steps | 1. Open Alerts tab 2. Observe Escalated Alerts counter |
| Expected Result | Escalated Alerts count should display correctly within Alerts Summary section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, medium, functional |

### C360-TC-206 — Verify visibility of Pending Response count within Alerts Summary

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | Medium |
| Preconditions | Pending response alerts should exist |
| Test Data | Pending Responses: 3 |
| Steps | 1. Open Alerts tab 2. Observe Pending Response counter |
| Expected Result | Pending Response count should display correctly within Alerts Summary section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, medium, functional |

### C360-TC-207 — Verify rendering of Alerts table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | High |
| Preconditions | Alert records should exist |
| Test Data | Alert Count: 12 |
| Steps | 1. Open Alerts tab 2. Observe Alerts table |
| Expected Result | Alerts table should render correctly with all configured alert rows and columns |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, high, functional |

### C360-TC-208 — Verify visibility of Alert Type within Alerts table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | Medium |
| Preconditions | Alert type information should exist |
| Test Data | Alert Type: Transaction Monitoring |
| Steps | 1. Open Alerts tab 2. Observe Alert Type column |
| Expected Result | Alert types should display correctly against corresponding alert records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, medium, functional |

### C360-TC-209 — Verify visibility of Scenario Name within Alerts table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | Medium |
| Preconditions | Scenario names should exist |
| Test Data | Scenario Name: Structuring Detection |
| Steps | 1. Open Alerts tab 2. Observe Scenario Name column |
| Expected Result | Scenario names should display correctly within Alerts table |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, medium, functional |

### C360-TC-210 — Verify visibility of Alert Creation Date within Alerts table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | Medium |
| Preconditions | Alert creation dates should exist |
| Test Data | Creation Date: 12-Apr-2026 |
| Steps | 1. Open Alerts tab 2. Observe Creation Date column |
| Expected Result | Alert creation dates should display correctly against corresponding alert records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, medium, functional |

### C360-TC-211 — Verify visibility of Last Updated Date within Alerts table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | Medium |
| Preconditions | Last updated dates should exist |
| Test Data | Last Updated Date: 15-Apr-2026 |
| Steps | 1. Open Alerts tab 2. Observe Last Updated Date column |
| Expected Result | Last Updated Date should display correctly against corresponding alert records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, medium, functional |

### C360-TC-212 — Verify visibility of Assigned Analyst within Alerts table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | Medium |
| Preconditions | Assigned analyst information should exist |
| Test Data | Assigned Analyst: John Smith |
| Steps | 1. Open Alerts tab 2. Observe Assigned Analyst column |
| Expected Result | Assigned analyst names should display correctly against corresponding alert records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, medium, functional |

### C360-TC-213 — Verify rendering of Alert Status badges

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | High |
| Preconditions | Alert statuses should exist |
| Test Data | Alert Status: Open |
| Steps | 1. Open Alerts tab 2. Observe Alert Status column |
| Expected Result | Alert status badges should display correctly with proper labels and formatting |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, high, functional |

### C360-TC-214 — Verify color coding of Alert Status badges

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | Medium |
| Preconditions | Multiple alert statuses should exist |
| Test Data | Statuses: Open, Closed, Escalated |
| Steps | 1. Open Alerts tab 2. Observe alert status badge colors |
| Expected Result | Alert status badges should display correct color mapping based on configured statuses |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, medium, functional |

### C360-TC-215 — Verify expand functionality of alert rows

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | High |
| Preconditions | Expandable alert rows should exist |
| Test Data | Alert ID: ALT2026001 |
| Steps | 1. Open Alerts tab 2. Click expand icon for alert row |
| Expected Result | Alert row should expand successfully and display additional alert details |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, high, pii, compliance |

### C360-TC-216 — Verify visibility of triggering transactions within expanded alert details

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | High |
| Preconditions | Linked transactions should exist |
| Test Data | Transaction ID: TXN2026011 |
| Steps | 1. Expand alert row 2. Observe triggering transactions section |
| Expected Result | Triggering transactions should display correctly within expanded alert details |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, high, pii, compliance |

### C360-TC-217 — Verify visibility of Match Criteria within expanded alert details

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | Medium |
| Preconditions | Match criteria information should exist |
| Test Data | Match Criteria: Structuring Rule |
| Steps | 1. Expand alert row 2. Observe Match Criteria section |
| Expected Result | Match Criteria should display correctly within alert detail section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, medium, pii, compliance |

### C360-TC-218 — Verify visibility of alert status within expanded alert details

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | Medium |
| Preconditions | Alert status should exist |
| Test Data | Alert Status: Open |
| Steps | 1. Expand alert row 2. Observe alert detail section |
| Expected Result | Alert status should display correctly within expanded alert details |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, medium, pii, compliance |

### C360-TC-219 — Verify stability of multiple expanded alert rows

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | Medium |
| Preconditions | Multiple expandable alert rows should exist |
| Test Data | Alert Count: 5 |
| Steps | 1. Expand multiple alert rows sequentially 2. Observe UI behavior |
| Expected Result | UI should remain properly aligned without overlap or rendering issues |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, medium, pii, compliance |

### C360-TC-220 — Verify consistency of Active Alert counts between Header Strip and Alerts Summary

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | High |
| Preconditions | Active alerts should exist |
| Test Data | Open Alerts: 5 |
| Steps | 1. Observe Active Alert count in Header Strip 2. Observe Active Alert count in Alerts Summary |
| Expected Result | Active Alert counts should remain synchronized across all displayed sections |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, high, functional |

### C360-TC-221 — Verify tooltip visibility for truncated alert values

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | Low |
| Preconditions | Truncated alert values should exist |
| Test Data | Scenario Name: International Structuring Detection Scenario |
| Steps | 1. Hover mouse over truncated alert text 2. Observe tooltip behavior |
| Expected Result | Tooltip should display complete alert value correctly without clipping |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, low, functional |

### C360-TC-222 — Verify empty-state rendering when no alerts exist

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | High |
| Preconditions | Customer without alerts should exist |
| Test Data | Customer ID: EMPTYALT001 |
| Steps | 1. Open customer profile without alerts 2. Observe Alerts tab |
| Expected Result | User-friendly no-data message should display correctly within Alerts tab |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, high, functional |

### C360-TC-223 — Verify responsive rendering of Alerts tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | Medium |
| Preconditions | User should be on Alerts tab |
| Test Data | Resolution: 1024x768 |
| Steps | 1. Resize browser to medium resolution 2. Observe Alerts tab layout |
| Expected Result | All alert tables, counters, and expanded sections should remain properly aligned without clipping or overlap |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, medium, functional |

### C360-TC-224 — Verify rerendering of Alerts data after customer type switching

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | High |
| Preconditions | Both customer types should contain different alert data |
| Test Data | Individual: IND1001 Corporate: CORP2001 |
| Steps | 1. Open Individual customer 2. Observe alert records 3. Switch customer type |
| Expected Result | Alerts data should rerender correctly using updated customer-specific information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, high, functional |

### C360-TC-225 — Verify removal of stale Alerts data after rerender

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | High |
| Preconditions | Two customers with different alert profiles should exist |
| Test Data | Customer IDs: IND1001 and CORP2001 |
| Steps | 1. Open first customer profile 2. Observe alert records 3. Switch customer type |
| Expected Result | Old alert records, counters, and statuses should not remain visible after rerender |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, high, functional |

### C360-TC-226 — Verify loading indicator visibility during Alerts rendering under slow network

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | Medium |
| Preconditions | Slow network simulation should be enabled |
| Test Data | Network Profile: Slow 3G |
| Steps | 1. Enable slow network 2. Open Alerts tab 3. Observe loading behavior |
| Expected Result | Loaders or skeleton placeholders should display until alert records finish rendering |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, medium, performance |

### C360-TC-227 — Verify frontend console stability during Alerts interactions

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Alerts Tab |
| Priority | Medium |
| Preconditions | User should have browser console access |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open browser developer console 2. Expand alert rows 3. Observe Alerts tab behavior |
| Expected Result | No JavaScript errors, rendering failures, or unhandled exceptions should appear during Alerts interactions |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | alerts-tab, medium, error-handling |

### C360-TC-228 — Verify successful loading of Regulatory Reports tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | High |
| Preconditions | User should be logged into AML application and Customer 360 page should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Login to AML application 2. Open Customer 360 page 3. Navigate to Regulatory Reports tab |
| Expected Result | Regulatory Reports tab should load successfully with all configured report sections rendered correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, high, functional |

### C360-TC-229 — Verify rendering of STR/SAR Filings section

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | High |
| Preconditions | STR/SAR filing records should exist |
| Test Data | STR ID: STR2026001 |
| Steps | 1. Open Regulatory Reports tab 2. Observe STR/SAR section |
| Expected Result | STR/SAR filing records should display correctly with associated filing information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, high, functional |

### C360-TC-230 — Verify visibility of jurisdiction within STR/SAR filings

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | Medium |
| Preconditions | Jurisdiction information should exist |
| Test Data | Jurisdiction: India |
| Steps | 1. Open Regulatory Reports tab 2. Observe Jurisdiction column |
| Expected Result | Jurisdiction values should display correctly against corresponding STR/SAR filings |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, medium, functional |

### C360-TC-231 — Verify visibility of Full Report link within STR/SAR filings

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | Medium |
| Preconditions | Full Report link should exist |
| Test Data | Report Type: STR |
| Steps | 1. Open Regulatory Reports tab 2. Observe Full Report link |
| Expected Result | Full Report link should display correctly within STR/SAR section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, medium, functional |

### C360-TC-232 — Verify click behavior of Full Report link

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | Medium |
| Preconditions | Full Report link should be visible |
| Test Data | Report Type: STR |
| Steps | 1. Open Regulatory Reports tab 2. Click Full Report link |
| Expected Result | Selected report should open or download successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, medium, export |

### C360-TC-233 — Verify visibility of Case ID within STR/SAR filings

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | Medium |
| Preconditions | Case ID should exist |
| Test Data | Case ID: CASE2026011 |
| Steps | 1. Open Regulatory Reports tab 2. Observe Case ID column |
| Expected Result | Case IDs should display correctly against corresponding STR/SAR filings |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, medium, functional |

### C360-TC-234 — Verify rendering of CTR section

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | High |
| Preconditions | CTR records should exist |
| Test Data | CTR Reference: CTR2026001 |
| Steps | 1. Open Regulatory Reports tab 2. Observe CTR section |
| Expected Result | CTR records should display correctly with associated transaction details |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, high, functional |

### C360-TC-235 — Verify visibility of CTR Reference within CTR section

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | Medium |
| Preconditions | CTR references should exist |
| Test Data | CTR Reference: CTR2026001 |
| Steps | 1. Open Regulatory Reports tab 2. Observe CTR Reference column |
| Expected Result | CTR reference numbers should display correctly against corresponding records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, medium, functional |

### C360-TC-236 — Verify visibility of Transaction Date within CTR section

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | Medium |
| Preconditions | CTR transaction dates should exist |
| Test Data | Transaction Date: 11-Apr-2026 |
| Steps | 1. Open Regulatory Reports tab 2. Observe Transaction Date column |
| Expected Result | Transaction dates should display correctly against corresponding CTR records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, medium, functional |

### C360-TC-237 — Verify visibility of Transaction Amount within CTR section

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | Medium |
| Preconditions | CTR amounts should exist |
| Test Data | Transaction Amount: 1500000 |
| Steps | 1. Open Regulatory Reports tab 2. Observe Transaction Amount column |
| Expected Result | Transaction amounts should display correctly against corresponding CTR records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, medium, functional |

### C360-TC-238 — Verify rendering of LEA Requests section

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | High |
| Preconditions | LEA requests should exist |
| Test Data | LEA Request ID: LEA2026001 |
| Steps | 1. Open Regulatory Reports tab 2. Observe LEA Requests section |
| Expected Result | LEA request records should display correctly with associated request information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, high, functional |

### C360-TC-239 — Verify visibility of Agency Name within LEA Requests

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | Medium |
| Preconditions | Agency information should exist |
| Test Data | Agency Name: Enforcement Directorate |
| Steps | 1. Open Regulatory Reports tab 2. Observe Agency Name column |
| Expected Result | Agency names should display correctly against corresponding LEA requests |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, medium, functional |

### C360-TC-240 — Verify visibility of Response Deadline within LEA Requests

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | Medium |
| Preconditions | Response deadline should exist |
| Test Data | Response Deadline: 20-Apr-2026 |
| Steps | 1. Open Regulatory Reports tab 2. Observe Response Deadline column |
| Expected Result | Response deadlines should display correctly against corresponding LEA requests |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, medium, functional |

### C360-TC-241 — Verify rendering of Filing Status badges within Regulatory Reports tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | High |
| Preconditions | Filing statuses should exist |
| Test Data | Filing Status: Filed |
| Steps | 1. Open Regulatory Reports tab 2. Observe Filing Status column |
| Expected Result | Filing status badges should display correctly with proper labels and formatting |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, high, functional |

### C360-TC-242 — Verify color coding of Filing Status badges

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | Medium |
| Preconditions | Multiple filing statuses should exist |
| Test Data | Statuses: Filed, Pending, Draft, Rejected |
| Steps | 1. Open Regulatory Reports tab 2. Observe Filing Status badge colors |
| Expected Result | Filing status badges should display correct color mapping based on configured statuses |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, medium, functional |

### C360-TC-243 — Verify tooltip visibility for truncated regulatory report values

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | Low |
| Preconditions | Truncated report values should exist |
| Test Data | Agency Name: Directorate of Financial Intelligence Enforcement |
| Steps | 1. Hover mouse over truncated report text 2. Observe tooltip behavior |
| Expected Result | Tooltip should display complete report value correctly without clipping |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, low, functional |

### C360-TC-244 — Verify empty-state rendering when no regulatory reports exist

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | High |
| Preconditions | Customer without regulatory reports should exist |
| Test Data | Customer ID: EMPTYREG001 |
| Steps | 1. Open customer profile without regulatory reports 2. Observe Regulatory Reports tab |
| Expected Result | User-friendly no-data message should display correctly within Regulatory Reports tab |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, high, functional |

### C360-TC-245 — Verify responsive rendering of Regulatory Reports tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | Medium |
| Preconditions | User should be on Regulatory Reports tab |
| Test Data | Resolution: 1024x768 |
| Steps | 1. Resize browser to medium resolution 2. Observe Regulatory Reports layout |
| Expected Result | All report tables, sections, and badges should remain properly aligned without clipping or overlap |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, medium, functional |

### C360-TC-246 — Verify rerendering of Regulatory Reports data after customer type switching

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | High |
| Preconditions | Both customer types should contain different report data |
| Test Data | Individual: IND1001 Corporate: CORP2001 |
| Steps | 1. Open Individual customer 2. Observe regulatory reports 3. Switch customer type |
| Expected Result | Regulatory report sections should rerender correctly using updated customer-specific information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, high, functional |

### C360-TC-247 — Verify removal of stale Regulatory Reports data after rerender

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | High |
| Preconditions | Two customers with different regulatory report profiles should exist |
| Test Data | Customer IDs: IND1001 and CORP2001 |
| Steps | 1. Open first customer profile 2. Observe regulatory reports 3. Switch customer type |
| Expected Result | Old report records, statuses, and filing information should not remain visible after rerender |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, high, functional |

### C360-TC-248 — Verify loading indicator visibility during Regulatory Reports rendering under slow network

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | Medium |
| Preconditions | Slow network simulation should be enabled |
| Test Data | Network Profile: Slow 3G |
| Steps | 1. Enable slow network 2. Open Regulatory Reports tab 3. Observe loading behavior |
| Expected Result | Loaders or skeleton placeholders should display until regulatory reports finish rendering |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, medium, performance |

### C360-TC-249 — Verify frontend console stability during Regulatory Reports interactions

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regulatory Reports Tab |
| Priority | Medium |
| Preconditions | User should have browser console access |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open browser developer console 2. Open report links 3. Observe Regulatory Reports behavior |
| Expected Result | No JavaScript errors, rendering failures, or unhandled exceptions should appear during Regulatory Reports interactions |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regulatory-reports-tab, medium, error-handling |

### C360-TC-250 — Verify successful loading of KYC Gap Report tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC Gap Report Tab |
| Priority | High |
| Preconditions | User should be logged into AML application and Customer 360 page should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Login to AML application 2. Open Customer 360 page 3. Navigate to KYC Gap Report tab |
| Expected Result | KYC Gap Report tab should load successfully with all configured gap analysis information rendered correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-tab, high, functional |

### C360-TC-251 — Verify visibility of KYC Gap Score within KYC Gap Report tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC Gap Report Tab |
| Priority | High |
| Preconditions | KYC Gap Score should exist |
| Test Data | KYC Gap Score: 28 |
| Steps | 1. Open KYC Gap Report tab 2. Observe KYC Gap Score |
| Expected Result | KYC Gap Score should display correctly with proper formatting and visibility |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-tab, high, functional |

### C360-TC-252 — Verify formatting consistency of KYC Gap Score

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC Gap Report Tab |
| Priority | Medium |
| Preconditions | KYC Gap Score should exist |
| Test Data | KYC Gap Score: 28 |
| Steps | 1. Open KYC Gap Report tab 2. Observe KYC Gap Score formatting |
| Expected Result | KYC Gap Score formatting should remain visually consistent without layout distortion |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-tab, medium, functional |

### C360-TC-253 — Verify visibility of Missing Field Count within KYC Gap Report tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC Gap Report Tab |
| Priority | High |
| Preconditions | Missing KYC fields should exist |
| Test Data | Missing Fields: 5 |
| Steps | 1. Open KYC Gap Report tab 2. Observe Missing Field Count |
| Expected Result | Missing Field Count should display correctly within summary section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-tab, high, functional |

### C360-TC-254 — Verify visibility of applied Template Name within KYC Gap Report tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC Gap Report Tab |
| Priority | Medium |
| Preconditions | Template information should exist |
| Test Data | Template Name: Retail Customer Template |
| Steps | 1. Open KYC Gap Report tab 2. Observe Template Name field |
| Expected Result | Template Name should display correctly within KYC Gap summary section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-tab, medium, functional |

### C360-TC-255 — Verify visibility of Branch Code within KYC Gap Report tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC Gap Report Tab |
| Priority | Low |
| Preconditions | Branch Code should exist |
| Test Data | Branch Code: BR001 |
| Steps | 1. Open KYC Gap Report tab 2. Observe Branch Code field |
| Expected Result | Branch Code should display correctly within KYC Gap information section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-tab, low, functional |

### C360-TC-256 — Verify rendering of Missing Field table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC Gap Report Tab |
| Priority | High |
| Preconditions | Missing KYC fields should exist |
| Test Data | Missing Fields: Occupation, Source of Wealth |
| Steps | 1. Open KYC Gap Report tab 2. Observe Missing Field table |
| Expected Result | Missing Field table should render correctly with all configured rows and columns |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-tab, high, functional |

### C360-TC-257 — Verify visibility of Mandatory field indicators within Missing Field table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC Gap Report Tab |
| Priority | High |
| Preconditions | Mandatory missing fields should exist |
| Test Data | Field Type: Mandatory |
| Steps | 1. Open KYC Gap Report tab 2. Observe Mandatory field indicators |
| Expected Result | Mandatory fields should display with appropriate visual indicator or label |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-tab, high, functional |

### C360-TC-258 — Verify visibility of Optional field indicators within Missing Field table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC Gap Report Tab |
| Priority | Medium |
| Preconditions | Optional missing fields should exist |
| Test Data | Field Type: Optional |
| Steps | 1. Open KYC Gap Report tab 2. Observe Optional field indicators |
| Expected Result | Optional fields should display with appropriate visual indicator or label |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-tab, medium, functional |

### C360-TC-259 — Verify visibility of field weights within Missing Field table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC Gap Report Tab |
| Priority | Medium |
| Preconditions | Field weights should exist |
| Test Data | Field Weight: 15% |
| Steps | 1. Open KYC Gap Report tab 2. Observe Weight column |
| Expected Result | Field weights should display correctly against corresponding missing fields |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-tab, medium, functional |

### C360-TC-260 — Verify handling of long missing field names within Missing Field table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC Gap Report Tab |
| Priority | Low |
| Preconditions | Long missing field names should exist |
| Test Data | Field Name: Ultimate Beneficial Ownership Verification Information |
| Steps | 1. Open KYC Gap Report tab 2. Observe long field names |
| Expected Result | Long field names should wrap or truncate gracefully without breaking table alignment |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-tab, low, functional |

### C360-TC-261 — Verify tooltip visibility for truncated KYC Gap values

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC Gap Report Tab |
| Priority | Low |
| Preconditions | Truncated KYC Gap values should exist |
| Test Data | Field Name: Ultimate Beneficial Ownership Verification Information |
| Steps | 1. Hover mouse over truncated field text 2. Observe tooltip behavior |
| Expected Result | Tooltip should display complete KYC Gap value correctly without clipping |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-tab, low, functional |

### C360-TC-262 — Verify empty-state rendering when no KYC gaps exist

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC Gap Report Tab |
| Priority | High |
| Preconditions | Customer without KYC gaps should exist |
| Test Data | Customer ID: NOGAP001 |
| Steps | 1. Open customer profile without KYC gaps 2. Observe KYC Gap Report tab |
| Expected Result | User-friendly no-data message should display correctly within KYC Gap Report tab |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-tab, high, functional |

### C360-TC-263 — Verify responsive rendering of KYC Gap Report tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC Gap Report Tab |
| Priority | Medium |
| Preconditions | User should be on KYC Gap Report tab |
| Test Data | Resolution: 1024x768 |
| Steps | 1. Resize browser to medium resolution 2. Observe KYC Gap Report layout |
| Expected Result | All gap analysis tables, scores, and sections should remain properly aligned without clipping or overlap |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-tab, medium, functional |

### C360-TC-264 — Verify rerendering of KYC Gap data after customer type switching

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC Gap Report Tab |
| Priority | High |
| Preconditions | Both customer types should contain different KYC Gap data |
| Test Data | Individual: IND1001 Corporate: CORP2001 |
| Steps | 1. Open Individual customer 2. Observe KYC Gap details 3. Switch customer type |
| Expected Result | KYC Gap sections should rerender correctly using updated customer-specific information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-tab, high, functional |

### C360-TC-265 — Verify removal of stale KYC Gap data after rerender

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC Gap Report Tab |
| Priority | High |
| Preconditions | Two customers with different KYC Gap profiles should exist |
| Test Data | Customer IDs: IND1001 and CORP2001 |
| Steps | 1. Open first customer profile 2. Observe KYC Gap details 3. Switch customer type |
| Expected Result | Old gap records, scores, and missing fields should not remain visible after rerender |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-tab, high, functional |

### C360-TC-266 — Verify loading indicator visibility during KYC Gap rendering under slow network

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC Gap Report Tab |
| Priority | Medium |
| Preconditions | Slow network simulation should be enabled |
| Test Data | Network Profile: Slow 3G |
| Steps | 1. Enable slow network 2. Open KYC Gap Report tab 3. Observe loading behavior |
| Expected Result | Loaders or skeleton placeholders should display until KYC Gap information finishes rendering |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-tab, medium, performance |

### C360-TC-267 — Verify consistency of KYC Gap Score between Overview and KYC Gap Report tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC Gap Report Tab |
| Priority | High |
| Preconditions | KYC Gap Score should exist |
| Test Data | KYC Gap Score: 28 |
| Steps | 1. Observe KYC Gap Score in Overview tab 2. Observe KYC Gap Score in KYC Gap Report tab |
| Expected Result | KYC Gap Scores should remain synchronized across all displayed sections |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-tab, high, functional |

### C360-TC-268 — Verify frontend console stability during KYC Gap interactions

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | KYC Gap Report Tab |
| Priority | Medium |
| Preconditions | User should have browser console access |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open browser developer console 2. Navigate within KYC Gap Report tab 3. Observe behavior |
| Expected Result | No JavaScript errors, rendering failures, or unhandled exceptions should appear during KYC Gap interactions |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-tab, medium, error-handling |

### C360-TC-269 — Verify successful loading of Audit tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | High |
| Preconditions | User should be logged into AML application and Customer 360 page should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Login to AML application 2. Open Customer 360 page 3. Navigate to Audit tab |
| Expected Result | Audit tab should load successfully with all configured audit records and activity details rendered correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, high, functional |

### C360-TC-270 — Verify rendering of Audit table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | High |
| Preconditions | Audit records should exist |
| Test Data | Audit Record Count: 25 |
| Steps | 1. Open Audit tab 2. Observe Audit table |
| Expected Result | Audit table should render correctly with all configured audit rows and columns |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, high, functional |

### C360-TC-271 — Verify visibility of audit timestamps within Audit table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | Medium |
| Preconditions | Audit timestamps should exist |
| Test Data | Timestamp: 15-Apr-2026 10:30 AM |
| Steps | 1. Open Audit tab 2. Observe Timestamp column |
| Expected Result | Audit timestamps should display correctly against corresponding audit records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, medium, functional |

### C360-TC-272 — Verify visibility of Action Type within Audit table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | Medium |
| Preconditions | Action type information should exist |
| Test Data | Action Type: Customer Update |
| Steps | 1. Open Audit tab 2. Observe Action Type column |
| Expected Result | Action types should display correctly against corresponding audit records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, medium, functional |

### C360-TC-273 — Verify visibility of Actor/User information within Audit table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | Medium |
| Preconditions | Actor information should exist |
| Test Data | Actor: analyst01 |
| Steps | 1. Open Audit tab 2. Observe Actor/User column |
| Expected Result | Actor or user information should display correctly against corresponding audit records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, medium, functional |

### C360-TC-274 — Verify visibility of Module/Source information within Audit table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | Medium |
| Preconditions | Module information should exist |
| Test Data | Module: KYC Review |
| Steps | 1. Open Audit tab 2. Observe Module/Source column |
| Expected Result | Module or source information should display correctly within Audit table |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, medium, functional |

### C360-TC-275 — Verify visibility of Event Description within Audit table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | Medium |
| Preconditions | Event descriptions should exist |
| Test Data | Event Description: Address information updated |
| Steps | 1. Open Audit tab 2. Observe Event Description column |
| Expected Result | Event descriptions should display correctly against corresponding audit records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, medium, functional |

### C360-TC-276 — Verify chronological ordering of audit records

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | High |
| Preconditions | Multiple audit records should exist |
| Test Data | Audit Dates: 01-Apr-2026 to 15-Apr-2026 |
| Steps | 1. Open Audit tab 2. Observe ordering of audit records |
| Expected Result | Audit records should display in correct chronological sequence based on timestamps |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, high, functional |

### C360-TC-277 — Verify absence of Edit/Delete actions within Audit tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | High |
| Preconditions | Audit tab should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Audit tab 2. Observe available actions |
| Expected Result | Edit or Delete actions should not be available for audit records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, high, functional |

### C360-TC-278 — Verify visibility of Audit Search functionality

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | Medium |
| Preconditions | Audit Search feature should be configured |
| Test Data | Search Keyword: Address |
| Steps | 1. Open Audit tab 2. Observe search controls |
| Expected Result | Audit Search field should display correctly within Audit tab |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, medium, functional |

### C360-TC-279 — Verify Audit Search functionality behavior

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | Medium |
| Preconditions | Audit records matching search keyword should exist |
| Test Data | Search Keyword: Address |
| Steps | 1. Open Audit tab 2. Enter search keyword 3. Observe filtered results |
| Expected Result | Only matching audit records should display based on entered keyword |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, medium, functional |

### C360-TC-280 — Verify visibility of Audit Filter controls

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | Medium |
| Preconditions | Audit filters should be configured |
| Test Data | Filter Type: Action Type |
| Steps | 1. Open Audit tab 2. Observe filter controls |
| Expected Result | Audit filter controls should display correctly within Audit tab |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, medium, functional |

### C360-TC-281 — Verify Audit Filter functionality behavior

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | Medium |
| Preconditions | Audit records matching selected filter should exist |
| Test Data | Filter Value: KYC Review |
| Steps | 1. Open Audit tab 2. Apply filter 3. Observe filtered results |
| Expected Result | Only matching audit records should display based on selected filter criteria |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, medium, functional |

### C360-TC-282 — Verify horizontal scrolling behavior within Audit table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | Medium |
| Preconditions | Audit table should contain multiple columns |
| Test Data | Resolution: 1024x768 |
| Steps | 1. Resize browser width 2. Scroll horizontally within Audit table |
| Expected Result | Audit table should scroll horizontally smoothly without UI distortion |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, medium, functional |

### C360-TC-283 — Verify handling of long event descriptions within Audit table

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | Low |
| Preconditions | Long event descriptions should exist |
| Test Data | Event Description: International beneficial ownership verification information updated |
| Steps | 1. Open Audit tab 2. Observe long event descriptions |
| Expected Result | Long event descriptions should wrap or truncate gracefully without breaking table alignment |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, low, functional |

### C360-TC-284 — Verify tooltip visibility for truncated audit values

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | Low |
| Preconditions | Truncated audit values should exist |
| Test Data | Event Description: International beneficial ownership verification information updated |
| Steps | 1. Hover mouse over truncated audit text 2. Observe tooltip behavior |
| Expected Result | Tooltip should display complete audit value correctly without clipping |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, low, functional |

### C360-TC-285 — Verify empty-state rendering when no audit records exist

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | Medium |
| Preconditions | Customer without audit records should exist |
| Test Data | Customer ID: EMPTYAUD001 |
| Steps | 1. Open customer profile without audit records 2. Observe Audit tab |
| Expected Result | User-friendly no-data message should display correctly within Audit tab |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, medium, functional |

### C360-TC-286 — Verify responsive rendering of Audit tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | Medium |
| Preconditions | User should be on Audit tab |
| Test Data | Resolution: 1024x768 |
| Steps | 1. Resize browser to medium resolution 2. Observe Audit tab layout |
| Expected Result | All audit tables, filters, and records should remain properly aligned without clipping or overlap |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, medium, functional |

### C360-TC-287 — Verify rerendering of Audit data after customer type switching

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | High |
| Preconditions | Both customer types should contain different audit data |
| Test Data | Individual: IND1001 Corporate: CORP2001 |
| Steps | 1. Open Individual customer 2. Observe audit records 3. Switch customer type |
| Expected Result | Audit sections should rerender correctly using updated customer-specific information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, high, functional |

### C360-TC-288 — Verify removal of stale Audit data after rerender

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | High |
| Preconditions | Two customers with different audit profiles should exist |
| Test Data | Customer IDs: IND1001 and CORP2001 |
| Steps | 1. Open first customer profile 2. Observe audit records 3. Switch customer type |
| Expected Result | Old audit records, timestamps, and descriptions should not remain visible after rerender |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, high, functional |

### C360-TC-289 — Verify loading indicator visibility during Audit rendering under slow network

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | Medium |
| Preconditions | Slow network simulation should be enabled |
| Test Data | Network Profile: Slow 3G |
| Steps | 1. Enable slow network 2. Open Audit tab 3. Observe loading behavior |
| Expected Result | Loaders or skeleton placeholders should display until audit information finishes rendering |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, medium, performance |

### C360-TC-290 — Verify frontend console stability during Audit interactions

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Audit Tab |
| Priority | Medium |
| Preconditions | User should have browser console access |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open browser developer console 2. Apply audit filters 3. Search audit records |
| Expected Result | No JavaScript errors, rendering failures, or unhandled exceptions should appear during Audit interactions |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-tab, medium, error-handling |

### C360-TC-291 — Verify tab navigation behavior across Customer 360 module

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Global Navigation |
| Priority | High |
| Preconditions | Customer 360 page should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Navigate across all available tabs 2. Observe navigation behavior |
| Expected Result | Users should be able to navigate successfully across all tabs without rendering issues |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | global-navigation, high, functional |

### C360-TC-292 — Verify active tab highlighting behavior

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Global Navigation |
| Priority | Medium |
| Preconditions | User should navigate across multiple tabs |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Navigate to different tabs sequentially 2. Observe active tab styling |
| Expected Result | Currently active tab should display correct visual highlight or indicator |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | global-navigation, medium, functional |

### C360-TC-293 — Verify active tab persistence after customer type switching

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Global Navigation |
| Priority | High |
| Preconditions | User should be on non-default tab |
| Test Data | Active Tab: Risk |
| Steps | 1. Open non-default tab 2. Switch customer type 3. Observe active tab state |
| Expected Result | Currently active tab should remain selected after customer type rerender |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | global-navigation, high, functional |

### C360-TC-294 — Verify browser back navigation behavior within Customer 360

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Global Navigation |
| Priority | Medium |
| Preconditions | User should navigate across multiple tabs |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Navigate between tabs 2. Click browser Back button |
| Expected Result | Browser Back navigation should function correctly without broken routing or stale UI |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | global-navigation, medium, browser-compat |

### C360-TC-295 — Verify browser refresh behavior within Customer 360

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Global Navigation |
| Priority | Medium |
| Preconditions | User should be on Customer 360 page |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Customer 360 page 2. Refresh browser |
| Expected Result | Customer 360 page should reload successfully without broken layout or missing data |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | global-navigation, medium, browser-compat |

### C360-TC-296 — Verify stability during rapid tab switching

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Global Navigation |
| Priority | Medium |
| Preconditions | Customer 360 page should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Rapidly switch between multiple tabs 2. Observe UI behavior |
| Expected Result | UI should remain stable without flickering, overlap, stale rendering, or broken widgets |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | global-navigation, medium, functional |

### C360-TC-297 — Verify scroll position behavior during tab navigation

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Global Navigation |
| Priority | Low |
| Preconditions | Scrollable content should exist |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Scroll within a tab 2. Switch tabs 3. Return to previous tab |
| Expected Result | Scroll behavior should remain consistent without unexpected jumps or broken positioning |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | global-navigation, low, functional |

### C360-TC-298 — Verify handling of horizontal overflow across Customer 360 module

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Global Navigation |
| Priority | Medium |
| Preconditions | Wide tables or widgets should exist |
| Test Data | Resolution: 1024x768 |
| Steps | 1. Resize browser width 2. Navigate across tabs |
| Expected Result | No unexpected horizontal overflow or broken page alignment should appear |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | global-navigation, medium, functional |

### C360-TC-299 — Verify visibility of Export action within Customer 360 module

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Export Functionality |
| Priority | High |
| Preconditions | Export functionality should be enabled |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Customer 360 module 2. Observe export controls |
| Expected Result | Export action should display correctly within configured sections |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export-functionality, high, export |

### C360-TC-300 — Verify Export action click behavior

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Export Functionality |
| Priority | High |
| Preconditions | Export action should be visible |
| Test Data | Export Type: CSV |
| Steps | 1. Click Export action 2. Observe export workflow |
| Expected Result | Export workflow, dropdown, or export modal should open successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export-functionality, high, export |

### C360-TC-301 — Verify visibility of PDF export option

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Export Functionality |
| Priority | Medium |
| Preconditions | PDF export should be configured |
| Test Data | Export Format: PDF |
| Steps | 1. Open Export options 2. Observe PDF export option |
| Expected Result | PDF export option should display correctly within export controls |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export-functionality, medium, export |

### C360-TC-302 — Verify visibility of CSV export option

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Export Functionality |
| Priority | Medium |
| Preconditions | CSV export should be configured |
| Test Data | Export Format: CSV |
| Steps | 1. Open Export options 2. Observe CSV export option |
| Expected Result | CSV export option should display correctly within export controls |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export-functionality, medium, export |

### C360-TC-303 — Verify loading indicator visibility during export processing

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Export Functionality |
| Priority | Medium |
| Preconditions | Export process should be triggered |
| Test Data | Export Format: CSV |
| Steps | 1. Initiate export action 2. Observe UI behavior |
| Expected Result | Loader or processing indicator should display until export completes |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export-functionality, medium, export |

### C360-TC-304 — Verify success notification after successful export

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Export Functionality |
| Priority | Medium |
| Preconditions | Export process should complete successfully |
| Test Data | Export Format: PDF |
| Steps | 1. Perform export action 2. Observe success notification |
| Expected Result | Success notification or confirmation message should display correctly after export completion |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export-functionality, medium, export |

### C360-TC-305 — Verify error notification during failed export

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Export Functionality |
| Priority | High |
| Preconditions | Export failure scenario should be simulated |
| Test Data | Export Format: CSV |
| Steps | 1. Trigger export failure scenario 2. Observe error notification |
| Expected Result | Error notification or failure message should display correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export-functionality, high, export |

### C360-TC-306 — Verify disabled state of Export action during processing

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Export Functionality |
| Priority | Medium |
| Preconditions | Export process should be active |
| Test Data | Export Format: PDF |
| Steps | 1. Initiate export action repeatedly 2. Observe Export button state |
| Expected Result | Export action should become temporarily disabled during processing |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export-functionality, medium, export |

### C360-TC-307 — Verify export data consistency with currently active tab

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Export Functionality |
| Priority | High |
| Preconditions | User should be on specific tab |
| Test Data | Active Tab: Alerts |
| Steps | 1. Navigate to specific tab 2. Perform export action |
| Expected Result | Exported data should correspond only to currently active tab or section |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export-functionality, high, export |

### C360-TC-308 — Verify export workflow behavior under slow network

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Export Functionality |
| Priority | Medium |
| Preconditions | Slow network simulation should be enabled |
| Test Data | Network Profile: Slow 3G |
| Steps | 1. Enable slow network 2. Initiate export action |
| Expected Result | Application should remain stable with visible loader during export processing |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export-functionality, medium, export |

### C360-TC-309 — Verify masking of PAN information within Customer 360

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | PII Masking |
| Priority | High |
| Preconditions | PAN data should exist |
| Test Data | PAN: ABCDE1234F |
| Steps | 1. Open Customer 360 page 2. Observe PAN field |
| Expected Result | PAN values should display in masked format according to configured masking rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | pii-masking, high, pii, compliance |

### C360-TC-310 — Verify masking of Aadhaar information within Customer 360

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | PII Masking |
| Priority | High |
| Preconditions | Aadhaar data should exist |
| Test Data | Aadhaar: 4587 1234 8899 |
| Steps | 1. Open Customer 360 page 2. Observe Aadhaar field |
| Expected Result | Aadhaar values should display in masked format according to configured masking rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | pii-masking, high, pii, compliance |

### C360-TC-311 — Verify masking of Account Numbers within Customer 360

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | PII Masking |
| Priority | High |
| Preconditions | Account data should exist |
| Test Data | Account Number: 458712369001 |
| Steps | 1. Open Accounts tab 2. Observe account numbers |
| Expected Result | Account numbers should display in masked format according to configured masking rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | pii-masking, high, pii, compliance |

### C360-TC-312 — Verify consistency of masking behavior across all tabs

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | PII Masking |
| Priority | High |
| Preconditions | PII data should exist across multiple tabs |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Navigate across all tabs 2. Observe masked values |
| Expected Result | Masking behavior should remain consistent across all displayed sections |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | pii-masking, high, pii, compliance |

### C360-TC-313 — Verify rendering of generic API failure state

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Error Handling |
| Priority | High |
| Preconditions | API failure scenario should be simulated |
| Test Data | API Status: 500 |
| Steps | 1. Trigger API failure 2. Observe UI behavior |
| Expected Result | User-friendly error state or message should display correctly without breaking layout |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | error-handling, high |

### C360-TC-314 — Verify visibility of Retry action after API failure

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Error Handling |
| Priority | Medium |
| Preconditions | API failure should occur |
| Test Data | API Status: 500 |
| Steps | 1. Trigger API failure 2. Observe Retry option |
| Expected Result | Retry action or button should display correctly after API failure |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | error-handling, medium |

### C360-TC-315 — Verify Retry functionality after API failure

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Error Handling |
| Priority | Medium |
| Preconditions | Retry option should be visible |
| Test Data | API Status: 500 |
| Steps | 1. Trigger API failure 2. Click Retry action |
| Expected Result | Application should retry API request and restore data if request succeeds |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | error-handling, medium |

### C360-TC-316 — Verify handling of partial widget failures

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Error Handling |
| Priority | High |
| Preconditions | Partial widget failure should be simulated |
| Test Data | Widget: Risk Chart |
| Steps | 1. Trigger failure for one widget 2. Observe remaining widgets |
| Expected Result | Remaining widgets should continue rendering successfully without affecting complete page |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | error-handling, high |

### C360-TC-317 — Verify timeout message visibility during delayed responses

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Error Handling |
| Priority | Medium |
| Preconditions | Response timeout should be simulated |
| Test Data | Response Delay: 60 Seconds |
| Steps | 1. Trigger delayed response scenario 2. Observe timeout behavior |
| Expected Result | Timeout notification or message should display correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | error-handling, medium, session |

### C360-TC-318 — Verify unauthorized access handling within Customer 360

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Error Handling |
| Priority | High |
| Preconditions | Unauthorized session should exist |
| Test Data | Unauthorized User: analyst_guest |
| Steps | 1. Attempt access using unauthorized session |
| Expected Result | Application should redirect user or display unauthorized access message appropriately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | error-handling, high, rbac, security |

### C360-TC-319 — Verify session expiry handling within Customer 360

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Error Handling |
| Priority | High |
| Preconditions | Session expiry scenario should be simulated |
| Test Data | Session Timeout: 30 Minutes |
| Steps | 1. Allow session to expire 2. Attempt Customer 360 interaction |
| Expected Result | Session expiry notification or redirect should occur correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | error-handling, high, session |

### C360-TC-320 — Verify frontend recovery after API restoration

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Error Handling |
| Priority | Medium |
| Preconditions | API recovery scenario should exist |
| Test Data | API Status: Restored |
| Steps | 1. Trigger API failure 2. Restore API 3. Retry request |
| Expected Result | Application should recover successfully without requiring manual browser refresh |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | error-handling, medium, functional |

### C360-TC-321 — Verify keyboard navigation across Customer 360 tabs

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accessibility |
| Priority | Medium |
| Preconditions | Keyboard navigation should be supported |
| Test Data | Keyboard Key: Tab |
| Steps | 1. Use keyboard Tab key to navigate across tabs |
| Expected Result | Users should be able to navigate successfully across tabs using keyboard controls |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accessibility, medium |

### C360-TC-322 — Verify visibility of keyboard focus indicators

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accessibility |
| Priority | Medium |
| Preconditions | Keyboard navigation should be active |
| Test Data | Keyboard Key: Tab |
| Steps | 1. Navigate using keyboard controls 2. Observe focus indicators |
| Expected Result | Focused elements should display visible focus indicators correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accessibility, medium |

### C360-TC-323 — Verify Enter key interaction with actionable elements

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accessibility |
| Priority | Low |
| Preconditions | Actionable controls should exist |
| Test Data | Key: Enter |
| Steps | 1. Navigate to button using keyboard 2. Press Enter |
| Expected Result | Selected action should trigger successfully using Enter key interaction |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accessibility, low, functional |

### C360-TC-324 — Verify readability under increased browser zoom

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accessibility |
| Priority | Medium |
| Preconditions | Customer 360 page should be accessible |
| Test Data | Browser Zoom: 150% |
| Steps | 1. Increase browser zoom to 150% 2. Observe UI behavior |
| Expected Result | Content should remain readable without clipping, overlap, or layout distortion |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accessibility, medium, browser-compat |

### C360-TC-325 — Verify readability of color-coded badges

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accessibility |
| Priority | Low |
| Preconditions | Color-coded badges should exist |
| Test Data | Badge Types: Risk, Alerts, Filing Status |
| Steps | 1. Observe badge labels across tabs |
| Expected Result | Badge labels should remain readable regardless of applied colors |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accessibility, low, functional |

### C360-TC-326 — Verify table readability on smaller screen resolutions

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accessibility |
| Priority | Medium |
| Preconditions | Customer 360 page should contain large tables |
| Test Data | Resolution: 768x720 |
| Steps | 1. Resize browser to smaller resolution 2. Open Accounts and Transactions tables |
| Expected Result | Tables should remain readable with proper scrolling and without overlapping UI components |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accessibility, medium, functional |

### C360-TC-327 — Verify tooltip accessibility behavior

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Accessibility |
| Priority | Low |
| Preconditions | Tooltip-enabled elements should exist |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Hover over truncated values 2. Navigate using keyboard focus |
| Expected Result | Tooltips should display correctly and remain readable during interaction |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accessibility, low |

### C360-TC-328 — Verify frontend state persistence during tab switching

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | State Management |
| Priority | High |
| Preconditions | Customer 360 page should be accessible |
| Test Data | Active Tab: Transactions |
| Steps | 1. Apply filters in one tab 2. Navigate to another tab 3. Return to original tab |
| Expected Result | Previously applied state and selections should remain preserved correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | state-management, high, functional |

### C360-TC-329 — Verify synchronization of widget rerendering after customer switching

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | State Management |
| Priority | High |
| Preconditions | Both customer types should exist |
| Test Data | Individual: IND1001 Corporate: CORP2001 |
| Steps | 1. Open Individual customer 2. Switch to Corporate customer 3. Observe all widgets |
| Expected Result | All widgets should refresh simultaneously without stale or partially updated data |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | state-management, high, functional |

### C360-TC-330 — Verify prevention of duplicate widget rendering

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | State Management |
| Priority | Medium |
| Preconditions | Rapid interactions should be possible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Rapidly switch tabs and customer types 2. Observe widget behavior |
| Expected Result | No duplicate widgets, duplicate cards, or repeated UI components should appear |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | state-management, medium, functional |

### C360-TC-331 — Verify frontend stability during rapid user interactions

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | State Management |
| Priority | Medium |
| Preconditions | User should be on Customer 360 page |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Rapidly switch tabs 2. Apply filters repeatedly 3. Expand rows rapidly |
| Expected Result | Application should remain responsive without crashes, freezes, or rendering issues |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | state-management, medium, functional |

### C360-TC-332 — Verify removal of broken placeholders after rerender

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | State Management |
| Priority | Medium |
| Preconditions | Loading placeholders should exist |
| Test Data | Customer Switch: IND1001 to CORP2001 |
| Steps | 1. Trigger rerender 2. Observe placeholder behavior |
| Expected Result | Loaders and placeholders should disappear correctly after successful rendering |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | state-management, medium, functional |

### C360-TC-333 — Verify removal of stale tooltips after rerender

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | State Management |
| Priority | Low |
| Preconditions | Tooltip-enabled fields should exist |
| Test Data | Customer IDs: IND1001 and CORP2001 |
| Steps | 1. Hover over tooltip field 2. Switch customer type |
| Expected Result | Old tooltips should disappear correctly after rerender |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | state-management, low, functional |

### C360-TC-334 — Verify frontend memory stability during prolonged usage

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | State Management |
| Priority | Medium |
| Preconditions | Long session usage scenario should exist |
| Test Data | Session Duration: 2 Hours |
| Steps | 1. Continuously navigate and interact with module for extended duration |
| Expected Result | Application should remain stable without noticeable performance degradation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | state-management, medium, functional |

### C360-TC-335 — Verify frontend console stability during prolonged usage

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | State Management |
| Priority | Medium |
| Preconditions | User should have browser console access |
| Test Data | Session Duration: 2 Hours |
| Steps | 1. Open browser developer console 2. Continuously interact with Customer 360 |
| Expected Result | No JavaScript errors, memory exceptions, or rendering failures should appear during prolonged usage |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | state-management, medium, error-handling |

### C360-TC-336 — Verify consistency of badge styling across Customer 360 module

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Global UI Consistency |
| Priority | Low |
| Preconditions | Multiple badge types should exist |
| Test Data | Badge Types: Risk, Alerts, Filing Status |
| Steps | 1. Navigate across all tabs 2. Observe badge styling |
| Expected Result | All badges should maintain consistent colors, padding, fonts, and alignment |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | global-ui-consistency, low, functional |

### C360-TC-337 — Verify consistency of table styling across Customer 360 module

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Global UI Consistency |
| Priority | Low |
| Preconditions | Multiple tables should exist |
| Test Data | Tables: Accounts, Transactions, Alerts |
| Steps | 1. Navigate across all table-based tabs 2. Observe table styling |
| Expected Result | All tables should maintain consistent borders, spacing, row height, and typography |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | global-ui-consistency, low, functional |

### C360-TC-338 — Verify consistency of font rendering across Customer 360 module

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Global UI Consistency |
| Priority | Low |
| Preconditions | Customer 360 page should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Navigate across all tabs 2. Observe typography consistency |
| Expected Result | Fonts, font sizes, and font weights should remain visually consistent throughout module |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | global-ui-consistency, low, functional |

### C360-TC-339 — Verify consistency of spacing and padding across widgets

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Global UI Consistency |
| Priority | Low |
| Preconditions | Multiple widgets should exist |
| Test Data | Widgets: KPI Cards, Tables, Charts |
| Steps | 1. Observe widget spacing across tabs |
| Expected Result | Spacing and padding should remain visually consistent without irregular gaps |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | global-ui-consistency, low, functional |

### C360-TC-340 — Verify Customer 360 behavior on Google Chrome

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Browser Compatibility |
| Priority | High |
| Preconditions | Google Chrome browser should be available |
| Test Data | Browser: Chrome Latest |
| Steps | 1. Open Customer 360 module in Chrome 2. Perform navigation and interactions |
| Expected Result | Customer 360 module should function correctly without browser-specific rendering issues |
| Automation Candidate | No |
| Automation Layer | Manual |
| Tags | browser-compatibility, high, browser-compat |

### C360-TC-341 — Verify Customer 360 behavior on Microsoft Edge

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Browser Compatibility |
| Priority | Medium |
| Preconditions | Microsoft Edge browser should be available |
| Test Data | Browser: Edge Latest |
| Steps | 1. Open Customer 360 module in Edge 2. Perform navigation and interactions |
| Expected Result | Customer 360 module should function correctly without browser-specific rendering issues |
| Automation Candidate | No |
| Automation Layer | Manual |
| Tags | browser-compatibility, medium, browser-compat |

### C360-TC-342 — Verify Customer 360 behavior on Mozilla Firefox

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Browser Compatibility |
| Priority | Medium |
| Preconditions | Mozilla Firefox browser should be available |
| Test Data | Browser: Firefox Latest |
| Steps | 1. Open Customer 360 module in Firefox 2. Perform navigation and interactions |
| Expected Result | Customer 360 module should function correctly without browser-specific rendering issues |
| Automation Candidate | No |
| Automation Layer | Manual |
| Tags | browser-compatibility, medium, browser-compat |

### C360-TC-343 — Verify user session persistence during Customer 360 usage

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Session Management |
| Priority | High |
| Preconditions | User should be logged into application |
| Test Data | Session Timeout: 30 Minutes |
| Steps | 1. Navigate across Customer 360 module 2. Perform interactions |
| Expected Result | User session should remain active without unexpected logout |
| Automation Candidate | No |
| Automation Layer | Manual |
| Tags | session-management, high, session |

### C360-TC-344 — Verify automatic logout after session expiration

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Session Management |
| Priority | High |
| Preconditions | Session timeout should be configured |
| Test Data | Session Timeout: 30 Minutes |
| Steps | 1. Remain inactive until timeout occurs |
| Expected Result | User should be logged out automatically after configured inactivity duration |
| Automation Candidate | No |
| Automation Layer | Manual |
| Tags | session-management, high, session |

### C360-TC-345 — Verify redirect behavior after session expiration

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Session Management |
| Priority | High |
| Preconditions | Session expiration should occur |
| Test Data | Session Timeout: 30 Minutes |
| Steps | 1. Allow session to expire 2. Attempt module interaction |
| Expected Result | User should be redirected to login page or session expired screen |
| Automation Candidate | No |
| Automation Layer | Manual |
| Tags | session-management, high, session |

### C360-TC-346 — Verify Customer 360 initial page load performance

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Performance Validation |
| Priority | Medium |
| Preconditions | Stable network connection should exist |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Customer 360 page 2. Measure load duration |
| Expected Result | Customer 360 page should load within acceptable performance threshold |
| Automation Candidate | No |
| Automation Layer | Manual |
| Tags | performance-validation, medium, performance |

### C360-TC-347 — Verify performance during large transaction dataset rendering

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Performance Validation |
| Priority | High |
| Preconditions | Large transaction dataset should exist |
| Test Data | Transaction Count: 10000 |
| Steps | 1. Open customer with high transaction volume |
| Expected Result | Transactions tab should remain usable without severe lag or rendering failures |
| Automation Candidate | No |
| Automation Layer | Manual |
| Tags | performance-validation, high, performance |

### C360-TC-348 — Verify performance during large audit dataset rendering

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Performance Validation |
| Priority | Medium |
| Preconditions | Large audit dataset should exist |
| Test Data | Audit Record Count: 5000 |
| Steps | 1. Open customer with high audit volume |
| Expected Result | Audit tab should remain responsive without browser freeze or crash |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | performance-validation, medium, performance |

### C360-TC-349 — Verify performance during repeated customer switching

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Performance Validation |
| Priority | Medium |
| Preconditions | Multiple customer profiles should exist |
| Test Data | Customer Switch Count: 25 |
| Steps | 1. Rapidly switch customer profiles multiple times |
| Expected Result | Application should remain stable without memory leaks or rendering degradation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | performance-validation, medium, performance |

### C360-TC-350 — Verify performance during simultaneous widget rendering

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Performance Validation |
| Priority | Medium |
| Preconditions | All widgets should be enabled |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open Customer 360 page 2. Observe rendering behavior |
| Expected Result | Widgets should render smoothly without excessive loading delays |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | performance-validation, medium, performance |

### C360-TC-351 — Verify prevention of unauthorized tab access

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Security Validation |
| Priority | High |
| Preconditions | Restricted user account should exist |
| Test Data | User Role: Limited Analyst |
| Steps | 1. Login using restricted user 2. Attempt direct tab access |
| Expected Result | Unauthorized tabs should remain inaccessible and appropriate message should display |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | security-validation, high, rbac, security |

### C360-TC-352 — Verify prevention of direct URL manipulation

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Security Validation |
| Priority | High |
| Preconditions | Restricted user account should exist |
| Test Data | User Role: Limited Analyst |
| Steps | 1. Modify URL manually to restricted section |
| Expected Result | Application should block unauthorized access attempts through URL manipulation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | security-validation, high, rbac, security |

### C360-TC-353 — Verify masking persistence during export operations

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Security Validation |
| Priority | High |
| Preconditions | Masked PII data should exist |
| Test Data | Export Format: CSV |
| Steps | 1. Perform export operation 2. Review exported content |
| Expected Result | Sensitive information should remain masked in exported files wherever applicable |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | security-validation, high, export |

### C360-TC-354 — Verify prevention of sensitive data exposure in browser console

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Security Validation |
| Priority | High |
| Preconditions | Sensitive customer data should exist |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open browser console 2. Navigate across module |
| Expected Result | Sensitive customer information should not appear within console logs |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | security-validation, high, browser-compat |

### C360-TC-355 — Verify prevention of sensitive data exposure in page source

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Security Validation |
| Priority | High |
| Preconditions | Sensitive customer data should exist |
| Test Data | PAN: ABCDE1234F |
| Steps | 1. Open browser page source 2. Search for sensitive values |
| Expected Result | Sensitive values should not appear exposed within page source or hidden fields |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | security-validation, high, functional |

### C360-TC-356 — Verify readability of KPI cards within Customer 360

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Usability Validation |
| Priority | Low |
| Preconditions | KPI widgets should exist |
| Test Data | KPI Types: Risk, Alerts, Accounts |
| Steps | 1. Observe KPI cards across module |
| Expected Result | KPI cards should remain readable with proper alignment and spacing |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | usability-validation, low, functional |

### C360-TC-357 — Verify readability of charts and graphs

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Usability Validation |
| Priority | Low |
| Preconditions | Charts should exist |
| Test Data | Charts: Risk, KYC Evolution |
| Steps | 1. Navigate across chart-based tabs |
| Expected Result | Charts and graphs should remain visually clear and understandable |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | usability-validation, low, functional |

### C360-TC-358 — Verify consistency of action button placement

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Usability Validation |
| Priority | Low |
| Preconditions | Action buttons should exist across tabs |
| Test Data | Buttons: Export, Re-Screen, Review |
| Steps | 1. Navigate across all tabs 2. Observe action button positions |
| Expected Result | Action buttons should remain consistently aligned throughout module |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | usability-validation, low, functional |

### C360-TC-359 — Verify readability of status indicators

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Usability Validation |
| Priority | Low |
| Preconditions | Status indicators should exist |
| Test Data | Statuses: Active, Pending, Filed |
| Steps | 1. Observe all status indicators |
| Expected Result | Status indicators should remain visually readable and distinguishable |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | usability-validation, low, functional |

### C360-TC-360 — Verify complete Customer 360 workflow navigation

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regression Validation |
| Priority | High |
| Preconditions | Customer 360 page should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Navigate across all tabs sequentially 2. Perform basic interactions |
| Expected Result | Complete Customer 360 workflow should function without broken navigation or rendering issues |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-validation, high, regression, e2e |

### C360-TC-361 — Verify consistency of customer identity across all tabs

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regression Validation |
| Priority | High |
| Preconditions | Customer profile should exist |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Navigate across all tabs 2. Observe customer details |
| Expected Result | Customer identity information should remain consistent across all tabs |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-validation, high, functional |

### C360-TC-362 — Verify synchronization of alert counts across module

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regression Validation |
| Priority | High |
| Preconditions | Active alerts should exist |
| Test Data | Open Alerts: 5 |
| Steps | 1. Observe alert counts across Header, Overview, and Alerts tabs |
| Expected Result | Alert counts should remain synchronized across all displayed sections |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-validation, high, functional |

### C360-TC-363 — Verify synchronization of risk scores across module

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regression Validation |
| Priority | High |
| Preconditions | Risk score should exist |
| Test Data | Risk Score: 82 |
| Steps | 1. Observe risk score across Header, Overview, and Risk tabs |
| Expected Result | Risk scores should remain synchronized across all displayed sections |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-validation, high, functional |

### C360-TC-364 — Verify synchronization of KYC Gap Scores across module

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regression Validation |
| Priority | High |
| Preconditions | KYC Gap Score should exist |
| Test Data | KYC Gap Score: 28 |
| Steps | 1. Observe KYC Gap Score across Overview and KYC Gap Report tabs |
| Expected Result | KYC Gap Scores should remain synchronized across all displayed sections |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-validation, high, functional |

### C360-TC-365 — Verify overall UI stability during complete workflow execution

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regression Validation |
| Priority | High |
| Preconditions | Customer 360 page should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Navigate across all tabs 2. Perform interactions sequentially |
| Expected Result | Application should remain stable without crashes, freezes, or rendering failures |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-validation, high, regression, e2e |

### C360-TC-366 — Verify absence of stale data across complete workflow

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regression Validation |
| Priority | High |
| Preconditions | Multiple customer profiles should exist |
| Test Data | Customer IDs: IND1001 and CORP2001 |
| Steps | 1. Switch between customers 2. Navigate across tabs |
| Expected Result | No stale values, widgets, or records should remain visible during workflow |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-validation, high, regression, e2e |

### C360-TC-367 — Verify overall frontend console stability across Customer 360 module

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regression Validation |
| Priority | Medium |
| Preconditions | User should have browser console access |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Open browser console 2. Perform complete Customer 360 workflow |
| Expected Result | No JavaScript errors, rendering failures, or unhandled exceptions should appear |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-validation, medium, error-handling |

### C360-TC-368 — Verify complete Customer 360 responsiveness across module

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regression Validation |
| Priority | Medium |
| Preconditions | Responsive resolutions should be tested |
| Test Data | Resolution: 768x720, 1024x768, 1440x900 |
| Steps | 1. Resize browser across supported resolutions |
| Expected Result | Complete module should remain visually stable and usable across supported resolutions |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-validation, medium, functional |

### C360-TC-369 — Verify complete Customer 360 module under slow network conditions

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regression Validation |
| Priority | Medium |
| Preconditions | Slow network simulation should be enabled |
| Test Data | Network Profile: Slow 3G |
| Steps | 1. Enable slow network 2. Perform complete Customer 360 workflow |
| Expected Result | Application should remain stable with proper loaders and recovery behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-validation, medium, performance |

### C360-TC-370 — Verify enterprise-level end-to-end Customer 360 workflow stability

| Field | Value |
| --- | --- |
| Module | Customer 360 |
| Feature | Regression Validation |
| Priority | High |
| Preconditions | All module components should be accessible |
| Test Data | Customer ID: CUST1001 |
| Steps | 1. Execute complete Customer 360 workflow including navigation, filtering, export, rerendering, and interactions |
| Expected Result | Complete Customer 360 workflow should execute successfully without data inconsistency, UI breakage, performance degradation, or frontend failures |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-validation, high, error-handling |
