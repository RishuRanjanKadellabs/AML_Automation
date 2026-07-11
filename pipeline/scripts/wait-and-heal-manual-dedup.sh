#!/usr/bin/env bash
# Wait indefinitely until AML app is stably reachable, then heal Manual+Dedup failures.
set -uo pipefail
LOG_DIR=/tmp/heal-manual-dedup
mkdir -p "$LOG_DIR"
LOG="$LOG_DIR/wait.log"
URL="${BASE_URL:-https://kadelamldev.customerxps.com:2506/}"

echo "[$(date -Iseconds)] INDEFINITE wait for stable app at $URL..." | tee -a "$LOG"
streak=0
i=0
while true; do
  i=$((i + 1))
  code=$(curl -sk --connect-timeout 8 --max-time 15 -o /dev/null -w "%{http_code}" "$URL" 2>/dev/null || true)
  code=$(echo "$code" | tr -cd '0-9' | tail -c 3)
  if [[ "$code" =~ ^(2|3|4|5)[0-9][0-9]$ ]]; then
    streak=$((streak + 1))
    echo "[$(date -Iseconds)] attempt $i HTTP $code streak=$streak" | tee -a "$LOG"
    if [[ $streak -ge 2 ]]; then
      echo "[$(date -Iseconds)] STABLE — launching heal (12 workers, 3 retries, 3 rounds)" | tee -a "$LOG"
      cd /home/arti/aml/AML_Automation
      unset PW_RETRIES
      exec env HEAL_RETRIES=3 PW_WORKERS="$(nproc)" HEAL_MAX_ROUNDS=3 bash pipeline/scripts/run-heal-manual-dedup-failed.sh
    fi
  else
    streak=0
    if (( i % 6 == 1 )); then
      echo "[$(date -Iseconds)] attempt $i down code=${code:-none} (continuing)" | tee -a "$LOG"
    fi
  fi
  sleep 15
done
