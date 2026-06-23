# Custom List Manager — Detailed Test Cases (578)

### CLM-TC-001 — Verify authorized user can access Custom List Manager module from application navigation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Navigation & Access |
| Priority | High |
| Preconditions | User logged into AML application with access to Custom List Manager |
| Test Data | N/A |
| Steps | 1.Navigate to application menu 2.Click Custom List Manager |
| Acceptance Criteria | Custom List Manager should be accessible from configured navigation menu |
| Expected Result | Custom List Manager landing page should open successfully without errors |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-navigation-access, high, functional |

### CLM-TC-002 — Verify sidebar is rendered correctly on Custom List Manager pages

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Navigation & Access |
| Priority | High |
| Preconditions | User logged into Custom List Manager |
| Test Data | N/A |
| Steps | 1.Open Custom List Manager 2.Navigate between available module pages |
| Acceptance Criteria | Sidebar should be displayed consistently across module pages |
| Expected Result | Sidebar should remain visible and properly rendered on all module pages |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-navigation-access, high, functional |

### CLM-TC-003 — Verify all configured menu items are visible in sidebar

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Navigation & Access |
| Priority | High |
| Preconditions | User logged into Custom List Manager |
| Test Data | N/A |
| Steps | 1.Open module 2.Review sidebar menu structure |
| Acceptance Criteria | All configured navigation options should be displayed |
| Expected Result | All configured menu items should be visible and accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-navigation-access, high, functional |

### CLM-TC-004 — Verify active menu highlighting for currently selected page

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Navigation & Access |
| Priority | Medium |
| Preconditions | User on Custom Lists landing page |
| Test Data | N/A |
| Steps | 1.Open Custom Lists page 2.Navigate to Maker-Checker 3.Navigate to Audit Trail |
| Acceptance Criteria | System should clearly identify currently selected navigation item |
| Expected Result | Currently selected menu item should be highlighted and visually distinguishable |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-navigation-access, medium, functional |

### CLM-TC-005 — Verify navigation routing between available module pages

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Navigation & Access |
| Priority | High |
| Preconditions | User on Custom List Manager module |
| Test Data | N/A |
| Steps | 1.Click each available menu option one by one |
| Acceptance Criteria | Each menu item should navigate to its corresponding page |
| Expected Result | Each menu item should open the correct destination page without routing errors |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-navigation-access, high, functional |

### CLM-TC-006 — Verify navigation state is maintained after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Navigation & Access |
| Priority | Medium |
| Preconditions | User on any Custom List Manager page |
| Test Data | N/A |
| Steps | 1.Navigate to a module page 2.Refresh browser |
| Acceptance Criteria | System should preserve current page context |
| Expected Result | User should remain on the same page after refresh |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-navigation-access, medium, functional |

### CLM-TC-007 — Verify user identity section is displayed in sidebar

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Navigation & Access |
| Priority | Medium |
| Preconditions | User logged into Custom List Manager |
| Test Data | N/A |
| Steps | 1.Open module 2.Review user information section |
| Acceptance Criteria | User profile information should be visible in module navigation |
| Expected Result | User identity section should display logged-in user information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-navigation-access, medium, functional |

### CLM-TC-008 — Verify displayed user information matches logged-in user

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Navigation & Access |
| Priority | Medium |
| Preconditions | User logged into Custom List Manager |
| Test Data | N/A |
| Steps | 1.Note logged-in user details 2.Open Custom List Manager 3.Verify displayed user information |
| Acceptance Criteria | System should display correct user identity details |
| Expected Result | User name and role information displayed in module should match logged-in user details |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-navigation-access, medium, functional |

### CLM-TC-009 — Verify breadcrumb is displayed on Custom List Manager pages

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Breadcrumb & Top Bar |
| Priority | High |
| Preconditions | User logged into Custom List Manager |
| Test Data | N/A |
| Steps | 1.Open Custom Lists page 2.Navigate to available module pages |
| Acceptance Criteria | System should display current navigation path |
| Expected Result | Breadcrumb should be visible and represent the current page hierarchy |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-breadcrumb-top-bar, high, functional |

### CLM-TC-010 — Verify breadcrumb updates correctly during navigation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Breadcrumb & Top Bar |
| Priority | High |
| Preconditions | User on Custom List Manager module |
| Test Data | N/A |
| Steps | 1.Navigate between Custom Lists, Maker-Checker and Audit Trail pages |
| Acceptance Criteria | System should update breadcrumb based on current page |
| Expected Result | Breadcrumb should update dynamically and reflect the currently opened page |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-breadcrumb-top-bar, high, functional |

### CLM-TC-011 — Verify breadcrumb navigation redirects user to selected level

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Breadcrumb & Top Bar |
| Priority | High |
| Preconditions | Page with clickable breadcrumb available |
| Test Data | N/A |
| Steps | 1.Open a page containing breadcrumb hierarchy 2.Click breadcrumb link |
| Acceptance Criteria | User should be able to navigate using breadcrumb links |
| Expected Result | User should be redirected to the corresponding page without errors |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-breadcrumb-top-bar, high, functional |

### CLM-TC-012 — Verify notification icon is displayed in top bar

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Breadcrumb & Top Bar |
| Priority | High |
| Preconditions | User logged into Custom List Manager |
| Test Data | N/A |
| Steps | 1.Open Custom List Manager |
| Acceptance Criteria | System should display notification access control |
| Expected Result | Notification icon should be visible and accessible from the top bar |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-breadcrumb-top-bar, high, alerts |

### CLM-TC-013 — Verify notification panel opens from notification icon

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Breadcrumb & Top Bar |
| Priority | High |
| Preconditions | User logged into Custom List Manager |
| Test Data | N/A |
| Steps | 1.Click notification icon |
| Acceptance Criteria | System should allow access to notifications |
| Expected Result | Notification panel should open successfully displaying available notifications |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-breadcrumb-top-bar, high, alerts |

### CLM-TC-014 — Verify notification panel can be closed and reopened

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Breadcrumb & Top Bar |
| Priority | Medium |
| Preconditions | Notification panel opened |
| Test Data | N/A |
| Steps | 1.Open notification panel 2.Close panel 3.Reopen notification panel |
| Acceptance Criteria | System should support repeated notification access |
| Expected Result | Notification panel should close and reopen successfully without UI or functional issues |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-breadcrumb-top-bar, medium, alerts |

### CLM-TC-015 — Verify Custom Lists dashboard header is displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Dashboard |
| Priority | High |
| Preconditions | User logged into Custom List Manager |
| Test Data | N/A |
| Steps | 1.Navigate to Custom Lists landing page |
| Acceptance Criteria | System should display page title on landing page |
| Expected Result | Custom Lists dashboard header should be displayed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-dashboard, high, functional |

### CLM-TC-016 — Verify dashboard subtitle/description is displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Dashboard |
| Priority | Medium |
| Preconditions | User on Custom Lists landing page |
| Test Data | N/A |
| Steps | 1.Navigate to Custom Lists landing page |
| Acceptance Criteria | System should display configured page description |
| Expected Result | Dashboard subtitle/description should be displayed below the page header |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-dashboard, medium, functional |

### CLM-TC-017 — Verify all configured summary cards are displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Dashboard |
| Priority | High |
| Preconditions | User on Custom Lists landing page |
| Test Data | N/A |
| Steps | 1.Open Custom Lists landing page |
| Acceptance Criteria | System should display all configured dashboard metrics |
| Expected Result | All configured summary cards should be visible and properly rendered |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-dashboard, high, functional |

### CLM-TC-018 — Verify summary cards display numeric metric values

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Dashboard |
| Priority | High |
| Preconditions | User on Custom Lists landing page with available data |
| Test Data | N/A |
| Steps | 1.Open Custom Lists landing page |
| Acceptance Criteria | System should display count values for each metric |
| Expected Result | Each summary card should display a valid numeric value |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-dashboard, high, functional |

### CLM-TC-019 — Verify Total Lists metric count accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Dashboard |
| Priority | High |
| Preconditions | Custom lists available in system |
| Test Data | N/A |
| Steps | 1.Note Total Lists metric 2.Count total available custom lists |
| Acceptance Criteria | System should display actual total custom list count |
| Expected Result | Total Lists metric should match actual number of custom lists |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-dashboard, high, functional |

### CLM-TC-020 — Verify Active Lists metric count accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Dashboard |
| Priority | High |
| Preconditions | Active and inactive lists available |
| Test Data | N/A |
| Steps | 1.Note Active Lists metric 2.Count active custom lists |
| Acceptance Criteria | System should display actual active custom list count |
| Expected Result | Active Lists metric should match actual active custom list count |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-dashboard, high, functional |

### CLM-TC-021 — Verify Total Entities and Pending Approval metrics accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Dashboard |
| Priority | High |
| Preconditions | Entities and pending requests available |
| Test Data | N/A |
| Steps | 1.Note Total Entities and Pending Approval metrics 2.Verify actual counts |
| Acceptance Criteria | System should display accurate operational statistics |
| Expected Result | Displayed metrics should match actual entity and pending approval counts |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-dashboard, high, functional |

### CLM-TC-022 — Verify dashboard metrics refresh after data changes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Dashboard |
| Priority | High |
| Preconditions | User able to create/submit list requests |
| Test Data | Test List Data |
| Steps | 1.Note dashboard metrics 2.Create/submit/update list request 3.Refresh dashboard |
| Acceptance Criteria | System should display updated statistics after list lifecycle events |
| Expected Result | Dashboard metrics should reflect latest system data |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-dashboard, high, functional |

### CLM-TC-023 — Verify search functionality using exact list name

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | User on Custom Lists landing page with available lists |
| Test Data | Internal Fraud List |
| Steps | 1.Enter exact list name in search field 2.Execute search |
| Acceptance Criteria | System should return matching custom list |
| Expected Result | Only the matching custom list should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, screening-matching |

### CLM-TC-024 — Verify search functionality using partial list name

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | User on Custom Lists landing page with available lists |
| Test Data | Fraud |
| Steps | 1.Enter partial list name in search field 2.Execute search |
| Acceptance Criteria | System should return relevant matching records |
| Expected Result | All custom lists containing the entered text should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, screening-matching |

### CLM-TC-025 — Verify search with non-existing list name

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | Medium |
| Preconditions | User on Custom Lists landing page |
| Test Data | XYZ_INVALID_LIST |
| Steps | 1.Enter non-existing list name 2.Execute search |
| Acceptance Criteria | System should handle no-match scenarios correctly |
| Expected Result | System should display no matching records or configured no-data message |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, medium, functional |

### CLM-TC-026 — Verify search results accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Multiple custom lists available |
| Test Data | Fraud |
| Steps | 1.Perform search using valid keyword 2.Review returned results |
| Acceptance Criteria | System should return only relevant matching records |
| Expected Result | Only records matching the search criteria should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, screening-matching |

### CLM-TC-027 — Verify Status filter visibility and availability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | User on Custom Lists landing page |
| Test Data | N/A |
| Steps | 1.Verify Status filter control |
| Acceptance Criteria | System should provide status-based filtering |
| Expected Result | Status filter should be visible and available for selection |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, functional |

### CLM-TC-028 — Verify filtering custom lists by status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Custom lists with different statuses available |
| Test Data | Status Value |
| Steps | 1.Select a status value from filter |
| Acceptance Criteria | System should return records matching selected status |
| Expected Result | Only custom lists matching the selected status should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, screening-matching |

### CLM-TC-029 — Verify status filter result accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Custom lists with different statuses available |
| Test Data | Status Value |
| Steps | 1.Apply status filter 2.Validate returned records |
| Acceptance Criteria | System should return correct records for selected status |
| Expected Result | All displayed records should belong to the selected status only |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, functional |

### CLM-TC-030 — Verify combined search and status filtering

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Relevant test data available |
| Test Data | List Name + Status |
| Steps | 1.Search using list name 2.Apply status filter |
| Acceptance Criteria | System should apply both criteria simultaneously |
| Expected Result | Only records satisfying both search and status criteria should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, functional |

### CLM-TC-031 — Verify combined filter behavior when no matching records exist

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | Medium |
| Preconditions | No matching combination available |
| Test Data | List Name + Different Status |
| Steps | 1.Apply search criteria 2.Apply status filter with no matching combination |
| Acceptance Criteria | System should handle no-result scenarios correctly |
| Expected Result | System should display no matching records or configured no-data message |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, medium, screening-matching |

### CLM-TC-032 — Verify reset/clear functionality restores complete dataset

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Search and/or filters applied |
| Test Data | N/A |
| Steps | 1.Apply search and filters 2.Click Reset/Clear option |
| Acceptance Criteria | System should remove all applied search and filter criteria |
| Expected Result | All applied criteria should be cleared and complete dataset should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, functional |

### CLM-TC-033 — Verify all configured grid columns are displayed on landing page

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | High |
| Preconditions | User on Custom Lists landing page with records available |
| Test Data | N/A |
| Steps | 1.Navigate to Custom Lists landing page 2.Review grid structure |
| Acceptance Criteria | System should display all configured list information columns |
| Expected Result | All configured columns should be visible and properly aligned in the grid |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, high, functional |

### CLM-TC-034 — Verify grid displays list information correctly

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | High |
| Preconditions | Custom lists available in system |
| Test Data | N/A |
| Steps | 1.Open Custom Lists landing page 2.Review displayed records |
| Acceptance Criteria | System should display corresponding values for each custom list record |
| Expected Result | Each row should display the correct information associated with the custom list |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, high, functional |

### CLM-TC-035 — Verify status values are displayed for all custom list records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | High |
| Preconditions | Custom lists with different statuses available |
| Test Data | N/A |
| Steps | 1.Open Custom Lists landing page 2.Review Status column |
| Acceptance Criteria | System should display lifecycle status for each list |
| Expected Result | Status should be displayed for every custom list record |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, high, functional |

### CLM-TC-036 — Verify status displayed in grid matches actual list status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | High |
| Preconditions | Lists available in different lifecycle states |
| Test Data | Sample List |
| Steps | 1.Note status from grid 2.Open list details 3.Compare status values |
| Acceptance Criteria | System should maintain status consistency across module |
| Expected Result | Status displayed in grid should match actual list status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, high, functional |

### CLM-TC-037 — Verify Total Records count accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | High |
| Preconditions | Custom list contains entities |
| Test Data | Sample List |
| Steps | 1.Note Total Records value from grid 2.Open list details 3.Verify actual entity count |
| Acceptance Criteria | System should display accurate entity count per custom list |
| Expected Result | Total Records value should match actual number of entities in the list |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, high, functional |

### CLM-TC-038 — Verify Active Records count accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | High |
| Preconditions | Custom list contains active and inactive entities |
| Test Data | Sample List |
| Steps | 1.Note Active Records value from grid 2.Verify actual active entity count |
| Acceptance Criteria | System should display accurate active entity count |
| Expected Result | Active Records value should match actual active entity count |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, high, functional |

### CLM-TC-039 — Verify Active Records count does not exceed Total Records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | High |
| Preconditions | Custom lists available |
| Test Data | N/A |
| Steps | 1.Compare Total Records and Active Records values |
| Acceptance Criteria | System should maintain statistical integrity |
| Expected Result | Active Records count should never exceed Total Records count |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, high, audit |

### CLM-TC-040 — Verify expiry information is displayed for custom lists

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | High |
| Preconditions | Lists with expiry configuration available |
| Test Data | N/A |
| Steps | 1.Open Custom Lists landing page 2.Review Expiry column |
| Acceptance Criteria | System should display configured expiry details |
| Expected Result | Expiry information should be displayed for applicable custom lists |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, high, ttl |

### CLM-TC-041 — Verify expiry information accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | High |
| Preconditions | List with configured expiry available |
| Test Data | Sample List |
| Steps | 1.Note expiry information 2.Verify against list configuration |
| Acceptance Criteria | System should display correct expiry details |
| Expected Result | Displayed expiry information should match configured list expiry details |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, high, ttl |

### CLM-TC-042 — Verify grid data remains consistent after refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | Medium |
| Preconditions | Custom lists available |
| Test Data | N/A |
| Steps | 1.Open landing page 2.Note displayed values 3.Refresh browser |
| Acceptance Criteria | System should preserve displayed data integrity |
| Expected Result | Grid data should remain accurate and consistent after page refresh |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, medium, audit |

### CLM-TC-043 — Verify CSV Export functionality

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Export & Pagination |
| Priority | High |
| Preconditions | Custom list records available on landing page |
| Test Data | N/A |
| Steps | 1.Navigate to Custom Lists landing page 2.Click CSV Export |
| Acceptance Criteria | System should generate downloadable CSV file containing grid data |
| Expected Result | CSV file should be generated successfully containing displayed custom list data |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-export-pagination, high, export |

### CLM-TC-044 — Verify PDF Export functionality

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Export & Pagination |
| Priority | High |
| Preconditions | Custom list records available on landing page |
| Test Data | N/A |
| Steps | 1.Navigate to Custom Lists landing page 2.Click PDF Export |
| Acceptance Criteria | System should generate downloadable PDF file containing grid data |
| Expected Result | PDF file should be generated successfully containing displayed custom list data |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-export-pagination, high, export |

### CLM-TC-045 — Verify exported data accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Export & Pagination |
| Priority | High |
| Preconditions | Custom list records available |
| Test Data | N/A |
| Steps | 1.Note grid data 2.Export CSV/PDF 3.Compare exported content |
| Acceptance Criteria | System should export the same data displayed in the grid |
| Expected Result | Exported data should match the records displayed on the screen |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-export-pagination, high, export |

### CLM-TC-046 — Verify export functionality with applied search criteria

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Export & Pagination |
| Priority | High |
| Preconditions | Search results available |
| Test Data | List Name Search |
| Steps | 1.Search for a list name 2.Export CSV/PDF |
| Acceptance Criteria | System should export only searched records |
| Expected Result | Exported file should contain only records matching the search criteria |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-export-pagination, high, export |

### CLM-TC-047 — Verify export functionality with applied status filter

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Export & Pagination |
| Priority | High |
| Preconditions | Status filter applied |
| Test Data | Status Filter |
| Steps | 1.Apply status filter 2.Export CSV/PDF |
| Acceptance Criteria | System should export only filtered records |
| Expected Result | Exported file should contain only records matching the selected filter |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-export-pagination, high, export |

### CLM-TC-048 — Verify pagination navigation between pages

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Export & Pagination |
| Priority | High |
| Preconditions | Multiple pages of records available |
| Test Data | N/A |
| Steps | 1.Navigate to next page 2.Navigate to previous page |
| Acceptance Criteria | System should allow navigation across available pages |
| Expected Result | User should be able to move between pages successfully and view corresponding records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-export-pagination, high, functional |

### CLM-TC-049 — Verify page size selection updates displayed records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Export & Pagination |
| Priority | High |
| Preconditions | More records available than default page size |
| Test Data | N/A |
| Steps | 1.Change page size value 2.Review displayed records |
| Acceptance Criteria | System should update number of displayed records per page |
| Expected Result | Grid should display records according to the selected page size |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-export-pagination, high, functional |

### CLM-TC-050 — Verify pagination remains functional after search/filter operations

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Export & Pagination |
| Priority | Medium |
| Preconditions | Filtered or searched dataset spans multiple pages |
| Test Data | Filtered Dataset |
| Steps | 1.Apply search/filter 2.Navigate through pages |
| Acceptance Criteria | System should maintain pagination behavior on filtered datasets |
| Expected Result | Pagination should function correctly while retaining applied search/filter criteria |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-export-pagination, medium, functional |

### CLM-TC-051 — Verify Create List action is available and accessible

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Landing Actions |
| Priority | High |
| Preconditions | User on Custom Lists landing page |
| Test Data | N/A |
| Steps | 1.Navigate to Custom Lists landing page 2.Verify Create List action |
| Acceptance Criteria | System should provide option to create a new custom list |
| Expected Result | Create List action should be visible and enabled |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-landing-actions, high, functional |

### CLM-TC-052 — Verify Create List action redirects to Create Custom List form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Landing Actions |
| Priority | High |
| Preconditions | User on Custom Lists landing page |
| Test Data | N/A |
| Steps | 1.Click Create List action |
| Acceptance Criteria | System should open list creation workflow |
| Expected Result | Create Custom List form should open successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-landing-actions, high, maker-checker |

### CLM-TC-053 — Verify Bulk Upload action is available and accessible

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Landing Actions |
| Priority | High |
| Preconditions | User on Custom Lists landing page |
| Test Data | N/A |
| Steps | 1.Navigate to Custom Lists landing page 2.Verify Bulk Upload action |
| Acceptance Criteria | System should provide option for bulk entity onboarding |
| Expected Result | Bulk Upload action should be visible and enabled |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-landing-actions, high, bulk-upload |

### CLM-TC-054 — Verify Bulk Upload action redirects to upload workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Landing Actions |
| Priority | High |
| Preconditions | User on Custom Lists landing page |
| Test Data | N/A |
| Steps | 1.Click Bulk Upload action |
| Acceptance Criteria | System should open bulk upload process |
| Expected Result | Bulk Upload screen/workflow should open successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-landing-actions, high, bulk-upload |

### CLM-TC-055 — Verify View action opens selected custom list details

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Landing Actions |
| Priority | High |
| Preconditions | At least one custom list available |
| Test Data | Sample List |
| Steps | 1.Select a custom list 2.Click View action |
| Acceptance Criteria | System should allow viewing list information |
| Expected Result | Custom List Detail page should open displaying selected list information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-landing-actions, high, functional |

### CLM-TC-056 — Verify Edit action opens selected custom list in edit mode

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Landing Actions |
| Priority | High |
| Preconditions | At least one editable custom list available |
| Test Data | Sample List |
| Steps | 1.Select a custom list 2.Click Edit action |
| Acceptance Criteria | System should allow modification of existing lists |
| Expected Result | Edit List form should open with existing list information pre-populated |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-landing-actions, high, functional |

### CLM-TC-057 — Verify Enable/Disable action initiates status change request workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Landing Actions |
| Priority | High |
| Preconditions | At least one active or disabled custom list available |
| Test Data | Sample List |
| Steps | 1.Select a list 2.Click Enable or Disable action |
| Acceptance Criteria | System should allow lifecycle management through approval workflow |
| Expected Result | Enable/Disable request workflow should be initiated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-landing-actions, high, maker-checker |

### CLM-TC-058 — Verify landing page actions operate on the selected custom list only

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Landing Actions |
| Priority | High |
| Preconditions | Multiple custom lists available |
| Test Data | Sample List |
| Steps | 1.Select a list 2.Perform View/Edit/Enable-Disable action 3.Verify target record |
| Acceptance Criteria | System should execute actions against the intended record |
| Expected Result | Action should be performed only on the selected custom list without impacting other records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-landing-actions, high, functional |

### CLM-TC-059 — Verify Create Custom List form is rendered successfully

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Create List Form |
| Priority | High |
| Preconditions | User on Custom Lists landing page |
| Test Data | N/A |
| Steps | 1.Click Create List |
| Acceptance Criteria | System should display Create List form without UI issues |
| Expected Result | Create Custom List form should open successfully with all configured sections visible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-create-list-form, high, functional |

### CLM-TC-060 — Verify all configured fields are displayed on Create List form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Create List Form |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | N/A |
| Steps | 1.Review Create List form |
| Acceptance Criteria | System should display all fields defined for custom list creation |
| Expected Result | All configured fields should be visible and accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-create-list-form, high, functional |

### CLM-TC-061 — Verify mandatory fields are clearly identified

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Create List Form |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | N/A |
| Steps | 1.Review field labels and indicators |
| Acceptance Criteria | System should visually indicate mandatory fields |
| Expected Result | All mandatory fields should display configured mandatory indicators |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-create-list-form, high, functional |

### CLM-TC-062 — Verify Create List form layout remains intact after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Create List Form |
| Priority | Medium |
| Preconditions | User on Create Custom List form |
| Test Data | N/A |
| Steps | 1.Open Create List form 2.Refresh browser |
| Acceptance Criteria | System should render form consistently |
| Expected Result | Form layout and configured fields should remain properly displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-create-list-form, medium, functional |

### CLM-TC-063 — Verify Save Draft action is available

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Create List Form |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | N/A |
| Steps | 1.Open Create List form |
| Acceptance Criteria | System should provide draft functionality |
| Expected Result | Save Draft button should be visible and enabled |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-create-list-form, high, functional |

### CLM-TC-064 — Verify Submit For Approval action is available

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Create List Form |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | N/A |
| Steps | 1.Open Create List form |
| Acceptance Criteria | System should provide submission workflow |
| Expected Result | Submit For Approval button should be visible and enabled |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-create-list-form, high, maker-checker |

### CLM-TC-065 — Verify Cancel action is available

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Create List Form |
| Priority | Medium |
| Preconditions | User on Create Custom List form |
| Test Data | N/A |
| Steps | 1.Open Create List form |
| Acceptance Criteria | System should allow user to exit creation workflow |
| Expected Result | Cancel button should be visible and enabled |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-create-list-form, medium, maker-checker |

### CLM-TC-066 — Verify Cancel action returns user to landing page

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Create List Form |
| Priority | Medium |
| Preconditions | User on Create Custom List form |
| Test Data | N/A |
| Steps | 1.Click Cancel |
| Acceptance Criteria | System should redirect user back to Custom Lists page |
| Expected Result | User should be redirected to Custom Lists landing page |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-create-list-form, medium, functional |

### CLM-TC-067 — Verify List Name field accepts valid value

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - List Name Validation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | Internal Fraud Watchlist |
| Steps | 1.Enter valid List Name |
| Acceptance Criteria | System should accept valid list names |
| Expected Result | List Name should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-list-name-validation, high, functional |

### CLM-TC-068 — Verify List Name is mandatory during submission

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - List Name Validation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | Blank Value |
| Steps | 1.Leave List Name blank 2.Populate remaining mandatory fields 3.Submit |
| Acceptance Criteria | System should prevent submission without List Name |
| Expected Result | System should display validation message and prevent submission |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-list-name-validation, high, functional |

### CLM-TC-069 — Verify List Name does not accept blank-equivalent value

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - List Name Validation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | Spaces Only |
| Steps | 1.Enter only spaces in List Name field 2.Submit |
| Acceptance Criteria | System should reject space-only input |
| Expected Result | System should display validation message and prevent submission |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-list-name-validation, high, maker-checker |

### CLM-TC-070 — Verify duplicate List Name is not allowed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - List Name Validation |
| Priority | High |
| Preconditions | Existing custom list available |
| Test Data | Existing List Name |
| Steps | 1.Enter existing List Name 2.Submit |
| Acceptance Criteria | System should enforce uniqueness of custom list names |
| Expected Result | System should prevent creation of duplicate custom list |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-list-name-validation, high, functional |

### CLM-TC-071 — Verify unique List Name can be submitted

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - List Name Validation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | Unique List Name |
| Steps | 1.Enter unique List Name 2.Complete mandatory fields 3.Submit |
| Acceptance Criteria | System should allow creation using unique list names |
| Expected Result | Custom list request should be submitted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-list-name-validation, high, functional |

### CLM-TC-072 — Verify List Name accepts maximum supported length

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - List Name Validation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | 100 Character Value |
| Steps | 1.Enter List Name with maximum allowed characters |
| Acceptance Criteria | System should accept configured maximum length |
| Expected Result | List Name should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-list-name-validation, high, functional |

### CLM-TC-073 — Verify List Name exceeding maximum length is restricted

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - List Name Validation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | 101 Character Value |
| Steps | 1.Enter value exceeding maximum allowed length |
| Acceptance Criteria | System should enforce configured length limit |
| Expected Result | System should reject excess characters or display validation message |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-list-name-validation, high, functional |

### CLM-TC-074 — Verify List Name boundary validation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - List Name Validation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | Boundary Values |
| Steps | 1.Test minimum valid value 2.Test maximum valid value 3.Test value exceeding limit |
| Acceptance Criteria | System should consistently enforce length boundaries |
| Expected Result | System should accept valid boundary values and reject values beyond configured limit |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-list-name-validation, high, error-handling |

### CLM-TC-075 — Verify Purpose field is displayed as selectable dropdown

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Purpose Configuration |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | N/A |
| Steps | 1.Open Create Custom List form |
| Acceptance Criteria | System should provide Purpose selection control |
| Expected Result | Purpose field should be visible and displayed as dropdown |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-purpose-configuration, high, functional |

### CLM-TC-076 — Verify Purpose dropdown displays configured values

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Purpose Configuration |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | N/A |
| Steps | 1.Click Purpose dropdown |
| Acceptance Criteria | System should display configured Purpose options |
| Expected Result | Configured Purpose values should be displayed for selection |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-purpose-configuration, high, functional |

### CLM-TC-077 — Verify user can select a Purpose value

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Purpose Configuration |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | Configured Purpose Value |
| Steps | 1.Open Purpose dropdown 2.Select a value |
| Acceptance Criteria | System should allow Purpose selection |
| Expected Result | Selected Purpose value should be displayed successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-purpose-configuration, high, functional |

### CLM-TC-078 — Verify selected Purpose value is retained before form submission

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Purpose Configuration |
| Priority | Medium |
| Preconditions | User on Create Custom List form |
| Test Data | Configured Purpose Value |
| Steps | 1.Select Purpose value 2.Navigate through remaining fields |
| Acceptance Criteria | System should preserve selected value |
| Expected Result | Selected Purpose value should remain unchanged until modified by user |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-purpose-configuration, medium, functional |

### CLM-TC-079 — Verify Action On Hit field is displayed as configurable selection control

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Configuration |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | N/A |
| Steps | 1.Open Create Custom List form |
| Acceptance Criteria | System should provide Action On Hit configuration |
| Expected Result | Action On Hit field should be visible and accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-configuration, high, functional |

### CLM-TC-080 — Verify Action On Hit field displays configured values

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Configuration |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | N/A |
| Steps | 1.Open Action On Hit selection control |
| Acceptance Criteria | System should display configured Action On Hit options |
| Expected Result | Configured Action On Hit values should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-configuration, high, functional |

### CLM-TC-081 — Verify user can select an Action On Hit value

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Configuration |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | Configured Action On Hit Value |
| Steps | 1.Select an Action On Hit value |
| Acceptance Criteria | System should allow Action On Hit configuration |
| Expected Result | Selected Action On Hit value should be displayed successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-configuration, high, functional |

### CLM-TC-082 — Verify selected Action On Hit value is retained before submission

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Configuration |
| Priority | Medium |
| Preconditions | User on Create Custom List form |
| Test Data | Configured Action On Hit Value |
| Steps | 1.Select Action On Hit value 2.Complete remaining fields |
| Acceptance Criteria | System should preserve selected configuration |
| Expected Result | Selected Action On Hit value should remain unchanged until modified by user |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-configuration, medium, functional |

### CLM-TC-083 — Verify TTL field is displayed on Create List form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Configuration |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | N/A |
| Steps | 1.Open Create Custom List form |
| Acceptance Criteria | System should provide TTL configuration |
| Expected Result | TTL field should be visible and accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-configuration, high, ttl |

### CLM-TC-084 — Verify TTL field displays configured default value

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Configuration |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | N/A |
| Steps | 1.Open Create Custom List form |
| Acceptance Criteria | System should display default TTL configuration |
| Expected Result | TTL field should display the configured default value |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-configuration, high, ttl |

### CLM-TC-085 — Verify user can select a TTL value

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Configuration |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | Configured TTL Value |
| Steps | 1.Open TTL control 2.Select a TTL value |
| Acceptance Criteria | System should allow TTL configuration |
| Expected Result | Selected TTL value should be displayed successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-configuration, high, ttl |

### CLM-TC-086 — Verify selected TTL value is retained before submission

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Configuration |
| Priority | Medium |
| Preconditions | User on Create Custom List form |
| Test Data | Configured TTL Value |
| Steps | 1.Select TTL value 2.Complete remaining fields |
| Acceptance Criteria | System should preserve selected TTL configuration |
| Expected Result | Selected TTL value should remain unchanged until modified by user |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-configuration, medium, ttl |

### CLM-TC-087 — Verify Fuzzy Matching configuration control is displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Matching Configuration |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | N/A |
| Steps | 1.Open Create Custom List form |
| Acceptance Criteria | System should provide Fuzzy Matching configuration on Create List form |
| Expected Result | Fuzzy Matching configuration control should be visible and accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-matching-configuration, high, screening-matching |

### CLM-TC-088 — Verify user can enable or disable Fuzzy Matching configuration

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Matching Configuration |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | N/A |
| Steps | 1.Modify Fuzzy Matching configuration |
| Acceptance Criteria | System should allow modification of Fuzzy Matching setting |
| Expected Result | Fuzzy Matching setting should update successfully according to user selection |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-matching-configuration, high, screening-matching |

### CLM-TC-089 — Verify Multilingual Matching configuration control is displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Matching Configuration |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | N/A |
| Steps | 1.Open Create Custom List form |
| Acceptance Criteria | System should provide Multilingual Matching configuration on Create List form |
| Expected Result | Multilingual Matching configuration control should be visible and accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-matching-configuration, high, screening-matching |

### CLM-TC-090 — Verify user can enable or disable Multilingual Matching configuration

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Matching Configuration |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | N/A |
| Steps | 1.Modify Multilingual Matching configuration |
| Acceptance Criteria | System should allow modification of Multilingual Matching setting |
| Expected Result | Multilingual Matching setting should update successfully according to user selection |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-matching-configuration, high, screening-matching |

### CLM-TC-091 — Verify matching configuration values are retained while completing the form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Matching Configuration |
| Priority | Medium |
| Preconditions | User on Create Custom List form |
| Test Data | N/A |
| Steps | 1.Configure Fuzzy Matching and Multilingual Matching 2.Populate remaining fields |
| Acceptance Criteria | System should preserve selected matching settings |
| Expected Result | Configured matching settings should remain unchanged until modified by user |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-matching-configuration, medium, screening-matching |

### CLM-TC-092 — Verify matching configurations are included in list creation request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Matching Configuration |
| Priority | High |
| Preconditions | User on Create Custom List form with configured matching settings |
| Test Data | N/A |
| Steps | 1.Configure matching settings 2.Complete mandatory fields 3.Submit for Approval |
| Acceptance Criteria | System should preserve selected matching settings during submission |
| Expected Result | Submitted request should contain configured matching settings |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-matching-configuration, high, screening-matching |

### CLM-TC-093 — Verify Reason For Creation field accepts valid input

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Reason For Creation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | Required for enhanced fraud monitoring |
| Steps | 1.Enter valid reason text |
| Acceptance Criteria | System should allow entry of business justification |
| Expected Result | Reason For Creation value should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-reason-for-creation, high, functional |

### CLM-TC-094 — Verify Reason For Creation field is mandatory during submission

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Reason For Creation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | Blank Value |
| Steps | 1.Leave Reason For Creation blank 2.Populate remaining mandatory fields 3.Submit |
| Acceptance Criteria | System should prevent submission without business justification |
| Expected Result | System should display validation message and prevent submission |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-reason-for-creation, high, functional |

### CLM-TC-095 — Verify Reason For Creation does not accept blank-equivalent value

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Reason For Creation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | Spaces Only |
| Steps | 1.Enter spaces only in Reason For Creation field 2.Submit |
| Acceptance Criteria | System should reject space-only input |
| Expected Result | System should display validation message and prevent submission |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-reason-for-creation, high, maker-checker |

### CLM-TC-096 — Verify Reason For Creation accepts maximum supported length

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Reason For Creation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | Maximum Length Value |
| Steps | 1.Enter value with maximum allowed characters |
| Acceptance Criteria | System should accept configured maximum length |
| Expected Result | Reason For Creation should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-reason-for-creation, high, functional |

### CLM-TC-097 — Verify Reason For Creation exceeding maximum length is restricted

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Reason For Creation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | Exceeding Length Value |
| Steps | 1.Enter value exceeding maximum allowed length |
| Acceptance Criteria | System should enforce configured length limit |
| Expected Result | System should reject excess characters or display validation message |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-reason-for-creation, high, functional |

### CLM-TC-098 — Verify Reason For Creation boundary validation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Reason For Creation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | Boundary Values |
| Steps | 1.Test valid boundary value 2.Test maximum value 3.Test value exceeding limit |
| Acceptance Criteria | System should consistently enforce configured boundaries |
| Expected Result | System should accept valid boundary values and reject values beyond configured limit |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-reason-for-creation, high, error-handling |

### CLM-TC-099 — Verify user can save partially completed custom list as draft

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Draft Management |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | Partial List Data |
| Steps | 1.Enter partial list information 2.Click Save Draft |
| Acceptance Criteria | System should support draft creation |
| Expected Result | Draft should be saved successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-draft-management, high, functional |

### CLM-TC-100 — Verify draft record is available for future access

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Draft Management |
| Priority | High |
| Preconditions | Draft already saved |
| Test Data | Saved Draft |
| Steps | 1.Navigate back to module 2.Open saved draft |
| Acceptance Criteria | System should retain saved drafts |
| Expected Result | Saved draft should be available for further processing |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-draft-management, high, functional |

### CLM-TC-101 — Verify saved draft loads previously entered information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Draft Management |
| Priority | High |
| Preconditions | Saved draft available |
| Test Data | Saved Draft |
| Steps | 1.Open saved draft |
| Acceptance Criteria | System should preserve entered configuration values |
| Expected Result | Previously entered values should be displayed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-draft-management, high, functional |

### CLM-TC-102 — Verify all configured fields persist in draft

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Draft Management |
| Priority | High |
| Preconditions | Saved draft available |
| Test Data | Saved Draft |
| Steps | 1.Open saved draft 2.Verify configured fields |
| Acceptance Criteria | System should retain complete draft configuration |
| Expected Result | List Name, Purpose, Action On Hit, TTL, Matching Settings and Reason For Creation should be retained |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-draft-management, high, functional |

### CLM-TC-103 — Verify user can update existing draft

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Draft Management |
| Priority | High |
| Preconditions | Saved draft available |
| Test Data | Updated Draft Data |
| Steps | 1.Open draft 2.Modify values 3.Save Draft |
| Acceptance Criteria | System should allow modification of saved drafts |
| Expected Result | Draft should be updated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-draft-management, high, functional |

### CLM-TC-104 — Verify latest changes are retained after draft update

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Draft Management |
| Priority | High |
| Preconditions | Updated draft available |
| Test Data | Updated Draft |
| Steps | 1.Reopen updated draft |
| Acceptance Criteria | System should preserve updated values |
| Expected Result | Draft should display latest saved values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-draft-management, high, functional |

### CLM-TC-105 — Verify draft remains accessible after browser refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Draft Management |
| Priority | Medium |
| Preconditions | Saved draft available |
| Test Data | Saved Draft |
| Steps | 1.Open draft 2.Refresh page 3.Reopen draft |
| Acceptance Criteria | System should maintain saved draft integrity |
| Expected Result | Draft should remain available with saved information intact |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-draft-management, medium, browser-compat |

### CLM-TC-106 — Verify draft can be submitted for approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Draft Management |
| Priority | High |
| Preconditions | Saved draft available |
| Test Data | Saved Draft |
| Steps | 1.Open draft 2.Click Submit For Approval |
| Acceptance Criteria | System should support transition from Draft to approval workflow |
| Expected Result | Draft should be successfully submitted for approval |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-draft-management, high, maker-checker |

### CLM-TC-107 — Verify valid custom list can be submitted for approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | User on Create Custom List form with valid data |
| Test Data | Valid List Data |
| Steps | 1.Complete mandatory fields 2.Click Submit For Approval |
| Acceptance Criteria | System should accept valid list creation request |
| Expected Result | Custom list request should be submitted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, functional |

### CLM-TC-108 — Verify submission generates approval request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Valid submission completed |
| Test Data | Valid List Data |
| Steps | 1.Submit custom list request |
| Acceptance Criteria | System should create Maker-Checker request |
| Expected Result | Approval request should be generated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-109 — Verify submitted custom list enters Pending Approval status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Custom list submitted successfully |
| Test Data | Submitted List |
| Steps | 1.Submit custom list 2.Open request |
| Acceptance Criteria | System should place request into approval workflow |
| Expected Result | Request status should be displayed as Pending Approval |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, maker-checker |

### CLM-TC-110 — Verify submitted request is visible in approval queue

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Submitted request available |
| Test Data | Submitted List |
| Steps | 1.Navigate to approval queue |
| Acceptance Criteria | System should route request to Maker-Checker workflow |
| Expected Result | Request should be available for checker review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-111 — Verify submitted request retains all configured values

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Submitted request available |
| Test Data | Submitted List |
| Steps | 1.Open submitted request |
| Acceptance Criteria | System should preserve submitted data |
| Expected Result | Request should contain all values entered during list creation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, functional |

### CLM-TC-112 — Verify Pending Approval status is reflected on landing page

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Submitted request available |
| Test Data | Submitted List |
| Steps | 1.Return to landing page |
| Acceptance Criteria | System should display correct lifecycle state |
| Expected Result | Custom list should display Pending Approval status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, functional |

### CLM-TC-113 — Verify Pending Approval dashboard metric updates after submission

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Submitted request available |
| Test Data | Submitted List |
| Steps | 1.Note Pending Approval count 2.Submit request 3.Verify dashboard |
| Acceptance Criteria | System should update dashboard statistics |
| Expected Result | Pending Approval metric should reflect the newly submitted request |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, functional |

### CLM-TC-114 — Verify submitted request remains pending until checker action

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Request pending approval |
| Test Data | Submitted List |
| Steps | 1.Submit request 2.Verify status before approval/rejection |
| Acceptance Criteria | System should enforce Maker-Checker dependency |
| Expected Result | Request should remain in Pending Approval state until checker action is completed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-115 — Verify Edit action opens selected custom list in edit mode

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit List |
| Priority | High |
| Preconditions | Existing custom list available |
| Test Data | Sample List |
| Steps | 1.Navigate to Custom Lists 2.Select list 3.Click Edit |
| Acceptance Criteria | System should allow modification of existing custom lists |
| Expected Result | Edit List form should open successfully for the selected custom list |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-list, high, functional |

### CLM-TC-116 — Verify existing custom list values are pre-populated in Edit form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit List |
| Priority | High |
| Preconditions | Edit form opened |
| Test Data | Sample List |
| Steps | 1.Open Edit List form |
| Acceptance Criteria | System should load previously configured values |
| Expected Result | Previously configured values should be displayed in the form |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-list, high, functional |

### CLM-TC-117 — Verify editable fields can be modified

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit List |
| Priority | High |
| Preconditions | Edit form opened |
| Test Data | Updated List Data |
| Steps | 1.Modify one or more editable fields |
| Acceptance Criteria | System should allow updates to editable configurations |
| Expected Result | Modified values should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-list, high, functional |

### CLM-TC-118 — Verify edited values remain visible before submission

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit List |
| Priority | Medium |
| Preconditions | Edit form opened with modified values |
| Test Data | Updated List Data |
| Steps | 1.Modify fields 2.Navigate across form sections |
| Acceptance Criteria | System should preserve modified values during editing |
| Expected Result | Modified values should remain unchanged until user submits or cancels |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-list, medium, functional |

### CLM-TC-119 — Verify updated custom list can be submitted for approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit List |
| Priority | High |
| Preconditions | Edit form contains valid updates |
| Test Data | Updated List Data |
| Steps | 1.Modify fields 2.Click Submit For Approval |
| Acceptance Criteria | System should support modification approval workflow |
| Expected Result | Updated custom list request should be submitted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-list, high, maker-checker |

### CLM-TC-120 — Verify update request generates approval workflow entry

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit List |
| Priority | High |
| Preconditions | Update request submitted |
| Test Data | Updated List Data |
| Steps | 1.Submit modified custom list |
| Acceptance Criteria | System should create Maker-Checker request for modifications |
| Expected Result | Approval request should be generated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-list, high, rbac, security |

### CLM-TC-121 — Verify submitted update request enters Pending Approval state

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit List |
| Priority | High |
| Preconditions | Update request submitted |
| Test Data | Updated List Data |
| Steps | 1.Open submitted update request |
| Acceptance Criteria | System should enforce approval workflow for modifications |
| Expected Result | Update request should display Pending Approval status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-list, high, maker-checker |

### CLM-TC-122 — Verify submitted update request retains modified values

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit List |
| Priority | High |
| Preconditions | Update request submitted |
| Test Data | Updated List Data |
| Steps | 1.Open submitted request |
| Acceptance Criteria | System should preserve updated information during approval process |
| Expected Result | Request should display all modified values accurately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-list, high, functional |

### CLM-TC-123 — Verify Disable action can be initiated for active custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable |
| Priority | High |
| Preconditions | Active custom list available |
| Test Data | Active List |
| Steps | 1.Select active custom list 2.Click Disable |
| Acceptance Criteria | System should allow lifecycle management requests |
| Expected Result | Disable request workflow should be initiated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable, high, functional |

### CLM-TC-124 — Verify Enable action can be initiated for disabled custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable |
| Priority | High |
| Preconditions | Disabled custom list available |
| Test Data | Disabled List |
| Steps | 1.Select disabled custom list 2.Click Enable |
| Acceptance Criteria | System should allow lifecycle reactivation requests |
| Expected Result | Enable request workflow should be initiated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable, high, functional |

### CLM-TC-125 — Verify Enable/Disable operation generates approval request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable |
| Priority | High |
| Preconditions | Request initiated |
| Test Data | Request Data |
| Steps | 1.Submit Enable/Disable request |
| Acceptance Criteria | System should create Maker-Checker request |
| Expected Result | Approval request should be generated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable, high, rbac, security |

### CLM-TC-126 — Verify Enable/Disable request enters Pending Approval state

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable |
| Priority | High |
| Preconditions | Request submitted |
| Test Data | Request Data |
| Steps | 1.Open submitted request |
| Acceptance Criteria | System should route request through approval workflow |
| Expected Result | Request should display Pending Approval status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable, high, maker-checker |

### CLM-TC-127 — Verify list status does not change before approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable |
| Priority | High |
| Preconditions | Request pending approval |
| Test Data | Request Data |
| Steps | 1.Submit Enable/Disable request 2.Verify current list status |
| Acceptance Criteria | System should enforce approval dependency |
| Expected Result | List status should remain unchanged until checker action is completed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable, high, functional |

### CLM-TC-128 — Verify approved Disable request updates list status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable |
| Priority | High |
| Preconditions | Disable request approved |
| Test Data | Approved Disable Request |
| Steps | 1.Approve Disable request 2.Open custom list |
| Acceptance Criteria | System should update lifecycle state after approval |
| Expected Result | List status should change from Active to Disabled |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable, high, maker-checker |

### CLM-TC-129 — Verify approved Enable request updates list status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable |
| Priority | High |
| Preconditions | Enable request approved |
| Test Data | Approved Enable Request |
| Steps | 1.Approve Enable request 2.Open custom list |
| Acceptance Criteria | System should update lifecycle state after approval |
| Expected Result | List status should change from Disabled to Active |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable, high, maker-checker |

### CLM-TC-130 — Verify landing page reflects updated status after approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable |
| Priority | High |
| Preconditions | Approved request completed |
| Test Data | Approved Request |
| Steps | 1.Open Custom Lists landing page |
| Acceptance Criteria | System should display latest approved lifecycle state |
| Expected Result | Landing page should display the updated list status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable, high, maker-checker |

### CLM-TC-131 — Verify Maker information is captured during custom list creation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Metadata Integrity |
| Priority | High |
| Preconditions | Custom list created or submitted |
| Test Data | Sample List |
| Steps | 1.Create custom list 2.Open list details |
| Acceptance Criteria | System should maintain creator traceability |
| Expected Result | Maker information should be recorded and displayed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-metadata-integrity, high, rbac, security |

### CLM-TC-132 — Verify Checker information is captured after approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Metadata Integrity |
| Priority | High |
| Preconditions | Custom list approved |
| Test Data | Approved List |
| Steps | 1.Approve custom list request 2.Open list details |
| Acceptance Criteria | System should maintain approver traceability |
| Expected Result | Checker information should be recorded and displayed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-metadata-integrity, high, rbac, security |

### CLM-TC-133 — Verify Date Created is captured for custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Metadata Integrity |
| Priority | High |
| Preconditions | Custom list available |
| Test Data | Sample List |
| Steps | 1.Open list details |
| Acceptance Criteria | System should record creation timestamp |
| Expected Result | Date Created should be populated correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-metadata-integrity, high, functional |

### CLM-TC-134 — Verify Date Last Modified is updated after approved changes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Metadata Integrity |
| Priority | High |
| Preconditions | Custom list modified and approved |
| Test Data | Modified List |
| Steps | 1.Modify list 2.Approve update 3.Open details |
| Acceptance Criteria | System should maintain modification history |
| Expected Result | Date Last Modified should reflect latest approved change |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-metadata-integrity, high, maker-checker |

### CLM-TC-135 — Verify Total Records statistic reflects actual entity count

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Metadata Integrity |
| Priority | High |
| Preconditions | Custom list contains entities |
| Test Data | Entity Data |
| Steps | 1.Open list details 2.Verify entity count |
| Acceptance Criteria | System should maintain accurate list statistics |
| Expected Result | Total Records value should match actual entity count |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-metadata-integrity, high, functional |

### CLM-TC-136 — Verify Active Records statistic reflects active entities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Metadata Integrity |
| Priority | High |
| Preconditions | Custom list contains active/inactive entities |
| Test Data | Entity Data |
| Steps | 1.Verify active entity count |
| Acceptance Criteria | System should maintain accurate active entity statistics |
| Expected Result | Active Records value should match actual active entity count |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-metadata-integrity, high, functional |

### CLM-TC-137 — Verify metadata values remain consistent across screens

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Metadata Integrity |
| Priority | Medium |
| Preconditions | Custom list available |
| Test Data | Sample List |
| Steps | 1.Verify metadata on landing page 2.Open list details |
| Acceptance Criteria | System should display consistent information across module |
| Expected Result | Metadata values should remain consistent across all screens |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-metadata-integrity, medium, functional |

### CLM-TC-138 — Verify metadata provides complete audit traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Metadata Integrity |
| Priority | High |
| Preconditions | Approved custom list available |
| Test Data | Approved List |
| Steps | 1.Open custom list details |
| Acceptance Criteria | System should preserve maker, checker, date and statistics information |
| Expected Result | Complete metadata information should be available for audit and compliance review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-metadata-integrity, high, rbac, security |

### CLM-TC-139 — Verify Add Entity action is available within approved custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | High |
| Preconditions | Approved custom list exists |
| Test Data | N/A |
| Steps | 1.Navigate to Custom Lists 2.Open approved custom list 3.Verify Add Entity action |
| Acceptance Criteria | System shall allow entity onboarding only through configured custom list workflow |
| Expected Result | Add Entity action should be visible and enabled within the selected custom list |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, high, maker-checker |

### CLM-TC-140 — Verify Add Entity form opens successfully

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | High |
| Preconditions | Approved custom list available |
| Test Data | N/A |
| Steps | 1.Open approved custom list 2.Click Add Entity |
| Acceptance Criteria | System shall display entity onboarding form without errors |
| Expected Result | Add Entity form should open successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, high, error-handling |

### CLM-TC-141 — Verify all configured onboarding sections are displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | N/A |
| Steps | 1.Open Add Entity form 2.Review all sections |
| Acceptance Criteria | System shall display all configured entity onboarding sections |
| Expected Result | All configured onboarding sections should be displayed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, high, functional |

### CLM-TC-142 — Verify all mandatory fields are identified

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | N/A |
| Steps | 1.Review field labels and indicators |
| Acceptance Criteria | System shall visually indicate mandatory fields |
| Expected Result | All mandatory fields should display configured mandatory indicators |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, high, functional |

### CLM-TC-143 — Verify entity onboarding form layout remains intact

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | N/A |
| Steps | 1.Open Add Entity form 2.Scroll through entire form |
| Acceptance Criteria | System shall render all controls without UI issues |
| Expected Result | All fields, sections and controls should be displayed correctly without overlap or truncation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, medium, functional |

### CLM-TC-144 — Verify Save Draft action is available on Add Entity form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | N/A |
| Steps | 1.Open Add Entity form |
| Acceptance Criteria | System shall allow entity draft creation |
| Expected Result | Save Draft button should be visible and enabled |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, high, functional |

### CLM-TC-145 — Verify Submit For Approval action is available on Add Entity form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | N/A |
| Steps | 1.Open Add Entity form |
| Acceptance Criteria | System shall allow entity submission workflow |
| Expected Result | Submit For Approval button should be visible and enabled |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, high, maker-checker |

### CLM-TC-146 — Verify Cancel action is available on Add Entity form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | N/A |
| Steps | 1.Open Add Entity form |
| Acceptance Criteria | System shall allow user to exit onboarding workflow |
| Expected Result | Cancel button should be visible and enabled |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, medium, maker-checker |

### CLM-TC-147 — Verify Cancel action redirects user back to entity listing

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | N/A |
| Steps | 1.Click Cancel |
| Acceptance Criteria | System shall return user to previous screen |
| Expected Result | User should be redirected back to entity listing page without saving changes |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, medium, functional |

### CLM-TC-148 — Verify Add Entity form remains accessible after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | N/A |
| Steps | 1.Open Add Entity form 2.Refresh browser |
| Acceptance Criteria | System shall reload onboarding form correctly |
| Expected Result | Entity onboarding form should reload successfully with all configured sections displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, medium, functional |

### CLM-TC-149 — Verify entity can be submitted when minimum screening criteria is satisfied

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | Valid Screening Eligible Entity |
| Steps | 1.Enter minimum required screening information 2.Submit entity |
| Acceptance Criteria | System shall allow onboarding of screening-eligible entities |
| Expected Result | Entity should be submitted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, high, screening-matching |

### CLM-TC-150 — Verify entity submission is blocked when minimum screening criteria is not satisfied

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | Incomplete Entity Data |
| Steps | 1.Enter insufficient entity information 2.Submit entity |
| Acceptance Criteria | System shall prevent onboarding of screening-ineligible entities |
| Expected Result | System should prevent submission and display validation message |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, high, screening-matching |

### CLM-TC-151 — Verify validation message is displayed for screening-ineligible entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | Incomplete Entity Data |
| Steps | 1.Enter insufficient screening data 2.Submit entity |
| Acceptance Criteria | System shall provide clear validation feedback |
| Expected Result | Appropriate validation message should be displayed explaining minimum screening requirements |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, high, screening-matching |

### CLM-TC-152 — Verify screening eligibility validation occurs before request generation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | Incomplete Entity Data |
| Steps | 1.Enter invalid entity data 2.Submit entity |
| Acceptance Criteria | System shall validate eligibility before creating approval request |
| Expected Result | Approval request should not be generated for screening-ineligible entity |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, high, screening-matching |

### CLM-TC-153 — Verify screening-eligible entity generates onboarding request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | Valid Screening Eligible Entity |
| Steps | 1.Enter eligible entity data 2.Submit entity |
| Acceptance Criteria | System shall create request only for eligible entities |
| Expected Result | Entity onboarding request should be generated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, high, screening-matching |

### CLM-TC-154 — Verify eligible entity enters Pending Approval workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | High |
| Preconditions | Eligible entity submitted |
| Test Data | Valid Screening Eligible Entity |
| Steps | 1.Submit eligible entity 2.Open request |
| Acceptance Criteria | System shall route eligible entities through Maker-Checker process |
| Expected Result | Entity request should enter Pending Approval status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, high, rbac, security |

### CLM-TC-155 — Verify screening eligibility validation is consistently enforced

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | Various Incomplete Entity Data Sets |
| Steps | 1.Perform multiple submissions using different incomplete data combinations |
| Acceptance Criteria | System shall apply identical eligibility validation across submissions |
| Expected Result | System should consistently reject all screening-ineligible entities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, high, screening-matching |

### CLM-TC-156 — Verify Save Draft allows incomplete entity information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | Partial Entity Data |
| Steps | 1.Enter partial information 2.Click Save Draft |
| Acceptance Criteria | System shall allow draft creation before screening eligibility is achieved |
| Expected Result | Draft should be saved successfully without screening eligibility validation failure |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, medium, screening-matching |

### CLM-TC-157 — Verify edited draft can be submitted after eligibility requirements are satisfied

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | High |
| Preconditions | Draft entity exists |
| Test Data | Updated Eligible Entity Data |
| Steps | 1.Open draft 2.Complete required screening information 3.Submit |
| Acceptance Criteria | System shall permit submission after missing information is completed |
| Expected Result | Entity should be submitted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, high, functional |

### CLM-TC-158 — Verify approved entity is available for downstream screening

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | High |
| Preconditions | Approved entity exists |
| Test Data | Approved Entity |
| Steps | 1.Approve entity onboarding request 2.Open entity details |
| Acceptance Criteria | System shall create screening-ready entity after onboarding workflow completion |
| Expected Result | Entity should be available for subsequent AML screening operations |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, high, screening-matching |

### CLM-TC-159 — Verify identity information section is displayed on Add Entity form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | N/A |
| Steps | 1.Open Add Entity form |
| Acceptance Criteria | System shall provide identity data capture section |
| Expected Result | Identity Information section should be displayed successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, high, functional |

### CLM-TC-160 — Verify First Name field accepts valid input

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | John |
| Steps | 1.Enter valid First Name |
| Acceptance Criteria | System shall allow entry of valid first name |
| Expected Result | First Name should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, high, functional |

### CLM-TC-161 — Verify Last Name field accepts valid input

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | Smith |
| Steps | 1.Enter valid Last Name |
| Acceptance Criteria | System shall allow entry of valid last name |
| Expected Result | Last Name should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, high, functional |

### CLM-TC-162 — Verify Full Name is captured correctly for screening purposes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | John Smith |
| Steps | 1.Enter available name information |
| Acceptance Criteria | System shall retain complete identity information |
| Expected Result | Complete name information should be stored successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, high, screening-matching |

### CLM-TC-163 — Verify Alias information can be captured

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | J. Smith |
| Steps | 1.Enter alias value |
| Acceptance Criteria | System shall support alternate identity names |
| Expected Result | Alias information should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, medium, screening-matching |

### CLM-TC-164 — Verify multiple aliases can be captured when supported

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | Alias Set |
| Steps | 1.Enter multiple aliases if supported |
| Acceptance Criteria | System shall support storage of multiple alternate names |
| Expected Result | All configured alias values should be stored successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, medium, screening-matching |

### CLM-TC-165 — Verify identity fields accept maximum supported length

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | Maximum Length Values |
| Steps | 1.Enter maximum supported values |
| Acceptance Criteria | System shall enforce configured field limits |
| Expected Result | Values within configured limits should be accepted |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, medium, functional |

### CLM-TC-166 — Verify identity fields reject values exceeding configured limits

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | Exceeding Length Values |
| Steps | 1.Enter values exceeding supported length |
| Acceptance Criteria | System shall enforce configured length restrictions |
| Expected Result | System should reject excess input or display validation message |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, medium, maker-checker |

### CLM-TC-167 — Verify identity information remains intact while completing onboarding form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | Valid Identity Data |
| Steps | 1.Enter identity information 2.Navigate through remaining sections |
| Acceptance Criteria | System shall preserve entered identity data |
| Expected Result | Identity information should remain unchanged |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, medium, functional |

### CLM-TC-168 — Verify identity information is retained in draft entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | High |
| Preconditions | Draft entity available |
| Test Data | Valid Identity Data |
| Steps | 1.Save draft 2.Reopen draft |
| Acceptance Criteria | System shall preserve identity data in draft workflow |
| Expected Result | Previously entered identity information should be retained |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, high, maker-checker |

### CLM-TC-169 — Verify identity information is retained in submitted onboarding request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | High |
| Preconditions | Submitted entity request exists |
| Test Data | Valid Identity Data |
| Steps | 1.Open submitted request |
| Acceptance Criteria | System shall preserve identity data during approval workflow |
| Expected Result | Request should display entered identity information accurately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, high, maker-checker |

### CLM-TC-170 — Verify approved entity displays correct identity information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | High |
| Preconditions | Approved entity available |
| Test Data | Approved Entity |
| Steps | 1.Open approved entity details |
| Acceptance Criteria | System shall preserve identity integrity throughout onboarding lifecycle |
| Expected Result | Entity details should display accurate identity information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, high, maker-checker |

### CLM-TC-171 — Verify Identifier Information section is displayed on Add Entity form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | N/A |
| Steps | 1.Open Add Entity form 2.Navigate to Identifier Information section |
| Acceptance Criteria | System shall provide identifier capture section required for entity screening |
| Expected Result | Identifier Information section should be displayed with all configured fields |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, high, screening-matching |

### CLM-TC-172 — Verify user can capture government issued identifier information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | Configured Identifier Value |
| Steps | 1.Enter valid identifier information |
| Acceptance Criteria | System shall allow entry of configured identifier values |
| Expected Result | Identifier information should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, high, functional |

### CLM-TC-173 — Verify identifier fields accept alphanumeric values where supported

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | AB12345678 |
| Steps | 1.Enter valid alphanumeric identifier |
| Acceptance Criteria | System shall accept configured identifier formats |
| Expected Result | Identifier value should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, high, functional |

### CLM-TC-174 — Verify identifier fields enforce configured maximum length

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | Maximum Length Identifier |
| Steps | 1.Enter maximum supported identifier value |
| Acceptance Criteria | System shall validate configured identifier length restrictions |
| Expected Result | Identifier value within configured limit should be accepted |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, medium, functional |

### CLM-TC-175 — Verify identifier fields reject values exceeding configured limits

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | Exceeding Length Identifier |
| Steps | 1.Enter identifier value exceeding configured limit |
| Acceptance Criteria | System shall prevent invalid identifier lengths |
| Expected Result | System should reject excess characters or display validation message |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, medium, maker-checker |

### CLM-TC-176 — Verify multiple identifier values can be captured for the same entity when supported

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | Passport + National ID |
| Steps | 1.Enter multiple identifier values |
| Acceptance Criteria | System shall support onboarding of all configured identifiers |
| Expected Result | All configured identifier values should be retained successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, high, functional |

### CLM-TC-177 — Verify identifier information remains intact while completing onboarding workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | Valid Identifier Data |
| Steps | 1.Enter identifier data 2.Complete remaining onboarding sections |
| Acceptance Criteria | System shall preserve entered identifier values |
| Expected Result | Entered identifier information should remain unchanged |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, medium, maker-checker |

### CLM-TC-178 — Verify identifier information is retained in draft entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | High |
| Preconditions | Draft entity available |
| Test Data | Valid Identifier Data |
| Steps | 1.Save draft 2.Reopen draft |
| Acceptance Criteria | System shall preserve identifier data in draft workflow |
| Expected Result | Previously entered identifier information should be retained |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, high, maker-checker |

### CLM-TC-179 — Verify identifier information is retained in submitted onboarding request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | High |
| Preconditions | Entity request submitted |
| Test Data | Valid Identifier Data |
| Steps | 1.Open submitted request |
| Acceptance Criteria | System shall preserve identifier data during approval workflow |
| Expected Result | Submitted request should display accurate identifier information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, high, maker-checker |

### CLM-TC-180 — Verify approved entity retains identifier information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | High |
| Preconditions | Approved entity available |
| Test Data | Approved Entity |
| Steps | 1.Open approved entity details |
| Acceptance Criteria | System shall maintain identifier integrity after approval |
| Expected Result | Approved entity should display correct identifier information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, high, maker-checker |

### CLM-TC-181 — Verify Digital Identifiers section is displayed on Add Entity form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | N/A |
| Steps | 1.Open Add Entity form 2.Navigate to Digital Identifiers section |
| Acceptance Criteria | System shall provide digital identifier onboarding section |
| Expected Result | Digital Identifiers section should be displayed successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, high, screening-matching |

### CLM-TC-182 — Verify email identifier can be captured

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | test@example.com |
| Steps | 1.Enter email value |
| Acceptance Criteria | System shall allow onboarding of email identifiers |
| Expected Result | Email identifier should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, high, functional |

### CLM-TC-183 — Verify mobile identifier can be captured

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | 9876543210 |
| Steps | 1.Enter mobile number |
| Acceptance Criteria | System shall allow onboarding of mobile identifiers |
| Expected Result | Mobile identifier should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, high, functional |

### CLM-TC-184 — Verify IP Address identifier can be captured

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | 192.168.1.1 |
| Steps | 1.Enter IP Address |
| Acceptance Criteria | System shall allow onboarding of IP identifiers |
| Expected Result | IP Address should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, medium, functional |

### CLM-TC-185 — Verify Device Identifier can be captured

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | DEVICE-12345 |
| Steps | 1.Enter Device ID |
| Acceptance Criteria | System shall allow onboarding of device-based identifiers |
| Expected Result | Device Identifier should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, medium, functional |

### CLM-TC-186 — Verify multiple digital identifiers can be captured for a single entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | Combined Digital Identifier Data |
| Steps | 1.Enter Email, Mobile, IP and Device information |
| Acceptance Criteria | System shall support onboarding of all configured digital identifiers |
| Expected Result | All configured digital identifiers should be stored successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, high, screening-matching |

### CLM-TC-187 — Verify digital identifiers remain intact while completing onboarding workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | Valid Digital Identifier Data |
| Steps | 1.Enter digital identifiers 2.Complete remaining sections |
| Acceptance Criteria | System shall preserve entered digital identifier values |
| Expected Result | Entered digital identifiers should remain unchanged |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, medium, screening-matching |

### CLM-TC-188 — Verify digital identifiers are retained in draft entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | High |
| Preconditions | Draft entity available |
| Test Data | Valid Digital Identifier Data |
| Steps | 1.Save draft 2.Reopen draft |
| Acceptance Criteria | System shall preserve digital identifier data in draft workflow |
| Expected Result | Previously entered digital identifiers should be retained |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, high, screening-matching |

### CLM-TC-189 — Verify digital identifiers are retained in submitted onboarding request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | High |
| Preconditions | Entity request submitted |
| Test Data | Valid Digital Identifier Data |
| Steps | 1.Open submitted request |
| Acceptance Criteria | System shall preserve digital identifiers during approval workflow |
| Expected Result | Submitted request should display accurate digital identifier information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, high, screening-matching |

### CLM-TC-190 — Verify approved entity retains digital identifiers for downstream screening

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | High |
| Preconditions | Approved entity available |
| Test Data | Approved Entity |
| Steps | 1.Open approved entity details |
| Acceptance Criteria | System shall maintain digital identifier integrity after approval |
| Expected Result | Approved entity should display correct digital identifier information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, high, screening-matching |

### CLM-TC-191 — Verify Localization section is displayed on Add Entity form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | N/A |
| Steps | 1.Open Add Entity form 2.Navigate to Localization section |
| Acceptance Criteria | System shall provide localization and geographic information capture section |
| Expected Result | Localization section should be displayed successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, high, functional |

### CLM-TC-192 — Verify country information can be captured

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | India |
| Steps | 1.Enter/select country value |
| Acceptance Criteria | System shall allow onboarding of country information |
| Expected Result | Country information should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, high, functional |

### CLM-TC-193 — Verify nationality information can be captured

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | Indian |
| Steps | 1.Enter/select nationality value |
| Acceptance Criteria | System shall allow onboarding of nationality information |
| Expected Result | Nationality information should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, high, functional |

### CLM-TC-194 — Verify address information can be captured

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | Sample Address |
| Steps | 1.Enter address details |
| Acceptance Criteria | System shall allow onboarding of address information |
| Expected Result | Address information should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, high, functional |

### CLM-TC-195 — Verify multilingual/localized values can be captured where supported

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | Local Language Data |
| Steps | 1.Enter localized values where applicable |
| Acceptance Criteria | System shall support configured localization requirements |
| Expected Result | Localized information should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, medium, screening-matching |

### CLM-TC-196 — Verify localization information remains intact while completing onboarding workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | Valid Localization Data |
| Steps | 1.Enter localization information 2.Complete remaining onboarding sections |
| Acceptance Criteria | System shall preserve localization values |
| Expected Result | Entered localization information should remain unchanged |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, medium, maker-checker |

### CLM-TC-197 — Verify localization information is retained in draft entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | High |
| Preconditions | Draft entity available |
| Test Data | Valid Localization Data |
| Steps | 1.Save draft 2.Reopen draft |
| Acceptance Criteria | System shall preserve localization data in draft workflow |
| Expected Result | Previously entered localization information should be retained |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, high, maker-checker |

### CLM-TC-198 — Verify localization information is retained in submitted onboarding request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | High |
| Preconditions | Entity request submitted |
| Test Data | Valid Localization Data |
| Steps | 1.Open submitted request |
| Acceptance Criteria | System shall preserve localization data during approval workflow |
| Expected Result | Submitted request should display accurate localization information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, high, maker-checker |

### CLM-TC-199 — Verify approved entity retains localization information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | High |
| Preconditions | Approved entity available |
| Test Data | Approved Entity |
| Steps | 1.Open approved entity details |
| Acceptance Criteria | System shall maintain localization integrity after approval |
| Expected Result | Approved entity should display correct localization information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, high, maker-checker |

### CLM-TC-200 — Verify localization data remains available for screening and investigation workflows

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | High |
| Preconditions | Approved entity available |
| Test Data | Approved Entity |
| Steps | 1.Open approved entity details 2.Verify localization section |
| Acceptance Criteria | System shall retain geographic information for downstream AML processing |
| Expected Result | Localization information should remain available and complete for screening operations |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, high, screening-matching |

### CLM-TC-201 — Verify Risk & Governance section is displayed on Add Entity form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Risk & Governance |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | N/A |
| Steps | 1.Open Add Entity form 2.Navigate to Risk & Governance section |
| Acceptance Criteria | System shall provide risk management and governance configuration section |
| Expected Result | Risk & Governance section should be displayed successfully with all configured controls |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-risk-governance, high, functional |

### CLM-TC-202 — Verify user can configure available risk classification values

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Risk & Governance |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | Configured Risk Value |
| Steps | 1.Select available risk value |
| Acceptance Criteria | System shall allow selection of configured risk values |
| Expected Result | Selected risk value should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-risk-governance, high, functional |

### CLM-TC-203 — Verify risk configuration remains intact while completing onboarding workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Risk & Governance |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | Valid Risk Configuration |
| Steps | 1.Configure risk settings 2.Complete remaining sections |
| Acceptance Criteria | System shall preserve configured risk information |
| Expected Result | Configured risk values should remain unchanged until modified by user |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-risk-governance, medium, maker-checker |

### CLM-TC-204 — Verify governance-related information can be captured during onboarding

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Risk & Governance |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | Valid Governance Data |
| Steps | 1.Enter governance-related information if applicable |
| Acceptance Criteria | System shall allow entry of configured governance information |
| Expected Result | Governance information should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-risk-governance, medium, functional |

### CLM-TC-205 — Verify risk and governance information is retained in draft entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Risk & Governance |
| Priority | High |
| Preconditions | Draft entity available |
| Test Data | Valid Risk & Governance Data |
| Steps | 1.Save draft 2.Reopen draft |
| Acceptance Criteria | System shall preserve risk and governance data in draft workflow |
| Expected Result | Previously entered risk and governance information should be retained |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-risk-governance, high, maker-checker |

### CLM-TC-206 — Verify risk and governance information is retained in submitted onboarding request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Risk & Governance |
| Priority | High |
| Preconditions | Entity request submitted |
| Test Data | Valid Risk & Governance Data |
| Steps | 1.Open submitted request |
| Acceptance Criteria | System shall preserve onboarding data during approval workflow |
| Expected Result | Submitted request should display accurate risk and governance information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-risk-governance, high, maker-checker |

### CLM-TC-207 — Verify approved entity retains risk and governance information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Risk & Governance |
| Priority | High |
| Preconditions | Approved entity available |
| Test Data | Approved Entity |
| Steps | 1.Open approved entity details |
| Acceptance Criteria | System shall maintain risk data integrity after approval |
| Expected Result | Approved entity should display correct risk and governance information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-risk-governance, high, maker-checker |

### CLM-TC-208 — Verify risk and governance information remains available for downstream screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Risk & Governance |
| Priority | High |
| Preconditions | Approved entity available |
| Test Data | Approved Entity |
| Steps | 1.Open approved entity details 2.Verify risk section |
| Acceptance Criteria | System shall preserve risk context for AML investigation and screening workflows |
| Expected Result | Risk and governance information should remain available and complete for AML operations |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-risk-governance, high, screening-matching |

### CLM-TC-209 — Verify Real-Time Alert Configuration section is displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Real-Time Alert Configuration |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | N/A |
| Steps | 1.Open Add Entity form 2.Navigate to Alert Configuration section |
| Acceptance Criteria | System shall provide alert configuration options during onboarding |
| Expected Result | Alert Configuration section should be displayed successfully |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | custom-list-manager-real-time-alert-configuration, high, alerts |

### CLM-TC-210 — Verify available alert configuration options can be selected

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Real-Time Alert Configuration |
| Priority | High |
| Preconditions | User on Add Entity form |
| Test Data | Configured Alert Option |
| Steps | 1.Configure alert settings |
| Acceptance Criteria | System shall allow configuration of available alert settings |
| Expected Result | Selected alert configuration should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | custom-list-manager-real-time-alert-configuration, high, alerts |

### CLM-TC-211 — Verify alert configuration remains intact while completing onboarding workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Real-Time Alert Configuration |
| Priority | Medium |
| Preconditions | User on Add Entity form |
| Test Data | Valid Alert Configuration |
| Steps | 1.Configure alert settings 2.Complete remaining onboarding sections |
| Acceptance Criteria | System shall preserve selected alert settings |
| Expected Result | Configured alert settings should remain unchanged |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | custom-list-manager-real-time-alert-configuration, medium, maker-checker |

### CLM-TC-212 — Verify alert configuration is retained in draft entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Real-Time Alert Configuration |
| Priority | High |
| Preconditions | Draft entity available |
| Test Data | Valid Alert Configuration |
| Steps | 1.Save draft 2.Reopen draft |
| Acceptance Criteria | System shall preserve alert settings in draft workflow |
| Expected Result | Previously configured alert settings should be retained |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | custom-list-manager-real-time-alert-configuration, high, maker-checker |

### CLM-TC-213 — Verify alert configuration is retained in submitted onboarding request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Real-Time Alert Configuration |
| Priority | High |
| Preconditions | Entity request submitted |
| Test Data | Valid Alert Configuration |
| Steps | 1.Open submitted request |
| Acceptance Criteria | System shall preserve alert settings during approval workflow |
| Expected Result | Submitted request should display accurate alert configuration |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | custom-list-manager-real-time-alert-configuration, high, maker-checker |

### CLM-TC-214 — Verify approved entity retains configured alert settings

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Real-Time Alert Configuration |
| Priority | High |
| Preconditions | Approved entity available |
| Test Data | Approved Entity |
| Steps | 1.Open approved entity details |
| Acceptance Criteria | System shall maintain alert configuration integrity after approval |
| Expected Result | Approved entity should display configured alert settings |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | custom-list-manager-real-time-alert-configuration, high, maker-checker |

### CLM-TC-215 — Verify alert configuration remains associated with the correct entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Real-Time Alert Configuration |
| Priority | Medium |
| Preconditions | Entity available |
| Test Data | Entity Set |
| Steps | 1.Open multiple entities 2.Verify alert settings |
| Acceptance Criteria | System shall maintain entity-alert relationship |
| Expected Result | Alert configuration should remain linked to the correct entity only |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | custom-list-manager-real-time-alert-configuration, medium, alerts |

### CLM-TC-216 — Verify alert configuration is available for downstream monitoring workflows

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Real-Time Alert Configuration |
| Priority | High |
| Preconditions | Approved entity available |
| Test Data | Approved Entity |
| Steps | 1.Open entity details 2.Verify alert configuration |
| Acceptance Criteria | System shall preserve alert settings for future monitoring operations |
| Expected Result | Configured alert settings should remain available for downstream AML monitoring activities |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | custom-list-manager-real-time-alert-configuration, high, maker-checker |

### CLM-TC-217 — Verify screening-eligible entity can be submitted for approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Entity data completed and screening eligible |
| Test Data | Valid Entity Data |
| Steps | 1.Complete onboarding form 2.Click Submit For Approval |
| Acceptance Criteria | System shall allow onboarding request creation for eligible entities |
| Expected Result | Entity onboarding request should be submitted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, screening-matching |

### CLM-TC-218 — Verify entity submission generates Maker-Checker request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Eligible entity submitted |
| Test Data | Valid Entity Data |
| Steps | 1.Submit entity onboarding request |
| Acceptance Criteria | System shall create approval request for entity onboarding |
| Expected Result | Approval request should be generated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, rbac, security |

### CLM-TC-219 — Verify submitted entity enters Pending Approval state

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Entity request submitted |
| Test Data | Submitted Entity |
| Steps | 1.Open submitted request |
| Acceptance Criteria | System shall enforce approval workflow for onboarding requests |
| Expected Result | Request should display Pending Approval status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, maker-checker |

### CLM-TC-220 — Verify submitted entity request is visible in approval queue

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Entity request submitted |
| Test Data | Submitted Entity |
| Steps | 1.Navigate to Maker-Checker queue |
| Acceptance Criteria | System shall route request to checker workflow |
| Expected Result | Entity request should be visible in approval queue |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, rbac, security |

### CLM-TC-221 — Verify submitted request retains complete onboarding information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Entity request submitted |
| Test Data | Submitted Entity |
| Steps | 1.Open submitted request |
| Acceptance Criteria | System shall preserve all onboarding data during approval workflow |
| Expected Result | Request should display complete onboarding information entered during entity creation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, maker-checker |

### CLM-TC-222 — Verify entity request remains pending until checker action

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Entity request pending approval |
| Test Data | Submitted Entity |
| Steps | 1.Submit request 2.Verify status before approval |
| Acceptance Criteria | System shall enforce Maker-Checker dependency |
| Expected Result | Request should remain in Pending Approval state until checker action occurs |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, rbac, security |

### CLM-TC-223 — Verify approved entity becomes available within associated custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Entity request approved |
| Test Data | Approved Entity |
| Steps | 1.Approve entity request 2.Open associated custom list |
| Acceptance Criteria | System shall onboard entity after successful approval |
| Expected Result | Entity should become available within the associated custom list |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, maker-checker |

### CLM-TC-224 — Verify approved entity retains all onboarding information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Entity approved |
| Test Data | Approved Entity |
| Steps | 1.Open approved entity details |
| Acceptance Criteria | System shall maintain data integrity after approval |
| Expected Result | Approved entity should display all onboarding information accurately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, maker-checker |

### CLM-TC-225 — Verify approved entity contributes to custom list statistics

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Entity approved |
| Test Data | Approved Entity |
| Steps | 1.Note entity count 2.Approve entity 3.Verify statistics |
| Acceptance Criteria | System shall update list-level entity counts |
| Expected Result | Entity statistics should be updated accordingly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, maker-checker |

### CLM-TC-226 — Verify approved entity becomes available for AML screening operations

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Entity approved |
| Test Data | Approved Entity |
| Steps | 1.Open approved entity details 2.Verify onboarding completion |
| Acceptance Criteria | System shall create screening-ready entity after onboarding completion |
| Expected Result | Entity should be available for subsequent AML screening and monitoring workflows |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, screening-matching |

### CLM-TC-227 — Verify Entity grid is displayed within selected custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | High |
| Preconditions | Approved custom list with entities exists |
| Test Data | Entity Data Available |
| Steps | 1.Open approved custom list 2.Navigate to Entities tab |
| Acceptance Criteria | System shall display onboarded entities in tabular format |
| Expected Result | Entity grid should be displayed successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, high, functional |

### CLM-TC-228 — Verify all configured entity grid columns are displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | High |
| Preconditions | Entity grid available |
| Test Data | N/A |
| Steps | 1.Open Entity grid 2.Review available columns |
| Acceptance Criteria | System shall display configured entity attributes in grid |
| Expected Result | All configured grid columns should be visible and properly aligned |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, high, functional |

### CLM-TC-229 — Verify entity information displayed in grid matches onboarded data

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | High |
| Preconditions | Approved entity available |
| Test Data | Sample Entity |
| Steps | 1.Open Entity grid 2.Compare grid values with entity details |
| Acceptance Criteria | System shall display accurate entity information |
| Expected Result | Entity information displayed in grid should match stored entity data |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, high, functional |

### CLM-TC-230 — Verify entity status is displayed for each entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | High |
| Preconditions | Entity grid available |
| Test Data | N/A |
| Steps | 1.Open Entity grid 2.Review Status column |
| Acceptance Criteria | System shall display current lifecycle status |
| Expected Result | Status should be displayed for all entity records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, high, functional |

### CLM-TC-231 — Verify entity status displayed in grid matches actual entity status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | High |
| Preconditions | Entity available in known status |
| Test Data | Sample Entity |
| Steps | 1.Verify status in grid 2.Open entity details |
| Acceptance Criteria | System shall maintain status consistency |
| Expected Result | Status displayed in grid should match actual entity status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, high, functional |

### CLM-TC-232 — Verify grid displays multiple entity records correctly

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | Medium |
| Preconditions | Multiple entities available |
| Test Data | Multiple Entities |
| Steps | 1.Open Entity grid |
| Acceptance Criteria | System shall support display of multiple onboarded entities |
| Expected Result | All available entity records should be displayed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, medium, functional |

### CLM-TC-233 — Verify newly approved entity appears in entity grid

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | High |
| Preconditions | New entity approved |
| Test Data | New Approved Entity |
| Steps | 1.Approve entity onboarding request 2.Open Entity grid |
| Acceptance Criteria | System shall update entity inventory after approval |
| Expected Result | Newly approved entity should be visible in grid |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, high, maker-checker |

### CLM-TC-234 — Verify disabled entity remains visible with appropriate status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | High |
| Preconditions | Disabled entity available |
| Test Data | Disabled Entity |
| Steps | 1.Open Entity grid |
| Acceptance Criteria | System shall preserve entity visibility for governance purposes |
| Expected Result | Disabled entity should remain visible with updated lifecycle status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, high, functional |

### CLM-TC-235 — Verify entity grid data remains consistent after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | Medium |
| Preconditions | Entity grid available |
| Test Data | N/A |
| Steps | 1.Open Entity grid 2.Refresh page |
| Acceptance Criteria | System shall maintain data integrity |
| Expected Result | Entity grid should reload successfully with consistent data |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, medium, audit |

### CLM-TC-236 — Verify entity count displayed in grid aligns with custom list statistics

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | High |
| Preconditions | Entity records available |
| Test Data | Entity Dataset |
| Steps | 1.Note entity count in grid 2.Compare with custom list statistics |
| Acceptance Criteria | System shall maintain entity count integrity |
| Expected Result | Entity count should match corresponding custom list statistics |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, high, audit |

### CLM-TC-237 — Verify entity search using exact entity name

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Entity grid contains searchable records |
| Test Data | John Smith |
| Steps | 1.Enter exact entity name in search field 2.Execute search |
| Acceptance Criteria | System shall return matching entity records |
| Expected Result | Only matching entity should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, screening-matching |

### CLM-TC-238 — Verify entity search using partial name

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Entity grid contains searchable records |
| Test Data | John |
| Steps | 1.Enter partial entity name 2.Execute search |
| Acceptance Criteria | System shall support partial text search |
| Expected Result | Relevant matching entities should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, functional |

### CLM-TC-239 — Verify search result accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Entity grid contains multiple records |
| Test Data | Known Entity Name |
| Steps | 1.Perform search 2.Review results |
| Acceptance Criteria | System shall return only matching entities |
| Expected Result | Displayed entities should satisfy search criteria |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, screening-matching |

### CLM-TC-240 — Verify search with non-existing entity value

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | Medium |
| Preconditions | Entity grid available |
| Test Data | XYZ_INVALID_ENTITY |
| Steps | 1.Search using non-existing value |
| Acceptance Criteria | System shall handle no-match scenarios correctly |
| Expected Result | System should display no matching records message |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, medium, functional |

### CLM-TC-241 — Verify status filter is available for entity management

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Entity grid available |
| Test Data | N/A |
| Steps | 1.Review available filters |
| Acceptance Criteria | System shall provide status-based filtering |
| Expected Result | Status filter should be visible and accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, functional |

### CLM-TC-242 — Verify status filter returns matching entities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Entities with different statuses available |
| Test Data | Status Value |
| Steps | 1.Select status filter |
| Acceptance Criteria | System shall filter records based on selected status |
| Expected Result | Only entities matching selected status should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, screening-matching |

### CLM-TC-243 — Verify status filter result accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Entities with mixed statuses available |
| Test Data | Status Value |
| Steps | 1.Apply status filter 2.Validate results |
| Acceptance Criteria | System shall return correct lifecycle records |
| Expected Result | All displayed entities should belong to selected status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, functional |

### CLM-TC-244 — Verify combined search and status filtering

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Relevant data available |
| Test Data | Entity Name + Status |
| Steps | 1.Search entity 2.Apply status filter |
| Acceptance Criteria | System shall apply multiple criteria simultaneously |
| Expected Result | Displayed entities should satisfy both criteria |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, functional |

### CLM-TC-245 — Verify reset functionality clears applied search and filters

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Entity search/filter applied |
| Test Data | N/A |
| Steps | 1.Apply search and filters 2.Click Reset |
| Acceptance Criteria | System shall restore complete dataset |
| Expected Result | All criteria should be cleared and complete dataset displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, functional |

### CLM-TC-246 — Verify search and filter state remains accurate after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | Medium |
| Preconditions | Entity search/filter applied |
| Test Data | N/A |
| Steps | 1.Apply criteria 2.Refresh page |
| Acceptance Criteria | System shall maintain data consistency |
| Expected Result | System should display results according to implemented refresh behavior without data inconsistency |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, medium, functional |

### CLM-TC-247 — Verify View action is available for onboarded entities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | High |
| Preconditions | Entity available in grid |
| Test Data | Sample Entity |
| Steps | 1.Open Entity grid 2.Verify View action |
| Acceptance Criteria | System shall allow access to entity details |
| Expected Result | View action should be visible and accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, high, functional |

### CLM-TC-248 — Verify View action opens entity details page

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | High |
| Preconditions | Entity available |
| Test Data | Sample Entity |
| Steps | 1.Click View action |
| Acceptance Criteria | System shall display complete entity information |
| Expected Result | Entity details page should open successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, high, functional |

### CLM-TC-249 — Verify identity information is displayed correctly in entity details

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | High |
| Preconditions | Entity available |
| Test Data | Sample Entity |
| Steps | 1.Open entity details |
| Acceptance Criteria | System shall display stored identity data |
| Expected Result | Identity information should match onboarded values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, high, functional |

### CLM-TC-250 — Verify identifier information is displayed correctly in entity details

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | High |
| Preconditions | Entity available |
| Test Data | Sample Entity |
| Steps | 1.Open entity details |
| Acceptance Criteria | System shall display stored identifier data |
| Expected Result | Identifier information should match onboarded values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, high, functional |

### CLM-TC-251 — Verify digital identifiers are displayed correctly in entity details

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | High |
| Preconditions | Entity available |
| Test Data | Sample Entity |
| Steps | 1.Open entity details |
| Acceptance Criteria | System shall display stored digital identifier data |
| Expected Result | Digital identifiers should match onboarded values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, high, screening-matching |

### CLM-TC-252 — Verify localization information is displayed correctly in entity details

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | High |
| Preconditions | Entity available |
| Test Data | Sample Entity |
| Steps | 1.Open entity details |
| Acceptance Criteria | System shall display stored localization data |
| Expected Result | Localization information should match onboarded values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, high, functional |

### CLM-TC-253 — Verify risk and governance information is displayed correctly

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | High |
| Preconditions | Entity available |
| Test Data | Sample Entity |
| Steps | 1.Open entity details |
| Acceptance Criteria | System shall display stored governance information |
| Expected Result | Risk and governance information should match onboarded values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, high, functional |

### CLM-TC-254 — Verify entity lifecycle status is displayed in details page

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | High |
| Preconditions | Entity available |
| Test Data | Sample Entity |
| Steps | 1.Open entity details |
| Acceptance Criteria | System shall display current entity status |
| Expected Result | Entity details should display current lifecycle status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, high, functional |

### CLM-TC-255 — Verify entity metadata is displayed in details page

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | High |
| Preconditions | Entity available |
| Test Data | Sample Entity |
| Steps | 1.Open entity details |
| Acceptance Criteria | System shall display onboarding traceability information |
| Expected Result | Entity details should display available metadata information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, high, functional |

### CLM-TC-256 — Verify entity details remain consistent after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | Medium |
| Preconditions | Entity details page opened |
| Test Data | Sample Entity |
| Steps | 1.Open entity details 2.Refresh page |
| Acceptance Criteria | System shall maintain entity data integrity |
| Expected Result | Entity details should reload successfully with consistent information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, medium, audit |

### CLM-TC-257 — Verify Edit action is available for onboarded entities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | High |
| Preconditions | Entity available in grid |
| Test Data | Sample Entity |
| Steps | 1.Open Entity Grid 2.Verify Edit action |
| Acceptance Criteria | System shall allow modification of existing entities |
| Expected Result | Edit action should be visible and accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, high, functional |

### CLM-TC-258 — Verify Edit action opens entity in edit mode

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | High |
| Preconditions | Entity available |
| Test Data | Sample Entity |
| Steps | 1.Click Edit action |
| Acceptance Criteria | System shall display editable onboarding form |
| Expected Result | Edit Entity form should open successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, high, functional |

### CLM-TC-259 — Verify existing entity information is pre-populated in Edit form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | High |
| Preconditions | Entity available |
| Test Data | Sample Entity |
| Steps | 1.Open Edit Entity form |
| Acceptance Criteria | System shall load previously approved entity information |
| Expected Result | Previously saved entity information should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, high, maker-checker |

### CLM-TC-260 — Verify editable entity fields can be modified

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | High |
| Preconditions | Entity available in edit mode |
| Test Data | Updated Entity Data |
| Steps | 1.Modify editable fields |
| Acceptance Criteria | System shall allow updates to entity information |
| Expected Result | Modified values should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, high, functional |

### CLM-TC-261 — Verify modified values remain intact during edit session

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | Medium |
| Preconditions | Entity in edit mode |
| Test Data | Updated Entity Data |
| Steps | 1.Modify fields 2.Navigate across sections |
| Acceptance Criteria | System shall preserve user changes before submission |
| Expected Result | Modified values should remain unchanged until saved or submitted |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, medium, session |

### CLM-TC-262 — Verify updated entity can be submitted for approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | High |
| Preconditions | Entity updated successfully |
| Test Data | Updated Entity Data |
| Steps | 1.Modify entity 2.Click Submit For Approval |
| Acceptance Criteria | System shall support Maker-Checker workflow for entity modifications |
| Expected Result | Entity update request should be submitted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, high, rbac, security |

### CLM-TC-263 — Verify entity modification generates approval request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | High |
| Preconditions | Update request submitted |
| Test Data | Updated Entity Data |
| Steps | 1.Submit modified entity |
| Acceptance Criteria | System shall create approval request for entity update |
| Expected Result | Approval request should be generated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, high, functional |

### CLM-TC-264 — Verify entity update request enters Pending Approval status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | High |
| Preconditions | Update request submitted |
| Test Data | Updated Entity Data |
| Steps | 1.Open submitted request |
| Acceptance Criteria | System shall route modification through approval workflow |
| Expected Result | Request should display Pending Approval status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, high, maker-checker |

### CLM-TC-265 — Verify submitted update request retains modified entity information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | High |
| Preconditions | Update request available |
| Test Data | Updated Entity Data |
| Steps | 1.Open submitted request |
| Acceptance Criteria | System shall preserve updated values during approval workflow |
| Expected Result | Request should display all modified information accurately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, high, maker-checker |

### CLM-TC-266 — Verify approved entity reflects updated information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | High |
| Preconditions | Approved entity update request exists |
| Test Data | Approved Entity Update |
| Steps | 1.Approve update request 2.Open entity details |
| Acceptance Criteria | System shall update entity after approval |
| Expected Result | Entity details should display approved updated information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, high, maker-checker |

### CLM-TC-267 — Verify Disable action can be initiated for active entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Active entity available |
| Test Data | Active Entity |
| Steps | 1.Select active entity 2.Click Disable |
| Acceptance Criteria | System shall allow entity deactivation workflow |
| Expected Result | Disable request workflow should be initiated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, maker-checker |

### CLM-TC-268 — Verify Enable action can be initiated for disabled entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Disabled entity available |
| Test Data | Disabled Entity |
| Steps | 1.Select disabled entity 2.Click Enable |
| Acceptance Criteria | System shall allow entity reactivation workflow |
| Expected Result | Enable request workflow should be initiated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, maker-checker |

### CLM-TC-269 — Verify Enable/Disable request generates approval request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Request initiated |
| Test Data | Request Data |
| Steps | 1.Submit Enable/Disable request |
| Acceptance Criteria | System shall create Maker-Checker request |
| Expected Result | Approval request should be generated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, rbac, security |

### CLM-TC-270 — Verify Enable/Disable request enters Pending Approval status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Request submitted |
| Test Data | Request Data |
| Steps | 1.Open submitted request |
| Acceptance Criteria | System shall enforce approval workflow |
| Expected Result | Request should display Pending Approval status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, maker-checker |

### CLM-TC-271 — Verify entity status remains unchanged before approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Request pending approval |
| Test Data | Request Data |
| Steps | 1.Submit Enable/Disable request 2.Verify entity status |
| Acceptance Criteria | System shall enforce approval dependency |
| Expected Result | Entity status should remain unchanged until checker approval |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, functional |

### CLM-TC-272 — Verify approved Disable request changes entity status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Disable request approved |
| Test Data | Approved Disable Request |
| Steps | 1.Approve request 2.Open entity details |
| Acceptance Criteria | System shall deactivate entity after approval |
| Expected Result | Entity status should change to Disabled |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, maker-checker |

### CLM-TC-273 — Verify approved Enable request changes entity status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Enable request approved |
| Test Data | Approved Enable Request |
| Steps | 1.Approve request 2.Open entity details |
| Acceptance Criteria | System shall reactivate entity after approval |
| Expected Result | Entity status should change to Active |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, maker-checker |

### CLM-TC-274 — Verify disabled entity remains visible in entity inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Disabled entity exists |
| Test Data | Disabled Entity |
| Steps | 1.Open Entity Grid |
| Acceptance Criteria | System shall preserve traceability of disabled entities |
| Expected Result | Disabled entity should remain visible with correct status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, functional |

### CLM-TC-275 — Verify entity grid reflects latest approved status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Approved status change completed |
| Test Data | Approved Request |
| Steps | 1.Open Entity Grid |
| Acceptance Criteria | System shall display current lifecycle state |
| Expected Result | Entity grid should display updated entity status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, maker-checker |

### CLM-TC-276 — Verify only approved requests trigger entity status transition

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Request pending approval |
| Test Data | Request Data |
| Steps | 1.Submit request 2.Do not approve request |
| Acceptance Criteria | System shall prevent unauthorized lifecycle changes |
| Expected Result | Entity status should not change until approval workflow is completed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, rbac, security |

### CLM-TC-277 — Verify Maker information is captured during entity onboarding

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Metadata |
| Priority | High |
| Preconditions | Entity available |
| Test Data | Sample Entity |
| Steps | 1.Open entity details |
| Acceptance Criteria | System shall record entity creator information |
| Expected Result | Maker information should be available and accurate |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-metadata, high, rbac, security |

### CLM-TC-278 — Verify Checker information is captured after approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Metadata |
| Priority | High |
| Preconditions | Approved entity available |
| Test Data | Approved Entity |
| Steps | 1.Open entity details |
| Acceptance Criteria | System shall record approver information |
| Expected Result | Checker information should be available and accurate |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-metadata, high, rbac, security |

### CLM-TC-279 — Verify Date Created is captured for entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Metadata |
| Priority | High |
| Preconditions | Entity available |
| Test Data | Sample Entity |
| Steps | 1.Open entity details |
| Acceptance Criteria | System shall maintain entity creation timestamp |
| Expected Result | Date Created should be populated correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-metadata, high, functional |

### CLM-TC-280 — Verify Date Last Modified is updated after approved changes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Metadata |
| Priority | High |
| Preconditions | Entity modified and approved |
| Test Data | Modified Entity |
| Steps | 1.Modify entity 2.Approve update 3.Open entity details |
| Acceptance Criteria | System shall maintain entity modification history |
| Expected Result | Date Last Modified should reflect latest approved update |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-metadata, high, maker-checker |

### CLM-TC-281 — Verify metadata remains consistent across grid and entity details

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Metadata |
| Priority | Medium |
| Preconditions | Entity available |
| Test Data | Sample Entity |
| Steps | 1.Verify metadata in grid 2.Open entity details |
| Acceptance Criteria | System shall maintain metadata consistency |
| Expected Result | Metadata values should remain consistent across screens |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-metadata, medium, functional |

### CLM-TC-282 — Verify metadata remains intact after entity status changes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Metadata |
| Priority | High |
| Preconditions | Entity enabled/disabled |
| Test Data | Entity Data |
| Steps | 1.Change entity status through approval workflow |
| Acceptance Criteria | System shall preserve audit information |
| Expected Result | Metadata information should remain unchanged except applicable modification details |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-metadata, high, audit |

### CLM-TC-283 — Verify metadata remains available after entity modification

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Metadata |
| Priority | High |
| Preconditions | Entity modified |
| Test Data | Modified Entity |
| Steps | 1.Modify entity 2.Open details |
| Acceptance Criteria | System shall preserve historical ownership information |
| Expected Result | Maker, Checker and date information should remain available |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-metadata, high, functional |

### CLM-TC-284 — Verify metadata provides complete audit traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Metadata |
| Priority | High |
| Preconditions | Approved entity available |
| Test Data | Approved Entity |
| Steps | 1.Open entity details |
| Acceptance Criteria | System shall maintain end-to-end governance traceability |
| Expected Result | Entity metadata should provide complete traceability information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-metadata, high, maker-checker |

### CLM-TC-285 — Verify Entity History section is available for onboarded entities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity History |
| Priority | High |
| Preconditions | Entity available |
| Test Data | Sample Entity |
| Steps | 1.Open entity details 2.Navigate to History section |
| Acceptance Criteria | System shall provide historical activity visibility |
| Expected Result | Entity History section should be accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-history, high, functional |

### CLM-TC-286 — Verify entity onboarding activity is recorded in history

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity History |
| Priority | High |
| Preconditions | Approved entity available |
| Test Data | Approved Entity |
| Steps | 1.Open Entity History |
| Acceptance Criteria | System shall maintain onboarding audit trail |
| Expected Result | Entity onboarding event should be recorded in history |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-history, high, maker-checker |

### CLM-TC-287 — Verify entity modification activity is recorded in history

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity History |
| Priority | High |
| Preconditions | Entity modified and approved |
| Test Data | Modified Entity |
| Steps | 1.Modify entity 2.Open History |
| Acceptance Criteria | Entity updates shall be auditable |
| Expected Result | Entity modification event should be recorded in history |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-history, high, audit |

### CLM-TC-288 — Verify entity enable activity is recorded in history

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity History |
| Priority | High |
| Preconditions | Entity enabled through approval workflow |
| Test Data | Enabled Entity |
| Steps | 1.Enable entity 2.Open History |
| Acceptance Criteria | Entity lifecycle changes shall be auditable |
| Expected Result | Entity enable event should be recorded in history |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-history, high, audit |

### CLM-TC-289 — Verify entity disable activity is recorded in history

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity History |
| Priority | High |
| Preconditions | Entity disabled through approval workflow |
| Test Data | Disabled Entity |
| Steps | 1.Disable entity 2.Open History |
| Acceptance Criteria | Entity lifecycle changes shall be auditable |
| Expected Result | Entity disable event should be recorded in history |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-history, high, audit |

### CLM-TC-290 — Verify history entries display activity timestamps

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity History |
| Priority | Medium |
| Preconditions | Entity history available |
| Test Data | Entity History Data |
| Steps | 1.Open Entity History |
| Acceptance Criteria | System shall provide chronological traceability |
| Expected Result | History entries should display activity date and time information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-history, medium, functional |

### CLM-TC-291 — Verify history entries display user accountability information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity History |
| Priority | High |
| Preconditions | Entity history available |
| Test Data | Entity History Data |
| Steps | 1.Open Entity History |
| Acceptance Criteria | System shall provide user-level traceability |
| Expected Result | History entries should display responsible user information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-history, high, functional |

### CLM-TC-292 — Verify Entity History maintains complete lifecycle traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity History |
| Priority | High |
| Preconditions | Entity with multiple lifecycle events available |
| Test Data | Entity Lifecycle Data |
| Steps | 1.Open Entity History |
| Acceptance Criteria | System shall preserve end-to-end entity activity audit trail |
| Expected Result | Entity History should display all recorded lifecycle activities in chronological order |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-history, high, audit |

### CLM-TC-293 — Verify template download option is available on Bulk Upload screen

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Template Download |
| Priority | High |
| Preconditions | User has access to Bulk Upload page |
| Test Data | N/A |
| Steps | 1.Navigate to Bulk Upload screen |
| Acceptance Criteria | System shall provide template download functionality |
| Expected Result | Template Download option should be visible and accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-template-download, high, export |

### CLM-TC-294 — Verify template file downloads successfully

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Template Download |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | N/A |
| Steps | 1.Click Download Template |
| Acceptance Criteria | System shall allow users to download onboarding template |
| Expected Result | Template file should be downloaded successfully without errors |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-template-download, high, export |

### CLM-TC-295 — Verify downloaded template file is not corrupted

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Template Download |
| Priority | High |
| Preconditions | Template downloaded successfully |
| Test Data | N/A |
| Steps | 1.Open downloaded template |
| Acceptance Criteria | System shall provide a usable upload template |
| Expected Result | Template file should open successfully without corruption |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-template-download, high, export |

### CLM-TC-296 — Verify template contains expected column structure

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Template Download |
| Priority | High |
| Preconditions | Template downloaded successfully |
| Test Data | N/A |
| Steps | 1.Open template 2.Review available columns |
| Acceptance Criteria | System shall provide onboarding structure for bulk ingestion |
| Expected Result | Template should contain configured entity onboarding columns |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-template-download, high, functional |

### CLM-TC-297 — Verify template column headers are clearly identifiable

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Template Download |
| Priority | Medium |
| Preconditions | Template downloaded successfully |
| Test Data | N/A |
| Steps | 1.Review template headers |
| Acceptance Criteria | System shall provide readable onboarding structure |
| Expected Result | All column headers should be clearly displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-template-download, medium, functional |

### CLM-TC-298 — Verify template remains downloadable across multiple attempts

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Template Download |
| Priority | Medium |
| Preconditions | User on Bulk Upload page |
| Test Data | N/A |
| Steps | 1.Download template multiple times |
| Acceptance Criteria | System shall support repeated template downloads |
| Expected Result | Template should download successfully on each attempt |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-template-download, medium, export |

### CLM-TC-299 — Verify downloaded template can be used for upload preparation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Template Download |
| Priority | High |
| Preconditions | Template downloaded successfully |
| Test Data | Sample Entity Data |
| Steps | 1.Open template 2.Enter sample data |
| Acceptance Criteria | System shall provide upload-ready template structure |
| Expected Result | Template should be suitable for preparing upload records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-template-download, high, export |

### CLM-TC-300 — Verify template download does not alter existing uploaded records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Template Download |
| Priority | Medium |
| Preconditions | Existing entities available |
| Test Data | N/A |
| Steps | 1.Download template 2.Verify existing entity data |
| Acceptance Criteria | System shall isolate template operations from entity data |
| Expected Result | Downloading template should not impact existing records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-template-download, medium, export |

### CLM-TC-301 — Verify upload control is available on Bulk Upload screen

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | N/A |
| Steps | 1.Open Bulk Upload page |
| Acceptance Criteria | System shall provide file upload capability |
| Expected Result | Upload control should be visible and accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, bulk-upload |

### CLM-TC-302 — Verify valid upload file can be selected

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | Valid Upload File |
| Steps | 1.Click Upload 2.Select valid file |
| Acceptance Criteria | System shall allow file selection |
| Expected Result | File should be selected successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, functional |

### CLM-TC-303 — Verify valid upload file can be submitted

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | Valid Upload File |
| Steps | 1.Select valid file 2.Submit upload |
| Acceptance Criteria | System shall accept valid onboarding file |
| Expected Result | Upload request should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, functional |

### CLM-TC-304 — Verify upload request generates processing workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | Valid file selected |
| Test Data | Valid Upload File |
| Steps | 1.Submit upload |
| Acceptance Criteria | System shall initiate bulk onboarding process |
| Expected Result | Upload processing workflow should be initiated |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, maker-checker |

### CLM-TC-305 — Verify uploaded file enters approval workflow when applicable

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | Upload submitted |
| Test Data | Valid Upload File |
| Steps | 1.Submit upload request |
| Acceptance Criteria | System shall support governance controls |
| Expected Result | Upload request should enter approval workflow |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, maker-checker |

### CLM-TC-306 — Verify upload request status is displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | Medium |
| Preconditions | Upload submitted |
| Test Data | Valid Upload File |
| Steps | 1.Open upload details |
| Acceptance Criteria | System shall provide upload visibility |
| Expected Result | Current upload status should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, medium, functional |

### CLM-TC-307 — Verify upload with empty file is handled appropriately

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | Empty File |
| Steps | 1.Upload empty file |
| Acceptance Criteria | System shall validate uploaded content |
| Expected Result | System should reject upload or display validation message |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, functional |

### CLM-TC-308 — Verify upload with incomplete onboarding data is validated

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | Incomplete Upload File |
| Steps | 1.Upload file containing incomplete records |
| Acceptance Criteria | System shall validate uploaded entity information |
| Expected Result | System should display validation feedback for incomplete records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, functional |

### CLM-TC-309 — Verify upload with multiple entity records is accepted

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | Multi-Record File |
| Steps | 1.Upload file containing multiple records |
| Acceptance Criteria | System shall support bulk onboarding |
| Expected Result | File should be accepted for processing |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, functional |

### CLM-TC-310 — Verify uploaded entity records are associated with selected custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | Custom list selected |
| Test Data | Entity Upload File |
| Steps | 1.Upload entity file |
| Acceptance Criteria | System shall preserve list ownership |
| Expected Result | Uploaded entities should be associated with the correct custom list |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, functional |

### CLM-TC-311 — Verify upload processing preserves record count integrity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | Upload completed |
| Test Data | Multi-Record File |
| Steps | 1.Note upload record count 2.Verify processed records |
| Acceptance Criteria | System shall process all uploaded records |
| Expected Result | Processed record count should match uploaded record count |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, audit |

### CLM-TC-312 — Verify upload validation messages are displayed when errors occur

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | Invalid upload file available |
| Test Data | Invalid Upload File |
| Steps | 1.Upload invalid file |
| Acceptance Criteria | System shall provide meaningful validation feedback |
| Expected Result | Appropriate validation message should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, error-handling |

### CLM-TC-313 — Verify upload request retains uploaded file details

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | Medium |
| Preconditions | Upload submitted |
| Test Data | Upload Request |
| Steps | 1.Open upload request |
| Acceptance Criteria | System shall maintain upload traceability |
| Expected Result | Uploaded file details should be available |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, medium, functional |

### CLM-TC-314 — Verify upload processing does not impact existing approved entities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | Existing entities available |
| Test Data | Upload File |
| Steps | 1.Upload file 2.Verify existing entities |
| Acceptance Criteria | System shall isolate onboarding operations |
| Expected Result | Existing approved entities should remain unchanged |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, maker-checker |

### CLM-TC-315 — Verify successfully processed upload contributes to entity inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | Upload approved and processed |
| Test Data | Approved Upload |
| Steps | 1.Complete upload workflow 2.Verify entity inventory |
| Acceptance Criteria | System shall onboard uploaded entities |
| Expected Result | Uploaded entities should become available in entity inventory |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, maker-checker |

### CLM-TC-316 — Verify supported template file format can be uploaded

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | Supported File |
| Steps | 1.Select supported file format |
| Acceptance Criteria | System shall accept supported upload formats |
| Expected Result | Supported file should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, high, functional |

### CLM-TC-317 — Verify unsupported file format is rejected

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | Unsupported File |
| Steps | 1.Select unsupported file |
| Acceptance Criteria | System shall restrict unsupported formats |
| Expected Result | System should reject file and display validation message |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, high, maker-checker |

### CLM-TC-318 — Verify corrupted file upload is handled appropriately

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | Corrupted File |
| Steps | 1.Upload corrupted file |
| Acceptance Criteria | System shall validate file integrity |
| Expected Result | System should reject corrupted file and display appropriate feedback |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, high, audit |

### CLM-TC-319 — Verify blank file upload is handled appropriately

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | Blank File |
| Steps | 1.Upload blank file |
| Acceptance Criteria | System shall validate uploaded file content |
| Expected Result | System should reject blank file or display validation message |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, high, functional |

### CLM-TC-320 — Verify file containing only headers is validated

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | Medium |
| Preconditions | User on Bulk Upload screen |
| Test Data | Header Only File |
| Steps | 1.Upload header-only template |
| Acceptance Criteria | System shall validate record availability |
| Expected Result | System should process according to configured validation rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, medium, functional |

### CLM-TC-321 — Verify file containing special characters is handled appropriately

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | Medium |
| Preconditions | User on Bulk Upload screen |
| Test Data | Special Character File |
| Steps | 1.Upload file containing special characters |
| Acceptance Criteria | System shall process supported character sets |
| Expected Result | System should process file according to configured validation rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, medium, functional |

### CLM-TC-322 — Verify file with altered template structure is validated

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | Modified Template File |
| Steps | 1.Modify template structure 2.Upload file |
| Acceptance Criteria | System shall validate template integrity |
| Expected Result | System should reject file or display template validation feedback |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, high, audit |

### CLM-TC-323 — Verify upload validation occurs before onboarding request generation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | Invalid Format File |
| Steps | 1.Upload invalid format file |
| Acceptance Criteria | System shall validate file prior to processing |
| Expected Result | Onboarding request should not be generated for invalid file |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, high, error-handling |

### CLM-TC-324 — Verify valid file format proceeds to upload workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | Valid Upload File |
| Steps | 1.Upload valid file |
| Acceptance Criteria | System shall permit processing of valid files |
| Expected Result | Valid file should proceed to upload workflow successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, high, maker-checker |

### CLM-TC-325 — Verify file format validation results are communicated to user

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | Medium |
| Preconditions | User uploads file |
| Test Data | Test Files |
| Steps | 1.Upload file 2.Review system response |
| Acceptance Criteria | System shall provide upload validation feedback |
| Expected Result | System should display success or validation feedback based on upload outcome |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, medium, error-handling |

### CLM-TC-326 — Verify uploaded file containing all mandatory columns is accepted for processing

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | High |
| Preconditions | User has downloaded latest upload template |
| Test Data | Valid Template with Mandatory Data |
| Steps | 1.Populate upload template with valid entity data in all mandatory columns 2.Upload file through Bulk Upload screen 3.Submit upload request |
| Acceptance Criteria | System shall accept upload files that comply with the mandatory template structure |
| Expected Result | System should successfully accept the file and allow further processing without mandatory column validation errors |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, high, bulk-upload |

### CLM-TC-327 — Verify upload is prevented when a mandatory column is completely removed from template

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | High |
| Preconditions | User has downloaded upload template |
| Test Data | File Missing Mandatory Column |
| Steps | 1.Remove one mandatory column from template 2.Save file 3.Upload modified file |
| Acceptance Criteria | System shall validate mandatory template structure before processing |
| Expected Result | System should reject the file and clearly identify the missing mandatory column |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, high, bulk-upload |

### CLM-TC-328 — Verify upload validation identifies multiple missing mandatory columns

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | High |
| Preconditions | User has downloaded upload template |
| Test Data | File Missing Multiple Mandatory Columns |
| Steps | 1.Remove multiple mandatory columns 2.Upload file |
| Acceptance Criteria | System shall validate complete template structure |
| Expected Result | System should reject the upload and display all missing mandatory columns requiring correction |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, high, error-handling |

### CLM-TC-329 — Verify upload validation is triggered before onboarding workflow initiation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | Invalid Template |
| Steps | 1.Upload file with missing mandatory columns 2.Attempt submission |
| Acceptance Criteria | System shall perform structural validation before request creation |
| Expected Result | System should stop processing before onboarding request generation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, high, error-handling |

### CLM-TC-330 — Verify file containing mandatory columns but blank mandatory values is validated

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | File with Blank Mandatory Data |
| Steps | 1.Populate template with blank mandatory field values 2.Upload file |
| Acceptance Criteria | System shall validate mandatory onboarding data in addition to template structure |
| Expected Result | System should identify records that do not satisfy mandatory data requirements |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, high, bulk-upload |

### CLM-TC-331 — Verify mandatory column validation is applied across all uploaded records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | File with Mixed Data Quality |
| Steps | 1.Upload file containing valid and invalid records |
| Acceptance Criteria | System shall validate every uploaded entity record |
| Expected Result | System should identify all records failing mandatory data validation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, high, error-handling |

### CLM-TC-332 — Verify column order changes do not impact mandatory column validation when supported

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | Medium |
| Preconditions | User on Bulk Upload screen |
| Test Data | Reordered Template |
| Steps | 1.Rearrange template columns 2.Upload file |
| Acceptance Criteria | System shall validate columns based on structure rather than visual order |
| Expected Result | System should process the file according to configured template validation rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, medium, error-handling |

### CLM-TC-333 — Verify mandatory column validation feedback is understandable and actionable

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | High |
| Preconditions | User uploads invalid file |
| Test Data | Invalid Template |
| Steps | 1.Upload file missing mandatory information |
| Acceptance Criteria | System shall provide meaningful validation feedback |
| Expected Result | Validation feedback should clearly identify records and columns requiring correction |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, high, error-handling |

### CLM-TC-334 — Verify corrected file can be re-uploaded successfully after mandatory column issues are resolved

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | High |
| Preconditions | User has previously failed upload |
| Test Data | Corrected Upload File |
| Steps | 1.Correct identified issues 2.Re-upload file |
| Acceptance Criteria | System shall allow successful processing after validation issues are corrected |
| Expected Result | Corrected file should pass mandatory column validation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, high, error-handling |

### CLM-TC-335 — Verify mandatory column validation maintains onboarding data integrity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | Test Validation Files |
| Steps | 1.Upload files with various mandatory data violations |
| Acceptance Criteria | System shall prevent incomplete entity onboarding through bulk ingestion |
| Expected Result | Only records satisfying mandatory onboarding requirements should proceed for processing |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, high, error-handling |

### CLM-TC-336 — Verify upload containing unique entity records proceeds successfully

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | High |
| Preconditions | Custom list available |
| Test Data | Unique Entity Dataset |
| Steps | 1.Upload file containing unique entity records |
| Acceptance Criteria | System shall process unique records without duplicate validation failures |
| Expected Result | Upload should proceed successfully without duplicate warnings |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, high, error-handling |

### CLM-TC-337 — Verify duplicate records within the same upload file are identified during validation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | Duplicate Records File |
| Steps | 1.Upload file containing duplicate entity rows |
| Acceptance Criteria | System shall detect duplicate records within uploaded dataset |
| Expected Result | System should identify duplicate records according to configured validation rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, high, error-handling |

### CLM-TC-338 — Verify duplicate validation occurs before onboarding workflow initiation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | High |
| Preconditions | User on Bulk Upload screen |
| Test Data | Duplicate Records File |
| Steps | 1.Upload file containing duplicate records |
| Acceptance Criteria | System shall perform duplicate checks before processing |
| Expected Result | Duplicate validation should occur before onboarding request generation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, high, error-handling |

### CLM-TC-339 — Verify duplicate validation feedback identifies affected records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | High |
| Preconditions | User uploads duplicate file |
| Test Data | Duplicate Records File |
| Steps | 1.Upload file containing duplicate records |
| Acceptance Criteria | System shall provide traceable duplicate validation information |
| Expected Result | System should clearly identify duplicate records requiring review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, high, error-handling |

### CLM-TC-340 — Verify upload containing a mixture of unique and duplicate records is validated correctly

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | High |
| Preconditions | User uploads mixed dataset |
| Test Data | Mixed Dataset |
| Steps | 1.Upload file containing both unique and duplicate records |
| Acceptance Criteria | System shall evaluate all uploaded records |
| Expected Result | System should identify duplicate records while validating remaining records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, high, functional |

### CLM-TC-341 — Verify duplicate validation remains consistent across repeated uploads

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | Medium |
| Preconditions | User uploads same test file multiple times |
| Test Data | Duplicate Test Dataset |
| Steps | 1.Perform repeated upload attempts |
| Acceptance Criteria | System shall apply duplicate rules consistently |
| Expected Result | Duplicate detection results should remain consistent across executions |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, medium, error-handling |

### CLM-TC-342 — Verify corrected upload file can be resubmitted after duplicate issues are resolved

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | High |
| Preconditions | User has duplicate validation failure |
| Test Data | Corrected Dataset |
| Steps | 1.Remove duplicate records 2.Re-upload file |
| Acceptance Criteria | System shall allow successful processing after correction |
| Expected Result | Corrected file should pass duplicate validation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, high, functional |

### CLM-TC-343 — Verify duplicate validation does not impact unrelated valid records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | Medium |
| Preconditions | User uploads mixed dataset |
| Test Data | Mixed Dataset |
| Steps | 1.Upload file with duplicate and unique records |
| Acceptance Criteria | System shall isolate validation results to affected records |
| Expected Result | Validation results should accurately identify affected records only |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, medium, error-handling |

### CLM-TC-344 — Verify duplicate validation preserves onboarding traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | Medium |
| Preconditions | User uploads duplicate file |
| Test Data | Duplicate Dataset |
| Steps | 1.Upload duplicate dataset 2.Review validation outcome |
| Acceptance Criteria | System shall maintain validation visibility for audit purposes |
| Expected Result | Duplicate validation results should remain available for review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, medium, error-handling |

### CLM-TC-345 — Verify duplicate detection supports onboarding data quality objectives

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | High |
| Preconditions | User uploads duplicate entity data |
| Test Data | Duplicate Entity Dataset |
| Steps | 1.Upload duplicate records |
| Acceptance Criteria | System shall prevent unintended duplicate entity onboarding |
| Expected Result | System should prevent duplicate onboarding according to configured rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, high, functional |

### CLM-TC-346 — Verify validation results are generated after upload processing

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Validation Report |
| Priority | High |
| Preconditions | User uploads file for validation |
| Test Data | Test Upload File |
| Steps | 1.Upload file 2.Wait for validation completion |
| Acceptance Criteria | System shall provide upload validation outcome |
| Expected Result | Validation results should be generated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-validation-report, high, error-handling |

### CLM-TC-347 — Verify validation report identifies records that passed validation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Validation Report |
| Priority | Medium |
| Preconditions | User uploads mixed dataset |
| Test Data | Mixed Dataset |
| Steps | 1.Process upload 2.Review validation results |
| Acceptance Criteria | System shall provide visibility of successful records |
| Expected Result | Validation report should identify successfully validated records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-validation-report, medium, error-handling |

### CLM-TC-348 — Verify validation report identifies records that failed validation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Validation Report |
| Priority | High |
| Preconditions | User uploads invalid dataset |
| Test Data | Invalid Dataset |
| Steps | 1.Process upload 2.Review validation results |
| Acceptance Criteria | System shall provide visibility of validation failures |
| Expected Result | Validation report should identify failed records and associated issues |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-validation-report, high, error-handling |

### CLM-TC-349 — Verify validation report provides record-level traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Validation Report |
| Priority | High |
| Preconditions | User uploads dataset with validation issues |
| Test Data | Validation Dataset |
| Steps | 1.Review validation report |
| Acceptance Criteria | System shall allow identification of affected records |
| Expected Result | Validation report should identify affected records clearly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-validation-report, high, error-handling |

### CLM-TC-350 — Verify validation report remains accessible after upload processing completes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Validation Report |
| Priority | Medium |
| Preconditions | Validation completed |
| Test Data | Processed Upload |
| Steps | 1.Open completed upload 2.Review validation results |
| Acceptance Criteria | System shall retain validation outcome visibility |
| Expected Result | Validation report should remain available for review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-validation-report, medium, error-handling |

### CLM-TC-351 — Verify validation report accurately reflects upload outcome

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Validation Report |
| Priority | High |
| Preconditions | Validation completed |
| Test Data | Test Dataset |
| Steps | 1.Compare upload data with validation report |
| Acceptance Criteria | System shall maintain validation result integrity |
| Expected Result | Validation report should accurately reflect upload validation outcome |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-validation-report, high, error-handling |

### CLM-TC-352 — Verify validation report supports upload correction activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Validation Report |
| Priority | High |
| Preconditions | Validation failure exists |
| Test Data | Failed Upload |
| Steps | 1.Review validation report |
| Acceptance Criteria | System shall provide sufficient information for remediation |
| Expected Result | Validation report should provide sufficient detail to correct upload issues |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-validation-report, high, error-handling |

### CLM-TC-353 — Verify validation reporting supports AML onboarding governance requirements

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Validation Report |
| Priority | High |
| Preconditions | Validation completed |
| Test Data | Processed Upload |
| Steps | 1.Review validation report |
| Acceptance Criteria | System shall provide auditable upload validation evidence |
| Expected Result | Validation report should provide traceable evidence of upload validation activity |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-validation-report, high, error-handling |

### CLM-TC-354 — Verify successfully validated upload can be submitted for onboarding approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Validated upload available |
| Test Data | Validated Upload File |
| Steps | 1.Complete validation 2.Submit upload batch |
| Acceptance Criteria | System shall allow submission of valid upload batches |
| Expected Result | Upload batch should be submitted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, functional |

### CLM-TC-355 — Verify upload submission generates onboarding request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Validated upload available |
| Test Data | Validated Upload File |
| Steps | 1.Submit upload batch |
| Acceptance Criteria | System shall create governance-controlled onboarding request |
| Expected Result | Onboarding request should be generated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, functional |

### CLM-TC-356 — Verify submitted upload enters Pending Approval status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Upload batch submitted |
| Test Data | Submitted Upload Batch |
| Steps | 1.Open submitted request |
| Acceptance Criteria | System shall route upload through Maker-Checker workflow |
| Expected Result | Request should display Pending Approval status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-357 — Verify submitted upload request is visible in approval queue

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Upload request submitted |
| Test Data | Submitted Upload Batch |
| Steps | 1.Navigate to approval queue |
| Acceptance Criteria | System shall make request available for checker review |
| Expected Result | Upload request should be visible in approval queue |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-358 — Verify submitted request retains uploaded entity information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Upload request available |
| Test Data | Submitted Upload Batch |
| Steps | 1.Open submitted request |
| Acceptance Criteria | System shall preserve upload content during approval workflow |
| Expected Result | Request should display uploaded entity information accurately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, maker-checker |

### CLM-TC-359 — Verify upload request remains pending until checker action occurs

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Request pending approval |
| Test Data | Submitted Upload Batch |
| Steps | 1.Submit upload 2.Verify status before approval |
| Acceptance Criteria | System shall enforce Maker-Checker dependency |
| Expected Result | Request should remain pending until checker approval or rejection |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-360 — Verify approved upload results in entity onboarding

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Upload request approved |
| Test Data | Approved Upload Batch |
| Steps | 1.Approve upload request |
| Acceptance Criteria | System shall onboard uploaded entities after approval |
| Expected Result | Uploaded entities should be onboarded successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, maker-checker |

### CLM-TC-361 — Verify approved upload updates entity inventory statistics

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Approved upload completed |
| Test Data | Approved Upload Batch |
| Steps | 1.Note entity count 2.Approve upload 3.Verify count |
| Acceptance Criteria | System shall maintain entity count accuracy |
| Expected Result | Entity statistics should reflect newly onboarded entities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, maker-checker |

### CLM-TC-362 — Verify approved upload entities are available within associated custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Approved upload completed |
| Test Data | Approved Upload Batch |
| Steps | 1.Open associated custom list |
| Acceptance Criteria | System shall associate onboarded entities with the correct custom list |
| Expected Result | Newly onboarded entities should be visible within the correct custom list |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, maker-checker |

### CLM-TC-363 — Verify approved upload creates screening-ready entities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Approved upload completed |
| Test Data | Approved Upload Batch |
| Steps | 1.Open onboarded entities |
| Acceptance Criteria | System shall complete onboarding lifecycle successfully |
| Expected Result | Onboarded entities should be available for subsequent AML screening and monitoring workflows |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, screening-matching |

### CLM-TC-364 — Verify All Requests page is accessible from Custom List Manager navigation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | High |
| Preconditions | User has access to Maker-Checker module |
| Test Data | N/A |
| Steps | 1.Navigate to Custom List Manager 2.Open All Requests |
| Acceptance Criteria | System shall provide centralized visibility of governance requests |
| Expected Result | All Requests page should open successfully displaying available requests |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, high, functional |

### CLM-TC-365 — Verify all submitted governance requests are displayed in All Requests inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | High |
| Preconditions | Requests available in system |
| Test Data | Request Dataset |
| Steps | 1.Open All Requests page |
| Acceptance Criteria | System shall provide complete request visibility |
| Expected Result | All eligible requests should be displayed in the request inventory |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, high, functional |

### CLM-TC-366 — Verify request inventory displays key request information required for review

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | High |
| Preconditions | Requests available |
| Test Data | Request Dataset |
| Steps | 1.Open All Requests page 2.Review displayed request information |
| Acceptance Criteria | System shall provide sufficient information for request identification |
| Expected Result | Request inventory should display configured request attributes required for governance review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, high, functional |

### CLM-TC-367 — Verify requests generated from different workflows are visible in All Requests

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | High |
| Preconditions | List, Entity and Upload requests available |
| Test Data | Mixed Request Dataset |
| Steps | 1.Generate requests from multiple workflows 2.Open All Requests |
| Acceptance Criteria | System shall centralize governance activities |
| Expected Result | All generated requests should be visible in a consolidated inventory |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, high, maker-checker |

### CLM-TC-368 — Verify request status is displayed for each governance request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | High |
| Preconditions | Request inventory available |
| Test Data | Request Dataset |
| Steps | 1.Open All Requests page |
| Acceptance Criteria | System shall provide lifecycle visibility |
| Expected Result | Each request should display its current workflow status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, high, functional |

### CLM-TC-369 — Verify latest submitted request appears in All Requests inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | High |
| Preconditions | New request submitted |
| Test Data | New Request |
| Steps | 1.Submit request 2.Open All Requests |
| Acceptance Criteria | System shall update governance queue dynamically |
| Expected Result | Newly generated request should be visible in the inventory |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, high, functional |

### CLM-TC-370 — Verify request inventory remains accurate after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | Medium |
| Preconditions | Request inventory available |
| Test Data | Request Dataset |
| Steps | 1.Open All Requests 2.Refresh page |
| Acceptance Criteria | System shall maintain request data integrity |
| Expected Result | Request information should remain accurate after refresh |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, medium, audit |

### CLM-TC-371 — Verify approved requests remain traceable within request inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | High |
| Preconditions | Approved requests available |
| Test Data | Approved Requests |
| Steps | 1.Open All Requests |
| Acceptance Criteria | System shall preserve governance history |
| Expected Result | Approved requests should remain available according to configured lifecycle rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, high, maker-checker |

### CLM-TC-372 — Verify rejected requests remain traceable within request inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | High |
| Preconditions | Rejected requests available |
| Test Data | Rejected Requests |
| Steps | 1.Open All Requests |
| Acceptance Criteria | System shall preserve governance history |
| Expected Result | Rejected requests should remain available according to configured lifecycle rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, high, maker-checker |

### CLM-TC-373 — Verify request inventory supports governance auditability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | High |
| Preconditions | Requests available |
| Test Data | Request Dataset |
| Steps | 1.Review All Requests inventory |
| Acceptance Criteria | System shall maintain end-to-end request visibility |
| Expected Result | Request inventory should provide sufficient traceability for governance review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, high, audit |

### CLM-TC-374 — Verify My Requests page is accessible from governance module

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - My Requests |
| Priority | High |
| Preconditions | User has submitted requests |
| Test Data | N/A |
| Steps | 1.Navigate to My Requests |
| Acceptance Criteria | System shall provide user-specific request visibility |
| Expected Result | My Requests page should open successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-my-requests, high, functional |

### CLM-TC-375 — Verify only requests created by logged-in user are displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - My Requests |
| Priority | High |
| Preconditions | User has submitted requests |
| Test Data | Current User Requests |
| Steps | 1.Open My Requests |
| Acceptance Criteria | System shall provide user-level request segregation |
| Expected Result | Only requests created by the logged-in user should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-my-requests, high, functional |

### CLM-TC-376 — Verify requests submitted from different workflows are displayed in My Requests

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - My Requests |
| Priority | High |
| Preconditions | User has created multiple request types |
| Test Data | Mixed User Requests |
| Steps | 1.Open My Requests |
| Acceptance Criteria | System shall consolidate user activities |
| Expected Result | All requests submitted by the user should be visible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-my-requests, high, maker-checker |

### CLM-TC-377 — Verify request status is visible within My Requests

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - My Requests |
| Priority | High |
| Preconditions | User requests available |
| Test Data | User Requests |
| Steps | 1.Open My Requests |
| Acceptance Criteria | System shall provide request progress visibility |
| Expected Result | Request status should be displayed for each request |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-my-requests, high, functional |

### CLM-TC-378 — Verify newly submitted request appears in My Requests inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - My Requests |
| Priority | High |
| Preconditions | New request submitted by current user |
| Test Data | New User Request |
| Steps | 1.Submit request 2.Open My Requests |
| Acceptance Criteria | System shall update user request visibility |
| Expected Result | Newly submitted request should appear in My Requests |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-my-requests, high, functional |

### CLM-TC-379 — Verify approved user request reflects updated status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - My Requests |
| Priority | Medium |
| Preconditions | Approved request exists |
| Test Data | Approved User Request |
| Steps | 1.Open My Requests |
| Acceptance Criteria | System shall maintain lifecycle visibility |
| Expected Result | Request should display approved status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-my-requests, medium, maker-checker |

### CLM-TC-380 — Verify rejected user request reflects updated status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - My Requests |
| Priority | Medium |
| Preconditions | Rejected request exists |
| Test Data | Rejected User Request |
| Steps | 1.Open My Requests |
| Acceptance Criteria | System shall maintain lifecycle visibility |
| Expected Result | Request should display rejected status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-my-requests, medium, maker-checker |

### CLM-TC-381 — Verify My Requests inventory remains accurate after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - My Requests |
| Priority | Medium |
| Preconditions | User requests available |
| Test Data | User Requests |
| Steps | 1.Open My Requests 2.Refresh page |
| Acceptance Criteria | System shall preserve request integrity |
| Expected Result | Request information should remain accurate and consistent |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-my-requests, medium, audit |

### CLM-TC-382 — Verify user can open detailed view of governance request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | High |
| Preconditions | Request available in inventory |
| Test Data | Request Data |
| Steps | 1.Open request from All Requests |
| Acceptance Criteria | System shall provide detailed request review capability |
| Expected Result | Request Details page should open successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, high, functional |

### CLM-TC-383 — Verify Request Details page displays request identification information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | High |
| Preconditions | Request details available |
| Test Data | Request Data |
| Steps | 1.Open Request Details |
| Acceptance Criteria | System shall provide request traceability |
| Expected Result | Request Details should display request identification information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, high, functional |

### CLM-TC-384 — Verify Request Details page displays submitted business data

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | High |
| Preconditions | Request available |
| Test Data | Request Data |
| Steps | 1.Open Request Details |
| Acceptance Criteria | System shall allow review of submitted information |
| Expected Result | All submitted information should be available for review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, high, functional |

### CLM-TC-385 — Verify Request Details page displays request creator information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | High |
| Preconditions | Request available |
| Test Data | Request Data |
| Steps | 1.Open Request Details |
| Acceptance Criteria | System shall support accountability and governance |
| Expected Result | Maker information should be displayed accurately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, high, functional |

### CLM-TC-386 — Verify Request Details page displays request submission information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | High |
| Preconditions | Request available |
| Test Data | Request Data |
| Steps | 1.Open Request Details |
| Acceptance Criteria | System shall provide lifecycle traceability |
| Expected Result | Request submission details should be displayed accurately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, high, functional |

### CLM-TC-387 — Verify Request Details page displays current request status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | High |
| Preconditions | Request available |
| Test Data | Request Data |
| Steps | 1.Open Request Details |
| Acceptance Criteria | System shall provide workflow visibility |
| Expected Result | Request status should reflect current workflow state |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, high, maker-checker |

### CLM-TC-388 — Verify Request Details page displays complete information required for approval decision

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | High |
| Preconditions | Request pending approval |
| Test Data | Pending Approval Request |
| Steps | 1.Open Request Details |
| Acceptance Criteria | System shall support checker review |
| Expected Result | Request Details should contain sufficient information for approval or rejection review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, high, rbac, security |

### CLM-TC-389 — Verify approved request details remain available for audit review

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | Medium |
| Preconditions | Approved request available |
| Test Data | Approved Request |
| Steps | 1.Open Request Details |
| Acceptance Criteria | System shall preserve governance traceability |
| Expected Result | Approved request information should remain accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, medium, maker-checker |

### CLM-TC-390 — Verify rejected request details remain available for audit review

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | Medium |
| Preconditions | Rejected request available |
| Test Data | Rejected Request |
| Steps | 1.Open Request Details |
| Acceptance Criteria | System shall preserve governance traceability |
| Expected Result | Rejected request information should remain accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, medium, maker-checker |

### CLM-TC-391 — Verify Request Details maintains complete governance traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | High |
| Preconditions | Request available |
| Test Data | Request Data |
| Steps | 1.Open Request Details |
| Acceptance Criteria | System shall provide end-to-end visibility of request lifecycle |
| Expected Result | Request Details should provide complete traceability of governance activity |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, high, functional |

### CLM-TC-392 — Verify checker can access pending approval requests from governance queue

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | High |
| Preconditions | User logged in with checker privileges |
| Test Data | Pending Approval Request |
| Steps | 1.Open All Requests 2.Locate Pending Approval request |
| Acceptance Criteria | System shall provide review access to pending requests |
| Expected Result | Checker should be able to access pending request details successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, high, rbac, security |

### CLM-TC-393 — Verify checker can review complete request information before approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | High |
| Preconditions | Pending Approval request available |
| Test Data | Request Data |
| Steps | 1.Open Request Details 2.Review submitted information |
| Acceptance Criteria | System shall provide sufficient information for governance decision |
| Expected Result | Request details should contain complete information required for approval review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, high, rbac, security |

### CLM-TC-394 — Verify checker can approve eligible governance request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | High |
| Preconditions | Pending Approval request available |
| Test Data | Pending Approval Request |
| Steps | 1.Open request 2.Perform approval action |
| Acceptance Criteria | System shall support approval workflow execution |
| Expected Result | Request should be approved successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, high, rbac, security |

### CLM-TC-395 — Verify approved request status is updated appropriately

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | High |
| Preconditions | Request approved |
| Test Data | Approved Request |
| Steps | 1.Open approved request |
| Acceptance Criteria | System shall maintain workflow lifecycle integrity |
| Expected Result | Request status should reflect approved state |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, high, maker-checker |

### CLM-TC-396 — Verify approved request is removed from pending approval queue

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | High |
| Preconditions | Request approved |
| Test Data | Approved Request |
| Steps | 1.Approve request 2.Review pending queue |
| Acceptance Criteria | System shall prevent duplicate processing |
| Expected Result | Approved request should no longer appear in pending approval inventory |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, high, maker-checker |

### CLM-TC-397 — Verify approved business object reflects requested changes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | High |
| Preconditions | Request approved |
| Test Data | Approved Request |
| Steps | 1.Approve request 2.Verify target object |
| Acceptance Criteria | System shall execute approved governance action |
| Expected Result | Requested changes should be applied successfully after approval |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, high, maker-checker |

### CLM-TC-398 — Verify approval action captures checker accountability information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | High |
| Preconditions | Request approved |
| Test Data | Approved Request |
| Steps | 1.Approve request 2.Review metadata |
| Acceptance Criteria | System shall maintain governance traceability |
| Expected Result | Checker information should be recorded successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, high, rbac, security |

### CLM-TC-399 — Verify approval action captures approval timestamp

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | High |
| Preconditions | Request approved |
| Test Data | Approved Request |
| Steps | 1.Approve request 2.Review request details |
| Acceptance Criteria | System shall maintain audit history |
| Expected Result | Approval date and time should be recorded successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, high, maker-checker |

### CLM-TC-400 — Verify approved request remains available for audit review

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | Medium |
| Preconditions | Request approved |
| Test Data | Approved Request |
| Steps | 1.Open approved request |
| Acceptance Criteria | System shall preserve governance history |
| Expected Result | Approved request should remain available according to governance retention rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, medium, maker-checker |

### CLM-TC-401 — Verify approval workflow maintains complete governance traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | High |
| Preconditions | Request approved |
| Test Data | Approved Request |
| Steps | 1.Review request lifecycle |
| Acceptance Criteria | System shall provide end-to-end approval visibility |
| Expected Result | Request should contain complete approval traceability information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, high, maker-checker |

### CLM-TC-402 — Verify checker can reject pending governance request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Rejection Workflow |
| Priority | High |
| Preconditions | Pending Approval request available |
| Test Data | Pending Approval Request |
| Steps | 1.Open request 2.Perform rejection action |
| Acceptance Criteria | System shall support rejection workflow execution |
| Expected Result | Request should be rejected successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-rejection-workflow, high, rbac, security |

### CLM-TC-403 — Verify rejected request status is updated appropriately

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Rejection Workflow |
| Priority | High |
| Preconditions | Request rejected |
| Test Data | Rejected Request |
| Steps | 1.Open rejected request |
| Acceptance Criteria | System shall maintain workflow lifecycle integrity |
| Expected Result | Request status should reflect rejected state |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-rejection-workflow, high, maker-checker |

### CLM-TC-404 — Verify rejected request is removed from pending approval queue

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Rejection Workflow |
| Priority | High |
| Preconditions | Request rejected |
| Test Data | Rejected Request |
| Steps | 1.Reject request 2.Review pending queue |
| Acceptance Criteria | System shall prevent duplicate processing |
| Expected Result | Rejected request should no longer appear in pending approval inventory |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-rejection-workflow, high, maker-checker |

### CLM-TC-405 — Verify rejected business object does not reflect requested changes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Rejection Workflow |
| Priority | High |
| Preconditions | Request rejected |
| Test Data | Rejected Request |
| Steps | 1.Reject request 2.Verify target object |
| Acceptance Criteria | System shall prevent execution of rejected actions |
| Expected Result | Requested changes should not be applied after rejection |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-rejection-workflow, high, maker-checker |

### CLM-TC-406 — Verify rejection action captures checker accountability information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Rejection Workflow |
| Priority | High |
| Preconditions | Request rejected |
| Test Data | Rejected Request |
| Steps | 1.Reject request 2.Review request metadata |
| Acceptance Criteria | System shall maintain governance traceability |
| Expected Result | Checker information should be recorded successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-rejection-workflow, high, rbac, security |

### CLM-TC-407 — Verify rejection action captures rejection timestamp

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Rejection Workflow |
| Priority | Medium |
| Preconditions | Request rejected |
| Test Data | Rejected Request |
| Steps | 1.Reject request 2.Review request details |
| Acceptance Criteria | System shall maintain audit history |
| Expected Result | Rejection date and time should be recorded successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-rejection-workflow, medium, maker-checker |

### CLM-TC-408 — Verify rejected request remains available for governance review

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Rejection Workflow |
| Priority | Medium |
| Preconditions | Request rejected |
| Test Data | Rejected Request |
| Steps | 1.Open rejected request |
| Acceptance Criteria | System shall preserve workflow history |
| Expected Result | Rejected request should remain available for future review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-rejection-workflow, medium, maker-checker |

### CLM-TC-409 — Verify rejection workflow maintains complete governance traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Rejection Workflow |
| Priority | High |
| Preconditions | Request rejected |
| Test Data | Rejected Request |
| Steps | 1.Review request lifecycle |
| Acceptance Criteria | System shall provide end-to-end rejection visibility |
| Expected Result | Request should contain complete rejection traceability information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-rejection-workflow, high, maker-checker |

### CLM-TC-410 — Verify maker identity is associated with submitted request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Segregation Of Duties |
| Priority | High |
| Preconditions | Request submitted |
| Test Data | Submitted Request |
| Steps | 1.Open request details |
| Acceptance Criteria | System shall maintain creator accountability |
| Expected Result | Request should display maker information accurately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-segregation-of-duties, high, rbac, security |

### CLM-TC-411 — Verify checker identity is associated with approved request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Segregation Of Duties |
| Priority | High |
| Preconditions | Request approved |
| Test Data | Approved Request |
| Steps | 1.Open approved request |
| Acceptance Criteria | System shall maintain approver accountability |
| Expected Result | Request should display checker information accurately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-segregation-of-duties, high, rbac, security |

### CLM-TC-412 — Verify request lifecycle preserves maker and checker traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Segregation Of Duties |
| Priority | High |
| Preconditions | Request processed |
| Test Data | Processed Request |
| Steps | 1.Open processed request |
| Acceptance Criteria | System shall maintain governance accountability |
| Expected Result | Request should display complete maker-checker traceability |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-segregation-of-duties, high, rbac, security |

### CLM-TC-413 — Verify governance workflow records independent review activity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Segregation Of Duties |
| Priority | High |
| Preconditions | Request approved or rejected |
| Test Data | Processed Request |
| Steps | 1.Open processed request |
| Acceptance Criteria | System shall maintain approval evidence |
| Expected Result | Request history should contain evidence of governance review activity |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-segregation-of-duties, high, maker-checker |

### CLM-TC-414 — Verify maker details remain unchanged after request processing

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Segregation Of Duties |
| Priority | Medium |
| Preconditions | Request processed |
| Test Data | Processed Request |
| Steps | 1.Review maker information |
| Acceptance Criteria | System shall preserve creator accountability |
| Expected Result | Maker information should remain unchanged after workflow completion |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-segregation-of-duties, medium, rbac, security |

### CLM-TC-415 — Verify checker details remain associated with final decision

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Segregation Of Duties |
| Priority | Medium |
| Preconditions | Request processed |
| Test Data | Processed Request |
| Steps | 1.Review checker information |
| Acceptance Criteria | System shall preserve approver accountability |
| Expected Result | Checker information should remain associated with final workflow decision |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-segregation-of-duties, medium, rbac, security |

### CLM-TC-416 — Verify processed request provides complete accountability trail

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Segregation Of Duties |
| Priority | High |
| Preconditions | Request processed |
| Test Data | Processed Request |
| Steps | 1.Open request details |
| Acceptance Criteria | System shall support compliance investigations |
| Expected Result | Request should provide complete accountability information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-segregation-of-duties, high, functional |

### CLM-TC-417 — Verify governance workflow supports audit and regulatory review requirements

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Segregation Of Duties |
| Priority | High |
| Preconditions | Request processed |
| Test Data | Processed Request |
| Steps | 1.Review processed request history |
| Acceptance Criteria | System shall maintain compliance traceability |
| Expected Result | Request should provide sufficient accountability evidence for governance review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-segregation-of-duties, high, maker-checker |

### CLM-TC-418 — Verify request creation timestamp is captured for governance requests

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - SLA Validation |
| Priority | High |
| Preconditions | Request submitted |
| Test Data | Submitted Request |
| Steps | 1.Submit request 2.Open request details |
| Acceptance Criteria | System shall record request initiation time |
| Expected Result | Request creation timestamp should be available |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-sla-validation, high, functional |

### CLM-TC-419 — Verify request processing timestamps are captured during governance workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - SLA Validation |
| Priority | High |
| Preconditions | Request processed |
| Test Data | Processed Request |
| Steps | 1.Process request 2.Open request details |
| Acceptance Criteria | System shall maintain workflow timing traceability |
| Expected Result | Relevant workflow timestamps should be available |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-sla-validation, high, maker-checker |

### CLM-TC-420 — Verify request lifecycle provides chronological workflow visibility

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - SLA Validation |
| Priority | Medium |
| Preconditions | Request processed |
| Test Data | Processed Request |
| Steps | 1.Open processed request |
| Acceptance Criteria | System shall support timing-based governance review |
| Expected Result | Request lifecycle should display chronological workflow progression |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-sla-validation, medium, maker-checker |

### CLM-TC-421 — Verify request timing information remains available after approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - SLA Validation |
| Priority | Medium |
| Preconditions | Approved request available |
| Test Data | Approved Request |
| Steps | 1.Open approved request |
| Acceptance Criteria | System shall preserve timing traceability |
| Expected Result | Timing information should remain available |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-sla-validation, medium, maker-checker |

### CLM-TC-422 — Verify request timing information remains available after rejection

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - SLA Validation |
| Priority | Medium |
| Preconditions | Rejected request available |
| Test Data | Rejected Request |
| Steps | 1.Open rejected request |
| Acceptance Criteria | System shall preserve timing traceability |
| Expected Result | Timing information should remain available |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-sla-validation, medium, maker-checker |

### CLM-TC-423 — Verify governance workflow records duration-related information when available

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - SLA Validation |
| Priority | Medium |
| Preconditions | Processed request available |
| Test Data | Processed Request |
| Steps | 1.Open processed request |
| Acceptance Criteria | System shall support workflow monitoring |
| Expected Result | Duration-related information should be displayed according to implementation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-sla-validation, medium, maker-checker |

### CLM-TC-424 — Verify workflow timing information remains accurate across request lifecycle

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - SLA Validation |
| Priority | High |
| Preconditions | Request processed |
| Test Data | Processed Request |
| Steps | 1.Review workflow timestamps |
| Acceptance Criteria | System shall maintain timing data integrity |
| Expected Result | Timing information should remain consistent and accurate |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-sla-validation, high, maker-checker |

### CLM-TC-425 — Verify workflow timing information supports governance and audit review

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - SLA Validation |
| Priority | High |
| Preconditions | Request processed |
| Test Data | Processed Request |
| Steps | 1.Review request lifecycle details |
| Acceptance Criteria | System shall provide traceable workflow timing evidence |
| Expected Result | Request should provide sufficient timing traceability for governance review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-sla-validation, high, maker-checker |

### CLM-TC-426 — Verify Audit page is accessible from Custom List Manager navigation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | High |
| Preconditions | User has access to Audit module |
| Test Data | N/A |
| Steps | 1.Navigate to Custom List Manager 2.Open Audit page |
| Acceptance Criteria | System shall provide access to audit and compliance activity records |
| Expected Result | Audit page should open successfully displaying available audit records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, high, audit |

### CLM-TC-427 — Verify audit listing displays recorded governance activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Audit Dataset |
| Steps | 1.Open Audit page |
| Acceptance Criteria | System shall provide visibility of tracked system activities |
| Expected Result | Audit listing should display recorded governance activities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, high, audit |

### CLM-TC-428 — Verify audit listing displays sufficient information to identify audited events

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Audit Dataset |
| Steps | 1.Review audit listing |
| Acceptance Criteria | System shall support activity traceability |
| Expected Result | Audit records should contain sufficient information for activity identification |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, high, audit |

### CLM-TC-429 — Verify onboarding activities are captured within audit listing

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | High |
| Preconditions | Entity onboarding completed |
| Test Data | Entity Onboarding Event |
| Steps | 1.Open Audit page |
| Acceptance Criteria | System shall maintain onboarding audit trail |
| Expected Result | Entity onboarding activity should be available in audit listing |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, high, audit |

### CLM-TC-430 — Verify custom list lifecycle activities are captured within audit listing

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | Custom list activities should be available in audit listing |
| Preconditions | List creation/update activity completed |
| Test Data | High |
| Steps | List Governance Event |
| Acceptance Criteria | System shall maintain list management audit trail |
| Expected Result |  |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, custom list activities should be available in audit listing, audit |

### CLM-TC-431 — Verify bulk upload activities are captured within audit listing

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | High |
| Preconditions | Bulk upload activity completed |
| Test Data | Bulk Upload Event |
| Steps | 1.Open Audit page |
| Acceptance Criteria | System shall maintain bulk onboarding audit trail |
| Expected Result | Bulk upload activity should be available in audit listing |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, high, bulk-upload |

### CLM-TC-432 — Verify approval and rejection activities are captured within audit listing

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | High |
| Preconditions | Approval/Rejection completed |
| Test Data | Governance Event |
| Steps | 1.Open Audit page |
| Acceptance Criteria | System shall maintain governance decision audit trail |
| Expected Result | Approval and rejection activities should be available in audit listing |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, high, maker-checker |

### CLM-TC-433 — Verify audit listing displays activities in chronological order

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | Medium |
| Preconditions | Audit records available |
| Test Data | Audit Dataset |
| Steps | 1.Open Audit page 2.Review activity sequence |
| Acceptance Criteria | System shall support timeline-based investigation |
| Expected Result | Audit records should be displayed in chronological order according to implementation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, medium, audit |

### CLM-TC-434 — Verify newly generated activity appears in audit listing

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | High |
| Preconditions | New activity generated |
| Test Data | New Audit Event |
| Steps | 1.Perform auditable action 2.Open Audit page |
| Acceptance Criteria | System shall update audit inventory dynamically |
| Expected Result | New activity should be visible in audit listing |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, high, audit |

### CLM-TC-435 — Verify audit listing remains accurate after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | Medium |
| Preconditions | Audit records available |
| Test Data | Audit Dataset |
| Steps | 1.Open Audit page 2.Refresh browser |
| Acceptance Criteria | System shall maintain audit data integrity |
| Expected Result | Audit records should remain accurate and consistent after refresh |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, medium, audit |

### CLM-TC-436 — Verify audit search control is available

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Search |
| Priority | High |
| Preconditions | Audit page accessible |
| Test Data | N/A |
| Steps | 1.Open Audit page |
| Acceptance Criteria | System shall provide search capability for audit records |
| Expected Result | Search functionality should be visible and accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-search, high, audit |

### CLM-TC-437 — Verify audit search returns matching audit records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Search |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Known Audit Value |
| Steps | 1.Enter searchable value 2.Execute search |
| Acceptance Criteria | System shall support activity retrieval using search criteria |
| Expected Result | Matching audit records should be displayed successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-search, high, screening-matching |

### CLM-TC-438 — Verify partial search returns relevant audit activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Search |
| Priority | Medium |
| Preconditions | Audit records available |
| Test Data | Partial Audit Value |
| Steps | 1.Enter partial search value |
| Acceptance Criteria | System shall support flexible audit retrieval |
| Expected Result | Relevant audit records should be returned |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-search, medium, audit |

### CLM-TC-439 — Verify audit search result accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Search |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Known Audit Value |
| Steps | 1.Perform search 2.Validate results |
| Acceptance Criteria | System shall return only relevant audit records |
| Expected Result | Displayed records should satisfy entered search criteria |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-search, high, audit |

### CLM-TC-440 — Verify search with non-existing value returns no matching records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Search |
| Priority | Medium |
| Preconditions | Audit records available |
| Test Data | XYZ_INVALID_AUDIT |
| Steps | 1.Search using invalid value |
| Acceptance Criteria | System shall handle no-result scenarios appropriately |
| Expected Result | System should display no matching records message or equivalent behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-search, medium, screening-matching |

### CLM-TC-441 — Verify audit search supports retrieval of recently generated activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Search |
| Priority | Medium |
| Preconditions | Recent activity available |
| Test Data | Recent Audit Event |
| Steps | 1.Search for recent audit activity |
| Acceptance Criteria | System shall allow investigation of new events |
| Expected Result | Recent matching activity should be returned successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-search, medium, audit |

### CLM-TC-442 — Verify search results remain consistent after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Search |
| Priority | Medium |
| Preconditions | Search results available |
| Test Data | Search Criteria |
| Steps | 1.Perform search 2.Refresh page |
| Acceptance Criteria | System shall maintain search result integrity |
| Expected Result | System should maintain consistent search behavior according to implementation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-search, medium, audit |

### CLM-TC-443 — Verify search capability supports audit investigation activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Search |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Audit Dataset |
| Steps | 1.Perform audit search |
| Acceptance Criteria | System shall assist compliance review and investigation |
| Expected Result | Search functionality should allow efficient retrieval of audit evidence |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-search, high, audit |

### CLM-TC-444 — Verify audit filter controls are available

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Filters |
| Priority | High |
| Preconditions | Audit page accessible |
| Test Data | N/A |
| Steps | 1.Open Audit page |
| Acceptance Criteria | System shall provide filtering capability for audit records |
| Expected Result | Available filter controls should be visible and accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-filters, high, audit |

### CLM-TC-445 — Verify audit records can be filtered using available filter criteria

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Filters |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Filter Value |
| Steps | 1.Apply available filter |
| Acceptance Criteria | System shall support filtered audit retrieval |
| Expected Result | Audit records matching selected filter criteria should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-filters, high, audit |

### CLM-TC-446 — Verify filter results display only matching audit records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Filters |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Filter Value |
| Steps | 1.Apply filter 2.Review results |
| Acceptance Criteria | System shall maintain filter result accuracy |
| Expected Result | Displayed records should satisfy selected filter criteria |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-filters, high, screening-matching |

### CLM-TC-447 — Verify multiple filters can be applied together when supported

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Filters |
| Priority | Medium |
| Preconditions | Audit records available |
| Test Data | Combined Filters |
| Steps | 1.Apply multiple filters |
| Acceptance Criteria | System shall support refined audit investigation |
| Expected Result | Audit records should satisfy all applied filter criteria |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-filters, medium, audit |

### CLM-TC-448 — Verify audit filters can retrieve governance-related activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Filters |
| Priority | High |
| Preconditions | Governance audit records available |
| Test Data | Governance Events |
| Steps | 1.Apply governance-related filters |
| Acceptance Criteria | System shall support governance investigations |
| Expected Result | Relevant governance activities should be returned |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-filters, high, audit |

### CLM-TC-449 — Verify audit filters can retrieve onboarding-related activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Filters |
| Priority | Medium |
| Preconditions | Onboarding audit records available |
| Test Data | Onboarding Events |
| Steps | 1.Apply onboarding-related filters |
| Acceptance Criteria | System shall support onboarding investigations |
| Expected Result | Relevant onboarding activities should be returned |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-filters, medium, audit |

### CLM-TC-450 — Verify filter reset functionality restores complete audit inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Filters |
| Priority | High |
| Preconditions | Filters applied |
| Test Data | N/A |
| Steps | 1.Apply filters 2.Reset filters |
| Acceptance Criteria | System shall allow users to clear applied criteria |
| Expected Result | All filters should be cleared and complete audit inventory displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-filters, high, audit |

### CLM-TC-451 — Verify audit filtering supports compliance investigation requirements

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Filters |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Audit Dataset |
| Steps | 1.Perform filter-based investigation |
| Acceptance Criteria | System shall assist audit and regulatory review activities |
| Expected Result | Filtering functionality should enable efficient retrieval of compliance evidence |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-filters, high, audit |

### CLM-TC-452 — Verify date range filter controls are available on Audit page

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Date Range |
| Priority | High |
| Preconditions | Audit page accessible |
| Test Data | N/A |
| Steps | 1.Open Audit page |
| Acceptance Criteria | System shall provide date-based audit retrieval capability |
| Expected Result | Date range filter controls should be visible and accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-date-range, high, audit |

### CLM-TC-453 — Verify audit records can be retrieved using valid date range criteria

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Date Range |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Valid Date Range |
| Steps | 1.Select valid From Date and To Date 2.Apply filter |
| Acceptance Criteria | System shall support date-based audit investigations |
| Expected Result | Audit records within the selected date range should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-date-range, high, audit |

### CLM-TC-454 — Verify date range results contain only activities within selected period

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Date Range |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Valid Date Range |
| Steps | 1.Apply date range filter 2.Review results |
| Acceptance Criteria | System shall maintain date filter accuracy |
| Expected Result | Displayed records should belong to the selected date range only |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-date-range, high, functional |

### CLM-TC-455 — Verify audit activities generated on boundary dates are included appropriately

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Date Range |
| Priority | Medium |
| Preconditions | Audit records exist on selected dates |
| Test Data | Boundary Date Range |
| Steps | 1.Apply date range including known boundary dates |
| Acceptance Criteria | System shall process boundary dates consistently |
| Expected Result | Activities falling within configured date range boundaries should be returned |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-date-range, medium, audit |

### CLM-TC-456 — Verify date range with no matching activities is handled appropriately

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Date Range |
| Priority | Medium |
| Preconditions | Audit page accessible |
| Test Data | No Activity Date Range |
| Steps | 1.Select date range with no audit activity |
| Acceptance Criteria | System shall support no-result scenarios |
| Expected Result | System should display no matching records message or equivalent behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-date-range, medium, screening-matching |

### CLM-TC-457 — Verify date range filtering can retrieve recently generated audit activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Date Range |
| Priority | Medium |
| Preconditions | Recent audit activities available |
| Test Data | Recent Activity Range |
| Steps | 1.Generate activity 2.Apply appropriate date range |
| Acceptance Criteria | System shall support recent activity investigation |
| Expected Result | Recently generated audit activities should be retrievable |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-date-range, medium, audit |

### CLM-TC-458 — Verify date range filter can be cleared successfully

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Date Range |
| Priority | High |
| Preconditions | Date range filter applied |
| Test Data | N/A |
| Steps | 1.Apply date range filter 2.Clear filter |
| Acceptance Criteria | System shall allow users to restore complete audit inventory |
| Expected Result | Date range criteria should be removed and complete audit inventory displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-date-range, high, audit |

### CLM-TC-459 — Verify date range filtering supports compliance investigation activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Date Range |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Audit Dataset |
| Steps | 1.Perform date-based audit investigation |
| Acceptance Criteria | System shall provide chronological audit analysis capability |
| Expected Result | Date range filtering should enable efficient retrieval of historical audit evidence |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-date-range, high, audit |

### CLM-TC-460 — Verify user can open detailed view of audit event

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Event Details |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Audit Event |
| Steps | 1.Open Audit page 2.Select audit event |
| Acceptance Criteria | System shall provide detailed audit event visibility |
| Expected Result | Event Details page should open successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-event-details, high, audit |

### CLM-TC-461 — Verify Event Details displays sufficient information to identify audited activity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Event Details |
| Priority | High |
| Preconditions | Audit event available |
| Test Data | Audit Event |
| Steps | 1.Open Event Details |
| Acceptance Criteria | System shall support activity traceability |
| Expected Result | Event Details should clearly identify the audited activity |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-event-details, high, audit |

### CLM-TC-462 — Verify Event Details displays associated user information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Event Details |
| Priority | High |
| Preconditions | Audit event available |
| Test Data | Audit Event |
| Steps | 1.Open Event Details |
| Acceptance Criteria | System shall support accountability and governance review |
| Expected Result | User information associated with the audited activity should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-event-details, high, audit |

### CLM-TC-463 — Verify Event Details displays activity timing information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Event Details |
| Priority | High |
| Preconditions | Audit event available |
| Test Data | Audit Event |
| Steps | 1.Open Event Details |
| Acceptance Criteria | System shall provide chronological traceability |
| Expected Result | Event timing information should be displayed accurately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-event-details, high, audit |

### CLM-TC-464 — Verify Event Details displays activity outcome information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Event Details |
| Priority | Medium |
| Preconditions | Audit event available |
| Test Data | Audit Event |
| Steps | 1.Open Event Details |
| Acceptance Criteria | System shall support governance investigations |
| Expected Result | Event Details should display available activity outcome information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-event-details, medium, audit |

### CLM-TC-465 — Verify Event Details remain accessible for approved governance activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Event Details |
| Priority | Medium |
| Preconditions | Approved activity available |
| Test Data | Approved Event |
| Steps | 1.Open Event Details |
| Acceptance Criteria | System shall preserve audit evidence |
| Expected Result | Event Details should remain accessible for approved activities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-event-details, medium, maker-checker |

### CLM-TC-466 — Verify Event Details remain accessible for rejected governance activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Event Details |
| Priority | Medium |
| Preconditions | Rejected activity available |
| Test Data | Rejected Event |
| Steps | 1.Open Event Details |
| Acceptance Criteria | System shall preserve audit evidence |
| Expected Result | Event Details should remain accessible for rejected activities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-event-details, medium, maker-checker |

### CLM-TC-467 — Verify Event Details provide sufficient information for compliance investigations

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Event Details |
| Priority | High |
| Preconditions | Audit event available |
| Test Data | Audit Event |
| Steps | 1.Open Event Details |
| Acceptance Criteria | System shall support audit and regulatory review |
| Expected Result | Event Details should provide complete activity traceability information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-event-details, high, audit |

### CLM-TC-468 — Verify audit export option is available

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Export |
| Priority | High |
| Preconditions | Audit page accessible |
| Test Data | N/A |
| Steps | 1.Open Audit page |
| Acceptance Criteria | System shall provide audit evidence extraction capability |
| Expected Result | Export option should be visible and accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-export, high, export |

### CLM-TC-469 — Verify audit records can be exported successfully

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Export |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Audit Dataset |
| Steps | 1.Perform export operation |
| Acceptance Criteria | System shall support export of audit information |
| Expected Result | Audit export should complete successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-export, high, export |

### CLM-TC-470 — Verify exported audit data matches displayed audit inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Export |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Audit Dataset |
| Steps | 1.Export audit records 2.Compare exported data |
| Acceptance Criteria | System shall maintain export accuracy |
| Expected Result | Exported data should match displayed audit information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-export, high, export |

### CLM-TC-471 — Verify export supports filtered audit results

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Export |
| Priority | High |
| Preconditions | Filtered audit results available |
| Test Data | Filtered Audit Dataset |
| Steps | 1.Apply filters 2.Export results |
| Acceptance Criteria | System shall preserve applied investigation criteria |
| Expected Result | Exported output should reflect applied filters |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-export, high, export |

### CLM-TC-472 — Verify export supports date-range based audit investigations

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Export |
| Priority | Medium |
| Preconditions | Date range filter applied |
| Test Data | Date Filtered Audit Data |
| Steps | 1.Apply date range 2.Export results |
| Acceptance Criteria | System shall support extraction of targeted audit evidence |
| Expected Result | Exported output should reflect selected date range |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-export, medium, export |

### CLM-TC-473 — Verify exported audit information remains readable and usable

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Export |
| Priority | Medium |
| Preconditions | Export completed |
| Test Data | Exported Audit File |
| Steps | 1.Open exported file |
| Acceptance Criteria | System shall provide consumable audit evidence |
| Expected Result | Exported audit data should be readable and usable for investigation purposes |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-export, medium, export |

### CLM-TC-474 — Verify export operation does not alter audit records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Export |
| Priority | Medium |
| Preconditions | Audit records available |
| Test Data | Audit Dataset |
| Steps | 1.Export records 2.Verify audit inventory |
| Acceptance Criteria | System shall preserve audit data integrity |
| Expected Result | Export operation should not modify existing audit records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-export, medium, export |

### CLM-TC-475 — Verify audit export supports compliance and regulatory review requirements

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Export |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Audit Dataset |
| Steps | 1.Export audit records |
| Acceptance Criteria | System shall facilitate audit evidence sharing |
| Expected Result | Exported information should provide usable audit evidence for governance review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-export, high, export |

### CLM-TC-476 — Verify audit records remain available after related business object changes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | High |
| Preconditions | Entity/List updated after activity |
| Test Data | Audit Dataset |
| Steps | 1.Perform update 2.Review related audit records |
| Acceptance Criteria | System shall preserve audit evidence |
| Expected Result | Audit records should remain available after business object modifications |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, high, audit |

### CLM-TC-477 — Verify audit records remain available after approval workflow completion

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | High |
| Preconditions | Approved request available |
| Test Data | Approved Governance Event |
| Steps | 1.Complete approval workflow 2.Review audit records |
| Acceptance Criteria | System shall preserve governance history |
| Expected Result | Audit evidence should remain available after workflow completion |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, high, maker-checker |

### CLM-TC-478 — Verify audit records remain available after rejection workflow completion

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | High |
| Preconditions | Rejected request available |
| Test Data | Rejected Governance Event |
| Steps | 1.Complete rejection workflow 2.Review audit records |
| Acceptance Criteria | System shall preserve governance history |
| Expected Result | Audit evidence should remain available after workflow completion |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, high, maker-checker |

### CLM-TC-479 — Verify audit entries remain associated with the correct activity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Audit Event Dataset |
| Steps | 1.Review audit event details |
| Acceptance Criteria | System shall maintain audit traceability |
| Expected Result | Audit entries should remain linked to the corresponding business activity |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, high, audit |

### CLM-TC-480 — Verify audit entries remain associated with the responsible user

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Audit Event Dataset |
| Steps | 1.Review user information |
| Acceptance Criteria | System shall maintain accountability traceability |
| Expected Result | Audit entries should remain associated with the correct user |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, high, audit |

### CLM-TC-481 — Verify audit timestamps remain consistent throughout activity lifecycle

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | Medium |
| Preconditions | Audit records available |
| Test Data | Audit Dataset |
| Steps | 1.Review event timestamps |
| Acceptance Criteria | System shall maintain chronological accuracy |
| Expected Result | Audit timestamps should remain accurate and consistent |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, medium, audit |

### CLM-TC-482 — Verify audit information remains consistent across listing and detail views

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | Medium |
| Preconditions | Audit records available |
| Test Data | Audit Dataset |
| Steps | 1.Compare audit listing and event details |
| Acceptance Criteria | System shall maintain audit data consistency |
| Expected Result | Audit information should remain consistent across views |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, medium, audit |

### CLM-TC-483 — Verify audit records support reconstruction of business activity history

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Activity Lifecycle Dataset |
| Steps | 1.Review related audit events |
| Acceptance Criteria | System shall provide investigation-ready audit evidence |
| Expected Result | Audit trail should allow reconstruction of business activity history |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, high, audit |

### CLM-TC-484 — Verify audit records support governance accountability requirements

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Governance Dataset |
| Steps | 1.Review governance activities |
| Acceptance Criteria | System shall provide evidence of user actions |
| Expected Result | Audit trail should provide accountability evidence for governance activities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, high, audit |

### CLM-TC-485 — Verify audit trail maintains compliance and regulatory traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | Compliance Audit Dataset |
| Steps | 1.Review complete audit lifecycle |
| Acceptance Criteria | System shall preserve complete audit evidence |
| Expected Result | Audit trail should provide complete end-to-end compliance traceability |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, high, audit |

### CLM-TC-486 — Verify TTL information is displayed for entities associated with custom lists configured with a retention period

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Display |
| Priority | High |
| Preconditions | Approved custom list with configured TTL and active entities exists |
| Test Data | Entity with Configured TTL |
| Steps | 1.Navigate to Custom List Manager 2.Open custom list containing active entities 3.Open Entity Grid and review TTL-related columns |
| Acceptance Criteria | System shall display TTL-related information for entities governed by list-level TTL configuration |
| Expected Result | TTL information should be displayed accurately for each entity according to the configured list retention period |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-display, high, ttl |

### CLM-TC-487 — Verify TTL values displayed in Entity Grid remain consistent with entity detail information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Display |
| Priority | High |
| Preconditions | Entity with TTL information available |
| Test Data | Sample Entity |
| Steps | 1.Open Entity Grid 2.Note displayed TTL information 3.Open corresponding Entity Details page |
| Acceptance Criteria | System shall maintain TTL information consistency across application views |
| Expected Result | TTL information displayed in Entity Grid and Entity Details should remain consistent |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-display, high, ttl |

### CLM-TC-488 — Verify TTL information remains visible after entity approval and onboarding completion

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Display |
| Priority | High |
| Preconditions | Approved entity available |
| Test Data | Approved Entity |
| Steps | 1.Approve entity onboarding request 2.Open Entity Grid and Entity Details |
| Acceptance Criteria | System shall preserve lifecycle information after approval |
| Expected Result | TTL information should remain available after onboarding workflow completion |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-display, high, maker-checker |

### CLM-TC-489 — Verify TTL information remains available after entity modification requests are processed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Display |
| Priority | Medium |
| Preconditions | Entity updated through governance workflow |
| Test Data | Modified Entity |
| Steps | 1.Modify entity 2.Complete approval workflow 3.Review TTL information |
| Acceptance Criteria | System shall preserve lifecycle tracking information |
| Expected Result | TTL information should remain available and accurate after approved modifications |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-display, medium, ttl |

### CLM-TC-490 — Verify TTL information remains accurate after page refresh and navigation events

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Display |
| Priority | Medium |
| Preconditions | Entity available with TTL information |
| Test Data | Entity Dataset |
| Steps | 1.Open Entity Grid 2.Note TTL information 3.Refresh page 4.Navigate away and return |
| Acceptance Criteria | System shall maintain lifecycle data integrity |
| Expected Result | TTL information should remain accurate and unchanged |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-display, medium, audit |

### CLM-TC-491 — Verify TTL information supports lifecycle monitoring and governance review activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Display |
| Priority | High |
| Preconditions | Entities available across lifecycle stages |
| Test Data | Entity Dataset |
| Steps | 1.Review TTL information across multiple entities |
| Acceptance Criteria | System shall provide sufficient lifecycle visibility for compliance review |
| Expected Result | TTL information should provide clear visibility of entity lifecycle state and retention status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-display, high, ttl |

### CLM-TC-492 — Verify entity reaches expiry state when configured TTL period is completed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiry |
| Priority | High |
| Preconditions | Entity exists with TTL nearing completion |
| Test Data | Entity Reaching Expiry |
| Steps | 1.Identify entity approaching TTL completion 2.Allow expiry condition to occur 3.Review entity status |
| Acceptance Criteria | System shall apply expiry logic according to configured lifecycle rules |
| Expected Result | Entity should transition to expired lifecycle state according to configured TTL rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiry, high, ttl |

### CLM-TC-493 — Verify expiry status is reflected consistently across entity inventory and details views

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiry |
| Priority | High |
| Preconditions | Expired entity available |
| Test Data | Expired Entity |
| Steps | 1.Open Entity Grid 2.Open Entity Details |
| Acceptance Criteria | System shall maintain lifecycle state consistency |
| Expected Result | Expired status should be displayed consistently across all views |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiry, high, ttl |

### CLM-TC-494 — Verify expired entities remain traceable for governance and audit review

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiry |
| Priority | High |
| Preconditions | Expired entity available |
| Test Data | Expired Entity |
| Steps | 1.Open Entity Details 2.Review entity information |
| Acceptance Criteria | System shall preserve entity traceability after expiry |
| Expected Result | Expired entity should remain available according to configured lifecycle visibility rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiry, high, audit |

### CLM-TC-495 — Verify entity expiry does not impact audit history and governance records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiry |
| Priority | Medium |
| Preconditions | Expired entity with audit activity available |
| Test Data | Expired Entity |
| Steps | 1.Open Audit History 2.Review entity-related records |
| Acceptance Criteria | System shall preserve historical evidence after lifecycle completion |
| Expected Result | Audit records and governance history should remain available after entity expiry |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiry, medium, audit |

### CLM-TC-496 — Verify expiry processing maintains entity lifecycle integrity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiry |
| Priority | High |
| Preconditions | Entity approaching expiry |
| Test Data | Entity Lifecycle Dataset |
| Steps | 1.Monitor lifecycle transition from active to expired |
| Acceptance Criteria | System shall apply expiry logic without creating inconsistent lifecycle states |
| Expected Result | Entity should transition cleanly into expiry state without inconsistent statuses |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiry, high, audit |

### CLM-TC-497 — Verify entities approaching expiry can be identified through lifecycle monitoring information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiring Soon |
| Priority | High |
| Preconditions | Entity exists within configured pre-expiry period |
| Test Data | Entity Nearing Expiry |
| Steps | 1.Open Entity Grid 2.Review lifecycle-related information |
| Acceptance Criteria | System shall provide visibility of entities nearing expiry |
| Expected Result | Entity approaching expiry should be identifiable according to implemented lifecycle rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiring-soon, high, ttl |

### CLM-TC-498 — Verify expiring-soon indication remains consistent across system views

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiring Soon |
| Priority | Medium |
| Preconditions | Entity approaching expiry available |
| Test Data | Entity Nearing Expiry |
| Steps | 1.Open Entity Grid 2.Open Entity Details |
| Acceptance Criteria | System shall maintain lifecycle visibility consistency |
| Expected Result | Expiring-soon indication should remain consistent across available views |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiring-soon, medium, ttl |

### CLM-TC-499 — Verify expiring-soon entities remain available for governance review

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiring Soon |
| Priority | Medium |
| Preconditions | Entity approaching expiry available |
| Test Data | Entity Nearing Expiry |
| Steps | 1.Open entity information |
| Acceptance Criteria | System shall support proactive lifecycle management |
| Expected Result | Entity should remain fully accessible before expiry occurs |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiring-soon, medium, ttl |

### CLM-TC-500 — Verify lifecycle monitoring information updates appropriately as entity approaches expiry

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiring Soon |
| Priority | Medium |
| Preconditions | Entity nearing expiry available |
| Test Data | Entity Nearing Expiry |
| Steps | 1.Review lifecycle information over time |
| Acceptance Criteria | System shall reflect lifecycle progression |
| Expected Result | Lifecycle information should accurately reflect progression toward expiry |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiring-soon, medium, ttl |

### CLM-TC-501 — Verify expiring-soon information supports operational review and remediation activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiring Soon |
| Priority | High |
| Preconditions | Entity nearing expiry available |
| Test Data | Entity Dataset |
| Steps | 1.Review expiring entities |
| Acceptance Criteria | System shall provide actionable lifecycle visibility |
| Expected Result | System should provide sufficient visibility to identify entities approaching expiry |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiring-soon, high, ttl |

### CLM-TC-502 — Verify expired entities display appropriate lifecycle status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expired Status |
| Priority | High |
| Preconditions | Expired entity available |
| Test Data | Expired Entity |
| Steps | 1.Open Entity Grid 2.Review Status column |
| Acceptance Criteria | System shall clearly indicate expired lifecycle state |
| Expected Result | Expired entity should display appropriate expired lifecycle status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expired-status, high, ttl |

### CLM-TC-503 — Verify expired entities remain distinguishable from active entities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expired Status |
| Priority | High |
| Preconditions | Active and expired entities available |
| Test Data | Entity Dataset |
| Steps | 1.Review entity inventory |
| Acceptance Criteria | System shall provide clear lifecycle differentiation |
| Expected Result | Expired entities should be clearly distinguishable from active entities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expired-status, high, ttl |

### CLM-TC-504 — Verify expired status remains consistent after page refresh and navigation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expired Status |
| Priority | Medium |
| Preconditions | Expired entity available |
| Test Data | Expired Entity |
| Steps | 1.Open entity 2.Refresh page 3.Reopen entity |
| Acceptance Criteria | System shall maintain lifecycle integrity |
| Expected Result | Expired status should remain unchanged and accurate |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expired-status, medium, audit |

### CLM-TC-505 — Verify expired entities preserve onboarding and governance information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expired Status |
| Priority | High |
| Preconditions | Expired entity available |
| Test Data | Expired Entity |
| Steps | 1.Open Entity Details |
| Acceptance Criteria | System shall maintain historical traceability |
| Expected Result | Onboarding, governance and audit information should remain available |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expired-status, high, ttl |

### CLM-TC-506 — Verify expired status supports lifecycle governance and compliance review

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expired Status |
| Priority | High |
| Preconditions | Expired entity available |
| Test Data | Expired Entity |
| Steps | 1.Review entity lifecycle information |
| Acceptance Criteria | System shall maintain compliance traceability |
| Expected Result | Expired entity should remain traceable for governance and compliance purposes |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expired-status, high, ttl |

### CLM-TC-507 — Verify expired entities follow configured screening participation rules

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Screening Exclusion |
| Priority | High |
| Preconditions | Expired entity available |
| Test Data | Expired Entity |
| Steps | 1.Review entity lifecycle state 2.Validate screening participation behavior |
| Acceptance Criteria | System shall apply screening eligibility according to entity lifecycle status |
| Expected Result | Entity should participate or be excluded from screening according to configured lifecycle rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-screening-exclusion, high, screening-matching |

### CLM-TC-508 — Verify active entities continue to participate in screening operations

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Screening Exclusion |
| Priority | High |
| Preconditions | Active entity available |
| Test Data | Active Entity |
| Steps | 1.Review active entity status |
| Acceptance Criteria | System shall preserve screening eligibility for active entities |
| Expected Result | Active entities should remain available for screening operations |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-screening-exclusion, high, screening-matching |

### CLM-TC-509 — Verify lifecycle state changes are reflected in screening eligibility behavior

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Screening Exclusion |
| Priority | High |
| Preconditions | Entity transitions between lifecycle states |
| Test Data | Entity Lifecycle Dataset |
| Steps | 1.Change lifecycle state according to configured process 2.Review screening behavior |
| Acceptance Criteria | System shall synchronize lifecycle and screening states |
| Expected Result | Screening eligibility should remain aligned with lifecycle status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-screening-exclusion, high, screening-matching |

### CLM-TC-510 — Verify expired entities remain visible for investigation even when screening eligibility changes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Screening Exclusion |
| Priority | High |
| Preconditions | Expired entity available |
| Test Data | Expired Entity |
| Steps | 1.Open Entity Details |
| Acceptance Criteria | System shall preserve traceability independent of screening participation |
| Expected Result | Entity should remain accessible for investigation and review activities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-screening-exclusion, high, screening-matching |

### CLM-TC-511 — Verify screening eligibility behavior remains consistent across entity inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Screening Exclusion |
| Priority | Medium |
| Preconditions | Multiple entities across lifecycle stages available |
| Test Data | Entity Dataset |
| Steps | 1.Review entity lifecycle states |
| Acceptance Criteria | System shall apply lifecycle rules uniformly |
| Expected Result | Screening participation behavior should remain consistent for entities in similar lifecycle states |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-screening-exclusion, medium, screening-matching |

### CLM-TC-512 — Verify lifecycle-driven screening behavior supports AML governance requirements

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Screening Exclusion |
| Priority | High |
| Preconditions | Entities available across lifecycle stages |
| Test Data | Entity Governance Dataset |
| Steps | 1.Review lifecycle and screening behavior |
| Acceptance Criteria | System shall maintain controlled screening population management |
| Expected Result | Entity lifecycle state should govern screening participation in a traceable and auditable manner |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-screening-exclusion, high, screening-matching |

### CLM-TC-513 — Verify Fuzzy Matching configuration is available during custom list setup

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | High |
| Preconditions | Custom List Create/Edit screen accessible |
| Test Data | N/A |
| Steps | 1.Open Create/Edit Custom List screen 2.Review Matching Configuration section |
| Acceptance Criteria | System shall provide configurable fuzzy matching capability |
| Expected Result | Fuzzy Matching configuration option should be displayed and available for selection |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, high, screening-matching |

### CLM-TC-514 — Verify selected Fuzzy Matching configuration is retained after list creation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | High |
| Preconditions | User creates custom list with Fuzzy Matching enabled |
| Test Data | Custom List with Fuzzy Matching Enabled |
| Steps | 1.Enable Fuzzy Matching 2.Submit list 3.Open list details |
| Acceptance Criteria | System shall preserve matching configuration values |
| Expected Result | Fuzzy Matching configuration should remain saved and visible in list details |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, high, screening-matching |

### CLM-TC-515 — Verify selected Fuzzy Matching configuration is retained after list modification

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | High |
| Preconditions | Existing custom list available |
| Test Data | Modified Custom List |
| Steps | 1.Modify list 2.Save changes 3.Review configuration |
| Acceptance Criteria | System shall preserve matching settings through lifecycle updates |
| Expected Result | Fuzzy Matching configuration should remain accurate after approved updates |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, high, screening-matching |

### CLM-TC-516 — Verify entities belonging to fuzzy-enabled list participate in screening using configured matching behavior

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | High |
| Preconditions | Approved custom list with Fuzzy Matching enabled and onboarded entities available |
| Test Data | Entity Dataset |
| Steps | 1.Configure Fuzzy Matching 2.Complete onboarding workflow 3.Review screening behavior |
| Acceptance Criteria | System shall apply configured matching settings during screening |
| Expected Result | Entities should participate in screening according to configured fuzzy matching settings |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, high, screening-matching |

### CLM-TC-517 — Verify similar-name screening scenarios are processed according to configured fuzzy matching settings

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | High |
| Preconditions | Fuzzy-enabled list available |
| Test Data | Similar Name Dataset |
| Steps | 1.Configure Fuzzy Matching 2.Process screening scenario containing similar names |
| Acceptance Criteria | System shall apply configured matching logic consistently |
| Expected Result | Screening results should reflect configured fuzzy matching behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, high, screening-matching |

### CLM-TC-518 — Verify fuzzy matching configuration remains associated with correct custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | High |
| Preconditions | Multiple custom lists available |
| Test Data | Multiple Custom Lists |
| Steps | 1.Configure different matching settings 2.Review list configurations |
| Acceptance Criteria | System shall isolate matching configuration by list |
| Expected Result | Each list should retain its own matching configuration independently |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, high, screening-matching |

### CLM-TC-519 — Verify fuzzy matching configuration remains intact after entity onboarding activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | Medium |
| Preconditions | Fuzzy-enabled list available |
| Test Data | Entity Dataset |
| Steps | 1.Onboard entities 2.Review matching configuration |
| Acceptance Criteria | System shall preserve matching configuration throughout entity lifecycle |
| Expected Result | Matching configuration should remain unchanged after onboarding activities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, medium, screening-matching |

### CLM-TC-520 — Verify fuzzy matching configuration remains visible in governance and audit records where applicable

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | Medium |
| Preconditions | Matching configuration modified through governance workflow |
| Test Data | Configuration Update Request |
| Steps | 1.Modify matching configuration 2.Review governance records |
| Acceptance Criteria | System shall support configuration traceability |
| Expected Result | Matching configuration changes should remain traceable through available governance records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, medium, screening-matching |

### CLM-TC-521 — Verify fuzzy matching behavior remains consistent across repeated screening executions

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | High |
| Preconditions | Fuzzy-enabled list available |
| Test Data | Screening Dataset |
| Steps | 1.Perform repeated screening activities |
| Acceptance Criteria | System shall apply matching configuration consistently |
| Expected Result | Screening behavior should remain consistent for equivalent matching scenarios |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, high, screening-matching |

### CLM-TC-522 — Verify fuzzy matching configuration supports AML screening objectives

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | High |
| Preconditions | Fuzzy-enabled list available |
| Test Data | Entity Dataset |
| Steps | 1.Review matching behavior across screening activities |
| Acceptance Criteria | System shall provide configurable matching flexibility for screening operations |
| Expected Result | Fuzzy matching configuration should support effective screening of similar entity names |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, high, screening-matching |

### CLM-TC-523 — Verify Multilingual Matching configuration is available during custom list setup

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Multilingual Matching |
| Priority | High |
| Preconditions | Custom List Create/Edit screen accessible |
| Test Data | N/A |
| Steps | 1.Open Create/Edit Custom List screen 2.Review Matching Configuration section |
| Acceptance Criteria | System shall provide multilingual matching capability |
| Expected Result | Multilingual Matching configuration should be displayed and available for selection |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-multilingual-matching, high, screening-matching |

### CLM-TC-524 — Verify selected Multilingual Matching configuration is retained after list creation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Multilingual Matching |
| Priority | High |
| Preconditions | Custom list creation workflow available |
| Test Data | Custom List with Multilingual Matching Enabled |
| Steps | 1.Enable Multilingual Matching 2.Submit list 3.Review list configuration |
| Acceptance Criteria | System shall preserve multilingual matching settings |
| Expected Result | Multilingual Matching configuration should remain saved successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-multilingual-matching, high, screening-matching |

### CLM-TC-525 — Verify selected Multilingual Matching configuration is retained after list modification

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Multilingual Matching |
| Priority | High |
| Preconditions | Existing custom list available |
| Test Data | Modified Custom List |
| Steps | 1.Modify configuration 2.Save changes 3.Review settings |
| Acceptance Criteria | System shall preserve multilingual matching settings after updates |
| Expected Result | Multilingual Matching configuration should remain accurate after updates |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-multilingual-matching, high, screening-matching |

### CLM-TC-526 — Verify multilingual-enabled lists participate in screening using configured matching behavior

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Multilingual Matching |
| Priority | High |
| Preconditions | Multilingual-enabled list available |
| Test Data | Multilingual Entity Dataset |
| Steps | 1.Enable Multilingual Matching 2.Perform screening activity |
| Acceptance Criteria | System shall apply multilingual matching settings during screening |
| Expected Result | Screening activity should apply configured multilingual matching behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-multilingual-matching, high, screening-matching |

### CLM-TC-527 — Verify multilingual entity information can participate in configured screening workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Multilingual Matching |
| Priority | High |
| Preconditions | Multilingual-enabled list available |
| Test Data | Multilingual Entity Data |
| Steps | 1.Onboard multilingual entity information 2.Perform screening activity |
| Acceptance Criteria | System shall support multilingual data processing where configured |
| Expected Result | Multilingual entity information should participate in screening according to configured behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-multilingual-matching, high, screening-matching |

### CLM-TC-528 — Verify multilingual matching configuration remains associated with the correct custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Multilingual Matching |
| Priority | Medium |
| Preconditions | Multiple custom lists available |
| Test Data | Multiple Custom Lists |
| Steps | 1.Configure different matching settings 2.Review list configurations |
| Acceptance Criteria | System shall isolate multilingual settings by list |
| Expected Result | Each custom list should maintain independent multilingual matching settings |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-multilingual-matching, medium, screening-matching |

### CLM-TC-529 — Verify multilingual matching configuration changes remain traceable through governance workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Multilingual Matching |
| Priority | Medium |
| Preconditions | Governance workflow available |
| Test Data | Configuration Update Request |
| Steps | 1.Modify multilingual setting 2.Review governance records |
| Acceptance Criteria | System shall maintain configuration accountability |
| Expected Result | Configuration changes should remain traceable through available governance records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-multilingual-matching, medium, screening-matching |

### CLM-TC-530 — Verify multilingual matching configuration supports AML screening requirements

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Multilingual Matching |
| Priority | High |
| Preconditions | Multilingual-enabled list available |
| Test Data | Multilingual Dataset |
| Steps | 1.Review multilingual screening behavior |
| Acceptance Criteria | System shall support multilingual screening scenarios |
| Expected Result | Multilingual matching capability should support screening of multilingual entity information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-multilingual-matching, high, screening-matching |

### CLM-TC-531 — Verify onboarded entity names are available for screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | High |
| Preconditions | Approved entities available |
| Test Data | Entity Dataset |
| Steps | 1.Open approved entities 2.Review screening participation |
| Acceptance Criteria | System shall utilize onboarded identity information during screening |
| Expected Result | Onboarded entity names should be available for screening operations |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, high, screening-matching |

### CLM-TC-532 — Verify primary entity name participates in configured matching workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | High |
| Preconditions | Approved entity available |
| Test Data | Entity Name Dataset |
| Steps | 1.Perform screening activity using onboarded entity |
| Acceptance Criteria | System shall evaluate primary identity information |
| Expected Result | Primary entity name should participate in configured matching workflow |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, high, screening-matching |

### CLM-TC-533 — Verify alternate names or aliases participate in configured matching workflow where available

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | High |
| Preconditions | Entity contains alias information |
| Test Data | Entity Alias Dataset |
| Steps | 1.Perform screening activity using alias information |
| Acceptance Criteria | System shall utilize available identity information for screening |
| Expected Result | Alias information should participate in screening according to configured behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, high, screening-matching |

### CLM-TC-534 — Verify modified entity names are reflected in subsequent screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | High |
| Preconditions | Entity update approved |
| Test Data | Updated Entity Name |
| Steps | 1.Modify entity name 2.Approve update 3.Perform screening activity |
| Acceptance Criteria | System shall use latest approved entity information |
| Expected Result | Latest approved entity name should be used during screening activities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, high, screening-matching |

### CLM-TC-535 — Verify disabled entities follow configured screening participation rules

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | High |
| Preconditions | Disabled entity available |
| Test Data | Disabled Entity |
| Steps | 1.Disable entity through governance workflow 2.Review screening behavior |
| Acceptance Criteria | System shall align screening behavior with entity lifecycle status |
| Expected Result | Entity should participate or be excluded according to configured lifecycle rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, high, screening-matching |

### CLM-TC-536 — Verify expired entities follow configured screening participation rules

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | High |
| Preconditions | Expired entity available |
| Test Data | Expired Entity |
| Steps | 1.Review screening behavior for expired entity |
| Acceptance Criteria | System shall align screening behavior with lifecycle status |
| Expected Result | Entity screening participation should align with configured lifecycle behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, high, screening-matching |

### CLM-TC-537 — Verify entity onboarding through bulk upload contributes to screening population

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | High |
| Preconditions | Bulk upload completed successfully |
| Test Data | Bulk Uploaded Entities |
| Steps | 1.Complete bulk onboarding workflow 2.Review screening participation |
| Acceptance Criteria | System shall support screening of bulk-onboarded entities |
| Expected Result | Bulk-onboarded entities should participate in screening according to configured rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, high, screening-matching |

### CLM-TC-538 — Verify entity onboarding through manual workflow contributes to screening population

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | High |
| Preconditions | Manual onboarding completed successfully |
| Test Data | Manual Entity |
| Steps | 1.Create entity manually 2.Review screening participation |
| Acceptance Criteria | System shall support screening of manually onboarded entities |
| Expected Result | Manually onboarded entities should participate in screening according to configured rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, high, screening-matching |

### CLM-TC-539 — Verify screening behavior remains consistent across repeated executions

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | Medium |
| Preconditions | Screening-ready entities available |
| Test Data | Entity Dataset |
| Steps | 1.Perform repeated screening activities |
| Acceptance Criteria | System shall apply matching configuration consistently |
| Expected Result | Equivalent screening scenarios should produce consistent matching behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, medium, screening-matching |

### CLM-TC-540 — Verify name matching functionality supports AML screening and watchlist management objectives

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | High |
| Preconditions | Screening-ready entities available |
| Test Data | Entity Screening Dataset |
| Steps | 1.Review screening participation and matching behavior |
| Acceptance Criteria | System shall provide effective name-based screening capability |
| Expected Result | Name matching functionality should support effective screening and watchlist management activities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, high, screening-matching |

### CLM-TC-541 — Verify alias information captured during entity onboarding is retained for screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alias Matching |
| Priority | High |
| Preconditions | Entity onboarded with alias information |
| Test Data | Entity with Alias |
| Steps | 1.Create entity with alias values 2.Complete approval workflow 3.Open entity details |
| Acceptance Criteria | System shall preserve alias information for downstream matching |
| Expected Result | Alias information should remain available and associated with the correct entity |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alias-matching, high, screening-matching |

### CLM-TC-542 — Verify alias information participates in configured screening workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alias Matching |
| Priority | High |
| Preconditions | Entity with alias information available |
| Test Data | Alias Dataset |
| Steps | 1.Onboard entity with alias 2.Perform screening activity |
| Acceptance Criteria | System shall utilize available alias information during matching |
| Expected Result | Alias information should participate in screening according to configured matching behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alias-matching, high, screening-matching |

### CLM-TC-543 — Verify multiple aliases are available for screening when supported

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alias Matching |
| Priority | High |
| Preconditions | Entity contains multiple aliases |
| Test Data | Multiple Alias Dataset |
| Steps | 1.Create entity with multiple aliases 2.Perform screening activity |
| Acceptance Criteria | System shall utilize all configured alias information |
| Expected Result | Available aliases should participate in matching workflow according to implementation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alias-matching, high, screening-matching |

### CLM-TC-544 — Verify alias modifications are reflected in subsequent screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alias Matching |
| Priority | High |
| Preconditions | Entity update approved |
| Test Data | Updated Alias Dataset |
| Steps | 1.Modify alias information 2.Approve update 3.Perform screening activity |
| Acceptance Criteria | System shall utilize latest approved alias information |
| Expected Result | Latest approved alias information should be available for matching |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alias-matching, high, screening-matching |

### CLM-TC-545 — Verify alias information onboarded through bulk upload participates in screening

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alias Matching |
| Priority | High |
| Preconditions | Bulk-uploaded entity available |
| Test Data | Bulk Upload Alias Dataset |
| Steps | 1.Upload entity containing alias data 2.Complete onboarding workflow |
| Acceptance Criteria | System shall apply matching rules consistently across onboarding methods |
| Expected Result | Alias information should be available for screening after onboarding |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alias-matching, high, screening-matching |

### CLM-TC-546 — Verify disabled entities follow configured alias matching participation rules

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alias Matching |
| Priority | Medium |
| Preconditions | Disabled entity available |
| Test Data | Disabled Alias Entity |
| Steps | 1.Disable entity 2.Review matching behavior |
| Acceptance Criteria | System shall align screening participation with lifecycle status |
| Expected Result | Alias matching participation should align with configured lifecycle behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alias-matching, medium, screening-matching |

### CLM-TC-547 — Verify alias matching behavior remains consistent across repeated screening executions

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alias Matching |
| Priority | Medium |
| Preconditions | Entity with aliases available |
| Test Data | Alias Dataset |
| Steps | 1.Perform repeated screening activities |
| Acceptance Criteria | System shall apply matching logic consistently |
| Expected Result | Equivalent screening scenarios should produce consistent matching behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alias-matching, medium, screening-matching |

### CLM-TC-548 — Verify alias matching supports AML screening and watchlist investigation requirements

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alias Matching |
| Priority | High |
| Preconditions | Entity with aliases available |
| Test Data | Alias Dataset |
| Steps | 1.Review screening participation using aliases |
| Acceptance Criteria | System shall support alternate identity screening |
| Expected Result | Alias matching should support identification of alternate identities during screening |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alias-matching, high, screening-matching |

### CLM-TC-549 — Verify onboarded email identifiers are retained for screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Entity with email available |
| Test Data | Email Dataset |
| Steps | 1.Onboard entity with email 2.Open entity details |
| Acceptance Criteria | System shall preserve email information for matching |
| Expected Result | Email identifier should remain available for screening activities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, screening-matching |

### CLM-TC-550 — Verify email identifiers participate in configured matching workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Entity with email available |
| Test Data | Email Dataset |
| Steps | 1.Perform screening activity |
| Acceptance Criteria | System shall utilize email information during screening |
| Expected Result | Email identifier should participate in matching according to configured behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, screening-matching |

### CLM-TC-551 — Verify onboarded mobile identifiers are retained for screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Entity with mobile available |
| Test Data | Mobile Dataset |
| Steps | 1.Onboard entity with mobile number |
| Acceptance Criteria | System shall preserve mobile information for matching |
| Expected Result | Mobile identifier should remain available for screening activities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, screening-matching |

### CLM-TC-552 — Verify mobile identifiers participate in configured matching workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Entity with mobile available |
| Test Data | Mobile Dataset |
| Steps | 1.Perform screening activity |
| Acceptance Criteria | System shall utilize mobile information during screening |
| Expected Result | Mobile identifier should participate in matching according to configured behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, screening-matching |

### CLM-TC-553 — Verify onboarded IP Address information is retained for screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Entity with IP Address available |
| Test Data | IP Dataset |
| Steps | 1.Onboard entity with IP Address |
| Acceptance Criteria | System shall preserve IP information for matching |
| Expected Result | IP Address information should remain available for screening activities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, screening-matching |

### CLM-TC-554 — Verify IP Address participates in configured matching workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Entity with IP Address available |
| Test Data | IP Dataset |
| Steps | 1.Perform screening activity |
| Acceptance Criteria | System shall utilize IP information during screening |
| Expected Result | IP Address should participate in matching according to configured behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, screening-matching |

### CLM-TC-555 — Verify onboarded Device Identifier information is retained for screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Entity with Device ID available |
| Test Data | Device Dataset |
| Steps | 1.Onboard entity with Device ID |
| Acceptance Criteria | System shall preserve device information for matching |
| Expected Result | Device Identifier should remain available for screening activities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, screening-matching |

### CLM-TC-556 — Verify Device Identifier participates in configured matching workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Entity with Device ID available |
| Test Data | Device Dataset |
| Steps | 1.Perform screening activity |
| Acceptance Criteria | System shall utilize device information during screening |
| Expected Result | Device Identifier should participate in matching according to configured behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, screening-matching |

### CLM-TC-557 — Verify multiple digital identifiers can participate in screening for the same entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Entity contains multiple digital identifiers |
| Test Data | Combined Digital Identifier Dataset |
| Steps | 1.Perform screening activity |
| Acceptance Criteria | System shall support screening using available identifier information |
| Expected Result | Available digital identifiers should participate in screening according to implementation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, screening-matching |

### CLM-TC-558 — Verify updated digital identifiers are reflected in subsequent screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Entity update approved |
| Test Data | Updated Digital Identifier Dataset |
| Steps | 1.Modify digital identifier information 2.Approve update 3.Perform screening activity |
| Acceptance Criteria | System shall utilize latest approved identifier information |
| Expected Result | Latest approved digital identifiers should be used during screening |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, screening-matching |

### CLM-TC-559 — Verify digital identifier matching remains consistent across onboarding methods

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | Medium |
| Preconditions | Manual and bulk onboarded entities available |
| Test Data | Mixed Onboarding Dataset |
| Steps | 1.Perform screening activity across onboarding methods |
| Acceptance Criteria | System shall apply matching rules uniformly |
| Expected Result | Digital identifier matching behavior should remain consistent regardless of onboarding source |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, medium, screening-matching |

### CLM-TC-560 — Verify digital identifier matching supports AML investigation and screening objectives

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Entity dataset available |
| Test Data | Digital Identifier Dataset |
| Steps | 1.Review screening participation using digital identifiers |
| Acceptance Criteria | System shall support non-name based screening |
| Expected Result | Digital identifier matching should support identification of entities beyond traditional name matching |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, screening-matching |

### CLM-TC-561 — Verify Action On Hit configuration selected during list creation is retained

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Behaviour |
| Priority | High |
| Preconditions | Custom list created with Action On Hit configuration |
| Test Data | Configured Action On Hit List |
| Steps | 1.Create custom list 2.Open list details |
| Acceptance Criteria | System shall preserve configured screening response behavior |
| Expected Result | Configured Action On Hit value should remain saved successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-behaviour, high, screening-matching |

### CLM-TC-562 — Verify Action On Hit configuration remains unchanged after governance approval workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Behaviour |
| Priority | High |
| Preconditions | List update approved |
| Test Data | Updated List Configuration |
| Steps | 1.Modify list 2.Complete approval workflow 3.Review configuration |
| Acceptance Criteria | System shall preserve approved configuration values |
| Expected Result | Action On Hit configuration should remain accurate after approval |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-behaviour, high, maker-checker |

### CLM-TC-563 — Verify configured Action On Hit behavior is available during screening execution

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Behaviour |
| Priority | High |
| Preconditions | Screening-enabled custom list available |
| Test Data | Screening Dataset |
| Steps | 1.Perform screening activity |
| Acceptance Criteria | System shall apply configured response settings during matching |
| Expected Result | Screening process should utilize configured Action On Hit settings |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-behaviour, high, screening-matching |

### CLM-TC-564 — Verify screening hits are processed according to configured Action On Hit behavior

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Behaviour |
| Priority | High |
| Preconditions | Matching scenario available |
| Test Data | Screening Hit Dataset |
| Steps | 1.Perform screening activity generating a hit |
| Acceptance Criteria | System shall enforce configured screening response logic |
| Expected Result | Hit processing should follow configured Action On Hit behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-behaviour, high, screening-matching |

### CLM-TC-565 — Verify Action On Hit configuration remains associated with the correct custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Behaviour |
| Priority | Medium |
| Preconditions | Multiple custom lists available |
| Test Data | Multiple Custom Lists |
| Steps | 1.Configure different Action On Hit settings 2.Review behavior |
| Acceptance Criteria | System shall isolate screening behavior by list |
| Expected Result | Each custom list should retain its own configured response behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-behaviour, medium, screening-matching |

### CLM-TC-566 — Verify Action On Hit configuration changes are traceable through governance workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Behaviour |
| Priority | Medium |
| Preconditions | Governance workflow available |
| Test Data | Configuration Update Request |
| Steps | 1.Modify Action On Hit setting 2.Review governance records |
| Acceptance Criteria | System shall maintain configuration accountability |
| Expected Result | Configuration changes should remain traceable through governance records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-behaviour, medium, maker-checker |

### CLM-TC-567 — Verify screening response behavior remains consistent across repeated executions

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Behaviour |
| Priority | Medium |
| Preconditions | Matching scenario available |
| Test Data | Screening Dataset |
| Steps | 1.Perform repeated screening activities |
| Acceptance Criteria | System shall apply configured logic consistently |
| Expected Result | Equivalent screening scenarios should result in consistent behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-behaviour, medium, screening-matching |

### CLM-TC-568 — Verify Action On Hit configuration supports AML screening governance requirements

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Behaviour |
| Priority | High |
| Preconditions | Screening-enabled custom list available |
| Test Data | Screening Dataset |
| Steps | 1.Review screening hit processing |
| Acceptance Criteria | System shall provide configurable response handling |
| Expected Result | Configured response behavior should support AML screening governance objectives |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-behaviour, high, screening-matching |

### CLM-TC-569 — Verify screening activity can generate alerts according to configured screening behavior

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | High |
| Preconditions | Screening-enabled custom list available |
| Test Data | Screening Dataset |
| Steps | 1.Perform screening activity |
| Acceptance Criteria | System shall support alert creation for relevant screening events |
| Expected Result | Alerts should be generated according to configured screening behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, high, screening-matching |

### CLM-TC-570 — Verify generated alert remains associated with the correct entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | High |
| Preconditions | Alert generated |
| Test Data | Entity Screening Dataset |
| Steps | 1.Open generated alert |
| Acceptance Criteria | System shall maintain entity-alert traceability |
| Expected Result | Alert should remain linked to the correct entity |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, high, screening-matching |

### CLM-TC-571 — Verify generated alert remains associated with the originating custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | High |
| Preconditions | Alert generated |
| Test Data | Custom List Dataset |
| Steps | 1.Review alert information |
| Acceptance Criteria | System shall maintain list-level traceability |
| Expected Result | Alert should identify the originating custom list |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, high, alerts |

### CLM-TC-572 — Verify alert information remains available after screening execution completes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | High |
| Preconditions | Alert generated |
| Test Data | Generated Alert |
| Steps | 1.Complete screening activity 2.Review alert information |
| Acceptance Criteria | System shall preserve generated alerts |
| Expected Result | Generated alert should remain accessible after screening execution |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, high, screening-matching |

### CLM-TC-573 — Verify generated alert contains sufficient information for investigation activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | High |
| Preconditions | Alert generated |
| Test Data | Generated Alert |
| Steps | 1.Open generated alert |
| Acceptance Criteria | System shall support analyst review and investigation |
| Expected Result | Alert should provide sufficient contextual information for investigation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, high, alerts |

### CLM-TC-574 — Verify alert generation remains consistent across repeated screening executions

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | Medium |
| Preconditions | Matching scenario available |
| Test Data | Screening Dataset |
| Steps | 1.Perform repeated screening activities |
| Acceptance Criteria | System shall apply alert generation rules consistently |
| Expected Result | Equivalent screening scenarios should produce consistent alert behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, medium, screening-matching |

### CLM-TC-575 — Verify generated alerts remain traceable through governance and audit workflows

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | High |
| Preconditions | Generated alert available |
| Test Data | Generated Alert |
| Steps | 1.Review alert and audit records |
| Acceptance Criteria | System shall support compliance traceability |
| Expected Result | Alert activity should remain traceable through available governance mechanisms |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, high, maker-checker |

### CLM-TC-576 — Verify alert generation behavior remains aligned with configured Action On Hit settings

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | High |
| Preconditions | Custom list configured with Action On Hit setting |
| Test Data | Screening Hit Dataset |
| Steps | 1.Perform screening activity generating hit |
| Acceptance Criteria | System shall enforce configured screening response behavior |
| Expected Result | Generated alert behavior should align with configured Action On Hit settings |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, high, screening-matching |

### CLM-TC-577 — Verify generated alerts remain associated with approved entity information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | Medium |
| Preconditions | Entity update approved |
| Test Data | Updated Entity Dataset |
| Steps | 1.Modify entity 2.Approve update 3.Perform screening activity |
| Acceptance Criteria | System shall use latest approved entity data |
| Expected Result | Generated alerts should reflect current approved entity information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, medium, maker-checker |

### CLM-TC-578 — Verify alert generation supports AML screening, monitoring and investigation objectives

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | High |
| Preconditions | Screening-enabled custom list available |
| Test Data | AML Screening Dataset |
| Steps | 1.Perform screening activity 2.Review generated alerts |
| Acceptance Criteria | System shall provide actionable screening outcomes |
| Expected Result | Alert generation should support AML monitoring, investigation and risk management activities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, high, screening-matching |
