# 3D Worlds · Asset acceptance report (copy and fill)

**Status:** PASS / FAIL / BLOCKED / PARTIALLY VERIFIED  
**Date / reviewer:**  
**PR / commit:**  
**Goal / asset IDs:**  
**Changed paths:**  
**License and provenance decision:**  

## Audit evidence

| Check | Exact command or manual inspection | Result (PASS/FAIL/SKIPPED) | Evidence URL / snippet |
| --- | --- | --- | --- |
| Skill mirror integrity | `python3 scripts/verify_skill_mirrors.py` | | |
| Catalog | `python3 scripts/catalog.py validate` | | |
| SQLite + unit tests | `python3 scripts/catalog.py build`; `python3 -m unittest discover -s tests -v` | | |
| Source geometry | `node scripts/validate_models.mjs` | | |
| Imported GLB only | `node scripts/ingest_glb.mjs --batch ...` | | |
| Thumbnail + LOD | `npm run generate:assets && npm run verify:assets` | | |
| Web build + browser | `npm run build && npm run test:gallery` | | |
| MCP + P2 | local smoke scripts as applicable | | |
| Visual and game import | GLTFLoader / actual screenshots / device test | | |

## Actual asset metrics
- Catalog count before/after:
- Dimensions measured vs declared:
- Number of meshes, vertices and triangles:
- Original GLB SHA-256 / bytes (if generated):
- LOD0, LOD1, LOD2 SHA-256 / actual triangle counts / bytes:
- WebP and AVIF sizes:
- Export/import result and destination viewer:
- Rights evidence URL, and licensing restrictions:

## Release qualification
- Blocking issues (do not claim success):
- Tests that could not run (why):
- Data/security/performance trade-offs:
- Next action and responsible owner:

Never write PASS based on a planned command, a guessed hash, or a placeholder screenshot.

