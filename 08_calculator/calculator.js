const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array, total = 0) {
	array.map(element => total += element);
  return total;
};

const multiply = function(array, total = 1) {
  array.map(item => total *= item);
  return total;
} ;

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a === 0){
    return 1;
  }
  let total = 1;
	for (let i = 1; i <= a; i++){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
