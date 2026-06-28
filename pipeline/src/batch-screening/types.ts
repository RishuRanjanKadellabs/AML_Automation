export interface BsExcelRow {
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

export interface BsManifestEntry {
  id: string;
  subModule: string;
  priority: string;
  taskDescription: string;
  automationLayer: string;
  automationCandidate: "Yes" | "No";
  tags: string[];
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

export interface EnhancedBsRow extends BsExcelRow {
  isNew?: boolean;
  fsdSectionId?: string;
  fsdSectionTitle?: string;
}

export interface GapTestCaseSpec {
  subModule: string;
  taskDescription: string;
  priority: string;
  testData: string;
  htmlControlLabel: string;
  fsdSectionId: string;
}
