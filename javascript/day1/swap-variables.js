let var1 = 10;
let var2 = 20;

// Début de votre code

let var1Stockage = var1;
let var2Stockage = var2;
var1 = var2Stockage;
var2 = var1Stockage;

// Fin de votre code

console.log(var1); // Doit afficher 20
console.log(var2); // Doit afficher 10
