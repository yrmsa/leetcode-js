// link to leetcode: https://leetcode.com/problems/container-with-most-water/
// log:
// instead of paragraph. ill try to summarize it into points
// Algorithm:
// 1. set the pointer to the first and last index, and set maximum area to 0
// 2. calculate the maximum area by having the minimum height between two pointers multiply with the distance between 2 index.
// 3. compare the current maximum area with the calculated maximum area just now
// 4. move the first pointer forward if the height is less than the height of second pointer. otherwise move the second pointer backward
//
// Which pointer to move challenge:
// initially tried with i = 0 and j = i+1 and move i to j if height[j] > height[i]. but quickly recognize its flaw with [1, 2, 1] test case.
// with this it will output 1, since i will move to index 1 without checking the area for first and last index
// solution: have pointer on both end of array and check the minimum height between those 2 value. then move the pointer which have the least value.
// moving the taller pointer keeps us stuck with the shorter wall as the limit, so area can only decrease
// moving the shorter pointer gives us a chance to find a taller wall that might compensate for the width loss
// 
// Time: O(n) - for moving both pointer up to the middle
// Space: O(1) - Constant extra space

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maximumArea = 0;
  for (let i = 0, j = height.length-1; i < j;) {
    maximumArea = Math.max(maximumArea, Math.min(height[i], height[j]) * (j-i));

    if (height[i] < height[j]) {
      i++;
    }
    else { 
      j--;
    }
  }

  return maximumArea
};

console.log(maxArea([1,2,1])) // should output 2 (index 0 and 2)
console.log(maxArea([1,3,2,5,25,24,5])); // should output 24 (index 4 and 5)
console.log(maxArea([4,6,4,4,6,2,6,7,11,2])) // should output 42 (index 1 and 8)
