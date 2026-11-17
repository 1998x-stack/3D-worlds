import { buildRecipe } from './recipe_engine.js';
/** Modular Loft Bunk Bed / 模块化高架双层床: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "furniture.modular-loft-bunk-bed.001",
  "slug": "modular-loft-bunk-bed",
  "title": "Modular Loft Bunk Bed",
  "title_zh": "模块化高架双层床",
  "summary": "Twin loft sleeping frames with safety rails, under-bed storage and access ladder",
  "category": "furniture",
  "tags": [
    "modular",
    "loft",
    "bunk",
    "bed",
    "furniture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.2,
    2.15,
    1.25
  ],
  "generator": "createModularLoftBunkBed",
  "source_path": "src/models/modular_loft_bunk_bed.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/modular-loft-bunk-bed.webp",
  "accent": "#b9a27e"
};
export function createModularLoftBunkBed() { return buildRecipe({
  "title": "Modular Loft Bunk Bed",
  "dimensions": [
    2.2,
    2.15,
    1.25
  ],
  "parts": [
    {
      "t": "box",
      "n": "bed-platform-0",
      "p": [
        0,
        0.7,
        0
      ],
      "s": [
        1.85,
        0.15,
        1.03
      ],
      "c": 5598068
    },
    {
      "t": "box",
      "n": "mattress-0",
      "p": [
        0,
        0.85,
        0
      ],
      "s": [
        1.76,
        0.14,
        0.9
      ],
      "c": 15062968
    },
    {
      "t": "box",
      "n": "pillow-0",
      "p": [
        -0.68,
        0.95,
        0
      ],
      "s": [
        0.3,
        0.1,
        0.56
      ],
      "c": 4998465
    },
    {
      "t": "box",
      "n": "bed-platform-1",
      "p": [
        0,
        1.72,
        0
      ],
      "s": [
        1.85,
        0.15,
        1.03
      ],
      "c": 5598068
    },
    {
      "t": "box",
      "n": "mattress-1",
      "p": [
        0,
        1.87,
        0
      ],
      "s": [
        1.76,
        0.14,
        0.9
      ],
      "c": 15062968
    },
    {
      "t": "box",
      "n": "pillow-1",
      "p": [
        -0.68,
        1.97,
        0
      ],
      "s": [
        0.3,
        0.1,
        0.56
      ],
      "c": 4998465
    },
    {
      "t": "box",
      "n": "bed-upright--0.9--0.5",
      "p": [
        -0.9,
        1.02,
        -0.5
      ],
      "s": [
        0.1,
        2.04,
        0.1
      ],
      "c": 12165758
    },
    {
      "t": "box",
      "n": "bed-upright--0.9-0.5",
      "p": [
        -0.9,
        1.02,
        0.5
      ],
      "s": [
        0.1,
        2.04,
        0.1
      ],
      "c": 12165758
    },
    {
      "t": "box",
      "n": "bed-upright-0.9--0.5",
      "p": [
        0.9,
        1.02,
        -0.5
      ],
      "s": [
        0.1,
        2.04,
        0.1
      ],
      "c": 12165758
    },
    {
      "t": "box",
      "n": "bed-upright-0.9-0.5",
      "p": [
        0.9,
        1.02,
        0.5
      ],
      "s": [
        0.1,
        2.04,
        0.1
      ],
      "c": 12165758
    },
    {
      "t": "box",
      "n": "ladder-step-0",
      "p": [
        1.02,
        0.34,
        0.52
      ],
      "s": [
        0.36,
        0.04,
        0.08
      ],
      "c": 5598068
    },
    {
      "t": "box",
      "n": "ladder-step-1",
      "p": [
        1.02,
        0.67,
        0.52
      ],
      "s": [
        0.36,
        0.04,
        0.08
      ],
      "c": 5598068
    },
    {
      "t": "box",
      "n": "ladder-step-2",
      "p": [
        1.02,
        1,
        0.52
      ],
      "s": [
        0.36,
        0.04,
        0.08
      ],
      "c": 5598068
    },
    {
      "t": "box",
      "n": "ladder-step-3",
      "p": [
        1.02,
        1.33,
        0.52
      ],
      "s": [
        0.36,
        0.04,
        0.08
      ],
      "c": 5598068
    },
    {
      "t": "box",
      "n": "ladder-step-4",
      "p": [
        1.02,
        1.6600000000000001,
        0.52
      ],
      "s": [
        0.36,
        0.04,
        0.08
      ],
      "c": 5598068
    },
    {
      "t": "box",
      "n": "safety-rail-1.88",
      "p": [
        0,
        1.88,
        0.51
      ],
      "s": [
        1.95,
        0.045,
        0.045
      ],
      "c": 5598068
    },
    {
      "t": "box",
      "n": "safety-rail-2.06",
      "p": [
        0,
        2.06,
        0.51
      ],
      "s": [
        1.95,
        0.045,
        0.045
      ],
      "c": 5598068
    },
    {
      "t": "box",
      "n": "underbed-drawer",
      "p": [
        0,
        0.23,
        0.15
      ],
      "s": [
        1.43,
        0.34,
        0.68
      ],
      "c": 4998465
    }
  ]
}); }
