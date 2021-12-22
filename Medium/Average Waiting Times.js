/* Link:https://leetcode.com/problems/average-waiting-time/

38 / 38 test cases passed.
Status: Accepted
Runtime: 152 ms
Memory Usage: 61.8 MB

*/

var averageWaitingTime = function (customers) {
    var time = customers[0][1]
    var turn = customers[0][0] + customers[0][1]
    for (let i = 1; i < customers.length; i++) {
        if (turn < customers[i][0]) { //if the customer didn't arrived even though the chef is free-handed   
            turn = customers[i][0]
            time += customers[i][1]
            turn += customers[i][1]
        } else {
            time += turn - customers[i][0] + customers[i][1]
            turn += customers[i][1]
        }
    }
    return time / customers.length
};

// Input: [[5,2],[5,4],[10,3],[20,1]]
// Expected : 3.25000
console.log(averageWaitingTime([[5, 2],[5, 4],[10, 3],[20, 1]
]))
// Output: 3.25000