/**
 * Merge overlapping intervals in an array of interval pairs.
 */

class Pair {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}

let mergeIntervals = function (v) {
    if (!v || !v.length) {
        return [];
    }

    let result = [];
    let preInterval = v[0];
    for (let i = 1; i < v.length; i++) {
        let curInterval = v[i];

        if (curInterval.first <= preInterval.second) {
            preInterval.second = Math.max(
                preInterval.second,
                curInterval.second
            );
        } else {
            result.push(preInterval);
            preInterval = curInterval;
        }
    }

    result.push(preInterval);

    return result;
};

let v = [
    new Pair(1, 5),
    new Pair(3, 7),
    new Pair(4, 6),
    new Pair(6, 8),
    new Pair(10, 12),
    new Pair(11, 15),
];

let result = mergeIntervals(v);

let result_str = "";
for (let i = 0; i < result.length; i++) {
    result_str =
        result_str + "[" + result[i].first + ", " + result[i].second + "] ";
}
console.log(result_str);
