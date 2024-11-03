// SERVER
const express = require("express");
const app = express();
app.use(express.json());

// DB
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/phone-app");

// Routes
const brandRoutes = require("./routes/brand");
app.use(brandRoutes);
const phoneRoutes = require("./routes/phone");
app.use(phoneRoutes);

// Server Start
app.listen(3000, function (req, res) {
  console.log("server started");
});
