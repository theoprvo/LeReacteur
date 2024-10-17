function arrayAddition(tab) {
  tab.sort(function (a, b) {
    return a - b;
  });

  let biggestNumber = tab[tab.length - 1];
  let summOf = 0;
  for (let i = 0; i < tab.length - 1; i++) {
    summOf += tab[i];
  }
  return summOf === biggestNumber;
}

console.log(arrayAddition([1, 2, 3, 12, 6])); // Affichera true
console.log(arrayAddition([1, 2, 3, 4])); // Affichera false
