import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Archive Librarian Mannequin / 档案馆管理员人物. */
export const assetMeta = {
  "id": "characters.archive-librarian-mannequin.001",
  "slug": "archive-librarian-mannequin",
  "title": "Archive Librarian Mannequin",
  "title_zh": "档案馆管理员人物",
  "summary": "Unrigged archivist with document sleeves, ID lanyard and catalog tablet",
  "category": "characters",
  "tags": [
    "archive",
    "librarian",
    "mannequin",
    "characters",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1,
    1.86,
    0.78
  ],
  "generator": "createArchiveLibrarianMannequin",
  "source_path": "src/models/archive_librarian_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/archive-librarian-mannequin.webp",
  "accent": "#344b61"
};
export function createArchiveLibrarianMannequin() { return buildRecipe({
  "title": "Archive Librarian Mannequin",
  "dimensions": [
    1,
    1.86,
    0.78
  ],
  "parts": [
    {
      "t": "box",
      "n": "uniform-torso",
      "p": [
        0,
        1.2,
        0
      ],
      "s": [
        0.48,
        0.68,
        0.31
      ],
      "c": 4747146
    },
    {
      "t": "sphere",
      "n": "human-face",
      "p": [
        0,
        1.78,
        0
      ],
      "s": [
        0.21,
        0.24,
        0.2
      ],
      "c": 3427169
    },
    {
      "t": "cylinder",
      "n": "neck-joint",
      "p": [
        0,
        1.56,
        0
      ],
      "s": [
        0.12,
        0.15,
        0.12
      ],
      "c": 3427169
    },
    {
      "t": "rod",
      "n": "upper-arm--1",
      "from": [
        -0.29,
        1.42,
        0
      ],
      "to": [
        -0.36,
        1,
        0.09
      ],
      "r": 0.085,
      "c": 4747146
    },
    {
      "t": "rod",
      "n": "forearm--1",
      "from": [
        -0.36,
        1,
        0.09
      ],
      "to": [
        -0.4,
        0.77,
        0.3
      ],
      "r": 0.065,
      "c": 3427169
    },
    {
      "t": "rod",
      "n": "trouser-thigh--1",
      "from": [
        -0.14,
        0.92,
        0
      ],
      "to": [
        -0.16,
        0.5,
        0.05
      ],
      "r": 0.106,
      "c": 15778718
    },
    {
      "t": "rod",
      "n": "shin--1",
      "from": [
        -0.16,
        0.5,
        0.05
      ],
      "to": [
        -0.18,
        0.13,
        0.1
      ],
      "r": 0.082,
      "c": 15778718
    },
    {
      "t": "box",
      "n": "work-boot--1",
      "p": [
        -0.18,
        0.075,
        0.15
      ],
      "s": [
        0.22,
        0.12,
        0.33
      ],
      "c": 12704211
    },
    {
      "t": "rod",
      "n": "upper-arm-1",
      "from": [
        0.29,
        1.42,
        0
      ],
      "to": [
        0.36,
        1,
        0.09
      ],
      "r": 0.085,
      "c": 4747146
    },
    {
      "t": "rod",
      "n": "forearm-1",
      "from": [
        0.36,
        1,
        0.09
      ],
      "to": [
        0.4,
        0.77,
        0.3
      ],
      "r": 0.065,
      "c": 3427169
    },
    {
      "t": "rod",
      "n": "trouser-thigh-1",
      "from": [
        0.14,
        0.92,
        0
      ],
      "to": [
        0.16,
        0.5,
        0.05
      ],
      "r": 0.106,
      "c": 15778718
    },
    {
      "t": "rod",
      "n": "shin-1",
      "from": [
        0.16,
        0.5,
        0.05
      ],
      "to": [
        0.18,
        0.13,
        0.1
      ],
      "r": 0.082,
      "c": 15778718
    },
    {
      "t": "box",
      "n": "work-boot-1",
      "p": [
        0.18,
        0.075,
        0.15
      ],
      "s": [
        0.22,
        0.12,
        0.33
      ],
      "c": 12704211
    },
    {
      "t": "box",
      "n": "work-identity-patch",
      "p": [
        0.13,
        1.32,
        0.18
      ],
      "s": [
        0.15,
        0.1,
        0.026
      ],
      "c": 3427169
    },
    {
      "t": "box",
      "n": "archive-lanyard",
      "p": [
        0,
        1.35,
        0.2
      ],
      "s": [
        0.1,
        0.24,
        0.02
      ],
      "c": 3427169
    },
    {
      "t": "box",
      "n": "inventory-catalog-tablet",
      "p": [
        0.48,
        0.93,
        0.32
      ],
      "s": [
        0.29,
        0.29,
        0.034
      ],
      "c": 15778718
    },
    {
      "t": "box",
      "n": "document-sleeve-0",
      "p": [
        -0.42,
        0.88,
        0.25
      ],
      "s": [
        0.39,
        0.024,
        0.24
      ],
      "c": 12704211
    },
    {
      "t": "box",
      "n": "document-sleeve-1",
      "p": [
        -0.42,
        0.915,
        0.25
      ],
      "s": [
        0.39,
        0.024,
        0.24
      ],
      "c": 12704211
    },
    {
      "t": "box",
      "n": "document-sleeve-2",
      "p": [
        -0.42,
        0.95,
        0.25
      ],
      "s": [
        0.39,
        0.024,
        0.24
      ],
      "c": 12704211
    },
    {
      "t": "box",
      "n": "document-sleeve-3",
      "p": [
        -0.42,
        0.985,
        0.25
      ],
      "s": [
        0.39,
        0.024,
        0.24
      ],
      "c": 12704211
    },
    {
      "t": "box",
      "n": "document-sleeve-4",
      "p": [
        -0.42,
        1.02,
        0.25
      ],
      "s": [
        0.39,
        0.024,
        0.24
      ],
      "c": 12704211
    },
    {
      "t": "box",
      "n": "document-sleeve-5",
      "p": [
        -0.42,
        1.055,
        0.25
      ],
      "s": [
        0.39,
        0.024,
        0.24
      ],
      "c": 12704211
    },
    {
      "t": "box",
      "n": "librarian-scarf",
      "p": [
        0,
        1.48,
        0.14
      ],
      "s": [
        0.39,
        0.11,
        0.12
      ],
      "c": 3427169
    },
    {
      "t": "box",
      "n": "catalog-status-light-0",
      "p": [
        0.36,
        1,
        0.341
      ],
      "s": [
        0.034,
        0.021,
        0.011
      ],
      "c": 3427169
    },
    {
      "t": "box",
      "n": "catalog-status-light-1",
      "p": [
        0.425,
        1,
        0.341
      ],
      "s": [
        0.034,
        0.021,
        0.011
      ],
      "c": 3427169
    },
    {
      "t": "box",
      "n": "catalog-status-light-2",
      "p": [
        0.49,
        1,
        0.341
      ],
      "s": [
        0.034,
        0.021,
        0.011
      ],
      "c": 3427169
    },
    {
      "t": "box",
      "n": "catalog-status-light-3",
      "p": [
        0.5549999999999999,
        1,
        0.341
      ],
      "s": [
        0.034,
        0.021,
        0.011
      ],
      "c": 3427169
    }
  ]
}); }
