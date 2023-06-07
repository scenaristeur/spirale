import SpriteText from "three-spritetext";

export class NodeTool {
  constructor(params) {
    this.params = params;
  }
  text(node) {
    const sprite = new SpriteText("THIS IS A NODE !" + node.id);
    sprite.material.depthWrite = true; //false; // make sprite background transparent
    sprite.color = node.color || "#ffffff";
    sprite.textHeight = 8;
    return sprite;
  }
  coords(i) {
    let params = this.params;
    var u = (i / params.N) * Math.PI*2 * params.progression; // Utilise une progression circulaire pour u
    var v = (i / params.N) *Math.PI*2*params.sens; // Utilise une progression linéaire pour v
    let bottom = 1 + Math.cosh(v) * Math.cosh(u);
    var x = (params.longueur * (Math.sinh(v) * Math.cos(params.strates * u))) / bottom;
    var y = (params.longueur * (Math.sinh(v) * Math.sin(params.strates * u))) / bottom;
    var z = (params.longueur * (Math.cosh(v) * Math.sinh(u))) / bottom;
    return { x, y, z };
  }

  coords1(i){
    let u = 360 *i
    let v = 254*i
    let alpha = Math.PI * 2 * (u - 0.5); // transformer u en (u-0.5) double
    let theta = Math.PI * 2 * (v - 0.5); // multiplie le couches (v - 0.5); sympa : (v - 0.1);


    // hyperbola
    let bottom = 1 + Math.cosh(alpha) * Math.cosh(theta);
    // selon wolfram // hyperbole
    let x = (Math.sinh(theta) * Math.cos(5 * alpha)) / bottom;
    let z = (Math.sinh(theta) * Math.sin(5 * alpha)) / bottom;
    let y = (Math.cosh(theta) * Math.sinh(alpha)) / bottom;
console.log(x,y,z)
    return { x, y, z };
  }

  resetNodes(graph){
    this.params = {
        N: 300,
        progression: -1.1,
        sens: -2.2,
        longueur: 2000, // Ajuste cette valeur pour modifier la taille de l'hélicoïde
        strates: 170, // Ajuste cette valeur pour modifier la torsion de l'hélicoïde
      };
    console.log("reset blocks",this.params)
    this.updateNodes(graph)
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
    console.log(graph);
    let {nodes, links} = graph.graphData();
    //console.log(nodes)
    nodes.forEach((n) => {
      let coords = this.coords(n.id);
      n.fx = coords.x;
      n.fy = coords.y;
      n.fz = coords.z;
    });

    graph.graphData({nodes, links})



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
