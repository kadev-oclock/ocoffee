const dataMapper = require("../dataMapper");

const panierController = {
  cartPage: (req, res) => {
    const dataCart = req.session.dataCart || [];
    res.render("panier", { dataCart, totalPrice: calculateTotalPrice(dataCart) });
  },

  addToCart: async (req, res) => {
    if (!req.session.dataCart) {
      req.session.dataCart = [];
    }
    const id = req.params.id;
    const coffeeExist = req.session.dataCart.find((item)=>item.id === id); 
    if(!coffeeExist) {
      const coffee = await dataMapper.getOneCoffe(id); 
      req.session.dataCart.push(coffee);
    }
    res.redirect("/panier");
  },

  removeFromCart: (req, res) => {
    const id = req.params.id;
    if (req.session.dataCart) {
      req.session.dataCart = req.session.dataCart.filter((item) => item.id != id);
    }
    res.redirect("/panier");
  },
};

function calculateTotalPrice(cart) {
  const total = cart.reduce((total, item) => total + Number(item.price), 0);
  return total.toFixed(2); 
}

module.exports = panierController;
