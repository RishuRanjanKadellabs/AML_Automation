#!/usr/bin/env bash
# Healer-mode Batch Screening, then Excel-aligned Manual Screening (4 workers).
set -uo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

LOG_DIR="/tmp/healer-batch-manual"
OUT_DIR="$ROOT/results/healer-batch-manual"
mkdir -p "$LOG_DIR" "$OUT_DIR"

export ENV=production
export PW_SKIP_ALLURE_REPORT=1
export PW_SKIP_HTML_REPORT=1
export PW_HEADLESS=1
export PW_WORKERS=4
export PW_RETRIES=2
export PW_GLOBAL_TIMEOUT=0
export PW_TRACE=retain-on-failure
export PW_SCREENSHOT=only-on-failure
export PW_NAVIGATION_TIMEOUT=60000
export PW_ACTION_TIMEOUT=30000
export PW_EXPECT_TIMEOUT=25000
export PW_TEST_TIMEOUT=180000

: > "$ROOT/results/healer-log.jsonl" 2>/dev/null || true

echo "=== HEALER BATCH+MANUAL START $(date -Iseconds) ===" | tee "$LOG_DIR/summary.log"
echo "Workers: 4 | Retries: 2 | Excel: BS=432 MS=445" | tee -a "$LOG_DIR/summary.log"

run_spec() {
  local key="$1" spec="$2" label="$3" excel="$4"
  echo "" | tee -a "$LOG_DIR/summary.log"
  echo "--- $label ($excel Excel) $(date -Iseconds) ---" | tee -a "$LOG_DIR/summary.log"
  npx playwright test "$spec" --project=milestone1-chromium --reporter=line 2>&1 | tee "$LOG_DIR/${key}.log"
  local ec=$?
  echo "${key^^}_EXIT=$ec" | tee -a "$LOG_DIR/summary.log"
  grep -aE "^\s*[0-9]+ (passed|failed|skipped|did not run)" "$LOG_DIR/${key}.log" | tail -3 | tee -a "$LOG_DIR/summary.log" || true
  if [[ -f "$ROOT/results/production/execution-report.json" ]]; then
    cp "$ROOT/results/production/execution-report.json" "$OUT_DIR/${key}-report.json"
  elif [[ -f "$ROOT/results/execution-report.json" ]]; then
    cp "$ROOT/results/execution-report.json" "$OUT_DIR/${key}-report.json"
  fi
  return 0
}

run_spec "batch" \
  "tests/milestone1/test-cases/ScreeningModule/batchScreeningTests/batch-screening.spec.ts" \
  "Batch Screening (Healer Mode)" 432

run_spec "manual" \
  "tests/milestone1/test-cases/ScreeningModule/manualScreeningTests/manual-screening.spec.ts" \
  "Manual Screening (Excel-aligned)" 445

python3 - <<'PY' | tee -a "$LOG_DIR/summary.log"
import re, json, os

def parse(path, excel):
    log = open(path, errors='replace').read() if os.path.exists(path) else ''
    m = re.search(r'(\d+) passed', log)
    passed = int(m.group(1)) if m else 0
    m = re.search(r'(\d+) failed', log)
    failed = int(m.group(1)) if m else max(0, excel - passed)
    return passed, failed

mods = [
    ('Batch Screening', '/tmp/healer-batch-manual/batch.log', 432),
    ('Manual Screening', '/tmp/healer-batch-manual/manual.log', 445),
]
print("\n=== HEALER RUN RESULTS ===")
tp=tf=0
for name, path, excel in mods:
    p,f = parse(path, excel)
    tp+=p; tf+=f
    print(f"{name}: passed={p} failed={f} pass%={round(p/excel*100,1)}")
print(f"TOTAL: passed={tp} failed={tf} pass%={round(tp/(tp+tf)*100,1) if tp+tf else 0}")
heal = 0
hp = '/home/arti/aml/AML_Automation/results/healer-log.jsonl'
if os.path.exists(hp):
    for line in open(hp):
        if line.strip():
            heal += 1
print(f"Heal events: {heal}")
PY

echo "=== HEALER BATCH+MANUAL END $(date -Iseconds) ===" | tee -a "$LOG_DIR/summary.log"
