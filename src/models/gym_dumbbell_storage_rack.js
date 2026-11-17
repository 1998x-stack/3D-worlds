import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "sports.gym-dumbbell-storage-rack.001",
  "slug": "gym-dumbbell-storage-rack",
  "title": "Gym Dumbbell Storage Rack",
  "title_zh": "健身哑铃存放架",
  "summary": "A-frame gym rack holding six matched dumbbells on three tiers.",
  "category": "sports",
  "tags": [
    "gym",
    "dumbbell",
    "fitness",
    "sports"
  ],
  "dimensions_m": [
    1.37,
    1.13,
    0.61
  ],
  "generator": "createGymDumbbellStorageRack",
  "source_path": "src/models/gym_dumbbell_storage_rack.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/gym-dumbbell-storage-rack.webp"
};
export function createGymDumbbellStorageRack() {return buildRecipe({
  "title": "Gym Dumbbell Storage Rack",
  "dimensions": [
    1.37,
    1.13,
    0.61
  ],
  "parts": [
    {
      "t": "rod",
      "n": "left-frame",
      "from": [
        -0.58,
        0.08,
        0.23
      ],
      "to": [
        -0.58,
        1.1,
        -0.15
      ],
      "r": 0.036,
      "c": 3424586
    },
    {
      "t": "rod",
      "n": "right-frame",
      "from": [
        0.58,
        0.08,
        0.23
      ],
      "to": [
        0.58,
        1.1,
        -0.15
      ],
      "r": 0.036,
      "c": 3424586
    },
    {
      "t": "box",
      "n": "brand-plate",
      "p": [
        0,
        1.1,
        -0.11
      ],
      "s": [
        0.42,
        0.06,
        0.05
      ],
      "c": 12690292
    },
    {
      "t": "box",
      "n": "shelf-0",
      "p": [
        0,
        0.32,
        -0.08
      ],
      "s": [
        1.34,
        0.065,
        0.42
      ],
      "c": 9348268
    },
    {
      "t": "cylinder",
      "n": "weight-left-0-0",
      "p": [
        -0.54,
        0.38,
        -0.05
      ],
      "s": [
        0.17,
        0.085,
        0.17
      ],
      "c": 3424586,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "weight-right-0-0",
      "p": [
        -0.32,
        0.38,
        -0.05
      ],
      "s": [
        0.17,
        0.085,
        0.17
      ],
      "c": 3424586,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "dumbbell-grip-0-0",
      "from": [
        -0.55,
        0.38,
        -0.05
      ],
      "to": [
        -0.31,
        0.38,
        -0.05
      ],
      "r": 0.023,
      "c": 9348268
    },
    {
      "t": "cylinder",
      "n": "weight-left-0-1",
      "p": [
        0.32,
        0.38,
        -0.05
      ],
      "s": [
        0.17,
        0.085,
        0.17
      ],
      "c": 3424586,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "weight-right-0-1",
      "p": [
        0.54,
        0.38,
        -0.05
      ],
      "s": [
        0.17,
        0.085,
        0.17
      ],
      "c": 3424586,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "dumbbell-grip-0-1",
      "from": [
        0.31,
        0.38,
        -0.05
      ],
      "to": [
        0.55,
        0.38,
        -0.05
      ],
      "r": 0.023,
      "c": 9348268
    },
    {
      "t": "box",
      "n": "shelf-1",
      "p": [
        0,
        0.6599999999999999,
        -0.08
      ],
      "s": [
        1.34,
        0.065,
        0.42
      ],
      "c": 9348268
    },
    {
      "t": "cylinder",
      "n": "weight-left-1-0",
      "p": [
        -0.54,
        0.72,
        -0.05
      ],
      "s": [
        0.17,
        0.085,
        0.17
      ],
      "c": 3424586,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "weight-right-1-0",
      "p": [
        -0.32,
        0.72,
        -0.05
      ],
      "s": [
        0.17,
        0.085,
        0.17
      ],
      "c": 3424586,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "dumbbell-grip-1-0",
      "from": [
        -0.55,
        0.72,
        -0.05
      ],
      "to": [
        -0.31,
        0.72,
        -0.05
      ],
      "r": 0.023,
      "c": 9348268
    },
    {
      "t": "cylinder",
      "n": "weight-left-1-1",
      "p": [
        0.32,
        0.72,
        -0.05
      ],
      "s": [
        0.17,
        0.085,
        0.17
      ],
      "c": 3424586,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "weight-right-1-1",
      "p": [
        0.54,
        0.72,
        -0.05
      ],
      "s": [
        0.17,
        0.085,
        0.17
      ],
      "c": 3424586,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "dumbbell-grip-1-1",
      "from": [
        0.31,
        0.72,
        -0.05
      ],
      "to": [
        0.55,
        0.72,
        -0.05
      ],
      "r": 0.023,
      "c": 9348268
    },
    {
      "t": "box",
      "n": "shelf-2",
      "p": [
        0,
        1,
        -0.08
      ],
      "s": [
        1.34,
        0.065,
        0.42
      ],
      "c": 9348268
    },
    {
      "t": "cylinder",
      "n": "weight-left-2-0",
      "p": [
        -0.54,
        1.06,
        -0.05
      ],
      "s": [
        0.17,
        0.085,
        0.17
      ],
      "c": 3424586,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "weight-right-2-0",
      "p": [
        -0.32,
        1.06,
        -0.05
      ],
      "s": [
        0.17,
        0.085,
        0.17
      ],
      "c": 3424586,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "dumbbell-grip-2-0",
      "from": [
        -0.55,
        1.06,
        -0.05
      ],
      "to": [
        -0.31,
        1.06,
        -0.05
      ],
      "r": 0.023,
      "c": 9348268
    },
    {
      "t": "cylinder",
      "n": "weight-left-2-1",
      "p": [
        0.32,
        1.06,
        -0.05
      ],
      "s": [
        0.17,
        0.085,
        0.17
      ],
      "c": 3424586,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "weight-right-2-1",
      "p": [
        0.54,
        1.06,
        -0.05
      ],
      "s": [
        0.17,
        0.085,
        0.17
      ],
      "c": 3424586,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "dumbbell-grip-2-1",
      "from": [
        0.31,
        1.06,
        -0.05
      ],
      "to": [
        0.55,
        1.06,
        -0.05
      ],
      "r": 0.023,
      "c": 9348268
    },
    {
      "t": "box",
      "n": "rack-foot-0",
      "p": [
        -0.58,
        0.04,
        0
      ],
      "s": [
        0.12,
        0.08,
        0.55
      ],
      "c": 3424586
    },
    {
      "t": "box",
      "n": "rack-foot-1",
      "p": [
        0.58,
        0.04,
        0
      ],
      "s": [
        0.12,
        0.08,
        0.55
      ],
      "c": 3424586
    }
  ]
});}
