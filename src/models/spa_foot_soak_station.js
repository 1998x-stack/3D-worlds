import { buildRecipe } from './recipe_engine.js';
/** Spa Foot Soak Station / 足浴泡脚护理站: original authored, source-editable scene prop. */
export const assetMeta = {
  "id": "bathroom.spa-foot-soak-station.001",
  "slug": "spa-foot-soak-station",
  "title": "Spa Foot Soak Station",
  "title_zh": "足浴泡脚护理站",
  "summary": "Compact foot soak chair and inset basin with massage rollers, controls and drainage",
  "category": "bathroom",
  "tags": [
    "spa",
    "footbath",
    "relaxation"
  ],
  "dimensions_m": [
    0.79,
    0.69,
    0.91
  ],
  "generator": "createSpaFootSoakStation",
  "source_path": "src/models/spa_foot_soak_station.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/spa-foot-soak-station.webp"
};
export function createSpaFootSoakStation() { return buildRecipe({
  "title": "Spa Foot Soak Station",
  "dimensions": [
    0.79,
    0.69,
    0.91
  ],
  "parts": [
    {
      "t": "box",
      "n": "pedestal-body",
      "p": [
        0,
        0.25,
        0
      ],
      "s": [
        0.76,
        0.5,
        0.86
      ],
      "c": 12110278
    },
    {
      "t": "sphere",
      "n": "inner-basin",
      "p": [
        0,
        0.52,
        0.16
      ],
      "s": [
        0.62,
        0.19,
        0.53
      ],
      "c": 7711411
    },
    {
      "t": "sphere",
      "n": "water-surface",
      "p": [
        0,
        0.59,
        0.17
      ],
      "s": [
        0.5,
        0.026,
        0.41
      ],
      "c": 10734544
    },
    {
      "t": "box",
      "n": "rear-control-deck",
      "p": [
        0,
        0.62,
        -0.29
      ],
      "s": [
        0.71,
        0.13,
        0.2
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "touch-display",
      "p": [
        0,
        0.7,
        -0.29
      ],
      "s": [
        0.37,
        0.025,
        0.1
      ],
      "c": 4751771
    },
    {
      "t": "sphere",
      "n": "pedal-control-0",
      "p": [
        -0.23,
        0.68,
        -0.25
      ],
      "s": [
        0.039,
        0.018,
        0.028
      ],
      "c": 15328729
    },
    {
      "t": "sphere",
      "n": "pedal-control-1",
      "p": [
        0.23,
        0.68,
        -0.25
      ],
      "s": [
        0.039,
        0.018,
        0.028
      ],
      "c": 15328729
    },
    {
      "t": "cylinder",
      "n": "foot-massage-roller-0",
      "p": [
        -0.2,
        0.49,
        0.04
      ],
      "s": [
        0.075,
        0.1,
        0.075
      ],
      "c": 9741736,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "foot-massage-roller-1",
      "p": [
        0,
        0.49,
        0.04
      ],
      "s": [
        0.075,
        0.1,
        0.075
      ],
      "c": 9741736,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "foot-massage-roller-2",
      "p": [
        0.2,
        0.49,
        0.04
      ],
      "s": [
        0.075,
        0.1,
        0.075
      ],
      "c": 9741736,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "foot-massage-roller-3",
      "p": [
        -0.2,
        0.49,
        0.24000000000000002
      ],
      "s": [
        0.075,
        0.1,
        0.075
      ],
      "c": 9741736,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "foot-massage-roller-4",
      "p": [
        0,
        0.49,
        0.24000000000000002
      ],
      "s": [
        0.075,
        0.1,
        0.075
      ],
      "c": 9741736,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "foot-massage-roller-5",
      "p": [
        0.2,
        0.49,
        0.24000000000000002
      ],
      "s": [
        0.075,
        0.1,
        0.075
      ],
      "c": 9741736,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "side-carry-grip",
      "p": [
        0.39,
        0.39,
        0
      ],
      "s": [
        0.035,
        0.11,
        0.27
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "drain-plug",
      "p": [
        0,
        0.52,
        0.42
      ],
      "s": [
        0.11,
        0.025,
        0.08
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "non-slip-foot-0",
      "p": [
        -0.28,
        0.04,
        -0.26
      ],
      "s": [
        0.12,
        0.08,
        0.16
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "non-slip-foot-1",
      "p": [
        0.28,
        0.04,
        -0.26
      ],
      "s": [
        0.12,
        0.08,
        0.16
      ],
      "c": 3490120
    }
  ]
}); }
