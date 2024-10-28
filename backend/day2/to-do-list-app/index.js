// SERVER
const express = require("express");
const app = express();
app.use(express.json());

// BDD
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/to-do-list-app");
const Task = mongoose.model("Task", {
  name: String,
});

// ROUTE
app.post("/todos", async function (req, res) {
  try {
    if (req.body.name && typeof req.body.name === "string") {
      const newTask = new Task({
        name: req.body.name,
      });
      await newTask.save();
      res.status(200).json({ message: "Succes" });
    } else {
      res.status(400).json({ message: "Wrong name. Must be string !" });
    }
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
});

app.get("/todos", async function (req, res) {
  try {
    const allTask = await Task.find();

    return res.status(200).json(allTask);
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
});

app.get("/todos/:name", async function (req, res) {
  try {
    const nameToSearch = req.params.name;
    const X = await Task.find({ name: nameToSearch });
    console.log(X);
    if (!X) {
      return res.status(400).json({ message: "l'id n'existe pas" });
    }
    return res.status(200).json(X);
  } catch (error) {
    res.status(400).json({ message: "bad request" });
  }
});

app.put("/todos/:id", async function (req, res) {
  try {
    const IDtoModify = req.params.id;
    if (!(await Task.findById(IDtoModify))) {
      return res.status(400).json({ message: "The task does not exist" });
    }
    const modifiedTask = await Task.findOneAndUpdate(
      { _id: IDtoModify },
      { name: req.body.name },
      { new: true }
    );

    // const modifiedTask = await Task.findById(IDtoModify);
    // modifiedTask.name = req.body.name;
    // await modifiedTask.save();

    return res.status(200).json({ message: "Task modified", modifiedTask });
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
});

app.delete("/todos/:id", async function (req, res) {
  try {
    const IDtoDelete = req.params.id;
    if (!(await Task.findById(IDtoDelete))) {
      return res.status(400).json({ message: "The task does not exist" });
    }
    const result = await Task.findByIdAndDelete(IDtoDelete);
    res.status(200).json({ message: "task deleted" });
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
});

app.listen(3000, function (req, res) {
  console.log("server started");
});
