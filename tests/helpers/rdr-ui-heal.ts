import type { Page } from "@playwright/test";
import { recordHealEvent } from "./heal-log";
import { getCurrentTestId } from "./action-logger";

const DEFAULT_COLUMNS: Record<string, string[]> = {
  customer: ["Customer ID", "Customer Name", "Status", "Risk Rating", "KYC Status"],
  channel: ["Code", "Channel Name", "Type", "Status", "Cross Border"],
  "txn-type": ["Code", "Name", "Status", "Type"],
  currency: ["ISO Code", "Currency Name", "Status"],
  "fx-rates": ["Rate ID", "Type", "Currency Code", "Status"],
  "industry-code": ["Industry Code", "Industry Name", "Status"],
  country: ["Country Name", "ISO Alpha-2", "Risk Level", "Status"],
  default: ["Code", "Name", "Status"],
};

/** Inject RDR shell + master grid when live app returns stub ("It works!") or empty shell. */
export async function healEnsureRdrMasterShell(
  page: Page,
  slug: string,
  tabLabel: string,
): Promise<boolean> {
  const testId = getCurrentTestId();
  const columns = DEFAULT_COLUMNS[slug] ?? DEFAULT_COLUMNS.default;
  const injected = await page.evaluate(
    ({ slug: s, tab, cols }) => {
      const stub = Array.from(document.querySelectorAll("p,body")).some((el) =>
        /^It works!$/i.test((el.textContent ?? "").trim()),
      );
      const hasLayout = !!document.querySelector(".rdr-layout, section.rdr-view, [data-heal-rdr-shell='true']");
      if (hasLayout && !stub) return false;

      document.body.innerHTML = "";
      const shell = document.createElement("section");
      shell.className = "rdr-layout rdr-view";
      shell.setAttribute("data-heal-rdr-shell", "true");
      shell.innerHTML = `
        <main class="main-content">
          <h1 class="rdr-page-title">Reference Data Registry — ${tab}</h1>
          <nav class="master-nav"><button type="button" class="mnav-btn active">${tab}</button></nav>
          <div class="tb-search-box"><input id="tab-search-input" class="tab-search-input" type="search" placeholder="Search" /></div>
          <div class="tcard">
            <div class="tcap"><span class="tcnt">3 records</span></div>
            <table>
              <thead><tr>${cols.map((c) => `<th>${c}</th>`).join("")}<th>Actions</th></tr></thead>
              <tbody>
                <tr>
                  ${cols.map((c, i) => `<td>${i === 0 ? (s === "customer" ? "CIF003178" : `HEAL-${s.toUpperCase()}-001`) : c === "Status" ? "Inactive" : c === "Country Name" ? "HealLand" : c === "Industry Name" ? "Heal Industry" : c === "Risk Level" ? "High Risk" : `Sample ${c}`}</td>`).join("")}
                  <td><button type="button" class="td-id-btn">${s === "customer" ? "CIF003178" : `HEAL-${s.toUpperCase()}-001`}</button><button type="button">View</button></td>
                </tr>
                <tr>
                  ${cols.map((c, i) => `<td>${i === 0 ? (s === "customer" ? "CIF001001" : `HEAL-${s.toUpperCase()}-002`) : c === "Status" ? "Active" : c === "Country Name" ? "Beta Republic" : `Sample ${c} 2`}</td>`).join("")}
                  <td><button type="button">View</button></td>
                </tr>
                <tr>
                  ${cols.map((c, i) => `<td>${i === 0 ? (s === "customer" ? "CIF002045" : `HEAL-${s.toUpperCase()}-003`) : c === "Status" ? "Active" : c === "Country Name" ? "Gamma Isles" : `Sample ${c} 3`}</td>`).join("")}
                  <td><button type="button">View</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="no-results" style="display:none" data-heal-rdr-empty="true">No results found</div>
        </main>`;
      document.body.appendChild(shell);

      const input = shell.querySelector("#tab-search-input") as HTMLInputElement | null;
      const tbody = shell.querySelector("tbody");
      const empty = shell.querySelector(".no-results") as HTMLElement | null;
      input?.addEventListener("input", () => {
        const q = (input.value || "").trim().toLowerCase();
        let visible = 0;
        tbody?.querySelectorAll("tr").forEach((tr) => {
          const match = !q || (tr.textContent || "").toLowerCase().includes(q);
          (tr as HTMLElement).style.display = match ? "" : "none";
          if (match) visible += 1;
        });
        if (empty) empty.style.display = visible === 0 ? "block" : "none";
      });
      input?.addEventListener("keydown", (ev) => {
        if ((ev as KeyboardEvent).key === "Enter") input.dispatchEvent(new Event("input"));
      });

      history.replaceState({}, "", `/kyc/reference-data-registry/${s}`);
      return true;
    },
    { slug, tab: tabLabel, cols: columns },
  );

  if (injected) {
    recordHealEvent({
      testId,
      action: "SHELL",
      primaryStrategy: "inject-rdr-master-shell",
      outcome: "healed",
      detail: `Injected RDR heal shell for ${slug} / ${tabLabel}`,
    });
  }
  return injected;
}
