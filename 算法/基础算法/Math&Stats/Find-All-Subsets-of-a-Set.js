/**
 * Find all subsets of a given set of integers.
 */

// backtrace

let tempArr = []
function findAllSubsetsRec(arr, curIndex, sets) {
    // judge jump out status
    if (curIndex > arr.length) {
        return;
    }

    // add tempArr
    sets.push(tempArr.slice());
    
    for (let i = curIndex; i < arr.length; i++) {
        let char = arr[i];
        // add
        tempArr.push(char)

        // rec call
        findAllSubsetsRec(arr, i + 1, sets);
        
        // remove and continue
        tempArr.pop()
    }
}
let findAllSubsets = function (arr, sets) {
    if (!arr || !arr.length) {
        return []
    }

    findAllSubsetsRec(arr, 0, sets)

    return sets
};

let v = [2, 5, 7];
let subsets = [];
findAllSubsets(v, subsets);
console.log(JSON.stringify(subsets));