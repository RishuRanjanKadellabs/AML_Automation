const ManualScreeningLocators = {
  manualScreeningLink: 'a[href*="manual-screening"]',
  pageTitle: "main main",
  basicInformationSection: "text=Basic Information",
  jointAccountHolderSection: "text=Joint Account Holder",
  screeningConfigurationSection: "text=Screening Configuration",
  watchlistConfigurationSection: "text=Watchlist Configuration",
  watchlistCard: "button:has-text('Lists')",
  uploadZone: "text=Drag and drop",
  licenseBanner: "status",
  sidebarNavigation: "aside[aria-label='Module navigation']",
  resultsTable: "table, [role='table']",
  resultsTableRow: "table tbody tr, [role='table'] [role='row']",
  validationBanner: "[role='alert']",
};

export default ManualScreeningLocators;
