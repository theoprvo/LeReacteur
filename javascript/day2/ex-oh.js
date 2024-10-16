function exOh(str) {
  if (typeof str === "string") {
    let strClean = str.toLowerCase().trim();
    let countO = 0;
    let countX = 0;
    for (let i = 0; i < str.toLowerCase().length; i++) {
      if (strClean[i] === "x" || strClean[i] === "o") {
        if (strClean[i] === "x") {
          countX++;
        } else {
          countO++;
        }
      } else {
        return "La string ne doit comporté que des x et des o";
      }
    }

    if (countO === countX) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Veuillez entrer une string";
  }
}

console.log(exOh("Xo"));
