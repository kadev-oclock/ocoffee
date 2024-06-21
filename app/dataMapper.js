const database = require("./database");

const dataMapper = {
  getAllCoffee: async () => {
    const query = "SELECT * FROM coffee";
    const result = await database.query(query);
    return result.rows;
  },
  // Méthode de récupération d'une seule card
  getOneCoffe: async (id) => {
   
    const sql = `SELECT * FROM coffee WHERE id = ${id}`;
    const result = await database.query(sql);
    return result.rows[0];
  },
};

module.exports = dataMapper;
