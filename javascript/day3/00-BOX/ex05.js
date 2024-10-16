/*
  L'objectif de cet exercice est d'afficher les 3 lignes de 5 caractères suivantes :
  -----
  -----
  -----
*/

/*

  Aide :
  Vous aurez besoin de créer une boucle dans une boucle et d'utiliser '\n' pour déclencher des retours à la ligne
*/

const generateString = (height, width) => {
  let str = "";

  // Début de votre code
  for (let i = 0; i < height; i++) {
    for (let i = 0; i < width; i++) {
      str += "-";
    }
    str = str + "\n";
  }
  // Fin de votre code

  return str;
};

const height = 3;
const width = 5;
console.log(generateString(height, width));
