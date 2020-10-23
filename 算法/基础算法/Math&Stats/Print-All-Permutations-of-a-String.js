/**
 * Implement a method to print all permutations of a given string without duplicates.
 */

// method1: trace back method
// method2: swap

let result = [];
let swapChar = function (input, i, j) {
    let inputArr = input.split('');
    [inputArr[i], inputArr[j]] = [inputArr[j], inputArr[i]]
    return inputArr.join('')
};

let permuteStringRec = function (input, currentIndex) {
    // judge break status
    if (currentIndex === input.length - 1) {
        result.push(input.slice())
        return
    }

    // rec call
    for (let i = currentIndex; i < input.length; i++) {
        let swappedStr = swapChar(input, i, currentIndex)
        permuteStringRec(swappedStr, currentIndex + 1)
    }


};

let permuteString = function (input) {
    permuteStringRec(input, 0)
    return result
};

let input = "bad";
console.log("All permutations of", input);
permuteString(input);
console.log(result);