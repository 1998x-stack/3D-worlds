import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "urban.roadside-safety-bollards.001",
  "slug": "roadside-safety-bollards",
  "title": "Roadside Safety Bollards",
  "title_zh": "道路安全防撞柱组",
  "summary": "Three heavy steel bollards with reflective yellow stripes.",
  "category": "urban",
  "tags": [
    "bollard",
    "barrier",
    "traffic"
  ],
  "dimensions_m": [
    1.73,
    0.94,
    0.46
  ],
  "generator": "createRoadsideSafetyBollards",
  "source_path": "src/models/roadside_safety_bollards.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/roadside-safety-bollards.webp"
};
export function createRoadsideSafetyBollards() {
 return buildRecipe({
  "title": "Roadside Safety Bollards",
  "dimensions": [
    1.73,
    0.94,
    0.46
  ],
  "parts": [
    {
      "t": "box",
      "n": "concrete-kerb",
      "p": [
        0,
        0.07,
        0
      ],
      "s": [
        1.72,
        0.14,
        0.45
      ],
      "c": 10923432
    },
    {
      "t": "cylinder",
      "n": "post-0",
      "p": [
        -0.61,
        0.48,
        0
      ],
      "s": [
        0.24,
        0.8,
        0.24
      ],
      "c": 5793644
    },
    {
      "t": "cylinder",
      "n": "cap-0",
      "p": [
        -0.61,
        0.91,
        0
      ],
      "s": [
        0.28,
        0.075,
        0.28
      ],
      "c": 3161155
    },
    {
      "t": "cylinder",
      "n": "upper-stripe-0",
      "p": [
        -0.61,
        0.72,
        0
      ],
      "s": [
        0.25,
        0.095,
        0.25
      ],
      "c": 14923361
    },
    {
      "t": "cylinder",
      "n": "lower-stripe-0",
      "p": [
        -0.61,
        0.41,
        0
      ],
      "s": [
        0.25,
        0.09,
        0.25
      ],
      "c": 14923361
    },
    {
      "t": "cylinder",
      "n": "base-collar-0",
      "p": [
        -0.61,
        0.155,
        0
      ],
      "s": [
        0.32,
        0.045,
        0.32
      ],
      "c": 9018268
    },
    {
      "t": "cylinder",
      "n": "post-1",
      "p": [
        0,
        0.48,
        0
      ],
      "s": [
        0.24,
        0.8,
        0.24
      ],
      "c": 5793644
    },
    {
      "t": "cylinder",
      "n": "cap-1",
      "p": [
        0,
        0.91,
        0
      ],
      "s": [
        0.28,
        0.075,
        0.28
      ],
      "c": 3161155
    },
    {
      "t": "cylinder",
      "n": "upper-stripe-1",
      "p": [
        0,
        0.72,
        0
      ],
      "s": [
        0.25,
        0.095,
        0.25
      ],
      "c": 14923361
    },
    {
      "t": "cylinder",
      "n": "lower-stripe-1",
      "p": [
        0,
        0.41,
        0
      ],
      "s": [
        0.25,
        0.09,
        0.25
      ],
      "c": 14923361
    },
    {
      "t": "cylinder",
      "n": "base-collar-1",
      "p": [
        0,
        0.155,
        0
      ],
      "s": [
        0.32,
        0.045,
        0.32
      ],
      "c": 9018268
    },
    {
      "t": "cylinder",
      "n": "post-2",
      "p": [
        0.61,
        0.48,
        0
      ],
      "s": [
        0.24,
        0.8,
        0.24
      ],
      "c": 5793644
    },
    {
      "t": "cylinder",
      "n": "cap-2",
      "p": [
        0.61,
        0.91,
        0
      ],
      "s": [
        0.28,
        0.075,
        0.28
      ],
      "c": 3161155
    },
    {
      "t": "cylinder",
      "n": "upper-stripe-2",
      "p": [
        0.61,
        0.72,
        0
      ],
      "s": [
        0.25,
        0.095,
        0.25
      ],
      "c": 14923361
    },
    {
      "t": "cylinder",
      "n": "lower-stripe-2",
      "p": [
        0.61,
        0.41,
        0
      ],
      "s": [
        0.25,
        0.09,
        0.25
      ],
      "c": 14923361
    },
    {
      "t": "cylinder",
      "n": "base-collar-2",
      "p": [
        0.61,
        0.155,
        0
      ],
      "s": [
        0.32,
        0.045,
        0.32
      ],
      "c": 9018268
    }
  ]
});
}
