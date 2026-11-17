# External authoritative references

These are **external upstream documents**; they are links, not copied code or imported assets. Follow official docs for specifications and version-sensitive APIs. Checked for reference relevance: 2026-11-17.

| Topic | Authoritative source | Why it matters |
| --- | --- | --- |
| Agent Skill layout and progressive disclosure | [Agent Skills specification](https://agentskills.io/specification) and [reference repo](https://github.com/agentskills/agentskills) | `SKILL.md` frontmatter; optional `references/`, `assets/`, `scripts/`; load detailed documents on demand |
| Three.js geometry | [Three.js Box3 docs](https://threejs.org/docs/#api/en/math/Box3) and [BufferGeometry docs](https://threejs.org/docs/#api/en/core/BufferGeometry) | bounds, normals, vertex attributes, triangle counting |
| Three.js materials | [MeshStandardMaterial](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial) | PBR properties and proper light response |
| glTF import/export | [Three.js GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader) and [GLTFExporter](https://threejs.org/docs/#examples/en/exporters/GLTFExporter) | interoperability; decoder requirements |
| File format specification | [Khronos glTF 2.0](https://registry.khronos.org/glTF/) | portable GLB/glTF layout and extension semantics |
| Official validator | [Khronos glTF Validator](https://github.com/KhronosGroup/glTF-Validator) | formal glTF format validation, not legal/visual QA |
| Optimization pipeline | [glTF Transform docs](https://gltf-transform.dev/) | dedup, prune, simplify, extensions, meshopt |
| Meshopt algorithms | [meshoptimizer](https://github.com/zeux/meshoptimizer) | geometry compression and simplification |
| Thumbnails | [Playwright browser CI](https://playwright.dev/docs/ci), [Sharp output](https://sharp.pixelplumbing.com/api-output/) | real browser capture and WebP/AVIF encoding |
| Licensing | [SPDX License List](https://spdx.org/licenses/) | correct license identification; do not infer permission |
| Search indexing | [SQLite FTS5](https://www.sqlite.org/fts5.html) | catalog search architecture and limitations |

## Interpretation rules

- Local `package.json` pins Three.js 0.180.0 and glTF Transform 4.5.1 at this revision. Upstream pages can document newer APIs; verify runtime compatibility against installed versions.
- Treat a permissive software repository license as distinct from the copyright status of any third-party binary model, textures or screenshot.
- A passing glTF Validator result proves a limited specification check; it does not certify watertight 3D print meshes, no vulnerabilities, artist permissions or FPS performance.
- Do not vendor external text, stock photos, logos, code or mesh files without rights review. This directory contains citations/links only.

