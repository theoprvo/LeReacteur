const express = require("express");
const router = express.Router();

const API_KEY = "g9gBSan4UU5tviqM";

const User = require("../models/User");
const { default: axios } = require("axios");

router.get("/characters/:limit/:skip/:filter?", async (req, res) => {
  try {
    let limit_var = req.params.limit;
    let skip_var = req.params.skip;

    let filter_var = "";
    if (req.params.filter) {
      filter_var = `&name=${req.params.filter}`;
    }
    console.log(limit_var);
    console.log(skip_var);
    console.log(filter_var);

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${API_KEY}&limit=${limit_var}&skip=${skip_var}${filter_var}`
    );
    return res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/character/:characterId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.characterId}?apiKey=${API_KEY}`
    );
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
