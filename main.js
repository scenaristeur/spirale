// https://observablehq.com/d/b75bc06775254516

import ForceGraph3D from "3d-force-graph";
//import { Camera } from "./src/camera.js";
import { Gui } from "/src/gui";
import { Environnement } from "/src/environnement";
import { NodeTool } from "./src/node_tool";
import { LinkTool } from "./src/link_tool";
import { Animation } from "./src/animation";

import { Helicoid } from "./src/helicoid";
import { addRepere } from "/modules/reperes.js";
import { addCubes } from "/modules/cubes.js";
import { D3Spiral } from "/src/d3spiral.js";

let nodes = [];
let params = {
  N: 361,
  longueur: 2000, // a Ajuste cette valeur pour modifier la taille de l'hélicoïde
  sens: -2.2, // expansion inverse
  strates: 99, //170, // tau Ajuste cette valeur pour modifier la torsion de l'hélicoïde
  progression: -0.4, //-1.1,
  fixed: true,
};

let nt = new NodeTool(params);
let lt = new LinkTool(params);

for (let i = 0; i < params.N; i++) {
  // chatgpt proposition
  // var numberOfPoints = 100;

  let coords = nt.coords(i);
  let node = {
    id: i,
    name: "ball" + i,
    color: "green",
    group: "text_spirale",
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
    return nt.nodeObject(node);
  })

  .onNodeClick((node, evt) => {
    console.log(node, evt);
    // Graph.cameraPosition(node.x, node.y, node.z + 3);
    // Graph.camera().lookAt(node.x, node.y, node.z);
  })
  .onNodeHover((node, evt) => {
    console.log(node, evt);
  })
  .onNodeRightClick((node, evt) => {
    console.log(node, evt);
  })
  // .linkThreeObjectExtend(true)
  // .linkThreeObject((link) => {
  // return lt.linkObject(link)
  // })
  // .linkPositionUpdate((sprite, { start, end }) => {
  //   const middlePos = Object.assign(
  //     ...["x", "y", "z"].map((c) => ({
  //       [c]: start[c] + (end[c] - start[c]) / 2, // calc middle point
  //     }))
  //   );

  //   // Position sprite
  //   Object.assign(sprite.position, middlePos);
  // });

//.d3Force("center");

// .d3Force("link")
// .distance(20)

let gui = new Gui(Graph, params, nt);
let environnement = new Environnement(Graph);

Graph.d3Force("center", null)
//.d3Force('link', null)
// .d3Force("charge", null)

addRepere(Graph.scene());
addCubes(Graph.scene());

let animation = new Animation(Graph);
Graph.onEngineTick(() => {
  animation.onEngineTick();
});

let isAnimationActive = true;
document
  .getElementById("animationToggle")
  .addEventListener("click", (event) => {
    isAnimationActive ? Graph.pauseAnimation() : Graph.resumeAnimation();

    isAnimationActive = !isAnimationActive;
    event.target.innerHTML = `${
      isAnimationActive ? "Pause" : "Resume"
    } Animation`;
  });

let helicoid1 = new Helicoid({
  type: "catenoid",
  slices: 250,
  stacks: 400,
  x: -2,
  y: -2,
  z: 0,
});
let helicoid2 = new Helicoid({
  type: "catenoid2",
  slices: 25,
  stacks: 400,
  x: -2,
  y: 2,
  z: 0,
});
let HyperbolicHelicoid = new Helicoid({
  type: "hyperbolic",
  slices: 360,
  stacks: 254,
  x: -2,
  y: 0,
  z: 0,
});

// let klein = new Helicoid({
//   type: "klein",
//   slices: 25,
//   stacks: 25,
//   x: -1,
//   y: -1,
//   z: 0,
// });

Graph.scene().add(helicoid1);
Graph.scene().add(helicoid2);
Graph.scene().add(HyperbolicHelicoid);
//Graph.scene().add(klein);

let d3spiral = new D3Spiral(Graph, gui.gui);
