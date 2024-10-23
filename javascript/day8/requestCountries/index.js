const axios = require("axios");

axios
  .get("https://countriesnow.space/api/v0.1/countries/capital")
  .then((response) => {
    let dataResult = response.data;
    function getCountriesAndCapitals() {
      let result = "";
      for (let i = 0; i < dataResult.data.length; i++) {
        if (i === dataResult.data.length - 1) {
          result +=
            dataResult.data[i].name + " : " + dataResult.data[i].capital;
        } else {
          result +=
            dataResult.data[i].name + " : " + dataResult.data[i].capital + "\n";
        }
      }
      return result;
    }

    console.log(getCountriesAndCapitals());

    // for (let i = 0; i < dataResult.data.length; i++) {
    //   console.log(dataResult.data[i].name + " : " + dataResult.data[i].capital); //ne marche pas
    // }
  })
  .catch((error) => {
    console.log(error.message); // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.
  });
