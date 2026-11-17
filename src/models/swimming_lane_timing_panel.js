import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Swimming Lane Timing Panel / 泳道自动计时终端. */
export const assetMeta = {
  "id": "sports.swimming-lane-timing-panel.001",
  "slug": "swimming-lane-timing-panel",
  "title": "Swimming Lane Timing Panel",
  "title_zh": "泳道自动计时终端",
  "summary": "Pool race electronic timing panel with lane pads, race clock and cable distribution",
  "category": "sports",
  "tags": [
    "swimming",
    "lane",
    "timing",
    "panel",
    "sports",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.65,
    1.95,
    0.72
  ],
  "generator": "createSwimmingLaneTimingPanel",
  "source_path": "src/models/swimming_lane_timing_panel.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/swimming-lane-timing-panel.webp",
  "accent": "#3d5767"
};
export function createSwimmingLaneTimingPanel() { return buildRecipe({
  "title": "Swimming Lane Timing Panel",
  "dimensions": [
    1.65,
    1.95,
    0.72
  ],
  "parts": [
    {
      "t": "box",
      "n": "competition-clock-control-post",
      "p": [
        0,
        0.98,
        0
      ],
      "s": [
        1.2,
        1.88,
        0.52
      ],
      "c": 5869473
    },
    {
      "t": "box",
      "n": "race-digital-time-display",
      "p": [
        0,
        1.56,
        0.28
      ],
      "s": [
        1.06,
        0.42,
        0.035
      ],
      "c": 4020071
    },
    {
      "t": "box",
      "n": "timing-numeric-indicator-0",
      "p": [
        -0.42,
        1.56,
        0.3
      ],
      "s": [
        0.075,
        0.21,
        0.013
      ],
      "c": 14540250
    },
    {
      "t": "box",
      "n": "timing-numeric-indicator-1",
      "p": [
        -0.3,
        1.56,
        0.3
      ],
      "s": [
        0.075,
        0.21,
        0.013
      ],
      "c": 14540250
    },
    {
      "t": "box",
      "n": "timing-numeric-indicator-2",
      "p": [
        -0.18,
        1.56,
        0.3
      ],
      "s": [
        0.075,
        0.21,
        0.013
      ],
      "c": 14540250
    },
    {
      "t": "box",
      "n": "timing-numeric-indicator-3",
      "p": [
        -0.06,
        1.56,
        0.3
      ],
      "s": [
        0.075,
        0.21,
        0.013
      ],
      "c": 14540250
    },
    {
      "t": "box",
      "n": "timing-numeric-indicator-4",
      "p": [
        0.06,
        1.56,
        0.3
      ],
      "s": [
        0.075,
        0.21,
        0.013
      ],
      "c": 14540250
    },
    {
      "t": "box",
      "n": "timing-numeric-indicator-5",
      "p": [
        0.18,
        1.56,
        0.3
      ],
      "s": [
        0.075,
        0.21,
        0.013
      ],
      "c": 14540250
    },
    {
      "t": "box",
      "n": "timing-numeric-indicator-6",
      "p": [
        0.3,
        1.56,
        0.3
      ],
      "s": [
        0.075,
        0.21,
        0.013
      ],
      "c": 14540250
    },
    {
      "t": "box",
      "n": "timing-numeric-indicator-7",
      "p": [
        0.42,
        1.56,
        0.3
      ],
      "s": [
        0.075,
        0.21,
        0.013
      ],
      "c": 14540250
    },
    {
      "t": "box",
      "n": "pool-lane-touchpad-0",
      "p": [
        -0.46,
        0.33,
        0.31
      ],
      "s": [
        0.19,
        0.51,
        0.05
      ],
      "c": 15379820
    },
    {
      "t": "rod",
      "n": "lane-signal-cable-0",
      "from": [
        -0.46,
        0.61,
        0.34
      ],
      "to": [
        -0.46,
        1.18,
        0.23
      ],
      "r": 0.011,
      "c": 4020071
    },
    {
      "t": "box",
      "n": "pool-lane-touchpad-1",
      "p": [
        -0.23,
        0.33,
        0.31
      ],
      "s": [
        0.19,
        0.51,
        0.05
      ],
      "c": 15379820
    },
    {
      "t": "rod",
      "n": "lane-signal-cable-1",
      "from": [
        -0.23,
        0.61,
        0.34
      ],
      "to": [
        -0.23,
        1.18,
        0.23
      ],
      "r": 0.011,
      "c": 4020071
    },
    {
      "t": "box",
      "n": "pool-lane-touchpad-2",
      "p": [
        0,
        0.33,
        0.31
      ],
      "s": [
        0.19,
        0.51,
        0.05
      ],
      "c": 15379820
    },
    {
      "t": "rod",
      "n": "lane-signal-cable-2",
      "from": [
        0,
        0.61,
        0.34
      ],
      "to": [
        0,
        1.18,
        0.23
      ],
      "r": 0.011,
      "c": 4020071
    },
    {
      "t": "box",
      "n": "pool-lane-touchpad-3",
      "p": [
        0.23000000000000004,
        0.33,
        0.31
      ],
      "s": [
        0.19,
        0.51,
        0.05
      ],
      "c": 15379820
    },
    {
      "t": "rod",
      "n": "lane-signal-cable-3",
      "from": [
        0.23000000000000004,
        0.61,
        0.34
      ],
      "to": [
        0.23000000000000004,
        1.18,
        0.23
      ],
      "r": 0.011,
      "c": 4020071
    },
    {
      "t": "box",
      "n": "pool-lane-touchpad-4",
      "p": [
        0.46,
        0.33,
        0.31
      ],
      "s": [
        0.19,
        0.51,
        0.05
      ],
      "c": 15379820
    },
    {
      "t": "rod",
      "n": "lane-signal-cable-4",
      "from": [
        0.46,
        0.61,
        0.34
      ],
      "to": [
        0.46,
        1.18,
        0.23
      ],
      "r": 0.011,
      "c": 4020071
    },
    {
      "t": "box",
      "n": "backplane-electronics-cabinet",
      "p": [
        0,
        0.92,
        -0.28
      ],
      "s": [
        0.91,
        0.56,
        0.19
      ],
      "c": 15379820
    }
  ]
}); }
