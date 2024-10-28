// Require
const express = require("express");
const app = express();
app.use(express.json());

// BDD
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Olympia-app");

// Import routes
const eventRoutes = require("./routes/event");
app.use(eventRoutes);

const ticketRoutes = require("./routes/ticket");
app.use(ticketRoutes);

// Server Start
app.listen(3000, function (req, res) {
  console.log("server started");
});
