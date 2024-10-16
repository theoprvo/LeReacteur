function simpleAdding(num) {
  if (typeof num === Number) {
    let result = 0;

    for (let index = 0; index <= num; index++) {
      result = index + result;
    }
    return result;
  } else {
    return "Veuillez entrer un chiffre !";
  }
}

console.log(simpleAdding("toto"));
