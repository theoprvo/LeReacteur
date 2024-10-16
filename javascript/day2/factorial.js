function factorial(num) {
  if (num >= 1 && num <= 18) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }
    return result;
  } else {
    return "Veuillez entrer un chiffre entre 1 & 18 !";
  }
}

console.log(factorial(4));
