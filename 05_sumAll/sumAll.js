const sumAll = function(start, end) {
    if(
        start < 0 || 
        end < 0 ||
        !Number.isInteger(start) ||
        !Number.isInteger(end)
    ) return "ERROR"

    if(start > end) {
        const preservedStartValue = start
        start = end
        end = preservedStartValue
    }

    let accumulator = 0
    for(let i = start; i <= end; i++) {
        accumulator += i
    }

    return accumulator

};

// Do not edit below this line
module.exports = sumAll;
