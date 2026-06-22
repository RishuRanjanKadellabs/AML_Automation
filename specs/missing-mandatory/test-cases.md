# Missing Mandatory — Detailed Test Cases (288)

### MM-TC-001 — Validate that Missing Mandatory Data Template module loads successfully within persistent AML application shell and renders all primary structural components without layout break, dependency failure, or route initialization issues.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Missing Mandatory Data Template → App Shell |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Module must load successfully within AML shell with stable top bar, sidebar, template list, and detail panel without broken UI, failed dependencies, or stale initialization. |

### MM-TC-002 — Validate persistent top bar behavior and dynamic active view label updates across Template View, Create Template View, and KYC Gap Report.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | App Shell → Top Bar |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Top bar must remain persistent and correctly display active view labels without stale navigation state. |

### MM-TC-003 — Validate sidebar hierarchy under Missing Mandatory module and child-level navigation rendering.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Sidebar Navigation |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Sidebar should properly display Missing Mandatory hierarchy with correct child routes and navigation. |

### MM-TC-004 — Validate navigation between Missing Mandatory Data Template and KYC Gap Report without route corruption or misrouting.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Sidebar → Route Navigation |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Correct module routes should open without navigation corruption. |

### MM-TC-005 — Validate that switching between Template View and KYC Gap Report does not reset filters, pagination, or selected view context.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Sidebar → State Persistence |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Cross-view switching should preserve operational state without unexpected reset. |

### MM-TC-006 — Validate conditional visibility of + Create Template button based on active view.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Top Bar → Create Template Button |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Create Template button should render only in authorized expected views. |

### MM-TC-007 — Validate rendering of Template List Panel and customer-type grouping logic.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Template List Panel |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Template List Panel should group templates accurately by customer type. |

### MM-TC-008 — Validate dynamic template count badge accuracy after template creation or addition.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Template List Panel → Count Badge |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Template count badge should remain accurate and dynamically update after template changes. |

### MM-TC-009 — Validate template card metadata rendering including name, KYC level, customer type, and version.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Template Cards |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Template cards should display correct AML metadata without mismatch. |

### MM-TC-010 — Validate unauthorized access restriction for users without Missing Mandatory Data Template permission.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Initial Access Control (RBAC) |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Unauthorized users must be blocked from UI-level and API-level access to Missing Mandatory Data Template. |

### MM-TC-011 — Validate that selecting a template card loads the correct template detail in the right panel without stale or mismatched data rendering.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Template Cards → Selection |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Selected template card must load exact corresponding template detail with accurate metadata and no stale content. |

### MM-TC-012 — Validate active template card visual state and selection persistence during intra-module interaction.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Template Cards → Active State |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Only currently selected template card should remain active with correct visual persistence. |

### MM-TC-013 — Validate template detail header metadata sync with selected template.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Template Detail Header |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Header must always remain synchronized with selected template metadata. |

### MM-TC-014 — Validate Add Field action availability and correct modal trigger behavior.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Template Detail Header → Add Field Button |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Add Field must trigger correct field creation workflow. |

### MM-TC-015 — Validate Save Changes action availability and correct persistence trigger initiation.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Template Detail Header → Save Changes |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Save Changes must persist valid updates without duplicate or broken requests. |

### MM-TC-016 — Validate tab visibility logic for Individual templates.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Tab Visibility → Individual Template |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Individual templates must display only permitted tab structure. |

### MM-TC-017 — Validate tab visibility logic for Corporate templates.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Tab Visibility → Corporate Template |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Corporate templates must display only correct corporate-specific tab structure. |

### MM-TC-018 — Validate default tab loading logic based on template type.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Tab Behavior → Default Tab Selection |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Default tab must follow template-type branching logic. |

### MM-TC-019 — Validate global template search using exact and partial keyword matching.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Template Search |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Search must filter templates accurately and restore list after clear. |

### MM-TC-020 — Validate search persistence while switching between template interactions.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Template Search → State Retention |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Search state should persist during intra-template navigation. |

### MM-TC-021 — Validate manual refresh updates template list and detail data without stale cache issues.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Refresh → Template Data Sync |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Refresh must fetch latest valid template data and replace stale cache. |

### MM-TC-022 — Validate refresh does not corrupt selected template or navigation state.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Refresh → State Integrity |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Refresh should preserve user context unless hard reload behavior is defined. |

### MM-TC-023 — Validate prevention of stale template detail rendering after switching templates quickly.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Stale Data Handling |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must prevent stale or mixed template-detail rendering. |

### MM-TC-024 — Validate module behavior when user session expires while working in Missing Mandatory Data Template.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Session Control → Session Expiry |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Expired sessions must block actions and enforce secure re-authentication. |

### MM-TC-025 — Validate secure behavior when session expires during unsaved template edit.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Session Control → Mid-Edit Expiry |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must prevent unauthorized save after session expiry. |

### MM-TC-026 — Validate Add Field modal opens successfully from Template Detail Header and loads all required field creation controls.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Field → Modal Launch |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Add Field modal must load successfully with complete field creation controls. |

### MM-TC-027 — Validate mandatory input validation during new field creation.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Field → Mandatory Input Validation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must prevent field creation when mandatory configuration inputs are missing. |

### MM-TC-028 — Validate successful creation of a new valid custom field within correct template section.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Field → Valid Field Creation |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | New valid field must be added successfully under selected section and persist correctly. |

### MM-TC-029 — Validate duplicate field name restriction within same template scope.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Field → Duplicate Field Prevention |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must prevent duplicate field creation within same template context. |

### MM-TC-030 — Validate field creation rejection when mapped to unsupported/invalid section.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Field → Invalid Section Mapping |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Field must not be created under invalid template section. |

### MM-TC-031 — Validate field-name validation for restricted unsupported characters.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Field → Special Character Validation |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must validate field naming rules correctly. |

### MM-TC-032 — Validate field name length boundary handling.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Field → Max Length Boundary |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must enforce field-name length boundaries. |

### MM-TC-033 — Validate custom field requirement assignment (Mandatory / Optional).

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Field Configuration → Requirement Type |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Requirement type must persist accurately. |

### MM-TC-034 — Validate requirement badge updates immediately after requirement change before final save.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Field Configuration → Immediate UI Sync |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | UI must immediately reflect changed requirement state. |

### MM-TC-035 — Validate modified field configuration persists after save and refresh.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Field Configuration → Persistence After Save |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Field configuration must persist correctly. |

### MM-TC-036 — Validate locked AML mandatory fields cannot be edited.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Locked Fields → Edit Restriction |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Locked fields must remain immutable. |

### MM-TC-037 — Validate locked field inclusion checkbox is disabled and non-editable.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Locked Fields → Checkbox Restriction |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Locked field checkbox must remain disabled. |

### MM-TC-038 — Validate locked field requirement dropdown cannot be changed.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Locked Fields → Dropdown Restriction |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Locked AML fields must block requirement edits. |

### MM-TC-039 — Validate only supported requirement options are available.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Requirement Dropdown → Allowed Values |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Requirement dropdown must only show allowed business values. |

### MM-TC-040 — Validate legacy Conditional fields are normalized to Optional in UI configuration.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Requirement Dropdown → Conditional Normalization |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Legacy Conditional fields must be normalized to Optional per business rule. |

### MM-TC-041 — Validate editable field inclusion checkbox toggle behavior.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Field Inclusion → Checkbox State |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Field inclusion state must update and persist correctly. |

### MM-TC-042 — Validate disabled/excluded field remains excluded after reload.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Field Inclusion → Disabled State Persistence |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Field exclusion state must persist accurately. |

### MM-TC-043 — Validate unsaved configuration changes trigger dirty-state warning before navigation.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Field Configuration → Unsaved State Warning |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must warn before losing unsaved AML template updates. |

### MM-TC-044 — Validate cancel/exit without save does not persist temporary field changes.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Field Configuration → Cancel Without Save |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Unsaved field changes must not persist. |

### MM-TC-045 — Validate field configuration update is traceable through save operation.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Field Configuration → Audit Integrity |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Field updates must remain audit-safe and traceable. |

### MM-TC-046 — Validate Individual template loads correct Individual-specific AML field structure.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Individual Template → Default Load |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Individual template must load only Individual AML structure. |

### MM-TC-047 — Validate Identity Documents group renders correctly with mapped AML identity fields.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Individual CIP → Identity Documents Group |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Identity Documents group must render correct AML identity fields. |

### MM-TC-048 — Validate Personal Details section mapping.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Individual CIP → Personal Details Group |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Personal Details must show correct mapped customer identity fields. |

### MM-TC-049 — Validate address proof AML validation field group.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Individual CIP → Address Proof Group |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Address Proof section must align with AML CIP requirement. |

### MM-TC-050 — Validate contact-information field rendering and configuration.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Individual CIP → Contact Information Group |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Contact Information fields must render correctly. |

### MM-TC-051 — Validate financial profile AML field group behavior.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Individual CIP → Financial Profile Group |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Financial Profile section must remain aligned with AML onboarding requirements. |

### MM-TC-052 — Validate locked mandatory CIP fields remain immutable.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Individual CIP → Mandatory Locked Fields |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Locked Individual AML mandatory fields must remain immutable. |

### MM-TC-053 — Validate mandatory but editable fields can be updated.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Individual CIP → Editable Mandatory Fields |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Editable mandatory fields must support valid updates. |

### MM-TC-054 — Validate optional CIP field behavior.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Individual CIP → Optional Field Handling |
| Priority | Optional fields must behave per AML template configuration. |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result |  |

### MM-TC-055 — Validate displayed Individual CIP field count matches configured field records.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Individual CIP → Field Count Integrity |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Field count must match actual configured AML fields. |

### MM-TC-056 — Validate CDD section loads for Individual templates.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | CDD Fields → Section Load |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | CDD tab must load correctly. |

### MM-TC-057 — Validate mandatory CDD AML fields.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | CDD Fields → Mandatory AML Fields |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Mandatory CDD AML controls must remain correctly configured. |

### MM-TC-058 — Validate legacy conditional CDD fields normalize to Optional.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | CDD Fields → Conditional-to-Optional Normalization |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Legacy conditional CDD fields must normalize to Optional. |

### MM-TC-059 — Validate fields applicable to Individual + Corporate remain consistently mapped.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | CDD Fields → Shared Applicability |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Shared CDD controls must remain consistent. |

### MM-TC-060 — Validate AML metadata/tag display remains accurate.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | CDD Fields → Field Tag Integrity |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Field tags must reflect business metadata correctly. |

### MM-TC-061 — Validate EDD section loads correctly for Individual template.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | EDD Fields → Section Load |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | EDD tab must load correctly. |

### MM-TC-062 — Validate mandatory EDD fields.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | EDD Fields → Mandatory EDD Controls |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Mandatory EDD controls must align with AML enhanced due diligence flow. |

### MM-TC-063 — Validate optionalized EDD conditional field logic.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | EDD Fields → Conditional Normalization |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Legacy EDD conditional fields must normalize to Optional. |

### MM-TC-064 — Validate EDD field count increases for enhanced-risk Individual templates.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | EDD Fields → Template-Specific Extra Fields |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | High-risk Individual templates must load additional EDD AML controls. |

### MM-TC-065 — Validate PEP-linked EDD controls remain correctly mapped.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | EDD Fields → PEP Workflow Alignment |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | PEP-linked EDD controls must align with AML high-risk workflow. |

### MM-TC-066 — Validate Technical IDs tab availability in Individual templates.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Technical IDs → Tab Visibility |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Technical IDs tab must remain visible. |

### MM-TC-067 — Validate all Technical ID system fields are read-only.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Technical IDs → Locked System Fields |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System-generated Technical ID fields must remain immutable. |

### MM-TC-068 — Validate system fields do not expose requirement configuration dropdown.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Technical IDs → No Requirement Dropdown |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System fields must not expose business requirement edits. |

### MM-TC-069 — Validate system fields show correct system-only state.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Technical IDs → System Badge Integrity |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System fields must visually reflect read-only system ownership. |

### MM-TC-070 — Validate Technical ID field count matches backend/system configuration.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Technical IDs → Field Count Validation |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Technical ID field count must remain accurate and synchronized. |

### MM-TC-071 — Validate Corporate template loads correct corporate-specific AML structure.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate Template → Default Load |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Corporate template must load only corporate AML structure. |

### MM-TC-072 — Validate Corporate CIP tab is visible only for Corporate templates.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate CIP → Tab Visibility |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Corporate CIP tab must strictly follow template-type logic. |

### MM-TC-073 — Validate Entity Identification section renders correct legal-entity AML fields.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate CIP → Entity Identification Group |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Entity Identification must show correct corporate onboarding AML fields. |

### MM-TC-074 — Validate locked legal-entity mandatory fields remain immutable.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate CIP → Mandatory Locked Entity Fields |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Locked corporate AML fields must remain non-editable. |

### MM-TC-075 — Validate Ownership and Control section mapping.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate CIP → Ownership & Control Group |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Ownership and Control fields must align with AML entity due-diligence flow. |

### MM-TC-076 — Validate UBO declaration remains mandatory and immutable where business-locked.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate CIP → UBO Declaration Field |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | UBO declaration must remain compliant with AML ownership rules. |

### MM-TC-077 — Validate editable mandatory corporate fields support valid updates.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate CIP → Editable Mandatory Corporate Fields |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Editable mandatory corporate AML fields must persist valid updates. |

### MM-TC-078 — Validate legacy conditional Corporate CIP fields normalize to Optional.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate CIP → Conditional-to-Optional Normalization |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Legacy conditional corporate fields must normalize to Optional. |

### MM-TC-079 — Validate Financial Standing section mapping.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate CIP → Financial Standing Group |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Financial Standing fields must support entity AML verification. |

### MM-TC-080 — Validate Corporate CIP field count matches configured entity fields.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate CIP → Field Count Integrity |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Corporate CIP field count must remain synchronized with configuration. |

### MM-TC-081 — Validate shared CDD fields remain consistent between Corporate and Individual templates.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate CDD → Shared AML Controls |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Shared CDD AML logic must remain cross-template consistent. |

### MM-TC-082 — Validate corporate CDD fields support entity-level risk profiling.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate CDD → Entity Risk Data Validation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Corporate CDD controls must align with legal-entity due diligence. |

### MM-TC-083 — Validate CDD metadata tags remain correct.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate CDD → Tag Integrity |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | CDD tags must reflect accurate business metadata. |

### MM-TC-084 — Validate EDD section loads correctly for Corporate templates.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate EDD → Section Load |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Corporate EDD must load correctly. |

### MM-TC-085 — Validate mandatory corporate EDD controls.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate EDD → Mandatory EDD Controls |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Mandatory EDD controls must align with AML enhanced due diligence. |

### MM-TC-086 — Validate corporate site visit / premises review field behavior.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate EDD → Site/Premises Validation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Site/Premises validation must align with corporate EDD workflow. |

### MM-TC-087 — Validate additional EDD AML controls for Trust/Foundation high-risk templates.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate EDD → Trust/Foundation High-Risk Fields |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | High-risk Corporate templates must load additional EDD AML controls. |

### MM-TC-088 — Validate PEP/high-risk linked EDD fields remain correctly mapped for entity templates.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate EDD → PEP / High-Risk Alignment |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Corporate EDD controls must align with enhanced AML risk workflow. |

### MM-TC-089 — Validate Technical IDs tab remains visible in Corporate templates.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate Technical IDs → Tab Visibility |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Technical IDs must remain available in Corporate templates. |

### MM-TC-090 — Validate Technical ID fields remain non-editable in Corporate templates.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate Technical IDs → Immutable System Fields |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System-generated corporate Technical ID fields must remain immutable. |

### MM-TC-091 — Validate Technical IDs visually reflect system-owned behavior.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate Technical IDs → System-Owned State |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System-owned Technical ID fields must clearly remain read-only. |

### MM-TC-092 — Validate Technical ID count consistency for Corporate templates.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate Technical IDs → Field Count Validation |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Corporate Technical ID count must remain synchronized. |

### MM-TC-093 — Validate Corporate template edits do not impact Individual template field configuration.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate Template → Cross-Template Isolation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Corporate template changes must remain isolated from Individual templates. |

### MM-TC-094 — Validate corporate template metadata (type, level, version) syncs correctly in header.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate Template → Entity Metadata Sync |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Corporate metadata must remain synchronized across module views. |

### MM-TC-095 — Validate end-to-end corporate field configuration remains aligned with AML entity onboarding workflow.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Corporate Template → Entity Workflow Integrity |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Corporate template flow must remain fully aligned with entity AML/KYC workflow. |

### MM-TC-096 — Validate Create New Template screen opens correctly from top-bar action.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Create New Template → Launch Flow |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Create New Template view must open correctly without layout or route issues. |

### MM-TC-097 — Validate required metadata validation during template creation.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Create New Template → Mandatory Input Validation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must prevent template creation when mandatory metadata is missing. |

### MM-TC-098 — Validate successful creation of new valid AML template.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Create New Template → Valid Template Creation |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | New valid template must be created and available in Template List. |

### MM-TC-099 — Validate duplicate template name prevention.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Create New Template → Duplicate Name Restriction |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must block duplicate template creation. |

### MM-TC-100 — Validate template is mapped to correct customer type (Individual/Corporate).

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Create New Template → Customer Type Mapping |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Templates must be grouped under correct customer type. |

### MM-TC-101 — Validate KYC level assignment (SDD/CDD/EDD) persists correctly.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Create New Template → KYC Level Mapping |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | KYC level must persist accurately across views. |

### MM-TC-102 — Validate unsupported/invalid metadata values are rejected.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Create New Template → Invalid Metadata Handling |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must reject invalid template metadata. |

### MM-TC-103 — Validate canceling template creation does not persist draft data.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Create New Template → Cancel Flow |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Canceled templates must not persist. |

### MM-TC-104 — Validate created template remains available after page refresh/reload.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Create New Template → Refresh Persistence |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Newly created template must persist after refresh. |

### MM-TC-105 — Validate clone workflow can be initiated from existing template.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Clone Flow → Launch Clone Action |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Clone flow must initiate successfully. |

### MM-TC-106 — Validate cloned template copies source AML field structure.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Clone Flow → Exact Field Copy |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Cloned template must preserve source field configuration accurately. |

### MM-TC-107 — Validate KYC Gap Score configuration copies during clone.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Clone Flow → Score Configuration Copy |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Clone must preserve scoring configuration. |

### MM-TC-108 — Validate cloned template starts with independent initial versioning.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Clone Flow → Version Reset |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Clone must initialize as independent template version. |

### MM-TC-109 — Validate source template edits do not affect cloned template.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Clone Flow → Ownership Independence |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Clone must remain isolated from source changes. |

### MM-TC-110 — Validate invalid duplicate clone name handling.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Clone Flow → Duplicate Clone Naming Restriction |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must reject duplicate clone names. |

### MM-TC-111 — Validate version increments after valid template configuration update.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Versioning → Increment on Save |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Version must increment after valid structural update. |

### MM-TC-112 — Validate prior saved version does not mutate after new version update.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Versioning → Historical Integrity |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Historical versions must remain immutable. |

### MM-TC-113 — Validate updated version displays consistently in list and detail header.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Versioning → Header/List Sync |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Version metadata must stay synchronized. |

### MM-TC-114 — Validate Save Changes persists valid AML template modifications.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Save Changes → Valid Persistence |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Valid template updates must persist successfully. |

### MM-TC-115 — Validate invalid template configuration is rejected during save.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Save Changes → Validation Failure |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must reject invalid template persistence. |

### MM-TC-116 — Validate duplicate save requests are prevented on repeated user action.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Save Changes → Double Click Prevention |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must prevent duplicate persistence requests. |

### MM-TC-117 — Validate dirty-state warning before leaving unsaved template changes.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Dirty State → Unsaved Navigation Warning |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must warn before unsaved AML config loss. |

### MM-TC-118 — Validate discarded changes are not persisted.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Dirty State → Discard Unsaved Changes |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Discarded changes must not persist. |

### MM-TC-119 — Validate conflict handling when same template is updated by another session/user.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Concurrency → Parallel Edit Conflict |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must detect and handle parallel edit conflicts. |

### MM-TC-120 — Validate stale configuration save is blocked after source template update.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Concurrency → Stale Save Prevention |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must prevent stale-data overwrite. |

### MM-TC-121 — Validate KYC Gap Score Configuration tab is available on every KYC template.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Score Configuration → Tab Availability |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | KYC Gap Score Configuration tab must be available consistently across all templates. |

### MM-TC-122 — Validate four color-coded score category boxes render correctly with exact labels and descriptions.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Score Configuration → Category Box Rendering |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must display four correct score category boxes with exact risk descriptions. |

### MM-TC-124 — Validate default Low risk score range is configured correctly.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Range → Low Range Default Validation |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Low risk category must default to 0–25. |

### MM-TC-125 — Validate default Medium risk score range is configured correctly.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Range → Medium Range Default Validation |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Medium risk category must default to 26–50. |

### MM-TC-126 — Validate default High risk score range is configured correctly.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Range → High Range Default Validation |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | High risk category must default to 51–75. |

### MM-TC-127 — Validate default Critical risk score range is configured correctly.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Range → Critical Range Default Validation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Critical risk category must default to 76–100. |

### MM-TC-128 — Validate score ranges cannot overlap between risk categories.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Range → Overlap Validation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must reject overlapping score ranges and prevent persistence. |

### MM-TC-129 — Validate all score values from 0–100 are covered continuously without gaps.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Range → Full Coverage Validation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must reject score configurations that leave uncovered gaps between 0–100. |

### MM-TC-130 — Validate Min value must be less than or equal to Max for every category.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Range → Min-Max Validation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must reject score bands where Min > Max. |

### MM-TC-131 — Validate duplicate score-band assignment is rejected.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Range → Duplicate Range Validation |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must reject duplicate score-band mappings. |

### MM-TC-132 — Validate lower boundary score handling.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Range → Zero Boundary Handling |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must correctly support lower edge score boundary. |

### MM-TC-133 — Validate upper score limit handling.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Range → Maximum Boundary Handling |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must correctly support upper score boundary. |

### MM-TC-134 — Validate invalid score values outside supported range are rejected.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Range → Out-of-Range Validation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must reject unsupported scoring values. |

### MM-TC-135 — Validate unsupported decimal/non-integer score handling.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Range → Decimal/Non-Integer Handling |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must enforce valid score input format. |

### MM-TC-136 — Validate Save Ranges triggers full validation before persisting score configuration.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Score → Save Ranges Validation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Save Ranges must validate complete score logic before persistence. |

### MM-TC-137 — Validate invalid score configuration is blocked during Save Ranges action.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Score → Invalid Save Handling |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must prevent invalid score-range persistence. |

### MM-TC-138 — Validate score-card UI updates immediately after edit before final save.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Score → Immediate UI Sync |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | UI should reflect edited scoring state before persistence. |

### MM-TC-139 — Validate saved score bands persist after refresh/reload.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Score → Refresh Persistence |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Score configuration must remain persistent after reload. |

### MM-TC-140 — Validate score updates remain isolated to selected template.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Score → Template Isolation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Score configuration must remain template-specific. |

### MM-TC-141 — Validate score recalculation trigger after field requirement changes.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation Trigger → Field Requirement Update |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Field requirement updates must trigger score recalculation logic. |

### MM-TC-142 — Validate recalculation after field enable/disable.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation Trigger → Field Inclusion Change |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Score engine must recalculate after field inclusion updates. |

### MM-TC-143 — Validate cloned templates preserve scoring logic.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation Trigger → Template Clone Consistency |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Clone must preserve scoring logic accurately. |

### MM-TC-144 — Validate computed KYC Gap Score maps to correct risk label based on configured ranges.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Mapping → Exact Risk Label Mapping |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must assign exact risk labels based on configured score bands. |

### MM-TC-145 — Validate exact boundary values map correctly without off-by-one errors.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Mapping → Boundary Edge Validation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Boundary score values must map to correct adjacent risk categories without ambiguity. |

### MM-TC-146 — Validate KYC Gap Report screen loads successfully from Missing Mandatory navigation.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → View Load |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | KYC Gap Report must load correctly with stable layout and data. |

### MM-TC-147 — Validate KPI summary cards render correctly.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → KPI Card Rendering |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | KPI cards must render accurately. |

### MM-TC-148 — Validate total customer/report count matches backend data.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Total Records Accuracy |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Total report count must remain synchronized. |

### MM-TC-149 — Validate gap report table loads all required AML columns.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Table Load |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Table must display all required AML gap-report columns. |

### MM-TC-150 — Validate empty-state behavior when no report records exist.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Empty State |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Report must handle zero-data state gracefully. |

### MM-TC-151 — Validate exact search behavior.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Search Exact Match |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Search must return exact matching AML records. |

### MM-TC-152 — Validate partial keyword matching.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Partial Search |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Partial search should filter correctly. |

### MM-TC-153 — Validate no-result search behavior.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Invalid Search |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must safely handle no-match searches. |

### MM-TC-154 — Validate filtering by Individual / Corporate customer type.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Customer Type Filter |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Customer type filter must return correct records. |

### MM-TC-155 — Validate filtering by KYC template.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Template Filter |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Template filter must isolate correct report records. |

### MM-TC-156 — Validate filtering by risk priority.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Priority Filter |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Priority filter must map to correct AML scoring risk. |

### MM-TC-157 — Validate score-based filtering.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Score Range Filter |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Score filter must isolate valid score ranges. |

### MM-TC-158 — Validate multiple filter combinations.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Combined Filters |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Combined filters must return accurate intersected dataset. |

### MM-TC-159 — Validate clearing filters resets full dataset.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Clear Filters |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Clear action must restore original report state. |

### MM-TC-160 — Validate filter state retention during table interaction.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Filter Persistence |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Report must preserve filter state. |

### MM-TC-161 — Validate score sorting behavior.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Sort by Score |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Score sorting must remain accurate. |

### MM-TC-162 — Validate risk-priority sorting.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Sort by Priority |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Priority sorting must remain logically consistent. |

### MM-TC-163 — Validate page navigation.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Pagination Next/Previous |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Pagination must function without row corruption. |

### MM-TC-164 — Validate records-per-page behavior.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Page Size Handling |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Page-size changes must reflect correctly. |

### MM-TC-165 — Validate record detail modal opens from selected gap-report row.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Row Detail Modal |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Gap detail modal must load correct customer-level AML details. |

### MM-TC-166 — Validate modal displays correct missing-field details.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Missing Fields Breakdown |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Missing-field breakdown must reflect actual KYC gap computation. |

### MM-TC-167 — Validate modal score breakdown consistency.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Score Breakdown |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Modal score details must remain calculation-consistent. |

### MM-TC-168 — Validate manual refresh updates latest report data.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Refresh Data Sync |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Refresh must synchronize latest AML report state. |

### MM-TC-169 — Validate pagination/filter/search state retention during intra-report navigation.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → State Persistence |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Report should preserve working state during internal navigation. |

### MM-TC-170 — Validate template configuration changes reflect correctly in KYC Gap Report.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Report → Template-to-Report Sync |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | KYC Gap Report must remain synchronized with latest template logic. |

### MM-TC-171 — Validate KYC Gap Score calculation engine initializes correctly when template-linked customer records load.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation Engine → Default Calculation Load |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Score engine must initialize successfully with correct linked scoring logic. |

### MM-TC-172 — Validate missing Mandatory fields contribute +3 score weight.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Missing Fields Logic → Mandatory Weight |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Missing Mandatory fields must add +3 score weight. |

### MM-TC-173 — Validate missing Optional fields contribute +1 score weight.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Missing Fields Logic → Optional Weight |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Missing Optional fields must add +1 score weight. |

### MM-TC-174 — Validate total score aggregation across Mandatory + Optional fields.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation → Mixed Weight Aggregation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Final score must equal aggregated configured field weights. |

### MM-TC-175 — Validate customer with no missing fields returns zero gap score.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation → Zero Missing Fields |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Fully completed KYC records must return zero gap score. |

### MM-TC-176 — Validate score engine handles maximum missing-field combinations.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation → Maximum Score Handling |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | System must compute maximum possible KYC Gap Score correctly. |

### MM-TC-177 — Validate locked mandatory AML fields are included in scoring if missing.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Missing Fields Logic → Locked Field Inclusion |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Locked required AML fields must still impact score computation. |

### MM-TC-178 — Validate disabled/excluded fields do not impact score calculation.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Missing Fields Logic → Excluded Field Handling |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Excluded fields must not contribute to KYC Gap Score. |

### MM-TC-179 — Validate score recalculates after field requirement type changes.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation → Field Requirement Change Impact |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Requirement changes must immediately affect score logic. |

### MM-TC-180 — Validate score recalculates after field removal/exclusion.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation → Deleted/Removed Field Impact |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Removed AML fields must no longer affect scoring. |

### MM-TC-181 — Validate score is calculated using assigned customer template only.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation → Template-Specific Mapping |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Scoring must use exact mapped template logic. |

### MM-TC-182 — Validate score logic from one template does not affect unrelated templates.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Cross-template Isolation → No Score Leakage |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Template scoring logic must remain isolated. |

### MM-TC-183 — Validate scoring logic respects customer type template separation.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation → Individual vs Corporate Mapping |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Scoring must follow correct customer-type template branch. |

### MM-TC-184 — Validate all missing fields displayed in report are true missing fields.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Missing Fields Breakdown → Accurate Field Mapping |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Missing-field breakdown must match actual incomplete KYC data. |

### MM-TC-185 — Validate completed fields are not incorrectly counted as missing.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Missing Fields Breakdown → No False Positive |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must not create false-positive AML gaps. |

### MM-TC-186 — Validate same missing field is not scored multiple times.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Missing Fields Breakdown → No Duplicate Counting |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | One field must contribute score only once. |

### MM-TC-187 — Validate shared AML fields across sections are counted correctly.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation → Shared CDD/EDD Field Handling |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Shared AML fields must follow correct scoring rules. |

### MM-TC-188 — Validate computed score maps to correct KYC risk band.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation → Risk Category Mapping |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Computed score must map to configured risk category. |

### MM-TC-189 — Validate exact threshold scores map consistently.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation → Boundary Score Precision |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Boundary score handling must remain precise. |

### MM-TC-190 — Validate customer scores recalculate after template changes.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation → Recalculation After Template Update |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Score engine must recalculate after template changes. |

### MM-TC-191 — Validate recalculated scores persist after refresh.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation → Refresh Synchronization |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Recalculated AML scores must persist. |

### MM-TC-192 — Validate scoring engine safely handles null or partial customer data.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation → Null/Partial Data Handling |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | System must safely process incomplete AML customer records. |

### MM-TC-193 — Validate safe handling when customer references deleted/inactive template.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation → Orphan Template Handling |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | System must safely handle orphan template dependencies. |

### MM-TC-194 — Validate visible score breakdown aligns with saved AML scoring logic.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation → Audit Consistency |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Displayed score breakdown must remain audit-consistent. |

### MM-TC-195 — Validate complete KYC Gap Score lifecycle from field config → calculation → report → risk mapping.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Calculation → End-to-End AML Integrity |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Entire scoring chain must remain accurate, synchronized, and AML-compliant. |

### MM-TC-196 — Validate authorized AML roles can access Missing Mandatory module.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | RBAC → View Access (Authorized Role) |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Authorized users must access module successfully. |

### MM-TC-197 — Validate restricted roles cannot access Missing Mandatory module.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | RBAC → View Restriction (Unauthorized Role) |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Unauthorized roles must not access module. |

### MM-TC-198 — Validate only permitted roles can create templates.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | RBAC → Create Template Permission |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Template creation must follow RBAC. |

### MM-TC-199 — Validate template edit actions are restricted by role.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | RBAC → Edit Template Permission |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Edit capability must strictly follow permission model. |

### MM-TC-200 — Validate unauthorized users cannot persist template changes.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | RBAC → Save Changes Permission |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Unauthorized users must not persist AML config changes. |

### MM-TC-201 — Validate template cloning is restricted by role.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | RBAC → Clone Permission |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Clone operation must respect RBAC policy. |

### MM-TC-202 — Validate report access follows role permissions.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | RBAC → KYC Gap Report Access |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Report visibility must follow access matrix. |

### MM-TC-203 — Validate unauthorized controls remain hidden from UI.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | RBAC → Hidden Action Controls |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Unauthorized UI actions must remain hidden. |

### MM-TC-204 — Validate direct URL access is blocked for restricted roles.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | RBAC → Direct URL Restriction |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Direct URL bypass must not grant access. |

### MM-TC-205 — Validate backend API blocks unauthorized config operations.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | RBAC → API-Level Enforcement |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Backend must enforce permission restrictions independent of UI. |

### MM-TC-206 — Validate permission in Customer 360 or other AML modules does not implicitly grant Missing Mandatory access.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | RBAC → Cross-Module Isolation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Permissions must remain module-specific. |

### MM-TC-207 — Validate session timeout after inactivity while in module.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Session → Idle Timeout Handling |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Expired sessions must block continued operations. |

### MM-TC-208 — Validate save is blocked if session expires during template editing.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Session → Mid-Edit Save Restriction |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Session expiry must prevent unauthorized persistence. |

### MM-TC-209 — Validate user can recover securely after re-login.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Session → Re-Authentication Recovery |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must recover securely after re-authentication. |

### MM-TC-210 — Validate unsaved changes do not persist after timeout.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Session → Unsaved State on Timeout |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Timeout must not silently persist unsaved AML changes. |

### MM-TC-211 — Validate invalid/expired token cannot perform AML operations.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Security → Concurrent Session Token Validation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Invalid tokens must be rejected. |

### MM-TC-212 — Validate browser back navigation does not reopen secured module after logout.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Security → Browser Back Access After Logout |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Secured AML data must not reopen after logout. |

### MM-TC-213 — Validate page refresh after logout does not restore secure data.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Security → Refresh After Logout |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Refresh must not restore protected module data. |

### MM-TC-214 — Validate role changes reflect updated access immediately.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Security → Multi-Role Permission Switch |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Updated role permissions must take effect accurately. |

### MM-TC-215 — Validate security-sensitive actions remain traceable and permission-safe.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Security → Audit-Safe Access Integrity |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | RBAC, session, and protected AML operations must remain secure and auditable. |

### MM-TC-216 — Validate system behavior when Template List API fails during module load.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | API Handling → Template List Load Failure |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | System must show controlled failure state without breaking module shell. |

### MM-TC-217 — Validate failure handling when selected template detail API fails.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | API Handling → Template Detail Load Failure |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | System must block stale/wrong template rendering. |

### MM-TC-218 — Validate save failure handling during template update.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | API Handling → Save Changes Failure |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Failed saves must not falsely persist AML configuration. |

### MM-TC-219 — Validate template creation failure behavior.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | API Handling → Create Template Failure |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | System must prevent partial template creation. |

### MM-TC-220 — Validate clone-flow failure handling.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | API Handling → Clone Template Failure |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Clone failures must not create incomplete duplicate templates. |

### MM-TC-221 — Validate report-level API failure handling.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | API Handling → KYC Gap Report Load Failure |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Report must fail gracefully. |

### MM-TC-222 — Validate score configuration save failure handling.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | API Handling → Score Config Save Failure |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | System must preserve last valid score configuration. |

### MM-TC-223 — Validate Retry action fetches latest valid data after failure.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Retry Logic → Manual Retry After Failure |
| Priority | High |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Retry must successfully recover module state. |

### MM-TC-224 — Validate repeated retry attempts do not duplicate requests or corrupt state.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Retry Logic → Multiple Retry Stability |
| Priority | High |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | System must remain stable under repeated retries. |

### MM-TC-225 — Validate partial template-list payload handling.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | API Handling → Partial Payload (Template List) |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | System must safely handle partial list payloads. |

### MM-TC-226 — Validate partial template-detail payload handling.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | API Handling → Partial Payload (Template Detail) |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | System must process partial template detail safely. |

### MM-TC-227 — Validate handling of null field metadata in template configuration.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | API Handling → Null Field Metadata |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Null AML metadata must not break configuration rendering. |

### MM-TC-228 — Validate behavior for empty field arrays/sections.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | API Handling → Empty Array Handling |
| Priority | High |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | System must safely handle empty template sections. |

### MM-TC-229 — Validate unsupported backend enum values are safely handled.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | API Handling → Unexpected Enum Value |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Unexpected enums must not corrupt AML workflow. |

### MM-TC-230 — Validate late stale API response does not overwrite latest selected template.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | API Handling → Stale Response Override |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Latest valid selection must remain authoritative. |

### MM-TC-231 — Validate duplicate backend records do not create duplicate UI entries.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | API Handling → Duplicate Payload Rows |
| Priority | High |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | System must prevent duplicate rendering from repeated backend rows. |

### MM-TC-232 — Validate UI stability during slow API response.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Backend Reliability → Slow API Response |
| Priority | High |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | System must remain responsive during latency. |

### MM-TC-233 — Validate graceful handling when network disconnects mid-request.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Backend Reliability → Connection Loss Mid-Request |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | System must safely handle interrupted AML operations. |

### MM-TC-234 — Validate refresh behavior during in-flight API request.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Backend Reliability → Refresh During Pending Request |
| Priority | High |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Refresh during pending API activity must remain safe. |

### MM-TC-235 — Validate safe handling when backend record changed before save completes.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Backend Reliability → Concurrent API Update Conflict |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | System must detect conflicting backend state. |

### MM-TC-236 — Validate errors shown to user are controlled and non-technical.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Error Handling → User-Safe Error Messaging |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | User-facing errors must remain safe and meaningful. |

### MM-TC-237 — Validate failed backend operations do not show success banners.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Error Handling → No False Success State |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | System must never show false-positive success. |

### MM-TC-238 — Validate module recovers cleanly after API failure and retry/reload.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Recovery → State Consistency After Failure |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | AML configuration state must remain reliable after failures. |

### MM-TC-239 — Validate backend failures do not create hidden partial persisted data.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Backend Integrity → Audit-Safe Persistence |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | No |
| Automation Layer | Manual |
| Expected Result | Failed backend operations must not create partial AML data. |

### MM-TC-240 — Validate module stability across load, save, clone, scoring, and report failures.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Reliability → End-to-End Failure Resilience |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Missing Mandatory workflow must remain stable, recoverable, and enterprise-safe under backend failures. |

### MM-TC-241 — Validate updated Missing Mandatory template logic reflects correctly in Customer 360 KYC views.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Cross-Module Consistency → Customer 360 Template Mapping |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Customer 360 must reflect latest Missing Mandatory configuration accurately. |

### MM-TC-242 — Validate template updates propagate correctly to KYC Gap Report.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Cross-Module Consistency → KYC Gap Report Sync |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | KYC Gap Report must remain synchronized with template logic. |

### MM-TC-243 — Validate Individual template changes do not impact Corporate KYC workflows and vice versa.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Cross-Module Consistency → Individual/Corporate Isolation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Customer-type workflows must remain isolated. |

### MM-TC-244 — Validate shared AML fields remain consistent across consuming modules.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Cross-Module Consistency → Shared AML Field Integrity |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Shared AML fields must maintain business consistency across dependent modules. |

### MM-TC-245 — Validate recalculated KYC Gap Score remains same across all dependent AML views.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Cross-Module Consistency → Score Sync Across Consumers |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Gap score must remain cross-module consistent. |

### MM-TC-246 — Validate Customer 360 displays correct missing-field breakdown based on Missing Mandatory configuration.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Customer 360 Dependency → Missing Field Breakdown |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Customer 360 must show exact missing fields based on template logic. |

### MM-TC-247 — Validate completed KYC updates remove gaps correctly.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Customer 360 Dependency → Completed KYC Sync |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Completed KYC updates must synchronize correctly. |

### MM-TC-248 — Validate updated risk category remains consistent after recalculation.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Customer 360 Dependency → Risk Category Sync |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Risk category must remain synchronized across dependent AML modules. |

### MM-TC-249 — Validate complete flow from Create Template → Configure Fields → Score Setup → Customer Mapping → Gap Report.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | End-to-End AML Workflow → Create Template to Report |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Full Missing Mandatory AML workflow must remain operational end-to-end. |

### MM-TC-250 — Validate cloned templates generate independent scoring/report behavior.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | End-to-End AML Workflow → Clone to Independent Reporting |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Cloned templates must behave independently across reporting/scoring. |

### MM-TC-251 — Validate template changes trigger downstream recalculation across workflow.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | End-to-End AML Workflow → Template Update Recalculation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Template changes must propagate across downstream AML flow. |

### MM-TC-252 — Validate full Corporate entity AML workflow integrity.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | End-to-End AML Workflow → Corporate Entity Flow |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Corporate Missing Mandatory workflow must remain fully compliant. |

### MM-TC-253 — Validate full Individual AML workflow integrity.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | End-to-End AML Workflow → Individual Customer Flow |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Individual Missing Mandatory workflow must remain fully compliant. |

### MM-TC-254 — Validate no regression in App Shell after Missing Mandatory updates.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Regression → App Shell Stability |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | App shell must remain unaffected by feature changes. |

### MM-TC-255 — Validate global navigation components remain stable.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Regression → Sidebar / Top Bar Integrity |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Global navigation must remain intact. |

### MM-TC-256 — Validate Create/Edit/Clone/Save flows remain stable post-change.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Regression → Template CRUD Integrity |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Template CRUD operations must remain stable. |

### MM-TC-257 — Validate score configuration + calculation logic remains stable after changes.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Regression → KYC Gap Score Stability |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | KYC scoring engine must remain stable. |

### MM-TC-258 — Validate report behavior remains stable after template/scoring changes.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Regression → KYC Gap Report Stability |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | KYC Gap Report must remain fully stable. |

### MM-TC-259 — Validate no RBAC/session/security regression after release.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Regression → RBAC & Security Integrity |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Security controls must remain unaffected. |

### MM-TC-260 — Validate template/scoring/report updates remain auditable and business-traceable.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Business Integrity → AML Audit Traceability |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Missing Mandatory workflow must remain audit-safe and enterprise traceable. |

### MM-TC-261 — Validate no mismatch between UI, backend logic, score, report, and dependent modules.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Business Integrity → Data Consistency Validation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | UI and backend AML logic must remain fully synchronized. |

### MM-TC-262 — Validate full Missing Mandatory Data Template workflow from configuration to AML consumer modules under regression-safe state.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Business Integrity → Final End-to-End Enterprise Validation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Missing Mandatory Data Template workflow must remain stable, secure, compliant, cross-module consistent, and enterprise/UAT ready. |

### MM-TC-263 — Validate Add Custom Field modal opens from Template Detail Header.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Custom Field → Modal Launch |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Add Custom Field modal must open successfully. |

### MM-TC-264 — Validate all modal controls render correctly.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Custom Field → Modal Control Rendering |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | All expected controls must render properly. |

### MM-TC-265 — Validate Field Name is required.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Custom Field → Mandatory Field Name |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must prevent creation without field name. |

### MM-TC-266 — Validate Add to Section is mandatory.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Custom Field → Mandatory Section Mapping |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Field must not be created without valid section mapping. |

### MM-TC-267 — Validate Description field behavior.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Custom Field → Description Handling |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Description handling must remain stable without affecting save flow. |

### MM-TC-268 — Validate successful UI-based custom field creation.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Custom Field → Valid UI Field Creation |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | UI-created field must persist successfully. |

### MM-TC-269 — Validate duplicate field name prevention within same template.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Custom Field → Duplicate Name Same Template |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Duplicate custom fields must not be created in same template. |

### MM-TC-270 — Validate same field-name handling across different sections.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Custom Field → Cross-Section Duplicate Validation |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must follow correct duplicate-scope logic. |

### MM-TC-271 — Validate unsupported characters in field name.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Custom Field → Invalid Character Validation |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Field name must follow supported input rules. |

### MM-TC-272 — Validate min/max field-name length behavior.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Custom Field → Length Boundary Validation |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Field length validation must work correctly. |

### MM-TC-273 — Validate created field appears only in selected section.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Custom Field → Section Placement Accuracy |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Field must render only in mapped section. |

### MM-TC-274 — Validate field creation in Individual KYC sections.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Custom Field → Individual Template Mapping |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Field must map correctly to Individual KYC sections. |

### MM-TC-275 — Validate field creation in Corporate KYC sections.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Custom Field → Corporate Template Mapping |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Field must map correctly to Corporate KYC sections. |

### MM-TC-276 — Validate supported weightage values render correctly.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Custom Field → Weightage Dropdown Rendering |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Weightage dropdown must show only allowed score values. |

### MM-TC-277 — Validate selected field weightage persists after save.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Custom Field → Weightage Persistence |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Selected weightage must persist accurately. |

### MM-TC-278 — Validate Cancel action does not create field.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Custom Field → Cancel Flow |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Canceled Add Field flow must discard changes. |

### MM-TC-279 — Validate close(X) action discards unsaved draft.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Add Custom Field → Close Icon Flow |
| Priority | Medium |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Closing modal must discard unsaved field input. |

### MM-TC-280 — Validate DB-created field appears correctly in UI.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | DB-Origin Field → UI Rendering |
| Priority | High |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | DB-origin field must render correctly. |

### MM-TC-281 — Validate DB-origin field shows correct configured weightage.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | DB-Origin Field → Weightage Sync |
| Priority | High |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | DB-created fields must reflect accurate score weight. |

### MM-TC-282 — Validate protected DB/system-created fields are non-editable if locked.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | DB-Origin Field → Locked Behavior |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | Protected DB fields must remain immutable. |

### MM-TC-283 — Validate UI user cannot create duplicate field if same DB-origin field already exists.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | DB-Origin Field → UI Duplicate Conflict |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | System must prevent duplicate conflict across DB-origin and UI-origin fields. |

### MM-TC-283 (row 2) — Validate UI user cannot create duplicate field if same DB-origin field already exists.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | DB-Origin Field → UI Duplicate Conflict |
| Priority | Critical |
| Spec Layer | database |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Expected Result | System must prevent duplicate conflict across DB-origin and UI-origin fields. |

### MM-TC-284 — Validate higher KYC Gap Score indicates worse compliance due to increased missing field weights.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Score → Score Direction Logic |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must consistently interpret higher KYC Gap Score as worse compliance. |

### MM-TC-285 — Validate score 0 maps to Low risk because no required fields are missing.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Score → Zero Score Compliance Validation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | A customer with no missing fields must return score 0 and map to Low risk. |

### MM-TC-286 — Validate error modal displays exact validation reason when score-range save fails.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Save Range Validation → Error Modal Explanation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | System must display exact validation failure reason before blocking save. |

### MM-TC-287 — Validate instructional tip bar displays exact business guidance text.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | KYC Gap Score → Tip Bar Guidance Validation |
| Priority | High |
| Spec Layer | ui |
| Automation Candidate | No |
| Automation Layer | Manual |
| Expected Result | Tip bar must display exact validation guidance as defined in FSD. |

### MM-TC-288 — Validate multiple high-weight missing mandatory fields push customer score into Critical band.

| Field | Value |
| --- | --- |
| Module | KYC |
| Sub Module | Score Mapping → High Missing Weight to Critical Validation |
| Priority | Critical |
| Spec Layer | ui |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Expected Result | Customers with severe missing mandatory fields must map to Critical risk category. |
