#!/usr/bin/env bash
#
# Regenerate the client-js REST client from the Massive.com OpenAPI spec.
#
# One command: pull the spec -> run the generator -> leave the committed
# layout deterministic. The generated REST client lives entirely under
# ./src/rest, so regeneration only ever touches that directory. Hand-written
# code (src/main.ts, src/websockets/**) and curated files (README, package.json,
# templates) are never touched here.
#
# The generator version is pinned in ./openapitools.json so diffs reflect spec
# changes, not generator upgrades.
#
# Usage (from anywhere):
#   bash scripts/generate.sh
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$ROOT"

CLIENT_DIRECTORY="./src/rest"
SPEC_FILE="./src/openapi.json"

# Pin the generator to the version in openapitools.json and invoke the official
# wrapper unambiguously (avoids resolving a differently-named bin on PATH).
GENERATOR="npx --no-install @openapitools/openapi-generator-cli"

echo "[1/3] Pulling + filtering OpenAPI spec -> $SPEC_FILE"
node ./scripts/pull_spec.js
if [ ! -s "$SPEC_FILE" ]; then
  echo "ERROR: $SPEC_FILE is missing or empty after pull_spec.js; aborting." >&2
  exit 1
fi

echo "[2/3] Generating typescript-axios client into $CLIENT_DIRECTORY"
rm -rf "$CLIENT_DIRECTORY"
$GENERATOR generate \
  -g typescript-axios \
  -o "$CLIENT_DIRECTORY" \
  -i "$SPEC_FILE" \
  -t ./templates/typescript-axios \
  --additional-properties=supportsES6=true,stringEnums=true,useSingleRequestParameter=true

# Safety gate: never leave a partial/empty generated client committed.
if [ ! -f "$CLIENT_DIRECTORY/api.ts" ]; then
  echo "ERROR: generation did not produce $CLIENT_DIRECTORY/api.ts; aborting." >&2
  exit 1
fi

echo "[3/3] Done. Regenerated $CLIENT_DIRECTORY (hand-written src/main.ts and src/websockets left untouched)."
