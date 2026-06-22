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
