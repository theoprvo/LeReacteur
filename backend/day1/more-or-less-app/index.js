const express = require("express");
const app = express();

function getRandomInt(maxInt) {
  return Math.floor(Math.random() * maxInt);
}

app.get("/", function (req, res) {
  console.log("route racine");
});

app.get("/guess", function (req, res) {
  const num = req.query.num;
  const numToFind = getRandomInt(100);
  console.log(num);
  console.log(numToFind);

  if (num > numToFind) {
    res.json({ message: "C'est moins !" });
  } else if (num < numToFind) {
    res.json({ message: "C'est plus !" });
  } else {
    res.json({ message: `Bien joué le numéro était : ${numToFind}` });
  }
});

app.listen(3000, function () {
  console.log("serveur ok");
});
