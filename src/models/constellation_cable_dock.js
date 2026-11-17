import { buildRecipe } from './recipe_engine.js';
/** Original V1.4 maker-market inspired design: Constellation Cable Dock / 星图式线材收纳底座. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "electronics.constellation-cable-dock.001",
  "slug": "constellation-cable-dock",
  "title": "Constellation Cable Dock",
  "title_zh": "星图式线材收纳底座",
  "summary": "Desk cable organizer with branching clip constellations and labelled charging bays",
  "category": "electronics",
  "tags": [
    "constellation",
    "cable",
    "dock",
    "electronics",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.27,
    0.25,
    0.19
  ],
  "generator": "createConstellationCableDock",
  "source_path": "src/models/constellation_cable_dock.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.4",
  "preview_path": "public/thumbs/constellation-cable-dock.webp",
  "accent": "#9ac5d1",
  "geometry_revision": "1.4.1",
  "refinement": "geometry+materials"
};
export function createConstellationCableDock() { return buildRecipe({
  "title": "Constellation Cable Dock",
  "dimensions": [
    0.27,
    0.25,
    0.19
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "desk-foot",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        1.8,
        0.16,
        1.2
      ],
      "c": 3229017
    },
    {
      "t": "rod",
      "n": "trunk",
      "from": [
        0,
        0.16,
        0
      ],
      "to": [
        0,
        1.68,
        0
      ],
      "r": 0.09,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "constellation-arm-0",
      "from": [
        0,
        0.82,
        0
      ],
      "to": [
        0.88,
        1.12,
        0
      ],
      "r": 0.06,
      "c": 13938523
    },
    {
      "t": "sphere",
      "n": "clip-node-0",
      "p": [
        0.88,
        1.12,
        0
      ],
      "s": [
        0.19,
        0.2,
        0.2
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "cable-groove-0",
      "p": [
        0.88,
        1.28,
        0
      ],
      "s": [
        0.1,
        0.04,
        0.1
      ],
      "c": 2570315
    },
    {
      "t": "rod",
      "n": "constellation-arm-1",
      "from": [
        0,
        1.05,
        0
      ],
      "to": [
        0.4400000000000001,
        1.35,
        0.3637306695894642
      ],
      "r": 0.06,
      "c": 13938523
    },
    {
      "t": "sphere",
      "n": "clip-node-1",
      "p": [
        0.4400000000000001,
        1.35,
        0.3637306695894642
      ],
      "s": [
        0.19,
        0.2,
        0.2
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "cable-groove-1",
      "p": [
        0.4400000000000001,
        1.51,
        0.3637306695894642
      ],
      "s": [
        0.1,
        0.04,
        0.1
      ],
      "c": 2570315
    },
    {
      "t": "rod",
      "n": "constellation-arm-2",
      "from": [
        0,
        1.28,
        0
      ],
      "to": [
        -0.4399999999999998,
        1.58,
        0.36373066958946426
      ],
      "r": 0.06,
      "c": 13938523
    },
    {
      "t": "sphere",
      "n": "clip-node-2",
      "p": [
        -0.4399999999999998,
        1.58,
        0.36373066958946426
      ],
      "s": [
        0.19,
        0.2,
        0.2
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "cable-groove-2",
      "p": [
        -0.4399999999999998,
        1.74,
        0.36373066958946426
      ],
      "s": [
        0.1,
        0.04,
        0.1
      ],
      "c": 2570315
    },
    {
      "t": "rod",
      "n": "constellation-arm-3",
      "from": [
        0,
        0.82,
        0
      ],
      "to": [
        -0.88,
        1.12,
        5.143516556418883e-17
      ],
      "r": 0.06,
      "c": 13938523
    },
    {
      "t": "sphere",
      "n": "clip-node-3",
      "p": [
        -0.88,
        1.12,
        5.143516556418883e-17
      ],
      "s": [
        0.19,
        0.2,
        0.2
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "cable-groove-3",
      "p": [
        -0.88,
        1.28,
        5.143516556418883e-17
      ],
      "s": [
        0.1,
        0.04,
        0.1
      ],
      "c": 2570315
    },
    {
      "t": "rod",
      "n": "constellation-arm-4",
      "from": [
        0,
        1.05,
        0
      ],
      "to": [
        -0.4400000000000004,
        1.35,
        -0.3637306695894641
      ],
      "r": 0.06,
      "c": 13938523
    },
    {
      "t": "sphere",
      "n": "clip-node-4",
      "p": [
        -0.4400000000000004,
        1.35,
        -0.3637306695894641
      ],
      "s": [
        0.19,
        0.2,
        0.2
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "cable-groove-4",
      "p": [
        -0.4400000000000004,
        1.51,
        -0.3637306695894641
      ],
      "s": [
        0.1,
        0.04,
        0.1
      ],
      "c": 2570315
    },
    {
      "t": "rod",
      "n": "constellation-arm-5",
      "from": [
        0,
        1.28,
        0
      ],
      "to": [
        0.4400000000000001,
        1.58,
        -0.3637306695894642
      ],
      "r": 0.06,
      "c": 13938523
    },
    {
      "t": "sphere",
      "n": "clip-node-5",
      "p": [
        0.4400000000000001,
        1.58,
        -0.3637306695894642
      ],
      "s": [
        0.19,
        0.2,
        0.2
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "cable-groove-5",
      "p": [
        0.4400000000000001,
        1.74,
        -0.3637306695894642
      ],
      "s": [
        0.1,
        0.04,
        0.1
      ],
      "c": 2570315
    },
    {
      "t": "box",
      "n": "charging-bay-0",
      "p": [
        -0.67,
        0.2,
        0.35
      ],
      "s": [
        0.31,
        0.05,
        0.3
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "charging-bay-1",
      "p": [
        -0.23000000000000004,
        0.2,
        0.35
      ],
      "s": [
        0.31,
        0.05,
        0.3
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "charging-bay-2",
      "p": [
        0.20999999999999996,
        0.2,
        0.35
      ],
      "s": [
        0.31,
        0.05,
        0.3
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "charging-bay-3",
      "p": [
        0.65,
        0.2,
        0.35
      ],
      "s": [
        0.31,
        0.05,
        0.3
      ],
      "c": 7915949
    },
    {
      "t": "torus",
      "n": "halo",
      "p": [
        0,
        1.75,
        0
      ],
      "s": [
        0.65,
        0.15,
        0.65
      ],
      "c": 15776881,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "arc",
      "n": "curved-cable-loop-0",
      "p": [
        0.88,
        0.8800000000000001,
        0
      ],
      "s": [
        0.41,
        0.47,
        0.48
      ],
      "c": 9487573,
      "finish": "metal",
      "start": 0,
      "sweep": 2.764601535159018,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "cable-end-ferrule-0",
      "p": [
        0.88,
        1.12,
        0
      ],
      "s": [
        0.15,
        0.11,
        0.15
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "cable-index-0",
      "p": [
        0.88,
        1.29,
        0
      ],
      "s": [
        0.11,
        0.035,
        0.13
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "arc",
      "n": "curved-cable-loop-1",
      "p": [
        0.4400000000000001,
        1.11,
        0.3637306695894642
      ],
      "s": [
        0.41,
        0.47,
        0.48
      ],
      "c": 2570573,
      "finish": "metal",
      "start": 0.25,
      "sweep": 2.764601535159018,
      "rot": [
        0,
        0,
        0.11
      ]
    },
    {
      "t": "cylinder",
      "n": "cable-end-ferrule-1",
      "p": [
        0.4400000000000001,
        1.35,
        0.3637306695894642
      ],
      "s": [
        0.15,
        0.11,
        0.15
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "cable-index-1",
      "p": [
        0.4400000000000001,
        1.52,
        0.3637306695894642
      ],
      "s": [
        0.11,
        0.035,
        0.13
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "arc",
      "n": "curved-cable-loop-2",
      "p": [
        -0.4399999999999998,
        1.34,
        0.36373066958946426
      ],
      "s": [
        0.41,
        0.47,
        0.48
      ],
      "c": 9487573,
      "finish": "metal",
      "start": 0.5,
      "sweep": 2.764601535159018,
      "rot": [
        0,
        0,
        0.22
      ]
    },
    {
      "t": "cylinder",
      "n": "cable-end-ferrule-2",
      "p": [
        -0.4399999999999998,
        1.58,
        0.36373066958946426
      ],
      "s": [
        0.15,
        0.11,
        0.15
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "cable-index-2",
      "p": [
        -0.4399999999999998,
        1.75,
        0.36373066958946426
      ],
      "s": [
        0.11,
        0.035,
        0.13
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "arc",
      "n": "curved-cable-loop-3",
      "p": [
        -0.88,
        0.8800000000000001,
        5.143516556418883e-17
      ],
      "s": [
        0.41,
        0.47,
        0.48
      ],
      "c": 2570573,
      "finish": "metal",
      "start": 0.75,
      "sweep": 2.764601535159018,
      "rot": [
        0,
        0,
        0.33
      ]
    },
    {
      "t": "cylinder",
      "n": "cable-end-ferrule-3",
      "p": [
        -0.88,
        1.12,
        5.143516556418883e-17
      ],
      "s": [
        0.15,
        0.11,
        0.15
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "cable-index-3",
      "p": [
        -0.88,
        1.29,
        5.143516556418883e-17
      ],
      "s": [
        0.11,
        0.035,
        0.13
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "arc",
      "n": "curved-cable-loop-4",
      "p": [
        -0.4400000000000004,
        1.11,
        -0.3637306695894641
      ],
      "s": [
        0.41,
        0.47,
        0.48
      ],
      "c": 9487573,
      "finish": "metal",
      "start": 1,
      "sweep": 2.764601535159018,
      "rot": [
        0,
        0,
        0.44
      ]
    },
    {
      "t": "cylinder",
      "n": "cable-end-ferrule-4",
      "p": [
        -0.4400000000000004,
        1.35,
        -0.3637306695894641
      ],
      "s": [
        0.15,
        0.11,
        0.15
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "cable-index-4",
      "p": [
        -0.4400000000000004,
        1.52,
        -0.3637306695894641
      ],
      "s": [
        0.11,
        0.035,
        0.13
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "arc",
      "n": "curved-cable-loop-5",
      "p": [
        0.4400000000000001,
        1.34,
        -0.3637306695894642
      ],
      "s": [
        0.41,
        0.47,
        0.48
      ],
      "c": 2570573,
      "finish": "metal",
      "start": 1.25,
      "sweep": 2.764601535159018,
      "rot": [
        0,
        0,
        0.55
      ]
    },
    {
      "t": "cylinder",
      "n": "cable-end-ferrule-5",
      "p": [
        0.4400000000000001,
        1.58,
        -0.3637306695894642
      ],
      "s": [
        0.15,
        0.11,
        0.15
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "cable-index-5",
      "p": [
        0.4400000000000001,
        1.75,
        -0.3637306695894642
      ],
      "s": [
        0.11,
        0.035,
        0.13
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "charging-pad-bezel-0",
      "p": [
        -0.67,
        0.22,
        0.38
      ],
      "s": [
        0.36,
        0.09,
        0.33
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "charge-status-dot-0",
      "p": [
        -0.67,
        0.25,
        0.58
      ],
      "s": [
        0.1,
        0.06,
        0.08
      ],
      "c": 14781814,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "charging-pad-bezel-1",
      "p": [
        -0.23000000000000004,
        0.22,
        0.38
      ],
      "s": [
        0.36,
        0.09,
        0.33
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "charge-status-dot-1",
      "p": [
        -0.23000000000000004,
        0.25,
        0.58
      ],
      "s": [
        0.1,
        0.06,
        0.08
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "charging-pad-bezel-2",
      "p": [
        0.20999999999999996,
        0.22,
        0.38
      ],
      "s": [
        0.36,
        0.09,
        0.33
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "charge-status-dot-2",
      "p": [
        0.20999999999999996,
        0.25,
        0.58
      ],
      "s": [
        0.1,
        0.06,
        0.08
      ],
      "c": 14781814,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "charging-pad-bezel-3",
      "p": [
        0.65,
        0.22,
        0.38
      ],
      "s": [
        0.36,
        0.09,
        0.33
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "charge-status-dot-3",
      "p": [
        0.65,
        0.25,
        0.58
      ],
      "s": [
        0.1,
        0.06,
        0.08
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "weighted-base-foot-0",
      "p": [
        -0.7,
        0.05,
        -0.42
      ],
      "s": [
        0.19,
        0.11,
        0.18
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "sphere",
      "n": "weighted-base-foot-1",
      "p": [
        0.7,
        0.05,
        -0.42
      ],
      "s": [
        0.19,
        0.11,
        0.18
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "sphere",
      "n": "weighted-base-foot-2",
      "p": [
        -0.7,
        0.05,
        0.42
      ],
      "s": [
        0.19,
        0.11,
        0.18
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "sphere",
      "n": "weighted-base-foot-3",
      "p": [
        0.7,
        0.05,
        0.42
      ],
      "s": [
        0.19,
        0.11,
        0.18
      ],
      "c": 2570573,
      "finish": "rubber"
    }
  ],
  "geometry_revision": "1.4.1"
}); }
