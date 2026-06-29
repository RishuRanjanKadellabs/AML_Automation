# Exception List Manager — Detailed Test Cases (279)

### ATL-001 — Verify exception list creation is captured in the audit trail with complete metadata

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | List Lifecycle Events |
| Priority | High |
| Preconditions | Compliance Officer Sarah can create exception lists; no pending list with the same name exists. |
| Test Data | User Role: Compliance Officer List Name: Onboarding Exceptions — OFAC SDN Category: Onboarding Exceptions Default TTL: 12 months Checker: Sarah Chen (Compliance Officer) |
| Steps | 1. Open Exception List Manager and click Create new list. 2. Enter list name "Onboarding Exceptions — OFAC SDN", category Onboarding Exceptions, default TTL 12 months, and a business purpose. 3. Submit for approval and complete checker approval. 4. Open Audit trail and filter by the new list name. 5. Open the create event and review stored metadata. |
| Expected Result | Audit trail records a list-creation event with timestamp, maker identity, list ID, and after-state showing Pending approval then Active once approved. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, list-lifecycle-events, high, rbac, security |

### ATL-002 — Check that editing an exception list writes a new immutable audit event.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | List Lifecycle Events |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. An existing exception list is available and the user updates at least one field. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Entry ID: CSEL-001 User Role: Compliance Officer |
| Steps | 1. Open an active exception list 2. Change one approved field such as description or expiry policy 3. Submit the update and confirm the save message 4. Open the audit history for the same list 5. Compare the old and new values recorded in the log. |
| Expected Result | The edit action is written to the audit trail with both before-state and after-state snapshots. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, list-lifecycle-events, high |

### ATL-003 — Verify that list suspension is recorded with the correct status change.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | List Lifecycle Events |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. An active exception list exists and the user suspends it. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Entry ID: CSEL-001 User Role: Compliance Officer |
| Steps | 1. Open the list detail page 2. Choose the suspend action and confirm the prompt 3. Finish the action and note the updated status 4. Open the audit trail event for that list 5. Verify the recorded change in status. |
| Expected Result | The audit trail stores the suspension event and shows the status transition from Active to Suspended. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, list-lifecycle-events, high |

### ATL-004 — Confirm that re-activation of a list is logged as a separate event.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | List Lifecycle Events |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. A suspended list is available and the user re-activates it. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Entry ID: CSEL-001 User Role: Compliance Officer |
| Steps | 1. Locate a list that is currently suspended 2. Select the re-activate option from the list actions 3. Confirm the prompt and wait for the status to refresh 4. Open the audit trail for the same object 5. Check that the re-activation appears as its own event. |
| Expected Result | The audit trail contains a distinct re-activation record and does not overwrite the earlier suspension event. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, list-lifecycle-events, high |

### ATL-005 — Verify that deleting an exception list leaves a permanent audit record.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | List Lifecycle Events |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. A list exists with delete permission available to the user. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Entry ID: CSEL-001 User Role: Compliance Officer |
| Steps | 1. Open the target list from the list view 2. Trigger the delete action and confirm the warning dialog 3. Complete the deletion flow 4. Open the audit trail for the deleted object 5. Check whether the event remains searchable after deletion. |
| Expected Result | The delete action is logged permanently and the audit record remains readable after the list is removed from active use. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, list-lifecycle-events, high |

### ATL-006 — Ensure that exception entry submission is captured in the audit trail.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Entry Lifecycle Events |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. The user submits a new exception entry from the list screen. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Entry ID: CSEL-001 User Role: Compliance Officer |
| Steps | 1. Open an exception list and start a new entry 2. Fill in valid customer and watchlist details 3. Add the required reason code and evidence reference 4. Submit the entry into the approval flow 5. Review the audit event created for the submission. |
| Expected Result | The audit trail stores the submission event with the entry ID, maker details, and submission timestamp. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, entry-lifecycle-events, high |

### ATL-007 — Check that approving an exception entry creates a separate audit trail record.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Entry Lifecycle Events |
| Priority | High |
| Preconditions | A pending maker-checker request is available for approval. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Entry ID: CSEL-001 User Role: Compliance Officer |
| Steps | 1. Open the maker-checker queue 2. Approve the pending exception entry using an authorised checker role 3. Confirm the approval notification appears 4. Open the audit trail and search for the same request ID 5. Compare the approval details against the request screen. |
| Expected Result | The approval is stored as an independent audit event with the checker identity and approval outcome. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, entry-lifecycle-events, high |

### ATL-008 — Verify that rejection of an exception entry is written to the audit history.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Entry Lifecycle Events |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. A pending request is available and the checker rejects it. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Entry ID: CSEL-001 User Role: Compliance Officer |
| Steps | 1. Open the pending request in the maker-checker queue 2. Review the reason and evidence summary 3. Reject the request with a short comment 4. Open the audit trail for the request 5. Verify the rejection state and comment are captured. |
| Expected Result | The audit log shows the rejected request, the checker comment, and the final decision status. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, entry-lifecycle-events, high |

### ATL-009 — Confirm that entry edit activity is tracked even when only a single field changes.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Entry Lifecycle Events |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. An existing exception entry is opened for editing. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Entry ID: CSEL-001 User Role: Compliance Officer |
| Steps | 1. Open an approved entry from the list view 2. Change only one editable field, such as expiry date or evidence reference 3. Save the update 4. Open the entry history or audit log 5. Confirm the before-state and after-state differ only on the modified field. |
| Expected Result | The audit trail captures the edit at field level and preserves the previous values for review. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, entry-lifecycle-events, high |

### ATL-010 — Verify that entry suspension is logged when a user deactivates an approved entry.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Entry Lifecycle Events |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. An approved entry is active and the user suspends it. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Entry ID: CSEL-001 User Role: Compliance Officer |
| Steps | 1. Open the active exception entry 2. Select the suspend option from the action menu 3. Confirm the prompt and complete the action 4. Open the audit trail for the entry 5. Check the event description and status change values. |
| Expected Result | The audit trail records the suspension event with the correct object ID and new status. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, entry-lifecycle-events, high |

### ATL-011 — Check that entry re-activation after suspension is audited separately from the original approval.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Entry Lifecycle Events |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. A suspended entry is made active again. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Entry ID: CSEL-001 User Role: Compliance Officer |
| Steps | 1. Open the suspended entry 2. Choose the re-activate action 3. Confirm the action and wait for the status to update 4. Open the audit trail for the same entry 5. Verify the re-activation sits after the suspension in the event chain. |
| Expected Result | A new audit record is created for re-activation, and the old approval entry stays intact. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, entry-lifecycle-events, high |

### ATL-012 — Ensure that expired entries still remain visible in the audit trail after TTL passes.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | TTL & Bulk Events |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. An entry has already expired and screening suppression has ceased. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Entry ID: CSEL-001 User Role: Compliance Officer |
| Steps | 1. Locate an entry whose expiry date is in the past 2. Open the entry detail screen 3. Navigate to its audit history 4. Confirm the expiry event or state change is available 5. Verify the record is still searchable after expiration. |
| Expected Result | The expired entry continues to appear in audit history and the expiry transition is retained. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, ttl-bulk-events, high |

### ATL-013 — Verify that bulk upload submission creates a parent audit event.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | TTL & Bulk Events |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. A bulk upload file is prepared and submitted successfully. |
| Test Data | Bulk Request ID: BULK-2026-042 Target List: Onboarding Exceptions — OFAC SDN Rows: 14 valid entries |
| Steps | 1. Open the bulk upload screen 2. Upload a valid file containing multiple rows 3. Submit the batch for processing 4. Check the audit trail for the bulk action 5. Confirm the parent event references the upload request ID. |
| Expected Result | The upload submission is written to the audit trail with a unique request reference. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, ttl-bulk-events, high |

### ATL-014 — Confirm that bulk upload approval or rejection is recorded together with the batch outcome.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | TTL & Bulk Events |
| Priority | High |
| Preconditions | A bulk upload request is waiting in the maker-checker queue. |
| Test Data | Bulk Request ID: BULK-2026-042 Target List: Onboarding Exceptions — OFAC SDN Rows: 14 valid entries |
| Steps | 1. Open the pending bulk upload request 2. Approve or reject the batch from the checker account 3. Note the final batch status shown on screen 4. Open the corresponding audit trail entry 5. Verify that the outcome matches the action taken. |
| Expected Result | The audit trail stores the batch decision and the final status of the upload request. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, ttl-bulk-events, high |

### ATL-015 — Check that API submit, update, and delete events are logged with the caller identity.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | TTL & Bulk Events |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. An API client is configured with valid authentication and makes CSEL requests. |
| Test Data | API Client: csel-sync-prod Endpoint: POST /api/v1/csel/entries Auth: service account |
| Steps | 1. Send a submit request through the API 2. Update the same entry through another API call 3. Delete or deactivate the record through the API 4. Open the audit trail for each operation 5. Compare the recorded user, IP, and object identifiers. |
| Expected Result | Each API action produces an audit event that includes the authenticated caller and operation type. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | audit-trail, ttl-bulk-events, high, api |

### ATL-016 — Verify that every suppressed alert is logged silently without user-facing notification noise.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Suppression Logging |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. An active CSEL entry suppresses an incoming screening hit. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Entry ID: CSEL-001 User Role: Compliance Officer |
| Steps | 1. Run a screening scenario that matches an approved entry 2. Allow the engine to suppress the alert 3. Check that no analyst-facing alert pop-up is shown for the suppression itself 4. Open the audit trail and search for the suppression event 5. Review the stored suppression identifiers. |
| Expected Result | The suppression is written to audit in real time, but the user interface does not raise a separate noisy notification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, suppression-logging, high |

### ATL-017 — Confirm that suppression logging includes the watchlist, score, and screening timestamps.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Suppression Logging |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. A screening event is suppressed by an active CSEL entry. |
| Test Data | Customer ID: CUS-004521 Entry ID: CSEL-001 Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the customer screening event 2. Note the watchlist name and match score on the alert 3. Let the system apply the exception rule 4. Open the audit trail entry for the suppression 5. Verify the customer ID, entry ID, watchlist, score, and timestamps are present. |
| Expected Result | Suppression audit record includes customer ID, entry ID, watchlist name, match score, screening timestamp, and suppressing entry reference. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, suppression-logging, high |

### ATL-018 — Check that evidence attachment upload is recorded in the audit trail.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Evidence Access Logging |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. The entry form allows an attachment and the file is uploaded successfully. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Entry ID: CSEL-001 User Role: Compliance Officer |
| Steps | 1. Open an add or edit entry form 2. Upload a valid evidence file 3. Save the entry or draft 4. Open the audit trail for that record 5. Confirm the attachment action appears in history. |
| Expected Result | The audit trail captures the upload action with attachment reference and user details. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, evidence-access-logging, high |

### ATL-019 — Verify that viewing or downloading evidence is separately logged.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Evidence Access Logging |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. An evidence file already exists on an entry. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Entry ID: CSEL-001 User Role: Compliance Officer |
| Steps | 1. Open the entry detail page 2. View the attached evidence file 3. Download the same file from the attachment control 4. Open the audit trail for the entry 5. Check that both view and download activities are present if the system tracks both. |
| Expected Result | The audit trail records access to the evidence attachment and preserves the action history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, evidence-access-logging, high, export |

### ATL-020 — Ensure that a material identity change auto-suspension event is captured.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Integrity & Conflict Events |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. A customer record changes in a way that qualifies as a material identity change. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Entry ID: CSEL-001 User Role: Compliance Officer |
| Steps | 1. Update a screened customer profile field such as name, DOB, or nationality 2. Wait for the system to process the change 3. Open the linked CSEL entry status 4. Review the audit trail for the auto-suspension event 5. Confirm the triggering change is identifiable. |
| Expected Result | The audit trail records the auto-suspension and links it to the underlying profile change. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, integrity-conflict-events, high |

### ATL-021 — Verify that a true-hit conflict check blocked submission is recorded as an integrity event.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Integrity & Conflict Events |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. A customer ID already exists on an active custom blacklist. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Entry ID: CSEL-001 User Role: Compliance Officer |
| Steps | 1. Start a new CSEL submission for the same customer 2. Let the system run the conflict check 3. Observe the submission block message 4. Open the audit trail or integrity log 5. Confirm the blocked event is recorded with the reason. |
| Expected Result | The blocked submission is written to audit as a conflict/integrity event rather than a normal approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, integrity-conflict-events, high |

### ATL-022 — Confirm that the exception register report generation is logged.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Report & Export Events |
| Priority | High |
| Preconditions | The monthly report generation job or manual report request is executed. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Entry ID: CSEL-001 User Role: Compliance Officer |
| Steps | 1. Open the reports area 2. Generate the CSEL Exception Register report 3. Wait for the file to finish processing 4. Open the audit trail from the module 5. Search for the report generation event and verify its metadata. |
| Expected Result | The audit trail records the report generation event with report type, user, and timestamp. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, report-export-events, high, export |

### ATL-023 — Check that exporting the audit trail to CSV is itself logged.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Report & Export Events |
| Priority | High |
| Preconditions | The auditor or compliance user exports the audit trail data. |
| Test Data | Export Format: CSV User Role: Compliance Officer Date Range: Last 90 days |
| Steps | 1. Open the audit trail screen 2. Apply a simple filter or keep the default view 3. Choose the CSV export action 4. Save the generated file locally 5. Re-open the audit history and look for the export event. |
| Expected Result | The export action is written to audit, including format, user, and export time. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, report-export-events, high, export |

### ATL-024 — Verify that audit records are read-only and cannot be edited through the application.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Report & Export Events |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. A user opens an existing audit record with full visibility. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Entry ID: CSEL-001 User Role: Compliance Officer |
| Steps | 1. Search for an existing audit event 2. Open the detail panel or row expansion 3. Check whether any edit or delete action is exposed 4. Try to navigate to a change path if the UI offers one 5. Confirm that the record remains unchanged. |
| Expected Result | The application does not allow modification or deletion of the audit record. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, report-export-events, high, export |

### ATL-025 — Ensure that audit records remain searchable after the retention period is configured.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Report & Export Events |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. Audit retention settings are in place and historical records are available. |
| Test Data | Event Types: Entry approved, Alert suppressed Lists: Onboarding Exceptions — OFAC SDN Date Range: Last 30 days |
| Steps | 1. Search for an older audit event using a known object ID 2. Apply date filters around the historical period 3. Open the matching result 4. Verify the event content is still visible 5. Confirm the record is not hidden by ordinary application access rules. |
| Expected Result | Audit data remains available for the configured retention period and can still be retrieved for compliance review. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, report-export-events, high, export |

### ATL-026 — Check that the audit trail shows before and after state snapshots for state-changing actions.

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Event Logging & Retention |
| Priority | High |
| Preconditions | Audit trail contains relevant CSEL activity. An action that changes record state is performed, such as edit or suspend. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Entry ID: CSEL-001 User Role: Compliance Officer |
| Steps | 1. Trigger a state-changing event on a list or entry 2. Open the audit detail for the same event 3. Expand the JSON or state snapshot fields if available 4. Compare the before and after values 5. Confirm the changed fields are obvious from the log. |
| Expected Result | The audit trail contains both snapshots and clearly shows what changed during the action. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, event-logging-retention, high |

### ATL-027 — Verify audit trail filters narrow results by event type, list, and date range

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Search & Filters |
| Priority | Medium |
| Preconditions | Audit trail contains mixed events (submissions, approvals, suppressions, expiries) across at least two exception lists. |
| Test Data | Event Types: Entry submitted, Entry approved, Alert suppressed Lists: Onboarding Exceptions — OFAC SDN, Periodic Re-Screen — UN Consolidated List Date Range: Last 30 days |
| Steps | 1. Open Audit trail from Exception List Manager. 2. Filter event type to Entry approved and note the result count. 3. Add list filter for "Onboarding Exceptions — OFAC SDN" and confirm results shrink to that list only. 4. Set date range to the last 30 days. 5. Clear filters one at a time and confirm the grid returns to the full dataset. |
| Expected Result | Each filter reduces the grid to matching events; combined filters apply together; clearing filters restores the full audit history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, search-filters, medium |

### ATL-028 — Verify Read-Only Auditor can view and export audit records but cannot modify them

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Auditor Access Control |
| Priority | Medium |
| Preconditions | Read-Only Auditor account exists; audit trail contains historical CSEL events. |
| Test Data | User Role: Read-Only Auditor Export Format: CSV Sample Event: Alert suppressed for CUS-004521 |
| Steps | 1. Sign in as Read-Only Auditor. 2. Open Audit trail and open any event detail. 3. Export audit data to CSV and save the file locally. 4. Attempt to locate edit, delete, or amend controls on an audit record. 5. Re-open the same event after refresh and confirm content is unchanged. |
| Expected Result | Auditor can search, view, and export audit records; no edit or delete actions are available; exported CSV matches on-screen filtered data. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, auditor-access-control, medium, export |

### ATL-029 — Verify MLRO has full read access to audit records created by other users

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Access Control |
| Priority | High |
| Preconditions | Audit trail contains events from multiple makers including onboarding and PEP submissions. |
| Test Data | User Role: MLRO Maker Event: Entry submitted by Priya Sharma (KYC Analyst) System Event: Alert suppressed — CSEL-001 |
| Steps | 1. Sign in as MLRO (R. Gupta (MLRO)). 2. Open Audit trail and search for an entry submission created by Priya Sharma (KYC Analyst). 3. Open the event and review maker, checker, and object identifiers. 4. Search for a suppression event tied to CSEL-001. 5. Confirm both events are visible with full detail panels. |
| Expected Result | MLRO sees audit events regardless of originating maker and can open full event detail including before/after snapshots. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, access-control, high, rbac, security |

### ATL-030 — Verify KYC Analyst sees only audit records linked to their own submissions

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Access Control |
| Priority | High |
| Preconditions | Priya Sharma (KYC Analyst) has submitted CSEL entries; another analyst has separate submissions in the same environment. |
| Test Data | User Role: KYC Analyst Own Submission: New entry — CUS-004521 Other User Submission: Approved by Sarah Chen (Compliance Officer) |
| Steps | 1. Sign in as KYC Analyst (Priya Sharma (KYC Analyst)). 2. Open Audit trail and search for an entry submission you created. 3. Confirm the submission event opens with full detail. 4. Search for a submission or approval event created by Sarah Chen (Compliance Officer) or another analyst. 5. Verify restricted events are hidden or not accessible from the audit grid. |
| Expected Result | Analyst can audit their own submission activity but cannot access audit records tied exclusively to another user's requests. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, access-control, high |

### ATL-031 — Verify Compliance Manager has full read access to audit records created by other users

| Field | Value |
| --- | --- |
| Module | Audit Trail |
| Sub-Module | Access Control |
| Priority | High |
| Preconditions | Audit trail contains events from multiple makers including list edits and bulk uploads. |
| Test Data | User Role: Compliance Manager Sample Events: Bulk upload approved; List suspended Originating Maker: Priya Sharma (KYC Analyst) |
| Steps | 1. Sign in as Compliance Manager. 2. Open Audit trail and filter by Bulk upload events. 3. Open a bulk-upload approval recorded under another user's maker ID. 4. Search for a list suspension event on a list the manager did not create. 5. Confirm both records open with complete metadata. |
| Expected Result | Compliance Manager can view all audit records and full event detail regardless of which user performed the underlying action. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-trail, access-control, high, rbac, security |

### EEM-001 — Check that a new exception entry cannot be submitted when any mandatory field is left blank.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Data Model & Field Validation |
| Priority | Low |
| Preconditions | Add Entry panel is open on list "Onboarding Exceptions — OFAC SDN". User can add entries and a target exception list is open. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Open the Add Exception Entry form from the selected list 2. Leave Customer ID and Date of Birth empty, but complete the other visible fields 3. Try to submit the form once to trigger validation 4. Fill one missing field and leave another required field blank 5. Submit again and observe the response. |
| Expected Result | The form blocks submission, highlights every missing mandatory field, and does not move the record to the approval queue. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, data-model-field-validation, low, reason-evidence |

### EEM-002 — Verify the conditional behaviour for Original Script Name and Script Type when a non-Latin name is entered.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Data Model & Field Validation |
| Priority | Low |
| Preconditions | Add Entry panel is open on list "Onboarding Exceptions — OFAC SDN". The add-entry screen is open and the customer name is available in a native script such as Arabic or Cyrillic. |
| Test Data | Original Script Name: محمد الرحman Script Type: AR Customer ID: CUS-004521 |
| Steps | 1. Enter the customer name in the Original Script Name field 2. Skip the Script Type / Language field and keep the rest of the form valid 3. Try to continue to submission 4. Add the matching script type value and submit the same record again 5. Review whether the saved record keeps the UTF-8 text intact. |
| Expected Result | The system requires Script Type when Original Script Name is populated, accepts the entry only after it is completed, and stores the native-script text correctly. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, data-model-field-validation, low, functional |

### EEM-003 — Create a new exception entry from list detail and route it through maker-checker approval

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Add Entry |
| Priority | High |
| Preconditions | Active list "Onboarding Exceptions — OFAC SDN" is open; no active entry exists for CUS-004521 on OFAC SDN. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% Reason Code: Confirmed Different Person Evidence: onboarding_fp_analysis.pdf |
| Steps | 1. Open list "Onboarding Exceptions — OFAC SDN" from the landing grid. 2. Click Add Entry and populate customer CUS-004521 (Mohammed Al-Rahman), DOB, matched watchlist entry, match score 92%, and distinguishing attributes (minimum 50 characters). 3. Select reason code Confirmed Different Person, attach evidence PDF, and set expiry date. 4. Submit for approval. 5. Open Maker-checker queue and locate the pending request. |
| Expected Result | Entry saves as Pending Approval, appears in maker-checker queue with correct customer and watchlist data, and does not suppress alerts until checker approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, add-entry, high, rbac, security |

### EEM-004 — Use the alert-driven path and verify that the entry form is prefilled from the screening alert.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Add Entry |
| Priority | Low |
| Preconditions | Add Entry panel is open on list "Onboarding Exceptions — OFAC SDN". A screening alert exists for the same customer and the user opens it from the alert management screen. |
| Test Data | Alert Reference: ALT-2026-8891 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the alert detail page for a false-positive hit 2. Choose Add to Exception List from the alert actions 3. Check the form fields that should be copied from the alert 4. Compare Screening Date, Alert Reference ID, Matched Watchlist Entry, Match Score, and Watchlist Name with the source alert 5. Complete the remaining fields and submit the entry. |
| Expected Result | The prefilled fields match the alert record, reducing manual entry, and the submission follows the standard approval flow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, add-entry, low, notifications |

### EEM-005 — Block the submission when the customer is already present on an active Custom List or blacklist.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Add Entry |
| Priority | Low |
| Preconditions | Add Entry panel is open on list "Onboarding Exceptions — OFAC SDN". The add-entry screen is open and the Customer ID being tested exists on an active custom blacklist. |
| Test Data | Customer ID: CUS-004521 Conflicting List: Custom blacklist — High Risk Entities |
| Steps | 1. Type the conflicting Customer ID into the form 2. Wait for the real-time conflict check to complete 3. Observe the on-screen warning message 4. Try to submit the entry anyway 5. Confirm that the system keeps the request out of the approval queue. |
| Expected Result | The system stops the submission in real time, explains the conflict, and refuses to route the entry for approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, add-entry, low, functional |

### EEM-006 — Check the warning path when the distinguishing evidence is too thin but the user chooses to continue.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Add Entry |
| Priority | Low |
| Preconditions | Add Entry panel is open on list "Onboarding Exceptions — OFAC SDN". The analyst is creating an exception entry and the evidence section is not fully populated. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Enter the base customer and watchlist details 2. Leave the Distinguishing Attributes field very short or almost empty 3. Review the warning banner shown by the system 4. Confirm that sufficient evidence is available 5. Submit the record and inspect the submission outcome. |
| Expected Result | A non-blocking warning appears, the user must confirm the evidence is adequate, and the request can still proceed to approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, add-entry, low, reason-evidence |

### EEM-007 — Update an approved entry and verify that the change is sent back through the approval workflow.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Edit Entry |
| Priority | High |
| Preconditions | An active entry exists and the user has edit permission for that record. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Open the entry details from the list view 2. Select Edit and change a non-destructive field such as expiry date or reason detail 3. Save the update and capture the confirmation message 4. Open the approval queue or refresh the entry status 5. Check the view history to confirm the old and new values are both retained. |
| Expected Result | The edit is not applied silently, the request is submitted for approval, and the history trail shows the before-and-after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, edit-entry, high, maker-checker |

### EEM-008 — Make sure an entry sitting in Pending Approval cannot be edited until the request is resolved.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Edit Entry |
| Priority | High |
| Preconditions | The target entry already has an open approval request and is not yet active. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Open the pending entry from the list or queue 2. Click Edit on the same record 3. Try to change one visible field 4. Attempt to save the change 5. Check the status message or disabled state shown by the screen. |
| Expected Result | The edit action is blocked while the record is Pending Approval, so no new version is created until the first request is completed. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, edit-entry, high, reason-evidence |

### EEM-009 — Verify that scope expansion sends the edit to a higher approval level than a simple reduction.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Edit Entry |
| Priority | High |
| Preconditions | The entry is active and the test user can initiate an edit on it. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Open the record and choose Edit 2. Add another watchlist to the scope or extend the expiry date beyond the original value 3. Enter the change reason and submit the request 4. Open the maker-checker queue for the item 5. Check the assigned checker role before approval is allowed. |
| Expected Result | The expanded edit is routed to the stricter Compliance Officer or Compliance Manager approval path instead of the standard level. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, edit-entry, high, reason-evidence |

### EEM-010 — Suspend a live entry and confirm that suppression stops as soon as the approval is completed.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Suspend / Delete Entry |
| Priority | High |
| Preconditions | An active entry is currently suppressing a known false positive. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Open the entry actions from the list detail view 2. Choose Suspend and provide the required reason 3. Submit the request and complete approval 4. Run the same customer through screening again 5. Compare the alert behaviour before and after the suspension. |
| Expected Result | After approval, the entry is excluded from evaluation, suppression ceases immediately, and the alert is raised again on screening. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, suspend-delete-entry, high, evaluation-engine |

### EEM-011 — Soft-delete an entry and verify that the system keeps the record for audit and history review.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Suspend / Delete Entry |
| Priority | High |
| Preconditions | The entry exists in active or suspended state and the user has permission to request deletion. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Open the entry and choose Delete 2. Enter the mandatory deletion reason 3. Send the request through the approval flow 4. Search for the same entry after approval 5. Open the audit or history view to confirm the retained record. |
| Expected Result | The entry is marked Deleted rather than physically removed, and the system still exposes the record in audit and history views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, suspend-delete-entry, high, audit-trail |

### EEM-012 — Verify that the pre-expiry reminder workflow fires before the TTL runs out.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | TTL & Entry Renewal |
| Priority | High |
| Preconditions | A test entry is configured with an expiry date close enough to trigger the reminder window. |
| Test Data | Entry ID: CSEL-006 Customer: CUS-005672 Expiry Date: 01 Mar 2026 Renewal TTL: 12 months |
| Steps | 1. Set or select an entry that is due to expire within the test window 2. Wait for the 30-day reminder trigger or simulate the scheduled job 3. Check the in-app notification for the list owner and Compliance Officer 4. Move the scenario forward to the 7-day escalation point 5. Confirm that the second reminder appears as well. |
| Expected Result | The system sends the first reminder at 30 days, escalates again at 7 days, and records the notifications for the relevant users. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, ttl-entry-renewal, high, notifications |

### EEM-013 — Confirm that an entry flips to Expired automatically and no longer suppresses matches once TTL has passed.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | TTL & Entry Renewal |
| Priority | High |
| Preconditions | A valid entry is available with a controlled expiry time that can be crossed during the test. |
| Test Data | Entry ID: CSEL-006 Customer: CUS-005672 Expiry Date: 01 Mar 2026 Renewal TTL: 12 months |
| Steps | 1. Note the current status of the active entry 2. Advance the system clock or wait until the expiry time is reached 3. Refresh the entry screen after the 5-minute expiry window 4. Screen the same customer again against the watchlist 5. Check the resulting alert status. |
| Expected Result | The entry becomes Expired automatically, suppression stops, and the alert is allowed to reappear on the next screening run. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, ttl-entry-renewal, high, functional |

### EEM-014 — Renew an expired exception entry through maker-checker approval

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | TTL & Entry Renewal |
| Priority | High |
| Preconditions | Expired entry CSEL-006 (Elena Petrov, EU Consolidated) is visible in list detail. |
| Test Data | Entry ID: CSEL-006 Customer: CUS-005672 — Elena Petrov Watchlist: EU Consolidated Renewed TTL: 12 months Checker: Sarah Chen (Compliance Officer) |
| Steps | 1. Open expired entry CSEL-006 from the entries grid. 2. Click Renew, update TTL to 12 months, and refresh supporting evidence if prompted. 3. Submit the renewal request. 4. Open Maker-checker queue and approve the renewal as Compliance Officer. 5. Re-open the entry and run screening for the same customer and watchlist. |
| Expected Result | Renewal creates a new pending approval request; after approval the entry returns to Active status and suppression resumes on the next screening run. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, ttl-entry-renewal, high, rbac, security |

### EEM-015 — Upload a clean CSV batch and verify that the import reaches the approval stage with the correct summary.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Bulk Upload |
| Priority | High |
| Preconditions | The bulk-upload template is available and the test file contains only valid rows. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Open the Bulk Upload option from the list view 2. Download the template and populate it with valid exception rows 3. Upload the completed file 4. Review the parsing summary shown by the system 5. Submit the batch and check the queue status. |
| Expected Result | The file is accepted, the valid rows are counted correctly, and the batch moves forward in maker-checker rather than failing at upload time. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, bulk-upload, high, export |

### EEM-016 — Check how the system handles a mixed file that contains both valid and invalid rows.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Bulk Upload |
| Priority | Medium |
| Preconditions | A bulk file has a few good rows and at least one row with a missing or malformed mandatory field. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Upload the mixed CSV through Bulk Upload 2. Open the validation summary after parsing finishes 3. Read the row-level error messages for the bad records 4. Export or download the error log if the screen offers it 5. Confirm whether the valid rows are separated clearly from the rejected ones. |
| Expected Result | The system presents row-level validation detail, points out the bad records, and does not let the poor-quality rows pass unnoticed. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, bulk-upload, medium |

### EEM-017 — Verify that create, update, and delete actions received through API calls are captured in the audit trail.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | API Synchronisation |
| Priority | High |
| Preconditions | An API client is authorised to sync exception entries into the module. |
| Test Data | API Endpoint: POST /api/v1/csel/entries Rate Limit: 100 req/min Burst Size: 150 |
| Steps | 1. Send a create request for a new exception entry 2. Follow it with an update request on the same record 3. Send a delete request for that entry 4. Open the audit trail and filter for API sync activity 5. Compare the object IDs, timestamps, and event types with the requests you sent. |
| Expected Result | Each API action is recorded as a distinct sync event, and the audit trail shows the full create-update-delete sequence. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-entry-management, api-synchronisation, high, api |

### EEM-018 — Push the API request rate past the configured limit and confirm that throttling kicks in.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | API Synchronisation |
| Priority | High |
| Preconditions | A test client can generate a controlled burst of exception-submission requests. |
| Test Data | Entry ID: CSEL-006 Customer: CUS-005672 Expiry Date: 01 Mar 2026 Renewal TTL: 12 months |
| Steps | 1. Start a short load test against the exception submission endpoint 2. Increase the request volume until it crosses the steady-state limit 3. Keep sending requests through the burst window 4. Watch for the first throttled or rejected response 5. Check the HTTP status or error message returned by the API. |
| Expected Result | The API starts throttling once the limit is crossed, and excess requests are rejected instead of being processed normally. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, api-synchronisation, high, api |

### EEM-019 — Save a partially completed exception entry as Draft without entering maker-checker approval

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Add Entry |
| Priority | Medium |
| Preconditions | Add Entry panel is open on list "Onboarding Exceptions — OFAC SDN"; user has create permission. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Partial Fields: Customer Name, Watchlist Expected Status: Draft |
| Steps | 1. Click Add Entry on list "Onboarding Exceptions — OFAC SDN". 2. Enter Customer ID CUS-004521, customer name, and watchlist OFAC SDN but leave distinguishing attributes incomplete. 3. Click Save as draft. 4. Close the panel and reopen the draft from the entries grid or drafts filter. 5. Confirm the saved values and workflow status. |
| Expected Result | Entry is saved in Draft status with entered values retained and does not appear in the Pending Approval maker-checker queue. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, add-entry, medium, rbac, security |

### EEM-020 — Block submission of a Draft that still has missing mandatory fields

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Add Entry |
| Priority | High |
| Preconditions | Draft entry exists for CUS-004521 on list "Onboarding Exceptions — OFAC SDN" with at least one mandatory field blank. |
| Test Data | Draft Entry: Partial — CUS-004521 Missing Field: Date of Birth List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Open the draft entry from list detail. 2. Leave Customer ID or Date of Birth blank while other fields are populated. 3. Click Submit for approval. 4. Review inline validation on missing fields. 5. Confirm the entry status remains Draft. |
| Expected Result | Submission is blocked, mandatory-field validation messages appear, and the draft stays out of the maker-checker queue. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, add-entry, high, functional |

### EEM-021 — Edit and resave a Draft entry with updated field values

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Add Entry |
| Priority | Medium |
| Preconditions | Draft entry exists on list "Onboarding Exceptions — OFAC SDN" with partial customer details saved. |
| Test Data | Draft Entry: CUS-004521 Updated Fields: Distinguishing attributes, Reason code List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Open the draft from list detail. 2. Add distinguishing attributes and reason code Confirmed Different Person. 3. Click Save as draft again. 4. Reopen the same draft after refreshing the page. 5. Compare displayed values with the latest edits. |
| Expected Result | Updated draft values persist after resave and the entry remains in Draft status until formally submitted. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, add-entry, medium, reason-evidence |

### EEM-022 — Verify that invalid updates in Draft prevent successful submission.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Add Entry |
| Priority | Low |
| Preconditions | Add Entry panel is open on list "Onboarding Exceptions — OFAC SDN". Draft entry exists. |
| Test Data | Customer ID: CUS-004521 Draft Fields: Customer Name, Watchlist partial List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Open Draft 2. Remove a mandatory field value 3. Click Submit 4. Observe validation 5. Verify workflow status. |
| Expected Result | Validation highlights the cleared mandatory field, blocks submission, and the draft remains in Draft status without entering the approval queue. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, add-entry, low, functional |

### EEM-023 — Submit a completed Draft entry into the maker-checker approval queue

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Add Entry |
| Priority | High |
| Preconditions | Draft entry on list "Onboarding Exceptions — OFAC SDN" contains all mandatory fields and supporting evidence. |
| Test Data | Draft Entry: CUS-004521 — complete Reason Code: Confirmed Different Person Evidence: onboarding_fp_analysis.pdf |
| Steps | 1. Open the completed draft for CUS-004521. 2. Verify all mandatory fields, evidence attachment, and expiry date are populated. 3. Click Submit for approval. 4. Open Maker-checker queue and locate the new request. 5. Confirm the entry status changed from Draft to Pending Approval. |
| Expected Result | Draft transitions to Pending Approval, appears in maker-checker queue with full entry payload, and is unavailable for direct activation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, add-entry, high, rbac, security |

### EEM-024 — Verify IP Address/CIDR and IP Validity Period validate for IP Range exception type.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Data Model & Field Validation |
| Priority | High |
| Preconditions | Add entry form is open. |
| Test Data | Exception Type: IP Range CIDR: 203.0.113.0/24 Validity Period: 90 days |
| Steps | 1. Select IP Range type 2. Enter valid CIDR and 90-day validity 3. Submit 4. Retry with 91 days 5. Retry without IP address. |
| Expected Result | IP fields required for IP Range; validity accepts 1–90 days and rejects above 90. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, data-model-field-validation, high, functional |

### EEM-025 — Verify Mobile Number enforces E.164 format when exception type is Mobile Number.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Data Model & Field Validation |
| Priority | Medium |
| Preconditions | Add entry form is open. |
| Test Data | Valid Mobile: +447911123456 Invalid Mobile: 07911123456 |
| Steps | 1. Select Mobile Number type 2. Enter invalid format 3. Attempt submit 4. Enter valid E.164 5. Complete and submit. |
| Expected Result | Non-E.164 mobile values are rejected with a field-level error; a valid E.164 number is accepted and the entry can proceed to submission. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, data-model-field-validation, medium, functional |

### EEM-026 — Verify Reason Detail enforces minimum 50 and maximum 2,000 characters.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Add Entry |
| Priority | High |
| Preconditions | Add entry form open with other mandatory fields completed. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Enter 49 chars and submit 2. Enter 50 chars and submit 3. Enter 2,001 chars 4. Observe validation 5. Submit with 2,000 chars. |
| Expected Result | Reason Detail outside 50–2,000 range is rejected; valid range allows submission. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, add-entry, high, reason-evidence |

### EEM-027 — Verify Other reason code requires 200+ chars in Reason Detail and MLRO checker routing.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Add Entry |
| Priority | High |
| Preconditions | Add Entry panel is open on list "Onboarding Exceptions — OFAC SDN". Maker creating entry with Other reason code. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Select Other 2. Enter under 200 chars and submit 3. Enter 200+ chars and submit 4. Open maker-checker queue 5. Verify MLRO required. |
| Expected Result | Reason Detail under 200 characters is blocked for Other reason code; entries with 200+ characters route to MLRO in the maker-checker queue. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, add-entry, high, rbac, security |

### EEM-028 — Verify entry form displays correct checker routing hint for standard vs PEP/Other reason codes

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Add Entry |
| Priority | Medium |
| Preconditions | Add Entry panel is open on an active exception list. |
| Test Data | Standard Reason Code: Confirmed Different Person PEP Reason Code: PEP — Approved with Enhanced Due Diligence Other Reason Code: Other |
| Steps | 1. Review the governance hint shown above the submit controls. 2. Select reason code Confirmed Different Person and note the indicated checker requirement. 3. Change reason code to PEP — Approved with Enhanced Due Diligence. 4. Confirm the hint updates to require MLRO as checker. 5. Select Other and confirm MLRO requirement remains indicated. |
| Expected Result | Form displays Compliance Officer or Compliance Manager for standard codes and MLRO for PEP and Other entries before submission. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, add-entry, medium, rbac, security |

### EEM-029 — Verify Re-activate for suspended entries routes through maker-checker with mandatory reason.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Suspend / Delete Entry |
| Priority | High |
| Preconditions | Suspended exception entry exists. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Open suspended entry 2. Select Re-activate 3. Enter mandatory reason 4. Submit 5. After approval verify Active status. |
| Expected Result | Re-activate requires approval and restores Active status after checker approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, suspend-delete-entry, high, rbac, security |

### EEM-031 — Verify material identity change auto-suspends entries within 15 minutes.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | TTL & Entry Renewal |
| Priority | High |
| Preconditions | Customer has active CSEL entries. |
| Test Data | Customer ID: CUS-011234 Change Field: Legal Name Active Entries: 2 |
| Steps | 1. Note active status 2. Change name/DOB/nationality in core banking 3. Wait up to 15 min 4. Refresh entry status 5. Check CO notification. |
| Expected Result | Entries auto-suspended within 15 minutes; Compliance Officer notified. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, ttl-entry-renewal, high, functional |

### EEM-032 — Verify bulk upload duplicate detection for same customer ID and watchlist scope.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Bulk Upload |
| Priority | High |
| Preconditions | Bulk file with duplicate rows prepared. |
| Test Data | File: csel_bulk_valid.csv Target List: Onboarding Exceptions — OFAC SDN Valid Rows: 10; Invalid Rows: 2 |
| Steps | 1. Upload file with duplicates 2. Run validation 3. Review error report 4. Confirm duplicates flagged 5. Submit unique rows only. |
| Expected Result | Duplicates identified in validation and excluded until resolved. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, bulk-upload, high, export |

### EEM-033 — Verify checker can drill into bulk upload rows before batch approval.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Bulk Upload |
| Priority | Medium |
| Preconditions | Bulk upload pending in MC queue. |
| Test Data | File: csel_bulk_valid.csv Target List: Onboarding Exceptions — OFAC SDN Valid Rows: 10; Invalid Rows: 2 |
| Steps | 1. Open bulk request 2. Drill into row detail 3. Review fields 4. Approve batch 5. Confirm rows activate. |
| Expected Result | Checker inspects row detail before approval; valid rows activate. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, bulk-upload, medium, rbac, security |

### EEM-034 — Verify View History panel shows submission, approval, and suppression events

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Edit Entry |
| Priority | Medium |
| Preconditions | Entry with history exists. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Click View History 2. Expand items 3. Verify submitted/approved/suppressed events 4. Compare timestamps 5. Close panel. |
| Expected Result | History panel shows chronological expandable events matching audit. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, edit-entry, medium, evaluation-engine |

### EEM-035 — Verify match score colour-coded badge in entry grid

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Add Entry |
| Priority | Low |
| Preconditions | Add Entry panel is open on list "Onboarding Exceptions — OFAC SDN". Entries with varied scores exist. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Open entry grid 2. Check high (≥90), medium, low scores 3. Verify colour bands 4. Refresh page 5. Confirm consistency. |
| Expected Result | Entry grid renders high, medium, and low match scores with distinct badge colours that align to configured score thresholds. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, add-entry, low, reason-evidence |

### EEM-036 — Verify POST /csel/conflict-check blocks conflicting customer ID before submission.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | API Synchronisation |
| Priority | High |
| Preconditions | API client authorized; customer on custom blacklist. |
| Test Data | Customer ID: CUS-004521 Conflicting List: Custom blacklist — High Risk Entities |
| Steps | 1. Call conflict-check 2. Review response 3. Attempt POST entry 4. Verify blocked 5. Check integrity audit event. |
| Expected Result | Conflict-check flags conflict; submission blocked and logged. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, api-synchronisation, high, api |

### EEM-037 — Verify API bulk endpoint accepts up to 500 entries per call.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | API Synchronisation |
| Priority | Medium |
| Preconditions | API bulk access available. |
| Test Data | File: csel_bulk_valid.csv Target List: Onboarding Exceptions — OFAC SDN Valid Rows: 10; Invalid Rows: 2 |
| Steps | 1. Submit 500 entries 2. Confirm acceptance 3. Submit 501 4. Review error 5. Verify excess not queued. |
| Expected Result | API accepts bulk payloads up to 500 entries and returns a clear limit-exceeded error when 501 entries are submitted. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-entry-management, api-synchronisation, medium, export |

### EEM-038 — Verify KYC onboarding flagged Pending CSEL Approval on onboarding exception submit.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Add Entry |
| Priority | High |
| Preconditions | Add Entry panel is open on list "Onboarding Exceptions — OFAC SDN". Customer in active KYC onboarding flow. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Submit onboarding exception 2. Open KYC queue 3. Verify pending flag 4. Approve exception 5. Verify flag clears per policy. |
| Expected Result | KYC shows Pending CSEL Approval until checker approves (or conditional release). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, add-entry, high, reason-evidence |

### EEM-039 — Verify Script Type values AR, ZH-CN, ZH-TW, CY, LA

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Data Model & Field Validation |
| Priority | Medium |
| Preconditions | Add Entry panel is open on list "Onboarding Exceptions — OFAC SDN". Original script name populated. |
| Test Data | Original Script Name: محمد الرحman Script Type: AR Customer ID: CUS-004521 |
| Steps | 1. Enter Original Script Name 2. Open Script Type dropdown 3. Verify supported script-type values 4. Save draft 5. Reopen and confirm. |
| Expected Result | Script Type contains all supported script-type values and persists correctly. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, data-model-field-validation, medium, functional |

### EEM-040 — Verify bulk suspend/delete of multiple entries is not supported

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Suspend / Delete Entry |
| Priority | Medium |
| Preconditions | List with multiple active entries. |
| Test Data | File: csel_bulk_valid.csv Target List: Onboarding Exceptions — OFAC SDN Valid Rows: 10; Invalid Rows: 2 |
| Steps | 1. Attempt multi-select suspend/delete 2. Confirm only single-entry actions available 3. Process one entry 4. Verify MC flow 5. Confirm no bulk path. |
| Expected Result | Bulk suspend/delete unavailable; each entry actioned individually. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, suspend-delete-entry, medium, export |

### EEM-041 — Verify Jurisdiction Scope optional field limits exception application to specified jurisdiction when populated.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Data Model & Field Validation |
| Priority | Medium |
| Preconditions | Add entry form is open. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Create entry with jurisdiction scope set to a specific country 2. Submit and approve 3. Screen customer from matching jurisdiction — verify suppression 4. Screen same customer from different jurisdiction — verify alert fires 5. Check audit log. |
| Expected Result | Exception applies only within configured jurisdiction scope. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, data-model-field-validation, medium, reason-evidence |

### EEM-042 — Verify Email Address conditional field validates format when alert was triggered by email match.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Data Model & Field Validation |
| Priority | Medium |
| Preconditions | Add entry form supports email-based exception type. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Select exception context requiring email 2. Enter invalid email format 3. Attempt submit 4. Enter valid email 5. Complete mandatory fields and submit. |
| Expected Result | Invalid email rejected; valid email stored and submission proceeds to approval queue. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, data-model-field-validation, medium, notifications |

### EEM-043 — Verify True Hit confirmed alert cannot be submitted to CSEL scope.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Add Entry |
| Priority | High |
| Preconditions | Add Entry panel is open on list "Onboarding Exceptions — OFAC SDN". Screening alert confirmed as True Hit in case management. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Open confirmed True Hit alert 2. Attempt Add to Exception List 3. Observe system response 4. Verify no MC request created 5. Check audit/integrity log if blocked. |
| Expected Result | True Hit cannot be added to CSEL; submission is blocked with clear message. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, add-entry, high, notifications |

### EEM-044 — Verify entry can be initiated from Case Management with evidence reference linked to source case.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Add Entry |
| Priority | High |
| Preconditions | Add Entry panel is open on list "Onboarding Exceptions — OFAC SDN". Active case record exists in Case Management. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Open case record 2. Initiate CSEL entry from case 3. Verify evidence reference pre-linked 4. Complete and submit 5. Open case link from entry detail. |
| Expected Result | Entry initiated from case with valid cross-reference to source case. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, add-entry, high, reason-evidence |

### EEM-045 — Verify Download Template from bulk upload returns XLSX with all mandatory columns

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | Bulk Upload |
| Priority | Medium |
| Preconditions | User has bulk upload access on list detail. |
| Test Data | File: csel_bulk_valid.csv Target List: Onboarding Exceptions — OFAC SDN Valid Rows: 10; Invalid Rows: 2 |
| Steps | 1. Open Bulk Upload panel 2. Click Download Template 3. Open XLSX file 4. Verify mandatory column headers 5. Compare against bulk upload template specification. |
| Expected Result | Downloaded XLSX template includes every mandatory bulk-upload column with correct header labels and sample row guidance; no required field is missing. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, bulk-upload, medium, export |

### EEM-046 — Verify GET /csel/{listId}/entries returns paginated filtered results for API client.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | API Synchronisation |
| Priority | Medium |
| Preconditions | API client authorized; list contains multiple entries. |
| Test Data | API Endpoint: POST /api/v1/csel/entries Rate Limit: 100 req/min Burst Size: 150 |
| Steps | 1. Call GET entries with pagination params 2. Apply status filter 3. Verify response page size 4. Apply search term 5. Compare with UI list data. |
| Expected Result | GET endpoint returns correct paginated, filtered entry data. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-entry-management, api-synchronisation, medium, api |

### EEM-047 — Verify GET /csel/{listId}/entries/{entryId}/audit returns full entry audit history.

| Field | Value |
| --- | --- |
| Module | Exception Entry Management |
| Sub-Module | API Synchronisation |
| Priority | Medium |
| Preconditions | Entry with multiple audit events exists. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Customer ID: CUS-004521 Customer Name: Mohammed Al-Rahman Watchlist: OFAC SDN Reason Code: Confirmed Different Person |
| Steps | 1. Call GET audit endpoint for entry 2. Compare events with UI audit trail 3. Verify timestamps and event types 4. Check before/after snapshots if returned 5. Confirm completeness. |
| Expected Result | API returns complete audit history matching UI audit records. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-entry-management, api-synchronisation, medium, api |

### ELM-001 — Verify exception list landing page shows summary cards, status tabs, and list grid with required columns

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Landing Page |
| Priority | High |
| Preconditions | Compliance user with list-view permission is signed in; at least five active exception lists exist. |
| Test Data | User Role: Compliance Officer Expected Active Lists: 5+ Sample List: Onboarding Exceptions — OFAC SDN Tab Filters: Active, Suspended, All |
| Steps | 1. Navigate to Configuration > Screening – Exception List Manager. 2. Confirm summary cards show Total lists, Active lists, Total exceptions, and Pending approval counts. 3. Switch Active, Suspended, and All tabs and compare grid contents. 4. Verify grid columns include list name, category, status, entry counts, Exp 30d, Expired, and row actions. 5. Use search to locate "Onboarding Exceptions — OFAC SDN" and confirm the row actions View, Edit, and Suspend are available per permission. |
| Expected Result | Landing page loads with populated summary cards, working status tabs, and a list grid showing all required columns and permitted row actions without layout defects. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, landing-page, high, functional |

### ELM-002 — Check that list search, filter, sort, pagination, and file export behave as a single flow on the landing screen.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Landing Page |
| Priority | Low |
| Preconditions | User is on the landing page and at least 11 exception lists exist so paging can be tested. |
| Test Data | Page Sizes: 10, 25, 50, 100 Dataset: 45 exception lists |
| Steps | 1. Type a known list name into the search box and note the result count 2. Clear the search and apply a category filter, then add a status filter on top of it 3. Click a column header such as Total Entries to change the sort order 4. Switch the page size from 10 to 25 and move to the next page 5. Export the current view as CSV and then as PDF. |
| Expected Result | The grid refreshes according to the selected search and filters, sorting changes the row order, pagination updates the page set, and both export formats download the same filtered dataset. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, landing-page, low, export |

### ELM-003 — Create a new exception list with valid input and verify that it is routed through the approval flow.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Create Exception List |
| Priority | High |
| Preconditions | User with list-management permission can access Exception List Manager. Maker user is available and the list name does not already exist. |
| Test Data | List Name: Event-Driven Exceptions — Adverse Media Q2 Category: Event-Driven Exceptions Default TTL: 12 months Review Frequency: 6 months |
| Steps | 1. Click CREATE NEW LIST from the landing page 2. Enter a fresh list name, choose a category, and write a short purpose 3. Fill in the default expiry period, default review frequency, and creation reason 4. Submit the form and wait for the system response 5. Re-open the list from the queue or the landing page if it appears there. |
| Expected Result | The list is accepted, saved with the submitted values, and placed into maker-checker approval instead of being activated immediately. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, create-exception-list, high, functional |

### ELM-004 — Confirm that mandatory fields and duplicate list names are blocked at save time.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Create Exception List |
| Priority | Low |
| Preconditions | User with list-management permission can access Exception List Manager. Maker user is on the create form and an existing list name is already available for reuse in the test. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Category: Onboarding Exceptions Status: Active User Role: Compliance Officer |
| Steps | 1. Open the create form again from the landing page 2. Leave the required fields empty and try to continue once 3. Enter a duplicate list name and keep the other fields valid 4. Push one field beyond its allowed length, such as the name or purpose 5. Attempt to submit the form after each check. |
| Expected Result | The form refuses submission, inline validation appears for missing or oversized data, and duplicate list names are not accepted. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, create-exception-list, low, error-handling |

### ELM-005 — Verify the PEP exception list rule that the default review frequency cannot exceed six months.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Create Exception List |
| Priority | Low |
| Preconditions | User with list-management permission can access Exception List Manager. Maker user is creating a new list under the PEP Exceptions category. |
| Test Data | Category: PEP Exceptions Default TTL: 24 months Review Frequency: 6 months List Name: PEP Approved Customers — Enhanced DD |
| Steps | 1. Start a new list creation 2. Select PEP Exceptions as the category 3. Set the default review frequency to 12 months 4. Keep the remaining fields valid and try to submit 5. Change the frequency to 6 months and submit again. |
| Expected Result | The first submission is rejected with a business-rule message, while the corrected six-month setup can move forward in the approval workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, create-exception-list, low, maker-checker |

### ELM-006 — Open exception list detail and confirm metadata panel, entry grid, and permitted actions

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | View Exception List |
| Priority | High |
| Preconditions | Active list "Onboarding Exceptions — OFAC SDN" contains at least one approved entry. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Sample Entry: CSEL-001 — Mohammed Al-Rahman Expected Columns: Customer ID, Name, Watchlist, Match Score, Reason Code, Status, Expiry |
| Steps | 1. From the landing page click View on "Onboarding Exceptions — OFAC SDN". 2. Review metadata: category, default TTL, review frequency, purpose, created/modified dates, and status. 3. Scroll to the exception entries grid and verify column headers and status badges. 4. Confirm Add Entry, Bulk upload, Export CSV/PDF, search, and status filters are present. 5. Open View History for an active entry and confirm lifecycle events display. |
| Expected Result | Detail view shows complete list metadata, entry grid with required columns, working toolbar controls, and entry history with submission and suppression events. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, view-exception-list, high, reason-evidence |

### ELM-007 — Verify entry-level search, filter, sort, and export from the list detail screen.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | View Exception List |
| Priority | Low |
| Preconditions | User with list-management permission can access Exception List Manager. The selected list has entries in different statuses, expiry dates, and watchlist scopes. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Category: Onboarding Exceptions Status: Active User Role: Compliance Officer |
| Steps | 1. Open the list detail page 2. Filter the entry grid by status and then by expiry date 3. Narrow the rows by watchlist and reason code 4. Click one of the sortable columns to change the order 5. Export the record set to CSV and PDF. |
| Expected Result | The entry table refreshes correctly after every filter, the sort order changes as requested, and the exported files contain the same filtered record set. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, view-exception-list, low, export |

### ELM-008 — Change the allowed fields of an existing list and send the update through approval.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Edit Exception List |
| Priority | High |
| Preconditions | User with list-management permission can access Exception List Manager. Maker user has edit permission on an active list. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Category: Onboarding Exceptions Status: Active User Role: Compliance Officer |
| Steps | 1. Open the list and choose Edit 2. Update the list name or purpose, then adjust the default TTL and review frequency 3. Add a reason for the change when prompted 4. Save the update and wait for the system to respond 5. Revisit the list from the queue or the list view to confirm the new state. |
| Expected Result | The modified values are captured, the request is routed for approval, and the system records the edit instead of applying it silently. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, edit-exception-list, high, functional |

### ELM-009 — Check that the list category stays locked after creation and cannot be changed during edit.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Edit Exception List |
| Priority | Low |
| Preconditions | User with list-management permission can access Exception List Manager. Maker user is editing an existing list that already has a fixed category. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Category: Onboarding Exceptions Status: Active User Role: Compliance Officer |
| Steps | 1. Open the Edit screen for the target list 2. Locate the List Category field on the form 3. Try to change it from the dropdown or keyboard 4. Review the rest of the editable fields and press Save 5. Watch for any validation or blocked-field message. |
| Expected Result | The category remains read-only or blocked, the edit request cannot change that field, and only the allowed fields stay editable. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, edit-exception-list, low, functional |

### ELM-010 — Suspend a list and verify that the system warns the user before the action is committed.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Suspend / Re-activate List |
| Priority | Low |
| Preconditions | User with list-management permission can access Exception List Manager. Authorized user can place the list into suspension and the list is currently active. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Current Status: Active Action Reason: Temporary policy review |
| Steps | 1. Open the target list from the landing page 2. Choose the Suspend action 3. Read the warning about the screening impact and confirm the action 4. Complete the approval step if the workflow sends it to maker-checker 5. Refresh the page and check the list status. |
| Expected Result | The system shows the risk warning, the suspension request is recorded, and the list status changes to Suspended only after the action is completed. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, suspend-re-activate-list, low, functional |

### ELM-011 — Bring back a suspended list and confirm that the earlier active entries return to use.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Suspend / Re-activate List |
| Priority | Low |
| Preconditions | User with list-management permission can access Exception List Manager. The selected list is already suspended and the user has permission to re-activate it. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Current Status: Active Action Reason: Temporary policy review |
| Steps | 1. Open the suspended list 2. Click the Re-activate option 3. Confirm the prompt and submit the request 4. Complete approval if the workflow requires it 5. Reopen the list and check the status of the affected entries. |
| Expected Result | The list returns to Active, previously active entries are restored to the screening path, and the suppression behaviour is applied again. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, suspend-re-activate-list, low, functional |

### ELM-012 — Delete a list through the supported soft-delete flow and verify that the reason is mandatory.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Delete Exception List |
| Priority | Low |
| Preconditions | User has delete permission on the target list and maker-checker approval is enabled. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Current Status: Active Action Reason: Temporary policy review |
| Steps | 1. Pick a list from the landing page and select Delete 2. Enter the required deletion reason 3. Submit the request and wait for the approval handoff 4. Open the queue or revisit the list after approval 5. Check whether the list still appears in the active index. |
| Expected Result | The delete request cannot go through without a reason, and after approval the list is removed from the active index rather than being permanently erased. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, delete-exception-list, low, functional |

### ELM-013 — Confirm that deleted lists are retained as soft-deleted records and are not physically purged.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Delete Exception List |
| Priority | Low |
| Preconditions | User with list-management permission can access Exception List Manager. A list has already been deleted through the approved workflow. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Current Status: Active Action Reason: Temporary policy review |
| Steps | 1. Search for the deleted list from the landing page 2. Open the audit or history view for the same list if available 3. Check whether the deleted record is still retained in the system 4. Try to reopen the list from the active listing 5. Verify the retention status or system message shown for the record. |
| Expected Result | The deleted list is not returned in the active landing page, the record remains traceable as a retained item, and physical deletion is not allowed. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, delete-exception-list, low, functional |

### ELM-014 — Verify that landing page counters recalculate correctly after entry status changes.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Landing Page |
| Priority | Low |
| Preconditions | Landing page contains exception lists with active entries. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Category: Onboarding Exceptions Status: Active User Role: Compliance Officer |
| Steps | 1. Note current counter values 2. Approve, suspend, expire, or renew an entry 3. Refresh landing page 4. Compare counters 5. Verify updated counts. |
| Expected Result | Total Entries, Active, Expiring Within 30 Days, and Expired counters reflect the latest data accurately. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, landing-page, low, functional |

### ELM-015 — Verify that dashboard counters update after approval and rejection actions.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Landing Page |
| Priority | High |
| Preconditions | User with list-management permission can access Exception List Manager. Pending requests are available. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Category: Onboarding Exceptions Status: Active User Role: Compliance Officer |
| Steps | 1. Note dashboard counts 2. Approve or reject a request 3. Refresh page 4. Review counters 5. Compare values. |
| Expected Result | Dashboard values are recalculated immediately after workflow completion. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, landing-page, high, maker-checker |

### ELM-016 — Verify that dashboard counters remain consistent after page refresh and re-login.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Landing Page |
| Priority | Low |
| Preconditions | User with list-management permission can access Exception List Manager. Counters have recently changed due to system activity. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Category: Onboarding Exceptions Status: Active User Role: Compliance Officer |
| Steps | 1. Refresh page 2. Logout 3. Login again 4. Open landing page 5. Compare counts. |
| Expected Result | Dashboard displays the same recalculated values after refresh and new session login. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, landing-page, low, functional |

### ELM-017 — Verify that List Name accepts exactly 100 characters.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Create Exception List |
| Priority | Low |
| Preconditions | User with list-management permission can access Exception List Manager. User is on Create Exception List screen. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Category: Onboarding Exceptions Status: Active User Role: Compliance Officer |
| Steps | 1. Enter 100-character List Name 2. Complete mandatory fields 3. Submit form 4. Observe response 5. Verify creation. |
| Expected Result | System accepts the value and processes the request successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, create-exception-list, low, functional |

### ELM-018 — Verify that List Name exceeding 100 characters is rejected.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Create Exception List |
| Priority | High |
| Preconditions | User with list-management permission can access Exception List Manager. User is on Create Exception List screen. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Category: Onboarding Exceptions Status: Active User Role: Compliance Officer |
| Steps | 1. Enter 101-character List Name 2. Complete mandatory fields 3. Submit form 4. Observe validation 5. Verify error message. |
| Expected Result | System blocks submission and displays maximum length validation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, create-exception-list, high, maker-checker |

### ELM-019 — Verify that Description accepts exactly 500 characters.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Create Exception List |
| Priority | Low |
| Preconditions | User with list-management permission can access Exception List Manager. User is on Create Exception List screen. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Category: Onboarding Exceptions Status: Active User Role: Compliance Officer |
| Steps | 1. Enter 500-character Description 2. Complete mandatory fields 3. Submit form 4. Observe response 5. Verify creation. |
| Expected Result | Description field accepts exactly 500 characters, persists the full text after save, and displays the complete value on reopen. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, create-exception-list, low, functional |

### ELM-020 — Verify that Description exceeding 500 characters is rejected.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Create Exception List |
| Priority | High |
| Preconditions | User with list-management permission can access Exception List Manager. User is on Create Exception List screen. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Category: Onboarding Exceptions Status: Active User Role: Compliance Officer |
| Steps | 1. Enter 501-character Description 2. Complete mandatory fields 3. Submit form 4. Observe validation 5. Verify error message. |
| Expected Result | System blocks submission and displays maximum length validation message. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, create-exception-list, high, maker-checker |

### ELM-021 — Verify landing page summary cards display Total lists, Active lists, Total exceptions, and Pending approval

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Landing Page |
| Priority | High |
| Preconditions | User with list-management permission can access Exception List Manager. User is logged in with CSEL view access and exception list data exists. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Category: Onboarding Exceptions Status: Active User Role: Compliance Officer |
| Steps | 1. Open Exception lists from the left navigation 2. Verify the four summary cards at the top 3. Compare each card value with underlying list and entry data 4. Refresh the page 5. Confirm values remain consistent. |
| Expected Result | Summary cards show Total lists, Active lists, Total exceptions, and Pending approval with accurate counts. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, landing-page, high, functional |

### ELM-022 — Verify list status tabs (Active, Suspended, All) filter the landing grid

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Landing Page |
| Priority | High |
| Preconditions | Landing page contains lists in Active and Suspended status. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Current Status: Active Action Reason: Temporary policy review |
| Steps | 1. Open the landing page 2. Click Active tab and note row count 3. Click Suspended and verify only suspended lists appear 4. Click All and verify combined count 5. Confirm tab badges match filtered results. |
| Expected Result | Each status tab filters the grid correctly and badge counts match visible rows. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, landing-page, high, functional |

### ELM-023 — Verify landing grid columns include Exp 30d and Expired entry counters aligned to list detail

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Landing Page |
| Priority | Medium |
| Preconditions | User with list-management permission can access Exception List Manager. Lists exist with entries expiring within 30 days and expired entries. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Category: Onboarding Exceptions Status: Active User Role: Compliance Officer |
| Steps | 1. Open landing page 2. Inspect grid column headers 3. Compare Exp 30d and Expired values for a known list 4. Cross-check against list detail summary 5. Export CSV and confirm columns. |
| Expected Result | Landing grid displays Exp 30d and Expired columns with counts matching list detail summaries and CSV export values for the same list. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, landing-page, medium, functional |

### ELM-024 — Verify Create Exception List supports Save as draft without entering maker-checker queue.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Create Exception List |
| Priority | Medium |
| Preconditions | User with list-management permission can access Exception List Manager. Maker user is on the create list panel. |
| Test Data | List Name: Event-Driven Exceptions — Adverse Media Q2 Category: Event-Driven Exceptions Default TTL: 12 months Review Frequency: 6 months |
| Steps | 1. Click Create new list 2. Enter partial valid data 3. Click Save as draft 4. Reopen draft 5. Verify it is not in pending approval queue. |
| Expected Result | Draft is saved, values retained on reopen, and no maker-checker request is created until Submit for approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, create-exception-list, medium, rbac, security |

### ELM-025 — Verify Notify Compliance Officer and Auto-expire entries at TTL toggles persist on create form.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Create Exception List |
| Priority | Medium |
| Preconditions | User with list-management permission can access Exception List Manager. Maker user opens create list panel. |
| Test Data | List Name: Event-Driven Exceptions — Adverse Media Q2 Category: Event-Driven Exceptions Default TTL: 12 months Review Frequency: 6 months |
| Steps | 1. Open create list form 2. Toggle both options 3. Complete mandatory fields and save draft 4. Reopen draft 5. Verify toggle states. |
| Expected Result | Toggles are visible, interactive, and saved values persist on draft reload. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, create-exception-list, medium, functional |

### ELM-026 — Verify Reason for Creation is mandatory and retained in audit log

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Create Exception List |
| Priority | High |
| Preconditions | User with list-management permission can access Exception List Manager. Maker user is on create list form. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Category: Onboarding Exceptions Status: Active User Role: Compliance Officer |
| Steps | 1. Complete all fields except Reason for Creation 2. Attempt submit 3. Enter reason and submit 4. Open audit trail 5. Confirm reason is recorded. |
| Expected Result | Submission blocked without reason; reason stored in audit log after submission. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, create-exception-list, high, audit-trail |

### ELM-027 — Verify 24 months default TTL option enforces MLRO sign-off requirement

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Create Exception List |
| Priority | High |
| Preconditions | User with list-management permission can access Exception List Manager. Maker user is creating a new list. |
| Test Data | Category: PEP Exceptions Default TTL: 24 months Review Frequency: 6 months List Name: PEP Approved Customers — Enhanced DD |
| Steps | 1. Open create form 2. Select 24 months (MLRO sign-off required) 3. Complete mandatory fields 4. Submit for approval 5. Verify MLRO checker routing. |
| Expected Result | Selecting 24-month default TTL routes the list-creation request to MLRO checker approval instead of standard Compliance Officer approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, create-exception-list, high, rbac, security |

### ELM-028 — Verify pagination supports 10, 25, 50, and 100 rows per page

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Landing Page |
| Priority | Medium |
| Preconditions | User with list-management permission can access Exception List Manager. More than 100 exception lists exist or test data is seeded. |
| Test Data | Page Sizes: 10, 25, 50, 100 Dataset: 45 exception lists |
| Steps | 1. Open landing page 2. Set each page size option 3. Count visible rows 4. Navigate pages 5. Confirm pager text updates. |
| Expected Result | All four page-size options work and pagination reflects selection. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, landing-page, medium, functional |

### ELM-029 — Verify Bulk upload is accessible from landing page header

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Landing Page |
| Priority | Medium |
| Preconditions | User with list-management permission can access Exception List Manager. User has bulk upload permission. |
| Test Data | Target List: Onboarding Exceptions — OFAC SDN File: csel_bulk_template.xlsx Reason for addition: Quarterly onboarding batch |
| Steps | 1. Open landing page 2. Click Bulk upload in header 3. Verify panel opens 4. Confirm list selector and template download 5. Close panel. |
| Expected Result | Bulk upload panel opens from landing header with required controls. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, landing-page, medium, bulk-upload |

### ELM-030 — Verify sidebar menu search filters navigation menu items.

| Field | Value |
| --- | --- |
| Module | Exception List Management |
| Sub-Module | Landing Page |
| Priority | Low |
| Preconditions | User with list-management permission can access Exception List Manager. User is logged into CSEL module. |
| Test Data | List: Onboarding Exceptions — OFAC SDN Category: Onboarding Exceptions Status: Active User Role: Compliance Officer |
| Steps | 1. Type 'Maker' in sidebar search 2. Verify Maker-checker remains visible 3. Type 'Sanctions' 4. Verify Screening items filter 5. Clear search. |
| Expected Result | Sidebar search filters menu items in real time without breaking navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-list-management, landing-page, low, functional |

### ERR-001 — Verify that the report opens with the correct summary cards and section layout.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Executive Summary |
| Priority | Medium |
| Preconditions | User has access to the Exception Register page and at least one report is available. |
| Test Data | Report Period: Current month User Role: Compliance Officer Sample List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Sign in with a role allowed to view reporting 2. Open the Exception Register screen from the left menu 3. Read the summary cards at the top of the page 4. Check that the report sections load without any missing panel 5. Confirm the page title matches the current reporting month. |
| Expected Result | The page loads with the expected summary cards, section headers, and the correct report title. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, executive-summary, medium, reporting |

### ERR-002 — Check that the total active exceptions count matches the data shown in the report table.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Executive Summary |
| Priority | Medium |
| Preconditions | Exception Register report is available for the current period. The register contains active lists and active entries for the selected month. |
| Test Data | Report Period: Current month User Role: Compliance Officer Sample List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Open the report for the current period 2. Note the total active exceptions count from the summary card 3. Compare it with the active rows visible in the register table 4. Refresh the screen once more to rule out a stale value 5. Verify the number remains consistent after reload. |
| Expected Result | The count shown on the summary card is aligned with the values represented in the report data. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, executive-summary, medium, reporting |

### ERR-003 — Verify the New This Month metric against newly created exception items.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Executive Summary |
| Priority | Medium |
| Preconditions | At least one exception list or exception entry was created during the reporting month. |
| Test Data | Report Period: Current month User Role: Compliance Officer Sample List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Open the register report 2. Locate the New This Month card 3. Cross-check the figure against recently created exceptions in the system 4. Open a recent record and confirm its creation date 5. Ensure the record falls within the current reporting month. |
| Expected Result | The New This Month value reflects items created during the same calendar month as the report. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, executive-summary, medium, reporting |

### ERR-004 — Confirm that the Suppressions This Month metric increments when alerts are suppressed.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Executive Summary |
| Priority | Medium |
| Preconditions | Exception Register report is available for the current period. A valid active exception exists and at least one screening hit has been suppressed this month. |
| Test Data | Report Period: Current month User Role: Compliance Officer Sample List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Trigger a screening hit that should be suppressed by an approved exception 2. Allow the engine to finish the suppression 3. Return to the register report 4. Read the Suppressions This Month card 5. Compare the value with the suppression activity that just occurred. |
| Expected Result | The suppression counter updates and shows the current month’s suppression total. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, executive-summary, medium, evaluation-engine |

### ERR-005 — Check the Expiring Within 30 Days count and sample list entries.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Executive Summary |
| Priority | Medium |
| Preconditions | Exception Register report is available for the current period. Some exceptions are due to expire within 30 days. |
| Test Data | Sample Entry: Senator James Okafor (CUS-009012) Expiry Date: 30 Jun 2026 Category: PEP Exceptions |
| Steps | 1. Open the Exception Register report 2. Review the Expiring Within 30 Days summary card 3. Scroll to the expiring items section 4. Verify that the listed items show valid expiry dates 5. Open one record and confirm the expiry date matches the warning bucket. |
| Expected Result | The warning count and the listed items both show entries that are genuinely close to expiry. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, executive-summary, medium, reporting |

### ERR-006 — Verify that the Entries by Reason Code breakdown is displayed with percentages.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Reason Code Analysis |
| Priority | Medium |
| Preconditions | Exception Register report is available for the current period. The register has multiple reason-code categories in the current period. |
| Test Data | Reason Codes: Confirmed Different Person (41%), Name Variant (24%), PEP — Approved with EDD (17%) |
| Steps | 1. Open the report page 2. Locate the Entries by Reason Code section 3. Review each reason-code row and its percentage column 4. Compare the visible split against the underlying register data 5. Confirm that the total distribution looks complete and not truncated. |
| Expected Result | The reason-code breakdown renders correctly with counts and percentages for each category. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, reason-code-analysis, medium, maker-checker |

### ERR-007 — Verify that clicking a reason code row opens the corresponding filtered view or detail context.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Reason Code Analysis |
| Priority | Medium |
| Preconditions | The report contains clickable reason-code rows. |
| Test Data | Reason Codes: Confirmed Different Person (41%), Name Variant (24%), PEP — Approved with EDD (17%) |
| Steps | 1. Open the Exception Register report 2. Select one reason-code row from the list 3. Observe whether the page opens a filtered list or a drill-down view 4. Inspect the records returned by that selection 5. Confirm the visible entries belong to the chosen reason code. |
| Expected Result | The selected reason code opens the related filtered context and shows matching records. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, reason-code-analysis, medium, maker-checker |

### ERR-008 — Check that the watchlist analysis section shows the correct top watchlist sources.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Watchlist Analysis |
| Priority | Medium |
| Preconditions | The reporting month includes activity across several watchlists. |
| Test Data | Top Watchlists: OFAC SDN (18), UN Consolidated (11), EU Consolidated (7) |
| Steps | 1. Open the report page 2. Move to the Watchlist Analysis section 3. Read the top watchlists and their suppression or exception counts 4. Compare them with known high-volume watchlists in the data 5. Confirm that the ordering follows the displayed volume logic. |
| Expected Result | The watchlist analysis section lists the correct watchlist sources and the counts are shown in a sensible order. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, watchlist-analysis, medium, reporting |

### ERR-009 — Confirm that the report export button creates a CSV file with the same visible data.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Export & Delivery |
| Priority | Medium |
| Preconditions | The user has export permission and the report contains at least one row. |
| Test Data | Report Period: April 2026 Export Format: CSV User Role: Compliance Manager |
| Steps | 1. Open the report screen 2. Keep the default filters or apply one simple filter 3. Click Export CSV 4. Download the generated file and open it 5. Compare the exported rows with the values on screen. |
| Expected Result | The CSV export matches the visible report data and keeps the same key columns and row values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, export-delivery, medium, export |

### ERR-010 — Confirm that the PDF export mirrors the report layout and includes the header information.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Export & Delivery |
| Priority | Medium |
| Preconditions | The report is available and the user can export PDFs. |
| Test Data | Report Period: April 2026 Export Format: CSV User Role: Compliance Manager |
| Steps | 1. Open the register report 2. Click Export PDF 3. Save the document locally 4. Open the PDF and inspect the first page 5. Compare the title, summary numbers, and key sections against the UI. |
| Expected Result | The PDF export reflects the same report title, summary cards, and visible section structure. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, export-delivery, medium, export |

### ERR-011 — Verify that filters for list name or category narrow the report results correctly.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Filters & Pagination |
| Priority | Medium |
| Preconditions | The report contains more than one list or category. |
| Test Data | Report Period: Current month User Role: Compliance Officer Sample List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Open the report page 2. Use the search field or category dropdown 3. Apply one filter value 4. Observe the table and summary changes after the filter is applied 5. Remove the filter and confirm the report returns to the default view. |
| Expected Result | Only the matching items remain visible after filtering, and the original view returns once the filter is cleared. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, filters-pagination, medium, reporting |

### ERR-012 — Check that status filters return the expected list states such as Active or Suspended.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Filters & Pagination |
| Priority | Medium |
| Preconditions | Exception Register report is available for the current period. The register includes multiple list states. |
| Test Data | Report Period: Current month User Role: Compliance Officer Sample List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Open the Exception Register report 2. Select the status filter 3. Choose one state such as Active 4. Review the rows shown after the filter is applied 5. Switch to another state and compare the result set. |
| Expected Result | The table updates to show only records with the selected status. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, filters-pagination, medium, reporting |

### ERR-013 — Verify the page-size control so the report shows the requested number of rows.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Filters & Pagination |
| Priority | Medium |
| Preconditions | The report spans more rows than a single page can display. |
| Test Data | Report Period: Current month User Role: Compliance Officer Sample List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Open the report 2. Change the page-size dropdown to a smaller value 3. Observe the row count on the page 4. Move to the next page and confirm pagination still works 5. Change the page size back to the default setting. |
| Expected Result | The page displays the selected number of rows and pagination remains consistent. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, filters-pagination, medium, reporting |

### ERR-014 — Confirm that pagination navigates between report pages without losing the selected filters.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Filters & Pagination |
| Priority | Medium |
| Preconditions | The report has more than one page of data and a filter is already applied. |
| Test Data | Report Period: Current month User Role: Compliance Officer Sample List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Apply any valid filter to the report 2. Move to the next page using the pagination control 3. Review the records on the second page 4. Return to the first page 5. Check that the filter condition is still in effect. |
| Expected Result | Pagination works correctly and the active filter remains applied while moving across pages. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, filters-pagination, medium, reporting |

### ERR-015 — Check that date-related values are displayed in the expected report format.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Data Integrity & Layout |
| Priority | High |
| Preconditions | Exception Register report is available for the current period. The register includes created dates, modified dates, and expiry dates. |
| Test Data | Report Period: Current month User Role: Compliance Officer Sample List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Open the report 2. Read the date columns in the table 3. Compare the displayed format with the application standard 4. Open one record and inspect the same dates in the detail view 5. Confirm the same date format is used across the module. |
| Expected Result | Dates are shown consistently in the expected format throughout the report. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, data-integrity-layout, high, reporting |

### ERR-016 — Verify that very long list names do not break the report layout.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Data Integrity & Layout |
| Priority | High |
| Preconditions | Exception Register report is available for the current period. At least one list or category has a long display name. |
| Test Data | Report Period: Current month User Role: Compliance Officer Sample List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Open the report with a long-name record present 2. Locate the long label in the table or summary section 3. Observe whether the text wraps, truncates, or overflows 4. Resize the browser window if required 5. Confirm that nearby rows remain readable. |
| Expected Result | The report layout remains stable and the long text is handled without visual corruption. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, data-integrity-layout, high, reporting |

### ERR-017 — Check that special characters and punctuation in list names are rendered safely.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Data Integrity & Layout |
| Priority | High |
| Preconditions | A report row contains characters such as ampersands, apostrophes, or hyphens. |
| Test Data | Report Period: Current month User Role: Compliance Officer Sample List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Open the register report 2. Find a row with punctuation in its label 3. Inspect the rendered text on screen 4. Export the report to CSV or PDF 5. Confirm the same text remains readable in the exported file. |
| Expected Result | Special characters display correctly and are not mangled in the UI or exported output. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, data-integrity-layout, high, reporting |

### ERR-018 — Confirm that the report handles an empty result set with a proper no-data message.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Data Integrity & Layout |
| Priority | High |
| Preconditions | Exception Register report is available for the current period. A filter combination returns no matching records. |
| Test Data | Report Period: Current month User Role: Compliance Officer Sample List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Open the report page 2. Apply a restrictive filter set 3. Search for a combination that yields no rows 4. Observe the table area after submission 5. Clear the filters to return to the normal report view. |
| Expected Result | The screen shows a clear no-data state rather than a blank or broken grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, data-integrity-layout, high, reporting |

### ERR-019 — Verify that a user without report permission cannot export or view the register data.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Permissions & Refresh |
| Priority | High |
| Preconditions | Exception Register report is available for the current period. A restricted role account is available. |
| Test Data | Report Period: April 2026 Export Format: CSV User Role: Compliance Manager |
| Steps | 1. Log in with a low-privilege account 2. Try opening the Exception Register page 3. Attempt to use export actions or drill-down links 4. Note any permission warning or blocked control 5. Sign in with an authorised role and compare the available actions. |
| Expected Result | Restricted users cannot access or export the report, while authorised users can. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, permissions-refresh, high, rbac, security |

### ERR-020 — Check that the report refreshes to show recent screening activity after new events occur.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Permissions & Refresh |
| Priority | High |
| Preconditions | Exception Register report is available for the current period. A new exception or suppression event has just been generated. |
| Test Data | Report Period: Current month User Role: Compliance Officer Sample List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Record the current value of a visible counter 2. Trigger a new qualifying screening event 3. Return to the report after the system finishes processing 4. Refresh the page 5. Verify the counter or related summary metric has updated. |
| Expected Result | The report reflects recent activity after refresh and does not keep an outdated snapshot. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, permissions-refresh, high, rbac, security |

### ERR-021 — Verify that report values are consistent across screen refresh and browser reopen.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Permissions & Refresh |
| Priority | High |
| Preconditions | Exception Register report is available for the current period. The register page has already loaded once successfully. |
| Test Data | Report Period: Current month User Role: Compliance Officer Sample List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Open the report and note the visible metrics 2. Refresh the browser tab 3. Compare the numbers after reload 4. Close the tab and open the report again 5. Confirm the same data set is returned for the same reporting period. |
| Expected Result | The report remains stable across refresh and reopen actions for the same period. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, permissions-refresh, high, rbac, security |

### ERR-022 — Check that the report summary does not mix current month and historical month totals.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Performance & Period Selection |
| Priority | Medium |
| Preconditions | Exception Register report is available for the current period. Historical data exists for previous months and the month selector is available. |
| Test Data | Report Period: Current month User Role: Compliance Officer Sample List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Open the report for the current month 2. Switch to a previous month 3. Review the summary counts and section totals 4. Switch back to the current month 5. Compare whether the numbers change with the selected period only. |
| Expected Result | Each selected month shows its own totals and does not leak values from another period. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, performance-period-selection, medium, performance |

### ERR-023 — Confirm that the report can be opened without visible performance lag on a normal dataset.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Performance & Period Selection |
| Priority | Medium |
| Preconditions | Exception Register report is available for the current period. A standard-sized register dataset is available. |
| Test Data | Dataset: 250 active entries Acceptable Load Time: ≤ 5 seconds |
| Steps | 1. Open the Exception Register page 2. Measure the time until the summary cards appear 3. Wait for the tables and analytics sections to finish rendering 4. Scroll through the visible content once loaded 5. Note whether the page remains responsive during navigation. |
| Expected Result | The report loads within an acceptable time and remains responsive on a standard dataset. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, performance-period-selection, medium, performance |

### ERR-024 — Verify that the report header shows the correct month label and delivery context.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Performance & Period Selection |
| Priority | Medium |
| Preconditions | The reporting engine has generated the current period output. |
| Test Data | Report Period: Current month User Role: Compliance Officer Sample List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Open the Exception Register page 2. Read the month label shown in the report header 3. Compare it with the current generation period 4. Confirm the delivery note or subtitle is visible if present 5. Reopen the page to make sure the header remains unchanged for the same period. |
| Expected Result | The header displays the correct reporting month and the delivery context stays consistent. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, performance-period-selection, medium, performance |

### ERR-025 — Check that the report keeps the visible list ordering when no sort is changed.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Performance & Period Selection |
| Priority | Medium |
| Preconditions | The default view has more than one row in the report. |
| Test Data | Report Period: Current month User Role: Compliance Officer Sample List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Open the report without applying any sort 2. Note the top few rows shown on screen 3. Refresh the page 4. Confirm the same row order is returned after reload 5. Compare the first and last visible records for consistency. |
| Expected Result | The default ordering remains stable until the user changes the sort or filter. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, performance-period-selection, medium, performance |

### ERR-026 — Verify Executive Summary includes renewals, expiries, and pending requests

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Executive Summary |
| Priority | High |
| Preconditions | Report period has varied activity. |
| Test Data | Pending Request: MCR-005 Report Generation Date: Today Checker Queue Count: 3 |
| Steps | 1. Open register report 2. Locate executive summary 3. Verify renewals/expiry/pending counts 4. Cross-check live data 5. Export PDF. |
| Expected Result | Executive summary cards show renewal count, expiry count, and pending approval count for the selected reporting period with values matching underlying register data. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, executive-summary, high, rbac, security |

### ERR-027 — Verify Suppression Activity Log groups suppressions by exception entry.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Suppression Activity Log |
| Priority | Medium |
| Preconditions | Suppressions in reporting period. |
| Test Data | Report Period: Current month User Role: Compliance Officer Sample List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Open report 2. Find Suppression Activity Log 3. Verify per-entry grouping 4. Compare audit counts 5. Export CSV. |
| Expected Result | Suppression log groups by entry with counts aligned to audit. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, suppression-activity-log, medium, evaluation-engine |

### ERR-028 — Verify Entries Expired This Month confirms suppression ceased and alerts resumed.

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Expired Entries Section |
| Priority | High |
| Preconditions | Exception Register report is available for the current period. Entries expired this month. |
| Test Data | Report Period: Current month User Role: Compliance Officer Sample List: Onboarding Exceptions — OFAC SDN |
| Steps | 1. Open report section 2. Review expired entries 3. Open entry detail 4. Confirm Expired status 5. Run screening. |
| Expected Result | Section lists correct entries; screening alerts fire after expiry. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, expired-entries-section, high, evaluation-engine |

### ERR-029 — Verify Active Exception Entries section lists all required columns with accurate data

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Active Entries Listing |
| Priority | High |
| Preconditions | Exception Register report is generated for the current month with at least three active entries. |
| Test Data | Report Period: Current month Sample Entry: CSEL-001 Customer: Mohammed Al-Rahman Checker: Sarah Chen (Compliance Officer) |
| Steps | 1. Open Exception Register from the sidebar. 2. Locate the Active Exception Entries section. 3. Verify columns: Customer ID, Customer Name, Matched Watchlist Entry, Reason Code, Checker, Approval Date, Expiry Date. 4. Open CSEL-001 from the report row and compare values with list detail. 5. Export the active entries section to CSV and spot-check one row against the UI. |
| Expected Result | Active entries section displays all required columns with values matching live CSEL records; CSV export aligns with on-screen rows. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, active-entries-listing, high, rbac, security |

### ERR-030 — Verify Pending Requests section reflects outstanding maker-checker items at report generation time

| Field | Value |
| --- | --- |
| Module | Exception Register Report |
| Sub-Module | Pending Requests Section |
| Priority | High |
| Preconditions | At least one CSEL request remains pending in maker-checker queue before opening the report. |
| Test Data | Pending Request: MCR-005 — Senator James Okafor Report Period: Current month Checker Queue Tab: All Requests |
| Steps | 1. Note pending request IDs and submission timestamps from Maker-checker queue. 2. Open Exception Register for the current month without approving pending items. 3. Locate Pending Requests section and compare listed request IDs. 4. Approve one pending item, regenerate or refresh the report. 5. Confirm the approved request no longer appears in Pending Requests. |
| Expected Result | Pending Requests section lists exactly the outstanding approvals present at generation time and updates after queue state changes. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-register-report, pending-requests-section, high, rbac, security |

### EVAL-001 — Confirm that a screening hit is suppressed only when the customer ID, watchlist scope, status, and expiry checks all pass together.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Evaluation Criteria |
| Priority | High |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. A matching CSEL entry exists for the same customer ID and the watchlist that raised the alert. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open a screening result that is expected to land on the exception list 2. Check the customer ID on the alert against the ID stored in the CSEL record 3. Verify that the watchlist shown on the alert is included in the entry scope 4. Confirm that the entry is Active and the expiry date is still ahead of today 5. Run the evaluation and review the final alert state. |
| Expected Result | The engine suppresses the hit and records a suppression event because every evaluation rule is satisfied. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-evaluation-matching-logic, evaluation-criteria, high, evaluation-engine |

### EVAL-002 — Verify that a watchlist outside the configured scope does not suppress the alert even when the customer ID matches.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Evaluation Criteria |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. An active exception exists, but the alert is triggered from a different watchlist source. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open a customer hit that shares the same customer ID as the exception record 2. Read the watchlist name attached to the alert 3. Compare it with the Watchlist Scope value stored in the CSEL entry 4. Trigger the evaluation without changing any other alert attribute 5. Check the result on screen and in the audit log. |
| Expected Result | The alert is not suppressed and continues through the normal review flow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-evaluation-matching-logic, evaluation-criteria, low, evaluation-engine |

### EVAL-003 — Confirm that a suspended exception entry is ignored during evaluation even when the rest of the data matches.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Evaluation Criteria |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. A matching CSEL entry exists and its status is set to Suspended. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open an alert that would normally match the stored exception 2. Compare the customer ID and watchlist against the suspended record 3. Leave the alert values as they are and start the evaluation 4. Observe the screening decision returned by the engine 5. Review the audit trail for the same event. |
| Expected Result | The suspended record is skipped and the alert remains active for analyst review. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-evaluation-matching-logic, evaluation-criteria, low, evaluation-engine |

### EVAL-004 — Verify that an expired exception does not suppress a new hit after the expiry date has passed.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Evaluation Criteria |
| Priority | High |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. A valid CSEL entry exists with an expiry date in the past. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the screening alert that would otherwise match the record 2. Check the expiry date on the exception entry against the current system date 3. Keep the alert data unchanged and rerun the evaluation 4. Look at the final status shown for the alert 5. Confirm whether any suppression note was written. |
| Expected Result | The engine treats the record as expired, so the alert is not suppressed. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-evaluation-matching-logic, evaluation-criteria, high, evaluation-engine |

### EVAL-005 — Check the boundary case where the expiry date is exactly today and no suppression should be applied.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Evaluation Criteria |
| Priority | High |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The exception entry is Active and its expiry date is set to the current date. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the matching screening hit for the same customer 2. Review the expiry date on the CSEL entry 3. Compare it with the current system date shown by the application 4. Submit the evaluation as-is 5. Confirm the alert outcome after the run. |
| Expected Result | The record is treated as not valid for suppression because the current date is not before the expiry date. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-evaluation-matching-logic, evaluation-criteria, high, evaluation-engine |

### EVAL-006 — Ensure that a customer ID mismatch blocks suppression even when the name and watchlist appear to match.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Evaluation Criteria |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. An active exception exists for a similar customer name but with a different customer ID. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the incoming alert and note the customer ID from the case header 2. Open the exception entry and compare its customer ID field 3. Check that the watchlist and status values still look valid 4. Run the evaluation without editing either record 5. Review the final decision returned by the engine. |
| Expected Result | The alert is raised normally because customer ID matching is exact and the IDs do not match. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-evaluation-matching-logic, evaluation-criteria, low, evaluation-engine |

### EVAL-007 — Verify that a missing customer ID on the alert does not allow the exception to suppress the hit.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Evaluation Criteria |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The alert is incomplete and the customer ID field is blank or unavailable. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the screening hit created from incomplete customer data 2. Check that the customer ID field is empty in the alert details 3. Compare the remaining fields with the exception entry 4. Run the evaluation and watch for the decision message 5. Open the audit trail entry for the same alert. |
| Expected Result | The alert is not suppressed and the missing ID is treated as a failed match condition. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-evaluation-matching-logic, evaluation-criteria, low, evaluation-engine |

### EVAL-008 — Check that a blank watchlist scope on the exception record prevents suppression.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Evaluation Criteria |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The CSEL entry exists, but the Watchlist Scope field is empty or not configured. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the exception record and confirm the scope field is blank 2. Open an incoming screening hit for the same customer ID 3. Verify that the alert belongs to a specific watchlist source 4. Start the evaluation using the same data set 5. Review the alert status after processing. |
| Expected Result | The hit is not suppressed because the watchlist scope rule cannot be satisfied. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-evaluation-matching-logic, evaluation-criteria, low, evaluation-engine |

### EVAL-009 — Confirm that inactive or draft status records are ignored during evaluation.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Evaluation Criteria |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The exception entry exists, but its status is not Active. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the alert that should have matched the exception 2. Check the status field on the CSEL record 3. Make sure the customer ID and watchlist values still line up 4. Run the evaluation with the same data in place 5. Observe whether the alert is suppressed or escalated. |
| Expected Result | The engine ignores the non-active record and the alert remains unsuppressed. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-evaluation-matching-logic, evaluation-criteria, low, evaluation-engine |

### EVAL-010 — Verify that one valid exception among multiple candidate records is enough to suppress the hit.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Evaluation Criteria |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. More than one CSEL entry exists for the same customer, but only one record is fully valid. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the screening case and list the candidate exception records returned by the engine 2. Compare each record against the customer ID, watchlist scope, status, and expiry date 3. Identify the one record that satisfies every rule 4. Submit the evaluation again if needed so the engine can settle on the best candidate 5. Check the final alert state and the matching record used by the system. |
| Expected Result | The alert is suppressed because at least one exception entry fully satisfies the evaluation criteria. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-evaluation-matching-logic, evaluation-criteria, low, evaluation-engine |

### EVAL-011 — Confirm that the suppression event is written to audit when an alert is successfully suppressed.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Evaluation Criteria |
| Priority | High |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. A matching active exception exists and the hit is expected to be suppressed. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the alert that should be suppressed 2. Run the evaluation using the matching CSEL entry 3. Wait for the decision result to appear on the screen 4. Open the audit trail or event history for the same case 5. Check that the suppression action is captured with the right identifiers. |
| Expected Result | The suppression is logged in the audit trail with the customer ID, watchlist, and decision timestamp. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-evaluation-matching-logic, evaluation-criteria, high, audit-trail |

### EVAL-012 — Verify that a small spelling change still matches when the score stays above the configured threshold.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Fuzzy Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. An exception entry exists with a name that is very close to the incoming alert name. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open a screening hit where the customer name differs by one or two characters 2. Check the match score shown by the evaluation engine 3. Compare the score with the threshold configured for the list 4. Complete the evaluation and observe the decision returned to the analyst 5. Open the linked audit event for the same comparison. |
| Expected Result | The fuzzy name match is accepted and the alert is suppressed when the score is at or above the threshold. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, fuzzy-matching, low, evaluation-engine |

### EVAL-013 — Confirm that a name variation below the configured threshold does not apply the exception.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Fuzzy Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The incoming name is close to the stored name, but the score is expected to fall below the list threshold. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the incoming alert and note the exact customer name 2. Compare it with the name stored in the exception entry 3. Inspect the score produced by the matching engine 4. Keep the customer ID unchanged and rerun the evaluation 5. Review the resulting alert status. |
| Expected Result | The exception is not applied because the name score is below the configured threshold. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, fuzzy-matching, low, evaluation-engine |

### EVAL-014 — Check the boundary case where the match score is exactly equal to the configured threshold.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Fuzzy Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The list threshold is configured and the test data is prepared to land exactly on that value. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the case with the borderline name variant 2. Review the score displayed by the matching engine 3. Compare the score to the configured threshold value 4. Submit the evaluation and wait for the final decision 5. Verify the alert state after processing. |
| Expected Result | The match is accepted when the score is equal to the threshold, and the hit is suppressed. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, fuzzy-matching, low, evaluation-engine |

### EVAL-015 — Confirm that phonetic matching catches a sound-alike name even when the spelling is different.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Fuzzy Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The data set contains two names that sound alike but are written differently. |
| Test Data | Customer Name: Mohammed Al-Rahman Watchlist Hit: Ibrahim Al-Rashid Match Score Threshold: 85% |
| Steps | 1. Open the alert that uses the alternative spelling 2. Look at the phonetic result returned by the engine 3. Compare the displayed score with the threshold used by the list 4. Run the evaluation without changing any other field 5. Check the suppression result in the alert panel. |
| Expected Result | The phonetic comparison supports the match and the alert is suppressed if the score meets the threshold. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, fuzzy-matching, low, evaluation-engine |

### EVAL-016 — Ensure that fuzzy matching never overrides an exact customer ID mismatch.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Fuzzy Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The customer name looks similar, but the incoming customer ID is different from the stored one. |
| Test Data | Customer Name: Mohammed Al-Rahman Watchlist Hit: Ibrahim Al-Rashid Match Score Threshold: 85% |
| Steps | 1. Open the screening hit and note the customer ID shown on the case 2. Compare the same ID with the value on the exception entry 3. Confirm that the name similarity is high enough to pass the fuzzy check 4. Run the evaluation and watch whether the system still blocks suppression 5. Check the result in the audit trail. |
| Expected Result | The alert is not suppressed because customer ID matching remains exact and the IDs do not match. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, fuzzy-matching, low, evaluation-engine |

### EVAL-017 — Verify that leading and trailing spaces do not break a valid fuzzy name match.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Fuzzy Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The stored name and the incoming name are the same apart from extra spaces at the edges. |
| Test Data | Customer Name: Mohammed Al-Rahman Watchlist Hit: Ibrahim Al-Rashid Match Score Threshold: 85% |
| Steps | 1. Open the incoming alert and inspect the customer name exactly as captured 2. Compare it with the name stored in the CSEL entry 3. Notice whether spaces appear before or after the text 4. Run the evaluation using the current data values 5. Confirm the final decision returned by the engine. |
| Expected Result | The name comparison trims harmless spacing differences and the alert is handled as a match when the score is sufficient. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, fuzzy-matching, low, audit-trail |

### EVAL-018 — Check that a case-only difference does not stop a valid name comparison.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Fuzzy Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The alert name is entered in upper case or lower case, while the stored entry uses a different case format. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the screen and read the incoming customer name 2. Open the exception record and compare the case formatting of the same name 3. Make sure all other fields still line up for the test 4. Start the evaluation and wait for the comparison result 5. Review the alert outcome after processing. |
| Expected Result | The case difference does not prevent the fuzzy name match from being accepted. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, fuzzy-matching, low, evaluation-engine |

### EVAL-019 — Confirm that punctuation changes such as hyphens or apostrophes are handled without a false negative.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Fuzzy Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The same customer name is represented with minor punctuation differences in the alert and the exception record. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the alert and read the name exactly as displayed 2. Open the matching exception entry and compare the punctuation marks 3. Keep the customer ID and watchlist values untouched 4. Run the evaluation and wait for the match decision 5. Check the final status after the run finishes. |
| Expected Result | The punctuation difference does not break the match when the rest of the name is equivalent. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, fuzzy-matching, low, evaluation-engine |

### EVAL-020 — Check that an inserted or missing middle name is still evaluated correctly by the matching engine.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Fuzzy Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The stored name and alert name differ only by the presence of a middle name or middle initial. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the incoming case and read the full name fields 2. Compare the same name with the record stored in the exception list 3. Note where the middle name is present or omitted 4. Run the screening evaluation again using the same data 5. Review whether the alert has been suppressed. |
| Expected Result | The engine evaluates the name variation correctly and suppresses the alert only when the score reaches the threshold. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, fuzzy-matching, low, evaluation-engine |

### EVAL-021 — Verify behaviour for a very long customer name so the matching logic does not fail on length.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Fuzzy Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. A long multi-part customer name exists in both the alert and the exception record. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the alert and scroll through the full customer name 2. Open the exception record and compare the full value field by field 3. Confirm that no part of the name is truncated on screen 4. Run the evaluation for the same case 5. Check the returned status and any match score shown. |
| Expected Result | The long name is processed without breaking the match logic or causing a display issue. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, fuzzy-matching, low, evaluation-engine |

### EVAL-022 — Confirm that names containing diacritics or special characters are handled safely.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Fuzzy Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The alert name contains accented characters or similar special characters and a matching exception record exists. |
| Test Data | Original Script: محمد الرحman Latin Name: Mohammed Al-Rahman Watchlist: OFAC SDN |
| Steps | 1. Open the incoming alert and note the special characters in the name 2. Compare the same name in the CSEL entry 3. Check whether the characters are stored correctly in the UI 4. Run the evaluation using the existing data 5. Review the final decision on the alert. |
| Expected Result | The characters are preserved correctly and the match behaves as expected for the configured threshold. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, fuzzy-matching, low, evaluation-engine |

### EVAL-023 — Ensure that an empty incoming name cannot be used to trigger a false suppression.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Fuzzy Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The alert has no usable customer name, while the exception entry contains a valid name. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the screening hit and confirm the name field is blank or missing 2. Check the rest of the alert values against the exception record 3. Run the evaluation with the incomplete data set 4. Observe the match score or decision returned by the engine 5. Open the audit trail to verify the result. |
| Expected Result | The alert is not suppressed because the name comparison cannot pass with an empty input value. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, fuzzy-matching, low, evaluation-engine |

### EVAL-024 — Check that a common short-form spelling does not bypass the customer ID rule.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Fuzzy Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The alert uses a shortened version of the customer name, but the customer ID is different. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the incoming screening case and note the short-form name 2. Compare it with the name on the exception entry 3. Inspect the customer ID values on both records 4. Run the evaluation without making any edits 5. Confirm that the final decision still follows the exact ID rule. |
| Expected Result | The system does not suppress the alert because the customer ID mismatch overrides the name similarity. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, fuzzy-matching, low, evaluation-engine |

### EVAL-025 — Verify that Arabic-script names are matched correctly when the alert and the exception both carry the original script.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Native Script & Multilingual Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. Both the incoming alert and the CSEL entry contain the same Arabic name in the Original Script Name field. |
| Test Data | Original Script: محمد الرحman Latin Name: Mohammed Al-Rahman Watchlist: OFAC SDN |
| Steps | 1. Open the alert that was generated from an Arabic-script screening hit 2. Read the Original Script Name on the exception record 3. Compare both values and confirm they use the same script 4. Run the evaluation as captured 5. Check that the alert outcome matches the rule set. |
| Expected Result | The Arabic-script match is accepted and the alert is suppressed when the remaining criteria also pass. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, native-script-multilingual-matching, low, evaluation-engine |

### EVAL-026 — Verify Arabic prefix handling for names such as Al-, El-, Bin-, and Bint-.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Native Script & Multilingual Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The test data uses an Arabic family name with a recognised prefix variant. |
| Test Data | Original Script: محمد الرحman Latin Name: Mohammed Al-Rahman Watchlist: OFAC SDN |
| Steps | 1. Open the incoming alert and read the Arabic name carefully 2. Check the exception record for the same base name with a prefix variant 3. Confirm that the prefix is one of the patterns handled by the engine 4. Run the screening evaluation for the case 5. Review the match result shown by the application. |
| Expected Result | The prefix-aware comparison works as designed and the alert is treated as a valid match. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, native-script-multilingual-matching, low, evaluation-engine |

### EVAL-027 — Confirm that an Arabic-script alert does not get suppressed when the exception stores only a Latin transliteration.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Native Script & Multilingual Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The alert was generated from Arabic text and the exception entry does not contain the Original Script Name value. |
| Test Data | Original Script: محمد الرحman Latin Name: Mohammed Al-Rahman Watchlist: OFAC SDN |
| Steps | 1. Open the Arabic-script screening hit 2. Check that the exception record has only a Latin version of the name 3. Leave every other field unchanged 4. Run the evaluation and wait for the result 5. Check the final alert status and the reason shown by the engine. |
| Expected Result | The alert is not suppressed because the matching engine requires the Arabic-script name to apply the exception correctly. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, native-script-multilingual-matching, low, evaluation-engine |

### EVAL-028 — Check that mixed Latin and Arabic text is stored and displayed without breaking UTF-8 handling.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Native Script & Multilingual Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. A customer record exists where the name fields contain both Latin and Arabic characters. |
| Test Data | Original Script: محمد الرحman Latin Name: Mohammed Al-Rahman Watchlist: OFAC SDN |
| Steps | 1. Open the exception entry and inspect the mixed-script name values 2. Move to the alert side and view the same customer in the screening result 3. Confirm that the UI renders both scripts without garbling the text 4. Run the evaluation for the record 5. Review the alert decision after the screen completes. |
| Expected Result | The system keeps the mixed-script values intact and processes the match without encoding issues. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, native-script-multilingual-matching, low, evaluation-engine |

### EVAL-029 — Verify that Simplified Chinese names are matched exactly when both sides use the same script.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Native Script & Multilingual Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The incoming alert and the exception entry both contain the Simplified Chinese version of the name. |
| Test Data | Original Script: محمد الرحman Latin Name: Mohammed Al-Rahman Watchlist: OFAC SDN |
| Steps | 1. Open the alert and inspect the Chinese name field 2. Open the exception entry and compare the script used in the record 3. Confirm that the same script appears on both sides 4. Run the evaluation with the current data 5. Check the resulting status in the alert view. |
| Expected Result | The Chinese-script comparison succeeds and the exception is applied when every other rule is satisfied. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, native-script-multilingual-matching, low, evaluation-engine |

### EVAL-030 — Verify that Traditional Chinese text is handled as a separate script and matched correctly when stored the same way.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Native Script & Multilingual Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The customer record and the exception entry both contain the Traditional Chinese form of the name. |
| Test Data | Original Script: محمد الرحman Latin Name: Mohammed Al-Rahman Watchlist: OFAC SDN |
| Steps | 1. Open the incoming screening hit for the Chinese name 2. Compare the stored value with the name on the exception entry 3. Check that the characters are displayed correctly on screen 4. Run the evaluation and wait for the match decision 5. Review the final alert state. |
| Expected Result | The Traditional Chinese data is preserved correctly and the match result follows the configured logic. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, native-script-multilingual-matching, low, evaluation-engine |

### EVAL-031 — Confirm that Cyrillic names are matched correctly without losing characters during processing.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Native Script & Multilingual Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The screening alert and exception record both use a Cyrillic customer name. |
| Test Data | Original Script: محمد الرحman Latin Name: Mohammed Al-Rahman Watchlist: OFAC SDN |
| Steps | 1. Open the screening case and read the full Cyrillic name 2. Open the exception record and compare the same name value 3. Check that the UI does not strip or replace any characters 4. Run the evaluation for the case 5. Confirm the output shown by the engine. |
| Expected Result | The Cyrillic text is handled safely and the alert is processed according to the normal matching rules. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, native-script-multilingual-matching, low, evaluation-engine |

### EVAL-032 — Verify that the system stores and renders UTF-8 characters without corruption after evaluation.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Native Script & Multilingual Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The test data contains non-Latin characters that must survive the round trip through the UI and engine. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the exception record and verify the original characters on screen 2. Open the matching alert and check the same character set on the case 3. Move between tabs or refresh the page to make sure the text still displays correctly 4. Run the evaluation once more 5. Review whether the stored text remains intact in the audit entry or result panel. |
| Expected Result | The characters remain readable and are not corrupted during matching or logging. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, native-script-multilingual-matching, low, evaluation-engine |

### EVAL-033 — Check that the engine uses the Latin name when the alert arrives in Latin script and the exception stores both versions.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Native Script & Multilingual Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The CSEL record contains both Latin and original-script name fields, and the alert uses the Latin version. |
| Test Data | Original Script: محمد الرحman Latin Name: Mohammed Al-Rahman Watchlist: OFAC SDN |
| Steps | 1. Open the alert and read the Latin name exactly as captured 2. Open the exception entry and compare the Latin name field first 3. Confirm that the original-script field is also present in the record 4. Run the evaluation with the current case data 5. Check whether the alert is suppressed or left open. |
| Expected Result | The Latin name is used correctly for comparison and the decision follows the configured threshold and ID rules. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, native-script-multilingual-matching, low, evaluation-engine |

### EVAL-034 — Verify that whitespace differences in a multilingual name do not cause a false mismatch.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Native Script & Multilingual Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The same multilingual name is present in both records, but one version contains additional internal spacing. |
| Test Data | Original Script: محمد الرحman Latin Name: Mohammed Al-Rahman Watchlist: OFAC SDN |
| Steps | 1. Open the alert and identify the exact spacing in the name field 2. Open the exception record and compare the spacing character by character 3. Confirm that the script content itself is the same 4. Run the evaluation and wait for the comparison result 5. Review the final alert state. |
| Expected Result | The name comparison handles harmless spacing differences according to the configured fuzzy logic. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, native-script-multilingual-matching, low, evaluation-engine |

### EVAL-035 — Ensure that a multilingual entry with multiple name representations still suppresses the hit when the correct version matches.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Native Script & Multilingual Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The exception record stores both the Latin and original-script versions of the same customer name. |
| Test Data | Original Script: محمد الرحman Latin Name: Mohammed Al-Rahman Watchlist: OFAC SDN |
| Steps | 1. Open the screening alert and note which script the hit was generated from 2. Review both name fields stored in the exception entry 3. Check that one of the versions exactly mirrors the alert input 4. Run the evaluation on the same case 5. Confirm the final decision shown on screen. |
| Expected Result | The hit is suppressed when the correct script and all other evaluation checks line up. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, native-script-multilingual-matching, low, evaluation-engine |

### EVAL-036 — Check that a threshold change on the exception list immediately affects the decision outcome.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Fuzzy Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The list threshold is configured above the current match score. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the exception list configuration and note the active threshold 2. Run the evaluation once and confirm that the score sits below the limit 3. Increase or review the threshold setting used by the list 4. Repeat the same evaluation with the unchanged input 5. Compare the final alert result before and after the threshold setting is applied. |
| Expected Result | The decision changes according to the configured threshold value for the list. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, fuzzy-matching, low, evaluation-engine |

### EVAL-037 — Verify that the engine selects the valid active entry when duplicate entries exist for the same customer and watchlist.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Evaluation Criteria |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. Two or more records exist for the same customer, but only one of them is currently valid. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the alert and list the matching candidate entries returned by the engine 2. Check the status and expiry date of each candidate record 3. Mark which record satisfies every suppression condition 4. Re-run the evaluation if the screen needs a refresh 5. Review the record that the engine finally uses for the decision. |
| Expected Result | The engine relies on the valid active entry and suppresses the alert only when the selected record passes all checks. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-evaluation-matching-logic, evaluation-criteria, low, evaluation-engine |

### EVAL-038 — Confirm that an exception is not applied when the customer data is incomplete even though the watchlist matches.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Evaluation Criteria |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The incoming alert has a partial customer profile and one or more key identity fields are missing. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the incomplete alert and identify the missing fields 2. Compare the remaining values with the exception entry 3. Check whether the watchlist scope still appears to match 4. Run the evaluation using the partial record 5. Open the audit trail entry and note the decision taken. |
| Expected Result | The exception is not applied because the required evaluation data is incomplete. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-evaluation-matching-logic, evaluation-criteria, low, evaluation-engine |

### EVAL-039 — Check that the system does not suppress a hit when the name score is close to, but still below, the threshold after normalisation.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Fuzzy Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. The case is prepared with a borderline name variant that should remain just under the threshold. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Open the alert and read the normalised name value 2. Compare it with the stored exception name after normalisation 3. Verify the score returned by the engine 4. Run the evaluation once more to confirm the same result 5. Review the alert outcome and any message displayed to the user. |
| Expected Result | The alert remains open because the score is still below the threshold after normalisation. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, fuzzy-matching, low, evaluation-engine |

### EVAL-040 — Verify that multilingual search results remain stable after switching between screens or refreshing the page.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Native Script & Multilingual Matching |
| Priority | Low |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. A multilingual alert and exception entry are available for the same customer. |
| Test Data | Original Script: محمد الرحman Latin Name: Mohammed Al-Rahman Watchlist: OFAC SDN |
| Steps | 1. Open the alert and note the multilingual name shown on the screen 2. Switch to another module and come back to the same case 3. Refresh the page or reopen the alert to make sure the values reload correctly 4. Run the evaluation again after navigation 5. Compare the final decision with the first run. |
| Expected Result | The evaluation result stays consistent and the multilingual text remains readable after navigation. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | exception-evaluation-matching-logic, native-script-multilingual-matching, low, evaluation-engine |

### EVAL-041 — Verify evaluation is binary — partial criteria match never suppresses alert.

| Field | Value |
| --- | --- |
| Module | Exception Evaluation & Matching Logic |
| Sub-Module | Evaluation Criteria |
| Priority | High |
| Preconditions | Active approved entry CSEL-001 exists for evaluation testing. Entry matches customer ID but fails watchlist scope. |
| Test Data | Entry ID: CSEL-001 Customer: Mohammed Al-Rahman Watchlist: OFAC SDN Match Score: 92% |
| Steps | 1. Configure partial match scenario 2. Run screening evaluation 3. Confirm alert is raised 4. Review audit — no suppression event 5. Repeat with full criteria match to confirm suppression. |
| Expected Result | No partial suppression; alert fires unless all criteria pass simultaneously. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | exception-evaluation-matching-logic, evaluation-criteria, high, evaluation-engine |

### MCW-001 — Verify that the Approve and Reject actions are not available to a user who does not have a permitted checker role for a standard CSEL request.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Checker Role Enforcement |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. A pending standard exception request is available, and the logged-in user is a peer analyst without checker rights. |
| Test Data | Request ID: MCR-003 Customer: Mohammed Al-Rahman Checker: Sarah Chen (Compliance Officer) Comment: Evidence reviewed — approved |
| Steps | 1. Sign in as a peer analyst without checker privileges. 2. Open Maker-checker queue and locate a pending standard CSEL request. 3. Open the request detail panel. 4. Review available actions on the request card and detail view. 5. Attempt to approve or reject from any visible control and observe the system response. |
| Expected Result | Approve and Reject actions are hidden or disabled for the unauthorized user and the request remains pending unchanged. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, checker-role-enforcement, high, rbac, security |

### MCW-002 — Confirm that a Compliance Officer can approve a standard exception request when the user holds the correct checker role.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Checker Role Enforcement |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. A standard exception request is pending approval and the logged-in user is a Compliance Officer. |
| Test Data | Request ID: MCR-003 Customer: Mohammed Al-Rahman Checker: Sarah Chen (Compliance Officer) Comment: Evidence reviewed — approved |
| Steps | 1. Log in as a Compliance Officer 2. Open the All Requests tab in the maker-checker queue 3. Locate a standard onboarding or periodic request 4. Open the request details and verify the available actions 5. Click Approve and watch the status refresh. |
| Expected Result | The request is approved successfully and the workflow moves the item out of the pending queue. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, checker-role-enforcement, high, rbac, security |

### MCW-003 — Verify that a Compliance Manager can approve a standard request in the same way as a Compliance Officer.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Checker Role Enforcement |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. A standard request is waiting in the queue and the logged-in user is a Compliance Manager. |
| Test Data | Request ID: MCR-003 Customer: Mohammed Al-Rahman Checker: Sarah Chen (Compliance Officer) Comment: Evidence reviewed — approved |
| Steps | 1. Sign in with a Compliance Manager account 2. Navigate to the maker-checker queue 3. Select a pending standard request submitted by another maker 4. Review the request summary and confirm the action buttons are enabled 5. Approve the request and return to the queue list. |
| Expected Result | The approval is accepted and the request status changes to approved. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, checker-role-enforcement, high, rbac, security |

### MCW-004 — Ensure that a peer analyst cannot process a request even if the user can open the queue screen.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Checker Role Enforcement |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. A pending request exists and the user is a peer analyst with queue visibility but without approval rights. |
| Test Data | Request ID: MCR-003 List: Onboarding Exceptions — OFAC SDN Maker: Priya Sharma (KYC Analyst) Checker: Sarah Chen (Compliance Officer) |
| Steps | 1. Log in as a peer analyst 2. Open the maker-checker page from the left menu 3. Browse the pending request list 4. Open one request and inspect the lower action bar 5. Attempt to approve or reject the entry. |
| Expected Result | The request remains locked for action and the application blocks the attempt. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, checker-role-enforcement, high, rbac, security |

### MCW-005 — Check that a PEP-related request can be approved only by the MLRO or a designated deputy.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Checker Role Enforcement |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. A PEP exception request is pending and the logged-in user is not the MLRO or deputy. |
| Test Data | Request: MCR-004 — Senator James Okafor Reason Code: PEP — Approved with EDD Required Checker: R. Gupta (MLRO) |
| Steps | 1. Log in with a Compliance Officer account 2. Open a pending PEP request from the queue 3. Observe the approval controls shown on the page 4. Try to approve the request from the current account 5. Reopen the same request using an MLRO account to compare access. |
| Expected Result | The Compliance Officer cannot approve the PEP item, while the MLRO or designated deputy can. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, checker-role-enforcement, high, rbac, security |

### MCW-006 — Verify that an exception entry tagged with the 'Other' reason code is restricted to MLRO approval only.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Checker Role Enforcement |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. A pending request has the reason code set to Other and the current user is a Compliance Manager. |
| Test Data | Request: MCR-004 — Senator James Okafor Reason Code: PEP — Approved with EDD Required Checker: R. Gupta (MLRO) |
| Steps | 1. Open the request details for the item tagged as Other 2. Check the role hint or approval requirement displayed beside the request 3. Attempt to approve the item as a Compliance Manager 4. Switch to an MLRO account and reopen the same request 5. Approve the request from the MLRO account. |
| Expected Result | The request cannot be approved by the Compliance Manager and is accepted only by the MLRO. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, checker-role-enforcement, high, rbac, security |

### MCW-007 — Confirm that renewal of an entry older than 12 months is routed to MLRO approval.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Checker Role Enforcement |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. A renewal request is pending and the original exception entry is older than 12 months. |
| Test Data | Request: MCR-004 — Senator James Okafor Reason Code: PEP — Approved with EDD Required Checker: R. Gupta (MLRO) |
| Steps | 1. Open the renewal request from the queue 2. Review the entry age or renewal banner shown in the details panel 3. Log in with a Compliance Officer account and try to approve it 4. Log out and access the same request as the MLRO 5. Complete the approval from the MLRO account. |
| Expected Result | Only the MLRO can complete the approval for an older renewal request. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, checker-role-enforcement, high, rbac, security |

### MCW-008 — Check that a request submitted by the logged-in user is listed under My Requests and not presented for self-approval.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Queue Views & Ownership |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. The user has just submitted a valid exception request and remains signed in. |
| Test Data | Maker: Priya Sharma (KYC Analyst) Checker Attempt: Same user session Request: MCR-006 |
| Steps | 1. Submit a new request using the maker account 2. Open the maker-checker page without changing the login session 3. Click the My Requests tab 4. Locate the newly submitted item in the personal list 5. Confirm that no Approve or Reject action appears for that row. |
| Expected Result | The request is visible under My Requests, but self-approval controls are hidden. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, queue-views-ownership, high, rbac, security |

### MCW-009 — Ensure that a checker cannot approve their own request even when the checker role matches the request type.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Queue Views & Ownership |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. The user created a request earlier and also has an allowed checker role for that workflow. |
| Test Data | Request ID: MCR-003 Customer: Mohammed Al-Rahman Checker: Sarah Chen (Compliance Officer) Comment: Evidence reviewed — approved |
| Steps | 1. Create or pick a request submitted by the same user 2. Return to the maker-checker queue 3. Open the request from My Requests or search it by request ID 4. Look for any approval action on the record 5. Attempt to approve it directly from the request page. |
| Expected Result | The application blocks self-approval and keeps the request in a non-processed state. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, queue-views-ownership, high, rbac, security |

### MCW-010 — Verify that All Requests shows every pending item that is waiting for checker action.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Queue Views & Ownership |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. Multiple pending requests from different makers are available in the environment and the logged-in user is an eligible checker. |
| Test Data | Request ID: MCR-003 List: Onboarding Exceptions — OFAC SDN Maker: Priya Sharma (KYC Analyst) Checker: Sarah Chen (Compliance Officer) |
| Steps | 1. Open the All Requests tab 2. Scroll through the list of pending items 3. Compare the visible entries with the test dataset or submitted request IDs 4. Open two different requests from two different makers 5. Verify that both remain accessible from the list view. |
| Expected Result | All pending requests assigned to the queue appear under All Requests, regardless of maker. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, queue-views-ownership, high, rbac, security |

### MCW-011 — Confirm that the queue list is refreshed after an approval so the approved item disappears from the pending view.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Queue Views & Ownership |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. A request is pending and the current user is allowed to approve it. |
| Test Data | Request ID: MCR-003 Customer: Mohammed Al-Rahman Checker: Sarah Chen (Compliance Officer) Comment: Evidence reviewed — approved |
| Steps | 1. Open the pending request from All Requests 2. Approve the request 3. Return to the list view using the queue navigation or refresh button 4. Check whether the processed request is still present 5. Search the queue again using the request ID. |
| Expected Result | The approved item is removed from the pending queue and shows under processed history only. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, queue-views-ownership, high, rbac, security |

### MCW-012 — Verify that approving a standard request changes the workflow status to Approved and activates the exception.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Approval / Rejection Handling |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. A standard request is pending approval and the checker account is valid. |
| Test Data | Request ID: MCR-003 Customer: Mohammed Al-Rahman Checker: Sarah Chen (Compliance Officer) Comment: Evidence reviewed — approved |
| Steps | 1. Open a standard pending request 2. Review the customer and reason code information one last time 3. Click Approve 4. Wait for the success message and status update 5. Reopen the linked exception entry from the register or details page. |
| Expected Result | The request status becomes Approved and the related exception is activated for screening suppression. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, approval-rejection-handling, high, rbac, security |

### MCW-013 — Verify that rejecting a request changes its workflow state to Rejected and prevents the exception from becoming active.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Approval / Rejection Handling |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. A request is pending and the checker decides not to approve it. |
| Test Data | Request ID: MCR-003 Customer: Mohammed Al-Rahman Checker: Sarah Chen (Compliance Officer) Comment: Evidence reviewed — approved |
| Steps | 1. Open the pending request card 2. Enter a rejection comment in the review box 3. Click Reject 4. Confirm the status message shown after submission 5. Check the exception register or source entry for activation state. |
| Expected Result | The request is marked Rejected and no active exception is created. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, approval-rejection-handling, high, rbac, security |

### MCW-014 — Check that a rejection cannot be submitted without a clear reason or comment when the process requires justification.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Approval / Rejection Handling |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. A pending request is open and the rejection comment field is mandatory in the UI. |
| Test Data | Request ID: MCR-003 Customer: Mohammed Al-Rahman Checker: Sarah Chen (Compliance Officer) Comment: Evidence reviewed — approved |
| Steps | 1. Open the request in the checker queue 2. Leave the rejection comment box empty 3. Click Reject 4. Observe the validation message next to the comment field 5. Enter a short reason and try the reject action again. |
| Expected Result | The system blocks an empty rejection and accepts it only after a justification is provided. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, approval-rejection-handling, high, rbac, security |

### MCW-015 — Ensure that two approval attempts on the same request are not processed twice.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Approval / Rejection Handling |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. One checker has already approved a request and another user can still access the queue momentarily. |
| Test Data | Request ID: MCR-003 List: Onboarding Exceptions — OFAC SDN Maker: Priya Sharma (KYC Analyst) Checker: Sarah Chen (Compliance Officer) |
| Steps | 1. Approve a request using the first checker account 2. Without delay, open the same request in another session 3. Try to click Approve again from the second session 4. Refresh the queue and inspect the current state 5. Search for any duplicate approval event or repeated success banner. |
| Expected Result | The second approval attempt is blocked and the request remains approved only once. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, approval-rejection-handling, high, rbac, security |

### MCW-016 — Verify that a rejected request cannot be moved back to pending from the checker screen without a fresh maker submission.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Approval / Rejection Handling |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. A request has already been rejected by a checker. |
| Test Data | Request ID: MCR-003 Customer: Mohammed Al-Rahman Checker: Sarah Chen (Compliance Officer) Comment: Evidence reviewed — approved |
| Steps | 1. Open the rejected request from history or audit view 2. Try to find any direct re-open or re-approve option on the same record 3. Refresh the request screen and confirm the final status 4. Attempt to approve from any visible action menu if present 5. Check that the request does not return to the active queue by itself. |
| Expected Result | The rejected request stays rejected until a new maker submission is created. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, approval-rejection-handling, high, rbac, security |

### MCW-017 — Verify that the onboarding SLA countdown starts from the maker submission timestamp and not from the time the request was opened.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | SLA & Escalation |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. A new onboarding request has been submitted and the queue is available to the checker. |
| Test Data | Request Type: Onboarding exception Submission Time: 22 hours ago SLA: 24 hours |
| Steps | 1. Note the submission time captured on the request card 2. Leave the request unopened for a short interval 3. Open the same request later from the queue 4. Compare the displayed SLA timer with the submission time 5. Refresh the page and confirm the timer keeps counting from the original submit time. |
| Expected Result | The SLA clock is based on submission time and does not reset when the request is opened. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, sla-escalation, high, rbac, security |

### MCW-018 — Check that an onboarding request shows the 12-hour escalation warning before the 24-hour SLA breach.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | SLA & Escalation |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. An onboarding exception is pending and the request age is close to the mid-point of the SLA. |
| Test Data | Request Type: Onboarding exception Submission Time: 22 hours ago SLA: 24 hours |
| Steps | 1. Open an onboarding request that is approaching 12 hours old 2. Inspect the warning banner or SLA indicator in the queue 3. Refresh the page after the threshold is crossed 4. Watch for the escalation notification or highlight to appear 5. Verify that the request still remains approvable. |
| Expected Result | The system shows the 12-hour escalation warning and keeps the request in pending status. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, sla-escalation, high, rbac, security |

### MCW-019 — Verify that an onboarding request crossing the 24-hour SLA produces the required escalation notification path.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | SLA & Escalation |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. An onboarding request is still pending after 24 hours. |
| Test Data | Request Type: Onboarding exception Submission Time: 22 hours ago SLA: 24 hours |
| Steps | 1. Keep or simulate an onboarding request beyond 24 hours 2. Refresh the maker-checker queue and open the request 3. Review the SLA status shown on the card or detail panel 4. Check whether the escalation notice names the Compliance Manager and MLRO 5. Confirm the request is still visible for action if policy allows it. |
| Expected Result | The request is escalated according to the onboarding SLA and the correct recipients are notified. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, sla-escalation, high, rbac, security |

### MCW-020 — Confirm that periodic re-screening and event-driven requests use the 48-hour SLA rule.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | SLA & Escalation |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. A periodic or event-driven exception request is pending. |
| Test Data | Request Type: Onboarding exception Submission Time: 22 hours ago SLA: 24 hours |
| Steps | 1. Open a periodic re-screen pending request from Maker-checker queue. 2. Note the SLA countdown displayed on the request card. 3. Confirm the total SLA window is 48 hours from maker submission time. 4. Advance or simulate request age past 24 hours and observe mid-SLA warning. 5. Keep the request pending until 48 hours and verify escalation notification. |
| Expected Result | Periodic and event-driven requests follow a 48-hour SLA with 24-hour mid-point warning and escalation at breach. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, sla-escalation, high, rbac, security |

### MCW-021 — Verify the 24-hour escalation warning for periodic and event-driven requests before the 48-hour breach.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | SLA & Escalation |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. A periodic or event-driven request is active and less than 48 hours old. |
| Test Data | Request Type: Onboarding exception Submission Time: 22 hours ago SLA: 24 hours |
| Steps | 1. Open a periodic/event-driven pending request 2. Review the SLA display on the request card 3. Move the request age past 24 hours 4. Refresh the queue and look for the escalation indicator 5. Confirm that no final breach message appears before 48 hours. |
| Expected Result | The mid-SLA warning appears at 24 hours and the final breach is not triggered early. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, sla-escalation, high, rbac, security |

### MCW-022 — Check that escalation notifications are generated only once for the same request at the configured SLA threshold.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | SLA & Escalation |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. A request has crossed the escalation point and notification delivery is enabled. |
| Test Data | Request Type: Onboarding exception Submission Time: 22 hours ago SLA: 24 hours |
| Steps | 1. Push the request past the configured escalation threshold 2. Observe the first escalation notification delivery 3. Refresh the queue several times 4. Reopen the request details from another tab 5. Confirm whether the same escalation message is repeated. |
| Expected Result | The escalation message is sent once per threshold event and does not duplicate on refresh. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, sla-escalation, high, rbac, security |

### MCW-023 — Ensure that a request cannot be approved by a user who is not available in the queue because of role restriction, even if the request is searchable by ID.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Special Approval Rules |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. A pending request can be found by search and the user is not a permitted checker for that workflow. |
| Test Data | Request ID: MCR-003 Customer: Mohammed Al-Rahman Checker: Sarah Chen (Compliance Officer) Comment: Evidence reviewed — approved |
| Steps | 1. Search for the pending request using the request ID 2. Open the request from search results 3. Review the role banner or workflow note displayed in the header 4. Attempt to approve the request from the detail page 5. Return to the queue and confirm the action was blocked. |
| Expected Result | The request remains unprocessed and the unauthorized checker is denied access to approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, special-approval-rules, high, rbac, security |

### MCW-024 — Verify that a request submitted by a maker is shown to the checker with the correct pending state and not auto-approved by system refresh.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Special Approval Rules |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. A newly submitted request is waiting in the queue. |
| Test Data | Maker: Priya Sharma (KYC Analyst) Checker Attempt: Same user session Request: MCR-006 |
| Steps | 1. Submit a request from the maker account 2. Sign in with a valid checker account 3. Open the queue and locate the item 4. Refresh the page without opening the request 5. Confirm that the status still shows pending. |
| Expected Result | The request remains pending until a valid checker takes action. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, special-approval-rules, high, rbac, security |

### MCW-025 — Check that simultaneous approval attempts from two sessions do not create conflicting workflow states.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Special Approval Rules |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. Two users with valid checker roles can access the same pending request at the same time. |
| Test Data | Request ID: MCR-003 List: Onboarding Exceptions — OFAC SDN Maker: Priya Sharma (KYC Analyst) Checker: Sarah Chen (Compliance Officer) |
| Steps | 1. Open the same pending request in two browser sessions 2. Approve the request in the first session 3. Without closing the second session, click Approve there as well 4. Refresh both sessions and compare the status text 5. Inspect whether any duplicate approval toast or backend conflict is reported. |
| Expected Result | Only one approval succeeds and the other session receives a conflict or already-processed message. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, special-approval-rules, high, rbac, security |

### MCW-026 — Verify checker approval success modal shows action, submitter, timestamp, Pending status

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Approval / Rejection Handling |
| Priority | Medium |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. Maker submits CSEL request. |
| Test Data | Request ID: MCR-003 Customer: Mohammed Al-Rahman Checker: Sarah Chen (Compliance Officer) Comment: Evidence reviewed — approved |
| Steps | 1. Submit for approval 2. Observe modal 3. Verify fields 4. Click Done 5. Confirm item in queue. |
| Expected Result | Modal shows action, submitter, timestamp, Pending badge; closes cleanly. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, approval-rejection-handling, medium, rbac, security |

### MCW-027 — Verify mandatory comment modal blocks proceed without comment

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Approval / Rejection Handling |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. User initiates suspend/delete requiring comment. |
| Test Data | Request ID: MCR-003 Customer: Mohammed Al-Rahman Checker: Sarah Chen (Compliance Officer) Comment: Evidence reviewed — approved |
| Steps | 1. Trigger suspend 2. Leave comment empty 3. Click Confirm 4. See validation error 5. Enter comment and confirm. |
| Expected Result | Approve or reject action cannot proceed with an empty comment; entering a valid comment enables the decision and records it in audit history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, approval-rejection-handling, high, rbac, security |

### MCW-028 — Verify MC request cards show SLA timer, urgency, and escalation warning

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Queue Views & Ownership |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. Onboarding request near SLA exists. |
| Test Data | Request Type: Onboarding exception Submission Time: 22 hours ago SLA: 24 hours |
| Steps | 1. Open All requests 2. Locate onboarding card 3. Verify 24h SLA label 4. Check remaining time 5. Confirm escalation after 12h. |
| Expected Result | Card shows SLA, remaining time, urgent styling, and escalation warning. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, queue-views-ownership, high, rbac, security |

### MCW-029 — Verify bulk upload card shows entry count and supports drill-down.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Approval / Rejection Handling |
| Priority | Medium |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. Pending bulk upload request exists. |
| Test Data | Request ID: MCR-003 List: Onboarding Exceptions — OFAC SDN Maker: Priya Sharma (KYC Analyst) Checker: Sarah Chen (Compliance Officer) |
| Steps | 1. Open bulk card 2. Verify count 3. Drill into rows 4. Approve 5. Confirm activation. |
| Expected Result | Bulk card shows count, supports drill-down, activates on approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, approval-rejection-handling, medium, rbac, security |

### MCW-030 — Verify PEP exception list enforces MLRO as checker for all entries at list configuration level.

| Field | Value |
| --- | --- |
| Module | Maker-Checker Approval Workflow |
| Sub-Module | Checker Role Enforcement |
| Priority | High |
| Preconditions | Maker-checker queue contains at least one pending CSEL request. PEP Exceptions list exists; non-MLRO checker account available. |
| Test Data | Request: MCR-004 — Senator James Okafor Reason Code: PEP — Approved with EDD Required Checker: R. Gupta (MLRO) |
| Steps | 1. Submit entry to PEP list 2. Open MC queue as Compliance Officer 3. Verify approve blocked 4. Open as MLRO 5. Verify approve available and completes. |
| Expected Result | PEP exception list entries require MLRO as checker; Compliance Officer approval controls remain disabled for PEP-category requests. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-approval-workflow, checker-role-enforcement, high, rbac, security |

### NFR-001 — Verify CSEL exception evaluation completes within 30 ms at 95th percentile.

| Field | Value |
| --- | --- |
| Module | Non-Functional Requirements |
| Sub-Module | Performance |
| Priority | High |
| Preconditions | Performance test environment available. |
| Test Data | Environment: Production-like UAT Concurrent Users: 50 Dataset: 500+ active CSEL entries |
| Steps | 1. Configure screening load test 2. Run sustained volume 3. Measure latency percentiles 4. Review P95 5. Document result. |
| Expected Result | Screening evaluation against active CSEL entries completes within 30 ms at the 95th percentile under the reference load profile. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | non-functional-requirements, performance, high |

### NFR-002 — Verify list supports up to 250,000 active entries without functional degradation.

| Field | Value |
| --- | --- |
| Module | Non-Functional Requirements |
| Sub-Module | Scalability |
| Priority | Medium |
| Preconditions | High-volume test environment. |
| Test Data | Environment: Production-like UAT Concurrent Users: 50 Dataset: 500+ active CSEL entries |
| Steps | 1. Seed/simulate 250k entries 2. Open list detail and search 3. Run screening sample 4. Export filtered subset 5. Monitor response. |
| Expected Result | System remains functional with acceptable response at 250k entries. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | non-functional-requirements, scalability, medium, performance |

### NFR-003 — Verify expired entries removed from evaluation within 5 minutes of expiry.

| Field | Value |
| --- | --- |
| Module | Non-Functional Requirements |
| Sub-Module | TTL Enforcement |
| Priority | High |
| Preconditions | Controlled expiry entry available. |
| Test Data | Environment: Production-like UAT Concurrent Users: 50 Dataset: 500+ active CSEL entries |
| Steps | 1. Expire entry at known time 2. Wait for processing 3. Within 5 min run screening 4. Confirm no suppression 5. Verify Expired status. |
| Expected Result | Entry deactivates within 5 minutes; alerts fire on next screening. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | non-functional-requirements, ttl-enforcement, high, evaluation-engine |

### NFR-004 — Verify soft-deleted records retained minimum 7 years.

| Field | Value |
| --- | --- |
| Module | Non-Functional Requirements |
| Sub-Module | Data Retention |
| Priority | High |
| Preconditions | Soft-deleted entry and list exist. |
| Test Data | Environment: Production-like UAT Concurrent Users: 50 Dataset: 500+ active CSEL entries |
| Steps | 1. Delete via approved workflow 2. Search audit/history 3. Verify retrievable 4. Check retention metadata 5. Confirm no physical delete. |
| Expected Result | Soft-deleted lists and entries remain retrievable in audit and history views for at least seven years from deletion date. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | non-functional-requirements, data-retention, high, functional |

### NFR-005 — Verify evidence attachments store SHA-256 checksum

| Field | Value |
| --- | --- |
| Module | Non-Functional Requirements |
| Sub-Module | Evidence Security |
| Priority | Medium |
| Preconditions | Entry with uploaded evidence. |
| Test Data | Environment: Production-like UAT Concurrent Users: 50 Dataset: 500+ active CSEL entries |
| Steps | 1. Upload evidence 2. Retrieve metadata 3. Verify SHA-256 stored 4. Replace file 5. Confirm new hash generated. |
| Expected Result | Each uploaded evidence file stores a SHA-256 checksum that is updated when the attachment is replaced and is available for integrity verification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | non-functional-requirements, evidence-security, medium, rbac, security |

### NFR-006 — Verify exception evaluation continues from read-optimised replica during planned maintenance window.

| Field | Value |
| --- | --- |
| Module | Non-Functional Requirements |
| Sub-Module | Availability |
| Priority | Medium |
| Preconditions | Maintenance window scheduled; active CSEL entries exist. |
| Test Data | Environment: Production-like UAT Concurrent Users: 50 Dataset: 500+ active CSEL entries |
| Steps | 1. Note screening baseline before maintenance 2. During maintenance run screening with matching entry 3. Verify suppression still works 4. Check latency 5. Confirm no screening outage. |
| Expected Result | Evaluation operates from replica; live screening unaffected during maintenance. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | non-functional-requirements, availability, medium, evaluation-engine |

### NFR-007 — Verify evidence attachments encrypted at rest (AES-256) and in transit (TLS 1.3 minimum).

| Field | Value |
| --- | --- |
| Module | Non-Functional Requirements |
| Sub-Module | Evidence Security |
| Priority | Low |
| Preconditions | Security test environment with monitoring tools. |
| Test Data | Environment: Production-like UAT Concurrent Users: 50 Dataset: 500+ active CSEL entries |
| Steps | 1. Upload evidence file 2. Verify storage encryption metadata 3. Capture download transfer protocol 4. Confirm TLS 1.3+ 5. Document encryption at rest evidence. |
| Expected Result | Attachments stored with AES-256 at rest; transfers use TLS 1.3 or higher. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | non-functional-requirements, evidence-security, low, rbac, security |

### NFR-008 — Verify diacritic normalisation applied during multilingual name matching

| Field | Value |
| --- | --- |
| Module | Non-Functional Requirements |
| Sub-Module | Multilingual Support |
| Priority | Medium |
| Preconditions | Entry and alert names differ only by diacritics. |
| Test Data | Environment: Production-like UAT Concurrent Users: 50 Dataset: 500+ active CSEL entries |
| Steps | 1. Create entry with accented name 2. Trigger alert with normalised variant 3. Run evaluation 4. Compare match score 5. Verify suppression if threshold met. |
| Expected Result | Names containing diacritics match correctly after normalisation, preventing false negatives caused by accent or character-variant differences. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | non-functional-requirements, multilingual-support, medium, evaluation-engine |

### NTF-001 — Verify that a new exception submission creates an immediate notification for the compliance team.

| Field | Value |
| --- | --- |
| Module | Notification Framework |
| Sub-Module | Submission & Approval Alerts |
| Priority | High |
| Preconditions | Notification delivery is enabled for the test user. A maker submits a fresh exception entry and the user has access to the notification inbox. |
| Test Data | Recipient Role: Compliance Officer Event: Entry submitted Related Entry: CSEL-001 |
| Steps | 1. Log in as a maker and submit a valid exception entry 2. Keep the submission timestamp in view for reference 3. Switch to the compliance officer account or open the shared notification center 4. Check both the in-app inbox and email channel 5. Match the received alert against the submitted request ID. |
| Expected Result | A notification arrives immediately to Compliance Officers / Compliance Managers through in-app and email channels, with the submission clearly linked to the new request. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notification-framework, submission-approval-alerts, high, notifications |

### NTF-002 — Confirm that approval of an exception entry notifies the submitting analyst without delay.

| Field | Value |
| --- | --- |
| Module | Notification Framework |
| Sub-Module | Submission & Approval Alerts |
| Priority | High |
| Preconditions | Notification delivery is enabled for the test user. A pending request is available and the checker account is able to approve it. |
| Test Data | Recipient Role: Compliance Officer Event: Entry submitted Related Entry: CSEL-001 |
| Steps | 1. Open a pending CSEL request as a checker 2. Approve the request and note the approval time 3. Sign in as the submitting analyst or open the analyst notification tray 4. Inspect the in-app alert and mailbox 5. Verify the message text points to the approved request. |
| Expected Result | The submitting analyst receives immediate in-app and email notification that the exception entry has been approved. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notification-framework, submission-approval-alerts, high, notifications |

### NTF-003 — Verify that rejection of an exception entry is pushed back to the maker with the checker comment included.

| Field | Value |
| --- | --- |
| Module | Notification Framework |
| Sub-Module | Submission & Approval Alerts |
| Priority | High |
| Preconditions | Notification delivery is enabled for the test user. A pending request is ready for rejection and the checker can add a rejection note. |
| Test Data | Recipient Role: Compliance Officer Event: Entry submitted Related Entry: CSEL-001 |
| Steps | 1. Open the request from the checker queue 2. Enter a rejection comment and complete the rejection 3. Return to the maker account 4. Open the notification bell and the email inbox 5. Check whether the rejection note is visible in the alert body. |
| Expected Result | The maker gets an immediate notification by in-app message and email, and the checker rejection comment is included in the communication. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notification-framework, submission-approval-alerts, high, rbac, security |

### NTF-004 — Check that onboarding requests that stay pending for 12 hours trigger the escalation email to the correct stakeholders.

| Field | Value |
| --- | --- |
| Module | Notification Framework |
| Sub-Module | SLA Escalation Alerts |
| Priority | Medium |
| Preconditions | Notification delivery is enabled for the test user. An onboarding exception is left untouched after submission and the environment can simulate time progression. |
| Test Data | Request: MCR-001 SLA Remaining: 20 hours Escalation Recipient: Compliance Manager |
| Steps | 1. Submit an onboarding-related exception entry 2. Leave the request in Pending Approval status 3. Advance the clock or wait until the 12-hour boundary is reached 4. Review the notification logs for the compliance manager and MLRO 5. Confirm that the email notification was created at the expected time. |
| Expected Result | At the 12-hour mark, the pending onboarding request escalates by email to the Compliance Manager and MLRO. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notification-framework, sla-escalation-alerts, medium, notifications |

### NTF-005 — Verify that periodic or event-driven requests that remain pending beyond 24 hours generate the daily escalation email at 09:00.

| Field | Value |
| --- | --- |
| Module | Notification Framework |
| Sub-Module | SLA Escalation Alerts |
| Priority | Medium |
| Preconditions | Notification delivery is enabled for the test user. A periodic or event-driven exception remains pending across a daily schedule boundary. |
| Test Data | Request: MCR-001 SLA Remaining: 20 hours Escalation Recipient: Compliance Manager |
| Steps | 1. Create a periodic or event-driven exception and leave it pending 2. Move the system time close to the next 09:00 delivery window 3. Open the notification queue after the schedule runs 4. Check the recipient list and mail timestamp 5. Compare the event age with the escalation threshold. |
| Expected Result | A daily 09:00 email is sent to the Compliance Manager when the request remains unactioned beyond 24 hours. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notification-framework, sla-escalation-alerts, medium, notifications |

### NTF-006 — Ensure that an entry expiring in 30 days alerts both the list owner and the compliance officer.

| Field | Value |
| --- | --- |
| Module | Notification Framework |
| Sub-Module | Expiry Reminder Alerts |
| Priority | High |
| Preconditions | Notification delivery is enabled for the test user. At least one active exception entry has exactly 30 days remaining before expiry. |
| Test Data | Entry: Senator James Okafor Expiry Date: 30 Jun 2026 Recipients: List owner, Compliance Officer |
| Steps | 1. Open an active entry with a known expiry date 2. Move the date or use test data so the entry reaches the 30-day threshold 3. Refresh the notification panel for the list owner and compliance officer 4. Review the email inbox for both users 5. Confirm the message references the correct entry and expiry date. |
| Expected Result | Both the list owner and Compliance Officer receive in-app and email notifications 30 days before expiry. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notification-framework, expiry-reminder-alerts, high, notifications |

### NTF-007 — Confirm that the 7-day expiry warning is delivered as a second escalation, not as a duplicate of the 30-day reminder.

| Field | Value |
| --- | --- |
| Module | Notification Framework |
| Sub-Module | Expiry Reminder Alerts |
| Priority | High |
| Preconditions | Notification delivery is enabled for the test user. An active entry is set to expire in 7 days and the 30-day warning has already been sent or is not relevant. |
| Test Data | Entry: Senator James Okafor Expiry Date: 30 Jun 2026 Recipients: List owner, Compliance Officer |
| Steps | 1. Set up an entry that is exactly 7 days from expiry 2. Open the user notification area for the list owner 3. Check the email channel as well 4. Compare the wording against the earlier reminder 5. Make sure the alert reflects the shorter remaining time. |
| Expected Result | A second in-app and email reminder is issued at 7 days before expiry to the list owner and Compliance Officer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notification-framework, expiry-reminder-alerts, high, notifications |

### NTF-008 — Verify that on the expiry date the system notifies the compliance users and clearly indicates that screening alerts are re-activated.

| Field | Value |
| --- | --- |
| Module | Notification Framework |
| Sub-Module | Expiry Reminder Alerts |
| Priority | High |
| Preconditions | Notification delivery is enabled for the test user. An exception entry reaches its expiry date. |
| Test Data | Entry: Senator James Okafor Expiry Date: 30 Jun 2026 Recipients: List owner, Compliance Officer |
| Steps | 1. Let the entry reach its expiry date 2. Wait for the expiry processing window to complete 3. Open the Compliance Officer and Compliance Manager notification feeds 4. Check the email delivered by the system 5. Verify that the status shown on the entry is no longer Active. |
| Expected Result | On the expiry date, the relevant compliance users receive in-app and email notifications and the entry is marked expired, so suppression stops and alerts resume. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notification-framework, expiry-reminder-alerts, high, notifications |

### NTF-009 — Check that a material identity change immediately sends an auto-suspension notification to the Compliance Officer.

| Field | Value |
| --- | --- |
| Module | Notification Framework |
| Sub-Module | Material Identity Change Alerts |
| Priority | Medium |
| Preconditions | Notification delivery is enabled for the test user. A customer record changes in a material way, such as name, date of birth, or nationality. |
| Test Data | Customer ID: CUS-011234 Suspended Entries: 2 Recipient: Compliance Officer |
| Steps | 1. Update the linked customer profile with a material identity change 2. Trigger the validation or sync process 3. Open the Compliance Officer notification inbox 4. Review the email alert sent by the system 5. Verify that the exception status changed to suspended. |
| Expected Result | The system immediately notifies the Compliance Officer by in-app and email channels when the entry is auto-suspended. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notification-framework, material-identity-change-alerts, medium, notifications |

### NTF-010 — Confirm that suppressed alert events do not create noisy user notifications and are only written to the audit trail.

| Field | Value |
| --- | --- |
| Module | Notification Framework |
| Sub-Module | Suppression Silence Rule |
| Priority | High |
| Preconditions | Notification delivery is enabled for the test user. An active CSEL entry matches an incoming screening hit and suppression is expected. |
| Test Data | Recipient Role: Compliance Officer Event: Entry submitted Related Entry: CSEL-001 |
| Steps | 1. Trigger a screening event that should be suppressed by an active entry 2. Observe the analyst workspace and notification center 3. Check that no pop-up or email appears for the suppression itself 4. Open the audit trail record for the event 5. Verify the suppression entry is logged with timestamp details. |
| Expected Result | No end-user notification is generated for the suppression event; the action is recorded silently in the audit trail in real time. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notification-framework, suppression-silence-rule, high, audit-trail |

### NTF-011 — Verify that a successful bulk upload sends only the maker-side success notification and does not notify unrelated roles.

| Field | Value |
| --- | --- |
| Module | Notification Framework |
| Sub-Module | Bulk Upload Alerts |
| Priority | Medium |
| Preconditions | Notification delivery is enabled for the test user. A bulk upload file is prepared and the submitting analyst has permission to upload. |
| Test Data | Bulk Upload: 14 entries approved Target List: Periodic Re-Screen — UN Consolidated List Recipient: Priya Sharma (KYC Analyst) |
| Steps | 1. Upload a valid bulk file 2. Wait for the upload completion message 3. Open the submitting analyst notification feed 4. Review the email inbox for the same user 5. Check that other roles do not receive the completion message. |
| Expected Result | The submitting analyst receives the bulk upload completion notice in-app, while unrelated users are not notified. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notification-framework, bulk-upload-alerts, medium, rbac, security |

### NTF-012 — Verify that a bulk upload with validation errors sends an immediate failure notification and exposes the error summary.

| Field | Value |
| --- | --- |
| Module | Notification Framework |
| Sub-Module | Bulk Upload Alerts |
| Priority | Medium |
| Preconditions | Notification delivery is enabled for the test user. A batch file containing invalid rows is uploaded by the maker. |
| Test Data | Bulk Upload: 14 entries approved Target List: Periodic Re-Screen — UN Consolidated List Recipient: Priya Sharma (KYC Analyst) |
| Steps | 1. Upload a file with known invalid records 2. Wait for the validation result screen 3. Open the in-app notification for the submitting analyst 4. Review the email alert and the validation summary 5. Compare the listed errors with the bad rows in the file. |
| Expected Result | The submitting analyst receives an immediate in-app and email failure notification, including validation errors for the affected rows. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notification-framework, bulk-upload-alerts, medium, notifications |

### NTF-013 — Confirm that the monthly CSEL Register Report reaches the Compliance Manager and MLRO as a PDF email attachment.

| Field | Value |
| --- | --- |
| Module | Notification Framework |
| Sub-Module | Monthly Report Delivery |
| Priority | Medium |
| Preconditions | The first day of the month report job is available in the test environment. |
| Test Data | Recipient Role: Compliance Officer Event: Entry submitted Related Entry: CSEL-001 |
| Steps | 1. Trigger the monthly report job or simulate the first day schedule 2. Open the MLRO mailbox 3. Open the Compliance Manager mailbox 4. Check that the report email includes a PDF attachment 5. Verify the attachment name matches the register report. |
| Expected Result | Both Compliance Manager and MLRO receive the monthly report by email with a PDF attachment. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notification-framework, monthly-report-delivery, medium, rbac, security |

### NTF-014 — Check that a True-Hit Conflict blocking event notifies both the submitting analyst and the compliance officer immediately.

| Field | Value |
| --- | --- |
| Module | Notification Framework |
| Sub-Module | Conflict Block Alerts |
| Priority | Medium |
| Preconditions | Notification delivery is enabled for the test user. A customer ID already exists on an active custom blacklist and a new submission is attempted. |
| Test Data | Recipient Role: Compliance Officer Event: Entry submitted Related Entry: CSEL-001 |
| Steps | 1. Start a new exception submission for the conflicting customer 2. Allow the system to run the conflict check 3. Review the blocked submission message on screen 4. Open the notification tray for the analyst and compliance officer 5. Confirm the same reason is present in the email notification. |
| Expected Result | The submission block is notified immediately to both the maker and Compliance Officer through in-app and email channels. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notification-framework, conflict-block-alerts, medium, notifications |

### NTF-015 — Ensure that notification timing follows the segregation-of-duties rules and not an earlier or later schedule.

| Field | Value |
| --- | --- |
| Module | Notification Framework |
| Sub-Module | Notification Timing Validation |
| Priority | Medium |
| Preconditions | Notification delivery is enabled for the test user. Multiple test records are configured for immediate, 12-hour, 24-hour, 30-day, and 7-day notification events. |
| Test Data | Recipient Role: Compliance Officer Event: Entry submitted Related Entry: CSEL-001 |
| Steps | 1. Prepare one record for each notification trigger type 2. Advance the system clock or wait for scheduled processing 3. Compare the received notifications with the configured trigger time 4. Review the user, channel, and subject line for each message 5. Confirm there is no duplicate or missed notification outside the defined timing window. |
| Expected Result | Every notification is delivered at the exact timing defined for the module, and no extra message appears outside the expected schedule. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notification-framework, notification-timing-validation, medium, notifications |

### NTF-023 — Verify notification bell shows unread indicator and Mark all read clears unread styling

| Field | Value |
| --- | --- |
| Module | Notification Framework |
| Sub-Module | Alert Delivery & Timing |
| Priority | Low |
| Preconditions | Notification delivery is enabled for the test user. Unread notifications exist. |
| Test Data | Recipient Role: Compliance Officer Event: Entry submitted Related Entry: CSEL-001 |
| Steps | 1. Click bell 2. Verify unread dot 3. Check unread item styling 4. Mark all read 5. Confirm indicators clear. |
| Expected Result | Notification bell shows an unread indicator when new messages exist; Mark all read clears unread styling while retaining notification text in the panel. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notification-framework, alert-delivery-timing, low, notifications |

### NTF-024 — Verify onboarding exception notifications carry higher priority flag

| Field | Value |
| --- | --- |
| Module | Notification Framework |
| Sub-Module | Alert Delivery & Timing |
| Priority | Medium |
| Preconditions | Notification delivery is enabled for the test user. Onboarding and periodic submissions exist. |
| Test Data | Recipient Role: Compliance Officer Event: Entry submitted Related Entry: CSEL-001 |
| Steps | 1. Submit onboarding exception 2. Open CO notification centre 3. Compare with periodic notification priority 4. Verify visual distinction 5. Check email if configured. |
| Expected Result | Onboarding notifications flagged higher priority than periodic/event-driven. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notification-framework, alert-delivery-timing, medium, notifications |

### NTF-025 — Verify list suspension warns investigation team about screening alert volume increase

| Field | Value |
| --- | --- |
| Module | Notification Framework |
| Sub-Module | Alert Delivery & Timing |
| Priority | High |
| Preconditions | Notification delivery is enabled for the test user. User can suspend active list. |
| Test Data | Recipient Role: Compliance Officer Event: Entry submitted Related Entry: CSEL-001 |
| Steps | 1. Initiate suspension 2. Read impact warning 3. Confirm team notification 4. Complete approval 5. Verify Suspended status. |
| Expected Result | Suspension shows impact warning and notifies investigation team. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notification-framework, alert-delivery-timing, high, notifications |

### NTF-026 — Verify notification delivery channels are configurable per user in system Settings

| Field | Value |
| --- | --- |
| Module | Notification Framework |
| Sub-Module | User Preferences |
| Priority | Medium |
| Preconditions | Notification delivery is enabled for the test user. User with configurable notification settings. |
| Test Data | Recipient Role: Compliance Officer Event: Entry submitted Related Entry: CSEL-001 |
| Steps | 1. Open Settings > Notifications 2. Disable email for CSEL events 3. Trigger test notification 4. Verify in-app only 5. Re-enable email and retest. |
| Expected Result | User can configure notification channels; delivery respects settings. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | notification-framework, user-preferences, medium, notifications |

### RBAC-001 — Verify that a Compliance Officer can see the full CSEL menu and all action controls required for checker operations.

| Field | Value |
| --- | --- |
| Module | Role-Based Access Control |
| Sub-Module | Role Permission Matrix |
| Priority | High |
| Preconditions | User is logged in with a Compliance Officer account that has access to the CSEL module. |
| Test Data | User Role: Compliance Officer Module: Exception List Manager Action Under Test: Create list |
| Steps | 1. Open the CSEL landing page from the main navigation 2. Check the list grid and action buttons shown on the page 3. Open any pending CSEL request from the maker-checker queue 4. Look for the approve and reject controls on the request screen 5. Move to an exception entry detail page and confirm that add, edit, delete, and bulk upload actions are available. |
| Expected Result | The Compliance Officer can access the CSEL pages and the checker controls are visible, including approval actions for pending requests. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | role-based-access-control, role-permission-matrix, high, rbac, security |

### RBAC-002 — Confirm that an MLRO can access all CSEL maintenance screens and handle checker decisions for PEP or other restricted cases.

| Field | Value |
| --- | --- |
| Module | Role-Based Access Control |
| Sub-Module | Role Permission Matrix |
| Priority | High |
| Preconditions | User is logged in as MLRO and at least one PEP-related or elevated approval request exists. |
| Test Data | User Role: MLRO PEP Entry: Senator James Okafor Action: Approve pending PEP request |
| Steps | 1. Sign in with the MLRO account 2. Open the CSEL module and verify the list view loads normally 3. Enter the maker-checker queue and open a pending request 4. Confirm that approve and reject are available for eligible requests 5. Open a PEP or higher-risk request and check that the checker action is still enabled. |
| Expected Result | The MLRO has the expected CSEL access and can act as checker where MLRO approval is required. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | role-based-access-control, role-permission-matrix, high, rbac, security |

### RBAC-003 — Check that a Compliance Manager has unrestricted CSEL visibility and checker rights on the approved workflow screens.

| Field | Value |
| --- | --- |
| Module | Role-Based Access Control |
| Sub-Module | Role Permission Matrix |
| Priority | High |
| Preconditions | User session belongs to a Compliance Manager account. |
| Test Data | User Role: Compliance Officer Module: Exception List Manager Action Under Test: Create list |
| Steps | 1. Launch the application using the Compliance Manager profile 2. Go to the CSEL landing page and open a list 3. Review the entry actions available from the list detail screen 4. Open the maker-checker queue and inspect a pending request 5. Try the approve action from a request that was submitted by another user. |
| Expected Result | The Compliance Manager can view and manage CSEL records and can approve or reject requests within the permitted workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | role-based-access-control, role-permission-matrix, high, rbac, security |

### RBAC-004 — Verify that a Risk Analyst is restricted to read-only list access and cannot start entry maintenance actions.

| Field | Value |
| --- | --- |
| Module | Role-Based Access Control |
| Sub-Module | Role Permission Matrix |
| Priority | High |
| Preconditions | User is signed in as a Risk Analyst. |
| Test Data | Restricted Role: KYC Analyst Own Submission: MCR-005 Other User: Sarah Chen (Compliance Officer) |
| Steps | 1. Open the CSEL landing page 2. Observe the action icons shown against each list row 3. Open one list and check the entry toolbar 4. Attempt to start a new entry from the list detail view 5. Check whether bulk upload or delete controls are exposed anywhere in the module. |
| Expected Result | The Risk Analyst can view lists only and does not get access to add, edit, delete, bulk upload, or maker-checker actions. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | role-based-access-control, role-permission-matrix, high, rbac, security |

### RBAC-005 — Verify that a KYC Analyst can view only their own submissions and cannot use checker functions.

| Field | Value |
| --- | --- |
| Module | Role-Based Access Control |
| Sub-Module | Role Permission Matrix |
| Priority | High |
| Preconditions | User is logged in as a KYC Analyst and has at least one request submitted by a different user. |
| Test Data | User Role: Compliance Officer Module: Exception List Manager Action Under Test: Create list |
| Steps | 1. Open the CSEL module 2. Navigate to MY REQUESTS and note the items listed there 3. Try to open a request submitted by another analyst from the queue or a direct link 4. Check the entry page for add, edit, delete, and bulk upload actions 5. Confirm whether approve and reject are hidden or disabled on the request screen. |
| Expected Result | The KYC Analyst sees only personal submissions and does not get permission to approve, reject, delete, or bulk upload. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | role-based-access-control, role-permission-matrix, high, rbac, security |

### RBAC-006 — Confirm that a Level 1 Investigator has the same narrow access pattern as a KYC Analyst.

| Field | Value |
| --- | --- |
| Module | Role-Based Access Control |
| Sub-Module | Role Permission Matrix |
| Priority | High |
| Preconditions | User account is a Level 1 Investigator. |
| Test Data | User Role: Compliance Officer Module: Exception List Manager Action Under Test: Create list |
| Steps | 1. Sign in with the Level 1 Investigator role 2. Open the CSEL landing page and inspect the row-level actions 3. Open the MY REQUESTS area and verify the entries displayed there 4. Try to initiate a new exception entry from the list view 5. Check whether any approval control is available on a pending request. |
| Expected Result | The Level 1 Investigator is limited to viewing only their own work and cannot perform maker or checker actions outside that scope. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | role-based-access-control, role-permission-matrix, high, rbac, security |

### RBAC-007 — Verify that a Level 2 Investigator can create and maintain entries but still cannot approve or delete a request as a checker.

| Field | Value |
| --- | --- |
| Module | Role-Based Access Control |
| Sub-Module | Role Permission Matrix |
| Priority | High |
| Preconditions | User is signed in as a Level 2 Investigator. |
| Test Data | User Role: Compliance Officer Module: Exception List Manager Action Under Test: Create list |
| Steps | 1. Open the CSEL module after logging in 2. Start a new exception entry from the list detail page 3. Edit an existing entry that belongs to the same user 4. Check whether the delete action appears on the entry row 5. Open a pending request and confirm the approval controls available for this role. |
| Expected Result | The Level 2 Investigator can work as a maker for allowed actions, but delete and checker approval remain restricted. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | role-based-access-control, role-permission-matrix, high, rbac, security |

### RBAC-008 — Check that the System Administrator can manage lists and entries, but does not receive bulk upload permission or checker authority.

| Field | Value |
| --- | --- |
| Module | Role-Based Access Control |
| Sub-Module | Role Permission Matrix |
| Priority | High |
| Preconditions | User is logged in as System Administrator. |
| Test Data | Roles: KYC Analyst, Compliance Officer, MLRO, Read-Only Auditor Actions: Create, Approve, View, Export |
| Steps | 1. Open the CSEL landing page 2. Confirm that list creation, edit, and delete controls are available 3. Open an entry detail screen and verify entry maintenance controls 4. Look for the bulk upload option on the list detail page 5. Open a pending request and verify that approve or reject is not exposed to this role. |
| Expected Result | The System Administrator can administer lists and entries, but bulk upload and maker-checker approval are not granted. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | role-based-access-control, role-permission-matrix, high, rbac, security |

### RBAC-009 — Make sure a non-checker role cannot see or use approval controls even when a pending request is opened directly.

| Field | Value |
| --- | --- |
| Module | Role-Based Access Control |
| Sub-Module | Role Permission Matrix |
| Priority | High |
| Preconditions | User is signed in as Risk Analyst, KYC Analyst, or Level 1 Investigator and a request link is available. |
| Test Data | User Role: Compliance Officer Module: Exception List Manager Action Under Test: Create list |
| Steps | 1. Copy or open a direct link to a pending CSEL request 2. Load the request in the browser while using the restricted role 3. Inspect the action panel for approve and reject buttons 4. Refresh the page once to confirm the controls do not appear after reload 5. Attempt the browser action that would normally approve the request. |
| Expected Result | Approval controls stay unavailable to the restricted role, and the request cannot be processed from the UI. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | role-based-access-control, role-permission-matrix, high, rbac, security |

### RBAC-010 — Verify that a checker cannot approve or reject a request that was submitted from the same account.

| Field | Value |
| --- | --- |
| Module | Role-Based Access Control |
| Sub-Module | Role Permission Matrix |
| Priority | High |
| Preconditions | User is logged in as Compliance Officer, MLRO, or Compliance Manager and also has an item submitted by the same username. |
| Test Data | User Role: Compliance Officer Module: Exception List Manager Action Under Test: Create list |
| Steps | 1. Submit a test CSEL request from the checker account 2. Open the submitted request from MY REQUESTS or the queue 3. Check whether approve and reject become available on that same record 4. Try to perform the checker action on the submission 5. Review the response shown by the system. |
| Expected Result | The system prevents self-approval, matching the segregation-of-duties rule that checkers can act only on requests not submitted by themselves. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | role-based-access-control, role-permission-matrix, high, rbac, security |

### RBAC-011 — Check that role-based permissions are refreshed correctly after logout and a different user signs in on the same workstation.

| Field | Value |
| --- | --- |
| Module | Role-Based Access Control |
| Sub-Module | Role Permission Matrix |
| Priority | High |
| Preconditions | One browser session is available for two accounts with different roles. |
| Test Data | Roles: KYC Analyst, Compliance Officer, MLRO, Read-Only Auditor Actions: Create, Approve, View, Export |
| Steps | 1. Log in with a restricted role and note the available actions 2. Sign out completely from the application 3. Sign in again using a checker-level role 4. Reopen the CSEL module and compare the action set 5. Log out once more and sign back in with the restricted role to confirm the downgrade also applies. |
| Expected Result | The application applies permissions from the active login only and does not carry over the previous session's access rights. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | role-based-access-control, role-permission-matrix, high, rbac, security |

### RBAC-012 — Confirm that direct API or backend approval attempts are rejected when the caller does not have checker permission.

| Field | Value |
| --- | --- |
| Module | Role-Based Access Control |
| Sub-Module | Role Permission Matrix |
| Priority | High |
| Preconditions | A user token is available for a non-checker role and an approval endpoint is reachable in the test environment. |
| Test Data | Roles: KYC Analyst, Compliance Officer, MLRO, Read-Only Auditor Actions: Create, Approve, View, Export |
| Steps | 1. Authenticate as a restricted role 2. Capture a pending request identifier from the module 3. Call the approval action through the UI or API path used by the application 4. Observe the response returned by the system 5. Check whether the attempt is recorded as an access or integrity event. |
| Expected Result | The system rejects the action and logs the attempt, so an insufficiently privileged role cannot bypass the UI restriction. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | role-based-access-control, role-permission-matrix, high, rbac, security |

### RBAC-013 — Verify View Own restriction limits KYC Analyst and Level 1 Investigator to their own submissions

| Field | Value |
| --- | --- |
| Module | Role-Based Access Control |
| Sub-Module | Role Permission Matrix |
| Priority | High |
| Preconditions | Two analysts each have pending or historical CSEL submissions in the same environment. |
| Test Data | Restricted Roles: KYC Analyst, Level 1 Investigator Own Request: MCR-005 submitted by Priya Sharma (KYC Analyst) Other Request: Approved entry by Sarah Chen (Compliance Officer) |
| Steps | 1. Sign in as KYC Analyst and open Maker-checker queue My Requests tab. 2. Confirm only requests submitted by the signed-in analyst appear. 3. Search for a request ID known to belong to another analyst. 4. Repeat steps 1–3 as Level 1 Investigator. 5. Sign in as Compliance Officer and confirm the same request is visible under All Requests. |
| Expected Result | Restricted roles see and open only their own submissions; privileged checker roles retain visibility of all requests. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | role-based-access-control, role-permission-matrix, high, rbac, security |

### RBAC-014 — Verify role permission matrix stays consistent for all major CSEL actions across supported roles

| Field | Value |
| --- | --- |
| Module | Role-Based Access Control |
| Sub-Module | Role Permission Matrix |
| Priority | High |
| Preconditions | Test users are available for Compliance Officer, MLRO, Compliance Manager, Risk Analyst, KYC Analyst, Level 1 Investigator, Level 2 Investigator, and System Administrator. |
| Test Data | Roles: KYC Analyst, Compliance Officer, MLRO, Read-Only Auditor Actions: Create, Approve, View, Export |
| Steps | 1. Open the CSEL landing page with each role 2. Record the actions available for lists and entries 3. Try the bulk upload and delete paths where the UI shows them 4. Open the maker-checker queue and verify who can approve or reject 5. Compare the visible rights against the role matrix defined for the module. |
| Expected Result | Each role exposes only the list, entry, bulk-upload, and maker-checker actions permitted by the published access matrix; no unauthorized action appears in the UI. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | role-based-access-control, role-permission-matrix, high, rbac, security |

### RBAC-015 — Verify Read-Only Auditor can view all CSEL screens but cannot perform maintenance or checker actions.

| Field | Value |
| --- | --- |
| Module | Role-Based Access Control |
| Sub-Module | Role Permission Matrix |
| Priority | High |
| Preconditions | Auditor account available. |
| Test Data | Restricted Role: KYC Analyst Own Submission: MCR-005 Other User: Sarah Chen (Compliance Officer) |
| Steps | 1. Login as Auditor 2. Open all CSEL views 3. Attempt create/edit/delete/bulk/approve 4. Verify blocked 5. Confirm view works. |
| Expected Result | Auditor has read-only access with no maker/checker capabilities. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | role-based-access-control, role-permission-matrix, high, rbac, security |

### RBAC-016 — Verify Read-Only Auditor has view-only access with no create, edit, delete, bulk, or checker actions.

| Field | Value |
| --- | --- |
| Module | Role-Based Access Control |
| Sub-Module | Role Permission Matrix |
| Priority | High |
| Preconditions | Read-Only Auditor account available. |
| Test Data | Restricted Role: KYC Analyst Own Submission: MCR-005 Other User: Sarah Chen (Compliance Officer) |
| Steps | 1. Login as Auditor 2. Navigate all CSEL screens 3. Attempt create, edit, delete, bulk upload, approve 4. Verify all blocked 5. Confirm view and export audit only. |
| Expected Result | Read-Only Auditor can view lists, entries, audit trail, and reports but cannot create, edit, approve, suspend, delete, or bulk-upload CSEL records. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | role-based-access-control, role-permission-matrix, high, rbac, security |

### RCE-001 — Verify that a new exception entry cannot be submitted when the reason code field is left blank.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Reason Code Standardization |
| Priority | Low |
| Preconditions | A maker has opened a valid entry form and all other mandatory fields are already completed. |
| Test Data | Reason Code: Confirmed Different Person Alternate: PEP — Approved with EDD Minimum Reason Detail: 50 characters |
| Steps | 1. Fill in the customer and watchlist details on the CSEL entry form 2. Leave the reason code field empty 3. Attach no supporting file and move to submission 4. Try to submit the entry from the form 5. Read the validation message displayed by the system. |
| Expected Result | The submission is blocked and the reason code field is highlighted as mandatory. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, reason-code-standardization, low, maker-checker |

### RCE-002 — Check that attaching evidence does not bypass the mandatory reason code rule.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Reason Code Standardization |
| Priority | Low |
| Preconditions | The entry form contains a supporting document but the reason code is still blank. |
| Test Data | Reason Code: Confirmed Different Person Alternate: PEP — Approved with EDD Minimum Reason Detail: 50 characters |
| Steps | 1. Open the same entry form used for CSEL creation 2. Upload a supporting evidence file 3. Keep the reason code field empty 4. Click Submit 5. Review the error banner and field-level validation. |
| Expected Result | The system still refuses the submission because evidence alone is not enough without a reason code. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, reason-code-standardization, low, maker-checker |

### RCE-003 — Ensure that only the configured standard reason codes can be selected for a new exception entry.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Reason Code Standardization |
| Priority | Low |
| Preconditions | The maker is on the entry form and the configured reason code list is available. |
| Test Data | Reason Code: Confirmed Different Person Alternate: PEP — Approved with EDD Minimum Reason Detail: 50 characters |
| Steps | 1. Open the reason code dropdown on the form 2. Compare the available options with the approved standard list 3. Try to type or paste a free-text value that is not listed 4. Leave the rest of the form valid and submit 5. Confirm how the system handles the invalid value. |
| Expected Result | Only approved reason codes are accepted; free-text or custom values are rejected. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, reason-code-standardization, low, maker-checker |

### RCE-004 — Verify that reason codes are trimmed and stored cleanly when a user pastes extra spaces around the selected value.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Reason Code Standardization |
| Priority | Low |
| Preconditions | The form accepts typed input or pasted text for the reason code field. |
| Test Data | Reason Code: Confirmed Different Person Alternate: PEP — Approved with EDD Minimum Reason Detail: 50 characters |
| Steps | 1. Copy a valid reason code and add leading and trailing spaces 2. Paste the value into the reason code field 3. Move focus away from the field and watch the preview value 4. Submit the entry using otherwise valid data 5. Reopen the draft or saved record and inspect the stored value. |
| Expected Result | The system trims the spacing or rejects the malformed value; the stored reason code remains standardized. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, reason-code-standardization, low, maker-checker |

### RCE-005 — Confirm that the selected reason code remains intact after the record is saved and reopened.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Reason Code Standardization |
| Priority | Low |
| Preconditions | A draft or pending entry already contains a valid reason code. |
| Test Data | Reason Code: Confirmed Different Person Alternate: PEP — Approved with EDD Minimum Reason Detail: 50 characters |
| Steps | 1. Complete the form and select one approved reason code 2. Save the record and leave the screen 3. Reopen the same entry from the queue or list 4. Refresh the browser to force a reload 5. Check the reason code value in the record again. |
| Expected Result | The same reason code is shown after save, reopen, and refresh with no unexpected change. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, reason-code-standardization, low, maker-checker |

### RCE-006 — Verify that reason code information is displayed correctly in the list view and the entry detail screen.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Reason Code Standardization |
| Priority | Low |
| Preconditions | An approved exception entry is already available in the active list. |
| Test Data | Reason Code: Confirmed Different Person Alternate: PEP — Approved with EDD Minimum Reason Detail: 50 characters |
| Steps | 1. Open the exception list grid 2. Locate the target entry and note the reason code in the row 3. Open the full entry detail screen 4. Compare the displayed reason code with the grid value 5. Return to the list and confirm the value did not change. |
| Expected Result | The reason code appears consistently in both the row summary and the detailed record. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, reason-code-standardization, low, maker-checker |

### RCE-007 — Check that the reason code filter narrows the list to the selected code only.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Reason Code Standardization |
| Priority | Low |
| Preconditions | The list contains entries with several different reason codes. |
| Test Data | Reason Code: Confirmed Different Person Alternate: PEP — Approved with EDD Minimum Reason Detail: 50 characters |
| Steps | 1. Open the active exception list page 2. Choose one reason code from the filter panel 3. Apply the filter and wait for the grid to refresh 4. Scan the rows for any value outside the selected code 5. Clear the filter and confirm the full set returns. |
| Expected Result | Only entries carrying the selected reason code remain visible while the filter is active. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, reason-code-standardization, low, maker-checker |

### RCE-008 — Confirm that reason codes are exported correctly to CSV and PDF outputs.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Reason Code Standardization |
| Priority | Low |
| Preconditions | The list contains at least one approved entry with a visible reason code. |
| Test Data | File: onboarding_fp_analysis.pdf Max Size: 10 MB Entry: CSEL-001 |
| Steps | 1. Filter the grid to a known entry that has a reason code 2. Export the current list as CSV 3. Export the same view as PDF 4. Open both files and search for the same entry 5. Compare the exported reason code against the on-screen value. |
| Expected Result | Both export formats contain the correct reason code and match the value shown in the application. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, reason-code-standardization, low, export |

### RCE-009 — Verify that summary counts by reason code update after a new entry using the same code is approved.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Reason Code Standardization |
| Priority | Low |
| Preconditions | The dashboard or report section already shows counts for one reason code. |
| Test Data | Reason Code: Confirmed Different Person Alternate: PEP — Approved with EDD Minimum Reason Detail: 50 characters |
| Steps | 1. Note the current count for the chosen reason code 2. Create or approve another entry using the same code 3. Return to the summary panel or report page 4. Refresh the view so the counts recalculate 5. Compare the new count with the original figure. |
| Expected Result | The displayed distribution count increases by one for the matching reason code. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, reason-code-standardization, low, maker-checker |

### RCE-010 — Ensure that adding evidence to a draft entry does not overwrite the selected reason code.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Reason Code Standardization |
| Priority | Low |
| Preconditions | A draft entry already contains a valid reason code before evidence is added. |
| Test Data | Reason Code: Confirmed Different Person Alternate: PEP — Approved with EDD Minimum Reason Detail: 50 characters |
| Steps | 1. Open the saved draft record 2. Upload a supporting document from the local machine 3. Confirm the file appears in the attachment area 4. Save the record again without changing the reason code 5. Reopen the same draft and compare the field values. |
| Expected Result | The reason code stays unchanged after the evidence upload and resave. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, reason-code-standardization, low, maker-checker |

### RCE-011 — Check that the system prompts for supporting evidence when the maker tries to continue without attaching a file.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Evidence & Attachments |
| Priority | Low |
| Preconditions | A valid exception form is being completed but no evidence file has been selected yet. |
| Test Data | Entry: CSEL-001 Reason Code: Confirmed Different Person Evidence Reference: DOC-2026-1188 |
| Steps | 1. Fill the mandatory customer, watchlist, and reason code fields 2. Stop before uploading any file 3. Move toward submission and read the on-screen prompt 4. Click the continue or submit control when the warning appears 5. Observe whether the system allows the user to proceed. |
| Expected Result | The application warns that evidence should be attached and makes the user acknowledge the missing file before proceeding. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, evidence-attachments, low, rbac, security |

### RCE-012 — Verify that a valid PDF evidence file uploads successfully and stays linked to the entry.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Evidence & Attachments |
| Priority | Low |
| Preconditions | The maker has a clean PDF document ready for upload. |
| Test Data | File: onboarding_fp_analysis.pdf Max Size: 10 MB Entry: CSEL-001 |
| Steps | 1. Open the attachment section on the entry form 2. Select a valid PDF file from the local folder 3. Wait for the upload status to finish 4. Confirm that the file name appears in the attachment list 5. Save the record and reopen it once. |
| Expected Result | The PDF is accepted and the attachment remains linked to the entry after reload. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, evidence-attachments, low, export |

### RCE-013 — Confirm that more than one supporting document can be attached to the same entry without losing earlier files.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Evidence & Attachments |
| Priority | Low |
| Preconditions | The entry allows multiple supporting documents to be linked. |
| Test Data | Entry: CSEL-001 Reason Code: Confirmed Different Person Evidence Reference: DOC-2026-1188 |
| Steps | 1. Upload the first evidence file and note its name 2. Add a second document to the same record 3. Review the attachment area to see both items listed 4. Remove one file and then attach it again 5. Save the form and check the final attachment set. |
| Expected Result | The record keeps the selected evidence files and the final list matches the maker's latest changes. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, evidence-attachments, low, reason-evidence |

### RCE-014 — Verify that opening an uploaded evidence file shows the exact file that was attached.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Evidence & Attachments |
| Priority | Low |
| Preconditions | An active or pending entry already contains a supporting attachment. |
| Test Data | File: onboarding_fp_analysis.pdf Max Size: 10 MB Entry: CSEL-001 |
| Steps | 1. Open the entry detail screen 2. Click the evidence file link or preview icon 3. Compare the displayed filename with the stored attachment name 4. Scroll or inspect the preview content 5. Close the file viewer and return to the entry. |
| Expected Result | The correct evidence file opens and the content shown belongs to the selected attachment. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, evidence-attachments, low, export |

### RCE-015 — Check that downloading the evidence file returns an intact copy with the expected filename.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Evidence & Attachments |
| Priority | Low |
| Preconditions | The entry has at least one attached evidence document. |
| Test Data | Entry: CSEL-001 Reason Code: Confirmed Different Person Evidence Reference: DOC-2026-1188 |
| Steps | 1. Open the saved entry and locate the attachment action 2. Download the file to the local device 3. Check the saved filename in the download folder 4. Open the downloaded file and review the first page or contents 5. Compare the file with the original attachment. |
| Expected Result | The downloaded copy is readable, keeps the expected name, and matches the uploaded document. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, evidence-attachments, low, export |

### RCE-016 — Ensure that the system blocks an unsupported evidence file type during upload.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Evidence & Attachments |
| Priority | Low |
| Preconditions | The maker tries to upload a file format that is not allowed by the application. |
| Test Data | File: onboarding_fp_analysis.pdf Max Size: 10 MB Entry: CSEL-001 |
| Steps | 1. Start the file upload flow from the attachment panel 2. Choose a file with an unsupported extension 3. Wait for the upload validation response 4. Read the message shown next to the upload control 5. Attempt to submit the entry without replacing the file. |
| Expected Result | The upload is rejected and no invalid attachment is linked to the record. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, evidence-attachments, low, export |

### RCE-017 — Verify that an oversized evidence file is not accepted by the upload control.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Evidence & Attachments |
| Priority | Low |
| Preconditions | The selected evidence file is larger than the configured upload limit. |
| Test Data | File: onboarding_fp_analysis.pdf Max Size: 10 MB Entry: CSEL-001 |
| Steps | 1. Open the evidence upload section 2. Choose a file that exceeds the allowed size 3. Let the upload attempt complete 4. Read the validation message shown by the system 5. Replace the file with a smaller document and try again. |
| Expected Result | The oversized file is blocked and the user can continue only with a file that meets the size rule. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, evidence-attachments, low, export |

### RCE-018 — Check that filenames containing spaces, symbols, or long text are handled safely during attachment upload.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Evidence & Attachments |
| Priority | Low |
| Preconditions | The maker has a document with a long or special-character filename. |
| Test Data | File: onboarding_fp_analysis.pdf Max Size: 10 MB Entry: CSEL-001 |
| Steps | 1. Select the file from the local machine 2. Upload it into the evidence panel 3. Inspect the filename as shown in the application 4. Save the entry and reopen it after refresh 5. Confirm that the attachment still opens correctly. |
| Expected Result | The filename is stored without breaking the record and the attachment remains usable after reload. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, evidence-attachments, low, export |

### RCE-019 — Confirm that the evidence reference opens the originating case record when the CSEL entry is created from case management.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Evidence & Attachments |
| Priority | Low |
| Preconditions | The entry was initiated from a live case record in the case management module. |
| Test Data | Entry: CSEL-001 Reason Code: Confirmed Different Person Evidence Reference: DOC-2026-1188 |
| Steps | 1. Open the exception entry that was generated from a case 2. Find the evidence reference or source case link on the screen 3. Click the linked case identifier 4. Compare the opened case details with the original source record 5. Return to the CSEL entry and confirm the link still exists. |
| Expected Result | The reference points to the correct case record and opens the expected source case. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, evidence-attachments, low, reason-evidence |

### RCE-020 — Ensure that an invalid or unknown evidence reference cannot be saved on the entry.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Evidence & Attachments |
| Priority | Low |
| Preconditions | The maker tries to paste a case reference that does not exist in the system. |
| Test Data | Entry: CSEL-001 Reason Code: Confirmed Different Person Evidence Reference: DOC-2026-1188 |
| Steps | 1. Open the evidence reference field or link control 2. Enter a reference value that is not found in case management 3. Try to move to the next step or submit the form 4. Review the validation message and field state 5. Recheck the draft record after the failed save. |
| Expected Result | The system rejects the invalid reference and keeps the record from being saved with a broken link. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, evidence-attachments, low, reason-evidence |

### RCE-021 — Verify that an archived or deleted source case cannot be used as the evidence reference.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Evidence & Attachments |
| Priority | Low |
| Preconditions | A case that was once linked to evidence is no longer active in case management. |
| Test Data | Entry: CSEL-001 Reason Code: Confirmed Different Person Evidence Reference: DOC-2026-1188 |
| Steps | 1. Open the exception form that still points to the source case 2. Try to relink the deleted or archived case 3. Refresh the form to make sure the change was captured 4. Attempt to submit the entry again 5. Inspect the warning shown by the system. |
| Expected Result | The archived or deleted case is not accepted as a valid evidence reference. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, evidence-attachments, low, reason-evidence |

### RCE-022 — Check that the attachment metadata records who uploaded the file and when it was added.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Evidence & Attachments |
| Priority | Low |
| Preconditions | A valid evidence file has been uploaded to the entry. |
| Test Data | File: onboarding_fp_analysis.pdf Max Size: 10 MB Entry: CSEL-001 |
| Steps | 1. Open the attachment details panel 2. Note the uploader name shown by the system 3. Check the upload timestamp and file label 4. Refresh the page and open the same details again 5. Confirm that the metadata still matches the original upload. |
| Expected Result | The file metadata is captured correctly and remains visible after refresh. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, evidence-attachments, low, export |

### RCE-023 — Verify that uploading the same evidence file twice does not corrupt the attachment list.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Evidence & Attachments |
| Priority | Low |
| Preconditions | The maker has one document ready and the same file can be selected again. |
| Test Data | File: onboarding_fp_analysis.pdf Max Size: 10 MB Entry: CSEL-001 |
| Steps | 1. Upload the first copy of the evidence file 2. Select the same file again from the file picker 3. Review how the application handles the duplicate 4. Save the draft or submission 5. Reopen the entry and inspect the attachment list. |
| Expected Result | The application handles the duplicate safely and the attachment area remains usable. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, evidence-attachments, low, export |

### RCE-024 — Confirm that evidence stays available after page refresh and user sign-out/sign-in.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Evidence & Attachments |
| Priority | Low |
| Preconditions | An entry with uploaded evidence already exists in the system. |
| Test Data | Entry: CSEL-001 Reason Code: Confirmed Different Person Evidence Reference: DOC-2026-1188 |
| Steps | 1. Open the saved entry and verify the attachment is visible 2. Refresh the browser page 3. Sign out of the application 4. Sign back in with the same role 5. Reopen the entry and confirm the attachment is still linked. |
| Expected Result | The evidence reference remains available after session changes and page reloads. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, evidence-attachments, low, reason-evidence |

### RCE-025 — Verify that the final approved entry keeps the same reason code and evidence reference in the history view.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Reason Code Standardization |
| Priority | Low |
| Preconditions | The entry has already passed the approval flow and is active. |
| Test Data | Reason Code: Confirmed Different Person Alternate: PEP — Approved with EDD Minimum Reason Detail: 50 characters |
| Steps | 1. Open the approved entry 2. Check the current reason code and attached evidence 3. Open the entry history or audit summary panel 4. Compare the historical values with the current record 5. Export or refresh the view if needed to confirm stability. |
| Expected Result | The history view shows the same reason code and evidence reference that belong to the approved record. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, reason-code-standardization, low, maker-checker |

### RCE-026 — Ensure that replacing a draft attachment updates the final linked file instead of keeping an outdated document.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Evidence & Attachments |
| Priority | Low |
| Preconditions | The entry is still in draft or pending state and the maker can replace the file. |
| Test Data | File: onboarding_fp_analysis.pdf Max Size: 10 MB Entry: CSEL-001 |
| Steps | 1. Upload an initial evidence document 2. Remove or replace that attachment before final submission 3. Check that the old file no longer appears in the list 4. Attach the new document and save again 5. Reopen the entry and confirm the final file is the replacement version. |
| Expected Result | Only the latest evidence file remains linked to the record and the outdated attachment is not retained. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, evidence-attachments, low, export |

### RCE-027 — Verify Regulatory / Law Enforcement Confirmation reason code accepts TTL per regulatory instruction.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Reason Code Standardization |
| Priority | Medium |
| Preconditions | Maker creating entry with regulatory confirmation reason code. |
| Test Data | Reason Code: Confirmed Different Person Alternate: PEP — Approved with EDD Minimum Reason Detail: 50 characters |
| Steps | 1. Select Regulatory / Law Enforcement Confirmation 2. Enter regulatory instruction reference in reason detail 3. Set TTL per instruction date 4. Submit for approval 5. Verify stored TTL matches instruction. |
| Expected Result | TTL aligns with regulatory instruction and reason code is stored correctly. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, reason-code-standardization, medium, maker-checker |

### RCE-028 — Verify five-point regulatory examination evidence set is complete on approved entry.

| Field | Value |
| --- | --- |
| Module | Reason Codes & Evidence Standards |
| Sub-Module | Reason Code Standardization |
| Priority | High |
| Preconditions | Approved entry with full evidence package exists. |
| Test Data | Entry: CSEL-001 Reason Code: Confirmed Different Person Evidence Reference: DOC-2026-1188 |
| Steps | 1. Open approved entry 2. Verify original alert link 3. Verify reason code and detail 4. Verify evidence reference and attachment 5. Verify maker/checker identities and dates; review distinguishing attributes. |
| Expected Result | All five regulatory evidence points are present and traceable on the entry. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | reason-codes-evidence-standards, reason-code-standardization, high, maker-checker |
