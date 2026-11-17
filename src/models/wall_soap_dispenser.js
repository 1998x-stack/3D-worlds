import { buildRecipe } from './recipe_engine.js';

/** Original authored Wall Soap Dispenser / 壁挂皂液机; stylized, unrigged scene model. */
export const assetMeta = {
  "id": "bathroom.wall-soap-dispenser.001",
  "slug": "wall-soap-dispenser",
  "title": "Wall Soap Dispenser",
  "title_zh": "壁挂皂液机",
  "summary": "Wall-mounted refillable dispenser with pump head, translucent reservoir and drip tray.",
  "category": "bathroom",
  "tags": [
    "soap",
    "dispenser",
    "wall",
    "washroom"
  ],
  "dimensions_m": [
    0.19,
    0.31,
    0.17
  ],
  "generator": "createWallSoapDispenser",
  "source_path": "src/models/wall_soap_dispenser.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/wall-soap-dispenser.webp"
};
export function createWallSoapDispenser() {
  return buildRecipe({
  "title": "Wall Soap Dispenser",
  "dimensions": [
    0.19,
    0.31,
    0.17
  ],
  "parts": [
    {
      "t": "box",
      "n": "rear-plate",
      "p": [
        0,
        0.17,
        -0.052
      ],
      "s": [
        0.17,
        0.28,
        0.036
      ],
      "c": 9213593
    },
    {
      "t": "box",
      "n": "reservoir",
      "p": [
        0,
        0.15,
        0.01
      ],
      "s": [
        0.155,
        0.21,
        0.13
      ],
      "c": 10010807
    },
    {
      "t": "box",
      "n": "window",
      "p": [
        0,
        0.19,
        0.078
      ],
      "s": [
        0.072,
        0.12,
        0.008
      ],
      "c": 14213075
    },
    {
      "t": "cylinder",
      "n": "neck",
      "p": [
        0,
        0.27,
        0
      ],
      "s": [
        0.07,
        0.06,
        0.07
      ],
      "c": 15263711
    },
    {
      "t": "box",
      "n": "pump-arm",
      "p": [
        0.042,
        0.305,
        0.015
      ],
      "s": [
        0.13,
        0.03,
        0.052
      ],
      "c": 3422268
    },
    {
      "t": "cylinder",
      "n": "pump-cap",
      "p": [
        0,
        0.288,
        0
      ],
      "s": [
        0.115,
        0.034,
        0.1
      ],
      "c": 9213593
    },
    {
      "t": "box",
      "n": "drip-tray",
      "p": [
        0,
        0.035,
        0.06
      ],
      "s": [
        0.18,
        0.025,
        0.17
      ],
      "c": 9213593
    },
    {
      "t": "box",
      "n": "dispenser-label",
      "p": [
        0,
        0.13,
        0.084
      ],
      "s": [
        0.095,
        0.044,
        0.008
      ],
      "c": 15263711
    }
  ]
});
}
