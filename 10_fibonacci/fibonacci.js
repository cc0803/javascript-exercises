const fibonacci = function(number) {
    if (Number(number) == NaN || Number(number) < 1){
        return "OOPS";
    } 
    number = Number(number);


    let sequence = [1, 1];

    // number - 2 because the sequence already has two elements
    for (let i = 0; i < (number - 2); i++){
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence[sequence.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
