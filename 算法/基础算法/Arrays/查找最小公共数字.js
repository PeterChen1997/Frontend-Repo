/**
 * Given three integer arrays sorted in ascending order, return the smallest number that is common in all three arrays.
 */

let findLeastCommonNumber = function (a, b, c) {
    let aPointerIndex = 0
    let bPointerIndex = 0
    let cPointerIndex = 0

    while (aPointerIndex < a.length
            && bPointerIndex < b.length
            && cPointerIndex < c.length) {
        // if equal
        if (a[aPointerIndex] === b[bPointerIndex]
            && a[aPointerIndex] === c[cPointerIndex]) {
            return a[aPointerIndex]
        }

        // increment iterator
        if (a[aPointerIndex] <= b[bPointerIndex] && a[aPointerIndex] <= c[cPointerIndex]) {
            aPointerIndex++
        } else if (b[bPointerIndex] <= a[aPointerIndex] && b[bPointerIndex] <= c[cPointerIndex]) {
            bPointerIndex++
        } else if (c[cPointerIndex] <= a[aPointerIndex] && c[cPointerIndex] <= b[bPointerIndex]) {
            cPointerIndex++
        }
    }
    
    return -1;
};

let v1 = [6, 7, 10, 25, 30, 63, 64];
let v2 = [1, 4, 5, 6, 7, 8, 50];
let v3 = [1, 6, 10, 14];
console.log("Least Common Number: " + findLeastCommonNumber(v1, v2, v3));