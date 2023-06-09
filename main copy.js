import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js';
import { GUI } from 'dat.gui'
import * as SceneUtils from 'three/addons/utils/SceneUtils.js';


var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
var sin = Math.sin, cos = Math.cos, pi = Math.PI;

const scene = new THREE.Scene();
let camera
let controls
let params = {
    resetCam: function () { resetCamera(); },
    message: "Catenoid-Helicoid Minimal Surface",
    radius: pi / 2,
    wireframe: true,
    facets: true,
    sfondo: "",
    magnification: 1000
    //  preset1: function () { preset01(); },
    //  graphFunc: function () { createGraph(); },
};
let surface




const renderer = new THREE.WebGLRenderer();
renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
resetCamera()
document.body.appendChild(renderer.domElement);

/* camera = new THREE.PerspectiveCamera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 100, 45000);
			camera.position.z = -3200;
 */
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let current = null
let start_repere
let now_repere

const cube_number = 1000
const radius = 3
const cube_per_spire = 50
const spire_height = 0.2



addCubes()
addRepere()
addLights()

const surfaceMaterials = function (mat) {//prune materials array according to flags
    if (params.wireframe && params.facets) {
        return [mat[0], mat[1]];
    } else if (params.wireframe) {
        return [mat[1]];
    } else if (params.facets) {
        return [mat[0]];
    } else {
        return [];
    }
}

const updateSurface = function () {//function to initialise and update surf.
    scene.remove(surface);
    let surfaceGeom = new ParametricGeometry(catenoid, 20, 40);
    //const surfaceGeom = new THREE.ParametricGeometry( THREE.ParametricGeometries.klein, 25, 25 );
    var mat = surfaceMaterials(materials);
    console.log(mat)
    if (mat.length > 0) {
        surface = SceneUtils.createMultiMaterialObject(surfaceGeom, mat);
        surface.children[0].material.side = THREE.DoubleSide;
        surface.position.set(0, 0, 0);
       surface.scale.multiplyScalar(2);
        surface.matrixAutoUpdate = true;
        scene.add(surface);
        console.log(surface)
    }
    console.log(surface)


    const geometry = new THREE.SphereGeometry( 1, 32, 16 ); 
const material = new THREE.MeshBasicMaterial( { color: 0xff00ff } ); 
const sphere = new THREE.Mesh( geometry, material );
 scene.add( sphere );

 const geometry1 = new THREE.PlaneGeometry( 1, 1 );
 const material1 = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
 const plane = new THREE.Mesh( geometry1, material1 );
 scene.add( plane );




}




addGui()

function addRepere() {
    /*     const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper); */


    repere({ type: "seconde", start: 0, number: 60, step: 5, color: 0xffff00, z_offset: 0 })
    repere({ type: "minute", start: 0, number: 60, step: 5, color: 0x00ffff, z_offset: 1 })
    repere({ type: "heure", start: 0, number: 24, step: 3, color: 0x00ff00, z_offset: 2 })
    repere({ type: "jour", start: 1, number: 7, step: 1, color: 0xffff00, z_offset: 3 })
    repere({ type: "semaine", start: 0, number: 4, step: 1, color: 0x00ffff, z_offset: 4 })
    repere({ type: "mois", start: 0, number: 12, step: 1, color: 0x00ff00, z_offset: 5 })

    repere({ type: "annee", start: 0, number: 10, step: 1, color: 0xffff00, z_offset: 6 })
    repere({ type: "decenie", start: 0, number: 10, step: 1, color: 0x00ffff, z_offset: 7 })
    repere({ type: "siècle", start: 0, number: 10, step: 1, color: 0x00ff00, z_offset: 8 })
    repere({ type: "millénaire", start: 0, number: 10, step: 1, color: 0xffff00, z_offset: 9 })





    // start of the animation
    const start_geometry = new THREE.BoxGeometry(.05, .05, .04);
    const start_material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    start_repere = new THREE.Mesh(start_geometry, start_material);
    start_repere.userData.type = "start"
    start_repere.name = "start"
    // start_repere.position.set(-1, 1, 1)
    scene.add(start_repere)

    const now_geometry = new THREE.BoxGeometry(.04, .05, .05);
    const now_material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    now_repere = new THREE.Mesh(now_geometry, now_material);
    now_repere.userData.type = "now"
    now_repere.name = "now"
    //now_repere.position.set(1, 1, 1)
    scene.add(now_repere)

}

function addCubes() {
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




//Create materials for  Surface
const materials = [
    new THREE.MeshPhongMaterial({ color: 0x8f5e67, specular: 0xaa0000, emissive: 0x000000, ambient: 0xae727d, shininess: 10, shading: THREE.SmoothShading }),
    //new THREE.MeshPhongMaterial( { color: 0x008888, specular: 0xaaaaaa, emissive: 0x000000, ambient: 0x00aaaa, shininess: 10, shading: THREE.SmoothShading} ),
 /*    new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true, transparent: true, opacity: 0.1 }) */
    new THREE.MeshBasicMaterial({ color: 0x0ffffff, wireframe: true,  })
];

//Surface
updateSurface();


camera.position.z = 5;
//controls.update() must be called after any manual changes to the camera's transform
controls.update();

function animate(time) {
    requestAnimationFrame(animate);
    // update the picking ray with the camera and pointer position
    let start = Math.trunc(time / 1000), now = Math.trunc(Date.now() / 1000)
    //console.log(now, start)
    raycaster.setFromCamera(pointer, camera);
    scene.traverse((child) => {
        if (child.userData.type === "cube") {
            child.rotation.x += 0.01;
            child.rotation.y += 0.01;
            child.material.color.set(0x00ff00)
        }
        /*      if (child.userData.type === "repere") {
                 child.material.color.set(0xff0000)
             }
             if (child.userData.type === "start") {
                 child.material.color.set(0x000000)
             }
             if (child.userData.type === "now") {
                  child.material.color.set(0xffff00)
             } */


    });
    // tour complet = 2pi -> 1 seconde = 2pi/60 = pi/30 -> + rotatiojn anti horaire d'un quart de tour ( + Pi /2)

    let angle_start = - start * Math.PI / 30 + Math.PI / 2
    let x_start = Math.cos(angle_start)
    let y_start = Math.sin(angle_start)
    //let z = Math.trunc(second / 60) */
    start_repere.position.x = x_start
    start_repere.position.y = y_start

    // tour complet = 2pi -> 1 seconde = 2pi/60 = pi/30 -> + rotatiojn anti horaire d'un quart de tour ( + Pi /2)

    let angle_now = - now * Math.PI / 30 + Math.PI / 2
    let x_now = Math.cos(angle_now)
    let y_now = Math.sin(angle_now)
    /* let y = Math.sin(angle)
    let z = Math.trunc(second / 60) */
    now_repere.position.x = x_now
    now_repere.position.y = y_now

    // calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(scene.children);
    for (let i = 0; i < intersects.length; i++) {

        intersects[i].object.userData.type == "cube" ? intersects[i].object.material.color.set(0xff0000) : ""
        // console.log(intersects[i].object.name)
    }
    current = intersects[0] || null
    /*  if(current != null)
     {current.object.userData.type == "repere" ? current.object.color  = 0xffff00 : ""} */
    renderer.render(scene, camera);
}

function addLights() {
    scene.add(new THREE.AmbientLight(0xcccccc));

    let light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 0, 1)
 /*    light.castShadow = true;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    light.shadow.camera.right = 2;
    light.shadow.camera.left = -2;
    light.shadow.camera.top = 2;
    light.shadow.camera.bottom = -2; */
    //light.shadow.bias = 0.00001

    scene.add(light);
}

function onPointerMove(event) {
    // calculate pointer position in normalized device coordinates
    // (-1 to +1) for both components
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;
}
function onClick(event) {
    current != null ? console.log("object clicked", current.object.name, current.object) : ""
    //  console.log(camera) // utile pour récupérer la position de la camera

}

const light2 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light2 );

function addGui() {
    const gui = new GUI()
    gui.width = 300;
    /*const cubeFolder = gui.addFolder('Cube')
    cubeFolder.add(cube.rotation, 'x', 0, Math.PI * 2)
    cubeFolder.add(cube.rotation, 'y', 0, Math.PI * 2)
    cubeFolder.add(cube.rotation, 'z', 0, Math.PI * 2)
    cubeFolder.open()*/
    gui.add(params, "message").name("");
    gui.add(params, "radius").min(0).max(pi / 2).name("deform. param").onChange(updateSurface);
    gui.add(params, "wireframe").name("Show mesh").onChange(updateSurface);
    gui.add(params, "facets").name("Show smooth surface").onChange(updateSurface);
    const cameraFolder = gui.addFolder('Camera')


    cameraFolder.add(params, 'resetCam').name("Reset Camera");
    // cameraFolder.add(camera.position, 'z', 0, 10)
    cameraFolder.open()/*  */
}



function resetCamera() {
    console.log("n'est pas suffisant")
    //https://jsbin.com/wahikuluba/edit?html,output
    // CAMERA

    var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 1, FAR = 10000; //NEAR = 0.1, FAR = 20000;


    camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
    //camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 0, 3);
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix();
    scene.add(camera);
    controls = new OrbitControls(camera, renderer.domElement);
    //camera.position.set(0, 0, 3); // camera.position.set(60, 0, 0);
    /*
    camera.position.set( 2*xMax, 0.5*yMax, 4*zMax);
    
    camera.up = new THREE.Vector3( 0, 0, 1 );
    
    camera.lookAt(scene.position);
    
    scene.add(camera);
    
    controls = new THREE.TrackballControls( camera, renderer.domElement );
    
    THREEx.WindowResize(renderer, camera); */


}

function repere(p) {
    // let repere_scale = 3

    for (let rep = p.start; rep < p.number; rep++) {
        let geo = { x: 0.02, y: 0.01, z: 0.02 }
        if (rep == p.start) {
            geo = { x: 0.02, y: 0.5, z: 0.02 }
        } else
            if (rep % p.step == 0) {
                geo = { x: 0.02, y: 0.1, z: 0.02 }
            }
        const rep_geometry = new THREE.BoxGeometry(geo.x, geo.y, geo.z);
        const rep_material = new THREE.MeshBasicMaterial({ color: p.color });
        const rep_mark = new THREE.Mesh(rep_geometry, rep_material);
        // tour complet = 2pi -> 1 seconde = 2pi/60 = pi/30 -> + rotatiojn anti horaire d'un quart de tour ( + Pi /2)
        let angle = rep * 2 * Math.PI / p.number - Math.PI / 2 //(2PI /60)
        let x = Math.cos(angle)
        let y = - Math.sin(angle)
        let z = p.z_offset //0//Math.trunc(rep / p.number)
        rep_mark.position.set(x, y, z)
        rep_mark.userData.type = p.type
        rep_mark.name = p.type + "_" + rep
        scene.add(rep_mark);
    }




}

function catenoid(r, t) {
    var v = (r - .5) * 20;
    var u = 2 * 5 * pi * t;
    let a = params.radius;
    let x = Math.cos(a) * sinh(v / 5) * Math.sin(u / 5) + Math.sin(a) * cosh(v / 5) * Math.cos(u / 5);
    let y = -Math.cos(a) * sinh(v / 5) * Math.cos(u / 5) + Math.sin(a) * cosh(v / 5) * Math.sin(u / 5);
    let z = u / 5 * Math.cos(a) + v / 5 * Math.sin(a);
    return new THREE.Vector3(y / 3.3, z / 3.3, x / 3.3);
}
function sinh(t) {
    return (Math.exp(t) - Math.exp(-t)) / 2.0;
}
function cosh(t) {
    return (Math.exp(t) + Math.exp(-t)) / 2.0;
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


