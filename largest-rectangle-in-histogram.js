// link to leetcode: https://leetcode.com/problems/largest-rectangle-in-histogram/description/
// log:
// my first hard problem on leetcode, using stack algorithm
// cant solve this before looking neetcode video.
// pretty smart, to have the stack store the index and height
// then we pop the stack if the height on the top of the stack is higher than the current height
// calculate them is simple enough
// the clever part is when we push the current height, the index to put is the last index that just pop
// this way we can calculate the maximum area from the most left until the most right (or end of the histogram)

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  let stack = []; // [index, height]

  for (let i = 0; i < heights.length; i++) {
    let currIndex = i;
    while (stack.length > 0 && stack.at(-1)[1] >= heights[i]) {
      let [index, value] = stack.pop();
      let currArea = value * (i - index);
      if (currArea > maxArea) {
        maxArea = currArea;
      }
      currIndex = index;
    }
    stack.push([currIndex, heights[i]]);
  }

  for (let i = stack.length - 1; i >= 0; i--) {
    let [index, value] = stack[i];
    let currArea = value * (heights.length - index);
    if (currArea > maxArea) {
      maxArea = currArea;
    }
  }
  return maxArea;
};

// [2, 1, 5, 6, 2, 3]