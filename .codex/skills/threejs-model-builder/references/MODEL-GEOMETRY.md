# Three.js geometry, materials and coordinate contract

## Units, transforms and placement

- World +Y is up. Width = X span, height = Y span, depth = Z span, all **meters**.
- Root `THREE.Group` has an axis-aligned visible bounding box approximately equal to `dimensions_m`, x/z centered and lowest occupied geometry at y=0. A functional pivot, for an opening door or wheel, may be encoded in a named child group.
- Use `THREE.Box3().setFromObject(root)` to measure transformed world bounds. A declared bound is metadata, not proof of real-world scale. Probe all relevant rotations.
- Prefer physically meaningful proportions; avoid arbitrary scale hacks hiding geometry mistakes. The recipe builder performs a final envelope-scale normalization. This can distort intended aspect if part coordinates do not match target proportions.
- Refuse non-finite coordinates, zero-length rods, negative dimensions, unexpected clipping through the floor, degenerate triangles.

## Pure factory contract

```js
import * as THREE from 'three';
import { box, mat } from './primitives.js';
export function createSampleBench() {
  const group = new THREE.Group();
  group.name = 'Sample Bench';
  const wood = mat(0x94664a);
  box(group, 'seat', [1.2, 0.08, 0.42], [0, 0.49, 0], wood);
  box(group, 'leg-left', [0.08, 0.45, 0.08], [-0.46, 0.225, 0], wood);
  box(group, 'leg-right', [0.08, 0.45, 0.08], [0.46, 0.225, 0], wood);
  return group;
}
```

This is a geometry illustration only; a production asset needs complete intended details, metadata, and validation. Do not import `window`, instantiate renderers, add to global `scene`, fetch web resources, or mutate shared material state unintentionally.

## Meshes, topology and rendering

- Give each functionally important part a unique descriptive name, useful to an engine agent for selecting a collider/anchor.
- For opaque props use `MeshStandardMaterial` unless a documented visual requirement justifies another material. Balance roughness/metalness; avoid random palette changes on every call.
- Where appropriate prefer reused geometries/materials and `InstancedMesh` for many copies in-scene; exported GLB and recipe semantics may differ, so test the target pipeline.
- Apply/inspect normal directions, face winding, z-fighting, backface culling and double-sided material usage. `DoubleSide` is not a substitute for correct mesh topology.
- Geometry budget is a measured per-asset property, not a universal FPS guarantee; existing validation currently caps procedural primitives at 100K triangles. Set stricter targets based on intended camera distance and device class.
- Collision, pivots, UVs, animated rigs, skeletons and manifold construction require additional authored data and tests. Do not imply those features because a mesh looks correct.
- For procedural `buildRecipe` shapes inspect `src/models/recipe_engine.js` for accepted token and coordinate conventions; the attached [example](../assets/recipe-example.js) is deliberately simple.

## Portable source delivery

The Gallery source-copy feature must include generated module plus its dependent `primitives.js` or `recipe_engine.js` code. Code that still has unresolved relative imports is not standalone. For non-repo consumers, provide the dependency graph, correct `three` version and a small `scene.add(createX())` integration example. Imported GLBs should be loaded through `GLTFLoader` with a Meshopt decoder if the binary requires it.

## Visual QA views

Front, side, rear, 3/4 perspective, top, low-angle, silhouette-only, and small card size. Check object identity without text, readable negative space, contact shadows, scale vs known objects, performance and visual artifacts. Store screenshot artifacts when actually captured, not in docs as unverified claims.

