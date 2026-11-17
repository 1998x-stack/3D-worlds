import { buildRecipe } from './recipe_engine.js';
/** Countertop Glass Blender: individually authored procedural geometry. */
export const assetMeta = {
  "id": "kitchen.countertop-glass-blender.001",
  "slug": "countertop-glass-blender",
  "title": "Countertop Glass Blender",
  "title_zh": "台式玻璃搅拌机",
  "summary": "Kitchen blender with control dial, tapered clear jug, lid and rotating blade assembly.",
  "category": "kitchen",
  "tags": [
    "blender",
    "appliance",
    "mixing",
    "kitchen"
  ],
  "dimensions_m": [
    0.24,
    0.46,
    0.27
  ],
  "generator": "createCountertopGlassBlender",
  "source_path": "src/models/countertop_glass_blender.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/countertop-glass-blender.webp"
};
export function createCountertopGlassBlender() {
 return buildRecipe({
  "title": "Countertop Glass Blender",
  "dimensions": [
    0.24,
    0.46,
    0.27
  ],
  "parts": [
    {
      "t": "box",
      "n": "motor-housing",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        0.22,
        0.21,
        0.25
      ],
      "c": 15065040
    },
    {
      "t": "cylinder",
      "n": "motor-socket",
      "p": [
        0,
        0.23,
        0
      ],
      "s": [
        0.13,
        0.05,
        0.13
      ],
      "c": 8886427
    },
    {
      "t": "cylinder",
      "n": "jug-body",
      "p": [
        0,
        0.34,
        0
      ],
      "s": [
        0.19,
        0.2,
        0.2
      ],
      "c": 8829636
    },
    {
      "t": "cylinder",
      "n": "jug-lid",
      "p": [
        0,
        0.45,
        0
      ],
      "s": [
        0.22,
        0.035,
        0.22
      ],
      "c": 3160900
    },
    {
      "t": "sphere",
      "n": "lid-grip",
      "p": [
        0,
        0.475,
        0
      ],
      "s": [
        0.07,
        0.028,
        0.07
      ],
      "c": 8886427
    },
    {
      "t": "rod",
      "n": "jar-handle",
      "from": [
        0.07,
        0.34,
        -0.05
      ],
      "to": [
        0.18,
        0.35,
        -0.06
      ],
      "r": 0.025,
      "c": 3160900
    },
    {
      "t": "rod",
      "n": "handle-return",
      "from": [
        0.18,
        0.35,
        -0.06
      ],
      "to": [
        0.1,
        0.27,
        -0.04
      ],
      "r": 0.025,
      "c": 3160900
    },
    {
      "t": "box",
      "n": "steel-blade-0",
      "p": [
        -0.04,
        0.255,
        0
      ],
      "s": [
        0.1,
        0.012,
        0.018
      ],
      "c": 8886427,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "steel-blade-1",
      "p": [
        0.04,
        0.255,
        0
      ],
      "s": [
        0.1,
        0.012,
        0.018
      ],
      "c": 8886427,
      "rot": [
        0,
        0.8,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "control-dial",
      "p": [
        0,
        0.11,
        0.127
      ],
      "s": [
        0.09,
        0.025,
        0.09
      ],
      "c": 3160900,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "status-light-0",
      "p": [
        -0.056,
        0.037,
        0.132
      ],
      "s": [
        0.011,
        0.009,
        0.01
      ],
      "c": 7518626
    },
    {
      "t": "sphere",
      "n": "status-light-1",
      "p": [
        0,
        0.037,
        0.132
      ],
      "s": [
        0.011,
        0.009,
        0.01
      ],
      "c": 8886427
    },
    {
      "t": "sphere",
      "n": "status-light-2",
      "p": [
        0.056,
        0.037,
        0.132
      ],
      "s": [
        0.011,
        0.009,
        0.01
      ],
      "c": 8886427
    }
  ]
});
}
