import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Intertidal Tidepool Study; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "nature.intertidal-tidepool-study.001",
  "slug": "intertidal-tidepool-study",
  "title": "Intertidal Tidepool Study",
  "title_zh": "潮间带生态观察台",
  "summary": "Tidepool cross-section: stone basins, plants and wildlife",
  "category": "nature",
  "tags": [
    "intertidal",
    "tidepool",
    "study",
    "nature",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.35,
    0.16,
    0.28
  ],
  "generator": "createIntertidalTidepoolStudy",
  "source_path": "src/models/intertidal_tidepool_study.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/intertidal-tidepool-study.webp",
  "accent": "#9d9172",
  "provenance_note": "Original procedural scene based on functional design research. Channel: hacker-news; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createIntertidalTidepoolStudy() { return buildRecipe({
  "title": "Intertidal Tidepool Study",
  "dimensions": [
    0.35,
    0.16,
    0.28
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "rock-stratum",
      "p": [
        0,
        0.14,
        0
      ],
      "s": [
        1.92,
        0.23,
        1.5
      ],
      "c": 7560529,
      "finish": "wood"
    },
    {
      "t": "cylinder",
      "n": "tidal-pool-0",
      "p": [
        -0.73,
        0.31,
        0.12
      ],
      "s": [
        0.33,
        0.14,
        0.48
      ],
      "c": 2503997,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "water-surface-0",
      "p": [
        -0.73,
        0.4,
        0.12
      ],
      "s": [
        0.29,
        0.04,
        0.42
      ],
      "c": 4233141,
      "finish": "glass"
    },
    {
      "t": "cylinder",
      "n": "tidal-pool-1",
      "p": [
        -0.37,
        0.31,
        0.12
      ],
      "s": [
        0.33,
        0.14,
        0.48
      ],
      "c": 2503997,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "water-surface-1",
      "p": [
        -0.37,
        0.4,
        0.12
      ],
      "s": [
        0.29,
        0.04,
        0.42
      ],
      "c": 4233141,
      "finish": "glass"
    },
    {
      "t": "cylinder",
      "n": "tidal-pool-2",
      "p": [
        -0.01,
        0.31,
        0.12
      ],
      "s": [
        0.33,
        0.14,
        0.48
      ],
      "c": 2503997,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "water-surface-2",
      "p": [
        -0.01,
        0.4,
        0.12
      ],
      "s": [
        0.29,
        0.04,
        0.42
      ],
      "c": 4233141,
      "finish": "glass"
    },
    {
      "t": "cylinder",
      "n": "tidal-pool-3",
      "p": [
        0.35,
        0.31,
        0.12
      ],
      "s": [
        0.33,
        0.14,
        0.48
      ],
      "c": 2503997,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "water-surface-3",
      "p": [
        0.35,
        0.4,
        0.12
      ],
      "s": [
        0.29,
        0.04,
        0.42
      ],
      "c": 4233141,
      "finish": "glass"
    },
    {
      "t": "cylinder",
      "n": "tidal-pool-4",
      "p": [
        0.71,
        0.31,
        0.12
      ],
      "s": [
        0.33,
        0.14,
        0.48
      ],
      "c": 2503997,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "water-surface-4",
      "p": [
        0.71,
        0.4,
        0.12
      ],
      "s": [
        0.29,
        0.04,
        0.42
      ],
      "c": 4233141,
      "finish": "glass"
    },
    {
      "t": "sphere",
      "n": "pebble-0",
      "p": [
        -0.78,
        0.37,
        -0.52
      ],
      "s": [
        0.12,
        0.095,
        0.12
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "pebble-1",
      "p": [
        -0.4,
        0.37,
        -0.52
      ],
      "s": [
        0.12,
        0.095,
        0.12
      ],
      "c": 8037514,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "pebble-2",
      "p": [
        -0.02,
        0.37,
        -0.52
      ],
      "s": [
        0.12,
        0.095,
        0.12
      ],
      "c": 8037514,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "pebble-3",
      "p": [
        0.36,
        0.37,
        -0.52
      ],
      "s": [
        0.12,
        0.095,
        0.12
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "pebble-4",
      "p": [
        0.74,
        0.37,
        -0.52
      ],
      "s": [
        0.12,
        0.095,
        0.12
      ],
      "c": 8037514,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "pebble-5",
      "p": [
        -0.78,
        0.37,
        -0.04
      ],
      "s": [
        0.12,
        0.095,
        0.12
      ],
      "c": 8037514,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "pebble-6",
      "p": [
        -0.4,
        0.37,
        -0.04
      ],
      "s": [
        0.12,
        0.095,
        0.12
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "pebble-7",
      "p": [
        -0.02,
        0.37,
        -0.04
      ],
      "s": [
        0.12,
        0.095,
        0.12
      ],
      "c": 8037514,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "pebble-8",
      "p": [
        0.36,
        0.37,
        -0.04
      ],
      "s": [
        0.12,
        0.095,
        0.12
      ],
      "c": 8037514,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "pebble-9",
      "p": [
        0.74,
        0.37,
        -0.04
      ],
      "s": [
        0.12,
        0.095,
        0.12
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "pebble-10",
      "p": [
        -0.78,
        0.37,
        0.44
      ],
      "s": [
        0.12,
        0.095,
        0.12
      ],
      "c": 8037514,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "pebble-11",
      "p": [
        -0.4,
        0.37,
        0.44
      ],
      "s": [
        0.12,
        0.095,
        0.12
      ],
      "c": 8037514,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "pebble-12",
      "p": [
        -0.02,
        0.37,
        0.44
      ],
      "s": [
        0.12,
        0.095,
        0.12
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "pebble-13",
      "p": [
        0.36,
        0.37,
        0.44
      ],
      "s": [
        0.12,
        0.095,
        0.12
      ],
      "c": 8037514,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "pebble-14",
      "p": [
        0.74,
        0.37,
        0.44
      ],
      "s": [
        0.12,
        0.095,
        0.12
      ],
      "c": 8037514,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "sea-star-ray-0",
      "from": [
        0.4,
        0.52,
        0.12
      ],
      "to": [
        0.6,
        0.52,
        0.12
      ],
      "r": 0.057,
      "c": 13657955,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "sea-star-ray-1",
      "from": [
        0.4,
        0.52,
        0.12
      ],
      "to": [
        0.5247,
        0.52,
        0.2764
      ],
      "r": 0.057,
      "c": 13657955,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "sea-star-ray-2",
      "from": [
        0.4,
        0.52,
        0.12
      ],
      "to": [
        0.3555,
        0.52,
        0.315
      ],
      "r": 0.057,
      "c": 13657955,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "sea-star-ray-3",
      "from": [
        0.4,
        0.52,
        0.12
      ],
      "to": [
        0.2198,
        0.52,
        0.2068
      ],
      "r": 0.057,
      "c": 13657955,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "sea-star-ray-4",
      "from": [
        0.4,
        0.52,
        0.12
      ],
      "to": [
        0.2198,
        0.52,
        0.0332
      ],
      "r": 0.057,
      "c": 13657955,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "sea-star-ray-5",
      "from": [
        0.4,
        0.52,
        0.12
      ],
      "to": [
        0.3555,
        0.52,
        -0.075
      ],
      "r": 0.057,
      "c": 13657955,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "sea-star-ray-6",
      "from": [
        0.4,
        0.52,
        0.12
      ],
      "to": [
        0.5247,
        0.52,
        -0.0364
      ],
      "r": 0.057,
      "c": 13657955,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "seagrass-0",
      "from": [
        -0.8,
        0.29,
        -0.5
      ],
      "to": [
        -0.72,
        0.66,
        -0.48
      ],
      "r": 0.019,
      "c": 5611639,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "seagrass-1",
      "from": [
        -0.65,
        0.29,
        -0.5
      ],
      "to": [
        -0.57,
        0.78,
        -0.48
      ],
      "r": 0.019,
      "c": 5611639,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "seagrass-2",
      "from": [
        -0.5,
        0.29,
        -0.5
      ],
      "to": [
        -0.42,
        0.9,
        -0.48
      ],
      "r": 0.019,
      "c": 5611639,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "seagrass-3",
      "from": [
        -0.35,
        0.29,
        -0.5
      ],
      "to": [
        -0.27,
        0.66,
        -0.48
      ],
      "r": 0.019,
      "c": 5611639,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "seagrass-4",
      "from": [
        -0.2,
        0.29,
        -0.5
      ],
      "to": [
        -0.12,
        0.78,
        -0.48
      ],
      "r": 0.019,
      "c": 5611639,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "seagrass-5",
      "from": [
        -0.05,
        0.29,
        -0.5
      ],
      "to": [
        0.03,
        0.9,
        -0.48
      ],
      "r": 0.019,
      "c": 5611639,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "seagrass-6",
      "from": [
        0.1,
        0.29,
        -0.5
      ],
      "to": [
        0.18,
        0.66,
        -0.48
      ],
      "r": 0.019,
      "c": 5611639,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "seagrass-7",
      "from": [
        0.25,
        0.29,
        -0.5
      ],
      "to": [
        0.33,
        0.78,
        -0.48
      ],
      "r": 0.019,
      "c": 5611639,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "seagrass-8",
      "from": [
        0.4,
        0.29,
        -0.5
      ],
      "to": [
        0.48,
        0.9,
        -0.48
      ],
      "r": 0.019,
      "c": 5611639,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "seagrass-9",
      "from": [
        0.55,
        0.29,
        -0.5
      ],
      "to": [
        0.63,
        0.66,
        -0.48
      ],
      "r": 0.019,
      "c": 5611639,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "seagrass-10",
      "from": [
        0.7,
        0.29,
        -0.5
      ],
      "to": [
        0.78,
        0.78,
        -0.48
      ],
      "r": 0.019,
      "c": 5611639,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "seagrass-11",
      "from": [
        0.85,
        0.29,
        -0.5
      ],
      "to": [
        0.93,
        0.9,
        -0.48
      ],
      "r": 0.019,
      "c": 5611639,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tide-gauge-0",
      "p": [
        -0.75,
        0.37,
        0.69
      ],
      "s": [
        0.024,
        0.1,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tide-gauge-1",
      "p": [
        -0.5833,
        0.37,
        0.69
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tide-gauge-2",
      "p": [
        -0.4167,
        0.37,
        0.69
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tide-gauge-3",
      "p": [
        -0.25,
        0.37,
        0.69
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tide-gauge-4",
      "p": [
        -0.0833,
        0.37,
        0.69
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tide-gauge-5",
      "p": [
        0.0833,
        0.37,
        0.69
      ],
      "s": [
        0.024,
        0.1,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tide-gauge-6",
      "p": [
        0.25,
        0.37,
        0.69
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tide-gauge-7",
      "p": [
        0.4167,
        0.37,
        0.69
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tide-gauge-8",
      "p": [
        0.5833,
        0.37,
        0.69
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tide-gauge-9",
      "p": [
        0.75,
        0.37,
        0.69
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
