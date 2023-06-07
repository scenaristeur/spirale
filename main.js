import ForceGraph3D from "3d-force-graph";
//import { Camera } from "./src/camera.js";
import { Gui } from "/src/gui.js";
import { Environnement } from "/src/environnement.js";
import { NodeTool } from "./src/node_tool";

let nt = new NodeTool();
const N = 30;
const gData = {
  nodes: [...Array(N).keys()].map((i) => ({ id: i })),
  links: [...Array(N).keys()]
    .filter((id) => id)
    .map((id) => ({
      source: id,
      target: Math.round(Math.random() * (id - 1)),
    })),
};

const Graph = ForceGraph3D()(document.getElementById("3d-graph"))
  .backgroundColor("#001b42")
  .graphData(gData)
  .nodeThreeObject((node) => {
    return nt.text(node);
  });

let gui = new Gui(Graph);
let environnement = new Environnement(Graph);
