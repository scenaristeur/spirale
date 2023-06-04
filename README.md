# spirale
Alors, tu veux developper des jeux en 3D, mais ça parait compliqué? Non, t'inquiète, on va démarrer doucement en utilisant THREE.

juste quelques notions de javascript te seront nécessaires, et un peu de patience, de persévérence, et installer nodejs https://nodejs.org/fr/download

On va commencer par installer THREE, créer une page html, et le script qui permet de créer une scène puis un simple cube vert qui tourne. Commençons par les instructions d'installation que tu pourras trouver ici https://threejs.org/docs/index.html#manual/en/introduction/Installation

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

```
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

ET VOILA !
si tu as bien tout suivi, tu as maintenant un cube vert en 3D qui tourne
 !!! c'est pas plus compliqué que ça de faire de la 3D !!!

 essaie de voir à quel endroit dans le code, tu peux modifier les propriétés du cube : sa position, sa vitesse de rotation, sa couleur, sa taille...

 
![débuter en programmation 3D avec threejs](/doc/1%20-%20d%C3%A9buter%20en%20programmation%203D%20avec%20threejs.png) 


- Pour la prochaine étape, on tentera d'ajouter quelques cubes et de les organiser en spirale, par exemple.
- Si tu souhaites garder/ publier ton projet, gérer ses versions tu peux suivre le chapitre optionnel suivant.

- Sinon, passe tout de suite au suivant du suivant ((( !!!! y'a pas un mot pour dire ça, "le suivant du suivant ??? " Jacques Brel... une idée ???? https://www.dailymotion.com/video/x68cxw )))


# (optionnel) publier ton projet sur github

![création dépot git](/doc/2%20-%20cr%C3%A9ation%20depot%20git.png)

- ajoute un fichier .gitignore avec juste "node_modules" si tu souhaite utiliser git comme gestionnaire de version
 - initialise ton depot local avec `git init`
 - sur github créé un nouveau dépôt avec le même nom que ton dossier, laisse coché "Public" et ne modifie aucune autre option (n'initialise pas le projet avec le README, le gitignore ou la license, sinon, tu ne pourras pas profiter des indications de la prochaine étape)
 - suis les indications de l'encart "... or push an existing repository from the command line"

l'exemple est à adapter selon ton nom d'utilisateur et le nom de ton dépot

 ```
git remote add origin https://github.com/scenaristeur/spirale.git
git branch -M main
git push -u origin main
```

- la dernière commande te donne un message d'erreur. C'est normal, avant de pousser tes fichiers vers github, tu dois d'abord les ajouter et les commiter. 
Cela se fait avec les commandes

```
git add .
git commit -m "initialisation"
```

et tu peux alors reprendre la commande 

```
git push -u origin main
```

![git push](/doc/3%20-%20git%20push.png)

- A chaque fois que feras des modifications et que tu voudras les publier, reproduis ces trois étapes en modifiant dans le commit "Initialisation" par un texte décrivant la nature du changement, comme par exemple 

```
git add .
git commit -m "mise à jour du fichier de documentation"
git push
```

- tu peux alors rafraichir la page github, et constater que ton code est en ligne. Attention, à ne pas y mettre d'information confidentielle, comme les mots de passe !

![code sur github](/doc/4%20-%20code%20sur%20github.png)


- en cas de doute pour les commandes git, `git status` peut t'indiquer les fichiers modifiés, ceux qui sont à committer ...

![code sur github](/doc/5%20-%20git%20status.png)

# modifier le projet pour en faire une spirale

- maintenat que l'on a un cube qui tourne, essayons d'en ajouter quelques autres
- ajout d'une fonction addCubes() qui permet d'ajouter 100 cubes
- la fonction animation a été modifiée également pour pouvoir les retrouver et ne faire tourner qu'eux (rotation)
- ajout d'OrbitControl pour permettre de déplacer la caméra

```
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
```


# organisation de nos cubes sous forme de spirale

- ajout des constantes
```
const radius = 3
const cube_per_spire = 50
const spire_height = 0.2
```
et utilisations de celles-ci dans la fonction addCubes()
```
let angle = i * (Math.PI * 2 / cube_per_spire)
let x = radius * Math.cos(angle)
let y = i * spire_height
let z = radius * Math.sin(angle)
cube.position.set(x, y, z)
```
ce qui nous donne maintenant `main.js`

et en intégrale 
```
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

const cube_number = 100
const radius = 3
const cube_per_spire = 50
const spire_height = 0.2

addCubes()

function addCubes() {
   for (let i = 0; i < cube_number; i++) {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
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

    scene.traverse((child) => {
        if (child.userData.type === "cube") {
            child.rotation.x += 0.01;
            child.rotation.y += 0.01;
        }
    });

    renderer.render(scene, camera);
}

animate();

```


Et voilà pour notre spirale de cubes !!!

![spirale de cubes](/doc/6%20-%20spirale%20de%20cubes.png)




# ajout du raycaster pour attraper le clic sur un cube
- https://threejs.org/docs/index.html?q=ray#api/en/core/Raycaster

modification des propriétés de la caméra
```
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.set( 0, 20, 100 );
```


```
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
```
- ajout de onPointerMove()
- ajout de `window.addEventListener( 'pointermove', onPointerMove );` pour attraper les mouvements de la souris
- et modification de la fonction animate, cubes en survol en rouge, les autres en vert, récupération de l'objet cliqué dans la console


![click cube](/doc/7%20-%20click%20cube.png)





```
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

const cube_number = 100
const radius = 3
const cube_per_spire = 50
const spire_height = 0.2

addCubes()

function addCubes() {
    for (let i = 0; i < cube_number; i++) {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
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
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
animate();



```

# material
-  tu peux aussi choisir d'autres meteriaux pour tes cubes : https://threejs.org/docs/#api/en/materials/MeshPhysicalMaterial

```
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

```