const convertToCelsius = function(degree) {

    let degreeInCelsius = (degree - 32) * (5 / 9);
    // multipliying and dividing by ten to get result rounded to 1 decimal
    return Math.round(degreeInCelsius * 10) / 10;
};

const convertToFahrenheit = function(degree) {
    let degreeInFahrenheit = (degree * (9 / 5) + 32);
    return Math.round(degreeInFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
