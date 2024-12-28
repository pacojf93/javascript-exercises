const removeFromArray = function(array, ...values) {
    return values.reduce(
            (filteredArray,value)=>filteredArray.filter(n=>n!==value), 
            array,
        )
};

// Do not edit below this line
module.exports = removeFromArray;
