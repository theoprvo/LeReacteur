function tableMult(num) {
  if (typeof num !== "number") {
    return "Vous devez entrer un nombre entier";
  } else {
    if (num < 0) {
      return "Vous devez entrer un nombre positif";
    } else {
      if (Number.isInteger(num) === false) {
        return "Vous devez entrer un nombre entier";
      } else {
        for (let i = 1; i <= 10; i++) {
          console.log(i * num);
        }
      }
    }
  }
}

console.log(tableMult(9));
// console.log(tableMult(-1));
// console.log(tableMult("ABC"));
// console.log(tableMult(1.1));
