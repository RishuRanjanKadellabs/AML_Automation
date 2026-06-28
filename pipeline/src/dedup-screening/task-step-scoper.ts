import type { DdsExcelRow } from "./types";
import { MIN_DDS_STEPS } from "./step-normalizer";
import {
  DEFAULT_CUSTOMER_ID,
  INVALID_CUSTOMER_ID,
  MATCH_PARAMETERS,
  SAMPLE_NATIONAL_ID,
  SAMPLE_PAN,
  SAMPLE_PASSPORT,
} from "./dds-data";

export function extractCoreTask(taskDescription: string): string {
  let base = taskDescription.trim();
  for (let i = 0; i < 3; i++) {
    base = base
      .replace(/^Verify\s+(that\s+)?/i, "")
      .replace(/^Check\s+that\s+/i, "")
      .trim();
  }
  const firstSentence = (base.split(/[.!?]/)[0] ?? base).trim();
  return firstSentence.replace(/,\s*$/, "").replace(/\.\s*$/, "").trim();
}

export function taskContext(row: DdsExcelRow): string {
  return `${row.module} ${row.subModule} ${extractCoreTask(row.taskDescription)} ${row.expectedResult}`.toLowerCase();
}

function isNavigationCase(row: DdsExcelRow): boolean {
  return /navigation & access|navigate to de-dup|sidebar|breadcrumb|browser back|browser forward|direct url|page refresh/i.test(
    taskContext(row),
  );
}

function isCompareModalCase(row: DdsExcelRow): boolean {
  return /compare modal|modal launch|modal close|modal header|customer profile comparison|matched field highlighting|missing data handling|layout integrity|side-by-side compare/i.test(
    taskContext(row),
  );
}

function isExportCase(row: DdsExcelRow): boolean {
  return /export|print report|data privacy|masking/i.test(taskContext(row));
}

function isGenerateReportCase(row: DdsExcelRow): boolean {
  return /generate report|report processing|report failure|report regeneration|no match workflow|empty state/i.test(
    taskContext(row),
  );
}

function isParameterCase(row: DdsExcelRow): boolean {
  return /match parameter|parameter selection|select all|deselect all|tag management|parameter search|parameter dropdown/i.test(
    taskContext(row),
  );
}

function isResultsCase(row: DdsExcelRow): boolean {
  return /results grid|results summary|results visibility|pagination|group validation|group integrity|data display|match score|multi-parameter matching|dob matching|passport matching|national id|pan matching|mobile matching|email matching|crn matching|imei|ip\/mac|driving license|contact number/i.test(
    taskContext(row),
  );
}

function isClearFiltersCase(row: DdsExcelRow): boolean {
  return /clear filter/i.test(taskContext(row));
}

function isCustomerIdCase(row: DdsExcelRow): boolean {
  return /customer id validation/i.test(taskContext(row));
}

function isRbacCase(row: DdsExcelRow): boolean {
  return /role based|unauthorized|direct url access|data visibility restriction|audit trail/i.test(taskContext(row));
}

function isE2eCase(row: DdsExcelRow): boolean {
  return /end-to-end|multi-parameter investigation|high volume|regression critical|aml business|workflow consistency/i.test(
    taskContext(row),
  );
}

function inferMatchParameter(row: DdsExcelRow): string {
  const ctx = taskContext(row);
  if (/date of birth|dob/i.test(ctx)) return "Date of Birth";
  if (/passport/i.test(ctx)) return "Passport No";
  if (/national id|aadhar|emirates id|ssn/i.test(ctx)) return "National ID / Aadhar Card / Emirates ID / SSN";
  if (/driving license/i.test(ctx)) return "Driving License";
  if (/mobile/i.test(ctx)) return "Mobile Number";
  if (/email/i.test(ctx)) return "Email Address";
  if (/contact number/i.test(ctx)) return "Contact Number";
  if (/corporate registration|crn/i.test(ctx)) return "Corporate Registration Number";
  if (/pan|tax id/i.test(ctx)) return "Tax ID / PAN";
  if (/imei|imsi/i.test(ctx)) return "IMEI Number / IMSI Number";
  if (/ip\/mac|mac address/i.test(ctx)) return "IP / Mac Address";
  return "Passport No";
}

function openPageStep(): string {
  return "Open the De-Dup Screening page from the Sanction Screening sidebar menu";
}

function onPageStep(): string {
  return "Confirm the De-Dup Screening page is displayed with the Search Filters section visible";
}

function selectParameterStep(param: string): string {
  return `Open Match Parameter List and select ${param}`;
}

function generateReportStep(): string {
  return "Click Generate Report";
}

function waitForResultsStep(): string {
  return "Confirm the De-Duplication Match Report section appears with duplicate group results";
}

export function buildFocusedExcelSteps(row: DdsExcelRow): string[] {
  const ctx = taskContext(row);
  const param = inferMatchParameter(row);
  const steps: string[] = [];

  if (isNavigationCase(row)) {
    if (/navigate to de-dup|access de-dup|left navigation|sidebar menu/i.test(ctx)) {
      steps.push(openPageStep());
      steps.push("Confirm De-Dup Screening is highlighted as the active sidebar menu item");
      steps.push("Confirm the page title shows De-Duplication Screening");
      steps.push("Confirm Search Filters card is visible and Results section is hidden");
      return steps;
    }
    if (/breadcrumb/i.test(ctx)) {
      steps.push(onPageStep());
      steps.push("Review the breadcrumb trail in the application header");
      steps.push("Confirm the path shows Sanction Screening followed by De-dup Screening");
      return steps;
    }
    if (/page refresh/i.test(ctx)) {
      steps.push(onPageStep());
      steps.push("Select Passport No in Match Parameter List");
      steps.push("Refresh the browser page");
      steps.push("Confirm De-Dup Screening reloads with Search Filters visible");
      steps.push("Confirm the user remains on the De-Dup Screening module");
      return steps;
    }
    if (/direct url/i.test(ctx)) {
      steps.push("Open the De-Dup Screening URL directly in the browser address bar");
      steps.push(onPageStep());
      steps.push("Confirm Search Filters and Generate Report controls are available");
      return steps;
    }
    if (/browser back|browser forward/i.test(ctx)) {
      steps.push(openPageStep());
      steps.push("Navigate to Manual Screening from the sidebar");
      steps.push("Use the browser Back button");
      steps.push("Confirm De-Dup Screening page is displayed again");
      if (/forward/i.test(ctx)) {
        steps.push("Use the browser Forward button");
        steps.push("Confirm Manual Screening page is displayed");
      }
      return steps;
    }
    if (/authorized roles|compliance analyst|compliance officer|admin|auditor/i.test(ctx)) {
      steps.push("Switch to each authorized role listed in test data");
      steps.push(openPageStep());
      steps.push("Confirm Search Filters, Match Parameter List, and Generate Report are visible");
      steps.push("Confirm no access denied message is shown");
      return steps;
    }
    steps.push(onPageStep());
    steps.push(`Perform the navigation action described for ${row.subModule.replace(/^De-Dup Screening\s*[–-]\s*/i, "")}`);
    steps.push("Confirm the page responds as described in the expected result");
    return steps;
  }

  if (isParameterCase(row)) {
    steps.push(onPageStep());
    if (/dropdown opens|dropdown trigger/i.test(ctx)) {
      steps.push("Click the Match Parameter List dropdown trigger");
      steps.push("Confirm the dropdown panel opens with available parameters");
      steps.push("Confirm Select All option and search field are visible");
      return steps;
    }
    if (/search/i.test(ctx)) {
      steps.push("Click the Match Parameter List dropdown trigger");
      steps.push(`Enter a search term from test data in the parameter search field`);
      steps.push("Confirm matching parameters are displayed in the filtered list");
      steps.push("Confirm non-matching parameters are hidden from the list");
      return steps;
    }
    if (/select all|deselect all/i.test(ctx)) {
      steps.push("Click the Match Parameter List dropdown trigger");
      steps.push("Click Select All in the dropdown panel");
      steps.push("Confirm all match parameters appear as selected tags");
      steps.push("Click Select All again to deselect all parameters");
      steps.push("Confirm the placeholder Select parameters... is shown again");
      return steps;
    }
    if (/tag|remove tag/i.test(ctx)) {
      steps.push(selectParameterStep("Passport No and Date of Birth"));
      steps.push("Confirm selected parameters appear as removable tags in the trigger area");
      steps.push("Click the remove icon on one parameter tag");
      steps.push("Confirm the removed parameter is no longer selected");
      return steps;
    }
    steps.push(selectParameterStep(param));
    steps.push("Confirm the selected parameter appears as a tag in Match Parameter List");
    steps.push("Confirm the parameter checkbox remains checked in the dropdown list");
    return steps;
  }

  if (isCustomerIdCase(row)) {
    steps.push(onPageStep());
    steps.push(selectParameterStep(param));
    if (/invalid|non-existent|not found/i.test(ctx)) {
      steps.push(`Enter ${INVALID_CUSTOMER_ID} in the Customer ID field`);
      steps.push(generateReportStep());
      steps.push("Confirm a validation or no-records message is displayed");
      return steps;
    }
    if (/empty|blank|without customer/i.test(ctx)) {
      steps.push("Leave the Customer ID field empty");
      steps.push(generateReportStep());
      steps.push(waitForResultsStep());
      steps.push("Confirm results include duplicates across all customers for the selected parameters");
      return steps;
    }
    steps.push(`Enter ${DEFAULT_CUSTOMER_ID} in the Customer ID field`);
    steps.push(generateReportStep());
    steps.push(waitForResultsStep());
    steps.push("Confirm results are scoped to the entered Customer ID where applicable");
    return steps;
  }

  if (isClearFiltersCase(row)) {
    steps.push(onPageStep());
    steps.push(selectParameterStep("Passport No and Mobile Number"));
    steps.push(`Enter ${DEFAULT_CUSTOMER_ID} in the Customer ID field`);
    steps.push("Click Clear Filters");
    steps.push("Confirm Match Parameter List and Customer ID fields are reset to empty");
    steps.push("Confirm the Results section is hidden after clearing filters");
    return steps;
  }

  if (isGenerateReportCase(row)) {
    steps.push(onPageStep());
    if (/without selecting|no parameter|mandatory|at least one/i.test(ctx)) {
      steps.push("Leave Match Parameter List with no parameters selected");
      steps.push(generateReportStep());
      steps.push("Confirm a validation message requires at least one match parameter");
      return steps;
    }
    if (/failure|error|timeout|unavailable/i.test(ctx)) {
      steps.push(selectParameterStep(param));
      steps.push(generateReportStep());
      steps.push("Confirm an appropriate error message is displayed when report generation fails");
      return steps;
    }
    if (/no match|empty|zero duplicate/i.test(ctx)) {
      steps.push(selectParameterStep(param));
      steps.push(generateReportStep());
      steps.push("Confirm the empty results state message is displayed");
      steps.push("Confirm no duplicate group rows appear in the results table");
      return steps;
    }
    steps.push(selectParameterStep(param));
    steps.push(generateReportStep());
    steps.push(waitForResultsStep());
    steps.push("Confirm group count and record count summary badges are displayed");
    return steps;
  }

  if (isResultsCase(row) || isE2eCase(row)) {
    steps.push(onPageStep());
    const params = /multi-parameter|multiple parameter|several parameter/i.test(ctx)
      ? "Passport No, Date of Birth, and Tax ID / PAN"
      : param;
    steps.push(selectParameterStep(params));
    if (/customer id/i.test(row.testData) || /customer id/i.test(ctx)) {
      steps.push(`Enter ${DEFAULT_CUSTOMER_ID} in the Customer ID field`);
    }
    steps.push(generateReportStep());
    steps.push(waitForResultsStep());
    if (/pagination|page 2|next page|large/i.test(ctx)) {
      steps.push("Navigate to the next page using pagination controls");
      steps.push("Confirm a new set of duplicate records is displayed");
      return steps;
    }
    if (/compare|view button/i.test(ctx)) {
      steps.push("Click Compare on the first duplicate group row");
      steps.push("Confirm the Customer KYC Comparison modal opens");
      return steps;
    }
    if (/group id|rowspan|group integrity|same group/i.test(ctx)) {
      steps.push("Review Group ID cells and linked rows in the results table");
      steps.push("Confirm records in the same group share one Group ID badge");
      return steps;
    }
    if (/match score|score bar/i.test(ctx)) {
      steps.push("Review Match Score values in the results or compare modal");
      steps.push("Confirm scores reflect the strength of the duplicate match");
      return steps;
    }
    steps.push("Review duplicate records in the results grid");
    steps.push("Confirm columns show Group ID, Customer ID, Customer Name, Match Parameters, and ID Number");
    return steps;
  }

  if (isCompareModalCase(row)) {
    steps.push(onPageStep());
    steps.push(selectParameterStep(param));
    steps.push(generateReportStep());
    steps.push("Click Compare on a duplicate group row");
    if (/close|escape|overlay|outside/i.test(ctx)) {
      steps.push("Close the modal using the close button, Escape key, or overlay click");
      steps.push("Confirm the results grid is visible again");
      return steps;
    }
    if (/header|title|subtitle/i.test(ctx)) {
      steps.push("Review the modal title and subtitle showing matched customer names");
      steps.push("Confirm matched parameter and match score appear in the subtitle");
      return steps;
    }
    if (/highlight|matched field/i.test(ctx)) {
      steps.push("Review the Side-by-Side Compare panel");
      steps.push("Confirm fields that matched between customers are visually highlighted");
      return steps;
    }
    if (/missing|null|empty field|not available/i.test(ctx)) {
      steps.push("Review customer profile fields in the compare view");
      steps.push("Confirm missing or unavailable values display an em dash or placeholder");
      return steps;
    }
    steps.push("Confirm Side-by-Side Compare tab shows both customer profiles");
    steps.push("Confirm matched KYC fields are displayed for each customer");
    return steps;
  }

  if (isExportCase(row)) {
    steps.push(onPageStep());
    steps.push(selectParameterStep(param));
    steps.push(generateReportStep());
    steps.push(waitForResultsStep());
    if (/failure|error|denied/i.test(ctx)) {
      steps.push("Click Export and select an export format");
      steps.push("Confirm an export failure message is displayed when export cannot complete");
      return steps;
    }
    if (/mask|privacy|partial|redact/i.test(ctx)) {
      steps.push("Click Export and download the report in each format from test data");
      steps.push("Open each exported file and inspect sensitive ID fields");
      steps.push("Confirm sensitive values are masked according to data privacy rules");
      return steps;
    }
    steps.push("Click Export on the results header");
    steps.push("Select the export format from test data");
    steps.push("Confirm the export file downloads or a success confirmation is shown");
    return steps;
  }

  if (isRbacCase(row)) {
    if (/unauthorized|restricted|denied|cannot access/i.test(ctx)) {
      steps.push("Switch to the restricted role from test data");
      steps.push("Attempt to open the De-Dup Screening module");
      steps.push("Confirm access is denied or the module is not available");
      return steps;
    }
    if (/audit trail|audit log/i.test(ctx)) {
      steps.push(onPageStep());
      steps.push(selectParameterStep(param));
      steps.push(generateReportStep());
      steps.push("Perform an export or compare action from the results");
      steps.push("Review audit records for the report generation and user action");
      return steps;
    }
    steps.push("Switch to the role from test data");
    steps.push(openPageStep());
    steps.push("Confirm module access matches the permissions defined for that role");
    return steps;
  }

  // Fallback: parse existing steps and normalize
  const existing = row.testSteps
    .split(/(?=\d+[\.\)]\s)/)
    .map((s) => s.replace(/^\d+[\.\)]\s*/, "").trim())
    .filter(Boolean)
    .filter((s) => !/login|logout|sign in|sign out|logged in/i.test(s));

  if (existing.length >= MIN_DDS_STEPS) {
    return existing.map((s) => s.replace(/\.$/, ""));
  }

  steps.push(onPageStep());
  steps.push(selectParameterStep(param));
  steps.push(generateReportStep());
  steps.push("Confirm the outcome matches the expected result for this scenario");
  return steps;
}

export function resolveTestData(row: DdsExcelRow): string {
  if (row.testData && row.testData.trim() && row.testData.trim() !== "N/A") {
    return row.testData.trim();
  }
  const param = inferMatchParameter(row);
  const ctx = taskContext(row);
  if (/passport/i.test(ctx)) return `Match Parameter: Passport No; ID: ${SAMPLE_PASSPORT}`;
  if (/national id|aadhar/i.test(ctx)) return `Match Parameter: National ID; ID: ${SAMPLE_NATIONAL_ID}`;
  if (/pan|tax id/i.test(ctx)) return `Match Parameter: Tax ID / PAN; ID: ${SAMPLE_PAN}`;
  if (/multi-parameter|multiple/i.test(ctx)) return `Match Parameters: ${MATCH_PARAMETERS.slice(0, 3).join(", ")}`;
  if (/customer id/i.test(ctx)) return `Customer ID: ${DEFAULT_CUSTOMER_ID}; Match Parameter: ${param}`;
  if (/role|rbac/i.test(ctx)) return "Role: Compliance Analyst";
  if (/export/i.test(ctx)) return "Export Format: Excel (.xlsx)";
  return `Match Parameter: ${param}`;
}
