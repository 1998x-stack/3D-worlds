import * as THREE from 'three';
/**
 * Declarative primitive asset builder. Recipes are editable and unit-safe.
 * Each recipe is a small assembly of named boxes, spheres, cylinders, toroids
 * or rods. Group is rescaled once to its physical envelope in meters.
 */
export function buildRecipe(spec) {
  const root = new THREE.Group();
  root.name = spec.title;
  const materials = new Map();
  const material = color => {
    if (!materials.has(color)) materials.set(color,new THREE.MeshStandardMaterial({color,roughness:.74,metalness:.06}));
    return materials.get(color);
  };
  for (const part of spec.parts) {
    let geometry;
    switch(part.t) {
      case 'box': geometry=new THREE.BoxGeometry(...part.s); break;
      case 'sphere': geometry=new THREE.SphereGeometry(1,20,12); break;
      case 'cylinder': geometry=new THREE.CylinderGeometry(.5,.5,1,24); break;
      case 'cone': geometry=new THREE.ConeGeometry(.5,1,24); break;
      case 'triangle': {
        if (!Array.isArray(part.vertices) || part.vertices.length !== 3) throw new Error('Triangle requires 3 vertices');
        geometry=new THREE.BufferGeometry();
        geometry.setAttribute('position',new THREE.Float32BufferAttribute(part.vertices.flat(),3));
        geometry.setIndex([0,1,2]);
        geometry.computeVertexNormals();
        break;
      }
      case 'torus': geometry=new THREE.TorusGeometry(.34,.10,10,32); break;
      case 'rod': {
        const from=new THREE.Vector3(...part.from),to=new THREE.Vector3(...part.to);
        const direction=to.clone().sub(from);
        if(direction.lengthSq()<1e-8) throw new Error('Degenerate rod: '+part.n);
        geometry=new THREE.CylinderGeometry(part.r,part.r,direction.length(),12);
        const mesh=new THREE.Mesh(geometry,material(part.c));
        mesh.name=part.n;
        mesh.position.copy(from.add(to).multiplyScalar(.5));
        mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),direction.normalize());
        mesh.castShadow=true;mesh.receiveShadow=true;root.add(mesh);
        continue;
      }
      default: throw new Error('Unknown shape '+part.t);
    }
    const mesh=new THREE.Mesh(geometry,material(part.c));
    mesh.name=part.n;
    mesh.position.set(...part.p);
    if(part.t==='box'||part.t==='triangle') { /* geometry stores physical vertices */ }
    else mesh.scale.set(...part.s);
    if(part.t==='triangle')mesh.material.side=THREE.DoubleSide;
    if(part.rot) mesh.rotation.set(...part.rot);
    mesh.castShadow=true;mesh.receiveShadow=true;root.add(mesh);
  }
  const b=new THREE.Box3().setFromObject(root);
  const size=b.getSize(new THREE.Vector3());
  if(Math.min(size.x,size.y,size.z)<=0)throw new Error('Degenerate model '+spec.title);
  root.scale.set(spec.dimensions[0]/size.x,spec.dimensions[1]/size.y,spec.dimensions[2]/size.z);
  root.position.set(-(b.min.x+b.max.x)*.5*root.scale.x,-b.min.y*root.scale.y,-(b.min.z+b.max.z)*.5*root.scale.z);
  return root;
}
