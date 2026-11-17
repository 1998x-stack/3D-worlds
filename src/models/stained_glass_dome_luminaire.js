import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Stained Glass Dome Luminaire / 彩色玻璃穹顶灯. */
export const assetMeta = {
  "id": "decor.stained-glass-dome-luminaire.001",
  "slug": "stained-glass-dome-luminaire",
  "title": "Stained Glass Dome Luminaire",
  "title_zh": "彩色玻璃穹顶灯",
  "summary": "Decorative domed luminaire with stained radial panels and suspended brass mount",
  "category": "decor",
  "tags": [
    "stained",
    "glass",
    "dome",
    "luminaire",
    "decor",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.65,
    1.62,
    1.65
  ],
  "generator": "createStainedGlassDomeLuminaire",
  "source_path": "src/models/stained_glass_dome_luminaire.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/stained-glass-dome-luminaire.webp",
  "accent": "#c3977d"
};
export function createStainedGlassDomeLuminaire() { return buildRecipe({
  "title": "Stained Glass Dome Luminaire",
  "dimensions": [
    1.65,
    1.62,
    1.65
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "brass-ceiling-ring",
      "p": [
        0,
        1.48,
        0
      ],
      "s": [
        0.52,
        0.11,
        0.52
      ],
      "c": 4413544
    },
    {
      "t": "rod",
      "n": "luminaire-center-stem",
      "from": [
        0,
        1.49,
        0
      ],
      "to": [
        0,
        1.12,
        0
      ],
      "r": 0.038,
      "c": 4413544
    },
    {
      "t": "rod",
      "n": "dome-radial-frame-0",
      "from": [
        0,
        1.15,
        0
      ],
      "to": [
        0.54,
        0.58,
        0
      ],
      "r": 0.028,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "stained-glass-panel-0",
      "p": [
        0.3456,
        0.75,
        0
      ],
      "s": [
        0.4,
        0.28,
        0.35
      ],
      "c": 10272707
    },
    {
      "t": "rod",
      "n": "dome-radial-frame-1",
      "from": [
        0,
        1.15,
        0
      ],
      "to": [
        0.46765371804359696,
        0.58,
        0.26999999999999996
      ],
      "r": 0.028,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "stained-glass-panel-1",
      "p": [
        0.29929837954790206,
        0.75,
        0.17279999999999998
      ],
      "s": [
        0.4,
        0.28,
        0.35
      ],
      "c": 13147528
    },
    {
      "t": "rod",
      "n": "dome-radial-frame-2",
      "from": [
        0,
        1.15,
        0
      ],
      "to": [
        0.2700000000000001,
        0.58,
        0.4676537180435969
      ],
      "r": 0.028,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "stained-glass-panel-2",
      "p": [
        0.17280000000000004,
        0.75,
        0.299298379547902
      ],
      "s": [
        0.4,
        0.28,
        0.35
      ],
      "c": 14991224
    },
    {
      "t": "rod",
      "n": "dome-radial-frame-3",
      "from": [
        0,
        1.15,
        0
      ],
      "to": [
        3.306546357697854e-17,
        0.58,
        0.54
      ],
      "r": 0.028,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "stained-glass-panel-3",
      "p": [
        2.1161896689266264e-17,
        0.75,
        0.3456
      ],
      "s": [
        0.4,
        0.28,
        0.35
      ],
      "c": 8493497
    },
    {
      "t": "rod",
      "n": "dome-radial-frame-4",
      "from": [
        0,
        1.15,
        0
      ],
      "to": [
        -0.2699999999999999,
        0.58,
        0.46765371804359696
      ],
      "r": 0.028,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "stained-glass-panel-4",
      "p": [
        -0.17279999999999995,
        0.75,
        0.29929837954790206
      ],
      "s": [
        0.4,
        0.28,
        0.35
      ],
      "c": 10272707
    },
    {
      "t": "rod",
      "n": "dome-radial-frame-5",
      "from": [
        0,
        1.15,
        0
      ],
      "to": [
        -0.46765371804359696,
        0.58,
        0.26999999999999996
      ],
      "r": 0.028,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "stained-glass-panel-5",
      "p": [
        -0.29929837954790206,
        0.75,
        0.17279999999999998
      ],
      "s": [
        0.4,
        0.28,
        0.35
      ],
      "c": 13147528
    },
    {
      "t": "rod",
      "n": "dome-radial-frame-6",
      "from": [
        0,
        1.15,
        0
      ],
      "to": [
        -0.54,
        0.58,
        6.613092715395707e-17
      ],
      "r": 0.028,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "stained-glass-panel-6",
      "p": [
        -0.3456,
        0.75,
        4.232379337853253e-17
      ],
      "s": [
        0.4,
        0.28,
        0.35
      ],
      "c": 14991224
    },
    {
      "t": "rod",
      "n": "dome-radial-frame-7",
      "from": [
        0,
        1.15,
        0
      ],
      "to": [
        -0.467653718043597,
        0.58,
        -0.26999999999999985
      ],
      "r": 0.028,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "stained-glass-panel-7",
      "p": [
        -0.2992983795479021,
        0.75,
        -0.1727999999999999
      ],
      "s": [
        0.4,
        0.28,
        0.35
      ],
      "c": 8493497
    },
    {
      "t": "rod",
      "n": "dome-radial-frame-8",
      "from": [
        0,
        1.15,
        0
      ],
      "to": [
        -0.27000000000000024,
        0.58,
        -0.46765371804359673
      ],
      "r": 0.028,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "stained-glass-panel-8",
      "p": [
        -0.17280000000000015,
        0.75,
        -0.2992983795479019
      ],
      "s": [
        0.4,
        0.28,
        0.35
      ],
      "c": 10272707
    },
    {
      "t": "rod",
      "n": "dome-radial-frame-9",
      "from": [
        0,
        1.15,
        0
      ],
      "to": [
        -9.919639073093561e-17,
        0.58,
        -0.54
      ],
      "r": 0.028,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "stained-glass-panel-9",
      "p": [
        -6.34856900677988e-17,
        0.75,
        -0.3456
      ],
      "s": [
        0.4,
        0.28,
        0.35
      ],
      "c": 13147528
    },
    {
      "t": "rod",
      "n": "dome-radial-frame-10",
      "from": [
        0,
        1.15,
        0
      ],
      "to": [
        0.2700000000000001,
        0.58,
        -0.4676537180435969
      ],
      "r": 0.028,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "stained-glass-panel-10",
      "p": [
        0.17280000000000004,
        0.75,
        -0.299298379547902
      ],
      "s": [
        0.4,
        0.28,
        0.35
      ],
      "c": 14991224
    },
    {
      "t": "rod",
      "n": "dome-radial-frame-11",
      "from": [
        0,
        1.15,
        0
      ],
      "to": [
        0.46765371804359673,
        0.58,
        -0.27000000000000024
      ],
      "r": 0.028,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "stained-glass-panel-11",
      "p": [
        0.2992983795479019,
        0.75,
        -0.17280000000000015
      ],
      "s": [
        0.4,
        0.28,
        0.35
      ],
      "c": 8493497
    },
    {
      "t": "torus",
      "n": "stained-glass-outer-rim",
      "p": [
        0,
        0.55,
        0
      ],
      "s": [
        2.65,
        0.1,
        2.65
      ],
      "c": 4413544,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "inner-luminous-globe",
      "p": [
        0,
        0.8,
        0
      ],
      "s": [
        0.44,
        0.3,
        0.43
      ],
      "c": 15389351
    }
  ]
}); }
