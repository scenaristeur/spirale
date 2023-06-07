import SpriteText from 'three-spritetext';

export class NodeTool {
  constructor(graph) {
    // this.graph = graph;
    // console.log(this.graph);
  }
  text(node){
    console.log(node)
    const sprite = new SpriteText("THIS IS A NODE !" + node.id);
    sprite.material.depthWrite = false; // make sprite background transparent
    sprite.color = node.color|| "#ffffff";
    sprite.textHeight = 8;
    console.log(sprite)
    return sprite;
  }
}
