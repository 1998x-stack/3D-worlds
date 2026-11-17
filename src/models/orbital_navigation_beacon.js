import { buildRecipe } from './recipe_engine.js';
/** Orbital Navigation Beacon: original source-editable mesh scene. */
export const assetMeta = {
  "id": "scifi.orbital-navigation-beacon.001",
  "slug": "orbital-navigation-beacon",
  "title": "Orbital Navigation Beacon",
  "title_zh": "轨道导航信标",
  "summary": "Orbital route guidance beacon with toroidal antenna, luminous fins and stabilizer thrusters",
  "category": "scifi",
  "tags": [
    "orbital",
    "beacon",
    "navigation"
  ],
  "dimensions_m": [
    1.69,
    3.31,
    1.61
  ],
  "generator": "createOrbitalNavigationBeacon",
  "source_path": "src/models/orbital_navigation_beacon.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/orbital-navigation-beacon.webp"
};
export function createOrbitalNavigationBeacon() { return buildRecipe({
  "title": "Orbital Navigation Beacon",
  "dimensions": [
    1.69,
    3.31,
    1.61
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "tech-pedestal",
      "p": [
        0,
        0.13,
        0
      ],
      "s": [
        1.18,
        0.25,
        1.05
      ],
      "c": 3753293
    },
    {
      "t": "rod",
      "n": "beacon-mast",
      "from": [
        0,
        0.25,
        0
      ],
      "to": [
        0,
        3.19,
        0
      ],
      "r": 0.079,
      "c": 9872548
    },
    {
      "t": "torus",
      "n": "orbital-navigation-ring",
      "p": [
        0,
        2.09,
        0
      ],
      "s": [
        2.08,
        2.08,
        2.08
      ],
      "c": 6657707
    },
    {
      "t": "torus",
      "n": "signal-ring-inner",
      "p": [
        0,
        2.09,
        0.13
      ],
      "s": [
        1.35,
        1.35,
        1.35
      ],
      "c": 12952430
    },
    {
      "t": "sphere",
      "n": "beacon-emitter",
      "p": [
        0,
        2.1,
        0.15
      ],
      "s": [
        0.37,
        0.36,
        0.33
      ],
      "c": 9094853
    },
    {
      "t": "rod",
      "n": "antenna-radial-0",
      "from": [
        0,
        2.1,
        0
      ],
      "to": [
        0.66,
        2.1,
        0
      ],
      "r": 0.023,
      "c": 9872548
    },
    {
      "t": "sphere",
      "n": "navigation-led-0",
      "p": [
        0.66,
        2.1,
        0
      ],
      "s": [
        0.09,
        0.09,
        0.09
      ],
      "c": 12952430
    },
    {
      "t": "rod",
      "n": "antenna-radial-1",
      "from": [
        0,
        2.1,
        0
      ],
      "to": [
        0.46669047558312143,
        2.5525483399593902,
        0.4666904755831213
      ],
      "r": 0.023,
      "c": 9872548
    },
    {
      "t": "sphere",
      "n": "navigation-led-1",
      "p": [
        0.46669047558312143,
        2.5525483399593902,
        0.4666904755831213
      ],
      "s": [
        0.09,
        0.09,
        0.09
      ],
      "c": 15197661
    },
    {
      "t": "rod",
      "n": "antenna-radial-2",
      "from": [
        0,
        2.1,
        0
      ],
      "to": [
        4.041334437186266e-17,
        2.74,
        0.66
      ],
      "r": 0.023,
      "c": 9872548
    },
    {
      "t": "sphere",
      "n": "navigation-led-2",
      "p": [
        4.041334437186266e-17,
        2.74,
        0.66
      ],
      "s": [
        0.09,
        0.09,
        0.09
      ],
      "c": 12952430
    },
    {
      "t": "rod",
      "n": "antenna-radial-3",
      "from": [
        0,
        2.1,
        0
      ],
      "to": [
        -0.4666904755831213,
        2.5525483399593907,
        0.46669047558312143
      ],
      "r": 0.023,
      "c": 9872548
    },
    {
      "t": "sphere",
      "n": "navigation-led-3",
      "p": [
        -0.4666904755831213,
        2.5525483399593907,
        0.46669047558312143
      ],
      "s": [
        0.09,
        0.09,
        0.09
      ],
      "c": 15197661
    },
    {
      "t": "rod",
      "n": "antenna-radial-4",
      "from": [
        0,
        2.1,
        0
      ],
      "to": [
        -0.66,
        2.1,
        8.082668874372532e-17
      ],
      "r": 0.023,
      "c": 9872548
    },
    {
      "t": "sphere",
      "n": "navigation-led-4",
      "p": [
        -0.66,
        2.1,
        8.082668874372532e-17
      ],
      "s": [
        0.09,
        0.09,
        0.09
      ],
      "c": 12952430
    },
    {
      "t": "rod",
      "n": "antenna-radial-5",
      "from": [
        0,
        2.1,
        0
      ],
      "to": [
        -0.4666904755831215,
        1.6474516600406097,
        -0.4666904755831213
      ],
      "r": 0.023,
      "c": 9872548
    },
    {
      "t": "sphere",
      "n": "navigation-led-5",
      "p": [
        -0.4666904755831215,
        1.6474516600406097,
        -0.4666904755831213
      ],
      "s": [
        0.09,
        0.09,
        0.09
      ],
      "c": 15197661
    },
    {
      "t": "rod",
      "n": "antenna-radial-6",
      "from": [
        0,
        2.1,
        0
      ],
      "to": [
        -1.2124003311558797e-16,
        1.46,
        -0.66
      ],
      "r": 0.023,
      "c": 9872548
    },
    {
      "t": "sphere",
      "n": "navigation-led-6",
      "p": [
        -1.2124003311558797e-16,
        1.46,
        -0.66
      ],
      "s": [
        0.09,
        0.09,
        0.09
      ],
      "c": 12952430
    },
    {
      "t": "rod",
      "n": "antenna-radial-7",
      "from": [
        0,
        2.1,
        0
      ],
      "to": [
        0.46669047558312127,
        1.6474516600406095,
        -0.4666904755831215
      ],
      "r": 0.023,
      "c": 9872548
    },
    {
      "t": "sphere",
      "n": "navigation-led-7",
      "p": [
        0.46669047558312127,
        1.6474516600406095,
        -0.4666904755831215
      ],
      "s": [
        0.09,
        0.09,
        0.09
      ],
      "c": 15197661
    },
    {
      "t": "cone",
      "n": "attitude-thruster-0",
      "p": [
        0.4,
        0.38,
        0
      ],
      "s": [
        0.18,
        0.2,
        0.18
      ],
      "c": 3753293,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "attitude-thruster-1",
      "p": [
        0.00031853068429330537,
        0.38,
        0.3999998731727339
      ],
      "s": [
        0.18,
        0.2,
        0.18
      ],
      "c": 3753293,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "attitude-thruster-2",
      "p": [
        -0.3999994926910158,
        0.38,
        0.0006370611665947314
      ],
      "s": [
        0.18,
        0.2,
        0.18
      ],
      "c": 3753293,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "attitude-thruster-3",
      "p": [
        -0.0009555912449126155,
        0.38,
        -0.3999988585550872
      ],
      "s": [
        0.18,
        0.2,
        0.18
      ],
      "c": 3753293,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "top-beacon-light",
      "p": [
        0,
        3.27,
        0
      ],
      "s": [
        0.13,
        0.12,
        0.13
      ],
      "c": 15197661
    }
  ]
}); }
