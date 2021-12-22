/* Link:https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

2094 / 2094 test cases passed.
Status: Accepted
Runtime: 112 ms
Memory Usage: 44.5 MB

*/

var smallerNumbersThanCurrent = function(nums) {
    var count =0
    var arr = []
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i] > nums[j]) count++
        }
        arr.push(count)
        count = 0
    }
    return arr
};

// Input: [8,1,2,2,3]
// Expected : [4,0,1,1,3]
console.log(findMedianSortedArrays([8,1,2,2,3]))
// Output: [4,0,1,1,3]