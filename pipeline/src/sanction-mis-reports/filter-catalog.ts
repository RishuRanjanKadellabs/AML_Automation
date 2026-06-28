import type { SmrCatalogCase } from "./excel-catalog";

const ON_LANDING = "Sanction MIS Reports landing page is open.";

export const REPORT_NAMES = {
  comprehensive: "Comprehensive Sanctions Screening Intelligence Report",
  pepAdverseMedia: "Enhanced Due Diligence: PEP & Adverse Media Analytics Report",
  exceptionAuth: "Screening Exception Authorization & Tracking Report",
  geographicRisk: "Geographic Risk Exposure Intelligence Report",
  relatedParty: "Related Party High-Risk Country Linkage Report",
  logicGovernance: "Screening Logic Governance & Change Control Report",
  exceptionGovernance: "Exception List Governance & Accountability Report",
} as const;

interface FilterSpec {
  name: string;
  setStep: string;
  testData: string;
  expected: string;
}

interface ComboSpec {
  steps: string[];
  testData: string;
  expected: string;
}

function steps(parts: string[]): string {
  return parts.map((part, index) => `${index + 1}. ${part}`).join(" ");
}

function tcId(n: number): string {
  return `SMR-TC-${String(n).padStart(3, "0")}`;
}

function caseRow(
  id: string,
  subModule: string,
  description: string,
  stepParts: string[],
  expectedResult: string,
  options: { testData?: string; priority?: string } = {},
): SmrCatalogCase {
  return {
    id,
    module: "Sanction Screening",
    subModule,
    taskDescription: description,
    acceptanceCriteria: expectedResult,
    preconditions: ON_LANDING,
    testSteps: steps(stepParts),
    testData: options.testData ?? "N/A",
    priority: options.priority ?? "High",
    expectedResult,
  };
}

function pushAllFiltersVisible(
  rows: SmrCatalogCase[],
  id: number,
  reportName: string,
  filterNames: string[],
): void {
  const list = filterNames.join(", ");
  rows.push(caseRow(
    tcId(id),
    reportName,
    `Verify that all Report Filters are displayed on the ${reportName}. Analysts must see every available filter before running single or combined analysis.`,
    [
      `On the landing catalog, locate ${reportName} and click View.`,
      `Confirm the ${reportName} page title is displayed.`,
      "Locate the Report Filters panel on the detail page.",
      `Confirm the following filters are displayed: ${list}.`,
      "Confirm Reset and Apply Filters buttons are displayed.",
    ],
    `All configured filters (${list}) plus Apply Filters and Reset actions are visible on the ${reportName}.`,
  ));
}

function pushSingleFilter(
  rows: SmrCatalogCase[],
  id: number,
  reportName: string,
  spec: FilterSpec,
): void {
  rows.push(caseRow(
    tcId(id),
    reportName,
    `Verify that the ${spec.name} filter can be applied independently on the ${reportName}. Single-filter validation confirms this criterion works correctly on its own.`,
    [
      `Open ${reportName} using View from the landing catalog.`,
      `Locate the ${spec.name} field in the Report Filters panel.`,
      spec.setStep,
      "Click Apply Filters.",
      "Review KPI cards and detailed records for updated results.",
    ],
    spec.expected,
    { testData: spec.testData },
  ));
}

function pushComboFilters(
  rows: SmrCatalogCase[],
  id: number,
  reportName: string,
  combo: ComboSpec,
): void {
  rows.push(caseRow(
    tcId(id),
    reportName,
    `Verify that multiple filters can be applied together on the ${reportName}. Combined filter validation supports targeted multi-criteria compliance analysis.`,
    [
      `Open ${reportName} using View from the landing catalog.`,
      ...combo.steps,
      "Click Apply Filters.",
      "Review KPI cards and detailed records match all selected filter criteria.",
    ],
    combo.expected,
    { testData: combo.testData },
  ));
}

function addReportFilterSuite(
  rows: SmrCatalogCase[],
  startId: number,
  reportName: string,
  filterNames: string[],
  singles: FilterSpec[],
  combo: ComboSpec,
): number {
  let id = startId;
  pushAllFiltersVisible(rows, id++, reportName, filterNames);
  for (const spec of singles) {
    pushSingleFilter(rows, id++, reportName, spec);
  }
  pushComboFilters(rows, id++, reportName, combo);
  return id;
}

/** Report filter suites: all filters visible, each single filter, one combination per report. IDs SMR-TC-014+. */
export function appendReportFilterSuites(rows: SmrCatalogCase[], startId = 14): number {
  const R = REPORT_NAMES;
  let id = startId;

  id = addReportFilterSuite(
    rows,
    id,
    R.comprehensive,
    [
      "Date Range",
      "Screening Type",
      "Customer/Prospect Type",
      "Customer Id / Name / Hit Id",
      "Watchlist Name",
      "Branch Code",
      "Channel",
      "Screening Status",
    ],
    [
      {
        name: "Date Range",
        setStep: "Open Date Range and select the Last 30 Days preset.",
        testData: "Last 30 Days",
        expected: "Date Range filter is applied and report results reflect the selected period on the Comprehensive Sanctions Screening Intelligence Report.",
      },
      {
        name: "Screening Type",
        setStep: "Select Screening Type Forward.",
        testData: "Screening Type: Forward",
        expected: "Only Forward screening type records are displayed on the Comprehensive Sanctions Screening Intelligence Report.",
      },
      {
        name: "Customer/Prospect Type",
        setStep: "Select Customer/Prospect Type Individual.",
        testData: "Customer/Prospect Type: Individual",
        expected: "Detail records show Individual customer or prospect type on the Comprehensive Sanctions Screening Intelligence Report.",
      },
      {
        name: "Customer Id / Name / Hit Id",
        setStep: "Enter a sample customer name in the Customer Id / Name / Hit Id field.",
        testData: "Customer name from report sample",
        expected: "Detail records matching the entered customer identifier or name are displayed.",
      },
      {
        name: "Watchlist Name",
        setStep: "Select Watchlist Name OFAC SDN.",
        testData: "Watchlist Name: OFAC SDN",
        expected: "Hit records from the selected watchlist are displayed and summary totals align with the filter.",
      },
      {
        name: "Branch Code",
        setStep: "Select Branch Code NYC-01.",
        testData: "Branch Code: NYC-01",
        expected: "Only records linked to the selected branch are displayed in the detail grid.",
      },
      {
        name: "Channel",
        setStep: "Select Channel Retail.",
        testData: "Channel: Retail",
        expected: "Detail records match the selected Retail channel filter.",
      },
      {
        name: "Screening Status",
        setStep: "Select Screening Status True Match.",
        testData: "Screening Status: True Match",
        expected: "Only True Match disposition records are displayed in the detailed hit records.",
      },
    ],
    {
      steps: [
        "Select Screening Type Forward.",
        "Select Branch Code NYC-01.",
        "Select Watchlist Name OFAC SDN.",
      ],
      testData: "Screening Type: Forward; Branch Code: NYC-01; Watchlist Name: OFAC SDN",
      expected: "Combined Forward screening type, NYC-01 branch, and OFAC SDN watchlist filters narrow KPI and detail records consistently.",
    },
  );

  id = addReportFilterSuite(
    rows,
    id,
    R.pepAdverseMedia,
    [
      "Date Range",
      "Screening Type",
      "Customer/Prospect Type",
      "Customer Id / Name / Hit Id",
      "Watchlist Name",
      "Nationality",
      "Channel",
      "Screening Status",
    ],
    [
      {
        name: "Date Range",
        setStep: "Open Date Range and select the Last 30 Days preset.",
        testData: "Last 30 Days",
        expected: "Date Range filter is applied and PEP analytics reflect the selected reporting period.",
      },
      {
        name: "Screening Type",
        setStep: "Select Screening Type Online.",
        testData: "Screening Type: Online",
        expected: "PEP and adverse media records match the Online screening type filter.",
      },
      {
        name: "Customer/Prospect Type",
        setStep: "Select Customer/Prospect Type Individual.",
        testData: "Customer/Prospect Type: Individual",
        expected: "Detail records show Individual customer or prospect type on the PEP and Adverse Media Analytics Report.",
      },
      {
        name: "Customer Id / Name / Hit Id",
        setStep: "Enter a sample customer name in the Customer Id / Name / Hit Id field.",
        testData: "Customer name from report sample",
        expected: "PEP detail records matching the entered identifier or name are displayed.",
      },
      {
        name: "Watchlist Name",
        setStep: "Select Watchlist Name Dow Jones.",
        testData: "Watchlist Name: Dow Jones",
        expected: "PEP records linked to the Dow Jones watchlist are displayed.",
      },
      {
        name: "Nationality",
        setStep: "Select Nationality UAE.",
        testData: "Nationality: UAE",
        expected: "PEP records for the selected nationality are displayed in the detail grid.",
      },
      {
        name: "Channel",
        setStep: "Select Channel Online.",
        testData: "Channel: Online",
        expected: "Detail records match the selected Online channel filter.",
      },
      {
        name: "Screening Status",
        setStep: "Select Screening Status Current PEP.",
        testData: "Screening Status: Current PEP",
        expected: "Only Current PEP status records are displayed in the detail grid.",
      },
    ],
    {
      steps: [
        "Select Nationality UAE.",
        "Select Screening Status Current PEP.",
        "Select Watchlist Name Dow Jones.",
      ],
      testData: "Nationality: UAE; Screening Status: Current PEP; Watchlist Name: Dow Jones",
      expected: "Combined nationality, Current PEP status, and watchlist filters narrow PEP KPI and detail records consistently.",
    },
  );

  id = addReportFilterSuite(
    rows,
    id,
    R.exceptionAuth,
    ["Date Range", "Sanction List Name", "User ID", "Customer Type", "Exception Status"],
    [
      {
        name: "Date Range",
        setStep: "Open Date Range and select the Last 30 Days preset.",
        testData: "Last 30 Days",
        expected: "Exception authorization results reflect the selected Date Range period.",
      },
      {
        name: "Sanction List Name",
        setStep: "Select Sanction List Name OFAC SDN List.",
        testData: "Sanction List Name: OFAC SDN List",
        expected: "Exception records linked to the OFAC SDN List are displayed.",
      },
      {
        name: "User ID",
        setStep: "Enter a sample User ID in the User ID field.",
        testData: "User ID from sample exception record",
        expected: "Exceptions associated with the entered User ID appear in Maker or Checker columns.",
      },
      {
        name: "Customer Type",
        setStep: "Select Customer Type Individual.",
        testData: "Customer Type: Individual",
        expected: "Only Individual customer exceptions are displayed in the detail grid.",
      },
      {
        name: "Exception Status",
        setStep: "Select Exception Status Active.",
        testData: "Exception Status: Active",
        expected: "Only Active exception authorization records are displayed.",
      },
    ],
    {
      steps: [
        "Select Sanction List Name OFAC SDN List.",
        "Select Exception Status Active.",
        "Select Customer Type Individual.",
      ],
      testData: "Sanction List: OFAC SDN List; Exception Status: Active; Customer Type: Individual",
      expected: "Combined list, status, and customer type filters narrow exception KPI and detail records consistently.",
    },
  );

  id = addReportFilterSuite(
    rows,
    id,
    R.geographicRisk,
    [
      "Date Range",
      "High-Risk Country List",
      "Screening Type",
      "Customer Type",
      "Customer ID / Name / Prospect ID",
      "Sanction List Name",
      "Branch Code",
      "Screening Status",
      "Min. Match Score Threshold",
      "Department / Business Unit",
    ],
    [
      {
        name: "Date Range",
        setStep: "Open Date Range and select the Last 30 Days preset.",
        testData: "Last 30 Days",
        expected: "Geographic risk results reflect the selected Date Range period.",
      },
      {
        name: "High-Risk Country List",
        setStep: "Select High-Risk Country List FATF High-Risk Countries.",
        testData: "High-Risk Country List: FATF High-Risk Countries",
        expected: "Country breakdown and detail records reflect the selected high-risk country list.",
      },
      {
        name: "Screening Type",
        setStep: "Select Screening Type Online.",
        testData: "Screening Type: Online",
        expected: "Geographic exposure records match the Online screening type filter.",
      },
      {
        name: "Customer Type",
        setStep: "Select Customer Type Individual.",
        testData: "Customer Type: Individual",
        expected: "Only Individual customer geographic risk records are displayed.",
      },
      {
        name: "Customer ID / Name / Prospect ID",
        setStep: "Enter a sample customer identifier in the Customer ID / Name / Prospect ID field.",
        testData: "Customer ID from report sample",
        expected: "The detail grid displays the customer matching the entered identifier or name.",
      },
      {
        name: "Sanction List Name",
        setStep: "Select Sanction List Name OFAC SDN List.",
        testData: "Sanction List Name: OFAC SDN List",
        expected: "Geographic risk records linked to the selected sanction list are displayed.",
      },
      {
        name: "Branch Code",
        setStep: "Select Branch Code NYC-01.",
        testData: "Branch Code: NYC-01",
        expected: "Only records for the selected branch are displayed in the detail grid.",
      },
      {
        name: "Screening Status",
        setStep: "Select Screening Status True Match.",
        testData: "Screening Status: True Match",
        expected: "Only True Match geographic exposure records are displayed.",
      },
      {
        name: "Min. Match Score Threshold",
        setStep: "Enter 85 in the Min. Match Score Threshold field.",
        testData: "Min Match Score: 85",
        expected: "Only records with match score at or above 85 are displayed.",
      },
      {
        name: "Department / Business Unit",
        setStep: "Select Department / Business Unit Retail Banking.",
        testData: "Department: Retail Banking",
        expected: "Geographic risk records are scoped to the Retail Banking department.",
      },
    ],
    {
      steps: [
        "Select High-Risk Country List FATF High-Risk Countries.",
        "Enter 85 in the Min. Match Score Threshold field.",
        "Select Department / Business Unit Retail Banking.",
        "Select Screening Type Online.",
      ],
      testData: "Country List: FATF; Min Score: 85; Department: Retail Banking; Screening Type: Online",
      expected: "Combined country list, match score threshold, department, and screening type filters narrow geographic KPI and detail records consistently.",
    },
  );

  id = addReportFilterSuite(
    rows,
    id,
    R.relatedParty,
    ["Date Range", "Customer ID", "Customer Type", "Relationship Type"],
    [
      {
        name: "Date Range",
        setStep: "Open Date Range and select the Last 30 Days preset.",
        testData: "Last 30 Days",
        expected: "Related party linkage results reflect the selected Date Range period.",
      },
      {
        name: "Customer ID",
        setStep: "Enter a sample Customer ID in the Customer ID field.",
        testData: "Customer ID from sample record",
        expected: "The detail grid displays the customer matching the entered Customer ID.",
      },
      {
        name: "Customer Type",
        setStep: "Select Customer Type Individual.",
        testData: "Customer Type: Individual",
        expected: "Only Individual customer linkage records are displayed.",
      },
      {
        name: "Relationship Type",
        setStep: "Select Relationship Type Ultimate Beneficial Owner (UBO).",
        testData: "Relationship Type: UBO",
        expected: "Customers with UBO related parties are displayed in the detail grid.",
      },
    ],
    {
      steps: [
        "Select Customer Type Individual.",
        "Select Relationship Type Ultimate Beneficial Owner (UBO).",
        "Enter a sample Customer ID in the Customer ID field.",
      ],
      testData: "Customer Type: Individual; Relationship Type: UBO; Customer ID from sample",
      expected: "Combined customer type, UBO relationship, and Customer ID filters narrow linkage KPI and detail records consistently.",
    },
  );

  id = addReportFilterSuite(
    rows,
    id,
    R.logicGovernance,
    ["Date Range", "Sanction List Name"],
    [
      {
        name: "Date Range",
        setStep: "Open Date Range and select the Last 30 Days preset.",
        testData: "Last 30 Days",
        expected: "Governance configuration results reflect the selected Date Range period.",
      },
      {
        name: "Sanction List Name",
        setStep: "Select Sanction List Name OFAC SDN List.",
        testData: "Sanction List Name: OFAC SDN List",
        expected: "Only configuration data for the OFAC SDN List watchlist is displayed.",
      },
    ],
    {
      steps: [
        "Open Date Range and select the Last 30 Days preset.",
        "Select Sanction List Name OFAC SDN List.",
      ],
      testData: "Date Range: Last 30 Days; Sanction List Name: OFAC SDN List",
      expected: "Combined date range and watchlist filters scope governance configuration sections to the selected list and period.",
    },
  );

  id = addReportFilterSuite(
    rows,
    id,
    R.exceptionGovernance,
    ["Date Range", "Sanction List Name", "User ID", "Customer Type", "Exception Status"],
    [
      {
        name: "Date Range",
        setStep: "Open Date Range and select the Last 30 Days preset.",
        testData: "Last 30 Days",
        expected: "Exception governance results reflect the selected Date Range period.",
      },
      {
        name: "Sanction List Name",
        setStep: "Select Sanction List Name OFAC SDN List.",
        testData: "Sanction List Name: OFAC SDN List",
        expected: "Governance records linked to the OFAC SDN List are displayed.",
      },
      {
        name: "User ID",
        setStep: "Enter a sample User ID in the User ID field.",
        testData: "User ID from sample exception record",
        expected: "Exceptions associated with the entered User ID appear in governance detail records.",
      },
      {
        name: "Customer Type",
        setStep: "Select Customer Type Corporate.",
        testData: "Customer Type: Corporate",
        expected: "Only Corporate customer exceptions are displayed in the governance detail grid.",
      },
      {
        name: "Exception Status",
        setStep: "Select Exception Status Expired.",
        testData: "Exception Status: Expired",
        expected: "Only Expired exception governance records are displayed for follow-up.",
      },
    ],
    {
      steps: [
        "Select Sanction List Name OFAC SDN List.",
        "Select Exception Status Expired.",
        "Select Customer Type Corporate.",
      ],
      testData: "Sanction List: OFAC SDN List; Exception Status: Expired; Customer Type: Corporate",
      expected: "Combined list, expired status, and customer type filters narrow governance KPI and detail records consistently.",
    },
  );

  return id;
}
