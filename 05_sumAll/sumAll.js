const sumAll = function(num1, num2) {
    
    let sum = 0;
    if (typeof(num1) !== typeof(1) || typeof(num2) != typeof(1)){
        return "ERROR";
    }
    if (num1 < 0 || num2 < 0 ){
        return "ERROR";
    }
    // Checking to see wich number is smaller so i is initialized to that one
    if (num1 < num2){
        for (let i = num1; i <= num2; i ++){
            sum += i;
        }
    } else {
        for (let i = num2; i <= num1; i ++){
            sum += i;
        }
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
