import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "scifi.robotic-mining-excavator.001",
  "slug": "robotic-mining-excavator",
  "title": "Robotic Mining Excavator",
  "title_zh": "机器人采矿挖掘车",
  "summary": "Nonweapon autonomous mining crawler with articulated boom, digging bucket and sensors",
  "category": "scifi",
  "tags": [
    "mining",
    "excavator",
    "robot"
  ],
  "dimensions_m": [
    2.25,
    2.46,
    3.36
  ],
  "generator": "createRoboticMiningExcavator",
  "source_path": "src/models/robotic_mining_excavator.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/robotic-mining-excavator.webp"
};
export function createRoboticMiningExcavator() { return buildRecipe({
  "title": "Robotic Mining Excavator",
  "dimensions": [
    2.25,
    2.46,
    3.36
  ],
  "parts": [
    {
      "t": "box",
      "n": "crawler-chassis",
      "p": [
        0,
        0.44,
        -0.2
      ],
      "s": [
        1.86,
        0.48,
        2.7
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "operatorless-cab",
      "p": [
        0,
        1.16,
        -0.75
      ],
      "s": [
        1.24,
        0.96,
        1.14
      ],
      "c": 11187881
    },
    {
      "t": "box",
      "n": "sensor-windshield",
      "p": [
        0,
        1.39,
        -0.15
      ],
      "s": [
        0.87,
        0.34,
        0.02
      ],
      "c": 5540513
    },
    {
      "t": "box",
      "n": "crawler-track-0",
      "p": [
        -0.87,
        0.29,
        -0.22
      ],
      "s": [
        0.31,
        0.47,
        2.59
      ],
      "c": 3490634
    },
    {
      "t": "cylinder",
      "n": "road-wheel-0-0",
      "p": [
        -1.05,
        0.31,
        -1.25
      ],
      "s": [
        0.38,
        0.1,
        0.38
      ],
      "c": 9741221,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "road-wheel-0-1",
      "p": [
        -1.05,
        0.31,
        -0.58
      ],
      "s": [
        0.38,
        0.1,
        0.38
      ],
      "c": 9741221,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "road-wheel-0-2",
      "p": [
        -1.05,
        0.31,
        0.09000000000000008
      ],
      "s": [
        0.38,
        0.1,
        0.38
      ],
      "c": 9741221,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "road-wheel-0-3",
      "p": [
        -1.05,
        0.31,
        0.7600000000000002
      ],
      "s": [
        0.38,
        0.1,
        0.38
      ],
      "c": 9741221,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "crawler-track-1",
      "p": [
        0.87,
        0.29,
        -0.22
      ],
      "s": [
        0.31,
        0.47,
        2.59
      ],
      "c": 3490634
    },
    {
      "t": "cylinder",
      "n": "road-wheel-1-0",
      "p": [
        1.05,
        0.31,
        -1.25
      ],
      "s": [
        0.38,
        0.1,
        0.38
      ],
      "c": 9741221,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "road-wheel-1-1",
      "p": [
        1.05,
        0.31,
        -0.58
      ],
      "s": [
        0.38,
        0.1,
        0.38
      ],
      "c": 9741221,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "road-wheel-1-2",
      "p": [
        1.05,
        0.31,
        0.09000000000000008
      ],
      "s": [
        0.38,
        0.1,
        0.38
      ],
      "c": 9741221,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "road-wheel-1-3",
      "p": [
        1.05,
        0.31,
        0.7600000000000002
      ],
      "s": [
        0.38,
        0.1,
        0.38
      ],
      "c": 9741221,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "primary-boom",
      "from": [
        0,
        1.42,
        0.03
      ],
      "to": [
        0,
        2.29,
        0.96
      ],
      "r": 0.14,
      "c": 12162133
    },
    {
      "t": "rod",
      "n": "elbow-boom",
      "from": [
        0,
        2.29,
        0.96
      ],
      "to": [
        0,
        1.71,
        1.69
      ],
      "r": 0.11,
      "c": 10781257
    },
    {
      "t": "box",
      "n": "digging-bucket",
      "p": [
        0,
        1.45,
        1.78
      ],
      "s": [
        0.79,
        0.44,
        0.58
      ],
      "c": 5991794,
      "rot": [
        0.22,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "bucket-tooth-0",
      "p": [
        -0.34,
        1.19,
        2.07
      ],
      "s": [
        0.09,
        0.22,
        0.08
      ],
      "c": 9741221,
      "rot": [
        0,
        0,
        3.141592653589793
      ]
    },
    {
      "t": "cone",
      "n": "bucket-tooth-1",
      "p": [
        -0.17,
        1.19,
        2.07
      ],
      "s": [
        0.09,
        0.22,
        0.08
      ],
      "c": 9741221,
      "rot": [
        0,
        0,
        3.141592653589793
      ]
    },
    {
      "t": "cone",
      "n": "bucket-tooth-2",
      "p": [
        0,
        1.19,
        2.07
      ],
      "s": [
        0.09,
        0.22,
        0.08
      ],
      "c": 9741221,
      "rot": [
        0,
        0,
        3.141592653589793
      ]
    },
    {
      "t": "cone",
      "n": "bucket-tooth-3",
      "p": [
        0.16999999999999998,
        1.19,
        2.07
      ],
      "s": [
        0.09,
        0.22,
        0.08
      ],
      "c": 9741221,
      "rot": [
        0,
        0,
        3.141592653589793
      ]
    },
    {
      "t": "cone",
      "n": "bucket-tooth-4",
      "p": [
        0.34,
        1.19,
        2.07
      ],
      "s": [
        0.09,
        0.22,
        0.08
      ],
      "c": 9741221,
      "rot": [
        0,
        0,
        3.141592653589793
      ]
    },
    {
      "t": "rod",
      "n": "hydraulic-piston",
      "from": [
        0.29,
        1.33,
        0.26
      ],
      "to": [
        0.29,
        2.05,
        0.93
      ],
      "r": 0.045,
      "c": 9741221
    },
    {
      "t": "cylinder",
      "n": "turntable",
      "p": [
        0,
        0.85,
        -0.46
      ],
      "s": [
        0.62,
        0.12,
        0.62
      ],
      "c": 12953197
    },
    {
      "t": "sphere",
      "n": "lidar-sensor",
      "p": [
        0,
        1.8,
        -0.89
      ],
      "s": [
        0.21,
        0.17,
        0.21
      ],
      "c": 5540513
    },
    {
      "t": "rod",
      "n": "sensor-mast",
      "from": [
        0,
        1.64,
        -0.89
      ],
      "to": [
        0,
        1.98,
        -0.89
      ],
      "r": 0.029,
      "c": 9741221
    }
  ]
}); }
