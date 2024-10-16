function box(width, height) {
  let str = "";
  for (let i = 0; i < height; i++) {
    if (i === 0 || i === height - 1) {
      for (let i = 0; i < width; i++) {
        if (i === 0 || i === width - 1) {
          str += "o";
        } else {
          str += "-";
        }
      }
      str += "\n";
    } else {
      for (let i = 0; i < width; i++) {
        if (i === 0 || i === width - 1) {
          str += "|";
        } else {
          str += " ";
        }
      }
      str += "\n";
    }
  }
  return str;
}

console.log(box(5, 3));
