import { buildRecipe } from './recipe_engine.js';
/** Omnidirectional Conference Camera / 全向会议摄像机: original authored procedural scene prop. */
export const assetMeta = {
  "id": "electronics.omnidirectional-conference-camera.001",
  "slug": "omnidirectional-conference-camera",
  "title": "Omnidirectional Conference Camera",
  "title_zh": "全向会议摄像机",
  "summary": "360-degree conference camera with four radial lenses, sound pickup ring and indicator base",
  "category": "electronics",
  "tags": [
    "conference",
    "camera",
    "meeting"
  ],
  "dimensions_m": [
    0.22,
    0.35,
    0.23
  ],
  "generator": "createOmnidirectionalConferenceCamera",
  "source_path": "src/models/omnidirectional_conference_camera.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/omnidirectional-conference-camera.webp"
};
export function createOmnidirectionalConferenceCamera() { return buildRecipe({
  "title": "Omnidirectional Conference Camera",
  "dimensions": [
    0.22,
    0.35,
    0.23
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "weighted-stand",
      "p": [
        0,
        0.04,
        0
      ],
      "s": [
        0.22,
        0.08,
        0.22
      ],
      "c": 3753552
    },
    {
      "t": "cylinder",
      "n": "microphone-housing",
      "p": [
        0,
        0.14,
        0
      ],
      "s": [
        0.19,
        0.18,
        0.19
      ],
      "c": 7047058
    },
    {
      "t": "sphere",
      "n": "camera-dome",
      "p": [
        0,
        0.28,
        0
      ],
      "s": [
        0.18,
        0.15,
        0.18
      ],
      "c": 8887974
    },
    {
      "t": "sphere",
      "n": "lens-rim-0",
      "p": [
        0.089,
        0.28,
        0
      ],
      "s": [
        0.061,
        0.052,
        0.049
      ],
      "c": 3753552
    },
    {
      "t": "sphere",
      "n": "glass-lens-0",
      "p": [
        0.132,
        0.28,
        0
      ],
      "s": [
        0.034,
        0.034,
        0.028
      ],
      "c": 2774120
    },
    {
      "t": "sphere",
      "n": "lens-rim-1",
      "p": [
        5.449678256205721e-18,
        0.28,
        0.089
      ],
      "s": [
        0.061,
        0.052,
        0.049
      ],
      "c": 3753552
    },
    {
      "t": "sphere",
      "n": "glass-lens-1",
      "p": [
        8.082668874372532e-18,
        0.28,
        0.132
      ],
      "s": [
        0.034,
        0.034,
        0.028
      ],
      "c": 2774120
    },
    {
      "t": "sphere",
      "n": "lens-rim-2",
      "p": [
        -0.089,
        0.28,
        1.0899356512411443e-17
      ],
      "s": [
        0.061,
        0.052,
        0.049
      ],
      "c": 3753552
    },
    {
      "t": "sphere",
      "n": "glass-lens-2",
      "p": [
        -0.132,
        0.28,
        1.6165337748745064e-17
      ],
      "s": [
        0.034,
        0.034,
        0.028
      ],
      "c": 2774120
    },
    {
      "t": "sphere",
      "n": "lens-rim-3",
      "p": [
        -1.6349034768617163e-17,
        0.28,
        -0.089
      ],
      "s": [
        0.061,
        0.052,
        0.049
      ],
      "c": 3753552
    },
    {
      "t": "sphere",
      "n": "glass-lens-3",
      "p": [
        -2.4248006623117592e-17,
        0.28,
        -0.132
      ],
      "s": [
        0.034,
        0.034,
        0.028
      ],
      "c": 2774120
    },
    {
      "t": "box",
      "n": "microphone-port-0",
      "p": [
        0.083,
        0.12,
        0
      ],
      "s": [
        0.016,
        0.018,
        0.012
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
      "n": "microphone-port-1",
      "p": [
        0.05868986283848345,
        0.12,
        0.058689862838483445
      ],
      "s": [
        0.016,
        0.018,
        0.012
      ],
      "c": 9215136,
      "rot": [
        0,
        0.7853981633974483,
        0
      ]
    },
    {
      "t": "box",
      "n": "microphone-port-2",
      "p": [
        5.082284216461516e-18,
        0.12,
        0.083
      ],
      "s": [
        0.016,
        0.018,
        0.012
      ],
      "c": 9215136,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "box",
      "n": "microphone-port-3",
      "p": [
        -0.058689862838483445,
        0.12,
        0.05868986283848345
      ],
      "s": [
        0.016,
        0.018,
        0.012
      ],
      "c": 9215136,
      "rot": [
        0,
        2.356194490192345,
        0
      ]
    },
    {
      "t": "box",
      "n": "microphone-port-4",
      "p": [
        -0.083,
        0.12,
        1.0164568432923032e-17
      ],
      "s": [
        0.016,
        0.018,
        0.012
      ],
      "c": 9215136,
      "rot": [
        0,
        3.141592653589793,
        0
      ]
    },
    {
      "t": "box",
      "n": "microphone-port-5",
      "p": [
        -0.05868986283848346,
        0.12,
        -0.058689862838483445
      ],
      "s": [
        0.016,
        0.018,
        0.012
      ],
      "c": 9215136,
      "rot": [
        0,
        3.9269908169872414,
        0
      ]
    },
    {
      "t": "box",
      "n": "microphone-port-6",
      "p": [
        -1.5246852649384548e-17,
        0.12,
        -0.083
      ],
      "s": [
        0.016,
        0.018,
        0.012
      ],
      "c": 9215136,
      "rot": [
        0,
        4.71238898038469,
        0
      ]
    },
    {
      "t": "box",
      "n": "microphone-port-7",
      "p": [
        0.05868986283848343,
        0.12,
        -0.05868986283848346
      ],
      "s": [
        0.016,
        0.018,
        0.012
      ],
      "c": 9215136,
      "rot": [
        0,
        5.497787143782138,
        0
      ]
    },
    {
      "t": "torus",
      "n": "status-ring",
      "p": [
        0,
        0.2,
        0
      ],
      "s": [
        0.26,
        0.26,
        0.26
      ],
      "c": 8436145,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "power-button",
      "p": [
        0,
        0.065,
        0.102
      ],
      "s": [
        0.033,
        0.024,
        0.017
      ],
      "c": 15197659
    },
    {
      "t": "rod",
      "n": "usb-cable",
      "from": [
        0,
        0.035,
        -0.12
      ],
      "to": [
        0.05,
        0.025,
        -0.24
      ],
      "r": 0.015,
      "c": 3753552
    }
  ]
}); }
