import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "tools.retractable-tape-measure.001",
  "slug": "retractable-tape-measure",
  "title": "Retractable Tape Measure",
  "title_zh": "伸缩卷尺",
  "summary": "Compact metric tape with polymer case, extended measurement ribbon and hook.",
  "category": "tools",
  "tags": [
    "measure",
    "tape",
    "construction"
  ],
  "dimensions_m": [
    0.21,
    0.14,
    0.29
  ],
  "generator": "createRetractableTapeMeasure",
  "source_path": "src/models/retractable_tape_measure.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/retractable-tape-measure.webp"
};
export function createRetractableTapeMeasure() {
 return buildRecipe({
  "title": "Retractable Tape Measure",
  "dimensions": [
    0.21,
    0.14,
    0.29
  ],
  "parts": [
    {
      "t": "box",
      "n": "outer-case",
      "p": [
        0,
        0.075,
        -0.065
      ],
      "s": [
        0.2,
        0.14,
        0.18
      ],
      "c": 14923361
    },
    {
      "t": "sphere",
      "n": "round-housing",
      "p": [
        0,
        0.07,
        -0.11
      ],
      "s": [
        0.2,
        0.14,
        0.2
      ],
      "c": 13804617
    },
    {
      "t": "box",
      "n": "rubber-grip",
      "p": [
        0.1,
        0.074,
        -0.06
      ],
      "s": [
        0.018,
        0.1,
        0.14
      ],
      "c": 3161155
    },
    {
      "t": "box",
      "n": "yellow-measurement-ribbon",
      "p": [
        0,
        0.065,
        0.115
      ],
      "s": [
        0.05,
        0.009,
        0.29
      ],
      "c": 15189613
    },
    {
      "t": "box",
      "n": "locking-slider",
      "p": [
        0,
        0.145,
        -0.005
      ],
      "s": [
        0.08,
        0.023,
        0.07
      ],
      "c": 3161155
    },
    {
      "t": "box",
      "n": "belt-clip",
      "p": [
        -0.105,
        0.077,
        -0.09
      ],
      "s": [
        0.014,
        0.09,
        0.09
      ],
      "c": 9018268
    },
    {
      "t": "box",
      "n": "end-hook",
      "p": [
        0,
        0.053,
        0.26
      ],
      "s": [
        0.091,
        0.026,
        0.018
      ],
      "c": 9018268
    },
    {
      "t": "box",
      "n": "metric-tick-0",
      "p": [
        -0.017,
        0.074,
        0.018
      ],
      "s": [
        0.022,
        0.004,
        0.006
      ],
      "c": 3161155
    },
    {
      "t": "box",
      "n": "metric-tick-1",
      "p": [
        -0.017,
        0.074,
        0.056999999999999995
      ],
      "s": [
        0.022,
        0.004,
        0.006
      ],
      "c": 3161155
    },
    {
      "t": "box",
      "n": "metric-tick-2",
      "p": [
        -0.017,
        0.074,
        0.096
      ],
      "s": [
        0.022,
        0.004,
        0.006
      ],
      "c": 3161155
    },
    {
      "t": "box",
      "n": "metric-tick-3",
      "p": [
        -0.017,
        0.074,
        0.13499999999999998
      ],
      "s": [
        0.022,
        0.004,
        0.006
      ],
      "c": 3161155
    },
    {
      "t": "box",
      "n": "metric-tick-4",
      "p": [
        -0.017,
        0.074,
        0.174
      ],
      "s": [
        0.022,
        0.004,
        0.006
      ],
      "c": 3161155
    },
    {
      "t": "sphere",
      "n": "lanyard-loop",
      "p": [
        0.08,
        0.08,
        -0.145
      ],
      "s": [
        0.03,
        0.03,
        0.02
      ],
      "c": 3161155
    }
  ]
});
}
