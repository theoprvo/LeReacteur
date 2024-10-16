function pyramid(num) {
  if (num % 2 !== 1) {
    return "Veuillez entrer un nombre impair !";
  }

  let str = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < num - i; j++) {
      str += "+";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      str += "X";
    }
    if (i !== num) {
      str += "\n";
    }
  }

  return str;
}

console.log(pyramid(3));
console.log(pyramid(5));
