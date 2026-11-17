# Worked example: externally licensed GLB

This is a procedural **dry-run guide**; there is no bundled binary or license grant. Do not execute the sample manifest until its placeholder values are replaced with verified provenance.

1. Acquire GLB from an actual rightsholder and record their license terms, attribution and redistribution permissions. Confirm `source_url` and `license_evidence_url` resolve to the correct asset/license.
2. Copy the 2.0 binary under `ingest/staging/sample.glb`. Replace all sample fields in [the example manifest](../assets/import-batch.example.json); use a real, unique slug and measured dimensions.
3. Run `node scripts/ingest_glb.mjs --batch ingest/my-batch.json` **without** `--apply`. Review SHA, triangle count, validator error/warnings, size, and assigned destination path.
4. Only with reviewed rights and acceptable geometry run the same command with `--apply`. Validate `catalog/models.json`, build SQLite and inspect Gallery GLTFLoader import.
5. If an asset triggers warnings or visual defects, repair/return to source; don't label it production-ready.

See [ingestion details](../references/GLB-INGESTION.md) and [rights rules](../references/CATALOG-PROVENANCE.md).

