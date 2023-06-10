export class Solid {
  constructor() {
    this.resources = {};
  }
  getDataset(options, graph, nt) {
  
    this.graph = graph;
    this.nt = nt;
    //getData(url, null, nt, addNode, graph);
    this.fetchSolidData(options)
      .then((jsonld) => {
        console.log(jsonld);
        this.processJsonld({ jsonld: jsonld, url: options.url });
        // nodes.forEach(n => {addNode(n)})
      })
      .catch((error) => {
        console.log(error.message); // 'An error has occurred: 404'
      });
  }
  async fetchSolidData(options = {}) {
    this.resources[options.url] = { options };
    const response = await fetch(options.url, {
      method: "GET",
      headers: {
        Accept: "application/ld+json",
      },
    });

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const jsonld = await response.json();
    return jsonld;
  }

  processJsonld(data) {
    let nt = this.nt;
    let graph = this.graph;
    let ressources = data.jsonld["@graph"];
    // ressources.forEach((r) =>
    for (let r of ressources) {
      console.log(r);
      let id = r["@id"];
      if (!id.startsWith("http") && id.endsWith(":")) {
        // @id is short remove the ":" and get from context
        id = id.slice(0, -1);
        id = data.jsonld["@context"][id];
      }
      let modified =
        r["dct:modified"]["@value"] || r["dct:modified"][0]["@value"]; // can be array
      console.log(modified);
      if (modified != undefined) {
        let timestamp = new Date(modified).getTime();
        console.log(id, modified);
        let node_params = { id, modified, timestamp, color: "#ff0000", parent: data.url }
        if (r["@type"].includes("ldp:BasicContainer")) {
           node_params.color = "#ffff00"
          //  this.fetch()
          console.log("to fetch", id);
          if (this.resources[id] == undefined) {
            this.fetchSolidData({ url: id, parent: data.url })
              .then((jsonld) => {
                console.log(jsonld);
                this.processJsonld({ jsonld: jsonld, url: id });
                // nodes.forEach(n => {addNode(n)})
              })
              .catch((error) => {
                console.log(error.message); // 'An error has occurred: 404'
              });
            //callback(id, url, nt, callback, graph)
          } else {
            console.log("already visited",id);
          }
        }
        let ball = nt.createEventBall(node_params);
        nt.addNode(ball, graph);
      } else {
        console.warn("modified undefined", r);
      }
    }
    // );
  }
}
