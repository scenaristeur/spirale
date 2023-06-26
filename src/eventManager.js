import { v4 as uuidv4 } from "uuid";

export class EventManager {
  constructor(options = {}) {
    this.options = options;
  }

  async getEvents(options = {}) {
    console.log(options);
    let events = [];

    let eventsNumber = 100;

    for (let i = 0; i < eventsNumber; i++) {
      let nb_jours = i + Math.floor(Math.random() * 360 - i);
      console.log("nb_jours", nb_jours);
      let timestamp = 1000 * 60 * 60 * 24 * nb_jours; // nombre de millisecondes par jour *  un jour au hasard dans l'année
      let start = Date.now() + timestamp;

      // let duration = Math.floor(Math.random() * 10)
      // let end_timestamp = 1000 * 60 * 60 * 24 * (duration)
      //let duration = Math.floor(Math.random() *1000 * 60 * 60 * 24 ) //random 10 jours
      let end = null; //Date.now() + end_timestamp; //null//start+duration

      let event = {
        id: uuidv4(),
        name: "Nom_" + i + " on " + new Date(start).toLocaleDateString(),
        // date_unique: Date.now() + i * 100000,
        // date_debut: "",
        // date_fin: "",
        // heure_debut: i+":30",
        // heure_fin: i+2+":45",
        start: start,
        end: end,
        // duration: duration,
        place: "place du " + i,
        images: [
          "https://www.lyon.fr/sites/lyonfr/files/content/2023-06/poussineau_festisound_p.jpg",
          "https://www.lyon.fr/sites/lyonfr/files/content/2023-06/naurunorilsk_p.jpg",
        ],
        tags: ["Musique", "Spectacle", "Tout l'monde dehors"],
        publics: ["Tous Publics"],
        description: `Les associations Gones Music et Concert sous la Voûte organisent une grande soirée de musique, festive, conviviale.
         En première partie : Jimmy & Clem. Ces deux guitaristes virtuoses croix-roussiens aux sonorités latino-dynamique interpréteront les chefs-d’œuvre de Rodrigo y Gabriela.
         En deuxième partie : Charlie and the Soap Opera. Ce groupe lyonnais de 7 musiciens, jouant sur les grandes scènes des 5 continents depuis une quinzaine d'années, vous offrira une musique pop, funk, soul.
         L'ambiance sera chaude, mais tout sera prévu sur place pour vous restaurer (boissons, food truck...) dès 19h.
         A cette occasion, une grande tombola sera organisée le jour du concert ainsi que sur internet plusieurs semaines auparavant.`,
        link: "https://www.poussineau-festisound.com/",
        amount: ["Gratuit - de 25 ans", "5€ chômeurs", "10€"],

        complement: "",
        multi_dates: [
          { start: "start_one", end: "end_one" },
          { start: "start_two", end: "end_two" },
        ],
      };
      event.human_start = new Date(event.start * 1000);
      event.human_end = new Date(event.end * 1000);
      events.push(event);
    }

    return events;
  }
}