// link to leetcode: https://leetcode.com/problems/product-of-array-except-self/description/
// log:
// this problem is a tough one
// i can't solve on how to do it without brute force method
// took me a peek at the video solution on how to simulate the solution
// so first of we need to have a tracker for the current product from the left with initial value of 1
// then iterate through the nums and store the current product for each iteration.
// and also update the current product by multiplying it with the current nums
// second step would be iterate it again, but now from the right side
// for this one will be a bit different
// using the product store from the first step, we multiply the current index (iterate from right to left) with the current right product (with initial value of 1)
// then update the current right product with the current nums

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let ans = Array.from({ length: nums.length }, () => 1);

  let currLeft = 1;
  for (let i = 0; i < nums.length; i++) {
    ans[i] = currLeft;
    currLeft *= nums[i];
  }

  let currRight = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] *= currRight;
    currRight *= nums[i];
  }

  return ans;

  // let leftNums = Array.from({length: nums.length}, () => 1);
  // let rightNums = Array.from({length: nums.length}, () => 1);

  // for (let i = 0, j = nums.length-1; i < nums.length; i++, j--) {
  //     if (i === 0) {
  //         leftNums[i] = nums[i];
  //         rightNums[j] = nums[j];
  //     } else {
  //         leftNums[i] = nums[i] * leftNums[i-1];
  //         rightNums[j] *= nums[j] * rightNums[j+1];
  //     }
  // }

  // const ans = [];
  // for (let i = 0; i < nums.length; i++) {
  //     if (i === 0) {
  //         ans.push(rightNums[i+1]);
  //     } else if (i === nums.length-1) {
  //         ans.push(leftNums[i-1]);
  //     } else {
  //         ans.push(leftNums[i-1] * rightNums[i+1]);
  //     }
  // }
  // return ans;
};