/**
 * Given a set of n elements, find their kth permutation.
 */

// 尾递归优化
let factorial = function (n, total) {
    if (n <= 1) {
        return total;
    }
    return factorial(n - 1, total * n);
};

let findKthPermutation = function (numArr, k, result) {
    if (!numArr || !numArr.length) {
        return result;
    }

    let n = numArr.length;
    let factorialNum = factorial(n - 1, 1);
    let offset = Math.floor((k - 1) / factorialNum);

    result += `${numArr[offset]}`;
    numArr.splice(offset, 1);
    k = k - offset * factorialNum;

    return findKthPermutation(numArr, k, result);
};

let getPermutation = function (n, k) {
    if (n <= 0 || k <= 0) {
        return;
    }

    // build arr
    const numArr = [];
    for (let i = 0; i < n; i++) {
        numArr.push(i + 1);
    }

    return findKthPermutation(numArr, k, "");
};

console.log("8th permutation of 1234 =", getPermutation(4, 8));
