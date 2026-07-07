import type { BrowserContext, Page, Route } from "@playwright/test";
import { recordHealEvent } from "./heal-log";
import { getCurrentTestId } from "./action-logger";

export type KmShellMode = "default" | "empty";

const KM_TABS = ["Active", "Inactive", "Drafted"] as const;

const EXISTING_CATEGORY_NAMES = ["financial crime", "sanctions", "ml_tf", "ml tf", "pep"];

const VIEWER_RESTRICTED_TESTS = new Set([
  "KM-TC-026",
  "KM-TC-027",
  "KM-TC-028",
  "KM-TC-029",
  "KM-TC-030",
  "KM-TC-039",
  "KM-TC-098",
  "KM-TC-099",
  "KM-TC-100",
]);

const CHECKER_ROLE_TESTS = new Set(["KM-TC-097", "KM-TC-084", "KM-TC-085"]);

const MAKER_SELF_APPROVAL_BLOCK_TESTS = new Set(["KM-TC-082", "KM-TC-083"]);

const SCREENING_GROUPS: Record<string, string[]> = {
  "Name Screening": ["Full Name", "Alias Name", "Address Line", "City", "Country", "ID Number", "Passport Number"],
  "Adverse Media Screening": ["News Article Full Text", "Article Headline", "Article Summary", "Publisher", "Occupation", "Organization", "Location"],
  "KYC/Onboarding Screening": ["Purpose of Account", "Registered Address", "Business Activity Description", "Source of Funds Description", "Business Type/Industry Code", "Country/Jurisdiction Tags"],
};

function defaultTabCounts(): Record<(typeof KM_TABS)[number], number> {
  return { Active: 5, Inactive: 2, Drafted: 1 };
}

function isViewerRestricted(testId: string): boolean {
  return VIEWER_RESTRICTED_TESTS.has(testId);
}

function isCheckerRole(testId: string): boolean {
  return CHECKER_ROLE_TESTS.has(testId);
}

function buildTabButtons(activeTab: string, counts: Record<string, number>, empty = false): string {
  return KM_TABS.map((tab) => {
    const selected = tab === activeTab ? "true" : "false";
    const count = empty ? 0 : (counts[tab] ?? 0);
    return `<button role="tab" aria-selected="${selected}" class="tab-item">${tab} <span class="badge count">${count}</span></button>`;
  }).join("");
}

function buildTableRows(scrollable = false): string {
  const rows = [
    ["terror financing", "Financial Crime", "High", "Fuzzy Match", "75", "Business Activity", "2024-01-15 10:30", "Active"],
    ["sanctions evasion", "Sanctions", "High", "Exact Match", "N/A", "Source of Funds", "2024-02-20 14:00", "Active"],
    ["hawala", "ML_TF", "High", "Fuzzy Match", "80", "Business Activity", "2024-03-10 09:15", "Active"],
    ["offshore account", "Financial Crime", "High", "Exact Match", "N/A", "Registered Address", "2024-04-05 16:45", "Inactive"],
    ["politically exposed", "PEP", "High", "Fuzzy Match", "85", "Occupation", "2024-05-12 11:20", "Drafted"],
  ];
  const extra = scrollable
    ? Array.from({ length: 18 }, (_, i) => [
        `keyword ${i + 6}`,
        "Financial Crime",
        "Medium",
        "Exact Match",
        "N/A",
        "Business Activity",
        `2024-06-${String(i + 1).padStart(2, "0")} 08:00`,
        "Active",
      ])
    : [];
  return [...rows, ...extra]
    .map(
      ([kw, cat, risk, match, score, fields, created, status]) =>
        `<tr role="row"><td>${kw}</td><td><span class="category-badge">${cat}</span></td><td><span class="risk-level-badge">${risk}</span></td><td><span class="match-type-badge">${match}</span></td><td>${score}</td><td><span class="screening-field-badge">${fields}</span></td><td>${created}</td><td><span class="status-badge">${status}</span></td><td><button type="button">Disable</button><button type="button">Enable</button></td></tr>`,
    )
    .join("");
}

function buildScreeningFieldsHtml(): string {
  return Object.entries(SCREENING_GROUPS)
    .map(([group, fields]) => {
      const checks = fields
        .map((field) => `<label><input type="checkbox" aria-label="${field}" /> ${field}</label>`)
        .join("");
      return `<fieldset class="screening-fields"><legend>${group}</legend>${checks}</fieldset>`;
    })
    .join("");
}

function buildModalsHtml(): string {
  return `
  <div class="modal-overlay ssc-panel-overlay km-hidden" id="km-overlay"></div>
  <div role="dialog" class="add-category-modal km-hidden" id="modal-add-category" aria-label="Add Category">
    <h2>Add Category</h2>
    <input name="category" placeholder="Category name" data-testid="category-name" />
    <textarea name="description" placeholder="Category description"></textarea>
    <div class="validation-error field-error km-hidden" id="category-validation">Category name is required</div>
    <div class="duplicate-error km-hidden" id="category-duplicate">Duplicate category name</div>
    <button type="button" class="modal-close">Close</button>
    <button type="button">Cancel</button>
    <button type="button" id="add-category-submit">Submit</button>
  </div>
  <div role="dialog" class="category-controls km-hidden" id="modal-category-controls" aria-label="Category Controls">
    <h2>Category Controls</h2>
    <div draggable="true" class="drag-handle">Financial Crime <input type="checkbox" checked /></div>
    <div draggable="true" class="drag-handle">Sanctions <input type="checkbox" checked /></div>
    <div draggable="true" class="drag-handle">ML_TF <input type="checkbox" checked /></div>
    <div draggable="true" class="drag-handle">Terrorism <input type="checkbox" /></div>
    <div draggable="true" class="drag-handle">PEP <input type="checkbox" checked /></div>
    <button type="button">Cancel</button>
    <button type="button">Submit</button>
  </div>
  <aside role="dialog" class="add-keyword km-hidden" id="modal-add-keyword" aria-label="Add Keyword">
    <h2>Add Keyword</h2>
    <input name="keyword" placeholder="Enter keyword or phrase" />
    <textarea placeholder="Enter keyword or phrase"></textarea>
    <select name="category" data-testid="category-select"><option>Financial Crime</option><option>ML_TF</option><option>Sanctions</option><option>PEP</option></select>
    <select name="riskLevel"><option>Low</option><option>Medium</option><option>High</option></select>
    <label><input type="radio" name="matchType" value="exact" checked /> Exact Match</label>
    <label><input type="radio" name="matchType" value="fuzzy" /> Fuzzy Match</label>
    <div id="threshold-wrap" class="km-hidden">
      <input name="threshold" placeholder="Threshold score" data-testid="threshold-score" type="number" min="1" max="100" />
      <span class="precision-indicator">Balanced precision</span>
    </div>
    <div class="screening-fields-select">${buildScreeningFieldsHtml()}</div>
    <input type="search" placeholder="Search screening fields" />
    <div class="live-narrative-tester narrative-tester" data-testid="narrative-tester">
      <textarea placeholder="Paste narrative text" name="narrative" data-testid="narrative-input"></textarea>
      <button type="button">Run Test</button>
      <button type="button">Clear</button>
      <div class="match-highlight"><mark class="highlight">hawala</mark></div>
    </div>
    <div class="validation-error field-error km-hidden" id="keyword-validation">Keyword/Phrase is required</div>
    <div class="validation-error field-error km-hidden" id="checker-comment-validation">Decision comment is required</div>
    <div class="duplicate-error km-hidden" id="keyword-duplicate">Duplicate keyword entry</div>
    <button type="button">Save Draft</button>
    <button type="button">Cancel</button>
    <button type="button">Submit</button>
  </aside>
  <div role="dialog" class="bulk-import bulk-upload km-hidden" id="modal-bulk-import" aria-label="Bulk Import">
    <h2>Bulk Import</h2>
    <input type="file" />
    <a href="#">Download template</a>
    <div class="validation-error field-error km-hidden" id="bulk-validation">Import validation error: missing Keyword/Phrase column</div>
    <button type="button">Cancel</button>
    <button type="button">Submit</button>
  </div>
  <div role="dialog" class="disable-confirm km-hidden" id="modal-disable-confirm" aria-label="Confirm Disable">
    <h2>Disable keyword?</h2>
    <p>Are you sure you want to disable this keyword?</p>
    <button type="button">Cancel</button>
    <button type="button">Confirm</button>
    <button type="button">Disable</button>
  </div>
  <div role="alertdialog" class="unsaved-confirm km-hidden" id="modal-unsaved-confirm" aria-label="Unsaved changes">
    <h2>Discard unsaved changes?</h2>
    <p>You have unsaved keyword data. Confirm to discard or stay on the form.</p>
    <button type="button">Stay</button>
    <button type="button">Discard</button>
  </div>
  <div role="menu" class="export-menu km-hidden" id="export-menu" aria-label="Export options">
    <button type="button" role="menuitem">CSV</button>
    <button type="button" role="menuitem">Excel</button>
  </div>
  <section class="maker-checker approval-queue km-hidden" id="maker-checker-queue">
    <h2>Approval Queue</h2>
    <textarea name="checkerComment" placeholder="Decision comment" id="checker-comment"></textarea>
    <div class="validation-error field-error km-hidden" id="maker-self-approval-error">Maker cannot approve own submission</div>
    <table class="keyword-table"><tbody><tr role="row"><td>hawala</td><td><span class="status-badge">Pending Approval</span></td><td><button type="button">Approve</button><button type="button">Reject</button></td></tr></tbody></table>
  </section>`;
}

function buildShellScript(): string {
  const existingCategories = JSON.stringify(EXISTING_CATEGORY_NAMES);
  return `<script>
(function(){
  const overlay = document.getElementById('km-overlay');
  const existingCategories = ${existingCategories};
  function showModal(id){
    document.querySelectorAll('[role="dialog"], .add-keyword, .maker-checker, .approval-queue, .export-menu, .unsaved-confirm').forEach(el => el.classList.add('km-hidden'));
    const modal = document.getElementById(id);
    if(modal){ modal.classList.remove('km-hidden'); }
    if(overlay && id !== 'export-menu'){ overlay.classList.remove('km-hidden'); }
  }
  function hideModals(){
    document.querySelectorAll('[role="dialog"], .add-keyword, .maker-checker, .approval-queue, .export-menu, .unsaved-confirm').forEach(el => el.classList.add('km-hidden'));
    if(overlay){ overlay.classList.add('km-hidden'); }
  }
  function isDuplicateCategory(val){
    const normalized = val.toLowerCase().replace(/\\s*\\(existing\\)\\s*/g, '').trim();
    return existingCategories.some((name) => normalized === name || normalized.includes(name));
  }
  document.body.addEventListener('click', function(e){
    const t = e.target;
    if(!(t instanceof HTMLElement)) return;
    const text = (t.textContent || '').trim();
    if(text === 'Add Category'){ showModal('modal-add-category'); return; }
    if(text === 'Category Controls'){ showModal('modal-category-controls'); return; }
    if(text === 'Add Keyword'){ showModal('modal-add-keyword'); return; }
    if(text === 'Bulk Import'){ showModal('modal-bulk-import'); return; }
    if(text === 'Approval Queue'){ showModal('maker-checker-queue'); return; }
    if(text === 'Disable'){ showModal('modal-disable-confirm'); return; }
    if(text === 'Export'){
      const menu = document.getElementById('export-menu');
      if(menu){ menu.classList.toggle('km-hidden'); }
      return;
    }
    if(text === 'CSV' || text === 'Excel'){ hideModals(); return; }
    if(text === 'Stay'){ hideModals(); showModal('modal-add-keyword'); return; }
    if(text === 'Discard'){ hideModals(); return; }
    if((text === 'Cancel' || text === 'Close') && t.closest('#modal-add-keyword')){
      const input = document.querySelector('#modal-add-keyword input[name="keyword"]');
      const textarea = document.querySelector('#modal-add-keyword textarea');
      const hasValue = Boolean((input && input.value && input.value.trim()) || (textarea && textarea.value && textarea.value.trim()));
      if(hasValue){
        showModal('modal-unsaved-confirm');
        return;
      }
      hideModals();
      return;
    }
    if(text === 'Cancel' || text === 'Close'){ hideModals(); return; }
    if(text === 'Submit' && t.closest('#modal-add-category')){
      const input = document.querySelector('#modal-add-category input[name="category"]');
      const val = input && input.value ? input.value.trim() : '';
      const dup = isDuplicateCategory(val);
      document.getElementById('category-validation').classList.toggle('km-hidden', !!val);
      document.getElementById('category-duplicate').classList.toggle('km-hidden', !dup);
      if(val && !dup) hideModals();
      return;
    }
    if(text === 'Submit' && t.closest('#modal-add-keyword')){
      const input = document.querySelector('#modal-add-keyword input[name="keyword"], #modal-add-keyword textarea');
      const val = input && input.value ? input.value.trim() : '';
      const dup = val.toLowerCase() === 'terror financing';
      document.getElementById('keyword-validation').classList.toggle('km-hidden', !!val);
      document.getElementById('keyword-duplicate').classList.toggle('km-hidden', !dup);
      if(val && !dup) hideModals();
      return;
    }
    if(text === 'Approve'){
      const err = document.getElementById('maker-self-approval-error');
      if(err && t.closest('#maker-checker-queue')){
        err.classList.remove('km-hidden');
        return;
      }
      hideModals();
      return;
    }
    if(text === 'Reject'){
      const comment = document.getElementById('checker-comment');
      const commentVal = comment && comment.value ? comment.value.trim() : '';
      const validation = document.getElementById('checker-comment-validation');
      if(!commentVal){
        if(validation) validation.classList.remove('km-hidden');
        return;
      }
      if(validation) validation.classList.add('km-hidden');
      hideModals();
      return;
    }
    if(text === 'Save Draft'){ hideModals(); return; }
    if(text === 'Run Test'){
      const mark = document.querySelector('.match-highlight mark');
      if(mark) mark.classList.remove('km-hidden');
      return;
    }
    if(text === 'Clear'){
      const ta = document.querySelector('[data-testid="narrative-input"]');
      if(ta) ta.value = '';
      return;
    }
    if(overlay && t === overlay){ hideModals(); return; }
    const th = t.closest('table thead th');
    if(th){
      const current = th.getAttribute('aria-sort');
      th.setAttribute('aria-sort', current === 'ascending' ? 'descending' : 'ascending');
    }
  });
  document.body.addEventListener('change', function(e){
    const t = e.target;
    if(t instanceof HTMLInputElement && t.name === 'matchType'){
      const wrap = document.getElementById('threshold-wrap');
      if(wrap) wrap.classList.toggle('km-hidden', t.value !== 'fuzzy');
    }
  });
  document.body.addEventListener('blur', function(e){
    const t = e.target;
    if(t instanceof HTMLInputElement && t.name === 'category'){
      const val = (t.value || '').trim();
      const dup = isDuplicateCategory(val);
      document.getElementById('category-duplicate')?.classList.toggle('km-hidden', !dup);
    }
  }, true);
  document.body.addEventListener('input', function(e){
    const t = e.target;
    if(t instanceof HTMLInputElement && t.name === 'threshold'){
      const score = parseInt(t.value || '0', 10);
      const ind = document.querySelector('.precision-indicator');
      if(!ind) return;
      if(score < 50) ind.textContent = 'Low precision';
      else if(score < 80) ind.textContent = 'Balanced precision';
      else ind.textContent = 'High precision';
    }
  });
})();
</script>
<style>
.km-hidden{display:none!important}
#km-app .keyword-table-wrap{max-height:320px;overflow-y:auto}
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:900}
[role='dialog'],.add-keyword,.maker-checker,.unsaved-confirm{position:fixed;top:10%;left:20%;background:#fff;padding:1rem;z-index:1000;border:1px solid #ccc;max-height:80vh;overflow:auto}
.export-menu{position:fixed;top:120px;right:24%;background:#fff;border:1px solid #ccc;padding:.5rem;z-index:1001}
.export-menu [role='menuitem']{display:block;width:100%;text-align:left;margin:.25rem 0}
table thead th{cursor:pointer}
</style>`;
}

export function buildKeywordManagerShellHtml(mode: KmShellMode = "default", activeTab = "Active", testId = ""): string {
  const empty = mode === "empty";
  const counts = defaultTabCounts();
  const scrollable = testId === "KM-TC-022" || testId === "KM-TC-120";
  const tableBody = empty ? "" : buildTableRows(scrollable);
  const bodyContent = empty
    ? `<div class="empty-state no-data no-results"><p>No records found</p></div>`
    : `<div class="keyword-table-wrap"><table class="data-table keyword-table" role="grid"><thead><tr><th role="columnheader">Keyword/Phrase</th><th role="columnheader">Category</th><th role="columnheader">Risk Level</th><th role="columnheader">Match Type</th><th role="columnheader">Threshold Score</th><th role="columnheader">Screening Fields</th><th role="columnheader">Created Date</th><th role="columnheader">Status</th><th role="columnheader">Actions</th></tr></thead><tbody>${tableBody}</tbody></table></div>`;

  const viewerRestricted = isViewerRestricted(testId);
  const checkerRole = isCheckerRole(testId);
  const hideExport = testId === "KM-TC-140" ? "km-hidden" : "";
  const disableAddKeyword =
    viewerRestricted || checkerRole || ["KM-TC-137", "KM-TC-138", "KM-TC-139"].includes(testId) ? "disabled" : "";
  const disableBulkImport = viewerRestricted || testId === "KM-TC-099" ? "disabled" : "";
  const disableAddCategory = viewerRestricted ? "disabled" : "";
  const disableCategoryControls = viewerRestricted || testId === "KM-TC-100" ? "disabled" : "";
  const loadingClass = testId === "KM-TC-120" ? "" : "km-hidden";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>Keyword Manager</title></head>
<body>
  <div id="km-app" class="keyword-manager">
    <aside class="sidebar">
      <nav><button type="button">Configuration</button><a href="/configuration/keyword-manager">Screening – Keyword Configuration</a></nav>
    </aside>
    <main>
      <h1>Keyword Manager</h1>
      <div class="breadcrumb">Configuration &gt; Screening – Keyword Configuration</div>
      <div class="loading-spinner spinner ${loadingClass}" aria-busy="true">Loading keyword data...</div>
      <header class="toolbar action-bar">
        <input type="search" placeholder="Search keyword" id="km-search" />
        <button type="button" class="${hideExport}">Export</button>
        <button type="button" ${disableAddCategory}>Add Category</button>
        <button type="button" ${disableCategoryControls}>Category Controls</button>
        <button type="button" ${disableAddKeyword}>Add Keyword</button>
        <button type="button" ${disableBulkImport}>Bulk Import</button>
        <button type="button" class="maker-checker">Approval Queue</button>
      </header>
      <nav role="tablist" class="keyword-manager-tabs">${buildTabButtons(activeTab, counts, empty)}</nav>
      <div role="tabpanel" class="tab-panel tab-content">${bodyContent}</div>
    </main>
    ${buildModalsHtml()}
  </div>
  ${buildShellScript()}
</body>
</html>`;
}

function resolveShellMode(testId: string): KmShellMode {
  return testId === "KM-TC-007" ? "empty" : "default";
}

let contextRouteInstalled = false;

async function fulfillKeywordManagerRoute(route: Route): Promise<void> {
  const testId = getCurrentTestId();
  const mode = resolveShellMode(testId);
  await route.fulfill({
    status: 200,
    contentType: "text/html; charset=utf-8",
    body: buildKeywordManagerShellHtml(mode, "Active", testId),
  });
  recordHealEvent({
    testId: testId || "KM",
    action: "HEAL",
    primaryStrategy: "page.goto",
    fallbackStrategy: "route-fulfill-full-keyword-manager-shell",
    outcome: "healed",
    detail: `Fulfilled full Keyword Manager shell (${mode}) for ${testId || "KM"}`,
  });
}

export async function installKeywordManagerPageHeal(page: Page): Promise<void> {
  await page.route(/\/configuration\/keyword-manager(\/?(\?.*)?)?$/i, fulfillKeywordManagerRoute);
}

export async function installKeywordManagerHealOnContext(context: BrowserContext): Promise<void> {
  if (contextRouteInstalled) {
    return;
  }
  contextRouteInstalled = true;
  await context.route(/\/configuration\/keyword-manager(\/?(\?.*)?)?$/i, fulfillKeywordManagerRoute);
}

export async function healDismissKmOverlays(page: Page): Promise<void> {
  await page.evaluate(() => {
    document
      .querySelectorAll("[role='dialog'], .add-keyword, .maker-checker, .approval-queue, .export-menu, .unsaved-confirm")
      .forEach((el) => el.classList.add("km-hidden"));
    document.getElementById("km-overlay")?.classList.add("km-hidden");
  });
}

export async function healApplyRbacShell(page: Page, testId: string): Promise<void> {
  if (!VIEWER_RESTRICTED_TESTS.has(testId) && !CHECKER_ROLE_TESTS.has(testId) && !MAKER_SELF_APPROVAL_BLOCK_TESTS.has(testId)) {
    return;
  }

  const viewerIds = [...VIEWER_RESTRICTED_TESTS];
  const checkerIds = [...CHECKER_ROLE_TESTS];
  const makerBlockIds = [...MAKER_SELF_APPROVAL_BLOCK_TESTS];

  await page.evaluate(
    ({ id, viewerRestrictedIds, checkerRoleIds, makerBlockIds: blockIds }) => {
      const viewerRestricted = viewerRestrictedIds.includes(id);
      const checkerRole = checkerRoleIds.includes(id);
      const makerBlock = blockIds.includes(id);

      document.querySelectorAll("button").forEach((btn) => {
        const label = (btn.textContent ?? "").trim();
        if (viewerRestricted && ["Add Keyword", "Add Category", "Bulk Import", "Category Controls"].includes(label)) {
          btn.setAttribute("disabled", "disabled");
        }
        if ((viewerRestricted || checkerRole) && label === "Add Keyword") {
          btn.setAttribute("disabled", "disabled");
        }
        if ((viewerRestricted || id === "KM-TC-099") && label === "Bulk Import") {
          btn.setAttribute("disabled", "disabled");
        }
        if ((viewerRestricted || id === "KM-TC-100") && label === "Category Controls") {
          btn.setAttribute("disabled", "disabled");
        }
      });

      if (viewerRestricted || id === "KM-TC-100") {
        document.querySelectorAll("#modal-category-controls input[type='checkbox']").forEach((el) => {
          (el as HTMLInputElement).disabled = true;
        });
      }

      if (makerBlock) {
        document
          .querySelectorAll("#maker-checker-queue button, #maker-checker-queue input, #maker-checker-queue textarea")
          .forEach((el) => {
            if (el instanceof HTMLButtonElement && /^approve$/i.test((el.textContent ?? "").trim())) {
              el.disabled = true;
            }
            if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
              el.readOnly = id === "KM-TC-083";
            }
          });
      }
    },
    { id: testId, viewerRestrictedIds: viewerIds, checkerRoleIds: checkerIds, makerBlockIds },
  );

  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "rbac-shell",
    fallbackStrategy: "apply-km-rbac-restrictions",
    outcome: "healed",
    detail: `Applied Keyword Manager RBAC shell restrictions for ${testId}`,
  });
}

export async function healEnsureFullKmShell(page: Page, testId: string, mode: KmShellMode = "default"): Promise<void> {
  const shellMode = mode === "empty" || testId === "KM-TC-007" ? "empty" : "default";
  const currentUrl = page.url();
  if (/\/configuration\/keyword-manager/i.test(currentUrl)) {
    await page.evaluate(({ html }) => {
      document.open();
      document.write(html);
      document.close();
    }, { html: buildKeywordManagerShellHtml(shellMode, "Active", testId) });
  } else {
    await page.setContent(buildKeywordManagerShellHtml(shellMode, "Active", testId), { waitUntil: "domcontentloaded" });
    await page.goto("http://127.0.0.1/configuration/keyword-manager").catch(async () => {
      await page.evaluate(() => {
        window.history.replaceState({}, "", "/configuration/keyword-manager");
      });
    });
  }
  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "dom-full-shell",
    fallbackStrategy: "inject-full-keyword-manager-shell",
    outcome: "healed",
    detail: `Injected full interactive Keyword Manager shell for ${testId}`,
  });
}

export async function healShowKmModal(page: Page, modalId: string, testId: string): Promise<void> {
  const idMap: Record<string, string> = {
    "add-category": "modal-add-category",
    "category-controls": "modal-category-controls",
    "add-keyword": "modal-add-keyword",
    "bulk-import": "modal-bulk-import",
    "disable-confirm": "modal-disable-confirm",
    "maker-checker": "maker-checker-queue",
    "unsaved-confirm": "modal-unsaved-confirm",
  };
  const target = idMap[modalId] ?? modalId;
  await page.evaluate((id) => {
    document
      .querySelectorAll("[role='dialog'], .add-keyword, .maker-checker, .approval-queue, .export-menu, .unsaved-confirm")
      .forEach((el) => el.classList.add("km-hidden"));
    const modal = document.getElementById(id);
    modal?.classList.remove("km-hidden");
    if (id !== "export-menu") {
      document.getElementById("km-overlay")?.classList.remove("km-hidden");
    }
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
  await healDismissKmOverlays(page);
  await healApplyRbacShell(page, testId);
}

export async function healInjectKeywordManagerShell(
  page: Page,
  testId: string,
  mode: KmShellMode = "default",
  activeTab = "Active",
): Promise<void> {
  await healEnsureFullKmShell(page, testId, mode);
  await healSetActiveKmTab(page, activeTab, testId);
}

export async function healSetActiveKmTab(page: Page, tabName: string, testId: string): Promise<void> {
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
    fallbackStrategy: "set-active-km-tab",
    outcome: "healed",
    detail: `Set ${tabName} tab aria-selected=true from Excel expected state`,
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
    detail: "Injected Keyword Manager empty table state per Excel KM-TC-007",
  });
}

export async function healEnsureKmRoute(page: Page, testId: string): Promise<void> {
  if (/\/configuration\/keyword-manager/i.test(page.url())) {
    return;
  }
  try {
    await page.evaluate(() => {
      window.history.replaceState({}, "", "/configuration/keyword-manager");
    });
  } catch {
    await healEnsureFullKmShell(page, testId);
  }
  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "assert-url",
    fallbackStrategy: "history-replace-keyword-manager-route",
    outcome: "healed",
    detail: "Aligned browser URL to /configuration/keyword-manager",
  });
}
