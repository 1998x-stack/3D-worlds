import { buildRecipe } from './recipe_engine.js';
/** Coastal Rescue Hovercraft / 海上救援气垫船: original authored procedural scene prop. */
export const assetMeta = {
  "id": "vehicles.coastal-rescue-hovercraft.001",
  "slug": "coastal-rescue-hovercraft",
  "title": "Coastal Rescue Hovercraft",
  "title_zh": "海上救援气垫船",
  "summary": "Rescue hovercraft with inflatable skirt, cabin, fan guard, searchlight and deck equipment",
  "category": "vehicles",
  "tags": [
    "hovercraft",
    "rescue",
    "marine"
  ],
  "dimensions_m": [
    2.51,
    1.91,
    3.86
  ],
  "generator": "createCoastalRescueHovercraft",
  "source_path": "src/models/coastal_rescue_hovercraft.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/coastal-rescue-hovercraft.webp"
};
export function createCoastalRescueHovercraft() { return buildRecipe({
  "title": "Coastal Rescue Hovercraft",
  "dimensions": [
    2.51,
    1.91,
    3.86
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "inflatable-skirt",
      "p": [
        0,
        0.24,
        0
      ],
      "s": [
        2.45,
        0.42,
        3.82
      ],
      "c": 3753552
    },
    {
      "t": "box",
      "n": "upper-deck",
      "p": [
        0,
        0.55,
        0
      ],
      "s": [
        2.32,
        0.24,
        3.66
      ],
      "c": 14657379
    },
    {
      "t": "box",
      "n": "rescue-cabin",
      "p": [
        0,
        1.16,
        0.52
      ],
      "s": [
        1.58,
        1.05,
        1.7
      ],
      "c": 15325632
    },
    {
      "t": "box",
      "n": "cab-windshield",
      "p": [
        0,
        1.4,
        1.39
      ],
      "s": [
        1.35,
        0.48,
        0.031
      ],
      "c": 5213081
    },
    {
      "t": "box",
      "n": "side-cab-glass-0",
      "p": [
        -0.79,
        1.3,
        0.47
      ],
      "s": [
        0.034,
        0.53,
        0.84
      ],
      "c": 6790827
    },
    {
      "t": "box",
      "n": "side-cab-glass-1",
      "p": [
        0.79,
        1.3,
        0.47
      ],
      "s": [
        0.034,
        0.53,
        0.84
      ],
      "c": 6790827
    },
    {
      "t": "cylinder",
      "n": "rear-ducted-fan",
      "p": [
        0,
        1.18,
        -1.27
      ],
      "s": [
        1.18,
        0.25,
        1.18
      ],
      "c": 3753552,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "fan-guard-ring",
      "p": [
        0,
        1.18,
        -1.4
      ],
      "s": [
        1.75,
        1.75,
        1.75
      ],
      "c": 9215136,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "fan-blade-0",
      "p": [
        0,
        1.18,
        -1.42
      ],
      "s": [
        0.085,
        0.66,
        0.015
      ],
      "c": 9215136,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "fan-blade-1",
      "p": [
        0,
        1.18,
        -1.42
      ],
      "s": [
        0.085,
        0.66,
        0.015
      ],
      "c": 9215136,
      "rot": [
        0,
        0,
        1.0471975511965976
      ]
    },
    {
      "t": "box",
      "n": "fan-blade-2",
      "p": [
        0,
        1.18,
        -1.42
      ],
      "s": [
        0.085,
        0.66,
        0.015
      ],
      "c": 9215136,
      "rot": [
        0,
        0,
        2.0943951023931953
      ]
    },
    {
      "t": "box",
      "n": "fan-blade-3",
      "p": [
        0,
        1.18,
        -1.42
      ],
      "s": [
        0.085,
        0.66,
        0.015
      ],
      "c": 9215136,
      "rot": [
        0,
        0,
        3.141592653589793
      ]
    },
    {
      "t": "box",
      "n": "fan-blade-4",
      "p": [
        0,
        1.18,
        -1.42
      ],
      "s": [
        0.085,
        0.66,
        0.015
      ],
      "c": 9215136,
      "rot": [
        0,
        0,
        4.1887902047863905
      ]
    },
    {
      "t": "box",
      "n": "fan-blade-5",
      "p": [
        0,
        1.18,
        -1.42
      ],
      "s": [
        0.085,
        0.66,
        0.015
      ],
      "c": 9215136,
      "rot": [
        0,
        0,
        5.235987755982989
      ]
    },
    {
      "t": "rod",
      "n": "handrail-0",
      "from": [
        -0.98,
        0.7,
        0.56
      ],
      "to": [
        -0.98,
        1.13,
        -1.14
      ],
      "r": 0.029,
      "c": 9215136
    },
    {
      "t": "sphere",
      "n": "rescue-buoy-0",
      "p": [
        -0.99,
        0.76,
        -0.32
      ],
      "s": [
        0.14,
        0.14,
        0.07
      ],
      "c": 12346709
    },
    {
      "t": "rod",
      "n": "handrail-1",
      "from": [
        0.98,
        0.7,
        0.56
      ],
      "to": [
        0.98,
        1.13,
        -1.14
      ],
      "r": 0.029,
      "c": 9215136
    },
    {
      "t": "sphere",
      "n": "rescue-buoy-1",
      "p": [
        0.99,
        0.76,
        -0.32
      ],
      "s": [
        0.14,
        0.14,
        0.07
      ],
      "c": 12346709
    },
    {
      "t": "sphere",
      "n": "roof-searchlight",
      "p": [
        0,
        1.86,
        0.92
      ],
      "s": [
        0.21,
        0.15,
        0.2
      ],
      "c": 15197659
    },
    {
      "t": "box",
      "n": "stern-ramp",
      "p": [
        0,
        0.57,
        -1.86
      ],
      "s": [
        1.38,
        0.11,
        0.19
      ],
      "c": 9215136
    },
    {
      "t": "box",
      "n": "medical-mark",
      "p": [
        0,
        0.98,
        1.41
      ],
      "s": [
        0.23,
        0.12,
        0.016
      ],
      "c": 12346709
    }
  ]
}); }
