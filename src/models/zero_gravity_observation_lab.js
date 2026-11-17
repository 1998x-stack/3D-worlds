import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Zero Gravity Observation Lab / 零重力观测实验舱. */
export const assetMeta = {
  "id": "scifi.zero-gravity-observation-lab.001",
  "slug": "zero-gravity-observation-lab",
  "title": "Zero Gravity Observation Lab",
  "title_zh": "零重力观测实验舱",
  "summary": "Nonweapon space observation laboratory with viewport ring and instrument workstations",
  "category": "scifi",
  "tags": [
    "zero",
    "gravity",
    "observation",
    "lab",
    "scifi",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.25,
    3.1,
    2.8
  ],
  "generator": "createZeroGravityObservationLab",
  "source_path": "src/models/zero_gravity_observation_lab.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/zero-gravity-observation-lab.webp",
  "accent": "#98d5ce"
};
export function createZeroGravityObservationLab() { return buildRecipe({
  "title": "Zero Gravity Observation Lab",
  "dimensions": [
    3.25,
    3.1,
    2.8
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "zero-gravity-lab-pressure-core",
      "p": [
        0,
        1.34,
        0
      ],
      "s": [
        2.42,
        2.53,
        2.21
      ],
      "c": 6388125
    },
    {
      "t": "torus",
      "n": "observation-viewport-ring",
      "p": [
        0,
        1.58,
        1.03
      ],
      "s": [
        2.3,
        2.3,
        0.16
      ],
      "c": 10016206
    },
    {
      "t": "sphere",
      "n": "panoramic-viewport",
      "p": [
        0,
        1.57,
        1.18
      ],
      "s": [
        1.29,
        1.25,
        0.16
      ],
      "c": 3752031
    },
    {
      "t": "rod",
      "n": "lab-observation-console-arm-0",
      "from": [
        0.68,
        0.88,
        0
      ],
      "to": [
        1.07,
        1.56,
        0
      ],
      "r": 0.045,
      "c": 12760807
    },
    {
      "t": "box",
      "n": "floating-instrument-display-0",
      "p": [
        1,
        1.58,
        0
      ],
      "s": [
        0.28,
        0.35,
        0.08
      ],
      "c": 10016206
    },
    {
      "t": "rod",
      "n": "lab-observation-console-arm-1",
      "from": [
        0.4808326112068524,
        0.88,
        0.45254833995939037
      ],
      "to": [
        0.756604255869606,
        1.56,
        0.565685424949238
      ],
      "r": 0.045,
      "c": 12760807
    },
    {
      "t": "box",
      "n": "floating-instrument-display-1",
      "p": [
        0.7071067811865476,
        1.58,
        0.565685424949238
      ],
      "s": [
        0.28,
        0.35,
        0.08
      ],
      "c": 10016206
    },
    {
      "t": "rod",
      "n": "lab-observation-console-arm-2",
      "from": [
        4.163799117101001e-17,
        0.88,
        0.64
      ],
      "to": [
        6.55186037543834e-17,
        1.56,
        0.8
      ],
      "r": 0.045,
      "c": 12760807
    },
    {
      "t": "box",
      "n": "floating-instrument-display-2",
      "p": [
        6.123233995736766e-17,
        1.58,
        0.8
      ],
      "s": [
        0.28,
        0.35,
        0.08
      ],
      "c": 10016206
    },
    {
      "t": "rod",
      "n": "lab-observation-console-arm-3",
      "from": [
        -0.48083261120685233,
        0.88,
        0.4525483399593905
      ],
      "to": [
        -0.7566042558696058,
        1.56,
        0.5656854249492381
      ],
      "r": 0.045,
      "c": 12760807
    },
    {
      "t": "box",
      "n": "floating-instrument-display-3",
      "p": [
        -0.7071067811865475,
        1.58,
        0.5656854249492381
      ],
      "s": [
        0.28,
        0.35,
        0.08
      ],
      "c": 10016206
    },
    {
      "t": "rod",
      "n": "lab-observation-console-arm-4",
      "from": [
        -0.68,
        0.88,
        7.83773951454306e-17
      ],
      "to": [
        -1.07,
        1.56,
        9.797174393178826e-17
      ],
      "r": 0.045,
      "c": 12760807
    },
    {
      "t": "box",
      "n": "floating-instrument-display-4",
      "p": [
        -1,
        1.58,
        9.797174393178826e-17
      ],
      "s": [
        0.28,
        0.35,
        0.08
      ],
      "c": 10016206
    },
    {
      "t": "rod",
      "n": "lab-observation-console-arm-5",
      "from": [
        -0.48083261120685244,
        0.88,
        -0.45254833995939037
      ],
      "to": [
        -0.7566042558696061,
        1.56,
        -0.565685424949238
      ],
      "r": 0.045,
      "c": 12760807
    },
    {
      "t": "box",
      "n": "floating-instrument-display-5",
      "p": [
        -0.7071067811865477,
        1.58,
        -0.565685424949238
      ],
      "s": [
        0.28,
        0.35,
        0.08
      ],
      "c": 10016206
    },
    {
      "t": "rod",
      "n": "lab-observation-console-arm-6",
      "from": [
        -1.2491397351303002e-16,
        0.88,
        -0.64
      ],
      "to": [
        -1.9655581126315019e-16,
        1.56,
        -0.8
      ],
      "r": 0.045,
      "c": 12760807
    },
    {
      "t": "box",
      "n": "floating-instrument-display-6",
      "p": [
        -1.8369701987210297e-16,
        1.58,
        -0.8
      ],
      "s": [
        0.28,
        0.35,
        0.08
      ],
      "c": 10016206
    },
    {
      "t": "rod",
      "n": "lab-observation-console-arm-7",
      "from": [
        0.4808326112068522,
        0.88,
        -0.45254833995939053
      ],
      "to": [
        0.7566042558696057,
        1.56,
        -0.5656854249492381
      ],
      "r": 0.045,
      "c": 12760807
    },
    {
      "t": "box",
      "n": "floating-instrument-display-7",
      "p": [
        0.7071067811865474,
        1.58,
        -0.5656854249492381
      ],
      "s": [
        0.28,
        0.35,
        0.08
      ],
      "c": 10016206
    },
    {
      "t": "cylinder",
      "n": "anti-gravity-deck-anchor",
      "p": [
        0,
        0.22,
        0
      ],
      "s": [
        1.5,
        0.21,
        1.5
      ],
      "c": 12760807
    }
  ]
}); }
