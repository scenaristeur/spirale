import * as THREE from "three";
// no raycaster, use of onNodeHover, onNodeClick
// const raycaster = new THREE.Raycaster();
// const pointer = new THREE.Vector2();
// let current = null;

export class Animation {
  constructor(graph) {
    this.graph = graph;
    this.onEngineTick();
    this.init()
  }

  init() {
    let graph = this.graph
    // function onPointerMove(event) {
    //   // calculate pointer position in normalized device coordinates
    //   // (-1 to +1) for both components
    //   pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    //   pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    // }
    // function onClick(event) {
    //   current != null
    //     ? console.log("object clicked", current.object.name, current.object)
    //     : "";
    //   //  console.log(camera) // utile pour récupérer la position de la camera
    // }
    function onWindowResize() {
      graph.camera().aspect = window.innerWidth / window.innerHeight;
      graph.camera().updateProjectionMatrix();
      graph.renderer().setSize(window.innerWidth, window.innerHeight);
    }
    // window.addEventListener("pointermove", onPointerMove);
    // window.addEventListener("click", onClick);
    window.addEventListener("resize", onWindowResize, false);
    //console.log(this.graph.scene().camera)
  }

  onEngineTick() {
    // console.log("tick");
    //let start = Math.trunc(time / 1000);

    //let val;
   // raycaster.setFromCamera(pointer, this.graph.camera());

    this.graph.scene().traverse((child) => {
      switch (child.userData.type) {
        case "cube":
          child.rotation.x += 0.01;
          child.rotation.y += 0.01;
          child.material.color.set(0x00ff00);
          break;
        case "now_repere":
          // case "start_repere":
          // if (child.userData.type === "now_repere") {
          //   val = now;
          // }
          // if (child.userData.type === "start_repere") {
          //   val = start;
          // }
          let now = Math.trunc(Date.now() / 1000);
          // console.log(now)
          //let z = Math.trunc(second / 60) */
          let angle = (-now * Math.PI) / 30 + Math.PI / 2;
          child.position.x = Math.cos(angle);
          child.position.y = Math.sin(angle);

          break;

        default:
          break;
      }

      // calculate objects intersecting the picking ray
      // const intersects = raycaster.intersectObjects(scene.children);
      // for (let i = 0; i < intersects.length; i++) {
      //   intersects[i].object.userData.type == "cube"
      //     ? intersects[i].object.material.color.set(0xff0000)
      //     : "";
      //   // console.log(intersects[i].object.name)
      // }
      // current = intersects[0] || null;

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
  }
}
