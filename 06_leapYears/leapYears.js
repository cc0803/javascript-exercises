const leapYears = function(year) {
    if (year === NaN){
        return "Not a number";
    }
    
    if ((year % 4 == 0) && (year % 100 != 0)){
        return true;
    } else if ((year % 100 == 0) && (year % 400 == 0)){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
