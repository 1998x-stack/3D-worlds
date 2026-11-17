import { buildRecipe } from './recipe_engine.js';
/** Medical Rescue Ambulance: original detailed low-poly scene model. */
export const assetMeta = {
  "id": "vehicles.medical-rescue-ambulance.001",
  "slug": "medical-rescue-ambulance",
  "title": "Medical Rescue Ambulance",
  "title_zh": "急救救护车",
  "summary": "Rescue vehicle with raised medical roof, cross emblems, beacons and emergency lamps.",
  "category": "vehicles",
  "tags": [
    "ambulance",
    "medical",
    "rescue",
    "vehicle"
  ],
  "dimensions_m": [
    2.22,
    2.66,
    4.56
  ],
  "generator": "createMedicalRescueAmbulance",
  "source_path": "src/models/medical_rescue_ambulance.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/medical-rescue-ambulance.webp"
};
export function createMedicalRescueAmbulance() {
  return buildRecipe({
  "title": "Medical Rescue Ambulance",
  "dimensions": [
    2.22,
    2.66,
    4.56
  ],
  "parts": [
    {
      "t": "box",
      "n": "transport-cabin",
      "p": [
        0,
        1.27,
        -0.47
      ],
      "s": [
        2.03,
        2.05,
        3.04
      ],
      "c": 15197657
    },
    {
      "t": "box",
      "n": "front-cabin",
      "p": [
        0,
        1.07,
        1.34
      ],
      "s": [
        1.94,
        1.62,
        1.5
      ],
      "c": 13095634
    },
    {
      "t": "box",
      "n": "underbody",
      "p": [
        0,
        0.48,
        0
      ],
      "s": [
        2.12,
        0.31,
        4.29
      ],
      "c": 3291196
    },
    {
      "t": "box",
      "n": "windshield",
      "p": [
        0,
        1.59,
        2.1
      ],
      "s": [
        1.57,
        0.65,
        0.027
      ],
      "c": 4092034
    },
    {
      "t": "box",
      "n": "side-window-0",
      "p": [
        -1.01,
        1.54,
        1.35
      ],
      "s": [
        0.027,
        0.57,
        0.74
      ],
      "c": 5081492
    },
    {
      "t": "box",
      "n": "red-stripe-0",
      "p": [
        -1.031,
        1.24,
        -0.52
      ],
      "s": [
        0.02,
        0.16,
        2.95
      ],
      "c": 13129037
    },
    {
      "t": "box",
      "n": "medical-cross-vertical-0",
      "p": [
        -1.04,
        1.55,
        -0.82
      ],
      "s": [
        0.026,
        0.48,
        0.16
      ],
      "c": 13129037
    },
    {
      "t": "box",
      "n": "medical-cross-horizontal-0",
      "p": [
        -1.05,
        1.55,
        -0.82
      ],
      "s": [
        0.028,
        0.16,
        0.49
      ],
      "c": 13129037
    },
    {
      "t": "cylinder",
      "n": "wheel-0-0",
      "p": [
        -1.045,
        0.42,
        -1.4
      ],
      "s": [
        0.76,
        0.2,
        0.76
      ],
      "c": 3291196,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-disc-0-0",
      "p": [
        -1.15,
        0.42,
        -1.4
      ],
      "s": [
        0.39,
        0.035,
        0.39
      ],
      "c": 8820381,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-0-1",
      "p": [
        -1.045,
        0.42,
        1.4
      ],
      "s": [
        0.76,
        0.2,
        0.76
      ],
      "c": 3291196,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-disc-0-1",
      "p": [
        -1.15,
        0.42,
        1.4
      ],
      "s": [
        0.39,
        0.035,
        0.39
      ],
      "c": 8820381,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "side-window-1",
      "p": [
        1.01,
        1.54,
        1.35
      ],
      "s": [
        0.027,
        0.57,
        0.74
      ],
      "c": 5081492
    },
    {
      "t": "box",
      "n": "red-stripe-1",
      "p": [
        1.031,
        1.24,
        -0.52
      ],
      "s": [
        0.02,
        0.16,
        2.95
      ],
      "c": 13129037
    },
    {
      "t": "box",
      "n": "medical-cross-vertical-1",
      "p": [
        1.04,
        1.55,
        -0.82
      ],
      "s": [
        0.026,
        0.48,
        0.16
      ],
      "c": 13129037
    },
    {
      "t": "box",
      "n": "medical-cross-horizontal-1",
      "p": [
        1.05,
        1.55,
        -0.82
      ],
      "s": [
        0.028,
        0.16,
        0.49
      ],
      "c": 13129037
    },
    {
      "t": "cylinder",
      "n": "wheel-1-0",
      "p": [
        1.045,
        0.42,
        -1.4
      ],
      "s": [
        0.76,
        0.2,
        0.76
      ],
      "c": 3291196,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-disc-1-0",
      "p": [
        1.15,
        0.42,
        -1.4
      ],
      "s": [
        0.39,
        0.035,
        0.39
      ],
      "c": 8820381,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-1-1",
      "p": [
        1.045,
        0.42,
        1.4
      ],
      "s": [
        0.76,
        0.2,
        0.76
      ],
      "c": 3291196,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-disc-1-1",
      "p": [
        1.15,
        0.42,
        1.4
      ],
      "s": [
        0.39,
        0.035,
        0.39
      ],
      "c": 8820381,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "roof-beacon-0",
      "p": [
        -0.47,
        2.42,
        0.27
      ],
      "s": [
        0.44,
        0.13,
        0.3
      ],
      "c": 11881293
    },
    {
      "t": "box",
      "n": "roof-beacon-1",
      "p": [
        0.47,
        2.42,
        0.27
      ],
      "s": [
        0.44,
        0.13,
        0.3
      ],
      "c": 4751023
    },
    {
      "t": "box",
      "n": "rear-door-seam",
      "p": [
        0,
        1.34,
        -2
      ],
      "s": [
        0.022,
        1.52,
        0.035
      ],
      "c": 8820381
    },
    {
      "t": "box",
      "n": "front-grille",
      "p": [
        0,
        0.78,
        2.12
      ],
      "s": [
        1.18,
        0.25,
        0.035
      ],
      "c": 3291196
    }
  ]
});
}
