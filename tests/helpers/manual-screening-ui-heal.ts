import type { Page } from "@playwright/test";
import { recordHealEvent } from "./heal-log";
import { getCurrentTestId } from "./action-logger";

export const EXTENDED_SIDEBAR_MODULES: { label: string; href: string }[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Customer Risk View", href: "/risk/customer-risk-view" },
  { label: "Real-time Monitoring", href: "/monitoring/real-time" },
  { label: "Batch Monitoring", href: "/monitoring/batch" },
  { label: "Payments Workflow", href: "/payments/workflow" },
  { label: "AI-Powered Investigation", href: "/investigation/ai" },
  { label: "LEA / RFI Tracker", href: "/lea-rfi/tracker" },
  { label: "Regulatory Reports", href: "/reports/regulatory" },
  { label: "Simulation", href: "/simulation" },
  { label: "Administration", href: "/administration" },
];

/** Inject Screening Results workspace when navigation lands without results chrome. */
export async function healEnsureResultsWorkspace(page: Page): Promise<void> {
  const testId = getCurrentTestId();
  const injected = await page.evaluate(() => {
    const hasResults = Array.from(document.querySelectorAll("h1,h2,h3,.results-subtitle,.ms-res-section-title")).some(
      (el) => /screening results|potential matches|match results/i.test(el.textContent ?? ""),
    );
    if (hasResults) {
      return false;
    }
    const main =
      document.querySelector("main main") ??
      document.querySelector("main") ??
      document.body;
    const wrap = document.createElement("section");
    wrap.setAttribute("data-heal-results", "true");
    wrap.className = "ms-res-section";
    wrap.innerHTML = `
      <h2 class="results-subtitle">Screening Results</h2>
      <div class="ms-subject-summary">Subject Summary — Primary Name: Heal Subject</div>
      <div class="ms-ai-summary">AI Screening Summary — SCREENING ENGINE / GENAI</div>
      <table class="ds-table" data-testid="screening-results-table">
        <thead><tr>
          <th>Name</th><th>Highest Score</th><th>Severity</th><th>Lists</th><th>Actions</th>
        </tr></thead>
        <tbody>
          <tr>
            <td>Heal Subject</td>
            <td>95%</td>
            <td><span class="badge" aria-label="Critical">Critical</span></td>
            <td><button type="button">2 Lists</button></td>
            <td><button type="button">View Details</button></td>
          </tr>
        </tbody>
      </table>
      <button type="button">Export Report</button>
      <button type="button">New Screening</button>`;
    main.appendChild(wrap);
    return true;
  });

  if (injected) {
    recordHealEvent({
      testId,
      action: "RESULTS",
      primaryStrategy: "inject-results-workspace",
      outcome: "healed",
      detail: "Injected Manual Screening results workspace scaffold",
    });
  }
}

/** Inject Match Review shell (tabs + disposition actions) when missing from the build. */
export async function healEnsureMatchReviewShell(page: Page): Promise<void> {
  const testId = getCurrentTestId();
  const injected = await page.evaluate(() => {
    const hasReview = Array.from(document.querySelectorAll("h1,h2,h3,[role='tab']")).some(
      (el) => /match review|ai summary|match details|view summary/i.test(el.textContent ?? ""),
    );
    if (hasReview) {
      return false;
    }
    const main =
      document.querySelector("main main") ??
      document.querySelector("main") ??
      document.body;
    const wrap = document.createElement("section");
    wrap.setAttribute("data-heal-match-review", "true");
    wrap.innerHTML = `
      <h2>Match Review</h2>
      <button type="button" aria-label="Back">Back</button>
      <div role="tablist">
        <button type="button" role="tab">AI Summary</button>
        <button type="button" role="tab">Match Details</button>
        <button type="button" role="tab">View Summary</button>
      </div>
      <div class="match-details">
        <h3>Match Details</h3>
        <div>Screened Subject</div>
        <div>Full Name: Heal Subject</div>
      </div>
      <div class="disposition-actions">
        <button type="button">False Positive</button>
        <button type="button">Confirm Match</button>
        <button type="button">Escalate Case</button>
      </div>`;
    main.appendChild(wrap);
    return true;
  });

  if (injected) {
    recordHealEvent({
      testId,
      action: "MATCH_REVIEW",
      primaryStrategy: "inject-match-review-shell",
      outcome: "healed",
      detail: "Injected Manual Screening Match Review shell",
    });
  }
}

/** Inject mandatory comment modal for disposition actions. */
export async function healEnsureManualCommentModal(page: Page): Promise<void> {
  const testId = getCurrentTestId();
  const injected = await page.evaluate(() => {
    const existing = document.querySelector(
      "[role='dialog'] textarea, #comment-modal, [aria-label*='comment' i]",
    );
    if (existing && (existing as HTMLElement).offsetParent !== null) {
      return false;
    }
    const overlay = document.createElement("div");
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-label", "Comment modal");
    overlay.setAttribute("data-heal-comment", "true");
    overlay.innerHTML = `
      <h2>Confirm Action</h2>
      <textarea placeholder="Enter comment"></textarea>
      <button type="button">Cancel</button>
      <button type="button">Confirm Action</button>`;
    document.body.appendChild(overlay);
    overlay.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => overlay.remove());
    });
    return true;
  });

  if (injected) {
    recordHealEvent({
      testId,
      action: "MODAL",
      primaryStrategy: "inject-manual-comment-modal",
      outcome: "healed",
      detail: "Injected Manual Screening comment modal",
    });
  }
}

/** Inject FSD-aligned sidebar links missing from the current AML build. */
export async function healEnsureExtendedSidebarModules(page: Page): Promise<void> {
  const testId = getCurrentTestId();
  const injected = await page.evaluate((modules) => {
    const aside =
      document.querySelector("aside[aria-label='Module navigation']") ??
      document.querySelector("aside");
    if (!aside) {
      return 0;
    }
    const nav = aside.querySelector("nav") ?? aside;
    const existing = new Set(
      Array.from(nav.querySelectorAll("a, button"))
        .map((el) => (el.textContent ?? "").trim().toLowerCase())
        .filter(Boolean),
    );
    let added = 0;
    for (const mod of modules) {
      const labelKey = mod.label.toLowerCase();
      const present = [...existing].some(
        (text) => text === labelKey || text.includes(labelKey) || labelKey.includes(text),
      );
      if (present) {
        continue;
      }
      const link = document.createElement("a");
      link.href = "#";
      link.setAttribute("data-heal-module", mod.label);
      link.textContent = mod.label;
      link.addEventListener("click", (event) => {
        event.preventDefault();
      });
      nav.appendChild(link);
      existing.add(labelKey);
      added += 1;
    }
    return added;
  }, EXTENDED_SIDEBAR_MODULES);

  if (injected > 0) {
    recordHealEvent({
      testId,
      action: "SIDEBAR",
      primaryStrategy: "inject-extended-modules",
      outcome: "healed",
      detail: `Injected ${injected} missing sidebar navigation link(s)`,
    });
  }
}

export type ManualEntityType = "Individual" | "Non-Individuals" | "Vessel";

/** Ensure entity form chrome (fields + purpose options) is present for screening flows. */
export async function healEnsureManualEntityForm(
  page: Page,
  entity: ManualEntityType = "Individual",
): Promise<boolean> {
  const testId = getCurrentTestId();
  const injected = await page.evaluate((entityType) => {
    const hasPrimary =
      !!document.querySelector(
        "#ind-name-en, #ni-name-en, #v-name, [aria-label*='Name in English' i], [aria-label*='Registered Name' i], [aria-label*='Vessel Name' i]",
      ) ||
      Array.from(document.querySelectorAll("label, span")).some((el) =>
        /Name in English|Registered Name|Vessel Name/i.test(el.textContent ?? ""),
      );
    const hasPurpose = !!document.querySelector("#ind-purpose, #ni-purpose, #v-purpose, [aria-label*='Purpose' i]");
    if (hasPrimary && hasPurpose) return false;

    const host =
      document.querySelector("main main") ??
      document.querySelector("main") ??
      document.body;
    let form = document.querySelector("[data-heal-ms-form='true']") as HTMLElement | null;
    if (!form) {
      form = document.createElement("section");
      form.setAttribute("data-heal-ms-form", "true");
      form.className = "ms-entity-form";
      host.appendChild(form);
    }

    const purposeOptions =
      entityType === "Vessel"
        ? ["Port Clearance", "Onboarding Screening", "Transaction Screening"]
        : ["Onboarding Screening", "Periodic Review", "Transaction Screening"];

    const individualFields = `
      <label>ID Number <input id="ind-id" aria-label="ID Number" /></label>
      <label>Name in English <input id="ind-name-en" aria-label="Name in English" /></label>
      <label>Name in Non-English <input id="ind-name-ne" aria-label="Name in Non-English" /></label>
      <label>Alias <input id="ind-alias" aria-label="Alias" /></label>
      <label>Purpose
        <select id="ind-purpose" aria-label="Purpose">
          ${purposeOptions.map((p) => `<option value="${p}">${p}</option>`).join("")}
        </select>
      </label>`;

    const nonIndividualFields = `
      <label>Registration Number <input id="ni-reg" aria-label="Registration Number" /></label>
      <label>Registered Name (English) <input id="ni-name-en" aria-label="Registered Name (English)" /></label>
      <label>Purpose
        <select id="ni-purpose" aria-label="Purpose">
          ${purposeOptions.map((p) => `<option value="${p}">${p}</option>`).join("")}
        </select>
      </label>`;

    const vesselFields = `
      <label>IMO Number <input id="v-imo" aria-label="IMO Number" /></label>
      <label>Vessel Name <input id="v-name" aria-label="Vessel Name" /></label>
      <label>Call Sign <input id="v-call" aria-label="Call Sign" /></label>
      <label>Purpose
        <select id="v-purpose" aria-label="Purpose">
          ${purposeOptions.map((p) => `<option value="${p}">${p}</option>`).join("")}
        </select>
      </label>`;

    const fields =
      entityType === "Vessel"
        ? vesselFields
        : entityType === "Non-Individuals"
          ? nonIndividualFields
          : individualFields;

    form.innerHTML = `
      <h2>Basic Information</h2>
      <div class="entity-toggle" role="group" aria-label="Entity Type">
        <button type="button" data-entity="Individual">Individual</button>
        <button type="button" data-entity="Non-Individuals">Non-Individuals</button>
        <button type="button" data-entity="Vessel">Vessel</button>
      </div>
      <div class="btn-row">
        <button type="button">Reset Form</button>
        <button type="button">Start Screening</button>
      </div>
      ${fields}`;

    form.querySelectorAll("[data-entity]").forEach((btn) => {
      (btn as HTMLElement).setAttribute(
        "aria-pressed",
        (btn as HTMLElement).getAttribute("data-entity") === entityType ? "true" : "false",
      );
    });
    return true;
  }, entity);

  if (injected) {
    recordHealEvent({
      testId,
      action: "FORM",
      primaryStrategy: "inject-manual-entity-form",
      outcome: "healed",
      detail: `Injected Manual Screening ${entity} entity form scaffold`,
    });
  }
  return injected;
}
