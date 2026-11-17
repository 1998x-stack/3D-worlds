import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "scifi.six-wheel-exploration-rover.001",
  "slug": "six-wheel-exploration-rover",
  "title": "Six Wheel Exploration Rover",
  "title_zh": "六轮科考探测车",
  "summary": "Six-wheel noncombat robotic rover with solar panels, suspension, stereo camera and sample bin.",
  "category": "scifi",
  "tags": [
    "rover",
    "exploration",
    "sci-fi",
    "robotics"
  ],
  "dimensions_m": [
    2,
    1.66,
    2.65
  ],
  "generator": "createSixWheelExplorationRover",
  "source_path": "src/models/six_wheel_exploration_rover.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/six-wheel-exploration-rover.webp"
};
export function createSixWheelExplorationRover() {return buildRecipe({
  "title": "Six Wheel Exploration Rover",
  "dimensions": [
    2,
    1.66,
    2.65
  ],
  "parts": [
    {
      "t": "box",
      "n": "rover-chassis",
      "p": [
        0,
        0.88,
        0
      ],
      "s": [
        1.65,
        0.37,
        2.07
      ],
      "c": 8099234
    },
    {
      "t": "box",
      "n": "instruments",
      "p": [
        0,
        1.13,
        -0.26
      ],
      "s": [
        1.21,
        0.28,
        1.32
      ],
      "c": 10728370
    },
    {
      "t": "box",
      "n": "solar-left",
      "p": [
        -0.7,
        1.33,
        0.1
      ],
      "s": [
        0.69,
        0.06,
        0.96
      ],
      "c": 3563640
    },
    {
      "t": "box",
      "n": "solar-right",
      "p": [
        0.7,
        1.33,
        0.1
      ],
      "s": [
        0.69,
        0.06,
        0.96
      ],
      "c": 3563640
    },
    {
      "t": "rod",
      "n": "camera-mast",
      "from": [
        0,
        1.29,
        0.3
      ],
      "to": [
        0,
        1.64,
        0.3
      ],
      "r": 0.035,
      "c": 9348268
    },
    {
      "t": "sphere",
      "n": "camera-pod",
      "p": [
        0,
        1.65,
        0.3
      ],
      "s": [
        0.3,
        0.18,
        0.18
      ],
      "c": 14140836
    },
    {
      "t": "box",
      "n": "sample-bin",
      "p": [
        0,
        1.21,
        -0.86
      ],
      "s": [
        0.53,
        0.13,
        0.32
      ],
      "c": 6581613
    },
    {
      "t": "rod",
      "n": "suspension-0-0",
      "from": [
        -0.62,
        0.8,
        -0.77
      ],
      "to": [
        -0.91,
        0.42,
        -0.77
      ],
      "r": 0.035,
      "c": 9348268
    },
    {
      "t": "cylinder",
      "n": "wheel-0-0",
      "p": [
        -0.9,
        0.39,
        -0.77
      ],
      "s": [
        0.66,
        0.19,
        0.66
      ],
      "c": 3424586,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "hub-0-0",
      "p": [
        -1,
        0.39,
        -0.77
      ],
      "s": [
        0.24,
        0.2,
        0.24
      ],
      "c": 12690292,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "suspension-0-1",
      "from": [
        -0.62,
        0.8,
        0
      ],
      "to": [
        -0.91,
        0.42,
        0
      ],
      "r": 0.035,
      "c": 9348268
    },
    {
      "t": "cylinder",
      "n": "wheel-0-1",
      "p": [
        -0.9,
        0.39,
        0
      ],
      "s": [
        0.66,
        0.19,
        0.66
      ],
      "c": 3424586,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "hub-0-1",
      "p": [
        -1,
        0.39,
        0
      ],
      "s": [
        0.24,
        0.2,
        0.24
      ],
      "c": 12690292,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "suspension-0-2",
      "from": [
        -0.62,
        0.8,
        0.77
      ],
      "to": [
        -0.91,
        0.42,
        0.77
      ],
      "r": 0.035,
      "c": 9348268
    },
    {
      "t": "cylinder",
      "n": "wheel-0-2",
      "p": [
        -0.9,
        0.39,
        0.77
      ],
      "s": [
        0.66,
        0.19,
        0.66
      ],
      "c": 3424586,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "hub-0-2",
      "p": [
        -1,
        0.39,
        0.77
      ],
      "s": [
        0.24,
        0.2,
        0.24
      ],
      "c": 12690292,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "suspension-1-0",
      "from": [
        0.62,
        0.8,
        -0.77
      ],
      "to": [
        0.91,
        0.42,
        -0.77
      ],
      "r": 0.035,
      "c": 9348268
    },
    {
      "t": "cylinder",
      "n": "wheel-1-0",
      "p": [
        0.9,
        0.39,
        -0.77
      ],
      "s": [
        0.66,
        0.19,
        0.66
      ],
      "c": 3424586,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "hub-1-0",
      "p": [
        1,
        0.39,
        -0.77
      ],
      "s": [
        0.24,
        0.2,
        0.24
      ],
      "c": 12690292,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "suspension-1-1",
      "from": [
        0.62,
        0.8,
        0
      ],
      "to": [
        0.91,
        0.42,
        0
      ],
      "r": 0.035,
      "c": 9348268
    },
    {
      "t": "cylinder",
      "n": "wheel-1-1",
      "p": [
        0.9,
        0.39,
        0
      ],
      "s": [
        0.66,
        0.19,
        0.66
      ],
      "c": 3424586,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "hub-1-1",
      "p": [
        1,
        0.39,
        0
      ],
      "s": [
        0.24,
        0.2,
        0.24
      ],
      "c": 12690292,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "suspension-1-2",
      "from": [
        0.62,
        0.8,
        0.77
      ],
      "to": [
        0.91,
        0.42,
        0.77
      ],
      "r": 0.035,
      "c": 9348268
    },
    {
      "t": "cylinder",
      "n": "wheel-1-2",
      "p": [
        0.9,
        0.39,
        0.77
      ],
      "s": [
        0.66,
        0.19,
        0.66
      ],
      "c": 3424586,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "hub-1-2",
      "p": [
        1,
        0.39,
        0.77
      ],
      "s": [
        0.24,
        0.2,
        0.24
      ],
      "c": 12690292,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "sphere",
      "n": "stereo-lens-0",
      "p": [
        -0.1,
        1.65,
        0.47
      ],
      "s": [
        0.052,
        0.045,
        0.023
      ],
      "c": 3364727
    },
    {
      "t": "sphere",
      "n": "stereo-lens-1",
      "p": [
        0.1,
        1.65,
        0.47
      ],
      "s": [
        0.052,
        0.045,
        0.023
      ],
      "c": 3364727
    }
  ]
});}
