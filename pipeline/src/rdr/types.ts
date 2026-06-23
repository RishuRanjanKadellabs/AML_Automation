export interface RdrExcelRow {
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
  masterTab: string;
}

export interface RdrManifestEntry {
  id: string;
  masterTab: string;
  priority: string;
  taskDescription: string;
  specFile: string;
  automationStatus: "Automated" | "Blocked";
  missingInformation: string;
}

export interface RdrTodoEntry {
  testCaseId: string;
  missingInformation: string;
  reason: string;
}
