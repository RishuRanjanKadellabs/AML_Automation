const Customer360Locators = {
  customer360Title: "h1.lookup-page-title, h1:has-text('Customer 360'), h1.customer-360-title",
  customer360Link: "a.sidebar-link[href='/kyc/customer-360'], a:has-text('Customer 360')",
  landingPageHeader: ".lookup-page-header, h2:has-text('Customer 360 Lookup')",
  landingLookupTitle: ":text-matches('Customer 360 Lookup', 'i')",
  customerSearchInput:
    "input[aria-label='Search customers'], input[placeholder*='Search by Name'], input[placeholder*='Search'], input[name*='search']",
  customerSearchButton: "button:has-text('Search'), button[aria-label*='Search']",
  customerSearchResults:
    "[class*='lookup-result'], [class*='result-card'], [role='listbox'], [role='option'], .customer-search-results",
  recentSearchItem: "[class*='recent-search'], [class*='recent'] button, [class*='recent'] [role='button']",
  customer360Main: "main:has([role='tablist']), main:has(nav[aria-label*='Customer 360 top'])",
  headerStrip:
    "nav[aria-label*='Customer 360 top'], .cust-header, [class*='header-strip'], .customer-360-header, [class*='profile-header']",
  customerName: "nav[aria-label*='Customer 360 top'], main",
  customerIdentifier: "[class*='customer-id'], [class*='identifier'], strong:near(:text('UID:'))",
  typeSwitcher:
    ".type-switcher button, button.type-btn, button#btnIndividual, button#btnNonIndividual",
  individualToggle:
    "button#btnIndividual, button.type-btn:has-text('Individual'), button:has-text('▲ Individual')",
  corporateToggle:
    "button#btnNonIndividual, button.type-btn:has-text('Non-Individual'), button:has-text('Corporate'), button:has-text('🏢')",
  customerTypeIndicator: ":text-matches('Individual|Corporate|Non-Individual', 'i')",
  pepBadge: "button:has-text('PEP'), [class*='pep']:has-text('PEP')",
  adverseMediaBadge: "button:has-text('Adverse Media')",
  riskScoreBadge: ":text-matches('Risk Score', 'i')",
  strSarBadge: "button:has-text('STR/SAR')",
  exportButton: "button:has-text('Export')",
  retryButton:
    "button:has-text('Retry'), button:has-text('Try again'), a:has-text('Back to Customer 360'), button:has-text('Back to Customer 360')",
  // Retry-only (excludes the "Back to Customer 360 Lookup" link). Clicking the
  // back-link would navigate away from the error state, so retry interactions
  // must target an actual retry control only.
  retryActionButton: "button:has-text('Retry'), button:has-text('Try again')",
  loadingIndicator:
    "[class*='loading'], [class*='skeleton'], [aria-busy='true'], .lookup-result-count, [class*='spinner']",
  screeningStatus: "[class*='screening-status'], td:has-text('Cleared'), td:has-text('Pending'), td:has-text('Review')",
  screeningCaseId: "td, [class*='case-id']",
  reScreenButton: "button:has-text('Re-Screen')",
  kpiCardClickable:
    "[role='tabpanel'] button, [class*='kpi'][role='button'], [class*='metric-tile'], [class*='summary-card'] button",
  emptyState:
    "[class*='empty'], .lookup-empty-card, :text-matches('No (data|records|results|customers found|LEA requests)', 'i')",
  tabList: "[role='tablist'][aria-label*='Customer 360'], [role='tablist'], .tab-bar, .customer-360-tabs",
  tabPanel: "[role='tabpanel'], .tab-panel",
  kpiCard:
    "[role='tabpanel'] button, [class*='kpi'], [class*='metric-tile'], [class*='summary-card']",
  riskDonutChart:
    "[role='tabpanel'] [class*='donut'], [role='tabpanel'] [class*='risk-chart'], [role='tabpanel'] canvas, [role='tabpanel'] .recharts-surface, [role='tabpanel'] button.risk-tab-link-btn",
  riskVisualization:
    "canvas, svg, .recharts-surface, [class*='donut'], [class*='chart'], [class*='evolution'], [class*='gauge'], [class*='sparkline'], [class*='trend']",
  riskBreakdownButton: "button:has-text('View Risk Breakdown')",
  tabTable: "table, [role='table'], [class*='data-grid']",
  gapReportContent: ":text-matches('Missing Fields|KYC Gap Score|Mandatory', 'i')",
  tabTableRow: "tbody tr, [role='row']",
  expandCardButton: "button[aria-label*='Expand'], button:has-text('Expand')",
  collapseCardButton: "button[aria-label*='Collapse'], button:has-text('Collapse')",
  filterInput: "input[placeholder*='Filter'], input[aria-label*='Filter']",
  paginationNext: "button:has-text('Next'), [aria-label*='Next page']",
  maskedField:
    "[class*='masked'], [data-masked='true'], main strong:text-matches('.*\\\\*{2,}.*'), main :text-matches('X{4}|\\\\*{2,}')",
  alertCountBadge: ":text-matches('Active Alerts', 'i')",
  errorStateMessage: ":text-matches('Customer not found|unable to load|error|failed to load', 'i')",
};

export default Customer360Locators;
