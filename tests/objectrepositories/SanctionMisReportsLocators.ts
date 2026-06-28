const SanctionMisReportsLocators = {
  misReportsLink: 'a[href*="mis-reports"]',
  pageTitle: "text=Sanction MIS Reports",
  pageSubtitle: "text=/Manage and generate sanctions screening/i",
  filterButton: 'button:has-text("Filter")',
  addNewRuleButton: 'button:has-text("Add New Rule")',
  reportsTable: "table",
  reportsTableRow: "table tbody tr",
  viewActionButton: 'button:has-text("View")',
  generateActionButton: 'button:has-text("Generate")',
  exportButton: 'button:has-text("Export")',
  dateRangePicker: '[aria-label*="date" i], button:has-text("Date")',
  paginationNext: 'button:has-text("Next")',
  paginationPrev: 'button:has-text("Previous")',
  emptyState: "text=/no reports|no data|no records/i",
  validationMessage: '[role="alert"], .text-destructive',
  reportFiltersPanel: '.filters-panel, :has-text("Report Filters")',
  detailSearchInput: 'input[placeholder*="Search records" i]',
  columnsButton: 'button:has-text("Columns")',
  detailPaginationBar: ".pagination-bar",
};

export default SanctionMisReportsLocators;
