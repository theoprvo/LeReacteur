function wordCount(str) {
  let strTrim = str.trim();
  let counter = 0;
  for (let i = 0; i < strTrim.length; i++) {
    if (strTrim[i] === " ") {
      counter++;
    }
  }
  return counter;
}

console.log(wordCount("   bo onjo ur   "));
