// Toujours commencer par importer les variables d'environnement !
require("dotenv").config();
const express = require("express");
const session = require("express-session");

// on importe le router
const router = require("./app/router");

const app = express();



// un peu de config
const PORT = process.env.PORT || 5000;

// Configuration d'EJS (c) Kevin
app.set("views", "./app/views");
app.set("view engine", "ejs");

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static("static"));
app.use(session({
secret: "coucou",
resave:false,
saveUninitialized:true,
cookie:{secure:false}
}));

// routage !
app.use(router);


// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});