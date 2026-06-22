# Keyword Manager — Detailed Test Cases (200)

### KM-TC-001 — Verify user can navigate to Keyword Manager module from Configuration menu

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Navigation & Page Load |
| Priority | High |
| Preconditions | User logged into AML application with valid access |
| Test Data | N/A |
| Steps | 1. Login to AML application 2. Navigate to Configuration menu 3. Click Screening – Keyword Configuration |
| Acceptance Criteria | User should successfully land on Keyword Manager listing page |
| Expected Result | Keyword Manager listing page loads successfully with Active, Inactive, and Drafted tabs displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-load, high, functional |

### KM-TC-002 — Verify Keyword Manager page title and breadcrumb display correctly

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Navigation & Page Load |
| Priority | Medium |
| Preconditions | User on Keyword Manager page |
| Test Data | N/A |
| Steps | 1. Navigate to Configuration > Screening – Keyword Configuration 2. Observe page header and breadcrumb |
| Acceptance Criteria | Page title and breadcrumb should match specification |
| Expected Result | Breadcrumb should display 'Configuration > Screening – Keyword Configuration' and page title should be correct |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-load, medium, functional |

### KM-TC-003 — Verify Active tab is selected by default on page load

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Navigation & Page Load |
| Priority | High |
| Preconditions | User on Keyword Manager page |
| Test Data | N/A |
| Steps | 1. Open Keyword Manager page 2. Observe default tab selection |
| Acceptance Criteria | Active tab should be highlighted as default |
| Expected Result | Active tab should be selected by default and display active keyword entries |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-load, high, functional |

### KM-TC-004 — Verify Active, Inactive, and Drafted tabs are all visible on listing page

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Navigation & Page Load |
| Priority | High |
| Preconditions | User on Keyword Manager page |
| Test Data | N/A |
| Steps | 1. Open Keyword Manager page 2. Observe tab bar |
| Acceptance Criteria | All three tabs should be displayed in tab bar |
| Expected Result | Active, Inactive, and Drafted tabs should all be visible with entry counts |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-load, high, functional |

### KM-TC-005 — Verify entry counts displayed in each tab are accurate

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Navigation & Page Load |
| Priority | High |
| Preconditions | User on Keyword Manager page with known dataset |
| Test Data | Known keyword dataset |
| Steps | 1. Open Keyword Manager page 2. Observe count shown on each tab 3. Compare with actual record counts |
| Acceptance Criteria | Tab counts should reflect actual number of entries per status |
| Expected Result | Count displayed on each tab should match actual keyword entries for that status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-load, high, functional |

### KM-TC-006 — Verify page remains stable during initial data load for large keyword datasets

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Navigation & Page Load |
| Priority | High |
| Preconditions | Large keyword dataset available |
| Test Data | Large dataset |
| Steps | 1. Open Keyword Manager page with large dataset 2. Observe page loading behaviour |
| Acceptance Criteria | Page should remain responsive during initial load |
| Expected Result | Page should load without freeze, crash, or timeout |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-load, high, functional |

### KM-TC-007 — Verify empty state is displayed when no keyword entries exist

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Navigation & Page Load |
| Priority | Medium |
| Preconditions | No keyword entries in system |
| Test Data | Empty dataset |
| Steps | 1. Open Keyword Manager page with empty dataset |
| Acceptance Criteria | Proper empty state message should appear |
| Expected Result | System should display a proper no-records-found empty state message without errors |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-load, medium, functional |

### KM-TC-008 — Verify action bar buttons are visible on Keyword Manager listing page

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Navigation & Page Load |
| Priority | High |
| Preconditions | User on Keyword Manager page |
| Test Data | N/A |
| Steps | 1. Open Keyword Manager page 2. Observe toolbar/action bar |
| Acceptance Criteria | Add Keyword, Add Category, Category Controls, Bulk Import, Export buttons should be visible |
| Expected Result | All configured action buttons should be visible in the action bar |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-load, high, export |

### KM-TC-009 — Verify clicking Inactive tab loads inactive keyword entries

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Tab Navigation |
| Priority | High |
| Preconditions | User on Keyword Manager page with inactive keywords |
| Test Data | N/A |
| Steps | 1. Click the Inactive tab 2. Observe results |
| Acceptance Criteria | Inactive entries should display after clicking Inactive tab |
| Expected Result | Inactive tab should load and display only inactive keyword entries |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | tab-navigation, high, functional |

### KM-TC-010 — Verify clicking Drafted tab loads drafted keyword entries

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Tab Navigation |
| Priority | High |
| Preconditions | User on Keyword Manager page with drafted keywords |
| Test Data | N/A |
| Steps | 1. Click the Drafted tab 2. Observe results |
| Acceptance Criteria | Drafted entries should display after clicking Drafted tab |
| Expected Result | Drafted tab should load and display only drafted keyword entries |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | tab-navigation, high, functional |

### KM-TC-011 — Verify switching between tabs does not lose data or cause errors

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Tab Navigation |
| Priority | Medium |
| Preconditions | User on Keyword Manager page |
| Test Data | N/A |
| Steps | 1. Click Active tab 2. Click Inactive tab 3. Click Drafted tab 4. Return to Active tab |
| Acceptance Criteria | Tab switching should be stable and data consistent |
| Expected Result | Tab switching should be smooth; data should reload correctly without errors |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | tab-navigation, medium, error-handling |

### KM-TC-012 — Verify table headers are consistent across all tabs

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Tab Navigation |
| Priority | Medium |
| Preconditions | User on Keyword Manager page |
| Test Data | N/A |
| Steps | 1. Open Active tab and note headers 2. Click Inactive and note headers 3. Click Drafted and note headers |
| Acceptance Criteria | Same column headers should appear on all tabs |
| Expected Result | Column headers should be identical across Active, Inactive, and Drafted tabs |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | tab-navigation, medium, functional |

### KM-TC-013 — Verify keyword listing table displays all configured columns

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Keyword Listing Table |
| Priority | High |
| Preconditions | User on Keyword Manager Active tab |
| Test Data | N/A |
| Steps | 1. Open Keyword Manager page 2. Observe table column headers |
| Acceptance Criteria | Table should show all defined columns |
| Expected Result | Table should display Keyword/Phrase, Category, Risk Level, Match Type, Threshold Score, Status, and Actions columns |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | keyword-listing-table, high, functional |

### KM-TC-014 — Verify Keyword/Phrase column displays correct values

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Keyword Listing Table |
| Priority | High |
| Preconditions | Known keyword dataset available |
| Test Data | Known keyword list |
| Steps | 1. Open listing page 2. Cross-check Keyword column values |
| Acceptance Criteria | Keyword values should match stored entries |
| Expected Result | Correct keyword/phrase values should be displayed for each entry |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | keyword-listing-table, high, functional |

### KM-TC-015 — Verify Category column displays correct category assignment per keyword

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Keyword Listing Table |
| Priority | High |
| Preconditions | Known dataset |
| Test Data | Known category mapping |
| Steps | 1. Open listing 2. Verify Category values |
| Acceptance Criteria | Category names should match each keyword's configured category |
| Expected Result | Each keyword should show its correctly assigned category |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | keyword-listing-table, high, functional |

### KM-TC-016 — Verify Risk Level column displays correct risk badge for each keyword

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Keyword Listing Table |
| Priority | High |
| Preconditions | Keyword entries with all risk levels available |
| Test Data | Mixed risk dataset |
| Steps | 1. Open listing 2. Observe Risk Level column for Low, Medium, High values |
| Acceptance Criteria | Risk badges (Low/Medium/High) should be accurately displayed |
| Expected Result | Low, Medium, High badges should display with correct styling for each entry |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | keyword-listing-table, high, functional |

### KM-TC-017 — Verify Match Type column correctly identifies Exact Match and Fuzzy Match entries

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Keyword Listing Table |
| Priority | High |
| Preconditions | Dataset with both Exact and Fuzzy entries |
| Test Data | Exact and Fuzzy entries |
| Steps | 1. Open listing 2. Review Match Type column for multiple rows |
| Acceptance Criteria | Match Type should be accurate per entry |
| Expected Result | Exact Match and Fuzzy Match values should display correctly per entry |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | keyword-listing-table, high, functional |

### KM-TC-018 — Verify Threshold Score column is populated for Fuzzy Match entries

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Keyword Listing Table |
| Priority | High |
| Preconditions | Fuzzy Match keyword entries available |
| Test Data | Fuzzy Match entries |
| Steps | 1. Open listing 2. Check Threshold Score column for Fuzzy Match rows |
| Acceptance Criteria | Threshold Score should be shown for Fuzzy Match rows |
| Expected Result | Threshold Score (1-100) should be displayed for Fuzzy Match entries |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | keyword-listing-table, high, functional |

### KM-TC-019 — Verify Threshold Score column is blank or N/A for Exact Match entries

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Keyword Listing Table |
| Priority | High |
| Preconditions | Exact Match keyword entries available |
| Test Data | Exact Match entries |
| Steps | 1. Open listing 2. Check Threshold Score column for Exact Match rows |
| Acceptance Criteria | Exact Match entries should not show a Threshold Score |
| Expected Result | Threshold Score column should be empty or N/A for Exact Match entries |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | keyword-listing-table, high, functional |

### KM-TC-020 — Verify Status column displays correct status for each entry

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Keyword Listing Table |
| Priority | High |
| Preconditions | Dataset with all status types |
| Test Data | Mixed status dataset |
| Steps | 1. Open listing 2. Review Status column values |
| Acceptance Criteria | Status badges (Active, Inactive, Draft, Pending Approval) should be accurate |
| Expected Result | Correct status badges should display for each keyword entry |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | keyword-listing-table, high, functional |

### KM-TC-021 — Verify long keyword phrases do not break table layout

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Keyword Listing Table |
| Priority | Medium |
| Preconditions | Keywords with long phrases available |
| Test Data | Long keyword phrases |
| Steps | 1. Open listing with long keyword phrases 2. Observe table rendering |
| Acceptance Criteria | Long text should not cause layout distortion |
| Expected Result | Long keyword phrases should render without breaking table alignment |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | keyword-listing-table, medium, functional |

### KM-TC-022 — Verify table supports vertical scrolling for large datasets

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Keyword Listing Table |
| Priority | Medium |
| Preconditions | Large keyword dataset |
| Test Data | Large dataset |
| Steps | 1. Open listing with many records 2. Scroll table vertically |
| Acceptance Criteria | Table should be scrollable when records exceed viewport height |
| Expected Result | Table should scroll smoothly without layout issues |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | keyword-listing-table, medium, functional |

### KM-TC-023 — Verify search field is visible in toolbar on keyword listing page

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Search Functionality |
| Priority | High |
| Preconditions | User on Keyword Manager page |
| Test Data | N/A |
| Steps | 1. Open Keyword Manager page 2. Observe toolbar area |
| Acceptance Criteria | Search input should be present in toolbar |
| Expected Result | Search input field should be visible with placeholder text |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-functionality, high, functional |

### KM-TC-024 — Verify search returns matching records when valid keyword is entered

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Search Functionality |
| Priority | High |
| Preconditions | Known keyword entries available |
| Test Data | Known keyword: 'hawala' |
| Steps | 1. Enter known keyword phrase in search field 2. Observe filtered results |
| Acceptance Criteria | Search should return entries matching the typed text |
| Expected Result | Only records matching the search text should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-functionality, high, functional |

### KM-TC-025 — Verify search is case-insensitive

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Search Functionality |
| Priority | Medium |
| Preconditions | Searchable keyword entries available |
| Test Data | Lowercase/uppercase variants |
| Steps | 1. Search using lowercase text 2. Search using uppercase text 3. Compare results |
| Acceptance Criteria | Same results should appear regardless of case used |
| Expected Result | Search results should be identical regardless of case input |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-functionality, medium, functional |

### KM-TC-026 — Verify search returns no results for unmatched text

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Search Functionality |
| Priority | Medium |
| Preconditions | Keyword listing has known entries |
| Test Data | Invalid search: 'zzz999' |
| Steps | 1. Enter text that does not match any keyword 2. Observe results |
| Acceptance Criteria | System should show empty state for unmatched search |
| Expected Result | No records found message should display without errors |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-functionality, medium, functional |

### KM-TC-027 — Verify clearing search field restores full keyword listing

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Search Functionality |
| Priority | High |
| Preconditions | Search is currently active with filtered results |
| Test Data | N/A |
| Steps | 1. Apply a search filter 2. Clear the search field 3. Observe results |
| Acceptance Criteria | Clearing the search should show all records again |
| Expected Result | Full keyword listing should be restored after clearing search |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-functionality, high, functional |

### KM-TC-028 — Verify special characters are handled safely in search field

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Search Functionality |
| Priority | High |
| Preconditions | Search field is accessible |
| Test Data | Special chars: @#$%^&* |
| Steps | 1. Enter special characters in search field 2. Observe behaviour |
| Acceptance Criteria | System should not crash or error on special character input |
| Expected Result | System should handle special character input without crash or API error |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-functionality, high, error-handling |

### KM-TC-029 — Verify Add Category modal opens when Add Category button is clicked

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Category |
| Priority | High |
| Preconditions | User on Keyword Manager page |
| Test Data | N/A |
| Steps | 1. Click Add Category button in toolbar 2. Observe modal behaviour |
| Acceptance Criteria | Modal should appear as overlay on clicking Add Category |
| Expected Result | 'Create a new Keyword screening category' modal should open as overlay |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category, high, functional |

### KM-TC-030 — Verify Category Name field is mandatory in Add Category modal

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Category |
| Priority | Critical |
| Preconditions | Add Category modal is open |
| Test Data | Blank name |
| Steps | 1. Leave Category Name blank 2. Click Add Category button |
| Acceptance Criteria | Submission should be blocked if Category Name is empty |
| Expected Result | Inline validation error should appear and modal should not close |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category, critical, functional |

### KM-TC-031 — Verify Category Name accepts valid input up to 100 characters

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Category |
| Priority | High |
| Preconditions | Add Category modal is open |
| Test Data | 100-character name string |
| Steps | 1. Enter a category name of exactly 100 characters 2. Submit form |
| Acceptance Criteria | Category Name field should accept up to 100 characters |
| Expected Result | Category name should be accepted and submitted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category, high, functional |

### KM-TC-032 — Verify Category Name beyond 100 characters is rejected

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Category |
| Priority | High |
| Preconditions | Add Category modal is open |
| Test Data | 101+ character string |
| Steps | 1. Enter a name exceeding 100 characters 2. Submit |
| Acceptance Criteria | Field should enforce 100-character limit |
| Expected Result | System should restrict input or display validation error for names over 100 characters |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category, high, maker-checker |

### KM-TC-033 — Verify duplicate Category Name is rejected with inline error

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Category |
| Priority | Critical |
| Preconditions | Existing category 'ML_TF' is in system |
| Test Data | Existing category name |
| Steps | 1. Enter category name 'ML_TF' 2. Submit |
| Acceptance Criteria | Duplicate category names should not be allowed |
| Expected Result | Inline error should appear stating the name already exists and form should not submit |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category, critical, error-handling |

### KM-TC-034 — Verify Category Description field is optional

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Category |
| Priority | High |
| Preconditions | Add Category modal is open |
| Test Data | Category name only |
| Steps | 1. Enter Category Name only 2. Leave description blank 3. Submit |
| Acceptance Criteria | Category should be created successfully without description |
| Expected Result | Category should be submitted successfully without a description |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category, high, functional |

### KM-TC-035 — Verify Category Description accepts up to 500 characters

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Category |
| Priority | Medium |
| Preconditions | Add Category modal is open |
| Test Data | 500-character description |
| Steps | 1. Enter 500-character description 2. Submit |
| Acceptance Criteria | Description field should allow up to 500 characters |
| Expected Result | Description should be accepted within the 500 character limit |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category, medium, error-handling |

### KM-TC-036 — Verify Category Description beyond 500 characters is restricted

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Category |
| Priority | Medium |
| Preconditions | Add Category modal is open |
| Test Data | 501+ character description |
| Steps | 1. Enter description exceeding 500 characters |
| Acceptance Criteria | Field should not accept more than 500 characters |
| Expected Result | System should restrict input or show error for description over 500 characters |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category, medium, error-handling |

### KM-TC-037 — Verify successful Add Category submission sends entry for Checker approval

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Category |
| Priority | Critical |
| Preconditions | User is Maker with valid inputs |
| Test Data | Category Name: 'TEST_CATEGORY' |
| Steps | 1. Enter valid Category Name and Description 2. Click Add Category |
| Acceptance Criteria | New category should enter Pending Approval state |
| Expected Result | Modal closes, category enters Pending Approval, audit log entry is created |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category, critical, rbac, security |

### KM-TC-038 — Verify Cancel button on Add Category modal discards data without saving

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Category |
| Priority | Medium |
| Preconditions | Add Category modal is open with data entered |
| Test Data | N/A |
| Steps | 1. Enter category name 2. Click Cancel |
| Acceptance Criteria | Modal should close and no category should be created |
| Expected Result | Modal should close without saving; no new category should appear in the system |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category, medium, functional |

### KM-TC-039 — Verify confirmation prompt appears when cancelling Add Category with populated fields

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Category |
| Priority | Medium |
| Preconditions | Add Category modal is open with data entered |
| Test Data | N/A |
| Steps | 1. Enter category name 2. Click Cancel 3. Observe behaviour |
| Acceptance Criteria | System should warn user before discarding entered data |
| Expected Result | Confirmation prompt should appear asking user to confirm discarding data |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category, medium, functional |

### KM-TC-040 — Verify Add Category modal close button works correctly

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Category |
| Priority | Medium |
| Preconditions | Add Category modal is open |
| Test Data | N/A |
| Steps | 1. Click the X/close button on modal |
| Acceptance Criteria | Modal should close on clicking X button |
| Expected Result | Modal should close without saving |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-category, medium, functional |

### KM-TC-041 — Verify Category Controls panel opens when Category Controls button is clicked

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Controls |
| Priority | High |
| Preconditions | User on Keyword Manager page |
| Test Data | N/A |
| Steps | 1. Click Category Controls button in toolbar |
| Acceptance Criteria | Panel should open listing all existing categories |
| Expected Result | Category Controls modal/panel should open showing all categories with enable/disable toggles |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-controls, high, functional |

### KM-TC-042 — Verify all existing categories are listed in Category Controls panel

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Controls |
| Priority | High |
| Preconditions | Multiple categories configured |
| Test Data | Known category list |
| Steps | 1. Open Category Controls panel 2. Count listed categories |
| Acceptance Criteria | Every configured category should appear in the panel |
| Expected Result | All configured categories should be listed in Category Controls panel |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-controls, high, functional |

### KM-TC-043 — Verify enabled category toggle shows correct active state

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Controls |
| Priority | High |
| Preconditions | Enabled category available |
| Test Data | Active category |
| Steps | 1. Open Category Controls 2. Observe toggle state for active category |
| Acceptance Criteria | Active categories should show enabled toggle state |
| Expected Result | Enabled category should show toggle in ON/active position |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-controls, high, functional |

### KM-TC-044 — Verify user can disable an active category using the toggle

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Controls |
| Priority | Critical |
| Preconditions | Active category with keywords available |
| Test Data | Active category |
| Steps | 1. Open Category Controls 2. Toggle an active category to disabled 3. Save changes |
| Acceptance Criteria | Toggling off should disable the category and all its keywords |
| Expected Result | Category should be submitted for Maker-Checker approval to disable |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-controls, critical, functional |

### KM-TC-045 — Verify user can re-enable a disabled category using the toggle

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Controls |
| Priority | Critical |
| Preconditions | Disabled category available |
| Test Data | Disabled category |
| Steps | 1. Open Category Controls 2. Toggle a disabled category to enabled 3. Save changes |
| Acceptance Criteria | Toggle should re-enable disabled category and its keywords |
| Expected Result | Re-enabling request should be submitted for Maker-Checker approval |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-controls, critical, functional |

### KM-TC-046 — Verify disabling a category removes all its keywords from active screening

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Controls |
| Priority | Critical |
| Preconditions | Category with multiple active keywords |
| Test Data | Category with keywords |
| Steps | 1. Disable category 2. Verify keywords in that category become inactive in screening |
| Acceptance Criteria | Keywords under disabled category should stop being evaluated |
| Expected Result | All keywords under the disabled category should cease to be evaluated at next screening run |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-controls, critical, functional |

### KM-TC-047 — Verify Cancel button on Category Controls panel discards unsaved changes

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Controls |
| Priority | Medium |
| Preconditions | Category Controls panel is open with unsaved toggle changes |
| Test Data | N/A |
| Steps | 1. Toggle a category state 2. Click Cancel 3. Reopen panel |
| Acceptance Criteria | Closing without saving should not modify categories |
| Expected Result | Original category states should be retained; no changes should be saved |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-controls, medium, functional |

### KM-TC-048 — Verify category controls changes are subject to Maker-Checker approval

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Controls |
| Priority | Critical |
| Preconditions | Maker changes category state |
| Test Data | N/A |
| Steps | 1. Toggle a category 2. Save changes 3. Observe system state |
| Acceptance Criteria | Changes should not take effect until approved by Checker |
| Expected Result | Changes should enter Pending Approval state and require Checker approval before taking effect |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-controls, critical, rbac, security |

### KM-TC-049 — Verify Add Keyword panel opens when Add Keyword button is clicked

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | Critical |
| Preconditions | User on Keyword Manager page |
| Test Data | N/A |
| Steps | 1. Click Add Keyword button in toolbar |
| Acceptance Criteria | Add New Keyword panel should open |
| Expected Result | Add New Keyword panel should open as a right-side panel or modal |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, critical, functional |

### KM-TC-050 — Verify Keyword/Phrase field is mandatory

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | Critical |
| Preconditions | Add Keyword panel is open |
| Test Data | Blank keyword |
| Steps | 1. Leave Keyword/Phrase blank 2. Click Submit |
| Acceptance Criteria | Form should not submit without a keyword value |
| Expected Result | Inline validation error should display and submission should be blocked |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, critical, functional |

### KM-TC-051 — Verify Keyword/Phrase field accepts up to 500 characters

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Add Keyword panel is open |
| Test Data | 500-character string |
| Steps | 1. Enter exactly 500-character keyword phrase 2. Submit |
| Acceptance Criteria | Field should support up to 500 characters |
| Expected Result | Input should be accepted and submitted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, error-handling |

### KM-TC-052 — Verify Keyword/Phrase field beyond 500 characters is restricted

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Add Keyword panel is open |
| Test Data | 501+ character string |
| Steps | 1. Enter more than 500 characters |
| Acceptance Criteria | Field should enforce 500-character limit |
| Expected Result | System should restrict or show validation error for phrases exceeding 500 characters |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, error-handling |

### KM-TC-053 — Verify Category dropdown is mandatory and lists only active categories

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | Critical |
| Preconditions | Add Keyword panel is open |
| Test Data | N/A |
| Steps | 1. Open Category dropdown 2. Observe listed categories 3. Try to submit without selecting |
| Acceptance Criteria | Category must be selected from active categories |
| Expected Result | Only active categories should be listed; submission should be blocked without a category selection |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, critical, functional |

### KM-TC-054 — Verify Risk Level is mandatory and supports Low, Medium, and High options

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | Critical |
| Preconditions | Add Keyword panel is open |
| Test Data | N/A |
| Steps | 1. Open Risk Level dropdown 2. Observe options 3. Try to submit without selection |
| Acceptance Criteria | Risk Level field must be selected |
| Expected Result | Low, Medium, High options should be available; form should block submission without a selection |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, critical, functional |

### KM-TC-055 — Verify Match Type is mandatory and presents Exact Match and Fuzzy Match options

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | Critical |
| Preconditions | Add Keyword panel is open |
| Test Data | N/A |
| Steps | 1. Open Match Type dropdown 2. Observe available options |
| Acceptance Criteria | Match Type must be selected from the two allowed options |
| Expected Result | Only Exact Match and Fuzzy Match options should be available |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, critical, functional |

### KM-TC-056 — Verify Threshold Score field is hidden when Exact Match is selected

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | Critical |
| Preconditions | Add Keyword panel is open |
| Test Data | N/A |
| Steps | 1. Select Exact Match as Match Type 2. Observe Threshold Score field |
| Acceptance Criteria | Threshold Score should not appear for Exact Match |
| Expected Result | Threshold Score field should be hidden/invisible when Exact Match is selected |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, critical, functional |

### KM-TC-057 — Verify Threshold Score field appears when Fuzzy Match is selected

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | Critical |
| Preconditions | Add Keyword panel is open |
| Test Data | N/A |
| Steps | 1. Select Fuzzy Match as Match Type 2. Observe Threshold Score field |
| Acceptance Criteria | Threshold Score must appear for Fuzzy Match |
| Expected Result | Threshold Score field should become visible and mandatory when Fuzzy Match is selected |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, critical, functional |

### KM-TC-058 — Verify Threshold Score field is mandatory when Fuzzy Match is selected

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | Critical |
| Preconditions | Add Keyword panel with Fuzzy Match selected |
| Test Data | Blank Threshold Score |
| Steps | 1. Select Fuzzy Match 2. Leave Threshold Score blank 3. Submit |
| Acceptance Criteria | Form should block submission if Fuzzy Match chosen but no Threshold Score entered |
| Expected Result | Inline error should block submission: Threshold Score is required for Fuzzy Match |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, critical, functional |

### KM-TC-059 — Verify Threshold Score accepts values between 1 and 100 inclusive

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Add Keyword panel with Fuzzy Match selected |
| Test Data | 1, 50, 100 |
| Steps | 1. Enter Threshold Score of 1 2. Enter score of 50 3. Enter score of 100 |
| Acceptance Criteria | Valid range is 1 to 100 |
| Expected Result | All values between 1 and 100 should be accepted |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, functional |

### KM-TC-060 — Verify Threshold Score value below 1 is clamped to 1

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Add Keyword panel with Fuzzy Match selected |
| Test Data | 0, -5 |
| Steps | 1. Enter Threshold Score of 0 or negative value |
| Acceptance Criteria | Values below 1 should be corrected to 1 |
| Expected Result | System should clamp the value to 1 and display 1 in the field |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, functional |

### KM-TC-061 — Verify Threshold Score value above 100 is clamped to 100

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Add Keyword panel with Fuzzy Match selected |
| Test Data | 101, 200 |
| Steps | 1. Enter Threshold Score of 101 or higher |
| Acceptance Criteria | Values above 100 should be corrected to 100 |
| Expected Result | System should clamp the value to 100 and display 100 in the field |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, functional |

### KM-TC-062 — Verify live precision indicator shows 'Low precision' for Threshold Score below 50

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Add Keyword panel with Fuzzy Match selected |
| Test Data | 30 |
| Steps | 1. Enter Threshold Score of 30 |
| Acceptance Criteria | Indicator should reflect Low precision for scores 1–49 |
| Expected Result | Live indicator should display 'Low precision' label |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, functional |

### KM-TC-063 — Verify live precision indicator shows 'Balanced' for Threshold Score between 50 and 79

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Add Keyword panel with Fuzzy Match selected |
| Test Data | 65 |
| Steps | 1. Enter Threshold Score of 65 |
| Acceptance Criteria | Indicator should reflect Balanced for scores 50–79 |
| Expected Result | Live indicator should display 'Balanced' label |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, functional |

### KM-TC-064 — Verify live precision indicator shows 'High precision' for Threshold Score of 80 or above

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Add Keyword panel with Fuzzy Match selected |
| Test Data | 85 |
| Steps | 1. Enter Threshold Score of 85 |
| Acceptance Criteria | Indicator should reflect High precision for scores 80–100 |
| Expected Result | Live indicator should display 'High precision' label |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, functional |

### KM-TC-065 — Verify Threshold Score boundary 50 displays 'Balanced' precision

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Add Keyword panel with Fuzzy Match selected |
| Test Data | 50 |
| Steps | 1. Enter Threshold Score of 50 |
| Acceptance Criteria | Score of exactly 50 should show Balanced |
| Expected Result | Live indicator should display 'Balanced' for score of exactly 50 |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, functional |

### KM-TC-066 — Verify Threshold Score boundary 80 displays 'High precision'

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Add Keyword panel with Fuzzy Match selected |
| Test Data | 80 |
| Steps | 1. Enter Threshold Score of 80 |
| Acceptance Criteria | Score of exactly 80 should show High precision |
| Expected Result | Live indicator should display 'High precision' for score of exactly 80 |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, functional |

### KM-TC-067 — Verify Threshold Score boundary 49 displays 'Low precision'

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Add Keyword panel with Fuzzy Match selected |
| Test Data | 49 |
| Steps | 1. Enter Threshold Score of 49 |
| Acceptance Criteria | Score of exactly 49 should show Low precision |
| Expected Result | Live indicator should display 'Low precision' for score of exactly 49 |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, functional |

### KM-TC-068 — Verify Screening Fields selector is mandatory with at least one field required

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | Critical |
| Preconditions | Add Keyword panel is open |
| Test Data | No screening fields |
| Steps | 1. Leave Screening Fields unselected 2. Submit |
| Acceptance Criteria | Form should block submission without any Screening Fields selected |
| Expected Result | Inline validation error should block submission: at least one Screening Field must be selected |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, critical, functional |

### KM-TC-069 — Verify Screening Fields displays three groups: Name Screening, Adverse Media Screening, KYC/Onboarding Screening

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Add Keyword panel is open |
| Test Data | N/A |
| Steps | 1. Open Screening Fields selector 2. Observe available groups |
| Acceptance Criteria | All three groups should be present in the multi-select control |
| Expected Result | Three field groups should be visible: Name Screening, Adverse Media Screening, KYC/Onboarding Screening |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, functional |

### KM-TC-070 — Verify Name Screening group contains all 7 configured fields

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Add Keyword panel, Screening Fields open |
| Test Data | N/A |
| Steps | 1. Expand Name Screening group 2. Count available fields |
| Acceptance Criteria | All 7 Name Screening fields should be selectable |
| Expected Result | 7 fields should be present: Business/Entity Name Suffix; Business Type/Industry Code; Occupation/Designation; Registered Address; Entity Description; Relationship Manager Notes; Beneficial Owner Description |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, functional |

### KM-TC-071 — Verify Adverse Media Screening group contains all 7 configured fields

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Add Keyword panel, Screening Fields open |
| Test Data | N/A |
| Steps | 1. Expand Adverse Media Screening group 2. Count available fields |
| Acceptance Criteria | All 7 Adverse Media fields should be selectable |
| Expected Result | 7 fields should be present: News Article Full Text; Article Headline; Source/Publication Category; Associated Entity Names; Country/Jurisdiction Tags; Regulatory Body Name; Crime Type Tags |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, functional |

### KM-TC-072 — Verify KYC/Onboarding Screening group contains all 6 configured fields

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Add Keyword panel, Screening Fields open |
| Test Data | N/A |
| Steps | 1. Expand KYC/Onboarding Screening group 2. Count available fields |
| Acceptance Criteria | All 6 KYC fields should be selectable |
| Expected Result | 6 fields should be present: Purpose of Account/Relationship; Source of Funds Description; Source of Wealth Description; Business Activity Description; Expected Transaction Description; Supporting Document Text (OCR) |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, functional |

### KM-TC-073 — Verify user can select a single Screening Field

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Add Keyword panel, Screening Fields open |
| Test Data | Purpose of Account/Relationship |
| Steps | 1. Select one field from any group |
| Acceptance Criteria | Single field selection should be supported |
| Expected Result | Selected field should appear as a chip in the selector |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, functional |

### KM-TC-074 — Verify user can select multiple Screening Fields across different groups

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Add Keyword panel, Screening Fields open |
| Test Data | Business Type; Crime Type Tags |
| Steps | 1. Select one field from Name Screening 2. Select one field from Adverse Media 3. Observe selections |
| Acceptance Criteria | Cross-group multi-selection should be supported |
| Expected Result | Both fields should remain selected simultaneously as chips |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, functional |

### KM-TC-075 — Verify selected Screening Fields appear as removable chips

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Add Keyword panel with fields selected |
| Test Data | 3 fields selected |
| Steps | 1. Select 3 screening fields 2. Observe chip display |
| Acceptance Criteria | Selected fields should display as removable chip elements |
| Expected Result | Selected fields should appear as chips with remove/X icons |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, functional |

### KM-TC-076 — Verify removing a chip deselects that Screening Field

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Chips visible for selected fields |
| Test Data | N/A |
| Steps | 1. Select multiple fields 2. Click X on one chip 3. Observe remaining selection |
| Acceptance Criteria | Clicking X on chip should remove that field from selection |
| Expected Result | Removed field should be deselected; remaining chips should stay intact |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, functional |

### KM-TC-077 — Verify search box in Screening Fields selector filters available fields

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | Medium |
| Preconditions | Screening Fields selector is open |
| Test Data | Search: 'source' |
| Steps | 1. Type 'source' in search box 2. Observe filtered results |
| Acceptance Criteria | Typing in search box should filter field list |
| Expected Result | Only fields containing 'source' in name should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, medium, functional |

### KM-TC-078 — Verify Save Draft saves keyword entry in Draft state

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | All mandatory fields except Screening Fields are filled |
| Test Data | N/A |
| Steps | 1. Fill in keyword details 2. Click Save Draft |
| Acceptance Criteria | Clicking Save Draft should persist entry as Draft |
| Expected Result | Entry should be saved with DRAFT status and visible in the Drafted tab |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, functional |

### KM-TC-079 — Verify Submit sends keyword for Checker approval when all mandatory fields are valid

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | Critical |
| Preconditions | All mandatory fields filled correctly |
| Test Data | Complete valid keyword |
| Steps | 1. Fill all mandatory fields 2. Click Submit |
| Acceptance Criteria | Valid submission should enter Pending Approval state |
| Expected Result | Entry should enter Pending Approval state; Maker should be notified |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, critical, rbac, security |

### KM-TC-080 — Verify duplicate keyword entry (same keyword, match type, and category) is rejected

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | Critical |
| Preconditions | Existing keyword 'hawala' with Fuzzy Match in ML_TF exists |
| Test Data | Duplicate: hawala, Fuzzy Match, ML_TF |
| Steps | 1. Enter keyword 'hawala' 2. Select Fuzzy Match and ML_TF category 3. Submit |
| Acceptance Criteria | Duplicates should be blocked with inline validation |
| Expected Result | System should reject with inline message: duplicate entry already exists |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, critical, maker-checker |

### KM-TC-081 — Verify Cancel on Add Keyword panel shows confirmation prompt if fields are populated

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | Medium |
| Preconditions | Add Keyword panel with data entered |
| Test Data | N/A |
| Steps | 1. Enter keyword data 2. Click Cancel |
| Acceptance Criteria | Cancel should prompt user before discarding |
| Expected Result | Confirmation prompt should appear asking user to confirm discarding data |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, medium, functional |

### KM-TC-082 — Verify Cancel on Add Keyword panel with empty fields closes without prompt

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | Medium |
| Preconditions | Add Keyword panel with no data entered |
| Test Data | N/A |
| Steps | 1. Open Add Keyword panel 2. Click Cancel immediately |
| Acceptance Criteria | Cancel with no data should close immediately |
| Expected Result | Panel should close immediately without a confirmation prompt |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, medium, functional |

### KM-TC-083 — Verify entry remains in Pending Approval state until Checker acts

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | Critical |
| Preconditions | Keyword submitted by Maker |
| Test Data | N/A |
| Steps | 1. Submit keyword entry 2. Observe status without Checker action |
| Acceptance Criteria | No auto-approval should occur |
| Expected Result | Entry should remain in Pending Approval state with no status change until Checker approves or rejects |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, critical, rbac, security |

### KM-TC-084 — Verify Live Narrative Tester panel is visible in Add Keyword panel

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Live Narrative Tester |
| Priority | High |
| Preconditions | Add Keyword panel is open |
| Test Data | N/A |
| Steps | 1. Open Add Keyword panel 2. Scroll to Live Narrative Tester section |
| Acceptance Criteria | Tester section should be present |
| Expected Result | Live Narrative Tester section should be visible within the Add Keyword panel |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, high, functional |

### KM-TC-085 — Verify Live Narrative Tester updates preview in real time as user types keyword

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Live Narrative Tester |
| Priority | High |
| Preconditions | Add Keyword panel with Tester visible |
| Test Data | Keyword: hawala; Sample text: 'hwala transfer' |
| Steps | 1. Enter keyword 'hawala' 2. Paste sample text in tester 3. Observe highlighting |
| Acceptance Criteria | Preview should react to keyword input |
| Expected Result | Matching tokens in sample text should be highlighted in real time as keyword is entered |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, high, functional |

### KM-TC-086 — Verify Exact Match tester highlights only exact token matches

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Live Narrative Tester |
| Priority | High |
| Preconditions | Exact Match selected, keyword entered |
| Test Data | hawala vs hwala |
| Steps | 1. Select Exact Match 2. Enter keyword 'hawala' 3. Paste text with 'hawala' and 'hwala' 4. Observe highlights |
| Acceptance Criteria | Exact Match mode should require exact token equality |
| Expected Result | Only 'hawala' (exact) should be highlighted; 'hwala' should not match |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, high, functional |

### KM-TC-087 — Verify Fuzzy Match tester highlights tokens meeting or exceeding the Threshold Score

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Live Narrative Tester |
| Priority | High |
| Preconditions | Fuzzy Match selected, threshold 75 |
| Test Data | Threshold 75; text: 'hwala transfer' |
| Steps | 1. Select Fuzzy Match 2. Enter score 75 3. Paste text with near-match token 4. Observe highlights |
| Acceptance Criteria | Fuzzy tester should respect Threshold Score |
| Expected Result | Tokens with similarity ≥ 75 should be highlighted; below-threshold tokens should not be |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, high, functional |

### KM-TC-088 — Verify Tester preview does not affect live screening or create audit records

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Live Narrative Tester |
| Priority | High |
| Preconditions | Tester used with pasted sample text |
| Test Data | N/A |
| Steps | 1. Use Live Tester to preview matches 2. Check audit logs and screening runs |
| Acceptance Criteria | Tester is preview-only and should have no system-side effect |
| Expected Result | No audit record, alert, or screening event should be created from Tester usage |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, high, functional |

### KM-TC-089 — Verify Tester updates when Match Type is changed

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Live Narrative Tester |
| Priority | Medium |
| Preconditions | Live Tester active with sample text |
| Test Data | Mixed match text |
| Steps | 1. Select Exact Match and observe preview 2. Switch to Fuzzy Match with score 70 3. Observe updated preview |
| Acceptance Criteria | Switching Match Type should re-evaluate the preview |
| Expected Result | Preview should update immediately when Match Type is changed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, medium, functional |

### KM-TC-090 — Verify Tester updates when Threshold Score changes

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Live Narrative Tester |
| Priority | Medium |
| Preconditions | Fuzzy Match selected, sample text pasted |
| Test Data | Score 90 vs 50 |
| Steps | 1. Set score 90 and observe 2. Change score to 50 and observe |
| Acceptance Criteria | Changing score should update highlighted matches |
| Expected Result | Preview should update to reflect the new threshold when score is changed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, medium, functional |

### KM-TC-091 — Verify Checker can view pending keyword entries submitted by Maker

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Maker-Checker Governance |
| Priority | Critical |
| Preconditions | Keyword submitted by Maker |
| Test Data | Pending keyword entry |
| Steps | 1. Login as Checker 2. Navigate to Keyword Manager Pending Approval queue |
| Acceptance Criteria | Checker should see Pending Approval entries |
| Expected Result | Checker should see the submitted keyword entry in Pending Approval state |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-governance, critical, rbac, security |

### KM-TC-092 — Verify Checker can approve a pending keyword entry

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Maker-Checker Governance |
| Priority | Critical |
| Preconditions | Keyword in Pending Approval state |
| Test Data | Pending keyword |
| Steps | 1. Checker opens pending entry 2. Clicks Approve 3. Observe status change |
| Acceptance Criteria | Approval should activate the keyword entry |
| Expected Result | Entry should move to Active status and be applied from next screening run |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-governance, critical, rbac, security |

### KM-TC-093 — Verify Checker can reject a pending keyword entry

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Maker-Checker Governance |
| Priority | Critical |
| Preconditions | Keyword in Pending Approval state |
| Test Data | Pending keyword |
| Steps | 1. Checker opens pending entry 2. Clicks Reject 3. Enters rejection comment |
| Acceptance Criteria | Rejection should return entry to Draft with comments |
| Expected Result | Entry should return to Draft state with Checker comments; Maker should be notified |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-governance, critical, rbac, security |

### KM-TC-094 — Verify Maker cannot approve their own submitted keyword entries

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Maker-Checker Governance |
| Priority | Critical |
| Preconditions | Same user submitted entry |
| Test Data | Own submitted entry |
| Steps | 1. Login as Maker who submitted entry 2. Attempt to approve own submission |
| Acceptance Criteria | Self-approval should be blocked |
| Expected Result | System should block self-approval and display appropriate error message |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-governance, critical, rbac, security |

### KM-TC-095 — Verify entries in Pending Approval state are locked from editing

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Maker-Checker Governance |
| Priority | Critical |
| Preconditions | Keyword in Pending Approval state |
| Test Data | Pending keyword |
| Steps | 1. Try to edit a Pending Approval entry |
| Acceptance Criteria | Pending entries should be read-only until Checker acts |
| Expected Result | System should prevent editing of entries in Pending Approval state |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-governance, critical, rbac, security |

### KM-TC-096 — Verify rejected entries return to Draft state for Maker revision

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Maker-Checker Governance |
| Priority | High |
| Preconditions | Keyword rejected by Checker |
| Test Data | Rejected keyword |
| Steps | 1. Checker rejects entry 2. Maker logs in and views entry |
| Acceptance Criteria | Rejected entries should be editable again |
| Expected Result | Entry should appear in Drafted tab with Checker comments; Maker should be able to edit and resubmit |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-governance, high, rbac, security |

### KM-TC-097 — Verify audit log is created for every Maker-Checker action

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Maker-Checker Governance |
| Priority | Critical |
| Preconditions | Approval/rejection actions performed |
| Test Data | N/A |
| Steps | 1. Submit keyword 2. Checker approves 3. Check audit logs |
| Acceptance Criteria | All governance actions should generate audit entries |
| Expected Result | Audit log should record: timestamp, actor, action (Submit/Approve/Reject) for each step |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-governance, critical, rbac, security |

### KM-TC-098 — Verify Maker and Checker must be different users

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Maker-Checker Governance |
| Priority | Critical |
| Preconditions | Single user account |
| Test Data | Same user credentials |
| Steps | 1. Attempt to submit and approve using same user account |
| Acceptance Criteria | Maker-Checker separation must be enforced |
| Expected Result | System should enforce four-eyes governance and prevent same-user approval |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-governance, critical, rbac, security |

### KM-TC-099 — Verify user can disable an active keyword entry via action controls

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Disable Keyword |
| Priority | High |
| Preconditions | Active keyword entry visible in listing |
| Test Data | Active keyword |
| Steps | 1. Open Active tab 2. Click Disable/Off action button for a keyword |
| Acceptance Criteria | Disable action should be available for active entries |
| Expected Result | Disable request should be submitted for Maker-Checker approval |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | disable-keyword, high, functional |

### KM-TC-100 — Verify disabled keyword is no longer evaluated at next screening run

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Disable Keyword |
| Priority | Critical |
| Preconditions | Keyword disabled and approved by Checker |
| Test Data | Active keyword in screening |
| Steps | 1. Disable keyword entry 2. Checker approves 3. Run next screening |
| Acceptance Criteria | Deactivated keyword should cease to be applied in screening |
| Expected Result | Keyword should not generate alerts after deactivation at next screening run |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | disable-keyword, critical, functional |

### KM-TC-101 — Verify hard deletion of keyword entries is not permitted

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Disable Keyword |
| Priority | Critical |
| Preconditions | Active keyword entry |
| Test Data | N/A |
| Steps | 1. Open keyword actions 2. Observe available options |
| Acceptance Criteria | No permanent delete option should be available |
| Expected Result | No permanent delete option should exist; only logical deactivation is permitted |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | disable-keyword, critical, functional |

### KM-TC-102 — Verify disable action requires Maker-Checker approval

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Disable Keyword |
| Priority | Critical |
| Preconditions | Active keyword entry |
| Test Data | Active keyword |
| Steps | 1. Initiate disable action 2. Observe workflow state |
| Acceptance Criteria | Disabling should enter Pending Approval state |
| Expected Result | Disable request should enter Pending Approval and not take effect until Checker approves |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | disable-keyword, critical, rbac, security |

### KM-TC-103 — Verify audit log records disable action with timestamp, actor, and reason

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Disable Keyword |
| Priority | High |
| Preconditions | Keyword disable workflow completed |
| Test Data | N/A |
| Steps | 1. Disable keyword with reason 2. Checker approves 3. Check audit logs |
| Acceptance Criteria | All deactivation events should be logged |
| Expected Result | Audit log should capture: actor, timestamp, reason for disable action |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | disable-keyword, high, functional |

### KM-TC-104 — Verify disabled keyword entry moves to Inactive tab

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Disable Keyword |
| Priority | High |
| Preconditions | Keyword disable approved by Checker |
| Test Data | N/A |
| Steps | 1. Disable keyword 2. Checker approves 3. Check Inactive tab |
| Acceptance Criteria | Inactive entries should appear in Inactive tab |
| Expected Result | Disabled keyword should now appear in the Inactive tab, not the Active tab |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | disable-keyword, high, functional |

### KM-TC-105 — Verify user can re-enable an inactive keyword entry

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Enable Keyword |
| Priority | High |
| Preconditions | Inactive keyword entry in Inactive tab |
| Test Data | Inactive keyword |
| Steps | 1. Open Inactive tab 2. Click Enable/On action for a keyword |
| Acceptance Criteria | Enable action should be available for inactive entries |
| Expected Result | Enable request should be submitted for Maker-Checker approval |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | enable-keyword, high, functional |

### KM-TC-106 — Verify re-enabled keyword enters Active state after Checker approval

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Enable Keyword |
| Priority | Critical |
| Preconditions | Enable request in Pending Approval |
| Test Data | N/A |
| Steps | 1. Enable keyword 2. Checker approves 3. Check Active tab |
| Acceptance Criteria | Re-activation should restore keyword to Active status |
| Expected Result | Keyword should move back to Active tab and be applied at next screening run |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | enable-keyword, critical, rbac, security |

### KM-TC-107 — Verify Bulk Import option is accessible from Keyword Manager toolbar

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Bulk Import |
| Priority | High |
| Preconditions | User on Keyword Manager page |
| Test Data | N/A |
| Steps | 1. Open Keyword Manager page 2. Click Bulk Import button |
| Acceptance Criteria | Import button should be visible and clickable |
| Expected Result | Bulk Import interface/modal should open |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-import, high |

### KM-TC-108 — Verify system accepts valid CSV file for bulk import

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Bulk Import |
| Priority | Critical |
| Preconditions | Bulk Import interface open |
| Test Data | Valid keyword CSV |
| Steps | 1. Upload valid CSV file with correct columns and data |
| Acceptance Criteria | Valid CSV should be accepted without errors |
| Expected Result | File should be accepted and import validation should pass |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-import, critical, export |

### KM-TC-109 — Verify system accepts valid XLSX file for bulk import

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Bulk Import |
| Priority | Critical |
| Preconditions | Bulk Import interface open |
| Test Data | Valid keyword XLSX |
| Steps | 1. Upload valid XLSX file with correct data |
| Acceptance Criteria | Valid XLSX should be accepted without errors |
| Expected Result | File should be accepted and import validation should pass |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-import, critical, error-handling |

### KM-TC-110 — Verify import validates field completeness: missing Keyword/Phrase is rejected

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Bulk Import |
| Priority | High |
| Preconditions | Bulk Import interface open |
| Test Data | CSV with blank keyword |
| Steps | 1. Upload CSV with one row missing Keyword/Phrase |
| Acceptance Criteria | Rows with missing mandatory fields should be flagged |
| Expected Result | Import should be blocked or the row should be flagged with a missing-field error |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-import, high, export |

### KM-TC-111 — Verify import validates that Fuzzy Match rows include Threshold Score

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Bulk Import |
| Priority | Critical |
| Preconditions | Bulk Import interface open |
| Test Data | Fuzzy row, no score |
| Steps | 1. Upload file with Fuzzy Match row but no Threshold Score |
| Acceptance Criteria | Fuzzy rows without Threshold Score should be flagged |
| Expected Result | Import should flag or reject rows with Fuzzy Match and missing Threshold Score |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-import, critical, functional |

### KM-TC-112 — Verify import validates that each row has at least one Screening Field

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Bulk Import |
| Priority | Critical |
| Preconditions | Bulk Import interface open |
| Test Data | Row missing all screening fields |
| Steps | 1. Upload file with a row having no Screening Fields |
| Acceptance Criteria | Rows with no Screening Fields should be rejected |
| Expected Result | Import should reject rows with no Screening Fields mapped |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-import, critical, maker-checker |

### KM-TC-113 — Verify duplicate rows in import file are flagged during validation

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Bulk Import |
| Priority | High |
| Preconditions | Bulk Import interface open |
| Test Data | File with 2 identical rows |
| Steps | 1. Upload file with duplicate keyword rows |
| Acceptance Criteria | Duplicate keyword rows should be identified during import validation |
| Expected Result | Duplicate rows should be flagged during validation; import should not silently accept duplicates |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-import, high, functional |

### KM-TC-114 — Verify bulk import is treated as a single Maker action requiring Checker approval

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Bulk Import |
| Priority | Critical |
| Preconditions | Valid import file uploaded |
| Test Data | Valid import batch |
| Steps | 1. Upload valid import file 2. Confirm import 3. Observe workflow state |
| Acceptance Criteria | Full import batch should enter Pending Approval |
| Expected Result | All records from bulk import should enter Pending Approval as a single Maker action |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-import, critical, rbac, security |

### KM-TC-115 — Verify no records from bulk import become active without Checker approval

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Bulk Import |
| Priority | Critical |
| Preconditions | Bulk import submitted by Maker |
| Test Data | N/A |
| Steps | 1. Submit bulk import 2. Check Active tab without Checker action |
| Acceptance Criteria | Import records should stay inactive until approved |
| Expected Result | No imported keywords should appear in Active tab until Checker approves the batch |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-import, critical, rbac, security |

### KM-TC-116 — Verify unsupported file type is rejected during import

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Bulk Import |
| Priority | High |
| Preconditions | Bulk Import interface open |
| Test Data | PDF file |
| Steps | 1. Attempt to upload a PDF or TXT file |
| Acceptance Criteria | Only CSV and XLSX should be accepted |
| Expected Result | System should reject unsupported file type with clear error message |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-import, high, export |

### KM-TC-117 — Verify import validation error displays the specific field/column that failed

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Bulk Import |
| Priority | High |
| Preconditions | Invalid import file with column error |
| Test Data | CSV missing Category column |
| Steps | 1. Upload file missing a required column 2. Observe error message |
| Acceptance Criteria | Error messages should identify the exact failure |
| Expected Result | Error should identify the specific missing or invalid column/field |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-import, high, export |

### KM-TC-118 — Verify Export button is visible and accessible for authorised users

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Export |
| Priority | High |
| Preconditions | Authorised user on Keyword Manager page |
| Test Data | N/A |
| Steps | 1. Open Keyword Manager page 2. Observe Export button |
| Acceptance Criteria | Export option should be available in toolbar |
| Expected Result | Export button should be visible for users with export permission |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export, high |

### KM-TC-119 — Verify exported file includes all keyword fields: keyword, category, risk level, match type, threshold score, screening fields, status, version

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Export |
| Priority | High |
| Preconditions | Export triggered with full active dataset |
| Test Data | N/A |
| Steps | 1. Click Export 2. Open downloaded file 3. Check columns |
| Acceptance Criteria | Export should contain all defined fields |
| Expected Result | All required columns should be present in the exported file |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export, high |

### KM-TC-120 — Verify Threshold Score is included for Fuzzy Match entries in export

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Export |
| Priority | High |
| Preconditions | Export with Fuzzy Match keywords |
| Test Data | Fuzzy Match keyword export |
| Steps | 1. Export active keywords 2. Check Threshold Score column for Fuzzy rows |
| Acceptance Criteria | Fuzzy Match rows should include Threshold Score in export |
| Expected Result | Threshold Score should be populated for Fuzzy Match rows in the export |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export, high |

### KM-TC-121 — Verify Threshold Score column is blank for Exact Match entries in export

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Export |
| Priority | Medium |
| Preconditions | Export with Exact Match keywords |
| Test Data | Exact Match export |
| Steps | 1. Export active keywords 2. Check Threshold Score column for Exact rows |
| Acceptance Criteria | Exact Match rows should not have Threshold Score in export |
| Expected Result | Threshold Score should be blank or N/A for Exact Match rows in export |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export, medium |

### KM-TC-122 — Verify Screening Fields mapping is included in export

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Export |
| Priority | High |
| Preconditions | Export with mapped keywords |
| Test Data | Keywords with mapped fields |
| Steps | 1. Export active keywords 2. Check Screening Fields column |
| Acceptance Criteria | Each exported row should show its Screening Fields |
| Expected Result | Screening Fields column should show all mapped fields for each keyword row |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export, high |

### KM-TC-123 — Verify export generates audit log entry

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Export |
| Priority | High |
| Preconditions | Export action completed |
| Test Data | N/A |
| Steps | 1. Trigger export 2. Check audit logs |
| Acceptance Criteria | Export activity should be tracked in audit log |
| Expected Result | Audit log should capture export activity including user, timestamp, and action |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export, high |

### KM-TC-124 — Verify active keyword with Exact Match is only evaluated against its mapped Screening Fields

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Engine |
| Priority | Critical |
| Preconditions | Active Exact Match keyword with specific field mapping |
| Test Data | Keyword: 'offshore account'; mapped to Purpose of Account only |
| Steps | 1. Activate keyword mapped to Purpose of Account only 2. Run screening 3. Confirm keyword only evaluated on mapped field |
| Acceptance Criteria | Keyword should not evaluate unmapped fields |
| Expected Result | Keyword match should only occur on mapped field; no alerts from unmapped fields |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | screening-engine, critical, functional |

### KM-TC-125 — Verify active keyword with Fuzzy Match generates match when similarity meets Threshold Score

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Engine |
| Priority | Critical |
| Preconditions | Active Fuzzy Match keyword, score 75, mapped fields |
| Test Data | Keyword: 'hawala'; text: 'hwala transfer'; score 82 |
| Steps | 1. Activate Fuzzy keyword (score 75) 2. Run screening on text with 82-score similarity |
| Acceptance Criteria | Fuzzy keyword should alert when similarity ≥ threshold |
| Expected Result | Match event should be generated and alert raised since 82 ≥ 75 |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | screening-engine, critical, functional |

### KM-TC-126 — Verify Fuzzy Match keyword does NOT fire when similarity falls below Threshold Score

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Engine |
| Priority | Critical |
| Preconditions | Active Fuzzy keyword, score 80 |
| Test Data | Score 70 vs threshold 80 |
| Steps | 1. Run screening with a text scoring 70 against keyword |
| Acceptance Criteria | Tokens below threshold should not match |
| Expected Result | No match event should be generated; score 70 < 80 threshold |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | screening-engine, critical, functional |

### KM-TC-127 — Verify keyword matching is case-insensitive by default

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Engine |
| Priority | High |
| Preconditions | Active keyword 'hawala' |
| Test Data | All case variants |
| Steps | 1. Screen text 'HAWALA' 2. Screen text 'Hawala' 3. Screen text 'hawala' |
| Acceptance Criteria | Case should not affect matching per BR-002 |
| Expected Result | All case variants should generate a match for the keyword |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | screening-engine, high, functional |

### KM-TC-128 — Verify special characters are normalised before matching per BR-008

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Engine |
| Priority | High |
| Preconditions | Active Exact Match keyword |
| Test Data | Keyword: 'hawala'; text: 'hàwala' |
| Steps | 1. Run screening with text containing diacritics or punctuation variations of keyword |
| Acceptance Criteria | Punctuation and diacritics should be stripped before comparison |
| Expected Result | Normalised text should be evaluated; match should occur if post-normalisation text equals keyword |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | screening-engine, high, functional |

### KM-TC-129 — Verify keyword match contributes to alert generation on batch screening page

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Engine |
| Priority | Critical |
| Preconditions | Active keyword, screening run completed |
| Test Data | Screening with keyword match |
| Steps | 1. Run batch screening 2. Verify alert generated for matching customer |
| Acceptance Criteria | Alert should appear in batch screening when keyword is matched |
| Expected Result | Alert should appear on the batch screening page for the matched keyword |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | screening-engine, critical, functional |

### KM-TC-130 — Verify keyword changes take effect at next screening run, not retroactively

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Engine |
| Priority | High |
| Preconditions | Keyword updated and approved |
| Test Data | N/A |
| Steps | 1. Update keyword 2. Check past alerts 3. Run new screening |
| Acceptance Criteria | Updates should only affect future screening, not historical |
| Expected Result | Historical alerts should be unchanged; updated keyword should only apply from next screening invocation |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | screening-engine, high, functional |

### KM-TC-131 — Verify Draft state entry is visible only in Drafted tab

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Workflow States |
| Priority | High |
| Preconditions | Drafted keyword entry |
| Test Data | N/A |
| Steps | 1. Create and save as Draft 2. Check Active tab 3. Check Inactive tab 4. Check Drafted tab |
| Acceptance Criteria | Draft entries should not appear in Active or Inactive tabs |
| Expected Result | Draft entry should only appear in Drafted tab |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | workflow-states, high, functional |

### KM-TC-132 — Verify Pending Approval state entry is not shown in Active tab

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Workflow States |
| Priority | Critical |
| Preconditions | Keyword submitted for approval |
| Test Data | N/A |
| Steps | 1. Submit keyword 2. Check Active tab |
| Acceptance Criteria | Pending entries must not be applied to screening |
| Expected Result | Pending Approval entry should not appear in Active tab or be applied in screening |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | workflow-states, critical, functional |

### KM-TC-133 — Verify Approved/Active keyword appears in Active tab

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Workflow States |
| Priority | High |
| Preconditions | Keyword approved by Checker |
| Test Data | N/A |
| Steps | 1. Approve keyword as Checker 2. Check Active tab |
| Acceptance Criteria | Approved keywords should be listed in Active tab |
| Expected Result | Approved keyword should appear in Active tab with Active status badge |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | workflow-states, high, maker-checker |

### KM-TC-134 — Verify Inactive keyword does not appear in Active tab

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Workflow States |
| Priority | High |
| Preconditions | Inactive keyword entry |
| Test Data | Inactive keyword |
| Steps | 1. Check Active tab 2. Check Inactive tab |
| Acceptance Criteria | Inactive entries should be isolated to Inactive tab |
| Expected Result | Inactive keyword should only appear in Inactive tab |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | workflow-states, high, functional |

### KM-TC-135 — Verify all five workflow states are supported: Draft, Pending Approval, Active, Rejected, Inactive

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Workflow States |
| Priority | High |
| Preconditions | Dataset with keywords in all states |
| Test Data | Entries in all 5 states |
| Steps | 1. Create entries in each state 2. Verify each state is displayed correctly |
| Acceptance Criteria | System should reflect all defined states |
| Expected Result | System should correctly display Draft, Pending Approval, Active, Rejected, and Inactive states |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | workflow-states, high, maker-checker |

### KM-TC-136 — Verify authorised Maker can access Add Keyword functionality

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | RBAC & Security |
| Priority | High |
| Preconditions | User with Maker role |
| Test Data | Maker account |
| Steps | 1. Login as Maker 2. Navigate to Keyword Manager 3. Click Add Keyword |
| Acceptance Criteria | Maker role should have access to create keywords |
| Expected Result | Add Keyword panel should open successfully for Maker role |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | rbac-security, high, rbac, security |

### KM-TC-137 — Verify unauthorised users cannot access Keyword Manager module

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | RBAC & Security |
| Priority | Critical |
| Preconditions | User without Keyword Manager access |
| Test Data | Restricted role |
| Steps | 1. Login as restricted role 2. Attempt to navigate to Keyword Manager |
| Acceptance Criteria | Non-authorised users should be blocked |
| Expected Result | System should deny access or hide Keyword Manager from navigation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | rbac-security, critical, functional |

### KM-TC-138 — Verify unauthorised users cannot execute Add Keyword action

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | RBAC & Security |
| Priority | Critical |
| Preconditions | Restricted user on Keyword Manager page |
| Test Data | Restricted account |
| Steps | 1. Attempt to access Add Keyword action as restricted user |
| Acceptance Criteria | Add Keyword should be restricted by RBAC |
| Expected Result | System should block the action or not show Add Keyword button to restricted users |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | rbac-security, critical, rbac, security |

### KM-TC-139 — Verify unauthorised users cannot execute Bulk Import

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | RBAC & Security |
| Priority | Critical |
| Preconditions | Restricted user on Keyword Manager page |
| Test Data | Restricted account |
| Steps | 1. Attempt Bulk Import as restricted user |
| Acceptance Criteria | Import feature should be RBAC-controlled |
| Expected Result | System should restrict bulk import access for unauthorised users |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | rbac-security, critical, rbac, security |

### KM-TC-140 — Verify unauthorised users cannot access Export functionality

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | RBAC & Security |
| Priority | High |
| Preconditions | Restricted user on Keyword Manager page |
| Test Data | Restricted account |
| Steps | 1. Attempt Export as restricted user |
| Acceptance Criteria | Export should be RBAC-controlled |
| Expected Result | Export button should be hidden or inaccessible for users without export permission |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | rbac-security, high, rbac, security |

### KM-TC-141 — Verify SQL injection in Keyword/Phrase field is handled safely

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | RBAC & Security |
| Priority | Critical |
| Preconditions | Add Keyword panel open |
| Test Data | SQL payload: ' OR 1=1 -- |
| Steps | 1. Enter SQL injection payload in Keyword/Phrase field 2. Submit |
| Acceptance Criteria | System should sanitise SQL injection attempts |
| Expected Result | System should sanitise input; no query manipulation or data exposure should occur |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | rbac-security, critical, functional |

### KM-TC-142 — Verify XSS payload in keyword fields is sanitised

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | RBAC & Security |
| Priority | Critical |
| Preconditions | Add Keyword panel open |
| Test Data | <script>alert(1)</script> |
| Steps | 1. Enter XSS payload in Keyword/Phrase field 2. Submit |
| Acceptance Criteria | Script injection should be blocked |
| Expected Result | System should sanitise XSS payload; no script execution should occur |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | rbac-security, critical, functional |

### KM-TC-143 — Verify session expiry during keyword workflow redirects user to login

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | RBAC & Security |
| Priority | High |
| Preconditions | Active session with keyword in progress |
| Test Data | Expired session |
| Steps | 1. Begin adding keyword 2. Allow session to expire 3. Attempt to submit |
| Acceptance Criteria | Expired sessions should be safely handled |
| Expected Result | System should redirect to login page on session expiry without corrupting workflow |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | rbac-security, high, session |

### KM-TC-144 — Verify audit logs capture all keyword creation, modification, and deactivation actions

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | RBAC & Security |
| Priority | Critical |
| Preconditions | Multiple keyword actions performed |
| Test Data | N/A |
| Steps | 1. Create, update, and deactivate keywords 2. Review audit logs |
| Acceptance Criteria | Comprehensive audit trail should be maintained |
| Expected Result | Audit logs should capture every action with user, timestamp, and action type |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | rbac-security, critical, functional |

### KM-TC-145 — Verify BR-001: Both Exact Match and Fuzzy Match modes are available and functional

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Business Rules |
| Priority | High |
| Preconditions | Add Keyword panel |
| Test Data | N/A |
| Steps | 1. Create one Exact Match keyword 2. Create one Fuzzy Match keyword |
| Acceptance Criteria | Two match modes must be supported per BR-001 |
| Expected Result | Both modes should work correctly with their respective configuration requirements |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, high, functional |

### KM-TC-146 — Verify BR-003: Fuzzy Match without Threshold Score is blocked

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Business Rules |
| Priority | Critical |
| Preconditions | Add Keyword panel |
| Test Data | Blank threshold with Fuzzy |
| Steps | 1. Select Fuzzy Match 2. Clear Threshold Score 3. Submit |
| Acceptance Criteria | Fuzzy Match must have Threshold Score per BR-003 |
| Expected Result | Inline error should block submission |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, critical, functional |

### KM-TC-147 — Verify BR-004: Threshold Score clamping – value 0 becomes 1

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Business Rules |
| Priority | High |
| Preconditions | Add Keyword with Fuzzy Match |
| Test Data | 0 |
| Steps | 1. Enter Threshold Score of 0 |
| Acceptance Criteria | Score below 1 must be clamped to 1 per BR-004 |
| Expected Result | Field should display 1 after clamping |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, high, functional |

### KM-TC-148 — Verify BR-004: Threshold Score clamping – value 101 becomes 100

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Business Rules |
| Priority | High |
| Preconditions | Add Keyword with Fuzzy Match |
| Test Data | 101 |
| Steps | 1. Enter Threshold Score of 101 |
| Acceptance Criteria | Score above 100 must be clamped to 100 per BR-004 |
| Expected Result | Field should display 100 after clamping |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, high, functional |

### KM-TC-149 — Verify BR-005: Keyword is only evaluated against mapped Screening Fields

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Business Rules |
| Priority | Critical |
| Preconditions | Active keyword with specific field mapping |
| Test Data | N/A |
| Steps | 1. Activate keyword mapped to Occupation only 2. Run screening with data in multiple fields |
| Acceptance Criteria | Unmapped fields must not be scanned per BR-005 |
| Expected Result | Only the mapped Occupation field should be evaluated; other fields should be ignored |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, critical, functional |

### KM-TC-150 — Verify BR-007: Submission blocked when no Screening Fields are selected

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Business Rules |
| Priority | Critical |
| Preconditions | Add Keyword panel |
| Test Data | No screening fields |
| Steps | 1. Fill all fields except Screening Fields 2. Submit |
| Acceptance Criteria | At least one Screening Field must be mapped per BR-007 |
| Expected Result | Inline error should block submission until at least one Screening Field is selected |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, critical, functional |

### KM-TC-151 — Verify BR-009: No global field scanning occurs unless all relevant fields are explicitly selected

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Business Rules |
| Priority | High |
| Preconditions | Active keyword without full field mapping |
| Test Data | Keyword with limited field mapping |
| Steps | 1. Run screening 2. Verify only mapped fields are scanned |
| Acceptance Criteria | Mapping must be explicit per BR-009 |
| Expected Result | Screening should only evaluate the explicitly mapped fields |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, high, functional |

### KM-TC-152 — Verify BR-010: Permanent deletion of keyword entries is not permitted

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Business Rules |
| Priority | Critical |
| Preconditions | Active keyword entry |
| Test Data | N/A |
| Steps | 1. Look for delete option 2. Confirm only deactivate is available |
| Acceptance Criteria | Logical deactivation only per BR-010 |
| Expected Result | No hard-delete option should exist; only logical deactivation with audit record should be available |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, critical, functional |

### KM-TC-153 — Verify BR-011: All operations (add, disable, import, export) require Maker-Checker governance

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Business Rules |
| Priority | Critical |
| Preconditions | Multiple operations performed |
| Test Data | N/A |
| Steps | 1. Perform add, disable, import operations 2. Verify each enters Pending Approval |
| Acceptance Criteria | Governance should apply to all keyword operations per BR-011 |
| Expected Result | Every Maker action should require Checker approval before taking effect |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | business-rules, critical, rbac, security |

### KM-TC-154 — Verify keyword mapped to fields across multiple groups is evaluated on all mapped fields

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Fields |
| Priority | High |
| Preconditions | Keyword mapped to Name Screening and Adverse Media fields |
| Test Data | Keyword mapped to 2 groups |
| Steps | 1. Create keyword mapped to Occupation AND News Article Full Text 2. Run screening |
| Acceptance Criteria | Cross-group mapping should work correctly |
| Expected Result | Keyword should be evaluated against both Occupation and News Article Full Text fields |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-fields, high, functional |

### KM-TC-155 — Verify keyword mapped only to KYC/Onboarding fields does not fire on Name Screening fields

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Fields |
| Priority | Critical |
| Preconditions | Keyword mapped only to KYC fields |
| Test Data | N/A |
| Steps | 1. Run screening with data in both KYC and Name Screening fields |
| Acceptance Criteria | Scope isolation must work per BR-005 |
| Expected Result | Keyword should only alert based on KYC field matches; Name Screening fields should be ignored |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-fields, critical, functional |

### KM-TC-156 — Verify all 20 Screening Fields across three groups are selectable in Add Keyword panel

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Fields |
| Priority | High |
| Preconditions | Add Keyword panel open |
| Test Data | N/A |
| Steps | 1. Open Screening Fields selector 2. Count total available fields across all groups |
| Acceptance Criteria | All 20 fields must be available |
| Expected Result | Exactly 20 fields should be available across Name Screening (7), Adverse Media (7), and KYC/Onboarding (6) groups |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-fields, high, functional |

### KM-TC-157 — Verify Screening Fields selection persists when re-opening keyword entry

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Fields |
| Priority | High |
| Preconditions | Keyword saved with Screening Fields |
| Test Data | N/A |
| Steps | 1. Save keyword with 3 fields mapped 2. Reopen keyword entry 3. Observe Screening Fields |
| Acceptance Criteria | Saved field mappings should be retained |
| Expected Result | Previously selected Screening Fields should still be shown as selected/chips when reopening entry |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-fields, high, functional |

### KM-TC-158 — Verify risk level badges display correct colour coding (Low=green, Medium=amber, High=red)

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | UI Components |
| Priority | Medium |
| Preconditions | Keyword entries with all risk levels visible |
| Test Data | N/A |
| Steps | 1. Open listing page 2. Observe badge colours for Low, Medium, High |
| Acceptance Criteria | Badge colours should match design specification |
| Expected Result | Low badge should be green, Medium amber/yellow, High red per design specification |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ui-components, medium, functional |

### KM-TC-159 — Verify status badges display correct colour coding per specification

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | UI Components |
| Priority | Medium |
| Preconditions | Entries in all status types |
| Test Data | Active, Inactive, Draft, Pending entries |
| Steps | 1. Review status badges in listing |
| Acceptance Criteria | Status badge colours should match design |
| Expected Result | Active=green, Inactive=grey, Draft=amber, Pending=blue per specification |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ui-components, medium, functional |

### KM-TC-160 — Verify match type badges display correct styling for Exact Match and Fuzzy Match

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | UI Components |
| Priority | Medium |
| Preconditions | Listing with both match types |
| Test Data | N/A |
| Steps | 1. Observe Match Type column badges |
| Acceptance Criteria | Match type badges should be visually distinct |
| Expected Result | Exact Match and Fuzzy Match should have distinct badge styles |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ui-components, medium, functional |

### KM-TC-161 — Verify modal overlay background dims main content correctly

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | UI Components |
| Priority | Low |
| Preconditions | Add Category or Add Keyword modal open |
| Test Data | N/A |
| Steps | 1. Open any modal 2. Observe background dimming |
| Acceptance Criteria | Modal should appear with overlay |
| Expected Result | Background content should be dimmed/overlaid when modal is open |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ui-components, low, functional |

### KM-TC-162 — Verify Add Category modal header uses correct styling

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | UI Components |
| Priority | Low |
| Preconditions | Add Category modal open |
| Test Data | N/A |
| Steps | 1. Open Add Category modal 2. Observe header styling |
| Acceptance Criteria | Modal header should follow design specification |
| Expected Result | Modal header should display correct background colour, font, and layout |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ui-components, low, functional |

### KM-TC-163 — Verify Add Keyword submit button is disabled until mandatory fields are complete

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | UI Components |
| Priority | High |
| Preconditions | Add Keyword panel with incomplete fields |
| Test Data | N/A |
| Steps | 1. Open Add Keyword panel 2. Observe submit button state before completing mandatory fields |
| Acceptance Criteria | Submit button should not be active without valid required fields |
| Expected Result | Submit button should appear disabled until all mandatory fields have valid values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ui-components, high, functional |

### KM-TC-164 — Verify action buttons (enable/disable) render correctly per design

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | UI Components |
| Priority | Low |
| Preconditions | Active keyword entries in listing |
| Test Data | N/A |
| Steps | 1. Observe action buttons in listing table |
| Acceptance Criteria | Action buttons should have correct styling |
| Expected Result | Enable and disable buttons should render with correct colour and icon styles |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ui-components, low, functional |

### KM-TC-165 — Verify sidebar navigation highlights Keyword Manager as active when on this page

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | UI Components |
| Priority | Low |
| Preconditions | User on Keyword Manager page |
| Test Data | N/A |
| Steps | 1. Observe sidebar navigation 2. Check Keyword Manager menu item state |
| Acceptance Criteria | Active nav item should be visually highlighted |
| Expected Result | Keyword Manager nav item should show active/highlighted state in sidebar |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ui-components, low, functional |

### KM-TC-166 — Verify all mandatory form fields have visible labels with red asterisk indicator

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Accessibility |
| Priority | Medium |
| Preconditions | Add Keyword and Add Category panels open |
| Test Data | N/A |
| Steps | 1. Open Add Keyword panel 2. Inspect mandatory field labels |
| Acceptance Criteria | Required fields must be clearly marked |
| Expected Result | All mandatory fields should display a visible red asterisk (*) in their label |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accessibility, medium, functional |

### KM-TC-167 — Verify Tab key navigation follows logical order through keyword form fields

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Accessibility |
| Priority | Medium |
| Preconditions | Add Keyword panel open |
| Test Data | N/A |
| Steps | 1. Use Tab key to navigate through all form fields 2. Observe focus order |
| Acceptance Criteria | Keyboard navigation should follow reading order |
| Expected Result | Focus should move logically through fields: Keyword, Category, Risk Level, Match Type, Threshold Score, Screening Fields |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accessibility, medium |

### KM-TC-168 — Verify keyboard focus indicators are visible on all interactive elements

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Accessibility |
| Priority | Medium |
| Preconditions | Keyword Manager page loaded |
| Test Data | N/A |
| Steps | 1. Navigate page using Tab key only 2. Observe focus indicators on all controls |
| Acceptance Criteria | Focus rings should be visible |
| Expected Result | Visible focus rings should appear on all interactive elements when navigated by keyboard |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accessibility, medium |

### KM-TC-169 — Verify inline validation error messages are readable and positioned near the relevant field

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Accessibility |
| Priority | Medium |
| Preconditions | Form with validation errors triggered |
| Test Data | N/A |
| Steps | 1. Submit form with missing mandatory fields 2. Observe error message placement |
| Acceptance Criteria | Error messages should be contextual and clear |
| Expected Result | Error messages should appear directly adjacent to the field they relate to |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accessibility, medium, error-handling |

### KM-TC-170 — Verify page layout is usable at 200% browser zoom

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Accessibility |
| Priority | Medium |
| Preconditions | Keyword Manager page loaded |
| Test Data | N/A |
| Steps | 1. Set browser zoom to 200% 2. Navigate all sections |
| Acceptance Criteria | Zoom should not break layout |
| Expected Result | Layout, controls, and table should remain usable and readable at 200% zoom without overflow or overlap |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accessibility, medium, browser-compat |

### KM-TC-171 — Verify Keyword Manager listing page loads within acceptable time threshold

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Performance |
| Priority | High |
| Preconditions | Keyword dataset of varying sizes |
| Test Data | Large and small datasets |
| Steps | 1. Open Keyword Manager page 2. Measure load time |
| Acceptance Criteria | Page should meet performance SLA |
| Expected Result | Page should load within configured acceptable response threshold |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | performance, high |

### KM-TC-172 — Verify Add Keyword submission completes within acceptable time

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Performance |
| Priority | High |
| Preconditions | Valid keyword form filled |
| Test Data | N/A |
| Steps | 1. Submit keyword entry 2. Measure response time |
| Acceptance Criteria | Form submission should respond quickly |
| Expected Result | Submission response should complete within acceptable time threshold |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | performance, high, functional |

### KM-TC-173 — Verify bulk import processing completes within acceptable time for large files

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Performance |
| Priority | High |
| Preconditions | Large import file available |
| Test Data | Large import file |
| Steps | 1. Upload large import file 2. Measure processing time |
| Acceptance Criteria | Bulk import should meet performance requirements |
| Expected Result | Import processing should complete within acceptable time threshold without timeout |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | performance, high |

### KM-TC-174 — Verify rapid repeated clicks on Submit do not create duplicate keyword entries

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Performance |
| Priority | High |
| Preconditions | Add Keyword panel with valid data |
| Test Data | N/A |
| Steps | 1. Fill keyword form 2. Rapidly click Submit multiple times |
| Acceptance Criteria | System should prevent duplicate submissions |
| Expected Result | System should process only one submission; no duplicate entries should be created |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | performance, high, api |

### KM-TC-175 — Verify Keyword Manager remains stable during prolonged usage

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Performance |
| Priority | Medium |
| Preconditions | User actively using Keyword Manager for extended time |
| Test Data | N/A |
| Steps | 1. Perform repeated add, search, and navigation actions over extended period |
| Acceptance Criteria | System should not degrade during extended sessions |
| Expected Result | System should remain responsive and stable throughout prolonged usage |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | performance, medium, session |

### KM-TC-176 — Verify Keyword Manager functions correctly in Chrome 120+

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Browser Compatibility |
| Priority | High |
| Preconditions | Chrome 120+ available |
| Test Data | N/A |
| Steps | 1. Open Keyword Manager in Chrome 2. Test Add Keyword, Search, Category controls |
| Acceptance Criteria | All features should work in Chrome |
| Expected Result | All keyword management functions should work correctly in Chrome 120+ |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | browser-compatibility, high, browser-compat |

### KM-TC-177 — Verify Keyword Manager functions correctly in Edge 120+

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Browser Compatibility |
| Priority | High |
| Preconditions | Edge 120+ available |
| Test Data | N/A |
| Steps | 1. Open Keyword Manager in Edge 2. Test key workflows |
| Acceptance Criteria | All features should work in Edge |
| Expected Result | All keyword management functions should work correctly in Edge 120+ |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | browser-compatibility, high, browser-compat |

### KM-TC-178 — Verify Keyword Manager functions correctly in Firefox 120+ and Safari 16+

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Browser Compatibility |
| Priority | Medium |
| Preconditions | Firefox 120+ and Safari 16+ available |
| Test Data | N/A |
| Steps | 1. Open Keyword Manager in Firefox and Safari 2. Test key workflows |
| Acceptance Criteria | All features should work in Firefox and Safari |
| Expected Result | All keyword management functions should work correctly in Firefox and Safari |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | browser-compatibility, medium, browser-compat |

### KM-TC-179 — Verify system handles empty Keyword/Phrase field submission gracefully

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Negative Edge Cases |
| Priority | Critical |
| Preconditions | Add Keyword panel open |
| Test Data | Empty input |
| Steps | 1. Leave Keyword/Phrase empty 2. Submit |
| Acceptance Criteria | Empty keyword should not be accepted |
| Expected Result | Inline validation error should block submission |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | negative-edge-cases, critical, functional |

### KM-TC-180 — Verify system handles whitespace-only Keyword/Phrase

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Negative Edge Cases |
| Priority | High |
| Preconditions | Add Keyword panel open |
| Test Data | Spaces only |
| Steps | 1. Enter only spaces in Keyword/Phrase 2. Submit |
| Acceptance Criteria | Spaces-only input should be rejected |
| Expected Result | System should reject whitespace-only input with validation error |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | negative-edge-cases, high, maker-checker |

### KM-TC-181 — Verify non-integer Threshold Score value is handled safely

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Negative Edge Cases |
| Priority | High |
| Preconditions | Add Keyword panel, Fuzzy Match selected |
| Test Data | 75.5 |
| Steps | 1. Enter decimal value like 75.5 in Threshold Score |
| Acceptance Criteria | Threshold Score must be an integer |
| Expected Result | System should reject or round decimal; only integers 1-100 should be accepted |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | negative-edge-cases, high, functional |

### KM-TC-182 — Verify alphabetic characters in Threshold Score are rejected

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Negative Edge Cases |
| Priority | High |
| Preconditions | Add Keyword panel, Fuzzy Match selected |
| Test Data | abc |
| Steps | 1. Enter 'abc' in Threshold Score field |
| Acceptance Criteria | Threshold Score must be numeric |
| Expected Result | System should reject non-numeric input in Threshold Score field |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | negative-edge-cases, high, maker-checker |

### KM-TC-183 — Verify system handles concurrent keyword submissions from multiple Maker users

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Negative Edge Cases |
| Priority | High |
| Preconditions | Multiple Maker users active simultaneously |
| Test Data | Concurrent submissions |
| Steps | 1. Submit keywords from two Maker accounts simultaneously |
| Acceptance Criteria | Concurrent submissions should not conflict |
| Expected Result | System should handle concurrent submissions without conflict or data corruption |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | negative-edge-cases, high, rbac, security |

### KM-TC-184 — Verify system handles network interruption during keyword submission

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Negative Edge Cases |
| Priority | High |
| Preconditions | Keyword being submitted during network interruption |
| Test Data | N/A |
| Steps | 1. Fill keyword form 2. Disconnect network 3. Submit 4. Reconnect |
| Acceptance Criteria | Network loss should be handled gracefully |
| Expected Result | System should display appropriate error; no partial or corrupted entry should be created |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | negative-edge-cases, high, functional |

### KM-TC-185 — Verify stale browser session data does not show outdated keyword statuses

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Negative Edge Cases |
| Priority | Medium |
| Preconditions | Keyword status updated in another tab |
| Test Data | N/A |
| Steps | 1. Open two browser tabs 2. Update keyword status in tab 1 3. Refresh tab 2 and observe |
| Acceptance Criteria | Page should show current status, not stale cache |
| Expected Result | Tab 2 should reflect the latest status after refresh |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | negative-edge-cases, medium, browser-compat |

### KM-TC-186 — Verify system handles Screening Fields selector with all 20 fields selected simultaneously

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Negative Edge Cases |
| Priority | High |
| Preconditions | Add Keyword panel, Screening Fields open |
| Test Data | All 20 fields selected |
| Steps | 1. Select all 20 available Screening Fields 2. Submit |
| Acceptance Criteria | Maximum field selection should be supported |
| Expected Result | All 20 fields should be accepted and entry should submit successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | negative-edge-cases, high, functional |

### KM-TC-187 — Verify browser refresh during Add Keyword form completion shows expected behaviour

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Negative Edge Cases |
| Priority | Medium |
| Preconditions | Add Keyword panel with data partially entered |
| Test Data | Partially filled form |
| Steps | 1. Enter partial keyword data 2. Press F5 to refresh 3. Observe state |
| Acceptance Criteria | Page refresh should be handled safely |
| Expected Result | Page should either retain session data or return to clean state without broken UI |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | negative-edge-cases, medium, browser-compat |

### KM-TC-188 — Verify logout clears in-progress keyword form data

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Negative Edge Cases |
| Priority | Medium |
| Preconditions | User has partial keyword data in form |
| Test Data | N/A |
| Steps | 1. Partially fill keyword form 2. Logout 3. Log back in 4. Navigate to Keyword Manager |
| Acceptance Criteria | Logging out should clear unsaved changes |
| Expected Result | Form should be clean on re-login; no previously entered but unsaved data should persist |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | negative-edge-cases, medium, session |

### KM-TC-189 — Verify keyword activation status reflects immediately in screening engine after Checker approval

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Integration |
| Priority | Critical |
| Preconditions | Keyword approved by Checker |
| Test Data | Approved keyword |
| Steps | 1. Approve keyword as Checker 2. Trigger new screening run 3. Verify keyword is evaluated |
| Acceptance Criteria | Approved keyword should be queued for next screening run |
| Expected Result | Newly approved keyword should be applied in the next screening run after approval |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | integration, critical, rbac, security |

### KM-TC-190 — Verify batch screening alert is generated when an active keyword match occurs

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Integration |
| Priority | Critical |
| Preconditions | Active keyword and screening data matching keyword |
| Test Data | Known matching screening data |
| Steps | 1. Run batch screening 2. Navigate to batch screening results |
| Acceptance Criteria | Alert should appear on batch screening page for keyword match |
| Expected Result | Alert should be present on batch screening page for the matched subject |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | integration, critical, functional |

### KM-TC-191 — Verify keyword deactivation is reflected in next screening run

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Integration |
| Priority | Critical |
| Preconditions | Active keyword deactivated and Checker approved |
| Test Data | N/A |
| Steps | 1. Deactivate keyword 2. Approve as Checker 3. Run batch screening |
| Acceptance Criteria | Deactivated keyword should not generate alerts in subsequent runs |
| Expected Result | Deactivated keyword should not generate any new alerts in subsequent screening runs |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | integration, critical, functional |

### KM-TC-192 — Verify Screening Fields update for a keyword takes effect at next screening invocation

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Integration |
| Priority | High |
| Preconditions | Keyword with updated field mapping approved |
| Test Data | Updated field mapping |
| Steps | 1. Update Screening Fields for keyword 2. Approve update 3. Run new screening |
| Acceptance Criteria | Field mapping changes should apply from next run |
| Expected Result | New field mapping should apply only from the next screening run |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | integration, high, functional |

### KM-TC-193 — Verify 'offshore account' can be created as Exact Match, HIGH risk, mapped to Purpose of Account and Registered Address

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Sample Keyword Validation |
| Priority | High |
| Preconditions | Add Keyword panel open |
| Test Data | Keyword: offshore account |
| Steps | 1. Create keyword 'offshore account' 2. Select Exact Match 3. Select HIGH risk 4. Map Purpose of Account/Relationship and Registered Address 5. Submit |
| Acceptance Criteria | Sample keyword configuration should be supported |
| Expected Result | Keyword should be created successfully with specified configuration |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | sample-keyword-validation, high, functional |

### KM-TC-194 — Verify 'hawala' can be created as Fuzzy Match (75), HIGH risk, mapped to Business Activity Description and Source of Funds Description

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Sample Keyword Validation |
| Priority | High |
| Preconditions | Add Keyword panel open |
| Test Data | Keyword: hawala, score 75 |
| Steps | 1. Create keyword 'hawala' 2. Select Fuzzy Match 3. Enter Threshold Score 75 4. Select HIGH risk 5. Map Business Activity Description and Source of Funds Description 6. Submit |
| Acceptance Criteria | Sample keyword with fuzzy configuration should work |
| Expected Result | Keyword should be created and configured successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | sample-keyword-validation, high, functional |

### KM-TC-195 — Verify 'politically exposed' as Fuzzy Match (80), HIGH risk, mapped to Occupation, News Article Full Text, and Article Headline

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Sample Keyword Validation |
| Priority | High |
| Preconditions | Add Keyword panel open |
| Test Data | Keyword: politically exposed, score 80 |
| Steps | 1. Create keyword 'politically exposed' 2. Fuzzy Match, score 80 3. HIGH risk 4. Map Occupation/Designation, News Article Full Text, Article Headline 5. Submit |
| Acceptance Criteria | PEP keyword configuration should be supported |
| Expected Result | Keyword should be configured and submitted for approval successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | sample-keyword-validation, high, functional |

### KM-TC-196 — Verify 'Iran' as Exact Match, HIGH risk, mapped to Country/Jurisdiction Tags and Registered Address

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Sample Keyword Validation |
| Priority | High |
| Preconditions | Add Keyword panel open |
| Test Data | Keyword: Iran |
| Steps | 1. Create keyword 'Iran' 2. Exact Match, HIGH risk 3. Map Country/Jurisdiction Tags and Registered Address 4. Submit |
| Acceptance Criteria | Geographic keyword should be supported |
| Expected Result | Keyword should be created and configured correctly per FSD sample reference |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | sample-keyword-validation, high, functional |

### KM-TC-197 — Verify 'casino' as Exact Match, MEDIUM risk, mapped to Business Type/Industry Code and Business Activity Description

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Sample Keyword Validation |
| Priority | Medium |
| Preconditions | Add Keyword panel open |
| Test Data | Keyword: casino |
| Steps | 1. Create keyword 'casino' 2. Exact Match, MEDIUM risk 3. Map Business Type/Industry Code and Business Activity Description 4. Submit |
| Acceptance Criteria | Industry keyword should be configured correctly |
| Expected Result | Keyword should be created with correct configuration matching sample reference |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | sample-keyword-validation, medium, functional |

### KM-TC-198 — Verify keyword entry version is tracked and included in exported data

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Additional Coverage |
| Priority | Medium |
| Preconditions | Active keyword with known version |
| Test Data | N/A |
| Steps | 1. Export keyword list 2. Check version column |
| Acceptance Criteria | Version tracking should be maintained |
| Expected Result | Exported file should include version number for each keyword entry |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | additional-coverage, medium, export |

### KM-TC-199 — Verify keyword created by Maker retains Maker's identity in audit log

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Additional Coverage |
| Priority | High |
| Preconditions | Keyword submitted by specific Maker |
| Test Data | Maker A account |
| Steps | 1. Submit keyword as Maker A 2. Check audit log |
| Acceptance Criteria | Actor identity should be captured |
| Expected Result | Audit log should record Maker A as the creator of the keyword entry |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | additional-coverage, high, rbac, security |

### KM-TC-200 — Verify Keyword Manager module loads correctly after clearing browser cache

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Additional Coverage |
| Priority | Medium |
| Preconditions | Keyword Manager page loaded at least once before |
| Test Data | N/A |
| Steps | 1. Clear browser cache 2. Navigate to Keyword Manager 3. Observe page load |
| Acceptance Criteria | Page should load fresh without cache-related issues |
| Expected Result | Keyword Manager page should load correctly and display all data after cache is cleared |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | additional-coverage, medium, browser-compat |
