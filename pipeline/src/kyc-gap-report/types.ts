export interface KgrExcelRow {
  id: string;
  module: string;
  subModule: string;
  taskDescription: string;
  acceptanceCriteria: string;
  preconditions: string;
  testSteps: string;
  testData: string;
  priority: string;
  expectedResult: string;
}

export interface GapMatrixEntry {
  requirementId: string;
  requirementDescription: string;
  testable: "Yes" | "Partial" | "No";
  missingInformation: string;
  assumptions: string;
}

export interface AutomationFeasibilityEntry {
  testCaseId: string;
  automationLayer: string;
  automationCandidate: "Yes" | "No";
  reason: string;
  tags: string[];
}

export interface TraceabilityEntry {
  kgrId: string;
  mmTcId: string | null;
  overlapType: "full" | "partial" | "none";
  notes: string;
}

export interface KgrManifestEntry {
  id: string;
  subModule: string;
  priority: string;
  taskDescription: string;
  automationLayer: string;
  automationCandidate: "Yes" | "No";
  tags: string[];
  mmTcOverlap: string | null;
}
