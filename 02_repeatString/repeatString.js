const repeatString = function(string, number) {
    let resultString = "";
    if (number < 0){
        return "ERROR";
    }
    
    for (let i = 0; i < number; i++){
        resultString += string;
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
