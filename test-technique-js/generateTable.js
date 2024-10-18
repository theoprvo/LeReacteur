function generateTable(num1, num2) {
  // On vérifie que les paramètres sont bien des chiffres
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Veuillez entrer des chiffres !";
  }

  // On vérifie que num1 qui est le début de notre suite, est plus petit que num2 qui est la fin de notre suite
  if (num1 > num2) {
    return "Le deuxième chiffre entré en argument doi être supérieur au premier !";
  }

  // On ajoute dans un tableau vide tout les chiffres allant de num1 à num2
  let resultTab = [];
  for (let i = num1; i <= num2; i++) {
    resultTab.push(i);
  }

  return resultTab;
}

const start = 1;
const end = 5;

console.log(generateTable(start, end)); // Résultat attendu : [1, 2, 3, 4, 5]
console.log(generateTable("toto", true));
console.log(generateTable(7, 3));
