const removeFromArray = function(array, ...otherargs) {

    for (let i = 0; i < otherargs.length; i++){
        for (let j = 0; j < array.length; j++){
            if(array[j] === otherargs[i]){
                array.splice(j, 1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
