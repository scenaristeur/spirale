import { GUI } from "dat.gui";

export class Gui {
  constructor(graph, params, nt) {
    this.graph = graph;
    this.params = params;
    this.nt = nt;
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
      reset: function () {
        nt.resetNodes(graph);
      },
    };
    // reset Camera
    const cameraFolder = gui.addFolder("Camera");
    cameraFolder.add(parameters, "resetCam").name("Reset Camera");
    cameraFolder.open();

    const helicFolder = gui.addFolder("Helic");
    helicFolder.open();
    helicFolder
    .add(params, "longueur", 0, 2000, 10,2000)
    .name("longueur")
    .onChange((p) => {
      this.nt.updateNodes(this.graph);
    })
    helicFolder.add(params, 
        "sens", -2 * Math.PI, 2 * Math.PI,
         0.1, -2.2)
    .name("Sens")
    .onChange((p) => {
      this.nt.updateNodes(this.graph);
    });
    helicFolder
    .add(params, "strates", 0, 240, 1,170)
    .name("strates")
    .onChange((p) => {
      this.nt.updateNodes(this.graph);
    });

    helicFolder
      .add(params, "progression", 
      -2 * Math.PI, 2 * Math.PI
      ,0.1,-1.1)
      .name("Progression")
      .onChange((p) => {
        this.nt.updateNodes(this.graph);
      });
  



    helicFolder.add(parameters, "reset").name("Reset");
  }

  updateNodes(g) {}
}
