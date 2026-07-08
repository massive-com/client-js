# Massive.com JS Client Generator

Tooling that generates the TypeScript REST client for the
[Massive.com](https://massive.com/) API from its OpenAPI specification.

The OpenAPI generator only understands the **REST** endpoints. The **WebSocket**
client under `src/websockets/` is hand-written and is never touched by
regeneration, and so is the `src/main.ts` client glue (auto-pagination, base URL
defaults).

## Automated daily sync (recommended)

`.github/workflows/sync-openapi.yml` runs every day (and on manual dispatch). It:

1. Pulls the latest spec from `https://api.massive.com/openapi`.
2. Regenerates the client with `scripts/generate.sh`.
3. Opens a **brand-new PR** — `bot/openapi-sync-<date>-<run-id>` → `master` —
   only when the regenerated output differs from what's committed. The commit is
   GPG-signed and a Slack notification is posted to `SLACK_CLIENT_LIBRARY_WEBHOOK`.
   Every run opens a new PR (never reuses one), so the reviewer differs from the
   author.

Required repo secrets: `GPG_PRIVATE_KEY`, `SLACK_CLIENT_LIBRARY_WEBHOOK`
(`GITHUB_TOKEN` is provided automatically).

## Manual regeneration

Everything is wrapped in a single script. From the **repo root**:

```bash
# Needs openapi-generator's JDK on your PATH (or run inside the Docker recipe
# in the top-level README). Requires devDependencies installed (npm ci).
npm run generate        # == bash scripts/generate.sh
```

`scripts/generate.sh` performs the whole pipeline:

1. `pull_spec.js` → downloads + filters the spec to `src/openapi.json`
   (skips draft paths, forces the `default` tag so a single `DefaultApi` is
   emitted, and renames operation-ids via `operation-mappings.js`).
2. `openapi-generator-cli generate -g typescript-axios` → generates the client
   into `src/rest`, using the custom template `templates/typescript-axios` and
   `supportsES6/stringEnums/useSingleRequestParameter`.
3. **Existence gate** → aborts if generation didn't produce `src/rest/api.ts`,
   so a partial/empty result never clobbers the committed client.

Hand-written code (`src/main.ts`, `src/websockets/`) and curated files
(`README.md`, `package.json`, `templates/`) are never touched — the generator
only ever writes into `src/rest`.

The generator version is pinned in `openapitools.json` (currently **7.21.0**) so
diffs reflect spec changes, not generator upgrades.

## Files

- `generate.sh` — the orchestrator described above.
- `pull_spec.js` — downloads + filters the spec to `src/openapi.json`.
- `operation-mappings.js` — client-js-specific operation-id → method-name map.
  Owns the public JS function names; do not share with other client libraries.
- `generate-examples-with-tokens.js` — regenerates `examples/rest/*.js` from the
  spec. Standalone dev tool, **not** part of the sync path (run manually).
