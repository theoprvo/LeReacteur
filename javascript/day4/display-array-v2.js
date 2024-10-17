function displayArray(tab, option) {
  let result = "";
  for (let i = 0; i < tab.length; i++) {
    if (i === tab.length - 1) {
      result += tab[i];
    } else {
      result += tab[i] + option;
    }
  }
  return result;
}

console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"], " ")); // Affichera "Pomme Banane Abricot Cerise"
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"], ", ")); // Affichera "Pomme, Banane, Abricot, Cerise"
