# Three.js Research and Engineering Decisions (2026)

## Three.js stack

**Chosen:** Three.js as the renderer/data model + Vite as module bundler +
vanilla ES modules for a small, portable gallery. The scene and model
generators are framework-independent. React Three Fiber is excellent for
large React applications but unnecessary for this initial public asset
library; Babylon.js is a full alternative engine, but would move us away
from the user's explicit Three.js ecosystem.

Three.js core primitives: `Scene`, `PerspectiveCamera`,
`WebGLRenderer`, `MeshStandardMaterial`, `BufferGeometry`, `Group`.
Addons: `OrbitControls` (inspection), `GLTFLoader` (external binary
assets in future), `GLTFExporter` (browser export). Prefer glTF 2.0 /
GLB for portability over JSON serialized Three.js objects.

Canonical coordinate policy is **meters**, **+Y up**, **grounded origin**.
Each asset generator is a pure module, returning a named `THREE.Group`.
It must not modify app-wide controls, camera, lighting, or DOM state.
Model geometry is separate from studio environment.

## Model lifecycle

1. Define an asset brief: use case, target game engine, dimensions,
   silhouette, necessary mesh parts, triangle budget, visual style.
2. Build geometry and material nodes, naming important parts.
3. Validate world-space box and floor origin, watertightness where
   relevant, no missing maps, nonzero normals, realistic scale.
4. Export GLB via GLTFExporter. Check GLB independently from live scene.
5. Provide preview thumbnail, source code, SPDX license, provenance.
6. Register in `catalog/models.json`, rebuild SQLite, run tests.
7. Verify UI card, inspector, copied module and import snippet.
8. Integrate in game runtime: load, transform, instance, cache and dispose.

## Core implementation decisions

| Area | Decision | Why |
|---|---|---|
| Gallery | Vite + Three.js | Official installation workflow and ergonomic modules |
| Runtime format | glTF/GLB | Supported and efficient runtime exchange |
| Browser controls | OrbitControls | Accessible interaction affordance with low code |
| Export | GLTFExporter | glTF 2.0 export from authored Group |
| Catalog DB | SQLite + FTS5 | Portable, indexed, 50K asset metadata scale |
| Static host | GitHub Pages | Free public distribution, no dynamic server |
| MCP | Official Python SDK v2, stdio | Simpler local SQLite bridge for agents |
| Asset transfer | Source paste or GLB download | Works with user's existing scene |

**Not claimed:** procedural people are not skeletal rigs and cannot be
automatically posed/animated; a visual preview does not prove game-ready
topology or physical manufacturing accuracy.

## Key sources

- Three.js official installation: https://threejs.org/manual/en/installation.html
- Three.js official loading guide: https://threejs.org/manual/en/loading-3d-models.html
- Three.js GLTFExporter: https://threejs.org/docs/#examples/en/exporters/GLTFExporter
- Three.js GLTFLoader: https://threejs.org/docs/#examples/en/loaders/GLTFLoader
- Khronos glTF 2.0: https://www.khronos.org/gltf/
- SQLite FTS5: https://sqlite.org/fts5.html
- Official MCP Python SDK (v2): https://github.com/modelcontextprotocol/python-sdk
- Vite GitHub Pages deployment: https://vite.dev/guide/static-deploy.html

## Practical next research tasks

- Evaluate `@gltf-transform/core` / `gltf-transform` for texture/buffer
  compression, mesh deduplication and automated quality rules.
- Evaluate `gltfpack` and Meshopt; measure GPU/frame performance on phones.
- Use a separate headless renderer/Blender pipeline for batch preview images.
- Decide on immutable object storage vs Git LFS based on real model corpus
  sizes and licensing restrictions.
- Add geometry-level validation, offscreen render snapshots and browser E2E
  coverage once Node network-enabled CI is established.
