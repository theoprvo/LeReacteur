const express = require("express");
const router = express.Router();

// Import models
const Ticket = require("../models/Ticket");
const Event = require("../models/Event");

// POST Route
router.post("/tickets", async function (req, res) {
  const bodyTicket = req.body; // Le body de la req
  const dateTicket = new Date(); // La date d'aujd
  const eventTicket = await Event.findById(bodyTicket.eventId); // L'event qui correspond

  console.log(eventTicket);

  const newTicket = new Ticket({
    email: bodyTicket.email,
    username: bodyTicket.username,
    category: bodyTicket.category,
    seats: bodyTicket.seats,
    date: dateTicket,
    event: eventTicket,
  });

  console.log(eventTicket);

  console.log(newTicket.event);

  await newTicket.save();

  //
  res.status(200).json({
    message: newTicket.seats + " seats successfully booked",
  });
});

// GET Route
router.get("/tickets/:email", async function (req, res) {
  try {
    const paramEmail = req.params.email;
    //
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
});

// Export
module.exports = router;
