const reverseString = function(string) {
    let split = string.split("");
    let reversed = [];
    let result = "";
    
    for (let i = 0; i < string.length; i++){
        reversed.push(split.pop());
    }

    result = reversed.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
