/**
 * 递归实现
 * 空间时间复杂度为 logn
 */

function binarySearchRec(arr, target, start, end) {
    // 递归结束条件
    if (end < start) {
        return -1
    }

    const mid = start + Math.floor((end - start) / 2)
    const midVal = arr[mid]

    if (midVal > target) {
        return binarySearchRec(arr, target, start, mid - 1)
    } else if (midVal < target) {
        return binarySearchRec(arr, target, mid + 1, end)
    } else {
        return mid
    }
}

function binarySearch(arr, target) {
    return binarySearchRec(arr, target, 0, arr.length - 1)
}

let arr = [1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222]
let inputs = [10, 49, 99, 110, 176]

for (let i = 0; i < inputs.length; i++){
  console.log("binarySearch(arr, " + (inputs[i])+ ") = " +  (binarySearch(arr, inputs[i])))
}