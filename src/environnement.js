import * as THREE from "three";

export class Environnement {
  constructor(graph) {
    this.graph = graph;
    let planeGeometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
    let planeMaterial = new THREE.MeshLambertMaterial({
      color: 0xffff00,
      side: THREE.DoubleSide,
      wireframe: true
    });
    let plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.set(-100, -200, -100);
    plane.name = "red plane"
    plane.rotation.set(0.5 * Math.PI, 0, 0);
    graph.scene().add(plane);
  }
}
