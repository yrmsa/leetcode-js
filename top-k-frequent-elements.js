// link to leetcode: https://leetcode.com/problems/top-k-frequent-elements/description/
// log: 
// there are two method for this
// first one would be store to a map -> sort the map -> iterate the sorted map from right to left until K is 0
// this solution will have an O(nlogn) time complexity
// second solution will have an O(n) time complexity by using bucket sort algorithm
// the first step is the same, to store the frequent for each number onto a map
// then we will have a bucket (an array with length of nums.length and initial value of empty array) to track each frequent will contains which number
// store the value for each nums to the array with index of frequent
// then iterate through it from right to left until K is 0
// the bucket will probably look like this
// [[1], [], [3,4]]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let arr = Array.from({ length: nums.length }, () => []);
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (let [key, value] of map) {
    arr[value - 1].push(key);
  }

  let ans = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = 0; j < arr[i].length; j++) {
      ans.push(arr[i][j]);
      k -= 1;
      if (k === 0) break;
    }
    if (k === 0) break;
  }

  return ans;

  // let map = new Map(); // key: nums[i], value: nums occurence
  // for (let i = 0; i < nums.length; i++) {
  //     if (map.has(nums[i])) {
  //         map.set(nums[i], map.get(nums[i]) + 1);
  //     } else {
  //         map.set(nums[i], 1);
  //     }
  // }

  // const sortedEntries = [...map.entries()].sort((a, b) => b[1] - a[1]);
  // const sortedMap = new Map(sortedEntries);

  // let ans = [];
  // for (let [key, value] of sortedMap) {
  //     ans.push(key);
  //     k -= 1;
  //     if (k === 0) break;
  // }

  // return ans;
};