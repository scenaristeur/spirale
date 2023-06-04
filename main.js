import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const controls = new OrbitControls( camera, renderer.domElement );

const cube_number = 100

addCubes()

function addCubes(){
    for (let i = 0; i<cube_number; i++){
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        cube.name = "cube_"+i // donner un nom unique
        cube.userData.type="cube" // créer un type perso pour les retrouver plus facilement
        cube.position.set(i,i,i)
        scene.add( cube );
    }
    console.log(scene)
}

camera.position.z = 5;
//controls.update() must be called after any manual changes to the camera's transform
controls.update();

function animate() {
	requestAnimationFrame( animate );

    scene.traverse((child) => {
        if (child.userData.type === "cube") {
            child.rotation.x += 0.01;
            child.rotation.y += 0.01;
        }
      });

	renderer.render( scene, camera );
}

animate();


