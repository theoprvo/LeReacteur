const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

// je me connecte à ma BDD drug-app (il en créer une si elle existe pas à cette adresse!)
mongoose.connect("mongodb://localhost:27017/drug-app");

// je créer une table Drug (=== CREATE TABLE Drug (name STRING, quantity INT))
const Drug = mongoose.model("Drug", {
  name: String,
  quantity: Number,
});

app.post("/drugs", async function (req, res) {
  try {
    // j'ajoute un element dans la bdd (=== INSERT INTO Drug VALUES ('data') )
    if (await Drug.findOne({ name: req.body.name })) {
      res.status(400).json({ message: "Drug exist already!" });
    } else {
      const newDrug = new Drug({
        name: req.body.name,
        quantity: req.body.quantity,
      });
      await newDrug.save();

      const myObjRes = {
        _id: newDrug._id,
        name: newDrug.name,
        quantity: newDrug.quantity,
      };
      // je réponds avec un 2XX pour dire que ça marche
      res.status(201).json(myObjRes);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/drugs", async function (req, res) {
  try {
    const allDrgus = await Drug.find();
    res.status(200).json({ allDrgus });
  } catch (error) {}
});

app.put("/drugs/add/:id", async function (req, res) {
  try {
    const ToAdd = req.body.quantity;
    const drugId = req.params.id;

    if (!(await Drug.findById(drugId))) {
      res.status(400).json({ message: "Bad request" });
    } else {
      const X = await Drug.findById(drugId);
      if (X.quantity < ToAdd) {
        // ???
      }
      X.quantity = X.quantity + ToAdd;
      await X.save();
      res.status(200).json(X);
    }
  } catch (error) {
    // console.log(error);
  }
});

app.listen(3000, function (req, res) {
  console.log("server started");
});
