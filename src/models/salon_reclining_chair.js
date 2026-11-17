import { buildRecipe } from './recipe_engine.js';
/** Salon Reclining Chair: original editable Y-up, meter-scale model. */
export const assetMeta = {
  "id": "furniture.salon-reclining-chair.001",
  "slug": "salon-reclining-chair",
  "title": "Salon Reclining Chair",
  "title_zh": "美发沙龙可调座椅",
  "summary": "Swivel salon chair with hydraulic pedestal, tilting back and foot support",
  "category": "furniture",
  "tags": [
    "salon",
    "chair",
    "swivel"
  ],
  "dimensions_m": [
    1.15,
    1.64,
    1.13
  ],
  "generator": "createSalonRecliningChair",
  "source_path": "src/models/salon_reclining_chair.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/salon-reclining-chair.webp"
};
export function createSalonRecliningChair() { return buildRecipe({
  "title": "Salon Reclining Chair",
  "dimensions": [
    1.15,
    1.64,
    1.13
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "pedestal",
      "p": [
        0,
        0.1,
        0
      ],
      "s": [
        0.67,
        0.14,
        0.64
      ],
      "c": 3620935
    },
    {
      "t": "cylinder",
      "n": "hydraulic-pillar",
      "p": [
        0,
        0.41,
        0
      ],
      "s": [
        0.13,
        0.55,
        0.13
      ],
      "c": 9609892
    },
    {
      "t": "cylinder",
      "n": "bearing",
      "p": [
        0,
        0.7,
        0
      ],
      "s": [
        0.34,
        0.13,
        0.34
      ],
      "c": 13149293
    },
    {
      "t": "box",
      "n": "seat",
      "p": [
        0,
        0.81,
        0.05
      ],
      "s": [
        0.94,
        0.22,
        0.84
      ],
      "c": 11769757
    },
    {
      "t": "box",
      "n": "back-cushion",
      "p": [
        0,
        1.26,
        -0.39
      ],
      "s": [
        0.88,
        0.65,
        0.2
      ],
      "c": 8678785,
      "rot": [
        -0.2,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "headrest",
      "p": [
        0,
        1.58,
        -0.48
      ],
      "s": [
        0.46,
        0.18,
        0.18
      ],
      "c": 12034733
    },
    {
      "t": "box",
      "n": "padded-arm-0",
      "p": [
        -0.5,
        1.06,
        0.08
      ],
      "s": [
        0.13,
        0.15,
        0.67
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "padded-arm-1",
      "p": [
        0.5,
        1.06,
        0.08
      ],
      "s": [
        0.13,
        0.15,
        0.67
      ],
      "c": 3620935
    },
    {
      "t": "rod",
      "n": "arm-pole-0",
      "from": [
        -0.5,
        0.82,
        0.06
      ],
      "to": [
        -0.5,
        1.04,
        0.06
      ],
      "r": 0.027,
      "c": 9609892
    },
    {
      "t": "rod",
      "n": "arm-pole-1",
      "from": [
        0.5,
        0.82,
        0.06
      ],
      "to": [
        0.5,
        1.04,
        0.06
      ],
      "r": 0.027,
      "c": 9609892
    },
    {
      "t": "box",
      "n": "tilt-footrest",
      "p": [
        0,
        0.48,
        0.6
      ],
      "s": [
        0.7,
        0.12,
        0.49
      ],
      "c": 3620935,
      "rot": [
        -0.27,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "recline-lever",
      "from": [
        0.47,
        0.69,
        0
      ],
      "to": [
        0.64,
        0.62,
        0.02
      ],
      "r": 0.023,
      "c": 9609892
    },
    {
      "t": "sphere",
      "n": "lever-tip",
      "p": [
        0.64,
        0.62,
        0.02
      ],
      "s": [
        0.05,
        0.05,
        0.04
      ],
      "c": 13149293
    },
    {
      "t": "sphere",
      "n": "back-tuft-0",
      "p": [
        -0.26,
        1.16,
        -0.28
      ],
      "s": [
        0.035,
        0.035,
        0.017
      ],
      "c": 6837608
    },
    {
      "t": "sphere",
      "n": "back-tuft-1",
      "p": [
        0,
        1.16,
        -0.28
      ],
      "s": [
        0.035,
        0.035,
        0.017
      ],
      "c": 6837608
    },
    {
      "t": "sphere",
      "n": "back-tuft-2",
      "p": [
        0.26,
        1.16,
        -0.28
      ],
      "s": [
        0.035,
        0.035,
        0.017
      ],
      "c": 6837608
    },
    {
      "t": "sphere",
      "n": "back-tuft-3",
      "p": [
        -0.26,
        1.39,
        -0.28
      ],
      "s": [
        0.035,
        0.035,
        0.017
      ],
      "c": 6837608
    },
    {
      "t": "sphere",
      "n": "back-tuft-4",
      "p": [
        0,
        1.39,
        -0.28
      ],
      "s": [
        0.035,
        0.035,
        0.017
      ],
      "c": 6837608
    },
    {
      "t": "sphere",
      "n": "back-tuft-5",
      "p": [
        0.26,
        1.39,
        -0.28
      ],
      "s": [
        0.035,
        0.035,
        0.017
      ],
      "c": 6837608
    }
  ]
}); }
