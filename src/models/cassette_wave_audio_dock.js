import { buildMarketV15 } from './market_v15_builder.js';
/** V1.5 original visual design: Cassette Wave Audio Dock. 音频旋钮、磁带窗、栅格扬声口和托架. Not physically print-tested. */
export const assetMeta = {
  "id": "electronics.cassette-wave-audio-dock.001",
  "slug": "cassette-wave-audio-dock",
  "title": "Cassette Wave Audio Dock",
  "title_zh": "磁带波形桌面音频座",
  "summary": "Retro-futurist audio desk cradle with cassette-like front window and radial speaker grille",
  "category": "electronics",
  "tags": [
    "cassette",
    "wave",
    "audio",
    "dock",
    "electronics",
    "original",
    "v15",
    "market-inspired"
  ],
  "dimensions_m": [
    0.25,
    0.22,
    0.16
  ],
  "generator": "createCassetteWaveAudioDock",
  "source_path": "src/models/cassette_wave_audio_dock.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.5",
  "preview_path": "public/thumbs/cassette-wave-audio-dock.webp",
  "accent": "#d9b485",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createCassetteWaveAudioDock() {
  return buildMarketV15({
  "title": "Cassette Wave Audio Dock",
  "dimensions": [
    0.25,
    0.22,
    0.16
  ],
  "accent": "#d9b485",
  "body": [
    [
      "rounded-box",
      "console",
      [
        0,
        0.72,
        0
      ],
      [
        1.8,
        1.1,
        0.84
      ],
      "primary",
      "matte",
      null
    ],
    [
      "box",
      "cassette-window",
      [
        -0.32,
        0.76,
        0.47
      ],
      [
        0.88,
        0.55,
        0.08
      ],
      "dark",
      "matte",
      null
    ],
    [
      "cylinder",
      "speaker",
      [
        0.59,
        0.79,
        0.47
      ],
      [
        0.52,
        0.58,
        0.08
      ],
      "secondary",
      "metal",
      [
        1.5707963267948966,
        0,
        0
      ]
    ],
    [
      "box",
      "foot",
      [
        0,
        0.12,
        0
      ],
      [
        1.9,
        0.2,
        1.04
      ],
      "wood",
      "matte",
      null
    ],
    [
      "box",
      "dock-lip",
      [
        0,
        1.38,
        0.24
      ],
      [
        1.1,
        0.11,
        0.34
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "cylinder",
      "volume-knob",
      [
        -0.63,
        0.27,
        0.49
      ],
      [
        0.24,
        0.13,
        0.24
      ],
      "metal",
      "metal",
      [
        1.5707963267948966,
        0,
        0
      ]
    ],
    [
      "box",
      "display-glass",
      [
        -0.32,
        0.83,
        0.52
      ],
      [
        0.72,
        0.32,
        0.021
      ],
      "light",
      "glass",
      null
    ]
  ],
  "patterns": [
    {
      "k": "radial",
      "n": "speaker-spoke",
      "t": "box",
      "count": 12,
      "o": [
        0.59,
        0.79,
        0.54
      ],
      "r": 0.22,
      "s": [
        0.05,
        0.32,
        0.025
      ],
      "c": "dark",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "cassette-mark",
      "t": "box",
      "count": 6,
      "o": [
        -0.67,
        0.57,
        0.55
      ],
      "d": [
        0.13,
        0,
        0
      ],
      "s": [
        0.07,
        0.04,
        0.025
      ],
      "c": "contrast",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "status-dot",
      "t": "sphere",
      "count": 5,
      "o": [
        -0.55,
        1.33,
        0.38
      ],
      "d": [
        0.28,
        0,
        0
      ],
      "s": [
        0.045,
        0.05,
        0.045
      ],
      "c": "light",
      "f": "matte"
    }
  ]
});
}
