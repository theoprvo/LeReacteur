const axios = require("axios");

const apiKey = "b6ba662d";
const paramString = "tt0468569";

// searchFilm;

axios
  .get("https://www.omdbapi.com/?t=" + "Inception" + "&apikey=" + apiKey)
  .then((response) => {
    let dataResult = response.data;

    const movieKeys = Object.keys(dataResult);
    // console.log(movieKeys);

    for (let i = 0; i < movieKeys.length; i++) {
      if (
        movieKeys[i] === "Actors" ||
        movieKeys[i] === "Title" ||
        movieKeys[i] === "Year" ||
        movieKeys[i] === "Genre"
      ) {
        // console.log(movieKeys[i]);
        // console.log(dataResult[movieKeys[i]]);
        console.log(movieKeys[i] + " : " + dataResult[movieKeys[i]]);
      }
    }
  })
  .catch((error) => {
    console.log(error.message); // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.
  });
