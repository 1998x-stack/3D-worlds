import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Micro Mobility Parking Node; stylized visual prototype only. */
export const assetMeta = {
  "id": "urban.micro-mobility-parking-node.001",
  "slug": "micro-mobility-parking-node",
  "title": "Micro Mobility Parking Node",
  "title_zh": "微出行停靠节点",
  "summary": "Original micro mobility parking node study with roof and wheels assemblies and individually named functional details",
  "category": "urban",
  "tags": [
    "micro",
    "mobility",
    "parking",
    "node",
    "urban",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.42,
    0.24,
    0.28
  ],
  "generator": "createMicroMobilityParkingNode",
  "source_path": "src/models/micro_mobility_parking_node.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/micro-mobility-parking-node.webp",
  "accent": "#dbbf72",
  "provenance_note": "Original procedural visual design; ebay is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createMicroMobilityParkingNode() { return buildRecipe({
  "title": "Micro Mobility Parking Node",
  "dimensions": [
    0.42,
    0.24,
    0.28
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "foundation",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        2,
        0.18,
        1.54
      ],
      "c": 8104872,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86--0.66",
      "p": [
        -0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86-0.66",
      "p": [
        -0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86--0.66",
      "p": [
        0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86-0.66",
      "p": [
        0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-0",
      "p": [
        -0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-1",
      "p": [
        -0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-2",
      "p": [
        -0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-3",
      "p": [
        -0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-4",
      "p": [
        0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-5",
      "p": [
        0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-6",
      "p": [
        0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-7",
      "p": [
        0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "front-nameplate",
      "p": [
        0,
        0.25,
        0.76
      ],
      "s": [
        0.66,
        0.07,
        0.025
      ],
      "c": 14401394,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "roof-0-canopy",
      "p": [
        0,
        1.75,
        -0.28
      ],
      "s": [
        1.84,
        0.15,
        0.73
      ],
      "c": 14401394,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-0-pier--1",
      "p": [
        -0.72,
        0.96,
        -0.28
      ],
      "s": [
        0.13,
        1.54,
        0.13
      ],
      "c": 8104872,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-0-pier-1",
      "p": [
        0.72,
        0.96,
        -0.28
      ],
      "s": [
        0.13,
        1.54,
        0.13
      ],
      "c": 8104872,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-0-ground-arrow-0",
      "p": [
        -0.72,
        0.24,
        0.47
      ],
      "s": [
        0.1,
        0.024,
        0.22
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-0-ground-arrow-1",
      "p": [
        -0.54,
        0.24,
        0.47
      ],
      "s": [
        0.1,
        0.024,
        0.22
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-0-ground-arrow-2",
      "p": [
        -0.36,
        0.24,
        0.47
      ],
      "s": [
        0.1,
        0.024,
        0.22
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-0-ground-arrow-3",
      "p": [
        -0.17999999999999994,
        0.24,
        0.47
      ],
      "s": [
        0.1,
        0.024,
        0.22
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-0-ground-arrow-4",
      "p": [
        0,
        0.24,
        0.47
      ],
      "s": [
        0.1,
        0.024,
        0.22
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-0-ground-arrow-5",
      "p": [
        0.17999999999999994,
        0.24,
        0.47
      ],
      "s": [
        0.1,
        0.024,
        0.22
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-0-ground-arrow-6",
      "p": [
        0.3600000000000001,
        0.24,
        0.47
      ],
      "s": [
        0.1,
        0.024,
        0.22
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-0-ground-arrow-7",
      "p": [
        0.54,
        0.24,
        0.47
      ],
      "s": [
        0.1,
        0.024,
        0.22
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-0-ground-arrow-8",
      "p": [
        0.72,
        0.24,
        0.47
      ],
      "s": [
        0.1,
        0.024,
        0.22
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "scooter-deck--1",
      "p": [
        -0.47,
        0.37,
        0.27
      ],
      "s": [
        0.22,
        0.14,
        0.65
      ],
      "c": 4745333,
      "finish": "anodized"
    },
    {
      "t": "rod",
      "n": "scooter-stem--1",
      "from": [
        -0.47,
        0.4,
        -0.09
      ],
      "to": [
        -0.47,
        1.37,
        -0.09
      ],
      "r": 0.045,
      "c": 11454153,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "handlebar--1",
      "from": [
        -0.69,
        1.39,
        -0.1
      ],
      "to": [
        -0.24999999999999997,
        1.39,
        -0.1
      ],
      "r": 0.035,
      "c": 2373444,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "scooter-wheel--1--0.26",
      "p": [
        -0.47,
        0.25,
        -0.26
      ],
      "s": [
        0.23,
        0.13,
        0.23
      ],
      "c": 2043188,
      "finish": "rubber",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-hub--1--0.26",
      "p": [
        -0.47,
        0.25,
        -0.26
      ],
      "s": [
        0.08,
        0.14,
        0.08
      ],
      "c": 11912911,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "scooter-wheel--1-0.46",
      "p": [
        -0.47,
        0.25,
        0.46
      ],
      "s": [
        0.23,
        0.13,
        0.23
      ],
      "c": 2043188,
      "finish": "rubber",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-hub--1-0.46",
      "p": [
        -0.47,
        0.25,
        0.46
      ],
      "s": [
        0.08,
        0.14,
        0.08
      ],
      "c": 11912911,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rounded-box",
      "n": "locking-dock--1",
      "p": [
        -0.47,
        0.24,
        -0.55
      ],
      "s": [
        0.48,
        0.24,
        0.23
      ],
      "c": 6131351,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "qr-terminal--1",
      "p": [
        -0.47,
        1.19,
        -0.05
      ],
      "s": [
        0.18,
        0.18,
        0.05
      ],
      "c": 13946762,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "scooter-deck-1",
      "p": [
        0.47,
        0.37,
        0.27
      ],
      "s": [
        0.22,
        0.14,
        0.65
      ],
      "c": 4745333,
      "finish": "anodized"
    },
    {
      "t": "rod",
      "n": "scooter-stem-1",
      "from": [
        0.47,
        0.4,
        -0.09
      ],
      "to": [
        0.47,
        1.37,
        -0.09
      ],
      "r": 0.045,
      "c": 11454153,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "handlebar-1",
      "from": [
        0.24999999999999997,
        1.39,
        -0.1
      ],
      "to": [
        0.69,
        1.39,
        -0.1
      ],
      "r": 0.035,
      "c": 2373444,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "scooter-wheel-1--0.26",
      "p": [
        0.47,
        0.25,
        -0.26
      ],
      "s": [
        0.23,
        0.13,
        0.23
      ],
      "c": 2043188,
      "finish": "rubber",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-hub-1--0.26",
      "p": [
        0.47,
        0.25,
        -0.26
      ],
      "s": [
        0.08,
        0.14,
        0.08
      ],
      "c": 11912911,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "scooter-wheel-1-0.46",
      "p": [
        0.47,
        0.25,
        0.46
      ],
      "s": [
        0.23,
        0.13,
        0.23
      ],
      "c": 2043188,
      "finish": "rubber",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-hub-1-0.46",
      "p": [
        0.47,
        0.25,
        0.46
      ],
      "s": [
        0.08,
        0.14,
        0.08
      ],
      "c": 11912911,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rounded-box",
      "n": "locking-dock-1",
      "p": [
        0.47,
        0.24,
        -0.55
      ],
      "s": [
        0.48,
        0.24,
        0.23
      ],
      "c": 6131351,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "qr-terminal-1",
      "p": [
        0.47,
        1.19,
        -0.05
      ],
      "s": [
        0.18,
        0.18,
        0.05
      ],
      "c": 13946762,
      "finish": "matte"
    }
  ]
}); }
