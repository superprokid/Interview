/* Link:https://leetcode.com/problems/median-of-two-sorted-arrays

2094 / 2094 test cases passed.
Status: Accepted
Runtime: 112 ms
Memory Usage: 44.5 MB

*/

var findMedianSortedArrays = function (nums1, nums2) {
    const arr = nums1.concat(nums2)
    const x = arr.length
    arr.sort((a, b) => { return a - b; })
    const mid = Math.round(arr.length / 2) - 1
    if (x % 2 == 0) return ((arr[mid] + arr[mid + 1]) / 2).toFixed(4) //The arrays is even so return half of sum arr[mid] and arr[mid+1]
    else return arr[mid].toFixed(4)
};

// Input: [3],[-2,-1]
// Expected : -1.00000
console.log(findMedianSortedArrays([3],[-2,-1]))
// Output: -1.00000