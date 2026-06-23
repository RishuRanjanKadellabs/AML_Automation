const CustomListManagerLocators = {
  pageTitle:
    "h1:has-text('Custom List Manager'), h1:has-text('Custom Lists'), h1:has-text('Screening – Custom List Manager'), h1:has-text('Screening - Custom List Manager'), [class*='custom-list-manager'] h1, #clm-app h1",
  pageSubtitle: ".custom-list-manager-subtitle, [class*='subtitle']",
  configurationMenu:
    "button:has-text('Configuration'), button:has-text('Configurations'), [aria-label*='Configuration']",
  configurationSubmenu: "[class*='configuration-submenu'], nav:has-text('Configuration')",
  customListManagerLink:
    "nav a[href*='configuration/custom-list-manager'], aside a[href*='configuration/custom-list-manager'], [class*='sidebar'] a[href*='configuration/custom-list-manager'], a[href='/configuration/custom-list-manager']",
  customListManagerSidebarLabel:
    "Screening – Custom List Manager, Screening - Custom List Manager, Custom List Manager, Custom Lists",
  breadcrumb: "[class*='breadcrumb'], nav[aria-label*='breadcrumb'], .breadcrumb",
  toolbar: "[class*='toolbar'], [class*='action-bar'], header[class*='toolbar']",
  searchInput:
    "input[placeholder*='Search list'], input[placeholder*='Search custom'], input[placeholder*='Search'], input[type='search']",
  searchClearButton: "button[aria-label*='Clear'], button:has-text('Clear')",
  tabList: "[role='tablist'], .custom-list-manager-tabs, nav[class*='tabs']",
  tabPanel: "[role='tabpanel'], .tab-panel, [class*='tab-content']",
  activeTab: "[role='tab'][aria-selected='true']",
  makerCheckerTabList: "[class*='maker-checker-tabs'], [data-testid='maker-checker-tabs']",
  dataTable: "table, [role='grid'], [class*='data-table'], [class*='list-table'], [class*='custom-list-table']",
  tableHeader: "table thead th, [role='columnheader']",
  tableRow: "table tbody tr, [role='row']",
  dashboardCards: "[class*='dashboard-card'], [class*='summary-card'], [data-testid*='dashboard-card']",
  listNameBadge: "[class*='list-name'], [data-testid='list-name']",
  statusBadge: "[class*='status-badge'], [data-testid='status-badge']",
  purposeBadge: "[class*='purpose-badge'], [class*='badge'][class*='purpose']",
  rowActionButton:
    "button[aria-label*='action'], button:has-text('Edit'), button:has-text('View'), button:has-text('Delete'), [class*='row-action']",
  rowActionsMenu: "button[aria-label*='More'], button[aria-label*='Actions'], [class*='kebab']",
  exportButton: "button:has-text('Export')",
  createListButton: "button:has-text('Create List'), button:has-text('New List')",
  addEntityButton: "button:has-text('Add Entity'), button:has-text('Add Entry')",
  bulkUploadButton: "button:has-text('Bulk Upload'), button:has-text('Bulk Import'), button:has-text('Upload')",
  allRequestsTab: "[role='tab']:has-text('All Requests'), button:has-text('All Requests')",
  myRequestsTab: "[role='tab']:has-text('My Requests'), button:has-text('My Requests')",
  approvalQueue: "[class*='approval-queue'], [class*='maker-checker'], #clm-approval-queue, button:has-text('Approval Queue')",
  auditTable: "[class*='audit-table'], [data-testid='audit-table'], table.audit-listing",
  auditSearchInput: "input[placeholder*='Search audit'], input[placeholder*='audit']",
  auditExportButton: "button:has-text('Export Audit'), button:has-text('Export audit')",
  createListModal:
    "#modal-create-list, [role='dialog'][aria-label='Create List'], [class*='create-list-modal']:not(.clm-hidden)",
  addEntityPanel:
    "#modal-add-entity, aside.add-entity[aria-label='Add Entity'], [role='dialog'][aria-label='Add Entity']",
  bulkUploadModal:
    "#modal-bulk-upload, [role='dialog'][aria-label='Bulk Upload'], [class*='bulk-upload']:not(.clm-hidden)",
  approvalModal:
    "#clm-approval-queue, [role='dialog'][aria-label='Approval'], section.approval-queue:not(.clm-hidden)",
  listNameInput: "input[name*='listName'], input[name*='list_name'], input[placeholder*='List name'], [data-testid='list-name-input']",
  purposeSelect: "select[name*='purpose'], [data-testid='purpose-select']",
  ttlInput: "input[name*='ttl'], input[name*='TTL'], input[placeholder*='TTL'], [data-testid='ttl-input']",
  matchingSelect: "select[name*='matching'], select[name*='matchType'], [data-testid='matching-select']",
  reasonInput:
    "textarea[name*='reason'], input[name*='reason'], textarea[placeholder*='reason'], [data-testid='reason-input']",
  entityIdentityInput:
    "input[name*='entity'], input[name*='identity'], input[placeholder*='entity'], textarea[placeholder*='entity'], [data-testid='entity-identity']",
  modalOverlay: "#clm-overlay, [class*='overlay'], [class*='backdrop']",
  modalSubmitButton:
    "button:has-text('Submit'), button:has-text('Create'), button:has-text('Save'), button:has-text('Add'):not(:has-text('Add Entity'))",
  modalCancelButton: "button:has-text('Cancel'), button:has-text('Close')",
  modalApproveButton: "button:has-text('Approve'), button:has-text('Confirm')",
  modalRejectButton: "button:has-text('Reject'), button:has-text('Decline')",
  modalConfirmButton: "button:has-text('Confirm'), button:has-text('Yes')",
  saveDraftButton: "button:has-text('Save Draft'), button:has-text('Draft')",
  retryButton: "button:has-text('Retry'), button:has-text('Try Again')",
  loadingIndicator: "[class*='loading'], [class*='skeleton'], [class*='spinner'], [aria-busy='true']",
  emptyState: ".empty-state, [class*='empty-state'], [class*='no-data'], [class*='no-results']",
  errorState: "[class*='error-state'], [role='alert'], [class*='error-message']",
  validationError: "[class*='validation-error'], [class*='field-error'], .error-text",
  duplicateError: "[class*='duplicate'], text=/duplicate/i",
  toastNotification: "[class*='toast'], [role='status'][class*='toast'], .notification-toast",
  pagination: "[class*='pagination'], nav[aria-label*='pagination']",
  paginationNext: "button[aria-label='Next page'], button:has-text('Next')",
  paginationPrev: "button[aria-label='Previous page'], button:has-text('Previous')",
  pageSizeSelect: "select[aria-label*='page size'], select[name*='pageSize'], [data-testid='page-size']",
  bulkUploadFileInput: "input[type='file']",
  bulkUploadTemplateLink: "a:has-text('template'), button:has-text('Download template')",
};

export default CustomListManagerLocators;
