import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Adaptive Seated Rowing Machine / 适应性坐姿划船训练机. */
export const assetMeta = {
  "id": "sports.adaptive-seated-rowing-machine.001",
  "slug": "adaptive-seated-rowing-machine",
  "title": "Adaptive Seated Rowing Machine",
  "title_zh": "适应性坐姿划船训练机",
  "summary": "Accessible gym rowing trainer with supportive seat, footrest, flywheel and restraint rail",
  "category": "sports",
  "tags": [
    "adaptive",
    "seated",
    "rowing",
    "machine",
    "sports",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.28,
    1.63,
    1.14
  ],
  "generator": "createAdaptiveSeatedRowingMachine",
  "source_path": "src/models/adaptive_seated_rowing_machine.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/adaptive-seated-rowing-machine.webp",
  "accent": "#659baa"
};
export function createAdaptiveSeatedRowingMachine() { return buildRecipe({
  "title": "Adaptive Seated Rowing Machine",
  "dimensions": [
    2.28,
    1.63,
    1.14
  ],
  "parts": [
    {
      "t": "box",
      "n": "adaptive-seated-rowing-machine-accessible-rowing-machine-track",
      "p": [
        0,
        0.32,
        0
      ],
      "s": [
        1.2,
        0.2,
        1.9
      ],
      "c": 14988395
    },
    {
      "t": "box",
      "n": "adaptive-seated-rowing-machine-rower-stabilizing-seat",
      "p": [
        0,
        0.69,
        0.29
      ],
      "s": [
        0.71,
        0.16,
        0.5
      ],
      "c": 6658986
    },
    {
      "t": "box",
      "n": "adaptive-seated-rowing-machine-adaptive-support-seatback",
      "p": [
        0,
        1.02,
        0.05
      ],
      "s": [
        0.7,
        0.66,
        0.15
      ],
      "c": 3890289
    },
    {
      "t": "box",
      "n": "adaptive-seated-rowing-machine-rower-footplate--1",
      "p": [
        -0.27,
        0.39,
        -0.55
      ],
      "s": [
        0.26,
        0.15,
        0.33
      ],
      "c": 14147292
    },
    {
      "t": "rod",
      "n": "adaptive-seated-rowing-machine-disabled-access-rower-handrail--1",
      "from": [
        -0.5,
        0.37,
        0.5
      ],
      "to": [
        -0.5,
        1.09,
        0.12
      ],
      "r": 0.044,
      "c": 3890289
    },
    {
      "t": "box",
      "n": "adaptive-seated-rowing-machine-rower-footplate-1",
      "p": [
        0.27,
        0.39,
        -0.55
      ],
      "s": [
        0.26,
        0.15,
        0.33
      ],
      "c": 14147292
    },
    {
      "t": "rod",
      "n": "adaptive-seated-rowing-machine-disabled-access-rower-handrail-1",
      "from": [
        0.5,
        0.37,
        0.5
      ],
      "to": [
        0.5,
        1.09,
        0.12
      ],
      "r": 0.044,
      "c": 3890289
    },
    {
      "t": "cylinder",
      "n": "adaptive-seated-rowing-machine-magnetic-flywheel-housing",
      "p": [
        0,
        0.67,
        -0.79
      ],
      "s": [
        0.67,
        0.25,
        0.67
      ],
      "c": 14147292,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "adaptive-seated-rowing-machine-manual-pullbar",
      "from": [
        -0.26,
        1.13,
        -0.31
      ],
      "to": [
        0.26,
        1.13,
        -0.31
      ],
      "r": 0.03,
      "c": 14147292
    },
    {
      "t": "box",
      "n": "adaptive-seated-rowing-machine-ergonomic-feedback-signal-0",
      "p": [
        -0.21,
        1.15,
        -0.61
      ],
      "s": [
        0.045,
        0.027,
        0.014
      ],
      "c": 3890289
    },
    {
      "t": "box",
      "n": "adaptive-seated-rowing-machine-ergonomic-feedback-signal-1",
      "p": [
        -0.128,
        1.15,
        -0.61
      ],
      "s": [
        0.045,
        0.027,
        0.014
      ],
      "c": 3890289
    },
    {
      "t": "box",
      "n": "adaptive-seated-rowing-machine-ergonomic-feedback-signal-2",
      "p": [
        -0.045999999999999985,
        1.15,
        -0.61
      ],
      "s": [
        0.045,
        0.027,
        0.014
      ],
      "c": 3890289
    },
    {
      "t": "box",
      "n": "adaptive-seated-rowing-machine-ergonomic-feedback-signal-3",
      "p": [
        0.036000000000000004,
        1.15,
        -0.61
      ],
      "s": [
        0.045,
        0.027,
        0.014
      ],
      "c": 3890289
    },
    {
      "t": "box",
      "n": "adaptive-seated-rowing-machine-ergonomic-feedback-signal-4",
      "p": [
        0.11800000000000002,
        1.15,
        -0.61
      ],
      "s": [
        0.045,
        0.027,
        0.014
      ],
      "c": 3890289
    },
    {
      "t": "box",
      "n": "adaptive-seated-rowing-machine-ergonomic-feedback-signal-5",
      "p": [
        0.20000000000000004,
        1.15,
        -0.61
      ],
      "s": [
        0.045,
        0.027,
        0.014
      ],
      "c": 3890289
    },
    {
      "t": "box",
      "n": "adaptive-seated-rowing-machine-structural-fitting-0",
      "p": [
        -0.4,
        0.16,
        -0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 14147292
    },
    {
      "t": "box",
      "n": "adaptive-seated-rowing-machine-structural-fitting-1",
      "p": [
        -0.33,
        0.16,
        0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 14147292
    },
    {
      "t": "box",
      "n": "adaptive-seated-rowing-machine-structural-fitting-2",
      "p": [
        -0.26,
        0.16,
        -0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 14147292
    }
  ]
}); }
