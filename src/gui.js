import { GUI } from "dat.gui";

import { NodeTool } from "./node_tool";

export class Gui {
  constructor(graph,params) {
    this.graph = graph;
    this.params = params
    console.log(this.graph);
    const gui = new GUI({
      /* autoPlace: false,*/ /*width: 400,*/ useLocalStorage: true,
    });

    let parameters = {
      resetCam: function () {
        graph.cameraPosition({
          x: 0,
          y: 0,
          z: 1000,
          lookAt: { x: 0, y: 0, z: 0 },
        });
      },
    };
    // reset Camera
    const cameraFolder = gui.addFolder("Camera");
    cameraFolder.add(parameters, "resetCam").name("Reset Camera");
    cameraFolder.open();

    const helicFolder = gui.addFolder("Helic");
    helicFolder.open()
    helicFolder.add(params, 'progression', -2*Math.PI, 2*Math.PI).name("progression").onChange(p =>{
        console.log(p)
        let nt = new NodeTool(this.params);
        let nodes = graph.graphData().nodes
        console.log(nodes)
        nodes.forEach(n => {
            let coords = nt.coords(n.id)
            n.fx = coords.x
            n.fy = coords.y
            n.fz = coords.z
        });
    })
    helicFolder.add(params, 'expansion_inverse', -2*Math.PI, 2*Math.PI).name("Expansion inverse")  

  }
}
