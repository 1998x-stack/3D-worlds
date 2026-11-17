import { buildRecipe } from './recipe_engine.js';
/** Bamboo Dimsum Steamer Set — editable original scene geometry. */
export const assetMeta = {
  "id": "kitchen.bamboo-dimsum-steamer-set.001",
  "slug": "bamboo-dimsum-steamer-set",
  "title": "Bamboo Dimsum Steamer Set",
  "title_zh": "竹制蒸笼点心组合",
  "summary": "Stacked bamboo dim sum steamers with woven rings, dumplings and serving tray",
  "category": "kitchen",
  "tags": [
    "dimsum",
    "steamer",
    "bamboo"
  ],
  "dimensions_m": [
    0.49,
    0.59,
    0.52
  ],
  "generator": "createBambooDimsumSteamerSet",
  "source_path": "src/models/bamboo_dimsum_steamer_set.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/bamboo-dimsum-steamer-set.webp"
};
export function createBambooDimsumSteamerSet() { return buildRecipe({
  "title": "Bamboo Dimsum Steamer Set",
  "dimensions": [
    0.49,
    0.59,
    0.52
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "steamer-low",
      "p": [
        0,
        0.17,
        0
      ],
      "s": [
        0.44,
        0.25,
        0.44
      ],
      "c": 9793873
    },
    {
      "t": "cylinder",
      "n": "steamer-upper",
      "p": [
        0,
        0.38,
        0
      ],
      "s": [
        0.44,
        0.23,
        0.44
      ],
      "c": 12427642
    },
    {
      "t": "cylinder",
      "n": "lid",
      "p": [
        0,
        0.53,
        0
      ],
      "s": [
        0.49,
        0.075,
        0.49
      ],
      "c": 12756075
    },
    {
      "t": "sphere",
      "n": "lid-grip",
      "p": [
        0,
        0.59,
        0
      ],
      "s": [
        0.12,
        0.055,
        0.12
      ],
      "c": 9793873
    },
    {
      "t": "torus",
      "n": "weave-band-0",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        0.64,
        0.64,
        0.64
      ],
      "c": 12690558,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "weave-band-1",
      "p": [
        0,
        0.15000000000000002,
        0
      ],
      "s": [
        0.64,
        0.64,
        0.64
      ],
      "c": 9135945,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "weave-band-2",
      "p": [
        0,
        0.22000000000000003,
        0
      ],
      "s": [
        0.64,
        0.64,
        0.64
      ],
      "c": 12690558,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "weave-band-3",
      "p": [
        0,
        0.29000000000000004,
        0
      ],
      "s": [
        0.64,
        0.64,
        0.64
      ],
      "c": 9135945,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "weave-band-4",
      "p": [
        0,
        0.36000000000000004,
        0
      ],
      "s": [
        0.64,
        0.64,
        0.64
      ],
      "c": 12690558,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "weave-band-5",
      "p": [
        0,
        0.43000000000000005,
        0
      ],
      "s": [
        0.64,
        0.64,
        0.64
      ],
      "c": 9135945,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "weave-band-6",
      "p": [
        0,
        0.5,
        0
      ],
      "s": [
        0.64,
        0.64,
        0.64
      ],
      "c": 12690558,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "dumpling-0",
      "p": [
        0.12,
        0.28,
        0
      ],
      "s": [
        0.1,
        0.065,
        0.09
      ],
      "c": 15131094
    },
    {
      "t": "cone",
      "n": "dumpling-pleat-0",
      "p": [
        0.12,
        0.35,
        0
      ],
      "s": [
        0.035,
        0.055,
        0.035
      ],
      "c": 14078655
    },
    {
      "t": "sphere",
      "n": "dumpling-1",
      "p": [
        0.06000000000000001,
        0.28,
        0.09526279441628825
      ],
      "s": [
        0.1,
        0.065,
        0.09
      ],
      "c": 15131094
    },
    {
      "t": "cone",
      "n": "dumpling-pleat-1",
      "p": [
        0.06000000000000001,
        0.35,
        0.09526279441628825
      ],
      "s": [
        0.035,
        0.055,
        0.035
      ],
      "c": 14078655
    },
    {
      "t": "sphere",
      "n": "dumpling-2",
      "p": [
        -0.05999999999999997,
        0.28,
        0.09526279441628825
      ],
      "s": [
        0.1,
        0.065,
        0.09
      ],
      "c": 15131094
    },
    {
      "t": "cone",
      "n": "dumpling-pleat-2",
      "p": [
        -0.05999999999999997,
        0.35,
        0.09526279441628825
      ],
      "s": [
        0.035,
        0.055,
        0.035
      ],
      "c": 14078655
    },
    {
      "t": "sphere",
      "n": "dumpling-3",
      "p": [
        -0.12,
        0.28,
        1.3471114790620885e-17
      ],
      "s": [
        0.1,
        0.065,
        0.09
      ],
      "c": 15131094
    },
    {
      "t": "cone",
      "n": "dumpling-pleat-3",
      "p": [
        -0.12,
        0.35,
        1.3471114790620885e-17
      ],
      "s": [
        0.035,
        0.055,
        0.035
      ],
      "c": 14078655
    },
    {
      "t": "sphere",
      "n": "dumpling-4",
      "p": [
        -0.06000000000000005,
        0.28,
        -0.09526279441628822
      ],
      "s": [
        0.1,
        0.065,
        0.09
      ],
      "c": 15131094
    },
    {
      "t": "cone",
      "n": "dumpling-pleat-4",
      "p": [
        -0.06000000000000005,
        0.35,
        -0.09526279441628822
      ],
      "s": [
        0.035,
        0.055,
        0.035
      ],
      "c": 14078655
    },
    {
      "t": "sphere",
      "n": "dumpling-5",
      "p": [
        0.06000000000000001,
        0.28,
        -0.09526279441628825
      ],
      "s": [
        0.1,
        0.065,
        0.09
      ],
      "c": 15131094
    },
    {
      "t": "cone",
      "n": "dumpling-pleat-5",
      "p": [
        0.06000000000000001,
        0.35,
        -0.09526279441628825
      ],
      "s": [
        0.035,
        0.055,
        0.035
      ],
      "c": 14078655
    },
    {
      "t": "box",
      "n": "serving-board",
      "p": [
        0,
        0.025,
        0
      ],
      "s": [
        0.48,
        0.05,
        0.51
      ],
      "c": 10913633
    },
    {
      "t": "box",
      "n": "basket-grip-0",
      "p": [
        -0.18,
        0.41,
        0.24
      ],
      "s": [
        0.07,
        0.06,
        0.025
      ],
      "c": 3556171
    },
    {
      "t": "box",
      "n": "basket-grip-1",
      "p": [
        0.18,
        0.41,
        0.24
      ],
      "s": [
        0.07,
        0.06,
        0.025
      ],
      "c": 3556171
    }
  ]
}); }
