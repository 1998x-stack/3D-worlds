import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Stadium Access Turnstile / 体育场入口验票闸机. */
export const assetMeta = {
  "id": "sports.stadium-access-turnstile.001",
  "slug": "stadium-access-turnstile",
  "title": "Stadium Access Turnstile",
  "title_zh": "体育场入口验票闸机",
  "summary": "Ticket access turnstile with rotating barrier arms, scanner and indicator lamps",
  "category": "sports",
  "tags": [
    "stadium",
    "access",
    "turnstile",
    "sports",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.5,
    1.58,
    1
  ],
  "generator": "createStadiumAccessTurnstile",
  "source_path": "src/models/stadium_access_turnstile.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/stadium-access-turnstile.webp",
  "accent": "#eaad6c"
};
export function createStadiumAccessTurnstile() { return buildRecipe({
  "title": "Stadium Access Turnstile",
  "dimensions": [
    1.5,
    1.58,
    1
  ],
  "parts": [
    {
      "t": "box",
      "n": "stadium-ticket-scanner-pedestal",
      "p": [
        0,
        0.81,
        0
      ],
      "s": [
        1.16,
        1.56,
        0.78
      ],
      "c": 5869473
    },
    {
      "t": "cylinder",
      "n": "turnstile-rotation-hub",
      "p": [
        0,
        0.96,
        0
      ],
      "s": [
        0.26,
        0.22,
        0.26
      ],
      "c": 4020071
    },
    {
      "t": "rod",
      "n": "rotating-entry-arm-0",
      "from": [
        0,
        0.96,
        0
      ],
      "to": [
        0.63,
        0.96,
        0
      ],
      "r": 0.055,
      "c": 14540250
    },
    {
      "t": "rod",
      "n": "rotating-entry-arm-1",
      "from": [
        0,
        0.96,
        0
      ],
      "to": [
        -0.31499999999999984,
        0.96,
        0.4070319397786862
      ],
      "r": 0.055,
      "c": 14540250
    },
    {
      "t": "rod",
      "n": "rotating-entry-arm-2",
      "from": [
        0,
        0.96,
        0
      ],
      "to": [
        -0.3150000000000003,
        0.96,
        -0.407031939778686
      ],
      "r": 0.055,
      "c": 14540250
    },
    {
      "t": "box",
      "n": "ticket-qr-scanner",
      "p": [
        0.34,
        1.35,
        0.35
      ],
      "s": [
        0.29,
        0.16,
        0.045
      ],
      "c": 15379820
    },
    {
      "t": "box",
      "n": "entrance-lamp",
      "p": [
        -0.33,
        1.4,
        0.35
      ],
      "s": [
        0.26,
        0.13,
        0.03
      ],
      "c": 4020071
    },
    {
      "t": "box",
      "n": "anti-tailgating-panel-0",
      "p": [
        -0.47,
        0.54,
        -0.41
      ],
      "s": [
        0.09,
        0.32,
        0.03
      ],
      "c": 14540250
    },
    {
      "t": "box",
      "n": "anti-tailgating-panel-1",
      "p": [
        -0.33999999999999997,
        0.54,
        -0.41
      ],
      "s": [
        0.09,
        0.32,
        0.03
      ],
      "c": 14540250
    },
    {
      "t": "box",
      "n": "anti-tailgating-panel-2",
      "p": [
        -0.20999999999999996,
        0.54,
        -0.41
      ],
      "s": [
        0.09,
        0.32,
        0.03
      ],
      "c": 14540250
    },
    {
      "t": "box",
      "n": "anti-tailgating-panel-3",
      "p": [
        -0.07999999999999996,
        0.54,
        -0.41
      ],
      "s": [
        0.09,
        0.32,
        0.03
      ],
      "c": 14540250
    },
    {
      "t": "box",
      "n": "anti-tailgating-panel-4",
      "p": [
        0.050000000000000044,
        0.54,
        -0.41
      ],
      "s": [
        0.09,
        0.32,
        0.03
      ],
      "c": 14540250
    },
    {
      "t": "box",
      "n": "anti-tailgating-panel-5",
      "p": [
        0.18000000000000005,
        0.54,
        -0.41
      ],
      "s": [
        0.09,
        0.32,
        0.03
      ],
      "c": 14540250
    },
    {
      "t": "box",
      "n": "anti-tailgating-panel-6",
      "p": [
        0.31000000000000005,
        0.54,
        -0.41
      ],
      "s": [
        0.09,
        0.32,
        0.03
      ],
      "c": 14540250
    },
    {
      "t": "box",
      "n": "anti-tailgating-panel-7",
      "p": [
        0.44000000000000006,
        0.54,
        -0.41
      ],
      "s": [
        0.09,
        0.32,
        0.03
      ],
      "c": 14540250
    },
    {
      "t": "box",
      "n": "gate-floor-bracket",
      "p": [
        0,
        0.06,
        0
      ],
      "s": [
        1.38,
        0.12,
        0.93
      ],
      "c": 4020071
    }
  ]
}); }
