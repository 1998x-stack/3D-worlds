import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "scifi.cryogenic-sleep-pod.001",
  "slug": "cryogenic-sleep-pod",
  "title": "Cryogenic Sleep Pod",
  "title_zh": "低温休眠舱",
  "summary": "Spacecraft sleep pod with mattress, curved translucent lid, locks and control touchscreen.",
  "category": "scifi",
  "tags": [
    "cryo",
    "sleep",
    "pod",
    "spaceship"
  ],
  "dimensions_m": [
    1.04,
    1.18,
    2.52
  ],
  "generator": "createCryogenicSleepPod",
  "source_path": "src/models/cryogenic_sleep_pod.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/cryogenic-sleep-pod.webp"
};
export function createCryogenicSleepPod() {return buildRecipe({
  "title": "Cryogenic Sleep Pod",
  "dimensions": [
    1.04,
    1.18,
    2.52
  ],
  "parts": [
    {
      "t": "box",
      "n": "lower-vessel",
      "p": [
        0,
        0.3,
        0
      ],
      "s": [
        0.96,
        0.6,
        2.48
      ],
      "c": 6258569
    },
    {
      "t": "box",
      "n": "sleeping-platform",
      "p": [
        0,
        0.62,
        0
      ],
      "s": [
        0.74,
        0.09,
        2.08
      ],
      "c": 12965078
    },
    {
      "t": "sphere",
      "n": "head-pillow",
      "p": [
        0,
        0.7,
        0.7
      ],
      "s": [
        0.6,
        0.13,
        0.34
      ],
      "c": 14017247
    },
    {
      "t": "sphere",
      "n": "translucent-lid",
      "p": [
        0,
        0.88,
        0
      ],
      "s": [
        0.92,
        0.51,
        2.2
      ],
      "c": 9158598
    },
    {
      "t": "box",
      "n": "head-control-panel",
      "p": [
        0,
        0.9,
        1.23
      ],
      "s": [
        0.64,
        0.32,
        0.09
      ],
      "c": 3424586
    },
    {
      "t": "box",
      "n": "touchscreen",
      "p": [
        0,
        0.95,
        1.287
      ],
      "s": [
        0.46,
        0.17,
        0.018
      ],
      "c": 3896454
    },
    {
      "t": "box",
      "n": "foot-lock",
      "p": [
        0,
        0.57,
        -1.22
      ],
      "s": [
        0.6,
        0.14,
        0.08
      ],
      "c": 9348268
    },
    {
      "t": "rod",
      "n": "side-rail-0",
      "from": [
        -0.39,
        0.7,
        -1.06
      ],
      "to": [
        -0.39,
        0.9,
        1.08
      ],
      "r": 0.024,
      "c": 9348268
    },
    {
      "t": "rod",
      "n": "side-rail-1",
      "from": [
        0.39,
        0.7,
        -1.06
      ],
      "to": [
        0.39,
        0.9,
        1.08
      ],
      "r": 0.024,
      "c": 9348268
    },
    {
      "t": "rod",
      "n": "canopy-rib-0",
      "from": [
        -0.44,
        0.99,
        -0.83
      ],
      "to": [
        0.44,
        0.99,
        -0.83
      ],
      "r": 0.028,
      "c": 9348268
    },
    {
      "t": "rod",
      "n": "canopy-rib-1",
      "from": [
        -0.44,
        0.99,
        0
      ],
      "to": [
        0.44,
        0.99,
        0
      ],
      "r": 0.028,
      "c": 9348268
    },
    {
      "t": "rod",
      "n": "canopy-rib-2",
      "from": [
        -0.44,
        0.99,
        0.83
      ],
      "to": [
        0.44,
        0.99,
        0.83
      ],
      "r": 0.028,
      "c": 9348268
    },
    {
      "t": "sphere",
      "n": "monitor-status-0",
      "p": [
        -0.14,
        0.9,
        1.301
      ],
      "s": [
        0.022,
        0.012,
        0.01
      ],
      "c": 12690292
    },
    {
      "t": "sphere",
      "n": "monitor-status-1",
      "p": [
        -0.048000000000000015,
        0.9,
        1.301
      ],
      "s": [
        0.022,
        0.012,
        0.01
      ],
      "c": 10801576
    },
    {
      "t": "sphere",
      "n": "monitor-status-2",
      "p": [
        0.043999999999999984,
        0.9,
        1.301
      ],
      "s": [
        0.022,
        0.012,
        0.01
      ],
      "c": 12690292
    },
    {
      "t": "sphere",
      "n": "monitor-status-3",
      "p": [
        0.136,
        0.9,
        1.301
      ],
      "s": [
        0.022,
        0.012,
        0.01
      ],
      "c": 10801576
    },
    {
      "t": "box",
      "n": "stabilizer-0-0",
      "p": [
        -0.37,
        0.065,
        -0.96
      ],
      "s": [
        0.15,
        0.13,
        0.24
      ],
      "c": 3424586
    },
    {
      "t": "box",
      "n": "stabilizer-0-1",
      "p": [
        -0.37,
        0.065,
        0.96
      ],
      "s": [
        0.15,
        0.13,
        0.24
      ],
      "c": 3424586
    },
    {
      "t": "box",
      "n": "stabilizer-1-0",
      "p": [
        0.37,
        0.065,
        -0.96
      ],
      "s": [
        0.15,
        0.13,
        0.24
      ],
      "c": 3424586
    },
    {
      "t": "box",
      "n": "stabilizer-1-1",
      "p": [
        0.37,
        0.065,
        0.96
      ],
      "s": [
        0.15,
        0.13,
        0.24
      ],
      "c": 3424586
    }
  ]
});}
