/**
 * Divide two integers without using '/' (division) or '*' (multiplication) operators.
 */

// use << >> operator
let integerDivide = function (x, y) {
    if (!x || !y || x < y) {
        return 0;
    }

    let tempValue = y;
    let counter = 0;
    while (tempValue < x) {
        counter++;
        tempValue = tempValue << 1;
    }

    if (tempValue === x) {
        return Math.pow(2, counter);
    }

    return Math.pow(2, counter - 1) + integerDivide(x - tempValue / 2, y);
};

console.log("7/2 = " + integerDivide(7, 2));
console.log("5/4 = " + integerDivide(5, 4));
console.log("1/3 = " + integerDivide(1, 3));
console.log("40/5 = " + integerDivide(40, 5));
console.log("40/4 = " + integerDivide(40, 4));
