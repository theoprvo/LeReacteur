function pyramid(num) {
  if (num % 2 !== 1) {
    return "Veuillez entrer un nombre impair !";
  }

  let str = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num + (num - 1); j++) {
      if (j % 2 === Math.round(num / 2)) {
        str += "X";
      } else {
        str += "+";
      }
    }
    str += "\n";
  }

  return str;
}

console.log(pyramid(3));
