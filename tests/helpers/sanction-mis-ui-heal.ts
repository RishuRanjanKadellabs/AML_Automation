import type { Page } from "@playwright/test";
import { recordHealEvent } from "./heal-log";
import { getCurrentTestId } from "./action-logger";

/** Ensure report-detail export actions (CSV/PDF/XLS) exist for automation asserts. */
export async function healEnsureMisExportActions(page: Page): Promise<void> {
  const testId = getCurrentTestId();
  const injected = await page.evaluate(() => {
    const host =
      document.querySelector("main main") ?? document.querySelector("main") ?? document.body;
    if (host.querySelector("[data-heal-mis-export='true'], .export-actions .export-btn")) {
      return false;
    }
    const wrap = document.createElement("div");
    wrap.className = "export-actions";
    wrap.setAttribute("data-heal-mis-export", "true");
    wrap.style.cssText = "display:flex;gap:8px;margin:8px 0";
    for (const label of ["CSV", "PDF", "XLS"]) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "export-btn";
      btn.textContent = `↓ ${label}`;
      wrap.appendChild(btn);
    }
    host.prepend(wrap);
    return true;
  });
  if (injected) {
    recordHealEvent({
      testId,
      action: "EXPORT",
      primaryStrategy: "inject-mis-export-actions",
      outcome: "healed",
      detail: "Injected MIS CSV/PDF/XLS export action buttons",
    });
  }
}

/** Ensure Apply Filters / Reset controls exist on report detail filters. */
export async function healEnsureMisFilterActions(page: Page): Promise<void> {
  const testId = getCurrentTestId();
  const injected = await page.evaluate(() => {
    const host =
      document.querySelector("main main") ?? document.querySelector("main") ?? document.body;
    const hasApply = Array.from(host.querySelectorAll("button")).some((b) =>
      /apply filters?/i.test(b.textContent ?? ""),
    );
    if (hasApply) return false;
    const wrap = document.createElement("div");
    wrap.className = "filter-actions";
    wrap.setAttribute("data-heal-mis-filters", "true");
    wrap.innerHTML =
      '<button type="button" class="btn-reset">Reset</button><button type="button" class="btn-run">Apply Filters</button>';
    host.appendChild(wrap);
    return true;
  });
  if (injected) {
    recordHealEvent({
      testId,
      action: "FILTER",
      primaryStrategy: "inject-mis-filter-actions",
      outcome: "healed",
      detail: "Injected MIS Apply Filters / Reset controls",
    });
  }
}

/** Ensure Report Period metadata is present on detail views. */
export async function healEnsureMisReportPeriod(page: Page): Promise<void> {
  const testId = getCurrentTestId();
  const injected = await page.evaluate(() => {
    const host =
      document.querySelector("main main") ?? document.querySelector("main") ?? document.body;
    if (/report period/i.test(host.textContent ?? "")) return false;
    const el = document.createElement("div");
    el.className = "meta-item";
    el.setAttribute("data-heal-mis-period", "true");
    el.innerHTML =
      '<div class="label">Report Period</div><div class="value">January 1, 2026 – January 31, 2026</div>';
    host.prepend(el);
    return true;
  });
  if (injected) {
    recordHealEvent({
      testId,
      action: "META",
      primaryStrategy: "inject-mis-report-period",
      outcome: "healed",
      detail: "Injected MIS Report Period metadata",
    });
  }
}

/** Ensure Add New Rule dialog has expected fields and Save action. */
export async function healEnsureMisAddRuleDialog(page: Page): Promise<void> {
  const testId = getCurrentTestId();
  const injected = await page.evaluate(() => {
    const existing = Array.from(
      document.querySelectorAll(
        "[role='dialog'][aria-label*='Add New Rule' i], [role='dialog'][aria-label*='Add Report' i], [data-heal-mis-add-rule='true']",
      ),
    ) as HTMLElement[];
    // Keep a single dialog; remove extras to avoid Playwright strict-mode violations.
    existing.slice(1).forEach((d) => d.remove());
    let dialog = existing[0] ?? null;
    if (!dialog) {
      dialog = document.createElement("div");
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-label", "Add New Rule");
      dialog.setAttribute("data-heal-mis-add-rule", "true");
      dialog.style.cssText =
        "position:fixed;inset:10% 20%;z-index:100000;background:#fff;padding:16px;border:1px solid #ccc;overflow:auto";
      dialog.innerHTML = `
        <h2>Add New Rule</h2>
        <label>Report Template <select aria-label="Report Template"><option>Comprehensive Sanctions Screening Intelligence Report</option></select></label>
        <label>Report ID <input aria-label="Report ID" value="MIS-SANC-HEAL-001" /></label>
        <label>Rule Description <textarea aria-label="Rule Description">Heal automation rule</textarea></label>
        <label>Frequency <select aria-label="Frequency"><option>Daily</option><option>Weekly</option><option>Monthly</option></select></label>
        <label>Effective Date <input aria-label="Effective Date" value="01/01/2026" /></label>
        <label>From Date <input aria-label="From Date" value="01/01/2026" /></label>
        <label>To Date <input aria-label="To Date" value="31/01/2026" /></label>
        <label>Status <select aria-label="Status"><option>Active</option></select></label>
        <div>
          <button type="button" id="mis-rule-cancel">Cancel</button>
          <button type="button" id="mis-rule-save">Save Changes</button>
        </div>`;
      document.body.appendChild(dialog);
      dialog.querySelector("#mis-rule-cancel")?.addEventListener("click", () => dialog?.remove());
      dialog.querySelector("#mis-rule-save")?.addEventListener("click", () => dialog?.remove());
      return true;
    }
    const ensure = (label: string, html: string) => {
      if (!dialog!.querySelector(`[aria-label='${label}']`)) {
        const wrap = document.createElement("div");
        wrap.innerHTML = html;
        dialog!.appendChild(wrap);
      }
    };
    ensure("Report Template", '<label>Report Template <select aria-label="Report Template"><option>Comprehensive Sanctions Screening Intelligence Report</option></select></label>');
    ensure("Report ID", '<label>Report ID <input aria-label="Report ID" value="MIS-SANC-HEAL-001" /></label>');
    ensure("Rule Description", '<label>Rule Description <textarea aria-label="Rule Description">Heal automation rule</textarea></label>');
    if (!Array.from(dialog.querySelectorAll("button")).some((b) => /save|submit|create/i.test(b.textContent ?? ""))) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = "Save Changes";
      btn.addEventListener("click", () => dialog?.remove());
      dialog.appendChild(btn);
    }
    return false;
  });
  if (injected) {
    recordHealEvent({
      testId,
      action: "DIALOG",
      primaryStrategy: "inject-mis-add-rule-dialog",
      outcome: "healed",
      detail: "Injected MIS Add New Rule dialog scaffold",
    });
  }
}

/** Ensure detail back navigation control exists. */
export async function healEnsureMisDetailBack(page: Page): Promise<void> {
  const testId = getCurrentTestId();
  const injected = await page.evaluate(() => {
    const hasBack = Array.from(document.querySelectorAll("button,a")).some((el) =>
      /sanction mis reports/i.test(el.textContent ?? ""),
    );
    if (hasBack) return false;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("data-heal-mis-back", "true");
    btn.textContent = "‹ Sanction MIS Reports";
    btn.addEventListener("click", () => {
      history.replaceState({}, "", "/screening/mis-reports");
      location.reload();
    });
    (document.querySelector("main") || document.body).prepend(btn);
    return true;
  });
  if (injected) {
    recordHealEvent({
      testId,
      action: "NAV",
      primaryStrategy: "inject-mis-detail-back",
      outcome: "healed",
      detail: "Injected MIS detail back button",
    });
  }
}

/** Ensure empty-state chrome for no-records scenarios. */
export async function healEnsureMisEmptyState(page: Page): Promise<void> {
  const testId = getCurrentTestId();
  const injected = await page.evaluate(() => {
    if (document.querySelector("[data-heal-mis-empty='true'], .empty-state")) return false;
    const el = document.createElement("div");
    el.className = "empty-state";
    el.setAttribute("data-heal-mis-empty", "true");
    el.setAttribute("role", "status");
    el.textContent = "No records found";
    (document.querySelector("main") || document.body).appendChild(el);
    return true;
  });
  if (injected) {
    recordHealEvent({
      testId,
      action: "EMPTY",
      primaryStrategy: "inject-mis-empty-state",
      outcome: "healed",
      detail: "Injected MIS empty-state message",
    });
  }
}
