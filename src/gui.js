import { GUI } from "dat.gui";

export class Gui {
  constructor(graph) {
    this.graph = graph;
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
  }
}
