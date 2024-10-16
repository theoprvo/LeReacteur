function box(width, height) {
  let str = "";
  for (let i = 0; i < height; i++) {
    if (i === 0) {
      //si on est sur la 1ere ligne
      for (let i = 0; i < width; i++) {
        if (i === 0) {
          //pour le premier char
          str += "/";
        } else if (i === width - 1) {
          //pour le dernier char
          str += "\\";
        } else {
          str += "*";
        }
      }
    } else if (i === height - 1) {
      //si on est sur la derniere ligne
      for (let i = 0; i < width; i++) {
        if (i === 0) {
          //pour le premier char
          str += "\\";
        } else if (i === width - 1) {
          //pour le dernier char
          str += "/";
        } else {
          str += "*";
        }
      }
    } else {
      for (let i = 0; i < width; i++) {
        if (i === 0 || i === width - 1) {
          str += "*";
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

console.log(box(5, 3));
