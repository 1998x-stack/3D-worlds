import { buildRecipe } from './recipe_engine.js';

/** Solar Parking Meter: source-editable 3D Worlds asset, Y-up, meters. */
export function createSolarParkingMeter() {
  return buildRecipe({
  "title": "Solar Parking Meter",
  "dimensions": [
    0.38,
    1.56,
    0.34
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "pole",
      "p": [
        0,
        0.65,
        0
      ],
      "s": [
        0.09,
        1.3,
        0.09
      ],
      "c": 8623002
    },
    {
      "t": "cylinder",
      "n": "ground-base",
      "p": [
        0,
        0.06,
        0
      ],
      "s": [
        0.28,
        0.12,
        0.28
      ],
      "c": 3423557
    },
    {
      "t": "box",
      "n": "ticket-console",
      "p": [
        0,
        1.28,
        0.035
      ],
      "s": [
        0.36,
        0.44,
        0.29
      ],
      "c": 6127242
    },
    {
      "t": "box",
      "n": "display",
      "p": [
        0,
        1.35,
        0.196
      ],
      "s": [
        0.25,
        0.14,
        0.018
      ],
      "c": 2837852
    },
    {
      "t": "box",
      "n": "card-reader",
      "p": [
        0.03,
        1.21,
        0.195
      ],
      "s": [
        0.13,
        0.035,
        0.018
      ],
      "c": 3423557
    },
    {
      "t": "sphere",
      "n": "indicator",
      "p": [
        -0.11,
        1.21,
        0.192
      ],
      "s": [
        0.025,
        0.025,
        0.012
      ],
      "c": 9028260
    },
    {
      "t": "box",
      "n": "solar-cap",
      "p": [
        0,
        1.52,
        0
      ],
      "s": [
        0.36,
        0.035,
        0.34
      ],
      "c": 2773860
    },
    {
      "t": "box",
      "n": "grid-line-0",
      "p": [
        -0.09,
        1.543,
        0.035
      ],
      "s": [
        0.008,
        0.004,
        0.25
      ],
      "c": 9480622
    },
    {
      "t": "box",
      "n": "grid-line-1",
      "p": [
        0.09,
        1.543,
        0.035
      ],
      "s": [
        0.008,
        0.004,
        0.25
      ],
      "c": 9480622
    },
    {
      "t": "box",
      "n": "service-door",
      "p": [
        0,
        0.83,
        0.08
      ],
      "s": [
        0.17,
        0.16,
        0.015
      ],
      "c": 11779514
    }
  ]
});
}
