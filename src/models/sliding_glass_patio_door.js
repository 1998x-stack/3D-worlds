import { buildRecipe } from './recipe_engine.js';
/** Sliding Glass Patio Door: individually authored procedural geometry. */
export const assetMeta = {
  "id": "architecture.sliding-glass-patio-door.001",
  "slug": "sliding-glass-patio-door",
  "title": "Sliding Glass Patio Door",
  "title_zh": "双扇推拉玻璃门",
  "summary": "Modular double sliding patio door with aluminum tracks, glazing and dual handles.",
  "category": "architecture",
  "tags": [
    "door",
    "glass",
    "patio",
    "architecture"
  ],
  "dimensions_m": [
    2.21,
    2.3,
    0.17
  ],
  "generator": "createSlidingGlassPatioDoor",
  "source_path": "src/models/sliding_glass_patio_door.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/sliding-glass-patio-door.webp"
};
export function createSlidingGlassPatioDoor() {
 return buildRecipe({
  "title": "Sliding Glass Patio Door",
  "dimensions": [
    2.21,
    2.3,
    0.17
  ],
  "parts": [
    {
      "t": "box",
      "n": "top-rail",
      "p": [
        0,
        2.26,
        0
      ],
      "s": [
        2.21,
        0.08,
        0.16
      ],
      "c": 8886427
    },
    {
      "t": "box",
      "n": "bottom-track",
      "p": [
        0,
        0.045,
        0
      ],
      "s": [
        2.21,
        0.09,
        0.17
      ],
      "c": 8886427
    },
    {
      "t": "box",
      "n": "vertical-jamb-0",
      "p": [
        -1.07,
        1.13,
        0
      ],
      "s": [
        0.07,
        2.23,
        0.16
      ],
      "c": 8886427
    },
    {
      "t": "box",
      "n": "sliding-frame-0",
      "p": [
        -0.52,
        1.13,
        -0.028
      ],
      "s": [
        1,
        2.12,
        0.08
      ],
      "c": 5072753
    },
    {
      "t": "box",
      "n": "glass-pane-0",
      "p": [
        -0.52,
        1.13,
        -0.086
      ],
      "s": [
        0.87,
        1.87,
        0.017
      ],
      "c": 9420743
    },
    {
      "t": "box",
      "n": "handle-0",
      "p": [
        -0.13,
        1.1,
        -0.105
      ],
      "s": [
        0.026,
        0.24,
        0.05
      ],
      "c": 3160900
    },
    {
      "t": "box",
      "n": "glass-midrail-0",
      "p": [
        -0.52,
        0.76,
        -0.099
      ],
      "s": [
        0.89,
        0.035,
        0.022
      ],
      "c": 8886427
    },
    {
      "t": "box",
      "n": "vertical-jamb-1",
      "p": [
        1.07,
        1.13,
        0
      ],
      "s": [
        0.07,
        2.23,
        0.16
      ],
      "c": 8886427
    },
    {
      "t": "box",
      "n": "sliding-frame-1",
      "p": [
        0.52,
        1.13,
        0.028
      ],
      "s": [
        1,
        2.12,
        0.08
      ],
      "c": 5072753
    },
    {
      "t": "box",
      "n": "glass-pane-1",
      "p": [
        0.52,
        1.13,
        0.086
      ],
      "s": [
        0.87,
        1.87,
        0.017
      ],
      "c": 9420743
    },
    {
      "t": "box",
      "n": "handle-1",
      "p": [
        0.13,
        1.1,
        0.105
      ],
      "s": [
        0.026,
        0.24,
        0.05
      ],
      "c": 3160900
    },
    {
      "t": "box",
      "n": "glass-midrail-1",
      "p": [
        0.52,
        0.76,
        0.099
      ],
      "s": [
        0.89,
        0.035,
        0.022
      ],
      "c": 8886427
    },
    {
      "t": "box",
      "n": "center-overlap",
      "p": [
        0,
        1.15,
        0.02
      ],
      "s": [
        0.04,
        2.12,
        0.13
      ],
      "c": 8886427
    }
  ]
});
}
