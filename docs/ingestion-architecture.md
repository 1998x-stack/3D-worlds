# GLB Ingestion & Quality Gate — Engineering Design v0.2

## Mission

Convert a loose folder of untrusted third-party 3D files into a **reviewable,
versioned, legally attributable, queryable asset collection**. The codebase
supports a small local ingest pipeline today; the same contracts apply to
future object storage and a hosted API.

This is a **read-model vs content-store** architecture:
- The immutable binary, named by SHA-256, is the data-plane object.
- The versioned catalog JSON is the authoring and publication control plane.
- SQLite + FTS5 is a reproducible query projection consumed by local MCP.
- Static GitHub Pages displays the committed catalog and binaries.
- Browser previews use lightweight procedural render snapshots or an
  optional prebuilt image; only the enlarged inspector loads a GLB.
- Remote API, large-object CDN, role-based review and hosted MCP are future
  services, **not** capabilities delivered by static Pages.

## Pipeline

\`\`\`mermaid
flowchart LR
  A[staging/*.glb] --> B[Batch manifest]
  B --> C[License + provenance gate]
  C --> D[GLB container parser]
  D --> E[Khronos glTF Validator]
  E --> F[Geometry and byte budgets]
  F --> G{All entries pass?}
  G -- no --> H[Reject whole batch with issues]
  G -- yes --> I[Content hash + duplicate check]
  I --> J[--apply]
  J --> K[public/assets/sha256.glb]
  J --> L[catalog/models.json]
  L --> M[SQLite FTS5 / MCP]
  L --> N[GitHub Pages / Gallery]
\`\`\`

All file inputs are constrained to the repository's \`ingest/staging/\`
directory. Symlinks that resolve outside are rejected. Each batch is
limited to 100 entries; per-file input size limit is 16 MiB. The script
does not fetch external web URLs or execute model scripts.

## Two-phase publication contract

**Phase A — Audit (read-only):** parse the GLB header, chunk boundaries,
version and self-contained JSON; inspect mesh primitives and accessor
bounds; enforce resource budgets; run official Khronos glTF Validator;
verify category, SPDX syntax, declared meter dimensions, source ownership
and external authors' HTTPS license evidence. Look up SHA-256 and immutable
IDs to block duplicates. Exit with errors if any item fails.

**Phase B — Apply:** require explicit \`--apply\`. Copy binaries into
\`public/assets/<prefix>/<sha256>.glb\` and append metadata to
\`catalog/models.json\`. The catalog is written via temporary file + rename,
and newly copied binaries roll back if a publication failure occurs.
This is a *local best-effort batch transaction*, not an ACID transaction
across Git and object storage. In production, use object-store staging,
database transaction, outbox, and idempotent publish worker.

## CLI

\`\`\`bash
npm install
mkdir -p ingest/staging
cp /path/to/legally-sourced-file.glb ingest/staging/example.glb
cp ingest/batch.example.json ingest/my-batch.json
# Edit ingest/my-batch.json: file must be example.glb and metadata accurate
node scripts/ingest_glb.mjs --batch ingest/my-batch.json
# Review the full report. If warnings exist, investigate and explicitly set a threshold:
node scripts/ingest_glb.mjs --batch ingest/my-batch.json --max-warnings 3
# Only once accepted:
node scripts/ingest_glb.mjs --batch ingest/my-batch.json --apply
python3 scripts/catalog.py validate
python3 scripts/catalog.py build
node scripts/validate_models.mjs
npm run build
\`\`\`

All accepted binaries must be self-contained GLB v2; external image URIs
and buffer URIs are blocked. glTF Validator errors fail, warnings fail
by default unless the operator explicitly sets \`--max-warnings\`.

This tool checks GLB structure and specification validity; it **does not
prove** copyright ownership, correct scene-wide dimensions, watertight
geometry, manufacturability, animation correctness, texture safety, or
freedom from malicious decompression bombs. Imported dimensions are
**declared by the contributor**, not derived from a transform-aware geometry
analysis. Never label an asset professionally reviewed on that basis alone.

## Quality dimensions

| Gate | MVP rule | Planned production control |
|---|---|---|
| Identity | Immutable ID, unique slug, duplicate SHA blocked | Versioned logical asset + content revisions |
| Format | GLB v2, self-contained | glTF, USDZ, FBX importer in sandbox |
| glTF correctness | Official Khronos Validator, zero errors | Tested engine runtime compatibility matrix |
| Geometry | Valid POSITION accessor, triangles, <=100K triangles | Geometry transform-based bounds, degenerate/UV checks |
| Materials | <=80 materials, <=24 textures | Texture resolution/VRAM/memory budgets |
| File size | <=16 MiB | Tiered budgets by asset category |
| Provenance | Author/license, external evidence URL | Human legal review + evidence archive |
| Malware/privacy | No external URI, no script execution, local staging | Isolated scan workers, time/memory caps, SBoM |
| Publication | Explicit apply, content SHA, rollback | Transactional object storage + outbox |
| Preview | Viewer on click, optional static image | WebP/AVIF thumbnails, automated QA snapshots |

## Reviewer state machine (proposed)

\`\`\`text
SUBMITTED -> METADATA_CHECKED -> FORMAT_VALIDATED -> QA_PENDING
                                             |            |
                                             v            v
                                           REJECTED    HUMAN_REVIEW
                                                          |
                                                       APPROVED
                                                          |
                                                     PUBLISHED
                                                          |
                                                     DEPRECATED
\`\`\`

The local CLI currently publishes directly after passing its mechanical
checks and an explicit apply command. Review roles, queues and state
transitions are **planned**, not already implemented.

## Storage economics and 50K+ scale

The starter's Git repository is appropriate for **small, licensed GLB
files only**. Do not commit 50,000 binaries or assemble 50,000 WebGL
contexts. For a hypothetical 50,000-model corpus with average 5 MiB
per asset, binaries alone total approximately 250 GiB (decimal) plus
previews, LODs, backups and egress. Move binaries to object storage/CDN,
keep hashes/paths in the DB, shard public metadata and paginate queries.

Cost is driven by object size, replication, previews, bandwidth, geometry
transform, human review and search requests. Measure real corpus averages
before selecting storage/compute infrastructure.

## Operational acceptance checklist

- [ ] Ingest dry run makes no filesystem modifications.
- [ ] Import rejects path traversal, escaping symlinks, truncated GLB, and
      third-party assets lacking source/license evidence.
- [ ] glTF Validator reports no errors; warning threshold is explicit.
- [ ] Model has at least one TRIANGLES mesh, finite POSITION bounds.
- [ ] Content SHA-256 and existing IDs are deduplicated.
- [ ] Apply yields a catalog entry and matching content-addressed file.
- [ ] SQLite builder and MCP search return that same asset.
- [ ] Gallery inspector downloads/loads committed GLB.
- [ ] Actual licensing review performed separately by a human.
- [ ] Production onboarding to CDN is independently tested.
