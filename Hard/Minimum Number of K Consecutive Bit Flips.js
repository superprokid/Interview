/* Link:https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/

113 / 113 test cases passed.
Status: Accepted
Runtime: 7096 ms
Memory Usage: 47.9 MB

*/

var minKBitFlips = function(nums, k) {
    let count=0
    for(let i = 0; i < nums.length ; i++){
        if(nums[i] == 0){
            if( i+k > nums.length) //if the length of those last bit shorter than k
                break
            for(let j = 0 ; j < k; j++)
                nums[i+j] = 1 - nums[i+j]
            count++
        }
    }
    if(nums.includes(0)) 
        return -1
    else 
        return count
};

// Input: [0,0,0,1,0,1,1,0] 3
// Expected : 3
console.log(minKBitFlips([0,0,0,1,0,1,1,0],3))
// Output: 3