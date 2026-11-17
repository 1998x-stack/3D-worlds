# Third-party GLB ingestion — safety-first runbook

## Preconditions

Actual GLB 2.0 binary, permission to redistribute, original author/license, HTTPS license evidence if third-party, dimensions in meters from contributor, existing `catalog/categories.json` ID, unique ASCII slug, unique tags. If rights or provenance are unknown, **quarantine the asset**. Do not make up fields to satisfy the validator.

## Workflow

```bash
npm install
mkdir -p ingest/staging
# Copy a legally sourced binary to ingest/staging/sample.glb
cp .codex/skills/threejs-model-builder/assets/import-batch.example.json ingest/my-batch.json
# Replace every placeholder and set file to sample.glb
node scripts/ingest_glb.mjs --batch ingest/my-batch.json
# Inspect Khronos issues, stats, rightsholder evidence and new asset IDs
node scripts/ingest_glb.mjs --batch ingest/my-batch.json --apply
python3 scripts/catalog.py validate
python3 scripts/catalog.py build
node scripts/validate_models.mjs
npm run build
```

**Default invocation is dry-run**; `--apply` is a write. Do not run the last step before inspecting the report. If the validator raises warnings, investigate the warning; `--max-warnings N` is an explicit operator override, not carte blanche.

## Implemented boundaries (verify against current scripts)

- File path must be a safe relative `.glb` under `ingest/staging/`, with symlink path checks.
- Batch version 1, 1–100 assets; maximum 16 MiB each; triangle budget 100,000; 80 materials; 24 textures; only triangles mode.
- Parse GLB magic/version/chunks, require internal resources and POSITION accessor bounds, reject external texture URI; then run official Khronos glTF Validator.
- Compute SHA-256 and refuse duplicate content or IDs.
- Apply writes to content-addressed `public/assets/<prefix>/<sha>.glb` and appends `catalog/models.json`. This is a local best-effort rollback, not a distributed transaction.
- A passed parser does not verify complete transforms, photorealistic quality, legal grant, UV correctness, security of all decoder inputs or watertight printing.

## Technical and human checks

Verify bounding box with transforms in a GLTFLoader viewer; check surfaces, normals, PBR textures, transparency, image power-of-two constraints only if needed, Z-fighting, number of draw calls, and scale. Isolate untrusted binary review (sandboxed machine) for complex sources. For prints, run a separate mesh manifold/repair pipeline; for animations, validate clips and skeleton. Never execute JS from source bundles disguised as asset metadata.

## Failures and recovery

- Missing permission: stop; request source/licensing documentation. Do not apply.
- Validator errors: repair at authoring source, then rerun dry-run; no blanket waiver.
- File escapes staging: copy original binary into staging without external symlink.
- Reused content SHA: reuse existing asset ID or explain why a distinct logical revision is necessary; do not duplicate.
- Metadata mismatch after publish: edit via reviewed manifest update, rebuild SQLite, and test Gallery/MCP.
- For operator reference see repository `docs/ingestion-architecture.md` and sample [import manifest](../assets/import-batch.example.json); example.org URLs are placeholders, not license evidence.

