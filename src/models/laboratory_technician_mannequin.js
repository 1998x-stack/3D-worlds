import { buildRecipe } from './recipe_engine.js';
/** Laboratory Technician Mannequin — original source-editable scene model; Y-up, meters. */
export const assetMeta = {
  "id": "characters.laboratory-technician-mannequin.001",
  "slug": "laboratory-technician-mannequin",
  "title": "Laboratory Technician Mannequin",
  "title_zh": "实验室技术员原型",
  "summary": "Unrigged scientist wearing goggles, lab coat, nitrile gloves and microscope clipboard",
  "category": "characters",
  "tags": [
    "scientist",
    "lab",
    "character"
  ],
  "dimensions_m": [
    0.95,
    1.92,
    0.68
  ],
  "generator": "createLaboratoryTechnicianMannequin",
  "source_path": "src/models/laboratory_technician_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/laboratory-technician-mannequin.webp"
};
export function createLaboratoryTechnicianMannequin() { return buildRecipe({
  "title": "Laboratory Technician Mannequin",
  "dimensions": [
    0.95,
    1.92,
    0.68
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "lab-coat",
      "p": [
        0,
        1.11,
        0
      ],
      "s": [
        0.61,
        0.83,
        0.44
      ],
      "c": 15263196
    },
    {
      "t": "sphere",
      "n": "head",
      "p": [
        0,
        1.69,
        0
      ],
      "s": [
        0.33,
        0.31,
        0.29
      ],
      "c": 12885378
    },
    {
      "t": "box",
      "n": "goggle-strap",
      "p": [
        0,
        1.71,
        0.31
      ],
      "s": [
        0.48,
        0.11,
        0.036
      ],
      "c": 3357765
    },
    {
      "t": "box",
      "n": "safety-lens",
      "p": [
        0,
        1.72,
        0.34
      ],
      "s": [
        0.37,
        0.09,
        0.022
      ],
      "c": 9813962
    },
    {
      "t": "box",
      "n": "coat-collar",
      "p": [
        0,
        1.47,
        0.235
      ],
      "s": [
        0.34,
        0.14,
        0.036
      ],
      "c": 12110280
    },
    {
      "t": "rod",
      "n": "coat-sleeve-0",
      "from": [
        -0.37,
        1.33,
        0
      ],
      "to": [
        -0.45,
        0.91,
        0.03
      ],
      "r": 0.105,
      "c": 15263196
    },
    {
      "t": "sphere",
      "n": "nitrile-glove-0",
      "p": [
        -0.46,
        0.84,
        0.035
      ],
      "s": [
        0.12,
        0.11,
        0.11
      ],
      "c": 8367541
    },
    {
      "t": "rod",
      "n": "trouser-0",
      "from": [
        -0.18,
        0.82,
        0
      ],
      "to": [
        -0.19,
        0.2,
        0
      ],
      "r": 0.14,
      "c": 5407899
    },
    {
      "t": "box",
      "n": "shoe-0",
      "p": [
        -0.19,
        0.11,
        0.12
      ],
      "s": [
        0.26,
        0.21,
        0.32
      ],
      "c": 3357765
    },
    {
      "t": "rod",
      "n": "coat-sleeve-1",
      "from": [
        0.37,
        1.33,
        0
      ],
      "to": [
        0.45,
        0.91,
        0.03
      ],
      "r": 0.105,
      "c": 15263196
    },
    {
      "t": "sphere",
      "n": "nitrile-glove-1",
      "p": [
        0.46,
        0.84,
        0.035
      ],
      "s": [
        0.12,
        0.11,
        0.11
      ],
      "c": 8367541
    },
    {
      "t": "rod",
      "n": "trouser-1",
      "from": [
        0.18,
        0.82,
        0
      ],
      "to": [
        0.19,
        0.2,
        0
      ],
      "r": 0.14,
      "c": 5407899
    },
    {
      "t": "box",
      "n": "shoe-1",
      "p": [
        0.19,
        0.11,
        0.12
      ],
      "s": [
        0.26,
        0.21,
        0.32
      ],
      "c": 3357765
    },
    {
      "t": "box",
      "n": "clipboard",
      "p": [
        0.46,
        0.94,
        0.2
      ],
      "s": [
        0.04,
        0.32,
        0.26
      ],
      "c": 9989443
    },
    {
      "t": "sphere",
      "n": "coat-button-0",
      "p": [
        0.06,
        1.34,
        0.24
      ],
      "s": [
        0.019,
        0.019,
        0.011
      ],
      "c": 9149339
    },
    {
      "t": "sphere",
      "n": "coat-button-1",
      "p": [
        0.06,
        1.1900000000000002,
        0.24
      ],
      "s": [
        0.019,
        0.019,
        0.011
      ],
      "c": 9149339
    },
    {
      "t": "sphere",
      "n": "coat-button-2",
      "p": [
        0.06,
        1.04,
        0.24
      ],
      "s": [
        0.019,
        0.019,
        0.011
      ],
      "c": 9149339
    },
    {
      "t": "sphere",
      "n": "coat-button-3",
      "p": [
        0.06,
        0.8900000000000001,
        0.24
      ],
      "s": [
        0.019,
        0.019,
        0.011
      ],
      "c": 9149339
    },
    {
      "t": "box",
      "n": "id-badge",
      "p": [
        -0.2,
        1.38,
        0.25
      ],
      "s": [
        0.12,
        0.14,
        0.016
      ],
      "c": 7446427
    }
  ]
}); }
