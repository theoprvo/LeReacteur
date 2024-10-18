function calculateAverage(tableNum) {
  let result = 0;

  for (let i = 0; i < tableNum.length; i++) {
    // On vérifie que le tableau ne contient que des chiffres
    if (typeof tableNum[i] !== "number") {
      return "Vérifiez que le tableau ne contient que des chiffres!";
    }
    // On ajoute la somme du tableau parcouru
    result += tableNum[i];
  }
  // On fait la moyenne de la somme
  result = result / tableNum.length;
  return result;
}

const numbers = [10, 20, 30, 40, 50];

console.log(calculateAverage(numbers)); // Résultat attendu : 30 (moyenne de 10 + 20 + 30 + 40 + 50 = 30)
