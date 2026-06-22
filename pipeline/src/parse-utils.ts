export function sanitizeId(id: string): string {
  return id.replace(/[^a-zA-Z0-9_.-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "TC-0";
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60) || "general";
}

export function normalizeCell(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value).replace(/\r\n/g, "\n").trim();
}

export function splitMultilineField(text: string): string[] {
  if (!text) return [];

  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const items: string[] = [];
  for (const line of lines) {
    const numbered = line.match(/^\d+[.)]\s*(.+)$/);
    if (numbered) {
      items.push(numbered[1].trim());
      continue;
    }
    const bullet = line.match(/^[-•*]\s*(.+)$/);
    if (bullet) {
      items.push(bullet[1].trim());
      continue;
    }
    items.push(line);
  }

  return items.filter((item) => item.length > 0 && !isThenPlaceholder(item));
}

export function extractPrerequisites(steps: string[]): string[] {
  const prereqs: string[] = [];
  for (const step of steps) {
    const cleaned = step.replace(/^\s+/, "");
    if (/^given\b/i.test(cleaned)) {
      prereqs.push(cleaned.replace(/^given\s+/i, "").trim());
    } else if (/^and\s+(user\s+group|the\s+user\s+group)/i.test(cleaned)) {
      prereqs.push(cleaned);
    }
  }
  return prereqs;
}

export function cleanSteps(steps: string[]): string[] {
  return steps.filter((s) => {
    const cleaned = s.trim();
    return cleaned.length > 0 && !isThenPlaceholder(cleaned);
  });
}

function isThenPlaceholder(text: string): boolean {
  return /then\s*-?\s*add\s+expected\s+and\s+actual/i.test(text);
}

export function parseHeading(text: string, fallbackIdx: number): { id: string; title: string } {
  const match = text.match(/^(?:test\s*case\s*)?(?:#?\s*)?(\d+[-.\w]*)\s*[-:.)]\s*(.*)/i);
  if (match) {
    return {
      id: sanitizeId(`TC-${match[1]}`),
      title: match[2].trim() || `Test Case ${fallbackIdx}`,
    };
  }
  return { id: `TC-${fallbackIdx}`, title: text.trim() };
}

export function isGroupRow(values: string[]): boolean {
  const nonEmpty = values.filter(Boolean);
  if (nonEmpty.length !== 1) return false;
  return /^(test\s*)?(group|module|suite)\s*:/i.test(nonEmpty[0]);
}

export function extractGroupName(value: string): string {
  return value
    .replace(/^(test\s*)?(group|module|suite)\s*:\s*/i, "")
    .trim();
}
