import { buildRecipe } from './recipe_engine.js';
/** Folding Event Chair Stack / 折叠会场座椅组合: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "furniture.folding-event-chair-stack.001",
  "slug": "folding-event-chair-stack",
  "title": "Folding Event Chair Stack",
  "title_zh": "折叠会场座椅组合",
  "summary": "Three folding conference chairs with angled steel frames and padded seats",
  "category": "furniture",
  "tags": [
    "folding",
    "event",
    "chair",
    "stack",
    "furniture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.2,
    1.26,
    1.12
  ],
  "generator": "createFoldingEventChairStack",
  "source_path": "src/models/folding_event_chair_stack.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/folding-event-chair-stack.webp",
  "accent": "#e5d7b8"
};
export function createFoldingEventChairStack() { return buildRecipe({
  "title": "Folding Event Chair Stack",
  "dimensions": [
    1.2,
    1.26,
    1.12
  ],
  "parts": [
    {
      "t": "box",
      "n": "chair-seat-0",
      "p": [
        -0.4,
        0.64,
        0
      ],
      "s": [
        0.34,
        0.07,
        0.37
      ],
      "c": 15062968
    },
    {
      "t": "box",
      "n": "chair-back-0",
      "p": [
        -0.4,
        0.99,
        -0.17
      ],
      "s": [
        0.33,
        0.5,
        0.06
      ],
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "chair-front-leg-0--1",
      "from": [
        -0.55,
        0.64,
        0.14
      ],
      "to": [
        -0.5900000000000001,
        0.06,
        0.21
      ],
      "r": 0.025,
      "c": 5598068
    },
    {
      "t": "rod",
      "n": "chair-back-leg-0--1",
      "from": [
        -0.55,
        0.96,
        -0.17
      ],
      "to": [
        -0.62,
        0.06,
        -0.24
      ],
      "r": 0.025,
      "c": 5598068
    },
    {
      "t": "rod",
      "n": "chair-front-leg-0-1",
      "from": [
        -0.25,
        0.64,
        0.14
      ],
      "to": [
        -0.21000000000000002,
        0.06,
        0.21
      ],
      "r": 0.025,
      "c": 5598068
    },
    {
      "t": "rod",
      "n": "chair-back-leg-0-1",
      "from": [
        -0.25,
        0.96,
        -0.17
      ],
      "to": [
        -0.18000000000000002,
        0.06,
        -0.24
      ],
      "r": 0.025,
      "c": 5598068
    },
    {
      "t": "rod",
      "n": "chair-fold-brace-0",
      "from": [
        -0.5700000000000001,
        0.48,
        -0.14
      ],
      "to": [
        -0.23,
        0.38,
        0.14
      ],
      "r": 0.023,
      "c": 4998465
    },
    {
      "t": "box",
      "n": "chair-seat-1",
      "p": [
        0,
        0.64,
        0.1
      ],
      "s": [
        0.34,
        0.07,
        0.37
      ],
      "c": 15062968
    },
    {
      "t": "box",
      "n": "chair-back-1",
      "p": [
        0,
        0.99,
        -0.07
      ],
      "s": [
        0.33,
        0.5,
        0.06
      ],
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "chair-front-leg-1--1",
      "from": [
        -0.15,
        0.64,
        0.24000000000000002
      ],
      "to": [
        -0.19,
        0.06,
        0.31
      ],
      "r": 0.025,
      "c": 5598068
    },
    {
      "t": "rod",
      "n": "chair-back-leg-1--1",
      "from": [
        -0.15,
        0.96,
        -0.07
      ],
      "to": [
        -0.22,
        0.06,
        -0.13999999999999999
      ],
      "r": 0.025,
      "c": 5598068
    },
    {
      "t": "rod",
      "n": "chair-front-leg-1-1",
      "from": [
        0.15,
        0.64,
        0.24000000000000002
      ],
      "to": [
        0.19,
        0.06,
        0.31
      ],
      "r": 0.025,
      "c": 5598068
    },
    {
      "t": "rod",
      "n": "chair-back-leg-1-1",
      "from": [
        0.15,
        0.96,
        -0.07
      ],
      "to": [
        0.22,
        0.06,
        -0.13999999999999999
      ],
      "r": 0.025,
      "c": 5598068
    },
    {
      "t": "rod",
      "n": "chair-fold-brace-1",
      "from": [
        -0.17,
        0.48,
        -0.04000000000000001
      ],
      "to": [
        0.17,
        0.38,
        0.24000000000000002
      ],
      "r": 0.023,
      "c": 4998465
    },
    {
      "t": "box",
      "n": "chair-seat-2",
      "p": [
        0.4,
        0.64,
        0.2
      ],
      "s": [
        0.34,
        0.07,
        0.37
      ],
      "c": 15062968
    },
    {
      "t": "box",
      "n": "chair-back-2",
      "p": [
        0.4,
        0.99,
        0.03
      ],
      "s": [
        0.33,
        0.5,
        0.06
      ],
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "chair-front-leg-2--1",
      "from": [
        0.25,
        0.64,
        0.34
      ],
      "to": [
        0.21000000000000002,
        0.06,
        0.41000000000000003
      ],
      "r": 0.025,
      "c": 5598068
    },
    {
      "t": "rod",
      "n": "chair-back-leg-2--1",
      "from": [
        0.25,
        0.96,
        0.03
      ],
      "to": [
        0.18000000000000002,
        0.06,
        -0.03999999999999998
      ],
      "r": 0.025,
      "c": 5598068
    },
    {
      "t": "rod",
      "n": "chair-front-leg-2-1",
      "from": [
        0.55,
        0.64,
        0.34
      ],
      "to": [
        0.5900000000000001,
        0.06,
        0.41000000000000003
      ],
      "r": 0.025,
      "c": 5598068
    },
    {
      "t": "rod",
      "n": "chair-back-leg-2-1",
      "from": [
        0.55,
        0.96,
        0.03
      ],
      "to": [
        0.62,
        0.06,
        -0.03999999999999998
      ],
      "r": 0.025,
      "c": 5598068
    },
    {
      "t": "rod",
      "n": "chair-fold-brace-2",
      "from": [
        0.23,
        0.48,
        0.06
      ],
      "to": [
        0.5700000000000001,
        0.38,
        0.34
      ],
      "r": 0.023,
      "c": 4998465
    }
  ]
}); }
