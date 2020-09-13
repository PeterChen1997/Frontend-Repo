/**
 * Given two sorted arrays in descending order, find ‘K’ pairs with the largest sum where each pair consists of numbers from both the arrays.
 */
const Heap = require('../../collections/heap')

const find_k_largest_pairs = function (nums1, nums2, k) {
    const result = [];

    // new minHeap and put k elements into it
    const minHeap = new Heap([], null, (a, b) => return b[0] - a[0])

    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        for (let j = 0; j < Math.min(nums2.length, k); j++) {
            const currentSum = nums1[i] + nums2[j]

            if (minHeap.length < k) {
                minHeap.push([currentSum, i, j])
            } else {
                if (currentSum > minHeap.peek()[0]) {
                    minHeap.pop()
                    minHeap.push([currentSum, i, j])
                } else {
                    break
                }
            }
        }
    }

    minHeap.forEach(element => {
        result.push([nums1[element[1]], nums2[element[2]]])
    })

    return result;
};

process.stdout.write('Pairs with largest sum are: ');
const result = find_k_largest_pairs([9, 8, 2], [6, 3, 1], 3);
result.forEach((a) => {
    process.stdout.write(`[${a[0]}, ${a[1]}] `);
});