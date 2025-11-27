// link to leetcode: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
// log:
// My initial approach was using a map for a quick lookup
// it's working, it's fast, but the space complexity grows to O(n)
// since the array is already sorted (and if it isn’t, we can sort it first in O(n log n))
// we can switch to a two-pointer strategy
//
// the idea:
// one pointer to read from the left, and another pointer from the right
// when to move the pointer and which to move?
// if the sum of numbers pointer left and right is more than target, then move the right pointer to the left by one
// if the sum of numbers pointer left and right is less than target, then move the left pointer to the right by one
// do this while left is less than right
// and return the indices (index + 1) if the sum matches the target

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let left = 0, right = numbers.length - 1; left < right;) {
    if (numbers[left] + numbers[right] > target) {
      right--;
    } else if (numbers[left] + numbers[right] < target) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }

  // This solution uses O(n) space due to the hash map. Since the goal is to achieve O(1) space complexity, we should switch to a two-pointer approach.
  // const map = new Map();
  // for (let i = 0; i < numbers.length; i++) {
  //     let curr = target - numbers[i];
  //     if (map.size > 0 && map.has(target-numbers[i])) {
  //         return [map.get(target-numbers[i]) + 1, i + 1]
  //     }
  //     map.set(numbers[i], i);
  // }
  // return [];
};