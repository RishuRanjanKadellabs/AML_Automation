export interface RdrExcelRow {
  id: string;
  module: string;
  subModule: string;
  shellGroup: string;
  masterName: string;
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

export interface EnhancedRdrRow extends RdrExcelRow {
  fsdSectionId: string;
  fsdSectionTitle: string;
  isNew: boolean;
}

export interface GapTestCaseSpec {
  id?: string;
  subModule: string;
  masterName: string;
  taskDescription: string;
  priority: string;
  testData: string;
  uiControlLabel: string;
  fsdSectionId: string;
}
