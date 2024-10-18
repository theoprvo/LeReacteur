function sumEvenNumbers(numTab) {
  let summEven = 0;
  for (let i = 0; i < numTab.length; i++) {
    // On verifie qu on a uniquement des chiffres dans le tableau
    if (typeof numTab[i] !== "number") {
      return "Veuillez entrer uniquement des chifres dans votre tableau";
    }
    // On additione la somme des chiffres pairs grace au modulo 2
    if (numTab[i] % 2 === 0) {
      summEven += numTab[i];
    }
  }
  return summEven;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(sumEvenNumbers(numbers)); // Résultat attendu : 20 (2 + 4 + 6 + 8 = 20)
