function alphabetSoup(str) {
  let tab = [];
  let sortedStr = "";
  for (let i = 0; i < str.length; i++) {
    tab.push(str.charAt(i));
  }
  tab.sort();
  for (let j = 0; j < tab.length; j++) {
    sortedStr += tab[j];
  }

  return sortedStr;
}

console.log(alphabetSoup("hello")); // Affichera "ehllo"
console.log(alphabetSoup("thereactor")); // Affichera "aceehorrtt"
console.log(alphabetSoup("hooplah")); // Affichera "ahhloop"
