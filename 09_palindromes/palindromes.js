const palindromes = function (string) {
    let proccessed = string.toLowerCase().replace(/[^a-z]/g, "");
    let array = proccessed.split("");

    for(let i = 0; i < proccessed.length; i++){
        if (array[i] != array[proccessed.length - i - 1]){
            return false;
        }
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;


// String zu array machen
// Aus Array alle Kommas, Ausrufezeichen, Punkte, Fragezeichen und Leerzeichen entfernen
// Element für element von hinten nach vorne vergreichen