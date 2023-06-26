import { GUI } from "dat.gui";
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Solid } from "./solid";
import { EventManager } from "./eventManager";

export class Gui {
  constructor(graph, params, nt) {
    this.graph = graph;
    this.params = params;
    this.nt = nt;
    console.log(this.graph);
    this.solid = new Solid();
    this.eventManager = new EventManager();
    this.init();
  }

  init() {
    let options = (this.options = {
      url: "https://spoggy-test2.solidcommunity.net/public/",
    });
    let gui = (this.gui = new GUI({
      /* autoPlace: false,*/ /*width: 400,*/ useLocalStorage: true,
    }));
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
      .add(this.params, "strates", 0, 240, 1, 144)
      .name("strates")
      .onChange((p) => {
        this.nt.updateNodes(this.graph);
      });

    helicFolder
      .add(this.params, "progression", -2 * Math.PI, 2 * Math.PI, 0.1, -0.3)
      .name("Progression")
      .onChange((p) => {
        this.nt.updateNodes(this.graph);
      });

    helicFolder.add(this.params, "fixed").name("Fixed");
    helicFolder.add(this, "resetNodes").name("Reset");
    // add nodes
    gui.add(this, "addNow").name("Add an event now");
    gui.add(this, "addOneDay").name("Add an event passed 24 hours");
    gui.add(options, "url");
    gui.add(this, "getSolid").name("Get Solid Events");
    gui.add(this, "getEvents").name("Get Events");
  }

  resetCam() {
    // var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
    // var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 1, FAR = 10000; //NEAR = 0.1, FAR = 20000;

    //this.graph.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
    console.log(this.graph.camera(), this.graph.controls());
    this.graph.cameraPosition({
      x: 0,
      y: 0,
      z: 1000,
      lookAt: { x: 0, y: 0, z: 0 },
    });
    this.graph.camera().rotation.set(0, 0, 0);
    this.graph.camera().updateProjectionMatrix();
  }

  resetNodes() {
    this.nt.resetNodes(this.graph);
  }
  addNow() {
    let ball = this.nt.createEventBall();
    this.nt.addNode(ball, this.graph);
  }
  addOneDay() {
    let ball = this.nt.createEventBall({
      timestamp: Date.now() - 1000 * 60 * 60 * 24,
    }); // negative for futur
    this.nt.addNode(ball, this.graph);
  }
  getSolid() {
    this.solid.getDataset(this.options, this.graph, this.nt);
  }
  async getEvents() {
    let options = {};
    let events = await this.eventManager.getEvents(options);
    console.log("events", events);
    events.forEach((event) => {
      //let ball = this.nt.createEventBall(event); // negative for futur
      this.nt.addEventNode(event, this.graph);
    });
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
