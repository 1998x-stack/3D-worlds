import * as THREE from 'three';
import { box, mat, palette, sphere, limb, cylinder } from './primitives.js';

/** Low-poly neutral female-presenting mannequin; not a rigged character. */
export function createWoman() {
  const root = new THREE.Group();
  root.name = 'Female Character Study';
  const skin = mat(0xc99478);
  const coat = mat(palette.coral);
  const pants = mat(0x373d50);
  const shoe = mat(palette.sole);
  const hair = mat(0x312623);
  sphere(root, 'hair-back', [0.193, 0.29, 0.18], [0, 1.53, -0.045], hair);
  sphere(root, 'face', [0.157, 0.21, 0.155], [0, 1.58, 0.04], skin);
  sphere(root, 'hair-crown', [0.176, 0.085, 0.166], [0, 1.76, -0.015], hair);
  cylinder(root, 'neck', 0.07, 0.07, 0.13, [0, 1.35, 0], skin);
  box(root, 'jacket', [0.42, 0.50, 0.25], [0, 1.08, 0], coat);
  box(root, 'waist', [0.335, 0.13, 0.22], [0, 0.75, 0], pants);
  for (const side of [-1, 1]) {
    const x = side * 0.275;
    limb(root, `upper-arm-${side}`, [x * 0.85, 1.27, 0], [x * 1.12, 0.95, 0.025], 0.077, coat);
    limb(root, `forearm-${side}`, [x * 1.12, 0.95, 0.025], [x * 1.08, 0.72, 0.09], 0.062, skin);
    sphere(root, `hand-${side}`, [0.058, 0.08, 0.053], [x * 1.08, 0.68, 0.09], skin);
    const lx = side * 0.105;
    limb(root, `leg-${side}`, [lx, 0.73, 0], [lx * 1.08, 0.115, 0], 0.10, pants);
    box(root, `shoe-${side}`, [0.175, 0.10, 0.28], [lx * 1.08, 0.05, 0.08], shoe);
  }
  return root;
}
