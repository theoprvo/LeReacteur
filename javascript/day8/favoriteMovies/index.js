const axios = require("axios");

function searchFavoriteFilm(str, apiKey) {
  //faire les tests pour les params en entree

  axios
    .get("https://www.omdbapi.com/?t=" + str + "&apikey=" + apiKey)
    .then((response) => {
      let dataResult = response.data;
      const movieKeys = Object.keys(dataResult);

      for (let i = 0; i < movieKeys.length; i++) {
        if (
          movieKeys[i] === "Actors" ||
          movieKeys[i] === "Title" ||
          movieKeys[i] === "Year" ||
          movieKeys[i] === "Genre"
        ) {
          console.log(movieKeys[i] + " : " + dataResult[movieKeys[i]]);
        }
      }
    })
    .catch((error) => {
      console.log(error.message); // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.
    });
}

searchFavoriteFilm("The Batman", "b6ba662d");
searchFavoriteFilm("Inception", "b6ba662d");
