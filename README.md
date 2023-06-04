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


- La prochaine étape sera de former une spirale avec des sphères. si tu souhaites garder/ publier ton projet, gérer ses versions tu peux suivre le chapitre optionnel suivant.

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

# modifier le projet pour enfaire une spirale
