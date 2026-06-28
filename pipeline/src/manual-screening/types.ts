export interface MsExcelRow {
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

export interface EnhancedMsRow extends MsExcelRow {
  isNew?: boolean;
}

export interface GapTestCaseSpec {
  id: string;
  module: string;
  subModule: string;
  taskDescription: string;
  steps: string[];
  expected: string[];
  testData?: string;
  reason: string;
}
