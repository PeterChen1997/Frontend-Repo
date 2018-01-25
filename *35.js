// 题目描述： 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007



// 常规解法： 超时
function InversePairs(data) {
    let result = 0
    let flag = 0
    while (flag != data.length - 1) {

        for (let i = 1; i < data.length; i++) {
            if (data[flag] > data[i]) {
                result++
            }
        }
        flag++
    }


    return result % 1000000007
}


// 高级操作：
function InversePairs(data) {
    var sup = data.slice()
    var count = 0
    count = mergeSort(data, sup, 0, data.length - 1)
    return count % 1000000007
}

function mergeSort(data, copy, start, end) {
    if (end === start) return 0;
    var mid = (end - start) >> 1,
        left = mergeSort(copy, data, start, start + mid),
        right = mergeSort(copy, data, start + mid + 1, end),
        count = 0,
        p = start + mid, //前一个数组的最后一个下标
        q = end, //后一个数组的下标
        copyIndex = end; //辅助数组下标，从最后一个算起

    while (p >= start && q >= start + mid + 1) {
        if (data[p] > data[q]) {
            count += q - start - mid;
            copy[copyIndex--] = data[p--];
        } else {
            copy[copyIndex--] = data[q--];
        }
    }

    while (p >= start) {
        copy[copyIndex--] = data[p--];
    }

    while (q >= start + mid + 1) {
        copy[copyIndex--] = data[q--];
    }
    return left + right + count;
}