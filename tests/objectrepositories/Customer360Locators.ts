const Customer360Locators = {
  customer360Title: "h1.lookup-page-title, h1:has-text('Customer 360'), h1.customer-360-title",
  customer360Link: "a.sidebar-link[href='/kyc/customer-360'], a:has-text('Customer 360')",
  landingPageHeader: ".lookup-page-header",
  landingLookupTitle: ":text-matches('Customer 360 Lookup', 'i')",
  customerSearchInput:
    "input[aria-label='Search customers'], input[placeholder*='Search by Name'], input[placeholder*='Search'], input[name*='search']",
  customerSearchButton: "button:has-text('Search'), button[aria-label*='Search']",
  customerSearchResults:
    "[class*='lookup-result'], [class*='result-card'], [role='listbox'], [role='option'], .customer-search-results",
  recentSearchItem: "[class*='recent-search'], [class*='recent'] button, [class*='recent'] [role='button']",
  headerStrip:
    "nav[aria-label*='Customer 360 top'], .cust-header, [class*='header-strip'], .customer-360-header, [class*='profile-header']",
  customerName: "[class*='customer-name'], .cust-header [class*='name'], nav[aria-label*='Customer 360']",
  customerIdentifier: "[class*='customer-id'], [class*='identifier']",
  pepBadge: "[class*='pep'], :text-matches('PEP', 'i')",
  riskScoreBadge: "[class*='risk-score'], [class*='risk-badge']",
  exportButton: "button:has-text('Export')",
  retryButton: "button:has-text('Retry'), button:has-text('Try again')",
  loadingIndicator: "[class*='loading'], [class*='skeleton'], [aria-busy='true'], .lookup-result-count",
  screeningStatus: "[class*='screening-status'], td:has-text('Cleared'), td:has-text('Pending')",
  screeningCaseId: "td, [class*='case-id']",
  reScreenButton: "button:has-text('Re-Screen')",
  kpiCardClickable:
    "[role='tabpanel'] button, [class*='kpi'][role='button'], [class*='metric-tile'], [class*='summary-card'] button",
  emptyState: "[class*='empty'], .lookup-empty-card, :text-matches('No (data|records|results|customers found)', 'i')",
  tabList: "[role='tablist'][aria-label*='Customer 360'], [role='tablist'], .tab-bar, .customer-360-tabs",
  tabPanel: "[role='tabpanel'], .tab-panel",
  kpiCard:
    "[role='tabpanel'] button, [class*='kpi'], [class*='metric-tile'], [class*='summary-card']",
  riskDonutChart: "[class*='donut'], [class*='risk-chart'], canvas, svg[class*='chart']",
  tabTable: "table, [role='table'], [class*='data-grid']",
  tabTableRow: "tbody tr, [role='row']",
  individualToggle: "button:has-text('Individual'), [role='tab']:has-text('Individual')",
  corporateToggle: "button:has-text('Corporate'), [role='tab']:has-text('Corporate')",
  expandCardButton: "button[aria-label*='Expand'], button:has-text('Expand')",
  collapseCardButton: "button[aria-label*='Collapse'], button:has-text('Collapse')",
  filterInput: "input[placeholder*='Filter'], input[aria-label*='Filter']",
  paginationNext: "button:has-text('Next'), [aria-label*='Next page']",
  maskedField: "[class*='masked'], [data-masked='true']",
  alertCountBadge: "[class*='alert-count'], [class*='badge']",
};

export default Customer360Locators;
