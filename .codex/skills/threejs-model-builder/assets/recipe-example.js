/**
 * Demonstration-only module. Copy into src/models/example_supply_crate.js,
 * then register the asset in catalog/models.json with the matching generator.
 * Relative recipe_engine.js import resolves only after moving beside it.
 */
import { buildRecipe } from './recipe_engine.js';

export function createExampleSupplyCrate() {
  return buildRecipe({
    title: 'Example Supply Crate',
    dimensions: [0.8, 0.6, 0.5], // [W, H, D] meters
    parts: [
      { t: 'box', n: 'crate-body', p: [0, 0.3, 0], s: [0.76, 0.54, 0.46], c: 0x96704e },
      { t: 'box', n: 'crate-lid', p: [0, 0.59, 0], s: [0.80, 0.06, 0.50], c: 0x6b4932 },
      { t: 'box', n: 'front-band', p: [0, 0.31, 0.25], s: [0.74, 0.06, 0.03], c: 0x424b53 },
      { t: 'box', n: 'left-stud', p: [-0.28, 0.31, 0.275], s: [0.07, 0.07, 0.015], c: 0xc9b68c },
      { t: 'box', n: 'right-stud', p: [0.28, 0.31, 0.275], s: [0.07, 0.07, 0.015], c: 0xc9b68c },
      { t: 'rod', n: 'carry-handle', from: [-0.12, 0.64, 0], to: [0.12, 0.64, 0], r: 0.025, c: 0x424b53 }
    ]
  });
}

