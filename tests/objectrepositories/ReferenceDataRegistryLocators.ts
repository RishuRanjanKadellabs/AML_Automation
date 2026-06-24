const ReferenceDataRegistryLocators = {
  rdrLayout: ".rdr-layout",
  rdrPageTitle: "h1.rdr-page-title, main h1",
  masterTabButton: ".master-nav .mnav-btn, .rdr-layout button, main.main-content button",
  tableCard: ".tcard, .rdr-layout",
  dataTable: ".tcard table, .rdr-layout table:has(thead th), main.main-content table:has(thead th)",
  tableHeader: "thead th",
  tableBodyRow: "tbody tr",
  recordCountBadge: ".tcnt",
  lastSyncInfo: ".last-sync",
  noResultsRow: ".no-results, tbody tr:has-text('No results'), tbody tr:has-text('No records')",
  customerIdCell: ".td-id, button.td-id-btn, td button, td a",
  searchInput:
    'input[placeholder*="Search" i], input[type="search"]',
  clearButton: 'button:has-text("Clear"), button[title*="Clear" i]',
  csvExportButton: 'button:has-text("CSV"), button[title*="CSV" i], button:has-text("⬇ CSV")',
  excelExportButton: 'button:has-text("Excel"), button[title*="Excel" i], button:has-text("⬇ Excel")',
  columnsPickerButton: 'button:has-text("Columns")',
  columnsPickerApplyButton: 'button:has-text("Save & Apply"), button:has-text("Apply")',
  viewActionButton:
    'button:has-text("View"), button[title*="View" i], .tcard tbody tr button.view-btn, tbody tr button:has-text("View")',
  detailModal:
    '[role="dialog"], .modal, .rdr-detail-modal, .record-detail-modal, .drawer-panel, aside[class*="detail"], [class*="detail-modal"], [class*="detail-panel"], .slide-panel, .side-panel, .rdetail, .record-detail, [class*="rdetail"]',
  detailModalHeading:
    'h2:has-text("Record Detail"), h3:has-text("Record Detail"), [class*="detail-title"]:has-text("Record Detail"), h2:has-text(/—/), h3:has-text(/—/), h2, h3',
  filterSelect: ".tcard select, .rdr-filters select, .filter-bar select, .rdr-layout select, main select",
  paginationNext: 'button:has-text("Next"), .pagination button.next',
  paginationIndicator: ".pagination, .page-indicator",
};

export default ReferenceDataRegistryLocators;
