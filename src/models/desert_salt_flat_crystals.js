import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Desert Salt Flat Crystals / 沙漠盐晶盐沼地块. */
export const assetMeta = {
  "id": "nature.desert-salt-flat-crystals.001",
  "slug": "desert-salt-flat-crystals",
  "title": "Desert Salt Flat Crystals",
  "title_zh": "沙漠盐晶盐沼地块",
  "summary": "Salt-crusted desert basin with polygonal plates and crystalline mineral towers",
  "category": "nature",
  "tags": [
    "desert",
    "salt",
    "flat",
    "crystals",
    "nature",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.22,
    1.42,
    2.9
  ],
  "generator": "createDesertSaltFlatCrystals",
  "source_path": "src/models/desert_salt_flat_crystals.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/desert-salt-flat-crystals.webp",
  "accent": "#cabda1"
};
export function createDesertSaltFlatCrystals() { return buildRecipe({
  "title": "Desert Salt Flat Crystals",
  "dimensions": [
    3.22,
    1.42,
    2.9
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "desert-salt-flat-crystals-salt-desert-sandpan",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        3,
        0.21,
        2.59
      ],
      "c": 13286817
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-0-0",
      "p": [
        -1.17,
        0.23,
        -0.97
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 7712955,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-0-1",
      "p": [
        -0.58,
        0.23,
        -0.97
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 13286817,
      "rot": [
        0,
        -0.11,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-0-2",
      "p": [
        0.010000000000000009,
        0.23,
        -0.97
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 7712955,
      "rot": [
        0,
        -0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-0-3",
      "p": [
        0.6000000000000001,
        0.23,
        -0.97
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 13286817,
      "rot": [
        0,
        -0.33,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-0-4",
      "p": [
        1.19,
        0.23,
        -0.97
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 7712955,
      "rot": [
        0,
        -0.44,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-1-0",
      "p": [
        -1.17,
        0.23,
        -0.49
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 13286817,
      "rot": [
        0,
        0.11,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-1-1",
      "p": [
        -0.58,
        0.23,
        -0.49
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 7712955,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-1-2",
      "p": [
        0.010000000000000009,
        0.23,
        -0.49
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 13286817,
      "rot": [
        0,
        -0.11,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-1-3",
      "p": [
        0.6000000000000001,
        0.23,
        -0.49
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 7712955,
      "rot": [
        0,
        -0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-1-4",
      "p": [
        1.19,
        0.23,
        -0.49
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 13286817,
      "rot": [
        0,
        -0.33,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-2-0",
      "p": [
        -1.17,
        0.23,
        -0.010000000000000009
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 7712955,
      "rot": [
        0,
        0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-2-1",
      "p": [
        -0.58,
        0.23,
        -0.010000000000000009
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 13286817,
      "rot": [
        0,
        0.11,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-2-2",
      "p": [
        0.010000000000000009,
        0.23,
        -0.010000000000000009
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 7712955,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-2-3",
      "p": [
        0.6000000000000001,
        0.23,
        -0.010000000000000009
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 13286817,
      "rot": [
        0,
        -0.11,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-2-4",
      "p": [
        1.19,
        0.23,
        -0.010000000000000009
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 7712955,
      "rot": [
        0,
        -0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-3-0",
      "p": [
        -1.17,
        0.23,
        0.47
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 13286817,
      "rot": [
        0,
        0.33,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-3-1",
      "p": [
        -0.58,
        0.23,
        0.47
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 7712955,
      "rot": [
        0,
        0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-3-2",
      "p": [
        0.010000000000000009,
        0.23,
        0.47
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 13286817,
      "rot": [
        0,
        0.11,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-3-3",
      "p": [
        0.6000000000000001,
        0.23,
        0.47
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 7712955,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-3-4",
      "p": [
        1.19,
        0.23,
        0.47
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 13286817,
      "rot": [
        0,
        -0.11,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-4-0",
      "p": [
        -1.17,
        0.23,
        0.95
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 7712955,
      "rot": [
        0,
        0.44,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-4-1",
      "p": [
        -0.58,
        0.23,
        0.95
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 13286817,
      "rot": [
        0,
        0.33,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-4-2",
      "p": [
        0.010000000000000009,
        0.23,
        0.95
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 7712955,
      "rot": [
        0,
        0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-4-3",
      "p": [
        0.6000000000000001,
        0.23,
        0.95
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 13286817,
      "rot": [
        0,
        0.11,
        0
      ]
    },
    {
      "t": "box",
      "n": "desert-salt-flat-crystals-polygonal-evaporite-crust-4-4",
      "p": [
        1.19,
        0.23,
        0.95
      ],
      "s": [
        0.48,
        0.044,
        0.43
      ],
      "c": 7712955,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "desert-salt-flat-crystals-salt-crystal-spear-0",
      "p": [
        0.84,
        0.43499999999999994,
        0
      ],
      "s": [
        0.19,
        0.29,
        0.23
      ],
      "c": 9992545
    },
    {
      "t": "cone",
      "n": "desert-salt-flat-crystals-salt-crystal-spear-1",
      "p": [
        0.7437830615486963,
        0.54,
        0.3903674645167655
      ],
      "s": [
        0.19,
        0.5,
        0.23
      ],
      "c": 12969193
    },
    {
      "t": "cone",
      "n": "desert-salt-flat-crystals-salt-crystal-spear-2",
      "p": [
        0.47717438725417094,
        0.645,
        0.6913064473506713
      ],
      "s": [
        0.19,
        0.71,
        0.23
      ],
      "c": 9992545
    },
    {
      "t": "cone",
      "n": "desert-salt-flat-crystals-salt-crystal-spear-3",
      "p": [
        0.10125081141447131,
        0.75,
        0.8338754542423653
      ],
      "s": [
        0.19,
        0.9199999999999999,
        0.23
      ],
      "c": 12969193
    },
    {
      "t": "cone",
      "n": "desert-salt-flat-crystals-salt-crystal-spear-4",
      "p": [
        -0.29786810511572975,
        0.43499999999999994,
        0.7854136438557484
      ],
      "s": [
        0.19,
        0.29,
        0.23
      ],
      "c": 9992545
    },
    {
      "t": "cone",
      "n": "desert-salt-flat-crystals-salt-crystal-spear-5",
      "p": [
        -0.6287490284637249,
        0.54,
        0.557023032922268
      ],
      "s": [
        0.19,
        0.5,
        0.23
      ],
      "c": 12969193
    },
    {
      "t": "cone",
      "n": "desert-salt-flat-crystals-salt-crystal-spear-6",
      "p": [
        -0.8155911266378837,
        0.645,
        0.20102515800154844
      ],
      "s": [
        0.19,
        0.71,
        0.23
      ],
      "c": 9992545
    },
    {
      "t": "cone",
      "n": "desert-salt-flat-crystals-salt-crystal-spear-7",
      "p": [
        -0.8155911266378838,
        0.75,
        -0.20102515800154824
      ],
      "s": [
        0.19,
        0.9199999999999999,
        0.23
      ],
      "c": 12969193
    },
    {
      "t": "cone",
      "n": "desert-salt-flat-crystals-salt-crystal-spear-8",
      "p": [
        -0.628749028463725,
        0.43499999999999994,
        -0.5570230329222677
      ],
      "s": [
        0.19,
        0.29,
        0.23
      ],
      "c": 9992545
    },
    {
      "t": "cone",
      "n": "desert-salt-flat-crystals-salt-crystal-spear-9",
      "p": [
        -0.29786810511573014,
        0.54,
        -0.7854136438557483
      ],
      "s": [
        0.19,
        0.5,
        0.23
      ],
      "c": 12969193
    },
    {
      "t": "cone",
      "n": "desert-salt-flat-crystals-salt-crystal-spear-10",
      "p": [
        0.10125081141447148,
        0.645,
        -0.8338754542423653
      ],
      "s": [
        0.19,
        0.71,
        0.23
      ],
      "c": 9992545
    },
    {
      "t": "cone",
      "n": "desert-salt-flat-crystals-salt-crystal-spear-11",
      "p": [
        0.47717438725417005,
        0.75,
        -0.6913064473506718
      ],
      "s": [
        0.19,
        0.9199999999999999,
        0.23
      ],
      "c": 12969193
    },
    {
      "t": "cone",
      "n": "desert-salt-flat-crystals-salt-crystal-spear-12",
      "p": [
        0.7437830615486964,
        0.43499999999999994,
        -0.39036746451676546
      ],
      "s": [
        0.19,
        0.29,
        0.23
      ],
      "c": 9992545
    }
  ]
}); }
