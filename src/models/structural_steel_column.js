import { buildRecipe } from './recipe_engine.js';

/** Structural Steel Column: original Three.js assembly, stable Y-up and meter coordinates. */
export function createStructuralSteelColumn() {
  return buildRecipe({
  "title": "Structural Steel Column",
  "dimensions": [
    0.54,
    3.18,
    0.51
  ],
  "parts": [
    {
      "t": "box",
      "n": "web",
      "p": [
        0,
        1.61,
        0
      ],
      "s": [
        0.12,
        3.12,
        0.44
      ],
      "c": 9411999
    },
    {
      "t": "box",
      "n": "flange-left",
      "p": [
        -0.2,
        1.61,
        0
      ],
      "s": [
        0.15,
        3.12,
        0.49
      ],
      "c": 6781829
    },
    {
      "t": "box",
      "n": "flange-right",
      "p": [
        0.2,
        1.61,
        0
      ],
      "s": [
        0.15,
        3.12,
        0.49
      ],
      "c": 6781829
    },
    {
      "t": "box",
      "n": "base-plate",
      "p": [
        0,
        0.07,
        0
      ],
      "s": [
        0.54,
        0.14,
        0.51
      ],
      "c": 6057592
    },
    {
      "t": "box",
      "n": "top-plate",
      "p": [
        0,
        3.13,
        0
      ],
      "s": [
        0.54,
        0.1,
        0.51
      ],
      "c": 6057592
    },
    {
      "t": "cylinder",
      "n": "anchor-bolt-0-0",
      "p": [
        -0.17,
        0.14,
        -0.15
      ],
      "s": [
        0.055,
        0.045,
        0.055
      ],
      "c": 3159866
    },
    {
      "t": "cylinder",
      "n": "anchor-bolt-0-1",
      "p": [
        -0.17,
        0.14,
        0.15
      ],
      "s": [
        0.055,
        0.045,
        0.055
      ],
      "c": 3159866
    },
    {
      "t": "cylinder",
      "n": "anchor-bolt-1-0",
      "p": [
        0.17,
        0.14,
        -0.15
      ],
      "s": [
        0.055,
        0.045,
        0.055
      ],
      "c": 3159866
    },
    {
      "t": "cylinder",
      "n": "anchor-bolt-1-1",
      "p": [
        0.17,
        0.14,
        0.15
      ],
      "s": [
        0.055,
        0.045,
        0.055
      ],
      "c": 3159866
    },
    {
      "t": "box",
      "n": "weld-gusset-0",
      "p": [
        0,
        0.4,
        0.25
      ],
      "s": [
        0.3,
        0.085,
        0.045
      ],
      "c": 9084839
    },
    {
      "t": "box",
      "n": "weld-gusset-1",
      "p": [
        0,
        1.4,
        0.25
      ],
      "s": [
        0.3,
        0.085,
        0.045
      ],
      "c": 9084839
    },
    {
      "t": "box",
      "n": "weld-gusset-2",
      "p": [
        0,
        2.4,
        0.25
      ],
      "s": [
        0.3,
        0.085,
        0.045
      ],
      "c": 9084839
    }
  ]
});
}
