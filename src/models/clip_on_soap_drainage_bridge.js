import { buildRecipe } from './recipe_engine.js';
/** Original V1.3 maker-market inspired design: Clip-on Soap Drainage Bridge / 夹扣式肥皂沥水桥. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "bathroom.clip-on-soap-drainage-bridge.001",
  "slug": "clip-on-soap-drainage-bridge",
  "title": "Clip-on Soap Drainage Bridge",
  "title_zh": "夹扣式肥皂沥水桥",
  "summary": "Raised ribbed soap cradle with side clips and visible drainage channels",
  "category": "bathroom",
  "tags": [
    "clip",
    "soap",
    "drainage",
    "bridge",
    "bathroom",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.18,
    0.06,
    0.13
  ],
  "generator": "createClipOnSoapDrainageBridge",
  "source_path": "src/models/clip_on_soap_drainage_bridge.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.3",
  "preview_path": "public/thumbs/clip-on-soap-drainage-bridge.webp",
  "accent": "#78c9ad"
};
export function createClipOnSoapDrainageBridge() { return buildRecipe({
  "title": "Clip-on Soap Drainage Bridge",
  "dimensions": [
    0.18,
    0.06,
    0.13
  ],
  "parts": [
    {
      "t": "box",
      "n": "soap-platform",
      "p": [
        0,
        0.33,
        0
      ],
      "s": [
        1.8,
        0.08,
        1.15
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "drainage-slat-0",
      "p": [
        -0.82,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.09,
        1.12
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "drainage-slat-1",
      "p": [
        -0.6699999999999999,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.09,
        1.12
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "drainage-slat-2",
      "p": [
        -0.52,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.09,
        1.12
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "drainage-slat-3",
      "p": [
        -0.37,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.09,
        1.12
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "drainage-slat-4",
      "p": [
        -0.21999999999999997,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.09,
        1.12
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "drainage-slat-5",
      "p": [
        -0.06999999999999995,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.09,
        1.12
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "drainage-slat-6",
      "p": [
        0.07999999999999996,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.09,
        1.12
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "drainage-slat-7",
      "p": [
        0.2300000000000001,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.09,
        1.12
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "drainage-slat-8",
      "p": [
        0.38,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.09,
        1.12
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "drainage-slat-9",
      "p": [
        0.5299999999999999,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.09,
        1.12
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "drainage-slat-10",
      "p": [
        0.68,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.09,
        1.12
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "drainage-slat-11",
      "p": [
        0.83,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.09,
        1.12
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "side-clamp0",
      "p": [
        -0.98,
        0.23,
        0
      ],
      "s": [
        0.17,
        0.5,
        1.24
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "spring-tab0",
      "p": [
        -1.05,
        0.07,
        0
      ],
      "s": [
        0.32,
        0.08,
        0.66
      ],
      "c": 15776881
    },
    {
      "t": "box",
      "n": "side-clamp1",
      "p": [
        0.98,
        0.23,
        0
      ],
      "s": [
        0.17,
        0.5,
        1.24
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "spring-tab1",
      "p": [
        1.05,
        0.07,
        0
      ],
      "s": [
        0.32,
        0.08,
        0.66
      ],
      "c": 15776881
    },
    {
      "t": "box",
      "n": "channel-support-0",
      "p": [
        -0.65,
        0.15,
        -0.4
      ],
      "s": [
        0.12,
        0.26,
        0.1
      ],
      "c": 7177108
    },
    {
      "t": "box",
      "n": "channel-support-1",
      "p": [
        0.65,
        0.15,
        -0.4
      ],
      "s": [
        0.12,
        0.26,
        0.1
      ],
      "c": 7177108
    },
    {
      "t": "box",
      "n": "channel-support-2",
      "p": [
        -0.65,
        0.15,
        0.4
      ],
      "s": [
        0.12,
        0.26,
        0.1
      ],
      "c": 7177108
    },
    {
      "t": "box",
      "n": "channel-support-3",
      "p": [
        0.65,
        0.15,
        0.4
      ],
      "s": [
        0.12,
        0.26,
        0.1
      ],
      "c": 7177108
    }
  ]
}); }
