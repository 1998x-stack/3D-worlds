# P0/P1/P2 Implementation and Operator Runbook

Status: this repository implements a **reproducible build-time preview/LOD pipeline** and
**deployable** query API and immutable object store adapters. It does not
create the user's AWS account, bucket, domain, reverse proxy or public service.

## P0 — Pre-rendered Three.js thumbnails

### Design
- Playwright Chromium loads `capture.html` in a Vite dev server; one **new**
  640×640 WebGL canvas is created for each asset.
- Capture uses the **same Three.js procedural generator** as the Gallery.
- Sharp creates both WebP (quality 83) and AVIF (quality 57).
- Result: `public/thumbs/<slug>.webp` and `<slug>.avif`.
- `<picture>` picks AVIF or WebP in browser. No card keeps a WebGL context.
- The source GLB exported by Three.js is saved to `.cache/raw/<slug>.glb`
  so the P1 pipeline works from exactly the same geometry.

```bash
npm install
npx playwright install --with-deps chromium
npm run generate:previews       # images only; does not export raw GLBs
node scripts/render_assets.mjs --limit 3
```

**Quality gate:** `node scripts/verify_generated.mjs` after full P1, plus
`node scripts/smoke_gallery.mjs` after Vite build.
The command fails rather than fabricating an image when WebGL is unavailable.

**Current trade-offs:** The 45-asset build is sequential and GPU-dependent.
For 50,000 assets, use a queue with idempotent jobs, retries, GPU/CPU
worker pools, output hashes and a CDN. Do not run 50,000 headless tabs.

## P1 — Meshopt GLB optimization and LOD

Build all model binaries, run glTF Transform with Meshopt for output and
Meshopt Simplifier for tiered geometry reduction.

```bash
npm run generate:assets
npm run verify:assets
```

Outputs:
- `public/generated/<slug>-lod0.glb`: dedup/prune + Meshopt
- `public/generated/<slug>-lod1.glb`: simplification target 62%, max error 0.015 + Meshopt
- `public/generated/<slug>-lod2.glb`: simplification target 32%, max error 0.05 + Meshopt
- `public/generated/index.json`: actual triangle counts, bytes, SHA-256
  and differences vs raw GLB

The ratios are **targets** not guarantees; topology and error limits
determine actual reductions. Tests check actual output and checksum,
rather than reporting fabricated savings. Model files remain decodable
with a Meshopt-aware GLTFLoader. Meshopt compression primarily reduces
**transfer size**, not geometry draw calls or frame time by itself.

The `public/generated` binaries are build artifacts, intentionally excluded
from Git history. GitHub Actions generates and deploys them to Pages; a
fresh local clone must run `npm run generate:assets` to reproduce.

## P2 — Storage and large-catalog API

### Storage choices

- **LocalStore:** `.cache/object-store/sha256/xx/<sha>.glb`; good for
  local test, single-machine deployment and disaster-recovery exercises.
- **S3Store:** private bucket via boto3; compatible with AWS S3 and
  MinIO path-style endpoints. Credentials are read from environment,
  **never committed**. Signed GET URLs expire after 900 seconds.
- Duplicate content is addressed by SHA-256, independent from asset ID.
  Both GLB variants and imported third-party GLBs are published by
  `scripts/publish_objects.py`.

```bash
# Dry-run validates every file and hash; no network, no S3 requests:
python3 scripts/publish_objects.py
# Local object-store import:
THREED_WORLDS_STORE=local python3 scripts/publish_objects.py --apply

# S3/MinIO publish — set external credentials and bucket first:
export THREED_WORLDS_STORE=s3
export THREED_WORLDS_S3_BUCKET=YOUR_PRIVATE_BUCKET
export THREED_WORLDS_S3_ENDPOINT=https://YOUR_S3_ENDPOINT
export AWS_ACCESS_KEY_ID=...
export AWS_SECRET_ACCESS_KEY=...
export AWS_DEFAULT_REGION=us-east-1
python3 scripts/publish_objects.py --apply
```

MinIO bucket must be created separately and access credentials must be
restricted; avoid permissive public-read ACLs. Do not run the script
against unreviewed third-party assets.

### API — Python stdlib + SQLite read-only

```bash
python3 scripts/catalog.py build
python3 services/search_api.py
curl http://127.0.0.1:8071/healthz
curl 'http://127.0.0.1:8071/api/v1/assets?limit=10'
curl 'http://127.0.0.1:8071/api/v1/assets?search=chair&limit=8'
curl http://127.0.0.1:8071/api/v1/categories
```

`GET /api/v1/assets` supports `search`, `category`, `limit` (1–100),
and opaque `cursor`. Results use stable asset-ID keyset pagination.
FTS5 is used for ASCII searches; Chinese falls back to escaped LIKE until a
Chinese tokenizer/search index is deployed. Cursor scope is bound to the
query and category to prevent accidental cross-query reuse.

`GET /api/v1/assets/<id>` returns metadata and variants.
`GET /api/v1/assets/<id>/download?lod=0` returns a local object URL or
a short-lived S3 URL if the optimized objects are mirrored.
`GET /api/v1/objects/<sha>.glb` serves a locally stored content-addressed
binary for local-only deployment.

The API binds to **127.0.0.1 by default**. Docker Compose example:

```bash
docker compose -f deploy/compose.local.yml up --build
```

Production needs HTTPS, reverse proxy, identity/rate limiting, observability,
a durable database and CDN object-storage lifecycle policies. Do not expose
the single-host stdlib HTTP service directly to the public Internet.

### Frontend API mode

```bash
VITE_CATALOG_API_URL=http://127.0.0.1:8071 npm run dev
```

When configured, the Gallery fetches remote categories and 24 results
per cursor page, with a "load more" button. When unset, the static Pages site uses a bounded projection of at most 200
assets (`catalog/public_models.json`), regenerated by `predev`/`prebuild`.
The full catalog remains SQLite/API-only beyond that limit to avoid a giant
initial JS bundle.

### Test matrix

| Layer | Automated evidence | Gaps |
|---|---|---|
| P0 | File format/resolution, gallery browser smoke | Snapshot diff review on real devices |
| P1 | Hashes, GLB readability, LOD triangle trend | FPS profiling, silhouette assessment |
| P2 | SQLite API queries, cursor scope, live HTTP, local storage roundtrip | Live AWS/MinIO credentialed deployment |
| Catalog | 45 geometry checks, schema integrity, MCP smoke | Independent IP/legal audit |

## Sources and rationale

- [Three.js GLTFExporter](https://threejs.org/docs/pages/GLTFExporter.html)
- [Playwright CI](https://playwright.dev/docs/ci)
- [Sharp output formats](https://sharp.pixelplumbing.com/api-output/)
- [glTF Transform](https://gltf-transform.dev/)
- [Meshopt compression](https://gltf-transform.dev/modules/extensions/classes/EXTMeshoptCompression)
- [SQLite FTS5](https://www.sqlite.org/fts5.html)
- [Boto3 private object upload](https://docs.aws.amazon.com/boto3/latest/reference/services/s3/client/put_object.html)
