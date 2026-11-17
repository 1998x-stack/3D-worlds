import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Portable Welding Fume Extractor / 移动焊烟净化器. */
export const assetMeta = {
  "id": "tools.portable-welding-fume-extractor.001",
  "slug": "portable-welding-fume-extractor",
  "title": "Portable Welding Fume Extractor",
  "title_zh": "移动焊烟净化器",
  "summary": "Workshop air extraction trolley with flexible capture arm, filter housing and caster wheels",
  "category": "tools",
  "tags": [
    "portable",
    "welding",
    "fume",
    "extractor",
    "tools",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.25,
    2.06,
    1.02
  ],
  "generator": "createPortableWeldingFumeExtractor",
  "source_path": "src/models/portable_welding_fume_extractor.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/portable-welding-fume-extractor.webp",
  "accent": "#cea65c"
};
export function createPortableWeldingFumeExtractor() { return buildRecipe({
  "title": "Portable Welding Fume Extractor",
  "dimensions": [
    1.25,
    2.06,
    1.02
  ],
  "parts": [
    {
      "t": "box",
      "n": "portable-welding-fume-extractor-fume-extractor-cart-body",
      "p": [
        0,
        0.59,
        0
      ],
      "s": [
        0.83,
        1.06,
        0.68
      ],
      "c": 8360601
    },
    {
      "t": "cylinder",
      "n": "portable-welding-fume-extractor-industrial-extraction-caster--0.34--0.26",
      "p": [
        -0.34,
        0.1,
        -0.26
      ],
      "s": [
        0.17,
        0.12,
        0.17
      ],
      "c": 13751497,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "portable-welding-fume-extractor-industrial-extraction-caster--0.34-0.26",
      "p": [
        -0.34,
        0.1,
        0.26
      ],
      "s": [
        0.17,
        0.12,
        0.17
      ],
      "c": 13751497,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "portable-welding-fume-extractor-industrial-extraction-caster-0.34--0.26",
      "p": [
        0.34,
        0.1,
        -0.26
      ],
      "s": [
        0.17,
        0.12,
        0.17
      ],
      "c": 13751497,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "portable-welding-fume-extractor-industrial-extraction-caster-0.34-0.26",
      "p": [
        0.34,
        0.1,
        0.26
      ],
      "s": [
        0.17,
        0.12,
        0.17
      ],
      "c": 13751497,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "portable-welding-fume-extractor-suction-filter-inlet",
      "p": [
        0,
        1.24,
        -0.06
      ],
      "s": [
        0.26,
        0.45,
        0.26
      ],
      "c": 13543004
    },
    {
      "t": "rod",
      "n": "portable-welding-fume-extractor-welding-extraction-articulated-hose",
      "from": [
        0,
        1.38,
        -0.07
      ],
      "to": [
        0.46,
        1.77,
        0.25
      ],
      "r": 0.094,
      "c": 13543004
    },
    {
      "t": "cone",
      "n": "portable-welding-fume-extractor-low-fume-capture-exhaust-cone",
      "p": [
        0.52,
        1.82,
        0.28
      ],
      "s": [
        0.5,
        0.3,
        0.47
      ],
      "c": 3163994
    },
    {
      "t": "box",
      "n": "portable-welding-fume-extractor-carbon-filter-mesh-segment-0",
      "p": [
        -0.29,
        0.63,
        0.36
      ],
      "s": [
        0.035,
        0.45,
        0.02
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "portable-welding-fume-extractor-carbon-filter-mesh-segment-1",
      "p": [
        -0.23199999999999998,
        0.63,
        0.36
      ],
      "s": [
        0.035,
        0.45,
        0.02
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "portable-welding-fume-extractor-carbon-filter-mesh-segment-2",
      "p": [
        -0.174,
        0.63,
        0.36
      ],
      "s": [
        0.035,
        0.45,
        0.02
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "portable-welding-fume-extractor-carbon-filter-mesh-segment-3",
      "p": [
        -0.11599999999999996,
        0.63,
        0.36
      ],
      "s": [
        0.035,
        0.45,
        0.02
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "portable-welding-fume-extractor-carbon-filter-mesh-segment-4",
      "p": [
        -0.05799999999999997,
        0.63,
        0.36
      ],
      "s": [
        0.035,
        0.45,
        0.02
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "portable-welding-fume-extractor-carbon-filter-mesh-segment-5",
      "p": [
        5.551115123125783e-17,
        0.63,
        0.36
      ],
      "s": [
        0.035,
        0.45,
        0.02
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "portable-welding-fume-extractor-carbon-filter-mesh-segment-6",
      "p": [
        0.05800000000000005,
        0.63,
        0.36
      ],
      "s": [
        0.035,
        0.45,
        0.02
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "portable-welding-fume-extractor-carbon-filter-mesh-segment-7",
      "p": [
        0.11600000000000005,
        0.63,
        0.36
      ],
      "s": [
        0.035,
        0.45,
        0.02
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "portable-welding-fume-extractor-carbon-filter-mesh-segment-8",
      "p": [
        0.17400000000000004,
        0.63,
        0.36
      ],
      "s": [
        0.035,
        0.45,
        0.02
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "portable-welding-fume-extractor-carbon-filter-mesh-segment-9",
      "p": [
        0.23200000000000004,
        0.63,
        0.36
      ],
      "s": [
        0.035,
        0.45,
        0.02
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "portable-welding-fume-extractor-carbon-filter-mesh-segment-10",
      "p": [
        0.2900000000000001,
        0.63,
        0.36
      ],
      "s": [
        0.035,
        0.45,
        0.02
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "portable-welding-fume-extractor-workshop-air-cleaning-switch",
      "p": [
        0,
        1.02,
        0.37
      ],
      "s": [
        0.3,
        0.13,
        0.02
      ],
      "c": 3163994
    }
  ]
}); }
