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
        let result = "";
        for (let i = 1; i <= 10; i++) {
          if (i === 10) {
            result+= i +' * '+ num + ' = '+ i*num;
          } else {
            result+= i +' * '+ num + ' = '+ i*num +'\n';
          }
        }
        return result;
      }
    }
  }
}

console.log(tableMult(5782));
console.log(tableMult(-1));
console.log(tableMult("ABC"));
console.log(tableMult(1.1));
