const str = "le reacteur c'est super !";
let counter = 0; // stocke le nombre de e

// début de votre code
for (let index = 0; index < str.length; index++) {
  if (str[index] === "e") {
    counter++;
  }
}

// fin de votre code

console.log(counter);
