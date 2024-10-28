const express = require("express");
const router = express.Router();

// Import models
const Ticket = require("../models/Ticket");
const Event = require("../models/Event");

// POST Route
router.post("/events", async function (req, res) {
  try {
    const bodyEvent = req.body;

    const newEvent = new Event({
      name: bodyEvent.name,
      date: bodyEvent.date,
      seats: {
        orchestre: bodyEvent.seats.orchestre,
        mezzanine: bodyEvent.seats.mezzanine,
      },
    });

    await newEvent.save();

    //
    res.status(200).json({ message: "Event created", newEvent });
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
});

// GET Route
router.get("/events", async function (req, res) {
  try {
    const queryDate = req.query.date;
    const result = await Event.find({ date: queryDate });

    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(400).json({ message: "Aucun event lié à cette date" });
    }
    //
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
});

router.get("/events/:id", async function (req, res) {
  try {
    const paramID = req.params.id;
    const result = await Event.find({ _id: paramID });

    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(400).json({ message: "Aucun event lié à cet ID" });
    }
    //
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
});

// Export
module.exports = router;
