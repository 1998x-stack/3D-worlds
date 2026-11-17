import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Kinetic Pendulum Art Mobile / 动态摆锤艺术装置. */
export const assetMeta = {
  "id": "decor.kinetic-pendulum-art-mobile.001",
  "slug": "kinetic-pendulum-art-mobile",
  "title": "Kinetic Pendulum Art Mobile",
  "title_zh": "动态摆锤艺术装置",
  "summary": "Suspended kinetic sculpture with nested pendulums, weighted spheres and radial frames",
  "category": "decor",
  "tags": [
    "kinetic",
    "pendulum",
    "art",
    "mobile",
    "decor",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.85,
    2.45,
    1.2
  ],
  "generator": "createKineticPendulumArtMobile",
  "source_path": "src/models/kinetic_pendulum_art_mobile.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/kinetic-pendulum-art-mobile.webp",
  "accent": "#ead2a7"
};
export function createKineticPendulumArtMobile() { return buildRecipe({
  "title": "Kinetic Pendulum Art Mobile",
  "dimensions": [
    1.85,
    2.45,
    1.2
  ],
  "parts": [
    {
      "t": "rod",
      "n": "pendulum-overhead-suspension",
      "from": [
        0,
        0.12,
        0
      ],
      "to": [
        0,
        2.3,
        0
      ],
      "r": 0.055,
      "c": 4413544
    },
    {
      "t": "box",
      "n": "sculptural-horizontal-crossbeam",
      "p": [
        0,
        2.27,
        0
      ],
      "s": [
        1.61,
        0.09,
        0.19
      ],
      "c": 9479818
    },
    {
      "t": "rod",
      "n": "kinetic-pendulum-cord-0",
      "from": [
        -0.68,
        2.21,
        0
      ],
      "to": [
        -0.68,
        1.5299999999999998,
        0.12
      ],
      "r": 0.012,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "weighted-pendulum-bob-0",
      "p": [
        -0.68,
        1.5299999999999998,
        0.12
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 12818301
    },
    {
      "t": "rod",
      "n": "kinetic-pendulum-cord-1",
      "from": [
        -0.51,
        2.21,
        0
      ],
      "to": [
        -0.44268232121536827,
        1.3199999999999998,
        0.06483627670417677
      ],
      "r": 0.012,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "weighted-pendulum-bob-1",
      "p": [
        -0.44268232121536827,
        1.3199999999999998,
        0.06483627670417677
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 15389351
    },
    {
      "t": "rod",
      "n": "kinetic-pendulum-cord-2",
      "from": [
        -0.34,
        2.21,
        0
      ],
      "to": [
        -0.2672562058539455,
        1.1099999999999999,
        -0.049937620385657085
      ],
      "r": 0.012,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "weighted-pendulum-bob-2",
      "p": [
        -0.2672562058539455,
        1.1099999999999999,
        -0.049937620385657085
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 12818301
    },
    {
      "t": "rod",
      "n": "kinetic-pendulum-cord-3",
      "from": [
        -0.17000000000000004,
        2.21,
        0
      ],
      "to": [
        -0.15871039935521067,
        0.8999999999999999,
        -0.11879909959205344
      ],
      "r": 0.012,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "weighted-pendulum-bob-3",
      "p": [
        -0.15871039935521067,
        0.8999999999999999,
        -0.11879909959205344
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 15389351
    },
    {
      "t": "rod",
      "n": "kinetic-pendulum-cord-4",
      "from": [
        0,
        2.21,
        0
      ],
      "to": [
        -0.06054419962463426,
        1.5299999999999998,
        -0.07843723450363344
      ],
      "r": 0.012,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "weighted-pendulum-bob-4",
      "p": [
        -0.06054419962463426,
        1.5299999999999998,
        -0.07843723450363344
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 12818301
    },
    {
      "t": "rod",
      "n": "kinetic-pendulum-cord-5",
      "from": [
        0.17000000000000004,
        2.21,
        0
      ],
      "to": [
        0.09328605802694896,
        1.3199999999999998,
        0.03403946225558715
      ],
      "r": 0.012,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "weighted-pendulum-bob-5",
      "p": [
        0.09328605802694896,
        1.3199999999999998,
        0.03403946225558715
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 15389351
    },
    {
      "t": "rod",
      "n": "kinetic-pendulum-cord-6",
      "from": [
        0.33999999999999997,
        2.21,
        0
      ],
      "to": [
        0.3176467601440859,
        1.1099999999999999,
        0.11522043439804391
      ],
      "r": 0.012,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "weighted-pendulum-bob-6",
      "p": [
        0.3176467601440859,
        1.1099999999999999,
        0.11522043439804391
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 12818301
    },
    {
      "t": "rod",
      "n": "kinetic-pendulum-cord-7",
      "from": [
        0.5100000000000001,
        2.21,
        0
      ],
      "to": [
        0.5625589278975033,
        0.8999999999999999,
        0.09046827052119655
      ],
      "r": 0.012,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "weighted-pendulum-bob-7",
      "p": [
        0.5625589278975033,
        0.8999999999999999,
        0.09046827052119655
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 15389351
    },
    {
      "t": "rod",
      "n": "kinetic-pendulum-cord-8",
      "from": [
        0.68,
        2.21,
        0
      ],
      "to": [
        0.7591486597298706,
        1.5299999999999998,
        -0.017460004057033626
      ],
      "r": 0.012,
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "weighted-pendulum-bob-8",
      "p": [
        0.7591486597298706,
        1.5299999999999998,
        -0.017460004057033626
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 12818301
    },
    {
      "t": "torus",
      "n": "orbiting-art-ring",
      "p": [
        0,
        1.31,
        0
      ],
      "s": [
        2.16,
        0.12,
        1.26
      ],
      "c": 9479818,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "rod",
      "n": "pendulum-link-0",
      "from": [
        0.5,
        1.3,
        0
      ],
      "to": [
        0.8,
        1.69,
        0.2
      ],
      "r": 0.024,
      "c": 15389351
    },
    {
      "t": "rod",
      "n": "pendulum-link-1",
      "from": [
        0.00039816335536663167,
        1.3,
        0
      ],
      "to": [
        0.0006370613685866107,
        1.69,
        0.2
      ],
      "r": 0.024,
      "c": 15389351
    },
    {
      "t": "rod",
      "n": "pendulum-link-2",
      "from": [
        -0.49999936586376975,
        1.3,
        0
      ],
      "to": [
        -0.7999989853820316,
        1.69,
        0.2
      ],
      "r": 0.024,
      "c": 15389351
    },
    {
      "t": "rod",
      "n": "pendulum-link-3",
      "from": [
        -0.0011944890561407693,
        1.3,
        0
      ],
      "to": [
        -0.001911182489825231,
        1.69,
        0.2
      ],
      "r": 0.024,
      "c": 15389351
    }
  ]
}); }
