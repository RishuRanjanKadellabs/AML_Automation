import gridFixture from "../../fixtures/batch-screening-data.json";

export interface BatchGridRecord {
  gridRow: number;
  customerName: string;
  customerId: string;
  matchedLists?: number;
  score?: number;
  listName?: string;
  category?: string;
  screeningType?: string;
  matchDate?: string;
  status?: string;
}

export const BATCH_GRID_RECORDS = gridFixture.gridRecords as BatchGridRecord[];

export const BATCH_SEARCH_KEYWORDS = gridFixture.searchKeywords;

export const BATCH_ACTION_COMMENTS = gridFixture.actionComments;

export const BATCH_ROLES = gridFixture.roles;

export function parseGridRowIndex(testData: string): number {
  const range = testData.match(/Rows?:\s*(\d+)\s*(?:to|-)\s*(\d+)/i);
  if (range) {
    return Math.max(0, parseInt(range[1], 10) - 1);
  }
  const single = testData.match(/Row:\s*(\d+)/i);
  if (single) {
    return Math.max(0, parseInt(single[1], 10) - 1);
  }
  return 0;
}

export function gridRecordByRow(gridRow: number): BatchGridRecord | undefined {
  return BATCH_GRID_RECORDS.find((r) => r.gridRow === gridRow);
}

export function searchKeywordFromTestData(testData: string, fallback = BATCH_SEARCH_KEYWORDS.validPartial): string {
  if (/Search:\s*([^;]+)/i.test(testData)) {
    return testData.match(/Search:\s*([^;]+)/i)?.[1]?.trim() ?? fallback;
  }
  if (/sql/i.test(testData)) return BATCH_SEARCH_KEYWORDS.sqlInjection;
  if (/xss/i.test(testData)) return BATCH_SEARCH_KEYWORDS.xssInjection;
  if (/special char/i.test(testData)) return BATCH_SEARCH_KEYWORDS.specialChars;
  if (/invalid|no match/i.test(testData)) return BATCH_SEARCH_KEYWORDS.invalid;
  return fallback;
}

export function actionCommentFromTestData(testData: string): string {
  const match = testData.match(/Comment:\s*([^;]+)/i);
  return match?.[1]?.trim() ?? BATCH_ACTION_COMMENTS.valid;
}
