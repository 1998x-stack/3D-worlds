import { buildRecipe } from './recipe_engine.js';
/** Digital Rice Cooker — editable original scene geometry. */
export const assetMeta = {
  "id": "kitchen.digital-rice-cooker.001",
  "slug": "digital-rice-cooker",
  "title": "Digital Rice Cooker",
  "title_zh": "智能电饭煲",
  "summary": "Smart kitchen rice cooker with sealed lid, digital display and serving scoop",
  "category": "kitchen",
  "tags": [
    "rice",
    "cooker",
    "appliance"
  ],
  "dimensions_m": [
    0.42,
    0.43,
    0.39
  ],
  "generator": "createDigitalRiceCooker",
  "source_path": "src/models/digital_rice_cooker.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/digital-rice-cooker.webp"
};
export function createDigitalRiceCooker() { return buildRecipe({
  "title": "Digital Rice Cooker",
  "dimensions": [
    0.42,
    0.43,
    0.39
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "main-body",
      "p": [
        0,
        0.18,
        0
      ],
      "s": [
        0.39,
        0.34,
        0.38
      ],
      "c": 13752272
    },
    {
      "t": "cylinder",
      "n": "lid",
      "p": [
        0,
        0.36,
        0
      ],
      "s": [
        0.42,
        0.075,
        0.4
      ],
      "c": 3556171
    },
    {
      "t": "box",
      "n": "carry-handle",
      "p": [
        0,
        0.42,
        0
      ],
      "s": [
        0.2,
        0.065,
        0.08
      ],
      "c": 9544354
    },
    {
      "t": "box",
      "n": "control-panel",
      "p": [
        0,
        0.16,
        0.201
      ],
      "s": [
        0.31,
        0.19,
        0.023
      ],
      "c": 5532533
    },
    {
      "t": "box",
      "n": "lcd-menu",
      "p": [
        0,
        0.2,
        0.219
      ],
      "s": [
        0.23,
        0.07,
        0.014
      ],
      "c": 5343397
    },
    {
      "t": "sphere",
      "n": "menu-key-0",
      "p": [
        -0.11,
        0.108,
        0.218
      ],
      "s": [
        0.016,
        0.014,
        0.009
      ],
      "c": 9292471
    },
    {
      "t": "sphere",
      "n": "menu-key-1",
      "p": [
        -0.055,
        0.108,
        0.218
      ],
      "s": [
        0.016,
        0.014,
        0.009
      ],
      "c": 15131094
    },
    {
      "t": "sphere",
      "n": "menu-key-2",
      "p": [
        0,
        0.108,
        0.218
      ],
      "s": [
        0.016,
        0.014,
        0.009
      ],
      "c": 15131094
    },
    {
      "t": "sphere",
      "n": "menu-key-3",
      "p": [
        0.05500000000000001,
        0.108,
        0.218
      ],
      "s": [
        0.016,
        0.014,
        0.009
      ],
      "c": 15131094
    },
    {
      "t": "sphere",
      "n": "menu-key-4",
      "p": [
        0.11,
        0.108,
        0.218
      ],
      "s": [
        0.016,
        0.014,
        0.009
      ],
      "c": 15131094
    },
    {
      "t": "cylinder",
      "n": "steam-vent",
      "p": [
        0.09,
        0.407,
        -0.07
      ],
      "s": [
        0.075,
        0.018,
        0.075
      ],
      "c": 9544354
    },
    {
      "t": "box",
      "n": "lid-release",
      "p": [
        0,
        0.36,
        0.202
      ],
      "s": [
        0.11,
        0.043,
        0.029
      ],
      "c": 9544354
    },
    {
      "t": "rod",
      "n": "power-cable",
      "from": [
        0,
        0.07,
        -0.19
      ],
      "to": [
        0.25,
        0.035,
        -0.22
      ],
      "r": 0.013,
      "c": 3556171
    },
    {
      "t": "box",
      "n": "rice-spatula",
      "p": [
        0.24,
        0.04,
        0.15
      ],
      "s": [
        0.065,
        0.03,
        0.29
      ],
      "c": 15131094,
      "rot": [
        0,
        0.35,
        0
      ]
    },
    {
      "t": "box",
      "n": "non-slip-foot-0",
      "p": [
        -0.15,
        0.024,
        -0.1
      ],
      "s": [
        0.075,
        0.045,
        0.08
      ],
      "c": 3556171
    },
    {
      "t": "box",
      "n": "non-slip-foot-1",
      "p": [
        0.15,
        0.024,
        -0.1
      ],
      "s": [
        0.075,
        0.045,
        0.08
      ],
      "c": 3556171
    },
    {
      "t": "box",
      "n": "water-level-marker",
      "p": [
        0.203,
        0.21,
        0
      ],
      "s": [
        0.016,
        0.15,
        0.05
      ],
      "c": 9544354
    }
  ]
}); }
