import type { KgrExcelRow, TraceabilityEntry } from "./types";

/** MM-TC-146–170 gap-report scenarios mapped to closest KGR IDs (partial overlap). */
const MM_TC_TO_KGR: Record<string, string[]> = {
  "MM-TC-146": ["KGR-001", "KGR-006", "KGR-008", "KGR-018", "KGR-020"],
  "MM-TC-147": ["KGR-005", "KGR-021", "KGR-022", "KGR-023", "KGR-024"],
  "MM-TC-148": ["KGR-029", "KGR-030"],
  "MM-TC-149": ["KGR-071", "KGR-008"],
  "MM-TC-150": ["KGR-190", "KGR-272"],
  "MM-TC-151": ["KGR-042"],
  "MM-TC-152": ["KGR-043"],
  "MM-TC-153": ["KGR-050", "KGR-251"],
  "MM-TC-154": ["KGR-056", "KGR-057"],
  "MM-TC-155": ["KGR-059"],
  "MM-TC-156": ["KGR-061", "KGR-062", "KGR-063", "KGR-064"],
  "MM-TC-157": ["KGR-065", "KGR-066", "KGR-067"],
  "MM-TC-158": ["KGR-069", "KGR-070"],
  "MM-TC-159": ["KGR-068"],
  "MM-TC-160": ["KGR-160"],
  "MM-TC-161": ["KGR-085", "KGR-088", "KGR-089"],
  "MM-TC-162": ["KGR-099"],
  "MM-TC-163": ["KGR-170", "KGR-171"],
  "MM-TC-164": ["KGR-164", "KGR-165", "KGR-167"],
  "MM-TC-165": ["KGR-131"],
  "MM-TC-166": ["KGR-137", "KGR-155", "KGR-156"],
  "MM-TC-167": ["KGR-148", "KGR-149", "KGR-167"],
  "MM-TC-168": ["KGR-168", "KGR-031"],
  "MM-TC-169": ["KGR-169"],
  "MM-TC-170": ["KGR-170"],
};

function invertMapping(): Map<string, string> {
  const kgrToMm = new Map<string, string>();
  for (const [mmId, kgrIds] of Object.entries(MM_TC_TO_KGR)) {
    for (const kgrId of kgrIds) {
      if (!kgrToMm.has(kgrId)) {
        kgrToMm.set(kgrId, mmId);
      }
    }
  }
  return kgrToMm;
}

const KGR_TO_MM = invertMapping();
const OVERLAPPED_KGR = new Set(KGR_TO_MM.keys());

export function buildTraceability(rows: KgrExcelRow[]): TraceabilityEntry[] {
  return rows.map((row) => {
    const mmTcId = KGR_TO_MM.get(row.id) ?? null;
    return {
      kgrId: row.id,
      mmTcId,
      overlapType: mmTcId ? "partial" : "none",
      notes: mmTcId
        ? `Overlaps existing automation ${mmTcId}; KGR suite provides expanded atomic coverage`
        : "Net-new KGR test case — not covered by MM-TC-146–170",
    };
  });
}

export function traceabilitySummary(rows: KgrExcelRow[]): {
  totalKgr: number;
  overlappedKgr: number;
  netNewKgr: number;
  mmTcCount: number;
} {
  const overlapped = rows.filter((r) => OVERLAPPED_KGR.has(r.id)).length;
  return {
    totalKgr: rows.length,
    overlappedKgr: overlapped,
    netNewKgr: rows.length - overlapped,
    mmTcCount: Object.keys(MM_TC_TO_KGR).length,
  };
}

export function getMmTcToKgrMap(): Record<string, string[]> {
  return { ...MM_TC_TO_KGR };
}
