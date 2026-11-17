import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "urban.pedestrian-crosswalk-sign.001",
  "slug": "pedestrian-crosswalk-sign",
  "title": "Pedestrian Crosswalk Sign",
  "title_zh": "人行横道标识牌",
  "summary": "Reflective street sign with pedestrian symbol and mounting post.",
  "category": "urban",
  "tags": [
    "crosswalk",
    "pedestrian",
    "sign"
  ],
  "dimensions_m": [
    0.84,
    2.68,
    0.3
  ],
  "generator": "createPedestrianCrosswalkSign",
  "source_path": "src/models/pedestrian_crosswalk_sign.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/pedestrian-crosswalk-sign.webp"
};
export function createPedestrianCrosswalkSign() {
 return buildRecipe({
  "title": "Pedestrian Crosswalk Sign",
  "dimensions": [
    0.84,
    2.68,
    0.3
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "ground-socket",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        0.3,
        0.16,
        0.3
      ],
      "c": 3161155
    },
    {
      "t": "cylinder",
      "n": "pole",
      "p": [
        0,
        1.14,
        0
      ],
      "s": [
        0.08,
        2.22,
        0.08
      ],
      "c": 9018268
    },
    {
      "t": "box",
      "n": "sign-frame",
      "p": [
        0,
        2.36,
        0.05
      ],
      "s": [
        0.84,
        0.64,
        0.08
      ],
      "c": 3161155
    },
    {
      "t": "box",
      "n": "blue-face",
      "p": [
        0,
        2.36,
        0.105
      ],
      "s": [
        0.76,
        0.56,
        0.015
      ],
      "c": 4492969
    },
    {
      "t": "box",
      "n": "white-panel",
      "p": [
        0,
        2.4,
        0.12
      ],
      "s": [
        0.56,
        0.37,
        0.014
      ],
      "c": 15591901
    },
    {
      "t": "sphere",
      "n": "walker-head",
      "p": [
        0,
        2.47,
        0.14
      ],
      "s": [
        0.07,
        0.07,
        0.014
      ],
      "c": 3161155
    },
    {
      "t": "rod",
      "n": "walker-torso",
      "from": [
        0,
        2.41,
        0.14
      ],
      "to": [
        0.06,
        2.28,
        0.14
      ],
      "r": 0.022,
      "c": 3161155
    },
    {
      "t": "rod",
      "n": "walker-leg-left",
      "from": [
        0.06,
        2.28,
        0.14
      ],
      "to": [
        -0.04,
        2.2,
        0.14
      ],
      "r": 0.02,
      "c": 3161155
    },
    {
      "t": "rod",
      "n": "walker-leg-right",
      "from": [
        0.06,
        2.28,
        0.14
      ],
      "to": [
        0.15,
        2.2,
        0.14
      ],
      "r": 0.02,
      "c": 3161155
    },
    {
      "t": "box",
      "n": "zebra-line-0",
      "p": [
        -0.17,
        2.16,
        0.145
      ],
      "s": [
        0.12,
        0.02,
        0.008
      ],
      "c": 15591901
    },
    {
      "t": "box",
      "n": "zebra-line-1",
      "p": [
        0,
        2.16,
        0.145
      ],
      "s": [
        0.12,
        0.02,
        0.008
      ],
      "c": 15591901
    },
    {
      "t": "box",
      "n": "zebra-line-2",
      "p": [
        0.17,
        2.16,
        0.145
      ],
      "s": [
        0.12,
        0.02,
        0.008
      ],
      "c": 15591901
    }
  ]
});
}
