import * as THREE from 'three';
import { box, mat, palette } from './primitives.js';

/** Original parameterized game prop; origin at floor, meters, +Y up. */
export function createTable() {
  const root = new THREE.Group();
  root.name = 'Oak Study Table';
  const top = mat(palette.oak, 0.62);
  const edges = mat(palette.oakDark, 0.75);
  const metal = mat(palette.steel, 0.35, 0.35);
  box(root, 'tabletop', [1.62, 0.09, 0.88], [0, 0.76, 0], top);
  box(root, 'edge-front', [1.54, 0.075, 0.055], [0, 0.69, 0.40], edges);
  box(root, 'edge-back', [1.54, 0.075, 0.055], [0, 0.69, -0.40], edges);
  for (const x of [-0.69, 0.69]) for (const z of [-0.34, 0.34]) {
    box(root, `leg-${x}-${z}`, [0.065, 0.71, 0.065], [x, 0.355, z], metal);
    box(root, `foot-${x}-${z}`, [0.075, 0.015, 0.075], [x, 0.008, z], edges);
  }
  box(root, 'side-brace', [1.4, 0.045, 0.045], [0, 0.17, -0.34], metal);
  return root;
}
