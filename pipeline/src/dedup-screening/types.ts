export interface DdsExcelRow {
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

export interface EnhancedDdsRow extends DdsExcelRow {
  isNew?: boolean;
}

export interface GapTestCaseSpec {
  id?: string;
  module: string;
  subModule: string;
  taskDescription: string;
  steps: string[];
  expected: string[];
  testData: string;
  priority: string;
  reason: string;
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

export interface HtmlCoverageEntry {
  controlId: string;
  controlLabel: string;
  controlType: string;
  fsdSectionId: string;
  coveredByExcel: boolean;
  coveringTestCaseIds: string[];
  coveredBySpec: boolean;
}

export interface TraceabilityReport {
  generatedAt: string;
  sources: {
    fsd: string;
    html: string;
    excel: string;
    spec: string;
  };
  excelToSpec: {
    excelCount: number;
    specCount: number;
    missingInSpec: string[];
    extraInSpec: string[];
    unmappedStepTodos: number;
    aligned: boolean;
  };
  fsdCoverage: {
    totalSections: number;
    sectionsWithExcelCoverage: number;
    uncoveredSections: Array<{ id: string; title: string }>;
    excelMappings: { aligned: number; partial: number; unmapped: number };
  };
  htmlCoverage: {
    totalControls: number;
    controlsWithExcelCoverage: number;
    uncoveredControls: Array<{ id: string; label: string }>;
  };
  overallTraceability: "full" | "partial" | "gaps";
  gaps: string[];
}
