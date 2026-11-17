import { buildRecipe } from './recipe_engine.js';
/** Pedestrian Cycle Lane Divider: original source-editable mesh scene. */
export const assetMeta = {
  "id": "urban.pedestrian-cycle-lane-divider.001",
  "slug": "pedestrian-cycle-lane-divider",
  "title": "Pedestrian Cycle Lane Divider",
  "title_zh": "人行与自行车道分隔设施",
  "summary": "Modular raised cycle lane safety divider with reflective posts and arrows",
  "category": "urban",
  "tags": [
    "cycle",
    "divider",
    "street"
  ],
  "dimensions_m": [
    2.69,
    0.94,
    0.67
  ],
  "generator": "createPedestrianCycleLaneDivider",
  "source_path": "src/models/pedestrian_cycle_lane_divider.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/pedestrian-cycle-lane-divider.webp"
};
export function createPedestrianCycleLaneDivider() { return buildRecipe({
  "title": "Pedestrian Cycle Lane Divider",
  "dimensions": [
    2.69,
    0.94,
    0.67
  ],
  "parts": [
    {
      "t": "box",
      "n": "divider-safety-base",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        2.65,
        0.17,
        0.61
      ],
      "c": 9872548
    },
    {
      "t": "cylinder",
      "n": "flexible-bollard-0",
      "p": [
        -1.12,
        0.47,
        0
      ],
      "s": [
        0.12,
        0.78,
        0.12
      ],
      "c": 6657707
    },
    {
      "t": "box",
      "n": "reflector-band-0",
      "p": [
        -1.12,
        0.73,
        0.067
      ],
      "s": [
        0.12,
        0.07,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "cylinder",
      "n": "flexible-bollard-1",
      "p": [
        -0.8,
        0.47,
        0
      ],
      "s": [
        0.12,
        0.78,
        0.12
      ],
      "c": 6657707
    },
    {
      "t": "box",
      "n": "reflector-band-1",
      "p": [
        -0.8,
        0.73,
        0.067
      ],
      "s": [
        0.12,
        0.07,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "cylinder",
      "n": "flexible-bollard-2",
      "p": [
        -0.4800000000000001,
        0.47,
        0
      ],
      "s": [
        0.12,
        0.78,
        0.12
      ],
      "c": 6657707
    },
    {
      "t": "box",
      "n": "reflector-band-2",
      "p": [
        -0.4800000000000001,
        0.73,
        0.067
      ],
      "s": [
        0.12,
        0.07,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "cylinder",
      "n": "flexible-bollard-3",
      "p": [
        -0.16000000000000014,
        0.47,
        0
      ],
      "s": [
        0.12,
        0.78,
        0.12
      ],
      "c": 6657707
    },
    {
      "t": "box",
      "n": "reflector-band-3",
      "p": [
        -0.16000000000000014,
        0.73,
        0.067
      ],
      "s": [
        0.12,
        0.07,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "cylinder",
      "n": "flexible-bollard-4",
      "p": [
        0.15999999999999992,
        0.47,
        0
      ],
      "s": [
        0.12,
        0.78,
        0.12
      ],
      "c": 6657707
    },
    {
      "t": "box",
      "n": "reflector-band-4",
      "p": [
        0.15999999999999992,
        0.73,
        0.067
      ],
      "s": [
        0.12,
        0.07,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "cylinder",
      "n": "flexible-bollard-5",
      "p": [
        0.48,
        0.47,
        0
      ],
      "s": [
        0.12,
        0.78,
        0.12
      ],
      "c": 6657707
    },
    {
      "t": "box",
      "n": "reflector-band-5",
      "p": [
        0.48,
        0.73,
        0.067
      ],
      "s": [
        0.12,
        0.07,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "cylinder",
      "n": "flexible-bollard-6",
      "p": [
        0.7999999999999998,
        0.47,
        0
      ],
      "s": [
        0.12,
        0.78,
        0.12
      ],
      "c": 6657707
    },
    {
      "t": "box",
      "n": "reflector-band-6",
      "p": [
        0.7999999999999998,
        0.73,
        0.067
      ],
      "s": [
        0.12,
        0.07,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "cylinder",
      "n": "flexible-bollard-7",
      "p": [
        1.12,
        0.47,
        0
      ],
      "s": [
        0.12,
        0.78,
        0.12
      ],
      "c": 6657707
    },
    {
      "t": "box",
      "n": "reflector-band-7",
      "p": [
        1.12,
        0.73,
        0.067
      ],
      "s": [
        0.12,
        0.07,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "colored-cycle-paint",
      "p": [
        0,
        0.17,
        0.05
      ],
      "s": [
        2.51,
        0.025,
        0.38
      ],
      "c": 7050619
    },
    {
      "t": "box",
      "n": "road-arrow-0",
      "p": [
        -0.98,
        0.188,
        0.05
      ],
      "s": [
        0.22,
        0.016,
        0.07
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "road-arrow-1",
      "p": [
        -0.35,
        0.188,
        0.05
      ],
      "s": [
        0.22,
        0.016,
        0.07
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "road-arrow-2",
      "p": [
        0.28,
        0.188,
        0.05
      ],
      "s": [
        0.22,
        0.016,
        0.07
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "road-arrow-3",
      "p": [
        0.9100000000000001,
        0.188,
        0.05
      ],
      "s": [
        0.22,
        0.016,
        0.07
      ],
      "c": 15197661
    }
  ]
}); }
