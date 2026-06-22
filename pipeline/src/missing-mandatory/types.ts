export interface MmExcelRow {
  id: string;
  /** 1-based occurrence when the same Test Case ID appears on multiple Excel rows. */
  idOccurrence: number;
  /** Zero-based row index in the Excel sheet (data rows only). */
  excelRowIndex: number;
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
  mmId: string;
  kgrId: string | null;
  overlapType: "full" | "partial" | "none";
  notes: string;
}

export interface MmManifestEntry {
  id: string;
  subModule: string;
  priority: string;
  taskDescription: string;
  automationLayer: string;
  automationCandidate: "Yes" | "No";
  tags: string[];
  specLayer: "ui" | "database";
}
