// link to leetcode: https://leetcode.com/problems/3sum/
// log:
// this problem looks like 2 sum but with a twist. still using two pointer method but instead of combining 2, we need to combine 3 number.
// the approach here is to have a fixed pointer and a moving two pointer.
// the main point for using two pointer is to having the input sorted so we know which pointer to move after checking the result of the sum
// the hardest part for this solution would be to check the duplicate triplets.
// at first, i tried with using set, but set in javascript not compare value but reference. Object (including arrays) are all have difference reference even if the values is the same
// so i goes with checking duplicate number.
// first, check if number on index i is the same as number on index i-1
// second, skip duplicate value for j and k after triplets is found. also need to make sure that j indices is not exceding the array bound
// Time complexity: O(n^2) => For each fixed i (n iterations), j and k pointers together make one pass through the remaining array (n operations), resulting in O(n^2)
// Space complexity: O(1) => since only using an array for answer
//
// below is my log rewritten by AI
// Algorithm:
// 1. Sort the array to enable two-pointer technique
// 2. Fix the first element (i), then use two pointers (j, k) on the remaining array
// 3. Move pointers based on sum: if sum > 0, decrease k; if sum < 0, increase j
// 
// Duplicate handling challenge:
// Initially tried using Set, but JavaScript Sets compare arrays by reference, not value.
// Solution: Skip duplicates at three points:
// - Skip duplicate values for i before starting inner loop
// - Skip duplicate values for j and k after finding a valid triplet
// 
// Time: O(n^2) - For each i (n iterations), j and k make one combined pass (n operations)
// Space: O(1) - Constant extra space excluding output array


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sortedNums = nums.sort((a,b) => a - b);
    const ans = [];

    let i = 0;

    while (i <= sortedNums.length-3) {
        if (i !== 0 && sortedNums[i] === sortedNums[i-1]) {
          i++;
          continue;
        }

        let j = i + 1;
        let k = sortedNums.length - 1;

        while (j < k) {
            if (sortedNums[i] + sortedNums[j] + sortedNums[k] > 0) {
                k -= 1;
            }
            else if (sortedNums[i] + sortedNums[j] + sortedNums[k]  < 0) {
                j += 1;
            }
            else {
                ans.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
                j++
                k--;

                while (j < k && sortedNums[j] === sortedNums[j-1]) {
                  j++;
                }
                while (sortedNums[k] === sortedNums[k+1]) {
                  k--;
                }
            }
        }

        i++;
    }
    

    return [...ans]; 
};
