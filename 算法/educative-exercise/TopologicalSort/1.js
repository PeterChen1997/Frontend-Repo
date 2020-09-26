/**
 * Given a sequence originalSeq and an array of sequences, write a method to find if originalSeq can be uniquely reconstructed from the array of sequences.

Unique reconstruction means that we need to find if originalSeq is the only sequence such that all sequences in the array are subsequences of it.

Example 1:

Input: originalSeq: [1, 2, 3, 4], seqs: [[1, 2], [2, 3], [3, 4]]
Output: true
Explanation: The sequences [1, 2], [2, 3], and [3, 4] can uniquely reconstruct   
[1, 2, 3, 4], in other words, all the given sequences uniquely define the order of numbers 
in the 'originalSeq'. 
Example 2:

Input: originalSeq: [1, 2, 3, 4], seqs: [[1, 2], [2, 3], [2, 4]]
Output: false
Explanation: The sequences [1, 2], [2, 3], and [2, 4] cannot uniquely reconstruct 
[1, 2, 3, 4]. There are two possible sequences we can construct from the given sequences:
1) [1, 2, 3, 4]
2) [1, 2, 4, 3]
Example 3:

Input: originalSeq: [3, 1, 4, 2, 5], seqs: [[3, 1, 5], [1, 4, 2, 5]]
Output: true
Explanation: The sequences [3, 1, 5] and [1, 4, 2, 5] can uniquely reconstruct 
[3, 1, 4, 2, 5].
 */


// judge if has multi-result
// judge next char is the same
const can_construct = function (originalSeq, sequences) {
    if (!originalSeq || !originalSeq.length || !sequences || !sequences.length) {
        return false
    }

    // init graph
    const inDegree = {}
    const graph = {}

    sequences.forEach((seq) => {
        for (let i = 0; i < seq.length; i++) {
            inDegree[seq[i]] = 0;
            graph[seq[i]] = [];
        }
    });

    // build graph
    sequences.forEach(seq => {
        for (let i = 1; i < seq.length; i++) {
            const preChar = seq[i - 1]
            const nextChar = seq[i]
            graph[preChar].push(nextChar)
            inDegree[nextChar]++
        }
    })

    // length judge
    if (Object.keys(inDegree).length !== originalSeq.length) {
        return false
    }

    // find resource
    const sources = []
    Object.keys(inDegree).forEach(key => {
        if (inDegree[key] === 0) {
            sources.push(key)
        }
    })

    // loop for graph
    const sortedOrder = []
    while (sources.length > 0) {
        // extra judge
        if (sources.length > 1) {
            return false
        }
        if (originalSeq[sortedOrder.length] !== parseInt(sources[0])) {
            return false
        }

        const vertex = sources.shift()
        sortedOrder.push(vertex)
        graph[vertex].forEach(child => {
            inDegree[child]--
            if (inDegree[child] === 0) {
                sources.push(child)
            }
        })
    }

    return sortedOrder.length === originalSeq.length;
};


console.log(
    `Can construct: ${can_construct(
        [1, 2, 3, 4],
        [
            [1, 2],
            [2, 3],
            [3, 4],
        ]
    )}`
);
console.log(
    `Can construct: ${can_construct(
        [1, 2, 3, 4],
        [
            [1, 2],
            [2, 3],
            [2, 4],
        ]
    )}`
);
console.log(
    `Can construct: ${can_construct(
        [3, 1, 4, 2, 5],
        [
            [3, 1, 5],
            [1, 4, 2, 5],
        ]
    )}`
);