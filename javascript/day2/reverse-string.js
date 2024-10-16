function reverseString(str) {
  let reverseStr = "";
  let strLengthCount = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    reverseStr = reverseStr + str[strLengthCount];
    // console.log(reverseStr);
    strLengthCount--;
    // console.log(strLengthCount);
  }
  return reverseStr;
}

console.log(reverseString("Le Reacteur"));
