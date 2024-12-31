const palindromes = function (phrase) {
    phrase = phrase.split("")
                .filter(c => c.match(/[a-z]|[0-9]/i))
                .map(c => c.toLowerCase())
                .join("")

    const rPhrase = phrase.split("")
                        .reverse()
                        .join("")
    
    return phrase === rPhrase
};

// Do not edit below this line
module.exports = palindromes;
