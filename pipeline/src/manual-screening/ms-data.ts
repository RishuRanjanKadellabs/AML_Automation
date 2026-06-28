export const MS_PRECONDITION =
  "User is on Sanctions Screening > Manual Screening with access to screening features.";

export const INDIVIDUAL_FIELDS = {
  name: "Automation Manual Screening Subject",
  id: "PASSPORT-MS-001",
  purpose: "Onboarding Screening",
  watchlist: "Singapore High-Risk Screening",
};

export const NON_INDIVIDUAL_FIELDS = {
  registeredName: "Automation Holdings Pte Ltd",
  registrationNumber: "REG-MS-2026-001",
  purpose: "Onboarding Screening",
  watchlist: "Onboarding Screening",
};

export const VESSEL_FIELDS = {
  vesselName: "MV Automation Trader",
  imo: "IMO9876543",
  purpose: "Transaction Screening",
  watchlist: "Onboarding Screening",
};

export const BULK_FILE = {
  validCsv: "manual-screening-valid.csv",
  invalidPdf: "manual-screening-invalid.pdf",
  oversizedNote: "file larger than 25 MB",
};

export const SEARCH = {
  valid: "SIN HUAT",
  invalid: "zzzz-no-match-99999",
  specialChars: "Test@#$%",
};

export function formatMsTestData(blob: string): string {
  const b = blob.toLowerCase();
  if (/bulk|upload|csv|xls|file/.test(b)) {
    if (/invalid|pdf|reject/.test(b)) return `File: ${BULK_FILE.invalidPdf}`;
    if (/oversized|25\s*mb|size/.test(b)) return `File: ${BULK_FILE.oversizedNote}`;
    return `File: ${BULK_FILE.validCsv}`;
  }
  if (/vessel|imo|flag/.test(b)) {
    return `Vessel Name: ${VESSEL_FIELDS.vesselName}; IMO: ${VESSEL_FIELDS.imo}; Purpose: ${VESSEL_FIELDS.purpose}; Watchlist: ${VESSEL_FIELDS.watchlist}`;
  }
  if (/non-individual|registered name|entity|corporate/.test(b)) {
    return `Registered Name: ${NON_INDIVIDUAL_FIELDS.registeredName}; Registration Number: ${NON_INDIVIDUAL_FIELDS.registrationNumber}; Purpose: ${NON_INDIVIDUAL_FIELDS.purpose}; Watchlist: ${NON_INDIVIDUAL_FIELDS.watchlist}`;
  }
  if (/individual|name in english|joint account/.test(b)) {
    return `Name in English: ${INDIVIDUAL_FIELDS.name}; ID Number: ${INDIVIDUAL_FIELDS.id}; Purpose: ${INDIVIDUAL_FIELDS.purpose}; Watchlist: ${INDIVIDUAL_FIELDS.watchlist}`;
  }
  if (/search|filter/.test(b)) {
    if (/invalid|empty|no match/.test(b)) return `Search: ${SEARCH.invalid}`;
    if (/special/.test(b)) return `Search: ${SEARCH.specialChars}`;
    return `Search: ${SEARCH.valid}`;
  }
  return "";
}
