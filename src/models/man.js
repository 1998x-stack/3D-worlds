import * as THREE from 'three';
import { box, mat, palette, sphere, limb, cylinder } from './primitives.js';

/** Low-poly neutral male-presenting mannequin; not a rigged character. */
export function createMan() {
  const root = new THREE.Group();
  root.name = 'Male Character Study';
  const skin = mat(palette.skin);
  const shirt = mat(0x557b73);
  const trousers = mat(palette.denim);
  const hair = mat(palette.hair);
  const shoe = mat(palette.sole);
  sphere(root, 'head', [0.17, 0.22, 0.16], [0, 1.57, 0], skin);
  sphere(root, 'hair', [0.174, 0.09, 0.17], [0, 1.75, -0.015], hair);
  cylinder(root, 'neck', 0.075, 0.075, 0.13, [0, 1.34, 0], skin);
  box(root, 'upper-body', [0.49, 0.55, 0.255], [0, 1.07, 0], shirt);
  box(root, 'hips', [0.385, 0.16, 0.24], [0, 0.74, 0], trousers);
  for (const side of [-1, 1]) {
    const x = side * 0.31;
    limb(root, `upper-arm-${side}`, [x * .9, 1.28, 0], [x * 1.1, 0.96, 0.02], 0.092, shirt);
    limb(root, `forearm-${side}`, [x * 1.1, 0.96, 0.02], [x, 0.67, 0.07], 0.07, skin);
    sphere(root, `hand-${side}`, [0.068, 0.095, 0.058], [x, 0.63, 0.07], skin);
    const lx = side * 0.115;
    limb(root, `leg-${side}`, [lx, 0.72, 0], [lx * 1.1, 0.11, 0], 0.115, trousers);
    box(root, `shoe-${side}`, [0.19, 0.10, 0.30], [lx * 1.1, 0.05, 0.08], shoe);
  }
  return root;
}
