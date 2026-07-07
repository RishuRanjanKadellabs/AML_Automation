const ReferenceDataRegistryLocators = {
  rdrLayout: ".rdr-layout, section.rdr-view",
  rdrPageTitle: "h1.rdr-page-title, main.main-content h1, main.mm-dt h1",
  masterNav: ".master-nav",
  masterTabButton: ".master-nav .mnav-btn",
  tableCard: ".tcard",
  dataTable: ".tcard table, .rdr-layout table:has(thead th), main.main-content table:has(thead th)",
  tableHeader: "thead th",
  tableBodyRow: "tbody tr",
  recordCountBadge: ".tcnt, .tcard .tcap",
  lastSyncInfo: ".last-sync",
  noResultsRow: ".no-results, tbody tr:has-text('No results'), tbody tr:has-text('No records')",
  emptyState: ".no-results, .empty-state, tbody tr:has-text('No results'), tbody tr:has-text('No records')",
  customerIdCell: ".td-id, button.td-id-btn, td button.td-id-btn, td button, td a",
  searchInput:
    '#tab-search-input, .tab-search-input, input.tab-search-input, .tb-search-box input, input[placeholder*="Search" i], input[type="search"]',
  countrySearchInput: '#cm-search, input.cm-fi[placeholder*="Search" i], input.cm-fi[placeholder*="country" i]',
  countryDataTable: ".cm-tbl-wrap table, .cm-wrap table:has(thead th)",
  countryFilterSelect: ".cm-filters select.cm-fi, .cm-wrap select.cm-fi",
  countryClearButton: '.cm-toolbar button:has-text("Clear"), button:has-text("Clear")',
  clearButton: 'button:has-text("Clear"), button[title*="Clear" i]',
  countryPanelOverlay: ".cm-panel-overlay:not(.cm-hidden), #cm-view-panel:not(.cm-hidden), #cm-edit-panel:not(.cm-hidden)",
  countryPanelClose: ".cm-panel-close, #cm-view-panel .cm-panel-close",
  csvExportButton: 'button:has-text("CSV"), button[title*="CSV" i], button:has-text("⬇ CSV")',
  excelExportButton: 'button:has-text("Excel"), button[title*="Excel" i], button:has-text("⬇ Excel")',
  columnsPickerButton: 'button:has-text("Columns")',
  columnsPickerApplyButton: 'button:has-text("Save & Apply"), button:has-text("Apply")',
  viewActionButton:
    'button:has-text("View"), button[title*="View" i], .tcard tbody tr button.view-btn, tbody tr button:has-text("View")',
  detailModalOverlay: ".rdr-modal-overlay.open, .rdr-modal-overlay",
  detailModal:
    ".rdr-modal-overlay.open .rdr-modal-box, .rdr-modal-box, [role='dialog'], .modal, .rdr-detail-modal, .record-detail-modal, .drawer-panel, aside[class*='detail'], [class*='detail-modal'], [class*='detail-panel'], .slide-panel, .side-panel, .rdetail, .record-detail, [class*='rdetail']",
  detailModalHeading:
    ".rdr-modal-head, h2:has-text('Record Detail'), h3:has-text('Record Detail'), [class*='detail-title']:has-text('Record Detail'), h2:has-text(/—/), h3:has-text(/—/), h2, h3",
  filterSelect: ".tcard select, .rdr-filters select, .filter-bar select, .rdr-layout select, main.main-content select",
  paginationNext: 'button:has-text("Next"), .pagination button.next',
  paginationIndicator: ".pagination, .page-indicator",
};

export default ReferenceDataRegistryLocators;
