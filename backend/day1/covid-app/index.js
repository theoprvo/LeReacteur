const express = require("express");
const app = express();
const covid_tab = require("./covid_data.json");

app.get("/", function (req, res) {
  //   console.log(covid_tab[0]);
  console.log(covid_tab[0].name);
  console.log(covid_tab[0].latest_data.confirmed);
  console.log(covid_tab[0].latest_data.deaths);
  console.log(covid_tab[0].latest_data.recovered);
  return res.json({ message: "C'est nice les gars" });
});
app.listen(3000, function (req, res) {
  console.log("serveur on");
});
