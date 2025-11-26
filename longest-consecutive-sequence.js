// link to leetcode: https://leetcode.com/problems/longest-consecutive-sequence/description/
// log:
// this problem is actually not that hard, but took me a lot of drawing on the whiteboard to simulize
// basically we can store the nums into a set for O(1) lookup speed then we iterate the nums 
// for each iteration, we check if the num is a start of a sequence or not by doing lookup to the set with value of num - 1
// if it is, then we can check the set by incrementing the current number until the current increment is not present in the set
// then we update the longest counter if the current iteration has a longer sequence then the current longest counter

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // iterate the set
  let set = new Set(nums);
  let longest = 0;
  for (let num of set) {
    if (!set.has(num - 1)) {
      let currCount = 1;
      while (set.has(num + currCount)) {
        currCount += 1;
      }

      if (currCount > longest) {
        longest = currCount;
      }
    }
  }

  return longest
};