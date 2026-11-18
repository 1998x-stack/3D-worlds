import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Filament Scout Figurine; stylized visual prototype only. */
export const assetMeta = {
  "id": "characters.filament-scout-figurine.001",
  "slug": "filament-scout-figurine",
  "title": "Filament Scout Figurine",
  "title_zh": "耗材巡检机器人",
  "summary": "Original filament scout figurine study with robot and spool assemblies and individually named functional details",
  "category": "characters",
  "tags": [
    "filament",
    "scout",
    "figurine",
    "characters",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.19,
    0.28,
    0.19
  ],
  "generator": "createFilamentScoutFigurine",
  "source_path": "src/models/filament_scout_figurine.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/filament-scout-figurine.webp",
  "accent": "#6ac9ba",
  "provenance_note": "Original procedural visual design; hacker-news is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createFilamentScoutFigurine() { return buildRecipe({
  "title": "Filament Scout Figurine",
  "dimensions": [
    0.19,
    0.28,
    0.19
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "foundation",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        2,
        0.18,
        1.54
      ],
      "c": 14595194,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86--0.66",
      "p": [
        -0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86-0.66",
      "p": [
        -0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86--0.66",
      "p": [
        0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86-0.66",
      "p": [
        0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-0",
      "p": [
        -0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-1",
      "p": [
        -0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-2",
      "p": [
        -0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-3",
      "p": [
        -0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-4",
      "p": [
        0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-5",
      "p": [
        0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-6",
      "p": [
        0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-7",
      "p": [
        0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "front-nameplate",
      "p": [
        0,
        0.25,
        0.76
      ],
      "s": [
        0.66,
        0.07,
        0.025
      ],
      "c": 6998458,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "robot-0-torso",
      "p": [
        0,
        0.94,
        0
      ],
      "s": [
        0.81,
        0.89,
        0.66
      ],
      "c": 14595194,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "robot-0-head",
      "p": [
        0,
        1.58,
        0.07
      ],
      "s": [
        0.8,
        0.57,
        0.61
      ],
      "c": 6998458,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "robot-0-face-panel",
      "p": [
        0,
        1.6,
        0.41
      ],
      "s": [
        0.58,
        0.26,
        0.04
      ],
      "c": 8909020,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "robot-0-eye--1",
      "p": [
        -0.18,
        1.65,
        0.47
      ],
      "s": [
        0.054,
        0.054,
        0.054
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "robot-0-arm--1",
      "from": [
        -0.42,
        1.17,
        0
      ],
      "to": [
        -0.7,
        0.77,
        0.15
      ],
      "r": 0.072,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "robot-0-leg--1",
      "from": [
        -0.25,
        0.52,
        0
      ],
      "to": [
        -0.34,
        0.17,
        0.15
      ],
      "r": 0.083,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "robot-0-boot--1",
      "p": [
        -0.34,
        0.18,
        0.2
      ],
      "s": [
        0.26,
        0.2,
        0.36
      ],
      "c": 2437178,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "robot-0-eye-1",
      "p": [
        0.18,
        1.65,
        0.47
      ],
      "s": [
        0.054,
        0.054,
        0.054
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "robot-0-arm-1",
      "from": [
        0.42,
        1.17,
        0
      ],
      "to": [
        0.7,
        0.77,
        0.15
      ],
      "r": 0.072,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "robot-0-leg-1",
      "from": [
        0.25,
        0.52,
        0
      ],
      "to": [
        0.34,
        0.17,
        0.15
      ],
      "r": 0.083,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "robot-0-boot-1",
      "p": [
        0.34,
        0.18,
        0.2
      ],
      "s": [
        0.26,
        0.2,
        0.36
      ],
      "c": 2437178,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "spool-1-filament-reel",
      "p": [
        0,
        1.09,
        -0.53
      ],
      "s": [
        0.66,
        0.26,
        0.66
      ],
      "c": 6998458,
      "finish": "anodized",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rounded-box",
      "n": "spool-1-winding-0",
      "p": [
        -0.31,
        1.09,
        -0.7
      ],
      "s": [
        0.018,
        0.35,
        0.08
      ],
      "c": 14595194,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "spool-1-winding-1",
      "p": [
        -0.258,
        1.09,
        -0.7
      ],
      "s": [
        0.018,
        0.35,
        0.08
      ],
      "c": 14595194,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "spool-1-winding-2",
      "p": [
        -0.20600000000000002,
        1.09,
        -0.7
      ],
      "s": [
        0.018,
        0.35,
        0.08
      ],
      "c": 14595194,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "spool-1-winding-3",
      "p": [
        -0.154,
        1.09,
        -0.7
      ],
      "s": [
        0.018,
        0.35,
        0.08
      ],
      "c": 14595194,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "spool-1-winding-4",
      "p": [
        -0.10200000000000001,
        1.09,
        -0.7
      ],
      "s": [
        0.018,
        0.35,
        0.08
      ],
      "c": 14595194,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "spool-1-winding-5",
      "p": [
        -0.04999999999999999,
        1.09,
        -0.7
      ],
      "s": [
        0.018,
        0.35,
        0.08
      ],
      "c": 14595194,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "spool-1-winding-6",
      "p": [
        0.0020000000000000018,
        1.09,
        -0.7
      ],
      "s": [
        0.018,
        0.35,
        0.08
      ],
      "c": 14595194,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "spool-1-winding-7",
      "p": [
        0.05399999999999999,
        1.09,
        -0.7
      ],
      "s": [
        0.018,
        0.35,
        0.08
      ],
      "c": 14595194,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "spool-1-winding-8",
      "p": [
        0.10599999999999998,
        1.09,
        -0.7
      ],
      "s": [
        0.018,
        0.35,
        0.08
      ],
      "c": 14595194,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "spool-1-winding-9",
      "p": [
        0.15799999999999997,
        1.09,
        -0.7
      ],
      "s": [
        0.018,
        0.35,
        0.08
      ],
      "c": 14595194,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "spool-1-winding-10",
      "p": [
        0.21000000000000002,
        1.09,
        -0.7
      ],
      "s": [
        0.018,
        0.35,
        0.08
      ],
      "c": 14595194,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "spool-1-winding-11",
      "p": [
        0.26199999999999996,
        1.09,
        -0.7
      ],
      "s": [
        0.018,
        0.35,
        0.08
      ],
      "c": 14595194,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "spool-1-winding-12",
      "p": [
        0.314,
        1.09,
        -0.7
      ],
      "s": [
        0.018,
        0.35,
        0.08
      ],
      "c": 14595194,
      "finish": "matte"
    }
  ]
}); }
