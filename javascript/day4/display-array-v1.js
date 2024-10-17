function displayArray(array) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      result += array[i];
    } else {
      result += array[i] + " ";
    }
  }
  return result;
}

console.log(displayArray(["Bim", "Bam", "Boom"])); // Affichera "Bim - Bam - Boom"
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"])); // Affichera "Pomme - Banane - Abricot - Cerise"
