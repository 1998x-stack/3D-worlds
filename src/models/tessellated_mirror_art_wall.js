import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Tessellated Mirror Art Wall / 镜面镶嵌艺术墙. */
export const assetMeta = {
  "id": "decor.tessellated-mirror-art-wall.001",
  "slug": "tessellated-mirror-art-wall",
  "title": "Tessellated Mirror Art Wall",
  "title_zh": "镜面镶嵌艺术墙",
  "summary": "Interior feature wall with staggered rhombus mirror tiles and beveled frames",
  "category": "decor",
  "tags": [
    "tessellated",
    "mirror",
    "art",
    "wall",
    "decor",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.4,
    2.05,
    0.39
  ],
  "generator": "createTessellatedMirrorArtWall",
  "source_path": "src/models/tessellated_mirror_art_wall.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/tessellated-mirror-art-wall.webp",
  "accent": "#eacb9b"
};
export function createTessellatedMirrorArtWall() { return buildRecipe({
  "title": "Tessellated Mirror Art Wall",
  "dimensions": [
    2.4,
    2.05,
    0.39
  ],
  "parts": [
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-interior-mirror-art-backboard",
      "p": [
        0,
        1.02,
        0
      ],
      "s": [
        2.27,
        1.95,
        0.15
      ],
      "c": 8955274
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-0-0",
      "p": [
        -0.99,
        0.23,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 5073272,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-0-1",
      "p": [
        -0.71,
        0.23,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-0-2",
      "p": [
        -0.42999999999999994,
        0.23,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-0-3",
      "p": [
        -0.1499999999999999,
        0.23,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 5073272,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-0-4",
      "p": [
        0.13000000000000012,
        0.23,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-0-5",
      "p": [
        0.41000000000000014,
        0.23,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-0-6",
      "p": [
        0.6900000000000002,
        0.23,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 5073272,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-0-7",
      "p": [
        0.9700000000000002,
        0.23,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-1-0",
      "p": [
        -0.99,
        0.535,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-1-1",
      "p": [
        -0.71,
        0.535,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-1-2",
      "p": [
        -0.42999999999999994,
        0.535,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 5073272,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-1-3",
      "p": [
        -0.1499999999999999,
        0.535,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-1-4",
      "p": [
        0.13000000000000012,
        0.535,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-1-5",
      "p": [
        0.41000000000000014,
        0.535,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 5073272,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-1-6",
      "p": [
        0.6900000000000002,
        0.535,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-1-7",
      "p": [
        0.9700000000000002,
        0.535,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-2-0",
      "p": [
        -0.99,
        0.84,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-2-1",
      "p": [
        -0.71,
        0.84,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 5073272,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-2-2",
      "p": [
        -0.42999999999999994,
        0.84,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-2-3",
      "p": [
        -0.1499999999999999,
        0.84,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-2-4",
      "p": [
        0.13000000000000012,
        0.84,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 5073272,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-2-5",
      "p": [
        0.41000000000000014,
        0.84,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-2-6",
      "p": [
        0.6900000000000002,
        0.84,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-2-7",
      "p": [
        0.9700000000000002,
        0.84,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 5073272,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-3-0",
      "p": [
        -0.99,
        1.145,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 5073272,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-3-1",
      "p": [
        -0.71,
        1.145,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-3-2",
      "p": [
        -0.42999999999999994,
        1.145,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-3-3",
      "p": [
        -0.1499999999999999,
        1.145,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 5073272,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-3-4",
      "p": [
        0.13000000000000012,
        1.145,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-3-5",
      "p": [
        0.41000000000000014,
        1.145,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-3-6",
      "p": [
        0.6900000000000002,
        1.145,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 5073272,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-3-7",
      "p": [
        0.9700000000000002,
        1.145,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-4-0",
      "p": [
        -0.99,
        1.45,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-4-1",
      "p": [
        -0.71,
        1.45,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-4-2",
      "p": [
        -0.42999999999999994,
        1.45,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 5073272,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-4-3",
      "p": [
        -0.1499999999999999,
        1.45,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-4-4",
      "p": [
        0.13000000000000012,
        1.45,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-4-5",
      "p": [
        0.41000000000000014,
        1.45,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 5073272,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-4-6",
      "p": [
        0.6900000000000002,
        1.45,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-4-7",
      "p": [
        0.9700000000000002,
        1.45,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-5-0",
      "p": [
        -0.99,
        1.755,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-5-1",
      "p": [
        -0.71,
        1.755,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 5073272,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-5-2",
      "p": [
        -0.42999999999999994,
        1.755,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-5-3",
      "p": [
        -0.1499999999999999,
        1.755,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-5-4",
      "p": [
        0.13000000000000012,
        1.755,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 5073272,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-5-5",
      "p": [
        0.41000000000000014,
        1.755,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-5-6",
      "p": [
        0.6900000000000002,
        1.755,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 15387547,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "box",
      "n": "tessellated-mirror-art-wall-mirrored-rhombus-tile-5-7",
      "p": [
        0.9700000000000002,
        1.755,
        0.13
      ],
      "s": [
        0.22,
        0.22,
        0.055
      ],
      "c": 5073272,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "rod",
      "n": "tessellated-mirror-art-wall-mirror-stainless-inlay-0",
      "from": [
        -0.96,
        0.2,
        0.18
      ],
      "to": [
        0.96,
        0.2,
        0.18
      ],
      "r": 0.02,
      "c": 12225652
    },
    {
      "t": "rod",
      "n": "tessellated-mirror-art-wall-mirror-stainless-inlay-1",
      "from": [
        -0.96,
        0.7,
        0.18
      ],
      "to": [
        0.96,
        0.7,
        0.18
      ],
      "r": 0.02,
      "c": 12225652
    },
    {
      "t": "rod",
      "n": "tessellated-mirror-art-wall-mirror-stainless-inlay-2",
      "from": [
        -0.96,
        1.2,
        0.18
      ],
      "to": [
        0.96,
        1.2,
        0.18
      ],
      "r": 0.02,
      "c": 12225652
    },
    {
      "t": "rod",
      "n": "tessellated-mirror-art-wall-mirror-stainless-inlay-3",
      "from": [
        -0.96,
        1.7,
        0.18
      ],
      "to": [
        0.96,
        1.7,
        0.18
      ],
      "r": 0.02,
      "c": 12225652
    }
  ]
}); }
