import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Smart Reverse Vending Recycling Kiosk / 智能回收返利终端. */
export const assetMeta = {
  "id": "urban.smart-reverse-vending-recycling-kiosk.001",
  "slug": "smart-reverse-vending-recycling-kiosk",
  "title": "Smart Reverse Vending Recycling Kiosk",
  "title_zh": "智能回收返利终端",
  "summary": "Public bottle recycling kiosk with insertion port, digital reward screen and collection bins",
  "category": "urban",
  "tags": [
    "smart",
    "reverse",
    "vending",
    "recycling",
    "kiosk",
    "urban",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.72,
    2.45,
    1.2
  ],
  "generator": "createSmartReverseVendingRecyclingKiosk",
  "source_path": "src/models/smart_reverse_vending_recycling_kiosk.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/smart-reverse-vending-recycling-kiosk.webp",
  "accent": "#4a5769"
};
export function createSmartReverseVendingRecyclingKiosk() { return buildRecipe({
  "title": "Smart Reverse Vending Recycling Kiosk",
  "dimensions": [
    1.72,
    2.45,
    1.2
  ],
  "parts": [
    {
      "t": "box",
      "n": "smart-reverse-vending-recycling-kiosk-public-reward-recycling-kiosk",
      "p": [
        0,
        1.17,
        0
      ],
      "s": [
        1.46,
        2.19,
        0.9
      ],
      "c": 7178134
    },
    {
      "t": "box",
      "n": "smart-reverse-vending-recycling-kiosk-circular-recycling-bottle-slot",
      "p": [
        -0.36,
        1.65,
        0.48
      ],
      "s": [
        0.44,
        0.29,
        0.05
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "smart-reverse-vending-recycling-kiosk-digital-recycling-incentive-screen",
      "p": [
        0.38,
        1.73,
        0.49
      ],
      "s": [
        0.52,
        0.42,
        0.026
      ],
      "c": 14202734
    },
    {
      "t": "box",
      "n": "smart-reverse-vending-recycling-kiosk-sorted-material-drawer-0",
      "p": [
        -0.48,
        0.69,
        0.47
      ],
      "s": [
        0.39,
        0.78,
        0.045
      ],
      "c": 11190439
    },
    {
      "t": "sphere",
      "n": "smart-reverse-vending-recycling-kiosk-material-reward-icon-0",
      "p": [
        -0.48,
        1.18,
        0.5
      ],
      "s": [
        0.12,
        0.09,
        0.023
      ],
      "c": 14202734
    },
    {
      "t": "box",
      "n": "smart-reverse-vending-recycling-kiosk-sorted-material-drawer-1",
      "p": [
        0,
        0.69,
        0.47
      ],
      "s": [
        0.39,
        0.78,
        0.045
      ],
      "c": 11190439
    },
    {
      "t": "sphere",
      "n": "smart-reverse-vending-recycling-kiosk-material-reward-icon-1",
      "p": [
        0,
        1.18,
        0.5
      ],
      "s": [
        0.12,
        0.09,
        0.023
      ],
      "c": 14202734
    },
    {
      "t": "box",
      "n": "smart-reverse-vending-recycling-kiosk-sorted-material-drawer-2",
      "p": [
        0.48,
        0.69,
        0.47
      ],
      "s": [
        0.39,
        0.78,
        0.045
      ],
      "c": 11190439
    },
    {
      "t": "sphere",
      "n": "smart-reverse-vending-recycling-kiosk-material-reward-icon-2",
      "p": [
        0.48,
        1.18,
        0.5
      ],
      "s": [
        0.12,
        0.09,
        0.023
      ],
      "c": 14202734
    },
    {
      "t": "box",
      "n": "smart-reverse-vending-recycling-kiosk-recycle-progress-led-0",
      "p": [
        -0.27,
        2.12,
        0.49
      ],
      "s": [
        0.039,
        0.04,
        0.014
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "smart-reverse-vending-recycling-kiosk-recycle-progress-led-1",
      "p": [
        -0.19,
        2.12,
        0.49
      ],
      "s": [
        0.039,
        0.04,
        0.014
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "smart-reverse-vending-recycling-kiosk-recycle-progress-led-2",
      "p": [
        -0.11000000000000001,
        2.12,
        0.49
      ],
      "s": [
        0.039,
        0.04,
        0.014
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "smart-reverse-vending-recycling-kiosk-recycle-progress-led-3",
      "p": [
        -0.030000000000000027,
        2.12,
        0.49
      ],
      "s": [
        0.039,
        0.04,
        0.014
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "smart-reverse-vending-recycling-kiosk-recycle-progress-led-4",
      "p": [
        0.04999999999999999,
        2.12,
        0.49
      ],
      "s": [
        0.039,
        0.04,
        0.014
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "smart-reverse-vending-recycling-kiosk-recycle-progress-led-5",
      "p": [
        0.13,
        2.12,
        0.49
      ],
      "s": [
        0.039,
        0.04,
        0.014
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "smart-reverse-vending-recycling-kiosk-recycle-progress-led-6",
      "p": [
        0.20999999999999996,
        2.12,
        0.49
      ],
      "s": [
        0.039,
        0.04,
        0.014
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "smart-reverse-vending-recycling-kiosk-recycle-progress-led-7",
      "p": [
        0.29000000000000004,
        2.12,
        0.49
      ],
      "s": [
        0.039,
        0.04,
        0.014
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "smart-reverse-vending-recycling-kiosk-container-reuse-instruction-header",
      "p": [
        0,
        2.28,
        0.49
      ],
      "s": [
        1.09,
        0.16,
        0.029
      ],
      "c": 14202734
    }
  ]
}); }
