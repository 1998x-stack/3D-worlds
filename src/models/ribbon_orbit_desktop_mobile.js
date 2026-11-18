import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Ribbon Orbit Desktop Mobile; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "decor.ribbon-orbit-desktop-mobile.001",
  "slug": "ribbon-orbit-desktop-mobile",
  "title": "Ribbon Orbit Desktop Mobile",
  "title_zh": "丝带轨道桌面风动摆饰",
  "summary": "Sculptural orbit ribbons, guy-wires and counterweights",
  "category": "decor",
  "tags": [
    "ribbon",
    "orbit",
    "desktop",
    "mobile",
    "decor",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.27,
    0.33,
    0.25
  ],
  "generator": "createRibbonOrbitDesktopMobile",
  "source_path": "src/models/ribbon_orbit_desktop_mobile.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/ribbon-orbit-desktop-mobile.webp",
  "accent": "#f0c58b",
  "provenance_note": "Original procedural scene based on functional design research. Channel: ebay; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createRibbonOrbitDesktopMobile() { return buildRecipe({
  "title": "Ribbon Orbit Desktop Mobile",
  "dimensions": [
    0.27,
    0.33,
    0.25
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "balance-base",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        1.22,
        0.17,
        1.2
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "mast",
      "from": [
        0,
        0.2,
        0
      ],
      "to": [
        0,
        1.98,
        0
      ],
      "r": 0.059,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "torus",
      "n": "orbital-ribbon-0",
      "p": [
        0,
        1.13,
        0
      ],
      "s": [
        0.71,
        0.71,
        0.11
      ],
      "c": 15779211,
      "finish": "metal",
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "guywire-0-0",
      "from": [
        0,
        1.13,
        0
      ],
      "to": [
        0.28,
        1.13,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-0-1",
      "from": [
        0,
        1.13,
        0
      ],
      "to": [
        0.0865,
        1.3963,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-0-2",
      "from": [
        0,
        1.13,
        0
      ],
      "to": [
        -0.2265,
        1.2946,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-0-3",
      "from": [
        0,
        1.13,
        0
      ],
      "to": [
        -0.2265,
        0.9654,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-0-4",
      "from": [
        0,
        1.13,
        0
      ],
      "to": [
        0.0865,
        0.8637,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "torus",
      "n": "orbital-ribbon-1",
      "p": [
        0,
        1.3,
        0
      ],
      "s": [
        0.88,
        0.88,
        0.11
      ],
      "c": 11112380,
      "finish": "metal",
      "rot": [
        0.24,
        0.17,
        0.15
      ]
    },
    {
      "t": "rod",
      "n": "guywire-1-0",
      "from": [
        0,
        1.3,
        0
      ],
      "to": [
        0.4,
        1.3,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-1-1",
      "from": [
        0,
        1.3,
        0
      ],
      "to": [
        0.1236,
        1.6804,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-1-2",
      "from": [
        0,
        1.3,
        0
      ],
      "to": [
        -0.3236,
        1.5351,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-1-3",
      "from": [
        0,
        1.3,
        0
      ],
      "to": [
        -0.3236,
        1.0649,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-1-4",
      "from": [
        0,
        1.3,
        0
      ],
      "to": [
        0.1236,
        0.9196,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "torus",
      "n": "orbital-ribbon-2",
      "p": [
        0,
        1.47,
        0
      ],
      "s": [
        1.05,
        1.05,
        0.11
      ],
      "c": 15779211,
      "finish": "metal",
      "rot": [
        0.48,
        0.34,
        0.3
      ]
    },
    {
      "t": "rod",
      "n": "guywire-2-0",
      "from": [
        0,
        1.47,
        0
      ],
      "to": [
        0.52,
        1.47,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-2-1",
      "from": [
        0,
        1.47,
        0
      ],
      "to": [
        0.1607,
        1.9645,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-2-2",
      "from": [
        0,
        1.47,
        0
      ],
      "to": [
        -0.4207,
        1.7756,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-2-3",
      "from": [
        0,
        1.47,
        0
      ],
      "to": [
        -0.4207,
        1.1644,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-2-4",
      "from": [
        0,
        1.47,
        0
      ],
      "to": [
        0.1607,
        0.9755,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "torus",
      "n": "orbital-ribbon-3",
      "p": [
        0,
        1.64,
        0
      ],
      "s": [
        1.22,
        1.22,
        0.11
      ],
      "c": 11112380,
      "finish": "metal",
      "rot": [
        0.72,
        0.51,
        0.44999999999999996
      ]
    },
    {
      "t": "rod",
      "n": "guywire-3-0",
      "from": [
        0,
        1.64,
        0
      ],
      "to": [
        0.64,
        1.64,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-3-1",
      "from": [
        0,
        1.64,
        0
      ],
      "to": [
        0.1978,
        2.2487,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-3-2",
      "from": [
        0,
        1.64,
        0
      ],
      "to": [
        -0.5178,
        2.0162,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-3-3",
      "from": [
        0,
        1.64,
        0
      ],
      "to": [
        -0.5178,
        1.2638,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-3-4",
      "from": [
        0,
        1.64,
        0
      ],
      "to": [
        0.1978,
        1.0313,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "torus",
      "n": "orbital-ribbon-4",
      "p": [
        0,
        1.81,
        0
      ],
      "s": [
        1.39,
        1.39,
        0.11
      ],
      "c": 15779211,
      "finish": "metal",
      "rot": [
        0.96,
        0.68,
        0.6
      ]
    },
    {
      "t": "rod",
      "n": "guywire-4-0",
      "from": [
        0,
        1.81,
        0
      ],
      "to": [
        0.76,
        1.81,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-4-1",
      "from": [
        0,
        1.81,
        0
      ],
      "to": [
        0.2349,
        2.5328,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-4-2",
      "from": [
        0,
        1.81,
        0
      ],
      "to": [
        -0.6149,
        2.2567,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-4-3",
      "from": [
        0,
        1.81,
        0
      ],
      "to": [
        -0.6149,
        1.3633,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "guywire-4-4",
      "from": [
        0,
        1.81,
        0
      ],
      "to": [
        0.2349,
        1.0872,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "counterweight-0",
      "p": [
        0.48,
        0.3,
        0
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "counterweight-1",
      "p": [
        0.4157,
        0.3,
        0.24
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "counterweight-2",
      "p": [
        0.24,
        0.3,
        0.4157
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "counterweight-3",
      "p": [
        0,
        0.3,
        0.48
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "counterweight-4",
      "p": [
        -0.24,
        0.3,
        0.4157
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "counterweight-5",
      "p": [
        -0.4157,
        0.3,
        0.24
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "counterweight-6",
      "p": [
        -0.48,
        0.3,
        0
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "counterweight-7",
      "p": [
        -0.4157,
        0.3,
        -0.24
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "counterweight-8",
      "p": [
        -0.24,
        0.3,
        -0.4157
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "counterweight-9",
      "p": [
        0,
        0.3,
        -0.48
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "counterweight-10",
      "p": [
        0.24,
        0.3,
        -0.4157
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "counterweight-11",
      "p": [
        0.4157,
        0.3,
        -0.24
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 15910009,
      "finish": "matte"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
