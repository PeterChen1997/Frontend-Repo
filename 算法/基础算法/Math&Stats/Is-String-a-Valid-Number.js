/**
 * Given an input string, determine if it makes a valid number or not.
 */

// state machine

const STATE = {
    INTEGER: "INTEGER",
    DECIMAL: "DECIMAL",
    START: "START",
    UNKNOWN: "UNKNOWN",
    AFTERDECIMAL: "AFTERDECIMAL",
};

// 1
// 1.
// 1.1
// unknown

let getNextState = function (curState, ch) {
    if (curState === STATE.START || curState === STATE.INTEGER) {
        if (ch === '.') {
            return STATE.DECIMAL
        } else if (ch >= '0' && ch <= '9') {
            return STATE.INTEGER
        } else {
            return STATE.UNKNOWN
        }
    }

    if (curState === STATE.DECIMAL) {
        if (ch >= '0' && ch <= '9') {
            return STATE.AFTERDECIMAL
        } else {
            return STATE.UNKNOWN
        }
    }

    if (curState === STATE.AFTERDECIMAL) {
        if (ch >= "0" && ch <= "9") {
            return STATE.AFTERDECIMAL;
        } else {
            return STATE.UNKNOWN;
        }
    }

    return STATE.UNKNOWN
};

let isNumberValid = function (s) {
    if (!s || !s.length) {
        return false
    }

    let i = 0
    if (s[i] === '-' || s[i] === '+') {
        i++
    }

    let curState = STATE.START
    for (let j = i; j < s.length; j++) {
        curState = getNextState(curState, s[j])
        if (curState === STATE.UNKNOWN) {
            return false
        }
    }

    // 1.
    if (curState === STATE.DECIMAL) {
        return false
    }

    return true
};

console.log("Is this number valid 4.325? " + isNumberValid("4.325"));
console.log("Is this number valid 1.1.1? " + isNumberValid("1.1.1"));
console.log("Is this number valid 222? " + isNumberValid("222"));
console.log("Is this number valid 22.? " + isNumberValid("22."));
console.log("Is this number valid 0.1? " + isNumberValid("0.1"));
console.log("Is this number valid 22.22.? " + isNumberValid("22.22."));
console.log("Iis this number valid 1.? " + isNumberValid("1."));