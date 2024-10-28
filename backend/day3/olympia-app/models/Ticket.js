const mongoose = require("mongoose");

const Ticket = mongoose.model("Ticket", {
  email: String,
  username: String,
  category: String,
  seats: Number,
  date: Date,
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
  },
});

module.exports = Ticket;
