const ScreeningConfigurationLocators = {
  // Live app (2026-07-22 snapshot): Configurations > Sanction Screening Config
  screeningConfigLink:
    'a[href*="sanction-screening-config"], a:has-text("Sanction Screening Config"), a:has-text("Sanctions Screening Configuration")',
  configurationsMenu: 'a[href*="/configuration/"], text=/^Configurations$/i',
  pageBreadcrumb: 'nav[aria-label="Sanctions screening configuration breadcrumb"]',
  pageTitle:
    'nav[aria-label="Sanctions screening configuration breadcrumb"], main :text-is("Sanctions Screening Configuration")',
  pageSubtitle: "text=/screening configuration|watchlist/i",
  // Live: tablist aria-label remains "Watchlist status filters"; visible tabs are Enabled/Disabled/All
  statusTabList:
    'tablist[aria-label="Watchlist status filters"], tablist[aria-label="Screening type status filters"]',
  enabledTab: 'tablist [role="tab"]:has-text("Enabled")',
  disabledTab: 'tablist [role="tab"]:has-text("Disabled")',
  allRulesTab: 'tablist [role="tab"]:has-text("All")',
  activeTab: 'tablist [role="tab"]:has-text("Enabled"), tablist [role="tab"]:has-text("Active")',
  inactiveTab: 'tablist [role="tab"]:has-text("Disabled"), tablist [role="tab"]:has-text("Inactive")',
  searchBox: '[placeholder*="Search profiles" i], [role="searchbox"]',
  viewListsLibraryButton: 'button:has-text("View Lists Library")',
  createScreeningTypeButton: 'button:has-text("Create Screening Type")',
  // Legacy alias — live primary label is Create Screening Type (no Create Watchlist on live)
  createWatchlistButton: 'button:has-text("Create Screening Type"), button:has-text("Create Watchlist")',
  // Live table caption/aria still says "watchlist rules"; headers use Screening Type
  screeningTypeTable:
    'table[aria-label="Sanctions screening watchlist rules"], table[aria-label="Sanctions screening type rules"], table',
  screeningTypeTableRow: "table tbody tr",
  watchlistTable:
    'table[aria-label="Sanctions screening watchlist rules"], table[aria-label="Sanctions screening type rules"], table',
  watchlistTableRow: "table tbody tr",
  viewDetailsButton: 'button:has-text("View Details")',
  editConfigurationButton: 'button:has-text("Edit Configuration")',
  disableButton: 'button:has-text("Disable")',
  enableButton: 'button:has-text("Enable")',
  emptyState: "text=/no screening type|no watchlist|no records|no data/i",
  validationMessage: '.ssc-form-error, [role="alert"], .text-destructive, text=/Watchlist name is required|required|mandatory|invalid/i',
  wizardDialog: '[role="dialog"].ssc-detail-panel-box, [role="dialog"]',
  wizardStepsNav: 'nav[aria-label="Wizard steps"]',
  wizardRuleInformation: 'h3:has-text("Rule Information"), text=/Rule Information|Basic Information/i',
  screeningTypeNameInput:
    'input[placeholder*="Screening Type"], input[placeholder*="Onboarding"], [aria-label*="Screening Type"]',
  paginationNext: 'button[aria-label="Next page"], button:has-text("Next page")',
  paginationPrev: 'button[aria-label="Previous page"], button:has-text("Previous page")',
  fieldMappingPanel: 'nav[aria-label="Wizard steps"] >> text=Field Mapping, h3:has-text("Field Mapping"), text=/Field Mapping/i',
  listSelectionPanel: 'nav[aria-label="Wizard steps"] >> text=List Selection, h3:has-text("List Selection"), text=/List Selection/i',
  matchScorePanel: 'nav[aria-label="Wizard steps"] >> text=Match Score, h3:has-text("Match Score"), text=/Match Score Configuration/i',
  successMessage: "text=/saved successfully|configuration created|configuration updated|Rule configuration saved/i",
  // Live Lists Library dialog (?view=library)
  listsLibraryDialog: '[role="dialog"][aria-label*="Lists Library" i], [role="dialog"]:has-text("Lists Library")',
  listsLibrarySearch: '[placeholder*="Search lists by name" i], [role="searchbox"][aria-label*="Search lists" i]',
  listsLibraryRegionFilter: 'combobox[aria-label*="region" i], [role="combobox"]:has-text("All Regions")',
  // Live Enable/Disable modal
  enableDisableDialog:
    '[role="dialog"][aria-label*="Disable Screening Type" i], [role="dialog"][aria-label*="Enable Screening Type" i]',
  toggleReason: 'textbox[aria-label*="Reason" i], textarea[aria-label*="Reason" i]',
};

export default ScreeningConfigurationLocators;
