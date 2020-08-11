/**
 * Comparing Strings containing Backspaces (medium) #
Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

Example 1:

Input: str1="xy#z", str2="xzz#"
Output: true
Explanation: After applying backspaces the strings become "xz" and "xz" respectively.
Example 2:

Input: str1="xy#z", str2="xyz#"
Output: false
Explanation: After applying backspaces the strings become "xz" and "xy" respectively.
Example 3:

Input: str1="xp#", str2="xyz##"
Output: true
Explanation: After applying backspaces the strings become "x" and "x" respectively.
In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.
Example 4:

Input: str1="xywrrmp", str2="xywrrmu#p"
Output: true
Explanation: After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.
 */
function getNextValidCharIndex(str, pointer) {
    let backCounter = 0
    while (pointer >= 0) {
        if (str[pointer] === '#') {
            backCounter++
        } else if (backCounter > 0) {
            backCounter--
        } else {
            break
        }
        pointer--
    }
    return pointer
}

const backspace_compare = function(str1, str2) {
    let pointerOne = str1.length - 1
    let pointerTwo = str2.length - 1

    while (pointerOne >= 0 || pointerTwo >= 0) {
        const i1 = getNextValidCharIndex(str1, pointerOne)
        const i2 = getNextValidCharIndex(str2, pointerTwo)

        // str end judge
        if (i1 < 0 && i2 < 0) {
            return true
        } else if (i1 < 0 || i2 < 0) {
            return false
        }

        // char judge
        if (str1[i1] !== str2[i2]) {
            return false
        }

        pointerOne = i1 - 1
        pointerTwo = i2 - 1
    }
    return true
};

console.log(backspace_compare("xp#", "xyz##"))