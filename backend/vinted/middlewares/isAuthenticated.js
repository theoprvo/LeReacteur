// IMPORTED MODELS
const User = require("../models/User");

async function isAuthenticated(req, res, next) {
  console.log("middleware");

  const tokenUser = req.headers.authorization.replace("Bearer ", "");
  console.log(tokenUser);

  const userInfo = await User.findOne({ token: tokenUser });

  if (userInfo) {
    req.user = userInfo;
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = isAuthenticated;
