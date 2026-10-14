#!/usr/bin/env node
/**
 * Generate Multi-Tenancy Test Cases workbook for Milestone 1 modules.
 *
 * Sources used (grounding):
 *   - Auth/Data/Schema isolation requirements come from the generation prompt (MT-001/002/003).
 *   - Module inventory, navigational breadcrumbs, roles, screens, operations, search/filter/
 *     export/audit behaviour taken from the actual Milestone 1 FSDs + Figma HTML under
 *     pipeline/test-data/Milestone1/FSD and pipeline/test-data/Milestone1/Figma.
 *   - Neither the FSDs nor the Figma files define any multi-tenancy behaviour; every tenant
 *     attribute is therefore marked "To Be Confirmed" in the Assumptions & TBC sheet and in
 *     the corresponding Remarks cells, and tenant behaviour is NOT invented.
 *
 * Output: pipeline/test-data/Milestone1/Test Cases/Multi-Tenancy Test Cases.xlsx
 */
const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");

const OUT_DIR = path.join(
  __dirname,
  "..",
  "test-data",
  "Milestone1",
  "Test Cases"
);
const OUT_FILE = path.join(OUT_DIR, "Multi-Tenancy Test Cases.xlsx");

const MT_PROMPT = "Multi-tenancy requirement defined in generation prompt";
const TBC = "To Be Confirmed";

// ---------------------------------------------------------------------------
// Convenience constants used across case definitions
// ---------------------------------------------------------------------------
const NAV = {
  batch: "Sanction Screening > Batch Screening",
  manual: "Sanction Screening > Manual Screening",
  dedup: "Sanction Screening > De-dup Screening",
  mis: "Sanction Screening > Sanction MIS Reports",
  config: "Sanction Screening > Sanction Screening Configuration",
  keyword: "Sanction Screening > Keyword Manager",
  customList: "Sanction Screening > Custom List Manager",
  exceptionList: "Sanction Screening > Exception List Manager",
  ignoreWords: "Sanction Screening > Ignore Words Configuration",
  c360: "Customer 360",
  missingMandatory: "KYC > Missing Mandatory",
  kycGap: "KYC > KYC Gap Report",
  rdr: "Reference Data Registry",
};

const FIGMA = {
  batch: "pipeline/test-data/Milestone1/Figma/clari5-Batch-screening_updated.html",
  manual: "pipeline/test-data/Milestone1/Figma/Manual_screening_v2.html",
  dedup: "pipeline/test-data/Milestone1/Figma/dedup-screening.html",
  mis: "pipeline/test-data/Milestone1/Figma/sanctions-MIS_Landing_Page_Updated_2_1.html",
  config: "pipeline/test-data/Milestone1/Figma/sanctions_screening_config_FINAL.html",
  keyword: "pipeline/test-data/Milestone1/Figma/keyword_manager_v4.html",
  customList: "pipeline/test-data/Milestone1/Figma/clari5_custom_list_manager_3.html",
  exceptionList: "pipeline/test-data/Milestone1/Figma/Exception_List_Manager_v3.html",
  ignoreWords: "pipeline/test-data/Milestone1/Figma/ignore_words_v3.html",
  c360: "pipeline/test-data/Milestone1/Figma/customer360_v6.html",
  missingMandatory: "pipeline/test-data/Milestone1/Figma/missing_mandatory_v7.html",
  rdr: "pipeline/test-data/Milestone1/Figma/clari5-reference-data-register-v6.html",
};

const FSD = {
  batch: "Clari5 Batch Screening FSD v1.1",
  manual: "Manual Screening FSD",
  dedup: "Dedup Screening FSD v1.0",
  mis: "FSD Screening Types Main v0.7 (Sanction MIS Reports)",
  config: "Sanctions Screening Configuration FSD v1.1",
  keyword: "Keyword Manager FSD v2_New / Clari5 AML FSD Keyword Manager v1.1",
  customList: "Custom List Manager FSD v3",
  exceptionList: "Exception List Manager FSD v1.0",
  ignoreWords: "Ignore Word Manager FSD",
  c360: "FSD Customer 360 View v1.1",
  missingMandatory: "FSD Missing Mandatory & KYC Gap Report v1.2",
  kycGap: "FSD Missing Mandatory & KYC Gap Report v1.2",
  rdr: "Reference Data Registry FSD v1.0",
};

const LOGIN_STEP = (user, tenant) =>
  `Open the AML application and log in using the valid ${user} credentials for ${tenant}.`;
const LOGOUT_STEP = (tenant) => `Logout from ${tenant}.`;

/**
 * Default cross-tenant double-login scaffold for data isolation cases.
 * Returns preconditions + detailed steps.
 */
function crossLoginPlan({ firstTenantUser, firstTenant, moduleNav, actBuilder, secondTenantUser, secondTenant }) {
  const steps = [
    LOGIN_STEP(firstTenantUser, firstTenant),
    `Confirm the active tenant context shows ${firstTenant}.`,
    `Navigate to ${moduleNav}.`,
    ...actBuilder(firstTenant),
    LOGOUT_STEP(firstTenant),
    LOGIN_STEP(secondTenantUser, secondTenant),
    `Confirm the active tenant context shows ${secondTenant}.`,
    `Navigate to ${moduleNav}.`,
    ...actBuilder(secondTenant),
  ];
  return {
    preconditions: `Two active tenants (${firstTenant} and ${secondTenant}) exist with separate schemas and separate user accounts. Test data below has been created under ${firstTenant} for the ${firstTenant} user. Recommendation/validation team to confirm actual tenant identifiers and provisioning.`,
    steps,
  };
}

// ---------------------------------------------------------------------------
// Test case definitions
// ---------------------------------------------------------------------------
const CASES = [];

function add(def) {
  CASES.push(def);
}

// ===========================================================================
// A. AUTHENTICATION ISOLATION (MT-001)
// ===========================================================================
add({
  req: "MT-001", module: "Application (Cross-cutting)", feature: "Tenant Authentication",
  title: "Tenant A user logs in and tenant context is established for Tenant A",
  testType: "Functional", priority: "Critical", tenant: "Tenant A",
  userRole: "Tenant A user (role per FSD)",
  pre: "Tenant A and Tenant B are provisioned; Tenant A user credentials are valid.",
  data: "Tenant A: TENANTA-CUST-001; password from tenant provisioning.",
  steps: [
    LOGIN_STEP("Tenant A", "Tenant A"),
    "Confirm the tenant context shown after login corresponds to Tenant A.",
    "Verify the tenant/account information displayed (header/label) matches Tenant A.",
    "Navigate to at least two licensed modules and confirm read access.",
    LOGOUT_STEP("Tenant A"),
  ],
  expected: "Tenant A user authenticates successfully and is always scoped to Tenant A; no Tenant B module or data is reachable.",
  db: "No DB validation; requires confirming tenant-context attribute written to audit/session record.",
  tenantAState: "Logged in with valid Tenant A session.",
  tenantBState: "Unaffected; no Tenant A session touches Tenant B.",
  security: "Authentication establishes an isolated session bound to Tenant A.",
  fsdRef: `${MT_PROMPT} (MT-001). FSD has no multi-tenancy section; roles from ${FSD.batch} §2.`,
  figmaRef: `Login uses Clari5 Command Center (/clari5-cc/login). ${TBC} whether Figma shows tenant selection.`,
  auto: "No (authentication flow excluded from default Playwright scope unless QA_INCLUDE_AUTH_CASES=1)",
  remarks: "Tenant context display (label, header) ${TBC}.",
});
add({
  req: "MT-001", module: "Application (Cross-cutting)", feature: "Tenant Authentication",
  title: "Tenant B user logs in and tenant context is established for Tenant B",
  testType: "Functional", priority: "Critical", tenant: "Tenant B",
  userRole: "Tenant B user (role per FSD)",
  pre: "Tenant A and Tenant B are provisioned; Tenant B user credentials are valid.",
  data: "Tenant B: TENANTB-CUST-001; password from tenant provisioning.",
  steps: [
    LOGIN_STEP("Tenant B", "Tenant B"),
    "Confirm the tenant context shown after login corresponds to Tenant B.",
    "Verify the tenant/account information displayed matches Tenant B.",
    "Navigate to at least two licensed modules and confirm read access.",
    LOGOUT_STEP("Tenant B"),
  ],
  expected: "Tenant B user authenticates successfully and is always scoped to Tenant B; no Tenant A module or data is reachable.",
  db: "No DB validation; tenant-context attribute in session/audit to be confirmed.",
  tenantAState: "Unaffected; no Tenant B session touches Tenant A.",
  tenantBState: "Logged in with valid Tenant B session.",
  security: "Authentication establishes an isolated session bound to Tenant B.",
  fsdRef: `${MT_PROMPT} (MT-001). FSD has no multi-tenancy section; roles from ${FSD.batch} §2.`,
  figmaRef: `Login uses Clari5 Command Center (/clari5-cc/login). ${TBC} whether Figma shows tenant selection.`,
  auto: "No (authentication flow excluded from default Playwright scope unless QA_INCLUDE_AUTH_CASES=1)",
  remarks: "Tenant context display ${TBC}.",
});
add({
  req: "MT-001", module: "Application (Cross-cutting)", feature: "Tenant Authentication",
  title: "Tenant B user credentials must not authenticate into Tenant A",
  testType: "Negative", priority: "Critical", tenant: "Cross-Tenant",
  userRole: "Tenant A user",
  pre: "Tenant A and Tenant B provisioned; Tenant B credentials valid.",
  data: "Tenant B user name + password (valid for Tenant B only).",
  steps: [
    "Open the AML application login screen.",
    "Attempt to log in using Tenant B user credentials.",
    "Submit the login form.",
    "Observe the returned message and landing screen.",
    LOGOUT_STEP("Tenant B"),
  ],
  expected: "Tenant B user must not be able to authenticate into Tenant A. Access is rejected (or the authenticated context resolves to Tenant B only, never Tenant A). Exact error message ${TBC} from FSD — none defined.",
  db: "No cross-tenant session/token created in Tenant A context.",
  tenantAState: "No Tenant A session or tenant context created.",
  tenantBState: "Session, if created, is bound to Tenant B only.",
  security: "Cross-tenant credential reuse for a different tenant must be rejected.",
  fsdRef: `${MT_PROMPT} (MT-001). No login/authentication FSD section defines cross-tenant behaviour.`,
  figmaRef: `${TBC} login screen only; no multi-tenant login variant in Figma.`,
  auto: "No (authentication flow excluded from default Playwright scope unless QA_INCLUDE_AUTH_CASES=1)",
  remarks: "Credential+tenant binding mechanism ${TBC}.",
});
add({
  req: "MT-001", module: "Application (Cross-cutting)", feature: "Tenant Authentication",
  title: "Tenant A user credentials must not authenticate into Tenant B",
  testType: "Negative", priority: "Critical", tenant: "Cross-Tenant",
  userRole: "Tenant B user",
  pre: "Tenant A and Tenant B provisioned; Tenant A credentials valid.",
  data: "Tenant A user name + password (valid for Tenant A only).",
  steps: [
    "Open the AML application login screen.",
    "Attempt to log in using Tenant A user credentials.",
    "Submit the login form.",
    "Observe the returned message and landing screen.",
    LOGOUT_STEP("Tenant A"),
  ],
  expected: "Tenant A user must not be able to authenticate into Tenant B. Access is rejected (or the resolved context remains Tenant A). Exact error message ${TBC}.",
  db: "No cross-tenant session/token created in Tenant B context.",
  tenantAState: "Session, if created, is bound to Tenant A only.",
  tenantBState: "No Tenant B session or tenant context created.",
  security: "Cross-tenant credential reuse must be rejected.",
  fsdRef: `${MT_PROMPT} (MT-001). No login FSD section defines cross-tenant behaviour.`,
  figmaRef: `${TBC} login screen only; no multi-tenant login variant in Figma.`,
  auto: "No (authentication flow excluded from default Playwright scope unless QA_INCLUDE_AUTH_CASES=1)",
  remarks: "Credential+tenant binding mechanism ${TBC}.",
});
add({
  req: "MT-001", module: "Application (Cross-cutting)", feature: "Tenant Authentication",
  title: "Valid user credentials combined with an unauthorized tenant identifier are rejected at login",
  testType: "Negative", priority: "High", tenant: "Cross-Tenant",
  userRole: "Tenant A user",
  pre: "Tenant A provisioned; tenant/account selection is offered at login if the UI supports it (${TBC} from Figma).",
  data: "Valid Tenant A user credentials combined with an unauthenticated/unknown tenant identifier.",
  steps: [
    "Open the AML application login screen.",
    "Enter valid Tenant A user credentials.",
    "Provide/select a tenant/account identifier that is not the user's own tenant (e.g., a Tenant B or bogus identifier) where the login UI exposes one.",
    "Submit the login form.",
    "Record the returned message and landing screen.",
  ],
  expected: "Login must fail when the supplied tenant identifier is not the tenant the user belongs to. The user must not be placed into another tenant's context. Exact behaviour ${TBC} because the login UI/parameter is not tenant-aware in the provided FSD/Figma.",
  db: "No session scaffolded against an unauthorized schema.",
  tenantAState: "User stays unauthenticated or remains in Tenant A only.",
  tenantBState: "No Tenant B session created.",
  security: "Tenant identifier supplied at login must not override the authenticated user's tenant binding.",
  fsdRef: `${MT_PROMPT} (MT-001). No tenant field defined at login in FSD/Figma.`,
  figmaRef: `${TBC} whether login exposes a tenant/account selector.`,
  auto: "No (authentication flow excluded from default Playwright scope unless QA_INCLUDE_AUTH_CASES=1)",
  remarks: "Login tenant field ${TBC}.",
});
add({
  req: "MT-001", module: "Application (Cross-cutting)", feature: "Tenant Authentication",
  title: "Invalid / non-existent tenant identifier at login is rejected gracefully",
  testType: "Negative", priority: "High", tenant: "Cross-Tenant",
  userRole: "Any user",
  pre: "Detection of invalid/non-existent tenant identifier supported by the login flow (${TBC}).",
  data: "Valid user credentials + invalid tenant/account identifier (e.g., TENANT-XYZ).",
  steps: [
    "Open the AML application login screen.",
    "Enter valid user credentials.",
    "Enter an invalid / non-existent tenant or account identifier where the login UI exposes one.",
    "Submit and record the result.",
  ],
  expected: "Login is rejected gracefully; no session is created and no tenant context resolves. Exact message ${TBC}.",
  db: "No schema lookup resolves; no session row created.",
  tenantAState: "No change.",
  tenantBState: "No change.",
  security: "Invalid tenant identifiers must not map to a default/fallback tenant.",
  fsdRef: `${MT_PROMPT} (MT-001).`,
  figmaRef: `${TBC}.`,
  auto: "No (authentication flow excluded from default Playwright scope unless QA_INCLUDE_AUTH_CASES=1)",
  remarks: `${TBC} whether tenant identifier is even a login input.`,
});
add({
  req: "MT-001", module: "Application (Cross-cutting)", feature: "Tenant Authentication",
  title: "Login is rejected for a user of a disabled/inactive tenant",
  testType: "Negative", priority: "High", tenant: "Cross-Tenant",
  userRole: "Any user",
  pre: "A disabled/inactive tenant exists (tenant administration capability ${TBC}).",
  data: "User belonging to a disabled/inactive tenant.",
  steps: [
    "Open the AML application login screen.",
    "Enter credentials of a user whose tenant is disabled/inactive.",
    "Submit and record the result.",
  ],
  expected: "Login is rejected for users of a disabled/inactive tenant (where tenant enable/disable is supported). Exact behaviour ${TBC}.",
  db: "No session created for a disabled tenant.",
  tenantAState: "No change.",
  tenantBState: "No change.",
  security: "Disabled tenant must not be reachable through login.",
  fsdRef: `${MT_PROMPT} (MT-001). Tenant enable/disable not covered in FSD.`,
  figmaRef: `${TBC}.`,
  auto: "No (authentication flow excluded unless QA_INCLUDE_AUTH_CASES=1)",
  remarks: `${TBC} whether tenant disablement exists.`,
});
add({
  req: "MT-001", module: "Application (Cross-cutting)", feature: "Tenant Authentication",
  title: "Login is rejected for a disabled/inactive user",
  testType: "Negative", priority: "High", tenant: "Cross-Tenant",
  userRole: "Any user",
  pre: "A disabled/inactive user exists within an active tenant (user administration ${TBC}).",
  data: "Credentials of a disabled/inactive user of Tenant A.",
  steps: [
    "Open the AML application login screen.",
    "Enter credentials of a disabled/inactive Tenant A user.",
    "Submit and record the result.",
  ],
  expected: "Login is rejected for disabled/inactive users. Exact behaviour ${TBC}.",
  db: "No session created.",
  tenantAState: "No change.",
  tenantBState: "No change.",
  security: "Disabled users must not obtain an active tenant context.",
  fsdRef: `${MT_PROMPT} (MT-001); user roles exist in ${FSD.batch} §2 but user enable/disable is not defined.`,
  figmaRef: `${TBC}.`,
  auto: "No (authentication flow excluded unless QA_INCLUDE_AUTH_CASES=1)",
  remarks: `${TBC} whether user disablement exists.`,
});
add({
  req: "MT-001", module: "Application (Cross-cutting)", feature: "Tenant Authentication",
  title: "Tenant/account information manipulated in the login request must not switch tenant context",
  testType: "Security", priority: "Critical", tenant: "Cross-Tenant",
  userRole: "Tenant A user",
  pre: "Login request supports a tenant/account parameter (${TBC}). An HTTP proxy/interceptor is available.",
  data: "Valid Tenant A credentials with tenant/account parameter tampered from TENANT_A to another tenant.",
  steps: [
    "Intercept the login request with a proxy tool.",
    "Submit valid Tenant A credentials.",
    "Modify the tenant/account/context field in the login payload to reference another tenant.",
    "Forward the request and observe the resulting session context.",
  ],
  expected: "The backend must bind the session to the authenticated user's authorized tenant and ignore the tampered value; tenant context must not switch. Exact request field name ${TBC}.",
  db: "No session created against the tampered schema.",
  tenantAState: "Session bound to Tenant A even after payload tampering.",
  tenantBState: "No Tenant B session created.",
  security: "Client-supplied tenant context during login must not be trusted.",
  fsdRef: `${MT_PROMPT} (MT-001). Login payload not documented in FSD.`,
  figmaRef: `${TBC}.`,
  auto: "No (security flow requires interception; excluded unless QA_INCLUDE_AUTH_CASES=1)",
  remarks: "API/parameter names ${TBC}.",
});
add({
  req: "MT-001", module: "Application (Cross-cutting)", feature: "Tenant Context after Authentication",
  title: "Tenant context cannot be modified or switched after authentication",
  testType: "Security", priority: "Critical", tenant: "Cross-Tenant",
  userRole: "Tenant A user",
  pre: "Authenticated as Tenant A.",
  data: "Tenant A session.",
  steps: [
    LOGIN_STEP("Tenant A", "Tenant A"),
    "Open the user profile / account / session area (avatar + user name per FSD application shell).",
    "Attempt to modify the tenant/account context through any available UI control.",
    "Attempt to switch tenant to Tenant B through the same control, if it exists.",
    "Record result.",
  ],
  expected: "The user must not be able to change or switch the tenant context after authentication. If the UI exposes a tenant switch it must be authorization-checked. The FSD/Figma do not define a tenant-switch control, so the expectation is that none exists and context is fixed for the session.",
  db: "No session re-bound to another schema.",
  tenantAState: "Context remains Tenant A.",
  tenantBState: "No access.",
  security: "Post-authentication context mutation must be impossible.",
  fsdRef: `${MT_PROMPT} (MT-001).`,
  figmaRef: "Application shell (logo, avatar, notification bell) shown in Figma; no tenant switcher present.",
  auto: "No (security/excluded unless QA_INCLUDE_AUTH_CASES=1)",
  remarks: `${TBC} whether a tenant-switch control exists.`,
});
add({
  req: "MT-001", module: "Application (Cross-cutting)", feature: "Session / Context Isolation",
  title: "After logout, accessing another tenant directly requires a fresh login and shows no residual data",
  testType: "Session", priority: "High", tenant: "Cross-Tenant",
  userRole: "Tenant A and Tenant B users",
  pre: "Attempt access to another tenant after logout, in the same browser.",
  data: "Tenant A session token.",
  steps: [
    LOGIN_STEP("Tenant A", "Tenant A"),
    "Open a Tenant A module page.",
    LOGOUT_STEP("Tenant A"),
    "Without re-authenticating, navigate directly to a Tenant B module URL or attempt to reuse the former Tenant A token/session.",
    "Record the result.",
  ],
  expected: "After logout the session must be invalidated; direct navigation must require authentication and must never surface Tenant B (or residual Tenant A) data. Tenancy of the next login is independent.",
  db: "Old token must not resolve to any schema.",
  tenantAState: "Session invalidated.",
  tenantBState: "Not reachable without fresh Tenant B login.",
  security: "Logout must invalidate the tenant-bound session.",
  fsdRef: `${MT_PROMPT} (MT-001).`,
  figmaRef: `${TBC}.`,
  auto: "No (session flow excluded unless QA_INCLUDE_AUTH_CASES=1)",
  remarks: "Session store details ${TBC}.",
});
add({
  req: "MT-001", module: "Application (Cross-cutting)", feature: "Session / Context Isolation",
  title: "Reuse of a previous tenant session/token is rejected",
  testType: "Session", priority: "High", tenant: "Cross-Tenant",
  userRole: "Tenant A and Tenant B users",
  pre: "A previously logged-out session token is captured.",
  data: "Captured old Tenant A token.",
  steps: [
    LOGIN_STEP("Tenant A", "Tenant A"),
    "Capture the Tenant A session token.",
    LOGOUT_STEP("Tenant A"),
    "Replay the captured token against the application.",
    "Record the result.",
  ],
  expected: "Replayed/invalidated tokens must be rejected (no session reuse). Exact behaviour ${TBC}.",
  db: "No data returned for a dead token.",
  tenantAState: "No active session.",
  tenantBState: "Unaffected.",
  security: "Token/session reuse after logout must fail.",
  fsdRef: `${MT_PROMPT} (MT-001).`,
  figmaRef: `${TBC}.`,
  auto: "No (session flow excluded unless QA_INCLUDE_AUTH_CASES=1)",
  remarks: "Token format/storage ${TBC}.",
});
add({
  req: "MT-001", module: "Application (Cross-cutting)", feature: "Session / Context Isolation",
  title: "Session expiry forces re-authentication and re-establishes the correct tenant context",
  testType: "Session", priority: "High", tenant: "Both (A & B)",
  userRole: "Tenant A user",
  pre: "Session expiry policy per deployment.",
  data: "Tenant A session allowed to idle until expiry.",
  steps: [
    LOGIN_STEP("Tenant A", "Tenant A"),
    "Allow the session to idle past the configured expiry.",
    "Perform an action on a module.",
    "Observe forced re-authentication.",
    "Re-login as Tenant A and confirm the tenant context is Tenant A.",
  ],
  expected: "On expiry the user is redirected to login; post re-login the tenant context is re-established for the authenticated tenant and no cross-tenant data is exposed.",
  db: "No session leak between expiry and re-login.",
  tenantAState: "Re-login re-establishes Tenant A context.",
  tenantBState: "Unaffected.",
  security: "Expired sessions must not retain tenant context.",
  fsdRef: `${MT_PROMPT} (MT-001).`,
  figmaRef: `${TBC}. Login screen known at /clari5-cc/login.`,
  auto: "No (session flow excluded unless QA_INCLUDE_AUTH_CASES=1)",
  remarks: "Expiry duration ${TBC}.",
});
add({
  req: "MT-001", module: "Application (Cross-cutting)", feature: "Session / Context Isolation",
  title: "Browser refresh retains the tenant context without broadening access",
  testType: "Session", priority: "Medium", tenant: "Tenant A",
  userRole: "Tenant A user",
  pre: "Logged in as Tenant A.",
  data: "Tenant A session.",
  steps: [
    LOGIN_STEP("Tenant A", "Tenant A"),
    "Press browser Refresh on a module page.",
    "Confirm the user remains authenticated.",
    "Confirm the tenant context shown is still Tenant A.",
    "Open a module and confirm data is still Tenant A data.",
  ],
  expected: "Browser refresh must not drop or re-scope the tenant context; no cross-tenant data appears.",
  db: "Session persists across refresh.",
  tenantAState: "Tenant A context retained.",
  tenantBState: "Unaffected.",
  security: "Refresh must not broaden the tenant context.",
  fsdRef: `${MT_PROMPT} (MT-001).`,
  figmaRef: `${TBC}.`,
  auto: "No (session flow excluded unless QA_INCLUDE_AUTH_CASES=1)",
  remarks: "Session persistence mechanism ${TBC}.",
});
add({
  req: "MT-001", module: "Application (Cross-cutting)", feature: "Session / Context Isolation",
  title: "Concurrent tenant sessions in separate browser profiles stay fully isolated",
  testType: "Session", priority: "Medium", tenant: "Cross-Tenant",
  userRole: "Tenant A and Tenant B users",
  pre: "Two browsers/profiles available; application supports concurrent sessions (${TBC}).",
  data: "Tenant A and Tenant B credentials.",
  steps: [
    "In browser profile 1, log in as Tenant A.",
    "In browser profile 2, log in as Tenant B.",
    "Interact with a module in profile 1.",
    "Interact with the same module in profile 2.",
    "Verify each profile shows only its own tenant data.",
  ],
  expected: "Concurrent sessions for different tenants must stay fully isolated; opening the application in another tab/profile with another tenant context must not leak data between them.",
  db: "Two independent tenant-scoped sessions.",
  tenantAState: "Tenant A data only.",
  tenantBState: "Tenant B data only.",
  security: "Cross-profile data must not bleed.",
  fsdRef: `${MT_PROMPT} (MT-001).`,
  figmaRef: `${TBC}.`,
  auto: "No (session flow excluded unless QA_INCLUDE_AUTH_CASES=1)",
  remarks: `${TBC} whether the app allows concurrent multiple sessions.`,
});
add({
  req: "MT-001", module: "Application (Cross-cutting)", feature: "Session / Context Isolation",
  title: "Back/forward browser navigation must not replay the previous tenant's cached pages",
  testType: "Session", priority: "Medium", tenant: "Cross-Tenant",
  userRole: "Tenant A and Tenant B users",
  pre: "Browser history retained.",
  data: "Tenant A module pages visited before logout.",
  steps: [
    LOGIN_STEP("Tenant A", "Tenant A"),
    "Visit two modules.",
    LOGOUT_STEP("Tenant A"),
    LOGIN_STEP("Tenant B", "Tenant B"),
    "Use browser Back and Forward buttons repeatedly.",
    "Verify the pages shown remain within the Tenant B context and no cached Tenant A data is rendered.",
  ],
  expected: "Back/forward navigation after re-login must not replay the previous tenant's cached pages or data.",
  db: "No cross-tenant cached queries served.",
  tenantAState: "Cached pages not replayed in Tenant B session.",
  tenantBState: "Tenant B context only after re-login.",
  security: "Browser history must not leak tenant data across sessions.",
  fsdRef: `${MT_PROMPT} (MT-001).`,
  figmaRef: `${TBC}.`,
  auto: "No (session flow excluded unless QA_INCLUDE_AUTH_CASES=1)",
  remarks: "Caching policy ${TBC}.",
});

// ===========================================================================
// B. DIRECT URL / DEEP-LINK + IDENTIFIER MANIPULATION (MT-002)
// ===========================================================================
add({
  req: "MT-002", module: "Application (Cross-cutting)", feature: "Direct URL / Deep-link Isolation",
  title: "Tenant B cannot open a Tenant A record via a direct URL/deep link",
  testType: "Security", priority: "Critical", tenant: "Cross-Tenant",
  userRole: "Tenant A and Tenant B users",
  pre: "A Tenant A record page exists and its URL is captured while logged in as Tenant A.",
  data: "URL of a Tenant A record (exact URL structure ${TBC} from live UI, not documented in FSD).",
  steps: [
    LOGIN_STEP("Tenant A", "Tenant A"),
    "Open a Tenant A record (e.g., screening result, customer, watchlist).",
    "Capture the browser URL.",
    LOGOUT_STEP("Tenant A"),
    LOGIN_STEP("Tenant B", "Tenant B"),
    "Paste the captured Tenant A record URL directly into the browser and press Enter.",
    "Record the result.",
  ],
  expected: "Tenant B must be denied access to the Tenant A record (blank/denied/record-not-found). No Tenant A data may be rendered.",
  db: "Query must be tenant-scoped; the record must not resolve under Tenant B.",
  tenantAState: "Record remains fully accessible to Tenant A.",
  tenantBState: "Access denied / record not found for Tenant B.",
  security: "Direct URLs must not bypass tenant scoping.",
  fsdRef: `${MT_PROMPT} (MT-002). URL structure not defined in FSD; confirm from live UI.`,
  figmaRef: `${TBC}.`,
  auto: "Yes",
  remarks: "URL structure ${TBC}; requires a live-record deep link.",
});
add({
  req: "MT-002", module: "Application (Cross-cutting)", feature: "Direct URL / Deep-link Isolation",
  title: "Tenant A cannot open a Tenant B record via a direct URL/deep link",
  testType: "Security", priority: "Critical", tenant: "Cross-Tenant",
  userRole: "Tenant A and Tenant B users",
  pre: "A Tenant B record URL captured while logged in as Tenant B.",
  data: "URL of a Tenant B record.",
  steps: [
    LOGIN_STEP("Tenant B", "Tenant B"),
    "Open a Tenant B record.",
    "Capture the browser URL.",
    LOGOUT_STEP("Tenant B"),
    LOGIN_STEP("Tenant A", "Tenant A"),
    "Paste the captured Tenant B record URL and press Enter.",
    "Record the result.",
  ],
  expected: "Tenant A must be denied access to the Tenant B record.",
  db: "Record must not resolve under Tenant A schema.",
  tenantAState: "Access denied / record not found.",
  tenantBState: "Record remains fully accessible to Tenant B.",
  security: "Deep links must keep tenant scoping.",
  fsdRef: `${MT_PROMPT} (MT-002).`,
  figmaRef: `${TBC}.`,
  auto: "Yes",
  remarks: "URL structure ${TBC}.",
});
add({
  req: "MT-002", module: "Application (Cross-cutting)", feature: "Identifier Manipulation",
  title: "Manipulating record/tenant identifiers in URL or query parameters must not expose another tenant's data",
  testType: "Security", priority: "Critical", tenant: "Cross-Tenant",
  userRole: "Tenant A user",
  pre: "Record-specific pages carry IDs in URL/query/path (exact names ${TBC} from live UI).",
  data: "Tenant B record identifier substituted into a Tenant A URL.",
  steps: [
    LOGIN_STEP("Tenant A", "Tenant A"),
    "Open a Tenant A record and locate its ID in the URL.",
    "Replace the record ID with a Tenant B record ID.",
    "Press Enter and record the result.",
    "Attempt the same by modifying other query/path parameters that identify the record or tenant.",
  ],
  expected: "Manipulating record IDs/parameters must not surface Tenant B data. The backend enforces the authenticated tenant context.",
  db: "Tenant-scoped predicate must reject foreign IDs.",
  tenantAState: "No Tenant B data exposed; access denied/empty.",
  tenantBState: "Unaffected.",
  security: "Client-controlled identifiers must not override tenant context.",
  fsdRef: `${MT_PROMPT} (MT-002). Parameter names not in FSD; confirm from live UI.`,
  figmaRef: `${TBC}.`,
  auto: "Yes",
  remarks: "Exact parameter names ${TBC}.",
});

// ===========================================================================
// C. DATABASE SCHEMA ISOLATION (MT-003)
// ===========================================================================
add({
  req: "MT-003", module: "Database Validation (Cross-cutting)", feature: "Database Schema Isolation",
  title: "A Tenant A-created record exists in the Tenant A schema and is absent from the Tenant B schema",
  testType: "Database", priority: "Critical", tenant: "Tenant A",
  userRole: "Tenant A user (DB admin for validation)",
  pre: "DBA/read access to the shared physical database and to both schemas (TENANT_A / TENANT_B names ${TBC}). A record was created as Tenant A.",
  data: "Record ID of a Tenant A-created record (e.g., TENANTA-CUST-001).",
  steps: [
    "Create/use a record created by Tenant A (e.g., screening submission TENANT-A-BS-001).",
    "Query the Tenant A schema for the record using its identifier.",
    "Verify the record exists in the Tenant A schema and contains the expected fields.",
    "Query the Tenant B schema for the same identifier.",
    "Verify the record does not exist in the Tenant B schema.",
  ],
  expected: "Tenant A records live only under the Tenant A schema; the same identifier yields nothing under Tenant B.",
  db: "Database schema/table/column mapping ${TBC} — confirm actual names before scripting.",
  tenantAState: "Record present in Tenant A schema.",
  tenantBState: "Record absent from Tenant B schema.",
  security: "Schema isolation is the enforcement boundary.",
  fsdRef: `${MT_PROMPT} (MT-003). Schema names/architecture not documented in FSD.`,
  figmaRef: "N/A (database-level)",
  auto: "No — requires DB access credentials.",
  remarks: "Actual schema/table/column names ${TBC}.",
});
add({
  req: "MT-003", module: "Database Validation (Cross-cutting)", feature: "Database Schema Isolation",
  title: "A Tenant B-created record exists in the Tenant B schema and is absent from the Tenant A schema",
  testType: "Database", priority: "Critical", tenant: "Tenant B",
  userRole: "Tenant B user (DB admin for validation)",
  pre: "DBA/read access to shared physical DB and both schemas. A record was created as Tenant B.",
  data: "Record ID of a Tenant B-created record (e.g., TENANTB-CUST-001).",
  steps: [
    "Create/use a record created by Tenant B (e.g., screening submission TENANT-B-BS-001).",
    "Query the Tenant B schema for the record.",
    "Verify the record exists in the Tenant B schema.",
    "Query the Tenant A schema for the same identifier.",
    "Verify the record does not exist in the Tenant A schema.",
  ],
  expected: "Tenant B records live only under the Tenant B schema.",
  db: "Schema/table mapping ${TBC}.",
  tenantAState: "Record absent from Tenant A schema.",
  tenantBState: "Record present in Tenant B schema.",
  security: "Schema isolation verified from the opposite side.",
  fsdRef: `${MT_PROMPT} (MT-003).`,
  figmaRef: "N/A (database-level)",
  auto: "No — requires DB access credentials.",
  remarks: "Actual schema/table/column names ${TBC}.",
});
add({
  req: "MT-003", module: "Database Validation (Cross-cutting)", feature: "Database Schema Isolation",
  title: "An update by Tenant A changes only the Tenant A schema, leaving identical Tenant B rows untouched",
  testType: "Database", priority: "Critical", tenant: "Cross-Tenant",
  userRole: "Tenant A user (DB admin for validation)",
  pre: "A Tenant A record is updated via the UI.",
  data: "Tenant A record TENANTA-CUST-001 updated (name field changed).",
  steps: [
    "Login as Tenant A and update a Tenant A record.",
    "Query the Tenant A schema and verify the change (expected new value).",
    "Query the Tenant B schema for the same identifier/row.",
    "Verify no related row in Tenant B changed and no row appears under Tenant B.",
  ],
  expected: "An update performed by Tenant A changes only Tenant A schema rows; no unintended change occurs in Tenant B schema (same-business-data row stays intact).",
  db: "Row-level + schema-level verification. Schema/table names ${TBC}.",
  tenantAState: "Updated row present in Tenant A schema.",
  tenantBState: "Identical business row in Tenant B unchanged.",
  security: "Updates must not bleed across schemas.",
  fsdRef: `${MT_PROMPT} (MT-003).`,
  figmaRef: "N/A (database-level)",
  auto: "No — requires DB access credentials.",
  remarks: "Mirrors the common-business-data CRUD cases (see module sections).",
});
add({
  req: "MT-003", module: "Database Validation (Cross-cutting)", feature: "Database Schema Isolation",
  title: "A delete by Tenant A removes only Tenant A schema rows",
  testType: "Database", priority: "Critical", tenant: "Cross-Tenant",
  userRole: "Tenant A user (DB admin for validation)",
  pre: "A Tenant A record is deleted via the UI (delete supported by the module).",
  data: "Tenant A record TENANTA-CUST-001 (or equivalent) deleted.",
  steps: [
    "Login as Tenant A and delete a Tenant A record (where the module supports delete).",
    "Query the Tenant A schema and verify the record is removed.",
    "Query the Tenant B schema for the same identifier.",
    "Verify the Tenant B row (if any identical business row exists) is retained.",
  ],
  expected: "A delete by Tenant A removes only Tenant A rows; Tenant B schema is untouched.",
  db: "Referential integrity within Tenant A only. Names ${TBC}.",
  tenantAState: "Record removed from Tenant A schema.",
  tenantBState: "No change in Tenant B schema.",
  security: "Deletes must not cascade or leak across schemas.",
  fsdRef: `${MT_PROMPT} (MT-003).`,
  figmaRef: "N/A (database-level)",
  auto: "No — requires DB access credentials.",
  remarks: "Find collides with module-level delete-isolation coverage; kept for schema-level evidence.",
});
add({
  req: "MT-003", module: "Database Validation (Cross-cutting)", feature: "Database Schema Isolation",
  title: "Tenant B CRUD operations leave the Tenant A schema unchanged at every lifecycle step",
  testType: "Database", priority: "High", tenant: "Cross-Tenant",
  userRole: "Tenant B user (DB admin for validation)",
  pre: "A Tenant B record is created/updated/deleted; cross-check in Tenant A schema.",
  data: "Tenant B record TENANTB-CUST-001 lifecycle.",
  steps: [
    "Perform create, update, and (where supported) delete as Tenant B.",
    "After each operation, query the Tenant A schema for the same identifiers/rows.",
    "Verify no Tenant A row is created, updated, or deleted by Tenant B operations.",
  ],
  expected: "Tenant B CRUD leaves Tenant A schema unchanged at every lifecycle step.",
  db: "Mirror validation for Tenant B operations. Names ${TBC}.",
  tenantAState: "No change from Tenant B operations.",
  tenantBState: "Changes present in Tenant B schema.",
  security: "Bidirectional schema isolation verified.",
  fsdRef: `${MT_PROMPT} (MT-003).`,
  figmaRef: "N/A (database-level)",
  auto: "No — requires DB access credentials.",
  remarks: "Schema mapping ${TBC}; reference the create-validated row in module cases.",
});

// ===========================================================================
// D. BATCH SCREENING module
// ===========================================================================
add({
  req: "MT-002", module: "Batch Screening", feature: "List / Data Isolation",
  title: "Batch Screening match results list shows only the operating tenant's screenings",
  testType: "Data Isolation", priority: "Critical", tenant: "Tenant A",
  userRole: "Tenant A - Operations Analyst / Compliance Analyst",
  pre: `Two tenants provisioned. Tenant A has screening submissions with markers TENANT-A-BS-###. Login to default environment.`,
  data: "Tenant A screening refs: TENANT-A-BS-001/002 (subjects 'Tenant A Subject Alpha/Beta').",
  ...crossLoginPlan({
    firstTenantUser: "Tenant A user", firstTenant: "Tenant A", moduleNav: NAV.batch,
    actBuilder: (t) => [
      "On the Match Results / Screening Results landing page, open the screening list.",
      `Verify every listed screening carries a ${t} data marker (e.g., ref TENANT-A-BS-###) and no other-tenant marker appears.`,
      "Note the total-count badge and date-range filter behaviour.",
    ],
    secondTenantUser: "Tenant B user", secondTenant: "Tenant B",
  }),
  expected: "Tenant A sees only Tenant A screening records; Tenant B sees only Tenant B records; no cross-contamination in lists, counts, or date filters.",
  db: "List query is tenant-scoped.",
  tenantAState: "Only TENANT-A-BS-### rows visible.",
  tenantBState: "Only TENANT-B-BS-### rows visible.",
  security: "List rendering must not include foreign-tenant rows.",
  fsdRef: `${MT_PROMPT} (MT-002) + ${FSD.batch} §5 (Screening Results Page, count badge, Export Report button).`,
  figmaRef: FIGMA.batch,
  auto: "Yes",
  remarks: "Count badge semantics ${TBC} for multi-tenant.",
});
add({
  req: "MT-002", module: "Batch Screening", feature: "Search / Filter Isolation",
  title: "Batch Screening search and date-range filters return only the operating tenant's results",
  testType: "Data Isolation", priority: "Critical", tenant: "Cross-Tenant",
  userRole: "Tenant A - Operations Analyst",
  pre: `Tenant B has screening ref TENANT-B-BS-001.`,
  data: "Search values: TENANT-B-BS-001 (foreign), 'Tenant B Subject' (foreign name), shared value e.g., date range covering both tenants' screenings.",
  steps: [
    LOGIN_STEP("Tenant A", "Tenant A"),
    "Navigate to " + NAV.batch,
    "Apply the date-range filter covering a period in which both tenants have screenings.",
    "Verify only Tenant A screenings appear.",
    "Search/exact-filter using the foreign identifier TENANT-B-BS-001.",
    "Verify no Tenant B record is returned.",
    "Search using Tenant A identifier TENANT-A-BS-001 and verify it is returned.",
  ],
  expected: "Search and filter queries remain tenant-scoped; a foreign identifier or a broad filter never returns Tenant B data.",
  db: "Search predicate includes tenant predicate.",
  tenantAState: "Only Tenant A rows returned.",
  tenantBState: "Tenant B data not returned.",
  security: "Filter/search path must not leak foreign rows.",
  fsdRef: `${MT_PROMPT} (MT-002) + ${FSD.batch} §5 (date-range filter).`,
  figmaRef: FIGMA.batch,
  auto: "Yes",
  remarks: "Repeated per module — distinct mechanism (search/filter).",
});
add({
  req: "MT-002", module: "Batch Screening", feature: "CRUD / Disposition Isolation",
  title: "Screening dispositions applied by Tenant A affect only Tenant A records",
  testType: "Data Isolation", priority: "High", tenant: "Cross-Tenant",
  userRole: "Tenant A - Compliance Analyst (dispositions)",
  pre: "A Tenant B match record exists (TENANT-B-BS-002).",
  data: "Foreign record TENANT-B-BS-002 attempted disposition.",
  steps: [
    LOGIN_STEP("Tenant A", "Tenant A"),
    "Navigate to " + NAV.batch,
    "Open the Match Review workspace for the Tenant A record TENANT-A-BS-001.",
    "Apply a disposition (Review/False Positive/Move to Case) per tenant role permissions.",
    "Verify the disposition applies to the Tenant A record only.",
    "Attempt to open/dispose the Tenant B record TENANT-B-BS-002 directly.",
    "Record the result.",
  ],
  expected: "Dispositions/actions by Tenant A affect only Tenant A records; the foreign record cannot be opened or changed.",
  db: "Disposition status updated only in Tenant A rows.",
  tenantAState: "Disposition recorded on Tenant A record.",
  tenantBState: "Tenant B record unchanged.",
  security: "Action paths must be tenant-scoped.",
  fsdRef: `${MT_PROMPT} (MT-002) + ${FSD.batch} §7 (Disposition Actions & Workflow).`,
  figmaRef: FIGMA.batch,
  auto: "Yes",
  remarks: "Dispositions apply to own tenant records only.",
});
add({
  req: "MT-002", module: "Batch Screening", feature: "Report / Export Isolation",
  title: "Batch Screening export report contains only the operating tenant's data",
  testType: "Data Isolation", priority: "High", tenant: "Tenant A",
  userRole: "Tenant A - Operations Analyst",
  pre: "Tenant A and Tenant B both have match results in the current date range.",
  data: "Tenant A result set (TENANT-A-BS-###).",
  steps: [
    LOGIN_STEP("Tenant A", "Tenant A"),
    "Navigate to " + NAV.batch,
    "Apply the date-range filter.",
    "Click Export Report.",
    "Open the exported file.",
    "Verify every row carries a Tenant A marker and no Tenant B identifier appears.",
    "Verify the exported row count matches the Tenant A-only result count.",
  ],
  expected: "Exported batch-screening report contains only Tenant A records and Tenant A counts.",
  db: "Export query tenant-scoped.",
  tenantAState: "Export contains only Tenant A rows.",
  tenantBState: "No Tenant B rows in Tenant A export.",
  security: "Export must not include foreign-tenant data.",
  fsdRef: `${MT_PROMPT} (MT-002) + ${FSD.batch} §5 (Export Report button).`,
  figmaRef: FIGMA.batch,
  auto: "Partial (download-handling)",
  remarks: "File format per FSD; download directory handling needed for automation.",
});

// ===========================================================================
// E. MANUAL SCREENING module
// ===========================================================================
const manualCases = (() => {
  const o = [];
  o.push({
    req: "MT-002", module: "Manual Screening", feature: "Create / Data Isolation",
    title: "Manual screening initiated by Tenant A is never visible in Tenant B",
    testType: "Functional", priority: "Critical", tenant: "Tenant A",
    userRole: "Tenant A - Operations Analyst",
    pre: "Tenant A and Tenant B provisioned.",
    data: "Subject fields: Full Name 'Tenant A Manual Subject', alias 'TENANTA-MSUB-001', address '10 Tenant A Street', email tenant-a@test.com.",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.manual,
      "Initiate a new manual (single) screening with the Tenant A subject data.",
      "Submit the screening.",
      "Verify the new submission appears in the results table.",
      `Verify the submission and subject carry Tenant A markers only.`,
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Navigate to " + NAV.manual,
      "Search for TENANTA-MSUB-001.",
      "Verify the Tenant A submission is not displayed/returned.",
    ],
    expected: "Screening initiated by Tenant A is visible to Tenant A and never visible/searchable in Tenant B.",
    db: "Created row stored under Tenant A schema.",
    tenantAState: "Submission visible in Tenant A results.",
    tenantBState: "Submission not visible/searchable in Tenant B.",
    security: "Create path binds new records to the creating tenant.",
    fsdRef: `${MT_PROMPT} (MT-002) + ${FSD.manual} (screening workflow, result table).`,
    figmaRef: FIGMA.manual, auto: "Yes",
    remarks: "",
  });
  o.push({
    req: "MT-002", module: "Manual Screening", feature: "CRUD (update) — Common Business Data",
    title: "Common manual-screening subject in both tenants updates independently (Tenant A update)",
    testType: "Regression", priority: "High", tenant: "Cross-Tenant",
    userRole: "Tenant A and Tenant B - Operations Analyst",
    pre: "A logically identical subject exists in both tenants: Full Name 'Rajesh Kumar', DOB 01-Jan-1980, PAN ABCDE1234F, email rajesh@test.com.",
    data: "Common subject: Rajesh Kumar / PAN ABCDE1234F present under Tenant A (ref RAJESH-A) and Tenant B (ref RAJESH-B).",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.manual,
      "Open the common subject record Rajesh Kumar.",
      "Update an attribute (e.g., address to '45 New Address A').",
      "Save and verify the change appears.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Open the same business subject Rajesh Kumar.",
      "Verify the address still shows the original value ('Old Address') — unchanged.",
    ],
    expected: "Updating the same logical business data in Tenant A changes only Tenant A; Tenant B row remains unchanged. Detects missing tenant predicates in UPDATE queries.",
    db: "UPDATE touches only Tenant A schema row.",
    tenantAState: "Address updated.",
    tenantBState: "Address unchanged.",
    security: "Global (tenantless) UPDATE would be caught here.",
    fsdRef: `${MT_PROMPT} (MT-002 §10) + ${FSD.manual}.`,
    figmaRef: FIGMA.manual, auto: "Yes",
    remarks: "Same-business-data test executed bidirectionally in the update pair.",
  });
  o.push({
    req: "MT-002", module: "Manual Screening", feature: "CRUD (update) — Common Business Data (reverse)",
    title: "Common manual-screening subject in both tenants updates independently (Tenant B update)",
    testType: "Regression", priority: "High", tenant: "Cross-Tenant",
    userRole: "Tenant A and Tenant B - Operations Analyst",
    pre: "Common subject Rajesh Kumar / PAN ABCDE1234F exists in both tenants.",
    data: "Common subject present in both tenants.",
    steps: [
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Navigate to " + NAV.manual,
      "Open the common subject Rajesh Kumar.",
      "Update an attribute (e.g., name field or contact).",
      "Save and verify the change appears.",
      LOGOUT_STEP("Tenant B"),
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Open the same business subject Rajesh Kumar.",
      "Verify the Tenant A row still holds its own values — unchanged.",
    ],
    expected: "Updating Tenant B common data leaves Tenant A unaffected (bidirectional check).",
    db: "UPDATE touches only Tenant B schema row.",
    tenantAState: "Values unchanged.",
    tenantBState: "Values updated.",
    security: "Global UPDATE would be caught bidirectionally.",
    fsdRef: `${MT_PROMPT} (MT-002 §10) + ${FSD.manual}.`,
    figmaRef: FIGMA.manual, auto: "Yes",
    remarks: "Reverse direction of the common-data update pair.",
  });
  o.push({
    req: "MT-002", module: "Manual Screening", feature: "Export Isolation",
    title: "Manual screening Export Report contains only the operating tenant's data",
    testType: "Data Isolation", priority: "High", tenant: "Tenant A",
    userRole: "Tenant A - Operations Analyst",
    pre: "Both tenants have screening results in the current view.",
    data: "Tenant A result set.",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.manual,
      "Filter/select the result set.",
      "Click Export Report.",
      "Open the exported file and verify only Tenant A subjects appear.",
      "Verify counts in the export and on-screen summary reflect Tenant A only.",
    ],
    expected: "Manual screening export contains only Tenant A data; summary counts exclude Tenant B.",
    db: "Export query tenant-scoped.",
    tenantAState: "Export = Tenant A rows only.",
    tenantBState: "Excluded from export.",
    security: "Export/Report path must not include foreign data.",
    fsdRef: `${MT_PROMPT} (MT-002) + ${FSD.manual} (Export Report, row-count summary).`,
    figmaRef: FIGMA.manual, auto: "Partial (download-handling)",
    remarks: "",
  });
  o.push({
    req: "MT-002", module: "Manual Screening", feature: "Audit Isolation",
    title: "Manual screening audit trail is tenant-scoped",
    testType: "Security", priority: "High", tenant: "Cross-Tenant",
    userRole: "Tenant A - Compliance Analyst; Tenant B - Auditor",
    pre: "Audit trail available for screening events (${FSD.manual}).",
    data: "Tenant A screening event TENANT-A-BS-001 dispositioned.",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.manual,
      "Perform a screening and a disposition change.",
      "Open the audit log/audit trail for the event.",
      "Verify an entry is recorded containing the Tenant A context (user, tenant, action).",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Open the audit log.",
      "Search/filter for Tenant A audit entries.",
      "Verify Tenant A audit entries are not visible/accessible.",
    ],
    expected: "Each tenant sees only its own audit records; Tenant B cannot read Tenant A audit information.",
    db: "Audit table tenant-scoped.",
    tenantAState: "Audit entry for Tenant A action visible to Tenant A.",
    tenantBState: "Tenant A audit entries not accessible.",
    security: "Audit data must be tenant-isolated.",
    fsdRef: `${MT_PROMPT} (MT-002 §17) + ${FSD.manual} (Audit trail DB).`,
    figmaRef: FIGMA.manual, auto: "Yes",
    remarks: "Audit UI existence ${TBC} where not surfaced in Figma.",
  });
  return o;
})();
manualCases.forEach(add);

// ===========================================================================
// F. DEDUP SCREENING module
// ===========================================================================
const dedupCases = [
  {
    area: "List / Data Isolation", title: "De-dup results show only the operating tenant's groups",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.dedup,
      "Open the De-Duplication Match Report.",
      "Verify all result groups carry Tenant A markers (TENANT-A-DD-###).",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Navigate to " + NAV.dedup,
      "Verify only Tenant B groups (TENANT-B-DD-###) appear.",
    ],
    expected: "Match groups are tenant-scoped; no foreign groups in list, counts, or group badges.",
  },
  {
    area: "Search / Filter Isolation", title: "De-dup filter-card search stays tenant-scoped (name / email / address / account status)",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.dedup,
      "In Filter Card — Search Criteria, search the Tenant B email tenant-b@test.com.",
      "Verify no Tenant B group is returned.",
      "Search Tenant A email tenant-a@test.com.",
      "Verify the Tenant A group is returned.",
      "Repeat with address and account-status filters that could match both tenants.",
    ],
    expected: "Filter card (name/email/address/account status) queries remain tenant-scoped.",
  },
  {
    area: "Report / Export Isolation", title: "De-dup report generation and CSV/PDF/Print export contain only the operating tenant's data",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.dedup,
      "Set search criteria and click Generate Report.",
      "Verify the generated report contains only Tenant A groups.",
      "Export to CSV and PDF.",
      "Open exports and verify all rows carry Tenant A markers.",
      "Verify group/row counts exclude Tenant B.",
    ],
    expected: "Report generation, CSV export, PDF export, and print output are Tenant A-scoped.",
  },
  {
    area: "Counts / Summary Isolation", title: "De-dup group count badges and summaries exclude other-tenant data",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.dedup,
      "Note Group Count Badge values on the result section.",
      "Verify badge totals reconcile with Tenant A-only records (cross-check with a Tenant A-only filtered search).",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Verify Tenant B badge totals correspond to Tenant B-only data.",
    ],
    expected: "Summary counts/badges never aggregate other-tenant records.",
  },
  {
    area: "Audit Isolation", title: "De-dup reporting actions are audited against the operating tenant and not visible cross-tenant",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.dedup,
      "Run a report and export it.",
      "Verify the audit log records the Tenant A action with tenant context.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Open the audit log and attempt to view Tenant A entries.",
      "Verify Tenant A audit entries are inaccessible.",
    ],
    expected: "Audit records are tenant-scoped; cross-tenant audit access denied.",
  },
];
let ddIdx = 1000;
for (const c of dedupCases) {
  add({
    req: c.area.startsWith("List") ? "MT-002" : "MT-002",
    module: "Dedup Screening", feature: c.area, title: c.title, testType: "Data Isolation",
    priority: c.area.includes("Audit") ? "High" : (c.area.includes("Counts") ? "High" : "Critical"),
    tenant: c.area.includes("Counts") ? "Both (A & B)" : "Cross-Tenant",
    userRole: "Tenant A / Tenant B - Compliance Analyst",
    pre: `Two tenants provisioned; Tenant A has dedup groups TENANT-A-DD-### and Tenant B has TENANT-B-DD-###; logins valid.`,
    data: c.area.includes("Search")
      ? "Tenant A email tenant-a@test.com; Tenant B email tenant-b@test.com; addresses 10 Tenant A Street / 10 Tenant B Street."
      : "Dedup group refs TENANT-A-DD-001 / TENANT-B-DD-001.",
    steps: c.steps,
    expected: c.expected,
    db: "Report/export/audit queries tenant-scoped.",
    tenantAState: "Tenant A data only.",
    tenantBState: "Tenant B data only.",
    security: "Group/export/audit paths preserve tenant scoping.",
    fsdRef: `${MT_PROMPT} (MT-002) + ${FSD.dedup} §5-6 (Filter Card; Results/Report; Export CSV/PDF; Generate Report).`,
    figmaRef: FIGMA.dedup,
    auto: c.area.includes("Audit") ? "Yes" : (c.area.includes("Export") ? "Partial (download-handling)" : "Yes"),
    remarks: c.area.includes("Audit") ? "Audit UI ${TBC} where not in Figma" : "",
  });
}

// ===========================================================================
// G. SANCTION MIS REPORTS module
// ===========================================================================
const misCases = [
  {
    title: "MIS dashboard summary counts and statistics include only the operating tenant's data",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.mis,
      "Review the landing page summary/dashboard statistics.",
      "Verify counts reconcile with Tenant A-only screening/report data.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Navigate to " + NAV.mis,
      "Verify counts reflect Tenant B-only data.",
    ],
  },
  {
    title: "MIS report with date/status/customer/account filters stays tenant-scoped",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.mis,
      "Generate a report applying date range, status, and customer/account filters.",
      "Verify the report contains only Tenant A data.",
      "Re-run the same report using a Tenant B identifier as a filter value.",
      "Verify the filter yields no Tenant B data.",
    ],
  },
  {
    title: "MIS report export contains only the operating tenant's records and counts",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.mis,
      "Generate and export a report.",
      "Open the exported file.",
      "Verify all rows carry Tenant A markers and totals match the Tenant A-only summary.",
    ],
  },
  {
    title: "MIS report deep links / report identifiers are tenant-scoped",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Generate a Tenant A MIS report and capture its URL/report ID.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Access the captured Tenant A report via direct URL.",
      "Verify access is denied / report not found.",
    ],
  },
];
for (const c of misCases) {
  const isReportId = c.title.includes("deep links");
  add({
    req: "MT-002", module: "Sanction MIS Reports", feature: c.title.includes("deep") ? "Direct URL / Report ID Isolation" : (c.title.includes("Export") ? "Report / Export Isolation" : (c.title.includes("filters") ? "Search / Filter Isolation" : "Counts / Summary Isolation")),
    title: c.title,
    testType: "Data Isolation", priority: c.title.includes("summary") ? "High" : "Critical",
    tenant: "Cross-Tenant", userRole: "Tenant A / Tenant B - Compliance Analyst",
    pre: `Two tenants provisioned with differing screening/report volumes; report generation supported per ${FSD.mis}.`,
    data: isReportId ? "Tenant A MIS report URL/report ID (structure ${TBC} from live UI)." : "Tenant A report sets with TENANT-A markers; Tenant B with TENANT-B markers.",
    steps: c.steps,
    expected: "MIS reports, filters, exports, and report deep links are tenant-scoped; tenant identifiers never surface cross-tenant data.",
    db: "Report queries tenant-scoped.",
    tenantAState: "Tenant A report data only.",
    tenantBState: "Tenant B report data only; Tenant A report ID inaccessible.",
    security: "Report ID / URL manipulation denied.",
    fsdRef: `${MT_PROMPT} (MT-002) + ${FSD.mis} (reports/dashboards).`,
    figmaRef: FIGMA.mis,
    auto: isReportId ? "Yes" : c.title.includes("Export") ? "Partial (download-handling)" : "Yes",
    remarks: isReportId ? "Exact report deep-link format ${TBC}." : "",
  });
}

// ===========================================================================
// H. SCREENING CONFIGURATION module
// ===========================================================================
const configCases = [
  {
    title: "Watchlist profile creation as Tenant A is visible only to Tenant A",
    type: "Functional", pri: "Critical", tenant: "Tenant A",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.config,
      "Click Create Watchlist and complete the 5-step wizard with a Tenant A watchlist (TENANT-A-WL-001).",
      "Save the profile.",
      "Verify the profile appears in the Lists Library/profile list.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Navigate to " + NAV.config,
      "Search for TENANT-A-WL-001 in the profile list.",
      "Verify the Tenant A profile is not displayed.",
    ],
    expected: "Created watchlist profile belongs to and is visible only in Tenant A; not in the Tenant B library.",
  },
  {
    title: "Common business data: same-named watchlist in both tenants updates independently",
    type: "Regression", pri: "Critical", tenant: "Cross-Tenant",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.config,
      "Open the shared watchlist 'Sanctions Watchlist' (exists in both tenants).",
      "Edit a profile attribute (e.g., description).",
      "Save and verify the change.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Open the same 'Sanctions Watchlist'.",
      "Verify the Tenant B copy description is unchanged.",
    ],
    expected: "Same-named configuration in both tenants is stored and updated independently (no global UPDATE).",
  },
  {
    title: "Maker–Checker approval flow stays within the operating tenant",
    type: "Authorization", pri: "Critical", tenant: "Cross-Tenant",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.config,
      "As Maker, submit an Enable/Disable change requiring Maker-Checker approval.",
      "Verify the change is pending approval and visible only to the designated Tenant A Checker.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Navigate to " + NAV.config,
      "Open the approval queue.",
      "Verify the Tenant A pending change is not visible/actionable.",
    ],
    expected: "Maker-Checker approvals are tenant-scoped; Tenant B checker never sees Tenant A pending changes.",
  },
  {
    title: "Tenant A cannot update/deactivate a Tenant B watchlist profile",
    type: "Negative", pri: "Critical", tenant: "Cross-Tenant",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.config,
      "Attempt to open a Tenant B watchlist profile (via search of TENANT-B-WL-001 or direct URL).",
      "Attempt an Edit and an Enable/Disable action.",
      "Record the result.",
    ],
    expected: "Tenant A cannot open, edit, or change status of a Tenant B profile; attempts are denied.",
  },
  {
    title: "Search and filter tabs in watchlist lists return only operating-tenant profiles",
    type: "Data Isolation", pri: "High", tenant: "Cross-Tenant",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.config,
      "Switch between Filter Tabs (All/Active/etc.) and count-badge values.",
      "Search for TENANT-B-WL-001.",
      "Verify no Tenant B profile is returned.",
      "Verify count badges correspond to Tenant A profiles only.",
    ],
    expected: "Profile lists, tabs, search, and count badges exclude other-tenant profiles.",
  },
  {
    title: "Upload List schema-validation failures do not leak other-tenant information",
    type: "Negative", pri: "Medium", tenant: "Tenant A",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.config,
      "Click Upload List and upload a file with intentional schema errors (see Upload Rules / Clari5 Custom List Schema v2).",
      "Verify the error modal lists schema errors for the uploaded file only.",
      "Verify no reference to any other tenant appears in the error content.",
    ],
    expected: "Upload validation errors reference only the current file/tenant; no cross-tenant leakage through error UI.",
  },
  {
    title: "Screening configuration audit trail is tenant-scoped",
    type: "Security", pri: "High", tenant: "Cross-Tenant",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.config,
      "Make a configuration change and view the Audit Trail for it.",
      "Verify the entry records the Tenant A user and context.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Navigate to " + NAV.config,
      "Open the audit trail and search for Tenant A changes.",
      "Verify Tenant A audit entries are inaccessible.",
    ],
    expected: "Audit trail (Maker/Checker/upload/change) is tenant-isolated.",
  },
];
for (const c of configCases) {
  add({
    req: c.type === "Authorization" ? "MT-001 + MT-002" : c.type === "Negative" ? "MT-002" : c.type === "Regression" ? "MT-002" : "MT-002",
    module: "Screening Configuration", feature: c.title.includes("Maker") ? "Maker-Checker Approval Isolation" : c.title.includes("audit") ? "Audit Isolation" : c.title.includes("Schema") ? "Upload / Error Isolation" : c.title.includes("search") ? "Search / Filter Isolation" : c.title.includes("Common") ? "CRUD (update) — Common Business Data" : c.title.includes("cannot update") ? "CRUD / Authorization Isolation" : "Create / Data Isolation",
    title: c.title,
    testType: c.type, priority: c.pri, tenant: c.tenant,
    userRole: c.title.includes("Maker") ? "Tenant A Maker / Checker; Tenant B Checker" : "Tenant A / Tenant B - Compliance Admin (Maker-Checker)",
    pre: `Two tenants provisioned; Maker-Checker approval enabled; audit trail on for configuration changes (${FSD.config}).`,
    data: c.pri === "Critical" || c.tenant === "Cross-Tenant"
      ? (c.title.includes("Common") ? "Watchlist 'Sanctions Watchlist' present in both tenants." : c.title.includes("cannot update") ? "Tenant B profile TENANT-B-WL-001." : "Tenant A profile TENANT-A-WL-001; Tenant B profile TENANT-B-WL-001.")
      : "File with intentional schema violations (Clari5 Custom List Schema v2).",
    steps: c.steps,
    expected: c.title.includes("cannot update")
      ? "Tenant A cannot open, edit, or change the status of a Tenant B watchlist profile."
      : c.title.includes("Maker")
      ? "Maker-Checker approvals are tenant-scoped; Tenant B never sees or acts on Tenant A pending changes."
      : c.title.includes("audit")
      ? "Configuration audit trail (maker/checker/upload/change) is tenant-isolated."
      : c.title.includes("Schema")
      ? "Upload validation errors are scoped to the current file/tenant; no reference to any other tenant appears."
      : c.title.includes("search")
      ? "Watchlist lists, filter tabs, search, and count badges exclude other-tenant profiles."
      : c.title.includes("Common")
      ? "Same-named watchlist in both tenants is stored and updated independently."
      : "Watchlist profiles created by Tenant A are visible only to Tenant A and never in the Tenant B library.",
    db: c.title.includes("Maker") ? "Approval-state rows tenant-scoped." : c.title.includes("audit") ? "Audit rows tenant-scoped." : "Watchlist/profile rows tenant-scoped.",
    tenantAState: "Tenant A configuration data only.",
    tenantBState: "Tenant B configuration data only.",
    security: c.name ? "" : "Configuration CRUD, approval, upload, and audit paths stay tenant-scoped.",
    fsdRef: `${MT_PROMPT} (MT-002) + ${FSD.config} §4-5 (Create Watchlist wizard, Maker-Checker Mandatory, Audit Trail, Upload Rules).`,
    figmaRef: FIGMA.config,
    auto: c.type === "Negative" ? "Yes" : c.title.includes("Maker") ? "No (approval/RBAC flow excluded unless QA_INCLUDE_AUTH_CASES=1)" : "Yes",
    remarks: c.title.includes("cannot update") ? "Exact denial message ${TBC}." : "",
  });
}

// ===========================================================================
// I. KEYWORD MANAGER module
// ===========================================================================
const keywordCases = [
  {
    title: "Keyword created by Tenant A is visible only to Tenant A",
    type: "Functional", pri: "Critical", tenant: "Tenant A",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.keyword,
      "Create a keyword TENANTA-KEY-001 under an active category.",
      "Save and verify it appears in the keyword list.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Navigate to " + NAV.keyword,
      "Search for TENANTA-KEY-001.",
      "Verify it is not displayed.",
    ],
  },
  {
    title: "Common keyword present in both tenants updates/deletes independently",
    type: "Regression", pri: "High", tenant: "Cross-Tenant",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.keyword,
      "Open the common keyword 'Sanction Italy' (present in both tenants).",
      "Edit the risk score / name and save.",
      "Verify Tenant A shows the update.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Open 'Sanction Italy'.",
      "Verify Tenant B keyword is unchanged.",
    ],
  },
  {
    title: "Tenant A search/filter on keyword data returns only Tenant A keywords",
    type: "Data Isolation", pri: "Critical", tenant: "Cross-Tenant",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.keyword,
      "Search by a Tenant B keyword identifier (TENANTB-KEY-001).",
      "Verify no Tenant B keyword is returned.",
      "Search by a shared term likely to match both tenants (e.g., 'sanction').",
      "Verify all returned rows are Tenant A rows.",
    ],
  },
  {
    title: "Tenant A cannot delete a Tenant B keyword",
    type: "Negative", pri: "High", tenant: "Cross-Tenant",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.keyword,
      "Attempt to open/delete a Tenant B keyword (TENANTB-KEY-001).",
      "Record the result.",
    ],
  },
  {
    title: "Keyword audit trail shows only the operating tenant's operations",
    type: "Security", pri: "High", tenant: "Cross-Tenant",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.keyword,
      "Create and edit a keyword.",
      "Open the audit trail for the keyword.",
      "Verify entries record the Tenant A user/context.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Navigate to the audit trail and attempt to view Tenant A entries.",
      "Verify Tenant A audit entries are inaccessible.",
    ],
  },
];
for (const c of keywordCases) {
  const feature = c.title.includes("audit") ? "Audit Isolation" : c.title.includes("delete") ? "CRUD / Authorization Isolation" : c.title.includes("Common") ? "CRUD (update/delete) — Common Business Data" : c.title.includes("search") ? "Search / Filter Isolation" : "Create / Data Isolation";
  add({
    req: "MT-002", module: "Keyword Manager", feature,
    title: c.title,
    testType: c.type, priority: c.pri, tenant: c.tenant,
    userRole: "Tenant A / Tenant B - Compliance Analyst (keyword maintenance)",
    pre: `Two tenants provisioned; keyword categories active; audit trail available (${FSD.keyword} § audit).`,
    data: c.title.includes("Common") ? "Shared keyword 'Sanction Italy' in both tenants." : c.title.includes("delete") ? "Tenant B keyword TENANTB-KEY-001." : "Keywords TENANTA-KEY-001 / TENANTB-KEY-001.",
    steps: c.steps,
    expected: c.expected === undefined ? (c.title.includes("delete") ? "Tenant A cannot open/delete a Tenant B keyword." : "Keyword data remains tenant-scoped in list/search/audit.") : c.expected,
    db: "Keyword rows tenant-scoped.",
    tenantAState: "Tenant A keyword data only.",
    tenantBState: "Tenant B keyword data only.",
    security: "Keyword CRUD/search/audit paths preserve tenant scoping.",
    fsdRef: `${MT_PROMPT} (MT-002) + ${FSD.keyword} (audit trail, keyword CRUD permissions incl. AUDITOR role).`,
    figmaRef: FIGMA.keyword,
    auto: c.type === "Negative" ? "Yes" : "Yes",
    remarks: c.title.includes("Common") ? "Delete direction covered where supported." : "",
  });
}

// ===========================================================================
// J. CUSTOM LIST / EXCEPTION LIST / IGNORE WORDS modules
// ===========================================================================
const listModules = [
  {
    module: "Custom List Manager", nav: NAV.customList, figmaRef: FIGMA.customList,
    fsdRef: FSD.customList, data: { a: "TENANT-A-CL-001", b: "TENANT-B-CL-001" },
    approver: "Custom List Manager",
  },
  {
    module: "Exception List Manager", nav: NAV.exceptionList, figmaRef: FIGMA.exceptionList,
    fsdRef: FSD.exceptionList, data: { a: "TENANT-A-EL-001", b: "TENANT-B-EL-001" },
    approver: "Exception List Manager",
  },
  {
    module: "Ignore Words Configuration", nav: NAV.ignoreWords, figmaRef: FIGMA.ignoreWords,
    fsdRef: FSD.ignoreWords, data: { a: "TENANTAWORD1", b: "TENANTBWORD1" },
    approver: "Ignore Words",
  },
];
for (const lm of listModules) {
  const noun = lm.module === "Ignore Words Configuration" ? "ignore word" : "list";
  add({
    req: "MT-002", module: lm.module, feature: "Create / Data Isolation",
    title: `Create ${lm.data.a} as Tenant A - visible only to Tenant A`,
    testType: "Functional", priority: "Critical", tenant: "Tenant A",
    userRole: "Tenant A - Compliance Analyst",
    pre: `Two tenants provisioned.`,
    data: `${lm.data.a} created under Tenant A.`,
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + lm.nav,
      `Create a/an ${noun} ${lm.data.a} with Tenant A purpose/entries.`,
      "Save and verify it appears in the landing list.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Navigate to " + lm.nav,
      `Search for ${lm.data.a}.`,
      "Verify the Tenant A record is not displayed.",
    ],
    expected: `Records created by Tenant A appear only in Tenant A; not searchable/visible in Tenant B.`,
    db: "Rows stored under Tenant A schema.",
    tenantAState: "Record visible to Tenant A.",
    tenantBState: "Record not visible/searchable to Tenant B.",
    security: "Create path binds records to the creating tenant.",
    fsdRef: `${MT_PROMPT} (MT-002) + ${lm.fsdRef} (landing summary; add purpose/entries; pending approval).`,
    figmaRef: lm.figmaRef, auto: "Yes", remarks: "",
  });
  add({
    req: "MT-002", module: lm.module, feature: "CRUD (update) — Common Business Data",
    title: `Common ${noun} in both tenants updates independently`,
    testType: "Regression", priority: "Critical", tenant: "Cross-Tenant",
    userRole: "Tenant A / Tenant B - Compliance Analyst",
    pre: `Logically identical ${noun} name exists in both tenants (e.g., 'Shared ${lm.module} List' with the same purpose).`,
    data: `Common 'Shared List' present in both tenants.`,
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + lm.nav,
      "Open the shared record and update an entry/attribute.",
      "Save and verify the change.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Open the same shared record.",
      "Verify the Tenant B copy is unchanged.",
    ],
    expected: `Identical ${noun} names in both tenants are independent rows; updates affect only the operating tenant.`,
    db: "UPDATE tenant-scoped.",
    tenantAState: "Updated.",
    tenantBState: "Unchanged.",
    security: "Global UPDATE would be caught.",
    fsdRef: `${MT_PROMPT} (MT-002 §10) + ${lm.fsdRef}.`,
    figmaRef: lm.figmaRef, auto: "Yes", remarks: "",
  });
  add({
    req: "MT-001 + MT-002", module: lm.module, feature: "Approval Workflow Isolation",
    title: `Approval workflow for the ${lm.module} stays within the operating tenant`,
    testType: "Authorization", priority: "High", tenant: "Cross-Tenant",
    userRole: "Tenant A Maker; Tenant A Checker; Tenant B Checker",
    pre: `${lm.module} uses a pending-approval workflow.`,
    data: `A pending Tenant A ${noun} awaiting approval.`,
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + lm.nav,
      "Submit a/an " + noun + " requiring approval.",
      "Verify it is Pending Approval and visible only to the designated Tenant A Checker role.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Navigate to " + lm.nav,
      "Open the approval queue.",
      "Verify the Tenant A pending " + noun + " is not visible/actionable.",
    ],
    expected: "Approval queues are tenant-scoped; Tenant B cannot see or act on Tenant A pending records.",
    db: "Approval-state rows tenant-scoped.",
    tenantAState: "Pending approval visible to Tenant A Checker.",
    tenantBState: "Not visible in Tenant B queue.",
    security: "Approval workflow must not cross tenants.",
    fsdRef: `${MT_PROMPT} (MT-002) + ${lm.fsdRef} (Pending Approval).`,
    figmaRef: lm.figmaRef,
    auto: "No (approval/RBAC flow excluded unless QA_INCLUDE_AUTH_CASES=1)", remarks: "",
  });
  add({
    req: "MT-002", module: lm.module, feature: "Search / Filter Isolation",
    title: `Search for ${lm.data.a} / ${lm.data.b} in the ${lm.module} stays tenant-scoped`,
    testType: "Data Isolation", priority: "High", tenant: "Cross-Tenant",
    userRole: "Tenant A / Tenant B - Compliance Analyst",
    pre: "Both tenants have list records.",
    data: `${lm.data.a} and ${lm.data.b} exist.`,
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + lm.nav,
      `Search for ${lm.data.b}.`,
      "Verify no Tenant B record is returned.",
      `Search for ${lm.data.a}.`,
      "Verify only the Tenant A record is returned.",
    ],
    expected: "Search/filter remain tenant-scoped.",
    db: "Search query tenant-scoped.",
    tenantAState: "Tenant A results only.",
    tenantBState: "Unreachable.",
    security: "Search path must not leak foreign rows.",
    fsdRef: `${MT_PROMPT} (MT-002) + ${lm.fsdRef}.`,
    figmaRef: lm.figmaRef, auto: "Yes", remarks: "",
  });
}
// Custom List Manager audit case
add({
  req: "MT-002", module: "Custom List Manager", feature: "Audit Isolation",
  testType: "Security", priority: "High", tenant: "Cross-Tenant",
  userRole: "Tenant A - Compliance Analyst; Tenant B - Auditor",
  pre: "Custom list changes are recorded with actor context (IP/MAC/email, reason for addition per FSD).",
  data: "Tenant A custom list change TENANT-A-CL-001.",
  steps: [
    LOGIN_STEP("Tenant A", "Tenant A"),
    "Navigate to " + NAV.customList,
    "Add an entry/reason to a Tenant A list.",
    "Open the audit/change record and verify it records the Tenant A actor and context.",
    LOGOUT_STEP("Tenant A"),
    LOGIN_STEP("Tenant B", "Tenant B"),
    "Open the audit log and attempt to read Tenant A entries.",
    "Verify Tenant A audit entries are inaccessible.",
  ],
  expected: "Custom list audit records are tenant-scoped.",
  db: "Audit rows tenant-scoped.",
  tenantAState: "Audit entries visible to Tenant A.",
  tenantBState: "Tenant A audit entries inaccessible.",
  security: "Audit data tenant-isolated.",
  fsdRef: `${MT_PROMPT} (MT-002 §17) + ${FSD.customList} (audit/IP/MAC/email capture).`,
  figmaRef: FIGMA.customList, auto: "Yes", remarks: "Audit UI ${TBC} where not in Figma.",
});

// ===========================================================================
// K. CUSTOMER 360 VIEW module
// ===========================================================================
const c360Cases = [
  {
    title: "Customer search returns only operating-tenant customers",
    type: "Data Isolation", pri: "Critical", tenant: "Cross-Tenant",
    feature: "Search Isolation",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.c360,
      "Search by the Tenant A customer TENANTA-CUST-001.",
      "Verify the Tenant A customer profile opens.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Navigate to " + NAV.c360,
      "Search by TENANTA-CUST-001.",
      "Verify no Tenant A customer is returned.",
    ],
  },
  {
    title: "Account-number search and account table are tenant-scoped",
    type: "Data Isolation", pri: "Critical", tenant: "Cross-Tenant",
    feature: "Search / Account Isolation",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.c360,
      "Search by the Tenant B account number TENANTB-ACC-001.",
      "Verify no Tenant B account is returned.",
      "Search by TENANTA-ACC-001.",
      "Verify the Tenant A account shows in the account table.",
    ],
  },
  {
    title: "Product filter pills, date-range and transaction-type filters stay tenant-scoped",
    type: "Data Isolation", pri: "High", tenant: "Tenant A",
    feature: "Filter Isolation",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.c360,
      "Open a Tenant A customer profile.",
      "Use the account/product filter pills, date-range filter, and transaction-type filter.",
      "Verify filtered accounts/transactions belong to Tenant A only.",
      "Verify the Total Accounts / Reg Reports counts reflect Tenant A data.",
    ],
  },
  {
    title: "Account/transaction export contains only the operating tenant's data",
    type: "Data Isolation", pri: "High", tenant: "Tenant A",
    feature: "Export Isolation",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.c360,
      "Open a Tenant A customer and apply filters.",
      "Click Export on the account/transaction view.",
      "Open the exported file and verify all rows belong to Tenant A.",
      "Verify counts exclude Tenant B records.",
    ],
  },
  {
    title: "Risk summary, KYC summary, and alert summaries exclude other-tenant data",
    type: "Data Isolation", pri: "High", tenant: "Cross-Tenant",
    feature: "Counts / Summary Isolation",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.c360,
      "Open a Tenant A customer and review Risk Summary, KYC Summary Bar, and Alert Summary Bar.",
      "Verify the risk/KYC/alert data and counts are Tenant A-specific.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Open the same business customer (if shared) or Tenant B customer.",
      "Verify summaries reflect Tenant B data only and never show Tenant A figures.",
    ],
  },
  {
    title: "Direct open of a Tenant B customer identifier is denied for Tenant A",
    type: "Negative", pri: "Critical", tenant: "Cross-Tenant",
    feature: "Direct URL / Identifier Isolation",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.c360,
      "Attempt to open the Tenant B customer TENANTB-CUST-001 by direct identifier/URL.",
      "Record the result.",
    ],
  },
  {
    title: "Common business data: same customer (CUST001 / Rajesh Kumar / PAN ABCDE1234F) in both tenants updates independently",
    type: "Regression", pri: "Critical", tenant: "Cross-Tenant",
    feature: "CRUD (update) — Common Business Data",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.c360,
      "Open customer CUST001 (Rajesh Kumar, PAN ABCDE1234F) present in both tenants.",
      "Update a KYC/attribute and save.",
      "Verify Tenant A shows the update.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Open customer CUST001.",
      "Verify the Tenant B copy is unchanged.",
    ],
  },
];
for (const c of c360Cases) {
  add({
    req: "MT-002", module: "Customer 360 View", feature: c.feature,
    title: c.title,
    testType: c.type, priority: c.pri, tenant: c.tenant,
    userRole: "Tenant A / Tenant B - KYC Analyst",
    pre: `Two tenants provisioned. Tenant A data: customer TENANTA-CUST-001, account TENANTA-ACC-001. Tenant B data: customer TENANTB-CUST-001, account TENANTB-ACC-001.`,
    data: c.title.includes("Common")
      ? "CUST001 / Rajesh Kumar / PAN ABCDE1234F present in both tenants."
      : c.title.includes("account") ? "TENANTA-ACC-001 / TENANTB-ACC-001."
      : c.title.includes("summaries") ? "Risk/KYC/Alert summaries for both tenants."
      : c.title.includes("Direct") ? "TENANTB-CUST-001 direct identifier/URL."
      : "TENANTA-CUST-001 / TENANTB-CUST-001.",
    steps: c.steps,
    expected: c.title.includes("Direct") ? "Tenant A cannot open the Tenant B customer by identifier/URL." : c.title.includes("summaries") ? "Summary bars and counts are tenant-scoped." : "Customer/account data, search, filters, and exports remain tenant-scoped.",
    db: "Customer/account queries tenant-scoped.",
    tenantAState: "Tenant A customer data only.",
    tenantBState: "Tenant B customer data only; Tenant A data unreachable.",
    security: "Customer identifier/URL and export paths preserve tenant scoping.",
    fsdRef: `${MT_PROMPT} (MT-002) + ${FSD.c360} (accounts table, product filter pills, date-range/transaction-type filters, Export button, Risk/KYC/Alert summary bars).`,
    figmaRef: FIGMA.c360,
    auto: c.type === "Negative" ? "Yes" : c.title.includes("Export") ? "Partial (download-handling)" : "Yes",
    remarks: "",
  });
}

// ===========================================================================
// L. MISSING MANDATORY + KYC GAP REPORT module
// ===========================================================================
add({
  req: "MT-002", module: "Missing Mandatory", feature: "Template Configuration Isolation",
  title: "Missing Mandatory template configuration is scoped to the operating tenant",
  testType: "Data Isolation", priority: "High", tenant: "Cross-Tenant",
  userRole: "Tenant A / Tenant B - Configuration user",
  pre: `Missing Mandatory supports template configuration and search (${FSD.missingMandatory}).`,
  data: "Tenant A template TENANT-A-TPL-001.",
  steps: [
    LOGIN_STEP("Tenant A", "Tenant A"),
    "Navigate to " + NAV.missingMandatory,
    "Open/configure a Missing Mandatory template with Tenant A fields.",
    "Verify the template and its 'Add to Section' configuration persist for Tenant A only.",
    LOGOUT_STEP("Tenant A"),
    LOGIN_STEP("Tenant B", "Tenant B"),
    "Navigate to " + NAV.missingMandatory,
    "Search for the Tenant A template TENANT-A-TPL-001.",
    "Verify the Tenant A template is not displayed.",
  ],
  expected: "Missing Mandatory templates and their configuration are tenant-scoped.",
  db: "Template rows tenant-scoped.",
  tenantAState: "Template visible/configurable in Tenant A.",
  tenantBState: "Template not visible.",
  security: "Configuration must not leak across tenants.",
  fsdRef: `${MT_PROMPT} (MT-002) + ${FSD.missingMandatory} (template count, search, Add to Section).`,
  figmaRef: FIGMA.missingMandatory, auto: "Yes", remarks: "",
});
add({
  req: "MT-002", module: "KYC Gap Report", feature: "Search / Filter Isolation",
  title: "KYC Gap Report search, filter, and clear-filters stay within the operating tenant",
  testType: "Data Isolation", priority: "High", tenant: "Cross-Tenant",
  userRole: "Tenant A / Tenant B - KYC Analyst",
  pre: `KYC Gap Report supports filter, search, clear-filters, and reset-on-filter (${FSD.kycGap}).`,
  data: "Tenant A customer TENANTA-CUST-001; Tenant B customer TENANTB-CUST-001.",
  steps: [
    LOGIN_STEP("Tenant A", "Tenant A"),
    "Navigate to " + NAV.kycGap,
    "Run the gap report and apply filters/searches.",
    "Verify only Tenant A customer gaps are returned.",
    "Search for the Tenant B customer TENANTB-CUST-001.",
    "Verify no Tenant B result is returned.",
    "Use Clear Filters and verify the reset keeps the data tenant-scoped.",
  ],
  expected: "Gap-report search/filter/reset stays within the operating tenant; foreign identifiers return nothing.",
  db: "Gap-report queries tenant-scoped.",
  tenantAState: "Tenant A gaps only.",
  tenantBState: "Tenant B data not exposed.",
  security: "Report/filter path tenant-scoped.",
  fsdRef: `${MT_PROMPT} (MT-002) + ${FSD.kycGap} (filter, search, clear filters, reset on filter).`,
  figmaRef: "Figma screen for KYC Gap Report not present in Milestone1/Figma — reference Missing Mandatory FSD module.",
  auto: "Yes", remarks: "",
});

// ===========================================================================
// M. REFERENCE DATA REGISTRY module
// ===========================================================================
const rdrCases = [
  {
    title: "Reference-data lists (Customers, Accounts, Country) show only operating-tenant records",
    type: "Data Isolation", pri: "Critical", tenant: "Cross-Tenant",
    feature: "List / Data Isolation",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.rdr,
      "Open the Customer & Accounts reference lists.",
      "Verify all displayed records carry Tenant A markers.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Navigate to " + NAV.rdr,
      "Verify only Tenant B reference records appear.",
    ],
  },
  {
    title: "Search box and filter bar return only operating-tenant reference data",
    type: "Data Isolation", pri: "Critical", tenant: "Cross-Tenant",
    feature: "Search / Filter Isolation",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.rdr,
      "Search the Tenant B customer CIF TENANTB-CIF-001.",
      "Verify no Tenant B record is returned.",
      "Search TENANTA-CIF-001.",
      "Verify the Tenant A record is returned.",
      "Apply the filter bar options and verify results remain Tenant A-scoped.",
    ],
  },
  {
    title: "Reference data record created by Tenant A appears only in Tenant A",
    type: "Functional", pri: "Critical", tenant: "Tenant A",
    feature: "Create / Data Isolation",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.rdr,
      "Create a reference-data record (customer/address) with Tenant A markers.",
      "Save and verify it appears in the list.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Navigate to " + NAV.rdr,
      "Search for the Tenant A record.",
      "Verify it is not displayed.",
    ],
  },
  {
    title: "Common reference record (same CIF/account) in both tenants updates independently",
    type: "Regression", pri: "Critical", tenant: "Cross-Tenant",
    feature: "CRUD (update) — Common Business Data",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.rdr,
      "Open common account TENANTA-ACC-001 (same account number exists in Tenant B).",
      "Update an attribute (e.g., freeze indicator).",
      "Save and verify the change.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Open the same account number.",
      "Verify the Tenant B record is unchanged.",
    ],
  },
  {
    title: "Tenant A cannot update/delete a Tenant B reference record",
    type: "Negative", pri: "Critical", tenant: "Cross-Tenant",
    feature: "CRUD / Authorization Isolation",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.rdr,
      "Attempt to open the Tenant B account TENANTB-ACC-001 by direct identifier.",
      "Attempt an update and a delete.",
      "Record the results.",
    ],
  },
  {
    title: "Audit Trail tab in the View panel is tenant-scoped",
    type: "Security", pri: "High", tenant: "Cross-Tenant",
    feature: "Audit Isolation",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.rdr,
      "Open a Tenant A record View panel → Audit Trail tab.",
      "Verify audit entries are Tenant A operations.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Navigate to " + NAV.rdr,
      "Open the Audit Trail tab and attempt to locate Tenant A entries.",
      "Verify Tenant A audit information is inaccessible.",
    ],
  },
  {
    title: "Country Master risk-rating updates apply only to the operating tenant",
    type: "Functional", pri: "High", tenant: "Cross-Tenant",
    feature: "Reference Configuration Isolation",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Navigate to " + NAV.rdr,
      "Open Country Master and update the risk rating on a record.",
      "Save and verify the update applies in Tenant A.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Open Country Master and verify the Tenant B risk rating is unchanged.",
    ],
  },
];
for (const c of rdrCases) {
  add({
    req: "MT-002", module: "Reference Data Registry", feature: c.feature,
    title: c.title,
    testType: c.type, priority: c.pri, tenant: c.tenant,
    userRole: "Tenant A / Tenant B - Reference Data Analyst",
    pre: `Two tenants provisioned. Tenant A reference records carry CIF/account markers TENANTA-CIF-001 / TENANTA-ACC-001; Tenant B uses TENANTB-CIF-001 / TENANTB-ACC-001. Search box and filter bar exist (${FSD.rdr}).`,
    data: c.title.includes("Common") ? "Account number TENANTA-ACC-001 exists in both tenants." : c.title.includes("Country") ? "Country Master record with risk rating per Internal Bank Country Risk Policy." : c.title.includes("Audit") ? "Tenant A reference record with audit history." : c.title.includes("create") ? "New reference record TENANTA-CIF-###." : "TENANTA-CIF-001 / TENANTB-CIF-001 / TENANTA-ACC-001 / TENANTB-ACC-001.",
    steps: c.steps,
    expected: c.title.includes("Country") ? "Country risk-rating configuration remains tenant-scoped." : c.title.includes("cannot") ? "Tenant A cannot update/delete a Tenant B reference record." : "Reference data, search/filter, CRUD, and audit remain tenant-scoped.",
    db: "Reference-master rows tenant-scoped.",
    tenantAState: "Tenant A reference data only.",
    tenantBState: "Tenant B reference data only.",
    security: "Reference-data CRUD/search/audit paths preserve tenant scoping.",
    fsdRef: `${MT_PROMPT} (MT-002) + ${FSD.rdr} (search box §4, filter bar §5, Audit Trail tab, Country Master §10, Data Export §11).`,
    figmaRef: FIGMA.rdr,
    auto: c.type === "Negative" ? "Yes" : "Yes",
    remarks: c.title.includes("Country") ? "Also catches shared master-data changes bleeding across tenants." : "",
  });
}

// ===========================================================================
// N. RBAC + MULTI-TENANCY (MT-001 + MT-002)
// ===========================================================================
const rbacCases = [
  {
    title: "Tenant A Compliance Manager's elevated rights do not grant any access to Tenant B",
    type: "Authorization", pri: "Critical",
    steps: [
      LOGIN_STEP("Tenant A Compliance Manager", "Tenant A"),
      "Confirm the Compliance Manager role has elevated rights (Confirm Match, Escalate) within Tenant A.",
      "Attempt to open a Tenant B screening record / navigate to a Tenant B URL.",
      "Verify access is denied.",
    ],
  },
  {
    title: "Tenant B Administrator cannot access Tenant A data",
    type: "Authorization", pri: "Critical",
    steps: [
      LOGIN_STEP("Tenant B Administrator", "Tenant B"),
      "Attempt to open a Tenant A customer, watchlist, or report URL/identifier.",
      "Attempt to search Tenant A data.",
      "Verify all attempts are denied.",
    ],
  },
  {
    title: "Tenant A Read-Only Auditor cannot act outside Tenant A or on other tenants",
    type: "Authorization", pri: "High",
    steps: [
      LOGIN_STEP("Tenant A Read-Only Auditor", "Tenant A"),
      "Confirm read-only access within Tenant A (view screens/reports only).",
      "Attempt an action (e.g., disposition/export) and verify it is blocked per role.",
      "Attempt to reach Tenant B data and verify denial.",
    ],
  },
  {
    title: "Role permission and tenant boundary are enforced independently (RBAC + tenancy matrix)",
    type: "Authorization", pri: "High",
    steps: [
      "Using the role×tenant matrix (Tenant A Admin, Tenant A Compliance Analyst, Tenant B Admin, Tenant B Compliance Analyst),"
        + " log in as each combination.",
      "For each: record the modules/actions allowed (role) and the data visible (tenant).",
      "Verify a higher role in Tenant A never automatically grants access to Tenant B data, and vice-versa.",
    ],
  },
];
for (const c of rbacCases) {
  add({
    req: "MT-001 + MT-002", module: "Application (Cross-cutting)", feature: "RBAC + Multi-Tenancy",
    title: c.title,
    testType: c.type, priority: c.pri, tenant: "Cross-Tenant",
    userRole: c.title.includes("Manager") ? "Tenant A Compliance Manager / Tenant B user" : c.title.includes("Administrator") ? "Tenant B Administrator / Tenant A user" : c.title.includes("Auditor") ? "Tenant A Read-Only Auditor / Tenant B user" : "Admin + Compliance Analyst in both tenants",
    pre: `Role-tenant matrix provisioned per ${FSD.batch} §2 (Compliance Analyst, Compliance Manager, Operations Analyst, System Administrator, Read-Only Auditor).`,
    data: "Cross-tenant identifiers/URLs for screening, customer, watchlist, and report records.",
    steps: c.steps,
    expected: "Role permissions and tenant boundaries are enforced independently; elevated role in one tenant never grants access to another tenant, and vice-versa.",
    db: "No cross-schema access even with elevated role.",
    tenantAState: "Elevated rights apply within Tenant A only.",
    tenantBState: "Inaccessible regardless of Tenant A role seniority.",
    security: "Role != tenant; both enforced.",
    fsdRef: `${MT_PROMPT} (MT-001, MT-002 §20) + ${FSD.batch} §2 (roles).`,
    figmaRef: "Application shell/navigation per module Figma files.",
    auto: "No (RBAC/authorization flows excluded unless QA_INCLUDE_AUTH_CASES=1)",
    remarks: "Role list verified against FSD; ${TBC} other roles in other FSDs.",
  });
}

// ===========================================================================
// O. NEGATIVE SECURITY & DATA LEAKAGE (MT-002)
// ===========================================================================
const negCases = [
  {
    title: "Error/validation messages must not reveal the existence of another tenant's data",
    type: "Negative", pri: "High",
    feature: "Data Leakage Prevention (Error Messages)",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Search/open records using another tenant's unique identifiers in each module (customer ID, account number, list name, report ID).",
      "Observe the returned error/empty-state messages.",
      "Verify messages are generic (e.g., 'No records found') and never state that data belongs to another tenant.",
    ],
  },
  {
    title: "Counters, badges, and dashboard statistics never include other-tenant data",
    type: "Negative", pri: "High",
    feature: "Data Leakage Prevention (Counters & Statistics)",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Open list/dashboard screens with count badges and statistics in several modules.",
      "Cross-check each counter against a Tenant A-only filtered search.",
      "Verify no counter includes Tenant B records.",
    ],
  },
  {
    title: "Dropdowns, autocompletes, and reference pickers expose only operating-tenant values",
    type: "Negative", pri: "High",
    feature: "Data Leakage Prevention (Dropdowns / Autocomplete)",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Open pickers/dropdowns/autocomplete across modules (lists library, reference masters, filters).",
      "Type shared substrings.",
      "Verify only Tenant A values are offered.",
    ],
  },
  {
    title: "Pagination, sorting, and related-record navigation stay within the operating tenant",
    type: "Negative", pri: "Medium",
    feature: "Data Leakage Prevention (Pagination / Sorting / Related Records)",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "View a long Tenant A list, sort columns, and page through records.",
      "Navigate from a record to related records/details.",
      "Verify every page, sorted order, and related record set contains Tenant A data only.",
    ],
  },
];
for (const c of negCases) {
  add({
    req: "MT-002", module: "Application (Cross-cutting)", feature: c.feature,
    title: c.title,
    testType: c.type, priority: c.pri, tenant: "Cross-Tenant",
    userRole: "Tenant A / Tenant B user",
    pre: "Two tenants with parallel datasets so leakage is detectable; both tenants logged in across the test lanes.",
    data: "Shared substrings and foreign unique identifiers (see Test Data sheet).",
    steps: c.steps,
    expected: "No Tenant A information is exposed to Tenant B and vice-versa through the surfaces under test.",
    db: "N/A (UI-level observation).",
    tenantAState: "No leakage of Tenant A into Tenant B.",
    tenantBState: "No leakage of Tenant B into Tenant A.",
    security: "Passive leakage surfaces verified.",
    fsdRef: `${MT_PROMPT} (MT-002 §22).`,
    figmaRef: "Refer to module Figma for the relevant screens.",
    auto: c.title.includes("dropdowns") ? "Yes" : "Yes",
    remarks: "",
  });
}

// ===========================================================================
// P. CROSS-MODULE TENANT ISOLATION (MT-002)
// ===========================================================================
const xmCases = [
  {
    title: "Tenant A end-to-end: customer → risk/KYC → screening → report stays within Tenant A",
    type: "Integration", pri: "Critical",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Create/identify customer TENANTA-CUST-001 in " + NAV.c360 + ".",
      "Open the customer in the downstream screens (risk rating, screening results).",
      "Run a screening and generate a report for this customer.",
      "Verify the downstream records (risk, screening, report) reference the Tenant A customer only.",
      "Verify no Tenant B record is pulled into any downstream step.",
    ],
  },
  {
    title: "Tenant B end-to-end workflow cannot see Tenant A downstream records",
    type: "Integration", pri: "Critical",
    steps: [
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Run the same workflow (customer → risk → screening → report) for a Tenant B customer.",
      "At each downstream step, attempt to locate the Tenant A customer/records via search and identifiers.",
      "Verify Tenant A downstream records are never visible or referenced.",
    ],
  },
  {
    title: "Configuration change by Tenant A affects only Tenant A downstream screening behaviour",
    type: "Integration", pri: "High",
    steps: [
      LOGIN_STEP("Tenant A", "Tenant A"),
      "Change a screening configuration (watchlist/threshold) in " + NAV.config + ".",
      "Run a screening in " + NAV.manual + " and observe the effect of the changed configuration.",
      LOGOUT_STEP("Tenant A"),
      LOGIN_STEP("Tenant B", "Tenant B"),
      "Run the same screening scenario.",
      "Verify Tenant B screening is unaffected by Tenant A's configuration change.",
    ],
  },
];
for (const c of xmCases) {
  add({
    req: "MT-002", module: "Application (Cross-cutting)", feature: "Cross-Module Tenant Isolation",
    title: c.title,
    testType: c.type, priority: c.pri, tenant: "Cross-Tenant",
    userRole: "Tenant A / Tenant B - Analyst across modules",
    pre: "Modules linked per FSD relationships (Customer 360 ↔ screening ↔ MIS); both tenants have parallel datasets.",
    data: c.title.includes("Config") ? "Tenant A watchlist/threshold change." : "TENANTA-CUST-001 / TENANTB-CUST-001 end-to-end flows.",
    steps: c.steps,
    expected: "All downstream data remains associated with the operating tenant; the opposite tenant never sees the other's downstream records or configuration effects.",
    db: "Cross-module joins remain tenant-scoped.",
    tenantAState: "Downstream data bound to Tenant A.",
    tenantBState: "Downstream data bound to Tenant B.",
    security: "End-to-end isolation across module boundaries.",
    fsdRef: `${MT_PROMPT} (MT-002 §19) + ${FSD.batch}, ${FSD.manual}, ${FSD.c360}, ${FSD.config}.`,
    figmaRef: "Module Figma files per workflow step.",
    auto: "Partial (long E2E; requires seeded two-tenant data)",
    remarks: "Requires both tenants' data available in the test environment.",
  });
}

// ===========================================================================
// Finalize: assign IDs, sort, build rows
// ===========================================================================
const HEADERS = [
  "Test Case ID", "Requirement ID", "Module", "Feature", "Test Scenario", "Test Type",
  "Priority", "Tenant", "User / Role", "Preconditions", "Test Data", "Test Steps",
  "Expected Result", "Database Validation", "Tenant A Expected State", "Tenant B Expected State",
  "Security Validation", "FSD Reference", "Figma Reference", "Automation Candidate", "Remarks",
];

function defRow(def, id) {
  // Replace template placeholders
  const render = (s) => String(s)
    .replace(/\$\{TBC\}/g, TBC)
    .replace(/`/g, "");
  return [
    id,
    def.req,
    def.module,
    def.feature,
    def.scenarioTitle || def.title || def.feature,
    def.testType,
    def.priority,
    def.tenant,
    def.userRole,
    render(def.pre),
    render(def.data),
    render(Array.isArray(def.steps) ? def.steps.map((s, i) => `${i + 1}. ${s}`).join("\n") : def.steps),
    render(def.expected),
    render(def.db),
    render(def.tenantAState),
    render(def.tenantBState),
    render(def.security),
    render(def.fsdRef),
    def.figmaRef || "",
    def.auto,
    render(def.remarks),
  ];
}

// assign scenario titles where absent
let idx = 1;
const rows = CASES.map((d) => defRow(d, `MT-M1-${String(idx++).padStart(3, "0")}`));

// ---- COVERAGE MATRIX sheet -------------------------------------------------
// rows are arrays: [0]=id, [1]=req, [2]=module, [3]=feature, [5]=testType, [7]=tenant
const F = 3; // feature index
const T = 5; // test type index
function casesBy(pred) {
  return rows.filter((r) => pred(r)).length;
}
function feat(r) {
  return String(r[F] || "");
}
function type(r) {
  return String(r[T] || "");
}
const coverageRows = [
  ["Area", "Tenant A", "Tenant B", "Cross-Tenant", "Case Count"],
  ["Login", "✓", "✓", "✓", casesBy((r) => feat(r) === "Tenant Authentication")],
  ["Session", "✓", "✓", "✓", casesBy((r) => feat(r).startsWith("Session"))],
  ["Tenant Context after Authentication", "✓", "✓", "✓", casesBy((r) => feat(r) === "Tenant Context after Authentication")],
  ["Navigation", "✓", "✓", "✓", casesBy((r) => type(r) === "Functional" || type(r) === "Authorization")],
  ["Create", "✓", "✓", "✓", casesBy((r) => feat(r).includes("Create"))],
  ["Read", "✓", "✓", "✓", casesBy((r) => feat(r).includes("List / Data Isolation") || feat(r).includes("Data Isolation"))],
  ["Search", "✓", "✓", "✓", casesBy((r) => feat(r).includes("Search"))],
  ["Filter", "✓", "✓", "✓", casesBy((r) => feat(r).includes("Filter"))],
  ["Update", "✓", "✓", "✓", casesBy((r) => feat(r).includes("update") || feat(r).includes("Update") || feat(r).includes("CRUD"))],
  ["Delete", "✓", "✓", "✓", casesBy((r) => (feat(r) + " " + r[4]).toLowerCase().includes("delete"))],
  ["Reports", "✓", "✓", "✓", casesBy((r) => feat(r).includes("Report"))],
  ["Export", "✓", "✓", "✓", casesBy((r) => feat(r).includes("Export"))],
  ["Audit", "✓", "✓", "✓", casesBy((r) => feat(r).includes("Audit"))],
  ["Direct URL / Deep-link", "✓", "✓", "✓", casesBy((r) => feat(r).includes("Direct URL") || feat(r).includes("Deep-link") || feat(r).includes("Report ID"))],
  ["Identifier Manipulation", "✓", "✓", "✓", casesBy((r) => feat(r).includes("Identifier"))],
  ["Database Schema", "✓", "✓", "✓", casesBy((r) => type(r) === "Database")],
  ["Security Manipulation / Negative", "✓", "✓", "✓", casesBy((r) => type(r) === "Negative" || type(r) === "Security")],
  ["RBAC", "✓", "✓", "✓", casesBy((r) => feat(r).startsWith("RBAC"))],
  ["Maker-Checker / Approval", "✓", "✓", "✓", casesBy((r) => feat(r).includes("Maker") || feat(r).includes("Approval"))],
  ["Cross-module", "✓", "✓", "✓", casesBy((r) => feat(r).startsWith("Cross-Module"))],
];
coverageRows.push(["TOTAL", "", "", "", rows.length]);
const perModule = {};
for (const r of rows) perModule[r[2]] = (perModule[r[2]] || 0) + 1;
const moduleRows = Object.entries(perModule).map(([m, c]) => ["", "Module: " + m, "", "", c]);
coverageRows.push([], ["By Module"], ...moduleRows);

// ---- TEST DATA sheet --------------------------------------------------------
const testDataRows = [
  ["Data Group", "Tenant A", "Tenant B", "Purpose", "Notes"],
  ["Root customer", "TENANTA-CUST-001 / Tenant A Customer", "TENANTB-CUST-001 / Tenant B Customer", "Detect cross-tenant customer leakage in every module", "All modules that display customers"],
  ["Root account", "TENANTA-ACC-001", "TENANTB-ACC-001", "Detect cross-tenant account leakage", "Customer 360, Reference Data Registry"],
  ["CIF (reference data)", "TENANTA-CIF-001", "TENANTB-CIF-001", "Detect cross-tenant reference-master leakage", "Reference Data Registry search/filter"],
  ["Screening submission (batch)", "TENANT-A-BS-001/002", "TENANT-B-BS-001/002", "Detect cross-tenant screening leakage", "Batch Screening"],
  ["Manual screening subject", "Tenant A Manual Subject / TENANTA-MSUB-001 / tenant-a@test.com", "Tenant B Manual Subject / TENANTB-MSUB-001 / tenant-b@test.com", "Detect cross-tenant manual-screening leakage", "Manual Screening create/search"],
  ["De-dup group", "TENANT-A-DD-001", "TENANT-B-DD-001", "Detect cross-tenant de-dup group leakage", "Dedup Screening (group badges, export)"],
  ["Watchlist profile", "TENANT-A-WL-001", "TENANT-B-WL-001", "Detect cross-tenant configuration leakage", "Screening Configuration"],
  ["Keyword", "TENANTA-KEY-001", "TENANTB-KEY-001", "Detect cross-tenant keyword leakage", "Keyword Manager"],
  ["Custom list", "TENANT-A-CL-001", "TENANT-B-CL-001", "Detect cross-tenant custom-list leakage", "Custom List Manager"],
  ["Exception list", "TENANT-A-EL-001", "TENANT-B-EL-001", "Detect cross-tenant exception-list leakage", "Exception List Manager"],
  ["Ignore word", "TENANTAWORD1", "TENANTBWORD1", "Detect cross-tenant ignore-word leakage", "Ignore Words Configuration"],
  ["Missing Mandatory template", "TENANT-A-TPL-001", "TENANT-B-TPL-001", "Detect cross-tenant template leakage", "Missing Mandatory"],
  ["Common business record (same identity in both tenants)", "CUST001 / Rajesh Kumar / PAN ABCDE1234F", "CUST001 / Rajesh Kumar / PAN ABCDE1234F", "Detect global/tenant-less queries (UPDATE/DELETE/SELECT without tenant predicate)", "Manual Screening, Customer 360, Reference Data Registry, Keyword Manager, Screening Configuration, Custom/Exception/Ignore modules — critical leakage detector"],
  ["DB schema (conceptual)", "TENANT_A", "TENANT_B", "Verify schema-level isolation for CRUD", "Actual schema names ${TBC}; shared physical database"],
];

// ---- REQUIREMENT TRACEABILITY sheet ------------------------------------------
const reqGroups = [
  { req: "MT-001", desc: "Authentication isolation — users authenticate and operate only within their own tenant; no cross-tenant login/context/token/session access.", keys: ["Tenant Authentication", "Session", "Tenant Context", "RBAC"] },
  { req: "MT-002", desc: "Data isolation — view/search/filter/open/modify/delete/export/reports/audit/URLs/identifiers/scross-module stay tenant-scoped.", keys: ["Data Isolation", "Search", "Filter", "CRUD", "Report", "Export", "Audit", "Direct URL", "Identifier", "Maker", "Approval", "Upload", "Counts", "Dropdowns", "Pagination", "Cross-Module", "List", "Reference", "Template", "Risk"] },
  { req: "MT-003", desc: "Database schema isolation — CRUD executed against the tenant's own schema (TENANT_A / TENANT_B, names to be confirmed) in a shared physical DB.", keys: ["Database"] },
];
const traceRows = [["Requirement ID", "Requirement Description", "Covering Test Case IDs"]];
for (const g of reqGroups) {
  const matched = rows.filter((r) => {
    if (g.req === "MT-003") return r[1].includes("MT-003");
    if (g.req === "MT-001") return r[1].includes("MT-001");
    return r[1].includes("MT-002");
  }).map((r) => r[0]);
  traceRows.push([g.req, g.desc, matched.join(", ")]);
}

// ---- ASSUMPTIONS & TBC sheet --------------------------------------------------
const assumptions = [
  ["ID", "Item", "Status", "Details"],
  ["A1", "Tenant identifiers (Tenant A / Tenant B)", "To Be Confirmed", "Conceptual placeholders from the generation prompt; actual account/tenant IDs used by the AML deployment must be confirmed. FSD/Figma define no tenant terminology."],
  ["A2", "Database schema names (TENANT_A / TENANT_B)", "To Be Confirmed", "Multi-tenant architecture (schema-per-tenant on shared physical DB) is stated only in the generation prompt; no FSD defines the DB model. Actual schema/table/column names must be confirmed before any DB validation or SQL scripting."],
  ["A3", "Login tenant selection", "To Be Confirmed", "Neither FSD nor Figma shows a tenant/account selector on the login screen (Clari5 Command Center /clari5-cc/login). Whether such a field exists must be confirmed from live UI."],
  ["A4", "Tenant-switch control", "To Be Confirmed", "No UI control for switching tenant after authentication is present in Figma. If one exists in live UI, a dedicated test lane is required."],
  ["A5", "Deep-link / record URL structure", "To Be Confirmed", "FSDs do not document record-specific URLs. URL/query/path parameter names must be derived from the live UI before executing direct-URL and identifier-manipulation cases."],
  ["A6", "API / request parameter names", "To Be Confirmed", "Identifier/tenant manipulation cases assume request fields observable in live traffic; names must not be invented."],
  ["A7", "Error messages", "To Be Confirmed", "No FSD defines cross-tenant access error messages; negative cases assert generic 'no access/no records' outcomes rather than specific strings."],
  ["A8", "Two-tenant provisioning", "To Be Confirmed", "Test cases require two real tenants (schemas + users) provisioned in the target environment. Roles are per-module FSD; confirm which roles exist per tenant."],
  ["A9", "Tenant enable/disable and user disablement", "To Be Confirmed", "Included as conditional scenarios; only executed if such administration exists."],
  ["A10", "Same-business-data per tenant model", "To Be Confirmed", "The prompt permits identical business identifiers in both tenants (e.g., CUST001). Confirm the live tenancy model allows it; these rows are the strongest detector of missing tenant predicates (global/tenant-less queries) and must be exercised with tenant-distinguishing timestamps."],
  ["A11", "Audit UI surfaces", "To Be Confirmed", "Some audit-trail UIs (per-module Audit Trail tabs/logs) may not exist in Figma; confirm from live UI which audit surfaces are exposed."],
  ["A12", "Export file formats", "Partially defined", "Dedup export CSV/PDF/Print and Batch/Manual Export Report are defined in FSDs; other export targets need live confirmation."],
  ["A13", "Database access for validation", "To Be Confirmed", "DB-schema cases require DBA/read access to the shared physical database; mark as environment-blocked otherwise."],
  ["A14", "Coverage honesty", "Given the FSD/Figma contain no multi-tenancy design, per-case behaviour is asserted at the concept level (tenant-scoped outcome) rather than invented UI/result detail. 'To Be Confirmed' items above are the gaps to close before automation."],
  ["A15", "Concurrent multi-session support", "To Be Confirmed", "Whether the application permits two tenants logged in concurrently in distinct browsers/profiles must be confirmed; case is conditional."],
  ["A16", "RBAC role enumeration", "Partially defined", "Roles taken from Batch Screening FSD §2 (Compliance Analyst/Manager, Operations Analyst, System Administrator, Read-Only Auditor) and other module FSDs; full user-role matrix per tenant must be confirmed."],
];

// ---------------------------------------------------------------------------
// Build workbook
// ---------------------------------------------------------------------------
function sheetFromAOA(rowsArr, name) {
  const ws = xlsx.utils.aoa_to_sheet(rowsArr);
  ws["!cols"] = rowsArr[0].map((h, i) => ({
    wch: Math.min(60, Math.max(h ? h.length + 2 : 12, name === "Multi-Tenancy Test Cases" ? (i === 11 ? 70 : i === 12 ? 50 : 30) : 12)),
  }));
  return ws;
}

const wb = xlsx.utils.book_new();
const sanitize = (a) => a.map((row) => row.map((c) => String(c).replace(/\$\{TBC\}/g, "To Be Confirmed")));
xlsx.utils.book_append_sheet(wb, sheetFromAOA([HEADERS, ...rows], "Multi-Tenancy Test Cases"), "Multi-Tenancy Test Cases");
xlsx.utils.book_append_sheet(wb, sheetFromAOA(coverageRows, "Coverage Matrix"), "Coverage Matrix");
xlsx.utils.book_append_sheet(wb, sheetFromAOA(sanitize(testDataRows), "Test Data"), "Test Data");
xlsx.utils.book_append_sheet(wb, sheetFromAOA(sanitize(traceRows), "Requirement Traceability"), "Requirement Traceability");
xlsx.utils.book_append_sheet(wb, sheetFromAOA(sanitize(assumptions), "Assumptions & TBC"), "Assumptions & TBC");

fs.mkdirSync(OUT_DIR, { recursive: true });
xlsx.writeFile(wb, OUT_FILE);

console.log("Wrote:", OUT_FILE);
console.log("Test cases:", rows.length);
console.log("By module:", JSON.stringify(perModule));