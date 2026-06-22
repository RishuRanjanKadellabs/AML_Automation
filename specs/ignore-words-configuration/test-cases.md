# Ignore Words Configuration — Detailed Test Cases (223)

### IWC-TC-001 — Verify Ignore Words Configuration page loads successfully

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Page Framework |
| Priority | High |
| Preconditions | User should be logged into AML application with access to Ignore Words Configuration module |
| Test Data | User Role: Compliance Officer |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Inspect page layout and UI components: Ignore Words Configuration page loads successfully >> Step 4: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 5: Apply test data — User Role: Compliance Officer >> Step 6: Compare actual result with expected result: Ignore Words Configuration page should load successfully with all layout sections rendered correctly without layout issues or frontend errors. |
| Acceptance Criteria | The system should load the Ignore Words Configuration module with sidebar, top bar, tabs, toolbar, table, and status bar without UI distortion or console errors |
| Expected Result | Ignore Words Configuration page should load successfully with all layout sections rendered correctly without layout issues or frontend errors. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, high, error-handling |

### IWC-TC-002 — Verify navigation path via Configuration sidebar menu

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Page Framework |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; user navigated to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; User should have access to Configuration menu |
| Test Data | Navigation Path: Configuration → Ignore Words Configuration |
| Steps | Step 1: Inspect page layout and UI components: navigation path via Configuration sidebar menu >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Navigation Path: Configuration → Ignore Words Configuration >> Step 4: Compare actual result with expected result: User should navigate successfully to Ignore Words Configuration screen. All UI sections render without layout distortion or console errors |
| Acceptance Criteria | The module should be accessible via Configuration → Ignore Words Configuration in the left navigation sidebar |
| Expected Result | User should navigate successfully to Ignore Words Configuration screen. All UI sections render without layout distortion or console errors. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, high, functional |

### IWC-TC-003 — Verify active sidebar highlight for Ignore Words Configuration

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Page Framework |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; user navigated to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; User should be on Ignore Words Configuration page |
| Test Data | Active Menu: Ignore Words Configuration |
| Steps | Step 1: Inspect page layout and UI components: active sidebar highlight for Ignore Words Configuration >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Active Menu: Ignore Words Configuration >> Step 4: Compare actual result with expected result: Sidebar item should be highlighted with blue left-border, #EAF2FF background, and #2A53A0 text. All UI sections render without layout distortion or console errors |
| Acceptance Criteria | The Ignore Words Configuration sidebar item should display active styling with blue left-border indicator, background #EAF2FF, and text/border color #2A53A0 |
| Expected Result | Sidebar item should be highlighted with blue left-border, #EAF2FF background, and #2A53A0 text. All UI sections render without layout distortion or console errors. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, medium, functional |

### IWC-TC-004 — Verify full-viewport single-page layout without page-level scrolling

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Page Framework |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; user navigated to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; User should be on Ignore Words Configuration page with sufficient table data |
| Test Data | Table Records: 10+ active ignore words |
| Steps | Step 1: Inspect page layout and UI components: full-viewport single-page layout without page-level scrolling >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Table Records: 10+ active ignore words >> Step 4: Compare actual result with expected result: Only table area and sidebar nav should scroll; outer page should not scroll. All UI sections render without layout distortion or console errors |
| Acceptance Criteria | The application should use full-viewport layout where only internal areas scroll independently |
| Expected Result | Only table area and sidebar nav should scroll; outer page should not scroll. All UI sections render without layout distortion or console errors. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, medium, functional |

### IWC-TC-005 — Verify sidebar fixed width and structure

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Page Framework |
| Priority | Low |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; user navigated to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; User should be on Ignore Words Configuration page |
| Test Data | Sidebar Width: 240px |
| Steps | Step 1: Inspect page layout and UI components: sidebar fixed width and structure >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Sidebar Width: 240px >> Step 4: Compare actual result with expected result: Sidebar should display at 240px with logo, bank name, menu search, and navigation hierarchy. All UI sections render without layout distortion or console errors |
| Acceptance Criteria | The left sidebar should be 240px fixed width containing logo, bank name, menu search, and navigation |
| Expected Result | Sidebar should display at 240px with logo, bank name, menu search, and navigation hierarchy. All UI sections render without layout distortion or console errors. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, low, functional |

### IWC-TC-006 — Verify main content area layout structure

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Page Framework |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; user navigated to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; User should be on Ignore Words Configuration page |
| Test Data | User Role: Compliance Officer; Module: Ignore Words Configuration |
| Steps | Step 1: Inspect page layout and UI components: main content area layout structure >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — User Role: Compliance Officer; Module: Ignore Words Configuration >> Step 4: Compare actual result with expected result: All five main sections should render in correct vertical order. All UI sections render without layout distortion or console errors |
| Acceptance Criteria | Main content should follow Top Bar → Tabs Bar → Toolbar → Table Area → Status Bar |
| Expected Result | All five main sections should render in correct vertical order. All UI sections render without layout distortion or console errors. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, medium, functional |

### IWC-TC-007 — Verify top bar height and user information display

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Page Framework |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; user navigated to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration |
| Test Data | Logged-in User: Charu Chauhan |
| Steps | Step 1: Inspect page layout and UI components: top bar height and user information display >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Logged-in User: Charu Chauhan >> Step 4: Compare actual result with expected result: Top bar should be 54px with breadcrumb and user avatar displayed correctly. All UI sections render without layout distortion or console errors |
| Acceptance Criteria | Top bar should be 54px height with breadcrumb left and username plus avatar right |
| Expected Result | Top bar should be 54px with breadcrumb and user avatar displayed correctly. All UI sections render without layout distortion or console errors. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, medium, functional |

### IWC-TC-008 — Verify status bar content and height

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Page Framework |
| Priority | Low |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; user navigated to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; User should be on Ignore Words Configuration page |
| Test Data | License Expiry: June 12, 2026 |
| Steps | Step 1: Inspect page layout and UI components: status bar content and height >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — License Expiry: June 12, 2026 >> Step 4: Compare actual result with expected result: Status bar should display license expiry, copyright, and important links. All UI sections render without layout distortion or console errors |
| Acceptance Criteria | Status bar should be 42px displaying license expiry, copyright, and important links |
| Expected Result | Status bar should display license expiry, copyright, and important links. All UI sections render without layout distortion or console errors. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, low, functional |

### IWC-TC-009 — Verify breadcrumb parent link navigation

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Page Framework |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; user navigated to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; User should be on Ignore Words Configuration page |
| Test Data | Parent Link: Entity Suffixes Screening Configuration |
| Steps | Step 1: Inspect page layout and UI components: breadcrumb parent link navigation >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Parent Link: Entity Suffixes Screening Configuration >> Step 4: Compare actual result with expected result: Parent breadcrumb should navigate to Entity Suffixes Screening Configuration. All UI sections render without layout distortion or console errors |
| Acceptance Criteria | Parent link Entity Suffixes Screening Configuration should be #2A53A0, clickable, and navigate up |
| Expected Result | Parent breadcrumb should navigate to Entity Suffixes Screening Configuration. All UI sections render without layout distortion or console errors. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, medium, functional |

### IWC-TC-010 — Verify breadcrumb current page label

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Page Framework |
| Priority | Low |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; user navigated to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; User should be on Ignore Words Configuration page |
| Test Data | Current Page: Screening – Ignore Words Configuration |
| Steps | Step 1: Inspect page layout and UI components: breadcrumb current page label >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Current Page: Screening – Ignore Words Configuration >> Step 4: Compare actual result with expected result: Current page label should be #161616 with / separator in #D1D5DB. All UI sections render without layout distortion or console errors |
| Acceptance Criteria | Current page Screening – Ignore Words Configuration should be #161616 and non-clickable |
| Expected Result | Current page label should be #161616 with / separator in #D1D5DB. All UI sections render without layout distortion or console errors. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, low, functional |

### IWC-TC-011 — Verify page responsiveness on medium screen resolution

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Page Framework |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; user navigated to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; User should be on Ignore Words Configuration page |
| Test Data | Resolution: 1024x768 |
| Steps | Step 1: Inspect page layout and UI components: page responsiveness on medium screen resolution >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Resolution: 1024x768 >> Step 4: Compare actual result with expected result: Layout should adjust without overlap or broken components. All UI sections render without layout distortion or console errors |
| Acceptance Criteria | Page should render correctly on medium screen resolutions |
| Expected Result | Layout should adjust without overlap or broken components. All UI sections render without layout distortion or console errors. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, medium, functional |

### IWC-TC-012 — Verify page responsiveness on smaller screen resolution

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Page Framework |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; user navigated to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; User should be on Ignore Words Configuration page |
| Test Data | Resolution: 768x720 |
| Steps | Step 1: Inspect page layout and UI components: page responsiveness on smaller screen resolution >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Resolution: 768x720 >> Step 4: Compare actual result with expected result: Components should remain visible without overlap or truncation. All UI sections render without layout distortion or console errors |
| Acceptance Criteria | Page should remain usable on smaller screens |
| Expected Result | Components should remain visible without overlap or truncation. All UI sections render without layout distortion or console errors. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, medium, functional |

### IWC-TC-013 — Verify loading indicator during slow network

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Page Framework |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; user navigated to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; Slow network simulation enabled |
| Test Data | Network Profile: Slow 3G |
| Steps | Step 1: Inspect page layout and UI components: loading indicator during slow network >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Network Profile: Slow 3G >> Step 4: Compare actual result with expected result: Loaders or skeletons should appear until content renders. All UI sections render without layout distortion or console errors |
| Acceptance Criteria | System should display loading indicators under delayed network |
| Expected Result | Loaders or skeletons should appear until content renders. All UI sections render without layout distortion or console errors. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, medium, performance |

### IWC-TC-014 — Verify empty-state when no ignore words exist for tab

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Page Framework |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; user navigated to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; Tab with zero records should exist |
| Test Data | Tab: Inactive (0 records) |
| Steps | Step 1: Inspect page layout and UI components: empty-state when no ignore words exist for tab >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Tab: Inactive (0 records) >> Step 4: Compare actual result with expected result: Table should show No ignore words found for this filter. Empty-state message displayed when tab has zero records |
| Acceptance Criteria | System should display meaningful empty state when tab has no records |
| Expected Result | Table should show No ignore words found for this filter. Empty-state message displayed when tab has zero records. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, high, functional |

### IWC-TC-015 — Verify frontend console stability during page load

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Page Framework |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; user navigated to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; Browser console access available |
| Test Data | User Role: Admin |
| Steps | Step 1: Inspect page layout and UI components: frontend console stability during page load >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — User Role: Admin >> Step 4: Compare actual result with expected result: No JavaScript errors or unhandled exceptions in console. No JavaScript errors or unhandled exceptions during page load |
| Acceptance Criteria | No frontend console errors during module load |
| Expected Result | No JavaScript errors or unhandled exceptions in console. No JavaScript errors or unhandled exceptions during page load. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | page-framework, medium, rbac, security |

### IWC-TC-016 — Verify default Active tab selection on page load

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Tab Bar |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with seed data on Active, Inactive, and Drafted tabs; User opened Ignore Words Configuration page |
| Test Data | Default Tab: Active |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the tab bar showing Active, Inactive, and Drafted Ignore Word tabs with record counts >> Step 4: Perform action: default Active tab selection on page load >> Step 5: Apply test data — Default Tab: Active >> Step 6: Compare actual result with expected result: Active tab selected with #2A53A0 text and 2px bottom border. Tab styling and record count must match the selected status filter |
| Acceptance Criteria | Active tab should be selected by default on page load |
| Expected Result | Active tab selected with #2A53A0 text and 2px bottom border. Tab styling and record count must match the selected status filter. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | tab-bar, high, functional |

### IWC-TC-017 — Verify Active tab dynamic count

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Tab Bar |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with seed data on Active, Inactive, and Drafted tabs; Active ignore words exist |
| Test Data | Expected Count: 10 |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the tab bar showing Active, Inactive, and Drafted Ignore Word tabs with record counts >> Step 4: Perform action: Active tab dynamic count >> Step 5: Apply test data — Expected Count: 10 >> Step 6: Compare actual result with expected result: Active tab count should match active record count. Tab styling and record count must match the selected status filter |
| Acceptance Criteria | Active tab should display Active (n) matching status=active count |
| Expected Result | Active tab count should match active record count. Tab styling and record count must match the selected status filter. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | tab-bar, high, functional |

### IWC-TC-018 — Verify Inactive tab dynamic count

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Tab Bar |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with seed data on Active, Inactive, and Drafted tabs; Inactive records exist |
| Test Data | Expected Count: 2 |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the tab bar showing Active, Inactive, and Drafted Ignore Word tabs with record counts >> Step 4: Perform action: Inactive tab dynamic count >> Step 5: Apply test data — Expected Count: 2 >> Step 6: Compare actual result with expected result: Inactive tab count should be accurate. Tab styling and record count must match the selected status filter |
| Acceptance Criteria | Inactive tab should display Inactive (n) matching inactive records |
| Expected Result | Inactive tab count should be accurate. Tab styling and record count must match the selected status filter. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | tab-bar, high, functional |

### IWC-TC-019 — Verify Drafted Ignore Word tab dynamic count

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Tab Bar |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with seed data on Active, Inactive, and Drafted tabs; Drafted records exist |
| Test Data | Expected Count: 2 |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the tab bar showing Active, Inactive, and Drafted Ignore Word tabs with record counts >> Step 4: Perform action: Drafted Ignore Word tab dynamic count >> Step 5: Apply test data — Expected Count: 2 >> Step 6: Compare actual result with expected result: Drafted tab count should match drafted records. Tab styling and record count must match the selected status filter |
| Acceptance Criteria | Drafted tab should display Drafted Ignore Word (n) |
| Expected Result | Drafted tab count should match drafted records. Tab styling and record count must match the selected status filter. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | tab-bar, high, functional |

### IWC-TC-020 — Verify absence of Pending Approval tab

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Tab Bar |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with seed data on Active, Inactive, and Drafted tabs; User on Ignore Words Configuration page |
| Test Data | User Role: Compliance Officer; Module: Ignore Words Configuration |
| Steps | Step 1: Locate the tab bar showing Active, Inactive, and Drafted Ignore Word tabs with record counts >> Step 2: Perform action: absence of Pending Approval tab >> Step 3: Apply test data — User Role: Compliance Officer; Module: Ignore Words Configuration >> Step 4: Compare actual result with expected result: Only Active, Inactive, and Drafted tabs visible; no Pending Approval tab. Tab styling and record count must match the selected status filter |
| Acceptance Criteria | Pending Approval tab should not be displayed |
| Expected Result | Only Active, Inactive, and Drafted tabs visible; no Pending Approval tab. Tab styling and record count must match the selected status filter. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | tab-bar, high, functional |

### IWC-TC-021 — Verify Inactive tab filters table to inactive records

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Tab Bar |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with seed data on Active, Inactive, and Drafted tabs; Active and inactive records exist |
| Test Data | Inactive Words: offshore account, correspondent banking |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Inactive Words: offshore account, correspondent banking >> Step 7: Compare actual result with expected result: Only inactive records displayed with Inactive status badge. Tab styling and record count must match the selected status filter |
| Acceptance Criteria | Inactive tab should show only status=inactive records |
| Expected Result | Only inactive records displayed with Inactive status badge. Tab styling and record count must match the selected status filter. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | tab-bar, high, functional |

### IWC-TC-022 — Verify Drafted tab filters table to drafted records

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Tab Bar |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with seed data on Active, Inactive, and Drafted tabs; Drafted records exist |
| Test Data | Drafted Words: wire transfer agency, crypto exchange |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Drafted Words: wire transfer agency, crypto exchange >> Step 7: Compare actual result with expected result: Only drafted records displayed. Tab styling and record count must match the selected status filter |
| Acceptance Criteria | Drafted tab should show only status=drafted records |
| Expected Result | Only drafted records displayed. Tab styling and record count must match the selected status filter. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | tab-bar, high, functional |

### IWC-TC-023 — Verify tab switch resets search input

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Tab Bar |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with seed data on Active, Inactive, and Drafted tabs; Search filter applied on current tab |
| Test Data | Search Text: trading |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search Text: trading >> Step 7: Compare actual result with expected result: Search cleared and full dataset shown for new tab. Tab styling and record count must match the selected status filter |
| Acceptance Criteria | Tab switch should clear search and re-render new dataset.. |
| Expected Result | Search cleared and full dataset shown for new tab. Tab styling and record count must match the selected status filter. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | tab-bar, high, functional |

### IWC-TC-024 — Verify inactive tab hover styling

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Tab Bar |
| Priority | Low |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with seed data on Active, Inactive, and Drafted tabs; User on Ignore Words Configuration page |
| Test Data | Tab: Inactive |
| Steps | Step 1: Locate the tab bar showing Active, Inactive, and Drafted Ignore Word tabs with record counts >> Step 2: Perform action: inactive tab hover styling >> Step 3: Apply test data — Tab: Inactive >> Step 4: Compare actual result with expected result: Tab text changes to #374151 on hover. Tab styling and record count must match the selected status filter |
| Acceptance Criteria | Non-active tab hover should change text to #374151 |
| Expected Result | Tab text changes to #374151 on hover. Tab styling and record count must match the selected status filter. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | tab-bar, low, functional |

### IWC-TC-025 — Verify tab count updates after disable action per FSD BR-007

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Tab Bar |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with seed data on Active, Inactive, and Drafted tabs; Admin user; active word exists |
| Test Data | Word: trading company |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Word: trading company >> Step 7: Compare actual result with expected result: Active count decreases and Inactive count increases immediately. Checker Approval popup displayed before status change takes effect |
| Acceptance Criteria | Tab counts update immediately after status change. Per FSD BR-007: enable/disable requires Maker-Checker approval before effective. |
| Expected Result | Active count decreases and Inactive count increases immediately. Checker Approval popup displayed before status change takes effect. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | tab-bar, high, rbac, security |

### IWC-TC-026 — Verify tab count updates after new word submission

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Tab Bar |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with seed data on Active, Inactive, and Drafted tabs; Admin user |
| Test Data | New Word: private limited company |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the tab bar showing Active, Inactive, and Drafted Ignore Word tabs with record counts >> Step 4: Perform action: tab count updates after new word submission >> Step 5: Apply test data — New Word: private limited company >> Step 6: Compare actual result with expected result: Drafted tab count increments immediately. Tab styling and record count must match the selected status filter |
| Acceptance Criteria | Drafted count updates after submitting new word |
| Expected Result | Drafted tab count increments immediately. Tab styling and record count must match the selected status filter. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | tab-bar, high, functional |

### IWC-TC-027 — Verify sorting resets on tab switch

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Tab Bar |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with seed data on Active, Inactive, and Drafted tabs; Column sorted on current tab |
| Test Data | Sort Column: Ignore Word / Phrase |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the tab bar showing Active, Inactive, and Drafted Ignore Word tabs with record counts >> Step 4: Perform action: sorting resets on tab switch >> Step 5: Apply test data — Sort Column: Ignore Word / Phrase >> Step 6: Compare actual result with expected result: Sort order resets to default on tab switch. Tab styling and record count must match the selected status filter |
| Acceptance Criteria | Tab switch resets sort to default insertion order |
| Expected Result | Sort order resets to default on tab switch. Tab styling and record count must match the selected status filter. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | tab-bar, medium, functional |

### IWC-TC-028 — Verify toolbar search input rendering

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Search & Filter |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with multiple ignore word records on current tab; User on Ignore Words Configuration page |
| Test Data | Placeholder: Search ignore words by phrase, category... |
| Steps | Step 1: Enter search/filter term from test data in toolbar >> Step 2: Apply filter and review table results >> Step 3: Clear filter and confirm full list restores >> Step 4: Apply test data — Placeholder: Search ignore words by phrase, category... >> Step 5: Compare actual result with expected result: Search input renders with icon, 300px width, 46px height, correct placeholder. Search applies to current tab; clearing restores the full dataset |
| Acceptance Criteria | Search input 300px width, 46px height, icon prefix, correct placeholder.. |
| Expected Result | Search input renders with icon, 300px width, 46px height, correct placeholder. Search applies to current tab; clearing restores the full dataset. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, medium, functional |

### IWC-TC-029 — Verify real-time search by ignore word phrase

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Search & Filter |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with multiple ignore word records on current tab; Multiple active records exist |
| Test Data | Search Term: trading |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search Term: trading >> Step 7: Compare actual result with expected result: Only rows containing trading in phrase displayed. Search applies to current tab; clearing restores the full dataset |
| Acceptance Criteria | Real-time case-insensitive partial match on Ignore Word/Phrase.. |
| Expected Result | Only rows containing trading in phrase displayed. Search applies to current tab; clearing restores the full dataset. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, high, functional |

### IWC-TC-030 — Verify real-time search by category

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Search & Filter |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with multiple ignore word records on current tab; Multiple categories on Active tab |
| Test Data | Search Term: Common Noise Words |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search Term: Common Noise Words >> Step 7: Compare actual result with expected result: Only Common Noise Words category rows displayed. Search applies to current tab; clearing restores the full dataset |
| Acceptance Criteria | Search matches Category field case-insensitively.. |
| Expected Result | Only Common Noise Words category rows displayed. Search applies to current tab; clearing restores the full dataset. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, high, functional |

### IWC-TC-031 — Verify search excludes Risk Level

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Search & Filter |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with multiple ignore word records on current tab; Records with Low, Medium, High risk exist |
| Test Data | Search Term: High |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search Term: High >> Step 7: Compare actual result with expected result: Rows not returned based solely on Risk Level value. Search applies to current tab; clearing restores the full dataset |
| Acceptance Criteria | Search should not match Risk Level field.. |
| Expected Result | Rows not returned based solely on Risk Level value. Search applies to current tab; clearing restores the full dataset. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, medium, functional |

### IWC-TC-032 — Verify search excludes Match Type

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Search & Filter |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with multiple ignore word records on current tab; Exact phrase and Partial match records exist |
| Test Data | Search Term: Exact phrase |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search Term: Exact phrase >> Step 7: Compare actual result with expected result: Search does not filter by Match Type column. Search applies to current tab; clearing restores the full dataset |
| Acceptance Criteria | Search should not match Match Type field.. |
| Expected Result | Search does not filter by Match Type column. Search applies to current tab; clearing restores the full dataset. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, medium, functional |

### IWC-TC-033 — Verify search excludes Created Date

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Search & Filter |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with multiple ignore word records on current tab; Records with various dates exist |
| Test Data | Search Term: Jan 2026 |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search Term: Jan 2026 >> Step 7: Compare actual result with expected result: Search does not filter by Created Date. Search applies to current tab; clearing restores the full dataset |
| Acceptance Criteria | Search should not match Created Date field.. |
| Expected Result | Search does not filter by Created Date. Search applies to current tab; clearing restores the full dataset. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, medium, functional |

### IWC-TC-034 — Verify search excludes Status

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Search & Filter |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with multiple ignore word records on current tab; User on Active tab |
| Test Data | Search Term: Active |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search Term: Active >> Step 7: Compare actual result with expected result: Search does not filter by Status badge text. Search applies to current tab; clearing restores the full dataset |
| Acceptance Criteria | Search should not match Status field.. |
| Expected Result | Search does not filter by Status badge text. Search applies to current tab; clearing restores the full dataset. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, medium, functional |

### IWC-TC-035 — Verify search empty state message

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Search & Filter |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with multiple ignore word records on current tab; Tab with records exists |
| Test Data | Search Term: xyznonexistent123 |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search Term: xyznonexistent123 >> Step 7: Compare actual result with expected result: Single row with empty state message displayed. Empty-state message displayed when tab has zero records |
| Acceptance Criteria | No results shows No ignore words found for this filter.. |
| Expected Result | Single row with empty state message displayed. Empty-state message displayed when tab has zero records. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, high, functional |

### IWC-TC-036 — Verify search focus state styling

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Search & Filter |
| Priority | Low |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with multiple ignore word records on current tab; User on Ignore Words Configuration page |
| Test Data | Search Term: trading; Tab: Active |
| Steps | Step 1: Enter search/filter term from test data in toolbar >> Step 2: Apply filter and review table results >> Step 3: Clear filter and confirm full list restores >> Step 4: Apply test data — Search Term: trading; Tab: Active >> Step 5: Compare actual result with expected result: Search input shows blue border and focus ring. Search applies to current tab; clearing restores the full dataset |
| Acceptance Criteria | Focus shows border #2A53A0 and ring rgba(42,83,160,0.1).. |
| Expected Result | Search input shows blue border and focus ring. Search applies to current tab; clearing restores the full dataset. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, low, accessibility |

### IWC-TC-037 — Verify clearing search restores full dataset

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Search & Filter |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with multiple ignore word records on current tab; Search filter applied |
| Test Data | Search Term: trading (cleared) |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search Term: trading (cleared) >> Step 7: Compare actual result with expected result: Full tab dataset restored after clearing search. Search applies to current tab; clearing restores the full dataset |
| Acceptance Criteria | Clearing search restores complete current tab data.. |
| Expected Result | Full tab dataset restored after clearing search. Search applies to current tab; clearing restores the full dataset. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, medium, functional |

### IWC-TC-038 — Verify search scoped to current tab only

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Search & Filter |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; on main list view with multiple ignore word records on current tab; Words exist on different tabs |
| Test Data | Active-only Word: trading company |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Active-only Word: trading company >> Step 7: Compare actual result with expected result: Active-only word not returned on Inactive tab search. Search applies to current tab; clearing restores the full dataset |
| Acceptance Criteria | Search filters only records on selected tab.. |
| Expected Result | Active-only word not returned on Inactive tab search. Search applies to current tab; clearing restores the full dataset. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, high, functional |

### IWC-TC-039 — Verify all table column headers

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Table & Sorting |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Active tab selected with sufficient rows for sort testing; Data exists on Active tab |
| Test Data | Columns: Word, Category, Risk, Match Type, Date, Status, Actions |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Ensure ignore word records are displayed in the data table >> Step 4: Perform sorting or pagination action: all table column headers >> Step 5: Apply test data — Columns: Word, Category, Risk, Match Type, Date, Status, Actions >> Step 6: Compare actual result with expected result: All seven columns visible with #2A53A0 header styling. Headers include Word/Phrase, Category, Risk Level, Match Type, Date, Status |
| Acceptance Criteria | Seven columns displayed with correct headers |
| Expected Result | All seven columns visible with #2A53A0 header styling. Headers include Word/Phrase, Category, Risk Level, Match Type, Date, Status. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | table-sorting, high, functional |

### IWC-TC-040 — Verify sticky table header on scroll

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Table & Sorting |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Active tab selected with sufficient rows for sort testing; Enough rows to scroll |
| Test Data | Records: 10+ |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Ensure ignore word records are displayed in the data table >> Step 4: Perform sorting or pagination action: sticky table header on scroll >> Step 5: Apply test data — Records: 10+ >> Step 6: Compare actual result with expected result: Headers remain sticky during scroll. Table displays correct columns, sort order, and pagination |
| Acceptance Criteria | Sticky thead with #F0F0F0 background during scroll |
| Expected Result | Headers remain sticky during scroll. Table displays correct columns, sort order, and pagination. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | table-sorting, medium, functional |

### IWC-TC-041 — Verify table row height and hover

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Table & Sorting |
| Priority | Low |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Active tab selected with sufficient rows for sort testing; User on Active tab |
| Test Data | User Role: Compliance Officer; Module: Ignore Words Configuration |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Ensure ignore word records are displayed in the data table >> Step 4: Perform sorting or pagination action: table row height and hover >> Step 5: Apply test data — User Role: Compliance Officer; Module: Ignore Words Configuration >> Step 6: Compare actual result with expected result: Rows 46px height with hover highlight. Table displays correct columns, sort order, and pagination |
| Acceptance Criteria | Rows 46px with #F9FAFB hover |
| Expected Result | Rows 46px height with hover highlight. Table displays correct columns, sort order, and pagination. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | table-sorting, low, functional |

### IWC-TC-042 — Verify ascending sort on Ignore Word/Phrase

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Table & Sorting |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Active tab selected with sufficient rows for sort testing; Multiple records on Active tab |
| Test Data | Sort: Ascending |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Ensure ignore word records are displayed in the data table >> Step 4: Perform sorting or pagination action: ascending sort on Ignore Word/Phrase >> Step 5: Apply test data — Sort: Ascending >> Step 6: Compare actual result with expected result: Rows sorted alphabetically ascending. Table displays correct columns, sort order, and pagination |
| Acceptance Criteria | Sort button sorts ascending alphabetically |
| Expected Result | Rows sorted alphabetically ascending. Table displays correct columns, sort order, and pagination. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | table-sorting, high, functional |

### IWC-TC-043 — Verify sort cycle ascending descending default

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Table & Sorting |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Active tab selected with sufficient rows for sort testing; Multiple records exist |
| Test Data | Column: Category |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Ensure ignore word records are displayed in the data table >> Step 4: Perform sorting or pagination action: sort cycle ascending descending default >> Step 5: Apply test data — Column: Category >> Step 6: Compare actual result with expected result: Sort cycles through all three states. Table displays correct columns, sort order, and pagination |
| Acceptance Criteria | Sort cycles ascending → descending → default |
| Expected Result | Sort cycles through all three states. Table displays correct columns, sort order, and pagination. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | table-sorting, medium, functional |

### IWC-TC-044 — Verify sort icons on sortable columns

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Table & Sorting |
| Priority | Low |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Active tab selected with sufficient rows for sort testing; User on page with data |
| Test Data | Column: Ignore Word/Phrase; Sort: ascending then descending |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Ensure ignore word records are displayed in the data table >> Step 4: Perform sorting or pagination action: sort icons on sortable columns >> Step 5: Apply test data — Column: Ignore Word/Phrase; Sort: ascending then descending >> Step 6: Compare actual result with expected result: Sort icons visible on six sortable columns. Table displays correct columns, sort order, and pagination |
| Acceptance Criteria | Up-down arrow on all sortable columns |
| Expected Result | Sort icons visible on six sortable columns. Table displays correct columns, sort order, and pagination. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | table-sorting, low, functional |

### IWC-TC-045 — Verify Actions column not sortable

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Table & Sorting |
| Priority | Low |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Active tab selected with sufficient rows for sort testing; User on page |
| Test Data | Column: Actions |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Ensure ignore word records are displayed in the data table >> Step 4: Perform sorting or pagination action: Actions column not sortable >> Step 5: Apply test data — Column: Actions >> Step 6: Compare actual result with expected result: Actions column has no sort button. Table displays correct columns, sort order, and pagination |
| Acceptance Criteria | Actions column has no sort |
| Expected Result | Actions column has no sort button. Table displays correct columns, sort order, and pagination. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | table-sorting, low, functional |

### IWC-TC-046 — Verify Created Date DD Mon YYYY format

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Table & Sorting |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Active tab selected with sufficient rows for sort testing; Records with dates exist |
| Test Data | Example: 01 Jan 2026 |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Ensure ignore word records are displayed in the data table >> Step 4: Perform sorting or pagination action: Created Date DD Mon YYYY format >> Step 5: Apply test data — Example: 01 Jan 2026 >> Step 6: Compare actual result with expected result: Dates in correct format. Table displays correct columns, sort order, and pagination |
| Acceptance Criteria | Dates display as DD Mon YYYY in #374151 |
| Expected Result | Dates in correct format. Table displays correct columns, sort order, and pagination. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | table-sorting, medium, functional |

### IWC-TC-047 — Verify Entity Suffixes category badge colour styling

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Badges |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Record with Entity Suffixes category exists |
| Test Data | Category: Entity Suffixes |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Entity Suffixes category badge colour styling >> Step 5: Apply test data — Category: Entity Suffixes >> Step 6: Compare actual result with expected result: Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category |
| Acceptance Criteria | Entity Suffixes badge should use background #FFF7ED, text #C2410C, border #FED7AA |
| Expected Result | Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-badges, medium, functional |

### IWC-TC-048 — Verify Common Noise Words category badge colour styling

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Badges |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Record with Common Noise Words category exists |
| Test Data | Category: Common Noise Words |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Common Noise Words category badge colour styling >> Step 5: Apply test data — Category: Common Noise Words >> Step 6: Compare actual result with expected result: Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category |
| Acceptance Criteria | Common Noise Words badge should use background #FEF2F2, text #B91C1C, border #FECACA |
| Expected Result | Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-badges, medium, functional |

### IWC-TC-049 — Verify Personal Titles (Politically Exposed Persons) category badge colour styling

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Badges |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Record with Personal Titles (Politically Exposed Persons) category exists |
| Test Data | Category: Personal Titles (Politically Exposed Persons) |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Personal Titles (Politically Exposed Persons) category badge colour styling >> Step 5: Apply test data — Category: Personal Titles (Politically Exposed Persons) >> Step 6: Compare actual result with expected result: Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category |
| Acceptance Criteria | Personal Titles (Politically Exposed Persons) badge should use background #F0FDF4, text #166534, border #BBF7D0 |
| Expected Result | Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-badges, medium, functional |

### IWC-TC-050 — Verify Business Descriptors category badge colour styling

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Badges |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Record with Business Descriptors category exists |
| Test Data | Category: Business Descriptors |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Business Descriptors category badge colour styling >> Step 5: Apply test data — Category: Business Descriptors >> Step 6: Compare actual result with expected result: Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category |
| Acceptance Criteria | Business Descriptors badge should use background #EFF6FF, text #1D4ED8, border #BFDBFE |
| Expected Result | Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-badges, medium, functional |

### IWC-TC-051 — Verify Low risk level pill badge rendering

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Risk Level Badges |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Record with Low risk exists |
| Test Data | Risk Level: Low |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Low risk level pill badge rendering >> Step 5: Apply test data — Risk Level: Low >> Step 6: Compare actual result with expected result: Low risk pill badge displays with correct styling. Badge reflects correct Low/Medium/High risk styling |
| Acceptance Criteria | Low risk should display as rounded pill with correct colour coding |
| Expected Result | Low risk pill badge displays with correct styling. Badge reflects correct Low/Medium/High risk styling. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-level-badges, medium, functional |

### IWC-TC-052 — Verify Medium risk level pill badge rendering

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Risk Level Badges |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Record with Medium risk exists |
| Test Data | Risk Level: Medium |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Medium risk level pill badge rendering >> Step 5: Apply test data — Risk Level: Medium >> Step 6: Compare actual result with expected result: Medium risk pill badge displays with correct styling. Badge reflects correct Low/Medium/High risk styling |
| Acceptance Criteria | Medium risk should display as rounded pill with correct colour coding |
| Expected Result | Medium risk pill badge displays with correct styling. Badge reflects correct Low/Medium/High risk styling. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-level-badges, medium, functional |

### IWC-TC-053 — Verify High risk level pill badge rendering

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Risk Level Badges |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Record with High risk exists |
| Test Data | Risk Level: High |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: High risk level pill badge rendering >> Step 5: Apply test data — Risk Level: High >> Step 6: Compare actual result with expected result: High risk pill badge displays with correct styling. Badge reflects correct Low/Medium/High risk styling |
| Acceptance Criteria | High risk should display as rounded pill with correct colour coding |
| Expected Result | High risk pill badge displays with correct styling. Badge reflects correct Low/Medium/High risk styling. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | risk-level-badges, medium, functional |

### IWC-TC-054 — Verify Exact phrase match type badge

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Match Type Badges |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Exact phrase record exists |
| Test Data | Match Type: Exact phrase |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Exact phrase match type badge >> Step 5: Apply test data — Match Type: Exact phrase >> Step 6: Compare actual result with expected result: Exact phrase badge displays with green border styling. Badge shows Exact phrase or Partial match correctly |
| Acceptance Criteria | Exact phrase badge should have green border styling |
| Expected Result | Exact phrase badge displays with green border styling. Badge shows Exact phrase or Partial match correctly. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | match-type-badges, medium, functional |

### IWC-TC-055 — Verify Partial match match type badge

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Match Type Badges |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Partial match record exists |
| Test Data | Match Type: Partial match |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Partial match match type badge >> Step 5: Apply test data — Match Type: Partial match >> Step 6: Compare actual result with expected result: Partial match badge displays with grey border styling. Badge shows Exact phrase or Partial match correctly |
| Acceptance Criteria | Partial match badge should have grey border styling |
| Expected Result | Partial match badge displays with grey border styling. Badge shows Exact phrase or Partial match correctly. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | match-type-badges, medium, functional |

### IWC-TC-056 — Verify Active status badge styling

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Status Badges |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Record with active status exists |
| Test Data | Status: Active |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Active status badge styling >> Step 5: Apply test data — Status: Active >> Step 6: Compare actual result with expected result: Active status badge displays correct pill styling centred in column. Badge shows correct Active/Inactive/Drafted status |
| Acceptance Criteria | Active status badge background #DCFCE7 text #166534 |
| Expected Result | Active status badge displays correct pill styling centred in column. Badge shows correct Active/Inactive/Drafted status. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | status-badges, medium, functional |

### IWC-TC-057 — Verify Inactive status badge styling

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Status Badges |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Record with inactive status exists |
| Test Data | Status: Inactive |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Inactive status badge styling >> Step 5: Apply test data — Status: Inactive >> Step 6: Compare actual result with expected result: Inactive status badge displays correct pill styling centred in column. Badge shows correct Active/Inactive/Drafted status |
| Acceptance Criteria | Inactive status badge background #F3F4F6 text #6B7280 |
| Expected Result | Inactive status badge displays correct pill styling centred in column. Badge shows correct Active/Inactive/Drafted status. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | status-badges, medium, functional |

### IWC-TC-058 — Verify Drafted status badge styling

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Status Badges |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Record with drafted status exists |
| Test Data | Status: Drafted |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Drafted status badge styling >> Step 5: Apply test data — Status: Drafted >> Step 6: Compare actual result with expected result: Drafted status badge displays correct pill styling centred in column. Badge shows correct Active/Inactive/Drafted status |
| Acceptance Criteria | Drafted status badge background #FEF3C7 text #92400E |
| Expected Result | Drafted status badge displays correct pill styling centred in column. Badge shows correct Active/Inactive/Drafted status. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | status-badges, medium, functional |

### IWC-TC-059 — Verify Disable (Off) button on active rows

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Row Actions |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Active record exists; Admin user |
| Test Data | Word: trading company |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Word: trading company >> Step 7: Compare actual result with expected result: Off button visible with red tint styling on active row. Checker Approval popup displayed before status change takes effect |
| Acceptance Criteria | Active rows show 32x32px red-tint Off button per FSD row actions column |
| Expected Result | Off button visible with red tint styling on active row. Checker Approval popup displayed before status change takes effect. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | row-actions, high, functional |

### IWC-TC-060 — Verify Enable (On) button on inactive rows

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Row Actions |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Inactive record exists; Admin user |
| Test Data | Word: offshore account |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Word: offshore account >> Step 7: Compare actual result with expected result: On button visible with green tint styling on inactive row. Checker Approval popup displayed before status change takes effect |
| Acceptance Criteria | Inactive rows show 32x32px green-tint On button. Per FSD BR-007: enable/disable requires Maker-Checker approval before effective. |
| Expected Result | On button visible with green tint styling on inactive row. Checker Approval popup displayed before status change takes effect. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | row-actions, high, rbac, security |

### IWC-TC-061 — Verify Submit action on drafted rows

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Row Actions |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Drafted record exists; Admin user |
| Test Data | Word: crypto exchange |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Fill Word/Phrase, Category, Risk Level, and Match Type >> Step 4: Click Submit for Checker approval (FSD Section 4.3 Step 8b) >> Step 5: Verify Checker Approval modal opens >> Step 6: Confirm record appears on Drafted tab and is not active until approved (FSD Section 7.1) >> Step 7: Apply test data — Word: crypto exchange >> Step 8: Compare actual result with expected result: Submit button displayed on drafted rows. Record on Drafted tab; Checker modal shown; not active until approved (FSD 7.1) |
| Acceptance Criteria | Drafted rows show Submit action per FSD row actions column |
| Expected Result | Submit button displayed on drafted rows. Record on Drafted tab; Checker modal shown; not active until approved (FSD 7.1). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | row-actions, high, functional |

### IWC-TC-062 — Verify disable action triggers Checker Approval popup

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Row Actions |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Admin user; active word exists |
| Test Data | Word: trading company |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Word: trading company >> Step 7: Compare actual result with expected result: Checker Approval popup shown with disable message and Pending Checker status. Checker Approval popup displayed before status change takes effect |
| Acceptance Criteria | Disabling active word triggers Checker Approval popup per FSD row actions column |
| Expected Result | Checker Approval popup shown with disable message and Pending Checker status. Checker Approval popup displayed before status change takes effect. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | row-actions, high, rbac, security |

### IWC-TC-063 — Verify enable action triggers Checker Approval popup

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Row Actions |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Admin user; inactive word exists |
| Test Data | Word: offshore account |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the target ignore word row using test data >> Step 4: Click the applicable row action button (On/Off/Submit/History) >> Step 5: Observe system response including any Checker Approval popup >> Step 6: Apply test data — Word: offshore account >> Step 7: Compare actual result with expected result: Checker Approval popup shown with enable message. Checker Approval popup displayed before status change takes effect |
| Acceptance Criteria | Enabling inactive word triggers Checker Approval popup. Per FSD BR-007: enable/disable requires Maker-Checker approval before effective. |
| Expected Result | Checker Approval popup shown with enable message. Checker Approval popup displayed before status change takes effect. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | row-actions, high, rbac, security |

### IWC-TC-064 — Verify drafted Submit triggers Checker Approval popup

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Row Actions |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Admin user; drafted word exists |
| Test Data | Word: wire transfer agency |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Fill Word/Phrase, Category, Risk Level, and Match Type >> Step 4: Click Submit for Checker approval (FSD Section 4.3 Step 8b) >> Step 5: Verify Checker Approval modal opens >> Step 6: Confirm record appears on Drafted tab and is not active until approved (FSD Section 7.1) >> Step 7: Apply test data — Word: wire transfer agency >> Step 8: Compare actual result with expected result: Checker Approval popup shown for drafted submission. Checker Approval popup shown where Maker-Checker applies (FSD BR-007) |
| Acceptance Criteria | Submit on drafted row triggers Checker Approval popup |
| Expected Result | Checker Approval popup shown for drafted submission. Checker Approval popup shown where Maker-Checker applies (FSD BR-007). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | row-actions, high, rbac, security |

### IWC-TC-065 — Verify absence of Delete action per FSD BR-006

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Row Actions |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Admin user on any tab |
| Test Data | User Role: Compliance Officer; Module: Ignore Words Configuration |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the target ignore word row using test data >> Step 4: Click the applicable row action button (On/Off/Submit/History) >> Step 5: Observe system response including any Checker Approval popup >> Step 6: Apply test data — User Role: Compliance Officer; Module: Ignore Words Configuration >> Step 7: Compare actual result with expected result: No delete action visible; disable is only deactivation method. No delete option; disable is the only deactivation method (FSD BR-006) |
| Acceptance Criteria | Delete action should not be available; records can only be disabled. Per FSD BR-006: no hard delete; disable only. |
| Expected Result | No delete action visible; disable is only deactivation method. No delete option; disable is the only deactivation method (FSD BR-006). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | row-actions, high, functional |

### IWC-TC-066 — Verify row action updates tab counts immediately

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Row Actions |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Admin user; active word exists |
| Test Data | Word: international trade |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the target ignore word row using test data >> Step 4: Click the applicable row action button (On/Off/Submit/History) >> Step 5: Observe system response including any Checker Approval popup >> Step 6: Apply test data — Word: international trade >> Step 7: Compare actual result with expected result: Tab counts update immediately after action. Checker Approval popup shown where Maker-Checker applies (FSD BR-007) |
| Acceptance Criteria | Status change updates tab counts per FSD BR-007 |
| Expected Result | Tab counts update immediately after action. Checker Approval popup shown where Maker-Checker applies (FSD BR-007). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | row-actions, high, functional |

### IWC-TC-067 — Verify Export button visibility in toolbar (FSD Section 5.1.4)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Export Functionality |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; records exist on target tab for export per FSD 5.1.4 |
| Test Data | Tab: Active; Expected File: ignore_words_export.csv |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate Export button in toolbar on Active tab >> Step 4: Verify button label, icon, secondary styling, and chevron >> Step 5: Apply test data — Tab: Active; Expected File: ignore_words_export.csv >> Step 6: Compare actual result with expected result: Export button visible with secondary styling and icons. Button shows Export label, icon, and secondary styling in toolbar |
| Acceptance Criteria | Export secondary button with export icon and chevron visible. Per FSD 5.1.4: export active ignore word list in structured CSV with all fields and metadata. |
| Expected Result | Export button visible with secondary styling and icons. Button shows Export label, icon, and secondary styling in toolbar. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export-functionality, high, export |

### IWC-TC-068 — Verify CSV export downloads ignore_words_export.csv (FSD Section 5.1.4)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Export Functionality |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; records exist on target tab for export per FSD 5.1.4; Records exist on Active tab |
| Test Data | Filename: ignore_words_export.csv |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Ensure records exist on Active tab >> Step 4: Click Export (FSD Section 5.1.4) >> Step 5: Verify file name ignore_words_export.csv downloads >> Step 6: Open CSV and confirm metadata header and data rows >> Step 7: Apply test data — Filename: ignore_words_export.csv >> Step 8: Compare actual result with expected result: CSV file ignore_words_export.csv downloaded successfully. File ignore_words_export.csv downloads with metadata header and data rows |
| Acceptance Criteria | Export downloads current tab as ignore_words_export.csv per FSD 5.1.4. Per FSD 5.1.4: export active ignore word list in structured CSV with all fields and metadata. |
| Expected Result | CSV file ignore_words_export.csv downloaded successfully. File ignore_words_export.csv downloads with metadata header and data rows. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export-functionality, high, export |

### IWC-TC-069 — Verify export scope limited to active tab per FSD 5.1.4

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Export Functionality |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; records exist on target tab for export per FSD 5.1.4; Records on Active and Inactive tabs |
| Test Data | Tab: Inactive |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Switch to tab specified in test data and note visible records >> Step 4: Click Export (FSD Section 5.1.4) >> Step 5: Open CSV and verify only current-tab records are included >> Step 6: Apply test data — Tab: Inactive >> Step 7: Compare actual result with expected result: Exported CSV contains only inactive tab records. CSV contains only records from the currently selected tab |
| Acceptance Criteria | Export includes only current tab records. Per FSD 5.1.4: export active ignore word list in structured CSV with all fields and metadata. |
| Expected Result | Exported CSV contains only inactive tab records. CSV contains only records from the currently selected tab. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export-functionality, high, export |

### IWC-TC-071 — Verify export CSV column headers (FSD Section 5.1.4)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Export Functionality |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; records exist on target tab for export per FSD 5.1.4; Records exist to export |
| Test Data | Format: CSV |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Export records from tab with data (FSD Section 5.1.4) >> Step 4: Open ignore_words_export.csv >> Step 5: Verify headers: Word/Phrase, Category, Risk Level, Match Type, Date, Status >> Step 6: Apply test data — Format: CSV >> Step 7: Compare actual result with expected result: CSV headers match specified columns. Headers include Word/Phrase, Category, Risk Level, Match Type, Date, Status |
| Acceptance Criteria | Exported CSV contains Word/Phrase, Category, Risk Level, Match Type, Date, Status. Per FSD 5.1.4: export active ignore word list in structured CSV with all fields and metadata. |
| Expected Result | CSV headers match specified columns. Headers include Word/Phrase, Category, Risk Level, Match Type, Date, Status. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export-functionality, medium, export |

### IWC-TC-073 — Verify Add Category modal opens from toolbar (FSD Section 4.2)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Category Modal |
| Priority | High |
| Preconditions | Admin/Maker user on main list view; Add Category toolbar button visible per FSD 4.2 Step 2; Admin user on main list view |
| Test Data | Category Name: Cybercrime; Description: Optional per FSD 4.2 Step 4 |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Add Category (FSD Section 4.2 Step 2) >> Step 3: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 4: Perform test action: Add Category modal opens from toolbar >> Step 5: Apply test data — Category Name: Cybercrime; Description: Optional per FSD 4.2 Step 4 >> Step 6: Compare actual result with expected result: Add Category modal opens with semi-transparent overlay. Checker approval workflow triggered on submit (FSD Section 4.2) |
| Acceptance Criteria | Clicking Add Category opens modal with overlay. Per FSD 4.2: category name unique (max 100 chars); optional description (max 500); Checker approval on submit. |
| Expected Result | Add Category modal opens with semi-transparent overlay. Checker approval workflow triggered on submit (FSD Section 4.2). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category-modal, high, rbac, security |

### IWC-TC-074 — Verify Add Category modal structure and header (FSD Section 4.2)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Category Modal |
| Priority | Medium |
| Preconditions | Admin/Maker user on main list view; Add Category toolbar button visible per FSD 4.2 Step 2; Add Category modal open |
| Test Data | Width: 440px |
| Steps | Step 1: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 2: Perform test action: Add Category modal structure and header >> Step 3: Apply test data — Width: 440px >> Step 4: Compare actual result with expected result: Modal structure matches FSD specifications. Checker approval workflow triggered on submit (FSD Section 4.2) |
| Acceptance Criteria | Modal 440px width, #2A53A0 header, title Add Category, subtitle, close button. Per FSD 4.2: category name unique (max 100 chars); optional description (max 500); Checker approval on submit. |
| Expected Result | Modal structure matches FSD specifications. Checker approval workflow triggered on submit (FSD Section 4.2). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category-modal, medium, rbac, security |

### IWC-TC-075 — Verify Category Name required field (FSD Section 4.2)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Category Modal |
| Priority | High |
| Preconditions | Admin/Maker user on main list view; Add Category toolbar button visible per FSD 4.2 Step 2; Add Category modal open |
| Test Data | Placeholder: e.g. Cybercrime, Narcotics... |
| Steps | Step 1: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 2: Perform test action: Category Name required field >> Step 3: Apply test data — Placeholder: e.g. Cybercrime, Narcotics... >> Step 4: Compare actual result with expected result: Category Name field required with correct placeholder. Checker approval workflow triggered on submit (FSD Section 4.2) |
| Acceptance Criteria | Category Name text input required min 2 characters |
| Expected Result | Category Name field required with correct placeholder. Checker approval workflow triggered on submit (FSD Section 4.2). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category-modal, high, functional |

### IWC-TC-077 — Verify submit button disabled when name less than 2 chars (FSD Section 4.2)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Category Modal |
| Priority | High |
| Preconditions | Admin/Maker user on main list view; Add Category toolbar button visible per FSD 4.2 Step 2; Add Category modal open |
| Test Data | Category Name: A |
| Steps | Step 1: Locate target row on Active or Inactive tab >> Step 2: Click Off (disable) or On (enable) action button >> Step 3: Verify Checker Approval popup appears (FSD BR-007) >> Step 4: Apply test data — Category Name: A >> Step 5: Compare actual result with expected result: Submit button disabled with grey background. Checker Approval popup displayed before status change takes effect |
| Acceptance Criteria | Add Category button grey #C7C7C7 when name under 2 characters. Per FSD BR-007: enable/disable requires Maker-Checker approval before effective. |
| Expected Result | Submit button disabled with grey background. Checker Approval popup displayed before status change takes effect. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category-modal, high, rbac, security |

### IWC-TC-078 — Verify submit button enabled when name 2 or more chars (FSD Section 4.2)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Category Modal |
| Priority | High |
| Preconditions | Admin/Maker user on main list view; Add Category toolbar button visible per FSD 4.2 Step 2; Add Category modal open |
| Test Data | Category Name: Cybercrime |
| Steps | Step 1: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 2: Perform test action: submit button enabled when name 2 or more chars >> Step 3: Apply test data — Category Name: Cybercrime >> Step 4: Compare actual result with expected result: Submit button enabled with blue background. Checker approval workflow triggered on submit (FSD Section 4.2) |
| Acceptance Criteria | Add Category button #2A53A0 when name >= 2 characters. Per FSD BR-007: enable/disable requires Maker-Checker approval before effective. |
| Expected Result | Submit button enabled with blue background. Checker approval workflow triggered on submit (FSD Section 4.2). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category-modal, high, rbac, security |

### IWC-TC-080 — Verify Cancel closes modal and resets fields (FSD Section 4.2)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Category Modal |
| Priority | Medium |
| Preconditions | Admin/Maker user on main list view; Add Category toolbar button visible per FSD 4.2 Step 2; Add Category modal with data entered |
| Test Data | Category Name: Narcotics |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Add Category (FSD Section 4.2 Step 2) >> Step 3: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 4: Perform test action: Cancel closes modal and resets fields >> Step 5: Apply test data — Category Name: Narcotics >> Step 6: Compare actual result with expected result: Modal closed; fields empty on reopen. Checker approval workflow triggered on submit (FSD Section 4.2) |
| Acceptance Criteria | Cancel closes modal, clears fields, removes ready state |
| Expected Result | Modal closed; fields empty on reopen. Checker approval workflow triggered on submit (FSD Section 4.2). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category-modal, medium, functional |

### IWC-TC-081 — Verify overlay click closes Add Category modal (FSD Section 4.2)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Category Modal |
| Priority | Medium |
| Preconditions | Admin/Maker user on main list view; Add Category toolbar button visible per FSD 4.2 Step 2; Add Category modal open |
| Test Data | Category Name: Cybercrime; Description: Optional per FSD 4.2 Step 4 |
| Steps | Step 1: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 2: Perform test action: overlay click closes Add Category modal >> Step 3: Apply test data — Category Name: Cybercrime; Description: Optional per FSD 4.2 Step 4 >> Step 4: Compare actual result with expected result: Modal closes on overlay click. Checker approval workflow triggered on submit (FSD Section 4.2) |
| Acceptance Criteria | Clicking overlay closes modal. Per FSD 4.2: category name unique (max 100 chars); optional description (max 500); Checker approval on submit. |
| Expected Result | Modal closes on overlay click. Checker approval workflow triggered on submit (FSD Section 4.2). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category-modal, medium, rbac, security |

### IWC-TC-082 — Verify close X button closes modal (FSD Section 4.2)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Category Modal |
| Priority | Low |
| Preconditions | Admin/Maker user on main list view; Add Category toolbar button visible per FSD 4.2 Step 2; Add Category modal open |
| Test Data | Category Name: Cybercrime; Description: Optional per FSD 4.2 Step 4 |
| Steps | Step 1: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 2: Perform test action: close X button closes modal >> Step 3: Apply test data — Category Name: Cybercrime; Description: Optional per FSD 4.2 Step 4 >> Step 4: Compare actual result with expected result: Modal closes without saving. Checker approval workflow triggered on submit (FSD Section 4.2) |
| Acceptance Criteria | Close button in header closes modal |
| Expected Result | Modal closes without saving. Checker approval workflow triggered on submit (FSD Section 4.2). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category-modal, low, functional |

### IWC-TC-083 — Verify new category appears in Add Ignore Word dropdown (FSD Section 4.2)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Category Modal |
| Priority | High |
| Preconditions | Admin/Maker user on main list view; Add Category toolbar button visible per FSD 4.2 Step 2; Admin created new category Cybercrime |
| Test Data | Category: Cybercrime |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Add Category (FSD Section 4.2 Step 2) >> Step 3: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 4: Perform test action: new category appears in Add Ignore Word dropdown >> Step 5: Apply test data — Category: Cybercrime >> Step 6: Compare actual result with expected result: Cybercrime appears in Category dropdown options. Checker approval workflow triggered on submit (FSD Section 4.2) |
| Acceptance Criteria | New category added via modal appears in Category dropdown |
| Expected Result | Cybercrime appears in Category dropdown options. Checker approval workflow triggered on submit (FSD Section 4.2). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category-modal, high, functional |

### IWC-TC-084 — Verify new category appears in Bulk Upload dropdown (FSD Section 4.2)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Category Modal |
| Priority | Medium |
| Preconditions | Admin/Maker user on main list view; Add Category toolbar button visible per FSD 4.2 Step 2; Admin created new category |
| Test Data | Category: Cybercrime |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Add Category (FSD Section 4.2 Step 2) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — Category: Cybercrime >> Step 8: Compare actual result with expected result: New category available in bulk upload dropdown. Checker approval workflow triggered on submit (FSD Section 4.2) |
| Acceptance Criteria | New category appears in Bulk Upload category dropdown. Per FSD 5.1.3: CSV/XLSX import with validation and Checker approval before active. |
| Expected Result | New category available in bulk upload dropdown. Checker approval workflow triggered on submit (FSD Section 4.2). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category-modal, medium, rbac, security |

### IWC-TC-085 — Verify Category Controls modal opens

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Controls Modal |
| Priority | High |
| Preconditions | Admin user on main list view; Category Controls button visible in toolbar; Admin user on main list |
| Test Data | Category: Entity Suffixes; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Click Category Controls in the toolbar to open the modal >> Step 4: Perform test action: Category Controls modal opens >> Step 5: Apply test data — Category: Entity Suffixes; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words >> Step 6: Compare actual result with expected result: Category Controls modal opens with #1E3A70 header. Changes persist on Save only; Cancel discards unsaved toggles |
| Acceptance Criteria | Category Controls button opens modal with dark navy header |
| Expected Result | Category Controls modal opens with #1E3A70 header. Changes persist on Save only; Cancel discards unsaved toggles. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-controls-modal, high, functional |

### IWC-TC-086 — Verify default categories listed with word counts

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Controls Modal |
| Priority | High |
| Preconditions | Admin user on main list view; Category Controls button visible in toolbar; Category Controls modal open |
| Test Data | Categories: Entity Suffixes(4), Common Noise Words(3), Personal Titles(3), Business Descriptors(6) |
| Steps | Step 1: Click Category Controls in the toolbar to open the modal >> Step 2: Perform test action: default categories listed with word counts >> Step 3: Apply test data — Categories: Entity Suffixes(4), Common Noise Words(3), Personal Titles(3), Business Descriptors(6) >> Step 4: Compare actual result with expected result: All four categories listed with correct word counts and enabled toggles. Changes persist on Save only; Cancel discards unsaved toggles |
| Acceptance Criteria | Four default categories with name, count, toggle displayed |
| Expected Result | All four categories listed with correct word counts and enabled toggles. Changes persist on Save only; Cancel discards unsaved toggles. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-controls-modal, high, functional |

### IWC-TC-087 — Verify category row layout

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Controls Modal |
| Priority | Medium |
| Preconditions | Admin user on main list view; Category Controls button visible in toolbar; Category Controls modal open |
| Test Data | Category: Entity Suffixes |
| Steps | Step 1: Click Category Controls in the toolbar to open the modal >> Step 2: Perform test action: category row layout >> Step 3: Apply test data — Category: Entity Suffixes >> Step 4: Compare actual result with expected result: Row layout matches FSD specification. Changes persist on Save only; Cancel discards unsaved toggles |
| Acceptance Criteria | Each row shows name 15px semibold, n ignore words count, 52x28 toggle |
| Expected Result | Row layout matches FSD specification. Changes persist on Save only; Cancel discards unsaved toggles. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-controls-modal, medium, functional |

### IWC-TC-088 — Verify toggle switch off state styling

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Controls Modal |
| Priority | Low |
| Preconditions | Admin user on main list view; Category Controls button visible in toolbar; Category Controls modal open |
| Test Data | User Role: Compliance Officer; Module: Ignore Words Configuration |
| Steps | Step 1: Click Category Controls in the toolbar to open the modal >> Step 2: Perform test action: toggle switch off state styling >> Step 3: Apply test data — User Role: Compliance Officer; Module: Ignore Words Configuration >> Step 4: Compare actual result with expected result: Toggle off styling correct. Changes persist on Save only; Cancel discards unsaved toggles |
| Acceptance Criteria | Toggle off state #D1D5DC background with white 22px knob |
| Expected Result | Toggle off styling correct. Changes persist on Save only; Cancel discards unsaved toggles. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-controls-modal, low, functional |

### IWC-TC-089 — Verify toggle switch on state styling

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Controls Modal |
| Priority | Low |
| Preconditions | Admin user on main list view; Category Controls button visible in toolbar; Category Controls modal open |
| Test Data | User Role: Compliance Officer; Module: Ignore Words Configuration |
| Steps | Step 1: Click Category Controls in the toolbar to open the modal >> Step 2: Perform test action: toggle switch on state styling >> Step 3: Apply test data — User Role: Compliance Officer; Module: Ignore Words Configuration >> Step 4: Compare actual result with expected result: Toggle on styling with smooth transition. Changes persist on Save only; Cancel discards unsaved toggles |
| Acceptance Criteria | Toggle on state #2A53A0 background knob transitions 0.2s |
| Expected Result | Toggle on styling with smooth transition. Changes persist on Save only; Cancel discards unsaved toggles. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-controls-modal, low, functional |

### IWC-TC-090 — Verify Save persists toggle states per FSD BR-005

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Controls Modal |
| Priority | High |
| Preconditions | Admin user on main list view; Category Controls button visible in toolbar; Admin user; toggled category off |
| Test Data | Category: Entity Suffixes disabled |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Click Category Controls in the toolbar to open the modal >> Step 4: Perform test action: Save persists toggle states per FSD BR-005 >> Step 5: Apply test data — Category: Entity Suffixes disabled >> Step 6: Compare actual result with expected result: Settings saved; toast shown; category disabled for screening per FSD BR-005. Changes persist on Save only; Cancel discards unsaved toggles |
| Acceptance Criteria | Save persists toggles, closes modal, shows toast Category controls saved. |
| Expected Result | Settings saved; toast shown; category disabled for screening per FSD BR-005. Changes persist on Save only; Cancel discards unsaved toggles. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-controls-modal, high, notifications |

### IWC-TC-091 — Verify category disable does not change individual word status per FSD BR-005

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Controls Modal |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Entity Suffixes category with active words; category disabled |
| Test Data | Category: Entity Suffixes |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Category: Entity Suffixes >> Step 7: Compare actual result with expected result: Individual words remain Active status in list but category screening disabled globally. Checker Approval popup displayed before status change takes effect |
| Acceptance Criteria | Disabling category deactivates screening globally without changing word statuses in list. Per FSD BR-007: enable/disable requires Maker-Checker approval before effective. |
| Expected Result | Individual words remain Active status in list but category screening disabled globally. Checker Approval popup displayed before status change takes effect. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-controls-modal, high, rbac, security |

### IWC-TC-092 — Verify Cancel closes without saving

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Controls Modal |
| Priority | Medium |
| Preconditions | Admin user on main list view; Category Controls button visible in toolbar; Category Controls modal open with toggles changed |
| Test Data | User Role: Compliance Officer; Module: Ignore Words Configuration |
| Steps | Step 1: Click Category Controls in the toolbar to open the modal >> Step 2: Perform test action: Cancel closes without saving >> Step 3: Apply test data — User Role: Compliance Officer; Module: Ignore Words Configuration >> Step 4: Compare actual result with expected result: Changes discarded; original toggle states preserved. Changes persist on Save only; Cancel discards unsaved toggles |
| Acceptance Criteria | Cancel closes modal without persisting toggle changes |
| Expected Result | Changes discarded; original toggle states preserved. Changes persist on Save only; Cancel discards unsaved toggles. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-controls-modal, medium, functional |

### IWC-TC-093 — Verify overlay click closes Category Controls modal

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Controls Modal |
| Priority | Medium |
| Preconditions | Admin user on main list view; Category Controls button visible in toolbar; Category Controls modal open |
| Test Data | Category: Entity Suffixes; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words |
| Steps | Step 1: Click Category Controls in the toolbar to open the modal >> Step 2: Perform test action: overlay click closes Category Controls modal >> Step 3: Apply test data — Category: Entity Suffixes; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words >> Step 4: Compare actual result with expected result: Modal closes on overlay click. Changes persist on Save only; Cancel discards unsaved toggles |
| Acceptance Criteria | Overlay click closes modal |
| Expected Result | Modal closes on overlay click. Changes persist on Save only; Cancel discards unsaved toggles. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-controls-modal, medium, functional |

### IWC-TC-094 — Verify Add Ignore Word panel opens from primary CTA (FSD Section 4.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word Panel |
| Priority | High |
| Preconditions | Admin/Maker user on main list view; Add Ignore Word primary button visible per FSD 4.3 Step 2; Admin user on main list |
| Test Data | Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Add Ignore Word (FSD Section 4.3 Step 2) >> Step 3: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 4: Perform test action: Add Ignore Word panel opens from primary CTA >> Step 5: Apply test data — Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words >> Step 6: Compare actual result with expected result: Right-side panel slides in from right with overlay. Behavior aligns with FSD Section 4.3 panel workflow |
| Acceptance Criteria | Primary blue Add Ignore Word button opens right-side panel |
| Expected Result | Right-side panel slides in from right with overlay. Behavior aligns with FSD Section 4.3 panel workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word-panel, high, functional |

### IWC-TC-095 — Verify panel dimensions and animation (FSD Section 4.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word Panel |
| Priority | Medium |
| Preconditions | Admin/Maker user on main list view; Add Ignore Word primary button visible per FSD 4.3 Step 2; Add Ignore Word panel open |
| Test Data | Width: 680px max |
| Steps | Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: panel dimensions and animation >> Step 3: Apply test data — Width: 680px max >> Step 4: Compare actual result with expected result: Panel dimensions and slide-in animation match specification. Behavior aligns with FSD Section 4.3 panel workflow |
| Acceptance Criteria | Panel min(680px,100vw) width, 100vh height, slide-right animation 0.25s |
| Expected Result | Panel dimensions and slide-in animation match specification. Behavior aligns with FSD Section 4.3 panel workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word-panel, medium, functional |

### IWC-TC-096 — Verify panel overlay does not close on click (FSD Section 4.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word Panel |
| Priority | High |
| Preconditions | Admin/Maker user on main list view; Add Ignore Word primary button visible per FSD 4.3 Step 2; Add Ignore Word panel open |
| Test Data | Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words |
| Steps | Step 1: Ensure the Add Ignore Word panel is open with sample data entered >> Step 2: Click the dimmed overlay outside the panel form (not on input fields) >> Step 3: Observe whether the panel closes or remains open >> Step 4: Close the panel using Cancel or back arrow to complete the test >> Step 5: Apply test data — Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words >> Step 6: Compare actual result with expected result: Panel remains open when overlay clicked. Panel stays open until Cancel or back arrow is used (FSD Section 4.3) |
| Acceptance Criteria | Clicking overlay does NOT close panel; requires Cancel or back arrow |
| Expected Result | Panel remains open when overlay clicked. Panel stays open until Cancel or back arrow is used (FSD Section 4.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word-panel, high, functional |

### IWC-TC-097 — Verify panel top bar back arrow closes panel (FSD Section 4.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word Panel |
| Priority | Medium |
| Preconditions | Admin/Maker user on main list view; Add Ignore Word primary button visible per FSD 4.3 Step 2; Add Ignore Word panel open |
| Test Data | Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words |
| Steps | Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: panel top bar back arrow closes panel >> Step 3: Apply test data — Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words >> Step 4: Compare actual result with expected result: Panel closes on back arrow click. Behavior aligns with FSD Section 4.3 panel workflow |
| Acceptance Criteria | Back arrow 32x32 closes panel |
| Expected Result | Panel closes on back arrow click. Behavior aligns with FSD Section 4.3 panel workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word-panel, medium, functional |

### IWC-TC-098 — Verify panel breadcrumb parent link closes panel (FSD Section 4.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word Panel |
| Priority | Medium |
| Preconditions | Admin/Maker user on main list view; Add Ignore Word primary button visible per FSD 4.3 Step 2; Add Ignore Word panel open |
| Test Data | Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words |
| Steps | Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: panel breadcrumb parent link closes panel >> Step 3: Apply test data — Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words >> Step 4: Compare actual result with expected result: Panel closes on breadcrumb parent click. Behavior aligns with FSD Section 4.3 panel workflow |
| Acceptance Criteria | Clicking Ignore Words Configuration breadcrumb closes panel |
| Expected Result | Panel closes on breadcrumb parent click. Behavior aligns with FSD Section 4.3 panel workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word-panel, medium, functional |

### IWC-TC-099 — Verify Ignore Word/Phrase required field (FSD Section 4.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word Panel |
| Priority | High |
| Preconditions | Admin/Maker user on main list view; Add Ignore Word primary button visible per FSD 4.3 Step 2; Add Ignore Word panel open |
| Test Data | Placeholder: e.g. trading company, financial services, private limited... |
| Steps | Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: Ignore Word/Phrase required field >> Step 3: Apply test data — Placeholder: e.g. trading company, financial services, private limited... >> Step 4: Compare actual result with expected result: Required field with correct placeholder displayed. Behavior aligns with FSD Section 4.3 panel workflow |
| Acceptance Criteria | Ignore Word/Phrase text input required full width 46px height |
| Expected Result | Required field with correct placeholder displayed. Behavior aligns with FSD Section 4.3 panel workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word-panel, high, functional |

### IWC-TC-100 — Verify Category dropdown required with default options (FSD Section 4.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word Panel |
| Priority | High |
| Preconditions | Admin/Maker user on main list view; Add Ignore Word primary button visible per FSD 4.3 Step 2; Add Ignore Word panel open |
| Test Data | Options: Entity Suffixes, Common Noise Words, Personal Titles, Business Descriptors |
| Steps | Step 1: Open Category dropdown (FSD Section 4.3 Step 4) >> Step 2: Verify options: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words >> Step 3: Confirm Category field is marked mandatory >> Step 4: Apply test data — Options: Entity Suffixes, Common Noise Words, Personal Titles, Business Descriptors >> Step 5: Compare actual result with expected result: All default category options available. All FSD 4.1 categories listed; field marked mandatory |
| Acceptance Criteria | Category dropdown required with Entity Suffixes, Common Noise Words, Personal Titles, Business Descriptors |
| Expected Result | All default category options available. All FSD 4.1 categories listed; field marked mandatory. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word-panel, high, functional |

### IWC-TC-101 — Verify Risk Level dropdown required (FSD Section 4.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word Panel |
| Priority | High |
| Preconditions | Admin/Maker user on main list view; Add Ignore Word primary button visible per FSD 4.3 Step 2; Add Ignore Word panel open |
| Test Data | Options: Low, Medium, High |
| Steps | Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: Risk Level dropdown required >> Step 3: Apply test data — Options: Low, Medium, High >> Step 4: Compare actual result with expected result: All risk level options available. Behavior aligns with FSD Section 4.3 panel workflow |
| Acceptance Criteria | Risk Level dropdown required with Low, Medium, High |
| Expected Result | All risk level options available. Behavior aligns with FSD Section 4.3 panel workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word-panel, high, functional |

### IWC-TC-102 — Verify Match Type dropdown required (FSD Section 4.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word Panel |
| Priority | High |
| Preconditions | Admin/Maker user on main list view; Add Ignore Word primary button visible per FSD 4.3 Step 2; Add Ignore Word panel open |
| Test Data | Options: Exact phrase, Partial match |
| Steps | Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: Match Type dropdown required >> Step 3: Apply test data — Options: Exact phrase, Partial match >> Step 4: Compare actual result with expected result: Both match type options available. Behavior aligns with FSD Section 4.3 panel workflow |
| Acceptance Criteria | Match Type dropdown required with Exact phrase, Partial match |
| Expected Result | Both match type options available. Behavior aligns with FSD Section 4.3 panel workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word-panel, high, functional |

### IWC-TC-103 — Verify three-column grid layout for dropdowns (FSD Section 4.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word Panel |
| Priority | Medium |
| Preconditions | Admin/Maker user on main list view; Add Ignore Word primary button visible per FSD 4.3 Step 2; Add Ignore Word panel open |
| Test Data | Grid: 1fr 1fr 1fr |
| Steps | Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: three-column grid layout for dropdowns >> Step 3: Apply test data — Grid: 1fr 1fr 1fr >> Step 4: Compare actual result with expected result: Three dropdowns displayed in equal-width grid. Behavior aligns with FSD Section 4.3 panel workflow |
| Acceptance Criteria | Category, Risk Level, Match Type in 3-column equal grid gap 16px |
| Expected Result | Three dropdowns displayed in equal-width grid. Behavior aligns with FSD Section 4.3 panel workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word-panel, medium, functional |

### IWC-TC-104 — Verify dropdown focus state styling (FSD Section 4.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word Panel |
| Priority | Low |
| Preconditions | Admin/Maker user on main list view; Add Ignore Word primary button visible per FSD 4.3 Step 2; Add Ignore Word panel open |
| Test Data | Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words |
| Steps | Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: dropdown focus state styling >> Step 3: Apply test data — Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words >> Step 4: Compare actual result with expected result: Dropdowns show blue focus border and ring. Behavior aligns with FSD Section 4.3 panel workflow |
| Acceptance Criteria | Dropdown focus #2A53A0 border plus 2px ring |
| Expected Result | Dropdowns show blue focus border and ring. Behavior aligns with FSD Section 4.3 panel workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word-panel, low, accessibility |

### IWC-TC-105 — Verify Cancel button closes panel without saving (FSD Section 4.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word Panel |
| Priority | High |
| Preconditions | Admin/Maker user on main list view; Add Ignore Word primary button visible per FSD 4.3 Step 2; Panel with data entered |
| Test Data | Word: test phrase |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Add Ignore Word (FSD Section 4.3 Step 2) >> Step 3: Enter test data in the Add Ignore Word panel fields >> Step 4: Click Cancel in the panel footer (FSD Section 4.3 Step 8c) >> Step 5: If fields contain data, verify confirmation prompt appears before discard >> Step 6: Confirm panel closes and no new record is created on any tab >> Step 7: Apply test data — Word: test phrase >> Step 8: Compare actual result with expected result: Panel closes; no new record created. Confirmation prompt shown when fields have data (FSD 4.3 Step 8c); no record added |
| Acceptance Criteria | Cancel secondary button closes panel without saving. Per FSD 4.3 Step 8c: confirmation prompt when fields populated before discard. |
| Expected Result | Panel closes; no new record created. Confirmation prompt shown when fields have data (FSD 4.3 Step 8c); no record added. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word-panel, high, functional |

### IWC-TC-106 — Verify Submit validation for empty Ignore Word/Phrase (FSD Section 4.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word Panel |
| Priority | High |
| Preconditions | Admin/Maker user on main list view; Add Ignore Word primary button visible per FSD 4.3 Step 2; Add Ignore Word panel open |
| Test Data | Ignore Word: (empty) |
| Steps | Step 1: Leave Ignore Word/Phrase empty; complete other fields if required >> Step 2: Click Submit (FSD Section 4.3 Step 8b) >> Step 3: Observe validation alert and confirm no record is created >> Step 4: Apply test data — Ignore Word: (empty) >> Step 5: Compare actual result with expected result: Alert displayed; no record created. Validation alert shown; submission blocked per FSD Section 4.3 Step 8b |
| Acceptance Criteria | Empty word shows alert Please enter an ignore word or phrase. Per FSD 4.3 Step 8b and FSD 7.1: submit sends for Checker approval; status Pending Approval until approved. |
| Expected Result | Alert displayed; no record created. Validation alert shown; submission blocked per FSD Section 4.3 Step 8b. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word-panel, high, rbac, security |

### IWC-TC-107 — Verify successful submit creates drafted record per FSD BR-003 / FSD 7.1

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word Panel |
| Priority | High |
| Preconditions | Admin/Maker user on main list view; Add Ignore Word primary button visible per FSD 4.3 Step 2; Admin user; all fields filled |
| Test Data | Word: financial services; Category: Entity Suffixes; Risk: Low; Match: Exact phrase |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Add Ignore Word (FSD Section 4.3 Step 2) >> Step 3: Fill Word/Phrase, Category, Risk Level, and Match Type >> Step 4: Click Submit for Checker approval (FSD Section 4.3 Step 8b) >> Step 5: Verify Checker Approval modal opens >> Step 6: Confirm record appears on Drafted tab and is not active until approved (FSD Section 7.1) >> Step 7: Apply test data — Word: financial services; Category: Entity Suffixes; Risk: Low; Match: Exact phrase >> Step 8: Compare actual result with expected result: Record created as Drafted; tab count updated; Checker Approval popup shown. Record on Drafted tab; Checker modal shown; not active until approved (FSD 7.1) |
| Acceptance Criteria | Valid submit adds status=drafted, updates counts, closes panel, opens Checker popup |
| Expected Result | Record created as Drafted; tab count updated; Checker Approval popup shown. Record on Drafted tab; Checker modal shown; not active until approved (FSD 7.1). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word-panel, high, rbac, security |

### IWC-TC-109 — Verify mandatory fields validation per FSD BR-002

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word Panel |
| Priority | High |
| Preconditions | Admin/Maker user on main list view; Add Ignore Word primary button visible per FSD 4.3 Step 2; Add Ignore Word panel open |
| Test Data | Missing: Category |
| Steps | Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: mandatory fields validation per FSD BR-002 >> Step 3: Apply test data — Missing: Category >> Step 4: Compare actual result with expected result: Submission blocked until all mandatory fields populated. Behavior aligns with FSD Section 4.3 panel workflow |
| Acceptance Criteria | All four fields required: Word, Category, Risk Level, Match Type |
| Expected Result | Submission blocked until all mandatory fields populated. Behavior aligns with FSD Section 4.3 panel workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word-panel, high, functional |

### IWC-TC-110 — Verify Live Narrative Tester card rendering

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Add Ignore Word panel open per FSD 4.3 Step 7; Add Ignore Word panel open per FSD 4.3 Step 7; Add Ignore Word panel open |
| Test Data | Word: trading company; Narrative: Payment to trading company for goods |
| Steps | Step 1: Open Add Ignore Word panel; go to Live Narrative Tester (FSD Section 4.3 Step 7) >> Step 2: Enter word and narrative from test data >> Step 3: Observe real-time preview highlighting per Match Type >> Step 4: Apply test data — Word: trading company; Narrative: Payment to trading company for goods >> Step 5: Compare actual result with expected result: Tester card renders with #F8FAFC header and correct titles. Preview updates in real time based on Match Type selection |
| Acceptance Criteria | Card with header Live Narrative Tester and subtitle displayed |
| Expected Result | Tester card renders with #F8FAFC header and correct titles. Preview updates in real time based on Match Type selection. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, medium, screening-engine |

### IWC-TC-111 — Verify narrative textarea placeholder and behavior

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Add Ignore Word panel open per FSD 4.3 Step 7; Add Ignore Word panel open per FSD 4.3 Step 7; Add Ignore Word panel open |
| Test Data | Placeholder: Paste a transaction remark or narrative here... |
| Steps | Step 1: Open Add Ignore Word panel; go to Live Narrative Tester (FSD Section 4.3 Step 7) >> Step 2: Enter word and narrative from test data >> Step 3: Observe real-time preview highlighting per Match Type >> Step 4: Apply test data — Placeholder: Paste a transaction remark or narrative here... >> Step 5: Compare actual result with expected result: Textarea accepts narrative input with correct placeholder. Preview updates in real time based on Match Type selection |
| Acceptance Criteria | Textarea 4 rows, resize disabled, placeholder for transaction remark |
| Expected Result | Textarea accepts narrative input with correct placeholder. Preview updates in real time based on Match Type selection. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, medium, functional |

### IWC-TC-112 — Verify real-time preview update on narrative input

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | High |
| Preconditions | Add Ignore Word panel open per FSD 4.3 Step 7; Add Ignore Word panel open; word entered |
| Test Data | Word: trading company; Narrative: Payment to trading company for goods |
| Steps | Step 1: Open Add Ignore Word panel; go to Live Narrative Tester (FSD Section 4.3 Step 7) >> Step 2: Enter word and narrative from test data >> Step 3: Observe real-time preview highlighting per Match Type >> Step 4: Apply test data — Word: trading company; Narrative: Payment to trading company for goods >> Step 5: Compare actual result with expected result: Preview updates in real time as narrative is typed. Preview updates in real time based on Match Type selection |
| Acceptance Criteria | Typing in narrative triggers updatePreview in real time |
| Expected Result | Preview updates in real time as narrative is typed. Preview updates in real time based on Match Type selection. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, high, functional |

### IWC-TC-113 — Verify preview empty state when no narrative

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Add Ignore Word panel open per FSD 4.3 Step 7; Add Ignore Word panel open per FSD 4.3 Step 7; Add Ignore Word panel open |
| Test Data | Narrative: (empty); Word: trading company |
| Steps | Step 1: Open Add Ignore Word panel; go to Live Narrative Tester (FSD Section 4.3 Step 7) >> Step 2: Enter word and narrative from test data >> Step 3: Observe real-time preview highlighting per Match Type >> Step 4: Apply test data — Narrative: (empty); Word: trading company >> Step 5: Compare actual result with expected result: Empty state message in #9CA3AF displayed. Empty-state message displayed when tab has zero records |
| Acceptance Criteria | Empty narrative shows No narrative entered. Paste text above... |
| Expected Result | Empty state message in #9CA3AF displayed. Empty-state message displayed when tab has zero records. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, medium, functional |

### IWC-TC-114 — Verify preview shows narrative without highlight when word empty

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Add Ignore Word panel open per FSD 4.3 Step 7; Add Ignore Word panel open per FSD 4.3 Step 7; Add Ignore Word panel open |
| Test Data | Narrative: Sample transaction text |
| Steps | Step 1: Open Add Ignore Word panel; go to Live Narrative Tester (FSD Section 4.3 Step 7) >> Step 2: Enter word and narrative from test data >> Step 3: Observe real-time preview highlighting per Match Type >> Step 4: Apply test data — Narrative: Sample transaction text >> Step 5: Compare actual result with expected result: Narrative displayed without highlights when word field empty. Preview updates in real time based on Match Type selection |
| Acceptance Criteria | When word empty but narrative entered, preview shows plain text |
| Expected Result | Narrative displayed without highlights when word field empty. Preview updates in real time based on Match Type selection. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, medium, functional |

### IWC-TC-115 — Verify highlight against all active words

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | High |
| Preconditions | Add Ignore Word panel open per FSD 4.3 Step 7; Active words in multiple categories exist |
| Test Data | Narrative contains trading company and politically exposed |
| Steps | Step 1: Open Add Ignore Word panel; go to Live Narrative Tester (FSD Section 4.3 Step 7) >> Step 2: Enter word and narrative from test data >> Step 3: Observe real-time preview highlighting per Match Type >> Step 4: Apply test data — Narrative contains trading company and politically exposed >> Step 5: Compare actual result with expected result: All matching active words highlighted regardless of selected category. Preview updates in real time based on Match Type selection |
| Acceptance Criteria | Preview highlights ALL active ignore words plus current draft word regardless of category |
| Expected Result | All matching active words highlighted regardless of selected category. Preview updates in real time based on Match Type selection. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, high, functional |

### IWC-TC-116 — Verify longest-first highlight sorting

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | Medium |
| Preconditions | Add Ignore Word panel open per FSD 4.3 Step 7; Active words with substring relationships exist |
| Test Data | Words: international trade, trade |
| Steps | Step 1: Open Add Ignore Word panel; go to Live Narrative Tester (FSD Section 4.3 Step 7) >> Step 2: Enter word and narrative from test data >> Step 3: Observe real-time preview highlighting per Match Type >> Step 4: Apply test data — Words: international trade, trade >> Step 5: Compare actual result with expected result: Longer phrases highlighted correctly without substring overlap issues. Preview updates in real time based on Match Type selection |
| Acceptance Criteria | Words sorted longest-first to prevent substring conflicts in highlighting |
| Expected Result | Longer phrases highlighted correctly without substring overlap issues. Preview updates in real time based on Match Type selection. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, medium, functional |

### IWC-TC-117 — Verify highlight styling

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | Low |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Add Ignore Word panel open per FSD 4.3 Step 7; Add Ignore Word panel open per FSD 4.3 Step 7; Matching narrative entered |
| Test Data | Word: trading company; Narrative: Payment to trading company for goods; Match: Exact phrase |
| Steps | Step 1: Open Add Ignore Word panel; go to Live Narrative Tester (FSD Section 4.3 Step 7) >> Step 2: Enter word and narrative from test data >> Step 3: Observe real-time preview highlighting per Match Type >> Step 4: Apply test data — Word: trading company; Narrative: Payment to trading company for goods; Match: Exact phrase >> Step 5: Compare actual result with expected result: Matched words highlighted with specified amber styling. Preview updates in real time based on Match Type selection |
| Acceptance Criteria | Highlights use background #FEF3C7, text #92400E, padding, border-radius, font-weight 500 |
| Expected Result | Matched words highlighted with specified amber styling. Preview updates in real time based on Match Type selection. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, low, error-handling |

### IWC-TC-119 — Verify Bulk Upload modal opens (FSD Section 5.1.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Admin user on main list view; Bulk Upload button visible; valid CSV/XLSX test files available per FSD 5.1.3; Admin user on main list |
| Test Data | Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB >> Step 8: Compare actual result with expected result: Bulk Upload modal opens with correct header. Valid records enter Drafted status pending Checker approval (FSD 5.1.3) |
| Acceptance Criteria | Bulk Upload button opens 500px modal. Per FSD 5.1.3: CSV/XLSX import with validation and Checker approval before active. |
| Expected Result | Bulk Upload modal opens with correct header. Valid records enter Drafted status pending Checker approval (FSD 5.1.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, rbac, security |

### IWC-TC-120 — Verify Bulk Upload modal header content (FSD Section 5.1.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Medium |
| Preconditions | Admin user on main list view; Bulk Upload button visible; valid CSV/XLSX test files available per FSD 5.1.3; Bulk Upload modal open |
| Test Data | Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB |
| Steps | Step 1: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 2: Select category and attach test file >> Step 3: Submit upload and review validation outcome >> Step 4: Verify records enter Drafted status pending Checker approval >> Step 5: Apply test data — Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB >> Step 6: Compare actual result with expected result: Header content matches specification. Valid records enter Drafted status pending Checker approval (FSD 5.1.3) |
| Acceptance Criteria | Title Bulk Upload Ignore Words and subtitle about CSV/XLSX. Per FSD 5.1.3: CSV/XLSX import with validation and Checker approval before active. |
| Expected Result | Header content matches specification. Valid records enter Drafted status pending Checker approval (FSD 5.1.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, medium, rbac, security |

### IWC-TC-122 — Verify All Categories not valid for upload

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Admin user on main list view; Bulk Upload button visible; valid CSV/XLSX test files available per FSD 5.1.3; Bulk Upload modal open with file selected |
| Test Data | Category: All Categories |
| Steps | Step 1: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 2: Select category and attach test file >> Step 3: Submit upload and review validation outcome >> Step 4: Verify records enter Drafted status pending Checker approval >> Step 5: Apply test data — Category: All Categories >> Step 6: Compare actual result with expected result: Upload blocked or validation error when All Categories selected. Valid records enter Drafted status pending Checker approval (FSD 5.1.3) |
| Acceptance Criteria | All Categories selection should not be valid for upload submission. Per FSD 5.1.3: CSV/XLSX import with validation and Checker approval before active. |
| Expected Result | Upload blocked or validation error when All Categories selected. Valid records enter Drafted status pending Checker approval (FSD 5.1.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, rbac, security |

### IWC-TC-123 — Verify file drop zone default state (FSD Section 5.1.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Medium |
| Preconditions | Admin user on main list view; Bulk Upload button visible; valid CSV/XLSX test files available per FSD 5.1.3; Bulk Upload modal open |
| Test Data | Hint: Supported CSV, XLSX \| Max 10 MB |
| Steps | Step 1: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 2: Select category and attach test file >> Step 3: Submit upload and review validation outcome >> Step 4: Verify records enter Drafted status pending Checker approval >> Step 5: Apply test data — Hint: Supported CSV, XLSX \| Max 10 MB >> Step 6: Compare actual result with expected result: Drop zone displays upload icon, instructions, and format hint. Valid records enter Drafted status pending Checker approval (FSD 5.1.3) |
| Acceptance Criteria | Dashed border drop zone with drag and drop and browse text |
| Expected Result | Drop zone displays upload icon, instructions, and format hint. Valid records enter Drafted status pending Checker approval (FSD 5.1.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, medium, export |

### IWC-TC-124 — Verify drop zone hover and drag-over styling (FSD Section 5.1.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Low |
| Preconditions | Admin user on main list view; Bulk Upload button visible; valid CSV/XLSX test files available per FSD 5.1.3; Bulk Upload modal open |
| Test Data | Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB |
| Steps | Step 1: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 2: Select category and attach test file >> Step 3: Submit upload and review validation outcome >> Step 4: Verify records enter Drafted status pending Checker approval >> Step 5: Apply test data — Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB >> Step 6: Compare actual result with expected result: Drop zone styling changes on drag-over. Valid records enter Drafted status pending Checker approval (FSD 5.1.3) |
| Acceptance Criteria | Hover/drag changes border #2A53A0 and background #EFF6FF |
| Expected Result | Drop zone styling changes on drag-over. Valid records enter Drafted status pending Checker approval (FSD 5.1.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, low, export |

### IWC-TC-125 — Verify file selection via browse (FSD Section 5.1.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Admin user on main list view; Bulk Upload button visible; valid CSV/XLSX test files available per FSD 5.1.3; Valid CSV file available |
| Test Data | File: ignore_words_upload.csv (45.2 KB) |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File: ignore_words_upload.csv (45.2 KB) >> Step 8: Compare actual result with expected result: Drop zone hidden; file name and size displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3) |
| Acceptance Criteria | Selecting CSV via browse shows file summary row |
| Expected Result | Drop zone hidden; file name and size displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, export |

### IWC-TC-126 — Verify file selection via drag and drop (FSD Section 5.1.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Admin user on main list view; Bulk Upload button visible; valid CSV/XLSX test files available per FSD 5.1.3; Valid XLSX file available |
| Test Data | File: ignore_words.xlsx |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File: ignore_words.xlsx >> Step 8: Compare actual result with expected result: File selected and summary row displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3) |
| Acceptance Criteria | Drag and drop file selects file same as browse |
| Expected Result | File selected and summary row displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high |

### IWC-TC-127 — Verify file size display in KB one decimal (FSD Section 5.1.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Low |
| Preconditions | Admin user on main list view; Bulk Upload button visible; valid CSV/XLSX test files available per FSD 5.1.3; File selected |
| Test Data | File Size: 45.2 KB |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File Size: 45.2 KB >> Step 8: Compare actual result with expected result: Size displayed in KB with one decimal. Valid records enter Drafted status pending Checker approval (FSD 5.1.3) |
| Acceptance Criteria | File size shown in KB with one decimal place |
| Expected Result | Size displayed in KB with one decimal. Valid records enter Drafted status pending Checker approval (FSD 5.1.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, low, functional |

### IWC-TC-128 — Verify remove file restores drop zone (FSD Section 5.1.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Medium |
| Preconditions | Admin user on main list view; Bulk Upload button visible; valid CSV/XLSX test files available per FSD 5.1.3; File selected in bulk upload |
| Test Data | Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB >> Step 8: Compare actual result with expected result: Drop zone restored; file input reset. Valid records enter Drafted status pending Checker approval (FSD 5.1.3) |
| Acceptance Criteria | Clicking x clears file and restores drop zone |
| Expected Result | Drop zone restored; file input reset. Valid records enter Drafted status pending Checker approval (FSD 5.1.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, medium, export |

### IWC-TC-129 — Verify accepted file formats CSV and XLSX (FSD Section 5.1.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Admin user on main list view; Bulk Upload button visible; valid CSV/XLSX test files available per FSD 5.1.3; Bulk Upload modal open |
| Test Data | File: document.pdf |
| Steps | Step 1: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 2: Select category and attach test file >> Step 3: Submit upload and review validation outcome >> Step 4: Verify records enter Drafted status pending Checker approval >> Step 5: Apply test data — File: document.pdf >> Step 6: Compare actual result with expected result: Unsupported format rejected or not selectable. Valid records enter Drafted status pending Checker approval (FSD 5.1.3) |
| Acceptance Criteria | Only.csv and.xlsx accepted |
| Expected Result | Unsupported format rejected or not selectable. Valid records enter Drafted status pending Checker approval (FSD 5.1.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, export |

### IWC-TC-130 — Verify wrong format toast error (FSD Section 5.1.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Admin user on main list view; Bulk Upload button visible; valid CSV/XLSX test files available per FSD 5.1.3; Invalid file upload attempted |
| Test Data | File: data.txt |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File: data.txt >> Step 8: Compare actual result with expected result: Toast error for unsupported format displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3) |
| Acceptance Criteria | Wrong format shows toast Unsupported file format. Please upload CSV or XLSX. |
| Expected Result | Toast error for unsupported format displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, export |

### IWC-TC-131 — Verify file size exceeds 10 MB toast error (FSD Section 5.1.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Admin user on main list view; Bulk Upload button visible; valid CSV/XLSX test files available per FSD 5.1.3; File larger than 10 MB available |
| Test Data | File Size: 12 MB |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File Size: 12 MB >> Step 8: Compare actual result with expected result: Toast error for file size limit displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3) |
| Acceptance Criteria | File over 10 MB shows toast File size exceeds the 10 MB limit. |
| Expected Result | Toast error for file size limit displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, error-handling |

### IWC-TC-132 — Verify Download template file link (FSD Section 5.1.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Medium |
| Preconditions | Admin user on main list view; Bulk Upload button visible; valid CSV/XLSX test files available per FSD 5.1.3; Bulk Upload modal open |
| Test Data | Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB |
| Steps | Step 1: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 2: Select category and attach test file >> Step 3: Submit upload and review validation outcome >> Step 4: Verify records enter Drafted status pending Checker approval >> Step 5: Apply test data — Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB >> Step 6: Compare actual result with expected result: Template file download initiated. Valid records enter Drafted status pending Checker approval (FSD 5.1.3) |
| Acceptance Criteria | Download template file link displayed in #2A53A0 |
| Expected Result | Template file download initiated. Valid records enter Drafted status pending Checker approval (FSD 5.1.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, medium, export |

### IWC-TC-133 — Verify successful bulk upload creates drafted records per FSD 5.1.3

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Admin user on main list view; Bulk Upload button visible; valid CSV/XLSX test files available per FSD 5.1.3; Valid CSV matching schema; category selected |
| Test Data | Category: Entity Suffixes; File: valid_template.csv |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — Category: Entity Suffixes; File: valid_template.csv >> Step 8: Compare actual result with expected result: Records enter Drafted status; Checker Approval workflow triggered. Valid records enter Drafted status pending Checker approval (FSD 5.1.3) |
| Acceptance Criteria | Valid upload creates drafted records and triggers Checker Approval. Per FSD 5.1.3: CSV/XLSX import with validation and Checker approval before active. |
| Expected Result | Records enter Drafted status; Checker Approval workflow triggered. Valid records enter Drafted status pending Checker approval (FSD 5.1.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, rbac, security |

### IWC-TC-134 — Verify bulk upload schema mismatch error (FSD Section 5.1.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Admin user on main list view; Bulk Upload button visible; valid CSV/XLSX test files available per FSD 5.1.3; Invalid schema CSV available |
| Test Data | File: invalid_schema.csv |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File: invalid_schema.csv >> Step 8: Compare actual result with expected result: Modal with row-level schema errors displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3) |
| Acceptance Criteria | Non-conforming file returns schema error with row-level errors. Per FSD 5.1.3: CSV/XLSX import with validation and Checker approval before active. |
| Expected Result | Modal with row-level schema errors displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, rbac, security |

### IWC-TC-135 — Verify Cancel closes bulk upload and clears file (FSD Section 5.1.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Medium |
| Preconditions | Admin user on main list view; Bulk Upload button visible; valid CSV/XLSX test files available per FSD 5.1.3; File selected in bulk upload |
| Test Data | Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB >> Step 8: Compare actual result with expected result: Modal closed; file cleared on reopen. Valid records enter Drafted status pending Checker approval (FSD 5.1.3) |
| Acceptance Criteria | Cancel closes modal and removes selected file. Per FSD 5.1.3: CSV/XLSX import with validation and Checker approval before active. |
| Expected Result | Modal closed; file cleared on reopen. Valid records enter Drafted status pending Checker approval (FSD 5.1.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, medium, rbac, security |

### IWC-TC-136 — Verify overlay click closes Bulk Upload modal (FSD Section 5.1.3)

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Medium |
| Preconditions | Admin user on main list view; Bulk Upload button visible; valid CSV/XLSX test files available per FSD 5.1.3; Bulk Upload modal open |
| Test Data | Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB |
| Steps | Step 1: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 2: Select category and attach test file >> Step 3: Submit upload and review validation outcome >> Step 4: Verify records enter Drafted status pending Checker approval >> Step 5: Apply test data — Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB >> Step 6: Compare actual result with expected result: Modal closes. Valid records enter Drafted status pending Checker approval (FSD 5.1.3) |
| Acceptance Criteria | Overlay click closes modal. Per FSD 5.1.3: CSV/XLSX import with validation and Checker approval before active. |
| Expected Result | Modal closes. Valid records enter Drafted status pending Checker approval (FSD 5.1.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, medium, rbac, security |

### IWC-TC-137 — Verify Checker Approval popup structure after submit

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Checker Approval Modal |
| Priority | High |
| Preconditions | Admin user; action triggering Checker popup completed (Submit/Disable/Enable); Admin submitted new ignore word |
| Test Data | Word: financial services |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Trigger the Checker Approval workflow from a pending action >> Step 4: Review Checker Approval modal content and actions >> Step 5: Apply test data — Word: financial services >> Step 6: Compare actual result with expected result: Checker Approval popup displays with correct structure. Approve/Reject updates record status per FSD Maker-Checker rules |
| Acceptance Criteria | Popup shows Request Submitted header, icon, message, request details, OK button |
| Expected Result | Checker Approval popup displays with correct structure. Approve/Reject updates record status per FSD Maker-Checker rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | checker-approval-modal, high, rbac, security |

### IWC-TC-138 — Verify Checker popup message for new word submission

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Checker Approval Modal |
| Priority | High |
| Preconditions | Admin user; action triggering Checker popup completed (Submit/Disable/Enable); Admin submitted word |
| Test Data | Word: financial services |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Trigger the Checker Approval workflow from a pending action >> Step 4: Review Checker Approval modal content and actions >> Step 5: Apply test data — Word: financial services >> Step 6: Compare actual result with expected result: Correct submission message displayed. Approve/Reject updates record status per FSD Maker-Checker rules |
| Acceptance Criteria | Message shows [word] has been submitted and sent for Checker Approval. |
| Expected Result | Correct submission message displayed. Approve/Reject updates record status per FSD Maker-Checker rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | checker-approval-modal, high, rbac, security |

### IWC-TC-139 — Verify Checker popup request details section

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Checker Approval Modal |
| Priority | High |
| Preconditions | Admin user; action triggering Checker popup completed (Submit/Disable/Enable); Checker popup displayed |
| Test Data | Submitted by: Charu Chauhan |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Trigger the Checker Approval workflow from a pending action >> Step 4: Review Checker Approval modal content and actions >> Step 5: Apply test data — Submitted by: Charu Chauhan >> Step 6: Compare actual result with expected result: Submitter, timestamp, and Pending Checker status displayed. Approve/Reject updates record status per FSD Maker-Checker rules |
| Acceptance Criteria | Details show Submitted by, Timestamp, Status Pending Checker |
| Expected Result | Submitter, timestamp, and Pending Checker status displayed. Approve/Reject updates record status per FSD Maker-Checker rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | checker-approval-modal, high, rbac, security |

### IWC-TC-140 — Verify Checker popup timestamp format

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Checker Approval Modal |
| Priority | Medium |
| Preconditions | Admin user; action triggering Checker popup completed (Submit/Disable/Enable); Checker popup displayed after action |
| Test Data | Format: DD Mon YYYY HH:MM:SS |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Trigger the Checker Approval workflow from a pending action >> Step 4: Review Checker Approval modal content and actions >> Step 5: Apply test data — Format: DD Mon YYYY HH:MM:SS >> Step 6: Compare actual result with expected result: Timestamp recorded and displayed correctly. Approve/Reject updates record status per FSD Maker-Checker rules |
| Acceptance Criteria | Timestamp displayed in readable format with date and time |
| Expected Result | Timestamp recorded and displayed correctly. Approve/Reject updates record status per FSD Maker-Checker rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | checker-approval-modal, medium, rbac, security |

### IWC-TC-141 — Verify Checker popup for disable action

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Checker Approval Modal |
| Priority | High |
| Preconditions | Admin user; action triggering Checker popup completed (Submit/Disable/Enable); Admin disabled active word |
| Test Data | Word: trading company |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Word: trading company >> Step 7: Compare actual result with expected result: Disable-specific Checker message displayed. Checker Approval popup displayed before status change takes effect |
| Acceptance Criteria | Disable shows message word has been sent for Checker Approval to disable. Per FSD BR-007: enable/disable requires Maker-Checker approval before effective. |
| Expected Result | Disable-specific Checker message displayed. Checker Approval popup displayed before status change takes effect. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | checker-approval-modal, high, rbac, security |

### IWC-TC-142 — Verify Checker popup for enable action

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Checker Approval Modal |
| Priority | High |
| Preconditions | Admin user; action triggering Checker popup completed (Submit/Disable/Enable); Admin enabled inactive word |
| Test Data | Word: offshore account |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Trigger the Checker Approval workflow from a pending action >> Step 4: Review Checker Approval modal content and actions >> Step 5: Apply test data — Word: offshore account >> Step 6: Compare actual result with expected result: Enable-specific Checker message displayed. Checker Approval popup displayed before status change takes effect |
| Acceptance Criteria | Enable shows message word has been sent for Checker Approval to enable. Per FSD BR-007: enable/disable requires Maker-Checker approval before effective. |
| Expected Result | Enable-specific Checker message displayed. Checker Approval popup displayed before status change takes effect. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | checker-approval-modal, high, rbac, security |

### IWC-TC-143 — Verify OK button closes Checker popup

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Checker Approval Modal |
| Priority | Medium |
| Preconditions | Admin user; action triggering Checker popup completed (Submit/Disable/Enable); Checker popup open |
| Test Data | User Role: Checker |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Trigger the Checker Approval workflow from a pending action >> Step 4: Review Checker Approval modal content and actions >> Step 5: Apply test data — User Role: Checker >> Step 6: Compare actual result with expected result: Popup closes on OK click. Approve/Reject updates record status per FSD Maker-Checker rules |
| Acceptance Criteria | OK button closes Checker Approval popup |
| Expected Result | Popup closes on OK click. Approve/Reject updates record status per FSD Maker-Checker rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | checker-approval-modal, medium, rbac, security |

### IWC-TC-144 — Verify overlay click closes Checker popup

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Checker Approval Modal |
| Priority | Low |
| Preconditions | Admin user; action triggering Checker popup completed (Submit/Disable/Enable); Checker popup open |
| Test Data | User Role: Checker |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Trigger the Checker Approval workflow from a pending action >> Step 4: Review Checker Approval modal content and actions >> Step 5: Apply test data — User Role: Checker >> Step 6: Compare actual result with expected result: Popup closes on overlay click. Approve/Reject updates record status per FSD Maker-Checker rules |
| Acceptance Criteria | Overlay click closes Checker popup |
| Expected Result | Popup closes on overlay click. Approve/Reject updates record status per FSD Maker-Checker rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | checker-approval-modal, low, rbac, security |

### IWC-TC-145 — Verify drafted word requires Checker approval before Active per FSD BR-003 / FSD 7.1

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Checker Approval Modal |
| Priority | High |
| Preconditions | Admin user; action triggering Checker popup completed (Submit/Disable/Enable); Word submitted by Maker |
| Test Data | Word: new test word |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Trigger the Checker Approval workflow from a pending action >> Step 4: Review Checker Approval modal content and actions >> Step 5: Apply test data — Word: new test word >> Step 6: Compare actual result with expected result: Word status remains Drafted until Checker approval completes. Approve/Reject updates record status per FSD Maker-Checker rules |
| Acceptance Criteria | New word remains Drafted until Checker approves |
| Expected Result | Word status remains Drafted until Checker approval completes. Approve/Reject updates record status per FSD Maker-Checker rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | checker-approval-modal, high, rbac, security |

### IWC-TC-146 — Verify Word History panel opens on word click per FSD audit / Word History

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Word History Panel |
| Priority | High |
| Preconditions | User on main list view; ignore word record with history exists in table; Record with history exists |
| Test Data | Word: trading company |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target ignore word row >> Step 4: Click History icon in Actions column >> Step 5: Review audit entries in Word History panel >> Step 6: Apply test data — Word: trading company >> Step 7: Compare actual result with expected result: Word History panel slides in from right. Audit history shows user, action, and timestamp for the word |
| Acceptance Criteria | Clicking ignore word/phrase opens right-side Word History panel.. |
| Expected Result | Word History panel slides in from right. Audit history shows user, action, and timestamp for the word. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | word-history-panel, high, word-history |

### IWC-TC-147 — Verify Word History panel title

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Word History Panel |
| Priority | Medium |
| Preconditions | User on main list view; ignore word record with history exists in table; Word History panel open |
| Test Data | Word: trading company |
| Steps | Step 1: Locate target ignore word row >> Step 2: Click History icon in Actions column >> Step 3: Review audit entries in Word History panel >> Step 4: Apply test data — Word: trading company >> Step 5: Compare actual result with expected result: Title displays History â€” trading company. Audit history shows user, action, and timestamp for the word |
| Acceptance Criteria | Panel title shows History â€” [word].. |
| Expected Result | Title displays History â€” trading company. Audit history shows user, action, and timestamp for the word. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | word-history-panel, medium, word-history |

### IWC-TC-148 — Verify history metadata card fields

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Word History Panel |
| Priority | High |
| Preconditions | User on main list view; ignore word record with history exists in table; Word History panel open |
| Test Data | Word: trading company |
| Steps | Step 1: Locate target ignore word row >> Step 2: Click History icon in Actions column >> Step 3: Review audit entries in Word History panel >> Step 4: Apply test data — Word: trading company >> Step 5: Compare actual result with expected result: All six metadata fields displayed correctly. Audit history shows user, action, and timestamp for the word |
| Acceptance Criteria | Meta card shows Word/Phrase, Category, Risk Level, Match Type, Status, Created Date.. |
| Expected Result | All six metadata fields displayed correctly. Audit history shows user, action, and timestamp for the word. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | word-history-panel, high, functional |

### IWC-TC-149 — Verify activity timeline rendering

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Word History Panel |
| Priority | High |
| Preconditions | User on main list view; ignore word record with history exists in table; Word with multi-event history exists |
| Test Data | Word: defense services |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Click the History icon on the target ignore word row >> Step 4: Review the Word History panel entries and audit details >> Step 5: Apply test data — Word: defense services >> Step 6: Compare actual result with expected result: Complete activity timeline rendered with all event details. Audit history shows user, action, and timestamp for the word |
| Acceptance Criteria | Timeline shows chronological events with icons, action, date, user, role, department, notes |
| Expected Result | Complete activity timeline rendered with all event details. Audit history shows user, action, and timestamp for the word. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | word-history-panel, high, functional |

### IWC-TC-150 — Verify timeline event types

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Word History Panel |
| Priority | High |
| Preconditions | User on main list view; ignore word record with history exists in table; Word with full lifecycle history |
| Test Data | Word: politically exposed |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Click the History icon on the target ignore word row >> Step 4: Review the Word History panel entries and audit details >> Step 5: Apply test data — Word: politically exposed >> Step 6: Compare actual result with expected result: All relevant lifecycle events displayed in timeline. Audit history shows user, action, and timestamp for the word |
| Acceptance Criteria | Timeline includes Word Added, Sent for Checker Review, Approved, Disable Requested events |
| Expected Result | All relevant lifecycle events displayed in timeline. Audit history shows user, action, and timestamp for the word. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | word-history-panel, high, rbac, security |

### IWC-TC-151 — Verify timeline user avatar and role display

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Word History Panel |
| Priority | Medium |
| Preconditions | User on main list view; ignore word record with history exists in table; Word History panel with events |
| Test Data | User: Charu Chauhan; Role: Checker |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Click the History icon on the target ignore word row >> Step 4: Review the Word History panel entries and audit details >> Step 5: Apply test data — User: Charu Chauhan; Role: Checker >> Step 6: Compare actual result with expected result: User details displayed with avatar initials and role. Audit history shows user, action, and timestamp for the word |
| Acceptance Criteria | Each event shows user avatar initials, name, role, department |
| Expected Result | User details displayed with avatar initials and role. Audit history shows user, action, and timestamp for the word. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | word-history-panel, medium, rbac, security |

### IWC-TC-152 — Verify timeline notes display

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Word History Panel |
| Priority | Medium |
| Preconditions | User on main list view; ignore word record with history exists in table; History event with note exists |
| Test Data | Note: Added as part of initial Entity Suffixes list setup. |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Click the History icon on the target ignore word row >> Step 4: Review the Word History panel entries and audit details >> Step 5: Apply test data — Note: Added as part of initial Entity Suffixes list setup. >> Step 6: Compare actual result with expected result: Note displayed in bordered info box. Audit history shows user, action, and timestamp for the word |
| Acceptance Criteria | Events with notes show note text in styled box |
| Expected Result | Note displayed in bordered info box. Audit history shows user, action, and timestamp for the word. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | word-history-panel, medium, functional |

### IWC-TC-153 — Verify back arrow closes Word History panel

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Word History Panel |
| Priority | Medium |
| Preconditions | User on main list view; ignore word record with history exists in table; Word History panel open |
| Test Data | Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase |
| Steps | Step 1: Locate target ignore word row >> Step 2: Click History icon in Actions column >> Step 3: Review audit entries in Word History panel >> Step 4: Apply test data — Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase >> Step 5: Compare actual result with expected result: History panel closes. Audit history shows user, action, and timestamp for the word |
| Acceptance Criteria | Back arrow closes history panel.. |
| Expected Result | History panel closes. Audit history shows user, action, and timestamp for the word. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | word-history-panel, medium, word-history |

### IWC-TC-154 — Verify overlay click closes Word History panel

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Word History Panel |
| Priority | Medium |
| Preconditions | User on main list view; ignore word record with history exists in table; Word History panel open |
| Test Data | Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase |
| Steps | Step 1: Locate target ignore word row >> Step 2: Click History icon in Actions column >> Step 3: Review audit entries in Word History panel >> Step 4: Apply test data — Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase >> Step 5: Compare actual result with expected result: History panel closes. Audit history shows user, action, and timestamp for the word |
| Acceptance Criteria | Overlay click closes history panel.. |
| Expected Result | History panel closes. Audit history shows user, action, and timestamp for the word. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | word-history-panel, medium, word-history |

### IWC-TC-155 — Verify default history for word without detailed history

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Word History Panel |
| Priority | Medium |
| Preconditions | User on main list view; ignore word record with history exists in table; Word without custom history data |
| Test Data | Word: export limited |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target ignore word row >> Step 4: Click History icon in Actions column >> Step 5: Review audit entries in Word History panel >> Step 6: Apply test data — Word: export limited >> Step 7: Compare actual result with expected result: Default Word Added event displayed. Audit history shows user, action, and timestamp for the word |
| Acceptance Criteria | Word without detailed history shows default Word Added system event.. |
| Expected Result | Default Word Added event displayed. Audit history shows user, action, and timestamp for the word. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | word-history-panel, medium, export |

### IWC-TC-156 — Verify audit log generated for create update enable disable per FSD audit / Word History

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Word History Panel |
| Priority | High |
| Preconditions | User on main list view; ignore word record with history exists in table; Admin performs disable then enable |
| Test Data | Word: international trade |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Word: international trade >> Step 7: Compare actual result with expected result: Audit timeline reflects all status change actions. Checker Approval popup displayed before status change takes effect |
| Acceptance Criteria | All create, update, enable, disable actions generate audit log entries. Per FSD BR-007: enable/disable requires Maker-Checker approval before effective. |
| Expected Result | Audit timeline reflects all status change actions. Checker Approval popup displayed before status change takes effect. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | word-history-panel, high, rbac, security |

### IWC-TC-160 — Verify Viewer cannot Add Ignore Word

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Permissions & RBAC |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words |
| Test Data | User Role: Viewer |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Viewer cannot Add Ignore Word >> Step 4: Apply test data — User Role: Viewer >> Step 5: Compare actual result with expected result: Add Ignore Word button hidden or disabled for Viewer. Action allowed or blocked per the assigned user role |
| Acceptance Criteria | Viewer cannot access Add Ignore Word |
| Expected Result | Add Ignore Word button hidden or disabled for Viewer. Action allowed or blocked per the assigned user role. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | permissions-rbac, high, rbac, security |

### IWC-TC-161 — Verify Compliance Officer cannot Add Ignore Word

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Permissions & RBAC |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words |
| Test Data | User Role: Compliance Officer |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Compliance Officer cannot Add Ignore Word >> Step 4: Apply test data — User Role: Compliance Officer >> Step 5: Compare actual result with expected result: Add Ignore Word not available for Compliance Officer. Action allowed or blocked per the assigned user role |
| Acceptance Criteria | Compliance Officer cannot add ignore words |
| Expected Result | Add Ignore Word not available for Compliance Officer. Action allowed or blocked per the assigned user role. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | permissions-rbac, high, functional |

### IWC-TC-162 — Verify Admin can Add Ignore Word

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Permissions & RBAC |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words |
| Test Data | User Role: Admin |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Admin can Add Ignore Word >> Step 4: Apply test data — User Role: Admin >> Step 5: Compare actual result with expected result: Admin can add ignore words successfully. Action allowed or blocked per the assigned user role |
| Acceptance Criteria | Admin can open and submit Add Ignore Word panel |
| Expected Result | Admin can add ignore words successfully. Action allowed or blocked per the assigned user role. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | permissions-rbac, high, rbac, security |

### IWC-TC-163 — Verify Admin can toggle enable disable

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Permissions & RBAC |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words |
| Test Data | User Role: Admin |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — User Role: Admin >> Step 7: Compare actual result with expected result: Admin can trigger enable/disable actions. Checker Approval popup displayed before status change takes effect |
| Acceptance Criteria | Admin can perform Off/On row actions. Per FSD BR-007: enable/disable requires Maker-Checker approval before effective. |
| Expected Result | Admin can trigger enable/disable actions. Checker Approval popup displayed before status change takes effect. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | permissions-rbac, high, rbac, security |

### IWC-TC-164 — Verify Admin can Add Category and Category Controls

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Permissions & RBAC |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words |
| Test Data | User Role: Admin |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Admin can Add Category and Category Controls >> Step 4: Apply test data — User Role: Admin >> Step 5: Compare actual result with expected result: Admin can access both category modals. Action allowed or blocked per the assigned user role |
| Acceptance Criteria | Admin can access category management features. Per FSD 4.2: category name unique (max 100 chars); optional description (max 500); Checker approval on submit. |
| Expected Result | Admin can access both category modals. Action allowed or blocked per the assigned user role. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | permissions-rbac, high, rbac, security |

### IWC-TC-165 — Verify Admin can Bulk Upload

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Permissions & RBAC |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words |
| Test Data | User Role: Admin |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — User Role: Admin >> Step 8: Compare actual result with expected result: Bulk Upload accessible for Admin. Action allowed or blocked per the assigned user role |
| Acceptance Criteria | Admin can access bulk upload. Per FSD 5.1.3: CSV/XLSX import with validation and Checker approval before active. |
| Expected Result | Bulk Upload accessible for Admin. Action allowed or blocked per the assigned user role. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | permissions-rbac, high, rbac, security |

### IWC-TC-166 — Verify Checker can approve requests

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Permissions & RBAC |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words |
| Test Data | User Role: Checker |
| Steps | Step 1: Log in as Checker with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Checker can approve requests >> Step 4: Apply test data — User Role: Checker >> Step 5: Compare actual result with expected result: Checker can approve pending requests. Action allowed or blocked per the assigned user role |
| Acceptance Criteria | Checker role can approve disable, enable, submit requests |
| Expected Result | Checker can approve pending requests. Action allowed or blocked per the assigned user role. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | permissions-rbac, high, rbac, security |

### IWC-TC-167 — Verify Checker cannot Add Ignore Word

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Permissions & RBAC |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words |
| Test Data | User Role: Checker |
| Steps | Step 1: Log in as Checker with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Checker cannot Add Ignore Word >> Step 4: Apply test data — User Role: Checker >> Step 5: Compare actual result with expected result: Add Ignore Word not available for Checker. Action allowed or blocked per the assigned user role |
| Acceptance Criteria | Checker cannot add new ignore words |
| Expected Result | Add Ignore Word not available for Checker. Action allowed or blocked per the assigned user role. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | permissions-rbac, medium, rbac, security |

### IWC-TC-168 — Verify Compliance Officer cannot view audit trail button

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Permissions & RBAC |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words |
| Test Data | User Role: Compliance Officer |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Compliance Officer cannot view audit trail button >> Step 4: Apply test data — User Role: Compliance Officer >> Step 5: Compare actual result with expected result: Audit Trail button not present in toolbar. Action allowed or blocked per the assigned user role |
| Acceptance Criteria | System-wide Audit Trail toolbar button removed; Compliance Officer uses Word History |
| Expected Result | Audit Trail button not present in toolbar. Action allowed or blocked per the assigned user role. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | permissions-rbac, medium, word-history |

### IWC-TC-173 — Verify DELETE endpoint removed per FSD

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | API & Data Model |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Admin credentials |
| Test Data | Endpoint: DELETE /api/v1/ignore-words/:id |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: DELETE endpoint removed per FSD >> Step 4: Apply test data — Endpoint: DELETE /api/v1/ignore-words/:id >> Step 5: Compare actual result with expected result: DELETE endpoint unavailable; disable-only workflow enforced. API response matches expected data model and status codes |
| Acceptance Criteria | DELETE /api/v1/ignore-words/:id should not be available. Per FSD BR-006: no hard delete; disable only. |
| Expected Result | DELETE endpoint unavailable; disable-only workflow enforced. API response matches expected data model and status codes. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | api-data-model, high, api |

### IWC-TC-181 — Verify API failure state on list load

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Error Handling |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; API failure simulated |
| Test Data | API Status: 500 |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: API failure state on list load >> Step 4: Apply test data — API Status: 500 >> Step 5: Compare actual result with expected result: Error state displayed without breaking layout. User receives clear error/validation message; no data corruption |
| Acceptance Criteria | User-friendly error when GET ignore-words fails |
| Expected Result | Error state displayed without breaking layout. User receives clear error/validation message; no data corruption. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | error-handling, high, api |

### IWC-TC-182 — Verify Retry after API failure

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Error Handling |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; API failure then recovery |
| Test Data | API Status: Restored |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Retry after API failure >> Step 4: Apply test data — API Status: Restored >> Step 5: Compare actual result with expected result: Data loads successfully after retry. User receives clear error/validation message; no data corruption |
| Acceptance Criteria | Retry restores data after API recovery |
| Expected Result | Data loads successfully after retry. User receives clear error/validation message; no data corruption. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | error-handling, medium, api |

### IWC-TC-183 — Verify unauthorized access handling

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Error Handling |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Unauthorized session |
| Test Data | User: unauthorized_guest |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: unauthorized access handling >> Step 4: Apply test data — User: unauthorized_guest >> Step 5: Compare actual result with expected result: Unauthorized access blocked appropriately. User receives clear error/validation message; no data corruption |
| Acceptance Criteria | Unauthorized user redirected or shown access message |
| Expected Result | Unauthorized access blocked appropriately. User receives clear error/validation message; no data corruption. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | error-handling, high, rbac, security |

### IWC-TC-185 — Verify Inter font usage across module

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | UI/UX Consistency |
| Priority | Low |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; User on Ignore Words Configuration page |
| Test Data | Font: Inter |
| Steps | Step 1: Perform test action: Inter font usage across module >> Step 2: Apply test data — Font: Inter >> Step 3: Compare actual result with expected result: Inter font applied across module elements. Styling matches application design standards |
| Acceptance Criteria | Module uses Inter font family per typography spec |
| Expected Result | Inter font applied across module elements. Styling matches application design standards. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ui-ux-consistency, low, functional |

### IWC-TC-188 — Verify toast notification styling and auto-dismiss

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | UI/UX Consistency |
| Priority | Medium |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Admin adds category |
| Test Data | Toast: Category added successfully |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: toast notification styling and auto-dismiss >> Step 4: Apply test data — Toast: Category added successfully >> Step 5: Compare actual result with expected result: Toast appears bottom-right and auto-dismisses after ~2.8 seconds. Styling matches application design standards |
| Acceptance Criteria | Toast bottom-right #161616 bg, 14px font, auto-dismiss 2.8s |
| Expected Result | Toast appears bottom-right and auto-dismisses after ~2.8 seconds. Styling matches application design standards. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ui-ux-consistency, medium, notifications |

### IWC-TC-190 — Verify keyboard navigation across toolbar buttons

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Accessibility |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; User on module page |
| Test Data | Key: Tab |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: keyboard navigation across toolbar buttons >> Step 4: Apply test data — Key: Tab >> Step 5: Compare actual result with expected result: All toolbar buttons reachable via keyboard. Component meets accessibility requirements for labels and focus |
| Acceptance Criteria | Keyboard Tab navigates toolbar actions |
| Expected Result | All toolbar buttons reachable via keyboard. Component meets accessibility requirements for labels and focus. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accessibility, medium |

### IWC-TC-191 — Verify keyboard focus indicators visible

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Accessibility |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Keyboard navigation active |
| Test Data | Key: Tab |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: keyboard focus indicators visible >> Step 4: Apply test data — Key: Tab >> Step 5: Compare actual result with expected result: Visible focus indicators on focused elements. Component meets accessibility requirements for labels and focus |
| Acceptance Criteria | Focused elements show visible focus indicators |
| Expected Result | Visible focus indicators on focused elements. Component meets accessibility requirements for labels and focus. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accessibility, medium |

### IWC-TC-192 — Verify modal keyboard trap and Escape close

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Accessibility |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Add Category modal open |
| Test Data | Key: Escape |
| Steps | Step 1: Perform test action: modal keyboard trap and Escape close >> Step 2: Apply test data — Key: Escape >> Step 3: Compare actual result with expected result: Modal keyboard accessible; Escape closes modal if supported. Component meets accessibility requirements for labels and focus |
| Acceptance Criteria | Modals support keyboard interaction and Escape to close where applicable |
| Expected Result | Modal keyboard accessible; Escape closes modal if supported. Component meets accessibility requirements for labels and focus. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accessibility, medium |

### IWC-TC-194 — Verify Admin-only actions hidden from unauthorized roles

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Security Validation |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words |
| Test Data | User Role: Compliance Officer |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Admin-only actions hidden from unauthorized roles >> Step 4: Apply test data — User Role: Compliance Officer >> Step 5: Compare actual result with expected result: Admin-only actions not available to Compliance Officer. Unauthorized access or input is blocked appropriately |
| Acceptance Criteria | Add, toggle, category, bulk actions restricted to Admin |
| Expected Result | Admin-only actions not available to Compliance Officer. Unauthorized access or input is blocked appropriately. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | security-validation, high, rbac, security |

### IWC-TC-197 — Verify complete end-to-end add word workflow

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Regression Validation |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Admin user |
| Test Data | Word: correspondent services |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: complete end-to-end add word workflow >> Step 4: Apply test data — Word: correspondent services >> Step 5: Compare actual result with expected result: Complete add workflow executes without errors. Existing functionality remains unaffected after the change |
| Acceptance Criteria | Full workflow: add word, submit, checker popup, drafted tab, history |
| Expected Result | Complete add workflow executes without errors. Existing functionality remains unaffected after the change. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-validation, high, rbac, security |

### IWC-TC-198 — Verify complete disable enable workflow with Checker

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Regression Validation |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Admin user |
| Test Data | Word: security advisory |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Word: security advisory >> Step 7: Compare actual result with expected result: Disable/enable workflow completes with Checker approval steps. Checker Approval popup displayed before status change takes effect |
| Acceptance Criteria | Disable active word, verify inactive tab, enable back with Checker popup. Per FSD BR-007: enable/disable requires Maker-Checker approval before effective. |
| Expected Result | Disable/enable workflow completes with Checker approval steps. Checker Approval popup displayed before status change takes effect. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-validation, high, rbac, security |

### IWC-TC-199 — Verify complete bulk upload and export workflow

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Regression Validation |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Admin user; valid CSV |
| Test Data | File: bulk_words.csv |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File: bulk_words.csv >> Step 8: Compare actual result with expected result: Bulk upload and export workflow completes successfully. Existing functionality remains unaffected after the change |
| Acceptance Criteria | Bulk upload words then export Drafted tab. Per FSD 5.1.4: export active ignore word list in structured CSV with all fields and metadata. |
| Expected Result | Bulk upload and export workflow completes successfully. Existing functionality remains unaffected after the change. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-validation, high, export |

### IWC-TC-200 — Verify category add then use in ignore word form

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Regression Validation |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Admin user |
| Test Data | Category: Narcotics; Word: controlled substance |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: category add then use in ignore word form >> Step 4: Apply test data — Category: Narcotics; Word: controlled substance >> Step 5: Compare actual result with expected result: New category usable in ignore word creation workflow. Existing functionality remains unaffected after the change |
| Acceptance Criteria | Add category then create ignore word in new category |
| Expected Result | New category usable in ignore word creation workflow. Existing functionality remains unaffected after the change. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-validation, high, functional |

### IWC-TC-201 — Verify frontend console stability during complete workflow

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Regression Validation |
| Priority | Medium |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Console open; Admin user |
| Test Data | User Role: Compliance Officer; Module: Ignore Words Configuration |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: frontend console stability during complete workflow >> Step 4: Apply test data — User Role: Compliance Officer; Module: Ignore Words Configuration >> Step 5: Compare actual result with expected result: No JavaScript errors during complete workflow. No JavaScript errors or unhandled exceptions during page load |
| Acceptance Criteria | No console errors during full module workflow |
| Expected Result | No JavaScript errors during complete workflow. No JavaScript errors or unhandled exceptions during page load. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-validation, medium, error-handling |

### IWC-TC-202 — Verify data consistency after multiple tab switches and searches

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Regression Validation |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Multiple records exist |
| Test Data | Search term: trading; Expected filter: partial match on word/phrase |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search term: trading; Expected filter: partial match on word/phrase >> Step 7: Compare actual result with expected result: Tab counts and table data remain consistent. Existing functionality remains unaffected after the change |
| Acceptance Criteria | Data remains consistent after rapid tab and search interactions.. |
| Expected Result | Tab counts and table data remain consistent. Existing functionality remains unaffected after the change. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-validation, medium, api |

### IWC-TC-204 — Verify Configuration parent menu expand collapse

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Sidebar Navigation |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words |
| Test Data | Menu: Configuration |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Configuration parent menu expand collapse >> Step 4: Apply test data — Menu: Configuration >> Step 5: Compare actual result with expected result: Configuration submenu expands with chevron indicator when active. Sidebar navigation highlights and routes correctly |
| Acceptance Criteria | Configuration parent item should expand to show submenu with chevron rotation |
| Expected Result | Configuration submenu expands with chevron indicator when active. Sidebar navigation highlights and routes correctly. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | sidebar-navigation, medium, functional |

### IWC-TC-205 — Verify sidebar menu search input

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Sidebar Navigation |
| Priority | Low |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; User on any page with sidebar visible |
| Test Data | Search: Ignore |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search: Ignore >> Step 7: Compare actual result with expected result: Sidebar menu search filters navigation items. Sidebar navigation highlights and routes correctly |
| Acceptance Criteria | Sidebar should contain Search menus... input for filtering navigation.. |
| Expected Result | Sidebar menu search filters navigation items. Sidebar navigation highlights and routes correctly. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | sidebar-navigation, low, functional |

### IWC-TC-207 — Verify Exact phrase match highlights only exact phrase in live tester

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Match Type Behavior |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Add Ignore Word panel open; active Exact phrase word exists |
| Test Data | Word: trading company; Match: Exact phrase; Narrative A: trading company payment; Narrative B: trading |
| Steps | Step 1: Perform test action: Exact phrase match highlights only exact phrase in live tester >> Step 2: Apply test data — Word: trading company; Match: Exact phrase; Narrative A: trading company payment; Narrative B: trading >> Step 3: Compare actual result with expected result: Exact phrase highlighted only when full phrase present; partial substring alone not highlighted for exact type. Matching logic behaves per selected Match Type |
| Acceptance Criteria | Exact phrase ignore word should highlight only when full exact phrase appears in narrative |
| Expected Result | Exact phrase highlighted only when full phrase present; partial substring alone not highlighted for exact type. Matching logic behaves per selected Match Type. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | match-type-behavior, high, functional |

### IWC-TC-208 — Verify Partial match highlights substring in live tester

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Match Type Behavior |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Add Ignore Word panel open |
| Test Data | Word: international trade; Match: Partial match; Narrative: trade settlement |
| Steps | Step 1: Perform test action: Partial match highlights substring in live tester >> Step 2: Apply test data — Word: international trade; Match: Partial match; Narrative: trade settlement >> Step 3: Compare actual result with expected result: Partial match highlights appropriate substring matches in narrative preview. Matching logic behaves per selected Match Type |
| Acceptance Criteria | Partial match ignore word should highlight when partial substring found in narrative |
| Expected Result | Partial match highlights appropriate substring matches in narrative preview. Matching logic behaves per selected Match Type. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | match-type-behavior, high, functional |

### IWC-TC-209 — Verify ignore word maximum length 200 characters

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Data Validation |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Add Ignore Word panel open |
| Test Data | Word Length: 201 characters |
| Steps | Step 1: Perform test action: ignore word maximum length 200 characters >> Step 2: Apply test data — Word Length: 201 characters >> Step 3: Compare actual result with expected result: System rejects or truncates input exceeding 200 character limit. Invalid input is rejected with appropriate validation feedback |
| Acceptance Criteria | Ignore Word/Phrase field should enforce String(200) maximum length |
| Expected Result | System rejects or truncates input exceeding 200 character limit. Invalid input is rejected with appropriate validation feedback. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-validation, medium, functional |

### IWC-TC-210 — Verify category name uniqueness on duplicate add

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Data Validation |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Category Entity Suffixes already exists |
| Test Data | Category Name: Entity Suffixes |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: category name uniqueness on duplicate add >> Step 4: Apply test data — Category Name: Entity Suffixes >> Step 5: Compare actual result with expected result: Duplicate category name rejected or prevented with appropriate message. Invalid input is rejected with appropriate validation feedback |
| Acceptance Criteria | Adding category with existing name should be handled appropriately |
| Expected Result | Duplicate category name rejected or prevented with appropriate message. Invalid input is rejected with appropriate validation feedback. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-validation, medium, functional |

### IWC-TC-214 — Verify module behavior on Google Chrome

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Browser Compatibility |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Chrome browser available |
| Test Data | Browser: Chrome Latest |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: module behavior on Google Chrome >> Step 4: Apply test data — Browser: Chrome Latest >> Step 5: Compare actual result with expected result: Module functions without browser-specific issues on Chrome. Feature works consistently across supported browsers |
| Acceptance Criteria | Module functions correctly on Chrome |
| Expected Result | Module functions without browser-specific issues on Chrome. Feature works consistently across supported browsers. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | browser-compatibility, high, browser-compat |

### IWC-TC-215 — Verify module behavior on Microsoft Edge

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Browser Compatibility |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Edge browser available |
| Test Data | Browser: Edge Latest |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: module behavior on Microsoft Edge >> Step 4: Apply test data — Browser: Edge Latest >> Step 5: Compare actual result with expected result: Module functions without browser-specific issues on Edge. Feature works consistently across supported browsers |
| Acceptance Criteria | Module functions correctly on Edge |
| Expected Result | Module functions without browser-specific issues on Edge. Feature works consistently across supported browsers. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | browser-compatibility, medium, browser-compat |

### IWC-TC-216 — Verify module behavior on Mozilla Firefox

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Browser Compatibility |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Firefox browser available |
| Test Data | Browser: Firefox Latest |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: module behavior on Mozilla Firefox >> Step 4: Apply test data — Browser: Firefox Latest >> Step 5: Compare actual result with expected result: Module functions without browser-specific issues on Firefox. Feature works consistently across supported browsers |
| Acceptance Criteria | Module functions correctly on Firefox |
| Expected Result | Module functions without browser-specific issues on Firefox. Feature works consistently across supported browsers. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | browser-compatibility, medium, browser-compat |

### IWC-TC-219 — Verify Main List View to Add Ignore Word Panel flow

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Navigation Flow |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Admin on main list |
| Test Data | Flow: List → Add Panel |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Perform test action: Main List View to Add Ignore Word Panel flow >> Step 3: Apply test data — Flow: List → Add Panel >> Step 4: Compare actual result with expected result: Navigation flow completes per Appendix A. User reaches the correct screen without broken navigation |
| Acceptance Criteria | Appendix A flow from list to Add Ignore Word panel via primary button |
| Expected Result | Navigation flow completes per Appendix A. User reaches the correct screen without broken navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-flow, high, functional |

### IWC-TC-220 — Verify Add Ignore Word Panel return to Main List View

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Navigation Flow |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Add Ignore Word panel open |
| Test Data | Flow: Panel → List |
| Steps | Step 1: Perform test action: Add Ignore Word Panel return to Main List View >> Step 2: Apply test data — Flow: Panel → List >> Step 3: Compare actual result with expected result: All three return paths navigate back to Main List View. User reaches the correct screen without broken navigation |
| Acceptance Criteria | Panel returns to list via Cancel, back arrow, or Submit |
| Expected Result | All three return paths navigate back to Main List View. User reaches the correct screen without broken navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-flow, high, functional |

### IWC-TC-221 — Verify Main List View to CSV Download via Export

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Navigation Flow |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Records on Active tab |
| Test Data | Flow: List → CSV Download |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Ensure records exist on Active tab >> Step 3: Click Export (FSD Section 5.1.4) >> Step 4: Verify file name ignore_words_export.csv downloads >> Step 5: Open CSV and confirm metadata header and data rows >> Step 6: Apply test data — Flow: List → CSV Download >> Step 7: Compare actual result with expected result: Export navigation flow completes with CSV download. User reaches the correct screen without broken navigation |
| Acceptance Criteria | Export from list triggers CSV download per Appendix A. Per FSD 5.1.4: export active ignore word list in structured CSV with all fields and metadata. |
| Expected Result | Export navigation flow completes with CSV download. User reaches the correct screen without broken navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-flow, high, export |

### IWC-TC-222 — Verify clicking ignore word opens Word History from list

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Navigation Flow |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Record exists in table |
| Test Data | Flow: List → Word History Panel |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Locate target ignore word row >> Step 3: Click History icon in Actions column >> Step 4: Review audit entries in Word History panel >> Step 5: Apply test data — Flow: List → Word History Panel >> Step 6: Compare actual result with expected result: Word click opens Word History panel successfully. User reaches the correct screen without broken navigation |
| Acceptance Criteria | Click word in table opens Word History panel per entry point spec.. |
| Expected Result | Word click opens Word History panel successfully. User reaches the correct screen without broken navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-flow, high, word-history |

### IWC-TC-224 — Verify FSD BR-002 all mandatory fields required on submit

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Business Rules |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Add Ignore Word panel open |
| Test Data | BR-02 |
| Steps | Step 1: Perform test action: FSD BR-002 all mandatory fields required on submit >> Step 2: Apply test data — BR-02 >> Step 3: Compare actual result with expected result: Submit blocked when any mandatory field missing. System enforces the stated FSD business rule without exception |
| Acceptance Criteria | Word, Category, Risk Level, Match Type all required |
| Expected Result | Submit blocked when any mandatory field missing. System enforces the stated FSD business rule without exception. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, high, functional |

### IWC-TC-226 — Verify FSD 5.1.3 bulk upload drafted status and Checker workflow

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Business Rules |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Valid bulk file |
| Test Data | FSD 5.1.3 bulk upload workflow |
| Steps | Step 1: Log in as Checker with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — FSD 5.1.3 bulk upload workflow >> Step 8: Compare actual result with expected result: Bulk records in Drafted status with Checker workflow triggered. System enforces the stated FSD business rule without exception |
| Acceptance Criteria | Bulk uploaded records enter Drafted and trigger Checker Approval. Per FSD 5.1.3: CSV/XLSX import with validation and Checker approval before active. |
| Expected Result | Bulk records in Drafted status with Checker workflow triggered. System enforces the stated FSD business rule without exception. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, high, rbac, security |

### IWC-TC-227 — Verify bulk upload validation category required and All Categories invalid for upload

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Business Rules |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Bulk Upload modal open |
| Test Data | BR-10 |
| Steps | Step 1: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 2: Select category and attach test file >> Step 3: Submit upload and review validation outcome >> Step 4: Verify records enter Drafted status pending Checker approval >> Step 5: Apply test data — BR-10 >> Step 6: Compare actual result with expected result: Upload rejected when All Categories selected. System enforces the stated FSD business rule without exception |
| Acceptance Criteria | Specific category must be selected for bulk upload. Per FSD 5.1.3: CSV/XLSX import with validation and Checker approval before active. |
| Expected Result | Upload rejected when All Categories selected. System enforces the stated FSD business rule without exception. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, high, rbac, security |

### IWC-TC-228 — Verify narrative preview scope live tester highlights all active words plus draft

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Business Rules |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Active words in multiple categories |
| Test Data | BR-11 |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: narrative preview scope live tester highlights all active words plus draft >> Step 4: Apply test data — BR-11 >> Step 5: Compare actual result with expected result: All active matches plus draft word highlighted. System enforces the stated FSD business rule without exception |
| Acceptance Criteria | Tester scope includes all active words regardless of category plus current draft |
| Expected Result | All active matches plus draft word highlighted. System enforces the stated FSD business rule without exception. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, high, functional |

### IWC-TC-229 — Verify FSD audit / Word History word history and audit logging on all actions

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Business Rules |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Admin performs lifecycle actions on word |
| Test Data | BR-12 |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target ignore word row >> Step 4: Click History icon in Actions column >> Step 5: Review audit entries in Word History panel >> Step 6: Apply test data — BR-12 >> Step 7: Compare actual result with expected result: Complete audit trail visible in Word History panel. System enforces the stated FSD business rule without exception |
| Acceptance Criteria | History panel and audit logs capture create, update, enable, disable.. |
| Expected Result | Complete audit trail visible in Word History panel. System enforces the stated FSD business rule without exception. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, high, word-history |

### IWC-TC-230 — Verify client-side search (phrase and category only) search limited to phrase and category only

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Business Rules |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Mixed dataset |
| Test Data | BR-13 |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — BR-13 >> Step 7: Compare actual result with expected result: Search works for phrase and category only. System enforces the stated FSD business rule without exception |
| Acceptance Criteria | Search matches only Ignore Word/Phrase and Category fields.. |
| Expected Result | Search works for phrase and category only. System enforces the stated FSD business rule without exception. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, high, functional |

### IWC-TC-231 — Verify tab switch behaviour sort resets on tab switch

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Business Rules |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Sorted column on tab |
| Test Data | BR-14 |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: tab switch behaviour sort resets on tab switch >> Step 4: Apply test data — BR-14 >> Step 5: Compare actual result with expected result: Sort order reset to default insertion order after tab switch. System enforces the stated FSD business rule without exception |
| Acceptance Criteria | Sort order resets to default on tab change |
| Expected Result | Sort order reset to default insertion order after tab switch. System enforces the stated FSD business rule without exception. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, medium, functional |

### IWC-TC-232 — Verify same ignore word allowed in different category per FSD BR-001

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Duplicate Validation |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Word trading company exists in Entity Suffixes category |
| Test Data | Word: trading company; Category: Common Noise Words; Match: Exact phrase |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: same ignore word allowed in different category per FSD BR-001 >> Step 4: Apply test data — Word: trading company; Category: Common Noise Words; Match: Exact phrase >> Step 5: Compare actual result with expected result: Word saved as Drafted without duplicate error; Checker Approval popup displayed. Duplicate entries are prevented per FSD rules |
| Acceptance Criteria | Same word/phrase may exist in different categories without duplicate error |
| Expected Result | Word saved as Drafted without duplicate error; Checker Approval popup displayed. Duplicate entries are prevented per FSD rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | duplicate-validation, high, error-handling |

### IWC-TC-233 — Verify Off action not displayed on inactive rows per FSD row actions column

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Row Actions |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Inactive record exists on Inactive tab; Admin user |
| Test Data | Word: offshore account |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the target ignore word row using test data >> Step 4: Click the applicable row action button (On/Off/Submit/History) >> Step 5: Observe system response including any Checker Approval popup >> Step 6: Apply test data — Word: offshore account >> Step 7: Compare actual result with expected result: On/Enable button displayed; Off/Disable button not displayed. Checker Approval popup shown where Maker-Checker applies (FSD BR-007) |
| Acceptance Criteria | Inactive rows should show Enable action only not Disable |
| Expected Result | On/Enable button displayed; Off/Disable button not displayed. Checker Approval popup shown where Maker-Checker applies (FSD BR-007). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | row-actions, high, functional |

### IWC-TC-234 — Verify drafted rows do not show Off or On actions per HTML

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Row Actions |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Drafted record exists; Admin user |
| Test Data | Word: crypto exchange |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the target ignore word row using test data >> Step 4: Click the applicable row action button (On/Off/Submit/History) >> Step 5: Observe system response including any Checker Approval popup >> Step 6: Apply test data — Word: crypto exchange >> Step 7: Compare actual result with expected result: Submit button displayed; Off and On action buttons not displayed. Checker Approval popup shown where Maker-Checker applies (FSD BR-007) |
| Acceptance Criteria | Drafted rows should display Submit action only per HTML renderTable logic |
| Expected Result | Submit button displayed; Off and On action buttons not displayed. Checker Approval popup shown where Maker-Checker applies (FSD BR-007). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | row-actions, high, functional |

### IWC-TC-235 — Verify inactive and drafted words are not highlighted in preview

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Add Ignore Word panel open per FSD 4.3 Step 7; Inactive and drafted words exist; Add Ignore Word panel open |
| Test Data | Inactive: offshore account; Drafted: wire transfer agency |
| Steps | Step 1: Open Add Ignore Word panel; go to Live Narrative Tester (FSD Section 4.3 Step 7) >> Step 2: Enter word and narrative from test data >> Step 3: Observe real-time preview highlighting per Match Type >> Step 4: Apply test data — Inactive: offshore account; Drafted: wire transfer agency >> Step 5: Compare actual result with expected result: Inactive and drafted words not highlighted unless they are active or the current typed draft word. Preview updates in real time based on Match Type selection |
| Acceptance Criteria | Live tester highlights only active ignore words plus current draft word being typed |
| Expected Result | Inactive and drafted words not highlighted unless they are active or the current typed draft word. Preview updates in real time based on Match Type selection. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, medium, functional |

### IWC-TC-236 — Verify word submit shows Checker Approval popup not toast per FSD ÂSection 8.2 and HTML

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Notifications |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Admin user; Add Ignore Word panel open |
| Test Data | Word: correspondent services |
| Steps | Step 1: Perform test action: word submit shows Checker Approval popup not toast per FSD ÂSection 8.2 and HTML >> Step 2: Apply test data — Word: correspondent services >> Step 3: Compare actual result with expected result: Checker Approval popup displayed with Request sent for Checker Approval; no bottom-right toast for word submit. User receives appropriate success or error notification |
| Acceptance Criteria | Word submitted trigger should open Checker Approval modal per HTML showChecker |
| Expected Result | Checker Approval popup displayed with Request sent for Checker Approval; no bottom-right toast for word submit. User receives appropriate success or error notification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notifications, high, rbac, security |

### IWC-TC-237 — Verify FSD BR-003 / FSD 7.1 word remains Drafted until Checker approves

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Business Rules |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Admin submitted new ignore word; Checker approval pending |
| Test Data | Word: new compliance phrase |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: FSD BR-003 / FSD 7.1 word remains Drafted until Checker approves >> Step 4: Apply test data — Word: new compliance phrase >> Step 5: Compare actual result with expected result: Word status remains Drafted; Active tab does not show word until Checker approves. System enforces the stated FSD business rule without exception |
| Acceptance Criteria | Newly submitted word must not become Active without Checker approval |
| Expected Result | Word status remains Drafted; Active tab does not show word until Checker approves. System enforces the stated FSD business rule without exception. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, high, rbac, security |

### IWC-TC-238 — Verify FSD BR-007 tab counts unchanged on failed submit

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Business Rules |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Admin on Add Ignore Word panel |
| Test Data | User Role: Compliance Officer; Module: Ignore Words Configuration |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: FSD BR-007 tab counts unchanged on failed submit >> Step 4: Apply test data — User Role: Compliance Officer; Module: Ignore Words Configuration >> Step 5: Compare actual result with expected result: Tab counts remain unchanged after failed validation. System enforces the stated FSD business rule without exception |
| Acceptance Criteria | Failed submission should not change tab counts |
| Expected Result | Tab counts remain unchanged after failed validation. System enforces the stated FSD business rule without exception. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, high, functional |

### IWC-TC-239 — Verify FSD BR-002 rejects whitespace-only ignore word phrase

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Business Rules |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Add Ignore Word panel open |
| Test Data | Word: (spaces only) |
| Steps | Step 1: Perform test action: FSD BR-002 rejects whitespace-only ignore word phrase >> Step 2: Apply test data — Word: (spaces only) >> Step 3: Compare actual result with expected result: Submit blocked with validation; alert or inline error; no Drafted record created. System enforces the stated FSD business rule without exception |
| Acceptance Criteria | Whitespace-only input should be treated as empty and blocked on submit |
| Expected Result | Submit blocked with validation; alert or inline error; no Drafted record created. System enforces the stated FSD business rule without exception. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, high, maker-checker |

### IWC-TC-240 — Verify FSD audit / Word History no audit entry on failed bulk upload

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Business Rules |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Invalid bulk upload file |
| Test Data | File: invalid_schema.csv |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target ignore word row >> Step 4: Click History icon in Actions column >> Step 5: Review audit entries in Word History panel >> Step 6: Apply test data — File: invalid_schema.csv >> Step 7: Compare actual result with expected result: No CREATE or BULK_UPLOAD audit entries created for failed import. System enforces the stated FSD business rule without exception |
| Acceptance Criteria | Failed bulk upload should not create audit log entries for imported words. Per FSD 5.1.3: CSV/XLSX import with validation and Checker approval before active. |
| Expected Result | No CREATE or BULK_UPLOAD audit entries created for failed import. System enforces the stated FSD business rule without exception. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, medium, rbac, security |

### IWC-TC-245 — Verify XSS payload in search treated as literal text

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Security Validation |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; User on Ignore Words Configuration page |
| Test Data | Search: <script>alert(1)</script> |
| Steps | Step 1: Enter search/filter term from test data in toolbar >> Step 2: Apply filter and review table results >> Step 3: Clear filter and confirm full list restores >> Step 4: Apply test data — Search: <script>alert(1)</script> >> Step 5: Compare actual result with expected result: No script execution; search treated as literal; table renders safely. Unauthorized access or input is blocked appropriately |
| Acceptance Criteria | Search input should not execute script tags.. |
| Expected Result | No script execution; search treated as literal; table renders safely. Unauthorized access or input is blocked appropriately. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | security-validation, high, functional |

### IWC-TC-246 — Verify empty bulk upload file rejected

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Negative Scenarios |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Empty bulk file available |
| Test Data | File: empty.csv |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File: empty.csv >> Step 8: Compare actual result with expected result: Upload rejected with clear error; no partial records created. System handles invalid input gracefully without crash |
| Acceptance Criteria | Empty CSV/XLSX file should fail gracefully. Per FSD 5.1.3: CSV/XLSX import with validation and Checker approval before active. |
| Expected Result | Upload rejected with clear error; no partial records created. System handles invalid input gracefully without crash. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | negative-scenarios, high, rbac, security |

### IWC-TC-247 — Verify double-click Submit on Add Ignore Word prevented

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Negative Scenarios |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Add Ignore Word panel with valid data |
| Test Data | Word: double submit test |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: double-click Submit on Add Ignore Word prevented >> Step 4: Apply test data — Word: double submit test >> Step 5: Compare actual result with expected result: Only one Drafted record created; UI prevents duplicate submission. System handles invalid input gracefully without crash |
| Acceptance Criteria | Double submit should not create duplicate drafted records. Per FSD 4.3 Step 8b and FSD 7.1: submit sends for Checker approval; status Pending Approval until approved. |
| Expected Result | Only one Drafted record created; UI prevents duplicate submission. System handles invalid input gracefully without crash. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | negative-scenarios, high, rbac, security |

### IWC-TC-248 — UAT verify Admin creates ignore word and Checker approves to Active

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | UAT Scenarios |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Admin and Checker users available |
| Test Data | Word: uat approval test |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: UAT verify Admin creates ignore word and Checker approves to Active >> Step 4: Apply test data — Word: uat approval test >> Step 5: Compare actual result with expected result: Complete workflow succeeds; word appears Active after Checker approval; Word History shows approval event. End-to-end workflow completes as per business requirement |
| Acceptance Criteria | End-to-end Maker-Checker workflow from draft to active |
| Expected Result | Complete workflow succeeds; word appears Active after Checker approval; Word History shows approval event. End-to-end workflow completes as per business requirement. |
| Automation Candidate | Yes |
| Automation Layer | UI + Manual |
| Tags | uat-scenarios, high, rbac, security |

### IWC-TC-249 — UAT verify active disable enable lifecycle without delete per FSD BR-006

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | UAT Scenarios |
| Priority | High |
| Preconditions | User logged into AML application as Admin; browser session active; module reachable at /configuration/screening-ignore-words; Admin user; active word exists |
| Test Data | Word: security advisory |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Word: security advisory >> Step 7: Compare actual result with expected result: Word moves Active to Inactive to Active via Checker workflow; delete never available. Checker Approval popup displayed before status change takes effect |
| Acceptance Criteria | Full lifecycle uses disable and enable only; no delete action. Per FSD BR-007: enable/disable requires Maker-Checker approval before effective. |
| Expected Result | Word moves Active to Inactive to Active via Checker workflow; delete never available. Checker Approval popup displayed before status change takes effect. |
| Automation Candidate | Yes |
| Automation Layer | UI + Manual |
| Tags | uat-scenarios, high, rbac, security |

### IWC-TC-250 — Verify timeline dot colors for add review approve disable events per HTML

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Word History Panel |
| Priority | Medium |
| Preconditions | User on main list view; ignore word record with history exists in table; Word with full lifecycle history e.g. defense services |
| Test Data | Word: defense services |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Word: defense services >> Step 7: Compare actual result with expected result: Timeline dots display correct color classes per event type in HTML. Checker Approval popup displayed before status change takes effect |
| Acceptance Criteria | Timeline should use color-coded dots: add green, review amber, approve green, disable red. Per FSD BR-007: enable/disable requires Maker-Checker approval before effective. |
| Expected Result | Timeline dots display correct color classes per event type in HTML. Checker Approval popup displayed before status change takes effect. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | word-history-panel, medium, rbac, security |

### IWC-TC-251 — Verify Checker modal title Request sent for Checker Approval per HTML

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Checker Approval Modal |
| Priority | Medium |
| Preconditions | Admin user; action triggering Checker popup completed (Submit/Disable/Enable); Checker popup displayed after submit |
| Test Data | User Role: Checker |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Trigger the Checker Approval workflow from a pending action >> Step 4: Review Checker Approval modal content and actions >> Step 5: Apply test data — User Role: Checker >> Step 6: Compare actual result with expected result: Heading displays Request sent for Checker Approval. Approve/Reject updates record status per FSD Maker-Checker rules |
| Acceptance Criteria | Checker modal heading should match HTML h3 text |
| Expected Result | Heading displays Request sent for Checker Approval. Approve/Reject updates record status per FSD Maker-Checker rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | checker-approval-modal, medium, rbac, security |

### IWC-TC-252 — Verify duplicate word shows inline error not browser alert per FSD ÂSection 8.1

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Error Handling |
| Priority | Medium |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Duplicate word exists in category and match type |
| Test Data | Duplicate: trading company |
| Steps | Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: duplicate word shows inline error not browser alert per FSD ÂSection 8.1 >> Step 4: Apply test data — Duplicate: trading company >> Step 5: Compare actual result with expected result: Inline error This word/phrase already exists in the selected category. User receives clear error/validation message; no data corruption |
| Acceptance Criteria | Duplicate validation should show inline error below field not alert dialog |
| Expected Result | Inline error This word/phrase already exists in the selected category. User receives clear error/validation message; no data corruption. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | error-handling, medium, browser-compat |

### IWC-TC-254 — Verify Save Draft saves entry as Drafted per FSD 4.3 Step 8a

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word Panel |
| Priority | High |
| Preconditions | Admin/Maker user on main list view; Add Ignore Word primary button visible per FSD 4.3 Step 2; Admin user on Add Ignore Word panel |
| Test Data | Word: co; Category: Entity Suffixes; Risk: Low; Match: Exact phrase |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Add Ignore Word (FSD Section 4.3 Step 2) >> Step 3: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 4: Perform test action: Save Draft saves entry as Drafted per FSD 4.3 Step 8a >> Step 5: Apply test data — Word: co; Category: Entity Suffixes; Risk: Low; Match: Exact phrase >> Step 6: Compare actual result with expected result: Record saved as Drafted per FSD; toast shown; not sent for Checker approval on Save Draft. Behavior aligns with FSD Section 4.3 panel workflow |
| Acceptance Criteria | FSD 4.3 Step 8a: Save Draft saves status=DRAFT, appears in Drafted tab, not applied by screening engine. : Save Draft button shows toast. |
| Expected Result | Record saved as Drafted per FSD; toast shown; not sent for Checker approval on Save Draft. Behavior aligns with FSD Section 4.3 panel workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word-panel, high, screening-engine |

### IWC-TC-255 — Verify Save Draft validation for empty Ignore Word/Phrase

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word Panel |
| Priority | High |
| Preconditions | Admin/Maker user on main list view; Add Ignore Word primary button visible per FSD 4.3 Step 2; Add Ignore Word panel open |
| Test Data | Ignore Word: (empty) |
| Steps | Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: Save Draft validation for empty Ignore Word/Phrase >> Step 3: Apply test data — Ignore Word: (empty) >> Step 4: Compare actual result with expected result: Alert displayed: Please enter an ignore word or phrase to save as draft. Validation alert shown; submission blocked per FSD Section 4.3 Step 8b |
| Acceptance Criteria | saveDraftWord: alert when word empty. Per FSD 4.3 Step 8a: saved as DRAFT on Drafted tab; not sent for approval. |
| Expected Result | Alert displayed: Please enter an ignore word or phrase to save as draft. Validation alert shown; submission blocked per FSD Section 4.3 Step 8b. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word-panel, high, functional |

### IWC-TC-256 — Verify Checker rejection returns entry to Draft per FSD 7.1

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Governance |
| Priority | High |
| Preconditions | Maker and Checker test users available; FSD Section 7 workflow applicable; Checker user; pending submission exists |
| Test Data | Status: Rejected |
| Steps | Step 1: Log in as Checker with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Checker rejection returns entry to Draft per FSD 7.1 >> Step 4: Apply test data — Status: Rejected >> Step 5: Compare actual result with expected result: Entry returned to Draft state with Checker comments per FSD 7.1 and 7.2. Maker action requires Checker approval before taking effect |
| Acceptance Criteria | FSD 7.1 Rejected state: entry rejected by Checker; returned to Maker with comments. FSD 7.2: upon rejection entry returned to Draft state |
| Expected Result | Entry returned to Draft state with Checker comments per FSD 7.1 and 7.2. Maker action requires Checker approval before taking effect. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-governance, high, rbac, security |

### IWC-TC-257 — Verify Pending Approval entries locked from edits per FSD 7.2

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Governance |
| Priority | High |
| Preconditions | Maker and Checker test users available; FSD Section 7 workflow applicable; Word submitted and awaiting Checker approval per FSD 7.1 |
| Test Data | Word: services |
| Steps | Step 1: Log in as Checker with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Pending Approval entries locked from edits per FSD 7.2 >> Step 4: Apply test data — Word: services >> Step 5: Compare actual result with expected result: Edit actions blocked while status is Pending Approval per FSD 7.2. Maker action requires Checker approval before taking effect |
| Acceptance Criteria | FSD 7.2: entries in Pending Approval state locked from further edits until Checker decision |
| Expected Result | Edit actions blocked while status is Pending Approval per FSD 7.2. Maker action requires Checker approval before taking effect. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-governance, high, rbac, security |

### IWC-TC-258 — Verify Maker cannot approve own submission per FSD 7.2

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Governance |
| Priority | High |
| Preconditions | Maker and Checker test users available; FSD Section 7 workflow applicable; User account with both Maker and Checker roles |
| Test Data | User: Rahul Sharma |
| Steps | Step 1: Log in as Checker with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Maker cannot approve own submission per FSD 7.2 >> Step 4: Apply test data — User: Rahul Sharma >> Step 5: Compare actual result with expected result: Self-approval blocked per FSD 7.2. Maker action requires Checker approval before taking effect |
| Acceptance Criteria | FSD 7.2: Maker may not approve own submissions; Maker and Checker must be different users |
| Expected Result | Self-approval blocked per FSD 7.2. Maker action requires Checker approval before taking effect. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-governance, high, rbac, security |

### IWC-TC-259 — Verify emergency override not permitted per FSD 7.2

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Governance |
| Priority | High |
| Preconditions | User logged into AML application as Compliance Officer or Admin; browser session active; module reachable at /configuration/screening-ignore-words; Maker and Checker test users available; FSD Section 7 workflow applicable |
| Test Data | Action: bypass Checker approval |
| Steps | Step 1: Log in as Checker with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: emergency override not permitted per FSD 7.2 >> Step 4: Apply test data — Action: bypass Checker approval >> Step 5: Compare actual result with expected result: Emergency override unavailable per FSD 7.2. Maker action requires Checker approval before taking effect |
| Acceptance Criteria | FSD 7.2: emergency override bypassing Checker approval not permitted without separate privileged-access policy |
| Expected Result | Emergency override unavailable per FSD 7.2. Maker action requires Checker approval before taking effect. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-governance, high, rbac, security |

### IWC-TC-264 — Verify bulk import character encoding validation per FSD 5.1.3

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Admin user on main list view; Bulk Upload button visible; valid CSV/XLSX test files available per FSD 5.1.3; CSV/XLSX file with invalid encoding |
| Test Data | File: invalid_encoding.csv |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File: invalid_encoding.csv >> Step 8: Compare actual result with expected result: Upload rejected with encoding validation error per FSD 5.1.3. Valid records enter Drafted status pending Checker approval (FSD 5.1.3) |
| Acceptance Criteria | FSD 5.1.3: import validation checks character encoding compliance. Per FSD 5.1.3: CSV/XLSX import with validation and Checker approval before active. |
| Expected Result | Upload rejected with encoding validation error per FSD 5.1.3. Valid records enter Drafted status pending Checker approval (FSD 5.1.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, rbac, security |

### IWC-TC-265 — Verify bulk import field completeness validation per FSD 5.1.3

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Admin user on main list view; Bulk Upload button visible; valid CSV/XLSX test files available per FSD 5.1.3; CSV/XLSX missing mandatory fields |
| Test Data | File: incomplete_rows.csv |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File: incomplete_rows.csv >> Step 8: Compare actual result with expected result: Row-level completeness validation errors displayed per FSD 5.1.3. Valid records enter Drafted status pending Checker approval (FSD 5.1.3) |
| Acceptance Criteria | FSD 5.1.3: import validation checks field completeness. Per FSD 5.1.3: CSV/XLSX import with validation and Checker approval before active. |
| Expected Result | Row-level completeness validation errors displayed per FSD 5.1.3. Valid records enter Drafted status pending Checker approval (FSD 5.1.3). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, rbac, security |

### IWC-TC-266 — Verify category must exist before adding ignore word per FSD 4.3 Step 4

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word Panel |
| Priority | High |
| Preconditions | Admin/Maker user on main list view; Add Ignore Word primary button visible per FSD 4.3 Step 2; Required category not yet created |
| Test Data | Category: Cybercrime (new) |
| Steps | Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Add Ignore Word (FSD Section 4.3 Step 2) >> Step 3: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 4: Perform test action: category must exist before adding ignore word per FSD 4.3 Step 4 >> Step 5: Apply test data — Category: Cybercrime (new) >> Step 6: Compare actual result with expected result: Category unavailable until Add Category process completed per FSD 4.3 Step 4. Behavior aligns with FSD Section 4.3 panel workflow |
| Acceptance Criteria | FSD 4.3 Step 4: dropdown lists active categories; if required category does not exist Maker must complete Add Category (Section 4.2) first |
| Expected Result | Category unavailable until Add Category process completed per FSD 4.3 Step 4. Behavior aligns with FSD Section 4.3 panel workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word-panel, high, rbac, security |

### IWC-TC-269 — Verify Risk Level definitions per FSD 4.3 Step 5

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word Panel |
| Priority | Medium |
| Preconditions | Admin/Maker user on main list view; Add Ignore Word primary button visible per FSD 4.3 Step 2; Add Ignore Word panel open |
| Test Data | Risk Levels: Low, Medium, High |
| Steps | Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: Risk Level definitions per FSD 4.3 Step 5 >> Step 3: Apply test data — Risk Levels: Low, Medium, High >> Step 4: Compare actual result with expected result: Low=very common generic (e.g. Behavior aligns with FSD Section 4.3 panel workflow |
| Acceptance Criteria | FSD 4.3 Step 5 defines Low, Medium, High risk semantics with examples |
| Expected Result | Low=very common generic (e.g. Behavior aligns with FSD Section 4.3 panel workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word-panel, medium, functional |

### IWC-TC-270 — Verify Category Name maximum 100 characters per FSD 4.2 Step 3

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Category Modal |
| Priority | Medium |
| Preconditions | Admin/Maker user on main list view; Add Category toolbar button visible per FSD 4.2 Step 2; Add Category modal open |
| Test Data | Category Name Length: 101 characters |
| Steps | Step 1: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 2: Perform test action: Category Name maximum 100 characters per FSD 4.2 Step 3 >> Step 3: Apply test data — Category Name Length: 101 characters >> Step 4: Compare actual result with expected result: Submission blocked or error shown exceeding 100 character limit per FSD 4.2 Step 3. Checker approval workflow triggered on submit (FSD Section 4.2) |
| Acceptance Criteria | FSD 4.2 Step 3: Category Name maximum 100 characters |
| Expected Result | Submission blocked or error shown exceeding 100 character limit per FSD 4.2 Step 3. Checker approval workflow triggered on submit (FSD Section 4.2). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category-modal, medium, functional |

### IWC-TC-271 — Verify Category Description maximum 500 characters per FSD 4.2 Step 4

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Category Modal |
| Priority | Medium |
| Preconditions | Admin/Maker user on main list view; Add Category toolbar button visible per FSD 4.2 Step 2; Add Category modal open |
| Test Data | Description Length: 501 characters |
| Steps | Step 1: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 2: Perform test action: Category Description maximum 500 characters per FSD 4.2 Step 4 >> Step 3: Apply test data — Description Length: 501 characters >> Step 4: Compare actual result with expected result: Submission blocked or error shown exceeding 500 character limit per FSD 4.2 Step 4. Checker approval workflow triggered on submit (FSD Section 4.2) |
| Acceptance Criteria | FSD 4.2 Step 4: Category Description maximum 500 characters |
| Expected Result | Submission blocked or error shown exceeding 500 character limit per FSD 4.2 Step 4. Checker approval workflow triggered on submit (FSD Section 4.2). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category-modal, medium, error-handling |
