
// source http://profs.scienze.univr.it/~baldo/tjs/catenoid.html
//http://profs.scienze.univr.it/~baldo/
/* WEBGL Catenoid-Helicoid Minimal Surface using three.js 
*Copyright (C) 2012  Sisto Baldo sisto.baldo@univr.it

*This program is free software; you can redistribute it and/or
*modify it under the terms of the GNU General Public License
*as published by the Free Software Foundation; either version 3
*of the License, or (at your option) any later version.
*
*This program is distributed in the hope that it will be useful,
*but WITHOUT ANY WARRANTY; without even the implied warranty of
*MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*GNU General Public License for more details.
*
*You should have received a copy of the GNU General Public License
*along with this program; if not, write to the Free Software
*Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

//if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

import * as THREE from 'three';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js';
import { GUI } from 'dat.gui'
import * as SceneUtils from 'three/addons/utils/SceneUtils.js';

var sin = Math.sin, cos = Math.cos, pi = Math.PI;
var container, stats;

var camera, scene, renderer, controls, materials, shader, mesh;
//var message, radius, magnification, wireframe,
//facets,sfondo,
let textureSfondo, surface, surfaceGeom, updateSurface;
let params = {
	message: "Catenoid-Helicoid Minimal Surface",
	radius: pi / 2,
	wireframe: true,
	facets: true,
	sfondo: "",
	magnification: 1000
}

init();
animate();

function init() {
	container = document.getElementById('container');
	var scene_width = .75 * window.innerWidth;
	var scene_height = .75 * window.innerHeight;

	scene = new THREE.Scene();



	/*    radius=pi/2;
		wireframe=true;
		facets=true;
		magnification=1000;
		//message="Catenoid-Helicoid Minimal Surface";*/
	textureSfondo = 'clouds/';
	params.sfondo = function () {//function to initialise or change skyBox
		scene.remove(camera);
		if (textureSfondo == 'clouds/') {
			textureSfondo = 'desert/';
		} else if (textureSfondo == 'desert/') {
			textureSfondo = 'granite/';
		} else if (textureSfondo == 'granite/') {
			textureSfondo = 'milk/';
		} else if (textureSfondo == 'milk/') {
			textureSfondo = 'flat';
		} else {
			textureSfondo = 'clouds/';
		}

		scene.remove(mesh);
		if (textureSfondo != 'flat') {
			var r = textureSfondo;
			var urls = [r + "posx.jpg", r + "negx.jpg",
			r + "posy.jpg", r + "negy.jpg",
			r + "posz.jpg", r + "negz.jpg"];

			var textureCube = THREE.ImageUtils.loadTextureCube(urls);
			shader = THREE.ShaderLib["cube"];
			shader.uniforms["tCube"].value = textureCube;

			var material = new THREE.ShaderMaterial({

				fragmentShader: shader.fragmentShader,
				vertexShader: shader.vertexShader,
				uniforms: shader.uniforms,
				side: THREE.BackSide

			});
			mesh = new THREE.Mesh(new THREE.CubeGeometry(40000, 40000, 40000), material);
			mesh.flipSided = true;
			scene.add(mesh);
			camera = new THREE.PerspectiveCamera(75, scene_width / scene_height, 100, 45000);
			camera.position.z = -3200;
			scene.add(camera);

		} else {
			camera = new THREE.PerspectiveCamera(75, scene_width / scene_height, 100, 45000);
			camera.position.z = -3200;
			scene.add(camera);
		}
		if (renderer != null) {
			controls = new TrackballControls(camera, renderer.domElement);
			controls.rotateSpeed = 1.0;
			controls.zoomSpeed = 1.2;
			controls.panSpeed = 1;

			controls.noZoom = false;
			controls.noPan = false;

			controls.staticMoving = true;
			controls.dynamicDampingFactor = 0.3;

			controls.keys = [65, 83, 68];

			controls.addEventListener('change', render);
		}
	};
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
	updateSurface = function () {//function to initialise and update surf.
		scene.remove(surface);
		surfaceGeom = new ParametricGeometry(catenoid, 20, 40);
		//const surfaceGeom = new THREE.ParametricGeometry( THREE.ParametricGeometries.klein, 25, 25 );
		var mat = surfaceMaterials(materials);
		if (mat.length > 0) {
			surface = SceneUtils.createMultiMaterialObject(surfaceGeom, mat);
			surface.children[0].material.side = THREE.DoubleSide;
			surface.position.set(0, 0, 0);
			surface.scale.multiplyScalar(params.magnification);
			surface.matrixAutoUpdate = true;
			scene.add(surface);
		}

	}


	var light1, object, materials;

	scene.add(new THREE.AmbientLight(0xffffff));

	light1 = new THREE.DirectionalLight(0xffffff);
	light1.position.set(2, 0, 10);
	scene.add(light1);


	scene.add(new THREE.AmbientLight(0xcccccc));

	let light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.x = 1;
	light.position.y = 0;
	light.position.z = 1;
	light.castShadow = true;
	light.shadow.mapSize.width = 2048;
	light.shadow.mapSize.height = 2048;
	light.shadow.camera.right = 2;
	light.shadow.camera.left = -2;
	light.shadow.camera.top = 2;
	light.shadow.camera.bottom = -2;
	//light.shadow.bias = 0.00001

	scene.add(light);

	//Add skybox
	textureSfondo = 'milk/';//...so next texture will be 'flat' (default)
	params.sfondo();


	//Create materials for  Surface
	materials = [
		new THREE.MeshPhongMaterial({ color: 0x8f5e67, specular: 0xaa0000, emissive: 0x000000, ambient: 0xae727d, shininess: 10, shading: THREE.SmoothShading }),
		//new THREE.MeshPhongMaterial( { color: 0x008888, specular: 0xaaaaaa, emissive: 0x000000, ambient: 0x00aaaa, shininess: 10, shading: THREE.SmoothShading} ),
		new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true, transparent: true, opacity: 0.1 })
	];

	//Surface
	updateSurface();


	// GUI controls...
	var gui = new GUI({ autoPlace: true });
	//container.appendChild(gui.domElement);
	gui.width = 300;
	gui.add(params, "message").name("");
	gui.add(params, "radius").min(0).max(pi / 2).name("deform. param").onChange(updateSurface);
	gui.add(params, "wireframe").name("Show mesh").onChange(updateSurface);
	gui.add(params, "facets").name("Show smooth surface").onChange(updateSurface);
	gui.add(params, 'sfondo').name("Change background");

	//Renderer, controls
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(scene_width, scene_height);
	document.body.appendChild(renderer.domElement);
	//container.appendChild( renderer.domElement );
	controls = new TrackballControls(camera, renderer.domElement);
	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 1;

	controls.noZoom = false;
	controls.noPan = false;

	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;

	controls.keys = [65, 83, 68];

	controls.addEventListener('change', render);

}



function animate() {

	requestAnimationFrame(animate);
	controls.update();
	render();
}


function render() {
	camera.lookAt(scene.position);
	renderer.render(scene, camera);
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



