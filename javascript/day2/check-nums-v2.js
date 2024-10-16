function checkNums(num1, num2) {
  if (num1 > num2) {
    return `${num1} est plus grand que ${num2}`;
  } else if (num2 > num1) {
    return `${num2} est plus grand que ${num1}`;
  } else {
    return `les nombres sont egaux`;
  }
}

console.log(checkNums(1, 2));
