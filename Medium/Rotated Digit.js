/* Link:https://leetcode.com/problems/rotated-digits/

50 / 50 test cases passed.
Status: Accepted
Runtime: 80 ms
Memory Usage: 39.9 MB

*/

var rotatedDigits = function (n) {
    if (n == 1) return 0
    count = 0
    for (let i = 2; i <= n; i++) {
        i = i.toString()
        if (i.includes('3') || i.includes('4') || i.includes('7')) { //number must not include 3, 4 and 7
            continue;
        }
        if (i.includes('2') || i.includes('5') || i.includes('6') || i.includes('9')) { //number must include atleast 1 number of 2, 5, 6 or 9
            count++;
        }
    }
    return count
};

// Input: 857
// Expected : 247
console.log(rotatedDigits(857))
// Output: 247