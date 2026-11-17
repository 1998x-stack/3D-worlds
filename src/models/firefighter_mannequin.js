import { buildRecipe } from './recipe_engine.js';

/** Original authored Firefighter Mannequin / 消防员人物原型; stylized, unrigged scene model. */
export const assetMeta = {
  "id": "characters.firefighter-mannequin.001",
  "slug": "firefighter-mannequin",
  "title": "Firefighter Mannequin",
  "title_zh": "消防员人物原型",
  "summary": "Unrigged firefighter with protective helmet, reflective jacket, boots and oxygen tank.",
  "category": "characters",
  "tags": [
    "firefighter",
    "safety",
    "uniform",
    "character"
  ],
  "dimensions_m": [
    0.95,
    1.91,
    0.65
  ],
  "generator": "createFirefighterMannequin",
  "source_path": "src/models/firefighter_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/firefighter-mannequin.webp"
};
export function createFirefighterMannequin() {
  return buildRecipe({
  "title": "Firefighter Mannequin",
  "dimensions": [
    0.95,
    1.91,
    0.65
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "uniform-torso",
      "p": [
        0,
        1.15,
        0
      ],
      "s": [
        0.58,
        0.69,
        0.4
      ],
      "c": 11635543
    },
    {
      "t": "sphere",
      "n": "helmet",
      "p": [
        0,
        1.69,
        0
      ],
      "s": [
        0.4,
        0.35,
        0.38
      ],
      "c": 12819522
    },
    {
      "t": "cylinder",
      "n": "helmet-brim",
      "p": [
        0,
        1.62,
        0
      ],
      "s": [
        0.54,
        0.055,
        0.5
      ],
      "c": 12555318
    },
    {
      "t": "box",
      "n": "helmet-badge",
      "p": [
        0,
        1.71,
        0.35
      ],
      "s": [
        0.19,
        0.16,
        0.027
      ],
      "c": 9213593
    },
    {
      "t": "box",
      "n": "visor",
      "p": [
        0,
        1.58,
        0.35
      ],
      "s": [
        0.35,
        0.13,
        0.025
      ],
      "c": 5536657
    },
    {
      "t": "box",
      "n": "air-cylinder",
      "p": [
        0,
        1.12,
        -0.31
      ],
      "s": [
        0.27,
        0.56,
        0.22
      ],
      "c": 9213593
    },
    {
      "t": "rod",
      "n": "sleeve-0",
      "from": [
        -0.34,
        1.38,
        0
      ],
      "to": [
        -0.41,
        0.93,
        0
      ],
      "r": 0.125,
      "c": 12096086
    },
    {
      "t": "sphere",
      "n": "glove-0",
      "p": [
        -0.42,
        0.88,
        0.04
      ],
      "s": [
        0.14,
        0.12,
        0.13
      ],
      "c": 3422268
    },
    {
      "t": "rod",
      "n": "fire-pant-leg-0",
      "from": [
        -0.19,
        0.87,
        0
      ],
      "to": [
        -0.21,
        0.23,
        0
      ],
      "r": 0.15,
      "c": 9206110
    },
    {
      "t": "box",
      "n": "boot-0",
      "p": [
        -0.21,
        0.12,
        0.1
      ],
      "s": [
        0.29,
        0.24,
        0.35
      ],
      "c": 3422268
    },
    {
      "t": "box",
      "n": "reflective-arm-band-0",
      "p": [
        -0.39,
        1,
        0.04
      ],
      "s": [
        0.22,
        0.06,
        0.23
      ],
      "c": 15459257
    },
    {
      "t": "rod",
      "n": "sleeve-1",
      "from": [
        0.34,
        1.38,
        0
      ],
      "to": [
        0.41,
        0.93,
        0
      ],
      "r": 0.125,
      "c": 12096086
    },
    {
      "t": "sphere",
      "n": "glove-1",
      "p": [
        0.42,
        0.88,
        0.04
      ],
      "s": [
        0.14,
        0.12,
        0.13
      ],
      "c": 3422268
    },
    {
      "t": "rod",
      "n": "fire-pant-leg-1",
      "from": [
        0.19,
        0.87,
        0
      ],
      "to": [
        0.21,
        0.23,
        0
      ],
      "r": 0.15,
      "c": 9206110
    },
    {
      "t": "box",
      "n": "boot-1",
      "p": [
        0.21,
        0.12,
        0.1
      ],
      "s": [
        0.29,
        0.24,
        0.35
      ],
      "c": 3422268
    },
    {
      "t": "box",
      "n": "reflective-arm-band-1",
      "p": [
        0.39,
        1,
        0.04
      ],
      "s": [
        0.22,
        0.06,
        0.23
      ],
      "c": 15459257
    },
    {
      "t": "box",
      "n": "chest-reflector-0",
      "p": [
        0,
        1.23,
        0.22
      ],
      "s": [
        0.46,
        0.065,
        0.022
      ],
      "c": 15065787
    },
    {
      "t": "box",
      "n": "chest-reflector-1",
      "p": [
        0,
        0.98,
        0.22
      ],
      "s": [
        0.46,
        0.065,
        0.022
      ],
      "c": 15065787
    },
    {
      "t": "box",
      "n": "name-patch",
      "p": [
        0,
        1.45,
        0.223
      ],
      "s": [
        0.26,
        0.074,
        0.016
      ],
      "c": 3422268
    }
  ]
});
}
