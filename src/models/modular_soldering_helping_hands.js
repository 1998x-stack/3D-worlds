import { buildMarketV15 } from './market_v15_builder.js';
/** V1.5 original visual design: Modular Soldering Helping Hands. 四支万向臂、夹持爪、放大镜圈与托盘. Not physically print-tested. */
export const assetMeta = {
  "id": "tools.modular-soldering-helping-hands.001",
  "slug": "modular-soldering-helping-hands",
  "title": "Modular Soldering Helping Hands",
  "title_zh": "模块化焊接第三只手",
  "summary": "Electronics workholding display with four articulated cable arms and magnifier ring",
  "category": "tools",
  "tags": [
    "modular",
    "soldering",
    "helping",
    "hands",
    "tools",
    "original",
    "v15",
    "market-inspired"
  ],
  "dimensions_m": [
    0.27,
    0.28,
    0.22
  ],
  "generator": "createModularSolderingHelpingHands",
  "source_path": "src/models/modular_soldering_helping_hands.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.5",
  "preview_path": "public/thumbs/modular-soldering-helping-hands.webp",
  "accent": "#b3c6ad",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createModularSolderingHelpingHands() {
  return buildMarketV15({
  "title": "Modular Soldering Helping Hands",
  "dimensions": [
    0.27,
    0.28,
    0.22
  ],
  "accent": "#b3c6ad",
  "body": [
    [
      "box",
      "base",
      [
        0,
        0.1,
        0
      ],
      [
        1.53,
        0.2,
        1.2
      ],
      "frame",
      "matte",
      null
    ],
    [
      "cylinder",
      "central-mast",
      [
        0,
        0.63,
        0
      ],
      [
        0.21,
        0.91,
        0.21
      ],
      "metal",
      "matte",
      null
    ],
    [
      "torus",
      "magnifier",
      [
        0,
        1.78,
        0
      ],
      [
        0.83,
        0.12,
        0.83
      ],
      "light",
      "matte",
      null
    ],
    [
      "rod",
      "magnifier-arm",
      [
        0,
        0.94,
        0
      ],
      [
        0,
        1.79,
        0
      ],
      0.045,
      "metal"
    ],
    [
      "box",
      "tip-tray",
      [
        0,
        0.25,
        0.48
      ],
      [
        0.74,
        0.12,
        0.23
      ],
      "secondary",
      "matte",
      null
    ],
    [
      "box",
      "weight-plate",
      [
        0,
        0.05,
        0
      ],
      [
        1.62,
        0.08,
        1.32
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "box",
      "magnifier-bridge",
      [
        0,
        1.8,
        0
      ],
      [
        0.09,
        0.25,
        0.09
      ],
      "metal",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "radial",
      "n": "joint-arm",
      "t": "rod",
      "count": 8,
      "o": [
        0,
        1,
        0
      ],
      "r": 0.72,
      "s": [
        0.09,
        0.68,
        0.08
      ],
      "c": "metal",
      "f": "matte"
    },
    {
      "k": "radial",
      "n": "crocodile-clip",
      "t": "box",
      "count": 8,
      "o": [
        0,
        1.4,
        0
      ],
      "r": 0.73,
      "s": [
        0.16,
        0.09,
        0.21
      ],
      "c": "contrast",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "screw-slot",
      "t": "box",
      "count": 6,
      "o": [
        -0.58,
        0.23,
        0.43
      ],
      "d": [
        0.23,
        0,
        0
      ],
      "s": [
        0.08,
        0.04,
        0.06
      ],
      "c": "light",
      "f": "matte"
    }
  ]
});
}
