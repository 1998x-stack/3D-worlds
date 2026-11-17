import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "tools.industrial-welding-mask.001",
  "slug": "industrial-welding-mask",
  "title": "Industrial Welding Mask",
  "title_zh": "工业焊接防护面罩",
  "summary": "Protective welding visor with dark viewing pane, vents and headband.",
  "category": "tools",
  "tags": [
    "mask",
    "welding",
    "safety"
  ],
  "dimensions_m": [
    0.29,
    0.43,
    0.34
  ],
  "generator": "createIndustrialWeldingMask",
  "source_path": "src/models/industrial_welding_mask.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/industrial-welding-mask.webp"
};
export function createIndustrialWeldingMask() {
 return buildRecipe({
  "title": "Industrial Welding Mask",
  "dimensions": [
    0.29,
    0.43,
    0.34
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "face-shell",
      "p": [
        0,
        0.23,
        0.09
      ],
      "s": [
        0.27,
        0.36,
        0.19
      ],
      "c": 3161155
    },
    {
      "t": "box",
      "n": "visor-housing",
      "p": [
        0,
        0.29,
        0.25
      ],
      "s": [
        0.24,
        0.14,
        0.055
      ],
      "c": 9018268
    },
    {
      "t": "box",
      "n": "tinted-viewport",
      "p": [
        0,
        0.29,
        0.286
      ],
      "s": [
        0.18,
        0.085,
        0.016
      ],
      "c": 3234661
    },
    {
      "t": "torus",
      "n": "headband",
      "p": [
        0,
        0.26,
        -0.07
      ],
      "s": [
        0.5,
        0.58,
        0.44
      ],
      "c": 4740959,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "chin-guard",
      "p": [
        0,
        0.07,
        0.24
      ],
      "s": [
        0.2,
        0.08,
        0.06
      ],
      "c": 3161155
    },
    {
      "t": "box",
      "n": "view-latch",
      "p": [
        0,
        0.2,
        0.28
      ],
      "s": [
        0.08,
        0.04,
        0.022
      ],
      "c": 12426080
    },
    {
      "t": "box",
      "n": "vent-0",
      "p": [
        -0.07,
        0.13,
        0.242
      ],
      "s": [
        0.022,
        0.011,
        0.012
      ],
      "c": 9018268
    },
    {
      "t": "box",
      "n": "vent-1",
      "p": [
        -0.023000000000000007,
        0.13,
        0.242
      ],
      "s": [
        0.022,
        0.011,
        0.012
      ],
      "c": 9018268
    },
    {
      "t": "box",
      "n": "vent-2",
      "p": [
        0.023999999999999994,
        0.13,
        0.242
      ],
      "s": [
        0.022,
        0.011,
        0.012
      ],
      "c": 9018268
    },
    {
      "t": "box",
      "n": "vent-3",
      "p": [
        0.07100000000000001,
        0.13,
        0.242
      ],
      "s": [
        0.022,
        0.011,
        0.012
      ],
      "c": 9018268
    },
    {
      "t": "cylinder",
      "n": "hinge-0",
      "p": [
        -0.13,
        0.24,
        0.05
      ],
      "s": [
        0.07,
        0.03,
        0.07
      ],
      "c": 9018268,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "hinge-1",
      "p": [
        0.13,
        0.24,
        0.05
      ],
      "s": [
        0.07,
        0.03,
        0.07
      ],
      "c": 9018268,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    }
  ]
});
}
