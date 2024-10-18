function removeSpacesAndUpperCase(myString) {
  // On vérifie que le param est une string
  if (typeof myString !== "string") {
    return "Veuillez entrer une chaine de caracteres";
  }
  // On enlève les espaces de début et de fin si il y en avait
  cleanStr = myString.trim();

  let resultString = "";
  for (let i = 0; i < cleanStr.length; i++) {
    if (cleanStr[i] === " ") {
      // Si en parcourant notre string on tombe sur un espace, on l'enleve
      resultString += "";
    } else {
      // On mets tous les caractères en majuscule
      resultString += cleanStr[i].toUpperCase();
    }
  }
  return resultString;
}

const str = "Hello, world! How are you?";

console.log(removeSpacesAndUpperCase(str)); // Résultat attendu : "HELLO,WORLD!HOWAREYOU?
