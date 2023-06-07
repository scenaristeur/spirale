// https://observablehq.com/d/b75bc06775254516

import ForceGraph3D from "3d-force-graph";
//import { Camera } from "./src/camera.js";
import { Gui } from "/src/gui.js";
import { Environnement } from "/src/environnement.js";
import { NodeTool } from "./src/node_tool";

let nodes = [];
let params = {
  N: 360,
  longueur: 2000, // a Ajuste cette valeur pour modifier la taille de l'hélicoïde
  sens: -2.2, // expansion inverse
  strates: 170, // tau Ajuste cette valeur pour modifier la torsion de l'hélicoïde
  progression: -1.1,
};

let nt = new NodeTool(params);

for (let i = 0; i < params.N; i++) {
  // chatgpt proposition
  // var numberOfPoints = 100;

  let coords = nt.coords(i);
  let node = {
    id: i,
    name: "ball" + i,
    color: "green",
    fx: coords.x, //hyperbol_helicoid.x, //helix.x,//i,
    fy: coords.y, //hyperbol_helicoid.y, //helix.y,//i,
    fz: coords.z, //hyperbol_helicoid.z, //helix.z,//i, // fixed position
    // rotation: {}
  };
  // node.rotation.y = rotation_y
  nodes.push(node);
}

const gData = {
  nodes: nodes,
  //links : []
  links: [...Array(params.N).keys()]
    .filter((id) => id)
    .map((id) => ({
      source: id,
      target: id - 1, //Math.round(Math.random() * (id-1))
    })),
};

// const gData = {
//   nodes: [...Array(N).keys()].map((i) => ({ id: i })),
//   links: [...Array(N).keys()]
//     .filter((id) => id)
//     .map((id) => ({
//       source: id,
//       target: Math.round(Math.random() * (id - 1)),
//     })),
// };

const Graph = ForceGraph3D()(document.getElementById("3d-graph"))
  .backgroundColor("#001b42")
  .graphData(gData)
  .nodeThreeObject((node) => {
    return nt.text(node);
  });

let gui = new Gui(Graph, params, nt);
let environnement = new Environnement(Graph);
