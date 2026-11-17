import * as THREE from 'three';
export const palette = {
  oak: 0xc38a56, oakDark: 0x7b5137, steel: 0x30383c, cream: 0xeee7dc,
  ceramic: 0xf0f2ef, water: 0xa4c8ca, dark: 0x23323d,
  skin: 0xd2a07c, hair: 0x332922, denim: 0x455e77, coral: 0xc97669,
  sole: 0x363639, sand: 0xd6bd91
};
export function mat(color, roughness = 0.7, metalness = 0) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness });
}
export function box(parent, name, size, position, material, bevel = 0) {
  const geo = new THREE.BoxGeometry(...size);
  const mesh = new THREE.Mesh(geo, material);
  mesh.name = name;
  mesh.position.set(...position);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}
export function sphere(parent, name, scale, position, material) {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 16), material);
  mesh.name = name;
  mesh.scale.set(...scale);
  mesh.position.set(...position);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}
export function cylinder(parent, name, radiusTop, radiusBottom, height, position, material, segments = 24) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments), material);
  mesh.name = name;
  mesh.position.set(...position);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}
export function limb(parent, name, from, to, radius, material) {
  const start = new THREE.Vector3(...from);
  const end = new THREE.Vector3(...to);
  const vec = end.clone().sub(start);
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.88, radius, vec.length(), 12), material);
  mesh.name = name;
  mesh.position.copy(start.add(end).multiplyScalar(0.5));
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), vec.normalize());
  mesh.castShadow = true;
  parent.add(mesh);
  return mesh;
}
