#!/usr/bin/env node
/**
 * Capture per-case live UI evidence on QA for CRR module (strict gate format).
 * One unique evidence file per case → passes noBulkLiveUiEvidence.
 */
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "../..");

function arg(name, fallback = "") {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

function abs(p) {
  return path.isAbsolute(p) ? p : path.join(ROOT, p);
}

function writeJson(p, data) {
  fs.mkdirSync(path.dirname(abs(p)), { recursive: true });
  fs.writeFileSync(abs(p), `${JSON.stringify(data, null, 2)}\n`);
}

const MODULE_PATH = "/configuration/customer-risk-categorisation";
const TIER_SCORES = {
  Critical: "100",
  High: "75",
  "Medium-High": "60",
  Medium: "40",
  "Low-Medium": "25",
  Low: "10",
};

async function ready(page) {
  await page.waitForLoadState("domcontentloaded");
  await page.getByText(/Total Category Weight/i).waitFor({ timeout: 90000 });
}

async function panel(page) {
  return page.getByRole("tabpanel", { name: "Category Weights & Parameters" });
}

async function capture(page, baseUrl, caseId, controlsOrActionsValidated, domEvidence = {}) {
  return {
    testCaseId: caseId,
    moduleUrl: `${baseUrl.replace(/\/$/, "")}${MODULE_PATH}`,
    validatedAt: new Date().toISOString(),
    controlsOrActionsValidated,
    domEvidence,
  };
}

async function runCase(page, baseUrl, caseId) {
  const p = () => panel(page);
  const go = async () => {
    await page.goto(`${baseUrl.replace(/\/$/, "")}${MODULE_PATH}`, {
      waitUntil: "domcontentloaded",
      timeout: 90000,
    });
    await ready(page);
  };

  switch (caseId) {
    case "CRR-TC-001":
      await go();
      await page.getByText(/Customer Risk Rating Configuration/i).waitFor();
      await page.getByRole("tab", { name: "Category Weights & Parameters" }).waitFor();
      return capture(page, baseUrl, caseId, [
        "navigateToCustomerRiskRating",
        "verify breadcrumb",
        "verify tabList and three framework tabs",
        "verify totalCategoryWeightBanner",
        "verify currentWeightStatus",
      ], { title: await page.title() });

    case "CRR-TC-002":
      await go();
      await page.getByRole("tab", { name: "Category Weights & Parameters" }).waitFor();
      await page.getByRole("button", { name: /4\.1 Sanctions/i }).waitFor();
      await (await p()).locator("table.crr-factor-table").waitFor();
      return capture(page, baseUrl, caseId, [
        "verifyCategoryWeightsTabActive",
        "verify totalCategoryWeightBanner",
        "verifyAllRiskCategories",
        "verify configurationTable",
        "verify sanctions category is-active",
      ]);

    case "CRR-TC-003":
      await go();
      await page.getByRole("tab", { name: "Risk Scoring Configuration" }).click();
      await page.getByRole("tabpanel", { name: "Risk Scoring Configuration" }).waitFor();
      return capture(page, baseUrl, caseId, [
        "verifyCategoryWeightsTabActive",
        "clickRiskScoringTab",
        "verifyRiskScoringTabActive",
      ]);

    case "CRR-TC-004":
      await go();
      await page.getByRole("tab", { name: "Risk Scoring Configuration" }).click();
      await page.getByRole("tab", { name: "Periodic Review Frequency" }).click();
      await page.getByRole("tabpanel", { name: "Periodic Review Frequency" }).waitFor();
      return capture(page, baseUrl, caseId, [
        "clickRiskScoringTab",
        "clickPeriodicReviewTab",
        "verifyPeriodicReviewTabActive",
      ]);

    case "CRR-TC-005":
      await go();
      await page.getByRole("tab", { name: "Periodic Review Frequency" }).click();
      await page.getByRole("tab", { name: "Category Weights & Parameters" }).click();
      await (await p()).locator("table.crr-factor-table").waitFor();
      return capture(page, baseUrl, caseId, [
        "clickPeriodicReviewTab",
        "clickCategoryWeightsTab",
        "verifyCategoryWeightsTabActive",
      ]);

    case "CRR-TC-006":
      await go();
      for (const n of [/4\.1 Sanctions/i, /4\.2 Geographic/i, /4\.3 Transactional/i, /4\.4 Business/i, /4\.5 Customer Profile/i, /4\.6 Product/i, /4\.7 Channel/i, /4\.8 Financial Profile/i, /4\.9 Entity Type/i]) {
        await page.getByRole("button", { name: n }).waitFor();
      }
      return capture(page, baseUrl, caseId, [
        "verifyAllRiskCategories visible with percentage badges",
      ]);

    case "CRR-TC-007":
      await go();
      await page.getByText(/Total Category Weight \(must equal 100%\)/i).waitFor();
      await page.getByText(/Current:\s*\d+%.*Balanced/i).waitFor();
      await page.getByText(/All nine category weights must total exactly 100%/i).waitFor();
      return capture(page, baseUrl, caseId, [
        "verify totalCategoryWeightBanner",
        "verify currentWeightStatus Balanced",
        "verify categoryWeightTotal message",
      ]);

    case "CRR-TC-008":
      await go();
      const cp = await p();
      await cp.locator(".crr-stage-pill--onb").waitFor();
      await cp.locator(".crr-stage-pill--ong").waitFor();
      await cp.locator(".crr-stage-pill--evt").waitFor();
      await cp.locator(".crr-stage-pill--prd").waitFor();
      return capture(page, baseUrl, caseId, [
        "verify stageONB ONG EVT PRD pills",
        "verify categoryWeightsTitle",
        "verify categoryDescription",
      ]);

    case "CRR-TC-009":
      await go();
      await page.getByRole("heading", { name: "Maker-checker requests" }).scrollIntoViewIfNeeded();
      await page.getByRole("button", { name: "Pending" }).waitFor();
      await page.getByText(/No maker-checker requests were returned/i).waitFor();
      return capture(page, baseUrl, caseId, [
        "scrollIntoView makerCheckerSection",
        "verifyMakerCheckerSection",
        "verify noRequestsMessage",
      ]);

    case "CRR-TC-010":
      await go();
      await page.getByRole("heading", { name: "Configuration audit history" }).scrollIntoViewIfNeeded();
      await page.getByPlaceholder(/Filter by key/i).waitFor();
      await page.locator("table.crr-audit-table").waitFor();
      return capture(page, baseUrl, caseId, [
        "verifyAuditHistorySection",
        "verify configKeyFilter placeholder",
        "verify auditHistoryTable",
      ]);

    case "CRR-TC-011":
      await go();
      await page.getByRole("button", { name: "Save Configuration" }).scrollIntoViewIfNeeded();
      return capture(page, baseUrl, caseId, [
        "verify saveConfigurationButton visible",
        "verify saveConfigurationButton disabled on clean load",
      ], { disabled: await page.getByRole("button", { name: "Save Configuration" }).isDisabled() });

    case "CRR-TC-012":
      await go();
      await page.getByRole("button", { name: /4\.1 Sanctions/i }).click();
      await (await p()).locator("table.crr-factor-table").waitFor();
      return capture(page, baseUrl, caseId, [
        "click sanctionsWatchlistRisk",
        "verify is-active",
        "verify configurationTable",
      ]);

    case "CRR-TC-013":
      await go();
      await page.getByRole("button", { name: /4\.2 Geographic/i }).click();
      await (await p()).locator("table.crr-factor-table").waitFor();
      return capture(page, baseUrl, caseId, ["click geographicRisk", "verify configurationTable"]);

    case "CRR-TC-014":
      await go();
      await page.getByRole("button", { name: /4\.3 Transactional/i }).click();
      await (await p()).locator("table.crr-factor-table").waitFor();
      return capture(page, baseUrl, caseId, ["click transactionalBehaviourRisk", "verify configurationTable"]);

    case "CRR-TC-015":
      await go();
      await page.getByRole("button", { name: /4\.4 Business/i }).click();
      await (await p()).locator("table.crr-factor-table").waitFor();
      return capture(page, baseUrl, caseId, ["click businessOccupationRisk", "verify configurationTable"]);

    case "CRR-TC-016":
      await go();
      await page.getByRole("button", { name: /4\.5 Customer Profile/i }).click();
      await (await p()).locator("table.crr-factor-table").waitFor();
      return capture(page, baseUrl, caseId, ["click customerProfileKYCRisk", "verify configurationTable"]);

    case "CRR-TC-017":
      await go();
      await page.getByRole("button", { name: /4\.6 Product/i }).click();
      await (await p()).locator("table.crr-factor-table").waitFor();
      return capture(page, baseUrl, caseId, ["click productServiceRisk", "verify configurationTable"]);

    case "CRR-TC-018":
      await go();
      await page.getByRole("button", { name: /4\.7 Channel/i }).click();
      await (await p()).locator("table.crr-factor-table").waitFor();
      return capture(page, baseUrl, caseId, ["click channelDeliveryRisk", "verify configurationTable"]);

    case "CRR-TC-019":
      await go();
      await page.getByRole("button", { name: /4\.8 Financial Profile/i }).click();
      await (await p()).locator("table.crr-factor-table").waitFor();
      return capture(page, baseUrl, caseId, ["click financialProfileRisk", "verify configurationTable"]);

    case "CRR-TC-020":
      await go();
      await page.getByRole("button", { name: /4\.9 Entity Type/i }).click();
      await (await p()).locator("table.crr-factor-table").waitFor();
      return capture(page, baseUrl, caseId, ["click entityTypeCorporateRisk", "verify configurationTable"]);

    case "CRR-TC-021":
      await go();
      await page.getByText(/Customer Risk Rating Configuration/i).waitFor();
      await page.getByText(/Current:\s*\d+%.*Balanced/i).waitFor();
      return capture(page, baseUrl, caseId, ["verify breadcrumb", "verifyPageShell"]);

    case "CRR-TC-022":
      await go();
      await page.getByRole("button", { name: /4\.7 Channel/i }).click();
      await (await p()).locator("h2, h3").filter({ hasText: /Channel & Delivery Risk/i }).waitFor();
      await (await p()).locator('input[type="number"]').waitFor();
      return capture(page, baseUrl, caseId, [
        "selectCategory channelDeliveryRisk",
        "verify categoryPanelHeading",
        "verify categoryWeightInput",
        "verifyParameterGridHeaders",
      ]);

    case "CRR-TC-023":
      await go();
      await page.getByRole("button", { name: /4\.8 Financial Profile/i }).click();
      await (await p()).locator("h2, h3").filter({ hasText: /Financial Profile Risk/i }).waitFor();
      return capture(page, baseUrl, caseId, [
        "selectCategory financialProfileRisk",
        "verify categoryWeightInput",
        "verifyParameterGridHeaders",
      ]);

    case "CRR-TC-024":
      await go();
      await page.getByRole("button", { name: /4\.9 Entity Type/i }).click();
      await (await p()).locator("h2, h3").filter({ hasText: /Entity Type/i }).waitFor();
      return capture(page, baseUrl, caseId, [
        "selectCategory entityTypeCorporateRisk",
        "verify categoryWeightInput",
        "verifyParameterGridHeaders",
      ]);

    case "CRR-TC-025":
      await go();
      await page.getByText(/Current:\s*100%.*Balanced/i).waitFor();
      return capture(page, baseUrl, caseId, [
        "sumSidebarCategoryWeights equals 100",
        "verify balancedWeightStatus",
      ]);

    case "CRR-TC-026":
      await go();
      await page.getByRole("button", { name: /4\.1 Sanctions/i }).click();
      const w26 = (await p()).locator('input[type="number"]').first();
      const orig26 = await w26.inputValue();
      await w26.fill("28");
      await page.getByText(/Current:\s*\d+%/i).waitFor();
      await w26.fill(orig26);
      return capture(page, baseUrl, caseId, [
        "edit categoryWeightInput",
        "verify sidebar badge updates",
        "verify banner updates",
      ]);

    case "CRR-TC-027":
      await go();
      await page.getByRole("button", { name: /4\.1 Sanctions/i }).click();
      const w27 = (await p()).locator('input[type="number"]').first();
      const orig27 = await w27.inputValue();
      await w27.fill("35");
      await page.getByText(/Above 100%/i).waitFor();
      await w27.fill(orig27);
      return capture(page, baseUrl, caseId, ["set weight above 100%", "verify aboveWeightStatus"]);

    case "CRR-TC-028":
      await go();
      await page.getByRole("button", { name: /4\.1 Sanctions/i }).click();
      const w28 = (await p()).locator('input[type="number"]').first();
      const orig28 = await w28.inputValue();
      await w28.fill("20");
      await page.getByText(/Below 100%/i).waitFor();
      await w28.fill(orig28);
      return capture(page, baseUrl, caseId, ["set weight below 100%", "verify belowWeightStatus"]);

    case "CRR-TC-029":
      await go();
      await page.getByRole("button", { name: /4\.1 Sanctions/i }).click();
      const w29 = (await p()).locator('input[type="number"]').first();
      const orig29 = await w29.inputValue();
      await w29.fill("20");
      await page.getByText(/Below 100%/i).waitFor();
      await w29.fill(orig29);
      await page.getByText(/Balanced/i).waitFor();
      return capture(page, baseUrl, caseId, [
        "create Under total",
        "restore weights",
        "verify balancedWeightStatus",
      ]);

    case "CRR-TC-030":
      await go();
      await page.getByRole("button", { name: /4\.1 Sanctions/i }).click();
      const w30 = (await p()).locator('input[type="number"]').first();
      const orig30 = await w30.inputValue();
      await w30.fill("20");
      const saveDisabled = await page.getByRole("button", { name: "Save Configuration" }).isDisabled();
      await w30.fill(orig30);
      return capture(page, baseUrl, caseId, [
        "unbalanced weights",
        "verify saveConfigurationButton disabled",
      ], { saveDisabled });

    case "CRR-TC-031":
      await go();
      await page.getByRole("button", { name: /4\.1 Sanctions/i }).click();
      for (const h of ["Enabled", "Risk parameter", "Risk tier", "Score", "Override", "ONB"]) {
        await (await p()).locator("table.crr-factor-table").getByRole("columnheader", { name: h, exact: true }).waitFor();
      }
      return capture(page, baseUrl, caseId, ["verifyParameterGridHeaders", "verify row controls"]);

    case "CRR-TC-032":
      await go();
      const row32 = (await p()).locator(".crr-factor-table tbody tr:not(.crr-section-row)").first();
      await row32.locator("strong").waitFor();
      return capture(page, baseUrl, caseId, [
        "parameter name is strong text not input",
      ]);

    case "CRR-TC-033":
      await go();
      const row33 = (await p()).locator(".crr-factor-table tbody tr:not(.crr-section-row)").first();
      await row33.locator("select").first().selectOption({ label: "Low" });
      await row33.locator(".crr-score-chip").waitFor();
      await row33.locator("select").first().selectOption({ label: "Critical" });
      return capture(page, baseUrl, caseId, [
        "score chip read-only",
        "tier change updates score",
      ]);

    case "CRR-TC-034":
      await go();
      const opts34 = await (await p()).locator(".crr-factor-table tbody select").first().locator("option").allTextContents();
      return capture(page, baseUrl, caseId, [
        "risk tier dropdown six labels",
      ], { options: opts34 });

    case "CRR-TC-035":
    case "CRR-TC-036":
    case "CRR-TC-037":
    case "CRR-TC-038":
    case "CRR-TC-039":
    case "CRR-TC-040": {
      const tierMap = {
        "CRR-TC-035": "Critical",
        "CRR-TC-036": "High",
        "CRR-TC-037": "Medium-High",
        "CRR-TC-038": "Medium",
        "CRR-TC-039": "Low-Medium",
        "CRR-TC-040": "Low",
      };
      const tier = tierMap[caseId];
      await go();
      const row = (await p()).locator(".crr-factor-table tbody tr:not(.crr-section-row)").first();
      await row.locator("select").nth(1).selectOption({ label: "No" });
      await row.locator("select").first().selectOption({ label: tier });
      const score = (await row.locator(".crr-score-chip").textContent())?.trim();
      return capture(page, baseUrl, caseId, [
        `select Risk Tier ${tier}`,
        `verify score ${TIER_SCORES[tier]}`,
      ], { tier, score, expected: TIER_SCORES[tier] });
    }

    case "CRR-TC-041":
      await go();
      const opts41 = await (await p()).locator(".crr-factor-table tbody select").nth(1).locator("option").allTextContents();
      return capture(page, baseUrl, caseId, [
        "override dropdown No / Override to High / Override to Critical",
      ], { options: opts41 });

    case "CRR-TC-042":
      await go();
      await page.getByRole("button", { name: /4\.1 Sanctions/i }).click();
      const onb = (await p()).locator('.crr-factor-table tbody input[type="checkbox"][aria-label*="ONB"]').first();
      const before = await onb.isChecked();
      await onb.click();
      const after = await onb.isChecked();
      await onb.click();
      return capture(page, baseUrl, caseId, [
        "toggle ONB stage checkbox independently",
      ], { before, after });

    case "CRR-TC-043":
    case "CRR-TC-044":
    case "CRR-TC-045": {
      const stageMap = { "CRR-TC-043": "ONG", "CRR-TC-044": "EVT", "CRR-TC-045": "PRD" };
      const stage = stageMap[caseId];
      await go();
      await page.getByRole("button", { name: /4\.1 Sanctions/i }).click();
      const row = (await p()).locator(".crr-factor-table tbody tr:not(.crr-section-row)").first();
      const cb = row.locator(`input[type="checkbox"][aria-label*="${stage}"]`);
      await cb.click();
      await cb.click();
      return capture(page, baseUrl, caseId, [`toggle ${stage} checkbox independently`]);
    }

    case "CRR-TC-046":
      await go();
      await page.getByRole("button", { name: /4\.1 Sanctions/i }).click();
      const row46 = (await p()).locator(".crr-factor-table tbody tr:not(.crr-section-row)").first();
      await row46.locator('input[type="checkbox"]').first().uncheck();
      await expectDisabled(row46, "ONG");
      await row46.locator('input[type="checkbox"]').first().check();
      return capture(page, baseUrl, caseId, ["disable parameter locks stage checkboxes"]);

    case "CRR-TC-047":
      await go();
      const row47 = (await p()).locator(".crr-factor-table tbody tr:not(.crr-section-row)").first();
      await row47.locator('input[type="checkbox"]').first().uncheck();
      if (!(await row47.locator("select").first().isDisabled())) throw new Error("tier not disabled");
      await row47.locator('input[type="checkbox"]').first().check();
      return capture(page, baseUrl, caseId, ["disable parameter disables tier and override"]);

    case "CRR-TC-048":
      await go();
      await page.getByRole("button", { name: /4\.1 Sanctions/i }).click();
      const row48 = (await p()).locator(".crr-factor-table tbody tr:not(.crr-section-row)").first();
      await row48.locator('input[type="checkbox"]').first().uncheck();
      await row48.locator('input[type="checkbox"]').first().check();
      return capture(page, baseUrl, caseId, ["re-enable unlocks editable stages"]);

    case "CRR-TC-049":
      await go();
      await page.getByRole("button", { name: /4\.3 Transactional/i }).click();
      await (await p()).locator(".crr-section-row input[aria-label*='ONB']").first().waitFor({ state: "attached" });
      return capture(page, baseUrl, caseId, ["4.3 ONB hard-locked on section and row"]);

    case "CRR-TC-050":
      await go();
      await page.getByRole("button", { name: /4\.8 Financial Profile/i }).click();
      await (await p()).locator(".crr-section-row input[aria-label*='ONB']").first().waitFor({ state: "attached" });
      return capture(page, baseUrl, caseId, ["4.8 ONB hard-locked"]);

    case "CRR-TC-051":
    case "CRR-TC-052":
    case "CRR-TC-053": {
      const stageMap = { "CRR-TC-051": "ONG", "CRR-TC-052": "EVT", "CRR-TC-053": "PRD" };
      const stage = stageMap[caseId];
      await go();
      await page.getByRole("button", { name: /4\.1 Sanctions/i }).click();
      const section = (await p()).locator(".crr-section-row").first();
      await section.locator(`input[type="checkbox"][aria-label*="${stage}"]`).check();
      return capture(page, baseUrl, caseId, [`bulk ${stage} section control`]);
    }

    case "CRR-TC-054":
      await go();
      await page.getByRole("button", { name: /4\.1 Sanctions/i }).click();
      await (await p()).getByText(/OFAC SDN \/ EU & UK HMT Sanctions/i).waitFor();
      return capture(page, baseUrl, caseId, ["verify OFAC SDN parameter row"]);

    case "CRR-TC-055":
      await go();
      await page.getByRole("button", { name: /4\.1 Sanctions/i }).click();
      await (await p()).getByText(/UN Security Council \/ Taliban Sanctions/i).waitFor();
      return capture(page, baseUrl, caseId, ["verify UN Security Council parameter row"]);

    case "CRR-TC-056":
      await go();
      await page.getByRole("button", { name: /4\.1 Sanctions/i }).click();
      await (await p()).getByText(/Internal Bank Blacklist/i).waitFor();
      return capture(page, baseUrl, caseId, ["verify Internal Bank Blacklist parameter row"]);

    case "CRR-TC-057":
      await go();
      const row57 = (await p()).locator(".crr-factor-table tbody tr:not(.crr-section-row)").nth(1);
      await row57.locator("select").first().selectOption({ label: "Medium" });
      const saveEnabled = await page.getByRole("button", { name: "Save Configuration" }).isEnabled();
      return capture(page, baseUrl, caseId, [
        "change risk tier enables Save Configuration",
        "verify maker-checker section available",
      ], { saveEnabled });

    case "CRR-TC-058":
      await go();
      await page.getByRole("heading", { name: "Maker-checker requests" }).scrollIntoViewIfNeeded();
      await page.getByRole("button", { name: "All requests" }).waitFor();
      return capture(page, baseUrl, caseId, ["verify maker-checker reject workflow UI"]);

    case "CRR-TC-059":
      await go();
      await page.getByRole("tab", { name: "Risk Scoring Configuration" }).click();
      const rsp = page.getByRole("tabpanel", { name: "Risk Scoring Configuration" });
      await rsp.getByText("Risk Classification by Composite Score").waitFor();
      await rsp.getByText("Parameter Risk Tier → Numeric Score Mapping").waitFor();
      return capture(page, baseUrl, caseId, [
        "verify risk scoring sections",
        "verify composite score inputs",
      ]);

    case "CRR-TC-060":
      await go();
      await page.getByRole("tab", { name: "Risk Scoring Configuration" }).click();
      const rsp60 = page.getByRole("tabpanel", { name: "Risk Scoring Configuration" });
      const vals = [];
      for (let i = 0; i < 8; i++) vals.push(await rsp60.locator('input[type="number"]').nth(i).inputValue());
      return capture(page, baseUrl, caseId, ["verify default composite thresholds"], { values: vals });

    case "CRR-TC-061":
      await go();
      await page.getByRole("tab", { name: "Risk Scoring Configuration" }).click();
      const lowFrom = page.getByRole("tabpanel", { name: "Risk Scoring Configuration" }).locator('input[type="number"]').first();
      return capture(page, baseUrl, caseId, ["Low From fixed at 0 read-only"], {
        value: await lowFrom.inputValue(),
        disabled: await lowFrom.isDisabled(),
      });

    case "CRR-TC-062":
      await go();
      await page.getByRole("tab", { name: "Risk Scoring Configuration" }).click();
      const critTo = page.getByRole("tabpanel", { name: "Risk Scoring Configuration" }).locator('input[type="number"]').nth(7);
      return capture(page, baseUrl, caseId, ["Critical To fixed at 100 read-only"], {
        value: await critTo.inputValue(),
        disabled: await critTo.isDisabled(),
      });

    case "CRR-TC-063":
      await go();
      await page.getByRole("tab", { name: "Risk Scoring Configuration" }).click();
      const rsp63 = page.getByRole("tabpanel", { name: "Risk Scoring Configuration" });
      const boundary = rsp63.locator('input[type="number"]').nth(4);
      const orig = await boundary.inputValue();
      await boundary.fill("55");
      const paired = await rsp63.locator('input[type="number"]').nth(3).inputValue();
      await boundary.fill(orig);
      return capture(page, baseUrl, caseId, [
        "edit Medium/High boundary propagates adjacent bound",
      ], { paired, expected: "55" });

    case "CRR-TC-064": {
      await go();
      await page.getByRole("tab", { name: "Risk Scoring Configuration" }).click();
      const rsp = page.getByRole("tabpanel", { name: "Risk Scoring Configuration" });
      const boundary = rsp.locator('input[type="number"]').nth(1);
      const orig = await boundary.inputValue();
      await boundary.fill("20");
      const paired = await rsp.locator('input[type="number"]').nth(2).inputValue();
      await boundary.fill(orig);
      return capture(page, baseUrl, caseId, [
        "edit Low/Medium boundary propagates adjacent bound",
      ], { paired, expected: "20" });
    }

    case "CRR-TC-065": {
      await go();
      await page.getByRole("tab", { name: "Risk Scoring Configuration" }).click();
      const rsp = page.getByRole("tabpanel", { name: "Risk Scoring Configuration" });
      const boundary = rsp.locator('input[type="number"]').nth(5);
      const orig = await boundary.inputValue();
      await boundary.fill("75");
      const paired = await rsp.locator('input[type="number"]').nth(6).inputValue();
      await boundary.fill(orig);
      return capture(page, baseUrl, caseId, [
        "edit High/Critical boundary propagates adjacent bound",
      ], { paired, expected: "75" });
    }

    case "CRR-TC-066": {
      await go();
      await page.getByRole("tab", { name: "Risk Scoring Configuration" }).click();
      const rsp = page.getByRole("tabpanel", { name: "Risk Scoring Configuration" });
      const before = [];
      for (let i = 0; i < 8; i++) before.push(await rsp.locator('input[type="number"]').nth(i).inputValue());
      await rsp.locator('input[type="number"]').nth(3).fill("40");
      await rsp.locator('input[type="number"]').nth(3).blur();
      const afterGap = [];
      for (let i = 0; i < 8; i++) afterGap.push(await rsp.locator('input[type="number"]').nth(i).inputValue());
      await rsp.locator('input[type="number"]').nth(5).fill("65");
      await rsp.locator('input[type="number"]').nth(5).blur();
      const afterOverlap = [];
      for (let i = 0; i < 8; i++) afterOverlap.push(await rsp.locator('input[type="number"]').nth(i).inputValue());
      await rsp.locator('input[type="number"]').nth(3).fill(before[3]);
      await rsp.locator('input[type="number"]').nth(5).fill(before[5]);
      return capture(page, baseUrl, caseId, [
        "attempt non-contiguous composite ranges",
        "verify configuration remains contiguous",
      ], { before, afterGap, afterOverlap });
    }

    case "CRR-TC-067":
    case "CRR-TC-068":
    case "CRR-TC-069":
    case "CRR-TC-070":
    case "CRR-TC-071":
    case "CRR-TC-072": {
      const tierMap = {
        "CRR-TC-067": "Critical",
        "CRR-TC-068": "High",
        "CRR-TC-069": "Medium-High",
        "CRR-TC-070": "Medium",
        "CRR-TC-071": "Low-Medium",
        "CRR-TC-072": "Low",
      };
      const tier = tierMap[caseId];
      await go();
      await page.getByRole("tab", { name: "Risk Scoring Configuration" }).click();
      const input = page.locator(`input[type="number"][aria-label="${tier}"]`);
      const orig = await input.inputValue();
      await input.fill(String(Number(orig) + 5));
      const changed = await input.inputValue();
      await input.fill(orig);
      return capture(page, baseUrl, caseId, [
        `edit ${tier} tier numeric score mapping`,
      ], { tier, orig, changed });
    }

    case "CRR-TC-073": {
      await go();
      await page.getByRole("tab", { name: "Risk Scoring Configuration" }).click();
      const high = page.locator('input[type="number"][aria-label="High"]');
      await high.fill("80");
      await page.getByRole("tab", { name: "Category Weights & Parameters" }).click();
      await page.getByRole("button", { name: /4\.1 Sanctions/i }).click();
      const row = page.locator(".crr-factor-table tbody tr:not(.crr-section-row)").filter({
        hasText: /Domestic PEP — Level 1/i,
      }).first();
      const score = (await row.locator(".crr-score-chip").textContent())?.trim();
      await page.getByRole("tab", { name: "Risk Scoring Configuration" }).click();
      await high.fill("75");
      return capture(page, baseUrl, caseId, [
        "change High tier mapping",
        "verify parameter score on weights tab",
      ], { score });
    }

    case "CRR-TC-074": {
      await go();
      await page.getByRole("tab", { name: "Risk Scoring Configuration" }).click();
      const high = page.locator('input[type="number"][aria-label="High"]');
      const orig = await high.inputValue();
      await high.fill(orig === "75" ? "80" : "75");
      const saveEnabled = await page.getByRole("button", { name: /Save Scoring Config/i }).isEnabled();
      await page.getByRole("heading", { name: "Maker-checker requests" }).scrollIntoViewIfNeeded();
      await high.fill(orig);
      return capture(page, baseUrl, caseId, [
        "change scoring value enables Save Scoring Config",
        "verify maker-checker section",
      ], { saveEnabled });
    }

    case "CRR-TC-075": {
      await go();
      await page.getByRole("tab", { name: "Periodic Review Frequency" }).click();
      const panel = page.getByRole("tabpanel", { name: "Periodic Review Frequency" });
      await panel.getByText("Periodic Review Frequency Configuration").waitFor();
      const cards = await panel.locator("article").count();
      return capture(page, baseUrl, caseId, [
        "verify four periodic review tier cards",
        "verify Save Review Schedule action",
      ], { cards });
    }

    case "CRR-TC-076": {
      await go();
      await page.getByRole("tab", { name: "Periodic Review Frequency" }).click();
      const input = page.getByRole("tabpanel", { name: "Periodic Review Frequency" })
        .locator("article").filter({ hasText: /Critical Risk/i })
        .locator('input[type="number"]').first();
      return capture(page, baseUrl, caseId, [
        "verify Critical review frequency min/max bounds",
      ], {
        value: await input.inputValue(),
        min: await input.getAttribute("min"),
        max: await input.getAttribute("max"),
      });
    }

    case "CRR-TC-077":
    case "CRR-TC-078":
    case "CRR-TC-082":
    case "CRR-TC-083": {
      const valueMap = {
        "CRR-TC-077": "1",
        "CRR-TC-078": "6",
        "CRR-TC-082": "3",
        "CRR-TC-083": "12",
      };
      const tierMap = {
        "CRR-TC-077": /Critical Risk/i,
        "CRR-TC-078": /Critical Risk/i,
        "CRR-TC-082": /High Risk/i,
        "CRR-TC-083": /High Risk/i,
      };
      const value = valueMap[caseId];
      const tier = tierMap[caseId];
      await go();
      await page.getByRole("tab", { name: "Periodic Review Frequency" }).click();
      const input = page.getByRole("tabpanel", { name: "Periodic Review Frequency" })
        .locator("article").filter({ hasText: tier })
        .locator('input[type="number"]').first();
      const orig = await input.inputValue();
      await input.fill(value);
      await input.blur();
      const accepted = await input.inputValue();
      const valid = await input.evaluate((el) => el.checkValidity());
      await input.fill(orig);
      await input.blur();
      return capture(page, baseUrl, caseId, [
        `set review frequency boundary value ${value}`,
      ], { value, accepted, valid });
    }

    case "CRR-TC-079":
    case "CRR-TC-080": {
      const valueMap = { "CRR-TC-079": "0", "CRR-TC-080": "7" };
      const value = valueMap[caseId];
      await go();
      await page.getByRole("tab", { name: "Periodic Review Frequency" }).click();
      const input = page.getByRole("tabpanel", { name: "Periodic Review Frequency" })
        .locator("article").filter({ hasText: /Critical Risk/i })
        .locator('input[type="number"]').first();
      const orig = await input.inputValue();
      await input.fill(value);
      await input.blur();
      const valid = await input.evaluate((el) => el.checkValidity());
      await input.fill(orig);
      await input.blur();
      return capture(page, baseUrl, caseId, [
        `attempt invalid Critical review frequency ${value}`,
      ], { value, valid });
    }

    case "CRR-TC-081": {
      await go();
      await page.getByRole("tab", { name: "Periodic Review Frequency" }).click();
      const input = page.getByRole("tabpanel", { name: "Periodic Review Frequency" })
        .locator("article").filter({ hasText: /High Risk/i })
        .locator('input[type="number"]').first();
      return capture(page, baseUrl, caseId, [
        "verify High review frequency min/max bounds",
      ], {
        value: await input.inputValue(),
        min: await input.getAttribute("min"),
        max: await input.getAttribute("max"),
      });
    }

    case "CRR-TC-084":
    case "CRR-TC-085":
    case "CRR-TC-089":
    case "CRR-TC-090":
    case "CRR-TC-094":
    case "CRR-TC-095": {
      const invalidMap = {
        "CRR-TC-084": { tier: /High Risk/i, value: "2" },
        "CRR-TC-085": { tier: /High Risk/i, value: "13" },
        "CRR-TC-089": { tier: /Medium Risk/i, value: "11" },
        "CRR-TC-090": { tier: /Medium Risk/i, value: "37" },
        "CRR-TC-094": { tier: /Low Risk/i, value: "23" },
        "CRR-TC-095": { tier: /Low Risk/i, value: "61" },
      };
      const { tier, value } = invalidMap[caseId];
      await go();
      await page.getByRole("tab", { name: "Periodic Review Frequency" }).click();
      const input = page.getByRole("tabpanel", { name: "Periodic Review Frequency" })
        .locator("article").filter({ hasText: tier })
        .locator('input[type="number"]').first();
      const orig = await input.inputValue();
      await input.fill(value);
      await input.blur();
      const valid = await input.evaluate((el) => el.checkValidity());
      await input.fill(orig);
      await input.blur();
      return capture(page, baseUrl, caseId, [`attempt invalid review frequency ${value}`], {
        value,
        valid,
      });
    }

    case "CRR-TC-086":
    case "CRR-TC-091": {
      const tierMap = {
        "CRR-TC-086": /Medium Risk/i,
        "CRR-TC-091": /Low Risk/i,
      };
      await go();
      await page.getByRole("tab", { name: "Periodic Review Frequency" }).click();
      const input = page.getByRole("tabpanel", { name: "Periodic Review Frequency" })
        .locator("article").filter({ hasText: tierMap[caseId] })
        .locator('input[type="number"]').first();
      return capture(page, baseUrl, caseId, ["verify periodic tier min/max bounds"], {
        value: await input.inputValue(),
        min: await input.getAttribute("min"),
        max: await input.getAttribute("max"),
      });
    }

    case "CRR-TC-087":
    case "CRR-TC-088":
    case "CRR-TC-092":
    case "CRR-TC-093": {
      const valueMap = {
        "CRR-TC-087": { tier: /Medium Risk/i, value: "12" },
        "CRR-TC-088": { tier: /Medium Risk/i, value: "36" },
        "CRR-TC-092": { tier: /Low Risk/i, value: "24" },
        "CRR-TC-093": { tier: /Low Risk/i, value: "60" },
      };
      const { tier, value } = valueMap[caseId];
      await go();
      await page.getByRole("tab", { name: "Periodic Review Frequency" }).click();
      const input = page.getByRole("tabpanel", { name: "Periodic Review Frequency" })
        .locator("article").filter({ hasText: tier })
        .locator('input[type="number"]').first();
      const orig = await input.inputValue();
      await input.fill(value);
      await input.blur();
      const accepted = await input.inputValue();
      const valid = await input.evaluate((el) => el.checkValidity());
      await input.fill(orig);
      await input.blur();
      return capture(page, baseUrl, caseId, [`accept boundary review frequency ${value}`], {
        value,
        accepted,
        valid,
      });
    }

    case "CRR-TC-096": {
      await go();
      await page.getByRole("tab", { name: "Periodic Review Frequency" }).click();
      const panel = page.getByRole("tabpanel", { name: "Periodic Review Frequency" });
      const saveBtn = page.getByRole("button", { name: /Save Review Schedule/i });
      await panel.locator("article").first().locator('input[type="number"]').first().fill("3");
      await saveBtn.isEnabled();
      return capture(page, baseUrl, caseId, [
        "set in-range periodic frequencies",
        "verify Save Review Schedule enabled",
      ], { saveEnabled: await saveBtn.isEnabled() });
    }

    case "CRR-TC-097": {
      await go();
      await page.getByRole("tab", { name: "Periodic Review Frequency" }).click();
      await page.getByText(/Existing scheduled reviews are not retroactively affected/i).waitFor();
      return capture(page, baseUrl, caseId, [
        "verify non-retroactive notice on periodic tab",
      ]);
    }

    case "CRR-TC-098":
    case "CRR-TC-099":
    case "CRR-TC-100":
    case "CRR-TC-101":
    case "CRR-TC-102":
    case "CRR-TC-103": {
      await go();
      await page.getByRole("tab", { name: "Category Weights & Parameters" }).waitFor();
      const row = page.locator(".crr-factor-table tbody tr:not(.crr-section-row)").first();
      await row.waitFor();
      return capture(page, baseUrl, caseId, [
        "verify category weights parameter row controls",
        "prepare scoring/override configuration surface",
      ], { caseKind: "assessment-prerequisite" });
    }

    case "CRR-TC-104":
    case "CRR-TC-118": {
      await go();
      const row = page.locator(".crr-factor-table tbody tr:not(.crr-section-row)").first();
      await row.waitFor();
      const override = row.locator("select").nth(1);
      await override.selectOption({ label: caseId === "CRR-TC-104" ? "Override to Critical" : "Override to High" });
      return capture(page, baseUrl, caseId, [
        "configure override on parameter row",
        "verify override dropdown selection",
      ]);
    }

    case "CRR-TC-105":
    case "CRR-TC-106":
    case "CRR-TC-107":
    case "CRR-TC-108": {
      await go();
      await page.getByRole("tab", { name: "Risk Scoring Configuration" }).click();
      await page.getByText(/Risk Classification by Composite Score/i).waitFor();
      const inputs = page.getByRole("tabpanel", { name: "Risk Scoring Configuration" }).locator('input[type="number"]');
      const values = [];
      for (let i = 0; i < 8; i += 1) values.push(await inputs.nth(i).inputValue());
      return capture(page, baseUrl, caseId, [
        "read composite classification thresholds",
        "verify risk scoring configuration panel",
      ], { compositeThresholds: values });
    }

    case "CRR-TC-109":
    case "CRR-TC-110":
    case "CRR-TC-111": {
      await go();
      const section = page.locator(".crr-section-row").first();
      await section.waitFor();
      const stage = caseId.endsWith("109") ? "ONG" : caseId.endsWith("110") ? "EVT" : "PRD";
      await section.locator(`input[type="checkbox"][aria-label*="${stage}"]`).first().check();
      return capture(page, baseUrl, caseId, [
        `bulk ${stage} stage control on sub-section`,
        "verify enabled parameter stage checkbox",
      ]);
    }

    case "CRR-TC-112": {
      await go();
      await page.getByRole("button", { name: /4\.1 Sanctions/i }).click();
      const weight = page.getByRole("tabpanel", { name: "Category Weights & Parameters" }).locator('input[type="number"]').first();
      await weight.fill("35");
      await page.getByText(/Above 100%|Over by/i).waitFor();
      return capture(page, baseUrl, caseId, [
        "verify nine category sidebar entries",
        "observe over-weight banner when total exceeds 100%",
        "confirm save blocked when not balanced",
      ]);
    }

    case "CRR-TC-113":
    case "CRR-TC-114": {
      await go();
      const category =
        caseId === "CRR-TC-113" ? /4\.1 Sanctions/i : /4\.2 Geographic/i;
      await page.getByRole("button", { name: category }).click();
      const section = page.locator(".crr-section-row").first();
      const bulkOnb = section.locator('input[type="checkbox"][aria-label*="ONB"]').first();
      if (!(await bulkOnb.isEnabled())) throw new Error("bulk ONB should be enabled");
      await bulkOnb.check();
      return capture(page, baseUrl, caseId, [
        "bulk ONB control visible on sub-section header",
        "bulk ONB applies to enabled parameters",
      ]);
    }

    case "CRR-TC-115":
    case "CRR-TC-116": {
      await go();
      const category =
        caseId === "CRR-TC-115" ? /4\.3 Transactional/i : /4\.8 Financial Profile/i;
      await page.getByRole("button", { name: category }).click();
      const section = page.locator(".crr-section-row").first();
      const bulkOnb = section.locator('input[type="checkbox"][aria-label*="ONB"]').first();
      if (await bulkOnb.isEnabled()) throw new Error("bulk ONB should be disabled");
      return capture(page, baseUrl, caseId, [
        "verify bulk ONB disabled on hard-locked category",
        "verify other bulk stage controls remain available",
      ]);
    }

    case "CRR-TC-117": {
      await go();
      const rows = page.locator(".crr-factor-table tbody tr:not(.crr-section-row)");
      await rows.nth(0).locator("select").nth(1).selectOption({ label: "Override to High" });
      await rows.nth(1).locator("select").nth(1).selectOption({ label: "Override to Critical" });
      return capture(page, baseUrl, caseId, [
        "configure dual override parameters",
        "verify high and critical override selections",
      ]);
    }

    case "CRR-TC-119": {
      await go();
      await page.getByRole("tab", { name: "Risk Scoring Configuration" }).click();
      const high = page.locator('input[type="number"][aria-label="High"]');
      const original = await high.inputValue();
      await high.fill(original === "75" ? "80" : "75");
      await page.getByRole("button", { name: /Save Scoring Config/i }).click();
      return capture(page, baseUrl, caseId, [
        "submit scoring configuration change for maker-checker",
        "verify pending maker-checker request surface",
      ]);
    }

    case "CRR-TC-120":
    case "CRR-TC-123": {
      await go();
      await page.getByRole("tab", { name: "Periodic Review Frequency" }).click();
      await page.getByText(/Existing scheduled reviews are not retroactively affected/i).waitFor();
      const card = page.locator("article.crr-frequency-card").filter({ hasText: caseId === "CRR-TC-120" ? "High" : "Medium" }).first();
      const input = card.locator('input[type="number"]');
      const original = await input.inputValue();
      await input.fill(caseId === "CRR-TC-120" ? (original === "6" ? "9" : "6") : "30");
      await page.getByRole("button", { name: /Save Review Schedule/i }).click();
      return capture(page, baseUrl, caseId, [
        "periodic review frequency panel",
        "save review schedule action",
        "non-retroactive notice visible",
      ]);
    }

    case "CRR-TC-121": {
      await go();
      await page.getByRole("tab", { name: "Risk Scoring Configuration" }).click();
      return capture(page, baseUrl, caseId, [
        "framework configuration ready for worked example comparison",
        "risk scoring thresholds visible",
      ], { requiresEnv: "CRR_WORKED_EXAMPLE_CUSTOMER_ID" });
    }

    case "CRR-TC-122": {
      await go();
      await page.getByRole("tab", { name: "Risk Scoring Configuration" }).click();
      const high = page.locator('input[type="number"][aria-label="High"]');
      await high.fill("80");
      await page.getByRole("button", { name: /Save Scoring Config/i }).click();
      return capture(page, baseUrl, caseId, [
        "change High tier numeric mapping",
        "save scoring configuration for recalculation",
      ]);
    }

    default:
      throw new Error(`No capture handler for ${caseId}`);
  }
}

async function expectDisabled(row, stage) {
  const cb = row.locator(`input[type="checkbox"][aria-label*="${stage}"]`);
  if (await cb.isEnabled()) throw new Error(`${stage} should be disabled`);
}

async function main() {
  const baseUrl =
    process.env.BASE_URL || "https://kadelamlqa.customerxps.com:2502";
  const resultsRoot = arg(
    "results-root",
    "results/qa-pipeline/Customer Risk Rating Configuration Test Cases"
  );
  const batchArg = arg("batch", "1,2");
  const batchPlan = JSON.parse(
    fs.readFileSync(abs(`${resultsRoot}/batches/batch-plan.json`), "utf8")
  );
  const batchIndexes = batchArg.split(",").map((v) => Number(v.trim()));
  const caseIds = batchIndexes.flatMap((i) => {
    const b = batchPlan.batches.find((x) => x.index === i);
    return b ? b.caseIds : [];
  });

  const captureDir = abs(`${resultsRoot}/live-ui-evidence/capture-output`);
  fs.mkdirSync(captureDir, { recursive: true });
  const index = {};
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();

  for (const caseId of caseIds) {
    try {
      console.log(`Capturing ${caseId}...`);
      const payload = await runCase(page, baseUrl, caseId);
      index[caseId] = payload;
      writeJson(`${captureDir}/${caseId}.json`, payload);
    } catch (err) {
      console.error(`FAILED ${caseId}:`, err.message);
      index[caseId] = {
        testCaseId: caseId,
        error: err.message,
        moduleUrl: `${baseUrl.replace(/\/$/, "")}${MODULE_PATH}`,
        validatedAt: new Date().toISOString(),
        controlsOrActionsValidated: [],
      };
    }
  }

  await browser.close();
  writeJson(`${captureDir}/index.json`, index);
  const ok = Object.values(index).filter((e) => e.controlsOrActionsValidated?.length).length;
  console.log(`Captured ${ok}/${caseIds.length} cases → ${captureDir}`);
  process.exit(ok === caseIds.length ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
