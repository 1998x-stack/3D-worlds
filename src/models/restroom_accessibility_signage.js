import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Restroom Accessibility Signage / 无障碍卫生间导向标识组. */
export const assetMeta = {
  "id": "bathroom.restroom-accessibility-signage.001",
  "slug": "restroom-accessibility-signage",
  "title": "Restroom Accessibility Signage",
  "title_zh": "无障碍卫生间导向标识组",
  "summary": "Public restroom wayfinding post with raised tactile markers and accessibility symbol",
  "category": "bathroom",
  "tags": [
    "restroom",
    "accessibility",
    "signage",
    "bathroom",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.54,
    2.05,
    0.42
  ],
  "generator": "createRestroomAccessibilitySignage",
  "source_path": "src/models/restroom_accessibility_signage.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/restroom-accessibility-signage.webp",
  "accent": "#4a6b7d"
};
export function createRestroomAccessibilitySignage() { return buildRecipe({
  "title": "Restroom Accessibility Signage",
  "dimensions": [
    1.54,
    2.05,
    0.42
  ],
  "parts": [
    {
      "t": "box",
      "n": "wayfinding-floor-anchor",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        0.75,
        0.16,
        0.43
      ],
      "c": 8232356
    },
    {
      "t": "box",
      "n": "restroom-wayfinding-post",
      "p": [
        0,
        1,
        0
      ],
      "s": [
        0.16,
        1.9,
        0.17
      ],
      "c": 12964815
    },
    {
      "t": "box",
      "n": "accessible-wayfinding-sign",
      "p": [
        0,
        1.72,
        0.08
      ],
      "s": [
        1.29,
        0.47,
        0.1
      ],
      "c": 15199984
    },
    {
      "t": "sphere",
      "n": "accessibility-person-symbol",
      "p": [
        -0.38,
        1.84,
        0.15
      ],
      "s": [
        0.07,
        0.08,
        0.034
      ],
      "c": 4877181
    },
    {
      "t": "torus",
      "n": "accessibility-wheel-symbol",
      "p": [
        -0.35,
        1.61,
        0.15
      ],
      "s": [
        0.34,
        0.34,
        0.1
      ],
      "c": 4877181
    },
    {
      "t": "rod",
      "n": "symbol-arm",
      "from": [
        -0.36,
        1.74,
        0.15
      ],
      "to": [
        -0.23,
        1.64,
        0.15
      ],
      "r": 0.024,
      "c": 4877181
    },
    {
      "t": "box",
      "n": "directional-arrow",
      "p": [
        0.41,
        1.7,
        0.15
      ],
      "s": [
        0.24,
        0.08,
        0.03
      ],
      "c": 4877181
    },
    {
      "t": "box",
      "n": "tactile-lower-sign",
      "p": [
        0,
        1.08,
        0.08
      ],
      "s": [
        1.27,
        0.35,
        0.1
      ],
      "c": 8232356
    },
    {
      "t": "sphere",
      "n": "braille-dot-0",
      "p": [
        -0.51,
        1.07,
        0.15
      ],
      "s": [
        0.035,
        0.035,
        0.022
      ],
      "c": 4877181
    },
    {
      "t": "sphere",
      "n": "braille-dot-1",
      "p": [
        -0.33999999999999997,
        1.07,
        0.15
      ],
      "s": [
        0.035,
        0.035,
        0.022
      ],
      "c": 4877181
    },
    {
      "t": "sphere",
      "n": "braille-dot-2",
      "p": [
        -0.16999999999999998,
        1.07,
        0.15
      ],
      "s": [
        0.035,
        0.035,
        0.022
      ],
      "c": 4877181
    },
    {
      "t": "sphere",
      "n": "braille-dot-3",
      "p": [
        0,
        1.07,
        0.15
      ],
      "s": [
        0.035,
        0.035,
        0.022
      ],
      "c": 4877181
    },
    {
      "t": "sphere",
      "n": "braille-dot-4",
      "p": [
        0.17000000000000004,
        1.07,
        0.15
      ],
      "s": [
        0.035,
        0.035,
        0.022
      ],
      "c": 4877181
    },
    {
      "t": "sphere",
      "n": "braille-dot-5",
      "p": [
        0.3400000000000001,
        1.07,
        0.15
      ],
      "s": [
        0.035,
        0.035,
        0.022
      ],
      "c": 4877181
    },
    {
      "t": "sphere",
      "n": "braille-dot-6",
      "p": [
        0.51,
        1.07,
        0.15
      ],
      "s": [
        0.035,
        0.035,
        0.022
      ],
      "c": 4877181
    },
    {
      "t": "sphere",
      "n": "braille-dot-7",
      "p": [
        -0.51,
        1.1600000000000001,
        0.15
      ],
      "s": [
        0.035,
        0.035,
        0.022
      ],
      "c": 4877181
    },
    {
      "t": "sphere",
      "n": "braille-dot-8",
      "p": [
        -0.33999999999999997,
        1.1600000000000001,
        0.15
      ],
      "s": [
        0.035,
        0.035,
        0.022
      ],
      "c": 4877181
    },
    {
      "t": "sphere",
      "n": "braille-dot-9",
      "p": [
        -0.16999999999999998,
        1.1600000000000001,
        0.15
      ],
      "s": [
        0.035,
        0.035,
        0.022
      ],
      "c": 4877181
    },
    {
      "t": "sphere",
      "n": "braille-dot-10",
      "p": [
        0,
        1.1600000000000001,
        0.15
      ],
      "s": [
        0.035,
        0.035,
        0.022
      ],
      "c": 4877181
    },
    {
      "t": "sphere",
      "n": "braille-dot-11",
      "p": [
        0.17000000000000004,
        1.1600000000000001,
        0.15
      ],
      "s": [
        0.035,
        0.035,
        0.022
      ],
      "c": 4877181
    },
    {
      "t": "sphere",
      "n": "braille-dot-12",
      "p": [
        0.3400000000000001,
        1.1600000000000001,
        0.15
      ],
      "s": [
        0.035,
        0.035,
        0.022
      ],
      "c": 4877181
    },
    {
      "t": "sphere",
      "n": "braille-dot-13",
      "p": [
        0.51,
        1.1600000000000001,
        0.15
      ],
      "s": [
        0.035,
        0.035,
        0.022
      ],
      "c": 4877181
    }
  ]
}); }
