# AGENTS.md

Guidelines for AI coding agents working on the Massive JavaScript/TypeScript client (`@massive.com/client-js`).

## Generated code: read this first

The REST client is generated from the OpenAPI spec at https://api.massive.com/openapi with OpenAPI Generator (`typescript-axios`). A bot regenerates it every day and opens a PR, so **any hand edit to generated files will be overwritten.**

| Path | Status | Notes |
| --- | --- | --- |
| `src/rest/` | Generated | The whole directory is deleted and rebuilt on every run. Never edit. |
| `src/openapi.json` | Generated | The filtered spec the client is built from. Never edit. |
| `examples/rest/` | Generated | Written by `npm run generate-examples` (run by hand, not by the daily sync). |
| `src/main.ts` | Hand-written | `restClient`, default base URL, auto-pagination. |
| `src/websockets/` | Hand-written | The whole WebSocket client. |
| `templates/typescript-axios/` | Tooling | Mustache overrides of the stock generator templates. |
| `scripts/` | Tooling | The generation pipeline. |

To change what ends up in `src/rest/`, edit the right input instead of the output:

- **Endpoint, parameter, type, or doc changes**: these come from the upstream spec. They can't be fixed in this repo; report them to the Massive team.
- **Public method names**: `scripts/operation-mappings.js`. Renaming an entry renames a public method, which is a breaking change. Don't "fix" or reorder entries, and don't copy this file from another SDK.
- **Spec filtering or reshaping before generation**: `scripts/pull_spec.js`.
- **Shape of the generated code**: `templates/typescript-axios/*.mustache`.
- **Generator flags**: `scripts/generate.sh`.
- **Generator version**: `openapitools.json`. Also update the cache key in `.github/workflows/sync-openapi.yml`, and re-copy the upstream templates before re-applying local changes (see `scripts/readme.md`).
- **Runtime behavior** (pagination, base URL, client setup): `src/main.ts`.

After changing any tooling, regenerate and commit both the tooling change and the regenerated output.

See [`scripts/readme.md`](./scripts/readme.md) for the full pipeline.

## Essential commands

```bash
npm ci                   # Install dependencies
npm run generate         # Regenerate src/rest/ from the live spec (needs network and JDK 17+)
npm run build            # Regenerates, then bundles to dist/ with tsup
npm run format           # Prettier
npm test                 # Mocha (src/**/*.test.ts)
```

`npm run build` always regenerates first, so it needs network access and Java. Use Node 18+ (CI uses 22).

There are no test files yet. To check a change, run `npx tsc --noEmit` and `npm run build`. If you add tests, put them next to the hand-written code as `*.test.ts`. Never put them under `src/rest/`, which is deleted on every run.

## Layout

- `src/main.ts`: package entry point. Re-exports `rest` and `websockets`.
- `src/rest/`: generated REST client (a single `DefaultApi` class).
- `src/websockets/`: hand-written WebSocket client, one folder per market plus `transport/`.
- `scripts/`: spec pull, operation mappings, generation, and example generation.
- `templates/typescript-axios/`: generator template overrides.
- `examples/rest/`: generated per-endpoint snippets. `examples/websocket/`: hand-written examples.

## Conventions

- ESM package (`"type": "module"`). Format with Prettier.
- API keys come from the `MASSIVE_API_KEY` env var, e.g. `restClient(process.env.MASSIVE_API_KEY)`. Never hardcode a key in code, tests, or examples.
- Tests must not call the live API.
- Releases are cut by maintainers through `.github/workflows/publish.yml`. Don't bump the version in `package.json`.

## Pull requests

- Open or link an issue first. PRs not tied to an issue are generally declined. Fill in `.github/PULL_REQUEST_TEMPLATE.md`.
- Don't hand-edit `src/rest/` or `src/openapi.json`. Spec-driven updates arrive through the daily `[bot] Sync client-js with OpenAPI spec` PRs.
