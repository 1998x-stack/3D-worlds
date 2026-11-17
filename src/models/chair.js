import * as THREE from 'three';
import { box, mat, palette } from './primitives.js';

/** Upholstered dining chair; floor origin, meters. */
export function createChair() {
  const root = new THREE.Group();
  root.name = 'Linen Dining Chair';
  const wood = mat(palette.oakDark);
  const fabric = mat(0xb7aa95, 0.98);
  const seams = mat(0x8f8171);
  box(root, 'seat-shell', [0.56, 0.085, 0.55], [0, 0.46, 0], wood);
  box(root, 'seat-cushion', [0.52, 0.075, 0.50], [0, 0.52, 0.015], fabric);
  box(root, 'backrest', [0.54, 0.63, 0.09], [0, 0.86, -0.235], fabric);
  box(root, 'backrest-top-seam', [0.54, 0.016, 0.092], [0, 1.16, -0.235], seams);
  for (const x of [-0.22, 0.22]) for (const z of [-0.20, 0.20]) {
    box(root, `leg-${x}-${z}`, [0.055, 0.455, 0.055], [x, 0.2275, z], wood);
  }
  return root;
}
