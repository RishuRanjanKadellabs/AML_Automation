export interface ElmExcelRow {
  id: string;
  module: string;
  subModule: string;
  taskDescription: string;
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

export interface ElmManifestEntry {
  id: string;
  module: string;
  subModule: string;
  priority: string;
  taskDescription: string;
  automationLayer: string;
  automationCandidate: "Yes" | "No";
  tags: string[];
}
