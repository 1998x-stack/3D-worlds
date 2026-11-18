# Assembly World Core v1

The new machine-readable asset system uses `schemas/assembly.schema.json` and `src/assembly/schema.js`. Units are **meters, Y-up**; frames use normalized XYZW quaternions. Valid assemblies contain one root and a connected rigid tree. Current joint types: fixed, revolute (radians), prismatic (meters).

`src/assembly/kinematics.js` computes world transforms for each part. `src/assembly/collision.js` checks box proxy overlaps using AABB broad phase and OBB separating-axis tests, with documented joint-pair exclusions. `auditMotionPath` samples finite joint states; no collision detected is **not proof of continuous clearance**.

The tested sample `examples/assembly/six-wheel-rover.json` contains a chassis and six separately articulated wheels. It is **not** a dynamics, steering, suspension, mechanical strength or physical fit model.

```bash
npm install
node --test tests/assembly_core.test.mjs
node scripts/audit_assembly.mjs examples/assembly/six-wheel-rover.json
```

Next independent steps: closed-loop multi-constraint solver; GLB/CAD collision hulls; continuous swept-volume checks; forces, inertia, contact and physically measured assembly clearances. Keep verified stages and rejected stages separate.

## Real browser viewer

Open `/3D-worlds/assembly.html` after the multi-page Vite build. It draws the seven part proxies, supports part-tree selection, visibility, a nonphysical exploded visual offset, six live joint sliders, a four-step semantic assembly viewer and current-state proxy collision reporting. `scripts/smoke_assembly.mjs` drives a real Chromium browser to test these controls.

The visual explosion offset is not passed to the kinematic solver or collision checker. Detected collisions reflect the original joint transforms and box proxies, not the exploded illustration.
