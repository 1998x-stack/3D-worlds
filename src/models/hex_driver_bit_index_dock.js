import { buildRecipe } from './recipe_engine.js';
/** Original V1.3 maker-market inspired design: Hex Driver Bit Index Dock / 六角批头索引收纳座. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "tools.hex-driver-bit-index-dock.001",
  "slug": "hex-driver-bit-index-dock",
  "title": "Hex Driver Bit Index Dock",
  "title_zh": "六角批头索引收纳座",
  "summary": "Indexed bit-holder mockup with stepped pockets and clear orientation marks",
  "category": "tools",
  "tags": [
    "hex",
    "driver",
    "bit",
    "index",
    "dock",
    "tools",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.26,
    0.13,
    0.18
  ],
  "generator": "createHexDriverBitIndexDock",
  "source_path": "src/models/hex_driver_bit_index_dock.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.3",
  "preview_path": "public/thumbs/hex-driver-bit-index-dock.webp",
  "accent": "#6d8394"
};
export function createHexDriverBitIndexDock() { return buildRecipe({
  "title": "Hex Driver Bit Index Dock",
  "dimensions": [
    0.26,
    0.13,
    0.18
  ],
  "parts": [
    {
      "t": "box",
      "n": "indexed-base",
      "p": [
        0,
        0.1,
        0
      ],
      "s": [
        2.14,
        0.2,
        1.3
      ],
      "c": 4084325
    },
    {
      "t": "cylinder",
      "n": "bit-pocket-0-0",
      "p": [
        -0.78,
        0.27,
        -0.46
      ],
      "s": [
        0.18,
        0.14,
        0.18
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "bit-tower-0-0",
      "p": [
        -0.78,
        0.43,
        -0.46
      ],
      "s": [
        0.09,
        0.26,
        0.09
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "bit-pocket-0-1",
      "p": [
        -0.78,
        0.27,
        -0.16000000000000003
      ],
      "s": [
        0.18,
        0.14,
        0.18
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "bit-tower-0-1",
      "p": [
        -0.78,
        0.43,
        -0.16000000000000003
      ],
      "s": [
        0.09,
        0.26,
        0.09
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "bit-pocket-0-2",
      "p": [
        -0.78,
        0.27,
        0.13999999999999996
      ],
      "s": [
        0.18,
        0.14,
        0.18
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "bit-tower-0-2",
      "p": [
        -0.78,
        0.43,
        0.13999999999999996
      ],
      "s": [
        0.09,
        0.26,
        0.09
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "bit-pocket-0-3",
      "p": [
        -0.78,
        0.27,
        0.4399999999999999
      ],
      "s": [
        0.18,
        0.14,
        0.18
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "bit-tower-0-3",
      "p": [
        -0.78,
        0.43,
        0.4399999999999999
      ],
      "s": [
        0.09,
        0.26,
        0.09
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "bit-pocket-1-0",
      "p": [
        -0.26,
        0.27,
        -0.46
      ],
      "s": [
        0.18,
        0.14,
        0.18
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "bit-tower-1-0",
      "p": [
        -0.26,
        0.43,
        -0.46
      ],
      "s": [
        0.09,
        0.26,
        0.09
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "bit-pocket-1-1",
      "p": [
        -0.26,
        0.27,
        -0.16000000000000003
      ],
      "s": [
        0.18,
        0.14,
        0.18
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "bit-tower-1-1",
      "p": [
        -0.26,
        0.43,
        -0.16000000000000003
      ],
      "s": [
        0.09,
        0.26,
        0.09
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "bit-pocket-1-2",
      "p": [
        -0.26,
        0.27,
        0.13999999999999996
      ],
      "s": [
        0.18,
        0.14,
        0.18
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "bit-tower-1-2",
      "p": [
        -0.26,
        0.43,
        0.13999999999999996
      ],
      "s": [
        0.09,
        0.26,
        0.09
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "bit-pocket-1-3",
      "p": [
        -0.26,
        0.27,
        0.4399999999999999
      ],
      "s": [
        0.18,
        0.14,
        0.18
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "bit-tower-1-3",
      "p": [
        -0.26,
        0.43,
        0.4399999999999999
      ],
      "s": [
        0.09,
        0.26,
        0.09
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "bit-pocket-2-0",
      "p": [
        0.26,
        0.27,
        -0.46
      ],
      "s": [
        0.18,
        0.14,
        0.18
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "bit-tower-2-0",
      "p": [
        0.26,
        0.43,
        -0.46
      ],
      "s": [
        0.09,
        0.26,
        0.09
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "bit-pocket-2-1",
      "p": [
        0.26,
        0.27,
        -0.16000000000000003
      ],
      "s": [
        0.18,
        0.14,
        0.18
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "bit-tower-2-1",
      "p": [
        0.26,
        0.43,
        -0.16000000000000003
      ],
      "s": [
        0.09,
        0.26,
        0.09
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "bit-pocket-2-2",
      "p": [
        0.26,
        0.27,
        0.13999999999999996
      ],
      "s": [
        0.18,
        0.14,
        0.18
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "bit-tower-2-2",
      "p": [
        0.26,
        0.43,
        0.13999999999999996
      ],
      "s": [
        0.09,
        0.26,
        0.09
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "bit-pocket-2-3",
      "p": [
        0.26,
        0.27,
        0.4399999999999999
      ],
      "s": [
        0.18,
        0.14,
        0.18
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "bit-tower-2-3",
      "p": [
        0.26,
        0.43,
        0.4399999999999999
      ],
      "s": [
        0.09,
        0.26,
        0.09
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "bit-pocket-3-0",
      "p": [
        0.78,
        0.27,
        -0.46
      ],
      "s": [
        0.18,
        0.14,
        0.18
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "bit-tower-3-0",
      "p": [
        0.78,
        0.43,
        -0.46
      ],
      "s": [
        0.09,
        0.26,
        0.09
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "bit-pocket-3-1",
      "p": [
        0.78,
        0.27,
        -0.16000000000000003
      ],
      "s": [
        0.18,
        0.14,
        0.18
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "bit-tower-3-1",
      "p": [
        0.78,
        0.43,
        -0.16000000000000003
      ],
      "s": [
        0.09,
        0.26,
        0.09
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "bit-pocket-3-2",
      "p": [
        0.78,
        0.27,
        0.13999999999999996
      ],
      "s": [
        0.18,
        0.14,
        0.18
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "bit-tower-3-2",
      "p": [
        0.78,
        0.43,
        0.13999999999999996
      ],
      "s": [
        0.09,
        0.26,
        0.09
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "bit-pocket-3-3",
      "p": [
        0.78,
        0.27,
        0.4399999999999999
      ],
      "s": [
        0.18,
        0.14,
        0.18
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "bit-tower-3-3",
      "p": [
        0.78,
        0.43,
        0.4399999999999999
      ],
      "s": [
        0.09,
        0.26,
        0.09
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "row-index-0",
      "p": [
        -0.78,
        0.23,
        0.61
      ],
      "s": [
        0.22,
        0.04,
        0.06
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "row-index-1",
      "p": [
        -0.26,
        0.23,
        0.61
      ],
      "s": [
        0.22,
        0.04,
        0.06
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "row-index-2",
      "p": [
        0.26,
        0.23,
        0.61
      ],
      "s": [
        0.22,
        0.04,
        0.06
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "row-index-3",
      "p": [
        0.78,
        0.23,
        0.61
      ],
      "s": [
        0.22,
        0.04,
        0.06
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "handle-caddy",
      "p": [
        0,
        0.3,
        -0.65
      ],
      "s": [
        0.92,
        0.4,
        0.22
      ],
      "c": 7915949
    }
  ]
}); }
