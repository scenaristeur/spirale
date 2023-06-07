import ForceGraph3D from "3d-force-graph";
//import { Camera } from "./src/camera.js";
import { Gui } from "/src/gui.js";

const N = 300;
const gData = {
  nodes: [...Array(N).keys()].map((i) => ({ id: i })),
  links: [...Array(N).keys()]
    .filter((id) => id)
    .map((id) => ({
      source: id,
      target: Math.round(Math.random() * (id - 1)),
    })),
};

const Graph = ForceGraph3D()(document.getElementById("3d-graph")).graphData(
  gData
);

let gui = new Gui(Graph);

