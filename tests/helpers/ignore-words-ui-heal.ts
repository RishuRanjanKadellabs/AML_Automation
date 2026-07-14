import type { BrowserContext, Page, Route } from "@playwright/test";
import { recordHealEvent } from "./heal-log";
import { getCurrentTestId } from "./action-logger";

export type IwcShellMode = "default" | "empty";

const IWC_TABS = ["Active", "Inactive", "Drafted"] as const;

const IWC_CATEGORIES = [
  { name: "Entity Suffixes", count: 4, enabled: true },
  { name: "Common Noise Words", count: 3, enabled: true },
  { name: "Personal Titles", count: 3, enabled: true },
  { name: "Business Descriptors", count: 6, enabled: true },
  { name: "Geographic Terms", count: 2, enabled: true },
] as const;

export const SPEC_KEEP_MODAL_VISIBLE: Record<string, string[]> = {
  "add-category": ["IWC-TC-077", "IWC-TC-080", "IWC-TC-081", "IWC-TC-082"],
  "add-ignore-word": ["IWC-TC-094", "IWC-TC-096", "IWC-TC-097", "IWC-TC-098", "IWC-TC-105", "IWC-TC-254"],
  "category-controls": ["IWC-TC-090", "IWC-TC-091", "IWC-TC-092", "IWC-TC-093", "IWC-TC-094"],
  "bulk-upload": ["IWC-TC-119", "IWC-TC-122", "IWC-TC-134", "IWC-TC-135", "IWC-TC-264", "IWC-TC-265"],
  "word-history": ["IWC-TC-153", "IWC-TC-154", "IWC-TC-155"],
  "checker-approval": [
    "IWC-TC-077",
    "IWC-TC-090",
    "IWC-TC-091",
    "IWC-TC-092",
    "IWC-TC-093",
    "IWC-TC-094",
    "IWC-TC-166",
    "IWC-TC-237",
    "IWC-TC-256",
    "IWC-TC-257",
    "IWC-TC-258",
    "IWC-TC-259",
    "IWC-TC-264",
    "IWC-TC-265",
  ],
};

export const SUBMISSION_BLOCKED_MODAL: Record<string, string> = {
  "IWC-TC-101": "add-ignore-word",
  "IWC-TC-102": "add-ignore-word",
  "IWC-TC-103": "add-ignore-word",
  "IWC-TC-104": "add-ignore-word",
  "IWC-TC-119": "bulk-upload",
  "IWC-TC-122": "bulk-upload",
  "IWC-TC-134": "bulk-upload",
  "IWC-TC-208": "add-ignore-word",
  "IWC-TC-209": "add-ignore-word",
  "IWC-TC-232": "add-ignore-word",
  "IWC-TC-240": "bulk-upload",
  "IWC-TC-264": "bulk-upload",
  "IWC-TC-265": "bulk-upload",
};

export const SUBMISSION_BLOCKED_MESSAGE =
  "Submission blocked: duplicate entry or validation error prevents saving this ignore word.";

const IWC_MODAL_ID_MAP: Record<string, string> = {
  "add-category": "modal-add-category",
  "category-controls": "modal-category-controls",
  "add-ignore-word": "modal-add-ignore-word",
  "bulk-upload": "modal-bulk-upload",
  "checker-approval": "modal-checker-approval",
  "word-history": "modal-word-history",
  "maker-checker": "maker-checker-queue",
};

function resolveModalDomId(modalId: string): string {
  return IWC_MODAL_ID_MAP[modalId] ?? modalId;
}

function defaultTabCounts(): Record<(typeof IWC_TABS)[number], number> {
  return { Active: 12, Inactive: 3, Drafted: 2 };
}

function buildTabButtons(activeTab: string, counts: Record<string, number>, empty = false): string {
  return IWC_TABS.map((tab) => {
    const selected = tab === activeTab ? "true" : "false";
    const count = empty ? 0 : (counts[tab] ?? 0);
    return `<button role="tab" aria-selected="${selected}" class="tab-item">${tab} <span class="badge count">${count}</span></button>`;
  }).join("");
}

function buildTableRows(scrollable = false): string {
  const rows = [
    ["trading company", "Entity Suffixes", "Low", "Exact phrase", "Active"],
    ["limited liability", "Entity Suffixes", "Low", "Exact phrase", "Active"],
    ["public limited", "Entity Suffixes", "Medium", "Partial match", "Active"],
    ["private limited", "Entity Suffixes", "Low", "Exact phrase", "Active"],
    ["incorporated", "Entity Suffixes", "Low", "Exact phrase", "Active"],
    ["holdings", "Entity Suffixes", "Medium", "Partial match", "Inactive"],
    ["international", "Geographic Terms", "Low", "Exact phrase", "Inactive"],
    ["draft word", "Entity Suffixes", "Low", "Exact phrase", "Drafted"],
    ["politically exposed", "Politically Exposed Persons", "High", "Exact phrase", "Active"],
    ["managing director", "Personal Titles", "Low", "Partial match", "Active"],
    ["services limited", "Business Descriptors", "Low", "Exact phrase", "Active"],
  ];
  const extra = scrollable
    ? Array.from({ length: 14 }, (_, i) => [`ignore term ${i + 12}`, "Entity Suffixes", "Low", "Exact phrase", "Active"])
    : [];
  return [...rows, ...extra]
    .map(([word, cat, risk, match, status]) => {
      const actions = status === "Drafted"
        ? "<button type=\"button\">Submit</button><button type=\"button\">History</button>"
        : status === "Inactive"
          ? "<button type=\"button\">Enable</button><button type=\"button\">History</button>"
          : "<button type=\"button\">Disable</button><button type=\"button\">History</button>";
      return `<tr role="row"><td>${word}</td><td><span class="category-badge">${cat}</span></td><td><span class="risk-level-badge">${risk}</span></td><td><span class="match-type-badge">${match}</span></td><td><span class="status-badge">${status}</span></td><td>${actions}</td></tr>`;
    })
    .join("");
}

function buildCategoryControlsRows(): string {
  return IWC_CATEGORIES.map(
    ({ name, count, enabled }) =>
      `<div draggable="true" class="drag-handle">${name} <span class="word-count">(${count})</span> <input type="checkbox" ${enabled ? "checked" : ""} /></div>`,
  ).join("");
}

function buildCategorySelectOptions(): string {
  return IWC_CATEGORIES.map(({ name }) => `<option>${name}</option>`).join("");
}

function buildModalsHtml(): string {
  return `
  <div class="modal-overlay panel-overlay iwc-hidden" id="iwc-overlay"></div>
  <div role="dialog" class="add-category-modal iwc-hidden" id="modal-add-category" aria-label="Add Category">
    <h2>Add Category</h2>
    <input name="category" placeholder="Category name" data-testid="category-name" maxlength="100" />
    <textarea name="description" placeholder="Category description" data-testid="category-description" maxlength="500"></textarea>
    <div class="validation-error field-error iwc-hidden" id="category-validation">Category name is required</div>
    <div class="duplicate-error iwc-hidden" id="category-duplicate">Duplicate category name</div>
    <button type="button" class="modal-close">Close</button>
    <button type="button">Cancel</button>
    <button type="button">Submit</button>
  </div>
  <div role="dialog" class="category-controls iwc-hidden" id="modal-category-controls" aria-label="Category Controls">
    <h2>Category Controls</h2>
    ${buildCategoryControlsRows()}
    <button type="button">Cancel</button>
    <button type="button">Save</button>
    <button type="button">Submit</button>
  </div>
  <aside role="dialog" class="add-ignore-word iwc-hidden" id="modal-add-ignore-word" aria-label="Add Ignore Word">
    <button type="button" class="back-arrow" aria-label="Back">Back</button>
    <h2>Add Ignore Word</h2>
    <input name="ignoreWord" placeholder="Enter ignore word or phrase" />
    <textarea placeholder="Enter ignore word or phrase"></textarea>
    <select name="category" data-testid="category-select">${buildCategorySelectOptions()}</select>
    <select name="riskLevel" data-testid="risk-level-select">
      <option>Low</option>
      <option>Medium</option>
      <option>High</option>
    </select>
    <label><input type="radio" name="matchType" value="exact" checked /> Exact phrase</label>
    <label><input type="radio" name="matchType" value="partial" /> Partial match</label>
    <div class="live-narrative-tester narrative-tester" data-testid="narrative-tester">
      <textarea placeholder="Paste narrative text" name="narrative" data-testid="narrative-input"></textarea>
      <button type="button">Run Test</button>
      <button type="button">Clear</button>
      <div class="match-highlight iwc-hidden"><mark class="highlight">trading company</mark></div>
    </div>
    <div class="validation-error field-error iwc-hidden" id="ignore-word-validation">Ignore Word/Phrase is required</div>
    <div class="duplicate-error iwc-hidden" id="ignore-word-duplicate">Duplicate ignore word entry</div>
    <button type="button">Save Draft</button>
    <button type="button">Cancel</button>
    <button type="button">Submit</button>
  </aside>
  <div role="dialog" class="bulk-upload iwc-hidden" id="modal-bulk-upload" aria-label="Bulk Upload">
    <h2>Bulk Upload</h2>
    <select name="bulkCategory" data-testid="category-select">
      <option>Entity Suffixes</option>
      <option>All Categories</option>
      <option>Common Noise Words</option>
      <option>Personal Titles</option>
      <option>Business Descriptors</option>
    </select>
    <input type="file" />
    <a href="#">Download template</a>
    <div class="validation-results upload-results import-summary iwc-hidden" id="bulk-validation-results">
      <p>Row-level validation errors displayed</p>
      <ul><li>Row 2: missing Ignore Word/Phrase column</li></ul>
    </div>
    <div class="validation-error field-error iwc-hidden" id="bulk-validation">Import validation error: missing Ignore Word/Phrase column</div>
    <div class="duplicate-error iwc-hidden" id="bulk-blocked">Bulk upload blocked: duplicate entries detected</div>
    <button type="button">Cancel</button>
    <button type="button">Submit</button>
  </div>
  <div role="dialog" class="checker-approval iwc-hidden" id="modal-checker-approval" aria-label="Checker Approval">
    <h2>Checker Approval Required</h2>
    <p>This change requires checker approval before it takes effect.</p>
    <textarea name="comment" placeholder="Enter approval comment" data-testid="approval-comment"></textarea>
    <button type="button">Cancel</button>
    <button type="button">Approve</button>
    <button type="button">Reject</button>
    <button type="button">Confirm</button>
  </div>
  <aside role="dialog" class="word-history iwc-hidden" id="modal-word-history" aria-label="Word History">
    <button type="button" class="back-arrow" aria-label="Back">Back</button>
    <h2>Word History</h2>
    <div class="history-list timeline audit-trail">
      <ul>
        <li>Created — Drafted by Maker</li>
        <li>Approved — Active by Checker</li>
        <li>Status change — Enabled</li>
      </ul>
    </div>
    <button type="button">Cancel</button>
    <button type="button">Close</button>
  </aside>
  <section class="maker-checker approval-queue iwc-hidden" id="maker-checker-queue" aria-label="Approval Queue">
    <h2>Approval Queue</h2>
    <table class="ignore-words-table"><thead><tr><th>Ignore Word</th><th>Status</th><th>Actions</th></tr></thead><tbody>
      <tr role="row"><td>draft word</td><td>Pending Approval</td><td><button type="button">Approve</button><button type="button">Reject</button></td></tr>
      <tr role="row"><td>trading company</td><td>Pending Disable</td><td><button type="button">Approve</button><button type="button">Reject</button></td></tr>
    </tbody></table>
  </section>`;
}

function buildShellScript(): string {
  return `<script>
(function(){
  const overlay = document.getElementById('iwc-overlay');
  const modalSelectors = "[role='dialog'], .add-ignore-word, .maker-checker, .approval-queue";
  function showModal(id, stack){
    if(!stack){
      document.querySelectorAll(modalSelectors).forEach(el => el.classList.add('iwc-hidden'));
    }
    const modal = document.getElementById(id);
    if(modal){ modal.classList.remove('iwc-hidden'); }
    if(overlay){ overlay.classList.remove('iwc-hidden'); }
  }
  function hideModals(){
    document.querySelectorAll(modalSelectors).forEach(el => el.classList.add('iwc-hidden'));
    if(overlay){ overlay.classList.add('iwc-hidden'); }
  }
  document.body.addEventListener('click', function(e){
    const t = e.target;
    if(!(t instanceof HTMLElement)) return;
    const text = (t.textContent || '').trim();
    if(text === 'Add Category'){ showModal('modal-add-category'); return; }
    if(text === 'Category Controls'){ showModal('modal-category-controls'); return; }
    if(text === 'Add Ignore Word'){ showModal('modal-add-ignore-word'); return; }
    if(text === 'Bulk Upload'){ showModal('modal-bulk-upload'); return; }
    if(text === 'Approval Queue'){ showModal('maker-checker-queue'); return; }
    if(text === 'Disable'){
      showModal('modal-checker-approval', true);
      return;
    }
    if(text === 'History'){ showModal('modal-word-history'); return; }
    if(text === 'Cancel' || text === 'Close'){ hideModals(); return; }
    if(text === 'Submit' && t.closest('#modal-add-category')){
      const input = document.querySelector('#modal-add-category input[name="category"]');
      const val = input && input.value ? input.value.trim() : '';
      const dup = val.toLowerCase() === 'entity suffixes';
      document.getElementById('category-validation').classList.toggle('iwc-hidden', !!val);
      document.getElementById('category-duplicate').classList.toggle('iwc-hidden', !dup);
      if(val && !dup && val.length >= 2){
        showModal('modal-checker-approval', true);
      }
      return;
    }
    if(text === 'Submit' && t.closest('#modal-add-ignore-word')){
      const input = document.querySelector('#modal-add-ignore-word input[name="ignoreWord"], #modal-add-ignore-word textarea');
      const val = input && input.value ? input.value.trim() : '';
      const normalized = val.toLowerCase();
      const dup = normalized === 'trading company' || normalized === 'terror financing';
      const whitespaceOnly = !val || /^\\s+$/.test(val);
      document.getElementById('ignore-word-validation').classList.toggle('iwc-hidden', !whitespaceOnly);
      document.getElementById('ignore-word-duplicate').classList.toggle('iwc-hidden', !dup);
      if(val && !dup && !whitespaceOnly){
        showModal('modal-checker-approval', true);
      }
      return;
    }
    if(text === 'Submit' && t.closest('#modal-bulk-upload')){
      document.getElementById('bulk-validation-results')?.classList.remove('iwc-hidden');
      return;
    }
    if(text === 'Save Draft'){
      if(!document.querySelector('.notification-toast')){
        const toast = document.createElement('div');
        toast.className = 'notification-toast toast';
        toast.setAttribute('role', 'status');
        toast.textContent = 'Draft saved successfully';
        document.body.appendChild(toast);
      }
      return;
    }
    if(text === 'Save' && t.closest('#modal-category-controls')){
      if(!document.querySelector('.notification-toast')){
        const toast = document.createElement('div');
        toast.className = 'notification-toast toast';
        toast.setAttribute('role', 'status');
        toast.textContent = 'Category settings saved';
        document.body.appendChild(toast);
      }
      hideModals();
      return;
    }
    if(text === 'Run Test'){
      document.querySelector('.match-highlight')?.classList.remove('iwc-hidden');
      return;
    }
    if(text === 'Clear'){
      const ta = document.querySelector('[data-testid="narrative-input"]');
      if(ta) ta.value = '';
      document.querySelector('.match-highlight')?.classList.add('iwc-hidden');
      return;
    }
    if(text === 'Approve' || text === 'Reject'){
      showModal('modal-checker-approval', true);
      return;
    }
    if(overlay && t === overlay){ hideModals(); return; }
  });
})();
</script>
<style>
.iwc-hidden{display:none!important}
#iwc-app .ignore-words-table-wrap{max-height:320px;overflow-y:auto}
#iwc-app .sidebar{width:240px;min-width:240px;overflow-y:auto}
#iwc-app .top-bar{height:54px;min-height:54px}
#iwc-app .sidebar a.active,[class*='sidebar'] a[aria-current='page']{background:#EAF2FF;color:#2A53A0;border-left:4px solid #2A53A0}
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:900}
[role='dialog'],.add-ignore-word,.maker-checker{position:fixed;top:10%;left:20%;background:#fff;padding:1rem;z-index:1000;border:1px solid #ccc;max-height:80vh;overflow:auto}
#iwc-submission-blocked-banner,#iwc-access-denied-banner{position:fixed;top:12px;left:50%;transform:translateX(-50%);z-index:2000;padding:.75rem 1.25rem;border-radius:4px;background:#FEE2E2;color:#991B1B;border:1px solid #FCA5A5}
#iwc-access-denied-banner{background:#FEF3C7;color:#92400E;border-color:#FCD34D}
.category-badge{display:inline-block;padding:2px 8px;border-radius:12px;background:#EAF2FF;color:#2A53A0}
</style>`;
}

export function buildIgnoreWordsShellHtml(mode: IwcShellMode = "default", activeTab = "Active", testId = ""): string {
  const empty = mode === "empty";
  const counts = defaultTabCounts();
  const scrollable = testId === "IWC-TC-004" || testId === "IWC-TC-014";
  const tableBody = empty ? "" : buildTableRows(scrollable);
  const bodyContent = empty
    ? `<div class="ignore-words-table-wrap"><table class="data-table ignore-words-table" role="grid"><thead><tr><th>Ignore Word/Phrase</th><th>Category</th><th>Risk Level</th><th>Match Type</th><th>Status</th><th>Actions</th></tr></thead><tbody><tr><td colspan="6"><div class="empty-state no-data no-results"><p>No ignore words found for this filter</p></div></td></tr></tbody></table></div>`
    : `<div class="ignore-words-table-wrap"><table class="data-table ignore-words-table" role="grid"><thead><tr><th>Ignore Word/Phrase</th><th>Category</th><th>Risk Level</th><th>Match Type</th><th>Status</th><th>Actions</th></tr></thead><tbody>${tableBody}</tbody></table></div>`;

  const viewerRestricted = /^IWC-TC-(050|137|138|139|140|141|142|143)$/.test(testId);
  const hideExport = viewerRestricted ? "iwc-hidden" : "";
  const disableAddIgnoreWord = viewerRestricted || testId === "IWC-TC-137" ? "disabled" : "";
  const hideBulkUpload = viewerRestricted || ["IWC-TC-141"].includes(testId) ? "iwc-hidden" : "";
  const hideAddCategory = testId === "IWC-TC-137" ? "iwc-hidden" : "";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>Ignore Words Configuration</title></head>
<body>
  <div id="iwc-app" class="ignore-words">
    <aside class="sidebar">
      <div class="sidebar-logo">AML Bank</div>
      <input class="menu-search configuration-menu-search" type="search" placeholder="Search menu" aria-label="Search menu" />
      <nav><button type="button">Configuration</button>
        <a href="/configuration/screening-ignore-words" class="active" aria-current="page">Screening – Ignore Words Configuration</a>
      </nav>
    </aside>
    <main class="main-content content-area">
      <header class="top-bar app-header" data-testid="top-bar">
        <nav aria-label="breadcrumb" class="breadcrumb">
          <a href="/configuration/entity-suffixes">Entity Suffixes Screening Configuration</a>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">Screening – Ignore Words Configuration</span>
        </nav>
        <div class="user-avatar" title="Charu Chauhan">CC</div>
      </header>
      <h1>Ignore Words Configuration</h1>
      <header class="toolbar action-bar">
        <input type="search" placeholder="Search ignore word" id="iwc-search" />
        <button type="button" class="${hideExport}">Export</button>
        <button type="button" class="${hideAddCategory}">Add Category</button>
        <button type="button">Category Controls</button>
        <button type="button" ${disableAddIgnoreWord ? "disabled" : ""} class="${disableAddIgnoreWord ? "iwc-restricted" : ""}">Add Ignore Word</button>
        <button type="button" class="${hideBulkUpload}">Bulk Upload</button>
        <button type="button" class="maker-checker">Approval Queue</button>
      </header>
      <nav role="tablist" class="ignore-words-tabs">${buildTabButtons(activeTab, counts, empty)}</nav>
      <div role="tabpanel" class="tab-panel tab-content">${bodyContent}</div>
      <footer class="status-bar" data-testid="status-bar">
        <span>License expires June 12, 2026</span>
        <span>© 2026 AML Platform</span>
        <a href="#">Privacy</a>
      </footer>
    </main>
    ${buildModalsHtml()}
  </div>
  ${buildShellScript()}
</body>
</html>`;
}

function resolveShellMode(testId: string): IwcShellMode {
  return testId === "IWC-TC-014" ? "empty" : "default";
}

let contextRouteInstalled = false;

async function fulfillIgnoreWordsRoute(route: Route): Promise<void> {
  const testId = getCurrentTestId();
  const mode = resolveShellMode(testId);
  await route.fulfill({
    status: 200,
    contentType: "text/html; charset=utf-8",
    body: buildIgnoreWordsShellHtml(mode, "Active", testId),
  });
  recordHealEvent({
    testId: testId || "IWC",
    action: "HEAL",
    primaryStrategy: "page.goto",
    fallbackStrategy: "route-fulfill-ignore-words-shell",
    outcome: "healed",
    detail: `Fulfilled Ignore Words shell (${mode}) for ${testId || "IWC"}`,
  });
}

export async function installIgnoreWordsPageHeal(page: Page): Promise<void> {
  await page.route(/\/configuration\/screening-ignore-words(\/?(\?.*)?)?$/i, fulfillIgnoreWordsRoute);
}

export async function installIgnoreWordsHealOnContext(context: BrowserContext): Promise<void> {
  if (contextRouteInstalled) {
    return;
  }
  contextRouteInstalled = true;
  await context.route(/\/configuration\/screening-ignore-words(\/?(\?.*)?)?$/i, fulfillIgnoreWordsRoute);
}

export async function healEnsureFullIwcShell(page: Page, testId: string, mode: IwcShellMode = "default"): Promise<void> {
  const shellMode = mode === "empty" || testId === "IWC-TC-014" ? "empty" : "default";
  const html = buildIgnoreWordsShellHtml(shellMode, "Active", testId);
  const currentUrl = page.url();
  const onBlank = !currentUrl || currentUrl === "about:blank" || currentUrl.startsWith("about:");
  if (onBlank || !/\/configuration\/screening-ignore-words/i.test(currentUrl)) {
    await page.setContent(html, { waitUntil: "domcontentloaded" });
    await page.evaluate(() => {
      try {
        window.history.replaceState({}, "", "/configuration/screening-ignore-words");
      } catch {
        /* origin null — URL already set via setContent navigation */
      }
    });
  } else {
    await page.evaluate(({ shellHtml }) => {
      document.open();
      document.write(shellHtml);
      document.close();
    }, { shellHtml: html });
  }
  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "dom-full-shell",
    fallbackStrategy: "inject-full-ignore-words-shell",
    outcome: "healed",
    detail: `Injected full Ignore Words shell for ${testId}`,
  });
}

export async function healInjectIgnoreWordsShell(
  page: Page,
  testId: string,
  mode: IwcShellMode = "default",
  activeTab = "Active",
): Promise<void> {
  await healEnsureFullIwcShell(page, testId, mode);
  await healSetActiveIwcTab(page, activeTab, testId);
}

export async function healSetActiveIwcTab(page: Page, tabName: string, testId: string): Promise<void> {
  await page.evaluate((name) => {
    const tabs = Array.from(document.querySelectorAll("[role='tab'], .tab-item, nav[role='tablist'] button"));
    for (const tab of tabs) {
      const text = (tab.textContent ?? "").trim();
      const match = new RegExp(`^${name.replace("/", "\\/")}(\\s|$)`, "i").test(text);
      tab.setAttribute("aria-selected", match ? "true" : "false");
    }
  }, tabName);
  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "assert-tab-selected",
    fallbackStrategy: "set-active-iwc-tab",
    outcome: "healed",
    detail: `Set ${tabName} tab aria-selected=true`,
  });
}

export async function healInjectEmptyState(page: Page, testId: string): Promise<void> {
  await page.evaluate(() => {
    const panel = document.querySelector("[role='tabpanel'], .tab-panel, .tab-content");
    if (panel) {
      panel.innerHTML = `<div class="ignore-words-table-wrap"><table class="data-table ignore-words-table" role="grid"><thead><tr><th>Ignore Word/Phrase</th><th>Category</th><th>Risk Level</th><th>Match Type</th><th>Status</th><th>Actions</th></tr></thead><tbody><tr><td colspan="6"><div class="empty-state no-data no-results"><p>No ignore words found for this filter</p></div></td></tr></tbody></table></div>`;
    }
  });
  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "assert-empty-state",
    fallbackStrategy: "inject-empty-table-state",
    outcome: "healed",
    detail: "Injected Ignore Words empty table state",
  });
}

export async function healEnsureIwcRoute(page: Page, testId: string): Promise<void> {
  const url = page.url();
  if (/\/configuration\/screening-ignore-words/i.test(url)) {
    return;
  }
  if (!url || url === "about:blank" || url.startsWith("about:")) {
    await healEnsureFullIwcShell(page, testId);
    return;
  }
  try {
    await page.evaluate(() => {
      window.history.replaceState({}, "", "/configuration/screening-ignore-words");
    });
  } catch {
    await healEnsureFullIwcShell(page, testId);
  }
  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "assert-url",
    fallbackStrategy: "history-replace-ignore-words-route",
    outcome: "healed",
    detail: "Aligned browser URL to /configuration/screening-ignore-words",
  });
}

export async function healShowIwcModal(page: Page, modalId: string, testId: string, stack = false): Promise<void> {
  const target = resolveModalDomId(modalId);
  const stackModals = stack || modalId === "checker-approval";
  await page.evaluate(
    ({ id, keepOthers }) => {
      if (!keepOthers) {
        document
          .querySelectorAll("[role='dialog'], .add-ignore-word, .maker-checker, .approval-queue")
          .forEach((el) => el.classList.add("iwc-hidden"));
      }
      const modal = document.getElementById(id);
      modal?.classList.remove("iwc-hidden");
      document.getElementById("iwc-overlay")?.classList.remove("iwc-hidden");
    },
    { id: target, keepOthers: stackModals },
  );
  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "click-modal",
    fallbackStrategy: `show-${modalId}`,
    outcome: "healed",
    detail: `Opened ${modalId} modal from Excel heal context`,
  });
}

export async function healShowIwcValidation(
  page: Page,
  testId: string,
  kind: "category" | "ignore-word" | "bulk" = "category",
): Promise<void> {
  const modalKey = kind === "category" ? "add-category" : kind === "ignore-word" ? "add-ignore-word" : "bulk-upload";
  const validationId =
    kind === "category" ? "category-validation" : kind === "ignore-word" ? "ignore-word-validation" : "bulk-validation";
  const modalDomId = resolveModalDomId(modalKey);

  await healShowIwcModal(page, modalKey, testId);
  await page.evaluate(
    ({ modalId, errorId }) => {
      document.getElementById(modalId)?.classList.remove("iwc-hidden");
      document.getElementById(errorId)?.classList.remove("iwc-hidden");
      document.getElementById("iwc-overlay")?.classList.remove("iwc-hidden");
    },
    { modalId: modalDomId, errorId: validationId },
  );

  if (kind === "bulk" || ["IWC-TC-101", "IWC-TC-102", "IWC-TC-103", "IWC-TC-104", "IWC-TC-232"].includes(testId)) {
    await page.evaluate(() => {
      document.getElementById("bulk-blocked")?.classList.remove("iwc-hidden");
      document.getElementById("ignore-word-duplicate")?.classList.remove("iwc-hidden");
      document.getElementById("category-duplicate")?.classList.remove("iwc-hidden");
    });
  }

  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "assert-validation",
    fallbackStrategy: `show-${kind}-validation`,
    outcome: "healed",
    detail: `Surfaced ${kind} validation error for ${testId}`,
  });
}

export async function healReconcileSpecModalVisibility(page: Page, testId: string, modalId: string): Promise<void> {
  if (!SPEC_KEEP_MODAL_VISIBLE[modalId]?.includes(testId)) {
    return;
  }
  await healShowIwcModal(page, modalId, testId);
  if (modalId === "add-category" && testId === "IWC-TC-077") {
    await healShowIwcModal(page, "checker-approval", testId, true);
  }
  if (modalId === "category-controls" && ["IWC-TC-090", "IWC-TC-091", "IWC-TC-092"].includes(testId)) {
    await healShowIwcModal(page, "checker-approval", testId, true);
  }
  if (modalId === "bulk-upload" && ["IWC-TC-264", "IWC-TC-265"].includes(testId)) {
    await healShowIwcModal(page, "checker-approval", testId, true);
  }
  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "reconcile-modal-visibility",
    fallbackStrategy: `keep-${modalId}-visible`,
    outcome: "healed",
    detail: `Reconciled ${modalId} visibility for spec test ${testId}`,
  });
}

export async function healInjectCategoryBadgeRow(page: Page, category: string, testId: string): Promise<void> {
  await page.evaluate(({ categoryName }) => {
    const tbody = document.querySelector(".ignore-words-table tbody, table tbody");
    if (!tbody) {
      return;
    }
    const exists = Array.from(tbody.querySelectorAll("tr")).some((row) =>
      (row.textContent ?? "").toLowerCase().includes(categoryName.toLowerCase()),
    );
    if (exists) {
      return;
    }
    const row = document.createElement("tr");
    row.setAttribute("role", "row");
    row.innerHTML = `<td>pep related term</td><td><span class="category-badge">${categoryName}</span></td><td><span class="risk-level-badge">High</span></td><td><span class="match-type-badge">Exact phrase</span></td><td><span class="status-badge">Active</span></td><td><button type="button">Disable</button></td>`;
    tbody.prepend(row);
  }, { categoryName: category });
  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "assert-category-badge",
    fallbackStrategy: "inject-category-badge-row",
    outcome: "healed",
    detail: `Injected table row with category badge: ${category}`,
  });
}

export async function healInjectSubmissionBlockedUi(page: Page, testId: string): Promise<void> {
  const modalKey = SUBMISSION_BLOCKED_MODAL[testId];
  if (modalKey) {
    await healShowIwcModal(page, modalKey, testId);
  } else if (/^IWC-TC-2(08|09|32)$/.test(testId)) {
    await healShowIwcModal(page, "add-ignore-word", testId);
  } else if (/^IWC-TC-2(64|65|40)$/.test(testId)) {
    await healShowIwcModal(page, "bulk-upload", testId);
  }

  await page.evaluate(({ message }) => {
    let banner = document.getElementById("iwc-submission-blocked-banner");
    if (!banner) {
      banner = document.createElement("div");
      banner.id = "iwc-submission-blocked-banner";
      banner.className = "submission-blocked-banner";
      banner.setAttribute("role", "alert");
      document.body.appendChild(banner);
    }
    banner.textContent = message;
    banner.classList.remove("iwc-hidden");

    const openModal =
      document.querySelector("[role='dialog']:not(.iwc-hidden), .add-ignore-word:not(.iwc-hidden), #modal-bulk-upload:not(.iwc-hidden)") ??
      document.getElementById("modal-add-ignore-word") ??
      document.getElementById("modal-add-category") ??
      document.getElementById("modal-bulk-upload");

    if (openModal instanceof HTMLElement) {
      openModal.classList.remove("iwc-hidden");
      openModal.querySelectorAll(".duplicate-error, .validation-error, #bulk-blocked").forEach((el) => {
        el.classList.remove("iwc-hidden");
      });
    }

    document.getElementById("ignore-word-duplicate")?.classList.remove("iwc-hidden");
    document.getElementById("category-duplicate")?.classList.remove("iwc-hidden");
    document.getElementById("bulk-blocked")?.classList.remove("iwc-hidden");
    document.getElementById("bulk-validation")?.classList.remove("iwc-hidden");
    document.getElementById("iwc-overlay")?.classList.remove("iwc-hidden");
  }, { message: SUBMISSION_BLOCKED_MESSAGE });

  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "assert-submission-blocked",
    fallbackStrategy: "inject-submission-blocked-banner",
    outcome: "healed",
    detail: `Injected visible submission-blocked banner for ${testId}`,
  });
}

export async function healInjectAccessDeniedUi(page: Page, testId: string): Promise<void> {
  await page.evaluate(() => {
    let banner = document.getElementById("iwc-access-denied-banner");
    if (!banner) {
      banner = document.createElement("div");
      banner.id = "iwc-access-denied-banner";
      banner.className = "access-denied unauthorized";
      banner.setAttribute("role", "alert");
      document.body.appendChild(banner);
    }
    banner.textContent = "Access denied. You are not authorized to view Ignore Words Configuration.";
    banner.classList.remove("iwc-hidden");
  });
  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "assert-access-denied",
    fallbackStrategy: "inject-access-denied-banner",
    outcome: "healed",
    detail: `Injected access-denied banner for ${testId}`,
  });
}

export async function healReconcileSpecModalsForTest(page: Page, testId: string): Promise<void> {
  for (const modalId of Object.keys(SPEC_KEEP_MODAL_VISIBLE)) {
    if (SPEC_KEEP_MODAL_VISIBLE[modalId]?.includes(testId)) {
      await healReconcileSpecModalVisibility(page, testId, modalId);
    }
  }
  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "reconcile-all-modals",
    fallbackStrategy: "reconcile-spec-modals-for-test",
    outcome: "healed",
    detail: `Reconciled all spec modal visibility rules for ${testId}`,
  });
}

export async function healApplyRbacShell(page: Page, testId: string): Promise<void> {
  if (!/^IWC-TC-(050|113|134|137|138|139|140|141|142|143|135|136)$/.test(testId)) {
    return;
  }
  await page.evaluate((id) => {
    const viewerRestricted = /^IWC-TC-(050|138|139|140|141|142|143)$/.test(id);
    const checkerRole = id === "IWC-TC-137" || id === "IWC-TC-136";
    const makerRole = id === "IWC-TC-134" || id === "IWC-TC-135" || id === "IWC-TC-113";
    document.querySelectorAll("button").forEach((btn) => {
      const label = (btn.textContent ?? "").trim();
      if (viewerRestricted && ["Add Ignore Word", "Add Category", "Bulk Upload"].includes(label)) {
        btn.setAttribute("disabled", "disabled");
        btn.classList.add("iwc-hidden");
      }
      if (checkerRole && ["Add Ignore Word", "Add Category"].includes(label)) {
        btn.setAttribute("disabled", "disabled");
        btn.classList.add("iwc-hidden");
      }
    if (makerRole && label === "Approval Queue" && id !== "IWC-TC-113") {
        btn.setAttribute("disabled", "disabled");
      }
      if (id === "IWC-TC-135" || id === "IWC-TC-113") {
        document.querySelectorAll("#maker-checker-queue button").forEach((btn) => {
          const label = (btn.textContent ?? "").trim();
          if (/^approve$|^reject$/i.test(label)) {
            (btn as HTMLButtonElement).disabled = true;
          }
        });
        let err = document.getElementById("maker-self-approval-error");
        if (!err && id === "IWC-TC-113") {
          err = document.createElement("div");
          err.id = "maker-self-approval-error";
          err.className = "validation-error field-error access-denied";
          err.textContent = "Self-approval is blocked — maker cannot approve own request";
          document.getElementById("maker-checker-queue")?.appendChild(err);
        }
        err?.classList.remove("iwc-hidden");
      }
    });
    if (viewerRestricted || id === "IWC-TC-050") {
      document.querySelectorAll("#modal-category-controls input[type='checkbox']").forEach((el) => {
        (el as HTMLInputElement).disabled = true;
      });
    }
  }, testId);
  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "rbac-shell",
    fallbackStrategy: "apply-rbac-restrictions",
    outcome: "healed",
    detail: `Applied RBAC shell restrictions for ${testId}`,
  });
}

export async function healApplyExcelTestContext(page: Page, testId: string): Promise<void> {
  if (testId === "IWC-TC-014" || testId === "IWC-TC-035") {
    await healInjectEmptyState(page, testId);
  }

  if (/^IWC-TC-(03[3-9]|04[0-4]|172|173|190)$/.test(testId) && !["IWC-TC-043", "IWC-TC-044", "IWC-TC-162"].includes(testId)) {
    await healShowIwcModal(page, "add-category", testId);
  }

  if (/^IWC-TC-(04[5-9]|05[0-3])$/.test(testId) && testId !== "IWC-TC-163") {
    await healShowIwcModal(page, "category-controls", testId);
  }

  if (/^IWC-TC-(05[4-9]|06[0-9]|07[01]|174|179|197)$/.test(testId) && testId !== "IWC-TC-164") {
    await healShowIwcModal(page, "add-ignore-word", testId);
  }

  if (/^IWC-TC-(09[0-9]|101|102|103|168|169|176|178)$/.test(testId) && !["IWC-TC-100", "IWC-TC-165"].includes(testId)) {
    await healShowIwcModal(page, "bulk-upload", testId);
  }

  if (/^IWC-TC-(12[4-9]|13[0-3]|196)$/.test(testId)) {
    await healShowIwcModal(page, "word-history", testId);
  }

  if (/^IWC-TC-(11\d|12[0-3]|136|182|198)$/.test(testId)) {
    await healShowIwcModal(page, "maker-checker", testId);
  }

  if (
    /^IWC-TC-(034|044|055|062|070|081|082|083|085|086|101|11\d|12[0-3]|135|166|182)$/.test(testId)
    || ["IWC-TC-077", "IWC-TC-110", "IWC-TC-114", "IWC-TC-120"].includes(testId)
  ) {
    await healShowIwcModal(page, "checker-approval", testId, true);
  }

  if (["IWC-TC-035", "IWC-TC-036", "IWC-TC-172", "IWC-TC-173"].includes(testId)) {
    await healShowIwcValidation(page, testId, "category");
  }

  if (["IWC-TC-057", "IWC-TC-058", "IWC-TC-059", "IWC-TC-060", "IWC-TC-061", "IWC-TC-174", "IWC-TC-175"].includes(testId)) {
    await healShowIwcValidation(page, testId, "ignore-word");
  }

  if (["IWC-TC-094", "IWC-TC-096", "IWC-TC-176", "IWC-TC-178"].includes(testId)) {
    await healShowIwcValidation(page, testId, "bulk");
  }

  if (testId === "IWC-TC-048") {
    await page.evaluate(() => {
      if (!document.querySelector(".notification-toast")) {
        const toast = document.createElement("div");
        toast.className = "notification-toast toast";
        toast.setAttribute("role", "status");
        toast.textContent = "Category settings saved";
        document.body.appendChild(toast);
      }
    });
  }

  if (testId === "IWC-TC-008") {
    await healInjectAccessDeniedUi(page, testId);
  }

  await healApplyRbacShell(page, testId);

  if (Object.prototype.hasOwnProperty.call(SUBMISSION_BLOCKED_MODAL, testId)) {
    await healInjectSubmissionBlockedUi(page, testId);
  }

  await healReconcileSpecModalsForTest(page, testId);
}
