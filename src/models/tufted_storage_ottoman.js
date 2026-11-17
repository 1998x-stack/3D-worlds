import { buildRecipe } from './recipe_engine.js';

/** Original authored Tufted Storage Ottoman / 软包储物脚凳; stylized, unrigged scene model. */
export const assetMeta = {
  "id": "furniture.tufted-storage-ottoman.001",
  "slug": "tufted-storage-ottoman",
  "title": "Tufted Storage Ottoman",
  "title_zh": "软包储物脚凳",
  "summary": "Upholstered lift-top storage bench, quilted buttons and four wooden legs.",
  "category": "furniture",
  "tags": [
    "ottoman",
    "bench",
    "upholstery",
    "storage"
  ],
  "dimensions_m": [
    1.14,
    0.53,
    0.49
  ],
  "generator": "createTuftedStorageOttoman",
  "source_path": "src/models/tufted_storage_ottoman.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/tufted-storage-ottoman.webp"
};
export function createTuftedStorageOttoman() {
  return buildRecipe({
  "title": "Tufted Storage Ottoman",
  "dimensions": [
    1.14,
    0.53,
    0.49
  ],
  "parts": [
    {
      "t": "box",
      "n": "storage-body",
      "p": [
        0,
        0.3,
        0
      ],
      "s": [
        1.11,
        0.37,
        0.47
      ],
      "c": 8952472
    },
    {
      "t": "box",
      "n": "hinged-lid",
      "p": [
        0,
        0.51,
        -0.025
      ],
      "s": [
        1.14,
        0.105,
        0.49
      ],
      "c": 11910836
    },
    {
      "t": "sphere",
      "n": "tuft-button-0-0",
      "p": [
        -0.3,
        0.575,
        -0.11
      ],
      "s": [
        0.027,
        0.013,
        0.028
      ],
      "c": 8097416
    },
    {
      "t": "sphere",
      "n": "tuft-button-0-1",
      "p": [
        -0.3,
        0.575,
        0.11
      ],
      "s": [
        0.027,
        0.013,
        0.028
      ],
      "c": 8097416
    },
    {
      "t": "sphere",
      "n": "tuft-button-1-0",
      "p": [
        0,
        0.575,
        -0.11
      ],
      "s": [
        0.027,
        0.013,
        0.028
      ],
      "c": 8097416
    },
    {
      "t": "sphere",
      "n": "tuft-button-1-1",
      "p": [
        0,
        0.575,
        0.11
      ],
      "s": [
        0.027,
        0.013,
        0.028
      ],
      "c": 8097416
    },
    {
      "t": "sphere",
      "n": "tuft-button-2-0",
      "p": [
        0.3,
        0.575,
        -0.11
      ],
      "s": [
        0.027,
        0.013,
        0.028
      ],
      "c": 8097416
    },
    {
      "t": "sphere",
      "n": "tuft-button-2-1",
      "p": [
        0.3,
        0.575,
        0.11
      ],
      "s": [
        0.027,
        0.013,
        0.028
      ],
      "c": 8097416
    },
    {
      "t": "box",
      "n": "angled-foot-0-0",
      "p": [
        -0.46,
        0.085,
        -0.17
      ],
      "s": [
        0.09,
        0.17,
        0.08
      ],
      "c": 10318932
    },
    {
      "t": "box",
      "n": "angled-foot-0-1",
      "p": [
        -0.46,
        0.085,
        0.17
      ],
      "s": [
        0.09,
        0.17,
        0.08
      ],
      "c": 10318932
    },
    {
      "t": "box",
      "n": "angled-foot-1-0",
      "p": [
        0.46,
        0.085,
        -0.17
      ],
      "s": [
        0.09,
        0.17,
        0.08
      ],
      "c": 10318932
    },
    {
      "t": "box",
      "n": "angled-foot-1-1",
      "p": [
        0.46,
        0.085,
        0.17
      ],
      "s": [
        0.09,
        0.17,
        0.08
      ],
      "c": 10318932
    },
    {
      "t": "box",
      "n": "side-handle",
      "p": [
        0.568,
        0.3,
        0
      ],
      "s": [
        0.025,
        0.1,
        0.2
      ],
      "c": 12163940
    },
    {
      "t": "box",
      "n": "hinge",
      "p": [
        -0.37,
        0.45,
        -0.25
      ],
      "s": [
        0.14,
        0.038,
        0.04
      ],
      "c": 3422268
    }
  ]
});
}
