import { buildRecipe } from './recipe_engine.js';
/** Original V1.4 maker-market inspired design: Refillable Toothbrush Station / 可替换牙刷收纳站. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "bathroom.refillable-toothbrush-station.001",
  "slug": "refillable-toothbrush-station",
  "title": "Refillable Toothbrush Station",
  "title_zh": "可替换牙刷收纳站",
  "summary": "Countertop oral-care organizer with replaceable heads, brush slots and a removable-look reservoir",
  "category": "bathroom",
  "tags": [
    "refillable",
    "toothbrush",
    "station",
    "bathroom",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.22,
    0.22,
    0.14
  ],
  "generator": "createRefillableToothbrushStation",
  "source_path": "src/models/refillable_toothbrush_station.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.4",
  "preview_path": "public/thumbs/refillable-toothbrush-station.webp",
  "accent": "#78c9ad"
};
export function createRefillableToothbrushStation() { return buildRecipe({
  "title": "Refillable Toothbrush Station",
  "dimensions": [
    0.22,
    0.22,
    0.14
  ],
  "parts": [
    {
      "t": "box",
      "n": "water-tray",
      "p": [
        0,
        0.09,
        0
      ],
      "s": [
        2,
        0.18,
        1.3
      ],
      "c": 4084325
    },
    {
      "t": "cylinder",
      "n": "central-reservoir",
      "p": [
        0,
        0.53,
        0
      ],
      "s": [
        0.7,
        0.82,
        0.7
      ],
      "c": 10143185
    },
    {
      "t": "cylinder",
      "n": "removable-cap",
      "p": [
        0,
        1,
        0
      ],
      "s": [
        0.82,
        0.14,
        0.82
      ],
      "c": 2570315
    },
    {
      "t": "cylinder",
      "n": "brush-collar0",
      "p": [
        0.78,
        0.42,
        0
      ],
      "s": [
        0.26,
        0.18,
        0.26
      ],
      "c": 15853002
    },
    {
      "t": "rod",
      "n": "brush-placeholder0",
      "from": [
        0.78,
        0.43,
        0
      ],
      "to": [
        0.78,
        1.44,
        0
      ],
      "r": 0.048,
      "c": 7915949
    },
    {
      "t": "box",
      "n": "brush-head0",
      "p": [
        0.78,
        1.48,
        0
      ],
      "s": [
        0.17,
        0.13,
        0.07
      ],
      "c": 15001563
    },
    {
      "t": "cylinder",
      "n": "brush-collar1",
      "p": [
        0.24103325561245903,
        0.42,
        0.39944373684396445
      ],
      "s": [
        0.26,
        0.18,
        0.26
      ],
      "c": 15853002
    },
    {
      "t": "rod",
      "n": "brush-placeholder1",
      "from": [
        0.24103325561245903,
        0.43,
        0.39944373684396445
      ],
      "to": [
        0.24103325561245903,
        1.44,
        0.39944373684396445
      ],
      "r": 0.048,
      "c": 15776881
    },
    {
      "t": "box",
      "n": "brush-head1",
      "p": [
        0.24103325561245903,
        1.48,
        0.39944373684396445
      ],
      "s": [
        0.17,
        0.13,
        0.07
      ],
      "c": 15001563
    },
    {
      "t": "cylinder",
      "n": "brush-collar2",
      "p": [
        -0.6310332556124589,
        0.42,
        0.24686980596283875
      ],
      "s": [
        0.26,
        0.18,
        0.26
      ],
      "c": 15853002
    },
    {
      "t": "rod",
      "n": "brush-placeholder2",
      "from": [
        -0.6310332556124589,
        0.43,
        0.24686980596283875
      ],
      "to": [
        -0.6310332556124589,
        1.44,
        0.24686980596283875
      ],
      "r": 0.048,
      "c": 10143185
    },
    {
      "t": "box",
      "n": "brush-head2",
      "p": [
        -0.6310332556124589,
        1.48,
        0.24686980596283875
      ],
      "s": [
        0.17,
        0.13,
        0.07
      ],
      "c": 15001563
    },
    {
      "t": "cylinder",
      "n": "brush-collar3",
      "p": [
        -0.6310332556124592,
        0.42,
        -0.24686980596283867
      ],
      "s": [
        0.26,
        0.18,
        0.26
      ],
      "c": 15853002
    },
    {
      "t": "rod",
      "n": "brush-placeholder3",
      "from": [
        -0.6310332556124592,
        0.43,
        -0.24686980596283867
      ],
      "to": [
        -0.6310332556124592,
        1.44,
        -0.24686980596283867
      ],
      "r": 0.048,
      "c": 14648424
    },
    {
      "t": "box",
      "n": "brush-head3",
      "p": [
        -0.6310332556124592,
        1.48,
        -0.24686980596283867
      ],
      "s": [
        0.17,
        0.13,
        0.07
      ],
      "c": 15001563
    },
    {
      "t": "cylinder",
      "n": "brush-collar4",
      "p": [
        0.24103325561245884,
        0.42,
        -0.3994437368439645
      ],
      "s": [
        0.26,
        0.18,
        0.26
      ],
      "c": 15853002
    },
    {
      "t": "rod",
      "n": "brush-placeholder4",
      "from": [
        0.24103325561245884,
        0.43,
        -0.3994437368439645
      ],
      "to": [
        0.24103325561245884,
        1.44,
        -0.3994437368439645
      ],
      "r": 0.048,
      "c": 13210279
    },
    {
      "t": "box",
      "n": "brush-head4",
      "p": [
        0.24103325561245884,
        1.48,
        -0.3994437368439645
      ],
      "s": [
        0.17,
        0.13,
        0.07
      ],
      "c": 15001563
    },
    {
      "t": "box",
      "n": "tray-drain-groove0",
      "p": [
        -0.7,
        0.19,
        0.48
      ],
      "s": [
        0.08,
        0.02,
        0.24
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "tray-drain-groove1",
      "p": [
        -0.23999999999999994,
        0.19,
        0.48
      ],
      "s": [
        0.08,
        0.02,
        0.24
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "tray-drain-groove2",
      "p": [
        0.22000000000000008,
        0.19,
        0.48
      ],
      "s": [
        0.08,
        0.02,
        0.24
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "tray-drain-groove3",
      "p": [
        0.6800000000000002,
        0.19,
        0.48
      ],
      "s": [
        0.08,
        0.02,
        0.24
      ],
      "c": 7915949
    }
  ]
}); }
