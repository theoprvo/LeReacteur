const express = require("express");
const router = express.Router();
const uid2 = require("uid2");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");

// IMPORTED MODELS
const User = require("../models/User");

// SINGUP
router.post("/user/singup", async function (req, res) {
  try {
    if (!req.body.email || !req.body.username || !req.body.password) {
      return res.status(400).json({
        message: "Not valid form",
      });
    }

    if (await User.findOne({ email: req.body.email })) {
      return res.status(400).json({
        message: "Email already used",
      });
    }

    const salt = uid2(16);
    const token = uid2(64);
    const hash = SHA256(req.body.password + salt).toString(encBase64);

    const newUser = new User({
      email: req.body.email,
      account: {
        username: req.body.username,
        avatar: Object,
      },
      newsletter: req.body.newsletter,
      token: token,
      hash: hash,
      salt: salt,
    });

    await newUser.save();

    const userCreated = await User.findOne({ email: req.body.email });

    const resultInfoUser = {
      _id: userCreated._id,
      token: userCreated.token,
      account: {
        username: userCreated.account.username,
      },
    };

    res.status(200).json(resultInfoUser);
  } catch (error) {
    res.status(400).json({
      message: "Bad Request",
    });
  }
});

// LOGIN
router.post("/user/login", async function (req, res) {
  try {
    const userInfo = await User.findOne({ email: req.body.email });

    if (!userInfo) {
      return res
        .status(400)
        .json({ message: "Not account was found with this email" });
    }

    const cryptedUserPwd = SHA256(req.body.password + userInfo.salt).toString(
      encBase64
    );

    if (userInfo.hash === cryptedUserPwd) {
      const resultUserInfo = {
        _id: userInfo._id,
        token: userInfo.token,
        account: {
          username: userInfo.account.username,
        },
      };
      res.status(200).json({ resultUserInfo });
    } else {
      res.status(400).json({ message: "Wrong password" });
    }
  } catch (error) {
    res.status(200).json({
      message: "Bad Request",
    });
  }
});

module.exports = router;
