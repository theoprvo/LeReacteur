const generateString = (num) => {
  let str = "";
  let i = 0;

  // Début de votre code
  while (i < num) {
    str += "-";
    i++;
  }
  // Fin de votre code

  return str;
};

console.log(generateString(1)); // Doit afficher `-`
console.log(generateString(2)); // Doit afficher `--`
console.log(generateString(4)); // Doit afficher `----`
console.log(generateString(19)); // Doit afficher `-------------------`
