import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Tactile Bus Stop Information Rail / 无障碍公交站信息栏. */
export const assetMeta = {
  "id": "urban.tactile-bus-stop-information-rail.001",
  "slug": "tactile-bus-stop-information-rail",
  "title": "Tactile Bus Stop Information Rail",
  "title_zh": "无障碍公交站信息栏",
  "summary": "Accessible bus stop wayfinding bar with tactile map, braille dots and illuminated route sign",
  "category": "urban",
  "tags": [
    "tactile",
    "bus",
    "stop",
    "information",
    "rail",
    "urban",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.96,
    2.48,
    0.95
  ],
  "generator": "createTactileBusStopInformationRail",
  "source_path": "src/models/tactile_bus_stop_information_rail.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/tactile-bus-stop-information-rail.webp",
  "accent": "#aac0a7"
};
export function createTactileBusStopInformationRail() { return buildRecipe({
  "title": "Tactile Bus Stop Information Rail",
  "dimensions": [
    2.96,
    2.48,
    0.95
  ],
  "parts": [
    {
      "t": "box",
      "n": "tactile-bus-stop-information-rail-bus-stop-tactile-base",
      "p": [
        0,
        0.13,
        0
      ],
      "s": [
        2.71,
        0.18,
        0.73
      ],
      "c": 11190439
    },
    {
      "t": "rod",
      "n": "tactile-bus-stop-information-rail-busstop-accessible-post--1",
      "from": [
        -1.17,
        0.21,
        0
      ],
      "to": [
        -1.17,
        2.25,
        0
      ],
      "r": 0.056,
      "c": 4872041
    },
    {
      "t": "rod",
      "n": "tactile-bus-stop-information-rail-busstop-accessible-post-1",
      "from": [
        1.17,
        0.21,
        0
      ],
      "to": [
        1.17,
        2.25,
        0
      ],
      "r": 0.056,
      "c": 4872041
    },
    {
      "t": "box",
      "n": "tactile-bus-stop-information-rail-public-transport-route-header",
      "p": [
        0,
        2.12,
        0
      ],
      "s": [
        2.45,
        0.28,
        0.18
      ],
      "c": 7178134
    },
    {
      "t": "box",
      "n": "tactile-bus-stop-information-rail-raised-relief-transit-map",
      "p": [
        0,
        1.27,
        0.1
      ],
      "s": [
        2.34,
        0.74,
        0.09
      ],
      "c": 14202734
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-0",
      "p": [
        -1.05,
        1.18,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-1",
      "p": [
        -0.8700000000000001,
        1.18,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-2",
      "p": [
        -0.6900000000000001,
        1.18,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-3",
      "p": [
        -0.51,
        1.18,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-4",
      "p": [
        -0.33000000000000007,
        1.18,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-5",
      "p": [
        -0.15000000000000013,
        1.18,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-6",
      "p": [
        0.030000000000000027,
        1.18,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-7",
      "p": [
        0.20999999999999996,
        1.18,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-8",
      "p": [
        0.3899999999999999,
        1.18,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-9",
      "p": [
        0.5699999999999998,
        1.18,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-10",
      "p": [
        0.7499999999999998,
        1.18,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-11",
      "p": [
        0.9299999999999999,
        1.18,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-12",
      "p": [
        -1.05,
        1.2999999999999998,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-13",
      "p": [
        -0.8700000000000001,
        1.2999999999999998,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-14",
      "p": [
        -0.6900000000000001,
        1.2999999999999998,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-15",
      "p": [
        -0.51,
        1.2999999999999998,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-16",
      "p": [
        -0.33000000000000007,
        1.2999999999999998,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-17",
      "p": [
        -0.15000000000000013,
        1.2999999999999998,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-18",
      "p": [
        0.030000000000000027,
        1.2999999999999998,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-19",
      "p": [
        0.20999999999999996,
        1.2999999999999998,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-20",
      "p": [
        0.3899999999999999,
        1.2999999999999998,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-21",
      "p": [
        0.5699999999999998,
        1.2999999999999998,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-22",
      "p": [
        0.7499999999999998,
        1.2999999999999998,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "sphere",
      "n": "tactile-bus-stop-information-rail-braille-accessibility-dot-23",
      "p": [
        0.9299999999999999,
        1.2999999999999998,
        0.163
      ],
      "s": [
        0.026,
        0.027,
        0.019
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "tactile-bus-stop-information-rail-accessible-bus-route-label-0",
      "p": [
        -0.91,
        1.58,
        0.17
      ],
      "s": [
        0.26,
        0.065,
        0.015
      ],
      "c": 11190439
    },
    {
      "t": "box",
      "n": "tactile-bus-stop-information-rail-accessible-bus-route-label-1",
      "p": [
        -0.55,
        1.58,
        0.17
      ],
      "s": [
        0.26,
        0.065,
        0.015
      ],
      "c": 11190439
    },
    {
      "t": "box",
      "n": "tactile-bus-stop-information-rail-accessible-bus-route-label-2",
      "p": [
        -0.19000000000000006,
        1.58,
        0.17
      ],
      "s": [
        0.26,
        0.065,
        0.015
      ],
      "c": 11190439
    },
    {
      "t": "box",
      "n": "tactile-bus-stop-information-rail-accessible-bus-route-label-3",
      "p": [
        0.17000000000000004,
        1.58,
        0.17
      ],
      "s": [
        0.26,
        0.065,
        0.015
      ],
      "c": 11190439
    },
    {
      "t": "box",
      "n": "tactile-bus-stop-information-rail-accessible-bus-route-label-4",
      "p": [
        0.5299999999999999,
        1.58,
        0.17
      ],
      "s": [
        0.26,
        0.065,
        0.015
      ],
      "c": 11190439
    },
    {
      "t": "box",
      "n": "tactile-bus-stop-information-rail-accessible-bus-route-label-5",
      "p": [
        0.8899999999999998,
        1.58,
        0.17
      ],
      "s": [
        0.26,
        0.065,
        0.015
      ],
      "c": 11190439
    },
    {
      "t": "rod",
      "n": "tactile-bus-stop-information-rail-low-height-tactile-grip-rail",
      "from": [
        -1.13,
        0.72,
        0.16
      ],
      "to": [
        1.14,
        0.72,
        0.16
      ],
      "r": 0.032,
      "c": 4872041
    }
  ]
}); }
