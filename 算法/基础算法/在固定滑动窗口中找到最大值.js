// 使用数组维护最大的数值索引，用于导出当前窗口的max值

let findMaxSlidingWindow = function (arr, windowSize) {
    if (!arr || !arr.length) {
        return []
    }

    const result = [];
    let windowIndexArr = []

    for (let i = 0; i < arr.length; i++) {
        const curItem = arr[i]

        /** refresh window index arr */ 
        // remove the outside index
        windowIndexArr = windowIndexArr.filter(index => index > i - windowSize)
        // remove not fit index
        while (arr[windowIndexArr[windowIndexArr.length - 1]] < curItem) {
            windowIndexArr.pop()
        }

        windowIndexArr.push(i)

        // > 3 then push result
        if (i < windowSize - 1) {
            continue
        }
        result.push(arr[windowIndexArr[0]])
    }

    return result;
};


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("Array = " + array);
// console.log("Max = " + findMaxSlidingWindow(array, 3));

let array1 = [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67]  
console.log("Array = " + array1);
console.log("Max = " + findMaxSlidingWindow(array1, 3));