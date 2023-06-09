import { GUI } from "dat.gui";

export class Gui {
  constructor(graph, params, nt) {
    this.graph = graph;
    this.params = params;
    this.nt = nt;
    console.log(this.graph);

    this.init();
  }

  init() {
    let gui = this.gui =  new GUI({
      /* autoPlace: false,*/ /*width: 400,*/ useLocalStorage: true,
    });
    //let resetCam = this.resetCam()
    // let parameters = {
    //   resetCam: function(){
    //     this.resetCam()
    //   },
    //   reset: this.resetNodes,
    //   addNow: this.addNow,
    //   addOneDay: this.addOneDay,
    //   getSolid: this.getSolid,
    // };

    // reset Camera
    const cameraFolder = gui.addFolder("Camera");
    cameraFolder.add(this, "resetCam").name("Reset Camera");
    cameraFolder.open();

    const helicFolder = gui.addFolder("Helic");
    helicFolder.open();
    helicFolder
      .add(this.params, "longueur", 0, 2000, 10, 2000)
      .name("longueur")
      .onChange((p) => {
        this.nt.updateNodes(this.graph);
      });
    helicFolder
      .add(this.params, "sens", -2 * Math.PI, 2 * Math.PI, 0.1, -2.2)
      .name("Sens")
      .onChange((p) => {
        this.nt.updateNodes(this.graph);
      });
    helicFolder
      .add(this.params, "strates", 0, 240, 1, 170)
      .name("strates")
      .onChange((p) => {
        this.nt.updateNodes(this.graph);
      });

    helicFolder
      .add(this.params, "progression", -2 * Math.PI, 2 * Math.PI, 0.1, -1.1)
      .name("Progression")
      .onChange((p) => {
        this.nt.updateNodes(this.graph);
      });

    helicFolder.add(this.params, "fixed").name("Fixed");
    helicFolder.add(this, "resetNodes").name("Reset");
    // add nodes
    gui.add(this, "addNow").name("Add an event now");
    gui.add(this, "addOneDay").name("Add an event passed 24 hours");
    gui.add(this, "getSolid").name("Get Solid data");
  }

  resetCam() {
    this.graph.cameraPosition({
      x: 0,
      y: 0,
      z: 1000,
      lookAt: { x: 0, y: 0, z: 0 },
    });
    this.graph.camera().updateProjectionMatrix()
  }

  resetNodes() {
    this.nt.resetNodes(this.graph);
  }
  addNow() {
    let ball = this.nt.createEventBall();
    this.addNode(ball, this.graph);
  }
  addOneDay() {
    let ball = this.nt.createEventBall({
      timestamp: Date.now() - 1000 * 60 * 60 * 24,
    }); // negative for futur
    this.addNode(ball, this.graph);
  }
  getSolid() {
    let options = { url: "https://spoggy-test2.solidcommunity.net/public/" };
    //getData(url, null, nt, addNode, graph);
    this.fetchSolidData(options).then((jsonld) => {
      
      console.log(jsonld);
      this.processJsonld({jsonld: jsonld, url: options.url});
      // nodes.forEach(n => {addNode(n)})
    }).catch(error => {
      console.log(error.message); // 'An error has occurred: 404'
    });
  }

  addNode(n, graph) {
    let { nodes, links } = graph.graphData();
    nodes.push(n);
    let link = { source: n.id, target: n.relative_time };
    links.push(link);
    graph.graphData({ nodes, links });
  }

  async fetchSolidData(options = {}) {
    const response = await fetch(options.url, {
      method: "GET",
      headers: {
        Accept: "application/ld+json",
      },
    });

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const jsonld = await response.json();
    return jsonld;
  }

  processJsonld(data) {
    let nt = this.nt;
    let addNode = this.addNode;
    let graph = this.graph
    let ressources = data.jsonld["@graph"];
    // ressources.forEach((r) =>
    for (let r of ressources) {
      console.log(r);
      let id = r["@id"];
      if (!id.startsWith("http") && id.endsWith(":")) {
        // @id is short remove the ":" and get from context
        id = id.slice(0, -1);
        id = data.jsonld["@context"][id];
      }
      let modified =
        r["dct:modified"]["@value"] || r["dct:modified"][0]["@value"]; // can be array
      console.log(modified);
      if (modified != undefined) {
        let timestamp = new Date(modified).getTime();
        console.log(id, modified);
        let ball = nt.createEventBall({ id, modified, timestamp });
        addNode(ball, graph);
        if (r["@type"].includes("ldp:BasicContainer")) {
          //  this.fetch()
          console.log("to fetch", id);
          this.fetchSolidData({url: id, parent: data.url}).catch(error => {
            console.log(error.message); // 'An error has occurred: 404'
          });
          //callback(id, url, nt, callback, graph)
        }
      } else {
        console.warn("modified undefined", r);
      }
    }
    // );
  }

  // getData(url, parent = null, nt, callback, graph) {
  //   console.warn("fetch", url);

  //      .then(function (json) {
  //       console.log(json);
  //       let ressources = json["@graph"];
  //       ressources.forEach((r) => {
  //         console.log(r);
  //         let id = r["@id"];
  //         if (!id.startsWith("http") && id.endsWith(":")) {
  //           // @id is short remove the ":" and get from context
  //           id = id.slice(0, -1);
  //           id = json["@context"][id];
  //         }
  //         let modified =
  //           r["dct:modified"]["@value"] || r["dct:modified"][0]["@value"]; // can be array
  //         console.log(modified);
  //         if (modified != undefined) {
  //           let timestamp = new Date(modified).getTime();
  //           console.log(id, modified);
  //           let ball = nt.createEventBall({ id, modified, timestamp });
  //           callback(ball, graph);
  //           if (r["@type"].includes("ldp:BasicContainer")) {
  //             //  this.fetch()
  //             console.log("to fetch", id);
  //             callback(id, url, nt, callback, graph)
  //           }
  //         } else {
  //           console.warn("modified undefined", r);
  //         }
  //       });
  //       // const objectURL = URL.createObjectURL(myBlob);
  //       // myImage.src = objectURL;
  //     });
  // }
}
