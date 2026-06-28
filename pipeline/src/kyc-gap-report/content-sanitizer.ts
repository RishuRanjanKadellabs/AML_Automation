/** Strip cross-module references and navigation meta-language from KYC Gap Report Excel output. */

const STEP_DROP_PATTERNS = [
  /verify the browser url resolves/i,
  /\/kyc\/kyc-gap-report/i,
  /inspect breadcrumb or module path/i,
  /sub-module is highlighted/i,
  /direct sub-module/i,
  /not under missing mandatory/i,
  /not nested under/i,
  /without navigating through missing mandatory/i,
  /without requiring navigation through/i,
  /sibling kyc sub-modules/i,
  /kyc sub-module list/i,
  /primary application sidebar/i,
  /kyc module section in the sidebar/i,
  /from the kyc sidebar/i,
  /kyc module sidebar/i,
];

const TEXT_REPLACEMENTS: Array<[RegExp, string]> = [
  [/Customer 360°?\s*View/gi, "another KYC screen"],
  [/Customer 360 View/gi, "another KYC screen"],
  [/Missing Mandatory Data Template/gi, ""],
  [/Missing Mandatory Template/gi, ""],
  [/alongside\s+and\s+/gi, ""],
  [/,\s*and\s*$/gi, ""],
  [/Navigate to another KYC screen from the KYC sub-module list/gi, "Navigate to another KYC screen"],
  [/Return to KYC Gap Report from the KYC sidebar/gi, "Return to KYC Gap Report"],
  [/Open KYC Gap Report from the KYC sub-module list/gi, "Open KYC Gap Report"],
  [/from KYC module sidebar/gi, "from KYC module navigation"],
  [/KYC module sidebar/gi, "KYC module navigation"],
  [/Expand the KYC module section in the sidebar if collapsed/gi, "Open KYC module navigation"],
  [/Expand KYC module in the sidebar/gi, "Open KYC module navigation"],
  [/Navigate to the KYC module from the primary application sidebar/gi, "Open KYC module navigation"],
  [/sidebar/gi, "navigation"],
  [/sub-module/gi, "module"],
  [/submodule/gi, "module"],
  [/\bFSD\b/gi, ""],
  [/functional specification/gi, "functional rules"],
  [/\s{2,}/g, " "],
  [/\s+([,.])/g, "$1"],
  [/\(\s*\)/g, ""],
];

/** Remove FSD references and legacy validation section blocks from Excel text. */
export function stripFsdAndValidationBlocks(text: string): string {
  if (!text?.trim()) return text;

  let out = text
    .replace(/\n?Requirement reference:.*/gi, "")
    .replace(/\bFSD\b[^.\n]*/gi, "")
    .replace(/§\d+(\.\d+)*/g, "")
    .replace(/UI Validation:\s*/gi, "")
    .replace(/Business Validation:\s*/gi, "")
    .replace(/System Validation:\s*/gi, "")
    .replace(/Navigation Validation:\s*/gi, "")
    .replace(/Data Validation:\s*/gi, "")
    .replace(/Audit Expectation:\s*/gi, "")
    .replace(/(?:UI Validation:\s*)+/gi, "")
    .replace(/^-\s*-\s*/gm, "- ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return sanitizeKgrText(out);
}

export function sanitizeKgrText(text: string): string {
  if (!text?.trim()) return text;

  let out = text;
  for (const [pattern, replacement] of TEXT_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }

  // Remove empty list items / dangling conjunctions from template stripping
  out = out
    .replace(/\balongside\s*,/gi, "")
    .replace(/\balongside\s+\./gi, ".")
    .replace(/,\s*,/g, ",")
    .replace(/-\s*-\s*/g, "- ")
    .replace(/\n\s*-\s*\n/g, "\n")
    .trim();

  return out;
}

export function sanitizeKgrSteps(steps: string[]): string[] {
  return steps
    .map((s) => sanitizeKgrText(s).trim())
    .filter((s) => s.length > 8)
    .filter((s) => !STEP_DROP_PATTERNS.some((p) => p.test(s)));
}

export function sanitizeExpectedResult(text: string): string {
  return stripFsdAndValidationBlocks(text);
}
