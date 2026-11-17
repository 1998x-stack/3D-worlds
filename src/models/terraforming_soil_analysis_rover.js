import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Terraforming Soil Analysis Rover / 星球土壤分析巡视车. */
export const assetMeta = {
  "id": "scifi.terraforming-soil-analysis-rover.001",
  "slug": "terraforming-soil-analysis-rover",
  "title": "Terraforming Soil Analysis Rover",
  "title_zh": "星球土壤分析巡视车",
  "summary": "Planetary soil science rover with sampling drill, articulating arm and spectrometer",
  "category": "scifi",
  "tags": [
    "terraforming",
    "soil",
    "analysis",
    "rover",
    "scifi",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.75,
    2.15,
    3.25
  ],
  "generator": "createTerraformingSoilAnalysisRover",
  "source_path": "src/models/terraforming_soil_analysis_rover.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/terraforming-soil-analysis-rover.webp",
  "accent": "#39405f"
};
export function createTerraformingSoilAnalysisRover() { return buildRecipe({
  "title": "Terraforming Soil Analysis Rover",
  "dimensions": [
    3.75,
    2.15,
    3.25
  ],
  "parts": [
    {
      "t": "box",
      "n": "terraforming-rover-hull",
      "p": [
        0,
        0.72,
        0
      ],
      "s": [
        2.42,
        1.08,
        2.7
      ],
      "c": 6388125
    },
    {
      "t": "cylinder",
      "n": "six-wheel-rover--1--1",
      "p": [
        -1.3,
        0.38,
        -1
      ],
      "s": [
        0.65,
        0.2,
        0.65
      ],
      "c": 12760807,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "six-wheel-rover--1-0",
      "p": [
        -1.3,
        0.38,
        0
      ],
      "s": [
        0.65,
        0.2,
        0.65
      ],
      "c": 12760807,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "six-wheel-rover--1-1",
      "p": [
        -1.3,
        0.38,
        1
      ],
      "s": [
        0.65,
        0.2,
        0.65
      ],
      "c": 12760807,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "six-wheel-rover-1--1",
      "p": [
        1.3,
        0.38,
        -1
      ],
      "s": [
        0.65,
        0.2,
        0.65
      ],
      "c": 12760807,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "six-wheel-rover-1-0",
      "p": [
        1.3,
        0.38,
        0
      ],
      "s": [
        0.65,
        0.2,
        0.65
      ],
      "c": 12760807,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "six-wheel-rover-1-1",
      "p": [
        1.3,
        0.38,
        1
      ],
      "s": [
        0.65,
        0.2,
        0.65
      ],
      "c": 12760807,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "soil-analysis-robotic-boom",
      "from": [
        0,
        1.1,
        0.36
      ],
      "to": [
        0.73,
        1.87,
        1.12
      ],
      "r": 0.105,
      "c": 10016206
    },
    {
      "t": "rod",
      "n": "drill-pivot-boom",
      "from": [
        0.73,
        1.87,
        1.12
      ],
      "to": [
        0.82,
        0.61,
        1.64
      ],
      "r": 0.067,
      "c": 10016206
    },
    {
      "t": "cone",
      "n": "soil-core-drill",
      "p": [
        0.82,
        0.46,
        1.64
      ],
      "s": [
        0.16,
        0.46,
        0.16
      ],
      "c": 3752031
    },
    {
      "t": "box",
      "n": "spectral-analysis-pod",
      "p": [
        0,
        1.57,
        -0.48
      ],
      "s": [
        0.9,
        0.53,
        0.71
      ],
      "c": 12760807
    },
    {
      "t": "box",
      "n": "chemical-sampler-0",
      "p": [
        -0.73,
        1.27,
        0.43
      ],
      "s": [
        0.16,
        0.25,
        0.22
      ],
      "c": 3752031
    },
    {
      "t": "box",
      "n": "chemical-sampler-1",
      "p": [
        -0.49,
        1.27,
        0.43
      ],
      "s": [
        0.16,
        0.25,
        0.22
      ],
      "c": 3752031
    },
    {
      "t": "box",
      "n": "chemical-sampler-2",
      "p": [
        -0.25,
        1.27,
        0.43
      ],
      "s": [
        0.16,
        0.25,
        0.22
      ],
      "c": 3752031
    },
    {
      "t": "box",
      "n": "chemical-sampler-3",
      "p": [
        -0.010000000000000009,
        1.27,
        0.43
      ],
      "s": [
        0.16,
        0.25,
        0.22
      ],
      "c": 3752031
    },
    {
      "t": "box",
      "n": "chemical-sampler-4",
      "p": [
        0.22999999999999998,
        1.27,
        0.43
      ],
      "s": [
        0.16,
        0.25,
        0.22
      ],
      "c": 3752031
    },
    {
      "t": "box",
      "n": "chemical-sampler-5",
      "p": [
        0.47,
        1.27,
        0.43
      ],
      "s": [
        0.16,
        0.25,
        0.22
      ],
      "c": 3752031
    },
    {
      "t": "box",
      "n": "chemical-sampler-6",
      "p": [
        0.71,
        1.27,
        0.43
      ],
      "s": [
        0.16,
        0.25,
        0.22
      ],
      "c": 3752031
    },
    {
      "t": "rod",
      "n": "planetary-lidar-mast",
      "from": [
        0,
        1.26,
        -0.78
      ],
      "to": [
        0,
        2.12,
        -0.78
      ],
      "r": 0.05,
      "c": 10016206
    },
    {
      "t": "sphere",
      "n": "lidar-sensor-eye",
      "p": [
        0,
        2.14,
        -0.78
      ],
      "s": [
        0.3,
        0.17,
        0.28
      ],
      "c": 3752031
    }
  ]
}); }
