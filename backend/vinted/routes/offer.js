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
      const { title, description, price, brand, size, condition, color, city } =
        req.body;

      const newOffer = Offer({
        product_name: title,
        product_description: description,
        product_price: price,
        product_details: [
          { brand: brand },
          { size: size },
          { condition: condition },
          { color: color },
          { city: city },
        ],
        owner: req.user,
      });

      const convertedPicture = await cloudinary.uploader.upload(
        convertToBase64(req.files.picture),
        {
          folder: `/vinted/offers/${newOffer._id}`,
          public_id: "picture_name",
        }
      );

      newOffer.product_image = convertedPicture;

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
