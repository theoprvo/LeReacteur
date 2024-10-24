const axios = require("axios");

function currencyConverter(total, str1, str2) {
  //faire les tests pour les params en entree
  const currentCurrency = str1.toUpperCase();
  const wantedCurrency = str2.toUpperCase();

  let valueOfCurrent = Number;
  let valueOfWanted = Number;

  axios
    .get(
      "https://api.currencyapi.com/v3/latest?apikey=cur_live_PDGbI2CLkRo31XrNArpqVs9y5mbyk88gAtXlnkLX&base_currency=EUR"
    )
    .then((response) => {
      let dataResult = response.data.data;
      let X = 0;

      for (let key in dataResult) {
        if (dataResult.hasOwnProperty(key)) {
          if (dataResult[key].code === wantedCurrency) {
            valueOfWanted = dataResult[key].value;
          }
          if (dataResult[key].code === currentCurrency) {
            valueOfCurrent = dataResult[key].value;
          }
        }
      }

      totalConverted = (total * valueOfWanted) / valueOfCurrent;

      function roundTo2(num) {
        return Number.parseFloat(num).toFixed(2);
      }

      console.log(
        total +
          " " +
          currentCurrency +
          " > " +
          roundTo2(totalConverted) +
          " " +
          wantedCurrency +
          " (taux de change appliqué : " +
          valueOfWanted +
          ")"
      );
    })
    .catch((error) => {
      console.log(error.message); // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.
    });
}

currencyConverter(15, "eur", "usd", (message) => {
  console.log(message); // Devra afficher : `15 EUR > 18.34 USD (taux de change appliqué : 1.223)`.
});
