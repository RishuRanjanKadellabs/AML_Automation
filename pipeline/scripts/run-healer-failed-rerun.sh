#!/usr/bin/env bash
# Rerun failed Batch + Manual tests from healer pass (heal recovery attempt).
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"
LOG_DIR="/tmp/healer-batch-manual-rerun"
mkdir -p "$LOG_DIR"

export ENV=production PW_SKIP_ALLURE_REPORT=1 PW_SKIP_HTML_REPORT=1 PW_HEADLESS=1
export PW_WORKERS=4 PW_RETRIES=2 PW_GLOBAL_TIMEOUT=0
export PW_TRACE=retain-on-failure PW_SCREENSHOT=only-on-failure
export PW_NAVIGATION_TIMEOUT=60000 PW_ACTION_TIMEOUT=30000 PW_EXPECT_TIMEOUT=25000 PW_TEST_TIMEOUT=180000

echo "=== HEALER FAILED RERUN START $(date -Iseconds) ===" | tee "$LOG_DIR/summary.log"

if [[ -s /tmp/healer-failed-bs.txt ]]; then
  BS_GREP=$(paste -sd'|' /tmp/healer-failed-bs.txt)
  echo "--- Batch failed rerun ($(wc -l < /tmp/healer-failed-bs.txt) cases) ---" | tee -a "$LOG_DIR/summary.log"
  npx playwright test tests/milestone1/test-cases/ScreeningModule/batchScreeningTests/batch-screening.spec.ts \
    --project=milestone1-chromium --grep "$BS_GREP" --reporter=line 2>&1 | tee "$LOG_DIR/batch-rerun.log" | tail -3 | tee -a "$LOG_DIR/summary.log"
fi

if [[ -s /tmp/healer-failed-ms.txt ]]; then
  MS_GREP=$(paste -sd'|' /tmp/healer-failed-ms.txt)
  echo "--- Manual failed rerun ($(wc -l < /tmp/healer-failed-ms.txt) cases) ---" | tee -a "$LOG_DIR/summary.log"
  npx playwright test tests/milestone1/test-cases/ScreeningModule/manualScreeningTests/manual-screening.spec.ts \
    --project=milestone1-chromium --grep "$MS_GREP" --reporter=line 2>&1 | tee "$LOG_DIR/manual-rerun.log" | tail -3 | tee -a "$LOG_DIR/summary.log"
fi

python3 - <<'PY' | tee -a "$LOG_DIR/summary.log"
import re, os

def parse(path):
    if not os.path.exists(path): return 0,0
    log=open(path,errors='replace').read()
    p=int(re.search(r'(\d+) passed',log).group(1)) if re.search(r'(\d+) passed',log) else 0
    f=int(re.search(r'(\d+) failed',log).group(1)) if re.search(r'(\d+) failed',log) else 0
    if not f and p: f=max(0, len(open(path.replace('rerun','').replace('-rerun',''),errors='replace').read().split('Case ID:'))-p)
    return p,f

for label, path in [('Batch rerun','/tmp/healer-batch-manual-rerun/batch-rerun.log'),('Manual rerun','/tmp/healer-batch-manual-rerun/manual-rerun.log')]:
    p,f=parse(path)
    if p or f: print(f"{label}: healed_pass={p} still_fail={f}")
PY

echo "=== HEALER FAILED RERUN END $(date -Iseconds) ===" | tee -a "$LOG_DIR/summary.log"
