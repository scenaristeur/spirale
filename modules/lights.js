import * as THREE from 'three';

export function addLights(scene) {
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
}