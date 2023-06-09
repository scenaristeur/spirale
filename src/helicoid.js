import * as THREE from "three";
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js';
import { ParametricGeometries} from 'three/examples/jsm/geometries/ParametricGeometries.js';



export class Helicoid {
  constructor(options) {
    this.options = options;
    console.log(this.options);
    return this.init();
  }

  init() {
    let material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });
    let shape_function;
    switch (this.options.type) {
      case "catenoid":
        shape_function = this.catenoid;
        break;
        case "catenoid2":
          shape_function = this.catenoid2;
          break;
      case "hyperbolic":
          shape_function = this.hyperbolic;
        break;
        case "klein":
                 shape_function = ParametricGeometries.klein
          break;
      default:
        console.log("type unknown", this.options.type);
        break;
    }

    let geometry = new ParametricGeometry(
      shape_function,
      this.options.slices,
      this.options.stacks
    );
    let helicoidMesh = new THREE.Mesh(geometry, material);
    helicoidMesh.position.set(this.options.x, this.options.y, this.options.z);
    helicoidMesh.name = this.options.name;
    return helicoidMesh;
  }



  catenoid(u,v,target) {
 
       //https://en.wikipedia.org/wiki/Helicoid
    /*var v = (r - .5) * 20;
    var u = 2 * 5 * Math.PI * t;
    let a = radius1;
     let x = Math.cos(a) * Math.sinh(v / 5) * Math.sin(u / 5) + Math.sin(a) * Math.cosh(v / 5) * Math.cos(u / 5);
    let y = -Math.cos(a) * Math.sinh(v / 5) * Math.cos(u / 5) + Math.sin(a) * Math.cosh(v / 5) * Math.sin(u / 5);
    let z = u / 5 * Math.cos(a) + v / 5 * Math.sin(a); */
    /*
    where ρ and θ range from negative infinity to positive infinity, while α is a constant. If α is positive, then the helicoid is right-handed as shown in the figure; if negative then left-handed. 
    x=\rho \cos(\alpha \theta ),\ 
    y = ρ sin ⁡ ( α θ ) ,   y=\rho \sin(\alpha \theta ),\ 
    z = θ ,   z=\theta ,\ */
   /*  let a = 4
    let x = 1 //r * Math.cos(a * t)
    let y = 1//r * Math.sin(a * t)
    let z = 1//t */
   // return new THREE.Vector3(y, z, x);
   //let alpha = Math.PI * 2 * (u - 0.5); // transformer u en (u-0.5) double
   let theta = Math.PI * 2 * (v - 0.5); // multiplie le couches (v - 0.5); sympa : (v - 0.1);

   let  a = 20
      // hyperbola
     // let bottom = 1 + Math.cosh(alpha) * Math.cosh(theta);
      // selon wolfram // hyperbole
      let x = u*Math.cos(a * v) //(Math.sinh(theta) * Math.cos(5 * alpha)) / bottom;
      let z = theta//(Math.sinh(theta) * Math.sin(5 * alpha)) / bottom;
      let y = u*Math.sin(a * v) //(Math.cosh(theta) * Math.sinh(alpha)) / bottom;
      target.set(x, y, z);
  }
  catenoid2(u, v, target) {
    // console.log(u,v, target)
    //https://en.wikipedia.org/wiki/Helicoid
    /*var v = (r - .5) * 20;
    var u = 2 * 5 * Math.PI * t;
    let a = radius1;
     let x = Math.cos(a) * Math.sinh(v / 5) * Math.sin(u / 5) + Math.sin(a) * Math.cosh(v / 5) * Math.cos(u / 5);
    let y = -Math.cos(a) * Math.sinh(v / 5) * Math.cos(u / 5) + Math.sin(a) * Math.cosh(v / 5) * Math.sin(u / 5);
    let z = u / 5 * Math.cos(a) + v / 5 * Math.sin(a); */
    /*
    where ρ and θ range from negative infinity to positive infinity, while α is a constant. If α is positive, then the helicoid is right-handed as shown in the figure; if negative then left-handed. 
    x=\rho \cos(\alpha \theta ),\ 
    y = ρ sin ⁡ ( α θ ) ,   y=\rho \sin(\alpha \theta ),\ 
    z = θ ,   z=\theta ,\ */
   /*  let a = 4
    let x = 1 //r * Math.cos(a * t)
    let y = 1//r * Math.sin(a * t)
    let z = 1//t */
   // return new THREE.Vector3(y, z, x);
  // let alpha = Math.PI * 2 * (u - 0.5); // transformer u en (u-0.5) double
   //let theta = Math.PI * 2 * (v - 0.5); // multiplie le couches (v - 0.5); sympa : (v - 0.1);

let  a = 20
   // hyperbola
  // let bottom = 1 + Math.cosh(alpha) * Math.cosh(theta);
   // selon wolfram // hyperbole
   let x = u*Math.cos(a * v) //(Math.sinh(theta) * Math.cos(5 * alpha)) / bottom;

   let y = u*Math.sin(a * v) //(Math.cosh(theta) * Math.sinh(alpha)) / bottom;
   let z = v//(Math.sinh(theta) * Math.sin(5 * alpha)) / bottom;
   target.set(x, y, z);
}
  hyperbolic(u,v,target) {
    //console.log(u,v, target)
    let alpha = Math.PI * 2 * (u - 0.5); // transformer u en (u-0.5) double
    let theta = Math.PI * 2 * (v - 0.5); // multiplie le couches (v - 0.5); sympa : (v - 0.1);


    // hyperbola
    let bottom = 1 + Math.cosh(alpha) * Math.cosh(theta);
    // selon wolfram // hyperbole
    let x = (Math.sinh(theta) * Math.cos(5 * alpha)) / bottom;
    let z = (Math.sinh(theta) * Math.sin(5 * alpha)) / bottom;
    let y = (Math.cosh(theta) * Math.sinh(alpha)) / bottom;

    target.set(x, y, z);
  }
  onEngineTick() {
    console.log("tick");
  }
}
