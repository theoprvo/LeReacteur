const express = require("express");
const router = express.Router();

// Import models
const Brand = require("../models/Brand");
const Phone = require("../models/Phone");

// POST Route
router.post("/brand", async function (req, res) {
  try {
    // On verif que le form n'est pas vide
    if (!req.body.name || !req.body.headquarter || !req.body.country) {
      return res
        .status(400)
        .json({ message: "Remplissez correctement le formulaire !" });
    }
    // On verif que il n'existe pas deja
    if (await Brand.findOne({ name: req.body.name })) {
      return res.status(400).json({ message: "Cette marque existe déja !" });
    }

    const newBrand = new Brand({
      name: req.body.name,
      headquarter: req.body.headquarter,
      country: req.body.country,
    });
    await newBrand.save();
    res.status(200).json({
      message: "Brand added",
    });
  } catch (error) {
    res.status(400).json({
      message: "Bad Request",
    });
  }
});

// {
//     "name": "Apple",
//     "headquarter": "Cupertino",
//     "country": "USA"
//   }

// Export
module.exports = router;
