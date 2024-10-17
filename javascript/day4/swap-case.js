// const majuscules = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
//   " ",
// ];

// const minuscules = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
//   " ",
// ];

// function swapCase(str) {
//   let result = [];
//   let resultStr = "";

//   for (let i = 0; i < str.length; i++) {
//     result.push(str[i]);
//     if (majuscules.includes(result[i]) === true) {
//       let index = majuscules.indexOf(str[i]);
//       result[i] = minuscules[index];
//     } else {
//       let index = minuscules.indexOf(str[i]);
//       result[i] = majuscules[index];
//     }
//   }

//   for (let i = 0; i < result.length; i++) {
//     resultStr += result[i];
//   }

//   return resultStr;
// }

// console.log(swapCase("Hello")); // Affichera : "hELLO"
// console.log(swapCase("Le Reacteur")); // Affichera : "lE rEACTEUR

function swapCasev(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      result += str[i].toUpperCase();
    } else if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

// console.log(swapCasev("Hello")); // Affichera : "hELLO"
// console.log(swapCasev("Le Reacteur")); // Affichera : "lE rEACTEUR"

function swapCasev2(tab) {
  let resultTab = [];
  for (let index = 0; index < tab.length; index++) {
    let str = "";
    for (let j = 0; j <= tab[index].length; j++) {
      if (tab[index].charAt(j) === tab[index].charAt(j).toLowerCase()) {
        str += tab[index].charAt(j).toUpperCase();
      } else if (tab[index].charAt(j) === tab[index].charAt(j).toUpperCase()) {
        str += tab[index].charAt(j).toLowerCase();
      } else {
        str += tab[index].charAt(j);
      }
    }
    resultTab.push(str);
  }
  return resultTab;
}

console.log(swapCasev2(["Hello", "Le Reacteur"])); // Affichera : ["hELLO", "lE rEACTEUR"
