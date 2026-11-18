import { buildMarketV15 } from './market_v15_builder.js';
/** V1.6 original visual design: Micro Screw Bin Lattice. 2×4分格、独立标签、壁厚参数、可测量放置面. Not physically print-tested. */
export const assetMeta = {
  "id": "print-commerce.micro-screw-bin-lattice.001",
  "slug": "micro-screw-bin-lattice",
  "title": "Micro Screw Bin Lattice",
  "title_zh": "微型螺丝分格盒",
  "summary": "CAD-backed eight-pocket micro fastener tray with raised front labels",
  "category": "print-commerce",
  "tags": [
    "micro",
    "screw",
    "bin",
    "lattice",
    "print-commerce",
    "original",
    "v16",
    "market-inspired"
  ],
  "dimensions_m": [
    0.148,
    0.028,
    0.092
  ],
  "generator": "createMicroScrewBinLattice",
  "source_path": "src/models/micro_screw_bin_lattice.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.6",
  "preview_path": "public/thumbs/micro-screw-bin-lattice.webp",
  "accent": "#a5b3c2",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createMicroScrewBinLattice() {
  return buildMarketV15({
  "title": "Micro Screw Bin Lattice",
  "dimensions": [
    0.148,
    0.028,
    0.092
  ],
  "accent": "#a5b3c2",
  "body": [
    [
      "box",
      "bin-body",
      [
        0,
        0.36,
        0
      ],
      [
        1.86,
        0.6,
        1.16
      ],
      "primary",
      "matte",
      null
    ],
    [
      "box",
      "front-label-beam",
      [
        0,
        0.18,
        0.62
      ],
      [
        1.9,
        0.17,
        0.12
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "box",
      "back-rail",
      [
        0,
        0.66,
        -0.55
      ],
      [
        1.9,
        0.16,
        0.12
      ],
      "secondary",
      "matte",
      null
    ],
    [
      "box",
      "side-rail-left",
      [
        -0.95,
        0.63,
        0
      ],
      [
        0.1,
        0.13,
        1.05
      ],
      "metal",
      "matte",
      null
    ],
    [
      "box",
      "side-rail-right",
      [
        0.95,
        0.63,
        0
      ],
      [
        0.1,
        0.13,
        1.05
      ],
      "metal",
      "matte",
      null
    ],
    [
      "box",
      "base-pad",
      [
        0,
        0.07,
        0
      ],
      [
        1.92,
        0.12,
        1.22
      ],
      "dark",
      "matte",
      null
    ],
    [
      "rounded-box",
      "finger-scoop",
      [
        0,
        0.6,
        0.51
      ],
      [
        0.62,
        0.12,
        0.18
      ],
      "light",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "grid",
      "n": "pocket-recess-visual",
      "t": "box",
      "nx": 4,
      "nz": 2,
      "o": [
        -0.68,
        0.68,
        -0.3
      ],
      "d": [
        0.45,
        0,
        0.6
      ],
      "s": [
        0.32,
        0.02,
        0.35
      ],
      "c": "dark",
      "f": "matte"
    },
    {
      "k": "grid",
      "n": "pocket-index",
      "t": "box",
      "nx": 4,
      "nz": 2,
      "o": [
        -0.68,
        0.39,
        0.64
      ],
      "d": [
        0.45,
        0.08,
        0
      ],
      "s": [
        0.26,
        0.05,
        0.04
      ],
      "c": "light",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "side-rib",
      "t": "box",
      "count": 6,
      "o": [
        -0.87,
        0.35,
        -0.48
      ],
      "d": [
        0.34,
        0,
        0
      ],
      "s": [
        0.05,
        0.35,
        0.06
      ],
      "c": "secondary",
      "f": "matte"
    }
  ]
});
}
