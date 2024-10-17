function numberToLetters(num) {
  if (num > 9999 || num < 0) {
    return "Veuillez rentrer un numéro entre 0 et 9999 !";
  }

  let str = "";

  switch (num) {
    case 0:
      return "zéro";
      break;
    case 1:
      return "un";
      break;
    case 2:
      return "deux";
      break;
    case 3:
      return "trois";
      break;
    case 4:
      return "quatre";
      break;
    case 5:
      return "cinq";
      break;
    case 6:
      return "six";
      break;
    case 7:
      return "sept";
      break;
    case 8:
      return "huit";
      break;
    case 9:
      return "neuf";
      break;
    case 10:
      return "dix";
      break;
    case 11:
      return "onze";
      break;
    case 12:
      return "douze";
      break;
    case 13:
      return "treize";
      break;
    case 14:
      return "quatorze";
      break;
    case 15:
      return "quinze";
      break;
    case 16:
      return "seize";
      break;
    case 20:
      return "vingt";
      break;
    case 30:
      return "trente";
      break;
    case 40:
      return "quarante";
      break;
    case 50:
      return "cinquante";
      break;
    case 60:
      return "soixante";
      break;
    case 100:
      return "cent";
      break;
    case 1000:
      return "mille";
      break;
    default:
      if (condition) {
        //
      }
      break;
  }

  return str;
}

console.log(37 % 10);
console.log(Math.floor(37 / 10));
