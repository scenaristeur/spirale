// import * as d3 from "d3";

// import {
//   axisRadialInner,
//   axisRadialOuter,
// } from "d3-radial-axis/dist/d3-radial-axis";
// https://github.com/vasturiano/d3-radial-axis/blob/master/example/spiral-axis.html

const INITIAL = {
  turns: 5,
  minR: 25, // px
};
const outerR = Math.min(window.innerWidth, window.innerHeight) / 4;

const controls = {
  "# turns": INITIAL.turns,
  "Inner Radius": INITIAL.minR,
  "Scale Exponent": 1,
};

export class D3Spiral {
  constructor(graph, gui) {
    this.graph = graph;

    gui.add(controls, "# turns", 0.25, 10).onChange((turns) => {
      angleScale.range([90, 90 + turns * 360].map(deg2rad));
      spiralAxis.ticks(turns * 8);
      render();
    });
    gui.add(controls, "Inner Radius", 0, outerR - 5).onChange((innerR) => {
      spiralAxis.startRadius(innerR);
      render();
    });
    gui.add(controls, "Scale Exponent", 1, 10).onChange((exp) => {
      angleScale.exponent(1 / exp);
      render();
    });

    const angleScale = d3
      .scalePow()
      .domain([0, 100])
      .range([90, INITIAL.turns * 360].map(deg2rad));
    const spiralAxis = d3
      .axisRadialInner(angleScale)
      .startRadius(INITIAL.minR)
      .endRadius(outerR - 5)
      .ticks(INITIAL.turns * 8);

    // Size canvas
    const svg = d3
      .select("#canvas")
      .attr("width", outerR ) //*2
      .attr("height", outerR ) //*2
      .attr("viewBox", `${-outerR} ${-outerR} ${outerR * 2} ${outerR * 2}`);

      // let d3Div = document.getElementById("d3_radial");
      // d3.select(d3Div).call(spiralAxis);
    // Add axis
     const axisEl = svg.append("g").classed("axis", true);

     render();

    function render() {
      axisEl.call(spiralAxis);
    }

    function deg2rad(deg) {
      return (deg * Math.PI) / 180;
    }
    /*
    var myAngleScale = d3
      .scaleLinear()
      .domain([-10, 10])
      .range([-Math.PI, Math.PI]);
    var myRadius = 100;
    var myRadialAxis = d3.axisRadialInner(myAngleScale, myRadius);
    console.log(myRadialAxis);
    let d3Div = document.getElementById("d3_radial");
    d3.select(d3Div).call(myRadialAxis);*/


    // let planeGeometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
    // let planeMaterial = new THREE.MeshLambertMaterial({
    //   color: 0xffff00,
    //   side: THREE.DoubleSide,
    //   wireframe: true
    // });
    // let plane = new THREE.Mesh(planeGeometry, planeMaterial);
    // plane.position.set(-100, -200, -100);
    // plane.name = "red plane"
    // plane.rotation.set(0.5 * Math.PI, 0, 0);
    // graph.scene().add(plane);
  }
}
