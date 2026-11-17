import { buildRecipe } from './recipe_engine.js';
/** Urban Cyclist Mannequin: original editable Y-up, meter-scale model. */
export const assetMeta = {
  "id": "characters.urban-cyclist-mannequin.001",
  "slug": "urban-cyclist-mannequin",
  "title": "Urban Cyclist Mannequin",
  "title_zh": "城市骑行者人物原型",
  "summary": "Unrigged cyclist in protective helmet, hi-vis jersey, bike glasses and water bottle",
  "category": "characters",
  "tags": [
    "cyclist",
    "helmet",
    "commuter"
  ],
  "dimensions_m": [
    1.13,
    1.88,
    0.91
  ],
  "generator": "createUrbanCyclistMannequin",
  "source_path": "src/models/urban_cyclist_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/urban-cyclist-mannequin.webp"
};
export function createUrbanCyclistMannequin() { return buildRecipe({
  "title": "Urban Cyclist Mannequin",
  "dimensions": [
    1.13,
    1.88,
    0.91
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "torso",
      "p": [
        0,
        1.15,
        0
      ],
      "s": [
        0.6,
        0.75,
        0.42
      ],
      "c": 13805165
    },
    {
      "t": "sphere",
      "n": "head",
      "p": [
        0,
        1.7,
        0
      ],
      "s": [
        0.33,
        0.32,
        0.3
      ],
      "c": 13149579
    },
    {
      "t": "rod",
      "n": "sleeve-0",
      "from": [
        -0.34,
        1.4,
        0
      ],
      "to": [
        -0.42,
        0.94,
        0.02
      ],
      "r": 0.11,
      "c": 13805165
    },
    {
      "t": "sphere",
      "n": "hand-0",
      "p": [
        -0.43,
        0.88,
        0.02
      ],
      "s": [
        0.12,
        0.11,
        0.11
      ],
      "c": 13149579
    },
    {
      "t": "rod",
      "n": "leg-0",
      "from": [
        -0.18,
        0.85,
        0
      ],
      "to": [
        -0.2,
        0.2,
        0
      ],
      "r": 0.14,
      "c": 3620935
    },
    {
      "t": "box",
      "n": "shoe-0",
      "p": [
        -0.2,
        0.11,
        0.12
      ],
      "s": [
        0.28,
        0.21,
        0.34
      ],
      "c": 3620935
    },
    {
      "t": "rod",
      "n": "sleeve-1",
      "from": [
        0.34,
        1.4,
        0
      ],
      "to": [
        0.42,
        0.94,
        0.02
      ],
      "r": 0.11,
      "c": 13805165
    },
    {
      "t": "sphere",
      "n": "hand-1",
      "p": [
        0.43,
        0.88,
        0.02
      ],
      "s": [
        0.12,
        0.11,
        0.11
      ],
      "c": 13149579
    },
    {
      "t": "rod",
      "n": "leg-1",
      "from": [
        0.18,
        0.85,
        0
      ],
      "to": [
        0.2,
        0.2,
        0
      ],
      "r": 0.14,
      "c": 3620935
    },
    {
      "t": "box",
      "n": "shoe-1",
      "p": [
        0.2,
        0.11,
        0.12
      ],
      "s": [
        0.28,
        0.21,
        0.34
      ],
      "c": 3620935
    },
    {
      "t": "cylinder",
      "n": "bike-helmet",
      "p": [
        0,
        1.86,
        0
      ],
      "s": [
        0.43,
        0.18,
        0.42
      ],
      "c": 6195618
    },
    {
      "t": "box",
      "n": "helmet-vent-0",
      "p": [
        -0.24,
        1.95,
        0.03
      ],
      "s": [
        0.045,
        0.028,
        0.21
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "helmet-vent-1",
      "p": [
        -0.145,
        1.95,
        0.03
      ],
      "s": [
        0.045,
        0.028,
        0.21
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "helmet-vent-2",
      "p": [
        -0.04999999999999999,
        1.95,
        0.03
      ],
      "s": [
        0.045,
        0.028,
        0.21
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "helmet-vent-3",
      "p": [
        0.04500000000000004,
        1.95,
        0.03
      ],
      "s": [
        0.045,
        0.028,
        0.21
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "helmet-vent-4",
      "p": [
        0.14,
        1.95,
        0.03
      ],
      "s": [
        0.045,
        0.028,
        0.21
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "helmet-vent-5",
      "p": [
        0.235,
        1.95,
        0.03
      ],
      "s": [
        0.045,
        0.028,
        0.21
      ],
      "c": 3620935
    },
    {
      "t": "rod",
      "n": "chin-strap",
      "from": [
        -0.25,
        1.72,
        0.11
      ],
      "to": [
        0.25,
        1.6,
        0.11
      ],
      "r": 0.016,
      "c": 3620935
    },
    {
      "t": "box",
      "n": "eye-shades",
      "p": [
        0,
        1.71,
        0.32
      ],
      "s": [
        0.45,
        0.105,
        0.024
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "hi-vis-stripe",
      "p": [
        0,
        1.25,
        0.244
      ],
      "s": [
        0.46,
        0.08,
        0.017
      ],
      "c": 15263198
    },
    {
      "t": "box",
      "n": "sports-bottle",
      "p": [
        0.44,
        0.92,
        0.18
      ],
      "s": [
        0.15,
        0.34,
        0.14
      ],
      "c": 7445116
    },
    {
      "t": "cylinder",
      "n": "bottle-lid",
      "p": [
        0.44,
        1.1,
        0.18
      ],
      "s": [
        0.11,
        0.06,
        0.11
      ],
      "c": 3620935
    },
    {
      "t": "rod",
      "n": "sling-strap",
      "from": [
        -0.22,
        1.48,
        0.23
      ],
      "to": [
        0.44,
        0.9,
        0.18
      ],
      "r": 0.02,
      "c": 3620935
    },
    {
      "t": "box",
      "n": "jersey-zipper",
      "p": [
        0,
        1.2,
        0.258
      ],
      "s": [
        0.015,
        0.4,
        0.011
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "helmet-side-marker-0",
      "p": [
        -0.2,
        1.85,
        0.2
      ],
      "s": [
        0.08,
        0.04,
        0.018
      ],
      "c": 13149293
    },
    {
      "t": "box",
      "n": "helmet-side-marker-1",
      "p": [
        0.2,
        1.85,
        0.2
      ],
      "s": [
        0.08,
        0.04,
        0.018
      ],
      "c": 13149293
    }
  ]
}); }
