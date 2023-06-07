import SpriteText from "three-spritetext";

export class NodeTool {
  constructor(params) {
    this.params =params
  }
  text(node) {
    const sprite = new SpriteText("THIS IS A NODE !" + node.id);
    sprite.material.depthWrite = true; //false; // make sprite background transparent
    sprite.color = node.color || "#ffffff";
    sprite.textHeight = 8;
    return sprite;
  }
  coords(i){
    let params = this.params
    var u = (i / params.N) * Math.PI * params.progression; // Utilise une progression circulaire pour u
    var v = (i / params.N) * params.expansion_inverse; // Utilise une progression linéaire pour v
    let bottom = 1 + Math.cosh(v) * Math.cosh(u);
    var x = (params.a * (Math.sinh(v) * Math.cos(params.tau * u))) / bottom;
    var y = (params.a * (Math.sinh(v) * Math.sin(params.tau * u))) / bottom;
    var z = (params.a * (Math.cosh(v) * Math.sinh(u))) / bottom;
    return {x,y,z}
  }
}
