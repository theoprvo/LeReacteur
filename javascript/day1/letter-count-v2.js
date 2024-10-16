const str = "le reacteur c'est super !";
let counter = 0;

// début de votre code
for (let index = 0; index < str.length; index++) {
  if (str.at(index) === "e" || str.at(index) === "r") {
    counter++;
  }
}
// fin de votre code

console.log(counter);
