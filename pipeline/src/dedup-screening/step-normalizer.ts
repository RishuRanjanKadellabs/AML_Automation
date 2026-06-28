export const MIN_DDS_STEPS = 4;
export const MAX_DDS_STEPS = 8;

export function parseStepLines(testSteps: string): string[] {
  if (!testSteps.trim()) {
    return [];
  }

  const lines = testSteps.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const parsed: string[] = [];

  for (const line of lines) {
    const numbered = line.match(/^\d+[\.\)]\s*(.+)$/);
    if (numbered) {
      parsed.push(numbered[1].trim());
      continue;
    }
    const inlineParts = line.split(/(?=\d+[\.\)]\s)/).map((p) => p.trim()).filter(Boolean);
    if (inlineParts.length > 1) {
      for (const part of inlineParts) {
        const m = part.match(/^\d+[\.\)]\s*(.+)$/);
        if (m) parsed.push(m[1].trim());
      }
      continue;
    }
    if (parsed.length === 0) {
      parsed.push(line);
    } else {
      parsed[parsed.length - 1] = `${parsed[parsed.length - 1]} ${line}`.trim();
    }
  }

  return parsed.filter(Boolean);
}

export function countSteps(testSteps: string): number {
  return parseStepLines(testSteps).length;
}

export function dedupeStepLines(steps: string[]): string[] {
  const unique: string[] = [];
  for (const step of steps) {
    const cleaned = step.trim().replace(/\.$/, "");
    if (!cleaned) continue;
    const key = cleaned.toLowerCase();
    if (unique.some((u) => u.toLowerCase() === key)) continue;
    unique.push(cleaned.endsWith(".") ? cleaned : `${cleaned}.`);
  }
  return unique;
}

export function formatNumberedStepLines(steps: string[]): string {
  return steps.map((step, index) => {
    const text = step.trim().replace(/\.$/, "");
    return `${index + 1}. ${text}.`;
  }).join("\n");
}

export function clampSteps(steps: string[]): string[] {
  const deduped = dedupeStepLines(steps);
  if (deduped.length <= MAX_DDS_STEPS) {
    return deduped.length >= MIN_DDS_STEPS
      ? deduped
      : deduped;
  }
  return deduped.slice(0, MAX_DDS_STEPS);
}
