const ManualScreeningLocators = {
  manualScreeningLink: 'a[href*="manual-screening"]',
  pageTitle: "main main",
  basicInformationSection: "text=Basic Information",
  jointAccountHolderSection: "text=Joint Account Holder",
  screeningConfigurationSection: "text=Screening Configuration",
  watchlistConfigurationSection: "text=Watchlist Configuration",
  watchlistGrid: ".watchlist-grid",
  watchlistCard: "button.watchlist-card",
  uploadZone: "text=Drag and drop",
  licenseBanner: "status",
  sidebarNavigation: "aside[aria-label='Module navigation']",
  resultsTable: ".ms-res-table-card table, table, [role='table']",
  resultsTableRow: ".ms-res-table-card table tbody tr, table tbody tr, [role='table'] [role='row']",
  validationBanner: "[role='alert']",
  matchReviewHeading: "text=Match Review",
  commentDialog: "[role='dialog']",
  commentInput: "[role='dialog'] textarea, [role='dialog'] input[type='text']",
  dialogConfirmButton: "[role='dialog'] button:has-text('Confirm')",
};

export default ManualScreeningLocators;
