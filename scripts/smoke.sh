#!/usr/bin/env bash
# mike-rodgers-site smoke — static-site serve check (S3 standard)
set -euo pipefail
cd "$(dirname "$0")/.."
PORT=8931
python3 -m http.server "$PORT" --bind 127.0.0.1 >/dev/null 2>&1 &
SRV=$!
trap 'kill $SRV 2>/dev/null || true' EXIT
sleep 1
BODY=$(curl -fsS "http://127.0.0.1:$PORT/index.html")
echo "$BODY" | grep -qi "Mike Rodgers" || { echo "FAIL: index.html missing identity marker"; exit 1; }
echo "$BODY" | grep -qi "</html" || { echo "FAIL: index.html truncated"; exit 1; }
BYTES=$(echo -n "$BODY" | wc -c | tr -d ' ')
echo "PASS: served index.html (${BYTES} bytes), identity marker present, well-formed close tag"
