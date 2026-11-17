import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Modular Makerspace Cabinet / 模块化创客工具柜. */
export const assetMeta = {
  "id": "furniture.modular-makerspace-cabinet.001",
  "slug": "modular-makerspace-cabinet",
  "title": "Modular Makerspace Cabinet",
  "title_zh": "模块化创客工具柜",
  "summary": "Workshop storage cabinet with pegboard, labeled bins, drawers and locking casters",
  "category": "furniture",
  "tags": [
    "modular",
    "makerspace",
    "cabinet",
    "furniture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.65,
    2.1,
    0.72
  ],
  "generator": "createModularMakerspaceCabinet",
  "source_path": "src/models/modular_makerspace_cabinet.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/modular-makerspace-cabinet.webp",
  "accent": "#5a7589"
};
export function createModularMakerspaceCabinet() { return buildRecipe({
  "title": "Modular Makerspace Cabinet",
  "dimensions": [
    1.65,
    2.1,
    0.72
  ],
  "parts": [
    {
      "t": "box",
      "n": "makerspace-storage-frame",
      "p": [
        0,
        1.05,
        0
      ],
      "s": [
        1.46,
        2.03,
        0.61
      ],
      "c": 5928329
    },
    {
      "t": "box",
      "n": "utility-drawer-0",
      "p": [
        -0.59,
        0.43,
        0.32
      ],
      "s": [
        0.24,
        0.27,
        0.055
      ],
      "c": 12426359
    },
    {
      "t": "box",
      "n": "utility-drawer-1",
      "p": [
        -0.30999999999999994,
        0.43,
        0.32
      ],
      "s": [
        0.24,
        0.27,
        0.055
      ],
      "c": 12426359
    },
    {
      "t": "box",
      "n": "utility-drawer-2",
      "p": [
        -0.029999999999999916,
        0.43,
        0.32
      ],
      "s": [
        0.24,
        0.27,
        0.055
      ],
      "c": 12426359
    },
    {
      "t": "box",
      "n": "utility-drawer-3",
      "p": [
        0.2500000000000001,
        0.43,
        0.32
      ],
      "s": [
        0.24,
        0.27,
        0.055
      ],
      "c": 12426359
    },
    {
      "t": "box",
      "n": "utility-drawer-4",
      "p": [
        0.5300000000000001,
        0.43,
        0.32
      ],
      "s": [
        0.24,
        0.27,
        0.055
      ],
      "c": 12426359
    },
    {
      "t": "box",
      "n": "pegboard-hole-0",
      "p": [
        -0.59,
        1.46,
        0.34
      ],
      "s": [
        0.044,
        0.044,
        0.02
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "pegboard-hole-1",
      "p": [
        -0.504,
        1.46,
        0.34
      ],
      "s": [
        0.044,
        0.044,
        0.02
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "pegboard-hole-2",
      "p": [
        -0.418,
        1.46,
        0.34
      ],
      "s": [
        0.044,
        0.044,
        0.02
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "pegboard-hole-3",
      "p": [
        -0.33199999999999996,
        1.46,
        0.34
      ],
      "s": [
        0.044,
        0.044,
        0.02
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "pegboard-hole-4",
      "p": [
        -0.246,
        1.46,
        0.34
      ],
      "s": [
        0.044,
        0.044,
        0.02
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "pegboard-hole-5",
      "p": [
        -0.16000000000000003,
        1.46,
        0.34
      ],
      "s": [
        0.044,
        0.044,
        0.02
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "pegboard-hole-6",
      "p": [
        -0.07399999999999995,
        1.46,
        0.34
      ],
      "s": [
        0.044,
        0.044,
        0.02
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "pegboard-hole-7",
      "p": [
        0.01200000000000001,
        1.46,
        0.34
      ],
      "s": [
        0.044,
        0.044,
        0.02
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "pegboard-hole-8",
      "p": [
        0.09799999999999998,
        1.46,
        0.34
      ],
      "s": [
        0.044,
        0.044,
        0.02
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "pegboard-hole-9",
      "p": [
        0.18399999999999994,
        1.46,
        0.34
      ],
      "s": [
        0.044,
        0.044,
        0.02
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "pegboard-hole-10",
      "p": [
        0.2699999999999999,
        1.46,
        0.34
      ],
      "s": [
        0.044,
        0.044,
        0.02
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "pegboard-hole-11",
      "p": [
        0.356,
        1.46,
        0.34
      ],
      "s": [
        0.044,
        0.044,
        0.02
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "pegboard-hole-12",
      "p": [
        0.44200000000000006,
        1.46,
        0.34
      ],
      "s": [
        0.044,
        0.044,
        0.02
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "pegboard-hole-13",
      "p": [
        0.5279999999999999,
        1.46,
        0.34
      ],
      "s": [
        0.044,
        0.044,
        0.02
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "pegboard-hole-14",
      "p": [
        0.614,
        1.46,
        0.34
      ],
      "s": [
        0.044,
        0.044,
        0.02
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "tool-storage-bin-0",
      "p": [
        -0.51,
        1.02,
        0.32
      ],
      "s": [
        0.27,
        0.3,
        0.28
      ],
      "c": 4541272
    },
    {
      "t": "box",
      "n": "tool-storage-bin-1",
      "p": [
        -0.16999999999999998,
        1.02,
        0.32
      ],
      "s": [
        0.27,
        0.3,
        0.28
      ],
      "c": 4541272
    },
    {
      "t": "box",
      "n": "tool-storage-bin-2",
      "p": [
        0.17000000000000004,
        1.02,
        0.32
      ],
      "s": [
        0.27,
        0.3,
        0.28
      ],
      "c": 4541272
    },
    {
      "t": "box",
      "n": "tool-storage-bin-3",
      "p": [
        0.51,
        1.02,
        0.32
      ],
      "s": [
        0.27,
        0.3,
        0.28
      ],
      "c": 4541272
    },
    {
      "t": "cylinder",
      "n": "cabinet-caster--0.64--0.24",
      "p": [
        -0.64,
        0.1,
        -0.24
      ],
      "s": [
        0.14,
        0.15,
        0.14
      ],
      "c": 4541272,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "cabinet-caster--0.64-0.24",
      "p": [
        -0.64,
        0.1,
        0.24
      ],
      "s": [
        0.14,
        0.15,
        0.14
      ],
      "c": 4541272,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "cabinet-caster-0.64--0.24",
      "p": [
        0.64,
        0.1,
        -0.24
      ],
      "s": [
        0.14,
        0.15,
        0.14
      ],
      "c": 4541272,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "cabinet-caster-0.64-0.24",
      "p": [
        0.64,
        0.1,
        0.24
      ],
      "s": [
        0.14,
        0.15,
        0.14
      ],
      "c": 4541272,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    }
  ]
}); }
