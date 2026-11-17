import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';

export function createScene(canvas, factory, { interactive = true } = {}) {
  const scene = new THREE.Scene();
  const object = factory();
  scene.add(object);

  const ambient = new THREE.HemisphereLight(0xffffff, 0xc5b8a6, 2.2);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xffffff, 3.1);
  key.position.set(4, 7, 5);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.left = -5; key.shadow.camera.right = 5;
  key.shadow.camera.top = 5; key.shadow.camera.bottom = -5;
  key.shadow.bias = -0.0005;
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x9cc9dc, 1.2);
  rim.position.set(-3, 3, -5);
  scene.add(rim);
  if (interactive) {
    const grid = new THREE.GridHelper(5, 22, 0xc1bbb0, 0xdedbd5);
    grid.position.y = -0.015;
    grid.material.transparent = true;
    grid.material.opacity = 0.4;
    scene.add(grid);
  }
  const bounds = new THREE.Box3().setFromObject(object);
  const center = bounds.getCenter(new THREE.Vector3());
  const diameter = Math.max(bounds.getSize(new THREE.Vector3()).length(), 0.5);
  const camera = new THREE.PerspectiveCamera(38, 1, 0.02, Math.max(100, diameter * 12));
  camera.position.copy(center).add(new THREE.Vector3(diameter * 0.95, diameter * 0.7, diameter * 1.22));
  camera.lookAt(center);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = interactive;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  let controls = null, frame = 0, disposed = false;
  if (interactive) {
    controls = new OrbitControls(camera, canvas);
    controls.target.copy(center);
    controls.enableDamping = true;
    controls.dampingFactor = 0.07;
    controls.minDistance = diameter * 0.5;
    controls.maxDistance = diameter * 5;
    controls.maxPolarAngle = Math.PI * 0.88;
    controls.update();
  }
  function resize() {
    if (disposed) return;
    const width = Math.max(1, canvas.clientWidth);
    const height = Math.max(1, canvas.clientHeight);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  }
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  function animate() {
    if (disposed) return;
    controls?.update();
    renderer.render(scene, camera);
    frame = requestAnimationFrame(animate);
  }
  resize();
  if (interactive) animate();
  return {
    object,
    reset() {
      camera.position.copy(center).add(new THREE.Vector3(diameter * 0.95, diameter * 0.7, diameter * 1.22));
      controls?.target.copy(center);
      controls?.update();
      renderer.render(scene, camera);
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      controls?.dispose();
      object.traverse(node => {
        if (node.geometry) node.geometry.dispose();
        if (node.material) {
          const materials = Array.isArray(node.material) ? node.material : [node.material];
          for (const material of materials) material.dispose();
        }
      });
      renderer.dispose();
      renderer.forceContextLoss();
    }
  };
}

export async function downloadAsGlb(factory, filename) {
  const object = factory();
  const exporter = new GLTFExporter();
  try {
    const arrayBuffer = await exporter.parseAsync(object, { binary: true, onlyVisible: true });
    const blob = new Blob([arrayBuffer], { type: 'model/gltf-binary' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
  } finally {
    object.traverse(node => {
      node.geometry?.dispose();
      if (node.material) {
        (Array.isArray(node.material) ? node.material : [node.material]).forEach(material => material.dispose());
      }
    });
  }
}
