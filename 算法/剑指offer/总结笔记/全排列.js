

function permutation(nums) {
    function permutationRec(tempArr, result) {
        if (tempArr.length === nums.length) {
            result.push(tempArr.join())
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (tempArr.includes(nums[i])) {
                continue;
            }

            tempArr.push(nums[i]);
            permutationRec(tempArr, result);
            tempArr.pop();
        }

        return result
    }


    if (!nums || !nums.length) {
        return [];
    }

    return permutationRec([], [])
}


console.log(permutation([1, 2, 3]))