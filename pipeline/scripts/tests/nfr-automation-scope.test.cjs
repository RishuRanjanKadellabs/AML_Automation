const assert = require("node:assert/strict");
const test = require("node:test");
const {
  assessAutomationFeasibility,
} = require("../normalize-testcases.js");
const {
  isAuthenticationNfrCase,
  AUTH_AUTOMABLE,
} = require("../nfr-auth-automation-scope.cjs");
const {
  isEligible,
} = require("../split-eligible-batches.js");
const {
  findExistingSpec,
} = require("../prepare-generator-handoff.js");
const {
  activeBatchCaseIds,
} = require("../strict-live-ui-evidence.cjs");

function row(automable) {
  return {
    testSteps: "1. Open the module.\n2. Verify the page.",
    expectedResult: "The page is visible.",
    rawCells: { Automable: automable },
  };
}

test("excludes declared load and infrastructure cases from Playwright", () => {
  const feasibility = assessAutomationFeasibility(
    row("No - Load/Infra (k6/JMeter — outside Playwright E2E)")
  );

  assert.equal(feasibility.rating, "manual-only");
  assert.equal(
    isEligible({
      validationStatus: "Valid with warnings",
      automationFeasibility: feasibility,
    }),
    false
  );
});

test("does not force declared partial cases into the Playwright batch scope", () => {
  const feasibility = assessAutomationFeasibility(
    row("Partial - UI observation only")
  );

  assert.equal(feasibility.rating, "partial");
  assert.equal(
    isEligible({
      validationStatus: "Valid with warnings",
      automationFeasibility: feasibility,
    }),
    false
  );
});

test("retains declared UI and SLA smoke cases in Playwright scope", () => {
  for (const automable of [
    "Yes - UI (Playwright)",
    "Yes - SLA smoke (single-user timing in Playwright)",
  ]) {
    const feasibility = assessAutomationFeasibility(row(automable));
    assert.equal(feasibility.rating, "automatable");
    assert.equal(
      isEligible({
        validationStatus: "Valid with warnings",
        automationFeasibility: feasibility,
      }),
      true
    );
  }
});

test("reuses the existing Milestone 1 module spec", () => {
  assert.equal(
    findExistingSpec("Batch Screening", 1),
    "tests/milestone1/test-cases/ScreeningModule/batchScreeningTests/batch-screening.spec.ts"
  );
});

test("excludes unauthenticated, unauthorized-role, and other role-based NFR cases unless QA_INCLUDE_AUTH_CASES=1", () => {
  const unauthenticated = {
    title: "Verify unauthenticated user cannot access KYC Gap Report URL",
    rawCells: { Automable: "Yes - UI (Playwright)" },
    testSteps: "1. Open the URL without a session.",
    expectedResult: "Access is denied.",
  };
  const unauthorizedRole = {
    title: "Verify unauthorized role cannot perform restricted actions on Batch Screening",
    rawCells: { Automable: "Yes - UI (Playwright)" },
    testSteps: "1. Log in as a user without permission.",
    expectedResult: "Restricted actions cannot be completed.",
  };
  const authorizedRoles = {
    title:
      "Verify that all authorized AML roles can access the De-Dup Screening module and use search filters.",
    rawCells: { Automable: "Yes - UI (Playwright)" },
    testSteps: "1. Open De-dup Screening as each authorized role.",
    expectedResult: "Each authorized role can use search filters.",
  };

  assert.equal(isAuthenticationNfrCase(unauthenticated), true);
  assert.equal(assessAutomationFeasibility(unauthenticated).rating, "partial");
  assert.equal(isAuthenticationNfrCase(unauthorizedRole), true);
  assert.equal(assessAutomationFeasibility(unauthorizedRole).rating, "partial");
  assert.equal(isAuthenticationNfrCase(authorizedRoles), true);
  assert.equal(assessAutomationFeasibility(authorizedRoles).rating, "partial");
  assert.match(AUTH_AUTOMABLE, /Authentication/i);
});

test("keeps TLS and keyboard NFR cases in Playwright scope", () => {
  const tls = {
    title:
      "Verify Batch Screening enforces TLS encryption in transit and AES-256 at rest.",
    rawCells: { Automable: "Yes - UI (Playwright)" },
    testSteps: "1. Open Batch Screening.\n2. Verify HTTPS.",
    expectedResult: "Requests use HTTPS.",
  };
  const keyboard = {
    title:
      "Verify keyboard navigation reaches search, filters, grid, and pagination controls in logical tab order",
    rawCells: { Automable: "Yes - UI (Playwright)" },
    testSteps: "1. Open KYC Gap Report.\n2. Tab through search and filters.",
    expectedResult: "Controls are reachable by keyboard.",
  };

  assert.equal(isAuthenticationNfrCase(tls), false);
  assert.equal(assessAutomationFeasibility(tls).rating, "automatable");
  assert.equal(isAuthenticationNfrCase(keyboard), false);
  assert.equal(assessAutomationFeasibility(keyboard).rating, "automatable");
});

test("strict live UI scope excludes explicitly blocked or deferred cases", () => {
  const batchPlan = {
    batches: [{ index: 1, caseIds: ["TC-1", "TC-2", "TC-3"] }],
  };
  const manifest = {
    blockedUiCaseIds: ["TC-2"],
    deferredCaseIds: ["TC-3"],
  };

  assert.deepEqual(activeBatchCaseIds(batchPlan, 1, manifest), ["TC-1"]);
});
