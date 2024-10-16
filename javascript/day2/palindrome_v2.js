const palindrome = str => {
    // Fonction pour convertir un caractère accentué en son équivalent non accentué
    const removeAccents = char => {
      const accents = 'ÀÁÂÃÄÅàáâãäåÈÉÊËèéêëÌÍÎÏìíîïÒÓÔÕÖØòóôõöøÙÚÛÜùúûüÝýÿÑñÇç';
      const withoutAccents = 'AAAAAAaaaaaaEEEEeeeeIIIIiiiiOOOOOOooooooUUUUuuuuYyyNnCc';
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      const index = accents.indexOf(char);
      // Si le caractère est contenu dans "accents", on retourne son équivalent non-accentué
      if (index > -1) {
        return withoutAccents[index];
      // Sinon, si le caractère minuscule est contenu dans "alphabet", on le retourne
      } else if (alphabet.indexOf(char.toLowerCase()) > -1) {
        return char;
      // Sinon, comme c'est caractère qui ne fait pas partie de l'alphabet, on retourne une chaine vide
      } else {
        return "";
      }
    };
  
    // Supprimer les espaces, la ponctuation et les apostrophes... et tout mettre en minusucule !
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      newStr += removeAccents(str.charAt(i)).toLowerCase();
    }
  
    // Créer la même chaîne de caractères mais inversée
    let reversed = "";
    for (let i = newStr.length - 1; i >= 0; i--) {
      reversed += newStr.charAt(i);
    }
  
    // Comparer reversed et newStr
    return reversed === newStr;
  };
  
  console.log(palindrome("Et si l'arôme des bottes révèle madame, le verset t'obsède, moraliste !")); // true
  console.log(palindrome("Lune de ma dame d'été, été de ma dame de nul.")); // true
  console.log(palindrome("La mariée ira mal !")); // true
  console.log(palindrome("À Laval, elle l'avala.")); // true