const express = require("express");
const router = express.Router();

// Import models
const Brand = require("../models/Brand");
const Phone = require("../models/Phone");

// POST Route
router.post("/phone", async function (req, res) {
  try {
    // On verif que le form n'est pas vide
    if (
      !req.body.model ||
      !req.body.screensize ||
      !req.body.color ||
      !req.body.brandName
    ) {
      return res
        .status(400)
        .json({ message: "Remplissez correctement le formulaire !" });
    }
    // On verif que il n'existe pas deja
    if (await Phone.findOne({ model: req.body.model })) {
      return res
        .status(400)
        .json({ message: "Ce model est deja enregistré !" });
    }

    const brand = await Brand.findOne({ name: req.body.brandName });
    const newPhone = new Phone({
      model: req.body.model,
      screensize: req.body.screensize,
      color: req.body.color,
      brandRef: brand,
    });
    await newPhone.save();
    res.status(200).json({
      message: "Phone added",
    });
  } catch (error) {
    res.status(400).json({
      message: "Bad Request",
    });
  }
});
// {
//     "model": "Galaxy S23",
//     "screensize": 6.3,
//     "color": "red",
//     "brandName" : "Samsung"
//   }

// GET Route
router.get("/phone", async function (req, res) {
  try {
    const result = await Phone.find().populate("brandRef");
    res.status(200).json({
      message: result,
    });
  } catch (error) {
    res.status(400).json({
      message: "Bad Request",
    });
  }
});

// Export
module.exports = router;
