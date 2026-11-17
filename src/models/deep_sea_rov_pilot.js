import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Deep Sea ROV Pilot / 深海遥控潜器驾驶员人物. */
export const assetMeta = {
  "id": "characters.deep-sea-rov-pilot.001",
  "slug": "deep-sea-rov-pilot",
  "title": "Deep Sea ROV Pilot",
  "title_zh": "深海遥控潜器驾驶员人物",
  "summary": "Unrigged marine robotics operator in dry suit with remote console and headset",
  "category": "characters",
  "tags": [
    "deep",
    "sea",
    "rov",
    "pilot",
    "characters",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.05,
    1.92,
    0.9
  ],
  "generator": "createDeepSeaRovPilot",
  "source_path": "src/models/deep_sea_rov_pilot.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/deep-sea-rov-pilot.webp",
  "accent": "#6b958a"
};
export function createDeepSeaRovPilot() { return buildRecipe({
  "title": "Deep Sea ROV Pilot",
  "dimensions": [
    1.05,
    1.92,
    0.9
  ],
  "parts": [
    {
      "t": "box",
      "n": "deep-sea-rov-pilot-specialist-torso",
      "p": [
        0,
        1.2,
        0
      ],
      "s": [
        0.49,
        0.71,
        0.31
      ],
      "c": 7050634
    },
    {
      "t": "sphere",
      "n": "deep-sea-rov-pilot-specialist-face",
      "p": [
        0,
        1.79,
        0
      ],
      "s": [
        0.24,
        0.25,
        0.21
      ],
      "c": 15325113
    },
    {
      "t": "cylinder",
      "n": "deep-sea-rov-pilot-neck-joint",
      "p": [
        0,
        1.56,
        0
      ],
      "s": [
        0.13,
        0.14,
        0.13
      ],
      "c": 15325113
    },
    {
      "t": "rod",
      "n": "deep-sea-rov-pilot-work-arm-upper--1",
      "from": [
        -0.28,
        1.43,
        0
      ],
      "to": [
        -0.37,
        1.04,
        0.06
      ],
      "r": 0.079,
      "c": 7050634
    },
    {
      "t": "rod",
      "n": "deep-sea-rov-pilot-work-forearm--1",
      "from": [
        -0.37,
        1.04,
        0.06
      ],
      "to": [
        -0.41,
        0.76,
        0.27
      ],
      "r": 0.062,
      "c": 15325113
    },
    {
      "t": "rod",
      "n": "deep-sea-rov-pilot-trouser-upper-leg--1",
      "from": [
        -0.14,
        0.89,
        0
      ],
      "to": [
        -0.16,
        0.48,
        0.04
      ],
      "r": 0.1,
      "c": 14396805
    },
    {
      "t": "rod",
      "n": "deep-sea-rov-pilot-trouser-lower-leg--1",
      "from": [
        -0.16,
        0.48,
        0.04
      ],
      "to": [
        -0.18,
        0.12,
        0.1
      ],
      "r": 0.08,
      "c": 14396805
    },
    {
      "t": "box",
      "n": "deep-sea-rov-pilot-work-safety-boot--1",
      "p": [
        -0.18,
        0.073,
        0.14
      ],
      "s": [
        0.24,
        0.14,
        0.31
      ],
      "c": 3756393
    },
    {
      "t": "rod",
      "n": "deep-sea-rov-pilot-work-arm-upper-1",
      "from": [
        0.28,
        1.43,
        0
      ],
      "to": [
        0.37,
        1.04,
        0.06
      ],
      "r": 0.079,
      "c": 7050634
    },
    {
      "t": "rod",
      "n": "deep-sea-rov-pilot-work-forearm-1",
      "from": [
        0.37,
        1.04,
        0.06
      ],
      "to": [
        0.41,
        0.76,
        0.27
      ],
      "r": 0.062,
      "c": 15325113
    },
    {
      "t": "rod",
      "n": "deep-sea-rov-pilot-trouser-upper-leg-1",
      "from": [
        0.14,
        0.89,
        0
      ],
      "to": [
        0.16,
        0.48,
        0.04
      ],
      "r": 0.1,
      "c": 14396805
    },
    {
      "t": "rod",
      "n": "deep-sea-rov-pilot-trouser-lower-leg-1",
      "from": [
        0.16,
        0.48,
        0.04
      ],
      "to": [
        0.18,
        0.12,
        0.1
      ],
      "r": 0.08,
      "c": 14396805
    },
    {
      "t": "box",
      "n": "deep-sea-rov-pilot-work-safety-boot-1",
      "p": [
        0.18,
        0.073,
        0.14
      ],
      "s": [
        0.24,
        0.14,
        0.31
      ],
      "c": 3756393
    },
    {
      "t": "box",
      "n": "deep-sea-rov-pilot-remote-submersible-headset",
      "p": [
        0,
        1.97,
        0
      ],
      "s": [
        0.45,
        0.1,
        0.36
      ],
      "c": 3756393
    },
    {
      "t": "box",
      "n": "deep-sea-rov-pilot-marine-robotics-controller",
      "p": [
        0.37,
        0.92,
        0.34
      ],
      "s": [
        0.57,
        0.21,
        0.25
      ],
      "c": 14396805
    },
    {
      "t": "cylinder",
      "n": "deep-sea-rov-pilot-rov-joystick-key-0",
      "p": [
        0.16,
        1.05,
        0.43
      ],
      "s": [
        0.048,
        0.07,
        0.048
      ],
      "c": 15325113
    },
    {
      "t": "cylinder",
      "n": "deep-sea-rov-pilot-rov-joystick-key-1",
      "p": [
        0.32,
        1.05,
        0.43
      ],
      "s": [
        0.048,
        0.07,
        0.048
      ],
      "c": 15325113
    },
    {
      "t": "cylinder",
      "n": "deep-sea-rov-pilot-rov-joystick-key-2",
      "p": [
        0.48,
        1.05,
        0.43
      ],
      "s": [
        0.048,
        0.07,
        0.048
      ],
      "c": 15325113
    },
    {
      "t": "cylinder",
      "n": "deep-sea-rov-pilot-rov-joystick-key-3",
      "p": [
        0.16,
        1.09,
        0.43
      ],
      "s": [
        0.048,
        0.07,
        0.048
      ],
      "c": 15325113
    },
    {
      "t": "cylinder",
      "n": "deep-sea-rov-pilot-rov-joystick-key-4",
      "p": [
        0.32,
        1.09,
        0.43
      ],
      "s": [
        0.048,
        0.07,
        0.048
      ],
      "c": 15325113
    },
    {
      "t": "cylinder",
      "n": "deep-sea-rov-pilot-rov-joystick-key-5",
      "p": [
        0.48,
        1.09,
        0.43
      ],
      "s": [
        0.048,
        0.07,
        0.048
      ],
      "c": 15325113
    },
    {
      "t": "box",
      "n": "deep-sea-rov-pilot-waterproof-marine-vest",
      "p": [
        0,
        1.24,
        0.18
      ],
      "s": [
        0.43,
        0.47,
        0.05
      ],
      "c": 3756393
    }
  ]
}); }
