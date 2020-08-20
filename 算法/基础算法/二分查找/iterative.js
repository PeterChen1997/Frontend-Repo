/**
 * 迭代的好处是空间复杂度为1
 * 时间复杂度为 logn
 */

function binarySearch(arr, target) {
    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)
        let midVal = arr[mid]
        
        if (midVal > target) {
            high = mid - 1
        } else if (midVal < target) {
            low = mid + 1
        } else {
            return mid
        }
    }

    return -1
}

let arr = [1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222]
let inputs = [10, 49, 99, 110, 176]

for (let i = 0; i < inputs.length; i++){
  console.log("binarySearch(arr, " + (inputs[i])+ ") = " +  (binarySearch(arr, inputs[i])))
}