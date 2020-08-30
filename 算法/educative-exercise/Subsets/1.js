/**
 * Given an expression containing digits and operations (+, -, *), find all possible ways in which the expression can be evaluated by grouping the numbers and operators using parentheses.
 */

// 可以结合hashtable做缓存

const diff_ways_to_evaluate_expression = function (input) {
    const result = [];

    // judge bad case
    if (!input.includes('*') && !input.includes('+') && !input.includes('-')) {
        result.push(parseInt(input, 10))
        return result
    }

    for (let i = 0; i < input.length; i++) {
        const char = input[i]
        if (isNaN(parseInt(char, 10))) { // + - *
            // recursive call self
            const leftResult = diff_ways_to_evaluate_expression(input.slice(0, i))
            const rightResult = diff_ways_to_evaluate_expression(input.slice(i + 1))

            // loop for all result
            for (let i = 0; i < leftResult.length; i++) {
                for (let j = 0; j < rightResult.length; j++) {
                    result.push(eval(`(${leftResult[i]})${char}(${rightResult[j]})`))
                }
            }
        }
    }
        
    return result;
};


console.log(`Expression evaluations: ${diff_ways_to_evaluate_expression("1+2*3")}`)
console.log(`Expression evaluations: ${diff_ways_to_evaluate_expression("2*3-4-5")}`)
