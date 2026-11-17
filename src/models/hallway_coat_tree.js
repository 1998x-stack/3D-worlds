import { buildRecipe } from './recipe_engine.js';

/** Original authored Hallway Coat Tree / 玄关立式衣帽架; stylized, unrigged scene model. */
export const assetMeta = {
  "id": "furniture.hallway-coat-tree.001",
  "slug": "hallway-coat-tree",
  "title": "Hallway Coat Tree",
  "title_zh": "玄关立式衣帽架",
  "summary": "Freestanding pole with tiered coat hooks, umbrella ring and round base.",
  "category": "furniture",
  "tags": [
    "hanger",
    "coat",
    "entryway",
    "storage"
  ],
  "dimensions_m": [
    0.76,
    1.91,
    0.75
  ],
  "generator": "createHallwayCoatTree",
  "source_path": "src/models/hallway_coat_tree.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/hallway-coat-tree.webp"
};
export function createHallwayCoatTree() {
  return buildRecipe({
  "title": "Hallway Coat Tree",
  "dimensions": [
    0.76,
    1.91,
    0.75
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "weighted-disc",
      "p": [
        0,
        0.055,
        0
      ],
      "s": [
        0.72,
        0.11,
        0.72
      ],
      "c": 3422268
    },
    {
      "t": "cylinder",
      "n": "wooden-upright",
      "p": [
        0,
        0.92,
        0
      ],
      "s": [
        0.095,
        1.78,
        0.095
      ],
      "c": 10318932
    },
    {
      "t": "cylinder",
      "n": "collar",
      "p": [
        0,
        1.75,
        0
      ],
      "s": [
        0.2,
        0.1,
        0.2
      ],
      "c": 12163940
    },
    {
      "t": "rod",
      "n": "coat-hook-0",
      "from": [
        0,
        1.73,
        0
      ],
      "to": [
        0.3,
        1.77,
        0
      ],
      "r": 0.026,
      "c": 12163940
    },
    {
      "t": "rod",
      "n": "coat-hook-1",
      "from": [
        0,
        1.83,
        0
      ],
      "to": [
        0.15000000000000002,
        1.87,
        0.25980762113533157
      ],
      "r": 0.026,
      "c": 12163940
    },
    {
      "t": "rod",
      "n": "coat-hook-2",
      "from": [
        0,
        1.73,
        0
      ],
      "to": [
        -0.14999999999999994,
        1.77,
        0.2598076211353316
      ],
      "r": 0.026,
      "c": 12163940
    },
    {
      "t": "rod",
      "n": "coat-hook-3",
      "from": [
        0,
        1.83,
        0
      ],
      "to": [
        -0.3,
        1.87,
        3.6739403974420595e-17
      ],
      "r": 0.026,
      "c": 12163940
    },
    {
      "t": "rod",
      "n": "coat-hook-4",
      "from": [
        0,
        1.73,
        0
      ],
      "to": [
        -0.15000000000000013,
        1.77,
        -0.2598076211353315
      ],
      "r": 0.026,
      "c": 12163940
    },
    {
      "t": "rod",
      "n": "coat-hook-5",
      "from": [
        0,
        1.83,
        0
      ],
      "to": [
        0.15000000000000002,
        1.87,
        -0.25980762113533157
      ],
      "r": 0.026,
      "c": 12163940
    },
    {
      "t": "rod",
      "n": "umbrella-guard-0",
      "from": [
        0.2,
        0.5,
        0
      ],
      "to": [
        0.29,
        0.51,
        0
      ],
      "r": 0.022,
      "c": 12163940
    },
    {
      "t": "rod",
      "n": "umbrella-guard-1",
      "from": [
        1.2246467991473533e-17,
        0.5,
        0.2
      ],
      "to": [
        1.775737858763662e-17,
        0.51,
        0.29
      ],
      "r": 0.022,
      "c": 12163940
    },
    {
      "t": "rod",
      "n": "umbrella-guard-2",
      "from": [
        -0.2,
        0.5,
        2.4492935982947065e-17
      ],
      "to": [
        -0.29,
        0.51,
        3.551475717527324e-17
      ],
      "r": 0.022,
      "c": 12163940
    },
    {
      "t": "rod",
      "n": "umbrella-guard-3",
      "from": [
        -3.6739403974420595e-17,
        0.5,
        -0.2
      ],
      "to": [
        -5.327213576290986e-17,
        0.51,
        -0.29
      ],
      "r": 0.022,
      "c": 12163940
    },
    {
      "t": "torus",
      "n": "umbrella-ring",
      "p": [
        0,
        0.48,
        0
      ],
      "s": [
        1,
        1,
        1
      ],
      "c": 12163940,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "top-finial",
      "p": [
        0,
        1.87,
        0
      ],
      "s": [
        0.14,
        0.09,
        0.14
      ],
      "c": 12163940
    }
  ]
});
}
