import * as THREE from 'three';
import { box, mat, palette, sphere, cylinder } from './primitives.js';

/** Stylized toilet. Meshes intentionally simple and editable. */
export function createToilet() {
  const root = new THREE.Group();
  root.name = 'Ceramic Toilet';
  const ceramic = mat(palette.ceramic, 0.23);
  const lid = mat(0xfafafa, 0.3);
  const hardware = mat(0x9ca8af, 0.24, 0.7);
  cylinder(root, 'pedestal', 0.19, 0.23, 0.39, [0, 0.195, 0.065], ceramic, 32);
  sphere(root, 'bowl', [0.36, 0.20, 0.41], [0, 0.45, 0.14], ceramic);
  sphere(root, 'inner-shadow', [0.26, 0.027, 0.30], [0, 0.628, 0.17], mat(0x96b4ba, 0.16));
  sphere(root, 'seat-ring', [0.325, 0.052, 0.365], [0, 0.655, 0.13], lid);
  sphere(root, 'seat-opening', [0.22, 0.018, 0.26], [0, 0.706, 0.16], mat(0xc3d5d6, 0.24));
  box(root, 'tank', [0.54, 0.48, 0.23], [0, 0.79, -0.325], ceramic);
  box(root, 'tank-lid', [0.59, 0.045, 0.26], [0, 1.055, -0.325], lid);
  cylinder(root, 'flush-button', 0.032, 0.032, 0.013, [0.14, 1.083, -0.325], hardware);
  return root;
}
