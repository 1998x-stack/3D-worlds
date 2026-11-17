import { buildRecipe } from './recipe_engine.js';
/** Sculpted Ceramic Table Lamp: individually authored procedural geometry. */
export const assetMeta = {
  "id": "decor.sculpted-ceramic-table-lamp.001",
  "slug": "sculpted-ceramic-table-lamp",
  "title": "Sculpted Ceramic Table Lamp",
  "title_zh": "雕塑陶瓷台灯",
  "summary": "Ceramic ceramic-tiered lamp with shade, finial, cord and brass switch.",
  "category": "decor",
  "tags": [
    "lamp",
    "table",
    "ceramic",
    "lighting"
  ],
  "dimensions_m": [
    0.43,
    0.71,
    0.44
  ],
  "generator": "createSculptedCeramicTableLamp",
  "source_path": "src/models/sculpted_ceramic_table_lamp.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/sculpted-ceramic-table-lamp.webp"
};
export function createSculptedCeramicTableLamp() {
 return buildRecipe({
  "title": "Sculpted Ceramic Table Lamp",
  "dimensions": [
    0.43,
    0.71,
    0.44
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "rounded-foot",
      "p": [
        0,
        0.07,
        0
      ],
      "s": [
        0.31,
        0.14,
        0.31
      ],
      "c": 12103327
    },
    {
      "t": "sphere",
      "n": "sculpted-base",
      "p": [
        0,
        0.25,
        0
      ],
      "s": [
        0.33,
        0.33,
        0.29
      ],
      "c": 8495521
    },
    {
      "t": "cylinder",
      "n": "neck",
      "p": [
        0,
        0.44,
        0
      ],
      "s": [
        0.11,
        0.12,
        0.11
      ],
      "c": 12555358
    },
    {
      "t": "cone",
      "n": "fabric-shade",
      "p": [
        0,
        0.56,
        0
      ],
      "s": [
        0.42,
        0.29,
        0.43
      ],
      "c": 14272685,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "shade-lower-ring",
      "p": [
        0,
        0.43,
        0
      ],
      "s": [
        0.43,
        0.02,
        0.43
      ],
      "c": 10390133
    },
    {
      "t": "cylinder",
      "n": "shade-upper-ring",
      "p": [
        0,
        0.69,
        0
      ],
      "s": [
        0.2,
        0.025,
        0.2
      ],
      "c": 10718582
    },
    {
      "t": "sphere",
      "n": "top-finial",
      "p": [
        0,
        0.72,
        0
      ],
      "s": [
        0.058,
        0.045,
        0.058
      ],
      "c": 12555358
    },
    {
      "t": "rod",
      "n": "power-cord",
      "from": [
        0.1,
        0.08,
        0
      ],
      "to": [
        0.27,
        0.02,
        0.24
      ],
      "r": 0.013,
      "c": 3160900
    },
    {
      "t": "sphere",
      "n": "rotary-switch",
      "p": [
        0.13,
        0.37,
        0.035
      ],
      "s": [
        0.055,
        0.035,
        0.055
      ],
      "c": 12555358
    }
  ]
});
}
