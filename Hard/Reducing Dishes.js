/* Link:https://leetcode.com/problems/reducing-dishes/

60 / 60 test cases passed.
Status: Accepted
Runtime: 64 ms
Memory Usage: 38.7 MB

*/

var maxSatisfaction = function (satisfaction) {
    satisfaction.sort((a, b) => {return a - b;})
    var max = 0
    var dish = 0
    for (let i = satisfaction.length - 1; i >= 0; i--) { //Because we need max so we go from the highest to the lowest
        dish += satisfaction[i]
        if (dish < 0) break
        else max += dish
    }
    return max
};

/*Example
[-1,-8,0,5,-7]
Sort: [-8,-7,-1,0,5]
Max = (5) + (5 + 0) + (5 + 0 - 1) = 14 we con continue because (5 + 0 -1 - 7) = -3 is not positive
*/

// Input: [-1,-8,0,5,-7]
// Expected : 14
console.log(maxSatisfaction([-1, -8, 0, 5, -7]))
// Output: 14