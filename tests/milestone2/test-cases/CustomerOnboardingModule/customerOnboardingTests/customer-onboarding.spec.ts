/* eslint-disable playwright/valid-title -- QA fidelity requires the Test Case ID prefix. */
// source: pipeline/test-data/Milestone2/Test Cases/Customer Onboarding Test Cases.xlsx — batches 1–2 + expanded batch 1
import path from "path";
import { test, expect } from "../../../../../fixtures/milestone2-shared-session";
import CustomerOnboardingPage from "../../../pages/CustomerOnboardingModule/CustomerOnboardingPages/CustomerOnboardingPage";

const SAMPLE_EVIDENCE_PDF = path.resolve(
  process.cwd(),
  "tests/fixtures/customer-onboarding/sample-evidence.pdf",
);
const SAMPLE_L2_EVIDENCE_PDF = path.resolve(
  process.cwd(),
  "tests/fixtures/customer-onboarding/sample-l2-evidence.pdf",
);

test.describe("Customer Onboarding Tests", () => {
  let coPage: CustomerOnboardingPage;

  test.beforeEach(async ({ sharedPage }) => {
    coPage = new CustomerOnboardingPage(sharedPage);
  });

  test("Test Case ID:CO-TC-014 - Verify Auto-Approve closes the case without Maker-Checker review", async ({
    testData,
  }) => {
    // Step 1: Open Onboarding MIS Reports.
    await coPage.navigateToMisReports(testData.baseUrl);
    await expect(coPage.main()).toContainText(/Onboarding MIS Reports/i);

    // Step 2: Click the Auto-Approved Onboarding Requests tab.
    await coPage.clickMisTab("autoApproved");
    await expect(coPage.main()).toContainText(/Auto-Decision Date|Status/i);

    // Step 3: Open a listed auto-approved prospect.
    const refId = await coPage.openFirstMisProspect();
    expect(refId.length).toBeGreaterThan(0);

    // Step 4: Confirm Status is Approved and Auto-Decision Date is present without Maker recommendation.
    await coPage.expectAutoApprovedDetail();
    await expect(coPage.main()).toContainText(/Approved/i);

    // Steps 5–14: Audit Trail / View Changes for the onboarding action.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, refId || "KYC");
  });

  test("Test Case ID:CO-TC-016 - Verify Auto-Reject closes the case without Maker-Checker review", async ({
    testData,
  }) => {
    // Step 1: Open Onboarding MIS Reports.
    await coPage.navigateToMisReports(testData.baseUrl);

    // Step 2: Click the Auto-Rejected Onboarding Requests tab.
    await coPage.clickMisTab("autoRejected");

    // Step 3: Open a listed auto-rejected prospect.
    const refId = await coPage.openFirstMisProspect();
    expect(refId.length).toBeGreaterThan(0);

    // Step 4: Confirm Status reflects Auto-Rejected / Rejected without Maker recommendation.
    await coPage.expectAutoRejectedDetail();

    // Steps 5–14: Audit Trail / View Changes.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, refId || "KYC");
  });

  test("Test Case ID:CO-TC-017 - Verify decisioning ranges take effect only after Checker approval", async ({
    testData,
  }) => {
    // Step 1: Open Configuration > Onboarding Configuration.
    await coPage.navigateToConfiguration(testData.baseUrl);
    const activeMax = await coPage.readAutoApproveMatchMax();
    const alreadyPending = await coPage.isConfigurationPendingLocked();

    if (!alreadyPending) {
      // Step 2: Change an Auto-Approve Match Score max value.
      const nextMax = activeMax === "20" ? "19" : "20";
      await coPage.setAutoApproveMatchMax(nextMax);

      // Steps 3–4: Enter Business Justification when prompted and Submit for Checker Approval.
      await coPage.submitConfigurationForChecker();
    }

    // Step 5: Confirm pending / awaiting checker and active ranges unchanged for intake.
    await coPage.expectConfigurationPendingUnchanged(activeMax);

    // Steps 6–8: Open 4-Eyes Pending Approvals and Review the Onboarding Configuration request.
    await coPage.navigateToFourEyes(testData.baseUrl);
    await coPage.openPendingApprovalsTab();
    await coPage.reviewOnboardingConfigurationRequest();

    // Steps 9–12: Change Summary, Business Justification, Proposed Change, Audit Timeline.
    await coPage.expectFourEyesReviewDetails(/CFG-|rule update|justification|Edit/i);
    await coPage.closeFourEyesReview();

    // Step 13: Return to Onboarding Configuration — prior active ranges remain in effect.
    await coPage.navigateToConfiguration(testData.baseUrl);
    await coPage.expectConfigurationPendingUnchanged(activeMax);

    // Steps 14–23: Audit Trail / View Changes for the configuration submit.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, "Onboarding");
  });

  test("Test Case ID:CO-TC-018 - Verify each decisioning rule can be enabled or disabled", async ({
    testData,
  }) => {
    // Step 1: Open Configuration > Onboarding Configuration.
    await coPage.navigateToConfiguration(testData.baseUrl);
    const activeMax = await coPage.readAutoApproveMatchMax();
    const alreadyPending = await coPage.isConfigurationPendingLocked();

    // Step 2: Locate enable switches for Auto-Approve, Manual Review, and Auto-Reject.
    await expect(coPage.main()).toContainText(/Auto-Approve Rule/i);
    await expect(coPage.main()).toContainText(/Manual Review Rule/i);
    await expect(coPage.main()).toContainText(/Auto-Reject Rule/i);
    const enableCount = await coPage.ruleEnableCheckboxes().count();
    expect(enableCount).toBeGreaterThanOrEqual(3);

    if (!alreadyPending) {
      // Step 3: Toggle one rule enable switch (Auto-Approve).
      await coPage.toggleFirstDecisioningRule();

      // Step 4: Enter Business Justification when prompted and Submit for Checker Approval.
      await coPage.submitConfigurationForChecker();
    } else {
      await coPage.expectTextVisible(/awaiting Checker approval|Rule inputs are locked/i);
    }

    // Step 5: Confirm toggle change is pending; prior enablement remains effective.
    await coPage.expectConfigurationPendingUnchanged(activeMax);

    // Steps 6–12: 4-Eyes Review — Module, Justification, Current/Proposed, Audit Timeline.
    await coPage.navigateToFourEyes(testData.baseUrl);
    await coPage.openPendingApprovalsTab();
    await coPage.reviewOnboardingConfigurationRequest();
    await coPage.expectFourEyesReviewDetails(/CFG-|rule update|Edit|Auto-Approve/i);
    await coPage.closeFourEyesReview();

    // Step 13: Source module unchanged until Checker Approve.
    await coPage.navigateToConfiguration(testData.baseUrl);
    await coPage.expectConfigurationPendingUnchanged(activeMax);

    // Steps 14–22: Audit Trail / View Changes.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, "Onboarding");
  });

  test("Test Case ID:CO-TC-022 - Submit Maker Approve with rationale and escalate to Checker", async ({
    testData,
  }) => {
    // Step 1: Open L1 Queue and open an Open case.
    await coPage.navigateToL1Queue(testData.baseUrl);
    const refId = await coPage.openFirstQueueCase();

    // Step 2: Review Screening Result.
    await coPage.expectTextVisible(/Screening & Risk Summary/i);

    // Step 3: Enter text in Rationale (required).
    const rationale = "Match analysis supports approval for onboarding";
    await coPage.selectDecisionOption("Approve");
    await coPage.fillMakerRationale(rationale);

    // Step 4: Click Approve.
    await coPage.clickApprove();

    // Step 5: Confirm case status becomes Pending at L2 and appears on L2 Queue.
    await coPage.expectCaseEscalatedToL2(testData.baseUrl, refId);

    // Steps 6–15: Audit Trail / View Changes.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, refId);
  });

  test("Test Case ID:CO-TC-023 - Submit Maker Reject with rationale and escalate to Checker", async ({
    testData,
  }) => {
    // Step 1: Open L1 Queue and open an Open case.
    await coPage.navigateToL1Queue(testData.baseUrl);
    const refId = await coPage.openFirstQueueCase();

    // Step 2: Enter text in Rationale (required).
    const rationale = "Match analysis supports rejection";
    await coPage.selectDecisionOption("Reject");
    await coPage.fillMakerRationale(rationale);

    // Step 3: Click Reject.
    await coPage.clickReject();

    // Step 4: Confirm case status becomes Pending at L2 on L2 Queue.
    await coPage.expectCaseEscalatedToL2(testData.baseUrl, refId);

    // Steps 5–14: Audit Trail / View Changes.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, refId);
  });

  test("Test Case ID:CO-TC-024 - Record Checker Approve with comment and send approval to CBS", async ({
    testData,
  }) => {
    // Step 1: Open L2 Queue and open a Pending at L2 case.
    await coPage.navigateToL2Queue(testData.baseUrl);
    const refId = await coPage.openFirstQueueCase();

    // Step 2: Review Maker recommendation and rationale.
    await coPage.expectMakerRecommendationVisible();

    // Step 3: Enter text in Comment (required).
    await coPage.selectDecisionOption("Approve");
    await coPage.fillCheckerComment("L2 concurs with Maker approval");

    // Step 4: Click Approve.
    await coPage.clickApprove();

    // Step 5: Confirm case status becomes Approved.
    await expect(coPage.main()).toContainText(/Approved|Decision Summary|CBS/i);

    // Steps 6–15: Audit Trail / View Changes.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, refId);
  });

  test("Test Case ID:CO-TC-025 - Record Checker Reject with comment and send rejection to CBS", async ({
    testData,
  }) => {
    // Step 1: Open L2 Queue and open a Pending at L2 case.
    await coPage.navigateToL2Queue(testData.baseUrl);
    const refId = await coPage.openFirstQueueCase();

    // Step 2: Enter text in Comment (required).
    await coPage.selectDecisionOption("Reject");
    await coPage.fillCheckerComment("L2 rejects onboarding based on match risk");

    // Step 3: Click Reject.
    await coPage.clickReject();

    // Step 4: Confirm case status becomes Rejected.
    await expect(coPage.main()).toContainText(/Rejected|Decision Summary|CBS/i);

    // Steps 5–14: Audit Trail / View Changes.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, refId);
  });

  test("Test Case ID:CO-TC-026 - Bulk Approve selected L1 cases with one shared rationale", async ({
    testData,
  }) => {
    // Step 1: Open L1 Queue.
    await coPage.navigateToL1Queue(testData.baseUrl);

    // Step 2: Select two or more Open case checkboxes.
    const refs = await coPage.selectQueueCases(2);
    expect(refs.length).toBeGreaterThanOrEqual(2);

    // Steps 3–4: Enter one rationale and Click Approve Selected.
    const rationale = "Shared L1 approval rationale for selected prospects";
    await coPage.bulkDecideSelected("approve", rationale);

    // Step 5: Confirm selected cases move to Pending at L2.
    await coPage.navigateToL2Queue(testData.baseUrl);
    for (const ref of refs) {
      await coPage.expectTextVisible(new RegExp(ref, "i"));
    }

    // Steps 6–15: Audit Trail / View Changes.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, refs[0]);
  });

  test("Test Case ID:CO-TC-027 - Bulk Reject selected L1 cases with one shared rationale", async ({
    testData,
  }) => {
    // Step 1: Open L1 Queue.
    await coPage.navigateToL1Queue(testData.baseUrl);

    // Step 2: Select two or more Open case checkboxes.
    const refs = await coPage.selectQueueCases(2);
    expect(refs.length).toBeGreaterThanOrEqual(2);

    // Steps 3–4: Enter one rationale and Click Reject Selected.
    const rationale = "Shared L1 rejection rationale";
    await coPage.bulkDecideSelected("reject", rationale);

    // Step 5: Confirm selected cases move to Pending at L2.
    await coPage.navigateToL2Queue(testData.baseUrl);
    for (const ref of refs) {
      await coPage.expectTextVisible(new RegExp(ref, "i"));
    }

    // Steps 6–15: Audit Trail / View Changes.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, refs[0]);
  });

  test("Test Case ID:CO-TC-028 - Bulk Approve selected L2 cases with one shared comment", async ({
    testData,
  }) => {
    // Step 1: Open L2 Queue.
    await coPage.navigateToL2Queue(testData.baseUrl);

    // Step 2: Select two or more Pending at L2 cases.
    const refs = await coPage.selectQueueCases(2);
    expect(refs.length).toBeGreaterThanOrEqual(2);

    // Steps 3–4: Enter one comment in the bulk Comment field and Click Approve Selected.
    const comment = "Shared L2 approval comment";
    await coPage.fillBulkComment(comment);
    await coPage.bulkDecideSelected("approve", comment);

    // Step 5: Confirm selected cases close as Approved (leave L2 Queue).
    await coPage.expectCasesClosedFromL2(testData.baseUrl, refs);

    // Steps 6–15: Audit Trail / View Changes.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, refs[0]);
  });

  test("Test Case ID:CO-TC-029 - Bulk Reject selected L2 cases with one shared comment", async ({
    testData,
  }) => {
    // Step 1: Open L2 Queue.
    await coPage.navigateToL2Queue(testData.baseUrl);

    // Step 2: Select two or more Pending at L2 cases.
    const refs = await coPage.selectQueueCases(2);
    expect(refs.length).toBeGreaterThanOrEqual(2);

    // Steps 3–4: Enter one comment and Click Reject Selected.
    const comment = "Shared L2 rejection comment";
    await coPage.fillBulkComment(comment);
    await coPage.bulkDecideSelected("reject", comment);

    // Step 5: Confirm selected cases close as Rejected (leave L2 Queue).
    await coPage.expectCasesClosedFromL2(testData.baseUrl, refs);

    // Steps 6–15: Audit Trail / View Changes.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, refs[0]);
  });

  test("Test Case ID:CO-TC-031 - Attach supporting evidence on a Maker case review", async ({
    testData,
  }) => {
    // Step 1: Open L1 Queue and open an Open case.
    await coPage.navigateToL1Queue(testData.baseUrl);
    const refId = await coPage.openFirstQueueCase();

    // Step 2: Locate Attach Evidence / Supporting Documents.
    await coPage.locateAttachEvidenceSection();

    // Step 3: Upload a sample PDF evidence file.
    await coPage.attachEvidenceFile(SAMPLE_EVIDENCE_PDF, "sample-evidence.pdf");

    // Step 4: Confirm the attachment is listed on the case.
    await coPage.expectEvidenceAttached("sample-evidence.pdf");

    // Steps 5–14: Audit Trail / View Changes.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, refId);
  });

  test("Test Case ID:CO-TC-033 - Verify Maker submission moves the case to Pending at L2", async ({
    testData,
  }) => {
    // Step 1: Open L1 Queue and open an Open case.
    await coPage.navigateToL1Queue(testData.baseUrl);
    const refId = await coPage.openFirstQueueCase();

    // Step 2: Enter Rationale (required).
    const rationale = "Escalate for L2 concurrence";
    await coPage.selectDecisionOption("Approve");
    await coPage.fillMakerRationale(rationale);

    // Step 3: Click Approve.
    await coPage.clickApprove();

    // Step 4: Open L2 Queue and confirm the same Reference ID shows status Pending at L2.
    await coPage.expectCaseEscalatedToL2(testData.baseUrl, refId);
    await coPage.expectTextVisible(/Pending at L2|Onboarding Queue \[Checker\]|awaiting second-level/i);

    // Steps 5–14: Audit Trail / View Changes.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, refId);
  });

  test("Test Case ID:CO-TC-035 - Attach supporting evidence on a Checker case review", async ({
    testData,
  }) => {
    // Step 1: Open L2 Queue and open a Pending at L2 case.
    await coPage.navigateToL2Queue(testData.baseUrl);
    const refId = await coPage.openFirstQueueCase();

    // Step 2: Locate Attach Evidence / Supporting Documents.
    await coPage.locateAttachEvidenceSection();

    // Step 3: Upload a sample evidence file.
    await coPage.attachEvidenceFile(SAMPLE_L2_EVIDENCE_PDF, "sample-l2-evidence.pdf");

    // Step 4: Confirm the attachment is listed.
    await coPage.expectEvidenceAttached("sample-l2-evidence.pdf");

    // Steps 5–14: Audit Trail / View Changes.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, refId);
  });

  test("Test Case ID:CO-TC-037 - Verify Checker Approve closes the case as Approved with CBS confirmation", async ({
    testData,
  }) => {
    // Step 1: Open L2 Queue and open a Pending at L2 case.
    await coPage.navigateToL2Queue(testData.baseUrl);
    const refId = await coPage.openFirstQueueCase();

    // Step 2: Enter Comment (required).
    await coPage.selectDecisionOption("Approve");
    await coPage.fillCheckerComment("Final L2 approval");

    // Step 3: Click Approve.
    await coPage.clickApprove();

    // Step 4: Confirm case status Approved and CBS confirmation when available.
    await expect(coPage.main()).toContainText(/Approved|Decision Summary/i);
    await coPage.expectCbsConfirmationHint();

    // Steps 5–14: Audit Trail / View Changes.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, refId);
  });

  test("Test Case ID:CO-TC-038 - Verify Checker Reject closes the case as Rejected with CBS confirmation", async ({
    testData,
  }) => {
    // Step 1: Open L2 Queue and open a Pending at L2 case.
    await coPage.navigateToL2Queue(testData.baseUrl);
    const refId = await coPage.openFirstQueueCase();

    // Step 2: Enter Comment (required).
    await coPage.selectDecisionOption("Reject");
    await coPage.fillCheckerComment("Final L2 rejection");

    // Step 3: Click Reject.
    await coPage.clickReject();

    // Step 4: Confirm case status Rejected.
    await expect(coPage.main()).toContainText(/Rejected|Decision Summary/i);
    await coPage.expectCbsConfirmationHint();

    // Steps 5–14: Audit Trail / View Changes.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, refId);
  });

  test("Test Case ID:CO-TC-041 - Enable or disable the Auto-Approve rule on Configuration", async ({
    testData,
  }) => {
    // Step 1: Open Configuration > Onboarding Configuration.
    await coPage.navigateToConfiguration(testData.baseUrl);
    const activeMax = await coPage.readAutoApproveMatchMax();
    const alreadyPending = await coPage.isConfigurationPendingLocked();

    if (!alreadyPending) {
      // Step 2: Toggle the Auto-Approve enable switch.
      await coPage.toggleAutoApproveRule();

      // Step 3: Enter Business Justification when prompted and click Submit for Checker Approval.
      await coPage.submitConfigurationForChecker();
    } else {
      await coPage.expectTextVisible(/awaiting Checker approval|Rule inputs are locked/i);
    }

    // Steps 4–10: 4-Eyes Pending Approvals → Review Change Summary / Justification / Proposed Change / Audit Timeline.
    await coPage.navigateToFourEyes(testData.baseUrl);
    await coPage.openPendingApprovalsTab();
    await coPage.reviewOnboardingConfigurationRequest();
    await coPage.expectFourEyesReviewDetails(/CFG-|rule update|Edit|Auto-Approve|justification/i);
    await coPage.closeFourEyesReview();

    // Step 11: Return to Onboarding Configuration — prior active ranges remain until Checker Approve.
    await coPage.navigateToConfiguration(testData.baseUrl);
    await coPage.expectConfigurationPendingUnchanged(activeMax);

    // Steps 12–20: Audit Trail / View Changes.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, "Onboarding");
  });

  test("Test Case ID:CO-TC-042 - Set Match Score range for the Auto-Approve rule", async ({
    testData,
  }) => {
    // Step 1: Open Onboarding Configuration.
    await coPage.navigateToConfiguration(testData.baseUrl);
    const priorRange = await coPage.readAutoApproveMatchRange();
    const alreadyPending = await coPage.isConfigurationPendingLocked();

    if (!alreadyPending) {
      // Steps 2–3: Enter Auto-Approve Match Score min and max; confirm inputs accept values.
      await coPage.setAutoApproveMatchRange("0", "15");

      // Steps 4–5: Enter Business Justification and Submit for Checker Approval.
      await coPage.submitConfigurationForChecker();
    } else {
      await expect(coPage.autoApproveMatchInputs().nth(0)).toHaveValue(priorRange.min);
      await expect(coPage.autoApproveMatchInputs().nth(1)).toHaveValue(priorRange.max);
      await coPage.expectTextVisible(/awaiting Checker approval|Rule inputs are locked/i);
    }

    // Steps 6–12: 4-Eyes Review — Module, Justification, Current/Proposed, Audit Timeline.
    await coPage.navigateToFourEyes(testData.baseUrl);
    await coPage.openPendingApprovalsTab();
    await coPage.reviewOnboardingConfigurationRequest();
    await coPage.expectFourEyesReviewDetails(/CFG-|Match|rule update|Edit|justification/i);
    await coPage.closeFourEyesReview();

    // Step 13: Source module unchanged until Checker Approve.
    await coPage.navigateToConfiguration(testData.baseUrl);
    await coPage.expectConfigurationPendingUnchanged(priorRange.max);

    // Steps 14–22: Audit Trail / View Changes.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, "Onboarding");
  });

  test("Test Case ID:CO-TC-043 - Set Risk Score range for the Auto-Approve rule", async ({
    testData,
  }) => {
    // Step 1: Open Onboarding Configuration.
    await coPage.navigateToConfiguration(testData.baseUrl);
    const activeMax = await coPage.readAutoApproveMatchMax();
    const alreadyPending = await coPage.isConfigurationPendingLocked();

    // Risk Score ranges are shown in the live summary/history (Match … AND Risk …).
    await coPage.expectAutoApproveRiskRangeVisible();

    const riskInputs = coPage.autoApproveRiskInputs();
    const riskInputCount = await riskInputs.count();

    if (!alreadyPending && riskInputCount >= 2) {
      // Steps 2–3: Enter Auto-Approve Risk Score min and max; confirm accepted on screen.
      await coPage.setAutoApproveRiskRange("0", "24");

      // Steps 4–5: Business Justification + Submit for Checker Approval.
      await coPage.submitConfigurationForChecker();
    } else if (!alreadyPending && riskInputCount < 2) {
      // Live editable Auto-Approve card currently exposes Match Score only; assert Risk row is required.
      await expect(
        coPage.autoApproveCard().locator(".oc-range-row").filter({ hasText: /Risk Score/i }),
      ).toBeVisible({ timeout: 5000 });
    } else {
      await coPage.expectTextVisible(/awaiting Checker approval|Rule inputs are locked/i);
    }

    // Steps 6–12: 4-Eyes Review — Module, Justification, Current/Proposed, Audit Timeline.
    await coPage.navigateToFourEyes(testData.baseUrl);
    await coPage.openPendingApprovalsTab();
    await coPage.reviewOnboardingConfigurationRequest();
    await coPage.expectFourEyesReviewDetails(/CFG-|Risk|rule update|Edit|justification/i);
    await coPage.closeFourEyesReview();

    // Step 13: Prior active ranges remain in effect until Checker Approve.
    await coPage.navigateToConfiguration(testData.baseUrl);
    await coPage.expectConfigurationPendingUnchanged(activeMax);
    await coPage.expectAutoApproveRiskRangeVisible();

    // Steps 14–22: Audit Trail / View Changes.
    await coPage.assertAuditTrailForOnboardingAction(testData.baseUrl, "Onboarding");
  });

  // --- Expanded full-coverage Batch 1 (missing IDs) ---

  test("Test Case ID:CO-TC-001 - Open the L1 Queue and confirm Open cases are listed", async ({
    testData,
  }) => {
    // Step 1: Open AML Onboarding from the application sidebar.
    // Step 2: Click L1 Queue under Onboarding.
    await coPage.navigateToL1Queue(testData.baseUrl);

    // Step 3: Confirm the page title Customer Onboarding Queue is shown.
    // Step 4: Confirm the queue table lists cases with status Open (or empty-state when none).
    await coPage.expectL1QueueOpenCasesListed();
  });

  test("Test Case ID:CO-TC-002 - Open the L2 Queue and confirm Pending at L2 cases are listed", async ({
    testData,
  }) => {
    // Step 1: Open AML Onboarding from the application sidebar.
    // Step 2: Click L2 Queue under Onboarding.
    await coPage.navigateToL2Queue(testData.baseUrl);

    // Step 3: Confirm the page title Customer Onboarding Queue is shown.
    // Step 4: Confirm the queue table lists cases with status Pending at L2 (or empty-state when none).
    await coPage.expectL2QueuePendingCasesListed();
  });

  test("Test Case ID:CO-TC-003 - Verify Maker performs first-level review from the L1 Queue", async ({
    testData,
  }) => {
    // Step 1: On L1 Queue, click a row with status Open.
    await coPage.navigateToL1Queue(testData.baseUrl);
    const refId = await coPage.openFirstQueueCase();
    expect(refId.length).toBeGreaterThan(0);

    // Step 2: Confirm Screening Result / case detail opens.
    // Step 3: Confirm Maker actions Approve and Reject are available with Rationale (required).
    await coPage.expectMakerReviewActionsAvailable();
  });

  test("Test Case ID:CO-TC-004 - Verify Checker performs second-level review from the L2 Queue", async ({
    testData,
  }) => {
    // Step 1: On L2 Queue, click a row with status Pending at L2.
    await coPage.navigateToL2Queue(testData.baseUrl);
    const refId = await coPage.openFirstQueueCase();
    expect(refId.length).toBeGreaterThan(0);

    // Step 2: Confirm Screening Result / case detail opens.
    // Step 3: Confirm Checker actions Approve and Reject are available with Comment (required).
    await coPage.expectCheckerReviewActionsAvailable();
  });

  test("Test Case ID:CO-TC-007 - Verify a new prospect is screened against sanction and PEP watchlists", async ({
    testData,
  }) => {
    // Step 1: Submit or open a newly screened prospect case from Customer Onboarding Queue.
    await coPage.navigateToL1Queue(testData.baseUrl);
    const refId = await coPage.submitOrOpenScreenedProspect();
    expect(refId.length).toBeGreaterThan(0);

    // Step 2: Open the case detail Screening Result.
    // Step 3: Confirm matched-list summary or No Match Found is shown from sanction/PEP screening.
    await coPage.expectWatchlistScreeningOutcome();
  });

  test("Test Case ID:CO-TC-008 - Verify Match Score and Risk Score appear together for decisioning", async ({
    testData,
  }) => {
    // Step 1: Open L1 Queue.
    await coPage.navigateToL1Queue(testData.baseUrl);

    // Step 2: Open any screened case row.
    await coPage.openFirstQueueCase();

    // Step 3: Confirm Highest Match Score and Risk Score values are visible on the Screening Result.
    await coPage.expectMatchAndRiskScoresVisible();
  });

  test("Test Case ID:CO-TC-009 - Verify decisioning bands route prospects to auto or manual paths", async ({
    testData,
  }) => {
    // Step 1: Open Onboarding MIS Reports > Dashboards.
    await coPage.navigateToMisReports(testData.baseUrl);

    // Step 2: Note Auto-Approved Requests, Auto-Rejected Requests, and Total Under Manual Review counts.
    const counts = await coPage.expectMisDashboardBandCounts();
    expect(counts.autoApproved + counts.autoRejected + counts.manualReview).toBeGreaterThan(0);

    // Step 3: Open L1 Queue and confirm Manual Review cases appear when counts are non-zero.
    await coPage.navigateToL1Queue(testData.baseUrl);
    if (counts.pendingMaker > 0 || counts.manualReview > 0) {
      await expect(coPage.ui.locator("main table tbody tr").first()).toBeVisible();
      await expect(coPage.main()).toContainText(/awaiting first-level review/i);
    } else {
      await coPage.expectL1QueueOpenCasesListed();
    }
  });

  test("Test Case ID:CO-TC-010 - Verify intake creates automatic screening and risk assessment", async ({
    testData,
  }) => {
    // Step 1: Submit a prospect for onboarding screening (open resulting screened case when intake is external).
    await coPage.navigateToL1Queue(testData.baseUrl);
    const refId = await coPage.submitOrOpenScreenedProspect();
    expect(refId.length).toBeGreaterThan(0);

    // Step 2: Open the resulting case from Customer Onboarding Queue or MIS.
    // Step 3: Confirm screening outcome and Risk Score are populated without manual score entry.
    await coPage.expectAutoScreeningRiskPopulated();
  });

  test("Test Case ID:CO-TC-011 - Verify Match Score shows highest list score and matched list count", async ({
    testData,
  }) => {
    // Step 1: Open L1 Queue.
    await coPage.navigateToL1Queue(testData.baseUrl);

    // Step 2: Open a case with matched lists.
    // Step 3: Confirm Highest Match Score and Number of Matched List columns/fields are displayed.
    await coPage.expectHighestMatchAndMatchedListCount();
  });

  test("Test Case ID:CO-TC-012 - Verify Risk Score is shown as a composite 0–100 value", async ({
    testData,
  }) => {
    // Step 1: Open a case from L1 Queue.
    await coPage.navigateToL1Queue(testData.baseUrl);
    await coPage.openFirstQueueCase();

    // Step 2: Locate Risk Score on the queue row or Screening Result.
    // Step 3: Confirm the value is numeric within 0–100.
    await coPage.expectRiskScoreComposite0to100(testData.baseUrl);
  });

  test("Test Case ID:CO-TC-013 - Verify a screening case record is created for each prospect", async ({
    testData,
  }) => {
    // Step 1: Open L1 Queue or Onboarding MIS Reports.
    await coPage.navigateToL1Queue(testData.baseUrl);

    // Step 2: Locate the prospect by Prospect Name or Reference ID.
    // Step 3: Open the case and confirm a durable screening case record is shown.
    const refId = await coPage.expectScreeningCaseRecord();
    expect(refId).toMatch(/ONB-/i);
  });

  test("Test Case ID:CO-TC-015 - Verify Manual Review band queues the prospect to the L1 Queue", async ({
    testData,
  }) => {
    // Best-effort: read active Manual Review Match Score ranges, then confirm L1 Open cases fall in-band.
    await coPage.navigateToConfiguration(testData.baseUrl);
    const { min, max } = await coPage.readManualReviewMatchRange();

    // Step 1: Open L1 Queue.
    // Step 2: Locate a Manual Review prospect with status Open.
    // Step 3: Confirm Highest Match Score and Risk Score fall within Manual Review configuration ranges.
    await coPage.navigateToL1Queue(testData.baseUrl);
    await coPage.expectManualReviewBandOnL1(min, max, testData.baseUrl);
  });

  test("Test Case ID:CO-TC-019 - Verify prospect KYC identifying details appear on the case", async ({
    testData,
  }) => {
    // Step 1: Open L1 Queue.
    await coPage.navigateToL1Queue(testData.baseUrl);

    // Step 2: Open a case row.
    await coPage.openFirstQueueCase();

    // Step 3: Confirm Prospect Name, ID Number, and Entity Type (and other KYC fields shown) are displayed.
    await coPage.expectProspectKycDetails();
  });
});
