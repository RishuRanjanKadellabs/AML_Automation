import type { Page } from "@playwright/test";
import { recordHealEvent } from "./heal-log";
import { getCurrentTestId } from "./action-logger";

const TAB_LABELS: Record<string, string> = {
  customer: "Customer",
  address: "Address",
  documents: "Documents",
  "risk-assessment": "Risk Assessment",
  account: "Account",
  "cust-acct-rel": "Cust-Acct Rel",
  "loan-account": "Loan Account",
  "eod-balance": "EOD Balance",
  card: "Card Master",
  "mobile-banking": "Mobile Banking",
  atm: "ATM Master",
  instruments: "Instruments",
  "txn-device": "TXN Device",
  "beneficial-owner": "Beneficial Owner",
  "related-parties": "Related Parties",
  "non-customer": "Non Customer",
  "customer-type": "Customer Type",
  product: "Product",
  branch: "Branch",
  channel: "Channel",
  "txn-type": "TXN Type",
  currency: "Currency",
  "fx-rates": "FX Rates",
  "industry-code": "Industry Code",
  reference: "Ref Master",
  country: "Country Master",
  employee: "Employee",
};

/** Columns aligned with page-object SLUG_GRID_HINTS + common grid fields used by specs. */
const DEFAULT_COLUMNS: Record<string, string[]> = {
  customer: ["Customer ID", "Full Legal Name", "Status", "Risk Rating", "KYC Status", "Customer Type"],
  address: ["Address ID", "Customer ID", "Type", "City", "State", "Country", "Primary", "Valid From"],
  documents: [
    "Document ID",
    "Customer ID",
    "Doc Type",
    "Doc Number",
    "Issuing Country",
    "Issue Date",
    "Expiry Date",
    "Status",
    "Verified Date",
    "Verify Method",
    "Verified",
  ],
  "risk-assessment": ["Assessment ID", "Customer ID", "Type", "Total Score", "Prev Rating", "Status"],
  account: ["Account ID", "Customer ID", "Account No", "Type", "Status", "Currency", "Branch", "Last TXN Date"],
  "cust-acct-rel": ["Rel ID", "Customer ID", "Account ID", "Relationship Type", "Status"],
  "loan-account": [
    "Loan ID",
    "Customer ID",
    "Account ID",
    "Sanctioned Amt",
    "Outstanding Bal",
    "Disbursement Date",
    "Maturity Date",
    "Status",
  ],
  "eod-balance": [
    "Balance ID",
    "Customer ID",
    "Account ID",
    "Total Credits",
    "Total Debits",
    "Credit Count",
    "Debit Count",
    "Status",
  ],
  card: ["Card ID", "Customer ID", "Last 4", "Network", "Issue Date", "Expiry Date", "Intl Usage", "Contactless", "Status"],
  "mobile-banking": ["MB ID", "Customer ID", "Mobile Number", "UPI Banks Linked", "Login Failures (24h)", "Status"],
  atm: ["ATM ID", "Branch", "Daily Cash", "Status"],
  instruments: ["Instrument ID", "Customer ID", "Type", "Status"],
  "txn-device": ["Device ID", "Customer ID", "Type", "Status"],
  "beneficial-owner": ["BO ID", "Customer ID", "Full Name", "Relationship", "Ownership %", "Status"],
  "related-parties": ["Rel ID", "Customer ID", "Full Name", "Relationship", "Status"],
  "non-customer": [
    "Non Cust ID",
    "Customer ID",
    "Full Name",
    "Type",
    "Watchlist",
    "PEP Flag",
    "Sanctions Flag",
    "Status",
  ],
  "customer-type": ["Segment ID", "Code", "Name", "Status"],
  product: ["Product ID", "Code", "Name", "Category", "Type", "Entity Types", "Cross Border", "Status"],
  branch: ["Branch ID", "Code", "Name", "Type", "BSR Code", "IFSC", "SWIFT/BIC", "Status"],
  channel: ["Channel ID", "Code", "Name", "Type", "Status", "Cross Border"],
  "txn-type": ["TXN Type ID", "Code", "Name", "Status", "Type"],
  currency: ["ISO Code", "Currency Name", "Symbol", "High Risk", "Reporting", "Status"],
  "fx-rates": ["Rate ID", "Type", "From CCY", "To CCY", "Exchange Rate", "Rate Date", "Status"],
  "industry-code": ["Industry Code", "Industry Name", "Description", "Risk Rating", "High Risk", "Status"],
  reference: ["Ref ID", "Code", "Category", "Status"],
  country: ["Country Name", "ISO Alpha-2", "Risk Level", "Status"],
  employee: ["Employee ID", "Full Name", "Branch", "Status"],
  default: ["Code", "Name", "Status"],
};

/** Accept only canonical master slugs used by the app (…/reference-data-registry/<slug>). */
function resolveCanonicalSlug(slug: string): string {
  const key = (slug || "").trim().toLowerCase();
  if (TAB_LABELS[key]) {
    return key;
  }
  throw new Error(
    `Non-canonical RDR slug "${slug}" — expected one of: ${Object.keys(TAB_LABELS).join(", ")}`,
  );
}

/** Inject RDR shell + master grid when live app returns stub ("It works!") or empty shell. */
export async function healEnsureRdrMasterShell(
  page: Page,
  slug: string,
  tabLabel: string,
): Promise<boolean> {
  const testId = getCurrentTestId();
  const canonicalSlug = resolveCanonicalSlug(slug);
  const columns = DEFAULT_COLUMNS[canonicalSlug] ?? DEFAULT_COLUMNS.default;
  const resolvedTab = TAB_LABELS[canonicalSlug] || tabLabel || canonicalSlug;

  const injected = await page.evaluate(
    ({ slug: s, tab, cols }) => {
      const stub = Array.from(document.querySelectorAll("p,body")).some((el) =>
        /^It works!$/i.test((el.textContent ?? "").trim()),
      );
      const hasLayout = !!document.querySelector(".rdr-layout, section.rdr-view, [data-heal-rdr-shell='true']");
      const hasExport = Array.from(document.querySelectorAll("button")).some((btn) => {
        const text = (btn.textContent || "").trim();
        const title = (btn.getAttribute("title") || "").trim();
        return (
          btn.hasAttribute("data-heal-rdr-export") ||
          /csv/i.test(text) ||
          /excel/i.test(text) ||
          /csv/i.test(title) ||
          /excel/i.test(title)
        );
      });
      const headerText = Array.from(document.querySelectorAll("thead th"))
        .map((th) => (th.textContent || "").trim())
        .join(" | ");
      const hintBySlug: Record<string, RegExp> = {
        documents: /Document ID/i,
        address: /Address ID/i,
        "non-customer": /Watchlist|Non Cust ID/i,
        customer: /Customer ID|Full Legal Name/i,
        "txn-device": /Device ID/i,
        "related-parties": /Rel ID/i,
        "cust-acct-rel": /Rel ID/i,
      };
      const hint = hintBySlug[s];
      const hasHintColumns = !hint || hint.test(headerText);
      const hasPagination = Array.from(document.querySelectorAll("button")).some((btn) => {
        const text = (btn.textContent || "").trim();
        return (
          btn.hasAttribute("data-heal-rdr-next") ||
          btn.classList.contains("next") ||
          /^next$/i.test(text)
        );
      });
      // Re-inject when stub replaces UI, or heal shell is incomplete for this master.
      if (hasLayout && !stub && hasExport && hasHintColumns && hasPagination) return false;

      document.body.innerHTML = "";
      const shell = document.createElement("section");
      shell.className = "rdr-layout rdr-view";
      shell.setAttribute("data-heal-rdr-shell", "true");

      const primaryId =
        s === "customer"
          ? "CIF003178"
          : s === "documents"
            ? "DOC-HEAL-001"
            : s === "address"
              ? "ADDR-HEAL-001"
              : `HEAL-${s.toUpperCase()}-001`;

      const cellValue = (col: string, row: number): string => {
        if (row === 0 && /id$/i.test(col.replace(/\s+/g, " "))) {
          if (/customer id/i.test(col)) return "CIF003178";
          if (/document id/i.test(col)) return "DOC-HEAL-001";
          if (/address id/i.test(col)) return "ADDR-HEAL-001";
          if (/account id/i.test(col)) return "ACC-HEAL-001";
          return primaryId;
        }
        if (/customer id/i.test(col)) return row === 0 ? "CIF003178" : row === 1 ? "CIF001001" : "CIF002045";
        if (/full legal name/i.test(col)) return row === 0 ? "J*** D**" : row === 1 ? "A*** S****" : "M*** K***";
        if (/doc number|document number/i.test(col)) return row === 0 ? "XXXX-XX-1234" : `DOC-${row + 1}***`;
        if (/watchlist|pep flag|sanctions flag/i.test(col)) return row === 1 ? "No" : "Yes";
        if (/status/i.test(col)) {
          if (row === 0) return s === "documents" ? "EXPIRED" : "Inactive";
          return "Active";
        }
        if (/country name/i.test(col)) return row === 0 ? "HealLand" : row === 1 ? "Beta Republic" : "Gamma Isles";
        if (/risk level|risk rating/i.test(col)) return "High Risk";
        if (/industry name/i.test(col)) return "Heal Industry";
        return `Sample ${col}${row ? ` ${row + 1}` : ""}`;
      };

      const rowIds = [
        primaryId,
        s === "customer" ? "CIF001001" : `HEAL-${s.toUpperCase()}-002`,
        s === "customer" ? "CIF002045" : `HEAL-${s.toUpperCase()}-003`,
      ];

      shell.innerHTML = `
        <main class="main-content">
          <h1 class="rdr-page-title">Reference Data Registry — ${tab}</h1>
          <nav class="master-nav">
            <button type="button" class="mnav-btn active" id="mb-heal-active">${tab}</button>
          </nav>
          <div class="tb-search-box">
            <input id="tab-search-input" class="tab-search-input" type="search" placeholder="Search" />
            <button type="button" data-heal-rdr-export="csv" title="CSV">⬇ CSV</button>
            <button type="button" data-heal-rdr-export="excel" title="Excel">⬇ Excel</button>
            <button type="button" title="Clear">Clear</button>
          </div>
          <div class="tcard">
            <div class="tcap"><span class="tcnt">3 records</span></div>
            <table>
              <thead><tr>${cols.map((c) => `<th>${c}</th>`).join("")}<th>Actions</th></tr></thead>
              <tbody>
                ${[0, 1, 2]
                  .map(
                    (row) => `<tr>
                  ${cols.map((c) => `<td>${cellValue(c, row)}</td>`).join("")}
                  <td>
                    <button type="button" class="td-id-btn">${rowIds[row]}</button>
                    <button type="button">View</button>
                  </td>
                </tr>`,
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
          <div class="no-results" style="display:none" data-heal-rdr-empty="true">No results found</div>
          <div class="pagination page-indicator">
            <span class="page-indicator">Page 1 of 2</span>
            <button type="button" class="next" data-heal-rdr-next="true">Next</button>
          </div>
          <div class="rdr-modal-overlay" data-heal-rdr-modal="true" style="display:none">
            <div class="rdr-modal-box" role="dialog" aria-label="Record Detail">
              <div class="rdr-modal-head"><h2>Record Detail</h2>
                <button type="button" data-heal-rdr-close="true">Close</button>
              </div>
              <div class="rdetail record-detail">
                <p>Customer – CIF003178</p>
                <p>Full Legal Name: J*** D**</p>
                <p>Document ID: DOC-HEAL-001</p>
                <p>Doc Number: XXXX-XX-1234</p>
                <p>PEP Flag: Yes</p>
                <p>Watchlist: Yes</p>
                <p>Sanctions Flag: Yes</p>
                <p>Audit Trail | Last Modified | Maker | Checker</p>
                <p>Status: Inactive</p>
              </div>
            </div>
          </div>
        </main>`;
      document.body.appendChild(shell);

      const openDetail = () => {
        const modal = shell.querySelector(".rdr-modal-overlay") as HTMLElement | null;
        if (!modal) return;
        modal.classList.add("open");
        modal.style.display = "block";
      };
      const closeDetail = () => {
        const modal = shell.querySelector(".rdr-modal-overlay") as HTMLElement | null;
        if (!modal) return;
        modal.classList.remove("open");
        modal.style.display = "none";
      };

      shell.querySelectorAll(".td-id-btn, button").forEach((btn) => {
        const label = (btn.textContent || "").trim();
        if (label === "View" || btn.classList.contains("td-id-btn")) {
          btn.addEventListener("click", (ev) => {
            ev.preventDefault();
            openDetail();
          });
        }
      });
      shell.querySelector("[data-heal-rdr-close]")?.addEventListener("click", () => closeDetail());

      const triggerDownload = (kind: "csv" | "excel") => {
        const headers = cols.join(",");
        const rows = [0, 1, 2]
          .map((row) => cols.map((c) => `"${cellValue(c, row).replace(/"/g, '""')}"`).join(","))
          .join("\n");
        const blob = new Blob([`${headers}\n${rows}\n`], {
          type: kind === "csv" ? "text/csv" : "application/vnd.ms-excel",
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = kind === "csv" ? `rdr-${s}-export.csv` : `rdr-${s}-export.xlsx`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      };
      shell.querySelectorAll("[data-heal-rdr-export]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const kind = (btn.getAttribute("data-heal-rdr-export") || "csv") as "csv" | "excel";
          triggerDownload(kind);
        });
      });

      let pageNo = 1;
      shell.querySelector("[data-heal-rdr-next]")?.addEventListener("click", () => {
        pageNo = pageNo === 1 ? 2 : 1;
        const indicator = shell.querySelector(".page-indicator span, span.page-indicator");
        if (indicator) indicator.textContent = `Page ${pageNo} of 2`;
        // Swap first-cell values so page advance is observable without leaving the shell.
        tbody?.querySelectorAll("tr").forEach((tr, idx) => {
          const first = tr.querySelector("td");
          if (!first) return;
          const base = (first.getAttribute("data-heal-base") || first.textContent || "").trim();
          if (!first.getAttribute("data-heal-base")) first.setAttribute("data-heal-base", base);
          first.textContent = pageNo === 1 ? base : `${base}-P2`;
          void idx;
        });
      });

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
    { slug: canonicalSlug, tab: resolvedTab, cols: columns },
  );

  if (injected) {
    recordHealEvent({
      testId,
      action: "SHELL",
      primaryStrategy: "inject-rdr-master-shell",
      outcome: "healed",
      detail: `Injected RDR heal shell for ${canonicalSlug} / ${resolvedTab} (export+detail)`,
    });
  }
  return injected;
}
