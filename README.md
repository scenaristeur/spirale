# spirale

- https://threejs.org/docs/index.html#manual/en/introduction/Installation
- créer index.html et main.js (vide pour l'instant)

`index.html`
```
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>My first three.js app</title>
		<style>
			body { margin: 0; }
		</style>
	</head>
	<body>
		<script type="module" src="/main.js"></script>
	</body>
</html>
```

- installer three et vite
```
npm init -y
# three.js
npm install --save three

# vite
npm install --save-dev vite
# launch project
npx vite
```

-> page blanche sur http://localhost:5173/
- créer une scène
- https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

`main.js`
````
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();
```

- ajouter un fichier .gitignore avec juste "node_modules" si vous souhaitez utiliser git comme gestionnaire de version