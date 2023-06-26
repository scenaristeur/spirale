import SpriteText from "three-spritetext";
import { v4 as uuidv4 } from "uuid";
import * as THREE from "three";
import { timeMonths } from "d3";

export class NodeTool {
  constructor(params) {
    this.params = params;
  }

  addNode(n, graph) {
    let { nodes, links } = graph.graphData();
    n.name == undefined ? (n.name = n.id) : "";
    nodes.push(n);
    let link = { source: n.id, target: n.relative_time, name: "modified" };

    links.push(link);
    if (n.parent != undefined) {
      let parent_link = { source: n.parent, target: n.id, name: "contains" };
      links.push(parent_link);
    }
    graph.graphData({ nodes, links });
  }

  addEventNode(n, graph) {
    console.log(n);
    let { nodes, links } = graph.graphData();
    nodes.push(n);
    let link_start = {
      source: n.id,
      target: this.relativeTime(n.start),
      name: "start",
    };
    console.log("link _start", link_start);
    links.push(link_start);

    if (n.end != undefined) {
      let link_end = {
        source: n.id,
        target: this.relativeTime(n.end),
        name: "end",
      };
      console.log("link_end", link_end);
      links.push(link_end);
    }

    graph.graphData({ nodes, links });
    // secondes en 1 an 60 x 60 x 24 x 365 = 31 536 000 secondes // 315360000 = 10 ans
    // let cent_ans = 3153600000; // represente l'integrale de la spirale en 300 noeuds
    // let dix_ans = 3153600000;

    // params.id == undefined ? (params.id = uuidv4()) : "";
    // params.timestamp == undefined ? (params.timestamp = Date.now()) : "";
    // // console.log(params);
    // params.relative_time = Math.floor(
    //   (params.timestamp * 360) / dix_ans / 1000 / 2 // div par 2 pour 5 ans
    // );
    // // let { x, y, z } = this.coords(params.relative_time);
    // // params.x = x;
    // // params.y = y;
    // // params.z = z;
    // //  console.log(params);
  }
  relativeTime(t) {
    let dix_ans = 3153600000;
    return Math.floor(
      (t * 360) / dix_ans / 1000 / 2 // div par 2 pour 5 ans
    );
  }

  createEventBall(params = {}) {
    // secondes en 1 an 60 x 60 x 24 x 365 = 31 536 000 secondes // 315360000 = 10 ans
    // let cent_ans = 3153600000; // represente l'integrale de la spirale en 300 noeuds
    let dix_ans = 3153600000;

    params.id == undefined ? (params.id = uuidv4()) : "";
    params.timestamp == undefined ? (params.timestamp = Date.now()) : "";
    // console.log(params);
    params.relative_time = Math.floor(
      (params.timestamp * 360) / dix_ans / 1000 / 2 // div par 2 pour 5 ans
    );
    // let { x, y, z } = this.coords(params.relative_time);
    // params.x = x;
    // params.y = y;
    // params.z = z;
    //  console.log(params);

    return params;
  }

  nodeObject(node) {
    let nodeObject;
    switch (node.group) {
      case "text_spirale":
        nodeObject = new SpriteText("THIS IS A NODE !" + node.id);
        nodeObject.material.depthWrite = true; //false; // make sprite background transparent
        nodeObject.color = node.color || "#ffffff";
        nodeObject.textHeight = 8;
        break;

      default:
        // nodeObject = new SpriteText(node.id);
        // nodeObject.material.depthWrite = true; //false; // make sprite background transparent
        // nodeObject.color = "#ffff00";
        // nodeObject.textHeight = 8;
        const geometry = new THREE.SphereGeometry(15, 32, 16);
        const material = new THREE.MeshBasicMaterial({
          color: node.color || 0xffff00,
        });
        nodeObject = new THREE.Mesh(geometry, material);

        break;
    }
    return nodeObject;
  }

  coords(i) {
    let params = this.params;
    var u = (i / params.N) * Math.PI * 2 * params.progression; // Utilise une progression circulaire pour u
    var v = (i / params.N) * Math.PI * 2 * params.sens; // Utilise une progression linéaire pour v
    let bottom = 1 + Math.cosh(v) * Math.cosh(u);
    var x =
      (params.longueur * (Math.sinh(v) * Math.cos(params.strates * u))) /
      bottom;
    var y =
      (params.longueur * (Math.sinh(v) * Math.sin(params.strates * u))) /
      bottom;
    var z = (params.longueur * (Math.cosh(v) * Math.sinh(u))) / bottom;
    return { x, y, z };
  }

  coords1(i) {
    let u = 360 * i;
    let v = 254 * i;
    let alpha = Math.PI * 2 * (u - 0.5); // transformer u en (u-0.5) double
    let theta = Math.PI * 2 * (v - 0.5); // multiplie le couches (v - 0.5); sympa : (v - 0.1);

    // hyperbola
    let bottom = 1 + Math.cosh(alpha) * Math.cosh(theta);
    // selon wolfram // hyperbole
    let x = (Math.sinh(theta) * Math.cos(5 * alpha)) / bottom;
    let z = (Math.sinh(theta) * Math.sin(5 * alpha)) / bottom;
    let y = (Math.cosh(theta) * Math.sinh(alpha)) / bottom;
    console.log(x, y, z);
    return { x, y, z };
  }

  resetNodes(graph) {
    this.params = {
      N: 300,
      progression: -1.1,
      sens: -2.2,
      longueur: 2000, // Ajuste cette valeur pour modifier la taille de l'hélicoïde
      strates: 170, // Ajuste cette valeur pour modifier la torsion de l'hélicoïde
    };
    console.log("reset blocks", this.params);
    this.updateNodes(graph);
  }

  updateNodes(graph) {
    // ne semble pas fonctionner , est-ce ça qui plante ?
    // http://www.kevinsubileau.fr/informatique/boite-a-code/php-html-css/javascript-debounce-throttle-reduire-appels-fonction.html
    let traiterEvenementThrottle = this.throttle(
      this._updateNodes(graph),
      5000,
      false,
      true
    );
  }

  _updateNodes(graph) {
    // console.log(graph);
    let params = this.params;
    //console.log(params);
    let { nodes, links } = graph.graphData();
    //console.log(nodes)
    // nodes = nodes.filter((n) => n.group == "text_spirale");
    nodes.forEach((n) => {
      //console.log(params)
      if (n.group == "text_spirale") {
        let coords = this.coords(n.id);
        if (params.fixed == true) {
          n.fx = coords.x;
          n.fy = coords.y;
          n.fz = coords.z;
        } else {
          n.x = coords.x;
          n.y = coords.y;
          n.z = coords.z;
          delete n.fx;
          delete n.fy;
          delete n.fz;
        }
      }
    });
    //console.log(links)
    graph.graphData({ nodes, links });
  }
  /**
   * Retourne une fonction qui, tant qu'elle est appelée,
   * n'est exécutée au plus qu'une fois toutes les N millisecondes.
   * Paramètres :
   *  - func : la fonction à contrôler
   *  - wait : le nombre de millisecondes (période N) à attendre avant
   *           de pouvoir exécuter à nouveau la function func()
   *  - leading (optionnel) : Appeler également func() à la première
   *                          invocation (Faux par défaut)
   *  - trailing (optionnel) : Appeler également func() à la dernière
   *                           invocation (Faux par défaut)
   *  - context (optionnel) : le contexte dans lequel appeler func()
   *                          (this par défaut)
   */
  throttle(func, wait, leading, trailing, context) {
    var ctx, args, result;
    var timeout = null;
    var previous = 0;
    var later = function () {
      previous = new Date();
      timeout = null;
      result = func.apply(ctx, args);
    };
    return function () {
      var now = new Date();
      if (!previous && !leading) previous = now;
      var remaining = wait - (now - previous);
      ctx = context || this;
      args = arguments;
      // Si la période d'attente est écoulée
      if (remaining <= 0) {
        // Réinitialiser les compteurs
        clearTimeout(timeout);
        timeout = null;
        // Enregistrer le moment du dernier appel
        previous = now;
        // Appeler la fonction
        result = func.apply(ctx, args);
      } else if (!timeout && trailing) {
        // Sinon on s’endort pendant le temps restant
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  }
}
