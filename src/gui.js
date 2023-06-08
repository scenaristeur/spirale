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
    let addNode = this.addNode;
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

      addNow: function () {
        let ball = nt.createEventBall();
        addNode(ball, graph);
      },
      addOneDay: function () {
        let ball = nt.createEventBall({
          timestamp: Date.now() - 1000 * 60 * 60 * 24,
        }); // negative for futur
        addNode(ball, graph);
      },
      getSolid: function () {
        console.log("get");
        let url = "https://spoggy-test2.solidcommunity.net/public/";
        fetch(url, {
          method: "GET",
          headers: {
            Accept: "application/ld+json",
          },
        })
          .then(function (response) {
            console.log(response);
            return response.json();
          })
          .then(function (json) {
            console.log(json["@graph"]);
            let ressources = json["@graph"];
            ressources.forEach((r) => {
              // console.log(r);
              let id = r["@id"];
              let modified = r["dct:modified"]["@value"];
              let timestamp = new Date(r["dct:modified"]["@value"]).getTime();
              //console.log(id, modified);
              let ball = nt.createEventBall({ id, modified, timestamp });
              addNode(ball, graph);
            });
            // const objectURL = URL.createObjectURL(myBlob);
            // myImage.src = objectURL;
          });
      },
    };
    // reset Camera
    const cameraFolder = gui.addFolder("Camera");
    cameraFolder.add(parameters, "resetCam").name("Reset Camera");
    cameraFolder.open();

    const helicFolder = gui.addFolder("Helic");
    helicFolder.open();
    helicFolder
      .add(params, "longueur", 0, 2000, 10, 2000)
      .name("longueur")
      .onChange((p) => {
        this.nt.updateNodes(this.graph);
      });
    helicFolder
      .add(params, "sens", -2 * Math.PI, 2 * Math.PI, 0.1, -2.2)
      .name("Sens")
      .onChange((p) => {
        this.nt.updateNodes(this.graph);
      });
    helicFolder
      .add(params, "strates", 0, 240, 1, 170)
      .name("strates")
      .onChange((p) => {
        this.nt.updateNodes(this.graph);
      });

    helicFolder
      .add(params, "progression", -2 * Math.PI, 2 * Math.PI, 0.1, -1.1)
      .name("Progression")
      .onChange((p) => {
        this.nt.updateNodes(this.graph);
      });

    helicFolder.add(parameters, "reset").name("Reset");
    // add nodes
    gui.add(parameters, "addNow").name("Add an event now");
    gui.add(parameters, "addOneDay").name("Add an event passed 24 hours");
    gui.add(parameters, "getSolid").name("Fetch data");
  }
  addNode(n, graph) {
    let { nodes, links } = graph.graphData();
    nodes.push(n);
    let link = { source: n.id, target: 0 };
    links.push(link);
    graph.graphData({ nodes, links });
  }
}
