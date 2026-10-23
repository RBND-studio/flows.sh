#!/usr/bin/env bash
# Builds the ZIP uploaded to the OpenAI plugin portal (platform.openai.com/plugins).
# plugin.json has to sit at the root of the archive, not inside a folder.
set -euo pipefail

cd "$(dirname "$0")"

node -e '
  for (const file of ["flows/plugin.json", "flows/mcp.json"]) JSON.parse(require("fs").readFileSync(file, "utf8"));
'

version="$(node -p 'require("./flows/plugin.json").version')"
out="dist/flows-${version}.zip"

rm -rf dist
mkdir -p dist
(cd flows && zip -qrX "../${out}" plugin.json mcp.json assets -x '.*' -x '*/.*')

echo "Built plugins/openai/${out}"
