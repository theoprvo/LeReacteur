// function box(width, height) {
//     let str = "";
//     for (let i = 0; i < height; i++) {
//         if (i === 0) {

//         }
//     }
// }

function box(width, height) {
  let str = "";
  for (let h = 0; h < height; h++) {
    for (let i = 0; i < width; i++) {
      str += "-";
    }
    str.replace(str[0]);

    if (h !== height - 1) {
      str += "\n";
    }
  }
  return str;
}

// console.log(box(5, 3));

let string = "AAAA";

let test = string.replace(string[0], "B");

console.log(test);
