import * as THREE from 'three';
import { STLExporter } from 'three/addons/exporters/STLExporter.js';

/** Browser-only STL draft. NOT independently audited for manufacturability.
 * Source units: meters, Y-up. Output: millimeters, Z-up.
 */
export async function downloadPrintDraftStl(factory, slug, longestMm = 120) {
  if (!Number.isFinite(longestMm) || longestMm < 5 || longestMm > 1000) {
    throw new Error('最长边尺寸必须在 5–1000 mm 之间');
  }
  const model = factory();
  const stage = new THREE.Group();
  stage.add(model);
  stage.rotation.x = Math.PI / 2;
  const root = new THREE.Group();
  root.add(stage);
  try {
    let triangles = 0;
    model.traverse(node => {
      if (!node.isMesh || !node.visible) return;
      const geom = node.geometry;
      if (!geom?.attributes?.position) throw new Error('网格缺少位置属性');
      triangles += (geom.index ? geom.index.count : geom.attributes.position.count) / 3;
    });
    if (!triangles || triangles > 500000) {
      throw new Error('三角面数为空或超出浏览器导出预算');
    }
    const bounds = new THREE.Box3().setFromObject(root);
    const size = bounds.getSize(new THREE.Vector3());
    const longest = Math.max(size.x, size.y, size.z);
    if (!Number.isFinite(longest) || longest <= 0) throw new Error('模型尺寸无效');
    stage.scale.setScalar(longestMm / longest);
    root.updateMatrixWorld(true);
    const scaled = new THREE.Box3().setFromObject(root);
    stage.position.set(-scaled.min.x, -scaled.min.y, -scaled.min.z);
    root.updateMatrixWorld(true);
    const dimensions = new THREE.Box3().setFromObject(root).getSize(new THREE.Vector3());
    const exported = new STLExporter().parse(root, { binary: true, onlyVisible: true });
    const bytes = exported instanceof DataView
      ? new Uint8Array(exported.buffer, exported.byteOffset, exported.byteLength)
      : new Uint8Array(exported);
    // Binary STL carries no reliable units or QA metadata. Header warns readers.
    bytes.set(new TextEncoder().encode('3D WORLDS STL DRAFT - UNVERIFIED - UNITS MM'), 0);
    const url = URL.createObjectURL(new Blob([bytes], { type: 'model/stl' }));
    try {
      const link = document.createElement('a');
      link.href = url;
      link.download = `${slug}-draft-${Math.round(longestMm)}mm.stl`;
      link.click();
    } finally {
      setTimeout(() => URL.revokeObjectURL(url), 30000);
    }
    return { triangles, dimensions_mm: dimensions.toArray(), manufacturing_certified: false };
  } finally {
    model.traverse(node => {
      node.geometry?.dispose();
      if (node.material) {
        (Array.isArray(node.material) ? node.material : [node.material]).forEach(m => m.dispose());
      }
    });
  }
}
