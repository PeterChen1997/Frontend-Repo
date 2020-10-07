/**
 * Given an integer array, find all Pythagorean triplets.
 */

// time: N ^ 2
let findPythagoreanTriplets = function (arr) {
    if (!arr || !arr.length) {
        return [];
    }

    // sort arr
    arr.sort((a, b) => a - b);
    // filter arr
    arr = arr.filter((a) => a > 0);

    let len = arr.length;
    let triplets = [];

    // loop i and move j and k
    for (let i = 2; i < len; i++) {
        let c = arr[i] * arr[i];

        let j = 0;
        let k = len - 1;
        while (j < k) {
            if (j === i) {
                j++;
                continue;
            }

            if (k === i) {
                k--;
                continue;
            }

            let a = arr[j] * arr[j];
            let b = arr[k] * arr[k];

            if (a + b === c) {
                triplets.push([arr[j], arr[k], arr[i]]);
                break;
            } else if (a + b > c) {
                k--;
            } else {
                j++;
            }
        }
    }

    return triplets;
};

let pythagorean = [4, 16, 1, 2, 3, 5, 6, 8, 25, 10];
let result = findPythagoreanTriplets(pythagorean);
console.log("Original:", pythagorean);
console.log("Pythagorean triplets:", JSON.stringify(result));
