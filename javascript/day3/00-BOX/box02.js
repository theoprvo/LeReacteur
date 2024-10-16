function box(width, height) {
  let str = "";
  for (let i = 0; i < height; i++) {
    if (i === 0) {
      for (let j = 0; j < width; j++) {
        if (j === 0 || j === width - 1) {
          str += "A";
        } else {
          str += "B";
        }
      }
    } else if (i === height - 1) {
      for (let j = 0; j < width; j++) {
        if (j === 0 || j === width - 1) {
          str += "C";
        } else {
          str += "B";
        }
      }
    } else {
      for (let j = 0; j < width; j++) {
        if (j === 0 || j === width - 1) {
          str += "B";
        } else {
          str += " ";
        }
      }
    }

    if (i !== height - 1) {
      str += "\n";
    }
  }
  return str;
}

console.log(box(5, 1));
