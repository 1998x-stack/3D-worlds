import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "tools.surveying-camera-tripod.001",
  "slug": "surveying-camera-tripod",
  "title": "Surveying Camera Tripod",
  "title_zh": "野外测绘三脚架",
  "summary": "Adjustable survey tripod with telescopic legs, rotation head and bubble level",
  "category": "tools",
  "tags": [
    "survey",
    "tripod",
    "camera"
  ],
  "dimensions_m": [
    1.11,
    1.69,
    1.08
  ],
  "generator": "createSurveyingCameraTripod",
  "source_path": "src/models/surveying_camera_tripod.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/surveying-camera-tripod.webp"
};
export function createSurveyingCameraTripod() { return buildRecipe({
  "title": "Surveying Camera Tripod",
  "dimensions": [
    1.11,
    1.69,
    1.08
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "mount-head",
      "p": [
        0,
        1.55,
        0
      ],
      "s": [
        0.27,
        0.16,
        0.27
      ],
      "c": 9741221
    },
    {
      "t": "cylinder",
      "n": "rotation-hub",
      "p": [
        0,
        1.68,
        0
      ],
      "s": [
        0.21,
        0.08,
        0.21
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "bubble-level",
      "p": [
        0.09,
        1.65,
        0.13
      ],
      "s": [
        0.14,
        0.035,
        0.09
      ],
      "c": 5540513
    },
    {
      "t": "rod",
      "n": "aluminum-leg-0",
      "from": [
        0,
        1.48,
        0
      ],
      "to": [
        0.49,
        0.13,
        0
      ],
      "r": 0.04,
      "c": 9741221
    },
    {
      "t": "rod",
      "n": "telescoping-segment-0",
      "from": [
        0.3087,
        0.55,
        0
      ],
      "to": [
        0.49,
        0.08,
        0
      ],
      "r": 0.031,
      "c": 3490634
    },
    {
      "t": "box",
      "n": "foot-spike-0",
      "p": [
        0.49,
        0.05,
        0
      ],
      "s": [
        0.11,
        0.09,
        0.12
      ],
      "c": 3490634
    },
    {
      "t": "cylinder",
      "n": "leg-clamp-0",
      "p": [
        0.3038,
        0.54,
        0
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 12953197
    },
    {
      "t": "rod",
      "n": "aluminum-leg-1",
      "from": [
        0,
        1.48,
        0
      ],
      "to": [
        -0.24499999999999988,
        0.13,
        0.3983716857408418
      ],
      "r": 0.04,
      "c": 9741221
    },
    {
      "t": "rod",
      "n": "telescoping-segment-1",
      "from": [
        -0.15434999999999993,
        0.55,
        0.25097416201673034
      ],
      "to": [
        -0.24499999999999988,
        0.08,
        0.3983716857408418
      ],
      "r": 0.031,
      "c": 3490634
    },
    {
      "t": "box",
      "n": "foot-spike-1",
      "p": [
        -0.24499999999999988,
        0.05,
        0.3983716857408418
      ],
      "s": [
        0.11,
        0.09,
        0.12
      ],
      "c": 3490634
    },
    {
      "t": "cylinder",
      "n": "leg-clamp-1",
      "p": [
        -0.15189999999999992,
        0.54,
        0.24699044515932192
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 12953197
    },
    {
      "t": "rod",
      "n": "aluminum-leg-2",
      "from": [
        0,
        1.48,
        0
      ],
      "to": [
        -0.24500000000000022,
        0.13,
        -0.3983716857408417
      ],
      "r": 0.04,
      "c": 9741221
    },
    {
      "t": "rod",
      "n": "telescoping-segment-2",
      "from": [
        -0.15435000000000013,
        0.55,
        -0.2509741620167303
      ],
      "to": [
        -0.24500000000000022,
        0.08,
        -0.3983716857408417
      ],
      "r": 0.031,
      "c": 3490634
    },
    {
      "t": "box",
      "n": "foot-spike-2",
      "p": [
        -0.24500000000000022,
        0.05,
        -0.3983716857408417
      ],
      "s": [
        0.11,
        0.09,
        0.12
      ],
      "c": 3490634
    },
    {
      "t": "cylinder",
      "n": "leg-clamp-2",
      "p": [
        -0.15190000000000015,
        0.54,
        -0.24699044515932184
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 12953197
    },
    {
      "t": "rod",
      "n": "center-column",
      "from": [
        0,
        1.47,
        0
      ],
      "to": [
        0,
        0.67,
        0
      ],
      "r": 0.032,
      "c": 3490634
    },
    {
      "t": "rod",
      "n": "pan-handle",
      "from": [
        0,
        1.62,
        0.1
      ],
      "to": [
        0.36,
        1.52,
        0.26
      ],
      "r": 0.02,
      "c": 3490634
    },
    {
      "t": "sphere",
      "n": "rubber-pan-grip",
      "p": [
        0.36,
        1.52,
        0.26
      ],
      "s": [
        0.06,
        0.045,
        0.05
      ],
      "c": 9596753
    },
    {
      "t": "box",
      "n": "mounting-plate",
      "p": [
        0,
        1.72,
        0
      ],
      "s": [
        0.24,
        0.035,
        0.21
      ],
      "c": 3490634
    }
  ]
}); }
