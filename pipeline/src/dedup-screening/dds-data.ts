export const DDS_PRECONDITION =
  "User is authenticated and can access Sanction Screening modules.";

export const DDS_PAGE_PRECONDITION =
  "User is on the De-Dup Screening page under Sanction Screening.";

export const DEFAULT_CUSTOMER_ID = "CUST10001";
export const INVALID_CUSTOMER_ID = "INVALID999";
export const SAMPLE_PASSPORT = "Z1234567";
export const SAMPLE_NATIONAL_ID = "9821-2234-1102";
export const SAMPLE_PAN = "ABCDE1234F";

export const MATCH_PARAMETERS = [
  "Date of Birth",
  "National ID / Aadhar Card / Emirates ID / SSN",
  "Passport No",
  "Driving License",
  "Mobile Number",
  "Email Address",
  "Contact Number",
  "Corporate Registration Number",
  "Tax ID / PAN",
  "IMEI Number / IMSI Number",
  "IP / Mac Address",
] as const;

export const EXPORT_FORMATS = ["Excel (.xlsx)", "CSV", "PDF", "Print Report"] as const;

export const AUTHORIZED_ROLES = [
  "Compliance Analyst",
  "Compliance Officer",
  "Admin",
  "Auditor",
] as const;

export const RESULTS_COLUMNS = [
  "Group ID",
  "Customer ID",
  "Customer Name",
  "Match Parameters",
  "ID Number",
  "View",
] as const;

export function formatDdsTestData(parts: string[]): string {
  const cleaned = parts.map((p) => p.trim()).filter(Boolean);
  return cleaned.length > 0 ? cleaned.join("; ") : "N/A";
}
