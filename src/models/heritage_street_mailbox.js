import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "urban.heritage-street-mailbox.001",
  "slug": "heritage-street-mailbox",
  "title": "Heritage Street Mailbox",
  "title_zh": "复古街头邮筒",
  "summary": "Red public mailbox with letter aperture, postal emblem and service door.",
  "category": "urban",
  "tags": [
    "mail",
    "postbox",
    "urban"
  ],
  "dimensions_m": [
    0.65,
    1.55,
    0.59
  ],
  "generator": "createHeritageStreetMailbox",
  "source_path": "src/models/heritage_street_mailbox.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/heritage-street-mailbox.webp"
};
export function createHeritageStreetMailbox() {
 return buildRecipe({
  "title": "Heritage Street Mailbox",
  "dimensions": [
    0.65,
    1.55,
    0.59
  ],
  "parts": [
    {
      "t": "box",
      "n": "plinth",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        0.62,
        0.16,
        0.56
      ],
      "c": 3161155
    },
    {
      "t": "box",
      "n": "main-body",
      "p": [
        0,
        0.77,
        0
      ],
      "s": [
        0.57,
        1.23,
        0.55
      ],
      "c": 11029326
    },
    {
      "t": "sphere",
      "n": "round-top",
      "p": [
        0,
        1.41,
        0
      ],
      "s": [
        0.57,
        0.27,
        0.55
      ],
      "c": 11029326
    },
    {
      "t": "box",
      "n": "letter-slot",
      "p": [
        0,
        1.23,
        0.29
      ],
      "s": [
        0.4,
        0.053,
        0.015
      ],
      "c": 3161155
    },
    {
      "t": "box",
      "n": "postal-label",
      "p": [
        0,
        1.1,
        0.298
      ],
      "s": [
        0.42,
        0.15,
        0.015
      ],
      "c": 15591901
    },
    {
      "t": "box",
      "n": "service-door",
      "p": [
        0,
        0.65,
        0.295
      ],
      "s": [
        0.46,
        0.58,
        0.015
      ],
      "c": 9650244
    },
    {
      "t": "box",
      "n": "door-trim",
      "p": [
        0,
        0.65,
        0.31
      ],
      "s": [
        0.4,
        0.52,
        0.012
      ],
      "c": 12150882
    },
    {
      "t": "cylinder",
      "n": "service-lock",
      "p": [
        0.14,
        0.65,
        0.317
      ],
      "s": [
        0.06,
        0.018,
        0.06
      ],
      "c": 12426080,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "bottom-trim",
      "p": [
        0,
        0.14,
        0
      ],
      "s": [
        0.63,
        0.04,
        0.56
      ],
      "c": 12426080
    }
  ]
});
}
