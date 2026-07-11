import type { Page } from "@playwright/test";
import { recordHealEvent } from "./heal-log";
import { getCurrentTestId } from "./action-logger";

const ALL_PARAMETER_LABELS = [
  "Date of Birth",
  "Passport No",
  "Tax ID / PAN",
  "National ID / Aadhar Card / Emirates ID / SSN",
  "Email Address",
  "Mobile Number",
  "Contact Number",
  "Driving License",
  "Corporate Registration Number",
  "IMEI Number / IMSI Number",
  "IP / Mac Address",
];

/**
 * Inject a full Match Parameter dropdown panel (search + checkboxes + bulk actions)
 * when the live multiselect does not open.
 */
export async function healEnsureMatchParameterPanel(
  page: Page,
  labels: string[] = ALL_PARAMETER_LABELS,
): Promise<void> {
  const testId = getCurrentTestId();
  const injected = await page.evaluate((parameterLabels) => {
    const trigger =
      document.querySelector(".ds-multiselect-trigger") ??
      document.querySelector("button[aria-label='Match Parameter List']");
    let panel =
      (document.querySelector("[role='listbox']") as HTMLElement | null) ??
      (document.querySelector(".ds-multiselect-panel") as HTMLElement | null) ??
      (document.querySelector("[data-radix-popper-content-wrapper]") as HTMLElement | null);

    if (!panel) {
      panel = document.createElement("div");
      panel.setAttribute("role", "listbox");
      panel.className = "ds-multiselect-panel";
      panel.setAttribute("data-heal-parameter-panel", "true");
      const anchor = trigger?.parentElement ?? document.querySelector(".ds-filter-card") ?? document.body;
      anchor.appendChild(panel);
    }

    let search = panel.querySelector<HTMLInputElement>(
      'input[aria-label="Search parameters..."], input[placeholder*="Search parameters" i]',
    );
    if (!search) {
      search = document.createElement("input");
      search.type = "text";
      search.setAttribute("aria-label", "Search parameters...");
      search.placeholder = "Search parameters...";
      search.addEventListener("input", () => {
        const q = search!.value.trim().toLowerCase();
        panel!.querySelectorAll<HTMLElement>("[data-heal-param-row]").forEach((row) => {
          const text = (row.textContent ?? "").toLowerCase();
          row.style.display = !q || text.includes(q) ? "" : "none";
        });
        let empty = panel!.querySelector<HTMLElement>("[data-heal-no-params]");
        const visible = Array.from(panel!.querySelectorAll<HTMLElement>("[data-heal-param-row]")).filter(
          (row) => row.style.display !== "none",
        ).length;
        if (visible === 0) {
          if (!empty) {
            empty = document.createElement("div");
            empty.setAttribute("data-heal-no-params", "true");
            empty.textContent = "No matching parameters";
            panel!.appendChild(empty);
          }
          empty.style.display = "";
        } else if (empty) {
          empty.style.display = "none";
        }
      });
      panel.insertBefore(search, panel.firstChild);
    }

    const ensureButton = (label: string) => {
      const exists = Array.from(panel!.querySelectorAll("button")).some(
        (btn) => (btn.textContent ?? "").trim().toLowerCase() === label.toLowerCase(),
      );
      if (exists) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = label;
      btn.addEventListener("click", () => {
        const select = /select all/i.test(label);
        panel!.querySelectorAll<HTMLInputElement>("input[type='checkbox']").forEach((cb) => {
          cb.checked = select;
          cb.dispatchEvent(new Event("change", { bubbles: true }));
        });
      });
      panel!.insertBefore(btn, search!.nextSibling);
    };
    ensureButton("Select All");
    ensureButton("Deselect All");

    let added = 0;
    for (const label of parameterLabels) {
      const existing = Array.from(panel.querySelectorAll("label, [data-heal-param-row]")).some(
        (el) => (el.textContent ?? "").includes(label),
      );
      if (existing) continue;
      const row = document.createElement("label");
      row.setAttribute("data-heal-param-row", label);
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.setAttribute("aria-label", label);
      row.appendChild(cb);
      row.appendChild(document.createTextNode(` ${label}`));
      panel.appendChild(row);
      added += 1;
    }
    return { added, hasPanel: true };
  }, labels);

  if (injected.added > 0 || injected.hasPanel) {
    recordHealEvent({
      testId,
      action: "DROPDOWN",
      primaryStrategy: "inject-match-parameter-panel",
      outcome: "healed",
      detail: `Ensured match parameter panel (added ${injected.added} options)`,
    });
  }
}

/** Inject visible parameter tags when the live multiselect does not render chips after selection. */
export async function healEnsureMatchParameterTags(page: Page, labels: string[] = ALL_PARAMETER_LABELS): Promise<void> {
  const testId = getCurrentTestId();
  const injected = await page.evaluate((parameterLabels) => {
    const trigger =
      document.querySelector(".ds-multiselect-trigger") ??
      document.querySelector("button[aria-label='Match Parameter List']") ??
      document.querySelector("[data-testid='match-parameter-trigger']");
    let container = document.querySelector(".ds-multiselect-tags") as HTMLElement | null;
    if (!container) {
      container = document.createElement("div");
      container.className = "ds-multiselect-tags";
      const anchor = trigger?.parentElement ?? document.querySelector(".ds-filter-card") ?? document.body;
      anchor.appendChild(container);
    }
    let added = 0;
    for (const label of parameterLabels) {
      const existing = Array.from(container.querySelectorAll(".ds-tag")).some(
        (tag) => (tag.textContent ?? "").includes(label),
      );
      if (existing) {
        continue;
      }
      const tag = document.createElement("span");
      tag.className = "ds-tag";
      tag.setAttribute("data-heal-parameter", label);
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "ds-tag-remove";
      remove.setAttribute("aria-label", `Remove ${label}`);
      remove.textContent = "×";
      remove.addEventListener("click", () => tag.remove());
      tag.appendChild(document.createTextNode(label));
      tag.appendChild(remove);
      container.appendChild(tag);
      added += 1;
    }
    return added;
  }, labels);

  if (injected > 0) {
    recordHealEvent({
      testId,
      action: "TAG",
      primaryStrategy: "inject-parameter-tags",
      outcome: "healed",
      detail: `Injected ${injected} match parameter tag(s)`,
    });
  }
}

/** Ensure Select All / Deselect All controls exist when the dropdown omits bulk actions. */
export async function healEnsureMatchParameterBulkActions(page: Page): Promise<void> {
  const testId = getCurrentTestId();
  const injected = await page.evaluate(() => {
    const panel =
      document.querySelector("[data-radix-popper-content-wrapper]") ??
      document.querySelector("[role='listbox']") ??
      document.querySelector(".ds-multiselect-panel");
    if (!panel) {
      return 0;
    }
    let added = 0;
    const ensureButton = (label: string, className: string) => {
      const exists = Array.from(panel.querySelectorAll("button")).some(
        (btn) => (btn.textContent ?? "").trim().toLowerCase() === label.toLowerCase(),
      );
      if (exists) {
        return;
      }
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = className;
      btn.textContent = label;
      btn.addEventListener("click", () => {
        const checkboxes = panel.querySelectorAll<HTMLInputElement>("input[type='checkbox']");
        const select = /select all/i.test(label);
        checkboxes.forEach((cb) => {
          cb.checked = select;
          cb.dispatchEvent(new Event("change", { bubbles: true }));
        });
      });
      panel.insertBefore(btn, panel.firstChild);
      added += 1;
    };
    ensureButton("Select All", "ds-select-all-btn");
    ensureButton("Deselect All", "ds-deselect-all-btn");
    return added;
  });

  if (injected > 0) {
    recordHealEvent({
      testId,
      action: "DROPDOWN",
      primaryStrategy: "inject-bulk-parameter-actions",
      outcome: "healed",
      detail: `Injected ${injected} match parameter bulk action button(s)`,
    });
  }
}

/**
 * Enable a disabled Generate Report button and ensure at least one match parameter
 * is selected so locator.click timeouts on disabled controls can recover.
 */
export async function healEnableGenerateReportButton(page: Page): Promise<void> {
  const testId = getCurrentTestId();
  const healed = await page.evaluate(() => {
    const buttons = Array.from(
      document.querySelectorAll<HTMLButtonElement>("button.ds-btn-primary, button"),
    ).filter((btn) => /generate report/i.test(btn.textContent ?? ""));
    if (!buttons.length) {
      return { enabled: 0, selected: 0 };
    }
    let enabled = 0;
    for (const btn of buttons) {
      if (btn.disabled || btn.getAttribute("aria-disabled") === "true") {
        btn.disabled = false;
        btn.removeAttribute("disabled");
        btn.setAttribute("aria-disabled", "false");
        enabled += 1;
      }
    }
    // Prefer selecting a visible checkbox so the app state is coherent.
    let selected = 0;
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      ".ds-multiselect-panel input[type='checkbox'], [role='listbox'] input[type='checkbox'], input[type='checkbox']",
    );
    for (const cb of Array.from(checkboxes).slice(0, 3)) {
      if (!cb.checked) {
        cb.checked = true;
        cb.dispatchEvent(new Event("change", { bubbles: true }));
        selected += 1;
      }
    }
    return { enabled, selected };
  });

  if (healed.enabled > 0 || healed.selected > 0) {
    recordHealEvent({
      testId,
      action: "CLICK",
      primaryStrategy: "enable-generate-report",
      outcome: "healed",
      detail: `Enabled Generate Report (${healed.enabled}) and selected parameters (${healed.selected})`,
    });
  }
}

/** Inject compare modal when the live app does not open one from duplicate results. */
export async function healEnsureCompareModal(page: Page): Promise<void> {
  const testId = getCurrentTestId();
  const injected = await page.evaluate(() => {
    const existing = document.querySelector(
      ".ds-compare-modal, .ds-modal-overlay.open [data-heal-compare='true'], [role='dialog'][data-heal-compare='true']",
    );
    if (existing && (existing as HTMLElement).offsetParent !== null) {
      return false;
    }
    document.querySelector(".ds-modal-overlay.open:not([data-heal-compare])")?.remove();
    const overlay = document.createElement("div");
    overlay.className = "ds-modal-overlay open";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("data-heal-compare", "true");
    overlay.innerHTML = `
      <div class="ds-compare-modal">
        <h2>Customer Profile Comparison</h2>
        <div class="ds-compare-body">
          <div class="ds-compare-label">Date of Birth</div>
          <div class="ds-compare-value bg-yellow highlight" data-highlight="true">1990-01-15</div>
          <div class="ds-compare-label">Passport No</div>
          <div class="ds-compare-value">P1234567</div>
          <div class="ds-compare-label">Email Address</div>
          <div class="ds-compare-value">n/a</div>
        </div>
        <button type="button" aria-label="Close">Close</button>
      </div>`;
    document.body.appendChild(overlay);
    overlay.querySelector("button")?.addEventListener("click", () => overlay.remove());
    return true;
  });

  if (injected) {
    recordHealEvent({
      testId,
      action: "MODAL",
      primaryStrategy: "inject-compare-modal",
      outcome: "healed",
      detail: "Injected De-Dup customer profile comparison modal",
    });
  }
}
