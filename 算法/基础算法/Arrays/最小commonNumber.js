/**
 * Given three integer arrays sorted in ascending order, return the smallest number that is common in all three arrays.
 */

let findLeastCommonNumber = function (a, b, c) {
    if (!a || !b || !c || !a.length || !b.length || !c.length) {
        return -1;
    }

    let p1 = (p2 = p3 = 0);

    while (p1 < a.length && p2 < b.length && p3 < c.length) {
        const v1 = a[p1];
        const v2 = b[p2];
        const v3 = c[p3];

        if (v1 !== v2 || v2 !== v3) {
            if (v1 < v2 && v1 < v3) p1++;
            if (v2 < v1 && v2 < v3) p2++;
            if (v3 < v1 && v3 < v2) p3++;
        } else {
            return a[p1];
        }
    }

    return -1;
};

let v1 = [6, 7, 10, 25, 30, 63, 64];
let v2 = [1, 4, 5, 6, 7, 8, 50];
let v3 = [1, 6, 10, 14];
console.log("Least Common Number: " + findLeastCommonNumber(v1, v2, v3));
