/*
  Dans cet exercice vous ne devrez pas coder !
  Vous devrez expliquer pourquoi une erreur est déclenchée.
*/

const firstName = "Farid";

const showName = () => {
  console.log(firstName); // Affichera `Farid`, ne déclenche pas d'erreur
  const fullName = "Farid Safi";
};

showName();

console.log(fullName); // Déclenchera une erreur `ReferenceError: fullName is not defined`

// Début de votre explication
// Ici pas de code. Essayez d'expliquer avec vos mots, pourquoi l'erreur est apparue.
// const fullName est défini dans la fonction, et donc ne peut etre appelé que dans celle ci.
// Fin de votre explication
