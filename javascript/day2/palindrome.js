function palindrome(str) {
  let reverseStr = "";
  let strLengthCount = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    reverseStr = reverseStr + str[strLengthCount];
    if (str[i] !== reverseStr[i]) {
      return "La string n'est pas un palindrome !";
    }
    strLengthCount--;
  }
  return true;
}

console.log(palindrome("racecar"));
