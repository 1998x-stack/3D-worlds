import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Ion Propulsion Test Platform / 离子推进科研试验台. */
export const assetMeta = {
  "id": "scifi.ion-propulsion-test-platform.001",
  "slug": "ion-propulsion-test-platform",
  "title": "Ion Propulsion Test Platform",
  "title_zh": "离子推进科研试验台",
  "summary": "Science fiction propulsion research test stand with ion nozzle, diagnostics and safety rail",
  "category": "scifi",
  "tags": [
    "ion",
    "propulsion",
    "test",
    "platform",
    "scifi",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.45,
    2.8,
    3.2
  ],
  "generator": "createIonPropulsionTestPlatform",
  "source_path": "src/models/ion_propulsion_test_platform.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/ion-propulsion-test-platform.webp",
  "accent": "#343b5b"
};
export function createIonPropulsionTestPlatform() { return buildRecipe({
  "title": "Ion Propulsion Test Platform",
  "dimensions": [
    3.45,
    2.8,
    3.2
  ],
  "parts": [
    {
      "t": "box",
      "n": "ion-drive-engineering-platform",
      "p": [
        0,
        0.18,
        0
      ],
      "s": [
        2.94,
        0.28,
        2.72
      ],
      "c": 7509178
    },
    {
      "t": "cylinder",
      "n": "ion-thruster-main-cylinder",
      "p": [
        0,
        1.13,
        0
      ],
      "s": [
        1.05,
        0.9,
        1.05
      ],
      "c": 10018250,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "ion-nozzle-output",
      "p": [
        0,
        1.13,
        1
      ],
      "s": [
        0.72,
        0.34,
        0.72
      ],
      "c": 3423067,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "exhaust-confinement-ring",
      "p": [
        0,
        1.13,
        1.29
      ],
      "s": [
        1.58,
        1.58,
        1.58
      ],
      "c": 13812462
    },
    {
      "t": "rod",
      "n": "radial-nozzle-support-0",
      "from": [
        0.67,
        1.13,
        0.15
      ],
      "to": [
        0.4757,
        1.13,
        1.23
      ],
      "r": 0.049,
      "c": 13812462
    },
    {
      "t": "rod",
      "n": "radial-nozzle-support-1",
      "from": [
        0.4737615433949869,
        1.6037615433949868,
        0.15
      ],
      "to": [
        0.33637069581044066,
        1.4663706958104405,
        1.23
      ],
      "r": 0.049,
      "c": 13812462
    },
    {
      "t": "rod",
      "n": "radial-nozzle-support-2",
      "from": [
        4.1025667771436334e-17,
        1.7999999999999998,
        0.15
      ],
      "to": [
        2.91282241177198e-17,
        1.6057,
        1.23
      ],
      "r": 0.049,
      "c": 13812462
    },
    {
      "t": "rod",
      "n": "radial-nozzle-support-3",
      "from": [
        -0.47376154339498683,
        1.6037615433949868,
        0.15
      ],
      "to": [
        -0.33637069581044066,
        1.4663706958104405,
        1.23
      ],
      "r": 0.049,
      "c": 13812462
    },
    {
      "t": "rod",
      "n": "radial-nozzle-support-4",
      "from": [
        -0.67,
        1.13,
        0.15
      ],
      "to": [
        -0.4757,
        1.13,
        1.23
      ],
      "r": 0.049,
      "c": 13812462
    },
    {
      "t": "rod",
      "n": "radial-nozzle-support-5",
      "from": [
        -0.473761543394987,
        0.656238456605013,
        0.15
      ],
      "to": [
        -0.33637069581044077,
        0.7936293041895592,
        1.23
      ],
      "r": 0.049,
      "c": 13812462
    },
    {
      "t": "rod",
      "n": "radial-nozzle-support-6",
      "from": [
        -1.23077003314309e-16,
        0.45999999999999985,
        0.15
      ],
      "to": [
        -8.73846723531594e-17,
        0.6542999999999999,
        1.23
      ],
      "r": 0.049,
      "c": 13812462
    },
    {
      "t": "rod",
      "n": "radial-nozzle-support-7",
      "from": [
        0.4737615433949868,
        0.6562384566050129,
        0.15
      ],
      "to": [
        0.3363706958104406,
        0.7936293041895591,
        1.23
      ],
      "r": 0.049,
      "c": 13812462
    },
    {
      "t": "box",
      "n": "spectrum-diagnostics-console-0",
      "p": [
        -0.89,
        0.79,
        -1.04
      ],
      "s": [
        0.31,
        0.28,
        0.28
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "spectrum-diagnostics-console-1",
      "p": [
        -0.44,
        0.79,
        -1.04
      ],
      "s": [
        0.31,
        0.28,
        0.28
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "spectrum-diagnostics-console-2",
      "p": [
        0.010000000000000009,
        0.79,
        -1.04
      ],
      "s": [
        0.31,
        0.28,
        0.28
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "spectrum-diagnostics-console-3",
      "p": [
        0.4600000000000001,
        0.79,
        -1.04
      ],
      "s": [
        0.31,
        0.28,
        0.28
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "spectrum-diagnostics-console-4",
      "p": [
        0.91,
        0.79,
        -1.04
      ],
      "s": [
        0.31,
        0.28,
        0.28
      ],
      "c": 3423067
    },
    {
      "t": "rod",
      "n": "ion-test-safety-rail--1",
      "from": [
        -1.38,
        0.42,
        -1.22
      ],
      "to": [
        -1.38,
        1.76,
        -1.22
      ],
      "r": 0.047,
      "c": 10018250
    },
    {
      "t": "rod",
      "n": "ion-test-outer-rail--1",
      "from": [
        -1.38,
        1.75,
        -1.22
      ],
      "to": [
        -1.38,
        1.75,
        1.25
      ],
      "r": 0.04,
      "c": 10018250
    },
    {
      "t": "rod",
      "n": "ion-test-safety-rail-1",
      "from": [
        1.38,
        0.42,
        -1.22
      ],
      "to": [
        1.38,
        1.76,
        -1.22
      ],
      "r": 0.047,
      "c": 10018250
    },
    {
      "t": "rod",
      "n": "ion-test-outer-rail-1",
      "from": [
        1.38,
        1.75,
        -1.22
      ],
      "to": [
        1.38,
        1.75,
        1.25
      ],
      "r": 0.04,
      "c": 10018250
    }
  ]
}); }
