import * as THREE from "three";

export class Animation {
  constructor(graph) {
    this.graph = graph;
  }

  onEngineTick() {
    // console.log("tick");
    //let start = Math.trunc(time / 1000);

    //let val;

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
