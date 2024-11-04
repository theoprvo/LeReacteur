// SERVER
const express = require("express");
const app = express();
app.use(express.json());

// DB
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/vinted");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "x",
  api_key: "x",
  api_secret: "x-x",
});

// ROUTES
const userRoutes = require("./routes/user");
app.use(userRoutes);
const offerRoutes = require("./routes/offer");
app.use(offerRoutes);

// START
app.listen(3000, function (req, res) {
  console.log("server started");
});
