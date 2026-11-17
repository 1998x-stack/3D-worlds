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
  "accent": "#c5b6a2",
  "geometry_revision": "1.4.1",
  "refinement": "geometry+materials"
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
      "c": 8215879,
      "finish": "wood"
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
      "c": 7177108,
      "finish": "metal"
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
      "c": 7177108,
      "finish": "metal"
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
      "c": 7177108,
      "finish": "metal"
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
      "c": 7177108,
      "finish": "metal"
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
      "c": 10143185,
      "finish": "glass"
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
      "c": 10143185,
      "finish": "glass"
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
      "c": 10143185,
      "finish": "glass"
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
      "c": 10143185,
      "finish": "glass"
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
      "c": 12957346,
      "finish": "wood"
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
      "c": 12957346,
      "finish": "wood"
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
      "c": 12957346,
      "finish": "wood"
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
      "c": 12957346,
      "finish": "wood"
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
      "c": 12957346,
      "finish": "wood"
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
      "c": 12957346,
      "finish": "wood"
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
    },
    {
      "t": "rod",
      "n": "roof-gutter-crossmember-0",
      "from": [
        -1.18,
        1.74,
        -0.91
      ],
      "to": [
        1.18,
        1.74,
        -0.91
      ],
      "r": 0.024,
      "c": 11648457,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "roof-gutter-crossmember-1",
      "from": [
        -1.18,
        1.74,
        -0.46
      ],
      "to": [
        1.18,
        1.74,
        -0.46
      ],
      "r": 0.024,
      "c": 11648457,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "roof-gutter-crossmember-2",
      "from": [
        -1.18,
        1.74,
        -0.010000000000000009
      ],
      "to": [
        1.18,
        1.74,
        -0.010000000000000009
      ],
      "r": 0.024,
      "c": 11648457,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "roof-gutter-crossmember-3",
      "from": [
        -1.18,
        1.74,
        0.44000000000000006
      ],
      "to": [
        1.18,
        1.74,
        0.44000000000000006
      ],
      "r": 0.024,
      "c": 11648457,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "roof-gutter-crossmember-4",
      "from": [
        -1.18,
        1.74,
        0.89
      ],
      "to": [
        1.18,
        1.74,
        0.89
      ],
      "r": 0.024,
      "c": 11648457,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "seedling-plant-identity-0",
      "p": [
        -0.88,
        0.74,
        -0.23
      ],
      "s": [
        0.29,
        0.1,
        0.034
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "root-planter-pot-0",
      "p": [
        -0.88,
        0.66,
        -0.45
      ],
      "s": [
        0.25,
        0.14,
        0.22
      ],
      "c": 9332813,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "seedling-plant-identity-1",
      "p": [
        0,
        0.74,
        -0.23
      ],
      "s": [
        0.29,
        0.1,
        0.034
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "root-planter-pot-1",
      "p": [
        0,
        0.66,
        -0.45
      ],
      "s": [
        0.25,
        0.14,
        0.22
      ],
      "c": 9332813,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "seedling-plant-identity-2",
      "p": [
        0.88,
        0.74,
        -0.23
      ],
      "s": [
        0.29,
        0.1,
        0.034
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "root-planter-pot-2",
      "p": [
        0.88,
        0.66,
        -0.45
      ],
      "s": [
        0.25,
        0.14,
        0.22
      ],
      "c": 9332813,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "seedling-plant-identity-3",
      "p": [
        -0.88,
        0.74,
        0.67
      ],
      "s": [
        0.29,
        0.1,
        0.034
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "root-planter-pot-3",
      "p": [
        -0.88,
        0.66,
        0.45
      ],
      "s": [
        0.25,
        0.14,
        0.22
      ],
      "c": 9332813,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "seedling-plant-identity-4",
      "p": [
        0,
        0.74,
        0.67
      ],
      "s": [
        0.29,
        0.1,
        0.034
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "root-planter-pot-4",
      "p": [
        0,
        0.66,
        0.45
      ],
      "s": [
        0.25,
        0.14,
        0.22
      ],
      "c": 9332813,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "seedling-plant-identity-5",
      "p": [
        0.88,
        0.74,
        0.67
      ],
      "s": [
        0.29,
        0.1,
        0.034
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "root-planter-pot-5",
      "p": [
        0.88,
        0.66,
        0.45
      ],
      "s": [
        0.25,
        0.14,
        0.22
      ],
      "c": 9332813,
      "finish": "wood"
    },
    {
      "t": "box",
      "n": "climate-vent-louvre-0",
      "p": [
        -0.78,
        1.92,
        -0.59
      ],
      "s": [
        0.31,
        0.025,
        0.07
      ],
      "c": 2570573,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "climate-vent-louvre-1",
      "p": [
        -0.39,
        1.92,
        -0.59
      ],
      "s": [
        0.31,
        0.025,
        0.07
      ],
      "c": 2570573,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "climate-vent-louvre-2",
      "p": [
        0,
        1.92,
        -0.59
      ],
      "s": [
        0.31,
        0.025,
        0.07
      ],
      "c": 2570573,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "climate-vent-louvre-3",
      "p": [
        0.3899999999999999,
        1.92,
        -0.59
      ],
      "s": [
        0.31,
        0.025,
        0.07
      ],
      "c": 2570573,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "climate-vent-louvre-4",
      "p": [
        0.78,
        1.92,
        -0.59
      ],
      "s": [
        0.31,
        0.025,
        0.07
      ],
      "c": 2570573,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "rainwater-irrigation-valve-0",
      "p": [
        -0.75,
        0.49,
        0.85
      ],
      "s": [
        0.12,
        0.1,
        0.12
      ],
      "c": 9487573,
      "finish": "anodized"
    },
    {
      "t": "cylinder",
      "n": "rainwater-irrigation-valve-1",
      "p": [
        0,
        0.49,
        0.85
      ],
      "s": [
        0.12,
        0.1,
        0.12
      ],
      "c": 9487573,
      "finish": "anodized"
    },
    {
      "t": "cylinder",
      "n": "rainwater-irrigation-valve-2",
      "p": [
        0.75,
        0.49,
        0.85
      ],
      "s": [
        0.12,
        0.1,
        0.12
      ],
      "c": 9487573,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "smart-temperature-display",
      "p": [
        0.92,
        1.28,
        0.9
      ],
      "s": [
        0.35,
        0.24,
        0.038
      ],
      "c": 9487573,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "glass-roof-rivet-0",
      "p": [
        -1.1,
        1.68,
        -0.82
      ],
      "s": [
        0.1,
        0.11,
        0.11
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "glass-roof-rivet-1",
      "p": [
        1.1,
        1.68,
        -0.82
      ],
      "s": [
        0.1,
        0.11,
        0.11
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "glass-roof-rivet-2",
      "p": [
        -1.1,
        1.68,
        0.82
      ],
      "s": [
        0.1,
        0.11,
        0.11
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "glass-roof-rivet-3",
      "p": [
        1.1,
        1.68,
        0.82
      ],
      "s": [
        0.1,
        0.11,
        0.11
      ],
      "c": 14989405,
      "finish": "metal"
    }
  ],
  "geometry_revision": "1.4.1"
}); }
