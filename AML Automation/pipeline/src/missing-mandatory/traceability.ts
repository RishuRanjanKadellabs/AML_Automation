import type { MmExcelRow, TraceabilityEntry } from "./types";

/** MM-TC KYC Gap Report scenarios mapped to closest KGR IDs (partial overlap). */
const MM_GAP_REPORT_TO_KGR: Record<string, string> = {
  "MM-TC-146": "KGR-001",
  "MM-TC-147": "KGR-021",
  "MM-TC-148": "KGR-029",
  "MM-TC-149": "KGR-071",
  "MM-TC-150": "KGR-190",
  "MM-TC-151": "KGR-042",
  "MM-TC-152": "KGR-043",
  "MM-TC-153": "KGR-050",
  "MM-TC-154": "KGR-056",
  "MM-TC-155": "KGR-059",
  "MM-TC-156": "KGR-061",
  "MM-TC-157": "KGR-065",
  "MM-TC-158": "KGR-069",
  "MM-TC-159": "KGR-068",
  "MM-TC-160": "KGR-160",
  "MM-TC-161": "KGR-085",
  "MM-TC-162": "KGR-099",
  "MM-TC-163": "KGR-170",
  "MM-TC-164": "KGR-164",
  "MM-TC-165": "KGR-131",
  "MM-TC-166": "KGR-137",
  "MM-TC-167": "KGR-148",
  "MM-TC-168": "KGR-168",
  "MM-TC-169": "KGR-169",
  "MM-TC-170": "KGR-170",
};

export function buildTraceability(rows: MmExcelRow[]): TraceabilityEntry[] {
  return rows.map((row) => {
    const kgrId = MM_GAP_REPORT_TO_KGR[row.id] ?? null;
    return {
      mmId: row.id,
      kgrId,
      overlapType: kgrId ? "partial" : "none",
      notes: kgrId ? `Overlaps ${kgrId} KYC Gap Report scenario` : "Net-new Missing Mandatory requirement",
    };
  });
}

export function traceabilitySummary(rows: MmExcelRow[]): {
  totalMm: number;
  overlappedMm: number;
  netNewMm: number;
} {
  const trace = buildTraceability(rows);
  const overlapped = trace.filter((t) => t.kgrId !== null).length;
  return {
    totalMm: rows.length,
    overlappedMm: overlapped,
    netNewMm: rows.length - overlapped,
  };
}

export function getKgrToMmMap(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const [mm, kgr] of Object.entries(MM_GAP_REPORT_TO_KGR)) {
    map[kgr] = mm;
  }
  return map;
}
