const client = require("../database");
const dataMapper = require("../dataMapper");

const mainController = {
  /**
   * Méthode qui définit le traitement à réaliser
   * pour la page d'accueil
   */
  home: (req, res) => {
    // On rend la page nommée "index" dans le dossier "views"
    res.render("index");
  },

  page404:(req, res) => {
    res.render("404");
  },

  catalog: async (req, res) => {
    try {
      const cards = await dataMapper.getAllCoffee();
      res.render("catalogue", { cards });
    } catch (error) {
      console.error(error);
      res.status(500).send("error whith database");
      client.end();
    }
  },
  product: async (request, response) => {
    //  résultat de mes promesses (résolution)
    try {
      // Je récupère le résultat d'une card
      const oneCard = await dataMapper.getOneCoffe(Number(request.params.id));
      response.render("products", { oneCard });
      // Ici, je renvoie la vue et les données associées
    } catch (error) {
      response.status(500).send("Erreur côté serveur pour récupérer une card");
    }
  },

  boutique: async (request, response) => {
    //  résultat de mes promesses (résolution)
    try {
      // Je récupère le résultat d'une card
      const oneCard = await dataMapper.getOneCoffe(Number(request.params.id));
      response.render("boutique", { oneCard });
      // Ici, je renvoie la vue et les données associées
    } catch (error) {
      response.status(500).send("Erreur côté serveur pour récupérer une card");
    }
  },
};

module.exports = mainController;
