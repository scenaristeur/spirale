import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(60, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let current = null

scene.add(new THREE.AmbientLight(0xcccccc));
const cube_number = 100
const radius = 3
const cube_per_spire = 50
const spire_height = 0.2



addCubes()

function addCubes() {
    for (let i = 0; i < cube_number; i++) {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const cube_material = new THREE.MeshPhysicalMaterial(
            {
                color: 0x049ef4,
                emissive: 0x00bb00,
                roughness: 1,
                metalness: 0,
                reflectivity: 0.5,
                clearcoat: 0,
                clearcoatNormalScale: 0,
                fog: true
            });
        const cube = new THREE.Mesh(geometry, cube_material);
        cube.name = "cube_" + i // donner un nom unique
        cube.userData.type = "cube" // créer un type perso pour les retrouver plus facilement
        let angle = i * (Math.PI * 2 / cube_per_spire)
        let x = radius * Math.cos(angle)
        let y = i * spire_height
        let z = radius * Math.sin(angle)
        cube.position.set(x, y, z)
        scene.add(cube);
    }
    console.log(scene)
}

camera.position.z = 5;
//controls.update() must be called after any manual changes to the camera's transform
controls.update();

function animate() {
    requestAnimationFrame(animate);
    // update the picking ray with the camera and pointer position
    raycaster.setFromCamera(pointer, camera);
    scene.traverse((child) => {
        if (child.userData.type === "cube") {
            child.rotation.x += 0.01;
            child.rotation.y += 0.01;
            child.material.color.set(0x00ff00)
        }
    });
    // calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(scene.children);
    for (let i = 0; i < intersects.length; i++) {
        //intersecte object in red
        intersects[i].object.material.color.set(0xff0000);
        // console.log(intersects[i].object.name)
    }
    current = intersects[0] || null
    renderer.render(scene, camera);
}

function onPointerMove(event) {
    // calculate pointer position in normalized device coordinates
    // (-1 to +1) for both components
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;
}
function onClick(event) {
    current != null ? console.log("object clicked", current.object.name, current.object) : ""
    console.log(camera) // utile pour récupérer la position de la camera
}

window.addEventListener('pointermove', onPointerMove);
window.addEventListener('click', onClick);
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
animate();


