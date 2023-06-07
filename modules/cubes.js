import * as THREE from 'three';
const cube_number = 500
const cube_per_spire = 50
const spire_height = 0.2
const radius = 3

export function addCubes(scene) {
    for (let i = 0; i < cube_number; i++) {
        const geometry = new THREE.BoxGeometry(.1, .1, .1);
        /*    const cube_material = new THREE.MeshPhysicalMaterial(
               {
                   color: 0x049ef4,
                   emissive: 0x00bb00,
                   roughness: 1,
                   metalness: 0,
                   reflectivity: 0.5,
                   clearcoat: 0,
                   clearcoatNormalScale: 0,
                   fog: true
               }); */
        const cube_material = new THREE.MeshPhysicalMaterial({
            //color: 0xcc0000,
            emissive: 0x26a269,
            color: 0x00ff00, // decalage > 0 ? 0x00ff00 : 0x0000ff,
            roughness: 0,
            metalness: 0.5,
            reflectivity: 0.5,
            clearcoat: 1,
            clearcoatRoughness: 0.4,
            flatShading: true,
            side: THREE.DoubleSide,
            //fog: true,
            //wireframe: true
        });
        const cube = new THREE.Mesh(geometry, cube_material);
        cube.name = "cube_" + i // donner un nom unique
        cube.userData.type = "cube" // créer un type perso pour les retrouver plus facilement
        let angle = i * (Math.PI * 2 / cube_per_spire)
        //  spirale basique
        /*   let x = radius * Math.cos(angle)
        let y = i * spire_height
        let z = radius * Math.sin(angle) */

        // test hyperbolic
        // https://mathworld.wolfram.com/HyperbolicHelicoid.html
        // https://github.com/scenaristeur/helyfe/blob/main/sketch.js
        let tau = 5 //(torsion)
        let u = i / 100
        let v = angle
        let denominateur = (1 + Math.cosh(u) * Math.cosh(v))
        let x = radius * (Math.sinh(v) * Math.cos(tau * u)) / denominateur + 3 // decalage temporaire pour construire l'horloge
        let y = radius * (Math.sinh(v) * Math.sin(tau * u)) / denominateur
        let z = -radius * (Math.cosh(v) * Math.sinh(u)) / denominateur
        cube.scale.set(2, 1 - i / cube_number, 2);
        cube.position.set(x, y, z)
        scene.add(cube);
    }
    console.log(scene)
}