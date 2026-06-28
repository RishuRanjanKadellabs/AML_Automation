import type { KgrExcelRow } from "./types";
import { resolveCustomerFromContext, type GapCustomerProfile } from "./gap-report-data";

export interface KgrTestContext {
  role: string;
  searchKeyword: string;
  exactMatch: string;
  noMatch: string;
  branch: string;
  branchCode: string;
  priority: string;
  customerType: string;
  template: string;
  scoreMin: string;
  scoreMax: string;
  customerId: string;
  customerName: string;
  expectedScore: string;
  action: string;
  page: string;
  customer: GapCustomerProfile;
}

export function parseTestDataFields(testData: string): Record<string, string> {
  const fields: Record<string, string> = {};
  for (const part of testData.split(/;|\n/)) {
    const trimmed = part.trim();
    const match = trimmed.match(/^([^:]+):\s*(.+)$/);
    if (match) {
      fields[match[1].trim().toLowerCase()] = match[2].trim();
    }
  }
  return fields;
}

function parseCustomerField(value: string): { id: string; name: string } {
  const paren = value.match(/^(.+?)\s*\(([^)]+)\)\s*$/);
  if (paren) {
    return { name: paren[1].trim(), id: paren[2].trim() };
  }
  return { name: value.trim(), id: "" };
}

function parseBranchField(value: string): { branch: string; code: string } {
  const paren = value.match(/^(.+?)\s*\(([^)]+)\)\s*$/);
  if (paren) {
    return { branch: paren[1].trim(), code: paren[2].trim() };
  }
  return { branch: value.trim(), code: value.trim() };
}

export function resolveKgrTestContext(row: KgrExcelRow): KgrTestContext {
  const fields = parseTestDataFields(row.testData);
  const customerField = fields["customer"] ?? "";
  const parsedCustomer = customerField ? parseCustomerField(customerField) : { name: "", id: "" };

  const branchRaw = fields["branch filter"] ?? fields["branch"] ?? "";
  const parsedBranch = branchRaw ? parseBranchField(branchRaw) : { branch: "INST-DEMO-001", code: "INST-DEMO-001" };

  const gapRange = fields["gap score range"] ?? fields["score range"] ?? "";
  let scoreMin = "0";
  let scoreMax = "100";
  const rangeMatch = gapRange.match(/(\d+)\s*[-–]\s*(\d+)/);
  if (rangeMatch) {
    scoreMin = rangeMatch[1];
    scoreMax = rangeMatch[2];
  } else if (fields["score"]) {
    scoreMin = fields["score"];
    scoreMax = fields["score"];
  } else if (fields["gap score"]) {
    scoreMin = fields["gap score"];
    scoreMax = fields["gap score"];
  }

  const customer = resolveCustomerFromContext(
    `${row.subModule} ${row.taskDescription} ${row.testData} ${parsedCustomer.name} ${parsedCustomer.id}`,
  );

  if (parsedCustomer.id) {
    customer.cif = parsedCustomer.id;
  }
  if (parsedCustomer.name) {
    customer.name = parsedCustomer.name;
  }
  if (fields["priority"]) {
    customer.priority = fields["priority"];
  }
  if (fields["gap score"]) {
    customer.expectedScore = Number(fields["gap score"]);
  }

  return {
    role: fields["role"] ?? "Compliance Officer",
    searchKeyword: fields["search keyword"] ?? fields["search term"] ?? "KYC",
    exactMatch: fields["exact match"] ?? "Simplified KYC Customer",
    noMatch: fields["invalid search term"] ?? fields["no match"] ?? "zzzz-no-match-99999",
    branch: parsedBranch.branch,
    branchCode: parsedBranch.code,
    priority: fields["priority filter"] ?? fields["priority"] ?? customer.priority ?? "Low",
    customerType: fields["customer type"] ?? (customer.type === "corporate" ? "Corporate" : "Individual"),
    template: fields["template"] ?? fields["template filter"] ?? customer.template ?? "Simplified KYC",
    scoreMin,
    scoreMax,
    customerId: parsedCustomer.id || customer.cif,
    customerName: parsedCustomer.name || customer.name,
    expectedScore: fields["score"] ?? fields["gap score"] ?? String(customer.expectedScore ?? ""),
    action: fields["action"] ?? "",
    page: fields["page"] ?? "",
    customer,
  };
}

export function inferSearchKeyword(row: KgrExcelRow): string {
  const ctx = resolveKgrTestContext(row);
  const task = row.taskDescription.toLowerCase();

  if (/exact/i.test(task) || /exact customer name/i.test(task)) {
    return ctx.exactMatch;
  }
  if (/partial/i.test(task)) {
    return ctx.searchKeyword;
  }
  if (/customer id|cif/i.test(task)) {
    return ctx.customerId || ctx.customer.cif;
  }
  if (/non-existing|no result|invalid|no match/i.test(task + row.expectedResult)) {
    return ctx.noMatch;
  }
  if (/sql injection/i.test(task)) {
    return "' OR '1'='1";
  }
  if (/script injection|xss/i.test(task)) {
    return "<script>alert('xss')</script>";
  }
  if (/special character/i.test(task)) {
    return "!@#$%";
  }

  const fields = parseTestDataFields(row.testData);
  if (fields["exact match"]) return fields["exact match"];
  if (fields["search keyword"]) return fields["search keyword"];
  if (fields["customer id"]) return fields["customer id"];
  if (ctx.customerName) return ctx.customerName;

  return ctx.searchKeyword;
}

export function scoreRangeFromTestData(row: KgrExcelRow): { min: string; max: string } {
  const ctx = resolveKgrTestContext(row);
  return { min: ctx.scoreMin, max: ctx.scoreMax };
}
