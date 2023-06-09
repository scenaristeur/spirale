import * as THREE from "three";

export function addRepere(scene) {
  /*     const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper); */
// reperess for secondes, minutes, hours... millenaires
  let reperes = [];
  reperes = reperes.concat(
    repere({
      type: "seconde",
      start: 0,
      number: 60,
      step: 5,
      color: 0xffff00,
      z_offset: 0,
    })
  );
  reperes = reperes.concat(
    repere({
      type: "minute",
      start: 0,
      number: 60,
      step: 5,
      color: 0x00ffff,
      z_offset: 1,
    })
  );
  reperes = reperes.concat(
    repere({
      type: "heure",
      start: 0,
      number: 24,
      step: 3,
      color: 0x00ff00,
      z_offset: 2,
    })
  );
  reperes = reperes.concat(
    repere({
      type: "jour",
      start: 1,
      number: 7,
      step: 1,
      color: 0xffff00,
      z_offset: 3,
    })
  );
  reperes = reperes.concat(
    repere({
      type: "semaine",
      start: 0,
      number: 4,
      step: 1,
      color: 0x00ffff,
      z_offset: 4,
    })
  );
  reperes = reperes.concat(
    repere({
      type: "mois",
      start: 0,
      number: 12,
      step: 1,
      color: 0x00ff00,
      z_offset: 5,
    })
  );
  reperes = reperes.concat(
    repere({
      type: "annee",
      start: 0,
      number: 10,
      step: 1,
      color: 0xffff00,
      z_offset: 6,
    })
  );
  reperes = reperes.concat(
    repere({
      type: "decenie",
      start: 0,
      number: 10,
      step: 1,
      color: 0x00ffff,
      z_offset: 7,
    })
  );
  reperes = reperes.concat(
    repere({
      type: "siècle",
      start: 0,
      number: 10,
      step: 1,
      color: 0x00ff00,
      z_offset: 8,
    })
  );
  reperes = reperes.concat(
    repere({
      type: "millénaire",
      start: 0,
      number: 10,
      step: 1,
      color: 0xffff00,
      z_offset: 9,
    })
  );

  // start repere
  // reperes = reperes.concat(
  //   special_repere({ nom: "start", type:"start_repere", color: 0xff0000 })
  // );
  // nom repere
  reperes = reperes.concat(
    special_repere({ name: "now", type: "now_repere", color: 0x00ff00 })
  );
  reperes = reperes.forEach((r) => {
    scene.add(r);
  });
  console.log(scene);
}

function special_repere(r) {
  let reperes = [];
  const spe_geometry = new THREE.BoxGeometry(0.05, 0.05, 0.04);
  const spe_material = new THREE.MeshBasicMaterial({color:r.color});
  const spe_repere = new THREE.Mesh(spe_geometry, spe_material);
  spe_repere.userData.type = r.type;
  spe_repere.name = r.name;
  reperes.push(spe_repere);
  console.log(spe_repere)
  return reperes;
}

function repere(p) {
  // let repere_scale = 3
  let reperes = [];
  for (let rep = p.start; rep < p.number; rep++) {
    let geo = { x: 0.02, y: 0.01, z: 0.02 };
    if (rep == p.start) {
      geo = { x: 0.02, y: 0.5, z: 0.02 };
    } else if (rep % p.step == 0) {
      geo = { x: 0.02, y: 0.1, z: 0.02 };
    }
    const rep_geometry = new THREE.BoxGeometry(geo.x, geo.y, geo.z);
    const rep_material = new THREE.MeshBasicMaterial({ color: p.color });
    const rep_mark = new THREE.Mesh(rep_geometry, rep_material);
    // tour complet = 2pi -> 1 seconde = 2pi/60 = pi/30 -> + rotatiojn anti horaire d'un quart de tour ( + Pi /2)
    let angle = (rep * 2 * Math.PI) / p.number - Math.PI / 2; //(2PI /60)
    let x = Math.cos(angle);
    let y = -Math.sin(angle);
    let z = p.z_offset; //0//Math.trunc(rep / p.number)
    rep_mark.position.set(x, y, z);
    rep_mark.userData.type = p.type;
    rep_mark.name = p.type + "_" + rep;
    reperes.push(rep_mark);
  }
  return reperes;
}
