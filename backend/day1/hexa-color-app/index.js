const express = require("express");
const app = express(); // Je créer mon serveur
const color_tab = require("./colors.json"); //J'importe mon fichier /!\ la racine est dans node_modules
const keys = Object.keys(color_tab); //Je cré une const keys qui met ttes les clés de mon objet dans un array

// console.log(keys);

app.get("/", function (req, res) {
  res.json({ message: "Coucou !" });
});

app.get("/send-a-color", function (req, res) {
  let colorName = req.query.color;

  for (let i = 0; i < keys.length; i++) {
    if (colorName === keys[i]) {
      return res.json({
        message:
          "Le code hexadécimal de la couleur '" +
          colorName +
          "' est : " +
          color_tab[keys[i]],
      });
    }
  }
  return res.json({
    message: "color not found",
  });
});

app.listen(3000, function () {
  console.log("bip bip le serveur est lancé");
});
