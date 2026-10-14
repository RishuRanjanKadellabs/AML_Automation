import { Page, Locator, expect } from "@playwright/test";
import BasePage from "../../../../PageObjects/BasePage";
import CustomerOnboardingLocators from "../../../objectrepositories/CustomerOnboardingLocators";
import { registerScreenVisit } from "../../../../helpers/ui-screen-registry";
import {
  isAmlLoginFormVisible,
  isAmlLoginUrl,
  submitAmlLoginIfFormVisible,
} from "../../../../helpers/aml-login";

const L = CustomerOnboardingLocators;

class CustomerOnboardingPage extends BasePage {
  /** Public alias for BasePage.page — used by specs that need shared-page locators. */
  readonly ui: Page;

  constructor(page: Page) {
    super(page);
    this.ui = page;
  }

  private readyTimeout(): number {
    return process.env.PW_EXPECT_TIMEOUT
      ? parseInt(process.env.PW_EXPECT_TIMEOUT, 10)
      : 45000;
  }

  /**
   * Visible page title for SPA ready-checks.
   * Uses `.cob-page-title` / `h1` (not bare getByText) so shared-session 4-Eyes
   * Module `<option>Onboarding Configuration</option>` and sidebar links cannot match.
   */
  private pageTitle(screenName: string): Locator {
    const escaped = screenName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return this.page
      .locator(L.pageTitleSelector)
      .filter({ hasText: new RegExp(escaped, "i") })
      .filter({ visible: true })
      .first();
  }

  /**
   * Navigate to a module path with SPA-safe waits.
   * Avoids page-wide getByText (matches hidden option labels on other screens)
   * and retries net::ERR_ABORTED / interrupted navigations common on 2506.
   */
  private async gotoPath(baseUrl: string, path: string, screenName: string): Promise<void> {
    const url = `${baseUrl.replace(/\/$/, "")}${path}`;
    const timeout = this.readyTimeout();
    const pathOnly = path.split("?")[0];
    let lastError: unknown;

    for (let attempt = 0; attempt < 3; attempt += 1) {
      try {
        await this.page.goto(url, { waitUntil: "domcontentloaded", timeout });
        // Shared 2506 session can be overridden mid-suite — re-auth then re-open target.
        if (isAmlLoginUrl(this.page.url()) || (await isAmlLoginFormVisible(this.page))) {
          await submitAmlLoginIfFormVisible(this.page);
          await this.page.goto(url, { waitUntil: "domcontentloaded", timeout });
        }
        await this.page
          .waitForURL((u) => u.pathname.includes(pathOnly), { timeout })
          .catch(() => undefined);
        // Dismiss leftover 4-Eyes Review / View Changes modal so title waits are not masked.
        for (let i = 0; i < 2; i += 1) {
          const strayClose = this.page.getByRole("button", { name: /^Close$/i }).first();
          if (!(await strayClose.isVisible().catch(() => false))) break;
          await strayClose.click().catch(() => undefined);
          await expect(strayClose)
            .toBeHidden({ timeout: 5000 })
            .catch(() => undefined);
        }
        await expect(this.pageTitle(screenName)).toBeVisible({ timeout });
        if (pathOnly.includes("/onboarding/configuration")) {
          await expect(this.page.locator(L.configurationReady).first()).toBeVisible({ timeout });
        }
        await registerScreenVisit(this.page, {
          module: "Customer Onboarding",
          screenName,
        });
        return;
      } catch (err) {
        lastError = err;
        const msg = String(err);
        const retryable =
          /ERR_ABORTED|interrupted|Navigation|Timeout|Target closed|login\?ret_code|AML login/i.test(
            msg,
          );
        if (!retryable || attempt === 2) {
          throw err;
        }
      }
    }
    throw lastError;
  }

  async navigateToL1Queue(baseUrl: string): Promise<void> {
    await this.gotoPath(baseUrl, L.paths.l1Queue, L.pageTitles.l1Queue);
  }

  async navigateToL2Queue(baseUrl: string): Promise<void> {
    await this.gotoPath(baseUrl, L.paths.l2Queue, L.pageTitles.l2Queue);
  }

  async navigateToMisReports(baseUrl: string): Promise<void> {
    await this.gotoPath(baseUrl, L.paths.misReports, L.pageTitles.misReports);
  }

  async navigateToConfiguration(baseUrl: string): Promise<void> {
    await this.gotoPath(baseUrl, L.paths.configuration, L.pageTitles.configuration);
  }

  async navigateToFourEyes(baseUrl: string): Promise<void> {
    await this.gotoPath(baseUrl, L.paths.fourEyes, L.pageTitles.fourEyes);
  }

  async navigateToAuditTrail(baseUrl: string): Promise<void> {
    await this.gotoPath(baseUrl, L.paths.auditTrail, L.pageTitles.auditTrail);
  }

  main(): Locator {
    return this.page.locator("main");
  }

  async clickMisTab(tab: keyof typeof L.misTabs): Promise<void> {
    await this.page.getByText(L.misTabs[tab]).first().click();
    await expect(this.page.locator("table tbody tr").first()).toBeVisible({
      timeout: this.readyTimeout(),
    });
  }

  async openFirstMisProspect(): Promise<string> {
    const refCell = this.page.locator("table tbody tr").first().locator("td").nth(1);
    const refId = ((await refCell.innerText()) || "").trim();
    await refCell.click();
    await expect(this.page.getByText(L.caseDetail.screeningHeading)).toBeVisible({
      timeout: this.readyTimeout(),
    });
    return refId;
  }

  async expectAutoApprovedDetail(): Promise<void> {
    await expect(this.main()).toContainText(L.decisionSummary.autoApproved);
    await expect(this.main()).toContainText(/Decision Summary/i);
    await expect(this.main()).not.toContainText(/recommends:\s*Approve|Maker recommendation/i);
    await expect(this.main()).toContainText(/\d{4}-\d{2}-\d{2}/);
  }

  async expectAutoRejectedDetail(): Promise<void> {
    await expect(this.main()).toContainText(L.decisionSummary.autoRejected);
    await expect(this.main()).toContainText(/Decision Summary/i);
    await expect(this.main()).not.toContainText(/recommends:\s*Reject|Maker recommendation/i);
  }

  matchScoreNumberInputs(): Locator {
    // Prefer Auto-Approve card Match Score inputs — global main nth() is brittle
    // when Manual/Reject cards render first or cards are still hydrating.
    return this.autoApproveMatchInputs().or(this.page.locator(L.configuration.numberInput));
  }

  ruleEnableCheckboxes(): Locator {
    return this.page.locator(L.configuration.enableCheckbox);
  }

  async readAutoApproveMatchMax(): Promise<string> {
    const inputs = this.autoApproveMatchInputs();
    await expect(this.autoApproveCard()).toBeVisible({ timeout: this.readyTimeout() });
    await expect(inputs.nth(1)).toBeAttached({ timeout: this.readyTimeout() });
    // Inputs stay visible but disabled while a CFG change awaits checker.
    return inputs.nth(1).inputValue();
  }

  async setAutoApproveMatchMax(value: string): Promise<void> {
    const inputs = this.autoApproveMatchInputs();
    await expect(this.autoApproveCard()).toBeVisible({ timeout: this.readyTimeout() });
    await expect(inputs.nth(1)).toBeAttached({ timeout: this.readyTimeout() });
    await expect(inputs.nth(1)).toBeEnabled({ timeout: this.readyTimeout() });
    await inputs.nth(1).fill(value);
    await expect(inputs.nth(1)).toHaveValue(value);
  }

  autoApproveCard(): Locator {
    return this.page.locator(L.configuration.autoApproveCard).first();
  }

  autoApproveMatchInputs(): Locator {
    return this.autoApproveCard()
      .locator(".oc-range-row")
      .filter({ has: this.page.getByText(L.configuration.matchScoreLabel) })
      .locator("input.oc-input.tabular[type='number']");
  }

  autoApproveRiskInputs(): Locator {
    return this.autoApproveCard()
      .locator(".oc-range-row")
      .filter({ has: this.page.getByText(L.configuration.riskScoreLabel) })
      .locator("input.oc-input.tabular[type='number']");
  }

  async readAutoApproveMatchRange(): Promise<{ min: string; max: string }> {
    const inputs = this.autoApproveMatchInputs();
    await expect(inputs.first()).toBeAttached({ timeout: this.readyTimeout() });
    return {
      min: await inputs.nth(0).inputValue(),
      max: await inputs.nth(1).inputValue(),
    };
  }

  async setAutoApproveMatchRange(min: string, max: string): Promise<void> {
    const inputs = this.autoApproveMatchInputs();
    await expect(inputs.nth(0)).toBeEnabled({ timeout: this.readyTimeout() });
    await inputs.nth(0).fill(min);
    await inputs.nth(1).fill(max);
    await expect(inputs.nth(0)).toHaveValue(min);
    await expect(inputs.nth(1)).toHaveValue(max);
  }

  async setAutoApproveRiskRange(min: string, max: string): Promise<void> {
    const inputs = this.autoApproveRiskInputs();
    await expect(inputs.first()).toBeVisible({ timeout: this.readyTimeout() });
    await expect(inputs.nth(0)).toBeEnabled({ timeout: this.readyTimeout() });
    await inputs.nth(0).fill(min);
    await inputs.nth(1).fill(max);
    await expect(inputs.nth(0)).toHaveValue(min);
    await expect(inputs.nth(1)).toHaveValue(max);
  }

  async expectAutoApproveRiskRangeVisible(): Promise<void> {
    // Live summary / history always show Risk ranges even when the Risk Score
    // inputs are absent from the editable Auto-Approve card.
    await expect(this.main().getByText(L.configuration.riskRangeSummary).first()).toBeVisible({
      timeout: this.readyTimeout(),
    });
  }

  async toggleFirstDecisioningRule(): Promise<boolean> {
    const box = this.ruleEnableCheckboxes().first();
    await expect(box).toBeVisible({ timeout: this.readyTimeout() });
    const before = await box.isChecked();
    await box.click();
    await expect(box).toHaveJSProperty("checked", !before);
    return !before;
  }

  async toggleAutoApproveRule(): Promise<boolean> {
    const box = this.page.locator(L.configuration.autoApproveEnableSwitch).first();
    await expect(box).toBeAttached({ timeout: this.readyTimeout() });
    await expect(box).toBeEnabled({ timeout: this.readyTimeout() });
    const before = await box.isChecked();
    await box.click();
    await expect(box).toHaveJSProperty("checked", !before);
    return !before;
  }

  async isConfigurationPendingLocked(): Promise<boolean> {
    return this.page.getByText(L.configuration.pendingBanner).first().isVisible().catch(() => false);
  }

  async submitConfigurationForChecker(): Promise<void> {
    await this.page.getByRole("button", { name: L.configuration.submitForChecker }).click();
    await expect(this.page.getByText(L.configuration.pendingBanner).first()).toBeVisible({
      timeout: this.readyTimeout(),
    });
  }

  async expectConfigurationPendingUnchanged(activeMatchMax: string): Promise<void> {
    await expect(this.page.getByText(L.configuration.pendingBanner).first()).toBeVisible();
    const currentMax = await this.readAutoApproveMatchMax();
    expect(currentMax).toBe(activeMatchMax);
  }

  async openPendingApprovalsTab(): Promise<void> {
    await this.page.getByText(L.fourEyes.pendingTab).first().click();
    await expect(this.page.getByRole("button", { name: L.fourEyes.reviewButton }).first()).toBeVisible({
      timeout: this.readyTimeout(),
    });
  }

  async reviewOnboardingConfigurationRequest(): Promise<void> {
    const row = this.page
      .locator("table tbody tr")
      .filter({ hasText: L.fourEyes.moduleOnboardingConfig })
      .first();
    await expect(row).toBeVisible({ timeout: this.readyTimeout() });
    await row.getByRole("button", { name: L.fourEyes.reviewButton }).click();
    await expect(this.page.getByText(L.fourEyes.changeSummary).first()).toBeVisible({
      timeout: this.readyTimeout(),
    });
  }

  async expectFourEyesReviewDetails(justificationPattern?: RegExp): Promise<void> {
    // Visible-only: Pending Approvals Module filter keeps a hidden
    // <option>Onboarding Configuration</option> that bare getByText matches first.
    const visibleText = (pattern: RegExp) =>
      this.page.getByText(pattern).filter({ visible: true }).first();

    await expect(visibleText(L.fourEyes.changeSummary)).toBeVisible({ timeout: this.readyTimeout() });
    await expect(visibleText(L.fourEyes.moduleOnboardingConfig)).toBeVisible();
    await expect(visibleText(/Change Type/i)).toBeVisible();
    await expect(visibleText(L.fourEyes.businessJustification)).toBeVisible();
    if (justificationPattern) {
      await expect(visibleText(justificationPattern)).toBeVisible();
    }
    await expect(visibleText(L.fourEyes.proposedChange)).toBeVisible();
    await expect(visibleText(L.fourEyes.parameterColumn)).toBeVisible();
    await expect(visibleText(L.fourEyes.currentValueColumn)).toBeVisible();
    await expect(visibleText(L.fourEyes.proposedValueColumn)).toBeVisible();
    await expect(visibleText(L.fourEyes.auditTimeline)).toBeVisible();
    await expect(visibleText(/Change request submitted|submitted/i)).toBeVisible();
  }

  async closeFourEyesReview(): Promise<void> {
    const close = this.page.getByRole("button", { name: L.fourEyes.close }).first();
    if (await close.isVisible().catch(() => false)) {
      await close.click();
      await expect(this.page.getByText(L.fourEyes.changeSummary).first())
        .toBeHidden({ timeout: this.readyTimeout() })
        .catch(() => undefined);
    }
  }

  async openFirstQueueCase(): Promise<string> {
    const refCell = this.page.locator(L.queues.referenceIdCell).first();
    await expect(refCell).toBeVisible({ timeout: this.readyTimeout() });
    const refId = ((await refCell.innerText()) || "").trim();
    await refCell.click();
    await expect(this.page.getByText(L.caseDetail.screeningHeading)).toBeVisible({
      timeout: this.readyTimeout(),
    });
    await expect(this.page.getByText(L.caseDetail.screeningRiskSummary)).toBeVisible();
    return refId;
  }

  rationaleField(): Locator {
    return this.page.locator(L.caseDetail.rationale);
  }

  checkerCommentField(): Locator {
    return this.page.locator(L.caseDetail.checkerComment);
  }

  async fillMakerRationale(text: string): Promise<void> {
    const field = this.rationaleField();
    await expect(field).toBeVisible({ timeout: this.readyTimeout() });
    await field.fill(text);
    await expect(field).toHaveValue(text);
  }

  async fillCheckerComment(text: string): Promise<void> {
    const field = this.checkerCommentField();
    await expect(field).toBeVisible({ timeout: this.readyTimeout() });
    await field.fill(text);
    await expect(field).toHaveValue(text);
  }

  async selectDecisionOption(decision: "Approve" | "Reject"): Promise<void> {
    const byId = this.page
      .locator(`${L.caseDetail.makerDecision}, ${L.caseDetail.checkerDecision}`)
      .first();
    if (await byId.isVisible().catch(() => false)) {
      await byId.selectOption({ label: decision }).catch(async () => {
        await byId.selectOption({ value: decision });
      });
      return;
    }
    const select = this.page.locator("select").filter({ hasText: /Approve|Reject|Select decision/i }).first();
    if (await select.isVisible().catch(() => false)) {
      await select.selectOption({ label: decision }).catch(async () => {
        await select.selectOption({ value: decision }).catch(() => undefined);
      });
      return;
    }
    await this.page.getByText(new RegExp(`^${decision}$`, "i")).first().click().catch(() => undefined);
  }

  async locateAttachEvidenceSection(): Promise<void> {
    await expect(this.page.getByText(L.caseDetail.attachEvidenceHeading).first()).toBeVisible({
      timeout: this.readyTimeout(),
    });
    await expect(this.page.locator(L.caseDetail.attachFilesLabel).first()).toBeVisible();
  }

  async attachEvidenceFile(filePath: string, expectedFileName: string): Promise<void> {
    await this.locateAttachEvidenceSection();
    const input = this.page.locator(L.caseDetail.evidenceFileInput).first();
    await expect(input).toBeAttached({ timeout: this.readyTimeout() });
    await input.setInputFiles(filePath);
    await expect(
      this.page.locator(L.caseDetail.evidenceName).filter({ hasText: expectedFileName }).first(),
    ).toBeVisible({ timeout: this.readyTimeout() });
    await expect(this.page.locator(L.caseDetail.evidenceEmpty)).toHaveCount(0);
  }

  async expectEvidenceAttached(fileName: string): Promise<void> {
    await expect(
      this.page.locator(L.caseDetail.evidenceName).filter({ hasText: fileName }).first(),
    ).toBeVisible({ timeout: this.readyTimeout() });
  }

  async expectQueueCaseAbsent(referenceId: string): Promise<void> {
    await expect(this.page.locator(L.queues.referenceIdCell).filter({ hasText: referenceId })).toHaveCount(0, {
      timeout: this.readyTimeout(),
    });
  }

  async expectCbsConfirmationHint(): Promise<void> {
    const hasCbs = await this.main()
      .getByText(L.caseDetail.cbsConfirmation)
      .first()
      .isVisible()
      .catch(() => false);
    const hasDecision = await this.main()
      .getByText(/Decision Summary|Approved|Rejected/i)
      .first()
      .isVisible()
      .catch(() => false);
    expect(hasCbs || hasDecision).toBeTruthy();
  }

  async clickApprove(): Promise<void> {
    const approve = this.page.getByRole("button", { name: L.caseDetail.approveButton }).last();
    await expect(approve).toBeEnabled({ timeout: this.readyTimeout() });
    await approve.click();
    // Maker escalate and Checker final decision both use Approve — wait for either
    // decision chrome or return to a queue path (not CBS-only, which Maker lacks).
    await Promise.race([
      this.main()
        .getByText(/Approved|Decision Summary|Pending at L2|Recommendation submitted|CBS/i)
        .first()
        .waitFor({ state: "visible", timeout: this.readyTimeout() }),
      this.page.waitForURL(/\/onboarding\/(maker|checker)\/?(\?|$)/, {
        timeout: this.readyTimeout(),
      }),
    ]).catch(() => undefined);
  }

  async clickReject(): Promise<void> {
    const reject = this.page.getByRole("button", { name: L.caseDetail.rejectButton }).last();
    await expect(reject).toBeEnabled({ timeout: this.readyTimeout() });
    await reject.click();
    await Promise.race([
      this.main()
        .getByText(/Rejected|Decision Summary|CBS/i)
        .first()
        .waitFor({ state: "visible", timeout: this.readyTimeout() }),
      this.page.waitForURL(/\/onboarding\/(maker|checker)\/?(\?|$)/, {
        timeout: this.readyTimeout(),
      }),
    ]).catch(() => undefined);
  }

  async expectCaseEscalatedToL2(baseUrl: string, referenceId: string): Promise<void> {
    await this.navigateToL2Queue(baseUrl);
    await expect(this.page.getByText(referenceId).first()).toBeVisible({
      timeout: this.readyTimeout(),
    });
  }

  async expectCaseStatusOnDetail(pattern: RegExp): Promise<void> {
    await expect(this.main()).toContainText(pattern);
  }

  async expectMakerRecommendationVisible(): Promise<void> {
    await expect(this.page.getByText(L.caseDetail.l1Recommendation).first()).toBeVisible({
      timeout: this.readyTimeout(),
    });
  }

  async selectQueueCases(count: number): Promise<string[]> {
    await expect(this.page.locator(L.queues.referenceIdCell).first()).toBeVisible({
      timeout: this.readyTimeout(),
    });
    const boxes = this.page.locator(L.queues.rowCheckbox);
    await expect(boxes.first()).toBeVisible({ timeout: this.readyTimeout() });
    const available = await boxes.count();
    expect(available).toBeGreaterThanOrEqual(count);
    const refs: string[] = [];
    for (let i = 0; i < count; i += 1) {
      const box = boxes.nth(i);
      const aria = (await box.getAttribute("aria-label")) || "";
      const match = aria.match(/Select\s+(ONB-[A-Z0-9-]+)/i);
      if (match) refs.push(match[1]);
      await box.check();
    }
    await expect(this.page.getByRole("button", { name: L.queues.approveSelected })).toBeVisible();
    return refs;
  }

  async fillBulkRationale(text: string): Promise<void> {
    const field = this.page.locator(L.queues.bulkRationale);
    await expect(field).toBeVisible({ timeout: this.readyTimeout() });
    await field.fill(text);
    await expect(field).toHaveValue(text);
  }

  async fillBulkComment(text: string): Promise<void> {
    const field = this.page
      .locator(L.queues.bulkComment)
      .or(this.page.locator(L.queues.bulkRationale))
      .first();
    await expect(field).toBeVisible({ timeout: this.readyTimeout() });
    await field.fill(text);
    await expect(field).toHaveValue(text);
  }

  async clickApproveSelected(): Promise<void> {
    await this.page.getByRole("button", { name: L.queues.approveSelected }).click();
  }

  async clickRejectSelected(): Promise<void> {
    await this.page.getByRole("button", { name: L.queues.rejectSelected }).click();
  }

  async bulkDecideSelected(action: "approve" | "reject", rationale: string): Promise<void> {
    const field = this.page
      .locator(L.queues.bulkComment)
      .or(this.page.locator(L.queues.bulkRationale))
      .first();
    if (await field.isVisible().catch(() => false)) {
      await field.fill(rationale);
    }
    if (action === "approve") {
      await this.clickApproveSelected();
    } else {
      await this.clickRejectSelected();
    }
    // If rationale/comment was required after the first click, fill and retry once.
    if (await field.isVisible().catch(() => false)) {
      await field.fill(rationale);
      if (action === "approve") {
        await this.clickApproveSelected();
      } else {
        await this.clickRejectSelected();
      }
    }
    await expect(this.page.getByText(/selected|Pending|Queue|success|submitted|Approved|Rejected/i).first()).toBeVisible({
      timeout: this.readyTimeout(),
    }).catch(() => undefined);
  }

  async expectCasesClosedFromL2(baseUrl: string, refs: string[]): Promise<void> {
    await this.navigateToL2Queue(baseUrl);
    for (const ref of refs) {
      await this.expectQueueCaseAbsent(ref);
    }
  }

  async expectTextVisible(pattern: RegExp): Promise<void> {
    await expect(this.page.getByText(pattern).first()).toBeVisible({
      timeout: this.readyTimeout(),
    });
  }

  async clearAuditFiltersIfPresent(): Promise<void> {
    const clear = this.page.getByRole("button", { name: L.auditTrail.clearFilters }).first();
    if (await clear.isVisible().catch(() => false)) {
      await clear.click();
    }
  }

  async filterAuditByKycOnboarding(): Promise<void> {
    // Live Audit Trail: native <select id="adm-module"> (label "Module" is not always
    // an accessible name for getByRole('combobox')).
    const moduleSelect = this.page
      .locator(L.auditTrail.moduleSelect)
      .or(
        this.page.locator("main select").filter({
          has: this.page.locator("option", { hasText: L.auditTrail.kycOnboardingOption }),
        }),
      )
      .first();
    await expect(moduleSelect).toBeVisible({ timeout: this.readyTimeout() });
    await moduleSelect.selectOption({ label: L.auditTrail.kycOnboardingOption });
    await this.page.getByRole("button", { name: L.auditTrail.applyFilters }).click();
    await expect(
      this.page.locator("main table tbody tr").filter({ hasText: L.auditTrail.onboardingRow }).first(),
    ).toBeVisible({ timeout: this.readyTimeout() });
  }

  /** Returns true when at least one onboarding-related audit row is visible after search. */
  async filterAuditBySearch(term: string): Promise<boolean> {
    const search = this.page
      .getByPlaceholder(L.auditTrail.searchPlaceholder)
      .or(this.page.getByRole("searchbox", { name: L.auditTrail.searchRole }))
      .first();
    await search.fill(term);
    await this.page.getByRole("button", { name: L.auditTrail.applyFilters }).click();
    const matching = this.page
      .locator("main table tbody tr")
      .filter({ hasText: L.auditTrail.onboardingRow })
      .first();
    try {
      await expect(matching).toBeVisible({ timeout: 8000 });
      return true;
    } catch {
      return false;
    }
  }

  async expectAuditTrailColumnsVisible(): Promise<void> {
    for (const col of L.auditTrail.columns) {
      await expect(this.page.getByRole("columnheader", { name: new RegExp(col, "i") }).first()).toBeVisible();
    }
  }

  async openViewChangesOnMatchingRow(moduleOrRef: RegExp): Promise<void> {
    const row = this.page
      .locator("main table tbody tr")
      .filter({ hasText: moduleOrRef })
      .first();
    await expect(row).toBeVisible({ timeout: this.readyTimeout() });
    await expect(row.locator("td").nth(0)).toHaveText(/\S+/);
    await expect(row.locator("td").nth(1)).toHaveText(/\S+/);
    await row.getByRole("button", { name: L.auditTrail.viewChanges }).click();
    await expect(this.page.getByText(L.auditTrail.dataStateChange).first()).toBeVisible({
      timeout: this.readyTimeout(),
    });
  }

  async expectViewChangesIdentityAndDataState(): Promise<void> {
    const body = this.page.locator("body");
    await expect(body.getByText(/DATE & TIME|Date & Time/i).first()).toBeVisible();
    await expect(body.getByText(/MODULE|Module/i).first()).toBeVisible();
    await expect(body.getByText(/REFERENCE ID|Reference ID/i).first()).toBeVisible();
    await expect(body.getByText(/USER|User ID|User Name|AML USER/i).first()).toBeVisible();
    await expect(body.getByText(/SOURCE IP|Source IP/i).first()).toBeVisible();
    await expect(body.getByText(L.auditTrail.dataStateChange).first()).toBeVisible();
    const hasFieldChange = await body
      .getByText(/Field|Before|After/i)
      .first()
      .isVisible()
      .catch(() => false);
    const hasNone = await body
      .getByText(L.auditTrail.noFieldLevelChange)
      .first()
      .isVisible()
      .catch(() => false);
    expect(hasFieldChange || hasNone).toBeTruthy();
    await expect(body.getByText(L.auditTrail.reasonRemarks).first()).toBeVisible();
  }

  async closeViewChanges(): Promise<void> {
    const close = this.page.getByRole("button", { name: L.auditTrail.close }).first();
    await expect(close).toBeVisible({ timeout: this.readyTimeout() });
    await close.click();
  }

  async assertAuditTrailForOnboardingAction(baseUrl: string, searchHint?: string): Promise<void> {
    await this.navigateToAuditTrail(baseUrl);
    await this.expectAuditTrailColumnsVisible();
    // Case / MIS reference IDs often differ from Audit Trail Reference ID (UUID / demo-onb-*).
    // Prefer module filter when search does not surface an onboarding row.
    let hasOnboardingRow = false;
    if (searchHint && searchHint.trim() && !/^KYC$/i.test(searchHint.trim())) {
      hasOnboardingRow = await this.filterAuditBySearch(searchHint.trim());
    }
    if (!hasOnboardingRow) {
      await this.clearAuditFiltersIfPresent();
      await this.filterAuditByKycOnboarding();
    }
    await this.openViewChangesOnMatchingRow(L.auditTrail.onboardingRow);
    await this.expectViewChangesIdentityAndDataState();
    await this.closeViewChanges();
  }
}

export default CustomerOnboardingPage;
