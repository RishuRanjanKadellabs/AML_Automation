export interface C360ExcelRow {
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

export interface ExcelAlignedPhases {
  preconditions: string[];
  setup: string[];
  steps: string[];
  assertions: string[];
}

export interface FsdMappingEntry {
  testCaseId: string;
  excelSubModule: string;
  excelTask: string;
  fsdSectionId: string;
  fsdSectionTitle: string;
  fsdModule: string;
  alignmentStatus: "aligned" | "partial" | "unmapped";
  notes: string;
}

export interface GapMatrixEntry {
  requirementId: string;
  requirementDescription: string;
  testable: "Yes" | "Partial";
  missingInformation: string;
  assumptions: string;
}

export interface AutomationFeasibilityEntry {
  testCaseId: string;
  automationCandidate: "Yes" | "No" | "Partial";
  reason: string;
}
