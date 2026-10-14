/**
 * Unauthenticated / session-expiry / unauthorized-role / multi-role RBAC cases
 * stay outside default Playwright scope. Session login itself is always required
 * on 2506 (see authentication-bypass-mandatory.mdc). Include negative/RBAC cases
 * only when the user sets QA_INCLUDE_AUTH_CASES=1.
 */

const AUTH_AUTOMABLE =
  "Partial - Authentication (automate only when QA_INCLUDE_AUTH_CASES=1)";

const AUTH_EXCLUSION_REASON =
  "Unauthenticated access, session expiry, unauthorized-role, and other multi-role RBAC cases are excluded from default Playwright scope (set QA_INCLUDE_AUTH_CASES=1 to include). Session login with .env credentials remains required for all signed-in module flows.";

function isAuthAutomationIncluded() {
  return String(process.env.QA_INCLUDE_AUTH_CASES || "").trim() === "1";
}

function nfrAuthCaseText(row = {}) {
  return [
    row.testCaseId,
    row["Test Case ID"],
    row.title,
    row.taskDescription,
    row["Task Description"],
    row.businessObjective,
    row["Acceptance Criteria"],
    row.rawCells?.["Task Description"],
    row.rawCells?.["Acceptance Criteria"],
  ]
    .filter(Boolean)
    .join("\n");
}

function isAuthenticationNfrCase(row = {}) {
  if (isAuthAutomationIncluded()) return false;
  const text = nfrAuthCaseText(row);
  if (!text.trim()) return false;
  return (
    /unauthenticat/i.test(text) ||
    /unauthorized role/i.test(text) ||
    /only authenticated/i.test(text) ||
    /session expir/i.test(text) ||
    /authorized (AML )?roles/i.test(text) ||
    /role-based access/i.test(text) ||
    /\bRBAC\b/i.test(text) ||
    /without permission/i.test(text) ||
    /restricted role/i.test(text) ||
    /read-only auditor/i.test(text) ||
    /lacks Maker permission/i.test(text) ||
    /lacks Checker permission/i.test(text)
  );
}

function authenticationFeasibility() {
  return {
    rating: "partial",
    rationale: AUTH_EXCLUSION_REASON,
    blockers: [AUTH_AUTOMABLE],
  };
}

module.exports = {
  AUTH_AUTOMABLE,
  AUTH_EXCLUSION_REASON,
  isAuthAutomationIncluded,
  isAuthenticationNfrCase,
  authenticationFeasibility,
};
