/* Link:https://leetcode.com/problems/number-of-visible-people-in-a-queue/

42 / 42 test cases passed.
Status: Accepted
Runtime: 3996 ms
Memory Usage: 62.3 MB

*/

var canSeePersonsCount = function (heights) {
    const see = []
    var numsee = 0;
    max = 0
    for (let i = 0; i < heights.length; i++) {
        for (let j = i + 1; j < heights.length; j++) { 
            if (max < heights[j]) {  //if the height of the next person higher than the max person
                max = heights[j]
                numsee++
            }
            if (max > heights[i]) //if the highest visible person is higher than the person we are looking from his point of view
                break
        }
        see.push(numsee)
        numsee = 0
        max = 0
    }
    return see
};

// Input: [10,6,8,5,11,9]
// Expected : [3,1,2,1,1,0]
console.log(findMedianSortedArrays([10, 6, 8, 5, 11, 9]))
// Output: [3,1,2,1,1,0]