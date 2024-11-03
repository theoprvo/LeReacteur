const express = require("express");
const fileUpload = require("express-fileupload");
const router = express.Router();
const cloudinary = require("cloudinary").v2;

// IMPORTED MODELS
const User = require("../models/User");
const Offer = require("../models/Offer");

const isAuthenticated = require("../middlewares/isAuthenticated");

function convertToBase64(file) {
  return `data:${file.mimetype};base64,${file.data.toString("base64")}`;
}

// PUBLISH
router.post(
  "/offer/publish",
  isAuthenticated,
  fileUpload(),
  async function (req, res) {
    try {
      const convertedPicture = await cloudinary.uploader.upload(
        convertToBase64(req.files.picture)
      );

      const newOffer = Offer({
        product_name: req.body.title,
        product_description: req.body.description,
        product_price: req.body.price,
        product_details: [
          { brand: req.body.brand },
          { size: req.body.size },
          { condition: req.body.condition },
          { color: req.body.color },
          { city: req.body.city },
        ],
        product_image: convertedPicture,
        owner: req.user,
      });
      await newOffer.save();

      res.status(200).json("ok");
    } catch (error) {
      res.status(400).json({
        message: "bizzare",
      });
    }
  }
);

// DELETE

// UPDATE

module.exports = router;
