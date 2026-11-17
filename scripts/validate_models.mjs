#!/usr/bin/env node
/** Validate every original procedural geometry against registry contracts. */
import * as THREE from 'three';
import { readFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const manifest = JSON.parse(readFileSync(new URL('../catalog/models.json', import.meta.url), 'utf8'));
let checked = 0;
for (const asset of manifest.assets) {
  if (asset.kind !== 'procedural') continue;
  const filepath = resolve(root, asset.source_path);
  if (!filepath.startsWith(resolve(root, 'src/models') + '/')) {
    throw new Error('Unsafe model source path: ' + asset.id);
  }
  const module = await import(pathToFileURL(filepath).href);
  const generator = module[asset.generator];
  if (typeof generator !== 'function') throw new Error('Missing generator: ' + asset.id);
  const object = generator();
  if (!(object instanceof THREE.Group)) throw new Error('Generator must return THREE.Group: ' + asset.id);
  let meshes = 0, vertices = 0, triangles = 0;
  const names = new Set();
  object.traverse(node => {
    if (!node.isMesh) return;
    meshes += 1;
    if (!node.geometry?.attributes?.position) throw new Error('Invalid mesh geometry: ' + node.name);
    if (names.has(node.name)) throw new Error('Duplicate mesh name: ' + asset.id + '/' + node.name);
    names.add(node.name);
    vertices += node.geometry.attributes.position.count;
    triangles += node.geometry.index
      ? node.geometry.index.count / 3 : node.geometry.attributes.position.count / 3;
  });
  if (meshes < 1) throw new Error('Empty asset: ' + asset.id);
  if (['v0.4','v0.5','v0.6','v0.7'].includes(asset.collection)) {
    const minimum = ['v0.6','v0.7'].includes(asset.collection) ? 9 : asset.collection === 'v0.5' ? 8 : 5;
    if (meshes < minimum) throw new Error('Insufficient authored parts ('+minimum+') for '+asset.id);
  }
  const boundingBox = new THREE.Box3().setFromObject(object);
  const dimensions = boundingBox.getSize(new THREE.Vector3()).toArray();
  if (dimensions.some(n => !Number.isFinite(n) || n <= 0)) {
    throw new Error('Non-finite or degenerate bounds: ' + asset.id);
  }
  if (boundingBox.min.y < -0.03) throw new Error('Model passes below floor y=0: ' + asset.id);
  const expected = asset.dimensions_m;
  for (let i = 0; i < 3; i += 1) {
    if (Math.abs(dimensions[i] - expected[i]) > Math.max(0.11, expected[i] * 0.25)) {
      throw new Error('Bounding-box mismatch: ' + asset.id + ' axis=' + i +
        ' actual=' + dimensions[i].toFixed(2) + ' expected=' + expected[i]);
    }
  }
  if (triangles > 100000) throw new Error('Primitive asset exceeds 100k triangles: ' + asset.id);
  object.traverse(node => {
    node.geometry?.dispose();
    if (node.material) {
      (Array.isArray(node.material) ? node.material : [node.material]).forEach(m => m.dispose());
    }
  });
  checked += 1;
  console.log('OK', asset.id, { meshes, vertices, triangles: Math.round(triangles), dimensions });
}
if (checked !== manifest.assets.filter(asset => asset.kind === 'procedural').length || checked < 235) {
  throw new Error('Expected all 235+ registered procedural models to validate; found ' + checked);
}
console.log('Verified', checked, 'procedural models');
