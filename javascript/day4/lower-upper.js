function lowerUpper(str) {
    str = str.trim();
    let result = ""

    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            result+= " ";
            counter = 0;
        } else {
            if (counter % 2 == 0) {//si pair
                result+=str[i].toLowerCase();
                counter++;
            } else {
                result+=str[i].toUpperCase();
                counter++;
            }
        }
        
    }
    return result;
}


console.log(lowerUpper("   LA VILLE DE PARIS")); // Affichera : "lA vIlLe dE pArIs"
