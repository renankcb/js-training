function getHighestProductBetweenThreeNumbersInArray(intArray) {
    return intArray.sort((a, b) => b - a).slice(0, 3).reduce((a, b) => a * b);
}

module.exports = {
    getHighestProductBetweenThreeNumbersInArray
}