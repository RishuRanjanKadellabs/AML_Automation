const DedupScreeningLocators = {
  dedupScreeningLink: 'a[href*="dedup-screening"]',
  pageTitle: "text=De-Duplication Screening",
  breadcrumb: "text=De-dup Screening",
  matchParameterTrigger: 'button:has-text("Match Parameter")',
  matchParameterPanel: "[data-radix-popper-content-wrapper]",
  matchParameterSearch: 'input[aria-label="Search parameters..."], input[placeholder*="Search parameters" i]',
  customerIdInput: 'input[placeholder*="Customer ID" i]',
  generateReportButton: 'button:has-text("Generate Report")',
  clearFiltersButton: 'button:has-text("Clear Filters")',
  resultsTable: "table, [role='table']",
  resultsTableRow: "table tbody tr, [role='table'] [role='row']",
  compareModal: "[role='dialog']",
  exportReportButton: 'button:has-text("Export")',
  paginationNext: 'button[aria-label="Next page"], button:has-text("Next")',
  paginationPrev: 'button[aria-label="Previous page"], button:has-text("Previous")',
  emptyState: "text=/no duplicate|no records|no results|no matching/i",
  validationMessage: "[role='alert'], .text-destructive, .text-red-500",
};

export default DedupScreeningLocators;
