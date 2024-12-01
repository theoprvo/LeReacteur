const express = require("express");
const app = express();
app.use(express.json());
const axios = require("axios");
const cors = require("cors");
app.use(cors()); // Pour le cross-origin

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/marvel");

//ROUTES
app.get("/", (req, res) => {
  res.json("Welcome to MARVEL API");
});

const userRoutes = require("./routes/user");
app.use(userRoutes);
const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);
const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);
const favoritesRoutes = require("./routes/favorites");
app.use(favoritesRoutes);

//SERVER START
app.listen(3000, () => {
  console.log("server started");
});
