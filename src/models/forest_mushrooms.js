import { buildRecipe } from './recipe_engine.js';

/** Forest Mushrooms, original editable Three.js primitive composition. */
export function createForestMushrooms() {
  return buildRecipe({
  "title": "Forest Mushrooms",
  "dimensions": [
    0.82,
    0.46,
    0.69
  ],
  "parts": {
    "t": "cylinder",
    "n": "stem-0",
    "p": [
      0,
      0.12420000000000002,
      0
    ],
    "s": [
      0.11,
      0.24840000000000004,
      0.11
    ],
    "c": 15196112
  }
});
}
