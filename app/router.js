const express = require("express");

// on importe nos controllers

const mainController = require("./controllers/mainController");
const panierController = require("./controllers/panierController");

const router = express.Router();

// page d'accueil
router.get("/", mainController.home);
// page catalogue
router.get("/catalogue", mainController.catalog);


// page boutique
router.get("/boutique", mainController.boutique);
// page products
router.get("/products/:id", mainController.product);
// page 404
router.get("/404", mainController.page404);
// panier

router.get("/panier", panierController.cartPage);
router.get("/panier/add/:id", panierController.addToCart);
router.post('/panier/remove/:id', panierController.removeFromCart);

module.exports = router;
