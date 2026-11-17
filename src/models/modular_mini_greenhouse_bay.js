import { buildRecipe } from './recipe_engine.js';
/** Original V1.4 maker-market inspired design: Modular Mini Greenhouse Bay / 模块化迷你温室舱段. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "architecture.modular-mini-greenhouse-bay.001",
  "slug": "modular-mini-greenhouse-bay",
  "title": "Modular Mini Greenhouse Bay",
  "title_zh": "模块化迷你温室舱段",
  "summary": "Miniature modular greenhouse bay with curved roof ribs, benches and ventilation panels",
  "category": "architecture",
  "tags": [
    "modular",
    "mini",
    "greenhouse",
    "bay",
    "architecture",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.43,
    0.39,
    0.33
  ],
  "generator": "createModularMiniGreenhouseBay",
  "source_path": "src/models/modular_mini_greenhouse_bay.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.4",
  "preview_path": "public/thumbs/modular-mini-greenhouse-bay.webp",
  "accent": "#c5b6a2"
};
export function createModularMiniGreenhouseBay() { return buildRecipe({
  "title": "Modular Mini Greenhouse Bay",
  "dimensions": [
    0.43,
    0.39,
    0.33
  ],
  "parts": [
    {
      "t": "box",
      "n": "soil-platform",
      "p": [
        0,
        0.1,
        0
      ],
      "s": [
        2.55,
        0.2,
        2.05
      ],
      "c": 8215879
    },
    {
      "t": "rod",
      "n": "frame-post-0",
      "from": [
        -1.18,
        0.2,
        -0.93
      ],
      "to": [
        -1.18,
        1.72,
        -0.93
      ],
      "r": 0.055,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "frame-post-1",
      "from": [
        1.18,
        0.2,
        -0.93
      ],
      "to": [
        1.18,
        1.72,
        -0.93
      ],
      "r": 0.055,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "frame-post-2",
      "from": [
        -1.18,
        0.2,
        0.93
      ],
      "to": [
        -1.18,
        1.72,
        0.93
      ],
      "r": 0.055,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "frame-post-3",
      "from": [
        1.18,
        0.2,
        0.93
      ],
      "to": [
        1.18,
        1.72,
        0.93
      ],
      "r": 0.055,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "roof-a-0",
      "from": [
        -1.18,
        1.72,
        -0.91
      ],
      "to": [
        0,
        2.25,
        -0.91
      ],
      "r": 0.05,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "roof-b-0",
      "from": [
        0,
        2.25,
        -0.91
      ],
      "to": [
        1.18,
        1.72,
        -0.91
      ],
      "r": 0.05,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "roof-a-1",
      "from": [
        -1.18,
        1.72,
        0
      ],
      "to": [
        0,
        2.25,
        0
      ],
      "r": 0.05,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "roof-b-1",
      "from": [
        0,
        2.25,
        0
      ],
      "to": [
        1.18,
        1.72,
        0
      ],
      "r": 0.05,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "roof-a-2",
      "from": [
        -1.18,
        1.72,
        0.91
      ],
      "to": [
        0,
        2.25,
        0.91
      ],
      "r": 0.05,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "roof-b-2",
      "from": [
        0,
        2.25,
        0.91
      ],
      "to": [
        1.18,
        1.72,
        0.91
      ],
      "r": 0.05,
      "c": 7177108
    },
    {
      "t": "box",
      "n": "translucent-wall-0",
      "p": [
        -0.87,
        1.06,
        0.93
      ],
      "s": [
        0.52,
        1.2,
        0.04
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "translucent-wall-1",
      "p": [
        -0.30000000000000004,
        1.06,
        0.93
      ],
      "s": [
        0.52,
        1.2,
        0.04
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "translucent-wall-2",
      "p": [
        0.2699999999999999,
        1.06,
        0.93
      ],
      "s": [
        0.52,
        1.2,
        0.04
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "translucent-wall-3",
      "p": [
        0.84,
        1.06,
        0.93
      ],
      "s": [
        0.52,
        1.2,
        0.04
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "plant-bench-0",
      "p": [
        -0.88,
        0.54,
        -0.45
      ],
      "s": [
        0.6,
        0.12,
        0.48
      ],
      "c": 12957346
    },
    {
      "t": "cone",
      "n": "seedling-0",
      "p": [
        -0.88,
        0.85,
        -0.45
      ],
      "s": [
        0.24,
        0.48,
        0.24
      ],
      "c": 5086834
    },
    {
      "t": "box",
      "n": "plant-bench-1",
      "p": [
        0,
        0.54,
        -0.45
      ],
      "s": [
        0.6,
        0.12,
        0.48
      ],
      "c": 12957346
    },
    {
      "t": "cone",
      "n": "seedling-1",
      "p": [
        0,
        0.85,
        -0.45
      ],
      "s": [
        0.24,
        0.48,
        0.24
      ],
      "c": 5086834
    },
    {
      "t": "box",
      "n": "plant-bench-2",
      "p": [
        0.88,
        0.54,
        -0.45
      ],
      "s": [
        0.6,
        0.12,
        0.48
      ],
      "c": 12957346
    },
    {
      "t": "cone",
      "n": "seedling-2",
      "p": [
        0.88,
        0.85,
        -0.45
      ],
      "s": [
        0.24,
        0.48,
        0.24
      ],
      "c": 5086834
    },
    {
      "t": "box",
      "n": "plant-bench-3",
      "p": [
        -0.88,
        0.54,
        0.45
      ],
      "s": [
        0.6,
        0.12,
        0.48
      ],
      "c": 12957346
    },
    {
      "t": "cone",
      "n": "seedling-3",
      "p": [
        -0.88,
        0.85,
        0.45
      ],
      "s": [
        0.24,
        0.48,
        0.24
      ],
      "c": 5086834
    },
    {
      "t": "box",
      "n": "plant-bench-4",
      "p": [
        0,
        0.54,
        0.45
      ],
      "s": [
        0.6,
        0.12,
        0.48
      ],
      "c": 12957346
    },
    {
      "t": "cone",
      "n": "seedling-4",
      "p": [
        0,
        0.85,
        0.45
      ],
      "s": [
        0.24,
        0.48,
        0.24
      ],
      "c": 5086834
    },
    {
      "t": "box",
      "n": "plant-bench-5",
      "p": [
        0.88,
        0.54,
        0.45
      ],
      "s": [
        0.6,
        0.12,
        0.48
      ],
      "c": 12957346
    },
    {
      "t": "cone",
      "n": "seedling-5",
      "p": [
        0.88,
        0.85,
        0.45
      ],
      "s": [
        0.24,
        0.48,
        0.24
      ],
      "c": 5086834
    },
    {
      "t": "rod",
      "n": "ridge-vent",
      "from": [
        -1.18,
        1.7,
        -0.91
      ],
      "to": [
        1.18,
        1.7,
        -0.91
      ],
      "r": 0.04,
      "c": 15776881
    }
  ]
}); }
