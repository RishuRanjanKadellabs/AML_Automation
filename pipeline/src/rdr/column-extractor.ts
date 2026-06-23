import type { RdrExcelRow } from "./types";

const COLUMN_ALIASES: Record<string, string> = {
  "Customer ID": "Customer ID",
  "Customer Type": "Customer Type",
  "Full Legal Name": "Full Legal Name",
  "Customer Status": "Customer Status",
  "KYC Status": "KYC Status",
  "PEP Flag": "PEP Flag",
  "Sanctions Flag": "Sanctions Flag",
  "Date Onboarded": "Date Onboarded",
  "Last Review Date": "Last Review Date",
  "Risk Rating": "Risk Rating",
  "Nationality": "Nationality",
  "Country of Residence": "Country of Residence",
  "Assessment ID": "Assessment ID",
  "Assessment Date": "Date",
  "Account ID": "Account ID",
  "Balance ID": "Balance ID",
  "Non Cust ID": "Non Cust ID",
  "Non-Customer ID": "Non Cust ID",
  "Country Code": "Country Code",
  "Employee ID": "Employee ID",
};

export function extractColumnName(row: RdrExcelRow): string | null {
  const td = row.taskDescription;
  const steps = row.testSteps;

  const patterns = [
    /Verify ([A-Za-z0-9 /()-]+?) filter allows/i,
    /Verify ([A-Za-z0-9 /()-]+?) filter/i,
    /Verify ([A-Za-z0-9 /()-]+?) is displayed/i,
    /Verify ([A-Za-z0-9 /()-]+?) values are displayed/i,
    /Verify ([A-Za-z0-9 /()-]+?) are displayed/i,
    /Review ([A-Za-z0-9 /()-]+?) column/i,
    /([A-Za-z0-9 /()-]+?) column\./i,
  ];

  for (const pattern of patterns) {
    const match = td.match(pattern) ?? steps.match(pattern);
    if (match) {
      const raw = match[1].trim();
      const skip = ["search", "csv", "excel", "view", "clear", "customer", "employee", "country"];
      if (skip.includes(raw.toLowerCase())) continue;
      return COLUMN_ALIASES[raw] ?? raw;
    }
  }

  if (/customer id/i.test(td)) return "Customer ID";
  if (/account id/i.test(td)) return "Account ID";
  if (/assessment id/i.test(td)) return "Assessment ID";
  if (/balance id/i.test(td)) return "Balance ID";
  if (/employee id/i.test(td)) return "Employee ID";
  if (/country code/i.test(td)) return "Country Code";
  if (/high risk location flag/i.test(td)) return "High Risk Location Flag";
  if (/human trafficking risk flag/i.test(td)) return "Human Trafficking Risk Flag";
  if (/total risk score/i.test(td)) return "Total Risk Score";
  if (/closing balance/i.test(td)) return "Closing Balance";
  if (/dishonour reason/i.test(td)) return "Dishonour Reason";
  if (/customer count/i.test(td)) return "Customer Count";
  if (/customer type code/i.test(td)) return "Customer Type Code";
  if (/customer type name/i.test(td)) return "Customer Type Name";
  if (/pep flag/i.test(td) && /sanctions flag/i.test(td)) return "PEP Flag";
  if (/branch channel/i.test(td)) return "Channel Type";
  if (/mobile banking channel/i.test(td)) return "Channel Type";
  if (/upi channel/i.test(td)) return "Channel Type";
  if (/status/i.test(td) && /column/i.test(steps)) return "Status";

  return null;
}

export type RdrTestPattern =
  | "column_display"
  | "column_unique"
  | "hyperlink"
  | "filter"
  | "search"
  | "export_csv"
  | "export_excel"
  | "export_both"
  | "view_modal"
  | "clear"
  | "masking"
  | "row_limit"
  | "pagination"
  | "other";

export function classifyTestPattern(row: RdrExcelRow): RdrTestPattern {
  const td = row.taskDescription.toLowerCase();
  const er = row.expectedResult.toLowerCase();

  if (td.includes("csv and excel")) return "export_both";
  if (td.includes("csv export") || (td.includes("csv") && td.includes("export"))) return "export_csv";
  if (td.includes("excel export") || (td.includes("excel") && td.includes("export"))) return "export_excel";
  if (td.includes("export")) return "export_both";
  if (td.includes("hyperlink") || td.includes("navigation to customer")) return "hyperlink";
  if (td.includes("filter allows") || td.includes("filter functionality")) return "filter";
  if (td.includes("search functionality") || td.includes("search using")) return "search";
  if (td.includes("clear button")) return "clear";
  if (td.includes("view button") || td.includes("view action")) return "view_modal";
  if (td.includes("mask") || td.includes("masked")) return "masking";
  if (td.includes("record count") || td.includes("row count") || td.includes("maximum configured")) return "row_limit";
  if (td.includes("pagination") || td.includes("page size")) return "pagination";
  if ((td.includes("unique") || td.includes("uniqueness")) && (td.includes("displayed") || td.includes("generated"))) {
    return "column_unique";
  }
  if (td.includes("displayed") || er.includes("displayed") || er.includes("column")) return "column_display";
  return "other";
}

export type SearchTermSource = "excel" | "pilot_customer_id" | "first_row" | "no_match" | "partial";

export function resolveSearchInvocation(row: RdrExcelRow): { call: string; columnName: string | null; exactValue: string | null } {
  const td = row.taskDescription;
  const data = row.testData.trim();
  const columnName = extractColumnName(row);

  if (data) {
    return {
      call: `await rdrPage.search("${data.replace(/"/g, '\\"')}")`,
      columnName,
      exactValue: /only/i.test(row.expectedResult) ? data : null,
    };
  }

  const quoted = td.match(/"([^"]+)"/);
  if (quoted) {
    return {
      call: `await rdrPage.search("${quoted[1].replace(/"/g, '\\"')}")`,
      columnName,
      exactValue: /only/i.test(row.expectedResult) ? quoted[1] : null,
    };
  }

  if (/non-existing|invalid|no match/i.test(td)) {
    return {
      call: `await rdrPage.search("${"zzzz-no-match-99999"}")`,
      columnName,
      exactValue: null,
    };
  }
  if (/partial/i.test(td)) {
    return {
      call: 'await rdrPage.search("CIF")',
      columnName,
      exactValue: null,
    };
  }
  if (/customer id/i.test(td)) {
    return {
      call: "await rdrPage.searchUsingPilotCustomerId()",
      columnName: columnName ?? "Customer ID",
      exactValue: /only/i.test(row.expectedResult) ? "__PILOT_CUSTOMER_ID__" : null,
    };
  }
  if (/non-customer id|non cust id/i.test(td)) {
    return {
      call: "await rdrPage.searchFromFirstRowCell()",
      columnName: columnName ?? "Non Cust ID",
      exactValue: /only/i.test(row.expectedResult) ? "__FIRST_ROW__" : null,
    };
  }
  if (/customer name/i.test(td)) {
    return {
      call: "await rdrPage.searchFromFirstRowCell()",
      columnName: columnName ?? "Full Legal Name",
      exactValue: null,
    };
  }

  return {
    call: "await rdrPage.searchFromFirstRowCell()",
    columnName,
    exactValue: null,
  };
}

/** @deprecated Use resolveSearchInvocation for generator output */
export function extractSearchTerm(row: RdrExcelRow): string | null {
  const resolved = resolveSearchInvocation(row);
  if (resolved.call.includes("searchUsingPilotCustomerId")) return "__PILOT_CUSTOMER_ID__";
  if (resolved.call.includes("searchFromFirstRowCell")) return null;
  const match = resolved.call.match(/search\("([^"]*)"\)/);
  return match ? match[1] : null;
}
