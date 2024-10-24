const express = require("express");
const app = express();
app.use(express.json()); // pour recuperer des params de type body

app.get("/", function (req, res) {
  console.log("bienvenue sur la racine");
});

app.post("/calculate", function (req, res) {
  const myObj = req.body;
  if (!myObj.num1 || !myObj.num2 || !myObj.operator) {
    return res.json({ message: "veuillez bien remplir les parmas" });
  }
  if (typeof myObj.num1 !== "number" || typeof myObj.num2 !== "numer") {
    return res.json({ message: "Num1 et Num2 doivent etre des chiffres !" });
  }
  let result = 0;

  switch (myObj.operator) {
    case "+":
      result = myObj.num1 + myObj.num2;
      break;
    case "-":
      result = myObj.num1 - myObj.num2;
      break;
    case "*":
      result = myObj.num1 * myObj.num2;
      break;
    case "/":
      result = myObj.num1 / myObj.num2;
      break;
    default:
      return res.json({ message: "Veuillez mettre un opérateur valide!" });
      break;
  }

  return res.json({ message: result });
});

app.listen(3000, function (req, res) {
  console.log("serveur lancé!");
});
