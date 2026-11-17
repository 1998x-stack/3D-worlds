import { buildRecipe } from './recipe_engine.js';
/** Timber Roof Truss: individually authored procedural geometry. */
export const assetMeta = {
  "id": "architecture.timber-roof-truss.001",
  "slug": "timber-roof-truss",
  "title": "Timber Roof Truss",
  "title_zh": "木结构屋架",
  "summary": "Exposed triangular roof truss with tie-beam, angled rafters and king post.",
  "category": "architecture",
  "tags": [
    "timber",
    "truss",
    "roof",
    "architecture"
  ],
  "dimensions_m": [
    4.2,
    1.76,
    0.34
  ],
  "generator": "createTimberRoofTruss",
  "source_path": "src/models/timber_roof_truss.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/timber-roof-truss.webp"
};
export function createTimberRoofTruss() {
 return buildRecipe({
  "title": "Timber Roof Truss",
  "dimensions": [
    4.2,
    1.76,
    0.34
  ],
  "parts": [
    {
      "t": "rod",
      "n": "left-rafter",
      "from": [
        -2.1,
        0.12,
        0
      ],
      "to": [
        0,
        1.73,
        0
      ],
      "r": 0.079,
      "c": 11042392
    },
    {
      "t": "rod",
      "n": "right-rafter",
      "from": [
        2.1,
        0.12,
        0
      ],
      "to": [
        0,
        1.73,
        0
      ],
      "r": 0.079,
      "c": 11042392
    },
    {
      "t": "rod",
      "n": "bottom-tie",
      "from": [
        -2.05,
        0.14,
        0
      ],
      "to": [
        2.05,
        0.14,
        0
      ],
      "r": 0.085,
      "c": 7821117
    },
    {
      "t": "rod",
      "n": "king-post",
      "from": [
        0,
        0.14,
        0
      ],
      "to": [
        0,
        1.69,
        0
      ],
      "r": 0.06,
      "c": 11042392
    },
    {
      "t": "rod",
      "n": "queen-diagonal-0",
      "from": [
        -1.4,
        0.14,
        0
      ],
      "to": [
        -0.61,
        1.25,
        0
      ],
      "r": 0.054,
      "c": 10452312
    },
    {
      "t": "rod",
      "n": "upper-brace-0",
      "from": [
        -0.95,
        0.87,
        0
      ],
      "to": [
        -0.14,
        0.21,
        0
      ],
      "r": 0.05,
      "c": 11042392
    },
    {
      "t": "box",
      "n": "foot-gusset-0",
      "p": [
        -1.96,
        0.15,
        0.08
      ],
      "s": [
        0.18,
        0.16,
        0.045
      ],
      "c": 8886427
    },
    {
      "t": "rod",
      "n": "queen-diagonal-1",
      "from": [
        1.4,
        0.14,
        0
      ],
      "to": [
        0.61,
        1.25,
        0
      ],
      "r": 0.054,
      "c": 10452312
    },
    {
      "t": "rod",
      "n": "upper-brace-1",
      "from": [
        0.95,
        0.87,
        0
      ],
      "to": [
        0.14,
        0.21,
        0
      ],
      "r": 0.05,
      "c": 11042392
    },
    {
      "t": "box",
      "n": "foot-gusset-1",
      "p": [
        1.96,
        0.15,
        0.08
      ],
      "s": [
        0.18,
        0.16,
        0.045
      ],
      "c": 8886427
    },
    {
      "t": "box",
      "n": "ridge-joint",
      "p": [
        0,
        1.69,
        0.055
      ],
      "s": [
        0.21,
        0.12,
        0.055
      ],
      "c": 8886427
    },
    {
      "t": "box",
      "n": "joint-plate-0",
      "p": [
        -0.65,
        0.14,
        0.093
      ],
      "s": [
        0.2,
        0.12,
        0.035
      ],
      "c": 3160900
    },
    {
      "t": "box",
      "n": "joint-plate-1",
      "p": [
        0.65,
        0.14,
        0.093
      ],
      "s": [
        0.2,
        0.12,
        0.035
      ],
      "c": 3160900
    }
  ]
});
}
