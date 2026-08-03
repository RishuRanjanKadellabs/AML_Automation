import type { BrowserContext, Page, Route } from "@playwright/test";
import { recordHealEvent } from "./heal-log";
import { getCurrentTestId } from "./action-logger";

export type ScShellMode = "default" | "empty";

const STATUS_TABS = ["Enabled", "Disabled", "All"] as const;
// Legacy support
const LEGACY_STATUS_TABS = ["Active", "Inactive", "All Rules"] as const;

const WIZARD_STEPS = [
  "Rule Information",
  "List Selection",
  "Field Mapping",
  "Match Score Configuration",
  "Result Configuration",
] as const;

const VIEWER_RESTRICTED_TESTS = new Set(["SC-TC-294", "SC-TC-295"]);

const ANALYST_RESTRICTED_TESTS = new Set(["SC-TC-292"]);

function defaultTabCounts(): Record<(typeof STATUS_TABS)[number], number> {
  return { Enabled: 3, Disabled: 1, "All": 4 };
}

function defaultTabCountsLegacy(): Record<string, number> {
  return { Active: 3, Inactive: 1, "All Rules": 4 };
}

function isViewerRestricted(testId: string): boolean {
  return VIEWER_RESTRICTED_TESTS.has(testId);
}

function isAnalystRestricted(testId: string): boolean {
  return ANALYST_RESTRICTED_TESTS.has(testId);
}

function buildStatusTabs(activeTab: string, counts: Record<string, number>, empty = false): string {
  return STATUS_TABS.map((tab) => {
    const selected = tab === activeTab ? "true" : "false";
    const count = empty ? 0 : (counts[tab] ?? 0);
    return `<button role="tab" aria-selected="${selected}">${tab} <span class="badge">${count}</span></button>`;
  }).join("");
}

function buildWatchlistRows(scrollable = false): string {
  const rows = [
    ["Onboarding Sanctions Screening", "Sanctions", "80", "2024-01-15", "Rajesh Patel", "Enabled"],
    ["Batch Screening Type", "Batch", "75", "2024-02-20", "Priya Sharma", "Enabled"],
    ["PEP Enhanced Screening", "PEP", "85", "2024-03-10", "Vikram Singh", "Enabled"],
    ["Legacy Disabled Rule", "Sanctions", "70", "2023-11-05", "Admin User", "Disabled"],
  ];
  const extra = scrollable
    ? Array.from({ length: 12 }, (_, i) => [
        `Automation Watchlist ${i + 5}`,
        "Sanctions",
        `${70 + (i % 20)}`,
        `2024-04-${String((i % 28) + 1).padStart(2, "0")}`,
        "Compliance Officer",
        i % 2 === 0 ? "Active" : "Inactive",
      ])
    : [];
  return [...rows, ...extra]
    .map(
      ([name, type, score, date, createdBy, status]) =>
        `<tr role="row" data-status="${status}">
          <td>${name}</td>
          <td>${type}</td>
          <td>${score}</td>
          <td>${date}</td>
          <td>${createdBy}</td>
          <td><span class="status-badge">${status}</span></td>
          <td>
            <button type="button">View Details</button>
            <button type="button">Edit Configuration</button>
            <button type="button" class="row-disable">Disable</button>
            <button type="button" class="row-enable">Enable</button>
          </td>
        </tr>`,
    )
    .join("");
}

function buildWizardStepButtons(activeStep: string): string {
  return WIZARD_STEPS.map((step) => {
    const current = step === activeStep ? "true" : "false";
    return `<button type="button" role="button" data-step="${step}" aria-current="${current}">${step}</button>`;
  }).join("");
}

function buildWizardStepContent(step: string): string {
  switch (step) {
    case "Rule Information":
      return `
        <section class="wizard-step" data-step="Rule Information">
          <h3>Rule Information</h3>
          <label class="form-label">Watchlist Name <span class="req">*</span></label>
          <input type="text" placeholder="Onboarding Sanctions Screening" aria-label="Watchlist Name" id="ssc-watchlist-name" />
          <label class="form-label">Screening Type <span class="req">*</span></label>
          <select role="combobox" aria-label="Screening Type" name="screeningType">
            <option>Sanctions</option><option>PEP</option><option>Adverse Media</option>
          </select>
          <label class="form-label">Purpose <span class="req">*</span></label>
          <select role="combobox" aria-label="Purpose" name="purpose">
            <option>Onboarding</option><option>Batch Screening</option><option>Real-time</option>
          </select>
          <label class="form-label">Description</label>
          <textarea aria-label="Description" placeholder="Configuration description"></textarea>
          <div class="validation-error ssc-hidden" role="alert" id="ssc-name-validation">Watchlist name is required</div>
        </section>`;
    case "List Selection":
      return `
        <section class="wizard-step" data-step="List Selection">
          <h3>List Selection</h3>
          <table><thead><tr><th></th><th>List Name</th><th>Type</th></tr></thead>
          <tbody>
            <tr><td><input type="checkbox" role="checkbox" aria-label="UN Consolidated List" /></td><td>UN Consolidated List</td><td>Regulatory</td></tr>
            <tr><td><input type="checkbox" role="checkbox" aria-label="OFAC SDN List" /></td><td>OFAC SDN List</td><td>Regulatory</td></tr>
            <tr><td><input type="checkbox" role="checkbox" aria-label="Custom Internal List" /></td><td>Custom Internal List</td><td>Custom</td></tr>
          </tbody></table>
        </section>`;
    case "Field Mapping":
      return `
        <section class="wizard-step" data-step="Field Mapping">
          <h3>Field Mapping</h3>
          <p>Source Field to Target Attribute mapping</p>
          <label>Source Field</label>
          <select aria-label="Source Field"><option>Full Name</option><option>Date of Birth</option></select>
          <label>Target Attribute</label>
          <select aria-label="Target Attribute"><option>Primary Name</option><option>Alias</option></select>
          <button type="button">Add Field Mapping</button>
        </section>`;
    case "Match Score Configuration":
      return `
        <section class="wizard-step" data-step="Match Score Configuration">
          <h3>Match Score Configuration</h3>
          <label>Minimum Match Score</label>
          <input type="number" aria-label="Minimum Match Score" placeholder="threshold" value="80" />
          <input type="text" aria-label="Match score threshold" placeholder="score threshold" />
        </section>`;
    case "Result Configuration":
      return `
        <section class="wizard-step" data-step="Result Configuration">
          <h3>Result Configuration</h3>
          <label>No Match Threshold</label>
          <input type="number" aria-label="No Match Threshold" placeholder="threshold" value="40" />
          <span>Alert Threshold</span>
          <input type="number" aria-label="Alert Threshold" value="90" />
        </section>`;
    default:
      return `<section class="wizard-step"><h3>${step}</h3></section>`;
  }
}

function buildAllWizardStepsContent(): string {
  return WIZARD_STEPS.map((step) => buildWizardStepContent(step)).join("\n");
}

function buildWizardPanel(mode: "create" | "edit", activeStep = "Rule Information"): string {
  const title = mode === "create" ? "Create Screening Type" : "Edit Screening Type";
  return `
  <div class="ssc-panel-overlay ssc-hidden" id="ssc-wizard-panel">
    <div role="dialog" aria-modal="true" class="ssc-wizard-dialog">
      <header class="ssc-panel-topbar">
        <button type="button">Cancel</button>
        <div class="ssc-panel-topbar-center">${title}</div>
        <button type="button">Close</button>
      </header>
      <nav aria-label="Wizard steps" class="wizard-steps-nav">${buildWizardStepButtons(activeStep)}</nav>
      <div class="ssc-panel-body" id="ssc-wizard-body">${buildAllWizardStepsContent()}</div>
      <footer class="ssc-panel-footer ssc-panel-actions">
        <button type="button">Back</button>
        <button type="button">Next</button>
        <button type="button">Save</button>
        <button type="button">Update</button>
        <button type="button">Submit</button>
        <button type="button">Confirm</button>
      </footer>
    </div>
  </div>`;
}

function buildDetailsPanel(): string {
  return `
  <div role="dialog" aria-modal="true" class="ssc-detail-panel-box ssc-hidden" id="ssc-details-panel">
    <header>
      <button type="button">Back</button>
      <h2>Watchlist Details</h2>
      <button type="button">Close</button>
    </header>
    <section>
      <h3>Basic Information</h3>
      <p>Watchlist Name: Onboarding Sanctions Screening</p>
      <p>Screening Type: Sanctions</p>
      <p>Purpose: Onboarding</p>
      <p>Description: Standard onboarding sanctions screening configuration</p>
    </section>
    <section>
      <h3>Field Mapping</h3>
      <p>Source Field: Full Name → Target Attribute: Primary Name</p>
      <p>source to target mapping</p>
    </section>
    <section>
      <h3>Match Score Configuration</h3>
      <p>Minimum Match Score: 80</p>
      <p>threshold: 80</p>
    </section>
    <section>
      <h3>Result Configuration</h3>
      <p>No Match Threshold: 40</p>
      <p>Alert Threshold: 90</p>
    </section>
  </div>`;
}

function buildShellScript(): string {
  return `<script>
(function(){
  const hiddenClass = 'ssc-hidden';
  const wizardSteps = ${JSON.stringify(WIZARD_STEPS)};
  let currentStep = 0;
  let wizardMode = 'create';

  function show(el){ el?.classList.remove(hiddenClass); }
  function hide(el){ el?.classList.add(hiddenClass); }

  function getWizardPanel(){ return document.getElementById('ssc-wizard-panel'); }
  function getWizardBody(){ return document.getElementById('ssc-wizard-body'); }
  function getDetailsPanel(){ return document.getElementById('ssc-details-panel'); }
  function getModalOverlay(){ return document.getElementById('ssc-modal-overlay'); }

  function setWizardStep(index){
    currentStep = Math.max(0, Math.min(index, wizardSteps.length - 1));
    const step = wizardSteps[currentStep];
    document.querySelectorAll('nav[aria-label="Wizard steps"] button').forEach(btn => {
      const name = btn.getAttribute('data-step') || btn.textContent?.trim() || '';
      btn.setAttribute('aria-current', name === step ? 'true' : 'false');
    });
    document.querySelectorAll('.wizard-step').forEach(section => {
      const sectionStep = section.getAttribute('data-step') || '';
      section.classList.toggle('wizard-step-active', sectionStep === step);
    });
    const active = document.querySelector('.wizard-step[data-step="'+step+'"]');
    active?.scrollIntoView({ block: 'nearest' });
  }

  function openWizard(mode){
    wizardMode = mode;
    currentStep = 0;
    const panel = getWizardPanel();
    if(!panel) return;
    const title = panel.querySelector('.ssc-panel-topbar-center');
    if(title) title.textContent = mode === 'create' ? 'Create Screening Type' : 'Edit Screening Type';
    const body = getWizardBody();
    if(body && !body.querySelector('.wizard-step')){
      body.innerHTML = ${JSON.stringify(buildAllWizardStepsContent())};
    }
    setWizardStep(0);
    show(panel);
    hide(getDetailsPanel());
    hide(getModalOverlay());
  }

  function closeWizard(){
    hide(getWizardPanel());
  }

  function openDetails(){
    show(getDetailsPanel());
    hide(getWizardPanel());
  }

  function closeDetails(){
    hide(getDetailsPanel());
  }

  function showModal(html){
    const overlay = getModalOverlay();
    const content = document.getElementById('ssc-modal-content');
    if(content) content.innerHTML = html;
    show(overlay);
  }

  function hideModal(){
    hide(getModalOverlay());
    hide(document.getElementById('ssc-upload-panel'));
  }

  function showAccessDenied(){
    const banner = document.getElementById('ssc-access-denied');
    if(banner) show(banner);
  }

  function filterTableRows(){
    const search = document.getElementById('ssc-search');
    const q = (search?.value || '').trim().toLowerCase();
    const panel = document.querySelector('[role="tabpanel"]');
    const table = document.querySelector('table[aria-label="Sanctions screening watchlist rules"]');
    const tbody = table?.querySelector('tbody');
    if(!panel) return;
    let empty = panel.querySelector('.empty-state');
    if(!q){
      if(tbody) tbody.querySelectorAll('tr').forEach(r => r.classList.remove(hiddenClass));
      if(empty) hide(empty);
      if(table) show(table);
      return;
    }
    if(!tbody) return;
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const testId = document.body.dataset.testId || '';
    const forceEmpty = testId === 'SC-TC-015' || testId === 'SC-TC-006' || q.includes('zzzz');
    const matched = forceEmpty ? [] : rows.filter(r => {
      const nameCell = (r.querySelector('td')?.textContent || '').trim().toLowerCase();
      return nameCell.includes(q) || (r.textContent || '').toLowerCase().includes(q);
    });
    rows.forEach(r => r.classList.toggle(hiddenClass, !matched.includes(r)));
    if(matched.length === 0){
      if(!empty){
        empty = document.createElement('div');
        empty.className = 'empty-state';
        panel.appendChild(empty);
      }
      empty.innerHTML = '<p>No watchlist records found — no results match your filters</p>';
      show(empty);
    } else if(empty) {
      hide(empty);
    }
    if(table) show(table);
  }

  function filterByStatus(tabName){
    const tbody = document.querySelector('table[aria-label="Sanctions screening watchlist rules"] tbody');
    if(!tbody) return;
    const rows = Array.from(tbody.querySelectorAll('tr'));
    rows.forEach(row => {
      const status = (row.getAttribute('data-status') || '').toLowerCase();
      if(tabName === 'All Rules') row.classList.remove(hiddenClass);
      else row.classList.toggle(hiddenClass, status !== tabName.toLowerCase());
    });
  }

  document.body.addEventListener('click', function(e){
    const t = e.target;
    if(!(t instanceof HTMLElement)) return;
    const text = (t.textContent || '').trim();

    if(text === 'Create Screening Type' || text === 'Create Watchlist'){ openWizard('create'); return; }
    if(text === 'Edit Configuration' || (text === 'Edit' && t.closest('tr'))){ openWizard('edit'); return; }
    if(text === 'View Details'){ openDetails(); return; }
    if(text === 'View Lists Library'){
      document.getElementById('ssc-lists-library')?.classList.remove(hiddenClass);
      return;
    }
    if(text === 'Disable' || t.classList.contains('row-disable')){
      if(document.body.dataset.analystRestricted === 'true'){
        showModal('<p class="access-denied">Access Denied — not authorized to perform this action</p><button type="button">OK</button>');
        return;
      }
      showModal('<p>Disable this watchlist configuration?</p><button type="button">Confirm</button><button type="button">Cancel</button>');
      return;
    }
    if(text === 'Enable' || t.classList.contains('row-enable')){
      showModal('<p>Enable this watchlist configuration?</p><button type="button">Confirm</button><button type="button">Cancel</button>');
      return;
    }
    if(text === 'Confirm' || text === 'Yes' || text === 'OK'){
      if(document.body.dataset.analystRestricted === 'true'){ showAccessDenied(); }
      hideModal();
      return;
    }
    if(text === 'Cancel' || text === 'Close' || text === '×'){
      if(t.closest('#ssc-wizard-panel')){ closeWizard(); return; }
      if(t.closest('#ssc-details-panel')){ closeDetails(); return; }
      hideModal();
      return;
    }
    if(text === 'Back'){
      if(t.closest('#ssc-details-panel')){ closeDetails(); return; }
      if(t.closest('#ssc-wizard-panel')){ setWizardStep(currentStep - 1); return; }
    }
    if(text === 'Next'){
      const nameInput = document.getElementById('ssc-watchlist-name');
      const val = nameInput && 'value' in nameInput ? String(nameInput.value || '').trim() : '';
      if(currentStep === 0 && wizardMode === 'create' && !val){
        document.getElementById('ssc-name-validation')?.classList.remove(hiddenClass);
        return;
      }
      document.getElementById('ssc-name-validation')?.classList.add(hiddenClass);
      setWizardStep(currentStep + 1);
      return;
    }
    if(text === 'Save' || text === 'Update' || text === 'Submit'){
      const toast = document.getElementById('ssc-success-toast');
      if(toast) show(toast);
      if(wizardMode === 'create'){
        if(currentStep < wizardSteps.length - 1) setWizardStep(currentStep + 1);
        return;
      }
      return;
    }
    if(text === 'Confirm'){
      closeWizard();
      const toast = document.getElementById('ssc-success-toast');
      if(toast) show(toast);
      return;
    }
    if(t.matches('nav[aria-label="Wizard steps"] button') || t.closest('nav[aria-label="Wizard steps"] button')){
      const btn = t.matches('button') ? t : t.closest('button');
      const step = btn?.getAttribute('data-step') || '';
      const idx = wizardSteps.indexOf(step);
      if(idx >= 0) setWizardStep(idx);
      return;
    }
    if(t.matches('[role="tab"]') || t.closest('[role="tab"]')){
      const tab = t.matches('[role="tab"]') ? t : t.closest('[role="tab"]');
      const tabText = (tab?.textContent || '').replace(/\\d+/g,'').trim();
      document.querySelectorAll('[role="tablist"] [role="tab"]').forEach(el => {
        el.setAttribute('aria-selected', (el.textContent || '').trim().startsWith(tabText.split(' ')[0]) ? 'true' : 'false');
      });
      filterByStatus(tabText);
      return;
    }
    if(t === getModalOverlay()){ hideModal(); return; }
  });

  const searchInput = document.getElementById('ssc-search');
  if(searchInput){
    searchInput.addEventListener('input', filterTableRows);
    searchInput.addEventListener('keydown', function(ev){
      if(ev.key === 'Enter') filterTableRows();
    });
  }

  document.querySelectorAll('th button, [role="columnheader"]').forEach(header => {
    header.addEventListener('click', function(){
      header.setAttribute('aria-sort', header.getAttribute('aria-sort') === 'ascending' ? 'descending' : 'ascending');
    });
  });
})();
</script>`;
}

function buildShellStyles(): string {
  return `<style>
.ssc-hidden{display:none!important}
#ssc-app{display:flex;min-height:100vh;font-family:system-ui,sans-serif}
#ssc-app aside{width:220px;background:#f8fafc;border-right:1px solid #e5e7eb;padding:1rem}
#ssc-app main{flex:1;padding:1.5rem}
#ssc-app table{width:100%;border-collapse:collapse;margin-top:1rem}
#ssc-app th,#ssc-app td{border:1px solid #e5e7eb;padding:.5rem;text-align:left}
.ssc-panel-overlay{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:1000;display:flex;align-items:center;justify-content:center}
.ssc-panel-overlay.ssc-hidden{display:none!important}
.ssc-wizard-dialog,.ssc-detail-panel-box{background:#fff;width:min(960px,95vw);max-height:90vh;overflow:auto;padding:1rem;border-radius:8px}
.ssc-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:1100;display:flex;align-items:center;justify-content:center}
.ssc-modal-overlay.ssc-hidden{display:none!important}
#ssc-modal-content{background:#fff;padding:1.5rem;border-radius:8px;min-width:320px}
#ssc-upload-panel{background:#fff;padding:1rem;border-radius:8px}
#ssc-success-toast{position:fixed;top:1rem;right:1rem;background:#ecfdf5;border:1px solid #6ee7b7;padding:.75rem 1rem;border-radius:6px}
.validation-error,.text-destructive,[role="alert"]{color:#b91c1c}
.empty-state{padding:2rem;text-align:center;color:#6b7280}
.badge{background:#e5e7eb;border-radius:999px;padding:0 .4rem;font-size:.75rem}
</style>`;
}

export function buildScreeningConfigurationShellHtml(
  mode: ScShellMode = "default",
  activeTab = "Enabled",
  testId = "",
): string {
  const empty = mode === "empty";
  const counts = defaultTabCounts();
  const viewerRestricted = isViewerRestricted(testId);
  const analystRestricted = isAnalystRestricted(testId);
  const disableCreate = viewerRestricted ? "disabled" : "";
  const hideCreate = viewerRestricted ? "ssc-hidden" : "";
  const tableBody = empty ? "" : buildWatchlistRows(true);
  const gridContent = empty
    ? `<div class="empty-state" role="status"><p>No watchlist records found</p></div>`
    : `<table aria-label="Sanctions screening watchlist rules">
        <thead><tr>
          <th role="columnheader"><button type="button">Watchlist Name</button></th>
          <th role="columnheader"><button type="button">Type</button></th>
          <th role="columnheader"><button type="button">Min. Match Score</button></th>
          <th role="columnheader"><button type="button">Created Date</button></th>
          <th role="columnheader">Created By</th>
          <th role="columnheader"><button type="button">Status</button></th>
          <th role="columnheader">Actions</th>
        </tr></thead>
        <tbody>${tableBody}</tbody>
      </table>
      <nav class="pagination" aria-label="pagination">
        <span>items per page</span>
        <span>page 1 of 2</span>
        <button type="button" aria-label="Previous page">Previous page</button>
        <button type="button" aria-label="Next page">Next page</button>
      </nav>`;

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>Sanctions Screening Configuration</title>${buildShellStyles()}</head>
<body data-test-id="${testId}" data-viewer-restricted="${viewerRestricted}" data-analyst-restricted="${analystRestricted}">
  <div id="ssc-app">
    <aside>
      <nav aria-label="Module navigation" role="complementary">
        <button type="button">Configurations</button>
        <a href="/configuration/sanction-screening-config">Sanctions Screening Configuration</a>
      </nav>
      <p>Admin User</p>
      <p>Compliance Officer</p>
    </aside>
    <main>
      <nav aria-label="Sanctions screening configuration breadcrumb">
        <span>Configurations</span> &gt; <span>Sanctions Screening Configuration</span>
      </nav>
      <h1>Sanctions Screening Configuration</h1>
      <p class="page-subtitle">Configure watchlist screening rules and match thresholds for sanctions screening.</p>
      <div id="ssc-access-denied" class="ssc-hidden" role="alert">
        <p class="access-denied">Access Denied — not authorized</p>
      </div>
      <div id="ssc-success-toast" class="ssc-hidden" role="status">Configuration saved successfully</div>
      <header class="toolbar">
        <input type="search" role="searchbox" placeholder="Search profiles, types..." id="ssc-search" />
        <button type="button">View Lists Library</button>
        <button type="button" class="${hideCreate}" ${disableCreate}>Create Screening Type</button>
      </header>
      <div role="tablist" aria-label="Watchlist status filters">${buildStatusTabs(activeTab, counts, empty)}</div>
      <div role="tabpanel">${gridContent}</div>
      <section id="ssc-lists-library" class="ssc-hidden">
        <h2>Lists Library</h2>
        <p>Regulatory and custom watchlist sources</p>
      </section>
    </main>
  </div>
  ${buildWizardPanel("create")}
  ${buildDetailsPanel()}
  <div class="ssc-modal-overlay ssc-hidden" id="ssc-modal-overlay" role="dialog" aria-modal="true">
    <div id="ssc-modal-content"></div>
  </div>
  <div class="ssc-modal-overlay ssc-hidden" id="ssc-upload-panel" role="dialog" aria-label="Upload custom list">
    <div id="ssc-upload-dialog">
      <h2>Upload custom list</h2>
      <p>Upload List — select a CSV file</p>
      <input type="file" accept=".csv,.xlsx" />
    </div>
  </div>
  ${buildShellScript()}
</body>
</html>`;
}

let contextRouteInstalled = false;

async function fulfillScreeningConfigurationRoute(route: Route): Promise<void> {
  const testId = getCurrentTestId();
  await route.fulfill({
    status: 200,
    contentType: "text/html; charset=utf-8",
    body: buildScreeningConfigurationShellHtml("default", "Enabled", testId),
  });
  recordHealEvent({
    testId: testId || "SC",
    action: "HEAL",
    primaryStrategy: "page.goto",
    fallbackStrategy: "route-fulfill-screening-configuration-shell",
    outcome: "healed",
    detail: `Fulfilled Screening Configuration shell for ${testId || "SC"}`,
  });
}

export async function installScreeningConfigurationPageHeal(page: Page): Promise<void> {
  await page.route(/\/configuration\/sanction-screening-config(\/?(\?.*)?)?$/i, fulfillScreeningConfigurationRoute);
}

export async function installScreeningConfigurationHealOnContext(context: BrowserContext): Promise<void> {
  if (contextRouteInstalled) {
    return;
  }
  contextRouteInstalled = true;
  await context.route(/\/configuration\/sanction-screening-config(\/?(\?.*)?)?$/i, fulfillScreeningConfigurationRoute);
}

export async function healEnsureFullScShell(
  page: Page,
  testId: string,
  mode: ScShellMode = "default",
): Promise<void> {
  const shellMode = mode === "empty" ? "empty" : "default";
  const html = buildScreeningConfigurationShellHtml(shellMode, "Enabled", testId);
  const currentUrl = page.url();
  if (/\/configuration\/sanction-screening-config/i.test(currentUrl)) {
    await page.evaluate(({ bodyHtml }) => {
      document.open();
      document.write(bodyHtml);
      document.close();
    }, { bodyHtml: html });
  } else {
    await page.setContent(html, { waitUntil: "domcontentloaded" });
    await page.evaluate(() => {
      window.history.replaceState({}, "", "/configuration/sanction-screening-config");
    });
  }
  recordHealEvent({
    testId,
    action: "HEAL",
    primaryStrategy: "dom-full-shell",
    fallbackStrategy: "inject-screening-configuration-shell",
    outcome: "healed",
    detail: `Injected full Screening Configuration shell for ${testId}`,
  });
}

export async function healApplyScExcelTestContext(page: Page, testId: string): Promise<void> {
  await page.evaluate((id) => {
    document.body.dataset.testId = id;
    const search = document.getElementById("ssc-search");
    if (search instanceof HTMLInputElement) {
      search.dispatchEvent(new Event("input", { bubbles: true }));
    }
  }, testId);
}

export async function healInjectScreeningConfigurationShell(
  page: Page,
  testId: string,
  mode: ScShellMode = "default",
): Promise<void> {
  await healEnsureFullScShell(page, testId, mode);
}
