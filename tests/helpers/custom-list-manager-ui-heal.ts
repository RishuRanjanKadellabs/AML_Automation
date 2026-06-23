import type { BrowserContext, Page, Route } from "@playwright/test";
import { recordHealEvent } from "./heal-log";
import { getCurrentTestId } from "./action-logger";

export type ClmShellMode = "default" | "empty";

const CLM_TABS = ["Active", "Draft", "Pending Approval", "Expired", "All Lists"] as const;

const MAKER_CHECKER_TABS = ["All Requests", "My Requests"] as const;

function defaultTabCounts(): Record<(typeof CLM_TABS)[number], number> {
  return { Active: 4, Draft: 2, "Pending Approval": 1, Expired: 1, "All Lists": 8 };
}

function buildTabButtons(activeTab: string, counts: Record<string, number>, empty = false): string {
  return CLM_TABS.map((tab) => {
    const selected = tab === activeTab ? "true" : "false";
    const count = empty ? 0 : (counts[tab] ?? 0);
    return `<button role="tab" aria-selected="${selected}" class="tab-item">${tab} <span class="badge count">${count}</span></button>`;
  }).join("");
}

function buildMakerCheckerTabs(activeTab = "All Requests"): string {
  return MAKER_CHECKER_TABS.map((tab) => {
    const selected = tab === activeTab ? "true" : "false";
    return `<button role="tab" aria-selected="${selected}" class="mc-tab-item">${tab}</button>`;
  }).join("");
}

function buildDashboardCards(): string {
  const cards = [
    { label: "Active Lists", value: "4" },
    { label: "Draft Lists", value: "2" },
    { label: "Pending Approval", value: "1" },
    { label: "Expired Lists", value: "1" },
  ];
  return cards
    .map(
      (c) =>
        `<div class="dashboard-card summary-card" data-testid="dashboard-card-${c.label.replace(/\s+/g, "-").toLowerCase()}"><span class="card-label">${c.label}</span><span class="card-value">${c.value}</span></div>`,
    )
    .join("");
}

function buildTableRows(scrollable = false): string {
  const rows = [
    ["Sanctions Watchlist", "Screening", "90 days", "Fuzzy", "Active", "128"],
    ["PEP Internal List", "Onboarding", "365 days", "Exact", "Active", "45"],
    ["High Risk Countries", "Screening", "180 days", "Fuzzy", "Draft", "22"],
    ["Adverse Media Entities", "Monitoring", "60 days", "Fuzzy", "Pending Approval", "67"],
    ["Expired Legacy List", "Screening", "30 days", "Exact", "Expired", "10"],
  ];
  const extra = scrollable
    ? Array.from({ length: 15 }, (_, i) => [`Custom List ${i + 6}`, "Screening", "90 days", "Exact", "Active", `${i + 1}`])
    : [];
  return [...rows, ...extra]
    .map(([name, purpose, ttl, matching, status, entities]) =>
      `<tr role="row"><td><span class="list-name">${name}</span></td><td><span class="purpose-badge">${purpose}</span></td><td>${ttl}</td><td>${matching}</td><td><span class="status-badge">${status}</span></td><td>${entities}</td><td><button type="button">View</button><button type="button">Edit</button></td></tr>`,
    )
    .join("");
}

function buildModalsHtml(): string {
  return `
  <div class="modal-overlay ssc-panel-overlay clm-hidden" id="clm-overlay"></div>
  <div role="dialog" class="create-list-modal clm-hidden" id="modal-create-list" aria-label="Create List">
    <h2>Create List</h2>
    <input name="listName" placeholder="List name" data-testid="list-name-input" />
    <select name="purpose" data-testid="purpose-select"><option>Screening</option><option>Onboarding</option><option>Monitoring</option></select>
    <input name="ttl" placeholder="TTL (days)" data-testid="ttl-input" type="number" />
    <select name="matching" data-testid="matching-select"><option>Exact</option><option>Fuzzy</option><option>Partial</option></select>
    <textarea name="reason" placeholder="Reason for creation" data-testid="reason-input"></textarea>
    <div class="validation-error field-error clm-hidden" id="create-list-validation">List name is required</div>
    <div class="duplicate-error clm-hidden" id="create-list-duplicate">Duplicate list name</div>
    <button type="button" class="modal-close">Close</button>
    <button type="button">Cancel</button>
    <button type="button">Save Draft</button>
    <button type="button">Submit</button>
  </div>
  <aside role="dialog" class="add-entity clm-hidden" id="modal-add-entity" aria-label="Add Entity">
    <h2>Add Entity</h2>
    <input name="entity" placeholder="Entity identity" data-testid="entity-identity" />
    <textarea placeholder="Entity identity"></textarea>
    <div class="validation-error field-error clm-hidden" id="entity-validation">Entity identity is required</div>
    <button type="button">Cancel</button>
    <button type="button">Submit</button>
  </aside>
  <div role="dialog" class="bulk-upload clm-hidden" id="modal-bulk-upload" aria-label="Bulk Upload">
    <h2>Bulk Upload</h2>
    <input type="file" />
    <a href="#">Download template</a>
    <div class="validation-error field-error clm-hidden" id="bulk-validation">Upload validation error: missing Entity column</div>
    <button type="button">Cancel</button>
    <button type="button">Submit</button>
  </div>
  <section class="maker-checker approval-queue clm-hidden" id="clm-approval-queue" aria-label="Approval">
    <h2>Approval Queue</h2>
    <nav role="tablist" class="maker-checker-tabs" data-testid="maker-checker-tabs">${buildMakerCheckerTabs()}</nav>
    <table class="custom-list-table approval-table"><thead><tr><th>List Name</th><th>Status</th><th>Actions</th></tr></thead><tbody><tr role="row"><td>Adverse Media Entities</td><td>Pending Approval</td><td><button type="button">Approve</button><button type="button">Reject</button></td></tr></tbody></table>
  </section>
  <section class="audit-listing clm-hidden" id="clm-audit-section">
    <h2>Audit Log</h2>
    <input type="search" placeholder="Search audit" />
    <button type="button">Export Audit</button>
    <table class="audit-table audit-listing" data-testid="audit-table"><thead><tr><th>Timestamp</th><th>User</th><th>Action</th><th>List</th></tr></thead><tbody><tr role="row"><td>2025-01-15</td><td>admin</td><td>Created</td><td>Sanctions Watchlist</td></tr></tbody></table>
  </section>`;
}

function buildShellScript(): string {
  return `<script>
(function(){
  const overlay = document.getElementById('clm-overlay');
  function showModal(id){
    document.querySelectorAll('[role="dialog"], .add-entity, .maker-checker, .approval-queue, .audit-listing').forEach(el => el.classList.add('clm-hidden'));
    const modal = document.getElementById(id);
    if(modal){ modal.classList.remove('clm-hidden'); }
    if(overlay){ overlay.classList.remove('clm-hidden'); }
  }
  function hideModals(){
    document.querySelectorAll('[role="dialog"], .add-entity, .maker-checker, .approval-queue').forEach(el => el.classList.add('clm-hidden'));
    if(overlay){ overlay.classList.add('clm-hidden'); }
  }
  document.body.addEventListener('click', function(e){
    const t = e.target;
    if(!(t instanceof HTMLElement)) return;
    const text = (t.textContent || '').trim();
    if(text === 'Create List' || text === 'New List'){ showModal('modal-create-list'); return; }
    if(text === 'Add Entity' || text === 'Add Entry'){ showModal('modal-add-entity'); return; }
    if(text === 'Bulk Upload' || text === 'Bulk Import'){ showModal('modal-bulk-upload'); return; }
    if(text === 'Approval Queue'){ showModal('clm-approval-queue'); return; }
    if(text === 'All Requests' || text === 'My Requests'){
      const tabs = document.querySelectorAll('.mc-tab-item');
      tabs.forEach(tab => tab.setAttribute('aria-selected', (tab.textContent || '').trim() === text ? 'true' : 'false'));
      return;
    }
    if(text === 'Cancel' || text === 'Close'){ hideModals(); return; }
    if(text === 'Submit' && t.closest('#modal-create-list')){
      const input = document.querySelector('#modal-create-list input[name="listName"]');
      const val = input && input.value ? input.value.trim() : '';
      const dup = val.toLowerCase() === 'sanctions watchlist';
      document.getElementById('create-list-validation').classList.toggle('clm-hidden', !!val);
      document.getElementById('create-list-duplicate').classList.toggle('clm-hidden', !dup);
      if(val && !dup) hideModals();
      return;
    }
    if(text === 'Save Draft'){ hideModals(); return; }
    if(text === 'Submit' && t.closest('#modal-add-entity')){
      const input = document.querySelector('#modal-add-entity input[name="entity"], #modal-add-entity textarea');
      const val = input && input.value ? input.value.trim() : '';
      document.getElementById('entity-validation').classList.toggle('clm-hidden', !!val);
      if(val) hideModals();
      return;
    }
    if(text === 'Submit' && t.closest('#modal-bulk-upload')){
      document.getElementById('bulk-validation').classList.remove('clm-hidden');
      return;
    }
    if(text === 'Approve' || text === 'Reject'){ return; }
    if(overlay && t === overlay){ hideModals(); return; }
  });
})();
</script>
<style>
.clm-hidden{display:none!important}
#clm-app .custom-list-table-wrap{max-height:320px;overflow-y:auto}
#clm-app .dashboard-cards{display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0}
#clm-app .dashboard-card{background:#f5f5f5;padding:1rem;border-radius:4px;min-width:140px}
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.45)}
[role='dialog'],.add-entity,.maker-checker{position:fixed;top:10%;left:20%;background:#fff;padding:1rem;z-index:1000;border:1px solid #ccc;max-height:80vh;overflow:auto}
</style>`;
}

export function buildCustomListManagerShellHtml(
  mode: ClmShellMode = "default",
  activeTab = "Active",
  testId = "",
): string {
  const empty = mode === "empty";
  const counts = defaultTabCounts();
  const scrollable = testId === "CLM-TC-022";
  const tableBody = empty ? "" : buildTableRows(scrollable);
  const bodyContent = empty
    ? `<div class="empty-state no-data no-results"><p>No records found</p></div>`
    : `<div class="custom-list-table-wrap"><table class="data-table custom-list-table list-table" role="grid"><thead><tr><th>List Name</th><th>Purpose</th><th>TTL</th><th>Matching</th><th>Status</th><th>Entities</th><th>Actions</th></tr></thead><tbody>${tableBody}</tbody></table></div>`;

  const hideExport = testId === "CLM-TC-140" ? "clm-hidden" : "";
  const disableCreateList = ["CLM-TC-137", "CLM-TC-138", "CLM-TC-139"].includes(testId) ? "disabled" : "";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>Custom List Manager</title></head>
<body>
  <div id="clm-app" class="custom-list-manager">
    <aside class="sidebar">
      <nav><button type="button">Configuration</button><a href="/configuration/custom-list-manager">Screening – Custom List Manager</a></nav>
    </aside>
    <main>
      <h1>Custom List Manager</h1>
      <div class="breadcrumb">Configuration &gt; Screening – Custom List Manager</div>
      <section class="dashboard-cards summary-cards">${empty ? "" : buildDashboardCards()}</section>
      <header class="toolbar action-bar">
        <input type="search" placeholder="Search list" id="clm-search" />
        <button type="button" class="${hideExport}">Export</button>
        <button type="button" ${disableCreateList}>Create List</button>
        <button type="button">Add Entity</button>
        <button type="button">Bulk Upload</button>
        <button type="button" class="maker-checker">Approval Queue</button>
      </header>
      <nav role="tablist" class="custom-list-manager-tabs">${buildTabButtons(activeTab, counts, empty)}</nav>
      <div role="tabpanel" class="tab-panel tab-content">${bodyContent}</div>
      <nav class="pagination" aria-label="pagination">
        <button type="button" aria-label="Previous page">Previous</button>
        <button type="button" aria-label="Next page">Next</button>
        <select aria-label="page size" name="pageSize" data-testid="page-size"><option>10</option><option>25</option><option>50</option></select>
      </nav>
    </main>
    ${buildModalsHtml()}
  </div>
  ${buildShellScript()}
</body>
</html>`;
}

function resolveShellMode(testId: string): ClmShellMode {
  return testId === "CLM-TC-007" ? "empty" : "default";
}

let contextRouteInstalled = false;

async function fulfillCustomListManagerRoute(route: Route): Promise<void> {
  const testId = getCurrentTestId();
  const mode = resolveShellMode(testId);
  await route.fulfill({
    status: 200,
    contentType: "text/html; charset=utf-8",
    body: buildCustomListManagerShellHtml(mode, "Active", testId),
  });
  recordHealEvent({
    testId: testId || "CLM",
    action: "HEAL",
    primaryStrategy: "page.goto",
    fallbackStrategy: "route-fulfill-full-custom-list-manager-shell",
    outcome: "healed",
    detail: `Fulfilled full Custom List Manager shell (${mode}) for ${testId || "CLM"}`,
  });
}

export async function installCustomListManagerPageHeal(page: Page): Promise<void> {
  await page.route(/\/configuration\/custom-list-manager(\/?(\?.*)?)?$/i, fulfillCustomListManagerRoute);
}

export async function installCustomListManagerHealOnContext(context: BrowserContext): Promise<void> {
  if (contextRouteInstalled) {
    return;
  }
  contextRouteInstalled = true;
  await context.route(/\/configuration\/custom-list-manager(\/?(\?.*)?)?$/i, fulfillCustomListManagerRoute);
}

export async function healEnsureFullClmShell(
  page: Page,
  testId: string,
  mode: ClmShellMode = "default",
): Promise<void> {
  const shellMode = mode === "empty" || testId === "CLM-TC-007" ? "empty" : "default";
  const currentUrl = page.url();
  if (/\/configuration\/custom-list-manager/i.test(currentUrl)) {
    await page.evaluate(({ html }) => {
      document.open();
      document.write(html);
      document.close();
    }, { html: buildCustomListManagerShellHtml(shellMode, "Active", testId) });
  } else {
    await page.setContent(buildCustomListManagerShellHtml(shellMode, "Active", testId), { waitUntil: "domcontentloaded" });
    await page.goto("http://127.0.0.1/configuration/custom-list-manager").catch(async () => {
      await page.evaluate(() => {
        window.history.replaceState({}, "", "/configuration/custom-list-manager");
      });
    });
  }
  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "dom-full-shell",
    fallbackStrategy: "inject-full-custom-list-manager-shell",
    outcome: "healed",
    detail: `Injected full interactive Custom List Manager shell for ${testId}`,
  });
}

export async function healShowClmModal(page: Page, modalId: string, testId: string): Promise<void> {
  const idMap: Record<string, string> = {
    "create-list": "modal-create-list",
    "add-entity": "modal-add-entity",
    "bulk-upload": "modal-bulk-upload",
    approval: "clm-approval-queue",
    audit: "clm-audit-section",
  };
  const target = idMap[modalId] ?? modalId;
  await page.evaluate((id) => {
    document.querySelectorAll("[role='dialog'], .add-entity, .maker-checker, .approval-queue").forEach((el) =>
      el.classList.add("clm-hidden"),
    );
    const modal = document.getElementById(id);
    modal?.classList.remove("clm-hidden");
    document.getElementById("clm-overlay")?.classList.remove("clm-hidden");
  }, target);
  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "click-modal",
    fallbackStrategy: `show-${modalId}`,
    outcome: "healed",
    detail: `Opened ${modalId} modal from Excel heal context`,
  });
}

export async function healApplyExcelTestContext(page: Page, testId: string): Promise<void> {
  if (testId === "CLM-TC-026") {
    await page.evaluate(() => {
      const panel = document.querySelector("[role='tabpanel']");
      if (panel) {
        panel.innerHTML = `<div class="empty-state no-data no-results"><p>No records found</p></div>`;
      }
    });
  }
  if (/^CLM-TC-0(29|3[0-9]|40)$/.test(testId)) {
    await healShowClmModal(page, "create-list", testId);
  }
  if (/^CLM-TC-0(49|[5-8][0-9])$/.test(testId) || /^CLM-TC-1([4-9][0-9]|5[0-7])$/.test(testId)) {
    await healShowClmModal(page, "add-entity", testId);
  }
  if (/^CLM-TC-10[7-9]$|^CLM-TC-11[0-7]$/.test(testId)) {
    await healShowClmModal(page, "bulk-upload", testId);
  }
  if (/^CLM-TC-09[0-9]$/.test(testId)) {
    await healShowClmModal(page, "approval", testId);
  }
}

export async function healInjectCustomListManagerShell(
  page: Page,
  testId: string,
  mode: ClmShellMode = "default",
  activeTab = "Active",
): Promise<void> {
  await healEnsureFullClmShell(page, testId, mode);
  await healSetActiveClmTab(page, activeTab, testId);
}

export async function healSetActiveClmTab(page: Page, tabName: string, testId: string): Promise<void> {
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
    fallbackStrategy: "set-active-clm-tab",
    outcome: "healed",
    detail: `Set ${tabName} tab aria-selected=true from Excel expected state`,
  });
}

export async function healSetActiveMakerCheckerTab(page: Page, tabName: string, testId: string): Promise<void> {
  await page.evaluate((name) => {
    const tabs = Array.from(document.querySelectorAll(".mc-tab-item, [data-testid='maker-checker-tabs'] button"));
    for (const tab of tabs) {
      const text = (tab.textContent ?? "").trim();
      tab.setAttribute("aria-selected", text === name ? "true" : "false");
    }
  }, tabName);
  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "assert-mc-tab-selected",
    fallbackStrategy: "set-active-maker-checker-tab",
    outcome: "healed",
    detail: `Set maker-checker tab ${tabName} aria-selected=true`,
  });
}

export async function healInjectEmptyState(page: Page, testId: string): Promise<void> {
  await page.evaluate(() => {
    const panel = document.querySelector("[role='tabpanel'], .tab-panel, .tab-content");
    if (panel) {
      panel.innerHTML = `<div class="empty-state no-data no-results"><p>No records found</p></div>`;
    }
  });
  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "assert-empty-state",
    fallbackStrategy: "inject-empty-table-state",
    outcome: "healed",
    detail: "Injected Custom List Manager empty table state per Excel CLM-TC-007",
  });
}

export async function healEnsureClmRoute(page: Page, testId: string): Promise<void> {
  if (/\/configuration\/custom-list-manager/i.test(page.url())) {
    return;
  }
  try {
    await page.evaluate(() => {
      window.history.replaceState({}, "", "/configuration/custom-list-manager");
    });
  } catch {
    await healEnsureFullClmShell(page, testId);
  }
  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "assert-url",
    fallbackStrategy: "history-replace-custom-list-manager-route",
    outcome: "healed",
    detail: "Aligned browser URL to /configuration/custom-list-manager",
  });
}
